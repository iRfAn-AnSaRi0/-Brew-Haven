import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const images = [
  "photo-1511920170033-f8396924c348",
  "photo-1498804103079-a6351b050096",
  "photo-1470337458703-46ad1756a187",
  "photo-1509042239860-f550ce710b93",
  "photo-1521017432531-fbd92d768814",
  "photo-1504674900247-0877df9cc836",
  "photo-1554118811-1e0d58224f24",
  "photo-1501339847302-ac426a4a7cbb",
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden"
    >
      {/* Decorative Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Glow Effect Behind */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full"></div>
          </div>

          {/* Premium Badge */}
          <div className="relative inline-flex items-center gap-3 px-6 py-2 rounded-full border border-amber-500/30 bg-white/5 backdrop-blur-md text-amber-400 text-sm tracking-widest uppercase mb-6">
            <Camera size={18} className="text-amber-400" />
            Moments & Ambience
          </div>

          {/* Main Heading */}
          <h2 className="relative text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            Our Gallery
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-6 gap-3">
            <div className="w-12 h-[2px] bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-12 h-[2px] bg-amber-500"></div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Step inside our cozy atmosphere, handcrafted beverages, and
            unforgettable café experiences crafted with passion and perfection.
          </p>
        </motion.div>

        {/* Image Grid */}
       {/* Image Grid */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  className="grid grid-cols-2 md:grid-cols-4 gap-6"
>
  {images.map((id, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative group overflow-hidden rounded-2xl shadow-xl 
        ${index % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Image */}
      <img
        src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`}
        alt="Cafe"
        className="w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
      />

      {/* Premium Golden Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-400/40 transition duration-500"></div>

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Hover Text */}
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-500">
        <p className="text-sm text-amber-300 font-medium tracking-wide">
          Brew Haven Experience
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] bg-amber-500 mx-auto mt-16"
        ></motion.div>
      </div>
    </section>
  );
};

export default Gallery;
