import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CallToActionBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0b1320] to-[#080d16] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
          Ready to simplify your maintenance management?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          MEX helps teams of all sizes simplify workflows, extend asset life, and prevent costly breakdowns. See why Australia's #1 CMMS is trusted by thousands of organisations.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            id="bottom-cta-free-trial"
            to="/free-trial"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-98"
          >
            Get a free trial
          </Link>
          <Link
            id="bottom-cta-contact"
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all"
          >
            Speak to a Specialist
          </Link>
        </div>

        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            30-day full access sandbox
          </span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Instant setup</span>
        </div>
      </div>
    </section>
  );
}
