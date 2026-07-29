
import { KEY_ARROW_DOWN, KEY_ARROW_UP, KEY_HOME, KEY_END, KEY_ESCAPE } from '../config/constants.js';

export class AccordionGroup {
	constructor(elContainer, options = {}) {
		this.options = {
			selectorAccordion: '.accordion',
			selectorTrigger: '.accordion-trigger',
			classIsOpen: 'is-open',
			scrollSpeed: 350,
			scrollBlock: 'start',
			allowMultiple: true,
			onToggleCallback: null,
			...options,
		}

		this.el = {
			container: elContainer,
		}

		this.addEventListeners();
	}

	getTriggers() {
		return Array.from(this.el.container.querySelectorAll(this.options.selectorTrigger));
	}

	toggleAccordion(elAccordion, isOpen, focusTrigger = false) {
		const elTrigger = elAccordion.querySelector(this.options.selectorTrigger);
		const elPanel = document.getElementById(elTrigger.getAttribute('aria-controls'));

		elTrigger.setAttribute('aria-expanded', String(isOpen));
		elPanel.setAttribute('aria-hidden', String(!isOpen));
		elAccordion.classList.toggle(this.options.classIsOpen, isOpen);

		if (isOpen) {
			elPanel.removeAttribute('inert');
			setTimeout(() => {
				elAccordion.scrollIntoView({ behavior: 'smooth', block: this.options.scrollBlock });
			}, this.options.scrollSpeed);
		} else {
			elPanel.setAttribute('inert', '');
		}

		if (focusTrigger) {
			elTrigger.focus();
		}

		this.options.onToggleCallback?.(elAccordion, elTrigger, isOpen);
	}

	closeOthers(elCurrentAccordion) {
		const selectorOpenAccordions = `${this.options.selectorAccordion}.${this.options.classIsOpen}`;
		this.el.container.querySelectorAll(selectorOpenAccordions).forEach(elAccordion => {
			if (elAccordion !== elCurrentAccordion) {
				this.toggleAccordion(elAccordion, false);
			}
		});
	}

	onTriggerClick(elTrigger) {
		const elAccordion = elTrigger.closest(this.options.selectorAccordion);
		const isOpen = elTrigger.getAttribute('aria-expanded') === 'true';

		if (!this.options.allowMultiple && !isOpen) {
			this.closeOthers(elAccordion);
		}

		this.toggleAccordion(elAccordion, !isOpen);
	}

	onKeydown(event) {
		const isTrigger = event.target.matches(this.options.selectorTrigger);

		if (event.key === KEY_ESCAPE) {
			const elAccordion = event.target.closest(this.options.selectorAccordion);
			const isOpen = elAccordion?.classList.contains(this.options.classIsOpen);
			if (elAccordion && isOpen) {
				this.toggleAccordion(elAccordion, false, true);
			}
		}

		if (isTrigger) {
			const elCurrentTrigger = event.target;
			const triggers = this.getTriggers();
			const currentIndex = triggers.indexOf(elCurrentTrigger);
			let nextIndex = currentIndex;

			switch (event.key) {
				case KEY_ARROW_DOWN:
					event.preventDefault();
					nextIndex = (currentIndex + 1) % triggers.length;
					break;
				case KEY_ARROW_UP:
					event.preventDefault();
					nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
					break;
				case KEY_HOME:
					event.preventDefault();
					nextIndex = 0;
					break;
				case KEY_END:
					event.preventDefault();
					nextIndex = triggers.length - 1;
					break;
				default:
					return;
			}

			triggers[nextIndex].focus();
		}
	}

	addEventListeners() {
		this.el.container.addEventListener('click', event => {
			const elTrigger = event.target.closest(this.options.selectorTrigger);
			if (elTrigger) {
				this.onTriggerClick(elTrigger);
			}
		});

		this.el.container.addEventListener('keydown', event => this.onKeydown(event));
	}
}
