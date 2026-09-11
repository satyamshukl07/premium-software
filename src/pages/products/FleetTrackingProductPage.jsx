import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navigation,
  Shield,
  Truck,
  Package,
  Cpu,
  Camera,
  Sliders,
  MapPin,
  ExternalLink,
  Check,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Fuel,
  Wrench,
  ArrowRight,
  ShoppingCart,
  Radio,
  Clock,
  Layers,
  Sparkles,
  Car,
  Flame,
  Activity,
  UserCheck,
  BellRing,
} from 'lucide-react';

export default function FleetTrackingProductPage() {
  const MAIN_WEBSITE_URL = 'https://australiafleettracking.com/';
  const [activeTrackingFeature, setActiveTrackingFeature] = useState('gps-tracking');

  // 1. PRODUCT MODULES / FEATURES (Grid structure matching MEX CMMS page)
  const fleetModules = [
    {
      title: 'GPS Tracking',
      slug: 'gps-tracking',
      desc: 'Real-time 5-second GPS positioning with turn-by-turn route history and sub-meter location accuracy.',
      icon: <Navigation className="w-6 h-6 text-[#00c875]" />,
      tag: 'Live Telematics',
    },
    {
      title: 'Fleet Management',
      slug: 'fleet-management',
      desc: 'Centralized dashboard tracking vehicle health, driver rosters, utilization rates, and operational overheads.',
      icon: <Sliders className="w-6 h-6 text-[#00c875]" />,
      tag: 'Operations',
    },
    {
      title: 'Vehicle Tracking',
      slug: 'vehicle-tracking',
      desc: 'CAN bus diagnostic reads, true engine run hours, and odometer readings synchronized for trade utes and haulage.',
      icon: <Truck className="w-6 h-6 text-[#00c875]" />,
      tag: 'Commercial Fleets',
    },
    {
      title: 'Asset Tracking',
      slug: 'asset-tracking',
      desc: 'Rugged IP68 unpowered GPS trackers with up to 5+ years of autonomous battery life for trailers and plant gear.',
      icon: <Package className="w-6 h-6 text-[#00c875]" />,
      tag: 'Heavy Machinery',
    },
    {
      title: 'Driver Safety',
      slug: 'driver-safety',
      desc: 'AI computer vision monitoring in-cabin driver drowsiness, mobile phone usage, and harsh braking events.',
      icon: <Shield className="w-6 h-6 text-[#00c875]" />,
      tag: 'AI Safety & Vision',
    },
    {
      title: 'Reports & Alerts',
      slug: 'reports-alerts',
      desc: 'Instant SMS, push, and email alerts for speeding, out-of-hours movements, and ATO-compliant digital logbooks.',
      icon: <FileText className="w-6 h-6 text-[#00c875]" />,
      tag: 'Compliance & Tax',
    },
    {
      title: 'API & Integrations',
      slug: 'api-integrations',
      desc: 'High-speed REST APIs and webhooks pushing live odometers directly into MEX CMMS maintenance work orders.',
      icon: <Cpu className="w-6 h-6 text-[#00c875]" />,
      tag: 'API & Telematics',
    },
    {
      title: 'Geofencing',
      slug: 'geofencing',
      desc: 'Set custom geographic boundaries around job sites, client depots, and yards with immediate entry/exit timestamps.',
      icon: <MapPin className="w-6 h-6 text-[#00c875]" />,
      tag: 'Perimeter Control',
    },
    {
      title: 'Fuel Monitoring',
      slug: 'fuel-monitoring',
      desc: 'Eliminate fuel theft and excessive vehicle idling while automating Fuel Tax Credit (FTC) rebate claims.',
      icon: <Fuel className="w-6 h-6 text-[#00c875]" />,
      tag: 'Cost Control',
    },
    {
      title: 'AI Dash Cams',
      slug: 'ai-dash-cams',
      desc: 'Dual-facing 1080p road and cabin cameras with cloud incident backup and false insurance claim exoneration.',
      icon: <Camera className="w-6 h-6 text-[#00c875]" />,
      tag: 'Video Telematics',
    },
    {
      title: 'Lone Worker Safety',
      slug: 'lone-worker-safety',
      desc: 'Ultra-compact wearable SOS pendants with 2-way voice fallback, 3D fall detection, and emergency distress signals.',
      icon: <UserCheck className="w-6 h-6 text-[#00c875]" />,
      tag: 'Field Protection',
    },
    {
      title: 'Maintenance Triggers',
      slug: 'maintenance-triggers',
      desc: 'Trigger scheduled mechanical services automatically when assets reach specific mileage or engine hour thresholds.',
      icon: <Wrench className="w-6 h-6 text-[#00c875]" />,
      tag: 'MEX CMMS Sync',
    },
  ];

  // 2. PRODUCT ECOSYSTEM DATA (4 Products, Australia Fleet Tracking is marked active)
  const ecosystemProducts = [
    {
      id: 'mex',
      name: 'MEX CMMS',
      subtitle: 'Maintenance Management Software',
      badge: 'Core Enterprise CMMS',
      badgeStyle: 'bg-red-50 text-red-600 border-red-200',
      path: '/products/mex',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      description:
        'Australia’s premier Computerised Maintenance Management System for complete asset lifecycle management, work order scheduling, and inventory control.',
      stats: '12,000+ Facilities',
      isActive: false,
    },
    {
      id: 'chm',
      name: 'CHM',
      subtitle: 'Smart Car Hire Management',
      badge: 'Rental Operations SaaS',
      badgeStyle: 'bg-blue-50 text-blue-600 border-blue-200',
      path: '/products/chm',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      description:
        'All-in-one vehicle hire operations platform. Manage real-time fleet availability, recurring bookings, and automated Linkt toll notice recovery.',
      stats: '100% Toll Recovery',
      isActive: false,
    },
    {
      id: 'hirecar',
      name: 'HireCar Marketplace',
      subtitle: 'Australia Car Rental Marketplace',
      badge: 'Verified Marketplace',
      badgeStyle: 'bg-orange-50 text-[#ea580c] border-orange-200',
      path: '/products/hirecar',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      description:
        'Australia’s premier independent car rental exchange. Compare compact cars, 4WD utes, and family SUVs with zero surprise counter charges.',
      stats: '5,000+ Vehicles',
      isActive: false,
    },
    {
      id: 'tracking',
      name: 'Australia Fleet Tracking',
      subtitle: '4G GPS Telematics & Dash Cams',
      badge: 'Active Product',
      badgeStyle: 'bg-[#00c875]/20 text-[#00c875] border-[#00c875]/40 font-bold',
      path: '/products/fleet-tracking',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80',
      description:
        'Next-generation 4G LTE-M vehicle GPS tracking and AI dual-facing dash cams. Live 5-second updates, ATO-compliant logbooks, and direct MEX CMMS integration.',
      stats: '48,500+ Active Trackers',
      isActive: true,
    },
  ];

  // 3. TRACKING FEATURES (Section 8: GPS Tracking, Personal Tracking, Asset Tracking, Vehicle Tracking, API)
  const trackingFeatureDetails = {
    'gps-tracking': {
      title: 'GPS Tracking',
      badge: 'Telstra 4G LTE-M & NB-IoT',
      tagline: 'Continuous real-time positioning with 5-second refresh rates across Australia',
      description:
        'Australia Fleet Tracking delivers high-precision GNSS positioning across urban and remote outback corridors. Monitor asset locations, ignition telemetry, stop durations, and turn-by-turn trip histories on interactive maps.',
      highlights: [
        'Live 5-second telemetry updates with zero satellite or cellular latency',
        'Turn-by-turn historical trip playback with accurate speed timestamps',
        'Automated geofences with instant SMS, push, and email enter/exit alerts',
        'ATO-compliant digital FBT logbook with automated business vs. private trip categorisation',
      ],
      specs: 'Telstra 4G LTE-M • 99.98% Nationwide Coverage • Sub-meter GNSS Accuracy',
    },
    'personal-tracking': {
      title: 'Personal Tracking',
      badge: 'Lone Worker Duress',
      tagline: 'Protect remote personnel, field fitters, and healthcare teams',
      description:
        'Dedicated ultra-compact personal GPS pendants and duress alarms engineered for lone workers, civil contractors, mining geologists, and remote maintenance crews.',
      highlights: [
        'One-touch SOS duress button with automated 2-way voice call back',
        'Integrated 3D gyroscopic sensors for automatic fall and man-down detection',
        'Customizable safe-zone boundary alerts and silent emergency beacons',
        'Rechargeable long-life lithium battery with automated low-power notifications',
      ],
      specs: 'IP67 Waterproof • Telstra M2M SIM Included • 72-Hour Continuous Battery',
    },
    'asset-tracking': {
      title: 'Asset Tracking',
      badge: 'Unpowered & Rugged',
      tagline: 'Autonomous asset tracking for trailers, containers, and generators',
      description:
        'Submersible battery-powered GPS trackers for non-powered assets including shipping containers, plant trailers, skid-steers, lighting towers, and remote site sheds.',
      highlights: [
        'Up to 5+ years autonomous battery life on periodic ping schedules',
        'Ultra-rugged UV-stabilized housing rated to IP68 water immersion',
        'Smart vibration and movement wake-up with theft recovery mode',
        'Internal temperature, tilt, impact, and battery level sensors',
      ],
      specs: 'IP68 Submersible • Magnetic or Bolt Mount • 5+ Year Field Battery',
    },
    'vehicle-tracking': {
      title: 'Vehicle Tracking',
      badge: 'Commercial Fleets',
      tagline: 'Comprehensive telematics for trade utes, vans, and haulage vehicles',
      description:
        'Heavy-duty telematics for commercial fleets, civil contractors, and transport companies. Directly reads engine run hours, true odometer, and diagnostic fault codes.',
      highlights: [
        'Quick OBD-II or concealed 3-wire hardwired installation options',
        'Live odometer and engine hours automatically synced into MEX CMMS',
        'Driver behavior scoring: harsh braking, rapid acceleration, speeding',
        'Automatic service reminder triggers based on real odometer distance',
      ],
      specs: '12V / 24V Auto-Sensing • Internal Crash Backup Battery • CAN Bus Ready',
    },
    'api': {
      title: 'API & Integrations',
      badge: 'Developer & ERP Ready',
      tagline: 'Open REST APIs and direct enterprise telemetry synchronisation',
      description:
        'Connect fleet telemetry directly with your enterprise software, including MEX CMMS, SAP, transport management systems (TMS), and custom data warehouses.',
      highlights: [
        'Push real-time vehicle odometer and engine run hours into MEX work orders',
        'Webhooks for live geofence crossings, panic alerts, and DTC fault codes',
        'Full Swagger/OpenAPI documentation with ready-to-run sample payloads',
        'Export telemetry in standard JSON, GeoJSON, and CSV formats',
      ],
      specs: 'High-Throughput WebSockets • Token Authentication • 99.99% Cloud SLA',
    },
  };

  // 4. GPS TRACKING HARDWARE (Section 10: 8 authentic products with prices & CTA)
  const hardwareProducts = [
    {
      id: 'obd2-cable',
      name: '16 Pin OBD2 Cable',
      category: 'Accessories',
      badge: 'SALE!',
      originalPrice: 55.0,
      salePrice: 1.1,
      image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=500&q=80',
      description:
        'High-grade 16-pin OBD2 extension cable with passthrough socket. Allows discreet under-dash installation while keeping the factory diagnostic port open for servicing.',
    },
    {
      id: 'dual-lens-cam',
      name: 'Dual Lens Dash Cam',
      category: 'Dash Cameras',
      badge: 'SALE!',
      originalPrice: 165.0,
      salePrice: 148.5,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&q=80',
      description:
        'Dual 1080p forward road view and infrared driver cabin view with mobile app playback, G-sensor incident clip protection, and automated cloud synchronization.',
    },
    {
      id: 'fmc003',
      name: 'FMC003 Plug & Play Tracker',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 192.5,
      salePrice: 154.0,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80',
      description:
        'Advanced 4G LTE Cat 1 plug-and-play OBD tracker capable of reading real vehicle OEM parameters including odometer, fuel level, and diagnostic trouble codes.',
    },
    {
      id: 'fmc125',
      name: 'FMC125 Advanced Terminal',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 220.0,
      salePrice: 139.7,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80',
      description:
        'Advanced 4G telematics device with Dual-SIM fallback, RS232/RS485 serial interfaces for fuel sensors, RFID driver identification readers, and CAN bus integration.',
    },
    {
      id: 'fmc130',
      name: 'FMC130 Flexible GNSS Terminal',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 273.9,
      salePrice: 218.9,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80',
      description:
        'High-performance 4G Cat 1 tracker with flexible inputs (analog, digital, negative), internal GNSS/GSM antennas, impulse counters, and configurable buzzer output.',
    },
    {
      id: 'fmc234',
      name: 'FMC234 IP67 Waterproof Tracker',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 317.9,
      salePrice: 269.5,
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=500&q=80',
      description:
        'Water-resistant IP67 casing designed specifically for harsh Australian weather, construction trailers, agricultural tractors, and mining machinery exposed to mud and dust.',
    },
    {
      id: 'fmc680',
      name: 'FMC680 Heavy-Duty Transport Terminal',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 187.0,
      salePrice: 162.8,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80',
      description:
        'Heavy-duty commercial telematics terminal with J1939 CAN bus data reading for semi-trailers, road trains, mining haul trucks, and refrigerated freight temperature monitoring.',
    },
    {
      id: 'fmc920',
      name: 'FMC920 Slimline 4G GPS Tracker',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 154.0,
      salePrice: 137.5,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80',
      description:
        'The best-selling compact 4G GPS tracker in Australia. Reliable, simple 2-wire / 3-wire installation, low power drain, and high-accuracy real-time tracking.',
    },
  ];

  const currentFeature = trackingFeatureDetails[activeTrackingFeature] || trackingFeatureDetails['gps-tracking'];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* 1. HERO SECTION (Dark Navy Hero matching MEX CMMS page proportions, layout, and styling) */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00c875]/15 text-[#00E88F] border border-[#00c875]/30 text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>AUSTRALIA FLEET TRACKING</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
                SMARTER FLEET MANAGEMENT.{' '}
                <span className="text-amber-400 block mt-1">STRONGER BUSINESS.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Real-time GPS tracking solutions for vehicles and assets. Track, monitor and optimise your fleet from one powerful platform.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/free-trial"
                  className="px-7 py-3.5 rounded-full bg-[#00c875] hover:bg-[#00b268] text-slate-950 font-extrabold text-sm transition-all shadow-lg active:scale-98"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
                >
                  View Pricing
                </Link>
                <a
                  href={MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors ml-1"
                >
                  <span>australiafleettracking.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00c875]" />
                </a>
              </div>
            </div>

            {/* Right Visual: Fleet Tracking Telematics Dashboard Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-2xl space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-3">
                  <span className="font-mono text-[#00c875] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00c875] animate-ping" />
                    LIVE FLEET TELEMETRY
                  </span>
                  <span className="font-mono text-slate-400">TELSTRA 4G IoT</span>
                </div>

                <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"
                    alt="Australia Fleet Tracking Commercial Vehicles"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 p-3 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Active Fleet Units</span>
                      <span className="font-bold text-white text-sm">48,500+ Vehicles Tracked</span>
                    </div>
                    <span className="bg-[#00c875]/20 text-[#00c875] font-bold px-2.5 py-1 rounded text-[11px] border border-[#00c875]/30">
                      99.98% Coverage
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Fuel Cut</span>
                    <span className="font-bold text-[#00c875] text-sm">-18.4%</span>
                  </div>
                  <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Accidents</span>
                    <span className="font-bold text-amber-400 text-sm">-42%</span>
                  </div>
                  <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">ATO Logbook</span>
                    <span className="font-bold text-white text-sm">100% Tax</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURE HIGHLIGHTS (Section 9: 6 Metrics matching CMMS visual layout) */}
      <section className="bg-[#0b1424] border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'LIVE GPS TRACKING', desc: '5-second updates', icon: Navigation },
              { label: 'DETAILED REPORTS', desc: '40+ automated PDFs', icon: FileText },
              { label: 'INSTANT ALERTS', desc: 'SMS & push alerts', icon: AlertTriangle },
              { label: 'DRIVER SAFETY', desc: 'AI camera scoring', icon: Shield },
              { label: 'REDUCE FUEL COSTS', desc: 'Cut idle by 25%', icon: Fuel },
              { label: 'EASY INTEGRATION', desc: 'MEX CMMS native sync', icon: Wrench },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-center flex flex-col items-center hover:border-slate-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00c875]/10 text-[#00c875] flex items-center justify-center mb-1.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT MODULES / FEATURES GRID (Section 5: Same grid structure as MEX CMMS) */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#00c875] block mb-2">
              Comprehensive Modular System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built to manage every phase of fleet operations
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Explore the core capabilities that empower fleet managers, drivers, and maintenance trades. Click any module to explore live telematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetModules.map((feat) => (
              <Link
                key={feat.slug}
                to={`/solutions/${feat.slug}`}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#00c875]/50 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                      {feat.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00c875] transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#00c875]">
                  <span>Explore module</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHOOSE A PRODUCT ECOSYSTEM (Section 6: Exact same position & design, Australia Fleet Tracking marked active) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 block mb-1">
                MEX Connected Suite
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span>Choose a Product Ecosystem</span>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                  4 Dedicated Platforms
                </span>
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-2 md:mt-0 max-w-md">
              Each product functions independently or links natively into the central MEX asset and maintenance ledger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemProducts.map((prod) => (
              <div
                key={prod.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  prod.isActive
                    ? 'border-[#00c875] ring-2 ring-[#00c875]/30 bg-emerald-50/20 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="relative h-40 overflow-hidden bg-slate-900">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-white/95 backdrop-blur-xs ${prod.badgeStyle}`}>
                        {prod.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <h3 className="text-base font-extrabold text-white">{prod.name}</h3>
                        <span className="text-[11px] font-medium text-slate-300 block">{prod.subtitle}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>
                    <div className="pt-2 text-[11px] font-semibold text-slate-500">
                      <span>Status: </span>
                      <span className={prod.isActive ? 'text-[#00c875] font-bold' : 'text-slate-700'}>
                        {prod.stats}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  {prod.isActive ? (
                    <div className="w-full py-2.5 px-3 rounded-xl bg-[#00c875] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Current Active Product</span>
                    </div>
                  ) : (
                    <Link
                      to={prod.path}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Explore Platform</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAIN PRODUCT CONTENT SECTION (Section 7: Built to manage every vehicle, driver and asset.) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#00c875] block mb-2">
                Connected Operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built to manage every vehicle, driver and asset.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Get complete visibility and control over your fleet with real-time GPS tracking, powerful reports and intelligent fleet management tools.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Real-time 5-second GPS updates across Telstra and Optus nationwide 4G LTE-M networks',
                  'ATO-compliant digital logbook with automated private versus business trip categorisation',
                  'Dual AI dash cams with real-time facial recognition detecting driver fatigue and phone distraction',
                  'Seamless vehicle odometer and engine run hour synchronization directly into MEX CMMS work orders',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-[#00c875] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href={MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Explore Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00c875]" />
                </a>
                <Link
                  to="/free-trial"
                  className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                >
                  Request 30-Day Trial
                </Link>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-96">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
                alt="Australian commercial vehicles tracked with GPS telematics"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#00E88F] block mb-1">
                    AUSTRALIAN FLEET TELEMATICS
                  </span>
                  <h4 className="text-lg font-bold">Tested in commercial transport, civil construction, and mining</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRACKING FEATURES CATEGORY AREA (Section 8: GPS Tracking, Personal Tracking, Asset Tracking, Vehicle Tracking, API) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#00c875] block mb-2">
              Core Telematics Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Specialized Tracking for Every Asset Class
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Select any of the 5 tracking modules below to inspect specifications and capabilities.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'gps-tracking', label: 'GPS Tracking' },
              { id: 'personal-tracking', label: 'Personal Tracking' },
              { id: 'asset-tracking', label: 'Asset Tracking' },
              { id: 'vehicle-tracking', label: 'Vehicle Tracking' },
              { id: 'api', label: 'API' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTrackingFeature(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTrackingFeature === tab.id
                    ? 'bg-slate-900 text-[#00c875] shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold text-[#00c875] uppercase tracking-wider block mb-1">
                  {currentFeature.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {currentFeature.title}
                </h3>
              </div>
              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Learn More on Australia Fleet Tracking</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#00c875]" />
              </a>
            </div>

            <div className="py-6 space-y-4">
              <p className="text-base font-semibold text-slate-800">
                {currentFeature.tagline}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentFeature.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {currentFeature.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00c875] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>{currentFeature.specs}</span>
              <span className="text-[#00c875] font-semibold">Active & Deployed Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GPS TRACKING HARDWARE SECTION (Section 10: 8 authentic products with prices & CTA) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#00c875] block mb-2">
              Industrial-Grade IoT Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              GPS Tracking Hardware
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Certified Telstra 4G LTE Cat 1 tracking terminals, dual AI dash cameras, and rugged waterproof beacons engineered for harsh Australian environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-slate-50/60 rounded-2xl border border-slate-200 p-5 hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 mb-4 border border-slate-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {prod.category}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#00c875] transition-colors line-clamp-1">
                    {prod.name}
                  </h3>

                  <div className="mt-2 mb-3 flex items-baseline gap-2">
                    <span className="text-lg font-black text-slate-950 font-mono">
                      ${prod.salePrice.toFixed(2)}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ${prod.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">AUD</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <a
                    href={MAIN_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-[#00c875] hover:text-slate-950 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Order Hardware</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              <span>View full catalog at australiafleettracking.com</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00c875]" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. INTEGRATION SECTION (Section 11: Turn Vehicle Telemetry into Automated Maintenance Work Orders) */}
      <section className="py-20 bg-[#0a1220] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00c875]/20 text-[#00E88F] text-xs font-bold uppercase tracking-wider border border-[#00c875]/30">
                <Wrench className="w-3.5 h-3.5" />
                <span>Seamless CMMS Synchronisation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Turn Vehicle Telemetry into Automated Maintenance Work Orders
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect Australia Fleet Tracking directly to MEX CMMS. Eliminate manual meter logging, prevent roadside breakdowns, and automate servicing intervals through real-time vehicle telematics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: 'Vehicle Monitoring',
                    desc: 'Real-time CAN bus telemetry, true odometer readings, and engine run hours.',
                  },
                  {
                    title: 'Automated Maintenance',
                    desc: 'Trigger PM service orders immediately when service kilometer thresholds are met.',
                  },
                  {
                    title: 'Instant Alerts',
                    desc: 'Engine fault trouble codes (DTC) immediately alert reliability engineers.',
                  },
                  {
                    title: 'Audit-Ready Reports',
                    desc: 'Comprehensive trip logs, idling records, and ATO FBT tax reports.',
                  },
                  {
                    title: 'Automated Workflows',
                    desc: 'No duplicate data entry between drivers, mechanics, and procurement teams.',
                  },
                  {
                    title: 'Open API Integrations',
                    desc: 'Direct REST connectors for SAP, Xero, MYOB, and transport ERPs.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h3 className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00c875]" />
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Telemetry Flow Graphic */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                  <span className="font-mono text-[#00c875] font-bold">TELEMETRY FLOW ENGINE</span>
                  <span className="font-mono text-slate-400">ACTIVE SYNC</span>
                </div>

                {/* Step 1 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-[#00c875]/20 text-[#00c875] flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">4G GPS Telematics Hardware</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      FMC920 / FMC003 logs odometer at 145,000 km in Sydney depot.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-slate-600">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Automated Milestone Trigger</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Calculates 10,000 km major service threshold achieved.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-slate-600">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">MEX CMMS Work Order Raised</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Work Order #WO-89104 dispatched to mechanical fitter with parts reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA (Section 12: Same final CTA structure, size and placement as MEX CMMS page) */}
      <section className="py-20 bg-gradient-to-b from-[#0b1320] to-[#080d16] text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00c875]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Take Control of Your Fleet
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Track vehicles, improve safety and manage your fleet from one powerful platform.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/free-trial"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#00c875] hover:bg-[#00b268] text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-98 text-center"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all text-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00c875]" />
              30-day full access sandbox
            </span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>Instant Telstra 4G setup</span>
          </div>
        </div>
      </section>
    </div>
  );
}
