import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

const featureDetails = {
  'mex-overview': {
    title: 'MEX Overview',
    subtitle: 'The Core Engine for Reliable Maintenance Operations',
    tag: 'Core System',
    description:
      'MEX CMMS provides complete visibility over assets, work orders, preventive schedules, and historical maintenance performance in one unified platform.',
    bullets: [
      'Comprehensive asset register with parent-child relationships and serial tracking',
      'Automated preventive maintenance (PM) scheduling by calendar intervals, run hours, or odometer units',
      'Customizable KPI dashboards, compliance reports, and exportable audit logs',
      'Unified work order workflow from request submission to trade sign-off',
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    stat1: '99.2%',
    stat1Label: 'Planned Maintenance Compliance',
    stat2: '40%',
    stat2Label: 'Reduced Emergency Breakdowns',
  },
  'mex-apps': {
    title: 'MEX Mobile Apps',
    subtitle: 'Powerful Field Maintenance for iOS, Android & Rugged Scanners',
    tag: 'Mobile & Offline',
    description:
      'Empower your field technicians and tradespeople to manage jobs, inspect equipment, scan barcodes, and log parts usage on-site with zero paper and full offline sync.',
    bullets: [
      'Offline functionality for underground mines, remote outback sites, and ship holds',
      'Integrated barcode and QR code scanner for instant asset and spare part retrieval',
      'Direct photo attachment with markup tools to illustrate damage and completed repairs',
      'Digital signature capture for trade approvals, customer permits, and work clearances',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Offline Sync Support',
    stat2: '55%',
    stat2Label: 'Faster Job Sign-offs',
  },
  services: {
    title: 'MEX Professional Services',
    subtitle: 'Local Australian Support, Cloud Hosting & Expert Implementation',
    tag: 'Services & Support',
    description:
      'Backed by 30+ years of maintenance engineering know-how, our Brisbane-based support and consulting teams ensure seamless implementation and high adoption.',
    bullets: [
      'Dedicated local Australian phone and email support with rapid response SLAs',
      'Turnkey data migration from legacy spreadsheets, SAP, Maximo, or older CMMS platforms',
      'Tailored on-site or virtual training for technicians, storepersons, and system administrators',
      'Secure, high-speed Australian cloud hosting with automated daily backups and 99.9% uptime',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    stat1: '< 15min',
    stat1Label: 'Average Support Response Time',
    stat2: '30+ Years',
    stat2Label: 'Industry Experience',
  },
  integrations: {
    title: 'Enterprise Integrations',
    subtitle: 'Connect MEX to Your Core ERP, Accounting, and SCADA Systems',
    tag: 'Data Connectivity',
    description:
      'Break down data silos. MEX integrates cleanly with enterprise ERPs, financial tools, and telemetry hardware to keep inventory, purchase orders, and run hours in lockstep.',
    bullets: [
      'Pre-built connectors for SAP, Xero, MYOB, Oracle NetSuite, and Microsoft Dynamics',
      'Robust REST API and webhooks for custom in-house application synchronization',
      'Automatic sync of purchase orders, stock reorders, and invoice reconciliation',
      'IoT and SCADA meter imports for real-time vibration, temperature, and run-hour readings',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    stat1: '50+',
    stat1Label: 'Supported Connectors',
    stat2: '0',
    stat2Label: 'Double Data Entry',
  },
  'mex-engineering': {
    title: 'MEX Engineering Solutions',
    subtitle: 'Customized Reliability Engineering & Data Auditing',
    tag: 'Consulting',
    description:
      'Our team of seasoned reliability engineers helps clients optimize asset hierarchies, refine preventative maintenance triggers, and achieve ISO 55000 compliance.',
    bullets: [
      'Asset hierarchy structuring and criticality ranking workshops',
      'Failure Modes and Effects Analysis (FMEA) alignment in MEX',
      'Preventative Maintenance Optimization (PMO) to eliminate wasteful inspections',
      'Compliance and statutory audit preparation across hazardous facilities',
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stat1: 'ISO 55000',
    stat1Label: 'Asset Standard Compliance',
    stat2: '25%',
    stat2Label: 'Direct Maintenance Savings',
  },
  'inventory-management': {
    title: 'Inventory & Stores Management',
    subtitle: 'Real-Time Spares Tracking to Prevent Costly Stockouts',
    tag: 'Inventory & Parts',
    description:
      'Ensure the right replacement parts are on hand before machines stop. Track bin locations, minimum reorder thresholds, catalog costs, and vendor lead times across warehouses.',
    bullets: [
      'Automated purchase order creation when items reach minimum stock safety limits',
      'Multi-warehouse and consignment inventory tracking with bin & aisle mapping',
      'Direct parts reservation on work orders to avoid unexpected parts shortages',
      'Barcode and QR generation for rapid goods receipts, stocktakes, and issues',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    stat1: '98.5%',
    stat1Label: 'Stock Record Accuracy',
    stat2: '30%',
    stat2Label: 'Inventory Carrying Cost Reduction',
  },
  'prestart-checklist': {
    title: 'Prestart Checklists',
    subtitle: 'Mobile, Paper-Free Equipment Prestarts for Front-line Safety',
    tag: 'Safety & Compliance',
    description:
      'Equip operators and drivers to complete mandatory pre-operational equipment checks directly on their phone or tablet before starting shift machinery.',
    bullets: [
      'Configurable digital checklists with pass/fail gates and mandatory photo proofs',
      'Automatic work order generation whenever a critical safety check fails',
      'Instant supervisor alerts and lockout flags preventing unsafe equipment use',
      'Tamper-proof time and GPS stamps for regulatory safety audit defense',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Paperless Compliance',
    stat2: '0',
    stat2Label: 'Unchecked Shift Starts',
  },
  'work-request-management': {
    title: 'Work Request Management',
    subtitle: 'Centralized Request Portal for Entire Organizations',
    tag: 'Workflows',
    description:
      'Allow facility occupants, machine operators, and staff to log maintenance requests in seconds without requiring full CMMS licenses.',
    bullets: [
      'Simple web portal accessible to all company employees with no training needed',
      'Automated duplicate request detection preventing redundant work tickets',
      'Status email alerts informing the requestor when jobs are accepted, scheduled, and finished',
      'Prioritization triage queue for maintenance supervisors to approve and convert requests to work orders',
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    stat1: '3x',
    stat1Label: 'Faster Request-to-Work Conversion',
    stat2: '100%',
    stat2Label: 'Request Visibility',
  },
  'multi-site-management': {
    title: 'Multi-Site Management',
    subtitle: 'Centralized Governance Across Regional and Global Locations',
    tag: 'Enterprise Scale',
    description:
      'Oversee multiple factories, branches, ports, or mines from a single unified MEX database while maintaining granular site-level security.',
    bullets: [
      'Site-specific asset trees, inventory stores, and contractor access controls',
      'Corporate roll-up reporting comparing uptime, spend, and compliance across branches',
      'Inter-site spare parts transfer requests and visibility into regional inventory',
      'Standardized maintenance job plans deployed across all national facilities',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    stat1: 'Unlimited',
    stat1Label: 'Site Scalability',
    stat2: 'Global',
    stat2Label: 'Unified Dashboard',
  },
  'admin-control-centre': {
    title: 'Admin Control Centre',
    subtitle: 'Granular Role-Based Security and System Governance',
    tag: 'Security & Admin',
    description:
      'Configure fields, user roles, security groups, approval thresholds, and detailed audit trails in one centralized control center.',
    bullets: [
      'Role-based access control (RBAC) customized down to individual screen tabs and fields',
      'Audit log tracking every modification, date stamp, and user signature',
      'Custom fields, mandatory input rules, and tailored terminology per department',
      'Single Sign-On (SSO) integration via SAML, Azure AD, and Google Workspace',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    stat1: 'ISO 27001',
    stat1Label: 'Security Standard',
    stat2: 'SSO',
    stat2Label: 'Enterprise Ready',
  },
  'ai-insights-reporting': {
    title: 'AI Insights & Reporting',
    subtitle: 'Natural Language Analytics and Predictive Reliability Insights',
    tag: 'AI & Analytics',
    description:
      'Ask questions about maintenance spend, recurring failure causes, and technician hours in plain English and receive instant graphical charts and predictive models.',
    bullets: [
      'Query your maintenance database in plain English (e.g., "Show me top 5 failure causes on line 3")',
      'Automated MTBF (Mean Time Between Failures) and MTTR (Mean Time to Repair) calculations',
      'Over 140 pre-configured standard reports and an intuitive drag-and-drop report builder',
      'Scheduled email reports sent automatically to plant directors and auditors',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    stat1: '140+',
    stat1Label: 'Standard Built-in Reports',
    stat2: 'Real-time',
    stat2Label: 'Natural Language Insights',
  },
  inspections: {
    title: 'Inspections Management',
    subtitle: 'Automated Recurring Safety, Statutory and Asset Inspections',
    tag: 'Audits & Quality',
    description:
      'Set up automated inspection intervals to ensure critical statutory pressure vessels, fire systems, electrical gear, and lifting equipment are always certified.',
    bullets: [
      'Flexible inspection checklist designer with numeric readings, tolerance limits, and pass/fail criteria',
      'Automatic work order triggering when readings fall outside acceptable safety thresholds',
      'Historical inspection logs ready for state workplace health and safety (WHS) inspectors',
      'Batch scheduling of annual and quarterly statutory inspections',
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Statutory Compliance',
    stat2: 'Zero',
    stat2Label: 'Overlooked Safety Audits',
  },
  'ai-maintenance-scheduling': {
    title: 'AI Maintenance Scheduling',
    subtitle: 'Smart Workload Balancing & Automated Dispatching',
    tag: 'AI Automation',
    description:
      'Use intelligent scheduling algorithms to balance trade availability, spare part arrival dates, and plant shutdown windows automatically.',
    bullets: [
      'Gantt chart visual schedule board with drag-and-drop work order reassignments',
      'Automated workload balancing preventing technician burnout and scheduling conflicts',
      'Part readiness verification before jobs are placed on the live trade board',
      'Weather and shift-pattern awareness for outdoor asset maintenance',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    stat1: '45%',
    stat1Label: 'Time Saved in Weekly Scheduling',
    stat2: '95%+',
    stat2Label: 'Technician Utilization',
  },
};

export default function FeatureDetailPage() {
  const { slug } = useParams();
  const data = featureDetails[slug || 'mex-overview'] || featureDetails['mex-overview'];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
              {data.tag}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
              {data.title}
            </h1>
            <p className="text-xl text-slate-300 font-medium">{data.subtitle}</p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{data.description}</p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/free-trial"
                className="px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg active:scale-98"
              >
                Try {data.title} Free
              </Link>
              <Link
                to="/pricing"
                className="px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Key Highlights & Bullets (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                Key Operational Benefits
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Designed to deliver tangible results on day one
              </h2>
              <div className="space-y-4 pt-2">
                {data.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="p-1.5 rounded-full bg-red-50 text-red-600 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-extrabold text-slate-900 block">{data.stat1}</span>
                  <span className="text-xs text-slate-500 font-medium">{data.stat1Label}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-extrabold text-slate-900 block">{data.stat2}</span>
                  <span className="text-xs text-slate-500 font-medium">{data.stat2Label}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Mockup Showcase (Col 6) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-96">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs uppercase font-mono tracking-widest text-red-400 block mb-1">
                      MEX V16 ENGINE
                    </span>
                    <h4 className="text-lg font-bold">{data.title} in Action</h4>
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
