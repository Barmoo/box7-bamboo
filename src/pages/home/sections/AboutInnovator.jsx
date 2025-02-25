import React from "react";
import innovatorImage from '/images/innovation.jpg';

const AboutInnovator = () => {
  return (
    <div className="bg-cover p-6 flex flex-col md:flex-row justify-center items-center align-middle border-b-2 gap-6 md:gap-12">
      <div className="flex-1 p-4 text-center md:text-left">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">About the Innovator</h4>
        <h6 className="text-lg sm:text-xl md:text-2xl italic mt-4">
          Francis Biney's ability to blend sustainability with artistic craftsmanship sets him apart.
          Unlike mass-produced plastic utensils, his bamboo creations are handcrafted,
          biodegradable, and designed with both functionality and beauty in mind.
          His innovative mindset, dedication to eco-friendly solutions, and passion for
          quality craftsmanship make him a trailblazer in bamboo artistry.
          As the world continues to seek sustainable alternatives,
          innovators like Francis Biney prove that creativity and environmental
          consciousness can go hand in hand, shaping a better future for generations to come.
        </h6>
      </div>
      <div className="flex-1 p-4">
        <img src={innovatorImage} alt="Innovator" className="w-full h-auto rounded-lg" />
      </div>
    </div>

  );
};

export default AboutInnovator;
