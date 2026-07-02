import { escapeHtml } from '../utils.js';
import { init as pellInit } from '../vendor/pell.js';
import { BaseModal } from './modal.js';
import {
	IDENTITY_FIELDS,
	SPEC_FIELDS,
	MASH_BILL_FIELDS,
	TASTING_NOTE_FIELDS,
	SPRITE_URL
} from './catalog-constants.js';

function html(value) {
	return escapeHtml(String(value ?? ''));
}

function getFormValue(formData, key) {
	return String(formData.get(key) ?? '').trim();
}


export class ModalEditCatalog extends BaseModal {
	constructor(modalRoot, callbacks) {
		super(modalRoot, callbacks);
		this.currentBottle = null;
		this.isNew = false;
		this.setupEventListeners();
	}

	get isOpen() { return this.currentBottle !== null; }
	getDeleteTarget() { return this.currentBottle.id; }

	setupEventListeners() {
		super.setupEventListeners();
		this.modalRoot.addEventListener('submit', event => this.handleSubmit(event));
	}

	open(bottle, { isNew = false } = {}) {
		this.currentBottle = bottle;
		this.isNew = isNew;
		this.modalRoot.innerHTML = this.renderModal(bottle);
		this.initRichTextEditors();
		super.open();
	}

	close() {
		this.currentBottle = null;
		super.close();
	}

	initRichTextEditors() {
		this.modalRoot.querySelectorAll('[data-rich-editor]').forEach(container => {
			const name = container.dataset.richEditor;
			const hidden = this.modalRoot.querySelector(`input[type="hidden"][name="${CSS.escape(name)}"]`);
			const editor = pellInit({
				element: container,
				onChange: html => { if (hidden) hidden.value = html; },
				actions: ['bold', 'italic', 'underline', 'olist', 'ulist'],
				defaultParagraphSeparator: 'p',
			});
			editor.content.innerHTML = hidden?.value ?? '';
		});
	}

	onAction(event, action, btn) {
		if (action === 'open-journal') {
			window.dispatchEvent(new CustomEvent('open-journal-drawer'));
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		if (!this.currentBottle) return;

		const formData = new FormData(event.target);
		const updatedBottle = {
			...this.currentBottle,
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
			mashBill: MASH_BILL_FIELDS.reduce((mashBill, field) => {
				mashBill[field.name] = getFormValue(formData, `mashBill.${field.name}`);
				return mashBill;
			}, {}),
			tastingNotes: TASTING_NOTE_FIELDS.reduce((notes, field) => {
				notes[field.name] = getFormValue(formData, `tastingNotes.${field.name}`);
				return notes;
			}, {})
		};

		this.onSave(updatedBottle);
		this.close();
	}

	renderDeleteConfirm() {
		return `
			<p class="modal-confirm-text">Delete <strong>${html(this.currentBottle.brand)} ${html(this.currentBottle.bottle)}</strong>? This cannot be undone.</p>
			<div>
				<button class="button-secondary" type="button" data-modal-action="delete-cancel">Cancel</button>
				<button class="button-destructive" type="button" data-modal-action="delete-execute">Delete</button>
			</div>
		`;
	}

	renderFooter() {
		return `
			${this.isNew ? '<div></div>' : `
			<div class="modal-footer-col">
				<button class="button-tertiary" type="button" data-modal-action="delete-prompt">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-prohibit"></use></svg>
					Delete Bottle
				</button>
			</div>`}
			<div class="modal-footer-col">
				${this.isNew ? '' : '<button class="button-secondary" type="button" data-modal-action="close">Bottle Kill</button>'}
				<button class="button-secondary" type="button" data-modal-action="close">Cancel</button>
				<button class="button-primary" type="submit">${this.isNew ? 'Add Bottle' : 'Save Changes'}</button>
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
							${this.isNew ? '' : `<p class="text-label">Bottle Log ID: #${html(bottle.id)}</p>`}
							<h2 id="catalog-modal-title">${this.isNew ? 'Add Bottle Entry' : 'Edit Bottle Entry'}</h2>
						</div>
						<button class="modal-close button-icon-only" type="button" data-modal-action="close" aria-label="Close edit modal">
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
						</button>
					</header>

					<div class="modal-body">
						${this.renderFieldset('Bottle Identity', IDENTITY_FIELDS, bottle)}
						${this.renderFieldset('Technical Specs', SPEC_FIELDS, bottle)}
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
					${MASH_BILL_FIELDS.map(field => this.renderField({
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
				<button class="catalog-journal-btn button-icon-only" type="button" data-modal-action="open-journal" aria-label="Open journal notes">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-notebook"></use></svg>
				</button>
				<div class="catalog-form-stack">
					${TASTING_NOTE_FIELDS.map(field => this.renderField({
						...field,
						name: `tastingNotes.${field.name}`,
						multiline: true
					}, bottle.tastingNotes?.[field.name])).join('')}
				</div>
			</fieldset>
		`;
	}

	renderField(field, value) {
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

		return `
			<label class="modal-field catalog-field ${html(fieldId)}" for="${html(fieldId)}">
				<span>${html(field.label)}</span>
				<input id="${html(fieldId)}" name="${html(field.name)}" type="${html(field.type || 'text')}" value="${html(value)}">
			</label>
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
