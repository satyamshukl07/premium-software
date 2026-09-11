// Dedicated card details for Australia Fleet Tracking / Techtonika Autolink modules & inner cards
export const fleetTrackingExtraDetails = {
  'gps-tracking': {
    title: "4G Live GPS Tracking & Telematics Hardware",
    subtitle: "High-Frequency 10-Second Location Refresh Across Telstra & Optus LTE-M Networks",
    tag: "Hardware & Network",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Enterprise-grade 4G telematics hardware delivering 10-second location pings, true odometer sync, ignition telemetry, and offline buffer memory across demanding Australian terrain.",
    overview:
      "Commercial fleet management in Australia requires hardware built to endure extreme temperatures, corrugated outback roads, and cellular blackspots. Australia Fleet Tracking pairs Telstra/Optus Cat-M1 telematics hardware with internal memory buffers that store up to 50,000 location records when operating out of cellular range—automatically syncing the complete route history the moment connection is restored.",
    problemSolved:
      "Cellular dead-zones wiping out route tracking in regional freight corridors, inaccurate cellular triangulations, and vehicle battery drainage from low-quality tracking devices.",
    whoItsFor:
      "Long-haul freight transport, regional courier networks, field service contractors, civil construction, and mining operations.",
    howItWorks: [
      { step: "01", title: "Hardwire or Plug-in", desc: "Install IP67 ruggedized hardwired beacons or plug-and-play OBD-II devices into vehicle ports." },
      { step: "02", title: "Continuous High-Rate Telemetry", desc: "Devices ping GPS coordinates, speed, heading, and battery voltage every 10 seconds while in motion." },
      { step: "03", title: "Cloud Map Stream", desc: "Fleet controllers view live moving vehicle markers with turn-by-turn route trails on high-res maps." },
    ],
    bullets: [
      "Sub-10-second refresh intervals provide smooth, animated vehicle movements on the live map",
      "Telstra Cat-M1 and Optus 4G LTE-M modem ensures maximum cellular footprint across Australia",
      "Ultra-low current sleep modes prevent battery drain even when equipment sits parked for weeks",
      "Internal 50,000-point offline memory buffer stores tracking points during remote blackspots",
    ],
    features: [
      { title: "Sub-Second Location Precision", desc: "Multi-constellation GNSS (GPS, GLONASS, Galileo) provides sub-3-metre positioning accuracy." },
      { title: "Ignition & Power Cut Alarms", desc: "Receive immediate tamper alarms if a tracking unit is disconnected from the vehicle battery." },
      { title: "IP67 Waterproof Enclosure", desc: "Resistant to pressure washing, mud, dust, and heavy vibrations on civil mining sites." },
      { title: "Remote OTA Firmware Updates", desc: "Configuration updates and feature enhancements pushed over-the-air with zero vehicle downtime." },
    ],
    stat1: "10 sec",
    stat1Label: "High-Frequency Pings",
    stat2: "99.4%",
    stat2Label: "Australian Population Coverage",
    stat3: "IP67",
    stat3Label: "Dust & Water Ingress Rating",
    stat4: "50,000",
    stat4Label: "Offline Buffer Points",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Unrivaled cellular reach across regional highways, mining basins, and agricultural corridors",
      "Protects expensive capital vehicles against covert theft and unauthorized after-hours use",
      "Seamless plug-and-play installation minimizes vehicle downtime during fleet rollout",
      "Full integration with CHM rental operations and WRMS Pro workshop management",
    ],
  },

  'vehicle-tracking': {
    title: "Real-Time Vehicle Tracking & Live Map",
    subtitle: "Animated Live Breadcrumb Trails, Street View & Traffic Congestion Overlays",
    tag: "Map Interface",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Monitor your entire mobile fleet on a unified, high-definition map with animated breadcrumb trails, driver status badges, and Google Street View integration.",
    overview:
      "Dispatchers and logistics managers need instantaneous situational awareness to make rapid routing decisions and provide accurate customer ETAs. The Australia Fleet Tracking live map displays every active vehicle with directional heading arrows, ignition status indicators (Driving, Idling, Parked), current speed limits, and live traffic congestion layers. Click any vehicle for instant driver contact details and trip history.",
    problemSolved:
      "Endless phone calls asking drivers 'Where are you?', inaccurate customer arrival estimations, and disputes regarding job arrival times.",
    whoItsFor:
      "Logistics dispatchers, emergency roadside assistance teams, mobile trades dispatchers, and delivery operators.",
    howItWorks: [
      { step: "01", title: "Live Fleet Display", desc: "All mobile assets appear on a vector map, color-coded by driving status and depot group." },
      { step: "02", title: "Turn-by-Turn Route Replay", desc: "Select any historical date and scrub through the vehicle's exact journey with speeds and stops." },
      { step: "03", title: "Share Live Tracking Link", desc: "Generate secure, expiring live-tracking links to send customers waiting for deliveries." },
    ],
    bullets: [
      "Dynamic color-coded status icons: Driving (Green), Idling (Amber), Stopped (Blue), and Alert (Red)",
      "High-definition Google Maps base layers with integrated satellite imagery and live traffic delays",
      "One-click Google Street View lookup showing the exact street entrance where a driver has parked",
      "Customer-facing ETA tracking links with real-time arrival countdowns reducing phone inquiries",
    ],
    features: [
      { title: "Animated Route Replay", desc: "Play back complete shifts at 2x, 5x, or 10x speed to review stops, idle times, and speeding events." },
      { title: "Live Traffic & Detour Overlays", desc: "Spot major highway accidents and re-route drivers around heavy gridlock before they arrive." },
      { title: "Custom Vehicle Grouping", desc: "Organize vehicles by region (Sydney, Melbourne, Brisbane), department, or contractor type." },
      { title: "Search by Address or POI", desc: "Locate the closest available technician to a customer breakdown location in seconds." },
    ],
    stat1: "Sub-3m",
    stat1Label: "Location Accuracy",
    stat2: "Live",
    stat2Label: "Traffic Congestion Sync",
    stat3: "365-Day",
    stat3Label: "Historical Route Storage",
    stat4: "1-Click",
    stat4Label: "Customer ETA Sharing",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Provide clients with precise delivery arrival times backed by live satellite tracking",
      "Resolve customer billing disputes by proving exact arrival and departure timestamps",
      "Dispatch the closest available vehicle to urgent emergency service calls",
      "Eliminate manual driver status check-in calls that cause dangerous driver distraction",
    ],
  },

  'driver-safety': {
    title: "Driver Safety Scoring & Behavior Telematics",
    subtitle: "Harsh Braking, Cornering, Tailgating & Speeding Analytics to Lower Risk",
    tag: "Safety & Compliance",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Benchmark driver performance, eliminate reckless driving habits, reduce commercial insurance premiums, and protect your team with automated safety scorecards.",
    overview:
      "Aggressive driving habits like rapid acceleration, tailgating, harsh cornering, and speeding not only increase the likelihood of catastrophic highway collisions, but also drastically accelerate brake pad wear, tire shredding, and fuel consumption. Australia Fleet Tracking calculates an objective, algorithmic safety score (0 to 100) for every driver in your fleet—fostering a culture of safety and reducing fleet insurance premiums by up to 25%.",
    problemSolved:
      "High fleet insurance premiums, frequent preventable at-fault accidents, excessive tire/brake wear, and corporate reputational damage from reckless driving.",
    whoItsFor:
      "Workplace health and safety (WHS) directors, transport compliance managers, and business owners committed to road safety.",
    howItWorks: [
      { step: "01", title: "3-Axis Accelerometer Sensor", desc: "High-precision inertial sensors detect G-force spikes during harsh braking and violent swerves." },
      { step: "02", title: "Speed Limit Matching", desc: "Compares vehicle speed against posted Australian road speed limits updated in real-time." },
      { step: "03", title: "Gamified Driver Scorecard", desc: "Generates weekly driver safety rankings to reward safe driving and mentor risky drivers." },
    ],
    bullets: [
      "Automated safety scoring factoring harsh braking, rapid acceleration, sharp cornering, and speeding",
      "Real-time in-cab audio buzzer alerts drivers the moment an aggressive driving threshold is breached",
      "Weekly safety leaderboard gamifying safe driving performance with company incentives and rewards",
      "Documented Chain of Responsibility (CoR) compliance records for Australian Heavy Vehicle National Law",
    ],
    features: [
      { title: "G-Force Event Analysis", desc: "Record exact lateral and longitudinal acceleration curves during safety incidents." },
      { title: "Posted Speed Limit Enforcement", desc: "Distinguish between minor 5km/h creeps and dangerous 20km/h+ school zone violations." },
      { title: "In-Cab Audio Coaching", desc: "Instant audio chime encourages drivers to correct aggressive behavior immediately." },
      { title: "Insurance Premium Reduction", desc: "Export verified low-risk fleet safety scorecards directly to commercial underwriters." },
    ],
    stat1: "Up to 25%",
    stat1Label: "Insurance Premium Savings",
    stat2: "40%",
    stat2Label: "Reduction in At-Fault Accidents",
    stat3: "0 - 100",
    stat3Label: "Objective Driver Scorecard",
    stat4: "100%",
    stat4Label: "CoR Compliance Ready",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Protect your drivers and other road users from preventable highway accidents",
      "Significantly extend tire, brake pad, and suspension lifespans across the fleet",
      "Demonstrate proactive safety duty-of-care to comply with Australian WHS legislation",
      "Reward and retain your best, most conscientious commercial drivers",
    ],
  },

  'reports-alerts': {
    title: "Automated Fleet Reports & ATO FBT Logbooks",
    subtitle: "One-Click ATO Electronic Logbooks, Speeding Summaries & Scheduled PDF Reports",
    tag: "Reporting Engine",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Generate ATO-compliant electronic FBT logbooks, automated weekly fuel reports, after-hours usage alerts, and scheduled management summaries with zero manual paperwork.",
    overview:
      "Manual paper driver logbooks are notorious for inaccurate odometer guesses, lost tax deductions, and devastating Australian Taxation Office (ATO) audit penalties. Australia Fleet Tracking provides ATO-approved electronic logbooks with 1-click business versus private trip classification. Combined with automated scheduled PDF reporting, managers receive weekly summaries of idling, speeding, and maintenance directly in their inboxes.",
    problemSolved:
      "Thousands of dollars in lost tax deductions from messy paper logbooks, ATO audit compliance fines, and hours spent compiling management fleet reports.",
    whoItsFor:
      "Chief financial officers, fleet accountants, tax compliance managers, and operations supervisors.",
    howItWorks: [
      { step: "01", title: "Trip Classification", desc: "Drivers toggle trips as 'Business' or 'Private' via driver smartphone app or in-cab switch." },
      { step: "02", title: "Automated Odometer Capture", desc: "System records exact start/end odometers, trip purpose, and timestamps via CAN-bus." },
      { step: "03", title: "1-Click Tax Export", desc: "Export compliant ATO FBT logbooks and management PDF summaries directly to accountants." },
    ],
    bullets: [
      "100% ATO-compliant electronic Fringe Benefits Tax (FBT) logbook generation with 12-week continuous logging",
      "Driver privacy mode hides exact GPS location during authorized private and weekend trips",
      "Automated scheduled email reports delivered weekly or monthly in PDF and Excel formats",
      "Custom exception alerts for speeding, excessive idling, after-hours ignition, and tow-away events",
    ],
    features: [
      { title: "ATO FBT Logbook Generator", desc: "Satisfies all Australian Taxation Office audit requirements for operating cost method FBT claims." },
      { title: "Driver Privacy Switch", desc: "Respect driver personal time—private trips log odometer distance without revealing private GPS destinations." },
      { title: "Idling & Fuel Waste Report", desc: "Identify drivers running vehicle air conditioning while parked for hours at loading docks." },
      { title: "After-Hours Usage Triggers", desc: "Receive immediate SMS alerts if a commercial vehicle engine starts between 8 PM and 5 AM." },
    ],
    stat1: "100%",
    stat1Label: "ATO FBT Compliance",
    stat2: "$3,000+",
    stat2Label: "Avg Annual FBT Tax Savings",
    stat3: "1-Click",
    stat3Label: "Automated PDF Exports",
    stat4: "Zero",
    stat4Label: "Paper Logbooks Required",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate stressful end-of-financial-year paper logbook reconciliations",
      "Protect driver personal privacy during approved weekend and evening hours",
      "Identify unauthorized vehicle use and moonlighting before it becomes habitual",
      "Save thousands in fuel and tax deductions with verified digital trip logs",
    ],
  },

  'api-integrations': {
    title: "Enterprise REST API & ERP Integrations",
    subtitle: "Connect Telematics Data With SAP, Salesforce, Oracle, Xero & Custom Dispatch",
    tag: "Developer & API",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Seamlessly feed live vehicle coordinates, odometer readings, fuel consumption, and driver statuses into your enterprise ERP, CRM, and transport management systems.",
    overview:
      "Siloed telematics platforms force dispatchers to constantly copy and paste data between multiple browser tabs. Australia Fleet Tracking features a robust, high-throughput RESTful API and real-time Webhook architecture. Push live odometer readings into MEX CMMS for maintenance scheduling, stream GPS locations into custom dispatch tools, and sync driver hours into payroll systems automatically.",
    problemSolved:
      "Double data entry, outdated odometer readings in maintenance software, and disconnected logistics management tools.",
    whoItsFor:
      "Enterprise IT architects, logistics software developers, systems integrators, and technology directors.",
    howItWorks: [
      { step: "01", title: "Generate API Tokens", desc: "Create secure, scoped API credentials in your Australia Fleet Tracking administrative console." },
      { step: "02", title: "Configure Webhooks", desc: "Subscribe to real-time events: geofence entry/exit, ignition on/off, and harsh braking triggers." },
      { step: "03", title: "Automate Enterprise Workflows", desc: "Sync true vehicle odometers into MEX and update delivery job statuses in your CRM." },
    ],
    bullets: [
      "High-performance REST API with sub-100ms response times and 99.99% service level availability",
      "Real-time Webhook subscriptions streaming instant event payloads for geofence and alarm triggers",
      "Pre-built native connectors for MEX CMMS, CHM, WRMS Pro, Xero, Salesforce, and SAP",
      "Comprehensive Swagger / OpenAPI 3.0 documentation with interactive testing sandboxes",
    ],
    features: [
      { title: "RESTful Data Endpoints", desc: "Query live positions, historical breadcrumb trips, engine telemetry, and diagnostic fault codes." },
      { title: "Real-Time Webhook Engine", desc: "Eliminate wasteful polling—receive instant HTTP POST payloads the second an event occurs." },
      { title: "Automated MEX Odometer Sync", desc: "Keep maintenance interval triggers accurate by feeding live CAN-bus odometers into MEX CMMS." },
      { title: "Enterprise SSO & RBAC", desc: "Authenticate via SAML 2.0 / Okta with role-based access control across multi-tier teams." },
    ],
    stat1: "99.99%",
    stat1Label: "API Uptime SLA",
    stat2: "< 100ms",
    stat2Label: "Response Latency",
    stat3: "OpenAPI 3.0",
    stat3Label: "Standardized Documentation",
    stat4: "Unlimited",
    stat4Label: "Webhook Integrations",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Unify your entire transport, maintenance, and accounting software stack",
      "Eliminate human data entry errors across maintenance interval logs",
      "Build custom customer-facing mobile tracking portals using verified GPS APIs",
      "Scale from 10 to 10,000+ connected vehicles with enterprise reliability",
    ],
  },

  'geofencing': {
    title: "Smart Geofencing & Polygonal Virtual Boundaries",
    subtitle: "Automated Depot Entry/Exit Alarms, Customer Site Detention Timers & Security Perimeters",
    tag: "Geofence Engine",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Draw unlimited virtual boundaries around customer yards, depots, ports, and job sites. Automate arrival notifications, track detention billing, and detect boundary breaches.",
    overview:
      "Knowing exactly when a truck arrives at a customer distribution centre, how long it spends waiting at loading docks, and when it departs is essential for transport billing and customer satisfaction. Australia Fleet Tracking enables you to draw precise circular or complex polygonal geofences in seconds. Trigger automated customer arrival notifications and accurately invoice detention fees when waiting times exceed contract limits.",
    problemSolved:
      "Unpaid loading dock detention times, disputed customer delivery claims, and vehicles straying into prohibited or hazardous terrain.",
    whoItsFor:
      "Transport operators, concrete agitator fleets, civil mining contractors, and security freight logistics.",
    howItWorks: [
      { step: "01", title: "Draw Virtual Boundary", desc: "Draw circular or polygonal boundaries around customer depots, mines, or prohibited zones." },
      { step: "02", title: "Configure Trigger Rules", desc: "Set actions: notify customer on arrival, alert supervisor on after-hours exit, or log detention." },
      { step: "03", title: "Automate Commercial Invoicing", desc: "Generate detention fee reports proving vehicle arrived at 9:00 AM and departed at 1:30 PM." },
    ],
    bullets: [
      "Create unlimited circular, rectangular, and custom multi-point polygonal geofence perimeters",
      "Automated customer arrival SMS/email alerts informing depot crews before the vehicle arrives",
      "Accurate detention time tracking providing indisputable proof of loading dock wait times",
      "Strict curfew and prohibited area triggers alerting security teams if vehicles enter unauthorized zones",
    ],
    features: [
      { title: "Polygonal Precision Drawing", desc: "Fit boundaries exactly to property fence lines, avoiding false alarms from adjacent roadways." },
      { title: "Automated Customer Alerts", desc: "'Your freight delivery is 10 minutes away' notifications triggered as vehicles cross outer zones." },
      { title: "Detention & Demurrage Billing", desc: "Calculate and export billable waiting hours exceeding 30 or 60-minute contractual free windows." },
      { title: "Hazardous Terrain Restrictions", desc: "Alert dispatchers if transport vehicles attempt to traverse unapproved dirt tracks or floodways." },
    ],
    stat1: "Unlimited",
    stat1Label: "Geofence Zones",
    stat2: "Sub-Second",
    stat2Label: "Breach Detection",
    stat3: "100%",
    stat3Label: "Detention Proof",
    stat4: "Polygonal",
    stat4Label: "Fence-Line Precision",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Recover thousands of dollars in legitimate detention billing at crowded customer docks",
      "Keep customer receiving teams primed for fast unloading upon vehicle arrival",
      "Protect high-value assets against theft with automated after-hours yard perimeter alarms",
      "Audit contractor compliance with designated delivery routes and access corridors",
    ],
  },

  'fuel-monitoring': {
    title: "CAN-Bus Fuel Monitoring & Theft Detection",
    subtitle: "Direct Engine Telemetry, Fuel Drop Alarms & Excessive Idling Analysis",
    tag: "Fuel Economy",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Connect directly into vehicle CAN-bus computers to monitor true fuel consumption, detect rapid fuel siphoning thefts, and eliminate costly excessive engine idling.",
    overview:
      "Fuel represents up to 35% of a commercial fleet's total operating expenditure. Guessing fuel consumption based on paper receipts leaves operators vulnerable to fuel card fraud, fuel siphoning theft, and massive fuel waste from idling engines. Australia Fleet Tracking plugs directly into the vehicle's engine control module (J1939/OBD-II), reading exact litres consumed, true burn rate (L/100km), and sudden drop anomalies.",
    problemSolved:
      "Fuel card skimming fraud, overnight fuel tank siphoning, excessive engine idling wasting thousands of litres, and inaccurate vehicle fuel economy records.",
    whoItsFor:
      "Heavy transport trucking companies, civil excavation operators, bus fleets, and commercial delivery fleets.",
    howItWorks: [
      { step: "01", title: "Direct CAN-Bus Connection", desc: "Non-intrusive CAN-bus reader reads live fuel level percentage and cumulative fuel burn." },
      { step: "02", title: "Instant Fuel Drop Alarms", desc: "System detects sudden fuel level drops (> 10L in 3 mins) while ignition is OFF and sounds alarm." },
      { step: "03", title: "Fuel Card Cross-Validation", desc: "Reconciles fuel card purchase receipts against actual litres entering the vehicle fuel tank." },
    ],
    bullets: [
      "Direct CAN-bus engine integration reading true vehicle fuel level and consumption rates",
      "Immediate SMS theft alarms triggered by rapid fuel tank drops when parked overnight",
      "Excessive idle duration monitoring highlighting drivers who leave engines running unnecessarily",
      "Automated cross-check comparing fuel card transaction litres against actual tank volume increases",
    ],
    features: [
      { title: "Fuel Siphon Detection", desc: "Detect unauthorized fuel extraction in depots or highway rest stops with instant siren and SMS alerts." },
      { title: "Idle Waste Calculator", desc: "Quantify exact dollars lost per week to auxiliary engine idling across every driver." },
      { title: "Fuel Card Fraud Protection", desc: "Flag instances where a company fuel card is swiped but the fuel did not enter the company vehicle." },
      { title: "True Fleet L/100km Efficiency", desc: "Identify underperforming engines needing injector cleaning or particulate filter regeneration." },
    ],
    stat1: "Up to 18%",
    stat1Label: "Total Fuel Cost Savings",
    stat2: "Instant",
    stat2Label: "Fuel Siphoning Alarms",
    stat3: "100%",
    stat3Label: "Fuel Card Cross-Check",
    stat4: "CAN-Bus",
    stat4Label: "Direct Engine Telemetry",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Stop fuel card fraud by employees or subcontractors immediately",
      "Slash idling fuel waste across city courier routes and loading bays",
      "Catch fuel siphoning thieves red-handed with instant alerts to local security",
      "Optimize driving styles to lower carbon emissions and corporate fuel bills",
    ],
  },

  'ai-dash-cams': {
    title: "Dual-Facing AI Dashcams & Video Telematics",
    subtitle: "Edge AI Driver Fatigue Detection, Tailgating Alerts & Cloud Incident Video Upload",
    tag: "Video Intelligence",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Protect your drivers and brand reputation with intelligent connected dashcams. Edge AI detects distracted driving, mobile phone use, and fatigue, uploading incident video to the cloud.",
    overview:
      "When a collision occurs on the road, it's often the commercial driver's word against other road users, exposing businesses to fraudulent smash-repair lawsuits and false blame. Australia Fleet Tracking connects dual-facing HD smart dashcams powered by edge neural processors. The forward camera records road conditions with optical lane recognition, while the infrared cabin camera detects driver eye closure, yawning, and smartphone distraction.",
    problemSolved:
      "False insurance claims against company drivers, lack of evidence during highway accidents, and catastrophic crashes caused by driver fatigue or smartphone distraction.",
    whoItsFor:
      "Transport safety directors, commercial fleet operators, mining vehicle supervisors, and high-value freight hauliers.",
    howItWorks: [
      { step: "01", title: "Dual HD Video Recording", desc: "Simultaneously records road ahead in 1080p and driver cabin in infrared night vision." },
      { step: "02", title: "Edge AI Incident Trigger", desc: "Detects collision, harsh brake, mobile phone usage, or microsleep eye closure." },
      { step: "03", title: "Instant Cloud Video Push", desc: "Automatically uploads 20-second video clip (10s before, 10s after) to the cloud portal." },
    ],
    bullets: [
      "Dual-channel 1080p Full HD recording with wide 140° road lens and cabin infrared night illumination",
      "Edge AI neural network detecting driver microsleeps, yawning, and illegal smartphone usage",
      "Automatic cloud upload of high-definition video footage immediately following collision or harsh braking",
      "Exonerate drivers in disputed accident investigations and protect against fraudulent insurance claims",
    ],
    features: [
      { title: "Driver Fatigue & Distraction AI", desc: "Audible in-cabin voice warning alerts drivers when eyes wander or microsleeps are detected." },
      { title: "Instant Cloud Event Snippets", desc: "Safety managers review 20-second incident video within seconds of an airbag or harsh brake event." },
      { title: "Live Video Streaming", desc: "Authorised dispatchers can request live video streaming during urgent emergency situations." },
      { title: "Privacy Mode Compliance", desc: "Cabin camera can be configured to record road-facing only during private or non-working hours." },
    ],
    stat1: "1080p",
    stat1Label: "Full HD Video Quality",
    stat2: "< 15s",
    stat2Label: "Cloud Incident Upload",
    stat3: "90%",
    stat3Label: "Driver Exoneration Rate",
    stat4: "Edge AI",
    stat4Label: "Onboard Neural Processor",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Completely exonerate innocent company drivers from false liability claims",
      "Proactively coach drivers out of dangerous smartphone texting habits",
      "Prevent catastrophic highway fatigue rollover accidents before they occur",
      "Speed up insurance claim settlements from months down to a few days",
    ],
  },

  'lone-worker-safety': {
    title: "Lone Worker Safety, Duress Buttons & Rollover Alarms",
    subtitle: "Emergency Satellite SOS, Inactive Man-Down Detection & Outback WHS Protection",
    tag: "Personnel Protection",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Safeguard personnel operating alone in remote Australian regions. In-cab SOS duress buttons, automatic vehicle rollover detection, and check-in welfare timers.",
    overview:
      "Employees working in isolated locations—such as utility linesmen, mining geologists, agricultural staff, and regional transport drivers—face extreme risks from sudden medical emergencies, vehicle rollovers, and hazardous breakdowns. Australia Fleet Tracking integrates dedicated hardwired SOS panic switches, 3D accelerometer rollover detection, and automated welfare check-in timers to ensure no worker is ever truly alone.",
    problemSolved:
      "Workers stranded in remote outback terrain following a rollover, medical incapacitation with no mobile phone reception, and failure to meet Australian WHS lone-worker laws.",
    whoItsFor:
      "Power and water utility operators, regional health nurses, mining exploration crews, forestry rangers, and rural contractors.",
    howItWorks: [
      { step: "01", title: "Welfare Timer Setup", desc: "Worker starts an active job interval with scheduled digital check-ins every 60 or 120 minutes." },
      { step: "02", title: "Emergency Event Trigger", desc: "Worker presses hidden in-cab SOS button, or vehicle sensors detect a severe tilt/rollover." },
      { step: "03", title: "Escalated Emergency Dispatch", desc: "Instant alert dispatched with exact coordinates to 24/7 monitoring room and emergency services." },
    ],
    bullets: [
      "In-cab and wearable wireless SOS duress buttons initiating silent emergency alerts",
      "Automated vehicle tilt and rollover sensors trigger distress pings immediately upon vehicle inversion",
      "Welfare check-in countdown timer automatically alerts supervisors if a worker fails to confirm safety",
      "Seamless integration with Australian 24/7 Grade-A1 security monitoring response centers",
    ],
    features: [
      { title: "Vehicle Rollover Detection", desc: "Sensors detect angular tilt exceeding 60 degrees and immediately transmit emergency GPS coordinates." },
      { title: "Concealed SOS Duress Buttons", desc: "Hidden panic buttons mounted beneath dashboards for discrete activation during hostile situations." },
      { title: "Missed Check-in Escalation", desc: "Multi-tier escalation: automated SMS, phone call to worker, supervisor alert, and police dispatch." },
      { title: "Satellite Hybrid Redundancy", desc: "Optional Iridium satellite communication modules ensure SOS transmission even without cellular service." },
    ],
    stat1: "< 5s",
    stat1Label: "Emergency Distress Dispatch",
    stat2: "100%",
    stat2Label: "WHS Lone Worker Compliance",
    stat3: "24/7",
    stat3Label: "Grade-A1 Monitoring Room",
    stat4: "3D Sensor",
    stat4Label: "Rollover Crash Detection",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Fulfill employer legal obligations under strict Australian Workplace Health and Safety laws",
      "Provide peace of mind to remote field staff and their families",
      "Reduce rescue response times from hours down to minutes during remote accidents",
      "Ensure rapid medical evacuation when working in hazardous outback conditions",
    ],
  },

  'maintenance-triggers': {
    title: "Odometer & Engine Hour Maintenance Triggers",
    subtitle: "Automated Service Intervals, Brake Reminders & Integration With MEX & WRMS Pro",
    tag: "Preventive Care",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Automate maintenance schedules with live odometer and engine-hour tracking. Automatically trigger service job cards in MEX CMMS or WRMS Pro before breakdowns occur.",
    overview:
      "Relying on manual driver logbooks or windshield service stickers to schedule oil changes and brake inspections inevitably leads to skipped service intervals, voided manufacturer warranties, and catastrophic roadside breakdowns. Australia Fleet Tracking continuously reads true odometer distance and engine operating hours from the vehicle CAN-bus, automatically alerting workshop coordinators when vehicles are within 500 km of service due dates.",
    problemSolved:
      "Missed routine service intervals, voided manufacturer new-vehicle warranties, premature engine failures, and unscheduled fleet downtime.",
    whoItsFor:
      "Fleet maintenance superintendents, mechanical workshop managers, transport controllers, and plant equipment supervisors.",
    howItWorks: [
      { step: "01", title: "Configure Service Rules", desc: "Set maintenance triggers by distance (e.g., every 15,000 km) or engine hours (every 250 hours)." },
      { step: "02", title: "Live Telemetry Tracking", desc: "System continuously compares live vehicle odometer and run hours against service thresholds." },
      { step: "03", title: "Automated Work Order Push", desc: "Proactively creates scheduled service work orders in MEX CMMS or WRMS Pro before due date." },
    ],
    bullets: [
      "Direct CAN-bus odometer sync eliminates manual mileage recording by mechanics and drivers",
      "Engine-hour tracking ideal for stationary plant machinery, yellow mining equipment, and generators",
      "Proactive countdown warnings alert workshop coordinators at 1,000 km and 500 km before service due",
      "Two-way integration with MEX CMMS and WRMS Pro for automated digital job card generation",
    ],
    features: [
      { title: "True CAN-Bus Odometer", desc: "Captures true instrument cluster distance with zero manual estimation or odometer fraud." },
      { title: "Heavy Plant Engine Hours", desc: "Tracks engine runtime hours for machinery whose wear occurs while stationary (e.g., cranes, mixers)." },
      { title: "Service Countdown Dashboard", desc: "Visual color-coded list of all fleet assets sorted by urgency of upcoming maintenance." },
      { title: "Warranty Compliance Safeguard", desc: "Maintains tamper-proof digital records proving vehicles met all OEM servicing requirements." },
    ],
    stat1: "100%",
    stat1Label: "Automated Odometer Capture",
    stat2: "Zero",
    stat2Label: "Missed Scheduled Services",
    stat3: "35%",
    stat3Label: "Reduction in Engine Breakdowns",
    stat4: "MEX / WRMS",
    stat4Label: "Direct Work Order Sync",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate expensive engine and transmission catastrophic failures through proactive maintenance",
      "Protect resale value at auction by maintaining 100% complete digital service logs",
      "Streamline workshop parts ordering by forecasting upcoming 30-day service volumes",
      "Seamless bridge between mobile telematics and enterprise maintenance software",
    ],
  },
};
