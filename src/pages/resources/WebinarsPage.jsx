import React, { useState } from 'react';
import {
  Video,
  Calendar,
  Clock,
  Play,
  User,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Tag,
  Radio,
  SlidersHorizontal,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function WebinarsPage() {
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  const webinars = [
    // 1. WRMS Pro
    {
      id: 'web-1',
      product: 'WRMS Pro',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      status: 'Recorded On-Demand',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Mastering Condition-Based PM Scheduling in WRMS Pro',
      speaker: 'David Henderson, WRMS Pro Principal Consultant',
      date: 'Recorded On-Demand',
      duration: '48 Mins',
      desc: 'Learn how to link live telematics hours and fuel meters directly to automated preventive maintenance triggers, avoiding over-servicing and sudden component breakdown.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      keyTopics: [
        'Equipment hierarchy setup for runtime meters',
        'Interactive Gantt technician workload balancing',
        'Automated spare parts re-order thresholds',
      ],
    },
    // 2. CHM
    {
      id: 'web-2',
      product: 'CHM',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      status: 'Upcoming Live Masterclass',
      statusColor: 'bg-rose-50 text-rose-700 border-rose-200',
      title: 'Automating Statutory Heavy Vehicle Compliance with CHM',
      speaker: 'Michael Vance, Compliance Solutions Architect',
      date: 'Upcoming Live: Thursday, Oct 22, 2026 • 11:00 AM AEDT',
      duration: '60 Mins',
      desc: 'A live interactive masterclass demonstrating digital prestart logs, defect ticket escalation, torque wrench calibration logs, and automated NHVR audit packs.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      keyTopics: [
        'Real-time bay capacity Gantt scheduling',
        'NHVR statutory inspection defect sign-offs',
        'One-click digital compliance audit exports',
      ],
    },
    // 3. HireCar Marketplace
    {
      id: 'web-3',
      product: 'HireCar Marketplace',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      status: 'Recorded On-Demand',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Maximizing Fleet Utilization on HireCar Marketplace',
      speaker: 'Chloe Bennett, Head of Mobility Platforms',
      date: 'Recorded On-Demand',
      duration: '45 Mins',
      desc: 'Discover how independent Australian rental operators eliminate 20%+ broker commissions, configure contactless airport handovers, and automate customer bond holds.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      keyTopics: [
        'Connecting live telematics for instant booking availability',
        'Digital identity verification & fraud prevention',
        'Automated toll fee matching via Linkt/EastLink',
      ],
    },
    // 4. Australia Fleet Tracking
    {
      id: 'web-4',
      product: 'Australia Fleet Tracking',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      status: 'Recorded On-Demand',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Real-Time Telematics Masterclass: Live GPS, CAN Bus Diagnostics & Driver Safety',
      speaker: 'Marcus Thornton, Lead Telematics Field Engineer',
      date: 'Recorded On-Demand',
      duration: '52 Mins',
      desc: 'In-depth demonstration of dual-satellite fallback in remote outback zones, instant engine trouble-code alerts, geofence perimeters, and driver safety scorecards.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      keyTopics: [
        'Outback satellite failover during cellular blackouts',
        'CAN bus fuel burn audits & idle time reduction',
        'Harsh acceleration, braking & speed event triage',
      ],
    },
  ];

  const filteredWebinars =
    selectedProduct === 'All'
      ? webinars
      : webinars.filter((w) => w.product === selectedProduct);

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80">
            INTERACTIVE LEARNING
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 mt-4 mb-4">
            Webinars & Video Masterclasses
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Watch deep-dive software demonstrations, compliance workshops, and telematics masterclasses across WRMS Pro, CHM, HireCar Marketplace, and Australia Fleet Tracking.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200/80 sticky top-16 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mr-2 shrink-0">
              Filter By Product:
            </span>
            {['All', 'WRMS Pro', 'CHM', 'HireCar Marketplace', 'Australia Fleet Tracking'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedProduct(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedProduct === tab
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-sky-50 hover:text-blue-700 border border-slate-200/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Banner */}
                  <div className="relative h-56 bg-slate-900 overflow-hidden">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-black/20 to-transparent flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setSelectedWebinar(webinar)}
                        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer ring-4 ring-white/30"
                      >
                        <Play className="w-6 h-6 ml-1" />
                      </button>
                    </div>

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border backdrop-blur-md ${webinar.badgeColor}`}>
                        {webinar.product}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border backdrop-blur-md ${webinar.statusColor}`}>
                        {webinar.status}
                      </span>
                    </div>

                    <span className="absolute bottom-3 right-3 text-[11px] font-bold bg-black/80 text-white px-2.5 py-1 rounded-md">
                      {webinar.duration}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{webinar.date}</span>
                    </div>

                    <h2 className="text-lg font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                      {webinar.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {webinar.desc}
                    </p>

                    <div className="text-xs text-slate-500 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{webinar.speaker}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Masterclass Topics:
                      </span>
                      {webinar.keyTopics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedWebinar(webinar)}
                    className="w-full py-3 bg-sky-50 hover:bg-blue-600 text-blue-700 hover:text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Watch Masterclass Recording</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {selectedWebinar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-sky-400 tracking-wider">
                {selectedWebinar.product} Masterclass
              </span>
              <button
                type="button"
                onClick={() => setSelectedWebinar(null)}
                className="text-slate-400 hover:text-white font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center relative">
              <img
                src={selectedWebinar.image}
                alt={selectedWebinar.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center ring-4 ring-white/20">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <h3 className="text-xl font-bold max-w-lg">{selectedWebinar.title}</h3>
                <p className="text-xs text-slate-300">Speaker: {selectedWebinar.speaker}</p>
                <span className="text-xs text-emerald-400 font-mono">Stream Ready • 1080p HD</span>
              </div>
            </div>
            <div className="p-6 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500">Duration: {selectedWebinar.duration}</span>
              <button
                type="button"
                onClick={() => setSelectedWebinar(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}

      <CallToActionBanner
        title="Want a private masterclass for your engineering team?"
        subtitle="We deliver customized webinars focused on your specific plant equipment, workshop workflows, and telematics fleet."
      />
    </div>
  );
}
