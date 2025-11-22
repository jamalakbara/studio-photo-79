"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { clsx } from "clsx";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference text-white"
    >
      <Link href="/" className="relative w-32 h-10">
        <Image
          src="/logo.png"
          alt="Studio Photo 79"
          fill
          className="object-contain object-left invert"
          priority
        />
      </Link>

      <nav className="hidden md:flex gap-8 font-sans text-sm tracking-widest uppercase">
        <Link href="#work" className="hover:opacity-70 transition-opacity">
          Work
        </Link>
        <Link href="#about" className="hover:opacity-70 transition-opacity">
          About
        </Link>
        <Link href="#contact" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
      </nav>

      <button className="md:hidden uppercase text-sm tracking-widest">
        Menu
      </button>
    </motion.header>
  );
}
