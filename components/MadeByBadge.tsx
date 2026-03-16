import React from 'react';

export default function MadeByBadge() {
  const premiumClay = "shadow-[0_8px_20px_rgba(99,102,241,0.15),_inset_0_4px_8px_rgba(255,255,255,1),_inset_0_-4px_8px_rgba(99,102,241,0.08)]";
  const hoverClay = "hover:shadow-[0_16px_32px_rgba(99,102,241,0.25),_inset_0_4px_8px_rgba(255,255,255,1),_inset_0_-4px_8px_rgba(99,102,241,0.15)]";

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] flex justify-center pointer-events-none">
      <a 
        href="https://iayush.in" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`pointer-events-auto group relative flex items-center gap-3 bg-white/80 backdrop-blur-2xl px-6 py-2.5 pt-2 md:py-3 md:pt-2 rounded-b-[2rem] border border-white/60 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:pt-4 hover:pb-3 hover:translate-y-1 ${premiumClay} ${hoverClay}`}
      >
        {/* Left Indicator Dot */}
        <div className="relative flex items-center justify-center w-6 h-6 bg-[#F4F4FF] rounded-full shadow-[inset_2px_2px_4px_rgba(99,102,241,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,1)]">
           <div className="w-2 h-2 bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse"></div>
        </div>
        
        {/* Main Text */}
        <span className="text-[#1E1E38] font-black text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">
          Made By <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6366F1] to-[#818CF8] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]">Ayush</span>
        </span>
        
        {/* Hover Arrow Reveal */}
        <div className="w-0 overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:w-5 group-hover:opacity-100 flex items-center justify-center -ml-1">
          <svg 
            className="w-4 h-4 text-[#6366F1]" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </a>
    </div>
  );
}
