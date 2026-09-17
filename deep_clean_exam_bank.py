import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Bảng chuyển đổi ký tự toán Unicode sang LaTeX ASCII chuẩn (Theo D:\TOAN\SOẠN TÀI LIỆU DẠY THÊM\GEMINI.md)
UNICODE_TO_LATEX = {
    '≤': r' \le ',
    '≥': r' \ge ',
    '≠': r' \ne ',
    '∈': r' \in ',
    '∉': r' \notin ',
    '⊂': r' \subset ',
    '⊃': r' \supset ',
    '∪': r' \cup ',
    '∩': r' \cap ',
    '∅': r' \emptyset ',
    '∀': r' \forall ',
    '∃': r' \exists ',
    '∞': r' \infty ',
    '⊥': r' \perp ',
    '⋅': r' \cdot ',
    '×': r' \times ',
    '±': r' \pm ',
    '∫': r' \int ',
    'ℝ': r' \mathbb{R} ',
    'π': r' \pi ',
    'α': r' \alpha ',
    'β': r' \beta ',
    'γ': r' \gamma ',
    'Δ': r' \Delta ',
    'δ': r' \delta ',
    'λ': r' \lambda ',
    'θ': r' \theta ',
    'φ': r' \varphi ',
    'ω': r' \omega ',
    '°': r'^\circ ',
    '–': '-',
    '—': '-',
    '′': "'",
    '→': r' \rightarrow ',
    '⇒': r' \Rightarrow ',
    '⇔': r' \Leftrightarrow '
}

def clean_math_snippet(math_str):
    if not math_str:
        return ""
    s = math_str
    
    # 1. Thay thế unicode
    for u_char, lat in UNICODE_TO_LATEX.items():
        if u_char in s:
            s = s.replace(u_char, lat)
            
    # 2. Chuẩn hóa các hàm chuẩn (cos, sin, tan, cot, log, ln, lim, min, max)
    s = re.sub(r'(?<!\\)\b(cos|sin|tan|cot|log|ln|lim|min|max)\b', r'\\\1', s)
    
    # 3. Chuẩn hóa \rm từ MathType
    s = re.sub(r'\\rm\s*\{\s*\\?\s*\}', ' ', s)
    s = re.sub(r'\{\s*\\rm\s*\{?\s*([^}]*?)\s*\}?\s*\}', r'\\mathrm{\1}', s)
    s = re.sub(r'\\rm\b', r'\\mathrm', s)
    
    # 4. Sửa \left ( { ... } \right ) của MathType thành \left( ... \right)
    s = re.sub(r'\\left\s*\(\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\)', r'\\left( \1 \\right)', s)
    s = re.sub(r'\\left\s*\[\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\]', r'\\left[ \1 \\right]', s)
    s = re.sub(r'\\left\s*\\\{\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\\\}', r'\\left\\{ \1 \\right\\}', s)
    
    # 5. Đảm bảo cân bằng \left và \right
    left_count = len(re.findall(r'\\left\b', s))
    right_count = len(re.findall(r'\\right\b', s))
    if left_count > right_count:
        s = s + (' \\right.' * (left_count - right_count))
    elif right_count > left_count:
        s = ('\\left. ' * (right_count - left_count)) + s
        
    # 6. Sửa vector
    s = re.sub(r'\\overset\s*(?:\{\s*)?\\rightarrow(?:\s*\})?\s*\{([^{}]+)\}', r'\\overrightarrow{\1}', s)
    
    # 7. Xóa khoảng trắng thừa
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def clean_text_with_math(text):
    if not text:
        return ""
    
    # 1. Chuẩn hóa đường dẫn hình ảnh cho tương thích 100% với GitHub Pages subpath
    # Đổi /imported_images/ thành ./imported_images/
    text = re.sub(r'!\[(.*?)\]\(/imported_images/(.*?)\)', r'![\1](./imported_images/\2)', text)
    
    # 2. Tách dấu chấm / phẩy ở cuối math: $\left( 0; 1 \right).$ -> $\left( 0; 1 \right)$ .
    text = re.sub(r'\$(\s*[^$]+?)\s*([\.\,\:\;])\$', r'$\1$ \2', text)
    
    # 3. Làm sạch các khối toán $$...$$ và $...$
    def replace_inline_math(match):
        math_content = match.group(1)
        cleaned = clean_math_snippet(math_content)
        return f"${cleaned}$"
        
    def replace_block_math(match):
        math_content = match.group(1)
        cleaned = clean_math_snippet(math_content)
        return f"$${cleaned}$$"
        
    # Xử lý $$...$$ trước
    text = re.sub(r'\$\$([\s\S]*?)\$\$', replace_block_math, text)
    # Xử lý $...$
    text = re.sub(r'\$([^$]+?)\$', replace_inline_math, text)
    
    # Xóa ký tự rác invisible
    text = re.sub(r'[\uEF00-\uEFFF\u200B\u00A0]', ' ', text)
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()

def main():
    print("Loading exam bank...")
    with open('public/data/exam_bank_tap1.json', 'r', encoding='utf-8') as f:
        bank = json.load(f)
        
    print(f"Total questions to clean: {len(bank['questions'])}")
    
    cleaned_q_count = 0
    img_fixed_count = 0
    
    for q in bank['questions']:
        orig_content = q.get('content', '')
        if '/imported_images/' in orig_content:
            img_fixed_count += 1
            
        q['content'] = clean_text_with_math(orig_content)
        
        if 'explanation' in q:
            q['explanation'] = clean_text_with_math(q['explanation'])
            
        if 'options' in q and q['options']:
            for opt in q['options']:
                opt['text'] = clean_text_with_math(opt.get('text', ''))
                
        cleaned_q_count += 1
        
    print(f"Cleaned {cleaned_q_count} questions!")
    print(f"Normalized image paths for {img_fixed_count} questions!")
    
    with open('public/data/exam_bank_tap1.json', 'w', encoding='utf-8') as f:
        json.dump(bank, f, ensure_ascii=False, indent=2)
        
    print("Successfully saved public/data/exam_bank_tap1.json!")

if __name__ == '__main__':
    main()
