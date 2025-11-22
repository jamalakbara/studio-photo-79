import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Studio Photo 79"
            width={180}
            height={60}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/featured">Featured Weddings</Link>
          <Link href="/investment">Investment</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className={styles.menuButton} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
