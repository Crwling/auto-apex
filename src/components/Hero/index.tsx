'use client';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Button from '../Button';
import styles from './hero.module.scss';

const heroSlides = [
  {
    src: '/assets/interior-1.png',
    title: 'description-h1',
    subtitle: 'description-h3',
    buttonText: 'button',
  },
  {
    src: '/assets/interior-2.png',
    title: 'description2-h1',
    subtitle: 'description2-h3',
    buttonText: 'button2',
  },
  {
    src: '/assets/interior-3.png',
    title: 'description3-h1',
    subtitle: 'description3-h3',
    buttonText: 'button3',
  }
];

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('hero');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const progressBarWidth = ((currentSlide + 1) / (heroSlides.length)) * 100;

  return (
    <div id="hero" className={styles.container} style={{
      background: `url(${heroSlides[currentSlide].src}) no-repeat center center / cover`,
    }}>
      <div className={styles.description}>
        <h1>{t(heroSlides[currentSlide].title)}</h1>
        <h3>{t(heroSlides[currentSlide].subtitle)}</h3>
        <Button variant='blue' onClick={onOpenModal}>{t(heroSlides[currentSlide].buttonText)}</Button>
      </div>
      <div className={styles.schedule}>
        <div className={styles.title}>{t('schedule1')}</div>
        <div>{t('schedule2')}</div>
        <div>{t('schedule3')}</div>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: `${progressBarWidth}%` }} />
      </div>
    </div>
  );
}
