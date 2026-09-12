import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, CheckCircle2, Building2, Users, MapPin, Settings, Wrench, Car, Navigation, ArrowRight } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import AwardsGrid from '../components/AwardsGrid.jsx';

export default function AboutPage() {
  const unifiedProducts = [
    {
      name: 'MEX CMMS',
      category: 'Enterprise Asset & Plant Maintenance',
      desc: 'Over 30 years powering preventative maintenance, inventory control, and work order workflows for 4,000+ sites.',
      icon: <Settings className="w-6 h-6 text-sky-400" />,
      url: '/product/mex-cmms',
    },
    {
      name: 'CHM',
      category: 'Workshop & Rental Desk Management',
      desc: 'End-to-end commercial vehicle workshop management, digital job cards, parts control, and statutory compliance.',
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      url: '/products/chm',
    },
    {
      name: 'HireCar Marketplace',
      category: 'Digital Vehicle Rental Network',
      desc: 'Empowering independent Australian car rental operators with direct traveler bookings, dynamic pricing, and low fees.',
      icon: <Car className="w-6 h-6 text-pink-400" />,
      url: '/products/hirecar',
    },
    {
      name: 'Australia Fleet Tracking',
      category: 'Real-Time Telematics & IoT',
      desc: 'Sub-second GPS positioning, CAN bus vehicle telemetry, remote diagnostics, and automated NHVR safety compliance.',
      icon: <Navigation className="w-6 h-6 text-emerald-400" />,
      url: '/products/fleet-tracking',
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* About Hero */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            About Techtonika
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6 font-sans">
            Intelligent Automotive Software for a Connected Future
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Techtonika Automotive Solutions, by Advanced Systems, brings together four industry-leading platforms to provide an end-to-end operational software ecosystem for vehicles, machinery, and mobility operators.
          </p>
        </div>
      </section>

      {/* Origin & Mission */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Eliminating silos between the road, the workshop, and the back office
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                For over three decades, our engineering team has developed software that industrial teams and automotive professionals rely on every single day. We recognized that commercial fleet operators were struggling with disconnected systems: GPS trackers in one portal, workshop job cards on clipboards, rental desk bookings in spreadsheets, and preventive maintenance in another silo.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Techtonika was built to unify the entire vehicle lifecycle—from satellite tracking on the highway to bay scheduling in the workshop, asset maintenance, and marketplace monetization.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-center sm:text-left">
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">500+</span>
                  <span className="text-xs text-slate-500">Happy Clients</span>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">4,000+</span>
                  <span className="text-xs text-slate-500">Vehicles Managed</span>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">99.9%</span>
                  <span className="text-xs text-slate-500">Uptime SLA</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-96 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Techtonika Automotive Solutions Engineering Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-mono text-sky-400 block mb-1">LOCAL HEADQUARTERS</span>
                  <h4 className="text-lg font-bold">Fortitude Valley, Brisbane QLD</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Unified Platforms */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">The Ecosystem</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Four Industry-Leading Platforms</h2>
            <p className="text-slate-600 text-sm mt-3">Integrated seamlessly to optimize your entire automotive operation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unifiedProducts.map((prod) => (
              <div
                key={prod.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-2">
                    {prod.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                    {prod.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{prod.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{prod.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link
                    to={prod.url}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    Explore Platform <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards section */}
      <AwardsGrid />

      <CallToActionBanner
        title="Ready to transform your automotive operations?"
        subtitle="Speak with an enterprise specialist or start your 30-day free trial today."
      />
    </div>
  );
}
