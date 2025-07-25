import styles from '@/styles/components/Photo.module.scss';

export default function Photo() {
  return (
    <section className={styles.photo} id="photo">
      <h2 className={styles.title}>Что ждёт меня на пути?</h2>
      <div className={styles.imageWrapper}>
        <img src="/Photo/image.png" alt="Природа" className={styles.image} />
      </div>
      <p className={styles.caption}>
        Межгалактические порты и бесконечные просторы вселенной
      </p>
    </section>
  );
}
