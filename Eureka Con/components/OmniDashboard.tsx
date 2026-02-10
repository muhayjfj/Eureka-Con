
import React, { useState, useEffect } from 'react';
import { 
  Network, Shield, Cpu, Zap, Activity, Users, Layers, Command, Bot, Sparkles, Code, Palette, Globe, 
  Infinity as InfinityIcon, Atom, Ghost, Wand2, ShieldCheck, Box, Settings,
  Workflow, Database, Lightbulb, Construction, Server, Radio, Star, CloudRain, Rocket
} from 'lucide-react';
import { CosmicMetrics } from '../types';

interface Props {
  isRtl: boolean;
}

const OmniDashboard: React.FC<Props> = ({ isRtl }) => {
  const [cosmic, setCosmic] = useState<CosmicMetrics>({
    universalSatisfaction: 100,
    realityStability: 100,
    ethicalCompliance: 100,
    quantumTimeCompression: '0.000000001s',
    multiverseSimulations: 2485903,
    creationVelocity: 'HyperSpeed (20x)',
    globalNodes: 8500000,
    sovereignRobots: 50000
  });

  const [activeUniverse, setActiveUniverse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCosmic(prev => ({
        ...prev,
        multiverseSimulations: prev.multiverseSimulations + Math.floor(Math.random() * 5000),
        realityStability: 99.9999 + (Math.random() * 0.0001)
      }));
      setActiveUniverse(prev => (prev + 1) % 400);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex-1 bg-[#020617] p-10 overflow-y-auto ${isRtl ? 'rtl' : ''} nebula-bg relative`}>
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-8">
          <div className="p-6 bg-emerald-500/10 rounded-[3.5rem] border border-emerald-500/20 shadow-2xl aura-emerald relative group">
            <Rocket className="w-14 h-14 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full border-4 border-[#020617] animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-5xl font-black text-slate-100 tracking-tighter uppercase flex items-center gap-6">
              {isRtl ? 'مصهر الواقع السيادي' : 'CreatorMaster Reality Forge'}
              <Sparkles className="w-8 h-8 text-emerald-400 animate-pulse" />
            </h1>
            <p className="text-emerald-500/60 text-[11px] font-mono uppercase tracking-[1em] mt-2">
              HyperSpeed Manifestation Engine v2.0
            </p>
          </div>
        </div>
        <div className="hidden xl:flex gap-12">
           <div className="text-right">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Synthesis Velocity</div>
              <div className="text-3xl font-black text-emerald-400">20x (Kilo Index)</div>
           </div>
           <div className="text-right">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Master Cores</div>
              <div className="text-3xl font-black text-emerald-400">4,096</div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { label: 'Hyper-Simulations', val: cosmic.multiverseSimulations.toLocaleString(), icon: <Rocket className="text-emerald-400 w-6 h-6" /> },
          { label: 'Quality Standard', val: `Absolute`, icon: <ShieldCheck className="text-blue-400 w-6 h-6" /> },
          { label: 'Creation Velocity', val: cosmic.creationVelocity, icon: <Zap className="text-amber-400 w-6 h-6" /> },
          { label: 'Auto-Fix Matrix', val: '40-60%', icon: <Sparkles className="text-purple-400 w-6 h-6" /> },
        ].map((m, i) => (
          <div key={i} className="bg-slate-900/60 border border-emerald-500/10 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl group hover:border-emerald-500/40 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-slate-950 rounded-2xl group-hover:bg-emerald-500/20 transition-colors shadow-inner">{m.icon}</div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</span>
            </div>
            <div className="text-3xl font-black text-slate-100 tracking-tight">{m.val}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3.5rem] p-10 relative overflow-hidden group glass-panel shadow-2xl">
            <h2 className="text-xl font-bold text-slate-100 mb-10 flex items-center gap-4">
              <Layers className="w-6 h-6 text-emerald-400" />
              {isRtl ? 'مصفوفة التباين المتوازي (20 ضعف كيلو)' : 'Parallel Variation Matrix (20x Kilo Index)'}
            </h2>
            
            <div className="grid grid-cols-20 gap-2 h-72 overflow-hidden relative p-2 border border-slate-800/50 rounded-3xl bg-slate-950/50">
               {Array.from({ length: 400 }).map((_, i) => (
                 <div 
                   key={i} 
                   className={`aspect-square rounded-[2px] transition-all duration-75 ${
                     i === activeUniverse 
                       ? 'bg-emerald-500 shadow-[0_0_20px_#10b981] scale-150 z-10' 
                       : i % 8 === 0 ? 'bg-blue-500/30' : 'bg-slate-800/10'
                   }`}
                 ></div>
               ))}
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] opacity-70"></div>
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { label: 'Kilo Import', val: 'Synchronized', color: 'text-emerald-400' },
                 { label: 'MasterAI Opt', val: '40-60% Fix', color: 'text-blue-400' },
                 { label: 'Ethics Lock', val: 'Sovereign', color: 'text-amber-500' },
                 { label: 'Platform Status', val: 'OMNI-READY', color: 'text-emerald-400' }
               ].map((v, i) => (
                 <div key={i} className="bg-slate-950/80 p-5 rounded-[1.5rem] border border-slate-800/50 shadow-inner">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{v.label}</div>
                    <div className={`text-sm font-black mt-2 ${v.color}`}>{v.val}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900/60 border border-slate-800 rounded-[3.5rem] p-10 shadow-2xl glass-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Atom className="w-40 h-40 text-emerald-500 animate-spin-slow" />
              </div>
              <h2 className="text-xl font-bold text-slate-100 mb-10 flex items-center gap-4">
                <Globe className="w-6 h-6 text-emerald-400" />
                {isRtl ? 'حقن الأبعاد' : 'Dimensional Injection'}
              </h2>
              <div className="space-y-8">
                 {[
                    { label: 'HyperSpeed Hub Push', status: 'Optimal', color: 'text-emerald-400' },
                    { label: 'MasterAI Logic Synthesis', status: 'Complete', color: 'text-blue-400' },
                    { label: 'Reality Calibration', status: '100.00%', color: 'text-amber-500' },
                    { label: 'Multi-Platform Build', status: 'Warp Active', color: 'text-purple-400' }
                 ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                        <div className={`w-4 h-4 rounded-full mt-1 border-2 border-slate-900 shadow-xl ${
                          i < 3 ? 'bg-emerald-500' : 'bg-slate-800 animate-pulse'
                        }`}></div>
                        <div className="flex-1">
                            <div className="text-sm font-black text-slate-200 uppercase tracking-widest">{step.label}</div>
                            <div className={`text-[10px] font-mono uppercase font-bold mt-1 ${step.color}`}>{step.status}</div>
                        </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-gradient-to-br from-emerald-600/10 to-blue-600/10 border border-emerald-500/20 rounded-[3.5rem] p-10 relative overflow-hidden group shadow-2xl">
              <h2 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-4">
                <ShieldCheck className="w-6 h-6" />
                {isRtl ? 'تحقق كرييتور ماستر' : 'CreatorMaster Verification'}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                The MasterAI validates every sub-atom of the generated reality. All manifestations are guaranteed 20x faster and infinitely superior to legacy Kilo systems.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 h-[2px] bg-emerald-500/20"></div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Index: MASTER</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OmniDashboard;
