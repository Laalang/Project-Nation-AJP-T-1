import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Property listing counts by region
const regionData = {
  java: { name: 'Java', count: 45 },
  sumatra: { name: 'Sumatra', count: 32 },
  kalimantan: { name: 'Kalimantan', count: 18 },
  sulawesi: { name: 'Sulawesi', count: 24 },
  bali: { name: 'Bali', count: 37 },
  papua: { name: 'Papua', count: 9 },
  maluku: { name: 'Maluku', count: 7 },
  nusaTenggara: { name: 'Nusa Tenggara', count: 15 }
};

const IndonesiaMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const handleMouseEnter = (region: string) => {
    setActiveRegion(region);
  };

  const handleMouseLeave = () => {
    setActiveRegion(null);
  };

  // Function to determine if a region should pulse (has listings)
  const shouldPulse = (region: string) => {
    return regionData[region as keyof typeof regionData]?.count > 0;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Discover Properties Across Indonesia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive property listings throughout the Indonesian archipelago. 
            Hover over a region to see available properties.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Map Container */}
          <div className="relative w-full aspect-[16/9]">
            <svg 
              viewBox="0 0 800 450" 
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))' }}
            >
              {/* Sumatra */}
              <motion.path
                d="M150,120 C170,100 200,90 230,100 C260,110 270,140 280,170 C290,200 300,230 290,260 C280,290 260,310 230,320 C200,330 170,320 150,300 C130,280 120,250 130,220 C140,190 130,140 150,120"
                fill={activeRegion === 'sumatra' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('sumatra')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('sumatra') && activeRegion !== 'sumatra' ? {
                  scale: [1, 1.02, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />

              {/* Java */}
              <motion.path
                d="M300,320 C330,315 360,320 390,325 C420,330 450,335 480,330 C510,325 540,320 570,325 C600,330 630,335 650,330 C670,325 680,320 670,315 C660,310 640,305 620,310 C600,315 580,320 560,315 C540,310 520,305 500,310 C480,315 460,320 440,315 C420,310 400,305 380,310 C360,315 340,320 320,315 C300,310 280,305 300,320"
                fill={activeRegion === 'java' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('java')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('java') && activeRegion !== 'java' ? {
                  scale: [1, 1.02, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />

              {/* Bali */}
              <motion.circle
                cx="680"
                cy="330"
                r="15"
                fill={activeRegion === 'bali' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('bali')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('bali') && activeRegion !== 'bali' ? {
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />

              {/* Kalimantan */}
              <motion.path
                d="M350,150 C380,140 410,145 440,160 C470,175 490,200 500,230 C510,260 505,290 490,315 C475,340 450,355 420,360 C390,365 360,360 340,345 C320,330 310,305 315,280 C320,255 335,230 330,205 C325,180 320,160 350,150"
                fill={activeRegion === 'kalimantan' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('kalimantan')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('kalimantan') && activeRegion !== 'kalimantan' ? {
                  scale: [1, 1.02, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />

              {/* Sulawesi */}
              <motion.path
                d="M550,150 C570,140 590,145 600,160 C610,175 615,195 610,215 C605,235 590,250 580,270 C570,290 565,310 550,320 C535,330 515,325 500,315 C485,305 475,290 470,270 C465,250 470,230 480,215 C490,200 505,190 520,180 C535,170 530,160 550,150"
                fill={activeRegion === 'sulawesi' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('sulawesi')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('sulawesi') && activeRegion !== 'sulawesi' ? {
                  scale: [1, 1.02, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />

              {/* Papua */}
              <motion.path
                d="M650,180 C680,170 710,175 730,190 C750,205 760,230 755,255 C750,280 730,300 705,310 C680,320 650,315 630,300 C610,285 600,260 605,235 C610,210 620,190 650,180"
                fill={activeRegion === 'papua' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('papua')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('papua') && activeRegion !== 'papua' ? {
                  scale: [1, 1.02, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />

              {/* Maluku */}
              <motion.path
                d="M620,240 C630,230 645,235 650,245 C655,255 650,270 640,275 C630,280 615,275 610,265 C605,255 610,250 620,240"
                fill={activeRegion === 'maluku' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('maluku')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('maluku') && activeRegion !== 'maluku' ? {
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />

              {/* Nusa Tenggara */}
              <motion.path
                d="M700,350 C720,345 740,350 750,360 C760,370 765,385 760,400 C755,415 740,425 725,420 C710,415 700,400 695,385 C690,370 680,355 700,350"
                fill={activeRegion === 'nusaTenggara' ? '#E6B54A' : '#E6B54A80'}
                stroke="#1A535C"
                strokeWidth="2"
                className="cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleMouseEnter('nusaTenggara')}
                onMouseLeave={handleMouseLeave}
                animate={shouldPulse('nusaTenggara') && activeRegion !== 'nusaTenggara' ? {
                  scale: [1, 1.02, 1],
                  opacity: [0.7, 0.9, 0.7]
                } : {}}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              />
            </svg>

            {/* Tooltip */}
            {activeRegion && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-navy text-white px-4 py-2 rounded-md shadow-lg z-10"
              >
                <p className="font-poppins font-semibold">
                  {regionData[activeRegion as keyof typeof regionData]?.name}: 
                  <span className="text-gold ml-2">
                    {regionData[activeRegion as keyof typeof regionData]?.count} Properties
                  </span>
                </p>
              </motion.div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {Object.entries(regionData).map(([key, { name, count }]) => (
              <div 
                key={key}
                className="flex items-center space-x-2 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`w-4 h-4 rounded-full ${activeRegion === key ? 'bg-gold' : 'bg-gold/60'}`}></div>
                <span className="text-gray-700 font-medium">{name}: <span className="font-semibold">{count}</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndonesiaMap;