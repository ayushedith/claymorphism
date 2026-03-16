import React from 'react';
import Navbar from '../../components/Navbar';

export default function FeaturesPage() {
  const clayBase = "shadow-[8px_8px_16px_rgba(99,102,241,0.1),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)]";
  const clayHover = "hover:shadow-[12px_12px_24px_rgba(99,102,241,0.15),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300";

  return (
    <div className="min-h-screen bg-[#F4F4FF] selection:bg-[#6366F1] selection:text-white font-sans overflow-hidden relative">
      <div className="absolute top-0 left-[-10%] w-[35rem] h-[35rem] bg-gradient-to-br from-[#E0E0FF] to-[#F4F4FF] rounded-full blur-[80px] opacity-70 -z-10 mix-blend-multiply pointer-events-none"></div>
      
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-[#1E1E38] mb-8 tracking-tight">Built for Performance</h1>
        <p className="text-xl text-[#64648C] max-w-3xl mx-auto mb-20 font-medium">Discover the elite tools embedded in every server that uses our bot. Everything runs seamlessly in the background without needing extreme setup.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className={`bg-white rounded-[3rem] p-12 text-left ${clayBase} ${clayHover}`}>
            <h3 className="text-3xl font-black text-[#1E1E38] mb-4">Zero Lag Ecosystem</h3>
            <p className="text-lg text-[#64648C] font-medium">Enjoy crisp audio parsing and instant command responses. We host our systems on dedicated audio servers to ensure your community never drops a beat.</p>
          </div>
          <div className={`bg-white rounded-[3rem] p-12 text-left ${clayBase} ${clayHover}`}>
            <h3 className="text-3xl font-black text-[#1E1E38] mb-4">Granular Permissions</h3>
            <p className="text-lg text-[#64648C] font-medium">Limit playback controls to DJs or specific roles. Our architecture allows administrators complete control over who plays what and when.</p>
          </div>
          <div className={`bg-white rounded-[3rem] p-12 text-left ${clayBase} ${clayHover}`}>
            <h3 className="text-3xl font-black text-[#1E1E38] mb-4">Synced Lyrics</h3>
            <p className="text-lg text-[#64648C] font-medium">Follow along with your favorite tracks automatically. We fetch exact lyric timings and post them directly in your listening channels.</p>
          </div>
          <div className={`bg-white rounded-[3rem] p-12 text-left ${clayBase} ${clayHover}`}>
            <h3 className="text-3xl font-black text-[#1E1E38] mb-4">Platform Agnostic</h3>
            <p className="text-lg text-[#64648C] font-medium">Whether your music lives on Spotify Soundcloud or Apple Music we support instant playback and playlist importing from everywhere.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
