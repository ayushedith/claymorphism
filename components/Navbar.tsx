import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const clayBase = "shadow-[8px_8px_16px_rgba(99,102,241,0.1),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)]";
  const clayHover = "hover:shadow-[12px_12px_24px_rgba(99,102,241,0.15),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300";
  const clayPrimary = "shadow-[8px_8px_16px_rgba(99,102,241,0.3),_inset_-8px_-8px_16px_rgba(0,0,0,0.1),_inset_8px_8px_16px_rgba(255,255,255,0.3)] hover:shadow-[12px_12px_24px_rgba(99,102,241,0.4),_inset_-8px_-8px_16px_rgba(0,0,0,0.1),_inset_8px_8px_16px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className={`max-w-6xl mx-auto bg-[#F4F4FF]/70 backdrop-blur-xl rounded-full px-8 py-4 flex justify-between items-center ${clayBase}`}>
        <Link href="/" className="text-2xl font-black text-[#1E1E38] tracking-tight flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center ${clayPrimary}`}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.28l8-1.6V11.114A4.369 4.369 0 0015 11c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path></svg>
          </div>
          Swelly<span className="text-[#6366F1]">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 font-bold text-[#64648C]">
          <Link href="/features" className="hover:text-[#6366F1] transition-colors">Features</Link>
          <Link href="/commands" className="hover:text-[#6366F1] transition-colors">Commands</Link>
          <Link href="/premium" className="hover:text-[#6366F1] transition-colors">Premium</Link>
        </div>
        <button className={`hidden md:block bg-white text-[#6366F1] font-extrabold px-8 py-3 rounded-full ${clayBase} ${clayHover}`}>
          Dashboard
        </button>
      </div>
    </nav>
  );
}
