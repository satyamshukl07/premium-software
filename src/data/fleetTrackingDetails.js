// Complete, realistic telematics and fleet tracking content for Australia Fleet Tracking cards
export const fleetTrackingDetails = {
  // ==========================================
  // FLEET TRACKING - PRODUCT OVERVIEW
  // ==========================================
  'australia-fleet-tracking': {
    title: "Australia Fleet Tracking / Techtonika Autolink",
    subtitle: "Enterprise 4G GPS Telematics, Dashcams & Driver Safety for Australian Fleets",
    tag: "Telematics & IoT",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Track vehicles and assets in real time, monitor driver activity, receive instant alerts, and gain total visibility across your fleet with powerful Australian GPS tracking solutions.",
    overview:
      "Australia Fleet Tracking (powered by Techtonika Autolink) delivers commercial-grade telematics engineered for demanding Australian operating conditions. From Telstra 4G LTE-M coverage in regional corridors to dual-facing AI dashcams, live CAN-bus fuel telemetry, and automated ATO-compliant logbooks, it protects your mobile workforce and cuts operating waste.",
    problemSolved:
      "Fleet operators face excessive fuel burn from unmonitored idling, unauthorized vehicle side-jobs, dangerous speeding events, lost cargo trailers, and crippling ATO audit penalties from inaccurate paper logbooks.",
    whoItsFor:
      "Fleet directors, transport logistics managers, civil contractors, mining operations, field service fleets, and courier companies operating across Australia.",
    howItWorks: [
      { step: "01", title: "Plug & Play or Hardwire", desc: "Install 4G OBD-II or rugged IP67 hardwired telematics devices into vehicles, trucks, or yellow plant machinery." },
      { step: "02", title: "Live High-Frequency Pings", desc: "Receive 10-second updates over the nationwide Telstra/Optus cellular network with satellite redundancy." },
      { step: "03", title: "Actionable Intelligence", desc: "Automate geofence alerts, track driver fatigue, monitor cold-chain temperatures, and generate tax logbooks." },
    ],
    bullets: [
      "Sub-10-second GPS location refresh rates across high-speed Australian highways and regional freight corridors",
      "ATO-compliant FBT electronic logbooks saving thousands of dollars in annual fringe benefits tax paperwork",
      "CAN-bus engine diagnostics reading live fuel consumption, engine fault codes (DTC), and true odometer readings",
      "Connected AI dashcams capturing harsh braking, cornering, tailgating, and distracted driver fatigue events",
    ],
    features: [
      { title: "Live Real-Time Map", desc: "Track every vehicle with animated route trails and traffic overlay." },
      { title: "Driver Safety Scoring", desc: "Benchmark driving behavior to reduce insurance premiums and accident rates." },
      { title: "Automated ATO Logbooks", desc: "Tax-compliant business vs private trip classification with 1-click export." },
      { title: "Instant Geofence Alarms", desc: "Alert dispatchers when vehicles arrive at customer depots or breach unauthorized zones." },
    ],
    stat1: "10 sec",
    stat1Label: "Fast GPS Refresh Rate",
    stat2: "Up to 22%",
    stat2Label: "Fuel & Idling Savings",
    stat3: "100%",
    stat3Label: "ATO FBT Compliance",
    stat4: "Telstra 4G",
    stat4Label: "Nationwide LTE-M Network",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Coverage in remote Australian territories where consumer cellular networks drop out",
      "Ruggedized hardware built to withstand intense outback heat and vibrations",
      "Rapid self-installation with plug-and-play OBD-II devices or discrete hardwiring",
      "Full integration with CHM rental operations and MEX maintenance scheduling",
    ],
  },
  'fleet-tracking': {
    redirect: 'australia-fleet-tracking'
  },
  'techtonika-autolink': {
    redirect: 'australia-fleet-tracking'
  },

  // ==========================================
  // FLEET TRACKING - 6 SOLUTION CARDS
  // ==========================================
  'live-gps-tracking': {
    title: "Live GPS Tracking",
    subtitle: "High-Definition 10-Second Fleet Telemetry Across Australia",
    tag: "Real-Time Telemetry",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Monitor vehicle locations, ignition states, and routes on high-resolution interactive maps with sub-10-second updates.",
    overview:
      "Say goodbye to stale 5-minute breadcrumb trails. Our live GPS tracking streams vehicle location, travel speed, bearing, and ignition status every 10 seconds, allowing dispatchers to answer customer 'Where's my delivery?' calls with pinpoint precision.",
    problemSolved:
      "Blind spots during long hauls, customer uncertainty regarding delivery arrival times, and inability to locate vehicles during roadside breakdowns.",
    whoItsFor:
      "Dispatch teams, logistics controllers, service technicians, and emergency roadside recovery units.",
    howItWorks: [
      { step: "01", title: "Device Transmission", desc: "The in-vehicle unit captures multi-constellation GNSS (GPS, GLONASS, Galileo) coordinates." },
      { step: "02", title: "Cellular Transmission", desc: "Data is transmitted encrypted over 4G LTE-M and NB-IoT with offline store-and-forward caching." },
      { step: "03", title: "Live Dispatch View", desc: "Vehicles appear as live animated markers on interactive Google Maps with street view." },
    ],
    bullets: [
      "Sub-10-second ping rates delivering continuous movement animation without jarring jumps",
      "Historical route replay with speed color-coding, ignition events, and stop duration markers",
      "Live traffic integration showing highway congestions, roadworks, and optimal detour routes",
      "Multi-vehicle live share links allowing end customers to track approaching technician vans",
    ],
    features: [
      { title: "High-Frequency Pings", desc: "10-second update frequency ensures accurate turn-by-turn route tracking." },
      { title: "Route Playback Tool", desc: "Replay exact historical journeys from any day, week, or month with timestamps." },
      { title: "Offline Data Caching", desc: "Stores up to 30,000 logs when traveling out-of-range, uploading upon reconnection." },
      { title: "Customer Live Tracking Link", desc: "Send temporary tracking links to clients for real-time ETA visibility." },
    ],
    stat1: "10s",
    stat1Label: "Update Frequency",
    stat2: "99.9%",
    stat2Label: "GPS Precision Accuracy",
    stat3: "30,000",
    stat3Label: "Offline Log Buffer",
    stat4: "24/7",
    stat4Label: "Uninterrupted Tracking",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Provide clients with definitive proof of delivery and arrival timestamps",
      "Resolve customer disputes over billed on-site working hours effortlessly",
      "Quickly recover stolen vehicles through direct police tracking link sharing",
      "Reduce dispatch phone calls asking drivers for their current location",
    ],
  },

  'driver-monitoring': {
    title: "Driver Monitoring",
    subtitle: "Safety Scoring, Speed Compliance & Fatigue Management",
    tag: "Safety & Compliance",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Gain visibility into driver behavior, harsh braking, rapid acceleration, speeding, and excessive idling to improve safety and lower risk.",
    overview:
      "Driver safety is the cornerstone of fleet profitability and workplace health & safety (WHS) compliance. Our intelligent telemetry algorithms detect dangerous driving maneuvers in real time, calculating objective safety scores that encourage responsible road behavior.",
    problemSolved:
      "Aggressive driving causing high fuel burn, premature tire and brake wear, elevated crash risk, and soaring commercial fleet insurance premiums.",
    whoItsFor:
      "Health & safety officers, fleet risk managers, and driver training supervisors.",
    howItWorks: [
      { step: "01", title: "G-Sensor Detection", desc: "Built-in 3D gyroscopes and accelerometers monitor G-forces across XYZ axes." },
      { step: "02", title: "Event Classification", desc: "The unit identifies harsh acceleration, emergency braking, sharp cornering, and speeding." },
      { step: "03", title: "Scorecard Generation", desc: "Drivers receive daily safety scores out of 100 with actionable feedback tips." },
    ],
    bullets: [
      "Real-time audible in-cabin buzzer alerting drivers immediately when speed limits or harsh Gs are exceeded",
      "Objective driver leaderboards comparing safety scores across teams, depots, and individual contractors",
      "Heavy vehicle fatigue monitoring logging continuous driving hours to comply with National Heavy Vehicle Regulator (NHVR) laws",
      "Accident reconstruction reports capturing 100Hz pre- and post-impact telemetry for insurance claims",
    ],
    features: [
      { title: "Harsh Event Detection", desc: "Instantly detect severe braking, aggressive cornering, and rapid acceleration." },
      { title: "Posted Speed Limit Matching", desc: "Compare vehicle speed against official Australian road speed limit databases." },
      { title: "Driver Safety Leaderboard", desc: "Incentivize safe habits through monthly eco-driving rewards programs." },
      { title: "Crash Reconstruction Data", desc: "Millisecond-level telemetry capture to prove zero-fault in third-party collisions." },
    ],
    stat1: "35%",
    stat1Label: "Reduction in Harsh Events",
    stat2: "15%",
    stat2Label: "Insurance Premium Savings",
    stat3: "100Hz",
    stat3Label: "Crash Sensor Sampling",
    stat4: "NHVR",
    stat4Label: "Fatigue Compliance Ready",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Significantly reduce the frequency and severity of fleet vehicle accidents",
      "Lower maintenance wear on brake pads, rotors, and tire tread",
      "Protect your brand reputation from public complaints regarding erratic driving",
      "Demonstrate proactive Duty of Care under Australian WHS legislation",
    ],
  },

  'instant-alerts': {
    title: "Instant Alerts",
    subtitle: "Automated SMS, Push & Email Triggers for Critical Fleet Events",
    tag: "Event Notifications",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Stay informed with configurable notifications for speed breaches, unauthorized movement, after-hours usage, and geofence events.",
    overview:
      "You can't stare at a tracking map 24 hours a day. Our automated notification engine acts as an always-on watchman, alerting dispatchers and managers the instant a rule is violated—whether a vehicle moves after midnight or an emergency SOS button is pressed.",
    problemSolved:
      "Unnoticed vehicle theft during weekends, unauthorized personal weekend trips, and delayed notification of roadside emergencies.",
    whoItsFor:
      "Operations managers, depot security staff, and on-call fleet duty officers.",
    howItWorks: [
      { step: "01", title: "Set Custom Rules", desc: "Define rules: e.g. 'Alert if speed > 115 km/h' or 'Movement between 10pm–5am'." },
      { step: "02", title: "Trigger Evaluation", desc: "Telematics firmware evaluates sensor data locally and sends instant alarm packets." },
      { step: "03", title: "Multi-Channel Delivery", desc: "Receive immediate SMS, smartphone push notifications, and email alerts." },
    ],
    bullets: [
      "Custom polygonal geofences triggering entry, exit, and unauthorized dwell time notifications",
      "After-hours movement detection alerting when fleet vehicles are driven outside commercial hours",
      "Device tamper alarms notifying managers if a tracker is disconnected from the OBD-II port",
      "Vehicle roll-over and SOS panic button alerts directly routing emergency coordinates to dispatch",
    ],
    features: [
      { title: "Geofence Perimeter Alerts", desc: "Receive alerts when vehicles enter or leave client yards, depots, or job sites." },
      { title: "After-Hours Curfew Alarms", desc: "Detect unauthorized weekend use or after-hours vehicle departures immediately." },
      { title: "Tamper & Battery Disconnect", desc: "Instant alert if vehicle battery drops below threshold or device is unplugged." },
      { title: "SOS Panic Button Integration", desc: "Lone workers in remote regions can trigger silent duress alarms with one press." },
    ],
    stat1: "< 3s",
    stat1Label: "Alert Trigger Latency",
    stat2: "Unlimited",
    stat2Label: "Custom Geofence Zones",
    stat3: "Multi-Channel",
    stat3Label: "SMS, Email & App Push",
    stat4: "24/7",
    stat4Label: "Always-On Guarding",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Stop vehicle theft in progress by notifying police with live GPS coordinates immediately",
      "Eliminate unauthorized private vehicle usage and unbilled moonlighting",
      "Ensure lone technicians working in remote regional areas are protected",
      "Automate arrival notifications to client facilities for seamless depot check-in",
    ],
  },

  'fleet-reports': {
    title: "Fleet Reports",
    subtitle: "Automated ATO Logbooks, Trip Histories & Utilization Analytics",
    tag: "Analytics & Compliance",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Generate comprehensive reports on trip histories, engine operating hours, driver performance, and compliance metrics effortlessly.",
    overview:
      "Transform raw telemetry into audit-ready management reports. Our reporting suite produces official Australian Taxation Office (ATO) compliant logbooks, trip summaries, stop-time audits, and executive fleet utilization summaries with a single click.",
    problemSolved:
      "Laborious paper logbook errors leading to heavy FBT tax audits, lost billable travel hours, and lack of visibility into true asset operating costs.",
    whoItsFor:
      "Financial controllers, payroll accountants, fleet managers, and tax compliance officers.",
    howItWorks: [
      { step: "01", title: "Automated Trip Capture", desc: "System records start time, end time, origin, destination, distance, and duration." },
      { step: "02", title: "Trip Classification", desc: "Drivers tag trips as Business or Private via mobile app or in-cabin toggle switch." },
      { step: "03", title: "1-Click PDF/Excel Export", desc: "Generate compliant tax logbooks, fuel burn summaries, and payroll timesheets." },
    ],
    bullets: [
      "100% ATO-compliant electronic FBT logbooks approved for corporate tax deductions",
      "Automated timesheet verification matching driver hours against actual vehicle ignition runtimes",
      "Idling waste reports pinpointing vehicles left running with air-conditioning during lunch stops",
      "Automated scheduled email distribution delivering weekly executive summaries every Monday morning",
    ],
    features: [
      { title: "ATO FBT Tax Logbooks", desc: "Accurate business vs private kilometer calculations ready for tax returns." },
      { title: "Timesheet Audit Reports", desc: "Verify billable technician on-site hours against exact arrival and departure times." },
      { title: "Engine Hours & Idle Reports", desc: "Identify excessive stationary engine running that burns fuel unnecessarily." },
      { title: "Automated Email Delivery", desc: "Deliver customized executive reports directly to management inboxes on schedule." },
    ],
    stat1: "100%",
    stat1Label: "ATO Tax Compliance",
    stat2: "Hours",
    stat2Label: "Saved in Paperwork Weekly",
    stat3: "PDF / CSV",
    stat3Label: "Export Format Flexibility",
    stat4: "Automated",
    stat4Label: "Scheduled Report Delivery",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Save thousands in Fringe Benefits Tax (FBT) by proving true business percentage use",
      "Verify contractor invoices with timestamped proof of arrival and departure",
      "Eliminate manual paperwork for drivers and payroll clerks",
      "Identify under-utilized fleet assets to reallocate or sell surplus vehicles",
    ],
  },

  'fuel-cost-visibility': {
    title: "Fuel & Cost Visibility",
    subtitle: "CAN-Bus Telemetry, Idle Reduction & Fuel Card Fraud Prevention",
    tag: "Fuel Economy",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Monitor fuel usage patterns, identify excessive idling, and optimize travel routes to significantly lower your fleet's running costs.",
    overview:
      "Fuel represents up to 35% of commercial fleet operating budgets. By reading live engine CAN-bus data, Australia Fleet Tracking identifies fuel theft, excessive stationary idling, and aggressive driving patterns, helping fleets reduce fuel bills by up to 22%.",
    problemSolved:
      "Runaway fuel expenses, drivers leaving trucks idling for hours with air-con on, fuel card slippage, and inefficient routing.",
    whoItsFor:
      "Operations directors, fleet accountants, and sustainability officers working toward lower carbon emissions.",
    howItWorks: [
      { step: "01", title: "CAN-Bus Interfacing", desc: "Non-intrusive CAN-bus harness reads factory fuel injection pulses and tank level percentages." },
      { step: "02", title: "Telemetry Comparison", desc: "System correlates fuel consumption against vehicle speed, payload, and idling minutes." },
      { step: "03", title: "Waste Identification", desc: "Highlight vehicles burning fuel while stationary and identify optimal route savings." },
    ],
    bullets: [
      "Direct CAN-bus fuel flow measurement without risky fuel line cutting or invasive sensors",
      "Fuel card transaction cross-referencing: match fuel pump receipt liters with vehicle fuel tank capacity and location",
      "Excessive idle alert triggering when a stationary vehicle idles for more than 10 minutes",
      "Carbon emissions (CO2) reporting tracking total fleet footprint for corporate ESG sustainability disclosures",
    ],
    features: [
      { title: "True CAN-Bus Fuel Telemetry", desc: "Read exact liters consumed, tank fill events, and sudden drop alarms." },
      { title: "Excessive Idling Detection", desc: "Identify fuel burned while parked with ignition on to train drivers." },
      { title: "Fuel Card Fraud Shield", desc: "Verify vehicle was physically present at the petrol station when card was swiped." },
      { title: "ESG Carbon Footprint Logs", desc: "Quantify diesel and petrol carbon emission reductions for green certifications." },
    ],
    stat1: "Up to 22%",
    stat1Label: "Fuel Consumption Reduction",
    stat2: "100%",
    stat2Label: "Fuel Card Matching",
    stat3: "CAN-Bus",
    stat3Label: "Factory Precision Reading",
    stat4: "CO2",
    stat4Label: "ESG Emissions Reporting",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Cut hundreds of thousands of dollars from annual diesel and petrol expenditure",
      "Detect fuel siphoning and unauthorized jerry-can fill-ups instantly",
      "Lower carbon emissions and demonstrate environmental sustainability",
      "Prolong engine life by reducing excessive unneeded idle hours",
    ],
  },

  'asset-tracking': {
    title: "Asset Tracking",
    subtitle: "Solar & Battery IP67 GPS for Trailers, Yellow Plant & High-Value Equipment",
    tag: "Asset Tracking",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description:
      "Protect and track non-powered assets including trailers, construction plant, containers, and generators with long-battery life GPS units.",
    overview:
      "Not every valuable asset has its own engine battery. Our rugged IP67-rated solar and battery-powered tracking units protect unpowered trailers, shipping containers, lighting towers, excavators, and agricultural implements across harsh outdoor Australian environments.",
    problemSolved:
      "Lost trailers, unbilled equipment rental days on customer job sites, and theft of expensive construction and agricultural plant.",
    whoItsFor:
      "Plant hire managers, civil infrastructure contractors, freight trailer operators, and container logistics companies.",
    howItWorks: [
      { step: "01", title: "Mount Rugged Unit", desc: "Attach high-strength magnetic or bolt-down IP67 tracker to trailer or machinery chassis." },
      { step: "02", title: "Long Battery & Solar", desc: "Solar-charging or 5-year internal lithium battery sends periodic or motion-activated location pings." },
      { step: "03", title: "Asset Security Shield", desc: "Receive immediate alerts if equipment moves outside authorized construction site boundaries." },
    ],
    bullets: [
      "IP67 / IP69K waterproof, dustproof, and high-pressure wash-down resistant casing",
      "Solar-powered trickle charging providing unlimited operational lifespan under Australian sunlight",
      "Motion-activated theft recovery mode switching from daily check-ins to live 30-second tracking when moved",
      "Engine hour meter logging vibration to bill customers accurately for machinery run-time on job sites",
    ],
    features: [
      { title: "IP67 Rugged Enclosure", desc: "Engineered to withstand Australian dust, mud, UV radiation, and rainstorms." },
      { title: "Solar & 5-Year Battery", desc: "Zero maintenance power options for unpowered trailers and containers." },
      { title: "Smart Movement Wakeup", desc: "Sleeps to conserve power; wakes instantly upon physical movement or vibration." },
      { title: "Machinery Operating Hours", desc: "Track true operating hours on excavators, generators, and compactors." },
    ],
    stat1: "5+ Years",
    stat1Label: "Battery Lifespan",
    stat2: "IP67 / IP69K",
    stat2Label: "Water & Dust Proof Rating",
    stat3: "Solar",
    stat3Label: "Self-Charging Available",
    stat4: "100%",
    stat4Label: "Unpowered Asset Security",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Never lose track of remote trailers, portable generators, or shipping containers",
      "Bill machinery hire accurately based on true engine run-time hours",
      "Deter job site theft with prominent GPS asset security markings",
      "Manage all powered vehicles and non-powered equipment on one unified screen",
    ],
  },

  // ==========================================
  // FLEET TRACKING - 6 PROVEN OUTCOMES
  // ==========================================
  'real-time-visibility': {
    title: "Real-Time Visibility",
    subtitle: "Complete Operational Clarity Across Vehicles, Drivers, and Freight",
    tag: "Operational Oversight",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description: "Know exactly where every vehicle is at any second with live mapping and telemetry.",
    overview: "Eliminate guesswork across your mobile operations. Dispatch with confidence knowing the live status and location of all units.",
    problemSolved: "Calling drivers for location updates and giving uncertain arrival estimates to waiting clients.",
    whoItsFor: "Fleet dispatchers, operations managers, and transport controllers.",
    bullets: [
      "Live interactive map showing vehicle speed, ignition state, and driver identity",
      "Instant lookup of nearest vehicle to an urgent incoming service call",
      "Traffic layer integration to avoid major metropolitan transit bottlenecks",
      "Shareable customer tracking links for transparent arrival notifications",
    ],
    features: [
      { title: "Live Fleet Command Map", desc: "View your entire mobile footprint on high-speed maps." },
      { title: "Nearest Vehicle Finder", desc: "Dispatch the closest technician to urgent client callouts." },
      { title: "Ignition Status Indicators", desc: "Instantly see if vehicles are driving, idling, or parked." },
      { title: "Live Client Tracking Links", desc: "Empower clients to watch service vans arrive in real time." },
    ],
    stat1: "10 sec", stat1Label: "Map Refresh Rate",
    stat2: "100%", stat2Label: "Fleet Visibility",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  },

  'improved-driver-awareness': {
    title: "Improved Driver Awareness",
    subtitle: "Cultivating a Culture of Safety, Compliance, and Professionalism",
    tag: "Driver Safety",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description: "Encourage safer driving habits through actionable scoring, real-time alerts, and transparent feedback.",
    overview: "Empower your drivers to take pride in their safety record. In-cabin feedback and transparent scoring create friendly safety competitions.",
    problemSolved: "Reckless driving habits, unmonitored road violations, and heightened accident exposure.",
    whoItsFor: "Workplace Health & Safety (WHS) committees and driver trainers.",
    bullets: [
      "In-cabin audible alerts notifying drivers before harsh events become accidents",
      "Weekly driver scorecards celebrating defensive driving and smooth braking",
      "Reduction in speeding citations and municipal traffic infringement notices",
      "Protection of commercial vehicle resale values through gentler driving wear",
    ],
    features: [
      { title: "In-Cabin Audio Warnings", desc: "Immediate gentle beeps when speed limits or G-limits are breached." },
      { title: "Driver Scorecards", desc: "Objective scoring based on smoothness, speed, and braking." },
      { title: "Safety Incentive Programs", desc: "Reward top-scoring drivers with monthly recognition bonuses." },
      { title: "WHS Duty of Care Audit", desc: "Demonstrate verified compliance with national safety guidelines." },
    ],
    stat1: "35%", stat1Label: "Fewer Harsh Braking Incidents",
    stat2: "100%", stat2Label: "WHS Duty of Care Proof",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  },

  'faster-response-incidents': {
    title: "Faster Response to Incidents",
    subtitle: "Rapid Crash Detection, Roadside Assistance & Lone Worker SOS",
    tag: "Emergency Response",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description: "Respond immediately to accidents, vehicle breakdowns, or emergency duress calls with instant coordinates.",
    overview: "When seconds count on remote highways, automated crash alerts provide dispatchers with instant impact severity metrics and precise coordinates.",
    problemSolved: "Delayed medical response to remote accidents and stranded technicians in out-of-coverage locations.",
    whoItsFor: "Emergency response teams, remote fleet supervisors, and lone worker managers.",
    bullets: [
      "Automated severe crash detection alerting emergency contacts immediately upon high-G impact",
      "Precise GPS coordinates dispatched to emergency services and roadside towing partners",
      "In-cabin SOS panic button providing lone workers with immediate duress signaling",
      "Millisecond accident reconstruction data proving liability in third-party collisions",
    ],
    features: [
      { title: "High-G Crash Alarms", desc: "Detect major impacts and rollovers instantly." },
      { title: "Emergency Dispatch Relay", desc: "Transmit exact coordinates to emergency services without delay." },
      { title: "Lone Worker Duress Switch", desc: "Silent panic triggers for technicians in remote or hazardous areas." },
      { title: "Pre-Impact Telemetry Recording", desc: "Capture vehicle speed and brake status prior to collision." },
    ],
    stat1: "< 3s", stat1Label: "Crash Notification Speed",
    stat2: "24/7", stat2Label: "Emergency Monitoring Support",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },

  'better-fleet-utilisation': {
    title: "Better Fleet Utilisation",
    subtitle: "Maximizing Vehicle Productivity and Eliminating Unnecessary Leases",
    tag: "Asset Optimization",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description: "Identify underutilized vehicles, optimize routes, and right-size your fleet to save capital expenditure.",
    overview: "Stop buying or leasing more vehicles than you actually need. Our utilization dashboards expose cars parked for days and optimize trip distribution.",
    problemSolved: "Over-purchasing fleet units, uneven vehicle wear across depots, and poor route scheduling.",
    whoItsFor: "Chief Financial Officers, fleet procurement directors, and operations managers.",
    bullets: [
      "Depot utilization heatmaps highlighting idle vehicles ready for assignment",
      "Balancing kilometer accumulation across leases to avoid excess mileage penalties",
      "Route optimization reducing daily travel times by up to 18%",
      "Data-backed justification for retiring or replacing underperforming vehicles",
    ],
    features: [
      { title: "Utilization Heatmaps", desc: "Spot vehicles that sit idle for days at branch depots." },
      { title: "Lease Mileage Balancing", desc: "Rotate high and low kilometer vehicles to prevent lease penalties." },
      { title: "Smart Route Optimization", desc: "Plan efficient multi-stop delivery routes to save transit hours." },
      { title: "Fleet Sizing Recommendations", desc: "Identify surplus assets to liquidate and return capital." },
    ],
    stat1: "18%", stat1Label: "Transit Time Reduction",
    stat2: "15%+", stat2Label: "Capital Expenditure Saved",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },

  'reduced-operational-waste': {
    title: "Reduced Operational Waste",
    subtitle: "Cutting Idle Fuel Burn, Unnecessary Mileage, and Moonlighting",
    tag: "Cost Reduction",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description: "Eliminate fuel waste, reduce unauthorized vehicle use, and streamline administrative paperwork.",
    overview: "Operational waste quietly erodes fleet profit margins. By cutting unnecessary engine idling and halting unauthorized weekend driving, telematics pays for itself multiple times over.",
    problemSolved: "Excessive fuel waste, unauthorized weekend personal use, and inflated contractor timesheets.",
    whoItsFor: "Fleet controllers, financial accountants, and business owners.",
    bullets: [
      "Eliminate excessive stationary engine idling with automated alerts and driver coaching",
      "Stop unauthorized personal vehicle usage and unapproved weekend side-jobs",
      "Audit contractor timesheets with tamper-proof arrival and departure records",
      "Prevent costly parking fines and toll infringements through accurate trip logs",
    ],
    features: [
      { title: "Idle Fuel Reduction", desc: "Cut hundreds of liters of wasted fuel per vehicle each month." },
      { title: "Weekend Curfew Monitoring", desc: "Alert managers if company vehicles move during unauthorized hours." },
      { title: "Timesheet Audit Verification", desc: "Compare billed technician hours against actual vehicle run-times." },
      { title: "Speed Infringement Prevention", desc: "Avoid corporate speed camera penalty notices with speed warnings." },
    ],
    stat1: "Up to 22%", stat1Label: "Fuel Cost Savings",
    stat2: "$0", stat2Label: "Unauthorized Personal Fuel Use",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
  },

  'more-control-assets': {
    title: "More Control Over Assets",
    subtitle: "Complete Command Over Vehicles, Trailers, and Heavy Machinery",
    tag: "Total Asset Control",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    category: "Australia Fleet Tracking",
    description: "Maintain total oversight of your mobile equipment whether on highways, customer job sites, or remote depots.",
    overview:
      "Gain undisputed control over all your assets. Whether a concrete mixer is working on a major highway project or a trailer is parked at a sub-contractor yard, you know its exact location and operating status.",
    problemSolved: "Missing trailers, unverified machinery hours, and lack of accountability across scattered job sites.",
    whoItsFor: "Plant managers, construction directors, and logistics dispatchers.",
    bullets: [
      "Unified management console monitoring light passenger vehicles, heavy trucks, and trailers",
      "Virtual geofence boundaries locking machinery to authorized construction site perimeters",
      "Remote starter disable capability (anti-theft immobilizer) for recovered or stolen assets",
      "Maintenance hour tracking ensuring high-value plant equipment receives scheduled servicing",
    ],
    features: [
      { title: "Unified Asset Dashboard", desc: "Monitor vehicles, trailers, and yellow plant on one screen." },
      { title: "Virtual Worksite Geofences", desc: "Alert dispatch immediately if machinery exits the job site boundary." },
      { title: "Remote Engine Immobilization", desc: "Safely disable vehicle restart upon confirmed police theft reports." },
      { title: "Preventive Service Tracking", desc: "Trigger maintenance based on actual engine operating hours." },
    ],
    stat1: "100%", stat1Label: "Asset Recovery Rate",
    stat2: "Unified", stat2Label: "Vehicles & Plant on One Screen",
    image: "/images/fleet-tracking.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
  },
};
