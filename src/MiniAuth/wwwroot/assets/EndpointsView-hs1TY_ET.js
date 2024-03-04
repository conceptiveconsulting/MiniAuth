import{f as Ae,r as de,g as Ke,o as D,c as U,a as Xe,b as E,F as W,h as pe,w as Ge,v as Qe,n as K,t as Ze,e as Ye}from"./index-kRf7a1dS.js";import{_ as et}from"./BreadcrumbDefault.vue_vue_type_script_setup_true_lang-xeYfSBYW.js";import{V as tt}from"./ViteEnv-k7LM2rlV.js";function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:oe}=Object,z=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>z(t)===e),V=e=>t=>typeof t===e,{isArray:N}=Array,F=V("undefined");function rt(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=A("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const ot=V("string"),R=V("function"),Pe=V("number"),$=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,j=e=>{if(z(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=A("Date"),ct=A("File"),lt=A("Blob"),ut=A("FileList"),ft=e=>$(e)&&R(e.pipe),dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=z(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},pt=A("URLSearchParams"),ht=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),N(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ce(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ne=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ke=e=>!F(e)&&e!==Ne;function Y(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ce(t,s)||s;j(t[o])&&j(r)?t[o]=Y(t[o],r):j(r)?t[o]=Y({},r):N(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&B(arguments[r],n);return t}const mt=(e,t,n,{allOwnKeys:r}={})=>(B(t,(s,o)=>{n&&R(s)?e[o]=Te(s,n):e[o]=s},{allOwnKeys:r}),e),yt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Et=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},St=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!Pe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ot=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),Rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},gt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xt=A("HTMLFormElement"),At=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tt=A("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},_t=e=>{Fe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Pt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return N(e)?r(e):r(String(e).split(t)),n},Ct=()=>{},Nt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),X="abcdefghijklmnopqrstuvwxyz",me="0123456789",Be={DIGIT:me,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+me},kt=(e=16,t=Be.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ft(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bt=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=N(r)?[]:{};return B(r,(i,l)=>{const d=n(i,s+1);!F(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Lt=A("AsyncFunction"),Dt=e=>e&&($(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:N,isArrayBuffer:_e,isBuffer:rt,isFormData:dt,isArrayBufferView:st,isString:ot,isNumber:Pe,isBoolean:it,isObject:$,isPlainObject:j,isUndefined:F,isDate:at,isFile:ct,isBlob:lt,isRegExp:Tt,isFunction:R,isStream:ft,isURLSearchParams:pt,isTypedArray:Ot,isFileList:ut,forEach:B,merge:Y,extend:mt,trim:ht,stripBOM:yt,inherits:bt,toFlatObject:Et,kindOf:z,kindOfTest:A,endsWith:wt,toArray:St,forEachEntry:Rt,matchAll:gt,isHTMLForm:xt,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:Fe,freezeMethods:_t,toObjectSet:Pt,toCamelCase:At,noop:Ct,toFiniteNumber:Nt,findKey:Ce,global:Ne,isContextDefined:ke,ALPHABET:Be,generateString:kt,isSpecCompliantForm:Ft,toJSONObject:Bt,isAsyncFn:Lt,isThenable:Dt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,De={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{De[e]={value:e}});Object.defineProperties(m,De);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ut=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Ue(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ue(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function jt(e){return a.isArray(e)&&!e.some(ee)}const It=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,b){return!a.isUndefined(b[p])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,p,b){let S=f;if(f&&!b&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&jt(f)||(a.isFileList(f)||a.endsWith(p,"[]"))&&(S=a.toArray(f)))return p=Ue(p),S.forEach(function(_,We){!(a.isUndefined(_)||_===null)&&t.append(i===!0?ye([p],We,o):i===null?p:p+"[]",h(_))}),!1}return ee(f)?!0:(t.append(ye(b,p,o),h(f)),!1)}const c=[],y=Object.assign(It,{defaultVisitor:u,convertValue:h,isVisitable:ee});function O(f,p){if(!a.isUndefined(f)){if(c.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));c.push(f),a.forEach(f,function(S,g){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(g)?g.trim():g,p,y))===!0&&O(S,p?p.concat(g):[g])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return O(e),t}function be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&J(e,this,t)}const je=ie.prototype;je.append=function(t,n){this._pairs.push([t,n])};je.toString=function(t){const n=t?function(r){return t.call(this,r,be)}:be;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||Ht,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Mt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ee=Mt,He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:ie,zt=typeof FormData<"u"?FormData:null,Vt=typeof Blob<"u"?Blob:null,$t={isBrowser:!0,classes:{URLSearchParams:qt,FormData:zt,Blob:Vt},protocols:["http","https","file","blob","url","data"]},Me=typeof window<"u"&&typeof document<"u",Jt=(e=>Me&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Wt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Me,hasStandardBrowserEnv:Jt,hasStandardBrowserWebWorkerEnv:vt},Symbol.toStringTag,{value:"Module"})),x={...Wt,...$t};function Kt(e,t){return J(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Gt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Gt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Xt(r),s,n,0)}),n}return null}function Qt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ae={transitional:He,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return J(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Qt(t)):t}],transformResponse:[function(t){const n=this.transitional||ae.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ae.headers[e]={}});const ce=ae,Zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},we=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function en(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const tn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function nn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class v{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,h){const u=k(d);if(!u)throw new Error("header name must be a non-empty string");const c=a.findKey(s,u);(!c||s[c]===void 0||h===!0||h===void 0&&s[c]!==!1)&&(s[c||d]=I(l))}const i=(l,d)=>a.forEach(l,(h,u)=>o(h,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!tn(t)?i(Yt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return en(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const l=a.findKey(r,i);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const l=t?nn(o):String(o).trim();l!==o&&delete n[o],n[l]=I(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[we]=this[we]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=k(i);r[l]||(rn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}v.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(v.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(v);const T=v;function Q(e,t){const n=this||ce,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ze(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,m,{__CANCEL__:!0});function sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const on=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function an(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!an(t)?cn(e,t):t}const ln=x.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function un(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function fn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const h=Date.now(),u=r[o];i||(i=h),n[s]=d,r[s]=h;let c=o,y=0;for(;c!==s;)y+=n[c++],c=c%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const O=u&&h-u;return O?Math.round(y*1e3/O):void 0}}function Se(e,t){let n=0;const r=fn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),h=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&h?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const dn=typeof XMLHttpRequest<"u",pn=dn&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize();let{responseType:i,withXSRFToken:l}=e,d;function h(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}let u;if(a.isFormData(s)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[p,...b]=u?u.split(";").map(S=>S.trim()).filter(Boolean):[];o.setContentType([p||"multipart/form-data",...b].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(p+":"+b))}const y=Ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ie(y,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function O(){if(!c)return;const p=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:e,request:c};sn(function(_){n(_),h()},function(_){r(_),h()},S),c=null}if("onloadend"in c?c.onloadend=O:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(O)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||He;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new m(b,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},x.hasStandardBrowserEnv&&(l&&a.isFunction(l)&&(l=l(e)),l||l!==!1&&ln(y))){const p=e.xsrfHeaderName&&e.xsrfCookieName&&on.read(e.xsrfCookieName);p&&o.set(e.xsrfHeaderName,p)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(b,S){c.setRequestHeader(S,b)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(d=p=>{c&&(r(!p||p.type?new L(null,e,c):p),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d)));const f=un(y);if(f&&x.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},te={http:Ut,xhr:pn};a.forEach(te,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Oe=e=>`- ${e}`,hn=e=>a.isFunction(e)||e===null||e===!1,$e={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!hn(n)&&(r=te[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Oe).join(`
`):" "+Oe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:te};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function Re(e){return Z(e),e.headers=T.from(e.headers),e.data=Q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$e.getAdapter(e.adapter||ce.adapter)(e).then(function(r){return Z(e),r.data=Q.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return ze(r)||(Z(e),r&&r.response&&(r.response.data=Q.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const ge=e=>e instanceof T?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(h,u,c){return a.isPlainObject(h)&&a.isPlainObject(u)?a.merge.call({caseless:c},h,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(h,u,c){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h,c)}else return r(h,u,c)}function o(h,u){if(!a.isUndefined(u))return r(void 0,u)}function i(h,u){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,u)}function l(h,u,c){if(c in t)return r(h,u);if(c in e)return r(void 0,h)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,u)=>s(ge(h),ge(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const c=d[u]||s,y=c(e[u],t[u],u);a.isUndefined(y)&&c!==l||(n[u]=y)}),n}const Je="1.6.7",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};le.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ne={assertOptions:mn,validators:le},P=ne.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=T.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,l.unshift(p.fulfilled,p.rejected))});const h=[];this.interceptors.response.forEach(function(p){h.push(p.fulfilled,p.rejected)});let u,c=0,y;if(!d){const f=[Re.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,h),y=f.length,u=Promise.resolve(n);c<y;)u=u.then(f[c++],f[c++]);return u}y=l.length;let O=n;for(c=0;c<y;){const f=l[c++],p=l[c++];try{O=f(O)}catch(b){p.call(this,b);break}}try{u=Re.call(this,O)}catch(f){return Promise.reject(f)}for(c=0,y=h.length;c<y;)u=u.then(h[c++],h[c++]);return u}getUri(t){t=C(this.defaults,t);const n=Ve(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const H=M;class ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new L(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ue(function(s){t=s}),cancel:t}}}const yn=ue;function bn(e){return function(n){return e.apply(null,n)}}function En(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const wn=re;function ve(e){const t=new H(e),n=Te(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(C(e,s))},n}const w=ve(ce);w.Axios=H;w.CanceledError=L;w.CancelToken=yn;w.isCancel=ze;w.VERSION=Je;w.toFormData=J;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=bn;w.isAxiosError=En;w.mergeConfig=C;w.AxiosHeaders=T;w.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=$e.getAdapter;w.HttpStatusCode=wn;w.default=w;const Sn=w,fe=Sn.create({baseURL:tt.VITE_APP_BASE_API,timeout:5e4,headers:{"Content-Type":"application/json"}});fe.interceptors.request.use(e=>(localStorage.getItem("X-MiniAuth-Token")&&(e.headers["X-MiniAuth-Token"]=localStorage.getItem("X-MiniAuth-Token")),On(),e),e=>(se(),alert(e.message||"Error"),console.error("Error:",e),Promise.reject(e)));fe.interceptors.response.use(e=>{se();const t=e.data;return e.status!==200||t.code!==200?(alert(t.message||"Error"),Promise.reject(new Error(t.message||"Error"))):e.data.data||e.data},e=>{if(se(),e.response.status===401){localStorage.removeItem("X-MiniAuth-Token"),window.location.href="/miniauth/login.html";return}return alert(e.message||"Error"),console.error("Error:",e),Promise.reject(e)});let q=0;const On=()=>{q++,q>0&&Ae.emit("showLoading")},se=()=>{q--,q<=0&&Ae.emit("closeLoading")},Rn={class:"rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"},gn={class:"w-full table-auto"},xn=E("thead",null,[E("tr",{class:"bg-gray-2 text-left dark:bg-meta-4"},[E("th",{class:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11"}," Endpoints "),E("th",{class:"min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"},"Method"),E("th",{class:"min-w-[120px] py-4 px-4 font-medium text-black dark:text-white"},"Status"),E("th",{class:"py-4 px-4 font-medium text-black dark:text-white"},"Actions")])],-1),An={class:"py-4 px-4"},Tn=["onUpdate:modelValue","disabled","placeholder"],_n={class:"py-4 px-4"},Pn=["onClick"],Cn={class:"py-4 px-4"},Nn=["onClick"],kn=["onClick"],Fn={class:"py-4 px-4"},Bn=["onClick"],Ln=["onClick"],In={__name:"EndpointsView",setup(e){const t=de("EndPoints"),n=de([]),r=async()=>{n.value=await fe.get("api/getAllEnPoints")};Ke(async()=>{await r()});const s=()=>{n.value.push({methods:null,route:"",status:"On"})},o=(d,h,u)=>{d!=null&&d.find(c=>c===h)?d.splice(u,1):d.push(h)},i=(d,h)=>{d.status=h},l=d=>{n.value.splice(d,1)};return(d,h)=>(D(),U(W,null,[Xe(et,{pageTitle:t.value},null,8,["pageTitle"]),E("div",Rn,[E("table",gn,[xn,E("tbody",null,[(D(!0),U(W,null,pe(n.value,(u,c)=>{var y,O;return D(),U("tr",{class:"border-b border-gray-2 dark:border-meta-4",key:c},[E("td",An,[Ge(E("input",{type:"text",class:"form-input mt-2 block w-full","onUpdate:modelValue":f=>u.route=f,disabled:u.type==="system",placeholder:((y=u.route)==null?void 0:y.length)===null||((O=u.route)==null?void 0:O.length)===0?"Enter Route...":""},null,8,Tn),[[Qe,u.route]])]),E("td",_n,[(D(),U(W,null,pe(["GET","POST","PUT","PATCH","DELETE"],(f,p)=>{var b,S;return E("button",{key:p,class:K(["inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium",{"bg-success text-success":((b=u.methods)==null?void 0:b.find(g=>g===f))||((S=u.methods)==null?void 0:S.length)===0||u.methods===null,"bg-black ":!0}]),onClick:g=>o(u.methods,f,p)},Ze(f),11,Pn)}),64))]),E("td",Cn,[E("button",{class:K(["inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium",{"bg-success text-success":u.status==="On","bg-black ":!0}]),onClick:f=>i(u,"On")}," On ",10,Nn),E("button",{class:K(["inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium",{"bg-success text-success":u.status==="Off","bg-black ":!0}]),onClick:f=>i(u,"Off")}," Off ",10,kn)]),E("td",Fn,[E("button",{onClick:f=>d.editItem(c)},"Save",8,Bn),Ye(" / "),E("button",{onClick:f=>l(c)},"Delete",8,Ln)])])}),128))])]),E("button",{onClick:s,class:"bg-primary text-white px-4 py-2 rounded-md mt-4"}," Add Item ")])],64))}};export{In as default};
