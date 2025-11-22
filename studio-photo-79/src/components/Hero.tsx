'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/hero.png"
          alt="Wedding Photography"
          fill
          priority
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay}></div>
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className={styles.title}>
          Refined, Timeless
          <br />
          Wedding Photography
        </h1>
        <p className={styles.subtitle}>
          Capturing modern day lovers with elegance and artistry
        </p>
      </motion.div>
    </section>
  );
}
