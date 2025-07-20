import { useTranslations } from 'next-intl';
import styles from './bottom.module.scss';
import Button from '../Button';
import AutoApexLogo from '../../../public/assets/Auto-apex-logo';
import RequestForm from '../RequestForm';
import Phone from '../../../public/assets/icons/phone';
import Email from '../../../public/assets/icons/email';
import Location from '../../../public/assets/icons/location';
import Image from 'next/image';
import IconBar from '../IconBar';

export default function Bottom({ onOpenModal }: { onOpenModal: () => void }) {
  const t = useTranslations('bottom');
  const tr = useTranslations('footer');
  const tt = useTranslations('hero');

  return (
    <div id='contacts'>
    <div className={styles.top}>
      <div className={styles.contacts}>
        <h2 className={styles.head}>{tr('contacts')}</h2>
        <div className={styles.address}>
          <Location/>
          {t('address')}
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
        <div className={styles.schedule}>
          <div className={styles.title}>{tt('schedule1')}</div>
          <div>{tt('schedule2')}</div>
          <div>{tt('schedule3')}</div>
        </div>
        <div className={styles.map}>
        </div>
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
        <Button variant='blue' onClick={onOpenModal}>{t('button')}</Button>
    </div>
    </div>
  );
}
