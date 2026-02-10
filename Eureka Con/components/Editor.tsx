
import React from 'react';

// Fix: Removed unused UserPresence import and prop as it was not exported from types.ts and was not used in the implementation
interface EditorProps {
  value: string;
  onChange: (val: string) => void;
  isRtl: boolean;
}

const Editor: React.FC<EditorProps> = ({ value, onChange, isRtl }) => {
  const lines = value.split('\n');

  return (
    <div className={`flex-1 h-full flex bg-[#0d1117] text-slate-300 font-mono text-sm relative overflow-hidden ${isRtl ? 'rtl' : ''}`}>
      {/* Gutter */}
      <div className="w-12 bg-slate-900/50 border-r border-slate-800 py-4 flex flex-col items-center select-none text-slate-600">
        {lines.map((_, i) => (
          <div key={i} className="leading-6 h-6">{i + 1}</div>
        ))}
      </div>
      
      {/* Editor Content */}
      <div className="flex-1 relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          className="w-full h-full bg-transparent p-4 outline-none resize-none leading-6 font-mono overflow-y-auto"
        />
        
        {/* Simulated Remote Cursors */}
        <div className="absolute inset-0 pointer-events-none p-4 opacity-60">
           <div className="absolute top-24 left-48 flex flex-col items-start gap-0.5">
              <div className="h-6 w-[2px] bg-amber-500"></div>
              <div className="bg-amber-500 text-[10px] text-black font-bold px-1 rounded">Omar</div>
           </div>
           <div className="absolute top-40 left-80 flex flex-col items-start gap-0.5">
              <div className="h-6 w-[2px] bg-blue-500"></div>
              <div className="bg-blue-500 text-[10px] text-white font-bold px-1 rounded">Sara</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
