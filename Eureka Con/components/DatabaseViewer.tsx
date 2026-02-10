
import React from 'react';
import { Database, Table, Key, Type, Shield } from 'lucide-react';
import { DatabaseTable } from '../types';

interface DatabaseViewerProps {
  tables: DatabaseTable[];
  isRtl: boolean;
}

const DatabaseViewer: React.FC<DatabaseViewerProps> = ({ tables, isRtl }) => {
  return (
    <div className={`flex-1 bg-slate-950 p-6 overflow-y-auto ${isRtl ? 'rtl' : ''}`}>
      <div className="flex items-center gap-3 mb-8">
        <Database className="w-8 h-8 text-amber-500" />
        <h1 className="text-2xl font-bold text-slate-100">
          {isRtl ? 'قاعدة البيانات المتصلة' : 'Connected Database'}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tables.map((table) => (
          <div key={table.name} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-blue-400" />
                <span className="font-mono font-bold text-slate-200">{table.name}</span>
              </div>
              <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 uppercase tracking-tighter font-bold">Relational</span>
            </div>
            <div className="p-4">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-800">
                    <th className="pb-2 font-medium">{isRtl ? 'العمود' : 'Column'}</th>
                    <th className="pb-2 font-medium">{isRtl ? 'النوع' : 'Type'}</th>
                    <th className="pb-2 font-medium">{isRtl ? 'القيود' : 'Constraints'}</th>
                  </tr>
                </thead>
                <tbody>
                  {table.columns.map((col) => (
                    <tr key={col.name} className="border-b border-slate-800/50 last:border-0 hover:bg-slate-800/30">
                      <td className="py-2.5 flex items-center gap-2 text-slate-300">
                        {col.constraints?.includes('PRIMARY') ? <Key className="w-3 h-3 text-amber-500" /> : <Shield className="w-3 h-3 text-slate-600" />}
                        {col.name}
                      </td>
                      <td className="py-2.5 text-blue-400/80">{col.type}</td>
                      <td className="py-2.5 text-slate-500 italic text-[10px]">{col.constraints || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatabaseViewer;
