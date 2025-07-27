import styles from '@/styles/components/Photo.module.scss';

export default function Photo() {
  return (
    <section className={styles.content} id="photo">
      <h2 className={styles.title}>Что ждёт меня на пути?</h2>
      <img src="/Photo/image.png" alt="Природа" className={styles.image} />
      <p className={styles.caption}>
        Межгалактические порты и бесконечные просторы вселенной
      </p>
    </section>
  );
}
