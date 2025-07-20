import Modal from 'react-modal';
import React from 'react';
import clsx from 'clsx';

import XMark from '../../../public/assets/x-mark';

import styles from './modalform.module.scss';

interface ModalFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ open, setOpen, children, className }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      className={clsx(styles.modalContent, className)}
      overlayClassName={styles.modalOverlay}
    >
      <button className={styles.closeBtn} onClick={() => setOpen(false)}>
        <XMark className={styles.xMarkIcon} />
      </button>
      {children}
    </Modal>
  );
};

export default ModalForm;
