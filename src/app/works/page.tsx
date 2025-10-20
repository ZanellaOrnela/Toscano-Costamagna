'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Works() {
  useEffect(() => {
    // Importar Swiper dinámicamente
    const initSwiper = async () => {
      const { Swiper } = await import('swiper');
      const { Navigation, Pagination } = await import('swiper/modules');
      
      new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    };

    initSwiper();
  }, []);

  return (
    <>
      {/* Works */}
      <div className="container-fluid works wow fadeInDown">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-8 col-sm-12">
            <p className="text-center">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
        </div>
      </div>

      {/* Swiper Gallery */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-1.jpg" 
              alt="Gallery Photo 1" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-2.jpg" 
              alt="Gallery Photo 2" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-3.jpg" 
              alt="Gallery Photo 3" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-4.jpg" 
              alt="Gallery Photo 4" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-5.jpg" 
              alt="Gallery Photo 5" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-6.jpg" 
              alt="Gallery Photo 6" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-7.jpg" 
              alt="Gallery Photo 7" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-8.jpg" 
              alt="Gallery Photo 8" 
              width={400}
              height={300}
            />
          </div>
          <div className="swiper-slide">
            <Image 
              className="img-fluid" 
              src="/img/gallery/photo-9.jpg" 
              alt="Gallery Photo 9" 
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </>
  );
}

