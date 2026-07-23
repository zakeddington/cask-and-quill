import { fetchFlavorFamilies, updateFlavorFamily, deleteFlavorFamily } from '../supabase.js';
import { ModalEditFlavor } from '../components/modal-edit-flavor.js';
import { CustomDropdown } from '../components/custom-dropdown.js';
import { SPRITE_URL } from '../config/constants.js';
import { AUTH_CHANGE } from '../config/events.js';

export class FlavorsView {
	constructor(elContainer, isAdmin = false) {
		this.el = {
			container: elContainer,
			flavors: elContainer.querySelector('#flavors'),
			count: elContainer.querySelector('#flavors-count'),
			searchInput: elContainer.querySelector('#flavors-search'),
			searchClear: elContainer.querySelector('#flavors-search-clear'),
			familySelect: elContainer.querySelector('#flavors-family'),
			modalRoot: elContainer.querySelector('#flavor-modal-root'),
		};

		this.state = {
			families: [],
			searchQuery: '',
			familyFilter: 'All Families',
			isAdmin,
		};

		this.components = {
			familyDropdown: null,
			modal: null,
		};

		this.init();
	}

	get total() {
		return this.state.families.reduce((a, f) => a + f.subs.reduce((b, s) => b + s.terms.length, 0), 0);
	}

	get familyOptions() {
		return ['All Families', ...this.state.families.map(f => f.name)];
	}

	async init() {
		this.initModalEditFlavor();

		const loaded = await this.fetchFlavorData();
		if (!loaded) return;

		this.initFamilySelect();
		this.render();
		this.addEventListeners();
	}

	async fetchFlavorData() {
		try {
			this.state.families = await fetchFlavorFamilies();
			return true;
		} catch (err) {
			this.el.flavors.innerHTML = '<div class="empty-state">Failed to load flavor families.</div>';
			window.console.warn('Failed to load flavor families.', err);
			return false;
		}
	}

	initModalEditFlavor() {
		if (this.el.modalRoot) {
			this.components.modal = new ModalEditFlavor(this.el.modalRoot, {
				onSave: family => this.onSave(family),
				onDelete: id => this.onDelete(id)
			});
		}
	}

	initFamilySelect() {
		if (this.el.familySelect) {
			this.components.familyDropdown = new CustomDropdown(this.el.familySelect);
			this.components.familyDropdown.setOptions(this.familyOptions.map(o => ({ value: o, label: o })));
		}
	}

	addEventListeners() {
		this.el.flavors.addEventListener('click', event => this.onFlavorsClick(event));
		this.el.searchInput?.addEventListener('input', event => this.onSearchInput(event));
		this.el.searchClear?.addEventListener('click', () => this.onSearchClear());
		this.el.familySelect?.addEventListener('change', event => this.onFamilyChange(event));

		window.addEventListener(AUTH_CHANGE, event => this.onAuthChange(event));
	}

	onAuthChange(event) {
		this.state.isAdmin = event.detail.isAdmin;
		this.render();
	}

	onFlavorsClick(event) {
		const editBtn = event.target.closest('[data-edit-family-idx]');
		if (!editBtn) return;

		const idx = parseInt(editBtn.dataset.editFamilyIdx);
		this.components.modal?.open(this.state.families[idx]);
	}

	onSearchInput(event) {
		this.state.searchQuery = event.target.value;
		if (this.el.searchClear) this.el.searchClear.hidden = !this.state.searchQuery;
		this.render();
	}

	onSearchClear() {
		this.el.searchInput.value = '';
		this.state.searchQuery = '';
		if (this.el.searchClear) this.el.searchClear.hidden = true;
		this.render();
		this.el.searchInput.focus();
	}

	onFamilyChange(event) {
		this.state.familyFilter = event.target.value;
		this.render();
	}

	onSave(family) {
		const idx = this.state.families.findIndex(f => f.id === family.id);
		if (idx !== -1) this.state.families[idx] = family;
		this.updateFamilySelect();
		this.render();

		updateFlavorFamily(family.id, { name: family.name, description: family.desc, subs: family.subs })
			.catch(err => window.console.warn('Failed to save flavor family.', err));
	}

	onDelete(id) {
		this.state.families = this.state.families.filter(f => f.id !== id);
		this.updateFamilySelect();
		this.render();

		deleteFlavorFamily(id).catch(err => window.console.warn('Failed to delete flavor family.', err));
	}

	updateFamilySelect() {
		this.components.familyDropdown?.setOptions(this.familyOptions.map(o => ({ value: o, label: o })));
	}

	getSlug(name) {
		return name.toLowerCase().replace(/[\s/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
	}

	getFilteredFamilies() {
		const q = this.state.searchQuery.trim().toLowerCase();
		const family = this.state.familyFilter;

		return this.state.families
			.map((f, i) => ({ f, i }))
			.filter(({ f }) => family === 'All Families' || family === f.name)
			.map(({ f, i }) => {
				const famMatch = q && f.name.toLowerCase().includes(q);
				let subs = f.subs.map(s => {
					const subMatch = famMatch || (q && s.name.toLowerCase().includes(q));
					const terms = (q && !subMatch) ? s.terms.filter(t => t.toLowerCase().includes(q)) : s.terms;
					return { name: s.name, terms };
				});
				if (q) subs = subs.filter(s => s.terms.length > 0);
				const count = subs.reduce((a, s) => a + s.terms.length, 0);
				return { name: f.name, desc: f.desc, idx: i, subs, count };
			})
			.filter(f => !q || f.count > 0);
	}

	render() {
		const families = this.getFilteredFamilies();
		const shown = families.reduce((a, f) => a + f.count, 0);

		if (this.el.count) this.el.count.textContent = `${shown} of ${this.total} tasting notes`;

		this.el.flavors.innerHTML = families.length
			? families.map(f => this.renderFamily(f)).join('')
			: this.renderEmptyState();
	}

	renderEmptyState() {
		return `<div class="empty-state">No flavors match "${this.state.searchQuery}".</div>`;
	}

	renderFamily(f) {
		const subsHtml = f.subs.map(s => this.renderSub(s)).join('');

		return `
			<div class="flavor-family flavor-theme-${this.getSlug(f.name)}">
				<div class="flavor-family-header">
					<div class="flavor-family-header-inner">
						<span class="flavor-family-name">${f.name}</span>
						<span class="flavor-family-desc">${f.desc}</span>
						<span class="flavor-family-count">${f.count} notes</span>
						${this.state.isAdmin ? `
							<button class="flavor-family-edit-btn button-tertiary" type="button" data-edit-family-idx="${f.idx}" aria-label="Edit ${f.name} family">
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-pencil"></use></svg>
								Edit
							</button>
						` : ''}
					</div>
				</div>
				<div class="flavor-family-content">
					<div class="flavor-h-spine"></div>
					<div class="flavor-family-aside">
						<img class="flavor-family-img" src="/assets/images/flavor-${this.getSlug(f.name)}.jpg" alt="${f.name}">
					</div>
					<div class="flavor-family-main">
						<div class="flavor-v-spine"></div>
						<div class="flavor-tree">
							${subsHtml}
						</div>
					</div>
				</div>
			</div>
		`;
	}

	renderSub(s) {
		const termsHtml = s.terms.map(t => this.renderTerm(t)).join('');

		return `
			<div class="flavor-col">
				<div class="flavor-col-spine"></div>
				<div class="flavor-sublabel">${s.name}</div>
				${termsHtml}
			</div>
		`;
	}

	renderTerm(term) {
		return `
			<div class="flavor-term-spine"></div>
			<div class="flavor-node">${term}</div>
		`;
	}
}
