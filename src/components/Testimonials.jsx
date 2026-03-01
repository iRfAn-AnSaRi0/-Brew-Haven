import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Aarav Sharma",
    text: "Absolutely the best coffee experience I’ve had. The ambience feels luxurious and peaceful.",
  },
  {
    name: "Priya Mehta",
    text: "Love the handcrafted cappuccino and the cozy interior. Perfect place to relax or work.",
  },
  {
    name: "Rohan Verma",
    text: "Premium vibe, friendly staff, and amazing desserts. Highly recommended!",
  },
  {
    name: "Sneha Kapoor",
    text: "A hidden gem! The aroma, lighting and comfort make it my favorite place.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700/10 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent mb-16"
        >
          What Our Customers Say
        </motion.h2>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-amber-500/20 transition"
          >
            <ChevronLeft />
          </button>

          {/* Testimonial Card */}
          <div className="w-full px-10 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md border border-amber-500/20 rounded-2xl p-10 shadow-xl"
              >
                <Quote className="text-amber-400 mb-6 mx-auto" size={36} />

                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "{reviews[index].text}"
                </p>

                {/* Stars */}
                <div className="flex justify-center mt-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <h4 className="mt-6 font-semibold text-amber-300">
                  — {reviews[index].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-amber-500/20 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                index === i ? "bg-amber-400 scale-125" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
