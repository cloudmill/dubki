(()=>{"use strict";var e,t={168:(e,t,a)=>{var n=a(566),o=(a(490),a(354)),s=a.n(o),i=(a(917),a(638));s().init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:1500,easing:"ease",once:!1,mirror:!1});var c=matchMedia("(min-width: ".concat(1280,"px)"));i((function(){var e=i(".slider");if(0!==e.length)new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20});if(0!==i(".index").length){var t,a,o=function(){s(c())},s=function(e){var a="translateX(".concat(-e/t,"px)"),n=1-e/(r.width()+20);n=n<0?0:n,requestAnimationFrame((function(){l.css("transform",a),l.css("opacity",n)}))},c=function(){var e=f.offset().left,t=r.offset().left;console.log(t);var a=e-t;return a<0?0:a},l=i(".index__recipes-side"),r=i(".index__recipes-slide").first(),d=matchMedia("(min-width: ".concat(1280,"px)"));t=15,d.matches&&(t=3),d.addListener((function(e){t=e.matches?3:15}));var f=i(".index__recipes-slider"),h=new n.Z(f[0],{slidesPerView:"auto",spaceBetween:20,touchStartPreventDefault:!1});h.on("sliderFirstMove",(function(){a=setInterval(o,1e3/60)})),h.on("transitionEnd",(function(){clearInterval(a)}))}if(0!==i(".index").length){var u=i(".index__recipes-row"),p=i(".index__recipes-cursor"),v=!1,m=!1;p.appendTo(i("body > .wrapper")),u.on("mouseenter",(function(){m=!0,v||requestAnimationFrame((function(){p.css("opacity",1)}))})),u.on("mouseleave",(function(){m=!1,requestAnimationFrame((function(){p.css("opacity","")}))})),i(".index__recipes-side").on("mouseenter",(function(){v=!0,requestAnimationFrame((function(){p.css("opacity","")}))})),i(".index__recipes-side").on("mouseleave",(function(){v=!1,setTimeout((function(){m&&requestAnimationFrame((function(){p.css("opacity",1)}))}),0)})),i(".index__recipes").on("mousemove",(function(e){p.css("transform","translate(calc(".concat(e.originalEvent.clientX,"px - 50%), calc(").concat(e.originalEvent.clientY,"px - 50%))"))})),i(".index__recipes-slide").on("mousedown",(function(e){e.preventDefault&&e.preventDefault()}))}new n.Z(i(".product-slider")[0],{slidesPerView:"auto",spaceBetween:20})})),i((function(){var e=i(".top__slider--desktop .top__swiper"),t=[];e.each((function(){var e=i(this);t.push(new n.Z(e[0],{effect:"flip",loop:!0,allowTouchMove:!1,flipEffect:{slideShadows:!1}}))})),i(".top__button").on("click",(function(){c.matches&&t.forEach((function(e){e.slideNext()}))}));var a=i(".top__slider--mobile .top__swiper");if(0!==a.length){var o=new n.Z(a[0],{slidesPerView:"auto",spaceBetween:15,loop:!0});i(".top__button").on("click",(function(){c.matches||o.slideNext()}))}})),i((function(){var e=i(".slider-recipe");if(0!==e.length)new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20})})),i((function(){var e=i(".recipe__row");if(0!==e.length){var t=e.offset().top,a=e.innerHeight()+100,n=i(".recipe__ingredients");i(window).on("scroll",(function(){var e=i(this).scrollTop(),o=e+130;a<e?(n.removeClass("recipe__ingredients--fixed"),i(".recipe__col").addClass("recipe__col--sticky")):t<o?(i(".recipe__col").removeClass("recipe__col--sticky"),n.addClass("recipe__ingredients--fixed")):(i(".recipe__col").removeClass("recipe__col--sticky"),n.removeClass("recipe__ingredients--fixed"))}))}})),i((function(){var e=i(".vacancies__row");if(0!==e.length){var t=e.offset().top,a=e.innerHeight(),n=t+a-250,o=i(".vacancies__city");console.log(n),i(window).on("scroll",(function(){i(this).scrollTop()>t?o.addClass("vacancies__city--fixed"):o.removeClass("vacancies__city--fixed")}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__button-button");t.on("click",(function(){e.hasClass("header--nav-modal")?(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active")):(e.addClass("header--nav-modal"),t.addClass("button-modal--active"))})),i(window).on("click",(function(a){e.hasClass("header--nav-modal")&&0===i(a.target).closest(t).length&&0===i(a.target).closest(".nav-modal").length&&(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active"))}))}})),i((function(){var e=i(".nav-modal");if(0!==e.length){var t=e.find(".header__catalog-button"),a=e.find(".header-catalog__dropdown");t.on("click",(function(){t.toggleClass("header__catalog-button--active"),a.slideToggle()})),e.find(".header-catalog__section").find(".header-catalog__section-button").on("click",(function(){var e=i(this).closest(".header-catalog__section");e.hasClass("header-catalog__section--active")?(e.find(".header-catalog__section-dropdown").slideUp(500),e.removeClass("header-catalog__section--active")):(i(".header-catalog__section--active").find(".header-catalog__section-dropdown").slideUp(650),i(".header-catalog__section--active").removeClass("header-catalog__section--active"),e.find(".header-catalog__section-dropdown").slideDown(500),e.addClass("header-catalog__section--active"))}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__city-button"),a=e.find(".modal-search__button");t.on("click",(function(){e.addClass("header--city-search")})),a.on("click",(function(){e.removeClass("header--city-search")})),i(window).on("click",(function(a){var n=a.target.closest(".header__city-button");e.hasClass("header--city-search")&&n!==t[0]&&0===i(a.target).closest(".modal-search--city").length&&0===i(n).closest(".nav-modal").length&&e.removeClass("header--city-search")}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__search-button"),a=e.find(".modal-search__button-catalog");t.on("click",(function(){e.addClass("header--catalog-search")})),a.on("click",(function(){e.removeClass("header--catalog-search")})),i(window).on("click",(function(a){var n=a.target.closest(".header__search-button");e.hasClass("header--catalog-search")&&n!==t[0]&&0===i(a.target).closest(".modal-search--catalog").length&&e.removeClass("header--catalog-search")}))}})),i(".vacancies-list__item").each((function(){var e=i(this),t=e.find(".vacancies-list__row"),a=e.find(".vacancies-list__dropdown");t.on("click",(function(){t.toggleClass("vacancies-list__row--active"),a.slideToggle()}))})),ymaps.ready((function(){if(0!==i("#map").length){var e=new ymaps.Map("map",{center:[51.518328,45.996784],zoom:12,controls:[]}),t=ymaps.templateLayoutFactory.createClass(['<div class="map-balloon--alt">','<div class="map-balloon__container">','<div class="map-balloon__store">',"{{properties.label}}","</div>",'<div class="map-balloon__addres">',"{{properties.title}}","</div>",'<div class="map-balloon__time">','<div class="map-balloon__text">',"{{properties.time}}","</div>","</div>","</div>","</div>"].join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=i(".map-balloon--alt",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){t.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+28)})},getShape:function(){if(!this._isElement(this._$element))return t.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]}});e.events.add("click",(function(){e.balloon.isOpen()&&e.balloon.close()}));var a=i(".placemarks").text(),n=JSON.parse(a),o=[];n.forEach((function(e,t){var a=['<div class="map-balloon--alt">','<div class="map-balloon__container">'];"label"in e&&(a=a.concat(['<div class="map-balloon__store">',e.label,"</div>"])),a=(a=a.concat(['<div class="map-balloon__addres">',e.title,"</div>"])).concat(['<div class="map-balloon__times">']),e.times.forEach((function(e){a=a.concat(['<div class="map-balloon__time">',e,"</div>"])})),a=a.concat(["</div>","</div>","</div>"]),console.log(a.join(""));var n=ymaps.templateLayoutFactory.createClass(a.join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=i(".map-balloon--alt",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){n.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+28)})},getShape:function(){if(!this._isElement(this._$element))return n.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]}}),s=new ymaps.Placemark(e.coordinates,{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[53,56],iconImageOffset:[-26.5,-56],balloonLayout:n,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});o.push(s)}));var s=new ymaps.Clusterer({clusterIconLayout:ymaps.templateLayoutFactory.createClass('<div class="clusterIcon">{{ properties.geoObjects.length }}</div>'),clusterIconShape:{type:"Rectangle",coordinates:[[0,0],[50,50]]}});s.add(o),e.geoObjects.add(s),e.setBounds(s.getBounds(),{zoomMargin:Math.max(53,56)})}})),i((function(){i(".select__select").each((function(){var e=i(this),t=e.closest(".select-wrapper");"static"===getComputedStyle(t[0]).position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0}),e.on("select2:open",(function(){t.css("z-index","100000");var e=t.find(".select2-dropdown");e.hide();var a=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(a)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var n=t.find(".select2-dropdown"),o=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),n.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(o)}),0)}))}))})),i((function(){var e=i(".form");if(0!==e.length){var t=i(".response"),a=i(".response__btn");i(".form__btn").on("click",(function(){e.addClass("form--hidden"),t.addClass("response--active"),i(".provider__row").addClass("provider__row--active")})),a.on("click",(function(){e.removeClass("form--hidden"),t.removeClass("response--active"),i(".provider__row").removeClass("provider__row--active")}))}})),i((function(){i.fancybox.defaults.closeExisting=!0,i("[data-fancy-button]").on("click",(function(e){e.preventDefault();var t=i(this).data("fancy-button"),a=i('[data-fancy-modal="'.concat(t,'"]'));i.fancybox.open(a)}))})),i((function(){var e=i("[data-tabs-id]");if(0!==e.length){var t=[];e.each((function(){var e=i(this).data("tabs-id");-1===t.indexOf(e)&&t.push(e)})),t.forEach((function(e){var t=i('[data-tabs-id="'.concat(e,'"][data-tabs-tab]')),a=i('[data-tabs-id="'.concat(e,'"][data-tabs-button]'));if(0!==t.length){var n={id:null,update:function(e){this.id=e},close:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).removeAttr("data-tabs-active"),a.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).attr("data-tabs-active",""),a.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(e){e&&e!==this.id&&(this.close(),this.update(e),this.open())},init:function(){var e=a.filter("[data-tabs-active]").data("tabs-button");this.update(e)}};n.init(),a.on("click",(function(){var e=i(this).data("tabs-button");n.change(e)}))}}))}})),i((function(){var e=i(".header");0!==e.length&&i(window).on("scroll",{previousTop:0},(function(){var t=i(window).scrollTop();t<this.previousTop?e.removeClass("header--scroll"):e.addClass("header--scroll"),this.previousTop=t}))})),i(window).on("load",(function(){i("[data-scrollbar-id]").each((function(){var e=i(this),t=e.data("scrollbar-id"),a=i('[data-scrollbar-outer="'.concat(t,'"]')),n=i('[data-scrollbar-inner="'.concat(t,'"]')),o=a[0].offsetHeight,s=n[0].offsetHeight,c=s-o;if(c<=0)e.css("display","none");else{var l=i('[data-scrollbar-thumb="'.concat(t,'"]')),r=o/s*100,d=100-r;requestAnimationFrame((function(){l.css("height","".concat(r,"%"))})),a.on("scroll",(function(){var e=a.scrollTop(),t=Math.round(e/c*100);t=t<0?0:t>100?100:t,requestAnimationFrame((function(){l.css("top","".concat(d*(t/100),"%"))}))}))}}));var e=i("[data-category-item]"),t=i("[data-category-tab]");t.css("display","none"),e.each((function(){var a=this,n=i(this),o=n.data("category-item"),s=n.find("[data-category-button]");"categoryActive"in n[0].dataset&&i('[data-category-tab="'.concat(o,'"]')).css("display","");var c="categorySingle"in n[0].dataset;s.on("mouseenter",(function(){c||(delete e.filter("[data-category-active]")[0].dataset.categoryActive,i(a)[0].dataset.categoryActive="",t.css("display","none"),i('[data-category-tab="'.concat(o,'"]')).css("display",""))}))}));var a=i(".header");if(0!==a.length){var n=a.find(".header__catalog-button");n.on("click",(function(){a.hasClass("header--catalog-modal")?(a.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active")):(a.addClass("header--catalog-modal"),n.addClass("header__catalog-button--active"))})),i(window).on("click",(function(e){a.hasClass("header--catalog-modal")&&0===i(e.target).closest(n).length&&0===i(e.target).closest(".catalog-modal").length&&(a.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active"))}))}}))}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,o,s)=>{if(!a){var i=1/0;for(r=0;r<e.length;r++){for(var[a,o,s]=e[r],c=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](a[l])))?a.splice(l--,1):(c=!1,s<i&&(i=s));c&&(e.splice(r--,1),t=o())}return t}s=s||0;for(var r=e.length;r>0&&e[r-1][2]>s;r--)e[r]=e[r-1];e[r]=[a,o,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,s,[i,c,l]=a,r=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var d=l(n);for(t&&t(a);r<i.length;r++)s=i[r],n.o(e,s)&&e[s]&&e[s][0](),e[i[r]]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[275,532],(()=>n(168)));o=n.O(o)})();