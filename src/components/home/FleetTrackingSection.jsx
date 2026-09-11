import React from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  MapPin,
  Radio,
  BellRing,
  FileSpreadsheet,
  Fuel,
  Shield,
  CheckCircle2,
  Lock,
  ChevronRight,
} from "lucide-react";

export default function FleetTrackingSection({ onTrial, onSpecialist }) {
  const websiteUrl = "https://australiafleettracking.com/";

  const solutions = [
    {
      icon: MapPin,
      title: "Live GPS Tracking",
      slug: "live-gps-tracking",
      description: "See your vehicles and assets in real time with high-frequency positioning.",
    },
    {
      icon: Radio,
      title: "Driver Monitoring",
      slug: "driver-monitoring",
      description: "Gain greater visibility into vehicle and driver activity on the road.",
    },
    {
      icon: BellRing,
      title: "Instant Alerts",
      slug: "instant-alerts",
      description: "Receive important alerts when events require your immediate attention.",
    },
    {
      icon: FileSpreadsheet,
      title: "Fleet Reports",
      slug: "fleet-reports",
      description: "Turn fleet activity into useful operational insights and compliance logs.",
    },
    {
      icon: Fuel,
      title: "Fuel & Cost Visibility",
      slug: "fuel-cost-visibility",
      description: "Identify opportunities to improve efficiency and reduce unnecessary costs.",
    },
    {
      icon: Shield,
      title: "Asset Tracking",
      slug: "asset-tracking",
      description: "Keep track of important vehicles and assets across your entire operation.",
    },
  ];

  const benefits = [
    {
      title: "Real-Time Visibility",
      slug: "real-time-visibility",
      desc: "Instant map awareness across all active trips, ignition states, and vehicle locations.",
    },
    {
      title: "Improved Driver Awareness",
      slug: "improved-driver-awareness",
      desc: "Promote safer road habits, monitor harsh braking, speeding events, and idle times.",
    },
    {
      title: "Faster Response to Incidents",
      slug: "faster-response-to-incidents",
      desc: "Locate the nearest driver to urgent jobs and receive geo-fence boundary triggers instantly.",
    },
    {
      title: "Better Fleet Utilisation",
      slug: "better-fleet-utilisation",
      desc: "Identify underutilized units, schedule servicing by actual engine hours, and rebalance assets.",
    },
    {
      title: "Reduced Operational Waste",
      slug: "reduced-operational-waste",
      desc: "Eliminate unauthorized trips, curb excessive engine idling, and lower fuel expenditures.",
    },
    {
      title: "More Control Over Assets",
      slug: "more-control-over-assets",
      desc: "Protect valuable machinery, trailers, and vehicles with tamper-detection and theft alerts.",
    },
  ];

  return (
    <section
      id="section-fleet-tracking"
      className="py-20 lg:py-28 bg-[#090e17] text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* High-tech Emerald Ambient Backlight */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ========================================================================= */}
        {/* TOP INTRO: Text LEFT + Visual RIGHT (Dark Mode Theme) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Narrative (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SMARTER FLEET MANAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Know Where Your Fleet Is. Every Moment.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Track vehicles and assets in real time, monitor driver activity, receive instant alerts
              and gain the visibility you need to operate a safer, more efficient fleet.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live 4G telematics & GPS updates</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Driver behavior & speed triggers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automated geofences & zones</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Machinery & non-powered asset tracking</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Fleet Tracking</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onTrial("Australia Fleet Tracking / Techtonika Autolink")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get a Free Trial</span>
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>

              <button
                type="button"
                onClick={() => onSpecialist("Australia Fleet Tracking / Techtonika Autolink")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
              >
                <span>Talk to a Specialist</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase (Col 6) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden bg-slate-950 group">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-md border border-slate-800 text-slate-300 text-[11px] font-mono">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>australiafleettracking.com</span>
                </div>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                  title="Open Fleet Tracking Portal"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* High-tech Product Visual */}
              <Link
                to="/product/australia-fleet-tracking"
                className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden block cursor-pointer"
                title="View Australia Fleet Tracking Overview"
              >
                <img
                  src="/images/fleet-tracking.svg"
                  alt="Australia Fleet Tracking GPS Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "/images/Screenshot 2026-09-10 134203.png";
                  }}
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-slate-700/80 shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Australia Fleet Tracking</span>
                  <span className="text-[10px] text-emerald-300 ml-1">View Details &rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SOLUTIONS GRID: 6 Solution Cards */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-3">
              Telematics & IoT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Powerful Fleet Intelligence Built for Australian Conditions
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              From urban delivery vans to remote resource equipment, gain complete clarity over every asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={`/solutions/${item.slug}`}
                  className="p-6 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-emerald-400/50 transition-all duration-200 shadow-lg hover:shadow-emerald-950/40 hover:-translate-y-1 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
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
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden mb-16">
          <div className="relative max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-3">
              Proven Outcomes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Turn Fleet Data Into Better Decisions
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              Transform passive GPS dots on a map into actionable operational intelligence that cuts
              fuel costs, mitigates safety risks, and maintains equipment longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Link
                key={i}
                to={`/solutions/${b.slug}`}
                className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 font-bold text-white group-hover:text-emerald-300 text-base transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-emerald-400">
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
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-emerald-950/40 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Ready to Take Control of Your Fleet?
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              Start tracking with high-precision hardware and software tailored for your vehicles.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <span>Explore Fleet Tracking</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onTrial("Australia Fleet Tracking / Techtonika Autolink")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-sm transition-all active:scale-98"
            >
              <span>Get a Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onSpecialist("Australia Fleet Tracking / Techtonika Autolink")}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
            >
              <span>Talk to a Specialist</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
