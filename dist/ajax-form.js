parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WsoT":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){return u(t)||i(t,e)||n(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(f){o=!0,i=f}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}function u(t){if(Array.isArray(t))return t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),t}function s(t){return function(){var e,r=_(t);if(d()){var n=_(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)}}function l(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?p(e):r}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function m(t){var e="function"==typeof Map?new Map:void 0;return(m=function(t){if(null===t||!v(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return h(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),b(r,t)})(t)}function h(t,e,r){return(h=d()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&b(o,r.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function v(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0});var g=function(t){y(n,m(HTMLElement));var r=s(n);function n(){return c(this,n),r.call(this)}return a(n,[{key:"_serializeFormToJson",value:function(){var t=this;if(!this._form)return null;var e={};return this._form.childNodes.forEach(function(r){if(r.nodeType===t.ELEMENT_NODE&&"INPUT"===r.nodeName){var n=r;n.id.length>0&&(e[n.id]=n.value)}}),e}},{key:"_fire",value:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.dispatchEvent(new CustomEvent(t,{bubbles:r,detail:e}))}},{key:"submit",value:function(t){var r=this;if(t&&t.preventDefault(),console.log(t),this._form){var n=this._serializeFormToJson();try{fetch(this._form.action,{method:"POST",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(n)}).then(function(t){return Promise.all([t.text(),Promise.resolve(t)])}).then(function(t){var n=e(t,2),o=n[0],i=n[1];return r._fire(i.ok?"ajax-form.success":"ajax-form.error",{message:function(){return""===o?i.statusText:o},res:i})}).catch(function(t){return r._fire("ajax-form.error",{message:function(){return t.message},err:t})})}catch(o){this._fire("ajax-form.error",{message:function(){return o.message},err:o})}}return!1}},{key:"reset",value:function(t){t&&t.preventDefault(),console.log(t),this._form&&this._form.reset()}},{key:"_init",value:function(){var t=this;this._form&&(console.log("init"),this._form.addEventListener("submit",function(e){return t.submit(e)}),this._form.addEventListener("reset",function(e){return t.reset(e)}))}},{key:"connectedCallback",value:function(){var t=this,e=new MutationObserver(function(r){var n=r.find(function(t){return"FORM"===t.addedNodes[0].nodeName});n&&(t._form=n.addedNodes[0],t._init()),e.disconnect()});e.observe(this,{childList:!0})}},{key:"template",get:function(){var t=document.createElement("template");return t.innerHTML="\n          <slot></slot>\n        ",t}}]),n}();exports.AjaxFormElement=g;try{customElements.define("ajax-form",g)}catch(O){console.dir(O)}
},{}]},{},["WsoT"], null)
//# sourceMappingURL=/ajax-form.js.map