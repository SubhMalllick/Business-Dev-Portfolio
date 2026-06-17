import { motion } from "motion/react";
import { EXPERIENCE_HISTORY } from "../data";
import { Calendar, MapPin, Briefcase, Award, Sparkles, TrendingUp, CheckSquare, Shield, Layers, BarChart3 } from "lucide-react";

export default function InteractiveTimeline() {
  // Map roles directly from data to clear variables for the bento layout
  const bizLead = EXPERIENCE_HISTORY.find(r => r.id === "business-lead") || EXPERIENCE_HISTORY[0];
  const asstLead = EXPERIENCE_HISTORY.find(r => r.id === "assistant-team-lead") || EXPERIENCE_HISTORY[1];
  const analyst = EXPERIENCE_HISTORY.find(r => r.id === "business-analyst") || EXPERIENCE_HISTORY[2];
  const opsExec = EXPERIENCE_HISTORY.find(r => r.id === "operations-executive") || EXPERIENCE_HISTORY[3];

  return (
    <div className="w-full mt-6" id="career-journey-bento-container">
      {/* Bento Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        
        {/* CARD 1: Business Lead (Span 4 on desktop, highly detailed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4, borderColor: "#00d992" }}
          className="lg:col-span-4 bg-[#141414] border border-[#3d3a39] hover:border-[#00d992]/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,217,146,0.04)] relative overflow-hidden group"
          id="career-bento-lead"
        >
          {/* Ambient Glow Accent on Hover */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d992]/[0.02] rounded-full blur-2xl group-hover:bg-[#00d992]/[0.05] transition-colors duration-500"></div>

          <div>
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#3d3a39]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#00d992]/10 border border-[#00d992]/25 flex items-center justify-center text-[#00d992]">
                  <Sparkles className="animate-pulse" size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#00d992] bg-[#00d992]/5 border border-[#00d992]/20 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                    CURRENT PRIME INITIATIVE
                  </span>
                  <h3 className="text-lg font-sans font-bold text-white mt-1 group-hover:text-[#00d992] transition-colors">
                    {bizLead.title}
                  </h3>
                </div>
              </div>
              <div className="text-right font-mono text-[10px] text-[#8b949e]">
                <div className="flex items-center justify-end gap-1.5 font-medium">
                  <Calendar size={12} className="text-[#00d992]" />
                  <span>{bizLead.period}</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 mt-1 font-medium">
                  <MapPin size={12} className="text-zinc-650" />
                  <span>{bizLead.location} • {bizLead.company}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-mono text-xs text-[#00d992] font-semibold tracking-wider">
                EXECUTIVE ACCOUNT OVERVIEW // VERIFY NOW
              </p>
              <p className="font-sans text-xs sm:text-[13px] text-[#bdbdbd] mt-2 leading-relaxed">
                {bizLead.summary}
              </p>
            </div>

            {/* Highlights List */}
            <div className="mt-5 space-y-3">
              <span className="font-mono text-[9px] text-[#8b949e] uppercase tracking-widest block font-bold">
                KEY STRATEGIC OUTCOMES
              </span>
              <ul className="space-y-2.5">
                {bizLead.responsibilities.slice(0, 3).map((res, index) => (
                  <li key={index} className="flex gap-3 items-start text-xs text-[#bdbdbd]">
                    <div className="mt-0.5 shrink-0 rounded text-[#00d992]">
                      <CheckSquare size={13} className="stroke-[2.5px]" />
                    </div>
                    <span className="font-sans text-[12.5px] leading-relaxed">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#3d3a39]/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {["Business Development", "Enterprise Sales", "Strategic Expansion"].map((skill) => (
                <span key={skill} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#101010] border border-[#3d3a39]/80 text-[#bdbdbd]">
                  #{skill.toUpperCase()}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              {bizLead.metrics.slice(0, 2).map((m, i) => (
                <div key={i} className="bg-[#101010] border border-[#3d3a39] px-3 py-1 rounded flex items-center gap-1.5">
                  <span className="font-sans text-[8px] text-[#8b949e] uppercase font-bold">{m.label}:</span>
                  <span className="font-mono text-xs font-bold text-white group-hover:text-[#00d992] transition-colors">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Assistant Team Leader (Span 2 on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4, borderColor: "#00d992" }}
          className="lg:col-span-2 bg-[#141414] border border-[#3d3a39] hover:border-[#00d992]/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,217,146,0.04)] relative group"
          id="career-bento-asst-lead"
        >
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#3d3a39]/60">
              <div className="w-9 h-9 rounded bg-[#00d992]/5 border border-[#00d992]/20 flex items-center justify-center text-[#00d992]">
                <Award size={18} />
              </div>
              <span className="font-mono text-[9px] text-[#8b949e]">{asstLead.period}</span>
            </div>

            <div className="mt-4">
              <span className="text-[8px] font-mono text-[#00d992] bg-[#00d992]/5 border border-[#00d992]/20 px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold">
                SLA MANAGEMENT
              </span>
              <h3 className="text-base font-sans font-bold text-white mt-1 group-hover:text-[#00d992] transition-colors tracking-tight">
                {asstLead.title}
              </h3>
              <p className="font-mono text-[9px] text-[#8b949e] mt-1 uppercase">
                {asstLead.company} • {asstLead.location}
              </p>

              <p className="mt-3 text-xs font-sans text-[#bdbdbd] leading-relaxed">
                {asstLead.summary}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#3d3a39]/40 flex items-center justify-between">
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#101010] border border-[#3d3a39] text-[#bdbdbd]">
              {asstLead.metrics[0].value} SLA
            </span>
            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider font-bold">OPERATIONS COMMAND</span>
          </div>
        </motion.div>

        {/* CARD 3: Business Analyst (Span 2 on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -4, borderColor: "#00d992" }}
          className="lg:col-span-2 bg-[#141414] border border-[#3d3a39] hover:border-[#00d992]/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,217,146,0.04)] group"
          id="career-bento-analyst"
        >
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#3d3a39]/60">
              <div className="w-9 h-9 rounded bg-[#00d992]/5 border border-[#00d992]/20 flex items-center justify-center text-[#00d992]">
                <BarChart3 size={18} />
              </div>
              <span className="font-mono text-[9px] text-[#8b949e]">{analyst.period}</span>
            </div>

            <div className="mt-4">
              <span className="text-[8px] font-mono text-[#00d992] bg-[#00d992]/5 border border-[#00d992]/20 px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold">
                ANALYTICAL METRICS
              </span>
              <h3 className="text-base font-sans font-bold text-white mt-1 group-hover:text-[#00d992] transition-colors tracking-tight">
                {analyst.title}
              </h3>
              <p className="font-mono text-[9px] text-[#8b949e] mt-1 uppercase">
                {analyst.company} • {analyst.location}
              </p>

              <p className="mt-3 text-xs font-sans text-[#bdbdbd] leading-relaxed">
                {analyst.summary}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#3d3a39]/40 flex items-center justify-between">
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#101010] border border-[#3d3a39] text-[#bdbdbd]">
              {analyst.metrics[2].value} Quality
            </span>
            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider font-bold">BIZ INTEL</span>
          </div>
        </motion.div>

        {/* CARD 4: Operations Executive (Span 4 on desktop, highly detailed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -4, borderColor: "#00d992" }}
          className="lg:col-span-4 bg-[#141414] border border-[#3d3a39] hover:border-[#00d992]/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,217,146,0.04)] relative overflow-hidden group"
          id="career-bento-ops"
        >
          {/* Subtle background highlight */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#00d992]/[0.01] rounded-full blur-xl group-hover:bg-[#00d992]/[0.03] transition-colors duration-500"></div>

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#3d3a39]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#00d992]/10 border border-[#00d992]/20 flex items-center justify-center text-[#00d992]">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#00d992] bg-[#00d992]/5 border border-[#00d992]/20 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                    REGULATORY COMPLIANCE FOUNDATION
                  </span>
                  <h3 className="text-lg font-sans font-bold text-white mt-1 group-hover:text-[#00d992] transition-colors">
                    {opsExec.title}
                  </h3>
                </div>
              </div>
              <span className="font-mono text-[9px] text-[#8b949e] border border-[#3d3a39] px-2.5 py-1 rounded bg-[#101010]">
                {opsExec.period}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {/* Core focus */}
              <div>
                <span className="font-mono text-[8px] text-[#00d992] tracking-wider block font-bold mb-1">
                  HISTORIC FOCUS // SCREENING COGNIZANCE
                </span>
                <p className="font-sans text-xs text-[#bdbdbd] leading-relaxed">
                  Managed and executed candidate safety audits across comprehensive corporate accounts. Verified education certificates, legal databases, and previous employment files under absolute transparency.
                </p>
              </div>

              {/* Achievements */}
              <div className="p-4 bg-[#101010] border border-[#3d3a39]/80 rounded hover:border-[#00d992]/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={14} className="text-[#00d992]" />
                  <span className="font-mono text-[9px] text-[#00d992] font-semibold">AUDITING CAPACITY</span>
                </div>
                <ul className="space-y-1 text-[11px] font-sans text-zinc-300">
                  <li className="flex items-start gap-1">
                    <span className="text-[#00d992] shrink-0">•</span>
                    <span>Standardized file formats to suppress verification processing delays.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-[#00d992] shrink-0">•</span>
                    <span>Spearheaded extensive candidate document analysis.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#3d3a39]/40 flex items-center justify-between text-[10px] text-[#8b949e]">
            <span className="font-mono text-[9px]">COMPLIANCE MATRIX INDEX VERIFIED</span>
            <div className="flex gap-2">
              <span className="bg-[#101010] outline-none border border-[#3d3a39] hover:border-[#00d992] px-2 py-1 rounded font-mono text-[9px] font-semibold text-white/90">
                AUDITED: {opsExec.metrics[0].value}
              </span>
              <span className="bg-[#101010] outline-none border border-[#3d3a39] hover:border-[#00d992] px-2 py-1 rounded font-mono text-[9px] font-semibold text-[#00d992]">
                SPEEDUP: {opsExec.metrics[1].value}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
