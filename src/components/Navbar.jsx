import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/innovator" },
    { name: "Product", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-xl font-bold text-emerald-800">
              Box7 <span className="text-emerald-600">BAMBOO</span> Art Ent
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-emerald-800 text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Simple Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-emerald-800 p-2">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


