import { ExperienceRole, SkillCategory, ExpertiseCard, SkillWheel, Client } from "./types";

export const PERSONAL_INFO = {
  name: "Subham Mallick",
  role: "Business Lead @ Verify Now",
  tagline: "I Help Companies Hire With Confidence, Compliance, and Trust.",
  location: "India",
  email: "subham.mallick@verifynow.in",
  phone: "+91 8917314369",
  linkedin: "https://www.linkedin.com/in/subham-mallick-aa9b0a88",
  github: "https://github.com/SubhMalllick",
  portfolio: "https://subhamportfolio-99045299-99c19.web.app/",
  companyUrl: "https://verifynow.in",
  about: "I help organizations hire with confidence by combining strategy, technology, and reliable background verification solutions. As a Business Lead at Verify Now, I focus on building strategic partnerships, driving business growth, and delivering scalable verification processes that enable faster and more secure hiring. With experience across operations, analytics, and business development, I bring a holistic approach to creating efficient, trustworthy hiring ecosystems."
};

export const STATISTICS = [
  { label: "Verify Now Tenure", value: "4 Years", unit: "Continuous Growth" },
  { label: "Active Key Partnerships", value: "12+", unit: "Enterprise Level" },
  { label: "SLA Adherence Ratio", value: "99.8%", unit: "Guaranteed Turnaround" },
  { label: "Onboarding Scale Speed", value: "40%", unit: "Faster Turnaround" }
];

export const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    title: "Enterprise Background Verification",
    category: "BGV Implementation",
    tools: "Employment Verification, Education Checks, Criminal Records, Address Verification",
    imageKeyword: "shield",
    description: "Design robust, multi-level vendor background screening architectures focusing on compliance standards, reducing general hiring risks and auditing identity layers."
  },
  {
    title: "Client Partnership Development",
    category: "Business Development",
    tools: "Client Acquisition, HR Partnerships, Proposal Strategy, Account Growth",
    imageKeyword: "handshake",
    description: "Cultivate and manage key enterprise relationships with industry lead organizations to construct bespoke verification workflows matching their specific hiring timelines."
  },
  {
    title: "Verification Process Optimization",
    category: "Operational Improvement",
    tools: "Workflow Optimization, Case Management, Compliance, Risk Screening",
    imageKeyword: "settings",
    description: "Evaluate active check workflows, re-architecting steps and automating key data triggers to slash client onboarding cycles and bypass operational bottlenecks."
  },
  {
    title: "Strategic Market Expansion",
    category: "Growth Initiative",
    tools: "Lead Generation, Market Research, Strategic Partnerships, Sales Strategy",
    imageKeyword: "trending-up",
    description: "Identify high-potential business ecosystems across major domestic markets and build long-term sales funnel designs ensuring steady corporate lead conversions."
  },
  {
    title: "Enterprise Client Onboarding",
    category: "Client Success",
    tools: "Client Onboarding, HR Coordination, Background Screening Solutions",
    imageKeyword: "users",
    description: "Orchestrate end-to-end client setup operations, coordinating seamlessly with HR partners to guarantee zero-latency system integration and clear SLA understanding."
  }
];

export const SKILL_WHEELS: SkillWheel[] = [
  {
    name: "Lead Generation",
    percentage: 95,
    subtext: "Enterprise Sourcing",
    description: "Developing strategic partnership funnels, scaling enterprise outreach, and optimizing CRM processes for professional relationship building.",
    color: "#00d992"
  },
  {
    name: "Sales Strategy",
    percentage: 98,
    subtext: "Value Propositioning",
    description: "Drafting scalable value propositions, presenting structured BGV capabilities, and fostering organic stakeholder alignment.",
    color: "#00d992"
  },
  {
    name: "Proposal Strategy",
    percentage: 94,
    subtext: "Contract Engineering",
    description: "Structuring comprehensive business proposals, compliance checklists, and detailed service level agreements with high-fidelity operational guidelines.",
    color: "#00d992"
  },
  {
    name: "Account Partnerships",
    percentage: 96,
    subtext: "Retainer Expansion",
    description: "Nurturing long-term relationship structures inside existing corporate accounts, facilitating quality retention, and aligning core operations with client specifications.",
    color: "#00d992"
  },
  {
    name: "BGV Workflow Design",
    percentage: 99,
    subtext: "Latency Reduction",
    description: "Optimizing the candidate onboarding flow, streamlining verification steps, and minimizing turnaround cycles while maintaining top quality.",
    color: "#00d992"
  },
  {
    name: "Audit & Compliance",
    percentage: 100,
    subtext: "Zero Margin Errors",
    description: "Verifying credentials rigorously against legal and academic databases, guaranteeing perfect data reporting and compliance quality and accuracy.",
    color: "#00d992"
  },
  {
    name: "Risk Screening",
    percentage: 95,
    subtext: "Candidate Vetting",
    description: "Evaluating potential background issues including credit indicators, criminal record registers, and judicial databases under strict legal directives.",
    color: "#00d992"
  },
  {
    name: "Team Leadership",
    percentage: 92,
    subtext: "Operations Command",
    description: "Directing and mentoring fellow associates, organizing balanced operational workloads, and hosting professional skills enhancement sessions.",
    color: "#00d992"
  }
];

export const CATEGORIZED_CLIENTS: Client[] = [
  { name: "Welspun", category: "Manufacturing & Industries" },
  { name: "Omega Healthcare", category: "Healthcare & Life Sciences" },
  { name: "Rx100 Ventures", category: "Finance & Corporate Services" },
  { name: "Tenthpin Management Consultants Pvt. Ltd", category: "Consulting & Technology" },
  { name: "Shearwater Health", category: "Healthcare & Life Sciences" },
  { name: "Auxilo Finserve Pvt Ltd", category: "Finance & Corporate Services" },
  { name: "TSC Technologies Private Limited", category: "Consulting & Technology" },
  { name: "LiveLike Inc", category: "Consulting & Technology" },
  { name: "Duravit India Private Limited", category: "Manufacturing & Industries" },
  { name: "Connecting IT", category: "Consulting & Technology" },
  { name: "SS Infra Services India Private Limited", category: "Education & Facility Operations" },
  { name: "Ess & Ess Links Perfect Security Systems", category: "Education & Facility Operations" },
  { name: "Xcelevate Skills Foundation", category: "Finance & Corporate Services" },
  { name: "NPS - National Public School", category: "Education & Facility Operations" },
  { name: "Venture Softtech India Private Limited", category: "Consulting & Technology" },
  { name: "MeedenLabs Pvt Ltd", category: "Consulting & Technology" },
  { name: "SandLogic Technologies Pvt. Ltd", category: "Consulting & Technology" },
  { name: "Innopay Technologies Pvt Ltd", category: "Consulting & Technology" },
  { name: "Ancile Facility Solutions Pvt. Ltd", category: "Education & Facility Operations" },
  { name: "Escolar Technology Solutions Private Limited", category: "Consulting & Technology" },
  { name: "Corpzo Ventures Private Limited", category: "Finance & Corporate Services" }
];

export const CLIENTS = CATEGORIZED_CLIENTS.map(c => c.name);

export const EXPERIENCE_HISTORY: ExperienceRole[] = [
  {
    id: "business-lead",
    title: "Business Lead",
    period: "July 2025 - Present",
    duration: "1 year",
    location: "India",
    company: "Verify Now",
    summary: "Lead business development strategies, client partnerships, and market expansion efforts. Work closely with internal teams to streamline verification processes, craft impactful proposals, and ensure every client engagement reflects our commitment to quality and speed.",
    responsibilities: [
      "Drive strategic business planning, high-value client acquisition, and overall pipeline sales analytics.",
      "Partner directly with HR teams and C-level stakeholders to design tailored, API-integrated BGV solutions.",
      "Own the entire client onboarding cycle, boosting lead-to-onboard conversion rates.",
      "Mentor enterprise account executives and associates to build a high-performing partnership culture.",
      "Explore and initiate high-value corporate accounts and partnership models across India and beyond."
    ],
    metrics: [
      { label: "Business Growth", value: "32% YoY" },
      { label: "Client Retainer Rate", value: "96.5%" },
      { label: "Successful Conversions", value: "110+" }
    ],
    departmentCode: "BD-LEAD"
  },
  {
    id: "assistant-team-lead",
    title: "Assistant Team Leader - Business",
    period: "May 2024 - July 2025",
    duration: "1 year 2 months",
    location: "India",
    company: "Verify Now",
    summary: "Specialized in driving team sales performance and fostering a collaborative workplace environment that delivers exceptional client SLA execution. Supported the executive leadership team in optimizing client relations and growth strategies.",
    responsibilities: [
      "Supported senior leadership to align team outputs with overarching company revenue and CSAT goals.",
      "Designed and optimized core operational screening workflows, reducing client friction.",
      "Directly managed a team of business associates to ensure 99.8%+ SLA turnaround speed.",
      "Developed key account performance indicators and optimized business resource allocation.",
      "Led client troubleshooting and dispute sessions, guaranteeing fast and professional resolutions."
    ],
    metrics: [
      { label: "SLA Turnaround Rate", value: "99.8%" },
      { label: "Team Productivity", value: "+18%" },
      { label: "Adherence Goal", value: "100%" }
    ],
    departmentCode: "BD-OPS-MGMT"
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    period: "December 2023 - May 2024",
    duration: "6 months",
    location: "India",
    company: "Verify Now",
    summary: "Focused on delivering exceptional client onboarding experiences through meticulous requirement mapping and optimization of management information dashboards for seamless account processing.",
    responsibilities: [
      "Constructed custom client reporting structures containing complex compliance parameters.",
      "Collaborated closely with marketing teams to map lead acquisition and predict account conversion behaviors.",
      "Analyzed bottleneck statistics and compiled business reports to support executive decision-making.",
      "Assisted in formatting standard proposal templates and client agreements for faster closure."
    ],
    metrics: [
      { label: "Bottlenecks Fixed", value: "4 Key Sectors" },
      { label: "Reporting Pipelines", value: "3 Integrated" },
      { label: "Data Quality Ratio", value: "99.2%" }
    ],
    departmentCode: "BIZ-ANALYTICS"
  },
  {
    id: "operations-executive",
    title: "Operations Executive",
    period: "August 2022 - December 2023",
    duration: "1 year 4 months",
    location: "India",
    company: "Verify Now",
    summary: "Owned end-to-end background verification processing, ensuring high-fidelity account entries, document audits, and rigorous regulatory compliance checkups.",
    responsibilities: [
      "Processed background verification submissions rapidly with immaculate data precision.",
      "Audited candidate files across employment histories, credentials, and legal compliance.",
      "Coordinated with verification specialists to resolve portal processing latency issues.",
      "Standardized client data sharing guidelines for smoother HR reporting."
    ],
    metrics: [
      { label: "Client Audits Done", value: "8,500+" },
      { label: "Turnaround Boost", value: "+28% Speedup" },
      { label: "Accuracy Checked", value: "100%" }
    ],
    departmentCode: "OPS-REGULATORY"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "bgv-architecture",
    name: "BGV Operations",
    eyebrow: "BACKGROUND VERIFICATION COGNIZANCE",
    description: "Designing reliable client onboarding, candidate screening, compliance, and automated HR verification channels.",
    skills: [
      { name: "Background Verification Operations", level: 5, details: "Expert in education, employment, physical address, and legal checks." },
      { name: "Quality Assurance Auditing", level: 4, details: "Specialized QA training in validation and performance checks; analyzing process blocks." },
      { name: "Document Audit Compliance", level: 5, details: "High-fidelity database verification of academic and corporate certificates." },
      { name: "SLA Optimization", level: 5, details: "Reducing delivery cycles to support high-growth partner onboarding." }
    ]
  },
  {
    id: "business-strategy",
    name: "Sales & Strategic BD",
    eyebrow: "GROWTH & ENTERPRISE VALUE",
    description: "Formulating business growth initiatives, custom proposals, and streamlining lead-to-onboard pipelines.",
    skills: [
      { name: "Business Development Strategy", level: 5, details: "Planning revenue channels and strategic market coordinates." },
      { name: "Sales Pitching & Decks", level: 5, details: "Designing visual decks and value propositions for enterprise HRs." },
      { name: "Lead-to-Onboard Conversion", level: 5, details: "Eliminating friction points where corporate leads drop off." },
      { name: "Account Relationship Management", level: 5, details: "Expanding business pathways and boosting client retainer statistics." }
    ]
  },
  {
    id: "operations-leadership",
    name: "Workflow & Team Leadership",
    eyebrow: "OPERATIONAL GOVERNANCE",
    description: "Commanding business associates, designing structured reports, and optimizing corporate compliance systems.",
    skills: [
      { name: "Team Management", level: 5, details: "Mentoring business associates and guiding peak performance guidelines." },
      { name: "Client Reporting Systems", level: 5, details: "Developing structured dashboards to report SLA speed-ups and metrics." },
      { name: "Candidate Experience Management", level: 5, details: "Ensuring candidates navigate verification with maximum trust and safety." },
      { name: "Project Delivery Coordination", level: 4, details: "Meeting tight milestones while maintaining legal and privacy compliance." }
    ]
  }
];

export const EDUCATION_ESTABLISHMENTS = [
  {
    name: "Sophitorium Institute of Technology & Life Skills",
    period: "2017 - 2020",
    details: "Degree program mapping business communication channels, operations governance, and executive project structures."
  }
];
