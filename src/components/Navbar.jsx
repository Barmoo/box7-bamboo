import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items with correct paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/innovator" },
    { name: "Product", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-lg shadow-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-emerald-800' : 'text-white'
            }`}>
              <span className="relative inline-block">
                Box7
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>{" "}
              <span className="text-emerald-400">BAMBOO</span> Art Ent
            </h2>
      </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group text-lg font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-800' : 'text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
      </div>

          {/* Mobile Menu Button */}
      <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`group p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-emerald-800 hover:bg-emerald-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 transform transition-transform duration-300 ${
                  isScrolled ? 'bg-emerald-800' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 transition-opacity duration-300 ${
                  isScrolled ? 'bg-emerald-800' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 transform transition-transform duration-300 ${
                  isScrolled ? 'bg-emerald-800' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className={`py-4 space-y-2 ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-lg font-medium hover:bg-emerald-400/10 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
      </div>
    </div>
    </nav>
);
};

export default Navbar;


