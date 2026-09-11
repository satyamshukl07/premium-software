// Dedicated card details for CHM inner modules & functional pages
export const chmExtraDetails = {
  'chm-dashboard': {
    title: "CHM Master Operations Dashboard",
    subtitle: "Real-Time Fleet Availability, Active Check-outs, Revenue & Live Utilisation Metrics",
    tag: "Control Center",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "A unified, real-time command center giving rental depot managers complete control over vehicle check-outs, return schedules, fleet utilisation rates, and daily revenue streams.",
    overview:
      "Running a multi-depot car rental enterprise requires constant visibility. The CHM Master Dashboard aggregates all operational telemetry into an intuitive, high-contrast visual display. Monitor live vehicle turnarounds, track customer identity verification statuses, spot unreturned cars with automated overdue alerts, and compare month-to-date rental revenues against target benchmarks.",
    problemSolved:
      "Scattered spreadsheets, delayed knowledge of overdue vehicles, blind spots in daily fleet utilisation, and slow counter turnarounds during morning peak rushes.",
    whoItsFor:
      "Rental depot managers, fleet operations directors, regional car hire supervisors, and independent rental business owners.",
    howItWorks: [
      { step: "01", title: "Live Fleet Rollup", desc: "Instantly view how many vehicles are currently on hire, reserved, undergoing wash bays, or scheduled for service." },
      { step: "02", title: "Operational Action Cards", desc: "Prioritize pending check-outs, overdue returns, and security bond release authorizations." },
      { step: "03", title: "Financial Performance KPI", desc: "Track daily rental billings, toll recoveries, and average revenue per available day (RevPAC)." },
    ],
    bullets: [
      "Real-time operational overview with sub-second status refreshes across all depot branches",
      "Immediate visual warnings for overdue vehicle returns and expired customer rental contracts",
      "One-click drilldown from aggregate fleet KPIs straight into individual booking agreements",
      "Integrated key management tracking which staff member performed vehicle dispatch or intake",
    ],
    features: [
      { title: "Fleet Utilisation Gauge", desc: "Live percentage measurement tracking active vehicles on hire vs total fleet capital." },
      { title: "Turnaround Pipeline", desc: "Stage-by-stage visual tracking from customer return, valet wash, mechanical check, to ready-line." },
      { title: "Overdue Alerts & Telematics", desc: "Instant SMS/email alerts when vehicles fail to return by scheduled drop-off times." },
      { title: "Multi-Depot Switcher", desc: "Seamlessly toggle between airport terminals and suburban branches with filtered views." },
    ],
    stat1: "Sub-second",
    stat1Label: "Live Data Refresh",
    stat2: "100%",
    stat2Label: "Fleet Visibility",
    stat3: "Zero",
    stat3Label: "Untracked Overdues",
    stat4: "30%",
    stat4Label: "Faster Check-in Times",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate morning desk chaos with prioritized daily dispatch schedules",
      "Empower counter staff with immediate answers on car readiness",
      "Identify underperforming vehicle categories sitting idle on the lot",
      "Direct integration with accounting, tolling, and GPS tracking hardware",
    ],
  },
  'dashboard': {
    redirect: 'chm-dashboard'
  },

  'fleet-status': {
    title: "Live Fleet Status & Yard Inventory",
    subtitle: "Visual Yard Availability, Vehicle Servicing Tracking & Cleaning Pipeline",
    tag: "Yard Management",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Organize, filter, and inspect every vehicle in your fleet with visual yard maps, mechanical status flags, fuel levels, and valet wash pipelines.",
    overview:
      "Knowing the exact physical condition and readiness of every vehicle in your lot prevents counter staff from promising cars that are dirty, undergoing mechanical repair, or missing required accessories. CHM Fleet Status delivers interactive yard filtering by vehicle category, transmission type, fuel level, and mechanical inspection status.",
    problemSolved:
      "Assigning dirty or broken cars to arriving customers, lost keys, untracked parking bay positions, and unnecessary duplicate maintenance dispatches.",
    whoItsFor:
      "Yard coordinators, counter dispatchers, detailing teams, and fleet maintenance technicians.",
    howItWorks: [
      { step: "01", title: "Visual Yard Filter", desc: "Filter by bay number, vehicle class (SUV, Sedan, Ute), or operational state (Ready, Wash, Hold)." },
      { step: "02", title: "Digital Check-in Inspection", desc: "Inspect returning cars with mobile tablets: log fuel level, odometer, and photographic condition." },
      { step: "03", title: "Automated Re-staging", desc: "System updates vehicle to 'Ready for Rental' once valet detailing is digitally marked complete." },
    ],
    bullets: [
      "Color-coded operational statuses: Available, On Hire, Valet Wash, Mechanical Service, and Defect Hold",
      "Digital fuel gauge and odometer tracking automatically updated from OBD-II telematics or mobile check-in",
      "High-resolution damage photo capture timestamped to protect operators against disputed scratches",
      "Bay allocation mapping ensuring counter staff send renters to the exact parking spot",
    ],
    features: [
      { title: "Interactive Yard Board", desc: "Drag-and-drop vehicles between Wash Bay, Ready Line, and Mechanical Service." },
      { title: "Mobile Photo Condition Audit", desc: "360-degree digital damage logging protecting both operator and renter." },
      { title: "Telematics Fuel Sync", desc: "Read exact fuel percentage directly from vehicle CAN-bus to automate refuelling charges." },
      { title: "Accessory & Tag Assignment", desc: "Track child seats, roof pods, and portable GPS units linked to specific vehicle chassis." },
    ],
    stat1: "Real-time",
    stat1Label: "Status Tracking",
    stat2: "100%",
    stat2Label: "Photographic Audit Trail",
    stat3: "15 min",
    stat3Label: "Average Wash-to-Line Time",
    stat4: "Zero",
    stat4Label: "Unreported Dents",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Never accidentally dispatch a vehicle scheduled for urgent brake or tire service",
      "Streamline wash bay throughput during heavy airport flight arrival peaks",
      "Speed up counter handovers with instant bay location directions",
      "Retain indisputable photographic evidence of pre-rental vehicle condition",
    ],
  },

  'recurring-booking': {
    title: "Recurring & Corporate Subscription Bookings",
    subtitle: "Automated Monthly Billing, Scheduled Vehicle Swaps & Corporate Fleet Accounts",
    tag: "Subscription Engine",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Automate multi-month corporate hires, long-term fleet leases, recurring credit card billings, and scheduled maintenance swap-outs with zero manual administration.",
    overview:
      "Long-term vehicle rentals and corporate fleet subscriptions generate stable, high-margin monthly recurring revenue. However, managing them manually with daily contracts results in billing errors, expired insurance bonds, and missed routine oil services. CHM Recurring Bookings automates the entire lifecycle: automatic monthly invoicing, recurring Stripe/direct-debit charging, and automated maintenance swaps every 10,000 kilometers.",
    problemSolved:
      "Stalled cash flow from forgotten monthly contract renewals, expired credit card payment failures, and severe engine damage caused by unserviced long-term rental cars.",
    whoItsFor:
      "Commercial fleet leasing companies, corporate account managers, insurance replacement coordinators, and rideshare fleet providers.",
    howItWorks: [
      { step: "01", title: "Setup Corporate Agreement", desc: "Establish customer billing profile, agreed monthly rate, mileage cap, and rollover schedule." },
      { step: "02", title: "Automated Recurring Billing", desc: "System auto-generates Australian tax invoices and charges stored payment credentials on schedule." },
      { step: "03", title: "Smart Fleet Rotation", desc: "Automate reminders to rotate vehicles as service intervals approach, ensuring zero downtime." },
    ],
    bullets: [
      "Automated 28-day or calendar monthly billing schedules with automated credit card retry logic",
      "Built-in mileage tracking alerting operators when long-term vehicles approach warranty or service caps",
      "Corporate portal access allowing business clients to review all vehicles on hire across their company",
      "Seamless integration with Australian accounting platforms (Xero, MYOB) for automated reconciliation",
    ],
    features: [
      { title: "Automated Card Retries", desc: "Smart dunning algorithms re-attempt failed monthly transactions and notify accounting." },
      { title: "Scheduled Vehicle Swaps", desc: "Schedule replacement vehicles for corporate drivers when routine services are due." },
      { title: "Custom Corporate Rate Cards", desc: "Assign tiered pricing discounts, fuel policies, and insurance terms to corporate clients." },
      { title: "Consolidated Monthly Invoicing", desc: "Aggregate 10+ vehicles hired by a single corporate client into one itemized monthly statement." },
    ],
    stat1: "100%",
    stat1Label: "Automated Invoicing",
    stat2: "0",
    stat2Label: "Missed Service Intervals",
    stat3: "98%",
    stat3Label: "On-Time Card Collection",
    stat4: "28-Day",
    stat4Label: "Flexible Cycle Options",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Lock in predictable, multi-month revenue streams from corporate business clients",
      "Free counter staff from manually re-generating contracts every 30 days",
      "Maintain flawless fleet service histories even on extended 12-month rentals",
      "Provide corporate clients with transparent, audit-ready travel tax invoices",
    ],
  },
  'recurring': {
    redirect: 'recurring-booking'
  },

  'calendar-scheduling': {
    title: "Interactive Fleet Calendar & Visual Gantt Chart",
    subtitle: "Drag-and-Drop Reservations, Gap Optimization & Double-Booking Prevention",
    tag: "Visual Dispatch",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Visualize your entire fleet schedule on a high-density Gantt chart. Drag-and-drop bookings, eliminate unutilized calendar gaps, and prevent double-booking conflicts.",
    overview:
      "Maximizing revenue in vehicle rental depends on high fleet utilisation. Leaving 2-day or 3-day unbooked gaps between reservations costs thousands in lost potential revenue. The CHM Interactive Fleet Calendar provides a real-time, drag-and-drop Gantt chart displaying every vehicle alongside its scheduled hires, returns, and maintenance blocks. Instantly reassign bookings to optimize utilization.",
    problemSolved:
      "Accidental double bookings during holiday rushes, unutilized idle gaps between hires, and inability to visualize multi-week fleet commitments.",
    whoItsFor:
      "Fleet schedulers, depot booking managers, reservation desk agents, and customer service leads.",
    howItWorks: [
      { step: "01", title: "Visual Timeline View", desc: "View every vehicle organized by category on a horizontal day, week, or month timeline." },
      { step: "02", title: "Drag-and-Drop Adjustments", desc: "Move reservations between vehicles of the same category with automatic collision checks." },
      { step: "03", title: "Fill Utilization Gaps", desc: "Spot unbooked 1 to 3 day windows and target them with promotional flash rates." },
    ],
    bullets: [
      "High-performance interactive Gantt chart rendering hundreds of vehicles smoothly",
      "Automatic collision prevention instantly blocks attempts to assign a vehicle to overlapping dates",
      "Color-coded reservation tags: Confirmed (Green), Pending Bond (Amber), On Road (Blue), and Service (Red)",
      "Instant 1-click modal to view customer details, flight numbers, and rental contract terms",
    ],
    features: [
      { title: "Multi-Week Timeline Scrubbing", desc: "Effortlessly scrub forward to plan for Easter, Christmas, and school holiday fleet demand." },
      { title: "Category Substitution Logic", desc: "Easily provide free customer upgrades (e.g., Compact to SUV) when availability is tight." },
      { title: "Maintenance Reservation Blocks", desc: "Block vehicles for planned mechanical servicing directly on the reservation grid." },
      { title: "Real-Time WebSocket Sync", desc: "Changes made by counter agents update instantly across all office computer screens." },
    ],
    stat1: "100%",
    stat1Label: "Double-Booking Prevention",
    stat2: "+18%",
    stat2Label: "Fleet Utilisation Uplift",
    stat3: "Real-Time",
    stat3Label: "WebSocket Collaboration",
    stat4: "1-Click",
    stat4Label: "Booking Reassignment",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate customer anger caused by arriving to find their reserved car is unavailable",
      "Maximize daily rental revenue by tightly packing reservation schedules",
      "Coordinate between multiple depot branches when transferring fleet to meet demand",
      "Clear visual indicators for pending customer licence verifications",
    ],
  },
  'calendar': {
    redirect: 'calendar-scheduling'
  },

  'financial-insights': {
    title: "Financial Insights & Revenue Analytics",
    subtitle: "RevPAC, Vehicle ROI, Operational Margin Analysis & Cash Flow Reporting",
    tag: "Profit Intelligence",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Transform rental transaction data into actionable profit intelligence. Track revenue per available car, lifecycle vehicle ROI, and maintenance cost deductions.",
    overview:
      "Not every car in your fleet is equally profitable. A vehicle with low daily rental rates might suffer from high depreciation and frequent maintenance, while another category generates consistent high-margin yields. CHM Financial Insights calculates true net profitability for every vehicle chassis in your fleet—taking into account acquisition costs, finance interest, servicing, tires, insurance, and rental income.",
    problemSolved:
      "Operating unprofitable vehicles without knowing it, inaccurate financial forecasting, and lack of clarity on capital allocation for fleet expansion.",
    whoItsFor:
      "Business owners, chief financial officers, commercial bank lenders, and fleet procurement executives.",
    howItWorks: [
      { step: "01", title: "Automated Cost Ingestion", desc: "CHM tracks rental revenue, fuel surcharges, insurance waivers, and maintenance expenses." },
      { step: "02", title: "Real-Time Profit Calculation", desc: "Calculates Revenue Per Available Car (RevPAC), average daily rate (ADR), and net ROI." },
      { step: "03", title: "Strategic Fleet Decisions", desc: "Identify which vehicle models to order more of and which models to decommission at auction." },
    ],
    bullets: [
      "Comprehensive RevPAC and Average Daily Rate (ADR) benchmarks updated daily",
      "Chassis-level lifetime profit & loss statement factoring purchase price, maintenance, and revenue",
      "Exportable financial reports formatted for Australian corporate tax returns and bank compliance",
      "Automated GST calculation on all rental revenue streams, toll fees, and accessory charges",
    ],
    features: [
      { title: "RevPAC & ADR Dashboard", desc: "Benchmark daily yield performance against historical seasonal trends." },
      { title: "Asset Lifecycle ROI", desc: "Know the exact optimal kilometer milestone to sell vehicles before depreciation outpaces revenue." },
      { title: "Depot Profitability Comparison", desc: "Compare gross profit margins across airport branches versus regional depots." },
      { title: "One-Click Accounting Sync", desc: "Send daily journal summaries directly to Xero, QuickBooks, or MYOB." },
    ],
    stat1: "Real-time",
    stat1Label: "Profit & Loss Tracking",
    stat2: "Chassis-Level",
    stat2Label: "Granular ROI Analysis",
    stat3: "100%",
    stat3Label: "ATO Tax Audit Ready",
    stat4: "+22%",
    stat4Label: "Margin Optimization",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Make data-driven purchasing decisions on what vehicles to add to next year's fleet",
      "Identify high-cost maintenance lemons before they drain operating margins",
      "Satisfy bank covenants and asset-finance lenders with verified utilization reports",
      "Automate end-of-month financial closing in hours instead of days",
    ],
  },
  'insights': {
    redirect: 'financial-insights'
  },

  'financials-expenses': {
    title: "Expense Management & Operational Cost Tracking",
    subtitle: "Track Fleet Fuel, Maintenance Invoices, Depot Overheads & Vendor Payments",
    tag: "Expense Control",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Capture every fleet expenditure from depot fuel card imports and tire replacements to insurance premiums and workshop repair bills.",
    overview:
      "Controlling operating expenses is just as critical as driving rental revenue. Small, untracked costs like missing fuel receipts, unbilled cleaning supplies, and duplicate workshop invoices silently erode rental profit margins. CHM Expenses provides digital receipt capture, automated fuel card file imports (BP, Shell, Ampol), and purchase order approvals linked directly to vehicle asset numbers.",
    problemSolved:
      "Lost paper fuel receipts, duplicate vendor billing, untracked repair costs, and inability to allocate expenses to specific vehicle chassis.",
    whoItsFor:
      "Fleet controllers, accounts payable teams, workshop managers, and business owners.",
    howItWorks: [
      { step: "01", title: "Capture Receipt or Invoice", desc: "Upload vendor invoices via drag-and-drop or import electronic fuel card statements." },
      { step: "02", title: "Assign to Vehicle / Depot", desc: "Link expenses directly to a specific registration number, customer booking, or depot overhead." },
      { step: "03", title: "Approve & Reconcile", desc: "Authorize vendor payments and push reconciled transaction journals directly to Xero/MYOB." },
    ],
    bullets: [
      "Direct CSV/API electronic statement imports from major Australian fuel card providers (Ampol, BP, Shell)",
      "Automated matching of fuel purchase timestamps against active customer rental agreements",
      "Purchase order generation and approval workflows for parts and mechanical repair work",
      "Comprehensive tax breakdown with GST tracking for Australian Business Activity Statements (BAS)",
    ],
    features: [
      { title: "Fuel Card Statement Importer", desc: "Automatically match hundreds of fuel transactions to vehicles in seconds." },
      { title: "Vendor Invoicing Portal", desc: "Track mechanical repair invoices, tire replacements, and windscreen repair costs." },
      { title: "Customer Re-billing Engine", desc: "Instantly allocate unrefuelled tank costs to the responsible renter's credit card." },
      { title: "Custom Expense Categories", desc: "Categorize costs by Registration, Insurance, Detailing, Mechanical, and Marketing." },
    ],
    stat1: "100%",
    stat1Label: "Expense Auditability",
    stat2: "Zero",
    stat2Label: "Lost Fuel Receipts",
    stat3: "1-Click",
    stat3Label: "Fuel Card Statement Sync",
    stat4: "BAS Ready",
    stat4Label: "Tax Reporting Inclusions",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Prevent fraudulent employee fuel card usage with odometer and tank capacity validation",
      "Re-bill customers accurately for returning vehicles with less than full fuel tanks",
      "Maintain complete maintenance expense histories for every vehicle sold at auction",
      "Streamline quarterly BAS filings with clean, categorised tax records",
    ],
  },
  'expenses': {
    redirect: 'financials-expenses'
  },

  'driver-management': {
    title: "Driver KYC Verification & Risk Screening",
    subtitle: "Automated Licence OCR, Digital Contract Signing & Demerit Risk Screening",
    tag: "Security & KYC",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Automate driver identity checks, scan Australian and international licences via secure OCR, capture digital signatures, and screen against fraud databases.",
    overview:
      "Counter fraud, stolen identity cards, and unlicenced drivers pose severe financial and legal liabilities to car rental operators. CHM Driver Management automates the entire Know-Your-Customer (KYC) onboarding pipeline. Renters scan their physical driving licence using their mobile phone; optical character recognition (OCR) extracts and validates details against national document verification services before keys are handed over.",
    problemSolved:
      "Counterfeit driver licences, identity theft, vehicle theft rings, disputed damage claims, and slow manual counter data entry.",
    whoItsFor:
      "Counter intake agents, compliance officers, risk managers, and insurance claims handlers.",
    howItWorks: [
      { step: "01", title: "Digital Licence Scan", desc: "Renter photographs the front and back of their Australian or international driver licence." },
      { step: "02", title: "Automated OCR & Verification", desc: "System validates document authenticity, checks expiry dates, and extracts name/address data." },
      { step: "03", title: "Digital Agreement Signing", desc: "Driver reads terms and provides legally binding digital signature on tablet or smartphone." },
    ],
    bullets: [
      "Instant optical character recognition (OCR) extracts licence number, expiry, and class in seconds",
      "Facial biometric match comparing driver selfie against physical photo identification card",
      "Industry blacklist screening alerting staff to repeat toll evaders, reckless drivers, and fraudsters",
      "Secure, encrypted cloud storage compliant with Australian Privacy Principles (APP) and GDPR",
    ],
    features: [
      { title: "Mobile Licence Capture", desc: "Send pre-check-in SMS links so renters complete ID verification before arriving at the counter." },
      { title: "Digital Rental Agreement", desc: "Completely paperless electronic contracts with legally enforceable digital signatures." },
      { title: "International Permit Recognition", desc: "Supports foreign licences in 150+ countries with automated translation checks." },
      { title: "Driver History Profile", desc: "Track total rentals, damage claims, and toll payment reliability across past bookings." },
    ],
    stat1: "< 30s",
    stat1Label: "OCR Verification Time",
    stat2: "100%",
    stat2Label: "Paperless Digital Signing",
    stat3: "Zero",
    stat3Label: "Counter Data Entry Typos",
    stat4: "APP / GDPR",
    stat4Label: "Privacy Act Compliant",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Dramatically reduce check-out counter lines during morning peak rushes",
      "Safeguard your fleet assets against high-tech vehicle theft syndicates",
      "Instantly prove customer agreement acceptance in credit card chargeback disputes",
      "Maintain compliant, encrypted records without keeping physical paper photocopies",
    ],
  },
  'drivers': {
    redirect: 'driver-management'
  },

  'toll-management': {
    title: "Automated Toll Processing & Infringement Handling",
    subtitle: "Direct Linkt/EastLink API Sync, Instant Renter Re-Billing & Fine Nominations",
    tag: "Toll & Fine Automation",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Automate toll tag matching across Australian motorways. Re-bill renters automatically for toll crossings and generate statutory statutory fine nominations in one click.",
    overview:
      "Unpaid highway tolls and speeding infringements are among the biggest administrative headaches in car hire. Operators waste dozens of hours each week manually sorting through Linkt and EastLink toll notices, matching trip timestamps against paper agreements, and completing statutory fine declaration forms. CHM Toll Management automates the entire lifecycle via direct API links.",
    problemSolved:
      "Thousands of dollars in unrecovered toll fees, missed 28-day statutory declaration deadlines resulting in heavy corporate fines, and hours of tedious manual data entry.",
    whoItsFor:
      "Accounts receivable clerks, fleet administrators, and operations directors operating in Sydney, Melbourne, and Brisbane.",
    howItWorks: [
      { step: "01", title: "Automated Toll Ingestion", desc: "Toll crossings from Linkt and EastLink are automatically pushed to CHM via direct API." },
      { step: "02", title: "Instant Contract Matching", desc: "System matches vehicle registration and exact crossing timestamp to the active customer rental." },
      { step: "03", title: "Automated Credit Card Charge", desc: "Renter's credit card is charged for the exact toll amount plus authorized admin processing fee." },
    ],
    bullets: [
      "Direct API synchronization with Australian toll road operators (Linkt, EastLink, E-Toll)",
      "Automated timestamp matching against active customer rental contracts with sub-minute precision",
      "Instant charge execution against customer credit card pre-authorizations or saved payment tokens",
      "One-click statutory declaration generation for speeding and red-light camera fine transfer",
    ],
    features: [
      { title: "Real-Time Toll API Integration", desc: "No manual CSV uploads—tolls appear in the customer booking within hours of crossing." },
      { title: "Statutory Fine Transfer Generator", desc: "Auto-fill driver details onto state police infringement transfer forms in 1 click." },
      { title: "Automated Toll Receipts", desc: "Customers receive itemized tax invoices showing exact motorway gantry names and times." },
      { title: "Configurable Admin Surcharges", desc: "Apply fair administrative processing fees to cover account management costs." },
    ],
    stat1: "100%",
    stat1Label: "Automated Matching",
    stat2: "$0",
    stat2Label: "Unrecovered Toll Debt",
    stat3: "1-Click",
    stat3Label: "Police Fine Nomination",
    stat4: "Hours",
    stat4Label: "Saved Per Week in Admin",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate unrecovered toll leakage from your bottom line permanently",
      "Prevent costly corporate penalty enforcement orders for late fine nominations",
      "Provide renters with total transparency on motorway toll charges to prevent disputes",
      "Dramatically reduce administrative labor overheads in the back office",
    ],
  },
  'tolls': {
    redirect: 'toll-management'
  },

  'rego-insurance': {
    title: "Registration, CTP & Fleet Insurance Management",
    subtitle: "Automated State Registration Expiry Warnings, CTP Renewals & Policy Tracking",
    tag: "Compliance & Safety",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    accentColor: "#0284c7",
    category: "Car Hire Manager (CHM)",
    description:
      "Never let a vehicle drive unregistered. Track state vehicle registration expirations, automated CTP renewals, roadworthy pink slips, and comprehensive insurance policies.",
    overview:
      "Driving an unregistered vehicle on Australian roads results in catastrophic financial penalties, vehicle impoundment, and immediate voiding of all commercial insurance cover. In a fleet of 50 to 500 cars, registration and insurance dates are scattered across every month of the year. CHM Rego & Insurance centralizes compliance with automated 60, 30, and 7-day renewal countdowns and direct state road authority integration.",
    problemSolved:
      "Renting an unregistered vehicle by accident, voided insurance policies following an accident, and last-minute emergency pink slip inspections.",
    whoItsFor:
      "Compliance officers, fleet maintenance controllers, risk managers, and business owners.",
    howItWorks: [
      { step: "01", title: "Compliance Centralization", desc: "Log registration dates, CTP insurer, policy numbers, and mandatory inspection due dates." },
      { step: "02", title: "Automated Expiry Triggers", desc: "System generates proactive alerts 60, 30, and 7 days prior to expiry." },
      { step: "03", title: "Automatic Dispatch Lockout", desc: "Vehicles with expired rego or insurance are automatically blocked from customer assignment." },
    ],
    bullets: [
      "Proactive automated expiry countdowns for state registration, CTP, and comprehensive insurance",
      "Automatic dispatch lockout blocks counter agents from assigning unregistered vehicles",
      "Digital document vault storing registration papers, roadworthy certificates, and insurance contracts",
      "State-specific compliance tracking covering Service NSW, VicRoads, Transport and Main Roads QLD, and DOT WA",
    ],
    features: [
      { title: "Dispatch Lockout Safety Gate", desc: "Impossible for counter staff to accidentally check out an unregistered vehicle." },
      { title: "Roadworthy Pink Slip Tracker", desc: "Schedule mandatory annual vehicle safety inspections before registration deadlines." },
      { title: "Insurance Claims Documentation", desc: "Instant access to policy numbers, broker contacts, and excess terms during accident claims." },
      { title: "Bulk Renewal Invoicing", desc: "Forecast upcoming quarterly registration and insurance cash outflows across the fleet." },
    ],
    stat1: "Zero",
    stat1Label: "Unregistered Dispatches",
    stat2: "60-Day",
    stat2Label: "Proactive Warning Horizon",
    stat3: "100%",
    stat3Label: "Statutory Compliance",
    stat4: "Secure",
    stat4Label: "Digital Certificate Vault",
    image: "/images/chm.svg",
    photoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Protect your business against crippling $2,000+ unregistered vehicle police fines",
      "Ensure commercial insurance cover is 100% active and enforceable at all times",
      "Avoid stressful last-minute rushes to complete roadworthy mechanical checks",
      "Maintain flawless audit documentation for bank asset financing and licencing authorities",
    ],
  },
};
