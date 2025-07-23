import { useTranslations } from 'next-intl';
import styles from './bottom.module.scss';
import Button from '../Button';
import AutoApexLogo from '../../../public/assets/Auto-apex-logo';
import RequestForm from '../RequestForm';
import Phone from '../../../public/assets/icons/phone';
import Email from '../../../public/assets/icons/email';
import Location from '../../../public/assets/icons/location';
import IconBar from '../IconBar';

export default function Bottom({ onOpenModal }: { onOpenModal: () => void }) {
  const t = useTranslations('bottom');
  const tr = useTranslations('footer');
  const tt = useTranslations('hero');

  return (
    <div id='contacts'>
    <div className={styles.top}>
      <div className={styles.contacts}>
        <div className={styles.contactsInner}>
          <div className={styles.contactsContainer}>
          <h2 className={styles.head}>{tr('contacts')}</h2>
          <div className={styles.address}>
            <Location/>
            <a
              href="https://maps.app.goo.gl/FobT6dG4h8z8HLA89?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('address')}
            </a>
          </div>
          <div className={styles.phone}>
            <Phone/>
            {tr('phone')}
          </div>
          <div className={styles.email}>
            <Email/>
            {tr('email')}
          </div>
          <IconBar/>
          </div>
          <div className={styles.schedule}>
            <div className={styles.title}>{tt('schedule1')}</div>
            <div>{tt('schedule2')}</div>
            <div>{tt('schedule3')}</div>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/FobT6dG4h8z8HLA89?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.map}>
          </div>
        </a>
      </div>
      <div className={styles.requestForm}>
        <RequestForm/>
      </div>
    </div>
    <div className={styles.bottom}>
        <AutoApexLogo/>
        <h1>{t('h1')}</h1>
        <h2>{t('h2')}</h2>
        <p>{t('main')}</p>
        <Button variant='blue' className={styles.button} onClick={onOpenModal}>{t('button')}</Button>
    </div>
    </div>
  );
}
