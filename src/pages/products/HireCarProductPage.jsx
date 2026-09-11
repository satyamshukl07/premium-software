import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Car,
  DollarSign,
  Building2,
  Info,
  BookOpen,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Check,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Star,
  Clock,
  Navigation,
  Fuel,
  Users,
  Search,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function HireCarProductPage() {
  // State to track which dropdown card is currently expanded ('locations' | 'vehicles' | null)
  const [expandedCard, setExpandedCard] = useState('locations');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Locations list exactly from Screenshot 2026-09-08 172857.png
  const locations = [
    { name: 'Sydney', state: 'NSW', count: '120+ Vehicles', airport: 'SYD' },
    { name: 'Melbourne', state: 'VIC', count: '95+ Vehicles', airport: 'MEL' },
    { name: 'Brisbane', state: 'QLD', count: '85+ Vehicles', airport: 'BNE' },
    { name: 'Perth', state: 'WA', count: '60+ Vehicles', airport: 'PER' },
    { name: 'Adelaide', state: 'SA', count: '45+ Vehicles', airport: 'ADL' },
    { name: 'Gold Coast', state: 'QLD', count: '70+ Vehicles', airport: 'OOL' },
    { name: 'Canberra', state: 'ACT', count: '30+ Vehicles', airport: 'CBR' },
    { name: 'Hobart', state: 'TAS', count: '40+ Vehicles', airport: 'HBA' },
    { name: 'Darwin', state: 'NT', count: '25+ Vehicles', airport: 'DRW' },
    { name: 'Cairns', state: 'QLD', count: '50+ Vehicles', airport: 'CNS' },
  ];

  // Vehicles list exactly from Screenshot 2026-09-08 172903.png
  const vehicleCategories = [
    { name: 'Sedans', desc: 'Comfortable & fuel-efficient daily drivers', count: '40+ Models' },
    { name: 'SUVs', desc: 'Spacious family cruisers & adventure AWDs', count: '65+ Models' },
    { name: 'Utes & Trucks', desc: 'Heavy-duty 4WD commercial & mine-spec trays', count: '30+ Models' },
    { name: 'People Movers', desc: '7 to 12-seater passenger minibuses & vans', count: '20+ Models' },
    { name: 'Luxury', desc: 'Premium executive saloons & prestige convertibles', count: '15+ Models' },
    { name: 'Vans & Commercial', desc: 'Cargo cargo delivery vans & refrigerated movers', count: '25+ Models' },
    { name: 'Electric & Hybrid', desc: 'Zero-emission Teslas, BYDs & hybrid fleet', count: '35+ Models' },
  ];

  // Single Cards list from Screenshot 2026-09-08 172911.png
  const singleCards = [
    {
      title: 'Pricing',
      slug: 'pricing',
      tag: 'Zero Surcharges',
      icon: <DollarSign className="w-6 h-6 text-amber-600" />,
      desc: 'Transparent daily rates with zero marketplace booking fees, no hidden credit card counter surcharges, and complimentary basic insurance included.',
      highlight: 'From $45 AUD / day',
    },
    {
      title: 'Vendors',
      slug: 'vendors',
      tag: 'Fleet Operators',
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
      desc: 'List your rental fleet free. Independent operators, depot franchises, and private fleets manage availability, automated payouts, and verified drivers.',
      highlight: 'Free Onboarding & 0% Listing Fee',
    },
    {
      title: 'About',
      slug: 'about',
      tag: 'Direct Platform',
      icon: <Info className="w-6 h-6 text-amber-600" />,
      desc: 'Australia’s direct vehicle rental marketplace connecting travellers and commercial businesses straight to verified independent rental depots.',
      highlight: '100% Australian Owned & Operated',
    },
    {
      title: 'Blog',
      slug: 'blog',
      tag: 'Travel & Insights',
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      desc: 'Expert Australian road trip itineraries, electric vehicle driving tips, Red Centre travel guides, and cost-saving hire car hacks.',
      highlight: '50+ Aussie Travel Guides',
    },
    {
      title: 'Contact',
      slug: 'contact',
      tag: '24/7 Support',
      icon: <PhoneCall className="w-6 h-6 text-amber-600" />,
      desc: 'Need assistance with your booking or listing? Our local Australian support desk and roadside breakdown dispatch are available 24 hours a day.',
      highlight: 'Sydney & Brisbane Based Desk',
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Dark Navy & Amber Brand Hero */}
      <section className="bg-gradient-to-b from-[#0b1320] via-[#101b2d] to-[#0b1320] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Australian Car Rental Marketplace</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              HireCar Marketplace
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Compare cars, vans, utes, and luxury vehicles from verified Australian rental businesses. Direct from trusted operators with zero marketplace booking fees, ever.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#marketplace-cards"
                className="px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-98 flex items-center gap-2"
              >
                <span>Explore Fleet & Locations</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.hirecarmarketplace.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <span>Visit HireCar Marketplace</span>
                <ExternalLink className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cards Section */}
      <section id="marketplace-cards" className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 block mb-2">
              Marketplace Navigation & Modules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Browse Locations, Vehicles & Operator Services
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Click on <strong>Locations</strong> or <strong>Vehicles</strong> to reveal all available regional depots and vehicle categories across Australia.
            </p>
          </div>

          <div className="space-y-6">
            {/* Top Row: Two Interactive Multi-Option Cards (Locations & Vehicles) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* CARD 1: LOCATIONS (Interactive Dropdown Card) */}
              <div
                className={`bg-white rounded-2xl border transition-all shadow-sm ${
                  expandedCard === 'locations'
                    ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-xl'
                    : 'border-slate-200 hover:border-amber-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedCard(expandedCard === 'locations' ? null : 'locations')}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                          10 Australian Hubs
                        </span>
                        <span className="text-xs text-slate-400 font-medium">Click to view all</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        Locations
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Find airport depots and city pickup points across all Australian capital cities and tourist regions.
                      </p>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-700 transition-colors">
                    {expandedCard === 'locations' ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Locations Content from Screenshot 1 */}
                {expandedCard === 'locations' && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center justify-between">
                      <span>Select an Australian City:</span>
                      <span className="text-amber-600 font-bold">Instant Depot Availability</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {locations.map((loc) => {
                        const isSelected = selectedCity === loc.name;
                        return (
                          <button
                            key={loc.name}
                            type="button"
                            onClick={() => setSelectedCity(isSelected ? null : loc.name)}
                            className={`p-3 rounded-xl text-left border transition-all ${
                              isSelected
                                ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-md font-bold'
                                : 'bg-slate-50 hover:bg-amber-50/70 border-slate-200 text-slate-800'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm">{loc.name}</span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                                isSelected ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-200 text-slate-600'
                              }`}>
                                {loc.state}
                              </span>
                            </div>
                            <div className={`text-[11px] mt-1 flex items-center gap-1 ${
                              isSelected ? 'text-slate-900' : 'text-slate-500'
                            }`}>
                              <Navigation className="w-3 h-3" />
                              <span>{loc.airport} Airport + City</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {selectedCity && (
                      <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs text-amber-900">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>
                            Selected <strong>{selectedCity}</strong>: Showing direct depot vehicles with zero airport booking surcharges.
                          </span>
                        </div>
                        <Link
                          to={`/solutions/${selectedCity.toLowerCase().replace(/\s+/g, '-')}`}
                          className="font-bold underline cursor-pointer text-amber-950 hover:text-amber-700 whitespace-nowrap ml-2"
                        >
                          View {selectedCity} Fleet →
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* CARD 2: VEHICLES (Interactive Dropdown Card) */}
              <div
                className={`bg-white rounded-2xl border transition-all shadow-sm ${
                  expandedCard === 'vehicles'
                    ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-xl'
                    : 'border-slate-200 hover:border-amber-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedCard(expandedCard === 'vehicles' ? null : 'vehicles')}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600">
                      <Car className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                          7 Fleet Categories
                        </span>
                        <span className="text-xs text-slate-400 font-medium">Click to view all</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        Vehicles
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        From fuel-efficient city compacts and 4WD work utes to electric luxury saloons and family vans.
                      </p>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-700 transition-colors">
                    {expandedCard === 'vehicles' ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Vehicles Content from Screenshot 2 */}
                {expandedCard === 'vehicles' && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center justify-between">
                      <span>Select Vehicle Category:</span>
                      <span className="text-amber-600 font-bold">Guaranteed Make & Model</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {vehicleCategories.map((cat) => {
                        const isSelected = selectedCategory === cat.name;
                        return (
                          <button
                            key={cat.name}
                            type="button"
                            onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                            className={`p-3 rounded-xl text-left border transition-all ${
                              isSelected
                                ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-md font-bold'
                                : 'bg-slate-50 hover:bg-amber-50/70 border-slate-200 text-slate-800'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm flex items-center gap-1.5">
                                <Car className="w-3.5 h-3.5 text-amber-700" />
                                <span>{cat.name}</span>
                              </span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                                isSelected ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-200 text-slate-600'
                              }`}>
                                {cat.count}
                              </span>
                            </div>
                            <p className={`text-[11px] mt-1 leading-snug ${
                              isSelected ? 'text-slate-900' : 'text-slate-500'
                            }`}>
                              {cat.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {selectedCategory && (
                      <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs text-amber-900">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>
                            Showing verified <strong>{selectedCategory}</strong> with clear insurance inclusions.
                          </span>
                        </div>
                        <Link
                          to={`/solutions/${selectedCategory.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/--+/g, '-')}`}
                          className="font-bold underline cursor-pointer text-amber-950 hover:text-amber-700 whitespace-nowrap ml-2"
                        >
                          View {selectedCategory} Details →
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Row: Remaining Single Cards (Pricing, Vendors, About, Blog, Contact) from Screenshot 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {singleCards.map((card) => {
                const targetUrl =
                  card.slug === 'contact'
                    ? '/contact'
                    : card.slug === 'blog'
                    ? '/resources/blog'
                    : `/solutions/${card.slug}`;

                return (
                  <Link
                    key={card.slug}
                    to={targetUrl}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                          {card.icon}
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-600">
                      <span className="text-amber-700 font-semibold">{card.highlight}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-600" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HireCar Marketplace (Car Hire Specific Content) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 block mb-2">
                Fair & Transparent Car Rental
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Premium Car Rental Across Australia, Direct From Trusted Operators
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Traditional booking aggregators add 15% to 30% hidden middleman commissions, inflated insurance waivers, and surprise credit card counter fees. HireCar Marketplace bypasses the brokers—connecting you straight to verified Australian independent depots, airport operators, and commercial fleet owners with direct-to-consumer pricing.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Verified local Australian businesses — strictly vetted independent rental depots and airport partners',
                  'Zero hidden marketplace fees — what you see is what you pay, with no surprise airport desk markups',
                  'Australia-wide coverage across all 10 major hubs from Sydney & Melbourne to Darwin & Cairns',
                  'Direct fleet integration — live real-time vehicle availability, instant reservation & digital KYC check-in',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <a
                  href="#marketplace-cards"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Search Vehicles Now</span>
                  <Search className="w-4 h-4" />
                </a>
                <a
                  href="https://www.hirecarmarketplace.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all flex items-center gap-1.5"
                >
                  <span>List Your Fleet Free</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-96">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Direct premium car hire in Australia with trusted fleet operators"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
                    HIRECAR DIRECT // VERIFIED OPERATORS
                  </span>
                  <h4 className="text-lg font-bold">100% Direct Rates With No Middleman Markups</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
