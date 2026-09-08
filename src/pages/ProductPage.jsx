import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Package,
  Smartphone,
  Headphones,
  Cpu,
  Layers,
  Wrench,
  Car,
  Flame,
  Radio,
  Navigation,
  Shield,
  Clock,
  CreditCard,
  Building2,
  Sparkles,
  Camera,
} from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import { navigationData } from '../data/contentData.js';

export default function ProductPage() {
  const ecosystemProducts = [
    {
      id: 'mex',
      name: 'MEX CMMS',
      subtitle: 'Maintenance Management Software',
      badge: 'Core Enterprise CMMS',
      badgeStyle: 'bg-red-50 text-red-600 border-red-200',
      accentColor: 'red',
      path: '/products/mex',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description:
        'Australia’s premier Computerised Maintenance Management System for complete asset lifecycle management, work order scheduling, inventory control, and statutory compliance.',
      features: [
        'Asset register & hierarchy management',
        'Automated preventive maintenance schedules',
        'Mobile technician apps with offline mode',
        'Spares inventory & purchase order control',
      ],
      primaryCta: 'Explore MEX CMMS',
      stats: '12,000+ Active Facilities',
    },
    {
      id: 'chm',
      name: 'CHM — Smart Car Hire Management',
      subtitle: 'Car Rental Operations SaaS',
      badge: 'Rental SaaS Console',
      badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200',
      accentColor: 'blue',
      path: '/products/chm',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      description:
        'All-in-one vehicle hire operations platform. Manage real-time fleet availability, recurring corporate bookings, digital licence OCR verification, and automated Linkt toll notice recovery.',
      features: [
        'Live fleet status & depot utilisation',
        'Automated toll notice billing (Linkt & EastLink)',
        'Pre-auth deposit hold & damage photo check-in',
        'Direct maintenance sync into MEX CMMS',
      ],
      primaryCta: 'Launch CHM Console',
      stats: '100% Toll Recovery',
    },
    {
      id: 'hirecar',
      name: 'HireCar Marketplace',
      subtitle: 'Australia Car Rental Marketplace',
      badge: 'Verified Marketplace',
      badgeStyle: 'bg-orange-50 text-[#ea580c] border-orange-200',
      accentColor: 'orange',
      path: '/products/hirecar',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      description:
        'Australia’s premier independent car rental exchange. Compare compact cars, 4WD utes, family SUVs, and people movers across Sydney, Melbourne, Brisbane, and Perth with zero surprise counter charges.',
      features: [
        '5,000+ verified Australian rental vehicles',
        'Direct airport counter & shuttle terminal pickup',
        'Free cancellation up to 48 hours prior',
        'Vendor fleet portal with 8% commission',
      ],
      primaryCta: 'Search Vehicles',
      stats: '5,000+ Vehicles Listed',
    },
    {
      id: 'tracking',
      name: 'Australia Fleet Tracking',
      subtitle: '4G GPS Telematics & Video',
      badge: 'IoT & Telematics',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      accentColor: 'emerald',
      path: '/products/fleet-tracking',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      description:
        'Next-generation 4G LTE-M vehicle GPS tracking and AI dual-facing dash cams. Live 5-second updates across Telstra networks, ATO-compliant digital logbooks, and crash impact alerts.',
      features: [
        '5-second live GPS refresh & route replay',
        'AI dual dash cams with drowsiness detection',
        'Cut idle time & fuel waste by up to 25%',
        'Automated FBT logbooks & ATO tax rebates',
      ],
      primaryCta: 'Explore Fleet Tracking',
      stats: '48,500+ Active Trackers',
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Product Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEX Unified Connected Suite</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-4 mb-6">
            Four Powerful Platforms.{' '}
            <span className="text-red-500 block sm:inline">One Connected Ecosystem.</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From industrial plant maintenance to car rental reservations, automated toll recovery, and real-time 4G GPS fleet telematics, MEX powers mission-critical operations across Australia.
          </p>
        </div>
      </section>

      {/* 4 Main Ecosystem Products Bento Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Product Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Explore Our Four Dedicated Solutions
            </h2>
            <p className="text-slate-600 text-sm">
              Tailored software and IoT hardware engineered to eliminate downtime, automate billing, and provide total visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecosystemProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-60 bg-slate-900 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border bg-white/95 backdrop-blur-xs ${prod.badgeStyle}`}>
                        {prod.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-white">{prod.name}</h3>
                        <span className="text-xs font-semibold text-slate-300">{prod.subtitle}</span>
                      </div>
                      <span className="text-xs font-mono font-bold bg-white/10 text-white px-2.5 py-1 rounded-lg border border-white/20 backdrop-blur-xs">
                        {prod.stats}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Core Capabilities:
                      </span>
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="p-8 pt-0">
                  <Link
                    to={prod.path}
                    className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>{prod.primaryCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid: MEX CMMS Modules */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Deep Engineering
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">
              MEX CMMS Core Functional Modules
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Over 30 years of maintenance engineering experience packaged into modular components.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationData.products.features.map((feat) => (
              <Link
                key={feat.slug}
                to={feat.path}
                className="bg-slate-50/60 p-6 rounded-2xl border border-slate-200 hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Package className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {feat.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-red-600">
                  <span>View module workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
