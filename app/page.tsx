import React from 'react';
import Navbar from '../components/Navbar';

export default function SwellyLandingPage() {
  const clayBase = "shadow-[8px_8px_16px_rgba(99,102,241,0.1),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)]";
  const clayHover = "hover:shadow-[12px_12px_24px_rgba(99,102,241,0.15),_inset_-8px_-8px_16px_rgba(99,102,241,0.05),_inset_8px_8px_16px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300";
  const clayPrimary = "shadow-[8px_8px_16px_rgba(99,102,241,0.3),_inset_-8px_-8px_16px_rgba(0,0,0,0.1),_inset_8px_8px_16px_rgba(255,255,255,0.3)] hover:shadow-[12px_12px_24px_rgba(99,102,241,0.4),_inset_-8px_-8px_16px_rgba(0,0,0,0.1),_inset_8px_8px_16px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300";
  const clayInner = "shadow-[inset_6px_6px_12px_rgba(99,102,241,0.15),_inset_-6px_-6px_12px_rgba(255,255,255,1)]";
  const clayPill = "shadow-[4px_4px_8px_rgba(99,102,241,0.1),_inset_-4px_-4px_8px_rgba(99,102,241,0.05),_inset_4px_4px_8px_rgba(255,255,255,1)]";

  return (
    <div className="min-h-screen bg-[#F4F4FF] selection:bg-[#6366F1] selection:text-white font-sans overflow-hidden relative">
      
      {/* Abstract Background Orbs */}
      <div className="absolute top-0 left-[-10%] w-[35rem] h-[35rem] bg-gradient-to-br from-[#E0E0FF] to-[#F4F4FF] rounded-full blur-[80px] opacity-70 -z-10 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[25rem] h-[25rem] bg-gradient-to-tl from-[#E0E0FF] to-[#D5D7FF] rounded-full blur-[80px] opacity-60 -z-10 mix-blend-multiply pointer-events-none"></div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative z-10">
        
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-32">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#6366F1] font-bold text-sm mb-8 ${clayPill}`}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6366F1]"></span>
              </span>
              v2.0 is live with Spotify Support!
            </div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-[#1E1E38] tracking-tighter mb-8 leading-[1.1]">
              The Only <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6366F1] to-[#818CF8]">Music Bot</span> Your Server Needs.
            </h1>
            <p className="text-xl lg:text-2xl text-[#64648C] max-w-2xl lg:max-w-xl mb-12 leading-relaxed font-medium">
              Experience zero-lag audio, seamless queue management, and easy-to-use commands that keep your community vibing all night.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <button className={`bg-[#6366F1] text-white text-xl font-extrabold px-10 py-5 rounded-full ${clayPrimary} w-full sm:w-auto`}>
                Add to Discord
              </button>
              <button className={`bg-white text-[#1E1E38] text-xl font-extrabold px-10 py-5 rounded-full ${clayBase} ${clayHover} w-full sm:w-auto flex items-center justify-center gap-3`}>
                <svg className="w-6 h-6 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                See it in action
              </button>
            </div>
          </div>

          {/* Right: Music Player Widget Prototype */}
          <div className="flex-1 w-full max-w-lg lg:max-w-full relative">
            <div className={`bg-white p-8 rounded-[3rem] ${clayBase} relative z-20`}>
              {/* Album Art Area */}
              <div className={`w-full aspect-square bg-[#F4F4FF] rounded-[2rem] mb-8 flex items-center justify-center relative overflow-hidden ${clayInner}`}>
                 <div className="absolute inset-0 bg-gradient-to-br from-[#818CF8]/20 to-[#C7D2FE]/20 mix-blend-overlay"></div>
                 {/* Fake abstract album art */}
                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A5B4FC] blur-xl opacity-60 mix-blend-multiply absolute top-10 left-10"></div>
                 <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#818CF8] to-[#E0E7FF] blur-xl opacity-60 mix-blend-multiply absolute bottom-4 right-4"></div>
                 
                 <svg className="w-24 h-24 text-[#6366F1]/50 relative z-10" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.28l8-1.6V11.114A4.369 4.369 0 0015 11c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path></svg>
              </div>

              {/* Song Info */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-[#1E1E38] mb-2 leading-none">Midnight City</h3>
                <p className="text-[#64648C] font-semibold text-lg">M83 • Lofi Remixes</p>
              </div>

              {/* Playback Track */}
              <div className="mb-8">
                <div className={`h-4 w-full bg-[#F4F4FF] rounded-full overflow-hidden ${clayInner}`}>
                   <div className="h-full bg-[#6366F1] w-1/3 rounded-full relative">
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 rounded-full blur-[1px]"></div>
                   </div>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#64648C] mt-3 px-2">
                  <span>1:24</span>
                  <span>3:45</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6">
                <button className={`w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#64648C] ${clayBase} ${clayHover}`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" /></svg>
                </button>
                <button className={`w-20 h-20 bg-[#6366F1] rounded-full flex items-center justify-center text-white ${clayPrimary}`}>
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </button>
                <button className={`w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#64648C] ${clayBase} ${clayHover}`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" /></svg>
                </button>
              </div>
            </div>

            {/* Floating Info Widgets */}
            <div className={`absolute -bottom-6 -left-6 z-30 bg-white px-6 py-4 rounded-[1.5rem] flex items-center gap-4 ${clayBase} hidden lg:flex`}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-sm font-bold text-[#64648C]">Status</div>
                <div className="text-xl font-black text-[#1E1E38]">99.99% Uptime</div>
              </div>
            </div>

            <div className={`absolute top-10 -right-6 z-30 bg-white px-6 py-4 rounded-[1.5rem] flex items-center gap-4 ${clayBase} hidden lg:flex`}>
              <div className="w-12 h-12 bg-[#F4F4FF] rounded-full flex justify-center items-center text-xl">🔥</div>
              <div>
                <div className="text-sm font-bold text-[#64648C]">Communities</div>
                <div className="text-xl font-black text-[#1E1E38]">+ 14.2k</div>
              </div>
            </div>
            
          </div>
        </section>

        {/* FEATURES GRID */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E38] mb-6">Everything you need, nothing you don&apos;t.</h2>
          <p className="text-xl text-[#64648C] font-medium max-w-2xl mx-auto">Skip the complicated dashboards. Swelly is built to deliver rich features directly through native Discord commands.</p>
        </div>

        <section id="features" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className={`bg-white rounded-[2.5rem] p-10 flex flex-col text-left ${clayBase} ${clayHover} group`}>
            <div className={`w-20 h-20 bg-[#F4F4FF] rounded-[1.2rem] flex items-center justify-center mb-8 ${clayBase} group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-300`}>
              <svg className="w-10 h-10 text-[#6366F1] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-[#1E1E38] mb-4">High-Fidelity</h3>
            <p className="text-[#64648C] text-lg leading-relaxed font-medium">
              Crystal clear sound with zero lag. We stream directly from platforms directly into your voice channels in premium quality.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={`bg-white rounded-[2.5rem] p-10 flex flex-col text-left ${clayBase} ${clayHover} group`}>
            <div className={`w-20 h-20 bg-[#F4F4FF] rounded-[1.2rem] flex items-center justify-center mb-8 ${clayBase} group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-300`}>
              <svg className="w-10 h-10 text-[#6366F1] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-[#1E1E38] mb-4">Saved Playlists</h3>
            <p className="text-[#64648C] text-lg leading-relaxed font-medium">
              Link your Spotify or Apple Music and import massive playlists in a single command. Save your favorite queues.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={`bg-white rounded-[2.5rem] p-10 flex flex-col text-left ${clayBase} ${clayHover} group`}>
            <div className={`w-20 h-20 bg-[#F4F4FF] rounded-[1.2rem] flex items-center justify-center mb-8 ${clayBase} group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-300`}>
              <svg className="w-10 h-10 text-[#6366F1] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-[#1E1E38] mb-4">Plugin System</h3>
            <p className="text-[#64648C] text-lg leading-relaxed font-medium">
              Want more? Add 24/7 lo-fi radios, auto-lyrics, roles for DJs, and customized voice channel announcements.
            </p>
          </div>

        </section>

        {/* CTA Section */}
        <section className="mt-32 w-full">
           <div className={`bg-[#1E1E38] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden`}>
             <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#1E1E38]/0"></div>
             {/* Decorative background for dark clay mode */}
             <div className={`absolute top-[-50%] left-[-10%] w-[30rem] h-[30rem] bg-[#6366F1] rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none`}></div>

             <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">Ready to drop the beat?</h2>
                <p className="text-xl lg:text-2xl text-indigo-200 mb-12 max-w-3xl font-medium">Join 14,000+ communities who have already upgraded their voice chat experience with Swelly.</p>
                <button className={`bg-[#6366F1] text-white text-2xl font-extrabold px-12 py-6 rounded-full ${clayPrimary}`}>
                  Invite Swelly to your Server
                </button>
             </div>
           </div>
        </section>
      </main>

      {/* Basic Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 text-center text-[#64648C] font-semibold">
        <p>© {new Date().getFullYear()} Swelly Music Bot. All rights reserved.</p>
      </footer>
    </div>
  );
}
