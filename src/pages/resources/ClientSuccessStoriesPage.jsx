import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Building2,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  ChevronRight,
  Filter,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function ClientSuccessStoriesPage() {
  const [selectedProduct, setSelectedProduct] = useState('All');

  const clientStories = [
    {
      id: 'apex-mobility',
      product: 'HireCar Marketplace',
      productBadge: 'HireCar Marketplace',
      badgeColor: 'text-pink-600 bg-pink-50 border-pink-200',
      company: 'Apex Mobility Group',
      location: 'Sydney & Brisbane, NSW/QLD',
      title: 'How Apex Mobility Scaled Fleet Utilization to 88% with Direct Digital Bookings',
      summary:
        'By moving from traditional OTA broker channels to HireCar Marketplace, Apex eliminated 22% in third-party commissions and automated airport handover workflows with live telematics integration.',
      image:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      stats: [
        { label: 'Fleet Utilization', value: '88%', delta: '+26% YoY' },
        { label: 'Commission Savings', value: '$184K', delta: 'Annualized' },
        { label: 'Booking Time', value: '2.5 min', delta: '-70% faster' },
      ],
      quote:
        'HireCar Marketplace connected our physical rental fleet directly with vetted customers. The automated bond hold and instant driver ID verification made deskless handovers flawless.',
      author: 'Lachlan Harris',
      role: 'Operations Director, Apex Mobility',
    },
    {
      id: 'red-centre-heavy-haulage',
      product: 'Australia Fleet Tracking',
      productBadge: 'Australia Fleet Tracking',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      company: 'Outback Logistics & Heavy Haulage',
      location: 'Kalgoorlie & Pilbara, WA',
      title: 'Zero Cellular Blackouts: Real-Time Dual-Satellite Fleet Tracking in Remote Mining Corridors',
      summary:
        'Managing 94 heavy prime movers across harsh Western Australian haul routes required infallible geofencing, driver fatigue telemetry, and predictive engine fault alerts.',
      image:
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      stats: [
        { label: 'Fuel Waste Reduction', value: '18.4%', delta: 'Via idle alerts' },
        { label: 'Speed & Harsh Braking', value: '-62%', delta: 'Driver safety score' },
        { label: 'Live GPS Uptime', value: '99.98%', delta: 'Satellite failover' },
      ],
      quote:
        'Australia Fleet Tracking gives our dispatchers instant visibility even 800 kilometers beyond standard mobile towers. The automated NHVR fatigue logs saved us dozens of compliance hours.',
      author: 'Marcus Vandermeer',
      role: 'Fleet Risk & Safety Lead, Outback Logistics',
    },
    {
      id: 'metro-diesel-workshop',
      product: 'WRMS Pro',
      productBadge: 'WRMS Pro',
      badgeColor: 'text-rose-600 bg-rose-50 border-rose-200',
      company: 'Metro Commercial Diesel Services',
      location: 'Melbourne & Geelong, VIC',
      title: 'Slashing Bay Turnaround Times by 40% with Digital Technician Scheduling & Parts Staging',
      summary:
        'A multi-branch commercial truck repair facility replaced lost paper job cards with WRMS Pro tablet consoles, integrating parts inventory directly with live mechanic punch clocks.',
      image:
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      stats: [
        { label: 'Bay Turnaround', value: '-40%', delta: 'Time-to-release' },
        { label: 'Billable Hours Capture', value: '+31%', delta: 'Zero unlogged labor' },
        { label: 'Parts Inventory Accuracy', value: '99.2%', delta: 'Barcode tracking' },
      ],
      quote:
        'Before WRMS Pro, mechanics were walking back and forth to the parts counter 15 times a day. Now job cards, parts requisitions, and customer invoice authorizations all happen in seconds on screen.',
      author: 'Christian Bauer',
      role: 'Workshop General Manager, Metro Diesel',
    },
    {
      id: 'trans-coastal-bus-lines',
      product: 'CHM',
      productBadge: 'CHM',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-200',
      company: 'Pacific Coast Transit & Coaches',
      location: 'Gold Coast & Northern Rivers, QLD/NSW',
      title: '100% Audit Compliance: Automating Statutory Bus Inspections & Workshop Safety Records',
      summary:
        'Operating a fleet of 160 passenger buses requires rigorous compliance under National Heavy Vehicle Regulator (NHVR) accreditation. CHM unified digital prestarts, work orders, and audit logs.',
      image:
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
      stats: [
        { label: 'NHVR Audit Score', value: '100%', delta: 'Zero infractions' },
        { label: 'Inspection Defect Triage', value: 'Under 15m', delta: 'Driver-to-bay' },
        { label: 'Paperwork Eliminated', value: '10,000+', delta: 'Sheets/month' },
      ],
      quote:
        'CHM gives our compliance auditors instant proof of every single bolt tightened, brake test recorded, and prestart signed. It turned audit anxiety into a 10-minute automated report.',
      author: 'Deanne Thornton',
      role: 'Head of Quality & Compliance, Pacific Coast Transit',
    },
  ];

  const filteredStories =
    selectedProduct === 'All'
      ? clientStories
      : clientStories.filter((s) => s.product === selectedProduct);

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20">
            Proven Results
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Client Success Stories
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See how Australian workshops, rental operators, and commercial fleets achieve record
            uptime, audit compliance, and revenue growth with Techtonika software.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 sticky top-16 z-20 backdrop-blur-md bg-slate-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
              Filter by Product:
            </span>
            {['All', 'WRMS Pro', 'CHM', 'HireCar Marketplace', 'Australia Fleet Tracking'].map(
              (prod) => (
                <button
                  key={prod}
                  onClick={() => setSelectedProduct(prod)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedProduct === prod
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {prod}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row items-stretch"
            >
              {/* Image & Badges */}
              <div className="lg:w-2/5 relative min-h-[260px] bg-slate-900 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.company}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${story.badgeColor}`}
                  >
                    {story.productBadge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium text-slate-300 block">Client Location</span>
                  <span className="text-sm font-bold text-white">{story.location}</span>
                </div>
              </div>

              {/* Story Content & Metrics */}
              <div className="lg:w-3/5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {story.company}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {story.summary}
                  </p>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-3 gap-4 my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    {story.stats.map((st, sIdx) => (
                      <div key={sIdx}>
                        <span className="text-xl sm:text-2xl font-black text-slate-900 block">
                          {st.value}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 block">
                          {st.label}
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-600 block">
                          {st.delta}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-rose-500 pl-4 py-1 text-xs sm:text-sm italic text-slate-700">
                    "{story.quote}"
                    <footer className="mt-1 text-xs not-italic font-bold text-slate-900">
                      — {story.author}, <span className="font-normal text-slate-500">{story.role}</span>
                    </footer>
                  </blockquote>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Verified Customer Case Study</span>
                  <Link
                    to="/contact?subject=Client%20Story%20Inquiry"
                    className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 group"
                  >
                    <span>Request similar implementation plan</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
