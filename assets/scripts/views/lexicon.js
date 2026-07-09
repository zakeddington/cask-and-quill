import { LEXICON_TERMS, LEXICON_CATEGORIES, getLexiconCategoryOptions } from '../data/lexicon.js';
import { escapeHtml, normalizeTermName } from '../utils.js';
import { CustomDropdown } from '../components/custom-dropdown.js';

export class Lexicon {
	constructor() {
		this.terms = LEXICON_TERMS;
		this.searchInput = document.getElementById('search-input');
		this.categorySelect = document.getElementById('category-select');
		this.lexiconEntries = document.getElementById('lexicon-entries');
		this.searchQuery = '';
		this.searchDebounceTimer = null;
		this.selectedCategory = '';
		this.searchDebounceDelay = 250;
		this.resizeDebounceTimer = null;
		this.resizeDebounceDelay = 150;
		this.stickyOffsetProperty = '--layout-scroll-header-lexicon-controls-offset';
	}

	init() {
		if (!this.lexiconEntries) return;

		if (this.categorySelect) this.categoryDropdown = new CustomDropdown(this.categorySelect);

		this.setupCategorySelect();
		this.setupEventListeners();
		this.render();
		this.updateStickyOffset();
		this.scrollToHash();
	}

	setupEventListeners() {
		if (this.searchInput) {
			this.searchInput.addEventListener('input', event => this.handleSearch(event));
		}

		if (this.categorySelect) {
			this.categorySelect.addEventListener('change', event => this.handleCategoryChange(event));
		}

		window.addEventListener('resize', () => {
			window.clearTimeout(this.resizeDebounceTimer);
			this.resizeDebounceTimer = window.setTimeout(() => this.updateStickyOffset(), this.resizeDebounceDelay);
		});
	}

	updateStickyOffset() {
		const header = document.querySelector('.header');
		const pageControls = document.querySelector('.page-controls');
		if (!header || !pageControls) return;

		const marginBottom = parseFloat(getComputedStyle(pageControls).marginBottom) || 0;
		const offset = header.getBoundingClientRect().height + pageControls.getBoundingClientRect().height + marginBottom;

		document.documentElement.style.setProperty(this.stickyOffsetProperty, `${offset}px`);
	}

	scrollToHash() {
		if (!location.hash) return;

		const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
		if (target) target.scrollIntoView({ block: 'start' });
	}

	handleSearch(event) {
		const nextQuery = event.target.value.toLowerCase();

		window.clearTimeout(this.searchDebounceTimer);
		this.searchDebounceTimer = window.setTimeout(() => {
			this.searchQuery = nextQuery;
			this.render(true);
		}, this.searchDebounceDelay);
	}

	setupCategorySelect() {
		if (!this.categoryDropdown) return;

		this.categoryDropdown.setOptions(getLexiconCategoryOptions());
	}

	handleCategoryChange(event) {
		this.selectedCategory = event.target.value;
		this.render(true);
	}

	scrollResultsToTop() {
		this.lexiconEntries.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	getTermByName(name) {
		const normalizedName = normalizeTermName(name);
		return this.terms.find(term =>
			normalizeTermName(term.name) === normalizedName ||
			term.aliases?.some(alias => normalizeTermName(alias) === normalizedName)
		);
	}

	getCategoryOrder(category) {
		const index = LEXICON_CATEGORIES.indexOf(category);
		return index === -1 ? LEXICON_CATEGORIES.length : index;
	}

	getCategoryId(category) {
		return `category-${normalizeTermName(category).replace(/\s+/g, '-')}`;
	}

	renderNoResults() {
		const query = this.searchQuery.trim();
		const message = query
			? `No results for "${escapeHtml(query)}".`
			: 'No entries found for the current filters.';

		return `
			<div class="empty-state grid-col-full">
				<h2 class="text-heading-lg">${message}</h2>
			</div>
		`;
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
				term.category.toLowerCase().includes(this.searchQuery)/* ||
				term.description.toLowerCase().includes(this.searchQuery)*/
			)
		);
	}

	groupTerms(filteredTerms) {
		return filteredTerms.reduce((groups, term) => {
			const key = this.selectedCategory ? term.category : term.letter;
			if (!groups[key]) groups[key] = [];
			groups[key].push(term);
			return groups;
		}, {});
	}

	getSortedGroups(groupedTerms) {
		return Object.keys(groupedTerms).sort((a, b) => {
			if (!this.selectedCategory) return a.localeCompare(b);

			return this.getCategoryOrder(a) - this.getCategoryOrder(b) || a.localeCompare(b);
		});
	}

	render(scrollToTop = false) {
		const filteredTerms = this.getFilteredTerms();
		const groupedTerms = this.groupTerms(filteredTerms);
		const sortedGroups = this.getSortedGroups(groupedTerms);

		this.lexiconEntries.innerHTML = filteredTerms.length
			? sortedGroups.map(group => this.renderGroup(group, groupedTerms[group])).join('')
			: this.renderNoResults();
		this.updateAlphabetNav(this.selectedCategory ? [] : filteredTerms);

		if (scrollToTop) {
			this.scrollResultsToTop();
		}
	}

	renderGroup(group, terms) {
		const groupedItems = terms.sort((a, b) => a.name.localeCompare(b.name));
		const sectionId = this.selectedCategory ? this.getCategoryId(group) : group;
		const headingClass = this.selectedCategory
			? 'lexicon-section-title is-category text-heading-md grid-col-md-2'
			: 'lexicon-section-title text-display-md grid-col-md-2';

		return `
			<section class="lexicon-section grid grid-col-full" id="${sectionId}">
				<h2 class="${headingClass}">${escapeHtml(group)}</h2>
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
