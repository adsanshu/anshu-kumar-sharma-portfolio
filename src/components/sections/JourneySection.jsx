import React from 'react';
import { storyData } from '../../data/portfolioData';
import { Compass } from 'lucide-react';

export default function JourneySection() {
  return (
    <section id="journey" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-2">
          <Compass className="text-brand-blue" size={28} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{storyData.title}</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Educational background and self-learning experience</p>

        <div className="bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 max-w-4xl">
          {storyData.paragraphs.map((para, idx) => (
            <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

