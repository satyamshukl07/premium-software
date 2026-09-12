import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ShieldCheck,
  Car,
  Navigation,
  ArrowRight,
  Check,
  Sparkles,
  HeartHandshake,
  Wine,
  Building2,
  Truck,
  Utensils,
  Landmark,
  Stethoscope,
  Factory,
  HardHat,
  Anchor,
  Zap,
  GraduationCap,
} from 'lucide-react';

export default function SolutionsMegaMenu({ onClose }) {
  const sidebarProducts = [
    {
      id: 'wrms-pro',
      name: 'WRMS Pro',
      subtitle: 'Workshop Repair Management',
      path: '/products/wrms-pro',
      icon: Wrench,
      accentColor: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'group-hover:border-rose-300',
    },
    {
      id: 'chm',
      name: 'CHM',
      subtitle: 'Compliance & Workshop Management',
      path: '/products/chm',
      icon: ShieldCheck,
      accentColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'group-hover:border-amber-300',
    },
    {
      id: 'hirecar',
      name: 'HireCar Marketplace',
      subtitle: 'Vehicle Rental Marketplace',
      path: '/products/hirecar-marketplace',
      icon: Car,
      accentColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'group-hover:border-pink-300',
    },
    {
      id: 'aft',
      name: 'Australia Fleet Tracking',
      subtitle: 'Real-Time Fleet Tracking',
      path: '/products/australia-fleet-tracking',
      icon: Navigation,
      accentColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'group-hover:border-emerald-300',
    },
  ];

  const productCards = [
    {
      id: 'wrms-pro',
      title: 'WRMS Pro',
      subtitle: 'Workshop Repair Management Software',
      path: '/products/wrms-pro',
      ctaText: 'Explore WRMS Pro',
      tag: 'Workshop SaaS',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      icon: Wrench,
      accentColor: 'text-rose-600',
      badgeBg: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
      btnBg: 'bg-rose-600 hover:bg-rose-700 text-white',
      borderHover: 'hover:border-rose-400/60',
      glowHover: 'group-hover:shadow-rose-100',
      description:
        'Complete workshop operating system managing work orders, repairs, diagnostics, parts inventory, scheduling, and 1-click invoicing for peak operational efficiency.',
      capabilities: [
        'Workshop Management',
        'Job Cards & Scheduling',
        'Inventory & Parts Management',
        'Invoicing & Payments',
      ],
    },
    {
      id: 'chm',
      title: 'CHM',
      subtitle: 'Compliance & Workshop Management',
      path: '/products/chm',
      ctaText: 'Explore CHM',
      tag: 'Workshop & Safety',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      icon: ShieldCheck,
      accentColor: 'text-amber-600',
      badgeBg: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      btnBg: 'bg-amber-600 hover:bg-amber-700 text-white',
      borderHover: 'hover:border-amber-400/60',
      glowHover: 'group-hover:shadow-amber-100',
      description:
        'Automate workshop compliance, paperless digital vehicle inspections, statutory safety audits, service workflows, and real-time operational control across your bays.',
      capabilities: [
        'Compliance & Reporting',
        'Service Scheduling',
        'Workshop Workflow',
        'Audit & Inspection Management',
      ],
    },
    {
      id: 'hirecar-marketplace',
      title: 'HireCar Marketplace',
      subtitle: 'Vehicle Rental Marketplace',
      path: '/products/hirecar-marketplace',
      ctaText: 'Explore HireCar',
      tag: 'Rental Platform',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      icon: Car,
      accentColor: 'text-pink-600',
      badgeBg: 'bg-pink-500/10 text-pink-700 border-pink-500/20',
      btnBg: 'bg-pink-600 hover:bg-pink-700 text-white',
      borderHover: 'hover:border-pink-400/60',
      glowHover: 'group-hover:shadow-pink-100',
      description:
        'Comprehensive car rental operations platform connecting independent operators with travelers, digital license verification, automated bookings, and fleet monetization.',
      capabilities: [
        'Vehicle Listing & Booking',
        'Payment & Billing',
        'Customer Management',
        'Operator Tools',
      ],
    },
    {
      id: 'australia-fleet-tracking',
      title: 'Australia Fleet Tracking',
      subtitle: 'Real-Time Fleet Tracking',
      path: '/products/australia-fleet-tracking',
      ctaText: 'Explore Fleet Tracking',
      tag: 'Live GPS Telematics',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
      icon: Navigation,
      accentColor: 'text-emerald-600',
      badgeBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      borderHover: 'hover:border-emerald-400/60',
      glowHover: 'group-hover:shadow-emerald-100',
      description:
        'Telstra 4G-powered real-time GPS vehicle tracking, automated geofencing alerts, AI dual-facing dashcams, driver safety scoring, and actionable fleet telematics analytics.',
      capabilities: [
        'Live GPS Tracking',
        'Geofencing & Alerts',
        'Driver Behaviour Monitoring',
        'Fleet Analytics',
      ],
    },
  ];

  const industries = [
    { name: 'Aged Care', path: '/solutions/industries/aged-care', icon: HeartHandshake },
    { name: 'Breweries & Wineries', path: '/solutions/industries/breweries-wineries', icon: Wine },
    { name: 'Facilities', path: '/solutions/industries/facilities', icon: Building2 },
    { name: 'Fleet & Logistics', path: '/solutions/industries/fleet-logistics', icon: Truck },
    { name: 'Food & Beverage', path: '/solutions/industries/food-beverage', icon: Utensils },
    { name: 'Government & Infrastructure', path: '/solutions/industries/government-infrastructure', icon: Landmark },
    { name: 'Healthcare & Biotech', path: '/solutions/industries/healthcare-biotech', icon: Stethoscope },
    { name: 'Manufacturing', path: '/solutions/industries/manufacturing', icon: Factory },
    { name: 'Mining', path: '/solutions/industries/mining', icon: HardHat },
    { name: 'Ports & Marines', path: '/solutions/industries/ports-marines', icon: Anchor },
    { name: 'Utilities', path: '/solutions/industries/utilities', icon: Zap },
    { name: 'Education', path: '/solutions/industries/education', icon: GraduationCap },
  ];

  return (
    <div
      id="dropdown-solutions"
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
        {/* Main Grid: Left Sidebar + Right Main Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-stretch">
          {/* =================================================== */}
          {/* 3. LEFT SIDEBAR */}
          {/* =================================================== */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 block mb-1.5">
                OUR SOLUTIONS
              </span>
              <h3 className="text-xl xl:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                Complete Solutions
                <br />
                for a Smarter
                <br />
                Automotive Ecosystem
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Four powerful platforms. One connected ecosystem. Built to streamline operations,
                improve efficiency, and drive growth across the automotive industry.
              </p>

              {/* Four Products Sidebar Navigation */}
              <div className="space-y-2">
                {sidebarProducts.map((prod) => {
                  const Icon = prod.icon;
                  return (
                    <Link
                      key={prod.id}
                      to={prod.path}
                      onClick={onClose}
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-150"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg ${prod.bgColor} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-xs`}
                      >
                        <Icon className={`w-4 h-4 ${prod.accentColor}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors flex items-center justify-between">
                          <span className="truncate">{prod.name}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                        <p className="text-[11px] text-slate-500 truncate leading-snug">
                          {prod.subtitle}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 8. Left Sidebar CTA */}
            <Link
              to="/solutions"
              onClick={onClose}
              className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white border border-slate-700/60 shadow-md hover:shadow-xl hover:border-rose-500/50 transition-all group flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400">
                    Connected Suite
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-rose-200 transition-colors leading-snug">
                  Integrated. Intelligent.
                  <br />
                  Built for What&apos;s Next.
                </h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-rose-600 flex items-center justify-center transition-all flex-shrink-0 ml-3 shadow-inner">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* =================================================== */}
          {/* 4. MAIN SECTION: FOUR PRODUCT SOLUTION CARDS */}
          {/* =================================================== */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              {/* Header: SOLUTIONS BY PRODUCT & 7. View all solutions */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    SOLUTIONS BY PRODUCT
                  </span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                    4 Core Platforms
                  </span>
                </div>
                <Link
                  to="/solutions"
                  onClick={onClose}
                  className="text-xs font-bold text-slate-700 hover:text-rose-600 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>View all solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Four Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-4">
                {productCards.map((card) => {
                  const CardIcon = card.icon;
                  return (
                    <div
                      key={card.id}
                      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white hover:shadow-xl ${card.glowHover} transition-all duration-200 overflow-hidden ${card.borderHover}`}
                    >
                      <div>
                        {/* 5. Product-Specific Visual Image Header */}
                        <div className="relative h-28 w-full overflow-hidden bg-slate-900">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                          <div className="absolute top-2.5 left-2.5">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-white/90 shadow-xs ${card.accentColor}`}
                            >
                              <CardIcon className="w-3 h-3" />
                              <span>{card.tag}</span>
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-4">
                          <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors flex items-center justify-between leading-tight">
                            <span>{card.title}</span>
                          </h4>
                          <p className="text-[11px] font-medium text-slate-400 mt-0.5 mb-2 leading-snug">
                            {card.subtitle}
                          </p>
                          <p className="text-[11px] text-slate-600 leading-relaxed mb-3 line-clamp-3">
                            {card.description}
                          </p>

                          {/* Capabilities Checkmark List */}
                          <div className="space-y-1.5 border-t border-slate-100 pt-2.5 mb-3">
                            {card.capabilities.map((cap, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <div className="w-3.5 h-3.5 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-2.5 h-2.5 text-slate-700" />
                                </div>
                                <span className="text-[11px] font-medium text-slate-700 truncate">
                                  {cap}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card CTA Button */}
                      <div className="p-4 pt-0">
                        <Link
                          to={card.path}
                          onClick={onClose}
                          className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all shadow-xs group-hover:shadow-md ${card.btnBg}`}
                        >
                          <span>{card.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================== */}
            {/* 6. SOLUTIONS BY INDUSTRY (HORIZONTAL NAVIGATION) */}
            {/* =================================================== */}
            <div className="border-t border-slate-100 pt-4 mt-6">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  SOLUTIONS BY INDUSTRY
                </span>
                <Link
                  to="/solutions"
                  onClick={onClose}
                  className="text-[11px] font-semibold text-slate-500 hover:text-rose-600 transition-colors"
                >
                  Browse all 12 sectors &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {industries.map((ind) => {
                  const IndIcon = ind.icon;
                  return (
                    <Link
                      key={ind.path}
                      to={ind.path}
                      onClick={onClose}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-50 hover:bg-rose-50/80 border border-slate-100 hover:border-rose-200 text-slate-700 hover:text-rose-700 transition-all duration-150 group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-rose-600 group-hover:border-rose-300 transition-colors flex-shrink-0 shadow-2xs">
                        <IndIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-semibold truncate leading-tight">
                        {ind.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
