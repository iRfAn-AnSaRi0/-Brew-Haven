import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-amber-500/30 bg-white/5 backdrop-blur-md text-amber-400 text-sm tracking-widest uppercase mb-6">
            <Phone size={18} className="text-amber-400" />
            Get in Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            We’d love to hear from you! Whether it’s a question about our café,
            menu, or booking a table — we’re here to help.
          </p>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Premium Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-amber-500/20 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Circles */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-amber-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-amber-700/10 rounded-full blur-[100px]"></div>

            {[{
              icon: <MapPin size={20} />,
              text: "MG Road, City Center",
            }, {
              icon: <Phone size={20} />,
              text: "+91 98765 43210",
            }, {
              icon: <Mail size={20} />,
              text: "contact@brewhaven.com",
            }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="flex items-center gap-4 text-amber-400 hover:scale-105 transition transform"
              >
                <div className="p-4 bg-amber-500/20 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Form Card */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-amber-500/20 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-amber-700/10 rounded-full blur-[100px]"></div>

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-4 rounded-xl bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            ></textarea>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 rounded-xl transition shadow-xl">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;