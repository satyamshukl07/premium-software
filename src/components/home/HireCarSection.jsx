import React from "react";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Car,
  ShieldCheck,
  Search,
  Users,
  Layers,
  MapPin,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function HireCarSection({ onTrial, onSpecialist }) {
  const websiteUrl = "https://www.hirecarmarketplace.com.au/";

  const solutions = [
    {
      icon: Car,
      title: "Wide Vehicle Selection",
      description: "Explore cars, vans, utes and premium vehicles from rental operators across Australia.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Rental Operators",
      description: "Discover vehicles offered by verified and trusted rental businesses.",
    },
    {
      icon: Search,
      title: "Easy Vehicle Discovery",
      description: "Find the right vehicle faster with an intuitive marketplace experience.",
    },
    {
      icon: Users,
      title: "Direct Rental Connections",
      description: "Connect with rental operators and move from discovery to booking with less friction.",
    },
    {
      icon: Layers,
      title: "Transparent Comparison",
      description: "Compare vehicle options and rental information before making a decision.",
    },
    {
      icon: MapPin,
      title: "Australia-Wide Reach",
      description: "Find rental options across multiple Australian locations.",
    },
  ];

  const whyItMattersPoints = [
    {
      title: "Better Vehicle Discovery",
      text: "Instantly browse verified inventories from independent and regional Australian fleet operators.",
    },
    {
      title: "Better Operator Visibility",
      text: "Gives quality rental businesses a level playing field to reach business and leisure travelers directly.",
    },
    {
      title: "Easier Comparison",
      text: "Clear transparent daily rates, transmission types, seating, and pickup terms with zero hidden fees.",
    },
    {
      title: "Simple User Experience",
      text: "Designed with modern, responsive filters so travelers find the exact vehicle they require in seconds.",
    },
    {
      title: "Australian Rental Ecosystem",
      text: "Built specifically for the Australian market, supporting local car hire operators and transport fleets.",
    },
  ];

  return (
    <section
      id="section-hirecar-marketplace"
      className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ========================================================================= */}
        {/* TOP INTRO: Text LEFT + Visual RIGHT */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Narrative (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-wider text-orange-700">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>SMARTER CAR RENTAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Everything You Need to Find the Right Rental Vehicle
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Discover cars, vans, utes and premium vehicles from trusted Australian rental operators.
              HireCar Marketplace makes it easier to compare available vehicles, explore rental options
              and connect with operators through one simple marketplace.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Verified Australian operators</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Cars, vans, utes & commercial fleets</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Direct operator booking connection</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Nationwide location coverage</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Visit HireCar Marketplace</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onTrial("HireCar Marketplace")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get a Free Trial</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                type="button"
                onClick={() => onSpecialist("HireCar Marketplace")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <span>Talk to a Specialist</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase (Col 6) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden bg-slate-950 group">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-md border border-slate-800 text-slate-400 text-[11px] font-mono">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>hirecarmarketplace.com.au</span>
                </div>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                  title="Open live website"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Product Image */}
              <div className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/hirecar-marketplace.svg"
                  alt="HireCar Marketplace Portal Preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  onError={(e) => {
                    e.currentTarget.src = "/images/Screenshot 2026-09-10 134039.png";
                  }}
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-slate-700/80 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-orange-500 inline-block mr-1.5" />
                  HireCar Marketplace
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SOLUTIONS GRID: 6 Solution Cards */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 inline-block mb-3">
              Platform Features
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Built to Make Car Rental Simpler
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every tool and touchpoint built to streamline discovery, comparison, and operator engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 hover:bg-orange-50/40 border border-slate-200/80 hover:border-orange-200 transition-all duration-200 shadow-sm hover:shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* WHY IT MATTERS SECTION */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 inline-block mb-3">
              Core Strategic Value
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Make Every Rental Search Easier
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Traditional rental searches often mean jumping across multiple disparate supplier portals,
              dealing with ambiguous conditions, or missing local regional operators. HireCar Marketplace brings
              clarity, choice, and direct relationships into a single Australian rental ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItMattersPoints.map((pt, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <h5 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {pt.title}
                </h5>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{pt.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION CTA BLOCK */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ready to simplify your vehicle rental experience?
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              Explore vehicles across Australia or list your fleet directly with zero friction.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <span>Visit HireCar Marketplace</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onTrial("HireCar Marketplace")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
            >
              <span>Get a Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onSpecialist("HireCar Marketplace")}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
            >
              <span>Talk to a Specialist</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
