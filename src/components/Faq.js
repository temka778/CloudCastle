import React, { useState } from 'react';
import styles from '@/styles/components/Faq.module.scss';
import Image from 'next/image';

const faqData = [
  {
    question: 'Что такое современный поиск?',
    answer: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности пользователя.',
  },
  {
    question: 'Понравится ли ребятам из Cloud Castle моя  работа?',
    answer: 'Конечно! Я уверен, что моя работа будет высоко оценена командой Cloud Castle. Я стремлюсь к качеству и инновациям, что идеально соответствует их стандартам.',
  },
  {
    question: 'Устроюсь ли я в Cloud Castle?',
    answer: 'Конечно! Я лучше, чем кто-либо другой. Я нужен команде Cloud Castle, потому что я обладаю уникальными навыками и опытом, которые помогут нам достичь новых высот.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <h2 className={styles.title}>Ещё вопросы?</h2>
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.header} onClick={() => toggle(index)}>
              <span className={styles.span}>{item.question}</span>
              <Image
                src={`/Faq/${activeIndex === index ? 'vector2.svg' : 'vector1.svg'}`}
                alt="toggle"
                width={16}
                height={16}
                className={`${styles.icon} ${activeIndex === index ? styles.open : ''}`}
              />
            </div>
            <div
              className={`${styles.body} ${
                activeIndex === index ? styles.expanded : ''
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
