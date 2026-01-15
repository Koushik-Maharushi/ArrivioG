import React, { useState } from 'react';
import { Search, ArrowRight, Anchor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const scrollStyles = `
  @keyframes scroll-up {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scroll-down {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
  .animate-scroll-up {
    animation: scroll-up 80s linear infinite;
  }
  .animate-scroll-down {
    animation: scroll-down 80s linear infinite;
  }
`;

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  const col1_data = [
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop",
  ];
  const col2_data = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
  ];
  const col3_data = [
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=600&auto=format&fit=crop",
  ];

  const col1 = [...col1_data, ...col1_data];
  const col2 = [...col2_data, ...col2_data];
  const col3 = [...col3_data, ...col3_data];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#EAE8E4] flex flex-col items-center justify-center pt-28 lg:pt-32">
      <style>{scrollStyles}</style>

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 px-2 md:px-4 opacity-90 grayscale-0 z-0">
        
        {/* Col 1 */}
        <div className="animate-scroll-up flex flex-col gap-3 md:gap-8 -mt-20">
          {col1.map((img, i) => (
            // FIX: Reduced mobile height to `h-28` (112px). Looks much tighter.
            <img key={`c1-${i}`} src={img} className="w-full h-28 md:h-80 object-cover shadow-2xl rounded-sm" alt="" />
          ))}
        </div>

        {/* Col 2 */}
        <div className="animate-scroll-down flex flex-col gap-3 md:gap-8 -mt-20">
          {col2.map((img, i) => (
            <img key={`c2-${i}`} src={img} className="w-full h-28 md:h-80 object-cover shadow-2xl rounded-sm" alt="" />
          ))}
        </div>

        {/* Col 3 (Hidden on mobile) */}
        <div className="animate-scroll-up flex-col gap-3 md:gap-8 -mt-20 hidden md:flex">
          {col3.map((img, i) => (
            <img key={`c3-${i}`} src={img} className="w-full h-28 md:h-80 object-cover shadow-2xl rounded-sm" alt="" />
          ))}
        </div>
      </div>

      {/* --- OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EAE8E4] via-[#EAE8E4]/20 to-[#EAE8E4] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#EAE8E4]/60 to-[#EAE8E4] pointer-events-none z-0" />


      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        
        {/* TEXT HALO */}
        <div className="relative inline-block mb-6 md:mb-10 w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#EAE8E4]/80 blur-3xl rounded-full -z-10 pointer-events-none"></div>

            {/* HEADLINE */}
            <h1 className="mb-2 md:mb-4 text-[#1A1A1A] drop-shadow-sm relative z-10">
              <span className="block font-sans text-xs md:text-2xl font-bold uppercase tracking-[0.3em] mb-2 md:mb-4 text-[#2C3E30]">
                The Art of
              </span>
              <span className="block font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-[#1A1A1A]">
                Staying.
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="font-sans text-sm md:text-lg text-[#1A1A1A] max-w-xs md:max-w-xl mx-auto leading-relaxed font-medium relative z-10">
              Stability is the ultimate luxury. Discover fully furnished homes curated for belonging.
            </p>
        </div>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="max-w-lg mx-auto relative group">
           <div className="relative flex items-center bg-[#F5F5F0]/60 backdrop-blur-xl border border-white/60 p-1.5 md:p-2 pr-2 transition-all shadow-xl hover:border-[#2C3E30] hover:bg-[#F5F5F0]/80 rounded-full">
             
             <div className="pl-4 md:pl-6 pr-2 md:pr-4 text-[#2C3E30]">
               <Search size={18} className="md:w-6 md:h-6" />
             </div>
             
             <input 
               type="text" 
               placeholder="Where do you belong?"
               className="w-full bg-transparent border-none py-3 md:py-4 text-[#1A1A1A] placeholder-[#4A4A40] focus:outline-none text-base md:text-lg font-serif italic font-medium"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />

             <button 
               type="submit"
               className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#2C3E30] text-[#EAE8E4] flex items-center justify-center hover:bg-[#1A1A1A] hover:scale-105 transition-all shadow-md group-hover:shadow-lg"
             >
               <ArrowRight size={18} className="md:w-5 md:h-5" />
             </button>

           </div>
        </form>

        {/* TRUST BADGE */}
        <div className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-[#F5F5F0]/60 backdrop-blur-md border border-white/50 px-4 py-1.5 md:px-5 md:py-2 shadow-lg rounded-full animate-fade-in-up">
           <Anchor size={12} className="text-[#2C3E30]" />
           <span className="text-[9px] md:text-[10px] font-bold text-[#2C3E30] uppercase tracking-[0.2em]">Verified Long-Term Residences</span>
        </div>

        {/* BOTTOM STATS */}
        <div className="mt-8 md:mt-12 mb-5 flex justify-center gap-8 md:gap-12 text-[#2C3E30] relative">
           <div className="absolute inset-0 bg-[#EAE8E4]/60 blur-xl -z-10"></div>
           <div className="text-center relative z-10">
              <p className="font-serif text-xl md:text-2xl font-bold">98%</p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Occupancy</p>
           </div>
           <div className="w-[1px] h-8 md:h-10 bg-[#2C3E30] relative z-10"></div>
           <div className="text-center relative z-10">
              <p className="font-serif text-xl md:text-2xl font-bold">7</p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Cities</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;