import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="sticky top-0 p-6 flex justify-between items-center bg-green-200 z-50">
      <div>
        <h2 className="text-xl font-bold">Box7 Bamboo Art Ent</h2>
      </div>
      <div className="hidden md:flex justify-evenly gap-8 lg:gap-16">
        <h4 className="text-lg md:text-xl font-bold"><Link to="product">Home</Link></h4>
        <h4 className="text-lg md:text-xl font-bold"><Link to="innovator">About</Link></h4>
        <h4 className="text-lg md:text-xl font-bold"><Link to="products">Product</Link></h4>
        <h4 className="text-lg md:text-xl font-bold"><Link to="contact">Contact</Link></h4>
      </div>
      <div className="md:hidden">
        <button className="text-xl font-bold">☰</button>
      </div>
    </div>
);
};

export default Navbar;


