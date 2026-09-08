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
      title: 'MEX Overview',
      slug: 'mex-overview',
      path: '/product/mex-overview',
      desc: 'See how MEX CMMS keeps maintenance organised, efficient, and compliant across every asset hierarchy.',
      icon: <Layers className="w-6 h-6 text-red-500" />,
      tag: 'Core System',
    },
    {
      title: 'MEX Apps',
      slug: 'mex-apps',
      path: '/product/mex-apps',
      desc: 'Access, update, and manage maintenance tasks anywhere on native iOS and Android devices with offline sync.',
      icon: <Smartphone className="w-6 h-6 text-red-500" />,
      tag: 'Mobile & Field',
    },
    {
      title: 'Services',
      slug: 'services',
      path: '/product/services',
      desc: 'Get expert Australian-based technical support, cloud hosting, database migrations, and accredited training.',
      icon: <Headphones className="w-6 h-6 text-red-500" />,
      tag: 'Expert Support',
    },
    {
      title: 'Integrations',
      slug: 'integrations',
      path: '/product/integrations',
      desc: 'Connect your systems and data to reduce duplicate work, speed up processes, and sync ERPs (SAP, Xero, MYOB).',
      icon: <Cpu className="w-6 h-6 text-red-500" />,
      tag: 'API & ERP',
    },
    {
      title: 'Inventory Management',
      slug: 'inventory-management',
      path: '/product/inventory-management',
      desc: 'Track and manage parts in real time to avoid shortages, control minimum stock levels, and minimize downtime.',
      icon: <Package className="w-6 h-6 text-red-500" />,
      tag: 'Stores & Parts',
    },
    {
      title: 'Prestart Checklist',
      slug: 'prestart-checklist',
      path: '/product/prestart-checklist',
      desc: 'Run safer, paper-free inspections that keep assets compliant, audit-ready, and operators accountable.',
      icon: <ClipboardCheck className="w-6 h-6 text-red-500" />,
      tag: 'Safety & Compliance',
    },
    {
      title: 'Work Request Management',
      slug: 'work-request-management',
      path: '/product/work-request-management',
      desc: 'Keep every work request visible, triaged, tracked, and completed on time from across the business.',
      icon: <FileText className="w-6 h-6 text-red-500" />,
      tag: 'Operations',
    },
    {
      title: 'Multi-Site Management',
      slug: 'multi-site-management',
      path: '/product/multi-site-management',
      desc: 'Manage maintenance across multiple sites, facilities, and regional warehouses with one connected cloud database.',
      icon: <Building2 className="w-6 h-6 text-red-500" />,
      tag: 'Enterprise Scale',
    },
    {
      title: 'Admin Control Centre',
      slug: 'admin-control-centre',
      path: '/product/admin-control-centre',
      desc: 'Control user access, roles, custom fields, audit trails, and security policies in one centralized hub.',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      tag: 'Security & Governance',
    },
    {
      title: 'AI Insights & Reporting',
      slug: 'ai-insights-reporting',
      path: '/product/ai-insights-reporting',
      desc: 'Build reports, graphical charts & analyse maintenance data with natural language and predictive trends.',
      icon: <LineChart className="w-6 h-6 text-red-500" />,
      tag: 'Analytics & AI',
    },
    {
      title: 'Inspections',
      slug: 'inspections',
      path: '/product/inspections',
      desc: 'Automate recurring inspections, statutory certifications, and safety walks to keep equipment 100% compliant.',
      icon: <CheckCircle2 className="w-6 h-6 text-red-500" />,
      tag: 'Auditing',
    },
    {
      title: 'AI Maintenance Scheduling',
      slug: 'ai-maintenance-scheduling',
      path: '/product/ai-maintenance-scheduling',
      desc: 'Balance technician workloads, prioritize critical plant lines, and automate routine PM assignments.',
      icon: <CalendarClock className="w-6 h-6 text-red-500" />,
      tag: 'Intelligent Ops',
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Dark Navy CMMS Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
              Computerised Maintenance Management System
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              MEX CMMS
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Australia's premier enterprise maintenance software. Designed to manage asset lifecycles, eliminate unplanned plant downtime, and bring complete operational clarity to maintenance teams nationwide.
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
              Comprehensive Modular System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built to manage every phase of maintenance
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Explore the core capabilities that empower maintenance managers and tradespeople alike. Click any module for detailed features.
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

      {/* Why Choose MEX Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-2">
                Enterprise Reliability
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed for front-line technicians, trusted by executive directors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Too many enterprise tools fail because they are overly convoluted for the tradespeople entering daily job notes. MEX was built in Australia with direct input from maintenance fitters, electricians, and reliability engineers.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  '100% Australian owned, operated, and locally supported in Brisbane',
                  'Modular architecture — pay only for the tools your operations need',
                  'Seamless integration with SAP, Oracle, Xero, MYOB, and Microsoft Dynamics',
                  'Rock-solid offline synchronization for underground mines and remote regional sites',
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
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Technicians working with modern tablet in industrial plant"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-red-400 block mb-1">
                    FIELD DEPLOYED
                  </span>
                  <h4 className="text-lg font-bold">Tested in heavy industry across Australasia</h4>
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
