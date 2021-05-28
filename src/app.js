import "Styles/_app.scss";

import Swiper from "swiper";

// slide
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
