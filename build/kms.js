/*! For license information please see kms.js.LICENSE.txt */
(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function c(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}e.r(t),e.d(t,{AWSConfig:()=>O,InvalidAWSConfigError:()=>S,InvalidSignatureError:()=>me,KMSClient:()=>Ne,KMSDataKey:()=>ze,KMSServiceError:()=>qe});var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_protocol",void 0),c(this,"_hostname",void 0),c(this,"_port",void 0);var r=!t.startsWith("http://")&&!t.startsWith("https://")?"".concat(e.DEFAULT_PROTOCOL,"://").concat(t):t,o=r.match(/^https?:/),i=n(r.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=o?o[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=i.split(":")[0],this._port=i.split(":")[1]?parseInt(i.split(":")[1]):void 0}var t,r,o;return t=e,(r=[{key:"copy",value:function(){return new e(this.href)}},{key:"host",get:function(){return this._port?"".concat(this._hostname,":").concat(this._port):this._hostname},set:function(e){var t=n(e.split(":"),2),r=t[0],o=t[1];this._hostname=r,this._port=o?parseInt(o):void 0}},{key:"hostname",get:function(){return this._hostname},set:function(e){this._hostname=e}},{key:"href",get:function(){return"".concat(this.protocol,"://").concat(this.host)},set:function(t){var r=t.match(/^https?:/),o=n(t.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=r?r[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=o.split(":")[0],this._port=o.split(":")[1]?parseInt(o.split(":")[1]):void 0}},{key:"port",get:function(){return this._port},set:function(e){this._port=e}},{key:"protocol",get:function(){return this._protocol},set:function(e){this._protocol=e}}])&&i(t.prototype,r),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e){var t=y();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function l(e){var t="function"==typeof Map?new Map:void 0;return l=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,d(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,e)},l(e)}function p(e,t,r){return p=y()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&h(o,r.prototype),o},p.apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function m(e,t,r){return t&&b(e.prototype,t),r&&b(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e,t,r){return(t=w(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}c(u,"DEFAULT_PROTOCOL","https");var O=function(){function e(t){if(v(this,e),g(this,"region",void 0),g(this,"accessKeyId",void 0),g(this,"secretAccessKey",void 0),g(this,"sessionToken",void 0),g(this,"endpoint",void 0),!t.region||""===t.region)throw new S('invalid AWS region; reason: expected a valid AWS region name (e.g. "us-east-1"), got `'.concat(t.region,"`"));if(!t.accessKeyId||""===t.accessKeyId)throw new S("invalid AWS access key ID; reason: expected a non empty string, got `".concat(t.accessKeyId,"`"));if(t.accessKeyId.length<16||t.accessKeyId.length>128)throw new S("invalid AWS access key ID; reason: size should be between 16 and 128 characters, got ".concat(t.accessKeyId.length));if(!t.secretAccessKey||""===t.secretAccessKey)throw new S("invalid AWS secret access key; reason: expected a non empty string, got `".concat(t.secretAccessKey,"`"));if(t.secretAccessKey.length<16||t.secretAccessKey.length>128)throw new S("invalid AWS secret access key; reason: size should be between 16 and 128 characters, got ".concat(t.secretAccessKey.length));this.region=t.region,this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey,void 0!==t.sessionToken&&(this.sessionToken=t.sessionToken),void 0!==t.endpoint&&("string"==typeof t.endpoint?this.endpoint=new u(t.endpoint):this.endpoint=t.endpoint)}return m(e,null,[{key:"fromEnvironment",value:function(t){return new e({region:__ENV.AWS_REGION,accessKeyId:__ENV.AWS_ACCESS_KEY_ID,secretAccessKey:__ENV.AWS_SECRET_ACCESS_KEY,sessionToken:__ENV.AWS_SESSION_TOKEN,endpoint:null==t?void 0:t.endpoint})}}]),e}(),S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(r,e);var t=f(r);function r(e){return v(this,r),t.call(this,e)}return m(r)}(l(Error));const j=require("k6/http");var _=e.n(j);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,A(n.key),n)}}function k(e,t,r){return(t=A(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===P(t)?t:String(t)}var x=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"awsConfig",void 0),k(this,"serviceName",void 0),k(this,"_endpoint",void 0),this.awsConfig=t,this.serviceName=r,null!=t.endpoint&&(this._endpoint=t.endpoint)}var t,r,n;return t=e,(r=[{key:"endpoint",get:function(){return null==this._endpoint&&(this._endpoint=new u("https://".concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"))),this._endpoint},set:function(e){this._endpoint=e}},{key:"scheme",set:function(e){this._scheme=e}}])&&E(t.prototype,r),n&&E(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C="X-Amz-Date",T="X-Amz-Signature",L="X-Amz-Security-Token",K="x-amz-content-sha256",I=C.toLowerCase(),R=T.toLowerCase(),D="X-Amz-Target".toLowerCase(),N=L.toLowerCase(),H="authorization",z=[H,I,"date"],q="host",M={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},W="aws4_request",B="AWS4-HMAC-SHA256";const F=require("k6/html");function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ee(n.key),n)}}function X(e){var t=Y();return function(){var r,n=Z(e);if(t){var o=Z(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}(this,r)}}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e){var t="function"==typeof Map?new Map:void 0;return Q=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return V(e,arguments,Z(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),$(n,e)},Q(e)}function V(e,t,r){return V=Y()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&$(o,r.prototype),o},V.apply(null,arguments)}function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function ee(e){var t=function(e,t){if("object"!==G(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===G(t)?t:String(t)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(i,e);var t,r,n,o=X(i);function i(e,t){var r,n,c,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r=o.call(this,e),n=J(r),a=void 0,(c=ee(c="code"))in n?Object.defineProperty(n,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[c]=a,r.name="AWSError",r.code=t,r}return t=i,n=[{key:"parseXML",value:function(e){var t=(0,F.parseHTML)(e);return new i(t.find("Message").text(),t.find("Code").text())}}],(r=null)&&U(t.prototype,r),n&&U(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(Q(Error));const re=require("k6/crypto");var ne=e.n(re);function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ie(e,t)}function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ae(e);if(t){var o=ae(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===oe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function ae(e){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ae(e)}function ue(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){de(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ve(n.key),n)}}function he(e,t,r){return t&&ye(e.prototype,t),r&&ye(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,r){return(t=ve(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e){var t=function(e,t){if("object"!==oe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===oe(t)?t:String(t)}var be=function(){function e(t){var r=t.service,n=t.region,o=t.credentials,i=t.uriEscapePath,c=t.applyChecksum;pe(this,e),de(this,"service",void 0),de(this,"region",void 0),de(this,"credentials",void 0),de(this,"uriEscapePath",void 0),de(this,"applyChecksum",void 0),this.service=r,this.region=n,this.credentials=o,this.uriEscapePath="boolean"!=typeof i||i,this.applyChecksum="boolean"!=typeof c||c}return he(e,[{key:"sign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=le(le({},{signingDate:new Date,unsignableHeaders:new Set,signableHeaders:new Set}),t),n=we(r.signingDate),o=n.longDate,i=n.shortDate,c=r.signingService||this.service,a=r.signingRegion||this.region,u="".concat(i,"/").concat(a,"/").concat(c,"/").concat(W);e.headers[q]=e.endpoint.hostname;for(var s=0,f=Object.keys(e.headers);s<f.length;s++){var l=f[s];z.indexOf(l.toLowerCase())>-1&&delete e.headers[l]}e.headers[I]=o,this.credentials.sessionToken&&(e.headers[N]=this.credentials.sessionToken),ArrayBuffer.isView(e.body)&&(e.body=e.body.buffer),e.body||(e.body="");var p=this.computePayloadHash(e);!function(e,t){e=e.toLowerCase();for(var r=0,n=Object.keys(t);r<n.length;r++)if(e===n[r].toLowerCase())return!0;return!1}(K,e.headers)&&this.applyChecksum&&(e.headers[K]=p);var y=this.computeCanonicalHeaders(e,r.unsignableHeaders,r.signableHeaders),h=this.calculateSignature(o,u,this.deriveSigningKey(this.credentials,c,a,i),this.createCanonicalRequest(e,y,p));e.headers[H]="".concat(B," ")+"Credential=".concat(this.credentials.accessKeyId,"/").concat(u,", ")+"SignedHeaders=".concat(Object.keys(y).sort().join(";"),", ")+"Signature=".concat(h);var d=e.endpoint.href;return e.path&&(d+=e.path),e.query&&(d+="?".concat(this.serializeQueryParameters(e.query))),le({url:d},e)}},{key:"presign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.signingDate,n=void 0===r?new Date:r,o=t.expiresIn,i=void 0===o?3600:o,c=t.unsignableHeaders,a=t.unhoistableHeaders,u=t.signableHeaders,s=t.signingRegion,f=t.signingService,l=we(n),p=l.longDate,y=l.shortDate,h=s||this.region,d=f||this.service;if(i>604800)throw new me("Signature version 4 presigned URLs can't be valid for more than 7 days");var v="".concat(y,"/").concat(h,"/").concat(d,"/").concat(W),b=this.moveHeadersToQuery(e,{unhoistableHeaders:a});b.headers[q]=e.endpoint.hostname,this.credentials.sessionToken&&(b.query[L]=this.credentials.sessionToken),b.query["X-Amz-Algorithm"]=B,b.query["X-Amz-Credential"]="".concat(this.credentials.accessKeyId,"/").concat(v),b.query[C]=p,b.query["X-Amz-Expires"]=i.toString(10);var m=this.computeCanonicalHeaders(b,c,u);b.query["X-Amz-SignedHeaders"]=Object.keys(m).sort().join(";");var g=this.deriveSigningKey(this.credentials,d,h,y),w=this.computePayloadHash(e),O=this.createCanonicalRequest(b,m,w);b.query[T]=this.calculateSignature(p,v,g,O);var S=b.endpoint.href;return b.path&&(S+=b.path),b.query&&(S+="?".concat(this.serializeQueryParameters(b.query))),le({url:S},b)}},{key:"createCanonicalRequest",value:function(e,t,r){var n=Object.keys(t).sort(),o=n.map((function(e){return"".concat(e,":").concat(t[e])})).join("\n"),i=n.join(";");return"".concat(e.method,"\n")+"".concat(this.computeCanonicalURI(e),"\n")+"".concat(this.computeCanonicalQuerystring(e),"\n")+"".concat(o,"\n\n")+"".concat(i,"\n")+"".concat(r)}},{key:"createStringToSign",value:function(e,t,r){var n=ne().sha256(r,"hex");return"".concat(B,"\n")+"".concat(e,"\n")+"".concat(t,"\n")+"".concat(n)}},{key:"calculateSignature",value:function(e,t,r,n){var o=this.createStringToSign(e,t,n);return ne().hmac("sha256",r,o,"hex")}},{key:"deriveSigningKey",value:function(e,t,r,n){var o=e.secretAccessKey,i=ne().hmac("sha256","AWS4"+o,n,"binary"),c=ne().hmac("sha256",i,r,"binary"),a=ne().hmac("sha256",c,t,"binary");return ne().hmac("sha256",a,"aws4_request","binary")}},{key:"computeCanonicalURI",value:function(e){var t=e.path;if(this.uriEscapePath){var r,n=[],o=ue(t.split("/"));try{for(o.s();!(r=o.n()).done;){var i=r.value;0!==(null==i?void 0:i.length)&&("."!==i&&(".."===i?n.pop():n.push(i)))}}catch(e){o.e(e)}finally{o.f()}var c=null!=t&&t.startsWith("/")?"/":"",a=n.join("/"),u=n.length>0&&null!=t&&t.endsWith("/")?"/":"",s="".concat(c).concat(a).concat(u);return encodeURIComponent(s).replace(/%2F/g,"/")}return t}},{key:"computeCanonicalQuerystring",value:function(e){var t,r=e.query,n=void 0===r?{}:r,o=[],i={},c=function(e){if(e.toLowerCase()===R)return"continue";o.push(e);var t=n[e];"string"==typeof t?i[e]="".concat(ge(e),"=").concat(ge(t)):Array.isArray(t)&&(i[e]=t.slice(0).sort().reduce((function(t,r){return t.concat(["".concat(ge(e),"=").concat(ge(r))])}),[]).join("&"))},a=ue(Object.keys(n).sort());try{for(a.s();!(t=a.n()).done;)c(t.value)}catch(e){a.e(e)}finally{a.f()}return o.map((function(e){return i[e]})).filter((function(e){return e})).join("&")}},{key:"computeCanonicalHeaders",value:function(e,t,r){var n,o=e.headers,i={},c=ue(Object.keys(o).sort());try{for(c.s();!(n=c.n()).done;){var a=n.value;if(null!=o[a]){var u=a.toLowerCase();(u in M||null!=t&&t.has(u))&&(!r||r&&!r.has(u))||(i[u]=o[a].trim().replace(/\s+/g," "))}}}catch(e){c.e(e)}finally{c.f()}return i}},{key:"computePayloadHash",value:function(e){var t,r=e.headers,n=e.body;return r[K]?r[K]:null==n?"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855":"string"==typeof n||(t=n,"function"==typeof ArrayBuffer&&(t instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(t)))?ne().sha256(n,"hex").toLowerCase():ArrayBuffer.isView(n)?ne().sha256(n.buffer,"hex").toLowerCase():"UNSIGNED-PAYLOAD"}},{key:"moveHeadersToQuery",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=JSON.parse(JSON.stringify(e)),n=r.headers,o=r.query,i=void 0===o?{}:o,c=0,a=Object.keys(n);c<a.length;c++){var u,s=a[c],f=s.toLowerCase();"x-amz-"!==f.slice(0,6)||null!==(u=t.unhoistableHeaders)&&void 0!==u&&u.has(f)||(i[s]=n[s],delete n[s])}return le(le({},r),{},{headers:n,query:i})}},{key:"serializeQueryParameters",value:function(e,t){var r,n=[],o={},i=function(r){if(null!=t&&t.includes(r.toLowerCase()))return"continue";n.push(r);var i=e[r];"string"==typeof i?o[r]="".concat(ge(r),"=").concat(ge(i)):Array.isArray(i)&&(o[r]=i.slice(0).sort().reduce((function(e,t){return e.concat(["".concat(ge(r),"=").concat(ge(t))])}),[]).join("&"))},c=ue(Object.keys(e).sort());try{for(c.s();!(r=c.n()).done;)i(r.value)}catch(e){c.e(e)}finally{c.f()}return n.map((function(e){return o[e]})).filter((function(e){return e})).join("&")}}]),e}(),me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(r,e);var t=ce(r);function r(e,n){var o;return pe(this,r),(o=t.call(this,e,n)).name="InvalidSignatureError",o}return he(r)}(te);function ge(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}function we(e){var t,r=(t=e,function(e){return"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e}(t).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[\-:]/g,"");return{longDate:r,shortDate:r.slice(0,8)}}function Oe(e){return Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(e)}function Se(){Se=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var i=t&&t.prototype instanceof p?t:p,c=Object.create(i.prototype),a=new P(o||[]);return n(c,"_invoke",{value:O(e,r,a)}),c}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function p(){}function y(){}function h(){}var d={};u(d,i,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(E([])));b&&b!==t&&r.call(b,i)&&(d=b);var m=h.prototype=p.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(n,i,c,a){var u=f(e[n],e,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==Oe(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){o("next",e,c,a)}),(function(e){o("throw",e,c,a)})):t.resolve(l).then((function(e){s.value=e,c(s)}),(function(e){return o("throw",e,c,a)}))}a(u.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function O(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=S(c,r);if(a){if(a===l)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var o=f(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,l;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function E(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=h,n(m,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:y,configurable:!0}),y.displayName=u(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,u(e,a,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},g(w.prototype),u(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new w(s(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},g(m),u(m,a,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=E,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){Re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Pe(e,t,r,n,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(n,o)}function Ee(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){Pe(i,n,o,c,a,"next",e)}function a(e){Pe(i,n,o,c,a,"throw",e)}c(void 0)}))}}function ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,De(n.key),n)}}function xe(e,t,r){return t&&Ae(e.prototype,t),r&&Ae(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Te(e,t)}function Te(e,t){return Te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Te(e,t)}function Le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ie(e);if(t){var o=Ie(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===Oe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Ke(e)}(this,r)}}function Ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ie(e){return Ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ie(e)}function Re(e,t,r){return(t=De(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function De(e){var t=function(e,t){if("object"!==Oe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==Oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Oe(t)?t:String(t)}var Ne=function(e){Ce(o,e);var t,r,n=Le(o);function o(e){var t;return ke(this,o),Re(Ke(t=n.call(this,e,"kms")),"method",void 0),Re(Ke(t),"commonHeaders",void 0),Re(Ke(t),"signature",void 0),t.signature=new be({service:t.serviceName,region:e.region,credentials:{accessKeyId:e.accessKeyId,secretAccessKey:e.secretAccessKey},uriEscapePath:!0,applyChecksum:!1}),t.method="POST",t.commonHeaders={"Content-Type":"application/x-amz-json-1.1"},t}return xe(o,[{key:"listKeys",value:(r=Ee(Se().mark((function e(){var t,r,n;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.signature.sign({method:this.method,endpoint:this.endpoint,path:"/",headers:_e(_e({},this.commonHeaders),{},Re({},D,"TrentService.ListKeys")),body:JSON.stringify({})},{}),e.next=3,_().asyncRequest(this.method,t.url,t.body,{headers:t.headers});case 3:return r=e.sent,this._handle_error(Me.ListKeys,r),n=r.json("Keys"),e.abrupt("return",n.map((function(e){return He.fromJSON(e)})));case 7:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"generateDataKey",value:(t=Ee(Se().mark((function e(t){var r,n,o,i=arguments;return Se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:We.Size256,n=this.signature.sign({method:this.method,endpoint:this.endpoint,path:"/",headers:_e(_e({},this.commonHeaders),{},Re({},D,"TrentService.GenerateDataKey")),body:JSON.stringify({KeyId:t,NumberOfBytes:r})},{}),e.next=4,_().asyncRequest(this.method,n.url,n.body,{headers:n.headers});case 4:return o=e.sent,this._handle_error(Me.GenerateDataKey,o),e.abrupt("return",ze.fromJSON(o.json()));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_handle_error",value:function(e,t){var r=t.error_code;if(0!==r){var n=t.json();if(r>=1400&&r<=1499){var o=n.Message||n.message||n.__type;if("InvalidSignatureException"===n.__type)throw new me(o,n.__type);throw new qe(o,n.__type,e)}if(1500===r)throw new qe("An error occured on the server side","InternalServiceError",e)}}}]),o}(x),He=function(){function e(t,r){ke(this,e),Re(this,"keyArn",void 0),Re(this,"keyId",void 0),this.keyArn=t,this.keyId=r}return xe(e,null,[{key:"fromJSON",value:function(t){return new e(t.KeyArn,t.KeyId)}}]),e}(),ze=function(){function e(t,r,n){ke(this,e),Re(this,"id",void 0),Re(this,"ciphertextBlob",void 0),Re(this,"plaintext",void 0),this.ciphertextBlob=t,this.id=r,this.plaintext=n}return xe(e,null,[{key:"fromJSON",value:function(t){return new e(t.CiphertextBlob,t.KeyId,t.Plaintext)}}]),e}(),qe=function(e){Ce(r,e);var t=Le(r);function r(e,n,o){var i;return ke(this,r),Re(Ke(i=t.call(this,e,n)),"operation",void 0),i.name="KMSServiceError",i.operation=o,i}return xe(r)}(te),Me=function(e){return e.GenerateDataKey="GenerateDataKey",e.ListKeys="ListKeys",e}(Me||{}),We=function(e){return e[e.Size256=32]="Size256",e[e.Size512=64]="Size512",e}(We||{}),Be=exports;for(var Fe in t)Be[Fe]=t[Fe];t.__esModule&&Object.defineProperty(Be,"__esModule",{value:!0})})();
//# sourceMappingURL=kms.js.map