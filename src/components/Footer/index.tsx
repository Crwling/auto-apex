'use client';
import { useTranslations } from 'next-intl';
import styles from './footer.module.scss';
import AutoApexLogoBlack from '../../../public/assets/Auto-apex-logo-black';
import Phone from '../../../public/assets/icons/phone';
import Email from '../../../public/assets/icons/email';
import EmailRound from '../../../public/assets/icons/email-round';
import Insta from '../../../public/assets/icons/insta';
import Twitter from '../../../public/assets/icons/x';
import Facebook from '../../../public/assets/icons/facebook';
import LinkedIn from '../../../public/assets/icons/linkedin';
import Button from '../Button';
import IconBar from '../IconBar';

export default function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const t = useTranslations('footer');

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h3 className={styles.contactsTitle}>{t('contacts')}</h3>
          <div className={styles.phone}>
            <Phone/>
            {t('phone')}
          </div>
          <div className={styles.email}>
            <Email/>
            {t('email')}
          </div>
        </div>
        <div className={styles.nav}>
          <AutoApexLogoBlack className={styles.logo}/>
          <a href='#hero'>{t('home')}</a>
          <a href='#services'>{t('services')}</a>
        </div>
        <div className={styles.nav}>
          <a href='#portfolio'>{t('portfolio')}</a>
          <a href='#faq'>{t('faq')}</a>
          <a href='#about-us'>{t('about-us')}</a>
        </div>
        <div className={styles.rightcol}>
          <IconBar/>
          <Button
            variant='white'
            className={styles.button}
            onClick={onOpenModal}
          >{t('leave-a-request')}</Button>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>{t('copyright')}</p>
      </div>
    </div>
  );
}
