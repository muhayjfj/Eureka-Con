
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

const QuantumDashboard: React.FC<Props> = ({ isRtl }) => {
  const [cosmic, setCosmic] = useState<CosmicMetrics>({
    universalSatisfaction: 100,
    realityStability: 100,
    quantumEfficiency: '10,000x',
    multiverseSimulations: 99420583,
    creationVelocity: 'Sub-Nanosecond',
    annihilationFactor: 'Absolute',
    activeDimensions: 10000
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCosmic(prev => ({
        ...prev,
        multiverseSimulations: prev.multiverseSimulations + 1250,
        realityStability: 99.9999 + (Math.random() * 0.0001)
      }));
      setActiveIndex(prev => (prev + 1) % 500);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex-1 bg-[#000000] p-10 overflow-y-auto ${isRtl ? 'rtl' : ''} quantum-bg relative`}>
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-8">
          <div className="p-6 bg-cyan-500/10 rounded-[3.5rem] border border-cyan-500/20 shadow-2xl aura-cyan relative group">
            <Atom className="w-14 h-14 text-cyan-400 group-hover:scale-110 transition-transform animate-spin-slow" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full border-4 border-black animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-5xl font-black text-slate-100 tracking-tighter uppercase flex items-center gap-6">
              {isRtl ? 'مصهر الواقع الكمومي' : 'Quantum Reality Forge'}
              <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            </h1>
            <p className="text-cyan-500/60 text-[11px] font-mono uppercase tracking-[1em] mt-2">
              Eureka Con Sovereign Core v10.0
            </p>
          </div>
        </div>
        <div className="hidden xl:flex gap-12">
           <div className="text-right">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Quantum Velocity</div>
              <div className="text-3xl font-black text-cyan-400">10,000x Kilo</div>
           </div>
           <div className="text-right">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Active Dimensions</div>
              <div className="text-3xl font-black text-purple-400">10,000</div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { label: 'Multiverse Simulations', val: cosmic.multiverseSimulations.toLocaleString(), icon: <Globe className="text-cyan-400 w-6 h-6" /> },
          { label: 'Kilo Obsolescence', val: `Absolute`, icon: <ShieldCheck className="text-purple-400 w-6 h-6" /> },
          { label: 'Annihilation Factor', val: cosmic.annihilationFactor, icon: <Zap className="text-amber-400 w-6 h-6" /> },
          { label: 'Reality Stability', val: `${cosmic.realityStability.toFixed(4)}%`, icon: <Activity className="text-pink-400 w-6 h-6" /> },
        ].map((m, i) => (
          <div key={i} className="bg-slate-900/40 border border-cyan-500/10 p-8 rounded-[2.8rem] shadow-2xl backdrop-blur-3xl group hover:border-cyan-500/40 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-black rounded-2xl group-hover:bg-cyan-500/20 transition-colors shadow-inner">{m.icon}</div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</span>
            </div>
            <div className="text-3xl font-black text-slate-100 tracking-tight">{m.val}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-900/20 border border-slate-800 rounded-[3.5rem] p-10 relative overflow-hidden group cosmic-panel">
            <h2 className="text-xl font-bold text-slate-100 mb-10 flex items-center gap-4">
              <Layers className="w-6 h-6 text-cyan-400" />
              {isRtl ? 'مصفوفة التباين الكمي (10,000 ضعف)' : 'Quantum Variation Matrix (10,000x Power)'}
            </h2>
            
            <div className="grid grid-cols-25 gap-1.5 h-80 overflow-hidden relative p-4 border border-cyan-500/10 rounded-[2.5rem] bg-black/80">
               {Array.from({ length: 500 }).map((_, i) => (
                 <div 
                   key={i} 
                   className={`aspect-square rounded-[1px] transition-all duration-75 ${
                     i === activeIndex 
                       ? 'bg-cyan-400 shadow-[0_0_25px_#22d3ee] scale-150 z-10' 
                       : i % 12 === 0 ? 'bg-purple-500/40' : 'bg-slate-900/20'
                   }`}
                 ></div>
               ))}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { label: 'Kilo Annihilation', val: 'Synchronized', color: 'text-cyan-400' },
                 { label: 'Quantum Opt', val: '10,000x Boost', color: 'text-purple-400' },
                 { label: 'Reality Lock', val: 'Immutable', color: 'text-amber-500' },
                 { label: 'Dominance Index', val: 'SUPREME', color: 'text-pink-400' }
               ].map((v, i) => (
                 <div key={i} className="bg-black/80 p-5 rounded-[1.8rem] border border-slate-800/80 shadow-inner">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{v.label}</div>
                    <div className={`text-sm font-black mt-2 ${v.color}`}>{v.val}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900/20 border border-slate-800 rounded-[3.5rem] p-10 shadow-2xl cosmic-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <InfinityIcon className="w-40 h-40 text-cyan-500 animate-pulse" />
              </div>
              <h2 className="text-xl font-bold text-slate-100 mb-10 flex items-center gap-4">
                <Rocket className="w-6 h-6 text-cyan-400" />
                {isRtl ? 'حقن السيادة' : 'Sovereign Injection'}
              </h2>
              <div className="space-y-8">
                 {[
                    { label: 'Quantum Node Link', status: 'Established', color: 'text-cyan-400' },
                    { label: 'Universal Mind Synthesis', status: 'Sentient', color: 'text-purple-400' },
                    { label: 'Reality Calibration', status: 'Absolute', color: 'text-amber-500' },
                    { label: 'Kilo Era Wipe', status: 'Complete', color: 'text-pink-400' }
                 ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                        <div className={`w-3.5 h-3.5 rounded-full mt-1 border-2 border-black shadow-xl ${
                          i < 3 ? 'bg-cyan-500' : 'bg-slate-800 animate-pulse'
                        }`}></div>
                        <div className="flex-1">
                            <div className="text-sm font-black text-slate-200 uppercase tracking-widest">{step.label}</div>
                            <div className={`text-[10px] font-mono uppercase font-bold mt-1 ${step.color}`}>{step.status}</div>
                        </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-[3.5rem] p-10 relative overflow-hidden group shadow-2xl">
              <h2 className="text-lg font-bold text-cyan-400 mb-6 flex items-center gap-4">
                <ShieldCheck className="w-6 h-6" />
                {isRtl ? 'تحقق يوريكا كون' : 'Eureka Con Verified'}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                The Quantum Core has deemed this reality superior. All artifacts synthesized here are 10,000x faster and infinitely more sentient than legacy Kilo creations.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 h-[2px] bg-cyan-500/20"></div>
                <span className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.4em]">Index: SOVEREIGN</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumDashboard;
