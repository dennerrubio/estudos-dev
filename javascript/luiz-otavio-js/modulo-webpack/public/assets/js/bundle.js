(()=>{"use strict";var n,r,t,e,o,a,i,A,s,c,u,p,d,l,m={402:(n,r,t)=>{t.d(r,{Z:()=>A});var e=t(537),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap);"]),i.push([n.id,'@charset "UTF-8";\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\nhtml {\n  min-height: 100vh;\n}\n\nbody {\n  background-image: linear-gradient(#4267b2, #244380);\n  background-size: cover;\n}\n\nmain {\n  max-width: 800px;\n  margin: 3em auto;\n  background-color: white;\n  padding: 2em;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.315);\n  border-radius: 10px;\n}\n\nmain h1 {\n  font-size: 1.5rem;\n  margin-bottom: 1em;\n  font-weight: 900;\n  color: #4267b2;\n}\n\nmain p {\n  margin-bottom: 1em;\n}\n\nlabel,\ninput {\n  display: block;\n}\n\ninput {\n  margin-top: 0.25em;\n  margin-bottom: 1.5em;\n  width: 100%;\n  padding: 0.35em 0.25em;\n  border-radius: 100px;\n  text-indent: 15px;\n  border: 1px solid black;\n}\n\ninput:focus {\n  outline-color: #324977;\n}\n\ninput[type="button"] {\n  background-color: #4267b2;\n  color: white;\n  border: transparent;\n  padding: 0.5em 0.25em;\n}\n\ninput[type="button"]:hover {\n  background-color: #324977;\n}\n\ninput[type="button"]:active {\n  background-color: #283857;\n}\n',"",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA,gBAAgB;;AAGhB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;EACjC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mDAAmD;EACnD,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,sBAAsB;EACtB,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:['@charset "UTF-8";\r\n@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Roboto", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\nhtml {\r\n  min-height: 100vh;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(#4267b2, #244380);\r\n  background-size: cover;\r\n}\r\n\r\nmain {\r\n  max-width: 800px;\r\n  margin: 3em auto;\r\n  background-color: white;\r\n  padding: 2em;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.315);\r\n  border-radius: 10px;\r\n}\r\n\r\nmain h1 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 1em;\r\n  font-weight: 900;\r\n  color: #4267b2;\r\n}\r\n\r\nmain p {\r\n  margin-bottom: 1em;\r\n}\r\n\r\nlabel,\r\ninput {\r\n  display: block;\r\n}\r\n\r\ninput {\r\n  margin-top: 0.25em;\r\n  margin-bottom: 1.5em;\r\n  width: 100%;\r\n  padding: 0.35em 0.25em;\r\n  border-radius: 100px;\r\n  text-indent: 15px;\r\n  border: 1px solid black;\r\n}\r\n\r\ninput:focus {\r\n  outline-color: #324977;\r\n}\r\n\r\ninput[type="button"] {\r\n  background-color: #4267b2;\r\n  color: white;\r\n  border: transparent;\r\n  padding: 0.5em 0.25em;\r\n}\r\n\r\ninput[type="button"]:hover {\r\n  background-color: #324977;\r\n}\r\n\r\ninput[type="button"]:active {\r\n  background-color: #283857;\r\n}\r\n'],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);e&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},537:n=>{n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=e.base?s[0]+e.base:s[0],u=a[c]||0,p="".concat(c," ").concat(u);a[c]=u+1;var d=t(p),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(l);else{var m=o(l,e);e.byIndex=A,r.splice(A,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);r[A].references--}for(var s=e(n,o),c=0;c<a.length;c++){var u=t(a[c]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=s}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},f={};function g(n){var r=f[n];if(void 0!==r)return r.exports;var t=f[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return g.d(r,{a:r}),r},g.d=(n,r)=>{for(var t in r)g.o(r,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},g.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),g.nc=void 0,n=g(379),r=g.n(n),t=g(795),e=g.n(t),o=g(569),a=g.n(o),i=g(565),A=g.n(i),s=g(216),c=g.n(s),u=g(589),p=g.n(u),d=g(402),(l={}).styleTagTransform=p(),l.setAttributes=A(),l.insert=a().bind(null,"head"),l.domAPI=e(),l.insertStyleElement=c(),r()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals})();
//# sourceMappingURL=bundle.js.map