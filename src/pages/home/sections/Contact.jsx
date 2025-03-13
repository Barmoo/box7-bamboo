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
    <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-8 px-4">
      {/* Refined background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Get in <span className="text-emerald-300">Touch</span>
          </h4>
          <p className="text-emerald-100 text-xs md:text-sm max-w-md mx-auto">
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* More Compact Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} 
                  className="backdrop-blur-xl bg-white/10 rounded-lg p-4 
                           shadow-lg border border-emerald-200/20">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="form-group">
                    <label className="block text-emerald-100 text-xs font-medium mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 rounded-md 
                               bg-white/5 backdrop-blur-sm
                               border border-emerald-200/20 
                               text-white text-sm placeholder-emerald-200/50
                               focus:outline-none focus:ring-1 focus:ring-emerald-400/50
                               focus:border-transparent 
                               transition duration-200"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-emerald-100 text-xs font-medium mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 rounded-md 
                               bg-white/5 backdrop-blur-sm
                               border border-emerald-200/20 
                               text-white text-sm placeholder-emerald-200/50
                               focus:outline-none focus:ring-1 focus:ring-emerald-400/50
                               focus:border-transparent 
                               transition duration-200"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="block text-emerald-100 text-xs font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 rounded-md 
                             bg-white/5 backdrop-blur-sm
                             border border-emerald-200/20 
                             text-white text-sm placeholder-emerald-200/50
                             focus:outline-none focus:ring-1 focus:ring-emerald-400/50
                             focus:border-transparent 
                             transition duration-200"
                    rows="3"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 
                           hover:from-emerald-500 hover:to-emerald-600 
                           text-white text-xs font-medium py-1.5 px-4 rounded-md 
                           transition duration-300 transform hover:scale-[1.02] 
                           focus:outline-none focus:ring-1 focus:ring-emerald-400 
                           shadow-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* More Compact Map */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[280px] backdrop-blur-xl bg-white/10 rounded-lg overflow-hidden
                          shadow-lg border border-emerald-200/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.0497000980354!2d-2.304767187405228!3d5.5572143453833664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdd3beba4578387%3A0x258b69a55b5845f6!2sBOX7%20Bamboo%20Art%20Enterprise!5e0!3m2!1sen!2sgh!4v1741862836638!5m2!1sen!2sgh"
                className="absolute inset-0 w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-2 p-2 backdrop-blur-xl bg-white/10 rounded-md border border-emerald-200/20">
              <p className="text-emerald-100 text-xs">
                <strong className="text-emerald-300">Visit Us:</strong> BOX7 Bamboo Art Enterprise, Sekondi-Takoradi, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
