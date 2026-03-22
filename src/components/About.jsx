import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Logo from '../assets/logo.webp';
import TextBG from '../assets/textbg.png';

const About = () => {
  const targetRef = useRef(null);

  // 1. Scroll tracking for this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 2. Different movements for different layers (Depth Effect)
  const yImage1 = useTransform(smoothProgress, [0, 1], [-40, 40]); // Small Image
  const yImage2 = useTransform(smoothProgress, [0, 1], [40, -40]); // Big Image
  const yBadge1 = useTransform(smoothProgress, [0, 1], [-80, 80]); // Logo Badge
  const yBadge2 = useTransform(smoothProgress, [0, 1], [60, -60]); // Experience Badge
  const yText = useTransform(smoothProgress, [0, 1], [20, -20]);   // Right side content

  return (
    <section ref={targetRef} className=" mt-10 overflow-hidden bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Dynamic Image Grid */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            
            {/* 1. Small Image (Top Left) */}
            <motion.div 
               style={{ y: yImage2 }}
              className="absolute top-20 left-0 w-1/2 h-64 overflow-hidden rounded-xl border-white"
            >
              <img 
                src={Image1} 
                alt="Construction Planning" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 2. Big Image (Bottom Right) */}
            <motion.div 
              style={{ y: yImage2 }}
              className="absolute bottom-0 right-0 w-3/4 h-[350px] overflow-hidden rounded-xl border-white z-10 "
            >
              <img 
                src={Image2} 
                alt="Civil Engineering Site" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 3. Logo Badge (Top Right) */}
            <motion.div 
               style={{ y: yImage2 }}
              className="absolute top-24 right-4 md:right-10 bg-white p-6 rounded-3xl flex items-center justify-center border border-gray-200 z-20 "
            >
              <div className="flex flex-col items-center w-24 h-24">
                <img 
                  src={Logo} 
                  alt="Company Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* 4. Years of Experience Badge (Bottom Left) */}
            <motion.div
              style={{ 
                y: yBadge2,
                backgroundImage: `url(${TextBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute bottom-10 left-0 md:left-4 z-20 p-8 flex flex-col items-center justify-center text-black "
            >
              <span className="text-4xl font-extrabold">20+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-center">
                Years of <br /> Excellence
              </span>
            </motion.div>

          </div>

          {/* Right Side: Company Content */}
          <motion.div 
            style={{ y: yText }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 font-bold text-sm rounded-full uppercase tracking-widest">
              Welcome to
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              E-Construct Design and Building Pvt. Ltd.
            </h2>

            <p className="text-gray-600 leading-relaxed text-xl">
              ECONSTRUCT is a premier Indian consultancy and contracting firm dedicated to redefining residential and commercial spaces. Operating with global benchmarks of transparency, reliability, and sustainability, we transform client dreams into high-quality reality.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                "Structural Design & Audit",
                "Project Management (PMC)",
                "Corporate Technical Training",
                "Quality Assurance Solutions",
                "Innovative Construction Tech",
                "On-Time Project Delivery"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-yellow-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 px-10 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-lg transition-all duration-300 shadow-lg uppercase tracking-wider">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;