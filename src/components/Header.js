import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';
import scrollToSection from '@/utils/scrollToSection';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.header} header`}>
      <div className={styles.logo}>
        <Link href="/" onClick={(e) => scrollToSection(e, '#', closeMenu)}>
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
        <Link href="#photo" onClick={(e) => scrollToSection(e, '#photo', closeMenu)}>Что ждёт</Link>
        <Link href="#marshrut" onClick={(e) => scrollToSection(e, '#marshrut', closeMenu)}>Маршрут</Link>
        <Link href="#bingo" onClick={(e) => scrollToSection(e, '#bingo', closeMenu)}>Бинго</Link>
        <Link href="#faq" onClick={(e) => scrollToSection(e, '#faq', closeMenu)}>FAQs</Link>
      </nav>

      <button
        className={`${styles.burger} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
