import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from "./about.module.scss"
import Button from '../Button';
import AutoApexLogo from '../../../public/assets/Auto-apex-logo';
import RequestForm from '../RequestForm';


export default function About() {
  const t = useTranslations('about');

  return (
    <div id='about-us' className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <h2>{t('about-h1')}</h2>
          <p>{t('about-description-1')}</p>
          <p>{t('about-description-2')}</p>
          <p>{t('about-description-3')}</p>
          <p>{t('about-description-4')}</p>
        </div>
        <div className={styles.image}>
          <AutoApexLogo className={styles.logo}/>
          <h1>{t('about-photo-h1')}</h1>
          <h3>{t('about-photo-h3')}</h3>
        </div>
      </div>
      <div className={styles.requestForm}>
        <RequestForm/>
      </div>
    </div>
  )
}
