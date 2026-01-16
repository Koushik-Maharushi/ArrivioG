import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- IMPORT LOCAL ASSETS ---
import berlin from '../../assets/cities/berlin.jpeg';
import munich from '../../assets/cities/munich.jpeg';
import dusseldorf from '../../assets/cities/dusseldorf.jpeg';
import frankfurt from '../../assets/cities/frankfurt.jpeg';
import cologne from '../../assets/cities/cologne.jpeg';
import aachen from '../../assets/cities/aachen.jpeg'; 
import bonn from '../../assets/cities/bonn.jpeg'; 

// ALPHABETICAL ORDER
const cities = [
  { name: "Aachen", count: 8, img: aachen },
  { name: "Berlin", count: 42, img: berlin },
  { name: "Bonn", count: 9, img: bonn },
  { name: "Cologne", count: 12, img: cologne },
  { name: "Dusseldorf", count: 24, img: dusseldorf },
  { name: "Frankfurt", count: 15, img: frankfurt },
  { name: "Munich", count: 18, img: munich },
];

const CityGridPage = () => {
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    // Navigate and pass the city name
    navigate('/search', { state: { city: city.name } });
  };

  return (
    <div className="min-h-screen w-full bg-[#EAE8E4] px-4 md:px-12 pt-28 pb-12 flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-[#1A1A1A]/10 pb-6">
        <button onClick={() => navigate('/')} className="group flex items-center gap-3 text-[#1A1A1A] hover:opacity-60 transition-opacity">
            <div className="w-10 h-10 rounded-full border border-[#1A1A1A]/10 bg-white flex items-center justify-center shadow-sm group-hover:scale-95 transition-transform">
                <ArrowLeft size={18} />
            </div>
            <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Return</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Home</span>
            </div>
        </button>
        <div className="text-left md:text-right">
             <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-none">Select your <span className="italic text-[#2C3E30]">destination.</span></h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-full mx-auto w-full pb-12">
        {cities.map((city) => (
            <div key={city.name} onClick={() => handleCityClick(city)} className="group relative h-60 rounded-[24px] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                <img src={city.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0" alt={city.name} loading="lazy" />
                <div className="absolute inset-0 bg-radial-gradient from-black/70 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-5px] group-hover:translate-y-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></div>
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest drop-shadow-md">{city.count} Units</span>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-3">
                        <p className="text-white/60 font-serif italic text-xs mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Germany</p>
                        <h3 className="text-white font-serif text-4xl md:text-5xl tracking-tighter font-medium drop-shadow-2xl">{city.name}</h3>
                        <div className="h-[1px] bg-white mt-2 w-0 group-hover:w-12 transition-all duration-500 ease-out"></div>
                    </div>
                    <div className="absolute bottom-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <div className="flex items-center gap-1 text-white/90 border-b border-white/50 pb-0.5 hover:text-white">
                            <span className="text-[9px] font-bold uppercase tracking-widest">Explore</span>
                            <ArrowRight size={10} />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-2 border border-white/10 rounded-[18px] pointer-events-none transition-colors group-hover:border-white/20"></div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CityGridPage;