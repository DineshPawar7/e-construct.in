import React from 'react';
import Partner1 from '../assets/part1.jpg'
import Partner2 from '../assets/part2.jpg'
import Partner3 from '../assets/part3.jpg'
import Partner4 from '../assets/part4.jpg'
import Partner5 from '../assets/part5.jpg'
import Partner6 from '../assets/part6.png'
import Partner7 from '../assets/part7.avif'


const TrustedPartners = () => {
  // Sample Logos (Inki jagah aap apne asli partners ke logos ka path daal sakte hain)
  const partners = [
    { id: 1, name: 'L&T', url: Partner1 },
    { id: 2, name: 'Tata Projects', url: Partner2 },
    { id: 3, name: 'UltraTech', url: Partner3 },
    { id: 4, name: 'Reliance', url: Partner4 },
    { id: 5, name: 'Ambuja', url: Partner5 },
    { id: 6, name: 'Shapoorji', url: Partner6 },
        { id: 7, name: 'Shapoorji', url: Partner7 },

  ];

  // Marquee ko lamba karne ke liye array ko double kar rahe hain taaki gap na aaye
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-16 border-b border-gray-100 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Heading Area */}
          <div className="w-full lg:w-[30%] flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
              We Already <br className='md:hidden flex'/>
              <span className="text-yellow-500">Worked With</span>
            </h2>
            {/* Heading ke niche ki line */}
            <div className="mt-2 w-40 h-1.5 bg-yellow-500 rounded-full"></div>
            <p className="mt-4 text-gray-500 text-sm font-medium">
              Trusted by industry leaders for quality and excellence.
            </p>
          </div>

          {/* Right Side: Flowing Brand Logos */}
          <div className="w-full lg:w-[70%] relative">
            {/* Fade Effect on sides (Left and Right) */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Container */}
            <div className="flex overflow-hidden group">
              <div className="flex animate-marquee whitespace-nowrap py-4">
                {duplicatedPartners.map((partner, index) => (
                  <div key={index} className="mx-8 md:mx-12 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={partner.url}
                      alt={partner.name}
                      className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Tailwind Custom Animation Style */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedPartners;