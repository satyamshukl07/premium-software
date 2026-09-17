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
  ShieldCheck,
  User,
  UserPlus,
  LogOut,
} from 'lucide-react';
import { navigationData } from '../data/contentData.js';
import ProductMegaMenu from './ProductMegaMenu.jsx';
import SolutionsMegaMenu from './SolutionsMegaMenu.jsx';
import ResourcesMegaMenu from './ResourcesMegaMenu.jsx';
import TechtonikaLogo from './TechtonikaLogo.jsx';
import { useUserAuth } from '../context/UserAuthContext.jsx';

export default function Header() {
  const { user, isAuthenticated, logout } = useUserAuth();
  const [activeMenu, setActiveMenu] = useState(null); // 'product' | 'solutions' | 'resources' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const productHoverTimeoutRef = useRef(null);
  const solutionsHoverTimeoutRef = useRef(null);
  const resourcesHoverTimeoutRef = useRef(null);

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

  const handleSolutionsMouseEnter = () => {
    if (solutionsHoverTimeoutRef.current) {
      clearTimeout(solutionsHoverTimeoutRef.current);
    }
    setActiveMenu('solutions');
  };

  const handleSolutionsMouseLeave = () => {
    solutionsHoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu((curr) => (curr === 'solutions' ? null : curr));
    }, 180);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesHoverTimeoutRef.current) {
      clearTimeout(resourcesHoverTimeoutRef.current);
    }
    setActiveMenu('resources');
  };

  const handleResourcesMouseLeave = () => {
    resourcesHoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu((curr) => (curr === 'resources' ? null : curr));
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
            id="nav-admin-portal"
            to="/admin/login"
            className="hover:text-red-600 text-slate-700 font-semibold transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Admin Portal</span>
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
            <div
              className="relative"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
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
            </div>

            {/* Resources Trigger */}
            <div
              className="relative"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
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
            </div>

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
          <div className="hidden lg:flex items-center gap-2.5">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-2">
                <Link
                  id="nav-btn-user-portal"
                  to="/login"
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2 rounded-full border border-slate-200 transition-colors"
                  title="Open Customer Portal"
                >
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px] font-black">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                  <span>{user.name ? user.name.split(' ')[0] : 'Account'}</span>
                </Link>

                <button
                  onClick={logout}
                  title="Sign Out"
                  className="text-slate-500 hover:text-red-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  id="nav-btn-login"
                  to="/login"
                  className="text-slate-700 hover:text-slate-900 text-sm font-semibold px-3.5 py-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  Login
                </Link>

                <Link
                  id="nav-btn-signup"
                  to="/signup"
                  className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-sm font-bold px-4 py-2 rounded-full transition-all shadow-xs flex items-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Sign Up</span>
                </Link>
              </>
            )}

            <a
              id="nav-btn-free-trial"
              href="https://www.hirecarmarketplace.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0b1528] hover:bg-[#13233f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow active:scale-98"
            >
              Get a free trial
            </a>
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

      {/* 2. SOLUTIONS MEGA MENU (HOVER & CLICK ACTIVATED) */}
      {activeMenu === 'solutions' && (
        <div
          onMouseEnter={() => {
            if (solutionsHoverTimeoutRef.current) {
              clearTimeout(solutionsHoverTimeoutRef.current);
            }
          }}
          onMouseLeave={handleSolutionsMouseLeave}
        >
          <SolutionsMegaMenu onClose={() => setActiveMenu(null)} />
        </div>
      )}

      {/* 3. RESOURCES MEGA MENU (HOVER & CLICK ACTIVATED) */}
      {activeMenu === 'resources' && (
        <div
          onMouseEnter={() => {
            if (resourcesHoverTimeoutRef.current) {
              clearTimeout(resourcesHoverTimeoutRef.current);
            }
          }}
          onMouseLeave={handleResourcesMouseLeave}
        >
          <ResourcesMegaMenu onClose={() => setActiveMenu(null)} />
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
              {/* Product 1: WRMS PRO */}
              <div className="border-l-2 border-red-500 pl-3 space-y-1">
                <Link to="/products/techtonika-autolink" className="block font-bold text-slate-900 hover:text-red-600">
                  WRMS PRO
                </Link>
                <div className="text-xs text-slate-500 space-y-1 pl-1">
                  <Link to="/products/wrms-pro/overview" className="block hover:text-red-600">
                    Overview & Capabilities
                  </Link>
                  <Link to="/products/wrms-pro/technician-app" className="block hover:text-red-600">
                    Technician Mobile App
                  </Link>
                  <Link to="/products/wrms-pro/integrations" className="block hover:text-red-600">
                    Accounting & Parts Integrations
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
              <Link to="/products/wrms-pro" className="block py-1 hover:text-rose-600">
                WRMS Pro (Workshop Repair)
              </Link>
              <Link to="/products/chm" className="block py-1 hover:text-amber-600">
                CHM (Compliance & Safety)
              </Link>
              <Link to="/products/hirecar-marketplace" className="block py-1 hover:text-pink-600">
                HireCar Marketplace
              </Link>
              <Link to="/products/australia-fleet-tracking" className="block py-1 hover:text-emerald-600">
                Australia Fleet Tracking
              </Link>
              <Link to="/solutions" className="block py-1 font-semibold text-rose-600">
                View all solutions &rarr;
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
              <Link to="/resources/product-guides" className="block py-1 hover:text-red-600">
                Product Guides
              </Link>
              <Link to="/resources/training" className="block py-1 hover:text-red-600">
                Training
              </Link>
              <Link to="/resources/help" className="block py-1 hover:text-red-600">
                Help Centre
              </Link>
              <Link to="/resources/faqs" className="block py-1 hover:text-red-600">
                FAQs
              </Link>
            </div>

            <Link
              to="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg mt-2"
            >
              Plans & Pricing
            </Link>

            {/* Customer Auth in Mobile Menu */}
            {isAuthenticated && user ? (
              <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">{user.name}</p>
                      <p className="text-[11px] text-slate-500 leading-tight">{user.email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-200">
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-1.5 text-center bg-slate-900 text-white rounded-lg text-xs font-semibold"
                  >
                    Portal Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="px-3 py-1.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg text-xs font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-center text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
                >
                  Sign In / Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-center text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Sign Up</span>
                </Link>
              </div>
            )}

            <Link
              to="/admin/login"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Admin Portal</span>
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://www.hirecarmarketplace.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#0b1528] text-white py-2.5 rounded-full font-semibold text-sm"
            >
              Get a free trial
            </a>
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
