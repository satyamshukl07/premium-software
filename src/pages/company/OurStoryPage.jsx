import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, History, Award, Compass, Cpu, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function OurStoryPage() {
  const milestones = [
    {
      year: '1993',
      title: 'Humble Beginnings in Brisbane',
      desc: 'Founded by maintenance engineers frustrated by lost paper dockets and reactive breakdown chaos. The first version of MEX was engineered to deliver industrial-grade maintenance scheduling to Australian plants.',
    },
    {
      year: '2004',
      title: 'National Expansion & Fleet Demands',
      desc: 'Recognizing that mobile machinery, mining haulers, and delivery transport needed specialized telematics and service schedules, the core team expanded into vehicle maintenance and compliance workflows.',
    },
    {
      year: '2016',
      title: 'The Rise of Digital Mobility',
      desc: 'As cloud infrastructure matured, the vision expanded beyond static workshops. Car Hire Manager (CHM) was born to streamline automotive rental operations, vehicle turnaround, and digital booking desks.',
    },
    {
      year: '2022',
      title: 'Connected IoT & Telematics Surge',
      desc: 'Australia Fleet Tracking launched with high-precision GPS telematics, real-time CAN bus telemetry, and automated NHVR safety compliance, completing the connected loop between vehicles and maintenance shops.',
    },
    {
      year: '2026',
      title: 'Techtonika Automotive Solutions',
      desc: 'Under Techtonika by Advanced Systems, all four industry-leading platforms—MEX CMMS, CHM, HireCar Marketplace, and Australia Fleet Tracking—united into a comprehensive automotive software powerhouse.',
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Australian Engineering Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            The Journey to Connected Automotive Intelligence
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From handwritten mechanical work dockets in 1993 to high-speed satellite telematics and AI-powered fleet optimization today. Discover the driving force behind Techtonika Automotive Solutions.
          </p>
        </div>
      </section>

      {/* Origin Story Details */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">
                Founding Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built by technicians, perfected for commercial operators
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                For over three decades, our core philosophy has remained simple: software should eliminate complexity, not create it. When our engineers first stepped into dusty maintenance pits and transport depots across Queensland in 1993, operators were drowning in paper work orders, missing scheduled oil intervals, and facing punitive compliance fines.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We set out to build software that heavy industrial engineers, workshop managers, and commercial fleet owners could pick up and master on day one.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-center sm:text-left">
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">30+</span>
                  <span className="text-xs text-slate-500">Years of Heritage</span>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">4,000+</span>
                  <span className="text-xs text-slate-500">Active Fleets & Sites</span>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">100%</span>
                  <span className="text-xs text-slate-500">Australian Owned</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                alt="Techtonika Engineering Heritage"
                className="w-full h-[400px] object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-1">Our Core Commitment</span>
                  <p className="text-base font-semibold">Reliability in the field, precision in the data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-600">Evolution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Three Decades of Continuous Innovation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Explore key milestones that shaped our four unified automotive solutions.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-200">
            {milestones.map((item, idx) => (
              <div key={item.year} className={`relative flex flex-col sm:flex-row items-center gap-6 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="w-full sm:w-1/2 px-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-mono font-bold text-sm rounded-lg mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-md z-10">
                  {idx + 1}
                </div>
                <div className="hidden sm:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Ready to build your automotive operational advantage?"
        subtitle="Schedule an executive demonstration or start your 30-day sandbox trial today."
      />
    </div>
  );
}
