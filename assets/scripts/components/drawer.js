import { KEY_ESCAPE, KEY_TAB } from '../config/constants.js';

export class BaseDrawer {
	constructor(triggerEl, options = {}) {
		this.options = {
			overlaySelector: '.drawer-overlay',
			closeSelector: '.drawer-close',
			bodyClass: 'drawer-is-open',
			focusableSelectors: 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
			isAdmin: false,
			...options,
		};

		this.el = {
			trigger: triggerEl,
			drawer: document.getElementById(triggerEl?.getAttribute('aria-controls')),
			overlay: null,
		};
		this.el.overlay = this.el.drawer?.querySelector(this.options.overlaySelector);

		this.state = {
			isOpen: false,
			previousFocus: null,
		};

		this.events = {
			onKeydown: this.onKeydown.bind(this),
		};

		this.addEventListeners();
	}

	addEventListeners() {
		if (!this.el.drawer) return;
		this.el.trigger?.addEventListener('click', () => this.open());
		this.el.overlay?.addEventListener('click', () => this.close());
		this.el.drawer.querySelector(this.options.closeSelector)?.addEventListener('click', () => this.close());
	}

	open() {
		this.state.previousFocus = document.activeElement;
		this.state.isOpen = true;
		this.el.drawer.classList.add('is-open');
		this.el.trigger?.setAttribute('aria-expanded', 'true');
		this.el.drawer.setAttribute('aria-hidden', 'false');
		document.body.classList.add(this.options.bodyClass);
		document.addEventListener('keydown', this.events.onKeydown);
		this.el.drawer.querySelector(this.options.closeSelector)?.focus();
	}

	close() {
		this.state.isOpen = false;
		this.el.drawer.classList.remove('is-open');
		this.el.trigger?.setAttribute('aria-expanded', 'false');
		this.el.drawer.setAttribute('aria-hidden', 'true');
		document.body.classList.remove(this.options.bodyClass);
		document.removeEventListener('keydown', this.events.onKeydown);
		this.state.previousFocus?.focus?.();
		this.state.previousFocus = null;
	}

	getFocusableElements() {
		return Array.from(this.el.drawer.querySelectorAll(this.options.focusableSelectors)).filter(
			el => !el.closest('[hidden]') && getComputedStyle(el).display !== 'none'
		);
	}

	onKeydown(event) {
		if (event.key === KEY_ESCAPE) {
			this.close();
			return;
		}

		if (event.key !== KEY_TAB) return;

		const focusable = this.getFocusableElements();
		if (!focusable.length) return;

		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (event.shiftKey) {
			if (document.activeElement === first) {
				event.preventDefault();
				last.focus();
			}
		} else {
			if (document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	}
}
