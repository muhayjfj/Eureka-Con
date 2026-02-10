import React from 'react';
import { Users, DollarSign, Target, Briefcase, TrendingUp, BarChart3, PieChart, ShieldCheck } from 'lucide-react';
import { DepartmentStatus } from '../types';

interface Props {
  departments: DepartmentStatus[];
  isRtl: boolean;
}

const MissionControl: React.FC<Props> = ({ departments, isRtl }) => {
  const totalBudget = departments.reduce((acc, d) => acc + d.budget, 0);
  const totalStaff = departments.reduce((acc, d) => acc + d.staff, 0);

  return (
    <div className={`flex-1 bg-[#020617] p-8 overflow-y-auto ${isRtl ? 'rtl' : ''}`}>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 aura-gold">
            <Target className="w-10 h-10 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-100 tracking-tighter uppercase">
              {isRtl ? 'غرفة القيادة: خليقة' : 'Mission Control: Khalika'}
            </h1>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em]">
              Organizational Strategy & Resource Management
            </p>
          </div>
        </div>
        <div className="flex gap-4">
           <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Total Funding</span>
              <span className="text-xl font-black text-green-500">$3.0M</span>
           </div>
           <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Workforce</span>
              <span className="text-xl font-black text-blue-500">{totalStaff} Specialists</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Department Overview */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-bold text-slate-300 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-500" />
            {isRtl ? 'هيكل الأقسام' : 'Departmental Structure'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:border-purple-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-md font-black text-slate-100 uppercase">{dept.name}</h3>
                    <p className="text-[10px] text-slate-500">{dept.staff} Members</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-purple-400">{(dept.efficiency * 100).toFixed(0)}% Efficiency</div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {dept.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                      {task}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                   <span className="text-[10px] text-slate-500 uppercase font-bold">Allocated Budget</span>
                   <span className="text-sm font-black text-slate-200">${(dept.budget / 1000).toFixed(0)}k</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Allocation & Growth */}
        <div className="space-y-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              {isRtl ? 'توزيع الميزانية' : 'Budget Allocation'}
            </h2>
            <div className="space-y-4">
              {[
                { label: 'GPU Servers', val: 800000, color: 'bg-blue-500' },
                { label: 'Salaries', val: 1200000, color: 'bg-purple-500' },
                { label: 'Robotics Lab', val: 500000, color: 'bg-green-500' },
                { label: 'Licensing', val: 200000, color: 'bg-amber-500' },
                { label: 'Ops', val: 300000, color: 'bg-slate-500' }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-slate-500">
                    <span>{item.label}</span>
                    <span>${(item.val / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color}`} 
                      style={{ width: `${(item.val / 3000000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <TrendingUp className="text-blue-500 w-5 h-5" />
              {isRtl ? 'توقعات النمو' : 'Growth Projection'}
            </h2>
            <div className="space-y-4">
               <div className="flex justify-between items-center p-3 bg-slate-800/40 rounded-xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Year 1</span>
                  <span className="text-sm font-black text-slate-200">$1.0M Rev</span>
               </div>
               <div className="flex justify-between items-center p-3 bg-slate-800/40 rounded-xl border border-blue-500/20">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Year 2</span>
                  <span className="text-sm font-black text-blue-400">$5.0M Rev</span>
               </div>
               <div className="flex justify-between items-center p-3 bg-slate-800/40 rounded-xl border border-amber-500/20">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Year 3</span>
                  <span className="text-sm font-black text-amber-500">$25.0M Rev</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionControl;