import React from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Car,
  CalendarCheck,
  Users,
  DollarSign,
  Layers,
  BarChart3,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function ChmSection({ onTrial, onSpecialist }) {
  const websiteUrl = "https://www.carhiremanager.com.au/";
  const portalUrl = "https://chmportal.carhiremanager.com.au/dashboard";

  const solutions = [
    {
      icon: Car,
      title: "Fleet Management",
      slug: "fleet-management",
      description: "Keep your rental fleet organised and maintain visibility across vehicles.",
    },
    {
      icon: CalendarCheck,
      title: "Booking Management",
      slug: "booking-management",
      description: "Manage bookings and rental activity from one central system.",
    },
    {
      icon: Users,
      title: "Customer Management",
      slug: "customer-management",
      description: "Keep customer information organised and accessible.",
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      slug: "financial-management",
      description: "Manage the financial side of your rental operation more efficiently.",
    },
    {
      icon: Layers,
      title: "Rental Operations",
      slug: "rental-operations",
      description: "Bring key rental workflows together in one platform.",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      slug: "business-analytics",
      description: "Get better visibility into your rental business through reporting and analytics.",
    },
  ];

  const valueBenefits = [
    {
      title: "Manage Vehicles",
      slug: "manage-vehicles",
      desc: "Live statuses, rego tracking, maintenance history, and vehicle availability calendars in one place.",
    },
    {
      title: "Manage Bookings",
      slug: "manage-bookings",
      desc: "Instant dispatch, pickup/return workflows, condition reports, and recurring contract management.",
    },
    {
      title: "Manage Customers",
      slug: "manage-customers",
      desc: "Organised driver verification, license verification records, and transaction logs accessible in seconds.",
    },
    {
      title: "Monitor Operations",
      slug: "monitor-operations",
      desc: "Real-time alerts on returns, overdue check-ins, toll charges, and maintenance schedules.",
    },
    {
      title: "Improve Visibility",
      slug: "improve-visibility",
      desc: "Clear visual overview of fleet utilization, revenue per vehicle class, and branch operations.",
    },
    {
      title: "Make Better Business Decisions",
      slug: "make-better-business-decisions",
      desc: "Accurate financial data and utilization analytics to optimize fleet sizing and rates.",
    },
  ];

  return (
    <section
      id="section-car-hire-manager"
      className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Cool Ambient Gradient Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ========================================================================= */}
        {/* TOP INTRO: Visual LEFT + Text RIGHT */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Visual Product Showcase (Col 6) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-300/80 shadow-2xl overflow-hidden bg-slate-950 group">
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-md border border-slate-800 text-slate-300 text-[11px] font-mono">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>chmportal.carhiremanager.com.au</span>
                </div>
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                  title="Open CHM Portal"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Product Dashboard Visual */}
              <Link
                to="/product/chm"
                className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden block cursor-pointer"
                title="View CHM Solution Details"
              >
                <img
                  src="/images/chm-dashboard.svg"
                  alt="Car Hire Manager Operations Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "/images/Screenshot 2026-09-10 134136.png";
                  }}
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-slate-700/80 shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                  <span>Car Hire Manager (CHM)</span>
                  <span className="text-[10px] text-cyan-300 ml-1">View Details &rarr;</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative (Col 6) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-800">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>SMART CAR HIRE MANAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Run Your Entire Car Hire Operation From One Platform
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Car Hire Manager helps rental businesses manage vehicles, bookings, customers, financial
              operations and day-to-day rental activity from one connected platform.
            </p>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Centralized fleet & vehicle status</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Automated toll & expense reconciliation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Real-time availability calendar</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Customer identity & document storage</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore CHM</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onTrial("Car Hire Manager (CHM)")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get a Free Trial</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                type="button"
                onClick={() => onSpecialist("Car Hire Manager (CHM)")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
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
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block mb-3">
              Comprehensive Capabilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Complete Rental Management in One Hub
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every workflow engineered to eliminate manual spreadsheets, duplicate entry, and lost revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={`/solutions/${item.slug}`}
                  className="p-6 rounded-2xl bg-white hover:bg-sky-50/50 border border-slate-200/90 hover:border-sky-300 transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VALUE SECTION: Split Section */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl mb-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block mb-3">
              Operational Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything Your Rental Business Needs, Connected
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              When fleet availability, reservations, contracts, and finances operate in harmony, your team
              spends less time tracking down paperwork and more time expanding operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueBenefits.map((b, i) => (
              <Link
                key={i}
                to={`/solutions/${b.slug}`}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-sky-50/40 border border-slate-200/80 hover:border-sky-300 transition-all duration-200 hover:-translate-y-0.5 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 group-hover:text-sky-700 text-base transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-sky-700">
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
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-sky-50 border border-sky-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ready to Take Control of Your Rental Business?
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              Start your free trial today or request a live operational walkthrough with an Australian specialist.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <span>Explore CHM</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onTrial("Car Hire Manager (CHM)")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
            >
              <span>Get a Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onSpecialist("Car Hire Manager (CHM)")}
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
