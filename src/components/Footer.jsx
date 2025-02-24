import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center bg-green-200">
      <div className="flex space-x-4 mb-2">
        <a href="" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
          <FaFacebook size={24} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
          <FaTwitter size={24} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-black text-sm">© 2025 YAI - Young Adult Innovators. All rights reserved.</p>
    </div>
  );
};

export default Footer;
