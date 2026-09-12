import React, { useState } from 'react';
import { BookOpen, FileText, Download, CheckCircle2, ArrowRight, ExternalLink, Settings, Wrench, Car, Navigation } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function ProductGuidesPage() {
  const [selectedProduct, setSelectedProduct] = useState('All');

  const guides = [
    {
      id: 'g-mex-1',
      product: 'MEX CMMS',
      icon: <Settings className="w-5 h-5 text-blue-500" />,
      title: 'MEX v16 Administrator & Hierarchy Architecture Manual',
      pages: '48 Pages',
      updated: 'August 2026',
      desc: 'Complete reference for configuring multi-tier parent-child asset trees, setting security permissions, cost centers, and automated meter-reading triggers.',
    },
    {
      id: 'g-mex-2',
      product: 'MEX CMMS',
      icon: <Settings className="w-5 h-5 text-blue-500" />,
      title: 'Preventive Maintenance Scheduling & Workload Balancing Playbook',
      pages: '36 Pages',
      updated: 'July 2026',
      desc: 'Standardize calendar cadences, statutory test protocols, and spare parts kitting workflows to eliminate maintenance backlog.',
    },
    {
      id: 'g-chm-1',
      product: 'CHM',
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      title: 'Car Hire Manager: Workshop Bay Scheduling & Job Cards Guide',
      pages: '42 Pages',
      updated: 'August 2026',
      desc: 'Step-by-step setup for digital job cards, mechanic time-tracking on tablets, parts inventory deductions, and NHVR compliance records.',
    },
    {
      id: 'g-chm-2',
      product: 'CHM',
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      title: 'CHM Fleet Turnaround & Rental Desk Operations Manual',
      pages: '30 Pages',
      updated: 'June 2026',
      desc: 'Fast-track vehicle check-in, automated toll matching, bond authorization protocols, and rapid sanitization workflows.',
    },
    {
      id: 'g-hirecar-1',
      product: 'HireCar Marketplace',
      icon: <Car className="w-5 h-5 text-pink-500" />,
      title: 'Independent Operator Onboarding & Direct Listing Handbook',
      pages: '28 Pages',
      updated: 'September 2026',
      desc: 'Everything fleet operators need to know to list inventory, connect live telematics availability, set dynamic pricing, and manage airport handovers.',
    },
    {
      id: 'g-aft-1',
      product: 'Australia Fleet Tracking',
      icon: <Navigation className="w-5 h-5 text-emerald-500" />,
      title: 'Telematics Hardware Installation & CAN Bus Calibration Guide',
      pages: '54 Pages',
      updated: 'August 2026',
      desc: 'Physical wiring diagrams for OBD-II, J1939 heavy vehicle plugs, satellite antennas, duress buttons, and remote starter interlocks.',
    },
  ];

  const filteredGuides = selectedProduct === 'All' ? guides : guides.filter((g) => g.product === selectedProduct);

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Technical Documentation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Product Guides & Implementation Manuals
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In-depth operational playbooks, administrator references, and hardware setup guides across the four Techtonika automotive software platforms.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
          {['All', 'MEX CMMS', 'CHM', 'HireCar Marketplace', 'Australia Fleet Tracking'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedProduct(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedProduct === tab
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-slate-100 rounded-lg">{guide.icon}</div>
                      <span className="text-xs font-bold text-slate-700">{guide.product}</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {guide.pages}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{guide.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{guide.desc}</p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Updated {guide.updated}</span>
                  <button
                    type="button"
                    onClick={() => alert(`Starting download for: ${guide.title}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Need personalized administrator training?"
        subtitle="Our implementation consultants deliver accredited onsite or virtual training for your entire engineering team."
      />
    </div>
  );
}
