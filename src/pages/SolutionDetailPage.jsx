import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Users,
  Layers,
  ArrowLeft,
  Clock,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { getSolutionDetail, solutionDetails } from '../data/solutionDetails.js';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import TrialModal from '../components/TrialModal.jsx';
import SpecialistModal from '../components/SpecialistModal.jsx';

export default function SolutionDetailPage() {
  const { category, slug: routeSlug } = useParams();
  const navigate = useNavigate();

  // If slug is in category param (e.g. /solutions/:slug or /product/:slug)
  const slug = routeSlug || category || 'mex-overview';
  const data = getSolutionDetail(slug) || getSolutionDetail('mex-overview');

  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [specialistModalOpen, setSpecialistModalOpen] = useState(false);

  // Derive related solutions within the same product category
  const relatedItems = Object.entries(solutionDetails)
    .filter(([key, val]) => {
      if (val.redirect) return false;
      if (key === slug) return false;
      return val.category === data.category;
    })
    .slice(0, 3);

  // Accent styling
  const accentColor = data.accentColor || '#dc2626';
  const badgeColor = data.badgeColor || 'bg-red-500/10 text-red-400 border-red-500/20';

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen">
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#070c16] border-b border-slate-800/80 text-xs py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300 font-medium">{data.category || "Solutions"}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold truncate max-w-xs">{data.title}</span>
        </div>
      </div>

      {/* Hero Section (Matching MEX Overview and MEX Apps from reference recording) */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle Background Glow Accent */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-6">
            {/* Category / Tag Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{data.tag || data.category}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
              {data.title}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-snug">
              {data.subtitle}
            </p>

            {/* Key Descriptive Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {data.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => setTrialModalOpen(true)}
                className="px-6 py-3.5 rounded-full font-bold text-sm text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: accentColor }}
              >
                Try {data.title} Free
              </button>

              <button
                type="button"
                onClick={() => setSpecialistModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all active:scale-[0.98]"
              >
                Talk to a Specialist
              </button>

              {data.websiteUrl && (
                <a
                  href={data.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs sm:text-sm border border-slate-800 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Section (Split Columns matching MEX Reference Layout) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Key Highlights & Bullets (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <span
                className="text-xs font-extrabold uppercase tracking-wider block"
                style={{ color: accentColor }}
              >
                Key Operational Benefits
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed to deliver tangible results on day one
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {data.overview || data.description}
              </p>

              {/* Bullet Points with Checkmarks */}
              <div className="space-y-3.5 pt-2">
                {(data.bullets || []).map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className="p-1 rounded-full flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats Box (Matching Reference Cards) */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block">
                    {data.stat1 || "Real-time"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {data.stat1Label || "Instant Operational Sync"}
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block">
                    {data.stat2 || "100%"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {data.stat2Label || "Reliability & Compliance"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Mockup Showcase (Col 6) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 h-80 sm:h-96 group">
                <img
                  src={data.photoUrl || data.image}
                  alt={data.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    if (data.image && e.currentTarget.src !== data.image) {
                      e.currentTarget.src = data.image;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <span
                      className="text-xs uppercase font-mono tracking-widest block mb-1 font-bold"
                      style={{ color: accentColor }}
                    >
                      {data.category} ENTERPRISE SUITE
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold">{data.title} in Action</h4>
                    <p className="text-slate-300 text-xs mt-1 max-w-md hidden sm:block">
                      Enterprise-grade reliability built specifically for Australian operations and compliance standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solved & Who It's For Section */}
      {(data.problemSolved || data.whoItsFor) && (
        <section className="py-14 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.problemSolved && (
                <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 inline-block mb-3">
                    Problem It Solves
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Overcoming Operational Bottlenecks
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {data.problemSolved}
                  </p>
                </div>
              )}

              {data.whoItsFor && (
                <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                    Who It's For
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Built for Key Decision Makers
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {data.whoItsFor}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* How It Works (3 Steps) */}
      {data.howItWorks && data.howItWorks.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 inline-block mb-3">
                Simple Implementation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How It Works in Your Operation
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.howItWorks.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between"
                >
                  <div>
                    <span
                      className="text-3xl font-black block mb-3 opacity-80"
                      style={{ color: accentColor }}
                    >
                      {step.step}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Feature Breakdown Grid */}
      {data.features && data.features.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#0a101f] text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-3"
                style={{
                  backgroundColor: `${accentColor}20`,
                  color: accentColor,
                  borderColor: `${accentColor}40`,
                }}
              >
                Comprehensive Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Core Feature Highlights
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-lg"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold"
                    style={{ backgroundColor: accentColor }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{feat.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Solutions Navigation */}
      {relatedItems.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Explore More
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Other Solutions in {data.category}
                </h3>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Homepage</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedItems.map(([relSlug, relData]) => (
                <Link
                  key={relSlug}
                  to={`/solutions/${relSlug}`}
                  className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      {relData.tag || relData.category}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {relData.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {relData.subtitle || relData.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600">
                    <span>View solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global Call to Action Banner */}
      <CallToActionBanner />

      {/* Free Trial Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        defaultProductName={data.title}
      />

      {/* Specialist Modal */}
      <SpecialistModal
        isOpen={specialistModalOpen}
        onClose={() => setSpecialistModalOpen(false)}
        defaultProduct={data.title}
      />
    </div>
  );
}
