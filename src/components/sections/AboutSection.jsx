import React from 'react';
import VoicePlayer from '../VoicePlayer';
import { personalInfo } from '../../data/portfolioData';
import { GraduationCap, MapPin, School } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Concise background and profile</p>
          </div>
          <VoicePlayer textEnglish={personalInfo.aboutText} textHindi={personalInfo.aboutTextHindi} />
        </div>

        <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {personalInfo.aboutText}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-start space-x-3">
              <School className="text-brand-blue mt-1" size={20} />
              <div>
                <p className="text-xs font-medium text-slate-400">College</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.college}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <GraduationCap className="text-brand-blue mt-1" size={20} />
              <div>
                <p className="text-xs font-medium text-slate-400">Affiliated University</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.university}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-brand-blue mt-1" size={20} />
              <div>
                <p className="text-xs font-medium text-slate-400">Hometown</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.hometown}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

