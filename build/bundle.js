var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t){return document.createElement(t)}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let s;function f(t){s=t}const i=[],d=[],p=[],g=[],h=Promise.resolve();let m=!1;function $(t){p.push(t)}let y=!1;const b=new Set;function x(){if(!y){y=!0;do{for(let t=0;t<i.length;t+=1){const n=i[t];f(n),_(n.$$)}for(i.length=0;d.length;)d.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];b.has(n)||(b.add(n),n())}p.length=0}while(i.length);for(;g.length;)g.pop()();m=!1,y=!1,b.clear()}}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}const v=new Set;function w(t,n){-1===t.$$.dirty[0]&&(i.push(t),m||(m=!0,h.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(c,u,a,l,i,d,p=[-1]){const g=s;f(c);const h=u.props||{},m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:e(),dirty:p};let y=!1;var b,_;m.ctx=a?a(c,h,(t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),y&&w(c,t)),n}):[],m.update(),y=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),u.target&&(u.hydrate?m.fragment&&m.fragment.l(function(t){return Array.from(t.childNodes)}(u.target)):m.fragment&&m.fragment.c(),u.intro&&((b=c.$$.fragment)&&b.i&&(v.delete(b),b.i(_))),function(t,e,c){const{fragment:u,on_mount:a,on_destroy:l,after_update:s}=t.$$;u&&u.m(e,c),$(()=>{const e=a.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),s.forEach($)}(c,u.target,u.anchor),x()),f(g)}function A(n){let e,o,r,c;return{c(){var t;e=a("main"),o=a("img"),t="\n\tTest deploy",c=document.createTextNode(t),o.src!==(r=k)&&l(o,"src",r),l(o,"width","200px"),l(o,"height","auto"),l(o,"alt","Elastos"),l(e,"class","svelte-1agder6")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(e,c)},p:t,i:t,o:t,d(t){var n;t&&(n=e).parentNode.removeChild(n)}}}let k="elastos.png";return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),E(this,t,null,A,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map