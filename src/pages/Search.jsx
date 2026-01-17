import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search as SearchIcon, MapPin, SlidersHorizontal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// --- EXPANDED MOCK DATA (Covering all 7 Cities) ---
const allProperties = [
  // --- BERLIN (Creative, Industrial) ---
  {
    id: 1,
    city: "Berlin",
    title: "Minimalist Loft in Kreuzberg",
    price: 1450,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
    tags: ["Loft", "High Ceilings"]
  },
  {
    id: 2,
    city: "Berlin",
    title: "Sunny Apartment in Mitte",
    price: 1800,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop",
    tags: ["Central", "Balcony"]
  },
  {
    id: 3,
    city: "Berlin",
    title: "Artist Studio in Neukölln",
    price: 1200,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
    tags: ["Cozy", "1 Room"]
  },

  // --- MUNICH (Luxury, Green, Traditional) ---
  {
    id: 4,
    city: "Munich",
    title: "Modern Flat near Englischer Garten",
    price: 2100,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1512918760532-446595d04f19?q=80&w=1000&auto=format&fit=crop",
    tags: ["Luxury", "Garden View"]
  },
  {
    id: 5,
    city: "Munich",
    title: "Bavarian Chic in Schwabing",
    price: 1950,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000&auto=format&fit=crop",
    tags: ["Renovated", "Quiet"]
  },

  // --- FRANKFURT (Modern, Skyline, Finance) ---
  {
    id: 6,
    city: "Frankfurt",
    title: "Skyline View Penthouse",
    price: 2400,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1000&auto=format&fit=crop",
    tags: ["Penthouse", "Skyline"]
  },
  {
    id: 7,
    city: "Frankfurt",
    title: "Business Suite in Westend",
    price: 1750,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Workspace", "Premium"]
  },

  // --- COLOGNE (Rhine View, Vibrant) ---
  {
    id: 8,
    city: "Cologne",
    title: "Belgian Quarter Altbau",
    price: 1350,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da97ee87?q=80&w=1000&auto=format&fit=crop",
    tags: ["Altbau", "Nightlife"]
  },
  {
    id: 9,
    city: "Cologne",
    title: "Riverside Apartment Deutz",
    price: 1550,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1534349762913-96c87130f6bf?q=80&w=1000&auto=format&fit=crop",
    tags: ["River View", "Modern"]
  },

  // --- DUSSELDORF (Fashion, High-End) ---
  {
    id: 10,
    city: "Dusseldorf",
    title: "Luxury Suite on Königsallee",
    price: 2200,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Exclusive", "Shopping"]
  },
  {
    id: 11,
    city: "Dusseldorf",
    title: "Modern Loft in MedienHafen",
    price: 1850,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
    tags: ["Architecture", "Waterfront"]
  },

  // --- BONN (Historic, Green) ---
  {
    id: 12,
    city: "Bonn",
    title: "Historic Home in Südstadt",
    price: 1300,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513584685908-95c9e2d01361?q=80&w=1000&auto=format&fit=crop",
    tags: ["Historic", "Quiet"]
  },
  {
    id: 13,
    city: "Bonn",
    title: "Cozy Flat near Cherry Blossom Ave",
    price: 1100,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
    tags: ["Charming", "Central"]
  },

  // --- AACHEN (Student, Tech, Affordable) ---
  {
    id: 14,
    city: "Aachen",
    title: "Smart Apartment near RWTH",
    price: 850,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop",
    tags: ["Student Friendly", "WiFi"]
  },
  {
    id: 15,
    city: "Aachen",
    title: "Pontviertel City Flat",
    price: 950,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522771753035-1a5b65d9f342?q=80&w=1000&auto=format&fit=crop",
    tags: ["Nightlife", "Compact"]
  }
];

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the city passed from CityGridPage, or default to "" (Show All)
  const initialCity = location.state?.location || "";
  const [searchTerm, setSearchTerm] = useState(initialCity);

  // Filter properties based on search term
  const filteredProperties = allProperties.filter(p => 
    p.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    searchTerm === ""
  );

  return (
    <div className="min-h-screen bg-[#EAE8E4] pt-28 pb-12 px-4 md:px-8">
      
      {/* --- SEARCH HEADER --- */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          
          <div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-[#2C3E30]/60">
                {filteredProperties.length} Results Found
             </span>
             <h1 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mt-2">
                Stays in <span className="italic text-[#2C3E30]">{searchTerm || "Germany"}</span>
             </h1>
          </div>

          {/* Search Bar & Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
             <div className="relative group w-full md:w-80">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 group-focus-within:text-[#2C3E30]" size={18} />
                <input 
                  type="text" 
                  placeholder="Search city..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/50 backdrop-blur-sm border border-[#1A1A1A]/10 rounded-full py-3 pl-12 pr-4 text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#2C3E30] transition-all"
                />
             </div>
             <button className="p-3 bg-white rounded-full border border-[#1A1A1A]/10 hover:border-[#2C3E30] text-[#1A1A1A] transition-colors">
                <SlidersHorizontal size={18} />
             </button>
          </div>

        </div>
      </div>

      {/* --- PROPERTY GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {filteredProperties.length > 0 ? (
           filteredProperties.map((property, index) => (
             <motion.div 
               key={property.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               onClick={() => navigate(`/property/${property.id}`)}
               className="group cursor-pointer flex flex-col gap-4"
             >
                {/* Image Card */}
                <div className="relative h-[300px] rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                   <img 
                     src={property.image} 
                     alt={property.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   
                   {/* Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

                   {/* Top Tags */}
                   <div className="absolute top-4 left-4 flex gap-2">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#2C3E30]">
                        {property.city}
                      </div>
                      {property.tags.map(tag => (
                        <div key={tag} className="hidden md:block bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                          {tag}
                        </div>
                      ))}
                   </div>

                   {/* Price Tag (Bottom Right) */}
                   <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                      <span className="font-serif font-bold text-[#1A1A1A]">€{property.price}</span>
                      <span className="text-[10px] text-[#1A1A1A]/60">/mo</span>
                   </div>
                </div>

                {/* Details Text */}
                <div className="px-2">
                   <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#2C3E30] transition-colors">{property.title}</h3>
                      <div className="flex items-center gap-1 text-sm font-bold text-[#1A1A1A]">
                         <Star size={12} className="fill-[#C2B280] text-[#C2B280]" />
                         {property.rating}
                      </div>
                   </div>
                   <div className="flex items-center gap-2 text-[#1A1A1A]/50 text-sm">
                      <MapPin size={14} />
                      <span>{property.city}, Germany</span>
                   </div>
                </div>
             </motion.div>
           ))
         ) : (
           <div className="col-span-full py-20 text-center">
             <h3 className="font-serif text-2xl text-[#1A1A1A]/40 italic">No homes found in this area yet.</h3>
             <button onClick={() => setSearchTerm("")} className="mt-4 text-[#2C3E30] font-bold underline">Show all listings</button>
           </div>
         )}
      </div>

    </div>
  );
};

export default Search;