import { KEY_ESCAPE, KEY_TAB } from '../config/constants.js';

export class BaseDrawer {
	constructor(drawerEl, overlayEl, { triggerEl, closeSelector = '.drawer-close', bodyClass = 'drawer-is-open', trapFocus = true } = {}) {
		this.drawerEl = drawerEl;
		this.overlayEl = overlayEl;
		this.triggerEl = triggerEl;
		this.closeSelector = closeSelector;
		this.bodyClass = bodyClass;
		this.trapFocus = trapFocus;
		this.isOpen = false;
		this.previousFocus = null;

		this.focusableSelectors = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

		this._handleKeydown = this._handleKeydown.bind(this);
	}

	init() {
		if (!this.drawerEl) return;
		this.triggerEl?.addEventListener('click', () => this.open());
		this.overlayEl?.addEventListener('click', () => this.close());
		this.drawerEl.querySelector(this.closeSelector)?.addEventListener('click', () => this.close());
	}

	open() {
		this.previousFocus = document.activeElement;
		this.isOpen = true;
		this.drawerEl.classList.add('is-open');
		this.overlayEl?.classList.add('is-open');
		this.triggerEl?.setAttribute('aria-expanded', 'true');
		this.drawerEl.setAttribute('aria-hidden', 'false');
		document.body.classList.add(this.bodyClass);
		document.addEventListener('keydown', this._handleKeydown);
		this.drawerEl.querySelector(this.closeSelector)?.focus();
	}

	close() {
		this.isOpen = false;
		this.drawerEl.classList.remove('is-open');
		this.overlayEl?.classList.remove('is-open');
		this.triggerEl?.setAttribute('aria-expanded', 'false');
		this.drawerEl.setAttribute('aria-hidden', 'true');
		document.body.classList.remove(this.bodyClass);
		document.removeEventListener('keydown', this._handleKeydown);
		this.previousFocus?.focus?.();
		this.previousFocus = null;
	}

	_focusableElements() {
		return Array.from(this.drawerEl.querySelectorAll(this.focusableSelectors)).filter(
			el => !el.closest('[hidden]') && getComputedStyle(el).display !== 'none'
		);
	}

	_handleKeydown(event) {
		if (event.key === KEY_ESCAPE) {
			this.close();
			return;
		}

		if (!this.trapFocus || event.key !== KEY_TAB) return;

		const focusable = this._focusableElements();
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
