(()=>{"use strict";var e,r={168:(e,r,a)=>{var o=a(566),t=a(638);t((function(){var e=t(".slider");if(0!==e.length)new o.Z(e[0],{slidesPerView:"auto",spaceBetween:20})})),t((function(){var e,r,a,n=t(".top__container");if(0!==n.length){var l=new o.Z(n[0],{slidesPerView:"auto",slidesPerGroup:1,spaceBetween:25,loop:!0,breakpoints:(e={},r=1280,a={slidesPerGroup:3},r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e)});t(".top__button").on("click",(function(){console.log(123),l.slideNext()}))}})),t((function(){var e=t(".header");if(0!==e.length){var r=e.find(".header__button-button");r.on("click",(function(){console.log(123),e.hasClass("header--nav-modal")?(e.removeClass("header--nav-modal"),r.removeClass("header__button-button--active")):(e.addClass("header--nav-modal"),r.addClass("header__button-button--active"))})),t(window).on("click",(function(a){e.hasClass("header--nav-modal")&&a.target!==r[0]&&0===t(a.target).closest(".nav-modal").length&&(e.removeClass("header--nav-modal"),r.removeClass("header__button-button--active"))}))}}))}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e].call(n.exports,n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,a,t,n)=>{if(!a){var l=1/0;for(d=0;d<e.length;d++){for(var[a,t,n]=e[d],s=!0,i=0;i<a.length;i++)(!1&n||l>=n)&&Object.keys(o.O).every((e=>o.O[e](a[i])))?a.splice(i--,1):(s=!1,n<l&&(l=n));s&&(e.splice(d--,1),r=t())}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,t,n]},o.d=(e,r)=>{for(var a in r)o.o(r,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={143:0,532:0};o.O.j=r=>0===e[r];var r=(r,a)=>{var t,n,[l,s,i]=a,d=0;for(t in s)o.o(s,t)&&(o.m[t]=s[t]);if(i)var c=i(o);for(r&&r(a);d<l.length;d++)n=l[d],o.o(e,n)&&e[n]&&e[n][0](),e[l[d]]=0;return o.O(c)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})();var t=o.O(void 0,[761,532],(()=>o(168)));t=o.O(t)})();