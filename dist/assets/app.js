(()=>{"use strict";var e,a={168:(e,a,t)=>{var o=t(566),n=(t(490),t(354)),s=t.n(n),i=(t(917),t(638));s().init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:1500,easing:"ease",once:!1,mirror:!1});i((function(){var e=i(".slider");if(0!==e.length)new o.Z(e[0],{slidesPerView:"auto",spaceBetween:20});new o.Z(i(".product-slider")[0],{slidesPerView:"auto",spaceBetween:20})})),i((function(){var e,a,t,n=i(".top__container");if(0!==n.length){var s=new o.Z(n[0],{slidesPerView:"auto",slidesPerGroup:1,spaceBetween:25,loop:!0,breakpoints:(e={},a=1280,t={slidesPerGroup:3},a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e)});i(".top__button").on("click",(function(){console.log(123),s.slideNext()}))}})),i((function(){var e=i(".slider-recipe");if(0!==e.length)new o.Z(e[0],{slidesPerView:"auto",spaceBetween:20})})),i((function(){var e=i(".recipe__row");if(0!==e.length){var a=e.offset().top,t=e.innerHeight(),o=i(".recipe__ingredients");i(window).on("scroll",(function(){var e=i(this).scrollTop();t<e?o.removeClass("recipe__ingredients--fixed"):a<e?o.addClass("recipe__ingredients--fixed"):o.removeClass("recipe__ingredients--fixed")}))}})),i((function(){var e=i(".header");if(0!==e.length){var a=e.find(".header__button-button"),t=e.find(".header__catalog-button");a.on("click",(function(){e.hasClass("header--nav-modal")?(e.removeClass("header--nav-modal"),a.removeClass("header__button-button--active")):(e.addClass("header--nav-modal"),a.addClass("button-modal--active"))})),t.on("click",(function(){e.hasClass("header--catalog-modal")?(e.removeClass("header--catalog-modal"),t.removeClass("header__catalog-button--active")):(e.addClass("header--catalog-modal"),t.addClass("header__catalog-button--active"))})),i(window).on("click",(function(o){e.hasClass("header--nav-modal")&&0===i(o.target).closest(a).length&&0===i(o.target).closest(".nav-modal").length&&(e.removeClass("header--nav-modal"),a.removeClass("button-modal--active")),e.hasClass("header--catalog-modal")&&0===i(o.target).closest(t).length&&0===i(o.target).closest(".catalog-modal").length&&(e.removeClass("header--catalog-modal"),t.removeClass("header__catalog-button--active"))}))}})),i((function(){var e=i(".nav-modal");if(0!==e.length){var a=e.find(".header__catalog-button"),t=e.find(".header-catalog__dropdown");a.on("click",(function(){a.toggleClass("header__catalog-button--active"),t.slideToggle()})),e.find(".header-catalog__section").find(".header-catalog__section-button").on("click",(function(){var e=i(this).closest(".header-catalog__section");e.hasClass("header-catalog__section--active")?(e.find(".header-catalog__section-dropdown").slideUp(500),e.removeClass("header-catalog__section--active")):(i(".header-catalog__section--active").find(".header-catalog__section-dropdown").slideUp(650),i(".header-catalog__section--active").removeClass("header-catalog__section--active"),e.find(".header-catalog__section-dropdown").slideDown(500),e.addClass("header-catalog__section--active"))}))}})),i((function(){var e=i(".header");if(0!==e.length){var a=e.find(".header__city-button"),t=e.find(".modal-search__button");console.log(a),a.on("click",(function(){e.addClass("header--city-search")})),t.on("click",(function(){e.removeClass("header--city-search")})),i(window).on("click",(function(t){var o=t.target.closest(".header__city-button");e.hasClass("header--city-search")&&o!==a[0]&&0===i(t.target).closest(".modal-search--city").length&&0===i(o).closest(".nav-modal").length&&e.removeClass("header--city-search")}))}})),i((function(){var e=i(".header");if(0!==e.length){var a=e.find(".header__search-button"),t=e.find(".modal-search__button-catalog");a.on("click",(function(){e.addClass("header--catalog-search")})),t.on("click",(function(){e.removeClass("header--catalog-search")})),i(window).on("click",(function(t){var o=t.target.closest(".header__search-button");e.hasClass("header--catalog-search")&&o!==a[0]&&0===i(t.target).closest(".modal-search--catalog").length&&e.removeClass("header--catalog-search")}))}})),i(".vacancies-list__item").each((function(){var e=i(this),a=e.find(".vacancies-list__button"),t=e.find(".vacancies-list__dropdown");a.on("click",(function(){e.toggleClass("vacancies-list__item--active"),t.slideToggle()}))})),ymaps.ready((function(){if(0!==i("#map").length){var e=new ymaps.Map("map",{center:[51.518328,45.996784],zoom:12,controls:[]}),a=ymaps.templateLayoutFactory.createClass(['<div class="map-balloon--alt">','<div class="map-balloon__container">','<div class="map-balloon__store">',"{{properties.balloonStore}}","</div>",'<div class="map-balloon__addres">',"{{properties.balloonAddres}}","</div>",'<div class="map-balloon__time">','<div class="map-balloon__text">',"{{properties.balloonText}}","</div>","</div>","</div>","</div>"].join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=i(".map-balloon--alt",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){a.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+28)})},getShape:function(){if(!this._isElement(this._$element))return a.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]}});e.events.add("click",(function(){e.balloon.isOpen()&&e.balloon.close()}));var t=new ymaps.GeoObjectCollection;i(".placemarks__item").each((function(){var e=i(this).find(".placemarks__balloon"),o=i(this).find(".map-balloon__store").text().trim(),n=i(this).find(".map-balloon__addres").text().trim(),s=i(this).find(".map-balloon__text").text().trim(),l=[i(this).find(".placemarks__latitude").text().trim(),i(this).find(".placemarks__longitude").text().trim()],r=new ymaps.Placemark(l,{balloon:e,balloonStore:o,balloonAddres:n,balloonText:s},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[53,56],iconImageOffset:[-26.5,-56],balloonLayout:a,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});t.add(r)})),e.geoObjects.add(t),e.setBounds(t.getBounds(),{zoomMargin:Math.max(53,56)})}})),i((function(){i(".select__select").select2({})})),i((function(){var e=i(".form");if(0!==e.length){var a=i(".response"),t=i(".response__btn");i(".form__btn").on("click",(function(){e.addClass("form--hidden"),a.addClass("response--active"),i(".provider__row").addClass("provider__row--active")})),t.on("click",(function(){e.removeClass("form--hidden"),a.removeClass("response--active"),i(".provider__row").removeClass("provider__row--active")}))}})),i((function(){i.fancybox.defaults.closeExisting=!0,i("[data-fancy-button]").on("click",(function(e){e.preventDefault();var a=i(this).data("fancy-button"),t=i('[data-fancy-modal="'.concat(a,'"]'));i.fancybox.open(t)}))})),i((function(){var e=i("[data-tabs-id]");if(0!==e.length){var a=[];e.each((function(){var e=i(this).data("tabs-id");-1===a.indexOf(e)&&a.push(e)})),a.forEach((function(e){var a=i('[data-tabs-id="'.concat(e,'"][data-tabs-tab]')),t=i('[data-tabs-id="'.concat(e,'"][data-tabs-button]'));if(0!==a.length){var o={id:null,update:function(e){this.id=e},close:function(){a.filter('[data-tabs-tab="'.concat(this.id,'"]')).removeAttr("data-tabs-active"),t.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){a.filter('[data-tabs-tab="'.concat(this.id,'"]')).attr("data-tabs-active",""),t.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(e){e&&e!==this.id&&(this.close(),this.update(e),this.open())},init:function(){var e=t.filter("[data-tabs-active]").data("tabs-button");this.update(e)}};o.init(),t.on("click",(function(){var e=i(this).data("tabs-button");o.change(e)}))}}))}}))}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var s=t[e]={exports:{}};return a[e].call(s.exports,s,s.exports,o),s.exports}o.m=a,e=[],o.O=(a,t,n,s)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,n,s]=e[c],l=!0,r=0;r<t.length;r++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](t[r])))?t.splice(r--,1):(l=!1,s<i&&(i=s));l&&(e.splice(c--,1),a=n())}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,n,s]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a}),a},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={143:0,532:0};o.O.j=a=>0===e[a];var a=(a,t)=>{var n,s,[i,l,r]=t,c=0;for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(r)var d=r(o);for(a&&a(t);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[i[c]]=0;return o.O(d)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var n=o.O(void 0,[275,532],(()=>o(168)));n=o.O(n)})();