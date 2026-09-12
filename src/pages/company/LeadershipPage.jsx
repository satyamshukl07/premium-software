import React from 'react';
import { ShieldCheck, Mail, Linkedin, Building2, Award, Users } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function LeadershipPage() {
  const leaders = [
    {
      name: 'Julian Vance',
      role: 'Chief Executive Officer & Founder',
      bio: 'Over 28 years of leadership across industrial software, automotive telematics, and enterprise asset management. Led the original architecture for MEX and guided the group through multi-product consolidation.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Alistair MacIntyre',
      role: 'Chief Technology Officer',
      bio: 'Former principal systems architect specializing in distributed IoT networks, real-time CAN bus telemetry, and predictive machine learning models for heavy transport fleets.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Sarah Chen',
      role: 'VP of Product — Automotive & Fleet Solutions',
      bio: 'Over 15 years driving UX transformation for enterprise mobility, including the Car Hire Manager (CHM) operational ecosystem and HireCar Marketplace exchange.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Marcus Sterling',
      role: 'Head of Customer Engineering & Implementation',
      bio: 'Oversees nationwide deployments, technical customer success, and bespoke API integration across Australia, New Zealand, and Southeast Asia.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Elena Rossi',
      role: 'VP of Telematics & IoT Engineering',
      bio: 'Leads the hardware and satellite telemetry engineering teams behind Australia Fleet Tracking, ensuring 99.9% uptime across remote outback corridors.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'David O’Connor',
      role: 'Director of Compliance & Regulatory Affairs',
      bio: 'National Heavy Vehicle Regulator (NHVR) advisor and mechanical compliance specialist ensuring every software module meets strict statutory transport standards.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Executive Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Guiding the Next Era of Fleet & Workshop Tech
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Meet the experienced engineers, product innovators, and operational leaders driving Techtonika Automotive Solutions forward.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold">{leader.name}</h3>
                    <p className="text-xs font-medium text-sky-300">{leader.role}</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{leader.bio}</p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5 text-blue-600">
                      <ShieldCheck className="w-4 h-4" /> Senior Executive
                    </span>
                    <span className="text-slate-400">Brisbane, QLD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Want to connect directly with our leadership team?"
        subtitle="We collaborate closely with enterprise clients, transport authorities, and technology partners."
      />
    </div>
  );
}
