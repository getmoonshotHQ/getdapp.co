import{_ as a,a as t,b as s,c as n,i as r,s as e,d as c,S as o,e as p,f as i,t as f,g as u,h as l,j as h,k as v,l as d,m,n as g,o as E,p as $,q as y,r as N,u as k,v as x,w as D,x as w,y as b,z as j,A as z,B as A,C as S,D as H,E as I,F as T}from"./client.397ce2cc.js";function B(a){var t,s,n,r,e,c,o,k,x,D,w,b,j=a[0].appName+"",z=(a[0].appShortDescription||a[0].appDescription)+"";return{c:function(){t=p("a"),s=p("img"),e=i(),c=p("div"),o=p("h3"),k=f(j),x=i(),D=p("h4"),w=f(z),this.h()},l:function(a){t=u(a,"A",{href:!0,target:!0,class:!0});var n=l(t);s=u(n,"IMG",{src:!0,alt:!0,class:!0}),e=h(n),c=u(n,"DIV",{class:!0});var r=l(c);o=u(r,"H3",{class:!0});var p=l(o);k=v(p,j),p.forEach(d),x=h(r),D=u(r,"H4",{class:!0});var i=l(D);w=v(i,z),i.forEach(d),r.forEach(d),n.forEach(d),this.h()},h:function(){s.src!==(n="https://dapp-store.elastos.org/apps/".concat(a[0].packageName,"/icon"))&&m(s,"src",n),m(s,"alt",r=a[0].appName),m(s,"class","svelte-my03ad"),m(o,"class","svelte-my03ad"),m(D,"class","svelte-my03ad"),m(c,"class","svelte-my03ad"),m(t,"href",b="https://scheme.elastos.org/app?id=".concat(a[0].packageName)),m(t,"target","_blank"),m(t,"class","svelte-my03ad")},m:function(a,n){g(a,t,n),E(t,s),E(t,e),E(t,c),E(c,o),E(o,k),E(c,x),E(c,D),E(D,w)},p:function(a,e){var c=$(e,1)[0];1&c&&s.src!==(n="https://dapp-store.elastos.org/apps/".concat(a[0].packageName,"/icon"))&&m(s,"src",n),1&c&&r!==(r=a[0].appName)&&m(s,"alt",r),1&c&&j!==(j=a[0].appName+"")&&y(k,j),1&c&&z!==(z=(a[0].appShortDescription||a[0].appDescription)+"")&&y(w,z),1&c&&b!==(b="https://scheme.elastos.org/app?id=".concat(a[0].packageName))&&m(t,"href",b)},i:N,o:N,d:function(a){a&&d(t)}}}function C(a,t,s){var n=t.dapp;return a.$set=function(a){"dapp"in a&&s(0,n=a.dapp)},[n]}var M=function(p){function i(a){var o;return t(this,i),o=s(this,n(i).call(this)),r(c(o),a,C,B,e,{dapp:0}),o}return a(i,o),i}();function _(a,t,s){var n=a.slice();return n[1]=t[s],n}function q(a){var t,s=new M({props:{dapp:a[1]}});return{c:function(){D(s.$$.fragment)},l:function(a){w(s.$$.fragment,a)},m:function(a,n){b(s,a,n),t=!0},p:function(a,t){var n={};1&t&&(n.dapp=a[1]),s.$set(n)},i:function(a){t||(j(s.$$.fragment,a),t=!0)},o:function(a){z(s.$$.fragment,a),t=!1},d:function(a){A(s,a)}}}function F(a){for(var t,s,n,r,e,c,o,y,N,k=a[0],x=[],D=0;D<k.length;D+=1)x[D]=q(_(a,k,D));var w=function(a){return z(x[a],1,1,function(){x[a]=null})};return{c:function(){t=i(),s=p("h2"),n=f("Top "),r=p("em"),e=f("d"),c=f("Apps"),o=i(),y=p("section");for(var a=0;a<x.length;a+=1)x[a].c();this.h()},l:function(a){S('[data-svelte="svelte-1jbp5ef"]',document.head).forEach(d),t=h(a),s=u(a,"H2",{class:!0});var p=l(s);n=v(p,"Top "),r=u(p,"EM",{});var i=l(r);e=v(i,"d"),i.forEach(d),c=v(p,"Apps"),p.forEach(d),o=h(a),y=u(a,"SECTION",{class:!0});for(var f=l(y),m=0;m<x.length;m+=1)x[m].l(f);f.forEach(d),this.h()},h:function(){document.title="Discover your next favorite decentralized app!",m(s,"class","svelte-ziw8ca"),m(y,"class","svelte-ziw8ca")},m:function(a,p){g(a,t,p),g(a,s,p),E(s,n),E(s,r),E(r,e),E(s,c),g(a,o,p),g(a,y,p);for(var i=0;i<x.length;i+=1)x[i].m(y,null);N=!0},p:function(a,t){var s=$(t,1)[0];if(1&s){var n;for(k=a[0],n=0;n<k.length;n+=1){var r=_(a,k,n);x[n]?(x[n].p(r,s),j(x[n],1)):(x[n]=q(r),x[n].c(),j(x[n],1),x[n].m(y,null))}for(T(),n=k.length;n<x.length;n+=1)w(n);H()}},i:function(a){if(!N){for(var t=0;t<k.length;t+=1)j(x[t]);N=!0}},o:function(a){x=x.filter(Boolean);for(var t=0;t<x.length;t+=1)z(x[t]);N=!1},d:function(a){a&&d(t),a&&d(s),a&&d(o),a&&d(y),I(x,a)}}}function G(a,t){return O.apply(this,arguments)}function O(){return(O=k(x.mark(function a(t,s){var n,r;return x.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.fetch("https://dapp-store.elastos.org/apps/list");case 2:return n=a.sent,a.next=5,n.json();case 5:return r=a.sent,a.abrupt("return",{dapps:r});case 7:case"end":return a.stop()}},a,this)}))).apply(this,arguments)}function V(a,t,s){var n=t.dapps;return a.$set=function(a){"dapps"in a&&s(0,n=a.dapps)},[n]}export default(function(p){function i(a){var o;return t(this,i),o=s(this,n(i).call(this)),r(c(o),a,V,F,e,{dapps:0}),o}return a(i,o),i}());export{G as preload};
