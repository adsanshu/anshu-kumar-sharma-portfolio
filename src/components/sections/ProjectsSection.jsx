import React from 'react';
import { projectsData } from '../../data/portfolioData';
import { Layers, AlertCircle } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Projects</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Practical academic projects & web application concepts</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-blue transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-brand-blue dark:text-brand-cyan border border-blue-100 dark:border-blue-900">
                    {project.type}
                  </span>
                  <Layers size={18} className="text-slate-400" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">{project.subtitle}</p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                {project.features && (
                  <div className="space-y-1 mt-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Features:</p>
                    <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-0.5">
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {project.note && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start space-x-1.5 text-[11px] text-amber-600 dark:text-amber-400">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <span>{project.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

