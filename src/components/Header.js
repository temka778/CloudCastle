import { useState } from 'react';
import styles from '@/styles/components/Header.module.scss';
import scrollToSection from '@/utils/scrollToSection';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.header} header`}>
      <div className={styles.logo}>
        <a href="/" onClick={(e) => scrollToSection(e, '#', closeMenu)}>
          <img src="/Header/logo.svg" alt="logo" />
        </a>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <a href="#photo" onClick={(e) => scrollToSection(e, '#photo', closeMenu)}>Что ждёт</a>
        <a href="#marshrut" onClick={(e) => scrollToSection(e, '#marshrut', closeMenu)}>Маршрут</a>
        <a href="#bingo" onClick={(e) => scrollToSection(e, '#bingo', closeMenu)}>Бинго</a>
        <a href="#faq" onClick={(e) => scrollToSection(e, '#faq', closeMenu)}>FAQs</a>
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
