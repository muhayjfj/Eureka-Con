
import React from 'react';
import { Briefcase, ExternalLink, Clock, CheckCircle, Box, MoreVertical, Globe, Smartphone, Brain, Cpu } from 'lucide-react';
import { ProjectArtifact } from '../types';

interface Props {
  projects: ProjectArtifact[];
  isRtl: boolean;
}

const PortfolioView: React.FC<Props> = ({ projects, isRtl }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'web': return <Globe className="w-5 h-5 text-blue-400" />;
      case 'mobile': return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'ai': return <Brain className="w-5 h-5 text-amber-400" />;
      case 'robotics': return <Cpu className="w-5 h-5 text-green-400" />;
      default: return <Box className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className={`flex-1 bg-[#020617] p-8 overflow-y-auto ${isRtl ? 'rtl' : ''}`}>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 shadow-lg shadow-indigo-500/5">
            <Briefcase className="w-10 h-10 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-100 tracking-tighter uppercase">
              {isRtl ? 'محفظة الخَلِيقَة' : 'Khalika Portfolio'}
            </h1>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em]">
              Autonomous Output & Deployment History
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl bg-slate-800 border border-slate-700/50 group-hover:aura-gold transition-all`}>
                  {getIcon(project.type)}
                </div>
                <button className="p-2 text-slate-600 hover:text-slate-300 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-lg font-black text-slate-100 mb-2 uppercase group-hover:text-indigo-400 transition-colors">
                {project.name}
              </h3>
              
              <div className="flex items-center gap-4 text-[10px] text-slate-500 font-mono mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {project.buildTime}
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {project.status.toUpperCase()}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-black py-2.5 rounded-xl text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <Box className="w-3.5 h-3.5" /> Source
                </button>
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-black py-2.5 rounded-xl text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5" /> Preview
                </button>
              </div>
            </div>
            
            {/* Visual background element */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
        
        {/* Mock "Empty/Coming Soon" Slot */}
        <div className="border-2 border-dashed border-slate-800 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center opacity-40 group hover:opacity-100 transition-all">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4">
            <Box className="w-6 h-6 text-slate-600" />
          </div>
          <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
            Ready for Fabrication
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;
