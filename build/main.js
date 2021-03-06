new function(){function u(b,e,n,f,k,h){return{tag:b,key:e,attrs:n,children:f,text:k,dom:h,domSize:void 0,state:{},events:void 0,instance:void 0,skip:!1}}function x(b){if(null==b||"string"!==typeof b&&null==b.view)throw Error("The selector must be either a string or a component.");if("string"===typeof b&&void 0===F[b]){for(var e,n,f=[],k={};e=O.exec(b);){var h=e[1],m=e[2];""===h&&""!==m?n=m:"#"===h?k.id=m:"."===h?f.push(m):"["===e[3][0]&&((h=e[6])&&(h=h.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),
k[e[4]]=h||!0)}0<f.length&&(k.className=f.join(" "));F[b]=function(b,g){var e=!1,w,h,f=b.className||b["class"],m;for(m in k)b[m]=k[m];void 0!==f&&(void 0!==b["class"]&&(b["class"]=void 0,b.className=f),void 0!==k.className&&(b.className=k.className+" "+f));for(m in b)if("key"!==m){e=!0;break}g instanceof Array&&1==g.length&&null!=g[0]&&"#"===g[0].tag?h=g[0].children:w=g;return u(n||"div",b.key,e?b:void 0,w,h,void 0)}}var t;null!=arguments[1]&&("object"!==typeof arguments[1]||void 0!==arguments[1].tag||
arguments[1]instanceof Array)?f=1:(t=arguments[1],f=2);if(arguments.length===f+1)e=arguments[f]instanceof Array?arguments[f]:[arguments[f]];else for(e=[];f<arguments.length;f++)e.push(arguments[f]);return"string"===typeof b?F[b](t||{},u.normalizeChildren(e)):u(b,t&&t.key,t||{},u.normalizeChildren(e),void 0,void 0)}u.normalize=function(b){return b instanceof Array?u("[",void 0,void 0,u.normalizeChildren(b),void 0,void 0):null!=b&&"object"!==typeof b?u("#",void 0,void 0,b,void 0,void 0):b};u.normalizeChildren=
function(b){for(var e=0;e<b.length;e++)b[e]=u.normalize(b[e]);return b};var O=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,F={};x.trust=function(b){return u("<",void 0,void 0,b,void 0,void 0)};x.fragment=function(b,e){return u("[",b.key,b,u.normalizeChildren(e),void 0,void 0)};var M=function(b){function e(){function a(){0<arguments.length&&arguments[0]!==v&&f(a,arguments[0],void 0);return a._state.value}n(a);0<arguments.length&&arguments[0]!==v&&f(a,arguments[0],
void 0);return a}function n(a){a.constructor=e;a._state={id:P++,value:void 0,error:void 0,state:0,derive:void 0,recover:void 0,deps:{},parents:[],errorStream:void 0,endStream:void 0};a.map=u;a.ap=x;a.of=e;a.valueOf=q;a.toJSON=G;a.toString=q;a.run=l;a["catch"]=w;Object.defineProperties(a,{error:{get:function(){if(!a._state.errorStream){var c=function(){0<arguments.length&&arguments[0]!==v&&f(a,void 0,arguments[0]);return a._state.error};n(c);A(c,[a],K,K);a._state.errorStream=c}return a._state.errorStream}},
end:{get:function(){if(!a._state.endStream){var c=e();c.map(function(d){!0===d&&(z(a),z(c));return d});a._state.endStream=c}return a._state.endStream}}})}function f(a,c,d){k(a,c,d);for(var g in a._state.deps)m(a._state.deps[g],!1);a._state.changed=!1;for(var b in a._state.deps)a._state.deps[b]._state.changed=!1}function k(a,c,d){d=p(c,d);if(void 0!==d&&"function"===typeof a._state.recover){if(!t(a,h,!0))return}else h(a,c,d);a._state.changed=!0;2!==a._state.state&&(a._state.state=1)}function h(a,c,
d){a._state.value=c;a._state.error=d}function m(d,g){var b=d._state.parents;0<b.length&&b.filter(c).length===b.length&&(g||0<b.filter(a).length)&&(b=b.filter(L),0<b.length?k(d,void 0,b[0]._state.error):t(d,k,!1))}function t(a,c,d){try{var b=d?a._state.recover():a._state.derive();if(b===v)return!1;c(a,b,void 0)}catch(e){c(a,void 0,null!=e.__error?e.__error:e),null==e.__error&&g(a,e)}return!0}function p(a,c){null!=a&&a.constructor===e&&(c=void 0!==a._state.error?a._state.error:p(a._state.value,a._state.error));
return c}function g(a,c){0===Object.keys(a._state.deps).length&&setTimeout(function(){0===Object.keys(a._state.deps).length&&b(c)},0)}function l(a){var c=e(),d=this;return A(c,[d],function(){return B(c,a(d()))},void 0)}function w(a){var c=e(),d=this;return A(c,[d],function(){return d._state.value},function(){return B(c,a(d._state.error))})}function r(c,d){if(d.length>d.filter(D).length)throw Error("Ensure that each item passed to m.prop.combine/m.prop.merge is a stream");return A(e(),d,function(){var b=
d.filter(L);if(0<b.length)throw{__error:b[0]._state.error};return c.apply(this,d.concat([d.filter(a)]))},void 0)}function B(a,c){if(null!=c&&c.constructor===e){var d=c,b=function(){k(a,d._state.value,d._state.error);for(var c in a._state.deps)m(a._state.deps[c],!1)};d.map(b)["catch"](function(a){b();throw{__error:a};});if(0===d._state.state)return v;if(d._state.error)throw{__error:d._state.error};c=d._state.value}return c}function A(a,c,b,g){var e=a._state;e.derive=b;e.recover=g;e.parents=c.filter(d);
C(a,e.parents);m(a,!0);return a}function C(a,c){for(var d=0;d<c.length;d++)c[d]._state.deps[a._state.id]=a,C(a,c[d]._state.parents)}function z(a){for(var c=0;c<a._state.parents.length;c++)delete a._state.parents[c]._state.deps[a._state.id];for(var d in a._state.deps){var c=a._state.deps[d],b=c._state.parents.indexOf(a);-1<b&&c._state.parents.splice(b,1)}a._state.state=2;a._state.deps={}}function u(a){return r(function(c){return a(c())},[this])}function x(a){return r(function(a,c){return a()(c())},
[this,a])}function q(){return this._state.value}function G(){return null!=this._state.value&&"function"===typeof this._state.value.toJSON?this._state.value.toJSON():this._state.value}function D(a){return a._state}function c(a){return 1===a._state.state}function a(a){return a._state.changed}function d(a){return 2!==a._state.state}function L(a){return a._state.error}var P=0,K=function(){},v={};e.merge=function(a){return r(function(){return a.map(function(a){return a()})},a)};e.combine=r;e.reject=function(a){var c=
e();c.error(a);return c};e.HALT=v;return e}(console.log.bind(console)),E=function(b){function e(b,f){if(f instanceof Array)for(var m=0;m<f.length;m++)e(b+"["+m+"]",f[m]);else if("[object Object]"===Object.prototype.toString.call(f))for(m in f)e(b+"["+m+"]",f[m]);else n.push(encodeURIComponent(b)+(null!=f&&""!==f?"="+encodeURIComponent(f):""))}if("[object Object]"!==Object.prototype.toString.call(b))return"";var n=[],f;for(f in b)e(f,b[f]);return n.join("&")},H=function(b,e){function n(b,e){if(null==
e)return b;for(var f=b.match(/:[^\/]+/gi)||[],h=0;h<f.length;h++){var m=f[h].slice(1);null!=e[m]&&(b=b.replace(f[h],e[m]),delete e[m])}return b}function f(b,e){var f=E(e);if(""!==f){var h=0>b.indexOf("?")?"?":"&";b+=h+f}return b}function k(b){try{return""!==b?JSON.parse(b):null}catch(e){throw Error(b);}}function h(b){return b.responseText}function m(b,e){if("function"===typeof b)if(e instanceof Array)for(var f=0;f<e.length;f++)e[f]=new b(e[f]);else return new b(e);return e}var t=0,p;return{request:function(g){var l=
e();void 0!==g.initialValue&&l(g.initialValue);var w="boolean"===typeof g.useBody?g.useBody:"GET"!==g.method&&"TRACE"!==g.method;"function"!==typeof g.serialize&&(g.serialize="undefined"!==typeof FormData&&g.data instanceof FormData?function(b){return b}:JSON.stringify);"function"!==typeof g.deserialize&&(g.deserialize=k);"function"!==typeof g.extract&&(g.extract=h);g.url=n(g.url,g.data);w?g.data=g.serialize(g.data):g.url=f(g.url,g.data);var r=new b.XMLHttpRequest;r.open(g.method,g.url,"boolean"===
typeof g.async?g.async:!0,"string"===typeof g.user?g.user:void 0,"string"===typeof g.password?g.password:void 0);g.serialize===JSON.stringify&&w&&r.setRequestHeader("Content-Type","application/json; charset=utf-8");g.deserialize===k&&r.setRequestHeader("Accept","application/json, text/*");"function"===typeof g.config&&(r=g.config(r,g)||r);r.onreadystatechange=function(){if(4===r.readyState){try{var b=g.extract!==h?g.extract(r,g):g.deserialize(g.extract(r,g));if(200<=r.status&&300>r.status||304===
r.status)l(m(g.type,b));else{var e=Error(r.responseText),f;for(f in b)e[f]=b[f];l.error(e)}}catch(w){l.error(w)}"function"===typeof p&&p()}};w?r.send(g.data):r.send();return l},jsonp:function(g){var h=e();void 0!==g.initialValue&&h(g.initialValue);var w=g.callbackName||"_mithril_"+Math.round(1E16*Math.random())+"_"+t++,k=b.document.createElement("script");b[w]=function(e){k.parentNode.removeChild(k);h(m(g.type,e));"function"===typeof p&&p();delete b[w]};k.onerror=function(){k.parentNode.removeChild(k);
h.error(Error("JSONP request failed"));"function"===typeof p&&p();delete b[w]};null==g.data&&(g.data={});g.url=n(g.url,g.data);g.data[g.callbackKey||"callback"]=w;k.src=f(g.url,g.data);b.document.documentElement.appendChild(k);return h},setCompletionCallback:function(b){p=b}}}(window,M),I=function(){var b=[];return{subscribe:b.push.bind(b),unsubscribe:function(e){e=b.indexOf(e);-1<e&&b.splice(e,1)},publish:function(){for(var e=0;e<b.length;e++)b[e].apply(this,arguments)}}}();H.setCompletionCallback(I.publish);
var N=function(b){function e(c,a,d,b,e,g,f){for(;d<b;d++){var h=a[d];null!=h&&p(c,n(h,e,f),g)}}function n(c,a,d){var b=c.tag;null!=c.attrs&&z(c.attrs,c,a);if("string"===typeof b)switch(b){case "#":return c.dom=q.createTextNode(c.children);case "<":return f(c);case "[":var g=q.createDocumentFragment();null!=c.children&&(b=c.children,e(g,b,0,b.length,a,null,d));c.dom=g.firstChild;c.domSize=g.childNodes.length;return g;default:var h=c.tag;switch(c.tag){case "svg":d="http://www.w3.org/2000/svg";break;
case "math":d="http://www.w3.org/1998/Math/MathML"}var v=(b=c.attrs)&&b.is,h=d?v?q.createElementNS(d,h,{is:v}):q.createElementNS(d,h):v?q.createElement(h,{is:v}):q.createElement(h);c.dom=h;if(null!=b)for(g in v=d,b)B(c,g,null,b[g],v);null!=c.text&&(""!==c.text?h.textContent=c.text:c.children=[u("#",void 0,void 0,c.text,void 0,void 0)]);null!=c.children&&(g=c.children,e(h,g,0,g.length,a,null,d),a=c.attrs,"select"===c.tag&&null!=a&&("value"in a&&B(c,"value",null,a.value,void 0),"selectedIndex"in a&&
B(c,"selectedIndex",null,a.selectedIndex,void 0)));return h}else{c.state||(c.state={});Q(c.state,c.tag);z(c.tag,c,a);c.instance=u.normalize(c.tag.view.call(c.state,c));if(null!=c.instance){if(c.instance===c)throw Error("A view cannot return the vnode it received as arguments");a=n(c.instance,a,d);c.dom=c.instance.dom;c.domSize=null!=c.dom?c.instance.domSize:0;c=a}else c.domSize=0,c=G;return c}}function f(c){var a={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",
colgroup:"table",col:"colgroup"}[(c.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",a=q.createElement(a);a.innerHTML=c.children;c.dom=a.firstChild;c.domSize=a.childNodes.length;c=q.createDocumentFragment();for(var d;d=a.firstChild;)c.appendChild(d);return c}function k(c,a,d,b,f,k){if(a!==d&&(null!=a||null!=d))if(null==a)e(c,d,0,d.length,b,f,void 0);else if(null==d)g(c,a,0,a.length,d);else{var v;a:{if(null!=a.pool&&Math.abs(a.pool.length-d.length)<=Math.abs(a.length-d.length)&&(v=d[0]&&d[0].children&&
d[0].children.length||0,Math.abs((a.pool[0]&&a.pool[0].children&&a.pool[0].children.length||0)-v)<=Math.abs((a[0]&&a[0].children&&a[0].children.length||0)-v))){v=!0;break a}v=!1}v&&(a=a.concat(a.pool));if(a.length===d.length&&null!=d[0]&&null==d[0].key)for(var l=0;l<a.length;l++)a[l]===d[l]||null==a[l]&&null==d[l]||(null==a[l]?p(c,n(d[l],b,k),t(a,l+1,f)):null==d[l]?g(c,a,l,l+1,d):h(c,a[l],d[l],b,t(a,l+1,f),v,k),v&&a[l].tag===d[l].tag&&p(c,m(a[l]),t(a,l+1,f)));else{for(var w=l=0,r=a.length-1,A=d.length-
1,B;r>=l&&A>=w;){var y=a[l],q=d[w];if(y!==q||v)if(null!=y&&null!=q&&y.key===q.key)l++,w++,h(c,y,q,b,t(a,l,f),v,k),v&&y.tag===q.tag&&p(c,m(y),f);else if(y=a[r],y!==q||v)if(null!=y&&null!=q&&y.key===q.key)h(c,y,q,b,t(a,r+1,f),v,k),(v||w<A)&&p(c,m(y),t(a,l,f)),r--,w++;else break;else r--,w++;else l++,w++}for(;r>=l&&A>=w;){y=a[r];q=d[A];if(y!==q||v)if(null!=y&&null!=q&&y.key===q.key)h(c,y,q,b,t(a,r+1,f),v,k),v&&y.tag===q.tag&&p(c,m(y),f),null!=y.dom&&(f=y.dom),r--;else{if(!B){B=a;var y=r,u={},x;for(x=
0;x<y;x++){var C=B[x];null!=C&&(C=C.key,null!=C&&(u[C]=x))}B=u}null!=q&&(y=B[q.key],null!=y?(u=a[y],h(c,u,q,b,t(a,r+1,f),v,k),p(c,m(u),f),a[y].skip=!0,null!=u.dom&&(f=u.dom)):(q=n(q,b,void 0),p(c,q,f),f=q))}else r--;A--;if(A<w)break}e(c,d,w,A+1,b,f,k);g(c,a,l,r+1,d)}}}function h(c,a,d,b,e,g,l){var r=a.tag;if(r===d.tag){d.state=a.state;d.events=a.events;var q;var t;null!=d.attrs&&"function"===typeof d.attrs.onbeforeupdate&&(q=d.attrs.onbeforeupdate.call(d.state,d,a));"string"!==typeof d.tag&&"function"===
typeof d.tag.onbeforeupdate&&(t=d.tag.onbeforeupdate.call(d.state,d,a));void 0===q&&void 0===t||q||t?q=!1:(d.dom=a.dom,d.domSize=a.domSize,d.instance=a.instance,q=!0);if(!q)if(null!=d.attrs&&x(d.attrs,d,b,g),"string"===typeof r)switch(r){case "#":a.children.toString()!==d.children.toString()&&(a.dom.nodeValue=d.children);d.dom=a.dom;break;case "<":a.children!==d.children?(m(a),p(c,f(d),e)):(d.dom=a.dom,d.domSize=a.domSize);break;case "[":k(c,a.children,d.children,b,e,l);a=0;b=d.children;d.dom=null;
if(null!=b){for(var z=0;z<b.length;z++)c=b[z],null!=c&&null!=c.dom&&(null==d.dom&&(d.dom=c.dom),a+=c.domSize||1);1!==a&&(d.domSize=a)}break;default:c=l;e=d.dom=a.dom;switch(d.tag){case "svg":c="http://www.w3.org/2000/svg";break;case "math":c="http://www.w3.org/1998/Math/MathML"}"textarea"===d.tag&&(null==d.attrs&&(d.attrs={}),null!=d.text&&(d.attrs.value=d.text));g=a.attrs;l=d.attrs;r=c;if(null!=l)for(z in l)B(d,z,g&&g[z],l[z],r);if(null!=g)for(z in g)null!=l&&z in l||("className"===z&&(z="class"),
"o"!==z[0]||"n"!==z[1]||A(z)?"key"!==z&&d.dom.removeAttribute(z):C(d,z,void 0));null!=a.text&&null!=d.text&&""!==d.text?a.text.toString()!==d.text.toString()&&(a.dom.firstChild.nodeValue=d.text):(null!=a.text&&(a.children=[u("#",void 0,void 0,a.text,void 0,a.dom.firstChild)]),null!=d.text&&(d.children=[u("#",void 0,void 0,d.text,void 0,void 0)]),k(e,a.children,d.children,b,null,c))}else d.instance=u.normalize(d.tag.view.call(d.state,d)),x(d.tag,d,b,g),null!=d.instance?(null==a.instance?p(c,n(d.instance,
b,l),e):h(c,a.instance,d.instance,b,e,g,l),d.dom=d.instance.dom,d.domSize=d.instance.domSize):null!=a.instance?(w(c,a.instance,null),d.dom=void 0,d.domSize=0):(d.dom=a.dom,d.domSize=a.domSize)}else w(c,a,null),p(c,n(d,b,void 0),e)}function m(c){var a=c.domSize;if(null!=a||null==c.dom){var d=q.createDocumentFragment();if(0<a){for(c=c.dom;--a;)d.appendChild(c.nextSibling);d.insertBefore(c,d.firstChild)}return d}return c.dom}function t(c,a,d){for(;a<c.length;a++)if(null!=c[a]&&null!=c[a].dom)return c[a].dom;
return d}function p(c,a,d){d&&d.parentNode?c.insertBefore(a,d):c.appendChild(a)}function g(c,a,d,b,e){for(;d<b;d++){var g=a[d];null!=g&&(g.skip?g.skip=!1:w(c,g,e))}}function l(c){var a=!1;return function(){a||(a=!0,c())}}function w(c,a,d){function b(){if(++g===e&&(r(a),a.dom)){var f=a.domSize||1;if(1<f)for(var l=a.dom;--f;)c.removeChild(l.nextSibling);null!=a.dom.parentNode&&c.removeChild(a.dom);if(f=null!=d&&null==a.domSize)f=a.attrs,f=!(null!=f&&(f.oncreate||f.onupdate||f.onbeforeremove||f.onremove));
f&&"string"===typeof a.tag&&(d.pool?d.pool.push(a):d.pool=[a])}}var e=1,g=0;a.attrs&&a.attrs.onbeforeremove&&(e++,a.attrs.onbeforeremove.call(a.state,a,l(b)));"string"!==typeof a.tag&&a.tag.onbeforeremove&&(e++,a.tag.onbeforeremove.call(a.state,a,l(b)));b()}function r(c){c.attrs&&c.attrs.onremove&&c.attrs.onremove.call(c.state,c);"string"!==typeof c.tag&&c.tag.onremove&&c.tag.onremove.call(c.state,c);if(null!=c.instance)r(c.instance);else if(c=c.children,c instanceof Array)for(var a=0;a<c.length;a++){var d=
c[a];null!=d&&r(d)}}function B(c,a,d,b,e){var f=c.dom;if("key"!==a&&(d!==b||"value"===a||"checked"===a||"selectedIndex"===a||"selected"===a&&c.dom===q.activeElement||"object"===typeof b)&&"undefined"!==typeof b&&!A(a)){var g=a.indexOf(":");if(-1<g&&"xlink"===a.substr(0,g))f.setAttributeNS("http://www.w3.org/1999/xlink",a.slice(g+1),b);else if("o"===a[0]&&"n"===a[1]&&"function"===typeof b)C(c,a,b);else if("style"===a)if(c=d,c===b&&(f.style.cssText="",c=null),null==b)f.style.cssText="";else if("string"===
typeof b)f.style.cssText=b;else{"string"===typeof c&&(f.style.cssText="");for(var l in b)f.style[l]=b[l];if(null!=c&&"string"!==typeof c)for(l in c)l in b||(f.style[l]="")}else if(a in f&&"href"!==a&&"list"!==a&&"form"!==a&&"width"!==a&&"height"!==a&&void 0===e){if("input"!==c.tag||"value"!==a||c.dom.value!==b||c.dom!==q.activeElement)f[a]=b}else"boolean"===typeof b?b?f.setAttribute(a,""):f.removeAttribute(a):f.setAttribute("className"===a?"class":a,b)}}function A(c){return"oninit"===c||"oncreate"===
c||"onupdate"===c||"onremove"===c||"onbeforeremove"===c||"onbeforeupdate"===c}function C(c,a,b){var e=c.dom,f=function(a){var c=b.call(e,a);"function"===typeof D&&D.call(e,a);return c};if(a in e)e[a]=f;else{var g=a.slice(2);void 0===c.events&&(c.events={});null!=c.events[a]&&e.removeEventListener(g,c.events[a],!1);"function"===typeof b&&(c.events[a]=f,e.addEventListener(g,c.events[a],!1))}}function z(c,a,b){"function"===typeof c.oninit&&c.oninit.call(a.state,a);"function"===typeof c.oncreate&&b.push(c.oncreate.bind(a.state,
a))}function x(c,a,b,e){e?z(c,a,b):"function"===typeof c.onupdate&&b.push(c.onupdate.bind(a.state,a))}function Q(c,a){Object.keys(a).forEach(function(b){c[b]=a[b]})}var q=b.document,G=q.createDocumentFragment(),D;return{render:function(c,a){if(!c)throw Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var b=[],e=q.activeElement;null==c.vnodes&&(c.textContent="");a instanceof Array||(a=[a]);k(c,c.vnodes,u.normalizeChildren(a),b,null,void 0);c.vnodes=a;for(var f=
0;f<b.length;f++)b[f]();q.activeElement!==e&&e.focus()},setEventCallback:function(c){return D=c}}}(window),R=function(b){var e=0,n=null,f="function"===typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(k){var h=Date.now();!0===k||0===e||16<=h-e?(e=h,b()):null===n&&(n=f(function(){n=null;b();e=Date.now()},16-(h-e)))}},S=function(b,e,n,f){f=R(f);null!=e&&e.setEventCallback(function(b){!1!==b.redraw&&n.publish()});null!=n&&(b.redraw&&n.unsubscribe(b.redraw),n.subscribe(f));
return b.redraw=f};x.mount=function(b,e){return function(n,f){null===f?(b.render(n,[]),e.unsubscribe(n.redraw),delete n.redraw):S(n,b,e,function(){b.render(n,u(f,void 0,void 0,void 0,void 0,void 0))})()}}(N,I);var J=function(b){if(""===b||null==b)return{};"?"===b.charAt(0)&&(b=b.slice(1));b=b.split("&");for(var e={},n={},f=0;f<b.length;f++){var k=b[f].split("="),h=decodeURIComponent(k[0]),k=2===k.length?decodeURIComponent(k[1]):"",m=Number(k);""!==k&&!isNaN(m)||"NaN"===k?k=m:"true"===k?k=!0:"false"===
k&&(k=!1);var m=h.split(/\]\[?|\[/),t=e;-1<h.indexOf("[")&&m.pop();for(var p=0;p<m.length;p++){var h=m[p],g=m[p+1],g=""==g||!isNaN(parseInt(g,10)),l=p===m.length-1;""===h&&(h=m.slice(0,p).join(),null==n[h]&&(n[h]=0),h=n[h]++);null==t[h]&&(t[h]=l?k:g?[]:{});t=t[h]}}return e},T=function(b){function e(e){var f=b.location[e].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);"pathname"===e&&"/"!==f[0]&&(f="/"+f);return f}function n(b){return function(){null==g&&(g=t(function(){g=null;b()}))}}function f(b,
e,f){var g=b.indexOf("?"),h=b.indexOf("#"),k=-1<g?g:-1<h?h:b.length;if(-1<g){var g=J(b.slice(g+1,-1<h?h:b.length)),m;for(m in g)e[m]=g[m]}if(-1<h)for(m in e=J(b.slice(h+1)),e)f[m]=e[m];return b.slice(0,k)}function k(){switch(p.charAt(0)){case "#":return e("hash").slice(p.length);case "?":return e("search").slice(p.length)+e("hash");default:return e("pathname").slice(p.length)+e("search")+e("hash")}}function h(e,g,h){var k={},n={};e=f(e,k,n);if(null!=g){for(var t in g)k[t]=g[t];e=e.replace(/:([^\/]+)/g,
function(b,e){delete k[e];return g[e]})}(t=E(k))&&(e+="?"+t);(n=E(n))&&(e+="#"+n);m?(h&&h.replace?b.history.replaceState(null,null,p+e):b.history.pushState(null,null,p+e),b.onpopstate()):b.location.href=p+e}var m="function"===typeof b.history.pushState,t="function"===typeof setImmediate?setImmediate:setTimeout,p="#!",g;return{setPrefix:function(b){p=b},getPath:k,setPath:h,defineRoutes:function(e,g,h){function t(){var b=k(),m={},n=f(b,m,m),p;for(p in e){var u=new RegExp("^"+p.replace(/:[^\/]+?\.{3}/g,
"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(u.test(n)){n.replace(u,function(){for(var f=p.match(/:[^\/]+/g)||[],h=[].slice.call(arguments,1,-2),k=0;k<f.length;k++)m[f[k].replace(/:|\./g,"")]=decodeURIComponent(h[k]);g(e[p],m,b,p)});return}}h(b,m)}m?b.onpopstate=n(t):"#"===p.charAt(0)&&(b.onhashchange=t);t();return t},link:function(b){b.dom.setAttribute("href",p+b.attrs.href);b.dom.onclick=function(b){b.preventDefault();b.redraw=!1;b=this.getAttribute("href");0===b.indexOf(p)&&(b=b.slice(p.length));
h(b,void 0,void 0)}}}};x.route=function(b,e){function n(b){return b}var f=T(b),k,h,m,t,p,g={view:function(){return[m(u(h,null,t,void 0,void 0,void 0))]}},l=function(b,l,u){h="div";m=n;t=null;e(b,g);f.defineRoutes(u,function(e,f,g){var l="function"!==typeof e.view,r=n,q=k=function(n){q===k&&(k=null,h=null!=n?n:l?"div":e,m=r,t=f,p=g,b.redraw(!0))},u=function(){q()};l&&("function"===typeof e.render&&(r=e.render.bind(e)),"function"===typeof e.onmatch&&(u=e.onmatch));u.call(e,q,f,g)},function(){f.setPath(l,
null,{replace:!0})})};l.link=f.link;l.prefix=f.setPrefix;l.set=f.setPath;l.get=function(){return p};return l}(window,x.mount);x.withAttr=function(b,e,n){return function(f){return e.call(n||this,b in f.currentTarget?f.currentTarget[b]:f.currentTarget.getAttribute(b))}};x.prop=M;x.render=N.render;x.redraw=I.publish;x.request=H.request;x.jsonp=H.jsonp;x.parseQueryString=J;x.buildQueryString=E;x.version="1.0.0";"undefined"!==typeof module?module.exports=x:window.m=x};function tableCell(text) {
  return m('td.TableCell', {
    onclick: function onclick(e) {
      console.log('Clicked ' + text);
      e.stopPropagation();
    }
  }, text);
};

function tableRow(data) {
  return m(("tr[data-id=" + (data.id) + "]"), {
      class: data.active ? 'TableRow active' : 'TableRow'
    }, [
      tableCell(("#" + (data.id))),
      data.props.map(tableCell)
    ]);
};

var Table = {
  view: function view(vnode) {
    return m('table.Table', [
      m('tbody', [
        vnode.attrs.data.items.map(tableRow)
      ])
    ]);
  }
};

var AnimBox = {
  view: function view$1(vnode) {
    return m(("div.AnimBox[data-id=" + (vnode.attrs.data.id) + "]"), {
      style: {
        borderRadius: (vnode.attrs.data.time % 10).toString() + 'px',
        background: 'rgba(0,0,0,' + (0.5 + ((vnode.attrs.data.time % 10) / 10)).toString() + ')'
      }
    });
  }
};

var Anim = {
  view: function view$2(vnode) {
    return m('div.Anim', [
      vnode.attrs.data.items.map(function (i) { return m(AnimBox, { key: i.id, data: i }); })
    ]);
  }
};

var TreeLeaf = {
  view: function view$3(vnode) {
    return m('li.TreeLeaf', vnode.attrs.data.id);
  }
};

var TreeNode = {
  view: function view$4(vnode) {
    return m('ul.TreeNode', [
      vnode.attrs.data.children.map(function (c) { return c.container ?
          m(TreeNode, { key: c.id, data: c })
        :
          m(TreeLeaf, { key: c.id, data: c }); }
        )
    ]);
  }
};

var Tree = {
  onbeforeupdate: function onbeforeupdate(vnode) {
    if (this.root === vnode.attrs.data.root) return false
  },

  view: function view$5(vnode) {
    this.root = vnode.attrs.data.root
    return m('div.Tree', m(TreeNode, { data: vnode.attrs.data.root }));
  }
};



var Main = {
  oninit: function oninit(vnode) {
    var location = vnode.attrs.data.location;
    if (location === 'table') {
      vnode.data = m(Table, { data: vnode.attrs.data.table });
    } else if (location === 'anim') {
      vnode.data = m(Anim, { data: vnode.attrs.data.anim });
    } else if (location === 'tree') {
      vnode.data = m(Tree, { data: vnode.attrs.data.tree });
    }
  },
  view: function view$6(vnode) {
    return m('div.Main', vnode.data);
  }
};

uibench.init('Mithril', '1.0.0');

document.addEventListener('DOMContentLoaded', function (e) {
  var container = document.getElementById('App');

  uibench.run(
    function (state) {
      m.mount(container, {
        view: function view(vnode) {
          return m(Main, { data: state });
        }
      });
    },
    function (samples) {
      m.mount(container, {
        view: function view(vnode) {
          return m('pre', JSON.stringify(samples, null, ' '));
        }
      });
    }
  );
});
