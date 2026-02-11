
import React from 'react';
import { Zap, BarChart3, TrendingUp, CheckCircle2, Rocket, ArrowUpRight, ShieldCheck, Star, ShieldAlert } from 'lucide-react';

interface Props {
  isRtl: boolean;
}

const BenchmarkDashboard: React.FC<Props> = ({ isRtl }) => {
  const comparisonData = [
    { metric: isRtl ? 'سرعة إنشاء المشروع' : 'Creation Speed', kilo: '2-3 min', cm: '30-60 sec', imp: '3-6x Faster' },
    { metric: isRtl ? 'جودة الكود المولد' : 'Code Quality', kilo: '85%', cm: '95%+', imp: 'Master Standard' },
    { metric: isRtl ? 'الذكاء الاصطناعي' : 'AI Intelligence', kilo: isRtl ? 'محدود' : 'Limited', cm: isRtl ? 'متقدم جداً' : 'MasterAI', imp: 'Absolute' },
    { metric: isRtl ? 'التكامل مع الأنظمة' : 'System Integration', kilo: isRtl ? 'متوسط' : 'Medium', cm: isRtl ? 'كامل' : 'Universal', imp: 'Total' },
    { metric: isRtl ? 'التطوير متعدد المنصات' : 'Multi-Platform', kilo: isRtl ? 'غير موجود' : 'Non-existent', cm: isRtl ? 'مدعوم بالكامل' : 'Full Support', imp: 'Omni' },
    { metric: isRtl ? 'التحسين التلقائي' : 'Auto-Fixing', kilo: isRtl ? 'غير موجود' : 'N/A', cm: '40-60%', imp: 'Self-Healing' },
  ];

  const plans = [
    { name: 'Free', price: isRtl ? 'مجاني' : 'Free', features: ['Core Manifestation', 'Unlimited Projects', 'Community Support'] },
    { name: 'Pro', price: '$10/mo', features: ['MasterAI Advance', 'App Store Deploy', '60% cheaper than Kilo'] },
    { name: 'Team', price: '$50/mo', features: ['Unlimited Collab', 'Sovereign Analytics', '70% cheaper than Kilo'] },
  ];

  return (
    <div className={`flex-1 bg-[#020617] p-10 overflow-y-auto ${isRtl ? 'rtl' : ''} nebula-bg relative`}>
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-6">
          <div className="p-5 bg-amber-500/10 rounded-[2.5rem] border border-amber-500/20 shadow-2xl aura-gold">
            <BarChart3 className="w-12 h-12 text-amber-500" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-100 tracking-tighter uppercase flex items-center gap-4">
              {isRtl ? 'كرييتور ماستر ضد كيلو' : 'CreatorMaster vs Kilo'}
              <Rocket className="w-6 h-6 text-emerald-400 animate-bounce" />
            </h1>
            <p className="text-amber-500/60 text-[10px] font-mono uppercase tracking-[0.6em] mt-2 italic">
              Superiority Index v2.0 - HyperSpeed Active
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Comparison Table */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-10 glass-panel shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 opacity-5">
             <Rocket className="w-96 h-96 text-emerald-500 rotate-45" />
          </div>
          <h2 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-amber-500" />
            {isRtl ? 'لماذا CreatorMaster أفضل؟' : 'Why CreatorMaster is the Future?'}
          </h2>
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left font-medium">
              <thead>
                <tr className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800">
                  <th className="pb-6 px-4">{isRtl ? 'الميزة' : 'Feature'}</th>
                  <th className="pb-6 px-4">Kilo Code / CLI</th>
                  <th className="pb-6 px-4 text-emerald-400">CreatorMaster</th>
                  <th className="pb-6 px-4 text-amber-500">{isRtl ? 'التحسين' : 'Improvement'}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-all">
                    <td className="py-6 px-4 text-slate-300 font-bold">{row.metric}</td>
                    <td className="py-6 px-4 text-slate-500">{row.kilo}</td>
                    <td className="py-6 px-4 text-emerald-400 font-black flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      {row.cm}
                    </td>
                    <td className="py-6 px-4 text-amber-500 font-black">{row.imp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing / Offer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] border ${i === 1 ? 'bg-emerald-600/10 border-emerald-500/30 scale-105' : 'bg-slate-900/40 border-slate-800'} relative overflow-hidden group transition-all hover:-translate-y-2`}>
              {i === 1 && <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-[8px] font-black px-2 py-1 rounded-full uppercase">Most Efficient</div>}
              <h3 className="text-2xl font-black text-slate-100 mb-2">{plan.name}</h3>
              <div className="text-3xl font-black text-amber-500 mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="text-xs text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${i === 1 ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/40' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                {isRtl ? 'ابدأ الآن' : 'Initialize Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-amber-600/20 to-emerald-600/20 border border-amber-500/20 rounded-[3rem] p-10 relative overflow-hidden group shadow-2xl text-center">
           <div className="absolute top-0 right-0 p-8 opacity-5"><Star className="w-40 h-40" /></div>
           <h2 className="text-2xl font-black text-amber-500 mb-4 uppercase flex items-center justify-center gap-4">
              <ShieldCheck className="w-6 h-6 animate-pulse" />
              {isRtl ? 'عرض ترقية خاص لمستخدمي كيلو' : 'Kilo User Migration Offer'}
              <ShieldCheck className="w-6 h-6 animate-pulse" />
           </h2>
           <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-8 font-medium">
              {isRtl 
                ? 'خصم 80% للسنة الأولى + ترحيل مجاني لكل مشاريعك من Kilo مع تحسين الأداء بنسبة 10x.' 
                : '80% Discount for the first year + Free migration of all Kilo projects with a guaranteed 10x performance gain.'}
           </p>
           <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-12 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-amber-900/40">
              {isRtl ? 'المطالبة بالعرض' : 'Claim Special Offer'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkDashboard;
