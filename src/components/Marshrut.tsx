'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/Marshrut.module.scss';

export default function Marshrut() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { img: '/Marshrut/tab1.svg', text: 'Как получить заказ?' },
    { img: '/Marshrut/tab2.svg', text: 'Как оплатить заказ?' },
    { img: '/Marshrut/tab3.svg', text: 'Как обменять заказ?' },
  ];

  const tabCards = [
    [
      { title: 'Физика', subtitle: 'Шокирующая правда о преломлении света' },
      { title: 'Литература', subtitle: 'О чем молчат картины: великие художники' },
      { title: 'Искусство', subtitle: 'Пушкин — наше всё!' },
      { title: 'Математика', subtitle: 'Шокирующая правда о преломлении света' },
      { title: 'Химия', subtitle: 'О чем молчат картины: великие художники' },
      { title: 'История', subtitle: 'Пушкин — наше всё!' },
    ],
    [
      { title: 'Алгебра', subtitle: 'Раздел математики как обобщение и расширение арифметики' },
      { title: 'Ботаника', subtitle: 'Наука о растениях' },
      { title: 'Астрономия', subtitle: 'Наука о Вселенной, изучающая небесные тела и системы' },
      { title: 'Геометрия', subtitle: 'Раздел математики, изучающий пространственные структуры' },
      { title: 'Генетика', subtitle: 'Раздел биологии, занимающийся изучением генов' },
      { title: 'Электроника', subtitle: 'Наука о взаимодействии электронов с электромагнитными полями' },
    ],
    [
      { title: 'Бойцовский клуб', subtitle: 'Американский психологический триллер по мотивам романа Паланика' },
      { title: 'Меланхолия', subtitle: 'Драматический фильм с элементами фантастики Ларса фон Триера' },
      { title: 'Короли Догтауна', subtitle: 'Биографический драматический фильм Кэтрин Хардвик' },
      { title: 'Матрица', subtitle: 'Американская научно-фантастическая медиафраншиза в жанре киберпанк' },
      { title: 'Эффект бабочки', subtitle: 'Психологический триллер Эрика Бресса' },
      { title: 'Дурное воспитание', subtitle: 'Криминально - драматический фильм Педро Альмодовара' },
    ],
  ];

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(index);
    }
  };

  return (
    <section className={styles.marshrut} id="marshrut">
      <h2 className={styles.title}>
        В первый день вас ждёт<br />интересный маршрут
      </h2>
      <p className={styles.subtitle}>
        Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург,
        так прилежащие к нему районы Свердловской области.
      </p>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-pressed={activeTab === index}
          >
            <Image
              src={tab.img}
              alt={`Иконка для "${tab.text}"`}
              width={300}
              height={200}
            />
            <span>{tab.text}</span>
          </div>
        ))}
      </div>

      <div className={styles.cards}>
        {tabCards[activeTab].map((card, i) => (
          <div key={i} className={styles.card}>
            <h3 key={`${activeTab}-${i}-h3`} className={styles.fadeText}>{card.title}</h3>
            <p key={`${activeTab}-${i}-p`} className={styles.fadeText}>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
