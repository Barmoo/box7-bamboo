import React from "react";
import innovatorImage from '/images/innovation.jpg';

const AboutInnovator = () => {
  return (
    <div className="bg-cover p-6 flex flex-col md:flex-row justify-center items-center align-middle border-b-2 gap-6 md:gap-12">
      <div className="flex-1 p-4 text-center md:text-left">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-green-700 tracking-wide">
          About the Innovator
        </h4>
        <ul className="text-lg sm:text-xl md:text-2xl space-y-6 list-none pl-6">
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
      <div className="flex-1 p-4">
        <img 
          src={innovatorImage} 
          alt="Innovator" 
          className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" 
        />
      </div>
    </div>
  );
};

export default AboutInnovator;
