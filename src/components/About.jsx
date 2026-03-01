// import React from 'react'
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         <img
//           src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
//           alt="Cafe"
//           className="rounded-xl shadow-lg"
//         />

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-amber-700">
//             Our Story
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             At Brew Haven, we serve handcrafted coffee made from premium beans.
//             Our café is designed to be your second home — warm, welcoming, and
//             filled with rich aroma.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";
import { Coffee, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden"
    >
      {/* Background Glow Accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
            alt="Cafe Interior"
            className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-700"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-amber-400">
            <Sparkles size={16} />
            Our Story
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-[0_5px_20px_rgba(251,191,36,0.25)]">
            Crafted With Passion, <br /> Served With Love ☕
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            At <span className="text-amber-400 font-semibold">Brew Haven</span>, 
            we believe coffee is more than a drink — it’s an experience. 
            From ethically sourced premium beans to handcrafted brewing 
            techniques, every cup tells a story.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Designed as your second home, our café blends warm interiors,
            soft lighting, and the comforting aroma of fresh espresso —
            creating moments worth savoring.
          </p>

          {/* Signature Element */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex items-center gap-3 pt-4 text-amber-400"
          >
            <Coffee size={22} />
            <span className="tracking-wide text-sm uppercase">
              Premium Beans • Artisan Brewing • Cozy Atmosphere
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;