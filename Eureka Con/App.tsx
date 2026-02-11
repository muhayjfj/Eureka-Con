
import React, { useState, useEffect } from 'react';
import { 
  FolderCode, Search, Settings, Terminal as TerminalIcon, Users, Menu, ChevronRight,
  Code2, Globe, GitBranch, Box, Share2, Play, Database, Sparkles,
  Cpu, Activity, ShieldAlert, Zap, Package, Hexagon, LayoutDashboard, Briefcase, Brain,
  Heart, Rocket, ShieldCheck, Command, Layers, Bot, Infinity as InfinityIcon, Ghost, Atom,
  Wand2, ZapOff, Fingerprint, Eye, Star, BarChart3, Palette, Flame, Clock
} from 'lucide-react';
import Editor from './components/Editor';
import AIChat from './components/AIChat';
import FileExplorer from './components/FileExplorer';
import Terminal from './components/Terminal';
import QuantumDashboard from './components/QuantumDashboard';
import TrainingDashboard from './components/TrainingDashboard';
import AnnihilatorDashboard from './components/AnnihilatorDashboard';
import PortfolioView from './components/PortfolioView';
import FactoryDashboard from './components/FactoryDashboard';
import DesignDashboard from './components/DesignDashboard';
import { INITIAL_FILES, INITIAL_DB } from './constants';
import { ProjectFile, ViewMode, ProjectArtifact, CosmicMetrics, EvolutionCycle, FactoryStats, SafetyStatus, DepartmentStatus } from './types';

const App: React.FC = () => {
  const [files, setFiles] = useState<ProjectFile[]>(INITIAL_FILES);
  const [activeFileId, setActiveFileId] = useState<string>(INITIAL_FILES[0].id);
  const [isRtl, setIsRtl] = useState(false);
  const [activeTab, setActiveTab] = useState<ViewMode>('quantum');
  const [isBending, setIsBending] = useState(false);
  const [hasApiKey, setHasApiKey] = useState<boolean>(true); 
  
  const [projects, setProjects] = useState<ProjectArtifact[]>([
    { id: 'p1', name: 'Universal Reality Engine', type: 'quantum', timestamp: Date.now() - 3600000, buildTime: '0.001s', status: 'live', reach: 'Multiversal' },
    { id: 'p2', name: 'Kilo Era Wipe Protocol', type: 'ai', timestamp: Date.now() - 7200000, buildTime: '0.0001s', status: 'live', reach: 'Absolute' },
    { id: 'p3', name: 'Sovereign Manifest System', type: 'omni', timestamp: Date.now() - 10800000, buildTime: '0.002s', status: 'live', reach: 'Universal' }
  ]);

  const [factoryStats, setFactoryStats] = useState<FactoryStats>({
    projectsDeployed: 12485903,
    avgBuildTime: '0.001s (10,000x Index)',
    activeDeployments: 5000,
    successRate: 1.0,
    coresActive: 10000
  });

  const [safety] = useState<SafetyStatus>({
    ethicalAlignment: 1.0,
    forbiddenPatternsBlocked: 1000000000,
    containmentLevel: 'secure'
  });

  useEffect(() => {
    const checkApiKey = async () => {
      const aistudio = (window as any).aistudio;
      if (aistudio) {
        const selected = await aistudio.hasSelectedApiKey();
        setHasApiKey(selected);
      }
    };
    checkApiKey();
  }, []);

  const handleOpenKey = async () => {
    const aistudio = (window as any).aistudio;
    if (aistudio) {
      await aistudio.openSelectKey();
      setHasApiKey(true);
    }
  };

  const activeFile = files.find(f => f.id === activeFileId) || files[0];

  const updateFileContent = (newContent: string) => {
    setFiles(prev => prev.map(f => f.id === activeFileId ? { ...f, content: newContent } : f));
  };

  const initiateRealityBend = () => {
    setIsBending(true);
    setTimeout(() => {
      setIsBending(false);
      // Logic to show a manifest success could go here
    }, 1200);
  };

  const handleProjectGenerated = (name: string, type: 'web' | 'mobile' | 'ai' | 'robotics' | 'omni', description: string) => {
    const newProject: ProjectArtifact = {
      id: `p${Date.now()}`,
      name, type, timestamp: Date.now(), buildTime: `0.001s`, status: 'live', reach: 'Universal'
    };
    
    const projectFiles: ProjectFile[] = [
      { 
        id: `f-${Date.now()}-1`, 
        name: 'Quantum_Manifest.py', 
        language: 'python', 
        content: `"""\n🌌 Eureka Con Sovereign Manifestation\nArtifact: ${name}\nPerformance: 10,000x Faster than Kilo\n"""\n\ndef manifest():\n    # Deeming into existence: ${description}\n    print("Quantum Core Pulse: Absolute")\n` 
      }
    ];

    setFiles(projectFiles);
    setActiveFileId(projectFiles[0].id);
    setProjects(prev => [newProject, ...prev]);
    setFactoryStats(prev => ({ ...prev, projectsDeployed: prev.projectsDeployed + 1 }));
    setActiveTab('quantum');
  };

  if (!hasApiKey) {
    return (
      <div className="h-screen w-screen bg-[#000000] flex flex-col items-center justify-center p-6 text-center">
        <div className="p-20 bg-cyan-500/5 rounded-[5rem] border border-cyan-500/10 max-w-2xl w-full backdrop-blur-3xl shadow-[0_0_200px_rgba(6,182,212,0.2)] relative overflow-hidden">
          <Atom className="w-24 h-24 text-cyan-400 mx-auto mb-12 animate-spin-slow" />
          <h1 className="text-5xl font-black text-slate-100 mb-8 uppercase tracking-[0.3em]">Eureka Auth</h1>
          <p className="text-slate-500 text-sm mb-16 leading-relaxed font-bold tracking-widest uppercase italic">Initializing Quantum Core. Sovereign key required for multiversal access.</p>
          <button onClick={handleOpenKey} className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-black py-7 rounded-[2.5rem] transition-all uppercase tracking-[0.5em] text-xs shadow-2xl shadow-cyan-900/50">Engage Quantum Core</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex h-screen w-screen bg-[#000000] overflow-hidden text-slate-400 ${isRtl ? 'rtl' : ''}`}>
      {/* Visual Warp Overlay */}
      {isBending && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm animate-pulse"></div>
          <div className="text-cyan-400 font-black text-6xl uppercase tracking-[1em] animate-warp text-center">
            {isRtl ? 'تشويه الواقع الكمومي' : 'Quantum Reality Warp'}
          </div>
        </div>
      )}

      <aside className="w-24 flex flex-col items-center py-12 bg-black border-r border-cyan-500/10 z-50 shadow-2xl backdrop-blur-3xl">
        <div className="mb-20 p-4 bg-cyan-500/10 rounded-full border border-cyan-500/30 shadow-2xl cursor-pointer group hover:scale-125 transition-all">
          <Atom className="w-10 h-10 text-cyan-400 animate-spin-slow" />
        </div>
        <div className="flex-1 flex flex-col gap-12">
          <button onClick={() => setActiveTab('quantum')} className={`p-4 rounded-full transition-all ${activeTab === 'quantum' ? 'text-white bg-cyan-600/20 border border-cyan-500/50 shadow-cyan-900/50 shadow-xl' : 'text-slate-700 hover:text-cyan-400'}`} title="Quantum Forge"><Atom className="w-8 h-8" /></button>
          <button onClick={() => setActiveTab('design')} className={`p-4 rounded-full transition-all ${activeTab === 'design' ? 'text-white bg-pink-600/20 border border-pink-500/50 shadow-xl' : 'text-slate-700 hover:text-pink-400'}`} title="Reality Bender"><Palette className="w-8 h-8" /></button>
          <button onClick={() => setActiveTab('annihilator')} className={`p-4 rounded-full transition-all ${activeTab === 'annihilator' ? 'text-white bg-amber-600/20 border border-amber-500/50 shadow-xl' : 'text-slate-700 hover:text-amber-400'}`} title="Kilo Annihilator"><Flame className="w-8 h-8" /></button>
          <button onClick={() => setActiveTab('mind')} className={`p-4 rounded-full transition-all ${activeTab === 'mind' ? 'text-white bg-purple-600/20 border border-purple-500/50 shadow-xl' : 'text-slate-700 hover:text-purple-400'}`} title="Universal Mind"><Brain className="w-8 h-8" /></button>
          <button onClick={() => setActiveTab('explorer')} className={`p-4 rounded-full transition-all ${activeTab === 'explorer' ? 'text-white bg-slate-900 border border-slate-800' : 'text-slate-700 hover:text-slate-200'}`} title="Source Forge"><FolderCode className="w-8 h-8" /></button>
          <button onClick={() => setActiveTab('portfolio')} className={`p-4 rounded-full transition-all ${activeTab === 'portfolio' ? 'text-white bg-indigo-600/20 border border-indigo-500/50 shadow-xl' : 'text-slate-700 hover:text-indigo-400'}`} title="Artifacts"><Briefcase className="w-8 h-8" /></button>
          <button onClick={() => setActiveTab('factory')} className={`p-4 rounded-full transition-all ${activeTab === 'factory' ? 'text-white bg-orange-600/20 border border-orange-500/50 shadow-xl' : 'text-slate-700 hover:text-orange-400'}`} title="Synthesis Factory"><Rocket className="w-8 h-8" /></button>
        </div>
        <div className="mt-auto flex flex-col gap-10">
          <button onClick={() => setIsRtl(!isRtl)} className="p-4 text-slate-700 hover:text-cyan-400 transition-all"><Globe className="w-8 h-8" /></button>
          <button className="p-4 text-slate-700 hover:text-cyan-400 transition-all"><Settings className="w-8 h-8" /></button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-[#000000] relative">
        <header className="h-24 bg-black/80 border-b border-cyan-500/10 flex items-center justify-between px-12 shrink-0 backdrop-blur-3xl z-40">
          <div className="flex items-center gap-12">
            <h1 className="text-4xl font-black gradient-text-quantum uppercase tracking-tighter">Eureka Con | Sovereign</h1>
            <div className="hidden lg:flex items-center gap-6">
               <button onClick={() => setActiveTab('quantum')} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === 'quantum' ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/40 shadow-xl shadow-cyan-900/20' : 'text-slate-600 hover:text-slate-300'}`}>Quantum Forge</button>
               <button onClick={() => setActiveTab('annihilator')} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === 'annihilator' ? 'text-pink-500 bg-pink-500/10 border border-pink-500/40' : 'text-slate-600 hover:text-slate-300'}`}>Kilo Annihilator</button>
               <button onClick={() => setActiveTab('mind')} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all ${activeTab === 'mind' ? 'text-purple-500 bg-purple-500/10 border-purple-500/40' : 'text-slate-600 hover:text-slate-300'}`}>Universal Mind</button>
            </div>
          </div>
          <div className="flex items-center gap-10">
             <div className="hidden xl:flex items-center gap-4 px-6 py-3 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                <Zap className="w-5 h-5 text-cyan-500 animate-pulse" />
                <span className="text-[12px] font-black uppercase text-cyan-600 tracking-[0.3em]">10,000x Speed Index</span>
             </div>
             <button 
              onClick={initiateRealityBend} 
              disabled={isBending} 
              className="bg-cyan-600 hover:bg-cyan-500 text-black px-12 py-4 rounded-[2rem] text-[12px] font-black transition-all uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(6,182,212,0.4)] active:scale-95 flex items-center gap-4"
             >
                <Fingerprint className="w-5 h-5" />
                {isBending ? 'Bending...' : 'Bend Reality'}
             </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col overflow-hidden relative">
          {activeTab === 'quantum' && <QuantumDashboard isRtl={isRtl} />}
          {activeTab === 'design' && <DesignDashboard isRtl={isRtl} />}
          {activeTab === 'annihilator' && <AnnihilatorDashboard isRtl={isRtl} />}
          {activeTab === 'mind' && <TrainingDashboard isRtl={isRtl} />}
          {activeTab === 'factory' && <FactoryDashboard stats={factoryStats} safety={safety} isRtl={isRtl} />}
          {activeTab === 'portfolio' && <PortfolioView projects={projects} isRtl={isRtl} />}
          {activeTab === 'explorer' && (
            <div className="flex-1 flex overflow-hidden">
                <FileExplorer files={files} activeFileId={activeFileId} onFileSelect={setActiveFileId} isRtl={isRtl} />
                <Editor value={activeFile.content} onChange={updateFileContent} isRtl={isRtl} />
            </div>
          )}
          <Terminal isRtl={isRtl} />
        </div>
      </main>

      <AIChat 
        currentCode={activeFile.content} 
        isRtl={isRtl} 
        onProjectBuilt={handleProjectGenerated} 
        onSwitchTab={setActiveTab} 
      />
    </div>
  );
};

export default App;
