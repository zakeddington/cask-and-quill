export class BaseModal {
	constructor(modalRoot, { onSave, onDelete } = {}) {
		this.modalRoot = modalRoot;
		this.onSave = onSave;
		this.onDelete = onDelete;
		this.previousFocus = null;
		this.bodyClass = 'modal-is-open';
	}

	get isOpen() { return false; }

	setupEventListeners() {
		this.modalRoot.addEventListener('click', e => this.handleClick(e));
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape' && this.isOpen) this.close();
		});
	}

	open() {
		this.previousFocus = document.activeElement;
		document.body.classList.add(this.bodyClass);
		this.modalRoot.querySelector('.modal-close')?.focus();
	}

	close() {
		this.modalRoot.innerHTML = '';
		document.body.classList.remove(this.bodyClass);
		this.previousFocus?.focus?.();
		this.previousFocus = null;
	}

	handleClick(event) {
		const btn = event.target.closest('[data-modal-action]');
		const action = btn?.dataset.modalAction;

		if (action === 'close') { this.close(); return; }
		if (action === 'delete-prompt') { this.showDeleteConfirm(); return; }
		if (action === 'delete-cancel') { this.hideDeleteConfirm(); return; }
		if (action === 'delete-execute') {
			this.onDelete?.(this.getDeleteTarget());
			this.close();
			return;
		}

		this.onAction(event, action, btn);
	}

	getDeleteTarget() { return null; }
	onAction(event, action, btn) {}

	showDeleteConfirm() {
		const footer = this.modalRoot.querySelector('.modal-footer');
		if (!footer) return;
		footer.innerHTML = this.renderDeleteConfirm();
		footer.querySelector('[data-modal-action="delete-execute"]')?.focus();
	}

	hideDeleteConfirm() {
		const footer = this.modalRoot.querySelector('.modal-footer');
		if (!footer) return;
		footer.innerHTML = this.renderFooter();
	}

	renderDeleteConfirm() { return ''; }
	renderFooter() { return ''; }
}
