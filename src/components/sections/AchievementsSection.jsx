import React from 'react';
import { achievementsData } from '../../data/portfolioData';
import { Trophy, Check } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-slate-100/50 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Verified Achievements</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Honest educational milestones and recognitions</p>

        <div className="space-y-4 max-w-4xl">
          {achievementsData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start space-x-4 shadow-sm">
              <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg shrink-0 mt-0.5">
                <Trophy size={20} />
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

