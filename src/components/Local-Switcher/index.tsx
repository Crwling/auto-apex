'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './local-switcher.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import Button from '../Button';
import ArrowDown from '../../../public/assets/arrow-down';
import ArrowUp from '../../../public/assets/arrow-up';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ua', label: 'UA' },
  { code: 'es', label: 'ES' },
  { code: 'ru', label: 'RU' },
];

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    setOpen(false);
    router.replace(`/${code}`);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={clsx(styles.switcher, {
          [styles.buttonOpen]: open,
        })}
        onClick={() => setOpen(!open)}
      >
        <Image src="/assets/language.svg" alt="Lang" width={18} height={18} />
        {localActive.toUpperCase()}
        {open ? <ArrowUp/> : <ArrowDown/>}
      </Button>

      {open && (
        <div className={styles.dropdown}>
          {languages
            .filter((lang) => lang.code !== localActive)
            .map((lang) => (
            <div
              key={lang.code}
              className={`${styles.option} ${localActive === lang.code ? styles.active : ''}`}
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}