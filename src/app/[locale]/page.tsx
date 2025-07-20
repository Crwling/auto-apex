'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Bottom from '@/components/Bottom';
import Services from '@/components/Services';
import FAQ from '@/components/faq';
import Portfolio from '@/components/Carousel';
import ModalForm from '@/components/Modal';
import Modal from 'react-modal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RequestForm from "@/components/RequestForm";

export default function Home() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
  const el = document.getElementById('__next');
  if (el) {
    Modal.setAppElement(el);
  } else {
    console.warn('Modal Element not found');
  }
}, []);

  return (
    <div>
      <Header onOpenModal={() => setOpen(true)}/>
      <Hero onOpenModal={() => setOpen(true)}/>
      <About/>
      <Services/>
      <Portfolio/>
      <FAQ/>
      <Bottom onOpenModal={() => setOpen(true)}/>
      <ModalForm open={open} setOpen={setOpen}>
        <RequestForm />
      </ModalForm>
      <Footer onOpenModal={() => setOpen(true)}/>
    </div>
  );
}
