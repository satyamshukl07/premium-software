import React from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  ClipboardCheck,
  FileText,
  Building2,
  Shield,
  LineChart,
  CheckCircle2,
  CalendarClock,
  ArrowRight,
  Layers,
  Smartphone,
  Headphones,
  Cpu,
  Check,
  Zap,
} from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

export default function CmmsPage() {
  const cmmsFeatures = [
    {
      title: 'WRMS Pro Overview',
      slug: 'wrms-pro-overview',
      path: '/products/wrms-pro/overview',
      desc: 'See how WRMS Pro brings total operational precision to automotive workshops with unified job cards, customer CRM, and live bay scheduling.',
      icon: <Layers className="w-6 h-6 text-red-500" />,
      tag: 'Core System',
    },
    {
      title: 'Technician Mobile App',
      slug: 'technician-app',
      path: '/products/wrms-pro/technician-app',
      desc: 'Access, update, and manage repair work orders directly in the bay on iOS and Android tablets with offline sync.',
      icon: <Smartphone className="w-6 h-6 text-red-500" />,
      tag: 'Mobile & Bay',
    },
    {
      title: 'Workshop Services & Support',
      slug: 'workshop-services',
      path: '/products/wrms-pro/services',
      desc: 'Get expert Australian-based technical support, database migrations, customer onboarding, and accredited training.',
      icon: <Headphones className="w-6 h-6 text-red-500" />,
      tag: 'Expert Support',
    },
    {
      title: 'Accounting & Parts Integrations',
      slug: 'workshop-integrations',
      path: '/products/wrms-pro/integrations',
      desc: 'Connect your workshop with Xero, MYOB, and QuickBooks to sync invoices automatically, while connecting live auto parts catalogues.',
      icon: <Cpu className="w-6 h-6 text-red-500" />,
      tag: 'API & Accounting',
    },
    {
      title: 'Stock & Parts Management',
      slug: 'parts-and-inventory',
      path: '/products/wrms-pro/inventory-management',
      desc: 'Track and manage parts in real time to avoid shortages, control minimum stock levels, and minimize vehicle bay downtime.',
      icon: <Package className="w-6 h-6 text-red-500" />,
      tag: 'Stores & Parts',
    },
    {
      title: 'Digital Vehicle Inspections',
      slug: 'workshop-inspections',
      path: '/products/wrms-pro/vehicle-inspections',
      desc: 'Run safer, paperless inspections with photo capture that keep vehicles compliant, roadworthy, and customers fully informed.',
      icon: <ClipboardCheck className="w-6 h-6 text-red-500" />,
      tag: 'Safety & DVI',
    },
    {
      title: 'Work Orders & Job Cards',
      slug: 'work-order-management',
      path: '/products/wrms-pro/work-orders',
      desc: 'Keep every repair order visible, triaged, tracked, and invoiced on time from initial customer intake to completion.',
      icon: <FileText className="w-6 h-6 text-red-500" />,
      tag: 'Job Operations',
    },
    {
      title: 'Multi-Branch Management',
      slug: 'multi-site-management',
      path: '/products/wrms-pro/multi-site',
      desc: 'Manage workshop operations across multiple branches, service centres, and mobile vans with one connected cloud database.',
      icon: <Building2 className="w-6 h-6 text-red-500" />,
      tag: 'Multi-Branch',
    },
    {
      title: 'Admin & Security Hub',
      slug: 'admin-control-centre',
      path: '/products/wrms-pro/admin-control',
      desc: 'Control staff permissions, labor rate tiers, markup formulas, technician commission rates, and audit logs in one central hub.',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      tag: 'Security & Rates',
    },
    {
      title: 'Financials & Invoicing',
      slug: 'workshop-analytics-invoicing',
      path: '/products/wrms-pro/analytics-invoicing',
      desc: 'Track real-time workshop gross profit, technician billing efficiency, parts margins, and generate compliant tax invoices in one click.',
      icon: <LineChart className="w-6 h-6 text-red-500" />,
      tag: 'Financials & KPI',
    },
    {
      title: 'Customer & Vehicle Registry',
      slug: 'workshop-customer-management',
      path: '/products/wrms-pro/customer-crm',
      desc: 'Maintain complete customer profiles and vehicle service histories with Australian rego lookup and automated SMS service reminders.',
      icon: <CheckCircle2 className="w-6 h-6 text-red-500" />,
      tag: 'CRM & History',
    },
    {
      title: 'Smart Bay Scheduling',
      slug: 'workshop-scheduling',
      path: '/products/wrms-pro/bay-scheduling',
      desc: 'Balance technician workloads, drag-and-drop jobs across hoists, manage loan cars, and automate customer booking confirmations.',
      icon: <CalendarClock className="w-6 h-6 text-red-500" />,
      tag: 'Bay Scheduling',
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Dark Navy CMMS Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
              Workshop Repair Management Software
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              WRMS PRO
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Australia's modern, all-in-one workshop repair management software. Designed to streamline work orders, job cards, parts inventory, customer invoicing, and technician scheduling with total operational precision.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/free-trial"
                className="px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg active:scale-98"
              >
                Start Free 30-Day Trial
              </Link>
              <Link
                to="/pricing"
                className="px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                View Plans & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section (Matching Recording) */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
              Comprehensive Workshop System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built to manage every phase of your workshop
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Explore the core capabilities that empower front-desk service advisors, workshop mechanics, and business owners alike. Click any module for detailed features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cmmsFeatures.map((feat) => (
              <Link
                key={feat.slug}
                to={feat.path}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      {feat.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-red-600">
                  <span>Explore module</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WRMS Pro Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
                Workshop Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed for busy workshop technicians, trusted by garage owners
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Too many workshop systems are clunky, slow, and tie your front desk to outdated servers. WRMS Pro was built in Australia with direct input from mechanics, auto electricians, and service advisors to run lightning-fast on any device — from bay tablets to office PCs.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  '100% Australian owned, operated, and locally supported for automotive workshops',
                  'All-in-one architecture — manage customers, vehicles, jobs, inventory & invoicing seamlessly',
                  'Two-way accounting sync with Xero, MYOB, and QuickBooks for instant reconciliation',
                  'Built-in digital vehicle inspections with photo and video capture sent straight to customer phones',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-96">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                alt="Technicians working with modern tablet in automotive repair workshop"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-red-400 block mb-1">
                    WORKSHOP DEPLOYED
                  </span>
                  <h4 className="text-lg font-bold">Tested in high-volume auto service centres and repair shops across Australasia</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
