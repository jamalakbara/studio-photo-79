"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            CAPTURING <br />
            THE UNSEEN
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-white/70 font-sans leading-relaxed"
        >
          <p>
            Studio Photo 79 is a creative sanctuary where light and shadow dance to reveal the hidden essence of our subjects. We believe in the power of the image to transcend time.
          </p>
          <p>
            Specializing in high-fashion, editorial, and portrait photography, our approach is minimalist yet profound, stripping away the unnecessary to focus on the raw beauty of the moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
