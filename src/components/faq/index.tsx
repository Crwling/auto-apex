'use client';

import styles from './faq.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import XMark from '../../../public/assets/x-mark';

const FAQ_DATA = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  }
]


const FAQ = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq');

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

    const renderAnswer = (option: any, idx: number) => (
    <div
      className={clsx(styles.wrapper, { [styles.open]: openIndex === idx })}
      key={option.id}
      onClick={() => handleToggle(idx)}
      role="button"
      aria-expanded={openIndex === idx}
    >
      <h3>
        <div className={styles.question}>{t(`question-${option.id}`)}</div>
        <XMark  className={clsx(styles.icon)}/>
      </h3>
      {openIndex === idx && (
        <p className={styles.answer}>{t(`answer-${option.id}`)}</p>
      )}
    </div>
  );

  return (
    <div id='faq' className={styles.container}>
      <h2 className={styles.heading}>{t('head')}</h2>
      <div className={styles.grid}>
        {FAQ_DATA.map(renderAnswer)}
      </div>
    </div>
  );
}

export default FAQ;
