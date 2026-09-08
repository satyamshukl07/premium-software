import React from 'react';
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
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function ChmProductPage() {
  const chmPortalUrl = 'https://chmportal.carhiremanager.com.au/';

  const chmFeatures = [
    {
      title: 'Dashboard',
      slug: 'dashboard',
      desc: 'Real-time overview of fleet operations, active on-hires, vehicles due back today, revenue figures, and pending action items.',
      icon: <Home className="w-6 h-6 text-blue-600" />,
      tag: 'Operations Hub',
    },
    {
      title: 'Fleet Status',
      slug: 'fleet-status',
      desc: 'Live visibility across every car in your fleet: depot location, current on-hire status, fuel levels, odometer, and vehicle health.',
      icon: <Car className="w-6 h-6 text-blue-600" />,
      tag: 'Live Tracking',
    },
    {
      title: 'Bookings',
      slug: 'bookings',
      desc: 'Complete rental reservation engine. Process departures, instant customer check-in/out, rate calculations, and contract generation.',
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
      tag: 'Dispatch Engine',
    },
    {
      title: 'Recurring Booking',
      slug: 'recurring-booking',
      desc: 'Automate long-term corporate leases, weekly rideshare hires, and monthly recurring rental contracts with automated invoicing.',
      icon: <Repeat className="w-6 h-6 text-blue-600" />,
      tag: 'Subscriptions',
    },
    {
      title: 'Calendar',
      slug: 'calendar',
      desc: 'Visual timeline and interactive Gantt schedule for all vehicles, depot pickups, scheduled maintenance windows, and return dates.',
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      tag: 'Schedule Matrix',
    },
    {
      title: 'Customers',
      slug: 'customers',
      desc: 'Comprehensive CRM for car rental: customer contact records, corporate billing accounts, rental history, and driver verification documents.',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      tag: 'Customer CRM',
    },
    {
      title: 'Financials',
      slug: 'financials',
      desc: 'Track rental revenue, merchant payouts, bond pre-authorisations, fuel shortfall charges, vehicle expenses, and P&L statements.',
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      tag: 'Revenue & Billing',
    },
    {
      title: 'Driver Management',
      slug: 'driver-management',
      desc: 'Digital Australian driver licence OCR scanning, KYC verification, electronic rental contract sign-offs, and compliance auditing.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      tag: 'KYC & Safety',
    },
    {
      title: 'Toll Management',
      slug: 'toll-management',
      desc: 'Direct integration with Linkt and EastLink toll roads. Automatically match gantry trips to customer bookings and bill charges with zero manual work.',
      icon: <Navigation className="w-6 h-6 text-blue-600" />,
      tag: 'Linkt Integration',
    },
    {
      title: 'Maintenance',
      slug: 'maintenance',
      desc: 'Preventive service schedules, roadworthy Pink Slip certifications, registration renewal alerts, and direct tyre/brake service history.',
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      tag: 'Fleet Servicing',
    },
    {
      title: 'Analytics',
      slug: 'analytics',
      desc: 'Powerful reporting on vehicle utilisation rates, revenue per available unit, toll recovery totals, and maintenance expenditure.',
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      tag: 'Fleet Insights',
    },
  ];

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

      {/* Feature Grid Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600 block mb-2">
              Comprehensive Modular System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built to manage every phase of car hire operations
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Explore the core capabilities that empower car rental operators, fleet managers, and dispatchers alike. Click any module to open directly in the CHM Portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chmFeatures.map((feat) => (
              <a
                key={feat.slug}
                href={chmPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      {feat.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600">
                  <span>Open in CHM Portal</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CHM Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600 block mb-2">
                Enterprise Rental Reliability
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed for rental dispatchers, trusted by fleet owners & operators
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Traditional car hire software is often fragmented, slow, and leaves thousands of dollars in unpaid toll notices and unbilled fuel shortages behind. CHM was architected in Australia to unify front-counter dispatch, live fleet tracking, instant driver verification, and automatic Linkt toll billing into one seamless platform.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  '100% cloud-based operations built specifically for Australian rental operators and depots',
                  'Automated Linkt & EastLink toll notice matching with automatic billing to customer cards',
                  'Instant digital driver licence OCR scanning, KYC verification & pre-authorised bond holds',
                  'Direct fleet maintenance sync, roadworthy Pink Slip alerts & scheduled servicing logs',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <a
                  href={chmPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Launch CHM Portal Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
                >
                  Contact Fleet Sales
                </Link>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-96">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Australian car hire fleet and vehicle depot"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-blue-400 block mb-1">
                    CHM CLOUD // FLEET DISPATCH
                  </span>
                  <h4 className="text-lg font-bold">Trusted by rental operators across Sydney, Melbourne & Brisbane</h4>
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
