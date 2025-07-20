import SuccessIcon from '../../../public/assets/success';
import styles from './success-modal.module.scss';

const SuccessModal = () => {
  return (
    <div className={styles.content}>
      <SuccessIcon/>
      <h2>Success</h2>
      <p>
        Check your email for a booking confirmation.<br/>
        We&apos;ll see you soon!
      </p>
    </div>
  )
}

export default SuccessModal;
