import "Styles/_app.scss";

import Swiper from "swiper/bundle";


// slider
{
  $(() => {
    const slider = $('.slider');

    if (slider.length !== 0 ) {
      const swiper = new Swiper(slider[0] , {
        slidesPerView: 'auto',
        spaceBetween: 20,
      });
    }
  });
}

// top slider
{
  $(() => {
    const topSlider = $('.top__container');

    if (topSlider.length !== 0) {
      const swiper = new Swiper(topSlider[0] , {
        // watchSlidesProgress: true,
        // watchSlidesVisibility: 3,
        // slideVisibleClass: 'top-slide--visible',
        slidesPerView: 'auto',
        // slidesPerGroup: 3,
        spaceBetween: 25,
        effect: 'flip',
        flipEffect: {
          slideShadows: true,
        },

        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
      })
    }
  });
}