export class TastingWheel {
	constructor(el) {
		this.el = el;
		this.state = {
			view: 'D',
			qA: '', qB: '', qC: '', qD: '',
			fA: 'All Families', fB: 'All Families', fC: 'All Families', fD: 'All Families',
		};

		this.THEME = [
			{ h: 25,  c: .115 }, // Fruity
			{ h: 350, c: .105 }, // Floral
			{ h: 150, c: .095 }, // Herbal
			{ h: 135, c: .092 }, // Vegetal
			{ h: 70,  c: .105 }, // Sweet
			{ h: 90,  c: .092 }, // Cereal / Grainy
			{ h: 50,  c: .108 }, // Woody
			{ h: 115, c: .078 }, // Earthy
			{ h: 245, c: .07  }, // Smoky / Peaty
			{ h: 35,  c: .12  }, // Spicy
			{ h: 215, c: .062 }, // Sulphury / Feinty
		];

		this.data = [
			{ name: 'Fruity', desc: 'Orchard, citrus and tropical notes — the bright, juicy side of the spirit.', subs: [
				{ name: 'Fresh fruit', terms: ['Apple','Pear','Banana','Peach','Apricot','Melon','Grape'] },
				{ name: 'Citrus', terms: ['Lemon','Orange','Grapefruit','Lime','Tangerine','Zest','Kiwi'] },
				{ name: 'Stone fruit', terms: ['Peach','Apricot','Plum','Nectarine','Fig','Cherry','Mango'] },
				{ name: 'Tropical', terms: ['Pineapple','Mango','Coconut','Banana','Papaya','Passion fruit','Guava'] },
				{ name: 'Berry', terms: ['Cherry','Raspberry','Strawberry','Blackberry','Blueberry','Cranberry','Pomegranate'] },
				{ name: 'Dried fruit', terms: ['Raisin','Prune','Date','Dried fig','Dried apricot','Banana chips','Fruit cake'] },
				{ name: 'Cooked fruit', terms: ['Fruit Pie','Cobbler','Jam (sweet)','Marmalade (citrus)','Grilled pineapple','Cranberry sauce','Fried plantains'] },
				{ name: 'Artificial', terms: ['Cherry cola','Hard candies','Bubblegum','Fruit Pastry','Taffy','Red Licorice','Cough syrup'] },
			]},
			{ name: 'Floral', desc: 'Petals, blossom and perfume; delicate aromatics common in lighter malts.', subs: [
				{ name: 'Fresh flowers', terms: ['Rose','Violet','Lavender','Wildflowers','Rhododendron','Carnation'] },
				{ name: 'Exotic', terms: ['Honeysuckle','Orange blossom','Heather','Jasmine','Lily','Orchid'] },
				{ name: 'Perfumed', terms: ['Bar Soap','Shampoo','Perfume','Fabric softener','Potpourri','Florist shop'] },
			]},
			{ name: 'Herbal', desc: 'Mint, fresh herbs and medicinal greens drawn from grain and botanicals.', subs: [
				{ name: 'Minty', terms: ['Spearmint','Peppermint','Wintergreen'] },
				{ name: 'Fresh', terms: ['Basil','Thyme','Sage','Rosemary','Oregano','Lemon balm','Cilantro'] },
				{ name: 'Aromatic', terms: ['Liquorice','Star anise','Dill','Black tea','Green tea','Herbal tea','Chamomile'] },
				{ name: 'Medicinal', terms: ['Eucalyptus','Vick\'s vapor rub','Aloe','Pine needle','Juniper','Lemon','Ginseng'] },
			]},
			{ name: 'Vegetal', desc: 'Garden, root and cooked-vegetable notes — green rather than sweet.', subs: [
				{ name: 'Garden', terms: ['Bell peppers','Cucumber','Peas','Lettuce','Celery','Green beans','Tomato'] },
				{ name: 'Root', terms: ['Beets','Potato','Turnip','Radish','Carrot','Onion','Ginger'] },
				{ name: 'Cooked', terms: ['Cabbage','Brussel Sprouts','Spinach','Mashed Potatoes','Pot pie','Corn on the cob','Broccoli'] },
			]},
			{ name: 'Sweet', desc: 'Vanilla, honey, caramel and chocolate; the confectionery core of oak-aged spirit.', subs: [
				{ name: 'Vanilla', terms: ['Vanilla bean','Cream soda','Ice cream','Whipped cream','Coconut husk','Custard'] },
				{ name: 'Honey', terms: ['Clover honey','Honey sticks','Maple syrup','Honeycomb','Honey roasted nuts','Beeswax'] },
				{ name: 'Toffee / Caramel', terms: ['Brown sugar','Caramel','Butterscotch','Toffee','Molasses','Toasted sugar'] },
				{ name: 'Confectionery', terms: ['Marshmallow','Nougat','Cake Icing','Taffy','Bubblegum','Marzipan'] },
				{ name: 'Chocolate', terms: ['Dark chocolate','Milk chocolate','White chocolate','Cocoa powder','Chocolate mousse','Fudge'] },
				{ name: 'Baked sweet', terms: ['Cookies','Graham cracker','Pastry','Shortbread','Fruit cake','Creme brûlée'] },
			]},
			{ name: 'Cereal / Grainy', desc: 'Malt, nuts, bread and cooked grain — the raw material speaking through.', subs: [
				{ name: 'Nutty', terms: ['Peanut','Almond','Cashew','Hazelnut','Pecan','Pistachio','Walnut'] },
				{ name: 'Dry cereals', terms: ['Cereals','Bran flakes','Popcorn','Cornbread','Granola','Tortilla','Rice crackers'] },
				{ name: 'Wet cereals', terms: ['Oatmeal','Soggy cereal','Sweetcorn','Mashed potato','Mash','Beer','Grits'] },
				{ name: 'Bread', terms: ['Fresh bread','Toast','Croissant','Flour','Sourdough','Biscuit','Pastry crust'] },
				{ name: 'Sweet Grain', terms: ['Cinnamon roll','Waffle','Pancake','Muffin','Pound cake','Pie','Graham cracker'] },
			]},
			{ name: 'Woody', desc: 'Oak and resin from the cask, from fresh-cut timber to old polished furniture.', subs: [
				{ name: 'Woodland', terms: ['Oak','Pine','Cedar','Maple','Mahogany','Hickory'] },
				{ name: 'New wood', terms: ['Sawdust','Lumber','Sandalwood','Pencil shavings','Wooden boxes','Barrel stave'] },
				{ name: 'Old wood', terms: ['Antique furniture','Musty library','Mahogany','Old leather','Cork','Barn'] },
				{ name: 'Resinous', terms: ['Pine resin','Tar','Incense','Wax','Turpentine','Varnish'] },
			]},
			{ name: 'Earthy', desc: 'Coffee, tobacco, damp and grass — mature, savoury notes from long maturation.', subs: [
				{ name: 'Coffee', terms: ['Roasted beans','Ground','Brewed','Burnt toast','Coffee house','Paper cup'] },
				{ name: 'Tobacco / Leather', terms: ['Cigar','Pipe','Horse saddle','Upholstery','Worn leather','Old books'] },
				{ name: 'Damp', terms: ['Moss','Bog','Wet earth','Forest floor','Damp soil','Mushrooms'] },
				{ name: 'Musty', terms: ['Cellar','Barnyard','Wet Cardboard','Pencils','Attic','Storage shed'] },
				{ name: 'Grassy', terms: ['Cut grass','Dry grass','Green leaves','Dry leaves','Hay','Mulch'] },
			]},
			{ name: 'Smoky / Peaty', desc: 'Smoke, brine and medicinal phenols; the signature of peated and coastal whiskies.', subs: [
				{ name: 'Smoke', terms: ['Bonfire','Smoked wood','Campfire','Charcoal','Cigar smoke','Ash'] },
				{ name: 'Medicinal', terms: ['Bandage','Iodine','Antiseptic','First aid kit','Hospital','Rubber'] },
				{ name: 'Sea', terms: ['Seaweed','Sea salt','Brine','Smoked salmon','Oysters','Shellfish'] },
				{ name: 'Meaty', terms: ['Smoked meat','Hickory BBQ','Mesquite','Burnt sugar','Pot roast','Steak'] },
			]},
			{ name: 'Spicy', desc: 'Baking spice, pepper heat and rye bite carried from grain and oak.', subs: [
				{ name: 'Baking spice', terms: ['Cinnamon','Nutmeg','Clove','Cardamom','Allspice','Ginger'] },
				{ name: 'Pepper / Heat', terms: ['Black pepper','Chilli heat','Onion','Ginger heat','Garlic','Wasabi'] },
				{ name: 'Exotic spice', terms: ['Cumin','Paprika','Coriander','Star anise','Liquorice','Wintergreen'] },
				{ name: 'Rye spice', terms: ['Mint','Rye bread','Caraway seed','Dill','Pumpernickel','Grain pepper'] },
			]},
			{ name: 'Sulphury / Feinty', desc: 'Struck-match, rubber and dairy notes — off-character from the distillation cuts.', subs: [
				{ name: 'Sulphury', terms: ['Struck match','Fireworks','Gunpowder','Charcoal','Natural gas','Skunk'] },
				{ name: 'Industrial', terms: ['Nail polish remover','Metallic','Marker','Rubbing alcohol','Paint','New carpet'] },
				{ name: 'Rubbery', terms: ['New tire','Pencil eraser','Rubber hose','Burnt rubber','New shoes','Balloons'] },
				{ name: 'Flawed', terms: ['Rotten vegetables','Egg','Wet dog','Mold','Boiled cabbage','Vomit (extreme feinty)'] },
				{ name: 'Dairy', terms: ['Butter','Yogurt','Cheese','Buttermilk','Sour cream','Milk'] },
			]},
		];
	}

	get total() {
		return this.data.reduce((a, f) => a + f.subs.reduce((b, s) => b + s.terms.length, 0), 0);
	}

	get famOptions() {
		return ['All Families', ...this.data.map(f => f.name)];
	}

	ok(l, c, h) {
		return `oklch(${l} ${Math.max(0, c).toFixed(3)} ${h})`;
	}

	themeFor(i) {
		return this.THEME[i] || { h: 40, c: .06 };
	}

	filter(q, ff) {
		q = (q || '').trim().toLowerCase();
		return this.data
			.map((f, i) => ({ f, i }))
			.filter(({ f }) => ff === 'All Families' || ff === f.name)
			.map(({ f, i }) => {
				const famMatch = q && f.name.toLowerCase().includes(q);
				let subs = f.subs.map(s => {
					const subMatch = famMatch || (q && s.name.toLowerCase().includes(q));
					const terms = (q && !subMatch) ? s.terms.filter(t => t.toLowerCase().includes(q)) : s.terms;
					return { name: s.name, terms, list: terms.join(', ') };
				});
				if (q) subs = subs.filter(s => s.terms.length > 0);
				const count = subs.reduce((a, s) => a + s.terms.length, 0);
				return { name: f.name, desc: f.desc, idx: i, numStr: String(i + 1).padStart(2, '0'), subs, count };
			})
			.filter(f => !q || f.count > 0);
	}

	init() {
		this._mount();
	}

	_mount() {
		this.el.innerHTML = this._scaffoldHtml();
		this._bindEvents();
		this._renderContent('D');
	}

	_famOptionsHtml() {
		return this.famOptions.map(o => `<option value="${o}">${o}</option>`).join('');
	}

	_heroHtml(subtitle) {
		return `
			<div class="tw-hero">
				<div>
					<div class="tw-eyebrow">The language of flavour</div>
					<h1 class="tw-title">Tasting<span class="tw-title-italic"> wheel</span></h1>
					<p class="tw-subtitle">${subtitle}</p>
				</div>
				<div class="tw-engraving-placeholder">engraving · tasting wheel</div>
			</div>
		`;
	}

	_scaffoldHtml() {
		const famOptionsHtml = this._famOptionsHtml();
		const tabs = [
			{ k: 'D', label: 'D · Family Tree' },
			{ k: 'A', label: 'A · Indexed Reference' },
			{ k: 'B', label: 'B · Family Cards' },
			{ k: 'C', label: 'C · Catalog Table' },
		].map(({ k, label }) =>
			`<button class="tw-tab${k === 'D' ? ' tw-tab--active' : ''}" data-view="${k}">${label}</button>`
		).join('');

		const pillsHtml = this.famOptions.map(name =>
			`<button class="tw-pill${name === 'All Families' ? ' tw-pill--active' : ''}" data-pill="${name}">${name === 'All Families' ? 'All' : name}</button>`
		).join('');

		const railHtml = this.famOptions.map(name =>
			`<div class="tw-a-rail-item${name === 'All Families' ? ' tw-a-rail-item--active' : ''}" data-rail="${name}">${name}</div>`
		).join('');

		return `
			<div class="tw-wrapper">
				<div class="tw-tabs">${tabs}</div>

				<div id="tw-pane-D" class="tw-pane">
					${this._heroHtml('A sensory map of whisky — eleven families of aroma and flavour, each branching down into its sub-families and individual notes.')}
					<div class="tw-controls">
						<input id="tw-search-D" class="tw-search" placeholder="Search flavours…" autocomplete="off">
						<div class="tw-filter-group">
							<span class="tw-filter-label">Family</span>
							<select id="tw-family-D" class="tw-select">${famOptionsHtml}</select>
						</div>
					</div>
					<div class="tw-count-bar-wrap">
						<div class="tw-count-bar">
							<span id="tw-count-D" class="tw-count-shown"></span>
							<span class="tw-count-note">Eleven families, each its own colour</span>
						</div>
					</div>
					<div id="tw-content-D" class="tw-content"></div>
				</div>

				<div id="tw-pane-A" class="tw-pane" hidden>
					${this._heroHtml('A sensory map of whisky — eleven families of aroma and flavour, traced from orchard fruit through honeyed oak to coastal peat smoke.')}
					<div class="tw-controls">
						<input id="tw-search-A" class="tw-search" placeholder="Search flavours…" autocomplete="off">
						<div class="tw-filter-group">
							<span class="tw-filter-label">Family</span>
							<select id="tw-family-A" class="tw-select">${famOptionsHtml}</select>
						</div>
					</div>
					<div class="tw-count-bar-wrap">
						<div class="tw-count-bar">
							<span id="tw-count-A" class="tw-count-shown"></span>
							<span class="tw-count-note">After the classic whisky flavour wheel</span>
						</div>
					</div>
					<div class="tw-content tw-content--has-rail">
						<div class="tw-a-rail">
							<div class="tw-a-rail-heading">Families</div>
							${railHtml}
						</div>
						<div id="tw-content-A" class="tw-a-families"></div>
					</div>
				</div>

				<div id="tw-pane-B" class="tw-pane" hidden>
					${this._heroHtml('A sensory map of whisky — eleven families of aroma and flavour, traced from orchard fruit through honeyed oak to coastal peat smoke.')}
					<div class="tw-controls tw-controls--B">
						<input id="tw-search-B" class="tw-search" placeholder="Search flavours…" autocomplete="off">
						<div id="tw-pills" class="tw-pills">${pillsHtml}</div>
					</div>
					<div class="tw-count-bar-wrap">
						<div class="tw-count-bar">
							<span id="tw-count-B" class="tw-count-shown"></span>
							<span class="tw-count-note">After the classic whisky flavour wheel</span>
						</div>
					</div>
					<div id="tw-content-B" class="tw-content"></div>
				</div>

				<div id="tw-pane-C" class="tw-pane" hidden>
					${this._heroHtml('A sensory map of whisky — eleven families of aroma and flavour, traced from orchard fruit through honeyed oak to coastal peat smoke.')}
					<div class="tw-controls">
						<input id="tw-search-C" class="tw-search" placeholder="Search flavours…" autocomplete="off">
						<div class="tw-filter-group">
							<span class="tw-filter-label">Family</span>
							<select id="tw-family-C" class="tw-select">${famOptionsHtml}</select>
						</div>
					</div>
					<div class="tw-count-bar-wrap">
						<div class="tw-count-bar">
							<span id="tw-count-C" class="tw-count-shown"></span>
							<span class="tw-count-note">After the classic whisky flavour wheel</span>
						</div>
					</div>
					<div id="tw-content-C" class="tw-content"></div>
				</div>
			</div>
		`;
	}

	_bindEvents() {
		// Tabs
		this.el.querySelectorAll('[data-view]').forEach(btn => {
			btn.addEventListener('click', () => this._switchView(btn.dataset.view));
		});

		// Search + family select per view
		['A', 'B', 'C', 'D'].forEach(v => {
			this.el.querySelector(`#tw-search-${v}`)?.addEventListener('input', e => {
				this.state[`q${v}`] = e.target.value;
				this._renderContent(v);
			});
			this.el.querySelector(`#tw-family-${v}`)?.addEventListener('change', e => {
				this.state[`f${v}`] = e.target.value;
				if (v === 'A') this._syncRailActive(e.target.value);
				this._renderContent(v);
			});
		});

		// Family pills (B)
		this.el.querySelector('#tw-pills')?.addEventListener('click', e => {
			const pill = e.target.closest('[data-pill]');
			if (!pill) return;
			this.state.fB = pill.dataset.pill;
			this.el.querySelectorAll('[data-pill]').forEach(p =>
				p.classList.toggle('tw-pill--active', p.dataset.pill === this.state.fB)
			);
			this._renderContent('B');
		});

		// Rail links (A) — event delegation
		this.el.addEventListener('click', e => {
			const rail = e.target.closest('[data-rail]');
			if (!rail) return;
			this.state.fA = rail.dataset.rail;
			this._syncRailActive(rail.dataset.rail);
			const sel = this.el.querySelector('#tw-family-A');
			if (sel) sel.value = this.state.fA;
			this._renderContent('A');
		});
	}

	_syncRailActive(value) {
		this.el.querySelectorAll('[data-rail]').forEach(r =>
			r.classList.toggle('tw-a-rail-item--active', r.dataset.rail === value)
		);
	}

	_switchView(v) {
		this.state.view = v;
		this.el.querySelectorAll('[data-view]').forEach(btn =>
			btn.classList.toggle('tw-tab--active', btn.dataset.view === v)
		);
		['A', 'B', 'C', 'D'].forEach(k => {
			const pane = this.el.querySelector(`#tw-pane-${k}`);
			if (pane) pane.hidden = k !== v;
		});
		this._renderContent(v);
	}

	_renderContent(v) {
		const q = this.state[`q${v}`];
		const ff = this.state[`f${v}`];
		const fams = this.filter(q, ff);
		const shown = fams.reduce((a, f) => a + f.count, 0);

		const countEl = this.el.querySelector(`#tw-count-${v}`);
		if (countEl) countEl.textContent = `${shown} of ${this.total} tasting notes`;

		const content = this.el.querySelector(`#tw-content-${v}`);
		if (!content) return;

		if (fams.length === 0) {
			content.innerHTML = `<div class="tw-empty">No flavours match "${q}".</div>`;
			return;
		}

		if (v === 'D') content.innerHTML = this._htmlD(fams);
		else if (v === 'A') content.innerHTML = this._htmlA(fams);
		else if (v === 'B') content.innerHTML = this._htmlB(fams);
		else if (v === 'C') content.innerHTML = this._htmlC(fams);
	}

	// ——— Direction D: Family Tree ———

	_htmlD(fams) {
		return fams.map(f => {
			const { h, c } = this.themeFor(f.idx);
			const ok = (l, cm) => this.ok(l, c * cm, h);
			const n = f.subs.length;

			const spineColor = ok(.52, 1.6);

			const subsHtml = f.subs.map((s, j) => {
				const tt = n > 1 ? j / (n - 1) : 0;
				const labelBg  = ok(.50 + tt * 0.12 - (j % 2) * 0.07, 1.8);
				const nodeBg   = ok(.955 - tt * 0.04 - (j % 2) * 0.045, 0.55);
				const border   = ok(.80  - tt * 0.04 - (j % 2) * 0.04,  0.9);

				const termsHtml = s.terms.map(t => `
					<div class="tw-d-term-spine" style="background:${border};"></div>
					<div class="tw-d-node" style="background:${nodeBg};border-color:${border};">${t}</div>
				`).join('');

				return `
					<div class="tw-d-col">
						<div class="tw-d-col-spine" style="background:${spineColor};"></div>
						<div class="tw-d-sublabel" style="background:${labelBg};">${s.name}</div>
						${termsHtml}
					</div>
				`;
			}).join('');

			const headerBg  = ok(.40, 1.9);
			const headerFg  = '#fdf9ef';
			const headerSub = ok(.86, 0.55);

			return `
				<div class="tw-d-family">
					<div class="tw-d-family-header" style="background:${headerBg};">
						<span class="tw-d-family-num" style="color:${headerSub};">${f.numStr}</span>
						<span class="tw-d-family-name" style="color:${headerFg};">${f.name}</span>
						<span class="tw-d-family-count" style="color:${headerSub};">${f.count} notes</span>
					</div>
					<p class="tw-d-family-desc">${f.desc}</p>
					<div class="tw-d-v-spine" style="background:${spineColor};"></div>
					<div class="tw-d-tree" style="border-top-color:${spineColor};">
						${subsHtml}
					</div>
				</div>
			`;
		}).join('');
	}

	// ——— Direction A: Indexed Reference ———

	_htmlA(fams) {
		return fams.map(f => {
			const subsHtml = f.subs.map(s => `
				<div class="tw-a-sub-row">
					<div class="tw-a-sub-name">${s.name}</div>
					<div class="tw-a-sub-list">${s.list}</div>
				</div>
			`).join('');

			return `
				<div class="tw-a-family">
					<div class="tw-a-family-header">
						<span class="tw-a-num">${f.numStr}</span>
						<h2 class="tw-a-name">${f.name}</h2>
						<span class="tw-a-count">${f.count} NOTES</span>
					</div>
					<p class="tw-a-desc">${f.desc}</p>
					<div class="tw-a-subs">${subsHtml}</div>
				</div>
			`;
		}).join('');
	}

	// ——— Direction B: Family Cards ———

	_htmlB(fams) {
		const cardsHtml = fams.map(f => {
			const subsHtml = f.subs.map(s => {
				const tagsHtml = s.terms.map(t => `<span class="tw-b-tag">${t}</span>`).join('');
				return `
					<div class="tw-b-sub">
						<div class="tw-b-sub-name">${s.name}</div>
						<div class="tw-b-tags">${tagsHtml}</div>
					</div>
				`;
			}).join('');

			return `
				<div class="tw-b-card">
					<div class="tw-b-card-header">
						<div class="tw-b-card-title-group">
							<span class="tw-b-num">${f.numStr}</span>
							<h3 class="tw-b-name">${f.name}</h3>
						</div>
						<span class="tw-b-count">${f.count}</span>
					</div>
					<p class="tw-b-desc">${f.desc}</p>
					<div class="tw-b-subs">${subsHtml}</div>
				</div>
			`;
		}).join('');

		return `<div class="tw-b-grid">${cardsHtml}</div>`;
	}

	// ——— Direction C: Catalog Table ———

	_htmlC(fams) {
		const rowsHtml = fams.map(f => {
			const subsHtml = f.subs.map((s, i) => `
				<div class="tw-c-row${i % 2 ? ' tw-c-row--alt' : ''}">
					<div></div>
					<div class="tw-c-sub-name">${s.name}</div>
					<div class="tw-c-sub-list">${s.list}</div>
				</div>
			`).join('');

			return `
				<div class="tw-c-family-band">
					<span class="tw-c-family-id"><span class="tw-c-num">${f.numStr}</span>${f.name}</span>
					<span class="tw-c-count">${f.count} notes</span>
				</div>
				${subsHtml}
			`;
		}).join('');

		return `
			<div class="tw-c-table">
				<div class="tw-c-head">
					<div>Family</div>
					<div>Sub-family</div>
					<div>Descriptors</div>
				</div>
				${rowsHtml}
			</div>
		`;
	}
}
