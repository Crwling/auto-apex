'use client';
import styles from './portfolio.module.scss';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Button from '../Button';
import Slider from '../Slider';
import clsx from 'clsx';
import AutoApexLogo from '../../../public/assets/Auto-apex-logo';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


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
  {
    image: '/assets/portfolio/image-5.png',
    make: 'Audi A6',
    year: '2018',
  },

]

const Portfolio = () => {
  const [collapsed, setCollapsed] = useState(true);
  const t = useTranslations('portfolio');
  const [showGallery, setShowGallery] = useState<number | undefined>();

  const galleryImages = slides.map((slide) => ({
    original: slide.image,
    originalAlt: `${slide.make} ${slide.year}`
  }));

  const renderSlides = () => (
    slides.map((item, idx) => (
      <div key={idx} className={styles.slide} onClick={()=> setShowGallery(idx)}>
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
    ))
  )

  return (
    <div id='portfolio' className={styles.portfolioWrapper}>
      <h2>
        {t('name')}
      </h2>
      <div className={styles.container}>
        <div className={clsx(styles.portfolioDesktop, {[styles.collapsed]: collapsed })}>
          {renderSlides()}
        </div>
        <Button
          variant="white"
          className={styles.showMoreBtn}
          onClick={() => setCollapsed(!collapsed)}
        >
          {!collapsed ? t('show-less') : t('show-more')}
        </Button>
      </div>

      <div className={styles.portfolioMobile} >
        <Slider>
          {renderSlides()}
        </Slider>

        <Button
          variant="white"
          className={styles.showMoreBtn}
          onClick={() => setShowGallery(0)}
        >
          {t('show-more')}
        </Button>

      
      </div>

        {showGallery !== undefined && (
          <div className={styles.galleryOverlay} onClick={()=> setShowGallery(undefined)}>
            <div className={styles.galleryModal} onClick={(e) => e.stopPropagation()}>
              <Button
                variant="white"
                className={styles.closeGallery}
                onClick={() => setShowGallery(undefined)}
              >
                ✕
              </Button>
              <ImageGallery
                items={galleryImages}
                showThumbnails={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                startIndex={showGallery}
              />
            </div>
          </div>
        )}

      <div className={styles.banner}>
        <div className={styles.bannerText}>
        <AutoApexLogo className={styles.logo}/>
        <h2>{t('banner')}</h2>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;