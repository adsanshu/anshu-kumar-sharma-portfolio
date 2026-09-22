import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">{personalInfo.name}</span>. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 max-w-xl mx-auto">
          Built with React, Vite, Tailwind CSS & Framer Motion. Designed for accuracy, performance, and transparency.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="inline-flex items-center justify-center p-3 rounded-full bg-brand-blue text-white shadow-lg hover:bg-blue-600 transition-colors mt-4"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}

