import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('All');

  const faqs = [
    {
      category: 'MEX CMMS',
      question: 'Can MEX CMMS handle offline prestarts and work orders in remote mining pits?',
      answer: 'Yes. The MEX Mobile app features robust offline-first synchronization. Technicians can complete prestart inspections, log meter readings, attach defect photos, and sign off work orders with no internet connection. When their tablet returns to Wi-Fi or 4G range, all data synchronizes seamlessly with the central database.',
    },
    {
      category: 'MEX CMMS',
      question: 'How long does a typical MEX CMMS implementation and data migration take?',
      answer: 'Standard cloud deployments take between 2 to 4 weeks depending on the complexity of your asset hierarchy and existing data formatting. Our data migration specialists provide turnkey Excel templates to import equipment trees, spare parts registries, and PM cadences effortlessly.',
    },
    {
      category: 'CHM',
      question: 'How does Car Hire Manager (CHM) streamline workshop job cards and parts allocations?',
      answer: 'CHM connects vehicle fleet bookings directly to workshop service bays. When a vehicle reaches its scheduled service mileage or an inspection fault is flagged, CHM automatically generates a digital job card, reserves the necessary filters, fluids, and parts from internal stores, and assigns bay capacity on an interactive Gantt chart.',
    },
    {
      category: 'CHM',
      question: 'Does CHM integrate with toll operators and state traffic fine databases?',
      answer: 'Yes. CHM features automated toll reconciliation for major Australian networks (Linkt, EastLink) and state road authorities, matching toll timestamps directly to customer rental contracts for automatic reimbursement processing.',
    },
    {
      category: 'HireCar Marketplace',
      question: 'How does HireCar Marketplace differ from overseas OTA car rental websites?',
      answer: 'Traditional aggregators charge independent rental operators between 20% and 28% in broker fees. HireCar Marketplace operates on a fair, transparent marketplace model that preserves operator branding, delivers live calendar telematics integration, and ensures renters deal directly with local Australian operators.',
    },
    {
      category: 'Australia Fleet Tracking',
      question: 'What happens if a vehicle travels outside cellular 4G/5G mobile coverage in the outback?',
      answer: 'Our hardware units feature high-capacity onboard flash memory that stores up to 30,000 GPS coordinates, engine CAN bus readings, and driver events during connectivity blackouts. We also offer hybrid satellite-cellular dual-mode hardware for mission-critical mining and long-haul transport corridors.',
    },
    {
      category: 'Platform & Security',
      question: 'Where is customer data hosted and what security standards are adhered to?',
      answer: 'All customer data is hosted strictly within tier-3 Australian data centers (Sydney and Melbourne) with 256-bit AES encryption at rest and TLS 1.3 in transit. We maintain compliance with ISO 27001 and ISO 55000 asset management standards.',
    },
  ];

  const categories = ['All', 'MEX CMMS', 'CHM', 'HireCar Marketplace', 'Australia Fleet Tracking', 'Platform & Security'];

  const filteredFaqs = activeTab === 'All' ? faqs : faqs.filter((f) => f.category === activeTab);

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Got Questions?
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Find answers to common questions about our four unified automotive platforms, pricing models, installation, and data security.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CallToActionBanner
        title="Have a question that isn't answered here?"
        subtitle="Speak with our technical consultants directly or book a product demonstration."
      />
    </div>
  );
}
