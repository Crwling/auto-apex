'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import LocalSwitcher from '@/components/Local-Switcher';
import styles from "./header.module.scss"
import Button from '../Button';
import AutoApexLogo from '../../../public/assets/Auto-apex-logo';
import WhatsApp from '../../../public/assets/whatsapp';
import MenuIcon from '../../../public/assets/menu';
import MenuXIcon from '../../../public/assets/menuX';

const navLinks = [
  { href: '#hero', label: 'home' },
  { href: '#about-us', label: 'about-us' },
  { href: '#services', label: 'services' },
  { href: '#portfolio', label: 'portfolio' },
  { href: '#faq', label: 'faq' },
  { href: '#contacts', label: 'contacts' },
]

export default function Header({ onOpenModal }: { onOpenModal: () => void }) {
  const t = useTranslations('header');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.container}`);
      const headerHeight = header?.clientHeight || 0;
      const heroHeight = document.querySelector('#hero')?.clientHeight || 0;
      if (header) {
        if (window.scrollY > (heroHeight - headerHeight)) {
          header.classList.add(styles.scrolled);
        } else {
          header.classList.remove(styles.scrolled);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <a href="#hero" className={styles.image}>
          <AutoApexLogo/>
        </a>
        <nav className={styles.navigation}>
          <div className={styles.links}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {t(link.label)}
              </a>
            ))}
          </div>
          <div className={styles.rightSide}>
            <a
              href="https://wa.me/34638745024" // <-- your WhatsApp number here
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <WhatsApp className={styles.whatsapp}/>
            </a>
            <div className={styles.localSwitcher}>
              <LocalSwitcher />
            </div>
            <Button variant='white' onClick={onOpenModal}>{t('leave-a-request')}</Button>
            {open ?
              <MenuXIcon className={styles.menuIcon} onClick={() => setOpen(false)} /> :
              <MenuIcon className={styles.menuIcon} onClick={() => setOpen(true)} />
            }
          </div>
        </nav>
      </div>
      {open && (
        <div className={styles.mobileOverlay} onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setOpen(false)
        }}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {t(link.label)}
              </a>
            ))}
            <LocalSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
