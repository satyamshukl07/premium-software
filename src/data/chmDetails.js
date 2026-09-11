// Complete, production-grade content for all CHM cards and operational modules
export const chmDetails = {
  // ==========================================
  // CHM - PRODUCT OVERVIEW
  // ==========================================
  'chm': {
    title: "Car Hire Manager (CHM)",
    subtitle: "Australia's Smart Cloud Operating System for Modern Car Rental Businesses",
    tag: "Rental Operations SaaS",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Manage bookings, vehicles, customers, billing, and rental operations from one powerful cloud-based platform built specifically for Australian car hire operators.",
    overview:
      "Car Hire Manager (CHM) is the enterprise car rental management console engineered to automate day-to-day depot operations. From live fleet availability and automated Linkt toll notice billing to digital driver KYC and Stripe deposit holds, CHM streamlines your entire rental lifecycle.",
    problemSolved:
      "Car rental operators lose thousands in unpaid toll fines, suffer from fragmented spreadsheets, experience double-bookings, and spend hours chasing manual bond refunds and damage disputes. CHM unifies everything into one real-time cloud dispatch system.",
    whoItsFor:
      "Car rental business owners, fleet dispatchers, depot managers, airport shuttle hire operations, and commercial vehicle leasing companies.",
    howItWorks: [
      { step: "01", title: "Live Dispatch", desc: "Monitor vehicles on an interactive depot timeline showing active hires, upcoming handovers, and cleanings." },
      { step: "02", title: "Instant Check-In", desc: "Verify driver licences via mobile OCR, lock digital pre-authorization bonds, and capture damage photos." },
      { step: "03", title: "Automated Tolls & Returns", desc: "Sync Linkt/EastLink toll trips directly to renter invoices and release bonds automatically." },
    ],
    bullets: [
      "Real-time fleet availability calendar tracking bookings, maintenance holds, and vehicle cleaning turnarounds",
      "Automated Linkt & EastLink toll notice matching—recover 100% of toll charges without manual paperwork",
      "Digital driver license verification with instant optical character recognition (OCR) and document archiving",
      "Integrated Stripe pre-authorization security bonds with automated release timers upon vehicle return",
    ],
    features: [
      { title: "Visual Dispatch Timeline", desc: "Drag-and-drop booking scheduling across multi-depot vehicle fleets." },
      { title: "Automated Toll Recovery", desc: "Direct API integration with Australian toll road operators." },
      { title: "Mobile Vehicle Inspections", desc: "Timestamped photo check-in/check-out logs to prevent damage disputes." },
      { title: "Recurring Invoicing", desc: "Automated weekly and monthly billing cycles for long-term commercial hires." },
    ],
    stat1: "100%",
    stat1Label: "Toll Recovery Rate",
    stat2: "99.9%",
    stat2Label: "Platform Uptime",
    stat3: "< 2 min",
    stat3Label: "Renter Onboarding Speed",
    stat4: "35%",
    stat4Label: "Admin Time Saved Weekly",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminates toll notice fines and lost council parking ticket revenues",
      "Direct sync with MEX CMMS for scheduled fleet servicing and roadworthy checks",
      "Cloud-hosted in Australian data centers with high-speed encryption and automated backups",
      "Zero software installation required—runs smoothly on tablet, mobile, and desktop browsers",
    ],
  },
  'car-hire-manager': {
    redirect: 'chm'
  },

  // ==========================================
  // CHM - 6 SOLUTION CARDS
  // ==========================================
  'fleet-management': {
    title: "Fleet Management",
    subtitle: "Real-Time Fleet Status, Availability & Vehicle Lifecycle Tracking",
    tag: "Fleet Management",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Track every vehicle in your fleet with real-time status updates, maintenance scheduling, and location tracking across all depots.",
    overview:
      "Maintain a total command view of your vehicle assets. CHM tracks odometer logs, rego expiry dates, mandatory pink/blue slip inspections, and service intervals while showing which cars are on rent, in cleaning, or ready for dispatch.",
    problemSolved:
      "Vehicles sitting idle in depots without visibility, missed registration renewals leading to heavy fines, and untracked maintenance causing breakdown risks.",
    whoItsFor:
      "Fleet operations managers, workshop coordinators, and multi-depot supervisors managing from 10 to 1,000+ rental units.",
    howItWorks: [
      { step: "01", title: "Register Assets", desc: "Input VIN, rego, make, model, service thresholds, and depot assignment." },
      { step: "02", title: "Live Status Tracking", desc: "Monitor statuses: Available, On Hire, In Transit, Cleaning, or In Maintenance." },
      { step: "03", title: "Automated Alerts", desc: "Receive automated alerts 30 days prior to registration and insurance expiries." },
    ],
    bullets: [
      "Comprehensive digital vehicle dossiers recording full service history, damage records, and odometer logs",
      "Automated maintenance lockout flags preventing unroadworthy vehicles from being assigned to bookings",
      "Multi-depot transfer tracking with estimated transit times and driver delivery assignments",
      "Real-time asset utilization rates by vehicle category, fuel type, and regional depot",
    ],
    features: [
      { title: "Status Board", desc: "Visual color-coded tags for Available, On Hire, Maintenance, and Cleaning." },
      { title: "Rego & Insurance Alerts", desc: "Automated notifications before statutory registrations expire." },
      { title: "Service Interval Lockouts", desc: "Trigger maintenance stops automatically based on kilometer thresholds." },
      { title: "Depot Balancing", desc: "Transfer vehicle units between high-demand airport depots and suburban hubs." },
    ],
    stat1: "100%",
    stat1Label: "Fleet Visibility",
    stat2: "0",
    stat2Label: "Missed Rego Renewals",
    stat3: "92%+",
    stat3Label: "Target Fleet Utilization",
    stat4: "Real-time",
    stat4Label: "Odometer Tracking",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Protect asset values with strict preventive maintenance schedules",
      "Optimize vehicle turnaround times between rental handovers",
      "Reduce idle capital by identifying under-performing fleet models",
      "Seamless integration with 4G GPS telematics for live location pings",
    ],
  },

  'booking-management': {
    title: "Booking Management",
    subtitle: "End-to-End Reservation Lifecycle & Drag-and-Drop Calendar Scheduling",
    tag: "Booking Engine",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Streamline bookings from initial inquiry to final return with intuitive calendar scheduling, automated confirmations, and booking modification controls.",
    overview:
      "Handle reservations from walk-ins, phone inquiries, website integrations, and corporate accounts on a unified calendar grid. Modify dates, swap vehicles, apply promo codes, and process extension requests in seconds.",
    problemSolved:
      "Double-bookings, scheduling conflicts, lost reservations on paper desk pads, and slow check-in queues at collection desks.",
    whoItsFor:
      "Reservation agents, front-desk staff, and customer service teams managing peak holiday and airport rush periods.",
    howItWorks: [
      { step: "01", title: "Create or Ingest", desc: "Accept direct online bookings or input customer details via the rapid 60-second wizard." },
      { step: "02", title: "Smart Allocation", desc: "System suggests the best vehicle based on turnaround cleaning and proximity." },
      { step: "03", title: "Instant Confirmation", desc: "Send branded PDF contracts, SMS reminders, and key collection instructions." },
    ],
    bullets: [
      "Intuitive Gantt-style dispatch calendar displaying all active, upcoming, and completed reservations",
      "One-click vehicle reassignment and booking extension controls with automatic rate prorating",
      "Automated customer SMS and email reminders prior to pickup and return cutoff times",
      "Support for multi-vehicle corporate bookings and long-term recurring rental agreements",
    ],
    features: [
      { title: "Drag-and-Drop Calendar", desc: "Effortlessly adjust dates, extend hires, and shift cars across bays." },
      { title: "Automated SMS Confirmations", desc: "Keep customers informed with pickup instructions and depot map links." },
      { title: "One-Click Extensions", desc: "Extend active hires and charge incremental days with a single click." },
      { title: "Custom Add-on Packages", desc: "Upsell GPS units, child seats, additional drivers, and reduced excess waivers." },
    ],
    stat1: "< 60s",
    stat1Label: "Reservation Entry Time",
    stat2: "0",
    stat2Label: "Double-Booking Errors",
    stat3: "99.8%",
    stat3Label: "Booking Schedule Accuracy",
    stat4: "Instant",
    stat4Label: "Customer Email Confirmations",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate customer wait times at the rental counter",
      "Capture maximum revenue during peak holiday rental seasons",
      "Maintain a clear visual timeline of expected vehicle returns",
      "Automate extension billing without requiring the renter to return to the desk",
    ],
  },

  'customer-management': {
    title: "Customer Management",
    subtitle: "Centralized Customer CRM, Digital KYC & Licence Verification",
    tag: "Customer CRM",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Maintain detailed customer records, verify driver licences, track rental history, and build lasting customer relationships.",
    overview:
      "Build a complete 360-degree profile for every driver. Store Australian and international licences, digital signatures, contact details, payment methods on file, past rental histories, and internal trust ratings.",
    problemSolved:
      "Renting vehicles to high-risk or disqualified drivers, losing customer contact details, and manual repetitive data entry for returning drivers.",
    whoItsFor:
      "Risk assessment teams, front-counter staff, and customer relationship managers seeking repeat corporate accounts.",
    howItWorks: [
      { step: "01", title: "Scan Licence", desc: "Capture driver's licence via smartphone camera or counter webcam for instant OCR text extraction." },
      { step: "02", title: "Profile Creation", desc: "System creates a secure customer card with contact details, age verification, and expiry dates." },
      { step: "03", title: "Trust & Risk Flags", desc: "Record internal notes regarding driving behavior, punctuality, or blacklisted status." },
    ],
    bullets: [
      "Instant optical character recognition (OCR) extracting name, address, DOB, and licence number accurately",
      "Internal customer tagging: VIP, Corporate, Good Standing, or Blacklisted / Risk Alert",
      "Complete rental timeline showing every past trip, vehicle driven, and payment invoice",
      "Encrypted cloud document vault storing signed rental agreements and insurance waivers",
    ],
    features: [
      { title: "Instant Licence OCR", desc: "Extract driver details in seconds without manual keyboard typing errors." },
      { title: "Risk & Blacklist Warning", desc: "Prevent unauthorized or high-risk drivers from renting high-value assets." },
      { title: "Corporate Account Profiles", desc: "Manage company billing entities with multiple authorized employee drivers." },
      { title: "One-Click Repeat Booking", desc: "Returning customers check out instantly without re-submitting documentation." },
    ],
    stat1: "< 10s",
    stat1Label: "Licence Verification Time",
    stat2: "100%",
    stat2Label: "Document Digital Archiving",
    stat3: "Secure",
    stat3Label: "Encrypted Privacy Storage",
    stat4: "Instant",
    stat4Label: "Repeat Customer Recognition",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Comply with state law requirements to verify driving licences",
      "Shield your fleet against fraudulent identities and stolen cards",
      "Speed up handovers for loyal corporate business clients",
      "Maintain an auditable trail of driver records for police toll and speed camera inquiries",
    ],
  },

  'financial-management': {
    title: "Financial Management",
    subtitle: "Automated Invoicing, Bond Holds, Toll Recovery & Accounting Sync",
    tag: "Financial Operations",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Handle payments, security deposits, toll charges, additional fees, and invoice generation with automated financial workflows.",
    overview:
      "CHM transforms car hire accounting into a seamless, automated flow. Integrated with Stripe and leading payment gateways, it manages pre-authorized security bond holds, automatic toll deductions, late return penalties, and syncs directly to Xero and MYOB.",
    problemSolved:
      "Unpaid toll charges eating into operational profits, forgotten bond releases causing angry chargebacks, and hours spent manually creating PDF invoices.",
    whoItsFor:
      "Financial controllers, accountants, bookkeepers, and rental business owners wanting transparent cash flow control.",
    howItWorks: [
      { step: "01", title: "Pre-Auth Bond Hold", desc: "Pre-authorize customer credit card for security bond (e.g., $500–$2,000) upon vehicle pickup." },
      { step: "02", title: "Automatic Toll Deductions", desc: "Linkt API pulls all toll trips during rental and automatically adds them to the customer's ledger." },
      { step: "03", title: "Automated Settlement", desc: "Finalize charges on return, deduct fuel or toll charges, and release remaining bond balance." },
    ],
    bullets: [
      "Stripe payment gateway integration supporting Visa, Mastercard, AMEX, and digital wallet tokens",
      "Automated Linkt and EastLink toll matching by vehicle registration and trip timestamps",
      "Direct two-way synchronization with Xero and MYOB for automated reconciliation and chart of accounts",
      "Detailed financial reporting by vehicle ROI, depreciation, revenue per day, and depot profitability",
    ],
    features: [
      { title: "Automated Toll Invoicing", desc: "Bill renters for exact toll road trips with automated administration fees." },
      { title: "Pre-Auth Security Bonds", desc: "Hold security deposits without incurring interchange fees until captured." },
      { title: "Xero & MYOB Live Sync", desc: "Reconcile daily payments and sales invoices with your business accounting system." },
      { title: "Fleet Profitability Reports", desc: "Track earnings, maintenance expenses, and net profit for every individual car." },
    ],
    stat1: "100%",
    stat1Label: "Toll Fee Recovery",
    stat2: "Real-time",
    stat2Label: "Xero / MYOB Sync",
    stat3: "$0",
    stat3Label: "Unrecovered Bond Claims",
    stat4: "24/7",
    stat4Label: "Automated Payment Processing",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Zero missed toll payments or unpaid road authority fines",
      "Eliminate manual bank reconciliation and spreadsheet bookkeeping",
      "Instant clarity on which vehicle models generate the highest return on investment",
      "Automated professional tax invoices sent to renters upon checkout",
    ],
  },

  'rental-operations': {
    title: "Rental Operations",
    subtitle: "Seamless Turnaround Workflows, Vehicle Inspection Logs & Depot Logistics",
    tag: "Depot Operations",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Manage daily depot operations including vehicle check-in and check-out, condition reporting, and team task assignments.",
    overview:
      "Keep depot yards running like clockwork. CHM coordinates key handovers, vehicle staging, detailing, and fuel top-ups so cars spend less time parked in the yard and more time on the road earning revenue.",
    problemSolved:
      "Bottlenecks at the detail bay, customer disputes over existing scratch marks, and lack of visibility into vehicle turnaround readiness.",
    whoItsFor:
      "Yard managers, detailing teams, vehicle inspectors, and customer service staff managing fast vehicle turnarounds.",
    howItWorks: [
      { step: "01", title: "Digital Condition Log", desc: "Inspect vehicle with smartphone, mark existing scratches on a 3D diagram, and snap photos." },
      { step: "02", title: "Renter Digital Sign-off", desc: "Renter acknowledges fuel level, odometer reading, and existing condition on screen." },
      { step: "03", title: "Return Inspection", desc: "Inspect on return, compare photos instantly, and flag new damage or missing fuel." },
    ],
    bullets: [
      "Interactive 3D vehicle damage diagram allowing technicians to pinpoint scratches, dents, and paint chips",
      "Mandatory high-resolution photo check-in/check-out logs with GPS and timestamp verification",
      "Yard management task queue for vehicle detailing, fuel top-up, and mechanical safety checks",
      "Automated fuel calculation charging renters for missing liters based on current pump prices",
    ],
    features: [
      { title: "Digital Damage Diagram", desc: "Pinpoint scratches and dents on visual car diagrams to prevent disputes." },
      { title: "Timestamped Photo Proof", desc: "Capture 8-point exterior photos verified by immutable date and time stamps." },
      { title: "Turnaround Task Queue", desc: "Notify detailing bays immediately when a vehicle returns for wash and vacuum." },
      { title: "Fuel Level Gauge Tracking", desc: "Calculate missing fuel charges accurately based on tank eighths." },
    ],
    stat1: "100%",
    stat1Label: "Dispute Proof Records",
    stat2: "15 min",
    stat2Label: "Average Cleaning Turnaround",
    stat3: "8-Point",
    stat3Label: "Photo Verification Routine",
    stat4: "0",
    stat4Label: "Paper Inspection Clipboards",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate customer disputes over pre-existing vehicle wear and tear",
      "Turn vehicles around faster to maximize utilization on high-demand days",
      "Clean, mobile-optimized inspection interface works on any smartphone",
      "Full audit trail for insurance claims and police correspondence",
    ],
  },

  'business-analytics': {
    title: "Business Analytics",
    subtitle: "Real-Time KPI Dashboards, Fleet Utilization Metrics & Revenue Trends",
    tag: "Analytics & BI",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Gain actionable operational insights into fleet utilization, revenue performance, and customer trends to drive profitable business growth.",
    overview:
      "Transform operational data into strategic decisions. CHM's analytics suite delivers real-time visibility into revenue per available car (RevPAC), average daily rate (ADR), depot occupancy, customer acquisition channels, and seasonal booking patterns.",
    problemSolved:
      "Operating blind without knowing true vehicle profitability, guessing optimal seasonal pricing, and failing to detect underperforming car classes.",
    whoItsFor:
      "Managing directors, chief financial officers, and fleet acquisition strategists planning capital expenditure.",
    howItWorks: [
      { step: "01", title: "Continuous Data Capture", desc: "CHM tracks every kilometer driven, dollar earned, and hour spent in maintenance." },
      { step: "02", title: "Real-Time KPI Dashboards", desc: "View interactive charts showing utilization %, revenue trends, and operational costs." },
      { step: "03", title: "Actionable Insights", desc: "Identify which car categories deliver the highest profit margin and adjust procurement." },
    ],
    bullets: [
      "Live KPI cards: Revenue per Available Vehicle (RevPAC), Fleet Occupancy %, and Average Daily Rate (ADR)",
      "Depot-by-depot performance comparison highlighting top-performing branches and regional trends",
      "Expense tracking per vehicle including maintenance repairs, tire replacements, and insurance overheads",
      "Automated scheduled executive email reports delivered weekly or monthly in PDF format",
    ],
    features: [
      { title: "RevPAC & ADR Tracking", desc: "Monitor daily financial benchmarks to optimize fleet pricing yield." },
      { title: "Occupancy Rate Gauges", desc: "Identify surplus capacity and run targeted discount campaigns." },
      { title: "Vehicle Lifecycle ROI", desc: "Know the exact total profit generated by each vehicle over its lifespan." },
      { title: "Automated Executive Reports", desc: "Receive summary management reports delivered to your inbox every Monday." },
    ],
    stat1: "Real-time",
    stat1Label: "Financial & KPI Reporting",
    stat2: "30+",
    stat2Label: "Pre-Built Operational Metrics",
    stat3: "100%",
    stat3Label: "Data Accuracy",
    stat4: "Custom",
    stat4Label: "Date Range & Export Options",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Make data-backed fleet purchasing and decommissioning decisions",
      "Identify seasonal demand spikes to adjust pricing tiers proactively",
      "Compare depot profitability to reward top-performing branch staff",
      "Export clean CSV and Excel files for boardroom and investor presentations",
    ],
  },

  // ==========================================
  // CHM - 6 OPERATIONAL IMPACT CARDS
  // ==========================================
  'manage-vehicles': {
    title: "Manage Vehicles",
    subtitle: "Complete Digital Ledger for Every Asset in Your Fleet",
    tag: "Asset Control",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description: "Maintain a complete view of your entire vehicle inventory, registration statuses, and maintenance health.",
    overview: "Centralize vehicle VINs, registration tags, insurance schedules, and service intervals into one unified cloud dashboard.",
    problemSolved: "Disorganized paperwork, untracked registration renewals, and unknown fleet conditions.",
    whoItsFor: "Fleet supervisors and depot managers overseeing commercial rental vehicles.",
    bullets: [
      "Detailed asset dossiers recording full vehicle history and equipment options",
      "Automated reminders 30 days prior to registration and inspection expiries",
      "Depot assignment tracking for smooth vehicle distribution across branches",
      "Direct link with workshop repair work orders for rapid maintenance turnaround",
    ],
    features: [
      { title: "Digital Vehicle Ledger", desc: "Store rego, insurance, and maintenance records securely." },
      { title: "Automatic Expiry Warnings", desc: "Never let statutory vehicle registrations lapse." },
      { title: "Odometer & Fuel Tracking", desc: "Keep accurate records of kilometers driven and fuel consumed." },
      { title: "Depot Relocation Tracking", desc: "Monitor vehicles transferring between airport and city depots." },
    ],
    stat1: "100%", stat1Label: "Vehicle Health Tracking",
    stat2: "0", stat2Label: "Registration Lapses",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
  },

  'manage-bookings': {
    title: "Manage Bookings",
    subtitle: "Fast, Error-Free Reservation Dispatch Across All Channels",
    tag: "Reservation Flow",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description: "Schedule, modify, and manage bookings effortlessly with real-time visual calendar controls.",
    overview: "Take command of reservations across all customer channels. Avoid double bookings and process changes in seconds.",
    problemSolved: "Lost reservation notes, double-booked units, and slow check-in desk queues.",
    whoItsFor: "Desk agents, booking dispatchers, and customer service staff.",
    bullets: [
      "Visual timeline scheduling with drag-and-drop booking adjustments",
      "Instant rate calculation factoring in peak seasonal surcharges and promo codes",
      "Automated confirmation emails and SMS booking vouchers with depot directions",
      "Real-time visibility into vehicle cleaning and return turnaround schedules",
    ],
    features: [
      { title: "Visual Dispatch Timeline", desc: "See all active and upcoming bookings on one intuitive timeline." },
      { title: "Instant Rate Calculation", desc: "Automate daily, weekly, and monthly rates with custom discounts." },
      { title: "Booking Confirmation Alerts", desc: "Send automated SMS and email reminders to renters." },
      { title: "Fast Extension Processing", desc: "Extend customer trips with instant pro-rata payment deductions." },
    ],
    stat1: "< 60s", stat1Label: "Booking Entry",
    stat2: "0", stat2Label: "Schedule Overlaps",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },

  'manage-customers': {
    title: "Manage Customers",
    subtitle: "Streamlined Driver Profiles, Identity Records & Rental History",
    tag: "Customer Database",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description: "Keep customer details, driver licences, and rental histories organized in a secure, searchable CRM.",
    overview: "Store customer verification records securely. Recognize repeat corporate customers instantly to deliver rapid key handovers.",
    problemSolved: "Tedious paperwork, lost driver details, and renting to banned or high-risk individuals.",
    whoItsFor: "Counter staff and credit risk officers managing rental approvals.",
    bullets: [
      "Digital driver license scan and OCR text recognition for fast check-in",
      "Customer history log showing past bookings, incident notes, and payments",
      "Internal risk flagging system to block high-risk or disqualified drivers",
      "Corporate account management with multiple authorized company drivers",
    ],
    features: [
      { title: "Digital Licence Archive", desc: "Encrypted storage of driver documents and signed agreements." },
      { title: "Repeat Customer Fast-Track", desc: "Returning customers check out without re-filling forms." },
      { title: "Blacklist Risk Shield", desc: "Alert staff if a disqualified driver attempts to rent." },
      { title: "Corporate Account Billing", desc: "Manage monthly corporate billing contracts easily." },
    ],
    stat1: "< 10s", stat1Label: "Licence OCR Verification",
    stat2: "100%", stat2Label: "Secure Cloud Storage",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
  },

  'monitor-operations': {
    title: "Monitor Operations",
    subtitle: "Real-Time Depot Status, Cleaning Turnarounds & Active Dispatches",
    tag: "Live Monitoring",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description: "Keep track of daily depot operations, vehicle staging, and turnaround progress in real time.",
    overview: "Maintain total operational visibility over every department. Ensure detail bays wash cars on time and check-in teams process handovers promptly.",
    problemSolved: "Unknown depot delays, dirty cars waiting during customer arrivals, and chaotic turnaround handovers.",
    whoItsFor: "Depot supervisors, yard hands, and detailing staff.",
    bullets: [
      "Live depot status board tracking vehicles returning within the hour",
      "Cleaning queue alerts prioritizing vehicles with upcoming reservations",
      "Maintenance handover alerts sending cars directly to mechanic bays",
      "Mobile team task management accessible on depot smartphones and tablets",
    ],
    features: [
      { title: "Depot Status Board", desc: "Live overview of today's pickups, returns, and cleans." },
      { title: "Turnaround Priority Queue", desc: "Flag cars needed urgently for upcoming afternoon handovers." },
      { title: "Mobile Depot Dashboard", desc: "Inspect and update vehicle status on the yard floor." },
      { title: "Key Handover Checklist", desc: "Verify identity and digital signatures before handing over keys." },
    ],
    stat1: "Live", stat1Label: "Real-Time Updates",
    stat2: "15 min", stat2Label: "Faster Yard Turnarounds",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
  },

  'improve-visibility': {
    title: "Improve Visibility",
    subtitle: "Unified Transparency Across Vehicles, Costs, Tolls, and Earnings",
    tag: "Clarity & Control",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description: "Gain clarity over rental activity, upcoming handovers, and fleet performance across all depots.",
    overview: "Break down operational silos. Connect dispatch, customer service, billing, and fleet maintenance into a single source of truth.",
    problemSolved: "Information scattered across paper clipboards, email inboxes, and isolated spreadsheets.",
    whoItsFor: "Business owners, branch managers, and operational directors.",
    bullets: [
      "Single centralized platform uniting bookings, vehicle health, and accounting",
      "Cross-depot visibility allowing managers to balance stock between locations",
      "Automated toll integration matching Linkt trips with active rental agreements",
      "Clear financial dashboards highlighting outstanding balances and bond holds",
    ],
    features: [
      { title: "Cross-Depot Dashboard", desc: "View all branches from a single unified management login." },
      { title: "Integrated Linkt Tolls", desc: "Never lose track of toll trips or road camera notices." },
      { title: "Live Financial Clarity", desc: "Know exact daily revenue, pending charges, and bond releases." },
      { title: "Audit Trail Logging", desc: "Track every edit, date change, and user sign-off." },
    ],
    stat1: "100%", stat1Label: "Unified Data View",
    stat2: "0", stat2Label: "Disconnected Spreadsheets",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },

  'make-better-business-decisions': {
    title: "Make Better Business Decisions",
    subtitle: "Data-Driven Fleet Expansion, Pricing Yield & Profit Optimization",
    tag: "Strategic Growth",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description: "Use actionable analytics and financial insights to optimize your fleet and scale your business.",
    overview: "Leverage historical and real-time operational data to price competitively, procure the highest-ROI vehicles, and trim wasted operational expenses.",
    problemSolved: "Uninformed vehicle purchases, underpriced holiday rates, and invisible operational leaks.",
    whoItsFor: "Executive leadership, business partners, and fleet investors.",
    bullets: [
      "Analyze historical booking demand to optimize seasonal holiday pricing curves",
      "Compare vehicle maintenance costs vs rental revenue to time fleet replacements",
      "Evaluate marketing channels and corporate partner performance accurately",
      "Forecast fleet capacity needs 3 to 6 months in advance with predictive trends",
    ],
    features: [
      { title: "Dynamic Pricing Guidance", desc: "Maximize revenue during peak holiday rental windows." },
      { title: "Vehicle Replacement Timers", desc: "Decommission vehicles before major maintenance costs peak." },
      { title: "Partner ROI Analytics", desc: "Track performance from corporate accounts and travel agents." },
      { title: "Predictive Capacity Planning", desc: "Know when to acquire more units to meet forecasted demand." },
    ],
    stat1: "25%+", stat1Label: "Typical Profit Boost",
    stat2: "Data-Backed", stat2Label: "Fleet Purchasing Insight",
    image: "/images/chm-dashboard.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
};
