import React from 'react';
import { Rocket, Package, Layers, Timer, CheckCircle2, AlertTriangle, ShieldCheck, Play, Activity, Calendar } from 'lucide-react';
import { FactoryStats, SafetyStatus } from '../types';

interface Props {
  stats: FactoryStats;
  safety: SafetyStatus;
  isRtl: boolean;
}

const FactoryDashboard: React.FC<Props> = ({ stats, safety, isRtl }) => {
  const timelineSteps = [
    { label: isRtl ? 'تأسيس البنية التحتية' : 'Cloud Infra Setup', period: 'Days 1-14', status: 'completed' },
    { label: isRtl ? 'نواة التوليد الذاتي' : 'Self-Gen Core', period: 'Days 15-30', status: 'active' },
    { label: isRtl ? 'تفعيل مصنع المشاريع' : 'Project Factory Ops', period: 'Days 31-45', status: 'pending' },
    { label: isRtl ? 'الروبوتات السريعة' : 'Rapid Robotics', period: 'Days 46-90', status: 'pending' }
  ];

  return (
    <div className={`flex-1 bg-[#020617] p-8 overflow-y-auto ${isRtl ? 'rtl' : ''}`}>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 aura-gold">
            <Package className="w-10 h-10 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-100 tracking-tighter uppercase">
              {isRtl ? 'مُصنع خَلِيقة الفوري' : 'Khalika One-Minute Maker'}
            </h1>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em]">
              Instant Project Factory Orchestrator
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 ${
            safety.containmentLevel === 'secure' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest italic">
              {safety.containmentLevel === 'secure' ? 'Safety Locked' : 'Critical Hazard'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: <Timer className="text-amber-500" />, label: isRtl ? 'سرعة التوليد' : 'Generation Speed', val: stats.avgBuildTime },
          { icon: <Rocket className="text-blue-500" />, label: isRtl ? 'مشاريع مكتملة' : 'Projects Built', val: stats.projectsDeployed.toLocaleString() },
          { icon: <Layers className="text-purple-500" />, label: isRtl ? 'سلاسل متوازية' : 'Parallel Streams', val: stats.activeDeployments },
          { icon: <CheckCircle2 className="text-green-500" />, label: isRtl ? 'دقة الإخراج' : 'Success Factor', val: `${(stats.successRate * 100).toFixed(1)}%` }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-2">
              {stat.icon}
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
            </div>
            <div className="text-2xl font-black text-slate-100">{stat.val}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Rapid Queue */}
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity className="w-48 h-48 text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Play className="w-5 h-5 text-blue-500" />
            {isRtl ? 'طابور النشر الفوري' : 'Instant Fabrication Queue'}
          </h2>
          <div className="space-y-4 relative z-10">
            {[
              { name: 'Fashion Hub E-Commerce', time: '14s remaining', status: 'Fabricating', size: '1-min' },
              { name: 'K-EdTech Platform', time: '58s', status: 'Deployed', size: '1-min' },
              { name: 'Smart City Drone Control', time: 'Deployed', status: 'Deployed', size: 'Critical' },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 group hover:border-blue-500/30 transition-all">
                <div className={`w-3 h-3 rounded-full ${p.status === 'Deployed' ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]'}`}></div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-slate-200">{p.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono">{p.size} Maker | {p.time}</div>
                </div>
                <div className="text-[10px] font-black text-slate-400 group-hover:text-blue-400 transition-colors uppercase tracking-widest cursor-pointer">View Cloud URL</div>
              </div>
            ))}
          </div>
        </div>

        {/* 90-Day Execution Plan */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-500" />
            {isRtl ? 'خطة الـ 90 يوماً' : '90-Day Execution'}
          </h2>
          <div className="space-y-6">
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative flex gap-4">
                {i < timelineSteps.length - 1 && <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-slate-800"></div>}
                <div className={`w-4 h-4 rounded-full border-2 mt-1 z-10 ${
                  step.status === 'completed' ? 'bg-green-500 border-green-500' : 
                  step.status === 'active' ? 'bg-blue-500 border-blue-500 animate-pulse' : 
                  'bg-slate-900 border-slate-700'
                }`}></div>
                <div>
                  <div className={`text-xs font-black uppercase ${step.status === 'active' ? 'text-blue-400' : 'text-slate-400'}`}>
                    {step.label}
                  </div>
                  <div className="text-[10px] text-slate-600 font-mono italic">{step.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryDashboard;