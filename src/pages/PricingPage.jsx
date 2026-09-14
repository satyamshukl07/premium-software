import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Car,
  Navigation,
  HelpCircle,
  PhoneCall,
  Sparkles,
  Building2,
  Layers,
  ChevronRight,
  Clock,
  Zap,
} from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  // Four Product Cards Data
  const productCards = [
    {
      id: 'wrms-pro',
      name: 'WRMS Pro',
      subtitle: 'Workshop Repair Management',
      tagline: 'Streamline mechanical job cards, bay allocation, inventory, and customer invoicing.',
      icon: Wrench,
      accentColor: 'rose',
      badgeColor: 'text-rose-600 bg-rose-50 border-rose-200',
      btnColor: 'bg-rose-600 hover:bg-rose-700 text-white',
      pricing: {
        monthly: 149,
        annual: 119,
        unit: 'per workshop / month',
        annualNote: 'Save $360 billed annually',
      },
      features: [
        'Workshop Management & Bay Board',
        'Job Cards & Scheduling (Gantt & List)',
        'Inventory & Parts Stock Management',
        'Invoicing, Quotes & Card Payments',
        'Technician Tablet Punch Clock App',
        'Automated Customer SMS Estimates',
      ],
      detailPath: '/pricing/wrms-pro',
    },
    {
      id: 'chm',
      name: 'CHM',
      subtitle: 'Compliance & Workshop Management',
      tagline: 'Audit-ready statutory compliance, daily prestarts, and workshop safety workflows.',
      icon: ShieldCheck,
      accentColor: 'amber',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-200',
      btnColor: 'bg-amber-600 hover:bg-amber-700 text-white',
      pricing: {
        monthly: 129,
        annual: 99,
        unit: 'per workshop / month',
        annualNote: 'Save $360 billed annually',
      },
      features: [
        'Compliance & Statutory Reporting',
        'Service Scheduling & Interval Reminders',
        'Workshop Workflow & Job Allocation',
        'Audit & Inspection 1-Click Packs',
        'Digital Prestart Inspection Forms',
        'Automated Toll & Fine Reconciliation',
      ],
      detailPath: '/pricing/chm',
    },
    {
      id: 'hirecar-marketplace',
      name: 'HireCar Marketplace',
      subtitle: 'Vehicle Rental Marketplace',
      tagline: 'Direct booking engine, live telematics verification, and automated rental desk.',
      icon: Car,
      accentColor: 'pink',
      badgeColor: 'text-pink-600 bg-pink-50 border-pink-200',
      btnColor: 'bg-pink-600 hover:bg-pink-700 text-white',
      pricing: {
        monthly: 179,
        annual: 139,
        unit: 'per fleet / month',
        annualNote: 'Save $480 billed annually',
      },
      features: [
        'Vehicle Listing & Direct Booking Engine',
        'Payment & Automated Bond Pre-Auth',
        'Customer Management & ID Verification',
        'Operator Tools & Fleet Availability Matrix',
        '0% Broker Commission on Direct Bookings',
        'Smart Lockbox & Mobile Key Handover',
      ],
      detailPath: '/pricing/hirecar-marketplace',
    },
    {
      id: 'australia-fleet-tracking',
      name: 'Australia Fleet Tracking',
      subtitle: 'Real-Time Fleet Tracking',
      tagline: 'High-precision 4G/5G and satellite telematics with live CAN bus engine diagnostics.',
      icon: Navigation,
      accentColor: 'emerald',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      pricing: {
        monthly: 29,
        annual: 22,
        unit: 'per vehicle / month',
        annualNote: 'Save 20% billed annually',
      },
      features: [
        'Live GPS Tracking (10-Sec High Frequency)',
        'Geofencing & Immediate Out-of-Bounds Alerts',
        'Driver Behaviour & Harsh Event Monitoring',
        'Fleet Analytics, Fuel & Idle Reports',
        'Live OBD-II / J1939 Engine Diagnostics',
        'Hardware Unit Included with Zero Upfront Cost',
      ],
      detailPath: '/pricing/australia-fleet-tracking',
    },
  ];

  // Pricing FAQs
  const pricingFaqs = [
    {
      q: 'Are there any hidden setup fees or locked-in long-term contracts?',
      a: 'No. All Techtonika plans are completely transparent with no hidden setup fees. Monthly plans can be canceled anytime with 30 days notice. Annual plans include a 20% discount upfront with price protection.',
    },
    {
      q: 'Can I combine multiple Techtonika products into a single package?',
      a: 'Yes! Many of our clients connect Australia Fleet Tracking directly with WRMS Pro and CHM for automated maintenance dispatching. Multi-product bundle discounts are available through our sales team.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get full access to all features for 14 days with no credit card required upfront. Our technical team will assist you with sample data setup and workflow configuration during your trial period.',
    },
    {
      q: 'Do you offer on-site installation and data migration assistance?',
      a: 'Yes. Our Australian technical services team provides dedicated data migration from legacy CMMS, DMS, and spreadsheets, along with hardware installation for vehicle telematics nationwide.',
    },
  ];

  return (
    <div className="bg-[#fcfdfd] text-slate-800 font-sans min-h-screen">
      {/* =================================================== */}
      {/* HERO SECTION */}
      {/* =================================================== */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20">
            PLANS & PRICING
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4 mb-4 leading-tight">
            Flexible Plans for Every Business
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Choose the right solution, scale as your business grows and select the appropriate
            plan with predictable pricing, transparent features, and dedicated Australian support.
          </p>

          {/* =================================================== */}
          {/* WORKING MONTHLY / ANNUAL TOGGLE */}
          {/* =================================================== */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
            <button
              id="billing-toggle-monthly"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              id="billing-toggle-annual"
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

          <div className="mt-3 text-xs text-slate-400">
            {billingCycle === 'annual' ? (
              <span className="text-emerald-400 font-semibold">
                ✓ Displaying discounted annual pricing with 20% savings applied
              </span>
            ) : (
              <span>Displaying standard month-to-month pricing</span>
            )}
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* 4 PRODUCT PRICING CARDS */}
      {/* =================================================== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {productCards.map((product) => {
              const IconComponent = product.icon;
              const price =
                billingCycle === 'annual'
                  ? product.pricing.annual
                  : product.pricing.monthly;

              return (
                <div
                  key={product.id}
                  id={`card-pricing-${product.id}`}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xl transition-all duration-300 p-6 sm:p-7 relative group"
                >
                  <div>
                    {/* Header: Icon & Product Subtitle */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 group-hover:scale-105 transition-transform shadow-2xs">
                        <IconComponent className="w-6 h-6 text-slate-800" />
                      </div>
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${product.badgeColor}`}
                      >
                        {product.name}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-2">
                      {product.subtitle}
                    </p>
                    <p className="text-[11px] text-slate-500 leading-relaxed min-h-[32px] line-clamp-2">
                      {product.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="my-6 pb-6 border-b border-slate-100">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                        Plans starting from
                      </span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-4xl font-black text-slate-900 tracking-tight">
                          ${price}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          AUD
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {product.pricing.unit}
                      </div>
                      <div className="mt-1 text-[10px] text-slate-400">
                        {billingCycle === 'annual' ? (
                          <span className="text-emerald-600 font-bold">
                            {product.pricing.annualNote}
                          </span>
                        ) : (
                          <span>Billed monthly</span>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 block mb-2">
                        Core Capabilities:
                      </span>
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA: View Plans */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      id={`btn-view-plans-${product.id}`}
                      to={product.detailPath}
                      className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs ${product.btnColor}`}
                    >
                      <span>View Plans</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================== */}
          {/* FIFTH PANEL: NEED A CUSTOM PLAN? */}
          {/* =================================================== */}
          <div
            id="panel-custom-plan"
            className="mt-12 rounded-3xl bg-gradient-to-br from-[#091528] via-[#0e213d] to-[#091528] p-8 sm:p-10 text-white shadow-xl border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-400 text-xs font-bold uppercase tracking-wider border border-white/15 mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Enterprise & Custom Fleets</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Need a Custom Plan?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Get a tailored solution designed specifically for:
              </p>

              {/* Custom Plan Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Enterprise businesses & dealer networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Multi-location operations & depots</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>High-volume commercial fleets</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Custom ERP integrations & compliance rules</span>
                </div>
              </div>
            </div>

            {/* Custom Plan CTA */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
              <Link
                id="btn-contact-sales-custom-plan"
                to="/contact?subject=Custom%20Plan%20Inquiry"
                className="px-7 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:1300000000"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all border border-white/20 inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
                <span>Call 1300 000 000</span>
              </a>
            </div>
          </div>

          {/* =================================================== */}
          {/* QUICK SUMMARY MATRIX */}
          {/* =================================================== */}
          <div className="mt-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Solution Overview
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                At a Glance: Choose the Right Software for Your Business
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 mb-1">WRMS Pro</h4>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Best for mechanical workshops, heavy diesel service centers, and fleet maintenance bays.
                  </p>
                </div>
                <Link
                  to="/pricing/wrms-pro"
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 inline-flex items-center gap-1"
                >
                  <span>Explore WRMS Pro plans</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 mb-1">CHM</h4>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Best for commercial transport, passenger buses, and statutory audit compliance.
                  </p>
                </div>
                <Link
                  to="/pricing/chm"
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                >
                  <span>Explore CHM plans</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 mb-1">HireCar Marketplace</h4>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Best for independent vehicle rental operators and contactless fleet hire businesses.
                  </p>
                </div>
                <Link
                  to="/pricing/hirecar-marketplace"
                  className="text-xs font-bold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1"
                >
                  <span>Explore HireCar plans</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 mb-1">Australia Fleet Tracking</h4>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Best for companies with mobile vehicles, delivery fleets, and remote outback equipment.
                  </p>
                </div>
                <Link
                  to="/pricing/australia-fleet-tracking"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <span>Explore Tracking plans</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================== */}
          {/* PRICING FAQS */}
          {/* =================================================== */}
          <div className="mt-16 bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Got Questions?
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                Frequently Asked Questions about Plans & Pricing
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pricingFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
                >
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
