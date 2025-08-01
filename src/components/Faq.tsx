'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/Faq.module.scss';
import Image from 'next/image';
import { onKeyDownEnterOrSpace } from '@/utils/keyboard';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'Что такое современный поиск?',
    answer: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности пользователя.',
  },
  {
    question: 'Понравится ли ребятам из Cloud Castle моя работа?',
    answer: 'Конечно! Я уверен, что моя работа будет высоко оценена командой Cloud Castle. Я стремлюсь к качеству и инновациям, что идеально соответствует их стандартам.',
  },
  {
    question: 'Устроюсь ли я в Cloud Castle?',
    answer: 'Конечно! Я лучше, чем кто-либо другой. Я нужен команде Cloud Castle, потому что я обладаю уникальными навыками и опытом, которые помогут нам достичь новых высот.',
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq} id="faq">
      <h2 className={styles.title}>Ещё вопросы?</h2>
      <div className={styles.accordion}>
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className={styles.item}>
              <div
                className={styles.header}
                onClick={() => toggle(index)}
                onKeyDown={onKeyDownEnterOrSpace(() => toggle(index))}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`faq-body-${index}`}
              >
                <span className={styles.span}>{item.question}</span>
                <Image
                  src="/Faq/vector.svg"
                  alt="toggle"
                  width={16}
                  height={16}
                  className={`${styles.icon} ${isOpen ? styles.open : ''}`}
                />
              </div>
              <div
                id={`faq-body-${index}`}
                className={`${styles.body} ${isOpen ? styles.expanded : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
