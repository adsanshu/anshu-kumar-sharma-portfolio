import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function VoicePlayer({ textEnglish, textHindi }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lang, setLang] = useState('en');

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech Synthesis is not supported in your browser.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const text = lang === 'en' ? textEnglish : textHindi;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'en' ? 'en-US' : 'hi-IN';
    utterance.rate = 0.95;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
      <button
        onClick={handleSpeak}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
          isPlaying 
            ? 'bg-rose-500 text-white animate-pulse' 
            : 'bg-brand-blue text-white hover:bg-blue-600'
        }`}
      >
        {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
        <span>{isPlaying ? 'Stop Listening' : 'Listen About Me'}</span>
      </button>

      <div className="flex bg-slate-200 dark:bg-slate-700 p-0.5 rounded-lg text-xs">
        <button
          onClick={() => { setLang('en'); if(isPlaying) window.speechSynthesis.cancel(); setIsPlaying(false); }}
          className={`px-2 py-1 rounded-md transition-colors ${lang === 'en' ? 'bg-white dark:bg-slate-900 font-bold shadow-sm' : 'text-slate-500'}`}
        >
          EN
        </button>
        <button
          onClick={() => { setLang('hi'); if(isPlaying) window.speechSynthesis.cancel(); setIsPlaying(false); }}
          className={`px-2 py-1 rounded-md transition-colors ${lang === 'hi' ? 'bg-white dark:bg-slate-900 font-bold shadow-sm' : 'text-slate-500'}`}
        >
          HI
        </button>
      </div>
    </div>
  );
}

