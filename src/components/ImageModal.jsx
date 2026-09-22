import React from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ src, alt, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full bg-white dark:bg-navy-900 rounded-2xl p-4 overflow-hidden shadow-2xl border border-slate-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-800/80 text-white rounded-full hover:bg-slate-700 transition-colors"
        >
          <X size={20} />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[80vh] object-contain rounded-xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/600x600?text=Profile+Photo+Placeholder';
          }}
        />
        <p className="text-center text-xs text-slate-400 mt-3">{alt}</p>
      </div>
    </div>
  );
}

