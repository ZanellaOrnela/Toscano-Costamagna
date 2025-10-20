'use client';

import { useEffect } from 'react';

export default function Scripts() {
  useEffect(() => {
    // Cargar jQuery primero
    const jqueryScript = document.createElement('script');
    jqueryScript.src = '/vendor/jquery.min.js';
    jqueryScript.async = false;
    document.head.appendChild(jqueryScript);

    jqueryScript.onload = () => {
      // Cargar Bootstrap después de jQuery
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = '/vendor/bootstrap/js/bootstrap.min.js';
      bootstrapScript.async = false;
      document.head.appendChild(bootstrapScript);

      bootstrapScript.onload = () => {
        // Cargar WOW.js
        const wowScript = document.createElement('script');
        wowScript.src = '/vendor/wow/wow.js';
        wowScript.async = false;
        wowScript.onload = () => {
          // @ts-expect-error - WOW.js global variable
          if (typeof WOW !== 'undefined') {
            // @ts-expect-error - WOW.js constructor
            new WOW().init();
          }
        };
        document.head.appendChild(wowScript);

        // Cargar script personalizado
        const customScript = document.createElement('script');
        customScript.src = '/js/script.js';
        customScript.async = false;
        document.head.appendChild(customScript);
      };
    };

    jqueryScript.onerror = () => {
      console.warn('jQuery failed to load');
    };
  }, []);

  return null;
}
