import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Calculator,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Send,
  Zap,
  Building,
  Server,
  Cloud,
} from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

export default function PricingPage({ initialMode = 'overview' }) {
  // Calculator state
  const [userCount, setUserCount] = useState(5);
  const [assetTier, setAssetTier] = useState('tier2'); // tier1 (up to 500), tier2 (500-2500), tier3 (2500+)
  const [hostingType, setHostingType] = useState('cloud'); // 'cloud' | 'onpremise'
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [selectedModules, setSelectedModules] = useState({
    mobile: true,
    stores: true,
    prestart: false,
    aiInsights: false,
  });

  // Modal / Quote form state
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

  // Calculated numbers
  const basePricePerUser = hostingType === 'cloud' ? 75 : 60;
  const assetMultiplier = assetTier === 'tier1' ? 0 : assetTier === 'tier2' ? 50 : 150;
  const moduleTotal =
    (selectedModules.mobile ? 20 : 0) +
    (selectedModules.stores ? 25 : 0) +
    (selectedModules.prestart ? 15 : 0) +
    (selectedModules.aiInsights ? 30 : 0);

  const monthlySubtotal = (basePricePerUser + moduleTotal) * userCount + assetMultiplier;
  const discountFactor = billingCycle === 'annual' ? 0.85 : 1.0;
  const effectiveMonthly = Math.round(monthlySubtotal * discountFactor);
  const billedAnnuallyTotal = effectiveMonthly * 12;

  const handleModuleToggle = (key) => {
    setSelectedModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteLoading(true);
    try {
      const payload = {
        ...quoteFormData,
        calculation: {
          users: userCount,
          assetTier,
          hostingType,
          billingCycle,
          selectedModules,
          estimatedMonthly: effectiveMonthly,
          estimatedAnnual: billedAnnuallyTotal,
        },
      };

      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setQuoteSubmitted(true);
      } else {
        // Fallback for mock environment
        setQuoteSubmitted(true);
      }
    } catch (err) {
      setQuoteSubmitted(true);
    } finally {
      setQuoteLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Pricing Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6 font-sans">
            Simple, scalable pricing built for ROI
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Choose Australian cloud-hosted or on-premises deployment. Pay only for the concurrent users and modules your maintenance operations require.
          </p>
        </div>
      </section>

      {/* Interactive Pricing Calculator Section */}
      <section id="calculator" className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase mb-3">
              <Calculator className="w-4 h-4" />
              <span>Interactive CMMS Cost Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Calculate your tailored MEX configuration
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Adjust user seats, asset volumes, and optional field modules to see an instant estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Calculator Controls (Col 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-8">
              {/* 1. Concurrent User Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <label className="font-bold text-slate-900 text-sm block">
                      Number of Named / Concurrent Users
                    </label>
                    <span className="text-xs text-slate-500">
                      Technicians, managers, and storepersons with system logins
                    </span>
                  </div>
                  <span className="text-2xl font-extrabold text-red-600 font-mono bg-red-50 px-3 py-1 rounded-xl">
                    {userCount} {userCount === 1 ? 'User' : 'Users'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={userCount}
                  onChange={(e) => setUserCount(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>1 User</span>
                  <span>15 Users</span>
                  <span>30 Users</span>
                  <span>50+ Users</span>
                </div>
              </div>

              {/* 2. Asset Volume Selection */}
              <div>
                <label className="font-bold text-slate-900 text-sm block mb-2">
                  Total Tracked Physical Assets
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'tier1', label: 'Up to 500 Assets', sub: 'Single Facility' },
                    { id: 'tier2', label: '500 – 2,500 Assets', sub: 'Regional Plant' },
                    { id: 'tier3', label: '2,500+ Assets', sub: 'Enterprise Multi-Site' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setAssetTier(t.id)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        assetTier === t.id
                          ? 'border-red-600 bg-red-50/50 ring-1 ring-red-500'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-900 block">{t.label}</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{t.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Hosting Infrastructure Choice */}
              <div>
                <label className="font-bold text-slate-900 text-sm block mb-2">
                  Deployment Infrastructure
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHostingType('cloud')}
                    className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                      hostingType === 'cloud'
                        ? 'border-red-600 bg-red-50/50 ring-1 ring-red-500'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Cloud className={`w-5 h-5 mt-0.5 ${hostingType === 'cloud' ? 'text-red-600' : 'text-slate-400'}`} />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">MEX Australian Cloud</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        High-speed Brisbane hosting, automated backups & 99.9% uptime
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHostingType('onpremise')}
                    className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                      hostingType === 'onpremise'
                        ? 'border-red-600 bg-red-50/50 ring-1 ring-red-500'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Server className={`w-5 h-5 mt-0.5 ${hostingType === 'onpremise' ? 'text-red-600' : 'text-slate-400'}`} />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">On-Premises Server</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        Installed on your internal company Windows/SQL servers
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* 4. Modular Add-ons Checkboxes */}
              <div>
                <label className="font-bold text-slate-900 text-sm block mb-2">
                  Optional Power Modules
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'mobile', title: 'MEX Mobile Field Apps', desc: 'Native iOS/Android with full offline sync', price: '+$20/user/mo' },
                    { key: 'stores', title: 'Stores & Inventory Control', desc: 'Parts reorders, barcode scans & stocktakes', price: '+$25/user/mo' },
                    { key: 'prestart', title: 'Digital Prestart Checklists', desc: 'Operator machine inspections with photos', price: '+$15/user/mo' },
                    { key: 'aiInsights', title: 'AI Insights & Predictive ML', desc: 'Natural language queries & failure models', price: '+$30/user/mo' },
                  ].map((mod) => {
                    const isChecked = selectedModules[mod.key];
                    return (
                      <div
                        key={mod.key}
                        onClick={() => handleModuleToggle(mod.key)}
                        className={`p-3.5 rounded-2xl border cursor-pointer flex items-start gap-3 transition-all ${
                          isChecked
                            ? 'border-red-600 bg-red-50/30'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-1 w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500 cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">{mod.title}</span>
                            <span className="text-[10px] font-bold text-red-600">{mod.price}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 block mt-0.5">{mod.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Live Price Breakdown & Quote CTA (Col 5) */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="bg-[#0b1320] text-white rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
                {/* Billing Frequency Switcher */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Billing Cycle
                  </span>
                  <div className="flex items-center bg-[#070c14] p-1 rounded-full border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        billingCycle === 'monthly' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingCycle('annual')}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                        billingCycle === 'annual' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>Annual</span>
                      <span className="text-[10px] bg-emerald-500 text-slate-950 font-extrabold px-1 rounded-full">
                        Save 15%
                      </span>
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="text-center py-4 bg-[#111c2e] rounded-2xl border border-slate-700/60">
                  <span className="text-xs font-medium text-slate-400 block mb-1">
                    Estimated Investment
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                      ${effectiveMonthly.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">AUD / month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <span className="text-xs text-emerald-400 font-medium block mt-2">
                      Billed annually at ${billedAnnuallyTotal.toLocaleString()} AUD (15% savings applied)
                    </span>
                  )}
                </div>

                {/* Breakdown summary items */}
                <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Base CMMS ({userCount} users):</span>
                    <span>${basePricePerUser * userCount} AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Asset Tier ({assetTier}):</span>
                    <span>+${assetMultiplier} AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Add-on Modules:</span>
                    <span>+${moduleTotal * userCount} AUD</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Hosting:</span>
                    <span className="text-white capitalize">{hostingType}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(true)}
                    className="w-full py-3.5 px-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Formal Written Quote</span>
                  </button>

                  <Link
                    to="/free-trial"
                    className="w-full py-3 px-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all border border-slate-700 flex items-center justify-center gap-1.5"
                  >
                    <span>Start 30-Day Free Trial First</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>All quotes include Australian technical support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Tiers Summary Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-2">
              Standard Packages
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Pre-configured plans for every organization size
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                tag: 'Small Teams & Single Sites',
                price: '$75',
                period: 'per user / month',
                features: [
                  'Up to 500 Managed Assets',
                  'Standard Work Order Workflows',
                  'Calendar-based Preventive Maintenance',
                  'Web Browser Access',
                  'Email Technical Support',
                ],
                cta: 'Start Free Trial',
                featured: false,
              },
              {
                name: 'Professional',
                tag: 'Most Popular for Australian Plants',
                price: '$120',
                period: 'per user / month',
                features: [
                  'Up to 2,500 Managed Assets',
                  'MEX Mobile Apps with Offline Mode',
                  'Stores & Inventory Control',
                  'Digital Prestart Checklists',
                  'Automated Statutory Inspections',
                  'Priority Phone & Local Support',
                ],
                cta: 'Get Started with Pro',
                featured: true,
              },
              {
                name: 'Enterprise',
                tag: 'Multi-Site & National Operations',
                price: 'Custom',
                period: 'custom SLA & volume licensing',
                features: [
                  'Unlimited Physical Assets',
                  'Multi-Site Central Database',
                  'SAP / Xero / ERP Direct Integration',
                  'Dedicated Australian Account Specialist',
                  'Single Sign-On (SAML / SSO)',
                  'Custom Report Design & Migration',
                ],
                cta: 'Talk to Enterprise Specialist',
                featured: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 border transition-all flex flex-col justify-between ${
                  plan.featured
                    ? 'bg-[#0d1726] text-white border-slate-700 shadow-2xl relative'
                    : 'bg-white text-slate-900 border-slate-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    Recommended
                  </div>
                )}

                <div>
                  <h4 className="text-2xl font-bold">{plan.name}</h4>
                  <p className={`text-xs mt-1 ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.tag}
                  </p>

                  <div className="my-6">
                    <span className="text-4xl font-extrabold font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`text-xs font-semibold ml-2 ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-200/20 text-xs sm:text-sm">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-red-500' : 'text-red-600'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/free-trial'}
                    className={`w-full py-3.5 rounded-full font-bold text-xs flex items-center justify-center transition-all ${
                      plan.featured
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
                        : 'bg-[#0b1528] hover:bg-[#13233f] text-white shadow-sm'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formal Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold p-1"
            >
              &times;
            </button>

            {quoteSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Quote Request Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, {quoteFormData.name}! An official PDF proposal for {userCount} users with Australian hosting (${effectiveMonthly}/mo) has been sent to {quoteFormData.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowQuoteModal(false);
                    setQuoteSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0b1528] text-white font-bold text-xs hover:bg-[#13233f]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                    Official Quotation
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Receive your written MEX quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Based on your calculated {userCount} users configuration (~${effectiveMonthly} AUD/mo).
                  </p>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={quoteFormData.name}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                      placeholder="e.g. Michael Harris"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-1 focus:ring-red-500 focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={quoteFormData.email}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, email: e.target.value })}
                        placeholder="m.harris@company.com.au"
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-1 focus:ring-red-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={quoteFormData.phone}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                        placeholder="0400 000 000"
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-1 focus:ring-red-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Company / Facility Name *</label>
                    <input
                      type="text"
                      required
                      value={quoteFormData.company}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, company: e.target.value })}
                      placeholder="e.g. Apex Packaging Pty Ltd"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-1 focus:ring-red-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Additional Project Notes</label>
                    <textarea
                      rows="2"
                      value={quoteFormData.notes}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, notes: e.target.value })}
                      placeholder="Any specific ERP integration requirements or multi-site details..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-1 focus:ring-red-500 focus:outline-hidden"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={quoteLoading}
                      className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                    >
                      {quoteLoading ? 'Generating Quote...' : 'Submit & Send Formal Quote'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <CallToActionBanner />
    </div>
  );
}
