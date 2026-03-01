// import React from "react";
// import { Instagram, Facebook, Twitter } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-400 py-10 px-6 border-t border-amber-500/20">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-bold text-amber-400 mb-4">
//             Brew Haven
//           </h3>
//           <p className="text-sm leading-relaxed">
//             Where every cup tells a story. Experience handcrafted coffee,
//             luxury ambience, and unforgettable moments.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">
//             Quick Links
//           </h4>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
//             <li><a href="#menu" className="hover:text-amber-400 transition">Menu</a></li>
//             <li><a href="#gallery" className="hover:text-amber-400 transition">Gallery</a></li>
//             <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
//           </ul>
//         </div>

//         {/* Social & Hours */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">
//             Opening Hours
//           </h4>
//           <p className="text-sm mb-4">
//             Mon - Sun: 8:00 AM – 10:00 PM
//           </p>

//           <div className="flex gap-4">
//             <a href="#" className="hover:text-amber-400 transition">
//               <Instagram size={20} />
//             </a>
//             <a href="#" className="hover:text-amber-400 transition">
//               <Facebook size={20} />
//             </a>
//             <a href="#" className="hover:text-amber-400 transition">
//               <Twitter size={20} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="text-center text-xs text-gray-600 mt-10 border-t border-gray-800 pt-6">
//         © {new Date().getFullYear()} Brew Haven. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 py-16 px-6 overflow-hidden">
      {/* Decorative Glow Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-amber-400 mb-2">Brew Haven</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Where every cup tells a story. Experience handcrafted coffee,
            luxury ambience, and unforgettable moments.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-amber-400 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-amber-400 transition duration-300">
                Menu
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-amber-400 transition duration-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Hours */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-2">Opening Hours</h4>
          <p className="text-sm text-gray-300">Mon - Sun: 8:00 AM – 10:00 PM</p>

          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full bg-amber-500/10 hover:bg-amber-500/30 transition duration-300"
              >
                <Icon size={20} className="text-amber-400" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6 relative z-10">
        © {new Date().getFullYear()} Brew Haven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;