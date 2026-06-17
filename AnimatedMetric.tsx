import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedMetricProps {
  valueStr: string;
  delayIndex: number;
}

function parseMetric(valueStr: string) {
  const match = valueStr.match(/^([^0-9.]*)([0-9.]+)([^0-9.]*)$/);
  if (!match) {
    return { prefix: "", value: 0, suffix: valueStr, decimals: 0 };
  }
  const prefix = match[1] || "";
  const numVal = parseFloat(match[2]);
  const suffix = match[3] || "";
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix, value: numVal, suffix, decimals };
}

export const AnimatedMetric: React.FC<AnimatedMetricProps> = ({ valueStr, delayIndex }) => {
  const { prefix, value: targetValue, suffix, decimals } = parseMetric(valueStr);
  const [currentValue, setCurrentValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // 1.6 seconds smooth transition

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function: cubic-out
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
      const nextValue = easeOutCubic * targetValue;

      setCurrentValue(nextValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
      }
    };

    // Stagger start based on index
    const staggerTimeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delayIndex * 150);

    return () => clearTimeout(staggerTimeout);
  }, [isInView, targetValue, delayIndex]);

  // Restart the counting animation on hover click for responsive delight
  const triggerReCount = () => {
    let startTime: number | null = null;
    const duration = 800; // faster re-count
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
      setCurrentValue(easeOutCubic * targetValue);
      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        setIsHovered(true);
        triggerReCount();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative select-none cursor-pointer group py-1"
    >
      {/* Dynamic Laser Line Accent */}
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00d992] to-emerald-400/20 transition-all duration-300 origin-left ${
          isHovered ? "w-full opacity-100" : "w-0 opacity-0"
        }`} 
      />

      {/* Numerical metric box with spring scale */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: delayIndex * 0.1, ease: "easeOut" }}
        className="flex items-baseline"
      >
        <span className="text-3xl sm:text-4xl font-mono font-semibold tracking-tight text-[#00d992] transition-colors duration-300 group-hover:text-emerald-300">
          {prefix}
          {currentValue.toFixed(decimals)}
          {suffix}
        </span>

        {/* Decorative micro retro indicator dot */}
        <span 
          className={`ml-2 w-1.5 h-1.5 rounded-full bg-[#00d992]/40 transition-all duration-300 ${
            isHovered ? "bg-[#00d992] scale-150 shadow-[0_0_8px_#00d992]" : "scale-100"
          }`} 
        />
      </motion.div>
    </div>
  );
};
