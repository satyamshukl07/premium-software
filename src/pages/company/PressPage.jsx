import React from 'react';
import { Newspaper, Download, Mail, ExternalLink, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'September 2, 2026',
      title: 'Techtonika Automotive Solutions Unveils Unified Fleet & Workshop Platform Across Australia',
      summary: 'Advanced Systems consolidates MEX CMMS, CHM, HireCar Marketplace, and Australia Fleet Tracking to eliminate operational silos between maintenance bays, rental counters, and active road telematics.',
      category: 'Corporate Announcement',
      readTime: '4 min read',
    },
    {
      date: 'July 14, 2026',
      title: 'Australia Fleet Tracking Achieves 99.9% Telematics Uptime Certification for Remote Mining Fleets',
      summary: 'New satellite failover hardware guarantees uninterrupted vehicle location, driver prestart diagnostics, and duress alerts across Western Australia and Queensland outback corridors.',
      category: 'Product Milestone',
      readTime: '3 min read',
    },
    {
      date: 'May 28, 2026',
      title: 'HireCar Marketplace Surpasses 5,000 Verified Australian Rental Vehicles Listed',
      summary: 'Independent fleet operators across capital cities and regional tourist hubs report a 32% increase in direct booking margins compared to traditional overseas aggregators.',
      category: 'Market Growth',
      readTime: '5 min read',
    },
    {
      date: 'March 11, 2026',
      title: 'MEX v16 CMMS Named 2026 Category Leader by Capterra & GetApp',
      summary: 'Recognized for outstanding user satisfaction, comprehensive asset hierarchies, and enterprise mobile adoption in heavy industrial engineering and transportation.',
      category: 'Industry Recognition',
      readTime: '3 min read',
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Newsroom & Media
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Press Releases, Media & Company News
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Stay up to date with product launches, strategic milestones, and industry innovations from Techtonika Automotive Solutions.
          </p>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: News List (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Recent Announcements</h2>
              {pressReleases.map((release) => (
                <article
                  key={release.title}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-100">
                      {release.category}
                    </span>
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {release.date}
                    </span>
                    <span className="text-slate-400">• {release.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                    {release.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{release.summary}</p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer">
                      Read Full Release <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Col: Media Kit & Inquiries (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Media Contact Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" /> Media & PR Enquiries
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Journalists, analysts, and automotive media outlets are welcome to reach out to our communications office for interviews, photography, and commentary.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl space-y-1 text-xs border border-slate-100">
                  <span className="text-slate-400 block font-medium">Head of Communications</span>
                  <p className="font-bold text-slate-900">media@techtonika.com</p>
                  <p className="text-slate-600">+61 7 3392 4777</p>
                </div>
              </div>

              {/* Brand Kit Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-600" /> Official Media Kit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Download high-resolution vector logos, executive headshots, product screenshots, and brand usage guidelines.
                </p>
                <button
                  type="button"
                  onClick={() => alert('Media kit package download initiated.')}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download Brand Assets (.ZIP)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Looking for automotive software expertise for your story?"
        subtitle="Our leadership team frequently contributes commentary on fleet safety, electric vehicle transition, and predictive maintenance."
      />
    </div>
  );
}
