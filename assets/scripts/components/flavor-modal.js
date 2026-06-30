import { escapeHtml } from '../utils.js';

const SPRITE_URL = '/assets/images/icon-sprite.svg';

function html(value) {
	return escapeHtml(String(value ?? ''));
}

function createEl(htmlString) {
	const div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	return div.firstElementChild;
}

export class FlavorModal {
	constructor(modalRoot, { onSave, onDelete }) {
		this.modalRoot = modalRoot;
		this.onSave = onSave;
		this.onDelete = onDelete;
		this.currentFamily = null;
		this.editState = null;
		this.previousFocus = null;
		this.setupEventListeners();
	}

	setupEventListeners() {
		this.modalRoot.addEventListener('click', e => this.handleClick(e));
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape' && this.currentFamily) this.close();
		});
	}

	open(family) {
		this.currentFamily = family;
		this.editState = this.cloneFamily(family);
		this.previousFocus = document.activeElement;
		this.modalRoot.innerHTML = this.renderModal();
		document.body.classList.add('flavor-modal-is-open');
		this.modalRoot.querySelector('.flavor-modal-close')?.focus();
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

	close() {
		this.modalRoot.innerHTML = '';
		this.currentFamily = null;
		this.editState = null;
		document.body.classList.remove('flavor-modal-is-open');
		this.previousFocus?.focus?.();
		this.previousFocus = null;
	}

	// Read all current input values from the DOM into editState.
	syncFromDom() {
		const nameInput = this.modalRoot.querySelector('[data-field="name"]');
		const descInput = this.modalRoot.querySelector('[data-field="desc"]');
		if (nameInput) this.editState.name = nameInput.value;
		if (descInput) this.editState.desc = descInput.value;

		this.editState.subs = [...this.modalRoot.querySelectorAll('[data-sub-item]')].map(subEl => ({
			name: subEl.querySelector('[data-sub-name]')?.value ?? '',
			terms: [...subEl.querySelectorAll('[data-term-input]')].map(t => t.value)
		}));
	}

	// Update data-sub-idx on all buttons/inputs inside every sub-item and refresh disabled states.
	reindexSubs() {
		const subItems = [...this.modalRoot.querySelectorAll('[data-sub-item]')];
		const totalSubs = subItems.length;
		subItems.forEach((subEl, si) => {
			subEl.querySelectorAll('[data-sub-idx]').forEach(el => { el.dataset.subIdx = si; });
			const upBtn = subEl.querySelector('[data-modal-action="sub-up"]');
			const downBtn = subEl.querySelector('[data-modal-action="sub-down"]');
			if (upBtn) upBtn.disabled = si === 0;
			if (downBtn) downBtn.disabled = si === totalSubs - 1;
			this.reindexTerms(subEl, si);
		});
	}

	// Update data-term-idx / data-sub-idx on all term rows within a sub and refresh disabled states.
	reindexTerms(subEl, si) {
		const termRows = [...subEl.querySelectorAll('.flavor-term-row')];
		const totalTerms = termRows.length;
		termRows.forEach((termRow, ti) => {
			termRow.querySelectorAll('[data-sub-idx]').forEach(el => { el.dataset.subIdx = si; });
			termRow.querySelectorAll('[data-term-idx]').forEach(el => { el.dataset.termIdx = ti; });
			const upBtn = termRow.querySelector('[data-modal-action="term-up"]');
			const downBtn = termRow.querySelector('[data-modal-action="term-down"]');
			if (upBtn) upBtn.disabled = ti === 0;
			if (downBtn) downBtn.disabled = ti === totalTerms - 1;
		});
	}

	handleClick(e) {
		const btn = e.target.closest('[data-modal-action]');
		if (!btn) return;

		const action = btn.dataset.modalAction;
		const subIdx = btn.dataset.subIdx !== undefined ? parseInt(btn.dataset.subIdx) : null;
		const termIdx = btn.dataset.termIdx !== undefined ? parseInt(btn.dataset.termIdx) : null;

		if (action === 'close') {
			this.close();
		} else if (action === 'save') {
			this.handleSave();
		} else if (action === 'delete-prompt') {
			this.showDeleteConfirm();
		} else if (action === 'delete-cancel') {
			this.hideDeleteConfirm();
		} else if (action === 'delete-execute') {
			this.onDelete(this.currentFamily.id);
			this.close();
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
		const subItems = [...this.modalRoot.querySelectorAll('[data-sub-item]')];
		const target = subItems[idx];
		const sibling = subItems[idx + dir];
		if (!target || !sibling) return;

		const arr = this.editState.subs;
		[arr[idx], arr[idx + dir]] = [arr[idx + dir], arr[idx]];

		if (dir === -1) {
			sibling.before(target);
		} else {
			sibling.after(target);
		}

		this.reindexSubs();
		target.querySelector(`[data-modal-action="sub-${dir === -1 ? 'up' : 'down'}"]`)?.focus();
	}

	removeSub(idx) {
		this.syncFromDom();
		this.editState.subs.splice(idx, 1);

		const subItems = [...this.modalRoot.querySelectorAll('[data-sub-item]')];
		subItems[idx]?.remove();
		this.reindexSubs();
	}

	addSub() {
		this.syncFromDom();
		const newSub = { name: '', terms: [''] };
		this.editState.subs.push(newSub);

		const si = this.editState.subs.length - 1;
		const total = this.editState.subs.length;
		const subEl = createEl(this.renderSub(newSub, si, total));

		this.modalRoot.querySelector('.flavor-subs-list')?.appendChild(subEl);
		this.reindexSubs();
		subEl.querySelector('[data-sub-name]')?.focus();
	}

	// ——— Term mutations ———

	moveTerm(subIdx, termIdx, dir) {
		this.syncFromDom();
		const subItems = [...this.modalRoot.querySelectorAll('[data-sub-item]')];
		const subEl = subItems[subIdx];
		if (!subEl) return;

		const termRows = [...subEl.querySelectorAll('.flavor-term-row')];
		const target = termRows[termIdx];
		const sibling = termRows[termIdx + dir];
		if (!target || !sibling) return;

		const terms = this.editState.subs[subIdx]?.terms;
		if (terms) [terms[termIdx], terms[termIdx + dir]] = [terms[termIdx + dir], terms[termIdx]];

		if (dir === -1) {
			sibling.before(target);
		} else {
			sibling.after(target);
		}

		this.reindexTerms(subEl, subIdx);
		target.querySelector(`[data-modal-action="term-${dir === -1 ? 'up' : 'down'}"]`)?.focus();
	}

	removeTerm(subIdx, termIdx) {
		this.syncFromDom();
		this.editState.subs[subIdx]?.terms.splice(termIdx, 1);

		const subItems = [...this.modalRoot.querySelectorAll('[data-sub-item]')];
		const subEl = subItems[subIdx];
		if (!subEl) return;

		subEl.querySelectorAll('.flavor-term-row')[termIdx]?.remove();
		this.reindexTerms(subEl, subIdx);
	}

	addTerm(subIdx) {
		this.syncFromDom();
		this.editState.subs[subIdx]?.terms.push('');

		const subItems = [...this.modalRoot.querySelectorAll('[data-sub-item]')];
		const subEl = subItems[subIdx];
		if (!subEl) return;

		const ti = subEl.querySelectorAll('.flavor-term-row').length;
		const total = ti + 1;
		const termEl = createEl(this.renderTerm('', subIdx, ti, total));

		subEl.querySelector('.flavor-terms-list')?.appendChild(termEl);
		this.reindexTerms(subEl, subIdx);
		termEl.querySelector('[data-term-input]')?.focus();
	}

	// ——— Save / Delete ———

	handleSave() {
		this.syncFromDom();
		const updated = {
			...this.currentFamily,
			name: this.editState.name,
			desc: this.editState.desc,
			subs: this.editState.subs
				.map(s => ({ name: s.name.trim(), terms: s.terms.filter(t => t.trim()) }))
				.filter(s => s.name)
		};
		this.onSave(updated);
		this.close();
	}

	showDeleteConfirm() {
		const footer = this.modalRoot.querySelector('.flavor-modal-footer');
		if (!footer) return;
		footer.innerHTML = `
			<p class="flavor-modal-confirm-text">Delete <strong>${html(this.currentFamily.name)}</strong>? This cannot be undone.</p>
			<div class="flavor-modal-footer-col">
				<button class="button-secondary" type="button" data-modal-action="delete-cancel">Cancel</button>
				<button class="button-danger" type="button" data-modal-action="delete-execute">Delete</button>
			</div>
		`;
		footer.querySelector('[data-modal-action="delete-execute"]')?.focus();
	}

	hideDeleteConfirm() {
		const footer = this.modalRoot.querySelector('.flavor-modal-footer');
		if (!footer) return;
		footer.innerHTML = this.renderFooter();
	}

	// ——— Templates ———

	renderFooter() {
		return `
			<div class="flavor-modal-footer-col">
				<button class="button-tertiary" type="button" data-modal-action="delete-prompt">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-prohibit"></use></svg>
					Delete Family
				</button>
			</div>
			<div class="flavor-modal-footer-col">
				<button class="button-secondary" type="button" data-modal-action="close">Cancel</button>
				<button class="button-primary" type="button" data-modal-action="save">Save Changes</button>
			</div>
		`;
	}

	renderModal() {
		const s = this.editState;
		return `
			<div class="flavor-modal" role="dialog" aria-modal="true" aria-labelledby="flavor-modal-title">
				<button class="flavor-modal-overlay" type="button" data-modal-action="close" aria-label="Close modal"></button>
				<div class="flavor-modal-panel">
					<header class="flavor-modal-header">
						<h2 id="flavor-modal-title">Edit Flavor Family</h2>
						<button class="flavor-modal-close" type="button" data-modal-action="close" aria-label="Close modal">
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
						</button>
					</header>

					<div class="flavor-modal-body">
						<fieldset class="flavor-modal-fieldset">
							<legend>Family Details</legend>
							<div class="flavor-detail-fields">
								<label class="flavor-modal-field">
									<span>Name</span>
									<input type="text" data-field="name" value="${html(s.name)}" placeholder="Family name">
								</label>
								<label class="flavor-modal-field flavor-field-full">
									<span>Description</span>
									<input type="text" data-field="desc" value="${html(s.desc)}" placeholder="Short description">
								</label>
							</div>
						</fieldset>

						<fieldset class="flavor-modal-fieldset">
							<legend>Sub-categories</legend>
							<div class="flavor-subs-list">
								${s.subs.map((sub, si) => this.renderSub(sub, si, s.subs.length)).join('')}
							</div>
							<button class="flavor-add-btn" type="button" data-modal-action="add-sub">
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-plus"></use></svg>
								Add sub-category
							</button>
						</fieldset>
					</div>

					<footer class="flavor-modal-footer">
						${this.renderFooter()}
					</footer>
				</div>
			</div>
		`;
	}

	renderSub(sub, si, total) {
		return `
			<div class="flavor-sub-item" data-sub-item>
				<div class="flavor-sub-header">
					<div class="flavor-reorder-btns">
						<button class="flavor-reorder-btn" type="button" data-modal-action="sub-up" data-sub-idx="${si}" aria-label="Move sub-category up"${si === 0 ? ' disabled' : ''}>
							<svg class="svg-icon flavor-caret-up" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
						</button>
						<button class="flavor-reorder-btn" type="button" data-modal-action="sub-down" data-sub-idx="${si}" aria-label="Move sub-category down"${si === total - 1 ? ' disabled' : ''}>
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
						</button>
					</div>
					<input class="flavor-sub-name" type="text" data-sub-name placeholder="Sub-category name" value="${html(sub.name)}">
					<button class="flavor-remove-btn" type="button" data-modal-action="remove-sub" data-sub-idx="${si}" aria-label="Remove sub-category">
						<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
					</button>
				</div>
				<div class="flavor-terms-list">
					${sub.terms.map((term, ti) => this.renderTerm(term, si, ti, sub.terms.length)).join('')}
				</div>
				<button class="flavor-add-term-btn" type="button" data-modal-action="add-term" data-sub-idx="${si}">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-plus"></use></svg>
					Add term
				</button>
			</div>
		`;
	}

	renderTerm(term, si, ti, total) {
		return `
			<div class="flavor-term-row">
				<div class="flavor-reorder-btns">
					<button class="flavor-reorder-btn" type="button" data-modal-action="term-up" data-sub-idx="${si}" data-term-idx="${ti}" aria-label="Move term up"${ti === 0 ? ' disabled' : ''}>
						<svg class="svg-icon flavor-caret-up" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
					</button>
					<button class="flavor-reorder-btn" type="button" data-modal-action="term-down" data-sub-idx="${si}" data-term-idx="${ti}" aria-label="Move term down"${ti === total - 1 ? ' disabled' : ''}>
						<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
					</button>
				</div>
				<input class="flavor-term-input" type="text" data-term-input placeholder="Flavor term" value="${html(term)}">
				<button class="flavor-remove-btn" type="button" data-modal-action="remove-term" data-sub-idx="${si}" data-term-idx="${ti}" aria-label="Remove term">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
				</button>
			</div>
		`;
	}
}
