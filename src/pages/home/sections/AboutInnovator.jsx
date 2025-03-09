import React from "react";
import innovatorImage from '/images/image-6.jpg';

const AboutInnovator = () => {
  return (
    <div className="bg-cover py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center align-middle gap-6 md:gap-16 max-w-7xl mx-auto">
      <div className="flex-1 p-4 text-center md:text-left max-w-xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-green-700 tracking-wide">
          About the Innovator
        </h4>
        <ul className="text-lg sm:text-xl space-y-6 list-none pl-6">
          {[
            "Francis Biney blends sustainability with artistic craftsmanship in unique ways",
            "Creates handcrafted, biodegradable alternatives to mass-produced plastic utensils",
            "Designs focus on both functionality and aesthetic beauty",
            "Demonstrates innovative mindset and dedication to eco-friendly solutions",
            "Trailblazer in bamboo artistry and sustainable craftsmanship",
            "Proves that creativity and environmental consciousness can work together"
          ].map((text, index) => (
            <li key={index} className="italic relative pl-8 transition-all duration-300 hover:text-green-700 hover:translate-x-2">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-600 rounded-full opacity-70"></span>
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4 max-w-md lg:max-w-lg">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src={innovatorImage} 
            alt="Innovator" 
            className="relative w-full h-[500px] object-cover object-center rounded-lg shadow-xl 
                     hover:scale-[1.02] transition-all duration-500
                     ring-1 ring-gray-200/50 ring-offset-2" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
