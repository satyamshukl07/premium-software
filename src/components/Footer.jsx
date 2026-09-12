import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BarChart3,
  Users,
  Globe,
  MapPin,
  Phone,
  PhoneCall,
  Mail,
  Box,
  ChevronRight,
  Lightbulb,
  Settings,
  BookOpen,
  Building2,
  Share2,
  Linkedin,
  Youtube,
  Facebook,
  Check,
  Wrench,
  Car,
  Navigation,
  Sparkles,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  // Products Column Data
  const products = [
    {
      id: 'mex',
      name: 'MEX CMMS',
      subtitle: 'Maintenance Made Simple',
      icon: <Settings className="w-4 h-4 text-sky-400" />,
      headerLink: '/product/mex-cmms',
      items: [
        { label: 'Overview', to: '/product/mex-cmms' },
        { label: 'Features', to: '/product/mex-cmms#features' },
        { label: 'Pricing', to: '/pricing' },
      ],
    },
    {
      id: 'chm',
      name: 'CHM',
      subtitle: 'Workshop & Compliance',
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      headerLink: '/products/chm',
      items: [
        { label: 'Overview', to: '/products/chm' },
        { label: 'Features', to: '/products/chm#features' },
        { label: 'Pricing', to: '/pricing' },
      ],
    },
    {
      id: 'hirecar',
      name: 'HireCar Marketplace',
      subtitle: 'Car Rental, Simplified',
      icon: <Car className="w-4 h-4 text-pink-400" />,
      headerLink: '/products/hirecar',
      items: [
        { label: 'Overview', to: '/products/hirecar' },
        { label: 'For Operators', to: '/products/hirecar/operators' },
        { label: 'Pricing', to: '/pricing' },
      ],
    },
    {
      id: 'aft',
      name: 'Australia Fleet Tracking',
      subtitle: 'Real-Time. Anywhere.',
      icon: <Navigation className="w-4 h-4 text-emerald-400" />,
      headerLink: '/products/fleet-tracking',
      items: [
        { label: 'Overview', to: '/products/fleet-tracking' },
        { label: 'Features', to: '/products/fleet-tracking/features' },
        { label: 'Pricing', to: '/pricing' },
      ],
    },
  ];

  // Solutions Column Data
  const solutionsData = {
    byProduct: [
      {
        product: 'FOR MEX CMMS',
        color: 'text-sky-400',
        icon: <Settings className="w-3.5 h-3.5 text-sky-400" />,
        links: [
          { label: 'Asset Management', to: '/solutions/asset-management' },
          { label: 'Preventive Maintenance', to: '/solutions/preventive-maintenance' },
        ],
      },
      {
        product: 'FOR CHM',
        color: 'text-amber-400',
        icon: <Wrench className="w-3.5 h-3.5 text-amber-400" />,
        links: [
          { label: 'Workshop Management', to: '/solutions/workshop-management' },
          { label: 'Compliance & Reporting', to: '/solutions/compliance-reporting' },
        ],
      },
      {
        product: 'FOR HIRECAR MARKETPLACE',
        color: 'text-pink-400',
        icon: <Car className="w-3.5 h-3.5 text-pink-400" />,
        links: [
          { label: 'Vehicle Rental Marketplace', to: '/solutions/vehicle-rental-marketplace' },
          { label: 'Fleet Monetization', to: '/solutions/fleet-monetization' },
        ],
      },
      {
        product: 'FOR AUSTRALIA FLEET TRACKING',
        color: 'text-emerald-400',
        icon: <Navigation className="w-3.5 h-3.5 text-emerald-400" />,
        links: [
          { label: 'Real-Time Vehicle Tracking', to: '/solutions/real-time-vehicle-tracking' },
          { label: 'Driver & Fleet Safety', to: '/solutions/driver-fleet-safety' },
        ],
      },
    ],
    byIndustry: [
      { label: 'Aged Care', to: '/sectors/aged-care' },
      { label: 'Construction & Mining', to: '/sectors/construction-mining' },
      { label: 'Logistics & Transport', to: '/sectors/logistics-transport' },
      { label: 'Manufacturing', to: '/sectors/manufacturing' },
      { label: 'Rental & Mobility', to: '/sectors/rental-mobility' },
      { label: 'Utilities', to: '/sectors/utilities' },
    ],
  };

  // Features Column Data
  const featuresData = [
    {
      group: 'MEX CMMS FEATURES',
      color: 'text-sky-400',
      links: [
        { label: 'Work Request Management', to: '/product/mex-cmms#features' },
        { label: 'AI Insights & Reporting', to: '/product/mex-cmms#features' },
      ],
    },
    {
      group: 'CHM FEATURES',
      color: 'text-amber-400',
      links: [
        { label: 'Job Card Management', to: '/products/chm#features' },
        { label: 'Service Scheduling', to: '/products/chm#features' },
      ],
    },
    {
      group: 'HIRECAR FEATURES',
      color: 'text-pink-400',
      links: [
        { label: 'Vehicle Listing & Booking', to: '/products/hirecar#features' },
        { label: 'Payment & Billing', to: '/products/hirecar#features' },
      ],
    },
    {
      group: 'FLEET TRACKING FEATURES',
      color: 'text-emerald-400',
      links: [
        { label: 'Live GPS Tracking', to: '/products/fleet-tracking#features' },
        { label: 'Geofencing & Alerts', to: '/products/fleet-tracking#features' },
      ],
    },
    {
      group: 'PLATFORM FEATURES',
      color: 'text-purple-400',
      links: [
        { label: 'Multi-Site Management', to: '/solutions/by-capability' },
        { label: 'Mobile Access', to: '/solutions/by-capability' },
        { label: 'Real-Time Analytics', to: '/solutions/by-capability' },
      ],
    },
  ];

  // Resources Column Data
  const resourcesList = [
    { label: 'All Resources', to: '/resources' },
    { label: 'Blog', to: '/resources/blog' },
    { label: 'Client Success Stories', to: '/resources/client-success-stories' },
    { label: 'Product Guides', to: '/resources/product-guides' },
    { label: 'Training', to: '/resources/training' },
    { label: 'Help Centre', to: '/resources/help' },
    { label: 'FAQs', to: '/resources/faqs' },
  ];

  // Company Column Data
  const companyList = [
    { label: 'About Us', to: '/about' },
    { label: 'Our Story', to: '/our-story' },
    { label: 'Leadership', to: '/leadership' },
    { label: 'Careers', to: '/careers', badge: "We're Hiring" },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <footer id="footer-section" className="relative bg-[#050b14] text-slate-300 overflow-hidden font-sans border-t border-slate-800/80">
      {/* Automotive Styling Header Banner & Streamline Graphics */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none overflow-hidden z-0">
        <svg
          className="w-full h-full opacity-35"
          viewBox="0 0 1440 160"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Aerodynamic Speed Curves */}
          <path
            d="M-50 20 C300 80, 700 -20, 1100 40 C1300 70, 1400 30, 1500 50"
            stroke="url(#speedline-teal)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <path
            d="M-50 60 C350 140, 800 10, 1200 70 C1380 95, 1450 60, 1500 80"
            stroke="url(#speedline-blue)"
            strokeWidth="2"
          />
          <path
            d="M200 0 C600 120, 1000 30, 1500 110"
            stroke="url(#speedline-cyan)"
            strokeWidth="1"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="speedline-teal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="speedline-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="70%" stopColor="#2563eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="speedline-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Main 6-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 pb-10">
          
          {/* ========================================================================= */}
          {/* COLUMN 1: COMPANY INFO & CONTACT (Span 4 on LG, Span 3.5 on XL) */}
          {/* ========================================================================= */}
          <div className="md:col-span-2 lg:col-span-4 xl:col-span-3 space-y-5 pr-0 lg:pr-3">
            {/* Logo Badge */}
            <Link to="/" className="flex items-center gap-3.5 group inline-flex">
              {/* Circular Logo Icon with Blue Ring and Golden Accent */}
              <div className="relative w-11 h-11 rounded-full bg-[#0a1526] border-2 border-[#1e5bb8] flex items-center justify-center shadow-lg shadow-blue-900/30 flex-shrink-0 group-hover:border-sky-400 transition-colors">
                <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Blue Ring */}
                  <circle cx="22" cy="22" r="20" stroke="#2563eb" strokeWidth="2" />
                  {/* Golden Crescent Swoosh */}
                  <path
                    d="M10 26 C12 14, 26 8, 34 14 C36 16, 32 18, 27 16 C20 14, 14 18, 12 24 Z"
                    fill="#f59e0b"
                    opacity="0.95"
                  />
                  {/* Sleek Center Mark */}
                  <path
                    d="M11 25 C14 22, 17 19, 23 19 C28 19, 31 22, 34 25 C35 26, 36 28, 34 29 C32 30, 13 30, 11 29 C10 28, 10 26, 11 25 Z"
                    fill="#ffffff"
                  />
                  <circle cx="16" cy="29" r="2" fill="#0a1526" stroke="#38bdf8" strokeWidth="1" />
                  <circle cx="29" cy="29" r="2" fill="#0a1526" stroke="#38bdf8" strokeWidth="1" />
                </svg>
              </div>

              {/* Logo Typography */}
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white block leading-tight font-sans">
                  TECHTONIKA
                </span>
                <span className="font-bold text-[11px] tracking-wide text-sky-400 block leading-tight">
                  AUTOMOTIVE SOLUTIONS
                </span>
                <span className="text-[9px] font-medium tracking-widest text-slate-400 block uppercase leading-tight">
                  BY ADVANCED SYSTEMS
                </span>
              </div>
            </Link>

            {/* Mission Statement (Concise) */}
            <p className="text-xs text-slate-300/90 leading-relaxed max-w-sm">
              Intelligent automotive software solutions for a connected and efficient future.
            </p>

            {/* 4 Metric Badges Row */}
            <div className="grid grid-cols-4 gap-1.5 pt-1 pb-1">
              <div className="bg-[#0b1626] border border-slate-800 rounded-lg p-2 text-center">
                <Users className="w-3.5 h-3.5 text-sky-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-white block font-mono">500+</span>
                <span className="text-[9px] text-slate-400 block leading-tight">Happy Clients</span>
              </div>
              <div className="bg-[#0b1626] border border-slate-800 rounded-lg p-2 text-center">
                <BarChart3 className="w-3.5 h-3.5 text-sky-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-white block font-mono">4,000+</span>
                <span className="text-[9px] text-slate-400 block leading-tight">Vehicles</span>
              </div>
              <div className="bg-[#0b1626] border border-slate-800 rounded-lg p-2 text-center">
                <Globe className="w-3.5 h-3.5 text-sky-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-white block font-mono">10+</span>
                <span className="text-[9px] text-slate-400 block leading-tight">Industries</span>
              </div>
              <div className="bg-[#0b1626] border border-slate-800 rounded-lg p-2 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-white block font-mono">99.9%</span>
                <span className="text-[9px] text-slate-400 block leading-tight">Uptime</span>
              </div>
            </div>

            {/* CONTACT US Section */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                CONTACT US
              </h4>
              <div className="space-y-2.5 text-xs">
                {/* Address */}
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Unit 5, 15 Anderson St,<br />
                    Fortitude Valley QLD 4006, Australia
                  </span>
                </div>

                {/* Office Phone */}
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>
                    Office:{' '}
                    <a href="tel:+61733924777" className="text-white hover:text-sky-300 font-medium">
                      +61 7 3392 4777
                    </a>
                  </span>
                </div>

                {/* Urgent Support Phone in Coral Red */}
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#ef4444] flex-shrink-0" />
                  <span className="text-slate-300">
                    Urgent Support:{' '}
                    <a href="tel:+61363612115" className="text-[#ef4444] hover:text-red-400 font-bold">
                      +61 3 6361 2115
                    </a>
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <a href="mailto:sales@techtonika.com" className="hover:text-sky-300 font-medium">
                    sales@techtonika.com
                  </a>
                </div>
              </div>
            </div>

            {/* Slogan with cyan glow and speed lines */}
            <div className="pt-2">
              <div className="relative inline-flex items-center gap-2">
                <span className="text-sm font-semibold italic text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                  "Driving a Smarter Tomorrow"
                </span>
                <span className="h-[2px] w-12 bg-gradient-to-r from-sky-400 to-transparent" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 2: OUR PRODUCTS (Span 2 on LG, Span 2 on XL) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <Box className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">OUR PRODUCTS</h4>
            </div>

            <div className="space-y-4 text-xs">
              {products.map((prod) => (
                <div key={prod.id} className="space-y-1">
                  {/* Product Header */}
                  <Link
                    to={prod.headerLink}
                    className="flex items-center justify-between font-bold text-slate-200 hover:text-sky-300 transition-colors group"
                  >
                    <div className="flex items-center gap-1.5">
                      {prod.icon}
                      <span className="group-hover:translate-x-0.5 transition-transform">{prod.name}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </Link>

                  {/* Subtitle */}
                  <p className="text-[11px] text-slate-400 font-medium pl-5">
                    {prod.subtitle}
                  </p>

                  {/* Bullet Sub-links */}
                  <ul className="pl-5 space-y-1 pt-0.5">
                    {prod.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.to}
                          className="text-[11px] text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <span className="text-sky-500 text-[10px]">▸</span>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 3: SOLUTIONS (Span 2 on LG, Span 2 on XL) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <Lightbulb className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">SOLUTIONS</h4>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* By Product Solutions */}
              {solutionsData.byProduct.map((group) => (
                <div key={group.product} className="space-y-1">
                  <div className={`flex items-center gap-1.5 font-bold text-[10px] tracking-wide ${group.color}`}>
                    {group.icon}
                    <span>{group.product}</span>
                  </div>
                  <ul className="pl-4 space-y-0.5">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-[11px] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <span className="text-slate-500 text-[9px]">•</span>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* BY INDUSTRY */}
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[10px] tracking-wide text-sky-400 uppercase">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>BY INDUSTRY</span>
                </div>
                <ul className="pl-2 space-y-1">
                  {solutionsData.byIndustry.map((ind) => (
                    <li key={ind.label}>
                      <Link
                        to={ind.to}
                        className="text-[11px] text-slate-400 hover:text-sky-300 transition-colors flex items-center justify-between pr-2 group"
                      >
                        <span className="flex items-center gap-1">
                          <span className="text-sky-500 text-[10px]">▸</span>
                          <span>{ind.label}</span>
                        </span>
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 4: FEATURES (Span 2 on LG, Span 2 on XL) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <Settings className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">FEATURES</h4>
            </div>

            <div className="space-y-3 text-xs">
              {featuresData.map((fGroup) => (
                <div key={fGroup.group} className="space-y-1">
                  <span className={`font-bold text-[10px] tracking-wider block ${fGroup.color}`}>
                    {fGroup.group}
                  </span>
                  <ul className="pl-2 space-y-0.5">
                    {fGroup.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-[11px] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <span className="text-slate-500 text-[9px]">•</span>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 5: RESOURCES (Span 1 on LG, Span 1.25 on XL) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-1 xl:col-span-1 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">RESOURCES</h4>
            </div>

            <ul className="space-y-2 text-xs">
              {resourcesList.map((res) => (
                <li key={res.label}>
                  <Link
                    to={res.to}
                    className="text-[11px] text-slate-300 hover:text-sky-300 transition-colors block"
                  >
                    {res.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 6: COMPANY (Span 1 on LG, Span 1.75 on XL) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-1 xl:col-span-1 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <Building2 className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">COMPANY</h4>
            </div>

            <ul className="space-y-2 text-xs">
              {companyList.map((comp) => (
                <li key={comp.label}>
                  <Link
                    to={comp.to}
                    className="text-[11px] text-slate-300 hover:text-sky-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{comp.label}</span>
                    {comp.badge && (
                      <span className="bg-[#1d70f5] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                        {comp.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* LOWER INTERACTION ROW: STAY CONNECTED & SUBSCRIBE TO OUR NEWSLETTER */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 pb-10 border-t border-slate-800/80 items-center">
          {/* Spacer aligning with Left Columns */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* STAY CONNECTED (Span 4) */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">STAY CONNECTED</h4>
            </div>
            <p className="text-xs text-slate-400">
              Follow us for the latest updates, insights and industry news.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Techtonika on LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#0077b5] hover:bg-[#00669c] text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Techtonika on YouTube"
                className="w-8 h-8 rounded-lg bg-[#ff0000] hover:bg-[#d40000] text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
              </a>
              {/* X (Twitter) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Techtonika on X"
                className="w-8 h-8 rounded-lg bg-black border border-slate-700 hover:border-slate-500 text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Techtonika on Instagram"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Techtonika on Facebook"
                className="w-8 h-8 rounded-lg bg-[#1877f2] hover:bg-[#1464d2] text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* SUBSCRIBE TO OUR NEWSLETTER (Span 4) */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">SUBSCRIBE TO OUR NEWSLETTER</h4>
            </div>
            <p className="text-xs text-slate-400">
              Get the latest product updates, industry insights and more.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-black/70 border border-slate-700 focus:border-sky-500 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-md whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM BAR: COPYRIGHT, LEGAL LINKS & GLOBAL MOTTO */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          {/* Copyright */}
          <div>
            © 2026 Techtonika Automotive Solutions. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Global Motto */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>Global Solutions for a Connected Tomorrow</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
