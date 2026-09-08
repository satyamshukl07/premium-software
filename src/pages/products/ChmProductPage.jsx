import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Calendar,
  CreditCard,
  Shield,
  Activity,
  Navigation,
  Wrench,
  Clock,
  BarChart3,
  Users,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Search,
  Filter,
  DollarSign,
  ChevronRight,
  Key,
  Camera,
  Layers,
  Phone,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function ChmProductPage() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Sample realistic Aussie car rental fleet data
  const fleetSummary = {
    total: 148,
    onHire: 112,
    available: 24,
    maintenance: 8,
    reserved: 4,
    utilisationRate: '88.4%',
    monthlyRevenue: '$184,250 AUD',
    activeTollCharges: '$1,420 AUD',
  };

  const sampleBookings = [
    {
      id: 'BK-8902',
      customer: 'David Sterling',
      car: '2024 Toyota RAV4 Cruiser Hybrid',
      rego: '892-XYZ (QLD)',
      category: 'Medium SUV',
      pickup: 'Brisbane Airport (BNE)',
      returnDate: '12 Sep 2026',
      total: '$840.00',
      status: 'Active On-Hire',
      tollLinked: true,
    },
    {
      id: 'BK-8903',
      customer: 'Sarah Chen',
      car: '2025 Tesla Model Y Long Range',
      rego: 'EV-441-QLD',
      category: 'Electric Premium',
      pickup: 'Gold Coast Airport (OOL)',
      returnDate: '10 Sep 2026',
      total: '$1,120.00',
      status: 'Active On-Hire',
      tollLinked: true,
    },
    {
      id: 'BK-8904',
      customer: 'Apex Mining Services',
      car: '2024 Ford Ranger Wildtrak 4x4',
      rego: '990-MINE',
      category: 'Commercial 4WD Ute',
      pickup: 'Mount Isa Depot',
      returnDate: '28 Sep 2026 (Monthly)',
      total: '$3,450.00',
      status: 'Recurring Contract',
      tollLinked: true,
    },
    {
      id: 'BK-8905',
      customer: 'Liam O’Connor',
      car: '2024 Hyundai i30 Sedan',
      rego: '512-ABC',
      category: 'Compact Sedan',
      pickup: 'Brisbane CBD (Queen St)',
      returnDate: 'Today (3:00 PM)',
      total: '$320.00',
      status: 'Return Scheduled',
      tollLinked: false,
    },
  ];

  const sampleTolls = [
    {
      id: 'TL-418',
      road: 'Clem7 Tunnel (Brisbane)',
      gantryTime: '08:42 AM, Today',
      plate: '892-XYZ',
      bookingId: 'BK-8902',
      charge: '$6.48 AUD',
      adminFee: '$3.50 AUD',
      status: 'Auto-Billed to Customer Card',
    },
    {
      id: 'TL-419',
      road: 'Gateway Bridge Toll',
      gantryTime: '09:15 AM, Today',
      plate: 'EV-441-QLD',
      bookingId: 'BK-8903',
      charge: '$5.25 AUD',
      adminFee: '$3.50 AUD',
      status: 'Auto-Billed to Customer Card',
    },
    {
      id: 'TL-420',
      road: 'AirportlinkM7',
      gantryTime: '11:04 AM, Yesterday',
      plate: '512-ABC',
      bookingId: 'BK-8905',
      charge: '$6.20 AUD',
      adminFee: '$3.50 AUD',
      status: 'Settled',
    },
  ];

  const sidebarMenuItems = [
    { name: 'Dashboard', icon: Activity },
    { name: 'Fleet Status', icon: Car },
    { name: 'Bookings', icon: Calendar },
    { name: 'Recurring Booking', icon: Clock },
    { name: 'Calendar', icon: Calendar },
    { name: 'Customers', icon: Users },
    { name: 'Financials', icon: DollarSign },
    { name: 'Driver Management', icon: Shield },
    { name: 'Toll Management', icon: Navigation },
    { name: 'Maintenance', icon: Wrench },
    { name: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="bg-slate-900 text-slate-100 font-sans min-h-screen">
      {/* Top Breadcrumb & Product Header */}
      <div className="bg-[#080e18] border-b border-slate-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white">Products</Link>
            <span>/</span>
            <span className="text-white font-bold">CHM — Smart Car Hire Management</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Sync with MEX CMMS & Linkt Tolls
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-gradient-to-b from-[#080e18] via-[#0b1526] to-[#0c182c] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SaaS Fleet & Car Rental Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              CHM — Smart Car Hire Management
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Automate your entire car rental operation with a unified dark-mode dashboard. Handle instant departures, recurring corporate subscriptions, digital driver licence OCR verification, automated Linkt toll notice recovery, and direct preventive maintenance synchronisation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/products/chm/dashboard"
                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl hover:shadow-blue-500/25 transition-all active:scale-98 flex items-center gap-2"
              >
                <span>Launch CHM Operations Console</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/free-trial"
                className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
              >
                Start 14-Day Free Fleet Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHM Interactive Dashboard Experience (Recreating Reference Screenshot) */}
      <section id="dashboard" className="py-16 bg-[#070d18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Interactive Dashboard Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Live Operations Center
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Click through the dark left sidebar to explore fleet status, active bookings, and automated toll recovery.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 font-mono hidden sm:inline-block">
                Depot: <strong>Brisbane Central (BNE-01)</strong>
              </span>
              <Link
                to="/products/chm/dashboard"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <span>Open Operations Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Full Recreated Dark Dashboard Window */}
          <div className="rounded-3xl border border-slate-700/80 bg-[#0a1220] shadow-2xl overflow-hidden">
            {/* Top Window Bar */}
            <div className="bg-[#060c16] px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-bold text-slate-300 font-mono tracking-wider ml-2">
                  CHM CLOUD // FLEET CONSOLE v4.2
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                  <Search className="w-3 h-3 text-slate-500" />
                  <span className="text-[11px] text-slate-400">Search rego, booking ID or customer...</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  JS
                </div>
              </div>
            </div>

            {/* Dashboard Workspace Grid (Sidebar + Main Content) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
              {/* Left Dark Sidebar (Col 3) */}
              <div className="lg:col-span-3 bg-[#070e1a] border-r border-slate-800 p-4 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Operations Menu
                  </div>
                  {sidebarMenuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md font-bold'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span>{item.name}</span>
                        {item.name === 'Toll Management' && (
                          <span className="ml-auto bg-blue-500/20 text-blue-300 text-[10px] px-1.5 py-0.2 rounded font-mono">
                            Auto
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 mt-6 text-xs space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">
                    MEX CMMS Bridge
                  </span>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Telemetry Sync Active</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    8 vehicles scheduled for 10,000 km oil change.
                  </p>
                </div>
              </div>

              {/* Main Workspace Area (Col 9) */}
              <div className="lg:col-span-9 p-6 bg-[#0a1220] overflow-y-auto space-y-6">
                {/* 4 Summary Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#0e192c] p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">
                      Total Fleet Size
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-white font-mono">
                        {fleetSummary.total}
                      </span>
                      <span className="text-[11px] text-emerald-400 font-bold">+6 this month</span>
                    </div>
                    <span className="text-[11px] text-slate-500">112 currently on road</span>
                  </div>

                  <div className="bg-[#0e192c] p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">
                      Fleet Utilisation
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                        {fleetSummary.utilisationRate}
                      </span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-[11px] text-slate-500">Target: &gt;85%</span>
                  </div>

                  <div className="bg-[#0e192c] p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">
                      Month Gross Revenue
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-white font-mono">
                        $184.2k
                      </span>
                      <span className="text-[11px] text-emerald-400 font-bold">+14.2%</span>
                    </div>
                    <span className="text-[11px] text-slate-500">AUD Payouts on time</span>
                  </div>

                  <div className="bg-[#0e192c] p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">
                      Auto Toll Recovery
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-blue-400 font-mono">
                        100%
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-[11px] text-slate-500">Direct Linkt / Eastlink</span>
                  </div>
                </div>

                {/* Active Bookings & Fleet Status View */}
                <div className="bg-[#0d1728] p-5 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>Current Active Bookings & Fleet Departures</span>
                        <span className="text-xs bg-blue-500/20 text-blue-400 font-mono px-2 py-0.5 rounded">
                          {sampleBookings.length} Active
                        </span>
                      </h3>
                      <span className="text-xs text-slate-400">
                        Showing live vehicle telematics, customer contracts and return schedules.
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1">
                        <Filter className="w-3 h-3" />
                        <span>Filter Fleet</span>
                      </button>
                    </div>
                  </div>

                  {/* Bookings Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800 bg-[#0a1220]/60">
                        <tr>
                          <th className="py-2.5 px-3">Booking ID</th>
                          <th className="py-2.5 px-3">Customer</th>
                          <th className="py-2.5 px-3">Vehicle & Rego</th>
                          <th className="py-2.5 px-3">Pickup Location</th>
                          <th className="py-2.5 px-3">Return Due</th>
                          <th className="py-2.5 px-3 text-right">Revenue</th>
                          <th className="py-2.5 px-3 text-center">Toll Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80 font-mono">
                        {sampleBookings.map((bk) => (
                          <tr key={bk.id} className="hover:bg-slate-800/40">
                            <td className="py-3 px-3 font-bold text-blue-400">{bk.id}</td>
                            <td className="py-3 px-3 font-sans font-semibold text-white">
                              {bk.customer}
                            </td>
                            <td className="py-3 px-3 font-sans">
                              <span className="text-slate-200 block font-medium">{bk.car}</span>
                              <span className="text-[10px] text-slate-400 font-mono">{bk.rego}</span>
                            </td>
                            <td className="py-3 px-3 font-sans text-slate-300">{bk.pickup}</td>
                            <td className="py-3 px-3 text-slate-300">{bk.returnDate}</td>
                            <td className="py-3 px-3 text-right font-bold text-emerald-400">
                              {bk.total}
                            </td>
                            <td className="py-3 px-3 text-center">
                              {bk.tollLinked ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-sans">
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                  Linkt Synced
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-sans">
                                  Pending Return
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Automated Toll Notices Recovery Card */}
                <div className="bg-[#0d1728] p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Navigation className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          Automated Toll Notice Recovery (Linkt & EastLink)
                        </h4>
                        <span className="text-xs text-slate-400">
                          Toll gantry passes are automatically matched with active driver contracts and billed directly to the customer credit card.
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Zero Manual Admin Required
                    </span>
                  </div>

                  <div className="space-y-2">
                    {sampleTolls.map((toll) => (
                      <div
                        key={toll.id}
                        className="bg-[#080f1c] p-3 rounded-xl border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-blue-400 font-bold">{toll.id}</span>
                          <div>
                            <span className="font-bold text-white block">{toll.road}</span>
                            <span className="text-slate-400 text-[11px] font-mono">
                              {toll.gantryTime} • Rego: {toll.plate} • {toll.bookingId}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 font-mono">
                          <div>
                            <span className="text-slate-400 text-[10px] block">Toll + Admin:</span>
                            <span className="text-white font-bold">{toll.charge} + {toll.adminFee}</span>
                          </div>
                          <span className="text-emerald-400 text-[11px] font-sans font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                            {toll.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Grid */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Enterprise Rental Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designed for Australian Vehicle Rental Fleets
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Eliminate paper contracts, manual toll invoices, and unrecovered damage charges with our purpose-built SaaS solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Toll Recovery',
                desc: 'Real-time integration with Linkt and EastLink APIs. When a hired vehicle passes an Australian toll gantry, the charge plus your custom admin fee is billed to the customer automatically.',
                icon: Navigation,
                tag: 'Zero Revenue Leakage',
              },
              {
                title: 'Pre-Authorised Bond Holds',
                desc: 'Automatically place and release security bond holds via Stripe or merchant vault. Deduct fuel shortfalls, late return surcharges, or cleaning penalties with one click.',
                icon: CreditCard,
                tag: 'Instant Authorisation',
              },
              {
                title: 'Digital Licence OCR & KYC',
                desc: 'Verify Australian state driver licences instantly. Automated OCR extracts licence number, expiry, and addresses, matching with fraud prevention databases.',
                icon: Shield,
                tag: 'Fraud Protection',
              },
              {
                title: 'Recurring Long-Term Subscriptions',
                desc: 'Flexible weekly and monthly billing cycles for commercial mining fleets, rideshare drivers, and corporate leases with automated tax invoices.',
                icon: Clock,
                tag: 'Recurring Billing',
              },
              {
                title: 'Timestamped Photo Inspection',
                desc: 'Mobile check-in/out app records 360° photos of bodywork, tyres, and odometer readings. Eliminates damage disputes before customers leave the lot.',
                icon: Camera,
                tag: 'Evidence Grade',
              },
              {
                title: 'Direct MEX CMMS Bridge',
                desc: 'Mileage and engine hours automatically feed into MEX CMMS to generate scheduled service work orders, brake inspections, and tyre replacement tickets.',
                icon: Wrench,
                tag: 'Preventive Care',
              },
            ].map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#0a1220] border border-slate-800 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/5 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1 text-xs font-bold text-blue-400">
                    <span>Learn module workflow</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#080e1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to upgrade your car hire operation?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Join car rental operators across Sydney, Melbourne, Brisbane, and the Gold Coast who use CHM to automate fleet bookings and eliminate toll leakage.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/free-trial"
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl"
            >
              Start Free 14-Day Fleet Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700"
            >
              Contact Fleet Solutions Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
