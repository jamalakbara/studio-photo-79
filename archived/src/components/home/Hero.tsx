"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Studio Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div
        style={{ opacity: isMounted ? opacity : 1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mix-blend-difference">
          STUDIO <br className="md:hidden" />
          PHOTO 79
        </h1>
        <p className="mt-6 text-sm md:text-base tracking-[0.2em] uppercase text-white/80">
          Capturing the Essence of Time
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: isMounted ? opacity : 1 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}

