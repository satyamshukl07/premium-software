import React, { useState, useEffect, useId } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Navigation,
  Shield,
  Truck,
  Package,
  Cpu,
  Camera,
  Eye,
  Sliders,
  Tractor,
  HardHat,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Check,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Fuel,
  Wrench,
  ArrowRight,
  ShoppingCart,
  X,
  Radio,
  Clock,
  Layers,
  Sparkles,
  Search,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function FleetTrackingProductPage() {
  const { subpage } = useParams();
  const navigate = useNavigate();

  // Official direct website URL as requested
  const MAIN_WEBSITE_URL = 'https://australiafleettracking.com/';

  // Active navigation tab / selection state
  // Default to subpage if provided, else 'gps-tracking'
  const [activeItemSlug, setActiveItemSlug] = useState(subpage || 'gps-tracking');
  const [activeMenuCategory, setActiveMenuCategory] = useState('all'); // 'all' | 'features' | 'dashcams' | 'business'
  const [desktopDropdown, setDesktopDropdown] = useState(null); // 'features' | 'dashcams' | 'business' | null
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [catalogFilter, setCatalogFilter] = useState('All');

  // Sync with URL subpage parameter if user navigated directly
  useEffect(() => {
    if (subpage) {
      setActiveItemSlug(subpage);
    }
  }, [subpage]);

  // SEO: Page title, meta tags, and schema.org structured data
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Australia Fleet Tracking | Smarter Fleet Management, GPS & Dash Cams";

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Australia's leading 4G GPS tracking solutions, dual AI dash cams, and fleet telematics for commercial vehicles, agriculture, mining, and courier operations. Integrated with MEX CMMS."
      );
    }

    // Structured data injection
    const scriptId = 'fleet-tracking-jsonld';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Australia Fleet Tracking Telematics & Dash Cams',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
        description: 'Real-time 4G GPS tracking, dual AI dash cams, and ATO-compliant digital logbooks for Australian commercial fleets.',
        brand: {
          '@type': 'Brand',
          name: 'Australia Fleet Tracking',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AUD',
          lowPrice: '1.10',
          highPrice: '269.50',
          offerCount: '8',
        },
      });
      document.head.appendChild(script);
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // 1. TRACKING FEATURES (from Reference Screenshot 1)
  const trackingFeatures = [
    {
      id: 'gps-tracking',
      slug: 'gps-tracking',
      name: 'GPS Tracking',
      category: 'features',
      categoryLabel: 'Tracking Features',
      badge: 'Real-Time 5-Sec Pings',
      icon: Navigation,
      tagline: 'Pinpoint 4G LTE vehicle location across Australia',
      summary:
        'Continuous 4G LTE-M vehicle positioning, ignition diagnostics, trip replays, and turn-by-turn route history backed by Telstra and Optus cellular networks.',
      highlights: [
        'Live 5-second telemetry updates with zero satellite latency',
        'Turn-by-turn historical trip playback with accurate speed timestamps',
        'Automated geofences with instant SMS and email enter/exit alerts',
        'ATO-compliant digital FBT logbook with business/private trip toggles',
      ],
      specs: 'Telstra 4G LTE-M & NB-IoT • 99.98% Nationwide Coverage • Sub-meter GNSS',
    },
    {
      id: 'personal-tracking',
      slug: 'personal-tracking',
      name: 'Personal Tracking',
      category: 'features',
      categoryLabel: 'Tracking Features',
      badge: 'Lone Worker Safety',
      icon: Shield,
      tagline: 'Protect remote workers, lone technicians, and field staff',
      summary:
        'Dedicated ultra-compact personal GPS pendants and duress alarms engineered for lone field workers, remote mining geologists, healthcare staff, and security teams.',
      highlights: [
        'One-touch SOS duress button with automated 2-way voice call back',
        'Integrated 3D gyro sensors for automatic fall & man-down detection',
        'Customizable safe-zone boundary alerts and silent emergency beacons',
        'Rechargeable long-life lithium battery with low-power notifications',
      ],
      specs: 'IP67 Waterproof • Telstra M2M SIM Included • 72-Hour Continuous Battery',
    },
    {
      id: 'asset-tracking',
      slug: 'asset-tracking',
      name: 'Asset Tracking',
      category: 'features',
      categoryLabel: 'Tracking Features',
      badge: 'Unpowered & Rugged',
      icon: Package,
      tagline: 'Track trailers, containers, generators, and heavy gear',
      summary:
        'Submersible battery-powered GPS trackers for non-powered assets including shipping containers, plant trailers, skid-steers, lighting towers, and site sheds.',
      highlights: [
        'Up to 5+ years autonomous battery life on periodic ping schedules',
        'Ultra-rugged UV-stabilized housing rated to IP68 water immersion',
        'Smart vibration and movement wake-up with theft recovery mode',
        'Internal temperature, tilt, impact, and battery level sensors',
      ],
      specs: 'IP68 Submersible • Magnetic or Bolt Mount • 5+ Year Field Battery',
    },
    {
      id: 'vehicle-tracking',
      slug: 'vehicle-tracking',
      name: 'Vehicle-Tracking',
      category: 'features',
      categoryLabel: 'Tracking Features',
      badge: 'Commercial Fleets',
      icon: Truck,
      tagline: 'Comprehensive telematics for trade utes, vans, and haulage',
      summary:
        'Heavy-duty telematics for commercial vehicle fleets, civil contractors, and transport companies. Directly reads engine hours, true odometer, and fault codes.',
      highlights: [
        'Quick OBD-II or concealed 3-wire hardwired installation options',
        'Live odometer and engine hours automatically synced to MEX CMMS',
        'Driver behavior scoring: harsh braking, rapid acceleration, speeding',
        'Automatic service reminder triggers based on real odometer distance',
      ],
      specs: '12V / 24V Auto-Sensing • Internal Crash Backup Battery • CAN Bus Ready',
    },
    {
      id: 'api',
      slug: 'api',
      name: 'API & Integrations',
      category: 'features',
      categoryLabel: 'Tracking Features',
      badge: 'Developer & ERP Ready',
      icon: Cpu,
      tagline: 'Open REST APIs and direct enterprise integrations',
      summary:
        'Connect fleet telemetry directly with your enterprise software, including MEX CMMS, SAP, transport management systems (TMS), and custom data warehouses.',
      highlights: [
        'Push real-time vehicle odometer and engine run hours into MEX work orders',
        'Webhooks for live geofence crossings, panic alerts, and DTC fault codes',
        'Full Swagger/OpenAPI documentation with ready-to-run sample payloads',
        'Export telemetry in standard JSON, GeoJSON, and CSV formats',
      ],
      specs: 'High-Throughput WebSockets • Token Authentication • 99.99% Cloud SLA',
    },
  ];

  // 2. DASH CAMS (from Reference Screenshot 2)
  const dashCamOptions = [
    {
      id: 'dual-view-dash-cam',
      slug: 'dual-view-dash-cam',
      name: 'Dual View Dash Cam',
      category: 'dashcams',
      categoryLabel: 'DASH CAMS',
      badge: 'AI Driver Safety',
      icon: Camera,
      tagline: 'Road-facing 1080p + in-cabin AI driver fatigue monitor',
      summary:
        'Dual high-definition cameras capturing the forward road view plus inside the cabin. Uses AI computer vision to detect driver drowsiness, mobile phone distraction, and smoking in real time.',
      highlights: [
        '1080p full HD road camera with 140° ultra-wide field of view',
        'Infrared in-cabin camera with real-time facial landmark recognition',
        'Instant in-cab voice warnings for fatigue, yawning, and phone use',
        'Automated 20-second cloud video clip upload upon crash or harsh event',
      ],
      specs: 'Telstra 4G Cloud Sync • Lockable Tamper-Proof SD Enclosure • Live Stream',
    },
    {
      id: 'road-view-dash-cam',
      slug: 'road-view-dash-cam',
      name: 'Road View Dash Cam',
      category: 'dashcams',
      categoryLabel: 'DASH CAMS',
      badge: 'Crash Exoneration',
      icon: Eye,
      tagline: 'Crystal-clear forward video protecting drivers from false claims',
      summary:
        'High-definition forward-facing road video recorder designed to protect commercial operators from fraudulent insurance claims, disputed blame, and road rage incidents.',
      highlights: [
        'Sony STARVIS HDR sensor capturing razor-sharp number plates day & night',
        'Embedded GPS module stamping speed, coordinates, and time onto footage',
        'Continuous loop recording with G-sensor emergency incident file locking',
        'Low-profile windshield footprint that never obstructs the driver’s field of vision',
      ],
      specs: '1080p 30fps HDR • Built-in G-Sensor • Smartphone Wi-Fi Direct Playback',
    },
  ];

  // 3. BUSINESS SOLUTIONS (from Reference Screenshot 3)
  const businessSolutions = [
    {
      id: 'fleet-management',
      slug: 'fleet-management',
      name: 'Fleet Management',
      category: 'business',
      categoryLabel: 'Business',
      badge: 'All-in-One Operations',
      icon: Sliders,
      tagline: 'Unified visibility, driver scorecards, and lower operating costs',
      summary:
        'Centralized dashboard tracking 5 to 5,000+ vehicles across Australia. Monitor real-time movements, streamline maintenance, and reduce fleet operating costs by up to 22%.',
      highlights: [
        'Single map interface displaying active fleets, status, and closest vehicles',
        'Driver safety scorecards reducing harsh driving and insurance claims',
        'Automated fuel tax credit (FTC) calculations and ATO audit reports',
        'Eliminates unauthorized after-hours use and excessive vehicle idling',
      ],
      specs: 'Multi-Tenant Cloud • Role-Based Permissions • Automated PDF Reports',
    },
    {
      id: 'gps-tracking-for-agriculture',
      slug: 'gps-tracking-for-agriculture',
      name: 'GPS Tracking For Agriculture',
      category: 'business',
      categoryLabel: 'Business',
      badge: 'Regional & Farming',
      icon: Tractor,
      tagline: 'Ruggedized tracking for tractors, harvesters, and outback gear',
      summary:
        'Built for Australian regional farms, agricultural contractors, and outback cattle stations. Track machinery hours, monitor paddock coverage, and prevent rural equipment theft.',
      highlights: [
        'Satellite fallback support for remote properties with zero 4G coverage',
        'Accurate engine hours logging for preventive tractor and implement servicing',
        'Paddock geofencing to verify spray and harvest coverage completion',
        'Instant geofence alarm if machinery is towed off property after hours',
      ],
      specs: 'Solar & Battery Options • Outback Tough IP67 • Satellite Integration',
    },
    {
      id: 'gps-tracking-for-mining',
      slug: 'gps-tracking-for-mining',
      name: 'GPS Tracking For Mining',
      category: 'business',
      categoryLabel: 'Business',
      badge: 'IVMS & Site Spec',
      icon: HardHat,
      tagline: 'Tier-1 mining site In-Vehicle Monitoring Systems (IVMS)',
      summary:
        'Industrial-grade IVMS telematics engineered to comply with strict safety standards across Bowen Basin, Hunter Valley, and Pilbara mine sites.',
      highlights: [
        'Compliant with Tier-1 mining site IVMS requirements and safety audits',
        'Rollover detection and emergency distress notification protocols',
        'Driver seatbelt and continuous speed-zone compliance telemetry',
        'Seamless telemetry export into mine site contractor safety databases',
      ],
      specs: 'Mine-Spec Hardware • High Vibration Resistant • Dual Duress Triggers',
    },
    {
      id: 'gps-tracking-for-courier-companies',
      slug: 'gps-tracking-for-courier-companies',
      name: 'GPS Tracking For Courier Companies',
      category: 'business',
      categoryLabel: 'Business',
      badge: 'Last-Mile & Logistics',
      icon: Truck,
      tagline: 'Fast dispatching, customer arrival ETAs, and delivery audits',
      summary:
        'Designed for courier, express freight, and last-mile delivery fleets. Optimize delivery routes, provide real-time arrival estimates, and verify proof of presence.',
      highlights: [
        'Shareable live tracking links for customers awaiting urgent deliveries',
        'Detailed stop-duration and loading dock wait-time reports',
        'Quickly dispatch nearest available driver to unscheduled pickup calls',
        'Cut fuel waste by eliminating unauthorized detours and excessive idling',
      ],
      specs: 'Sub-Minute Dispatch Routing • Proof of Delivery Sync • Turnaround Logs',
    },
  ];

  // Combined all 11 solution items for tab & routing lookup
  const allSolutions = [...trackingFeatures, ...dashCamOptions, ...businessSolutions];
  const currentSolution = allSolutions.find((s) => s.slug === activeItemSlug) || allSolutions[0];

  // 4. HARDWARE STORE PRODUCTS (from Reference Screenshot 4)
  const hardwareProducts = [
    {
      id: 'obd2-cable',
      name: '16 Pin OBD2 Cable',
      category: 'Accessories',
      badge: 'SALE!',
      originalPrice: 55.0,
      salePrice: 1.1,
      image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=400&q=80',
      description:
        'High-grade 16-pin OBD2 extension cable with passthrough socket. Allows discreet under-dash installation while keeping the factory diagnostic port open for servicing.',
      features: ['Universal 16-pin OBD2 fitment', 'Concealed dashboard harness', 'Heavy-duty flexible wiring'],
    },
    {
      id: 'dual-lens-cam',
      name: 'Dual Lens Dash Cam',
      category: 'Dash Cameras',
      badge: 'SALE!',
      originalPrice: 165.0,
      salePrice: 148.5,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
      description:
        'Dual 1080p forward road view and infrared driver cabin view with mobile app playback, G-sensor incident clip protection, and automated cloud incident synchronization.',
      features: ['1080p Front + Cabin Night Vision', 'Automated cloud incident backup', 'Smartphone Wi-Fi live preview'],
    },
    {
      id: 'fmc003',
      name: 'FMC003 Plug & Play Tracker',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 192.5,
      salePrice: 154.0,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
      description:
        'Advanced 4G LTE Cat 1 plug-and-play OBD tracker capable of reading real vehicle OEM parameters including odometer, fuel level, and diagnostic trouble codes without cutting any wires.',
      features: ['Instant 10-second OBD port installation', 'Standard OEM vehicle data reading', 'Internal backup battery'],
    },
    {
      id: 'fmc125',
      name: 'FMC125 Advanced Terminal',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 220.0,
      salePrice: 139.7,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
      description:
        'Advanced 4G telematics device with Dual-SIM fallback, RS232/RS485 serial interfaces for fuel sensors, RFID driver identification readers, and CAN bus adapter integration.',
      features: ['Dual SIM for maximum redundancy', 'RS232/RS485 digital sensor interfaces', 'Direct MEX CMMS odometer sync'],
    },
    {
      id: 'fmc130',
      name: 'FMC130 Flexible GNSS Terminal',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 273.9,
      salePrice: 218.9,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80',
      description:
        'High-performance 4G Cat 1 tracker with flexible inputs (analog, digital, negative), internal GNSS/GSM antennas, impulse counters, and configurable buzzer output for driver speeding coach.',
      features: ['Configurable digital/analog input channels', 'Automated over-speed driver in-cab buzzer', 'Geofence auto-generation'],
    },
    {
      id: 'fmc234',
      name: 'FMC234 IP67 Waterproof Tracker',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 317.9,
      salePrice: 269.5,
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=400&q=80',
      description:
        'Water-resistant IP67 casing designed specifically for harsh Australian weather, motorbikes, jet skis, open construction trailers, agriculture tractors, and mining machinery exposed to mud and dust.',
      features: ['Certified IP67 dust and waterproof casing', 'Slimline form-factor for hidden fitment', 'High-gain GNSS antenna'],
    },
    {
      id: 'fmc680',
      name: 'FMC680 Heavy-Duty Transport Terminal',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 187.0,
      salePrice: 162.8,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80',
      description:
        'Heavy-duty commercial telematics terminal with J1939 CAN bus data reading for semi-trailers, road trains, mining haul trucks, and refrigerated freight with direct temperature probe support.',
      features: ['Heavy vehicle J1939 CAN protocol', 'Refrigerated container probe monitoring', 'High-capacity emergency battery'],
    },
    {
      id: 'fmc920',
      name: 'FMC920 Slimline 4G GPS Tracker',
      category: 'Trackers',
      badge: 'SALE!',
      originalPrice: 154.0,
      salePrice: 137.5,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
      description:
        'The best-selling compact 4G GPS tracker in Australia. Reliable, simple 2-wire / 3-wire installation, low power drain, and high-accuracy real-time tracking for commercial fleets and personal vehicles.',
      features: ['Compact ultra-slim dimensions', 'Smart sleep mode saving car battery', 'Telstra 4G LTE-M fast transmission'],
    },
  ];

  const filteredHardware =
    catalogFilter === 'All'
      ? hardwareProducts
      : hardwareProducts.filter((p) => p.category === catalogFilter);

  // Helper to handle selecting a solution item
  const handleSelectSolution = (slug) => {
    setActiveItemSlug(slug);
    navigate(`/products/fleet-tracking/${slug}`, { replace: true });
    setDesktopDropdown(null);

    // Smooth scroll to the solution viewer section
    const el = document.getElementById('solution-viewer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SolutionIcon = currentSolution.icon;

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen">
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR (Subtle turquoise/green accent, matching brand) */}
      <aside aria-label="Official Contact Information" className="bg-slate-900 text-slate-200 py-2.5 px-4 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00c875]" />
              <span>Unit 507, 15 Chatham Rd, West Ryde NSW 2114</span>
            </span>
            <a
              href="tel:+61452653745"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00c875]" />
              <span>+61 452 653 745</span>
            </a>
            <a
              href="mailto:info@techtonika-autolink.com"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00c875]" />
              <span>info@techtonika-autolink.com</span>
            </a>
          </div>

          {/* Direct External Reference Link requested by user */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-slate-400">Direct Reference:</span>
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00c875]/20 hover:bg-[#00c875] text-[#00E88F] hover:text-slate-950 font-semibold text-[11px] transition-all border border-[#00c875]/40"
              title="Open the official Australia Fleet Tracking website in a new tab"
            >
              <span>australiafleettracking.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </aside>

      {/* 2. SUB-NAVIGATION BAR WITH WORKING INTERACTIVE DROPDOWNS */}
      <nav
        aria-label="Australia Fleet Tracking Navigation"
        className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Page Sub-brand Title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-[#00c875] flex items-center justify-center font-bold shadow-xs">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight block">
                  Australia <span className="text-[#00c875]">Fleet Tracking</span>
                </span>
                <span className="text-[10px] text-slate-600 block">
                  Connected Telematics & Dash Cams
                </span>
              </div>
            </div>

            {/* Desktop Navigation with Interactive Clickable Dropdowns */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-700">
              {/* Dropdown 1: TRACKING FEATURES */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setDesktopDropdown(desktopDropdown === 'features' ? null : 'features')
                  }
                  className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    desktopDropdown === 'features' || currentSolution.category === 'features'
                      ? 'text-[#00c875] bg-emerald-50'
                      : 'hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  aria-expanded={desktopDropdown === 'features'}
                >
                  <span>Tracking Features</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      desktopDropdown === 'features' ? 'rotate-180 text-[#00c875]' : 'text-slate-600'
                    }`}
                  />
                </button>

                {/* Dropdown 1 Menu: 5 Options */}
                {desktopDropdown === 'features' && (
                  <div className="absolute left-0 mt-1.5 w-64 rounded-xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-extrabold tracking-wider text-slate-600 border-b border-slate-100">
                      Tracking Features (5 Options)
                    </div>
                    {trackingFeatures.map((feat) => {
                      const FeatIcon = feat.icon;
                      const isCurrent = activeItemSlug === feat.slug;
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => handleSelectSolution(feat.slug)}
                          className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                            isCurrent
                              ? 'bg-emerald-50 text-[#00c875] font-bold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <FeatIcon className="w-4 h-4 text-[#00c875]" />
                            <span>{feat.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                            {feat.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Dropdown 2: DASH CAMS */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setDesktopDropdown(desktopDropdown === 'dashcams' ? null : 'dashcams')
                  }
                  className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    desktopDropdown === 'dashcams' || currentSolution.category === 'dashcams'
                      ? 'text-[#00c875] bg-emerald-50'
                      : 'hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  aria-expanded={desktopDropdown === 'dashcams'}
                >
                  <span>DASH CAMS</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      desktopDropdown === 'dashcams' ? 'rotate-180 text-[#00c875]' : 'text-slate-600'
                    }`}
                  />
                </button>

                {/* Dropdown 2 Menu: 2 Options */}
                {desktopDropdown === 'dashcams' && (
                  <div className="absolute left-0 mt-1.5 w-64 rounded-xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-extrabold tracking-wider text-slate-600 border-b border-slate-100">
                      Dash Cams (2 Options)
                    </div>
                    {dashCamOptions.map((cam) => {
                      const CamIcon = cam.icon;
                      const isCurrent = activeItemSlug === cam.slug;
                      return (
                        <button
                          key={cam.id}
                          type="button"
                          onClick={() => handleSelectSolution(cam.slug)}
                          className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                            isCurrent
                              ? 'bg-emerald-50 text-[#00c875] font-bold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <CamIcon className="w-4 h-4 text-[#00c875]" />
                            <span>{cam.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                            {cam.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Dropdown 3: BUSINESS */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setDesktopDropdown(desktopDropdown === 'business' ? null : 'business')
                  }
                  className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    desktopDropdown === 'business' || currentSolution.category === 'business'
                      ? 'text-[#00c875] bg-emerald-50'
                      : 'hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  aria-expanded={desktopDropdown === 'business'}
                >
                  <span>Business</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      desktopDropdown === 'business' ? 'rotate-180 text-[#00c875]' : 'text-slate-600'
                    }`}
                  />
                </button>

                {/* Dropdown 3 Menu: 4 Options */}
                {desktopDropdown === 'business' && (
                  <div className="absolute left-0 mt-1.5 w-72 rounded-xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-extrabold tracking-wider text-slate-600 border-b border-slate-100">
                      Business Solutions (4 Options)
                    </div>
                    {businessSolutions.map((biz) => {
                      const BizIcon = biz.icon;
                      const isCurrent = activeItemSlug === biz.slug;
                      return (
                        <button
                          key={biz.id}
                          type="button"
                          onClick={() => handleSelectSolution(biz.slug)}
                          className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                            isCurrent
                              ? 'bg-emerald-50 text-[#00c875] font-bold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <BizIcon className="w-4 h-4 text-[#00c875]" />
                            <span className="truncate">{biz.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded flex-shrink-0 ml-2">
                            {biz.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Hardware Store anchor */}
              <a
                href="#hardware-store"
                className="px-3.5 py-2 rounded-lg hover:text-[#00c875] hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-slate-700"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#00c875]" />
                <span>Hardware Store</span>
              </a>
            </div>

            {/* Direct Visit CTA on Right */}
            <div className="flex items-center gap-3">
              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs"
                title="Visit original Australia Fleet Tracking portal"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3 h-3 text-[#00c875]" />
              </a>
            </div>
          </div>

          {/* Mobile Horizontal Quick-Links Scroll */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2 border-t border-slate-100 no-scrollbar text-xs">
            <span className="text-[10px] font-bold text-slate-600 uppercase flex-shrink-0">
              Quick Select:
            </span>
            {allSolutions.slice(0, 7).map((sol) => (
              <button
                key={sol.id}
                type="button"
                onClick={() => handleSelectSolution(sol.slug)}
                className={`px-2.5 py-1 rounded-full whitespace-nowrap text-xs transition-colors flex-shrink-0 cursor-pointer ${
                  activeItemSlug === sol.slug
                    ? 'bg-slate-900 text-[#00c875] font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sol.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION (Dark Navy with Subtle Yellow Accent as requested from Screenshot 2) */}
      <header className="relative bg-gradient-to-b from-[#091427] via-[#0d1e38] to-[#091427] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        {/* Subtle background ambient circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00c875]/15 border border-[#00c875]/30 text-[#00E88F] text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>4G Fleet GPS Telematics & AI Dash Cams</span>
              </div>

              {/* Exact SEO H1 Headline matching reference */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                SMARTER FLEET MANAGEMENT.{' '}
                <span className="text-amber-400 block mt-1">STRONGER BUSINESS.</span>
              </h1>

              {/* Tagline matching reference */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Real-time GPS tracking solutions for vehicles and assets. Track. Monitor. Optimise. All from one powerful platform integrated with MEX CMMS.
              </p>

              {/* Core Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00c875] flex-shrink-0" />
                  <span>5-Second Telstra 4G Live Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00c875] flex-shrink-0" />
                  <span>ATO-Approved Digital FBT Logbook</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00c875] flex-shrink-0" />
                  <span>Dual AI Dash Cams & Collision Alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00c875] flex-shrink-0" />
                  <span>Native MEX CMMS Work Order Sync</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#solution-viewer"
                  className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-98 flex items-center gap-2"
                >
                  <span>Explore Features & Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  <span>Visit australiafleettracking.com</span>
                  <ExternalLink className="w-4 h-4 text-[#00c875]" />
                </a>
              </div>
            </div>

            {/* Right Visual Dashboard Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/90 p-6 shadow-2xl space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-3">
                  <span className="font-mono text-[#00c875] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00c875] animate-ping" />
                    LIVE FLEET TELEMETRY
                  </span>
                  <span className="font-mono text-slate-400">TELSTRA 4G IoT</span>
                </div>

                <div className="relative h-52 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"
                    alt="Australian Fleet Vehicles on Road"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 p-3 rounded-lg border border-slate-700 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Active Fleet Units</span>
                      <span className="font-bold text-white text-sm">48,500+ Vehicles Tracked</span>
                    </div>
                    <span className="bg-[#00c875]/20 text-[#00c875] font-bold px-2.5 py-1 rounded text-[11px]">
                      99.98% Coverage
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Fuel Cut</span>
                    <span className="font-bold text-[#00c875] text-sm">-18.4%</span>
                  </div>
                  <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Accidents</span>
                    <span className="font-bold text-amber-400 text-sm">-42%</span>
                  </div>
                  <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">ATO Logbook</span>
                    <span className="font-bold text-white text-sm">100% Tax</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Metric Features Bar matching reference */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center hover:border-slate-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#00c875] flex items-center justify-center mb-1.5">
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
      </header>

      {/* 4. MAIN INTERACTIVE SOLUTION VIEWER (Tracking Features, Dash Cams, Business Solutions) */}
      <main id="solution-viewer" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#00c875] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Interactive Catalog & Modules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Tracking Features, Dash Cams & Business Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Select any capability below to view specifications and live operational benefits. Click to switch views seamlessly.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: 'all', label: 'All Solutions (11)' },
              { id: 'features', label: 'Tracking Features (5)' },
              { id: 'dashcams', label: 'DASH CAMS (2)' },
              { id: 'business', label: 'Business Solutions (4)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveMenuCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeMenuCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Solutions Layout: Left Side List + Right Side Active Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Solution Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              {(activeMenuCategory === 'all'
                ? allSolutions
                : allSolutions.filter((s) => s.category === activeMenuCategory)
              ).map((sol) => {
                const isSelected = activeItemSlug === sol.slug;
                const IconComponent = sol.icon;
                return (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() => handleSelectSolution(sol.slug)}
                    className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-white border-[#00c875] ring-2 ring-emerald-500/20 shadow-md'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2.5 rounded-lg flex-shrink-0 ${
                          isSelected
                            ? 'bg-slate-900 text-[#00c875]'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider">
                            {sol.categoryLabel}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {sol.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {sol.tagline}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {sol.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deep-Dive Details for the Active Solution */}
            <div className="lg:col-span-7">
              <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#00c875] flex items-center justify-center font-bold shadow-xs">
                      <SolutionIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#00c875] uppercase tracking-wider block">
                        {currentSolution.categoryLabel}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {currentSolution.name}
                      </h3>
                    </div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                    {currentSolution.badge}
                  </span>
                </div>

                {/* Tagline & Full Description */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">
                    {currentSolution.tagline}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {currentSolution.summary}
                  </p>
                </div>

                {/* Key Highlights Checklist */}
                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-800 block">
                    Core Capabilities & Business Value:
                  </span>
                  <div className="space-y-2">
                    {currentSolution.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#00c875] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-600 block">
                      Hardware & Network Specs
                    </span>
                    <span className="text-xs font-mono text-slate-700 font-medium">
                      {currentSolution.specs}
                    </span>
                  </div>

                  <a
                    href={MAIN_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#00c875] hover:bg-[#00b067] text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs flex-shrink-0"
                  >
                    <span>View on Official Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      {/* 5. DIRECT WEBSITE PROMINENT REFERENCE CARD (As requested in user instructions) */}
      <aside aria-label="Official Website Information" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00c875] uppercase tracking-wider">
                <ExternalLink className="w-4 h-4" />
                <span>Original & Direct Portal Link</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Looking for the Official Australia Fleet Tracking Portal?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Visit our dedicated equipment portal at{' '}
                <a
                  href={MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c875] underline font-semibold hover:text-[#00E88F]"
                >
                  https://australiafleettracking.com/
                </a>{' '}
                for live client account logins, direct SIM bundle activations, and specialized quotes.
              </p>
            </div>

            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#00c875] hover:bg-[#00b067] text-slate-950 font-extrabold text-sm transition-all shadow-md active:scale-98 flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <span>australiafleettracking.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>

      {/* 6. HARDWARE STORE PRODUCTS SECTION (Screenshot 4) */}
      <section id="hardware-store" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#00c875] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Australian Stock & Telematics Gear
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Hardware & Dash Cam Catalog
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Tested for Australian heat and rugged work conditions. Nationwide delivery with pre-configured Telstra SIMs.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {['All', 'Trackers', 'Dash Cameras', 'Accessories'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCatalogFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  catalogFilter === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 8 Products Grid matching Screenshot 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredHardware.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Product Image & SALE Badge */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Bright Green SALE! badge matching reference */}
                  <span className="absolute top-2.5 left-2.5 bg-[#00c875] text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider shadow-xs">
                    {item.badge}
                  </span>

                  {/* Quick View Button overlay */}
                  <button
                    type="button"
                    onClick={() => setQuickViewProduct(item)}
                    className="absolute inset-x-4 bottom-3 py-1.5 rounded bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-xs backdrop-blur-xs flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>QUICK VIEW</span>
                  </button>
                </div>

                {/* Product Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-600 block uppercase font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">
                      {item.name}
                    </h3>
                  </div>

                  {/* Pricing matching Screenshot 4 */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline gap-2">
                    <span className="text-xs text-slate-600 line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-base font-extrabold text-[#00c875]">
                      ${item.salePrice.toFixed(2)} AUD
                    </span>
                  </div>

                  {/* Add to Cart Black Button matching Screenshot 4 */}
                  <a
                    href={MAIN_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-2 px-3 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center block transition-colors shadow-xs"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEX CMMS CONNECTED OPERATIONS INTEGRATION (Showcasing unified value) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase text-[#00c875] tracking-wider">
                MEX Maintenance Ecosystem Sync
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Turn Vehicle Telemetry into Automated Maintenance Work Orders
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect your Australia Fleet Tracking devices directly with MEX CMMS. True odometer readings and engine hours stream continuously, automatically triggering scheduled services, safety inspections, and tyre rotations when vehicles hit target mileage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00c875]" />
                  <span>Zero manual logbook odometer entries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00c875]" />
                  <span>DTC fault codes create diagnostic jobs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00c875]" />
                  <span>Prevents voided vehicle manufacturer warranties</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00c875]" />
                  <span>Synchronized asset history in MEX CMMS</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/products/mex"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00c875] hover:text-emerald-700 transition-colors"
                >
                  <span>Learn more about MEX CMMS integration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-900 block">
                Integrated Telematics Pipeline:
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00c875] flex items-center justify-center font-bold">1</div>
                  <span className="text-slate-700">Vehicle travels route; tracker pings 5-second GPS & odometer</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00c875] flex items-center justify-center font-bold">2</div>
                  <span className="text-slate-700">Cloud API compares actual km against scheduled 10,000 km service threshold</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00c875] flex items-center justify-center font-bold">3</div>
                  <span className="text-slate-700">MEX CMMS generates mechanic work order & reserves inventory parts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRODUCT QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-view-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-[#00c875]">
                {quickViewProduct.category}
              </span>
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="h-48 rounded-xl bg-slate-100 overflow-hidden">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 id="quick-view-title" className="text-lg font-bold text-slate-900">
                  {quickViewProduct.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-slate-400 line-through">
                    ${quickViewProduct.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-lg font-extrabold text-[#00c875]">
                    ${quickViewProduct.salePrice.toFixed(2)} AUD
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {quickViewProduct.description}
              </p>

              <div className="space-y-1 text-xs text-slate-700">
                {quickViewProduct.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#00c875]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => setQuickViewProduct(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Order on Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00c875]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. CALL TO ACTION BANNER */}
      <CallToActionBanner />
    </div>
  );
}
