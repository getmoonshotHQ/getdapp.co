import{_ as t,a as n,b as e,c as r,i as o,s as c,d as i,S as a,e as s,f,t as l,g as u,h as p,j as h,k as d,l as v,m as g,n as m,o as y,p as $,q as w,r as D,u as E,v as x,w as b,x as R,y as k,z as I,A as V,B as z,C as S,D as j,E as A,F as M,G as N,H as P,I as T,J as L,K as C,L as _,M as B,N as G,O as U,P as H,Q as W,R as q,T as O,U as F,V as J,W as K}from"./client.bdcb9992.js";var Q=["anders.contentcommons"];function X(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function Y(t){var n,e,r,o,c,i;return{c:function(){n=s("div"),e=s("div"),r=s("img"),o=f(),c=s("div"),i=l("These Dapps/websites are maintained by third-party authors and are not affiliated with Elastos unless explicitly stated. Elastos is not liable for any third-party Dapps."),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var a=p(n);e=u(a,"DIV",{class:!0});var s=p(e);r=u(s,"IMG",{alt:!0,src:!0,class:!0}),s.forEach(h),o=d(a),c=u(a,"DIV",{class:!0});var f=p(c);i=v(f,"These Dapps/websites are maintained by third-party authors and are not affiliated with Elastos unless explicitly stated. Elastos is not liable for any third-party Dapps."),f.forEach(h),a.forEach(h),this.h()},h:function(){g(r,"alt","close"),r.src!=="shield-icon.png"&&g(r,"src","shield-icon.png"),g(r,"class","svelte-oikl1l"),g(e,"class","icon svelte-oikl1l"),g(c,"class","description svelte-oikl1l"),g(n,"class","disclaimer svelte-oikl1l")},m:function(t,a){m(t,n,a),y(n,e),y(e,r),y(n,o),y(n,c),y(c,i)},p:$,i:$,o:$,d:function(t){t&&h(n)}}}var Z=function(n){t(s,a);var e=X(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,null,Y,c,{}),n}return s}();function tt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function nt(t,n,e){var r=t.slice();return r[13]=n[e],r[15]=e,r}function et(t,n,e){var r=t.slice();return r[13]=n[e],r}function rt(t){var n;return{c:function(){n=s("a"),this.h()},l:function(t){n=u(t,"A",{class:!0,href:!0,target:!0,rel:!0,style:!0}),p(n).forEach(h),this.h()},h:function(){g(n,"class","item svelte-116js88"),g(n,"href",t[13].url),g(n,"target","_blank"),g(n,"rel","noopener"),g(n,"style","background-image: url(".concat(t[13].imageUrl,"); background-color: ").concat(t[13].color,";"))},m:function(t,e){m(t,n,e)},p:$,d:function(t){t&&h(n)}}}function ot(t){var n,e,r;function o(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t)[5].apply(n,[t[15]].concat(r))}return{c:function(){n=s("div"),this.h()},l:function(t){n=u(t,"DIV",{class:!0}),p(n).forEach(h),this.h()},h:function(){g(n,"class","dot svelte-116js88"),w(n,"selected",t[1]===t[15])},m:function(t,c){m(t,n,c),e||(r=D(n,"click",o),e=!0)},p:function(e,r){t=e,2&r&&w(n,"selected",t[1]===t[15])},d:function(t){t&&h(n),e=!1,r()}}}function ct(t){for(var n,e,r,o,c=t[2],i=[],a=0;a<c.length;a+=1)i[a]=rt(et(t,c,a));for(var l=t[2],v=[],w=0;w<l.length;w+=1)v[w]=ot(nt(t,l,w));return{c:function(){n=s("div"),e=s("div");for(var t=0;t<i.length;t+=1)i[t].c();r=f(),o=s("div");for(var c=0;c<v.length;c+=1)v[c].c();this.h()},l:function(t){n=u(t,"DIV",{class:!0});var c=p(n);e=u(c,"DIV",{class:!0});for(var a=p(e),s=0;s<i.length;s+=1)i[s].l(a);a.forEach(h),r=d(c),o=u(c,"DIV",{class:!0});for(var f=p(o),l=0;l<v.length;l+=1)v[l].l(f);f.forEach(h),c.forEach(h),this.h()},h:function(){g(e,"class","slider svelte-116js88"),g(o,"class","dots svelte-116js88"),g(n,"class","promo-carousel svelte-116js88")},m:function(c,a){m(c,n,a),y(n,e);for(var s=0;s<i.length;s+=1)i[s].m(e,null);t[4](e),y(n,r),y(n,o);for(var f=0;f<v.length;f+=1)v[f].m(o,null)},p:function(t,n){var r=E(n,1)[0];if(4&r){var a;for(c=t[2],a=0;a<c.length;a+=1){var s=et(t,c,a);i[a]?i[a].p(s,r):(i[a]=rt(s),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=c.length}if(10&r){var f;for(l=t[2],f=0;f<l.length;f+=1){var u=nt(t,l,f);v[f]?v[f].p(u,r):(v[f]=ot(u),v[f].c(),v[f].m(o,null))}for(;f<v.length;f+=1)v[f].d(1);v.length=l.length}},i:$,o:$,d:function(e){e&&h(n),x(i,e),t[4](null),x(v,e)}}}function it(t,n,e){var r=null,o=0,c=[{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/greenpass.jpg",url:"https://mygreenpass.life/",name:"GreenPass"},{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/hyper.jpg",url:"https://www.hyper.im",name:"Hyper"},{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/academy.jpg",url:"https://elastos.academy/",name:"Elastos Academy"},{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/cr.jpg",url:"https://www.cyberrepublic.org/",name:"Cyber Republic"}],i=0,a=null,s=0,f=0;function l(t){e(1,i=t),r.scroll({top:0,left:s*i,behavior:"smooth"})}function u(){s=f+8.5,a=setInterval((function(){i<c.length-1?(e(1,i++,i),r.scroll({top:0,left:r.children[i].offsetLeft-17-4,behavior:"smooth"})):(e(1,i=0),r.scroll({top:0,left:0,behavior:"smooth"}))}),4200)}function p(){o=.635135*(r.getBoundingClientRect().width-34);var t=.141*r.getBoundingClientRect().width;e(0,r.style.height=window.innerWidth>900?"".concat(t,"px"):"".concat(o,"px"),r),f=window.innerWidth>900?t:1.57446*o}b((function(){p(),u(),r.addEventListener("touchend",(function(){!function t(n){clearInterval(a);var o=Math.floor((r.scrollLeft+f/2)/f);e(1,i=o),n?u():setTimeout((function(){t(!0),r.scroll({top:0,left:r.children[i].offsetLeft-17-4,behavior:"smooth"})}),120)}(!1)})),r.addEventListener("mousewheel",(function(t){t.preventDefault()}),{passive:!0}),r.addEventListener("touchstart",(function(){clearInterval(a)}),{passive:!0}),window.addEventListener("resize",(function(){p()}))}));return[r,i,c,l,function(t){R[t?"unshift":"push"]((function(){e(0,r=t)}))},function(t){l(t)}]}var at=function(n){t(s,a);var e=tt(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,it,ct,c,{}),n}return s}();function st(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function ft(t){var n,e,r,o,c,i=t[4].default,a=k(i,t,t[3],null);return{c:function(){n=s("div"),e=s("div"),r=l(t[0]),o=f(),a&&a.c(),this.h()},l:function(c){n=u(c,"DIV",{class:!0});var i=p(n);e=u(i,"DIV",{class:!0});var s=p(e);r=v(s,t[0]),s.forEach(h),o=d(i),a&&a.l(i),i.forEach(h),this.h()},h:function(){g(e,"class","title svelte-3zak0e"),g(n,"class","titled-section svelte-3zak0e"),w(n,"noborder",t[1]),w(n,"nopadding",t[2])},m:function(t,i){m(t,n,i),y(n,e),y(e,r),y(n,o),a&&a.m(n,null),c=!0},p:function(t,e){var o=E(e,1)[0];(!c||1&o)&&I(r,t[0]),a&&a.p&&8&o&&V(a,i,t,t[3],o,null,null),2&o&&w(n,"noborder",t[1]),4&o&&w(n,"nopadding",t[2])},i:function(t){c||(z(a,t),c=!0)},o:function(t){S(a,t),c=!1},d:function(t){t&&h(n),a&&a.d(t)}}}function lt(t,n,e){var r=n.title,o=n.noborder,c=void 0!==o&&o,i=n.nopadding,a=void 0!==i&&i,s=n.$$slots,f=void 0===s?{}:s,l=n.$$scope;return t.$set=function(t){"title"in t&&e(0,r=t.title),"noborder"in t&&e(1,c=t.noborder),"nopadding"in t&&e(2,a=t.nopadding),"$$scope"in t&&e(3,l=t.$$scope)},[r,c,a,l,f]}var ut=function(n){t(s,a);var e=st(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,lt,ft,c,{title:0,noborder:1,nopadding:2}),n}return s}();function pt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function ht(t){var n,e,r,o=t[1].default,c=k(o,t,t[0],null);return{c:function(){n=s("div"),e=s("div"),c&&c.c(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var r=p(n);e=u(r,"DIV",{class:!0});var o=p(e);c&&c.l(o),o.forEach(h),r.forEach(h),this.h()},h:function(){g(e,"class","slider svelte-1ynvfmo"),g(n,"class","horizontal-slider svelte-1ynvfmo")},m:function(t,o){m(t,n,o),y(n,e),c&&c.m(e,null),r=!0},p:function(t,n){var e=E(n,1)[0];c&&c.p&&1&e&&V(c,o,t,t[0],e,null,null)},i:function(t){r||(z(c,t),r=!0)},o:function(t){S(c,t),r=!1},d:function(t){t&&h(n),c&&c.d(t)}}}function dt(t,n,e){var r=n.$$slots,o=void 0===r?{}:r,c=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(0,c=t.$$scope)},[c,o]}var vt=function(n){t(s,a);var e=pt(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,dt,ht,c,{}),n}return s}();function gt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function mt(t){var n,e;return{c:function(){n=s("img"),this.h()},l:function(t){n=u(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h:function(){g(n,"alt",t[1]),n.src!==(e="".concat(t[0]))&&g(n,"src",e),g(n,"class","svelte-64wl3e")},m:function(t,e){m(t,n,e)},p:function(t,r){2&r&&g(n,"alt",t[1]),1&r&&n.src!==(e="".concat(t[0]))&&g(n,"src",e)},d:function(t){t&&h(n)}}}function yt(t){var n,e,r,o,c,i,a,l,v,w=null!==t[0]&&mt(t);return{c:function(){n=s("div"),e=s("div"),r=f(),o=s("div"),w&&w.c(),c=f(),i=j("svg"),a=j("defs"),l=j("clipPath"),v=j("path"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=p(n);e=u(s,"DIV",{class:!0}),p(e).forEach(h),r=d(s),o=u(s,"DIV",{class:!0});var f=p(o);w&&w.l(f),c=d(f),i=u(f,"svg",{width:!0,height:!0,xmlns:!0},1);var g=p(i);a=u(g,"defs",{},1);var m=p(a);l=u(m,"clipPath",{id:!0},1);var y=p(l);v=u(y,"path",{d:!0},1),p(v).forEach(h),y.forEach(h),m.forEach(h),g.forEach(h),f.forEach(h),s.forEach(h),this.h()},h:function(){g(e,"class","faux-border svelte-64wl3e"),g(v,"d","M33.2,0C20.1,0,11.7,1.6,6.7,6.7c-5,5-6.7,13.4-6.7,26.6s1.6,21.5,6.7,26.6c5,5,13.4,6.7,26.6,6.7s21.5-1.6,26.6-6.7 c5-5,6.7-13.4,6.7-26.6s-1.6-21.5-6.7-26.6C54.8,1.6,46.4,0,33.2,0z"),g(l,"id","squircle-clip"),g(i,"width","72"),g(i,"height","72"),g(i,"xmlns","http://www.w3.org/2000/svg"),g(o,"class","squircle-cut svelte-64wl3e"),g(n,"class","icon svelte-64wl3e")},m:function(t,s){m(t,n,s),y(n,e),y(n,r),y(n,o),w&&w.m(o,null),y(o,c),y(o,i),y(i,a),y(a,l),y(l,v)},p:function(t,n){var e=E(n,1)[0];null!==t[0]?w?w.p(t,e):((w=mt(t)).c(),w.m(o,c)):w&&(w.d(1),w=null)},i:$,o:$,d:function(t){t&&h(n),w&&w.d()}}}function $t(t,n,e){var r=n.iconSrc,o=n.alt;return t.$set=function(t){"iconSrc"in t&&e(0,r=t.iconSrc),"alt"in t&&e(1,o=t.alt)},[r,o]}var wt=function(n){t(s,a);var e=gt(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,$t,yt,c,{iconSrc:0,alt:1}),n}return s}();function Dt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function Et(t){var n,e,r,o,c,i,a,$,w,D;n=new wt({props:{alt:"".concat(t[0]," logo"),iconSrc:t[2]}});var E=t[4]&&xt();return{c:function(){A(n.$$.fragment),e=f(),r=s("div"),o=l(t[0]),c=f(),i=s("div"),a=l(t[1]),$=f(),E&&E.c(),w=M(),this.h()},l:function(s){N(n.$$.fragment,s),e=d(s),r=u(s,"DIV",{class:!0});var f=p(r);o=v(f,t[0]),f.forEach(h),c=d(s),i=u(s,"DIV",{class:!0});var l=p(i);a=v(l,t[1]),l.forEach(h),$=d(s),E&&E.l(s),w=M(),this.h()},h:function(){g(r,"class","title svelte-1n67jjj"),g(i,"class","subtitle svelte-1n67jjj")},m:function(t,s){P(n,t,s),m(t,e,s),m(t,r,s),y(r,o),m(t,c,s),m(t,i,s),y(i,a),m(t,$,s),E&&E.m(t,s),m(t,w,s),D=!0},p:function(t,e){var r={};1&e&&(r.alt="".concat(t[0]," logo")),4&e&&(r.iconSrc=t[2]),n.$set(r),(!D||1&e)&&I(o,t[0]),(!D||2&e)&&I(a,t[1]),t[4]?E||((E=xt()).c(),E.m(w.parentNode,w)):E&&(E.d(1),E=null)},i:function(t){D||(z(n.$$.fragment,t),D=!0)},o:function(t){S(n.$$.fragment,t),D=!1},d:function(t){T(n,t),t&&h(e),t&&h(r),t&&h(c),t&&h(i),t&&h($),E&&E.d(t),t&&h(w)}}}function xt(t){var n,e;return{c:function(){n=s("div"),e=s("img"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var r=p(n);e=u(r,"IMG",{alt:!0,src:!0,class:!0}),r.forEach(h),this.h()},h:function(){g(e,"alt","sponsored-star"),e.src!=="star-icon.svg"&&g(e,"src","star-icon.svg"),g(e,"class","svelte-1n67jjj"),g(n,"class","sponsored-star svelte-1n67jjj")},m:function(t,r){m(t,n,r),y(n,e)},d:function(t){t&&h(n)}}}function bt(t){var n,e,r,o,c=!t[5]&&Et(t);return{c:function(){n=s("div"),c&&c.c(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var e=p(n);c&&c.l(e),e.forEach(h),this.h()},h:function(){g(n,"class","dapp svelte-1n67jjj"),w(n,"whitetext",t[3]),w(n,"sponsored",t[4]),w(n,"ghost",t[5])},m:function(i,a){m(i,n,a),c&&c.m(n,null),e=!0,r||(o=D(n,"click",t[7]),r=!0)},p:function(t,e){var r=E(e,1)[0];t[5]?c&&(L(),S(c,1,1,(function(){c=null})),C()):c?(c.p(t,r),32&r&&z(c,1)):((c=Et(t)).c(),z(c,1),c.m(n,null)),8&r&&w(n,"whitetext",t[3]),16&r&&w(n,"sponsored",t[4]),32&r&&w(n,"ghost",t[5])},i:function(t){e||(z(c),e=!0)},o:function(t){S(c),e=!1},d:function(t){t&&h(n),c&&c.d(),r=!1,o()}}}function Rt(t,n,e){var r=n.title,o=void 0===r?"":r,c=n.subtitle,i=void 0===c?"":c,a=n.iconSrc,s=void 0===a?"":a,f=n.whitetext,l=void 0!==f&&f,u=n.sponsored,p=void 0!==u&&u,h=n.ghost,d=void 0!==h&&h,v=n.id,g=void 0===v?"0":v;return t.$set=function(t){"title"in t&&e(0,o=t.title),"subtitle"in t&&e(1,i=t.subtitle),"iconSrc"in t&&e(2,s=t.iconSrc),"whitetext"in t&&e(3,l=t.whitetext),"sponsored"in t&&e(4,p=t.sponsored),"ghost"in t&&e(5,d=t.ghost),"id"in t&&e(6,g=t.id)},[o,i,s,l,p,d,g,function(n){_(t,n)}]}var kt=function(n){t(s,a);var e=Dt(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,Rt,bt,c,{title:0,subtitle:1,iconSrc:2,whitetext:3,sponsored:4,ghost:5,id:6}),n}return s}();function It(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function Vt(t){var n,e,r,o,c,i,a,l,v;return(l=new kt({props:{whitetext:!0,title:t[0].title,subtitle:"",iconSrc:"".concat(t[0].logo),sponsored:1===t[0].featured}})).$on("click",t[3]),{c:function(){n=s("div"),e=s("div"),r=j("svg"),o=j("path"),i=f(),a=s("div"),A(l.$$.fragment),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var c=p(n);e=u(c,"DIV",{class:!0});var s=p(e);r=u(s,"svg",{width:!0,height:!0,xmlns:!0,class:!0},1);var f=p(r);o=u(f,"path",{stroke:!0,fill:!0,d:!0},1),p(o).forEach(h),f.forEach(h),i=d(s),a=u(s,"DIV",{class:!0});var v=p(a);N(l.$$.fragment,v),v.forEach(h),s.forEach(h),c.forEach(h),this.h()},h:function(){g(o,"stroke","none"),g(o,"fill",c=t[0].color),g(o,"d","M68.4,115H19.6C8.8,115,0,106.2,0,95.4V19.6C0,5.8,14-3.7,26.9,1.4l48.8,19.5c7.5,3,12.4,10.2,12.3,18.2v56.3 C88,106.2,79.2,115,68.4,115z"),g(r,"width","88"),g(r,"height","115"),g(r,"xmlns","http://www.w3.org/2000/svg"),g(r,"class","svelte-ai1hki"),g(a,"class","dapp-positioner svelte-ai1hki"),g(e,"class","shadow-buffer svelte-ai1hki"),g(n,"class","featured-dapp svelte-ai1hki")},m:function(c,s){m(c,n,s),y(n,e),y(e,r),y(r,o),y(e,i),y(e,a),P(l,a,null),t[4](n),v=!0},p:function(t,n){var e=E(n,1)[0];(!v||1&e&&c!==(c=t[0].color))&&g(o,"fill",c);var r={};1&e&&(r.title=t[0].title),1&e&&(r.iconSrc="".concat(t[0].logo)),1&e&&(r.sponsored=1===t[0].featured),l.$set(r)},i:function(t){v||(z(l.$$.fragment,t),v=!0)},o:function(t){S(l.$$.fragment,t),v=!1},d:function(e){e&&h(n),T(l),t[4](null)}}}function zt(t,n,e){var r,o=n.dapp,c=n.onDappPicked;b((function(){o.color&&(r.style.setProperty("--featured-color",o.color),r.style.setProperty("--featured-color-lighter","".concat(o.color,"b3")),r.style.setProperty("--featured-color-shadow","".concat(o.color,"4d")))}));return t.$set=function(t){"dapp"in t&&e(0,o=t.dapp),"onDappPicked"in t&&e(1,c=t.onDappPicked)},[o,c,r,function(){c(o)},function(t){R[t?"unshift":"push"]((function(){e(2,r=t)}))}]}var St=function(n){t(s,a);var e=It(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,zt,Vt,c,{dapp:0,onDappPicked:1}),n}return s}();function jt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function At(t){var n,e,r=t[1].default,o=k(r,t,t[0],null);return{c:function(){n=s("div"),o&&o.c(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var e=p(n);o&&o.l(e),e.forEach(h),this.h()},h:function(){g(n,"class","dapps-array svelte-3mtlwy")},m:function(t,r){m(t,n,r),o&&o.m(n,null),e=!0},p:function(t,n){var e=E(n,1)[0];o&&o.p&&1&e&&V(o,r,t,t[0],e,null,null)},i:function(t){e||(z(o,t),e=!0)},o:function(t){S(o,t),e=!1},d:function(t){t&&h(n),o&&o.d(t)}}}function Mt(t,n,e){var r=n.$$slots,o=void 0===r?{}:r,c=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(0,c=t.$$scope)},[c,o]}var Nt=function(n){t(s,a);var e=jt(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,Mt,At,c,{}),n}return s}();function Pt(t){var n=t-1;return n*n*n+1}function Tt(t){return--t*t*t*t*t+1}function Lt(t,n){var e=n.delay,r=void 0===e?0:e,o=n.duration,c=void 0===o?400:o,i=n.easing,a=void 0===i?B:i,s=+getComputedStyle(t).opacity;return{delay:r,duration:c,easing:a,css:function(t){return"opacity: ".concat(t*s)}}}function Ct(t,n){var e=n.delay,r=void 0===e?0:e,o=n.duration,c=void 0===o?400:o,i=n.easing,a=void 0===i?Pt:i,s=n.x,f=void 0===s?0:s,l=n.y,u=void 0===l?0:l,p=n.opacity,h=void 0===p?0:p,d=getComputedStyle(t),v=+d.opacity,g="none"===d.transform?"":d.transform,m=v*(1-h);return{delay:r,duration:c,easing:a,css:function(t,n){return"\n\t\t\ttransform: ".concat(g," translate(").concat((1-t)*f,"px, ").concat((1-t)*u,"px);\n\t\t\topacity: ").concat(v-m*n)}}}function _t(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}function Bt(t){var n,e;return{c:function(){n=s("div"),e=l("sponsored"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var r=p(n);e=v(r,"sponsored"),r.forEach(h),this.h()},h:function(){g(n,"class","sponsored svelte-yz3cxi")},m:function(t,r){m(t,n,r),y(n,e)},d:function(t){t&&h(n)}}}function Gt(t){var n,e,r,o,c,i,a,$,w,x,b,R,k,V,j,M,L,C,_,B,O,F,J,K,Q,X,Y,Z,tt,nt,et,rt,ot,ct,it=t[0].category+"",at=t[0].appName+"",st=t[0].description.replace("<script>","").replace("<\/script>","").replace("<p>","").replace("</p>","")+"";c=new wt({props:{alt:t[0].name,iconSrc:"https://dapp-store.elastos.org/apps/".concat(t[0].packageName,"/icon")}});var ft=1===t[0].featured&&Bt();return{c:function(){n=s("div"),e=s("div"),r=s("div"),o=s("div"),A(c.$$.fragment),i=f(),a=s("div"),$=s("div"),w=l(it),x=f(),b=s("div"),R=l(at),k=f(),ft&&ft.c(),V=f(),j=s("div"),M=s("div"),L=l("Description"),C=f(),_=s("div"),B=f(),O=s("a"),F=l("GO"),K=f(),Q=s("div"),X=s("img"),tt=f(),nt=s("div"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=p(n);e=u(s,"DIV",{class:!0});var f=p(e);r=u(f,"DIV",{class:!0});var l=p(r);o=u(l,"DIV",{class:!0});var g=p(o);N(c.$$.fragment,g),g.forEach(h),i=d(l),a=u(l,"DIV",{class:!0});var m=p(a);$=u(m,"DIV",{class:!0});var y=p($);w=v(y,it),y.forEach(h),x=d(m),b=u(m,"DIV",{class:!0});var D=p(b);R=v(D,at),D.forEach(h),k=d(m),ft&&ft.l(m),m.forEach(h),l.forEach(h),V=d(f),j=u(f,"DIV",{class:!0});var E=p(j);M=u(E,"DIV",{class:!0});var I=p(M);L=v(I,"Description"),I.forEach(h),C=d(E),_=u(E,"DIV",{class:!0}),p(_).forEach(h),E.forEach(h),B=d(f),O=u(f,"A",{class:!0,href:!0,target:!0,rel:!0});var z=p(O);F=v(z,"GO"),z.forEach(h),K=d(f),Q=u(f,"DIV",{class:!0});var S=p(Q);X=u(S,"IMG",{alt:!0,src:!0}),S.forEach(h),f.forEach(h),tt=d(s),nt=u(s,"DIV",{class:!0}),p(nt).forEach(h),s.forEach(h),this.h()},h:function(){g(o,"class","title-bar--left svelte-yz3cxi"),g($,"class","category svelte-yz3cxi"),g(b,"class","title svelte-yz3cxi"),g(a,"class","title-bar--right svelte-yz3cxi"),g(r,"class","title-bar svelte-yz3cxi"),g(M,"class","label svelte-yz3cxi"),g(_,"class","content svelte-yz3cxi"),g(j,"class","description svelte-yz3cxi"),g(O,"class","button svelte-yz3cxi"),g(O,"href",J="https://scheme.elastos.org/app?id=".concat(t[0].packageName)),g(O,"target","_blank"),g(O,"rel","noopener"),g(X,"alt","close"),X.src!=="close-icon.svg"&&g(X,"src","close-icon.svg"),g(Q,"class","close svelte-yz3cxi"),g(e,"class","dapp-popup-container svelte-yz3cxi"),g(nt,"class","backdrop svelte-yz3cxi"),g(n,"class","dapp-popup svelte-yz3cxi")},m:function(s,f){m(s,n,f),y(n,e),y(e,r),y(r,o),P(c,o,null),y(r,i),y(r,a),y(a,$),y($,w),y(a,x),y(a,b),y(b,R),y(a,k),ft&&ft.m(a,null),y(e,V),y(e,j),y(j,M),y(M,L),y(j,C),y(j,_),_.innerHTML=st,y(e,B),y(e,O),y(O,F),y(e,K),y(e,Q),y(Q,X),t[5](e),y(n,tt),y(n,nt),t[6](nt),rt=!0,ot||(ct=[D(Q,"click",t[4]),D(nt,"click",t[7])],ot=!0)},p:function(t,n){var e=E(n,1)[0],r={};1&e&&(r.alt=t[0].name),1&e&&(r.iconSrc="https://dapp-store.elastos.org/apps/".concat(t[0].packageName,"/icon")),c.$set(r),(!rt||1&e)&&it!==(it=t[0].category+"")&&I(w,it),(!rt||1&e)&&at!==(at=t[0].appName+"")&&I(R,at),1===t[0].featured?ft||((ft=Bt()).c(),ft.m(a,null)):ft&&(ft.d(1),ft=null),(!rt||1&e)&&st!==(st=t[0].description.replace("<script>","").replace("<\/script>","").replace("<p>","").replace("</p>","")+"")&&(_.innerHTML=st),(!rt||1&e&&J!==(J="https://scheme.elastos.org/app?id=".concat(t[0].packageName)))&&g(O,"href",J)},i:function(t){rt||(z(c.$$.fragment,t),G((function(){Z&&Z.end(1),Y||(Y=U(e,Ct,{duration:300,x:0,y:500,opacity:.5,easing:Tt})),Y.start()})),G((function(){et||(et=H(nt,Lt,{duration:170,easing:Tt},!0)),et.run(1)})),rt=!0)},o:function(t){S(c.$$.fragment,t),Y&&Y.invalidate(),Z=W(e,Lt,{duration:170}),et||(et=H(nt,Lt,{duration:170,easing:Tt},!1)),et.run(0),rt=!1},d:function(e){e&&h(n),T(c),ft&&ft.d(),t[5](null),e&&Z&&Z.end(),t[6](null),e&&et&&et.end(),ot=!1,q(ct)}}}function Ut(t,n,e){var r,o,c=n.dapp,i=n.close;b((function(){var t=Math.min(r.offsetHeight-304,300);t>0&&e(2,r.style.top="calc(50vh - ".concat(170+t/2,"px"),r)}));return t.$set=function(t){"dapp"in t&&e(0,c=t.dapp),"close"in t&&e(1,i=t.close)},[c,i,r,o,function(){i()},function(t){R[t?"unshift":"push"]((function(){e(2,r=t)}))},function(t){R[t?"unshift":"push"]((function(){e(3,o=t)}))},function(){i()}]}var Ht=function(n){t(s,a);var e=_t(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,Ut,Gt,c,{dapp:0,close:1}),n}return s}();function Wt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return e(this,o)}}var qt=K.document,Ot=K.window;function Ft(t,n,e){var r=t.slice();return r[15]=n[e],r}function Jt(t,n,e){var r=t.slice();return r[15]=n[e],r}function Kt(t,n,e){var r=t.slice();return r[12]=n[e],r}function Qt(t,n,e){var r=t.slice();return r[15]=n[e],r}function Xt(t){var n,e;return n=new Ht({props:{dapp:t[0],close:t[5]}}),{c:function(){A(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,r){P(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.dapp=t[0]),n.$set(r)},i:function(t){e||(z(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){T(n,t)}}}function Yt(t){var n,e;return n=new St({props:{onDappPicked:t[6],dapp:t[15]}}),{c:function(){A(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,r){P(n,t,r),e=!0},p:$,i:function(t){e||(z(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){T(n,t)}}}function Zt(t){for(var n,e,r=t[4],o=[],c=0;c<r.length;c+=1)o[c]=Yt(Qt(t,r,c));var i=function(t){return S(o[t],1,1,(function(){o[t]=null}))};return{c:function(){for(var t=0;t<o.length;t+=1)o[t].c();n=M()},l:function(t){for(var e=0;e<o.length;e+=1)o[e].l(t);n=M()},m:function(t,r){for(var c=0;c<o.length;c+=1)o[c].m(t,r);m(t,n,r),e=!0},p:function(t,e){if(80&e){var c;for(r=t[4],c=0;c<r.length;c+=1){var a=Qt(t,r,c);o[c]?(o[c].p(a,e),z(o[c],1)):(o[c]=Yt(a),o[c].c(),z(o[c],1),o[c].m(n.parentNode,n))}for(L(),c=r.length;c<o.length;c+=1)i(c);C()}},i:function(t){if(!e){for(var n=0;n<r.length;n+=1)z(o[n]);e=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)S(o[n]);e=!1},d:function(t){x(o,t),t&&h(n)}}}function tn(t){var n,e;return n=new vt({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c:function(){A(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,r){P(n,t,r),e=!0},p:function(t,e){var r={};4194304&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){e||(z(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){T(n,t)}}}function nn(t){var n,e;return n=new ut({props:{title:t[12].charAt(0).toUpperCase()+t[12].slice(1),$$slots:{default:[cn]},$$scope:{ctx:t}}}),{c:function(){A(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,r){P(n,t,r),e=!0},p:function(t,e){var r={};4194310&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){e||(z(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){T(n,t)}}}function en(t){var n,e;return(n=new kt({props:{title:t[15].appName,iconSrc:"https://dapp-store.elastos.org/apps/".concat(t[15].packageName,"/icon")}})).$on("click",(function(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t)[9].apply(n,[t[15]].concat(r))})),{c:function(){A(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,r){P(n,t,r),e=!0},p:function(e,r){t=e;var o={};2&r&&(o.title=t[15].appName),2&r&&(o.iconSrc="https://dapp-store.elastos.org/apps/".concat(t[15].packageName,"/icon")),n.$set(o)},i:function(t){e||(z(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){T(n,t)}}}function rn(t){var n,e;return n=new kt({props:{ghost:!0}}),{c:function(){A(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,r){P(n,t,r),e=!0},p:$,i:function(t){e||(z(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){T(n,t)}}}function on(t){for(var n,e,r,o=t[1][t[12]],c=[],i=0;i<o.length;i+=1)c[i]=en(Jt(t,o,i));for(var a=function(t){return S(c[t],1,1,(function(){c[t]=null}))},s=t[2][t[12]],l=[],u=0;u<s.length;u+=1)l[u]=rn(Ft(t,s,u));var p=function(t){return S(l[t],1,1,(function(){l[t]=null}))};return{c:function(){for(var t=0;t<c.length;t+=1)c[t].c();n=f();for(var r=0;r<l.length;r+=1)l[r].c();e=M()},l:function(t){for(var r=0;r<c.length;r+=1)c[r].l(t);n=d(t);for(var o=0;o<l.length;o+=1)l[o].l(t);e=M()},m:function(t,o){for(var i=0;i<c.length;i+=1)c[i].m(t,o);m(t,n,o);for(var a=0;a<l.length;a+=1)l[a].m(t,o);m(t,e,o),r=!0},p:function(t,r){if(74&r){var i;for(o=t[1][t[12]],i=0;i<o.length;i+=1){var f=Jt(t,o,i);c[i]?(c[i].p(f,r),z(c[i],1)):(c[i]=en(f),c[i].c(),z(c[i],1),c[i].m(n.parentNode,n))}for(L(),i=o.length;i<c.length;i+=1)a(i);C()}if(4&r){var u;for(s=t[2][t[12]],u=0;u<s.length;u+=1){var h=Ft(t,s,u);l[u]?(l[u].p(h,r),z(l[u],1)):(l[u]=rn(),l[u].c(),z(l[u],1),l[u].m(e.parentNode,e))}for(L(),u=s.length;u<l.length;u+=1)p(u);C()}},i:function(t){if(!r){for(var n=0;n<o.length;n+=1)z(c[n]);for(var e=0;e<s.length;e+=1)z(l[e]);r=!0}},o:function(t){c=c.filter(Boolean);for(var n=0;n<c.length;n+=1)S(c[n]);l=l.filter(Boolean);for(var e=0;e<l.length;e+=1)S(l[e]);r=!1},d:function(t){x(c,t),t&&h(n),x(l,t),t&&h(e)}}}function cn(t){var n,e;return n=new Nt({props:{$$slots:{default:[on]},$$scope:{ctx:t}}}),{c:function(){A(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,r){P(n,t,r),e=!0},p:function(t,e){var r={};4194310&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){e||(z(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){T(n,t)}}}function an(t){var n,e,r=t[1][t[12]].length&&nn(t);return{c:function(){r&&r.c(),n=M()},l:function(t){r&&r.l(t),n=M()},m:function(t,o){r&&r.m(t,o),m(t,n,o),e=!0},p:function(t,e){t[1][t[12]].length?r?(r.p(t,e),2&e&&z(r,1)):((r=nn(t)).c(),z(r,1),r.m(n.parentNode,n)):r&&(L(),S(r,1,1,(function(){r=null})),C())},i:function(t){e||(z(r),e=!0)},o:function(t){S(r),e=!1},d:function(t){r&&r.d(t),t&&h(n)}}}function sn(t){var n,e,r,o,c,i,a,l,p,v,$,w,b,R,k,I,V,j,M,_,B,G,U,H=t[0]&&Xt(t);k=new at({}),V=new ut({props:{title:"Featured DApps",noborder:!0,nopadding:!0,$$slots:{default:[tn]},$$scope:{ctx:t}}});for(var W=t[3],q=[],O=0;O<W.length;O+=1)q[O]=an(Kt(t,W,O));var F=function(t){return S(q[t],1,1,(function(){q[t]=null}))};return _=new Z({}),{c:function(){n=s("meta"),e=s("meta"),r=s("meta"),o=s("meta"),c=s("meta"),i=s("meta"),a=s("meta"),l=s("meta"),p=s("meta"),v=s("meta"),$=s("meta"),w=s("meta"),b=f(),H&&H.c(),R=f(),A(k.$$.fragment),I=f(),A(V.$$.fragment),j=f();for(var t=0;t<q.length;t+=1)q[t].c();M=f(),A(_.$$.fragment),this.h()},l:function(t){var s=J('[data-svelte="svelte-z40qti"]',qt.head);n=u(s,"META",{name:!0,content:!0}),e=u(s,"META",{name:!0,content:!0}),r=u(s,"META",{property:!0,content:!0}),o=u(s,"META",{property:!0,content:!0}),c=u(s,"META",{property:!0,content:!0}),i=u(s,"META",{property:!0,content:!0}),a=u(s,"META",{property:!0,content:!0}),l=u(s,"META",{property:!0,content:!0}),p=u(s,"META",{property:!0,content:!0}),v=u(s,"META",{property:!0,content:!0}),$=u(s,"META",{property:!0,content:!0}),w=u(s,"META",{property:!0,content:!0}),s.forEach(h),b=d(t),H&&H.l(t),R=d(t),N(k.$$.fragment,t),I=d(t),N(V.$$.fragment,t),j=d(t);for(var f=0;f<q.length;f+=1)q[f].l(t);M=d(t),N(_.$$.fragment,t),this.h()},h:function(){qt.title="Discover your next favorite decentralized app!",g(n,"name","title"),g(n,"content","Discover your next favorite decentralized app!"),g(e,"name","description"),g(e,"content","Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps"),g(r,"property","og:type"),g(r,"content","website"),g(o,"property","og:url"),g(o,"content","https://www.getdapp.co/"),g(c,"property","og:title"),g(c,"content","Discover your next favorite decentralized app!"),g(i,"property","og:description"),g(i,"content","Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps"),g(a,"property","og:image"),g(a,"content","https://www.getdapp.co/social_share.jpg"),g(l,"property","twitter:card"),g(l,"content","summary_large_image"),g(p,"property","twitter:url"),g(p,"content","https://www.getdapp.co//"),g(v,"property","twitter:title"),g(v,"content","Discover your next favorite decentralized app!"),g($,"property","twitter:description"),g($,"content","Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps"),g(w,"property","twitter:image"),g(w,"content","https://www.getdapp.co/social_share.jpg")},m:function(s,f){y(qt.head,n),y(qt.head,e),y(qt.head,r),y(qt.head,o),y(qt.head,c),y(qt.head,i),y(qt.head,a),y(qt.head,l),y(qt.head,p),y(qt.head,v),y(qt.head,$),y(qt.head,w),m(s,b,f),H&&H.m(s,f),m(s,R,f),P(k,s,f),m(s,I,f),P(V,s,f),m(s,j,f);for(var u=0;u<q.length;u+=1)q[u].m(s,f);m(s,M,f),P(_,s,f),B=!0,G||(U=D(Ot,"resize",t[7],{passive:!0}),G=!0)},p:function(t,n){var e=E(n,1)[0];t[0]?H?(H.p(t,e),1&e&&z(H,1)):((H=Xt(t)).c(),z(H,1),H.m(R.parentNode,R)):H&&(L(),S(H,1,1,(function(){H=null})),C());var r={};if(4194304&e&&(r.$$scope={dirty:e,ctx:t}),V.$set(r),78&e){var o;for(W=t[3],o=0;o<W.length;o+=1){var c=Kt(t,W,o);q[o]?(q[o].p(c,e),z(q[o],1)):(q[o]=an(c),q[o].c(),z(q[o],1),q[o].m(M.parentNode,M))}for(L(),o=W.length;o<q.length;o+=1)F(o);C()}},i:function(t){if(!B){z(H),z(k.$$.fragment,t),z(V.$$.fragment,t);for(var n=0;n<W.length;n+=1)z(q[n]);z(_.$$.fragment,t),B=!0}},o:function(t){S(H),S(k.$$.fragment,t),S(V.$$.fragment,t),q=q.filter(Boolean);for(var n=0;n<q.length;n+=1)S(q[n]);S(_.$$.fragment,t),B=!1},d:function(t){h(n),h(e),h(r),h(o),h(c),h(i),h(a),h(l),h(p),h(v),h($),h(w),t&&h(b),H&&H.d(t),t&&h(R),T(k,t),t&&h(I),T(V,t),t&&h(j),x(q,t),t&&h(M),T(_,t),G=!1,U()}}}function fn(t,n){return ln.apply(this,arguments)}function ln(){return(ln=O(F.mark((function t(n,e){var r,o;return F.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("https://dapp-store.elastos.org/apps/list");case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",{dapps:o});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function un(t,n,e){var r=n.dapps,o=["new","popular","finance","tools","communication","social","productivity","shopping","lifestyle","games","casino","music","entertainment","travel","health","techdemo"],c=null,i={},a={},s=3;o.forEach((function(t){e(1,i[t]=[],i)}));var f=[l("org.elastos.trinity.dapp.dappstore","#f90000"),l("org.elastos.trinity.dapp.wallet","#ff5700"),l("org.elastos.trinity.dapp.did","#0382ff"),l("org.elastos.trinity.dapp.friends","#0212fd"),l("org.elastos.trinity.dapp.dposvoting","#9b78e6"),l("org.elastos.trinity.dapp.redpacket","#e80606"),l("tech.tuum.academy","#c941b2"),l("com.goplaychat.playchat","#790000"),l("org.handyappslab.elanote","#001333")];function l(t,n){var e={};return(e=r.filter((function(n){return n.packageName===t}))[0]).title=e.appName,e.color=n,e.logo="https://dapp-store.elastos.org/apps/".concat(e.packageName,"/icon"),e}function u(t){e(0,c=t)}function p(){return h.apply(this,arguments)}function h(){return(h=O(F.mark((function t(){var n,r;return F.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=n<900?80:104,s=Math.min(Math.max(Math.floor((n-48)/r),3),9),o.forEach((function(t){e(2,a[t]=[],a);var n=s-i[t].length%s;if(n<s)for(var r=0;r<n;r++)a[t].push(!0)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}b(O(F.mark((function t(){return F.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.forEach((function(t){Q.indexOf(t.packageName)<0&&(t.description=t.appDescription||t.appShortDescription,i[t.category].push(t))})),p();case 2:case"end":return t.stop()}}),t)}))));return t.$set=function(t){"dapps"in t&&e(8,r=t.dapps)},[c,i,a,o,f,function(){e(0,c=null)},u,p,r,function(t,n){u(t)}]}var pn=function(n){t(s,a);var e=Wt(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,un,sn,c,{dapps:8}),n}return s}();export default pn;export{fn as preload};
