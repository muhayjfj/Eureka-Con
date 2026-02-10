
import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, Layout, Smartphone, Monitor, Tablet, Layers, Eye, Download, Code2, CheckCircle2, Wand2, Atom, Box } from 'lucide-react';

interface DesignOption {
  id: number;
  name: string;
  style: string;
  score: number;
}

const DesignDashboard: React.FC<{ isRtl: boolean }> = ({ isRtl }) => {
  const [generating, setGenerating] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const options: DesignOption[] = [
    { id: 0, name: 'Master Sovereign', style: 'High Contrast / Neon Glow', score: 99.8 },
    { id: 1, name: 'Hyper Minimal', style: 'Clean / Monochromatic', score: 94.2 },
    { id: 2, name: 'Nebula Flow', style: 'Vibrant / Mesh Gradients', score: 97.5 },
    { id: 3, name: 'Glassmorphism Pro', style: 'Translucent / Depth', score: 96.1 },
    { id: 4, name: 'Modern Ethereal', style: 'Soft / Sophisticated', score: 92.8 },
  ];

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <div className={`flex-1 bg-[#020617] p-8 overflow-y-auto ${isRtl ? 'rtl' : ''} nebula-bg relative`}>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-pink-500/10 rounded-2xl border border-pink-500/20 shadow-xl shadow-pink-500/5">
            <Palette className="w-10 h-10 text-pink-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-100 tracking-tighter uppercase flex items-center gap-3">
              {isRtl ? 'مصمم واجهات الذكاء الاصطناعي' : 'AIDesigner Master'}
              <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            </h1>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em]">
              Sovereign MasterAI UI Synthesis
            </p>
          </div>
        </div>
        <button 
          onClick={handleGenerate}
          className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-pink-900/40 flex items-center gap-3"
        >
          <Wand2 className="w-4 h-4" />
          {isRtl ? 'توليد خيارات التصميم' : 'Synthesize Designs'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Design Generations */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Design Options (MasterAI Count: 5)</h2>
          {options.map((opt) => (
            <div 
              key={opt.id}
              onClick={() => setSelectedDesign(opt.id)}
              className={`p-5 rounded-3xl border cursor-pointer transition-all ${
                selectedDesign === opt.id 
                  ? 'bg-pink-600/10 border-pink-500/40 shadow-lg' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] font-black uppercase ${selectedDesign === opt.id ? 'text-pink-400' : 'text-slate-500'}`}>
                  Choice #{opt.id + 1}
                </span>
                <span className="text-[10px] font-mono text-emerald-400">{opt.score}% Match</span>
              </div>
              <div className="text-sm font-bold text-slate-100 mb-1">{opt.name}</div>
              <div className="text-[10px] text-slate-500 italic">{opt.style}</div>
            </div>
          ))}
        </div>

        {/* Live Preview / Workbench */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 glass-panel shadow-2xl relative overflow-hidden min-h-[600px]">
            {generating ? (
              <div className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center">
                <Atom className="w-16 h-16 text-pink-500 animate-spin mb-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-pink-400 animate-pulse">MasterAI Processing Interface...</span>
              </div>
            ) : null}

            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button onClick={() => setViewMode('desktop')} className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-pink-600 text-white' : 'text-slate-600'}`}><Monitor className="w-4 h-4" /></button>
                  <button onClick={() => setViewMode('tablet')} className={`p-2 rounded-lg transition-all ${viewMode === 'tablet' ? 'bg-pink-600 text-white' : 'text-slate-600'}`}><Tablet className="w-4 h-4" /></button>
                  <button onClick={() => setViewMode('mobile')} className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-pink-600 text-white' : 'text-slate-600'}`}><Smartphone className="w-4 h-4" /></button>
                </div>
                <div className="h-4 w-px bg-slate-800"></div>
                <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isRtl ? 'متجاوب بالكامل' : 'Responsive: Absolute'}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-white transition-colors"><Layers className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-white transition-colors"><Code2 className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-10 bg-slate-950/50 rounded-[2.5rem] border border-slate-800/50 min-h-[400px]">
               <div className={`transition-all duration-500 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl ${
                 viewMode === 'desktop' ? 'w-full h-[350px]' : viewMode === 'tablet' ? 'w-[400px] h-[500px]' : 'w-[250px] h-[450px]'
               }`}>
                  <div className={`w-full h-full p-8 flex flex-col justify-center items-center text-center ${
                    selectedDesign === 0 ? 'bg-gradient-to-br from-[#020617] to-pink-900/20' : 
                    selectedDesign === 2 ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-900/10' :
                    'bg-slate-900'
                  }`}>
                    <div className="w-16 h-16 bg-pink-500/20 rounded-full mb-6 flex items-center justify-center border border-pink-500/30">
                      <Sparkles className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{options[selectedDesign].name} Active</h3>
                    <p className="text-xs text-slate-500 max-w-[200px]">HyperSpeed manifestation of responsive components via CreatorMaster AI.</p>
                  </div>
               </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
               <div className="flex gap-4">
                  {['Figma', 'XD', 'Sketch', 'HTML/CSS'].map(format => (
                    <button key={format} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all">
                      <Download className="w-3 h-3" /> {format}
                    </button>
                  ))}
               </div>
               <div className="text-[10px] font-mono text-slate-600">Framework: React / Tailwind (MasterAI Synthesized)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDashboard;
