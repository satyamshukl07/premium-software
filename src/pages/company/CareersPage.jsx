import React, { useState } from 'react';
import { Briefcase, Heart, Rocket, ShieldCheck, CheckCircle2, ArrowRight, MapPin, Clock, DollarSign, Send } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');

  const openRoles = [
    {
      id: 'eng-1',
      title: 'Senior Full Stack Engineer (Node.js & React)',
      dept: 'Engineering',
      location: 'Brisbane, QLD / Hybrid',
      type: 'Full-time',
      salary: '$140k – $165k + Super',
      desc: 'Architect high-throughput telematics ingestion pipelines and responsive UI modules for our four flagship automotive platforms.',
      requirements: ['5+ years modern TypeScript, React, and Node.js', 'Experience with IoT streaming or time-series telematics', 'Proven background in high-availability enterprise SaaS'],
    },
    {
      id: 'eng-2',
      title: 'IoT & Telematics Systems Engineer',
      dept: 'Australia Fleet Tracking',
      location: 'Brisbane, QLD / Onsite Testing',
      type: 'Full-time',
      salary: '$120k – $145k + Super',
      desc: 'Work directly with 4G/5G OBD-II telematics hardware, CAN bus message decoders, and remote firmware OTA updates.',
      requirements: ['Firmware and CAN bus protocol understanding (J1939 / OBD-II)', 'Experience bench testing telematics devices', 'Strong Python or Go background'],
    },
    {
      id: 'cs-1',
      title: 'Senior CMMS Implementation Consultant',
      dept: 'Customer Success',
      location: 'Melbourne or Sydney / Remote',
      type: 'Full-time',
      salary: '$110k – $135k + Super',
      desc: 'Partner with enterprise transport, mining, and manufacturing clients to migrate legacy asset records into MEX CMMS and train shift leaders.',
      requirements: ['3+ years in CMMS or ERP software implementation', 'Strong grasp of preventive maintenance and asset hierarchies', 'Exceptional executive presentation and coaching skills'],
    },
    {
      id: 'prod-1',
      title: 'Product Designer (Design Systems & B2B UX)',
      dept: 'Product',
      location: 'Brisbane, QLD / Hybrid',
      type: 'Full-time',
      salary: '$115k – $135k + Super',
      desc: 'Lead the unified design system spanning desktop operations desks, tablet workshop kiosks, and mobile field prestart checklists.',
      requirements: ['Portfolio showing complex data-dense SaaS workflows', 'Figma mastery with tokens and component variants', 'Empathy for field technicians in industrial environments'],
    },
    {
      id: 'sales-1',
      title: 'Enterprise Account Executive — Fleet Solutions',
      dept: 'Sales & Growth',
      location: 'Brisbane or Sydney',
      type: 'Full-time',
      salary: '$130k base + Uncapped OTE',
      desc: 'Drive adoption of CHM, HireCar Marketplace, and Australia Fleet Tracking across national rental operators, logistics providers, and corporate fleets.',
      requirements: ['Track record exceeding quota in B2B automotive/logistics SaaS', 'Deep network within Australian transport or fleet management', 'Consultative discovery and value-based selling expertise'],
    },
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setSelectedJob(null);
      setApplied(false);
      setApplicantName('');
    }, 3000);
  };

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Join Our Team • We're Hiring
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Build the Future of Connected Automotive Tech
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Join a passionate Australian team transforming maintenance, workshops, rental marketplaces, and real-time fleet telematics across the nation.
          </p>
        </div>
      </section>

      {/* Perks & Culture */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Real Industrial Impact</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your code won't just sit in a silo. It will power 4,000+ active sites, keep critical hospital generators spinning, and optimize delivery fleets across Australia.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Wellbeing & Flexibility</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy flexible hybrid work schedules, generous parental leave, funded mental health programs, and genuine work-life balance that respects your time.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Learning & Development</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every team member receives an annual $3,500 continuous learning stipend for technical certifications, conferences, books, and courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Open Opportunities</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Explore Current Positions</h2>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
              {openRoles.length} Roles Active
            </span>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {role.dept}
                    </span>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {role.location}
                    </span>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {role.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                  <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">{role.desc}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden lg:block text-right">
                    <span className="text-xs text-slate-400 block font-medium">Remuneration</span>
                    <span className="text-sm font-bold text-slate-800">{role.salary}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(role)}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200">
            {applied ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
                <p className="text-sm text-slate-600">
                  Thank you for applying, {applicantName}. Our talent acquisition team will review your credentials for the{' '}
                  <span className="font-bold text-slate-900">{selectedJob.title}</span> role.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">{selectedJob.dept}</span>
                    <h3 className="text-lg font-bold text-slate-900">{selectedJob.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleApply} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Jordan Miller"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="j.miller@example.com"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">LinkedIn Profile or Portfolio URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Brief Introduction / Note</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us what excites you about this role and our automotive platforms..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" /> Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <CallToActionBanner
        title="Don't see your specific role listed?"
        subtitle="Send your CV and a brief introduction to careers@techtonika.com — we're always looking for outstanding automotive engineering talent."
      />
    </div>
  );
}
