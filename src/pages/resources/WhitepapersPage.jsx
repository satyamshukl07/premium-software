import React from 'react';
import { FileText, Download, CheckCircle2, ArrowRight, ShieldCheck, BarChart3 } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function WhitepapersPage() {
  const whitepapers = [
    {
      id: 'wp-1',
      title: 'The Hard ROI of Integrated Fleet Telematics & CMMS Maintenance',
      subtitle: 'An executive analysis of downtime reduction, insurance risk profiles, and preventative servicing payback periods.',
      pages: '24 Pages • Executive Whitepaper',
      downloadCount: '1,420+ Downloads',
      highlights: [
        'How real-time CAN bus telemetry lowers mechanical failure rates by 34%',
        'Reducing unbilled technician downtime with mobile work request apps',
        'Direct cash flow analysis comparing reactive versus condition-based maintenance cadences',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'wp-2',
      title: 'Workforce Succession in Australian Heavy Maintenance: 2026–2030',
      subtitle: 'Strategies for capturing decades of senior tradesperson equipment know-how before retirement milestones.',
      pages: '18 Pages • Industry Research',
      downloadCount: '980+ Downloads',
      highlights: [
        'Standardizing digital SOPs and prestart inspection checklists',
        'Bridging the digital gap between field apprentices and shift supervisors',
        'Case studies from national mining and logistics operators',
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'wp-3',
      title: 'The Modernization of Vehicle Rental: From Counter Queues to Direct Marketplaces',
      subtitle: 'Why independent Australian fleet operators are reclaiming margins with connected mobility tech.',
      pages: '22 Pages • Market Insight',
      downloadCount: '750+ Downloads',
      highlights: [
        'Bypassing traditional 25% OTA broker commission markups',
        'Instant digital identity verification and automated bond holds',
        'Dynamic pricing powered by real-time vehicle telematics availability',
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Executive Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Enterprise Whitepapers & Research Reports
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Data-backed industry studies, financial models, and strategic benchmarks developed by Techtonika automotive software researchers and field engineers.
          </p>
        </div>
      </section>

      {/* Whitepapers List */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {whitepapers.map((wp) => (
            <div
              key={wp.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold text-blue-600">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">{wp.pages}</span>
                  <span className="text-slate-400 font-medium">{wp.downloadCount}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">{wp.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{wp.subtitle}</p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Key Executive Takeaways:</span>
                  {wp.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => alert(`Whitepaper download started for: ${wp.title}`)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl inline-flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" /> Download Complete Report (PDF)
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-64 sm:h-80 bg-slate-900">
                <img src={wp.image} alt={wp.title} className="w-full h-full object-cover opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Techtonika Research Series</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToActionBanner
        title="Looking for tailored consulting on your fleet operations?"
        subtitle="Our software architects will review your existing asset register and create a customized ROI breakdown."
      />
    </div>
  );
}
