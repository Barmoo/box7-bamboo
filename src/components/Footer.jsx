import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaTiktok } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  // Updated footer links with correct paths
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/innovator" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-emerald-900/90 to-emerald-800/90 backdrop-blur-lg">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-green-400/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-4">
              <span className="text-emerald-400">Box7</span> BAMBOO Art Ent
            </h2>
            <p className="text-emerald-100/80 text-sm">
              Crafting sustainable bamboo products with artistic excellence and environmental consciousness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-emerald-100/80 hover:text-emerald-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {[
                { icon: FaFacebook, link: "https://www.facebook.com/share/1EBS6Uu1N8/" },
                { icon: FaInstagram, link: "https://www.instagram.com/box7bambooartenterprise?igsh=MTJmbHI2eGw4ZTVsNg==" },
                { icon: FaTiktok, link: "" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full bg-white/10 hover:bg-emerald-400/20 transition-colors duration-300"
                >
                  <social.icon 
                    size={20} 
                    className="text-white group-hover:text-emerald-400 transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-emerald-100/80 text-sm">
          <p>© 2025 YAI - Box7 BAMBOO Art Ent. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <FaHeart className="mx-1 text-emerald-400 animate-pulse" />
            <span>in Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
