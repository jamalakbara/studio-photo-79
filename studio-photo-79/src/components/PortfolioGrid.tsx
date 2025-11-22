'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './PortfolioGrid.module.css';

const portfolioItems = [
  { id: 1, src: '/portfolio-1.png', alt: 'Bride Portrait', tall: true },
  { id: 2, src: '/portfolio-2.png', alt: 'Groom Portrait', tall: false },
  { id: 3, src: '/portfolio-3.png', alt: 'Couple Walking', tall: false },
  { id: 4, src: '/portfolio-1.png', alt: 'Wedding Details', tall: true },
  { id: 5, src: '/portfolio-2.png', alt: 'Reception', tall: false },
  { id: 6, src: '/portfolio-3.png', alt: 'Intimate Moment', tall: true },
];

function PortfolioItem({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`${styles.item} ${item.tall ? styles.tall : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.description}>
            A collection of our finest wedding photography moments
          </p>
        </motion.div>

        <div className={styles.grid}>
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
