import { escapeHtml } from '../utils.js';
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


export class CatalogModal {
	constructor(modalRoot, { onSave }) {
		this.modalRoot = modalRoot;
		this.onSave = onSave;
		this.currentBottle = null;
		this.previousFocus = null;
		this.setupEventListeners();
	}

	setupEventListeners() {
		this.modalRoot.addEventListener('click', event => this.handleClick(event));
		this.modalRoot.addEventListener('submit', event => this.handleSubmit(event));

		document.addEventListener('keydown', event => {
			if (event.key === 'Escape' && this.currentBottle) {
				this.close();
			}
		});
	}

	open(bottle) {
		this.currentBottle = bottle;
		this.previousFocus = document.activeElement;
		this.modalRoot.innerHTML = this.renderModal(bottle);
		document.body.classList.add('catalog-modal-is-open');
		this.modalRoot.querySelector('.catalog-modal-close')?.focus();
	}

	close() {
		this.modalRoot.innerHTML = '';
		this.currentBottle = null;
		document.body.classList.remove('catalog-modal-is-open');
		this.previousFocus?.focus?.();
		this.previousFocus = null;
	}

	handleClick(event) {
		if (event.target.closest('[data-close-modal]')) {
			this.close();
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

	renderModal(bottle) {
		return `
			<div class="catalog-modal" role="dialog" aria-modal="true" aria-labelledby="catalog-modal-title">
				<button class="catalog-modal-overlay" type="button" data-close-modal aria-label="Close edit modal"></button>
				<form class="catalog-modal-panel" data-catalog-edit-form>
					<header class="catalog-modal-header">
						<div>
							<p class="text-label">Bottle Log ID: #${html(bottle.id)}</p>
							<h2 id="catalog-modal-title">Edit Bottle Entry</h2>
						</div>
						<button class="catalog-modal-close" type="button" data-close-modal aria-label="Close edit modal">
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
						</button>
					</header>

					<div class="catalog-modal-body">
						${this.renderFieldset('Bottle Identity', IDENTITY_FIELDS, bottle)}
						${this.renderFieldset('Technical Specs', SPEC_FIELDS, bottle)}
						${this.renderMashBillFieldset(bottle)}
						${this.renderTastingFieldset(bottle)}
					</div>

					<footer class="catalog-modal-footer">
						<div>
							<button class="button-tertiary" type="button" data-close-modal>
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-prohibit"></use></svg>
								Delete Bottle
							</button>
						</div>
						<div>
							<button class="button-secondary" type="button" data-close-modal>Bottle Kill</button>
							<button class="button-secondary" type="button" data-close-modal>Cancel</button>
							<button class="button-primary" type="submit">Save Changes</button>
						</div>
					</footer>
				</form>
			</div>
		`;
	}

	renderFieldset(title, fields, bottle) {
		return `
			<fieldset class="catalog-fieldset">
				<legend>${html(title)}</legend>
				<div class="catalog-form-grid">
					${fields.map(field => this.renderField(field, bottle[field.name])).join('')}
				</div>
			</fieldset>
		`;
	}

	renderMashBillFieldset(bottle) {
		return `
			<fieldset class="catalog-fieldset">
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
			<fieldset class="catalog-fieldset">
				<legend>Tasting Journal</legend>
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
		const input = field.multiline
			? `<textarea id="${html(fieldId)}" name="${html(field.name)}" rows="4">${html(value)}</textarea>`
			: `<input id="${html(fieldId)}" name="${html(field.name)}" type="${html(field.type || 'text')}" value="${html(value)}">`;

		return `
			<label class="catalog-field ${html(fieldId)}" for="${html(fieldId)}">
				<span>${html(field.label)}</span>
				${input}
			</label>
		`;
	}

	renderRadioField(field, value) {
		const labelId = `catalog-field-${field.name.replace(/\./g, '-')}-label`;
		return `
			<div class="catalog-field catalog-field-radio" role="group" aria-labelledby="${html(labelId)}">
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
