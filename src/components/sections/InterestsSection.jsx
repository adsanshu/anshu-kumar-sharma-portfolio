import React from 'react';
import { interestsData } from '../../data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function InterestsSection() {
  return (
    <section className="py-16 bg-slate-100/50 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Areas of Interest</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Topics I actively study and explore</p>

        <div className="flex flex-wrap gap-3 max-w-4xl">
          {interestsData.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
              <Sparkles size={14} className="text-brand-blue" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

