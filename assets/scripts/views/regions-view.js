import { REGIONS_DATA } from '../data/regions-data.js';
import { escapeHtml } from '../utils.js';
import { SubRegionMapSwitcher } from '../components/sub-region-map-switcher.js';

export class RegionsView {
	constructor(elContainer) {

		this.data = REGIONS_DATA;

		this.el = {
			container: elContainer,
			regions: elContainer.querySelector('#regions'),
			subRegions: null,
			navLinks: null,
			regionSections: null,
		}

		this.state = {
			intersectingIds: new Set(),
		};

		this.observer = null;

		this.init();
	}

	init() {
		this.render();
		this.initMapSwitcher();
		this.initNav();
	}

	initMapSwitcher() {
		this.el.subRegions = this.el.container.querySelectorAll('.sub-regions[data-map-target]');
		this.el.subRegions.forEach(group => new SubRegionMapSwitcher(group));
	}

	initNav() {
		this.el.navLinks = Array.from(this.el.regions.querySelectorAll('.regions-nav-link'));
		this.el.regionSections = Array.from(this.el.regions.querySelectorAll('.region'));

		this.el.navLinks.forEach(link => {
			link.addEventListener('click', event => this.onNavLinkClick(event, link));
		});

		const headerHeight = this.el.container.querySelector('.header')?.getBoundingClientRect().height || 0;

		this.observer = new IntersectionObserver(
			entries => this.onIntersect(entries),
			{ rootMargin: `-${headerHeight}px 0px -30% 0px` }
		);

		this.el.regionSections.forEach(section => this.observer.observe(section));
	}

	onNavLinkClick(event, link) {
		const targetId = link.getAttribute('href').slice(1);
		const target = document.getElementById(targetId);
		if (!target) return;

		event.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onIntersect(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				this.state.intersectingIds.add(entry.target.id);
			} else {
				this.state.intersectingIds.delete(entry.target.id);
			}
		});

		const activeId = this.el.regionSections
			.map(section => section.id)
			.filter(id => this.state.intersectingIds.has(id))
			.pop();

		if (!activeId) return;

		this.el.navLinks.forEach(link => {
			link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
		});
	}

	render() {
		this.el.regions.innerHTML = `
			<div class="regions-container">
				${this.renderNav()}
				<div class="regions-content">
					${this.data.map(region => this.renderRegion(region)).join('')}
				</div>
			</div>
		`;
	}

	getRegionId(region) {
		return `region-${region.id}`;
	}

	renderNav() {
		return `
			<nav class="regions-nav" aria-label="Region navigation">
				<ul class="regions-nav-list list-reset">
					${this.data.map(region => `
						<li>
							<a class="button button-tertiary regions-nav-link" href="#${this.getRegionId(region)}">${escapeHtml(region.name)}</a>
						</li>
					`).join('')}
				</ul>
			</nav>
		`;
	}

	renderRegion(region) {
		return `
			<section class="region" id="${this.getRegionId(region)}">
				<div class="region-header grid grid-align-center">
					<div class="region-header-media grid-col-md-12 grid-col-lg-3">
						${this.renderBottleImage(region.bottleImage, region.name)}
					</div>

					<div class="region-header-content grid-col-md-12 grid-col-lg-9">
						<div class="region-title">
							<h2 class="region-title-name">${escapeHtml(region.name)}</h2>
							${this.renderKeyRegulationsSummary(region.keyRegulationsSummary)}
						</div>
						${this.renderLegalFramework(region)}
					</div>
				</div>

				<div class="region-content">
					${this.renderVarieties(region)}
					${region.subRegions ? this.renderSubRegions(region) : ''}
				</div>
			</section>
		`;
	}

	renderBottleImage(src, name) {
		if (src) {
			return `<img alt="${escapeHtml(name)} Bottle" class="region-bottle" src="${src}" />`;
		} else {
			return ``;
		}
	}

	renderKeyRegulationsSummary(summary) {
		const summaryItems = Array.isArray(summary) ? summary : [summary].filter(Boolean);
		if (summaryItems.length === 0) return '';

		return `
			<ul class="region-title-description text-body-md">
				${summaryItems.map(item => `<li class="region-title-description-item">${escapeHtml(item)}</li>`).join('')}
			</ul>
		`;
	}

	renderLegalFramework(region) {
		return `
			<div class="region-legal theme-accent">
				<h3 class="region-legal-title text-label">
					<svg class="svg-icon region-legal-title-icon" aria-hidden="true" focusable="false"><use href="/assets/images/icon-sprite.svg#icon-gavel"></use></svg>
					LEGAL FRAMEWORK
				</h3>
				<ul class="region-legal-list text-body-sm">
					${region.legalFramework.map(rule => `
						<li><strong>${escapeHtml(rule.label)}:</strong> ${escapeHtml(rule.value)}</li>
					`).join('')}
				</ul>
				<p class="text-body-sm"><strong>${escapeHtml(region.regulator)}</strong></p>
			</div>
		`;
	}

	renderVarieties(region) {
		return `
			<div class="region-varieties">
				<h3 class="varieties-title text-heading-md font-sans-serif tracking-wide uppercase line-height-normal">${escapeHtml(region.name)} Varieties</h3>
				<div class="varieties-list">
					${region.varieties.map(variety => this.renderVariety(variety)).join('')}
				</div>
			</div>
		`;
	}

	renderVariety(variety) {
		return `
			<div class="variety-item grid">
				<div class="variety-info grid-col-md-12 grid-col-lg-3">
					<h4 class="variety-name">${escapeHtml(variety.name)}</h4>
				</div>
				<div class="variety-description grid-col-md-9">
					<p>${escapeHtml(variety.description)}</p>
					<div class="variety-tags">
						${variety.tags.map(tag => `<span class="tag text-label">${escapeHtml(tag)}</span>`).join('')}
					</div>
				</div>
			</div>
		`;
	}

	renderSubRegions(region) {
		const mapId = `${region.id}-regions-map`;
		const defaultMapAlt = `${region.name} Regions Map`;
		const baseMapSrc = region.mapBaseImage;
		const initialHighlightSrc = region.mapAllHighlightImage;

		return `
			<div class="region-map">
				<h3 class="varieties-title text-heading-md font-sans-serif tracking-wide uppercase line-height-normal">${escapeHtml(region.name)} Regions</h3>
				<div class="map-container grid grid-align-center">
					<div
						class="map-image grid-col-md-12 grid-col-lg-6"
						data-base-src="${escapeHtml(baseMapSrc)}"
						data-initial-highlight-src="${escapeHtml(initialHighlightSrc)}"
						id="${escapeHtml(mapId)}"
					>
						<img
							alt="${escapeHtml(defaultMapAlt)}"
							class="map-base-image"
							src="${escapeHtml(baseMapSrc)}"
						/>
						<img alt="" aria-hidden="true" class="map-all-highlight-image is-visible" src="${escapeHtml(initialHighlightSrc)}" />
						<img alt="" aria-hidden="true" class="map-region-image" />
						<img alt="" aria-hidden="true" class="map-region-image" />
					</div>
					<div class="sub-regions grid grid-col-md-12 grid-col-lg-6" data-map-target="${escapeHtml(mapId)}">
						${region.subRegions.map(sub => {
							return `
								<div
									class="sub-region grid-col-full"
									data-region-key="${escapeHtml(sub.key)}"
									data-map-highlight-image="${escapeHtml(sub.mapHighlightImage)}"
									tabindex="0"
								>
									<h5>${escapeHtml(sub.name)}</h5>
									<p class="text-body-sm">${escapeHtml(sub.description)}</p>
								</div>
							`;
						}).join('')}
					</div>
				</div>
			</div>
		`;
	}
}
