/**
 * Rural Solar Electrification Station Project — Centralized Data Source
 * Location: Nallur Government High School, Poonthandalam, Tamil Nadu
 * 
 * Verified from primary project documents:
 * - IEEE HAC/SIGHT Grant 22-HAC-103 Final Full Report
 * - Project Launch Detailed Report & Photos
 * - Technical Engineering Quotations & Invoices (SVS Energy / Renonex)
 * - Village Panchayat Endorsement & Headmaster Letters
 * - Project Assessment Matrix 2022-2023
 */

import { getAssetUrl } from '../utils/assetHelper';

export const PROJECT_DATA = {
  meta: {
    title: "Rural Solar Electrification Station",
    subtitle: "A Youth-Led, Decentralized Renewable Energy & Community Climate Resilience Facility",
    location: "Nallur Government High School, Poonthandalam Village, Kancheepuram / Chengalpattu District, Tamil Nadu, India",
    programApplication: "Generation Hope Youth Climate Programme",
    grantSponsor: "IEEE HAC / SIGHT (Project ID: 22-HAC-103)",
    hostInstitution: "Sri Sai Ram Engineering College, Chennai",
    inaugurationDate: "23 July 2023",
    status: "Operational & Monitored",
  },

  summaryMetrics: [
    {
      id: "capacity",
      label: "Solar PV Capacity",
      value: "2.68 kWp",
      subtext: "8 × 335Wp Polycrystalline Modules",
      icon: "Sun",
    },
    {
      id: "storage",
      label: "Battery Storage",
      value: "7.2 kWh",
      subtext: "4 × 12V 150Ah C10 Deep-Cycle Bank (48Vdc)",
      icon: "BatteryCharging",
    },
    {
      id: "energy",
      label: "Daily Energy Generated",
      value: "~12 kWh",
      subtext: "Bi-monthly: ~720 kWh | Annual: ~4,380 kWh",
      icon: "Zap",
    },
    {
      id: "carbon",
      label: "CO₂ Avoided Annually",
      value: "~4.0 Tonnes",
      subtext: "Lifetime: 155.5 MWh (~14.4 - 50 t CO₂ eq.)",
      icon: "Leaf",
    },
    {
      id: "beneficiaries",
      label: "Direct Community Beneficiaries",
      value: "100+ Families",
      subtext: "150+ students daily & village disaster refuge",
      icon: "Users",
    },
    {
      id: "savings",
      label: "School Cost Savings",
      value: "₹34,560 / yr",
      subtext: "100% reduction in daytime school utility power costs",
      icon: "TrendingUp",
    },
  ],

  challenge: {
    title: "The Community Challenge in Poonthandalam",
    villageContext: "Poonthandalam is a peri-urban rural village situated near West Tambaram in northern Tamil Nadu, with an agrarian and daily-wage working population. The village relies heavily on the Nallur Government High School (Nallur GHSS) for primary and secondary education of local youth.",
    monsoonVulnerability: "During the Northeast Monsoon (October to December) and recurring tropical cyclones (such as Cyclone Vardah, Nivar, and Michaung), the low-lying terrain is susceptible to severe waterlogging and flash floods. Power infrastructure is routinely disrupted for 3 to 4 continuous days, disabling overhead power lines and local transformers.",
    blackoutConsequences: [
      {
        title: "Disruption of Public Schooling & Digital Learning",
        description: "Frequent grid outages during monsoon and hot summer months plunged classrooms into darkness, stifling study sessions, computer literacy training, and board examination preparations.",
      },
      {
        title: "Loss of Emergency Communication & Lifeline Services",
        description: "Extended power shutdowns depleted mobile phone batteries across the village, disconnecting families from emergency responders, weather alerts, and relief personnel.",
      },
      {
        title: "Lack of Power at the Designated Flood Relief Center",
        description: "During seasonal flooding, Nallur Government High School serves as the official village refuge shelter. In previous floods, evacuees had no lighting, mobile charging, or water pump power during the darkest hours.",
      },
    ],
    needsAssessmentSurvey: {
      date: "September 2022",
      surveyParticipants: "Poonthandalam Panchayat members, school faculty, parents, and local youth",
      keyFinding: "Over 85% of surveyed villagers highlighted chronic multi-day power cuts during rainy seasons as their foremost barrier to safety, communication, and educational continuity. The community enthusiastically supported using the school's elevated concrete roof for a shared solar hub.",
    },
  },

  solution: {
    title: "The Implemented Solar Electrification Solution",
    overview: "Rather than treating solar energy as a passive rooftop panel installation, the youth engineering team conceptualized a dual-purpose community energy station. On ordinary days, the system powers the school classrooms, staff room, and computer lab free of fossil electricity. During storm blackouts and flood emergencies, it transforms into an open community charging and refuge hub.",
    dualModeOperation: [
      {
        mode: "Standard Educational Mode",
        purpose: "Daily school operations (Monday – Saturday)",
        coverage: "Powers 2 main classrooms, Headmaster's office, Staff room, and Computer Lab. Runs 11 ceiling fans, 10 LED tube lights, and 30 device power points without drawing from the grid during high-tariff day hours.",
      },
      {
        mode: "Disaster Resilience & Community Refuge Mode",
        purpose: "Monsoon floods, cyclone emergencies & grid collapse",
        coverage: "Provides 24/7 emergency illumination and a dedicated multi-device charging station (capable of charging 40–50 mobile phones, emergency torch lanterns, and portable radios simultaneously) for flood-affected families sheltered inside the school.",
      },
    ],
    systemHighlights: [
      "Completely autonomous off-grid design with dedicated MPPT tracking",
      "Cyclone-resistant aluminium mounting rated for 180 km/h wind speeds",
      "Tamper-proof, child-safe welded security cage for school safety",
      "Zero recurring fuel or utility expenses for the rural school",
    ],
  },

  technicalSpecs: {
    summary: "Detailed engineering specifications verified from procurement invoices, site inspection records, and final IEEE HAC project completion reporting.",
    tabs: [
      {
        id: "pv",
        title: "Solar PV Modules",
        items: [
          { label: "Make & Manufacturer", value: "Renewsys Solar" },
          { label: "Module Type", value: "Polycrystalline Multi-busbar Cells" },
          { label: "Number of Modules", value: "8 Modules" },
          { label: "Rated Wattage per Module", value: "335 Wp" },
          { label: "Total DC Capacity", value: "2.68 kWp (Nominal 2.4 - 2.6 kW)" },
          { label: "Micro-Crack Tolerance", value: "Multi-busbar architecture minimizing micro-crack efficiency drop" },
          { label: "Certifications", value: "IEC 61215, IEC 61730, RoHS Compliant" },
          { label: "Performance Warranty", value: "25-Year Linear Degradation Warranty" },
        ],
      },
      {
        id: "inverter",
        title: "Power Conditioning Unit (PCU)",
        items: [
          { label: "Make & Model", value: "UTL Off-Grid Solar PCU" },
          { label: "Inverter Rating", value: "3.5 kVA (230V AC, 50Hz, 1-Phase)" },
          { label: "DC Input Voltage", value: "48 Vdc Nominal" },
          { label: "Maximum Solar Input", value: "2.6 kWp PV array" },
          { label: "Charge Controller", value: "Integrated High-Efficiency MPPT Tracker" },
          { label: "Conversion Efficiency", value: "> 97% Peak Solar-to-AC conversion" },
          { label: "Display & Telemetry", value: "Multi-parameter LCD screen & e-SenZ telemetry unit" },
          { label: "Warranty", value: "2-Year Manufacturer Replacement Warranty" },
        ],
      },
      {
        id: "battery",
        title: "Energy Storage Bank",
        items: [
          { label: "Make & Series", value: "Axcel Ryzen Solar C10 Series" },
          { label: "Battery Chemistry", value: "Deep-Cycle Tubular Lead-Acid (Solar C10 rated)" },
          { label: "Quantity & Configuration", value: "4 Units connected in series for 48 Vdc bank" },
          { label: "Unit Capacity", value: "12V - 150Ah / 160Ah each" },
          { label: "Total Bank Energy Capacity", value: "7.2 kWh Nominal (48V × 150Ah)" },
          { label: "Depth of Discharge (DoD)", value: "Up to 90% DoD tested under emergency run" },
          { label: "Expected Cycling Life", value: "1,500+ deep cycles under ambient tropical climate" },
          { label: "Warranty", value: "60 Months (5 Years) Full Warranty" },
        ],
      },
      {
        id: "civil_safety",
        title: "Mounting & Safety Systems",
        items: [
          { label: "Mounting Structure", value: "High-grade Aluminium Triangles with Stainless Steel (SS304) Fasteners" },
          { label: "Wind Stability Rating", value: "Engineered for 180 km/h wind gusts (cyclone resilient)" },
          { label: "Roof Anchorage", value: "Non-penetrating concrete ballasts (preserves school waterproof roof)" },
          { label: "Child Protection Enclosure", value: "Custom fabricated iron-mesh security cage around inverter & battery bank" },
          { label: "Earthing & Grounding", value: "Dedicated copper earthing with child-safe inspection chamber cover" },
          { label: "DC / AC Cabling", value: "4 sq.mm tin-annealed DC cables & Polycab AC wiring enclosed in rigid uPVC conduits" },
          { label: "Switchgear Protection", value: "DC Combiner Box, 32A AC MCB, and transient surge arrestor" },
        ],
      },
    ],
    connectedLoadsTable: [
      { room: "Classroom 1", fans: 3, lights: 3, sockets: 6, purpose: "Daily Grade 9/10 Instruction" },
      { room: "Classroom 2", fans: 3, lights: 3, sockets: 6, purpose: "Daily Grade 7/8 Instruction" },
      { room: "Computer Lab", fans: 2, lights: 2, sockets: 10, purpose: "Digital Literacy & Online Exams" },
      { room: "Staff / Office Room", fans: 3, lights: 2, sockets: 8, purpose: "Administration & Emergency Control" },
      { room: "Total Load Outlets", fans: 11, lights: 10, sockets: 30, purpose: "51 Direct Fixtures + Expansion Ports (57 Total)" },
    ],
  },

  impact: {
    title: "Documented Climate & Community Impact",
    environmental: [
      {
        title: "Clean Energy Output",
        metric: "~4,380 kWh / year",
        description: "Produces approximately 12 kWh of clean electricity daily (averaging 720 kWh per 60-day utility cycle), replacing diesel generation and thermal grid dependency.",
      },
      {
        title: "Greenhouse Gas Abatement",
        metric: "~4.0 Tonnes CO₂ / year",
        description: "Avoids 4 metric tonnes of carbon emissions annually. Documented 12.4 tonnes saved across the initial tracking period, with a lifetime projection of 14.4 to 50+ tonnes.",
      },
      {
        title: "Equivalent Forest Impact",
        metric: "360 – 384 Trees",
        description: "Carbon offset equivalent to planting and nurturing over 360 mature native trees over the system's operational timeline.",
      },
    ],
    social: [
      {
        title: "Educational Continuity for Rural Youth",
        metric: "150+ Students & Faculty",
        description: "Eliminated classroom downtime caused by afternoon blackouts. Enabled regular operation of the school computer lab for student STEM lessons and state assessments.",
      },
      {
        title: "Village Disaster Resilience & Relief Refuge",
        metric: "100 Families Protected",
        description: "During seasonal monsoon inundations, Nallur High School remains the only building in Poonthandalam with guaranteed light, phone charging, and shelter power.",
      },
      {
        title: "Financial Sustainability for Public School",
        metric: "₹34,560 Saved Annually",
        description: "Saves the rural government school ~₹5,760 per bi-monthly billing cycle, allowing the institution to redirect precious school funds toward student learning materials.",
      },
    ],
  },

  sdgs: [
    {
      number: 7,
      title: "Affordable and Clean Energy",
      color: "#FCC30B",
      alignment: "Primary Focus",
      targets: "Target 7.1 & 7.2",
      description: "Directly installed 2.68 kWp of decentralized off-grid solar power with 7.2 kWh storage, bringing modern, zero-emission electricity to a rural government school that suffered regular power outages.",
    },
    {
      number: 13,
      title: "Climate Action",
      color: "#3F7E44",
      alignment: "Core Climate Solution",
      targets: "Target 13.1 & 13.3",
      description: "Builds adaptive resilience against climate-induced monsoon disruptions while abating ~4 tonnes of CO₂ greenhouse gas emissions each year without reliance on polluting diesel gensets.",
    },
    {
      number: 4,
      title: "Quality Education",
      color: "#C5192D",
      alignment: "Direct Co-Benefit",
      targets: "Target 4.a",
      description: "Provides child-friendly, well-lit, and ventilated learning spaces for 150+ rural students. Protects digital learning in the computer laboratory from sudden power dropouts.",
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      color: "#FD9D24",
      alignment: "Disaster Preparedness",
      targets: "Target 11.5 & 11.b",
      description: "Strengthens community disaster response by transforming the government school into an energized refuge center for 100+ village families during severe floods and cyclone strikes.",
    },
  ],

  timeline: [
    {
      date: "September 2022",
      phase: "Needs Assessment & Proposal",
      title: "Community Survey & Engineering Design",
      description: "Student volunteers and faculty conducted a detailed door-to-door needs survey in Poonthandalam village, documented recurring flood blackout issues, and submitted a humanitarian proposal to IEEE HAC/SIGHT.",
      badge: "Ideation",
    },
    {
      date: "December 2022 – January 2023",
      phase: "Grant Award & Permissions",
      title: "Grant Award & Stakeholder Approvals",
      description: "IEEE HAC/SIGHT selected and awarded the project a $4,000 USD grant (Project ID: 22-HAC-103). Official site authorization was approved by Poonthandalam Village Panchayat and School Headmaster.",
      badge: "Approval",
    },
    {
      date: "08 February 2023",
      phase: "Kickoff",
      title: "Inaugural Stakeholder Planning Meeting",
      description: "On-site planning summit hosted at Nallur GHSS with College Principal, Department Head, Panchayat President Mr. Gnana Prakash, Headmaster Mr. Stephen, and student leads.",
      badge: "Milestone",
    },
    {
      date: "March 2023",
      phase: "Phase I",
      title: "Civil Works & Rooftop Solar Erection",
      description: "Procurement of 8 × 335Wp Renewsys panels. Skilled masonry work to construct non-penetrating concrete ballasts. Assembly of 180 km/h wind-rated aluminium mounting framework and panel clamping.",
      badge: "Construction",
    },
    {
      date: "April 2023",
      phase: "Phase II",
      title: "Power Inverter, Battery Bank & Safety Enclosure",
      description: "Installation of 3.5 kVA UTL inverter, 4 × 150Ah Axcel C10 battery bank, DC combiner box, and child-safe earthing chamber. Fabrication of welded iron security cage enclosing power hardware inside school.",
      badge: "Electrical",
    },
    {
      date: "May 2023",
      phase: "Phase III",
      title: "Testing, Load Commissioning & Safety Audit",
      description: "Commissioning test run delivering 12 kWh/day solar generation. Comprehensive wiring safety inspection, uPVC conduit isolation, and load balancing across 51 outlets and fixtures.",
      badge: "Validation",
    },
    {
      date: "23 July 2023",
      phase: "Launch Ceremony",
      title: "Official Public Inauguration & Handover",
      description: "Grand community launch attended by Sairam Institutions CEO Shri. Sai Prakash Leomuthu, Panchayat President Mr. Gnana Prakash, School HM Mr. Stephen, Village Councillor Ms. Malarvizhi Murugan, and village families.",
      badge: "Operational",
    },
    {
      date: "Late 2023 – 2024",
      phase: "Post-Launch",
      title: "Maintenance Service & Remote Telemetry",
      description: "First scheduled service check completed successfully. Deployment of e-SenZ remote monitoring unit to track daily energy yield, battery health, and seasonal solar irradiance remotely.",
      badge: "Sustained",
    },
  ],

  photos: [
    {
      id: "rooftop",
      src: getAssetUrl("/images/solar-rooftop-array.jpg"),
      title: "2.68 kWp Rooftop Solar PV Array",
      category: "Hardware",
      caption: "8 × 335Wp Renewsys Polycrystalline modules mounted on custom 180 km/h cyclone-rated aluminium structures with concrete ballasts atop Nallur Government High School.",
    },
    {
      id: "storage-cage",
      src: getAssetUrl("/images/inverter-battery-bank.jpg"),
      title: "Child-Safe Inverter & Battery Security Cage",
      category: "Safety & Storage",
      caption: "UTL 3.5 kVA Solar Inverter and 4 × 150Ah Axcel C10 battery bank (48Vdc) secured behind a custom welded iron mesh cage to ensure full child safety in the school corridor.",
    },
    {
      id: "distribution",
      src: getAssetUrl("/images/electrical-distribution.jpg"),
      title: "AC/DC Distribution & Conduit Wiring",
      category: "Engineering",
      caption: "Protected electrical terminations showing tin-annealed 4 sq.mm DC cables and Polycab AC lines running through uPVC conduits into classrooms and the computer lab.",
    },
    {
      id: "inauguration",
      src: getAssetUrl("/images/inauguration-ceremony.jpg"),
      title: "Public Inauguration & Community Handover",
      category: "Community Event",
      caption: "Formal handover ceremony on 23 July 2023 at Nallur GHSS with Village Panchayat President, School Headmaster, Sairam leadership, student leads, and local residents.",
    },
    {
      id: "lamp-lighting",
      src: getAssetUrl("/images/ceremony-lamp-lighting.jpg"),
      title: "Traditional Lamp Lighting at Nallur GHSS",
      category: "Community Event",
      caption: "Ceremonial commencement celebrating the arrival of clean renewable power in the presence of school teachers, students, and village community leaders.",
    },
    {
      id: "dignitaries",
      src: getAssetUrl("/images/dignitaries-gathering.jpg"),
      title: "Stakeholder Gathering & Student Briefing",
      category: "Partnership",
      caption: "Student project team presenting the engineering architecture and maintenance protocols to community representatives and institutional advisors.",
    },
    {
      id: "newspaper",
      src: getAssetUrl("/images/newspaper-coverage.jpg"),
      title: "Regional Newspaper Media Coverage",
      category: "Press & Media",
      caption: "Published news report highlighting the youth-led solar electrification project at Poonthandalam village as a benchmark for rural institutional electrification.",
    },
  ],

  team: {
    title: "Youth Leadership & Mentorship Structure",
    leadOrganization: "Sri Sai Ram Engineering College, Chennai (in collaboration with IEEE Madras Section)",
    mentors: [
      {
        name: "Dr. Soma Prathibha",
        role: "Principal Investigator & Project Director",
        designation: "Associate Professor, Department of Information Technology; Senior Member, IEEE",
        contribution: "Provided technical project governance, grant oversight, safety compliance, and community liaison.",
      },
      {
        name: "Ms. V. Narmadha",
        role: "Project Faculty Advisor",
        designation: "Assistant Professor, Dept. of IT, Sri Sairam Engineering College; Senior Member, IEEE",
        contribution: "Advised on IoT remote monitoring architecture and field execution logistics.",
      },
      {
        name: "Ms. Janani Ramachandran",
        role: "Project External Advisor",
        designation: "Exe-Com Member, IEEE YP Madras Section; Former TFI Fellow",
        contribution: "Supported community needs assessment methodology and humanitarian project reporting.",
      },
    ],
    youthLeaders: [
      {
        name: "Shyamkumar M",
        role: "Student Project Lead",
        details: "Student Branch Chair, IEEE Student Member; Electronics & IoT specialist; coordinated procurement and site assembly.",
      },
      {
        name: "Kirthiga M",
        role: "Student Project Lead",
        details: "IEEE Student Member; managed vendor coordination, component validation, and system integration.",
      },
      {
        name: "Nirmal Raja K L",
        role: "Additional Project Lead",
        details: "IEEE Student Member; directed structural stability checks, wiring safety, and testing schedules.",
      },
      {
        name: "Abhijay Gopal S",
        role: "Project Field Executor",
        details: "IEEE Student Member; supervised civil masonry works, ballast placement, and earthing installation.",
      },
      {
        name: "Dhanya K",
        role: "Technical Lead (Electrical)",
        details: "IEEE Student Member; performed load calculation, inverter DC/AC cable sizing, and protection layout.",
      },
      {
        name: "Vivyn M",
        role: "Technical Lead (Systems)",
        details: "IEEE Student Member; configured the remote monitoring unit and collected bi-monthly telemetry data.",
      },
      {
        name: "Srinithi S",
        role: "Finance & Accounting Lead",
        details: "IEEE Student Member; managed project budget compliance, vendor quotes, and IEEE HAC financial audits.",
      },
      {
        name: "Manish M",
        role: "Documentation & Reporting Lead",
        details: "IEEE Student Member; compiled technical dossiers, assessment matrices, and handover logs.",
      },
      {
        name: "Priyadharshini D",
        role: "Community Surveyor",
        details: "IEEE Student Member; spearheaded initial household surveys and community feedback interviews.",
      },
    ],
    communityPartners: [
      {
        entity: "Poonthandalam Village Panchayat",
        representative: "Mr. Gnana Prakash (Village President) & Ms. Malarvizhi Murugan (Union Councillor)",
        role: "Official village governance endorsement, site access, and community mobilization.",
      },
      {
        entity: "Government High School, Nallur (Nallur GHSS)",
        representative: "Mr. Stephen (Headmaster) & Teaching Faculty",
        role: "Host facility, safe storage room provider, educational load connection, and ongoing daily supervision.",
      },
      {
        entity: "IEEE HAC & IEEE SIGHT",
        logo: getAssetUrl("/images/ieee-hac-logo.png"),
        representative: "Global Humanitarian Activities Committee",
        role: "Grant funding provider ($4,000 USD grant under Call for Proposals 22-HAC-103).",
      },
    ],
  },

  sustainability: {
    title: "Sustainability, Maintenance & Replication Potential",
    maintenancePlan: [
      {
        frequency: "Monthly",
        task: "Panel Cleaning & Visual Check",
        responsible: "Designated School Caretaker & Local Technician",
        procedure: "Clean dust and tree pollen off solar panel glass surfaces using plain water; inspect cable conduits for physical damage.",
      },
      {
        frequency: "Quarterly",
        task: "Battery Bank & Electrolyte Inspection",
        responsible: "Trained Project Volunteer / Service Contractor",
        procedure: "Check C10 tubular battery electrolyte levels, terminal tightness, petroleum jelly corrosion barrier, and cell voltages.",
      },
      {
        frequency: "Annually",
        task: "Comprehensive Electrical Audit",
        responsible: "Engineering Mentors & Licensed Electrician",
        procedure: "Test inverter conversion efficiency, MPPT tracker parameters, grounding resistance at earthing pit, and load breaker tripping.",
      },
    ],
    replicationBlueprint: {
      modularity: "The station was deliberately engineered using standard, widely available commercial components (Renewsys modules, UTL inverter, Axcel batteries) rather than proprietary custom hardware.",
      totalCost: "Total capital expenditure of approximately ₹2,82,000 INR (~$3,450 USD), demonstrating high capital efficiency compared to commercial microgrids.",
      scalability: "Over 4,500 rural government high schools across Tamil Nadu face similar monsoon vulnerabilities. This modular design can be cloned in 3 to 4 weeks using local technicians, creating immediate climate adaptation across coastal belts.",
    },
  },

  evidenceDossier: {
    title: "Documentary Evidence & Verification",
    note: "All project claims are substantiated by primary project documents in our archives, including official IEEE grant communications, audited accounts, vendor technical sheets, and panchayat letters.",
    documentsSummary: [
      {
        docName: "IEEE HAC Final Project Report (Project ID: 22-HAC-103)",
        type: "Audited International Grant Report",
        verifiedFacts: "Confirms $4,000 USD funding, project completion at Nallur GHSS, 2.68 kWp solar installation, 12 kWh/day generation, and 4.0 tonnes CO₂ reduction.",
      },
      {
        docName: "Poonthandalam Village Panchayat Endorsement Letter",
        type: "Local Government Endorsement",
        verifiedFacts: "Endorses the solar station at Nallur GHSS as a designated disaster shelter and emergency lighting source for the village during seasonal floods.",
      },
      {
        docName: "Technical Quotation & Commissioning Report (SVS Energy / Renonex)",
        type: "Engineering Specification Document",
        verifiedFacts: "Details 8 × 335Wp Renewsys modules, UTL 3.5 kVA inverter, 4 × 150Ah Axcel batteries, 180 km/h wind mount, and ₹2,82,000 procurement total.",
      },
      {
        docName: "Project Assessment Matrix (2022-2023)",
        type: "Standardized M&E Matrix",
        verifiedFacts: "Records baseline (0) vs actual (8 panels, 55.14 kWh tracked cycle, 57 electrical ports, 50% students protected during shutdowns).",
      },
      {
        docName: "Inauguration Ceremony Record (23 July 2023)",
        type: "Public Launch Record & Media",
        verifiedFacts: "Documents formal public launch in the presence of Panchayat President, School Headmaster, Sairam leadership, and local press.",
      },
    ],
    discrepancyClarifications: [
      {
        item: "Solar Panel Capacity (3.0 kW vs 2.68 kWp)",
        explanation: "The early grant conceptual narrative referenced a round '3 kW' target. The actual installed and commissioned engineering array consists of 8 × 335 Wp Renewsys polycrystalline modules, totaling exactly 2.68 kWp DC capacity (nominal operating 2.4 - 2.6 kWp with a 3.5 kVA inverter). We report the precise 2.68 kWp figure.",
      },
      {
        item: "Battery Chemistry Selection (Li-Po vs Solar C10 Tubular Lead-Acid)",
        explanation: "Early conceptual notes explored lithium polymer options. During detailed technical sizing and vendor review, heavy-duty Axcel Ryzen 12V 150Ah/160Ah C10 deep-cycle solar batteries (4 units in series for 48Vdc) were selected. In the high ambient heat of rural Tamil Nadu, C10 deep-cycle batteries provide superior thermal stability, lower maintenance cost, and a robust 5-year warranty within the grant budget.",
      },
      {
        item: "Electrical Outlets Connected (40 Target vs 57 Achieved)",
        explanation: "The original project assessment matrix set a baseline target of 40 ports. During final Phase II execution, 51 primary fixtures (11 ceiling fans, 10 LED tube lights, 30 socket points) were installed, alongside 6 reserve distribution connections, delivering 57 verified power points across the school facility.",
      },
    ],
  },
};
