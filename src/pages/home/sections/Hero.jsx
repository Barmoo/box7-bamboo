import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center p-6 flex flex-col justify-center items-center align-middle h-[100vh] border-b-2" style={{ backgroundImage: "url('/images/landing-img.jpg')" }}>
      <div className="absolute inset-0 bg-green-500 opacity-50"></div>
      <div className="relative z-10 text-center">
        <h4 className="text-4xl font-bold text-white mb-4">We are Pretty Best/Excellent/Geek/Affordable/Unique</h4>
        <h6 className="text-2xl italic text-white mb-6">The best and healthy way to live a better a live is just a choice</h6>
        <button className="bg-red-400 w-[16vh] h-[6vh] rounded-[16px] text-white">Products</button>
      </div>
    </div>
  );
};

export default Hero;
