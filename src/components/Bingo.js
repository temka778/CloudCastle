'use client';

import { useState } from 'react';
import styles from '@/styles/components/Bingo.module.scss';

export default function Bingo() {
  const cards = [
    {
      front: { title: 'Физика', image: '/Bingo/card1.svg' },
      back: { subtitle: 'Фи́зика — область естествознания: наука о наиболее общих законах природы, о материи, её структуре, движении и правилах трансформации.' }
    },
    {
      front: { title: 'Литература', image: '/Bingo/card2.svg' },
      back: { subtitle: 'Литература — в широком смысле слова совокупность любых письменных текстов. Чаще всего под литературой понимают художественную литературу, то есть литературу как вид искусства.' }
    },
    {
      front: { title: 'Искусство', image: '/Bingo/card3.svg' },
      back: { subtitle: 'Иску́сство — одна из наиболее общих категорий эстетики, искусствознания и художественной практики.' }
    },
    {
      front: { title: 'Математика', image: '/Bingo/card4.svg' },
      back: { subtitle: 'Матема́тика — точная формальная наука, первоначально исследовавшая количественные отношения и пространственные формы.' }
    },
    {
      front: { title: 'Химия', image: '/Bingo/card5.svg' },
      back: { subtitle: 'Хи́мия — одна из важнейших и обширных областей естествознания, наука, изучающая вещества, также их состав и строение, их свойства, зависящие от состава и строения, их превращения, ведущие к изменению состава — химические реакции, а также законы и закономерности, которым эти превращения подчиняются.' }
    },
    {
      front: { title: 'История', image: '/Bingo/card6.svg' },
      back: { subtitle: 'Исто́рия, историческая наука — наука, научная (академическая) дисциплина, предметом изучения которой является человеческое прошлое.' }
    },
  ];

  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  const toggleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className={styles.bingo} id="bingo">
      <h2 className={styles.title}>Открой все карточки<br />и собери свое бинго</h2>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${flipped[index] ? styles.flipped : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className={styles.inner}>
              <div className={styles.front}>
                <div className={styles.frontText}>{card.front.title}</div>
                <img src={card.front.image} alt={card.front.title} />
              </div>
              <div className={styles.back}>
                <div className={styles.backContent}>
                  <p>{card.back.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
