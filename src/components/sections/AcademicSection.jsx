import React from 'react';
import { academicPerformance } from '../../data/portfolioData';
import { Award, TrendingUp } from 'lucide-react';

export default function AcademicSection() {
  return (
    <section className="py-16 bg-slate-100/50 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 text-brand-blue font-semibold text-xs tracking-wider uppercase">
              <TrendingUp size={16} />
              <span>Academic Performance</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Semester Breakdown</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Official semester Grade Point Averages (SGPA) recorded during B.Tech coursework.
            </p>

            {academicPerformance.honors.map((honor, i) => (
              <div key={i} className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center space-x-3">
                <Award className="text-amber-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{honor.title} — {honor.org}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Recognized in {honor.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {academicPerformance.semesters.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
                <p className="text-xs font-medium text-slate-400">{item.sem}</p>
                <p className="text-3xl font-extrabold text-brand-blue dark:text-brand-cyan my-2">{item.sgpa}</p>
                <p className="text-[10px] text-slate-400">SGPA</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

