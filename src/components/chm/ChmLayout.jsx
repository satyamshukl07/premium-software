import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useChm } from '../../context/ChmContext.jsx';
import {
  LayoutDashboard,
  Car,
  CalendarCheck,
  Clock,
  Calendar,
  Users,
  CreditCard,
  ShieldAlert,
  Navigation,
  Wrench,
  BarChart3,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  Maximize,
  Minimize,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import ChmToast from './ChmToast.jsx';

export default function ChmLayout({ children }) {
  const { darkMode, toggleDarkMode } = useChm();
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Submenu expansion states
  const isFinancialsActive =
    location.pathname.includes('/financials') ||
    location.pathname.includes('/transactions') ||
    location.pathname.includes('/expense');

  const isMaintenanceActive =
    location.pathname.includes('/maintenance') ||
    location.pathname.includes('/rego-insurance');

  const isSettingsActive = location.pathname.includes('/settings');

  const [financialsOpen, setFinancialsOpen] = useState(isFinancialsActive);
  const [maintenanceOpen, setMaintenanceOpen] = useState(isMaintenanceActive);
  const [settingsOpen, setSettingsOpen] = useState(isSettingsActive);

  // Keep submenus open if active route
  useEffect(() => {
    if (isFinancialsActive) setFinancialsOpen(true);
    if (isMaintenanceActive) setMaintenanceOpen(true);
    if (isSettingsActive) setSettingsOpen(true);
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/products/chm/dashboard',
      altPaths: ['/products/chm'],
      icon: LayoutDashboard,
    },
    {
      id: 'fleet-status',
      label: 'Fleet Status',
      path: '/products/chm/fleet-status',
      icon: Car,
    },
    {
      id: 'bookings',
      label: 'Bookings',
      path: '/products/chm/bookings',
      icon: CalendarCheck,
    },
    {
      id: 'recurring-booking',
      label: 'Recurring Booking',
      path: '/products/chm/recurring-booking',
      icon: Clock,
    },
    {
      id: 'calendar',
      label: 'Calendar',
      path: '/products/chm/calendar',
      icon: Calendar,
    },
    {
      id: 'customers',
      label: 'Customers',
      path: '/products/chm/customers',
      icon: Users,
    },
    {
      id: 'financials',
      label: 'Financials',
      isExpandable: true,
      isOpen: financialsOpen,
      setOpen: setFinancialsOpen,
      icon: CreditCard,
      isActive: isFinancialsActive,
      children: [
        { label: 'Transactions', path: '/products/chm/financials/transactions' },
        { label: 'Expenses', path: '/products/chm/financials/expenses' },
      ],
    },
    {
      id: 'driver-management',
      label: 'Driver Management',
      path: '/products/chm/driver-management',
      icon: ShieldAlert,
    },
    {
      id: 'toll-management',
      label: 'Toll Management',
      path: '/products/chm/toll-management',
      icon: Navigation,
    },
    {
      id: 'maintenance',
      label: 'Maintenance',
      isExpandable: true,
      isOpen: maintenanceOpen,
      setOpen: setMaintenanceOpen,
      icon: Wrench,
      isActive: isMaintenanceActive,
      children: [
        { label: 'Maintenance', path: '/products/chm/maintenance' },
        { label: 'Rego & Insurance', path: '/products/chm/rego-insurance' },
      ],
    },
    {
      id: 'analytics',
      label: 'Analytics',
      path: '/products/chm/analytics',
      icon: BarChart3,
    },
    {
      id: 'reports',
      label: 'Reports',
      path: '/products/chm/reports',
      icon: FileText,
    },
    {
      id: 'settings',
      label: 'Settings',
      isExpandable: true,
      isOpen: settingsOpen,
      setOpen: setSettingsOpen,
      icon: Settings,
      isActive: isSettingsActive,
      children: [
        { label: 'General Settings', path: '/products/chm/settings/general' },
        { label: 'User Management', path: '/products/chm/settings/users' },
        { label: 'Roles & Permissions', path: '/products/chm/settings/roles' },
        { label: 'Notification Settings', path: '/products/chm/settings/notifications' },
        { label: 'System Settings', path: '/products/chm/settings/system' },
      ],
    },
  ];

  const isCurrentRoute = (path, altPaths = []) => {
    if (location.pathname === path) return true;
    if (altPaths.includes(location.pathname)) return true;
    return false;
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#f4f6f9] text-slate-800'}`}>
      <ChmToast />

      {/* CHM WRAPPER */}
      <div className="flex-1 flex flex-row overflow-hidden relative">
        {/* DESKTOP + MOBILE SIDEBAR */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#141b26] text-slate-300 flex flex-col border-r border-slate-800 shadow-2xl transition-transform duration-200 lg:static lg:translate-x-0 ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Sidebar Brand Header */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-slate-800/80 bg-[#0f1520]">
            <Link to="/products/chm/dashboard" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-wider text-white">CHM</span>
                <span className="text-[9.5px] uppercase tracking-wider font-semibold text-slate-400 leading-tight">
                  Smart Car Hire Management
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Scrollable Area */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto text-xs font-semibold custom-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;

              if (item.isExpandable) {
                return (
                  <div key={item.id} className="space-y-0.5">
                    <button
                      onClick={() => item.setOpen(!item.isOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors text-left ${
                        item.isActive
                          ? 'text-white bg-blue-600/20 font-bold'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${item.isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-400 ${
                          item.isOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>

                    {item.isOpen && (
                      <div className="pl-9 pr-2 py-1 space-y-1 bg-[#0f1520]/60 rounded-lg">
                        {item.children.map((sub) => {
                          const active = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`block px-2.5 py-1.5 rounded-md text-[11.5px] transition-colors ${
                                active
                                  ? 'text-blue-400 bg-blue-500/10 font-bold'
                                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isCurrentRoute(item.path, item.altPaths);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    active
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Bottom Sync Status */}
          <div className="p-3 border-t border-slate-800/80 bg-[#0f1520] space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>MEX CMMS Sync</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">ONLINE</span>
            </div>
            <div className="bg-slate-800/70 p-2 rounded-lg text-[10px] text-slate-400 flex items-center justify-between">
              <span>Depot: BNE-01 Central</span>
              <span className="text-white font-bold">148 Fleet</span>
            </div>
          </div>
        </aside>

        {/* Mobile Backdrop */}
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          />
        )}

        {/* MAIN CONTENT COLUMN */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* CHM TOP HEADER */}
          <header className="h-16 px-4 sm:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 z-20 shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-white">Smart Car Hire Management</span>
                <span>/</span>
                <span className="capitalize">{location.pathname.split('/').pop().replace(/-/g, ' ') || 'Dashboard'}</span>
              </div>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Back to MEX Site button */}
              <Link
                to="/"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                title="Return to MEX CMMS Marketing Website"
              >
                <span>Exit to MEX Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* User Profile Avatar */}
              <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-700">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  SS
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Satyam Shukla</span>
                  <span className="text-[10px] text-slate-400">Super Administrator</span>
                </div>
              </div>
            </div>
          </header>

          {/* MAIN PAGE VIEW */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>

          {/* CHM FOOTER */}
          <footer className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
            <div>
              2026 © <span className="font-bold text-slate-700 dark:text-slate-300">Carhiremanager</span> — Smart Car Hire Management Platform
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <Link to="/products/chm/dashboard" className="hover:text-blue-600">About</Link>
              <Link to="/products/chm/settings/system" className="hover:text-blue-600">Support</Link>
              <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
