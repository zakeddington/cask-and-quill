-- ============================================================
-- Flavor Families table
-- ============================================================
CREATE TABLE flavor_families (
	id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name        text NOT NULL,
	description text NOT NULL DEFAULT '',
	subs        jsonb NOT NULL DEFAULT '[]'::jsonb,
	sort_order  int NOT NULL
);

ALTER TABLE flavor_families ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_read" ON flavor_families
	FOR SELECT USING (true);

CREATE POLICY "auth_write" ON flavor_families
	FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================
-- Seed data
-- ============================================================
INSERT INTO flavor_families (name, description, subs, sort_order) VALUES

('Fruity', 'Orchard, citrus and tropical notes — the bright, juicy side of the spirit.', $json$[
	{"name":"Fresh fruit","terms":["Apple","Pear","Banana","Peach","Apricot","Melon","Grape"]},
	{"name":"Citrus","terms":["Lemon","Orange","Grapefruit","Lime","Tangerine","Zest","Kiwi"]},
	{"name":"Stone fruit","terms":["Peach","Apricot","Plum","Nectarine","Fig","Cherry","Mango"]},
	{"name":"Tropical","terms":["Pineapple","Mango","Coconut","Banana","Papaya","Passion fruit","Guava"]},
	{"name":"Berry","terms":["Cherry","Raspberry","Strawberry","Blackberry","Blueberry","Cranberry","Pomegranate"]},
	{"name":"Dried fruit","terms":["Raisin","Prune","Date","Dried fig","Dried apricot","Banana chips","Fruit cake"]},
	{"name":"Cooked fruit","terms":["Fruit Pie","Cobbler","Jam (sweet)","Marmalade (citrus)","Grilled pineapple","Cranberry sauce","Fried plantains"]},
	{"name":"Artificial","terms":["Cherry cola","Hard candies","Bubblegum","Fruit Pastry","Taffy","Red Licorice","Cough syrup"]}
]$json$::jsonb, 1),

('Floral', 'Petals, blossom and perfume; delicate aromatics common in lighter malts.', $json$[
	{"name":"Fresh flowers","terms":["Rose","Violet","Lavender","Wildflowers","Rhododendron","Carnation"]},
	{"name":"Exotic","terms":["Honeysuckle","Orange blossom","Heather","Jasmine","Lily","Orchid"]},
	{"name":"Perfumed","terms":["Bar Soap","Shampoo","Perfume","Fabric softener","Potpourri","Florist shop"]}
]$json$::jsonb, 2),

('Herbal', 'Mint, fresh herbs and medicinal greens drawn from grain and botanicals.', $json$[
	{"name":"Minty","terms":["Spearmint","Peppermint","Wintergreen"]},
	{"name":"Fresh","terms":["Basil","Thyme","Sage","Rosemary","Oregano","Lemon balm","Cilantro"]},
	{"name":"Aromatic","terms":["Liquorice","Star anise","Dill","Black tea","Green tea","Herbal tea","Chamomile"]},
	{"name":"Medicinal","terms":["Eucalyptus","Vick's vapor rub","Aloe","Pine needle","Juniper","Lemon","Ginseng"]}
]$json$::jsonb, 3),

('Vegetal', 'Garden, root and cooked-vegetable notes — green rather than sweet.', $json$[
	{"name":"Garden","terms":["Bell peppers","Cucumber","Peas","Lettuce","Celery","Green beans","Tomato"]},
	{"name":"Root","terms":["Beets","Potato","Turnip","Radish","Carrot","Onion","Ginger"]},
	{"name":"Cooked","terms":["Cabbage","Brussel Sprouts","Spinach","Mashed Potatoes","Pot pie","Corn on the cob","Broccoli"]}
]$json$::jsonb, 4),

('Sweet', 'Vanilla, honey, caramel and chocolate; the confectionery core of oak-aged spirit.', $json$[
	{"name":"Vanilla","terms":["Vanilla bean","Cream soda","Ice cream","Whipped cream","Coconut husk","Custard"]},
	{"name":"Honey","terms":["Clover honey","Honey sticks","Maple syrup","Honeycomb","Honey roasted nuts","Beeswax"]},
	{"name":"Toffee / Caramel","terms":["Brown sugar","Caramel","Butterscotch","Toffee","Molasses","Toasted sugar"]},
	{"name":"Confectionery","terms":["Marshmallow","Nougat","Cake Icing","Taffy","Bubblegum","Marzipan"]},
	{"name":"Chocolate","terms":["Dark chocolate","Milk chocolate","White chocolate","Cocoa powder","Chocolate mousse","Fudge"]},
	{"name":"Baked sweet","terms":["Cookies","Graham cracker","Pastry","Shortbread","Fruit cake","Creme brûlée"]}
]$json$::jsonb, 5),

('Cereal / Grainy', 'Malt, nuts, bread and cooked grain — the raw material speaking through.', $json$[
	{"name":"Nutty","terms":["Peanut","Almond","Cashew","Hazelnut","Pecan","Pistachio","Walnut"]},
	{"name":"Dry cereals","terms":["Cereals","Bran flakes","Popcorn","Cornbread","Granola","Tortilla","Rice crackers"]},
	{"name":"Wet cereals","terms":["Oatmeal","Soggy cereal","Sweetcorn","Mashed potato","Mash","Beer","Grits"]},
	{"name":"Bread","terms":["Fresh bread","Toast","Croissant","Flour","Sourdough","Biscuit","Pastry crust"]},
	{"name":"Sweet Grain","terms":["Cinnamon roll","Waffle","Pancake","Muffin","Pound cake","Pie","Graham cracker"]}
]$json$::jsonb, 6),

('Woody', 'Oak and resin from the cask, from fresh-cut timber to old polished furniture.', $json$[
	{"name":"Woodland","terms":["Oak","Pine","Cedar","Maple","Mahogany","Hickory"]},
	{"name":"New wood","terms":["Sawdust","Lumber","Sandalwood","Pencil shavings","Wooden boxes","Barrel stave"]},
	{"name":"Old wood","terms":["Antique furniture","Musty library","Mahogany","Old leather","Cork","Barn"]},
	{"name":"Resinous","terms":["Pine resin","Tar","Incense","Wax","Turpentine","Varnish"]}
]$json$::jsonb, 7),

('Earthy', 'Coffee, tobacco, damp and grass — mature, savoury notes from long maturation.', $json$[
	{"name":"Coffee","terms":["Roasted beans","Ground","Brewed","Burnt toast","Coffee house","Paper cup"]},
	{"name":"Tobacco / Leather","terms":["Cigar","Pipe","Horse saddle","Upholstery","Worn leather","Old books"]},
	{"name":"Damp","terms":["Moss","Bog","Wet earth","Forest floor","Damp soil","Mushrooms"]},
	{"name":"Musty","terms":["Cellar","Barnyard","Wet Cardboard","Pencils","Attic","Storage shed"]},
	{"name":"Grassy","terms":["Cut grass","Dry grass","Green leaves","Dry leaves","Hay","Mulch"]}
]$json$::jsonb, 8),

('Smoky / Peaty', 'Smoke, brine and medicinal phenols; the signature of peated and coastal whiskies.', $json$[
	{"name":"Smoke","terms":["Bonfire","Smoked wood","Campfire","Charcoal","Cigar smoke","Ash"]},
	{"name":"Medicinal","terms":["Bandage","Iodine","Antiseptic","First aid kit","Hospital","Rubber"]},
	{"name":"Sea","terms":["Seaweed","Sea salt","Brine","Smoked salmon","Oysters","Shellfish"]},
	{"name":"Meaty","terms":["Smoked meat","Hickory BBQ","Mesquite","Burnt sugar","Pot roast","Steak"]}
]$json$::jsonb, 9),

('Spicy', 'Baking spice, pepper heat and rye bite carried from grain and oak.', $json$[
	{"name":"Baking spice","terms":["Cinnamon","Nutmeg","Clove","Cardamom","Allspice","Ginger"]},
	{"name":"Pepper / Heat","terms":["Black pepper","Chilli heat","Onion","Ginger heat","Garlic","Wasabi"]},
	{"name":"Exotic spice","terms":["Cumin","Paprika","Coriander","Star anise","Liquorice","Wintergreen"]},
	{"name":"Rye spice","terms":["Mint","Rye bread","Caraway seed","Dill","Pumpernickel","Grain pepper"]}
]$json$::jsonb, 10),

('Sulphury / Feinty', 'Struck-match, rubber and dairy notes — off-character from the distillation cuts.', $json$[
	{"name":"Sulphury","terms":["Struck match","Fireworks","Gunpowder","Charcoal","Natural gas","Skunk"]},
	{"name":"Industrial","terms":["Nail polish remover","Metallic","Marker","Rubbing alcohol","Paint","New carpet"]},
	{"name":"Rubbery","terms":["New tire","Pencil eraser","Rubber hose","Burnt rubber","New shoes","Balloons"]},
	{"name":"Flawed","terms":["Rotten vegetables","Egg","Wet dog","Mold","Boiled cabbage","Vomit (extreme feinty)"]},
	{"name":"Dairy","terms":["Butter","Yogurt","Cheese","Buttermilk","Sour cream","Milk"]}
]$json$::jsonb, 11);
