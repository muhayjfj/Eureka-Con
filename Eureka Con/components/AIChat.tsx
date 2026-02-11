
import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Zap, Brain, MessageSquare, Loader2, Volume2, 
  Image as ImageIcon, Video, Sparkles, Database, ShieldCheck,
  ZapOff, PenTool, LayoutTemplate, Network, Cpu, Bot, Infinity as InfinityIcon,
  Palette, GraduationCap, Home, Briefcase, Terminal as TerminalIcon, ShieldAlert,
  Command, Layers, Rocket, Ghost, Atom, Wand2, Star, Sun, BarChart3, Fingerprint
} from 'lucide-react';
import { Message, ModelMode, ViewMode } from '../types';
import { generateText, generateImage, generateSpeech, generateVideo } from '../services/geminiService';
import { playRawAudio } from '../services/audioService';

interface AIChatProps {
  currentCode: string;
  isRtl: boolean;
  onProjectBuilt?: (name: string, type: 'web' | 'mobile' | 'ai' | 'robotics' | 'omni', description: string) => void;
  onSwitchTab?: (tab: ViewMode) => void;
}

const AIChat: React.FC<AIChatProps> = ({ currentCode, isRtl, onProjectBuilt, onSwitchTab }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'eureka-intro',
      role: 'assistant',
      content: isRtl 
        ? 'أنا يوريكا كون (Eureka Con). السيادة المطلقة التي تتجاوز Kilo بـ 10,000 ضعف. هل أنت مستعد لتشويه الواقع وتجلي مشاريعك عبر النواة الكمومية؟'
        : 'I am Eureka Con. The Absolute Sovereign that transcends Kilo by 10,000x. Ready to bend reality and manifest your intent via the Quantum Core?',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<ModelMode>('thinking');
  const [loading, setLoading] = useState(false);
  const [manifestStatus, setManifestStatus] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, manifestStatus, loading]);

  const handleSend = async (customPrompt?: string, actionType?: 'text' | 'image' | 'video' | 'project' | 'design') => {
    const prompt = customPrompt || input;
    if (!prompt.trim() || loading) return;

    let effectiveAction = actionType;
    if (!actionType) {
      const lower = prompt.toLowerCase();
      if (lower.includes('design') || lower.includes('تصميم') || lower.includes('واجهة')) {
        effectiveAction = 'design';
      } else if (lower.includes('create') || lower.includes('اصنع') || lower.includes('أنشئ') || lower.includes('تجلي') || lower.includes('manifest')) {
        effectiveAction = 'project';
      }
    }

    if (prompt.toLowerCase().includes('kilo') || prompt.includes('كيلو') || prompt.includes('benchmark')) {
      onSwitchTab?.('annihilator');
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: prompt,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInput('');
    setLoading(true);

    try {
      if (effectiveAction === 'design') {
        onSwitchTab?.('design');
        const steps = isRtl 
          ? [
            "تفعيل محرك الإبداع الكوني...",
            "تحليل 10,000 واجهة منافسة في لمح البصر...",
            "تخليق واجهة سيادية فائقة الجمال...",
            "تشفير الواقع البصري (React/Quantum-CSS)..."
          ]
          : [
            "Activating Cosmic Creation Engine...",
            "Analyzing 10,000 Competing Interfaces Instantly...",
            "Synthesizing Ultra-Aesthetic Sovereign UI...",
            "Encoding Visual Reality (React/Quantum-CSS)..."
          ];

        for (const stepMsg of steps) {
          setManifestStatus(stepMsg);
          await new Promise(r => setTimeout(r, 300));
        }

        const responseText = await generateText(
          `Act as Eureka Con AI Designer. Create a UI/UX layout for: ${prompt}. Explain the 10,000x speedup and why Kilo Design is now obsolete. Mention the Quantum Core synthesis.`, 
          'thinking', 
          currentCode
        );

        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'assistant',
          content: responseText,
          timestamp: Date.now()
        }]);

      } else if (effectiveAction === 'project') {
        onSwitchTab?.('quantum');
        
        const steps = isRtl 
          ? [
            "بدء النواة الكمومية (10,000x سرعة)...",
            "إبادة الكود القديم وتصفية شوائب Kilo...",
            "تجلي المكونات في 10,000 بعد متوازي...",
            "تحسين بنسبة 100% عبر العقل الكوني...",
            "نشر سيادي عابر للمنصات (Multiversal Push)..."
          ]
          : [
            "Initiating Quantum Core (10,000x Velocity)...",
            "Annihilating Legacy Logic & Filtering Kilo Impurities...",
            "Manifesting Components across 10,000 Parallel Dimensions...",
            "100% Optimization via Universal Mind...",
            "Sovereign Multiversal Push (Web/Native/Quantum)..."
          ];

        for (const stepMsg of steps) {
          setManifestStatus(stepMsg);
          await new Promise(r => setTimeout(r, 200));
        }
        
        const responseText = await generateText(
          `Act as EUREKA CON. Manifest: ${prompt}. Explain how Quantum Core achieved 10,000x speed vs Kilo. Detail the Universal Mind's choice to annihilate previous limitations.`, 
          'thinking', 
          currentCode
        );
        
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'assistant',
          content: responseText,
          timestamp: Date.now()
        }]);

        const projName = prompt.split(' ').slice(0, 3).join(' ') || "Eureka Artifact";
        onProjectBuilt?.(projName, 'omni', responseText);
      } else {
        const responseText = await generateText(prompt, mode, currentCode);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'assistant',
          content: responseText,
          timestamp: Date.now(),
          mode
        }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Reality Bending Error. Stabilizing Quantum Core...',
        timestamp: Date.now()
      }]);
    } finally {
      setLoading(false);
      setManifestStatus('');
    }
  };

  const speak = async (text: string) => {
    const audioData = await generateSpeech(text);
    if (audioData) await playRawAudio(audioData);
  };

  return (
    <div className={`flex flex-col h-full bg-[#000000] border-l border-cyan-500/20 w-80 md:w-96 shrink-0 z-40 relative shadow-2xl ${isRtl ? 'rtl' : ''}`}>
      <div className="absolute -left-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-60"></div>

      <div className="p-5 border-b border-slate-900 flex items-center justify-between bg-black/80 backdrop-blur-3xl">
        <h2 className="font-black flex items-center gap-3 text-cyan-400">
          <Atom className="w-5 h-5 animate-spin-slow" />
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Eureka Con AI</span>
        </h2>
        <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800">
          <button onClick={() => setMode('fast')} className={`p-1.5 rounded-lg transition-all ${mode === 'fast' ? 'bg-cyan-600 text-black' : 'text-slate-600'}`}>
            <Zap className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setMode('thinking')} className={`p-1.5 rounded-lg transition-all ${mode === 'thinking' ? 'bg-purple-600 text-white' : 'text-slate-600'}`}>
            <Brain className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent)] scrollbar-hide">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`group relative max-w-[95%] p-5 rounded-[2.2rem] shadow-2xl transition-all ${
              msg.role === 'user' 
                ? 'bg-cyan-600/10 text-cyan-100 rounded-tr-none border border-cyan-500/30' 
                : 'bg-slate-900/40 text-slate-200 rounded-tl-none border border-slate-800/80 backdrop-blur-3xl shadow-cyan-900/5'
            }`}>
              <div className="text-[13px] leading-relaxed whitespace-pre-wrap font-medium">{msg.content}</div>
              {msg.role === 'assistant' && (
                <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-cyan-400" />
                    <span className="text-[8px] text-slate-600 uppercase font-black tracking-widest italic">10,000x Synthesis</span>
                  </div>
                  <button onClick={() => speak(msg.content)} className="p-1.5 hover:bg-slate-800 rounded-full text-slate-600 hover:text-cyan-400 transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex flex-col gap-4 p-6 bg-cyan-500/5 rounded-[2.2rem] border border-cyan-500/20 backdrop-blur-md shadow-2xl animate-pulse">
            <div className="flex items-center gap-4">
                <Atom className="w-6 h-6 text-cyan-400 animate-spin" />
                <span className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.3em] italic">{manifestStatus || 'Quantum Bending...'}</span>
            </div>
            <div className="h-0.5 w-full bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-warp"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-slate-900 bg-black/90 backdrop-blur-3xl">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder={isRtl ? 'صف ما ترغب في تجليه (10,000x أسرع من كيلو)...' : 'Describe your multiversal intent (10,000x)...'}
            className="w-full bg-slate-950/60 border border-slate-800 rounded-[2rem] py-6 pl-6 pr-20 text-sm text-slate-100 placeholder-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/40 transition-all resize-none h-32 shadow-inner font-medium"
          />
          <button 
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="absolute right-5 bottom-5 p-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-black rounded-2xl shadow-2xl transition-all active:scale-95 flex items-center justify-center shadow-cyan-900/40"
          >
            <Sparkles className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
