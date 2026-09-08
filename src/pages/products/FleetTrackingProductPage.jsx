import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Radio,
  Navigation,
  Camera,
  Building2,
  FileText,
  Phone,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  AlertTriangle,
  Clock,
  TrendingDown,
  Cpu,
  Layers,
  MapPin,
  Car,
  Truck,
  Wrench,
  Fuel,
  Check,
  ChevronRight,
  Eye,
  Sliders,
} from 'lucide-react';

export default function FleetTrackingProductPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine active view tab
  const getActiveTab = () => {
    if (currentPath.includes('/tracking-features')) return 'features';
    if (currentPath.includes('/dash-cams')) return 'dash-cams';
    if (currentPath.includes('/business')) return 'business';
    if (currentPath.includes('/blog')) return 'blog';
    if (currentPath.includes('/about')) return 'about';
    if (currentPath.includes('/contact')) return 'contact';
    return 'overview';
  };

  const activeTab = getActiveTab();

  // Interactive Live GPS tracking simulator state
  const [selectedVehicle, setSelectedVehicle] = useState('V-101');

  const fleetVehicles = [
    {
      id: 'V-101',
      unit: 'Ford Ranger 4x4 (Tradie Field)',
      rego: '918-BNE',
      driver: 'Mark Peterson',
      location: 'M1 Pacific Motorway, Southbound (km 42.8)',
      speed: '98 km/h',
      speedLimit: '100 km/h',
      ignition: 'ON - Cruising',
      battery: '13.8V',
      fuelLevel: '78%',
      heading: 'South-East',
      lastPing: '2 seconds ago (Telstra 4G)',
      idleTime: '0 min',
      status: 'Normal',
    },
    {
      id: 'V-102',
      unit: 'Isuzu NPR 400 Refrigerated Truck',
      rego: '441-QLD',
      driver: 'Craig Henderson',
      location: 'Port of Brisbane Logistics Hub, Gate 3',
      speed: '0 km/h',
      speedLimit: '40 km/h',
      ignition: 'IDLE (Reefer Active)',
      battery: '13.6V',
      fuelLevel: '64%',
      heading: 'Stationary',
      lastPing: '1 second ago (Telstra 4G)',
      idleTime: '8 min',
      tempSensor: '-18.4°C (Safe Frozen)',
      status: 'Idling',
    },
    {
      id: 'V-103',
      unit: 'Toyota HiLux Dual-Cab (Mine Spec)',
      rego: '882-MINE',
      driver: 'Nathan Taylor',
      location: 'Bowen Basin Access Road, Sector 4',
      speed: '62 km/h',
      speedLimit: '70 km/h',
      ignition: 'ON - Moving',
      battery: '14.1V',
      fuelLevel: '91%',
      heading: 'North',
      lastPing: '4 seconds ago (Satellite Fallback)',
      idleTime: '0 min',
      status: 'Normal',
    },
  ];

  const currentVehicleData = fleetVehicles.find((v) => v.id === selectedVehicle) || fleetVehicles[0];

  return (
    <div className="bg-[#071326] text-slate-100 font-sans min-h-screen">
      {/* 1. Bright Green Top Contact Bar (From Reference Screenshot) */}
      <div className="bg-[#10b981] text-slate-950 py-2 px-4 text-xs font-bold tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Australia’s #1 4G Fleet GPS Telematics & AI Dash Cam Network</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Brisbane National NOC • Telstra IoT Partner</span>
            <a href="tel:1300882477" className="hover:underline flex items-center gap-1 font-black">
              <Phone className="w-3.5 h-3.5" />
              <span>Call Toll Free: 1300 882 477</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Brand Navigation Bar */}
      <nav className="border-b border-slate-800 bg-[#08172e] sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo Area */}
          <Link to="/products/fleet-tracking" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#10b981] text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <Radio className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white leading-none tracking-tight">
                Australia <span className="text-[#f59e0b]">Fleet Tracking</span>
              </span>
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                Real-Time Telematics & Video
              </span>
            </div>
          </Link>

          {/* Sub Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-bold text-slate-300">
            <Link
              to="/products/fleet-tracking"
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'overview' ? 'text-[#f59e0b] bg-slate-800 font-extrabold' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Overview
            </Link>
            <Link
              to="/products/fleet-tracking/tracking-features"
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'features' ? 'text-[#f59e0b] bg-slate-800 font-extrabold' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Tracking Features
            </Link>
            <Link
              to="/products/fleet-tracking/dash-cams"
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'dash-cams' ? 'text-[#f59e0b] bg-slate-800 font-extrabold' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Dash Cams
            </Link>
            <Link
              to="/products/fleet-tracking/business"
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'business' ? 'text-[#f59e0b] bg-slate-800 font-extrabold' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Business Solutions
            </Link>
            <Link
              to="/products/fleet-tracking/blog"
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'blog' ? 'text-[#f59e0b] bg-slate-800 font-extrabold' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Blogs & ATO Rules
            </Link>
            <Link
              to="/products/fleet-tracking/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'about' ? 'text-[#f59e0b] bg-slate-800 font-extrabold' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/products/fleet-tracking/contact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeTab === 'contact' ? 'text-[#f59e0b] bg-slate-800 font-extrabold' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/products/fleet-tracking/contact"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-black text-xs px-4 py-2 rounded-full transition-all shadow-md active:scale-98"
            >
              Get Free Fleet Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* 3. Dark Blue Hero Section with Yellow Accent Typography (From Reference) */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-gradient-to-b from-[#08172e] via-[#071326] to-[#060e1b] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5" />
                <span>4G LTE-M Telematics & AI Video</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Smarter Fleet Management.{' '}
                <span className="text-[#f59e0b] block mt-1">Stronger Business.</span>
              </h1>

              {/* Exact Requested Supporting Text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Real-time GPS tracking solutions for vehicles and assets. 5-second live telemetry, AI dual-facing dash cams with collision alert, automated ATO-compliant logbooks, and direct work-order sync into MEX CMMS.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-semibold pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                  <span>Telstra 4G + Satellite Fallback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                  <span>ATO Approved Digital FBT Logbook</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                  <span>Instant Driver Behaviour Scorecards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                  <span>Automated Fuel Tax Credits (FTC)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/products/fleet-tracking/contact"
                  className="px-8 py-4 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-black text-sm shadow-xl hover:shadow-amber-500/20 transition-all flex items-center gap-2 active:scale-98"
                >
                  <span>Request Hardware Trial Pack</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#live-simulator"
                  className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
                >
                  View Live GPS Map Simulator
                </a>
              </div>
            </div>

            {/* Right Visual / Hardware Banner */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-slate-700 bg-gradient-to-br from-[#0e213d] to-[#071326] p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/80 pb-3">
                  <span className="font-mono text-[#10b981] font-bold">● TELSTRA 4G LTE-M CONNECTED</span>
                  <span className="font-mono">UPDATE: 5 SEC</span>
                </div>

                <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"
                    alt="Australia Fleet Tracking Telematics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-black/30"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-[#08172e]/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Active Assets Tracked</span>
                      <span className="font-bold text-white">48,500+ Vehicles Across Australia</span>
                    </div>
                    <span className="bg-[#10b981]/20 text-[#10b981] font-bold px-2 py-0.5 rounded text-[10px]">
                      99.98% Uptime
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Avg Fuel Cut</span>
                    <span className="font-black text-[#10b981] text-sm">-18.4%</span>
                  </div>
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Accident Drop</span>
                    <span className="font-black text-[#f59e0b] text-sm">-42%</span>
                  </div>
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">ATO Rebate</span>
                    <span className="font-black text-white text-sm">100% Tax</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 6 Required Feature Cards (From User Prompt) */}
      <section className="py-20 bg-[#071326] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Six Pillars of High-Performance Australian Fleet Tracking
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Engineered specifically for harsh Australian outback conditions, city delivery runs, civil construction sites, and remote transport routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Live GPS Tracking',
                desc: 'Blazing fast 5-second updates across Telstra and Optus networks with satellite fallback in outback zones. Pinpoint exact street addresses and turn-by-turn playback.',
                icon: Navigation,
                tag: '5-Sec Refresh',
              },
              {
                title: 'Detailed Reports',
                desc: 'Over 40 pre-built automated reports including daily run sheets, driver hours, geofence site visits, idle waste audits, and automated service meter triggers.',
                icon: FileText,
                tag: 'Automated PDF/CSV',
              },
              {
                title: 'Instant Alerts',
                desc: 'Real-time SMS and push alerts for unauthorized after-hours vehicle movement, geofence entry/exit, battery tamper, tow-away, and roll-over impact detection.',
                icon: AlertTriangle,
                tag: 'Instant Push',
              },
              {
                title: 'Driver Safety',
                desc: 'Monitor and coach drivers with automated scoring for harsh braking, sharp cornering, rapid acceleration, and speed limit violations to lower insurance premiums.',
                icon: Shield,
                tag: 'Safe Driving AI',
              },
              {
                title: 'Reduce Fuel Costs',
                desc: 'Identify and cut excessive idling by up to 25%. Eliminate unauthorized weekend detours and use route dispatch optimization to trim thousands off monthly fuel bills.',
                icon: Fuel,
                tag: 'Up to 25% Savings',
              },
              {
                title: 'Easy Integration',
                desc: 'Direct plug-and-play synchronisation with MEX CMMS. Telemetry odometer and engine hours automatically create preventive maintenance service work orders.',
                icon: Wrench,
                tag: 'MEX CMMS Native',
              },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#091a33] border border-slate-800 hover:border-[#f59e0b]/50 transition-all hover:shadow-xl hover:shadow-amber-500/5 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#f59e0b] flex items-center justify-center font-bold group-hover:bg-[#f59e0b] group-hover:text-slate-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#10b981] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1 text-xs font-bold text-[#f59e0b]">
                    <span>Explore technical specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Live GPS Simulator & Fleet Dispatch View */}
      <section id="live-simulator" className="py-16 bg-[#060e1b] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#10b981]">
                Live Simulator
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Real-Time Vehicle Telematics Console
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select an active Australian vehicle below to inspect real-time sensor streams and telemetry pings.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping"></span>
              <span className="text-xs font-mono text-[#10b981] font-bold">Telstra 4G Live Stream</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-[#091930] p-6 shadow-2xl">
            {/* Vehicle Selector Tabs */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800">
              {fleetVehicles.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(v.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    selectedVehicle === v.id
                      ? 'bg-[#f59e0b] text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>{v.unit}</span>
                  <span className="text-[10px] font-mono opacity-80">({v.rego})</span>
                </button>
              ))}
            </div>

            {/* Selected Vehicle Telemetry Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Current Location
                </span>
                <span className="font-bold text-white text-xs block">{currentVehicleData.location}</span>
                <span className="text-[10px] text-slate-500 font-mono">GPS Fix: 9 Satellites Locked</span>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Speed & Heading
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#10b981] font-mono">{currentVehicleData.speed}</span>
                  <span className="text-[10px] text-slate-400 font-mono">Limit: {currentVehicleData.speedLimit}</span>
                </div>
                <span className="text-[10px] text-slate-500">Heading: {currentVehicleData.heading}</span>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Ignition & Battery
                </span>
                <span className="font-bold text-white text-xs block">{currentVehicleData.ignition}</span>
                <span className="text-[10px] text-[#10b981] font-mono">Alternator: {currentVehicleData.battery}</span>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Driver Assigned
                </span>
                <span className="font-bold text-white text-xs block">{currentVehicleData.driver}</span>
                <span className="text-[10px] text-slate-400 font-mono">Last Ping: {currentVehicleData.lastPing}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI Dual-Facing Dash Cams Section */}
      <section className="py-20 bg-[#071326] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10b981] bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Next-Gen Video Telematics
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                AI Dual-Facing Dash Cams with ADAS & Driver Safety
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Protect your drivers and exonerate your business from false claims. Our 4G connected dual cameras record crisp 1080p road video while AI sensors monitor driver drowsiness, mobile phone distraction, and tailgating.
              </p>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Instant Cloud Incident Upload</strong>
                    <span className="text-slate-400">Crash or harsh braking events trigger a 20-second video clip sent straight to fleet managers in seconds.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Driver Fatigue & Distraction Warnings</strong>
                    <span className="text-slate-400">In-cab gentle audible chimes warn drivers if they close their eyes for &gt;1.5 seconds or look down at a phone.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/products/fleet-tracking/dash-cams"
                  className="inline-flex items-center gap-2 text-xs font-black text-[#f59e0b] hover:underline"
                >
                  <span>Explore Dash Cam Hardware Models & Pricing &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-700 bg-slate-900 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="AI Dash Cam View"
                  className="w-full h-72 object-cover"
                />
                <div className="p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">1080p HDR • IR Night Vision • 4G LTE Auto-Sync</span>
                  <span className="text-[#10b981] font-bold">Tamper-Proof SD Lockbox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Conversion Banner */}
      <section className="py-20 bg-[#050c18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Equip Your Fleet with Australia’s Leading GPS Tracking
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Get a tailored quote with on-site installation anywhere across Sydney, Melbourne, Brisbane, Perth, and regional Australia.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/products/fleet-tracking/contact"
              className="px-8 py-3.5 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-black text-sm shadow-xl"
            >
              Get Free Fleet Quote & Demo
            </Link>
            <a
              href="tel:1300882477"
              className="px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#10b981]" />
              <span>Call 1300 882 477</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
