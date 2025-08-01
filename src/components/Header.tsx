'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';
import scrollToSection from '@/utils/scrollToSection';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleScroll = (e: MouseEvent<HTMLElement>, id: string) => {
    scrollToSection(e, id, closeMenu);
  };

  return (
    <header className={`${styles.header} header`}>
      <div className={styles.logo}>
        <Link href="/" onClick={(e) => handleScroll(e, '#')}>
          <Image
            src="/Header/logo.svg"
            alt="Логотип"
            width={95}
            height={27}
            priority
          />
        </Link>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <Link href="#photo" onClick={(e) => handleScroll(e, '#photo')}>Что ждёт</Link>
        <Link href="#marshrut" onClick={(e) => handleScroll(e, '#marshrut')}>Маршрут</Link>
        <Link href="#bingo" onClick={(e) => handleScroll(e, '#bingo')}>Бинго</Link>
        <Link href="#faq" onClick={(e) => handleScroll(e, '#faq')}>FAQs</Link>
      </nav>

      <button
        className={`${styles.burger} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
        onClick={closeMenu}
        role="button"
        tabIndex={0}
        aria-label="Закрыть меню"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') closeMenu();
        }}
      />
    </header>
  );
}
