import styles from '@/styles/components/Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      © {year} CLOUD CASTLE
    </footer>
  );
}
