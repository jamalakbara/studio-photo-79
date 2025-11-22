"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/hero-bg.png",
  "/logo.png", // Placeholder, ideally we'd have more images
  "/hero-bg.png",
  "/hero-bg.png",
  "/logo.png",
  "/hero-bg.png",
];

export default function Gallery() {
  return (
    <section id="work" className="py-24 px-4 md:px-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative w-full overflow-hidden group"
          >
            <div className="relative w-full aspect-[3/4] bg-white/5">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
