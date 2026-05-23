"""
Generates seed.csv from the Excel inventory for import into Supabase.
Run: python3 supabase/seed.py
Then import supabase/seed.csv via the Supabase table editor (CSV import).
"""
import csv, json, openpyxl
from pathlib import Path

EXCEL = Path(__file__).parent.parent / 'resources' / 'Whiskey-Inventory-Journal--v5.xlsx'
OUTPUT = Path(__file__).parent / 'seed.csv'

FILL_MAP = {
    '🟢': 'plenty',
    '🟡': 'average',
    '🔴': 'low',
    '❗': 'extremely-low',
    '⚫': 'bottle-kill',
}

def clean(v):
    if v is None: return ''
    s = str(v).strip()
    try:
        f = float(s)
        if f == int(f): return str(int(f))
    except (ValueError, OverflowError):
        pass
    return '' if s == 'None' else s

def mash_str(v):
    if v is None: return ''
    s = str(v).strip()
    return '' if s == 'None' else s

def fmt_abv(v):
    if v is None: return ''
    try:
        f = float(v)
        return f'{int(f)}%' if f == int(f) else f'{f:.1f}%'
    except: return ''

def fmt_proof(v):
    if v is None: return ''
    try:
        f = float(v)
        return f'{int(f)}°' if f == int(f) else f'{f:.1f}°'
    except: return ''

wb = openpyxl.load_workbook(EXCEL, data_only=True)
ws = wb['Bottles']

COLUMNS = ['id', 'fill', 'category', 'type', 'brand', 'bottle', 'age', 'abv', 'proof',
           'cask', 'distillery', 'corp_owner', 'origin', 'char_level', 'mash_bill', 'tasting_notes']

rows = []
id_counter = 1

for row in ws.iter_rows(min_row=2, values_only=True):
    corp, origin, distillery, category, btype, fill, brand, bottle, proof, abv, age, cask, char, \
    corn, rye, malted_rye, barley, malted_barley, wheat, nose, palate, finish, shade_id = row

    if not brand and not bottle:
        continue
    brand_str = clean(brand)
    bottle_str = clean(bottle)
    if brand_str == 'Bottle Kill' and not bottle_str:
        continue

    mash_bill = json.dumps({
        'corn': mash_str(corn),
        'barley': mash_str(barley),
        'maltedBarley': mash_str(malted_barley),
        'rye': mash_str(rye),
        'maltedRye': mash_str(malted_rye),
        'wheat': mash_str(wheat),
    })
    tasting_notes = json.dumps({
        'nose': clean(nose),
        'palate': clean(palate),
        'finish': clean(finish),
    })

    rows.append({
        'id': str(id_counter).zfill(4),
        'fill': FILL_MAP.get(fill, ''),
        'category': clean(category),
        'type': clean(btype),
        'brand': brand_str,
        'bottle': bottle_str,
        'age': clean(age),
        'abv': fmt_abv(abv),
        'proof': fmt_proof(proof),
        'cask': clean(cask),
        'distillery': clean(distillery),
        'corp_owner': clean(corp),
        'origin': clean(origin),
        'char_level': clean(char),
        'mash_bill': mash_bill,
        'tasting_notes': tasting_notes,
    })
    id_counter += 1

with open(OUTPUT, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=COLUMNS)
    writer.writeheader()
    writer.writerows(rows)

print(f'Wrote {len(rows)} rows to {OUTPUT}')
