# -*- coding: utf-8 -*-
"""
Toàn bộ quy trình trích xuất & chuẩn hóa dữ liệu từ:
D:\TOAN\THPT\Tài liệu ôn Thi TN THPT\40 Chuyên đề ôn TN 2026 tập 1 1-21.docx
lên hệ thống App Kiểm Tra Toán THPT.

Áp dụng quy chuẩn Toán học & LaTeX từ:
D:\TOAN\SOẠN TÀI LIỆU DẠY THÊM\GEMINI.md
- Chuẩn KaTeX / MathType Toggle TeX 100% ASCII
- Thay thế triệt để ký tự Unicode toán học (\\le, \\ge, \\in, \\ne, \\pi, v.v.)
- Tách chuẩn xác 4 phương án A, B, C, D không bị nuốt dòng hay chồng câu
- Giữ nguyên toàn bộ hình ảnh vector / sơ đồ
"""

import os
import sys
import zipfile
import re
import json
import time
import xml.etree.ElementTree as ET

sys.stdout.reconfigure(encoding='utf-8')

from mtef_py_src.mtef import MTEF
from latex_cleaner import clean_latex

docx_path = r"D:\TOAN\THPT\Tài liệu ôn Thi TN THPT\40 Chuyên đề ôn TN 2026 tập 1 1-21.docx"

if not os.path.exists(docx_path):
    print(f"LỖI: Không tìm thấy file nguồn tại {docx_path}")
    sys.exit(1)

def decode_ole_to_latex(ole_bytes):
    try:
        mtef, err = MTEF.OpenBytes(ole_bytes)
        if err or not mtef:
            return ""
        raw = mtef.Translate()
        if not raw:
            return ""
        raw = raw.strip()
        if raw.startswith('$') and raw.endswith('$'):
            raw = raw[1:-1].strip()
        return clean_latex(raw)
    except Exception:
        return ""

t_start = time.time()
print("=== BẮT ĐẦU XỬ LÝ TOÀN BỘ 40 CHUYÊN ĐỀ TẬP 1 ===")

cache_path = os.path.join('public', 'data', 'ole_latex_cache.json')
ole_latex_map = {}
image_bytes_map = {}

print("1. Trích xuất tài liệu Word, hình ảnh và công thức MathType...")
t0 = time.time()

with zipfile.ZipFile(docx_path) as z:
    for info in z.infolist():
        fn = info.filename
        if 'media/' in fn and not fn.endswith('.wmf'):
            norm = fn.replace('word/', '')
            image_bytes_map[norm] = z.read(info)

    rels_xml = z.read('word/_rels/document.xml.rels')
    doc_xml = z.read('word/document.xml')

    # Check cache for OLE to latex
    if os.path.exists(cache_path):
        print("   -> Tải cache công thức MathType đã dịch...")
        with open(cache_path, 'r', encoding='utf-8') as f:
            ole_latex_map = json.load(f)
        # Apply clean_latex to all cached items
        for k, v in ole_latex_map.items():
            ole_latex_map[k] = clean_latex(v)
    else:
        print("   -> Đang dịch 8,325 OLE objects MathType sang LaTeX...")
        for info in z.infolist():
            fn = info.filename
            if 'embeddings/oleObject' in fn:
                norm = fn.replace('word/', '')
                ole_latex_map[norm] = decode_ole_to_latex(z.read(info))
        os.makedirs(os.path.dirname(cache_path), exist_ok=True)
        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(ole_latex_map, f, ensure_ascii=False)

print(f"   -> Đã xử lý {len(ole_latex_map)} công thức MathType và {len(image_bytes_map)} hình vẽ trong {time.time() - t0:.2f}s!")

# Save genuine images to public/imported_images/
images_dir = os.path.join('public', 'imported_images')
os.makedirs(images_dir, exist_ok=True)
for img_name, img_data in image_bytes_map.items():
    base_name = os.path.basename(img_name)
    with open(os.path.join(images_dir, base_name), 'wb') as f:
        f.write(img_data)

# 2. Parse relationships
root_rels = ET.fromstring(rels_xml)
rels_map = {}
for rel in root_rels:
    r_id = rel.attrib.get('Id')
    target = rel.attrib.get('Target')
    if r_id and target:
        rels_map[r_id] = target.replace('../', '').replace('word/', '')

# 3. Parse paragraphs in document.xml
print("2. Phân tích văn bản Word...")
t1 = time.time()
root_doc = ET.fromstring(doc_xml)
ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
}

def para_to_text(p):
    parts = []
    for node in p.iter():
        tag = node.tag.split('}')[-1]
        if tag == 't':
            parts.append(node.text or '')
        elif tag == 'tab':
            parts.append('\t')
        elif tag == 'OLEObject':
            r_id = node.attrib.get(f"{{{ns['r']}}}id")
            if r_id and r_id in rels_map:
                target = rels_map[r_id]
                latex = ole_latex_map.get(target, '')
                if latex:
                    parts.append(f" ${latex}$ ")
                else:
                    parts.append(" ")
        elif tag == 'blip':
            r_embed = node.attrib.get(f"{{{ns['r']}}}embed")
            if r_embed and r_embed in rels_map:
                img_target = rels_map[r_embed]
                base_img = os.path.basename(img_target)
                if not base_img.endswith('.wmf'):
                    parts.append(f"\n\n![Hình vẽ](/imported_images/{base_img})\n\n")
    txt = "".join(parts).strip()
    return txt

all_paras = []
for p in root_doc.iter(f"{{{ns['w']}}}p"):
    t = para_to_text(p)
    if t:
        all_paras.append(t)

print(f"   -> Đã bóc tách {len(all_paras)} đoạn văn bản trong {time.time() - t1:.2f}s!")

# 4. Group by Chuyên đề and extract questions
print("3. Nhận diện các Chuyên đề và bóc tách chuẩn xác câu hỏi & 4 phương án...")
chuyen_de_titles = {
    1: "Phương trình lượng giác cơ bản",
    2: "Cấp số cộng – Cấp số nhân",
    3: "Phép đếm – Hoán vị, Chỉnh hợp, Tổ hợp",
    4: "Phương trình Mũ – Logarit cơ bản",
    5: "Bất phương trình Mũ – Logarit cơ bản",
    6: "Quan hệ song song trong không gian",
    7: "Quan hệ vuông góc trong không gian",
    8: "Góc – Khoảng cách trong không gian",
    9: "Thể tích khối đa diện",
    10: "Tính đơn điệu dựa vào BBT và đồ thị",
    11: "Cực trị của hàm số",
    12: "Giá trị lớn nhất và nhỏ nhất của hàm số",
    13: "Tiệm cận của đồ thị hàm số",
    14: "Nhận dạng đồ thị hàm số",
    15: "Vectơ trong không gian",
    16: "Thống kê mẫu số liệu ghép nhóm",
    17: "Nguyên hàm của các hàm số đơn giản",
    18: "Tích phân các hàm số đơn giản",
    19: "Ứng dụng hình học của tích phân",
    20: "Tọa độ trong không gian Oxyz",
    21: "Phương trình mặt phẳng trong không gian"
}

cd_regex = re.compile(r'^(?:CHUYÊN ĐỀ|Chuyên đề)\s*0?(\d+)[\s:.\-–]+(.*)', re.IGNORECASE)

cd_blocks = []
curr_cd = None
skip_toc = True

for p in all_paras:
    m = cd_regex.match(p)
    if m:
        num = int(m.group(1))
        title = m.group(2).strip()
        if 1 <= num <= 21:
            if num == 1 and ("A. KIẾN THỨC" in p or "CƠ BẢN" in p.upper()):
                skip_toc = False
            if not skip_toc:
                if not curr_cd or curr_cd['num'] != num:
                    clean_t = chuyen_de_titles.get(num, title)
                    curr_cd = {
                        'num': num,
                        'name': f"Chuyên đề {num:02d}: {clean_t}",
                        'paras': []
                    }
                    cd_blocks.append(curr_cd)
                    continue
    if not skip_toc and curr_cd:
        curr_cd['paras'].append(p)

print(f"   -> Đã gom nhóm {len(cd_blocks)} Chuyên đề:")

def extract_options_from_text(p: str):
    # Match option markers: A., B., C., D. or *A., *B.
    pattern = re.compile(r'(?<![a-zA-Z0-9])(\*?\s*([A-D])[.)])(?:\s+|$)')
    matches = list(pattern.finditer(p))
    if not matches:
        return None, []
    
    pre_text = p[:matches[0].start()].strip()
    opts = []
    for i in range(len(matches)):
        m = matches[i]
        opt_raw = m.group(1)
        opt_id = m.group(2)
        is_correct = '*' in opt_raw
        
        start_pos = m.end()
        end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(p)
        opt_text = p[start_pos:end_pos].strip()
        
        # Clean trailing dot if not inside math
        if opt_text.endswith('.') and not opt_text.endswith('$.'):
            opt_text = opt_text[:-1].strip()
        elif opt_text.endswith('$.'):
            opt_text = opt_text[:-1]
            
        # Clean LaTeX formulas inside option text
        parts = re.split(r'(\$[^$]+\$)', opt_text)
        cleaned_opt = []
        for pt in parts:
            if pt.startswith('$') and pt.endswith('$'):
                cleaned_opt.append('$' + clean_latex(pt[1:-1]) + '$')
            else:
                cleaned_opt.append(pt)
        opt_text = "".join(cleaned_opt).strip()
        
        opts.append({
            'id': opt_id,
            'text': opt_text,
            'is_correct': is_correct
        })
    return pre_text, opts

all_questions = []

for c in cd_blocks:
    cd_num = c['num']
    cd_name = c['name']
    
    in_exercises = False
    current_q = None
    q_index_in_cd = 0
    
    def finish_q(q):
        if q and len(q['options']) >= 2:
            # Deduplicate options by id, keeping first occurrence
            seen_ids = set()
            unique_opts = []
            for o in q['options']:
                if o['id'] not in seen_ids:
                    seen_ids.add(o['id'])
                    unique_opts.append(o)
            # Ensure options are sorted A, B, C, D
            unique_opts.sort(key=lambda x: x['id'])
            q['options'] = unique_opts
            
            # Clean content latex formulas
            parts = re.split(r'(\$[^$]+\$)', q['content'])
            cleaned_parts = []
            for pt in parts:
                if pt.startswith('$') and pt.endswith('$'):
                    cleaned_parts.append('$' + clean_latex(pt[1:-1]) + '$')
                else:
                    cleaned_parts.append(pt)
            q['content'] = "".join(cleaned_parts).strip()
            
            # Extract images from content
            img_match = re.findall(r'!\[.*?\]\((/imported_images/[^)]+)\)', q['content'])
            q['images'] = list(dict.fromkeys(img_match))
            
            all_questions.append(q)
        return None

    for p in c['paras']:
        # Detect start of exercise section
        if re.search(r'B\.\s*BÀI TẬP', p, re.IGNORECASE):
            in_exercises = True
            continue
        if not in_exercises:
            continue
            
        pre_text, opts = extract_options_from_text(p)
        
        if opts:
            first_opt_id = opts[0]['id']
            if first_opt_id == 'A':
                # If current_q already has options, finish previous question
                if current_q and len(current_q['options']) >= 2:
                    current_q = finish_q(current_q)
                
                # If introductory text before A.
                if pre_text:
                    if not current_q:
                        q_index_in_cd += 1
                        q_id = f"cd{cd_num:02d}-q{q_index_in_cd:03d}"
                        diff = 'TH'
                        if '[NB]' in pre_text or 'Nhận biết' in pre_text: diff = 'NB'
                        elif '[VD]' in pre_text or 'Vận dụng cao' in pre_text or 'VDC' in pre_text: diff = 'VDC' if ('VDC' in pre_text or 'cao' in pre_text) else 'VD'
                        elif '[TH]' in pre_text: diff = 'TH'
                        
                        clean_content = pre_text.replace('[NB]', '').replace('[TH]', '').replace('[VD]', '').replace('[VDC]', '').strip()
                        clean_content = re.sub(r'^(?:Câu|Bài)\s*\d+[\s:.\-–]*', '', clean_content).strip()
                        
                        current_q = {
                            'id': q_id,
                            'teacherId': 'teacher-nguyen-van-a',
                            'type': 'MCQ',
                            'grade': 12,
                            'chapter': cd_name,
                            'topic': chuyen_de_titles.get(cd_num, cd_name),
                            'difficulty': diff,
                            'content': clean_content,
                            'options': [],
                            'explanation': f"Hướng dẫn giải chi tiết cho {cd_name}.",
                            'createdAt': '2026-03-01T08:00:00.000Z',
                            'images': []
                        }
                    else:
                        current_q['content'] += '\n' + pre_text
                
                if current_q:
                    current_q['options'].extend(opts)
                else:
                    q_index_in_cd += 1
                    q_id = f"cd{cd_num:02d}-q{q_index_in_cd:03d}"
                    current_q = {
                        'id': q_id,
                        'teacherId': 'teacher-nguyen-van-a',
                        'type': 'MCQ',
                        'grade': 12,
                        'chapter': cd_name,
                        'topic': chuyen_de_titles.get(cd_num, cd_name),
                        'difficulty': 'TH',
                        'content': f"Câu hỏi {q_index_in_cd}",
                        'options': opts,
                        'explanation': f"Hướng dẫn giải chi tiết cho {cd_name}.",
                        'createdAt': '2026-03-01T08:00:00.000Z',
                        'images': []
                    }
            elif current_q and len(current_q['options']) > 0:
                if pre_text:
                    current_q['content'] += '\n' + pre_text
                current_q['options'].extend(opts)
                
                # If we now have all 4 options, finish question
                seen = {o['id'] for o in current_q['options']}
                if {'A', 'B', 'C', 'D'}.issubset(seen):
                    current_q = finish_q(current_q)
            else:
                pass
        else:
            # Paragraph without options
            if current_q and len(current_q['options']) >= 2:
                current_q = finish_q(current_q)
                
            if not current_q:
                q_index_in_cd += 1
                q_id = f"cd{cd_num:02d}-q{q_index_in_cd:03d}"
                diff = 'TH'
                if '[NB]' in p or 'Nhận biết' in p: diff = 'NB'
                elif '[VD]' in p or 'Vận dụng cao' in p or 'VDC' in p: diff = 'VDC' if ('VDC' in p or 'cao' in p) else 'VD'
                elif '[TH]' in p: diff = 'TH'
                
                clean_content = p.replace('[NB]', '').replace('[TH]', '').replace('[VD]', '').replace('[VDC]', '').strip()
                clean_content = re.sub(r'^(?:Câu|Bài)\s*\d+[\s:.\-–]*', '', clean_content).strip()
                
                current_q = {
                    'id': q_id,
                    'teacherId': 'teacher-nguyen-van-a',
                    'type': 'MCQ',
                    'grade': 12,
                    'chapter': cd_name,
                    'topic': chuyen_de_titles.get(cd_num, cd_name),
                    'difficulty': diff,
                    'content': clean_content,
                    'options': [],
                    'explanation': f"Hướng dẫn giải chi tiết cho {cd_name}.",
                    'createdAt': '2026-03-01T08:00:00.000Z',
                    'images': []
                }
            else:
                current_q['content'] += '\n' + p

    current_q = finish_q(current_q)

print(f"\n=== TỔNG KẾT: ĐÃ BÓC TÁCH THÀNH CÔNG {len(all_questions)} CÂU HỎI TRẮC NGHIỆM! ===")

# Build Answer Keys (default A with detection)
answer_keys = {}
for q in all_questions:
    correct_opt = 'A'
    for o in q['options']:
        if o.get('is_correct'):
            correct_opt = o['id']
            break
        if '*' in o['text']:
            correct_opt = o['id']
            o['text'] = o['text'].replace('*', '').strip()
            
    answer_keys[q['id']] = {
        'questionId': q['id'],
        'type': 'MCQ',
        'correctOption': correct_opt
    }

# Save output JSON
output_data = {
    'totalQuestions': len(all_questions),
    'totalChapters': len(cd_blocks),
    'chapters': [c['name'] for c in cd_blocks],
    'questions': all_questions,
    'answerKeys': answer_keys,
    'exportedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ')
}

out_path = os.path.join('public', 'data', 'exam_bank_tap1.json')
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"Đã ghi dữ liệu ra file: {out_path} ({os.path.getsize(out_path) // 1024} KB)")
print(f"Thời gian thực hiện toàn bộ quy trình: {time.time() - t_start:.2f}s!")
