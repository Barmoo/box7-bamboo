import React from "react";

const Showcase = () => {
  const products = [
    {
      name: "Bamboo Toothbrush",
      description: "Eco-friendly bamboo toothbrush with soft bristles.",
      imageUrl: "/public/images/image-1.jpg"
    },
    {
      name: "Bamboo Straw",
      description: "Reusable bamboo straw, perfect for any drink.",
      imageUrl: "/public/images/image-2.jpg"
    },
    {
      name: "Bamboo Cutlery Set",
      description: "Sustainable bamboo cutlery set for on-the-go meals.",
      imageUrl: "/public/images/image-3.jpg"
    }
  ];

  return (
    <div className="p-6 flex flex-col justify-center items-center align-middle border-b-2 bg-gray-100">
      <h4 className="text-4xl font-bold mb-6">Product / Service Showcase</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
            <h5 className="text-2xl font-bold mb-2">{product.name}</h5>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
