'use client';
import { useTranslations } from 'next-intl';
import Select from 'react-select';
import React, { useState } from 'react';
import Button from '../Button';
import styles from './request-form.module.scss';
import Input from '../Input';
import ArrowDown from '../../../public/assets/arrow-down';
import ArrowUp from '../../../public/assets/arrow-up';
import SuccessModal from "@/components/Modal/SuccessModal";
import Modal from '@/components/Modal';

export default function RequestForm() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: '',
    number: '',
    email: '',
    findUs: '',
    comment: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.number || !data.email) {
      setErrors({
        name: !data.name ? 'Please enter your name!' : '',
        number: !data.number ? 'Please enter your number!' : '',
        email: !data.email ? 'Please enter your email!' : '',
      });
      return;
    } else {
      setErrors({
        name: '',
        number: '',
        email: '',
      });
    }

    try {
      const res = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setData({
          name: '',
          number: '',
          email: '',
          findUs: '',
          comment: ''
        });
        setOpen(true);
      } else {
        alert(result.message || 'Failed to send request');
      }
    } catch (err) {
      alert('Failed to send request');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    //should remove all nun digit characters except for the first plus sign

    setData(prevData => ({ ...prevData, number: value && !!Number.parseInt(value) ? Number.parseInt(value) + '' : '' }));
  }


  const t = useTranslations('leave-a-request');

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h2 className={styles.title}>{t('head')}</h2>
        <div className={styles.wrapper}>
          <Input value={data.name} error={errors.name} placeholder={t('name')} name="name" onChange={handleChange} />
          <Input value={data.number} error={errors.number} maxLength={15} placeholder={t('number')} name="number" type='phone' onChange={handleNumberChange} />
          <Input value={data.email} error={errors.email} placeholder={t('email')} name="email" type="email" onChange={handleChange} />
          <Select
            value={data.findUs ? { value: data.findUs, label: data.findUs.charAt(0).toUpperCase() + data.findUs.slice(1) } : null}
            className={styles.select}
            classNamePrefix="custom-select"
            placeholder={t('dropdown')}
            options={[
              { value: 'instagram', label: 'Instagram' },
              { value: 'linkedin', label: 'LinkedIn' },
              { value: 'facebook', label: 'Facebook' },
              { value: 'other', label: 'Other' },
            ]}
            onChange={(option) => setData(prevData => ({ ...prevData, findUs: option?.value || '' }))}
            components={{
              DropdownIndicator: (props) =>  (
                <div className={styles.dropdownIndicator}>
                  {props.selectProps.menuIsOpen ? <ArrowUp /> : <ArrowDown />}
                </div>
              ),
              IndicatorSeparator: () => null
            }}
          />
          <Input  placeholder={t('comment')} name="comment" as="textarea" onChange={handleChange}/>
        </div>
        <Button variant='black' type="submit" onClick={handleSubmit} className={styles.button}>{t('button')}</Button>
      </form>
      <Modal className={styles.successModal} open={open} setOpen={setOpen}>
        <SuccessModal/>
      </Modal>
    </>
  );
}
