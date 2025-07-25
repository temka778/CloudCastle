'use client';

import { useState } from 'react';
import styles from '@/styles/components/Marshrut.module.scss';

export default function Marshrut() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { img: '/Marshrut/tab1.svg', text: 'Как получить заказ?' },
    { img: '/Marshrut/tab2.svg', text: 'Как оплатить заказ?' },
    { img: '/Marshrut/tab3.svg', text: 'Как обменять заказ?' },
  ];

  const cards = [
    { title: 'Физика', subtitle: 'Шокирующая правда о преломлении света' },
    { title: 'Литература', subtitle: 'О чем молчат картины: великие художники' },
    { title: 'Искусство', subtitle: 'Пушкин наше всё!' },
    { title: 'Математика', subtitle: 'Шокирующая правда о преломлении света' },
    { title: 'Химия', subtitle: 'О чем молчат картины: великие художники' },
    { title: 'История', subtitle: 'Пушкин наше всё!' },
  ];

  return (
    <section className={styles.marshrut} id="marshrut">
      <h2 className={styles.title}>В первый день вас ждет<br />интересный маршрут</h2>
      <p className={styles.subtitle}>
        Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург,
        так прилежащие к нему районы Свердловской области.
      </p>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <img src={tab.img} alt={`Tab ${index + 1}`} />
            <span>{tab.text}</span>
          </div>
        ))}
      </div>

      <div className={styles.cards}>
        {cards.map((card, i) => (
          <div key={i} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
