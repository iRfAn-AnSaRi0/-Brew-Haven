import { Coffee, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Menu", "Gallery", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-2xl font-bold text-amber-400 cursor-pointer drop-shadow-[0_5px_15px_rgba(251,191,36,0.4)]"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Coffee size={26} />
          </motion.div>
          Brew Haven
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-medium text-white">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="relative group transition duration-300"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Button */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden backdrop-blur-xl bg-black/90 text-white flex flex-col items-center gap-8 py-8 text-lg"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={`#${link.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setOpen(false)}
                className="hover:text-amber-400 transition"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;