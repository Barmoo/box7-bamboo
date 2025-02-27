import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Best", "Excellent", "Geek", "Affordable", "Unique"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center p-6 flex flex-col justify-center items-center align-middle min-h-screen border-b-2"
      style={{ backgroundImage: "url('/images/landing-img.jpg')" }}
    >
      <div className="absolute inset-0 bg-green-600 opacity-30"></div>
      <div className="relative z-10 text-center">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeUp">
          We are Pretty{" "}
          <span className="inline-block min-w-[120px] transition-opacity duration-500">
            {words[currentWordIndex]}
          </span>
        </h4>
        <h6 className="text-lg sm:text-xl md:text-2xl italic text-white mb-6">
          The best and healthy way to live a better life is just a choice
        </h6>
        <button className="bg-green-600 hover:bg-green-700 transition-colors w-32 md:w-[16vh] h-10 md:h-[6vh] rounded-[16px] text-white">
          Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
