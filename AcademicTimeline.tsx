import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, CheckSquare, X, Shield, Sparkles } from "lucide-react";

interface Milestone {
  id: string;
  type: "BTech" | "Diploma" | "School" | "Certifications";
  title: string;
  institution: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  skillsCovered: string[];
}

const ACADEMIC_MILESTONES: Milestone[] = [
  {
    id: "btech",
    type: "BTech",
    title: "Bachelor of Technology (B.Tech)",
    institution: "Sophitorium Engineering College",
    location: "Bhubaneswar, Odisha",
    period: "2017 - 2020",
    summary: "Graduated with focused academic coordinates mapping analytical metrics, quantitative estimation algorithms, site management mechanics, and SLA operational coordination.",
    highlights: [
      "Graduated Civil Engineering with a cumulative 7.7 GPA, demonstrating analytical and quantitative accuracy.",
      "Acquired core project structure disciplines integrating material stress checks, pricing forecast spreadsheets, and compliance audits.",
      "Spearheaded field team projects, boosting operational alignment across multi-disciplinary environments."
    ],
    metrics: [
      { label: "Graduation Metric", value: "7.7 GPA" },
      { label: "Specialization", value: "Civil Engineering" },
      { label: "Location", value: "Bhubaneswar" }
    ],
    skillsCovered: ["Civil Engineering", "Project Architecture", "SLA Workflow Metrics"]
  },
  {
    id: "diploma",
    type: "Diploma",
    title: "Diploma in Engineering",
    institution: "Citi Institute of Technical Education",
    location: "Rourkela, Odisha",
    period: "2011 - 2015",
    summary: "Nurtured robust foundational engineering systems, detailed blueprint audits, field calculations, and onsite resource planning.",
    highlights: [
      "Studied Civil Engineering with a cumulative 7.0 GPA baseline.",
      "Acquired field survey math, topographical coordinates reading, and cost estimation protocols.",
      "Participated in field inspections, assuring compliance standards on model layouts."
    ],
    metrics: [
      { label: "Performance", value: "7.0 GPA" },
      { label: "Studies Depth", value: "Civil Engineering" },
      { label: "Location Node", value: "Rourkela" }
    ],
    skillsCovered: ["Field Surveying", "Drawing Interpretation", "Estimation & Auditing"]
  },
  {
    id: "school",
    type: "School",
    title: "10th Highschool Board",
    institution: "Deepika E.M. School",
    location: "Rourkela, Odisha",
    period: "2011",
    summary: "Established initial cognitive milestones under systematic English medium board guidelines, refining vocabulary, math systems, and communication pathways.",
    highlights: [
      "Completed secondary board examination with 5.6 GPA under CBCE/State specifications.",
      "Layed the vital structural English fluency base supporting clean professional collaborations.",
      "Secured analytical scoring milestones inside advanced secondary mathematics streams."
    ],
    metrics: [
      { label: "Academic Record", value: "5.6 GPA" },
      { label: "Instruction Medium", value: "English Medium" },
      { label: "Concluded Year", value: "2011" }
    ],
    skillsCovered: ["Mathematics", "Logical Reasoning", "English Communication"]
  },
  {
    id: "certifications",
    type: "Certifications",
    title: "Accredited Industry Certifications",
    institution: "Strategic & Technical Credentials",
    location: "Professional Registries",
    period: "Active Status",
    summary: "Earned critical industry business enablement credentials mapping dynamic client acquisitions, pipeline projections, and high-performance reporting dashboards.",
    highlights: [
      "Business Development: Strategic Planning (Revenue funnels, corporate sourcing, and partnership designs).",
      "Excel: Dashboards for Beginners (Automating formulas, rendering real-time metrics trackers, and HR reports)."
    ],
    metrics: [
      { label: "Strategic Planning", value: "Verified Credential" },
      { label: "Business Development", value: "BD Sourcing" },
      { label: "Excel Dashboard", value: "Advanced Metrics" }
    ],
    skillsCovered: ["Strategic Planning", "Business Development", "Excel Dashboards", "Data Reporting"]
  }
];

export default function AcademicTimeline() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);

  const selectedMilestone = ACADEMIC_MILESTONES.find((item) => item.id === selectedMilestoneId);

  return (
    <div className="w-full py-8 mt-4 relative" id="academic-spatial-container">
      {/* Dynamic Sub-headings */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#3d3a39]/30">
        <span className="font-mono text-[9px] text-[#00d992] tracking-[2.52px] font-semibold block uppercase">
          RADIAL TIMELINE // SPATIAL ACADEMIC MAP
        </span>
        <span className="font-mono text-[9px] text-zinc-500">
          CHOOSE AN ORBIT STATION TO EXPAND DETAILED ACADEMIC LIGHTBOX
        </span>
      </div>

      {/* Spatial Circular Track Map Area */}
      <div className="w-full bg-[#111111]/80 border border-[#3d3a39]/40 rounded-xl p-6 md:p-12 relative flex flex-col items-center justify-center overflow-hidden min-h-[440px] md:min-h-[520px]">
        {/* Absolute Glowing Ambient Grid */}
        <div className="absolute inset-0 bg-radial-at-c from-[#00d992]/[0.02] via-transparent to-transparent pointer-events-none"></div>

        {/* Dynamic Connected Track Map Wrapper */}
        <div className="relative w-full max-w-[500px] h-[340px] md:h-[400px] flex items-center justify-center">
          
          {/* SVG Orbital Track Vectors */}
          <svg className="absolute w-full h-full pointer-events-none stroke-current text-zinc-800" viewBox="0 0 500 400" fill="none">
            {/* Main Outer Orbit Ellipse */}
            <ellipse cx="250" cy="200" rx="180" ry="140" strokeDasharray="6 6" className="text-[#3d3a39]/60" strokeWidth="1" />
            
            {/* Inner Ring */}
            <circle cx="250" cy="200" r="70" className="text-[#3d3a39]/40" strokeWidth="1" strokeDasharray="3 3"/>
            
            {/* Connected Laser Lines from Center */}
            <line x1="250" y1="200" x2="100" y2="100" className="text-[#3d3a39]/30" strokeWidth="1" />
            <line x1="250" y1="200" x2="400" y2="100" className="text-[#3d3a39]/30" strokeWidth="1" />
            <line x1="250" y1="200" x2="100" y2="300" className="text-[#3d3a39]/30" strokeWidth="1" />
            <line x1="250" y1="200" x2="400" y2="300" className="text-[#3d3a39]/30" strokeWidth="1" />
          </svg>

          {/* Core Central Hub Sphere */}
          <div className="absolute w-28 h-28 rounded-full bg-[#161616] border border-[#3d3a39] flex flex-col justify-center items-center text-center p-3 select-none shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 transition-all duration-300">
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-[#00d992]/20 blur-sm animate-pulse"></span>
              <GraduationCap size={20} className="text-[#00d992] relative" />
            </div>
            <p className="font-mono text-[8px] text-[#00d992] font-semibold tracking-widest mt-2">
              ACADEMIC
            </p>
            <p className="font-sans text-[9px] font-bold text-[#f2f2f2] mt-0.5 tracking-tight uppercase">
              FOUNDATIONS
            </p>
          </div>

          {/* SPATIAL ACADEMIC NODES */}

          {/* Node 1: B.Tech (Bottom Left) */}
          <motion.button
            onClick={() => setSelectedMilestoneId("btech")}
            className="absolute left-[30px] md:left-[50px] bottom-[30px] md:bottom-[40px] flex gap-3 items-center group bg-[#161616] hover:bg-[#1f1f1f] p-3 rounded-lg border border-[#3d3a39] hover:border-[#00d992] text-left transition-all max-w-[170px] md:max-w-[200px] shadow-lg cursor-pointer z-10"
            whileHover={{ scale: 1.04, y: -2 }}
            id="academic-node-btech"
          >
            <div className="w-8 h-8 rounded bg-zinc-800/80 border border-zinc-700 text-zinc-400 group-hover:bg-[#00d992]/10 group-hover:border-[#00d992]/40 group-hover:text-[#00d992] flex items-center justify-center shrink-0 transition-all">
              <GraduationCap size={14} />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[7px] text-[#8b949e]">2017 - 2020</p>
              <h4 className="font-sans text-xs font-bold text-[#bdbdbd] group-hover:text-white truncate">
                B.Tech Civil Eng.
              </h4>
              <p className="font-mono text-[8px] text-[#00d992] font-medium tracking-tight">
                VIEW ACADEMIC &rarr;
              </p>
            </div>
            {/* Ambient Pulse */}
            <div className="absolute -top-3 -right-3 w-2 h-2 rounded-full bg-[#00d992] animate-ping opacity-40"></div>
            <div className="absolute -top-3 -right-3 w-2 h-2 rounded-full bg-[#00d992] border border-black"></div>
          </motion.button>

          {/* Node 2: Diploma (Top Left) */}
          <motion.button
            onClick={() => setSelectedMilestoneId("diploma")}
            className="absolute left-[30px] md:left-[50px] top-[40px] md:top-[50px] flex gap-3 items-center group bg-[#161616] hover:bg-[#1f1f1f] p-3 rounded-lg border border-[#3d3a39] hover:border-[#00d992] text-left transition-all max-w-[170px] md:max-w-[200px] shadow-lg cursor-pointer z-10"
            whileHover={{ scale: 1.04, y: -2 }}
            id="academic-node-diploma"
          >
            <div className="w-8 h-8 rounded bg-zinc-800/80 border border-zinc-700 text-zinc-400 group-hover:bg-[#00d992]/10 group-hover:border-[#00d992]/40 group-hover:text-[#00d992] flex items-center justify-center shrink-0 transition-all">
              <GraduationCap size={14} />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[7px] text-[#8b949e]">2011 - 2015</p>
              <h4 className="font-sans text-xs font-bold text-[#bdbdbd] group-hover:text-white truncate">
                Diploma Civil Eng.
              </h4>
              <p className="font-mono text-[8px] text-[#00d992] font-medium tracking-tight">
                VIEW ACADEMIC &rarr;
              </p>
            </div>
            {/* Ambient Pulse */}
            <div className="absolute -bottom-3 -right-3 w-2 h-2 rounded-full bg-[#00d992] animate-ping opacity-40"></div>
            <div className="absolute -bottom-3 -right-3 w-2 h-2 rounded-full bg-[#00d992] border border-black"></div>
          </motion.button>

          {/* Node 3: 10th Highschool (Top Right) */}
          <motion.button
            onClick={() => setSelectedMilestoneId("school")}
            className="absolute right-[30px] md:right-[50px] top-[40px] md:top-[50px] flex gap-3 items-center group bg-[#161616] hover:bg-[#1f1f1f] p-3 rounded-lg border border-[#3d3a39] hover:border-[#00d992] text-left transition-all max-w-[170px] md:max-w-[200px] shadow-lg cursor-pointer z-10"
            whileHover={{ scale: 1.04, y: -2 }}
            id="academic-node-school"
          >
            <div className="w-8 h-8 rounded bg-zinc-800/80 border border-zinc-700 text-zinc-400 group-hover:bg-[#00d992]/10 group-hover:border-[#00d992]/40 group-hover:text-[#00d992] flex items-center justify-center shrink-0 transition-all">
              <GraduationCap size={14} />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[7px] text-[#8b949e]">BOARD 2011</p>
              <h4 className="font-sans text-xs font-bold text-[#bdbdbd] group-hover:text-white truncate">
                10th Highschool
              </h4>
              <p className="font-mono text-[8px] text-[#00d992] font-medium tracking-tight">
                VIEW ACADEMIC &rarr;
              </p>
            </div>
            {/* Ambient Pulse */}
            <div className="absolute -bottom-3 -left-3 w-2 h-2 rounded-full bg-[#00d992] animate-ping opacity-40"></div>
            <div className="absolute -bottom-3 -left-3 w-2 h-2 rounded-full bg-[#00d992] border border-black"></div>
          </motion.button>

          {/* Node 4: Certifications (Bottom Right - Micro Credentials) */}
          <motion.button
            onClick={() => setSelectedMilestoneId("certifications")}
            className="absolute right-[30px] md:right-[50px] bottom-[30px] md:bottom-[40px] flex gap-3 items-center group bg-[#161616] hover:bg-[#1f1f1f] p-3 rounded-lg border border-[#00d992] hover:border-[#00d992] text-left transition-all max-w-[170px] md:max-w-[200px] shadow-lg cursor-pointer z-10"
            whileHover={{ scale: 1.04, y: -2 }}
            id="academic-node-certs"
          >
            <div className="w-8 h-8 rounded bg-[#00d992]/15 border border-[#00d992]/40 text-[#00d992] group-hover:bg-[#00d992] group-hover:text-black flex items-center justify-center shrink-0 transition-all">
              <Award size={14} className="animate-pulse" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[7px] text-[#00d992] font-bold">PROFESSIONAL</p>
              <h4 className="font-sans text-xs font-bold text-white group-hover:text-white truncate">
                Certifications
              </h4>
              <p className="font-mono text-[8.5px] text-[#00d992] font-semibold tracking-tight">
                VIEW PATHS &rarr;
              </p>
            </div>
            {/* Ambient Pulse */}
            <div className="absolute -top-3 -left-3 w-3 h-3 rounded-full bg-[#00d992] animate-ping"></div>
            <div className="absolute -top-3 -left-3 w-3 h-3 rounded-full bg-[#00d992] border border-black"></div>
          </motion.button>

        </div>

        {/* Dynamic Mobile Prompt */}
        <p className="font-mono text-[10px] text-zinc-500 text-center tracking-wide max-w-sm border-t border-[#3d3a39]/40 pt-4 mt-2">
          Note: Explore Subham's verified academic baseline by electing any track node to pop up the lightbox profile.
        </p>
      </div>

      {/* LIGHTBOX LAYOUT MODAL - POPS OUT DIRECTLY IN THE CENTER OF SCREEN */}
      <AnimatePresence>
        {selectedMilestoneId && selectedMilestone && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Dark Backdrop Blur Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMilestoneId(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              id="academic-lightbox-backdrop"
            />

            {/* Content Dialog - Pops OUT from center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              className="w-full max-w-xl bg-[#121212] border border-[#3d3a39] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.85)] relative max-h-[90vh] overflow-y-auto scrollbar-none z-10"
              id="academic-detail-lightbox"
            >
              {/* Close button inside lightbox top right */}
              <button
                onClick={() => setSelectedMilestoneId(null)}
                className="absolute top-4 right-4 p-1 rounded-sm border border-[#3d3a39] hover:border-[#00d992] text-zinc-400 hover:text-white bg-[#1a1a1a] transition-all cursor-pointer"
                title="Close Lightbox"
                id="close-lightbox-btn"
              >
                <X size={15} className="stroke-[2.5px]" />
              </button>

              {/* Main Dialog Contents */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#00d992] bg-[#00d992]/10 border border-[#00d992]/30 px-2.5 py-1 rounded-sm">
                    {selectedMilestone.type.toUpperCase()} // STRATEGIC_BASELINE
                  </span>
                </div>
                
                <h3 className="font-sans text-2xl font-bold text-white mt-3 tracking-tight">
                  {selectedMilestone.title}
                </h3>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-[#8b949e] font-mono border-b border-[#3d3a39]/60 pb-4">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar size={13} className="text-[#00d992]" /> {selectedMilestone.period}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin size={13} className="text-zinc-650" /> {selectedMilestone.location}
                  </span>
                </div>

                {/* Summary block */}
                <div className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
                  INSTITUTION HUB: {selectedMilestone.institution}
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-[#bdbdbd] leading-relaxed mt-2 p-3 bg-[#161616] border border-[#3d3a39]/30 rounded italic">
                  "{selectedMilestone.summary}"
                </p>

                {/* Highlights */}
                <div className="space-y-3 mt-5">
                  <span className="font-mono text-[9px] text-[#00d992] tracking-[2.02px] font-bold block uppercase">
                    PROVEN HIGHLIGHTS &amp; OUTCOMES:
                  </span>
                  <ul className="space-y-3">
                    {selectedMilestone.highlights.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs text-[#bdbdbd]">
                        <div className="mt-0.5 shrink-0 rounded text-[#00d992]">
                          <CheckSquare size={13} className="stroke-[2.5px]" />
                        </div>
                        <span className="font-sans text-[12.5px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology/Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {selectedMilestone.skillsCovered.map((skill) => (
                    <span key={skill} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#101010] border border-[#3d3a39] text-[#bdbdbd]">
                      #{skill.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Fixed Parameters */}
              <div className="mt-6 pt-5 border-t border-[#3d3a39]/60">
                <span className="font-mono text-[9px] text-[#8b949e] uppercase block tracking-wider mb-2 font-semibold">
                  AUDITED MILESTONE METRICS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedMilestone.metrics.map((metric, i) => (
                    <div key={i} className="border border-[#3d3a39]/60 bg-[#101010] p-3 rounded text-center">
                      <p className="font-sans text-[8px] font-bold text-[#8b949e] uppercase tracking-wider">
                        {metric.label}
                      </p>
                      <p className="font-mono text-[12px] font-bold text-[#00d992] mt-1 truncate">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
