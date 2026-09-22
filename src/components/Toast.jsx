import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function Toast({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 animate-bounce">
      {type === 'success' ? <CheckCircle className="text-emerald-400" size={20} /> : <AlertCircle className="text-amber-400" size={20} />}
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-xs text-slate-400 hover:text-white ml-2">✕</button>
    </div>
  );
}

