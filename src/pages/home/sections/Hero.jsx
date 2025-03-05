import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Best", "Excellent", "Geek", "Affordable", "Unique"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with enhanced clarity */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: "url('/images/landing-img2.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          imageRendering: "crisp-edges"
        }}
      />
      
      {/* Enhanced gradient overlays for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-800/30 to-emerald-600/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Refined animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/10 rounded-full mix-blend-overlay filter blur-[60px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-300/10 rounded-full mix-blend-overlay filter blur-[60px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-300/10 rounded-full mix-blend-overlay filter blur-[60px] animate-blob animation-delay-4000" />
      </div>

      {/* Enhanced content overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h4 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 
                       tracking-tight leading-tight animate-fadeUp drop-shadow-lg">
            We are{" "}
            <span className="relative inline-block min-w-[180px]">
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 
                           rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-200 to-green-200 animate-pulse">
                {words[currentWordIndex]}
              </span>
            </span>
          </h4>

          <h6 className="text-xl sm:text-2xl md:text-3xl text-white mb-12 
                      font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            The best and healthy way to live a better life is just a{" "}
            <span className="italic font-medium text-emerald-300">choice</span>
          </h6>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-3 text-lg font-medium">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-emerald-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
              <span className="relative text-white group-hover:text-white">
                Explore Products
              </span>
            </button>
            
            <button className="group relative px-8 py-3 text-lg font-medium overflow-hidden backdrop-blur-sm">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-white/20 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-white/50 group-hover:border-white"></span>
              <span className="relative text-white group-hover:text-white">
                Learn More
              </span>
            </button>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
              className="w-6 h-6 text-white drop-shadow-lg" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
