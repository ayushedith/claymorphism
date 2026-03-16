import React from 'react';

export default function MadeByBadge() {
  const clayPill = "shadow-[4px_4px_8px_rgba(99,102,241,0.1),_inset_-4px_-4px_8px_rgba(99,102,241,0.05),_inset_4px_4px_8px_rgba(255,255,255,1)] hover:shadow-[6px_6px_12px_rgba(99,102,241,0.15),_inset_-4px_-4px_8px_rgba(99,102,241,0.05),_inset_4px_4px_8px_rgba(255,255,255,1)]";

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <a 
        href="https://iayush.in" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`pointer-events-auto bg-white text-[#6366F1] font-extrabold text-xs px-5 py-2 rounded-b-2xl flex items-center gap-1.5 transition-transform duration-300 hover:translate-y-1 ${clayPill}`}
      >
        MADE BY AYUSH
        <svg className="w-3 h-3 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
