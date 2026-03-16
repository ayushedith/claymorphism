import React from 'react';
import Navbar from '../../components/Navbar';

export default function CommandsPage() {
  const clayBase = "shadow-[8px_8px_16px_rgba(99,102,241,0.1),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)]";
  const clayInner = "shadow-[inset_6px_6px_12px_rgba(99,102,241,0.15),_inset_-6px_-6px_12px_rgba(255,255,255,1)]";

  return (
    <div className="min-h-screen bg-[#F4F4FF] selection:bg-[#6366F1] selection:text-white font-sans overflow-hidden relative">
      <div className="absolute top-[10%] right-[-5%] w-[35rem] h-[35rem] bg-gradient-to-bl from-[#E0E0FF] to-[#D5D7FF] rounded-full blur-[80px] opacity-60 -z-10 mix-blend-multiply pointer-events-none"></div>
      
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-[#1E1E38] mb-8 tracking-tight">Simple Controls</h1>
          <p className="text-xl text-[#64648C] max-w-2xl mx-auto font-medium">Intuitive slash commands making administration and playback easy for everyone in your channels.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { cmd: "/play", desc: "Instantly adds a song or playlist to your queue and joins your current voice channel." },
            { cmd: "/skip", desc: "Votes to skip the current track. Administrators bypass the voting requirement immediately." },
            { cmd: "/queue", desc: "Displays an interactive list of all upcoming songs with time estimates." },
            { cmd: "/filters", desc: "Applies realtime audio effects like bass boost nightcore or karaoke modes." },
            { cmd: "/lyrics", desc: "Fetches and displays the lyrics for the currently playing song automatically." },
            { cmd: "/disconnect", desc: "Clears the active queue and safely disconnects the bot from the voice channel." }
          ].map((item, i) => (
            <div key={i} className={`bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 ${clayBase}`}>
              <div className={`px-6 py-3 font-mono text-xl font-bold text-[#6366F1] bg-[#F4F4FF] rounded-xl ${clayInner}`}>
                {item.cmd}
              </div>
              <p className="text-lg text-[#64648C] font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
