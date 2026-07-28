
import { KEY_ARROW_DOWN, KEY_ARROW_UP, KEY_HOME, KEY_END, KEY_ESCAPE } from '../config/constants.js';

export class AccordionGroup {
	constructor(elContainer, options = {}) {
		this.options = {
			selectorAccordion: '.accordion',
			selectorTrigger: '.accordion-trigger',
			classIsOpen: 'is-open',
			scrollSpeed: 350,
			...options,
		}

		this.el = {
			container: elContainer,
			triggers: elContainer.querySelectorAll(this.options.selectorTrigger),
		}

		this.addEventListeners();
	}

	toggleAccordion(elTrigger) {
		const elAccordion = elTrigger.closest(this.options.selectorAccordion);
		const elPanel = document.getElementById(elTrigger.getAttribute('aria-controls'));
		const isOpen = elTrigger.getAttribute('aria-expanded') === 'true';

		elTrigger.setAttribute('aria-expanded', String(!isOpen));
		elPanel.setAttribute('aria-hidden', String(isOpen));
		elAccordion.classList.toggle(this.options.classIsOpen, !isOpen);

		if (!isOpen) {
			elPanel.removeAttribute('inert');
			setTimeout(() => {
				elAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, this.options.scrollSpeed);
		} else {
			elPanel.setAttribute('inert', '');
		}
	}

	closeAccordion(elRegion) {
		const elTrigger = elRegion.querySelector(this.options.selectorTrigger);
		const elPanel = document.getElementById(elTrigger.getAttribute('aria-controls'));

		elTrigger.setAttribute('aria-expanded', 'false');
		elPanel.setAttribute('aria-hidden', 'true');
		elRegion.classList.remove(this.options.classIsOpen);
		elPanel.setAttribute('inert', '');
		elTrigger.focus();
	}

	onKeydown(event) {
		const isTrigger = event.target.matches(this.options.selectorTrigger);

		if (event.key === KEY_ESCAPE) {
			const elAccordion = event.target.closest(this.options.selectorAccordion);
			const isOpen = elAccordion?.classList.contains(this.options.classIsOpen);
			if (elAccordion && isOpen) {
				this.closeAccordion(elAccordion);
			}
		}

		if (isTrigger) {
			const elCurrentTrigger = event.target;
			const currentIndex = Array.from(this.el.triggers).indexOf(elCurrentTrigger);
			let nextIndex = currentIndex;

			switch (event.key) {
				case KEY_ARROW_DOWN:
					event.preventDefault();
					nextIndex = (currentIndex + 1) % this.el.triggers.length;
					this.el.triggers[nextIndex].focus();
					break;
				case KEY_ARROW_UP:
					event.preventDefault();
					nextIndex = (currentIndex - 1 + this.el.triggers.length) % this.el.triggers.length;
					this.el.triggers[nextIndex].focus();
					break;
				case KEY_HOME:
					event.preventDefault();
					this.el.triggers[0].focus();
					break;
				case KEY_END:
					event.preventDefault();
					this.el.triggers[this.el.triggers.length - 1].focus();
					break;
			}

			this.el.triggers[nextIndex].focus();
		}
	}

	addEventListeners() {
		this.el.triggers.forEach(elTrigger => {
			elTrigger.addEventListener('click', () => this.toggleAccordion(elTrigger));
		});

		this.el.container.addEventListener('keydown', event => this.onKeydown(event));
	}
}
