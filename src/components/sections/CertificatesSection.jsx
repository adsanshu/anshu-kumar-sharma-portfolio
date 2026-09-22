import React from 'react';
import { certificatesData } from '../../data/portfolioData';
import { Award, CheckCircle2, Clock } from 'lucide-react';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-slate-100/50 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Certificates</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Verified learning and course completions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                    <Award size={20} />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                    {cert.year || 'Completed'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{cert.title}</h3>
                <p className="text-xs font-semibold text-brand-blue dark:text-brand-cyan mb-3">{cert.issuer}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                {cert.score && <p><span className="font-semibold text-slate-700 dark:text-slate-300">Score:</span> {cert.score}</p>}
                {cert.duration && <p><span className="font-semibold text-slate-700 dark:text-slate-300">Duration:</span> {cert.duration}</p>}
                <div className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 font-medium pt-1">
                  <CheckCircle2 size={14} />
                  <span>{cert.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

