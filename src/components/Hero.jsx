import React from 'react';
import HeroBG from '../assets/herobg.png';

const Hero = () => {
  return (
    <section className="relative w-full h-[685px] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeroBG}
          alt="Construction Site"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Layer 1: Strong Bottom Shadow (Vertical) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        {/* Layer 2: Extra Left-Side Shadow (Horizontal) - Isse text aur pop hoga */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
      </div>

      {/* Content Area - Positioned at Bottom Left */}
      <div className="relative z-10 h-full max-w7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16 md:pb-24">
        <div className="text-left max-w-3xl">
          
          {/* Main Heading with Stronger Shadow */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight uppercase drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)]">
            We Build Your <span className="text-yellow-500">Dreams</span> 
          </h1>

          {/* Description with high contrast */}
          <p className="mt-6 max-w-xl text-base md:text-lg font-sans text-gray-100 font-medium leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            We deliver reliable civil engineering and construction solutions with a strong focus on quality, safety, and timely completion. From residential homes to commercial projects, we turn your vision into reality with precision and trust.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center uppercase tracking-wider">
              Free Inquiry
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur-md uppercase tracking-wider">
              Our Projects
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
    </section>
  );
};

export default Hero;