import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="sticky top-0 p-6 flex justify-between items-center bg-green-500 z-50">
      <div>
        <h2 className="text-xl font-bold text-white">Box7 BAMBOO Art Ent</h2>
      </div>
      <div className="hidden md:flex justify-evenly gap-8 lg:gap-16">
        <h4 className="text-lg md:text-xl font-bold text-white"><Link to="product" className="text-white">Home</Link></h4>
        <h4 className="text-lg md:text-xl font-bold text-white"><Link to="innovator" className="text-white">About</Link></h4>
        <h4 className="text-lg md:text-xl font-bold text-white"><Link to="products" className="text-white">Product</Link></h4>
        <h4 className="text-lg md:text-xl font-bold text-white"><Link to="contact" className="text-white">Contact</Link></h4>
      </div>
      <div className="md:hidden">
        <button className="text-xl font-bold text-white">☰</button>
      </div>
    </div>
);
};

export default Navbar;


