import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Check,
  X,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Building2,
  PhoneCall,
  CheckCircle2,
  Wrench,
  Car,
  Navigation,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

export default function ProductPricingDetailPage() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  // Map slug to valid product key
  const normalizedSlug = (productSlug || 'wrms-pro').toLowerCase();

  const productData = {
    'wrms-pro': {
      name: 'WRMS Pro',
      subtitle: 'Workshop Repair Management',
      tagline: 'The complete modern operating system for Australian mechanical and commercial repair workshops.',
      color: 'rose',
      icon: Wrench,
      accentBg: 'bg-rose-50 text-rose-600 border-rose-200',
      badgeBg: 'bg-rose-600 text-white',
      pricingUnit: 'per workshop / mo',
      plans: [
        {
          id: 'starter',
          name: 'Workshop Starter',
          badge: 'Ideal for 1-3 Bays',
          monthlyPrice: 149,
          annualPrice: 119,
          desc: 'For independent workshops needing streamlined digital job cards, quick invoicing, and automated SMS.',
          features: [
            'Up to 3 technician tablet logins',
            'Digital Job Cards & live status board',
            'Customer Invoicing & card payments',
            'Basic parts inventory registry with markup',
            'Customer SMS approval & pickup notifications',
            'Standard email & knowledge base support',
          ],
          missing: [
            'Interactive Gantt bay balancing',
            'Barcode scanner parts deductions',
            'Accounting two-way synchronization',
            'Multi-branch stock transfers',
          ],
        },
        {
          id: 'pro',
          name: 'Workshop Pro',
          popular: true,
          badge: 'Most Popular • 4-10 Bays',
          monthlyPrice: 289,
          annualPrice: 229,
          desc: 'Complete power for high-volume workshops looking to maximize technician billable hours and parts margin.',
          features: [
            'Up to 10 technician tablet logins',
            'Interactive Gantt bay balancing & scheduler',
            'Barcode scanner parts stock deductions',
            'Auto-reorder points & purchase order staging',
            'Labor rate schedules & technician productivity reports',
            'Two-way sync with Xero & MYOB',
            'Customer digital signature inspection sheets',
            'Priority phone & chat support',
          ],
          missing: [
            'Multi-branch stock transfers',
            'Custom ERP data connectors',
          ],
        },
        {
          id: 'enterprise',
          name: 'Workshop Enterprise',
          badge: 'Multi-Location / Dealerships',
          monthlyPrice: 549,
          annualPrice: 439,
          desc: 'Tailored for multi-branch workshop networks, franchise dealer centers, and heavy equipment depots.',
          features: [
            'Unlimited technician & service advisor seats',
            'Multi-branch inventory pooling & transfers',
            'Centralized customer billing & account management',
            'Custom statutory inspection checklists',
            'Custom API access & legacy ERP data integration',
            'Dedicated Account Manager & onboarding trainer',
            '99.95% uptime SLA & 24/7 emergency hotline',
          ],
          missing: [],
        },
      ],
      comparisonFeatures: [
        { name: 'Technician Tablet Logins', starter: 'Up to 3', pro: 'Up to 10', enterprise: 'Unlimited' },
        { name: 'Digital Work Orders & Job Cards', starter: true, pro: true, enterprise: true },
        { name: 'Bay Scheduling Board', starter: 'List View', pro: 'Interactive Gantt', enterprise: 'Multi-Site Gantt' },
        { name: 'Parts Inventory Tracking', starter: 'Basic Stock', pro: 'Barcode & Re-order', enterprise: 'Multi-Branch Pooling' },
        { name: 'Accounting Sync (Xero, MYOB)', starter: false, pro: true, enterprise: true },
        { name: 'Customer SMS Estimates Approval', starter: true, pro: true, enterprise: true },
        { name: 'Technician Labor Efficiency Logs', starter: false, pro: true, enterprise: true },
        { name: 'Dedicated Onboarding Specialist', starter: false, pro: false, enterprise: true },
      ],
      faqs: [
        {
          q: 'Can I add more technician tablets as my workshop expands?',
          a: 'Yes, you can upgrade your plan or add incremental technician seats at any time directly through your billing portal with pro-rated invoicing.',
        },
        {
          q: 'Does WRMS Pro work with my existing barcode scanners?',
          a: 'WRMS Pro supports all standard Bluetooth, USB, and tablet camera barcode/QR scanners out-of-the-box for rapid parts receiving and job card staging.',
        },
        {
          q: 'Can we import our existing customer vehicle databases?',
          a: 'Yes. We provide CSV and Excel import templates, and our onboarding team will assist you in mapping vehicle VINs, rego numbers, and customer contacts.',
        },
      ],
    },

    'chm': {
      name: 'CHM',
      subtitle: 'Compliance & Workshop Management',
      tagline: 'Audit-ready statutory compliance, heavy vehicle inspection workflows, and workshop safety management.',
      color: 'amber',
      icon: ShieldCheck,
      accentBg: 'bg-amber-50 text-amber-600 border-amber-200',
      badgeBg: 'bg-amber-600 text-white',
      pricingUnit: 'per workshop / mo',
      plans: [
        {
          id: 'starter',
          name: 'Compliance Essentials',
          badge: 'Small Fleets & Shops',
          monthlyPrice: 129,
          annualPrice: 99,
          desc: 'Eliminate physical paperwork with digital statutory prestart checklists and automatic defect triage.',
          features: [
            'Digital Prestart & Daily Walkaround Checklists',
            'Instant Driver Defect Reporting & Bay Handoff',
            'NHVR statutory maintenance schedule tracker',
            'Automated service interval alerts (time & km)',
            'Single workshop location license',
            'Standard web & email support',
          ],
          missing: [
            'Audit-Ready Report Pack generator',
            'Automated toll & infringement matching',
            'Multi-bay workflow scheduling',
          ],
        },
        {
          id: 'pro',
          name: 'Compliance Pro',
          popular: true,
          badge: 'Most Popular • Transport Fleets',
          monthlyPrice: 249,
          annualPrice: 199,
          desc: 'For commercial workshops, transport operators, and bus operators requiring strict audit accreditation.',
          features: [
            'Everything in Compliance Essentials',
            'Multi-bay workshop workflow scheduling',
            'NHVR & ISO 55000 1-Click Audit Pack generation',
            'Automated Toll & Infringement reconciliation',
            'Parts inventory staging for statutory service bays',
            'Driver digital signatures with GPS timestamping',
            'Priority support & compliance updates',
          ],
          missing: [
            'Multi-tier auditor external access',
            'Custom telematics webhook API integration',
          ],
        },
        {
          id: 'enterprise',
          name: 'Enterprise Compliance',
          badge: 'National Fleets & Logistics',
          monthlyPrice: 489,
          annualPrice: 389,
          desc: 'Customized for national transport carriers, passenger bus networks, and multi-depot mining fleets.',
          features: [
            'Unlimited asset registries & workshop sites',
            'Multi-tier external auditor read-only login portal',
            'Custom regulatory inspection logic & mandatory fields',
            'Automated failure rate & root-cause compliance analytics',
            'Full REST API & webhook connectors',
            'Dedicated compliance consultant onboarding',
            '24/7 priority incident phone coverage',
          ],
          missing: [],
        },
      ],
      comparisonFeatures: [
        { name: 'Digital Prestart Inspections', starter: true, pro: true, enterprise: true },
        { name: 'NHVR Maintenance Records', starter: 'Standard', pro: 'Automated Logs', enterprise: 'Immutable Ledger' },
        { name: '1-Click Audit Report Generator', starter: false, pro: true, enterprise: true },
        { name: 'Toll & Fine Auto-Reconciliation', starter: false, pro: true, enterprise: true },
        { name: 'Workshop Bay Allocation', starter: 'Basic', pro: 'Full Gantt', enterprise: 'Enterprise Multi-Site' },
        { name: 'Auditor External Portal', starter: false, pro: false, enterprise: true },
        { name: 'Custom Inspection Logic', starter: false, pro: 'Standard Templates', enterprise: 'Fully Customizable' },
      ],
      faqs: [
        {
          q: 'Does CHM meet National Heavy Vehicle Regulator (NHVR) standards?',
          a: 'Yes. CHM is engineered specifically to align with NHVR Maintenance Management Accreditation and statutory fatigue/service regulations across all Australian states.',
        },
        {
          q: 'Can drivers complete prestart inspections offline in remote areas?',
          a: 'Yes, the CHM mobile inspection app operates 100% offline. Checklists, photos, and signatures cache securely on the device and sync automatically once data signal is restored.',
        },
      ],
    },

    'hirecar-marketplace': {
      name: 'HireCar Marketplace',
      subtitle: 'Vehicle Rental Marketplace',
      tagline: 'Direct booking engine, live fleet telematics sync, and automated digital rental desk software.',
      color: 'pink',
      icon: Car,
      accentBg: 'bg-pink-50 text-pink-600 border-pink-200',
      badgeBg: 'bg-pink-600 text-white',
      pricingUnit: 'per fleet / mo',
      plans: [
        {
          id: 'starter',
          name: 'Operator Starter',
          badge: 'Up to 15 Rental Vehicles',
          monthlyPrice: 179,
          annualPrice: 139,
          desc: 'For boutique and independent car rental businesses launching direct online bookings.',
          features: [
            'Public Marketplace listing & custom booking widget',
            'Instant Digital Identity & Driver License verification',
            'Contactless digital rental agreements & signing',
            'Automated credit card bond hold & release',
            'Live calendar booking management',
            'Email & online ticketing support',
          ],
          missing: [
            'Live telematics fuel/odometer automation',
            'Contactless lockbox integration',
            'Dynamic seasonal pricing engine',
          ],
        },
        {
          id: 'pro',
          name: 'Operator Growth',
          popular: true,
          badge: 'Most Popular • 16-60 Vehicles',
          monthlyPrice: 329,
          annualPrice: 259,
          desc: 'Turn your rental business into a 24/7 automated fleet operation with zero broker commissions.',
          features: [
            'Everything in Starter for up to 60 vehicles',
            'Live telematics sync (Instant fuel & km readings at check-in)',
            'Smart lockbox & mobile vehicle unlock integration',
            'Dynamic demand & seasonal pricing algorithms',
            'Multi-depot & airport handover dispatching',
            '0% broker fee on all direct website bookings',
            'Priority phone & live chat support',
          ],
          missing: [
            'Custom white-label native mobile app',
            'Dedicated growth account manager',
          ],
        },
        {
          id: 'enterprise',
          name: 'Fleet Enterprise',
          badge: '60+ Vehicles & Franchises',
          monthlyPrice: 599,
          annualPrice: 479,
          desc: 'Full white-label fleet management and marketplace distribution for national rental brands.',
          features: [
            'Unlimited rental vehicle capacity',
            'Custom white-label web booking portal & domain',
            'Automated Linkt/EastLink toll charge forwarding',
            'Cross-depot fleet relocation optimization',
            'Custom payment gateway & corporate invoicing',
            'Dedicated Growth Account Manager',
            'SLA guarantees & 24/7 desk support',
          ],
          missing: [],
        },
      ],
      comparisonFeatures: [
        { name: 'Vehicle Listing Capacity', starter: 'Up to 15', pro: 'Up to 60', enterprise: 'Unlimited' },
        { name: 'Driver ID & License Verification', starter: true, pro: true, enterprise: true },
        { name: 'Direct Booking Commission', starter: '0%', pro: '0%', enterprise: '0%' },
        { name: 'Live Telematics Fuel/KM Reading', starter: false, pro: true, enterprise: true },
        { name: 'Contactless Lockbox Integration', starter: false, pro: true, enterprise: true },
        { name: 'Dynamic Seasonal Pricing', starter: false, pro: true, enterprise: true },
        { name: 'Toll Reconciliation Automation', starter: 'Manual Export', pro: 'Automated Billing', enterprise: 'Full Direct Clearing' },
      ],
      faqs: [
        {
          q: 'Do you charge a commission on bookings made through our website?',
          a: 'No! All direct bookings made through your HireCar Marketplace embedded widget carry 0% broker commission, saving you up to 25% compared to legacy travel aggregators.',
        },
        {
          q: 'How does automated bond holding work?',
          a: 'HireCar Marketplace places an automated pre-authorization hold on the customer’s card before vehicle handover. Upon return and automated damage/fuel verification, the bond is released automatically.',
        },
      ],
    },

    'australia-fleet-tracking': {
      name: 'Australia Fleet Tracking',
      subtitle: 'Real-Time Fleet Tracking',
      tagline: 'High-frequency 4G/5G and dual-satellite telematics, live CAN bus diagnostics, and driver safety monitoring.',
      color: 'emerald',
      icon: Navigation,
      accentBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badgeBg: 'bg-emerald-600 text-white',
      pricingUnit: 'per vehicle / mo',
      plans: [
        {
          id: 'starter',
          name: 'Track & Locate',
          badge: 'Basic Visibility',
          monthlyPrice: 29,
          annualPrice: 22,
          desc: 'Essential live tracking for commercial vans, service utes, and light delivery fleets.',
          features: [
            '10-Second High-Frequency GPS Tracking',
            '1 Year complete trip history & route playback',
            'Instant Geofence entry, exit & dwell alerts',
            'Dispatcher web console & iOS/Android mobile apps',
            'Australia-wide 4G/5G Telstra/Optus cellular roaming',
            'Standard business hours technical support',
          ],
          missing: [
            'Live CAN bus engine error diagnostics',
            'Driver behavior scoring & harsh events',
            'Automated maintenance triggers',
            'Satellite outback failover',
          ],
        },
        {
          id: 'pro',
          name: 'Telematics & Safety Pro',
          popular: true,
          badge: 'Most Popular • Commercial Fleets',
          monthlyPrice: 45,
          annualPrice: 35,
          desc: 'Full OBD-II and heavy vehicle CAN bus diagnostics with driver safety scorecards.',
          features: [
            'Everything in Track & Locate',
            'Live OBD-II / J1939 CAN Bus Engine Telemetry',
            'Driver safety scoring (Speeding, harsh brake/corner)',
            'Real-time engine DTC fault codes & temperature alerts',
            'Automated maintenance triggers based on km & hours',
            'Fuel consumption & idle reduction analytics',
            'Plug & Play OBD-II hardware unit included',
            'Priority support & API telemetry webhooks',
          ],
          missing: [
            'Dual-satellite outback hybrid failover',
            'AI dual-facing dashcam integration',
          ],
        },
        {
          id: 'enterprise',
          name: 'Outback & Satellite Hybrid',
          badge: 'Mining & Long-Haul Transport',
          monthlyPrice: 79,
          annualPrice: 62,
          desc: 'Zero-blackout dual satellite-cellular connectivity for heavy transport, mining, and regional fleets.',
          features: [
            'Dual-Mode Satellite & Cellular hardware unit',
            '100% Australian territory coverage with zero blackouts',
            'AI Dual-Facing Dashcam integration (Fatigue & Distraction)',
            'NHVR Electronic Work Diary (EWD) certified telemetry',
            'Duress SOS alarm button & roll-over alert system',
            'Rugged IP67 waterproof & vibration-resistant casing',
            'Dedicated Fleet Safety Manager & turnkey field installation',
          ],
          missing: [],
        },
      ],
      comparisonFeatures: [
        { name: 'Live GPS Ping Frequency', starter: '10 Seconds', pro: '5 Seconds', enterprise: '1-5s Satellite/4G' },
        { name: 'Trip History Retention', starter: '12 Months', pro: '36 Months', enterprise: 'Unlimited' },
        { name: 'OBD-II & CAN Bus Diagnostics', starter: false, pro: true, enterprise: true },
        { name: 'Driver Safety Scorecards', starter: false, pro: true, enterprise: true },
        { name: 'Automated Servicing Triggers', starter: false, pro: true, enterprise: true },
        { name: 'Satellite Outback Coverage', starter: false, pro: false, enterprise: true },
        { name: 'Hardware Unit Included', starter: true, pro: true, enterprise: true },
      ],
      faqs: [
        {
          q: 'Is the tracking hardware easy to install?',
          a: 'Yes! Our light-vehicle units plug directly into standard OBD-II ports under the dash in under 60 seconds. For heavy prime movers and satellite units, we supply plug-and-play J1939 harnesses or arrange nationwide on-site installation.',
        },
        {
          q: 'Can Australia Fleet Tracking data feed directly into WRMS Pro or CHM?',
          a: 'Absolutely. Live vehicle odometer readings, operating hours, and fault codes sync automatically into WRMS Pro and CHM to trigger scheduled preventive maintenance without any manual data entry.',
        },
      ],
    },
  };

  // Fallback if slug is not matched
  const currentProduct =
    productData[normalizedSlug] ||
    (normalizedSlug.includes('wrms')
      ? productData['wrms-pro']
      : normalizedSlug.includes('chm')
      ? productData['chm']
      : normalizedSlug.includes('hirecar')
      ? productData['hirecar-marketplace']
      : normalizedSlug.includes('fleet') || normalizedSlug.includes('tracking')
      ? productData['australia-fleet-tracking']
      : productData['wrms-pro']);

  const ProductIcon = currentProduct.icon;

  return (
    <div className="bg-[#fcfdfd] text-slate-800 font-sans min-h-screen">
      {/* Top Breadcrumb Header */}
      <div className="bg-[#050b14] border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Back to all product plans</span>
          </Link>

          {/* Quick Product Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-slate-500">View other products:</span>
            <Link
              to="/pricing/wrms-pro"
              className={`hover:text-white transition-colors ${
                normalizedSlug === 'wrms-pro' ? 'text-rose-400 font-bold' : ''
              }`}
            >
              WRMS Pro
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              to="/pricing/chm"
              className={`hover:text-white transition-colors ${
                normalizedSlug === 'chm' ? 'text-amber-400 font-bold' : ''
              }`}
            >
              CHM
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              to="/pricing/hirecar-marketplace"
              className={`hover:text-white transition-colors ${
                normalizedSlug === 'hirecar-marketplace' ? 'text-pink-400 font-bold' : ''
              }`}
            >
              HireCar Marketplace
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              to="/pricing/australia-fleet-tracking"
              className={`hover:text-white transition-colors ${
                normalizedSlug === 'australia-fleet-tracking' ? 'text-emerald-400 font-bold' : ''
              }`}
            >
              Australia Fleet Tracking
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-md">
            <ProductIcon className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {currentProduct.name} Pricing & Plans
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            {currentProduct.subtitle}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {currentProduct.tagline}
          </p>

          {/* Monthly / Annually Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-white uppercase tracking-wider">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 Tier Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {currentProduct.plans.map((plan) => {
              const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
              const savings = (plan.monthlyPrice - plan.annualPrice) * 12;

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-3xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white border-rose-400 shadow-2xl ring-2 ring-rose-500/20 scale-102 lg:-translate-y-2 z-10'
                      : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300'
                  } p-8`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-600 text-white shadow-md">
                        Recommended Choice
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed min-h-[36px]">
                      {plan.desc}
                    </p>

                    {/* Price */}
                    <div className="my-6 pb-6 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                          ${price}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          AUD / {currentProduct.pricingUnit}
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        {billingCycle === 'annual' ? (
                          <span className="text-emerald-600 font-bold">
                            Billed annually (${savings} saved per year)
                          </span>
                        ) : (
                          <span>Billed month-to-month, cancel anytime</span>
                        )}
                      </div>
                    </div>

                    {/* Features Included */}
                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block mb-2">
                        What's Included:
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}

                      {plan.missing &&
                        plan.missing.map((miss, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-400 line-through opacity-70"
                          >
                            <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                            <span>{miss}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <a
                      href="https://www.hirecarmarketplace.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        plan.popular
                          ? 'bg-rose-600 hover:bg-rose-700 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Start 14-Day Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <Link
                      to={`/contact?subject=${encodeURIComponent(
                        `${currentProduct.name} - ${plan.name} Inquiry`
                      )}`}
                      className="w-full flex items-center justify-center py-2 px-4 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      Talk to a specialist
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need Custom Plan Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#091528] via-[#0f2342] to-[#091528] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                Custom Enterprise Architecture
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Need a Custom Plan for {currentProduct.name}?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Operating multi-location branches, a fleet of 100+ vehicles, or require on-premise
                data isolation with custom ERP integrations? Let our solution engineers build a
                tailored agreement for your business.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/contact?subject=Custom%20Enterprise%20Plan%20-%20${encodeURIComponent(
                  currentProduct.name
                )}`}
                className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Contact Enterprise Sales</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:1300000000"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all border border-white/20 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
                <span>Call 1300 000 000</span>
              </a>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Detailed Matrix
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                Plan Comparison
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold">Feature</th>
                    <th className="py-3 px-4 font-bold">{currentProduct.plans[0].name}</th>
                    <th className="py-3 px-4 font-bold text-rose-600">
                      {currentProduct.plans[1].name}
                    </th>
                    <th className="py-3 px-4 font-bold">{currentProduct.plans[2].name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentProduct.comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{row.name}</td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300" />
                          )
                        ) : (
                          row.starter
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900 bg-rose-50/30">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300" />
                          )
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300" />
                          )
                        ) : (
                          row.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Specific FAQs */}
          <div className="mt-16 bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Got Questions?
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                Frequently Asked Questions about {currentProduct.name}
              </h3>
            </div>

            <div className="space-y-4">
              {currentProduct.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
