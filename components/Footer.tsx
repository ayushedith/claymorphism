import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const clayBase = "shadow-[8px_8px_16px_rgba(99,102,241,0.1),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)]";
  const clayHover = "hover:shadow-[12px_12px_24px_rgba(99,102,241,0.15),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300";

  return (
    <footer className="relative mt-24 pb-12 pt-16 px-6 max-w-7xl mx-auto z-10 w-full">
      <div className={`bg-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 ${clayBase}`}>
        <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
          <Link href="/" className="text-4xl font-black text-[#1E1E38] tracking-tight mb-4 inline-block">
            Swelly<span className="text-[#6366F1]">.</span>
          </Link>
          <p className="text-[#64648C] font-medium leading-relaxed bg-[#F4F4FF] p-6 rounded-3xl mt-2 w-full max-w-xs" style={{ boxShadow: "inset 4px 4px 8px rgba(99,102,241,0.08), inset -4px -4px 8px rgba(255,255,255,1)" }}>
            The only music bot your server needs. High fidelity audio and simple commands for everyone.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-16 md:gap-24 text-center md:text-left w-full md:w-auto">
          <div className="flex flex-col gap-5">
            <span className="font-black text-[#1E1E38] text-xl mb-2">Product</span>
            <Link href="/features" className="text-[#64648C] font-medium hover:text-[#6366F1] transition-colors">Features</Link>
            <Link href="/commands" className="text-[#64648C] font-medium hover:text-[#6366F1] transition-colors">Commands</Link>
            <Link href="/premium" className="text-[#64648C] font-medium hover:text-[#6366F1] transition-colors">Premium</Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-black text-[#1E1E38] text-xl mb-2">Resources</span>
            <Link href="#" className="text-[#64648C] font-medium hover:text-[#6366F1] transition-colors">Support Server</Link>
            <Link href="#" className="text-[#64648C] font-medium hover:text-[#6366F1] transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[#64648C] font-medium hover:text-[#6366F1] transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-black text-[#1E1E38] text-xl mb-2">Connect</span>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="#" className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-[#F4F4FF] text-[#6366F1] ${clayBase} ${clayHover}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-[#F4F4FF] text-[#6366F1] ${clayBase} ${clayHover}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-[#64648C] font-semibold text-sm">
        <p>© {new Date().getFullYear()} Swelly Music Bot. All rights reserved.</p>
      </div>
    </footer>
  );
}
