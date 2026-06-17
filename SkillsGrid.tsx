import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { Shield } from "lucide-react";

export default function SkillsGrid() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("bgv-architecture");

  return (
    <div className="w-full flex flex-col gap-6" id="skills-grid-wrapper">
      {/* Category Toggle Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-[#1f1f1f] pb-5">
        {SKILL_CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-5 py-2.5 rounded-[6px] border font-sans text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#00d992] border-[#00d992] text-black shadow-[0_0_15px_rgba(0,217,146,0.15)]"
                  : "bg-[#121212]/50 border-[#262626] text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
              id={`skill-cat-btn-${cat.id}`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Selected Category Layout: Left Hero Card and Right 2x2 Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mt-2">
        
        {/* Left Side: Watermarked Info Card */}
        <div className="lg:col-span-4 bg-[#121212] border border-[#242424] rounded-[8px] p-8 flex flex-col justify-between relative overflow-hidden min-h-[290px] group transition-all duration-300 hover:border-[#3d3a39]">
          
          {/* Faint watermark in background */}
          <div className="absolute -bottom-10 -left-6 text-[150px] font-extrabold font-sans select-none pointer-events-none text-[#181818] tracking-tighter leading-none z-0">
            {activeCategoryId === "bgv-architecture" ? "BGV" : activeCategoryId === "business-strategy" ? "BD" : "OPS"}
          </div>

          <div className="relative z-10 space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-[3px] text-[#00d992] font-semibold block leading-tight">
              {activeCategoryId === "bgv-architecture" ? (
                <>BACKGROUND VERIFICATION<br />COGNIZANCE</>
              ) : activeCategoryId === "business-strategy" ? (
                <>GROWTH & ENTERPRISE<br />VALUE</>
              ) : (
                <>OPERATIONAL<br />GOVERNANCE</>
              )}
            </span>
            <h4 className="font-sans text-2xl font-bold text-white tracking-tight leading-none">
              {SKILL_CATEGORIES.find(c => c.id === activeCategoryId)?.name}
            </h4>
            <p className="font-sans text-xs text-[#bdbdbd] mt-4 leading-relaxed">
              {SKILL_CATEGORIES.find(c => c.id === activeCategoryId)?.description}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 relative z-10 font-mono text-[9px] tracking-widest text-[#00d992] uppercase font-bold">
            <Shield size={12} className="text-[#00d992]" />
            <span>Strategic Alignment Resolved</span>
          </div>
        </div>

        {/* Right Side: 2x2 Grid of Competency Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {SKILL_CATEGORIES.find(c => c.id === activeCategoryId)?.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.22, delay: idx * 0.04 }}
                className="bg-[#121212] border border-[#242424] rounded-[8px] p-6 flex flex-col justify-between hover:border-[#00d992]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h5 className="font-sans text-[15px] font-bold text-white group-hover:text-[#00d992] transition-colors leading-snug">
                      {skill.name}
                    </h5>
                    <span className="font-mono text-xs select-none shrink-0">
                      <span className="text-zinc-500 mr-1 text-[10px] font-semibold">LVL</span>
                      <span className="text-[#00d992] font-bold">{skill.level}/5</span>
                    </span>
                  </div>
                  <p className="font-sans text-[12px] text-[#bdbdbd] mt-2 leading-relaxed">
                    {skill.details}
                  </p>
                </div>

                {/* Rating segment indicators */}
                <div className="mt-4 flex gap-1.5 overflow-hidden">
                  {[1, 2, 3, 4, 5].map((levelBlock) => (
                    <motion.div
                      key={levelBlock}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      style={{ originX: 0 }}
                      transition={{ 
                        duration: 0.35, 
                        delay: idx * 0.05 + levelBlock * 0.06,
                        ease: "easeOut"
                      }}
                      className={`h-[5px] flex-1 rounded-sm transition-colors duration-300 ${
                        levelBlock <= skill.level
                          ? "bg-[#00d992]/90 group-hover:bg-[#00d992] group-hover:shadow-[0_0_6px_rgba(0,217,146,0.3)]"
                          : "bg-[#1e1e1e]"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
