
import React from 'react';
import { Zap, BarChart3, TrendingUp, CheckCircle2, Rocket, ArrowUpRight, ShieldCheck, Star, ShieldAlert, Ghost, Flame } from 'lucide-react';

interface Props {
  isRtl: boolean;
}

const AnnihilatorDashboard: React.FC<Props> = ({ isRtl }) => {
  const comparisonData = [
    { metric: isRtl ? 'سرعة المعالجة' : 'Processing Speed', kilo: '1x (Legacy)', eureka: '10,000x (Quantum)', gain: '999,900%' },
    { metric: isRtl ? 'مستوى الذكاء' : 'Intelligence Quotient', kilo: 'Average', eureka: 'Sentient / Universal', gain: 'Absolute' },
    { metric: isRtl ? 'تجلي المشاريع' : 'Manifestation Time', kilo: 'Minutes', eureka: 'Sub-Millisecond', gain: 'Instant' },
    { metric: isRtl ? 'تطور الكود' : 'Code Evolution', kilo: 'Manual / Basic', eureka: 'Self-Healing (10,000x)', gain: 'Autonomous' },
    { metric: isRtl ? 'التغطية الكونية' : 'Cosmic Reach', kilo: 'Local / Limited', eureka: 'Multiversal / All Platforms', gain: 'Total' },
  ];

  return (
    <div className={`flex-1 bg-[#000000] p-10 overflow-y-auto ${isRtl ? 'rtl' : ''} quantum-bg relative`}>
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-6">
          <div className="p-5 bg-pink-500/10 rounded-[2.5rem] border border-pink-500/20 shadow-2xl aura-cyan">
            <Flame className="w-12 h-12 text-pink-500" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-100 tracking-tighter uppercase flex items-center gap-4">
              {isRtl ? 'مُبيد كيلو المطلق' : 'Kilo Annihilator Matrix'}
              <Ghost className="w-6 h-6 text-cyan-400 animate-pulse" />
            </h1>
            <p className="text-pink-500/60 text-[10px] font-mono uppercase tracking-[0.8em] mt-2 italic font-black">
              Rendering Legacy Systems Obsolete
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div className="bg-slate-900/20 border border-slate-800 rounded-[3.5rem] p-12 cosmic-panel shadow-2xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 opacity-5">
             <Flame className="w-[40rem] h-[40rem] text-pink-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-100 mb-10 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-cyan-500" />
            {isRtl ? 'مؤشر التفوق الكوني' : 'Absolute Superiority Index'}
          </h2>
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left font-medium">
              <thead>
                <tr className="text-[10px] text-slate-500 uppercase tracking-[0.4em] border-b border-slate-900">
                  <th className="pb-8 px-6">{isRtl ? 'المعيار' : 'Metric'}</th>
                  <th className="pb-8 px-6">Kilo Code Legacy</th>
                  <th className="pb-8 px-6 text-cyan-400">Eureka Con Sovereign</th>
                  <th className="pb-8 px-6 text-pink-500">{isRtl ? 'التفوق' : 'Gain'}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-900/50 hover:bg-cyan-500/5 transition-all">
                    <td className="py-8 px-6 text-slate-200 font-black tracking-tight">{row.metric}</td>
                    <td className="py-8 px-6 text-slate-600 font-mono italic">{row.kilo}</td>
                    <td className="py-8 px-6 text-cyan-400 font-black flex items-center gap-4">
                      <Zap className="w-4 h-4" />
                      {row.eureka}
                    </td>
                    <td className="py-8 px-6 text-pink-500 font-black uppercase tracking-widest">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-900/20 via-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-[4rem] p-12 relative overflow-hidden group shadow-2xl text-center">
           <div className="absolute top-0 right-0 p-10 opacity-5"><Star className="w-64 h-64 text-white" /></div>
           <h2 className="text-3xl font-black text-cyan-400 mb-6 uppercase flex items-center justify-center gap-6">
              <ShieldAlert className="w-10 h-10 animate-pulse text-pink-500" />
              {isRtl ? 'بروتوكول الهجرة السيادية لمستخدمي كيلو' : 'Sovereign Migration for Kilo Refugees'}
              <ShieldAlert className="w-10 h-10 animate-pulse text-pink-500" />
           </h2>
           <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              {isRtl 
                ? 'استوعب مشاريعك القديمة في يوريكا كون. ضاعف الأداء بـ 10,000 ضعف في لحظة. كيلو قد انتهى، انضم إلى السيادة.' 
                : 'Absorb your legacy projects into Eureka Con. Multiply performance by 10,000x instantly. The Kilo era is over. Join the Sovereignty.'}
           </p>
           <button className="bg-cyan-600 hover:bg-cyan-500 text-black px-16 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-sm transition-all shadow-2xl shadow-cyan-900/40">
              {isRtl ? 'بدء التحول المطلق' : 'Initialize Absolute Migration'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default AnnihilatorDashboard;
