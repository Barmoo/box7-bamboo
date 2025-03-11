import React from "react";
import innovatorImage from '/images/image-6.jpg';

const AboutInnovator = () => {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
            {/* Text Content */}
            <div className="flex-1 p-6 backdrop-blur-sm bg-white/40 rounded-2xl shadow-lg max-w-xl">
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-emerald-800 tracking-tight">
                About the <span className="text-emerald-600">Innovator</span>
              </h4>
              <ul className="space-y-6 list-none">
                {[
                  "Francis Biney blends sustainability with artistic craftsmanship in unique ways",
                  "Creates handcrafted, biodegradable alternatives to mass-produced plastic utensils",
                  "Designs focus on both functionality and aesthetic beauty",
                  "Demonstrates innovative mindset and dedication to eco-friendly solutions",
                  "Trailblazer in bamboo artistry and sustainable craftsmanship",
                  "Proves that creativity and environmental consciousness can work together"
                ].map((text, index) => (
                  <li 
                    key={index} 
                    className="group relative pl-10 py-2 text-lg text-emerald-800 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute left-[0.6rem] top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-600 rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <p className="font-medium">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Image Section */}
            <div className="flex-1 max-w-lg">
              <div className="relative group">
                {/* Multiple decorative layers */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-l from-emerald-300 to-green-300 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition duration-500 animation-delay-200"></div>
                
                {/* Frame effect */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-200 via-green-200 to-emerald-200 rounded-2xl p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl"></div>
                  
                  {/* Main image container */}
                  <div className="relative rounded-xl overflow-hidden">
                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400/50 rounded-br-lg"></div>
                    
                    {/* Image */}
                    <img 
                      src={innovatorImage} 
                      alt="Innovator" 
                      className="w-full h-[600px] object-cover object-center rounded-xl shadow-2xl 
                               transform group-hover:scale-[1.02] transition-all duration-700" 
                    />
                    
                    {/* Layered overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Floating dots decoration */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-green-400 rounded-full animate-ping animation-delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
