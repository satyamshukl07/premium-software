import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, Settings, Wrench, Car, Navigation, ShieldCheck, Building2, BookOpen } from 'lucide-react';

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: 'Our Products',
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      links: [
        { label: 'MEX CMMS — Overview', url: '/product/mex-cmms' },
        { label: 'MEX CMMS — Features', url: '/product/mex-cmms#features' },
        { label: 'MEX CMMS — Pricing', url: '/pricing' },
        { label: 'MEX CMMS — User Portal', url: '/user-portal' },
        { label: 'CHM — Overview', url: '/products/chm' },
        { label: 'CHM — Features & Workshop', url: '/products/chm#features' },
        { label: 'CHM — Integrations', url: '/products/chm#integrations' },
        { label: 'CHM — Pricing', url: '/pricing' },
        { label: 'HireCar Marketplace — Overview', url: '/products/hirecar' },
        { label: 'HireCar Marketplace — For Operators', url: '/products/hirecar/operators' },
        { label: 'HireCar Marketplace — For Customers', url: '/products/hirecar/customers' },
        { label: 'Australia Fleet Tracking — Overview', url: '/products/fleet-tracking' },
        { label: 'Australia Fleet Tracking — Features', url: '/products/fleet-tracking/features' },
        { label: 'Australia Fleet Tracking — Coverage', url: '/products/fleet-tracking/coverage' },
      ],
    },
    {
      title: 'Solutions by Product & Industry',
      icon: <Car className="w-5 h-5 text-emerald-600" />,
      links: [
        { label: 'Asset Management (MEX CMMS)', url: '/solutions/asset-management' },
        { label: 'Preventive Maintenance (MEX CMMS)', url: '/solutions/preventive-maintenance' },
        { label: 'Workshop Management (CHM)', url: '/solutions/workshop-management' },
        { label: 'Compliance & Reporting (CHM)', url: '/solutions/compliance-reporting' },
        { label: 'Vehicle Rental Marketplace (HireCar)', url: '/solutions/vehicle-rental-marketplace' },
        { label: 'Fleet Monetization (HireCar)', url: '/solutions/fleet-monetization' },
        { label: 'Real-Time Vehicle Tracking (AFT)', url: '/solutions/real-time-vehicle-tracking' },
        { label: 'Driver & Fleet Safety (AFT)', url: '/solutions/driver-fleet-safety' },
        { label: 'Industry: Aged Care', url: '/sectors/aged-care' },
        { label: 'Industry: Construction & Mining', url: '/sectors/construction-mining' },
        { label: 'Industry: Government & Infrastructure', url: '/sectors/government-infrastructure' },
        { label: 'Industry: Healthcare & Biotech', url: '/sectors/healthcare-biotech' },
        { label: 'Industry: Logistics & Transport', url: '/sectors/logistics-transport' },
        { label: 'Industry: Manufacturing', url: '/sectors/manufacturing' },
        { label: 'Industry: Rental & Mobility', url: '/sectors/rental-mobility' },
        { label: 'Industry: Utilities', url: '/sectors/utilities' },
      ],
    },
    {
      title: 'Resources & Knowledge Base',
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      links: [
        { label: 'Resource Center Home', url: '/resources' },
        { label: 'Automotive & Fleet Blog', url: '/resources/blog' },
        { label: 'Client Success Stories', url: '/resources/client-success-stories' },
        { label: 'Enterprise Whitepapers', url: '/resources/whitepapers' },
        { label: 'Webinars & Video Masterclasses', url: '/resources/webinars' },
        { label: 'Product Guides & Manuals', url: '/resources/product-guides' },
        { label: 'Certified Training Courses', url: '/resources/training' },
        { label: 'Help Centre & Knowledge Base', url: '/resources/help' },
        { label: 'Frequently Asked Questions', url: '/resources/faqs' },
      ],
    },
    {
      title: 'Company & Governance',
      icon: <Building2 className="w-5 h-5 text-purple-600" />,
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Our Story (30+ Years Heritage)', url: '/our-story' },
        { label: 'Executive Leadership', url: '/leadership' },
        { label: 'Careers (We’re Hiring)', url: '/careers' },
        { label: 'Newsroom & Press Releases', url: '/press' },
        { label: 'Partner Ecosystem', url: '/partners' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'Free 30-Day Trial', url: '/free-trial' },
        { label: 'Terms of Service', url: '/terms' },
        { label: 'Privacy Policy', url: '/privacy' },
      ],
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 mb-3">
            Website Sitemap
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Quickly navigate all pages, product suites, industry solutions, and customer support resources across Techtonika.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapSections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  {section.icon}
                  <h2 className="text-base font-bold text-slate-900">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.url}
                        className="text-xs text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <ArrowRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
