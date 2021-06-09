import "Styles/_app.scss";

import Swiper from "swiper/bundle";

import 'select2';

// slider
{
  $(() => {
    const slider = $('.slider');

    if (slider.length !== 0) {
      const swiper = new Swiper(slider[0], {
        slidesPerView: 'auto',
        spaceBetween: 20,
      });
    }

    const swiperProductSlider = new Swiper($('.product-slider')[0], {
      slidesPerView: 'auto',
      spaceBetween: 20,
    });
  });
}

// top slider
{
  $(() => {
    const topSlider = $('.top__container');

    if (topSlider.length !== 0) {
      const swiper = new Swiper(topSlider[0], {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 25,
        // effect: 'flip',
        loop: true,
        breakpoints: {
          [1280]: {
            slidesPerGroup: 3,
          },
        },
      });

      $('.top__button').on('click', () => {
        console.log(123);
        swiper.slideNext();
      });
    }
  });
}

// slider recipes
{
  $(() => {
    const recipeSlider = $('.slider-recipe');

    if (recipeSlider.length !== 0) {
      const swiper = new Swiper(recipeSlider[0], {
        slidesPerView: 'auto',

        spaceBetween: 20,
      });
    }
  })
}

// recipe list
{
  $(() => {
    const recipe = $('.recipe__row');

    if (recipe.length !== 0) {
      const recipePos = recipe.offset().top;
      const recipeHeight = recipe.innerHeight();
      const recipeList = $('.recipe__ingredients');

      console.log(recipeHeight)

      $(window).on('scroll', function() {
        const scrollPos = $(this).scrollTop();

        if (recipeHeight < scrollPos) {
          recipeList.removeClass('recipe__ingredients--fixed');
        } else if (recipePos < scrollPos) {
          recipeList.addClass('recipe__ingredients--fixed');
        } else {
          recipeList.removeClass('recipe__ingredients--fixed');
        }
      });

      
    }
  });
}


// nav-modal
{
  $(() => {
    const header = $('.header');

    if (header.length !== 0) {
      const navModalButton = header.find('.header__button-button');

      // button
      navModalButton.on('click', function () {
        console.log(123);

        if (header.hasClass('header--nav-modal')) {
          header.removeClass('header--nav-modal');
          navModalButton.removeClass('header__button-button--active');
        } else {
          header.addClass('header--nav-modal');
          navModalButton.addClass('header__button-button--active');
        }
      });

      // click close
      $(window).on('click', event => {
        if (
          header.hasClass('header--nav-modal') &&
          event.target !== navModalButton[0] &&
          $(event.target).closest('.nav-modal').length === 0
        ) {
          header.removeClass('header--nav-modal');
          navModalButton.removeClass('header__button-button--active');
        }
      });
    }
  });
}


// vacancies dropdown
{
  const vacanciesItem = $('.vacancies-list__item');

  vacanciesItem.each(function () {
    const vacancies = $(this);
    const vacanciesButton = vacancies.find('.vacancies-list__button');
    const vacanciesDrop = vacancies.find('.vacancies-list__dropdown');

    console.log(vacancies);
    vacanciesButton.on('click', function() {
      vacancies.toggleClass('vacancies-list__item--active');
      vacanciesDrop.slideToggle();
    });
  });
}

// map
{
  ymaps.ready(() => {
    const mapContainer = $('#map');

		if (mapContainer.length !== 0) {
        const map = new ymaps.Map('map', {
          center: [51.518328, 45.996784],
          zoom: 12,
          controls: [],
        });

        const placemarks = new ymaps.GeoObjectCollection();
        $('.placemarks__item').each(function() {
          // данные
          const latitude = $(this).find('.placemarks__latitude').text().trim();
          const longitude = $(this).find('.placemarks__longitude').text().trim();

          // placemarks
          const coordinates = [latitude, longitude];
          const placemark = new ymaps.Placemark(coordinates, {}, 
          {
            iconLayout: 'default#image',
            iconImageHref: 'assets/images/placemark.svg',
            // iconImageSize: [markWidth, markHeight],
            // iconImageOffset: [-markWidth / 2, -markHeight],
            // balloonLayout: layout,
            // balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false,
          });

          placemarks.add(placemark);
        });

        map.geoObjects.add(placemarks);
        }
  });
}

// select
{
  $(() => {
    const select = $('.select__select');

    select.select2();
  });
}
