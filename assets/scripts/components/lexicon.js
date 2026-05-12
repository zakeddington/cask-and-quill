import { LEXICON_TERMS } from '../data/lexicon.js';
import { escapeHtml, normalizeTermName } from '../utils.js';

const CATEGORY_ORDER = [
	'Measurements & Labeling',
	'Ingredients & Grain',
	'Malting & Mashing',
	'Fermentation & Chemistry',
	'Distillation',
	'Maturation & Wood',
	'Styles & Regulations',
	'People & Producers',
	'Regions & Terroir',
	'Tasting & Service'
];

export class Lexicon {
	constructor() {
		this.terms = LEXICON_TERMS;
		this.searchInput = document.getElementById('search-input');
		this.sortAlphaBtn = document.getElementById('sort-alpha');
		this.categorySelect = document.getElementById('category-select');
		this.lexiconEntries = document.getElementById('lexicon-entries');
		this.searchQuery = '';
		this.sortMode = 'alphabetical';
		this.selectedCategory = '';
	}

	init() {
		if (!this.lexiconEntries) return;

		this.setupCategorySelect();
		this.setupEventListeners();
		this.render();
	}

	setupEventListeners() {
		if (this.searchInput) {
			this.searchInput.addEventListener('input', event => this.handleSearch(event));
		}

		if (this.sortAlphaBtn) {
			this.sortAlphaBtn.addEventListener('click', () => this.setSortMode('alphabetical'));
		}

		if (this.categorySelect) {
			this.categorySelect.addEventListener('change', event => this.handleCategoryChange(event));
		}
	}

	handleSearch(event) {
		this.searchQuery = event.target.value.toLowerCase();
		this.render();
	}

	setSortMode(mode) {
		this.sortMode = mode;
		if (mode === 'alphabetical') {
			this.selectedCategory = '';
			if (this.categorySelect) this.categorySelect.value = '';
		}

		this.sortAlphaBtn.classList.toggle('active', mode === 'alphabetical');
		this.render();
	}

	setupCategorySelect() {
		if (!this.categorySelect) return;

		this.categorySelect.innerHTML = `
			<option value="">Categories</option>
			${CATEGORY_ORDER.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join('')}
		`;
	}

	handleCategoryChange(event) {
		this.selectedCategory = event.target.value;
		this.sortMode = this.selectedCategory ? 'category' : 'alphabetical';
		this.sortAlphaBtn.classList.toggle('active', this.sortMode === 'alphabetical');
		this.render();
	}

	getTermByName(name) {
		const normalizedName = normalizeTermName(name);
		return this.terms.find(term =>
			normalizeTermName(term.name) === normalizedName ||
			term.aliases?.some(alias => normalizeTermName(alias) === normalizedName)
		);
	}

	getCategoryOrder(category) {
		const index = CATEGORY_ORDER.indexOf(category);
		return index === -1 ? CATEGORY_ORDER.length : index;
	}

	getCategoryId(category) {
		return `category-${normalizeTermName(category).replace(/\s+/g, '-')}`;
	}

	renderSeeAlso(term) {
		if (!term.seeAlso?.length) return '';

		const links = term.seeAlso
			.map(label => {
				const linkedTerm = this.getTermByName(label);
				const href = linkedTerm ? `#${linkedTerm.id}` : '#lexicon-entries';
				return `<a href="${href}">${escapeHtml(label)}</a>`;
			})
			.join(', ');

		return `<p class="text-body-sm">See also: ${links}</p>`;
	}

	renderPronunciation(term) {
		if (!term.pronunciation) return '';

		return `<p class="term-pronunciation text-body-sm">Pronounced: ${escapeHtml(term.pronunciation)}</p>`;
	}

	renderAliases(term) {
		if (!term.aliases?.length) return '';

		const labels = term.aliases.map(alias => {
			const pronunciation = term.aliasPronunciations?.[alias];
			return pronunciation
				? `${escapeHtml(alias)} (${escapeHtml(pronunciation)})`
				: escapeHtml(alias);
		});

		return `<p class="term-aliases text-body-sm">Also listed as: ${labels.join(', ')}</p>`;
	}

	getFilteredTerms() {
		return this.terms.filter(term =>
			(!this.selectedCategory || term.category === this.selectedCategory) &&
			(
				term.name.toLowerCase().includes(this.searchQuery) ||
				term.aliases?.some(alias => alias.toLowerCase().includes(this.searchQuery)) ||
				term.category.toLowerCase().includes(this.searchQuery) ||
				term.description.toLowerCase().includes(this.searchQuery)
			)
		);
	}

	groupTerms(filteredTerms) {
		return filteredTerms.reduce((groups, term) => {
			const key = this.sortMode === 'category' ? term.category : term.letter;
			if (!groups[key]) groups[key] = [];
			groups[key].push(term);
			return groups;
		}, {});
	}

	getSortedGroups(groupedTerms) {
		return Object.keys(groupedTerms).sort((a, b) => {
			if (this.sortMode !== 'category') return a.localeCompare(b);

			return this.getCategoryOrder(a) - this.getCategoryOrder(b) || a.localeCompare(b);
		});
	}

	render() {
		const filteredTerms = this.getFilteredTerms();
		const groupedTerms = this.groupTerms(filteredTerms);
		const sortedGroups = this.getSortedGroups(groupedTerms);

		this.lexiconEntries.innerHTML = sortedGroups.map(group => this.renderGroup(group, groupedTerms[group])).join('');
		this.updateAlphabetNav(this.sortMode === 'alphabetical' ? filteredTerms : []);
	}

	renderGroup(group, terms) {
		const groupedItems = terms.sort((a, b) => a.name.localeCompare(b.name));
		const sectionId = this.sortMode === 'category' ? this.getCategoryId(group) : group;
		const headingClass = this.sortMode === 'category'
			? 'lexicon-section-title is-category text-heading-md grid-col-md-2'
			: 'lexicon-section-title text-display-md grid-col-md-2';

		return `
			<section class="lexicon-section grid grid-col-full" id="${sectionId}">
				<div class="${headingClass}">${escapeHtml(group)}</div>
				<div class="term-group grid grid-col-md-8">
					${groupedItems.map(term => this.renderTerm(term)).join('')}
				</div>
			</section>
		`;
	}

	renderTerm(term) {
		return `
			<article class="term-item grid-col-full" id="${term.id}">
				<div class="term-heading">
					<p class="text-label">${escapeHtml(term.category)}</p>
					<h3>${escapeHtml(term.name)}</h3>
					${this.renderPronunciation(term)}
					${this.renderAliases(term)}
				</div>
				<p class="term-description">${escapeHtml(term.description)}</p>
				${this.renderSeeAlso(term)}
			</article>
		`;
	}

	updateAlphabetNav(filteredTerms) {
		const activeLetters = new Set(filteredTerms.map(t => t.letter));
		const alphabetLinks = document.querySelectorAll('.alphabet-link');

		alphabetLinks.forEach(link => {
			const letter = link.textContent.trim();
			link.classList.toggle('active', activeLetters.has(letter));
		});
	}
}
