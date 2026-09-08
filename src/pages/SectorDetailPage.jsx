import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

const sectorDataMap = {
  'by-capability': {
    title: 'Maintenance by Capability',
    type: 'Capability Framework',
    description: 'Transform every stage of plant and facility operations with modular CMMS capabilities tailored to your workflow.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Modular Flexibility',
    stat2: '30-Day',
    stat2Label: 'Free Sandbox Trial',
    keyPoints: [
      'Comprehensive Work Order Tracking from creation to digital sign-off',
      'Automated PM scheduling to eliminate unexpected breakdowns',
      'Inventory control preventing critical parts stockouts',
      'Actionable reporting for audits, costs, and compliance',
    ],
  },
  'asset-management': {
    title: 'Asset Management Solutions',
    type: 'Core Capability',
    description: 'Track, organise, and optimise every asset from one central system with lifetime maintenance history and warranty records.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Asset History Auditability',
    stat2: '45%',
    stat2Label: 'Extended Machinery Lifespan',
    keyPoints: [
      'Hierarchical asset trees with parent-child relationship tracking',
      'Complete cost roll-ups including parts, contractor labor, and internal hours',
      'Automated warranty and statutory certificate expiry alerts',
      'Barcoding, QR tags, and RFID asset scanning in the field',
    ],
  },
  'fleet-management': {
    title: 'Fleet & Vehicle Maintenance',
    type: 'Core Capability',
    description: 'Simplify fleet servicing, transport compliance, and mechanical maintenance tracking across all mobile assets.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    stat1: '99.4%',
    stat1Label: 'Fleet Availability',
    stat2: '28%',
    stat2Label: 'Fuel & Wear Savings',
    keyPoints: [
      'Odometer and engine-hour trigger intervals for scheduled services',
      'Roadworthy inspections, driver prestart checklists, and defect reporting',
      'Tire usage, fuel logs, and component rebuild lifecycle monitoring',
      'National Heavy Vehicle Regulator (NHVR) compliance-ready records',
    ],
  },
  'preventive-maintenance': {
    title: 'Preventive Maintenance (PM)',
    type: 'Core Capability',
    description: 'Plan, schedule, and automate maintenance to reduce downtime, cut emergency overtime, and extend operational longevity.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stat1: '40%',
    stat1Label: 'Reduction in Unplanned Breakdowns',
    stat2: '98%',
    stat2Label: 'On-Time PM Completion',
    keyPoints: [
      'Calendar-based, meter-based, and event-based PM triggers',
      'Standardized maintenance job instructions with step-by-step safety guides',
      'Automatic spare parts reservation and required tool checklists',
      'Seasonal workload balancing and shutdown maintenance window planning',
    ],
  },
  'work-order-management': {
    title: 'Work Order Management',
    type: 'Core Capability',
    description: 'Create, assign, and complete jobs with total visibility and control across your engineering teams.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    stat1: '3x',
    stat1Label: 'Faster Job Dispatch',
    stat2: 'Zero',
    stat2Label: 'Lost Paper Work Orders',
  },
  'reporting-analytics': {
    title: 'Reporting & Analytics',
    type: 'Core Capability',
    description: 'Track performance, analyze trends, and export audit-ready reports easily to make informed capital decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    stat1: '140+',
    stat1Label: 'Ready-to-Use Reports',
    stat2: 'Instant',
    stat2Label: 'KPI Dashboard Visualization',
  },
  'aged-care': {
    title: 'Aged Care & Retirement Living',
    type: 'Industry Solution',
    description: 'Keep aged care facilities safe, compliant, and running smoothly while meeting strict Aged Care Quality Standards.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Aged Care Quality Compliance',
    stat2: '24/7',
    stat2Label: 'Resident Safety & Asset Uptime',
  },
  'breweries-wineries': {
    title: 'Breweries & Wineries',
    type: 'Industry Solution',
    description: 'Keep vintage and bottling production efficient with connected, food-grade compliant maintenance.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    stat1: '99.8%',
    stat1Label: 'Vintage Line Availability',
    stat2: 'HACCP',
    stat2Label: 'Food Safety Audit Ready',
  },
  facilities: {
    title: 'Facilities & Commercial Property',
    type: 'Industry Solution',
    description: 'Manage building services, HVAC, fire systems, lifts, and contractor compliance across multi-tenanted commercial real estate.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    stat1: '35%',
    stat1Label: 'Reduced Tenant Complaint Tickets',
    stat2: 'NABERS',
    stat2Label: 'Energy Efficiency Alignment',
  },
  'fleet-logistics': {
    title: 'Fleet & Logistics Operations',
    type: 'Industry Solution',
    description: 'Simplify fleet maintenance to improve uptime, driver safety, and transport logistics reliability nationwide.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    stat1: '99.1%',
    stat1Label: 'On-Time Fleet Dispatch',
    stat2: 'NHVR',
    stat2Label: 'Regulatory Compliance',
  },
  'food-beverage': {
    title: 'Food & Beverage Manufacturing',
    type: 'Industry Solution',
    description: 'Keep production lines efficient, compliant, and audit-ready under strict food hygiene and safety standards.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    stat1: 'Zero',
    stat1Label: 'Hygiene Audit Non-Conformances',
    stat2: '45%',
    stat2Label: 'Less Packaging Line Downtime',
  },
  'government-infrastructure': {
    title: 'Government & Public Infrastructure',
    type: 'Industry Solution',
    description: 'Maintain public assets, water utilities, parks, and civil structures with full transparency and public accountability.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Auditable Public Spending',
    stat2: 'ISO 55000',
    stat2Label: 'Asset Standards Alignment',
  },
  'healthcare-biotech': {
    title: 'Healthcare & Biomedical Facilities',
    type: 'Industry Solution',
    description: 'Ensure statutory biomedical compliance, surgical theater air quality, and clinical equipment reliability at all times.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Biomedical Certification Rate',
    stat2: '24/7',
    stat2Label: 'Critical Power & HVAC Monitoring',
  },
  manufacturing: {
    title: 'Manufacturing & Industrial Processing',
    type: 'Industry Solution',
    description: 'Keep production lines running at peak OEE (Overall Equipment Effectiveness) with planned maintenance and rapid fault recovery.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    stat1: '34%',
    stat1Label: 'Downtime Reduction',
    stat2: '15%',
    stat2Label: 'Overall Equipment Effectiveness (OEE) Boost',
  },
  mining: {
    title: 'Mining & Heavy Plant Maintenance',
    type: 'Industry Solution',
    description: 'Manage open-cut and underground mine assets with offline mobile apps, component changeouts, and extreme duty cycles.',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
    stat1: '99.5%',
    stat1Label: 'Plant Line Reliability',
    stat2: '100%',
    stat2Label: 'Offline Sync in Underground Pits',
  },
  'ports-marines': {
    title: 'Ports, Marinas & Maritime Logistics',
    type: 'Industry Solution',
    description: 'Streamline maintenance across container cranes, tugboats, docking berths, and commercial maritime facilities.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    stat1: '24/7',
    stat1Label: 'Vessel Berth Readiness',
    stat2: '40%',
    stat2Label: 'Reduced Crane Breakdown Delays',
  },
  utilities: {
    title: 'Utilities & Power Generation',
    type: 'Industry Solution',
    description: 'Optimize uptime and safety across water treatment facilities, electrical substations, and gas distribution networks.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    stat1: '99.99%',
    stat1Label: 'Grid & Treatment Availability',
    stat2: 'ISO 55000',
    stat2Label: 'Certified Infrastructure',
  },
  education: {
    title: 'Schools, Universities & Campus Facilities',
    type: 'Industry Solution',
    description: 'Protect campus facilities, heritage buildings, classrooms, and grounds seamlessly with simplified maintenance tracking.',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    stat1: '60%',
    stat1Label: 'Faster Campus Work Request Resolutions',
    stat2: '100%',
    stat2Label: 'Heritage Asset Compliance',
  },
};

export default function SectorDetailPage() {
  const { sector } = useParams();
  const current = sectorDataMap[sector || 'manufacturing'] || sectorDataMap['manufacturing'];

  const points = current.keyPoints || [
    'Automated preventive maintenance to eliminate surprise downtime',
    'Full asset registry with complete audit trail and documentation history',
    'Mobile app for field technicians with offline sync and photo attachments',
    'Integrated spare parts tracking preventing maintenance delays',
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Sector Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
              {current.type}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
              {current.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{current.description}</p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/free-trial"
                className="px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg active:scale-98"
              >
                Start 30-Day Free Trial
              </Link>
              <Link
                to="/pricing/calculate"
                className="px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                Calculate Cost Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Industry Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                Industry Capabilities
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Built to solve the specific operational challenges of {current.title}
              </h2>
              <div className="space-y-4 pt-2">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="p-1.5 rounded-full bg-red-50 text-red-600 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-extrabold text-slate-900 block">{current.stat1}</span>
                  <span className="text-xs text-slate-500 font-medium">{current.stat1Label}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-extrabold text-slate-900 block">{current.stat2}</span>
                  <span className="text-xs text-slate-500 font-medium">{current.stat2Label}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-96">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs uppercase font-mono tracking-widest text-red-400 block mb-1">
                      AUSTRALIAN FIELD STANDARDS
                    </span>
                    <h4 className="text-lg font-bold">Trusted by operators in {current.title}</h4>
                  </div>
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
