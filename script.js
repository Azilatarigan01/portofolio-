/**
 * NUR AZILA TARIGAN, S.KOM. — OFFICIAL PORTFOLIO 2026
 * Interactive Engine:
 * - Bilingual Support (EN default with 1-click switch to ID)
 * - 3D Coverflow Stacking Project Slider with Direct Card-Click Advancement
 * - Complete Project Case Studies (Tabsy, OrderFlow, PTPN IV, WebGIS, E-Learning, RFID Capstone)
 * - Real Credentials (IPK 3.68, BEM, Bendahara PPM 3 UNAIR, Relawan Banjir Aceh Tamiang)
 * - Confetti Canvas & Toast Handlers
 * - Walking Mascot Duo (walking across page while gently waddling)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. SKY-BLUE AMBIENT CONFETTI SYSTEM
  // =========================================================================
  const confettiCanvas = document.getElementById('confettiCanvas');
  const ctx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
  let particles = [];
  const skyPastelColors = [
    '#0284C7',
    '#38BDF8',
    '#2563EB',
    '#BAE6FD',
    '#F7CAC9',
    '#92A8D1',
    '#60A5FA'
  ];

  function resizeCanvas() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function triggerConfetti(originX, originY, count = 35) {
    if (!confettiCanvas || !ctx) return;
    const x = originX !== undefined ? originX : window.innerWidth / 2;
    const y = originY !== undefined ? originY : window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.75) * 14,
        size: Math.random() * 7 + 4,
        color: skyPastelColors[Math.floor(Math.random() * skyPastelColors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }
  }

  function renderConfetti() {
    if (!confettiCanvas || !ctx) return;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.75);
      ctx.restore();
    }

    requestAnimationFrame(renderConfetti);
  }
  renderConfetti();

  // =========================================================================
  // 2. INTERNATIONALIZATION (i18n): ENGLISH (DEFAULT) & INDONESIAN
  // =========================================================================
  const i18n = {
    en: {
      // Navigation
      navSubtitle: 'Information Systems & Web Specialist',
      navHome: 'Home',
      navProjects: 'Projects',
      navSkills: 'Skills',
      navExp: 'Experience',
      navAwards: 'Awards',
      navLead: 'Leadership',
      navAbout: 'About',
      navContact: 'Contact',
      navHire: 'Hire Me',

      // Hero
      heroBadge: '👋 AVAILABLE FOR FULL-TIME ROLES & ENTERPRISE PROJECTS',
      heroSub: 'Information Systems graduate (GPA 3.68) specializing in full-stack web applications, spatial WebGIS analytics, relational databases, and enterprise data governance with proven cross-functional leadership.',
      captionPortfolio: 'PORTFOLIO SHOWCASE • 2026',
      heroCtaProjects: 'Explore Featured Projects',
      heroCtaConnect: "Let's Connect",
      heroCtaCv: 'Download Official CV',

      // Projects 3D Coverflow
      projectsTag: '🚀 3D STACKED SHOWCASE • CLICK CARD TO ROTATE',
      projectsTitle: 'Real-World Projects & <span class="text-gradient-sky">System Impact</span>',
      projectsSubtitle: '<strong>Click directly on any card</strong> or use the arrow buttons to cycle through the 3D deck. Each project includes live deployment links or source repositories along with comprehensive case study details.',
      specFeatures: 'Features',
      specImpact: 'Impact',
      specArch: 'Architecture',
      specModule: 'Module',
      specStatus: 'Status',
      specOrg: 'Organization',
      specRole: 'Role',
      specSec: 'Security',
      specRegion: 'Region',
      specAlgo: 'Algorithms',
      specMapping: 'Mapping',
      specOutput: 'Output',
      specInst: 'Institution',
      specExams: 'Examinations',
      specHonor: 'Verification',
      specAccuracy: 'Accuracy',
      btnCaseStudy: 'Case Study',
      btnLiveApp: 'Live App ↗',
      btnRepo: 'GitHub Repo ↗',
      btnInquire: 'Inquire System ↗',

      // 6 Project Cards
      p0_cat: 'Workspace Productivity',
      p0_title: 'Tabsy App — Smart Tab & Workspace Productivity Manager',
      p0_desc: 'Lightweight browser tab manager and productivity workspace for organizing project tabs, persistent cloud session bookmarks, search filtering, and distraction-free workflow.',
      p0_spec_feat: 'Session & Tab Sync',
      p0_spec_imp: 'Workflow Efficiency',

      p1_cat: 'Procurement & Orders',
      p1_title: 'OrderFlow — Enterprise Order & Supply Chain Management',
      p1_desc: 'Enterprise order tracking and purchase workflow system with dynamic status pipelines, invoice summaries, customer directory, and automated stock validation.',
      p1_spec_arch: 'Modern Enterprise UI',
      p1_spec_mod: 'Order Tracking & Invoicing',
      p1_spec_st: 'Production Ready',

      p2_cat: 'PTPN IV Dolok Sinumbah',
      p2_title: 'Employee Aspiration & Whistleblowing System (Lapor Pak!)',
      p2_desc: 'Secure enterprise internal web portal and grievance whistleblowing reporting system engineered for Dolok Sinumbah estate unit of PTPN IV Regional II to support verified transparent personnel communication.',
      p2_spec_org: 'PTPN IV Regional II',
      p2_spec_role: 'Full-Stack Developer',
      p2_spec_sec: 'Whistleblower Privacy',
      p2_spec_imp: '100% Case Transparency',

      p3_cat: 'Health Dept & Research',
      p3_title: 'Spatial Analytics & Tuberculosis (TB) Prediction WebGIS',
      p3_desc: 'Interactive spatial analytics WebGIS for North Aceh Health Agency. Integrates Moran Index spatial autocorrelation mapping with Facebook Prophet machine learning time-series disease forecasting.',
      p3_spec_reg: 'North Aceh Regency',
      p3_spec_algo: "Prophet & Moran's I",
      p3_spec_map: 'Interactive Leaflet.js',
      p3_spec_out: 'Hotspot Maps & Forecast',

      p4_cat: 'Academic Management',
      p4_title: 'SMA Tuna Bangsa Integrated E-Learning System',
      p4_desc: 'Centralized learning management platform for administrators, teachers, and students featuring classroom management, learning materials repository, structured online examinations, and automated grade reporting.',
      p4_spec_inst: 'SMA Tuna Bangsa',
      p4_spec_role: 'Admin, Teacher, Student',
      p4_spec_exam: 'Online Exam Module',
      p4_spec_imp: 'Academic Centralization',

      p5_cat: 'Smart Campus & IoT',
      p5_title: 'RFID-Based Student Monitoring System with Automated Photo Capture',
      p5_desc: 'Wireless attendance verification system integrating RFID RC522 scanner with real-time OpenCV webcam photo capture during badge taps to eliminate attendance fraud, complete with parent email alerts and cloud backup.',
      p5_spec_hon: 'Attendance Integrity',
      p5_spec_acc: '100% Identity Match',

      // Core Capabilities & Skills
      capTag: '⚡ CORE CAPABILITIES & METHODOLOGY',
      capTitleText: 'Core Competencies & <span class="text-gradient-sky">Engineering Strengths</span>',
      capSubtitle: 'A balanced synthesis of rigorous software engineering, spatial data analysis, enterprise ERP operational workflows, and verified organizational governance.',
      capQuote: '"Skills are the bedrock for turning complex problems into scalable digital reality."',
      cap1_num: '01',
      cap1_badge: 'TECHNICAL & SYSTEM DEVELOPMENT',
      cap1_title: 'Full-Stack Web & Spatial Engineering',
      cap1_desc: 'Designing, building, and deploying responsive web applications, relational database architectures, spatial WebGIS analytics, and machine learning models with industry-standard reliability.',
      cap2_num: '02',
      cap2_badge: 'OPERATIONS & PROFESSIONAL GOVERNANCE',
      cap2_title: 'Digital Operations & Stewardship',
      cap2_desc: 'Adaptive cross-functional collaboration, official budget reporting (LPJ) compliance, meticulous data reconciliation, Odoo ERP management, and structured emergency administration.',
      matrixAll: 'All Tools (24)',
      matrixWeb: 'Web & Frontend',
      matrixBackend: 'Backend & DB',
      matrixData: 'Data & GIS',
      matrixOps: 'Operations & Design',
      matrixTitle: 'Tech Ecosystem Matrix',
      matrixSubtitle: '24 core technologies, libraries, and enterprise platforms utilized in production projects',

      // Experience Section
      expTag: '💼 PRACTICAL EXPERIENCE & ENTERPRISE IMPACT',
      expTitle: 'Professional Experience & <span class="text-gradient-sky">Field Practice</span>',
      expSubtitle: 'Direct operational experience in leading state-owned agribusiness enterprises, heavy industrial manufacturing zones, and independent client web engineering.',
      exp1_role: 'IT DEVELOPER INTERN',
      exp1_period: 'Jan 2025 – Feb 2025 • On-site',
      exp1_comp: 'PT Perkebunan Nusantara IV (Regional II) — Dolok Sinumbah',
      exp1_loc: '📍 Dolok Sinumbah, Simalungun',
      exp1_b1: 'Engineered web-based information system solutions to streamline administrative workflows across Dolok Sinumbah operational estate from system design to testing.',
      exp1_b2: 'Conducted systematic business process analysis and workflow mapping collaboratively with the Office Personnel Assistant.',
      exp1_b3: 'Built an integrated enterprise information portal and employee whistleblowing grievance service (Lapor Pak!) to ensure organizational transparency.',
      exp1_b4: 'Architected relational MySQL database structures, implemented parameterized SQL queries, and established clean, auditable data governance.',
      exp1_jumpBtn: 'View Project Case Study ↗',
      exp1_fb_tag: '🏛️ STATE AGRIBUSINESS ENTERPRISE',
      exp1_fb_title: 'Enterprise System Engineering',
      exp1_fb_sub: 'PT Perkebunan Nusantara IV (Regional II) Dolok Sinumbah',
      exp1_fb_f1: '✓ Internal Web Portal',
      exp1_fb_f2: '✓ Whistleblowing System',
      exp1_fb_f3: '✓ MySQL RDBMS Architecture',

      exp2_role: 'IT SUPPORT INTERN',
      exp2_period: 'Dec 2021 – Mar 2022 • On-site',
      exp2_comp: 'PT Industri Nabati Lestari (INL) — KEK Sei Mangkei',
      exp2_loc: '📍 Sei Mangkei Special Economic Zone, Batubara',
      exp2_b1: 'Supported palm oil refinery operational data management utilizing enterprise ERP (Odoo ERP), executing data entry updates and inventory reconciliation.',
      exp2_b2: 'Collaborated with senior IT personnel in diagnosing and troubleshooting end-user hardware, network connectivity, and operating system issues.',
      exp2_b3: 'Interacted across multiple operational departments to log, prioritize, and resolve enterprise workflow inquiries.',
      exp2_b4: 'Maintained technical documentation and equipment service logs to support reliable IT infrastructure operations.',
      exp2_fb_tag: '🏭 SPECIAL ECONOMIC ZONE',
      exp2_fb_title: 'Enterprise ERP & IT Support',
      exp2_fb_sub: 'PT Industri Nabati Lestari — Refinery Operations',
      exp2_fb_f1: '✓ Odoo ERP Verification',
      exp2_fb_f2: '✓ Network & Hardware Support',
      exp2_fb_f3: '✓ Multi-Dept Ticketing',

      exp3_role: 'FREELANCE DIGITAL INVITATION DESIGNER',
      exp3_period: '2022 – Present • Creative Design',
      exp3_comp: 'Bespoke Digital Invitations & Visual Media (Canva Pro)',
      exp3_loc: '📍 Remote / Commercial Practice',
      exp3_hl: '<strong>Aesthetic Visual Media & Digital Design:</strong> Delivered bespoke mobile-optimized digital invitations and event media using Canva Pro tailored to client themes with 100% on-time delivery and high satisfaction.',
      exp3_b1: 'Designed aesthetic, personalized digital invitations for weddings, birthdays, graduations, and formal events using Canva Pro with balanced typography, color harmony, and modern layouts.',
      exp3_b2: 'Created mobile-optimized multi-page layouts and subtle visual transition animations tailored specifically for smartphone screens and social media distribution.',
      exp3_b3: 'Structured key event logistical details and digital gift sections, cleanly incorporating verified bank account numbers and venue directions within the visual layout.',
      exp3_b4: 'Managed end-to-end client consultations from visual moodboards, custom theme requests, and rapid revision turnarounds to finalized high-resolution digital exports.',
      exp3_seal: '⭐ 100% On-Time Client Delivery',
      exp3_fb_tag: '🎨 CREATIVE DESIGN PRACTICE',
      exp3_fb_title: 'Digital Invitation Design',
      exp3_fb_sub: 'Bespoke Canva Pro Graphic & Visual Media Production',
      exp3_fb_f1: '✓ Canva Pro Mastery',
      exp3_fb_f2: '✓ Direct Bank Account Info',
      exp3_fb_f3: '✓ Aesthetic Layout & Typography',

      // Awards Section
      awardsTag: '🎖️ ACADEMIC HONORS & NATIONAL RECOGNITIONS',
      awardsTitle: 'Academic Honors & <span class="text-gradient-sky">Verified Distinctions</span>',
      awardsSubtitle: 'Official distinctions earned through sustained technical dedication, vocational valedictorian performance, and competitive nationwide selection.',
      aw1_badge: 'VOCATIONAL VALEDICTORIAN • RPL',
      aw1_title: 'Top Graduate in Software Engineering (RPL)',
      aw1_inst: 'SMK Swasta Al Washliyah 2 Perdagangan',
      aw1_desc: 'Conferred the Top Graduate award in Software Engineering (Rekayasa Perangkat Lunak) for academic excellence, complete programming curriculum mastery, and technical leadership during vocational studies.',
      aw1_t1: 'Rank #1 RPL Major',
      aw1_t2: 'Software Engineering Roots',
      aw1_t3: 'Vocational Honors',
      aw1_fb_lead: 'Valedictorian RPL',

      aw2_badge: 'ACADEMIC HONORS • GPA 3.68',
      aw2_title: '"Very Satisfactory" Academic Honors (GPA 3.68 / 4.00)',
      aw2_inst: 'Universitas Malikussaleh — S1 Sistem Informasi',
      aw2_desc: 'Conferred the Bachelor of Computer Science (S.Kom.) degree with a Cumulative GPA of 3.68 / 4.00, demonstrating rigorous command over web applications, information system analysis, and relational database architecture.',
      aw2_t1: 'GPA 3.68 / 4.00',
      aw2_t2: 'Very Satisfactory Honors',
      aw2_t3: 'Bachelor of Computer Science',
      aw2_fb_lead: 'GPA 3.68 Honors',

      aw3_badge: 'NATIONAL SELECTION • KEMENDIKBUD RI',
      aw3_title: 'Merdeka Student Exchange Awardee (PMM Batch 3)',
      aw3_inst: 'Universitas Airlangga (UNAIR), Surabaya • Kemendikbudristek RI',
      aw3_desc: 'Selected through nationwide competitive selection for Merdeka Student Exchange Batch 3 funded by Kemendikbudristek RI, representing Universitas Malikussaleh for one full academic semester at Universitas Airlangga.',
      aw3_t1: 'National Grantee Kemendikbud',
      aw3_t2: 'Study at UNAIR Surabaya',
      aw3_t3: 'Inter-University Mobility',
      aw3_fb_lead: 'National PMM 3 Awardee',

      // Leadership & Organization Section
      leadTag: '🤝 LEADERSHIP & CRISIS STEWARDSHIP',
      leadTitle: 'Organizational Leadership & <span class="text-gradient-sky">Social Stewardship</span>',
      leadSubtitle: 'Proven record of orchestrating national technology competitions, generating autonomous organizational revenue, state grant financial auditing, and humanitarian disaster relief administration.',
      org1_role: 'NATIONAL TECH COMPETITION • CHAIR',
      org1_period: '2025 • National Event',
      org1_inst: 'HIMASI Universitas Malikussaleh',
      org1_title: 'Head of Event Operations — National Technology Competition (IST.CO 2025)',
      org1_hl: '<strong>National Scale Event:</strong> Directed event operations for a nationwide tech competition featuring <em>UI/UX Design</em> & <em>Technology Innovation</em> tracks ("A Sustainable Future").',
      org1_b1: 'Led 15+ event division members in orchestrating a nationwide tech competition from initial registration to final Awarding Ceremony.',
      org1_b2: 'Formulated competitive guidelines, technical judging scoring metrics, and briefing books for UI/UX Design and Technology Innovation tracks.',
      org1_b3: 'Curated and moderated digital keynote seminars with industry experts exploring sustainable tech and future software innovation.',
      org1_b4: 'Coordinated closely with faculty deans and expert judges to ensure impartial scoring and flawless execution.',
      org1_t1: 'UI/UX Design Track',
      org1_t2: 'Tech Innovation Track',
      org1_t3: 'Event Operations Lead',
      org1_t4: 'National Scale',
      org1_fb_tag: '🏆 NATIONAL EVENT',
      org1_fb_title: 'IST.CO 2025 National',
      org1_fb_sub: 'UI/UX & Tech Innovation Competition',

      org2_role: 'HEAD OF DEPARTMENT • REVENUE GENERATOR',
      org2_period: '2023 – 2024',
      org2_inst: 'BEM Fakultas Teknik Universitas Malikussaleh',
      org2_title: 'Head of Entrepreneurship Department (KWU) — BEM Faculty of Engineering',
      org2_hl: '<strong>Financial Autonomy & Revenue Engine:</strong> Spearheaded an autonomous profit-generating division for BEM FT treasury through official merchandise pipelines and multi-million rupiah sponsorships.',
      org2_b1: 'Led departmental team members in managing organizational merchandise procurement (official engineering apparel/PDH, pins, accessories) and student bazaars.',
      org2_b2: 'Negotiated supply chain pricing with garment and printing vendors to lower cost of goods sold (COGS) and maximize organizational treasury margins.',
      org2_b3: 'Initiated entrepreneurship talkshows, securing IDR 3,000,000+ in corporate sponsorships to support BEM FT operational budgets.',
      org2_b4: 'Authored and defended official financial Accountability Reports (LPJ) with transparent, verified treasury audits.',
      org2_t1: 'Vendor Negotiation',
      org2_t2: 'Merchandise Procurement',
      org2_t3: 'Sponsorship Acquisition',
      org2_t4: 'Official LPJ Auditing',
      org2_fb_tag: '💼 REVENUE & MERCH',
      org2_fb_title: 'Head of KWU Dept BEM FT',
      org2_fb_sub: 'Merchandise Procurement, Sponsor & Official LPJ',

      org3_role: 'GROUP TREASURER • PMM 3 KEMENDIKBUD',
      org3_period: '2023 • National Mobility',
      org3_inst: 'Universitas Airlangga, Surabaya • Kemendikbudristek RI',
      org3_title: 'Group Treasurer (Modul Nusantara) — PMM Batch 3 Universitas Airlangga',
      org3_hl: '<strong>National Grant Stewardship:</strong> Entrusted with state cultural grant allocations and group operational cash flows across inter-university grantees nationwide.',
      org3_b1: 'Represented Universitas Malikussaleh in the prestigious national student exchange at Universitas Airlangga (UNAIR), Surabaya, entrusted as Group Treasurer.',
      org3_b2: 'Managed daily operational disbursements and cash flows across cultural explorations, community visits, and diversity exchange agendas.',
      org3_b3: 'Audited transactional invoices, maintained periodic ledgers, and ensured 100% compliance with Ministry of Education (Kemendikbudristek RI) budget regulations.',
      org3_b4: 'Fostered close collaboration with faculty advisors and student representatives from universities across Indonesia.',
      org3_t1: 'Budget Stewardship',
      org3_t2: 'SPJ State Compliance',
      org3_t3: 'Inter-Campus Collaboration',
      org3_t4: 'UNAIR Mobility',
      org3_fb_tag: '🏛️ MODUL NUSANTARA',
      org3_fb_title: 'Treasurer PMM 3 UNAIR',
      org3_fb_sub: 'National Diversity Grant Cash Flow',

      org4_role: 'HEAD OF ADMINISTRATION • CRISIS RELIEF',
      org4_period: '2022 • Emergency Operations',
      org4_inst: 'Aceh Tamiang Emergency Flood Disaster Command Post',
      org4_title: 'Head of Administration — Aceh Tamiang Emergency Flood Disaster Volunteer Team',
      org4_hl: '<strong>Humanitarian Logistics & Data Governance:</strong> Directed real-time registration for hundreds of flood-affected citizens and ensured auditable emergency logistics distribution.',
      org4_b1: 'Led emergency command post administration, registering and validating demographic data for hundreds of flood-affected families in real time.',
      org4_b2: 'Controlled logistics documentation for incoming/outgoing relief shipments (food rations, clothing, medical supplies) to eliminate discrepancies.',
      org4_b3: 'Ensured humanitarian relief reached isolated evacuation points equitably, transparently, and on schedule.',
      org4_b4: 'Maintained responsive communication between field rescue teams, philanthropic donors, and regional emergency headquarters.',
      org4_t1: 'Crisis Data Governance',
      org4_t2: 'Relief Logistics Verification',
      org4_t3: 'Emergency Operations',
      org4_t4: 'Humanitarian Stewardship',
      org4_fb_tag: '🛡️ CRISIS RESPONSE',
      org4_fb_title: 'Emergency Disaster Volunteer',
      org4_fb_sub: 'Aceh Tamiang Flood Crisis Administration',

      leadMilestoneHeader: '⚡ Key Event Milestones & Academic Organizing',
      ms1_role: 'VICE COORDINATOR OF DISCIPLINE • 2024',
      ms1_event: 'Faculty Orientation (PKKMB FT UNIMAL 2024)',
      ms1_desc: 'Led crowd control, established code of conduct protocols, and ensured safety for 1,000+ new engineering students during campus orientation.',
      ms2_role: 'STEERING COMMITTEE • 2023',
      ms2_event: 'Beyond Entrepreneurship Talkshow',
      ms2_desc: 'Directed strategic event concepts, oversaw timeline milestones, and assisted in acquiring corporate event partnerships.',
      ms3_role: 'PUBLIC RELATIONS & EDUTECH OFFICER • 2023 – 2024',
      ms3_event: 'Information Systems Student Association (HIMASI)',
      ms3_desc: 'Managed digital educational media outreach, authored EduTech content series, and coordinated external partnerships with partner organizations.',
      ms4_role: 'CLOSING GALA COORDINATOR • 2025',
      ms4_event: 'ISSCOM HIMASI Gala Night',
      ms4_desc: 'Stage show director, integrated audio-visual lighting operations, talent management, and overall production schedule coordination.',

      // About Section
      aboutTag: '👤 ABOUT NUR AZILA TARIGAN',
      aboutTitle: 'Systems Builder, Problem Solver & <span class="text-gradient-sky">Data Practitioner</span>',
      aboutSubtitle: 'Transforming complexity into functional digital reality through disciplined software engineering and empirical analysis.',
      aboutStat1: 'PRODUCTION WEB APPS',
      aboutStat2: 'CUMULATIVE GPA (OUT OF 4.00)',
      aboutStat3: 'GRADUATION YEAR (S.KOM.)',
      aboutBio1: 'I am an <strong>Information Systems graduate (S.Kom.)</strong> from Universitas Malikussaleh with an academic distinction (Cumulative GPA: <strong>3.68 / 4.00</strong>). My passion lies at the intersection of full-stack web engineering, relational database design, spatial WebGIS analytics, and operational enterprise governance.',
      aboutBio2: 'Having built roots in Software Engineering (RPL) where I graduated as <strong>Vocational Valedictorian</strong>, I approach systems development with an unwavering commitment to clean code, secure data modeling, and measurable business outcomes. My field internships at <em>PTPN IV Regional II</em> and <em>PT Industri Nabati Lestari</em> reinforced my capability to deliver robust digital solutions in demanding enterprise environments.',
      aboutBio3: 'Beyond coding, I bring proven leadership as the <strong>Chair of the National Technology Competition (IST.CO 2025)</strong>, financial stewardship as <strong>Group Treasurer for PMM Batch 3 at Universitas Airlangga</strong>, and crisis response agility as <strong>Head of Administration for Flood Disaster Volunteers</strong>. I bridge technical execution with reliable collaborative governance.',
      eduTitle: 'Universitas Malikussaleh • Bachelor of Computer Science',
      eduGpa: 'Cumulative GPA: 3.68 / 4.00 • Very Satisfactory',
      eduDesc: 'Comprehensive curriculum spanning Web Programming, Database Systems, Software Architecture, Enterprise Systems, and Spatial Data Analytics.',
      eduSmkTitle: 'SMK Swasta Al Washliyah 2 Perdagangan',
      eduSmkMajor: 'Software Engineering (RPL) • Valedictorian',
      eduSmkDesc: 'Top vocational graduate with strong foundations in object-oriented programming, relational databases, web development, and algorithms.',
      currTitle: 'Current Professional Focus',
      curr1_title: 'Engineering',
      curr1_desc: 'Enterprise web systems & WebGIS analytics platforms',
      curr2_title: 'Analyzing & QA',
      curr2_desc: 'Software QA, data integrity & ERP operational workflows',
      curr3_title: 'Continuous Learning',
      curr3_desc: 'Modern full-stack cloud architectures & spatial AI',
      traitKicker: 'CORE STRENGTHS',
      traitHint: 'Click card to cycle traits ↻',
      trait1_title: 'Problem Solver',
      trait1_desc: 'Transforming inefficient business operations, manual bureaucracy, and unstructured data into resilient, automated digital systems.',
      trait2_title: 'Detail-Oriented & Precise',
      trait2_desc: 'Passionate about clean code architecture, database normalization, official LPJ accountability, and thorough quality assurance.',
      trait3_title: 'Rapid Adaptability',
      trait3_desc: 'Quickly mastering new frameworks and enterprise tools from React and Python to Odoo ERP operations and spatial GIS algorithms.',
      trait4_title: 'Collaborative Leadership',
      trait4_desc: 'Demonstrated excellence directing national student delegations and orchestrating disaster relief emergency command logistics.',
      trait5_title: 'Uncompromising Integrity',
      trait5_desc: 'Deep commitment to transparent documentation, state grant accountability, professional ethics, and delivery excellence.',

      // Contact Section & Footer
      contactTag: '💌 LET’S CONNECT & COLLABORATE',
      contactTitle: 'Let’s Connect & <span class="text-gradient-sky">Collaborate!</span>',
      contactSubtitle: 'I am actively seeking full-time opportunities as a Full-Stack Developer, Systems Analyst, or Data/IT Specialist. Feel free to reach out for career discussions, freelance web inquiries, or technology collaborations.',
      chEmailType: 'OFFICIAL EMAIL (CLICK TO COPY)',
      chWaType: 'OFFICIAL WHATSAPP',
      badgeCopy: 'Copy 📋',
      formHeading: 'Send an Inquiry or Career Invitation',
      formNameLabel: 'Recruiter / Organization Name *',
      formNamePh: 'e.g., HR PT Example / Mr. Hendra',
      formEmailLabel: 'Contact Email *',
      formSubjectLabel: 'Subject',
      formSubjectPh: 'e.g., Full-Stack Developer Opportunity / Project Inquiry',
      formMsgLabel: 'Message or Project Description *',
      formMsgPh: 'Describe your job opportunity, project scope, or message here...',
      btnSendMsg: 'Send Message Now',
      footerText: 'Nur Azila Tarigan, S.Kom. • Universitas Malikussaleh (GPA 3.68) © 2026.',
      footerTop: 'Back to Top ↑',

      // Toasts
      emailCopiedToast: 'Email address azilatgrn01@gmail.com copied to clipboard! 📋',
      preparingCvToast: 'Preparing Curriculum Vitae for Nur Azila Tarigan, S.Kom...',
      cvDownloadedToast: 'CV for Nur Azila Tarigan, S.Kom. downloaded successfully! 📄✨',
      formSentToast: (name) => `Thank you ${name}! Your message has been sent.`,
      mascotToast: '🐾 Mascot companions cheering for you! ✨',
      // Additional Parity Keys
      aboutKpi1: 'PROVEN PROJECTS',
      aboutKpi2: 'CUMULATIVE GPA',
      aboutKpi3: 'BS.IS GRADUATED',
      aboutStoryP1: 'As an Information Systems practitioner rooted in Software Engineering, I regard software not merely as lines of code, but as instruments for solving tangible enterprise problems. My focus centers on dissecting bureaucratic workflows and operational bottlenecks, transforming them into structured, secure, and intuitive digital systems.',
      aboutStoryP2: 'My professional ethos rests upon three fundamental pillars: analytical rigor, data governance integrity, and end-to-end accountability. Whether architecting internal system portals from scratch, normalizing relational databases, or orchestrating cross-functional teams, my commitment is delivering measurable operational value.',
      aboutResumePrompt: 'Want to explore my detailed verified background?',
      aboutResumeLink: 'Download my official CV (PDF) ↗',
      currentlyKicker: 'CURRENTLY',
      exp2_seal: '🛡️ Verified 3-Month Industry Internship',
      exp3_company: 'Bespoke Digital Invitations & Visual Media (Canva Pro)',
      exp3_seal: '⭐ 100% On-Time Client Delivery',
      folderProjects: 'projects_01',
      folderExperience: 'experience_02',
      folderLeadership: 'leadership_03',
      folderCredentials: 'credentials_04',
      heroBtnConnect: "Let's Connect! ✨",
      heroBtnCv: 'CV (PDF)',
      heroScriptTag: 'Information Systems & Web Developer',
      btnGithub: 'GitHub Repo ↗',
      btnVisitLive: 'Live App ↗',
      ms_badge: 'EVENT PORTFOLIO',
      ms_kicker: 'CAMPUS MILESTONES',
      ms_title: 'Key Event Milestones',
    },

    id: {
      // Navigation
      navSubtitle: 'Spesialis Sistem Informasi & Web',
      navHome: 'Beranda',
      navProjects: 'Proyek',
      navSkills: 'Keahlian',
      navExp: 'Pengalaman',
      navAwards: 'Prestasi',
      navLead: 'Organisasi',
      navAbout: 'Tentang',
      navContact: 'Kontak',
      navHire: 'Rekrut Saya',

      // Hero
      heroBadge: '👋 TERBUKA UNTUK PELUANG KARIR & PROYEK ENTERPRISE',
      heroSub: 'Lulusan Sistem Informasi (IPK 3,68) dengan spesialisasi rekayasa web full-stack, analitika spasial WebGIS, arsitektur basis data relasional, dan tata kelola data enterprise berbekal kepemimpinan lintas fungsi yang teruji.',
      captionPortfolio: 'ETALASE PORTOFOLIO • 2026',
      heroCtaProjects: 'Jelajahi Proyek Unggulan',
      heroCtaConnect: 'Hubungi Saya',
      heroCtaCv: 'Unduh CV Resmi',

      // Projects 3D Coverflow
      projectsTag: '🚀 ETALASE 3D INTERAKTIF • KLIK KARTU UNTUK ROTASI',
      projectsTitle: 'Proyek Nyata & <span class="text-gradient-sky">Dampak Sistem</span>',
      projectsSubtitle: '<strong>Klik langsung pada kartu</strong> atau gunakan tombol panah untuk menelusuri tumpukan 3D. Setiap proyek dilengkapi tautan sistem langsung atau repositori kode beserta studi kasus mendalam.',
      specFeatures: 'Fitur',
      specImpact: 'Dampak',
      specArch: 'Arsitektur',
      specModule: 'Modul',
      specStatus: 'Status',
      specOrg: 'Organisasi',
      specRole: 'Peran',
      specSec: 'Keamanan',
      specRegion: 'Wilayah',
      specAlgo: 'Algoritma',
      specMapping: 'Pemetaan',
      specOutput: 'Keluaran',
      specInst: 'Institusi',
      specExams: 'Ujian',
      specHonor: 'Verifikasi',
      specAccuracy: 'Akurasi',
      btnCaseStudy: 'Studi Kasus',
      btnLiveApp: 'Buka Aplikasi ↗',
      btnRepo: 'Repositori GitHub ↗',
      btnInquire: 'Konsultasi Sistem ↗',

      // 6 Project Cards
      p0_cat: 'Produktivitas Workspace',
      p0_title: 'Tabsy App — Manajer Tab & Produktivitas Workspace Pintar',
      p0_desc: 'Manajer tab peramban modern dan workspace produktivitas untuk mengorganisir tab proyek, bookmark sesi tersinkronisasi, pencarian instan, dan alur kerja bebas distraksi.',
      p0_spec_feat: 'Sinkronisasi Sesi & Tab',
      p0_spec_imp: 'Efisiensi Alur Kerja',

      p1_cat: 'Pengadaan & Pesanan',
      p1_title: 'OrderFlow — Manajemen Pesanan & Rantai Pasok Enterprise',
      p1_desc: 'Sistem pelacakan pesanan enterprise dan workflow pembelian dengan visualisasi alur status dinamis, ringkasan faktur, direktori pelanggan, dan validasi inventaris terintegrasi.',
      p1_spec_arch: 'UI Enterprise Modern',
      p1_spec_mod: 'Pelacakan Pesanan & Faktur',
      p1_spec_st: 'Siap Produksi',

      p2_cat: 'PTPN IV Dolok Sinumbah',
      p2_title: 'Sistem Aspirasi & Pengaduan Karyawan (Lapor Pak!)',
      p2_desc: 'Portal informasi internal perusahaan dan sistem pengaduan aspirasi (whistleblowing) yang dibangun untuk unit kebun Dolok Sinumbah PTPN IV Regional II guna menjamin transparansi komunikasi karyawan.',
      p2_spec_org: 'PTPN IV Regional II',
      p2_spec_role: 'Full-Stack Developer',
      p2_spec_sec: 'Privasi Pengadu Terjamin',
      p2_spec_imp: '100% Transparansi Kasus',

      p3_cat: 'Dinas Kesehatan & Riset',
      p3_title: 'WebGIS Analisis Spasial & Prediksi Tuberkulosis (TB)',
      p3_desc: 'Aplikasi WebGIS analisis spasial interaktif untuk Dinas Kesehatan Aceh Utara. Mengintegrasikan pemetaan autokorelasi spasial Indeks Moran dengan peramalan deret waktu penyakit berbasis machine learning Facebook Prophet.',
      p3_spec_reg: 'Kabupaten Aceh Utara',
      p3_spec_algo: "Prophet & Indeks Moran",
      p3_spec_map: 'Leaflet.js Interaktif',
      p3_spec_out: 'Peta Hotspot & Peramalan',

      p4_cat: 'Manajemen Akademik',
      p4_title: 'Sistem Informasi E-Learning SMA Tuna Bangsa',
      p4_desc: 'Platform manajemen pembelajaran daring terpadu untuk administrator, guru, dan siswa. Menyediakan fitur manajemen kelas, bank materi pembelajaran, pengerjaan ujian online terstruktur, dan rekapitulasi nilai otomatis.',
      p4_spec_inst: 'SMA Tuna Bangsa',
      p4_spec_role: 'Admin, Guru, Siswa',
      p4_spec_exam: 'Modul Ujian Online',
      p4_spec_imp: 'Sentralisasi Akademik',

      p5_cat: 'Kampus Cerdas & IoT',
      p5_title: 'Sistem Presensi Mahasiswa Berbasis RFID dengan Auto Photo Capture',
      p5_desc: 'Sistem presensi cerdas nirkabel dengan scanner RFID RC522 terintegrasi penangkapan foto webcam OpenCV real-time saat scan untuk eliminasi kecurangan titip absen, notifikasi email otomatis ke orang tua, dan sinkronisasi Google Drive.',
      p5_spec_hon: 'Integritas Presensi',
      p5_spec_acc: '100% Validasi Wajah',

      // Core Capabilities & Skills
      capTag: '⚡ KEAHLIAN INTI & METODOLOGI',
      capTitleText: 'Kompetensi Inti & <span class="text-gradient-sky">Kekuatan Rekayasa</span>',
      capSubtitle: 'Kombinasi terintegrasi antara rekayasa perangkat lunak, analisis data spasial, alur kerja operasional ERP enterprise, dan tata kelola organisasi yang akuntabel.',
      capQuote: '"Keterampilan adalah fondasi untuk mengubah tantangan kompleks menjadi sistem digital yang terukur."',
      cap1_num: '01',
      cap1_badge: 'TEKNIS & PENGEMBANGAN SISTEM',
      cap1_title: 'Rekayasa Web Full-Stack & Geospasial',
      cap1_desc: 'Merancang, membangun, dan menguji sistem informasi berbasis web, arsitektur database relasional, analisis spasial WebGIS, serta peramalan machine learning dengan standar teknis yang andal dan solutif.',
      cap2_num: '02',
      cap2_badge: 'OPERASIONAL & TATA KELOLA PROFESIONAL',
      cap2_title: 'Tata Kelola & Operasional Sistem Digital',
      cap2_desc: 'Kolaborasi tim yang adaptif, kepemimpinan organisasi, pertanggungjawaban anggaran resmi (LPJ), ketelitian analisis data, serta tata kelola dokumen operasional yang disiplin dan terstruktur.',
      matrixAll: 'Semua Tools (24)',
      matrixWeb: 'Web & Frontend',
      matrixBackend: 'Backend & Database',
      matrixData: 'Data & Geospasial',
      matrixOps: 'Operasional & Desain',
      matrixTitle: 'Matriks Ekosistem Teknologi',
      matrixSubtitle: '24 teknologi utama, pustaka, dan platform industri yang digunakan dalam proyek produksi',

      // Experience Section
      expTag: '💼 PENGALAMAN KERJA NYATA & DAMPAK',
      expTitle: 'Pengalaman Profesional & <span class="text-gradient-sky">Praktik Lapangan</span>',
      expSubtitle: 'Pengalaman kerja langsung di perusahaan BUMN perkebunan terkemuka, kawasan industri manufaktur, dan rekayasa web komersial independen yang membentuk pola pikir solusi bisnis.',
      exp1_role: 'IT DEVELOPER INTERN',
      exp1_period: 'Jan 2025 – Feb 2025 • On-site',
      exp1_comp: 'PT Perkebunan Nusantara IV (Regional II) — Dolok Sinumbah',
      exp1_loc: '📍 Dolok Sinumbah, Simalungun',
      exp1_b1: 'Mengembangkan solusi sistem informasi berbasis web untuk mendukung operasional unit kebun Dolok Sinumbah dari tahap perancangan hingga implementasi.',
      exp1_b2: 'Berdiskusi dan melakukan analisis kebutuhan alur kerja sistem bersama Office Personnel Assistant.',
      exp1_b3: 'Membangun portal informasi perusahaan dan sistem layanan pengaduan karyawan (Lapor Pak!) terintegrasi guna mewujudkan transparansi kerja.',
      exp1_b4: 'Menyesuaikan arsitektur basis data MySQL dan memastikan tata kelola data sistem aman, rapi, dan terstruktur.',
      exp1_jumpBtn: 'Buka Studi Kasus Proyek ↗',
      exp1_fb_tag: '🏛️ BUMN PERKEBUNAN',
      exp1_fb_title: 'Rekayasa Sistem Enterprise',
      exp1_fb_sub: 'PT Perkebunan Nusantara IV (Regional II) Dolok Sinumbah',
      exp1_fb_f1: '✓ Portal Web Internal',
      exp1_fb_f2: '✓ Sistem Lapor Pak!',
      exp1_fb_f3: '✓ Arsitektur MySQL RDBMS',

      exp2_role: 'IT SUPPORT INTERN',
      exp2_period: 'Des 2021 – Mar 2022 • On-site',
      exp2_comp: 'PT Industri Nabati Lestari (INL) — KEK Sei Mangkei',
      exp2_loc: '📍 KEK Sei Mangkei, Batubara',
      exp2_b1: 'Mendukung pengelolaan data operasional pabrik kelapa sawit menggunakan enterprise ERP (Odoo ERP), termasuk pembaruan dan rekonsiliasi data.',
      exp2_b2: 'Membantu mentor IT dalam memeriksa dan menyelesaikan kendala teknis perangkat keras dan lunak yang dialami pengguna secara langsung.',
      exp2_b3: 'Berkomunikasi aktif dengan staf lintas divisi untuk memetakan dan menyelesaikan kendala sistem operasional.',
      exp2_b4: 'Mendukung dokumentasi teknis rapat evaluasi dan pencatatan tindak lanjut kendala infrastruktur.',
      exp2_fb_tag: '🏭 KAWASAN EKONOMI KHUSUS',
      exp2_fb_title: 'Enterprise ERP & IT Support',
      exp2_fb_sub: 'PT Industri Nabati Lestari — Refinery Operations',
      exp2_fb_f1: '✓ Verifikasi Odoo ERP',
      exp2_fb_f2: '✓ Dukungan Jaringan & Hardware',
      exp2_fb_f3: '✓ Penanganan Kendala Lintas Divisi',

      exp3_role: 'FREELANCE DIGITAL INVITATION DESIGNER',
      exp3_period: '2022 – Sekarang • Desain Kreatif',
      exp3_comp: 'Desain Undangan Digital & Media Visual Kustom (Canva Pro)',
      exp3_loc: '📍 Remote / Praktik Komersial',
      exp3_hl: '<strong>Desain Visual Kreatif & Media Digital:</strong> Merancang dan memproduksi desain undangan digital estetik serta grafis multimedia kustom berbasis Canva Pro sesuai kebutuhan klien dengan ketepatan waktu 100%.',
      exp3_b1: 'Merancang desain undangan digital estetik untuk pernikahan, ulang tahun, wisuda, dan acara formal menggunakan Canva Pro dengan tipografi selaras, palet warna elegan, dan tata letak modern.',
      exp3_b2: 'Mendesain tata letak visual multi-halaman yang dioptimalkan untuk layar smartphone serta transisi animasi visual yang menarik saat dibagikan via WhatsApp dan media sosial.',
      exp3_b3: 'Menyusun detail informasi logistik acara dan seksi amplop digital secara rapi, memuat nomor rekening bank yang terverifikasi serta petunjuk alamat lokasi pada tata letak desain.',
      exp3_b4: 'Mengelola komunikasi langsung dengan klien dari konsultasi konsep visual, penyesuaian tema kustom, revisi cepat, hingga penyerahan aset digital beresolusi tinggi.',
      exp3_seal: '⭐ 100% Penyelesaian Proyek Tepat Waktu',
      exp3_fb_tag: '🎨 PRAKTIK DESAIN KREATIF',
      exp3_fb_title: 'Desain Undangan Digital',
      exp3_fb_sub: 'Produksi Grafis & Media Visual Kustom Canva Pro',
      exp3_fb_f1: '✓ Penguasaan Canva Pro',
      exp3_fb_f2: '✓ Informasi Nomor Rekening',
      exp3_fb_f3: '✓ Tata Letak & Tipografi Estetik',

      // Awards Section
      awardsTag: '🎖️ PRESTASI AKADEMIK & REKOGNISI RESMI',
      awardsTitle: 'Prestasi Akademik & <span class="text-gradient-sky">Rekognisi Resmi</span>',
      awardsSubtitle: 'Rekognisi akademik resmi dan keunggulan kepemimpinan yang merefleksikan dedikasi teknis, integritas, dan konsistensi prestasi nyata.',
      aw1_badge: 'LULUSAN TERBAIK • REKAYASA PERANGKAT LUNAK',
      aw1_title: 'Lulusan Terbaik Rekayasa Perangkat Lunak (RPL)',
      aw1_inst: 'SMK Swasta Al Washliyah 2 Perdagangan',
      aw1_desc: 'Dianugerahi predikat Lulusan Terbaik Jurusan Rekayasa Perangkat Lunak (RPL) atas keunggulan akademik, ketuntasan kurikulum pemrograman, dan kepeloporan teknis selama studi kejuruan.',
      aw1_t1: 'Peringkat 1 Jurusan RPL',
      aw1_t2: 'Fondasi Rekayasa Software',
      aw1_t3: 'Penghargaan Kejuruan',
      aw1_fb_lead: 'Lulusan Terbaik RPL',

      aw2_badge: 'PREDIKAT AKADEMIK • IPK 3.68',
      aw2_title: 'Predikat Kelulusan "Sangat Memuaskan" (IPK 3.68 / 4.00)',
      aw2_inst: 'Universitas Malikussaleh — S1 Sistem Informasi',
      aw2_desc: 'Meraih gelar Sarjana Komputer (S.Kom.) dengan Indeks Prestasi Kumulatif 3,68 / 4,00, mencerminkan penguasaan mendalam atas rekayasa web, analisis sistem informasi, dan pemodelan database.',
      aw2_t1: 'IPK 3.68 / 4.00',
      aw2_t2: 'Sangat Memuaskan',
      aw2_t3: 'Sarjana Komputer (S.Kom.)',
      aw2_fb_lead: 'IPK 3.68 Sangat Memuaskan',

      aw3_badge: 'SELEKSI NASIONAL • KEMENDIKBUD RI',
      aw3_title: 'Awardee Program Pertukaran Mahasiswa Merdeka (PMM 3)',
      aw3_inst: 'Universitas Airlangga (UNAIR), Surabaya • Kemendikbudristek RI',
      aw3_desc: 'Lolos seleksi ketat tingkat nasional Program Pertukaran Mahasiswa Merdeka Batch 3 yang didanai Kemendikbudristek RI, mewakili Universitas Malikussaleh untuk studi penuh satu semester di Universitas Airlangga.',
      aw3_t1: 'Seleksi Nasional Kemendikbud',
      aw3_t2: 'Studi di UNAIR Surabaya',
      aw3_t3: 'Mobilitas Antar-Kampus',
      aw3_fb_lead: 'Awardee PMM 3 Nasional',

      // Leadership & Organization Section
      leadTag: '🤝 LEADERSHIP, ORGANISASI & DAMPAK SOSIAL',
      leadTitle: 'Kepemimpinan Organisasi & <span class="text-gradient-sky">Aksi Kemanusiaan</span>',
      leadSubtitle: 'Rekam jejak kepemimpinan eksekutif dalam mengorkestrasi kompetisi teknologi berskala nasional, menghasilkan keuntungan mandiri organisasi, tata kelola anggaran negara, dan komando administrasi relawan bencana alam.',
      org1_role: 'KOMPETISI TEKNOLOGI NASIONAL • KETUA ACARA',
      org1_period: '2025 • Acara Nasional',
      org1_inst: 'HIMASI Universitas Malikussaleh',
      org1_title: 'Kepala Bidang Acara — Kompetisi Teknologi Nasional (IST.CO 2025)',
      org1_hl: '<strong>Event Skala Nasional:</strong> Memimpin divisi acara kompetisi tingkat nasional melombakan cabang <em>UI/UX Design</em> & <em>Technology Innovation</em> bertema "A Sustainable Future".',
      org1_b1: 'Memimpin 15+ anggota divisi acara dalam mengorkestrasi kompetisi teknologi berskala nasional dari tahap pendaftaran ratusan peserta hingga Awarding Ceremony.',
      org1_b2: 'Menyusun alur kompetisi, parameter teknis penjurian, dan buku panduan lomba untuk cabang UI/UX Design dan Innovation Technology Competition.',
      org1_b3: 'Menginisiasi dan mengkoordinasikan talkshow digital bersama pemateri pakar membahas inovasi berkelanjutan dan peran strategis teknologi informasi masa depan.',
      org1_b4: 'Membangun koordinasi intensif dengan pimpinan dekanat fakultas dan dewan juri ahli untuk menjamin objektivitas serta kesuksesan agenda nasional.',
      org1_t1: 'Cabang Desain UI/UX',
      org1_t2: 'Cabang Inovasi Teknologi',
      org1_t3: 'Pimpinan Operasional Acara',
      org1_t4: 'Skala Nasional',
      org1_fb_tag: '🏆 ACARA NASIONAL',
      org1_fb_title: 'Kompetisi Nasional IST.CO 2025',
      org1_fb_sub: 'Kompetisi UI/UX & Inovasi Teknologi',

      org2_role: 'KEPALA DEPARTEMEN • GENERATOR PROFIT KAS',
      org2_period: '2023 – 2024',
      org2_inst: 'BEM Fakultas Teknik Universitas Malikussaleh',
      org2_title: 'Kepala Departemen Kewirausahaan (KWU) — BEM Fakultas Teknik',
      org2_hl: '<strong>Kemandirian Finansial & Profit Kas:</strong> Memimpin divisi mandiri penghasil keuntungan kas BEM FT melalui lini merchandise resmi dan penggalangan sponsor jutaan rupiah.',
      org2_b1: 'Memimpin dan membagi jobdesk anggota departemen dalam mengelola segala pengadaan barang, atribut resmi (PDH fakultas, gantungan kunci, merchandise), dan bazar wirausaha.',
      org2_b2: 'Melakukan negosiasi rantai pasok dengan berbagai vendor konveksi dan percetakan untuk menekan HPP dan memaksimalkan margin keuntungan kas organisasi.',
      org2_b3: 'Menginisiasi event talkshow kewirausahaan dan sukses mengamankan sponsorship senilai Rp 3.000.000,- untuk mendukung operasional BEM FT.',
      org2_b4: 'Menyusun dan mempertanggungjawabkan Laporan Pertanggungjawaban (LPJ) keuangan resmi organisasi dengan akuntabilitas kas yang bersih dan terverifikasi.',
      org2_t1: 'Negosiasi Vendor',
      org2_t2: 'Pengadaan Merchandise',
      org2_t3: 'Penggalangan Sponsor',
      org2_t4: 'Penyusunan LPJ Resmi',
      org2_fb_tag: '💼 PENGADAAN & KAS',
      org2_fb_title: 'Kepala Dept KWU BEM FT',
      org2_fb_sub: 'Pengadaan Merchandise, Sponsor & LPJ Resmi',

      org3_role: 'BENDAHARA KELOMPOK • PMM 3 KEMENDIKBUD',
      org3_period: '2023 • Mobilitas Nasional',
      org3_inst: 'Universitas Airlangga, Surabaya • Kemendikbudristek RI',
      org3_title: 'Bendahara Kelompok Modul Nusantara — PMM 3 Universitas Airlangga',
      org3_hl: '<strong>Tata Kelola Anggaran Negara:</strong> Dipercaya mengelola dana kegiatan kebhinekaan negara dan kas operasional kelompok mahasiswa lintas perguruan tinggi se-Indonesia.',
      org3_b1: 'Terpilih mewakili Universitas Malikussaleh dalam program pertukaran nasional di Universitas Airlangga (UNAIR) Surabaya dan diamanahkan sebagai Bendahara Kelompok Modul.',
      org3_b2: 'Mengelola arus kas masuk dan keluar untuk seluruh agenda kunjungan kebudayaan, pengabdian masyarakat, dan kegiatan kebinekaan.',
      org3_b3: 'Memverifikasi bukti transaksi, menyusun pembukuan berkala, dan memastikan 100% kepatuhan SPJ anggaran program Kemendikbudristek RI.',
      org3_b4: 'Menjalin sinergi dan kolaborasi erat dengan dosen pembimbing lapangan serta rekan mahasiswa dari berbagai provinsi.',
      org3_t1: 'Tata Kelola Anggaran',
      org3_t2: 'Kepatuhan SPJ Negara',
      org3_t3: 'Kolaborasi Antar-Kampus',
      org3_t4: 'Mobilitas UNAIR Surabaya',
      org3_fb_tag: '🏛️ MODUL NUSANTARA',
      org3_fb_title: 'Bendahara PMM 3 UNAIR',
      org3_fb_sub: 'Tata Kelola Kas Modul Kebhinekaan',

      org4_role: 'KOORDINATOR ADMINISTRASI • RELAWAN KRISIS',
      org4_period: '2022 • Operasi Tanggap Darurat',
      org4_inst: 'Posko Darurat Bencana Kabupaten Aceh Tamiang',
      org4_title: 'Koordinator Administrasi — Tim Relawan Bencana Banjir Aceh Tamiang',
      org4_hl: '<strong>Logistik Kemanusiaan & Tata Kelola Data:</strong> Memimpin tata kelola pendataan ratusan warga penyintas banjir dan menjamin akurasi distribusi logistik bantuan kemanusiaan.',
      org4_b1: 'Memimpin posko administrasi bencana darurat, meregistrasi dan memvalidasi data ratusan kepala keluarga terdampak banjir secara real-time.',
      org4_b2: 'Mengontrol pencatatan alur keluar-masuk logistik bantuan sembako, pakaian, dan obat-obatan guna mencegah diskrepansi atau penumpukan bantuan.',
      org4_b3: 'Memastikan penyaluran bantuan terdistribusi secara transparan, merata, dan tepat sasaran ke titik-titik posko evakuasi terisolir.',
      org4_b4: 'Menjalin komunikasi responsif antar tim relawan evakuasi lapangan, donatur logistik, dan posko komando induk daerah.',
      org4_t1: 'Tata Kelola Data Krisis',
      org4_t2: 'Verifikasi Logistik Bantuan',
      org4_t3: 'Operasi Tanggap Darurat',
      org4_t4: 'Aksi Kemanusiaan',
      org4_fb_tag: '🛡️ TANGGAP DARURAT',
      org4_fb_title: 'Relawan Tanggap Darurat',
      org4_fb_sub: 'Administrasi Krisis Bencana Aceh Tamiang',

      leadMilestoneHeader: '⚡ Rekam Jejak Acara & Kepanitiaan Kampus',
      ms1_role: 'WAKIL KOORDINATOR DISIPLIN • 2024',
      ms1_event: 'PKKMB Fakultas Teknik Universitas Malikussaleh',
      ms1_desc: 'Menjaga ketertiban, keamanan, dan kedisiplinan 1.000+ mahasiswa baru Fakultas Teknik selama rangkaian ospek kampus berlangsung kondusif.',
      ms2_role: 'STEERING COMMITTEE • 2023',
      ms2_event: 'Talkshow Beyond Entrepreneurship FT',
      ms2_desc: 'Pengarah konsep acara, pengawas rundown, dan sukses menghadirkan kemitraan sponsorship untuk pendanaan mandiri mahasiswa.',
      ms3_role: 'HUMAS & EDUTECH OFFICER • 2023 – 2024',
      ms3_event: 'Himpunan Mahasiswa Sistem Informasi (HIMASI)',
      ms3_desc: 'Jembatan edukasi konten digital Sistem Informasi ke publik, kurasi artikel EduTech media sosial, serta kemitraan eksternal antar organisasi.',
      ms4_role: 'KOORDINATOR MALAM PUNCAK • 2025',
      ms4_event: 'Malam Puncak ISSCOM HIMASI & Acara Praktek',
      ms4_desc: 'Show director tata panggung, manajemen audio lighting terintegrasi, koordinasi pengisi acara, dan orkestrasi rundown penampil.',

      // About Section
      aboutTag: '👤 TENTANG NUR AZILA TARIGAN',
      aboutTitle: 'Pengembang Sistem, Problem Solver & <span class="text-gradient-sky">Praktisi Data</span>',
      aboutSubtitle: 'Mengubah tantangan kompleks menjadi sistem digital yang andal melalui rekayasa software terstruktur dan analisis data empiris.',
      aboutStat1: 'PROYEK WEB PRODUKSI',
      aboutStat2: 'IPK KELULUSAN (SKALA 4,00)',
      aboutStat3: 'TAHUN KELULUSAN (S.KOM.)',
      aboutBio1: 'Saya adalah lulusan <strong>S1 Sistem Informasi (S.Kom.)</strong> dari Universitas Malikussaleh dengan predikat akademik Sangat Memuaskan (IPK Kumulatif: <strong>3,68 / 4,00</strong>). Minat dan keahlian saya berfokus pada rekayasa web full-stack, desain basis data relasional, analitika spasial WebGIS, serta tata kelola data operasional enterprise.',
      aboutBio2: 'Berangkat dari fondasi Rekayasa Perangkat Lunak (RPL) saat meraih predikat <strong>Lulusan Terbaik Kejuruan</strong>, saya memandang pengembangan sistem sebagai perpaduan antara struktur kode yang rapi, arsitektur data yang aman, dan dampak nyata bagi efisiensi bisnis. Pengalaman praktik kerja di <em>PTPN IV Regional II</em> dan <em>PT Industri Nabati Lestari</em> semakin mengasah kapabilitas saya dalam menghadirkan solusi digital di lingkungan industri nyata.',
      aboutBio3: 'Di luar ranah teknis, saya membawa rekam jejak kepemimpinan teruji sebagai <strong>Ketua Bidang Acara Kompetisi Teknologi Nasional (IST.CO 2025)</strong>, akuntabilitas anggaran sebagai <strong>Bendahara Kelompok PMM 3 di Universitas Airlangga</strong>, serta ketangguhan aksi kemanusiaan sebagai <strong>Koordinator Administrasi Relawan Bencana Banjir</strong>. Saya menjembatani implementasi teknis dengan kepemimpinan kolaboratif yang terpercaya.',
      eduTitle: 'Universitas Malikussaleh • Sarjana Komputer',
      eduGpa: 'IPK Kumulatif: 3,68 / 4,00 • Sangat Memuaskan',
      eduDesc: 'Kurikulum mendalam mencakup Pemrograman Web, Arsitektur Basis Data, Rekayasa Perangkat Lunak, Sistem Enterprise, dan Analisis Data Spasial.',
      eduSmkTitle: 'SMK Swasta Al Washliyah 2 Perdagangan',
      eduSmkMajor: 'Rekayasa Perangkat Lunak (RPL) • Lulusan Terbaik',
      eduSmkDesc: 'Lulusan terbaik dengan fondasi kuat dalam pemrograman berorientasi objek, basis data relasional, pengembangan web, dan algoritma dasar.',
      currTitle: 'Fokus Profesional Saat Ini',
      curr1_title: 'Membangun',
      curr1_desc: 'Sistem web enterprise & aplikasi WebGIS',
      curr2_title: 'Menganalisis & QA',
      curr2_desc: 'Software QA, integritas data & alur ERP',
      curr3_title: 'Mendalami',
      curr3_desc: 'Arsitektur full-stack modern & cloud',
      traitKicker: 'KARAKTER UTAMA',
      traitHint: 'Klik kartu untuk ganti trait ↻',
      trait1_title: 'Problem Solver',
      trait1_desc: 'Mengubah inefisiensi bisnis, birokrasi manual, dan proses tidak terstruktur menjadi sistem digital yang andal dan solutif.',
      trait2_title: 'Teliti & Presisi',
      trait2_desc: 'Sangat teliti dalam struktur kode rapi, normalisasi database, akuntabilitas LPJ, dan pengujian kualitas sistem.',
      trait3_title: 'Cepat Beradaptasi',
      trait3_desc: 'Cepat menguasai teknologi baru mulai dari React dan Python hingga operasional Odoo ERP dan analisis spasial.',
      trait4_title: 'Kepemimpinan Kolaboratif',
      trait4_desc: 'Terbukti mampu memimpin delegasi mahasiswa nasional dan mengelola administrasi logistik tanggap darurat bencana.',
      trait5_title: 'Integritas Tinggi',
      trait5_desc: 'Berkomitmen tinggi terhadap transparansi dokumentasi, tata kelola anggaran, dan tanggung jawab kerja profesional.',

      // Contact Section & Footer
      contactTag: '💌 HUBUNGI SAYA',
      contactTitle: 'Mari Terhubung & <span class="text-gradient-sky">Berkolaborasi!</span>',
      contactSubtitle: 'Saya selalu terbuka untuk peluang karir profesional baru, diskusi proyek sistem enterprise, maupun kolaborasi pengembangan teknologi.',
      chEmailType: 'EMAIL RESMI (KLIK UNTUK SALIN)',
      chWaType: 'WHATSAPP RESMI',
      badgeCopy: 'Salin 📋',
      formHeading: 'Kirimkan Pesan atau Undangan Kerja',
      formNameLabel: 'Nama Rekruter / Instansi *',
      formNamePh: 'Contoh: HR PT X / Bapak Hendra',
      formEmailLabel: 'Email Kontak *',
      formSubjectLabel: 'Subjek Pesan',
      formSubjectPh: 'Contoh: Kesempatan Kerja Full-Stack Developer / Diskusi Proyek',
      formMsgLabel: 'Pesan atau Tawaran Proyek *',
      formMsgPh: 'Tuliskan pesan detail atau tawaran posisi pekerjaan di sini...',
      btnSendMsg: 'Kirim Pesan Sekarang',
      footerText: 'Nur Azila Tarigan, S.Kom. • Universitas Malikussaleh (IPK 3,68) © 2026.',
      footerTop: 'Kembali ke Atas ↑',

      // Toasts
      emailCopiedToast: 'Alamat email azilatgrn01@gmail.com berhasil disalin! 📋',
      preparingCvToast: 'Menyiapkan Curriculum Vitae Nur Azila Tarigan, S.Kom...',
      cvDownloadedToast: 'CV Nur Azila Tarigan, S.Kom. berhasil diunduh! 📄✨',
      formSentToast: (name) => `Terima kasih Bapak/Ibu ${name}! Pesan Anda telah terkirim.`,
      mascotToast: '🐾 Maskot setia memberi semangat untukmu! ✨'
,
      // Additional Parity Keys
      aboutKpi1: 'PROYEK TERUJI',
      aboutKpi2: 'IPK KUMULATIF',
      aboutKpi3: 'SARJANA KOMPUTER',
      aboutStoryP1: 'Sebagai praktisi Sistem Informasi dengan fondasi kuat rekayasa perangkat lunak, saya memandang teknologi bukan sekadar baris kode, melainkan instrumen pemecah masalah bisnis nyata. Fokus saya adalah membedah alur birokrasi dan hambatan operasional, lalu mentransformasikannya menjadi solusi digital yang terstruktur, aman, dan mudah digunakan.',
      aboutStoryP2: 'Filosofi kerja saya bertumpu pada tiga pilar utama: ketelitian analitis, integritas tata kelola data, dan tanggung jawab penuh atas hasil karya. Baik saat merancang portal sistem dari nol, mengelola basis data relasional, maupun berkolaborasi lintas divisi, komitmen saya adalah menghadirkan efisiensi nyata yang berdampak langsung bagi institusi.',
      aboutResumePrompt: 'Ingin mempelajari rekam jejak resmi saya lebih mendalam?',
      aboutResumeLink: 'Unduh CV resmi saya (PDF) ↗',
      currentlyKicker: 'FOKUS SAAT INI',
      exp2_seal: '🛡️ Praktik Kerja Industri 3 Bulan Terverifikasi',
      exp3_company: 'Desain Undangan Digital & Media Visual Kustom (Canva Pro)',
      exp3_seal: '⭐ 100% Penyelesaian Proyek Tepat Waktu',
      folderProjects: 'proyek_01',
      folderExperience: 'pengalaman_02',
      folderLeadership: 'organisasi_03',
      folderCredentials: 'prestasi_04',
      heroBtnConnect: 'Hubungi Saya! ✨',
      heroBtnCv: 'Unduh CV (PDF)',
      heroScriptTag: 'Pengembang Web & Sistem Informasi',
      btnGithub: 'Repositori GitHub ↗',
      btnVisitLive: 'Buka Aplikasi ↗',
      ms_badge: 'PORTOFOLIO ACARA',
      ms_kicker: 'JEJAK KAMPUS',
      ms_title: 'Rekam Jejak Acara Utama',
    }
  };

  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    // Toggle active state on buttons
    const btnEn = document.getElementById('btnLangEn');
    const btnId = document.getElementById('btnLangId');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnId) btnId.classList.toggle('active', lang === 'id');

    const dict = i18n[lang] || i18n.en;

    // Replace textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Replace innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Replace placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict && dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // If active 3D coverflow showcase is present, re-render its details in newly selected language
    if (typeof renderActiveProjectDetails === 'function') {
      renderActiveProjectDetails(activeIndex);
    }
  }

  const btnLangEn = document.getElementById('btnLangEn');
  const btnLangId = document.getElementById('btnLangId');

  if (btnLangEn) {
    btnLangEn.addEventListener('click', (e) => {
      e.preventDefault();
      applyLanguage('en');
      showToast('Switched to English 🇬🇧');
    });
  }

  if (btnLangId) {
    btnLangId.addEventListener('click', (e) => {
      e.preventDefault();
      applyLanguage('id');
      showToast('Bahasa dialihkan ke Bahasa Indonesia 🇮🇩');
    });
  }

  // Apply saved or default language immediately
  applyLanguage(currentLang);

  // =========================================================================
  // 4. 3D COVERFLOW PROJECT SHOWCASE (EXACTLY MATCHING RICHARD REFERENCE)
  // =========================================================================
  const projectShowcaseData = [
    {
      id: 0,
      category_en: '⚡ LIVE DEPLOYMENT • WORKSPACE PRODUCTIVITY',
      category_id: '⚡ APLIKASI LIVE • PRODUKTIVITAS KERJA',
      year: '2026 • Live',
      title_en: 'Tabsy App — Smart Tab & Workspace Productivity Manager',
      title_id: 'Tabsy App — Manajer Tab Cerdas & Produktivitas Harian',
      desc_en: 'Modern web application designed to streamline daily multitasking, browser tab overload, and custom workspace workflows with instant client-side performance.',
      desc_id: 'Aplikasi web modern yang dirancang untuk mengatasi tab overload, manajemen rutinitas harian, serta pelacakan finansial cerdas dengan performa tinggi.',
      specs: [
        { label: 'Live URL', val: 'tabsyapp.vercel.app' },
        { label: 'Frontend', val: 'React / Next.js SPA' },
        { label: 'Features', val: 'Session & Tab Sync' },
        { label: 'Impact', val: 'Workflow Efficiency' }
      ],
      techs: ['React.js', 'Tailwind CSS', 'Vercel Cloud', 'LocalStorage API'],
      viewUrl: 'https://tabsyapp.vercel.app/',
      viewLabel_en: 'View Project',
      viewLabel_id: 'Buka Aplikasi'
    },
    {
      id: 1,
      category_en: '🏢 ENTERPRISE SYSTEM • PROCUREMENT & ORDERS',
      category_id: '🏢 SISTEM ENTERPRISE • PENGADAAN & PESANAN',
      year: '2026 • Live',
      title_en: 'OrderFlow — Enterprise Order & Supply Chain Management',
      title_id: 'OrderFlow — Manajemen Pengadaan & Rantai Pasok Enterprise',
      desc_en: 'B2B procurement and order processing platform featuring multi-level approval workflows, real-time status tracking, and automated digital invoicing.',
      desc_id: 'Platform pengadaan dan pemrosesan pesanan B2B dengan alur persetujuan bertingkat, pelacakan status pesanan real-time, dan faktur digital otomatis.',
      specs: [
        { label: 'Live URL', val: 'orderflow-enterprise' },
        { label: 'Architecture', val: 'Modern Enterprise UI' },
        { label: 'Module', val: 'Order Tracking & Invoicing' },
        { label: 'Status', val: 'Production Ready' }
      ],
      techs: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Vercel Deploy'],
      viewUrl: 'https://orderflow-enterprise.vercel.app/',
      viewLabel_en: 'View Project',
      viewLabel_id: 'Buka Aplikasi'
    },
    {
      id: 2,
      category_en: '🏛️ PLANTATION ENTERPRISE • DOLOK SINUMBAH',
      category_id: '🏛️ BUMN PERKEBUNAN • DOLOK SINUMBAH',
      year: '2025 • PTPN IV',
      title_en: 'Employee Aspiration & Whistleblowing System (Lapor Pak!)',
      title_id: 'Sistem Aspirasi & Pengaduan Karyawan PTPN IV (Lapor Pak!)',
      desc_en: 'Internal enterprise Whistleblowing System (WBS) & employee grievance management platform for palm oil plantation operations with end-to-end anonymity and real-time ticket tracking.',
      desc_id: 'Sistem pengaduan dan aspirasi karyawan internal berbasis web di lingkungan PTPN IV Regional II Dolok Sinumbah, dilengkapi perlindungan privasi pelapor dan tiket real-time.',
      specs: [
        { label: 'Organization', val: 'PTPN IV Regional II' },
        { label: 'Role', val: 'Full-Stack Developer' },
        { label: 'Security', val: 'Whistleblower Privacy' },
        { label: 'Impact', val: '100% Case Transparency' }
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Figma'],
      viewUrl: 'https://github.com/Azilatarigan01/laporpak-ptpn4',
      viewLabel_en: 'GitHub Repository',
      viewLabel_id: 'Repositori GitHub'
    },
    {
      id: 3,
      category_en: "🗺️ SPATIAL DATA & AI • HEALTH DEPT RESEARCH",
      category_id: "🗺️ DATA SPASIAL & AI • RISET DINKES",
      year: "2025 • Research",
      title_en: "Spatial Analytics & Tuberculosis (TB) Prediction WebGIS",
      title_id: "WebGIS Analisis Spasial & Prediksi Tuberkulosis (TB) Aceh Utara",
      desc_en: "Web-based Geographic Information System analyzing Global Moran's I spatial autocorrelation, LISA clusters, and 2026 disease forecasting using Facebook Prophet & K-Means across 27 sub-districts.",
      desc_id: "Sistem Informasi Geografis berbasis web untuk analisis autokorelasi spasial Moran's I, klaster LISA, dan peramalan tren kasus TB tahun 2026 menggunakan Facebook Prophet & K-Means di 27 kecamatan.",
      specs: [
        { label: "Region", val: "North Aceh Regency" },
        { label: "Algorithms", val: "Prophet & Moran's I" },
        { label: "Mapping", val: "Interactive Leaflet.js" },
        { label: "Output", val: "Hotspot Maps & Forecast" }
      ],
      techs: ["Python Flask", "Leaflet.js", "FB Prophet", "Scikit-learn", "MySQL"],
      viewUrl: "https://webgis-tbacehutara.vercel.app/",
      viewLabel_en: "View Live WebGIS",
      viewLabel_id: "Buka WebGIS Live"
    },
    {
      id: 4,
      category_en: '🏫 EDUTECH SYSTEM • ACADEMIC MANAGEMENT',
      category_id: '🏫 EDUTECH • MANAJEMEN AKADEMIK',
      year: '2024 • Academic LMS',
      title_en: 'SMA Tuna Bangsa Integrated E-Learning System',
      title_id: 'Sistem E-Learning Terpadu SMA Tuna Bangsa',
      desc_en: 'Centralized learning management platform for administrators, teachers, and students featuring classroom management, learning materials repository, structured online examinations, and automated grade reporting.',
      desc_id: 'Platform manajemen pembelajaran daring terpusat untuk admin, guru, dan siswa yang mencakup pengelolaan kelas, materi pelajaran, ujian online terstruktur, dan rekap nilai otomatis.',
      specs: [
        { label: 'Institution', val: 'SMA Tuna Bangsa' },
        { label: 'Multi-Role', val: 'Admin, Teacher, Student' },
        { label: 'Examinations', val: 'Online Exam Module' },
        { label: 'Impact', val: 'Academic Centralization' }
      ],
      techs: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Blade Engine'],
      viewUrl: 'https://github.com/Azilatarigan01/laravel',
      viewLabel_en: 'GitHub Repository',
      viewLabel_id: 'Repositori GitHub'
    },
    {
      id: 5,
      category_en: '🎓 IoT & SMART CAMPUS • CAPSTONE RESEARCH',
      category_id: '🎓 IOT & KAMPUS CERDAS • RISET TUGAS AKHIR',
      year: '2024 • Academic IoT',
      title_en: 'RFID-Based Student Monitoring System with Automated Photo Capture',
      title_id: 'Sistem Presensi Mahasiswa Berbasis RFID dengan Auto Photo Capture',
      desc_en: 'Wireless attendance verification system integrating RFID RC522 scanner with real-time OpenCV webcam photo capture during badge taps to eliminate attendance fraud, complete with parent email alerts and cloud backup.',
      desc_id: 'Sistem verifikasi presensi nirkabel yang mengintegrasikan sensor RFID RC522 dengan pengambilan foto webcam OpenCV secara real-time saat pengetapan kartu untuk mencegah kecurangan absensi.',
      specs: [
        { label: 'Verification', val: 'Attendance Integrity' },
        { label: 'Backend', val: 'Python (Django) REST' },
        { label: 'Hardware', val: 'RFID RC522 + OpenCV' },
        { label: 'Accuracy', val: '100% Identity Match' }
      ],
      techs: ['Python Django', 'PostgreSQL', 'OpenCV', 'Google Drive API', 'RFID RC522'],
      viewUrl: '#contact',
      viewLabel_en: 'Inquire System Details',
      viewLabel_id: 'Konsultasi Sistem'
    }
  ];

  const cards = Array.from(document.querySelectorAll('.project-3d-card'));
  const prevSlideBtn = document.getElementById('prevSlideBtn');
  const nextSlideBtn = document.getElementById('nextSlideBtn');
  const currentSlideIndexEl = document.getElementById('currentSlideIndex');
  const dotBtns = Array.from(document.querySelectorAll('#coverflowDots .dot-btn'));

  const activeShowcaseEl = document.getElementById('activeProjectShowcase');
  const activeCatEl = document.getElementById('activeProjectCategory');
  const activeYearEl = document.getElementById('activeProjectYear');
  const activeTitleEl = document.getElementById('activeProjectTitle');
  const activeDescEl = document.getElementById('activeProjectDesc');
  const activeSpecsEl = document.getElementById('activeProjectSpecs');
  const activeTechsEl = document.getElementById('activeProjectTechs');
  const activeLinkEl = document.getElementById('activeProjectLink');
  const activeLinkLabelEl = document.getElementById('activeProjectLinkLabel');
  const activeCaseStudyBtn = document.getElementById('activeProjectCaseStudyBtn');

  let activeIndex = 0;
  const totalCards = cards.length;

  function renderActiveProjectDetails(idx) {
    const data = projectShowcaseData[idx];
    if (!data || !activeShowcaseEl) return;

    activeShowcaseEl.classList.add('switching');
    setTimeout(() => {
      const isId = currentLang === 'id';
      if (activeCatEl) activeCatEl.textContent = isId ? data.category_id : data.category_en;
      if (activeYearEl) activeYearEl.textContent = data.year;
      if (activeTitleEl) activeTitleEl.textContent = isId ? data.title_id : data.title_en;
      if (activeDescEl) activeDescEl.textContent = isId ? data.desc_id : data.desc_en;

      if (activeSpecsEl) {
        activeSpecsEl.innerHTML = data.specs.map(s => `
          <div class="active-spec-item">
            <span class="spec-label">${s.label}</span>
            <span class="spec-value text-blue">${s.val}</span>
          </div>
        `).join('');
      }

      if (activeTechsEl) {
        activeTechsEl.innerHTML = data.techs.map(t => `
          <span class="badge-tech">${t}</span>
        `).join('');
      }

      if (activeLinkEl) {
        activeLinkEl.href = data.viewUrl;
      }
      if (activeLinkLabelEl) {
        activeLinkLabelEl.textContent = isId ? data.viewLabel_id : data.viewLabel_en;
      }
      if (activeCaseStudyBtn) {
        activeCaseStudyBtn.setAttribute('data-project-id', String(data.id));
      }

      activeShowcaseEl.classList.remove('switching');
    }, 150);
  }

  function update3DStack() {
    cards.forEach((card, i) => {
      card.classList.remove(
        'card-active',
        'card-next',
        'card-prev',
        'card-hidden-right',
        'card-hidden-left'
      );

      let offset = i - activeIndex;

      if (offset === 0) {
        card.classList.add('card-active');
      } else if (offset === 1 || offset === -(totalCards - 1)) {
        card.classList.add('card-next');
      } else if (offset === -1 || offset === totalCards - 1) {
        card.classList.add('card-prev');
      } else if (offset > 1) {
        card.classList.add('card-hidden-right');
      } else {
        card.classList.add('card-hidden-left');
      }
    });

    if (currentSlideIndexEl) {
      currentSlideIndexEl.textContent = `0${activeIndex + 1}`;
    }

    dotBtns.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });

    renderActiveProjectDetails(activeIndex);
  }

  function goToSlide(newIndex) {
    activeIndex = (newIndex + totalCards) % totalCards;
    update3DStack();
  }

  if (prevSlideBtn) prevSlideBtn.addEventListener('click', () => goToSlide(activeIndex - 1));
  if (nextSlideBtn) nextSlideBtn.addEventListener('click', () => goToSlide(activeIndex + 1));

  // DIRECT CARD CLICK HANDLER
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      // Don't rotate card if user clicked action buttons or links
      if (e.target.closest('.card-action-footer') || e.target.closest('button') || e.target.closest('a')) {
        return;
      }
      if (idx === activeIndex) {
        goToSlide(activeIndex + 1);
        triggerConfetti(e.clientX, e.clientY, 15);
      } else {
        goToSlide(idx);
        triggerConfetti(e.clientX, e.clientY, 20);
      }
    });
  });

  dotBtns.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToSlide(idx));
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    const projectsSec = document.getElementById('projects');
    if (!projectsSec) return;
    const rect = projectsSec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft') goToSlide(activeIndex - 1);
      if (e.key === 'ArrowRight') goToSlide(activeIndex + 1);
    }
  });

  // Attach click listener for activeCaseStudyBtn
  if (activeCaseStudyBtn) {
    activeCaseStudyBtn.addEventListener('click', () => {
      const projId = parseInt(activeCaseStudyBtn.getAttribute('data-project-id') || '0', 10);
      openCaseStudyModal(projId);
    });
  }

  // Initial render
  update3DStack();


  // =========================================================================
  // 5. DETAILED PROJECT CASE STUDIES (BILINGUAL)
  // =========================================================================
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentBody = document.getElementById('modalContentBody');

  const detailedCaseStudies = {
    en: [
      {
        title: "Tabsy App — Smart Tab & Workspace Productivity Manager",
        badge: "LIVE WEB APPLICATION",
        category: "Productivity, Workspace & Frontend Architecture",
        problemLabel: "Problem Addressed:",
        problem: "Users constantly endure browser tab clutter (tab overload) and lack structured segregation for multi-project workflows, degrading daily focus.",
        solutionLabel: "Engineering Solution:",
        solution: "Engineered a high-performance web app with dynamic workspace grouping, automated local state synchronization, and an intuitive low-latency interface.",
        impactLabel: "Real-World Impact:",
        impact: "Enables hundreds of users to categorize work contexts seamlessly, reducing task-switching overhead and boosting daily task completion.",
        techStack: "React.js, Next.js, Tailwind CSS, LocalStorage API, Vercel Deployment.",
        link: "https://tabsyapp.vercel.app/",
        linkText: "Visit Tabsy App ↗"
      },
      {
        title: "OrderFlow — Enterprise Order & Supply Chain Management",
        badge: "ENTERPRISE SOLUTION",
        category: "B2B Procurement, Supply Chain & Workflow Automation",
        problemLabel: "Problem Addressed:",
        problem: "Manual B2B paper trail led to entry errors, protracted invoice validation cycles, and absent real-time logistics tracking across fulfillment centers.",
        solutionLabel: "Engineering Solution:",
        solution: "Built a centralized enterprise web dashboard with multi-tiered role approvals, dynamic inventory stock checks, and instant PDF invoice generation.",
        impactLabel: "Real-World Impact:",
        impact: "Cut order verification cycles from days to minutes while guaranteeing an auditable digital trail across company transactions.",
        techStack: "Next.js, TypeScript, Tailwind CSS, REST API, Vercel Production.",
        link: "https://orderflow-enterprise.vercel.app/",
        linkText: "Visit OrderFlow ↗"
      },
      {
        title: "Employee Aspiration & Whistleblowing System (Lapor Pak!) — PTPN IV",
        badge: "PLANTATION ENTERPRISE",
        category: "Whistleblowing System (WBS) & Enterprise Communications",
        problemLabel: "Problem Addressed:",
        problem: "Plantation unit personnel lacked confidential and reliable channels to voice grievances or operational hazards without fear of scrutiny.",
        solutionLabel: "Engineering Solution:",
        solution: "Engineered an encrypted whistleblower portal featuring anonymous ticket tracking tokens, executive disposition workflows, and an official corporate newsroom.",
        impactLabel: "Real-World Impact:",
        impact: "Significantly improved operational transparency at PTPN IV Dolok Sinumbah unit with 100% case follow-up accountability.",
        techStack: "Laravel, PHP, MySQL, Bootstrap, JavaScript, Figma.",
        link: "https://github.com/Azilatarigan01/laporpak-ptpn4",
        linkText: "View GitHub Repository ↗"
      },
      {
        title: "Spatial Analytics & Tuberculosis (TB) Prediction WebGIS — North Aceh",
        badge: "SPATIAL DATA & MACHINE LEARNING",
        category: "Geographic Information Systems (GIS) & Predictive Modeling",
        problemLabel: "Problem Addressed:",
        problem: "Public health agencies required accurate geographic mapping of disease contagion hotspots to strategically distribute preventive medical resources.",
        solutionLabel: "Engineering Solution:",
        solution: "Developed an interactive WebGIS computing Global Moran\'s I spatial autocorrelation & LISA clustering, coupled with Facebook Prophet forecasting and K-Means for 2026.",
        impactLabel: "Real-World Impact:",
        impact: "Supplied public health decision-makers with empirical hotspot/coldspot visual maps across 27 sub-districts for targeted healthcare intervention.",
        techStack: "Python (Flask), Leaflet.js, Facebook Prophet, Scikit-learn, GeoDa, MySQL.",
        link: "https://webgis-tbacehutara.vercel.app/",
        linkText: "Visit WebGIS ↗"
      },
      {
        title: "Tuna Bangsa High School Integrated E-Learning System",
        badge: "ACADEMIC SYSTEM",
        category: "Education Management System & Multi-Role LMS",
        problemLabel: "Problem Addressed:",
        problem: "Scattered paper-based examinations and fragmented teacher-student communication hindered continuous academic tracking.",
        solutionLabel: "Engineering Solution:",
        solution: "Designed a multi-role web platform (Admin, Teacher, Student) with structured question banks, timed online exam taking, and automated grade recaps.",
        impactLabel: "Real-World Impact:",
        impact: "Streamlined learning activities and digital assessments for 300+ students and educators with zero paper waste.",
        techStack: "Laravel, PHP, MySQL, Bootstrap 5, Git/GitHub.",
        link: "https://github.com/Azilatarigan01/laravel",
        linkText: "View GitHub Repository ↗"
      },
      {
        title: "RFID-Based Student Monitoring with Auto Photo Capture",
        badge: "🎓 IoT & SMART CAMPUS RESEARCH",
        category: "IoT Hardware, Computer Vision & Smart Campus",
        problemLabel: "Problem Addressed:",
        problem: "Prevalent proxy card attendance fraud in campus halls and absence of tamper-proof visual confirmation during manual badge scans.",
        solutionLabel: "Engineering Solution:",
        solution: "Coupled RFID RC522 badge sensors with automated OpenCV camera triggers to snapshot attendees, cross-validate student data, and sync logs with Google Drive & email alerts.",
        impactLabel: "Real-World Impact:",
        impact: "Engineered and validated an automated attendance monitoring system delivering 100% photo-capture verification and cloud integration.",
        techStack: "Python (Django REST), PostgreSQL, RFID RC522, OpenCV Webcam API, Google Drive API, SMTP.",
        link: "#contact",
        linkText: "Discuss This Architecture ↗"
      }
    ],

    id: [
      {
        title: "Tabsy App — Smart Tab & Workspace Productivity Manager",
        badge: "LIVE WEB APPLICATION",
        category: "Productivity, Workspace & Frontend Architecture",
        problemLabel: "Masalah yang Dihadapi:",
        problem: "Pengguna sering mengalami kekacauan tab browser (tab overload) dan kesulitan mengatur sesi kerja multi-tasking harian secara terstruktur.",
        solutionLabel: "Solusi Rekayasa Sistem:",
        solution: "Membangun web app modern dengan sistem pengelompokan workspace dinamis, penyimpanan sesi otomatis, dan antarmuka responsif yang ringan.",
        impactLabel: "Dampak & Pencapaian Nyata:",
        impact: "Membantu ratusan pengguna mengorganisir sesi kerja, mengurangi latensi perpindahan konteks tugas, dan meningkatkan fokus kerja digital.",
        techStack: "React.js, Next.js, Tailwind CSS, LocalStorage API, Vercel Deployment.",
        link: "https://tabsyapp.vercel.app/",
        linkText: "Kunjungi Web Tabsy ↗"
      },
      {
        title: "OrderFlow — Enterprise Order & Supply Chain Management",
        badge: "ENTERPRISE SOLUTION",
        category: "B2B Procurement, Supply Chain & Workflow Automation",
        problemLabel: "Masalah yang Dihadapi:",
        problem: "Pencatatan pesanan B2B manual yang rentan kesalahan input, keterlambatan persetujuan invoice berjenjang, dan minimnya transparansi pelacakan pengiriman.",
        solutionLabel: "Solusi Rekayasa Sistem:",
        solution: "Mengembangkan platform enterprise terpusat dengan modul pesanan cerdas, alur validasi approval multi-level, pemantauan inventaris, dan cetak faktur digital.",
        impactLabel: "Dampak & Pencapaian Nyata:",
        impact: "Mempercepat siklus persetujuan pesanan dari hitungan hari menjadi menit serta menyediakan audit trail transaksi yang transparan.",
        techStack: "Next.js, TypeScript, Tailwind CSS, REST API, Vercel Production.",
        link: "https://orderflow-enterprise.vercel.app/",
        linkText: "Kunjungi Web OrderFlow ↗"
      },
      {
        title: "Sistem Layanan Aspirasi & Pengaduan Karyawan (Lapor Pak!) — PTPN IV",
        badge: "PLANTATION ENTERPRISE",
        category: "Whistleblowing System (WBS) & Internal Communications",
        problemLabel: "Masalah yang Dihadapi:",
        problem: "Karyawan unit kebun perkebunan kelapa sawit kesulitan menyampaikan keluhan dan aspirasi secara aman dan transparan tanpa kekhawatiran.",
        solutionLabel: "Solusi Rekayasa Sistem:",
        solution: "Membangun sistem web pengaduan terintegrasi dengan penjaminan kerahasiaan identitas, pelacakan kode tiket laporan real-time, dan dashboard disposisi untuk pimpinan kebun.",
        impactLabel: "Dampak & Pencapaian Nyata:",
        impact: "Meningkatkan efektivitas komunikasi internal PTPN IV Kebun Dolok Sinumbah, transparansi tindak lanjut 100%, dan terhindar dari bias pelaporan.",
        techStack: "Laravel, PHP, MySQL, Bootstrap, JavaScript, Figma.",
        link: "https://github.com/Azilatarigan01/laporpak-ptpn4",
        linkText: "Lihat GitHub Repository ↗"
      },
      {
        title: "WebGIS Analisis Spasial & Prediksi Kasus Tuberkulosis (TB) Kabupaten Aceh Utara",
        badge: "SPATIAL DATA & MACHINE LEARNING",
        category: "Geographic Information Systems (GIS) & Predictive Modeling",
        problemLabel: "Masalah yang Dihadapi:",
        problem: "Dinas kesehatan memerlukan pemetaan spasial akurat mengenai daerah konsentrasi rawan penularan TB serta estimasi tren kasus ke depan untuk alokasi logistik medis.",
        solutionLabel: "Solusi Rekayasa Sistem:",
        solution: "Mengembangkan WebGIS menggunakan autokorelasi spasial Global Moran\'s I & klaster LISA, dikombinasikan dengan peramalan Facebook Prophet dan K-Means clustering tahun 2026 pada Leaflet.js.",
        impactLabel: "Dampak & Pencapaian Nyata:",
        impact: "Menghasilkan peta klaster kerawanan (Hotspot & Coldspot) di 27 kecamatan Aceh Utara sebagai rujukan berbasis bukti ilmiah bagi pembuat kebijakan.",
        techStack: "Python (Flask), Leaflet.js, Facebook Prophet, Scikit-learn, GeoDa, MySQL.",
        link: "https://webgis-tbacehutara.vercel.app/",
        linkText: "Kunjungi WebGIS ↗"
      },
      {
        title: "Sistem Informasi E-Learning SMA Tuna Bangsa",
        badge: "ACADEMIC SYSTEM",
        category: "Education Management System & Multi-Role LMS",
        problemLabel: "Masalah yang Dihadapi:",
        problem: "Proses manajemen materi pelajaran, jadwal ujian, dan penilaian siswa yang masih tersebar dan membutuhkan sistem akademik terpadu.",
        solutionLabel: "Solusi Rekayasa Sistem:",
        solution: "Merancang platform e-learning dengan pemisahan hak akses ketat (Administrator, Guru, Siswa), pengerjaan ujian daring, dan rekapitulasi nilai otomatis.",
        impactLabel: "Dampak & Pencapaian Nyata:",
        impact: "Memudahkan 300+ civitas akademika dalam kegiatan belajar mengajar online yang terstruktur dan hemat kertas.",
        techStack: "Laravel, PHP, MySQL, Bootstrap 5, Git/GitHub.",
        link: "https://github.com/Azilatarigan01/laravel",
        linkText: "Lihat GitHub Repository ↗"
      },
      {
        title: "Sistem Monitoring Mahasiswa Berbasis RFID & Auto Photo Capture",
        badge: "🎓 RISET IoT & SISTEM KAMPUS",
        category: "IoT Hardware, Computer Vision & Smart Campus",
        problemLabel: "Masalah yang Dihadapi:",
        problem: "Tingginya kecurangan titip absen menggunakan kartu presensi manual dan tidak adanya validasi visual saat mahasiswa melakukan scan kartu di kampus.",
        solutionLabel: "Solusi Rekayasa Sistem:",
        solution: "Mengintegrasikan reader RFID RC522 dengan script OpenCV webcam untuk otomatis menjepret foto mahasiswa saat scan, mencocokkan identitas, dan mendistribusikan notifikasi via email dan Google Drive.",
        impactLabel: "Dampak & Pencapaian Nyata:",
        impact: "Merancang dan menguji purwarupa sistem absensi cerdas berbasis kamera terintegrasi Google Drive dengan verifikasi foto 100%.",
        techStack: "Python (Django REST), PostgreSQL, RFID RC522, OpenCV Webcam API, Google Drive API, SMTP.",
        link: "#contact",
        linkText: "Diskusikan Sistem Ini ↗"
      }
    ]
  };

  function openCaseStudyModal(projId) {
    const studies = detailedCaseStudies[currentLang] || detailedCaseStudies.en;
    const data = studies[projId];

    if (data && modalContentBody && projectModal) {
      modalContentBody.innerHTML = `
        <div style="margin-bottom:1.25rem;">
          <span style="font-family:var(--font-display);font-size:0.75rem;font-weight:800;color:#0284C7;background:#E0F2FE;padding:4px 12px;border-radius:9999px;">${data.badge}</span>
          <span style="display:block;font-size:0.8rem;color:#64748B;margin-top:6px;font-weight:600;">${data.category}</span>
          <h2 style="font-family:var(--font-display);font-size:1.6rem;font-weight:800;color:#0B192C;margin-top:8px;line-height:1.3;">${data.title}</h2>
        </div>
        <div style="margin-bottom:1.15rem;">
          <h4 style="font-size:0.88rem;font-weight:800;margin-bottom:4px;text-transform:uppercase;color:#0284C7;">${data.problemLabel}</h4>
          <p style="font-size:0.92rem;color:#475569;line-height:1.6;">${data.problem}</p>
        </div>
        <div style="margin-bottom:1.15rem;">
          <h4 style="font-size:0.88rem;font-weight:800;margin-bottom:4px;text-transform:uppercase;color:#0284C7;">${data.solutionLabel}</h4>
          <p style="font-size:0.92rem;color:#475569;line-height:1.6;">${data.solution}</p>
        </div>
        <div style="margin-bottom:1.25rem;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:0.9rem 1rem;">
          <h4 style="font-size:0.88rem;font-weight:800;color:#166534;margin-bottom:4px;text-transform:uppercase;">${data.impactLabel}</h4>
          <p style="font-size:0.92rem;color:#15803D;line-height:1.6;margin:0;">${data.impact}</p>
        </div>
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:0.9rem 1rem;margin-bottom:1.5rem;">
          <span style="font-size:0.75rem;font-weight:700;color:#64748B;display:block;text-transform:uppercase;">Tech Stack:</span>
          <strong style="color:#0284C7;font-family:var(--font-display);font-size:0.88rem;">${data.techStack}</strong>
        </div>
        <div style="display:flex;gap:12px;align-items:center;">
          <a href="${data.link}" target="_blank" rel="noopener" class="btn-primary-blue modal-contact-btn" style="padding:0.65rem 1.35rem;font-size:0.88rem;">
            <span>${data.linkText}</span>
          </a>
        </div>
      `;

      projectModal.classList.add('active');
      projectModal.setAttribute('aria-hidden', 'false');
      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 25);
    }
  }

  document.querySelectorAll('.btn-card-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = parseInt(btn.getAttribute('data-project-id') || '0', 10);
      openCaseStudyModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (projectModal) {
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // =========================================================================
  // 6. COPY EMAIL ACTION (HERO & CONTACT CHANNELS)
  // =========================================================================
  const copyEmailCard = document.getElementById('copyEmailCard');
  const heroEmailBtn = document.getElementById('heroEmailBtn');
  const copyBadge = document.getElementById('copyBadge');

  function triggerCopyEmail(e) {
    const email = 'azilatgrn01@gmail.com';
    const dict = i18n[currentLang] || i18n.en;
    navigator.clipboard.writeText(email).then(() => {
      if (copyBadge) {
        copyBadge.textContent = currentLang === 'id' ? 'Tersalin! ✅' : 'Copied! ✅';
        copyBadge.style.background = '#10B981';
        copyBadge.style.color = '#FFFFFF';
        setTimeout(() => {
          copyBadge.textContent = dict.badgeCopy || 'Copy 📋';
          copyBadge.style.background = '';
          copyBadge.style.color = '';
        }, 2500);
      }
      showToast(dict.emailCopiedToast || `Email copied: ${email}`, '✉️');
      triggerConfetti(e?.clientX || window.innerWidth / 2, e?.clientY || window.innerHeight / 2, 30);
    }).catch(() => {
      showToast(`Email: ${email}`, '✉️');
    });
  }

  if (copyEmailCard) copyEmailCard.addEventListener('click', triggerCopyEmail);
  if (heroEmailBtn) heroEmailBtn.addEventListener('click', triggerCopyEmail);

  // =========================================================================
  // 7. DOWNLOAD / VIEW OFFICIAL CV (PDF)
  // =========================================================================
  const cvButtons = [
    document.getElementById('downloadCvBtn'),
    document.getElementById('downloadCvBtn2'),
    document.getElementById('aboutDownloadCvInline')
  ];

  cvButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        const dict = i18n[currentLang] || i18n.en;
        showToast(dict.preparingCvToast || 'Opening official CV document...', '📄');
        triggerConfetti(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 35);
        if (btn.tagName.toLowerCase() !== 'a') {
          e.preventDefault();
          window.open('assets/cv-nur-azila-tarigan.pdf', '_blank');
        }
      });
    }
  });

  // =========================================================================
  // 8. DIRECT CONTACT FORM
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value.trim() || 'Recruiter';
      const email = document.getElementById('formEmail')?.value.trim() || '';
      const subject = document.getElementById('formSubject')?.value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('formMessage')?.value.trim() || '';

      triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.6, 45);

      const isId = currentLang === 'id';
      const toastText = isId
        ? `Terima kasih Kak ${name}! Membuka draf email untuk mengirim pesan... ✨`
        : `Thank you, ${name}! Preparing email inquiry... ✨`;
      showToast(toastText, '🚀');

      const mailtoUrl = `mailto:azilatgrn01@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('Hi Azila,\n\n' + message + '\n\n---\nSender: ' + name + '\nEmail: ' + email)}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 750);

      contactForm.reset();
    });
  }


  // =========================================================================
  // 9. TOAST NOTIFICATION UTILITY
  // =========================================================================
  const siteToast = document.getElementById('siteToast');
  const toastMsg = document.getElementById('toastMsg');

  function showToast(message, icon = '✨') {
    if (!siteToast || !toastMsg) return;
    toastMsg.textContent = message;
    const iconEl = siteToast.querySelector('.toast-icon');
    if (iconEl) iconEl.textContent = icon;
    siteToast.classList.add('show');
    clearTimeout(siteToast._timeout);
    siteToast._timeout = setTimeout(() => {
      siteToast.classList.remove('show');
    }, 3500);
  }

  // =========================================================================
  // 10. NAVBAR SCROLL SPY & MOBILE MENU DRAWER
  // =========================================================================
  const navPills = document.querySelectorAll('.nav-link-pill, .mobile-nav-pill');
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 180;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navPills.forEach(pill => {
          pill.classList.remove('active');
          if (pill.getAttribute('href') === `#${id}`) {
            pill.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // Mobile Menu Toggle Drawer
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavPills = document.querySelectorAll('.mobile-nav-pill');

  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNavDrawer.classList.toggle('open');
      mobileMenuToggle.classList.toggle('active', isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
      mobileNavDrawer.setAttribute('aria-hidden', !isOpen);
    });

    // Close on link click
    mobileNavPills.forEach(pill => {
      pill.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileNavDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!mobileNavDrawer.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileNavDrawer.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileNavDrawer.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // =========================================================================
  // 11. TECH ECOSYSTEM MATRIX FILTER TABS
  // =========================================================================
  const techFilterTabs = document.querySelectorAll('#techFilterTabs .tech-tab-btn');
  const matrixToolItems = document.querySelectorAll('#matrixToolsGrid .matrix-tool-item');

  if (techFilterTabs.length > 0 && matrixToolItems.length > 0) {
    techFilterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        techFilterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;

        matrixToolItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'flex';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.85)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // =========================================================================
  // 12. INTERACTIVE 3D TRAIT CARD DECK CONTROLLER
  // =========================================================================
  const traitCards = document.querySelectorAll('#traitStackedContainer .trait-card');
  const traitDots = document.querySelectorAll('#traitDeckDots .trait-dot');
  const traitCounter = document.getElementById('traitCounterDisplay');
  let currentTraitIndex = 0;

  function updateTraitDeck(newIndex) {
    if (!traitCards.length) return;
    currentTraitIndex = (newIndex + traitCards.length) % traitCards.length;

    traitCards.forEach((card, idx) => {
      card.classList.remove('active');
      const offset = (idx - currentTraitIndex + traitCards.length) % traitCards.length;

      if (offset === 0) {
        card.classList.add('active');
        card.style.transform = 'scale(1) translateY(0)';
        card.style.opacity = '1';
        card.style.zIndex = '10';
        card.style.pointerEvents = 'auto';
      } else if (offset === 1) {
        card.style.transform = 'scale(0.95) translateY(10px)';
        card.style.opacity = '0.45';
        card.style.zIndex = '5';
        card.style.pointerEvents = 'none';
      } else if (offset === 2) {
        card.style.transform = 'scale(0.9) translateY(20px)';
        card.style.opacity = '0.2';
        card.style.zIndex = '1';
        card.style.pointerEvents = 'none';
      } else {
        card.style.transform = 'scale(0.85) translateY(30px)';
        card.style.opacity = '0';
        card.style.zIndex = '0';
        card.style.pointerEvents = 'none';
      }
    });

    traitDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentTraitIndex);
    });

    if (traitCounter) {
      traitCounter.textContent = `${currentTraitIndex + 1} / ${traitCards.length}`;
    }
  }

  // Click on active card cycles to next trait
  traitCards.forEach(card => {
    card.addEventListener('click', () => {
      updateTraitDeck(currentTraitIndex + 1);
      triggerConfetti(window.innerWidth * 0.7, window.innerHeight * 0.7, 15);
    });
  });

  // Click on dots
  traitDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      updateTraitDeck(idx);
    });
  });

  updateTraitDeck(0);

  // =========================================================================
  // 13. TYPEWRITER EFFECT IN ABOUT HEADER
  // =========================================================================
  const aboutTypewriterEl = document.getElementById('aboutTypewriterText');
  if (aboutTypewriterEl) {
    const phrasesEn = [
      'Problem Solver. Systems Builder',
      'Detail Oriented. Full-Stack Dev',
      'Data & GIS Analyst. S.Kom. 2026',
      'Digital Systems. High Impact'
    ];
    const phrasesId = [
      'Problem Solver. Rekayasa Sistem',
      'Teliti & Presisi. Full-Stack Web',
      'Analisis Data & WebGIS. S.Kom.',
      'Sistem Digital. Berdampak Nyata'
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function tickTypewriter() {
      const phrases = currentLang === 'id' ? phrasesId : phrasesEn;
      const currentPhrase = phrases[phraseIdx % phrases.length];

      if (isDeleting) {
        charIdx--;
        typingSpeed = 40;
      } else {
        charIdx++;
        typingSpeed = 85;
      }

      aboutTypewriterEl.textContent = currentPhrase.substring(0, charIdx);

      if (!isDeleting && charIdx === currentPhrase.length) {
        typingSpeed = 2200; // Pause at end of phrase
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx++;
        typingSpeed = 400; // Pause before typing new phrase
      }

      setTimeout(tickTypewriter, typingSpeed);
    }
    setTimeout(tickTypewriter, 800);
  }

  // =========================================================================
  // 14. AWARDS PHOTO MOMENTS MOSAIC & LIGHTBOX MODAL
  // =========================================================================
  const awardsData = [
    {
      id: 'awardCard1',
      badge: { en: 'VOCATIONAL VALEDICTORIAN • RPL', id: 'LULUSAN TERBAIK • REKAYASA PERANGKAT LUNAK' },
      year: '2022',
      icon: '🥇',
      color: 'gold',
      imgSrc: 'assets/awards/smk_rpl.jpg',
      title: { en: 'Top Graduate in Software Engineering (RPL)', id: 'Lulusan Terbaik Rekayasa Perangkat Lunak (RPL)' },
      inst: { en: 'SMK Swasta Al Washliyah 2 Perdagangan', id: 'SMK Swasta Al Washliyah 2 Perdagangan' },
      desc: {
        en: 'Awarded the Top Graduate rank in Software Engineering (Rekayasa Perangkat Lunak) for academic excellence, complete mastery of programming curricula, and technical leadership during vocational studies.',
        id: 'Dianugerahi predikat Lulusan Terbaik Jurusan Rekayasa Perangkat Lunak (RPL) atas keunggulan akademik, ketuntasan kurikulum pemrograman, dan kepeloporan teknis selama studi kejuruan.'
      },
      tags: ['Rank #1 RPL Major', 'Software Engineering Roots', 'Vocational Valedictorian'],
      fileHint: 'assets/awards/smk_rpl.jpg'
    },
    {
      id: 'awardCard2',
      badge: { en: 'ACADEMIC HONORS • GPA 3.68', id: 'PREDIKAT AKADEMIK • IPK 3.68' },
      year: '2026',
      icon: '🎓',
      color: 'sky',
      imgSrc: 'assets/awards/wisuda_s1.jpg',
      title: { en: '"Very Satisfactory" Academic Honors (GPA 3.68 / 4.00)', id: 'Predikat Kelulusan "Sangat Memuaskan" (IPK 3.68 / 4.00)' },
      inst: { en: 'Universitas Malikussaleh — S1 Sistem Informasi', id: 'Universitas Malikussaleh — S1 Sistem Informasi' },
      desc: {
        en: 'Conferred the Bachelor of Computer Science (S.Kom.) degree with a Cumulative GPA of 3.68 / 4.00, demonstrating rigorous command over web applications, information system analysis, and relational database architecture.',
        id: 'Meraih gelar Sarjana Komputer (S.Kom.) dengan Indeks Prestasi Kumulatif 3,68 / 4,00, mencerminkan penguasaan mendalam atas rekayasa web, analisis sistem informasi, dan pemodelan database.'
      },
      tags: ['Cumulative GPA 3.68 / 4.00', 'Very Satisfactory Honors', 'Bachelor of Computer Science'],
      fileHint: 'assets/awards/wisuda_s1.jpg'
    },
    {
      id: 'awardCard3',
      badge: { en: 'NATIONAL SELECTION • KEMENDIKBUD RI', id: 'SELEKSI NASIONAL • KEMENDIKBUD RI' },
      year: '2023',
      icon: '🏛️',
      color: 'purple',
      imgSrc: 'assets/awards/pmm3_unair.jpg',
      title: { en: 'Merdeka Student Exchange Awardee (PMM Batch 3)', id: 'Awardee Program Pertukaran Mahasiswa Merdeka (PMM 3)' },
      inst: { en: 'Universitas Airlangga (UNAIR), Surabaya • Kemendikbudristek RI', id: 'Universitas Airlangga (UNAIR), Surabaya • Kemendikbudristek RI' },
      desc: {
        en: 'Selected through nationwide competitive selection for Merdeka Student Exchange Batch 3 funded by Kemendikbudristek RI, representing Universitas Malikussaleh for one full academic semester at Universitas Airlangga.',
        id: 'Lolos seleksi ketat tingkat nasional Program Pertukaran Mahasiswa Merdeka Batch 3 yang didanai Kemendikbudristek RI, mewakili Universitas Malikussaleh untuk studi penuh satu semester di Universitas Airlangga.'
      },
      tags: ['National Selection Kemendikbud', 'Study at UNAIR Surabaya', 'Inter-University Grantee'],
      fileHint: 'assets/awards/pmm3_unair.jpg'
    }
  ];

  const mosaicItems = document.querySelectorAll('.mosaic-item');
  const awardModal = document.getElementById('awardModal');
  const awardModalBody = document.getElementById('awardModalContentBody');
  const awardModalCloseBtn = document.getElementById('awardModalCloseBtn');

  function openAwardModal(idx) {
    const item = awardsData[idx];
    if (!item || !awardModal || !awardModalBody) return;

    const isId = currentLang === 'id';
    const badgeText = isId ? item.badge.id : item.badge.en;
    const titleText = isId ? item.title.id : item.title.en;
    const instText = isId ? item.inst.id : item.inst.en;
    const descText = isId ? item.desc.id : item.desc.en;

    awardModalBody.innerHTML = `
      <div class="award-modal-inner">
        <div class="am-header-badge-row">
          <span class="award-badge-pill ${item.color}">${badgeText}</span>
          <span class="award-year">${item.year}</span>
        </div>
        <h3 class="am-main-title">${item.icon} ${titleText}</h3>
        <span class="am-institution">${instText}</span>

        <div class="am-media-frame">
          <img src="${item.imgSrc}" alt="${titleText}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="mosaic-placeholder-view ${item.color}-grad" style="min-height: 140px; display: none;">
            <div class="ph-content-box">
              <div class="ph-icon-circle ${item.color}-glow">${item.icon}</div>
              <div class="ph-texts">
                <h4 class="ph-title">${titleText}</h4>
                <span class="ph-sub">${instText}</span>
              </div>
            </div>
            <div class="ph-dropzone-pill" style="margin-top: 0.75rem;">
              <span class="drop-icon">📷</span>
              <span class="drop-text">${item.fileHint}</span>
            </div>
          </div>
        </div>

        <div class="am-desc-box">
          <p>${descText}</p>
        </div>

        <div class="am-tags-row">
          ${item.tags.map(t => `<span>${t}</span>`).join('')}
        </div>

        <div class="am-actions-row">
          <button type="button" class="btn-am-jump" id="btnAmJumpCard">
            <span>${isId ? 'Fokuskan ke Kartu Penghargaan ↓' : 'Highlight Honor Card ↓'}</span>
          </button>
          <button type="button" class="btn-am-close" id="btnAmClose">
            <span>${isId ? 'Tutup' : 'Close'}</span>
          </button>
        </div>
      </div>
    `;

    awardModal.classList.add('open');
    awardModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook jump button
    document.getElementById('btnAmJumpCard')?.addEventListener('click', () => {
      closeAwardModal();
      highlightAwardCard(item.id);
    });

    document.getElementById('btnAmClose')?.addEventListener('click', closeAwardModal);
  }

  function closeAwardModal() {
    if (!awardModal) return;
    awardModal.classList.remove('open');
    awardModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function highlightAwardCard(cardId) {
    const cardEl = document.getElementById(cardId);
    if (!cardEl) return;
    cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    cardEl.classList.add('award-card-pulse');
    setTimeout(() => {
      cardEl.classList.remove('award-card-pulse');
    }, 1500);
    triggerConfetti(window.innerWidth * 0.65, window.innerHeight * 0.5, 25);
  }

  if (mosaicItems.length) {
    mosaicItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const idx = parseInt(item.dataset.idx, 10);
        openAwardModal(idx);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(item.dataset.idx, 10);
          openAwardModal(idx);
        }
      });
    });
  }

  if (awardModalCloseBtn) {
    awardModalCloseBtn.addEventListener('click', closeAwardModal);
  }

  if (awardModal) {
    awardModal.addEventListener('click', (e) => {
      if (e.target === awardModal) {
        closeAwardModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && awardModal?.classList.contains('open')) {
      closeAwardModal();
    }
  });




  // =========================================================================
  // 10. WALKING MASCOT CLICK HOP & CELEBRATION
  // =========================================================================
  const walkingBotDuo = document.getElementById('walkingBotDuo');
  if (walkingBotDuo) {
    walkingBotDuo.addEventListener('click', (e) => {
      walkingBotDuo.classList.add('hop');
      triggerConfetti(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight - 80, 40);
      const msg = currentLang === 'id' ? '🐾 Maskot setia memberi semangat untukmu! ✨' : '🐾 Mascot companions cheering for you! ✨';
      showToast(msg, '🐾');
      setTimeout(() => {
        walkingBotDuo.classList.remove('hop');
      }, 600);
    });
  }
});