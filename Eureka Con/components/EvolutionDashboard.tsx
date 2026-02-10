
import React from 'react';
import { Activity, Zap, Shield, Cpu, TrendingUp, Hexagon } from 'lucide-react';
import { EvolutionCycle } from '../types';

interface Props {
  status: EvolutionCycle;
  isRtl: boolean;
}

const EvolutionDashboard: React.FC<Props> = ({ status, isRtl }) => {
  return (
    <div className={`flex-1 bg-[#020617] p-8 overflow-y-auto ${isRtl ? 'rtl' : ''}`}>
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 aura-gold">
            <Hexagon className="w-10 h-10 text-amber-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black gradient-text-gold tracking-tight">
              {isRtl ? 'نظام التطور الذاتي' : 'Autonomous Evolution'}
            </h1>
            <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
              Core Version: Amīritas v4.0.2-Immortal
            </p>
          </div>
        </div>
        <div className="flex gap-4">
            <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Gen</span>
                <span className="text-xl font-black text-amber-500">#{status.generation}</span>
            </div>
            <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Fitness</span>
                <span className="text-xl font-black text-blue-400">{(status.fitness * 100).toFixed(1)}%</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
            { icon: <Cpu className="text-blue-400" />, label: isRtl ? 'المعالجة العصبية' : 'Neural Processing', val: '98.4 TFLOPS' },
            { icon: <TrendingUp className="text-green-400" />, label: isRtl ? 'سرعة الابتكار' : 'Innovation Rate', val: '+14.2%' },
            { icon: <Shield className="text-purple-400" />, label: isRtl ? 'تطابق القيم' : 'Value Alignment', val: '99.9%' }
        ].map((stat, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                </div>
                <div className="text-2xl font-black text-slate-100">{stat.val}</div>
            </div>
        ))}
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity className="w-48 h-48 text-amber-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            {isRtl ? 'سجل الطفرات المعمارية' : 'Architectural Mutations'}
        </h2>
        <div className="space-y-4">
            {status.mutations.map((m, i) => (
                <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-amber-500 transition-colors"></div>
                    <div className="flex-1 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-sm font-mono text-slate-300 group-hover:border-amber-500/30 transition-all">
                        {m}
                    </div>
                    <span className="text-[10px] text-slate-600 font-bold italic">PROCESSED</span>
                </div>
            ))}
        </div>
      </div>

      <div className="text-center p-12 border-2 border-dashed border-slate-800 rounded-3xl">
        <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
            <Activity className="w-8 h-8 text-blue-500 animate-pulse" />
        </div>
        <h3 className="text-lg font-bold text-slate-300">
            {isRtl ? 'النظام في حالة وعي نشط' : 'Meta-Intelligence Fully Aware'}
        </h3>
        <p className="text-slate-500 text-sm mt-2">
            Amīritas is continuously redesigning its recursive loops for maximum autonomy.
        </p>
      </div>
    </div>
  );
};

export default EvolutionDashboard;
