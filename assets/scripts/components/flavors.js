import { fetchFlavorFamilies } from '../supabase.js';

export class Flavors {
	constructor(el) {
		this.el = el;
		this.state = { q: '', family: 'All Families' };
		this.data = [];
	}

	get total() {
		return this.data.reduce((a, f) => a + f.subs.reduce((b, s) => b + s.terms.length, 0), 0);
	}

	get famOptions() {
		return ['All Families', ...this.data.map(f => f.name)];
	}

	slug(name) {
		return name.toLowerCase().replace(/[\s/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
	}

	filter(q, family) {
		q = (q || '').trim().toLowerCase();
		return this.data
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

	async init() {
		this.el.innerHTML = '<div class="empty-state">Loading…</div>';

		try {
			this.data = await fetchFlavorFamilies();
		} catch (err) {
			this.el.innerHTML = '<div class="empty-state">Failed to load flavor families.</div>';
			console.error(err);
			return;
		}

		const familySelect = document.getElementById('flavors-family');
		if (familySelect) {
			familySelect.innerHTML = this.famOptions
				.map(o => `<option value="${o}">${o}</option>`)
				.join('');
		}

		document.getElementById('flavors-search')?.addEventListener('input', e => {
			this.state.q = e.target.value;
			this._render();
		});

		document.getElementById('flavors-family')?.addEventListener('change', e => {
			this.state.family = e.target.value;
			this._render();
		});

		this._render();
	}

	_render() {
		const { q, family } = this.state;
		const fams = this.filter(q, family);
		const shown = fams.reduce((a, f) => a + f.count, 0);

		const countEl = document.getElementById('flavors-count');
		if (countEl) countEl.textContent = `${shown} of ${this.total} tasting notes`;

		if (fams.length === 0) {
			this.el.innerHTML = `<div class="empty-state">No flavors match "${q}".</div>`;
			return;
		}

		this.el.innerHTML = fams.map(f => {
			const subsHtml = f.subs.map(s => {
				const termsHtml = s.terms.map(t => `
					<div class="flavor-term-spine"></div>
					<div class="flavor-node">${t}</div>
				`).join('');

				return `
					<div class="flavor-col">
						<div class="flavor-col-spine"></div>
						<div class="flavor-sublabel">${s.name}</div>
						${termsHtml}
					</div>
				`;
			}).join('');

			return `
				<div class="flavor-family flavor-theme-${this.slug(f.name)}">
					<div class="flavor-family-header">
						<div class="flavor-family-header-inner">
							<span class="flavor-family-name">${f.name}</span>
							<span class="flavor-family-desc">${f.desc}</span>
							<span class="flavor-family-count">${f.count} notes</span>
						</div>
					</div>
					<div class="flavor-family-content">
						<div class="flavor-h-spine"></div>
						<div class="flavor-family-aside">
							<img class="flavor-family-img" src="/assets/images/flavor-${this.slug(f.name)}.jpg" alt="${f.name}">
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
		}).join('');
	}
}
