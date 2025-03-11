import React from "react";
import { FaLeaf } from 'react-icons/fa';

const AboutProduct = () => {
  const products = [
    {
      text: "Sustainable bamboo craftsmanship with centuries of tradition",
      image: "/images/image-7.jpg"
    },
    {
      text: "Stunning bamboo sculptures crafted by skilled artisans",
      image: "/images/image-8.jpg"
    },
    {
      text: "Elegant home essentials: from utensils to furniture",
      image: "/images/image-9.jpg"
    }
  ];

  return (
    <div id="Product" className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          <h4 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our <span className="text-emerald-600">Creations</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div key={index} 
                   className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start space-x-3">
                    <FaLeaf className="flex-shrink-0 w-5 h-5 text-emerald-500 mt-1 transform group-hover:rotate-12 transition-transform duration-300" />
                    <p className="text-lg font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
