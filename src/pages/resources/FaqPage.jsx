import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2, ArrowRight, Search, Sparkles } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'WRMS Pro',
      question: 'Can WRMS Pro handle offline prestarts and work orders in remote locations?',
      answer:
        'Yes. WRMS Pro features robust offline-first tablet synchronization. Technicians can complete prestart inspections, log meter readings, attach defect photos, and sign off work orders with zero internet connection in pits or remote workshops. When their tablet returns to Wi-Fi or 4G range, all data synchronizes seamlessly with the central database.',
    },
    {
      category: 'WRMS Pro',
      question: 'How long does a typical WRMS Pro workshop implementation and data migration take?',
      answer:
        'Standard cloud deployments take between 2 to 4 weeks depending on the complexity of your bay schedules and existing vehicle data formatting. Our data migration specialists provide turnkey Excel templates to import equipment trees, spare parts registries, and servicing cadences effortlessly.',
    },
    {
      category: 'CHM',
      question: 'How does Car Hire Manager (CHM) streamline workshop job cards and parts allocations?',
      answer:
        'CHM connects vehicle fleet bookings directly to workshop service bays. When a vehicle reaches its scheduled service mileage or an inspection fault is flagged, CHM automatically generates a digital job card, reserves the necessary filters, fluids, and parts from internal stores, and assigns bay capacity on an interactive Gantt chart.',
    },
    {
      category: 'CHM',
      question: 'Does CHM integrate with toll operators and state traffic fine databases?',
      answer:
        'Yes. CHM features automated toll reconciliation for major Australian networks (Linkt, EastLink) and state road authorities, matching toll timestamps directly to customer rental contracts for automatic reimbursement processing.',
    },
    {
      category: 'HireCar Marketplace',
      question: 'How does HireCar Marketplace differ from overseas OTA car rental websites?',
      answer:
        'Traditional aggregators charge independent rental operators between 20% and 28% in broker fees. HireCar Marketplace operates on a fair, transparent marketplace model that preserves operator branding, delivers live calendar telematics integration, and ensures renters deal directly with local Australian operators.',
    },
    {
      category: 'Australia Fleet Tracking',
      question: 'What happens if a vehicle travels outside cellular 4G/5G mobile coverage in the outback?',
      answer:
        'Our hardware units feature high-capacity onboard flash memory that stores up to 30,000 GPS coordinates, engine CAN bus readings, and driver events during connectivity blackouts. We also offer hybrid satellite-cellular dual-mode hardware for mission-critical mining and long-haul transport corridors.',
    },
    {
      category: 'Platform & Security',
      question: 'Where is customer data hosted and what security standards are adhered to?',
      answer:
        'All customer data is hosted strictly within tier-3 Australian data centers (Sydney and Melbourne) with 256-bit AES encryption at rest and TLS 1.3 in transit. We maintain compliance with ISO 27001 and ISO 55000 asset management standards.',
    },
  ];

  const categories = [
    'All',
    'WRMS Pro',
    'CHM',
    'HireCar Marketplace',
    'Australia Fleet Tracking',
    'Platform & Security',
  ];

  const filteredFaqs = faqs.filter((f) => {
    const matchesTab = activeTab === 'All' || f.category === activeTab;
    const matchesSearch =
      !searchQuery ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80">
            COMMON INQUIRIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 mt-4 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
            Find answers to common questions about our four unified automotive platforms, pricing models, installation, and data security.
          </p>

          <div className="relative max-w-lg mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white text-slate-900 placeholder-slate-400 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs text-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200/80 sticky top-16 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-700 hover:bg-sky-50 hover:text-blue-700 border border-slate-200/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
              <p className="text-slate-500 text-sm font-medium">No matching questions found.</p>
              <button
                onClick={() => {
                  setActiveTab('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-blue-200 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                        {faq.category}
                      </span>
                      <span className="text-slate-900 font-extrabold">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      <CallToActionBanner
        title="Have a question that isn't answered here?"
        subtitle="Speak with our technical consultants directly or book a live software demonstration."
      />
    </div>
  );
}
