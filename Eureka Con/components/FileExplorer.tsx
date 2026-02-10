
import React from 'react';
import { FileCode, FileJson, FileText, ChevronDown, ChevronRight, Plus, FolderPlus } from 'lucide-react';
import { ProjectFile } from '../types';

interface FileExplorerProps {
  files: ProjectFile[];
  activeFileId: string;
  onFileSelect: (id: string) => void;
  isRtl: boolean;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, activeFileId, onFileSelect, isRtl }) => {
  const getIcon = (name: string) => {
    if (name.endsWith('.tsx') || name.endsWith('.ts')) return <FileCode className="w-4 h-4 text-blue-400" />;
    if (name.endsWith('.css')) return <FileCode className="w-4 h-4 text-purple-400" />;
    if (name.endsWith('.sql')) return <FileJson className="w-4 h-4 text-amber-400" />;
    return <FileText className="w-4 h-4 text-slate-400" />;
  };

  return (
    <div className={`w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col ${isRtl ? 'rtl' : ''}`}>
      <div className="p-3 border-b border-slate-800 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {isRtl ? 'المستكشف' : 'Explorer'}
        </span>
        <div className="flex gap-1">
          <button className="p-1 hover:bg-slate-800 rounded text-slate-400"><Plus className="w-3.5 h-3.5" /></button>
          <button className="p-1 hover:bg-slate-800 rounded text-slate-400"><FolderPlus className="w-3.5 h-3.5" /></button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        <div className="flex items-center gap-1 px-2 py-1 text-slate-300 text-sm font-medium cursor-pointer hover:bg-slate-800/50">
          <ChevronDown className="w-4 h-4" />
          <span>PROJECT-ALPHA</span>
        </div>
        
        <div className="pl-4">
          {files.map(file => (
            <div
              key={file.id}
              onClick={() => onFileSelect(file.id)}
              className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer text-sm transition-colors ${
                activeFileId === file.id ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-500' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {getIcon(file.name)}
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
