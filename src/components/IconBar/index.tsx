import styles from './icon-bar.module.scss';
import EmailRound from '../../../public/assets/icons/email-round';
import Insta from '../../../public/assets/icons/insta';
import Twitter from '../../../public/assets/icons/x';
import Facebook from '../../../public/assets/icons/facebook';
import LinkedIn from '../../../public/assets/icons/linkedin';

export default function IconBar() {

  return (
    <div className={styles.icons}>
      <a
        href="mailto:Autoapex2000@gmail.com"
        className={styles.iconLink}
      >
        <EmailRound className={styles.icon} />
      </a>
      <a
        href="https://www.instagram.com/autoapex.es/?utm_source=qr&igsh=ZmhxYThtZzQyM20w#"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <Insta className={styles.icon} />
      </a>
      <Twitter className={styles.icon}/>
      <a
        href="https://www.facebook.com/share/1D6wMozTRE/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <Facebook className={styles.icon} />
      </a>
     
      <LinkedIn className={styles.icon}/>
    </div>
  );
}
