import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Facebook, Twitter, Phone, MapPin } from 'lucide-react';
import TechtonikaLogo from './TechtonikaLogo.jsx';

export default function Footer() {
  return (
    <footer className="bg-[#0b1320] text-slate-300 font-sans pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Column 1: Brand, Address & Contact (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group py-1">
              <TechtonikaLogo variant="dark" className="h-12 w-auto group-hover:opacity-95 transition-opacity" />
            </Link>

            <div className="space-y-4 text-xs text-slate-400">
              <div>
                <span className="uppercase text-[11px] font-bold tracking-wider text-slate-300 block mb-1">
                  ADDRESS
                </span>
                <p className="flex items-start gap-2 leading-relaxed text-slate-400">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Unit 5, 15 Anderson St, Fortitude Valley QLD 4006, Australia</span>
                </p>
              </div>

              <div>
                <span className="uppercase text-[11px] font-bold tracking-wider text-slate-300 block mb-1">
                  CONTACT
                </span>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>Office: </span>
                  <a href="tel:+61733924777" className="text-white hover:text-red-400 transition-colors">
                    +61 7 3392 4777
                  </a>
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>Urgent Support: </span>
                  <a href="tel:+61363612115" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                    +61 3 6361 2115
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: PRODUCT & FEATURES (Col span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="uppercase text-xs font-bold tracking-wider text-white block mb-3">
                PRODUCT
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/product/mex-cmms" className="hover:text-white transition-colors">
                    MEX CMMS
                  </Link>
                </li>
                <li>
                  <Link to="/product/mex-overview" className="hover:text-white transition-colors">
                    MEX Overview
                  </Link>
                </li>
                <li>
                  <Link to="/product/mex-apps" className="hover:text-white transition-colors">
                    MEX Apps
                  </Link>
                </li>
                <li>
                  <Link to="/product/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/product/integrations" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white transition-colors">
                    Plans & Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/user-portal" className="hover:text-white transition-colors">
                    User Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="uppercase text-[11px] font-bold tracking-wider text-slate-400 block mb-2">
                Features
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/product/inventory-management" className="hover:text-white transition-colors">
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link to="/product/prestart-checklist" className="hover:text-white transition-colors">
                    Prestarts
                  </Link>
                </li>
                <li>
                  <Link to="/product/work-request-management" className="hover:text-white transition-colors">
                    Work Request Management
                  </Link>
                </li>
                <li>
                  <Link to="/product/multi-site-management" className="hover:text-white transition-colors">
                    Multi-Site Management
                  </Link>
                </li>
                <li>
                  <Link to="/product/admin-control-centre" className="hover:text-white transition-colors">
                    Admin Control Centre
                  </Link>
                </li>
                <li>
                  <Link to="/product/mex-overview" className="hover:text-white transition-colors">
                    Asset Readings
                  </Link>
                </li>
                <li>
                  <Link to="/product/ai-insights-reporting" className="hover:text-white transition-colors">
                    AI Insights & Reporting
                  </Link>
                </li>
                <li>
                  <Link to="/product/ai-maintenance-scheduling" className="hover:text-white transition-colors">
                    AI Maintenance Scheduling
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: SOLUTIONS (Col span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="uppercase text-xs font-bold tracking-wider text-white block mb-3">
                SOLUTIONS
              </span>
              <span className="uppercase text-[11px] font-bold tracking-wider text-slate-400 block mb-2">
                By Capability
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/solutions/asset-management" className="hover:text-white transition-colors">
                    Asset Management
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/fleet-management" className="hover:text-white transition-colors">
                    Fleet Management
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/preventive-maintenance" className="hover:text-white transition-colors">
                    Preventive Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/work-order-management" className="hover:text-white transition-colors">
                    Work Order Management
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/reporting-analytics" className="hover:text-white transition-colors">
                    Reporting & Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="uppercase text-[11px] font-bold tracking-wider text-slate-400 block mb-2">
                By Industry
              </span>
              <ul className="grid grid-cols-1 gap-1.5 text-xs">
                <li>
                  <Link to="/solutions/aged-care" className="hover:text-white transition-colors">
                    Aged Care
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/breweries-wineries" className="hover:text-white transition-colors">
                    Breweries & Wineries
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/facilities" className="hover:text-white transition-colors">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/fleet-logistics" className="hover:text-white transition-colors">
                    Fleet & Logistics
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/food-beverage" className="hover:text-white transition-colors">
                    Food & Beverage
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/government-infrastructure" className="hover:text-white transition-colors">
                    Government & Infrastructure
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/healthcare-biotech" className="hover:text-white transition-colors">
                    Healthcare & Biotech
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/manufacturing" className="hover:text-white transition-colors">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/mining" className="hover:text-white transition-colors">
                    Mining
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ports-marines" className="hover:text-white transition-colors">
                    Ports & Marines
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/utilities" className="hover:text-white transition-colors">
                    Utilities
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: RESOURCES & COMPANY (Col span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="uppercase text-xs font-bold tracking-wider text-white block mb-3">
                RESOURCES
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/resources" className="hover:text-white transition-colors">
                    All Resources
                  </Link>
                </li>
                <li>
                  <Link to="/resources/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/resources/client-success-stories" className="hover:text-white transition-colors">
                    Client Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/resources/whitepapers" className="hover:text-white transition-colors">
                    Whitepapers
                  </Link>
                </li>
                <li>
                  <Link to="/resources/webinars" className="hover:text-white transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/resources/training" className="hover:text-white transition-colors">
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="uppercase text-xs font-bold tracking-wider text-white block mb-3">
                COMPANY
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; 2026 MEX Maintenance Software. All rights reserved.</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://linkedin.com"
              target="www.linkedin.com/in/satyam-shukla07"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
