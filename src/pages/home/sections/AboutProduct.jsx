import React from "react";
import { FaLeaf } from 'react-icons/fa';

const AboutProduct = () => {
  return (
    <div className="bg-cover p-6 flex flex-col justify-center items-center align-middle h-[60vh] border-b-2 bg-gray-100">
      <h4 className="text-4xl font-bold mb-4 text-center text-gray-800">About the Products and / or Services</h4>
      <ul className="text-xl text-gray-600 max-w-2xl">
        <li className="flex items-center mb-2">
          <FaLeaf className="text-green-500 mr-2" />
          Bamboo, a fast-growing and sustainable plant, has been a versatile material in art and craftsmanship for centuries.
        </li>
        <li className="flex items-center mb-2">
          <FaLeaf className="text-green-500 mr-2" />
          Artists and artisans across different cultures have used bamboo to create stunning sculptures.
        </li>
        <li className="flex items-center mb-2">
          <FaLeaf className="text-green-500 mr-2" />
          Intricate weavings, functional furniture, and even home items like spoons, cups, plates, chopping boards, etc.
        </li>
      </ul>
    </div>
  );
};

export default AboutProduct;
