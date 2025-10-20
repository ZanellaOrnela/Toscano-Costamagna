'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

// Componente wrapper para evitar errores de hidratación
const SafeFormElement = ({ children, ...props }: any) => {
  return (
    <div suppressHydrationWarning={true}>
      {children}
    </div>
  );
};
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
    
    // Limpiar el formulario después del envío
    setContactForm({
      name: '',
      phone: '',
      area: '',
      message: ''
    });
  };

  return (
    <>
      {/* Sección Principal - Hero */}
      <div className="Container">
        <div className="Content">
          <div className="Wrapper">
            <div className="LeftContent col-xl-6 col-sm-12 split-image-left" style={{
              backgroundImage: 'url("/img/judge-scotti-richard.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
              minHeight: '100vh',
              filter: 'grayscale(30%)',
              backgroundColor: '#e9e8e6'
            }}>
            </div>
            <div className="RightContent col-xl-6 col-sm-12 split-image-right">
              <div className="row justify-content-center">
                <div className="col-9">
                  <div className="row">
                    <div className="">
                      <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem', fontWeight: 'bold', lineHeight: '1.2' }}>
                        Estudio Jurídico Toscano, Costamagna & Asociados
                      </h1>
                      <h2 className="hero-subtitle" style={{ fontSize: '1.8rem', marginBottom: '3rem', fontWeight: 'normal', color: '#666' }}>
                        Defensa legal clara, cercana y efectiva
                      </h2>
                      <p className="hero-description" style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '3rem' }}>
                        20 años de especialidad en causas de ART, resolviendo tanto casos laborales como civiles, comerciales y de familia, con estrategia, humanidad y resultados.
                      </p>
                      <button 
                        className="btn btn-primary hero-button"
                        style={{
                          backgroundColor: '#000',
                          border: 'none',
                          padding: '1rem 2.5rem',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        suppressHydrationWarning={true}
                      >
                        Consulta Inmediata
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección About - Quiénes Somos */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <section id="about" style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <small style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Quiénes somos</small>
              <h2 className="mt-2" style={{ fontSize: '2rem', lineHeight: 1.3 }}>Un estudio jurídico boutique con especialistas que te acompañan de principio a fin</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="pe-md-5">
                <p className="mt-1 mb-5 text-center" style={{ lineHeight: 1.6 }}>Somos el Estudio Jurídico Toscano Costamagna & Asociados.</p>
                <div className="row mt-4">
                  <div className="col-md-6 mb-4 d-flex flex-column">
                    <p className="mb-2" style={{ lineHeight: 1.6 }}>
                      <strong>La Dra. Carla Fabiana Toscano</strong> lidera Derecho Laboral (accidentes de trabajo, reclamos ante la ART y despidos). Matriculada en Colegio Público de Abogados de Capital Federal.
                    </p>
                    <div className="mt-auto">
                      <Image
                        className="img-fluid"
                        src="/img/WhatsApp Image 2025-10-18 at 22.02.16_6da27b06.jpg"
                        alt="Dra. Carla Fabiana Toscano"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: '320px', objectFit: 'cover', filter: 'grayscale(100%)' }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 d-flex flex-column">
                    <p className="mb-2" style={{ lineHeight: 1.6 }}>
                      <strong>El Dr. Ignacio Costamagna</strong> encabeza el fuero civil y penal: sucesiones, daños y perjuicios, derecho civil y comercial, y también divorcios y familia; además defensas en causas penales, excarcelaciones y recursos ante tribunales.
                    </p>
                    <div className="mt-auto">
        <Image
                        className="img-fluid"
                        src="/img/photo-3.jpg"
                        alt="Dr. Ignacio Costamagna"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-4 mt-5 pt-2" style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '0' }}>
                  <div className="col-md-4">
                    <div className="h-100 p-3" style={{ borderTop: '2px solid #000', backgroundColor: 'transparent' }}>
                      <h3 className="mb-2" style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Misión</h3>
                      <p className="mb-0" style={{ lineHeight: 1.6, fontStyle: 'italic' }}>
                        Defender tus derechos con excelencia técnica y una atención transparente, empática y rápida, transformando problemas legales en soluciones concretas.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="h-100 p-3" style={{ borderTop: '2px solid #000', backgroundColor: 'transparent' }}>
                      <h3 className="mb-2" style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Valores Centrales</h3>
                      <p className="mb-0" style={{ lineHeight: 1.6 }}>
                        Claridad en cada paso, ética profesional innegociable, compromiso total con el caso y estrategia a medida para maximizar tus resultados.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="h-100 p-3" style={{ borderTop: '2px solid #000', backgroundColor: 'transparent' }}>
                      <h3 className="mb-2" style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Datos de Autoridad</h3>
                      <p className="mb-0" style={{ lineHeight: 1.6 }}>
                        Más de 20 años de trayectoria combinada. Amplia experiencia en Derecho Laboral (ART, despidos, diferencias salariales), Derecho Civil y Comercial (contratos, cobros, daños), Sucesiones y Derecho de Familia (divorcios, convenios).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Sección Áreas de Práctica */}
      <AnimatedSection animation="fadeInUp" delay={400}>
        <section id="practice" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#e9e8e6' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <small style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Áreas de práctica</small>
              <h2 className="mt-2" style={{ fontSize: '2rem', lineHeight: 1.3 }}>¿En qué podemos ayudarte?</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <div className="practice-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="mb-0" style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Accidentes de Trabajo (ART)</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                      Te acompañamos desde la denuncia y el tratamiento hasta la indemnización final. Impugnamos altas médicas improcedentes y negociamos con la ART para que cobres lo que corresponde. Apelamos e iniciamos demandas de ser necesario.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="practice-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="mb-0" style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Despidos y Reclamos Laborales</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                      Calculamos tu indemnización, reclamamos diferencias salariales, horas extras y multas por falta de registración. Buscamos acuerdos firmes y rápidos; litigamos con solidez cuando hace falta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="practice-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="mb-0" style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Sucesiones</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                      Tramitamos la sucesión de forma ordenada y eficiente: apertura, declaratoria de herederos, inventario y adjudicación. Proceso claro y previsible para tu tranquilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="practice-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="mb-0" style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Daños y Perjuicios</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                      Reclamamos daños materiales, morales y pérdida de chance por accidentes y responsabilidad civil. Evaluamos pruebas, cuantificamos el daño y perseguimos la mejor compensación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="practice-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="mb-0" style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Derecho Civil y Comercial</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                      Contratos, incumplimientos, cobros, mediaciones y litigios. Estrategias legales que protegen tu patrimonio y la continuidad de tu negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="practice-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="mb-0" style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Divorcios y Familia</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                      Divorcios express, convenios, régimen de cuidado y alimentos. Priorizamos acuerdos sanos y sostenibles, protegiendo a tus hijos y tu tranquilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="practice-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h3 className="mb-0" style={{ fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Derecho Penal</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                      Defendemos tus derechos ante denuncias, causas penales o detenciones. Intervenimos desde la primera declaración, planteamos estrategias de defensa y buscamos resolver el proceso con la menor exposición y el mejor resultado posible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Por qué elegirnos */}
      <section id="why-choose-us" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <small style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Por qué elegirnos</small>
              <h2 className="mt-2" style={{ fontSize: '2rem', lineHeight: 1.3 }}>Elegir bien a tu abogado cambia el resultado</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="why-card-overlay" style={{ backgroundImage: 'url(/img/why-choose-1.jpg)' }}>
                <div className="card-content">
                  <h3 className="card-title">Claridad y Comunicación</h3>
                  <p className="card-description">
                    Te explicamos tu situación en lenguaje simple, con expectativas realistas y un plan paso a paso.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="why-card-overlay" style={{ backgroundImage: 'url(/img/why-choose-2.jpg)' }}>
                <div className="card-content">
                  <h3 className="card-title">Especialización y Trayectoria</h3>
                  <p className="card-description">
                    Equipos dedicados por fuero: laboral, civil/comercial, sucesiones y familia. 20 años de experiencia.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="why-card-overlay" style={{ backgroundImage: 'url(/img/why-choose-3.jpg)' }}>
                <div className="card-content">
                  <h3 className="card-title">Estrategia y Tarifas</h3>
                  <p className="card-description">
                    Hoja de ruta con hitos y métricas de avance. Honorarios claros y acordados desde el inicio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section id="testimonials" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#e9e8e6' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <small style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Testimonios</small>
              <h2 className="mt-2" style={{ fontSize: '2rem', lineHeight: 1.3 }}>Lo que dicen nuestros clientes</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "Me acompañaron en todo el reclamo contra la ART. Cobré la indemnización completa y sin sorpresas."
                  </p>
                  <div className="testimonial-author">
                    <h4 className="author-name">Martín R.</h4>
                    <p className="author-case">reclamo por accidente de trabajo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "La sucesión fue rápida y ordenada. Sabía qué esperar en cada etapa."
                  </p>
                  <div className="testimonial-author">
                    <h4 className="author-name">Laura P.</h4>
                    <p className="author-case">sucesiones</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "En mi despido, defendieron cada peso. Logramos un acuerdo justo y a tiempo."
                  </p>
                  <div className="testimonial-author">
                    <h4 className="author-name">Diego M.</h4>
                    <p className="author-case">despido e indemnización</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 text-center">
              <div className="testimonial-summary">
                <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50', marginBottom: '0.5rem' }}>
                  20 años de experiencia • Decenas de acuerdos favorables en laboral y civil • Atención personalizada y estratégica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contact" style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-10">
              <small style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Contacto</small>
              <h2 className="mt-2" style={{ fontSize: '2rem', lineHeight: 1.3 }}>Hablemos de tu caso hoy</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '1rem' }}>
                Contanos brevemente tu situación y te proponemos los próximos pasos en la primera consulta.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="contact-form-container">
                <h3 className="form-title">Envíanos un mensaje</h3>
                <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Tu nombre"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Tu teléfono"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="area"
                      value={contactForm.area}
                      onChange={handleContactChange}
                      required
                    >
                      <option value="">Selecciona tu área de consulta</option>
                      <option value="Accidentes de Trabajo (ART)">Accidentes de Trabajo (ART)</option>
                      <option value="Despidos y Reclamos Laborales">Despidos y Reclamos Laborales</option>
                      <option value="Sucesiones">Sucesiones</option>
                      <option value="Daños y Perjuicios">Daños y Perjuicios</option>
                      <option value="Derecho Civil y Comercial">Derecho Civil y Comercial</option>
                      <option value="Divorcios y Familia">Divorcios y Familia</option>
                      <option value="Derecho Penal">Derecho Penal</option>
                      <option value="Otra consulta">Otra consulta</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Cuéntanos brevemente tu situación"
                      rows={4}
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="whatsapp-btn">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="map-container">
                <h3 className="map-title">Nuestra ubicación</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670.2007312081298!2d-58.2623092111357!3d-34.7205832057226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e14e928af01%3A0xa2a8b7302da782b8!2sSan%20Mart%C3%ADn%20431%2C%20B1878%20Quilmes%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses!2sar!4v1760998401049!5m2!1ses!2sar&style=feature:all|element:geometry|color:0xf5f5f5&style=feature:water|color:0xc9c9c9&style=feature:landscape|color:0xf5f5f5"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Estudio Jurídico - San Martín 431, Quilmes"
                ></iframe>
                <div className="contact-info-container mt-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="contact-item">
                        <h4>Teléfono / WhatsApp</h4>
                        <p>
                          <a href="tel:01153799311" className="contact-link">
                            011 5379-9311
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-item">
                        <h4>Email</h4>
                        <p>
                          <a href="mailto:carlatoscano123@gmail.com" className="contact-link">
                            carlatoscano123@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <h4>Ubicación</h4>
                    <p>San Martín 431, B1878 Quilmes, Provincia de Buenos Aires</p>
                  </div>
                  <div className="contact-item">
                    <h4>Horarios</h4>
                    <p>Lunes a viernes, 9 a 18 h.</p>
                    <p>Atención presencial y virtual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pie de página */}
      <footer className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="footer-section">
                <h4 className="footer-title">Toscano Costamagna & Asociados</h4>
                <p className="footer-subtitle">Estudio Jurídico</p>
                <p className="footer-description">
                  Defensa legal clara, cercana y efectiva. 20 años de experiencia en causas de ART, 
                  derecho laboral, civil y comercial.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="footer-section">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="footer-section-title">Contacto</h5>
                    <div className="footer-contact">
                      <p><strong>Teléfono:</strong> 011 5379-9311</p>
                      <p><strong>Tel. móvil:</strong> 011 7537-6298</p>
                      <p><strong>Email:</strong> carlatoscano123@gmail.com</p>
                      <p><strong>Dirección:</strong> San Martín 431, Quilmes</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="footer-section-title">Horarios</h5>
                    <div className="footer-hours">
                      <p>Lunes a Viernes: 9:00 - 18:00</p>
                    </div>
                    <div className="footer-social mt-2">
                      <a href="https://www.instagram.com/p/CE1lWrcpTHu/" 
          target="_blank"
          rel="noopener noreferrer"
                         className="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="ms-2">Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom">
                <p className="footer-copyright">
                  © 2024 Toscano Costamagna & Asociados — Estudio Jurídico. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
