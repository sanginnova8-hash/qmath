import re

def replace_overset_arrow(s: str) -> str:
    # Match \overset\rightarrow or \overset{\rightarrow} followed by {
    pattern = re.compile(r'\\overset\s*(?:\{\s*)?\\rightarrow(?:\s*\})?\s*\{')
    while True:
        m = pattern.search(s)
        if not m:
            break
        start_idx = m.end() - 1
        depth = 0
        end_idx = -1
        for i in range(start_idx, len(s)):
            if s[i] == '{':
                depth += 1
            elif s[i] == '}':
                depth -= 1
                if depth == 0:
                    end_idx = i
                    break
        if end_idx != -1:
            inner = s[start_idx + 1:end_idx].strip()
            # Clean leading/trailing \,\,
            inner = re.sub(r'^\\[,;]\s*', '', inner)
            inner = re.sub(r'\\[,;]\s*$', '', inner)
            # Handle comma attached inside e.g. \overset\rightarrow{ b, }
            comma = ""
            if inner.endswith(','):
                inner = inner[:-1].strip()
                comma = ","
            s = s[:m.start()] + f"\\overrightarrow{{{inner}}}" + comma + s[end_idx + 1:]
        else:
            break
    return s

def clean_latex(latex_str: str) -> str:
    if not latex_str:
        return ""
    
    s = latex_str
    
    # 1. Strip private use area characters and non-breaking spaces
    s = re.sub(r'[\uEF00-\uEFFF]', ' ', s)
    s = s.replace('\u200b', '') # zero width space
    s = s.replace('\u00a0', ' ') # non-breaking space
    
    # 2. Fix \overset\rightarrow { ... } to \overrightarrow{...} using balanced brace matching
    s = replace_overset_arrow(s)
    
    # 3. Fix postfix vector notations: e.g. "a \vec" -> "\vec{a}", "n \vec _{ 3 }" -> "\vec{n}_{3}"
    s = re.sub(r'([a-zA-Z0-9\']+)\s*\\vec\s*(_\s*\{[^}]+\}|_[0-9a-zA-Z])?', lambda m: f"\\vec{{{m.group(1)}}}{m.group(2) or ''}", s)
    # Handle lone \vec at end or before punctuation/operators
    s = re.sub(r'\\vec(?![a-zA-Z{])', '', s)
    
    # 4. Fix \left \begin{array} -> \left. \begin{array}
    s = re.sub(r'\\left\s+\\begin', r'\\left. \\begin', s)
    
    # 5. Fix double backslash before \left (e.g. \mathbb{R}\\left[ -> \mathbb{R}\setminus \left[)
    s = re.sub(r'\\{2,}\s*left(?=\s*\\?[\{\[\(])', r'\\setminus \\left', s)
    s = re.sub(r'\\{2,}\s*\\\{', r'\\setminus \\{', s)
    
    # 6. Fix malformed arrays like \begin{array} {} \begin{array} {} \end{array}
    s = re.sub(r'\\begin\{array\}\s*\{\}\s*\\begin\{array\}\s*\{\}\s*\\begin\{array\}\s*\{\}\s*\\end\{array\}', '', s)
    s = re.sub(r'\\begin\{array\}\s*\{\}\s*\\begin\{array\}\s*\{\}\s*\\end\{array\}', '', s)
    s = re.sub(r'\\begin\{array\}\s*\{\}\s*\\end\{array\}', '', s)
    
    # 7. Replace \| with \mid (condition bar in sets)
    s = s.replace(r'\|', r' \mid ')
    
    # 8. Standardize Unicode mathematical symbols to ASCII LaTeX (from GEMINI.md standards)
    unicode_math_map = {
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
        '–': '-',  # en-dash to hyphen
        '—': '-',  # em-dash to hyphen
        '′': "'",  # prime
        '→': r' \rightarrow ',
        '⇒': r' \Rightarrow ',
        '⇔': r' \Leftrightarrow '
    }
    
    for u_char, tex_equiv in unicode_math_map.items():
        s = s.replace(u_char, tex_equiv)
        
    # Replace Vietnamese 'Đ' in math mode
    s = re.sub(r'(?<![a-zA-Z\\])Đ(?![a-zA-Z])', r'\\text{Đ}', s)
    
    # 9. Fix extra curly braces inside parentheses like \left ( { ... } \right )
    # Often MathType produces \left ( { a } \right ) -> \left( a \right)
    s = re.sub(r'\\left\s*\(\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\)', r'\\left( \1 \\right)', s)
    s = re.sub(r'\\left\s*\[\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\]', r'\\left[ \1 \\right]', s)
    s = re.sub(r'\\left\s*\\\{\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\\\}', r'\\left\\{ \1 \\right\\}', s)
    
    # Clean multiple spaces
    s = re.sub(r'[ \t]{2,}', ' ', s)
    return s.strip()

