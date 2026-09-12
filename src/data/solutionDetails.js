import { chmDetails } from './chmDetails.js';
import { fleetTrackingDetails } from './fleetTrackingDetails.js';
import { wrmsDetails } from './wrmsDetails.js';
import { hireCarExtraDetails } from './hireCarExtraDetails.js';
import { chmExtraDetails } from './chmExtraDetails.js';
import { fleetTrackingExtraDetails } from './fleetTrackingExtraDetails.js';

// Base HireCar Marketplace items
const hireCarDetails = {
  // ==========================================
  // HIRE CAR MARKETPLACE - PRODUCT OVERVIEW
  // ==========================================
  'hire-car-marketplace': {
    title: "HireCar Marketplace",
    subtitle: "Australia's Independent Car Rental Exchange & Operator Network",
    tag: "Rental Marketplace",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "HireCar Marketplace is Australia's dedicated digital rental platform connecting travelers, corporate contractors, and logistics businesses directly with verified local fleet operators across all states.",
    overview:
      "Unlike traditional aggregator websites that hide operator identities and charge exorbitant booking commissions, HireCar Marketplace empowers consumers to find, compare, and book verified vehicles directly from independent Australian fleet owners with zero hidden counter fees.",
    problemSolved:
      "Traditional car hire aggregators inflate rates with opaque fees, obscure operator identities, and push high-mileage surplus stock. Renters face unpleasant counter surprises, while local operators lose up to 25% of margin to overseas booking intermediaries.",
    whoItsFor:
      "Leisure travelers, corporate executives, trade contractors needing replacement 4WD utes, airport travelers, and independent car rental businesses seeking direct, qualified booking demand.",
    howItWorks: [
      { step: "01", title: "Search & Filter", desc: "Select pickup locations across capital city airports, metro centers, or regional hubs." },
      { step: "02", title: "Transparent Comparison", desc: "View real vehicle photos, verified owner ratings, bond terms, and daily inclusive rates." },
      { step: "03", title: "Direct Connection", desc: "Confirm booking directly with the operator with instant calendar reservation and zero surcharge." },
    ],
    bullets: [
      "Over 5,000 verified Australian rental vehicles listed across NSW, VIC, QLD, WA, SA, and TAS",
      "Zero marketplace booking markup—renters pay the true operator retail price with full transparency",
      "Direct communication channel between renter and fleet host for tailored pickup and airport handovers",
      "Comprehensive damage pre-inspection protocols and transparent security bond pre-authorizations",
    ],
    features: [
      { title: "Direct Operator Booking", desc: "Cut out overseas middleman fees and secure direct agreements with licensed Australian fleet hosts." },
      { title: "Airport & Metro Delivery", desc: "Convenient pickup options including terminal gate drop-offs, shuttle points, and downtown depots." },
      { title: "Clear Pricing & Zero Hidden Fees", desc: "What you see is what you pay—inclusive of mandatory GST, road tolls setup, and standard insurance." },
      { title: "Flexible Hire Durations", desc: "Seamless rates for daily weekend getaways, weekly business rentals, and multi-month corporate fleet leases." },
    ],
    stat1: "500+",
    stat1Label: "Licensed Operators",
    stat2: "$0",
    stat2Label: "Marketplace Booking Markup",
    stat3: "5,000+",
    stat3Label: "Active Listed Vehicles",
    stat4: "100%",
    stat4Label: "Australian Coverage",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "No sudden counter surge rates when collecting keys",
      "Immediate digital booking voucher with operator contact details",
      "Live operator availability synced with modern rental fleet telematics",
      "Supports local Australian automotive businesses and independent rental entrepreneurs",
    ],
  },
  'hirecar': {
    redirect: 'hire-car-marketplace'
  },

  // ==========================================
  // HIRE CAR MARKETPLACE - 6 SOLUTION CARDS
  // ==========================================
  'wide-vehicle-selection': {
    title: "Wide Vehicle Selection",
    subtitle: "From Compact City Hatchbacks to Heavy-Duty 4WD Commercial Utes",
    tag: "Fleet Diversity",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Access a broad range of passenger, commercial, and specialty vehicles suited for daily city commutes, family holidays, long-distance touring, and commercial job sites.",
    overview:
      "Finding the right vehicle shouldn't mean settling for an ambiguous 'or similar' class model. Our wide selection gives renters exact make, model, year, and transmission specifications so there are no surprises when you turn the key.",
    problemSolved:
      "Standard rental chains force renters into generic car classes where a booked SUV might turn into an underpowered crossover. Our platform displays verified individual makes, engine capacities, and towing specs.",
    whoItsFor:
      "Families requiring spacious 7-seater people movers, tradespeople needing mine-spec 4WD trays, tourists seeking fuel-efficient hybrids, and couples looking for weekend luxury saloons.",
    howItWorks: [
      { step: "01", title: "Select Category", desc: "Filter by Sedans, SUVs, 4WD Utes, People Movers, Electric/Hybrid, or Commercial Vans." },
      { step: "02", title: "Verify Specifications", desc: "Check boot capacity, seat count, child restraint anchor points, and towing capabilities." },
      { step: "03", title: "Lock In Exact Model", desc: "Reserve the confirmed vehicle model without arbitrary substitutions at collection." },
    ],
    bullets: [
      "Modern economy hatchbacks and sedans for fuel-efficient urban commuting and airport trips",
      "Rugged dual-cab 4WD utes equipped with tow bars and all-terrain tires for Australian regional roads",
      "Spacious 7 to 12-seater passenger vans ideal for sporting clubs, corporate tours, and family holidays",
      "Zero-emission electric vehicles and hybrid fleets with charging adapters and roadside support",
    ],
    features: [
      { title: "Exact Model Assurance", desc: "Know the exact vehicle model, year, and features before confirming your reservation." },
      { title: "Child Seat & Roof Rack Add-ons", desc: "Select family-safe ISOFIX baby capsules, bike racks, or tow hitches during checkout." },
      { title: "Low-Kilometre Late Models", desc: "All listed vehicles undergo strict roadworthiness certification and maintenance logs." },
      { title: "Commercial Cargo Options", desc: "High-roof transit vans, refrigerated movers, and open-tray utility vehicles for business logistics." },
    ],
    stat1: "7+",
    stat1Label: "Vehicle Categories",
    stat2: "100%",
    stat2Label: "Model Transparency",
    stat3: "4.9/5",
    stat3Label: "Renter Vehicle Satisfaction",
    stat4: "24/7",
    stat4Label: "Roadside Assistance Included",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "No downgrades or unexpected vehicle reallocations at the counter",
      "Detailed interior photos and boot dimensions provided on every listing",
      "Clean, sanitized, and safety-inspected vehicles ready upon arrival",
      "Hybrid and electric models available across major metropolitan centers",
    ],
  },

  'trusted-rental-operators': {
    title: "Trusted Rental Operators",
    subtitle: "Vetted Local Fleets Providing Professional Australian Hospitality",
    tag: "Operator Verification",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Rent with confidence from verified Australian car hire businesses, independent fleet operators, and established local automotive rental providers.",
    overview:
      "Every operator on the HireCar Marketplace undergoes rigorous identity verification, commercial insurance validation, and vehicle inspection auditing before their fleet goes live.",
    problemSolved:
      "Renters often fear hidden damage claims, disputed bond deductions, and uncontactable support from unvetted peer-to-peer car sharing hosts. We ensure only licensed, commercially insured rental operators manage vehicles.",
    whoItsFor:
      "Travelers wanting peace of mind, business professionals needing compliant corporate tax invoices, and local rental companies seeking to build a verified digital reputation.",
    howItWorks: [
      { step: "01", title: "Compliance Check", desc: "Operators submit Australian business numbers (ABN), licensing, and commercial fleet insurance." },
      { step: "02", title: "Fleet Inspection", desc: "Vehicles undergo initial roadworthy checks and digital maintenance recording." },
      { step: "03", title: "Community Reviews", desc: "Real renters submit verified feedback and ratings after each completed rental." },
    ],
    bullets: [
      "100% verified Australian businesses with valid ABN and registered commercial operations",
      "Mandatory commercial comprehensive hire insurance policy verification for all active fleets",
      "Transparent operator rating system reflecting punctuality, cleanliness, and communication",
      "Direct telephone and messaging access to the business manager for fast assistance",
    ],
    features: [
      { title: "Verified Identity & Licences", desc: "Guaranteed legitimate commercial operators with physical depots or established handover teams." },
      { title: "Standardized Handover Checklists", desc: "Digital photo check-in and check-out logs safeguard against disputed damage claims." },
      { title: "Prompt Bond Release", desc: "Strict operator guidelines ensure security pre-authorizations are released swiftly post-rental." },
      { title: "Australian Customer Care", desc: "Local support team ready to mediate inquiries and maintain high marketplace standards." },
    ],
    stat1: "100%",
    stat1Label: "ABN Verified Hosts",
    stat2: "4.8/5",
    stat2Label: "Average Host Rating",
    stat3: "< 24h",
    stat3Label: "Bond Release Guarantee",
    stat4: "500+",
    stat4Label: "Depot Locations Across Aus",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Direct relationship with friendly, knowledgeable Australian local operators",
      "Flexible arrangements for flight delays and out-of-hours airport arrivals",
      "Reliable corporate invoices with detailed GST breakdowns for expense accounts",
      "Zero ghost listings or inactive rental hosts",
    ],
  },

  'easy-vehicle-discovery': {
    title: "Easy Vehicle Discovery",
    subtitle: "Smart Search, Real-Time Availability & Precision Location Filtering",
    tag: "Search Experience",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Find the vehicle you need quickly with clear categories, location-based searches, and straightforward pricing options that save you valuable booking time.",
    overview:
      "Our vehicle discovery engine is purpose-built for speed and clarity. Enter your pickup suburb, airport, or city hub to view available cars sorted by distance, price, category, and passenger capacity.",
    problemSolved:
      "Booking portals often load slowly, hide total costs until the final checkout screen, and show vehicles that aren't actually available for your dates. We present real-time live availability with upfront pricing.",
    whoItsFor:
      "Time-pressed business travelers, international tourists planning road trips, and local residents needing emergency replacement transport after an accident.",
    howItWorks: [
      { step: "01", title: "Enter Trip Details", desc: "Choose your pickup and drop-off dates, times, and preferred Australian city or airport." },
      { step: "02", title: "Apply Precision Filters", desc: "Filter by transmission (auto/manual), fuel type, seating capacity, or operator depot." },
      { step: "03", title: "Select & Reserve", desc: "Review transparent inclusions, insurance levels, and book in less than 90 seconds." },
    ],
    bullets: [
      "Lightning-fast search engine indexing thousands of live vehicles across Australian postcodes",
      "Detailed vehicle amenity badges: Apple CarPlay, Android Auto, reversing cameras, and cruise control",
      "Interactive map view showing pickup depots relative to airport terminals and train stations",
      "Instant booking confirmation with automated SMS and email reservation summaries",
    ],
    features: [
      { title: "Geo-Location Depot Search", desc: "Find cars nearest to your hotel, office, or airport arrival terminal without detours." },
      { title: "Live Fleet Sync", desc: "Integrated booking calendar eliminates double-booking errors and cancellations." },
      { title: "Transparent Price Sorting", desc: "Sort by total trip cost, daily rate, or top customer ratings with zero hidden fees." },
      { title: "Mobile-Optimized Discovery", desc: "Browse, compare, and reserve effortlessly on iOS, Android, or desktop browsers." },
    ],
    stat1: "< 90s",
    stat1Label: "Average Booking Time",
    stat2: "100%",
    stat2Label: "Live Stock Verification",
    stat3: "50+",
    stat3Label: "Australian Airport Hubs",
    stat4: "0",
    stat4Label: "Hidden Checkout Fees",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "No endless form filling or deceptive pricing bait-and-switches",
      "One-click booking re-use for returning corporate renters",
      "Clear calendar view of peak holiday rates and low-season discounts",
      "Instant digital agreement sent directly to your phone",
    ],
  },

  'direct-rental-connections': {
    title: "Direct Rental Connections",
    subtitle: "Communicate Directly With Fleet Owners for Personalized Service",
    tag: "Direct Communication",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Connect directly with rental businesses for smoother handovers, customized pickup arrangements, and prompt support throughout your journey.",
    overview:
      "When unexpected flight delays occur or you need an extra child seat at the terminal, talking to an overseas call center is frustrating. HireCar Marketplace puts you in direct contact with the local team managing the vehicle.",
    problemSolved:
      "Aggregators create a brick wall between the driver and the rental desk. Renters cannot communicate special requests, flight number changes, or custom drop-off locations directly.",
    whoItsFor:
      "Corporate travelers with tight meeting schedules, holidaymakers requiring terminal curbside meet-and-greets, and operators who pride themselves on customer service.",
    howItWorks: [
      { step: "01", title: "Direct Contact Access", desc: "Upon reservation, receive the direct mobile phone number and depot contact for your fleet host." },
      { step: "02", title: "Coordinate Handover", desc: "Confirm terminal arrival gate, flight numbers, or depot arrival times via SMS or phone." },
      { step: "03", title: "Keyless or Counter Handoff", desc: "Enjoy rapid key handover, digital vehicle condition sign-off, and hit the road." },
    ],
    bullets: [
      "Direct SMS and telephone communication with Australian fleet managers and depot supervisors",
      "Ability to request customized pickup solutions such as lockbox keys, curbside drops, or hotel delivery",
      "Fast handling of flight delays—operators monitor your inbound flight number automatically",
      "Direct arrangement of extended rental days or modified return schedules without third-party fees",
    ],
    features: [
      { title: "Direct Chat & Phone Access", desc: "Speak with the person who holds your car keys, not an automated switchboard." },
      { title: "Flight Number Tracking", desc: "Operators track regional and domestic flights to ensure your vehicle is ready even if delayed." },
      { title: "Custom Drop-off Protocols", desc: "Coordinate after-hours key drop-boxes and contactless vehicle returns with ease." },
      { title: "Fast Extension Requests", desc: "Extend your rental period directly with the operator with transparent prorated rates." },
    ],
    stat1: "99.4%",
    stat1Label: "On-Time Vehicle Handovers",
    stat2: "Direct",
    stat2Label: "Host Phone & SMS Access",
    stat3: "0",
    stat3Label: "Intermediary Call Centers",
    stat4: "15 min",
    stat4Label: "Average Flight Delay Grace",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Immediate assistance if your travel plans change mid-trip",
      "Personalized local driving tips and toll road guidance for visiting drivers",
      "No bureaucratic change fees when extending rental durations",
      "Build ongoing relationships with trusted local commercial fleet providers",
    ],
  },

  'transparent-comparison': {
    title: "Transparent Comparison",
    subtitle: "Clear Pricing, Terms, and Inclusions With Zero Hidden Surprises",
    tag: "Pricing Honesty",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Review vehicle details, rental policies, and pricing clearly so you can choose the best option without confusing terms or unexpected costs.",
    overview:
      "Too many rental companies advertise artificially low daily rates, only to shock renters at the counter with mandatory administration fees, credit card surcharges, toll pass device rentals, and excessive bond requirements.",
    problemSolved:
      "Misleading comparison sites lure customers with '$19/day' deals that balloon to '$85/day' after mandatory counter fees. HireCar Marketplace enforces total price transparency across all listings.",
    whoItsFor:
      "Cost-conscious travelers, corporate procurement officers needing predictable budgets, and tourists wanting clear insurance excess guidelines.",
    howItWorks: [
      { step: "01", title: "All-Inclusive Search", desc: "Quotes clearly display daily rental rate, GST, toll pass integration, and insurance tiers." },
      { step: "02", title: "Side-by-Side Comparison", desc: "Compare excess liability amounts, kilometer allowances (unlimited vs capped), and security deposits." },
      { step: "03", title: "Zero Counter Surprises", desc: "The price agreed upon during checkout is the final price charged at pickup." },
    ],
    bullets: [
      "Total trip cost displayed upfront with clear itemization of daily rates and applicable taxes",
      "Unambiguous security deposit details so you know the exact bond amount held on your card",
      "Standard insurance excess figures clearly outlined alongside optional zero-excess waivers",
      "Transparent kilometer allowances—instantly see if a car includes unlimited or capped daily km",
    ],
    features: [
      { title: "Side-by-Side Policy Matrix", desc: "Compare insurance deductibles, additional driver fees, and age requirements in one clear table." },
      { title: "No Credit Card Surcharges", desc: "Fair payment processing without predatory credit card counter percentage markups." },
      { title: "Automated Toll Guidance", desc: "Clear explanation of how Linkt and EastLink toll roads are billed during your rental." },
      { title: "Verified Fuel Policy", desc: "Full-to-full fuel policy ensures you only pay for the fuel you actually consume." },
    ],
    stat1: "$0",
    stat1Label: "Hidden Counter Fees",
    stat2: "100%",
    stat2Label: "Upfront Price Accuracy",
    stat3: "Full-to-Full",
    stat3Label: "Transparent Fuel Policy",
    stat4: "Clear",
    stat4Label: "Excess Bond Transparency",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Budget accurately for your Australian road trip or corporate assignment",
      "Avoid predatory high-pressure insurance sales pitches at collection desks",
      "Clear receipts and tax invoices generated immediately upon booking",
      "Protection under Australian Consumer Law fair advertising standards",
    ],
  },

  'australia-wide-reach': {
    title: "Australia-Wide Reach",
    subtitle: "From Major Capital Airports to Regional Mining & Tourism Hubs",
    tag: "National Coverage",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Explore vehicles across capital cities, regional towns, and destination areas throughout Australia from one convenient marketplace.",
    overview:
      "Whether you're landing at Sydney Kingsford Smith, heading to a mining site in the Pilbara, driving the Great Ocean Road, or visiting Cairns for the reef, HireCar Marketplace connects you with trusted vehicles across every corner of the country.",
    problemSolved:
      "Major global rental brands have limited presence outside capital city airports, leaving travelers stranded in regional centers or paying exorbitant remote location fees.",
    whoItsFor:
      "Domestic road-trippers, FIFO mining and construction personnel, regional business visitors, and international tourists exploring Australia.",
    howItWorks: [
      { step: "01", title: "Select Any Australian Region", desc: "Search across NSW, VIC, QLD, WA, SA, TAS, NT, or the ACT." },
      { step: "02", title: "View Local Fleet Providers", desc: "Discover both downtown depots and regional specialists with territory-appropriate vehicles." },
      { step: "03", title: "Nationwide Support", desc: "Benefit from national roadside assistance coverage wherever Australian highways take you." },
    ],
    bullets: [
      "Active depots and pickup points across Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, and Canberra",
      "Regional coverage in high-demand hubs including Cairns, Gold Coast, Sunshine Coast, Newcastle, Geelong, and Townsville",
      "Outback and regional mining-spec vehicles with bullbars, UHF radios, and dual spare tires",
      "Seamless one-way rental options between popular tourist and commercial transit corridors",
    ],
    features: [
      { title: "Capital City Airport Hubs", desc: "Convenient pickups at major domestic and international airport precincts across Australia." },
      { title: "Regional Depots & Mining Hubs", desc: "Commercial utes and 4WD vehicles stationed in key resource and agricultural corridors." },
      { title: "24/7 National Roadside Assist", desc: "Comprehensive breakdown support across all state highways and arterial routes." },
      { title: "One-Way Inter-City Corridors", desc: "Drive from Sydney to Brisbane or Melbourne with pre-approved drop-off locations." },
    ],
    stat1: "8 States",
    stat1Label: "Complete Territory Coverage",
    stat2: "120+",
    stat2Label: "Towns & Cities Covered",
    stat3: "24/7",
    stat3Label: "National Roadside Coverage",
    stat4: "50+",
    stat4Label: "Airport Delivery Zones",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Find vehicles where the multinational corporate chains have zero depots",
      "Local operators who understand regional driving conditions and wildlife precautions",
      "Reliable 4WD vehicles equipped for Australian corrugated dirt roads",
      "Convenient one-stop booking for interstate multi-leg business itineraries",
    ],
  },

  // ==========================================
  // HIRE CAR MARKETPLACE - 5 WHY IT MATTERS
  // ==========================================
  'better-vehicle-discovery': {
    title: "Better Vehicle Discovery",
    subtitle: "Eliminating the Confusion of Traditional Rental Booking",
    tag: "Smart Search",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Clear visibility over vehicle specifications, seating capacity, luggage limits, and fuel efficiency makes choosing the right rental vehicle effortless.",
    overview:
      "When customers have transparent, high-resolution discovery tools, they make informed decisions that match their journey's needs, reducing counter friction and customer dissatisfaction.",
    problemSolved: "Vague categorization, missing specifications, and misleading stock availability.",
    whoItsFor: "Every traveler seeking clarity before submitting booking details.",
    bullets: [
      "Exact make and model details with real exterior and interior photography",
      "Filter by precise luggage capacity (small cases, full suitcases, golf bags)",
      "Instant fuel consumption indicators and tank range estimates",
      "Transmission and engine drive train clarity (FWD, AWD, 4x4, EV)",
    ],
    features: [
      { title: "Detailed Vehicle Specs", desc: "Accurate dimensions, engine size, and comfort amenities." },
      { title: "Luggage & Seat Calculator", desc: "Ensure your travel group and suitcases fit comfortably." },
      { title: "Safety Rating Visibility", desc: "Review 5-star ANCAP safety ratings for complete family protection." },
      { title: "Real-Time Stock Counter", desc: "Know how many vehicles remain for your chosen dates." },
    ],
    stat1: "100%", stat1Label: "Specification Accuracy",
    stat2: "5,000+", stat2Label: "Active Listings",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },

  'better-operator-visibility': {
    title: "Better Operator Visibility",
    subtitle: "Empowering Independent Australian Fleets to Flourish Online",
    tag: "Operator Support",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Local operators gain direct customer connections and fair marketplace exposure without paying crippling commissions to multinational booking giants.",
    overview:
      "Australia's car hire industry relies heavily on family-owned and regional operators who care deeply about vehicle maintenance and service. We give these operators the digital stage they deserve.",
    problemSolved: "Monopoly control by international aggregator cartels that squeeze local business margins.",
    whoItsFor: "Independent car hire businesses, depot owners, and fleet managers seeking fair customer acquisition.",
    bullets: [
      "Branded operator profiles showcasing company history, customer reviews, and depot photos",
      "Direct settlement of customer payments without months of commission withholding",
      "Full control over daily rates, peak seasonal pricing, and rental terms",
      "Digital verification of renters' driver licences and identity documents",
    ],
    features: [
      { title: "Branded Digital Storefront", desc: "Display your company branding and customer testimonials prominently." },
      { title: "Direct Payout Channel", desc: "Receive rental proceeds directly with zero predatory marketplace fees." },
      { title: "Automated KYC Verification", desc: "Instant validation of Australian and international driving licences." },
      { title: "Depot Fleet Control", desc: "Manage multiple airport and suburban pickup depots from one dashboard." },
    ],
    stat1: "500+", stat1Label: "Operator Partners",
    stat2: "0%", stat2Label: "Predatory Commissions",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },

  'easier-comparison': {
    title: "Easier Comparison",
    subtitle: "Side-by-Side Clarity on Rates, Excesses, and Inclusions",
    tag: "Comparison Engine",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Compare options with clarity on inclusions, pricing, and terms so you can make confident booking decisions without hidden fine print.",
    overview:
      "Our comparison matrix allows renters to evaluate vehicles side-by-side. See daily rates, security deposits, insurance excess tiers, and customer ratings without jumping across multiple tabs.",
    problemSolved: "Inability to compare true total costs across competing rental companies.",
    whoItsFor: "Budget-conscious holidaymakers and corporate fleet managers comparing cost vs benefit.",
    bullets: [
      "Compare up to 4 vehicles side-by-side with synchronized feature matrices",
      "Total trip cost calculation including estimated toll passes and fuel requirements",
      "Clear indication of security deposit hold vs non-refundable insurance fees",
      "Customer satisfaction score breakdown across vehicle cleanliness, punctuality, and host communication",
    ],
    features: [
      { title: "Side-by-Side Matrix", desc: "Compare pricing, boot space, transmission, and insurance simultaneously." },
      { title: "True Total Price Engine", desc: "See final checkout cost including all mandatory taxes and bonds." },
      { title: "Fuel & Toll Cost Estimator", desc: "Plan realistic travel budgets for Australian highway itineraries." },
      { title: "Honest Customer Ratings", desc: "Read verified feedback written by real drivers who completed rentals." },
    ],
    stat1: "100%", stat1Label: "Price Transparency",
    stat2: "< 30s", stat2Label: "Comparison Decision Time",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },

  'simple-user-experience': {
    title: "Simple User Experience",
    subtitle: "Fast, Intuitive, and Frictionless Car Hire Reservations",
    tag: "User Experience",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "A clean, straightforward platform designed to reduce friction, eliminate unnecessary steps, and make renting a vehicle simple.",
    overview:
      "Renting a car should be as effortless as ordering a rideshare. We have redesigned the reservation flow to minimize paperwork, speed up license verification, and provide mobile-friendly digital agreements.",
    problemSolved: "Cumbersome paper contracts, lengthy counter lines, and confusing checkout forms.",
    whoItsFor: "Modern travelers who demand fast, digital-first automotive services.",
    bullets: [
      "Clean 3-step checkout with instant SMS and email confirmation receipts",
      "Digital driver license upload with instant OCR identity validation",
      "Mobile-friendly management of active reservations and trip details",
      "Paperless check-in and digital damage recording upon vehicle collection",
    ],
    features: [
      { title: "3-Step Digital Checkout", desc: "Select vehicle, upload license details, confirm reservation." },
      { title: "Mobile Wallet Integration", desc: "Store booking vouchers and key collection codes in Apple/Google Wallet." },
      { title: "Paperless Handover", desc: "Sign digital hire contracts on your smartphone screen in seconds." },
      { title: "Real-Time Trip Notifications", desc: "Receive automated alerts regarding vehicle readiness and depot directions." },
    ],
    stat1: "< 90s", stat1Label: "Checkout Duration",
    stat2: "0", stat2Label: "Paper Forms Required",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
  },

  'australian-rental-ecosystem': {
    title: "Australian Rental Ecosystem",
    subtitle: "Connecting Local Renters and Operators Across the Nation",
    tag: "National Network",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "A dedicated Australian marketplace that supports local automotive businesses while giving customers better value, choice, and transparency.",
    overview:
      "By keeping rental revenue within the Australian economy, HireCar Marketplace strengthens regional tourism, supports local automotive mechanical jobs, and provides an independent alternative to foreign aggregators.",
    problemSolved: "Offshoring of Australian car hire profits and disconnection from local community needs.",
    whoItsFor: "Australian consumers who value supporting local business and keeping commerce onshore.",
    bullets: [
      "100% Australian owned, operated, and supported by local customer teams",
      "Direct economic support for over 500 family and independent fleet owners",
      "Seamless alignment with Australian Consumer Law and Fair Trading regulations",
      "Continuous reinvestment in local automotive software technology and innovation",
    ],
    features: [
      { title: "100% Australian Owned", desc: "Built and operated in Australia with local engineering and support teams." },
      { title: "Supporting Local Commerce", desc: "Every dollar spent supports Australian fleet owners and automotive jobs." },
      { title: "Full Compliance Standards", desc: "Strict adherence to state transport, road safety, and fair trading laws." },
      { title: "National Tourism Partner", desc: "Promoting regional travel across the Outback, coasts, and alpine regions." },
    ],
    stat1: "100%", stat1Label: "Australian Owned",
    stat2: "500+", stat2Label: "Local Operators Supported",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
  },
};

// MEX CMMS core details
const mexDetails = {
  'mex-overview': {
    title: 'MEX Maintenance Software Overview',
    subtitle: "Australia's #1 Computerized Maintenance Management System (CMMS)",
    tag: 'Enterprise CMMS',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'MEX is the trusted maintenance management software designed to track assets, schedule preventative work, manage spare parts inventory, and eliminate costly unexpected equipment downtime across mining, manufacturing, fleet, and public facilities.',
    overview:
      'Used by over 12,000 maintenance professionals globally and trusted by Australian tier-1 operators, MEX CMMS centralizes work orders, historical breakdowns, asset hierarchies, statutory certifications, and spare parts requisition into one reliable platform.',
    problemSolved:
      'Unplanned production downtime, paper-based work order chaos, missing spare parts during emergencies, and non-compliance with statutory safety audits.',
    whoItsFor:
      'Maintenance managers, reliability engineers, asset planners, plant directors, and mechanical tradespeople across heavy industries.',
    bullets: [
      'Comprehensive asset register with parent-child hierarchies, full repair history, and warranty tracking',
      'Automated preventive maintenance (PM) scheduling by calendar intervals, run hours, or odometer units',
      'Customizable KPI dashboards, compliance reports, and exportable audit logs',
      'Unified work order workflow from request submission to trade sign-off',
    ],
    features: [
      { title: 'Asset Hierarchy Tracking', desc: 'Organize plants, lines, equipment, and sub-assemblies in structured parent-child trees.' },
      { title: 'Preventive Maintenance Scheduling', desc: 'Schedule services automatically based on operating hours, calendar cycles, or condition triggers.' },
      { title: 'Digital Work Order Dispatch', desc: 'Assign jobs to tradespeople with safety checklists, required parts, and time estimates.' },
      { title: 'Statutory Safety Compliance', desc: 'Maintain complete audit trails for ISO 55000 and workplace safety certifications.' },
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    stat1: '99.2%',
    stat1Label: 'Planned Maintenance Compliance',
    stat2: '40%',
    stat2Label: 'Reduced Emergency Breakdowns',
    stat3: '12,000+',
    stat3Label: 'Users Globally',
    stat4: '30+ Years',
    stat4Label: 'Industry Proven',
  },
  'mex-apps': {
    title: 'MEX Mobile Apps',
    subtitle: 'Powerful Field Maintenance for iOS, Android & Rugged Scanners',
    tag: 'Mobile & Offline',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Empower your field technicians and tradespeople to manage jobs, inspect equipment, scan barcodes, and log parts usage on-site with zero paper and full offline sync.',
    overview:
      'MEX Mobile puts the full power of your CMMS onto tablets and smartphones. Technicians working in remote underground mine shafts, processing basements, or remote transport depots continue working without Wi-Fi, syncing instantly when back in range.',
    problemSolved:
      'Technicians having to return to desktop computers to log work orders, handwritten paperwork errors, and delayed job sign-offs.',
    whoItsFor:
      'Field service technicians, mobile fitters, electricians, and facility maintenance trades.',
    bullets: [
      'Offline functionality for underground mines, remote outback sites, and ship holds',
      'Integrated barcode and QR code scanner for instant asset and spare part retrieval',
      'Direct photo attachment with markup tools to illustrate damage and completed repairs',
      'Digital signature capture for trade approvals, customer permits, and work clearances',
    ],
    features: [
      { title: 'True Offline Operation', desc: 'View job cards, safety permits, and manuals without internet connection.' },
      { title: 'Barcode Asset Scanning', desc: 'Scan equipment QR codes to pull up live repair history on the spot.' },
      { title: 'Photo Damage Capture', desc: 'Photograph worn gears or oil leaks with arrow markups before and after repairs.' },
      { title: 'Digital Signature Sign-off', desc: 'Sign off completed jobs with electronic signatures on touchscreens.' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Offline Sync Support',
    stat2: '55%',
    stat2Label: 'Faster Job Sign-offs',
    stat3: 'iOS & Android',
    stat3Label: 'Cross-Platform Ready',
    stat4: 'Zero',
    stat4Label: 'Lost Paper Job Sheets',
  },
  services: {
    title: 'MEX Professional Services',
    subtitle: 'Local Australian Support, Cloud Hosting & Expert Implementation',
    tag: 'Services & Support',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Backed by 30+ years of maintenance engineering know-how, our Brisbane-based support and consulting teams ensure seamless implementation and high adoption.',
    overview:
      'Our dedicated team of Australian maintenance engineers guides you through data migration, staff training, process auditing, and cloud hosting setup to guarantee maximum ROI.',
    problemSolved:
      'Failed software adoptions, disorganized historical legacy data, and slow overseas vendor response times.',
    whoItsFor:
      'Operations executives and IT managers implementing an enterprise CMMS platform.',
    bullets: [
      'Dedicated local Australian phone and email support with rapid response SLAs',
      'Turnkey data migration from legacy spreadsheets, SAP, Maximo, or older CMMS platforms',
      'Tailored on-site or virtual training for technicians, storepersons, and system administrators',
      'Secure, high-speed Australian cloud hosting with automated daily backups and 99.9% uptime',
    ],
    features: [
      { title: 'Australian Engineering Support', desc: 'Speak directly with qualified Brisbane-based CMMS specialists.' },
      { title: 'Legacy Data Migration', desc: 'Cleanse and import asset trees, part catalogs, and supplier databases.' },
      { title: 'Role-Based Staff Training', desc: 'Customized training sessions for trades, supervisors, and management.' },
      { title: 'Secure Australian Cloud', desc: 'Tier-3 data center hosting with high-grade encryption and redundancy.' },
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    stat1: '< 15min',
    stat1Label: 'Average Support Response Time',
    stat2: '30+ Years',
    stat2Label: 'Industry Experience',
  },
  integrations: {
    title: 'Enterprise Integrations',
    subtitle: 'Connect MEX to Your Core ERP, Accounting, and SCADA Systems',
    tag: 'Data Connectivity',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Break down data silos. MEX integrates cleanly with enterprise ERPs, financial tools, and telemetry hardware to keep inventory, purchase orders, and run hours in lockstep.',
    overview:
      'Connect maintenance directly with corporate finance and plant control systems. Seamlessly pass work order costs to ERPs, trigger maintenance from SCADA meters, and sync inventory with accounting tools.',
    problemSolved:
      'Manual double data entry between maintenance and finance, delayed invoice approvals, and out-of-sync inventory levels.',
    whoItsFor:
      'Enterprise systems architects, IT directors, and finance teams.',
    bullets: [
      'Pre-built connectors for SAP, Xero, MYOB, Oracle NetSuite, and Microsoft Dynamics',
      'Robust REST API and webhooks for custom in-house application synchronization',
      'Automatic sync of purchase orders, stock reorders, and invoice reconciliation',
      'IoT and SCADA meter imports for real-time vibration, temperature, and run-hour readings',
    ],
    features: [
      { title: 'ERP Financial Connectors', desc: 'Sync work order expenses directly into SAP, NetSuite, and Microsoft Dynamics.' },
      { title: 'REST API & Webhooks', desc: 'Build real-time integrations with internal software and custom portals.' },
      { title: 'SCADA & IoT Meter Imports', desc: 'Trigger service orders automatically when vibration or temperature spikes.' },
      { title: 'Automated Purchase Invoicing', desc: 'Send approved purchase orders straight to accounting without paper.' },
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    stat1: '50+',
    stat1Label: 'Supported Connectors',
    stat2: '0',
    stat2Label: 'Double Data Entry',
  },
  'mex-engineering': {
    title: 'MEX Engineering Solutions',
    subtitle: 'Customized Reliability Engineering & Data Auditing',
    tag: 'Consulting',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Our team of seasoned reliability engineers helps clients optimize asset hierarchies, refine preventative maintenance triggers, and achieve ISO 55000 compliance.',
    overview:
      'Turn reactive maintenance into predictive reliability. Our certified engineers audit your plant assets, structure maintenance strategies, and train your planners in world-class reliability practices.',
    problemSolved:
      'Wasteful over-maintenance of non-critical assets, unexpected failures of bottleneck machines, and disorganized asset registers.',
    whoItsFor:
      'Plant operations directors, reliability teams, and asset portfolio managers.',
    bullets: [
      'Asset hierarchy structuring and criticality ranking workshops',
      'Failure Modes and Effects Analysis (FMEA) alignment in MEX',
      'Preventative Maintenance Optimization (PMO) to eliminate wasteful inspections',
      'Compliance and statutory audit preparation across hazardous facilities',
    ],
    features: [
      { title: 'Asset Criticality Ranking', desc: 'Identify high-risk machines and focus maintenance spend where it matters most.' },
      { title: 'FMEA Reliability Modeling', desc: 'Anticipate failure modes and configure targeted preventative countermeasures.' },
      { title: 'PM Optimization (PMO)', desc: 'Cut up to 25% of wasteful routine inspections without increasing breakdown risk.' },
      { title: 'ISO 55000 Audit Prep', desc: 'Align your documentation and procedures with international asset standards.' },
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stat1: 'ISO 55000',
    stat1Label: 'Asset Standard Compliance',
    stat2: '25%',
    stat2Label: 'Direct Maintenance Savings',
  },
  'inventory-management': {
    title: 'Inventory & Stores Management',
    subtitle: 'Real-Time Spares Tracking to Prevent Costly Stockouts',
    tag: 'Inventory & Parts',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Ensure the right replacement parts are on hand before machines stop. Track bin locations, minimum reorder thresholds, catalog costs, and vendor lead times across warehouses.',
    overview:
      'Prevent emergency overnight freight costs and production halts. MEX Inventory gives storepersons and planners complete visibility over spare parts stock, auto-generating purchase orders before critical supplies run out.',
    problemSolved:
      'Technicians opening store bins to find critical bearings missing, excess stock tying up working capital, and untracked parts shrinkage.',
    whoItsFor:
      'Storepersons, inventory controllers, procurement officers, and maintenance planners.',
    bullets: [
      'Automated purchase order creation when items reach minimum stock safety limits',
      'Multi-warehouse and consignment inventory tracking with bin & aisle mapping',
      'Direct parts reservation on work orders to avoid unexpected parts shortages',
      'Barcode and QR generation for rapid goods receipts, stocktakes, and issues',
    ],
    features: [
      { title: 'Minimum Safety Stock Triggers', desc: 'Trigger reorders automatically when shelf stock reaches threshold.' },
      { title: 'Bin & Aisle Location Mapping', desc: 'Find replacement valves and gaskets in seconds with visual store mapping.' },
      { title: 'Work Order Parts Reservation', desc: 'Lock parts to upcoming planned jobs so other trades cannot use them.' },
      { title: 'Barcode Stocktake Scanner', desc: 'Perform fast digital store audits with handheld mobile barcode scanners.' },
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    stat1: '98.5%',
    stat1Label: 'Stock Record Accuracy',
    stat2: '30%',
    stat2Label: 'Inventory Carrying Cost Reduction',
  },
  'prestart-checklist': {
    title: 'Prestart Checklists',
    subtitle: 'Mobile, Paper-Free Equipment Prestarts for Front-line Safety',
    tag: 'Safety & Compliance',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Equip operators and drivers to complete mandatory pre-operational equipment checks directly on their phone or tablet before starting shift machinery.',
    overview:
      'Ensure every forklift, haul truck, excavator, and production press is certified safe before starting shifts. Digital prestarts create instant work orders if safety faults are detected, locking unsafe machines immediately.',
    problemSolved:
      'Ignored paper prestart checklists, unrecorded machine damage, and operating hazardous equipment without supervisor knowledge.',
    whoItsFor:
      'Machinery operators, health & safety supervisors, transport drivers, and depot managers.',
    bullets: [
      'Configurable digital checklists with pass/fail gates and mandatory photo proofs',
      'Automatic work order generation whenever a critical safety check fails',
      'Instant supervisor alerts and lockout flags preventing unsafe equipment use',
      'Tamper-proof time and GPS stamps for regulatory safety audit defense',
    ],
    features: [
      { title: 'Digital Pass / Fail Gates', desc: 'Require mandatory checks on brakes, tires, lights, and fluids before shift start.' },
      { title: 'Instant Defect Work Orders', desc: 'Automatically generate high-priority work orders when safety items fail.' },
      { title: 'Unsafe Lockout Warnings', desc: 'Prevent equipment operation until authorized mechanic sign-off is completed.' },
      { title: 'Timestamped Audit Trail', desc: 'Immutable records protecting management during statutory workplace safety audits.' },
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Paperless Compliance',
    stat2: '0',
    stat2Label: 'Unchecked Shift Starts',
  },
  'work-request-management': {
    title: 'Work Request Management',
    subtitle: 'Centralized Request Portal for Entire Organizations',
    tag: 'Workflows',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Allow facility occupants, machine operators, and staff to log maintenance requests in seconds without requiring full CMMS licenses.',
    overview:
      'Give every staff member a clean portal to report strange machine noises, facility leaks, or lighting issues. Maintenance supervisors review, prioritize, and convert requests to work orders with one click.',
    problemSolved:
      'Verbal hallway requests that get forgotten, duplicate reporting of the same fault, and lack of feedback to requestors.',
    whoItsFor:
      'Machine operators, tenant staff, department heads, and maintenance triage supervisors.',
    bullets: [
      'Simple web portal accessible to all company employees with no training needed',
      'Automated duplicate request detection preventing redundant work tickets',
      'Status email alerts informing the requestor when jobs are accepted, scheduled, and finished',
      'Prioritization triage queue for maintenance supervisors to approve and convert requests to work orders',
    ],
    features: [
      { title: 'Zero-Training Portal', desc: 'Clean interface allowing anyone to submit a maintenance request in seconds.' },
      { title: 'Duplicate Fault Filter', desc: 'Smart warnings prevent multiple operators logging the same conveyor breakdown.' },
      { title: 'Automated Status Alerts', desc: 'Keep requestors updated as tickets progress from received to resolved.' },
      { title: 'Triage & Approval Queue', desc: 'Supervisors approve, reject, or bundle requests into scheduled work orders.' },
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    stat1: '3x',
    stat1Label: 'Faster Request-to-Work Conversion',
    stat2: '100%',
    stat2Label: 'Request Visibility',
  },
  'multi-site-management': {
    title: 'Multi-Site Management',
    subtitle: 'Centralized Governance Across Regional and Global Locations',
    tag: 'Enterprise Scale',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Oversee multiple factories, branches, ports, or mines from a single unified MEX database while maintaining granular site-level security.',
    overview:
      'Scale your asset management nationwide or globally. Corporate leaders compare site KPIs and standardize maintenance plans, while regional branches manage their own stores and contractors independently.',
    problemSolved:
      'Fragmented software platforms across branches, inability to compare maintenance costs across sites, and lack of inventory sharing.',
    whoItsFor:
      'Enterprise maintenance directors, group operations executives, and corporate procurement heads.',
    bullets: [
      'Site-specific asset trees, inventory stores, and contractor access controls',
      'Corporate roll-up reporting comparing uptime, spend, and compliance across branches',
      'Inter-site spare parts transfer requests and visibility into regional inventory',
      'Standardized maintenance job plans deployed across all national facilities',
    ],
    features: [
      { title: 'Independent Site Vaults', desc: 'Maintain separate asset trees and staff logins per plant or depot.' },
      { title: 'Corporate Roll-Up KPI Deck', desc: 'Benchmark maintenance costs, downtime hours, and PM compliance across all facilities.' },
      { title: 'Inter-Branch Stock Transfers', desc: 'Borrow critical spare parts from nearby sister plants to avert production shutdowns.' },
      { title: 'Standardized PM Templates', desc: 'Deploy best-practice maintenance routines across all locations with one click.' },
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    stat1: 'Unlimited',
    stat1Label: 'Site Scalability',
    stat2: 'Global',
    stat2Label: 'Unified Dashboard',
  },
  'admin-control-centre': {
    title: 'Admin Control Centre',
    subtitle: 'Granular Role-Based Security and System Governance',
    tag: 'Security & Admin',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Configure fields, user roles, security groups, approval thresholds, and detailed audit trails in one centralized control center.',
    overview:
      'Take total control of your enterprise maintenance security. Ensure trades only see their assigned work, configure mandatory sign-off fields, enforce approval limits, and integrate corporate Single Sign-On (SSO).',
    problemSolved:
      'Unauthorized budget approvals, accidental deletion of critical asset records, and security audit non-compliance.',
    whoItsFor:
      'CMMS system administrators, IT compliance directors, and security officers.',
    bullets: [
      'Role-based access control (RBAC) customized down to individual screen tabs and fields',
      'Audit log tracking every modification, date stamp, and user signature',
      'Custom fields, mandatory input rules, and tailored terminology per department',
      'Single Sign-On (SSO) integration via SAML, Azure AD, and Google Workspace',
    ],
    features: [
      { title: 'Granular Screen Security', desc: 'Control who can edit, view, or approve data at the tab, button, and field level.' },
      { title: 'Full Audit Trail History', desc: 'Track every single data edit, approval signature, and date stamp.' },
      { title: 'Single Sign-On (SSO)', desc: 'Integrate seamlessly with Azure AD, Okta, and Google Workspace for secure employee access.' },
      { title: 'Financial Approval Tiers', desc: 'Enforce dual authorization on high-value purchase orders and contracts.' },
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    stat1: 'ISO 27001',
    stat1Label: 'Security Standard',
    stat2: 'SSO',
    stat2Label: 'Enterprise Ready',
  },
  'ai-insights-reporting': {
    title: 'AI Insights & Reporting',
    subtitle: 'Natural Language Analytics and Predictive Reliability Insights',
    tag: 'AI & Analytics',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Ask questions about maintenance spend, recurring failure causes, and technician hours in plain English and receive instant graphical charts and predictive models.',
    overview:
      'Harness artificial intelligence to extract actionable reliability wisdom. Ask your maintenance database questions in natural English and let the system model failure probability and suggest optimal maintenance frequencies.',
    problemSolved:
      'Spending days compiling monthly spreadsheet reports, missing hidden root failure patterns, and struggling with complex SQL database queries.',
    whoItsFor:
      'Asset managers, reliability engineers, financial analysts, and plant directors.',
    bullets: [
      'Query your maintenance database in plain English (e.g., "Show me top 5 failure causes on line 3")',
      'Automated MTBF (Mean Time Between Failures) and MTTR (Mean Time to Repair) calculations',
      'Over 140 pre-configured standard reports and an intuitive drag-and-drop report builder',
      'Scheduled email reports sent automatically to plant directors and auditors',
    ],
    features: [
      { title: 'Natural Language Queries', desc: 'Ask questions in conversational English and get instant charts and data summaries.' },
      { title: 'Automated MTBF & MTTR', desc: 'Track Mean Time Between Failures and Mean Time to Repair benchmarks automatically.' },
      { title: '140+ Built-in Reports', desc: 'Access comprehensive reports covering asset downtime, labor spend, and stock turnover.' },
      { title: 'Predictive Failure Modeling', desc: 'Anticipate equipment breakdown probabilities before catastrophic failure occurs.' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    stat1: '140+',
    stat1Label: 'Standard Built-in Reports',
    stat2: 'Real-time',
    stat2Label: 'Natural Language Insights',
  },
  inspections: {
    title: 'Inspections Management',
    subtitle: 'Automated Recurring Safety, Statutory and Asset Inspections',
    tag: 'Audits & Quality',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Set up automated inspection intervals to ensure critical statutory pressure vessels, fire systems, electrical gear, and lifting equipment are always certified.',
    overview:
      'Never miss a statutory safety audit. MEX Inspections automates recurring compliance rounds for boilers, cranes, fire systems, and high-voltage gear with strict numeric tolerance checking and certificate generation.',
    problemSolved:
      'Missed statutory inspections resulting in government shutdown notices, invalid insurance policies, and workplace safety hazards.',
    whoItsFor:
      'Compliance officers, licensed inspectors, quality auditors, and safety coordinators.',
    bullets: [
      'Flexible inspection checklist designer with numeric readings, tolerance limits, and pass/fail criteria',
      'Automatic work order triggering when readings fall outside acceptable safety thresholds',
      'Historical inspection logs ready for state workplace health and safety (WHS) inspectors',
      'Batch scheduling of annual and quarterly statutory inspections',
    ],
    features: [
      { title: 'Numeric Tolerance Checking', desc: 'Flag out-of-spec pressure, temperature, or wear measurements instantly.' },
      { title: 'Automatic Remedial Orders', desc: 'Trigger repair work orders when any inspection point fails compliance.' },
      { title: 'Statutory Certification Log', desc: 'Maintain complete certificate histories for insurance and workplace safety regulators.' },
      { title: 'Batch Schedule Generator', desc: 'Generate recurring quarterly and annual inspection rounds in seconds.' },
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stat1: '100%',
    stat1Label: 'Statutory Compliance',
    stat2: 'Zero',
    stat2Label: 'Overlooked Safety Audits',
  },
  'ai-maintenance-scheduling': {
    title: 'AI Maintenance Scheduling',
    subtitle: 'Smart Workload Balancing & Automated Dispatching',
    tag: 'AI Automation',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#dc2626',
    category: 'MEX Maintenance Software',
    description:
      'Use intelligent scheduling algorithms to balance trade availability, spare part arrival dates, and plant shutdown windows automatically.',
    overview:
      'Maximize technician productivity. The AI scheduler evaluates trade skills, available shutdown windows, and spare parts delivery dates to generate the optimal daily and weekly work schedule.',
    problemSolved:
      'Assigning jobs to technicians who lack required certifications, dispatching work before parts arrive, and chaotic plant shutdown overruns.',
    whoItsFor:
      'Maintenance planners, schedulers, trade supervisors, and shutdown coordinators.',
    bullets: [
      'Gantt chart visual schedule board with drag-and-drop work order reassignments',
      'Automated trade skill and certification matching preventing uncertified job dispatch',
      'Parts-dependent scheduling locking work orders until all required components are in stores',
      'Shutdown planning module coordinating hundreds of contractor tasks with critical path analysis',
    ],
    features: [
      { title: 'Gantt Schedule Board', desc: 'Visual timeline with drag-and-drop job balancing across trades and shifts.' },
      { title: 'Parts Dependency Locks', desc: 'Prevent scheduling jobs until all spare parts have arrived in the warehouse.' },
      { title: 'Skill & Certification Verification', desc: 'Ensure high-voltage or confined space tasks are assigned to qualified trades.' },
      { title: 'Critical Path Shutdown Planner', desc: 'Coordinate multi-trade plant shutdowns to minimize lost production time.' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    stat1: '25%',
    stat1Label: 'Technician Utilization Boost',
    stat2: '100%',
    stat2Label: 'Parts Availability Match',
  },
};

// Combine all product details into one unified export
export const solutionDetails = {
  ...hireCarDetails,
  ...hireCarExtraDetails,
  ...chmDetails,
  ...chmExtraDetails,
  ...fleetTrackingDetails,
  ...fleetTrackingExtraDetails,
  ...mexDetails,
  ...wrmsDetails,
};

// Helper function to find details by slug (with fallback and aliases)
export function getSolutionDetail(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  
  // Direct match
  if (solutionDetails[normalized]) {
    const item = solutionDetails[normalized];
    if (item.redirect && solutionDetails[item.redirect]) {
      return solutionDetails[item.redirect];
    }
    return item;
  }

  // Common aliases & variations
  const aliasMap = {
    // HireCar
    'hirecar': 'hire-car-marketplace',
    'hirecar-marketplace': 'hire-car-marketplace',
    'hire-car': 'hire-car-marketplace',
    'easy-booking': 'easy-booking',
    'easy-vehicle-discovery': 'easy-vehicle-discovery',
    'flexible-rental-options': 'flexible-rental-options',
    'rental-pricing': 'pricing',
    'fleet-operators': 'vendors',
    'about-hirecar': 'about',

    // CHM
    'chm-overview': 'chm',
    'car-hire-manager': 'chm',
    'dashboard': 'chm-dashboard',
    'recurring': 'recurring-booking',
    'calendar': 'calendar-scheduling',
    'insights': 'financial-insights',
    'expenses': 'financials-expenses',
    'drivers': 'driver-management',
    'tolls': 'toll-management',
    'rego': 'rego-insurance',

    // Fleet Tracking
    'fleet': 'australia-fleet-tracking',
    'fleet-tracking': 'australia-fleet-tracking',
    'techtonika-autolink': 'australia-fleet-tracking',
    'australian-fleet-tracking': 'australia-fleet-tracking',
    'faster-response-to-incidents': 'faster-response-incidents',
    'more-control-over-assets': 'more-control-assets',

    // WRMS Pro
    'wrms': 'wrms-pro',
    'wrms-repair': 'wrms-pro',
    'wrms-pro': 'wrms-pro',
    'wrms-pro-overview': 'wrms-pro-overview',
    'inspections': 'workshop-inspections',
    'scheduling': 'workshop-scheduling',
    'parts-inventory': 'parts-and-inventory',
    'vehicle-management': 'workshop-vehicle-management',
    'more-efficient-workshop-operations': 'efficient-workshop-operations',
    'technician-app': 'technician-app',
    'workshop-services': 'workshop-services',
    'workshop-integrations': 'workshop-integrations',
    'multi-site': 'multi-site-management',
    'admin-control': 'admin-control-centre',
    'analytics-invoicing': 'workshop-analytics-invoicing',
    'customer-crm': 'workshop-customer-management',
    'bay-scheduling': 'workshop-scheduling',

    // MEX Product section migration to WRMS Pro
    'mex': 'wrms-pro',
    'mex-cmms': 'wrms-pro',
    'mex-overview': 'wrms-pro-overview',
    'mex-apps': 'technician-app',
    'mex-services': 'workshop-services',
    'mex-integrations': 'workshop-integrations',
  };

  if (aliasMap[normalized] && solutionDetails[aliasMap[normalized]]) {
    const item = solutionDetails[aliasMap[normalized]];
    if (item.redirect && solutionDetails[item.redirect]) {
      return solutionDetails[item.redirect];
    }
    return item;
  }

  // Exact match without hyphens
  const stripped = normalized.replace(/-/g, '');
  for (const [key, value] of Object.entries(solutionDetails)) {
    if (key.replace(/-/g, '') === stripped) {
      if (value.redirect && solutionDetails[value.redirect]) {
        return solutionDetails[value.redirect];
      }
      return value;
    }
  }

  // Fuzzy match on slug key
  for (const [key, value] of Object.entries(solutionDetails)) {
    if (key.includes(normalized) || normalized.includes(key)) {
      if (value.redirect && solutionDetails[value.redirect]) {
        return solutionDetails[value.redirect];
      }
      return value;
    }
  }

  return null;
}

