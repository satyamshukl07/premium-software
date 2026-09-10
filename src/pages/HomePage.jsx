import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  FolderKanban,
  FileCheck,
  Building,
  Wrench,
  Download,
  ChevronRight,
  BarChart,
  Home as HomeIcon,
  Layers,
  FileText,
  Clock,
  BookOpen,
} from 'lucide-react';
import HeroShowcase from '../components/HeroShowcase.jsx';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import MarqueeCompanies from '../components/MarqueeCompanies.jsx';
import MarqueeSectors from '../components/MarqueeSectors.jsx';
import BenefitsAccordion from '../components/BenefitsAccordion.jsx';
import CaseStudySlider from '../components/CaseStudySlider.jsx';
import AwardsGrid from '../components/AwardsGrid.jsx';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import { overdueWorkOrders } from '../data/contentData.js';

export default function HomePage() {
  const [activeTableFilter, setActiveTableFilter] = useState('all');

  return (
    <div className="bg-white text-slate-800">
      {/* ========================================================================= */}
      {/* SECTION 1: 4-PRODUCT / WEBSITE SHOWCASE HERO */}
      {/* ========================================================================= */}
      <HeroShowcase />

      {/* ========================================================================= */}
      {/* SECTION 2: ANNOUNCEMENT BAR (00:01 - 00:02) */}
      {/* ========================================================================= */}
      <AnnouncementBar />

      {/* ========================================================================= */}
      {/* SECTION 4: 4,000+ GLOBAL COMPANIES MARQUEE (00:02 - 00:03) */}
      {/* ========================================================================= */}
      <MarqueeCompanies />

      {/* ========================================================================= */}
      {/* SECTION: THE ALL-IN-ONE CMMS SOLUTION (00:03 - 00:05) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Title & CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
                The all-in-one CMMS solution
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                MEX gives your team every tool to stay organised and efficient, from work orders and asset management to preventive maintenance, inventory control, detailed reporting, and seamless integrations with systems like SAP, Xero, and MYOB.
              </p>
            </div>
            <Link
              id="cta-see-more-mex"
              to="/product/mex-cmms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b1528] text-white font-semibold text-sm hover:bg-[#13233f] transition-all whitespace-nowrap self-start md:self-auto"
            >
              <span>See more about MEX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive All-In-One CMMS Dashboard Table Container */}
          <div className="bg-[#0e1726] rounded-3xl border border-slate-700/60 shadow-2xl overflow-hidden text-white">
            {/* Top Metric Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-6 bg-[#111c2e] border-b border-slate-800">
              <div className="bg-red-600/90 rounded-2xl p-4 text-white shadow-md">
                <span className="text-3xl font-extrabold block">19</span>
                <span className="text-xs font-semibold text-red-100 block mt-1">
                  Overdue Work Orders
                </span>
              </div>

              <div className="bg-amber-600/90 rounded-2xl p-4 text-white shadow-md">
                <span className="text-3xl font-extrabold block">3</span>
                <span className="text-xs font-semibold text-amber-100 block mt-1">
                  High Priority Work Orders
                </span>
              </div>

              <div className="bg-sky-600/90 rounded-2xl p-4 text-white shadow-md">
                <span className="text-3xl font-extrabold block">2</span>
                <span className="text-xs font-semibold text-sky-100 block mt-1">
                  My Work For Today
                </span>
              </div>

              <div className="bg-blue-600/90 rounded-2xl p-4 text-white shadow-md">
                <span className="text-3xl font-extrabold block">6</span>
                <span className="text-xs font-semibold text-blue-100 block mt-1">
                  My Work Orders
                </span>
              </div>
            </div>

            {/* Dashboard Workspace: Sidebar + Overdue Work Orders Table */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left CMMS Navigation Sidebar */}
              <div className="md:col-span-3 bg-[#0a121f] p-4 sm:p-5 border-r border-slate-800 space-y-1 text-xs font-medium">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 cursor-pointer">
                  <HomeIcon className="w-4 h-4 text-slate-400" />
                  <span>Home</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 cursor-pointer">
                  <Layers className="w-4 h-4 text-slate-400" />
                  <span>Assets</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 cursor-pointer font-bold">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-red-500" />
                    <span>Work Orders</span>
                  </div>
                  <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded-full font-mono">
                    19
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 cursor-pointer">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Requests</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 cursor-pointer">
                  <BarChart className="w-4 h-4 text-slate-400" />
                  <span>Readings</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 cursor-pointer">
                  <FolderKanban className="w-4 h-4 text-slate-400" />
                  <span>Insights</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 cursor-pointer">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>Manuals</span>
                </div>
              </div>

              {/* Main Overdue Work Orders Table (Matches Video 00:04 - 00:06) */}
              <div className="md:col-span-9 p-4 sm:p-6 overflow-x-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <h4 className="text-sm font-bold text-slate-100 tracking-tight">
                      Overdue Work Orders
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Showing 10 of 19 records
                  </span>
                </div>

                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                      <th className="py-2.5 px-3 font-semibold">Number</th>
                      <th className="py-2.5 px-3 font-semibold">Description</th>
                      <th className="py-2.5 px-3 font-semibold">Due Start Date Time</th>
                      <th className="py-2.5 px-3 font-semibold">Asset Number</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200 font-normal">
                    {overdueWorkOrders.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-slate-800/40 transition-colors cursor-pointer"
                      >
                        <td className="py-2.5 px-3 font-mono font-semibold text-red-400">
                          {row.number}
                        </td>
                        <td className="py-2.5 px-3 font-medium text-slate-100">
                          {row.description}
                        </td>
                        <td className="py-2.5 px-3 text-slate-400 font-mono text-[11px]">
                          {row.due}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-sky-400 font-semibold">
                          {row.asset}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PRODUCT BENEFITS / FEATURES ACCORDION (00:06 - 00:14) */}
      {/* ========================================================================= */}
      <BenefitsAccordion />

      {/* ========================================================================= */}
      {/* SECTION 5: SOLUTIONS FOR FACILITIES ACROSS SECTORS MARQUEE (00:14 - 00:15) */}
      {/* ========================================================================= */}
      <MarqueeSectors />

      {/* ========================================================================= */}
      {/* SECTION 6: BUILT FOR OPERATIONS, DESIGNED FOR PEOPLE (00:15 - 00:16) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0b1424] via-[#111c2e] to-[#0b1424] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Visual accent */}
            <div className="absolute top-0 right-0 w-96 h-full bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Heading & Testimonial Info (Col 5) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-red-500">
                  Customer Spotlight
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  Built for operations, <br />
                  designed for people
                </h2>

                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="text-base font-bold text-white">Shaun Mills</h4>
                  <p className="text-xs text-slate-400">Maintenance Coordinator, WesTrac</p>
                </div>
              </div>

              {/* Right Column: Visual Machinery Image & Quote (Col 7) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80"
                    alt="Heavy Excavator and Industrial Equipment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm sm:text-base font-semibold text-white italic">
                      "We use MEX to create a work history for audits. It's easy to use and has made my job easier."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <p className="italic max-w-md">
                    "MEX is not just a tool for compliance — it provides the framework that helps us guide and track our plant operations reliably."
                  </p>
                  <Link
                    to="/resources/client-success-stories/westrac"
                    className="font-bold text-red-400 hover:text-red-300 flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: SEE WHAT'S POSSIBLE WITH MEX (00:17 - 00:24) */}
      {/* ========================================================================= */}
      <CaseStudySlider />

      {/* ========================================================================= */}
      {/* SECTION 8: WHITEPAPER PROMO BANNER (00:25) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#0b1320] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#121e33] to-[#0e1726] rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-600 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80"
                  alt="Industrial Worker Helmet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20 inline-block">
                  Featured Executive Whitepaper
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  The Changing of the Guard is Coming — Are You Future Ready?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  We're sharing key insights to help you future-proof your operations and ensure your organisation is ready to navigate the changing workforce dynamics effectively.
                </p>
              </div>
            </div>

            <Link
              id="cta-download-whitepaper"
              to="/resources/whitepapers"
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg whitespace-nowrap active:scale-98 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: RECOGNISED FOR EXCELLENCE (00:26) */}
      {/* ========================================================================= */}
      <AwardsGrid />

      {/* ========================================================================= */}
      {/* SECTION 10: BOTTOM CALL TO ACTION (00:27) */}
      {/* ========================================================================= */}
      <CallToActionBanner />
    </div>
  );
}
