import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <section className="bg-[#0b1320] text-white py-3 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-red-600/30 text-red-400 border border-red-500/30">
            NEW
          </span>
          <span>MEX launches MEX v16 in Australia, advancing its maintenance platform for modern operations.</span>
        </div>
        <Link
          id="cta-press-release"
          to="/press"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-white hover:text-red-400 transition-colors whitespace-nowrap group"
        >
          <span>Read the press release</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
