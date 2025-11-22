"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl md:text-6xl mb-8">
          LET'S CREATE
        </h2>
        <p className="text-white/60 mb-12 max-w-xl mx-auto font-sans">
          We are always looking for new faces and creative collaborations.
          Reach out to discuss your next project.
        </p>

        <a
          href="mailto:hello@studiophoto79.com"
          className="inline-block border border-white/20 px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
