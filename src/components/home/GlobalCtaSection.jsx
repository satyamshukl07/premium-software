import React from "react";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function GlobalCtaSection({ onTrial, onSpecialist }) {
  return (
    <section
      id="section-global-cta"
      className="py-20 lg:py-24 bg-gradient-to-b from-[#0a101f] via-[#0d1629] to-[#0a0f1d] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Tailored For Australian Commercial Fleets & Workshops</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-5">
          Find the Right Solution for Your Business
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Not sure which platform is right for you? Speak with our team and discover the solution
          that best fits your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            id="global-cta-trial-btn"
            onClick={() => onTrial("HireCar Marketplace")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-base shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
          >
            <span>Get a Free Trial</span>
            <ArrowRight className="w-4 h-4 text-slate-700" />
          </button>

          <button
            type="button"
            id="global-cta-specialist-btn"
            onClick={() => onSpecialist("Multi-Product Platform Suite")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 hover:text-white text-slate-200 font-bold text-base border border-slate-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            <span>Talk to a Specialist</span>
          </button>
        </div>
      </div>
    </section>
  );
}
