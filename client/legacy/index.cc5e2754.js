import{_ as a,a as t,b as s,c as n,i as r,s as e,d as c,S as o,e as p,f as i,t as f,g as u,h as l,j as h,k as v,l as d,m,n as g,o as E,p as $,q as y,r as x,u as D,v as N,w,x as k,y as b,z as j,A as z,B as A,C as S,D as _,E as H,F as I}from"./client.5c6c2586.js";function T(a){var t,s,n,r,e,c,o,D,N,w,k,b,j=a[0].appName+"",z=(a[0].appShortDescription||a[0].appDescription)+"";return{c:function(){t=p("a"),s=p("img"),e=i(),c=p("div"),o=p("h3"),D=f(j),N=i(),w=p("h4"),k=f(z),this.h()},l:function(a){t=u(a,"A",{href:!0,target:!0,class:!0});var n=l(t);s=u(n,"IMG",{src:!0,alt:!0,class:!0}),e=h(n),c=u(n,"DIV",{class:!0});var r=l(c);o=u(r,"H3",{class:!0});var p=l(o);D=v(p,j),p.forEach(d),N=h(r),w=u(r,"H4",{class:!0});var i=l(w);k=v(i,z),i.forEach(d),r.forEach(d),n.forEach(d),this.h()},h:function(){s.src!==(n="https://dapp-store.elastos.org/apps/".concat(a[0]._id,"/icon"))&&m(s,"src",n),m(s,"alt",r=a[0].appName),m(s,"class","svelte-my03ad"),m(o,"class","svelte-my03ad"),m(w,"class","svelte-my03ad"),m(c,"class","svelte-my03ad"),m(t,"href",b="https://scheme.elastos.org/app?id=".concat(a[0].packageName)),m(t,"target","_blank"),m(t,"class","svelte-my03ad")},m:function(a,n){g(a,t,n),E(t,s),E(t,e),E(t,c),E(c,o),E(o,D),E(c,N),E(c,w),E(w,k)},p:function(a,e){var c=$(e,1)[0];1&c&&s.src!==(n="https://dapp-store.elastos.org/apps/".concat(a[0]._id,"/icon"))&&m(s,"src",n),1&c&&r!==(r=a[0].appName)&&m(s,"alt",r),1&c&&j!==(j=a[0].appName+"")&&y(D,j),1&c&&z!==(z=(a[0].appShortDescription||a[0].appDescription)+"")&&y(k,z),1&c&&b!==(b="https://scheme.elastos.org/app?id=".concat(a[0].packageName))&&m(t,"href",b)},i:x,o:x,d:function(a){a&&d(t)}}}function B(a,t,s){var n=t.dapp;return a.$set=function(a){"dapp"in a&&s(0,n=a.dapp)},[n]}var C=function(p){function i(a){var o;return t(this,i),o=s(this,n(i).call(this)),r(c(o),a,B,T,e,{dapp:0}),o}return a(i,o),i}();function M(a,t,s){var n=a.slice();return n[1]=t[s],n}function q(a){var t,s=new C({props:{dapp:a[1]}});return{c:function(){w(s.$$.fragment)},l:function(a){k(s.$$.fragment,a)},m:function(a,n){b(s,a,n),t=!0},p:function(a,t){var n={};1&t&&(n.dapp=a[1]),s.$set(n)},i:function(a){t||(j(s.$$.fragment,a),t=!0)},o:function(a){z(s.$$.fragment,a),t=!1},d:function(a){A(s,a)}}}function F(a){for(var t,s,n,r,e,c,o,y,x,D=a[0],N=[],w=0;w<D.length;w+=1)N[w]=q(M(a,D,w));var k=function(a){return z(N[a],1,1,function(){N[a]=null})};return{c:function(){t=i(),s=p("h2"),n=f("Top "),r=p("em"),e=f("d"),c=f("Apps"),o=i(),y=p("section");for(var a=0;a<N.length;a+=1)N[a].c();this.h()},l:function(a){S('[data-svelte="svelte-1jbp5ef"]',document.head).forEach(d),t=h(a),s=u(a,"H2",{class:!0});var p=l(s);n=v(p,"Top "),r=u(p,"EM",{});var i=l(r);e=v(i,"d"),i.forEach(d),c=v(p,"Apps"),p.forEach(d),o=h(a),y=u(a,"SECTION",{class:!0});for(var f=l(y),m=0;m<N.length;m+=1)N[m].l(f);f.forEach(d),this.h()},h:function(){document.title="Discover your next favorite decentralized app!",m(s,"class","svelte-ziw8ca"),m(y,"class","svelte-ziw8ca")},m:function(a,p){g(a,t,p),g(a,s,p),E(s,n),E(s,r),E(r,e),E(s,c),g(a,o,p),g(a,y,p);for(var i=0;i<N.length;i+=1)N[i].m(y,null);x=!0},p:function(a,t){var s=$(t,1)[0];if(1&s){var n;for(D=a[0],n=0;n<D.length;n+=1){var r=M(a,D,n);N[n]?(N[n].p(r,s),j(N[n],1)):(N[n]=q(r),N[n].c(),j(N[n],1),N[n].m(y,null))}for(I(),n=D.length;n<N.length;n+=1)k(n);_()}},i:function(a){if(!x){for(var t=0;t<D.length;t+=1)j(N[t]);x=!0}},o:function(a){N=N.filter(Boolean);for(var t=0;t<N.length;t+=1)z(N[t]);x=!1},d:function(a){a&&d(t),a&&d(s),a&&d(o),a&&d(y),H(N,a)}}}function G(a,t){return O.apply(this,arguments)}function O(){return(O=D(N.mark(function a(t,s){var n,r;return N.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.fetch("https://dapp-store.elastos.org/apps/list");case 2:return n=a.sent,a.next=5,n.json();case 5:return r=a.sent,a.abrupt("return",{dapps:r});case 7:case"end":return a.stop()}},a,this)}))).apply(this,arguments)}function V(a,t,s){var n=t.dapps;return a.$set=function(a){"dapps"in a&&s(0,n=a.dapps)},[n]}export default(function(p){function i(a){var o;return t(this,i),o=s(this,n(i).call(this)),r(c(o),a,V,F,e,{dapps:0}),o}return a(i,o),i}());export{G as preload};