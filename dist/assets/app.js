(()=>{var e,t={168:(e,t,a)=>{"use strict";var n=a(566),o=(a(490),a(354)),s=a.n(o),i=(a(917),a(563),a(419),a(638));a(956),i((function(){a(10)})),s().init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:1500,easing:"ease",once:!1,mirror:!1});var c=matchMedia("(min-width: ".concat(1280,"px)"));i((function(){var e=i(".slider");if(0!==e.length)new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20});if(0!==i(".index").length){var t,a,o=function(){s(c())},s=function(e){var a="translateX(".concat(-e/t,"px)"),n=1-e/(l.width()+20);n=n<0?0:n,requestAnimationFrame((function(){r.css("transform",a),r.css("opacity",n)}))},c=function(){var e=u.offset().left-l.offset().left;return e<0?0:e},r=i(".index__recipes-side"),l=i(".index__recipes-slide").first(),d=matchMedia("(min-width: ".concat(1280,"px)"));t=15,d.matches&&(t=3),d.addListener((function(e){t=e.matches?3:15}));var u=i(".index__recipes-slider"),f=new n.Z(u[0],{slidesPerView:"auto",spaceBetween:20,touchStartPreventDefault:!1});f.on("sliderFirstMove",(function(){a=setInterval(o,1e3/60)})),f.on("transitionEnd",(function(){clearInterval(a)}))}if(0!==i(".index").length){var h=i(".index__recipes-row"),p=i(".index__recipes-cursor"),v=!1,m=!1;p.appendTo(i("body > .wrapper")),h.on("mouseenter",(function(){m=!0,v||requestAnimationFrame((function(){p.css("opacity",1)}))})),h.on("mouseleave",(function(){m=!1,requestAnimationFrame((function(){p.css("opacity","")}))})),i(".index__recipes-side").on("mouseenter",(function(){v=!0,requestAnimationFrame((function(){p.css("opacity","")}))})),i(".index__recipes-side").on("mouseleave",(function(){v=!1,setTimeout((function(){m&&requestAnimationFrame((function(){p.css("opacity",1)}))}),0)})),i(".index__recipes").on("mousemove",(function(e){p.css("transform","translate(calc(".concat(e.originalEvent.clientX,"px - 50%), calc(").concat(e.originalEvent.clientY,"px - 50%))"))})),i(".index__recipes-slide").on("mousedown",(function(e){e.preventDefault&&e.preventDefault()}))}var _=new n.Z(i(".product-slider")[0],{slidesPerView:"auto",spaceBetween:20});i(".slider-button--next").on("click",(function(){_.slideNext()})),i(".slider-button--prev").on("click",(function(){_.slidePrev()}));var g=new n.Z(i(".products")[0],{slidesPerView:"auto"});i(".slider-button").on("click",(function(){g.slideNext()}))})),i((function(){i(".shops-card__container").each((function(){var e=i(this),t=e.find(".shops-card__frame"),a=e.data("slider-prev-id"),o=e.data("slider-next-id"),s=new n.Z(t[0],{slidesPerView:"auto"});i('[data-slider-id="'+a+'"]').on("click",(function(){s.slidePrev()})),i('[data-slider-id="'+o+'"]').on("click",(function(){s.slideNext()}))}));var e=i(".shops");0!==e.lenght&&(e.addClass("shops--hidden"),i("[data-tab]").on("click",(function(){var t=i(this).data("tab");i(t).hasClass("shops--active")||(e.removeClass("shops--active"),i(".shops-format__button").removeClass("shops-format__button--active"),i(this).addClass("shops-format__button--active")),i(t).addClass("shops--active")})))})),i((function(){var e=i(".top__slider--desktop .top__swiper"),t=[];e.each((function(){var e=i(this);t.push(new n.Z(e[0],{effect:"flip",loop:!0,allowTouchMove:!1,flipEffect:{slideShadows:!1}}))})),i(".top__button").on("click",(function(){c.matches&&t.forEach((function(e){e.slideNext()}))}));var a=i(".top__slider--mobile .top__swiper");if(0!==a.length){var o=new n.Z(a[0],{slidesPerView:"auto",spaceBetween:15,loop:!0});i(".top__button").on("click",(function(){c.matches||o.slideNext()}))}})),i((function(){var e=i(".slider-recipe");if(0!==e.length){var t=new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20});i(".slider-button--next").on("click",(function(){t.slideNext()})),i(".slider-button--prev").on("click",(function(){t.slidePrev()}))}})),i((function(){var e=i(".recipe__row");if(0!==e.length){var t=e.offset().top,a=e.innerHeight()+100,n=i(".recipe__ingredients");i(window).on("scroll",(function(){var e=i(this).scrollTop(),o=e+130;a<e?(n.removeClass("recipe__ingredients--fixed"),i(".recipe__col").addClass("recipe__col--sticky")):t<o?(i(".recipe__col").removeClass("recipe__col--sticky"),n.addClass("recipe__ingredients--fixed")):(i(".recipe__col").removeClass("recipe__col--sticky"),n.removeClass("recipe__ingredients--fixed"))}))}})),i((function(){var e=i(".vacancies__row");if(0!==e.length){var t=e.offset().top,a=(e.innerHeight(),i(".vacancies__city"));i(window).on("scroll",(function(){i(this).scrollTop()>t?a.addClass("vacancies__city--fixed"):a.removeClass("vacancies__city--fixed")}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__button-button");t.on("click",(function(){e.hasClass("header--nav-modal")?(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active")):(e.addClass("header--nav-modal"),t.addClass("button-modal--active"))})),i(window).on("click",(function(a){e.hasClass("header--nav-modal")&&0===i(a.target).closest(t).length&&0===i(a.target).closest(".nav-modal").length&&(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active"))}))}})),i((function(){var e=i(".nav-modal");if(0!==e.length){var t=e.find(".header__catalog-button"),a=e.find(".header-catalog__dropdown");t.on("click",(function(){t.toggleClass("header__catalog-button--active"),a.slideToggle()})),e.find(".header-catalog__section").find(".header-catalog__section-button").on("click",(function(){var e=i(this).closest(".header-catalog__section");e.hasClass("header-catalog__section--active")?(e.find(".header-catalog__section-dropdown").slideUp(500),e.removeClass("header-catalog__section--active")):(i(".header-catalog__section--active").find(".header-catalog__section-dropdown").slideUp(650),i(".header-catalog__section--active").removeClass("header-catalog__section--active"),e.find(".header-catalog__section-dropdown").slideDown(500),e.addClass("header-catalog__section--active"))}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__city-button"),a=e.find(".modal-search__button");t.on("click",(function(){e.addClass("header--city-search")})),a.on("click",(function(){e.removeClass("header--city-search")})),i(window).on("click",(function(a){var n=a.target.closest(".header__city-button");e.hasClass("header--city-search")&&n!==t[0]&&0===i(a.target).closest(".modal-search--city").length&&0===i(n).closest(".nav-modal").length&&e.removeClass("header--city-search")}))}})),i((function(){var e=i(".header");if(0!==e.length){var t=e.find(".header__search-button"),a=e.find(".modal-search__button-catalog");t.on("click",(function(){e.addClass("header--catalog-search")})),a.on("click",(function(){e.removeClass("header--catalog-search")})),i(window).on("click",(function(a){var n=a.target.closest(".header__search-button");e.hasClass("header--catalog-search")&&n!==t[0]&&0===i(a.target).closest(".modal-search--catalog").length&&e.removeClass("header--catalog-search")}))}})),i(".vacancies-list__item").each((function(){var e=i(this),t=e.find(".vacancies-list__row"),a=e.find(".vacancies-list__dropdown");t.on("click",(function(){t.toggleClass("vacancies-list__row--active"),a.slideToggle()}))})),i((function(){i(".select__select").each((function(){var e=i(this),t=e.closest(".select-wrapper");"static"===getComputedStyle(t[0]).position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0}),e.on("select2:open",(function(){t.css("z-index","100000");var e=t.find(".select2-dropdown");e.hide();var a=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(a)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var n=t.find(".select2-dropdown"),o=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),n.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(o)}),0)}))}))})),i((function(){var e=i(".form");if(0!==e.length){var t=i(".response"),a=i(".response__btn");i(".form__btn").on("click",(function(){e.addClass("form--hidden"),t.addClass("response--active"),i(".provider__row").addClass("provider__row--active")})),a.on("click",(function(){e.removeClass("form--hidden"),t.removeClass("response--active"),i(".provider__row").removeClass("provider__row--active")}))}})),i((function(){i.fancybox.defaults.closeExisting=!0,i("[data-fancy-button]").on("click",(function(e){e.preventDefault();var t=i(this).data("fancy-button"),a=i('[data-fancy-modal="'.concat(t,'"]'));i.fancybox.open(a)}))})),i((function(){var e=i("[data-tabs-id]");if(0!==e.length){var t=[];e.each((function(){var e=i(this).data("tabs-id");-1===t.indexOf(e)&&t.push(e)})),t.forEach((function(e){var t=i('[data-tabs-id="'.concat(e,'"][data-tabs-tab]')),a=i('[data-tabs-id="'.concat(e,'"][data-tabs-button]'));if(0!==t.length){var n={id:null,update:function(e){this.id=e},close:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).removeAttr("data-tabs-active"),a.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).attr("data-tabs-active",""),a.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(e){e&&e!==this.id&&(this.close(),this.update(e),this.open())},init:function(){var e=a.filter("[data-tabs-active]").data("tabs-button");this.update(e)}};n.init(),a.on("click",(function(){var e=i(this).data("tabs-button");n.change(e)}))}}))}})),i((function(){var e=i(".header");0!==e.length&&i(window).on("scroll",{previousTop:0},(function(){var t=i(window).scrollTop();e.hasClass("header--nav-modal")||e.hasClass("header--catalog-search")||e.hasClass("header--catalog-modal")||e.hasClass("header--city-search")||(t<this.previousTop?(e.removeClass("header--scroll--down"),e.addClass("header--scroll--up")):(e.removeClass("header--scroll--up"),e.addClass("header--scroll--down"))),t<1&&(e.removeClass("header--scroll--up"),e.removeClass("header--scroll--down")),this.previousTop=t}))})),i(window).on("load",(function(){i("[data-scrollbar-id]").each((function(){var e=i(this),t=e.data("scrollbar-id"),a=i('[data-scrollbar-outer="'.concat(t,'"]')),n=i('[data-scrollbar-inner="'.concat(t,'"]')),o=a[0].offsetHeight,s=n[0].offsetHeight,c=s-o;if(c<=0)e.css("display","none");else{var r=i('[data-scrollbar-thumb="'.concat(t,'"]')),l=o/s*100,d=100-l;requestAnimationFrame((function(){r.css("height","".concat(l,"%"))})),a.on("scroll",(function(){var e=a.scrollTop(),t=Math.round(e/c*100);t=t<0?0:t>100?100:t,requestAnimationFrame((function(){r.css("top","".concat(d*(t/100),"%"))}))}))}}));var e=i("[data-category-item]"),t=i("[data-category-tab]");t.css("display","none"),e.each((function(){var a=this,n=i(this),o=n.data("category-item"),s=n.find("[data-category-button]");"categoryActive"in n[0].dataset&&i('[data-category-tab="'.concat(o,'"]')).css("display","");var c="categorySingle"in n[0].dataset;s.on("mouseenter",(function(){c||(delete e.filter("[data-category-active]")[0].dataset.categoryActive,i(a)[0].dataset.categoryActive="",t.css("display","none"),i('[data-category-tab="'.concat(o,'"]')).css("display",""))}))}));var a=i(".header");if(0!==a.length){var n=a.find(".header__catalog-button[data-modal-button]");n.on("click",(function(){a.hasClass("header--catalog-modal")?(a.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active")):(a.addClass("header--catalog-modal"),n.addClass("header__catalog-button--active"))})),i(window).on("click",(function(e){a.hasClass("header--catalog-modal")&&0===i(e.target).closest(n).length&&0===i(e.target).closest(".catalog-modal").length&&(a.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active"))}))}})),ymaps.ready((function(){0!==i("#map").length&&i.getJSON("/assets/data/mapData.json",(function(e){var t={};e.geoPoints.forEach((function(e){var a=e.location;a in t?t[a].push(e):t[a]=[e]}));var a=i("[data-map-select]");a.select2("destroy");var n="";for(var o in t)n+='<option value="'.concat(o,'" ').concat(o===e.startLocation?"selected":"",">").concat(o,"</option>");a.html(n);var s=a.closest(".select-wrapper");function c(e){var a=i("[data-map-list]"),n="";t[e].forEach((function(e){n+='<li class="map-list__item">',n+='<div class="map-list__wrapper">',n+='<div class="map-balloon">',n+='<div class="map-balloon__container">',"label"in e&&(n+='<div class="map-balloon__store">'.concat(e.label,"</div>")),n+='<div class="map-balloon__addres">'.concat(e.address,"</div>"),n+='<div class="map-balloon__times">',e.schedules.forEach((function(e){n+='<div class="map-balloon__time">'.concat(e,"</div>")})),n+="</div>",n+="</div>",n+="</div>",n+="</div>",n+="</li>"})),a.html(n)}"static"===getComputedStyle(s[0]).position&&s.css("position","relative"),a.select2({dropdownParent:s,selectOnClose:!0}),a.on("select2:open",(function(){s.css("z-index","100000");var e=s.find(".select2-dropdown");e.hide();var t=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(t)}),0)})),a.on("select2:closing",(function(e){e.preventDefault();var t=s.find(".select2-dropdown"),n=setTimeout((function(){s.css("z-index","");var e=s.find(".select2");e.addClass("closing"),e.removeClass("select2-container--open"),t.slideUp(500,(function(){var e=setTimeout((function(){a.select2("destroy"),a.select2({dropdownParent:s,selectOnClose:!0}),a.removeClass("closing"),s.css("z-index",""),clearTimeout(e)}),300)})),clearTimeout(n)}),0)})),c(e.startLocation);var r={};r.ymap=new ymaps.Map("map",{zoom:12,controls:[],center:t[e.startLocation][0].coordinates}),r.clusters={};var l=function(e){r.clusters[e]=new ymaps.Clusterer({clusterIconLayout:ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),clusterIconShape:{type:"Rectangle",coordinates:[[0,0],[50,50]]}}),t[e].forEach((function(t){var a=['<div class="map-balloon--alt">','<div class="map-balloon__container">'];"label"in t&&(a=a.concat(['<div class="map-balloon__store">',t.label,"</div>"])),a=(a=a.concat(['<div class="map-balloon__addres">',t.address,"</div>"])).concat(['<div class="map-balloon__times">']),t.schedules.forEach((function(e){a=a.concat(['<div class="map-balloon__time">',e,"</div>"])})),a=a.concat(["</div>","</div>","</div>"]);var n=ymaps.templateLayoutFactory.createClass(a.join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=i(".map-balloon--alt",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){n.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+28)})},getShape:function(){if(!this._isElement(this._$element))return n.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]}}),o=new ymaps.Placemark(t.coordinates,{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[53,56],iconImageOffset:[-26.5,-56],balloonLayout:n,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});r.clusters[e].add(o)})),r.ymap.geoObjects.add(r.clusters[e])};for(var d in t)l(d);r.ymap.events.add("click",(function(e){r.ymap.balloon.isOpen()&&r.ymap.balloon.close()})),r.ymap.setBounds(r.clusters[e.startLocation].getBounds(),{zoomMargin:Math.max(53,56)}),a.on("change",(function(){var e=a.val();c(e),r.ymap.setBounds(r.clusters[e].getBounds(),{zoomMargin:Math.max(53,56)})}))}))})),i((function(){i("[data-type=feedback-form]").parsley(),window.Parsley.addValidator("phone",{validateString:function(e){return 17==e.length&&9==e[4]}}),Inputmask({mask:"+7 (999) 999-9999"}).mask("[data-mask=phone]")})),i((function(){i(".product-announcement").each((function(){var e=i(this).find(".product-announcement__title"),t=e.text();function a(){return c.matches?18:12}var n=a();function o(){e.text(t);for(var a=t;e.height()>3*n;)a=a.substring(0,a.length-1).trim(),e.text(a);a=a.substring(0,a.length-5).trim()+"...",e.text(a)}c.addListener((function(){n=a()})),o(),i(window).on("resize",(function(){o()}))}))}))},10:(e,t,a)=>{var n=a(638);n((function(){console.log("backend")})),n((function(){console.log("vacancy"),n("[data-type=js-vacancy-filter]").on("change",(function(e){var t,a;t=this.value,a=n("[data-type=js-vacancy-list]"),n.ajax({method:"POST",url:window.location.href,data:{ajax:1,cityId:t}}).done((function(e){a.html(e)}))})),n("[data-type=redirect-buy-list]").on("click",(function(){window.location.href="/buy/list"})),n("[data-type=redirect-buy-map]").on("click",(function(){window.location.href="/buy"})),n(document).on("change","[data-type=data-buy-filter]",(function(){var e=n(this),t=e.parents("[data-type=buy-list-container]").find("[data-type=items-container]"),a={regionId:e.val()};t.empty(),n.ajax({type:"POST",url:window.location.href,dataType:"html",data:a,success:function(e){var a=n(e).find("[data-type=items-container]").children();t.append(a)}})})),n("[data-type=autocomplete-region-define]").autocomplete({appendTo:"[data-autocomplete-place]",source:function(e,t){n.ajax({url:"/local/templates/main/include/ajax/autocomplete_define_region.php",dataType:"json",data:{q:e.term},success:function(e){t(e)}})},position:{my:"left top+5"}}),n(document).on("click","[data-type=submit-form]",(function(e){e.preventDefault();var t=n(this).parents("[data-type=form-container]"),a=t.find("form"),o=t.find("[data-type=form-response]"),s=t.attr("data-url"),i=t.attr("data-event-type"),c="application/x-www-form-urlencoded; charset=UTF-8",r=!0,l={};if("CONTACT_FORM"!=i){l=new FormData,c=!1,r=!1;var d=t.find("[data-type=file]");l.append("file",d[0].files[0])}t.find("[data-type=get-field], [data-type=get-offer]:checked, [data-type=get-manufacturer]:checked, [data-type=get-organizational]:checked").each((function(){var e=n(this).attr("data-uf"),t=n(this).val();"CONTACT_FORM"!=i?l.append(e,t):l[e]=t})),n.ajax({type:"POST",url:s,dataType:"json",contentType:c,processData:r,data:l,success:function(e){!0===e.success&&(a.addClass("form--hidden"),o.addClass("response--active"))}})})),n(document).on("click",".search-form__button",(function(e){e.preventDefault();var t=n(document).find("[data-type=search-form]").find("input[name=search]").val(),a=n("[data-type=js-search-list]");n.ajax({method:"POST",url:window.location.href,data:{ajax:1,search:t}}).done((function(e){a.html(e)}))})),n(document).on("click","[data-type=search-button-header]",(function(e){e.preventDefault();var t=n(document).find("[data-type=header-search-form]").find("input[name=search]").val();document.location.href="http://dubki.hellem.ru/search/?search="+t}))}))}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,o,s)=>{if(!a){var i=1/0;for(l=0;l<e.length;l++){for(var[a,o,s]=e[l],c=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](a[r])))?a.splice(r--,1):(c=!1,s<i&&(i=s));c&&(e.splice(l--,1),t=o())}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[a,o,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,s,[i,c,r]=a,l=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(r)var d=r(n);for(t&&t(a);l<i.length;l++)s=i[l],n.o(e,s)&&e[s]&&e[s][0](),e[i[l]]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[599],(()=>n(168)));o=n.O(o)})();