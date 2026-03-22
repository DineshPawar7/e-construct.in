import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import HeroBG from '../assets/herobg.png';

const Hero = () => {
  const { scrollY } = useScroll();

  // Stiffness badha di hai taaki "lag" ya "glitch" na ho (Industry Standard)
  const springConfig = { stiffness: 150, damping: 30, restDelta: 0.001 };
  const smoothScrollY = useSpring(scrollY, springConfig);

  // Parallax: Values ko negative kiya hai taaki natural movement mile
  // Jab scroll niche ho, image aur text thoda upar move honge
  const backgroundY = useTransform(smoothScrollY, [0, 1000], [0, -70]);
  const textY = useTransform(smoothScrollY, [0, 1000], [0, -40]);

  return (
    <section className="relative w-full h-[685px] overflow-hidden bg-black">
      
      {/* --- BACKGROUND LAYER --- */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full scale-110" // scale-110 extra room deta hai parallax ke liye
      >
        <img
          src={HeroBG}
          alt="Construction Site"
          className="w-full h-full object-cover object-center"
        />

        {/* Professional Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
      </motion.div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 h-full w-full px-6 sm:px-10 flex items-end pb-20"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none uppercase tracking-tighter drop-shadow-2xl">
            We Build Your <br />
            <span className="text-yellow-500">Dreams</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200 font-medium leading-relaxed drop-shadow-md">
            We deliver reliable civil engineering and construction solutions 
            with a strong focus on quality, safety, and timely completion.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold rounded-sm transition-all shadow-[0_10px_20px_rgba(234,179,8,0.3)] uppercase tracking-wider active:scale-95">
              Free Inquiry
            </button>
            <button className="px-10 py-4 border-2 border-white/80 text-white font-extrabold rounded-sm hover:bg-white hover:text-black transition-all backdrop-blur-sm uppercase tracking-wider active:scale-95">
              Our Projects
            </button>
          </div>
        </div>
      </motion.div>

      {/* --- SIDE ACCENT (Industry Style) --- */}
      <div className="absolute right-10 bottom-28 hidden lg:block overflow-hidden pointer-events-none">
        <span className="text-white/10 text-9xl font-black uppercase rotate-90 origin-bottom-right inline-block translate-x-10">
          ESTD 1998
        </span>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500 z-20 shadow-[0_-5px_15px_rgba(234,179,8,0.4)]"></div>
    </section>
  );
};

export default Hero;