(()=>{"use strict";var e,a={168:(e,a,t)=>{var n=t(566),o=(t(490),t(354)),i=t.n(o),s=(t(917),t(638));i().init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:1500,easing:"ease",once:!1,mirror:!1});s((function(){var e=s(".slider");if(0!==e.length)new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20});if(0!==s(".index").length){var a,t,o=function(){i(c())},i=function(e){var t="translateX(".concat(-e/a,"px)"),n=1-e/(l.width()+20);n=n<0?0:n,requestAnimationFrame((function(){r.css("transform",t),r.css("opacity",n)}))},c=function(){var e=f.offset().left,a=l.offset().left;console.log(a);var t=e-a;return t<0?0:t},r=s(".index__recipes-side"),l=s(".index__recipes-slide").first(),d=matchMedia("(min-width: ".concat(1280,"px)"));a=15,d.matches&&(a=3),d.addListener((function(e){a=e.matches?3:15}));var f=s(".index__recipes-slider"),u=new n.Z(f[0],{slidesPerView:"auto",spaceBetween:20,touchStartPreventDefault:!1});u.on("sliderFirstMove",(function(){t=setInterval(o,1e3/60)})),u.on("transitionEnd",(function(){clearInterval(t)}))}if(0!==s(".index").length){var h=s(".index__recipes-row"),v=s(".index__recipes-cursor"),p=!1,_=!1;v.appendTo(s("body > .wrapper")),h.on("mouseenter",(function(){_=!0,p||requestAnimationFrame((function(){v.css("opacity",1)}))})),h.on("mouseleave",(function(){_=!1,requestAnimationFrame((function(){v.css("opacity","")}))})),s(".index__recipes-side").on("mouseenter",(function(){p=!0,requestAnimationFrame((function(){v.css("opacity","")}))})),s(".index__recipes-side").on("mouseleave",(function(){p=!1,setTimeout((function(){_&&requestAnimationFrame((function(){v.css("opacity",1)}))}),0)})),s(".index__recipes").on("mousemove",(function(e){v.css("transform","translate(calc(".concat(e.originalEvent.clientX,"px - 50%), calc(").concat(e.originalEvent.clientY,"px - 50%))"))})),s(".index__recipes-slide").on("mousedown",(function(e){e.preventDefault&&e.preventDefault()}))}new n.Z(s(".product-slider")[0],{slidesPerView:"auto",spaceBetween:20})})),s((function(){var e,a,t;if(0!==s(".top-slide").length){var o=s(".top__container"),i=new n.Z(o[0],{slidesPerView:"auto",slidesPerGroup:1,spaceBetween:25,loop:!0,breakpoints:(e={},a=1280,t={slidesPerGroup:3},a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e)});s(".top__button").on("click",(function(){i.slideNext()}))}})),s((function(){var e=s(".slider-recipe");if(0!==e.length)new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20})})),s((function(){var e=s(".recipe__row");if(0!==e.length){var a=e.offset().top,t=e.innerHeight()+100,n=s(".recipe__ingredients");s(window).on("scroll",(function(){var e=s(this).scrollTop(),o=e+130;t<e?(n.removeClass("recipe__ingredients--fixed"),s(".recipe__col").addClass("recipe__col--sticky")):a<o?(s(".recipe__col").removeClass("recipe__col--sticky"),n.addClass("recipe__ingredients--fixed")):(s(".recipe__col").removeClass("recipe__col--sticky"),n.removeClass("recipe__ingredients--fixed"))}))}})),s((function(){var e=s(".vacancies__row");if(0!==e.length){var a=e.offset().top,t=e.innerHeight(),n=a+t-250,o=s(".vacancies__city");console.log(n),s(window).on("scroll",(function(){s(this).scrollTop()>a?o.addClass("vacancies__city--fixed"):o.removeClass("vacancies__city--fixed")}))}})),s((function(){var e=s(".header");if(0!==e.length){var a=e.find(".header__button-button");a.on("click",(function(){e.hasClass("header--nav-modal")?(e.removeClass("header--nav-modal"),a.removeClass("button-modal--active")):(e.addClass("header--nav-modal"),a.addClass("button-modal--active"))})),s(window).on("click",(function(t){e.hasClass("header--nav-modal")&&0===s(t.target).closest(a).length&&0===s(t.target).closest(".nav-modal").length&&(e.removeClass("header--nav-modal"),a.removeClass("button-modal--active"))}))}})),s((function(){var e=s(".nav-modal");if(0!==e.length){var a=e.find(".header__catalog-button"),t=e.find(".header-catalog__dropdown");a.on("click",(function(){a.toggleClass("header__catalog-button--active"),t.slideToggle()})),e.find(".header-catalog__section").find(".header-catalog__section-button").on("click",(function(){var e=s(this).closest(".header-catalog__section");e.hasClass("header-catalog__section--active")?(e.find(".header-catalog__section-dropdown").slideUp(500),e.removeClass("header-catalog__section--active")):(s(".header-catalog__section--active").find(".header-catalog__section-dropdown").slideUp(650),s(".header-catalog__section--active").removeClass("header-catalog__section--active"),e.find(".header-catalog__section-dropdown").slideDown(500),e.addClass("header-catalog__section--active"))}))}})),s((function(){var e=s(".header");if(0!==e.length){var a=e.find(".header__city-button"),t=e.find(".modal-search__button");a.on("click",(function(){e.addClass("header--city-search")})),t.on("click",(function(){e.removeClass("header--city-search")})),s(window).on("click",(function(t){var n=t.target.closest(".header__city-button");e.hasClass("header--city-search")&&n!==a[0]&&0===s(t.target).closest(".modal-search--city").length&&0===s(n).closest(".nav-modal").length&&e.removeClass("header--city-search")}))}})),s((function(){var e=s(".header");if(0!==e.length){var a=e.find(".header__search-button"),t=e.find(".modal-search__button-catalog");a.on("click",(function(){e.addClass("header--catalog-search")})),t.on("click",(function(){e.removeClass("header--catalog-search")})),s(window).on("click",(function(t){var n=t.target.closest(".header__search-button");e.hasClass("header--catalog-search")&&n!==a[0]&&0===s(t.target).closest(".modal-search--catalog").length&&e.removeClass("header--catalog-search")}))}})),s(".vacancies-list__item").each((function(){var e=s(this),a=e.find(".vacancies-list__row"),t=e.find(".vacancies-list__dropdown");a.on("click",(function(){a.toggleClass("vacancies-list__row--active"),t.slideToggle()}))})),ymaps.ready((function(){if(0!==s("#map").length){var e=new ymaps.Map("map",{center:[51.518328,45.996784],zoom:12,controls:[]}),a=ymaps.templateLayoutFactory.createClass(['<div class="map-balloon--alt">','<div class="map-balloon__container">','<div class="map-balloon__store">',"{{properties.balloonStore}}","</div>",'<div class="map-balloon__addres">',"{{properties.balloonAddres}}","</div>",'<div class="map-balloon__time">','<div class="map-balloon__text">',"{{properties.balloonText}}","</div>","</div>","</div>","</div>"].join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=s(".map-balloon--alt",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){a.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+28)})},getShape:function(){if(!this._isElement(this._$element))return a.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]}});e.events.add("click",(function(){e.balloon.isOpen()&&e.balloon.close()}));var t=new ymaps.GeoObjectCollection;s(".placemarks__item").each((function(){var e=s(this).find(".placemarks__balloon"),n=s(this).find(".map-balloon__store").text().trim(),o=s(this).find(".map-balloon__addres").text().trim(),i=s(this).find(".map-balloon__text").text().trim(),c=[s(this).find(".placemarks__latitude").text().trim(),s(this).find(".placemarks__longitude").text().trim()],r=new ymaps.Placemark(c,{balloon:e,balloonStore:n,balloonAddres:o,balloonText:i},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[53,56],iconImageOffset:[-26.5,-56],balloonLayout:a,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});t.add(r)})),e.geoObjects.add(t),e.setBounds(t.getBounds(),{zoomMargin:Math.max(53,56)})}})),s((function(){s(".select__select").each((function(){var e=s(this),a=e.closest(".select-wrapper");"static"===getComputedStyle(a[0]).position&&a.css("position","relative"),e.select2({dropdownParent:a}),e.on("select2:open",(function(){a.css("z-index","100000");var e=a.find(".select2-dropdown");e.hide();var t=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(t)}),0)}))}))})),s((function(){var e=s(".form");if(0!==e.length){var a=s(".response"),t=s(".response__btn");s(".form__btn").on("click",(function(){e.addClass("form--hidden"),a.addClass("response--active"),s(".provider__row").addClass("provider__row--active")})),t.on("click",(function(){e.removeClass("form--hidden"),a.removeClass("response--active"),s(".provider__row").removeClass("provider__row--active")}))}})),s((function(){s.fancybox.defaults.closeExisting=!0,s("[data-fancy-button]").on("click",(function(e){e.preventDefault();var a=s(this).data("fancy-button"),t=s('[data-fancy-modal="'.concat(a,'"]'));s.fancybox.open(t)}))})),s((function(){var e=s("[data-tabs-id]");if(0!==e.length){var a=[];e.each((function(){var e=s(this).data("tabs-id");-1===a.indexOf(e)&&a.push(e)})),a.forEach((function(e){var a=s('[data-tabs-id="'.concat(e,'"][data-tabs-tab]')),t=s('[data-tabs-id="'.concat(e,'"][data-tabs-button]'));if(0!==a.length){var n={id:null,update:function(e){this.id=e},close:function(){a.filter('[data-tabs-tab="'.concat(this.id,'"]')).removeAttr("data-tabs-active"),t.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){a.filter('[data-tabs-tab="'.concat(this.id,'"]')).attr("data-tabs-active",""),t.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(e){e&&e!==this.id&&(this.close(),this.update(e),this.open())},init:function(){var e=t.filter("[data-tabs-active]").data("tabs-button");this.update(e)}};n.init(),t.on("click",(function(){var e=s(this).data("tabs-button");n.change(e)}))}}))}})),s((function(){var e=s(".header");0!==e.length&&s(window).on("scroll",{previousTop:0},(function(){var a=s(window).scrollTop();a<this.previousTop?e.removeClass("header--scroll"):e.addClass("header--scroll"),this.previousTop=a}))})),s(window).on("load",(function(){s("[data-scrollbar-id]").each((function(){var e=s(this),a=e.data("scrollbar-id"),t=s('[data-scrollbar-outer="'.concat(a,'"]')),n=s('[data-scrollbar-inner="'.concat(a,'"]')),o=t[0].offsetHeight,i=n[0].offsetHeight,c=i-o;if(c<=0)e.css("display","none");else{var r=s('[data-scrollbar-thumb="'.concat(a,'"]')),l=o/i*100,d=100-l;requestAnimationFrame((function(){r.css("height","".concat(l,"%"))})),t.on("scroll",(function(){var e=t.scrollTop(),a=Math.round(e/c*100);a=a<0?0:a>100?100:a,requestAnimationFrame((function(){r.css("top","".concat(d*(a/100),"%"))}))}))}}));var e=s("[data-category-item]"),a=s("[data-category-tab]");a.css("display","none"),e.each((function(){var t=this,n=s(this),o=n.data("category-item"),i=n.find("[data-category-button]");"categoryActive"in n[0].dataset&&s('[data-category-tab="'.concat(o,'"]')).css("display","");var c="categorySingle"in n[0].dataset;i.on("mouseenter",(function(){c||(delete e.filter("[data-category-active]")[0].dataset.categoryActive,s(t)[0].dataset.categoryActive="",a.css("display","none"),s('[data-category-tab="'.concat(o,'"]')).css("display",""))}))}));var t=s(".header");if(0!==t.length){var n=t.find(".header__catalog-button");n.on("click",(function(){t.hasClass("header--catalog-modal")?(t.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active")):(t.addClass("header--catalog-modal"),n.addClass("header__catalog-button--active"))})),s(window).on("click",(function(e){t.hasClass("header--catalog-modal")&&0===s(e.target).closest(n).length&&0===s(e.target).closest(".catalog-modal").length&&(t.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active"))}))}}))}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return a[e].call(i.exports,i,i.exports,n),i.exports}n.m=a,e=[],n.O=(a,t,o,i)=>{if(!t){var s=1/0;for(l=0;l<e.length;l++){for(var[t,o,i]=e[l],c=!0,r=0;r<t.length;r++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](t[r])))?t.splice(r--,1):(c=!1,i<s&&(s=i));c&&(e.splice(l--,1),a=o())}return a}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,o,i]},n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a}),a},n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={143:0,532:0};n.O.j=a=>0===e[a];var a=(a,t)=>{var o,i,[s,c,r]=t,l=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(r)var d=r(n);for(a&&a(t);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return n.O(d)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var o=n.O(void 0,[275,532],(()=>n(168)));o=n.O(o)})();