import{_ as t,a as n,b as e,c as o,i as r,s as a,d as c,S as i,e as s,f as l,t as f,g as u,h as p,j as h,k as d,l as v,m as g,n as m,o as $,p as y,q as w,r as E,u as D,v as x,w as b,x as k,y as I,z as V,A as z,B as j,C as A,D as M,E as N,F as T,G as S,H as L,I as C,J as P,K as _,L as B,M as G,N as U,O as H,P as W,Q as q,R as O,T as R,U as F,V as J,W as K,X as Q}from"./client.1dca9bca.js";var X=["anders.contentcommons"];function Y(t){var n,e,o,r,a,c;return{c:function(){n=s("div"),e=s("div"),o=s("img"),r=l(),a=s("div"),c=f("These Dapps/websites are maintained by third-party authors and are not affiliated with Elastos unless explicitly stated. Elastos is not liable for any third-party Dapps."),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var i=p(n);e=u(i,"DIV",{class:!0});var s=p(e);o=u(s,"IMG",{alt:!0,src:!0,class:!0}),s.forEach(h),r=d(i),a=u(i,"DIV",{class:!0});var l=p(a);c=v(l,"These Dapps/websites are maintained by third-party authors and are not affiliated with Elastos unless explicitly stated. Elastos is not liable for any third-party Dapps."),l.forEach(h),i.forEach(h),this.h()},h:function(){g(o,"alt","close"),o.src!=="shield-icon.png"&&g(o,"src","shield-icon.png"),g(o,"class","svelte-oikl1l"),g(e,"class","icon svelte-oikl1l"),g(a,"class","description svelte-oikl1l"),g(n,"class","disclaimer svelte-oikl1l")},m:function(t,i){m(t,n,i),$(n,e),$(e,o),$(n,r),$(n,a),$(a,c)},p:y,i:y,o:y,d:function(t){t&&h(n)}}}var Z=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,null,Y,a,{}),i}return t(l,i),l}();function tt(t,n,e){var o=t.slice();return o[13]=n[e],o[15]=e,o}function nt(t,n,e){var o=t.slice();return o[13]=n[e],o}function et(t){var n;return{c:function(){n=s("a"),this.h()},l:function(t){n=u(t,"A",{class:!0,href:!0,target:!0,rel:!0,style:!0}),p(n).forEach(h),this.h()},h:function(){g(n,"class","item svelte-116js88"),g(n,"href",t[13].url),g(n,"target","_blank"),g(n,"rel","noopener"),g(n,"style","background-image: url(".concat(t[13].imageUrl,"); background-color: ").concat(t[13].color,";"))},m:function(t,e){m(t,n,e)},p:y,d:function(t){t&&h(n)}}}function ot(t){var n,e;function o(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t)[12].apply(n,[t[15]].concat(o))}return{c:function(){n=s("div"),this.h()},l:function(t){n=u(t,"DIV",{class:!0}),p(n).forEach(h),this.h()},h:function(){g(n,"class","dot svelte-116js88"),w(n,"selected",t[1]===t[15])},m:function(t,r){m(t,n,r),e=E(n,"click",o)},p:function(e,o){t=e,2&o&&w(n,"selected",t[1]===t[15])},d:function(t){t&&h(n),e()}}}function rt(t){for(var n,e,o,r,a=t[2],c=[],i=0;i<a.length;i+=1)c[i]=et(nt(t,a,i));for(var f=t[2],v=[],w=0;w<f.length;w+=1)v[w]=ot(tt(t,f,w));return{c:function(){n=s("div"),e=s("div");for(var t=0;t<c.length;t+=1)c[t].c();o=l(),r=s("div");for(var a=0;a<v.length;a+=1)v[a].c();this.h()},l:function(t){n=u(t,"DIV",{class:!0});var a=p(n);e=u(a,"DIV",{class:!0});for(var i=p(e),s=0;s<c.length;s+=1)c[s].l(i);i.forEach(h),o=d(a),r=u(a,"DIV",{class:!0});for(var l=p(r),f=0;f<v.length;f+=1)v[f].l(l);l.forEach(h),a.forEach(h),this.h()},h:function(){g(e,"class","slider svelte-116js88"),g(r,"class","dots svelte-116js88"),g(n,"class","promo-carousel svelte-116js88")},m:function(a,i){m(a,n,i),$(n,e);for(var s=0;s<c.length;s+=1)c[s].m(e,null);t[11](e),$(n,o),$(n,r);for(var l=0;l<v.length;l+=1)v[l].m(r,null)},p:function(t,n){var o=D(n,1)[0];if(4&o){var i;for(a=t[2],i=0;i<a.length;i+=1){var s=nt(t,a,i);c[i]?c[i].p(s,o):(c[i]=et(s),c[i].c(),c[i].m(e,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=a.length}if(10&o){var l;for(f=t[2],l=0;l<f.length;l+=1){var u=tt(t,f,l);v[l]?v[l].p(u,o):(v[l]=ot(u),v[l].c(),v[l].m(r,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=f.length}},i:y,o:y,d:function(e){e&&h(n),x(c,e),t[11](null),x(v,e)}}}var at=17;function ct(t,n,e){var o=null,r=0,a=[{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/greenpass.jpg",url:"https://mygreenpass.life/",name:"GreenPass"},{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/hyper.jpg",url:"https://www.hyper.im",name:"Hyper"},{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/academy.jpg",url:"https://elastos.academy/",name:"Elastos Academy"},{color:"linear-gradient(to right, #ece9e6, #cdefff);",imageUrl:"promo_images/cr.jpg",url:"https://www.cyberrepublic.org/",name:"Cyber Republic"}],c=0,i=null,s=0,l=0;function f(t){e(1,c=t),o.scroll({top:0,left:s*c,behavior:"smooth"})}function u(){s=l+at/2,i=setInterval(function(){c<a.length-1?(e(1,c++,c),o.scroll({top:0,left:o.children[c].offsetLeft-at-4,behavior:"smooth"})):(e(1,c=0),o.scroll({top:0,left:0,behavior:"smooth"}))},4200)}function p(t){clearInterval(i);var n=Math.floor((o.scrollLeft+l/2)/l);e(1,c=n),t?u():setTimeout(function(){p(!0),o.scroll({top:0,left:o.children[c].offsetLeft-at-4,behavior:"smooth"})},120)}function h(){r=.635135*(o.getBoundingClientRect().width-2*at);var t=.141*o.getBoundingClientRect().width;e(0,o.style.height=window.innerWidth>900?"".concat(t,"px"):"".concat(r,"px"),o),l=window.innerWidth>900?t:1.57446*r}b(function(){h(),u(),o.addEventListener("touchend",function(){p(!1)}),o.addEventListener("mousewheel",function(t){t.preventDefault()},{passive:!0}),o.addEventListener("touchstart",function(){clearInterval(i)},{passive:!0}),window.addEventListener("resize",function(){h()})});return[o,c,a,f,r,i,s,l,u,p,h,function(t){k[t?"unshift":"push"](function(){e(0,o=t)})},function(t){f(t)}]}var it=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,ct,rt,a,{}),i}return t(l,i),l}();function st(t){var n,e,o,r,a,c=t[4].default,i=I(c,t,t[3],null);return{c:function(){n=s("div"),e=s("div"),o=f(t[0]),r=l(),i&&i.c(),this.h()},l:function(a){n=u(a,"DIV",{class:!0});var c=p(n);e=u(c,"DIV",{class:!0});var s=p(e);o=v(s,t[0]),s.forEach(h),r=d(c),i&&i.l(c),c.forEach(h),this.h()},h:function(){g(e,"class","title svelte-3zak0e"),g(n,"class","titled-section svelte-3zak0e"),w(n,"noborder",t[1]),w(n,"nopadding",t[2])},m:function(t,c){m(t,n,c),$(n,e),$(e,o),$(n,r),i&&i.m(n,null),a=!0},p:function(t,e){var r=D(e,1)[0];(!a||1&r)&&V(o,t[0]),i&&i.p&&8&r&&i.p(z(c,t,t[3],null),j(c,t[3],r,null)),2&r&&w(n,"noborder",t[1]),4&r&&w(n,"nopadding",t[2])},i:function(t){a||(A(i,t),a=!0)},o:function(t){M(i,t),a=!1},d:function(t){t&&h(n),i&&i.d(t)}}}function lt(t,n,e){var o=n.title,r=n.noborder,a=void 0!==r&&r,c=n.nopadding,i=void 0!==c&&c,s=n.$$slots,l=void 0===s?{}:s,f=n.$$scope;return t.$set=function(t){"title"in t&&e(0,o=t.title),"noborder"in t&&e(1,a=t.noborder),"nopadding"in t&&e(2,i=t.nopadding),"$$scope"in t&&e(3,f=t.$$scope)},[o,a,i,f,l]}var ft=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,lt,st,a,{title:0,noborder:1,nopadding:2}),i}return t(l,i),l}();function ut(t){var n,e,o,r=t[1].default,a=I(r,t,t[0],null);return{c:function(){n=s("div"),e=s("div"),a&&a.c(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var o=p(n);e=u(o,"DIV",{class:!0});var r=p(e);a&&a.l(r),r.forEach(h),o.forEach(h),this.h()},h:function(){g(e,"class","slider svelte-1ynvfmo"),g(n,"class","horizontal-slider svelte-1ynvfmo")},m:function(t,r){m(t,n,r),$(n,e),a&&a.m(e,null),o=!0},p:function(t,n){var e=D(n,1)[0];a&&a.p&&1&e&&a.p(z(r,t,t[0],null),j(r,t[0],e,null))},i:function(t){o||(A(a,t),o=!0)},o:function(t){M(a,t),o=!1},d:function(t){t&&h(n),a&&a.d(t)}}}function pt(t,n,e){var o=n.$$slots,r=void 0===o?{}:o,a=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(0,a=t.$$scope)},[a,r]}var ht=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,pt,ut,a,{}),i}return t(l,i),l}();function dt(t){var n,e;return{c:function(){n=s("img"),this.h()},l:function(t){n=u(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h:function(){g(n,"alt",t[1]),n.src!==(e="".concat(t[0]))&&g(n,"src",e),g(n,"class","svelte-64wl3e")},m:function(t,e){m(t,n,e)},p:function(t,o){2&o&&g(n,"alt",t[1]),1&o&&n.src!==(e="".concat(t[0]))&&g(n,"src",e)},d:function(t){t&&h(n)}}}function vt(t){var n,e,o,r,a,c,i,f,v,w=null!==t[0]&&dt(t);return{c:function(){n=s("div"),e=s("div"),o=l(),r=s("div"),w&&w.c(),a=l(),c=N("svg"),i=N("defs"),f=N("clipPath"),v=N("path"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=p(n);e=u(s,"DIV",{class:!0}),p(e).forEach(h),o=d(s),r=u(s,"DIV",{class:!0});var l=p(r);w&&w.l(l),a=d(l),c=u(l,"svg",{width:!0,height:!0,xmlns:!0},1);var g=p(c);i=u(g,"defs",{},1);var m=p(i);f=u(m,"clipPath",{id:!0},1);var $=p(f);v=u($,"path",{d:!0},1),p(v).forEach(h),$.forEach(h),m.forEach(h),g.forEach(h),l.forEach(h),s.forEach(h),this.h()},h:function(){g(e,"class","faux-border svelte-64wl3e"),g(v,"d","M33.2,0C20.1,0,11.7,1.6,6.7,6.7c-5,5-6.7,13.4-6.7,26.6s1.6,21.5,6.7,26.6c5,5,13.4,6.7,26.6,6.7s21.5-1.6,26.6-6.7 c5-5,6.7-13.4,6.7-26.6s-1.6-21.5-6.7-26.6C54.8,1.6,46.4,0,33.2,0z"),g(f,"id","squircle-clip"),g(c,"width","72"),g(c,"height","72"),g(c,"xmlns","http://www.w3.org/2000/svg"),g(r,"class","squircle-cut svelte-64wl3e"),g(n,"class","icon svelte-64wl3e")},m:function(t,s){m(t,n,s),$(n,e),$(n,o),$(n,r),w&&w.m(r,null),$(r,a),$(r,c),$(c,i),$(i,f),$(f,v)},p:function(t,n){var e=D(n,1)[0];null!==t[0]?w?w.p(t,e):((w=dt(t)).c(),w.m(r,a)):w&&(w.d(1),w=null)},i:y,o:y,d:function(t){t&&h(n),w&&w.d()}}}function gt(t,n,e){var o=n.iconSrc,r=n.alt;return t.$set=function(t){"iconSrc"in t&&e(0,o=t.iconSrc),"alt"in t&&e(1,r=t.alt)},[o,r]}var mt=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,gt,vt,a,{iconSrc:0,alt:1}),i}return t(l,i),l}();function $t(t){var n,e,o,r,a,c,i,y,w,E=new mt({props:{alt:"".concat(t[0]," logo"),iconSrc:t[2]}}),D=t[4]&&yt();return{c:function(){T(E.$$.fragment),n=l(),e=s("div"),o=f(t[0]),r=l(),a=s("div"),c=f(t[1]),i=l(),D&&D.c(),y=S(),this.h()},l:function(s){L(E.$$.fragment,s),n=d(s),e=u(s,"DIV",{class:!0});var l=p(e);o=v(l,t[0]),l.forEach(h),r=d(s),a=u(s,"DIV",{class:!0});var f=p(a);c=v(f,t[1]),f.forEach(h),i=d(s),D&&D.l(s),y=S(),this.h()},h:function(){g(e,"class","title svelte-1n67jjj"),g(a,"class","subtitle svelte-1n67jjj")},m:function(t,s){C(E,t,s),m(t,n,s),m(t,e,s),$(e,o),m(t,r,s),m(t,a,s),$(a,c),m(t,i,s),D&&D.m(t,s),m(t,y,s),w=!0},p:function(t,n){var e={};1&n&&(e.alt="".concat(t[0]," logo")),4&n&&(e.iconSrc=t[2]),E.$set(e),(!w||1&n)&&V(o,t[0]),(!w||2&n)&&V(c,t[1]),t[4]?D||((D=yt()).c(),D.m(y.parentNode,y)):D&&(D.d(1),D=null)},i:function(t){w||(A(E.$$.fragment,t),w=!0)},o:function(t){M(E.$$.fragment,t),w=!1},d:function(t){P(E,t),t&&h(n),t&&h(e),t&&h(r),t&&h(a),t&&h(i),D&&D.d(t),t&&h(y)}}}function yt(t){var n,e;return{c:function(){n=s("div"),e=s("img"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var o=p(n);e=u(o,"IMG",{alt:!0,src:!0,class:!0}),o.forEach(h),this.h()},h:function(){g(e,"alt","sponsored-star"),e.src!=="star-icon.svg"&&g(e,"src","star-icon.svg"),g(e,"class","svelte-1n67jjj"),g(n,"class","sponsored-star svelte-1n67jjj")},m:function(t,o){m(t,n,o),$(n,e)},d:function(t){t&&h(n)}}}function wt(t){var n,e,o,r=!t[5]&&$t(t);return{c:function(){n=s("div"),r&&r.c(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var e=p(n);r&&r.l(e),e.forEach(h),this.h()},h:function(){g(n,"class","dapp svelte-1n67jjj"),w(n,"whitetext",t[3]),w(n,"sponsored",t[4]),w(n,"ghost",t[5])},m:function(a,c){m(a,n,c),r&&r.m(n,null),e=!0,o=E(n,"click",t[7])},p:function(t,e){var o=D(e,1)[0];t[5]?r&&(_(),M(r,1,1,function(){r=null}),B()):r?(r.p(t,o),A(r,1)):((r=$t(t)).c(),A(r,1),r.m(n,null)),8&o&&w(n,"whitetext",t[3]),16&o&&w(n,"sponsored",t[4]),32&o&&w(n,"ghost",t[5])},i:function(t){e||(A(r),e=!0)},o:function(t){M(r),e=!1},d:function(t){t&&h(n),r&&r.d(),o()}}}function Et(t,n,e){var o=n.title,r=void 0===o?"":o,a=n.subtitle,c=void 0===a?"":a,i=n.iconSrc,s=void 0===i?"":i,l=n.whitetext,f=void 0!==l&&l,u=n.sponsored,p=void 0!==u&&u,h=n.ghost,d=void 0!==h&&h,v=n.id,g=void 0===v?"0":v;return t.$set=function(t){"title"in t&&e(0,r=t.title),"subtitle"in t&&e(1,c=t.subtitle),"iconSrc"in t&&e(2,s=t.iconSrc),"whitetext"in t&&e(3,f=t.whitetext),"sponsored"in t&&e(4,p=t.sponsored),"ghost"in t&&e(5,d=t.ghost),"id"in t&&e(6,g=t.id)},[r,c,s,f,p,d,g,function(n){G(t,n)}]}var Dt=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,Et,wt,a,{title:0,subtitle:1,iconSrc:2,whitetext:3,sponsored:4,ghost:5,id:6}),i}return t(l,i),l}();function xt(t){var n,e,o,r,a,c,i,f,v=new Dt({props:{whitetext:!0,title:t[0].title,subtitle:"",iconSrc:"".concat(t[0].logo),sponsored:1===t[0].featured}});return v.$on("click",t[3]),{c:function(){n=s("div"),e=s("div"),o=N("svg"),r=N("path"),c=l(),i=s("div"),T(v.$$.fragment),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var a=p(n);e=u(a,"DIV",{class:!0});var s=p(e);o=u(s,"svg",{width:!0,height:!0,xmlns:!0,class:!0},1);var l=p(o);r=u(l,"path",{stroke:!0,fill:!0,d:!0},1),p(r).forEach(h),l.forEach(h),c=d(s),i=u(s,"DIV",{class:!0});var f=p(i);L(v.$$.fragment,f),f.forEach(h),s.forEach(h),a.forEach(h),this.h()},h:function(){g(r,"stroke","none"),g(r,"fill",a=t[0].color),g(r,"d","M68.4,115H19.6C8.8,115,0,106.2,0,95.4V19.6C0,5.8,14-3.7,26.9,1.4l48.8,19.5c7.5,3,12.4,10.2,12.3,18.2v56.3 C88,106.2,79.2,115,68.4,115z"),g(o,"width","88"),g(o,"height","115"),g(o,"xmlns","http://www.w3.org/2000/svg"),g(o,"class","svelte-ai1hki"),g(i,"class","dapp-positioner svelte-ai1hki"),g(e,"class","shadow-buffer svelte-ai1hki"),g(n,"class","featured-dapp svelte-ai1hki")},m:function(a,s){m(a,n,s),$(n,e),$(e,o),$(o,r),$(e,c),$(e,i),C(v,i,null),t[4](n),f=!0},p:function(t,n){var e=D(n,1)[0];(!f||1&e&&a!==(a=t[0].color))&&g(r,"fill",a);var o={};1&e&&(o.title=t[0].title),1&e&&(o.iconSrc="".concat(t[0].logo)),1&e&&(o.sponsored=1===t[0].featured),v.$set(o)},i:function(t){f||(A(v.$$.fragment,t),f=!0)},o:function(t){M(v.$$.fragment,t),f=!1},d:function(e){e&&h(n),P(v),t[4](null)}}}function bt(t,n,e){var o,r=n.dapp,a=n.onDappPicked;b(function(){r.color&&(o.style.setProperty("--featured-color",r.color),o.style.setProperty("--featured-color-lighter","".concat(r.color,"b3")),o.style.setProperty("--featured-color-shadow","".concat(r.color,"4d")))});return t.$set=function(t){"dapp"in t&&e(0,r=t.dapp),"onDappPicked"in t&&e(1,a=t.onDappPicked)},[r,a,o,function(){a(r)},function(t){k[t?"unshift":"push"](function(){e(2,o=t)})}]}var kt=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,bt,xt,a,{dapp:0,onDappPicked:1}),i}return t(l,i),l}();function It(t){var n,e,o=t[1].default,r=I(o,t,t[0],null);return{c:function(){n=s("div"),r&&r.c(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var e=p(n);r&&r.l(e),e.forEach(h),this.h()},h:function(){g(n,"class","dapps-array svelte-3mtlwy")},m:function(t,o){m(t,n,o),r&&r.m(n,null),e=!0},p:function(t,n){var e=D(n,1)[0];r&&r.p&&1&e&&r.p(z(o,t,t[0],null),j(o,t[0],e,null))},i:function(t){e||(A(r,t),e=!0)},o:function(t){M(r,t),e=!1},d:function(t){t&&h(n),r&&r.d(t)}}}function Vt(t,n,e){var o=n.$$slots,r=void 0===o?{}:o,a=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(0,a=t.$$scope)},[a,r]}var zt=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,Vt,It,a,{}),i}return t(l,i),l}();function jt(t){var n=t-1;return n*n*n+1}function At(t){return--t*t*t*t*t+1}function Mt(t,n){var e=n.delay,o=void 0===e?0:e,r=n.duration,a=void 0===r?400:r,c=n.easing,i=void 0===c?U:c,s=+getComputedStyle(t).opacity;return{delay:o,duration:a,easing:i,css:function(t){return"opacity: ".concat(t*s)}}}function Nt(t,n){var e=n.delay,o=void 0===e?0:e,r=n.duration,a=void 0===r?400:r,c=n.easing,i=void 0===c?jt:c,s=n.x,l=void 0===s?0:s,f=n.y,u=void 0===f?0:f,p=n.opacity,h=void 0===p?0:p,d=getComputedStyle(t),v=+d.opacity,g="none"===d.transform?"":d.transform,m=v*(1-h);return{delay:o,duration:a,easing:i,css:function(t,n){return"\n\t\t\ttransform: ".concat(g," translate(").concat((1-t)*l,"px, ").concat((1-t)*u,"px);\n\t\t\topacity: ").concat(v-m*n)}}}function Tt(t){var n,e;return{c:function(){n=s("div"),e=f("sponsored"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var o=p(n);e=v(o,"sponsored"),o.forEach(h),this.h()},h:function(){g(n,"class","sponsored svelte-yz3cxi")},m:function(t,o){m(t,n,o),$(n,e)},d:function(t){t&&h(n)}}}function St(t){var n,e,o,r,a,c,i,y,w,x,b,k,I,z,j,N,S,_,B,G,U,F,J,K,Q,X,Y,Z,tt,nt,et,ot,rt=t[0].category+"",at=t[0].appName+"",ct=t[0].description.replace("<script>","").replace("<\/script>","").replace("<p>","").replace("</p>","")+"",it=new mt({props:{alt:t[0].name,iconSrc:"https://dapp-store.elastos.org/apps/".concat(t[0].packageName,"/icon")}}),st=1===t[0].featured&&Tt();return{c:function(){n=s("div"),e=s("div"),o=s("div"),r=s("div"),T(it.$$.fragment),a=l(),c=s("div"),i=s("div"),y=f(rt),w=l(),x=s("div"),b=f(at),k=l(),st&&st.c(),I=l(),z=s("div"),j=s("div"),N=f("Description"),S=l(),_=s("div"),B=l(),G=s("a"),U=f("GO"),J=l(),K=s("div"),Q=s("img"),Z=l(),tt=s("div"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=p(n);e=u(s,"DIV",{class:!0});var l=p(e);o=u(l,"DIV",{class:!0});var f=p(o);r=u(f,"DIV",{class:!0});var g=p(r);L(it.$$.fragment,g),g.forEach(h),a=d(f),c=u(f,"DIV",{class:!0});var m=p(c);i=u(m,"DIV",{class:!0});var $=p(i);y=v($,rt),$.forEach(h),w=d(m),x=u(m,"DIV",{class:!0});var E=p(x);b=v(E,at),E.forEach(h),k=d(m),st&&st.l(m),m.forEach(h),f.forEach(h),I=d(l),z=u(l,"DIV",{class:!0});var D=p(z);j=u(D,"DIV",{class:!0});var V=p(j);N=v(V,"Description"),V.forEach(h),S=d(D),_=u(D,"DIV",{class:!0}),p(_).forEach(h),D.forEach(h),B=d(l),G=u(l,"A",{class:!0,href:!0,target:!0,rel:!0});var A=p(G);U=v(A,"GO"),A.forEach(h),J=d(l),K=u(l,"DIV",{class:!0});var M=p(K);Q=u(M,"IMG",{alt:!0,src:!0}),M.forEach(h),l.forEach(h),Z=d(s),tt=u(s,"DIV",{class:!0}),p(tt).forEach(h),s.forEach(h),this.h()},h:function(){g(r,"class","title-bar--left svelte-yz3cxi"),g(i,"class","category svelte-yz3cxi"),g(x,"class","title svelte-yz3cxi"),g(c,"class","title-bar--right svelte-yz3cxi"),g(o,"class","title-bar svelte-yz3cxi"),g(j,"class","label svelte-yz3cxi"),g(_,"class","content svelte-yz3cxi"),g(z,"class","description svelte-yz3cxi"),g(G,"class","button svelte-yz3cxi"),g(G,"href",F="https://scheme.elastos.org/app?id=".concat(t[0].packageName)),g(G,"target","_blank"),g(G,"rel","noopener"),g(Q,"alt","close"),Q.src!=="close-icon.svg"&&g(Q,"src","close-icon.svg"),g(K,"class","close svelte-yz3cxi"),g(e,"class","dapp-popup-container svelte-yz3cxi"),g(tt,"class","backdrop svelte-yz3cxi"),g(n,"class","dapp-popup svelte-yz3cxi")},m:function(s,l){m(s,n,l),$(n,e),$(e,o),$(o,r),C(it,r,null),$(o,a),$(o,c),$(c,i),$(i,y),$(c,w),$(c,x),$(x,b),$(c,k),st&&st.m(c,null),$(e,I),$(e,z),$(z,j),$(j,N),$(z,S),$(z,_),_.innerHTML=ct,$(e,B),$(e,G),$(G,U),$(e,J),$(e,K),$(K,Q),t[6](e),$(n,Z),$(n,tt),t[7](tt),et=!0,ot=[E(K,"click",t[5]),E(tt,"click",t[8])]},p:function(t,n){var e=D(n,1)[0],o={};1&e&&(o.alt=t[0].name),1&e&&(o.iconSrc="https://dapp-store.elastos.org/apps/".concat(t[0].packageName,"/icon")),it.$set(o),(!et||1&e)&&rt!==(rt=t[0].category+"")&&V(y,rt),(!et||1&e)&&at!==(at=t[0].appName+"")&&V(b,at),1===t[0].featured?st||((st=Tt()).c(),st.m(c,null)):st&&(st.d(1),st=null),(!et||1&e)&&ct!==(ct=t[0].description.replace("<script>","").replace("<\/script>","").replace("<p>","").replace("</p>","")+"")&&(_.innerHTML=ct),(!et||1&e&&F!==(F="https://scheme.elastos.org/app?id=".concat(t[0].packageName)))&&g(G,"href",F)},i:function(t){et||(A(it.$$.fragment,t),H(function(){Y&&Y.end(1),X||(X=W(e,Nt,{duration:300,x:0,y:500,opacity:.5,easing:At})),X.start()}),H(function(){nt||(nt=q(tt,Mt,{duration:170,easing:At},!0)),nt.run(1)}),et=!0)},o:function(t){M(it.$$.fragment,t),X&&X.invalidate(),Y=O(e,Mt,{duration:170}),nt||(nt=q(tt,Mt,{duration:170,easing:At},!1)),nt.run(0),et=!1},d:function(e){e&&h(n),P(it),st&&st.d(),t[6](null),e&&Y&&Y.end(),t[7](null),e&&nt&&nt.end(),R(ot)}}}function Lt(t,n,e){var o,r,a=n.dapp,c=n.close;b(function(){var t=Math.min(o.offsetHeight-304,300);t>0&&e(2,o.style.top="calc(50vh - ".concat(170+t/2,"px"),o)});return t.$set=function(t){"dapp"in t&&e(0,a=t.dapp),"close"in t&&e(1,c=t.close)},[a,c,o,r,void 0,function(){c()},function(t){k[t?"unshift":"push"](function(){e(2,o=t)})},function(t){k[t?"unshift":"push"](function(){e(3,r=t)})},function(){c()}]}var Ct=function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,Lt,St,a,{dapp:0,close:1}),i}return t(l,i),l}(),Pt=Q.document,_t=Q.window;function Bt(t,n,e){var o=t.slice();return o[15]=n[e],o}function Gt(t,n,e){var o=t.slice();return o[15]=n[e],o}function Ut(t,n,e){var o=t.slice();return o[12]=n[e],o}function Ht(t,n,e){var o=t.slice();return o[15]=n[e],o}function Wt(t){var n,e=new Ct({props:{dapp:t[0],close:t[5]}});return{c:function(){T(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,o){C(e,t,o),n=!0},p:function(t,n){var o={};1&n&&(o.dapp=t[0]),e.$set(o)},i:function(t){n||(A(e.$$.fragment,t),n=!0)},o:function(t){M(e.$$.fragment,t),n=!1},d:function(t){P(e,t)}}}function qt(t){var n,e=new kt({props:{onDappPicked:t[6],dapp:t[15]}});return{c:function(){T(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,o){C(e,t,o),n=!0},p:y,i:function(t){n||(A(e.$$.fragment,t),n=!0)},o:function(t){M(e.$$.fragment,t),n=!1},d:function(t){P(e,t)}}}function Ot(t){for(var n,e,o=t[4],r=[],a=0;a<o.length;a+=1)r[a]=qt(Ht(t,o,a));var c=function(t){return M(r[t],1,1,function(){r[t]=null})};return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();n=S()},l:function(t){for(var e=0;e<r.length;e+=1)r[e].l(t);n=S()},m:function(t,o){for(var a=0;a<r.length;a+=1)r[a].m(t,o);m(t,n,o),e=!0},p:function(t,e){if(80&e){var a;for(o=t[4],a=0;a<o.length;a+=1){var i=Ht(t,o,a);r[a]?(r[a].p(i,e),A(r[a],1)):(r[a]=qt(i),r[a].c(),A(r[a],1),r[a].m(n.parentNode,n))}for(_(),a=o.length;a<r.length;a+=1)c(a);B()}},i:function(t){if(!e){for(var n=0;n<o.length;n+=1)A(r[n]);e=!0}},o:function(t){r=r.filter(Boolean);for(var n=0;n<r.length;n+=1)M(r[n]);e=!1},d:function(t){x(r,t),t&&h(n)}}}function Rt(t){var n,e=new ht({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}});return{c:function(){T(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,o){C(e,t,o),n=!0},p:function(t,n){var o={};4194304&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i:function(t){n||(A(e.$$.fragment,t),n=!0)},o:function(t){M(e.$$.fragment,t),n=!1},d:function(t){P(e,t)}}}function Ft(t){var n,e=new ft({props:{title:t[12].charAt(0).toUpperCase()+t[12].slice(1),$$slots:{default:[Xt]},$$scope:{ctx:t}}});return{c:function(){T(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,o){C(e,t,o),n=!0},p:function(t,n){var o={};4194310&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i:function(t){n||(A(e.$$.fragment,t),n=!0)},o:function(t){M(e.$$.fragment,t),n=!1},d:function(t){P(e,t)}}}function Jt(t){var n;var e=new Dt({props:{title:t[15].appName,iconSrc:"https://dapp-store.elastos.org/apps/".concat(t[15].packageName,"/icon")}});return e.$on("click",function(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t)[11].apply(n,[t[15]].concat(o))}),{c:function(){T(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,o){C(e,t,o),n=!0},p:function(n,o){t=n;var r={};2&o&&(r.title=t[15].appName),2&o&&(r.iconSrc="https://dapp-store.elastos.org/apps/".concat(t[15].packageName,"/icon")),e.$set(r)},i:function(t){n||(A(e.$$.fragment,t),n=!0)},o:function(t){M(e.$$.fragment,t),n=!1},d:function(t){P(e,t)}}}function Kt(t){var n,e=new Dt({props:{ghost:!0}});return{c:function(){T(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,o){C(e,t,o),n=!0},p:y,i:function(t){n||(A(e.$$.fragment,t),n=!0)},o:function(t){M(e.$$.fragment,t),n=!1},d:function(t){P(e,t)}}}function Qt(t){for(var n,e,o,r=t[1][t[12]],a=[],c=0;c<r.length;c+=1)a[c]=Jt(Gt(t,r,c));for(var i=function(t){return M(a[t],1,1,function(){a[t]=null})},s=t[2][t[12]],f=[],u=0;u<s.length;u+=1)f[u]=Kt(Bt(t,s,u));var p=function(t){return M(f[t],1,1,function(){f[t]=null})};return{c:function(){for(var t=0;t<a.length;t+=1)a[t].c();n=l();for(var o=0;o<f.length;o+=1)f[o].c();e=S()},l:function(t){for(var o=0;o<a.length;o+=1)a[o].l(t);n=d(t);for(var r=0;r<f.length;r+=1)f[r].l(t);e=S()},m:function(t,r){for(var c=0;c<a.length;c+=1)a[c].m(t,r);m(t,n,r);for(var i=0;i<f.length;i+=1)f[i].m(t,r);m(t,e,r),o=!0},p:function(t,o){if(74&o){var c;for(r=t[1][t[12]],c=0;c<r.length;c+=1){var l=Gt(t,r,c);a[c]?(a[c].p(l,o),A(a[c],1)):(a[c]=Jt(l),a[c].c(),A(a[c],1),a[c].m(n.parentNode,n))}for(_(),c=r.length;c<a.length;c+=1)i(c);B()}if(4&o){var u;for(s=t[2][t[12]],u=0;u<s.length;u+=1){var h=Bt(t,s,u);f[u]?(f[u].p(h,o),A(f[u],1)):(f[u]=Kt(),f[u].c(),A(f[u],1),f[u].m(e.parentNode,e))}for(_(),u=s.length;u<f.length;u+=1)p(u);B()}},i:function(t){if(!o){for(var n=0;n<r.length;n+=1)A(a[n]);for(var e=0;e<s.length;e+=1)A(f[e]);o=!0}},o:function(t){a=a.filter(Boolean);for(var n=0;n<a.length;n+=1)M(a[n]);f=f.filter(Boolean);for(var e=0;e<f.length;e+=1)M(f[e]);o=!1},d:function(t){x(a,t),t&&h(n),x(f,t),t&&h(e)}}}function Xt(t){var n,e=new zt({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}});return{c:function(){T(e.$$.fragment)},l:function(t){L(e.$$.fragment,t)},m:function(t,o){C(e,t,o),n=!0},p:function(t,n){var o={};4194310&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i:function(t){n||(A(e.$$.fragment,t),n=!0)},o:function(t){M(e.$$.fragment,t),n=!1},d:function(t){P(e,t)}}}function Yt(t){var n,e,o=t[1][t[12]].length&&Ft(t);return{c:function(){o&&o.c(),n=S()},l:function(t){o&&o.l(t),n=S()},m:function(t,r){o&&o.m(t,r),m(t,n,r),e=!0},p:function(t,e){t[1][t[12]].length?o?(o.p(t,e),A(o,1)):((o=Ft(t)).c(),A(o,1),o.m(n.parentNode,n)):o&&(_(),M(o,1,1,function(){o=null}),B())},i:function(t){e||(A(o),e=!0)},o:function(t){M(o),e=!1},d:function(t){o&&o.d(t),t&&h(n)}}}function Zt(t){for(var n,e,o,r,a,c,i,f,p,v,y,w,b,k,I,V,z,j,N,S=t[0]&&Wt(t),G=new it({}),U=new ft({props:{title:"Featured DApps",noborder:!0,nopadding:!0,$$slots:{default:[Rt]},$$scope:{ctx:t}}}),H=t[3],W=[],q=0;q<H.length;q+=1)W[q]=Yt(Ut(t,H,q));var O=function(t){return M(W[t],1,1,function(){W[t]=null})},R=new Z({});return{c:function(){n=s("meta"),e=s("meta"),o=s("meta"),r=s("meta"),a=s("meta"),c=s("meta"),i=s("meta"),f=s("meta"),p=s("meta"),v=s("meta"),y=s("meta"),w=s("meta"),b=l(),S&&S.c(),k=l(),T(G.$$.fragment),I=l(),T(U.$$.fragment),V=l();for(var t=0;t<W.length;t+=1)W[t].c();z=l(),T(R.$$.fragment),this.h()},l:function(t){var s=K('[data-svelte="svelte-z40qti"]',Pt.head);n=u(s,"META",{name:!0,content:!0}),e=u(s,"META",{name:!0,content:!0}),o=u(s,"META",{property:!0,content:!0}),r=u(s,"META",{property:!0,content:!0}),a=u(s,"META",{property:!0,content:!0}),c=u(s,"META",{property:!0,content:!0}),i=u(s,"META",{property:!0,content:!0}),f=u(s,"META",{property:!0,content:!0}),p=u(s,"META",{property:!0,content:!0}),v=u(s,"META",{property:!0,content:!0}),y=u(s,"META",{property:!0,content:!0}),w=u(s,"META",{property:!0,content:!0}),s.forEach(h),b=d(t),S&&S.l(t),k=d(t),L(G.$$.fragment,t),I=d(t),L(U.$$.fragment,t),V=d(t);for(var l=0;l<W.length;l+=1)W[l].l(t);z=d(t),L(R.$$.fragment,t),this.h()},h:function(){Pt.title="Discover your next favorite decentralized app!",g(n,"name","title"),g(n,"content","Discover your next favorite decentralized app!"),g(e,"name","description"),g(e,"content","Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps"),g(o,"property","og:type"),g(o,"content","website"),g(r,"property","og:url"),g(r,"content","https://www.getdapp.co/"),g(a,"property","og:title"),g(a,"content","Discover your next favorite decentralized app!"),g(c,"property","og:description"),g(c,"content","Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps"),g(i,"property","og:image"),g(i,"content","https://www.getdapp.co/social_share.jpg"),g(f,"property","twitter:card"),g(f,"content","summary_large_image"),g(p,"property","twitter:url"),g(p,"content","https://www.getdapp.co//"),g(v,"property","twitter:title"),g(v,"content","Discover your next favorite decentralized app!"),g(y,"property","twitter:description"),g(y,"content","Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps"),g(w,"property","twitter:image"),g(w,"content","https://www.getdapp.co/social_share.jpg")},m:function(s,l){$(Pt.head,n),$(Pt.head,e),$(Pt.head,o),$(Pt.head,r),$(Pt.head,a),$(Pt.head,c),$(Pt.head,i),$(Pt.head,f),$(Pt.head,p),$(Pt.head,v),$(Pt.head,y),$(Pt.head,w),m(s,b,l),S&&S.m(s,l),m(s,k,l),C(G,s,l),m(s,I,l),C(U,s,l),m(s,V,l);for(var u=0;u<W.length;u+=1)W[u].m(s,l);m(s,z,l),C(R,s,l),j=!0,N=E(_t,"resize",t[7],{passive:!0})},p:function(t,n){var e=D(n,1)[0];t[0]?S?(S.p(t,e),A(S,1)):((S=Wt(t)).c(),A(S,1),S.m(k.parentNode,k)):S&&(_(),M(S,1,1,function(){S=null}),B());var o={};if(4194304&e&&(o.$$scope={dirty:e,ctx:t}),U.$set(o),78&e){var r;for(H=t[3],r=0;r<H.length;r+=1){var a=Ut(t,H,r);W[r]?(W[r].p(a,e),A(W[r],1)):(W[r]=Yt(a),W[r].c(),A(W[r],1),W[r].m(z.parentNode,z))}for(_(),r=H.length;r<W.length;r+=1)O(r);B()}},i:function(t){if(!j){A(S),A(G.$$.fragment,t),A(U.$$.fragment,t);for(var n=0;n<H.length;n+=1)A(W[n]);A(R.$$.fragment,t),j=!0}},o:function(t){M(S),M(G.$$.fragment,t),M(U.$$.fragment,t),W=W.filter(Boolean);for(var n=0;n<W.length;n+=1)M(W[n]);M(R.$$.fragment,t),j=!1},d:function(t){h(n),h(e),h(o),h(r),h(a),h(c),h(i),h(f),h(p),h(v),h(y),h(w),t&&h(b),S&&S.d(t),t&&h(k),P(G,t),t&&h(I),P(U,t),t&&h(V),x(W,t),t&&h(z),P(R,t),N()}}}function tn(t,n){return nn.apply(this,arguments)}function nn(){return(nn=F(J.mark(function t(n,e){var o,r;return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("https://dapp-store.elastos.org/apps/list");case 2:return o=t.sent,t.next=5,o.json();case 5:return r=t.sent,t.abrupt("return",{dapps:r});case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function en(t,n,e){var o=n.dapps,r=["new","popular","finance","tools","communication","social","productivity","business","entertainment","games","music","casino","travel","lifestyle","health"],a=null,c={},i={},s=3;r.forEach(function(t){e(1,c[t]=[],c)});var l=[f("org.elastos.trinity.dapp.dappstore","#f90000"),f("org.elastos.trinity.dapp.wallet","#ff5700"),f("org.elastos.trinity.dapp.did","#0382ff"),f("org.elastos.trinity.dapp.friends","#0212fd"),f("org.elastos.trinity.dapp.dposvoting","#9b78e6"),f("org.elastos.trinity.dapp.redpacket","#e80606"),f("tech.tuum.academy","#c941b2"),f("com.goplaychat.playchat","#790000"),f("org.handyappslab.elanote","#001333")];function f(t,n){var e={};return(e=o.filter(function(n){return n.packageName===t})[0]).title=e.appName,e.color=n,e.logo="https://dapp-store.elastos.org/apps/".concat(e.packageName,"/icon"),e}function u(t){e(0,a=t)}function p(){return h.apply(this,arguments)}function h(){return(h=F(J.mark(function t(){var n,o;return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=n<900?80:104,s=Math.min(Math.max(Math.floor((n-48)/o),3),9),r.forEach(function(t){e(2,i[t]=[],i);var n=s-c[t].length%s;if(n<s)for(var o=0;o<n;o++)i[t].push(!0)});case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}b(F(J.mark(function t(){return J.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.forEach(function(t){X.indexOf(t.packageName)<0&&(t.description=t.appDescription||t.appShortDescription,c[t.category].push(t))}),p();case 2:case"end":return t.stop()}},t)})));return t.$set=function(t){"dapps"in t&&e(8,o=t.dapps)},[a,c,i,r,l,function(){e(0,a=null)},u,p,o,s,f,function(t,n){u(t)}]}export default(function(s){function l(t){var i;return n(this,l),i=e(this,o(l).call(this)),r(c(i),t,en,Zt,a,{dapps:8}),i}return t(l,i),l}());export{tn as preload};
