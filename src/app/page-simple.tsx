'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    area: '',
    message: ''
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, mi nombre es ${contactForm.name}. Mi teléfono es ${contactForm.phone}. Área de consulta: ${contactForm.area}. ${contactForm.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491153799311?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setContactForm({
      name: '',
      phone: '',
      area: '',
      message: ''
    });
  };

  return (
    <div>
      <h1>Estudio Jurídico Toscano Costamagna & Asociados</h1>
      <p>Defensa legal clara, cercana y efectiva</p>
    </div>
  );
}
