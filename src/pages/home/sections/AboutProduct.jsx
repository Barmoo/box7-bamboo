import React from "react";
import { FaLeaf } from 'react-icons/fa';

const AboutProduct = () => {
  return (
    <div id="Product" className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
            About Our <span className="text-green-600">Products</span>
          </h4>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              {[
                "Bamboo, a fast-growing and sustainable plant, has been a versatile material in art and craftsmanship for centuries.",
                "Artists and artisans across different cultures have used bamboo to create stunning sculptures.",
                "Intricate weavings, functional furniture, and even home items like spoons, cups, plates, chopping boards, etc."
              ].map((text, index) => (
                <li key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FaLeaf className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-4" />
                  <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
