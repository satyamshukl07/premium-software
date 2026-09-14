import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Download,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Settings,
  Wrench,
  Car,
  Navigation,
  ShieldCheck,
  ClipboardList,
  Boxes,
  MapPin,
  BarChart3,
  Calendar,
  Users,
  Check,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function ProductGuidesPage() {
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [downloadingId, setDownloadingId] = useState(null);

  const handleDownload = (id, title) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
    }, 2500);
  };

  const guides = [
    // WRMS Pro Guides
    {
      id: 'g-wrms-1',
      product: 'WRMS Pro',
      guideCategory: 'Workshop Management Guide',
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      title: 'WRMS Pro Workshop Management & Bay Architecture Guide',
      pages: '48 Pages',
      updated: 'August 2026',
      desc: 'Complete operational manual for configuring multi-tier repair bay schedules, technician skill groups, cost centers, and automated inventory deduction triggers.',
      topics: ['Repair bay Gantt hierarchies', 'Technician skill matching', 'Labor rate schedules', 'Work request dispatch'],
    },
    {
      id: 'g-wrms-2',
      product: 'WRMS Pro',
      guideCategory: 'Job Card Guide',
      icon: <ClipboardList className="w-5 h-5 text-blue-600" />,
      title: 'Digital Job Card & Technician Clocking Guide',
      pages: '36 Pages',
      updated: 'July 2026',
      desc: 'Step-by-step instructions for mechanic tablet time-logging, task checklists, photo defect attachments, and customer estimate authorizations.',
      topics: ['Electronic job cards', 'Mechanic touch-screen punches', 'Customer SMS approvals', 'Defect image capture'],
    },
    {
      id: 'g-wrms-3',
      product: 'WRMS Pro',
      guideCategory: 'Inventory Guide',
      icon: <Boxes className="w-5 h-5 text-blue-600" />,
      title: 'Workshop Spare Parts & Inventory Control Guide',
      pages: '40 Pages',
      updated: 'August 2026',
      desc: 'Best practices for automated reorder points, barcode scanning, bin location tracking, and vendor purchase order synchronization.',
      topics: ['Min/max stock thresholds', 'Barcode scanner integration', 'Direct PO generation', 'Multi-workshop stock transfers'],
    },

    // CHM Guides
    {
      id: 'g-chm-1',
      product: 'CHM',
      guideCategory: 'Compliance Guide',
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      title: 'CHM Statutory Compliance & NHVR Regulatory Manual',
      pages: '44 Pages',
      updated: 'September 2026',
      desc: 'Comprehensive framework for meeting National Heavy Vehicle Regulator (NHVR) accreditation, statutory maintenance records, and zero-paper audit trails.',
      topics: ['NHVR accreditation rules', 'Statutory maintenance logs', 'Torque & brake audit records', 'Zero-paper compliance reports'],
    },
    {
      id: 'g-chm-2',
      product: 'CHM',
      guideCategory: 'Inspection Guide',
      icon: <CheckCircle2 className="w-5 h-5 text-amber-600" />,
      title: 'Mobile Prestart & Safety Inspection Checklist Guide',
      pages: '32 Pages',
      updated: 'August 2026',
      desc: 'Configure custom inspection checklists for heavy road transport, buses, and passenger vehicles with instant defect triage escalation.',
      topics: ['Custom prestart templates', 'Mandatory photo capture', 'Instant bay defect alerts', 'Offline tablet inspection logging'],
    },
    {
      id: 'g-chm-3',
      product: 'CHM',
      guideCategory: 'Workshop Workflow Guide',
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      title: 'CHM Workshop Workflow & Service Bay Scheduling Manual',
      pages: '38 Pages',
      updated: 'July 2026',
      desc: 'End-to-end guide on scheduling preventative maintenance cadences, tracking mechanic billables, and syncing vehicle availability with booking desks.',
      topics: ['Service bay capacity planning', 'Job allocation Gantt charts', 'Fleet booking coordination', 'Subcontractor repair tracking'],
    },

    // HireCar Marketplace Guides
    {
      id: 'g-hirecar-1',
      product: 'HireCar Marketplace',
      guideCategory: 'Rental Operator Guide',
      icon: <Car className="w-5 h-5 text-indigo-600" />,
      title: 'Independent Rental Operator Direct Listing Handbook',
      pages: '34 Pages',
      updated: 'September 2026',
      desc: 'How independent Australian car rental operators configure vehicle categories, seasonal pricing, security bond rules, and airport handover logistics.',
      topics: ['Fleet listing configuration', 'Dynamic pricing rules', 'Bond authorization thresholds', 'Airport terminal handover desks'],
    },
    {
      id: 'g-hirecar-2',
      product: 'HireCar Marketplace',
      guideCategory: 'Booking Management Guide',
      icon: <Calendar className="w-5 h-5 text-indigo-600" />,
      title: 'Real-Time Calendar & Booking Management Guide',
      pages: '28 Pages',
      updated: 'August 2026',
      desc: 'Managing instant reservations, modification requests, automated toll reconciliation, and contactless mobile pickup handovers.',
      topics: ['Live calendar sync', 'Automated Linkt/EastLink tolls', 'Rental agreement sign-off', 'Contactless key locker setup'],
    },
    {
      id: 'g-hirecar-3',
      product: 'HireCar Marketplace',
      guideCategory: 'Customer Management Guide',
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: 'Customer Verification, Bond Security & Risk Guide',
      pages: '30 Pages',
      updated: 'July 2026',
      desc: 'Automate customer identity verification, digital driver license checks, fraud prevention, and rapid bond refund workflows.',
      topics: ['Digital ID & license verification', 'Automated security bond holds', 'Damage dispute handling', 'Customer rating systems'],
    },

    // Australia Fleet Tracking Guides
    {
      id: 'g-aft-1',
      product: 'Australia Fleet Tracking',
      guideCategory: 'GPS Tracking Guide',
      icon: <Navigation className="w-5 h-5 text-emerald-600" />,
      title: 'Live GPS Fleet Tracking & Hardware Installation Guide',
      pages: '54 Pages',
      updated: 'August 2026',
      desc: 'Physical wiring diagrams for OBD-II, J1939 heavy vehicle plugs, satellite antennas, duress buttons, and remote starter interlocks.',
      topics: ['OBD-II & CAN bus wiring', 'Satellite antenna mounting', 'Dual-SIM cellular setup', 'Remote engine immobilizers'],
    },
    {
      id: 'g-aft-2',
      product: 'Australia Fleet Tracking',
      guideCategory: 'Geofencing Guide',
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      title: 'Geofencing & Automated Location Triggers Guide',
      pages: '26 Pages',
      updated: 'September 2026',
      desc: 'How to draw polygon geofences around depots, client job sites, and hazardous zones with automated entry/exit SMS and webhook alerts.',
      topics: ['Polygon & corridor geofences', 'Entry/exit automated alerts', 'Jobsite detention time tracking', 'Outback border perimeter alerts'],
    },
    {
      id: 'g-aft-3',
      product: 'Australia Fleet Tracking',
      guideCategory: 'Fleet Analytics Guide',
      icon: <BarChart3 className="w-5 h-5 text-emerald-600" />,
      title: 'Fleet Analytics, Fuel Auditing & Driver Safety Scoring Guide',
      pages: '42 Pages',
      updated: 'August 2026',
      desc: 'Comprehensive handbook for interpreting CAN bus fuel burn rates, idle time reduction, harsh braking risk scores, and NHVR driver hours.',
      topics: ['Driver safety league tables', 'Fuel burn vs idle audits', 'Harsh cornering & braking alerts', 'NHVR fatigue compliance exports'],
    },
  ];

  const filteredGuides =
    selectedProduct === 'All'
      ? guides
      : guides.filter((g) => g.product === selectedProduct);

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80">
            TECHNICAL DOCUMENTATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 mt-4 mb-4">
            Product Guides & Implementation Manuals
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In-depth operational playbooks, administrator references, and step-by-step guides organized across all four Techtonika automotive software platforms.
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

      {/* Guides Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => {
              const isDownloading = downloadingId === guide.id;
              return (
                <div
                  key={guide.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-blue-200 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl group-hover:scale-105 transition-transform shadow-2xs">
                          {guide.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">
                            {guide.product}
                          </span>
                          <span className="text-[11px] font-semibold text-blue-600 block">
                            {guide.guideCategory}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                        {guide.pages}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.desc}
                    </p>

                    {/* Topic Chips */}
                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Key Sections Included:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {guide.topics.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/70 px-2.5 py-0.5 rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Updated {guide.updated}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDownload(guide.id, guide.title)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all shadow-2xs ${
                        isDownloading
                          ? 'bg-emerald-600 text-white'
                          : 'bg-sky-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-sky-200/70'
                      }`}
                    >
                      {isDownloading ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Ready (PDF)
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" /> Download Guide
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
        title="Need personalized administrator training?"
        subtitle="Our implementation consultants deliver accredited onsite or virtual training for your entire engineering team across all four products."
      />
    </div>
  );
}
