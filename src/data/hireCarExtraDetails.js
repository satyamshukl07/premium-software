// Dedicated, unique card details for HireCar Marketplace cards, vehicle categories, locations, and nested features
export const hireCarExtraDetails = {
  // ==========================================
  // CORE CARDS CALLED OUT BY USER
  // ==========================================
  'easy-booking': {
    title: "Easy Booking & Reservation Flow",
    subtitle: "Fast, Frictionless 3-Step Vehicle Reservations With Zero Paperwork",
    tag: "Instant Reservation",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Find and reserve your ideal rental vehicle in less than 90 seconds with transparent upfront rates, digital identity check, and immediate confirmation.",
    overview:
      "Traditional car rental desks subject travelers to exhausting 30-minute queues, paper clipboards, and high-pressure sales pitches for insurance excess waivers. HireCar Marketplace redefines the reservation process with an intuitive, mobile-first booking engine. Enter your pickup suburb or airport terminal, compare verified real-time inventories, select your insurance tier, and reserve with instant digital agreement generation.",
    problemSolved:
      "Long airport desk queues, confusing multi-step reservation forms, surprise counter add-ons, and uncertainty over whether a reserved car is actually confirmed.",
    whoItsFor:
      "Busy corporate travelers needing swift airport departures, holidaying families seeking peace of mind, and anyone tired of slow counter bureaucracy.",
    howItWorks: [
      { step: "01", title: "Instant Search", desc: "Select pickup date, return time, and your preferred Australian airport or local city depot." },
      { step: "02", title: "Choose & Verify", desc: "Pick your guaranteed vehicle model, review itemized pricing, and upload driver ID via secure OCR." },
      { step: "03", title: "Collect Keys & Go", desc: "Receive immediate booking confirmation, depot directions, and key handover contact details." },
    ],
    bullets: [
      "Lightning-fast digital reservation completed in under 90 seconds from any mobile device",
      "Instant driver licence verification with secure OCR—no manual photocopies at the counter",
      "Real-time calendar synchronization with depot inventories prevents double-booking errors",
      "Transparent breakdown of daily rental rate, GST, toll pass access, and security bond amount",
    ],
    features: [
      { title: "3-Tap Quick Reserve", desc: "Returning customers reserve their favorite vehicle class with stored profile details in three taps." },
      { title: "Mobile Keyless / Express Pickup", desc: "Skip the counter queue entirely at participating airport and metro depot locations." },
      { title: "Automated SMS & Email Confirmations", desc: "Receive instant booking vouchers, tax receipts, and Google/Apple Wallet pass integration." },
      { title: "Flexible Modification Engine", desc: "Update pickup times, flight arrival numbers, or duration without administrative penalty fees." },
    ],
    stat1: "< 90s",
    stat1Label: "Average Booking Time",
    stat2: "100%",
    stat2Label: "Instant Confirmation",
    stat3: "0",
    stat3Label: "Paper Contracts Required",
    stat4: "24/7",
    stat4Label: "Self-Service Access",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "No high-pressure counter sales tactics or surprise insurance waivers",
      "Direct integration with Australian flight schedules for delayed arrival holds",
      "Instant digital tax invoices suitable for business travel expense claims",
      "Complete visibility over fuel policy, mileage caps, and bond release terms",
    ],
  },

  'flexible-rental-options': {
    title: "Flexible Rental Options",
    subtitle: "Tailored Daily, Weekly, and Monthly Car Hire Terms to Fit Your Schedule",
    tag: "Rental Flexibility",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "From single-day metro trips and weekend coastal getaways to multi-month corporate fleet hires and insurance replacement vehicles.",
    overview:
      "Travel plans evolve, business deadlines shift, and projects require adaptable transport. HireCar Marketplace eliminates the rigid booking rules of multinational rental conglomerates. Enjoy customizable hire durations, scalable mileage allowances, multiple pre-approved drivers, and flexible cancellation terms that give you complete peace of mind.",
    problemSolved:
      "Excessive early return penalties, extortionate extension fees, rigid 24-hour minimum blocks, and inability to adjust rental terms when flight or project schedules change.",
    whoItsFor:
      "Contractors on variable project durations, tourists embarking on extended Australian road trips, businesses needing seasonal fleet scaling, and drivers awaiting vehicle repairs.",
    howItWorks: [
      { step: "01", title: "Select Rental Duration", desc: "Choose daily, weekend, weekly discounted, or monthly corporate subscription terms." },
      { step: "02", title: "Tailor Add-Ons", desc: "Include additional verified drivers, child safety capsules, GPS navigation, or unlimited mileage." },
      { step: "03", title: "Extend or Return Early", desc: "Adjust your active hire directly with the local operator with prorated daily rates." },
    ],
    bullets: [
      "Discounted sliding-scale pricing for extended weekly and monthly long-term rentals",
      "Zero punitive cancellation fees up to 24 hours prior to scheduled pickup",
      "Complimentary second driver additions for road-trip travelers and corporate colleagues",
      "Seamless digital extensions with automatic prorated billing and bond rollover",
    ],
    features: [
      { title: "Prorated Long-Term Leases", desc: "Significant volume discounts on 30+ day rentals with scheduled monthly invoicing." },
      { title: "One-Way Transit Corridors", desc: "Pick up in Sydney and drop off in Melbourne or Brisbane at pre-arranged partner depots." },
      { title: "Insurance Replacement Hire", desc: "Direct billing to automotive insurance providers while personal vehicles undergo smash repairs." },
      { title: "Custom Mileage Packages", desc: "Choose between standard 200 km/day daily allowances or unlimited interstate touring packages." },
    ],
    stat1: "Up to 35%",
    stat1Label: "Weekly & Monthly Savings",
    stat2: "24 hrs",
    stat2Label: "Free Cancellation Window",
    stat3: "1 - 365",
    stat3Label: "Days Flexible Duration",
    stat4: "$0",
    stat4Label: "Early Return Admin Penalty",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Easily extend active rentals directly via phone or digital dashboard",
      "Multiple driver insurance coverage included on corporate business rates",
      "Tailored solutions for seasonal agricultural, tourism, and mining contracts",
      "Dedicated local operator support for unexpected journey alterations",
    ],
  },

  // ==========================================
  // SINGLE CARDS FROM HIRECAR PRODUCT PAGE
  // ==========================================
  'pricing': {
    title: "Transparent Rental Pricing & Inclusions",
    subtitle: "Upfront Rates, Zero Marketplace Markups, and Clear Bond Terms",
    tag: "Clear Pricing",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Understand exactly what you pay before booking. No mandatory desk fees, no deceptive credit card surcharges, and total clarity on insurance excess tiers.",
    overview:
      "Automotive rental aggregators frequently lure drivers with unrealistically low lead prices, only to triple the final invoice with compulsory administration charges, airport access levies, and inflated premium location fees. On HireCar Marketplace, every price shown represents the complete, drive-away cost including GST, mandatory statutory third-party cover, and transparent deposit requirements.",
    problemSolved:
      "Bill shock at the collection counter, misleading aggregator price comparisons, and disputed security deposit deductions.",
    whoItsFor:
      "Cost-conscious travelers, corporate procurement teams budgeting for travel, and anyone who values honest, straightforward pricing.",
    howItWorks: [
      { step: "01", title: "Itemized Quote", desc: "View base daily rate, GST, mandatory licensing fees, and toll pass integration in one total figure." },
      { step: "02", title: "Excess Tier Choice", desc: "Select standard liability or optional low-excess reduction cover clearly explained in plain English." },
      { step: "03", title: "Bond Pre-Auth Only", desc: "Security bonds are held as temporary pre-authorizations and released promptly post-rental." },
    ],
    bullets: [
      "100% transparent drive-away prices with all mandatory Australian taxes and airport charges included",
      "Security deposits held as pre-authorizations on credit/debit cards, never captured as permanent debits",
      "Clear excess reduction tiers with zero ambiguous exclusions or hidden deductibles",
      "No 3% to 5% counter credit card processing fees commonly charged by multinational chains",
    ],
    features: [
      { title: "Drive-Away Total Guarantee", desc: "The price quoted at checkout is the exact total charged upon collection." },
      { title: "Standard vs Zero Excess", desc: "Choose the protection level that fits your comfort and budget." },
      { title: "Prompt Bond Release Timers", desc: "Security holds automatically released within 24 to 48 hours following inspection." },
      { title: "Automated GST Tax Invoices", desc: "Download compliant Australian tax invoices immediately upon booking confirmation." },
    ],
    stat1: "$0",
    stat1Label: "Hidden Counter Fees",
    stat2: "100%",
    stat2Label: "Upfront Price Accuracy",
    stat3: "From $45",
    stat3Label: "Daily Rates Available",
    stat4: "< 48h",
    stat4Label: "Security Bond Release",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "True side-by-side price comparison across multiple verified Australian operators",
      "No bait-and-switch daily rates that inflate at pickup",
      "Fair fuel policies (full-to-full) so you only pay for fuel you consume",
      "Clear guidelines for Linkt and EastLink toll road billing",
    ],
  },
  'rental-pricing': {
    redirect: 'pricing'
  },

  'vendors': {
    title: "Rental Fleet Operators & Vendors Network",
    subtitle: "Grow Your Independent Car Hire Business With Direct Renter Bookings",
    tag: "Operator Network",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Join Australia's fastest-growing independent rental network. List your fleet, receive qualified booking demand, and maintain 100% direct control over rates and terms.",
    overview:
      "Independent Australian car hire depots often struggle to compete with multinational marketing budgets or are forced to surrender 20% to 30% of their revenue to international aggregator conglomerates. HireCar Marketplace levels the playing field by providing a dedicated digital storefront, automated customer KYC driver verification, integrated toll management, and direct booking payouts.",
    problemSolved:
      "Crippling commissions paid to overseas aggregators, slow payment settlements, unverified high-risk drivers, and idle fleet sitting on depot lots.",
    whoItsFor:
      "Independent car rental operators, regional fleet depots, airport transfer companies, and commercial vehicle leasing businesses across Australia.",
    howItWorks: [
      { step: "01", title: "Operator Onboarding", desc: "Submit your ABN, commercial fleet insurance, and depot locations for verification." },
      { step: "02", title: "Fleet & Rates Setup", desc: "List vehicles, upload high-res photos, set seasonal daily rates, and establish bond policies." },
      { step: "03", title: "Receive Bookings", desc: "Accept confirmed reservations with pre-verified driver licenses and direct payment deposits." },
    ],
    bullets: [
      "Zero listing fees—only pay a modest, fair success fee per completed rental",
      "Automated optical character recognition (OCR) verification of Australian and international driver licences",
      "Direct integration with Car Hire Manager (CHM) and major fleet telematics platforms",
      "Full ownership of customer relationships and repeat corporate client accounts",
    ],
    features: [
      { title: "Custom Operator Profile", desc: "Showcase your brand, depot facilities, opening hours, and customer reviews." },
      { title: "Dynamic Fleet Pricing", desc: "Adjust rates for school holidays, major sporting events, and off-peak seasons." },
      { title: "Renter Risk Screening", desc: "Pre-screen drivers against identity verification databases and industry blacklists." },
      { title: "Direct Bank Payouts", desc: "Funds deposited directly into your Australian business account on a weekly cycle." },
    ],
    stat1: "500+",
    stat1Label: "Active Depot Locations",
    stat2: "0%",
    stat2Label: "Upfront Listing Fees",
    stat3: "100%",
    stat3Label: "ABN Verified Hosts",
    stat4: "Fast",
    stat4Label: "Direct Payouts",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Retain your independent brand identity while reaching nationwide renters",
      "Eliminate manual paperwork with digital agreements and damage inspection logs",
      "Access fleet management tools via CHM to automate toll recovery and maintenance",
      "Dedicated Australian operator support team available via phone and depot visits",
    ],
  },
  'fleet-operators': {
    redirect: 'vendors'
  },

  'about': {
    title: "About HireCar Marketplace",
    subtitle: "Championing Australia's Independent Car Rental Operators & Fair Tourism",
    tag: "Our Mission",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Learn about our mission to restore fairness, transparency, and local choice to the Australian vehicle rental industry.",
    overview:
      "HireCar Marketplace was founded on a simple conviction: car rental in Australia should be transparent, affordable, and supportive of local businesses. For decades, multinational corporations and foreign aggregator cartels have squeezed independent operators with exorbitant commissions while hitting travelers with surprise counter fees. We built a direct exchange that connects drivers with trusted local fleets with zero middleman markups.",
    problemSolved:
      "Market monopolization by foreign holding companies, deceptive pricing practices, and lack of support for regional Australian automotive businesses.",
    whoItsFor:
      "Travelers who value ethical commerce, independent operators seeking a fair marketplace, and corporate travelers requiring dependable local transport.",
    howItWorks: [
      { step: "01", title: "Local First", desc: "We partner exclusively with verified, commercially licensed Australian fleet operators." },
      { step: "02", title: "Transparent Exchange", desc: "We publish all-inclusive rates, itemized taxes, and explicit excess policies." },
      { step: "03", title: "Community Reinvestment", desc: "Profits remain in the Australian economy, supporting regional depots and automotive jobs." },
    ],
    bullets: [
      "100% Australian owned, operated, and supported from local customer offices",
      "Network spanning 500+ depot locations across capital cities and regional tourist destinations",
      "Committed to zero hidden fees, zero credit card counter surcharges, and upfront pricing",
      "Integrated ecosystem bridging consumer car hire, fleet management, and workshop servicing",
    ],
    features: [
      { title: "Australian Tourism Advocate", desc: "Promoting regional travel across the Outback, coastal corridors, and regional wine countries." },
      { title: "Strict Operator Standards", desc: "Every partner operator undergoes commercial insurance auditing and customer service checks." },
      { title: "Technological Innovation", desc: "Pioneering paperless check-ins, automated toll recovery, and real-time fleet telematics." },
      { title: "Responsive Customer Care", desc: "Local Australian telephone and online support ready to assist travelers 7 days a week." },
    ],
    stat1: "100%",
    stat1Label: "Australian Owned",
    stat2: "500+",
    stat2Label: "Depots Supported",
    stat3: "5,000+",
    stat3Label: "Verified Vehicles",
    stat4: "4.9/5",
    stat4Label: "Customer Satisfaction",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Support Australian family-owned and regional car hire businesses",
      "Experience personal hospitality and local travel advice from depot owners",
      "Enjoy transparent pricing backed by Australian Consumer Law protections",
      "Contribute to a vibrant, competitive, and fair national rental ecosystem",
    ],
  },
  'about-hirecar': {
    redirect: 'about'
  },

  // ==========================================
  // VEHICLE CATEGORIES (FROM HIRECAR PAGE)
  // ==========================================
  'sedans': {
    title: "Sedans & City Compacts",
    subtitle: "Fuel-Efficient Daily Drivers & Comfortable Metropolitan Cruisers",
    tag: "Vehicle Category",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Explore modern, fuel-efficient compacts and spacious 5-seater sedans ideal for urban business trips, airport commutes, and budget-conscious holiday travel.",
    overview:
      "Whether navigating tight inner-city parking in Sydney or cruising between Brisbane and the Gold Coast, our sedan category delivers superior fuel economy, low daily rates, and modern comfort. Models include Toyota Corolla, Hyundai i30, Kia Cerato, and Toyota Camry, all equipped with Apple CarPlay, Android Auto, and reverse cameras.",
    problemSolved:
      "High fuel expenses on extended road trips, difficult parallel parking in crowded metro centers, and excessive rental rates for basic daily transport.",
    whoItsFor:
      "Solo corporate travelers, couples on weekend getaways, and drivers needing temporary replacement cars after vehicle servicing.",
    howItWorks: [
      { step: "01", title: "Filter by Sedan/Compact", desc: "Browse verified hatchbacks and sedans available at your chosen airport or city depot." },
      { step: "02", title: "Review Vehicle Specs", desc: "Check boot capacity (fits 2-3 standard suitcases), fuel economy (from 4.5L/100km), and safety ratings." },
      { step: "03", title: "Drive Away", desc: "Collect keys from airport terminals or suburban depots with a full tank of fuel." },
    ],
    bullets: [
      "Outstanding fuel efficiency averaging 4.5L to 6.2L per 100km to keep road trip costs minimal",
      "5-star ANCAP safety ratings with autonomous emergency braking, lane assist, and 7+ airbags",
      "Spacious 5-passenger seating with ISOFIX child seat anchor points in rear rows",
      "Standard inclusions: Bluetooth connectivity, touchscreen navigation, and USB charging ports",
    ],
    features: [
      { title: "Toyota Corolla & Hyundai i30", desc: "Reliable, easy-to-park compact hatchbacks with generous boot utility." },
      { title: "Toyota Camry & Kia Cerato", desc: "Spacious mid-size sedans with expansive rear legroom and executive comfort." },
      { title: "Hybrid Efficiency Available", desc: "Ultra-efficient hybrid petrol-electric options delivering up to 900km per tank." },
      { title: "Express Airport Pickup", desc: "Convenient key collection within minutes of leaving baggage claim." },
    ],
    stat1: "4.5L/100km",
    stat1Label: "Hybrid Fuel Efficiency",
    stat2: "5 Seats",
    stat2Label: "Passenger Capacity",
    stat3: "5-Star",
    stat3Label: "ANCAP Safety Rating",
    stat4: "From $45",
    stat4Label: "Daily Starting Rate",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Lowest daily rental rates across the entire HireCar Marketplace",
      "Effortless maneuverability in congested city streets and shopping car parks",
      "High availability across all major airport depots nationwide",
      "Clean, sanitized, and late-model vehicles guaranteed upon arrival",
    ],
  },

  'suvs': {
    title: "SUVs & All-Wheel Drives",
    subtitle: "Spacious Family Wagons & Capable AWD Touring Vehicles",
    tag: "Vehicle Category",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Experience elevated ride height, generous luggage space, and all-weather traction for family holidays, coastal road trips, and scenic regional touring.",
    overview:
      "Australia's diverse landscapes call for versatile transport. Our SUV category encompasses compact crossovers like the Toyota RAV4 and Mitsubishi ASX up to full-size 7-seat family wagons like the Toyota Kluger and Mazda CX-9. With commanding road visibility, large boots that easily swallow prams and camping gear, and intelligent AWD capability, you are ready for any Australian journey.",
    problemSolved:
      "Cramped passenger seating on multi-day family trips, inadequate boot capacity for luggage, and poor ground clearance on unpaved gravel scenic roads.",
    whoItsFor:
      "Families taking holidays, road-trip enthusiasts exploring national parks, and corporate teams traveling with demonstration equipment.",
    howItWorks: [
      { step: "01", title: "Select SUV Category", desc: "Choose between compact 5-seat crossovers or spacious 7-seat family wagons." },
      { step: "02", title: "Verify Boot Dimensions", desc: "Confirm capacity for up to 4 large suitcases, golf bags, or child prams." },
      { step: "03", title: "Hit the Open Road", desc: "Enjoy confident all-weather traction on winding coastal highways and country roads." },
    ],
    bullets: [
      "Elevated driving position providing superior visibility across city traffic and open highways",
      "Generous cargo volume with 60/40 split-folding rear seats for surfboards, bikes, and bulky gear",
      "Intelligent all-wheel drive (AWD) options for superior grip in wet weather and light gravel roads",
      "Modern driver assist technology including adaptive cruise control, blind spot monitoring, and 360° cameras",
    ],
    features: [
      { title: "Toyota RAV4 & Mitsubishi Outlander", desc: "Australia's top-selling family wagons blending comfort, economy, and space." },
      { title: "7-Seat Family Options", desc: "Fold-flat third row seating accommodating up to 7 passengers in total comfort." },
      { title: "Roof Rack & Tow Bar Options", desc: "Equipped for bike racks, luggage pods, and light trailer towing upon request." },
      { title: "ISOFIX Child Restraints", desc: "Multiple tether points for secure baby capsules and booster seats." },
    ],
    stat1: "5 - 7",
    stat1Label: "Passenger Capacity",
    stat2: "580L+",
    stat2Label: "Generous Cargo Volume",
    stat3: "AWD",
    stat3Label: "All-Weather Traction",
    stat4: "5-Star",
    stat4Label: "Safety Rated",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Perfect balance of passenger luxury, luggage space, and highway comfort",
      "Safe and reassuring handling in torrential rain and regional road conditions",
      "High-spec trim levels with leather appointed seats and panoramic sunroofs available",
      "Instant availability at capital airport terminals and coastal vacation hubs",
    ],
  },

  'utes-trucks': {
    title: "4WD Commercial Utes & Mine-Spec Trays",
    subtitle: "Heavy-Duty Dual-Cab 4x4s, Steel Trays & Mining-Compliant Workhorses",
    tag: "Vehicle Category",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Rugged 4WD dual-cab utilities and commercial trays built for tough Australian jobs, mining site compliance, agricultural transport, and trade projects.",
    overview:
      "When job sites demand heavy payload capacity and true 4x4 capability, passenger cars won't cut it. Our utility fleet features legendary Australian workhorses including Toyota HiLux, Ford Ranger, and Isuzu D-MAX. Available with drop-side alloy/steel trays, lockable canopy boxes, 3.5-tonne towing hitches, and BMA/mine-spec safety equipment (roll-over bars, flashing beacons, UHF radios, and high-visibility flags).",
    problemSolved:
      "Inability to access remote mining and civil infrastructure projects, restricted towing capacities on standard rental vehicles, and damage concerns with passenger cars.",
    whoItsFor:
      "Civil engineers, trade contractors, FIFO mining personnel, agricultural workers, and 4WD touring enthusiasts requiring genuine off-highway capability.",
    howItWorks: [
      { step: "01", title: "Specify Job Requirements", desc: "Select standard dual-cab ute, trade canopy, or fully certified mine-spec configuration." },
      { step: "02", title: "Select Towing & Payload", desc: "Ensure your selected vehicle matches required trailer weight (up to 3,500kg braked capacity)." },
      { step: "03", title: "Deploy to Site", desc: "Take delivery at airport hubs or regional depot locations near major resource basins." },
    ],
    bullets: [
      "True dual-range 4x4 with low-ratio transfer case, rear differential locks, and all-terrain tires",
      "Heavy-duty 3,500kg braked towing capacity suitable for horse floats, plant trailers, and boats",
      "Mine-spec packages available: ROPS, fire extinguisher, battery isolator, reverse beeper, and flashing light",
      "Dual-cab seating for 5 adult crew members alongside expansive 1.8-metre rear cargo trays",
    ],
    features: [
      { title: "Toyota HiLux & Ford Ranger 4x4", desc: "Australia's leading dual-cab workhorses with turbo-diesel torque and high ground clearance." },
      { title: "Heavy-Duty Alloy & Steel Trays", desc: "Drop-side trays with heavy tie-down rails designed for pallets, tools, and construction materials." },
      { title: "Mine-Spec Site Compliance", desc: "Certified for tier-1 resource sites in the Pilbara, Hunter Valley, and Bowen Basin." },
      { title: "Heavy Tow Bars & Electric Brakes", desc: "Integrated electric brake controllers for safe multi-tonne trailer haulage." },
    ],
    stat1: "3,500kg",
    stat1Label: "Max Braked Towing",
    stat2: "4x4",
    stat2Label: "Dual-Range Low Ratio",
    stat3: "1 Tonne",
    stat3Label: "Payload Capacity",
    stat4: "Mine-Spec",
    stat4Label: "Site Certified Ready",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Access rugged off-road territory where passenger cars are strictly prohibited",
      "Meets strict workplace health and safety (WHS) compliance for industrial sites",
      "Flexible commercial corporate accounts with monthly billing terms",
      "Available across key regional mining gateways including Perth, Mackay, and Darwin",
    ],
  },

  'people-movers': {
    title: "People Movers & Passenger Vans",
    subtitle: "7 to 12-Seater Passenger Vans for Group Tours, Sports Clubs & Family Events",
    tag: "Vehicle Category",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Move groups together in comfort with modern 7-seater wagons, 8-seater luxury vans, and 12-seater passenger minibuses drivable on a standard car licence.",
    overview:
      "Coordinating two or three separate rental cars for a wedding party, golf tour, corporate delegation, or extended family holiday is expensive and stressful. Our people mover category brings everyone together. Featuring the Kia Carnival, Toyota Tarago, and 12-seater Toyota HiAce Commuter, these vehicles provide executive legroom, dual-zone climate control, and separate luggage compartments.",
    problemSolved:
      "Splitting groups across multiple vehicles, doubling fuel and toll expenses, and parking multiple cars at crowded venues.",
    whoItsFor:
      "Large families traveling with grandparents, school and sports club teams, corporate conference delegations, and tour groups.",
    howItWorks: [
      { step: "01", title: "Choose Seat Capacity", desc: "Select 7, 8, or 12 passenger seats based on your group size and luggage volume." },
      { step: "02", title: "Verify Licence Type", desc: "Vehicles up to 12 seats can be driven on a standard Australian Class C car driver licence." },
      { step: "03", title: "Travel Together", desc: "Enjoy unified road trips with dual sliding doors and dedicated rear passenger climate vents." },
    ],
    bullets: [
      "Drive up to 12 passengers on a standard Australian car driver licence (no heavy vehicle licence needed)",
      "Spacious interior layouts with central aisle access, reclining seats, and high-roof headroom",
      "Dual air conditioning systems with independent rear passenger fan speed and temperature controls",
      "Electric sliding passenger doors and low step-in heights for safe, easy child and senior boarding",
    ],
    features: [
      { title: "Kia Carnival (8 Seater)", desc: "Australia's benchmark multi-award winning family mover with class-leading boot space." },
      { title: "Toyota HiAce Commuter (12 Seater)", desc: "The gold standard for sports club excursions, winery tours, and airport transfers." },
      { title: "Dedicated Luggage Bays", desc: "Accommodates suitcases, strollers, and golf bags without encroaching on passenger legroom." },
      { title: "Apple CarPlay & Rear USB Ports", desc: "Keeps every passenger's smart devices charged throughout interstate road trips." },
    ],
    stat1: "7 - 12",
    stat1Label: "Passenger Capacity",
    stat2: "Class C",
    stat2Label: "Standard Car Licence",
    stat3: "Dual AC",
    stat3Label: "Zone Climate Control",
    stat4: "50%+",
    stat4Label: "Savings vs 2 Rentals",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Halve fuel, toll, and airport parking costs by consolidating into a single vehicle",
      "Eliminate the risk of group members getting separated in transit",
      "Comfortable long-distance touring with limousine-grade passenger legroom",
      "Easy collection from major airport arrival terminals nationwide",
    ],
  },

  'luxury': {
    title: "Luxury & Prestige Fleet",
    subtitle: "Executive Sedans, High-Performance Coupes & Premium Luxury SUVs",
    tag: "Vehicle Category",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Arrive in sophistication. Rent luxury vehicles from prestigious marques including Mercedes-Benz, BMW, Audi, Lexus, and Porsche for executive travel and special milestones.",
    overview:
      "When standard rental cars fail to reflect the importance of an executive client meeting, VIP airport transfer, wedding day, or luxury weekend getaway, HireCar Marketplace provides access to vetted prestige fleets. Each vehicle is maintained to concourse standards with premium leather upholstery, acoustic sound insulation, adaptive air suspension, and high-performance powertrains.",
    problemSolved:
      "Uninspired generic rental cars, poor soundproofing on long drives, and inability to access high-end prestige marques for VIP functions.",
    whoItsFor:
      "Corporate executives, visiting VIP dignitaries, couples celebrating anniversaries or weddings, and motoring enthusiasts.",
    howItWorks: [
      { step: "01", title: "Select Prestige Model", desc: "Choose from executive saloons, luxury SUVs, or high-performance touring coupes." },
      { step: "02", title: "White-Glove Verification", desc: "Complete express digital KYC and pre-authorized security bond verification." },
      { step: "03", title: "VIP Handover", desc: "Enjoy terminal curbside key delivery or discreet depot collection with full vehicle orientation." },
    ],
    bullets: [
      "Pristine luxury fleet featuring Mercedes-Benz C/E-Class, BMW 3/5 Series, and Audi Q7/Q8",
      "Sumptuous handcrafted leather interiors, ambient LED lighting, and Burmester/Harman Kardon premium audio",
      "Discrete, unbranded vehicles with zero advertising decals for executive corporate privacy",
      "Complimentary airport terminal meet-and-greet key handover for seamless arrivals",
    ],
    features: [
      { title: "Executive German Engineering", desc: "Precision handling, turbocharged acceleration, and smooth 9-speed automatic transmissions." },
      { title: "Bespoke Comfort & Silence", desc: "Double-glazed acoustic glass and adaptive suspension isolate cabin from road imperfections." },
      { title: "VIP Airport Meet & Greet", desc: "Direct curbside collection—no shuttle buses or depot queue lines." },
      { title: "Special Occasion Rentals", desc: "Immaculate presentation for weddings, formal galas, and commercial film shoots." },
    ],
    stat1: "Prestige",
    stat1Label: "Top European Marques",
    stat2: "100%",
    stat2Label: "Unbranded Discretion",
    stat3: "VIP",
    stat3Label: "Curbside Airport Delivery",
    stat4: "5-Star",
    stat4Label: "Executive Presentation",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Make an indelible professional impression on clients, partners, and event guests",
      "Experience cutting-edge automotive safety, massage seats, and head-up displays",
      "Flexible rental durations from 24-hour executive hires to weekly luxury touring",
      "Full comprehensive prestige insurance with clear, capped liability terms",
    ],
  },

  'vans-commercial': {
    title: "Commercial Delivery Vans & Cargo Movers",
    subtitle: "High-Roof Cargo Vans, Moving Vans & Refrigerated Logistics Fleets",
    tag: "Vehicle Category",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Reliable commercial transport for house relocations, courier logistics, trade equipment deliveries, and cold-chain refrigerated distribution.",
    overview:
      "When you need to transport bulky furniture, palletized freight, or perishable goods, our commercial van category provides the necessary payload and cubic volume. Featuring 1-tonne to 2-tonne cargo vans like the Toyota HiAce LWB/SLWB, Ford Transit Custom, and Renault Master, these vehicles feature wide rear barn doors, sliding side doors, and integrated cargo tie-down points.",
    problemSolved:
      "Expensive professional removalist fees for DIY moving, inadequate cargo space in passenger utes, and lack of temporary delivery vans during peak retail seasons.",
    whoItsFor:
      "DIY home movers, courier and e-commerce delivery drivers, florists and caterers requiring refrigeration, and trade businesses covering van breakdowns.",
    howItWorks: [
      { step: "01", title: "Select Van Size", desc: "Choose standard 6m³ cargo volume, high-roof 10m³ volume, or hydraulic tailgate movers." },
      { step: "02", title: "Check Payload Capacity", desc: "Confirm payload ratings from 1,000kg to 1,800kg suitable for your goods." },
      { step: "03", title: "Load & Transport", desc: "Benefit from wide load spaces, low load sills, and standard car driver licence operation." },
    ],
    bullets: [
      "Drive high-roof commercial delivery vans on a standard Australian car driver licence",
      "Up to 11.5 cubic metres of cargo capacity with internal tie-down rails and non-slip timber flooring",
      "Available hydraulic tailgate lift loaders for easy roll-on handling of heavy pallets and appliances",
      "Refrigerated van configurations with standby electric plug-in for perishable food and pharmaceutical transport",
    ],
    features: [
      { title: "Toyota HiAce & Ford Transit", desc: "Australia's most dependable commercial delivery vans with automatic transmissions." },
      { title: "Hydraulic Tailgate Movers", desc: "Eliminate heavy lifting with 500kg electric tailgate lifters on furniture moving vans." },
      { title: "Cold-Chain Refrigerated Fleets", desc: "Precise temperature control from 0°C to -18°C for catering and fresh food logistics." },
      { title: "Commercial Weekly Accounts", desc: "Substantial rate discounts for courier subcontractors and seasonal business fleet surges." },
    ],
    stat1: "Up to 11m³",
    stat1Label: "Cubic Cargo Volume",
    stat2: "1,500kg",
    stat2Label: "Maximum Payload Capacity",
    stat3: "Class C",
    stat3Label: "Standard Car Licence",
    stat4: "Tailgate",
    stat4Label: "Lifter Options Available",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Save hundreds on residential moves by renting a dedicated moving van for the weekend",
      "Keep courier routes running smoothly when personal fleet vehicles are in the repair shop",
      "Low loading deck heights minimize physical fatigue when loading heavy boxes",
      "Full commercial insurance coverage with transparent excess reduction packages",
    ],
  },

  'electric-hybrid': {
    title: "Electric & Hybrid Fleet",
    subtitle: "Zero-Emission Electric Vehicles & Ultra-Efficient Petrol-Electric Hybrids",
    tag: "Vehicle Category",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "HireCar Marketplace",
    description:
      "Travel sustainably across Australia. Rent advanced electric vehicles from Tesla, BYD, and Polestar alongside fuel-sipping Toyota hybrids with zero range anxiety.",
    overview:
      "Embrace clean, quiet, and eco-friendly mobility. Our electric and hybrid category is engineered to slash your fuel expenditures while reducing carbon emissions. Enjoy the instantaneous torque and cutting-edge autonomous technology of modern EVs, complete with complimentary charging adapters and access to nationwide fast-charging networks across major highways.",
    problemSolved:
      "High petrol costs during extended driving trips, corporate carbon footprint reporting compliance, and desire to test-drive an EV before purchasing.",
    whoItsFor:
      "Eco-conscious travelers, corporate organizations with ESG carbon-reduction mandates, and drivers eager to experience modern electric mobility.",
    howItWorks: [
      { step: "01", title: "Select EV or Hybrid", desc: "Choose pure electric (Tesla Model 3/Y, BYD Atto 3) or self-charging hybrid (Toyota RAV4/Camry)." },
      { step: "02", title: "Collect Fully Charged", desc: "Vehicles are provided with 80%+ battery charge and Type 2 charging cables." },
      { step: "03", title: "Effortless Fast Charging", desc: "Recharge at Tesla Superchargers, Chargefox, and Evie networks across Australian arterial routes." },
    ],
    bullets: [
      "Zero tailpipe emissions on pure electric models, significantly reducing your travel carbon footprint",
      "Up to 500km real-world driving range per charge on modern long-range electric saloons and SUVs",
      "Slash fuel expenses by up to 70% compared to equivalent petrol vehicles",
      "Cutting-edge vehicle operating systems with satellite navigation, autonomous driving assist, and OTA updates",
    ],
    features: [
      { title: "Tesla Model 3 & Model Y", desc: "World-class electric range, minimalist luxury, and seamless Tesla Supercharger network access." },
      { title: "Self-Charging Toyota Hybrids", desc: "Over 900km range per tank without requiring plug-in charging cables—ideal for regional touring." },
      { title: "Charging Cables Included", desc: "Type 2 and domestic 240V portable charging cables supplied with every EV rental." },
      { title: "ESG Corporate Compliance", desc: "Certified carbon offset documentation provided for corporate sustainability audits." },
    ],
    stat1: "500km+",
    stat1Label: "EV Driving Range",
    stat2: "0g CO2",
    stat2Label: "Tailpipe Emissions (EV)",
    stat3: "70%",
    stat3Label: "Fuel Cost Reduction",
    stat4: "Fast",
    stat4Label: "Supercharger Access",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Experience whisper-quiet highway cruising and instant electric acceleration",
      "Avoid volatile petrol station pump price spikes across capital cities",
      "Seamless integration with Australian EV charging apps (PlugShare, Chargefox)",
      "Dedicated operator handover explaining EV charging best practices",
    ],
  },

  // ==========================================
  // MAJOR AUSTRALIAN CITIES & LOCATIONS
  // ==========================================
  'sydney': {
    title: "Sydney & NSW Car Rental Network",
    subtitle: "Kingsford Smith Airport (SYD), Central Station & Greater Sydney Depots",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Connect directly with verified car hire operators across Sydney. Convenient airport terminal pickups, suburban depots, and seamless Linkt toll tag integration.",
    overview:
      "Landing at Sydney Airport or needing wheels in Parramatta? HireCar Marketplace offers direct connections to independent rental fleets throughout New South Wales. Whether navigating the Harbour Bridge, heading to the Blue Mountains, or driving up the Pacific Coast to Newcastle, our Sydney network ensures low rates, zero counter markups, and transparent electronic tolling.",
    problemSolved:
      "Expensive airport concession surcharges at Sydney Airport, confusion over Sydney toll roads (Cross City Tunnel, M2, WestConnex), and rigid booking terms.",
    whoItsFor:
      "Interstate business visitors, holidaymakers exploring Sydney Harbour and coastal beaches, and NSW regional travelers.",
    howItWorks: [
      { step: "01", title: "Select Sydney Location", desc: "Choose Terminal 1 (International), Terminal 2/3 (Domestic), or suburban depots across Sydney." },
      { step: "02", title: "Select Toll Option", desc: "Vehicles come equipped with Linkt tags for automated toll payment with zero admin fees." },
      { step: "03", title: "Depart Smoothly", desc: "Collect keys within minutes and hit the M1, M4, or M5 highways." },
    ],
    bullets: [
      "Direct airport terminal pickups avoiding crowded shuttle bus transfers to off-site lots",
      "Automatic Linkt toll road integration covering WestConnex, Lane Cove Tunnel, and Harbour crossings",
      "Extensive fleet options from compact runabouts for Bondi parking to 4WDs for Blue Mountains tracks",
      "Depot locations spanning Mascot, Sydney CBD, Parramatta, Penrith, and North Sydney",
    ],
    features: [
      { title: "Airport Terminal Handover", desc: "Meet your operator directly at Terminal 1, 2, or 3 arrivals." },
      { title: "Automated Sydney Tolls", desc: "Never worry about missed toll notices or $25 administrative penalty fees." },
      { title: "Pacific Coast Touring", desc: "One-way rentals available between Sydney, Newcastle, Byron Bay, and Brisbane." },
      { title: "Blue Mountains Ready", desc: "Safe, roadworthy SUVs and sedans for scenic mountain exploration." },
    ],
    stat1: "50+",
    stat1Label: "Sydney Depot Locations",
    stat2: "SYD",
    stat2Label: "Direct Airport Service",
    stat3: "100%",
    stat3Label: "Linkt Toll Compatible",
    stat4: "24/7",
    stat4Label: "Flight Delay Support",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Avoid paying exorbitant Sydney airport desk surcharges",
      "Knowledgeable local operators offering tips on Sydney peak hour traffic",
      "Complimentary flight tracking ensures your car is held even during airport delays",
      "Transparent security bond releases within 48 hours of vehicle return",
    ],
  },

  'melbourne': {
    title: "Melbourne & VIC Car Rental Network",
    subtitle: "Tullamarine (MEL), Avalon (AVV) & Great Ocean Road Touring Depots",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Book directly with verified car rental depots in Melbourne. Instant Tullamarine airport handovers, CityLink/EastLink toll integration, and Great Ocean Road vehicles.",
    overview:
      "Melbourne is Australia's cultural capital and the gateway to world-famous scenic drives like the Great Ocean Road, Mornington Peninsula, and Yarra Valley. HireCar Marketplace connects you to independent Victorian operators with depots at Tullamarine Airport, Avalon Airport, Southern Cross Station, and outer suburban hubs. Drive away with transparent pricing, full insurance options, and automated toll tracking.",
    problemSolved:
      "CityLink and EastLink toll penalties, high airport counter fees, and lack of vehicle suitability for coastal road trips.",
    whoItsFor:
      "Tourists driving the Great Ocean Road, corporate commuters visiting Melbourne's business districts, and Victorians needing temporary replacement transport.",
    howItWorks: [
      { step: "01", title: "Choose Melbourne Depot", desc: "Select Melbourne Airport (MEL), Avalon Airport (AVV), or inner-city pickup locations." },
      { step: "02", title: "Automate Vic Tolls", desc: "Vehicles are pre-registered on CityLink and EastLink for hassle-free highway travel." },
      { step: "03", title: "Explore Victoria", desc: "Enjoy unlimited or high-mileage options for extended coastal and alpine journeys." },
    ],
    bullets: [
      "Convenient Tullamarine airport key collection with personalized flight delay monitoring",
      "Pre-configured EastLink & CityLink toll tags ensuring zero administrative fine notices",
      "Comfortable touring wagons and SUVs perfect for the 12 Apostles and Otway Ranges",
      "Depot locations across Melbourne CBD, Southbank, Tullamarine, Dandenong, and Geelong",
    ],
    features: [
      { title: "Tullamarine & Avalon Hubs", desc: "Fast vehicle collection covering both primary Victorian international and domestic airports." },
      { title: "Great Ocean Road Packages", desc: "Unlimited kilometer allowances and full-to-full fuel guarantees for coastal touring." },
      { title: "CityLink & EastLink Ready", desc: "Tolls automatically billed to your final statement at exact statutory rates." },
      { title: "Alpine Snow Chain Add-ons", desc: "Equip your vehicle with mandatory snow chains for Mt Buller and Mt Hotham ski trips." },
    ],
    stat1: "45+",
    stat1Label: "Victorian Depots",
    stat2: "MEL & AVV",
    stat2Label: "Airport Hub Coverage",
    stat3: "100%",
    stat3Label: "CityLink Integrated",
    stat4: "Zero",
    stat4Label: "Hidden Toll Markups",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Save on airport rental rates and bypass slow car hire queues",
      "Direct advice on hook turns, tram safety rules, and Melbourne driving etiquette",
      "Flexible one-way rentals to Sydney, Adelaide, or regional Victorian centres",
      "Prompt bond returns following smooth vehicle inspection",
    ],
  },

  'brisbane': {
    title: "Brisbane & QLD Car Rental Network",
    subtitle: "Brisbane Airport (BNE), Fortitude Valley & Gold/Sunshine Coast Gateways",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Rent directly from verified Brisbane and Queensland fleet operators. Fast BNE airport service, Linkt toll road coverage, and gateway access to coastal holiday regions.",
    overview:
      "With year-round sunshine and close proximity to both the Gold Coast and Sunshine Coast, Brisbane is Queensland's transport epicenter. HireCar Marketplace partners with verified independent operators offering modern sedans, family SUVs, and commercial utilities across Brisbane Airport, Eagle Farm, the CBD, and surrounding suburbs. Travel seamlessly across the Gateway Motorway and Clem7 with zero middleman markups.",
    problemSolved:
      "High seasonal price spikes during school holidays, complex airport pickup arrangements, and surprise toll bills on Brisbane bypass motorways.",
    whoItsFor:
      "Families taking Queensland theme park holidays, interstate corporate travelers, and Queenslanders seeking reliable hire vehicles.",
    howItWorks: [
      { step: "01", title: "Select Brisbane Pickup", desc: "Choose BNE Domestic or International terminal delivery or suburban depot collection." },
      { step: "02", title: "Confirm Travel Plans", desc: "Select unlimited mileage packages for drives north to Noosa or south to Byron Bay." },
      { step: "03", title: "Enjoy Queensland", desc: "Drive air-conditioned, sanitized vehicles ready for sub-tropical conditions." },
    ],
    bullets: [
      "Fast terminal airport vehicle handovers at Brisbane Airport (BNE) Domestic & International",
      "Automatic Linkt Queensland tolling covering Clem7, Go Between Bridge, and Gateway Motorway",
      "Family-sized 7-seater SUVs and people movers with tinted windows and powerful air conditioning",
      "Depot locations across Brisbane CBD, Fortitude Valley, Eagle Farm, and Rocklea",
    ],
    features: [
      { title: "Brisbane Airport Terminal Service", desc: "Curbside or shuttle pickup within 5 minutes of baggage collection." },
      { title: "Sunshine & Gold Coast Corridors", desc: "One-way drops available between Brisbane, Gold Coast (OOL), and Maroochydore (MCY)." },
      { title: "Sub-Tropical AC Systems", desc: "High-output climate control systems thoroughly serviced for humid Queensland summers." },
      { title: "Transparent Theme Park Packages", desc: "Baby seat add-ons and roof racks available for family holiday gear." },
    ],
    stat1: "40+",
    stat1Label: "Brisbane Depot Points",
    stat2: "BNE",
    stat2Label: "Direct Airport Service",
    stat3: "100%",
    stat3Label: "Linkt QLD Integrated",
    stat4: "Year-Round",
    stat4Label: "Competitive Rates",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Escape inflated holiday surge pricing common on global booking portals",
      "Friendly Queensland local customer service and local driving guidance",
      "Transparent fuel and toll terms with zero hidden administrative fees",
      "Fast, automated security bond releases following vehicle return",
    ],
  },

  'perth': {
    title: "Perth & WA Car Rental Network",
    subtitle: "Perth Airport (PER), Fremantle, Mining Corridors & Southwest WA Touring",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Direct car and 4WD ute rental across Perth and Western Australia. Fast Perth Airport handovers, mine-spec utilities, and Southwest touring vehicles.",
    overview:
      "Western Australia's vast distances demand reliable, well-maintained vehicles. Whether landing at Perth Airport for a corporate resource meeting, driving south to the Margaret River wine region, or mobilizing 4x4 utes for the Pilbara, HireCar Marketplace connects you to verified WA operators. Enjoy transparent rates, robust vehicles built for distance, and genuine local Western Australian service.",
    problemSolved:
      "Strict kilometer limits on vast WA driving distances, lack of genuine 4x4 mine-spec vehicles, and high airport concession fees.",
    whoItsFor:
      "FIFO resource workers, tourists visiting Rottnest ferry terminals and Margaret River, and commercial contractors operating in WA.",
    howItWorks: [
      { step: "01", title: "Select Perth Airport or City", desc: "Choose Terminal 1/2 or Terminal 3/4 at Perth Airport (PER), Welshpool, or Fremantle." },
      { step: "02", title: "Select Vehicle Spec", desc: "Choose economical sedans, touring SUVs, or heavy-duty mine-spec 4x4 utes." },
      { step: "03", title: "Explore Western Australia", desc: "Enjoy generous kilometer allowances tailored for long-distance WA highway driving." },
    ],
    bullets: [
      "Coverage across all Perth Airport terminals (T1/T2 international & T3/T4 domestic)",
      "High-mileage allowances and unlimited options for Southwest WA touring itineraries",
      "Heavy-duty 4WD utilities equipped with bullbars, UHF radios, and dual spare tires",
      "Depot locations across Welshpool, Osborne Park, Victoria Park, and Fremantle",
    ],
    features: [
      { title: "FIFO Friendly Rental Terms", desc: "Tailored swing schedules and flexible extension terms for Western Australian resource workers." },
      { title: "Margaret River Touring SUVs", desc: "Spacious luxury wagons with ample boot capacity for wine cases and surfboards." },
      { title: "Mine-Spec & Commercial Trays", desc: "Certified BMA and Rio Tinto/BHP site compliant 4WD dual-cab utility vehicles." },
      { title: "Zero Toll Roads in WA", desc: "Perth features zero toll roads—what you see on your rental rate is exactly what you pay." },
    ],
    stat1: "30+",
    stat1Label: "WA Depot Hubs",
    stat2: "PER",
    stat2Label: "Airport Terminals 1-4",
    stat3: "FIFO",
    stat3Label: "Contract Friendly",
    stat4: "4x4",
    stat4Label: "Mine-Spec Specialists",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Access rugged 4x4 vehicles built for corrugated outback highways",
      "Avoid overpriced airport desk car rentals with local independent depot rates",
      "Reliable 24/7 RAC roadside assistance included across all WA highways",
      "Fast, paperless driver verification and rapid security deposit refunds",
    ],
  },

  'adelaide': {
    title: "Adelaide & SA Car Rental Network",
    subtitle: "Adelaide Airport (ADL), Barossa Valley & Kangaroo Island Gateways",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Explore South Australia with trusted local operators. Adelaide Airport service, Barossa wine touring cars, and Kangaroo Island ferry pre-approved vehicles.",
    overview:
      "From the world-renowned wineries of the Barossa Valley and McLaren Vale to the rugged coastline of the Fleurieu Peninsula, South Australia offers world-class touring. HireCar Marketplace connects you with local Adelaide car hire depots offering comfortable sedans, touring wagons, and SUVs with unlimited mileage options and zero hidden counter charges.",
    problemSolved:
      "Rental restrictions preventing vehicles from boarding Kangaroo Island ferries, high excess deductibles, and airport queue delays.",
    whoItsFor:
      "Wine enthusiasts touring the Barossa, corporate visitors attending Adelaide conventions, and families exploring Kangaroo Island.",
    howItWorks: [
      { step: "01", title: "Select Adelaide Depot", desc: "Choose Adelaide Airport (ADL), Adelaide CBD, or suburban South Australian depots." },
      { step: "02", title: "Check Regional Permissions", desc: "Confirm ferry permissions for Kangaroo Island travel without voiding your insurance." },
      { step: "03", title: "Tour South Australia", desc: "Enjoy clean, reliable vehicles equipped for pleasant wine country and coastal touring." },
    ],
    bullets: [
      "Convenient Adelaide Airport (ADL) key collection located just 15 minutes from the CBD",
      "Pre-approved ferry transit for Kangaroo Island exploration across participating operators",
      "Generous boot space for wine boxes and luggage in our sedan and SUV categories",
      "Depot locations spanning Adelaide Airport, Adelaide City Centre, and Mawson Lakes",
    ],
    features: [
      { title: "Barossa & McLaren Vale Ready", desc: "Comfortable touring sedans with smooth suspensions for leisurely wine country day trips." },
      { title: "Kangaroo Island Approved", desc: "Specialist operators allowing ferry transit on SeaLink without penalty." },
      { title: "Zero SA Toll Roads", desc: "South Australia operates with zero toll roads—enjoy simple, direct highway travel." },
      { title: "Flinders Ranges 4x4 Options", desc: "Capable 4WD vehicles equipped for the unsealed roads of the Australian Outback." },
    ],
    stat1: "25+",
    stat1Label: "SA Depot Locations",
    stat2: "ADL",
    stat2Label: "Adelaide Airport Service",
    stat3: "Wine Country",
    stat3Label: "Touring Specialists",
    stat4: "100%",
    stat4Label: "Local SA Hospitality",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Direct relationships with local South Australian car hire owners",
      "Unrestricted mileage options to take in all SA wine regions without penalty",
      "Transparent fuel terms and zero credit card processing surcharges",
      "Prompt bond return guarantee following return inspection",
    ],
  },

  'gold-coast': {
    title: "Gold Coast Rental Network",
    subtitle: "Gold Coast Airport (OOL), Surfers Paradise & Theme Park Vehicles",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Enjoy your Gold Coast holiday with transparent car rental. Gold Coast Airport (OOL) pickups, convertible cruisers, spacious family SUVs, and theme park people movers.",
    overview:
      "The Gold Coast is Australia's premier holiday playground. From the beaches of Surfers Paradise and Coolangatta to the theme parks of Oxenford, having your own rental car provides unmatched freedom. HireCar Marketplace connects you to vetted independent operators at Gold Coast Airport (Coolangatta) and Surfers Paradise with zero hidden fees and transparent family packages.",
    problemSolved:
      "Expensive airport taxi transfers, high theme park shuttle fares for families, and aggressive counter sales tactics from corporate chains.",
    whoItsFor:
      "Families visiting theme parks, surfers chasing waves along Snapper Rocks, and holidaymakers enjoying beachside Queensland.",
    howItWorks: [
      { step: "01", title: "Select Gold Coast Depot", desc: "Choose Coolangatta Airport (OOL), Surfers Paradise, or Southport depots." },
      { step: "02", title: "Add Child Seats / Gear", desc: "Select booster seats, baby capsules, or surfboard racks during quick online booking." },
      { step: "03", title: "Hit the Coast", desc: "Drive straight from the terminal to your beachfront apartment or resort." },
    ],
    bullets: [
      "Direct pickups at Gold Coast Airport (OOL) across both Queensland and NSW state borders",
      "Spacious 7 and 8-seater family vans making theme park excursions effortless and affordable",
      "Convertible and prestige sports cruisers for scenic coastal highway drives",
      "Depot locations across Coolangatta, Surfers Paradise, Southport, and Broadbeach",
    ],
    features: [
      { title: "Coolangatta Airport Terminal Service", desc: "Fast key handover right at the terminal arrivals lounge." },
      { title: "Theme Park Family Packages", desc: "Equipped with child seats, sunshades, and large luggage spaces for strollers." },
      { title: "Byron Bay Day Trips", desc: "Hop across the NSW border to Byron Bay with unrestricted cross-border insurance." },
      { title: "Surfboard Ready Vehicles", desc: "Roof racks and folding seats designed to fit surfboards and beach gear." },
    ],
    stat1: "35+",
    stat1Label: "Gold Coast Depots",
    stat2: "OOL",
    stat2Label: "Coolangatta Airport Hub",
    stat3: "Family",
    stat3Label: "Theme Park Specials",
    stat4: "Sun & Surf",
    stat4Label: "Convertibles & SUVs",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Save hundreds compared to public shuttles and rideshares for family groups",
      "Pick up at Gold Coast and drop off at Brisbane Airport with flexible one-way options",
      "Clean, air-conditioned late-model vehicles sanitized before every rental",
      "Fast digital check-in lets you start your holiday without counter delays",
    ],
  },

  'canberra': {
    title: "Canberra & ACT Rental Network",
    subtitle: "Canberra Airport (CBR), Parliamentary Triangle & Capital Regional Travel",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Premium executive sedans and reliable hatchbacks for government business, diplomatic delegations, and capital visits across Canberra and the ACT.",
    overview:
      "Whether visiting the Parliamentary Triangle for government policy meetings, exploring the National Gallery, or traveling to regional NSW wine districts, HireCar Marketplace connects you to independent ACT fleet operators. Enjoy prompt airport pickups at Canberra Airport (CBR), modern executive vehicles, and transparent corporate invoicing with zero administrative markups.",
    problemSolved:
      "Lack of premium vehicles during parliamentary sitting weeks, inflated government rate tiers, and slow airport collection queues.",
    whoItsFor:
      "Government contractors, public servants, diplomatic personnel, conference delegates, and families exploring Australia's national cultural institutions.",
    howItWorks: [
      { step: "01", title: "Select CBR Airport or City", desc: "Choose Canberra Airport (CBR), Civic CBD, or Fyshwick depot pickup." },
      { step: "02", title: "Select Executive Class", desc: "Choose fuel-efficient compacts, comfortable executive sedans, or prestige vehicles." },
      { step: "03", title: "Travel Seamlessly", desc: "Enjoy smooth driving along Canberra's wide parkway road network." },
    ],
    bullets: [
      "Direct key collection at Canberra Airport (CBR) within minutes of landing",
      "Executive sedans and hybrid vehicles ideal for government department meetings",
      "Zero toll roads across the Australian Capital Territory for simple travel budgeting",
      "Depot locations spanning Canberra Airport, Civic, Belconnen, and Fyshwick",
    ],
    features: [
      { title: "Parliamentary Sitting Week Rates", desc: "Consistent, fair pricing without predatory surge gouging during major legislative sitting weeks." },
      { title: "Compliant GST Invoicing", desc: "Clean Australian tax invoices ready for government travel expense account processing." },
      { title: "Snowy Mountains Gateway", desc: "Winter ski packages with 4WDs and snow chains for Thredbo and Perisher trips." },
      { title: "Quiet Hybrid Technology", desc: "Discreet, eco-friendly travel matching federal emissions reduction guidelines." },
    ],
    stat1: "20+",
    stat1Label: "ACT Depot Hubs",
    stat2: "CBR",
    stat2Label: "Canberra Airport Hub",
    stat3: "Gov Ready",
    stat3Label: "Compliant Tax Invoices",
    stat4: "Zero",
    stat4Label: "ACT Toll Roads",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Guaranteed vehicle reservations even during busy parliamentary sitting periods",
      "Direct communication with local Canberra operators for flexible drop-off times",
      "Reliable corporate accounts with simplified payment terms",
      "Prompt security bond releases following vehicle return",
    ],
  },

  'hobart': {
    title: "Hobart & Tasmania Rental Network",
    subtitle: "Hobart Airport (HBA), MONA, Cradle Mountain & Tasmanian Touring",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Explore the natural beauty of Tasmania. Rent reliable touring cars, family wagons, and capable 4WDs from verified Hobart operators with zero island surcharge.",
    overview:
      "Tasmania is best experienced from the open driver's seat. From the historic Salamanca Place and MONA in Hobart to the wilderness of Cradle Mountain and Freycinet Peninsula, a dependable rental car is essential. HireCar Marketplace connects you to independent Tasmanian operators offering vehicles maintained for winding mountain passes with unlimited kilometers and transparent winterized protection.",
    problemSolved:
      "Crippling Tasmanian rental car shortages during summer peaks, exorbitant island surcharges, and restrictions on gravel wilderness roads.",
    whoItsFor:
      "Couples and families taking scenic Tasmanian road trips, bushwalkers heading to national parks, and food and wine enthusiasts.",
    howItWorks: [
      { step: "01", title: "Select Hobart Depot", desc: "Choose Hobart International Airport (HBA), Hobart Waterfront, or Cambridge depots." },
      { step: "02", title: "Select Touring Model", desc: "Choose reliable sedans, all-wheel drive SUVs, or spacious passenger vans." },
      { step: "03", title: "Tour the Island", desc: "Benefit from unlimited mileage packages allowing complete laps of Tasmania." },
    ],
    bullets: [
      "Convenient Hobart Airport (HBA) key collection avoiding long tourist queue lines",
      "Unlimited kilometer packages allowing comprehensive statewide road trips without penalty",
      "All-weather SUVs with all-season tires for safe handling in sudden Tasmanian weather changes",
      "Depot locations across Hobart Airport, Hobart CBD, Cambridge, and Launceston (LST)",
    ],
    features: [
      { title: "Statewide Touring Packages", desc: "Pick up in Hobart and return in Launceston or Devonport for total island itinerary flexibility." },
      { title: "National Parks Ready", desc: "Comfortable touring cars permitted on well-maintained unsealed roads leading to trailheads." },
      { title: "Zero Island Markups", desc: "Fair pricing protected against the predatory price gouging common during Tasmanian summers." },
      { title: "Wildlife Driving Safety Tips", desc: "Local operator advice regarding dusk/dawn wildlife precautions on Tasmanian roads." },
    ],
    stat1: "25+",
    stat1Label: "Tasmanian Depots",
    stat2: "HBA & LST",
    stat2Label: "Airport Hub Coverage",
    stat3: "Unlimited",
    stat3Label: "Touring Kilometers",
    stat4: "Zero",
    stat4Label: "Island Surge Markups",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Secure vehicle bookings months in advance without fear of arbitrary cancellations",
      "Support independent Tasmanian family businesses committed to local tourism",
      "24/7 RACT roadside breakdown assistance across all Tasmanian highways",
      "Swift post-trip bond releases with honest vehicle check-out logs",
    ],
  },

  'darwin': {
    title: "Darwin & Top End Rental Network",
    subtitle: "Darwin Airport (DRW), Kakadu, Litchfield & Outback 4WD Expeditions",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Explore the Top End with heavy-duty 4WDs and reliable air-conditioned touring vehicles. Darwin Airport service, Kakadu permits, and outback safety gear.",
    overview:
      "Darwin is Australia's tropical northern gateway and the launching pad for Kakadu National Park, Litchfield waterfalls, and the Katherine Gorge. Traveling the Top End requires vehicles specifically prepared for extreme heat, monsoon wet-season storms, and unsealed remote highways. HireCar Marketplace connects you to vetted Darwin operators with heavy-duty 4WDs, dual spare tires, and snorkel exhausts.",
    problemSolved:
      "Severe vehicle damage from under-equipped cars in outback territory, strict unsealed road bans from multinational chains, and lack of emergency satellite equipment.",
    whoItsFor:
      "Adventurous road-trippers, Kakadu campers, commercial government personnel visiting remote communities, and dry-season tourists.",
    howItWorks: [
      { step: "01", title: "Select Darwin Pickup", desc: "Choose Darwin International Airport (DRW), Winnellie, or Stuart Park depots." },
      { step: "02", title: "Select 4x4 or Sedan", desc: "Choose economical city compacts or fully outfitted Kakadu-certified 4WD wagons." },
      { step: "03", title: "Explore the Outback", desc: "Hit the Stuart Highway with comprehensive regional roadside assistance." },
    ],
    bullets: [
      "Direct Darwin International Airport (DRW) service available 24/7 for late-night flight arrivals",
      "Outback-ready 4WD vehicles (Toyota Prado, HiLux, LandCruiser) permitted on unsealed Kakadu tracks",
      "High-output air-conditioning systems fully serviced to combat tropical Top End heat",
      "Depot locations across Darwin Airport, Stuart Park, Winnellie, and Palmerston",
    ],
    features: [
      { title: "Kakadu & Litchfield Specialists", desc: "Vehicles pre-approved for all gazetted unsealed national park access roads." },
      { title: "Recovery & Satellite Gear Add-ons", desc: "Available emergency satellite communicators, recovery tracks, and 12V fridges." },
      { title: "Late Night Flight Handovers", desc: "Red-eye domestic flight key handovers coordinated directly with the depot manager." },
      { title: "Unlimited Mileage Outlets", desc: "Generous kilometer packages designed for long Northern Territory driving stretches." },
    ],
    stat1: "20+",
    stat1Label: "NT Depot Hubs",
    stat2: "DRW",
    stat2Label: "Darwin Airport Terminal",
    stat3: "Kakadu",
    stat3Label: "National Park Approved",
    stat4: "4x4",
    stat4Label: "Heavy-Duty Outback Fleet",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Drive genuine off-road vehicles equipped for authentic Northern Territory exploration",
      "Expert local advice on crocodile safety, river crossings, and seasonal road closures",
      "24/7 emergency roadside support covering the Stuart Highway and major arteries",
      "Transparent condition logs safeguarding against disputed stone-chip claims",
    ],
  },

  'cairns': {
    title: "Cairns & Tropical North QLD Rental Network",
    subtitle: "Cairns Airport (CNS), Port Douglas, Daintree Rainforest & Reef Highway",
    tag: "Location Hub",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentColor: "#f97316",
    category: "HireCar Marketplace",
    description:
      "Discover the Great Barrier Reef and Daintree Rainforest. Rent vehicles in Cairns with fast airport handovers, Captain Cook Highway cruisers, and 4WD Cape York fleets.",
    overview:
      "Where the rainforest meets the reef, Cairns is Australia's premier tropical vacation destination. Drive the stunning Captain Cook Highway north to Port Douglas, take the car ferry across the Daintree River to Cape Tribulation, or head west into the Atherton Tablelands. HireCar Marketplace connects you to independent Tropical North Queensland car hire operators offering modern vehicles with ice-cold air conditioning and generous mileage.",
    problemSolved:
      "Expensive airport transfers to Port Douglas ($150+ each way), lack of ferry-approved vehicles for the Daintree, and crowded tourist bus tours.",
    whoItsFor:
      "Holidaymakers touring Port Douglas and Palm Cove, eco-tourists visiting the Daintree Rainforest, and 4WD adventurers heading up Cape York Peninsula.",
    howItWorks: [
      { step: "01", title: "Select Cairns Pickup", desc: "Choose Cairns Airport (CNS) Domestic/International terminal or Cairns City depots." },
      { step: "02", title: "Select Rainforest Class", desc: "Choose fuel-efficient compacts, comfortable coastal SUVs, or Cape York 4WDs." },
      { step: "03", title: "Drive Tropical Highway", desc: "Cruise the coastal Coral Sea highway at your own relaxing pace." },
    ],
    bullets: [
      "Direct Cairns Airport (CNS) terminal key collection within minutes of leaving baggage claim",
      "Daintree Rainforest approved vehicles permitted on the car ferry across to Cape Tribulation",
      "Powerful tropical climate control keeping every passenger cool in northern humidity",
      "Depot locations across Cairns Airport, Cairns Esplanade, and Port Douglas",
    ],
    features: [
      { title: "Captain Cook Highway Cruisers", desc: "Modern, smooth-handling sedans and SUVs for one of the world's most scenic coastal drives." },
      { title: "Port Douglas One-Way Transfers", desc: "Pick up in Cairns and drop off in Port Douglas with participating local operators." },
      { title: "Cape York Expedition 4WDs", desc: "Snorkel-equipped 4x4 LandCruisers and Hiluxes certified for the Bloomfield Track." },
      { title: "Child Seat & Snorkel Gear Ready", desc: "Family add-ons to make packing for reef and beach days completely effortless." },
    ],
    stat1: "30+",
    stat1Label: "Tropical QLD Depots",
    stat2: "CNS",
    stat2Label: "Cairns Airport Hub",
    stat3: "Daintree",
    stat3Label: "Ferry Permitted",
    stat4: "100%",
    stat4Label: "Cold AC Guaranteed",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Save hundreds compared to shuttle bus and taxi fares to Port Douglas and Palm Cove",
      "Explore the Atherton Tablelands, waterfalls, and coffee plantations on your own schedule",
      "Friendly tropical hospitality and local insider advice on reef departures and stinger safety",
      "Fast, automated bond pre-authorization release post-rental",
    ],
  },

  "verified-operators": {
    title: "Verified Australian Fleet Operators",
    category: "HireCar Marketplace",
    badge: "100% Licensed & Insured",
    tagline: "Rigorous vetting for independent, regional, and national vehicle providers",
    description:
      "Every vehicle rental company listed on HireCar Marketplace undergoes thorough accreditation. We verify active Australian Business Numbers (ABN), valid commercial motor fleet insurance policies, and strict adherence to Australian Consumer Law so you can book with total peace of mind.",
    overview:
      "Unlike unmoderated peer-to-peer car sharing portals where vehicle quality and insurance coverage can vary wildly, HireCar Marketplace partners exclusively with professional, licensed vehicle rental operators. Our multi-point vendor audit checks depot licensing, vehicle roadworthy certification history, transparency of terms, and verified customer feedback.",
    problemSolved:
      "Dubious rental operators with hidden fees, unroadworthy vehicles, and invalid insurance policies that leave customers liable for thousands in unexpected damage claims.",
    whoItsFor:
      "Discerning travelers, corporate fleet managers, families, and interstate visitors who require guaranteed vehicle standards and legitimate insurance protections.",
    howItWorks: [
      { step: "01", title: "Operator Accreditation", desc: "Rental companies submit ABN, proof of commercial fleet insurance, and depot licensing." },
      { step: "02", title: "Fleet Roadworthy Audit", desc: "Every vehicle must have up-to-date state roadworthy inspection certificates and clean PPSR titles." },
      { step: "03", title: "Ongoing Quality Scoring", desc: "Verified customer reviews and dispute rates are tracked in real-time to maintain marketplace standing." },
    ],
    bullets: [
      "Mandatory commercial comprehensive fleet insurance on every registered rental car",
      "100% verified Australian Business Numbers (ABN) and registered business entities",
      "Strict zero-tolerance policy for misleading fuel policies or surprise excess fees",
      "Ongoing audits of customer satisfaction, vehicle hygiene, and mechanical safety",
    ],
    features: [
      { title: "PPSR & Title Clearance", desc: "Vehicles are checked against the Personal Property Securities Register to ensure zero security interests or stolen flags." },
      { title: "Standardised Bond Rules", desc: "Strict rules on security bond amounts, authorized payment methods, and automated release within 3-5 business days." },
      { title: "Depot Standards Check", desc: "Physical depot locations are verified for safe key collection, professional staff, and illuminated return bays." },
      { title: "Fair Wear & Tear Guidelines", desc: "Objective industry guidelines ensure fair inspection of minor stone chips without unfair damage fees." },
    ],
    stat1: "100%",
    stat1Label: "ABN & Insurance Verified",
    stat2: "4.8/5",
    stat2Label: "Average Operator Rating",
    stat3: "0",
    stat3Label: "Hidden Fee Tolerance",
    stat4: "24/7",
    stat4Label: "Roadside Assist Guaranteed",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Deal with reputable, professional vehicle businesses rather than strangers' personal cars",
      "Clear, enforceable rental agreements compliant with state transport authorities",
      "Dedicated marketplace support escalation in the rare event of a depot dispute",
      "Transparent pre-rental condition inspection reports with timestamped photos",
    ],
  },

  "direct-booking": {
    title: "Direct Booking & Zero Commission Markup",
    category: "HireCar Marketplace",
    badge: "Direct Depot Connection",
    tagline: "Transparent reservations directly confirmed into the rental operator's fleet system",
    description:
      "Cut out middleman booking brokers and confusing voucher vouchers. HireCar Marketplace connects your reservation straight into the operator's live rental management system for guaranteed vehicle availability, instant confirmation numbers, and zero third-party markups.",
    overview:
      "Traditional online travel agencies (OTAs) often sell 'unconfirmed requests' and tack on hefty 20-30% middleman commissions while creating communication barriers between you and the rental depot. With HireCar Marketplace, reservations synchronize directly into the operator's fleet software (including Car Hire Manager CHM), generating an immediate reservation number and locking your vehicle into the yard schedule.",
    problemSolved:
      "Arriving at the rental counter only to find the depot never received your broker reservation, or facing dispute runarounds when modifying a booking through third-party call centers.",
    howItWorks: [
      { step: "01", title: "Live Real-Time Inventory", desc: "Browse actual available cars backed by real-time fleet schedules, not theoretical allocations." },
      { step: "02", title: "Instant System Confirmation", desc: "Your booking writes directly into the operator's fleet software with an instant confirmed booking ID." },
      { step: "03", title: "Direct Depot Communication", desc: "Receive direct depot contact details, Google Maps directions, and driver handover instructions." },
    ],
    bullets: [
      "Instant reservation confirmation with real-time operator fleet software synchronization",
      "Direct line of communication with local depot managers for flight delays or special requests",
      "No voucher redemption headaches or third-party call center delays",
      "Flexible self-service cancellation and date modifications directly with the provider",
    ],
    features: [
      { title: "Direct System Integration", desc: "Native API synchronisation pushes confirmed bookings into the operator's dispatch calendar." },
      { title: "Direct Local Phone Numbers", desc: "Direct depot manager telephone and email provided immediately upon reservation." },
      { title: "Real-Time Flight Tracking", desc: "Provide your incoming flight number so local airport depots hold your vehicle if flights are delayed." },
      { title: "Digital Check-In Ready", desc: "Upload driver licence details in advance to bypass counter queues upon arrival." },
    ],
    stat1: "Instant",
    stat1Label: "Booking Confirmation",
    stat2: "$0",
    stat2Label: "Broker Voucher Fees",
    stat3: "100%",
    stat3Label: "Direct Fleet Lock",
    stat4: "1-Click",
    stat4Label: "Digital Depot Check-In",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate the risk of counter walk-ups being told 'we don't have your booking'",
      "Speak directly with the people who own, maintain, and prepare your vehicle",
      "Easy adjustments for late arrivals or modified travel plans without third-party penalties",
      "Complete transparency regarding vehicle specifications, fuel policies, and depot hours",
    ],
  },

  "australia-wide-network": {
    title: "Australia-Wide Rental Network",
    category: "HireCar Marketplace",
    badge: "Nationwide Coverage",
    tagline: "Extensive network spanning major capital cities, regional hubs, and remote mining corridors",
    description:
      "Wherever your Australian journey takes you—from Sydney, Melbourne, and Brisbane to the red dirt roads of the Pilbara and the tropical rainforests of Far North Queensland—HireCar Marketplace provides verified vehicle hire partners ready to support your trip.",
    overview:
      "Australia is a vast continent requiring varied vehicle solutions. While city escapes demand fuel-thrifty sedans and electric hatchbacks, remote work sites and Outback road trips require heavy-duty 4WDs, mine-spec utilities, and rugged dual-cabs. HireCar Marketplace unifies hundreds of independent, regional, and national depots into one cohesive, easily searchable platform.",
    problemSolved:
      "Difficulty finding reliable rental vehicles outside major metropolitan airports, particularly for regional projects, mining corridors, and remote tourism circuits.",
    howItWorks: [
      { step: "01", title: "Search Any Australian Region", desc: "Enter any capital city, regional town, or mining corridor to view local fleet depots." },
      { step: "02", title: "Compare Local Fleet Specialists", desc: "Choose between budget metro operators, regional family dealerships, or specialty 4WD providers." },
      { step: "03", title: "Pickup Across Australia", desc: "Collect from airport terminals, convenient suburban depots, or arrange remote delivery." },
    ],
    bullets: [
      "Over 120+ depot locations spanning NSW, VIC, QLD, WA, SA, TAS, and the NT",
      "Specialised regional vehicle types: Bullbar-equipped 4x4s, mine-spec utes, and commercial vans",
      "Support for multi-depot corporate accounts and regional contractor teams",
      "Local operators who understand terrain requirements and regional seasonal road conditions",
    ],
    features: [
      { title: "Metropolitan Airport Hubs", desc: "Fast shuttle or in-terminal collection across Sydney (SYD), Melbourne (MEL), Brisbane (BNE), Perth (PER), and Adelaide (ADL)." },
      { title: "Regional & Outback Specialists", desc: "Depots throughout regional centers including Broome, Alice Springs, Mackay, Dubbo, and Townsville." },
      { title: "Commercial Mining Corridors", desc: "Mine-spec vehicles compliant with BMA, Rio Tinto, and BHP site safety standards available for long-term hire." },
      { title: "Cross-Border Support", desc: "Nationwide roadside assistance coverage through NRMA, RACV, RACQ, and RAC across all states and territories." },
    ],
    stat1: "120+",
    stat1Label: "Depots Across Australia",
    stat2: "7",
    stat2Label: "States & Territories",
    stat3: "100%",
    stat3Label: "Nationwide Roadside",
    stat4: "24/7",
    stat4Label: "Emergency Support",
    image: "/images/hirecar-marketplace.svg",
    photoUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Single marketplace relationship servicing all your personal and corporate Australian travel",
      "Access vehicles suited for extreme Australian temperatures and unsealed regional roads",
      "Consistent booking terms and reliable customer support regardless of depot location",
      "Support local Australian family-owned businesses and regional fleet operators",
    ],
  },
};
