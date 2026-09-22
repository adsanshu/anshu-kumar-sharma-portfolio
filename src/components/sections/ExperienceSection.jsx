import React from 'react';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Work Experience</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Transparent status regarding formal employment</p>

        <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl flex items-start space-x-4">
          <div className="p-3 bg-blue-500/10 text-brand-blue rounded-xl shrink-0">
            <Briefcase size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Currently Student & Independent Learner</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">No formal professional work experience yet.</p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              "Currently building my skills through academic learning, personal projects, certifications and practical experimentation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

