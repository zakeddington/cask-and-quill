export class Flavors {
	constructor(el) {
		this.el = el;
		this.state = { q: '', family: 'All Families' };

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

	init() {
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
