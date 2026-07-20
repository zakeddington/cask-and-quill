import { KEY_ESCAPE } from '../config/constants.js';

export class BaseModal {
	constructor(modalRoot, options = {}) {
		this.options = {
			bodyClass: 'modal-is-open',
			closeSelector: '.modal-close',
			footerSelector: '.modal-footer',
			onSave: null,
			onDelete: null,
			...options,
		};

		this.el = {
			modalRoot,
		};

		this.state = {
			previousFocus: null,
		};

		this.addEventListeners();
	}

	get isOpen() { return false; }

	addEventListeners() {
		this.el.modalRoot.addEventListener('click', event => this.onModalClick(event));
		document.addEventListener('keydown', event => this.onKeydown(event));
	}

	onKeydown(event) {
		if (event.key === KEY_ESCAPE && this.isOpen) this.close();
	}

	open() {
		this.state.previousFocus = document.activeElement;
		document.body.classList.add(this.options.bodyClass);
		this.el.modalRoot.querySelector(this.options.closeSelector)?.focus();
	}

	close() {
		this.el.modalRoot.innerHTML = '';
		document.body.classList.remove(this.options.bodyClass);
		this.state.previousFocus?.focus?.();
		this.state.previousFocus = null;
	}

	onModalClick(event) {
		const btn = event.target.closest('[data-modal-action]');
		const action = btn?.dataset.modalAction;

		if (action === 'close') { this.close(); return; }
		if (action === 'delete-prompt') { this.showDeleteConfirm(); return; }
		if (action === 'delete-cancel') { this.hideDeleteConfirm(); return; }
		if (action === 'delete-execute') {
			this.options.onDelete?.(this.getDeleteTarget());
			this.close();
			return;
		}

		this.onAction(event, action, btn);
	}

	getDeleteTarget() { return null; }
	onAction(event, action, btn) {}

	showDeleteConfirm() {
		const footer = this.el.modalRoot.querySelector(this.options.footerSelector);
		if (!footer) return;
		footer.innerHTML = this.renderDeleteConfirm();
		footer.querySelector('[data-modal-action="delete-execute"]')?.focus();
	}

	hideDeleteConfirm() {
		const footer = this.el.modalRoot.querySelector(this.options.footerSelector);
		if (!footer) return;
		footer.innerHTML = this.renderFooter();
	}

	renderDeleteConfirm() { return ''; }
	renderFooter() { return ''; }
}
