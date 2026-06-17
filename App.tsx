/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Award,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  ChevronDown,
  FileCheck,
  Check,
  RotateCcw,
  Search,
  Activity,
  Cpu,
  Coins,
  Factory,
  GraduationCap,
  Building2,
  Database,
  CheckCircle2,
  Server,
  Menu,
  X,
  Github,
  Play,
  Pause,
  RefreshCw
} from "lucide-react";

import { 
  PERSONAL_INFO, 
  STATISTICS, 
  CATEGORIZED_CLIENTS,
  CLIENTS,
  EDUCATION_ESTABLISHMENTS 
} from "./data";

import { CipherClientName } from "./components/CipherClientName";
import { AnimatedMetric } from "./components/AnimatedMetric";

import InteractiveTimeline from "./components/InteractiveTimeline";
import AcademicTimeline from "./components/AcademicTimeline";
import SkillsGrid from "./components/SkillsGrid";

export default function App() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [rotatingWordIdx, setRotatingWordIdx] = useState(0);
  const rotatingWords = ["CONFIDENCE", "COMPLIANCE", "SECURITY", "TRUST"];

  // Form states (Sales Inquiry/Onboarding consultation instead of RFP)
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [consultLogs, setConsultLogs] = useState<string[]>([]);
  const [consultResult, setConsultResult] = useState("");

  // Interactive client catalog states
  const [activeClientCat, setActiveClientCat] = useState<string>("All");
  const [clientSearchQuery, setClientSearchQuery] = useState<string>("");
  const [clientPage, setClientPage] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [clientList, setClientList] = useState<typeof CATEGORIZED_CLIENTS>(CATEGORIZED_CLIENTS);
  const [isAutoLooping, setIsAutoLooping] = useState<boolean>(true);

  // Dynamic Client Interchange Loop (simultaneously shuffles roster elements every 4 seconds when All is selected)
  useEffect(() => {
    if (activeClientCat !== "All" || clientSearchQuery || !isAutoLooping) {
      // Restore standard catalog order when exploring specific industries or conducting searches
      setClientList(CATEGORIZED_CLIENTS);
      return;
    }

    const interval = setInterval(() => {
      setClientList((prev) => {
        const next = [...prev];
        // Fisher-Yates shuffle the full list to interchange all visible name positions simultaneously
        for (let i = next.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = next[i];
          next[i] = next[j];
          next[j] = temp;
        }
        return next;
      });
    }, 4000); // Trigger every 4 seconds exactly as requested

    return () => clearInterval(interval);
  }, [activeClientCat, clientSearchQuery, isAutoLooping]);

  // Rotating header interval
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingWordIdx((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // India Live Timer (IST)
  useEffect(() => {
    const updateTime = () => {
      try {
        const utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
        const istOffset = 5.5 * 3600000;
        const istTime = new Date(utc + istOffset);
        
        const timeFormatted = istTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTimeStr(timeFormatted + " IST");
      } catch (e) {
        setTimeStr("India");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form submit handler with direct mailto: route dispatch
  const handleConsultSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    // Direct mailto construction
    const subject = encodeURIComponent(`Consultation Inquiry from ${formName}`);
    const body = encodeURIComponent(
      `Hello Subham,\n\nYou have received a new consultation inquiry through your portfolio website:\n\n` +
      `Name: ${formName}\n` +
      `Email: ${formEmail}\n` +
      `Organization: ${formCompany ? formCompany : "Personal Interest / Direct Partnership"}\n\n` +
      `Message:\n${formMessage}\n\n` +
      `Best regards,\n${formName}`
    );

    // Redirect to open the default email client with all details pre-filled
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const resetConsultForm = () => {
    setFormName("");
    setFormEmail("");
    setFormCompany("");
    setFormMessage("");
    setFormSubmitted(false);
    setConsultLogs([]);
    setConsultResult("");
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#f2f2f2] relative selection:bg-[#00d992]/30 selection:text-white" id="portfolio-main-page">
      
      {/* Visual background guide hairlines */}
      <div className="absolute left-[24px] xl:left-[64px] top-0 bottom-0 w-[1px] bg-[#3d3a39]/20 hidden lg:block pointer-events-none"></div>
      <div className="absolute right-[24px] xl:right-[64px] top-0 bottom-0 w-[1px] bg-[#3d3a39]/20 hidden lg:block pointer-events-none"></div>

      {/* FREEZABLE UNIFIED HEADER CONTAINER */}
      <div className="sticky top-0 z-50 bg-[#101010]/95 backdrop-blur-md border-b border-[#3d3a39]" id="freezable-header">

        {/* TOP NAVIGATION */}
        <nav className="px-6 py-4" id="primary-navigation-bar">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo Brand Title */}
            <a href="#" className="flex items-center gap-2.5 group cursor-pointer" id="logo-branding-link">
              <div className="w-8 h-8 rounded-[4px] border border-[#3d3a39] group-hover:border-[#00d992] flex items-center justify-center bg-[#1a1a1a] transition-all">
                <Sparkles size={16} className="text-[#00d992] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="font-sans font-bold text-sm tracking-tight text-white group-hover:text-[#00d992] transition-colors">
                  {PERSONAL_INFO.name}
                </p>
                <p className="font-mono text-[9px] text-[#8b949e]">
                  BUSINESS LEAD @ VERIFY NOW
                </p>
              </div>
            </a>

            {/* Nav items */}
            <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#bdbdbd]">
              <a href="#about-section" className="hover:text-[#00d992] hover:glow-btn transition-all">About</a>
              <a href="#expertise-section" className="hover:text-[#00d992] hover:glow-btn transition-all">Expertise</a>
              <a href="#clients-section" className="hover:text-[#00d992] hover:glow-btn transition-all">Clients Onboarded</a>
              <a href="#experience-section" className="hover:text-[#00d992] hover:glow-btn transition-all">Experience</a>
              <a href="#education-section" className="hover:text-[#00d992] hover:glow-btn transition-all">Education</a>
              <a href="#contact-section" className="hover:text-[#00d992] hover:glow-btn transition-all">Contact</a>
            </div>

            {/* Clock Pill & Connect CTA Block */}
            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-2 bg-[#1a1a1a] border border-[#3d3a39] px-3 py-1.5 rounded-full text-[10px] font-mono text-[#bdbdbd]">
                <span className="w-2 h-2 rounded-full bg-[#00d992] pulsing-dot shrink-0 relative"></span>
                <span>LIVE CLOCK:</span>
                <span className="text-[#00d992] font-semibold">{timeStr || "India"}</span>
              </div>

              <a
                href="#contact-section"
                className="px-3.5 py-2 bg-[#00d992] hover:bg-[#2fd6a1] text-[#101010] rounded-[6px] font-sans text-xs font-bold transition-all shadow-[0_0_12px_rgba(0,217,146,0.15)] flex items-center gap-1 cursor-pointer whitespace-nowrap"
                id="cta-nav-callback"
              >
                <span>Connect</span>
                <ArrowRight size={11} className="stroke-[3px]" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded bg-[#1a1a1a] border border-[#3d3a39] text-[#bdbdbd] hover:text-white transition-colors cursor-pointer"
                id="mobile-menu-hamburger"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
              </button>
            </div>

          </div>
        </nav>

        {/* MOBILE DROPDOWN DRAWER CONTAINER */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-[#3d3a39] bg-[#121212] overflow-hidden"
              id="mobile-nav-panel"
            >
              <div className="px-6 py-4 flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-wider text-[#bdbdbd] bg-[#121212]">
                <a 
                  href="#about-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#00d992] transition-colors py-2 border-b border-[#1f1f1f]"
                >
                  About
                </a>
                <a 
                  href="#expertise-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#00d992] transition-colors py-2 border-b border-[#1f1f1f]"
                >
                  Expertise
                </a>
                <a 
                  href="#clients-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#00d992] transition-colors py-2 border-b border-[#1f1f1f]"
                >
                  Clients Onboarded
                </a>
                <a 
                  href="#experience-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#00d992] transition-colors py-2 border-b border-[#1f1f1f]"
                >
                  Experience
                </a>
                <a 
                  href="#education-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#00d992] transition-colors py-2 border-b border-[#1f1f1f]"
                >
                  Education
                </a>
                <a 
                  href="#contact-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#00d992] transition-colors py-2"
                >
                  Contact
                </a>

                {/* Mobile Live Clock Info */}
                <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#3d3a39] px-3 py-2 rounded text-[10px] font-mono text-[#bdbdbd] mt-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00d992] pulsing-dot shrink-0 relative"></span>
                  <span>IST WATCH:</span>
                  <span className="text-[#00d992] font-semibold ml-auto">{timeStr || "India"}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* HERO SECTION LANDING (Polished Slide Content requested by user) */}
      <header className="py-20 sm:py-28 border-b border-[#3d3a39] relative overflow-hidden" id="about-section">
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Bold Greeting Card Layout */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3d3a39] bg-[#1a1a1a] text-xs font-mono text-[#00d992]">
              <Sparkles size={12} />
              <span>BUSINESS OPERATIONS &amp; STRATEGY LEADER</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-mono text-[#8b949e]">Hello! I'm</h2>
              <h1 className="text-5xl sm:text-7xl font-sans font-black tracking-tight leading-none text-white">
                SUBHAM <br/>
                <span className="text-[#00d992]">MALLICK</span>
              </h1>
            </div>

            <div className="space-y-1 py-2">
              <h3 className="text-base sm:text-lg font-sans font-medium text-[#bdbdbd]">
                I Help Companies Hire With
              </h3>
              
              {/* Spinning High Fidelity Word Slot */}
              <div className="h-12 overflow-hidden relative flex items-center justify-center sm:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWordIdx}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-2xl sm:text-4xl font-mono font-bold text-[#00d992] hover:scale-105 transition-transform"
                  >
                    {rotatingWords[rotatingWordIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Security and Trust pill segments */}
              <div className="flex gap-4 items-center justify-center sm:justify-start pt-2">
                <span className="px-3 py-1 text-xs border border-[#3d3a39] rounded-sm bg-[#1a1a1a] font-sans text-white flex items-center gap-1.5"><ShieldCheck size={12} className="text-[#00d992]" /> Security</span>
                <span className="px-3 py-1 text-xs border border-[#3d3a39] rounded-sm bg-[#1a1a1a] font-sans text-white flex items-center gap-1.5"><Award size={12} className="text-[#00d992]" /> Trust</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center justify-center sm:justify-start">
              <a
                href="#experience-section"
                className="py-3 px-6 bg-[#00d992] hover:bg-[#2fd6a1] text-[#101010] rounded-[6px] font-sans text-xs font-semibold shadow-[0_0_15px_rgba(0,217,146,0.15)] hover:shadow-[0_0_25px_rgba(0,217,146,0.3)] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>Explore Career Timeline</span>
              </a>
            </div>

          </div>

          {/* Right Block: Purely Non-Technical Professional Brief */}
          <div className="lg:col-span-5 bg-[#1a1a1a] border border-[#3d3a39] rounded-md p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00d992]/10 to-transparent rounded-bl-full"></div>
            
            <h4 className="text-xs font-mono text-[#00d992] uppercase tracking-[2px] block mb-3 font-semibold">ABOUT ME</h4>
            <div className="space-y-4 text-xs sm:text-sm text-[#bdbdbd] leading-relaxed">
              <p>
                I help organizations hire with confidence by combining strategy, technology, and reliable background verification solutions.
              </p>
              <p>
                As a Business Lead at Verify Now, I focus on building strategic partnerships, driving business growth, and delivering scalable verification processes that enable faster and more secure hiring.
              </p>
              <p>
                With experience across operations, analytics, and business development, I bring a holistic approach to creating efficient, trustworthy hiring ecosystems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3d3a39] flex items-center gap-4 text-xs font-mono text-[#8b949e]">
              <div>
                <p className="font-bold text-white uppercase font-sans text-[10px]">CURRENT BASE</p>
                <p className="mt-0.5">National Hub, India</p>
              </div>
              <div className="w-[1px] h-8 bg-[#3d3a39]"></div>
              <div>
                <p className="font-bold text-white uppercase font-sans text-[10px]">CORPORATIONS SERVED</p>
                <p className="mt-0.5">25+ Indian Ventures</p>
              </div>
            </div>
          </div>

        </div>

        {/* Decorative subtle ambient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,217,146,0.02),transparent_45%)] pointer-events-none"></div>
      </header>

      {/* DASHED ACCENT SEGMENT DIVIDER */}
      <div className="w-full h-px border-t border-dashed border-[rgba(79,93,117,0.4)]"></div>

      {/* STATISTICS RIBBON */}
      <section className="py-12 bg-[#1a1a1a]/40 border-b border-[#3d3a39]" id="stats-ribbon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATISTICS.map((stat, i) => (
              <div 
                key={i} 
                className="text-center sm:text-left border-l border-[#3d3a39]/60 pl-4 sm:pl-6 first:border-none"
                id={`stat-block-${i}`}
              >
                <p className="font-sans text-[10px] font-bold text-[#8b949e] uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <AnimatedMetric valueStr={stat.value} delayIndex={i} />
                <p className="font-sans text-[11px] text-[#bdbdbd] mt-1.5">
                  {stat.unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MY EXPERTISE (DYNAMIC SKILLS MATRIX DASHBOARD) */}
      <section className="py-16 sm:py-24 border-b border-[#3d3a39] bg-[#101010]" id="expertise-section">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl text-center sm:text-left mb-10">
            <span className="text-xs sm:text-sm font-semibold text-[#00d992] tracking-[2.52px] font-mono block uppercase mb-1">
              OPERATIONAL COMPETENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-normal tracking-tight text-white leading-tight">
              My Core Professional Expertise
            </h2>
            <p className="text-sm sm:text-base text-[#bdbdbd] leading-relaxed mt-3">
              An interactive matrix detailing my deep awareness of background screening regulations, sales conversions, and operational optimizations.
            </p>
          </div>

          <SkillsGrid />

        </div>
      </section>

      {/* STATE-OF-THE-ART CORPORATE ONBOARDING COMMAND BOARD */}
      <section className="py-16 sm:py-24 border-b border-[#3d3a39] bg-[#0a0a0a]" id="clients-section">
        <div className="max-w-7xl mx-auto px-6 whitespace-normal">
          
          <div className="text-left mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#00d992] tracking-[3px] font-mono block uppercase mb-1">
              SYSTEM PORTALS ONBOARDED
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-normal tracking-tight text-white leading-tight">
              Corporate Onboarding Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#bdbdbd] leading-relaxed mt-3 max-w-4xl">
              Inspect the live client connections established during my 3.9-year tenure at Verify Now, displaying secure integrations across key enterprise sectors.
            </p>
          </div>

          {/* Interactive KPIs Dashboard Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "INTEGRATED PORTALS", value: "21 Entities", desc: "Corporate nodes active" },
              { label: "AVERAGE SLA DELIVERY", value: "4.1 Days", desc: "Across all active checks" },
              { label: "COMPLIANCE ACCURACY", value: "99.85%", desc: "Under regulatory audits" },
              { label: "REGION COVERAGE", value: "PAN-India", desc: "Multi-jurisdictional reach" }
            ].map((kpi, index) => (
              <div 
                key={index} 
                className="bg-[#121212]/70 border border-[#262626] rounded-md p-4 text-left hover:border-zinc-700 transition-all duration-300"
              >
                <p className="font-mono text-[9px] text-[#00d992] tracking-wider leading-none uppercase">{kpi.label}</p>
                <p className="text-xl sm:text-2xl font-bold font-sans text-white mt-1.5 leading-none">{kpi.value}</p>
                <p className="text-[10px] text-zinc-500 mt-1">{kpi.desc}</p>
              </div>
            ))}
          </div>

          {/* Dual-Pane Integration Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Control Panel: Sector Navigation & Insights Briefing */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#121212] border border-[#242424] rounded-md p-6 text-left">
              <div>
                <span className="font-mono text-[9px] text-zinc-500 tracking-[1.5px] font-bold block uppercase mb-3">
                  SYSTEM CHANNELS &amp; COMPLIANCE
                </span>

                {/* Responsive Category Tabs */}
                <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 mb-6 scrollbar-none pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
                  {["All", "Healthcare & Life Sciences", "Consulting & Technology", "Finance & Corporate Services", "Manufacturing & Industries", "Education & Facility Operations"].map((cat) => {
                    const isActive = activeClientCat === cat;
                    const count = cat === "All" 
                      ? CATEGORIZED_CLIENTS.length 
                      : CATEGORIZED_CLIENTS.filter(c => c.category === cat).length;
                    
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveClientCat(cat);
                          setClientSearchQuery("");
                          setClientPage(0);
                        }}
                        className={`flex items-center justify-between gap-4 px-3 py-2.5 rounded-md border text-left text-xs font-sans transition-all duration-200 cursor-pointer group shrink-0 ${
                          isActive 
                            ? "bg-[#00d992] border-[#00d992] text-black font-semibold" 
                            : "bg-black/50 border-[#1f1f1f] text-zinc-400 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        <span className="truncate pr-1 uppercase tracking-wide text-[10px] sm:text-xs whitespace-nowrap lg:whitespace-normal">
                          {cat === "All" ? "ALL INDUSTRIES" : cat}
                        </span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full shrink-0 ${
                          isActive 
                            ? "bg-black/15 text-black font-bold" 
                            : "bg-zinc-900 text-zinc-500 group-hover:text-[#00d992]"
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Detailed Sector Brief card */}
                {(() => {
                  const sectorData = (() => {
                    switch (activeClientCat) {
                      case "Healthcare & Life Sciences":
                        return {
                          title: "Healthcare Verification Standards",
                          brief: "Critical compliance screening verifying medical license registers, clinical practice histories, and coordinates for medical facilities.",
                          standards: ["MCI/NMC Registry Check", "Clinical Certification Logs", "Coordination audits"]
                        };
                      case "Consulting & Technology":
                        return {
                          title: "Information Tech Screening",
                          brief: "Pre-onboard checks mapped against NSR directories, preceding employment performance records, and specialized technical audits.",
                          standards: ["Global Registry Check", "NASSCOM/NSR Verification", "API Verification Support"]
                        };
                      case "Finance & Corporate Services":
                        return {
                          title: "Regulatory Corporate Audit",
                          brief: "Dual-party integrity screen checking regulatory watchlists, credit ratings registries, and financial employment licenses.",
                          standards: ["Watchlist checks", "SEBI compliance logs", "Previous employment checks"]
                        };
                      case "Manufacturing & Industries":
                        return {
                          title: "Industrial Base Screening",
                          brief: "High-volume labor validation with Aadhaar audits, state litigation records crosschecking, and field geographic auditing.",
                          standards: ["Aadhaar e-KYC integration", "State courthouse scraping", "Physical field audits"]
                        };
                      case "Education & Facility Operations":
                        return {
                          title: "Institutional Safety Validation",
                          brief: "Stringent background integrity auditing verifying certified degree registers, court lists, and safety coordinator files.",
                          standards: ["State Board/UGC validation", "Municipal safety registers", "Police coordinator checks"]
                        };
                      default:
                        return {
                          title: "Consolidated Compliance Checkups",
                          brief: "Multi-tenant verification checks coordinating continuous SLA analytics, compliance registries, and custom cloud portal connections.",
                          standards: ["Employment record check", "Certified degrees check", "Regulatory watchlist audit"]
                        };
                    }
                  })();

                  return (
                    <div className="bg-black/40 border border-[#1f1f1f] rounded-md p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00d992]/5 rounded-bl-full pointer-events-none blur-lg" />
                      <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">{sectorData.title}</h4>
                      <p className="font-sans text-[11px] text-zinc-400 mt-2 leading-relaxed">{sectorData.brief}</p>
                      
                      <div className="mt-4 pt-3 border-t border-[#1f1f1f] space-y-2">
                        <p className="font-mono text-[9px] text-[#00d992] uppercase tracking-[1.5px] font-bold">VERIFICATION BENCHMARKS</p>
                        <div className="flex flex-col gap-1.5 mt-1">
                          {sectorData.standards.map((st, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] text-zinc-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00d992]" />
                              <span>{st}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>PORTAL SYSTEM // OK</span>
                <span className="w-2 h-2 rounded-full bg-[#00d992] animate-pulse" />
              </div>
            </div>

            {/* Right Panel: Live Portal Registry Filter Console */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-[#121212] border border-[#242424] rounded-md p-6">
              
              {/* Header Controls inside Registry Panel */}
              {(() => {
                const filteredClients = clientList.filter((client) => {
                  const matchesCategory = activeClientCat === "All" || client.category === activeClientCat;
                  const matchesSearch = client.name.toLowerCase().includes(clientSearchQuery.toLowerCase());
                  return matchesCategory && matchesSearch;
                });

                const itemsPerPage = 9;
                const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
                const validPage = Math.min(clientPage, Math.max(0, totalPages - 1));
                const paginatedClients = filteredClients.slice(validPage * itemsPerPage, (validPage + 1) * itemsPerPage);

                const getCategoryIcon = (category: string) => {
                  switch (category) {
                    case "Healthcare & Life Sciences":
                      return <Activity className="text-emerald-400 shrink-0" size={14} />;
                    case "Consulting & Technology":
                      return <Cpu className="text-cyan-400 shrink-0" size={14} />;
                    case "Finance & Corporate Services":
                      return <Coins className="text-amber-400 shrink-0" size={14} />;
                    case "Manufacturing & Industries":
                      return <Factory className="text-purple-400 shrink-0" size={14} />;
                    case "Education & Facility Operations":
                      return <GraduationCap className="text-indigo-400 shrink-0" size={14} />;
                    default:
                      return <Briefcase className="text-[#00d992] shrink-0" size={14} />;
                  }
                };

                return (
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1f1f1f]">
                      <div className="text-left">
                        <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wide">Enterprise Roster</h3>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                          <p className="text-[11px] text-zinc-500 font-mono leading-none">
                            {activeClientCat === "All" ? "SHOWING ALL CORPORATE NODES" : `VERTICAL: ${activeClientCat.toUpperCase()}`}
                          </p>
                          {activeClientCat === "All" && !clientSearchQuery && (
                            <div className="flex items-center gap-1.5 ml-0 sm:ml-2 border border-[#00d992]/20 bg-[#162721]/60 py-0.5 px-2 rounded font-mono text-[9px] text-[#00d992] select-none">
                              <span className={`w-1 h-3 rounded-sm bg-[#00d992] inline-block ${isAutoLooping ? "animate-pulse" : "opacity-40"}`} />
                              <span className="uppercase tracking-wider">Dynamic Loop</span>
                              <button
                                onClick={() => setIsAutoLooping(!isAutoLooping)}
                                className="p-0.5 ml-1 text-zinc-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
                                title={isAutoLooping ? "Pause Roster Loop" : "Play Roster Loop"}
                              >
                                {isAutoLooping ? <Pause size={8} className="fill-current" /> : <Play size={8} className="fill-current" />}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Header Pagination & Search ControlsGroup */}
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Sliding Page Arrows */}
                        {totalPages > 1 && (
                          <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded border border-[#1f1f1f]">
                            <button
                              onClick={() => setClientPage(prev => Math.max(0, prev - 1))}
                              disabled={validPage === 0}
                              className={`p-1 rounded transition-colors ${
                                validPage === 0 
                                  ? "text-zinc-650 cursor-not-allowed" 
                                  : "text-[#00d992] hover:bg-zinc-800 cursor-pointer"
                              }`}
                              title="Slide Left"
                            >
                              <ChevronLeft size={14} />
                            </button>
                            <span className="font-mono text-[9px] text-zinc-500 min-w-[50px] text-center uppercase tracking-wider select-none">
                              {validPage + 1} / {totalPages}
                            </span>
                            <button
                              onClick={() => setClientPage(prev => Math.min(totalPages - 1, prev + 1))}
                              disabled={validPage >= totalPages - 1}
                              className={`p-1 rounded transition-colors ${
                                validPage >= totalPages - 1 
                                  ? "text-zinc-650 cursor-not-allowed" 
                                  : "text-[#00d992] hover:bg-zinc-800 cursor-pointer"
                              }`}
                              title="Slide Right"
                            >
                              <ChevronRight size={14} />
                            </button>
                          </div>
                        )}

                        {/* Search Input Box */}
                        <div className="relative w-full sm:w-56">
                          <input
                            type="text"
                            placeholder="Search registers..."
                            value={clientSearchQuery}
                            onChange={(e) => {
                              setClientSearchQuery(e.target.value);
                              setClientPage(0);
                            }}
                            className="w-full bg-black/60 border border-[#262626] focus:border-[#00d992] focus:outline-none placeholder-zinc-600 text-xs text-white rounded pl-8 pr-3 py-1.5 font-sans transition-colors"
                          />
                          <div className="absolute top-2.5 left-2.5 text-zinc-650">
                            <Search className="w-3 h-3 text-zinc-500" />
                          </div>
                          {clientSearchQuery && (
                            <button 
                              onClick={() => {
                                setClientSearchQuery("");
                                setClientPage(0);
                              }}
                              className="absolute top-2 right-2 text-xs text-zinc-500 hover:text-white"
                            >
                              &times;
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Grid of Client Cards: Unique & Restructured */}
                    {paginatedClients.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        <AnimatePresence mode="popLayout">
                          {paginatedClients.map((client, idx) => {
                            // Compute row and column projection in 3-column layout
                            const row = Math.floor(idx / 3);
                            const col = idx % 3;
                            const diagonalIndex = row + col; // Diagonals run from 0 to 4
                            const staggerDelay = diagonalIndex * 150; // Stagger waves by 150ms per step

                            return (
                              <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                key={client.name}
                                className="bg-black/40 border border-[#1f1f1f] hover:border-[#00d992]/20 hover:shadow-[0_0_12px_rgba(0,217,146,0.01)] p-4 text-left flex flex-col justify-between group transition-all duration-300 relative overflow-hidden select-none"
                              >
                                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none text-zinc-800/0 group-hover:text-[#00d992]/5 transition-colors">
                                  <ShieldCheck className="w-full h-full" />
                                </div>

                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                                      {getCategoryIcon(client.category)}
                                    </div>
                                    <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">{client.category}</span>
                                  </div>
                                  <div className="h-10 flex items-start overflow-hidden mt-1">
                                    <CipherClientName name={client.name} delay={staggerDelay} />
                                  </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
                                  <span className="font-mono text-[8px] tracking-[1px] text-zinc-500 uppercase">
                                    SECURE COMPLIANT
                                  </span>
                                  <div className="flex gap-0.5">
                                    <span className="w-1 h-3 rounded-full bg-[#00d992]/30 group-hover:bg-[#00d992] transition-colors" />
                                    <span className="w-1 h-3 rounded-full bg-[#00d992]/30 group-hover:bg-[#00d992] transition-colors" />
                                    <span className="w-1 h-3 rounded-full bg-[#00d992]/30 group-hover:bg-[#00d992] transition-colors" />
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="py-20 text-center bg-black/20 border border-[#1f1f1f] rounded-md my-auto">
                        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                          No matching portals found
                        </p>
                        <p className="text-xs text-zinc-600 mt-1 max-w-sm mx-auto font-sans">
                          Try refining your search keyword or selecting a different industry channel vertical.
                        </p>
                        <button 
                          onClick={() => {
                            setActiveClientCat("All");
                            setClientSearchQuery("");
                            setClientPage(0);
                          }}
                          className="mt-6 px-4 py-1.5 font-mono text-[9px] border border-zinc-700 text-zinc-400 hover:border-[#00d992] hover:text-[#00d992] rounded transition-all uppercase font-semibold cursor-pointer"
                        >
                          Clear Filters
                        </button>
                      </div>
                    )}

                    {/* Registry Footer */}
                    <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-zinc-500 text-left">
                      <p>* Inspected system portals of registered corporate enterprises with verified secure integrations.</p>
                      <span className="shrink-0 font-bold text-[#00d992] bg-[#162721] border border-[#00d992]/20 py-0.5 px-2 rounded-sm uppercase">STABLE COMPLIANCE INTEGRITY RESOLVED</span>
                    </div>

                  </div>
                );
              })()}

            </div>

          </div>
        </div>
      </section>

      {/* CAREER MILESTONES & EXPERIENCE */}
      <section className="py-16 sm:py-24 border-b border-[#3d3a39] bg-[#101010]" id="experience-section">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="max-w-2xl text-center sm:text-left mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#00d992] tracking-[2.52px] font-mono block uppercase mb-1">
              CAREER JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-normal tracking-tight text-white leading-tight">
              Professional Journey &amp; Milestones
            </h2>
            <p className="text-xs sm:text-base text-[#bdbdbd] mt-3">
              Review my 3.9-year career progression at Verify Now, outlining direct advancements from operational roles to Business Lead of enterprise accounts.
            </p>
          </div>

          <InteractiveTimeline />

        </div>
      </section>

      {/* ACADEMIC & CERTIFICATIONS SECTION */}
      <section className="py-16 sm:py-24 border-b border-[#3d3a39] bg-[#0c0c0c]" id="education-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl text-center sm:text-left mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#00d992] tracking-[2.52px] font-mono block uppercase mb-1">
              ACADEMIC FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-normal tracking-tight text-[#f2f2f2] leading-tight">
              Education &amp; Credentials
            </h2>
            <p className="text-xs sm:text-sm text-[#bdbdbd] mt-3 max-w-3xl leading-relaxed">
              Explore my academic baseline in engineering paired with industrial certifications covering business development, strategic planning, and operational dashboards.
            </p>
          </div>

          <AcademicTimeline />
        </div>
      </section>

      {/* SECURE INQUIRY / CONTACT SECTION */}
      <section className="py-16 sm:py-24 bg-[#1a1a1a]/10 border-b border-[#3d3a39]" id="contact-section">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Header block spanning straight line */}
          <div className="text-left mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#00d992] tracking-[2.52px] font-mono block uppercase mb-1">
              SECURE CHANNELS
            </span>
            <h2 className="text-3xl sm:text-4xl text-white font-normal leading-tight">
              Let's Discuss Operational Quality
            </h2>
            <p className="text-sm text-[#bdbdbd] leading-relaxed mt-4 max-w-4xl">
              Looking to exchange insights on BGV configurations, SLA optimization, or team workflow designs? Connect directly to explore how we can elevate execution standards together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Column: My Professional Directory / Info */}
            <div className="flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-3.5 font-mono text-xs">
                
                {/* Email link */}
                <div className="bg-[#1a1a1a] border border-[#3d3a39] p-4 rounded-md hover:border-[#00d992]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#00d992]" />
                    <div>
                      <span className="block text-[9px] text-[#8b949e] uppercase">SECURE CORPORATE INBOX</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#f2f2f2] group-hover:text-[#00d992] transition-colors block mt-0.5 select-all">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-[#3d3a39] group-hover:text-[#00d992] group-hover:translate-x-1 transition-all" />
                </div>

                {/* Phone */}
                <div className="bg-[#1a1a1a] border border-[#3d3a39] p-4 rounded-md hover:border-[#00d992]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#00d992]" />
                    <div>
                      <span className="block text-[9px] text-[#8b949e] uppercase">BUSINESS TELEPHONY</span>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-[#f2f2f2] group-hover:text-[#00d992] transition-colors block mt-0.5 select-all">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-[#3d3a39] group-hover:text-[#00d992] group-hover:translate-x-1 transition-all" />
                </div>

                {/* LinkedIn */}
                <div className="bg-[#1a1a1a] border border-[#3d3a39] p-4 rounded-md hover:border-[#00d992]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Linkedin size={16} className="text-[#00d992]" />
                    <div>
                      <span className="block text-[9px] text-[#8b949e] uppercase">PROFESSIONAL DIRECTORY</span>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#f2f2f2] group-hover:text-[#00d992] transition-colors block mt-0.5">
                        linkedin.com/in/subham-mallick-aa9b0a88
                      </a>
                    </div>
                  </div>
                  <ExternalLink size={13} className="text-[#3d3a39] group-hover:text-[#00d992]" />
                </div>

                {/* GitHub */}
                <div className="bg-[#1a1a1a] border border-[#3d3a39] p-4 rounded-md hover:border-[#00d992]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Github size={16} className="text-[#00d992]" />
                    <div>
                      <span className="block text-[9px] text-[#8b949e] uppercase">Open Source Repository</span>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#f2f2f2] group-hover:text-[#00d992] transition-colors block mt-0.5">
                        github.com/SubhMalllick
                      </a>
                    </div>
                  </div>
                  <ExternalLink size={13} className="text-[#3d3a39] group-hover:text-[#00d992]" />
                </div>

              </div>

              {/* Print Resume Block */}
              <div className="border border-dashed border-[#3d3a39] p-5 rounded-md bg-[#101010]">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-[#1a1a1a] border border-[#3d3a39] text-[#8b949e]">
                    <Award size={20} />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-white">Download Offline Resume</h5>
                    <p className="font-sans text-[11px] text-[#bdbdbd] mt-1">Prefer printing a traditional resume layout over responsive web timelines?</p>
                    <button 
                      onClick={() => window.print()}
                      className="mt-3 inline-flex items-center gap-1 text-mono text-[10px] text-[#00d992] font-semibold hover:text-[#2fd6a1] transition-colors cursor-pointer"
                    >
                      print-resume.sh --format=pdf <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Consultation Form Block: 7 Columns */}
            <div className="bg-[#1a1a1a] border border-[#3d3a39] rounded-md overflow-hidden relative">
              <div className="bg-[#101010] border-b border-[#3d3a39] px-6 py-4 flex items-center justify-between">
                <span className="font-semibold text-xs text-[#bdbdbd] uppercase tracking-wide">CONNECT WITH SUBHAM</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d992] animate-pulse"></span>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="consultation-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleConsultSubmit}
                      className="flex flex-col gap-4 font-sans text-sm text-[#bdbdbd] text-left"
                      id="consultation-input-form"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-[#00d992] font-semibold uppercase">Your Name *</label>
                          <input 
                            type="text"
                            required
                            placeholder="e.g. Jane Doe"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="bg-[#101010] border border-[#3d3a39] focus:border-[#00d992] focus:outline-none rounded-[6px] px-4 py-3 text-white placeholder-[#8b949e] font-sans text-xs transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-[#00d992] font-semibold uppercase">Your Email *</label>
                          <input 
                            type="email"
                            required
                            placeholder="e.g. jane.doe@example.com"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            className="bg-[#101010] border border-[#3d3a39] focus:border-[#00d992] focus:outline-none rounded-[6px] px-4 py-3 text-white placeholder-[#8b949e] font-sans text-xs transition-colors"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[10px] text-[#00d992] font-semibold uppercase">Organization / Company Name</label>
                        <input 
                          type="text"
                          placeholder="e.g. Enterprise Partners Ltd."
                          value={formCompany}
                          onChange={(e) => setFormCompany(e.target.value)}
                          className="bg-[#101010] border border-[#3d3a39] focus:border-[#00d992] focus:outline-none rounded-[6px] px-4 py-3 text-white placeholder-[#8b949e] font-sans text-xs transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[10px] text-[#00d992] font-semibold uppercase">Your Message *</label>
                        <textarea 
                          required
                          rows={4}
                          placeholder="Feel free to ask about BGV workflow designs, team scaling, compliance auditing, or coordinate a conversation."
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          className="bg-[#101010] border border-[#3d3a39] focus:border-[#00d992] focus:outline-none rounded-[6px] px-4 py-3 text-white placeholder-[#8b949e] font-sans text-xs transition-colors resize-none leading-relaxed"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="py-3 px-5 bg-[#00d992] hover:bg-[#2fd6a1] text-[#101010] rounded-[6px] font-sans text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,217,146,0.15)] flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                        id="submit-consult-button"
                      >
                        <span>Send Message</span>
                        <ArrowRight size={13} className="stroke-[3px]" />
                      </button>

                    </motion.form>
                  ) : (
                    <motion.div
                      key="consult-success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col gap-5 text-left"
                    >
                      <div className="border border-[#00d992]/30 bg-[#00d992]/5 p-5 rounded-md text-zinc-300 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-[#00d992] font-semibold text-xs font-mono uppercase tracking-wider">
                          <CheckCircle2 size={14} />
                          <span>Mail Client Prepared</span>
                        </div>
                        <p className="text-xs leading-relaxed text-[#bdbdbd]">
                          We have opened your system's default email client to send the details directly to <span className="text-white font-semibold font-mono underline select-all">{PERSONAL_INFO.email}</span>.
                        </p>
                        <p className="text-xs leading-relaxed text-[#bdbdbd]">
                          If your client did not launch automatically, click the action button below to trigger it again, or reach out to Subham directly at his email address.
                        </p>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Consultation Inquiry from ${formName}`)}&body=${encodeURIComponent(`Hello Subham,\n\nYou have received a new consultation inquiry through your portfolio website:\n\nName: ${formName}\nEmail: ${formEmail}\nOrganization: ${formCompany ? formCompany : "Personal Interest / Direct Partnership"}\n\nMessage:\n${formMessage}\n\nBest regards,\n${formName}`)}`}
                          className="self-start text-[11px] font-mono font-bold text-[#00d992] hover:text-[#2fd6a1] underline transition-colors pt-2 flex items-center gap-1.5"
                        >
                          <span>Retry Opening Mail Client</span>
                          <ArrowRight size={11} className="stroke-[3px]" />
                        </a>
                      </div>

                      <button
                        onClick={resetConsultForm}
                        className="self-start py-2 px-3.5 bg-transparent hover:bg-[#1a1a1a] text-[#8b949e] hover:text-[#00d992] border border-[#3d3a39] hover:border-[#00d992] rounded-[6px] font-mono text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                        id="reset-form-btn"
                      >
                        <RotateCcw size={11} />
                        <span>Submit Another Inquiry</span>
                      </button>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101010] py-16 px-6 border-t border-[#3d3a39] font-mono text-xs text-[#8b949e]" id="footer-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-[#1a1a1a] border border-[#3d3a39] flex items-center justify-center">
                <Sparkles size={12} className="text-[#00d992]" />
              </div>
              <span className="text-white font-sans font-bold text-sm tracking-tight">{PERSONAL_INFO.name}</span>
            </div>
            <p className="font-sans text-[11px] leading-relaxed max-w-sm">
              Business Lead focused on building strategic partnerships, coordinating background verification solutions, and delivering scalable processes that enable secure and efficient hiring.
            </p>
            <p className="text-[10px]">
              &copy; {new Date().getFullYear()} Subham Mallick. All Rights Reserved.
            </p>
          </div>

          <div>
            <h5 className="text-[10px] text-white tracking-[2px] font-bold uppercase mb-4 font-sans">COMPLIANCE SPEC</h5>
            <ul className="space-y-2.5 text-[11px]">
              <li className="flex justify-between"><span>ACCURACY RATIO:</span> <span className="text-[#00d992] font-semibold">99.98%</span></li>
              <li className="flex justify-between"><span>VERIFY NOW TENURE:</span> <span className="text-white">3.9 years</span></li>
              <li className="flex justify-between"><span>OPERATIONS HUB:</span> <span className="text-white">IST UTC+5:30</span></li>
              <li className="flex justify-between"><span>CORE ALIGNMENT:</span> <span className="text-white">Business &amp; Sales</span></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] text-white tracking-[2px] font-bold uppercase mb-4 font-sans">RESOURCES &amp; SECTOR</h5>
            <ul className="space-y-2.5 text-[11px]">
              <li><a href="#about-section" className="hover:text-white transition-colors">Hero Overview</a></li>
              <li><a href="#expertise-section" className="hover:text-white transition-colors">Core Expertises</a></li>
              <li><a href="#clients-section" className="hover:text-white transition-colors">Corporate Clients</a></li>
              <li><a href="#experience-section" className="hover:text-white transition-colors">Career Timeline</a></li>
              <li><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white text-[#00d992] flex items-center gap-1 underline">LinkedIn Sync <ExternalLink size={10} /></a></li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}
