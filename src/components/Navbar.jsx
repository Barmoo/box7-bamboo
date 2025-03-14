import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/Bamboo logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/innovator" },
    { name: "Product", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Container with Text */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative w-auto h-10 overflow-hidden">
                <img 
                  src={logo} 
                  alt="bamboo art" 
                  className="h-full w-auto object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-emerald-800 leading-tight">
                  Box7
                  <span className="text-emerald-600"> BAMBOO</span>
                </span>
                <span className="text-sm font-medium text-emerald-700">Art Enterprise</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-emerald-800 text-lg font-medium 
                         hover:text-emerald-600 transition-colors duration-300
                         relative after:absolute after:bottom-0 after:left-0 
                         after:w-full after:h-0.5 after:bg-emerald-600
                         after:origin-left after:scale-x-0 
                         hover:after:scale-x-100 after:transition-transform"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Enhanced Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group p-2 rounded-lg hover:bg-emerald-50/50 
                       transition-all duration-300 ease-in-out"
              aria-label="Menu"
            >
              <div className="relative flex overflow-hidden items-center justify-center w-7 h-7">
                <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300 origin-center overflow-hidden">
                  <span className={`bg-emerald-700 h-[2px] w-7 transform transition-transform duration-300 ease-in-out 
                                ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                  <span className={`bg-emerald-700 h-[2px] w-7 transform transition-transform duration-300 ease-in-out 
                                ${isMenuOpen ? "scale-0" : ""}`}></span>
                  <span className={`bg-emerald-700 h-[2px] w-7 transform transition-transform duration-300 ease-in-out 
                                ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/50 backdrop-blur-sm rounded-b-lg`}>
          <div className="py-3 space-y-0.5 flex flex-col items-end px-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="group w-40 text-right relative overflow-hidden"
              >
                <div className="relative px-4 py-2.5 flex items-center justify-end
                             bg-gradient-to-l from-emerald-50/50 to-transparent
                             hover:from-emerald-100/50 hover:to-emerald-50/30
                             rounded-lg transition-colors duration-300">
                  <span className="text-base font-medium text-emerald-800 
                               group-hover:text-emerald-600 transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


