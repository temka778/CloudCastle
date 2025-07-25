import styles from '@/styles/components/Header.module.scss';

export default function Header() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const url = new URL(window.location);
    url.hash = '';
    window.history.pushState({}, '', url);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/" onClick={scrollToTop}>
          <img src="/Header/logo.svg" alt="logo" />
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="#photo">Что ждёт</a>
        <a href="#marshrut">Маршрут</a>
        <a href="#bingo">Бинго</a>
        <a href="#faq">FAQs</a>
      </nav>
    </header>
  );
}
