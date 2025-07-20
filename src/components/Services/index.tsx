import React from "react";
import { useTranslations } from 'next-intl';
import styles from "./services.module.scss";
import Service1 from "../../../public/assets/services/service-1";
import Service2 from "../../../public/assets/services/service-2";
import Service3 from "../../../public/assets/services/service-3";
import Service4 from "../../../public/assets/services/service-4";
import Service6 from "../../../public/assets/services/service-6";
import Service5 from "../../../public/assets/services/service-5";
import Service7 from "../../../public/assets/services/service-7";
import Service8 from "../../../public/assets/services/service-8";

const SERVICE_OPTIONS = [
  {
    id: '1',
    image: <Service1/>
  },
  {
    id: '2',
    image: <Service2/>
  },
  {
    id: '3',
    image: <Service3 />
  },
  {
    id: '4',
    image: <Service4/>
  },
  {
    id: '5',
    image: <Service5/>
  },
  {
    id: '6',
    image: <Service6/>
  },
  {
    id: '7',
    image: <Service7/>
  },
  {
    id: '8',
    image: <Service8/>
  }
]

const Services = () => {

  const t = useTranslations('services');

  const renderOption = (option: any) => (
    <div className={styles.card} key={option.id}>
      <div className={styles.image}>{option.image}</div>
      <h3 className={styles.title}>{t(`option-title-${option.id}`)}</h3>
      <p className={styles.description}>{t(`option-description-${option.id}`)}</p>
    </div>
  );

  return (
    <div id="services" className={styles.container}>
      <h2 className={styles.heading}>{t('head')}</h2>
      <div className={styles.grid}>
        {SERVICE_OPTIONS.map(renderOption)}
      </div>
    </div>
  );
};

export default Services;