


// import React from "react";
// import { motion } from "framer-motion";
// import { Coffee, CakeSlice, Sparkles } from "lucide-react";

// const menuItems = [
//   { name: "Cappuccino", price: "₹180", icon: Coffee },
//   { name: "Latte", price: "₹200", icon: Coffee },
//   { name: "Cold Coffee", price: "₹220", icon: Coffee },
//   { name: "Chocolate Cake", price: "₹150", icon: CakeSlice },
// ];

// const Menu = () => {
//   return (
//     <section
//       id="menu"
//       className="relative py-28 px-6 bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />

//       <div className="max-w-6xl mx-auto text-center relative z-10">

//         {/* Section Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-amber-400">
//           <Sparkles size={16} />
//           Signature Selection
//         </div>

//         <h2 className="text-4xl lg:text-5xl font-bold mb-14 drop-shadow-[0_5px_20px_rgba(251,191,36,0.3)]">
//           Our Special Menu ☕
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
//           {menuItems.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-amber-500/20 transition duration-500"
//               >
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 rounded-2xl bg-amber-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

//                 <div className="relative z-10 flex justify-between items-center">

//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-amber-500/10 rounded-full text-amber-400 group-hover:scale-110 transition duration-300">
//                       <Icon size={22} />
//                     </div>

//                     <h3 className="text-xl font-semibold tracking-wide">
//                       {item.name}
//                     </h3>
//                   </div>

//                   <span className="text-amber-400 font-bold text-lg">
//                     {item.price}
//                   </span>
//                 </div>

//                 {/* Divider Line */}
//                 <div className="mt-6 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;



import React from "react";
import { motion } from "framer-motion";
import { Coffee, CakeSlice, Sparkles, Star } from "lucide-react";

const menuItems = [
  { name: "Cappuccino", price: "₹180", icon: Coffee, badge: "Popular" },
  { name: "Latte", price: "₹200", icon: Coffee },
  { name: "Cold Coffee", price: "₹220", icon: Coffee, badge: "Chef’s Choice" },
  { name: "Chocolate Cake", price: "₹150", icon: CakeSlice },
];

const Menu = () => {
  return (
    <section
      id="menu"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden"
    >
      {/* Floating Background Glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-amber-600/10 blur-3xl rounded-full"
      />

      {/* Floating Coffee Beans */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 left-1/2 -translate-x-1/2 text-amber-400/20"
      >
        <Coffee size={90} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 right-1/3 text-amber-300/20"
      >
        <CakeSlice size={70} />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-amber-400">
          <Sparkles size={16} />
          Signature Selection
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-14 drop-shadow-[0_5px_20px_rgba(251,191,36,0.3)]">
          Our Special Menu ☕
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-amber-500/20 transition duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-amber-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                <div className="relative z-10 flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-amber-500/10 rounded-full text-amber-400 group-hover:scale-110 transition duration-300">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-semibold tracking-wide">
                        {item.name}
                      </h3>
                    </div>

                    {/* Optional Badge */}
                    {item.badge && (
                      <div className="inline-flex items-center gap-1 text-amber-300 text-xs font-semibold mt-1">
                        <Star size={14} />
                        {item.badge}
                      </div>
                    )}
                  </div>

                  <span className="text-amber-400 font-bold text-lg">
                    {item.price}
                  </span>
                </div>

                {/* Divider Line */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;