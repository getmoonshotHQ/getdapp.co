function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}((function(n){var e=function(n){var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof l?n:l,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(t,n,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=w(i,e);if(u){if(u===f)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=s(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=c;var f={};function l(){}function p(){}function h(){}var d={};d[a]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(E([])));m&&m!==e&&r.call(m,a)&&(d=m);var y=h.prototype=l.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function b(n,e){var o;this._invoke=function(a,i){function u(){return new e((function(o,u){!function o(a,i,u,c){var f=s(n[a],n,i);if("throw"!==f.type){var l=f.arg,p=l.value;return p&&"object"===t(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(f.arg)}(a,i,o,u)}))}return o=o?o.then(u,u):u()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function $(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,h[u]=p.displayName="GeneratorFunction",n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},n.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},n.AsyncIterator=b,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new b(c(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),$(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;$(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}(n.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function a(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?f(n):e}function p(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(){}var m=function(t){return t};function y(t,n){for(var e in n)t[e]=n[e];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function x(t){return"function"==typeof t}function $(n,e){return n!=n?e==e:n!==e||n&&"object"===t(n)||"function"==typeof n}function _(t,n,e,r){if(t){var o=E(t,n,e,r);return t[0](o)}}function E(t,n,e,r){return t[1]&&r?y(e.ctx.slice(),t[1](r(n))):e.ctx}function S(n,e,r,o,a,i,u){var c=function(n,e,r,o){if(n[2]&&o){var a=n[2](o(r));if(void 0===e.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(e.dirty.length,a.length),c=0;c<u;c+=1)i[c]=e.dirty[c]|a[c];return i}return e.dirty|a}return e.dirty}(e,o,a,i);if(c){var s=E(e,r,o,u);n.p(s,c)}}var k="undefined"!=typeof window,L=k?function(){return window.performance.now()}:function(){return Date.now()},R=k?function(t){return requestAnimationFrame(t)}:v,O=new Set;function j(t){O.forEach((function(n){n.c(t)||(O.delete(n),n.f())})),0!==O.size&&R(j)}function P(t){var n;return 0===O.size&&R(j),{promise:new Promise((function(e){O.add(n={c:t,f:e})})),abort:function(){O.delete(n)}}}function A(t,n){t.appendChild(n)}function N(t,n,e){t.insertBefore(n,e||null)}function C(t){t.parentNode.removeChild(t)}function q(t,n){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function T(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function U(){return D(" ")}function G(){return D("")}function F(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function M(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function B(t){return Array.from(t.childNodes)}function J(t,n,e,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===n){for(var i=0,u=[];i<a.attributes.length;){var c=a.attributes[i++];e[c.name]||u.push(c.name)}for(var s=0;s<u.length;s++)a.removeAttribute(u[s]);return t.splice(o,1)[0]}}return r?I(n):T(n)}function z(t,n){for(var e=0;e<t.length;e+=1){var r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return D(n)}function H(t){return z(t," ")}function K(t,n){n=""+n,t.data!==n&&(t.data=n)}function V(t,n,e){t.classList[e?"add":"remove"](n)}function Y(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(n.querySelectorAll(t))}var W,Q=new Set,X=0;function Z(t){for(var n=5381,e=t.length;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function tt(t,n,e,r,o,a,i){for(var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,c=16.666/r,s="{\n",f=0;f<=1;f+=c){var l=n+(e-n)*a(f);s+=100*f+"%{".concat(i(l,1-l),"}\n")}var p=s+"100% {".concat(i(e,1-e),"}\n}"),h="__svelte_".concat(Z(p),"_").concat(u),d=t.ownerDocument;Q.add(d);var v=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(T("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[h]||(m[h]=!0,v.insertRule("@keyframes ".concat(h," ").concat(p),v.cssRules.length));var y=t.style.animation||"";return t.style.animation="".concat(y?"".concat(y,", "):"").concat(h," ").concat(r,"ms linear ").concat(o,"ms 1 both"),X+=1,h}function nt(t,n){var e=(t.style.animation||"").split(", "),r=e.filter(n?function(t){return t.indexOf(n)<0}:function(t){return-1===t.indexOf("__svelte")}),o=e.length-r.length;o&&(t.style.animation=r.join(", "),(X-=o)||R((function(){X||(Q.forEach((function(t){for(var n=t.__svelte_stylesheet,e=n.cssRules.length;e--;)n.deleteRule(e);t.__svelte_rules={}})),Q.clear())})))}function et(t){W=t}function rt(){if(!W)throw new Error("Function called outside component initialization");return W}function ot(t){rt().$$.on_mount.push(t)}function at(t,n){var e=t.$$.callbacks[n.type];e&&e.slice().forEach((function(t){return t(n)}))}var it=[],ut=[],ct=[],st=[],ft=Promise.resolve(),lt=!1;function pt(t){ct.push(t)}var ht,dt=!1,vt=new Set;function mt(){if(!dt){dt=!0;do{for(var t=0;t<it.length;t+=1){var n=it[t];et(n),yt(n.$$)}for(it.length=0;ut.length;)ut.pop()();for(var e=0;e<ct.length;e+=1){var r=ct[e];vt.has(r)||(vt.add(r),r())}ct.length=0}while(it.length);for(;st.length;)st.pop()();lt=!1,dt=!1,vt.clear()}}function yt(t){if(null!==t.fragment){t.update(),w(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(pt)}}function gt(){return ht||(ht=Promise.resolve()).then((function(){ht=null})),ht}function bt(t,n,e){var r,o,a;t.dispatchEvent((r="".concat(n?"intro":"outro").concat(e),(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,o),a))}var wt,xt=new Set;function $t(){wt={r:0,c:[],p:wt}}function _t(){wt.r||w(wt.c),wt=wt.p}function Et(t,n){t&&t.i&&(xt.delete(t),t.i(n))}function St(t,n,e,r){if(t&&t.o){if(xt.has(t))return;xt.add(t),wt.c.push((function(){xt.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}var kt={duration:0};function Lt(t,n,e){var r,o,a=n(t,e),i=!1,u=0;function c(){r&&nt(t,r)}function s(){var n=a||kt,e=n.delay,s=void 0===e?0:e,f=n.duration,l=void 0===f?300:f,p=n.easing,h=void 0===p?m:p,d=n.tick,y=void 0===d?v:d,g=n.css;g&&(r=tt(t,0,1,l,s,h,g,u++)),y(0,1);var b=L()+s,w=b+l;o&&o.abort(),i=!0,pt((function(){return bt(t,!0,"start")})),o=P((function(n){if(i){if(n>=w)return y(1,0),bt(t,!0,"end"),c(),i=!1;if(n>=b){var e=h((n-b)/l);y(e,1-e)}}return i}))}var f=!1;return{start:function(){f||(nt(t),x(a)?(a=a(),gt().then(s)):s())},invalidate:function(){f=!1},end:function(){i&&(c(),i=!1)}}}function Rt(t,n,e){var r,o=n(t,e),a=!0,i=wt;function u(){var n=o||kt,e=n.delay,u=void 0===e?0:e,c=n.duration,s=void 0===c?300:c,f=n.easing,l=void 0===f?m:f,p=n.tick,h=void 0===p?v:p,d=n.css;d&&(r=tt(t,1,0,s,u,l,d));var y=L()+u,g=y+s;pt((function(){return bt(t,!1,"start")})),P((function(n){if(a){if(n>=g)return h(0,1),bt(t,!1,"end"),--i.r||w(i.c),!1;if(n>=y){var e=l((n-y)/s);h(1-e,e)}}return a}))}return i.r+=1,x(o)?gt().then((function(){o=o(),u()})):u(),{end:function(n){n&&o.tick&&o.tick(1,0),a&&(r&&nt(t,r),a=!1)}}}function Ot(t,n,e,r){var o=n(t,e),a=r?0:1,i=null,u=null,c=null;function s(){c&&nt(t,c)}function f(t,n){var e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function l(n){var e=o||kt,r=e.delay,l=void 0===r?0:r,p=e.duration,h=void 0===p?300:p,d=e.easing,y=void 0===d?m:d,g=e.tick,b=void 0===g?v:g,x=e.css,$={start:L()+l,b:n};n||($.group=wt,wt.r+=1),i?u=$:(x&&(s(),c=tt(t,a,n,h,l,y,x)),n&&b(0,1),i=f($,h),pt((function(){return bt(t,n,"start")})),P((function(n){if(u&&n>u.start&&(i=f(u,h),u=null,bt(t,i.b,"start"),x&&(s(),c=tt(t,a,i.b,i.duration,0,y,o.css))),i)if(n>=i.end)b(a=i.b,1-a),bt(t,i.b,"end"),u||(i.b?s():--i.group.r||w(i.group.c)),i=null;else if(n>=i.start){var e=n-i.start;a=i.a+i.d*y(e/i.duration),b(a,1-a)}return!(!i&&!u)})))}return{run:function(t){x(o)?gt().then((function(){o=o(),l(t)})):l(t)},end:function(){s(),i=u=null}}}var jt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Pt(t,n){for(var e={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=n[a];if(u){for(var c in i)c in u||(r[c]=1);for(var s in u)o[s]||(e[s]=u[s],o[s]=1);t[a]=u}else for(var f in i)o[f]=1}for(var l in r)l in e||(e[l]=void 0);return e}function At(n){return"object"===t(n)&&null!==n?n:{}}function Nt(t){t&&t.c()}function Ct(t,n){t&&t.l(n)}function qt(t,n,e){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(n,e),pt((function(){var n=a.map(g).filter(x);i?i.push.apply(i,p(n)):w(n),t.$$.on_mount=[]})),u.forEach(pt)}function Tt(t,n){var e=t.$$;null!==e.fragment&&(w(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function It(t,n){-1===t.$$.dirty[0]&&(it.push(t),lt||(lt=!0,ft.then(mt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=W;et(t);var c=n.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:v,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:i},f=!1;if(s.ctx=e?e(t,c,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return s.ctx&&o(s.ctx[n],s.ctx[n]=r)&&(s.bound[n]&&s.bound[n](r),f&&It(t,n)),e})):[],s.update(),f=!0,w(s.before_update),s.fragment=!!r&&r(s.ctx),n.target){if(n.hydrate){var l=B(n.target);s.fragment&&s.fragment.l(l),l.forEach(C)}else s.fragment&&s.fragment.c();n.intro&&Et(t.$$.fragment),qt(t,n.target,n.anchor),mt()}et(u)}var Ut=function(){function t(){h(this,t)}var n,e,r;return n=t,(e=[{key:"$destroy",value:function(){Tt(this,1),this.$destroy=v}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(){}}])&&d(n.prototype,e),r&&d(n,r),t}(),Gt=[];function Ft(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,r=[];function o(e){if($(t,e)&&(t=e,n)){for(var o=!Gt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),Gt.push(i,t)}if(o){for(var u=0;u<Gt.length;u+=2)Gt[u][0](Gt[u+1]);Gt.length=0}}}function a(n){o(n(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,u=[a,i];return r.push(u),1===r.length&&(n=e(o)||v),a(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}return{set:o,update:a,subscribe:i}}var Mt={},Bt=function(){return{}};function Jt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function zt(t){var n,e,o,a,i,u,c,s,f,l=t[1].default,p=_(l,t,t[0],null);return{c:function(){n=T("header"),e=T("em"),o=D("powered by"),a=U(),i=T("a"),u=T("img"),c=U(),s=T("main"),p&&p.c(),this.h()},l:function(t){var r=B(n=J(t,"HEADER",{class:!0})),f=B(e=J(r,"EM",{}));o=z(f,"powered by"),f.forEach(C),a=H(r);var l=B(i=J(r,"A",{href:!0,rel:!0,target:!0}));u=J(l,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),l.forEach(C),r.forEach(C),c=H(t);var h=B(s=J(t,"MAIN",{class:!0}));p&&p.l(h),h.forEach(C),this.h()},h:function(){u.src!=="elastos.png"&&M(u,"src","elastos.png"),M(u,"width","auto"),M(u,"height","20"),M(u,"alt","Elastos"),M(u,"class","svelte-c5pgwc"),M(i,"href","https://www.elastos.org/"),M(i,"rel","noopener"),M(i,"target","_blank"),M(n,"class","svelte-c5pgwc"),M(s,"class","svelte-c5pgwc")},m:function(t,r){N(t,n,r),A(n,e),A(e,o),A(n,a),A(n,i),A(i,u),N(t,c,r),N(t,s,r),p&&p.m(s,null),f=!0},p:function(t,n){var e=r(n,1)[0];p&&p.p&&1&e&&S(p,l,t,t[0],e,null,null)},i:function(t){f||(Et(p,t),f=!0)},o:function(t){St(p,t),f=!1},d:function(t){t&&C(n),t&&C(c),t&&C(s),p&&p.d(t)}}}function Ht(t,n,e){var r=n.$$slots,o=void 0===r?{}:r,a=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(0,a=t.$$scope)},[a,o]}var Kt=function(t){s(e,Ut);var n=Jt(e);function e(t){var r;return h(this,e),Dt(f(r=n.call(this)),t,Ht,zt,$,{}),r}return e}();function Vt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function Yt(t){var n,e,r=t[1].stack+"";return{c:function(){n=T("pre"),e=D(r)},l:function(t){var o=B(n=J(t,"PRE",{}));e=z(o,r),o.forEach(C)},m:function(t,r){N(t,n,r),A(n,e)},p:function(t,n){2&n&&r!==(r=t[1].stack+"")&&K(e,r)},d:function(t){t&&C(n)}}}function Wt(t){var n,e,o,a,i,u,c,s,f,l=t[1].message+"";document.title=n=t[0];var p=t[2]&&t[1].stack&&Yt(t);return{c:function(){e=U(),o=T("h1"),a=D(t[0]),i=U(),u=T("p"),c=D(l),s=U(),p&&p.c(),f=G(),this.h()},l:function(n){Y('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(C),e=H(n);var r=B(o=J(n,"H1",{class:!0}));a=z(r,t[0]),r.forEach(C),i=H(n);var h=B(u=J(n,"P",{class:!0}));c=z(h,l),h.forEach(C),s=H(n),p&&p.l(n),f=G(),this.h()},h:function(){M(o,"class","svelte-8od9u6"),M(u,"class","svelte-8od9u6")},m:function(t,n){N(t,e,n),N(t,o,n),A(o,a),N(t,i,n),N(t,u,n),A(u,c),N(t,s,n),p&&p.m(t,n),N(t,f,n)},p:function(t,e){var o=r(e,1)[0];1&o&&n!==(n=t[0])&&(document.title=n),1&o&&K(a,t[0]),2&o&&l!==(l=t[1].message+"")&&K(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Yt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:v,o:v,d:function(t){t&&C(e),t&&C(o),t&&C(i),t&&C(u),t&&C(s),p&&p.d(t),t&&C(f)}}}function Qt(t,n,e){var r=n.status,o=n.error;return t.$set=function(t){"status"in t&&e(0,r=t.status),"error"in t&&e(1,o=t.error)},[r,o,!1]}var Xt=function(t){s(e,Ut);var n=Vt(e);function e(t){var r;return h(this,e),Dt(f(r=n.call(this)),t,Qt,Wt,$,{status:0,error:1}),r}return e}();function Zt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function tn(t){var n,e,r,o=[t[4].props],a=t[4].component;function i(t){for(var n={},e=0;e<o.length;e+=1)n=y(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c:function(){n&&Nt(n.$$.fragment),e=G()},l:function(t){n&&Ct(n.$$.fragment,t),e=G()},m:function(t,o){n&&qt(n,t,o),N(t,e,o),r=!0},p:function(t,r){var u=16&r?Pt(o,[At(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){$t();var c=n;St(c.$$.fragment,1,0,(function(){Tt(c,1)})),_t()}a?(Nt((n=new a(i())).$$.fragment),Et(n.$$.fragment,1),qt(n,e.parentNode,e)):n=null}else a&&n.$set(u)},i:function(t){r||(n&&Et(n.$$.fragment,t),r=!0)},o:function(t){n&&St(n.$$.fragment,t),r=!1},d:function(t){t&&C(e),n&&Tt(n,t)}}}function nn(t){var n,e;return n=new Xt({props:{error:t[0],status:t[1]}}),{c:function(){Nt(n.$$.fragment)},l:function(t){Ct(n.$$.fragment,t)},m:function(t,r){qt(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(Et(n.$$.fragment,t),e=!0)},o:function(t){St(n.$$.fragment,t),e=!1},d:function(t){Tt(n,t)}}}function en(t){var n,e,r,o,a=[nn,tn],i=[];function u(t,n){return t[0]?0:1}return n=u(t),e=i[n]=a[n](t),{c:function(){e.c(),r=G()},l:function(t){e.l(t),r=G()},m:function(t,e){i[n].m(t,e),N(t,r,e),o=!0},p:function(t,o){var c=n;(n=u(t))===c?i[n].p(t,o):($t(),St(i[c],1,1,(function(){i[c]=null})),_t(),(e=i[n])||(e=i[n]=a[n](t)).c(),Et(e,1),e.m(r.parentNode,r))},i:function(t){o||(Et(e),o=!0)},o:function(t){St(e),o=!1},d:function(t){i[n].d(t),t&&C(r)}}}function rn(t){for(var n,e,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[en]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=y(a,o[i]);return n=new Kt({props:a}),{c:function(){Nt(n.$$.fragment)},l:function(t){Ct(n.$$.fragment,t)},m:function(t,r){qt(n,t,r),e=!0},p:function(t,e){var a=r(e,1)[0],i=12&a?Pt(o,[4&a&&{segment:t[2][0]},8&a&&At(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),n.$set(i)},i:function(t){e||(Et(n.$$.fragment,t),e=!0)},o:function(t){St(n.$$.fragment,t),e=!1},d:function(t){Tt(n,t)}}}function on(t,n,e){var r,o,a,i=n.stores,u=n.error,c=n.status,s=n.segments,f=n.level0,l=n.level1,p=void 0===l?null:l,h=n.notify;return r=h,rt().$$.after_update.push(r),o=Mt,a=i,rt().$$.context.set(o,a),t.$set=function(t){"stores"in t&&e(5,i=t.stores),"error"in t&&e(0,u=t.error),"status"in t&&e(1,c=t.status),"segments"in t&&e(2,s=t.segments),"level0"in t&&e(3,f=t.level0),"level1"in t&&e(4,p=t.level1),"notify"in t&&e(6,h=t.notify)},[u,c,s,f,p,i,h]}var an=function(t){s(e,Ut);var n=Zt(e);function e(t){var r;return h(this,e),Dt(f(r=n.call(this)),t,on,rn,$,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return e}(),un=[],cn=[{js:function(){return import("./index.32049e2d.js")},css:[]}],sn=[{pattern:/^\/$/,parts:[{i:0}]}];function fn(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},e=jn(new URL(t,document.baseURI));return e?(Ln[n.replaceState?"replaceState":"pushState"]({id:_n},"",t),An(e,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var ln,pn,hn,dn,vn,mn="undefined"!=typeof __SAPPER__&&__SAPPER__,yn=!1,gn=[],bn="{}",wn={page:function(t){var n=Ft(t),e=!0;return{notify:function(){e=!0,n.update((function(t){return t}))},set:function(t){e=!1,n.set(t)},subscribe:function(t){var r;return n.subscribe((function(n){(void 0===r||e&&n!==r)&&t(r=n)}))}}}({}),preloading:Ft(null),session:Ft(mn&&mn.session)};wn.session.subscribe(function(){var t=i(o.mark((function t(n){var e,r,a,i,u,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(dn=n,yn){t.next=3;break}return t.abrupt("return");case 3:return vn=!0,e=jn(new URL(location.href)),r=pn={},t.next=8,In(e);case 8:if(a=t.sent,i=a.redirect,u=a.props,c=a.branch,r===pn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Cn(i,c,u,e.page);case 16:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());var xn,$n=null;var _n,En=1;var Sn,kn,Ln="undefined"!=typeof history?history:{pushState:function(t,n,e){},replaceState:function(t,n,e){},scrollRestoration:""},Rn={};function On(n){var e=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach((function(n){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),3),a=o[1],i=o[2],u=void 0===i?"":i;"string"==typeof e[a]&&(e[a]=[e[a]]),"object"===t(e[a])?e[a].push(u):e[a]=u})),e}function jn(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(mn.baseUrl))return null;var n=t.pathname.slice(mn.baseUrl.length);if(""===n&&(n="/"),!un.some((function(t){return t.test(n)})))for(var e=0;e<sn.length;e+=1){var r=sn[e],o=r.pattern.exec(n);if(o){var a=On(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:n,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function Pn(){return{x:pageXOffset,y:pageYOffset}}function An(t,n,e,r){return Nn.apply(this,arguments)}function Nn(){return(Nn=i(o.mark((function t(n,e,r,a){var i,u,c,s,f,l,p,h,d;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e?_n=e:(i=Pn(),Rn[_n]=i,e=_n=++En,Rn[_n]=r?i:{x:0,y:0}),_n=e,ln&&wn.preloading.set(!0),u=$n&&$n.href===n.href?$n.promise:In(n),$n=null,c=pn={},t.next=8,u;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,c===pn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Cn(f,p,l,n.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=Rn[e],a&&(d=document.getElementById(a.slice(1)))&&(h={x:0,y:d.getBoundingClientRect().top+scrollY}),Rn[_n]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Cn(t,n,e,r){return qn.apply(this,arguments)}function qn(){return(qn=i(o.mark((function t(n,e,r,a){var i,u;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",fn(n.location,{replaceState:!0}));case 2:if(wn.page.set(a),wn.preloading.set(!1),!ln){t.next=8;break}ln.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:wn.page.subscribe},preloading:{subscribe:wn.preloading.subscribe},session:wn.session},t.next=11,hn;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=wn.page.notify,i=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end"),i&&u){for(;i.nextSibling!==u;)Fn(i.nextSibling);Fn(i),Fn(u)}ln=new an({target:xn,props:r,hydrate:!0});case 18:gn=e,bn=JSON.stringify(a.query),yn=!0,vn=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Tn(t,n,e,r){if(r!==bn)return!0;var o=gn[t];return!!o&&(n!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(e.slice(1,t+2)))||void 0))}function In(t){return Dn.apply(this,arguments)}function Dn(){return(Dn=i(o.mark((function t(n){var e,r,a,u,c,s,f,l,p,h,d;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.route,r=n.page,a=r.path.split("/").filter(Boolean),u=null,c={error:null,status:200,segments:[a[0]]},s={fetch:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){return fetch(t,n)})),redirect:function(t,n){if(u&&(u.statusCode!==t||u.location!==n))throw new Error("Conflicting redirects");u={statusCode:t,location:n}},error:function(t,n){c.error="string"==typeof n?new Error(n):n,c.status=t}},hn||(hn=mn.preloaded[0]||Bt.call(s,{host:r.host,path:r.path,query:r.query,params:{}},dn)),l=1,t.prev=7,p=JSON.stringify(r.query),h=e.pattern.exec(r.path),d=!1,t.next=13,Promise.all(e.parts.map(function(){var t=i(o.mark((function t(e,i){var u,f,v,m,y,g;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=a[i],Tn(i,u,h,p)&&(d=!0),c.segments[l]=a[i+1],e){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(f=l++,vn||d||!gn[i]||gn[i].part!==e.i){t.next=8;break}return t.abrupt("return",gn[i]);case 8:return d=!1,t.next=11,Gn(cn[e.i]);case 11:if(v=t.sent,m=v.default,y=v.preload,!yn&&mn.preloaded[i+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(n.match):{}},dn);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=mn.preloaded[i+1];case 26:return t.abrupt("return",c["level".concat(f)]={component:m,props:g,segment:u,match:h,part:e.i});case 27:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,f=[];case 21:return t.abrupt("return",{redirect:u,props:c,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function Un(t){var n="client/".concat(t);if(!document.querySelector('link[href="'.concat(n,'"]')))return new Promise((function(t,e){var r=document.createElement("link");r.rel="stylesheet",r.href=n,r.onload=function(){return t()},r.onerror=e,document.head.appendChild(r)}))}function Gn(t){var n="string"==typeof t.css?[]:t.css.map(Un);return n.unshift(t.js()),Promise.all(n).then((function(t){return t[0]}))}function Fn(t){t.parentNode.removeChild(t)}function Mn(t){var n=jn(new URL(t,document.baseURI));if(n)return $n&&t===$n.href||function(t,n){$n={href:t,promise:n}}(t,In(n)),$n.promise}function Bn(t){clearTimeout(Sn),Sn=setTimeout((function(){Jn(t)}),20)}function Jn(t){var n=Hn(t.target);n&&"prefetch"===n.rel&&Mn(n.href)}function zn(n){if(1===function(t){return null===t.which?t.button:t.which}(n)&&!(n.metaKey||n.ctrlKey||n.shiftKey||n.defaultPrevented)){var e=Hn(n.target);if(e&&e.href){var r="object"===t(e.href)&&"SVGAnimatedString"===e.href.constructor.name,o=String(r?e.href.baseVal:e.href);if(o!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&!(r?e.target.baseVal:e.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=jn(a);if(i)An(i,null,e.hasAttribute("sapper-noscroll"),a.hash),n.preventDefault(),Ln.pushState({id:_n},"",a.href)}}}else location.hash||n.preventDefault()}}}function Hn(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Kn(t){if(Rn[_n]=Pn(),t.state){var n=jn(new URL(location.href));n?An(n,t.state.id):location.href=location.href}else(function(t){_n=t})(En=En+1),Ln.replaceState({id:_n},"",location.href)}kn={target:document.querySelector("#sapper")},"scrollRestoration"in Ln&&(Ln.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Ln.scrollRestoration="auto"})),addEventListener("load",(function(){Ln.scrollRestoration="manual"})),function(t){xn=t}(kn.target),addEventListener("click",zn),addEventListener("popstate",Kn),addEventListener("touchstart",Jn),addEventListener("mousemove",Bn),Promise.resolve().then((function(){var t=location,n=t.hash,e=t.href;Ln.replaceState({id:En},"",e);var r,o,a,i,u,c,s,f,l=new URL(location.href);if(mn.error)return r=location,o=r.host,a=r.pathname,i=r.search,u=mn.session,c=mn.preloaded,s=mn.status,f=mn.error,hn||(hn=c&&c[0]),void Cn(null,[],{error:f,status:s,session:u,level0:{props:hn},level1:{props:{status:s,error:f},component:Xt},segments:c},{host:o,path:a,query:On(i),params:{}});var p=jn(l);return p?An(p,En,!0,n):void 0}));export{S as A,Et as B,St as C,I as D,Nt as E,G as F,Ct as G,qt as H,Tt as I,$t as J,_t as K,at as L,m as M,pt as N,Lt as O,Ot as P,Rt as Q,w as R,Ut as S,i as T,o as U,Y as V,jt as W,s as _,u as a,l as b,h as c,f as d,T as e,U as f,J as g,B as h,Dt as i,C as j,H as k,z as l,M as m,N as n,A as o,v as p,V as q,F as r,$ as s,D as t,r as u,q as v,ot as w,ut as x,_ as y,K as z};
