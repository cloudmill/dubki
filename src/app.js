import "Styles/_app.scss";

import Swiper from "swiper/bundle";
import 'select2';
import AOS from 'aos';
import '@fancyapps/fancybox';

// AOS
{
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, 
});
}

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

// city-search modal
{
  $(() => {
    const header = $('.header');

    if (header.length !== 0) {
      const citySearchButton = header.find('.header__city-button');
      const cityModalButton = header.find('.modal-search__button');

      // button open
      citySearchButton.on('click', function() {
        header.addClass('header--city-search');
      });

      // button close
      cityModalButton.on('click', function() {
        if (header.hasClass('header--city-search')) {
          header.removeClass('header--city-search');
        }
      });

      //click close
      $(window).on('click', function(event) {
        const target = event.target.closest('.header__city-button');
        if (
          header.hasClass('header--city-search') &&
          target !== citySearchButton[0] &&
          $(event.target).closest('.modal-search--city').length === 0
        ) {
          header.removeClass('header--city-search');
        }
      });
    }
  })
}

// catalog-search modal
{
  $(() => {
    const header = $('.header');

    if (header.length !== 0) {
      const catalogSearchButton = header.find('.header__search-button');
      const catalogModalButton = header.find('.modal-search__button-catalog');

      // button open
      catalogSearchButton.on('click', function() {
        header.addClass('header--catalog-search');
      });

      // button close
      catalogModalButton.on('click', function() {
        if (header.hasClass('header--catalog-search')) {
          header.removeClass('header--catalog-search');
        }
      });

      //click close
      $(window).on('click', function(event) {
        const target = event.target.closest('.header__search-button');
        if (
          header.hasClass('header--catalog-search') &&
          target !== catalogSearchButton[0] &&
          $(event.target).closest('.modal-search--catalog').length === 0
        ) {
          header.removeClass('header--catalog-search');
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
			// vars
			const markWidth = 53;
      const markHeight = 56;

			// init
			const map = new ymaps.Map('map', {
        center: [51.518328, 45.996784],
        zoom: 12,
        controls: [],
      });

			// balloon layout
			const layout = ymaps.templateLayoutFactory.createClass(
				[
					'<div class="map-balloon--alt">',
					'<div class="map-balloon__container">',
					'<div class="map-balloon__store">',
					'{{properties.balloonStore}}',
					'</div>',
          '<div class="map-balloon__addres">',
          '{{properties.balloonAddres}}',
          '</div>',
          '<div class="map-balloon__time">',
          '<div class="map-balloon__text">',
          '{{properties.balloonText}}',
          '</div>',
          '</div>',
					'</div>',
					'</div>',
				].join(''),
				{
					build: function () {
						this.constructor.superclass.build.call(this);

						this._$element = $('.map-balloon--alt', this.getParentElement());

						this.applyElementOffset();
					},
					onSublayoutSizeChange: function () {
						layout.superclass.onSublayoutSizeChange.apply(this, arguments);

						if (!this._isElement(this._$element)) {
							return;
						}

						this.applyElementOffset();

						this.events.fire('shapechange');
					},
					applyElementOffset: function () {
						this._$element.css({
							left: -(this._$element[0].offsetWidth / 2),
							top: -(this._$element[0].offsetHeight + markHeight / 2),
						});
					},
					getShape: function () {
						if (!this._isElement(this._$element)) {
							return layout.superclass.getShape.call(this);
						}

						var position = this._$element.position();

						return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
							[position.left, position.top], [
								position.left + this._$element[0].offsetWidth,
								position.top + this._$element[0].offsetHeight,
							]
						]));
					},
					_isElement: function (element) {
						return element && element[0];
					}
				}
			);

			// balloon close
			map.events.add('click', () => {
				if (map.balloon.isOpen()) {
					map.balloon.close();
				}
			});

			// добавление точек
			const placemarks = new ymaps.GeoObjectCollection();
			$('.placemarks__item').each(function () {
				// данные
				const balloon = $(this).find('.placemarks__balloon');
        const balloonStore = $(this).find('.map-balloon__store').text().trim();
        const balloonAddres = $(this).find('.map-balloon__addres').text().trim();
        const balloonText = $(this).find('.map-balloon__text').text().trim();
				const latitude = $(this).find('.placemarks__latitude').text().trim();
				const longitude = $(this).find('.placemarks__longitude').text().trim();

				// placemark
				const coordinates = [latitude, longitude];
				const placemark = new ymaps.Placemark(coordinates, {
					balloon, balloonStore, balloonAddres, balloonText,
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'assets/images/placemark.svg',
					iconImageSize: [markWidth, markHeight],
					iconImageOffset: [-markWidth / 2, -markHeight],

					balloonLayout: layout,
					balloonPanelMaxMapArea: 0,
					hideIconOnBalloonOpen: false,
				});

				placemarks.add(placemark);
			});

			// добавление на карту
			map.geoObjects.add(placemarks);

			// позиционирование на точках
			map.setBounds(placemarks.getBounds(), {
				zoomMargin: Math.max(markWidth, markHeight),
			});
		}
	});
}
// select
{
  $(() => {
    const select = $('.select__select');

    select.select2({
      // dropdownParent: $('.modal'),
    });
  });
}

// response
{
  $(() => {
    const form = $('.form');

    if (form.length !== 0) {
      const response = $('.response');
      const responseButton = $('.response__btn');
      const formButton = $('.form__btn');

      formButton.on('click', function() {
        form.addClass('form--hidden');
        response.addClass('response--active');
        $('.provider__row').addClass('provider__row--active');
      });

      responseButton.on('click', function() {
        form.removeClass('form--hidden');
        response.removeClass('response--active');
        $('.provider__row').removeClass('provider__row--active');
      });
    }
  });
}

// fancybox
{
  $(() => {
    $.fancybox.defaults.closeExisting = true;

    $('[data-fancy-button]').on('click', function (event) {
			event.preventDefault();
		
			const id = $(this).data('fancy-button');
			const modal = $(`[data-fancy-modal="${id}"]`);

			$.fancybox.open(modal);
		});
  });
}
