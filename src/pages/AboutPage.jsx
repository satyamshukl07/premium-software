import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Building2, Users, MapPin } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import AwardsGrid from '../components/AwardsGrid.jsx';

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* About Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Australian Engineering Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6 font-sans">
            30+ Years of Maintenance Software Innovation
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded in Brisbane, MEX has grown to become Australia's premier Computerised Maintenance Management System, trusted by over 4,000 businesses across the globe.
          </p>
        </div>
      </section>

      {/* Origin & Mission */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-red-600">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built by maintenance engineers, for maintenance engineers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In the early 1990s, maintenance tracking meant overflowing paper filing cabinets, lost work orders, and reactive panic when critical machinery broke down. MEX was created with a single mission: give engineers a software system that is both powerful enough for heavy industrial compliance and intuitive enough for technicians to use every single shift.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Today, MEX v16 powers everything from national railway networks and open-cut mines to schools, food packaging lines, and hospital surgical suites.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-center sm:text-left">
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">1993</span>
                  <span className="text-xs text-slate-500">Established in Brisbane</span>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">4,000+</span>
                  <span className="text-xs text-slate-500">Customer Sites</span>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-slate-900 block font-mono">100%</span>
                  <span className="text-xs text-slate-500">Australian Owned</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-96 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="MEX Engineering and Product Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-mono text-red-400 block mb-1">LOCAL SUPPORT</span>
                  <h4 className="text-lg font-bold">Based in West End, Brisbane</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards section */}
      <AwardsGrid />

      <CallToActionBanner />
    </div>
  );
}
