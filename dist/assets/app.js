(()=>{var e,t={168:(e,t,a)=>{"use strict";var o=a(566),n=(a(490),a(354)),s=a.n(n),i=(a(917),a(563),a(638),a(638));a(956),i((function(){a(10)})),s().init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:1500,easing:"ease",once:!1,mirror:!1});var c=matchMedia("(min-width: ".concat(1280,"px)"));i((function(){var e=i(".slider");if(0!==e.length)new o.Z(e[0],{slidesPerView:"auto",spaceBetween:20});if(0!==i(".index").length){var t,a,n=function(){s(c())},s=function(e){var a="translateX(".concat(-e/t,"px)"),o=1-e/(r.width()+20);o=o<0?0:o,requestAnimationFrame((function(){l.css("transform",a),l.css("opacity",o)}))},c=function(){var e=u.offset().left-r.offset().left;return e<0?0:e},l=i(".index__recipes-side"),r=i(".index__recipes-slide").first(),d=matchMedia("(min-width: ".concat(1280,"px)"));t=15,d.matches&&(t=3),d.addListener((function(e){t=e.matches?3:15}));var u=i(".index__recipes-slider"),f=new o.Z(u[0],{slidesPerView:"auto",spaceBetween:20,touchStartPreventDefault:!1});f.on("sliderFirstMove",(function(){a=setInterval(n,1e3/60)})),f.on("transitionEnd",(function(){clearInterval(a)}))}if(0!==i(".index").length){var h=i(".index__recipes-row"),v=i(".index__recipes-cursor"),p=!1,m=!1;v.appendTo(i("body > .wrapper")),h.on("mouseenter",(function(){m=!0,p||requestAnimationFrame((function(){v.css("opacity",1)}))})),h.on("mouseleave",(function(){m=!1,requestAnimationFrame((function(){v.css("opacity","")}))})),i(".index__recipes-side").on("mouseenter",(function(){p=!0,requestAnimationFrame((function(){v.css("opacity","")}))})),i(".index__recipes-side").on("mouseleave",(function(){p=!1,setTimeout((function(){m&&requestAnimationFrame((function(){v.css("opacity",1)}))}),0)})),i(".index__recipes").on("mousemove",(function(e){v.css("transform","translate(calc(".concat(e.originalEvent.clientX,"px - 50%), calc(").concat(e.originalEvent.clientY,"px - 50%))"))})),i(".index__recipes-slide").on("mousedown",(function(e){e.preventDefault&&e.preventDefault()}))}var _=new o.Z(i(".product-slider")[0],{slidesPerView:"auto",spaceBetween:20});i(".slider-button--next").on("click",(function(){_.slideNext()})),i(".slider-button--prev").on("click",(function(){_.slidePrev()}));var g=new o.Z(i(".products")[0],{slidesPerView:"auto"});i(".slider-button").on("click",(function(){g.slideNext()}))})),i((function(){i(".shops-card__container").each((function(){var e=i(this),t=e.find(".shops-card__frame"),a=e.data("slider-prev-id"),n=e.data("slider-next-id"),s=new o.Z(t[0],{slidesPerView:"auto"});i('[data-slider-id="'+a+'"]').on("click",(function(){s.slidePrev()})),i('[data-slider-id="'+n+'"]').on("click",(function(){s.slideNext()}))}));var e=i(".shops");0!==e.lenght&&(e.addClass("shops--hidden"),i("[data-tab]").on("click",(function(){var t=i(this).data("tab");i(t).hasClass("shops--active")||(e.removeClass("shops--active"),i(".shops-format__button").removeClass("shops-format__button--active"),i(this).addClass("shops-format__button--active")),i(t).addClass("shops--active")})))})),i((function(){var e=i(".top__slider--desktop .top__swiper"),t=[];e.each((function(){var e=i(this);t.push(new o.Z(e[0],{effect:"flip",loop:!0,allowTouchMove:!1,flipEffect:{slideShadows:!1}}))})),i(".top__button").on("click",(function(){c.matches&&t.forEach((function(e){e.slideNext()}))}));var a=i(".top__slider--mobile .top__swiper");if(0!==a.length){var n=new o.Z(a[0],{slidesPerView:"auto",spaceBetween:15,loop:!0});i(".top__button").on("click",(function(){c.matches||n.slideNext()}))}})),i((function(){var e=i(".slider-recipe");if(0!==e.length){var t=new o.Z(e[0],{slidesPerView:"auto",spaceBetween:20});i(".slider-button--next").on("click",(function(){t.slideNext()})),i(".slider-button--prev").on("click",(function(){t.slidePrev()}))}})),i((function(){var e=i(".recipe__row");if(0!==e.length){var t=e.offset().top,a=e.innerHeight()+100,o=i(".recipe__ingredients");i(window).on("scroll",(function(){var e=i(this).scrollTop(),n=e+130;a<e?(o.removeClass("recipe__ingredients--fixed"),i(".recipe__col").addClass("recipe__col--sticky")):t<n?(i(".recipe__col").removeClass("recipe__col--sticky"),o.addClass("recipe__ingredients--fixed")):(i(".recipe__col").removeClass("recipe__col--sticky"),o.removeClass("recipe__ingredients--fixed"))}))}})),i((function(){var e=i(".vacancies__row");if(0!==e.length){var t=e.offset().top,a=(e.innerHeight(),i(".vacancies__city"));i(window).on("scroll",(function(){i(this).scrollTop()>t?a.addClass("vacancies__city--fixed"):a.removeClass("vacancies__city--fixed")}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__button-button");t.on("click",(function(){e.hasClass("header--nav-modal")?(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active")):(e.addClass("header--nav-modal"),t.addClass("button-modal--active"))})),i(window).on("click",(function(a){e.hasClass("header--nav-modal")&&0===i(a.target).closest(t).length&&0===i(a.target).closest(".nav-modal").length&&(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active"))}))}})),i((function(){var e=i(".nav-modal");if(0!==e.length){var t=e.find(".header__catalog-button"),a=e.find(".header-catalog__dropdown");t.on("click",(function(){t.toggleClass("header__catalog-button--active"),a.slideToggle()})),e.find(".header-catalog__section").find(".header-catalog__section-button").on("click",(function(){var e=i(this).closest(".header-catalog__section");e.hasClass("header-catalog__section--active")?(e.find(".header-catalog__section-dropdown").slideUp(500),e.removeClass("header-catalog__section--active")):(i(".header-catalog__section--active").find(".header-catalog__section-dropdown").slideUp(650),i(".header-catalog__section--active").removeClass("header-catalog__section--active"),e.find(".header-catalog__section-dropdown").slideDown(500),e.addClass("header-catalog__section--active"))}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__city-button"),a=e.find(".modal-search__button");t.on("click",(function(){e.addClass("header--city-search")})),a.on("click",(function(){e.removeClass("header--city-search")})),i(window).on("click",(function(a){var o=a.target.closest(".header__city-button");e.hasClass("header--city-search")&&o!==t[0]&&0===i(a.target).closest(".modal-search--city").length&&0===i(o).closest(".nav-modal").length&&e.removeClass("header--city-search")}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__search-button"),a=e.find(".modal-search__button-catalog");t.on("click",(function(){e.addClass("header--catalog-search")})),a.on("click",(function(){e.removeClass("header--catalog-search")})),i(window).on("click",(function(a){var o=a.target.closest(".header__search-button");e.hasClass("header--catalog-search")&&o!==t[0]&&0===i(a.target).closest(".modal-search--catalog").length&&e.removeClass("header--catalog-search")}))}})),i(".vacancies-list__item").each((function(){var e=i(this),t=e.find(".vacancies-list__row"),a=e.find(".vacancies-list__dropdown");t.on("click",(function(){t.toggleClass("vacancies-list__row--active"),a.slideToggle()}))})),ymaps.ready((function(){if(0!==i("#map").length){var e=new ymaps.Map("map",{zoom:12,controls:[]});e.events.add("click",(function(t){e.balloon.isOpen()&&e.balloon.close(),null==t.target&&o.removeClass("map-list__item--active")}));var t=i(".placemarks").text(),a=JSON.parse(t),o=i(".map-list__item"),n=[];a.forEach((function(t,a){var s=['<div class="map-balloon--alt">','<div class="map-balloon__container">'];"label"in t&&(s=s.concat(['<div class="map-balloon__store">',t.label,"</div>"])),s=(s=s.concat(['<div class="map-balloon__addres">',t.title,"</div>"])).concat(['<div class="map-balloon__times">']),t.times.forEach((function(e){s=s.concat(['<div class="map-balloon__time">',e,"</div>"])})),s=s.concat(["</div>","</div>","</div>"]);var c=ymaps.templateLayoutFactory.createClass(s.join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=i(".map-balloon--alt",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){c.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+28)})},getShape:function(){if(!this._isElement(this._$element))return c.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]}}),l=new ymaps.Placemark(t.coordinates,{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[53,56],iconImageOffset:[-26.5,-56],balloonLayout:c,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});l.events.add("click",(function(e){o.eq(a).hasClass("map-list__item--active")?o.removeClass("map-list__item--active"):(o.removeClass("map-list__item--active"),o.eq(a).addClass("map-list__item--active"))})),o.eq(a).on("click",(function(){e.setCenter(t.coordinates,15),l.balloon.open(),i(this).hasClass("map-list__item--active")||o.removeClass("map-list__item--active"),i(this).addClass("map-list__item--active")})),n.push(l)}));var s=new ymaps.Clusterer({clusterIconLayout:ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),clusterIconShape:{type:"Rectangle",coordinates:[[0,0],[50,50]]}});s.add(n),e.geoObjects.add(s),e.setBounds(s.getBounds(),{zoomMargin:Math.max(53,56)})}})),i((function(){i(".select__select").each((function(){var e=i(this),t=e.closest(".select-wrapper");"static"===getComputedStyle(t[0]).position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0}),e.on("select2:open",(function(){t.css("z-index","100000");var e=t.find(".select2-dropdown");e.hide();var a=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(a)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var o=t.find(".select2-dropdown"),n=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),o.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(n)}),0)}))}))})),i((function(){var e=i(".form");if(0!==e.length){var t=i(".response"),a=i(".response__btn");i(".form__btn").on("click",(function(){e.addClass("form--hidden"),t.addClass("response--active"),i(".provider__row").addClass("provider__row--active")})),a.on("click",(function(){e.removeClass("form--hidden"),t.removeClass("response--active"),i(".provider__row").removeClass("provider__row--active")}))}})),i((function(){i.fancybox.defaults.closeExisting=!0,i("[data-fancy-button]").on("click",(function(e){e.preventDefault();var t=i(this).data("fancy-button"),a=i('[data-fancy-modal="'.concat(t,'"]'));i.fancybox.open(a)}))})),i((function(){var e=i("[data-tabs-id]");if(0!==e.length){var t=[];e.each((function(){var e=i(this).data("tabs-id");-1===t.indexOf(e)&&t.push(e)})),t.forEach((function(e){var t=i('[data-tabs-id="'.concat(e,'"][data-tabs-tab]')),a=i('[data-tabs-id="'.concat(e,'"][data-tabs-button]'));if(0!==t.length){var o={id:null,update:function(e){this.id=e},close:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).removeAttr("data-tabs-active"),a.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).attr("data-tabs-active",""),a.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(e){e&&e!==this.id&&(this.close(),this.update(e),this.open())},init:function(){var e=a.filter("[data-tabs-active]").data("tabs-button");this.update(e)}};o.init(),a.on("click",(function(){var e=i(this).data("tabs-button");o.change(e)}))}}))}})),i((function(){var e=i(".header");0!==e.length&&i(window).on("scroll",{previousTop:0},(function(){var t=i(window).scrollTop();e.hasClass("header--nav-modal")||e.hasClass("header--catalog-search")||e.hasClass("header--catalog-modal")||e.hasClass("header--city-search")||(t<this.previousTop?(e.removeClass("header--scroll--down"),e.addClass("header--scroll--up")):(e.removeClass("header--scroll--up"),e.addClass("header--scroll--down"))),t<1&&(e.removeClass("header--scroll--up"),e.removeClass("header--scroll--down")),this.previousTop=t}))})),i(window).on("load",(function(){i("[data-scrollbar-id]").each((function(){var e=i(this),t=e.data("scrollbar-id"),a=i('[data-scrollbar-outer="'.concat(t,'"]')),o=i('[data-scrollbar-inner="'.concat(t,'"]')),n=a[0].offsetHeight,s=o[0].offsetHeight,c=s-n;if(c<=0)e.css("display","none");else{var l=i('[data-scrollbar-thumb="'.concat(t,'"]')),r=n/s*100,d=100-r;requestAnimationFrame((function(){l.css("height","".concat(r,"%"))})),a.on("scroll",(function(){var e=a.scrollTop(),t=Math.round(e/c*100);t=t<0?0:t>100?100:t,requestAnimationFrame((function(){l.css("top","".concat(d*(t/100),"%"))}))}))}}));var e=i("[data-category-item]"),t=i("[data-category-tab]");t.css("display","none"),e.each((function(){var a=this,o=i(this),n=o.data("category-item"),s=o.find("[data-category-button]");"categoryActive"in o[0].dataset&&i('[data-category-tab="'.concat(n,'"]')).css("display","");var c="categorySingle"in o[0].dataset;s.on("mouseenter",(function(){c||(delete e.filter("[data-category-active]")[0].dataset.categoryActive,i(a)[0].dataset.categoryActive="",t.css("display","none"),i('[data-category-tab="'.concat(n,'"]')).css("display",""))}))}));var a=i(".header");if(0!==a.length){var o=a.find(".header__catalog-button[data-modal-button]");o.on("click",(function(){a.hasClass("header--catalog-modal")?(a.removeClass("header--catalog-modal"),o.removeClass("header__catalog-button--active")):(a.addClass("header--catalog-modal"),o.addClass("header__catalog-button--active"))})),i(window).on("click",(function(e){a.hasClass("header--catalog-modal")&&0===i(e.target).closest(o).length&&0===i(e.target).closest(".catalog-modal").length&&(a.removeClass("header--catalog-modal"),o.removeClass("header__catalog-button--active"))}))}})),i((function(){i("[data-autocomplete-input]").each((function(){var e=i(this),t=e.data("autocomplete-input"),a='[data-autocomplete-place="'.concat(t,'"]'),o=e.data("autocomplete-list");e.autocomplete({appendTo:a,source:o,position:{my:"left top+5"}})}))})),ymaps.ready((function(){if(0!==i("#map").length){var e=i(".placemarks").text().trim(),t=JSON.parse(e).geoPoints,a=i("[data-map-select]"),o={};t.forEach((function(e){var t=e.location;t in o||(o[t]=e())})),a.select2("destroy"),a.html("");var n="";o.forEach((function(e,t){n+='<option value="'.concat(e,'" ').concat(t?"":"selected",">").concat(e,"</option>")})),a.html(n);var s=a,c=s.closest(".select-wrapper");"static"===getComputedStyle(c[0]).position&&c.css("position","relative"),s.select2({dropdownParent:c,selectOnClose:!0}),s.on("select2:open",(function(){c.css("z-index","100000");var e=c.find(".select2-dropdown");e.hide();var t=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(t)}),0)})),s.on("select2:closing",(function(e){e.preventDefault();var t=c.find(".select2-dropdown"),a=setTimeout((function(){c.css("z-index","");var e=c.find(".select2");e.addClass("closing"),e.removeClass("select2-container--open"),t.slideUp(500,(function(){var e=setTimeout((function(){s.select2("destroy"),s.select2({dropdownParent:c,selectOnClose:!0}),s.removeClass("closing"),c.css("z-index",""),clearTimeout(e)}),300)})),clearTimeout(a)}),0)}));a.on("change",(function(){a.val()}))}})),i((function(){i((function(){i("#form").parsley()}))}))},10:(e,t,a)=>{var o=a(638);o((function(){console.log("backend")})),o((function(){console.log("vacancy"),o("[data-type=js-vacancy-filter]").on("change",(function(e){var t,a;t=this.value,a=o("[data-type=js-vacancy-list]"),o.ajax({method:"POST",url:window.location.href,data:{ajax:1,cityId:t}}).done((function(e){a.html(e)}))})),o("[data-type=feedback-form]").submit((function(e){e.preventDefault();var t=o(this),a={},n=t.attr("data-message-id");n&&(a.UF_MESSAGE_ID=n),t.find("input, textarea").each((function(){a[o(this).attr("data-uf")]=o(this).val()})),a&&o.ajax({type:"POST",url:"/local/templates/main/include/ajax/feedback_form.php",dataType:"json",data:a,success:function(e){console.log(e)}})})),o("[data-type=redirect-buy-list]").on("click",(function(){window.location.href="/buy/list"}))}))}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,a,n,s)=>{if(!a){var i=1/0;for(r=0;r<e.length;r++){for(var[a,n,s]=e[r],c=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(c=!1,s<i&&(i=s));c&&(e.splice(r--,1),t=n())}return t}s=s||0;for(var r=e.length;r>0&&e[r-1][2]>s;r--)e[r]=e[r-1];e[r]=[a,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var n,s,[i,c,l]=a,r=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(l)var d=l(o);for(t&&t(a);r<i.length;r++)s=i[r],o.o(e,s)&&e[s]&&e[s][0](),e[i[r]]=0;return o.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=o.O(void 0,[421],(()=>o(168)));n=o.O(n)})();