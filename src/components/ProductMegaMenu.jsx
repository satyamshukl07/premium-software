import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  Wrench,
  Car,
  Navigation,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  CalendarClock,
  Boxes,
  Truck,
  Shield,
  LineChart,
  ClipboardCheck,
  FileText,
  Building2,
  Clock,
  BarChart3,
  Layers,
  Smartphone,
  CreditCard,
  Camera,
  Activity,
  MapPin,
  Flame,
  Radio,
  Sliders,
} from 'lucide-react';

export default function ProductMegaMenu({ onClose }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'mex' | 'chm' | 'hirecar' | 'tracking'
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 'mex',
      name: 'WRMS PRO',
      tagline: 'Workshop Repair Management Software',
      badge: 'Workshop SaaS',
      badgeColor: 'bg-red-50 text-red-600 border-red-200',
      accentColor: 'red',
      icon: Wrench,
      path: '/products/mex',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      description:
        'Australia’s premier workshop repair management system for digital job cards, technician labor clocking, parts inventory, and seamless customer invoicing.',
      quickLinks: [
        { name: 'WRMS Pro Overview', path: '/products/wrms-pro/overview', icon: Layers },
        { name: 'Technician Mobile App', path: '/products/wrms-pro/technician-app', icon: Smartphone },
        { name: 'Services & Support', path: '/products/wrms-pro/services', icon: Shield },
        { name: 'Integrations', path: '/products/wrms-pro/integrations', icon: Activity },
        { name: 'Stock & Parts Inventory', path: '/products/wrms-pro/inventory-management', icon: Package },
        { name: 'Digital Inspections', path: '/products/wrms-pro/vehicle-inspections', icon: ClipboardCheck },
        { name: 'Work Orders & Job Cards', path: '/products/wrms-pro/work-orders', icon: FileText },
        { name: 'Multi-Branch Management', path: '/products/wrms-pro/multi-site', icon: Building2 },
        { name: 'Admin & Security Hub', path: '/products/wrms-pro/admin-control', icon: Sliders },
        { name: 'Financials & Invoicing', path: '/products/wrms-pro/analytics-invoicing', icon: LineChart },
        { name: 'Customer & Vehicle CRM', path: '/products/wrms-pro/customer-crm', icon: CheckCircle2 },
        { name: 'Smart Bay Scheduling', path: '/products/wrms-pro/bay-scheduling', icon: CalendarClock },
      ],
      highlights: ['Used by 5,000+ workshop bays', 'End-to-end repair lifecycle', 'Zero-paper job card management'],
    },
    {
      id: 'chm',
      name: 'CHM',
      tagline: 'Smart Car Hire Management',
      badge: 'Car Rental SaaS',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      accentColor: 'blue',
      icon: Car,
      path: '/products/chm',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      description:
        'All-in-one car rental management platform with dark-mode operations dashboard, recurring bookings, automated Linkt toll billing, and digital driver KYC.',
      quickLinks: [
        { name: 'Operations Dashboard', path: '/products/chm#dashboard', icon: Activity },
        { name: 'Fleet Status & Availability', path: '/products/chm#fleet', icon: Car },
        { name: 'Booking Engine & Calendar', path: '/products/chm#bookings', icon: CalendarClock },
        { name: 'Recurring Booking Engine', path: '/products/chm#recurring', icon: Clock },
        { name: 'Toll Management & Linkt API', path: '/products/chm#tolls', icon: Navigation },
        { name: 'Driver Management & KYC', path: '/products/chm#drivers', icon: Shield },
        { name: 'Financials & Stripe Payouts', path: '/products/chm#financials', icon: CreditCard },
        { name: 'Fleet Maintenance Sync', path: '/products/chm#maintenance', icon: Wrench },
      ],
      highlights: ['Automated Toll Fines Processing', 'Keyless Telematics Unlock', 'Bond & Pre-Auth Hold Automation'],
    },
    {
      id: 'hirecar',
      name: 'HireCar Marketplace',
      tagline: 'Car Rental Marketplace',
      badge: 'Rental Marketplace',
      badgeColor: 'bg-orange-50 text-orange-600 border-orange-200',
      accentColor: 'orange',
      icon: Flame,
      path: '/products/hirecar',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      description:
        'Australia’s premier online rental exchange. Compare compacts, utes, vans, and luxury vehicles across Brisbane, Sydney, Melbourne, and Perth with zero hidden fees.',
      quickLinks: [
        { name: 'Airport & City Locations', path: '/products/hirecar/locations', icon: MapPin },
        { name: 'Vehicle Fleet Catalog', path: '/products/hirecar/vehicles', icon: Car },
        { name: 'Transparent Pricing', path: '/products/hirecar/pricing', icon: CreditCard },
        { name: 'Vendor Fleet Portal', path: '/products/hirecar/vendors', icon: Building2 },
        { name: 'About HireCar Australia', path: '/products/hirecar/about', icon: Shield },
        { name: 'Travel & Road Trip Guides', path: '/products/hirecar/blog', icon: FileText },
        { name: '24/7 Rental Concierge', path: '/products/hirecar/contact', icon: Clock },
      ],
      highlights: ['5,000+ Verified Australian Cars', 'Free Cancellation up to 48h', 'Direct Airport Pickup'],
    },
    {
      id: 'tracking',
      name: 'Australia Fleet Tracking',
      tagline: 'GPS & Fleet Management',
      badge: '4G Telematics & Video',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      accentColor: 'emerald',
      icon: Radio,
      path: '/products/fleet-tracking',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80',
      description:
        'Enterprise 4G GPS tracking hardware and AI dash cams. Live 5-second updates, ATO-compliant digital logbooks, geofencing alerts, and fuel monitoring.',
      quickLinks: [
        { name: 'Live GPS Tracking Features', path: '/products/fleet-tracking/tracking-features', icon: Navigation },
        { name: 'AI Dual Dash Cams', path: '/products/fleet-tracking/dash-cams', icon: Camera },
        { name: 'Enterprise Business Solutions', path: '/products/fleet-tracking/business', icon: Building2 },
        { name: 'Fleet Telematics Insights', path: '/products/fleet-tracking/blog', icon: FileText },
        { name: 'About Australia Fleet Tracking', path: '/products/fleet-tracking/about', icon: Shield },
        { name: 'Contact & Hardware Demo', path: '/products/fleet-tracking/contact', icon: Activity },
      ],
      highlights: ['Telstra 4G LTE-M Coverage', 'ATO Approved Digital Logbooks', 'AI Driver Safety Cam Alerts'],
    },
  ];

  return (
    <div
      id="product-mega-menu-container"
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Product Switcher Row */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block">
              MEX Connected Suite
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Choose a Product Ecosystem</span>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                4 Dedicated Platforms
              </span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/products"
              onClick={onClose}
              className="text-xs font-bold text-slate-700 hover:text-red-600 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100"
            >
              <span>Explore All Products Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Main Products Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {products.map((prod) => {
            const Icon = prod.icon;
            const isHovered = hoveredProduct === prod.id;

            return (
              <div
                key={prod.id}
                onMouseEnter={() => setHoveredProduct(prod.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className={`group relative rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-red-400 bg-slate-50/70 shadow-lg scale-[1.01]'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isHovered
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${prod.badgeColor}`}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <Link
                    to={prod.path}
                    onClick={onClose}
                    className="block group-hover:text-red-600 transition-colors"
                  >
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-600 leading-tight">
                      {prod.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                      {prod.tagline}
                    </span>
                  </Link>

                  {/* Thumbnail Banner */}
                  <div className="relative h-24 rounded-xl overflow-hidden my-3 border border-slate-200 bg-slate-900">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white tracking-wide flex items-center gap-1">
                        <span>Explore Product</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                    {prod.description}
                  </p>

                  {/* Highlights Pill */}
                  <div className="space-y-1 mb-4">
                    {prod.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Features / Quick links sublist */}
                  <div className="border-t border-slate-100 pt-3 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Modules:
                    </span>
                    <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                      {prod.quickLinks.slice(0, 4).map((link, lIdx) => {
                        const SubIcon = link.icon;
                        return (
                          <Link
                            key={lIdx}
                            to={link.path}
                            onClick={onClose}
                            className="flex items-center justify-between text-xs py-1 px-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-white transition-colors"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <SubIcon className="w-3 h-3 text-slate-400 group-hover:text-red-500 flex-shrink-0" />
                              <span className="truncate font-medium">{link.name}</span>
                            </div>
                            <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Primary Button */}
                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Link
                    to={prod.path}
                    onClick={onClose}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Launch {prod.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Quick Links & Enterprise Services */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-bold text-slate-700">Looking for custom integration?</span>
            <Link
              to="/product/integrations"
              onClick={onClose}
              className="text-red-600 hover:underline font-semibold"
            >
              Enterprise API & Telematics Sync &rarr;
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              to="/pricing"
              onClick={onClose}
              className="text-slate-700 hover:text-red-600 font-semibold"
            >
              Compare All Plans & Pricing &rarr;
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-slate-700">All 4 Systems Active on Telstra & AWS Sydney Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
}
