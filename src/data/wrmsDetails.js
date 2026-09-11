// Complete, realistic workshop management content for WRMS Pro cards
export const wrmsDetails = {
  // ==========================================
  // WRMS PRO - PRODUCT OVERVIEW
  // ==========================================
  'wrms-pro': {
    title: "WRMS Pro",
    subtitle: "End-to-End Operating System for Modern Australian Automotive & Fleet Repair Workshops",
    tag: "Workshop SaaS",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description:
      "Manage work orders, customers, vehicles, parts inventory, technician scheduling, digital quotes, and 1-click invoicing from one powerful workshop management platform.",
    overview:
      "WRMS Pro (Workshop Repair Management Software) is engineered to transform independent automotive mechanical workshops, heavy diesel truck service centers, and internal fleet maintenance depots into high-efficiency, paperless operations. From digital job cards on technician tablets to barcode parts scanning and automated customer SMS approvals, WRMS Pro accelerates every stage of the repair workflow.",
    problemSolved:
      "Workshops suffer from grease-stained paper job cards, untracked parts inventory, unbilled technician labor hours, disputed phone quotes, and slow invoicing that stalls cash flow.",
    whoItsFor:
      "Automotive mechanics, diesel truck repairers, auto electricians, fleet maintenance depot supervisors, panel beaters, and multi-bay service franchises.",
    howItWorks: [
      { step: "01", title: "Job Card Creation", desc: "Scan customer vehicle registration for instant VIN, make, model, and engine spec auto-fill." },
      { step: "02", title: "Digital Technician Bay", desc: "Mechanics clock labor hours on tablets, check off safety inspection items, and attach diagnostic photos." },
      { step: "03", title: "1-Click Customer Sign-Off", desc: "Send digital SMS quotes for customer authorization, deduct parts from stock, and issue tax invoices." },
    ],
    bullets: [
      "Real-time digital job cards with integrated technician labor timers tracking billable vs actual bay hours",
      "Live barcode parts inventory scanning with automated minimum reorder thresholds and supplier integration",
      "Interactive multi-point vehicle safety inspection templates with photo capture sent directly to customer phones",
      "Seamless two-way accounting sync with Xero and MYOB for automated invoice reconciliation and debtor tracking",
    ],
    features: [
      { title: "Digital Job Cards", desc: "Eliminate lost paper clipboards with cloud work orders accessible on technician bay tablets." },
      { title: "Parts & Inventory Control", desc: "Track stock levels, markups, purchase orders, and supplier catalogs with barcode scanning." },
      { title: "SMS Quote Approvals", desc: "Customers review itemized repair estimates and approve additional work with one tap." },
      { title: "Technician Clocking", desc: "Record exact technician labor hours to measure workshop efficiency and billable recovery." },
    ],
    stat1: "Real-time",
    stat1Label: "Work Order Tracking",
    stat2: "1-Click",
    stat2Label: "Digital Invoicing & Sync",
    stat3: "30%",
    stat3Label: "Faster Job Turnarounds",
    stat4: "0",
    stat4Label: "Lost Parts or Paperwork",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Zero unbilled parts or lost mechanic labor hours",
      "Instant vehicle service history lookup by registration plate or VIN",
      "Professional SMS estimates increase customer upsell approval rates by 40%",
      "Seamless integration with MEX CMMS for enterprise heavy-plant servicing",
    ],
  },
  'wrms': {
    redirect: 'wrms-pro'
  },
  'workshop-repair-management': {
    redirect: 'wrms-pro'
  },

  // ==========================================
  // WRMS PRO - 6 SOLUTION CARDS
  // ==========================================
  'work-order-management': {
    title: "Work Order Management",
    subtitle: "Real-Time Digital Job Cards, Labor Clocking & Bay Allocation",
    tag: "Job Cards",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description:
      "Create, track, and complete work orders with real-time status updates, assigned technicians, and detailed task checklists.",
    overview:
      "Replace grease-stained paper clipboards with digital work orders that update live across front desk service advisors and workshop bays. Track diagnostic findings, required replacement parts, and technician labor times in real time.",
    problemSolved:
      "Lost paperwork, mechanics doing unauthorized work, forgotten parts billing, and confusion over which technician is working on which hoist.",
    whoItsFor:
      "Workshop foremen, service advisors, head mechanics, and workshop business owners.",
    howItWorks: [
      { step: "01", title: "Create Job Card", desc: "Service advisor inputs customer complaints or service milestones and assigns a hoist bay." },
      { step: "02", title: "Bay Execution", desc: "Mechanic clocks on using bay tablet, checks off tasks, and logs required parts." },
      { step: "03", title: "Quality Check & Close", desc: "Foreman reviews completed inspection points, marks job ready, and notifies front desk." },
    ],
    bullets: [
      "Visual Kanban workflow board tracking jobs from Booked, In Progress, Awaiting Parts, to Ready for Pickup",
      "Technician labor timer recording billable hours vs book time to measure workshop bay efficiency",
      "Attach diagnostic scanner fault codes (DTC), oscilloscope captures, and repair photos directly to the job card",
      "Customer repair notes and special instructions highlighted prominently to ensure zero missed client requests",
    ],
    features: [
      { title: "Kanban Job Board", desc: "Drag-and-drop job cards across workshop stages with color-coded urgency tags." },
      { title: "Technician Bay Clocking", desc: "Mechanics clock into specific labor operations on tablets with a single tap." },
      { title: "Diagnostic Photo Attachments", desc: "Capture worn brake pads or split bushes with tablet camera to show customers." },
      { title: "Standard Repair Packages", desc: "Insert pre-configured logbook service templates (Minor, Major, Timing Belt) instantly." },
    ],
    stat1: "100%",
    stat1Label: "Digital Paperless Jobs",
    stat2: "Real-time",
    stat2Label: "Labor Clocking Tracking",
    stat3: "0",
    stat3Label: "Lost Job Cards",
    stat4: "30%",
    stat4Label: "Faster Bay Turnaround",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Capture every minute of billable technician labor accurately",
      "Eliminate customer confusion with documented photographic evidence of wear",
      "Improve workshop bay throughput and vehicle turnaround speed",
      "Instant lookup of historical repair records for returning vehicles",
    ],
  },

  'workshop-customer-management': {
    title: "Customer Management",
    subtitle: "Automated Service Reminders, SMS Approvals & Complete Vehicle Service Histories",
    tag: "Customer CRM",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description:
      "Maintain comprehensive customer profiles, vehicle ownership records, service histories, and automated service reminders.",
    overview:
      "Build long-term customer loyalty and recurring revenue. WRMS Pro stores every vehicle owned by a customer, tracks upcoming rego inspection and logbook service dates, and automatically sends personalized SMS reminders 3 weeks prior.",
    problemSolved:
      "Customers forgetting their annual service intervals, disputed repair quotes over the phone, and lost contact details for fleet accounts.",
    whoItsFor:
      "Service advisors, customer relationship managers, and workshop marketing coordinators.",
    howItWorks: [
      { step: "01", title: "Customer & Fleet Profile", desc: "Record customer contact details, preferred communication channel, and all linked vehicles." },
      { step: "02", title: "Automated SMS Reminders", desc: "System triggers automated SMS/email reminders for upcoming logbook services or pink slips." },
      { step: "03", title: "Interactive Digital Quotes", desc: "Send SMS links where customers review itemized parts/labor and click 'Approve Work'." },
    ],
    bullets: [
      "Automated SMS service reminders scheduled based on elapsed months or estimated odometer wear",
      "Two-way SMS communication allowing customers to reply with questions or approve additional repairs",
      "Fleet corporate account management handling multi-vehicle monthly consolidated invoicing",
      "Complete historical service ledger recording every past invoice, part replaced, and technician note",
    ],
    features: [
      { title: "Predictive Service Reminders", desc: "Send timely SMS prompts when vehicles are due for oil changes or inspections." },
      { title: "One-Click SMS Quote Approvals", desc: "Customers view itemized photos and tap to approve repairs on their smartphones." },
      { title: "Multi-Vehicle Fleet Accounts", desc: "Group company vehicles under a single corporate parent entity with authorized drivers." },
      { title: "Customer Loyalty Notes", desc: "Record customer preferences, loan car requirements, and key collection instructions." },
    ],
    stat1: "40%+",
    stat1Label: "Increase in Quote Approvals",
    stat2: "Automated",
    stat2Label: "SMS Service Reminders",
    stat3: "100%",
    stat3Label: "Vehicle History Logging",
    stat4: "2-Way",
    stat4Label: "Customer SMS Messaging",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Keep workshop bays consistently booked through automated service reminders",
      "Eliminate phone tag by allowing customers to approve estimates via SMS",
      "Build trust by providing complete digital service history records upon request",
      "Manage commercial corporate fleet accounts with ease and clarity",
    ],
  },

  'workshop-vehicle-management': {
    title: "Vehicle Management",
    subtitle: "Rego Lookup, Factory Service Schedules & Technical Specifications",
    tag: "Vehicle Intelligence",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description:
      "Track vehicle specifications, odometer logs, past repairs, and scheduled service milestones in one centralized database.",
    overview:
      "Enter a license plate and WRMS Pro instantly pulls vehicle make, model, engine code, oil viscosity specifications, and factory logbook service schedules. Say goodbye to manual VIN typing errors and guessing oil capacities.",
    problemSolved:
      "Technicians using incorrect oil grades or fluid specifications, manual typing mistakes on vehicle registration numbers, and missing recall notices.",
    whoItsFor:
      "Diagnostic technicians, service advisors, and spare parts procurement personnel.",
    howItWorks: [
      { step: "01", title: "Rego Plate Lookup", desc: "Type state license plate to auto-populate VIN, year, make, model, series, and engine code." },
      { step: "02", title: "Fluid & Spec Lookup", desc: "Instantly view OEM engine oil viscosity, brake fluid spec, tire pressures, and torque ratings." },
      { step: "03", title: "Lifecycle History Log", desc: "Track every repair, replacement part, and odometer reading across the vehicle's lifespan." },
    ],
    bullets: [
      "Australian registration plate lookup auto-filling VIN, engine code, and transmission specs",
      "Factory OEM maintenance schedule integration outlining exact service intervals and check items",
      "Fluid specification guidance detailing exact engine oil weights, coolant types, and sump capacities",
      "Odometer verification tracking mileage progression to detect odometer tampering or rollback",
    ],
    features: [
      { title: "Rego Auto-Lookup", desc: "Instant vehicle data extraction from state transport databases." },
      { title: "OEM Fluid Specifications", desc: "Ensure the exact synthetic oil grade and fluid capacity are used every time." },
      { title: "Logbook Schedule Matcher", desc: "Generate factory logbook checklists tailored to exact vehicle age and mileage." },
      { title: "Tyre & Wheel Specifications", desc: "Store tyre dimensions, speed ratings, and recommended cold inflation pressures." },
    ],
    stat1: "< 3s",
    stat1Label: "Rego Plate Lookup Speed",
    stat2: "100%",
    stat2Label: "OEM Fluid Specification Accuracy",
    stat3: "Complete",
    stat3Label: "Lifetime Maintenance Dossier",
    stat4: "Zero",
    stat4Label: "Typing Errors on VIN Records",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Ensure vehicles maintain manufacturer warranty with genuine-grade fluids",
      "Speed up repair order creation at the service desk during morning rush hours",
      "Prevent costly mechanic errors from using incorrect oil or transmission fluid",
      "Provide car buyers with verified roadworthy and service history dossiers",
    ],
  },

  'parts-and-inventory': {
    title: "Parts & Inventory",
    subtitle: "Barcode Scanning, Stock Levels, Automated Reordering & Supplier Catalogs",
    tag: "Inventory & Parts",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description:
      "Manage parts stock, track barcodes, automate purchase orders, and integrate supplier pricing to protect workshop gross margins.",
    overview:
      "Parts leakage and untracked inventory quietly drain workshop profitability. WRMS Pro delivers precision stock control with barcode scanning, automated minimum reorder triggers, supplier catalog price sync, and automated retail markup matrices.",
    problemSolved:
      "Mechanics taking filters or spark plugs without billing them, discovering parts are out of stock while the vehicle is on the hoist, and selling parts below target gross margin.",
    whoItsFor:
      "Parts managers, warehouse storemen, purchasing officers, and workshop accountants.",
    howItWorks: [
      { step: "01", title: "Scan & Allocate", desc: "Scan part barcode with tablet camera to assign part directly to the active job card." },
      { step: "02", title: "Automated Markup Matrix", desc: "System applies your preset profit markup curve (e.g., cost + 45%) to ensure target margins." },
      { step: "03", title: "Automated Reordering", desc: "When stock dips below threshold, system bundles items into automated supplier POs." },
    ],
    bullets: [
      "Barcode scanning for receiving shipments, bin location management, and instant job allocation",
      "Configurable price markup matrices ensuring consistent gross profit margins on parts sales",
      "Automated purchase order generation when oil drums, filters, or brake pads reach reorder minimums",
      "Supplier invoice reconciliation ensuring trade discounts and core returns are credited correctly",
    ],
    features: [
      { title: "Barcode Scanner Integration", desc: "Scan parts directly into work orders with smartphone or wireless barcode gun." },
      { title: "Dynamic Markup Matrix", desc: "Automatically calculate retail prices based on supplier trade cost and margin goals." },
      { title: "Automated Reorder Alerts", desc: "Never run out of high-turnover service filters, wiper blades, or brake pads." },
      { title: "Consignment & Core Tracking", desc: "Track exchange units (alternators, steering racks) and return credits." },
    ],
    stat1: "100%",
    stat1Label: "Parts Billed to Job Cards",
    stat2: "Real-time",
    stat2Label: "Stock Level Tracking",
    stat3: "Zero",
    stat3Label: "Unaccounted Inventory Shrinkage",
    stat4: "Automated",
    stat4Label: "Margin Markup Calculation",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Eliminate inventory shrinkage and ensure all installed parts are billed",
      "Save technician time by knowing parts are in stock before pulling cars onto hoists",
      "Protect your parts profit margins with automated pricing calculation",
      "Simplify year-end stocktake from days of counting to a rapid digital scan",
    ],
  },

  'workshop-inspections': {
    title: "Workshop Inspections",
    subtitle: "Digital Multi-Point Checklists, Roadworthy Reports & Video Walkarounds",
    tag: "Safety Inspections",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description:
      "Perform digital safety inspections, capture damage and wear photos, and share professional visual inspection reports with clients.",
    overview:
      "Digital Vehicle Inspections (DVI) revolutionize customer trust. Instead of calling a customer to say 'your control arm bushes are split,' mechanics take a clear smartphone photo with red/yellow/green condition ratings sent directly to the customer's phone.",
    problemSolved:
      "Customer skepticism regarding recommended repairs, illegible handwriting on roadworthy check sheets, and disputes over pre-existing body dents.",
    whoItsFor:
      "Licensed vehicle inspectors, apprentice mechanics, diagnostic technicians, and service advisors.",
    howItWorks: [
      { step: "01", title: "Select Template", desc: "Choose inspection template: 60-Point Safety Check, Pre-Purchase Inspection, or Pink Slip." },
      { step: "02", title: "Rate & Photograph", desc: "Tap Red (Urgent), Amber (Upcoming), or Green (Pass), snapping photos of worn components." },
      { step: "03", title: "Customer Interactive Link", desc: "Send digital report via SMS where customer sees photos and approves recommended repairs." },
    ],
    bullets: [
      "Customizable multi-point inspection checklists for brakes, suspension, tires, battery, and fluids",
      "Color-coded condition ratings (Green = Good, Amber = Monitor, Red = Immediate Safety Hazard)",
      "High-resolution photo and short video clip capture highlighting fluid leaks, tire cord wear, and rust",
      "Digital customer sign-off stored immutably in the cloud for legal safety and compliance records",
    ],
    features: [
      { title: "Traffic Light Condition Rating", desc: "Intuitive Red/Amber/Green indicators make inspection findings easy for drivers to understand." },
      { title: "Photo & Video Evidence", desc: "Attach timestamped visual evidence of worn brake pads, cracked belts, or oil leaks." },
      { title: "State Inspection Templates", desc: "Pre-configured templates complying with state road safety inspection regulations." },
      { title: "Instant SMS Report Delivery", desc: "Deliver clean, interactive digital inspection reports to customer smartphones." },
    ],
    stat1: "50%+",
    stat1Label: "Higher Additional Work Authorizations",
    stat2: "100%",
    stat2Label: "Digital Photo Documentation",
    stat3: "Traffic Light",
    stat3Label: "Red / Amber / Green System",
    stat4: "Paperless",
    stat4Label: "Safety Compliance Archiving",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Build total trust with customers through transparent visual evidence",
      "Increase average repair order value by clearly highlighting necessary maintenance",
      "Protect your workshop against false claims regarding pre-existing vehicle damage",
      "Provide buyers with comprehensive pre-purchase vehicle health certificates",
    ],
  },

  'workshop-scheduling': {
    title: "Workshop Scheduling",
    subtitle: "Interactive Hoist & Technician Calendar with Online Customer Booking",
    tag: "Bay Scheduling",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description:
      "Optimize workshop capacity, manage technician hours, allocate hoists, and accept online bookings to eliminate workshop bottlenecks.",
    overview:
      "Balance technician workloads and avoid morning chaos. WRMS Pro's scheduling matrix displays bay capacities, specialist technician skills (e.g. diesel diagnostic certified, auto-electrician, tire fitter), and loan car availability on one dynamic schedule.",
    problemSolved:
      "Overbooking bays on Monday morning, underutilizing hoists in the afternoon, double-booking loan cars, and scheduling complex diagnostic jobs to junior apprentices.",
    whoItsFor:
      "Workshop controllers, front-desk service advisors, and workshop owners maximizing billable bay hours.",
    howItWorks: [
      { step: "01", title: "Visual Bay Matrix", desc: "View hoists and technicians mapped against morning drop-off times and expected completion hours." },
      { step: "02", title: "Smart Skill Matching", desc: "Assign jobs based on technician certifications, diagnostic skills, and hoist weight limits." },
      { step: "03", title: "Loan Car Scheduler", desc: "Allocate courtesy loan cars with automated driver agreement sign-offs and fuel tracking." },
    ],
    bullets: [
      "Visual Gantt calendar displaying hoists, alignment racks, wash bays, and assigned mechanics",
      "Online customer booking widget embedding seamlessly into workshop websites with live time slot availability",
      "Courtesy loan car management scheduling vehicles, tracking returns, and recording fuel usage",
      "Automated customer appointment confirmation and reminder SMS messages reducing no-shows",
    ],
    features: [
      { title: "Hoist & Bay Timeline", desc: "Drag-and-drop scheduling across all physical workshop bays and lifts." },
      { title: "Technician Skill Matching", desc: "Ensure complex engine or electrical jobs are assigned to qualified technicians." },
      { title: "Courtesy Car Fleet Manager", desc: "Schedule loan vehicles and capture customer license agreements digitally." },
      { title: "Online Customer Bookings", desc: "Allow drivers to reserve service appointments directly from your website 24/7." },
    ],
    stat1: "95%+",
    stat1Label: "Workshop Bay Capacity Utilization",
    stat2: "0",
    stat2Label: "Courtesy Car Overlaps",
    stat3: "24/7",
    stat3Label: "Website Booking Availability",
    stat4: "< 1%",
    stat4Label: "Appointment No-Show Rate",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    advantages: [
      "Maximize workshop revenue by filling vacant afternoon bay slots",
      "Eliminate morning service desk queues with spread-out appointment times",
      "Ensure loan cars are sanitized, fueled, and ready for VIP customers",
      "Automate SMS booking confirmations to virtually eliminate customer no-shows",
    ],
  },

  // ==========================================
  // WRMS PRO - 6 WORKSHOP OPERATIONS
  // ==========================================
  'better-job-visibility': {
    title: "Better Job Visibility",
    subtitle: "Complete Clarity Over Every Repair Stage in Real Time",
    tag: "Job Tracking",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description: "Know the status of every vehicle on the floor, technician time spent, and pending customer approvals.",
    overview: "Service advisors and foremen can see which jobs are on time, which need parts, and which are ready for customer collection.",
    problemSolved: "Asking technicians 'Is that Commodore ready yet?' and making customers wait in reception.",
    whoItsFor: "Service advisors, workshop managers, and front-desk coordinators.",
    bullets: [
      "Live Kanban board showing all active jobs across workshop stages",
      "Real-time alerts when mechanics finish jobs or flag unexpected issues",
      "Instant visibility into technician labor efficiency and billable hours",
      "Customer status portal allowing drivers to track repair progress online",
    ],
    features: [
      { title: "Live Bay Status Board", desc: "View every car on hoists with current stage and technician." },
      { title: "Instant Finish Alerts", desc: "Front desk is notified immediately when a job passes quality check." },
      { title: "Parts Waiting Flags", desc: "Highlight vehicles paused while awaiting supplier deliveries." },
      { title: "Customer Status Link", desc: "Allow vehicle owners to track repair progress on their smartphones." },
    ],
    stat1: "100%", stat1Label: "Workshop Floor Visibility",
    stat2: "Real-time", stat2Label: "Job Status Notifications",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
  },

  'faster-workflows': {
    title: "Faster Workflows",
    subtitle: "Automate Repetitive Admin So Mechanics Can Focus on Repairs",
    tag: "Operational Speed",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description: "Accelerate quote creation, parts ordering, and invoice settlement with digital automation.",
    overview: "Speed up administrative turnaround by eliminating manual paperwork, double-entry, and phone tag with customers.",
    problemSolved: "Hours spent typing manual invoices, deciphering handwritten job cards, and waiting on parts quotes.",
    whoItsFor: "Mechanics, service advisors, and workshop accountants.",
    bullets: [
      "Pre-loaded logbook service templates with standard parts and labor hours",
      "1-click invoice generation with instant Xero/MYOB accounting sync",
      "Instant SMS quote approvals speeding up customer authorization by hours",
      "Fast rego lookup populating vehicle specifications automatically",
    ],
    features: [
      { title: "Pre-Built Service Packages", desc: "Insert standardized service templates with one click." },
      { title: "One-Click Invoicing", desc: "Convert job cards to tax invoices with single-click accounting sync." },
      { title: "Rapid Rego Autofill", desc: "Extract vehicle details from license plates in under 3 seconds." },
      { title: "Instant SMS Authorizations", desc: "Receive customer repair approvals directly on your screen." },
    ],
    stat1: "30%", stat1Label: "Faster Admin Turnaround",
    stat2: "1-Click", stat2Label: "Invoice Settlement",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },

  'organised-work-orders': {
    title: "Organised Work Orders",
    subtitle: "Structured Job Cards That Eliminate Mistakes and Lost Billing",
    tag: "Organized Operations",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description: "Keep tasks, checklists, diagnostic logs, and technician notes organized in one digital location.",
    overview: "Ensure every repair follows standard quality operating procedures with clear checklists, labor tracking, and photo documentation.",
    problemSolved: "Forgotten checklist items, missing fluid top-ups, and untracked shop supplies.",
    whoItsFor: "Technicians, apprentices, and quality assurance supervisors.",
    bullets: [
      "Comprehensive task checklists guiding technicians through thorough vehicle inspections",
      "Digital capture of diagnostic fault codes, oscilloscope traces, and wheel alignment sheets",
      "Automated inclusion of sundry workshop supplies (rags, degreaser, environmental disposal)",
      "Clear separation of customer-requested items vs recommended preventive maintenance",
    ],
    features: [
      { title: "Standardized Checklists", desc: "Ensure apprentices follow consistent inspection procedures." },
      { title: "Diagnostic File Storage", desc: "Save scan tool readouts directly inside the customer's job file." },
      { title: "Automated Sundries Surcharge", desc: "Never forget to bill environmental disposal and workshop consumables." },
      { title: "Clear Task Prioritization", desc: "Mark mandatory safety repairs separately from optional upsells." },
    ],
    stat1: "100%", stat1Label: "Organized Job Cards",
    stat2: "0", stat2Label: "Missing Work Checklists",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
  },

  'improved-customer-management': {
    title: "Improved Customer Management",
    subtitle: "Personalized Service, Loyalty Tracking & Frictionless Communication",
    tag: "Customer Care",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description: "Build stronger relationships with transparent communication, digital approvals, and complete service histories.",
    overview: "Deliver a modern, digital customer experience that rivals luxury automotive dealerships, inspiring customer trust and repeat bookings.",
    problemSolved: "Surprise repair bills, difficult phone explanations, and customers going to competing workshops.",
    whoItsFor: "Customer service teams and workshop business owners.",
    bullets: [
      "Itemized digital estimates with photos explaining why components need replacement",
      "Automated SMS alerts when vehicles are ready for collection with invoice totals",
      "Customer history view allowing advisors to welcome returning clients by name",
      "Corporate account management with customized labor rates and multi-vehicle reporting",
    ],
    features: [
      { title: "Visual Digital Estimates", desc: "Show customers exactly what is worn before asking for payment." },
      { title: "Ready for Pickup SMS", desc: "Automated notification when vehicle is cleaned and parked in collection bay." },
      { title: "Returning Client Recognition", desc: "Instantly recall past repairs, preferred oil brands, and family cars." },
      { title: "Commercial Account Portals", desc: "Provide corporate fleet clients with itemized monthly statements." },
    ],
    stat1: "4.9/5", stat1Label: "Customer Trust Rating",
    stat2: "Instant", stat2Label: "SMS Ready Notifications",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
  },

  'better-parts-control': {
    title: "Better Parts Control",
    subtitle: "Precision Inventory Tracking, Zero Leakage & Healthy Margins",
    tag: "Parts Optimization",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description: "Track parts from delivery to installation with barcode scanning, reorder alerts, and margin controls.",
    overview: "Take control of your parts room. Know exact bin locations, monitor stock on hand, and ensure every part is billed at the correct markup.",
    problemSolved: "Parts walking out the door unbilled, obsolete stock cluttering shelves, and parts ordered for jobs that were cancelled.",
    whoItsFor: "Parts storemen, workshop managers, and financial controllers.",
    bullets: [
      "Barcode scanning for receiving, allocating, and auditing parts stock",
      "Automated stock level reordering keeping essential filters and fluids on hand",
      "Markup matrices enforcing target gross profit margins on parts sales",
      "Supplier invoice matching ensuring agreed trade discounts and credits are applied",
    ],
    features: [
      { title: "Barcode Bin Locations", desc: "Find any part instantly by shelf and bin number." },
      { title: "Stocktake Wizard", desc: "Conduct rapid inventory audits using tablet camera barcode scanning." },
      { title: "Margin Enforcement", desc: "Never sell a part below target gross margin percentage." },
      { title: "Supplier Credit Tracking", desc: "Ensure return credits for unused or warranty parts are received." },
    ],
    stat1: "100%", stat1Label: "Parts Accountability",
    stat2: "0", stat2Label: "Unbilled Inventory Leakage",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
  },

  'efficient-workshop-operations': {
    title: "More Efficient Workshop Operations",
    subtitle: "Higher Bay Throughput, Maximized Billable Hours & Stronger Profits",
    tag: "Efficiency & ROI",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentColor: "#e11d48",
    category: "WRMS Pro",
    description: "Eliminate downtime, streamline communication, and run a profitable, highly organized workshop.",
    overview: "When work orders, technician scheduling, customer communication, and parts inventory operate harmoniously, your workshop generates more profit per bay every single day.",
    problemSolved: "Bottlenecks, idle mechanics waiting on parts, uncollected invoices, and chaotic workshop floors.",
    whoItsFor: "Workshop owners, general managers, and multi-branch operators.",
    bullets: [
      "Unified operational platform connecting reception, bays, parts, and accounting",
      "Live KPI reporting: Bay Utilization, Billable Efficiency %, and Average Invoice Value",
      "Paperless environment reducing administrative overhead by up to 15 hours a week",
      "Scalable architecture supporting single-bay local garages up to 50-bay enterprise fleet depots",
    ],
    features: [
      { title: "Unified Workshop Hub", desc: "Eliminate disconnected systems and run the entire workshop on one platform." },
      { title: "Live Bay Efficiency KPIs", desc: "Track technician productivity and billable recovery in real time." },
      { title: "15 Hours Saved Weekly", desc: "Cut administrative paperwork and manual double-handling." },
      { title: "Scalable Multi-Depot Support", desc: "Manage multiple workshop branches with centralized inventory and reporting." },
    ],
    stat1: "25%+", stat1Label: "Typical Profit Improvement",
    stat2: "15h", stat2Label: "Admin Hours Saved Weekly",
    image: "/images/wrms-pro.svg",
    photoUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
  },
};
