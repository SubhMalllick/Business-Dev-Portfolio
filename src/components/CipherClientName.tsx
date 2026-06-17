import React, { useState, useEffect, useRef } from "react";

const GLITCH_GLYPHS = "01$[]_#@%&*+=?<>X7PY";

interface CipherClientNameProps {
  name: string;
  delay: number; // Delay in ms to stagger diagonally
}

export const CipherClientName: React.FC<CipherClientNameProps> = ({ name, delay }) => {
  const [displayedText, setDisplayedText] = useState(name);
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchStyle, setGlitchStyle] = useState<React.CSSProperties>({});
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset state & clear previous timers
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (animationIntervalRef.current) clearInterval(animationIntervalRef.current);
    
    setIsGlitching(false);
    setGlitchStyle({});
    setDisplayedText(name);

    // Initial instant glitch state once trigger starts
    if (delay > 0) {
      setDisplayedText(() =>
        name
          .split("")
          .map((char) => (char === " " ? " " : GLITCH_GLYPHS[Math.floor(Math.random() * GLITCH_GLYPHS.length)]))
          .join("")
      );
    }

    // Schedule the staggered Holographic Flicker and Micro-Glitch run
    timeoutRef.current = setTimeout(() => {
      setIsGlitching(true);
      
      let stepCount = 0;
      const totalSteps = 10; // Scramble steps for micro-glitch sequence
      
      animationIntervalRef.current = setInterval(() => {
        // 1. Generate visual holographic glitch style: flicker opacity and chromatic shadowoffsets
        const randomX = (Math.random() - 0.5) * 1.5; // Very subtle micro-glitch translation
        const randomY = (Math.random() - 0.5) * 0.5; 
        const randomOpacity = Math.random() > 0.2 ? (Math.random() > 0.5 ? 0.95 : 0.8) : 0.5;
        const colorAccent = Math.random() > 0.5 ? "rgba(0, 217, 146, 0.7)" : "rgba(255, 0, 128, 0.6)";
        
        setGlitchStyle({
          transform: `translate(${randomX}px, ${randomY}px)`,
          opacity: randomOpacity,
          textShadow: `${randomX * 1.2}px ${randomY}px 0 ${colorAccent}, ${-randomX}px ${-randomY}px 0 rgba(0, 191, 255, 0.5)`,
        });

        // 2. Generate scrambled glitched characters
        setDisplayedText(() => {
          return name
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              // Gradually reveal original text from left-to-right
              const progressThreshold = Math.floor((stepCount / totalSteps) * name.length);
              if (index < progressThreshold) {
                return name[index];
              }
              // Else, output glitching terminal glyph
              return GLITCH_GLYPHS[Math.floor(Math.random() * GLITCH_GLYPHS.length)];
            })
            .join("");
        });

        stepCount++;

        // Complete the sequence and normalize to robust clean styling
        if (stepCount >= totalSteps) {
          if (animationIntervalRef.current) clearInterval(animationIntervalRef.current);
          setIsGlitching(false);
          setGlitchStyle({});
          setDisplayedText(name);
        }
      }, 40); // Fast steps for micro-glitch sequence
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationIntervalRef.current) clearInterval(animationIntervalRef.current);
    };
  }, [name, delay]);

  return (
    <span 
      style={glitchStyle}
      className={`font-sans text-[13px] font-bold tracking-wide line-clamp-2 block transition-all duration-75 select-none leading-snug ${
        isGlitching 
          ? "text-[#00d992]/90" 
          : "text-white group-hover:text-[#00d992]"
      }`}
    >
      {displayedText}
    </span>
  );
};
