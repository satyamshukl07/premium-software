import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Package,
  ClipboardCheck,
  FileText,
  Building2,
  Shield,
  LineChart,
  CheckCircle2,
  CalendarClock,
  Boxes,
  Truck,
  Clock,
  Wrench,
  BarChart3,
  Layers,
  Smartphone,
  Headphones,
  Cpu,
  BookOpen,
} from 'lucide-react';
import { navigationData } from '../data/contentData.js';
import ProductMegaMenu from './ProductMegaMenu.jsx';
import TechtonikaLogo from './TechtonikaLogo.jsx';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // 'product' | 'solutions' | 'resources' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const productHoverTimeoutRef = useRef(null);

  const handleProductMouseEnter = () => {
    if (productHoverTimeoutRef.current) {
      clearTimeout(productHoverTimeoutRef.current);
    }
    setActiveMenu('product');
  };

  const handleProductMouseLeave = () => {
    productHoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu((curr) => (curr === 'product' ? null : curr));
    }, 180);
  };

  // Close menus when route changes
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Click outside to close menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const getFeatureIcon = (name) => {
    const icons = {
      Package: <Package className="w-5 h-5 text-red-500" />,
      ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-red-500" />,
      FileText: <FileText className="w-5 h-5 text-red-500" />,
      Building2: <Building2 className="w-5 h-5 text-red-500" />,
      Shield: <Shield className="w-5 h-5 text-red-500" />,
      LineChart: <LineChart className="w-5 h-5 text-red-500" />,
      CheckCircle2: <CheckCircle2 className="w-5 h-5 text-red-500" />,
      CalendarClock: <CalendarClock className="w-5 h-5 text-red-500" />,
      Boxes: <Boxes className="w-5 h-5 text-red-500" />,
      Truck: <Truck className="w-5 h-5 text-red-500" />,
      Clock: <Clock className="w-5 h-5 text-red-500" />,
      Wrench: <Wrench className="w-5 h-5 text-red-500" />,
      BarChart3: <BarChart3 className="w-5 h-5 text-red-500" />,
    };
    return icons[name] || <Package className="w-5 h-5 text-red-500" />;
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-slate-100 font-sans">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-end items-center gap-6 text-xs text-slate-600 font-medium">
          <Link
            id="nav-user-portal"
            to="/user-portal"
            className="hover:text-slate-900 transition-colors"
          >
            User Portal
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            id="nav-contact-link"
            to="/contact"
            className="hover:text-slate-900 transition-colors"
          >
            Contact
          </Link>
          <span className="text-slate-300">|</span>
          <a
            id="nav-call-phone"
            href="tel:0733924777"
            className="flex items-center gap-1.5 text-slate-800 hover:text-red-600 transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span>Call now! 07 3392 4777</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link id="nav-brand-logo" to="/" className="flex items-center group py-1">
            <TechtonikaLogo variant="light" className="h-11 sm:h-12 w-auto group-hover:opacity-95 transition-opacity" />
          </Link>

          {/* Desktop Menu Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Product Trigger (Hover Activated on Desktop) */}
            <div
              className="relative"
              onMouseEnter={handleProductMouseEnter}
              onMouseLeave={handleProductMouseLeave}
            >
              <button
                id="nav-btn-product"
                onClick={() => toggleMenu('product')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeMenu === 'product'
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Product</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === 'product' ? 'rotate-180 text-red-600' : 'text-slate-400'
                  }`}
                />
              </button>
            </div>

            {/* Solutions Trigger */}
            <button
              id="nav-btn-solutions"
              onClick={() => toggleMenu('solutions')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                activeMenu === 'solutions'
                  ? 'text-slate-900 bg-slate-100'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMenu === 'solutions' ? 'rotate-180 text-red-600' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Resources Trigger */}
            <button
              id="nav-btn-resources"
              onClick={() => toggleMenu('resources')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                activeMenu === 'resources'
                  ? 'text-slate-900 bg-slate-100'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeMenu === 'resources' ? 'rotate-180 text-red-600' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Plans & Pricing Direct Link */}
            <Link
              id="nav-link-pricing"
              to="/pricing"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === '/pricing'
                  ? 'text-slate-900 bg-slate-100'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Plans & Pricing
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              id="nav-btn-login"
              to="/login"
              className="text-slate-700 hover:text-slate-900 text-sm font-semibold px-4 py-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              Login
            </Link>

            <Link
              id="nav-btn-free-trial"
              to="/free-trial"
              className="bg-[#0b1528] hover:bg-[#13233f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow active:scale-98"
            >
              Get a free trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* DROPDOWN MENUS (CLICK-ACTIVATED) */}

      {/* 1. PRODUCT MEGA MENU (HOVER-ACTIVATED) */}
      {activeMenu === 'product' && (
        <div
          onMouseEnter={() => {
            if (productHoverTimeoutRef.current) {
              clearTimeout(productHoverTimeoutRef.current);
            }
          }}
          onMouseLeave={handleProductMouseLeave}
        >
          <ProductMegaMenu onClose={() => setActiveMenu(null)} />
        </div>
      )}

      {/* 2. SOLUTIONS DROPDOWN */}
      {activeMenu === 'solutions' && (
        <div
          id="dropdown-solutions"
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* By Capability Column */}
              <div className="col-span-4 border-r border-slate-100 pr-8">
                <div className="mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Solutions
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">By Capability</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Proven frameworks tailored for specific maintenance challenges.
                  </p>
                </div>

                <div className="space-y-3.5 mt-6">
                  {navigationData.solutions.capabilities.map((cap) => (
                    <Link
                      key={cap.slug}
                      to={cap.path}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-red-50 transition-colors flex-shrink-0">
                        {getFeatureIcon(cap.iconName)}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors flex items-center gap-1.5">
                          <span>{cap.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-red-600" />
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* By Industry Column */}
              <div className="col-span-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      Solutions
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">By Industry</h3>
                  </div>
                  <Link
                    to="/solutions"
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    View all industries &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {navigationData.solutions.industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      to={ind.path}
                      className="group p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        {ind.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
                        {ind.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. RESOURCES DROPDOWN */}
      {activeMenu === 'resources' && (
        <div
          id="dropdown-resources"
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column: Resource Links */}
              <div className="col-span-4 border-r border-slate-100 pr-8">
                <div className="mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Resources
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">Knowledge Hub</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Access industry insights, proven success stories, and expert resources to make
                    maintenance simpler and smarter.
                  </p>
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 mt-2"
                  >
                    <span>See all resources</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-1.5 mt-4">
                  {navigationData.resources.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column: Featured Cards */}
              <div className="col-span-8">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-4">
                  Featured
                </span>
                <div className="grid grid-cols-2 gap-6">
                  {navigationData.resources.featured.map((card, idx) => (
                    <Link
                      key={idx}
                      to={card.path}
                      className="group block border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-all bg-white"
                    >
                      <div className="relative h-36 overflow-hidden bg-slate-900">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[11px] font-bold text-slate-900 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {card.type}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                          {card.description}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-bold text-red-600">
                          <span>{card.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg">
              <Link
                to="/products"
                className="text-base font-bold text-slate-950 hover:text-red-600"
              >
                Products Ecosystem
              </Link>
              <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                4 Platforms
              </span>
            </div>

            <div className="pl-3 space-y-3 pt-2 text-sm">
              {/* Product 1: MEX CMMS */}
              <div className="border-l-2 border-red-500 pl-3 space-y-1">
                <Link to="/products/mex" className="block font-bold text-slate-900 hover:text-red-600">
                  MEX CMMS
                </Link>
                <div className="text-xs text-slate-500 space-y-1 pl-1">
                  <Link to="/product/mex-overview" className="block hover:text-red-600">
                    Overview & Capabilities
                  </Link>
                  <Link to="/product/mex-apps" className="block hover:text-red-600">
                    MEX Mobile Apps
                  </Link>
                  <Link to="/product/integrations" className="block hover:text-red-600">
                    API & Telematics Integrations
                  </Link>
                </div>
              </div>

              {/* Product 2: CHM */}
              <div className="border-l-2 border-blue-500 pl-3 space-y-1">
                <Link to="/products/chm" className="block font-bold text-slate-900 hover:text-blue-600">
                  CHM — Smart Car Hire Management
                </Link>
                <div className="text-xs text-slate-500 space-y-1 pl-1">
                  <Link to="/products/chm" className="block hover:text-blue-600">
                    SaaS Console & Toll Billing
                  </Link>
                </div>
              </div>

              {/* Product 3: HireCar Marketplace */}
              <div className="border-l-2 border-orange-500 pl-3 space-y-1">
                <Link to="/products/hirecar" className="block font-bold text-slate-900 hover:text-[#ea580c]">
                  HireCar Marketplace
                </Link>
                <div className="text-xs text-slate-500 space-y-1 pl-1">
                  <Link to="/products/hirecar/locations" className="block hover:text-[#ea580c]">
                    Airport & City Locations
                  </Link>
                  <Link to="/products/hirecar/vehicles" className="block hover:text-[#ea580c]">
                    Vehicle Fleet Catalog
                  </Link>
                  <Link to="/products/hirecar/vendors" className="block hover:text-[#ea580c]">
                    List Your Fleet (Vendors)
                  </Link>
                </div>
              </div>

              {/* Product 4: Australia Fleet Tracking */}
              <div className="border-l-2 border-emerald-500 pl-3 space-y-1">
                <Link to="/products/fleet-tracking" className="block font-bold text-slate-900 hover:text-emerald-600">
                  Australia Fleet Tracking
                </Link>
                <div className="text-xs text-slate-500 space-y-1 pl-1">
                  <Link to="/products/fleet-tracking/tracking-features" className="block hover:text-emerald-600">
                    5-Second Live GPS Tracking
                  </Link>
                  <Link to="/products/fleet-tracking/dash-cams" className="block hover:text-emerald-600">
                    AI Dual-Facing Dash Cams
                  </Link>
                  <Link to="/products/fleet-tracking/business" className="block hover:text-emerald-600">
                    Business Fleet Solutions
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/solutions"
              className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg mt-2"
            >
              Solutions
            </Link>
            <div className="pl-4 space-y-1 text-sm text-slate-600">
              <Link to="/solutions/by-capability" className="block py-1 hover:text-red-600">
                By Capability
              </Link>
              <Link to="/solutions/asset-management" className="block py-1 hover:text-red-600">
                Asset Management
              </Link>
              <Link to="/solutions/fleet-management" className="block py-1 hover:text-red-600">
                Fleet Management
              </Link>
              <Link to="/solutions/preventive-maintenance" className="block py-1 hover:text-red-600">
                Preventive Maintenance
              </Link>
              <Link to="/solutions/work-order-management" className="block py-1 hover:text-red-600">
                Work Order Management
              </Link>
            </div>

            <Link
              to="/resources"
              className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg mt-2"
            >
              Resources
            </Link>
            <div className="pl-4 space-y-1 text-sm text-slate-600">
              <Link to="/resources/blog" className="block py-1 hover:text-red-600">
                Blog
              </Link>
              <Link to="/resources/client-success-stories" className="block py-1 hover:text-red-600">
                Client Success Stories
              </Link>
              <Link to="/resources/whitepapers" className="block py-1 hover:text-red-600">
                Whitepapers
              </Link>
              <Link to="/resources/webinars" className="block py-1 hover:text-red-600">
                Webinars
              </Link>
            </div>

            <Link
              to="/pricing"
              className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg mt-2"
            >
              Plans & Pricing
            </Link>

            <Link
              to="/login"
              className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg mt-2"
            >
              User Portal / Login
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/free-trial"
              className="w-full text-center bg-[#0b1528] text-white py-2.5 rounded-full font-semibold text-sm"
            >
              Get a free trial
            </Link>
            <a
              href="tel:0733924777"
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-red-600"
            >
              <Phone className="w-4 h-4" />
              <span>Call now! 07 3392 4777</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
