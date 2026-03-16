import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PremiumPage() {
  const clayBase = "shadow-[8px_8px_16px_rgba(99,102,241,0.1),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)]";
  const clayPrimary = "shadow-[8px_8px_16px_rgba(99,102,241,0.3),_inset_-8px_-8px_16px_rgba(0,0,0,0.1),_inset_8px_8px_16px_rgba(255,255,255,0.3)] hover:shadow-[12px_12px_24px_rgba(99,102,241,0.4),_inset_-8px_-8px_16px_rgba(0,0,0,0.1),_inset_8px_8px_16px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300";

  return (
    <div className="min-h-screen bg-[#F4F4FF] selection:bg-[#6366F1] selection:text-white font-sans overflow-hidden relative">
      <div className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-gradient-to-tr from-[#E0E0FF] to-[#D5D7FF] rounded-full blur-[100px] opacity-50 -z-10 mix-blend-multiply pointer-events-none"></div>
      
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-[#1E1E38] mb-6 tracking-tight text-center">Unlock Everything</h1>
        <p className="text-xl text-[#64648C] max-w-2xl text-center mb-16 font-medium">Take your community listening experience to the absolute peak with dedicated audio nodes and twenty four seven uptime capabilities.</p>

        <div className={`w-full max-w-lg bg-white rounded-[3rem] p-12 flex flex-col items-center text-center ${clayBase}`}>
          <div className="text-[#6366F1] font-black text-2xl mb-2">Swelly Pro</div>
          <div className="flex items-end justify-center mb-8 gap-1">
            <span className="text-6xl font-black text-[#1E1E38]">$4.99</span>
            <span className="text-[#64648C] font-semibold mb-2">/month</span>
          </div>

          <ul className="space-y-4 w-full text-left font-medium text-[#64648C] mb-10">
            <li className="flex items-center gap-3">
              <span className="text-[#6366F1]">✓</span> Access to VIP audio servers
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#6366F1]">✓</span> Twenty four seven playing modes
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#6366F1]">✓</span> Custom audio equalizer filters
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#6366F1]">✓</span> Priority developer support
            </li>
          </ul>

          <button className={`w-full bg-[#6366F1] text-white text-xl font-extrabold px-10 py-5 rounded-full ${clayPrimary}`}>
            Upgrade Server
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
