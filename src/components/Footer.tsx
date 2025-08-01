import styles from '@/styles/components/Footer.module.scss';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      © {year} CLOUD CASTLE
    </footer>
  );
};

export default Footer;
