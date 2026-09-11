import React from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Wrench,
  Users,
  Car,
  Package,
  ClipboardCheck,
  Calendar,
  CheckCircle2,
  Lock,
  ChevronRight,
} from "lucide-react";

export default function WrmsProSection({ onTrial, onSpecialist }) {
  const websiteUrl = "https://www.wrmspro.com.au/";

  const solutions = [
    {
      icon: Wrench,
      title: "Work Order Management",
      slug: "work-order-management",
      description: "Create, manage and track workshop jobs from start to completion.",
    },
    {
      icon: Users,
      title: "Customer Management",
      slug: "workshop-customer-management",
      description: "Keep customer information and workshop history organised.",
    },
    {
      icon: Car,
      title: "Vehicle Management",
      slug: "vehicle-management",
      description: "Maintain a complete view of vehicles and their service activity.",
    },
    {
      icon: Package,
      title: "Parts & Inventory",
      slug: "parts-inventory",
      description: "Keep better control over parts, stock and workshop resources.",
    },
    {
      icon: ClipboardCheck,
      title: "Inspections",
      slug: "inspections",
      description: "Manage inspections and capture important vehicle information.",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      slug: "scheduling",
      description: "Organise workshop activity and keep jobs moving efficiently.",
    },
  ];

  const benefits = [
    {
      title: "Better Job Visibility",
      slug: "better-job-visibility",
      desc: "Instant live dashboard of ongoing repair jobs, assigned technicians, and stage completion.",
    },
    {
      title: "Faster Workflows",
      slug: "faster-workflows",
      desc: "Convert quotes to job cards and generate invoices with automatic parts deduction in one click.",
    },
    {
      title: "Organised Work Orders",
      slug: "organised-work-orders",
      desc: "Structured labor hours, technician notes, parts usage, and sign-offs kept in a unified digital ledger.",
    },
    {
      title: "Improved Customer Management",
      slug: "improved-customer-management",
      desc: "Store vehicle history, previous repairs, warranty records, and communicate status directly.",
    },
    {
      title: "Better Parts Control",
      slug: "better-parts-control",
      desc: "Track supplier orders, minimum stock levels, and markup margins to protect shop profitability.",
    },
    {
      title: "More Efficient Workshop Operations",
      slug: "more-efficient-workshop-operations",
      desc: "Balance technician bays, eliminate turnaround bottlenecks, and boost shop throughput.",
    },
  ];

  return (
    <section
      id="section-wrms-pro"
      className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Warm Rose Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ========================================================================= */}
        {/* TOP INTRO: Visual LEFT + Text RIGHT */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Visual Product Showcase (Col 6) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-950 group">
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-md border border-slate-800 text-slate-300 text-[11px] font-mono">
                  <Lock className="w-3 h-3 text-rose-400" />
                  <span>wrmspro.com.au</span>
                </div>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                  title="Open WRMS Pro"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Product Dashboard Visual */}
              <Link
                to="/product/wrms-pro"
                className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden block cursor-pointer"
                title="View WRMS Pro Overview"
              >
                <img
                  src="/images/wrms-pro.svg"
                  alt="WRMS Pro Workshop Repair Management Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "/images/Screenshot 2026-09-10 134242.png";
                  }}
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-slate-700/80 shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                  <span>WRMS Pro Workshop Hub</span>
                  <span className="text-[10px] text-rose-300 ml-1">View Details &rarr;</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative (Col 6) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>WORKSHOP REPAIR MANAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Everything Your Workshop Needs to Work Smarter
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              WRMS Pro brings work orders, customers, vehicles, inspections, parts, scheduling and
              workshop operations together in one powerful platform.
            </p>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>End-to-end job card tracking</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Inventory & parts barcode lookup</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Digital vehicle inspection sheets</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Direct customer SMS & quote approvals</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore WRMS Pro</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onTrial("WRMS Pro")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get a Free Trial</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                type="button"
                onClick={() => onSpecialist("WRMS Pro")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
              >
                <span>Talk to a Specialist</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SOLUTIONS GRID: 6 Solution Cards */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 inline-block mb-3">
              Specialized Modules
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Precision Workshop Operations
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Designed specifically for mechanical repair shops, commercial fleet depots, and automotive service centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={`/solutions/${item.slug}`}
                  className="p-6 rounded-2xl bg-slate-50 hover:bg-rose-50/50 border border-slate-200/90 hover:border-rose-300 transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-rose-700 transition-colors">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-rose-600 group-hover:text-rose-700">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BENEFITS SECTION */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 inline-block mb-3">
              Operational Efficiency
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Built for Modern Workshop Operations
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              Equip your service managers and technicians with the software tools they need to operate
              cleanly, eliminate paper clutter, and provide total transparency to vehicle owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Link
                key={i}
                to={`/solutions/${b.slug}`}
                className="p-5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-rose-400/40 transition-all duration-200 hover:-translate-y-0.5 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 font-bold text-white group-hover:text-rose-300 text-base transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-700/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-rose-300">
                  <span>Explore capability</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION CTA BLOCK */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-rose-50 via-white to-rose-50 border border-rose-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ready to Run Your Workshop Smarter?
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              Test WRMS Pro in your service center today or speak with a workshop systems specialist.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <span>Explore WRMS Pro</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onTrial("WRMS Pro")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
            >
              <span>Get a Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onSpecialist("WRMS Pro")}
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
