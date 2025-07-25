import styles from '@/styles/components/Frame.module.scss';

export default function Frame() {
  return (
      <section className={styles.content}>
        <div className={styles.text}>
          <h1>Плотинка лесная отборная со вкусом подземного ручейка</h1>
          <p>
            Заводская плотина в Екатеринбурге была построена в 1723 году из уральской лиственницы,
            которая не гниет в воде, а со временем лишь каменеет и становится крепче. 
            В создании плотинки принял деятельное участие российский военный инженер В. И. де Геннин. 
            <br />
            <br />
            С этого места началось всё строительство города. Одновременно стали возводить крепость, 
            защищающую будущий завод от набегов башкир, на чьих землях он и строился.
          </p>
        </div>

        <div className={styles.image}>
          <div className={styles.illustration}>
            <img  src="/Frame/illustration.svg" alt="illustration" />
          </div>
        </div>
      </section>
  );
}
