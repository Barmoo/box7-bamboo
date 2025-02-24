import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 p-6 flex justify-between bg-green-200 z-50">
      <div>
        <h2 className="text-xl font-bold">Box7 Bamboo Art Ent</h2>
      </div>
      <div className="flex justify-evenly gap-16">
        <h4 className="text-xl font-bold">Home</h4>
        <h4 className="text-xl font-bold">About</h4>
        <h4 className="text-xl font-bold">Product</h4>
        <h4 className="text-xl font-bold">Contact</h4>
      </div>
    </div>
  );
};

export default Navbar;


