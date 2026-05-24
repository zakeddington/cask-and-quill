const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

export class NavDrawer {
	constructor() {
		this.drawer = document.getElementById('nav-drawer');
		this.overlay = document.getElementById('nav-drawer-overlay');
		this.menuBtn = document.getElementById('nav-menu-btn');
		this.closeBtn = this.drawer?.querySelector('.nav-drawer-close');
		this.isOpen = false;

		this._handleKeydown = this._handleKeydown.bind(this);
	}

	init() {
		if (!this.drawer) return;
		this.menuBtn?.addEventListener('click', () => this.open());
		this.overlay?.addEventListener('click', () => this.close());
		this.closeBtn?.addEventListener('click', () => this.close());
	}

	open() {
		this.isOpen = true;
		this.drawer.classList.add('is-open');
		this.overlay?.classList.add('is-open');
		this.menuBtn?.setAttribute('aria-expanded', 'true');
		this.drawer.removeAttribute('aria-hidden');
		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', this._handleKeydown);
		this.closeBtn?.focus();
	}

	close() {
		this.isOpen = false;
		this.drawer.classList.remove('is-open');
		this.overlay?.classList.remove('is-open');
		this.menuBtn?.setAttribute('aria-expanded', 'false');
		this.drawer.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
		document.removeEventListener('keydown', this._handleKeydown);
		this.menuBtn?.focus();
	}

	_focusableElements() {
		return Array.from(this.drawer.querySelectorAll(FOCUSABLE)).filter(
			el => !el.closest('[hidden]') && getComputedStyle(el).display !== 'none'
		);
	}

	_handleKeydown(event) {
		if (event.key === 'Escape') {
			this.close();
			return;
		}

		if (event.key !== 'Tab') return;

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
