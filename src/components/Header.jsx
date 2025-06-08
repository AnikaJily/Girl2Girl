'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          ЛОГО
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/volunteer">Волонтёрство</Link>
        </nav>

        {/* Call to action */}
        <div>
          <Button className={styles.helpButton}>
            Мне нужна помощь
          </Button>
        </div>
      </div>
    </header>
  );
}
