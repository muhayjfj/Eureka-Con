
import React, { useState, useEffect } from 'react';
import { Bot, Cpu, Gauge, Zap, Settings, Shield, Workflow, Radio, Layers, Atom, Activity } from 'lucide-react';

interface Props {
  isRtl: boolean;
}

const RoboticsDashboard: React.FC<Props> = ({ isRtl }) => {
  const [progress, setProgress] = useState(88);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 0.05 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const components = [
    { name: 'Physical Body', spec: 'Carbon Graphene (Nano-enhanced)', status: 'Fabricated' },
    { name: 'Electronics', spec: 'Quantum Neural Circuits', status: 'Optimal' },
    { name: 'AI Brain', spec: 'Alpha-Omega Synapse Core', status: 'Sentient' },
    { name: 'Sensors', spec: 'Multidimensional Omniscient', status: 'Calibrated' },
    { name: 'Actuators', spec: 'Zero-Friction Kinetic', status: 'Active' },
    { name: 'Power System', spec: 'Infinite Vacuum Energy', status: '100%' },
    { name: 'Skin Coating', spec: 'Bio-Smart Aesthetic Layer', status: 'Applying' }
  ];

  return (
    <div className={`flex-1 bg-[#020617] p-8 overflow-y-auto ${isRtl ? 'rtl' : ''} bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.02),transparent)]`}>
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20">
          <Bot className="w-8 h-8 text-green-500" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase">
            {isRtl ? 'خالق الروبوتات المطلق' : 'Absolute Robotics Creator'}
          </h1>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em]">
            Physical Reality Integration & 4D Smart Printing
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: <Radio className="text-blue-400" />, label: 'Swarm Mesh', val: '99.99%', color: 'blue' },
          { icon: <Gauge className="text-green-400" />, label: 'Motor Output', val: 'Active', color: 'green' },
          { icon: <Shield className="text-purple-400" />, label: 'Ethics Lock', val: 'Verified', color: 'purple' },
          { icon: <Workflow className="text-amber-400" />, label: 'Assembly Line', val: 'Hyper-Speed', color: 'amber' }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl group hover:border-green-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              {stat.icon}
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
            </div>
            <div className="text-xl font-black text-slate-100">{stat.val}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-sm font-bold text-slate-300 mb-8 flex items-center gap-2">
                <Layers className="w-4 h-4 text-green-500" />
                {isRtl ? 'المكونات المادية للروبوت' : 'Physical Robotic Components'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {components.map((comp, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 hover:border-green-500/20 transition-all group">
                       <div>
                          <div className="text-[11px] font-black text-slate-200 uppercase tracking-wider">{comp.name}</div>
                          <div className="text-[9px] text-slate-500 italic mt-0.5">{comp.spec}</div>
                       </div>
                       <div className={`text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest ${
                         comp.status === 'Fabricated' || comp.status === 'Optimal' || comp.status === 'Sentient' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500 animate-pulse'
                       }`}>
                          {comp.status}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5"><Atom className="w-32 h-32 text-green-500" /></div>
             <h2 className="text-sm font-bold text-slate-300 mb-6 flex items-center gap-2">
               <Zap className="w-4 h-4 text-amber-500" />
               {isRtl ? 'طباعة 4D ذكية نشطة' : 'Active 4D Smart Printing'}
             </h2>
             <div className="space-y-6">
               <div className="relative pt-1">
                 <div className="flex mb-2 items-center justify-between">
                   <span className="text-[10px] font-bold py-1 px-2 uppercase rounded-full text-green-400 bg-green-500/10">
                     Kinetic Core Synthesis
                   </span>
                   <span className="text-xs font-black text-green-400">{progress.toFixed(1)}%</span>
                 </div>
                 <div className="overflow-hidden h-2 rounded-full bg-slate-800">
                   <div style={{ width: `${progress}%` }} className="h-full bg-green-500 shadow-[0_0_10px_#22c55e] transition-all duration-500"></div>
                 </div>
               </div>
               <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[8px] text-slate-500 uppercase font-black">Plasma Fusion</div>
                    <div className="text-xs font-bold text-slate-300">Stable</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-slate-500 uppercase font-black">Nano Bonding</div>
                    <div className="text-xs font-bold text-slate-300">1.4s / Mesh</div>
                  </div>
               </div>
             </div>
           </div>

           <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
                <Settings className="w-8 h-8 text-blue-500 animate-spin-slow" />
              </div>
              <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest">Structural Simulator</h3>
              <p className="text-[10px] text-slate-500 mt-2">
                Simulating kinetic joint stress under 10G multiversal acceleration. Zero human intervention confirmed.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsDashboard;
