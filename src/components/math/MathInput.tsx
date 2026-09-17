import React, { useEffect, useRef } from 'react';
import 'mathlive';

interface MathInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
}

// Declaring math-field web component for JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'math-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        value?: string;
        placeholder?: string;
        readOnly?: boolean;
      };
    }
  }
}

export const MathInput: React.FC<MathInputProps> = ({
  value,
  onChange,
  placeholder = 'Nhập câu trả lời toán học hoặc số...',
  className = '',
  readOnly = false
}) => {
  const mfRef = useRef<any>(null);

  useEffect(() => {
    const mf = mfRef.current;
    if (!mf) return;

    if (mf.value !== value) {
      mf.value = value;
    }

    const handleInput = (ev: Event) => {
      const target = ev.target as any;
      onChange(target.value);
    };

    mf.addEventListener('input', handleInput);
    return () => {
      mf.removeEventListener('input', handleInput);
    };
  }, [value, onChange]);

  const insertSymbol = (latex: string) => {
    const mf = mfRef.current;
    if (mf) {
      mf.executeCommand(['insert', latex]);
      onChange(mf.value);
      mf.focus();
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Quick Math Toolbar for student / teacher */}
      {!readOnly && (
        <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-100 border border-slate-200 rounded-lg text-xs font-mono">
          <span className="text-slate-500 font-sans mr-1 text-[11px] font-medium">Chèn nhanh:</span>
          <button
            type="button"
            onClick={() => insertSymbol('\\frac{#?}{#?}')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Phân số"
          >
            a/b
          </button>
          <button
            type="button"
            onClick={() => insertSymbol('\\sqrt{#?}')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Căn bậc hai"
          >
            √x
          </button>
          <button
            type="button"
            onClick={() => insertSymbol('^{#?}')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Lũy thừa"
          >
            xⁿ
          </button>
          <button
            type="button"
            onClick={() => insertSymbol('\\pi')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Số Pi"
          >
            π
          </button>
          <button
            type="button"
            onClick={() => insertSymbol('\\infty')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Vô cực"
          >
            ∞
          </button>
          <button
            type="button"
            onClick={() => insertSymbol('\\log_{#?}(#?)')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Logarit"
          >
            log
          </button>
          <button
            type="button"
            onClick={() => insertSymbol('\\ln(#?)')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Logarit tự nhiên"
          >
            ln
          </button>
          <button
            type="button"
            onClick={() => insertSymbol('\\int_{#?}^{#?}')}
            className="px-2 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300 rounded shadow-xs transition-all"
            title="Tích phân"
          >
            ∫
          </button>
        </div>
      )}

      {/* MathLive Field */}
      <div className="relative">
        <math-field
          ref={mfRef}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1.2rem',
            borderRadius: '0.5rem',
            border: '1.5px solid #cbd5e1',
            backgroundColor: readOnly ? '#f8fafc' : '#ffffff',
            outline: 'none'
          }}
          placeholder={placeholder}
        ></math-field>
      </div>
    </div>
  );
};

export default MathInput;
