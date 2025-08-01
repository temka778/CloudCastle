import Image from 'next/image';
import styles from '@/styles/components/Photo.module.scss';

export default function Photo() {
  return (
    <section className={styles.content} id="photo">
      <h2 className={styles.title}>Что ждёт за плотинкой</h2>
      <div className={styles.imageWrapper}>
        <Image
          src="/Photo/image.png"
          alt="Природа"
          width={1272}
          height={616}
          className={styles.image}
          priority
          style={{ width: '100%', height: 'auto', borderRadius: 'inherit' }}
        />
      </div>
      <p className={styles.caption}>
        Межгалактические порты и бесконечные просторы вселенной
      </p>
    </section>
  );
}
