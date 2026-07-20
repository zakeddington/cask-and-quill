import { html, getFormValue } from '../utils.js';
import { init as pellInit } from '../vendor/pell.js';
import { BaseModal } from './modal.js';
import { CustomDropdown } from './custom-dropdown.js';
import { JournalDrawer } from './drawer-journal.js';
import {
	CATALOG_IDENTITY_FIELDS,
	CATALOG_SPEC_FIELDS,
	CATALOG_MASH_BILL_FIELDS,
	CATALOG_TASTING_NOTE_FIELDS,
	SPRITE_URL
} from '../config/constants.js';

export class ModalEditCatalog extends BaseModal {
	constructor(modalRoot, options) {
		super(modalRoot, options);
		this.state.currentBottle = null;
		this.state.isNew = false;
	}

	get isOpen() { return this.state.currentBottle !== null; }
	getDeleteTarget() { return this.state.currentBottle.id; }

	addEventListeners() {
		super.addEventListeners();
		this.el.modalRoot.addEventListener('submit', event => this.onSubmit(event));
	}

	open(bottle, { isNew = false } = {}) {
		this.state.currentBottle = bottle;
		this.state.isNew = isNew;
		this.el.modalRoot.innerHTML = this.renderModal(bottle);
		this.initRichTextEditors();
		this.initDropdowns();
		this.initJournalDrawer();
		super.open();
	}

	close() {
		this.state.currentBottle = null;
		super.close();
	}

	initRichTextEditors() {
		this.el.modalRoot.querySelectorAll('[data-rich-editor]').forEach(container => {
			const name = container.dataset.richEditor;
			const hidden = this.el.modalRoot.querySelector(`input[type="hidden"][name="${CSS.escape(name)}"]`);
			const editor = pellInit({
				element: container,
				onChange: html => { if (hidden) hidden.value = html; },
				actions: ['bold', 'italic', 'underline', 'olist', 'ulist'],
				defaultParagraphSeparator: 'p',
			});
			editor.content.innerHTML = hidden?.value ?? '';
		});
	}

	initDropdowns() {
		this.el.modalRoot.querySelectorAll('[data-catalog-dropdown]').forEach(select => new CustomDropdown(select));
	}

	initJournalDrawer() {
		const trigger = this.el.modalRoot.querySelector('[data-journal-trigger]');
		if (trigger) new JournalDrawer(trigger, { isAdmin: this.options.isAdmin?.() });
	}

	onSubmit(event) {
		event.preventDefault();
		if (!this.state.currentBottle) return;

		const formData = new FormData(event.target);
		const updatedBottle = {
			...this.state.currentBottle,
			fill: getFormValue(formData, 'fill'),
			category: getFormValue(formData, 'category'),
			type: getFormValue(formData, 'type'),
			brand: getFormValue(formData, 'brand'),
			bottle: getFormValue(formData, 'bottle'),
			age: getFormValue(formData, 'age'),
			abv: getFormValue(formData, 'abv'),
			proof: getFormValue(formData, 'proof'),
			cask: getFormValue(formData, 'cask'),
			distillery: getFormValue(formData, 'distillery'),
			corpOwner: getFormValue(formData, 'corpOwner'),
			origin: getFormValue(formData, 'origin'),
			char: getFormValue(formData, 'char'),
			mashBill: CATALOG_MASH_BILL_FIELDS.reduce((mashBill, field) => {
				mashBill[field.name] = getFormValue(formData, `mashBill.${field.name}`);
				return mashBill;
			}, {}),
			tastingNotes: CATALOG_TASTING_NOTE_FIELDS.reduce((notes, field) => {
				notes[field.name] = getFormValue(formData, `tastingNotes.${field.name}`);
				return notes;
			}, {})
		};

		this.options.onSave(updatedBottle);
		this.close();
	}

	renderDeleteConfirm() {
		return `
			<p class="modal-confirm-text">Delete <strong>${html(this.state.currentBottle.brand)} ${html(this.state.currentBottle.bottle)}</strong>? This cannot be undone.</p>
			<div>
				<button class="button-secondary" type="button" data-modal-action="delete-cancel">Cancel</button>
				<button class="button-destructive" type="button" data-modal-action="delete-execute">Delete</button>
			</div>
		`;
	}

	renderFooter() {
		return `
			${this.state.isNew ? '<div></div>' : `
			<div class="modal-footer-col">
				<button class="button-tertiary" type="button" data-modal-action="delete-prompt">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-prohibit"></use></svg>
					Delete Bottle
				</button>
			</div>`}
			<div class="modal-footer-col">
				<button class="button-secondary" type="button" data-modal-action="close">Cancel</button>
				<button class="button-primary" type="submit">${this.state.isNew ? 'Add Bottle' : 'Save Changes'}</button>
			</div>
		`;
	}

	renderModal(bottle) {
		return `
			<div class="modal catalog-modal" role="dialog" aria-modal="true" aria-labelledby="catalog-modal-title">
				<button class="modal-overlay" type="button" data-modal-action="close" aria-label="Close edit modal"></button>
				<form class="modal-panel" data-catalog-edit-form>
					<header class="modal-header catalog-modal-header">
						<div>
							${this.state.isNew ? '' : `<p class="text-label">Bottle Log ID: #${html(bottle.id)}</p>`}
							<h2 id="catalog-modal-title">${this.state.isNew ? 'Add Bottle Entry' : 'Edit Bottle Entry'}</h2>
						</div>
						<button class="modal-close button-icon-only" type="button" data-modal-action="close" aria-label="Close edit modal">
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
						</button>
					</header>

					<div class="modal-body">
						${this.renderFieldset('Bottle Identity', CATALOG_IDENTITY_FIELDS, bottle)}
						${this.renderFieldset('Technical Specs', CATALOG_SPEC_FIELDS, bottle)}
						${this.renderMashBillFieldset(bottle)}
						${this.renderTastingFieldset(bottle)}
					</div>

					<footer class="modal-footer">
						${this.renderFooter()}
					</footer>
				</form>
			</div>
		`;
	}

	renderFieldset(title, fields, bottle) {
		return `
			<fieldset class="modal-fieldset">
				<legend>${html(title)}</legend>
				<div class="catalog-form-grid">
					${fields.map(field => this.renderField(field, bottle[field.name])).join('')}
				</div>
			</fieldset>
		`;
	}

	renderMashBillFieldset(bottle) {
		return `
			<fieldset class="modal-fieldset">
				<legend>Mash Bill</legend>
				<div class="catalog-form-grid catalog-form-grid-compact">
					${CATALOG_MASH_BILL_FIELDS.map(field => this.renderField({
						...field,
						name: `mashBill.${field.name}`
					}, bottle.mashBill?.[field.name] ?? '')).join('')}
				</div>
			</fieldset>
		`;
	}

	renderTastingFieldset(bottle) {
		return `
			<fieldset class="modal-fieldset catalog-fieldset-journal">
				<legend>Tasting Journal</legend>
				<button class="catalog-journal-btn button-icon-only" type="button" data-journal-trigger aria-controls="journal-drawer" aria-expanded="false" aria-label="Open journal notes">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-notebook"></use></svg>
				</button>
				<div class="catalog-form-stack">
					${CATALOG_TASTING_NOTE_FIELDS.map(field => this.renderField({
						...field,
						name: `tastingNotes.${field.name}`,
						multiline: true
					}, bottle.tastingNotes?.[field.name])).join('')}
				</div>
			</fieldset>
		`;
	}

	renderField(field, value) {
		if (field.type === 'select') {
			return this.renderSelectField(field, value);
		}

		if (field.options) {
			return this.renderRadioField(field, value);
		}

		const fieldId = `catalog-field-${field.name.replace(/\./g, '-')}`;

		if (field.multiline) {
			return `
				<div class="modal-field catalog-field ${html(fieldId)}">
					<span>${html(field.label)}</span>
					<div class="catalog-rich-editor" data-rich-editor="${html(field.name)}"></div>
					<input type="hidden" name="${html(field.name)}" value="${html(value)}">
				</div>
			`;
		}

		const input = `<input id="${html(fieldId)}" name="${html(field.name)}" type="${html(field.type || 'text')}" value="${html(value)}">`;

		return `
			<label class="modal-field catalog-field ${html(fieldId)}" for="${html(fieldId)}">
				<span>${html(field.label)}</span>
				${field.unit ? `
				<div class="catalog-field-unit-wrap">
					${input}
					<span class="catalog-field-unit" aria-hidden="true">${html(field.unit)}</span>
				</div>` : input}
			</label>
		`;
	}

	renderSelectField(field, value) {
		const fieldId = `catalog-field-${field.name.replace(/\./g, '-')}`;
		const hasMatch = field.options.some(option => option.value === value);
		return `
			<div class="modal-field catalog-field ${html(fieldId)}">
				<span>${html(field.label)}</span>
				<select id="${html(fieldId)}" name="${html(field.name)}" aria-label="${html(field.label)}" data-catalog-dropdown>
					<option value=""${hasMatch ? '' : ' selected'}>Select ${html(field.label)}</option>
					${field.options.map(option => `
						<option value="${html(option.value)}"${value === option.value ? ' selected' : ''}>${html(option.label)}</option>
					`).join('')}
				</select>
			</div>
		`;
	}

	renderRadioField(field, value) {
		const labelId = `catalog-field-${field.name.replace(/\./g, '-')}-label`;
		return `
			<div class="modal-field catalog-field catalog-field-radio" role="group" aria-labelledby="${html(labelId)}">
				<span id="${html(labelId)}">${html(field.label)}</span>
				<div class="catalog-radio-group">
					${field.options.map(option => `
						<label class="catalog-radio-option">
							<input type="radio" name="${html(field.name)}" value="${html(option.value)}"${value === option.value ? ' checked' : ''}>
							<span>${html(option.label)}</span>
						</label>
					`).join('')}
				</div>
			</div>
		`;
	}
}
