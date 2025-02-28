import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in <span className="text-emerald-300">Touch</span>
          </h4>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit} 
                className="relative backdrop-blur-xl bg-white/20 rounded-2xl p-8 
                         shadow-[0_8px_32px_0_rgba(5,150,105,0.37)] 
                         border border-emerald-200/20">
            <div className="space-y-6">
              <div className="form-group">
                <label className="block text-emerald-100 text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg 
                           bg-white/10 backdrop-blur-sm
                           border border-emerald-200/20 
                           text-white placeholder-emerald-200/70
                           focus:outline-none focus:ring-2 focus:ring-emerald-400/50
                           focus:border-transparent 
                           transition duration-200"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="block text-emerald-100 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg 
                           bg-white/10 backdrop-blur-sm
                           border border-emerald-200/20 
                           text-white placeholder-emerald-200/70
                           focus:outline-none focus:ring-2 focus:ring-emerald-400/50
                           focus:border-transparent 
                           transition duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="block text-emerald-100 text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg 
                           bg-white/10 backdrop-blur-sm
                           border border-emerald-200/20 
                           text-white placeholder-emerald-200/70
                           focus:outline-none focus:ring-2 focus:ring-emerald-400/50
                           focus:border-transparent 
                           transition duration-200"
                  rows="5"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 
                         hover:from-emerald-500 hover:to-emerald-600 
                         text-white font-medium py-3 px-6 rounded-lg 
                         transition duration-300 transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400 
                         focus:ring-offset-2 focus:ring-offset-emerald-900 
                         shadow-lg shadow-emerald-500/25"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
