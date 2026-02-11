
import React, { useState } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, ChevronRight } from 'lucide-react';

const Terminal: React.FC<{ isRtl: boolean }> = ({ isRtl }) => {
  const [logs, setLogs] = useState<string[]>([
    'Creatias Engine v2.0.4 initialized.',
    'Loading workspace configuration...',
    'Connected to real-time collaboration server.',
    'Ready for development.'
  ]);

  return (
    <div className={`h-48 bg-[#0d1117] border-t border-slate-800 flex flex-col ${isRtl ? 'rtl text-right' : ''}`}>
      <div className="flex items-center justify-between px-4 py-1.5 bg-slate-900/80 border-b border-slate-800 select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Terminal</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-600">
             <span>node</span>
             <span>git</span>
             <span className="text-green-600">server</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-slate-800 rounded text-slate-600"><Maximize2 className="w-3 h-3" /></button>
          <button className="p-1 hover:bg-slate-800 rounded text-slate-600"><X className="w-3 h-3" /></button>
        </div>
      </div>
      <div className="flex-1 p-3 font-mono text-xs overflow-y-auto space-y-1">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-blue-500">➜</span>
            <span className="text-slate-400">{log}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-slate-200">
           <span className="text-blue-500">➜</span>
           <span className="text-purple-400">~/creatias</span>
           <span className="animate-pulse bg-slate-500 w-2 h-4"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
