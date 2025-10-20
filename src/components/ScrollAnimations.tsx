'use client';

import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {

    // Función para verificar si un elemento está parcialmente visible
    const isPartiallyVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < windowHeight && rect.bottom > 0;
    };

    // Función para animar elementos al hacer scroll
    const animateOnScroll = () => {
      // Animar elementos con clase animate-on-scroll
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach((element) => {
        if (isPartiallyVisible(element as HTMLElement)) {
          element.classList.add('animated');
        }
      });

      // Animar elementos con clase animate-on-scroll-left
      const leftElements = document.querySelectorAll('.animate-on-scroll-left');
      leftElements.forEach((element) => {
        if (isPartiallyVisible(element as HTMLElement)) {
          element.classList.add('animated');
        }
      });

      // Animar elementos con clase animate-on-scroll-right
      const rightElements = document.querySelectorAll('.animate-on-scroll-right');
      rightElements.forEach((element) => {
        if (isPartiallyVisible(element as HTMLElement)) {
          element.classList.add('animated');
        }
      });

      // Animar elementos con clase animate-on-scroll-scale
      const scaleElements = document.querySelectorAll('.animate-on-scroll-scale');
      scaleElements.forEach((element) => {
        if (isPartiallyVisible(element as HTMLElement)) {
          element.classList.add('animated');
        }
      });
    };

    // Ejecutar animaciones al cargar la página
    animateOnScroll();

    // Ejecutar animaciones al hacer scroll
    window.addEventListener('scroll', animateOnScroll);

    // Limpiar event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimations;
