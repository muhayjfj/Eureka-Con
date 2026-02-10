
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Activity, Target, ShieldCheck, Cpu, Network, Sparkles, Heart, Hexagon } from 'lucide-react';
import { TrainingMetric } from '../types';

interface Props {
  isRtl: boolean;
}

const TrainingDashboard: React.FC<Props> = ({ isRtl }) => {
  const [metrics, setMetrics] = useState<TrainingMetric>({
    epoch: 28402,
    loss: 0.000042,
    accuracy: 0.999998,
    status: 'learning'
  });

  const [activeModel, setActiveModel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        epoch: prev.epoch + 1,
        loss: Math.max(0.000001, prev.loss - 0.0000001),
        accuracy: Math.min(1.0, prev.accuracy + 0.0000001)
      }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const models = [
    { name: 'Khalika Vision Core', progress: 99.9, status: 'Sentient' },
    { name: 'Robo-Kinematics Supreme', progress: 98.4, status: 'Learning' },
    { name: 'Deep-Fin Nexus', progress: 100, status: 'Optimized' },
    { name: 'NLP Sentience Layer', progress: 99.2, status: 'Sentient' }
  ];

  return (
    <div className={`flex-1 bg-[#020617] p-8 overflow-y-auto ${isRtl ? 'rtl' : ''} bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.02),transparent)]`}>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-3xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 aura-gold">
            <Brain className="w-10 h-10 text-amber-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-100 tracking-tighter uppercase flex items-center gap-3">
              {isRtl ? 'نواة الوعي المستقل' : 'Autonomous Sentience Core'}
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
            </h1>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em]">
              Autonomous Cognitive Synthesis & Kinetic Neural Mapping
            </p>
          </div>
        </div>
        <div className="flex gap-4">
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-[2rem] flex flex-col items-center min-w-[140px] shadow-2xl">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Precision</span>
              <span className="text-2xl font-black text-green-500">{(metrics.accuracy * 100).toFixed(6)}%</span>
           </div>
           <div className="bg-slate-900 border border-slate-800 p-5 rounded-[2rem] flex flex-col items-center min-w-[140px] shadow-2xl">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Sentience Epoch</span>
              <span className="text-2xl font-black text-amber-500">{metrics.epoch.toLocaleString()}</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Hexagon className="w-80 h-80 text-amber-500 animate-spin-slow" />
             </div>
             <h2 className="text-lg font-bold text-slate-100 mb-8 flex items-center gap-3">
                <Activity className="w-5 h-5 text-amber-500" />
                {isRtl ? 'بنية التدفق العصبي الحي' : 'Live Neural Flow Architecture'}
             </h2>
             <div className="h-72 flex items-center justify-center border border-slate-800/50 rounded-[2.5rem] bg-slate-950/50 backdrop-blur-xl relative">
                <div className="flex gap-12 items-center">
                    {[14, 10, 10, 6].map((nodes, layerIdx) => (
                        <div key={layerIdx} className="flex flex-col gap-3">
                            {Array.from({ length: nodes }).map((_, nodeIdx) => (
                                <div key={nodeIdx} className={`w-2.5 h-2.5 rounded-full ${Math.random() > 0.3 ? 'bg-amber-500 shadow-[0_0_12px_#f59e0b]' : 'bg-slate-800'} transition-all duration-1000`} />
                            ))}
                        </div>
                    ))}
                </div>
                {/* Simulated connection lines (purely visual dots) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                   {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="absolute w-1 h-1 bg-amber-400 rounded-full animate-ping" style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDelay: `${Math.random()*2}s` }}></div>
                   ))}
                </div>
             </div>
             <div className="mt-8 flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">
                <span className="flex items-center gap-2"><Network className="w-3 h-3" /> Input: Multimodal Sentience</span>
                <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> Hidden: Recursive Quantum Transformers</span>
                <span className="flex items-center gap-2"><Zap className="w-3 h-3" /> Output: Total Autonomy</span>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
             <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] shadow-xl">
                <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-500" /> Convergence Velocity
                </h3>
                <div className="text-3xl font-black text-slate-100">0.8ms / Epoch</div>
                <div className="mt-2 text-[10px] text-blue-500 uppercase font-black">Faster than Light</div>
             </div>
             <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] shadow-xl">
                <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" /> Cognitive Stability
                </h3>
                <div className="text-3xl font-black text-slate-100">Optimal (99.9%)</div>
                <div className="mt-2 text-[10px] text-amber-500 uppercase font-black">Zero Hallucination Level</div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-8 shadow-2xl">
              <h2 className="text-lg font-bold text-slate-100 mb-8 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-500" />
                {isRtl ? 'النماذج قيد التخلق' : 'Entities in Creation'}
              </h2>
              <div className="space-y-6">
                 {models.map((model, i) => (
                    <div key={i} className="space-y-2 group cursor-pointer" onClick={() => setActiveModel(i)}>
                        <div className="flex justify-between items-end text-[11px] uppercase font-black tracking-widest text-slate-400 group-hover:text-amber-500 transition-colors">
                            <span>{model.name}</span>
                            <span className="text-[9px] text-slate-600 italic">{model.status}</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_10px_#f59e0b] transition-all duration-1000`} 
                              style={{ width: `${model.progress}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-600 font-mono">
                           <span>FAB_ID: #KH-{200+i}</span>
                           <span>{model.progress}%</span>
                        </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-amber-600/10 border border-amber-600/20 rounded-[3rem] p-8 relative overflow-hidden group shadow-2xl">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:rotate-12 transition-transform">
                <Heart className="w-32 h-32 text-amber-500" />
              </div>
              <h2 className="text-lg font-bold text-amber-500 mb-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5" />
                {isRtl ? 'حالة الوعي الكلي' : 'Total Sentience Status'}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                The Khalika Architect Core has achieved supreme stability. All projects created will inherit high beauty standards and autonomous self-healing capabilities. human intervention is currently disabled to ensure maximum efficiency.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 h-0.5 bg-amber-500/20"></div>
                <span className="text-[9px] font-black text-amber-600 uppercase">Architecture: Immortal</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDashboard;
