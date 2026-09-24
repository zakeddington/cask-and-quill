import { html, createEl } from '../utils.js';
import { BaseModal } from './modal.js';
import { SPRITE_URL } from '../config/constants.js';

export class ModalEditFlavor extends BaseModal {
	constructor(modalRoot, options) {
		super(modalRoot, options);
		this.state.currentFamily = null;
		this.state.editState = null;
	}

	get isOpen() { return this.state.currentFamily !== null; }
	getDeleteTarget() { return this.state.currentFamily.id; }

	open(family) {
		this.state.currentFamily = family;
		this.state.editState = this.cloneFamily(family);
		this.el.modalRoot.innerHTML = this.renderModal();
		super.open();
	}

	close() {
		this.state.currentFamily = null;
		this.state.editState = null;
		super.close();
	}

	cloneFamily(family) {
		return {
			id: family.id,
			name: family.name,
			desc: family.desc,
			subs: (family.subs || []).map(s => ({
				name: s.name,
				terms: [...(s.terms || [])]
			}))
		};
	}

	// Read all current input values from the DOM into editState.
	syncFromDom() {
		const nameInput = this.el.modalRoot.querySelector('.flavor-editor__name-input');
		const descInput = this.el.modalRoot.querySelector('.flavor-editor__desc-input');
		if (nameInput) this.state.editState.name = nameInput.value;
		if (descInput) this.state.editState.desc = descInput.value;

		this.state.editState.subs = [...this.el.modalRoot.querySelectorAll('.flavor-editor__sub-item')].map(subEl => ({
			name: subEl.querySelector('.flavor-editor__sub-name')?.value ?? '',
			terms: [...subEl.querySelectorAll('.flavor-editor__term-input')].map(t => t.value)
		}));
	}

	// Update data-sub-idx on all action buttons inside every sub-item and refresh disabled states.
	reindexSubs() {
		const subItems = [...this.el.modalRoot.querySelectorAll('.flavor-editor__sub-item')];
		const totalSubs = subItems.length;
		subItems.forEach((subEl, si) => {
			subEl.querySelectorAll('.modal__action').forEach(el => { el.dataset.subIdx = si; });
			const upBtn = subEl.querySelector('.flavor-editor__sub-header .flavor-editor__reorder-btn--up');
			const downBtn = subEl.querySelector('.flavor-editor__sub-header .flavor-editor__reorder-btn--down');
			if (upBtn) upBtn.disabled = si === 0;
			if (downBtn) downBtn.disabled = si === totalSubs - 1;
			this.reindexTerms(subEl, si);
		});
	}

	// Update data-term-idx / data-sub-idx on all term rows within a sub and refresh disabled states.
	reindexTerms(subEl, si) {
		const termRows = [...subEl.querySelectorAll('.flavor-editor__term-row')];
		const totalTerms = termRows.length;
		termRows.forEach((termRow, ti) => {
			termRow.querySelectorAll('.modal__action').forEach(el => {
				el.dataset.subIdx = si;
				el.dataset.termIdx = ti;
			});
			const upBtn = termRow.querySelector('.flavor-editor__reorder-btn--up');
			const downBtn = termRow.querySelector('.flavor-editor__reorder-btn--down');
			if (upBtn) upBtn.disabled = ti === 0;
			if (downBtn) downBtn.disabled = ti === totalTerms - 1;
		});
	}

	onAction(event, action, btn) {
		const subIdx = btn?.dataset.subIdx !== undefined ? parseInt(btn.dataset.subIdx) : null;
		const termIdx = btn?.dataset.termIdx !== undefined ? parseInt(btn.dataset.termIdx) : null;

		if (action === 'save') {
			this.handleSave();
		} else if (action === 'sub-up' && subIdx !== null) {
			this.moveSub(subIdx, -1);
		} else if (action === 'sub-down' && subIdx !== null) {
			this.moveSub(subIdx, 1);
		} else if (action === 'remove-sub' && subIdx !== null) {
			this.removeSub(subIdx);
		} else if (action === 'add-sub') {
			this.addSub();
		} else if (action === 'term-up' && subIdx !== null && termIdx !== null) {
			this.moveTerm(subIdx, termIdx, -1);
		} else if (action === 'term-down' && subIdx !== null && termIdx !== null) {
			this.moveTerm(subIdx, termIdx, 1);
		} else if (action === 'remove-term' && subIdx !== null && termIdx !== null) {
			this.removeTerm(subIdx, termIdx);
		} else if (action === 'add-term' && subIdx !== null) {
			this.addTerm(subIdx);
		}
	}

	// ——— Sub-category mutations ———

	moveSub(idx, dir) {
		this.syncFromDom();
		const subItems = [...this.el.modalRoot.querySelectorAll('.flavor-editor__sub-item')];
		const target = subItems[idx];
		const sibling = subItems[idx + dir];
		if (!target || !sibling) return;

		const arr = this.state.editState.subs;
		[arr[idx], arr[idx + dir]] = [arr[idx + dir], arr[idx]];

		if (dir === -1) {
			sibling.before(target);
		} else {
			sibling.after(target);
		}

		this.reindexSubs();
		target.querySelector(`.flavor-editor__sub-header .flavor-editor__reorder-btn--${dir === -1 ? 'up' : 'down'}`)?.focus();
	}

	removeSub(idx) {
		this.syncFromDom();
		this.state.editState.subs.splice(idx, 1);

		const subItems = [...this.el.modalRoot.querySelectorAll('.flavor-editor__sub-item')];
		subItems[idx]?.remove();
		this.reindexSubs();
	}

	addSub() {
		this.syncFromDom();
		const newSub = { name: '', terms: [''] };
		this.state.editState.subs.push(newSub);

		const si = this.state.editState.subs.length - 1;
		const total = this.state.editState.subs.length;
		const subEl = createEl(this.renderSub(newSub, si, total));

		this.el.modalRoot.querySelector('.flavor-editor__subs-list')?.appendChild(subEl);
		this.reindexSubs();
		subEl.querySelector('.flavor-editor__sub-name')?.focus();
	}

	// ——— Term mutations ———

	moveTerm(subIdx, termIdx, dir) {
		this.syncFromDom();
		const subItems = [...this.el.modalRoot.querySelectorAll('.flavor-editor__sub-item')];
		const subEl = subItems[subIdx];
		if (!subEl) return;

		const termRows = [...subEl.querySelectorAll('.flavor-editor__term-row')];
		const target = termRows[termIdx];
		const sibling = termRows[termIdx + dir];
		if (!target || !sibling) return;

		const terms = this.state.editState.subs[subIdx]?.terms;
		if (terms) [terms[termIdx], terms[termIdx + dir]] = [terms[termIdx + dir], terms[termIdx]];

		if (dir === -1) {
			sibling.before(target);
		} else {
			sibling.after(target);
		}

		this.reindexTerms(subEl, subIdx);
		target.querySelector(`.flavor-editor__reorder-btn--${dir === -1 ? 'up' : 'down'}`)?.focus();
	}

	removeTerm(subIdx, termIdx) {
		this.syncFromDom();
		this.state.editState.subs[subIdx]?.terms.splice(termIdx, 1);

		const subItems = [...this.el.modalRoot.querySelectorAll('.flavor-editor__sub-item')];
		const subEl = subItems[subIdx];
		if (!subEl) return;

		subEl.querySelectorAll('.flavor-editor__term-row')[termIdx]?.remove();
		this.reindexTerms(subEl, subIdx);
	}

	addTerm(subIdx) {
		this.syncFromDom();
		this.state.editState.subs[subIdx]?.terms.push('');

		const subItems = [...this.el.modalRoot.querySelectorAll('.flavor-editor__sub-item')];
		const subEl = subItems[subIdx];
		if (!subEl) return;

		const ti = subEl.querySelectorAll('.flavor-editor__term-row').length;
		const total = ti + 1;
		const termEl = createEl(this.renderTerm('', subIdx, ti, total));

		subEl.querySelector('.flavor-editor__terms-list')?.appendChild(termEl);
		this.reindexTerms(subEl, subIdx);
		termEl.querySelector('.flavor-editor__term-input')?.focus();
	}

	// ——— Save ———

	handleSave() {
		this.syncFromDom();
		const updated = {
			...this.state.currentFamily,
			name: this.state.editState.name,
			desc: this.state.editState.desc,
			subs: this.state.editState.subs
				.map(s => ({ name: s.name.trim(), terms: s.terms.filter(t => t.trim()) }))
				.filter(s => s.name)
		};
		this.options.onSave(updated);
		this.close();
	}

	// ——— Templates ———

	renderDeleteConfirm() {
		return `
			<p class="modal__confirm-text">Delete <strong>${html(this.state.currentFamily.name)}</strong>? This cannot be undone.</p>
			<div class="modal__footer-col">
				<button class="modal__action button button--secondary" type="button" data-modal-action="delete-cancel">Cancel</button>
				<button class="modal__action modal__confirm-btn button button--destructive" type="button" data-modal-action="delete-execute">Delete</button>
			</div>
		`;
	}

	renderFooter() {
		return `
			<div class="modal__footer-col">
				<button class="modal__action button button--tertiary" type="button" data-modal-action="delete-prompt">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-prohibit"></use></svg>
					Delete Family
				</button>
			</div>
			<div class="modal__footer-col">
				<button class="modal__action button button--secondary" type="button" data-modal-action="close">Cancel</button>
				<button class="modal__action button" type="button" data-modal-action="save">Save Changes</button>
			</div>
		`;
	}

	renderModal() {
		const s = this.state.editState;
		return `
			<div class="modal modal--narrow" role="dialog" aria-modal="true" aria-labelledby="flavor-modal-title">
				<button class="modal__action modal__overlay" type="button" data-modal-action="close" aria-label="Close modal"></button>
				<div class="modal__panel flavor-editor">
					<header class="modal__header">
						<h2 id="flavor-modal-title" class="modal__title">Edit Flavor Family</h2>
						<button class="modal__action modal__close button button--icon-only" type="button" data-modal-action="close" aria-label="Close modal">
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
						</button>
					</header>

					<div class="modal__body">
						<fieldset class="modal__fieldset">
							<legend>Family Details</legend>
							<div class="flavor-editor__detail-fields">
								<label class="modal__field">
									<span class="modal__field-label">Name</span>
									<input class="flavor-editor__name-input" type="text" value="${html(s.name)}" placeholder="Family name">
								</label>
								<label class="modal__field flavor-editor__field-full">
									<span class="modal__field-label">Description</span>
									<input class="flavor-editor__desc-input" type="text" value="${html(s.desc)}" placeholder="Short description">
								</label>
							</div>
						</fieldset>

						<fieldset class="modal__fieldset">
							<legend>Sub-categories</legend>
							<div class="flavor-editor__subs-list">
								${s.subs.map((sub, si) => this.renderSub(sub, si, s.subs.length)).join('')}
							</div>
							<button class="modal__action button button--tertiary" type="button" data-modal-action="add-sub">
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-plus"></use></svg>
								Add sub-category
							</button>
						</fieldset>
					</div>

					<footer class="modal__footer">
						${this.renderFooter()}
					</footer>
				</div>
			</div>
		`;
	}

	renderSub(sub, si, total) {
		return `
			<div class="flavor-editor__sub-item">
				<div class="flavor-editor__sub-header">
					<div class="flavor-editor__reorder-btns">
						<button class="modal__action flavor-editor__reorder-btn flavor-editor__reorder-btn--up button button--icon-only" type="button" data-modal-action="sub-up" data-sub-idx="${si}" aria-label="Move sub-category up"${si === 0 ? ' disabled' : ''}>
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-up"></use></svg>
						</button>
						<button class="modal__action flavor-editor__reorder-btn flavor-editor__reorder-btn--down button button--icon-only" type="button" data-modal-action="sub-down" data-sub-idx="${si}" aria-label="Move sub-category down"${si === total - 1 ? ' disabled' : ''}>
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
						</button>
					</div>
					<input class="flavor-editor__sub-name" type="text" placeholder="Sub-category name" value="${html(sub.name)}">
					<button class="modal__action flavor-editor__remove-btn button button--icon-only" type="button" data-modal-action="remove-sub" data-sub-idx="${si}" aria-label="Remove sub-category">
						<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
					</button>
				</div>
				<div class="flavor-editor__terms-list">
					${sub.terms.map((term, ti) => this.renderTerm(term, si, ti, sub.terms.length)).join('')}
				</div>
				<button class="modal__action button button--tertiary flavor-editor__terms-add-btn" type="button" data-modal-action="add-term" data-sub-idx="${si}">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-plus"></use></svg>
					Add term
				</button>
			</div>
		`;
	}

	renderTerm(term, si, ti, total) {
		return `
			<div class="flavor-editor__term-row">
				<div class="flavor-editor__reorder-btns">
					<button class="modal__action flavor-editor__reorder-btn flavor-editor__reorder-btn--up button button--icon-only" type="button" data-modal-action="term-up" data-sub-idx="${si}" data-term-idx="${ti}" aria-label="Move term up"${ti === 0 ? ' disabled' : ''}>
						<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-up"></use></svg>
					</button>
					<button class="modal__action flavor-editor__reorder-btn flavor-editor__reorder-btn--down button button--icon-only" type="button" data-modal-action="term-down" data-sub-idx="${si}" data-term-idx="${ti}" aria-label="Move term down"${ti === total - 1 ? ' disabled' : ''}>
						<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
					</button>
				</div>
				<input class="flavor-editor__term-input" type="text" placeholder="Flavor term" value="${html(term)}">
				<button class="modal__action flavor-editor__remove-btn button button--icon-only" type="button" data-modal-action="remove-term" data-sub-idx="${si}" data-term-idx="${ti}" aria-label="Remove term">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
				</button>
			</div>
		`;
	}
}
