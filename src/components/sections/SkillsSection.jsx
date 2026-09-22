import React from 'react';
import { skillsData } from '../../data/portfolioData';
import { Wrench, HeartHandshake } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Skills & Knowledge</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Technical competencies and soft skills (honestly represented)</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Technical Skills */}
          <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 text-brand-blue rounded-lg">
                <Wrench size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Technical Skills</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.technical.map((skill, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                  <span className="text-[11px] font-medium text-brand-blue dark:text-brand-cyan mt-1">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 rounded-lg">
                <HeartHandshake size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.soft.map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

