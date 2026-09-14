import React, { useState } from 'react';
import {
  Search,
  HelpCircle,
  LifeBuoy,
  FileText,
  PhoneCall,
  Mail,
  MessageSquare,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function HelpCentrePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const helpCategories = [
    {
      title: 'Getting Started & Activation',
      desc: 'First-time login, company account setup, user invitations, and basic platform navigation.',
      articles: [
        {
          id: 'art-1',
          title: 'How to log into the Techtonika User Portal',
          body: 'Navigate to the User Portal from the top navigation bar. Enter your company email and password. Multi-factor authentication (MFA) can be authenticated via SMS or your authenticator app.',
        },
        {
          id: 'art-2',
          title: 'Inviting technicians and setting role-based permissions',
          body: 'Administrators can invite staff members under Settings > Team Management. Choose from predefined roles including Workshop Technician, Service Advisor, Compliance Auditor, or System Admin.',
        },
        {
          id: 'art-3',
          title: 'Connecting mobile devices and tablet prestarts',
          body: 'Install the native Techtonika mobile app from the App Store or Google Play. Scan your company activation QR code to link the tablet to your specific workshop bay.',
        },
      ],
    },
    {
      title: 'Work Orders & Job Cards (WRMS Pro)',
      desc: 'Creating, assigning, scheduling, and closing work orders and mechanical repair cards.',
      articles: [
        {
          id: 'art-4',
          title: 'How to dispatch a work order in WRMS Pro',
          body: 'Open the Bay Gantt Scheduler. Drag unassigned repair requests directly onto available technician shifts. Automated SMS notifications alert assigned staff.',
        },
        {
          id: 'art-5',
          title: 'Creating digital job cards in CHM workshop',
          body: 'Select the vehicle registration number, choose standard service code or enter custom fault descriptions, and assign estimated labor hours.',
        },
        {
          id: 'art-6',
          title: 'Attaching defect photos and technical schematics',
          body: 'On mobile tablets, tap the camera icon inside any job card task item to capture and annotate photos of worn parts or leak points.',
        },
      ],
    },
    {
      title: 'Telematics & GPS Tracking (Australia Fleet Tracking)',
      desc: 'Hardware OBD-II installation, live map troubleshooting, geofencing, and driver behavior scoring.',
      articles: [
        {
          id: 'art-7',
          title: 'Troubleshooting OBD-II / CAN bus satellite signal loss',
          body: 'Ensure the external patch antenna has an unobstructed sky view. If working in underground tunnels, offline memory logs will cache readings and sync upon resurfacing.',
        },
        {
          id: 'art-8',
          title: 'Setting up speed alerts and outback geofence perimeters',
          body: 'Access Geofence Manager, click Draw Polygon, define your boundary, and set trigger conditions including speed caps and after-hours curfew alerts.',
        },
        {
          id: 'art-9',
          title: 'Exporting NHVR driver fatigue and trip logs',
          body: 'Select Fleet Reports > NHVR Compliance, choose your date interval, and export signed PDF/CSV reports suitable for statutory regulatory audits.',
        },
      ],
    },
    {
      title: 'Rental Desks & Marketplace (HireCar Marketplace)',
      desc: 'Listing vehicles on HireCar Marketplace, setting bond amounts, and handling digital agreements.',
      articles: [
        {
          id: 'art-10',
          title: 'How to list and verify a rental vehicle',
          body: 'Add your vehicle VIN, upload photos, specify registration details, and connect your live telematics tracker to verify availability.',
        },
        {
          id: 'art-11',
          title: 'Pre-authorizing and releasing customer security bonds',
          body: 'Security bond authorizations occur automatically via Stripe 24 hours prior to vehicle pickup and release within 48 hours of vehicle return.',
        },
        {
          id: 'art-12',
          title: 'Automatic toll reconciliation setup',
          body: 'Connect your Linkt or EastLink commercial tag account under Settings > Tolls to automatically pass road toll expenses directly to customer booking invoices.',
        },
      ],
    },
    {
      title: 'Billing, Invoices & Licenses',
      desc: 'Subscription management, adding user seats, updating company payment methods, and invoices.',
      articles: [
        {
          id: 'art-13',
          title: 'How to add additional user licenses',
          body: 'Administrators can add seats instantly from Account > Subscription. Prorated charges will apply to your billing period.',
        },
        {
          id: 'art-14',
          title: 'Downloading official tax invoices and statements',
          body: 'Access Billing History to download Australian GST-compliant tax invoices with ABN and itemized breakdowns.',
        },
        {
          id: 'art-15',
          title: 'Upgrading from Advanced to Professional or Enterprise',
          body: 'Upgrade anytime to unlock unlimited repair bays, satellite dual-SIM failover, and dedicated API webhook feeds.',
        },
      ],
    },
    {
      title: 'Integrations & API Support',
      desc: 'Connecting ERPs, Xero, MYOB, SAP, fuel cards, and utilizing RESTful webhooks.',
      articles: [
        {
          id: 'art-16',
          title: 'Generating API keys and configuring webhooks',
          body: 'Generate secure Bearer tokens in Settings > Developer. Configure webhook endpoints to receive instant JSON payloads for job card status updates.',
        },
        {
          id: 'art-17',
          title: 'Synchronizing inventory with accounting ERPs',
          body: 'Connect Xero, MYOB, or SAP to synchronize workshop parts inventory deductions and supplier purchase orders automatically.',
        },
        {
          id: 'art-18',
          title: 'Connecting automated fuel card data feeds',
          body: 'Import BP Plus, AmpolCard, or Shell Card data files to calculate accurate kilometers-per-liter metrics against CAN bus telemetry.',
        },
      ],
    },
  ];

  // Filter categories and articles
  const filteredCategories = helpCategories
    .map((cat) => ({
      ...cat,
      articles: cat.articles.filter(
        (art) =>
          !searchQuery ||
          art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.articles.length > 0);

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80">
            SUPPORT & KNOWLEDGE BASE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 mt-4 mb-4">
            How Can We Assist You Today?
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
            Search our comprehensive knowledge base for step-by-step guides, troubleshooting instructions, and technical documentation across all four Techtonika products.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search knowledge base articles, error codes, setup steps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-400 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-xs text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold bg-slate-100 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Support Direct Channels */}
      <section className="py-6 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block">General Office Support</span>
                <span className="text-sm font-bold text-slate-900">+61 7 3392 4777</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-medium">Critical Emergency Hotline (24/7)</span>
                <span className="text-sm font-bold text-rose-600">+61 3 6361 2115</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Email Support Desk</span>
                <span className="text-sm font-bold text-slate-900">sales@techtonika.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Categories */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block">
                KNOWLEDGE BASE
              </span>
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                Browse by Category
              </h2>
            </div>
            {searchQuery && (
              <span className="text-xs text-slate-500">
                Showing matching results for "{searchQuery}"
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-extrabold text-slate-950">{cat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                  
                  <ul className="space-y-2 pt-3 border-t border-slate-100">
                    {cat.articles.map((art) => (
                      <li
                        key={art.id}
                        onClick={() => setSelectedArticle(art)}
                        className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer flex items-center justify-between group p-1.5 rounded-lg hover:bg-sky-50 transition-colors"
                      >
                        <span className="line-clamp-1">{art.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Help Centre Article
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-700 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-extrabold text-slate-950 leading-snug">
              {selectedArticle.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedArticle.body}
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Was this article helpful?</span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <CallToActionBanner
        title="Can't find what you're looking for?"
        subtitle="Submit a technical support ticket or speak directly with our Australian-based engineering team."
      />
    </div>
  );
}
