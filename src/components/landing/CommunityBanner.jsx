import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ---
const BUBBLE_DATA = [
  { type: "text", content: "Anyone up for badminton? 🏸" },
  { type: "text", content: "Lift smells like coffee ☕" },
  { type: "text", content: "Movie night today? 🎬" },
  { type: "text", content: "Left food near the desk 💛" },
  { type: "text", content: "Yoga on the roof at 6pm? 🧘‍♀️" },
  { type: "text", content: "New bakery downstairs is amazing! 🥐" },
  { type: "text", content: "Sunday Brunch? 🥑" },
  { type: "text", content: "Can I borrow a charger? 🔌" },
  
  // Images
  { type: "image", content: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=200&auto=format&fit=crop" },
  { type: "image", content: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=200&auto=format&fit=crop" },
  { type: "image", content: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=200&auto=format&fit=crop" }
];

const CommunityBanner = () => {
  const [bubbles, setBubbles] = useState([]);

  // --- SPAWN LOGIC ---
  const spawnBubble = useCallback(() => {
    const id = Date.now() + Math.random();
    const data = BUBBLE_DATA[Math.floor(Math.random() * BUBBLE_DATA.length)];
    const side = Math.random() > 0.5 ? "left" : "right";
    const rotation = Math.random() * 10 - 5; 
    const scale = Math.random() * 0.2 + 0.8;

    let top, left;
    let validPosition = false;
    let attempts = 0;

    while (!validPosition && attempts < 50) {
        attempts++;
        
        // 1. STRICTER EDGE PADDING (20% - 80%)
        top = Math.random() * 60 + 20; 
        left = Math.random() * 60 + 20; 

        // 2. WIDER CENTER EXCLUSION ZONE
        const inCenterWidth = left > 25 && left < 75;
        const inCenterHeight = top > 30 && top < 70;

        if (!(inCenterWidth && inCenterHeight)) {
            validPosition = true;
        }
    }

    if (validPosition) {
        const newBubble = { 
            id, ...data, side, rotation, scale, top, left 
        };

        setBubbles(prev => [...prev, newBubble]);

        // Cleanup: Bubbles stay for 4.5 seconds
        setTimeout(() => {
            setBubbles(prev => prev.filter(b => b.id !== id));
        }, 4500);
    }
  }, []);

  // --- ANIMATION LOOP (SLOWER SPEED) ---
  useEffect(() => {
    let timer;
    const loop = () => {
        // Slower interval (1.5s to 2.5s)
        const delay = Math.random() * 1000 + 1500; 
        spawnBubble();
        timer = setTimeout(loop, delay);
    };
    timer = setTimeout(loop, 1000);
    return () => clearTimeout(timer);
  }, [spawnBubble]);


  return (
    <section className="relative w-full h-[32rem] sm:h-[40rem] bg-[#EAE8E4] overflow-hidden flex items-center justify-center">
      
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. BACKGROUND IMAGE (More Visible Now) */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop" 
            alt="Community Vibe" 
            // UPDATED STYLING: Reduced blur (md -> sm) and increased opacity (20 -> 40)
            className="w-full h-full object-cover blur-sm opacity-40 grayscale-[30%]"
          />
          {/* An extra tint layer to ensure it stays warm */}
          <div className="absolute inset-0 bg-[#EAE8E4] mix-blend-color opacity-30"></div>
      </div>
      
      {/* 2. Radial Glow (z-10) */}
      <div className="absolute inset-0 bg-radial-gradient from-[#F5F5F0]/60 to-transparent opacity-70 pointer-events-none z-10"></div>
      
      {/* 3. Heavy Grain Texture (z-10) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply z-10" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}>
      </div>

      {/* 4. Top Fade (z-10) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EAE8E4] to-transparent z-10 pointer-events-none"></div>


      {/* --- CENTER TEXT (z-30) --- */}
      <div className="z-30 text-center px-6 pointer-events-none relative">
         <div className="flex items-center justify-center gap-3 mb-4 opacity-60">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C3E30] font-sans">
                The Community
            </span>
         </div>
         
         <div className="relative">
            {/* Strong halo behind text for readability against image */}
            <div className="absolute inset-0 bg-[#EAE8E4]/95 blur-3xl -z-10 rounded-full scale-150"></div>
            
            <p className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight">
                Life happens <br/>
                <span className="italic text-[#2C3E30]">together.</span>
            </p>
         </div>
      </div>

      {/* --- BUBBLES (z-20) --- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <AnimatePresence>
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    animate={{ opacity: 1, scale: bubble.scale, y: 0, rotate: bubble.rotation }}
                    exit={{ opacity: 0, scale: 0.8, y: -30 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                    style={{ 
                        top: `${bubble.top}%`, 
                        left: `${bubble.left}%`,
                        position: 'absolute',
                        x: "-50%", 
                        y: "-50%"
                    }}
                    className={`
                        max-w-[200px] sm:max-w-[260px] shadow-xl backdrop-blur-md border border-white/30
                        ${bubble.type === 'image' ? 'p-0 bg-transparent rounded-[20px]' : 'px-5 py-3 rounded-[24px] text-sm font-medium leading-snug'}
                        
                        /* Premium Colors with slightly higher opacity for pop */
                        ${bubble.type !== 'image' && bubble.side === 'left' ? 'bg-[#F5F5F0]/90 text-[#1A1A1A] rounded-bl-none' : ''}
                        ${bubble.type !== 'image' && bubble.side === 'right' ? 'bg-[#2C3E30]/90 text-[#EAE8E4] rounded-br-none' : ''}
                    `}
                >
                    {bubble.type === 'image' ? (
                        <img src={bubble.content} alt="Moment" className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] object-cover rounded-[20px] border-4 border-white/80 shadow-sm" />
                    ) : (
                        bubble.content
                    )}
                </motion.div>
            ))}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default CommunityBanner;