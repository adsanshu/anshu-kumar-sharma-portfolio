
import React from 'react';
import { educationData } from '../../data/portfolioData';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Education</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Academic background and qualification details</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-blue transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-brand-blue dark:text-brand-cyan mb-4">
                  {edu.type}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.title}</h3>
                
                {edu.institution && (
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{edu.institution}</p>
                )}
                {edu.university && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Affiliation: {edu.university}</p>
                )}
                {edu.school && (
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{edu.school}</p>
                )}
                {edu.board && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Board: {edu.board}</p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                {edu.duration && (
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>Duration: {edu.duration}</span>
                  </div>
                )}
                {edu.year && (
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>Passing Year: {edu.year}</span>
                  </div>
                )}
                {edu.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                )}
                {edu.marks && (
                  <div className="flex items-center space-x-2 text-brand-blue dark:text-brand-cyan font-semibold">
                    <BookOpen size={14} />
                    <span>Marks Obtained: {edu.marks}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
