import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function HeroSection({ onOpenPhoto }) {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-brand-blue dark:text-brand-cyan text-xs font-semibold">
              <Sparkles size={14} className="animate-pulse" />
              <span>{personalInfo.availability}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">{personalInfo.name}</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
              {personalInfo.title}
            </p>

            <blockquote className="italic text-slate-500 dark:text-slate-400 border-l-4 border-brand-blue pl-4 py-1 text-sm sm:text-base">
              "{personalInfo.tagline}"
            </blockquote>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              {personalInfo.shortIntro}
            </p>

            <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
              <MapPin size={14} className="text-brand-blue" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-medium transition-all"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-brand-blue text-slate-700 dark:text-slate-300 font-medium transition-all"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Photo Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div 
              onClick={onOpenPhoto}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-2xl">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Anshu+Kumar+Sharma';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                  Click to View Photo
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

