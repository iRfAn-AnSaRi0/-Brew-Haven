import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Sparkles,
  MapPin,
  ArrowDown,
  Bean,
} from "lucide-react";

const Hero = () => {
  const [hideScroll, setHideScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center animate-[cinematicZoom_35s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/80 via-black/60 to-amber-900/40" />

      {/* ===== EXTRA PREMIUM ANIMATIONS ===== */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-10 sm:right-20 text-amber-500 opacity-20"
      >
        <Coffee size={90} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-24 left-6 sm:left-16 w-52 h-52 bg-amber-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 left-10 sm:left-20 text-amber-400 opacity-30"
      >
        <Coffee size={60} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-32 right-10 sm:right-20 text-amber-300 opacity-20"
      >
        <Sparkles size={70} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-40 left-1/3 text-amber-300 opacity-40"
      >
        <Sparkles size={24} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-40 right-1/3 text-amber-200 opacity-30"
      >
        <Sparkles size={20} />
      </motion.div>

      {/* Glass Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/10 border border-white/20 px-6 py-2 rounded-full text-white flex items-center gap-2 shadow-lg text-sm"
      >
        <MapPin size={16} />
        Since 2022 • Premium Café Experience
      </motion.div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex justify-center mb-3"
        >
          <div className="w-20 h-20 bg-white/10 rounded-full blur-2xl" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-40 text-amber-400 opacity-30"
        >
          <Bean size={70} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-48 left-1/4 text-amber-300 opacity-40"
        >
          <Bean size={30} />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_5px_20px_rgba(255,255,255,0.15)]"
        >
          {["Crafted", "Coffee,", "Curated", "Moments"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
          <span className="text-amber-400">☕</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
        >
          Experience artisan brews, elegant interiors, and unforgettable
          flavors in every sip.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#menu"
            className="px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-amber-500/50 hover:scale-105"
          >
            Explore Menu
          </a>

          <a
            href="#reservation"
            className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-full transition duration-300 hover:scale-105"
          >
            Reserve Table
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white transition-opacity duration-500 ${
          hideScroll ? "opacity-0" : "opacity-80"
        }`}
      >
        <span className="text-xs tracking-widest mb-2">SCROLL</span>
        <ArrowDown size={18} />
      </motion.div>

      <style>
        {`
          @keyframes cinematicZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;