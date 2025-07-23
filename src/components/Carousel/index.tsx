'use client';
import Slider from "react-slick";
import Image from 'next/image';
import styles from './carousel.module.scss';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

const Portfolio = () => {

  const t = useTranslations('portfolio');

  const slides = [
    {
      image: '/assets/portfolio/image-1.png',
      make: 'Audi A6',
      year: '2018',
    },
    {
      image: '/assets/portfolio/image-2.png',
      make: 'Audi A6',
      year: '2018',
    },
    {
      image: '/assets/portfolio/image-3.png',
      make: 'Audi A6',
      year: '2018',
    },
    {
      image: '/assets/portfolio/image-4.png',
      make: 'Audi A6',
      year: '2018',
    },
    {
      image: '/assets/portfolio/image-5.png',
      make: 'Audi A6',
      year: '2018',
    },
  ]

  return (
    <div id='portfolio' className={styles.carouselWrapper}>
      <h2 className={styles.heading}>{t('name')}</h2>
      <Slider
        infinite
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        // autoplay
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {slides.map((item, idx) => (
          <div key={idx} className={styles.slide}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className={styles.image}
            />
            <div className={styles.infoRow}>
              <p><strong>{t('make')}</strong> {item.make}</p>
              <p><strong>{t('year')}</strong> {item.year}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;