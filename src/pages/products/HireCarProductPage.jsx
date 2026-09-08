import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Car,
  MapPin,
  Calendar,
  CreditCard,
  Building2,
  Users,
  Shield,
  FileText,
  Phone,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
  Star,
  Fuel,
  Gauge,
  Sliders,
  Award,
  Clock,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

export default function HireCarProductPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine active section from pathname
  const getActiveTab = () => {
    if (currentPath.includes('/locations')) return 'locations';
    if (currentPath.includes('/vehicles')) return 'vehicles';
    if (currentPath.includes('/pricing')) return 'pricing';
    if (currentPath.includes('/vendors')) return 'vendors';
    if (currentPath.includes('/about')) return 'about';
    if (currentPath.includes('/blog')) return 'blog';
    if (currentPath.includes('/contact')) return 'contact';
    return 'overview';
  };

  const activeTab = getActiveTab();

  // Search widget state
  const [searchLocation, setSearchLocation] = useState('Brisbane Airport (BNE)');
  const [vehicleCategory, setVehicleCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample vehicle fleet catalog
  const vehicles = [
    {
      id: 'v-1',
      name: 'Tesla Model Y Long Range',
      category: 'Electric / Luxury',
      price: '$115 AUD / day',
      passengers: '5 Seats',
      luggage: '3 Bags',
      transmission: 'Automatic EV',
      vendor: 'East Coast EV Rentals',
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80',
      badge: 'Popular Eco Choice',
    },
    {
      id: 'v-2',
      name: 'Toyota RAV4 Hybrid Cruiser',
      category: 'Medium SUV',
      price: '$89 AUD / day',
      passengers: '5 Seats',
      luggage: '4 Bags',
      transmission: 'Automatic Hybrid',
      vendor: 'Sunshine Coast Rentals',
      rating: 4.8,
      reviews: 310,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      badge: 'Best Family Seller',
    },
    {
      id: 'v-3',
      name: 'Ford Ranger Wildtrak 4x4',
      category: 'Commercial 4WD Ute',
      price: '$135 AUD / day',
      passengers: '5 Seats',
      luggage: 'Dual Cab Tray',
      transmission: 'Automatic Diesel 4WD',
      vendor: 'Aussie Outback Fleet Hire',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
      badge: 'Towing & Mine Spec',
    },
    {
      id: 'v-4',
      name: 'Toyota HiAce Commuter Van',
      category: 'People Mover / Commercial',
      price: '$150 AUD / day',
      passengers: '12 Seats',
      luggage: '8 Bags',
      transmission: 'Automatic Diesel',
      vendor: 'Brisbane Van Hub',
      rating: 4.7,
      reviews: 74,
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80',
      badge: 'Group Travel',
    },
    {
      id: 'v-5',
      name: 'Hyundai i30 Active Hatch',
      category: 'Economy Hatch',
      price: '$49 AUD / day',
      passengers: '5 Seats',
      luggage: '2 Bags',
      transmission: 'Automatic Petrol',
      vendor: 'Metro Car Rentals',
      rating: 4.7,
      reviews: 420,
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
      badge: 'Budget Friendly',
    },
    {
      id: 'v-6',
      name: 'Mercedes-Benz C-Class Sedan',
      category: 'Prestige / Luxury',
      price: '$175 AUD / day',
      passengers: '5 Seats',
      luggage: '3 Bags',
      transmission: 'Automatic Turbo',
      vendor: 'Capital Luxury Fleet',
      rating: 5.0,
      reviews: 62,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
      badge: 'Executive Comfort',
    },
  ];

  const locationsList = [
    { city: 'Sydney Airport (SYD)', state: 'NSW', depots: 'Domestic Terminal 2 & 3, International Terminal 1', cars: '1,420+ Available' },
    { city: 'Melbourne Airport (MEL)', state: 'VIC', depots: 'Tullamarine Ground Level Hub & Southern Cross Station', cars: '1,280+ Available' },
    { city: 'Brisbane Airport (BNE)', state: 'QLD', depots: 'Domestic Terminal Concourse & Skygate Complex', cars: '980+ Available' },
    { city: 'Gold Coast Airport (OOL)', state: 'QLD', depots: 'Coolangatta Terminal Car Rental Hub', cars: '640+ Available' },
    { city: 'Perth Airport (PER)', state: 'WA', depots: 'Terminal 1/2 Regional & Terminal 3/4', cars: '720+ Available' },
    { city: 'Adelaide Airport (ADL)', state: 'SA', depots: 'Sir Richard Williams Ave Terminal', cars: '480+ Available' },
    { city: 'Cairns Airport (CNS)', state: 'QLD', depots: 'Tropical North Reef Gateway Terminal', cars: '390+ Available' },
    { city: 'Hobart Airport (HBA)', state: 'TAS', depots: 'Cambridge International & Salamanca CBD', cars: '310+ Available' },
  ];

  const filteredVehicles = vehicles.filter((v) => {
    const matchesCat = vehicleCategory === 'all' || v.category.toLowerCase().includes(vehicleCategory);
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) || v.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen">
      {/* 1. Orange Top Announcement Bar (From Reference Screenshot) */}
      <div className="bg-[#ea580c] text-white py-2 px-4 text-center text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
        <Flame className="w-3.5 h-3.5 fill-current" />
        <span>
          Compare 5,000+ verified vehicles across Australian airports • Zero hidden fees • Free cancellation up to 48h before pickup
        </span>
      </div>

      {/* 2. White HireCar Navigation Bar (From Reference Screenshot) */}
      <nav className="border-b border-slate-100 bg-white sticky top-20 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* HireCar Logo Area */}
          <Link to="/products/hirecar" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#ea580c] text-white flex items-center justify-center shadow-xs">
              <Car className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900 leading-none tracking-tight">
                Hire<span className="text-[#ea580c]">Car</span>
              </span>
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                Australia Marketplace
              </span>
            </div>
          </Link>

          {/* Sub Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-sm font-semibold text-slate-700">
            <Link
              to="/products/hirecar"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'overview' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products/hirecar/locations"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'locations' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Locations
            </Link>
            <Link
              to="/products/hirecar/vehicles"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'vehicles' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Vehicles
            </Link>
            <Link
              to="/products/hirecar/pricing"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'pricing' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/products/hirecar/vendors"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'vendors' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Vendors
            </Link>
            <Link
              to="/products/hirecar/about"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'about' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/products/hirecar/blog"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'blog' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/products/hirecar/contact"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'contact' ? 'text-[#ea580c] bg-orange-50 font-bold' : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-xs font-bold text-slate-700 hover:text-slate-900 px-3 py-2"
            >
              Sign in
            </Link>
            <Link
              to="/products/hirecar/vendors"
              className="bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm active:scale-98"
            >
              List Your Fleet Free
            </Link>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section (Large premium car hero with dark overlay & white/orange headline) */}
      <section className="relative min-h-[480px] bg-slate-900 flex items-center overflow-hidden">
        {/* Background Car Imagery with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
            alt="Premium Car Rental Australia"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Australia’s Premier Vehicle Exchange</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Premium Car Rental <span className="text-[#ea580c]">Australia</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              Compare cars, vans, utes and luxury vehicles from verified Australian rental businesses. Enjoy transparent pricing with zero surprise counter charges, direct terminal pickup, and instant booking confirmation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/products/hirecar/vehicles"
                className="px-8 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm shadow-xl hover:shadow-orange-500/25 transition-all flex items-center gap-2 active:scale-98"
              >
                <span>Search Vehicles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products/hirecar/vendors"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                List Your Fleet Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Search Filter Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Location selector */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Pick-up & Drop-off Depot
              </label>
              <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50">
                <MapPin className="w-4 h-4 text-[#ea580c] flex-shrink-0" />
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none"
                >
                  <option>Brisbane Airport (BNE)</option>
                  <option>Sydney Airport (SYD)</option>
                  <option>Melbourne Tullamarine (MEL)</option>
                  <option>Gold Coast Airport (OOL)</option>
                  <option>Perth Airport (PER)</option>
                  <option>Adelaide Airport (ADL)</option>
                  <option>Cairns Airport (CNS)</option>
                </select>
              </div>
            </div>

            {/* Vehicle Category Filter */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Vehicle Type
              </label>
              <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50">
                <Car className="w-4 h-4 text-[#ea580c] flex-shrink-0" />
                <select
                  value={vehicleCategory}
                  onChange={(e) => setVehicleCategory(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none"
                >
                  <option value="all">All Vehicle Categories</option>
                  <option value="suv">SUVs & Crossovers</option>
                  <option value="electric">Electric & Hybrid (EV)</option>
                  <option value="ute">4WD Utes & Commercial</option>
                  <option value="van">People Movers & Vans</option>
                  <option value="luxury">Luxury & Prestige</option>
                  <option value="hatch">Economy Hatches</option>
                </select>
              </div>
            </div>

            {/* Keyword search */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Search Model / Make
              </label>
              <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="e.g. RAV4, Tesla, Ranger..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-slate-800 outline-none"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-0">
              <label className="text-[10px] uppercase font-bold text-transparent hidden md:block mb-1">
                Search
              </label>
              <Link
                to="/products/hirecar/vehicles"
                className="w-full py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Filter Available Cars</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sub-page Specific Content Rendering */}

      {/* SUB-VIEW: LOCATIONS (/products/hirecar/locations) */}
      {activeTab === 'locations' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Airports & Capital City Hubs
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                HireCar Pickup Depots Across Australia
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                All rental partners operate direct terminal counters or dedicated rapid shuttle buses, so you can collect keys and hit the road within minutes of landing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locationsList.map((loc, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#ea580c] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-bold">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        {loc.state}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{loc.city}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{loc.depots}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-600">{loc.cars}</span>
                    <Link
                      to="/products/hirecar/vehicles"
                      className="text-[#ea580c] hover:underline font-bold flex items-center gap-0.5"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUB-VIEW: PRICING (/products/hirecar/pricing) */}
      {activeTab === 'pricing' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Zero Hidden Surcharges
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Transparent Comparison & Insurance Excess
              </h2>
              <p className="text-slate-600 text-sm">
                Unlike overseas booking portals, HireCar Marketplace displays all airport concession recovery fees, premium location charges, and standard GST upfront.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400">Basic Package</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">Standard Cover</h3>
                  <p className="text-xs text-slate-500 mt-1">Included in every daily vehicle quote.</p>
                </div>
                <div className="text-3xl font-black text-slate-900">
                  $0 <span className="text-xs text-slate-500 font-normal">/ day extra</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Standard liability coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 24/7 RACQ/NRMA roadside support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> $4,000 AUD security excess bond
                  </li>
                </ul>
                <Link
                  to="/products/hirecar/vehicles"
                  className="block text-center w-full py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-100"
                >
                  Select Standard
                </Link>
              </div>

              <div className="p-8 rounded-3xl border-2 border-[#ea580c] bg-white shadow-xl space-y-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ea580c] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
                  Most Popular
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-[#ea580c]">Peace of Mind</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">Excess Reduction</h3>
                  <p className="text-xs text-slate-500 mt-1">Lowers excess to nominal $500 AUD.</p>
                </div>
                <div className="text-3xl font-black text-[#ea580c]">
                  +$24 <span className="text-xs text-slate-500 font-normal">/ day</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Single vehicle accident cover
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Windscreen and tyre repair included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Low $500 security deposit hold
                  </li>
                </ul>
                <Link
                  to="/products/hirecar/vehicles"
                  className="block text-center w-full py-3 rounded-xl bg-[#ea580c] text-white font-bold text-xs hover:bg-[#c2410c] shadow-md"
                >
                  Choose Excess Reduction
                </Link>
              </div>

              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400">Zero Liability</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">Total Protection</h3>
                  <p className="text-xs text-slate-500 mt-1">$0 excess bond on credit card.</p>
                </div>
                <div className="text-3xl font-black text-slate-900">
                  +$39 <span className="text-xs text-slate-500 font-normal">/ day</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero damage excess ($0 AUD)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Key replacement & lost fob cover
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Priority VIP airport desk collection
                  </li>
                </ul>
                <Link
                  to="/products/hirecar/vehicles"
                  className="block text-center w-full py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-100"
                >
                  Choose Total Protection
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SUB-VIEW: VENDORS (/products/hirecar/vendors) */}
      {activeTab === 'vendors' && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                List Your Rental Fleet on Australia’s Fastest Growing Exchange
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
                Are you an independent car rental operator, ute hire firm, or commercial fleet owner? Connect your fleet in 10 minutes and receive verified Australian and international travellers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-bold mb-4">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">Industry-Low 8% Commission</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Keep up to 92% of your booking revenue. Payouts transferred directly into your Australian business bank account weekly via Stripe Connect.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-bold mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">Instant CHM / MEX Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automatic API calendar integration. When a vehicle is hired on HireCar, it instantly blocks out dates in your CHM or MEX scheduling system.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-bold mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">Verified KYC Drivers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every driver’s Australian or international licence is verified with facial recognition and biometric document checks before collection.
                </p>
              </div>
            </div>

            {/* Vendor Application Form Box */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Apply as a Fleet Vendor Partner</h3>
                  <p className="text-xs text-slate-400">
                    No onboarding fees or minimum contract terms. Join 180+ verified operators.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you! Our Vendor Relations team will contact you within 24 hours to sync your fleet.');
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
                >
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Company / Fleet Business Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Coast Car Rentals Pty Ltd"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Australian ABN / ACN</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 51 824 990 124"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Contact Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com.au"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Fleet Size</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
                      <option>5 - 20 Vehicles</option>
                      <option>20 - 50 Vehicles</option>
                      <option>50 - 150 Vehicles</option>
                      <option>150+ Vehicles</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Primary State / Region</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
                      <option>Queensland (QLD)</option>
                      <option>New South Wales (NSW)</option>
                      <option>Victoria (VIC)</option>
                      <option>Western Australia (WA)</option>
                      <option>South Australia (SA)</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-lg"
                    >
                      Submit Vendor Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SUB-VIEW: ABOUT (/products/hirecar/about) */}
      {activeTab === 'about' && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Our Mission
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Empowering Local Australian Car Rental Operators
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded to challenge legacy global aggregators, HireCar Marketplace connects travellers directly with verified Australian family-owned, commercial, and boutique car hire businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">100% Australian Owned & Operated</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquartered in Brisbane with support teams in Sydney and Melbourne, understanding local toll roads, remote outback restrictions, and airport logistics.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Clean Price Guarantee</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No hidden credit card merchant fees, surprise vehicle registration recovery fees, or mandatory counter insurance additions.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SUB-VIEW: BLOG (/products/hirecar/blog) */}
      {activeTab === 'blog' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Travel & Road Trip Guides
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Australian Driving & Rental Tips
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Top 7 Scenic Road Trips from Brisbane: From Sunshine Coast to Byron Bay',
                  date: '04 Sep 2026',
                  author: 'Lachlan McKay',
                  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
                  desc: 'Discover the best coastal stops, national parks, and local dining spots along the Pacific Coast Way.',
                },
                {
                  title: 'EV Car Hire in Australia: Charging Infrastructure on the East Coast',
                  date: '28 Aug 2026',
                  author: 'Chloe Vance',
                  image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80',
                  desc: 'Everything you need to know about Tesla Superchargers, Chargefox stations, and driving an EV through regional NSW.',
                },
                {
                  title: '4WD Outback Hire Rules: Sealed vs Unsealed Roads Explained',
                  date: '15 Aug 2026',
                  author: 'Mick Dawson',
                  image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
                  desc: 'How rental insurance applies to Gibb River Road, Fraser Island K’gari, and remote Northern Territory tracks.',
                },
              ].map((b, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition-all group">
                  <div className="h-44 overflow-hidden">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-[#ea580c] uppercase tracking-wider">{b.date} • {b.author}</span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#ea580c] transition-colors">{b.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUB-VIEW: CONTACT (/products/hirecar/contact) */}
      {activeTab === 'contact' && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                24/7 Australian Concierge
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Get in Touch With HireCar Australia
              </h2>
              <p className="text-slate-600 text-sm">
                Need to extend your rental, confirm airport arrival shuttle details, or report roadside assistance? Our team is on standby.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <Phone className="w-6 h-6 text-[#ea580c] mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-sm">Toll-Free Hotline</h4>
                <p className="text-xs text-slate-600 mt-1">1800 447 322</p>
                <span className="text-[10px] text-slate-400 block mt-1">24/7 Roadside Line</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <Building2 className="w-6 h-6 text-[#ea580c] mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-sm">Operations Centre</h4>
                <p className="text-xs text-slate-600 mt-1">Level 4, 120 Edward St</p>
                <span className="text-[10px] text-slate-400 block mt-1">Brisbane CBD, QLD 4000</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <CreditCard className="w-6 h-6 text-[#ea580c] mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-sm">Corporate Bookings</h4>
                <p className="text-xs text-slate-600 mt-1">corporate@hirecar.com.au</p>
                <span className="text-[10px] text-slate-400 block mt-1">Corporate Net 30 Invoicing</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DEFAULT / VEHICLES CATALOG GRID (Visible on main page or /vehicles) */}
      {(activeTab === 'overview' || activeTab === 'vehicles') && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Verified Australian Fleets
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Featured Rental Vehicles in {searchLocation}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Instant booking with verified local operators. Clean vehicle guarantee and 24/7 roadside assistance included.
                </p>
              </div>

              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                Showing {filteredVehicles.length} of {vehicles.length} Vehicles
              </span>
            </div>

            {/* Vehicle Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((car) => (
                <div
                  key={car.id}
                  className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#ea580c]/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Vehicle Photo Container */}
                    <div className="relative h-52 bg-slate-100 overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#ea580c] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                        {car.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-black px-3 py-1 rounded-xl shadow-md">
                        {car.price}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                          <span className="font-semibold uppercase text-[#ea580c]">{car.category}</span>
                          <div className="flex items-center gap-1 text-slate-700 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{car.rating}</span>
                            <span className="text-slate-400 text-[10px]">({car.reviews})</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug">
                          {car.name}
                        </h3>
                        <span className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>Supplied by <strong>{car.vendor}</strong></span>
                        </span>
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-[11px] text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>{car.passengers}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Gauge className="w-3.5 h-3.5 text-slate-400" />
                          <span className="truncate">{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Unltd Km</span>
                        </div>
                      </div>

                      <div className="space-y-1 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>Direct Airport Counter / Terminal Collection</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>Free cancellation up to 48 hours prior</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() =>
                        alert(
                          `Booking initiated for ${car.name} from ${car.vendor} at ${searchLocation}! Confirmation voucher dispatched.`
                        )
                      }
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#ea580c] text-white font-extrabold text-xs transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Book Now • Instant Confirmation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Trust & Reassurance Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <Award className="w-8 h-8 text-[#ea580c] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-sm">Verified Operators Only</h4>
              <p className="text-xs text-slate-500 mt-1">Every fleet vendor is audited for insurance and licensing.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <CreditCard className="w-8 h-8 text-[#ea580c] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-sm">Zero Surprise Surcharges</h4>
              <p className="text-xs text-slate-500 mt-1">Taxes, GST, and premium airport fees are included upfront.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <Clock className="w-8 h-8 text-[#ea580c] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-sm">Free 48-Hour Cancellation</h4>
              <p className="text-xs text-slate-500 mt-1">Travel plans change? Cancel up to 48 hours for a full refund.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <Phone className="w-8 h-8 text-[#ea580c] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-sm">24/7 Aussie Road Support</h4>
              <p className="text-xs text-slate-500 mt-1">Dedicated RACQ/NRMA roadside breakdown assistance nationwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
