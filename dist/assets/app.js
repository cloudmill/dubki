(()=>{var e,t={168:(e,t,a)=>{"use strict";var n=a(566),o=(a(490),a(354)),i=a.n(o),s=(a(917),a(563),a(419),a(248)),c=a.n(s),r=a(206),l=a(638);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a(956),l((function(){a(10)})),l((function(){i().init({once:!0,offset:0,duration:1e3}),window.addEventListener("scroll",(function e(){var t=setTimeout((function(){clearTimeout(t),i().refresh(),window.addEventListener("scroll",e)}),1e3);window.removeEventListener("scroll",e)}))}));var u=1280,f=matchMedia("(min-width: ".concat(u,"px)"));l((function(){var e=l(".slider");if(0!==e.length)new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20});if(0!==l(".index").length){var t,a,o=function(){i(s())},i=function(e){var a="translateX(".concat(-e/t,"px)"),n=1-e/(r.width()+20);n=n<0?0:n,requestAnimationFrame((function(){c.css("transform",a),c.css("opacity",n)}))},s=function(){var e=p.offset().left-r.offset().left;return e<0?0:e},c=l(".index__recipes-side"),r=l(".index__recipes-slide").first(),f=matchMedia("(min-width: ".concat(u,"px)"));t=15,f.matches&&(t=3),f.addListener((function(e){t=e.matches?3:15}));var p=l(".index__recipes-slider"),h=new n.Z(p[0],{slidesPerView:"auto",spaceBetween:20,touchStartPreventDefault:!1});h.on("sliderFirstMove",(function(){a=setInterval(o,1e3/60)})),h.on("transitionEnd",(function(){clearInterval(a)}))}if(0!==l(".index").length){var m=l(".index__recipes-row"),v=l(".index__recipes-cursor"),_=!1,g=!1;v.remove(),v.appendTo(l("body > .wrapper")),m.on("mouseenter",(function(){g=!0,_||requestAnimationFrame((function(){v.css("opacity",1)}))})),m.on("mouseleave",(function(){g=!1,requestAnimationFrame((function(){v.css("opacity","")}))})),l(".index__recipes-side").on("mouseenter",(function(){_=!0,requestAnimationFrame((function(){v.css("opacity","")}))})),l(".index__recipes-side").on("mouseleave",(function(){_=!1,setTimeout((function(){g&&requestAnimationFrame((function(){v.css("opacity",1)}))}),0)})),l(".index__recipes").on("mousemove",(function(e){v.css("transform","translate(calc(".concat(e.originalEvent.clientX,"px - 50%), calc(").concat(e.originalEvent.clientY,"px - 50%))"))})),l(".index__recipes-slide").on("mousedown",(function(e){e.preventDefault&&e.preventDefault()}))}if(0!==l(".product-slider").length){var w=new n.Z(l(".product-slider")[0],{slidesPerView:"auto",spaceBetween:5,breakpoints:d({},u,{spaceBetween:20})});l(".slider-button--next").on("click",(function(){w.slideNext()})),l(".slider-button--prev").on("click",(function(){w.slidePrev()}))}}));var p=l(".product-card");if(0!==p.length){var h=new n.Z(l(".products")[0],{slidesPerView:"auto",loop:!0});l(".slider-button").on("click",(function(){h.slideNext()}));var m=new n.Z(l(".product-card__list")[0],{slidesPerView:"auto",spaceBetween:15,breakpoints:d({},u,{spaceBetween:20})}),v=p.find(".product-card__item");h.on("sliderFirstMove",(function(){;"slider swipe"})),m.on("click",(function(e){"thumbs click",h.slideTo(e.clickedIndex),v.removeClass("product-card__item--active"),v.eq(e.clickedIndex).addClass("product-card__item--active")})),h.on("slideChange",(function(e){m.slideTo(e.realIndex),v.removeClass("product-card__item--active"),v.eq(e.realIndex).addClass("product-card__item--active"),"nothing"}))}l((function(){l("#at-home .shops-card__container").each((function(){var e=l(this),t=e.find(".shops-card__frame"),a=e.data("slider-prev-id"),o=e.data("slider-next-id"),i=new n.Z(t[0],{slidesPerView:"auto"});l('[data-slider-id="'+a+'"]').on("click",(function(){i.slidePrev()})),l('[data-slider-id="'+o+'"]').on("click",(function(){i.slideNext()}))}));var e=l(".shops");if(0!==e.length){e.addClass("shops--hidden");var t=!0;l("[data-tab]").on("click",(function(){var a=l(this).data("tab");l(a).hasClass("shops--active")||(e.removeClass("shops--active"),l(".shops-format__button").removeClass("shops-format__button--active"),l(this).addClass("shops-format__button--active")),l(a).addClass("shops--active"),"#self-service"===a&&t&&(l("#self-service .shops-card__container").each((function(){var e=l(this),t=e.find(".shops-card__frame"),a=e.data("slider-prev-id"),o=e.data("slider-next-id"),i=new n.Z(t[0],{slidesPerView:"auto"});console.log(123),l('[data-slider-id="'+a+'"]').on("click",(function(){i.slidePrev()})),l('[data-slider-id="'+o+'"]').on("click",(function(){i.slideNext()}))})),t=!1)}))}})),l((function(){var e=l(".top__slider--desktop .top__swiper"),t=[];e.each((function(){var e=l(this);t.push(new n.Z(e[0],{effect:"flip",loop:!0,allowTouchMove:!1,flipEffect:{slideShadows:!1}}))})),l(".top__button").on("click",(function(){f.matches&&t.forEach((function(e){e.slideNext()}))}));var a=l(".top__slider--mobile .top__swiper");if(0!==a.length){var o=new n.Z(a[0],{slidesPerView:"auto",spaceBetween:15,loop:!0});l(".top__button").on("click",(function(){f.matches||o.slideNext()}))}setTimeout((function(){l(".top__container").css("opacity",1)}),1e3)})),l((function(){var e=l(".slider-recipe");if(0!==e.length){var t=new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20});l(".slider-button--next").on("click",(function(){t.slideNext()})),l(".slider-button--prev").on("click",(function(){t.slidePrev()}))}})),l((function(){var e=l(".recipe__row");if(0!==e.length){var t=e.offset().top,a=e.innerHeight()+100,n=l(".recipe__ingredients");l(window).on("scroll",(function(){var e=l(this).scrollTop(),o=e+130;a<e?(n.removeClass("recipe__ingredients--fixed"),l(".recipe__col").addClass("recipe__col--sticky")):t<o?(l(".recipe__col").removeClass("recipe__col--sticky"),n.addClass("recipe__ingredients--fixed")):(l(".recipe__col").removeClass("recipe__col--sticky"),n.removeClass("recipe__ingredients--fixed"))}))}})),l((function(){var e=l(".vacancies__row");if(0!==e.length){var t=e.offset().top,a=(e.innerHeight(),l(".vacancies__city"));l(window).on("scroll",(function(){l(this).scrollTop()>t?a.addClass("vacancies__city--fixed"):a.removeClass("vacancies__city--fixed")}))}})),l((function(){var e=l(".header");if(0!==e.length){var t=e.find(".header__button-button");t.on("click",(function(){e.hasClass("header--nav-modal")?(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active")):(e.addClass("header--nav-modal"),t.addClass("button-modal--active"))})),l(window).on("click",(function(a){e.hasClass("header--nav-modal")&&0===l(a.target).closest(t).length&&0===l(a.target).closest(".nav-modal").length&&(e.removeClass("header--nav-modal"),t.removeClass("button-modal--active"))}))}})),l((function(){var e=l(".nav-modal");if(0!==e.length){var t=e.find(".header__catalog-button"),a=e.find(".header-catalog__dropdown");t.on("click",(function(){t.toggleClass("header__catalog-button--active"),a.slideToggle()})),e.find(".header-catalog__section").find(".header-catalog__section-button").on("click",(function(){var e=l(this).closest(".header-catalog__section");e.hasClass("header-catalog__section--active")?(e.find(".header-catalog__section-dropdown").slideUp(500),e.removeClass("header-catalog__section--active")):(l(".header-catalog__section--active").find(".header-catalog__section-dropdown").slideUp(650),l(".header-catalog__section--active").removeClass("header-catalog__section--active"),e.find(".header-catalog__section-dropdown").slideDown(500),e.addClass("header-catalog__section--active"))}))}})),l((function(){var e=l(".header");if(0!==e.length){var t=e.find(".header__city-button"),a=e.find(".modal-search__button");t.on("click",(function(){e.addClass("header--city-search")})),a.on("click",(function(){e.removeClass("header--city-search")})),l(window).on("click",(function(a){var n=a.target.closest(".header__city-button");e.hasClass("header--city-search")&&n!==t[0]&&0===l(a.target).closest(".modal-search--city").length&&0===l(n).closest(".nav-modal").length&&e.removeClass("header--city-search")}))}})),l((function(){var e=l(".header");if(0!==e.length){var t=e.find(".header__search-button"),a=e.find(".modal-search__button-catalog");t.on("click",(function(){e.addClass("header--catalog-search")})),a.on("click",(function(){e.removeClass("header--catalog-search")})),l(window).on("click",(function(a){var n=a.target.closest(".header__search-button");e.hasClass("header--catalog-search")&&n!==t[0]&&0===l(a.target).closest(".modal-search--catalog").length&&e.removeClass("header--catalog-search")}))}})),l(window).on("click",(function(e){var t=l(e.target).closest(".vacancies-list__row");if(0!==t.lenght){var a=t.closest(".vacancies-list__item").find(".vacancies-list__dropdown");t.toggleClass("vacancies-list__row--active"),a.slideToggle()}})),l((function(){l(".select__select").each((function(){var e=l(this),t=e.closest(".select-wrapper");"static"===getComputedStyle(t[0]).position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0}),e.on("select2:open",(function(){t.css("z-index","100000");var e=t.find(".select2-dropdown");e.hide();var a=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(a)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var n=t.find(".select2-dropdown"),o=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),n.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(o)}),0)}))}))})),l((function(){var e=l(".form");if(0!==e.length){var t=l(".response"),a=l(".response__btn");l(".form__btn").on("submit",(function(){e.addClass("form--hidden"),t.addClass("response--active"),l(".provider__row").addClass("provider__row--active")})),a.on("click",(function(){e.removeClass("form--hidden"),t.removeClass("response--active"),l(".provider__row").removeClass("provider__row--active")}))}})),l((function(){l.fancybox.defaults.closeExisting=!0,l("[data-fancy-button]").on("click",(function(e){e.preventDefault();var t=l(this).data("fancy-button"),a=l('[data-fancy-modal="'.concat(t,'"]'));l.fancybox.open(a)}))})),l((function(){var e=l("[data-tabs-id]");if(0!==e.length){var t=[];e.each((function(){var e=l(this).data("tabs-id");-1===t.indexOf(e)&&t.push(e)})),t.forEach((function(e){var t=l('[data-tabs-id="'.concat(e,'"][data-tabs-tab]')),a=l('[data-tabs-id="'.concat(e,'"][data-tabs-button]'));if(0!==t.length){var n={id:null,update:function(e){this.id=e},close:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).removeAttr("data-tabs-active"),a.filter('[data-tabs-button="'.concat(this.id,'"]')).removeAttr("data-tabs-active")},open:function(){t.filter('[data-tabs-tab="'.concat(this.id,'"]')).attr("data-tabs-active",""),a.filter('[data-tabs-button="'.concat(this.id,'"]')).attr("data-tabs-active","")},change:function(e){e&&e!==this.id&&(this.close(),this.update(e),this.open())},init:function(){var e=a.filter("[data-tabs-active]").data("tabs-button");this.update(e)}};n.init(),a.on("click",(function(){var e=l(this).data("tabs-button");n.change(e)}))}}))}})),l((function(){var e=l(".header");if(0!==e.length){var t=l(window).scrollTop();l(window).on("scroll",(function(){var a=l(window).scrollTop();e.hasClass("header--nav-modal")||e.hasClass("header--catalog-search")||e.hasClass("header--catalog-modal")||e.hasClass("header--city-search")||(a<t?(e.removeClass("header--scroll--down"),e.addClass("header--scroll--up")):(e.removeClass("header--scroll--up"),e.addClass("header--scroll--down"))),a<1&&(e.removeClass("header--scroll--up"),e.removeClass("header--scroll--down")),t=a})),l(window).scrollTop()>=1&&e.addClass("header--scroll--up")}})),l(window).on("load",(function(){l("[data-scrollbar-id]").each((function(){var e=l(this),t=e.data("scrollbar-id"),a=l('[data-scrollbar-outer="'.concat(t,'"]')),n=l('[data-scrollbar-inner="'.concat(t,'"]')),o=a[0].offsetHeight,i=n[0].offsetHeight,s=i-o;if(s<=0)e.css("display","none");else{var c=l('[data-scrollbar-thumb="'.concat(t,'"]')),r=o/i*100,d=100-r;requestAnimationFrame((function(){c.css("height","".concat(r,"%"))})),a.on("scroll",(function(){var e=a.scrollTop(),t=Math.round(e/s*100);t=t<0?0:t>100?100:t,requestAnimationFrame((function(){c.css("top","".concat(d*(t/100),"%"))}))}))}}));var e=l("[data-category-item]"),t=l("[data-category-tab]");t.css("display","none"),e.each((function(){var a=this,n=l(this),o=n.data("category-item"),i=n.find("[data-category-button]");"categoryActive"in n[0].dataset&&l('[data-category-tab="'.concat(o,'"]')).css("display","");n[0].dataset;i.on("mouseenter",(function(){delete e.filter("[data-category-active]")[0].dataset.categoryActive,l(a)[0].dataset.categoryActive="",t.css("display","none"),l('[data-category-tab="'.concat(o,'"]')).css("display","")}))}));var a=l(".header");if(0!==a.length){var n=a.find(".header__catalog-button[data-modal-button]");n.on("click",(function(){a.hasClass("header--catalog-modal")?(a.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active")):(a.addClass("header--catalog-modal"),n.addClass("header__catalog-button--active"))})),l(window).on("click",(function(e){a.hasClass("header--catalog-modal")&&0===l(e.target).closest(n).length&&0===l(e.target).closest(".catalog-modal").length&&(a.removeClass("header--catalog-modal"),n.removeClass("header__catalog-button--active"))}))}})),ymaps.ready((function(){0!==l("#map").length&&l.getJSON("/shops.json",(function(e){var t={};e.geoPoints.forEach((function(e){var a=e.location;a in t?t[a].push(e):t[a]=[e]})),e.regionList=e.regionList.sort((function(e,t){return e.NAME>t.NAME?1:e.NAME<t.NAME?-1:0}));var a=l("[data-map-select]");a.select2("destroy");var n="";e.regionList.forEach((function(t){n+='<option value="'.concat(t.ID,'" ').concat(t.NAME===e.startLocation?"selected":"",">").concat(t.NAME,"</option>")})),a.html(n);var o=a.closest(".select-wrapper");function i(e){var a=l("[data-map-list]"),n="";t[e].forEach((function(e){n+='<li class="map-list__item" data-map-id="'.concat(e.id,'">'),n+='<div class="map-list__wrapper">',n+='<div class="map-balloon">',n+='<div class="map-balloon__container">',"label"in e&&(n+='<div class="map-balloon__store">'.concat(e.label,"</div>")),n+='<div class="map-balloon__addres">'.concat(e.address,"</div>"),n+='<div class="map-balloon__times">',e.schedules.forEach((function(e){n+='<div class="map-balloon__time">'.concat(e,"</div>")})),n+="</div>",n+="</div>",n+="</div>",n+="</div>",n+="</li>"})),a.html(n)}"static"===getComputedStyle(o[0]).position&&o.css("position","relative"),a.select2({dropdownParent:o,selectOnClose:!0}),a.on("select2:open",(function(){o.css("z-index","100000");var e=o.find(".select2-dropdown");e.hide();var t=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(t)}),0)})),a.on("select2:closing",(function(e){e.preventDefault();var t=o.find(".select2-dropdown"),n=setTimeout((function(){o.css("z-index","");var e=o.find(".select2");e.addClass("closing"),e.removeClass("select2-container--open"),t.slideUp(500,(function(){var e=setTimeout((function(){a.select2("destroy"),a.select2({dropdownParent:o,selectOnClose:!0}),a.removeClass("closing"),o.css("z-index",""),clearTimeout(e)}),300)})),clearTimeout(n)}),0)})),i(e.startLocation);var s={markWidth:53,markHeight:56};function c(){return s.ymap.margin.addArea({top:0,left:0,width:"350px",height:"100%"})}s.ymap=new ymaps.Map("map",{zoom:12,controls:[],center:t[e.startLocation][0].coordinates},{maxZoom:22}),s.marginArea={list:f.matches?c():null},f.addListener((function(e){e.matches?s.marginArea.list=c():s.marginArea.list.remove()})),s.placemarks={},s.clusters={};var r=function(e){s.clusters[e]=new ymaps.Clusterer({clusterIconLayout:ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),clusterIconShape:{type:"Rectangle",coordinates:[[0,0],[50,50]]}}),t[e].forEach((function(t){var a=['<div class="map-balloon--alt">','<div class="map-balloon__container">'];"label"in t&&(a=a.concat(['<div class="map-balloon__store">',t.label,"</div>"])),a=(a=a.concat(['<div class="map-balloon__addres">',t.address,"</div>"])).concat(['<div class="map-balloon__times">']),t.schedules.forEach((function(e){a=a.concat(['<div class="map-balloon__time">',e,"</div>"])})),a=a.concat(["</div>","</div>","</div>"]);var n=ymaps.templateLayoutFactory.createClass(a.join(""),{build:function(){this.constructor.superclass.build.call(this),this._$element=l(".map-balloon--alt",this.getParentElement()),this.applyElementOffset()},onSublayoutSizeChange:function(){n.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset:function(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+s.markHeight/2)})},getShape:function(){if(!this._isElement(this._$element))return n.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight]]))},_isElement:function(e){return e&&e[0]}}),o=new ymaps.Placemark(t.coordinates,{id:t.id},{iconLayout:"default#image",iconImageHref:"/local/templates/main/assets/images/svg/placemark.svg",iconImageSize:[s.markWidth,s.markHeight],iconImageOffset:[-s.markWidth/2,-s.markHeight],balloonLayout:n,balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});s.placemarks[t.id]=o,s.clusters[e].add(o)}))};for(var d in t)r(d);function u(e){s.ymap.geoObjects.removeAll(),s.ymap.geoObjects.add(s.clusters[e]);var a=s.ymap.margin.getMargin(),n=Math.max(s.markWidth,s.markHeight);a=a.map((function(e){return e+n})),s.ymap.setBounds(s.clusters[e].getBounds(),{zoomMargin:a}).then((function(){1===t[e].length&&s.ymap.setZoom(18)}))}s.ymap.events.add("click",(function(e){s.ymap.balloon.isOpen()&&s.ymap.balloon.close()})),u(e.startLocation),a.on("change",(function(e){a.val();var t=a.find("option:selected").text();i(t),u(t)})),l(window).on("click",(function(e){var t=l(e.target).closest(".map-balloon");if(0!==t.length){var a=t.closest(".map-list__item"),n=l(".map-list__item"),o=a.data("map-id"),i=s.placemarks[o];s.ymap.setCenter(i.geometry._coordinates,15),i.balloon.open(),a.hasClass("map-list__item--active")||n.removeClass("map-list__item--active"),a.addClass("map-list__item--active")}}))}))})),l((function(){l("form").parsley(),window.Parsley.addValidator("phone",{validateString:function(e){return 17==e.length&&9==e[4]}}),Inputmask({mask:"+7 (999) 999-9999",showMaskOnHover:!1}).mask("[data-mask=phone]")})),l((function(){l(".product-announcement").each((function(){var e=l(this),t=e.find(".product-announcement__title"),a=t.text(),n=3;e.hasClass("product-announcement--small")&&(n=2);function o(){return e.hasClass("product-announcement--small")?16:e.hasClass("product-announcement--large")?22:f.matches?18:12}var i=o();function s(){if(t.text(a),t.height()>i*n){for(var e=a;t.height()>i*n;)e=e.substring(0,e.length-1).trim(),t.text(e);e=e.substring(0,e.length-5).trim()+"...",t.text(e)}}f.addListener((function(){i=o()})),s(),window.addEventListener("resize",(function e(){s(),setTimeout((function(){window.addEventListener("resize",e,{once:!0})}),1e3)}),{once:!0})}))})),l((function(){l(".video").each((function(){var e=l(this),t=e.find(".video__button"),a=e.find(".video__yt");t.on("click",(function(){a.addClass("video__yt--active")}))}))})),l((function(){l(".product-card__video-wrapper").on("click",(function(){l(".video-modal").addClass("video-modal--active")})),l(".video-modal").on("click",(function(e){e.target!==l(".video-modal")[0]&&e.target!==l(".video-modal__close")[0]||(l(".video-modal__yt").attr("src",l("iframe").attr("src")),l(".video-modal").removeClass("video-modal--active"))}))})),l((function(){l(".form__input").each((function(){var e=l(this),t=e.closest(".form__item");e.on("input",(function(){0!==e.value?t.addClass("form__item--active"):t.removeClass("form__item--active")}))}))})),l((function(){l(".question").each((function(){var e=l(this).find(".question__content").text().trim(),t=l(this).find(".question__mark");(0,r.ZP)(t[0],{content:e,appendTo:l(".main")[0],offset:[0,13]})}))})),l((function(){var e=l(".gifts");if(0!==e.length){var t=e.offset().top;l(window).on("scroll",(function(){l(this).scrollTop()>t-200&&l(".animation").addClass("animation--animated")}))}})),l((function(){0!==l(".intro").length&&l(window).on("scroll",(function(){var e=l(".intro__frame");if(l(this).scrollTop()<=e.offset().top+e.height()){var t=l(this).scrollTop()/5;requestAnimationFrame((function(){l(".intro__bg").css("transform","translateY(".concat(t,"px)"))}))}})),0!==l(".about").length&&l("[data-parallax-ratio]").each((function(){var e=l(this),t=e.data("parallax-ratio");l(window).on("scroll",(function(){var a=l(".about__layout");if(l(this).scrollTop()+l(window).height()>=a.offset().top&&l(this).scrollTop()<=a.offset().top+a.innerHeight()){var n=(l(this).scrollTop()-a.offset().top)/t;requestAnimationFrame((function(){e.css("transform","translateY(".concat(n,"px)"))}))}}))}));var e=l(".hero");0!==e.length&&l("[data-layer-ratio]").each((function(){var t=l(this),a=t.data("layer-ratio");l(window).on("scroll",(function(){if(l(this).scrollTop()<=e.offset().top+e.innerHeight()){var n=(l(this).scrollTop()-e.offset().top)/a;requestAnimationFrame((function(){t.css("transform","translateY(".concat(n,"px)"))}))}}))}))})),l(window).on("load",(function(){c()()}))},10:(e,t,a)=>{var n=a(638);function o(e){var t=n("[data-type=js-catalog-list]");n.ajax({method:"POST",url:window.location.href,data:{ajax:1,discount:e}}).done((function(e){t.html(e)}))}function i(){var e=n("[data-type=js-recipes-filter]"),t=e.find("select[name=time]").val(),a=e.find("select[name=type]").val(),o=n("[data-type=js-recipes-list]");console.log("ajaxRecipes"),n.ajax({method:"POST",url:window.location.href,data:{ajax:1,time:t,type:a}}).done((function(e){o.html(e)}))}n((function(){console.log("backend")})),n((function(){console.log("vacancy"),n("[data-type=js-vacancy-filter]").on("change",(function(e){var t,a;t=this.value,a=n("[data-type=js-vacancy-list]"),n.ajax({method:"POST",url:window.location.href,data:{ajax:1,cityId:t}}).done((function(e){a.html(e)}))})),n("[data-type=redirect-buy-list]").on("click",(function(){window.location.href="/buy/list/"})),n("[data-type=redirect-buy-map]").on("click",(function(){window.location.href="/buy/"})),n(document).on("change","select[name=city]",(function(){var e=n(this),t=e.val(),a=e.find("option[value="+t+"]").html();console.log("id region="+t),console.log("name region="+a),location.href=window.location.pathname+"?region="+t+"&region_name="+a})),n(document).on("change","[data-type=data-buy-filter]",(function(){var e=n(this),t=e.parents("[data-type=buy-list-container]").find("[data-type=items-container]"),a={regionId:e.val()};t.empty(),n.ajax({type:"POST",url:window.location.href,dataType:"html",data:a,success:function(e){var a=n(e).find("[data-type=items-container]").children();t.append(a)}})})),n("[data-type=autocomplete-region-define]").autocomplete({appendTo:"[data-autocomplete-place]",source:function(e,t){n.ajax({url:"/local/templates/main/include/ajax/autocomplete_define_region.php",dataType:"json",data:{q:e.term},success:function(e){e.error?console.log(e.error):t(e)}})},position:{my:"left top+5"},select:function(e,t){return location.href=window.location.pathname+"?region="+t.item.id+"&region_name="+t.item.value,!1}}),n(document).on("submit","[data-type=js-form]",(function(e){e.preventDefault();var t=n(this),a=t.siblings("[data-type=form-response]"),o=t.attr("data-url"),i=t.attr("data-event-type"),s="application/x-www-form-urlencoded; charset=UTF-8",c=!0,r={};if("CONTACT_FORM"!=i){r=new FormData,s=!1,c=!1;var l=t.find("[data-type=file]");r.append("file",l[0].files[0])}t.find("[data-type=get-field], [data-type=get-offer]:checked, [data-type=get-manufacturer]:checked, [data-type=get-organizational]:checked").each((function(){var e=n(this).attr("data-uf"),t=n(this).val();"CONTACT_FORM"!=i?r.append(e,t):r[e]=t})),n.ajax({type:"POST",url:o,dataType:"json",contentType:s,processData:c,data:r,success:function(e){!0===e.success&&(t.addClass("form--hidden"),a.addClass("response--active"))}})})),n(document).on("click",".search-form__button",(function(e){e.preventDefault();var t=n(document).find("[data-type=search-form]").find("input[name=search]").val(),a=n("[data-type=js-search-list]");n.ajax({method:"POST",url:window.location.href,data:{ajax:1,search:t}}).done((function(e){a.html(e)}))})),n(document).on("click","[data-type=search-button-header]",(function(e){e.preventDefault();var t=n(document).find("[data-type=header-search-form]").find("input[name=search]").val();document.location.href="http://dubki-produkty.ru/search/?search="+t})),n("[data-type=js-recipes-filter]").find("select").on("change",(function(){i()})),i(),function(){console.log("product change city"),n("[data-type=product-change-city]").length;function e(){var e=n("[data-type=product-change-city]").find("option:selected"),t=e.attr("data-region"),a=e.attr("data-region-name");location.href=window.location.pathname+"?region="+t+"&region_name="+a}n("[data-type=product-change-city]").on("change",(function(t){console.log("change"),e()}))}(),console.log("discounts"),n("[data-type=js-discounts-filter]").on("click",(function(e){n(document).find("[data-type=js-discounts-filter]").each((function(){n(this).removeClass("category__item--active")})),n(this).addClass("category__item--active"),o(this.getAttribute("data-value"))})),o()}))}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,o,i)=>{if(!a){var s=1/0;for(l=0;l<e.length;l++){for(var[a,o,i]=e[l],c=!0,r=0;r<a.length;r++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](a[r])))?a.splice(r--,1):(c=!1,i<s&&(s=i));c&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[s,c,r]=a,l=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(r)var d=r(n);for(t&&t(a);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[337],(()=>n(168)));o=n.O(o)})();