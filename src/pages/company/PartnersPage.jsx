import React, { useState } from 'react';
import { Handshake, Cpu, Building2, ShieldCheck, CheckCircle2, ArrowRight, Send, Layers } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function PartnersPage() {
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const partnerTiers = [
    {
      title: 'Technology & Hardware Partners',
      desc: 'Telematics device makers, OBD-II/CAN bus diagnostic sensors, tire pressure monitoring hardware, and industrial rugged tablet manufacturers.',
      perks: ['Native API sandbox access', 'Pre-tested hardware certification badge', 'Joint firmware & protocol roadmaps'],
    },
    {
      title: 'Integration & ERP Alliances',
      desc: 'Accounting systems, ERP platforms (SAP, Oracle, MYOB, Xero), fuel card providers, toll operators, and insurance claim platforms.',
      perks: ['Bi-directional webhook synchronization', 'Co-marketing to 4,000+ mutual customers', 'Dedicated developer support channels'],
    },
    {
      title: 'Automotive Dealership & Rental Operators',
      desc: 'Commercial vehicle dealerships, franchise rental operators, and fleet leasing conglomerates leveraging our unified platform.',
      perks: ['Preferential volume marketplace fees', 'White-label booking widget deployment', 'Priority 24/7 telematics support SLA'],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Partner Ecosystem
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Grow With the Techtonika Automotive Network
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Collaborate with Australia's premier automotive software ecosystem. Connect your hardware, software, or fleet services with thousands of commercial operators.
          </p>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Collaboration Pathways</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Partnership Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((tier) => (
              <div key={tier.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tier.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{tier.desc}</p>
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold uppercase text-slate-400 block mb-2">Program Benefits:</span>
                    {tier.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
            {partnerSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Partnership Inquiry Received!</h3>
                <p className="text-sm text-slate-600">
                  Our strategic alliances director will review your platform and get in touch within 2 business days.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Get Started</span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Apply to Become a Partner</h2>
                  <p className="text-xs text-slate-500 mt-1">Join forces to bring high-value solutions to Australian automotive businesses.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Telematics Ltd"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Partnership Type *</label>
                      <select className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden">
                        <option>Hardware / Telematics Manufacturer</option>
                        <option>Software / ERP Integration</option>
                        <option>Dealership / Fleet Operator</option>
                        <option>Consulting & Implementation Agency</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Campbell"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@apextelematics.com.au"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Proposed Collaboration Details *</label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Briefly describe your hardware, software API, or fleet footprint..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" /> Submit Partnership Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Looking for standard API documentation?"
        subtitle="Explore our comprehensive developer documentation and RESTful endpoints across our product suite."
      />
    </div>
  );
}
