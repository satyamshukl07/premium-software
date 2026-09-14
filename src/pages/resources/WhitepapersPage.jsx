import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Check,
  SlidersHorizontal,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function WhitepapersPage() {
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [downloadingId, setDownloadingId] = useState(null);

  const handleDownload = (id) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
    }, 2500);
  };

  const whitepapers = [
    // 1. WRMS Pro
    {
      id: 'wp-wrms',
      product: 'WRMS Pro',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Commercial Workshop Efficiency & Bay Bottleneck Elimination',
      subtitle:
        'A comprehensive benchmark on labor capture rates, digital work orders, and condition-monitored servicing cadences in Australian maintenance workshops.',
      pages: '28 Pages • Executive Whitepaper',
      downloadCount: '1,680+ Downloads',
      highlights: [
        'How electronic job cards cut bay turnaround by 40% compared to paper boards',
        'Capturing unbilled technician hours with mobile punch clock integration',
        'Direct cash flow analysis comparing reactive versus condition-based scheduling',
      ],
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    },
    // 2. CHM
    {
      id: 'wp-chm',
      product: 'CHM',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'The Workshop Compliance Blueprint: NHVR Standards & Digital Bay Audits',
      subtitle:
        'A practical playbook for eliminating physical defect books, automating prestart checklists, and passing statutory heavy vehicle audits with zero infractions.',
      pages: '24 Pages • Regulatory Study',
      downloadCount: '1,240+ Downloads',
      highlights: [
        'Automating National Heavy Vehicle Regulator (NHVR) accreditation logging',
        'Zero-paper defect escalation from driver cab to workshop repair bay in under 15 minutes',
        'Audit-ready reporting with immutable digital timestamps and mechanic signatures',
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    },
    // 3. HireCar Marketplace
    {
      id: 'wp-hirecar',
      product: 'HireCar Marketplace',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      title: 'The Modernization of Vehicle Rental: From Counter Queues to Direct Marketplaces',
      subtitle:
        'Why independent Australian fleet operators are reclaiming margins with connected mobility tech, automated digital bonds, and deskless handovers.',
      pages: '22 Pages • Market Insight',
      downloadCount: '890+ Downloads',
      highlights: [
        'Bypassing traditional 20%+ OTA broker commission markups with direct listings',
        'Instant digital identity verification and automated bond holds',
        'Dynamic pricing models powered by real-time vehicle telematics availability',
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
    // 4. Australia Fleet Tracking
    {
      id: 'wp-fleet',
      product: 'Australia Fleet Tracking',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'The Hard ROI of Integrated Fleet Telematics & Preventative Servicing',
      subtitle:
        'An executive analysis of downtime reduction, outback satellite coverage, insurance risk profiles, and preventative servicing payback periods.',
      pages: '26 Pages • Telematics Benchmark',
      downloadCount: '1,520+ Downloads',
      highlights: [
        'How real-time CAN bus telemetry lowers mechanical failure rates by 34%',
        'Dual-satellite fallback protocols ensuring zero coverage blackouts across remote mining corridors',
        'Quantifiable fuel savings achieved through automated engine idle alert thresholds',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredWhitepapers =
    selectedProduct === 'All'
      ? whitepapers
      : whitepapers.filter((w) => w.product === selectedProduct);

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80">
            EXECUTIVE RESEARCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 mt-4 mb-4">
            Enterprise Whitepapers & Research Reports
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Data-backed industry studies, financial models, and strategic benchmarks across WRMS Pro, CHM, HireCar Marketplace, and Australia Fleet Tracking.
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

      {/* Whitepapers List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWhitepapers.map((wp) => {
              const isDownloading = downloadingId === wp.id;
              return (
                <div
                  key={wp.id}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Image */}
                    <div className="relative h-52 bg-slate-900 overflow-hidden">
                      <img
                        src={wp.image}
                        alt={wp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border backdrop-blur-md ${wp.badgeColor}`}>
                          {wp.product}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                        <span>{wp.pages}</span>
                        <span className="mx-2">•</span>
                        <span>{wp.downloadCount}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <h2 className="text-xl font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                        {wp.title}
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {wp.subtitle}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Key Research Takeaways:
                        </span>
                        {wp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Download Action */}
                  <div className="p-6 sm:p-7 pt-0">
                    <button
                      type="button"
                      onClick={() => handleDownload(wp.id)}
                      className={`w-full py-3 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-2xs ${
                        isDownloading
                          ? 'bg-emerald-600 text-white'
                          : 'bg-sky-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-sky-200/70'
                      }`}
                    >
                      {isDownloading ? (
                        <>
                          <Check className="w-4 h-4" /> Download Complete (PDF)
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" /> Download Full Whitepaper (PDF)
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Need custom benchmarks for your board or fleet investors?"
        subtitle="Our analytics group compiles proprietary telematics benchmarks and lifecycle repair cost models."
      />
    </div>
  );
}
