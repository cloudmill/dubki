// imports
import "Styles/_app.scss";

import Swiper from "swiper/bundle";
import 'select2';
import AOS from 'aos';
import '@fancyapps/fancybox';
import 'parsleyjs';
import mask from "inputmask";
import SmoothScroll from 'smoothscroll-for-websites';
import tippy from 'tippy.js';
require('jquery-ui/ui/widgets/autocomplete');

$(() => {
  require("assets/scripts/backend");
});

// AOS
{
  $(() => {
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
      offset: 0,
      duration: 1000,
    });

    window.addEventListener('scroll', aosRefresh);

    function aosRefresh() {
      const timeout = setTimeout( () => {
        clearTimeout(timeout)
        AOS.refresh();
        window.addEventListener('scroll', aosRefresh);
      },1000);

      window.removeEventListener('scroll', aosRefresh);
    }
  });
}

// vars
const BREAKPOINT = 1280
const BREAKPOINT_MEDIA = matchMedia(`(min-width: ${BREAKPOINT}px)`)

// functions
function toggleDataAttr($element, attr, value = '') {
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

    // Рецепты, Главная
    // слайдер Рецепты на Главная
    if ($('.index').length !== 0) {
      // частота трекинга перемещения
      const moveFps = 60
      // parallax эффект
      let parallaxRatio
      const parallaxRatioM = 15
      const parallaxRatioD = 3
      // интервал трекинга перемещения
      let moveInterval
      // элемент, который перемещаем (анимируем)
      const moveEl = $('.index__recipes-side')
      // элемент, перемещение которого отслеживаем
      const moveTrackingEl = $('.index__recipes-slide').first()

      // адаптив
      const breakpoint = matchMedia(`(min-width: ${BREAKPOINT}px)`)
      parallaxRatio = parallaxRatioM
      if (breakpoint.matches) {
        parallaxRatio = parallaxRatioD
      }
      breakpoint.addListener(event => {
        if (event.matches) {
          parallaxRatio = parallaxRatioD
        } else {
          parallaxRatio = parallaxRatioM
        }
      })

      // инициализация
      const slider = $('.index__recipes-slider') // контейнер swiper'a
      const swiper = new Swiper(slider[0], { // экземпляр swiper'a
        slidesPerView: 'auto',
        spaceBetween: 20,
        touchStartPreventDefault: false,
      })

      // обработка событий: начало/конец движения слайдера
      // начало
      swiper.on('sliderFirstMove', () => {
        moveInterval = setInterval(moveHandler, 1000 / moveFps)
      })
      // конец
      swiper.on('transitionEnd', () => {
        clearInterval(moveInterval)
      })

      function moveHandler() {
        moveUpdate(getMoveDistance())
      }

      function moveUpdate(distance) {
        // вычиление данных анимации (css)
        // transform (движение "влево")
        const transform = `translateX(${-distance / parallaxRatio}px)` // ? 15
        // opacity
        // в пределах [0, 1]
        let opacity = 1 - (distance / (moveTrackingEl.width() + 20))
        opacity = opacity < 0 ? 0 : opacity

        // анимация
        requestAnimationFrame(() => {
          moveEl.css('transform', transform)
          moveEl.css('opacity', opacity)
        })
      }

      function getMoveDistance() {
        const startX = slider.offset().left
        const x = moveTrackingEl.offset().left

        // движение "влево" (startX > x)
        // поэтому вычитаем (startX - x)
        // получаем положительный distance при движении влево
        const distance = startX - x
        // "отсекаем" движение вправо
        return distance < 0 ? 0 : distance
      }
    }
    // курсор Рецепты на Главная
    if ($('.index').length !== 0) {
      const area = $('.index__recipes-row')
      const cursor = $('.index__recipes-cursor')

      // состояние курсора
      // над side частью (заголовок + кнопка)
      let onSide = false
      // над всем блоком со слайдером (side + slider)
      let onArea = false

      // перемещаем катомный курсор (верстку, dom эл-т) в конец .wrapper страниц из секции
      cursor.remove();
      cursor.appendTo($('body > .wrapper'))

      // появление (opacity: 1) кастомного курсора только над карточками рецептов
      area.on('mouseenter', () => {
        onArea = true
        if (!onSide) {
          requestAnimationFrame(() => {
            cursor.css('opacity', 1)
          })
        }
      })
      area.on('mouseleave', () => {
        onArea = false
        requestAnimationFrame(() => {
          cursor.css('opacity', '')
        })
      })
      $('.index__recipes-side').on('mouseenter', () => {
        onSide = true
        requestAnimationFrame(() => {
          cursor.css('opacity', '')
        })
      })
      $('.index__recipes-side').on('mouseleave', () => {
        onSide = false
        setTimeout(() => {
          if (onArea) {
            requestAnimationFrame(() => {
              cursor.css('opacity', 1)
            })
          }
        }, 0)
      })

      // для перемещения (следования за курсором) кастомного курсора используем transform + pos. fixed
      function mouseMoveHandler(event) {
        cursor.css('transform', `translate(calc(${event.originalEvent.clientX}px - 50%), calc(${event.originalEvent.clientY}px - 50%))`)
      }

      // перемещение кастомного курсора в пределах всех секции Рецепты
      $('.index__recipes').on('mousemove', mouseMoveHandler)

      // решение проблемы с drag-n-drop в firefox (отключение drag-n-drop)
      $('.index__recipes-slide').on('mousedown', event => {
        if (event.preventDefault) {
          event.preventDefault()
        }
      })
    }

    // Похожие товары, Карточка продукта
    if ($('.product-slider').length !== 0) {
      const swiperProductSlider = new Swiper($('.product-slider')[0], {
        slidesPerView: 'auto',
        spaceBetween: 5,

        breakpoints: {
          [BREAKPOINT]: {
            spaceBetween: 20,
          }
        }
      });

      $('.slider-button--next').on('click', function () {
        swiperProductSlider.slideNext();
      });
      $('.slider-button--prev').on('click', function () {
        swiperProductSlider.slidePrev();
      });
    }

    // страница product



  });
}

// product
{
  const product = $('.product-card');

  if (product.length !== 0) {
    const swiperProduct = new Swiper($('.products')[0], {
      slidesPerView: 'auto',
      loop: true,
    })

    $('.slider-button').on('click', function () {
      swiperProduct.slideNext();
    });

    const productThumbs = new Swiper($('.product-card__list')[0], {
      slidesPerView: 'auto',
      spaceBetween: 15,
      breakpoints: {
        [BREAKPOINT]: {
          spaceBetween: 20,
        },
      },
    });

    const thumbsSlide = product.find('.product-card__item');

    let lastAction = 'nothing';
    swiperProduct.on('sliderFirstMove', () => {
      lastAction = 'slider swipe';
    })

    productThumbs.on('click', event => {
    lastAction = 'thumbs click';

      swiperProduct.slideTo(event.clickedIndex);

      thumbsSlide.removeClass('product-card__item--active');
      thumbsSlide.eq(event.clickedIndex).addClass('product-card__item--active');
    });

    swiperProduct.on('slideChange', event => {
      productThumbs.slideTo(event.realIndex);

      thumbsSlide.removeClass('product-card__item--active');
      thumbsSlide.eq(event.realIndex).addClass('product-card__item--active');

      lastAction = 'nothing';
    });
  }
}

// about slider
{
  $(() => {
    $('#at-home .shops-card__container').each(function (){
      const slider = $(this);
      const slider_swiper_el = slider.find('.shops-card__frame');

      const slider_prev_id = slider.data('slider-prev-id');
      const slider_next_id = slider.data('slider-next-id');

      const sliderShops = new Swiper(slider_swiper_el[0], {
        slidesPerView: 'auto',
      });

      $('[data-slider-id="' + slider_prev_id + '"]').on('click', () => {
        sliderShops.slidePrev();
      });

      $('[data-slider-id="' + slider_next_id + '"]').on('click', () => {
        sliderShops.slideNext();
      });
    })
    // tabs
    {
      const shops = $('.shops');
      if (shops.length !== 0) {
        shops.addClass('shops--hidden');

        let isInit = true
        $('[data-tab]').on('click', function() {
          const tabId = $(this).data('tab');

          if ($(tabId).hasClass('shops--active')) {
            $(tabId).addClass('shops--active');
          } else {
            shops.removeClass('shops--active');
            $('.shops-format__button').removeClass('shops-format__button--active');

            $(this).addClass('shops-format__button--active');
            $(tabId).addClass('shops--active');
          }

          if (tabId === '#self-service') {
            if (isInit) {
              $('#self-service .shops-card__container').each(function (){
                const slider = $(this);
                const slider_swiper_el = slider.find('.shops-card__frame');

                const slider_prev_id = slider.data('slider-prev-id');
                const slider_next_id = slider.data('slider-next-id');

                const sliderShops = new Swiper(slider_swiper_el[0], {
                  slidesPerView: 'auto',
                });
                console.log(123);

                $('[data-slider-id="' + slider_prev_id + '"]').on('click', () => {
                  sliderShops.slidePrev();
                });

                $('[data-slider-id="' + slider_next_id + '"]').on('click', () => {
                  sliderShops.slideNext();
                });
              })

              isInit = false
            }
          }
        });
      }
    }
  });
}

// top slider
{
  $(() => {
    // desktop
    {
      const sliders = $('.top__slider--desktop .top__swiper')
      const swipers = []

      sliders.each(function () {
        const slider = $(this)

        swipers.push(new Swiper(slider[0], {
          effect: 'flip',
          loop: true,
          allowTouchMove: false,
          flipEffect: {
            slideShadows: false,
          },
        }))
      })

      const buttonNext = $('.top__button')
      buttonNext.on('click', () => {
        if (BREAKPOINT_MEDIA.matches) {
          swipers.forEach(swiper => {
            swiper.slideNext()
          })
        }
      })
    }

    // mobile
    {
      const slider = $('.top__slider--mobile .top__swiper')

      if (slider.length !== 0) {
        const swiper = new Swiper(slider[0], {
          slidesPerView: 'auto',
          spaceBetween: 15,
          loop: true,
        })

        const buttonNext = $('.top__button')
        buttonNext.on('click', () => {
          if (!BREAKPOINT_MEDIA.matches) {
            swiper.slideNext()
          }
        })
      }
    }

    setTimeout(() => {
      $('.top__container').css('opacity', 1)
    }, 1000)
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

      $('.slider-button--next').on('click', function () {
        swiper.slideNext();
      });
      $('.slider-button--prev').on('click', function () {
        swiper.slidePrev();
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
      const recipeHeight = recipe.innerHeight() + 100;
      const recipeList = $('.recipe__ingredients');


      $(window).on('scroll', function () {
        const scrollPos = $(this).scrollTop();
        const scrollIng = scrollPos + 130;

        if (recipeHeight < scrollPos) {
          recipeList.removeClass('recipe__ingredients--fixed');
          $('.recipe__col').addClass('recipe__col--sticky');
        } else if (recipePos < scrollIng) {
          $('.recipe__col').removeClass('recipe__col--sticky');
          recipeList.addClass('recipe__ingredients--fixed');
        } else {
          $('.recipe__col').removeClass('recipe__col--sticky');
          recipeList.removeClass('recipe__ingredients--fixed');
        }
      });


    }
  });
}

// шапка, модальные окна, каталог (слева), меню (справа)
// jobs select
{
  $(() => {
    const vacancies = $('.vacancies__row');

    if (vacancies.length !== 0) {
      const vacanciesPos = vacancies.offset().top;
      const vacanciesHeight = vacancies.innerHeight();
      const vacanciesContainer = vacanciesPos + vacanciesHeight - 250;
      const vacanciesCity = $('.vacancies__city');

      $(window).on('scroll', function () {
        const scrollPos = $(this).scrollTop();

        if (scrollPos > vacanciesPos) {
          vacanciesCity.addClass('vacancies__city--fixed');
        } else {
          vacanciesCity.removeClass('vacancies__city--fixed');
        }

        // if (scrollPos > vacanciesContainer) {
        //   vacanciesCity.removeClass('vacancies__city--fixed');
        // } else
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

      // клик по кнопке вызова модального окна (открытие-закрытие)
      navModalButton.on('click', function () {
        if (header.hasClass('header--nav-modal')) { // если модальное окно открыто - закрываем
          header.removeClass('header--nav-modal'); // обновляем модификатор header (шапка, контейнер модальных окон)
          navModalButton.removeClass('button-modal--active'); // обновляем модификатор кнопки
        } else { // открывыем, аналогично (выше)
          header.addClass('header--nav-modal');
          navModalButton.addClass('button-modal--active');
        }
      });

      // клик вне модального окна (закрытие)
      $(window).on('click', event => {
        if (
          header.hasClass('header--nav-modal') && // если модальное окно открыто
          $(event.target).closest(navModalButton).length === 0 && // + клик не по кнопке
          $(event.target).closest('.nav-modal').length === 0 // + клик не по модальному окну
        ) {
          header.removeClass('header--nav-modal');
          navModalButton.removeClass('button-modal--active');
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

      navModalButton.on('click', function () {
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

      // button open
      citySearchButton.on('click', function () {
        header.addClass('header--city-search');
      });

      // button close
      cityModalButton.on('click', function () {
        header.removeClass('header--city-search');
      });

      //click close
      $(window).on('click', function (event) {
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
      catalogSearchButton.on('click', function () {
        header.addClass('header--catalog-search');
      });

      // button close
      catalogModalButton.on('click', function () {
        header.removeClass('header--catalog-search');
      });

      //click close
      $(window).on('click', function (event) {
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
  $(window).on('click', event => {
    const button = $(event.target).closest('.vacancies-list__row')

    if (button.lenght !== 0) {
      const item = button.closest('.vacancies-list__item')
      const drop = item.find('.vacancies-list__dropdown')

      button.toggleClass('vacancies-list__row--active')
      drop.slideToggle()
    }
  })
}

// select
{
  $(() => {
    // const select = $('.select__select');
    $('.select__select').each(function () {
      const select = $(this);
      const selectWrapper = select.closest('.select-wrapper');
      const selectWrapperStyles = getComputedStyle(selectWrapper[0]);
      if (selectWrapperStyles.position === 'static') {
        selectWrapper.css('position', 'relative');
      }

      select.select2({
        dropdownParent: selectWrapper,
        selectOnClose: true,
      });

      select.on('select2:open', () => {
        selectWrapper.css('z-index', '100000');

        const selectDropdown = selectWrapper.find('.select2-dropdown');

        selectDropdown.hide();
        const timeout = setTimeout(() => {
          selectDropdown.slideDown({ duration: 500, });

          clearTimeout(timeout);
        }, 0);
      });

      select.on('select2:closing', event => {
        event.preventDefault();

        const selectDropdown = selectWrapper.find('.select2-dropdown');

        const timeout = setTimeout(() => {
          selectWrapper.css('z-index', '');

          const select2 = selectWrapper.find('.select2');

          select2.addClass('closing');
          select2.removeClass('select2-container--open');
          selectDropdown.slideUp(500, () => {
            const timeout2 = setTimeout(() => {
              select.select2('destroy');
              select.select2({
                dropdownParent: selectWrapper,
                selectOnClose: true,
              });
              select.removeClass('closing');

              selectWrapper.css('z-index', '');

              clearTimeout(timeout2);
            }, 300);
          });
          clearTimeout(timeout);
        }, 0);
      });

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

      formButton.on('submit', function () {
        form.addClass('form--hidden');
        response.addClass('response--active');
        $('.provider__row').addClass('provider__row--active');
      });

      responseButton.on('click', function () {
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

// fixed header
{
  $(() => {
    const header = $('.header');

    if (header.length !== 0) {
      let previousTop = $(window).scrollTop()

      $(window).on('scroll', function () {
        const currentTop = $(window).scrollTop();

        if (!(
          header.hasClass('header--nav-modal') ||
          header.hasClass('header--catalog-search') ||
          header.hasClass('header--catalog-modal') ||
          header.hasClass('header--city-search')
        )) {
          if (currentTop < previousTop) {
            header.removeClass('header--scroll--down');
            header.addClass('header--scroll--up');
          } else {
            header.removeClass('header--scroll--up');
            header.addClass('header--scroll--down');
          }
        }

        if (currentTop < 1) {
          header.removeClass('header--scroll--up');
          header.removeClass('header--scroll--down');
        }

        previousTop = currentTop;
      });

      if ($(window).scrollTop() >= 1) {
        header.addClass('header--scroll--up');
      }
    };
  });
}

// catalog-modal
{
  // ждем полной загрузки
  // т.к. нам нужен оригинальный шрифт
  // для корректных расчетов
  $(window).on('load', () => {
    // логика скроллбаров
    {
      const scrollbars = $('[data-scrollbar-id]')

      scrollbars.each(function () {
        // скроллбар
        const scrollbar = $(this)
        const scrollbarID = scrollbar.data('scrollbar-id')

        // контейнеры
        const scrollbarOuter = $(`[data-scrollbar-outer="${scrollbarID}"]`)
        const scrollbarInner = $(`[data-scrollbar-inner="${scrollbarID}"]`)

        // расстояние скролла
        const scrollbarOuterHeight = scrollbarOuter[0].offsetHeight
        const scrollbarInnerHeight = scrollbarInner[0].offsetHeight
        const scrollbarDist = scrollbarInnerHeight - scrollbarOuterHeight

        // нужен ли скроллбар?
        if (scrollbarDist <= 0) {
          scrollbar.css('display', 'none')
          return
        }

        // ползунок
        const thumb = $(`[data-scrollbar-thumb="${scrollbarID}"]`)
        const thumbHeight = scrollbarOuterHeight / scrollbarInnerHeight * 100 // в % от скроллбара
        const thumbDist = 100 - thumbHeight // в % от скроллбара

        // высота ползунка (инициализация)
        requestAnimationFrame(() => {
          thumb.css('height', `${thumbHeight}%`)
        })

        // движение ползунка
        scrollbarOuter.on('scroll', () => {
          // текущий скролл в px
          const y = scrollbarOuter.scrollTop()
          // текущий скролл в %
          let progress = Math.round(y / scrollbarDist * 100)
          progress = progress < 0 ? 0 : (progress > 100 ? 100 : progress)

          requestAnimationFrame(() => {
            thumb.css('top', `${thumbDist * (progress / 100)}%`)
          })
        })
      })
    }

    // логика табов
    // после логики скроллбаров
    // т.к. логика скроллбаров в вычислениях опирается на содержимое контейнеров
    // а в логике табов происходит скрытие содержимого контейнеров
    {
      const categoryItems = $('[data-category-item]')

      const categoryTabs = $('[data-category-tab]')
      categoryTabs.css('display', 'none')

      categoryItems.each(function () {
        const categoryItem = $(this)
        const categoryID = categoryItem.data('category-item')
        const categoryButton = categoryItem.find('[data-category-button]')

        const categoryIsActive = 'categoryActive' in categoryItem[0].dataset

        if (categoryIsActive) {
          $(`[data-category-tab="${categoryID}"]`).css('display', '')
        }

        const isSingle = 'categorySingle' in categoryItem[0].dataset
        categoryButton.on('mouseenter', () => {
          // if (!isSingle) {
            const categoryActiveItem = categoryItems.filter('[data-category-active]')
            delete categoryActiveItem[0].dataset['categoryActive']

            $(this)[0].dataset['categoryActive'] = ''

            categoryTabs.css('display', 'none')
            $(`[data-category-tab="${categoryID}"]`).css('display', '')
          // }
        })
      })
    }

    {
      const header = $('.header');

      if (header.length !== 0) {
        const catalogModalButton = header.find('.header__catalog-button[data-modal-button]');

        catalogModalButton.on('click', function () {
          if (header.hasClass('header--catalog-modal')) {
            header.removeClass('header--catalog-modal');
            catalogModalButton.removeClass('header__catalog-button--active');
          } else {
            header.addClass('header--catalog-modal');
            catalogModalButton.addClass('header__catalog-button--active');
          }
        });

        $(window).on('click', event => {
          if (
            header.hasClass('header--catalog-modal') && // если модальное окно открыто
            $(event.target).closest(catalogModalButton).length === 0 && // + клик не по кнопке
            $(event.target).closest('.catalog-modal').length === 0 // + клик не по модальному окну
          ) {
            header.removeClass('header--catalog-modal'); // обновляем состояние header (стили прокидываются на catalog-modal)
            catalogModalButton.removeClass('header__catalog-button--active'); // обновляем состояние кнопки
          }
        })
      }
    }
  })
}

// map
{
  ymaps.ready(() => {
    const container = $('#map')

    if (container.length !== 0) {
      // get data
      $.getJSON('/shops.json', data => {
      // $.getJSON('/assets/data/mapData.json', data => {
        // clusters
        const clusters = {}
        data.geoPoints.forEach(geoPoint => {
          const location = geoPoint.location

          if (location in clusters) {
            clusters[location].push(geoPoint)
          } else {
            clusters[location] = [geoPoint]
          }
        })

        data.regionList = data.regionList.sort((a, b) => {
          if (a.NAME > b.NAME) {
            return 1
          } else if (a.NAME < b.NAME) {
            return -1
          } else {
            return 0
          }
        })

        // select init
        const select = $('[data-map-select]')

        select.select2('destroy')

        let selectHtml = ''
        data.regionList.forEach(region => {
          selectHtml += `<option value="${region.ID}" ${region.NAME === data.startLocation ? 'selected' : ''}>${region.NAME}</option>`
        })
        
        select.html(selectHtml)

        { // копия из раздела select
          const selectWrapper = select.closest('.select-wrapper');
          const selectWrapperStyles = getComputedStyle(selectWrapper[0]);
          if (selectWrapperStyles.position === 'static') {
            selectWrapper.css('position', 'relative');
          }

          select.select2({
            dropdownParent: selectWrapper,
            selectOnClose: true,
          });

          select.on('select2:open', () => {
            selectWrapper.css('z-index', '100000');

            const selectDropdown = selectWrapper.find('.select2-dropdown');

            selectDropdown.hide();
            const timeout = setTimeout(() => {
              selectDropdown.slideDown({ duration: 500, });

              clearTimeout(timeout);
            }, 0);
          });

          select.on('select2:closing', event => {
            event.preventDefault();

            const selectDropdown = selectWrapper.find('.select2-dropdown');

            const timeout = setTimeout(() => {
              selectWrapper.css('z-index', '');

              const select2 = selectWrapper.find('.select2');

              select2.addClass('closing');
              select2.removeClass('select2-container--open');
              selectDropdown.slideUp(500, () => {
                const timeout2 = setTimeout(() => {
                  select.select2('destroy');
                  select.select2({
                    dropdownParent: selectWrapper,
                    selectOnClose: true,
                  });
                  select.removeClass('closing');

                  selectWrapper.css('z-index', '');

                  clearTimeout(timeout2);
                }, 300);
              });
              clearTimeout(timeout);
            }, 0);
          });
        }

        // list
        function updateList(location) {
          const list = $('[data-map-list]')

          let listHtml = ''
          clusters[location].forEach(geoPoint => {
            listHtml += `<li class="map-list__item" data-map-id="${geoPoint.id}">`
            listHtml += `<div class="map-list__wrapper">`
            listHtml += `<div class="map-balloon">`
            listHtml += `<div class="map-balloon__container">`

            if ('label' in geoPoint) {
              listHtml += `<div class="map-balloon__store">${geoPoint.label}</div>`
            }

            listHtml += `<div class="map-balloon__addres">${geoPoint.address}</div>`

            listHtml += `<div class="map-balloon__times">`
            geoPoint.schedules.forEach(schedule => {
              listHtml += `<div class="map-balloon__time">${schedule}</div>`
            })
            listHtml += `</div>`

            listHtml += `</div>`
            listHtml += `</div>`
            listHtml += `</div>`
            listHtml += `</li>`
          })

          list.html(listHtml)
        }
        updateList(data.startLocation)

        // map
        const map = {
          markWidth: 53,
          markHeight: 56,
        }
        map.ymap = new ymaps.Map('map', {
          zoom: 12,
          controls: [],

          // ?
          center: clusters[data.startLocation][0].coordinates,
        },{
          maxZoom: 22,
        })

        // margin area
        // list margin area
        function getListMarginArea() {
          return map.ymap.margin.addArea({
            top: 0,
            left: 0,
            width: '350px',
            height: '100%',
          })
        }
        // init
        map.marginArea = {
          list: BREAKPOINT_MEDIA.matches ? getListMarginArea() : null,
        }
        // breakpoint
        BREAKPOINT_MEDIA.addListener(event => {
          if (event.matches) {
            map.marginArea.list = getListMarginArea()
          } else {
            map.marginArea.list.remove()
          }
        })

        map.placemarks = {}
        map.clusters = {}
        for (let location in clusters) {
          // ?
          map.clusters[location] = new ymaps.Clusterer({
            clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),

            clusterIconShape: {
              type: 'Rectangle',
              coordinates: [[0, 0], [50, 50]]
            },
          })

          clusters[location].forEach(geoPoint => {
            // ?
            let template = [
              '<div class="map-balloon--alt">',
              '<div class="map-balloon__container">',
            ]
            if ('label' in geoPoint) {
              template = template.concat([
                '<div class="map-balloon__store">',
                geoPoint.label,
                '</div>',
              ])
            }
            template = template.concat([
              '<div class="map-balloon__addres">',
              geoPoint.address,
              '</div>',
            ])
            template = template.concat([
              '<div class="map-balloon__times">',
            ])
            geoPoint.schedules.forEach(schedule => {
              template = template.concat([
                '<div class="map-balloon__time">',
                schedule,
                '</div>',
              ])
            })
            template = template.concat([
              '</div>',
              '</div>',
              '</div>',
            ])

            // ?
            const layout = ymaps.templateLayoutFactory.createClass(
              template.join(''),
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
                    top: -(this._$element[0].offsetHeight + map.markHeight / 2),
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
            )

            // ?
            const placemarkGeo = new ymaps.Placemark(geoPoint.coordinates, {
              id: geoPoint.id,
            }, {
              iconLayout: 'default#image',
              iconImageHref: '/local/templates/main/assets/images/svg/placemark.svg',
              // iconImageHref: '/assets/images/svg/placemark.svg',
              iconImageSize: [map.markWidth, map.markHeight],
              iconImageOffset: [-map.markWidth / 2, -map.markHeight],

              balloonLayout: layout,
              balloonPanelMaxMapArea: 0,
              hideIconOnBalloonOpen: false,
            })

            map.placemarks[geoPoint.id] = placemarkGeo
            map.clusters[location].add(placemarkGeo)
          })
        }
        map.ymap.events.add('click', (event) => {
          if (map.ymap.balloon.isOpen()) {
            map.ymap.balloon.close();
          }
        });
        function updateMap(location) {
          map.ymap.geoObjects.removeAll()
          map.ymap.geoObjects.add(map.clusters[location])

          let mapMargin = map.ymap.margin.getMargin()
          let maxIconSize = Math.max(map.markWidth, map.markHeight)
          mapMargin = mapMargin.map(margin => margin + maxIconSize)
          
          map.ymap.setBounds(map.clusters[location].getBounds(), {
            zoomMargin: mapMargin,
          }).then(() => {
            if (clusters[location].length === 1) {
              map.ymap.setZoom(18)
            }
          })
        }
        updateMap(data.startLocation)

        // change
        select.on('change', event => {
          const region_id = select.val()
          const region_name = select.find('option:selected').text() // ?

          updateList(region_name)
          updateMap(region_name)
        })

        // list -> point
        $(window).on('click', event => {
          const listItem = $(event.target).closest('.map-balloon')

          if (listItem.length !== 0) {
            const listItemWrapper = listItem.closest('.map-list__item')
            const listItemWrapperAll = $('.map-list__item')

            const listItemID = listItemWrapper.data('map-id')

            const targetPlacemark = map.placemarks[listItemID]

            map.ymap.setCenter(targetPlacemark.geometry._coordinates, 15)
            targetPlacemark.balloon.open()

            if (listItemWrapper.hasClass('map-list__item--active')) {
              listItemWrapper.addClass('map-list__item--active')
            } else {
              listItemWrapperAll.removeClass('map-list__item--active')

              listItemWrapper.addClass('map-list__item--active')
            }
          }
        })
      })
    }
  })
}

// validation
{
  $(() => {

    $("form").parsley();

    window.Parsley.addValidator("phone", {
      validateString: function (value) {
        if (value.length == 17 && value[4] == 9) {
          return true;
        } else {
          return false;
        }
      },
    });

    Inputmask({ mask: "+7 (999) 999-9999", showMaskOnHover: false }).mask("[data-mask=phone]");
  });
}

// product-announcement
{
  $(() => {
    $('.product-announcement').each(function () {
      const comp = $(this)
      const title = comp.find('.product-announcement__title')

      const originalText = title.text()

      let lineCount = 3
      if (comp.hasClass('product-announcement--small')) {
        lineCount = 2
      }

      const lineHeightM = 12
      const lineHeightD = 18

      function getLineHeight() {
        if (comp.hasClass('product-announcement--small')) {
          return 16
        }
        if (comp.hasClass('product-announcement--large')) {
          return 22
        }
        return BREAKPOINT_MEDIA.matches ? lineHeightD : lineHeightM
      }

      let lineHeight = getLineHeight()
      BREAKPOINT_MEDIA.addListener(() => {
        lineHeight = getLineHeight()
      })

      function updateTitle() {
        title.text(originalText)

        if (title.height() > (lineHeight * lineCount)) {
          let newText = originalText

          while (title.height() > (lineHeight * lineCount)) {
            newText = newText.substring(0, newText.length - 1).trim()

            title.text(newText)
          }

          newText = newText.substring(0, newText.length - 5).trim() + '...'
          title.text(newText)
        }
      }

      updateTitle()

      window.addEventListener('resize', handleResize, {
        once: true,
      })

      function handleResize() {
        updateTitle()

        setTimeout(() => {
          window.addEventListener('resize', handleResize, {
            once: true,
          })
        }, 1000)
      }
    })
  })
}

// about, yt
{
  $(() => {
    const videos = $('.video')

    videos.each(function () {
      const video = $(this)
      const videoBtn = video.find('.video__button')
      const videoYt = video.find('.video__yt')

      videoBtn.on('click', () => {
        videoYt.addClass('video__yt--active')
      })
    })
  })
}

// product, yt
{
  $(() => {
    $('.product-card__video-wrapper').on('click', () => {
      $('.video-modal').addClass('video-modal--active')
    })

    $('.video-modal').on('click', event => {
      if (
        event.target === $('.video-modal')[0] ||
        event.target === $('.video-modal__close')[0]
      ) {
        // ?
        $('.video-modal__yt').attr('src', $('iframe').attr('src'));

        $('.video-modal').removeClass('video-modal--active')
      }
    })
  })
}

// input
{
  $(() => {
    const formInput = $('.form__input');

    formInput.each(function() {
      const currentInput = $(this);
      const formItem = currentInput.closest('.form__item');

      currentInput.on('input', function() {
        if (currentInput.value !== 0) {
          formItem.addClass('form__item--active');
        } else {
          formItem.removeClass('form__item--active');
        }
      });
    });
  });
}

// tooltip
{
  $(() => {

    $('.question').each(function() {
      const tooltipContent = $(this).find('.question__content').text().trim();
      const tooltipMark = $(this).find('.question__mark');

      tippy(tooltipMark[0],  {
        content: tooltipContent,
        // trigger: 'click',
        appendTo: $('.main')[0],
        offset: [0, 5 + 8],
      });
    });


  });
}

// animation about
{
  $(() => {
    const gifts = $('.gifts');

    if (gifts.length !== 0) {
      const giftPos = gifts.offset().top;

      $(window).on('scroll', function() {
        if ($(this).scrollTop() > giftPos - 200) {
          $('.animation').addClass('animation--animated')
        }
      });
    }
  });
}

// parallax
{
  $(() => {
    // about intro
    if ($('.intro').length !== 0) {

      $(window).on('scroll', function() {
        const background = $('.intro__frame');

        if (
          $(this).scrollTop() <= background.offset().top + background.height()
        ) {
            const parallax = ($(this).scrollTop()) / 5;

            requestAnimationFrame(() => {
              $('.intro__bg').css('transform', `translateY(${parallax}px)`);
            })
          }
      });
    }

    // about
    if ($('.about').length !== 0) {

      $('[data-parallax-ratio]').each(function() {
        const parallaxElem = $(this);
        const parallaxRatio = parallaxElem.data('parallax-ratio');

        $(window).on('scroll', function() {
          const background = $('.about__layout');

          if (
            $(this).scrollTop() + $(window).height() >= background.offset().top &&
            $(this).scrollTop() <= background.offset().top + background.innerHeight()
          ) {
              const parallax = ($(this).scrollTop() - background.offset().top) / parallaxRatio;

              requestAnimationFrame(() => {
                parallaxElem.css('transform', `translateY(${parallax}px)`);
              })
            }
        });
      });
    }

    //index
    const hero = $('.hero');
    if (hero.length !== 0) {
      $('[data-layer-ratio]').each(function() {
        const parallaxElem = $(this);
        const parallaxRatio = parallaxElem.data('layer-ratio');

        $(window).on('scroll', function() {

          if (
            $(this).scrollTop() <= hero.offset().top + hero.innerHeight()
          ) {
              const parallax = ($(this).scrollTop() - hero.offset().top) / parallaxRatio;

              requestAnimationFrame(() => {
                parallaxElem.css('transform', `translateY(${parallax}px)`);
              })
            }
        });
      });
    }
  });
}

// smooth scroll
{
  $(window).on('load', () => {
    SmoothScroll();
  });
}
