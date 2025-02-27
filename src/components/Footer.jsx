import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className="p-4 flex flex-col justify-center items-center bg-green-600 text-center">
        <div className="flex space-x-4 mb-2">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
            <FaFacebook size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
            <FaTwitter size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
            <FaInstagram size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
        <p className="text-black text-sm sm:text-base">© 2025 YAI - Young Africa Innovates. All rights reserved.</p>
      </div>
  );
};

export default Footer;
