import React from "react";

const Showcase = () => {
  const products = [
    {
      name: "Bamboo Ladle",
      description: "Eco-friendly bamboo ladle for stew.",
      imageUrl: "/images/image-5.jpg"
    },
    {
      name: "Bamboo Bowl",
      description: "Heat conductible bowls, perfect for your health.",
      imageUrl: "/images/image-4.jpg"
    },
    {
      name: "Bamboo Cutlery Set",
      description: "Sustainable bamboo cutlery set for on-the-go meals.",
      imageUrl: "/images/image-3.jpg"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-900">
            Our <span className="text-emerald-600">Eco-Friendly</span> Collection
          </h4>
          <p className="text-emerald-700 max-w-2xl mx-auto text-lg">
            Discover our sustainable bamboo products, crafted with care for you and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group relative backdrop-blur-sm bg-white/60 rounded-2xl p-6
                         shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
                         border border-white/20 
                         transform transition-all duration-300 
                         hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/10 transition-colors duration-300 z-10"></div>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              
              <div className="space-y-3">
                <h5 className="text-2xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                  {product.name}
                </h5>
                <p className="text-emerald-700/80">
                  {product.description}
                </p>
                <button className="mt-4 inline-flex items-center px-4 py-2 
                                 bg-emerald-50 border border-emerald-200 
                                 rounded-lg text-emerald-700 
                                 hover:bg-emerald-100 transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
