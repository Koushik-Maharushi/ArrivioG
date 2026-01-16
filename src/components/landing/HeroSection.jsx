import React, { useState } from 'react';
import { Search, ArrowRight, Anchor, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ... Imports remain the same ...
import heroVideo1 from '../../assets/hero/video1.mp4';
import heroImage1 from '../../assets/hero/image1.jpeg';
import heroImage2 from '../../assets/hero/image2.jpeg';
import heroVideo2 from '../../assets/hero/video2.mp4';
import heroVideo3 from '../../assets/hero/video3.mp4';
import heroImage3 from '../../assets/hero/image3.png';
import heroImage4 from '../../assets/hero/image4.png';
import heroImage5 from '../../assets/hero/image5.jpeg';
import heroVideo5 from '../../assets/hero/video5.mp4';
import heroVideo6 from '../../assets/hero/video6.mp4';
import heroVideo7 from '../../assets/hero/video7.mp4';

const scrollStyles = `
  @keyframes scroll-up {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scroll-down {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
  .animate-col-1 { animation: scroll-up 60s linear infinite; will-change: transform; }
  .animate-col-2 { animation: scroll-down 45s linear infinite; will-change: transform; }
  .animate-col-3 { animation: scroll-up 55s linear infinite; will-change: transform; }
  
  .animate-pulse-soft { 
    animation: pulse-soft 3s ease-in-out infinite; 
  }
  @keyframes pulse-soft {
    0%, 100% { opacity: 0.4; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(8px); }
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
    { type: 'video', url: heroVideo1 },
    { type: 'image', url: heroImage2 },
    { type: 'image', url: heroImage5 },
    { type: 'video', url: heroVideo6 },
    { type: 'video', url: heroVideo3 },
    { type: 'image', url: heroImage3 },
    { type: 'image', url: heroImage4 },
    { type: 'video', url: heroVideo7 },
  ];
  
  const col2_data = [
    { type: 'image', url: heroImage3 },
    { type: 'video', url: heroVideo7 },
    { type: 'image', url: heroImage4 },
    { type: 'video', url: heroVideo1 },
    { type: 'video', url: heroVideo5 },
    { type: 'image', url: heroImage1 },
    { type: 'image', url: heroImage2 },
    { type: 'video', url: heroVideo2 },
  ];

  const col3_data = [
    { type: 'video', url: heroVideo3 },
    { type: 'image', url: heroImage5 },
    { type: 'video', url: heroVideo2 },
    { type: 'image', url: heroImage2 },
    { type: 'video', url: heroVideo6 },
    { type: 'image', url: heroImage4 },
    { type: 'video', url: heroVideo7 },
    { type: 'image', url: heroImage1 },
  ];

  const col1 = [...col1_data, ...col1_data];
  const col2 = [...col2_data, ...col2_data];
  const col3 = [...col3_data, ...col3_data];

  const RenderMedia = ({ item, index }) => (
    <div className={`w-full h-32 md:h-80 overflow-hidden rounded-[40px] md:rounded-[120px] bg-stone-200`}>
      {item.type === 'video' ? (
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={item.url} type="video/mp4" />
        </video>
      ) : (
        <img src={item.url} className="w-full h-full object-cover" alt="" loading="lazy" />
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#EAE8E4] flex flex-col items-center justify-center pt-24 lg:pt-28">
      <style>{scrollStyles}</style>

      {/* --- 1. BACKGROUND MEDIA LAYER (Lower Z-Index) --- */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 px-2 md:px-4 opacity-60 z-0">
        <div className="animate-col-1 flex flex-col gap-3 md:gap-8 -mt-20">
          {col1.map((item, i) => <RenderMedia key={`c1-${i}`} item={item} index={i} />)}
        </div>
        <div className="animate-col-2 flex flex-col gap-3 md:gap-8 -mt-20">
          {col2.map((item, i) => <RenderMedia key={`c2-${i}`} item={item} index={i} />)}
        </div>
        <div className="animate-col-3 flex-col gap-3 md:gap-8 -mt-20 hidden md:flex">
          {col3.map((item, i) => <RenderMedia key={`c3-${i}`} item={item} index={i} />)}
        </div>
      </div>

      {/* --- 2. THE MERGE ZONES (Increased Opacity & Height) --- */}
      {/* Top shade - increased height and opacity to hide the video edges */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#EAE8E4] via-[#EAE8E4]/50 to-transparent z-10 pointer-events-none" />
      
      {/* Bottom shade - increased height and opacity to merge with next section */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#EAE8E4] via-[#EAE8E4]/100 to-transparent z-10 pointer-events-none" />

      {/* --- 3. FOREGROUND CONTENT (Higher Z-Index) --- */}
      <div className="relative z-20 w-full max-w-5xl px-4 text-center">
        <div className="relative inline-block mb-6 md:mb-8 w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[95%] bg-[#EAE8E4]/40 blur-[40px] rounded-full -z-10"></div>
            <h1 className="mb-2 md:mb-3 text-[#1A1A1A]">
              <span className="block font-sans text-xs md:text-2xl font-bold uppercase tracking-[0.3em] mb-1 md:mb-3 text-[#2C3E30]">
                The Art of
              </span>
              <span className="block font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-[#1A1A1A]">
                Staying.
              </span>
            </h1>
            <div className="relative inline-block">
                <span className="absolute inset-x-[-20%] inset-y-[-50%] bg-[#EAE8E4]/40 blur-2xl -z-10 rounded-full"></span>
                <p className="font-sans text-sm md:text-xl text-[#1A1A1A] max-w-xs md:max-w-xl mx-auto leading-relaxed font-bold">
                    Start your next chapter in a city you've yet to meet. <br className="hidden md:block" /> 
                    We provide the <span className="italic font-serif text-[#2C3E30]">roots</span>, so you can focus on growing.
                </p>
            </div>
        </div>

        {/* --- SEARCH & TRUST GROUP --- */}
        <div className="max-w-lg mx-auto relative group mb-6 md:mb-8">
           <form onSubmit={handleSearch} className="relative flex items-center bg-white border border-white shadow-2xl p-1.5 md:p-2 pr-2 rounded-full hover:border-[#2C3E30]/20 transition-all">
             <div className="pl-4 md:pl-6 pr-2 md:pr-4 text-[#2C3E30]"><Search size={18} className="md:w-6 md:h-6 opacity-80" /></div>
             <input 
               type="text" 
               placeholder="Where do you belong?"
               className="w-full bg-transparent border-none py-3 md:py-4 text-[#1A1A1A] placeholder-[#4A4A40]/50 focus:outline-none text-base md:text-lg font-serif italic font-medium"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button type="submit" className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#2C3E30] text-[#EAE8E4] flex items-center justify-center hover:bg-[#1A1A1A] transition-all active:scale-95">
               <ArrowRight size={18} className="md:w-5 md:h-5" />
             </button>
           </form>
           <div className="mt-3 inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/50 px-5 py-1.5 shadow-sm rounded-full">
               <Anchor size={12} className="text-[#2C3E30]" />
               <span className="text-[9px] md:text-[10px] font-bold text-[#2C3E30] uppercase tracking-[0.2em]">Verified Long-Term Residences</span>
           </div>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col items-center gap-2 animate-pulse-soft">
           <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#2C3E30]/60">Explore Berlin • Munich • Frankfurt • Cologne</p>
           <ChevronDown size={20} strokeWidth={1} className="text-[#2C3E30]/40" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;