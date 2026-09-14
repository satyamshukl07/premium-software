import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  Users,
  Video,
  Award,
  HelpCircle,
  HelpCircle as FaqIcon,
  Compass,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Headphones,
  Wrench,
  ShieldCheck,
  Car,
  Navigation,
  FolderGit2,
  Code2,
  PlayCircle,
  Layers,
} from 'lucide-react';

export default function ResourcesMegaMenu({ onClose }) {
  // Navigation links for Left Sidebar
  const sidebarNav = [
    { name: 'All Resources', path: '/resources', icon: Compass },
    { name: 'Blog', path: '/resources/blog', icon: BookOpen },
    { name: 'Client Success Stories', path: '/resources/client-success-stories', icon: Users },
    { name: 'Whitepapers', path: '/resources/whitepapers', icon: FileText },
    { name: 'Webinars', path: '/resources/webinars', icon: Video },
    { name: 'Product Guides', path: '/resources/product-guides', icon: Layers },
    { name: 'Training', path: '/resources/training', icon: Award },
    { name: 'Help Centre', path: '/resources/help', icon: HelpCircle },
    { name: 'FAQs', path: '/resources/faqs', icon: FaqIcon },
  ];

  // 4 Featured Resource Cards across 4 Products
  const featuredResources = [
    {
      id: 'blog-wrms',
      type: 'Blog',
      product: 'WRMS Pro',
      productColor: 'text-rose-600 bg-rose-50 border-rose-200',
      badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
      title: 'Eliminating Shop Bottlenecks: How Digital Work Orders Cut Bay Turnaround by 40%',
      description:
        'A practical guide to modernizing mechanical job cards, technician task dispatch, and parts staging for Australian workshops.',
      image:
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      ctaText: 'Read Article',
      path: '/resources/blog/eliminating-shop-bottlenecks',
    },
    {
      id: 'wp-chm',
      type: 'Whitepaper',
      product: 'CHM',
      productColor: 'text-amber-600 bg-amber-50 border-amber-200',
      badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      title: 'The Workshop Compliance Blueprint: NHVR Standards & Digital Bay Audits',
      description:
        'Comprehensive research report on reducing regulatory audit risks, automating statutory safety checklists, and zero-paper record-keeping.',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      ctaText: 'Download',
      path: '/resources/whitepapers',
    },
    {
      id: 'webinar-aft',
      type: 'Webinar',
      product: 'Australia Fleet Tracking',
      productColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      title: 'Real-Time Telematics Masterclass: Live GPS, CAN Bus Diagnostics & Driver Safety',
      description:
        'Watch our telematics specialists demonstrate live geofencing alerts, fuel monitoring, and AI dashcam incident prevention.',
      image:
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
      ctaText: 'Watch Now',
      path: '/resources/webinars',
    },
    {
      id: 'case-hirecar',
      type: 'Client Success Story',
      product: 'HireCar Marketplace',
      productColor: 'text-pink-600 bg-pink-50 border-pink-200',
      badgeColor: 'bg-pink-500/10 text-pink-700 border-pink-500/20',
      title: 'How Apex Mobility Scaled Fleet Utilization to 88% with Direct Digital Bookings',
      description:
        'Discover how an independent 120-vehicle operator eliminated broker commissions and automated customer identity verification.',
      image:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      ctaText: 'Read Case Study',
      path: '/resources/client-success-stories',
    },
  ];

  // 8 Resource Categories
  const resourceCategories = [
    {
      name: 'Blog',
      desc: 'Industry trends & tech updates',
      path: '/resources/blog',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Client Success Stories',
      desc: 'Real-world customer results',
      path: '/resources/client-success-stories',
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      name: 'Whitepapers',
      desc: 'In-depth research & benchmarks',
      path: '/resources/whitepapers',
      icon: FileText,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      name: 'Webinars',
      desc: 'On-demand & live masterclasses',
      path: '/resources/webinars',
      icon: Video,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Product Guides',
      desc: 'Documentation & walk-throughs',
      path: '/resources/product-guides',
      icon: Layers,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      name: 'Training',
      desc: 'Certified courses & workshops',
      path: '/resources/training',
      icon: Award,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      name: 'Help Centre',
      desc: 'Support & troubleshooting',
      path: '/resources/help',
      icon: HelpCircle,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      name: 'FAQs',
      desc: 'Common questions answered',
      path: '/resources/faqs',
      icon: FaqIcon,
      color: 'text-slate-700',
      bgColor: 'bg-slate-100',
    },
  ];

  // Popular Topics
  const popularTopics = [
    { name: 'Workshop Management', path: '/resources?topic=Workshop%20Management' },
    { name: 'Maintenance Management', path: '/resources?topic=Maintenance%20Management' },
    { name: 'Workshop Compliance', path: '/resources?topic=Workshop%20Compliance' },
    { name: 'Fleet Tracking', path: '/resources?topic=Fleet%20Tracking' },
    { name: 'Vehicle Rentals', path: '/resources?topic=Vehicle%20Rentals' },
    { name: 'Fleet Management', path: '/resources?topic=Fleet%20Management' },
    { name: 'Integrations', path: '/resources?topic=Integrations' },
    { name: 'API Documentation', path: '/resources/help?topic=api' },
    { name: 'User Guides', path: '/resources/product-guides' },
    { name: 'Video Tutorials', path: '/resources/webinars' },
  ];

  return (
    <div
      id="dropdown-resources"
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* =================================================== */}
          {/* LEFT SIDEBAR */}
          {/* =================================================== */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 block mb-1.5">
                RESOURCES
              </span>
              <h3 className="text-xl xl:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                Knowledge for a<br />
                Smarter Automotive<br />
                Tomorrow
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">
                Techtonika provides insights, guides, expert knowledge and resources to help
                customers get more from its automotive solutions.
              </p>

              {/* Sidebar Navigation */}
              <div className="space-y-1">
                {sidebarNav.map((item) => {
                  const NavIcon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={onClose}
                      className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-rose-600 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <NavIcon className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Help Banner */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                to="/resources/help"
                onClick={onClose}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-rose-50/70 border border-slate-200/80 hover:border-rose-300 transition-all duration-150"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform shadow-2xs">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 block leading-tight">
                      Need help?
                    </span>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      Visit our Help Centre &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* =================================================== */}
          {/* MAIN AREA */}
          {/* =================================================== */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              {/* Header: FEATURED RESOURCES & View all resources link */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    FEATURED RESOURCES
                  </span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                    4 Highlights
                  </span>
                </div>
                <Link
                  to="/resources"
                  onClick={onClose}
                  className="text-xs font-bold text-slate-700 hover:text-rose-600 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>View all resources</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* 4 Featured Resource Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-4">
                {featuredResources.map((card) => (
                  <div
                    key={card.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-200 overflow-hidden"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-28 w-full overflow-hidden bg-slate-900">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md bg-white/95 text-slate-900 shadow-xs">
                            {card.type}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2.5">
                          <span
                            className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold border ${card.productColor} backdrop-blur-xs shadow-2xs`}
                          >
                            {card.product}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h4 className="text-xs font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2 leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="p-4 pt-0">
                      <Link
                        to={card.path}
                        onClick={onClose}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-rose-600 text-white transition-all shadow-xs group-hover:shadow-md"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================== */}
            {/* RESOURCE CATEGORIES */}
            {/* =================================================== */}
            <div className="border-t border-slate-100 pt-4 mt-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  RESOURCE CATEGORIES
                </span>
                <Link
                  to="/resources"
                  onClick={onClose}
                  className="text-[11px] font-semibold text-slate-500 hover:text-rose-600 transition-colors"
                >
                  Explore directory &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {resourceCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      onClick={onClose}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-rose-50/80 border border-slate-100 hover:border-rose-200 transition-all duration-150 group"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg ${cat.bgColor} flex items-center justify-center ${cat.color} group-hover:scale-105 transition-transform flex-shrink-0 shadow-2xs`}
                      >
                        <CatIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors block truncate">
                          {cat.name}
                        </span>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {cat.desc}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* =================================================== */}
            {/* POPULAR TOPICS */}
            {/* =================================================== */}
            <div className="border-t border-slate-100 pt-3.5 mt-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mr-1">
                  POPULAR TOPICS:
                </span>
                {popularTopics.map((topic) => (
                  <Link
                    key={topic.name}
                    to={topic.path}
                    onClick={onClose}
                    className="inline-flex items-center text-[11px] font-semibold text-slate-600 hover:text-rose-600 bg-slate-100 hover:bg-rose-50 px-2.5 py-1 rounded-lg border border-transparent hover:border-rose-200 transition-colors"
                  >
                    {topic.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
