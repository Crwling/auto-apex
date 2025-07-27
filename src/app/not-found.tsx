'use client';

import Button from "@/components/Button";
import styles from "./not-found.module.scss"
import AutoApexLogoBlack from "../../public/assets/Auto-apex-logo-black";
import { Urbanist, Montserrat, Manrope } from 'next/font/google';

const urbanist = Urbanist({
  weight: '600',   // Semibold
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['500', '600', '400', '300', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export default function NotFound() {

  return (
    <html className={`${urbanist.variable} ${montserrat.variable} ${manrope.variable}`}>
      <body>
         <div className={styles.container}>
          <AutoApexLogoBlack className={styles.logo}/>
          <h1 className={styles.notFoundH1}>So Sorry!</h1>
          <h2 className={styles.notFoundH2}>The page you are looking for <span>cannot be found</span></h2>
          <a href="/">
            <Button variant="black" className={styles.notFoundButton}>Back</Button>
          </a>
        </div>
      </body>
    </html>
   
  );
}
