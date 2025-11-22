import Link from 'next/link';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.heading}>Studio Photo 79</h3>
            <p className={styles.text}>
              Adelaide wedding photographer capturing refined, timeless moments for modern day lovers.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <nav className={styles.links}>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/featured">Featured Weddings</Link>
              <Link href="/investment">Investment</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Follow Us</h4>
            <div className={styles.social}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Studio Photo 79. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
