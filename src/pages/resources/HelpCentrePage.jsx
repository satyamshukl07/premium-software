import React, { useState } from 'react';
import { Search, HelpCircle, LifeBuoy, FileText, PhoneCall, Mail, MessageSquare, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function HelpCentrePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: 'Getting Started & Activation',
      desc: 'First-time login, company account setup, user invitations, and basic platform navigation.',
      articles: [
        'How to log into the Techtonika User Portal',
        'Inviting technicians and setting role-based permissions',
        'Connecting mobile devices and tablet prestarts',
      ],
    },
    {
      title: 'Work Orders & Job Cards',
      desc: 'Creating, assigning, scheduling, and closing work orders and mechanical repair cards.',
      articles: [
        'How to dispatch a work order in MEX CMMS',
        'Creating digital job cards in CHM workshop',
        'Attaching defect photos and technical schematics',
      ],
    },
    {
      title: 'Telematics & GPS Tracking',
      desc: 'Hardware OBD-II installation, live map troubleshooting, geofencing, and driver behavior scoring.',
      articles: [
        'Troubleshooting OBD-II / CAN bus satellite signal loss',
        'Setting up speed alerts and outback geofence perimeters',
        'Exporting NHVR driver fatigue and trip logs',
      ],
    },
    {
      title: 'Rental Desks & Marketplace',
      desc: 'Listing vehicles on HireCar Marketplace, setting bond amounts, and handling digital agreements.',
      articles: [
        'How to list and verify a rental vehicle',
        'Pre-authorizing and releasing customer security bonds',
        'Automatic toll reconciliation setup',
      ],
    },
    {
      title: 'Billing, Invoices & Licenses',
      desc: 'Subscription management, adding user seats, updating company payment methods, and invoices.',
      articles: [
        'How to add additional user licenses',
        'Downloading official tax invoices and statements',
        'Upgrading from Advanced to Professional or Enterprise',
      ],
    },
    {
      title: 'Integrations & API Support',
      desc: 'Connecting ERPs, Xero, MYOB, SAP, fuel cards, and utilizing RESTful webhooks.',
      articles: [
        'Generating API keys and configuring webhooks',
        'Synchronizing inventory with accounting ERPs',
        'Connecting automated fuel card data feeds',
      ],
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Support & Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            How can we assist you today?
          </h1>
          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search knowledge base articles, error codes, or user manuals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 text-white placeholder-slate-400 border border-white/20 focus:outline-hidden focus:ring-2 focus:ring-sky-400 backdrop-blur-md text-sm"
            />
          </div>
        </div>
      </section>

      {/* Support Direct Channels */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
              <PhoneCall className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-xs text-slate-500 block">General Office Contact</span>
                <span className="text-sm font-bold text-slate-900">+61 7 3392 4777</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-red-100 shadow-xs">
              <PhoneCall className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <span className="text-xs text-slate-500 block font-medium">Urgent Critical Support (24/7)</span>
                <span className="text-sm font-bold text-red-600">+61 3 6361 2115</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-xs text-slate-500 block">Email Support Desk</span>
                <span className="text-sm font-bold text-slate-900">sales@techtonika.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Categories */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Documentation Categories</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Browse Help Topics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-200">
                    {cat.articles.map((art) => (
                      <li key={art} className="text-xs text-blue-600 hover:text-blue-700 hover:underline cursor-pointer flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{art}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Can't find what you're looking for?"
        subtitle="Submit a technical support ticket or speak directly with our Australian based engineering team."
      />
    </div>
  );
}
