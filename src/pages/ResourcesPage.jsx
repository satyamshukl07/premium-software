import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  Search,
  ChevronRight,
  Headphones,
  Wrench,
  ShieldCheck,
  Car,
  Navigation,
  Download,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
  Clock,
  ExternalLink,
  Info,
} from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

export default function ResourcesPage({ defaultFilter = 'all' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get('product') || 'all';
  const topicParam = searchParams.get('topic') || '';
  const typeParam = searchParams.get('type') || defaultFilter;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(productParam);
  const [selectedTopic, setSelectedTopic] = useState(topicParam);
  const [selectedType, setSelectedType] = useState(typeParam);

  // Synchronize state with URL parameters
  useEffect(() => {
    if (searchParams.get('product')) {
      setSelectedProduct(searchParams.get('product'));
    }
    if (searchParams.get('topic')) {
      setSelectedTopic(searchParams.get('topic'));
    }
    if (searchParams.get('type')) {
      setSelectedType(searchParams.get('type'));
    }
  }, [searchParams]);

  // Product Filter Definitions
  const products = [
    { id: 'all', name: 'All Products', label: 'Complete Ecosystem' },
    { id: 'wrms-pro', name: 'WRMS Pro', label: 'Workshop Management' },
    { id: 'chm', name: 'CHM', label: 'Workshop Compliance' },
    { id: 'hirecar', name: 'HireCar Marketplace', label: 'Vehicle Rentals' },
    { id: 'fleet-tracking', name: 'Australia Fleet Tracking', label: 'Live Telematics' },
  ];

  // Left Sidebar Navigation
  const sidebarNav = [
    { name: 'All Resources', path: '/resources', id: 'all', icon: Compass },
    { name: 'Blog', path: '/resources/blog', id: 'blog', icon: BookOpen },
    { name: 'Client Success Stories', path: '/resources/client-success-stories', id: 'case-studies', icon: Users },
    { name: 'Whitepapers', path: '/resources/whitepapers', id: 'whitepapers', icon: FileText },
    { name: 'Webinars', path: '/resources/webinars', id: 'webinars', icon: Video },
    { name: 'Product Guides', path: '/resources/product-guides', id: 'guides', icon: Layers },
    { name: 'Training', path: '/resources/training', id: 'training', icon: Award },
    { name: 'Help Centre', path: '/resources/help', id: 'help', icon: HelpCircle },
    { name: 'FAQs', path: '/resources/faqs', id: 'faqs', icon: FaqIcon },
  ];

  // Featured Resources representing ALL FOUR PRODUCTS
  const featuredResources = [
    {
      id: 'feat-wrms-1',
      productKey: 'wrms-pro',
      productName: 'WRMS Pro',
      productBadgeStyle: 'bg-blue-50 text-blue-700 border-blue-200',
      type: 'Blog Article',
      title: 'Eliminating Shop Bottlenecks: How Digital Work Orders Cut Bay Turnaround by 40%',
      description:
        'A practical framework for replacing lost paper clipboards with digital technician task dispatching, labor clocking, and automated parts staging.',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Read Article',
      path: '/resources/blog/eliminating-shop-bottlenecks',
      date: 'September 2026',
      readTime: '6 min read',
    },
    {
      id: 'feat-chm-1',
      productKey: 'chm',
      productName: 'CHM',
      productBadgeStyle: 'bg-amber-50 text-amber-700 border-amber-200',
      type: 'Executive Whitepaper',
      title: 'The Workshop Compliance Blueprint: NHVR Standards & Digital Bay Audits',
      description:
        'Comprehensive regulatory guide on eliminating statutory paper logbooks, standardizing torque and brake checklists, and achieving 100% audit pass rates.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Download Whitepaper',
      path: '/resources/whitepapers',
      date: 'August 2026',
      readTime: '24 pages',
    },
    {
      id: 'feat-hirecar-1',
      productKey: 'hirecar',
      productName: 'HireCar Marketplace',
      productBadgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      type: 'Client Success Story',
      title: 'How Apex Mobility Scaled Fleet Utilization to 88% with Direct Digital Bookings',
      description:
        'Discover how an independent 120-vehicle rental operator eliminated 22% broker commissions, introduced automated digital bonds, and scaled regional revenue.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Read Case Study',
      path: '/resources/client-success-stories',
      date: 'July 2026',
      readTime: '5 min read',
    },
    {
      id: 'feat-fleet-1',
      productKey: 'fleet-tracking',
      productName: 'Australia Fleet Tracking',
      productBadgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      type: 'Video Masterclass',
      title: 'Real-Time Telematics Masterclass: Live GPS, CAN Bus Diagnostics & Driver Safety',
      description:
        'Watch telematics specialists demonstrate dual-satellite failover, instant fault code escalation, geofenced alerts, and harsh braking scorecards.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Watch Webinar',
      path: '/resources/webinars',
      date: 'On-Demand',
      readTime: '48 mins',
    },
    {
      id: 'feat-wrms-2',
      productKey: 'wrms-pro',
      productName: 'WRMS Pro',
      productBadgeStyle: 'bg-blue-50 text-blue-700 border-blue-200',
      type: 'Product Guide',
      title: 'Workshop Job Card Scheduling & Bay Workload Balancing Playbook',
      description:
        'Step-by-step reference for setting labor rate tiers, establishing inventory re-order points, and automating customer SMS approval workflows.',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
      ctaText: 'View Guide',
      path: '/resources/product-guides',
      date: 'Updated 2026',
      readTime: '36 pages',
    },
    {
      id: 'feat-fleet-2',
      productKey: 'fleet-tracking',
      productName: 'Australia Fleet Tracking',
      productBadgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      type: 'Technical Whitepaper',
      title: 'CAN Bus Telemetry & Predictive Maintenance: The ROI of Condition Monitoring',
      description:
        'Financial analysis of downtime prevention: connecting live engine hours and diagnostic trouble codes (DTC) directly to automated workshop job cards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Download Whitepaper',
      path: '/resources/whitepapers',
      date: 'August 2026',
      readTime: '22 pages',
    },
  ];

  // 8 Resource Categories
  const resourceCategories = [
    {
      name: 'Blog',
      desc: 'Industry trends, expert insights & maintenance best practices.',
      path: '/resources/blog',
      icon: BookOpen,
      count: '18+ Articles',
      cta: 'Read Articles',
    },
    {
      name: 'Client Success Stories',
      desc: 'Real-world customer outcomes, verified ROI metrics & case studies.',
      path: '/resources/client-success-stories',
      icon: Users,
      count: '12+ Case Studies',
      cta: 'View Stories',
    },
    {
      name: 'Whitepapers',
      desc: 'In-depth research, financial models & engineering benchmarks.',
      path: '/resources/whitepapers',
      icon: FileText,
      count: '6 Reports',
      cta: 'Download Whitepapers',
    },
    {
      name: 'Webinars',
      desc: 'Live masterclasses, software demonstrations & on-demand video.',
      path: '/resources/webinars',
      icon: Video,
      count: '9 Sessions',
      cta: 'Watch Webinars',
    },
    {
      name: 'Product Guides',
      desc: 'Step-by-step documentation, admin manuals & walk-throughs.',
      path: '/resources/product-guides',
      icon: Layers,
      count: '15+ Guides',
      cta: 'Explore Guides',
    },
    {
      name: 'Training',
      desc: 'Certified courses, operator onboarding & administrator workshops.',
      path: '/resources/training',
      icon: Award,
      count: 'Live & Online',
      cta: 'Find Training',
    },
    {
      name: 'Help Centre',
      desc: '24/7 knowledge base, setup articles & technical troubleshooting.',
      path: '/resources/help',
      icon: HelpCircle,
      count: 'Knowledge Base',
      cta: 'Visit Help Centre',
    },
    {
      name: 'FAQs',
      desc: 'Instant answers to common platform, pricing & integration questions.',
      path: '/resources/faqs',
      icon: FaqIcon,
      count: 'Common Answers',
      cta: 'Browse FAQs',
    },
  ];

  // Popular Topics (matching prompt requirement 10)
  const popularTopics = [
    'Workshop Management',
    'Maintenance Management',
    'Workshop Compliance',
    'Fleet Tracking',
    'Vehicle Rentals',
    'Fleet Management',
    'Vehicle Bookings',
    'Driver Safety',
    'Inventory Management',
    'Scheduling',
    'Integrations',
    'API Documentation',
    'User Guides',
    'Video Tutorials',
  ];

  // Comprehensive Catalog of Knowledge Items across all four products
  const catalogResources = [
    {
      id: 'cat-1',
      title: 'Eliminating Shop Bottlenecks: How Digital Work Orders Cut Bay Turnaround by 40%',
      type: 'Blog',
      formatKey: 'blog',
      productKey: 'wrms-pro',
      productName: 'WRMS Pro',
      topic: 'Workshop Management',
      summary: 'Practical guide to standardizing mechanical job cards, technician task dispatching, and parts staging for Australian workshops.',
      path: '/resources/blog/eliminating-shop-bottlenecks',
      cta: 'Read Article',
      date: 'September 2026',
    },
    {
      id: 'cat-2',
      title: 'The Hard ROI of Integrated Fleet Telematics & Preventative Servicing',
      type: 'Whitepaper',
      formatKey: 'whitepapers',
      productKey: 'fleet-tracking',
      productName: 'Australia Fleet Tracking',
      topic: 'Fleet Tracking',
      summary: 'An executive analysis of downtime reduction, insurance risk profiles, and preventative servicing payback periods.',
      path: '/resources/whitepapers',
      cta: 'Download Whitepaper',
      date: 'August 2026',
    },
    {
      id: 'cat-3',
      title: 'Real-Time Telematics Masterclass: Live GPS, CAN Bus Diagnostics & Driver Safety',
      type: 'Webinar',
      formatKey: 'webinars',
      productKey: 'fleet-tracking',
      productName: 'Australia Fleet Tracking',
      topic: 'Driver Safety',
      summary: 'Expert walkthrough of satellite failover, instant harsh braking triage, and geofencing automated triggers.',
      path: '/resources/webinars',
      cta: 'Watch Webinar',
      date: 'On-Demand',
    },
    {
      id: 'cat-4',
      title: 'How Apex Mobility Scaled Fleet Utilization to 88% with Direct Bookings',
      type: 'Client Success Story',
      formatKey: 'case-studies',
      productKey: 'hirecar',
      productName: 'HireCar Marketplace',
      topic: 'Vehicle Rentals',
      summary: 'Learn how an independent 120-car operator eliminated third-party broker commissions and automated contactless key handovers.',
      path: '/resources/client-success-stories',
      cta: 'Read Case Study',
      date: 'July 2026',
    },
    {
      id: 'cat-5',
      title: 'The Workshop Compliance Blueprint: NHVR Standards & Digital Bay Audits',
      type: 'Whitepaper',
      formatKey: 'whitepapers',
      productKey: 'chm',
      productName: 'CHM',
      topic: 'Workshop Compliance',
      summary: 'A step-by-step regulatory playbook for eliminating physical defect books and automating statutory maintenance logs.',
      path: '/resources/whitepapers',
      cta: 'Download Whitepaper',
      date: 'August 2026',
    },
    {
      id: 'cat-6',
      title: 'WRMS Pro Administrator & Workflow Architecture Manual',
      type: 'Product Guide',
      formatKey: 'guides',
      productKey: 'wrms-pro',
      productName: 'WRMS Pro',
      topic: 'User Guides',
      summary: 'Complete technical reference for setting labor rate schedules, inventory re-order points, and automated customer SMS approvals.',
      path: '/resources/product-guides',
      cta: 'View Guide',
      date: 'Updated 2026',
    },
    {
      id: 'cat-7',
      title: 'Car Hire Manager (CHM) Workshop Bay Scheduling & Job Cards Guide',
      type: 'Product Guide',
      formatKey: 'guides',
      productKey: 'chm',
      productName: 'CHM',
      topic: 'Scheduling',
      summary: 'Configure interactive Gantt bay schedules, time-tracking for mechanics on mobile tablets, and statutory defect sign-offs.',
      path: '/resources/product-guides',
      cta: 'View Guide',
      date: 'Updated 2026',
    },
    {
      id: 'cat-8',
      title: 'Zero Downtime Preventive Maintenance Scheduling Strategies',
      type: 'Blog',
      formatKey: 'blog',
      productKey: 'wrms-pro',
      productName: 'WRMS Pro',
      topic: 'Maintenance Management',
      summary: 'How leading Australian fleet maintenance shops shift from emergency reactive repairs to condition-monitored servicing cadences.',
      path: '/resources/blog/zero-downtime-scheduling',
      cta: 'Read Article',
      date: 'September 2026',
    },
    {
      id: 'cat-9',
      title: 'Telematics REST API & Webhooks Integration Guide',
      type: 'Product Guide',
      formatKey: 'guides',
      productKey: 'fleet-tracking',
      productName: 'Australia Fleet Tracking',
      topic: 'API Documentation',
      summary: 'Connect live OBD-II and CAN bus telemetry directly to your ERP, billing, or dispatching software via secure webhooks.',
      path: '/resources/product-guides',
      cta: 'Explore API Guide',
      date: 'v2.4 Live',
    },
    {
      id: 'cat-10',
      title: 'Mastering Condition-Based PM Scheduling in WRMS Pro',
      type: 'Webinar',
      formatKey: 'webinars',
      productKey: 'wrms-pro',
      productName: 'WRMS Pro',
      topic: 'Video Tutorials',
      summary: 'Live video walkthrough on linking engine telemetry hours directly to automatic preventive maintenance trigger thresholds.',
      path: '/resources/webinars',
      cta: 'Watch Video',
      date: 'Recorded',
    },
    {
      id: 'cat-11',
      title: 'Independent Operator Onboarding & Direct Listing Handbook',
      type: 'Product Guide',
      formatKey: 'guides',
      productKey: 'hirecar',
      productName: 'HireCar Marketplace',
      topic: 'Vehicle Bookings',
      summary: 'Everything rental fleet operators need to know to list inventory, connect live calendar availability, and set dynamic rates.',
      path: '/resources/product-guides',
      cta: 'View Guide',
      date: 'Updated 2026',
    },
    {
      id: 'cat-12',
      title: 'Parts Inventory Control: Reorder Points, Barcodes & Multi-Store Transfers',
      type: 'Blog',
      formatKey: 'blog',
      productKey: 'wrms-pro',
      productName: 'WRMS Pro',
      topic: 'Inventory Management',
      summary: 'Eliminate missing spare parts, track fast-moving stock, and automate supplier purchase orders across multiple workshop branches.',
      path: '/resources/blog',
      cta: 'Read Article',
      date: 'August 2026',
    },
    {
      id: 'cat-13',
      title: 'NHVR National Heavy Vehicle Compliance: Digital Audits & Prestarts',
      type: 'Webinar',
      formatKey: 'webinars',
      productKey: 'chm',
      productName: 'CHM',
      topic: 'Workshop Compliance',
      summary: 'How commercial fleets achieve 100% NHVR audit compliance through automated digital prestart checklists and defect tickets.',
      path: '/resources/webinars',
      cta: 'Watch Webinar',
      date: 'Recorded',
    },
    {
      id: 'cat-14',
      title: 'Geofencing, Speed Alerts & Driver Safety Scorecards Setup',
      type: 'Product Guide',
      formatKey: 'guides',
      productKey: 'fleet-tracking',
      productName: 'Australia Fleet Tracking',
      topic: 'Driver Safety',
      summary: 'Configure polygon geofences, automated SMS entry/exit triggers, and custom risk profiles for prime movers and light vehicles.',
      path: '/resources/product-guides',
      cta: 'View Guide',
      date: 'August 2026',
    },
    {
      id: 'cat-15',
      title: 'Outback Logistics: Zero Blackout Fleet Tracking in Western Australia',
      type: 'Client Success Story',
      formatKey: 'case-studies',
      productKey: 'fleet-tracking',
      productName: 'Australia Fleet Tracking',
      topic: 'Fleet Management',
      summary: 'Managing 94 heavy prime movers across remote Pilbara haul corridors with dual-satellite fallback and fatigue telemetry.',
      path: '/resources/client-success-stories',
      cta: 'Read Case Study',
      date: 'July 2026',
    },
    {
      id: 'cat-16',
      title: 'Car Hire Manager Automated Toll & Infringement Reconciliation',
      type: 'Blog',
      formatKey: 'blog',
      productKey: 'chm',
      productName: 'CHM',
      topic: 'Integrations',
      summary: 'Automatically match Linkt and EastLink toll timestamps against live customer rental contracts to recover 100% of road costs.',
      path: '/resources/blog',
      cta: 'Read Article',
      date: 'June 2026',
    },
  ];

  // Filtering Handler
  const handleProductFilter = (id) => {
    setSelectedProduct(id);
    const newParams = new URLSearchParams(searchParams);
    if (id === 'all') {
      newParams.delete('product');
    } else {
      newParams.set('product', id);
    }
    setSearchParams(newParams);
  };

  const handleTopicClick = (topic) => {
    const newParams = new URLSearchParams(searchParams);
    if (selectedTopic === topic) {
      setSelectedTopic('');
      newParams.delete('topic');
    } else {
      setSelectedTopic(topic);
      newParams.set('topic', topic);
    }
    setSearchParams(newParams);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    const newParams = new URLSearchParams(searchParams);
    if (type === 'all') {
      newParams.delete('type');
    } else {
      newParams.set('type', type);
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedProduct('all');
    setSelectedTopic('');
    setSelectedType('all');
    setSearchParams({});
  };

  // Filtered Catalog Logic
  const filteredCatalog = useMemo(() => {
    return catalogResources.filter((item) => {
      // Search query filter
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase());

      // Product filter
      const matchesProduct =
        selectedProduct === 'all' || item.productKey === selectedProduct;

      // Topic filter
      const matchesTopic =
        !selectedTopic ||
        item.topic.toLowerCase() === selectedTopic.toLowerCase() ||
        item.title.toLowerCase().includes(selectedTopic.toLowerCase());

      // Type / Format filter
      const matchesType =
        selectedType === 'all' ||
        item.formatKey === selectedType ||
        item.type.toLowerCase().includes(selectedType.toLowerCase());

      return matchesSearch && matchesProduct && matchesTopic && matchesType;
    });
  }, [catalogResources, searchQuery, selectedProduct, selectedTopic, selectedType]);

  // Featured resources filtered by product if a product is selected
  const displayedFeatured = useMemo(() => {
    if (selectedProduct === 'all') {
      return featuredResources.slice(0, 4);
    }
    const matching = featuredResources.filter((r) => r.productKey === selectedProduct);
    return matching.length > 0 ? matching : featuredResources.slice(0, 2);
  }, [featuredResources, selectedProduct]);

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      {/* =================================================== */}
      {/* 1. HERO / INTRO SECTION (CLEAN SAAS STYLE WITH BLUE ACCENTS) */}
      {/* =================================================== */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Resources Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              <span>RESOURCES</span>
            </div>

            {/* Title matching prompt: Knowledge for a Smarter Automotive Tomorrow */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
              Knowledge for a<br />
              <span className="text-blue-600">Smarter Automotive</span> Tomorrow
            </h1>

            {/* Professional ecosystem description covering all 4 products */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Techtonika provides practical guides, industry whitepapers, certified training, and
              expert technical resources to help automotive businesses get more from our technology
              solutions. Naturally covering our complete ecosystem: <strong>WRMS Pro</strong> workshop
              management, <strong>CHM</strong> statutory compliance, <strong>HireCar Marketplace</strong> vehicle
              rentals, and <strong>Australia Fleet Tracking</strong> live telematics.
            </p>

            {/* Interactive Search Bar with blue accent */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, whitepapers, guides, webinars, topics..."
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-400 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* MAIN CONTAINER: SIDEBAR + CONTENT AREA */}
      {/* =================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">
          {/* =================================================== */}
          {/* LEFT SIDEBAR: CLEAN NAVIGATION */}
          {/* =================================================== */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs">
              {/* Sidebar Header */}
              <div className="pb-5 mb-5 border-b border-slate-100">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
                  RESOURCES
                </span>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                  Knowledge for a<br />
                  Smarter Automotive<br />
                  Tomorrow
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Insights, guides, expert knowledge and resources to help customers get more from its automotive solutions.
                </p>
              </div>

              {/* Sidebar Navigation Items */}
              <nav className="space-y-1" aria-label="Resources Navigation">
                {sidebarNav.map((item) => {
                  const NavIcon = item.icon;
                  const isActive =
                    item.id === 'all'
                      ? selectedType === 'all' && window.location.pathname === '/resources'
                      : selectedType === item.id;

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => handleTypeClick(item.id)}
                      className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-bold border border-blue-100 shadow-2xs'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <NavIcon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive
                            ? 'text-blue-600 translate-x-0.5'
                            : 'text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Need Help Box */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <Link
                  to="/resources/help"
                  className="group block p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/80 hover:border-sky-200 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-105 transition-transform">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-slate-500 block">
                        Need help?
                      </span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                        Visit our Help Centre &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Contact / Speak to an Engineer Card */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0b1b36] rounded-3xl p-6 text-white text-xs shadow-sm border border-slate-800">
              <span className="text-sky-400 font-extrabold uppercase tracking-wider text-[10px] block mb-1">
                Direct Assistance
              </span>
              <h4 className="text-sm font-bold text-white mb-2">Speak to an Engineer</h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Have specific questions regarding shop job card setups, NHVR compliance rules, or CAN bus telematics?
              </p>
              <Link
                to="/contact?subject=Technical%20Consultation"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-xs text-xs"
              >
                Contact Our Team &rarr;
              </Link>
            </div>
          </aside>

          {/* =================================================== */}
          {/* MAIN CONTENT AREA */}
          {/* =================================================== */}
          <main className="flex-1 min-w-0 space-y-10">
            {/* =================================================== */}
            {/* PRODUCT-SPECIFIC FILTERING BAR (REQUIREMENT 9) */}
            {/* =================================================== */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Filter by Product
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  Select a product to explore targeted guides, articles & case studies
                </span>
              </div>

              {/* Product Pills Grid */}
              <div className="flex flex-wrap gap-2">
                {products.map((p) => {
                  const isSelected = selectedProduct === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleProductFilter(p.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-200'
                          : 'bg-slate-100/80 text-slate-700 hover:bg-sky-50 hover:text-blue-700 border border-slate-200/70 hover:border-blue-200'
                      }`}
                    >
                      <span>{p.name}</span>
                      {isSelected && (
                        <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Product Scope Explainer Banner */}
              {selectedProduct !== 'all' && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Info className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      Filtering for <strong>{products.find((p) => p.id === selectedProduct)?.name}</strong>:{' '}
                      {selectedProduct === 'wrms-pro' && 'Workshop management, work orders, scheduling, inventory, and invoicing.'}
                      {selectedProduct === 'chm' && 'Compliance, inspections, workshop workflow, NHVR standards, and reporting.'}
                      {selectedProduct === 'hirecar' && 'Vehicle rental, direct bookings, operators, customer ID, and digital bonds.'}
                      {selectedProduct === 'fleet-tracking' && 'GPS tracking, CAN bus diagnostics, geofencing, fleet analytics, and driver safety.'}
                    </span>
                  </div>
                  <button
                    onClick={() => handleProductFilter('all')}
                    className="text-xs text-blue-600 hover:text-blue-800 font-bold shrink-0 ml-3"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </section>

            {/* =================================================== */}
            {/* 2. FEATURED RESOURCES (REQUIREMENT 6 & 7) */}
            {/* =================================================== */}
            <section>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200/80">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block">
                    HIGHLIGHTS
                  </span>
                  <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                    Featured Resources
                  </h2>
                </div>
                <span className="text-xs font-bold text-slate-500 hidden sm:inline">
                  Representing all 4 Techtonika products
                </span>
              </div>

              {/* 4 Cards Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {displayedFeatured.map((card) => (
                  <div
                    key={card.id}
                    className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
                  >
                    <div>
                      {/* Card Image */}
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        
                        {/* Type Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md bg-white/95 text-slate-900 shadow-xs border border-white/60">
                            {card.type}
                          </span>
                        </div>

                        {/* Product Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold border backdrop-blur-xs ${card.productBadgeStyle}`}
                          >
                            {card.productName}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium mb-2">
                          <span>{card.date}</span>
                          <span>•</span>
                          <span>{card.readTime}</span>
                        </div>
                        <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Blue CTA Link */}
                    <div className="p-5 pt-0">
                      <Link
                        to={card.path}
                        className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold text-blue-600 bg-sky-50/70 hover:bg-blue-600 hover:text-white transition-all shadow-2xs group-hover:shadow-xs"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================== */}
            {/* 3. RESOURCE CATEGORIES (REQUIREMENT 8) */}
            {/* =================================================== */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block">
                    DIRECTORY
                  </span>
                  <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                    Resource Categories
                  </h2>
                </div>
                <p className="text-xs text-slate-500">
                  Browse by category format to find exact documentation, videos, or training.
                </p>
              </div>

              {/* 8 Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {resourceCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className="flex flex-col justify-between p-4 rounded-2xl bg-slate-50/70 hover:bg-sky-50/60 border border-slate-200/80 hover:border-blue-300 transition-all duration-200 group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:text-blue-700 transition-transform shadow-2xs">
                            <CatIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                            {cat.count}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                          {cat.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-blue-600 group-hover:text-blue-700">
                        <span>{cat.cta}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* =================================================== */}
            {/* 4. POPULAR TOPICS (REQUIREMENT 10) */}
            {/* =================================================== */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block">
                    FAST NAVIGATION
                  </span>
                  <h2 className="text-xl font-black text-slate-950 tracking-tight">
                    Popular Topics
                  </h2>
                </div>
                {selectedTopic && (
                  <button
                    onClick={() => handleTopicClick(selectedTopic)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-bold"
                  >
                    Reset topic filter
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-500 mb-4">
                Filter articles, whitepapers, and guides by core automotive workflow topics:
              </p>

              {/* Clickable Topics Chips */}
              <div className="flex flex-wrap gap-2.5">
                {popularTopics.map((topic) => {
                  const isSelected = selectedTopic.toLowerCase() === topic.toLowerCase();
                  return (
                    <button
                      key={topic}
                      onClick={() => handleTopicClick(topic)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-200'
                          : 'bg-slate-100/80 text-slate-700 hover:bg-sky-50 hover:text-blue-700 border border-slate-200/80 hover:border-blue-200'
                      }`}
                    >
                      <span>{topic}</span>
                      {isSelected && <span className="text-[10px] ml-1 opacity-80">✕</span>}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* =================================================== */}
            {/* 5. COMPREHENSIVE RESOURCE CATALOG */}
            {/* =================================================== */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-slate-950 tracking-tight">
                    {selectedTopic
                      ? `Resources for "${selectedTopic}"`
                      : selectedProduct !== 'all'
                      ? `${products.find((p) => p.id === selectedProduct)?.name} Resources`
                      : 'All Knowledge Items'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Showing {filteredCatalog.length} curated resources
                    {selectedProduct !== 'all' && ` in ${products.find((p) => p.id === selectedProduct)?.name}`}
                    {selectedTopic && ` • Topic: ${selectedTopic}`}
                  </p>
                </div>

                {/* Format Filter Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {[
                    { id: 'all', label: 'All Formats' },
                    { id: 'blog', label: 'Blog' },
                    { id: 'whitepapers', label: 'Whitepapers' },
                    { id: 'webinars', label: 'Webinars' },
                    { id: 'case-studies', label: 'Case Studies' },
                    { id: 'guides', label: 'Guides' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => handleTypeClick(f.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        selectedType === f.id
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Zero State */}
              {filteredCatalog.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-200/90 p-12 text-center shadow-xs">
                  <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-slate-900">No resources found</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto leading-relaxed">
                    No articles or guides match your current filter selection. Try clearing your search keyword or resetting the product and topic filters.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                /* Catalog Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filteredCatalog.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-lg hover:border-blue-200 transition-all group"
                    >
                      <div>
                        {/* Header Badges */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-sky-50 border border-sky-200/70 px-2.5 py-0.5 rounded-md">
                            {item.type}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {item.productName}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {item.title}
                        </h4>

                        {/* Summary */}
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                          {item.summary}
                        </p>
                      </div>

                      {/* Footer Info & Blue CTA Link */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-slate-400 font-medium">
                            {item.topic}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-[11px] text-slate-400">
                            {item.date}
                          </span>
                        </div>

                        <Link
                          to={item.path}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>{item.cta}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>

      {/* Persistent Bottom CTA Banner */}
      <CallToActionBanner />
    </div>
  );
}
