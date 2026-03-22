import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Planning from '../assets/planning.jpg'
import Design from '../assets/design.webp'
import Development from '../assets/development.jpg'

const steps = [
  {
    id: "01",
    title: "Concept",
    subtitle: "Visualizing the Vision",
    desc: "The first step and the most important in planning has to do with understanding your project’s requirements and expectations.",
    img: Planning,
    bg: "bg-[#EEF2FF]",
    text: "text-white"
  },
  {
    id: "02",
    title: "Design",
    subtitle: "Precision & Aesthetics",
    desc: "We create sketches and ensure compliance with regulations while shaping your vision into structured plans.",
    img: Design,
    bg: "bg-[#FDF2F8]",
    text: "text-black"
  },
  {
    id: "03",
    title: "Development",
    subtitle: "Building Excellence",
    desc: "We finalize materials, refine structure, and transform concepts into a complete, build-ready solution.",
    img: Development,
    bg: "bg-[#DCFCE7]",
    text: "text-white"
  }
];

const ImmersiveProcess = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

      
        <motion.div style={{ x }} className="flex px-[10vw]">

          {/* Header */}
          <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center pr-20">
            <div className="mb-6 flex items-center gap-4 text-amber-500">
<div className="w-12 h-1 bg-yellow-500"></div>              <span className="font-bold tracking-[0.4em] uppercase text-sm">
                Our Workflow
              </span>
            </div>

            <h2 className="text-6xl md:text-9xl font-black text-black uppercase leading-[0.85] mb-8">
              How We <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #f59e0b' }}>
                Work
              </span>
            </h2>

            <p className="text-gray-600 text-xl max-w-lg border-l-2 border-amber-500 pl-6">
              With over 25+ years of experience, we turn ideas into real-world structures.
            </p>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="w-[90vw] md:w-[70vw]  flex-shrink-0 flex items-center justify-center px-6 md:px-10">
              
<div
  className={`relative w-full max-w-6xl grid lg:grid-cols-2 ${step.bg} ${step.text} rounded-3xl gap-10 items-center`}
>
               

                {/* Image */}
                <div className="h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <span className="text-amber-500 font-bold uppercase text-xs tracking-widest">
                    {step.subtitle}
                  </span>

                  <h3 className="text-5xl md:text-7xl font-black text-black mt-4 mb-6">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-10">
                    {step.desc}
                  </p>

                  <button className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-amber-500 transition">
                      <ArrowRight className="group-hover:translate-x-1 transition" />
                    </div>
                    <span className="font-bold uppercase text-xs tracking-widest text-black">
                      Learn More
                    </span>
                  </button>
                </div>

              </div>
            </div>
          ))}

         

        </motion.div>

        
      </div>
    </section>
  );
};

export default ImmersiveProcess;