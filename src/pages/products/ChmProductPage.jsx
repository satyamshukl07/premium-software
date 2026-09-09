import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Car,
  CalendarCheck,
  Repeat,
  Calendar,
  Users,
  DollarSign,
  ShieldCheck,
  Navigation,
  Wrench,
  BarChart3,
  ExternalLink,
  ArrowRight,
  Check,
  Sparkles,
  Search,
  RefreshCw,
  Clock,
  Plus,
  Printer,
  Copy,
  Edit3,
  Send,
  AlertCircle,
  CheckCircle2,
  Smile,
  UserX,
  Bell,
  Fuel,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Maximize2,
  Moon,
  Layers,
  Package,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function ChmProductPage() {
  const chmPortalUrl = 'https://chmportal.carhiremanager.com.au/';
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // 9 Modules based strictly on the CHM screenshots provided
  const enterpriseModules = [
    {
      id: 'dashboard',
      title: 'Dashboard Overview',
      tabLabel: 'Dashboard',
      desc: 'Get a clear overview of fleets, customers, active rentals, available vehicles and daily operations from one dashboard.',
      icon: <Home className="w-4 h-4" />,
      isPrimary: true,
    },
    {
      id: 'fleet-status',
      title: 'Fleet Status',
      tabLabel: 'Fleet Status',
      desc: 'View your complete fleet, vehicle availability, status, category, registration and rental information.',
      icon: <Car className="w-4 h-4" />,
    },
    {
      id: 'booking-mgmt',
      title: 'Booking Management',
      tabLabel: 'Bookings',
      desc: 'Create, manage and track bookings with pickup, return, customer and vehicle information.',
      icon: <CalendarCheck className="w-4 h-4" />,
    },
    {
      id: 'recurring',
      title: 'Recurring Booking',
      tabLabel: 'Recurring',
      desc: 'Manage recurring rentals and keep long-term bookings organised in one place.',
      icon: <Repeat className="w-4 h-4" />,
    },
    {
      id: 'calendar',
      title: 'Calendar & Scheduling',
      tabLabel: 'Calendar',
      desc: 'View bookings, rentals, availability and maintenance schedules through an easy calendar interface.',
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      id: 'customers',
      title: 'Customer Management',
      tabLabel: 'Customers',
      desc: 'Manage customer details, contact information, licences and rental records efficiently.',
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: 'financial-insights',
      title: 'Financial Insights',
      tabLabel: 'Insights',
      desc: 'Track revenue, payments, outstanding amounts and important financial information.',
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      id: 'expenses',
      title: 'Financials & Expenses',
      tabLabel: 'Expenses',
      desc: 'Manage fuel, maintenance, tolls, registration and other vehicle-related expenses.',
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      id: 'drivers',
      title: 'Driver Management',
      tabLabel: 'Drivers',
      desc: 'Manage drivers, incidents, risks and financial impact to support safer fleet operations.',
      icon: <ShieldCheck className="w-4 h-4" />,
    },
  ];

  const currentModule = enterpriseModules[activeScreenIndex];

  return (
    <div className="bg-white text-slate-800">
      {/* Dark Navy CHM Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Car Hire Management System</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              CHM — Smart Car Hire Management
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Australia's premier cloud car rental and fleet management software. Designed to manage vehicle lifecycles, automate toll recovery with Linkt, streamline recurring corporate rentals, and bring complete operational clarity to vehicle hire businesses nationwide.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={chmPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg active:scale-98 flex items-center gap-2"
              >
                <span>Access CHM Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/free-trial"
                className="px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                Start Free 14-Day Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Reliability Section (Matching MEX CMMS Design Template) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT SIDE: Eyebrow, Heading, Paragraph, 9 Feature Descriptions, CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600 block mb-2">
                  Enterprise Reliability
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Complete Control Over Your Car Hire Operations
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                  CHM provides a powerful platform to manage bookings, vehicles, customers, drivers, finances and daily car hire operations — all in one place.
                </p>

                {/* 9 Feature Descriptions (Clickable to switch right-hand screenshot showcase) */}
                <div className="mt-7 space-y-2.5">
                  {enterpriseModules.map((item, idx) => {
                    const isActive = activeScreenIndex === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-start gap-3 border ${
                          isActive
                            ? 'bg-blue-50/80 border-blue-200 shadow-xs'
                            : 'bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200'
                        }`}
                      >
                        <div
                          className={`p-1.5 rounded-lg shrink-0 mt-0.5 transition-colors ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4
                              className={`text-xs sm:text-sm font-bold tracking-tight ${
                                isActive ? 'text-blue-900' : 'text-slate-900'
                              }`}
                            >
                              {item.title}
                            </h4>
                            {item.isPrimary && (
                              <span className="text-[10px] font-extrabold uppercase tracking-wide bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                Primary
                              </span>
                            )}
                          </div>
                          <p
                            className={`text-xs mt-1 leading-relaxed ${
                              isActive ? 'text-blue-950 font-medium' : 'text-slate-600'
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Single CTA: Explore CHM */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center">
                <a
                  href={chmPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 group"
                >
                  <span>Explore CHM</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Large Product Screenshot / Showcase Composition */}
            <div className="lg:col-span-7">
              <div className="sticky top-24 space-y-4">
                {/* Module Quick-Switcher Tabs / Pill Strip */}
                <div className="bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 flex items-center gap-1 overflow-x-auto scrollbar-none shadow-xs">
                  {enterpriseModules.map((m, idx) => {
                    const isActive = activeScreenIndex === idx;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                        }`}
                      >
                        {m.tabLabel}
                      </button>
                    );
                  })}
                </div>

                {/* Main Screen Showcase Container with Layered Stack Composition */}
                <div className="relative pt-2">
                  {/* Layered background visual effect mimicking stacked software modules */}
                  <div className="absolute -inset-x-2 -bottom-2 h-full bg-slate-200/50 rounded-3xl -rotate-1 transform pointer-events-none hidden sm:block border border-slate-300/40" />
                  <div className="absolute -inset-x-1 -bottom-1 h-full bg-slate-100 rounded-3xl rotate-0.5 transform pointer-events-none hidden sm:block border border-slate-200" />

                  {/* Top Layer: Primary Showcase Window Frame */}
                  <div className="relative bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden text-slate-800">
                    {/* Software Window Chrome Header */}
                    <div className="bg-[#1e293b] px-4 py-2.5 flex items-center justify-between text-white border-b border-slate-700/60">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block" />
                        </div>
                        <span className="ml-2 text-xs font-mono tracking-tight text-slate-300 hidden sm:inline">
                          CHM Cloud Portal // {currentModule.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-300 text-xs">
                        <span className="bg-slate-800 px-2 py-0.5 rounded-md text-[11px] font-mono text-blue-400">
                          Screen {activeScreenIndex + 1} of 9
                        </span>
                        <div className="flex items-center gap-1 border-l border-slate-700 pl-2">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveScreenIndex((prev) =>
                                prev === 0 ? enterpriseModules.length - 1 : prev - 1
                              )
                            }
                            className="p-1 rounded hover:bg-slate-700 text-slate-300 transition-colors"
                            aria-label="Previous screen"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveScreenIndex((prev) =>
                                prev === enterpriseModules.length - 1 ? 0 : prev + 1
                              )
                            }
                            className="p-1 rounded hover:bg-slate-700 text-slate-300 transition-colors"
                            aria-label="Next screen"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Body Rendering: High Fidelity Replicas of the 9 CHM Screens */}
                    <div className="bg-[#f4f6f9] p-3 sm:p-5 min-h-[460px] sm:min-h-[500px] flex flex-col justify-start select-none">
                      {/* Sub-Header bar replicated from CHM software */}
                      <div className="bg-white rounded-xl p-3 shadow-xs border border-slate-200/80 mb-3.5 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                            {currentModule.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            <span className="font-semibold">09 Sept 2026</span>
                          </div>
                          <button
                            type="button"
                            className="p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            title="Reload live data"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                          </button>
                          <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-200 pl-2 text-slate-400">
                            <Moon className="w-3.5 h-3.5" />
                            <Maximize2 className="w-3.5 h-3.5" />
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center text-[10px]">
                              RS
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dynamic Screen View Content */}
                      {renderChmScreenshot(currentModule.id)}
                    </div>

                    {/* Bottom Status Ribbon */}
                    <div className="bg-slate-900 text-slate-400 px-4 py-2.5 text-xs flex items-center justify-between border-t border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] text-slate-300 font-mono">
                          LIVE CHM CLOUD SUITE • AUSTRALIAN FLEET OPERATIONS
                        </span>
                      </div>
                      <a
                        href={chmPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                      >
                        <span>Open module in CHM</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Supporting Module Preview Strip (Thumbnails of supporting screens) */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      All 9 Integrated Management Modules
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Click any module to inspect UI
                    </span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1.5">
                    {enterpriseModules.map((m, idx) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`p-1.5 rounded-lg text-center transition-all border ${
                          activeScreenIndex === idx
                            ? 'bg-blue-50 border-blue-400 text-blue-700 shadow-xs font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex justify-center mb-0.5">{m.icon}</div>
                        <p className="text-[9px] truncate leading-tight">{m.tabLabel}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}

// Helper renderer for each of the 9 exact CHM software screenshots
function renderChmScreenshot(screenId) {
  switch (screenId) {
    case 'dashboard':
      return (
        <div className="space-y-3.5">
          {/* Top 6 KPI Metric Cards Grid matching Screenshot 132028 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {/* Fleets */}
            <div className="rounded-xl p-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white shadow-sm flex flex-col justify-between h-20">
              <div className="flex items-center gap-1.5 text-xs font-semibold opacity-95">
                <Car className="w-4 h-4" />
                <span>Fleets</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black">2</div>
            </div>

            {/* Customers */}
            <div className="rounded-xl p-3 bg-gradient-to-r from-[#f857a6] to-[#ff5858] text-white shadow-sm flex flex-col justify-between h-20">
              <div className="flex items-center gap-1.5 text-xs font-semibold opacity-95">
                <Users className="w-4 h-4" />
                <span>Customers</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black">1</div>
            </div>

            {/* Active Rentals */}
            <div className="rounded-xl p-3 bg-gradient-to-r from-[#fa709a] to-[#fee140] text-white shadow-sm flex flex-col justify-between h-20">
              <div className="flex items-center gap-1.5 text-xs font-semibold opacity-95">
                <CalendarCheck className="w-4 h-4" />
                <span>Active Rentals</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black">1</div>
            </div>

            {/* Available Vehicles */}
            <div className="rounded-xl p-3 bg-[#6355a4] text-white shadow-sm flex flex-col justify-between h-20">
              <div className="flex items-center gap-1.5 text-xs font-semibold opacity-95">
                <Car className="w-4 h-4" />
                <span>Available Vehicles</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black">1</div>
            </div>

            {/* Accidental */}
            <div className="rounded-xl p-3 bg-[#f0386b] text-white shadow-sm flex flex-col justify-between h-20">
              <div className="flex items-center gap-1.5 text-xs font-semibold opacity-95">
                <AlertCircle className="w-4 h-4" />
                <span>Accidental</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black">0</div>
            </div>

            {/* On Maintenance */}
            <div className="rounded-xl p-3 bg-[#f9483b] text-white shadow-sm flex flex-col justify-between h-20">
              <div className="flex items-center gap-1.5 text-xs font-semibold opacity-95">
                <Wrench className="w-4 h-4" />
                <span>On Maintenance</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black">1</div>
            </div>
          </div>

          {/* Bottom Dispatch Cards: Today Pickup & Today Return */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="rounded-xl p-3.5 bg-[#0d82f7] text-white shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-white/20">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold opacity-90">Today Pickup</div>
                  <div className="text-lg font-extrabold">1 Departure Scheduled</div>
                </div>
              </div>
              <span className="text-xs bg-white/25 px-2 py-0.5 rounded font-bold">depot active</span>
            </div>

            <div className="rounded-xl p-3.5 bg-[#00a86b] text-white shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-white/20">
                  <Repeat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold opacity-90">Today Return</div>
                  <div className="text-lg font-extrabold">0 Due Back</div>
                </div>
              </div>
              <span className="text-xs bg-white/25 px-2 py-0.5 rounded font-bold">all on schedule</span>
            </div>
          </div>
        </div>
      );

    case 'fleet-status':
      return (
        <div className="space-y-3">
          {/* Breadcrumbs & Filter Bar matching Screenshot 132042 */}
          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500">
            <div>Fleet Status &gt; All Fleet &gt; Fleet Status</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="relative col-span-1 sm:col-span-1">
              <input
                type="text"
                readOnly
                value="Search by Make, Model, License..."
                className="w-full text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-400"
              />
            </div>
            <div className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-600 flex justify-between items-center">
              <span>All Status</span>
              <span className="text-[10px]">▼</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-600 flex justify-between items-center">
              <span>All Category</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-800">All Fleets</span>
                <div className="flex items-center gap-1 ml-2">
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">Copy</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">CSV</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">Print</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-400">Search: [       ]</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-100 text-[11px] uppercase">
                  <tr>
                    <th className="p-2.5 font-bold">Registration No</th>
                    <th className="p-2.5 font-bold">Year</th>
                    <th className="p-2.5 font-bold">Model</th>
                    <th className="p-2.5 font-bold">Category</th>
                    <th className="p-2.5 font-bold">Make</th>
                    <th className="p-2.5 font-bold">Status</th>
                    <th className="p-2.5 font-bold">Transmission</th>
                    <th className="p-2.5 font-bold">Daily Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-blue-50/40">
                    <td className="p-2.5 font-bold text-blue-600 flex items-center gap-1">
                      <span className="text-blue-500 font-mono">⊕</span> TG1232
                    </td>
                    <td className="p-2.5">2026</td>
                    <td className="p-2.5 font-medium">TR001</td>
                    <td className="p-2.5">1 Ton Van</td>
                    <td className="p-2.5">Truck</td>
                    <td className="p-2.5">
                      <span className="bg-[#f74f76] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        On Hire
                      </span>
                    </td>
                    <td className="p-2.5">Manual</td>
                    <td className="p-2.5 font-bold text-slate-900">$10.00 / day</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="p-2.5 font-bold text-blue-600 flex items-center gap-1">
                      <span className="text-blue-500 font-mono">⊕</span> VST023
                    </td>
                    <td className="p-2.5">2025</td>
                    <td className="p-2.5 font-medium">VST001</td>
                    <td className="p-2.5">1 Ton Van</td>
                    <td className="p-2.5">Van Small Truck</td>
                    <td className="p-2.5">
                      <span className="bg-[#28a745] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Available
                      </span>
                    </td>
                    <td className="p-2.5">Automatic</td>
                    <td className="p-2.5 font-bold text-slate-900">$20.00 / day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Showing 1 to 2 of 2 entries</span>
              <div className="flex items-center gap-1">
                <span className="px-2 py-0.5 rounded border bg-white">Previous</span>
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold">1</span>
                <span className="px-2 py-0.5 rounded border bg-white">Next</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'booking-mgmt':
      return (
        <div className="space-y-3">
          {/* Top Actions matching Screenshot 132057 */}
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-slate-500">
              Booking Management &gt; Add Booking &gt; Booking Management
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#3eb67a] hover:bg-[#349e69] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" />
                <span>New Booking</span>
              </button>
              <button className="bg-[#1da1f2] hover:bg-[#1890d8] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <span>Booking Export</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Total Bookings</div>
                <div className="text-xl font-extrabold text-slate-900">1</div>
                <div className="text-[10px] text-slate-400">This Month</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Upcoming</div>
                <div className="text-xl font-extrabold text-slate-900">0</div>
                <div className="text-[10px] text-slate-400">Pickup &le; 5 days</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">On Hire</div>
                <div className="text-xl font-extrabold text-slate-900">1</div>
                <div className="text-[10px] text-slate-400">Currently active</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Car className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Completed</div>
                <div className="text-xl font-extrabold text-slate-900">0</div>
                <div className="text-[10px] text-slate-400">Vehicle returned</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Table: All Booking */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-2.5 border-b border-slate-100 font-bold text-xs text-slate-800">
              All Booking
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase">
                  <tr>
                    <th className="p-2">ID</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Make/Model</th>
                    <th className="p-2">Registration No</th>
                    <th className="p-2">Pickup</th>
                    <th className="p-2">Return</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2 font-bold text-blue-600">#BK-204</td>
                    <td className="p-2">
                      <div className="font-bold text-slate-800">Raj Singh</div>
                      <div className="text-[10px] text-slate-400">8789878987</div>
                    </td>
                    <td className="p-2">
                      <span className="bg-[#f74f76] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        On Hire
                      </span>
                    </td>
                    <td className="p-2">Truck / TR001</td>
                    <td className="p-2 font-bold text-blue-600">TG1232</td>
                    <td className="p-2 text-[11px] text-slate-600">20 Aug 2026 | 04:05 PM</td>
                    <td className="p-2 text-[11px] text-slate-600">30 Sep 2026 | 04:06 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    case 'recurring':
      return (
        <div className="space-y-3">
          {/* Recurring Booking matching Screenshot 132108 */}
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-slate-500">
              Recurring Booking &gt; Add Recurring &gt; Recurring Booking
            </div>
            <button className="bg-[#3eb67a] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
              <Plus className="w-3.5 h-3.5" />
              <span>New Recurring</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-2">
            <input
              type="text"
              readOnly
              value="Search by Name, Email, Phone, License Plate..."
              className="w-full text-xs text-slate-400 bg-slate-50 rounded px-2.5 py-1 border border-slate-200"
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-800">All Recuring</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">Copy</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">CSV</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">Print</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase">
                  <tr>
                    <th className="p-2">#</th>
                    <th className="p-2">Customer Name</th>
                    <th className="p-2">Customer Phone</th>
                    <th className="p-2">Make/Model</th>
                    <th className="p-2">Registration No</th>
                    <th className="p-2">Frequency</th>
                    <th className="p-2">Rate</th>
                    <th className="p-2">Start Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-slate-400 font-medium text-xs">
                      No data available in table
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between items-center">
              <span>Showing 0 to 0 of 0 entries</span>
              <div className="flex gap-1 text-slate-400">
                <span className="px-2 py-0.5 rounded border bg-white">Previous</span>
                <span className="px-2 py-0.5 rounded border bg-white">Next</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'calendar':
      return (
        <div className="space-y-3">
          {/* Calendar & Scheduling matching Screenshot 132119 */}
          <div className="flex flex-wrap items-center justify-between text-xs gap-2">
            <div className="text-[11px] text-slate-500">Attex &gt; Apps &gt; Calendar</div>
            <div className="flex items-center gap-1 bg-slate-200 p-0.5 rounded-lg text-xs font-semibold">
              <span className="px-2.5 py-1 rounded text-slate-600">Week</span>
              <span className="px-2.5 py-1 rounded bg-[#2c384e] text-white font-bold">Month</span>
              <span className="px-2.5 py-1 rounded text-slate-600">3 Months</span>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-xs">
            <div className="bg-white border border-emerald-200 rounded-lg p-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <div>
                <div className="text-[10px] text-slate-500">Available</div>
                <div className="font-extrabold text-slate-800">1</div>
              </div>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-2 flex items-center gap-2">
              <Car className="w-4 h-4 text-blue-600" />
              <div>
                <div className="text-[10px] text-slate-500">On Rent</div>
                <div className="font-extrabold text-slate-800">1</div>
              </div>
            </div>
            <div className="bg-white border border-purple-200 rounded-lg p-2 flex items-center gap-2">
              <Repeat className="w-4 h-4 text-purple-600" />
              <div>
                <div className="text-[10px] text-slate-500">Recurring Today</div>
                <div className="font-extrabold text-slate-800">0</div>
              </div>
            </div>
            <div className="bg-white border border-rose-200 rounded-lg p-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <div>
                <div className="text-[10px] text-slate-500">Overdue</div>
                <div className="font-extrabold text-slate-800">0</div>
              </div>
            </div>
            <div className="bg-white border border-amber-200 rounded-lg p-2 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-600" />
              <div>
                <div className="text-[10px] text-slate-500">Maintenance</div>
                <div className="font-extrabold text-slate-800">2</div>
              </div>
            </div>
          </div>

          {/* Interactive Gantt Matrix Preview */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
                SEPTEMBER 2026
              </h4>
              <div className="flex items-center gap-1 text-xs">
                <span className="bg-slate-600 text-white font-bold text-[10px] px-2 py-0.5 rounded">today</span>
                <span className="p-1 rounded bg-slate-100 text-slate-700">&lt;</span>
                <span className="p-1 rounded bg-slate-100 text-slate-700">&gt;</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[420px] text-[10px]">
                <div className="grid grid-cols-12 border-b border-slate-200 pb-1 font-bold text-center text-slate-600">
                  <div className="col-span-3 text-left">Vehicle</div>
                  <div>1 Tue</div>
                  <div>2 Wed</div>
                  <div>3 Thu</div>
                  <div>4 Fri</div>
                  <div className="text-blue-600">5 Sat</div>
                  <div className="text-rose-600">6 Sun</div>
                  <div>7 Mon</div>
                  <div>8 Tue</div>
                  <div className="bg-blue-600 text-white rounded px-0.5">9 TODAY</div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-12 py-2 border-b border-slate-100 items-center">
                  <div className="col-span-3 font-semibold text-slate-800 truncate pr-1">
                    TG1232 (TR001)
                  </div>
                  <div className="col-span-9 relative h-6 bg-slate-50 rounded flex items-center px-1">
                    <div className="absolute inset-y-0.5 left-0 right-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded text-white text-[9px] font-bold flex items-center px-2 shadow-xs truncate">
                      Raj Singh • On Hire (#BK-204)
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 py-2 items-center">
                  <div className="col-span-3 font-semibold text-slate-800 truncate pr-1">
                    VST023 (VST001)
                  </div>
                  <div className="col-span-9 relative h-6 bg-emerald-50/70 border border-emerald-200 rounded flex items-center px-2">
                    <span className="text-[9px] font-bold text-emerald-700">Available For Instant Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'customers':
      return (
        <div className="space-y-3">
          {/* Customer Management matching Screenshot 132129 */}
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-slate-500">
              Customer Management &gt; Add Customer &gt; Customer Management
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#3eb67a] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" />
                <span>New Customer</span>
              </button>
              <button className="bg-[#fca523] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <span>Upload Customer</span>
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-2">
            <input
              type="text"
              readOnly
              value="Search by Name, Email, Phone, License Plate..."
              className="w-full text-xs text-slate-400 bg-slate-50 rounded px-2.5 py-1 border border-slate-200"
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-800">All Customers</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">Copy</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">CSV</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600">Print</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase">
                  <tr>
                    <th className="p-2.5">Sl</th>
                    <th className="p-2.5">Name</th>
                    <th className="p-2.5">Address</th>
                    <th className="p-2.5">Email</th>
                    <th className="p-2.5">Phone</th>
                    <th className="p-2.5">License</th>
                    <th className="p-2.5">Status</th>
                    <th className="p-2.5">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold">1</td>
                    <td className="p-2.5 font-bold text-blue-600">Raj Singh</td>
                    <td className="p-2.5 text-slate-600">Sewak Park Uttam Nagar</td>
                    <td className="p-2.5 text-slate-600">arunthinkwise@gmail.com</td>
                    <td className="p-2.5 font-medium">8789878987</td>
                    <td className="p-2.5 font-mono">001</td>
                    <td className="p-2.5">
                      <span className="bg-[#28a745] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="p-2.5">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <button className="p-1 hover:bg-slate-100 rounded border border-slate-200">
                          <Edit3 className="w-3 h-3" />
                        </button>
                        <button className="p-1 hover:bg-slate-100 rounded border border-blue-200 text-blue-600">
                          <Send className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500">
              Showing 1 to 1 of 1 entries
            </div>
          </div>
        </div>
      );

    case 'financial-insights':
      return (
        <div className="space-y-3">
          {/* Customer Financial Insights matching Screenshot 132152 */}
          <div className="flex flex-wrap items-center justify-between text-xs gap-2">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>01-09-2026 - 09-09-2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-lg font-bold">
                Filter
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                <span>↓ Export Report</span>
              </button>
            </div>
          </div>

          {/* 4 Insight Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Total Revenue</div>
                <div className="text-lg font-black text-slate-900">$3,055.00</div>
                <div className="text-[10px] text-emerald-600 font-semibold">4 transactions</div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Pending Payments</div>
                <div className="text-lg font-black text-slate-900">$0.00</div>
                <div className="text-[10px] text-amber-600 font-semibold">0 pending</div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Package className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Top Customer</div>
                <div className="text-xs font-bold text-slate-900 truncate">Raj Singh</div>
                <div className="text-xs text-emerald-600 font-bold">$3,055.00</div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#00c853] text-white flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Most Rented</div>
                <div className="text-xs font-bold text-slate-900 truncate">Truck TR001</div>
                <div className="text-[10px] text-purple-600 font-semibold">1 rentals</div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-fuchsia-600 text-white flex items-center justify-center">
                <Car className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Outstanding Payments section */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
              <div>
                <h5 className="font-bold text-xs text-slate-900">Outstanding Payments</h5>
                <p className="text-[10px] text-slate-500">Payments due from customers for rented vehicles.</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block">Total Outstanding</span>
                <span className="text-xs font-bold text-blue-600">$ 0.00</span>
              </div>
            </div>
            <div className="text-center py-4 text-xs text-slate-400">
              No outstanding payments
            </div>
          </div>
        </div>
      );

    case 'expenses':
      return (
        <div className="space-y-3">
          {/* Financials / Expenses matching Screenshot 132201 */}
          <div className="text-xs text-slate-500">Manage all expenses in one place</div>

          {/* 5 Expense Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] text-slate-500">Total Expenses</div>
                <div className="text-base font-black text-slate-900">$2300</div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] text-slate-500">Fuel Expenses</div>
                <div className="text-base font-black text-slate-900">$300</div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Fuel className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] text-slate-500">Maintenance</div>
                <div className="text-base font-black text-slate-900">$1650</div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] text-slate-500">Tolls & Rego</div>
                <div className="text-base font-black text-slate-900">$0</div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                <AlertCircle className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-[10px] text-slate-500">Other & Cleaning</div>
                <div className="text-base font-black text-slate-900">$50</div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <MoreHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Expense Tabs & Controls */}
          <div className="bg-white rounded-xl border border-slate-200 p-2.5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 overflow-x-auto">
                <span className="text-blue-600 border-b-2 border-blue-600 pb-1 font-bold">
                  All Expenses <span className="bg-blue-100 text-blue-700 px-1.5 rounded-full text-[10px]">11</span>
                </span>
                <span>Fuel (2)</span>
                <span>Maintenance (7)</span>
                <span>Tolls (0)</span>
                <span>Insurance (1)</span>
                <span>Other (1)</span>
              </div>
              <button className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1">
                <Plus className="w-3 h-3" />
                <span>Add Expense</span>
              </button>
            </div>
            <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Filter: dd-mm-yyyy | All Categories | All Vehicles</span>
              <span className="text-blue-600 font-semibold cursor-pointer">Clear</span>
            </div>
          </div>
        </div>
      );

    case 'drivers':
      return (
        <div className="space-y-3">
          {/* Driver Management matching Screenshot 132213 */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-600 font-bold">Driver Compliance & Risk Assessment</div>
            <button className="bg-[#3eb67a] hover:bg-[#349e69] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
              <Plus className="w-3.5 h-3.5" />
              <span>Report Incident</span>
            </button>
          </div>

          {/* 6 Driver Risk & Financial Impact Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col justify-between h-20">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-slate-400">ⓘ</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-600 font-medium">Flagged Drivers</div>
                <div className="text-lg font-black text-slate-900">0</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col justify-between h-20">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Smile className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-slate-400">ⓘ</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-600 font-medium">Financial Impact</div>
                <div className="text-lg font-black text-slate-900">$0</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col justify-between h-20">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-slate-400">ⓘ</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-600 font-medium">High Risk Drivers</div>
                <div className="text-lg font-black text-slate-900">0</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col justify-between h-20">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                  <UserX className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-slate-400">ⓘ</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-600 font-medium">Suspended Drivers</div>
                <div className="text-lg font-black text-slate-900">0</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col justify-between h-20">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-slate-400">ⓘ</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-600 font-medium">Total Incidents</div>
                <div className="text-lg font-black text-slate-900">0</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col justify-between h-20">
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-slate-400">ⓘ</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-600 font-medium">Financial Loss</div>
                <div className="text-lg font-black text-slate-900">$0</div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

