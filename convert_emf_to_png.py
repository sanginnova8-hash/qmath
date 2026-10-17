import glob
import os
import json
import sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

emf_files = glob.glob('public/imported_images/*.emf')
print(f"Found {len(emf_files)} EMF files to convert.")

converted_count = 0
for emf_path in emf_files:
    png_path = emf_path[:-4] + '.png'
    try:
        im = Image.open(emf_path)
        im.save(png_path, 'PNG')
        converted_count += 1
        print(f"✓ Converted: {os.path.basename(emf_path)} -> {os.path.basename(png_path)} ({im.size})")
    except Exception as e:
        print(f"✗ Failed {emf_path}: {e}")

print(f"\nTotal converted to PNG: {converted_count}/{len(emf_files)}")

# Now update exam_bank_tap1.json
bank_path = 'public/data/exam_bank_tap1.json'
with open(bank_path, 'r', encoding='utf-8') as f:
    text = f.read()

count_emf_refs = text.count('.emf')
print(f"Found {count_emf_refs} references to .emf in {bank_path}")

new_text = text.replace('.emf', '.png')
with open(bank_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print(f"Successfully updated all .emf references to .png in {bank_path}!")
