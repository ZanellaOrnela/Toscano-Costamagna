'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 99999,
      padding: '2.5rem 1rem',
      fontFamily: 'Alegreya Sans, sans-serif'
    }}>
      {/* Logo centrado en desktop, a la izquierda en responsive */}
      <div style={{ 
        textAlign: 'center',
        position: 'absolute',
        left: isMobile ? '1rem' : '50%',
        top: '50%',
        transform: isMobile ? 'translateY(-50%)' : 'translate(-50%, -50%)',
        zIndex: 100000
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Image 
            src="/img/favicon.png" 
            height={22} 
            width={100} 
            alt="Logo" 
            style={{ display: 'block' }}
          />
        </Link>
      </div>

      {/* Enlaces a la derecha - Solo en desktop */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '1rem',
          transform: 'translateY(-50%)',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a 
            href="#about" 
            style={{
              color: '#000',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '1.2rem',
              fontWeight: 'normal'
            }}
          >
            Nosotros
          </a>
          <a 
            href="#practice" 
            style={{
              color: '#000',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '1.2rem',
              fontWeight: 'normal'
            }}
          >
            Servicios
          </a>
          <a 
            href="#testimonials" 
            style={{
              color: '#000',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '1.2rem',
              fontWeight: 'normal'
            }}
          >
            Testimonios
          </a>
          <a 
            href="#contact" 
            style={{
              color: '#000',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '1.2rem',
              fontWeight: 'normal'
            }}
          >
            Contacto
          </a>
        </div>
      )}

      {/* Menú hamburguesa - Solo visible en móvil */}
      {isMobile && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            right: '1rem',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: 100000,
            width: '30px',
            height: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#000',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></div>
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#000',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            opacity: isOpen ? 0 : 1
          }}></div>
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#000',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></div>
        </div>
      )}

      {/* Menú móvil - Solo visible en móvil cuando está abierto */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#e9e8e6',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99998,
          padding: '2rem',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem',
            width: '100%',
            maxWidth: '400px'
          }}>
            <a 
              href="#about" 
              style={{
                color: '#000',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '1.5rem',
                display: 'block',
                margin: '1.5rem 0',
                fontWeight: 'bold',
                padding: '1rem',
                transition: 'all 0.3s ease',
                borderRadius: '8px',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="#practice" 
              style={{
                color: '#000',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '1.5rem',
                display: 'block',
                margin: '1.5rem 0',
                fontWeight: 'bold',
                padding: '1rem',
                transition: 'all 0.3s ease',
                borderRadius: '8px',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#testimonials" 
              style={{
                color: '#000',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '1.5rem',
                display: 'block',
                margin: '1.5rem 0',
                fontWeight: 'bold',
                padding: '1rem',
                transition: 'all 0.3s ease',
                borderRadius: '8px',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#contact" 
              style={{
                color: '#000',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '1.5rem',
                display: 'block',
                margin: '1.5rem 0',
                fontWeight: 'bold',
                padding: '1rem',
                transition: 'all 0.3s ease',
                borderRadius: '8px',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '5%',
            right: '5%',
            borderTop: '1px solid #000',
            paddingTop: '1rem'
          }}>
            <p style={{
              color: '#000',
              fontSize: '0.9rem',
              textAlign: 'center',
              margin: 0
            }}>
              Estudio Jurídico especializado en Derecho Laboral, Civil y Penal
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}