// imports
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

// vars
const BREAKPOINT = 1280

// functions
function toggleDataAttr($element, attr, value='') {
  const element = $element[0]

  if (attr in element.dataset) {
    delete element.dataset[attr]
  } else {
    element.dataset[attr] = value
  }
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

// шапка, модальные окна, каталог (слева), меню (справа)
{
  $(() => {
    const header = $('.header');

    if (header.length !== 0) {
      const navModalButton = header.find('.header__button-button');
      const catalogModalButton = header.find('.header__catalog-button');

      // клик по кнопке вызова модального окна (открытие-закрытие)
      // м.о. меню
      navModalButton.on('click', function () {
        if (header.hasClass('header--nav-modal')) { // если модальное окно открыто - закрываем
          header.removeClass('header--nav-modal'); // обновляем модификатор header (шапка, контейнер модальных окон)
          navModalButton.removeClass('header__button-button--active'); // обновляем модификатор кнопки
        } else { // открывыем, аналогично (выше)
          header.addClass('header--nav-modal');
          navModalButton.addClass('button-modal--active');
        }
      });
      // м.о. каталог
      // аналогично (выше)
      catalogModalButton.on('click', function () {
        if (header.hasClass('header--catalog-modal')) {
          header.removeClass('header--catalog-modal');
          catalogModalButton.removeClass('header__catalog-button--active');
        } else {
          header.addClass('header--catalog-modal');
          catalogModalButton.addClass('header__catalog-button--active');
        }
      });

      // клик вне модального окна (закрытие)
      $(window).on('click', event => {
        // обработка клика по окну в контексте catalog-modal
        if (
          header.hasClass('header--nav-modal') && // если модальное окно открыто
          $(event.target).closest(navModalButton).length === 0 && // + клик не по кнопке
          $(event.target).closest('.nav-modal').length === 0 // + клик не по модальному окну
        ) {
          header.removeClass('header--nav-modal');
          navModalButton.removeClass('button-modal--active');
        }
        // обработка клика по окну в контексте catalog-modal
        if (
          header.hasClass('header--catalog-modal') && // если модальное окно открыто
          $(event.target).closest(catalogModalButton).length === 0 && // + клик не по кнопке
          $(event.target).closest('.catalog-modal').length === 0 // + клик не по модальному окну
        ) {
          header.removeClass('header--catalog-modal'); // обновляем состояние header (стили прокидываются на catalog-modal)
          catalogModalButton.removeClass('header__catalog-button--active'); // обновляем состояние кнопки
        }
      });
    }
  });
}

// catalog dropdown 
{
  $(() => {
    const navModal = $('.nav-modal');

    if (navModal.length !== 0) {
      const navModalButton = navModal.find('.header__catalog-button');
      const navModalDropdown = navModal.find('.header-catalog__dropdown');

      navModalButton.on('click', function() {
        navModalButton.toggleClass('header__catalog-button--active');
        navModalDropdown.slideToggle();
      });

      // section
      const navModalSection = navModal.find('.header-catalog__section');
      const navModalSectionButton = navModalSection.find('.header-catalog__section-button');

      navModalSectionButton.on('click', function () {
        const navModalSectionClicked = $(this).closest('.header-catalog__section');

        if (navModalSectionClicked.hasClass('header-catalog__section--active')) {
          navModalSectionClicked.find('.header-catalog__section-dropdown').slideUp(500);
          navModalSectionClicked.removeClass('header-catalog__section--active')
        } else {
          $('.header-catalog__section--active').find('.header-catalog__section-dropdown').slideUp(650);
          $('.header-catalog__section--active').removeClass('header-catalog__section--active');

          navModalSectionClicked.find('.header-catalog__section-dropdown').slideDown(500);
          navModalSectionClicked.addClass('header-catalog__section--active');
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
      console.log(citySearchButton)

      // button open
      citySearchButton.on('click', function() {
        header.addClass('header--city-search');
      });

      // button close
      cityModalButton.on('click', function() {
        header.removeClass('header--city-search');
      });

      //click close
      $(window).on('click', function(event) {
        const target = event.target.closest('.header__city-button');

        if (
          header.hasClass('header--city-search') &&
          target !== citySearchButton[0] &&
          $(event.target).closest('.modal-search--city').length === 0 &&
          $(target).closest('.nav-modal').length === 0 
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
        header.removeClass('header--catalog-search');
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
					iconImageHref: 'assets/images/svg/placemark.svg',
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

// tabs
{
  $(() => {
    // attrs:
    // data-tabs-id: id компонента
    // data-tabs-button: id таба
    // data-tabs-tab: id таба
    // data-tabs-active: id активного таба

    const tabs_el = $('[data-tabs-id]');

    // проверка на существование компонентов
    if (tabs_el.length !== 0) {
      const tabs_id = [];

      // сбор id компонентов
      tabs_el.each(function () {
        const cur_id = $(this).data('tabs-id');

        if (tabs_id.indexOf(cur_id) === -1) {
          tabs_id.push(cur_id);
        }
      });

      // обработка компонентов (по id)
      tabs_id.forEach(comp_id => {
        const tab_el = $(`[data-tabs-id="${comp_id}"][data-tabs-tab]`);
        const button_el = $(`[data-tabs-id="${comp_id}"][data-tabs-button]`);

        // проверка на существование табов
        if (tab_el.length !== 0) {
          const state = {
            id: null, // active таб
            update: function (id) {
              this.id = id;
            },
            close: function () {
              tab_el.filter(`[data-tabs-tab="${this.id}"]`).removeAttr('data-tabs-active');
              button_el.filter(`[data-tabs-button="${this.id}"]`).removeAttr('data-tabs-active');
            },
            open: function () {
              tab_el.filter(`[data-tabs-tab="${this.id}"]`).attr('data-tabs-active', '');
              button_el.filter(`[data-tabs-button="${this.id}"]`).attr('data-tabs-active', '');
            },
            change: function (id) {
              if (id && id !== this.id) {
                this.close();
                this.update(id);
                this.open();
              }
            },
            init: function () {
              const tab_active_id = button_el.filter('[data-tabs-active]').data('tabs-button');
              this.update(tab_active_id);
            }
          };

          state.init();

          button_el.on('click', function () {
            const tab_clicked_id = $(this).data('tabs-button');
            state.change(tab_clicked_id);
          });
        }
      });
    }
  });
}
