import React from 'react';
import { careerGoalData } from '../../data/portfolioData';
import { Target, Compass } from 'lucide-react';

export default function CareerSection() {
  return (
    <section id="career" className="py-20 bg-slate-100/50 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Career Direction & Goal</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Current focus and aspirational pathways</p>

        <div className="bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold px-3 py-1 bg-blue-100 dark:bg-blue-950 text-brand-blue rounded-full">
            <Target size={14} />
            <span>Target Field: {careerGoalData.direction}</span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            {careerGoalData.description}
          </p>
        </div>
      </div>
    </section>
  );
}

