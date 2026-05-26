(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function CS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lv={exports:{}},ff={},Nv={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=Symbol.for("react.element"),bS=Symbol.for("react.portal"),PS=Symbol.for("react.fragment"),LS=Symbol.for("react.strict_mode"),NS=Symbol.for("react.profiler"),DS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),US=Symbol.for("react.forward_ref"),FS=Symbol.for("react.suspense"),OS=Symbol.for("react.memo"),kS=Symbol.for("react.lazy"),Y0=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=Y0&&t[Y0]||t["@@iterator"],typeof t=="function"?t:null)}var Dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iv=Object.assign,Uv={};function Aa(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Dv}Aa.prototype.isReactComponent={};Aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=Aa.prototype;function jp(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Dv}var $p=jp.prototype=new Fv;$p.constructor=jp;Iv($p,Aa.prototype);$p.isPureReactComponent=!0;var q0=Array.isArray,Ov=Object.prototype.hasOwnProperty,Xp={current:null},kv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ov.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Kl,type:t,key:s,ref:o,props:r,_owner:Xp.current}}function zS(t,e){return{$$typeof:Kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kl}function VS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var K0=/\/+/g;function od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VS(""+t.key):e.toString(36)}function uu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Kl:case bS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+od(o,0):i,q0(r)?(n="",t!=null&&(n=t.replace(K0,"$&/")+"/"),uu(r,e,n,"",function(c){return c})):r!=null&&(Yp(r)&&(r=zS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(K0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",q0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+od(s,a);o+=uu(s,e,n,l,r)}else if(l=BS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+od(s,a++),o+=uu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gc(t,e,n){if(t==null)return t;var i=[],r=0;return uu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bn={current:null},fu={transition:null},GS={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:fu,ReactCurrentOwner:Xp};function zv(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:gc,forEach:function(t,e,n){gc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gc(t,function(){e++}),e},toArray:function(t){return gc(t,function(e){return e})||[]},only:function(t){if(!Yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Aa;Ye.Fragment=PS;Ye.Profiler=NS;Ye.PureComponent=jp;Ye.StrictMode=LS;Ye.Suspense=FS;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Ye.act=zv;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Iv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ov.call(e,l)&&!kv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Kl,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:IS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DS,_context:t},t.Consumer=t};Ye.createElement=Bv;Ye.createFactory=function(t){var e=Bv.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:US,render:t}};Ye.isValidElement=Yp;Ye.lazy=function(t){return{$$typeof:kS,_payload:{_status:-1,_result:t},_init:HS}};Ye.memo=function(t,e){return{$$typeof:OS,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};Ye.unstable_act=zv;Ye.useCallback=function(t,e){return bn.current.useCallback(t,e)};Ye.useContext=function(t){return bn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return bn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return bn.current.useEffect(t,e)};Ye.useId=function(){return bn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return bn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return bn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return bn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return bn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return bn.current.useReducer(t,e,n)};Ye.useRef=function(t){return bn.current.useRef(t)};Ye.useState=function(t){return bn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return bn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return bn.current.useTransition()};Ye.version="18.3.1";Nv.exports=Ye;var Ke=Nv.exports;const WS=CS(Ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jS=Ke,$S=Symbol.for("react.element"),XS=Symbol.for("react.fragment"),YS=Object.prototype.hasOwnProperty,qS=jS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KS={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)YS.call(e,i)&&!KS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$S,type:t,key:s,ref:o,props:r,_owner:qS.current}}ff.Fragment=XS;ff.jsx=Vv;ff.jsxs=Vv;Lv.exports=ff;var q=Lv.exports,Ah={},Hv={exports:{}},ri={},Gv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,W){var j=b.length;b.push(W);e:for(;0<j;){var oe=j-1>>>1,xe=b[oe];if(0<r(xe,W))b[oe]=W,b[j]=xe,j=oe;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var W=b[0],j=b.pop();if(j!==W){b[0]=j;e:for(var oe=0,xe=b.length,Ze=xe>>>1;oe<Ze;){var G=2*(oe+1)-1,ie=b[G],he=G+1,re=b[he];if(0>r(ie,j))he<xe&&0>r(re,ie)?(b[oe]=re,b[he]=j,oe=he):(b[oe]=ie,b[G]=j,oe=G);else if(he<xe&&0>r(re,j))b[oe]=re,b[he]=j,oe=he;else break e}}return W}function r(b,W){var j=b.sortIndex-W.sortIndex;return j!==0?j:b.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(b){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=b)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function M(b){if(x=!1,_(b),!v)if(n(l)!==null)v=!0,Q(C);else{var W=n(c);W!==null&&te(M,W.startTime-b)}}function C(b,W){v=!1,x&&(x=!1,u(P),P=-1),p=!0;var j=d;try{for(_(W),h=n(l);h!==null&&(!(h.expirationTime>W)||b&&!I());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var xe=oe(h.expirationTime<=W);W=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),_(W)}else i(l);h=n(l)}if(h!==null)var Ze=!0;else{var G=n(c);G!==null&&te(M,G.startTime-W),Ze=!1}return Ze}finally{h=null,d=j,p=!1}}var T=!1,A=null,P=-1,E=5,y=-1;function I(){return!(t.unstable_now()-y<E)}function V(){if(A!==null){var b=t.unstable_now();y=b;var W=!0;try{W=A(!0,b)}finally{W?L():(T=!1,A=null)}}else T=!1}var L;if(typeof g=="function")L=function(){g(V)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,$=H.port2;H.port1.onmessage=V,L=function(){$.postMessage(null)}}else L=function(){m(V,0)};function Q(b){A=b,T||(T=!0,L())}function te(b,W){P=m(function(){b(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Q(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var j=d;d=W;try{return b()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,W){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=d;d=b;try{return W()}finally{d=j}},t.unstable_scheduleCallback=function(b,W,j){var oe=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?oe+j:oe):j=oe,b){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=j+xe,b={id:f++,callback:W,priorityLevel:b,startTime:j,expirationTime:xe,sortIndex:-1},j>oe?(b.sortIndex=j,e(c,b),n(l)===null&&b===n(c)&&(x?(u(P),P=-1):x=!0,te(M,j-oe))):(b.sortIndex=xe,e(l,b),v||p||(v=!0,Q(C))),b},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(b){var W=d;return function(){var j=d;d=W;try{return b.apply(this,arguments)}finally{d=j}}}})(Wv);Gv.exports=Wv;var ZS=Gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=Ke,ei=ZS;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jv=new Set,Cl={};function so(t,e){ra(t,e),ra(t+"Capture",e)}function ra(t,e){for(Cl[t]=e,t=0;t<e.length;t++)jv.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rh=Object.prototype.hasOwnProperty,JS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z0={},Q0={};function eM(t){return Rh.call(Q0,t)?!0:Rh.call(Z0,t)?!1:JS.test(t)?Q0[t]=!0:(Z0[t]=!0,!1)}function tM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nM(t,e,n,i){if(e===null||typeof e>"u"||tM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){un[t]=new Pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];un[e]=new Pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){un[t]=new Pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){un[t]=new Pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){un[t]=new Pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){un[t]=new Pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){un[t]=new Pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){un[t]=new Pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){un[t]=new Pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var qp=/[\-:]([a-z])/g;function Kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qp,Kp);un[e]=new Pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qp,Kp);un[e]=new Pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qp,Kp);un[e]=new Pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){un[t]=new Pn(t,1,!1,t.toLowerCase(),null,!1,!1)});un.xlinkHref=new Pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){un[t]=new Pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zp(t,e,n,i){var r=un.hasOwnProperty(e)?un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nM(e,n,r,i)&&(n=null),i||r===null?eM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Lr=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_c=Symbol.for("react.element"),No=Symbol.for("react.portal"),Do=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),em=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),Yv=Symbol.for("react.offscreen"),J0=Symbol.iterator;function $a(t){return t===null||typeof t!="object"?null:(t=J0&&t[J0]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,ad;function cl(t){if(ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+t}var ld=!1;function cd(t,e){if(!t||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?cl(t):""}function iM(t){switch(t.tag){case 5:return cl(t.type);case 16:return cl("Lazy");case 13:return cl("Suspense");case 19:return cl("SuspenseList");case 0:case 2:case 15:return t=cd(t.type,!1),t;case 11:return t=cd(t.type.render,!1),t;case 1:return t=cd(t.type,!0),t;default:return""}}function Lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Do:return"Fragment";case No:return"Portal";case Ch:return"Profiler";case Qp:return"StrictMode";case bh:return"Suspense";case Ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xv:return(t.displayName||"Context")+".Consumer";case $v:return(t._context.displayName||"Context")+".Provider";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case em:return e=t.displayName||null,e!==null?e:Lh(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Lh(t(e))}catch{}}return null}function rM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lh(e);case 8:return e===Qp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function us(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sM(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vc(t){t._valueTracker||(t._valueTracker=sM(t))}function Kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nh(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=us(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&Zp(t,"checked",e,!1)}function Dh(t,e){Zv(t,e);var n=us(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ih(t,e.type,us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ih(t,e,n){(e!=="number"||Tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ul=Array.isArray;function Xo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+us(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ul(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:us(n)}}function Qv(t,e){var n=us(e.value),i=us(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xc,e2=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xc=xc||document.createElement("div"),xc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oM=["Webkit","ms","Moz","O"];Object.keys(gl).forEach(function(t){oM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gl[e]=gl[t]})});function t2(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gl.hasOwnProperty(t)&&gl[t]?(""+e).trim():e+"px"}function n2(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=t2(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var aM=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oh(t,e){if(e){if(aM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=null;function tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zh=null,Yo=null,qo=null;function rg(t){if(t=Jl(t)){if(typeof zh!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=gf(e),zh(t.stateNode,t.type,e))}}function i2(t){Yo?qo?qo.push(t):qo=[t]:Yo=t}function r2(){if(Yo){var t=Yo,e=qo;if(qo=Yo=null,rg(t),e)for(t=0;t<e.length;t++)rg(e[t])}}function s2(t,e){return t(e)}function o2(){}var ud=!1;function a2(t,e,n){if(ud)return t(e,n);ud=!0;try{return s2(t,e,n)}finally{ud=!1,(Yo!==null||qo!==null)&&(o2(),r2())}}function Pl(t,e){var n=t.stateNode;if(n===null)return null;var i=gf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Vh=!1;if(Er)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{Vh=!1}function lM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var _l=!1,Au=null,Ru=!1,Hh=null,cM={onError:function(t){_l=!0,Au=t}};function uM(t,e,n,i,r,s,o,a,l){_l=!1,Au=null,lM.apply(cM,arguments)}function fM(t,e,n,i,r,s,o,a,l){if(uM.apply(this,arguments),_l){if(_l){var c=Au;_l=!1,Au=null}else throw Error(ne(198));Ru||(Ru=!0,Hh=c)}}function oo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l2(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sg(t){if(oo(t)!==t)throw Error(ne(188))}function dM(t){var e=t.alternate;if(!e){if(e=oo(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sg(r),t;if(s===i)return sg(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function c2(t){return t=dM(t),t!==null?u2(t):null}function u2(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u2(t);if(e!==null)return e;t=t.sibling}return null}var f2=ei.unstable_scheduleCallback,og=ei.unstable_cancelCallback,hM=ei.unstable_shouldYield,pM=ei.unstable_requestPaint,Ft=ei.unstable_now,mM=ei.unstable_getCurrentPriorityLevel,nm=ei.unstable_ImmediatePriority,d2=ei.unstable_UserBlockingPriority,Cu=ei.unstable_NormalPriority,gM=ei.unstable_LowPriority,h2=ei.unstable_IdlePriority,df=null,Ki=null;function _M(t){if(Ki&&typeof Ki.onCommitFiberRoot=="function")try{Ki.onCommitFiberRoot(df,t,void 0,(t.current.flags&128)===128)}catch{}}var Di=Math.clz32?Math.clz32:yM,vM=Math.log,xM=Math.LN2;function yM(t){return t>>>=0,t===0?32:31-(vM(t)/xM|0)|0}var yc=64,Sc=4194304;function fl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fl(a):(s&=o,s!==0&&(i=fl(s)))}else o=n&~r,o!==0?i=fl(o):s!==0&&(i=fl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Di(e),r=1<<n,i|=t[n],e&=~r;return i}function SM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=SM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p2(){var t=yc;return yc<<=1,!(yc&4194240)&&(yc=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Di(e),t[e]=n}function EM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function im(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function m2(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g2,rm,_2,v2,x2,Wh=!1,Mc=[],Qr=null,Jr=null,es=null,Ll=new Map,Nl=new Map,jr=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(e.pointerId)}}function Ya(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Jl(e),e!==null&&rm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function TM(t,e,n,i,r){switch(e){case"focusin":return Qr=Ya(Qr,t,e,n,i,r),!0;case"dragenter":return Jr=Ya(Jr,t,e,n,i,r),!0;case"mouseover":return es=Ya(es,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ll.set(s,Ya(Ll.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Nl.set(s,Ya(Nl.get(s)||null,t,e,n,i,r)),!0}return!1}function y2(t){var e=Fs(t.target);if(e!==null){var n=oo(e);if(n!==null){if(e=n.tag,e===13){if(e=l2(n),e!==null){t.blockedOn=e,x2(t.priority,function(){_2(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bh=i,n.target.dispatchEvent(i),Bh=null}else return e=Jl(n),e!==null&&rm(e),t.blockedOn=n,!1;e.shift()}return!0}function lg(t,e,n){du(t)&&n.delete(e)}function AM(){Wh=!1,Qr!==null&&du(Qr)&&(Qr=null),Jr!==null&&du(Jr)&&(Jr=null),es!==null&&du(es)&&(es=null),Ll.forEach(lg),Nl.forEach(lg)}function qa(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,ei.unstable_scheduleCallback(ei.unstable_NormalPriority,AM)))}function Dl(t){function e(r){return qa(r,t)}if(0<Mc.length){qa(Mc[0],t);for(var n=1;n<Mc.length;n++){var i=Mc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qr!==null&&qa(Qr,t),Jr!==null&&qa(Jr,t),es!==null&&qa(es,t),Ll.forEach(e),Nl.forEach(e),n=0;n<jr.length;n++)i=jr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)y2(n),n.blockedOn===null&&jr.shift()}var Ko=Lr.ReactCurrentBatchConfig,Pu=!0;function RM(t,e,n,i){var r=lt,s=Ko.transition;Ko.transition=null;try{lt=1,sm(t,e,n,i)}finally{lt=r,Ko.transition=s}}function CM(t,e,n,i){var r=lt,s=Ko.transition;Ko.transition=null;try{lt=4,sm(t,e,n,i)}finally{lt=r,Ko.transition=s}}function sm(t,e,n,i){if(Pu){var r=jh(t,e,n,i);if(r===null)Sd(t,e,i,Lu,n),ag(t,i);else if(TM(r,t,e,n,i))i.stopPropagation();else if(ag(t,i),e&4&&-1<wM.indexOf(t)){for(;r!==null;){var s=Jl(r);if(s!==null&&g2(s),s=jh(t,e,n,i),s===null&&Sd(t,e,i,Lu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Sd(t,e,i,null,n)}}var Lu=null;function jh(t,e,n,i){if(Lu=null,t=tm(i),t=Fs(t),t!==null)if(e=oo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l2(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lu=t,null}function S2(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mM()){case nm:return 1;case d2:return 4;case Cu:case gM:return 16;case h2:return 536870912;default:return 16}default:return 16}}var qr=null,om=null,hu=null;function M2(){if(hu)return hu;var t,e=om,n=e.length,i,r="value"in qr?qr.value:qr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return hu=r.slice(t,1<i?1-i:void 0)}function pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ec(){return!0}function cg(){return!1}function si(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ec:cg,this.isPropagationStopped=cg,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ec)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ec)},persist:function(){},isPersistent:Ec}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=si(Ra),Ql=Lt({},Ra,{view:0,detail:0}),bM=si(Ql),dd,hd,Ka,hf=Lt({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ka&&(Ka&&t.type==="mousemove"?(dd=t.screenX-Ka.screenX,hd=t.screenY-Ka.screenY):hd=dd=0,Ka=t),dd)},movementY:function(t){return"movementY"in t?t.movementY:hd}}),ug=si(hf),PM=Lt({},hf,{dataTransfer:0}),LM=si(PM),NM=Lt({},Ql,{relatedTarget:0}),pd=si(NM),DM=Lt({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),IM=si(DM),UM=Lt({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FM=si(UM),OM=Lt({},Ra,{data:0}),fg=si(OM),kM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zM[t])?!!e[t]:!1}function lm(){return VM}var HM=Lt({},Ql,{key:function(t){if(t.key){var e=kM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(t){return t.type==="keypress"?pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GM=si(HM),WM=Lt({},hf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=si(WM),jM=Lt({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),$M=si(jM),XM=Lt({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),YM=si(XM),qM=Lt({},hf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KM=si(qM),ZM=[9,13,27,32],cm=Er&&"CompositionEvent"in window,vl=null;Er&&"documentMode"in document&&(vl=document.documentMode);var QM=Er&&"TextEvent"in window&&!vl,E2=Er&&(!cm||vl&&8<vl&&11>=vl),hg=" ",pg=!1;function w2(t,e){switch(t){case"keyup":return ZM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Io=!1;function JM(t,e){switch(t){case"compositionend":return T2(e);case"keypress":return e.which!==32?null:(pg=!0,hg);case"textInput":return t=e.data,t===hg&&pg?null:t;default:return null}}function eE(t,e){if(Io)return t==="compositionend"||!cm&&w2(t,e)?(t=M2(),hu=om=qr=null,Io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E2&&e.locale!=="ko"?null:e.data;default:return null}}var tE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tE[t.type]:e==="textarea"}function A2(t,e,n,i){i2(i),e=Nu(e,"onChange"),0<e.length&&(n=new am("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xl=null,Il=null;function nE(t){O2(t,0)}function pf(t){var e=Oo(t);if(Kv(e))return t}function iE(t,e){if(t==="change")return e}var R2=!1;if(Er){var md;if(Er){var gd="oninput"in document;if(!gd){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),gd=typeof gg.oninput=="function"}md=gd}else md=!1;R2=md&&(!document.documentMode||9<document.documentMode)}function _g(){xl&&(xl.detachEvent("onpropertychange",C2),Il=xl=null)}function C2(t){if(t.propertyName==="value"&&pf(Il)){var e=[];A2(e,Il,t,tm(t)),a2(nE,e)}}function rE(t,e,n){t==="focusin"?(_g(),xl=e,Il=n,xl.attachEvent("onpropertychange",C2)):t==="focusout"&&_g()}function sE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pf(Il)}function oE(t,e){if(t==="click")return pf(e)}function aE(t,e){if(t==="input"||t==="change")return pf(e)}function lE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fi=typeof Object.is=="function"?Object.is:lE;function Ul(t,e){if(Fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Rh.call(e,r)||!Fi(t[r],e[r]))return!1}return!0}function vg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=vg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vg(n)}}function b2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P2(){for(var t=window,e=Tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tu(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cE(t){var e=P2(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b2(n.ownerDocument.documentElement,n)){if(i!==null&&um(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xg(n,s);var o=xg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uE=Er&&"documentMode"in document&&11>=document.documentMode,Uo=null,$h=null,yl=null,Xh=!1;function yg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xh||Uo==null||Uo!==Tu(i)||(i=Uo,"selectionStart"in i&&um(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),yl&&Ul(yl,i)||(yl=i,i=Nu($h,"onSelect"),0<i.length&&(e=new am("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Uo)))}function wc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fo={animationend:wc("Animation","AnimationEnd"),animationiteration:wc("Animation","AnimationIteration"),animationstart:wc("Animation","AnimationStart"),transitionend:wc("Transition","TransitionEnd")},_d={},L2={};Er&&(L2=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function mf(t){if(_d[t])return _d[t];if(!Fo[t])return t;var e=Fo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L2)return _d[t]=e[n];return t}var N2=mf("animationend"),D2=mf("animationiteration"),I2=mf("animationstart"),U2=mf("transitionend"),F2=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _s(t,e){F2.set(t,e),so(e,[t])}for(var vd=0;vd<Sg.length;vd++){var xd=Sg[vd],fE=xd.toLowerCase(),dE=xd[0].toUpperCase()+xd.slice(1);_s(fE,"on"+dE)}_s(N2,"onAnimationEnd");_s(D2,"onAnimationIteration");_s(I2,"onAnimationStart");_s("dblclick","onDoubleClick");_s("focusin","onFocus");_s("focusout","onBlur");_s(U2,"onTransitionEnd");ra("onMouseEnter",["mouseout","mouseover"]);ra("onMouseLeave",["mouseout","mouseover"]);ra("onPointerEnter",["pointerout","pointerover"]);ra("onPointerLeave",["pointerout","pointerover"]);so("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));so("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));so("onBeforeInput",["compositionend","keypress","textInput","paste"]);so("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));so("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));so("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("cancel close invalid load scroll toggle".split(" ").concat(dl));function Mg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fM(i,e,void 0,t),t.currentTarget=null}function O2(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Mg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Mg(r,a,c),s=l}}}if(Ru)throw t=Hh,Ru=!1,Hh=null,t}function pt(t,e){var n=e[Qh];n===void 0&&(n=e[Qh]=new Set);var i=t+"__bubble";n.has(i)||(k2(e,t,2,!1),n.add(i))}function yd(t,e,n){var i=0;e&&(i|=4),k2(n,t,i,e)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function Fl(t){if(!t[Tc]){t[Tc]=!0,jv.forEach(function(n){n!=="selectionchange"&&(hE.has(n)||yd(n,!1,t),yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tc]||(e[Tc]=!0,yd("selectionchange",!1,e))}}function k2(t,e,n,i){switch(S2(e)){case 1:var r=RM;break;case 4:r=CM;break;default:r=sm}n=r.bind(null,e,n,t),r=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Sd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}a2(function(){var c=s,f=tm(n),h=[];e:{var d=F2.get(t);if(d!==void 0){var p=am,v=t;switch(t){case"keypress":if(pu(n)===0)break e;case"keydown":case"keyup":p=GM;break;case"focusin":v="focus",p=pd;break;case"focusout":v="blur",p=pd;break;case"beforeblur":case"afterblur":p=pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$M;break;case N2:case D2:case I2:p=IM;break;case U2:p=YM;break;case"scroll":p=bM;break;case"wheel":p=KM;break;case"copy":case"cut":case"paste":p=FM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dg}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var g=c,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=Pl(g,u),M!=null&&x.push(Ol(g,M,_)))),m)break;g=g.return}0<x.length&&(d=new p(d,v,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Bh&&(v=n.relatedTarget||n.fromElement)&&(Fs(v)||v[wr]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Fs(v):null,v!==null&&(m=oo(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=ug,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=dg,M="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:Oo(p),_=v==null?d:Oo(v),d=new x(M,g+"leave",p,n,f),d.target=m,d.relatedTarget=_,M=null,Fs(f)===c&&(x=new x(u,g+"enter",v,n,f),x.target=_,x.relatedTarget=m,M=x),m=M,p&&v)t:{for(x=p,u=v,g=0,_=x;_;_=uo(_))g++;for(_=0,M=u;M;M=uo(M))_++;for(;0<g-_;)x=uo(x),g--;for(;0<_-g;)u=uo(u),_--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=uo(x),u=uo(u)}x=null}else x=null;p!==null&&Eg(h,d,p,x,!1),v!==null&&m!==null&&Eg(h,m,v,x,!0)}}e:{if(d=c?Oo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=iE;else if(mg(d))if(R2)C=aE;else{C=sE;var T=rE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=oE);if(C&&(C=C(t,c))){A2(h,C,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Ih(d,"number",d.value)}switch(T=c?Oo(c):window,t){case"focusin":(mg(T)||T.contentEditable==="true")&&(Uo=T,$h=c,yl=null);break;case"focusout":yl=$h=Uo=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,yg(h,n,f);break;case"selectionchange":if(uE)break;case"keydown":case"keyup":yg(h,n,f)}var A;if(cm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Io?w2(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(E2&&n.locale!=="ko"&&(Io||P!=="onCompositionStart"?P==="onCompositionEnd"&&Io&&(A=M2()):(qr=f,om="value"in qr?qr.value:qr.textContent,Io=!0)),T=Nu(c,P),0<T.length&&(P=new fg(P,t,null,n,f),h.push({event:P,listeners:T}),A?P.data=A:(A=T2(n),A!==null&&(P.data=A)))),(A=QM?JM(t,n):eE(t,n))&&(c=Nu(c,"onBeforeInput"),0<c.length&&(f=new fg("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}O2(h,e)})}function Ol(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pl(t,n),s!=null&&i.unshift(Ol(t,s,r)),s=Pl(t,e),s!=null&&i.push(Ol(t,s,r))),t=t.return}return i}function uo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Pl(n,s),l!=null&&o.unshift(Ol(n,l,a))):r||(l=Pl(n,s),l!=null&&o.push(Ol(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(pE,`
`).replace(mE,"")}function Ac(t,e,n){if(e=wg(e),wg(t)!==e&&n)throw Error(ne(425))}function Du(){}var Yh=null,qh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zh=typeof setTimeout=="function"?setTimeout:void 0,gE=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,_E=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(vE)}:Zh;function vE(t){setTimeout(function(){throw t})}function Md(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Dl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Dl(e)}function ts(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ca=Math.random().toString(36).slice(2),$i="__reactFiber$"+Ca,kl="__reactProps$"+Ca,wr="__reactContainer$"+Ca,Qh="__reactEvents$"+Ca,xE="__reactListeners$"+Ca,yE="__reactHandles$"+Ca;function Fs(t){var e=t[$i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[$i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ag(t);t!==null;){if(n=t[$i])return n;t=Ag(t)}return e}t=n,n=t.parentNode}return null}function Jl(t){return t=t[$i]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function gf(t){return t[kl]||null}var Jh=[],ko=-1;function vs(t){return{current:t}}function gt(t){0>ko||(t.current=Jh[ko],Jh[ko]=null,ko--)}function ht(t,e){ko++,Jh[ko]=t.current,t.current=e}var fs={},Sn=vs(fs),Fn=vs(!1),Ks=fs;function sa(t,e){var n=t.type.contextTypes;if(!n)return fs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function On(t){return t=t.childContextTypes,t!=null}function Iu(){gt(Fn),gt(Sn)}function Rg(t,e,n){if(Sn.current!==fs)throw Error(ne(168));ht(Sn,e),ht(Fn,n)}function B2(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,rM(t)||"Unknown",r));return Lt({},n,i)}function Uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fs,Ks=Sn.current,ht(Sn,t),ht(Fn,Fn.current),!0}function Cg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=B2(t,e,Ks),i.__reactInternalMemoizedMergedChildContext=t,gt(Fn),gt(Sn),ht(Sn,t)):gt(Fn),ht(Fn,n)}var gr=null,_f=!1,Ed=!1;function z2(t){gr===null?gr=[t]:gr.push(t)}function SE(t){_f=!0,z2(t)}function xs(){if(!Ed&&gr!==null){Ed=!0;var t=0,e=lt;try{var n=gr;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gr=null,_f=!1}catch(r){throw gr!==null&&(gr=gr.slice(t+1)),f2(nm,xs),r}finally{lt=e,Ed=!1}}return null}var Bo=[],zo=0,Fu=null,Ou=0,hi=[],pi=0,Zs=null,xr=1,yr="";function Ps(t,e){Bo[zo++]=Ou,Bo[zo++]=Fu,Fu=t,Ou=e}function V2(t,e,n){hi[pi++]=xr,hi[pi++]=yr,hi[pi++]=Zs,Zs=t;var i=xr;t=yr;var r=32-Di(i)-1;i&=~(1<<r),n+=1;var s=32-Di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xr=1<<32-Di(e)+r|n<<r|i,yr=s+t}else xr=1<<s|n<<r|i,yr=t}function fm(t){t.return!==null&&(Ps(t,1),V2(t,1,0))}function dm(t){for(;t===Fu;)Fu=Bo[--zo],Bo[zo]=null,Ou=Bo[--zo],Bo[zo]=null;for(;t===Zs;)Zs=hi[--pi],hi[pi]=null,yr=hi[--pi],hi[pi]=null,xr=hi[--pi],hi[pi]=null}var Zn=null,Kn=null,Mt=!1,Li=null;function H2(t,e){var n=gi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=ts(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zs!==null?{id:xr,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zn=t,Kn=null,!0):!1;default:return!1}}function ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tp(t){if(Mt){var e=Kn;if(e){var n=e;if(!bg(t,e)){if(ep(t))throw Error(ne(418));e=ts(n.nextSibling);var i=Zn;e&&bg(t,e)?H2(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Zn=t)}}else{if(ep(t))throw Error(ne(418));t.flags=t.flags&-4097|2,Mt=!1,Zn=t}}}function Pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zn=t}function Rc(t){if(t!==Zn)return!1;if(!Mt)return Pg(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=Kn)){if(ep(t))throw G2(),Error(ne(418));for(;e;)H2(t,e),e=ts(e.nextSibling)}if(Pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kn=ts(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kn=null}}else Kn=Zn?ts(t.stateNode.nextSibling):null;return!0}function G2(){for(var t=Kn;t;)t=ts(t.nextSibling)}function oa(){Kn=Zn=null,Mt=!1}function hm(t){Li===null?Li=[t]:Li.push(t)}var ME=Lr.ReactCurrentBatchConfig;function Za(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Cc(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lg(t){var e=t._init;return e(t._payload)}function W2(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=ss(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,_,M){return g===null||g.tag!==6?(g=Pd(_,u.mode,M),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,M){var C=_.type;return C===Do?f(u,g,_.props.children,M,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hr&&Lg(C)===g.type)?(M=r(g,_.props),M.ref=Za(u,g,_),M.return=u,M):(M=Su(_.type,_.key,_.props,null,u.mode,M),M.ref=Za(u,g,_),M.return=u,M)}function c(u,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Ld(_,u.mode,M),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function f(u,g,_,M,C){return g===null||g.tag!==7?(g=Ws(_,u.mode,M,C),g.return=u,g):(g=r(g,_),g.return=u,g)}function h(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Pd(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _c:return _=Su(g.type,g.key,g.props,null,u.mode,_),_.ref=Za(u,null,g),_.return=u,_;case No:return g=Ld(g,u.mode,_),g.return=u,g;case Hr:var M=g._init;return h(u,M(g._payload),_)}if(ul(g)||$a(g))return g=Ws(g,u.mode,_,null),g.return=u,g;Cc(u,g)}return null}function d(u,g,_,M){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(u,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _c:return _.key===C?l(u,g,_,M):null;case No:return _.key===C?c(u,g,_,M):null;case Hr:return C=_._init,d(u,g,C(_._payload),M)}if(ul(_)||$a(_))return C!==null?null:f(u,g,_,M,null);Cc(u,_)}return null}function p(u,g,_,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,a(g,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _c:return u=u.get(M.key===null?_:M.key)||null,l(g,u,M,C);case No:return u=u.get(M.key===null?_:M.key)||null,c(g,u,M,C);case Hr:var T=M._init;return p(u,g,_,T(M._payload),C)}if(ul(M)||$a(M))return u=u.get(_)||null,f(g,u,M,C,null);Cc(g,M)}return null}function v(u,g,_,M){for(var C=null,T=null,A=g,P=g=0,E=null;A!==null&&P<_.length;P++){A.index>P?(E=A,A=null):E=A.sibling;var y=d(u,A,_[P],M);if(y===null){A===null&&(A=E);break}t&&A&&y.alternate===null&&e(u,A),g=s(y,g,P),T===null?C=y:T.sibling=y,T=y,A=E}if(P===_.length)return n(u,A),Mt&&Ps(u,P),C;if(A===null){for(;P<_.length;P++)A=h(u,_[P],M),A!==null&&(g=s(A,g,P),T===null?C=A:T.sibling=A,T=A);return Mt&&Ps(u,P),C}for(A=i(u,A);P<_.length;P++)E=p(A,u,P,_[P],M),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),g=s(E,g,P),T===null?C=E:T.sibling=E,T=E);return t&&A.forEach(function(I){return e(u,I)}),Mt&&Ps(u,P),C}function x(u,g,_,M){var C=$a(_);if(typeof C!="function")throw Error(ne(150));if(_=C.call(_),_==null)throw Error(ne(151));for(var T=C=null,A=g,P=g=0,E=null,y=_.next();A!==null&&!y.done;P++,y=_.next()){A.index>P?(E=A,A=null):E=A.sibling;var I=d(u,A,y.value,M);if(I===null){A===null&&(A=E);break}t&&A&&I.alternate===null&&e(u,A),g=s(I,g,P),T===null?C=I:T.sibling=I,T=I,A=E}if(y.done)return n(u,A),Mt&&Ps(u,P),C;if(A===null){for(;!y.done;P++,y=_.next())y=h(u,y.value,M),y!==null&&(g=s(y,g,P),T===null?C=y:T.sibling=y,T=y);return Mt&&Ps(u,P),C}for(A=i(u,A);!y.done;P++,y=_.next())y=p(A,u,P,y.value,M),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),g=s(y,g,P),T===null?C=y:T.sibling=y,T=y);return t&&A.forEach(function(V){return e(u,V)}),Mt&&Ps(u,P),C}function m(u,g,_,M){if(typeof _=="object"&&_!==null&&_.type===Do&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _c:e:{for(var C=_.key,T=g;T!==null;){if(T.key===C){if(C=_.type,C===Do){if(T.tag===7){n(u,T.sibling),g=r(T,_.props.children),g.return=u,u=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hr&&Lg(C)===T.type){n(u,T.sibling),g=r(T,_.props),g.ref=Za(u,T,_),g.return=u,u=g;break e}n(u,T);break}else e(u,T);T=T.sibling}_.type===Do?(g=Ws(_.props.children,u.mode,M,_.key),g.return=u,u=g):(M=Su(_.type,_.key,_.props,null,u.mode,M),M.ref=Za(u,g,_),M.return=u,u=M)}return o(u);case No:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Ld(_,u.mode,M),g.return=u,u=g}return o(u);case Hr:return T=_._init,m(u,g,T(_._payload),M)}if(ul(_))return v(u,g,_,M);if($a(_))return x(u,g,_,M);Cc(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,_),g.return=u,u=g):(n(u,g),g=Pd(_,u.mode,M),g.return=u,u=g),o(u)):n(u,g)}return m}var aa=W2(!0),j2=W2(!1),ku=vs(null),Bu=null,Vo=null,pm=null;function mm(){pm=Vo=Bu=null}function gm(t){var e=ku.current;gt(ku),t._currentValue=e}function np(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zo(t,e){Bu=t,pm=Vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Un=!0),t.firstContext=null)}function yi(t){var e=t._currentValue;if(pm!==t)if(t={context:t,memoizedValue:e,next:null},Vo===null){if(Bu===null)throw Error(ne(308));Vo=t,Bu.dependencies={lanes:0,firstContext:t}}else Vo=Vo.next=t;return e}var Os=null;function _m(t){Os===null?Os=[t]:Os.push(t)}function $2(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_m(e)):(n.next=r.next,r.next=n),e.interleaved=n,Tr(t,i)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ns(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Tr(t,n)}return r=i.interleaved,r===null?(e.next=e,_m(i)):(e.next=r.next,r.next=e),i.interleaved=e,Tr(t,n)}function mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,im(t,n)}}function Ng(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zu(t,e,n,i){var r=t.updateQueue;Gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=Lt({},h,d);break e;case 2:Gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Js|=o,t.lanes=o,t.memoizedState=h}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ec={},Zi=vs(ec),Bl=vs(ec),zl=vs(ec);function ks(t){if(t===ec)throw Error(ne(174));return t}function xm(t,e){switch(ht(zl,e),ht(Bl,t),ht(Zi,ec),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fh(e,t)}gt(Zi),ht(Zi,e)}function la(){gt(Zi),gt(Bl),gt(zl)}function Y2(t){ks(zl.current);var e=ks(Zi.current),n=Fh(e,t.type);e!==n&&(ht(Bl,t),ht(Zi,n))}function ym(t){Bl.current===t&&(gt(Zi),gt(Bl))}var At=vs(0);function Vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function Sm(){for(var t=0;t<wd.length;t++)wd[t]._workInProgressVersionPrimary=null;wd.length=0}var gu=Lr.ReactCurrentDispatcher,Td=Lr.ReactCurrentBatchConfig,Qs=0,bt=null,Wt=null,tn=null,Hu=!1,Sl=!1,Vl=0,EE=0;function hn(){throw Error(ne(321))}function Mm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fi(t[n],e[n]))return!1;return!0}function Em(t,e,n,i,r,s){if(Qs=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gu.current=t===null||t.memoizedState===null?RE:CE,t=n(i,r),Sl){s=0;do{if(Sl=!1,Vl=0,25<=s)throw Error(ne(301));s+=1,tn=Wt=null,e.updateQueue=null,gu.current=bE,t=n(i,r)}while(Sl)}if(gu.current=Gu,e=Wt!==null&&Wt.next!==null,Qs=0,tn=Wt=bt=null,Hu=!1,e)throw Error(ne(300));return t}function wm(){var t=Vl!==0;return Vl=0,t}function Gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?bt.memoizedState=tn=t:tn=tn.next=t,tn}function Si(){if(Wt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=tn===null?bt.memoizedState:tn.next;if(e!==null)tn=e,Wt=t;else{if(t===null)throw Error(ne(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},tn===null?bt.memoizedState=tn=t:tn=tn.next=t}return tn}function Hl(t,e){return typeof e=="function"?e(t):e}function Ad(t){var e=Si(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Qs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,bt.lanes|=f,Js|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Fi(i,e.memoizedState)||(Un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Js|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rd(t){var e=Si(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fi(s,e.memoizedState)||(Un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function q2(){}function K2(t,e){var n=bt,i=Si(),r=e(),s=!Fi(i.memoizedState,r);if(s&&(i.memoizedState=r,Un=!0),i=i.queue,Tm(J2.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||tn!==null&&tn.memoizedState.tag&1){if(n.flags|=2048,Gl(9,Q2.bind(null,n,i,r,e),void 0,null),sn===null)throw Error(ne(349));Qs&30||Z2(n,e,r)}return r}function Z2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q2(t,e,n,i){e.value=n,e.getSnapshot=i,ex(e)&&tx(t)}function J2(t,e,n){return n(function(){ex(e)&&tx(t)})}function ex(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fi(t,n)}catch{return!0}}function tx(t){var e=Tr(t,1);e!==null&&Ii(e,t,1,-1)}function Ig(t){var e=Gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:t},e.queue=t,t=t.dispatch=AE.bind(null,bt,t),[e.memoizedState,t]}function Gl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function nx(){return Si().memoizedState}function _u(t,e,n,i){var r=Gi();bt.flags|=t,r.memoizedState=Gl(1|e,n,void 0,i===void 0?null:i)}function vf(t,e,n,i){var r=Si();i=i===void 0?null:i;var s=void 0;if(Wt!==null){var o=Wt.memoizedState;if(s=o.destroy,i!==null&&Mm(i,o.deps)){r.memoizedState=Gl(e,n,s,i);return}}bt.flags|=t,r.memoizedState=Gl(1|e,n,s,i)}function Ug(t,e){return _u(8390656,8,t,e)}function Tm(t,e){return vf(2048,8,t,e)}function ix(t,e){return vf(4,2,t,e)}function rx(t,e){return vf(4,4,t,e)}function sx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ox(t,e,n){return n=n!=null?n.concat([t]):null,vf(4,4,sx.bind(null,e,t),n)}function Am(){}function ax(t,e){var n=Si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function lx(t,e){var n=Si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cx(t,e,n){return Qs&21?(Fi(n,e)||(n=p2(),bt.lanes|=n,Js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=n)}function wE(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Td.transition;Td.transition={};try{t(!1),e()}finally{lt=n,Td.transition=i}}function ux(){return Si().memoizedState}function TE(t,e,n){var i=rs(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fx(t))dx(e,n);else if(n=$2(t,e,n,i),n!==null){var r=Rn();Ii(n,t,i,r),hx(n,e,i)}}function AE(t,e,n){var i=rs(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fx(t))dx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fi(a,o)){var l=e.interleaved;l===null?(r.next=r,_m(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$2(t,e,r,i),n!==null&&(r=Rn(),Ii(n,t,i,r),hx(n,e,i))}}function fx(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function dx(t,e){Sl=Hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,im(t,n)}}var Gu={readContext:yi,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},RE={readContext:yi,useCallback:function(t,e){return Gi().memoizedState=[t,e===void 0?null:e],t},useContext:yi,useEffect:Ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,sx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=Gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=TE.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=Gi();return t={current:t},e.memoizedState=t},useState:Ig,useDebugValue:Am,useDeferredValue:function(t){return Gi().memoizedState=t},useTransition:function(){var t=Ig(!1),e=t[0];return t=wE.bind(null,t[1]),Gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=Gi();if(Mt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),sn===null)throw Error(ne(349));Qs&30||Z2(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ug(J2.bind(null,i,s,t),[t]),i.flags|=2048,Gl(9,Q2.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gi(),e=sn.identifierPrefix;if(Mt){var n=yr,i=xr;n=(i&~(1<<32-Di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CE={readContext:yi,useCallback:ax,useContext:yi,useEffect:Tm,useImperativeHandle:ox,useInsertionEffect:ix,useLayoutEffect:rx,useMemo:lx,useReducer:Ad,useRef:nx,useState:function(){return Ad(Hl)},useDebugValue:Am,useDeferredValue:function(t){var e=Si();return cx(e,Wt.memoizedState,t)},useTransition:function(){var t=Ad(Hl)[0],e=Si().memoizedState;return[t,e]},useMutableSource:q2,useSyncExternalStore:K2,useId:ux,unstable_isNewReconciler:!1},bE={readContext:yi,useCallback:ax,useContext:yi,useEffect:Tm,useImperativeHandle:ox,useInsertionEffect:ix,useLayoutEffect:rx,useMemo:lx,useReducer:Rd,useRef:nx,useState:function(){return Rd(Hl)},useDebugValue:Am,useDeferredValue:function(t){var e=Si();return Wt===null?e.memoizedState=t:cx(e,Wt.memoizedState,t)},useTransition:function(){var t=Rd(Hl)[0],e=Si().memoizedState;return[t,e]},useMutableSource:q2,useSyncExternalStore:K2,useId:ux,unstable_isNewReconciler:!1};function bi(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ip(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xf={isMounted:function(t){return(t=t._reactInternals)?oo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Rn(),r=rs(t),s=Mr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ns(t,s,r),e!==null&&(Ii(e,t,r,i),mu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Rn(),r=rs(t),s=Mr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ns(t,s,r),e!==null&&(Ii(e,t,r,i),mu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rn(),i=rs(t),r=Mr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ns(t,r,i),e!==null&&(Ii(e,t,i,n),mu(e,t,i))}};function Fg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ul(n,i)||!Ul(r,s):!0}function px(t,e,n){var i=!1,r=fs,s=e.contextType;return typeof s=="object"&&s!==null?s=yi(s):(r=On(e)?Ks:Sn.current,i=e.contextTypes,s=(i=i!=null)?sa(t,r):fs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Og(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xf.enqueueReplaceState(e,e.state,null)}function rp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=yi(s):(s=On(e)?Ks:Sn.current,r.context=sa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ip(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xf.enqueueReplaceState(r,r.state,null),zu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ca(t,e){try{var n="",i=e;do n+=iM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PE=typeof WeakMap=="function"?WeakMap:Map;function mx(t,e,n){n=Mr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ju||(ju=!0,mp=i),sp(t,e)},n}function gx(t,e,n){n=Mr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sp(t,e),typeof i!="function"&&(is===null?is=new Set([this]):is.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new PE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=WE.bind(null,t,e,n),e.then(t,t))}function Bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mr(-1,1),e.tag=2,ns(n,e,1))),n.lanes|=1),t)}var LE=Lr.ReactCurrentOwner,Un=!1;function An(t,e,n,i){e.child=t===null?j2(e,null,n,i):aa(e,t.child,n,i)}function Vg(t,e,n,i,r){n=n.render;var s=e.ref;return Zo(e,r),i=Em(t,e,n,i,s,r),n=wm(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ar(t,e,r)):(Mt&&n&&fm(e),e.flags|=1,An(t,e,i,r),e.child)}function Hg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_x(t,e,s,i,r)):(t=Su(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ul,n(o,i)&&t.ref===e.ref)return Ar(t,e,r)}return e.flags|=1,t=ss(s,i),t.ref=e.ref,t.return=e,e.child=t}function _x(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ul(s,i)&&t.ref===e.ref)if(Un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Un=!0);else return e.lanes=t.lanes,Ar(t,e,r)}return op(t,e,n,i,r)}function vx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Go,qn),qn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Go,qn),qn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Go,qn),qn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Go,qn),qn|=i;return An(t,e,r,n),e.child}function xx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function op(t,e,n,i,r){var s=On(n)?Ks:Sn.current;return s=sa(e,s),Zo(e,r),n=Em(t,e,n,i,s,r),i=wm(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ar(t,e,r)):(Mt&&i&&fm(e),e.flags|=1,An(t,e,n,r),e.child)}function Gg(t,e,n,i,r){if(On(n)){var s=!0;Uu(e)}else s=!1;if(Zo(e,r),e.stateNode===null)vu(t,e),px(e,n,i),rp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=yi(c):(c=On(n)?Ks:Sn.current,c=sa(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Og(e,o,i,c),Gr=!1;var d=e.memoizedState;o.state=d,zu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Fn.current||Gr?(typeof f=="function"&&(ip(e,n,f,i),l=e.memoizedState),(a=Gr||Fg(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,X2(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bi(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yi(l):(l=On(n)?Ks:Sn.current,l=sa(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Og(e,o,i,l),Gr=!1,d=e.memoizedState,o.state=d,zu(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||Fn.current||Gr?(typeof p=="function"&&(ip(e,n,p,i),v=e.memoizedState),(c=Gr||Fg(e,n,c,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ap(t,e,n,i,s,r)}function ap(t,e,n,i,r,s){xx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cg(e,n,!1),Ar(t,e,s);i=e.stateNode,LE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=aa(e,t.child,null,s),e.child=aa(e,null,a,s)):An(t,e,a,s),e.memoizedState=i.state,r&&Cg(e,n,!0),e.child}function yx(t){var e=t.stateNode;e.pendingContext?Rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rg(t,e.context,!1),xm(t,e.containerInfo)}function Wg(t,e,n,i,r){return oa(),hm(r),e.flags|=256,An(t,e,n,i),e.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function cp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sx(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(At,r&1),t===null)return tp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mf(o,i,0,null),t=Ws(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cp(n),e.memoizedState=lp,t):Rm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return NE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ss(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ss(a,s):(s=Ws(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?cp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lp,i}return s=t.child,t=s.sibling,i=ss(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rm(t,e){return e=Mf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bc(t,e,n,i){return i!==null&&hm(i),aa(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Cd(Error(ne(422))),bc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mf({mode:"visible",children:i.children},r,0,null),s=Ws(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&aa(e,t.child,null,o),e.child.memoizedState=cp(o),e.memoizedState=lp,s);if(!(e.mode&1))return bc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Cd(s,i,void 0),bc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Un||a){if(i=sn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Tr(t,r),Ii(i,t,r,-1))}return Dm(),i=Cd(Error(ne(421))),bc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=jE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Kn=ts(r.nextSibling),Zn=e,Mt=!0,Li=null,t!==null&&(hi[pi++]=xr,hi[pi++]=yr,hi[pi++]=Zs,xr=t.id,yr=t.overflow,Zs=e),e=Rm(e,i.children),e.flags|=4096,e)}function jg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),np(t.return,e,n)}function bd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(An(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,n,e);else if(t.tag===19)jg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bd(e,!0,n,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ss(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ss(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DE(t,e,n){switch(e.tag){case 3:yx(e),oa();break;case 5:Y2(e);break;case 1:On(e.type)&&Uu(e);break;case 4:xm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(ku,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?Sx(t,e,n):(ht(At,At.current&1),t=Ar(t,e,n),t!==null?t.sibling:null);ht(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,vx(t,e,n)}return Ar(t,e,n)}var Ex,up,wx,Tx;Ex=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};up=function(){};wx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ks(Zi.current);var s=null;switch(n){case"input":r=Nh(t,r),i=Nh(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=Uh(t,r),i=Uh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Du)}Oh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Cl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Cl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qa(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function pn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function IE(t,e,n){var i=e.pendingProps;switch(dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(e),null;case 1:return On(e.type)&&Iu(),pn(e),null;case 3:return i=e.stateNode,la(),gt(Fn),gt(Sn),Sm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Rc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Li!==null&&(vp(Li),Li=null))),up(t,e),pn(e),null;case 5:ym(e);var r=ks(zl.current);if(n=e.type,t!==null&&e.stateNode!=null)wx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return pn(e),null}if(t=ks(Zi.current),Rc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$i]=e,i[kl]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<dl.length;r++)pt(dl[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":eg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":ng(i,s),pt("invalid",i)}Oh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ac(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ac(i.textContent,a,t),r=["children",""+a]):Cl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":vc(i),tg(i,s,!0);break;case"textarea":vc(i),ig(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Du)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$i]=e,t[kl]=i,Ex(t,e,!1,!1),e.stateNode=t;e:{switch(o=kh(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<dl.length;r++)pt(dl[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":eg(t,i),r=Nh(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":ng(t,i),r=Uh(t,i),pt("invalid",t);break;default:r=i}Oh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?n2(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e2(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bl(t,l):typeof l=="number"&&bl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Zp(t,s,l,o))}switch(n){case"input":vc(t),tg(t,i,!1);break;case"textarea":vc(t),ig(t);break;case"option":i.value!=null&&t.setAttribute("value",""+us(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Du)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pn(e),null;case 6:if(t&&e.stateNode!=null)Tx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=ks(zl.current),ks(Zi.current),Rc(e)){if(i=e.stateNode,n=e.memoizedProps,i[$i]=e,(s=i.nodeValue!==n)&&(t=Zn,t!==null))switch(t.tag){case 3:Ac(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ac(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$i]=e,e.stateNode=i}return pn(e),null;case 13:if(gt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Kn!==null&&e.mode&1&&!(e.flags&128))G2(),oa(),e.flags|=98560,s=!1;else if(s=Rc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[$i]=e}else oa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pn(e),s=!1}else Li!==null&&(vp(Li),Li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?jt===0&&(jt=3):Dm())),e.updateQueue!==null&&(e.flags|=4),pn(e),null);case 4:return la(),up(t,e),t===null&&Fl(e.stateNode.containerInfo),pn(e),null;case 10:return gm(e.type._context),pn(e),null;case 17:return On(e.type)&&Iu(),pn(e),null;case 19:if(gt(At),s=e.memoizedState,s===null)return pn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qa(s,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vu(t),o!==null){for(e.flags|=128,Qa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>ua&&(e.flags|=128,i=!0,Qa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return pn(e),null}else 2*Ft()-s.renderingStartTime>ua&&n!==1073741824&&(e.flags|=128,i=!0,Qa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=At.current,ht(At,i?n&1|2:n&1),e):(pn(e),null);case 22:case 23:return Nm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?qn&1073741824&&(pn(e),e.subtreeFlags&6&&(e.flags|=8192)):pn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function UE(t,e){switch(dm(e),e.tag){case 1:return On(e.type)&&Iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return la(),gt(Fn),gt(Sn),Sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ym(e),null;case 13:if(gt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(At),null;case 4:return la(),null;case 10:return gm(e.type._context),null;case 22:case 23:return Nm(),null;case 24:return null;default:return null}}var Pc=!1,vn=!1,FE=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ho(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function fp(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var $g=!1;function OE(t,e){if(Yh=Pu,t=P2(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qh={focusedElem:t,selectionRange:n},Pu=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:bi(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Nt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=$g,$g=!1,v}function Ml(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fp(e,n,s)}r=r.next}while(r!==i)}}function yf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ax(t){var e=t.alternate;e!==null&&(t.alternate=null,Ax(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$i],delete e[kl],delete e[Qh],delete e[xE],delete e[yE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rx(t){return t.tag===5||t.tag===3||t.tag===4}function Xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Du));else if(i!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function pp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}var an=null,Pi=!1;function Dr(t,e,n){for(n=n.child;n!==null;)Cx(t,e,n),n=n.sibling}function Cx(t,e,n){if(Ki&&typeof Ki.onCommitFiberUnmount=="function")try{Ki.onCommitFiberUnmount(df,n)}catch{}switch(n.tag){case 5:vn||Ho(n,e);case 6:var i=an,r=Pi;an=null,Dr(t,e,n),an=i,Pi=r,an!==null&&(Pi?(t=an,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):an.removeChild(n.stateNode));break;case 18:an!==null&&(Pi?(t=an,n=n.stateNode,t.nodeType===8?Md(t.parentNode,n):t.nodeType===1&&Md(t,n),Dl(t)):Md(an,n.stateNode));break;case 4:i=an,r=Pi,an=n.stateNode.containerInfo,Pi=!0,Dr(t,e,n),an=i,Pi=r;break;case 0:case 11:case 14:case 15:if(!vn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fp(n,e,o),r=r.next}while(r!==i)}Dr(t,e,n);break;case 1:if(!vn&&(Ho(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}Dr(t,e,n);break;case 21:Dr(t,e,n);break;case 22:n.mode&1?(vn=(i=vn)||n.memoizedState!==null,Dr(t,e,n),vn=i):Dr(t,e,n);break;default:Dr(t,e,n)}}function Yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FE),e.forEach(function(i){var r=$E.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:an=a.stateNode,Pi=!1;break e;case 3:an=a.stateNode.containerInfo,Pi=!0;break e;case 4:an=a.stateNode.containerInfo,Pi=!0;break e}a=a.return}if(an===null)throw Error(ne(160));Cx(s,o,r),an=null,Pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bx(e,t),e=e.sibling}function bx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ti(e,t),zi(t),i&4){try{Ml(3,t,t.return),yf(3,t)}catch(x){Nt(t,t.return,x)}try{Ml(5,t,t.return)}catch(x){Nt(t,t.return,x)}}break;case 1:Ti(e,t),zi(t),i&512&&n!==null&&Ho(n,n.return);break;case 5:if(Ti(e,t),zi(t),i&512&&n!==null&&Ho(n,n.return),t.flags&32){var r=t.stateNode;try{bl(r,"")}catch(x){Nt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zv(r,s),kh(a,o);var c=kh(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?n2(r,h):f==="dangerouslySetInnerHTML"?e2(r,h):f==="children"?bl(r,h):Zp(r,f,h,c)}switch(a){case"input":Dh(r,s);break;case"textarea":Qv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xo(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xo(r,!!s.multiple,s.defaultValue,!0):Xo(r,!!s.multiple,s.multiple?[]:"",!1))}r[kl]=s}catch(x){Nt(t,t.return,x)}}break;case 6:if(Ti(e,t),zi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Nt(t,t.return,x)}}break;case 3:if(Ti(e,t),zi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Dl(e.containerInfo)}catch(x){Nt(t,t.return,x)}break;case 4:Ti(e,t),zi(t);break;case 13:Ti(e,t),zi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pm=Ft())),i&4&&Yg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(vn=(c=vn)||f,Ti(e,t),vn=c):Ti(e,t),zi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(h=ge=f;ge!==null;){switch(d=ge,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ml(4,d,d.return);break;case 1:Ho(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Nt(i,n,x)}}break;case 5:Ho(d,d.return);break;case 22:if(d.memoizedState!==null){Kg(h);continue}}p!==null?(p.return=d,ge=p):Kg(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=t2("display",o))}catch(x){Nt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Nt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ti(e,t),zi(t),i&4&&Yg(t);break;case 21:break;default:Ti(e,t),zi(t)}}function zi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rx(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(bl(r,""),i.flags&=-33);var s=Xg(t);pp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Xg(t);hp(t,a,o);break;default:throw Error(ne(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kE(t,e,n){ge=t,Px(t)}function Px(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||vn;a=Pc;var c=vn;if(Pc=o,(vn=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Zg(r):l!==null?(l.return=o,ge=l):Zg(r);for(;s!==null;)ge=s,Px(s),s=s.sibling;ge=r,Pc=a,vn=c}qg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):qg(t)}}function qg(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vn||yf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!vn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Dl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}vn||e.flags&512&&dp(e)}catch(d){Nt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Kg(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Zg(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yf(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{dp(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{dp(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var BE=Math.ceil,Wu=Lr.ReactCurrentDispatcher,Cm=Lr.ReactCurrentOwner,xi=Lr.ReactCurrentBatchConfig,it=0,sn=null,zt=null,ln=0,qn=0,Go=vs(0),jt=0,Wl=null,Js=0,Sf=0,bm=0,El=null,Dn=null,Pm=0,ua=1/0,pr=null,ju=!1,mp=null,is=null,Lc=!1,Kr=null,$u=0,wl=0,gp=null,xu=-1,yu=0;function Rn(){return it&6?Ft():xu!==-1?xu:xu=Ft()}function rs(t){return t.mode&1?it&2&&ln!==0?ln&-ln:ME.transition!==null?(yu===0&&(yu=p2()),yu):(t=lt,t!==0||(t=window.event,t=t===void 0?16:S2(t.type)),t):1}function Ii(t,e,n,i){if(50<wl)throw wl=0,gp=null,Error(ne(185));Zl(t,n,i),(!(it&2)||t!==sn)&&(t===sn&&(!(it&2)&&(Sf|=n),jt===4&&$r(t,ln)),kn(t,i),n===1&&it===0&&!(e.mode&1)&&(ua=Ft()+500,_f&&xs()))}function kn(t,e){var n=t.callbackNode;MM(t,e);var i=bu(t,t===sn?ln:0);if(i===0)n!==null&&og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&og(n),e===1)t.tag===0?SE(Qg.bind(null,t)):z2(Qg.bind(null,t)),_E(function(){!(it&6)&&xs()}),n=null;else{switch(m2(i)){case 1:n=nm;break;case 4:n=d2;break;case 16:n=Cu;break;case 536870912:n=h2;break;default:n=Cu}n=kx(n,Lx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lx(t,e){if(xu=-1,yu=0,it&6)throw Error(ne(327));var n=t.callbackNode;if(Qo()&&t.callbackNode!==n)return null;var i=bu(t,t===sn?ln:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xu(t,i);else{e=i;var r=it;it|=2;var s=Dx();(sn!==t||ln!==e)&&(pr=null,ua=Ft()+500,Gs(t,e));do try{HE();break}catch(a){Nx(t,a)}while(!0);mm(),Wu.current=s,it=r,zt!==null?e=0:(sn=null,ln=0,e=jt)}if(e!==0){if(e===2&&(r=Gh(t),r!==0&&(i=r,e=_p(t,r))),e===1)throw n=Wl,Gs(t,0),$r(t,i),kn(t,Ft()),n;if(e===6)$r(t,i);else{if(r=t.current.alternate,!(i&30)&&!zE(r)&&(e=Xu(t,i),e===2&&(s=Gh(t),s!==0&&(i=s,e=_p(t,s))),e===1))throw n=Wl,Gs(t,0),$r(t,i),kn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Ls(t,Dn,pr);break;case 3:if($r(t,i),(i&130023424)===i&&(e=Pm+500-Ft(),10<e)){if(bu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zh(Ls.bind(null,t,Dn,pr),e);break}Ls(t,Dn,pr);break;case 4:if($r(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*BE(i/1960))-i,10<i){t.timeoutHandle=Zh(Ls.bind(null,t,Dn,pr),i);break}Ls(t,Dn,pr);break;case 5:Ls(t,Dn,pr);break;default:throw Error(ne(329))}}}return kn(t,Ft()),t.callbackNode===n?Lx.bind(null,t):null}function _p(t,e){var n=El;return t.current.memoizedState.isDehydrated&&(Gs(t,e).flags|=256),t=Xu(t,e),t!==2&&(e=Dn,Dn=n,e!==null&&vp(e)),t}function vp(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function zE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $r(t,e){for(e&=~bm,e&=~Sf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Di(e),i=1<<n;t[n]=-1,e&=~i}}function Qg(t){if(it&6)throw Error(ne(327));Qo();var e=bu(t,0);if(!(e&1))return kn(t,Ft()),null;var n=Xu(t,e);if(t.tag!==0&&n===2){var i=Gh(t);i!==0&&(e=i,n=_p(t,i))}if(n===1)throw n=Wl,Gs(t,0),$r(t,e),kn(t,Ft()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ls(t,Dn,pr),kn(t,Ft()),null}function Lm(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(ua=Ft()+500,_f&&xs())}}function eo(t){Kr!==null&&Kr.tag===0&&!(it&6)&&Qo();var e=it;it|=1;var n=xi.transition,i=lt;try{if(xi.transition=null,lt=1,t)return t()}finally{lt=i,xi.transition=n,it=e,!(it&6)&&xs()}}function Nm(){qn=Go.current,gt(Go)}function Gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gE(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(dm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Iu();break;case 3:la(),gt(Fn),gt(Sn),Sm();break;case 5:ym(i);break;case 4:la();break;case 13:gt(At);break;case 19:gt(At);break;case 10:gm(i.type._context);break;case 22:case 23:Nm()}n=n.return}if(sn=t,zt=t=ss(t.current,null),ln=qn=e,jt=0,Wl=null,bm=Sf=Js=0,Dn=El=null,Os!==null){for(e=0;e<Os.length;e++)if(n=Os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Os=null}return t}function Nx(t,e){do{var n=zt;try{if(mm(),gu.current=Gu,Hu){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hu=!1}if(Qs=0,tn=Wt=bt=null,Sl=!1,Vl=0,Cm.current=null,n===null||n.return===null){jt=1,Wl=e,zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ln,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Bg(o);if(p!==null){p.flags&=-257,zg(p,o,a,s,e),p.mode&1&&kg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){kg(s,c,e),Dm();break e}l=Error(ne(426))}}else if(Mt&&a.mode&1){var m=Bg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),zg(m,o,a,s,e),hm(ca(l,a));break e}}s=l=ca(l,a),jt!==4&&(jt=2),El===null?El=[s]:El.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=mx(s,l,e);Ng(s,u);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(is===null||!is.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=gx(s,a,e);Ng(s,M);break e}}s=s.return}while(s!==null)}Ux(n)}catch(C){e=C,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Dx(){var t=Wu.current;return Wu.current=Gu,t===null?Gu:t}function Dm(){(jt===0||jt===3||jt===2)&&(jt=4),sn===null||!(Js&268435455)&&!(Sf&268435455)||$r(sn,ln)}function Xu(t,e){var n=it;it|=2;var i=Dx();(sn!==t||ln!==e)&&(pr=null,Gs(t,e));do try{VE();break}catch(r){Nx(t,r)}while(!0);if(mm(),it=n,Wu.current=i,zt!==null)throw Error(ne(261));return sn=null,ln=0,jt}function VE(){for(;zt!==null;)Ix(zt)}function HE(){for(;zt!==null&&!hM();)Ix(zt)}function Ix(t){var e=Ox(t.alternate,t,qn);t.memoizedProps=t.pendingProps,e===null?Ux(t):zt=e,Cm.current=null}function Ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UE(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,zt=null;return}}else if(n=IE(n,e,qn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);jt===0&&(jt=5)}function Ls(t,e,n){var i=lt,r=xi.transition;try{xi.transition=null,lt=1,GE(t,e,n,i)}finally{xi.transition=r,lt=i}return null}function GE(t,e,n,i){do Qo();while(Kr!==null);if(it&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(EM(t,s),t===sn&&(zt=sn=null,ln=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lc||(Lc=!0,kx(Cu,function(){return Qo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xi.transition,xi.transition=null;var o=lt;lt=1;var a=it;it|=4,Cm.current=null,OE(t,n),bx(n,t),cE(qh),Pu=!!Yh,qh=Yh=null,t.current=n,kE(n),pM(),it=a,lt=o,xi.transition=s}else t.current=n;if(Lc&&(Lc=!1,Kr=t,$u=r),s=t.pendingLanes,s===0&&(is=null),_M(n.stateNode),kn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ju)throw ju=!1,t=mp,mp=null,t;return $u&1&&t.tag!==0&&Qo(),s=t.pendingLanes,s&1?t===gp?wl++:(wl=0,gp=t):wl=0,xs(),null}function Qo(){if(Kr!==null){var t=m2($u),e=xi.transition,n=lt;try{if(xi.transition=null,lt=16>t?16:t,Kr===null)var i=!1;else{if(t=Kr,Kr=null,$u=0,it&6)throw Error(ne(331));var r=it;for(it|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:Ml(8,f,s)}var h=f.child;if(h!==null)h.return=f,ge=h;else for(;ge!==null;){f=ge;var d=f.sibling,p=f.return;if(Ax(f),f===c){ge=null;break}if(d!==null){d.return=p,ge=d;break}ge=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ml(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var g=t.current;for(ge=g;ge!==null;){o=ge;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ge=_;else e:for(o=g;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yf(9,a)}}catch(C){Nt(a,a.return,C)}if(a===o){ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ge=M;break e}ge=a.return}}if(it=r,xs(),Ki&&typeof Ki.onPostCommitFiberRoot=="function")try{Ki.onPostCommitFiberRoot(df,t)}catch{}i=!0}return i}finally{lt=n,xi.transition=e}}return!1}function Jg(t,e,n){e=ca(n,e),e=mx(t,e,1),t=ns(t,e,1),e=Rn(),t!==null&&(Zl(t,1,e),kn(t,e))}function Nt(t,e,n){if(t.tag===3)Jg(t,t,n);else for(;e!==null;){if(e.tag===3){Jg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(is===null||!is.has(i))){t=ca(n,t),t=gx(e,t,1),e=ns(e,t,1),t=Rn(),e!==null&&(Zl(e,1,t),kn(e,t));break}}e=e.return}}function WE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Rn(),t.pingedLanes|=t.suspendedLanes&n,sn===t&&(ln&n)===n&&(jt===4||jt===3&&(ln&130023424)===ln&&500>Ft()-Pm?Gs(t,0):bm|=n),kn(t,e)}function Fx(t,e){e===0&&(t.mode&1?(e=Sc,Sc<<=1,!(Sc&130023424)&&(Sc=4194304)):e=1);var n=Rn();t=Tr(t,e),t!==null&&(Zl(t,e,n),kn(t,n))}function jE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fx(t,n)}function $E(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Fx(t,n)}var Ox;Ox=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fn.current)Un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Un=!1,DE(t,e,n);Un=!!(t.flags&131072)}else Un=!1,Mt&&e.flags&1048576&&V2(e,Ou,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vu(t,e),t=e.pendingProps;var r=sa(e,Sn.current);Zo(e,n),r=Em(null,e,i,t,r,n);var s=wm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,On(i)?(s=!0,Uu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vm(e),r.updater=xf,e.stateNode=r,r._reactInternals=e,rp(e,i,t,n),e=ap(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&fm(e),An(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=YE(i),t=bi(i,t),r){case 0:e=op(null,e,i,t,n);break e;case 1:e=Gg(null,e,i,t,n);break e;case 11:e=Vg(null,e,i,t,n);break e;case 14:e=Hg(null,e,i,bi(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),op(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),Gg(t,e,i,r,n);case 3:e:{if(yx(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,X2(t,e),zu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ca(Error(ne(423)),e),e=Wg(t,e,i,n,r);break e}else if(i!==r){r=ca(Error(ne(424)),e),e=Wg(t,e,i,n,r);break e}else for(Kn=ts(e.stateNode.containerInfo.firstChild),Zn=e,Mt=!0,Li=null,n=j2(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oa(),i===r){e=Ar(t,e,n);break e}An(t,e,i,n)}e=e.child}return e;case 5:return Y2(e),t===null&&tp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Kh(i,r)?o=null:s!==null&&Kh(i,s)&&(e.flags|=32),xx(t,e),An(t,e,o,n),e.child;case 6:return t===null&&tp(e),null;case 13:return Sx(t,e,n);case 4:return xm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=aa(e,null,i,n):An(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),Vg(t,e,i,r,n);case 7:return An(t,e,e.pendingProps,n),e.child;case 8:return An(t,e,e.pendingProps.children,n),e.child;case 12:return An(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(ku,i._currentValue),i._currentValue=o,s!==null)if(Fi(s.value,o)){if(s.children===r.children&&!Fn.current){e=Ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),np(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),np(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zo(e,n),r=yi(r),i=i(r),e.flags|=1,An(t,e,i,n),e.child;case 14:return i=e.type,r=bi(i,e.pendingProps),r=bi(i.type,r),Hg(t,e,i,r,n);case 15:return _x(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),vu(t,e),e.tag=1,On(i)?(t=!0,Uu(e)):t=!1,Zo(e,n),px(e,i,r),rp(e,i,r,n),ap(null,e,i,!0,t,n);case 19:return Mx(t,e,n);case 22:return vx(t,e,n)}throw Error(ne(156,e.tag))};function kx(t,e){return f2(t,e)}function XE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(t,e,n,i){return new XE(t,e,n,i)}function Im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YE(t){if(typeof t=="function")return Im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jp)return 11;if(t===em)return 14}return 2}function ss(t,e){var n=t.alternate;return n===null?(n=gi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Su(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Do:return Ws(n.children,r,s,e);case Qp:o=8,r|=8;break;case Ch:return t=gi(12,n,e,r|2),t.elementType=Ch,t.lanes=s,t;case bh:return t=gi(13,n,e,r),t.elementType=bh,t.lanes=s,t;case Ph:return t=gi(19,n,e,r),t.elementType=Ph,t.lanes=s,t;case Yv:return Mf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $v:o=10;break e;case Xv:o=9;break e;case Jp:o=11;break e;case em:o=14;break e;case Hr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=gi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ws(t,e,n,i){return t=gi(7,t,i,e),t.lanes=n,t}function Mf(t,e,n,i){return t=gi(22,t,i,e),t.elementType=Yv,t.lanes=n,t.stateNode={isHidden:!1},t}function Pd(t,e,n){return t=gi(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=gi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Um(t,e,n,i,r,s,o,a,l){return t=new qE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vm(s),t}function KE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:No,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bx(t){if(!t)return fs;t=t._reactInternals;e:{if(oo(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(On(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(On(n))return B2(t,n,e)}return e}function zx(t,e,n,i,r,s,o,a,l){return t=Um(n,i,!0,t,r,s,o,a,l),t.context=Bx(null),n=t.current,i=Rn(),r=rs(n),s=Mr(i,r),s.callback=e??null,ns(n,s,r),t.current.lanes=r,Zl(t,r,i),kn(t,i),t}function Ef(t,e,n,i){var r=e.current,s=Rn(),o=rs(r);return n=Bx(n),e.context===null?e.context=n:e.pendingContext=n,e=Mr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ns(r,e,o),t!==null&&(Ii(t,r,o,s),mu(t,r,o)),o}function Yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fm(t,e){e1(t,e),(t=t.alternate)&&e1(t,e)}function ZE(){return null}var Vx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Om(t){this._internalRoot=t}wf.prototype.render=Om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Ef(t,e,null,null)};wf.prototype.unmount=Om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;eo(function(){Ef(null,t,null,null)}),e[wr]=null}};function wf(t){this._internalRoot=t}wf.prototype.unstable_scheduleHydration=function(t){if(t){var e=v2();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&y2(t)}};function km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t1(){}function QE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yu(o);s.call(c)}}var o=zx(e,i,t,0,null,!1,!1,"",t1);return t._reactRootContainer=o,t[wr]=o.current,Fl(t.nodeType===8?t.parentNode:t),eo(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yu(l);a.call(c)}}var l=Um(t,0,!1,null,null,!1,!1,"",t1);return t._reactRootContainer=l,t[wr]=l.current,Fl(t.nodeType===8?t.parentNode:t),eo(function(){Ef(e,l,n,i)}),l}function Af(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yu(o);a.call(l)}}Ef(e,o,t,r)}else o=QE(n,e,t,r,i);return Yu(o)}g2=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fl(e.pendingLanes);n!==0&&(im(e,n|1),kn(e,Ft()),!(it&6)&&(ua=Ft()+500,xs()))}break;case 13:eo(function(){var i=Tr(t,1);if(i!==null){var r=Rn();Ii(i,t,1,r)}}),Fm(t,1)}};rm=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=Rn();Ii(e,t,134217728,n)}Fm(t,134217728)}};_2=function(t){if(t.tag===13){var e=rs(t),n=Tr(t,e);if(n!==null){var i=Rn();Ii(n,t,e,i)}Fm(t,e)}};v2=function(){return lt};x2=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};zh=function(t,e,n){switch(e){case"input":if(Dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gf(i);if(!r)throw Error(ne(90));Kv(i),Dh(i,r)}}}break;case"textarea":Qv(t,n);break;case"select":e=n.value,e!=null&&Xo(t,!!n.multiple,e,!1)}};s2=Lm;o2=eo;var JE={usingClientEntryPoint:!1,Events:[Jl,Oo,gf,i2,r2,Lm]},Ja={findFiberByHostInstance:Fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ew={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c2(t),t===null?null:t.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||ZE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{df=Nc.inject(ew),Ki=Nc}catch{}}ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE;ri.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!km(e))throw Error(ne(200));return KE(t,e,null,n)};ri.createRoot=function(t,e){if(!km(t))throw Error(ne(299));var n=!1,i="",r=Vx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Um(t,1,!1,null,null,n,!1,i,r),t[wr]=e.current,Fl(t.nodeType===8?t.parentNode:t),new Om(e)};ri.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=c2(e),t=t===null?null:t.stateNode,t};ri.flushSync=function(t){return eo(t)};ri.hydrate=function(t,e,n){if(!Tf(e))throw Error(ne(200));return Af(null,t,e,!0,n)};ri.hydrateRoot=function(t,e,n){if(!km(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Vx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zx(e,null,t,1,n??null,r,!1,s,o),t[wr]=e.current,Fl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wf(e)};ri.render=function(t,e,n){if(!Tf(e))throw Error(ne(200));return Af(null,t,e,!1,n)};ri.unmountComponentAtNode=function(t){if(!Tf(t))throw Error(ne(40));return t._reactRootContainer?(eo(function(){Af(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};ri.unstable_batchedUpdates=Lm;ri.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tf(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Af(t,e,n,!1,i)};ri.version="18.3.1-next-f1338f8080-20240426";function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(t){console.error(t)}}Hx(),Hv.exports=ri;var tw=Hv.exports,n1=tw;Ah.createRoot=n1.createRoot,Ah.hydrateRoot=n1.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bm="164",nw=0,i1=1,iw=2,Gx=1,rw=2,hr=3,ds=0,Bn=1,_r=2,os=0,Jo=1,r1=2,s1=3,o1=4,sw=5,Is=100,ow=101,aw=102,lw=103,cw=104,uw=200,fw=201,dw=202,hw=203,xp=204,yp=205,pw=206,mw=207,gw=208,_w=209,vw=210,xw=211,yw=212,Sw=213,Mw=214,Ew=0,ww=1,Tw=2,qu=3,Aw=4,Rw=5,Cw=6,bw=7,Wx=0,Pw=1,Lw=2,as=0,Nw=1,Dw=2,Iw=3,Uw=4,Fw=5,Ow=6,kw=7,jx=300,fa=301,da=302,Sp=303,Mp=304,Rf=306,Ep=1e3,Bs=1001,wp=1002,_i=1003,Bw=1004,Dc=1005,Ni=1006,Nd=1007,zs=1008,hs=1009,zw=1010,Vw=1011,$x=1012,Xx=1013,ha=1014,Zr=1015,Cf=1016,Yx=1017,qx=1018,tc=1020,Hw=35902,Gw=1021,Ww=1022,Yi=1023,jw=1024,$w=1025,ea=1026,jl=1027,Xw=1028,Kx=1029,Yw=1030,Zx=1031,Qx=1033,Dd=33776,Id=33777,Ud=33778,Fd=33779,a1=35840,l1=35841,c1=35842,u1=35843,f1=36196,d1=37492,h1=37496,p1=37808,m1=37809,g1=37810,_1=37811,v1=37812,x1=37813,y1=37814,S1=37815,M1=37816,E1=37817,w1=37818,T1=37819,A1=37820,R1=37821,Od=36492,C1=36494,b1=36495,qw=36283,P1=36284,L1=36285,N1=36286,Kw=3200,Zw=3201,Jx=0,Qw=1,Xr="",Wi="srgb",ys="srgb-linear",zm="display-p3",bf="display-p3-linear",Ku="linear",mt="srgb",Zu="rec709",Qu="p3",fo=7680,D1=519,Jw=512,e4=513,t4=514,ey=515,n4=516,i4=517,r4=518,s4=519,I1=35044,U1="300 es",Sr=2e3,Ju=2001;class ba{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=Math.PI/180,Tp=180/Math.PI;function nc(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[t&255]+mn[t>>8&255]+mn[t>>16&255]+mn[t>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function In(t,e,n){return Math.max(e,Math.min(n,t))}function o4(t,e){return(t%e+e)%e}function Bd(t,e,n){return(1-n)*t+n*e}function el(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],u=r[6],g=r[1],_=r[4],M=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*m+a*_+l*T,s[6]=o*u+a*M+l*A,s[1]=c*x+f*g+h*C,s[4]=c*m+f*_+h*T,s[7]=c*u+f*M+h*A,s[2]=d*x+p*g+v*C,s[5]=d*m+p*_+v*T,s[8]=d*u+p*M+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,p=c*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zd.makeScale(e,n)),this}rotate(e){return this.premultiply(zd.makeRotation(-e)),this}translate(e,n){return this.premultiply(zd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new Ve;function ty(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ef(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function a4(){const t=ef("canvas");return t.style.display="block",t}const F1={};function l4(t){t in F1||(F1[t]=!0,console.warn(t))}const O1=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),k1=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ic={[ys]:{transfer:Ku,primaries:Zu,toReference:t=>t,fromReference:t=>t},[Wi]:{transfer:mt,primaries:Zu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bf]:{transfer:Ku,primaries:Qu,toReference:t=>t.applyMatrix3(k1),fromReference:t=>t.applyMatrix3(O1)},[zm]:{transfer:mt,primaries:Qu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(k1),fromReference:t=>t.applyMatrix3(O1).convertLinearToSRGB()}},c4=new Set([ys,bf]),ct={enabled:!0,_workingColorSpace:ys,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!c4.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ic[e].toReference,r=Ic[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ic[t].primaries},getTransfer:function(t){return t===Xr?Ku:Ic[t].transfer}};function ta(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ho;class u4{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=ef("canvas")),ho.width=e.width,ho.height=e.height;const i=ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ef("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ta(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ta(n[i]/255)*255):n[i]=ta(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f4=0;class ny{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f4++}),this.uuid=nc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hd(r[o].image)):s.push(Hd(r[o]))}else s=Hd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?u4.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d4=0;class zn extends ba{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,i=Bs,r=Bs,s=Ni,o=zs,a=Yi,l=hs,c=zn.DEFAULT_ANISOTROPY,f=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d4++}),this.uuid=nc(),this.name="",this.source=new ny(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ep:e.x=e.x-Math.floor(e.x);break;case Bs:e.x=e.x<0?0:1;break;case wp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ep:e.y=e.y-Math.floor(e.y);break;case Bs:e.y=e.y<0?0:1;break;case wp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=jx;zn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,i=0,r=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,C=(u+1)/2,T=(f+d)/4,A=(h+x)/4,P=(v+m)/4;return _>M&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-x)/g,this.z=(d-f)/g,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h4 extends ba{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new zn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ny(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends h4{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iy extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class p4 extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||c!==p||f!==v){let m=1-a;const u=l*d+c*p+f*v+h*x,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,u*g);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const M=a*g;if(l=l*m+d*M,c=c*m+p*M,f=f*m+v*M,h=h*m+x*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*p-c*d,e[n+1]=l*v+f*d+c*h-a*p,e[n+2]=c*v+f*p+a*d-l*h,e[n+3]=f*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"YXZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"ZXY":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"ZYX":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"YZX":this._x=d*f*h+c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h-d*p*v;break;case"XZY":this._x=d*f*h-c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(B1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(B1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gd.copy(this).projectOnVector(e),this.sub(Gd)}reflect(e){return this.sub(Gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new U,B1=new ic;class rc{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uc.copy(i.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),Fc.subVectors(this.max,tl),po.subVectors(e.a,tl),mo.subVectors(e.b,tl),go.subVectors(e.c,tl),Ir.subVectors(mo,po),Ur.subVectors(go,mo),Es.subVectors(po,go);let n=[0,-Ir.z,Ir.y,0,-Ur.z,Ur.y,0,-Es.z,Es.y,Ir.z,0,-Ir.x,Ur.z,0,-Ur.x,Es.z,0,-Es.x,-Ir.y,Ir.x,0,-Ur.y,Ur.x,0,-Es.y,Es.x,0];return!Wd(n,po,mo,go,Fc)||(n=[1,0,0,0,1,0,0,0,1],!Wd(n,po,mo,go,Fc))?!1:(Oc.crossVectors(Ir,Ur),n=[Oc.x,Oc.y,Oc.z],Wd(n,po,mo,go,Fc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lr=[new U,new U,new U,new U,new U,new U,new U,new U],Ai=new U,Uc=new rc,po=new U,mo=new U,go=new U,Ir=new U,Ur=new U,Es=new U,tl=new U,Fc=new U,Oc=new U,ws=new U;function Wd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ws.fromArray(t,s);const a=r.x*Math.abs(ws.x)+r.y*Math.abs(ws.y)+r.z*Math.abs(ws.z),l=e.dot(ws),c=n.dot(ws),f=i.dot(ws);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const m4=new rc,nl=new U,jd=new U;class Pf{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):m4.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);const n=nl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(nl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(jd)),this.expandByPoint(nl.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cr=new U,$d=new U,kc=new U,Fr=new U,Xd=new U,Bc=new U,Yd=new U;class ry{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=cr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,n),cr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$d.copy(e).add(n).multiplyScalar(.5),kc.copy(n).sub(e).normalize(),Fr.copy(this.origin).sub($d);const s=e.distanceTo(n)*.5,o=-this.direction.dot(kc),a=Fr.dot(this.direction),l=-Fr.dot(kc),c=Fr.lengthSq(),f=Math.abs(1-o*o);let h,d,p,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const x=1/f;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($d).addScaledVector(kc,d),p}intersectSphere(e,n){cr.subVectors(e.center,this.origin);const i=cr.dot(this.direction),r=cr.dot(cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,n,i,r,s){Xd.subVectors(n,e),Bc.subVectors(i,e),Yd.crossVectors(Xd,Bc);let o=this.direction.dot(Yd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fr.subVectors(this.origin,e);const l=a*this.direction.dot(Bc.crossVectors(Fr,Bc));if(l<0)return null;const c=a*this.direction.dot(Xd.cross(Fr));if(c<0||l+c>o)return null;const f=-a*Fr.dot(Yd);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_o.setFromMatrixColumn(e,0).length(),s=1/_o.setFromMatrixColumn(e,1).length(),o=1/_o.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=o*f,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g4,e,_4)}lookAt(e,n,i){const r=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Or.crossVectors(i,Gn),Or.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Or.crossVectors(i,Gn)),Or.normalize(),zc.crossVectors(Gn,Or),r[0]=Or.x,r[4]=zc.x,r[8]=Gn.x,r[1]=Or.y,r[5]=zc.y,r[9]=Gn.y,r[2]=Or.z,r[6]=zc.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],g=i[3],_=i[7],M=i[11],C=i[15],T=r[0],A=r[4],P=r[8],E=r[12],y=r[1],I=r[5],V=r[9],L=r[13],H=r[2],$=r[6],Q=r[10],te=r[14],b=r[3],W=r[7],j=r[11],oe=r[15];return s[0]=o*T+a*y+l*H+c*b,s[4]=o*A+a*I+l*$+c*W,s[8]=o*P+a*V+l*Q+c*j,s[12]=o*E+a*L+l*te+c*oe,s[1]=f*T+h*y+d*H+p*b,s[5]=f*A+h*I+d*$+p*W,s[9]=f*P+h*V+d*Q+p*j,s[13]=f*E+h*L+d*te+p*oe,s[2]=v*T+x*y+m*H+u*b,s[6]=v*A+x*I+m*$+u*W,s[10]=v*P+x*V+m*Q+u*j,s[14]=v*E+x*L+m*te+u*oe,s[3]=g*T+_*y+M*H+C*b,s[7]=g*A+_*I+M*$+C*W,s[11]=g*P+_*V+M*Q+C*j,s[15]=g*E+_*L+M*te+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*f-s*l*f)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],u=e[15],g=h*m*c-x*d*c+x*l*p-a*m*p-h*l*u+a*d*u,_=v*d*c-f*m*c-v*l*p+o*m*p+f*l*u-o*d*u,M=f*x*c-v*h*c+v*a*p-o*x*p-f*a*u+o*h*u,C=v*h*l-f*x*l-v*a*d+o*x*d+f*a*m-o*h*m,T=n*g+i*_+r*M+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*u-i*d*u)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(f*m*s-v*d*s+v*r*p-n*m*p-f*r*u+n*d*u)*A,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=M*A,e[9]=(v*h*s-f*x*s-v*i*p+n*x*p+f*i*u-n*h*u)*A,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*A,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(f*x*r-v*h*r+v*i*d-n*x*d-f*i*m+n*h*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,p=s*f,v=s*h,x=o*f,m=o*h,u=a*h,g=l*c,_=l*f,M=l*h,C=i.x,T=i.y,A=i.z;return r[0]=(1-(x+u))*C,r[1]=(p+M)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+u))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=_o.set(r[0],r[1],r[2]).length();const o=_o.set(r[4],r[5],r[6]).length(),a=_o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ri.copy(this);const c=1/s,f=1/o,h=1/a;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=f,Ri.elements[5]*=f,Ri.elements[6]*=f,Ri.elements[8]*=h,Ri.elements[9]*=h,Ri.elements[10]*=h,n.setFromRotationMatrix(Ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Sr){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===Sr)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ju)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Sr){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*f;let v,x;if(a===Sr)v=(o+s)*h,x=-2*h;else if(a===Ju)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _o=new U,Ri=new Dt,g4=new U(0,0,0),_4=new U(1,1,1),Or=new U,zc=new U,Gn=new U,z1=new Dt,V1=new ic;class er{constructor(e=0,n=0,i=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(In(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-In(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return z1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return V1.setFromEuler(this),this.setFromQuaternion(V1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class sy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v4=0;const H1=new U,vo=new ic,ur=new Dt,Vc=new U,il=new U,x4=new U,y4=new ic,G1=new U(1,0,0),W1=new U(0,1,0),j1=new U(0,0,1),$1={type:"added"},S4={type:"removed"},xo={type:"childadded",child:null},qd={type:"childremoved",child:null};class on extends ba{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v4++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new U,n=new er,i=new ic,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ve}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(G1,e)}rotateY(e){return this.rotateOnAxis(W1,e)}rotateZ(e){return this.rotateOnAxis(j1,e)}translateOnAxis(e,n){return H1.copy(e).applyQuaternion(this.quaternion),this.position.add(H1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(G1,e)}translateY(e){return this.translateOnAxis(W1,e)}translateZ(e){return this.translateOnAxis(j1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vc.copy(e):Vc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(il,Vc,this.up):ur.lookAt(Vc,il,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),vo.setFromRotationMatrix(ur),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($1),xo.child=e,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(S4),qd.child=e,this.dispatchEvent(qd),qd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($1),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,x4),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,y4,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new U(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new U,fr=new U,Kd=new U,dr=new U,yo=new U,So=new U,X1=new U,Zd=new U,Qd=new U,Jd=new U;class Xi{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ci.subVectors(e,n),r.cross(Ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ci.subVectors(r,n),fr.subVectors(i,n),Kd.subVectors(e,n);const o=Ci.dot(Ci),a=Ci.dot(fr),l=Ci.dot(Kd),c=fr.dot(fr),f=fr.dot(Kd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static isFrontFacing(e,n,i,r){return Ci.subVectors(i,n),fr.subVectors(e,n),Ci.cross(fr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ci.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;yo.subVectors(r,i),So.subVectors(s,i),Zd.subVectors(e,i);const l=yo.dot(Zd),c=So.dot(Zd);if(l<=0&&c<=0)return n.copy(i);Qd.subVectors(e,r);const f=yo.dot(Qd),h=So.dot(Qd);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(yo,o);Jd.subVectors(e,s);const p=yo.dot(Jd),v=So.dot(Jd);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(So,a);const m=f*v-p*h;if(m<=0&&h-f>=0&&p-v>=0)return X1.subVectors(s,r),a=(h-f)/(h-f+(p-v)),n.copy(r).addScaledVector(X1,a);const u=1/(m+x+d);return o=x*u,a=d*u,n.copy(i).addScaledVector(yo,o).addScaledVector(So,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function eh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=o4(e,1),n=In(n,0,1),i=In(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=eh(o,s,e+1/3),this.g=eh(o,s,e),this.b=eh(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=Wi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wi){const i=oy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=Vd(e.r),this.g=Vd(e.g),this.b=Vd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wi){return ct.fromWorkingColorSpace(gn.copy(this),e),Math.round(In(gn.r*255,0,255))*65536+Math.round(In(gn.g*255,0,255))*256+Math.round(In(gn.b*255,0,255))}getHexString(e=Wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(gn.copy(this),n);const i=gn.r,r=gn.g,s=gn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Wi){ct.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,i=gn.g,r=gn.b;return e!==Wi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+n,kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kr),e.getHSL(Hc);const i=Bd(kr.h,Hc.h,n),r=Bd(kr.s,Hc.s,n),s=Bd(kr.l,Hc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new nt;nt.NAMES=oy;let M4=0;class Pa extends ba{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M4++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=Jo,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xp,this.blendDst=yp,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=qu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jo&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xp&&(i.blendSrc=this.blendSrc),this.blendDst!==yp&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D1&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lf extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new U,Gc=new Je;class Qi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=I1,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return l4("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Gc.fromBufferAttribute(this,n),Gc.applyMatrix3(e),this.setXY(n,Gc.x,Gc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=el(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=el(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=el(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=el(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=el(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array),s=Ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==I1&&(e.usage=this.usage),e}}class ay extends Qi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ly extends Qi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cn extends Qi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let E4=0;const ci=new Dt,th=new on,Mo=new U,Wn=new rc,rl=new rc,Jt=new U;class Mi extends ba{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E4++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ty(e)?ly:ay)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,i){return ci.makeTranslation(e,n,i),this.applyMatrix4(ci),this}scale(e,n,i){return ci.makeScale(e,n,i),this.applyMatrix4(ci),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];rl.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Wn.min,rl.min),Wn.expandByPoint(Jt),Jt.addVectors(Wn.max,rl.max),Wn.expandByPoint(Jt)):(Wn.expandByPoint(rl.min),Wn.expandByPoint(rl.max))}Wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Jt.fromBufferAttribute(a,c),l&&(Mo.fromBufferAttribute(e,c),Jt.add(Mo)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,f=new U,h=new U,d=new Je,p=new Je,v=new Je,x=new U,m=new U;function u(P,E,y){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,y),f.sub(c),h.sub(c),p.sub(d),v.sub(d);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(I),a[P].add(x),a[E].add(x),a[y].add(x),l[P].add(m),l[E].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,E=g.length;P<E;++P){const y=g[P],I=y.start,V=y.count;for(let L=I,H=I+V;L<H;L+=3)u(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new U,M=new U,C=new U,T=new U;function A(P){C.fromBufferAttribute(r,P),T.copy(C);const E=a[P];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(T,E);const I=M.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,I)}for(let P=0,E=g.length;P<E;++P){const y=g[P],I=y.start,V=y.count;for(let L=I,H=I+V;L<H;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,f=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let u=0;u<f;u++)d[v++]=c[p++]}return new Qi(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y1=new Dt,Ts=new ry,Wc=new Pf,q1=new U,Eo=new U,wo=new U,To=new U,nh=new U,jc=new U,$c=new Je,Xc=new Je,Yc=new Je,K1=new U,Z1=new U,Q1=new U,qc=new U,Kc=new U;class xn extends on{constructor(e=new Mi,n=new Lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(nh.fromBufferAttribute(h,e),o?jc.addScaledVector(nh,f):jc.addScaledVector(nh.sub(n),f))}n.add(jc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wc.copy(i.boundingSphere),Wc.applyMatrix4(s),Ts.copy(e.ray).recast(e.near),!(Wc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Wc,q1)===null||Ts.origin.distanceToSquared(q1)>(e.far-e.near)**2))&&(Y1.copy(s).invert(),Ts.copy(e.ray).applyMatrix4(Y1),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ts)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=_;M<C;M+=3){const T=a.getX(M),A=a.getX(M+1),P=a.getX(M+2);r=Zc(this,u,e,i,c,f,h,T,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const g=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=Zc(this,o,e,i,c,f,h,g,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=_;M<C;M+=3){const T=M,A=M+1,P=M+2;r=Zc(this,u,e,i,c,f,h,T,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const g=m,_=m+1,M=m+2;r=Zc(this,o,e,i,c,f,h,g,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function w4(t,e,n,i,r,s,o,a){let l;if(e.side===Bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ds,a),l===null)return null;Kc.copy(a),Kc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Kc);return c<n.near||c>n.far?null:{distance:c,point:Kc.clone(),object:t}}function Zc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Eo),t.getVertexPosition(l,wo),t.getVertexPosition(c,To);const f=w4(t,e,n,i,Eo,wo,To,qc);if(f){r&&($c.fromBufferAttribute(r,a),Xc.fromBufferAttribute(r,l),Yc.fromBufferAttribute(r,c),f.uv=Xi.getInterpolation(qc,Eo,wo,To,$c,Xc,Yc,new Je)),s&&($c.fromBufferAttribute(s,a),Xc.fromBufferAttribute(s,l),Yc.fromBufferAttribute(s,c),f.uv1=Xi.getInterpolation(qc,Eo,wo,To,$c,Xc,Yc,new Je)),o&&(K1.fromBufferAttribute(o,a),Z1.fromBufferAttribute(o,l),Q1.fromBufferAttribute(o,c),f.normal=Xi.getInterpolation(qc,Eo,wo,To,K1,Z1,Q1,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};Xi.getNormal(Eo,wo,To,h.normal),f.face=h}return f}class ls extends Mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(f,3)),this.setAttribute("uv",new Cn(h,2));function v(x,m,u,g,_,M,C,T,A,P,E){const y=M/A,I=C/P,V=M/2,L=C/2,H=T/2,$=A+1,Q=P+1;let te=0,b=0;const W=new U;for(let j=0;j<Q;j++){const oe=j*I-L;for(let xe=0;xe<$;xe++){const Ze=xe*y-V;W[x]=Ze*g,W[m]=oe*_,W[u]=H,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[u]=T>0?1:-1,f.push(W.x,W.y,W.z),h.push(xe/A),h.push(1-j/P),te+=1}}for(let j=0;j<P;j++)for(let oe=0;oe<A;oe++){const xe=d+oe+$*j,Ze=d+oe+$*(j+1),G=d+(oe+1)+$*(j+1),ie=d+(oe+1)+$*j;l.push(xe,Ze,ie),l.push(Ze,G,ie),b+=6}a.addGroup(p,b,E),p+=b,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Tn(t){const e={};for(let n=0;n<t.length;n++){const i=pa(t[n]);for(const r in i)e[r]=i[r]}return e}function T4(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const A4={clone:pa,merge:Tn};var R4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R4,this.fragmentShader=C4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=T4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class uy extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Sr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new U,J1=new Je,e_=new Je;class mi extends uy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tp*2*Math.atan(Math.tan(kd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,n){return this.getViewBounds(e,J1,e_),n.subVectors(e_,J1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ao=-90,Ro=1;class b4 extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mi(Ao,Ro,e,n);r.layers=this.layers,this.add(r);const s=new mi(Ao,Ro,e,n);s.layers=this.layers,this.add(s);const o=new mi(Ao,Ro,e,n);o.layers=this.layers,this.add(o);const a=new mi(Ao,Ro,e,n);a.layers=this.layers,this.add(a);const l=new mi(Ao,Ro,e,n);l.layers=this.layers,this.add(l);const c=new mi(Ao,Ro,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ju)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class fy extends zn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:fa,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P4 extends to{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ls(5,5,5),s=new ps({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:os});s.uniforms.tEquirect.value=n;const o=new xn(r,s),a=n.minFilter;return n.minFilter===zs&&(n.minFilter=Ni),new b4(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ih=new U,L4=new U,N4=new Ve;class Ns{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ih.subVectors(i,n).cross(L4.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ih),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||N4.getNormalMatrix(e),r=this.coplanarPoint(ih).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Pf,Qc=new U;class Vm{constructor(e=new Ns,n=new Ns,i=new Ns,r=new Ns,s=new Ns,o=new Ns){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Sr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],u=r[12],g=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-u).normalize(),i[1].setComponents(l+s,d+c,m+p,M+u).normalize(),i[2].setComponents(l+o,d+f,m+v,M+g).normalize(),i[3].setComponents(l-o,d-f,m-v,M-g).normalize(),i[4].setComponents(l-a,d-h,m-x,M-_).normalize(),n===Sr)i[5].setComponents(l+a,d+h,m+x,M+_).normalize();else if(n===Ju)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qc.x=r.normal.x>0?e.max.x:e.min.x,Qc.y=r.normal.y>0?e.max.y:e.min.y,Qc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function D4(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,f),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class sc extends Mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<f;u++){const g=u*d-o;for(let _=0;_<c;_++){const M=_*h-s;v.push(M,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const _=g+c*u,M=g+c*(u+1),C=g+1+c*(u+1),T=g+1+c*u;p.push(_,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Cn(v,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var I4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H4=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,W4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$4=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uT="gl_FragColor = linearToOutputTexel( gl_FragColor );",fT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_T=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ST=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ET=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,VA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:I4,alphahash_pars_fragment:U4,alphamap_fragment:F4,alphamap_pars_fragment:O4,alphatest_fragment:k4,alphatest_pars_fragment:B4,aomap_fragment:z4,aomap_pars_fragment:V4,batching_pars_vertex:H4,batching_vertex:G4,begin_vertex:W4,beginnormal_vertex:j4,bsdfs:$4,iridescence_fragment:X4,bumpmap_pars_fragment:Y4,clipping_planes_fragment:q4,clipping_planes_pars_fragment:K4,clipping_planes_pars_vertex:Z4,clipping_planes_vertex:Q4,color_fragment:J4,color_pars_fragment:eT,color_pars_vertex:tT,color_vertex:nT,common:iT,cube_uv_reflection_fragment:rT,defaultnormal_vertex:sT,displacementmap_pars_vertex:oT,displacementmap_vertex:aT,emissivemap_fragment:lT,emissivemap_pars_fragment:cT,colorspace_fragment:uT,colorspace_pars_fragment:fT,envmap_fragment:dT,envmap_common_pars_fragment:hT,envmap_pars_fragment:pT,envmap_pars_vertex:mT,envmap_physical_pars_fragment:AT,envmap_vertex:gT,fog_vertex:_T,fog_pars_vertex:vT,fog_fragment:xT,fog_pars_fragment:yT,gradientmap_pars_fragment:ST,lightmap_pars_fragment:MT,lights_lambert_fragment:ET,lights_lambert_pars_fragment:wT,lights_pars_begin:TT,lights_toon_fragment:RT,lights_toon_pars_fragment:CT,lights_phong_fragment:bT,lights_phong_pars_fragment:PT,lights_physical_fragment:LT,lights_physical_pars_fragment:NT,lights_fragment_begin:DT,lights_fragment_maps:IT,lights_fragment_end:UT,logdepthbuf_fragment:FT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:BT,map_fragment:zT,map_pars_fragment:VT,map_particle_fragment:HT,map_particle_pars_fragment:GT,metalnessmap_fragment:WT,metalnessmap_pars_fragment:jT,morphinstance_vertex:$T,morphcolor_vertex:XT,morphnormal_vertex:YT,morphtarget_pars_vertex:qT,morphtarget_vertex:KT,normal_fragment_begin:ZT,normal_fragment_maps:QT,normal_pars_fragment:JT,normal_pars_vertex:eA,normal_vertex:tA,normalmap_pars_fragment:nA,clearcoat_normal_fragment_begin:iA,clearcoat_normal_fragment_maps:rA,clearcoat_pars_fragment:sA,iridescence_pars_fragment:oA,opaque_fragment:aA,packing:lA,premultiplied_alpha_fragment:cA,project_vertex:uA,dithering_fragment:fA,dithering_pars_fragment:dA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:pA,shadowmap_pars_fragment:mA,shadowmap_pars_vertex:gA,shadowmap_vertex:_A,shadowmask_pars_fragment:vA,skinbase_vertex:xA,skinning_pars_vertex:yA,skinning_vertex:SA,skinnormal_vertex:MA,specularmap_fragment:EA,specularmap_pars_fragment:wA,tonemapping_fragment:TA,tonemapping_pars_fragment:AA,transmission_fragment:RA,transmission_pars_fragment:CA,uv_pars_fragment:bA,uv_pars_vertex:PA,uv_vertex:LA,worldpos_vertex:NA,background_vert:DA,background_frag:IA,backgroundCube_vert:UA,backgroundCube_frag:FA,cube_vert:OA,cube_frag:kA,depth_vert:BA,depth_frag:zA,distanceRGBA_vert:VA,distanceRGBA_frag:HA,equirect_vert:GA,equirect_frag:WA,linedashed_vert:jA,linedashed_frag:$A,meshbasic_vert:XA,meshbasic_frag:YA,meshlambert_vert:qA,meshlambert_frag:KA,meshmatcap_vert:ZA,meshmatcap_frag:QA,meshnormal_vert:JA,meshnormal_frag:eR,meshphong_vert:tR,meshphong_frag:nR,meshphysical_vert:iR,meshphysical_frag:rR,meshtoon_vert:sR,meshtoon_frag:oR,points_vert:aR,points_frag:lR,shadow_vert:cR,shadow_frag:uR,sprite_vert:fR,sprite_frag:dR},ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ji={basic:{uniforms:Tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tn([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tn([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tn([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Tn([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Tn([ce.lights,ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ji.physical={uniforms:Tn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Jc={r:0,b:0,g:0},Rs=new er,hR=new Dt;function pR(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const M=v(g);M===null?u(a,l):M&&M.isColor&&(u(M,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(g,_){const M=v(_);M&&(M.isCubeTexture||M.mapping===Rf)?(f===void 0&&(f=new xn(new ls(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:pa(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Rs.copy(_.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(hR.makeRotationFromEuler(Rs)),f.material.toneMapped=ct.getTransfer(M.colorSpace)!==mt,(h!==M||d!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xn(new sc(2,2),new ps({name:"BackgroundMaterial",uniforms:pa(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ct.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,_){g.getRGB(Jc,cy(t)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:x,addToRenderList:m}}function mR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,I,V,L,H){let $=!1;const Q=h(L,V,I);s!==Q&&(s=Q,c(s.object)),$=p(y,L,V,H),$&&v(y,L,V,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(y,I,V,L),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function h(y,I,V){const L=V.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let $=H[I.id];$===void 0&&($={},H[I.id]=$);let Q=$[L];return Q===void 0&&(Q=d(l()),$[L]=Q),Q}function d(y){const I=[],V=[],L=[];for(let H=0;H<n;H++)I[H]=0,V[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:L,object:y,attributes:{},index:null}}function p(y,I,V,L){const H=s.attributes,$=I.attributes;let Q=0;const te=V.getAttributes();for(const b in te)if(te[b].location>=0){const j=H[b];let oe=$[b];if(oe===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;Q++}return s.attributesNum!==Q||s.index!==L}function v(y,I,V,L){const H={},$=I.attributes;let Q=0;const te=V.getAttributes();for(const b in te)if(te[b].location>=0){let j=$[b];j===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));const oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),H[b]=oe,Q++}s.attributes=H,s.attributesNum=Q,s.index=L}function x(){const y=s.newAttributes;for(let I=0,V=y.length;I<V;I++)y[I]=0}function m(y){u(y,0)}function u(y,I){const V=s.newAttributes,L=s.enabledAttributes,H=s.attributeDivisors;V[y]=1,L[y]===0&&(t.enableVertexAttribArray(y),L[y]=1),H[y]!==I&&(t.vertexAttribDivisor(y,I),H[y]=I)}function g(){const y=s.newAttributes,I=s.enabledAttributes;for(let V=0,L=I.length;V<L;V++)I[V]!==y[V]&&(t.disableVertexAttribArray(V),I[V]=0)}function _(y,I,V,L,H,$,Q){Q===!0?t.vertexAttribIPointer(y,I,V,H,$):t.vertexAttribPointer(y,I,V,L,H,$)}function M(y,I,V,L){x();const H=L.attributes,$=V.getAttributes(),Q=I.defaultAttributeValues;for(const te in $){const b=$[te];if(b.location>=0){let W=H[te];if(W===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const j=W.normalized,oe=W.itemSize,xe=e.get(W);if(xe===void 0)continue;const Ze=xe.buffer,G=xe.type,ie=xe.bytesPerElement,he=G===t.INT||G===t.UNSIGNED_INT||W.gpuType===Xx;if(W.isInterleavedBufferAttribute){const re=W.data,Ge=re.stride,$e=W.offset;if(re.isInstancedInterleavedBuffer){for(let F=0;F<b.locationSize;F++)u(b.location+F,re.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let F=0;F<b.locationSize;F++)m(b.location+F);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let F=0;F<b.locationSize;F++)_(b.location+F,oe/b.locationSize,G,j,Ge*ie,($e+oe/b.locationSize*F)*ie,he)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<b.locationSize;re++)u(b.location+re,W.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<b.locationSize;re++)m(b.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let re=0;re<b.locationSize;re++)_(b.location+re,oe/b.locationSize,G,j,oe*ie,oe/b.locationSize*re*ie,he)}}else if(Q!==void 0){const j=Q[te];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(b.location,j);break;case 3:t.vertexAttrib3fv(b.location,j);break;case 4:t.vertexAttrib4fv(b.location,j);break;default:t.vertexAttrib1fv(b.location,j)}}}}g()}function C(){P();for(const y in i){const I=i[y];for(const V in I){const L=I[V];for(const H in L)f(L[H].object),delete L[H];delete I[V]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const V in I){const L=I[V];for(const H in L)f(L[H].object),delete L[H];delete I[V]}delete i[y.id]}function A(y){for(const I in i){const V=i[I];if(V[y.id]===void 0)continue;const L=V[y.id];for(const H in L)f(L[H].object),delete L[H];delete V[y.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function gR(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(c[p],f[p]);else{d.multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=f[v];n.update(p,i,1)}}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _R(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Yi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Cf&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==hs&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Zr&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:M,maxSamples:C}}function vR(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ns,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?f(null):c();else{const g=s?0:i,_=g*4;let M=u.clippingState||null;l.value=M,M=f(v,d,_,p);for(let C=0;C!==_;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,M=p;_!==x;++_,M+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function xR(t){let e=new WeakMap;function n(o,a){return a===Sp?o.mapping=fa:a===Mp&&(o.mapping=da),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sp||a===Mp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new P4(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hy extends uy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Wo=4,t_=[.125,.215,.35,.446,.526,.582],Us=20,rh=new hy,n_=new nt;let sh=null,oh=0,ah=0,lh=!1;const Ds=(1+Math.sqrt(5))/2,Co=1/Ds,i_=[new U(-Ds,Co,0),new U(Ds,Co,0),new U(-Co,0,Ds),new U(Co,0,Ds),new U(0,Ds,-Co),new U(0,Ds,Co),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class r_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,oh,ah),this._renderer.xr.enabled=lh,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fa||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Cf,format:Yi,colorSpace:ys,depthBuffer:!1},r=s_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yR(s)),this._blurMaterial=SR(s,e,n)}return r}_compileMaterial(e){const n=new xn(this._lodPlanes[0],e);this._renderer.compile(n,rh)}_sceneToCubeUV(e,n,i,r){const a=new mi(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(n_),f.toneMapping=as,f.autoClear=!1;const p=new Lf({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),v=new xn(new ls,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(n_),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;eu(r,g*_,u>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fa||e.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;eu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=i_[(r-s-1)%i_.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new xn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Us-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):Us;m>Us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const u=[];let g=0;for(let A=0;A<Us;++A){const P=A/x,E=Math.exp(-P*P/2);u.push(E),A===0?g+=E:A<m&&(g+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const M=this._sizeLods[r],C=3*M*(r>_-Wo?r-_+Wo:0),T=4*(this._cubeSize-M);eu(n,C,T,3*M,2*M),l.setRenderTarget(n),l.render(h,rh)}}function yR(t){const e=[],n=[],i=[];let r=t;const s=t-Wo+1+t_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Wo?l=t_[o-t+Wo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,v=6,x=3,m=2,u=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(E,x*v*T),_.set(d,m*v*T);const y=[T,T,T,T,T,T];M.set(y,u*v*T)}const C=new Mi;C.setAttribute("position",new Qi(g,x)),C.setAttribute("uv",new Qi(_,m)),C.setAttribute("faceIndex",new Qi(M,u)),e.push(C),r>Wo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function s_(t,e,n){const i=new to(t,e,n);return i.texture.mapping=Rf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function SR(t,e,n){const i=new Float32Array(Us),r=new U(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function o_(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function a_(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Hm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sp||l===Mp,f=l===fa||l===da;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new r_(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new r_(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ER(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wR(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,M=g.length;_<M;_+=3){const C=g[_+0],T=g[_+1],A=g[_+2];d.push(C,T,T,A,A,C)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const C=_+0,T=_+1,A=_+2;d.push(C,T,T,A,A,C)}}else return;const m=new(ty(d)?ly:ay)(d,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function TR(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function f(d,p,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<v;m++)this.render(d[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}}function h(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g];for(let g=0;g<x.length;g++)n.update(u,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function AR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RR(t,e,n){const i=new WeakMap,r=new rn;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*h),P=new iy(A,C,T,h);P.type=Zr,P.needsUpdate=!0;const E=M*4;for(let I=0;I<h;I++){const V=u[I],L=g[I],H=_[I],$=C*T*4*I;for(let Q=0;Q<V.count;Q++){const te=Q*E;v===!0&&(r.fromBufferAttribute(V,Q),A[$+te+0]=r.x,A[$+te+1]=r.y,A[$+te+2]=r.z,A[$+te+3]=0),x===!0&&(r.fromBufferAttribute(L,Q),A[$+te+4]=r.x,A[$+te+5]=r.y,A[$+te+6]=r.z,A[$+te+7]=0),m===!0&&(r.fromBufferAttribute(H,Q),A[$+te+8]=r.x,A[$+te+9]=r.y,A[$+te+10]=r.z,A[$+te+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new Je(C,T)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function CR(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class py extends zn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:ea,f!==ea&&f!==jl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ea&&(i=ha),i===void 0&&f===jl&&(i=tc),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:_i,this.minFilter=l!==void 0?l:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const my=new zn,gy=new py(1,1);gy.compareFunction=ey;const _y=new iy,vy=new p4,xy=new fy,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),d_=new Float32Array(4);function La(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=l_[r];if(s===void 0&&(s=new Float32Array(r),l_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nf(t,e){let n=c_[e];n===void 0&&(n=new Int32Array(e),c_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function LR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function NR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function DR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,i))return;d_.set(i),t.uniformMatrix2fv(this.addr,!1,d_),Kt(n,i)}}function IR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,i))return;f_.set(i),t.uniformMatrix3fv(this.addr,!1,f_),Kt(n,i)}}function UR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,i))return;u_.set(i),t.uniformMatrix4fv(this.addr,!1,u_),Kt(n,i)}}function FR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function kR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function BR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function zR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function HR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function GR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function WR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?gy:my;n.setTexture2D(e||s,r)}function jR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vy,r)}function $R(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xy,r)}function XR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_y,r)}function YR(t){switch(t){case 5126:return bR;case 35664:return PR;case 35665:return LR;case 35666:return NR;case 35674:return DR;case 35675:return IR;case 35676:return UR;case 5124:case 35670:return FR;case 35667:case 35671:return OR;case 35668:case 35672:return kR;case 35669:case 35673:return BR;case 5125:return zR;case 36294:return VR;case 36295:return HR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return jR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return XR}}function qR(t,e){t.uniform1fv(this.addr,e)}function KR(t,e){const n=La(e,this.size,2);t.uniform2fv(this.addr,n)}function ZR(t,e){const n=La(e,this.size,3);t.uniform3fv(this.addr,n)}function QR(t,e){const n=La(e,this.size,4);t.uniform4fv(this.addr,n)}function JR(t,e){const n=La(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eC(t,e){const n=La(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tC(t,e){const n=La(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nC(t,e){t.uniform1iv(this.addr,e)}function iC(t,e){t.uniform2iv(this.addr,e)}function rC(t,e){t.uniform3iv(this.addr,e)}function sC(t,e){t.uniform4iv(this.addr,e)}function oC(t,e){t.uniform1uiv(this.addr,e)}function aC(t,e){t.uniform2uiv(this.addr,e)}function lC(t,e){t.uniform3uiv(this.addr,e)}function cC(t,e){t.uniform4uiv(this.addr,e)}function uC(t,e,n){const i=this.cache,r=e.length,s=Nf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||my,s[o])}function fC(t,e,n){const i=this.cache,r=e.length,s=Nf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||vy,s[o])}function dC(t,e,n){const i=this.cache,r=e.length,s=Nf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xy,s[o])}function hC(t,e,n){const i=this.cache,r=e.length,s=Nf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||_y,s[o])}function pC(t){switch(t){case 5126:return qR;case 35664:return KR;case 35665:return ZR;case 35666:return QR;case 35674:return JR;case 35675:return eC;case 35676:return tC;case 5124:case 35670:return nC;case 35667:case 35671:return iC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return aC;case 36295:return lC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return uC;case 35679:case 36299:case 36307:return fC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return hC}}class mC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YR(n.type)}}class gC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pC(n.type)}}class _C{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function h_(t,e){t.seq.push(e),t.map[e.id]=e}function vC(t,e,n){const i=t.name,r=i.length;for(ch.lastIndex=0;;){const s=ch.exec(i),o=ch.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){h_(n,c===void 0?new mC(a,t,e):new gC(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new _C(a),h_(n,h)),n=h}}}class Mu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);vC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function p_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xC=37297;let yC=0;function SC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function MC(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===Qu&&n===Zu?i="LinearDisplayP3ToLinearSRGB":e===Zu&&n===Qu&&(i="LinearSRGBToLinearDisplayP3"),t){case ys:case bf:return[i,"LinearTransferOETF"];case Wi:case zm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function m_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+SC(t.getShaderSource(e),o)}else return r}function EC(t,e){const n=MC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function wC(t,e){let n;switch(e){case Nw:n="Linear";break;case Dw:n="Reinhard";break;case Iw:n="OptimizedCineon";break;case Uw:n="ACESFilmic";break;case Ow:n="AgX";break;case kw:n="Neutral";break;case Fw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function TC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function AC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hl(t){return t!==""}function g_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(t){return t.replace(CC,PC)}const bC=new Map;function PC(t,e){let n=ze[e];if(n===void 0){const i=bC.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ap(n)}const LC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(t){return t.replace(LC,NC)}function NC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===rw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function IC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fa:case da:e="ENVMAP_TYPE_CUBE";break;case Rf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function FC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wx:e="ENVMAP_BLENDING_MULTIPLY";break;case Pw:e="ENVMAP_BLENDING_MIX";break;case Lw:e="ENVMAP_BLENDING_ADD";break}return e}function OC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DC(n),c=IC(n),f=UC(n),h=FC(n),d=OC(n),p=TC(n),v=AC(s),x=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(hl).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(hl).join(`
`),u.length>0&&(u+=`
`)):(m=[x_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),u=[x_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==as?"#define TONE_MAPPING":"",n.toneMapping!==as?ze.tonemapping_pars_fragment:"",n.toneMapping!==as?wC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,EC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hl).join(`
`)),o=Ap(o),o=g_(o,n),o=__(o,n),a=Ap(a),a=g_(a,n),a=__(a,n),o=v_(o),a=v_(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===U1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===U1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+o,M=g+u+a,C=p_(r,r.VERTEX_SHADER,_),T=p_(r,r.FRAGMENT_SHADER,M);r.attachShader(x,C),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(I){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),L=r.getShaderInfoLog(C).trim(),H=r.getShaderInfoLog(T).trim();let $=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,T);else{const te=m_(r,C,"vertex"),b=m_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+te+`
`+b)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||H==="")&&(Q=!1);Q&&(I.diagnostics={runnable:$,programLog:V,vertexShader:{log:L,prefix:m},fragmentShader:{log:H,prefix:u}})}r.deleteShader(C),r.deleteShader(T),P=new Mu(r,x),E=RC(r,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,xC)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}let BC=0;class zC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VC(e),n.set(e,i)),i}}class VC{constructor(e){this.id=BC++,this.code=e,this.usedTimes=0}}function HC(t,e,n,i,r,s,o){const a=new sy,l=new zC,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,I,V,L){const H=V.fog,$=L.geometry,Q=E.isMeshStandardMaterial?V.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||Q),b=te&&te.mapping===Rf?te.image.height:null,W=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const j=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=j!==void 0?j.length:0;let xe=0;$.morphAttributes.position!==void 0&&(xe=1),$.morphAttributes.normal!==void 0&&(xe=2),$.morphAttributes.color!==void 0&&(xe=3);let Ze,G,ie,he;if(W){const tt=ji[W];Ze=tt.vertexShader,G=tt.fragmentShader}else Ze=E.vertexShader,G=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const re=t.getRenderTarget(),Ge=L.isInstancedMesh===!0,$e=L.isBatchedMesh===!0,F=!!E.map,et=!!E.matcap,ee=!!te,be=!!E.aoMap,ve=!!E.lightMap,ye=!!E.bumpMap,de=!!E.normalMap,Ne=!!E.displacementMap,He=!!E.emissiveMap,R=!!E.metalnessMap,S=!!E.roughnessMap,B=E.anisotropy>0,Y=E.clearcoat>0,Z=E.dispersion>0,J=E.iridescence>0,Te=E.sheen>0,ae=E.transmission>0,le=B&&!!E.anisotropyMap,Ie=Y&&!!E.clearcoatMap,se=Y&&!!E.clearcoatNormalMap,Ce=Y&&!!E.clearcoatRoughnessMap,Xe=J&&!!E.iridescenceMap,Pe=J&&!!E.iridescenceThicknessMap,pe=Te&&!!E.sheenColorMap,Ue=Te&&!!E.sheenRoughnessMap,We=!!E.specularMap,_t=!!E.specularColorMap,Fe=!!E.specularIntensityMap,N=ae&&!!E.transmissionMap,K=ae&&!!E.thicknessMap,X=!!E.gradientMap,ue=!!E.alphaMap,me=E.alphaTest>0,qe=!!E.alphaHash,ft=!!E.extensions;let vt=as;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Gt={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:G,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:$e,instancing:Ge,instancingColor:Ge&&L.instanceColor!==null,instancingMorph:Ge&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ys,alphaToCoverage:!!E.alphaToCoverage,map:F,matcap:et,envMap:ee,envMapMode:ee&&te.mapping,envMapCubeUVHeight:b,aoMap:be,lightMap:ve,bumpMap:ye,normalMap:de,displacementMap:d&&Ne,emissiveMap:He,normalMapObjectSpace:de&&E.normalMapType===Qw,normalMapTangentSpace:de&&E.normalMapType===Jx,metalnessMap:R,roughnessMap:S,anisotropy:B,anisotropyMap:le,clearcoat:Y,clearcoatMap:Ie,clearcoatNormalMap:se,clearcoatRoughnessMap:Ce,dispersion:Z,iridescence:J,iridescenceMap:Xe,iridescenceThicknessMap:Pe,sheen:Te,sheenColorMap:pe,sheenRoughnessMap:Ue,specularMap:We,specularColorMap:_t,specularIntensityMap:Fe,transmission:ae,transmissionMap:N,thicknessMap:K,gradientMap:X,opaque:E.transparent===!1&&E.blending===Jo&&E.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:qe,combine:E.combine,mapUv:F&&x(E.map.channel),aoMapUv:be&&x(E.aoMap.channel),lightMapUv:ve&&x(E.lightMap.channel),bumpMapUv:ye&&x(E.bumpMap.channel),normalMapUv:de&&x(E.normalMap.channel),displacementMapUv:Ne&&x(E.displacementMap.channel),emissiveMapUv:He&&x(E.emissiveMap.channel),metalnessMapUv:R&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:le&&x(E.anisotropyMap.channel),clearcoatMapUv:Ie&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:We&&x(E.specularMap.channel),specularColorMapUv:_t&&x(E.specularColorMap.channel),specularIntensityMapUv:Fe&&x(E.specularIntensityMap.channel),transmissionMapUv:N&&x(E.transmissionMap.channel),thicknessMapUv:K&&x(E.thicknessMap.channel),alphaMapUv:ue&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(de||B),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!$.attributes.uv&&(F||ue),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:F&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_r,flipSided:E.side===Bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ft&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function u(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)y.push(I),y.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(g(y,E),_(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function g(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function _(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),E.push(a.mask)}function M(E){const y=v[E.type];let I;if(y){const V=ji[y];I=A4.clone(V.uniforms)}else I=E.uniforms;return I}function C(E,y){let I;for(let V=0,L=f.length;V<L;V++){const H=f[V];if(H.cacheKey===y){I=H,++I.usedTimes;break}}return I===void 0&&(I=new kC(t,y,E,s),f.push(I)),I}function T(E){if(--E.usedTimes===0){const y=f.indexOf(E);f[y]=f[f.length-1],f.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:f,dispose:P}}function GC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function WC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function y_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function S_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,d,p,v,x,m){const u=o(h,d,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,v,x,m){const u=o(h,d,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||WC),i.length>1&&i.sort(d||y_),r.length>1&&r.sort(d||y_)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function jC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new S_,t.set(i,[o])):r>=s.length?(o=new S_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $C(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new nt};break;case"SpotLight":n={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function XC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YC=0;function qC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KC(t){const e=new $C,n=XC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new Dt,o=new Dt;function a(c,f){let h=0,d=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let v=0,x=0,m=0,u=0,g=0,_=0,M=0,C=0,T=0,A=0,P=0;c.sort(qC);const E=f===!0?Math.PI:1;for(let I=0,V=c.length;I<V;I++){const L=c[I],H=L.color,$=L.intensity,Q=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*$*E,d+=H.g*$*E,p+=H.b*$*E;else if(L.isLightProbe){for(let b=0;b<9;b++)i.probe[b].addScaledVector(L.sh.coefficients[b],$);P++}else if(L.isDirectionalLight){const b=e.get(L);if(b.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const W=L.shadow,j=n.get(L);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[v]=j,i.directionalShadowMap[v]=te,i.directionalShadowMatrix[v]=L.shadow.matrix,_++}i.directional[v]=b,v++}else if(L.isSpotLight){const b=e.get(L);b.position.setFromMatrixPosition(L.matrixWorld),b.color.copy(H).multiplyScalar($*E),b.distance=Q,b.coneCos=Math.cos(L.angle),b.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),b.decay=L.decay,i.spot[m]=b;const W=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,W.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[m]=W.matrix,L.castShadow){const j=n.get(L);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=te,C++}m++}else if(L.isRectAreaLight){const b=e.get(L);b.color.copy(H).multiplyScalar($),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),i.rectArea[u]=b,u++}else if(L.isPointLight){const b=e.get(L);if(b.color.copy(L.color).multiplyScalar(L.intensity*E),b.distance=L.distance,b.decay=L.decay,L.castShadow){const W=L.shadow,j=n.get(L);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=L.shadow.matrix,M++}i.point[x]=b,x++}else if(L.isHemisphereLight){const b=e.get(L);b.skyColor.copy(L.color).multiplyScalar($*E),b.groundColor.copy(L.groundColor).multiplyScalar($*E),i.hemi[g]=b,g++}}u>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==v||y.pointLength!==x||y.spotLength!==m||y.rectAreaLength!==u||y.hemiLength!==g||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==C||y.numSpotMaps!==T||y.numLightProbes!==P)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=u,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,y.directionalLength=v,y.pointLength=x,y.spotLength=m,y.rectAreaLength=u,y.hemiLength=g,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=C,y.numSpotMaps=T,y.numLightProbes=P,i.version=YC++)}function l(c,f){let h=0,d=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function M_(t){const e=new KC(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(f){e.setup(n,f)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ZC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new M_(t),e.set(r,[a])):s>=o.length?(a=new M_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class QC extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JC extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nb(t,e,n){let i=new Vm;const r=new Je,s=new Je,o=new rn,a=new QC({depthPacking:Zw}),l=new JC,c={},f=n.maxTextureSize,h={[ds]:Bn,[Bn]:ds,[_r]:_r},d=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Mi;v.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gx;let u=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),V=t.state;V.setBlending(os),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const L=u!==hr&&this.type===hr,H=u===hr&&this.type!==hr;for(let $=0,Q=T.length;$<Q;$++){const te=T[$],b=te.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const W=b.getFrameExtents();if(r.multiply(W),s.copy(b.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,b.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,b.mapSize.y=s.y)),b.map===null||L===!0||H===!0){const oe=this.type!==hr?{minFilter:_i,magFilter:_i}:{};b.map!==null&&b.map.dispose(),b.map=new to(r.x,r.y,oe),b.map.texture.name=te.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const j=b.getViewportCount();for(let oe=0;oe<j;oe++){const xe=b.getViewport(oe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),V.viewport(o),b.updateMatrices(te,oe),i=b.getFrustum(),M(A,P,b.camera,te,this.type)}b.isPointLightShadow!==!0&&this.type===hr&&g(b,P),b.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,y,I)};function g(T,A){const P=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new to(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,p,x,null)}function _(T,A,P,E){let y=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=y.uuid,L=A.uuid;let H=c[V];H===void 0&&(H={},c[V]=H);let $=H[L];$===void 0&&($=y.clone(),H[L]=$,A.addEventListener("dispose",C)),y=$}if(y.visible=A.visible,y.wireframe=A.wireframe,E===hr?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=P}return y}function M(T,A,P,E,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===hr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const L=e.update(T),H=T.material;if(Array.isArray(H)){const $=L.groups;for(let Q=0,te=$.length;Q<te;Q++){const b=$[Q],W=H[b.materialIndex];if(W&&W.visible){const j=_(T,W,E,y);T.onBeforeShadow(t,T,A,P,L,j,b),t.renderBufferDirect(P,null,L,j,T,b),T.onAfterShadow(t,T,A,P,L,j,b)}}}else if(H.visible){const $=_(T,H,E,y);T.onBeforeShadow(t,T,A,P,L,$,null),t.renderBufferDirect(P,null,L,$,T,null),T.onAfterShadow(t,T,A,P,L,$,null)}}const V=T.children;for(let L=0,H=V.length;L<H;L++)M(V[L],A,P,E,y)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const E=c[P],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function ib(t){function e(){let N=!1;const K=new rn;let X=null;const ue=new rn(0,0,0,0);return{setMask:function(me){X!==me&&!N&&(t.colorMask(me,me,me,me),X=me)},setLocked:function(me){N=me},setClear:function(me,qe,ft,vt,Gt){Gt===!0&&(me*=vt,qe*=vt,ft*=vt),K.set(me,qe,ft,vt),ue.equals(K)===!1&&(t.clearColor(me,qe,ft,vt),ue.copy(K))},reset:function(){N=!1,X=null,ue.set(-1,0,0,0)}}}function n(){let N=!1,K=null,X=null,ue=null;return{setTest:function(me){me?he(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(me){K!==me&&!N&&(t.depthMask(me),K=me)},setFunc:function(me){if(X!==me){switch(me){case Ew:t.depthFunc(t.NEVER);break;case ww:t.depthFunc(t.ALWAYS);break;case Tw:t.depthFunc(t.LESS);break;case qu:t.depthFunc(t.LEQUAL);break;case Aw:t.depthFunc(t.EQUAL);break;case Rw:t.depthFunc(t.GEQUAL);break;case Cw:t.depthFunc(t.GREATER);break;case bw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=me}},setLocked:function(me){N=me},setClear:function(me){ue!==me&&(t.clearDepth(me),ue=me)},reset:function(){N=!1,K=null,X=null,ue=null}}}function i(){let N=!1,K=null,X=null,ue=null,me=null,qe=null,ft=null,vt=null,Gt=null;return{setTest:function(tt){N||(tt?he(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(tt){K!==tt&&!N&&(t.stencilMask(tt),K=tt)},setFunc:function(tt,wn,Qt){(X!==tt||ue!==wn||me!==Qt)&&(t.stencilFunc(tt,wn,Qt),X=tt,ue=wn,me=Qt)},setOp:function(tt,wn,Qt){(qe!==tt||ft!==wn||vt!==Qt)&&(t.stencilOp(tt,wn,Qt),qe=tt,ft=wn,vt=Qt)},setLocked:function(tt){N=tt},setClear:function(tt){Gt!==tt&&(t.clearStencil(tt),Gt=tt)},reset:function(){N=!1,K=null,X=null,ue=null,me=null,qe=null,ft=null,vt=null,Gt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,g=null,_=null,M=null,C=null,T=new nt(0,0,0),A=0,P=!1,E=null,y=null,I=null,V=null,L=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=Q>=1):te.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=Q>=2);let b=null,W={};const j=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),xe=new rn().fromArray(j),Ze=new rn().fromArray(oe);function G(N,K,X,ue){const me=new Uint8Array(4),qe=t.createTexture();t.bindTexture(N,qe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ft=0;ft<X;ft++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(K,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(K+ft,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return qe}const ie={};ie[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(qu),ye(!1),de(i1),he(t.CULL_FACE),be(os);function he(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function re(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ge(N,K){return f[N]!==K?(t.bindFramebuffer(N,K),f[N]=K,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=K),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=K),!0):!1}function $e(N,K){let X=d,ue=!1;if(N){X=h.get(K),X===void 0&&(X=[],h.set(K,X));const me=N.textures;if(X.length!==me.length||X[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,ft=me.length;qe<ft;qe++)X[qe]=t.COLOR_ATTACHMENT0+qe;X.length=me.length,ue=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,ue=!0);ue&&t.drawBuffers(X)}function F(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const et={[Is]:t.FUNC_ADD,[ow]:t.FUNC_SUBTRACT,[aw]:t.FUNC_REVERSE_SUBTRACT};et[lw]=t.MIN,et[cw]=t.MAX;const ee={[uw]:t.ZERO,[fw]:t.ONE,[dw]:t.SRC_COLOR,[xp]:t.SRC_ALPHA,[vw]:t.SRC_ALPHA_SATURATE,[gw]:t.DST_COLOR,[pw]:t.DST_ALPHA,[hw]:t.ONE_MINUS_SRC_COLOR,[yp]:t.ONE_MINUS_SRC_ALPHA,[_w]:t.ONE_MINUS_DST_COLOR,[mw]:t.ONE_MINUS_DST_ALPHA,[xw]:t.CONSTANT_COLOR,[yw]:t.ONE_MINUS_CONSTANT_COLOR,[Sw]:t.CONSTANT_ALPHA,[Mw]:t.ONE_MINUS_CONSTANT_ALPHA};function be(N,K,X,ue,me,qe,ft,vt,Gt,tt){if(N===os){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(he(t.BLEND),v=!0),N!==sw){if(N!==x||tt!==P){if((m!==Is||_!==Is)&&(t.blendEquation(t.FUNC_ADD),m=Is,_=Is),tt)switch(N){case Jo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case r1:t.blendFunc(t.ONE,t.ONE);break;case s1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case o1:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Jo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case r1:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case s1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case o1:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,g=null,M=null,C=null,T.set(0,0,0),A=0,x=N,P=tt}return}me=me||K,qe=qe||X,ft=ft||ue,(K!==m||me!==_)&&(t.blendEquationSeparate(et[K],et[me]),m=K,_=me),(X!==u||ue!==g||qe!==M||ft!==C)&&(t.blendFuncSeparate(ee[X],ee[ue],ee[qe],ee[ft]),u=X,g=ue,M=qe,C=ft),(vt.equals(T)===!1||Gt!==A)&&(t.blendColor(vt.r,vt.g,vt.b,Gt),T.copy(vt),A=Gt),x=N,P=!1}function ve(N,K){N.side===_r?re(t.CULL_FACE):he(t.CULL_FACE);let X=N.side===Bn;K&&(X=!X),ye(X),N.blending===Jo&&N.transparent===!1?be(os):be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const ue=N.stencilWrite;o.setTest(ue),ue&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),He(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ye(N){E!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),E=N)}function de(N){N!==nw?(he(t.CULL_FACE),N!==y&&(N===i1?t.cullFace(t.BACK):N===iw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),y=N}function Ne(N){N!==I&&($&&t.lineWidth(N),I=N)}function He(N,K,X){N?(he(t.POLYGON_OFFSET_FILL),(V!==K||L!==X)&&(t.polygonOffset(K,X),V=K,L=X)):re(t.POLYGON_OFFSET_FILL)}function R(N){N?he(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function S(N){N===void 0&&(N=t.TEXTURE0+H-1),b!==N&&(t.activeTexture(N),b=N)}function B(N,K,X){X===void 0&&(b===null?X=t.TEXTURE0+H-1:X=b);let ue=W[X];ue===void 0&&(ue={type:void 0,texture:void 0},W[X]=ue),(ue.type!==N||ue.texture!==K)&&(b!==X&&(t.activeTexture(X),b=X),t.bindTexture(N,K||ie[N]),ue.type=N,ue.texture=K)}function Y(){const N=W[b];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(N){xe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function Ue(N){Ze.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ze.copy(N))}function We(N,K){let X=l.get(K);X===void 0&&(X=new WeakMap,l.set(K,X));let ue=X.get(N);ue===void 0&&(ue=t.getUniformBlockIndex(K,N.name),X.set(N,ue))}function _t(N,K){const ue=l.get(K).get(N);a.get(K)!==ue&&(t.uniformBlockBinding(K,ue,N.__bindingPointIndex),a.set(K,ue))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},b=null,W={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,g=null,_=null,M=null,C=null,T=new nt(0,0,0),A=0,P=!1,E=null,y=null,I=null,V=null,L=null,xe.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:re,bindFramebuffer:Ge,drawBuffers:$e,useProgram:F,setBlending:be,setMaterial:ve,setFlipSided:ye,setCullFace:de,setLineWidth:Ne,setPolygonOffset:He,setScissorTest:R,activeTexture:S,bindTexture:B,unbindTexture:Y,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:Xe,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:_t,texStorage2D:se,texStorage3D:Ce,texSubImage2D:Te,texSubImage3D:ae,compressedTexSubImage2D:le,compressedTexSubImage3D:Ie,scissor:pe,viewport:Ue,reset:Fe}}function rb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):ef("canvas")}function x(R,S,B){let Y=1;const Z=He(R);if((Z.width>B||Z.height>B)&&(Y=B/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Y*Z.width),Te=Math.floor(Y*Z.height);h===void 0&&(h=v(J,Te));const ae=S?v(J,Te):h;return ae.width=J,ae.height=Te,ae.getContext("2d").drawImage(R,0,0,J,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+Te+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==_i&&R.minFilter!==Ni}function u(R){t.generateMipmap(R)}function g(R,S,B,Y,Z=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=S;if(S===t.RED&&(B===t.FLOAT&&(J=t.R32F),B===t.HALF_FLOAT&&(J=t.R16F),B===t.UNSIGNED_BYTE&&(J=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.R8UI),B===t.UNSIGNED_SHORT&&(J=t.R16UI),B===t.UNSIGNED_INT&&(J=t.R32UI),B===t.BYTE&&(J=t.R8I),B===t.SHORT&&(J=t.R16I),B===t.INT&&(J=t.R32I)),S===t.RG&&(B===t.FLOAT&&(J=t.RG32F),B===t.HALF_FLOAT&&(J=t.RG16F),B===t.UNSIGNED_BYTE&&(J=t.RG8)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RG8UI),B===t.UNSIGNED_SHORT&&(J=t.RG16UI),B===t.UNSIGNED_INT&&(J=t.RG32UI),B===t.BYTE&&(J=t.RG8I),B===t.SHORT&&(J=t.RG16I),B===t.INT&&(J=t.RG32I)),S===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),S===t.RGBA){const Te=Z?Ku:ct.getTransfer(Y);B===t.FLOAT&&(J=t.RGBA32F),B===t.HALF_FLOAT&&(J=t.RGBA16F),B===t.UNSIGNED_BYTE&&(J=Te===mt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==_i&&R.minFilter!==Ni?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function M(R){const S=R.target;S.removeEventListener("dispose",M),T(S),S.isVideoTexture&&f.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),P(S)}function T(R){const S=i.get(R);if(S.__webglInit===void 0)return;const B=R.source,Y=d.get(B);if(Y){const Z=Y[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(R),Object.keys(Y).length===0&&d.delete(B)}i.remove(R)}function A(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const B=R.source,Y=d.get(B);delete Y[S.__cacheKey],o.memory.textures--}function P(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Z=0;Z<S.__webglFramebuffer[Y].length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Y][Z]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,Z=B.length;Y<Z;Y++){const J=i.get(B[Y]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(R)}let E=0;function y(){E=0}function I(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function L(R,S){const B=i.get(R);if(R.isVideoTexture&&de(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,R,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function H(R,S){const B=i.get(R);if(R.version>0&&B.__version!==R.version){xe(B,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function $(R,S){const B=i.get(R);if(R.version>0&&B.__version!==R.version){xe(B,R,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function Q(R,S){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Ze(B,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const te={[Ep]:t.REPEAT,[Bs]:t.CLAMP_TO_EDGE,[wp]:t.MIRRORED_REPEAT},b={[_i]:t.NEAREST,[Bw]:t.NEAREST_MIPMAP_NEAREST,[Dc]:t.NEAREST_MIPMAP_LINEAR,[Ni]:t.LINEAR,[Nd]:t.LINEAR_MIPMAP_NEAREST,[zs]:t.LINEAR_MIPMAP_LINEAR},W={[Jw]:t.NEVER,[s4]:t.ALWAYS,[e4]:t.LESS,[ey]:t.LEQUAL,[t4]:t.EQUAL,[r4]:t.GEQUAL,[n4]:t.GREATER,[i4]:t.NOTEQUAL};function j(R,S){if(S.type===Zr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ni||S.magFilter===Nd||S.magFilter===Dc||S.magFilter===zs||S.minFilter===Ni||S.minFilter===Nd||S.minFilter===Dc||S.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,te[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,te[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,te[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,b[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,b[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,W[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_i||S.minFilter!==Dc&&S.minFilter!==zs||S.type===Zr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function oe(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",M));const Y=S.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const J=V(S);if(J!==R.__cacheKey){Z[J]===void 0&&(Z[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[J].usedTimes++;const Te=Z[R.__cacheKey];Te!==void 0&&(Z[R.__cacheKey].usedTimes--,Te.usedTimes===0&&A(S)),R.__cacheKey=J,R.__webglTexture=Z[J].texture}return B}function xe(R,S,B){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);const Z=oe(R,S),J=S.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+B);const Te=i.get(J);if(J.version!==Te.__version||Z===!0){n.activeTexture(t.TEXTURE0+B);const ae=ct.getPrimaries(ct.workingColorSpace),le=S.colorSpace===Xr?null:ct.getPrimaries(S.colorSpace),Ie=S.colorSpace===Xr||ae===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=x(S.image,!1,r.maxTextureSize);se=Ne(S,se);const Ce=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type);let Pe=g(S.internalFormat,Ce,Xe,S.colorSpace,S.isVideoTexture);j(Y,S);let pe;const Ue=S.mipmaps,We=S.isVideoTexture!==!0,_t=Te.__version===void 0||Z===!0,Fe=J.dataReady,N=_(S,se);if(S.isDepthTexture)Pe=t.DEPTH_COMPONENT16,S.type===Zr?Pe=t.DEPTH_COMPONENT32F:S.type===ha?Pe=t.DEPTH_COMPONENT24:S.type===tc&&(Pe=t.DEPTH24_STENCIL8),_t&&(We?n.texStorage2D(t.TEXTURE_2D,1,Pe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,Ce,Xe,null));else if(S.isDataTexture)if(Ue.length>0){We&&_t&&n.texStorage2D(t.TEXTURE_2D,N,Pe,Ue[0].width,Ue[0].height);for(let K=0,X=Ue.length;K<X;K++)pe=Ue[K],We?Fe&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,pe.width,pe.height,Ce,Xe,pe.data):n.texImage2D(t.TEXTURE_2D,K,Pe,pe.width,pe.height,0,Ce,Xe,pe.data);S.generateMipmaps=!1}else We?(_t&&n.texStorage2D(t.TEXTURE_2D,N,Pe,se.width,se.height),Fe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Ce,Xe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,Ce,Xe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,Pe,Ue[0].width,Ue[0].height,se.depth);for(let K=0,X=Ue.length;K<X;K++)pe=Ue[K],S.format!==Yi?Ce!==null?We?Fe&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,se.depth,Ce,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Pe,pe.width,pe.height,se.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Fe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,se.depth,Ce,Xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Pe,pe.width,pe.height,se.depth,0,Ce,Xe,pe.data)}else{We&&_t&&n.texStorage2D(t.TEXTURE_2D,N,Pe,Ue[0].width,Ue[0].height);for(let K=0,X=Ue.length;K<X;K++)pe=Ue[K],S.format!==Yi?Ce!==null?We?Fe&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,pe.width,pe.height,Ce,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Pe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Fe&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,pe.width,pe.height,Ce,Xe,pe.data):n.texImage2D(t.TEXTURE_2D,K,Pe,pe.width,pe.height,0,Ce,Xe,pe.data)}else if(S.isDataArrayTexture)We?(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,Pe,se.width,se.height,se.depth),Fe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ce,Xe,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,Ce,Xe,se.data);else if(S.isData3DTexture)We?(_t&&n.texStorage3D(t.TEXTURE_3D,N,Pe,se.width,se.height,se.depth),Fe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ce,Xe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,Ce,Xe,se.data);else if(S.isFramebufferTexture){if(_t)if(We)n.texStorage2D(t.TEXTURE_2D,N,Pe,se.width,se.height);else{let K=se.width,X=se.height;for(let ue=0;ue<N;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,K,X,0,Ce,Xe,null),K>>=1,X>>=1}}else if(Ue.length>0){if(We&&_t){const K=He(Ue[0]);n.texStorage2D(t.TEXTURE_2D,N,Pe,K.width,K.height)}for(let K=0,X=Ue.length;K<X;K++)pe=Ue[K],We?Fe&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ce,Xe,pe):n.texImage2D(t.TEXTURE_2D,K,Pe,Ce,Xe,pe);S.generateMipmaps=!1}else if(We){if(_t){const K=He(se);n.texStorage2D(t.TEXTURE_2D,N,Pe,K.width,K.height)}Fe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Xe,se)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Ce,Xe,se);m(S)&&u(Y),Te.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ze(R,S,B){if(S.image.length!==6)return;const Y=oe(R,S),Z=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const J=i.get(Z);if(Z.version!==J.__version||Y===!0){n.activeTexture(t.TEXTURE0+B);const Te=ct.getPrimaries(ct.workingColorSpace),ae=S.colorSpace===Xr?null:ct.getPrimaries(S.colorSpace),le=S.colorSpace===Xr||Te===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let X=0;X<6;X++)!Ie&&!se?Ce[X]=x(S.image[X],!0,r.maxCubemapSize):Ce[X]=se?S.image[X].image:S.image[X],Ce[X]=Ne(S,Ce[X]);const Xe=Ce[0],Pe=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),Ue=g(S.internalFormat,Pe,pe,S.colorSpace),We=S.isVideoTexture!==!0,_t=J.__version===void 0||Y===!0,Fe=Z.dataReady;let N=_(S,Xe);j(t.TEXTURE_CUBE_MAP,S);let K;if(Ie){We&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Ue,Xe.width,Xe.height);for(let X=0;X<6;X++){K=Ce[X].mipmaps;for(let ue=0;ue<K.length;ue++){const me=K[ue];S.format!==Yi?Pe!==null?We?Fe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,0,0,me.width,me.height,Pe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,0,0,me.width,me.height,Pe,pe,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,Ue,me.width,me.height,0,Pe,pe,me.data)}}}else{if(K=S.mipmaps,We&&_t){K.length>0&&N++;const X=He(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Ue,X.width,X.height)}for(let X=0;X<6;X++)if(se){We?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ce[X].width,Ce[X].height,Pe,pe,Ce[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,Ce[X].width,Ce[X].height,0,Pe,pe,Ce[X].data);for(let ue=0;ue<K.length;ue++){const qe=K[ue].image[X].image;We?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,0,0,qe.width,qe.height,Pe,pe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,Ue,qe.width,qe.height,0,Pe,pe,qe.data)}}else{We?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Pe,pe,Ce[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,Pe,pe,Ce[X]);for(let ue=0;ue<K.length;ue++){const me=K[ue];We?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,0,0,Pe,pe,me.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,Ue,Pe,pe,me.image[X])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),J.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function G(R,S,B,Y,Z,J){const Te=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),le=g(B.internalFormat,Te,ae,B.colorSpace);if(!i.get(S).__hasExternalTextures){const se=Math.max(1,S.width>>J),Ce=Math.max(1,S.height>>J);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,J,le,se,Ce,S.depth,0,Te,ae,null):n.texImage2D(Z,J,le,se,Ce,0,Te,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Z,i.get(B).__webglTexture,0,ve(S)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Z,i.get(B).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let Y=t.DEPTH_COMPONENT24;if(B||ye(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Zr?Y=t.DEPTH_COMPONENT32F:Z.type===ha&&(Y=t.DEPTH_COMPONENT24));const J=ve(S);ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,Y,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,Y,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const Y=ve(S);B&&ye(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,S.width,S.height):ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Y=S.textures;for(let Z=0;Z<Y.length;Z++){const J=Y[Z],Te=s.convert(J.format,J.colorSpace),ae=s.convert(J.type),le=g(J.internalFormat,Te,ae,J.colorSpace),Ie=ve(S);B&&ye(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,le,S.width,S.height):ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,le,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,le,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,Z=ve(S);if(S.depthTexture.format===ea)ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(S.depthTexture.format===jl)ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function re(R){const S=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=t.createRenderbuffer(),ie(S.__webglDepthbuffer[Y],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),ie(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(R,S,B){const Y=i.get(R);S!==void 0&&G(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&re(R)}function $e(R){const S=R.texture,B=i.get(R),Y=i.get(S);R.addEventListener("dispose",C);const Z=R.textures,J=R.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let le=0;le<S.mipmaps.length;le++)B.__webglFramebuffer[ae][le]=t.createFramebuffer()}else B.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ae=0,le=Z.length;ae<le;ae++){const Ie=i.get(Z[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ye(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const le=Z[ae];B.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const Ie=s.convert(le.format,le.colorSpace),se=s.convert(le.type),Ce=g(le.internalFormat,Ie,se,le.colorSpace,R.isXRRenderTarget===!0),Xe=ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,Ce,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),j(t.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)G(B.__webglFramebuffer[ae][le],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else G(B.__webglFramebuffer[ae],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ae=0,le=Z.length;ae<le;ae++){const Ie=Z[ae],se=i.get(Ie);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),j(t.TEXTURE_2D,Ie),G(B.__webglFramebuffer,R,Ie,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ie)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,Y.__webglTexture),j(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)G(B.__webglFramebuffer[le],R,S,t.COLOR_ATTACHMENT0,ae,le);else G(B.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ae,0);m(S)&&u(ae),n.unbindTexture()}R.depthBuffer&&re(R)}function F(R){const S=R.textures;for(let B=0,Y=S.length;B<Y;B++){const Z=S[B];if(m(Z)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(Z).__webglTexture;n.bindTexture(J,Te),u(J),n.unbindTexture()}}}const et=[],ee=[];function be(R){if(R.samples>0){if(ye(R)===!1){const S=R.textures,B=R.width,Y=R.height;let Z=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),ae=S.length>1;if(ae)for(let le=0;le<S.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let le=0;le<S.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[le]);const Ie=i.get(S[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,B,Y,0,0,B,Y,Z,t.NEAREST),l===!0&&(et.length=0,ee.length=0,et.push(t.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push(J),ee.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let le=0;le<S.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,Te.__webglColorRenderbuffer[le]);const Ie=i.get(S[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ve(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(R){const S=o.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function Ne(R,S){const B=R.colorSpace,Y=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ys&&B!==Xr&&(ct.getTransfer(B)===mt?(Y!==Yi||Z!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=y,this.setTexture2D=L,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Ge,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=G,this.useMultisampledRTT=ye}function sb(t,e){function n(i,r=Xr){let s;const o=ct.getTransfer(r);if(i===hs)return t.UNSIGNED_BYTE;if(i===Yx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hw)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zw)return t.BYTE;if(i===Vw)return t.SHORT;if(i===$x)return t.UNSIGNED_SHORT;if(i===Xx)return t.INT;if(i===ha)return t.UNSIGNED_INT;if(i===Zr)return t.FLOAT;if(i===Cf)return t.HALF_FLOAT;if(i===Gw)return t.ALPHA;if(i===Ww)return t.RGB;if(i===Yi)return t.RGBA;if(i===jw)return t.LUMINANCE;if(i===$w)return t.LUMINANCE_ALPHA;if(i===ea)return t.DEPTH_COMPONENT;if(i===jl)return t.DEPTH_STENCIL;if(i===Xw)return t.RED;if(i===Kx)return t.RED_INTEGER;if(i===Yw)return t.RG;if(i===Zx)return t.RG_INTEGER;if(i===Qx)return t.RGBA_INTEGER;if(i===Dd||i===Id||i===Ud||i===Fd)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Id)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ud)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Id)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ud)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fd)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===a1||i===l1||i===c1||i===u1)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===a1)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===l1)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===c1)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===u1)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===f1||i===d1||i===h1)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===f1||i===d1)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===h1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===p1||i===m1||i===g1||i===_1||i===v1||i===x1||i===y1||i===S1||i===M1||i===E1||i===w1||i===T1||i===A1||i===R1)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===p1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===m1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===g1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===v1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===x1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===y1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===S1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===M1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===E1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===w1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===T1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===A1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===R1)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Od||i===C1||i===b1)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Od)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===C1)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===b1)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qw||i===P1||i===L1||i===N1)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Od)return s.COMPRESSED_RED_RGTC1_EXT;if(i===P1)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===L1)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===N1)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tc?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class ob extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jo extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new zn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new ps({vertexShader:lb,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xn(new sc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class fb extends ba{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,v=null;const x=new ub,m=n.getContextAttributes();let u=null,g=null;const _=[],M=[],C=new Je;let T=null;const A=new mi;A.layers.enable(1),A.viewport=new rn;const P=new mi;P.layers.enable(2),P.viewport=new rn;const E=[A,P],y=new ob;y.layers.enable(1),y.layers.enable(2);let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ie=_[G];return ie===void 0&&(ie=new uh,_[G]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(G){let ie=_[G];return ie===void 0&&(ie=new uh,_[G]=ie),ie.getGripSpace()},this.getHand=function(G){let ie=_[G];return ie===void 0&&(ie=new uh,_[G]=ie),ie.getHandSpace()};function L(G){const ie=M.indexOf(G.inputSource);if(ie===-1)return;const he=_[ie];he!==void 0&&(he.update(G.inputSource,G.frame,c||o),he.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let G=0;G<_.length;G++){const ie=M[G];ie!==null&&(M[G]=null,_[G].disconnect(ie))}I=null,V=null,x.reset(),e.setRenderTarget(u),p=null,d=null,h=null,r=null,g=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new to(p.framebufferWidth,p.framebufferHeight,{format:Yi,type:hs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,he=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?jl:ea,he=m.stencil?tc:ha);const Ge={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new to(d.textureWidth,d.textureHeight,{format:Yi,type:hs,depthTexture:new py(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(G){for(let ie=0;ie<G.removed.length;ie++){const he=G.removed[ie],re=M.indexOf(he);re>=0&&(M[re]=null,_[re].disconnect(he))}for(let ie=0;ie<G.added.length;ie++){const he=G.added[ie];let re=M.indexOf(he);if(re===-1){for(let $e=0;$e<_.length;$e++)if($e>=M.length){M.push(he),re=$e;break}else if(M[$e]===null){M[$e]=he,re=$e;break}if(re===-1)break}const Ge=_[re];Ge&&Ge.connect(he)}}const Q=new U,te=new U;function b(G,ie,he){Q.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(he.matrixWorld);const re=Q.distanceTo(te),Ge=ie.projectionMatrix.elements,$e=he.projectionMatrix.elements,F=Ge[14]/(Ge[10]-1),et=Ge[14]/(Ge[10]+1),ee=(Ge[9]+1)/Ge[5],be=(Ge[9]-1)/Ge[5],ve=(Ge[8]-1)/Ge[0],ye=($e[8]+1)/$e[0],de=F*ve,Ne=F*ye,He=re/(-ve+ye),R=He*-ve;ie.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(R),G.translateZ(He),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const S=F+He,B=et+He,Y=de-R,Z=Ne+(re-R),J=ee*et/B*S,Te=be*et/B*S;G.projectionMatrix.makePerspective(Y,Z,J,Te,S,B),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,ie){ie===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ie.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;x.texture!==null&&(G.near=x.depthNear,G.far=x.depthFar),y.near=P.near=A.near=G.near,y.far=P.far=A.far=G.far,(I!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,V=y.far,A.near=I,A.far=V,P.near=I,P.far=V,A.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const ie=G.parent,he=y.cameras;W(y,ie);for(let re=0;re<he.length;re++)W(he[re],ie);he.length===2?b(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),j(G,y,ie)};function j(G,ie,he){he===null?G.matrix.copy(ie.matrixWorld):(G.matrix.copy(he.matrixWorld),G.matrix.invert(),G.matrix.multiply(ie.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ie.projectionMatrix),G.projectionMatrixInverse.copy(ie.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Tp*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null};let oe=null;function xe(G,ie){if(f=ie.getViewerPose(c||o),v=ie,f!==null){const he=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let re=!1;he.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let $e=0;$e<he.length;$e++){const F=he[$e];let et=null;if(p!==null)et=p.getViewport(F);else{const be=h.getViewSubImage(d,F);et=be.viewport,$e===0&&(e.setRenderTargetTextures(g,be.colorTexture,d.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(g))}let ee=E[$e];ee===void 0&&(ee=new mi,ee.layers.enable($e),ee.viewport=new rn,E[$e]=ee),ee.matrix.fromArray(F.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(F.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(et.x,et.y,et.width,et.height),$e===0&&(y.matrix.copy(ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(ee)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const $e=h.getDepthInformation(he[0]);$e&&$e.isValid&&$e.texture&&x.init(e,$e,r.renderState)}}for(let he=0;he<_.length;he++){const re=M[he],Ge=_[he];re!==null&&Ge!==void 0&&Ge.update(re,ie,c||o)}x.render(e,y),oe&&oe(G,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ze=new dy;Ze.setAnimationLoop(xe),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const Cs=new er,db=new Dt;function hb(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,cy(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Bn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Bn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),_=g.envMap,M=g.envMapRotation;if(_&&(m.envMap.value=_,Cs.copy(M),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),m.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(Cs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*C,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function c(g,_){let M=r[g.id];M===void 0&&(v(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(g,C);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function f(g){const _=h();g.__bindingPointIndex=_;const M=t.createBuffer(),C=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],M=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,y=P.length;E<y;E++){const I=P[E];if(p(I,T,E,C)===!0){const V=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let $=0;$<L.length;$++){const Q=L[$],te=x(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,V+H,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,M,C){const T=g.value,A=_+"_"+M;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function v(g){const _=g.uniforms;let M=0;const C=16;for(let A=0,P=_.length;A<P;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,I=E.length;y<I;y++){const V=E[y],L=Array.isArray(V.value)?V.value:[V.value];for(let H=0,$=L.length;H<$;H++){const Q=L[H],te=x(Q),b=M%C;b!==0&&C-b<te.boundary&&(M+=C-b),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=te.storage}}}const T=M%C;return T>0&&(M+=C-T),g.__size=M,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class mb{constructor(e={}){const{canvas:n=a4(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wi,this._useLegacyLights=!1,this.toneMapping=as,this.toneMappingExposure=1;const _=this;let M=!1,C=0,T=0,A=null,P=-1,E=null;const y=new rn,I=new rn;let V=null;const L=new nt(0);let H=0,$=n.width,Q=n.height,te=1,b=null,W=null;const j=new rn(0,0,$,Q),oe=new rn(0,0,$,Q);let xe=!1;const Ze=new Vm;let G=!1,ie=!1;const he=new Dt,re=new U,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return A===null?te:1}let F=i;function et(w,D){return n.getContext(w,D)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bm}`),n.addEventListener("webglcontextlost",N,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",X,!1),F===null){const D="webgl2";if(F=et(D,w),F===null)throw et(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,be,ve,ye,de,Ne,He,R,S,B,Y,Z,J,Te,ae,le,Ie,se,Ce,Xe,Pe,pe,Ue,We;function _t(){ee=new ER(F),ee.init(),pe=new sb(F,ee),be=new _R(F,ee,e,pe),ve=new ib(F),ye=new AR(F),de=new GC,Ne=new rb(F,ee,ve,de,be,pe,ye),He=new xR(_),R=new MR(_),S=new D4(F),Ue=new mR(F,S),B=new wR(F,S,ye,Ue),Y=new CR(F,B,S,ye),Ce=new RR(F,be,Ne),le=new vR(de),Z=new HC(_,He,R,ee,be,Ue,le),J=new hb(_,de),Te=new jC,ae=new ZC(ee),se=new pR(_,He,R,ve,Y,d,l),Ie=new nb(_,Y,be),We=new pb(F,ye,be,ve),Xe=new gR(F,ee,ye),Pe=new TR(F,ee,ye),ye.programs=Z.programs,_.capabilities=be,_.extensions=ee,_.properties=de,_.renderLists=Te,_.shadowMap=Ie,_.state=ve,_.info=ye}_t();const Fe=new fb(_,F);this.xr=Fe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize($,Q,!1))},this.getSize=function(w){return w.set($,Q)},this.setSize=function(w,D,z=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,Q=D,n.width=Math.floor(w*te),n.height=Math.floor(D*te),z===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set($*te,Q*te).floor()},this.setDrawingBufferSize=function(w,D,z){$=w,Q=D,te=z,n.width=Math.floor(w*z),n.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,D,z,O){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,D,z,O),ve.viewport(y.copy(j).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,D,z,O){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,D,z,O),ve.scissor(I.copy(oe).multiplyScalar(te).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){ve.setScissorTest(xe=w)},this.setOpaqueSort=function(w){b=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(w=!0,D=!0,z=!0){let O=0;if(w){let k=!1;if(A!==null){const fe=A.texture.format;k=fe===Qx||fe===Zx||fe===Kx}if(k){const fe=A.texture.type,Se=fe===hs||fe===ha||fe===$x||fe===tc||fe===Yx||fe===qx,Ae=se.getClearColor(),De=se.getClearAlpha(),Oe=Ae.r,Be=Ae.g,je=Ae.b;Se?(p[0]=Oe,p[1]=Be,p[2]=je,p[3]=De,F.clearBufferuiv(F.COLOR,0,p)):(v[0]=Oe,v[1]=Be,v[2]=je,v[3]=De,F.clearBufferiv(F.COLOR,0,v))}else O|=F.COLOR_BUFFER_BIT}D&&(O|=F.DEPTH_BUFFER_BIT),z&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",N,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",X,!1),Te.dispose(),ae.dispose(),de.dispose(),He.dispose(),R.dispose(),Y.dispose(),Ue.dispose(),We.dispose(),Z.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",tt),Fe.removeEventListener("sessionend",wn),Qt.stop()};function N(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=ye.autoReset,D=Ie.enabled,z=Ie.autoUpdate,O=Ie.needsUpdate,k=Ie.type;_t(),ye.autoReset=w,Ie.enabled=D,Ie.autoUpdate=z,Ie.needsUpdate=O,Ie.type=k}function X(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const D=w.target;D.removeEventListener("dispose",ue),me(D)}function me(w){qe(w),de.remove(w)}function qe(w){const D=de.get(w).programs;D!==void 0&&(D.forEach(function(z){Z.releaseProgram(z)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,O,k,fe){D===null&&(D=Ge);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Ae=wS(w,D,z,O,k);ve.setMaterial(O,Se);let De=z.index,Oe=1;if(O.wireframe===!0){if(De=B.getWireframeAttribute(z),De===void 0)return;Oe=2}const Be=z.drawRange,je=z.attributes.position;let Ot=Be.start*Oe,fn=(Be.start+Be.count)*Oe;fe!==null&&(Ot=Math.max(Ot,fe.start*Oe),fn=Math.min(fn,(fe.start+fe.count)*Oe)),De!==null?(Ot=Math.max(Ot,0),fn=Math.min(fn,De.count)):je!=null&&(Ot=Math.max(Ot,0),fn=Math.min(fn,je.count));const Hn=fn-Ot;if(Hn<0||Hn===1/0)return;Ue.setup(k,O,Ae,z,De);let ar,at=Xe;if(De!==null&&(ar=S.get(De),at=Pe,at.setIndex(ar)),k.isMesh)O.wireframe===!0?(ve.setLineWidth(O.wireframeLinewidth*$e()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(k.isLine){let ke=O.linewidth;ke===void 0&&(ke=1),ve.setLineWidth(ke*$e()),k.isLineSegments?at.setMode(F.LINES):k.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else k.isPoints?at.setMode(F.POINTS):k.isSprite&&at.setMode(F.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?at.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)at.renderInstances(Ot,Hn,k.count);else if(z.isInstancedBufferGeometry){const ke=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wa=Math.min(z.instanceCount,ke);at.renderInstances(Ot,Hn,Wa)}else at.render(Ot,Hn)};function ft(w,D,z){w.transparent===!0&&w.side===_r&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,mc(w,D,z),w.side=ds,w.needsUpdate=!0,mc(w,D,z),w.side=_r):mc(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),m=ae.get(z),m.init(D),g.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==z&&w.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);const O=new Set;return w.traverse(function(k){const fe=k.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Ae=fe[Se];ft(Ae,z,k),O.add(Ae)}else ft(fe,z,k),O.add(fe)}),g.pop(),m=null,O},this.compileAsync=function(w,D,z=null){const O=this.compile(w,D,z);return new Promise(k=>{function fe(){if(O.forEach(function(Se){de.get(Se).currentProgram.isReady()&&O.delete(Se)}),O.size===0){k(w);return}setTimeout(fe,10)}ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let vt=null;function Gt(w){vt&&vt(w)}function tt(){Qt.stop()}function wn(){Qt.start()}const Qt=new dy;Qt.setAnimationLoop(Gt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(w){vt=w,Fe.setAnimationLoop(w),w===null?Qt.stop():Qt.start()},Fe.addEventListener("sessionstart",tt),Fe.addEventListener("sessionend",wn),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(D),D=Fe.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,D,A),m=ae.get(w,g.length),m.init(D),g.push(m),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ze.setFromProjectionMatrix(he),ie=this.localClippingEnabled,G=le.init(this.clippingPlanes,ie),x=Te.get(w,u.length),x.init(),u.push(x),z0(w,D,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(b,W);const z=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1;z&&se.addToRenderList(x,w),this.info.render.frame++,G===!0&&le.beginShadows();const O=m.state.shadowsArray;Ie.render(O,w,D),G===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,fe=x.transmissive;if(m.setupLights(_._useLegacyLights),D.isArrayCamera){const Se=D.cameras;if(fe.length>0)for(let Ae=0,De=Se.length;Ae<De;Ae++){const Oe=Se[Ae];H0(k,fe,w,Oe)}z&&se.render(w);for(let Ae=0,De=Se.length;Ae<De;Ae++){const Oe=Se[Ae];V0(x,w,Oe,Oe.viewport)}}else fe.length>0&&H0(k,fe,w,D),z&&se.render(w),V0(x,w,D);A!==null&&(Ne.updateMultisampleRenderTarget(A),Ne.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,D),Ue.resetDefaultState(),P=-1,E=null,g.pop(),g.length>0?(m=g[g.length-1],G===!0&&le.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function z0(w,D,z,O){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ze.intersectsSprite(w)){O&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const Se=Y.update(w),Ae=w.material;Ae.visible&&x.push(w,Se,Ae,z,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ze.intersectsObject(w))){const Se=Y.update(w),Ae=w.material;if(O&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),re.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),re.copy(Se.boundingSphere.center)),re.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Ae)){const De=Se.groups;for(let Oe=0,Be=De.length;Oe<Be;Oe++){const je=De[Oe],Ot=Ae[je.materialIndex];Ot&&Ot.visible&&x.push(w,Se,Ot,z,re.z,je)}}else Ae.visible&&x.push(w,Se,Ae,z,re.z,null)}}const fe=w.children;for(let Se=0,Ae=fe.length;Se<Ae;Se++)z0(fe[Se],D,z,O)}function V0(w,D,z,O){const k=w.opaque,fe=w.transmissive,Se=w.transparent;m.setupLightsView(z),G===!0&&le.setGlobalState(_.clippingPlanes,z),O&&ve.viewport(y.copy(O)),k.length>0&&pc(k,D,z),fe.length>0&&pc(fe,D,z),Se.length>0&&pc(Se,D,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function H0(w,D,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new to(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Cf:hs,minFilter:zs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const fe=m.state.transmissionRenderTarget[O.id],Se=O.viewport||y;fe.setSize(Se.z,Se.w);const Ae=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(L),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear();const De=_.toneMapping;_.toneMapping=as;const Oe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),G===!0&&le.setGlobalState(_.clippingPlanes,O),pc(w,z,O),Ne.updateMultisampleRenderTarget(fe),Ne.updateRenderTargetMipmap(fe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let je=0,Ot=D.length;je<Ot;je++){const fn=D[je],Hn=fn.object,ar=fn.geometry,at=fn.material,ke=fn.group;if(at.side===_r&&Hn.layers.test(O.layers)){const Wa=at.side;at.side=Bn,at.needsUpdate=!0,G0(Hn,z,O,ar,at,ke),at.side=Wa,at.needsUpdate=!0,Be=!0}}Be===!0&&(Ne.updateMultisampleRenderTarget(fe),Ne.updateRenderTargetMipmap(fe))}_.setRenderTarget(Ae),_.setClearColor(L,H),Oe!==void 0&&(O.viewport=Oe),_.toneMapping=De}function pc(w,D,z){const O=D.isScene===!0?D.overrideMaterial:null;for(let k=0,fe=w.length;k<fe;k++){const Se=w[k],Ae=Se.object,De=Se.geometry,Oe=O===null?Se.material:O,Be=Se.group;Ae.layers.test(z.layers)&&G0(Ae,D,z,De,Oe,Be)}}function G0(w,D,z,O,k,fe){w.onBeforeRender(_,D,z,O,k,fe),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,D,z,O,w,fe),k.transparent===!0&&k.side===_r&&k.forceSinglePass===!1?(k.side=Bn,k.needsUpdate=!0,_.renderBufferDirect(z,D,O,k,w,fe),k.side=ds,k.needsUpdate=!0,_.renderBufferDirect(z,D,O,k,w,fe),k.side=_r):_.renderBufferDirect(z,D,O,k,w,fe),w.onAfterRender(_,D,z,O,k,fe)}function mc(w,D,z){D.isScene!==!0&&(D=Ge);const O=de.get(w),k=m.state.lights,fe=m.state.shadowsArray,Se=k.state.version,Ae=Z.getParameters(w,k.state,fe,D,z),De=Z.getProgramCacheKey(Ae);let Oe=O.programs;O.environment=w.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(w.isMeshStandardMaterial?R:He).get(w.envMap||O.environment),O.envMapRotation=O.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",ue),Oe=new Map,O.programs=Oe);let Be=Oe.get(De);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===Se)return j0(w,Ae),Be}else Ae.uniforms=Z.getUniforms(w),w.onBuild(z,Ae,_),w.onBeforeCompile(Ae,_),Be=Z.acquireProgram(Ae,De),Oe.set(De,Be),O.uniforms=Ae.uniforms;const je=O.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=le.uniform),j0(w,Ae),O.needsLights=AS(w),O.lightsStateVersion=Se,O.needsLights&&(je.ambientLightColor.value=k.state.ambient,je.lightProbe.value=k.state.probe,je.directionalLights.value=k.state.directional,je.directionalLightShadows.value=k.state.directionalShadow,je.spotLights.value=k.state.spot,je.spotLightShadows.value=k.state.spotShadow,je.rectAreaLights.value=k.state.rectArea,je.ltc_1.value=k.state.rectAreaLTC1,je.ltc_2.value=k.state.rectAreaLTC2,je.pointLights.value=k.state.point,je.pointLightShadows.value=k.state.pointShadow,je.hemisphereLights.value=k.state.hemi,je.directionalShadowMap.value=k.state.directionalShadowMap,je.directionalShadowMatrix.value=k.state.directionalShadowMatrix,je.spotShadowMap.value=k.state.spotShadowMap,je.spotLightMatrix.value=k.state.spotLightMatrix,je.spotLightMap.value=k.state.spotLightMap,je.pointShadowMap.value=k.state.pointShadowMap,je.pointShadowMatrix.value=k.state.pointShadowMatrix),O.currentProgram=Be,O.uniformsList=null,Be}function W0(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Mu.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function j0(w,D){const z=de.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function wS(w,D,z,O,k){D.isScene!==!0&&(D=Ge),Ne.resetTextureUnits();const fe=D.fog,Se=O.isMeshStandardMaterial?D.environment:null,Ae=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ys,De=(O.isMeshStandardMaterial?R:He).get(O.envMap||Se),Oe=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),je=!!z.morphAttributes.position,Ot=!!z.morphAttributes.normal,fn=!!z.morphAttributes.color;let Hn=as;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Hn=_.toneMapping);const ar=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=ar!==void 0?ar.length:0,ke=de.get(O),Wa=m.state.lights;if(G===!0&&(ie===!0||w!==E)){const li=w===E&&O.id===P;le.setState(O,w,li)}let xt=!1;O.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Wa.state.version||ke.outputColorSpace!==Ae||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==De||O.fog===!0&&ke.fog!==fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==Be||ke.morphTargets!==je||ke.morphNormals!==Ot||ke.morphColors!==fn||ke.toneMapping!==Hn||ke.morphTargetsCount!==at)&&(xt=!0):(xt=!0,ke.__version=O.version);let Ms=ke.currentProgram;xt===!0&&(Ms=mc(O,D,k));let $0=!1,ja=!1,id=!1;const dn=Ms.getUniforms(),Nr=ke.uniforms;if(ve.useProgram(Ms.program)&&($0=!0,ja=!0,id=!0),O.id!==P&&(P=O.id,ja=!0),$0||E!==w){dn.setValue(F,"projectionMatrix",w.projectionMatrix),dn.setValue(F,"viewMatrix",w.matrixWorldInverse);const li=dn.map.cameraPosition;li!==void 0&&li.setValue(F,re.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&dn.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&dn.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,ja=!0,id=!0)}if(k.isSkinnedMesh){dn.setOptional(F,k,"bindMatrix"),dn.setOptional(F,k,"bindMatrixInverse");const li=k.skeleton;li&&(li.boneTexture===null&&li.computeBoneTexture(),dn.setValue(F,"boneTexture",li.boneTexture,Ne))}k.isBatchedMesh&&(dn.setOptional(F,k,"batchingTexture"),dn.setValue(F,"batchingTexture",k._matricesTexture,Ne));const rd=z.morphAttributes;if((rd.position!==void 0||rd.normal!==void 0||rd.color!==void 0)&&Ce.update(k,z,Ms),(ja||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,dn.setValue(F,"receiveShadow",k.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Nr.envMap.value=De,Nr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Nr.envMapIntensity.value=D.environmentIntensity),ja&&(dn.setValue(F,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&TS(Nr,id),fe&&O.fog===!0&&J.refreshFogUniforms(Nr,fe),J.refreshMaterialUniforms(Nr,O,te,Q,m.state.transmissionRenderTarget[w.id]),Mu.upload(F,W0(ke),Nr,Ne)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Mu.upload(F,W0(ke),Nr,Ne),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&dn.setValue(F,"center",k.center),dn.setValue(F,"modelViewMatrix",k.modelViewMatrix),dn.setValue(F,"normalMatrix",k.normalMatrix),dn.setValue(F,"modelMatrix",k.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const li=O.uniformsGroups;for(let sd=0,RS=li.length;sd<RS;sd++){const X0=li[sd];We.update(X0,Ms),We.bind(X0,Ms)}}return Ms}function TS(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function AS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,z){de.get(w.texture).__webglTexture=D,de.get(w.depthTexture).__webglTexture=z;const O=de.get(w);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=z===void 0,O.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const z=de.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){A=w,C=D,T=z;let O=!0,k=null,fe=!1,Se=!1;if(w){const De=de.get(w);De.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(F.FRAMEBUFFER,null),O=!1):De.__webglFramebuffer===void 0?Ne.setupRenderTarget(w):De.__hasExternalTextures&&Ne.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Se=!0);const Be=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?k=Be[D][z]:k=Be[D],fe=!0):w.samples>0&&Ne.useMultisampledRTT(w)===!1?k=de.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[z]:k=Be,y.copy(w.viewport),I.copy(w.scissor),V=w.scissorTest}else y.copy(j).multiplyScalar(te).floor(),I.copy(oe).multiplyScalar(te).floor(),V=xe;if(ve.bindFramebuffer(F.FRAMEBUFFER,k)&&O&&ve.drawBuffers(w,k),ve.viewport(y),ve.scissor(I),ve.setScissorTest(V),fe){const De=de.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,De.__webglTexture,z)}else if(Se){const De=de.get(w.texture),Oe=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,z||0,Oe)}P=-1},this.readRenderTargetPixels=function(w,D,z,O,k,fe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){ve.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const De=w.texture,Oe=De.format,Be=De.type;if(!be.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-O&&z>=0&&z<=w.height-k&&F.readPixels(D,z,O,k,pe.convert(Oe),pe.convert(Be),fe)}finally{const De=A!==null?de.get(A).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,D,z=0){const O=Math.pow(2,-z),k=Math.floor(D.image.width*O),fe=Math.floor(D.image.height*O);Ne.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,w.x,w.y,k,fe),ve.unbindTexture()},this.copyTextureToTexture=function(w,D,z,O=0){const k=D.image.width,fe=D.image.height,Se=pe.convert(z.format),Ae=pe.convert(z.type);Ne.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,w.x,w.y,k,fe,Se,Ae,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,Se,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,O,w.x,w.y,Se,Ae,D.image),O===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z,O,k=0){const fe=w.max.x-w.min.x,Se=w.max.y-w.min.y,Ae=w.max.z-w.min.z,De=pe.convert(O.format),Oe=pe.convert(O.type);let Be;if(O.isData3DTexture)Ne.setTexture3D(O,0),Be=F.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ne.setTexture2DArray(O,0),Be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const je=F.getParameter(F.UNPACK_ROW_LENGTH),Ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),Hn=F.getParameter(F.UNPACK_SKIP_ROWS),ar=F.getParameter(F.UNPACK_SKIP_IMAGES),at=z.isCompressedTexture?z.mipmaps[k]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Be,k,D.x,D.y,D.z,fe,Se,Ae,De,Oe,at.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Be,k,D.x,D.y,D.z,fe,Se,Ae,De,at.data):F.texSubImage3D(Be,k,D.x,D.y,D.z,fe,Se,Ae,De,Oe,at),F.pixelStorei(F.UNPACK_ROW_LENGTH,je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Hn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ar),k===0&&O.generateMipmaps&&F.generateMipmap(Be),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,ve.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zm?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===bf?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gb extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Gm extends Pa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tf=new U,nf=new U,E_=new Dt,sl=new ry,tu=new Pf,fh=new U,w_=new U;class yy extends on{constructor(e=new Mi,n=new Gm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)tf.fromBufferAttribute(n,r-1),nf.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=tf.distanceTo(nf);e.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tu.copy(i.boundingSphere),tu.applyMatrix4(r),tu.radius+=s,e.ray.intersectsSphere(tu)===!1)return;E_.copy(r).invert(),sl.copy(e.ray).applyMatrix4(E_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const u=f.getX(x),g=f.getX(x+1),_=nu(this,e,sl,l,u,g);_&&n.push(_)}if(this.isLineLoop){const x=f.getX(v-1),m=f.getX(p),u=nu(this,e,sl,l,x,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const u=nu(this,e,sl,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=nu(this,e,sl,l,v-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nu(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(tf.fromBufferAttribute(o,r),nf.fromBufferAttribute(o,s),n.distanceSqToSegment(tf,nf,fh,w_)>i)return;fh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(fh);if(!(l<e.near||l>e.far))return{distance:l,point:w_.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class Df extends Mi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],p=[];let v=0;const x=[],m=i/2;let u=0;g(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new Cn(h,3)),this.setAttribute("normal",new Cn(d,3)),this.setAttribute("uv",new Cn(p,2));function g(){const M=new U,C=new U;let T=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const E=[],y=P/s,I=y*(n-e)+e;for(let V=0;V<=r;V++){const L=V/r,H=L*l+a,$=Math.sin(H),Q=Math.cos(H);C.x=I*$,C.y=-y*i+m,C.z=I*Q,h.push(C.x,C.y,C.z),M.set($,A,Q).normalize(),d.push(M.x,M.y,M.z),p.push(L,1-y),E.push(v++)}x.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const y=x[E][P],I=x[E+1][P],V=x[E+1][P+1],L=x[E][P+1];f.push(y,I,L),f.push(I,V,L),T+=6}c.addGroup(u,T,0),u+=T}function _(M){const C=v,T=new Je,A=new U;let P=0;const E=M===!0?e:n,y=M===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),v++;const I=v;for(let V=0;V<=r;V++){const H=V/r*l+a,$=Math.cos(H),Q=Math.sin(H);A.x=E*Q,A.y=m*y,A.z=E*$,h.push(A.x,A.y,A.z),d.push(0,y,0),T.x=$*.5+.5,T.y=Q*.5*y+.5,p.push(T.x,T.y),v++}for(let V=0;V<r;V++){const L=C+V,H=I+V;M===!0?f.push(H,H+1,L):f.push(H+1,H,L),P+=3}c.addGroup(u,P,M===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wm extends Mi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new U,d=new U,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const T=C/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+M,1-_),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=f[u][g+1],M=f[u][g],C=f[u+1][g],T=f[u+1][g+1];(u!==0||o>0)&&p.push(_,M,T),(u!==i-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Cn(v,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ol extends Pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jx,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _b extends Gm{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Sy extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const dh=new Dt,T_=new U,A_=new U;class vb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vm,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;T_.setFromMatrixPosition(e.matrixWorld),n.position.copy(T_),A_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(A_),n.updateMatrixWorld(),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xb extends vb{constructor(){super(new hy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yb extends Sy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sb extends Sy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const R_=new U;let iu,hh;class ph extends on{constructor(e=new U(0,0,1),n=new U(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",iu===void 0&&(iu=new Mi,iu.setAttribute("position",new Cn([0,0,0,0,1,0],3)),hh=new Df(0,.5,1,5,1),hh.translate(0,-.5,0)),this.position.copy(n),this.line=new yy(iu,new Gm({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new xn(hh,new Lf({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{R_.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(R_,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bm);var ma=typeof self<"u"?self:{};function My(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=ma,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function bs(){throw Error("Invalid UTF8")}function C_(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let ru,mh;const Mb=typeof TextDecoder<"u";let Eb;const wb=typeof TextEncoder<"u";function Ey(t){if(wb)t=(Eb||(Eb=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function wy(t){ma.setTimeout(()=>{throw t},0)}var Rp,Tb=My(610401301,!1),b_=My(748402147,!0);function P_(){var t=ma.navigator;return t&&(t=t.userAgent)?t:""}const L_=ma.navigator;function If(t){return If[" "](t),t}Rp=L_&&L_.userAgentData||null,If[" "]=function(){};const Ty={};let pl=null;function Ab(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return function(s,o){function a(c){for(;l<s.length;){const f=s.charAt(l++),h=pl[f];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(f))throw Error("Unknown base64 encoding at char: "+f)}return c}Ay();let l=0;for(;;){const c=a(-1),f=a(0),h=a(64),d=a(64);if(d===64&&c===-1)break;o(c<<2|f>>4),h!=64&&(o(f<<4&240|h>>2),d!=64&&o(h<<6&192|d))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Ay(){if(!pl){pl={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));Ty[n]=i;for(let r=0;r<i.length;r++){const s=i[r];pl[s]===void 0&&(pl[s]=r)}}}}var Rb=typeof Uint8Array<"u",Ry=!(!(Tb&&Rp&&Rp.brands.length>0)&&(P_().indexOf("Trident")!=-1||P_().indexOf("MSIE")!=-1))&&typeof btoa=="function";const N_=/[-_.]/g,Cb={"-":"+",_:"/",".":"="};function bb(t){return Cb[t]||""}function Cy(t){if(!Ry)return Ab(t);t=N_.test(t)?t.replace(N_,bb):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function jm(t){return Rb&&t!=null&&t instanceof Uint8Array}var ga={};function no(){return Pb||(Pb=new Ji(null,ga))}function $m(t){by(ga);var e=t.g;return(e=e==null||jm(e)?e:typeof e=="string"?Cy(e):null)==null?e:t.g=e}var Ji=class{h(){return new Uint8Array($m(this)||0)}constructor(t,e){if(by(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Pb,Lb;function by(t){if(t!==ga)throw Error("illegal external caller")}function Py(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Cp(t){return Py(t=Error(t),"warning"),t}function _a(t,e){if(t!=null){var n=Lb??(Lb={}),i=n[t]||0;i>=e||(n[t]=i+1,Py(t=Error(),"incident"),wy(t))}}function Na(){return typeof BigInt=="function"}var Da=typeof Symbol=="function"&&typeof Symbol()=="symbol";function nr(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Nb=nr("jas",void 0,!0),D_=nr(void 0,"0di"),al=nr(void 0,"1oa"),Qn=nr(void 0,Symbol()),Db=nr(void 0,"0ub"),Ib=nr(void 0,"0ubs"),bp=nr(void 0,"0ubsb"),Ub=nr(void 0,"0actk"),va=nr("m_m","Pa",!0),I_=nr();const Ly={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ny=Object.defineProperties,Me=Da?Nb:"Ga";var ao;const U_=[];function oc(t,e){Da||Me in t||Ny(t,Ly),t[Me]|=e}function Zt(t,e){Da||Me in t||Ny(t,Ly),t[Me]=e}function ac(t){return oc(t,34),t}function $l(t){return oc(t,8192),t}Zt(U_,7),ao=Object.freeze(U_);var xa={};function ti(t,e){return e===void 0?t.h!==io&&!!(2&(0|t.v[Me])):!!(2&e)&&t.h!==io}const io={};function Xm(t,e){if(t!=null){if(typeof t=="string")t=t?new Ji(t,ga):no();else if(t.constructor!==Ji)if(jm(t))t=t.length?new Ji(new Uint8Array(t),ga):no();else{if(!e)throw Error();t=void 0}}return t}class F_{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var Fb=Object.freeze({});function Dy(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const o=r+(s?-1:0);for(e=128&e?1:0;e<o;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const a in t)!isNaN(a)&&n(+a,t[a])}}var Iy={};function Ia(t){return 128&t?Iy:void 0}function Uf(t){return t.Na=!0,t}var Ob=Uf(t=>typeof t=="number"),O_=Uf(t=>typeof t=="string"),kb=Uf(t=>typeof t=="boolean"),Ff=typeof ma.BigInt=="function"&&typeof ma.BigInt(0)=="bigint";function Jn(t){var e=t;if(O_(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Ob(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Ff?BigInt(t):t=kb(t)?t?"1":"0":O_(t)?t.trim()||"0":String(t)}var Pp=Uf(t=>Ff?t>=zb&&t<=Hb:t[0]==="-"?k_(t,Bb):k_(t,Vb));const Bb=Number.MIN_SAFE_INTEGER.toString(),zb=Ff?BigInt(Number.MIN_SAFE_INTEGER):void 0,Vb=Number.MAX_SAFE_INTEGER.toString(),Hb=Ff?BigInt(Number.MAX_SAFE_INTEGER):void 0;function k_(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const Gb=typeof Uint8Array.prototype.slice=="function";let Wb,Tt=0,Bt=0;function B_(t){const e=t>>>0;Tt=e,Bt=(t-e)/4294967296>>>0}function ya(t){if(t<0){B_(-t);const[e,n]=Km(Tt,Bt);Tt=e>>>0,Bt=n>>>0}else B_(t)}function Ym(t){const e=Wb||(Wb=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),Bt=0,Tt=e.getUint32(0,!0)}function Uy(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Xl(t,e)}function jb(t,e){return Jn(Na()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Xl(t,e))}function Fy(t,e){return Na()?Jn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Jn(qm(t,e))}function Xl(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Na()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+z_(n)+z_(t));return n}function z_(t){return t=String(t),"0000000".slice(t.length)+t}function qm(t,e){if(2147483648&e)if(Na())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Km(t,e);t="-"+Xl(n,i)}else t=Xl(t,e);return t}function Of(t){if(t.length<16)ya(Number(t));else if(Na())t=BigInt(t),Tt=Number(t&BigInt(4294967295))>>>0,Bt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Bt=Tt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Bt*=1e6,Tt=1e6*Tt+s,Tt>=4294967296&&(Bt+=Math.trunc(Tt/4294967296),Bt>>>=0,Tt>>>=0)}if(e){const[i,r]=Km(Tt,Bt);Tt=i,Bt=r}}}function Km(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Ui(t){return Array.prototype.slice.call(t)}const lc=typeof BigInt=="function"?BigInt.asIntN:void 0,$b=typeof BigInt=="function"?BigInt.asUintN:void 0,ro=Number.isSafeInteger,kf=Number.isFinite,Sa=Math.trunc,Xb=Jn(0);function ml(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function qi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Yl(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Oy(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const Yb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function cc(t){switch(typeof t){case"bigint":return!0;case"number":return kf(t);case"string":return Yb.test(t);default:return!1}}function Ua(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return kf(t)?0|t:void 0}function ky(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return kf(t)?t>>>0:void 0}function By(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Of(t),qm(Tt,Bt))}function Zm(t){if(t=Sa(t),!ro(t)){ya(t);var e=Tt,n=Bt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=Uy(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function zy(t){var e=Sa(Number(t));return ro(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),By(t))}function Vy(t){var e=Sa(Number(t));return ro(e)?Jn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Na()?Jn(lc(64,BigInt(t))):Jn(By(t)))}function Hy(t){return ro(t)?t=Jn(Zm(t)):(t=Sa(t),ro(t)?t=String(t):(ya(t),t=qm(Tt,Bt)),t=Jn(t)),t}function rf(t){const e=typeof t;return t==null?t:e==="bigint"?Jn(lc(64,t)):cc(t)?e==="string"?Vy(t):Hy(t):void 0}function Gy(t){if(typeof t!="string")throw Error();return t}function uc(t){if(t!=null&&typeof t!="string")throw Error();return t}function cn(t){return t==null||typeof t=="string"?t:void 0}function Qm(t,e,n,i){return t!=null&&t[va]===xa?t:Array.isArray(t)?((i=(n=0|t[Me])|32&i|2&i)!==n&&Zt(t,i),new e(t)):(n?2&i?((t=e[D_])||(ac((t=new e).v),t=e[D_]=t),e=t):e=new e:e=void 0,e)}function qb(t,e,n){if(e)e:{if(!cc(e=t))throw Cp("int64");switch(typeof e){case"string":e=Vy(e);break e;case"bigint":e=Jn(lc(64,e));break e;default:e=Hy(e)}}else e=rf(t);return(t=e)==null?n?Xb:void 0:t}const Kb={};let Zb=function(){try{return If(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class gh{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const Qb=Zb?(Object.setPrototypeOf(gh.prototype,Map.prototype),Object.defineProperties(gh.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),gh):class extends Map{constructor(){super()}};function V_(t){return t}function _h(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Rr=class extends Qb{constructor(t,e,n=V_,i=V_){super(),this.J=0|t[Me],this.K=e,this.S=n,this.fa=this.K?Jb:i;for(let r=0;r<t.length;r++){const s=t[r],o=n(s[0],!1,!0);let a=s[1];e?a===void 0&&(a=null):a=i(s[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(t){return $l(Array.from(super.entries(),t))}clear(){_h(this),super.clear()}delete(t){return _h(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new F_(t,eP,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new F_(t,Rr.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach((n,i,r)=>{t.call(e,r.get(i),i,r)}):super.forEach(t,e)}set(t,e){return _h(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function Jb(t,e,n,i,r,s){return t=Qm(t,i,n,s),r&&(t=e0(t)),t}function eP(t){return[t,this.get(t)]}let tP;function H_(){return tP||(tP=new Rr(ac([]),void 0,void 0,void 0,Kb))}function Bf(t){return Qn?t[Qn]:void 0}function sf(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Rr.prototype.toJSON=void 0;var Lp=class{};const nP={Ka:!0};function iP(t,e){e<100||_a(Ib,1)}function zf(t,e,n,i){const r=i!==void 0;i=!!i;var s,o=Qn;!r&&Da&&o&&(s=t[o])&&sf(s,iP),o=[];var a=t.length;let l;s=4294967295;let c=!1;const f=!!(64&e),h=f?128&e?0:-1:void 0;1&e||(l=a&&t[a-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--a:l=void 0,!f||128&e||r||(c=!0,s=s-h+h)),e=void 0;for(var d=0;d<a;d++){let p=t[d];if(p!=null&&(p=n(p,i))!=null)if(f&&d>=s){const v=d-h;(e??(e={}))[v]=p}else o[d]=p}if(l)for(let p in l){if((a=l[p])==null||(a=n(a,i))==null)continue;let v;d=+p,f&&!Number.isNaN(d)&&(v=d+h)<s?o[v]=a:(e??(e={}))[p]=a}return e&&(c?o.push(e):o[s]=e),r&&Qn&&(t=Bf(t))&&t instanceof Lp&&(o[Qn]=function(p){const v=new Lp;return sf(p,(x,m,u)=>{v[m]=Ui(u)}),v.da=p.da,v}(t)),o}function rP(t){return t[0]=ql(t[0]),t[1]=ql(t[1]),t}function ql(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Pp(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Me];return t.length===0&&1&e?void 0:zf(t,e,ql)}if(t!=null&&t[va]===xa)return Wy(t);if(t instanceof Ji){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Ry){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),Ay(),n=Ty[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,f=0;for(;c<e.length-2;c+=3){var s=e[c],o=e[c+1],a=e[c+2],l=n[s>>2];s=n[(3&s)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[f++]=l+s+o+a}switch(l=0,a=r,e.length-c){case 2:a=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[f]=n[e>>2]+n[(3&e)<<4|l>>4]+a+r}e=i.join("")}t=t.g=e}return t}return t instanceof Rr?t=t.size!==0?t.V(rP):void 0:void 0}return t}let sP,oP;function Wy(t){return zf(t=t.v,0|t[Me],ql)}function js(t,e){return jy(t,e[0],e[1])}function jy(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[Me],b_&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&function(){if(b_)throw Error("carr");_a(Ub,5)}(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Zt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var o=s-1;const l=n[o];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((o-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var a in l)(s=+a)<o&&(n[s+e]=l[a],delete l[a]);r=-16760833&r|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&a)<<14}}}return Zt(t,64|r|i),t}function aP(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Me];return t.length===0&&1&n?void 0:G_(t,n,e)}if(t!=null&&t[va]===xa)return W_(t);if(t instanceof Rr){if(2&(e=t.J))return t;if(!t.size)return;if(n=ac(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[va]===xa?W_(r):Array.isArray(r)?G_(r,0|r[Me],!!(32&e)):void 0,i[1]=r}return n}return t instanceof Ji?t:void 0}function G_(t,e,n){return 2&e||(!n||4096&e||16&e?t=Fa(t,e,!1,n&&!(16&e)):(oc(t,34),4&e&&Object.freeze(t))),t}function Jm(t,e,n){return t=new t.constructor(e),n&&(t.h=io),t.m=io,t}function W_(t){const e=t.v,n=0|e[Me];return ti(t,n)?t:t0(t,e,n)?Jm(t,e):Fa(e,n)}function Fa(t,e,n,i){return i??(i=!!(34&e)),t=zf(t,e,aP,i),i=32,n&&(i|=2),Zt(t,e=16769217&e|i),t}function e0(t){const e=t.v,n=0|e[Me];return ti(t,n)?t0(t,e,n)?Jm(t,e,!0):new t.constructor(Fa(e,n,!1)):t}function Oa(t){if(t.h!==io)return!1;var e=t.v;return oc(e=Fa(e,0|e[Me]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function ka(t){if(!Oa(t)&&ti(t,0|t.v[Me]))throw Error()}function lo(t,e){e===void 0&&(e=0|t[Me]),32&e&&!(4096&e)&&Zt(t,4096|e)}function t0(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Zt(e,2|n),t.h=io,!0)}const $y=Jn(0),zr={};function Rt(t,e,n,i,r){if((e=Cr(t.v,e,n,r))!==null||i&&t.m!==io)return e}function Cr(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let o,a;if(!(s<1+(n?0:-1))){if(r>=s)if(o=t[s],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[e],a=!0;else{if(r!==s)return;n=o}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[e]=i:t[r]=i,i}return n}}function ut(t,e,n,i){ka(t),Xt(t=t.v,0|t[Me],e,n,i)}function Xt(t,e,n,i,r){const s=n+(r?0:-1);var o=t.length-1;if(o>=1+(r?0:-1)&&s>=o){const a=t[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,e}return s<=o?(t[s]=i,e):(i!==void 0&&(n>=(o=(e??(e=0|t[Me]))>>14&1023||536870912)?i!=null&&(t[o+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Vs(){return Fb===void 0?2:4}function Hs(t,e,n,i,r){let s=t.v,o=0|s[Me];i=ti(t,o)?1:i,r=!!r||i===3,i===2&&Oa(t)&&(s=t.v,o=0|s[Me]);let a=(t=n0(s,e))===ao?7:0|t[Me],l=i0(a,o);var c=!(4&l);if(c){4&l&&(t=Ui(t),a=0,l=Xs(l,o),o=Xt(s,o,e,t));let f=0,h=0;for(;f<t.length;f++){const d=n(t[f]);d!=null&&(t[h++]=d)}h<f&&(t.length=h),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==a&&(Zt(t,l),2&l&&Object.freeze(t)),Xy(t,l,s,o,e,i,c,r)}function Xy(t,e,n,i,r,s,o,a){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?$s(e)||((e|=!t.length||o&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Zt(t,e),Object.freeze(t)):(s===2&&$s(e)&&(t=Ui(t),l=0,e=Xs(e,i),i=Xt(n,i,r,t)),$s(e)||(a||(e|=16),e!==l&&Zt(t,e))),2&e||!(4096&e||16&e)||lo(n,i),t}function n0(t,e,n){return t=Cr(t,e,n),Array.isArray(t)?t:ao}function i0(t,e){return 2&e&&(t|=2),1|t}function $s(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Yy(t){return Xm(t,!0)}function qy(t){t=Ui(t);for(let e=0;e<t.length;e++){const n=t[e]=Ui(t[e]);Array.isArray(n[1])&&(n[1]=ac(n[1]))}return $l(t)}function Wr(t,e,n,i){ka(t),Xt(t=t.v,0|t[Me],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ba(t,e,n){if(2&e)throw Error();const i=Ia(e);let r=n0(t,n,i),s=r===ao?7:0|r[Me],o=i0(s,e);return(2&o||$s(o)||16&o)&&(o===s||$s(o)||Zt(r,o),r=Ui(r),s=0,o=Xs(o,e),Xt(t,e,n,r,i)),o&=-13,o!==s&&Zt(r,o),r}function vh(t,e){var n=z3;return s0(r0(t=t.v),t,void 0,n)===e?e:-1}function r0(t){if(Da)return t[al]??(t[al]=new Map);if(al in t)return t[al];const e=new Map;return Object.defineProperty(t,al,{value:e}),e}function Ky(t,e,n,i,r){const s=r0(t),o=s0(s,t,e,n,r);return o!==i&&(o&&(e=Xt(t,e,o,void 0,r)),s.set(n,i)),e}function s0(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let o=0;o<i.length;o++){const a=i[o];Cr(e,a,r)!=null&&(s!==0&&(n=Xt(e,n,s,void 0,r)),s=a)}return t.set(i,s),s}function o0(t,e,n){let i=0|t[Me];const r=Ia(i),s=Cr(t,n,r);let o;if(s!=null&&s[va]===xa){if(!ti(s))return Oa(s),s.v;o=s.v}else Array.isArray(s)&&(o=s);if(o){const a=0|o[Me];2&a&&(o=Fa(o,a))}return o=js(o,e),o!==s&&Xt(t,i,n,o,r),o}function Zy(t,e,n,i,r){let s=!1;if((i=Cr(t,i,r,o=>{const a=Qm(o,n,!1,e);return s=a!==o&&a!=null,a}))!=null)return s&&!ti(i)&&lo(t,e),i}function st(t,e,n,i){let r=t.v,s=0|r[Me];if((e=Zy(r,s,e,n,i))==null)return e;if(s=0|r[Me],!ti(t,s)){const o=e0(e);o!==e&&(Oa(t)&&(r=t.v,s=0|r[Me]),s=Xt(r,s,n,e=o,i),lo(r,s))}return e}function Qy(t,e,n,i,r,s,o,a){var l=ti(t,n);s=l?1:s,o=!!o||s===3,l=a&&!l,(s===2||l)&&Oa(t)&&(n=0|(e=t.v)[Me]);var c=(t=n0(e,r))===ao?7:0|t[Me],f=i0(c,n);if(a=!(4&f)){var h=t,d=n;const p=!!(2&f);p&&(d|=2);let v=!p,x=!0,m=0,u=0;for(;m<h.length;m++){const g=Qm(h[m],i,!1,d);if(g instanceof i){if(!p){const _=ti(g);v&&(v=!_),x&&(x=_)}h[u++]=g}}u<m&&(h.length=u),f|=4,f=x?-4097&f:4096|f,f=v?8|f:-9&f}if(f!==c&&(Zt(t,f),2&f&&Object.freeze(t)),l&&!(8&f||!t.length&&(s===1||s===4&&(2&f||!(16&f)&&32&n)))){for($s(f)&&(t=Ui(t),f=Xs(f,n),n=Xt(e,n,r,t)),i=t,l=f,c=0;c<i.length;c++)(h=i[c])!==(f=e0(h))&&(i[c]=f);l|=8,Zt(t,f=l=i.length?4096|l:-4097&l)}return Xy(t,f,e,n,r,s,a,o)}function br(t,e,n){const i=t.v;return Qy(t,i,0|i[Me],e,n,Vs(),!1,!0)}function Jy(t){return t==null&&(t=void 0),t}function Le(t,e,n,i,r){return ut(t,n,i=Jy(i),r),i&&!ti(i)&&lo(t.v),t}function Tl(t,e,n,i){e:{var r=i=Jy(i);ka(t);const s=t.v;let o=0|s[Me];if(r==null){const a=r0(s);if(s0(a,s,o,n)!==e)break e;a.set(n,0)}else o=Ky(s,o,n,e);Xt(s,o,e,r)}i&&!ti(i)&&lo(t.v)}function Xs(t,e){return-273&(2&e?2|t:-3&t)}function a0(t,e,n,i){var r=i;ka(t),t=Qy(t,i=t.v,0|i[Me],n,e,2,!0),r=r??new n,t.push(r),e=n=t===ao?7:0|t[Me],(r=ti(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Zt(t,n),r||lo(i)}function vi(t,e,n){return Ua(Rt(t,e,void 0,n))}function Ut(t,e){return Rt(t,e,void 0,void 0,qi)??0}function Pr(t,e,n){if(n!=null){if(typeof n!="number"||!kf(n))throw Cp("int32");n|=0}ut(t,e,n)}function Re(t,e,n){ut(t,e,ml(n))}function ni(t,e,n){Wr(t,e,uc(n),"")}function of(t,e,n){{ka(t);const o=t.v;let a=0|o[Me];if(n==null)Xt(o,a,e);else{var i=t=n===ao?7:0|n[Me],r=$s(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=Ui(n),i=0,t=Xs(t,a),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],c=Gy(l);Object.is(l,c)||(s&&(n=Ui(n),i=0,t=Xs(t,a),s=!1),n[r]=c)}t!==i&&(s&&(n=Ui(n),t=Xs(t,a)),Zt(n,t)),Xt(o,a,e,n)}}}function Vf(t,e,n){ka(t),Hs(t,e,cn,2,!0).push(Gy(n))}var bo=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function l0(t,e){if(typeof t=="string")return new bo(Cy(t),e);if(Array.isArray(t))return new bo(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new bo(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new bo(t,!1);if(t.constructor===Ji)return e=$m(t)||new Uint8Array(0),new bo(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new bo(t,!1);throw Error()}function c0(t,e){let n,i=0,r=0,s=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(Ys(t,a),!(128&n))return e(i>>>0,r>>>0);throw Error()}function u0(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Ys(t,n),!!(127&e)}throw Error()}function ms(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Ys(t,n),r}function tr(t){return ms(t)>>>0}function af(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Ys(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function lP(t){return ms(t)}function Ys(t,e){if(t.g=e,e>t.l)throw Error()}function e3(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function t3(t,e){if(e==0)return no();var n=e3(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):Gb?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?no():new Ji(n,ga)}var j_=[];function n3(t,e,n,i){if(lf.length){const r=lf.pop();return r.o(i),r.g.init(t,e,n,i),r}return new cP(t,e,n,i)}function i3(t){t.g.clear(),t.l=-1,t.h=-1,lf.length<100&&lf.push(t)}function r3(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=tr(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Eu(t){switch(t.h){case 0:t.h!=0?Eu(t):u0(t.g);break;case 1:Ys(t=t.g,t.g+8);break;case 2:if(t.h!=2)Eu(t);else{var e=tr(t.g);Ys(t=t.g,t.g+e)}break;case 5:Ys(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!r3(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Eu(t)}break;default:throw Error()}}function fc(t,e,n){const i=t.g.l;var r=tr(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function f0(t){var e=tr(t.g),n=e3(t=t.g,e);if(t=t.h,Mb){var i,r=t;(i=mh)||(i=mh=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(a){if(ru===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ru=!0}catch{ru=!1}}throw!ru&&(mh=void 0),a}}else{e=(s=n)+e,n=[];let a,l=null;for(;s<e;){var o=t[s++];o<128?n.push(o):o<224?s>=e?bs():(a=t[s++],o<194||(192&a)!=128?(s--,bs()):n.push((31&o)<<6|63&a)):o<240?s>=e-1?bs():(a=t[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=t[s++]))!=128?(s--,bs()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=e-2?bs():(a=t[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,bs()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):bs(),n.length>=8192&&(l=C_(l,n),n.length=0)}s=C_(l,n)}return s}function s3(t){const e=tr(t.g);return t3(t.g,e)}function Hf(t,e,n){var i=tr(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var cP=class{constructor(t,e,n,i){if(j_.length){const r=j_.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,o,a)}init(r,s,o,{Y:a=!1,ea:l=!1}={}){this.Y=a,this.ea=l,r&&(r=l0(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},lf=[];function $_(t){return t?/^\d+$/.test(t)?(Of(t),new Np(Tt,Bt)):null:uP||(uP=new Np(0,0))}var Np=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let uP;function X_(t){return t?/^-?\d+$/.test(t)?(Of(t),new Dp(Tt,Bt)):null:fP||(fP=new Dp(0,0))}var Dp=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let fP;function na(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function za(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Gf(t,e){if(e>=0)za(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function d0(t){var e=Tt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Ma(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Ei(t,e,n){za(t.g,8*e+n)}function h0(t,e){return Ei(t,e,2),e=t.g.end(),Ma(t,e),e.push(t.h),e}function p0(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Wf(t,e,n){Ei(t,e,2),za(t.g,n.length),Ma(t,t.g.end()),Ma(t,n)}function cf(t,e,n,i){n!=null&&(e=h0(t,e),i(n,t),p0(t,e))}function ir(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var m0=ir(),o3=ir(),g0=ir(),_0=ir(),v0=ir(),a3=ir(),dP=ir(),jf=ir(),l3=ir(),c3=ir();function rr(t,e,n){var i=t.v;Qn&&Qn in i&&(i=i[Qn])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var Ee=class{constructor(t,e){this.v=jy(t,e,void 0,2048)}toJSON(){return Wy(this)}j(){var r;var t=XP,e=this.v,n=t.g,i=Qn;if(Da&&i&&((r=e[i])==null?void 0:r[n])!=null&&_a(Db,3),e=t.g,I_&&Qn&&I_===void 0&&(i=(n=this.v)[Qn])&&(i=i.da))try{i(n,e,nP)}catch(s){wy(s)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Me];return t0(this,t,e)?Jm(this,t,!0):new this.constructor(Fa(t,e,!1))}};Ee.prototype[va]=xa,Ee.prototype.toString=function(){return this.v.toString()};var Va=class{constructor(t,e,n){this.g=t,this.h=e,t=m0,this.l=!!t&&n===t||!1}};function $f(t,e){return new Va(t,e,m0)}function u3(t,e,n,i,r){cf(t,n,p3(e,i),r)}const hP=$f(function(t,e,n,i,r){return t.h===2&&(fc(t,o0(e,i,n),r),!0)},u3),pP=$f(function(t,e,n,i,r){return t.h===2&&(fc(t,o0(e,i,n),r),!0)},u3);var Xf=Symbol(),Yf=Symbol(),Ip=Symbol(),Y_=Symbol(),q_=Symbol();let f3,d3;function co(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=function(h){switch(typeof h){case"boolean":return sP||(sP=[0,void 0,!0]);case"number":return h>0?void 0:h===0?oP||(oP=[0,void 0]):[-h,void 0];case"string":return[0,h];case"object":return h}}(i[0]);var s=i[1];let o=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++o])=="function"&&(r.ma=!0,f3??(f3=s),d3??(d3=i[o+1]),s=i[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)a[s[l]]=s;s=i[++o]}for(l=1;s!==void 0;){let h;typeof s=="number"&&(l+=s,s=i[++o]);var c=void 0;if(s instanceof Va?h=s:(h=hP,o--),h==null?void 0:h.l){s=i[++o],c=i;var f=o;typeof s=="function"&&(s=s(),c[f]=s),c=s}for(f=l+1,typeof(s=i[++o])=="number"&&s<0&&(f-=s,s=i[++o]);l<f;l++){const d=a[l];c?n(r,l,h,c,d):e(r,l,h,d)}}return i[t]=r}function h3(t){return Array.isArray(t)?t[0]instanceof Va?t:[pP,t]:[t,void 0]}function p3(t,e){return t instanceof Ee?t.v:Array.isArray(t)?js(t,e):void 0}function x0(t,e,n,i){const r=n.g;t[e]=i?(s,o,a)=>r(s,o,a,i):r}function y0(t,e,n,i,r){const s=n.g;let o,a;t[e]=(l,c,f)=>s(l,c,f,a||(a=co(Yf,x0,y0,i).T),o||(o=S0(i)),r)}function S0(t){let e=t[Ip];if(e!=null)return e;const n=co(Yf,x0,y0,t);return e=n.ma?(i,r)=>f3(i,r,n):(i,r)=>{for(;r3(r)&&r.h!=4;){var s=r.l,o=n[s];if(o==null){var a=n.ba;a&&(a=a[s])&&(a=gP(a))!=null&&(o=n[s]=a)}if(o==null||!o(r,i,s)){if(o=(a=r).m,Eu(a),a.ha)var l=void 0;else l=a.g.g-o,a.g.g=o,l=t3(a.g,l);o=void 0,a=i,l&&((o=a[Qn]??(a[Qn]=new Lp))[s]??(o[s]=[])).push(l)}}return(i=Bf(i))&&(i.da=n.qa[q_]),!0},t[Ip]=e,t[q_]=mP.bind(t),e}function mP(t,e,n,i){var r=this[Yf];const s=this[Ip],o=js(void 0,r.T),a=Bf(t);if(a){var l=!1,c=r.ba;if(c){if(r=(f,h,d)=>{if(d.length!==0)if(c[h])for(const p of d){f=n3(p);try{l=!0,s(o,f)}finally{i3(f)}}else i==null||i(t,h,d)},e==null)sf(a,r);else if(a!=null){const f=a[e];f&&r(a,e,f)}if(l){let f=0|t[Me];if(2&f&&2048&f&&!(n!=null&&n.Ka))throw Error();const h=Ia(f),d=(p,v)=>{if(Cr(t,p,h)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}v!=null&&(f=Xt(t,f,p,v,h)),delete a[p]};e==null?Dy(o,0|o[Me],(p,v)=>{d(p,v)}):d(e,Cr(o,e,h))}}}}function gP(t){const e=(t=h3(t))[0].g;if(t=t[1]){const n=S0(t),i=co(Yf,x0,y0,t).T;return(r,s,o)=>e(r,s,o,i,n)}return e}function qf(t,e,n){t[e]=n.h}function Kf(t,e,n,i){let r,s;const o=n.h;t[e]=(a,l,c)=>o(a,l,c,s||(s=co(Xf,qf,Kf,i).T),r||(r=m3(i)))}function m3(t){let e=t[Y_];if(!e){const n=co(Xf,qf,Kf,t);e=(i,r)=>g3(i,r,n),t[Y_]=e}return e}function g3(t,e,n){Dy(t,0|t[Me],(i,r)=>{if(r!=null){var s=function(o,a){var l=o[a];if(l)return l;if((l=o.ba)&&(l=l[a])){var c=(l=h3(l))[0].h;if(l=l[1]){const f=m3(l),h=co(Xf,qf,Kf,l).T;l=o.ma?d3(h,f):(d,p,v)=>c(d,p,v,h,f)}else l=c;return o[a]=l}}(n,i);s?s(e,r,i):i<500||_a(bp,3)}}),(t=Bf(t))&&sf(t,(i,r,s)=>{for(Ma(e,e.g.end()),i=0;i<s.length;i++)Ma(e,$m(s[i])||new Uint8Array(0))})}const _P=Jn(0);function Ha(t,e){if(Array.isArray(e)){var n=0|e[Me];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&Zt(e,t),2&t&&Object.freeze(e),e}}function Mn(t,e,n){return new Va(t,e,n)}function Ga(t,e,n){return new Va(t,e,n)}function En(t,e,n){Xt(t,0|t[Me],e,n,Ia(0|t[Me]))}var vP=$f(function(t,e,n,i,r){if(t.h!==2)return!1;if(t=Ui(t=fc(t,js([void 0,void 0],i),r)),r=Ia(i=0|e[Me]),2&i)throw Error();let s=Cr(e,n,r);if(s instanceof Rr)2&s.J?(s=s.V(),s.push(t),Xt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var o=0|s[Me];8192&o||Zt(s,o|=8192),2&o&&(s=qy(s),Xt(e,i,n,s,r)),s.push(t)}else Xt(e,i,n,$l([t]),r);return!0},function(t,e,n,i,r){if(e instanceof Rr)e.forEach((s,o)=>{cf(t,n,js([o,s],i),r)});else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&cf(t,n,js(o,i),r)}$l(e)}});function _3(t,e,n){(e=qi(e))!=null&&(Ei(t,n,5),t=t.g,Ym(e),d0(t))}function v3(t,e,n){if(e=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(lc(64,i));if(cc(i)){if(r==="string")return zy(i);if(r==="number")return Zm(i)}}(e),e!=null&&(typeof e=="string"&&X_(e),e!=null))switch(Ei(t,n,0),typeof e){case"number":t=t.g,ya(e),na(t,Tt,Bt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Dp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),na(t.g,n.h,n.g);break;default:n=X_(e),na(t.g,n.h,n.g)}}function x3(t,e,n){(e=Ua(e))!=null&&e!=null&&(Ei(t,n,0),Gf(t.g,e))}function y3(t,e,n){(e=Oy(e))!=null&&(Ei(t,n,0),t.g.g.push(e?1:0))}function S3(t,e,n){(e=cn(e))!=null&&Wf(t,n,Ey(e))}function M3(t,e,n,i,r){cf(t,n,p3(e,i),r)}function E3(t,e,n){(e=e==null||typeof e=="string"||e instanceof Ji?e:void 0)!=null&&Wf(t,n,l0(e,!0).buffer)}function w3(t,e,n){(e=ky(e))!=null&&e!=null&&(Ei(t,n,0),za(t.g,e))}function T3(t,e,n){return(t.h===5||t.h===2)&&(e=Ba(e,0|e[Me],n),t.h==2?Hf(t,af,e):e.push(af(t.g)),!0)}var Vt=Mn(function(t,e,n){return t.h===5&&(En(e,n,af(t.g)),!0)},_3,jf),xP=Ga(T3,function(t,e,n){if((e=Ha(qi,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Ei(i,r,5),i=i.g,Ym(s),d0(i))}},jf),M0=Ga(T3,function(t,e,n){if((e=Ha(qi,e))!=null&&e.length){Ei(t,n,2),za(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Ym(e[i]),d0(n)}},jf),yP=Mn(function(t,e,n){return t.h===5&&(En(e,n,(t=af(t.g))===0?void 0:t),!0)},_3,jf),gs=Mn(function(t,e,n){return t.h!==0?t=!1:(En(e,n,c0(t.g,Fy)),t=!0),t},v3,a3),xh=Mn(function(t,e,n){return t.h!==0?e=!1:(En(e,n,(t=c0(t.g,Fy))===_P?void 0:t),e=!0),e},v3,a3),SP=Mn(function(t,e,n){return t.h!==0?t=!1:(En(e,n,c0(t.g,jb)),t=!0),t},function(t,e,n){if(e=function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String($b(64,i));if(cc(i)){if(r==="string")return r=Sa(Number(i)),ro(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(Of(i),i=Xl(Tt,Bt))),i;if(r==="number")return(i=Sa(i))>=0&&ro(i)||(ya(i),i=Uy(Tt,Bt)),i}}(e),e!=null&&(typeof e=="string"&&$_(e),e!=null))switch(Ei(t,n,0),typeof e){case"number":t=t.g,ya(e),na(t,Tt,Bt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Np(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),na(t.g,n.h,n.g);break;default:n=$_(e),na(t.g,n.h,n.g)}},dP),$t=Mn(function(t,e,n){return t.h===0&&(En(e,n,ms(t.g)),!0)},x3,_0),dc=Ga(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ba(e,0|e[Me],n),t.h==2?Hf(t,ms,e):e.push(ms(t.g)),!0)},function(t,e,n){if((e=Ha(Ua,e))!=null&&e.length){n=h0(t,n);for(let i=0;i<e.length;i++)Gf(t.g,e[i]);p0(t,n)}},_0),$o=Mn(function(t,e,n){return t.h===0&&(En(e,n,(t=ms(t.g))===0?void 0:t),!0)},x3,_0),Ct=Mn(function(t,e,n){return t.h===0&&(En(e,n,u0(t.g)),!0)},y3,o3),qs=Mn(function(t,e,n){return t.h===0&&(En(e,n,(t=u0(t.g))===!1?void 0:t),!0)},y3,o3),_n=Ga(function(t,e,n){return t.h===2&&(t=f0(t),Ba(e,0|e[Me],n).push(t),!0)},function(t,e,n){if((e=Ha(cn,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&Wf(i,r,Ey(s))}},g0),Yr=Mn(function(t,e,n){return t.h===2&&(En(e,n,(t=f0(t))===""?void 0:t),!0)},S3,g0),dt=Mn(function(t,e,n){return t.h===2&&(En(e,n,f0(t)),!0)},S3,g0),nn=function(t,e,n=m0){return new Va(t,e,n)}(function(t,e,n,i,r){return t.h===2&&(i=js(void 0,i),Ba(e,0|e[Me],n).push(i),fc(t,i,r),!0)},function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)M3(t,e[s],n,i,r);1&(t=0|e[Me])||Zt(e,1|t)}}),St=$f(function(t,e,n,i,r,s){if(t.h!==2)return!1;let o=0|e[Me];return Ky(e,o,s,n,Ia(o)),fc(t,e=o0(e,i,n),r),!0},M3),A3=Mn(function(t,e,n){return t.h===2&&(En(e,n,s3(t)),!0)},E3,l3),MP=Ga(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ba(e,0|e[Me],n),t.h==2?Hf(t,tr,e):e.push(tr(t.g)),!0)},function(t,e,n){if((e=Ha(ky,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Ei(i,r,0),za(i.g,s))}},v0),EP=Mn(function(t,e,n){return t.h===0&&(En(e,n,(t=tr(t.g))===0?void 0:t),!0)},w3,v0),yn=Mn(function(t,e,n){return t.h===0&&(En(e,n,ms(t.g)),!0)},function(t,e,n){(e=Ua(e))!=null&&(e=parseInt(e,10),Ei(t,n,0),Gf(t.g,e))},c3);class wP{constructor(e,n){var i=oi;this.g=e,this.h=n,this.m=st,this.j=Le,this.defaultValue=void 0,this.l=i.Oa!=null?Iy:void 0}register(){If(this)}}function sr(t,e){return new wP(t,e)}function Ss(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=n3(n,void 0,void 0,s);try{const o=new t,a=o.v;S0(e)(a,n);var r=o}finally{i3(n)}}return r}}function Zf(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};g3(this.v,e,co(Xf,qf,Kf,t)),Ma(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return e.l=[n],n}}var K_=class extends Ee{constructor(t){super(t)}},Z_=[0,Yr,Mn(function(t,e,n){return t.h===2&&(En(e,n,(t=s3(t))===no()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof Ee){const i=e.Ra;return void(i?(e=i(e),e!=null&&Wf(t,n,l0(e,!0).buffer)):_a(bp,3))}if(Array.isArray(e))return void _a(bp,3)}E3(t,e,n)},l3)];let yh,Q_=globalThis.trustedTypes;function J_(t){var e;return yh===void 0&&(yh=function(){let n=null;if(!Q_)return n;try{const i=r=>r;n=Q_.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),t=(e=yh)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function su(t,...e){if(e.length===0)return J_(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return J_(n)}var R3=[0,$t,yn,Ct,-1,dc,yn,-1,Ct],TP=class extends Ee{constructor(t){super(t)}},C3=[0,Ct,dt,Ct,yn,-1,Ga(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ba(e,0|e[Me],n),t.h==2?Hf(t,lP,e):e.push(ms(t.g)),!0)},function(t,e,n){if((e=Ha(Ua,e))!=null&&e.length){n=h0(t,n);for(let i=0;i<e.length;i++)Gf(t.g,e[i]);p0(t,n)}},c3),dt,-1,[0,Ct,-1],yn,Ct,-1],b3=[0,3,Ct,-1,2,[0,[2],$t,St,[0,Mn(function(t,e,n){return t.h===0&&(En(e,n,tr(t.g)),!0)},w3,v0)]],[0,yn,Ct,yn,Ct,yn,Ct,dt,-1],[0,[3,4],dt,-1,St,[0,$t],St,[0,yn]],[0]],P3=[0,dt,-2],ev=class extends Ee{constructor(t){super(t)}},L3=[0],N3=[0,$t,Ct,1,Ct,-4],oi=class extends Ee{constructor(t){super(t,2)}},Yt={};Yt[336783863]=[0,dt,Ct,-1,$t,[0,[1,2,3,4,5,6,7,8,9],St,L3,St,C3,St,P3,St,N3,St,R3,St,[0,dt,-2],St,[0,dt,yn],St,b3,St,[0,yn,-1,Ct]],[0,dt],Ct,[0,[1,3],[2,4],St,[0,dc],-1,St,[0,_n],-1,nn,[0,dt,-1]],dt];var tv=[0,xh,-1,qs,-3,xh,dc,Yr,$o,xh,-1,qs,$o,qs,-2,Yr];function Et(t,e){Vf(t,3,e)}function Qe(t,e){Vf(t,4,e)}var Vn=class extends Ee{constructor(t){super(t,500)}o(t){return Le(this,0,7,t)}},Al=[-1,{}],nv=[0,dt,1,Al],iv=[0,dt,_n,Al];function wi(t,e){a0(t,1,Vn,e)}function Pt(t,e){Vf(t,10,e)}function ot(t,e){Vf(t,15,e)}var ai=class extends Ee{constructor(t){super(t,500)}o(t){return Le(this,0,1001,t)}},D3=[-500,nn,[-500,Yr,-1,_n,-3,[-2,Yt,Ct],nn,Z_,$o,-1,nv,iv,nn,[0,Yr,qs],Yr,tv,$o,_n,987,_n],4,nn,[-500,dt,-1,[-1,{}],998,dt],nn,[-500,dt,_n,-1,[-2,{},Ct],997,_n,-1],$o,nn,[-500,dt,_n,Al,998,_n],_n,$o,nv,iv,nn,[0,Yr,-1,Al],_n,-2,tv,Yr,-1,qs,[0,qs,EP],978,Al,nn,Z_];ai.prototype.g=Zf(D3);var AP=Ss(ai,D3),RP=class extends Ee{constructor(t){super(t)}},I3=class extends Ee{constructor(t){super(t)}g(){return br(this,RP,1)}},U3=[0,nn,[0,$t,Vt,dt,-1]],Qf=Ss(I3,U3),CP=class extends Ee{constructor(t){super(t)}},bP=class extends Ee{constructor(t){super(t)}},Sh=class extends Ee{constructor(t){super(t)}l(){return st(this,CP,2)}g(){return br(this,bP,5)}},F3=Ss(class extends Ee{constructor(t){super(t)}},[0,_n,dc,M0,[0,yn,[0,$t,-3],[0,Vt,-3],[0,$t,-1,[0,nn,[0,$t,-2]]],nn,[0,Vt,-1,dt,Vt]],dt,-1,gs,nn,[0,$t,Vt],_n,gs]),O3=class extends Ee{constructor(t){super(t)}},ia=Ss(class extends Ee{constructor(t){super(t)}},[0,nn,[0,Vt,-4]]),k3=class extends Ee{constructor(t){super(t)}},hc=Ss(class extends Ee{constructor(t){super(t)}},[0,nn,[0,Vt,-4]]),PP=class extends Ee{constructor(t){super(t)}},LP=[0,$t,-1,M0,yn],B3=class extends Ee{constructor(t){super(t)}};B3.prototype.g=Zf([0,Vt,-4,gs]);var NP=class extends Ee{constructor(t){super(t)}},DP=Ss(class extends Ee{constructor(t){super(t)}},[0,nn,[0,1,$t,dt,U3],gs]),rv=class extends Ee{constructor(t){super(t)}},IP=class extends Ee{constructor(t){super(t)}na(){const t=Rt(this,1,void 0,void 0,Yy);return t??no()}},UP=class extends Ee{constructor(t){super(t)}},z3=[1,2],FP=Ss(class extends Ee{constructor(t){super(t)}},[0,nn,[0,z3,St,[0,M0],St,[0,A3],$t,dt],gs]),E0=class extends Ee{constructor(t){super(t)}},V3=[0,dt,$t,Vt,_n,-1],sv=class extends Ee{constructor(t){super(t)}},OP=[0,Ct,-1],ov=class extends Ee{constructor(t){super(t)}},wu=[1,2,3,4,5,6],uf=class extends Ee{constructor(t){super(t)}g(){return Rt(this,1,void 0,void 0,Yy)!=null}l(){return cn(Rt(this,2))!=null}},It=class extends Ee{constructor(t){super(t)}g(){return Oy(Rt(this,2))??!1}},H3=[0,A3,dt,[0,$t,gs,-1],[0,SP,gs]],Ht=[0,H3,Ct,[0,wu,St,N3,St,C3,St,R3,St,L3,St,P3,St,b3],yn],Jf=class extends Ee{constructor(t){super(t)}},w0=[0,Ht,Vt,-1,$t],kP=sr(502141897,Jf);Yt[502141897]=w0;var BP=Ss(class extends Ee{constructor(t){super(t)}},[0,[0,yn,-1,xP,MP],LP]),G3=class extends Ee{constructor(t){super(t)}},W3=class extends Ee{constructor(t){super(t)}},Up=[0,Ht,Vt,[0,Ht],Ct],zP=sr(508968150,W3);Yt[508968150]=[0,Ht,w0,Up,Vt,[0,[0,H3]]],Yt[508968149]=Up;var Po=class extends Ee{constructor(t){super(t)}l(){return st(this,E0,2)}g(){ut(this,2)}},j3=[0,Ht,V3];Yt[478825465]=j3;var VP=class extends Ee{constructor(t){super(t)}},$3=class extends Ee{constructor(t){super(t)}},T0=class extends Ee{constructor(t){super(t)}},A0=class extends Ee{constructor(t){super(t)}},X3=class extends Ee{constructor(t){super(t)}},av=[0,Ht,[0,Ht],j3,-1],Y3=[0,Ht,Vt,$t],R0=[0,Ht,Vt],q3=[0,Ht,Y3,R0,Vt],HP=sr(479097054,X3);Yt[479097054]=[0,Ht,q3,av],Yt[463370452]=av,Yt[464864288]=Y3;var GP=sr(462713202,A0);Yt[462713202]=q3,Yt[474472470]=R0;var WP=class extends Ee{constructor(t){super(t)}},K3=class extends Ee{constructor(t){super(t)}},Z3=class extends Ee{constructor(t){super(t)}},Q3=class extends Ee{constructor(t){super(t)}},C0=[0,Ht,Vt,-1,$t],Fp=[0,Ht,Vt,Ct];Q3.prototype.g=Zf([0,Ht,R0,[0,Ht],w0,Up,C0,Fp]);var J3=class extends Ee{constructor(t){super(t)}},jP=sr(456383383,J3);Yt[456383383]=[0,Ht,V3];var eS=class extends Ee{constructor(t){super(t)}},$P=sr(476348187,eS);Yt[476348187]=[0,Ht,OP];var tS=class extends Ee{constructor(t){super(t)}},lv=class extends Ee{constructor(t){super(t)}},nS=[0,yn,-1],XP=sr(458105876,class extends Ee{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Me];return t=ti(this,n),e=function(i,r,s,o){var a=lv;!o&&Oa(i)&&(s=0|(r=i.v)[Me]);var l=Cr(r,2);if(i=!1,l==null){if(o)return H_();l=[]}else if(l.constructor===Rr){if(!(2&l.J)||o)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Me])):l=[];if(o){if(!l.length)return H_();i||(i=!0,ac(l))}else i&&(i=!1,$l(l),l=qy(l));return!i&&32&s&&oc(l,32),s=Xt(r,s,2,o=new Rr(l,a,qb,void 0)),i||lo(r,s),o}(this,e,n,t),!t&&lv&&(e.ra=!0),e}});Yt[458105876]=[0,nS,vP,[!0,gs,[0,dt,-1,_n]],[0,dc,Ct,yn]];var b0=class extends Ee{constructor(t){super(t)}},iS=sr(458105758,b0);Yt[458105758]=[0,Ht,dt,nS];var Mh=class extends Ee{constructor(t){super(t)}},cv=[0,yP,-1,qs],YP=class extends Ee{constructor(t){super(t)}},rS=class extends Ee{constructor(t){super(t)}},Op=[1,2];rS.prototype.g=Zf([0,Op,St,cv,St,[0,nn,cv]]);var sS=class extends Ee{constructor(t){super(t)}},qP=sr(443442058,sS);Yt[443442058]=[0,Ht,dt,$t,Vt,_n,-1,Ct,Vt],Yt[514774813]=C0;var oS=class extends Ee{constructor(t){super(t)}},KP=sr(516587230,oS);function kp(t,e){return e=e?e.clone():new E0,t.displayNamesLocale!==void 0?ut(e,1,uc(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ut(e,1),t.maxResults!==void 0?Pr(e,2,t.maxResults):"maxResults"in t&&ut(e,2),t.scoreThreshold!==void 0?Re(e,3,t.scoreThreshold):"scoreThreshold"in t&&ut(e,3),t.categoryAllowlist!==void 0?of(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ut(e,4),t.categoryDenylist!==void 0?of(e,5,t.categoryDenylist):"categoryDenylist"in t&&ut(e,5),e}function aS(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function P0(t,e=-1,n=""){return{categories:t.map(i=>({index:vi(i,1)??0??-1,score:Ut(i,2)??0,categoryName:cn(Rt(i,3))??""??"",displayName:cn(Rt(i,4))??""??""})),headIndex:e,headName:n}}function ZP(t){const e={classifications:br(t,NP,1).map(n=>{var i;return P0(((i=st(n,I3,4))==null?void 0:i.g())??[],vi(n,2)??0,cn(Rt(n,3))??"")})};return function(n){return n==null?n:typeof n=="bigint"?(Pp(n)?n=Number(n):(n=lc(64,n),n=Pp(n)?Number(n):String(n)),n):cc(n)?typeof n=="number"?Zm(n):zy(n):void 0}(Rt(t,2,void 0,void 0,rf))!=null&&(e.timestampMs=aS(Rt(t,2,void 0,void 0,rf)??$y)),e}function lS(t){var o,a;var e=Hs(t,3,qi,Vs()),n=Hs(t,2,Ua,Vs()),i=Hs(t,1,cn,Vs()),r=Hs(t,9,cn,Vs());const s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(o=st(t,Sh,4))==null?void 0:o.l())&&(s.boundingBox={originX:vi(e,1,zr)??0,originY:vi(e,2,zr)??0,width:vi(e,3,zr)??0,height:vi(e,4,zr)??0,angle:0}),(a=st(t,Sh,4))==null?void 0:a.g().length)for(const l of st(t,Sh,4).g())s.keypoints.push({x:Rt(l,1,void 0,zr,qi)??0,y:Rt(l,2,void 0,zr,qi)??0,score:Rt(l,4,void 0,zr,qi)??0,label:cn(Rt(l,3,void 0,zr))??""});return s}function ed(t){const e=[];for(const n of br(t,k3,1))e.push({x:Ut(n,1)??0,y:Ut(n,2)??0,z:Ut(n,3)??0,visibility:Ut(n,4)??0});return e}function Rl(t){const e=[];for(const n of br(t,O3,1))e.push({x:Ut(n,1)??0,y:Ut(n,2)??0,z:Ut(n,3)??0,visibility:Ut(n,4)??0});return e}function uv(t){return Array.from(t,e=>e>127?e-256:e)}function fv(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ou;Yt[516587230]=[0,Ht,C0,Fp,Vt],Yt[518928384]=Fp;const QP=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function cS(t){if(t)return!0;if(ou===void 0)try{await WebAssembly.instantiate(QP),ou=!0}catch{ou=!1}return ou}async function au(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await cS(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Lo=class{};function uS(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function dv(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function fS(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function we(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function hv(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=fS(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function pv(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Vi(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Vr(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}Lo.forVisionTasks=function(t,e=!1){return au("vision",t??su``,e)},Lo.forTextTasks=function(t,e=!1){return au("text",t??su``,e)},Lo.forGenAiTasks=function(t,e=!1){return au("genai",t??su``,e)},Lo.forAudioTasks=function(t,e=!1){return au("audio",t??su``,e)},Lo.isSimdSupported=function(t=!1){return cS(t)};async function JP(t,e,n,i){return t=await(async(r,s,o,a,l)=>{if(s&&await dv(s),!self.ModuleFactory||o&&(await dv(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Eh(t,e){const n=st(t.baseOptions,uf,1)||new uf;typeof e=="string"?(ut(n,2,uc(e)),ut(n,1)):e instanceof Uint8Array&&(ut(n,1,Xm(e,!1)),ut(n,2)),Le(t.baseOptions,0,1,n)}function mv(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map(n=>n.message).join(", "))}finally{t.H=[]}}function _e(t,e){t.C=Math.max(t.C,e)}function td(t,e){t.B=new Vn,ni(t.B,2,"PassThroughCalculator"),Et(t.B,"free_memory"),Qe(t.B,"free_memory_unused_out"),Pt(e,"free_memory"),wi(e,t.B)}function Ea(t,e){Et(t.B,e),Qe(t.B,e+"_unused_out")}function nd(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Bp=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,o,a;if(e){const l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=st(this.baseOptions,uf,1))!=null&&r.g()||(s=st(this.baseOptions,uf,1))!=null&&s.l()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,f){let h=st(c.baseOptions,ov,3);if(!h){var d=h=new ov,p=new ev;Tl(d,4,wu,p)}"delegate"in f&&(f.delegate==="GPU"?(f=h,d=new TP,Tl(f,2,wu,d)):(f=h,d=new ev,Tl(f,4,wu,d))),Le(c.baseOptions,0,3,h)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Eh(this,"/model.dat"),this.m(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)Eh(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){const f=[];for(var h=0;;){const{done:d,value:p}=await c.read();if(d)break;f.push(p),h+=p.length}if(f.length===0)return new Uint8Array(0);if(f.length===1)return f[0];c=new Uint8Array(h),h=0;for(const d of f)c.set(d,h),h+=d.length;return c}(l.modelAssetBuffer).then(c=>{Eh(this,c),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca(e=>{t=AP(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.H.push(Error(i))}),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,mv(this)}finishProcessing(){this.g.finishProcessing(),mv(this)}close(){this.B=void 0,this.g.closeGraph()}};function cs(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Bp.prototype.close=Bp.prototype.close;class eL{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function gv(t,e,n){const i=t.g;if(n=cs(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function _v(t,e){const n=t.g,i=cs(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=cs(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=cs(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new eL(n,i,r,s)}function L0(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function tL(t,e,n,i){return L0(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=_v(t,!0)),n=t.u):(t.A||(t.A=_v(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function dS(t,e,n){return L0(t,e),t=cs(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function hS(t,e,n){L0(t,e),t.B||(t.B=cs(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function nL(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var pS=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=cs(t.createProgram(),"Failed to create WebGL program"),this.X=gv(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=gv(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function vr(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function zp(t){var e=vr(t,1);if(!e){if(e=vr(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=wa(t);var n=N0(t);if(hS(n,i,mS(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function mS(t){let e=vr(t,2);if(!e){const n=wa(t);e=_S(t);const i=zp(t),r=gS(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Vp(t)}return e}function wa(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=cs(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function gS(t){if(t=wa(t),!lu)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))lu=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");lu=t.R16F}return lu}function N0(t){return t.l||(t.l=new pS),t.l}function _S(t){const e=wa(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=vr(t,2);return n||(n=dS(N0(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Vp(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var lu,en=class{constructor(t,e,n,i,r,s,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--vv===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!vr(this,0)}ka(){return!!vr(this,1)}R(){return!!vr(this,2)}ja(){return(e=vr(t=this,0))||(e=zp(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.g.push(e)),e;var t,e}ia(){return zp(this)}N(){return mS(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=wa(this),r=N0(this);i.activeTexture(i.TEXTURE1),n=dS(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=gS(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),hS(r,i,n),tL(r,i,!1,()=>{_S(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Vp(this)}),nL(r),Vp(this)}}t.push(n)}return new en(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&wa(this).deleteTexture(vr(this,2)),vv=-1}};en.prototype.close=en.prototype.close,en.prototype.clone=en.prototype.clone,en.prototype.getAsWebGLTexture=en.prototype.N,en.prototype.getAsFloat32Array=en.prototype.ia,en.prototype.getAsUint8Array=en.prototype.ja,en.prototype.hasWebGLTexture=en.prototype.R,en.prototype.hasFloat32Array=en.prototype.ka,en.prototype.hasUint8Array=en.prototype.Fa;var vv=250;function Oi(...t){return t.map(([e,n])=>({start:e,end:n}))}const iL=function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}}((xv=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:uS()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),we(this,i||"input_audio",s=>{we(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,t,e??0,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Vi(this,"__graph_config__",e=>{t(e)}),we(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),we(this,i,o=>{this.i._addAudioToInputStream(this.g,e,n,o,r)})}addGpuBufferToStream(t,e,n){we(this,e,i=>{const[r,s]=hv(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){we(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){we(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){we(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){we(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){we(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){we(this,e,i=>{we(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){we(this,e,i=>{pv(this,Object.keys(t),r=>{pv(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){we(this,n,r=>{we(this,e,s=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(t,e){we(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){we(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){we(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){we(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){we(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){we(this,e,i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){we(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)we(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){we(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){we(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){we(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){we(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){we(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){we(this,e,n=>{we(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){we(this,n,i=>{we(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){we(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){we(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){we(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){we(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){we(this,e,n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){we(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)we(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Vi(this,t,e),we(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){Vr(this,t,e),we(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Vi(this,t,e),we(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){Vr(this,t,e),we(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){Vi(this,t,e),we(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){Vr(this,t,e),we(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){Vi(this,t,e),we(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){Vr(this,t,e),we(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Vi(this,t,e),we(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){Vr(this,t,e),we(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Vi(this,t,e),we(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){Vr(this,t,e),we(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Vi(this,t,e),we(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){Vr(this,t,e),we(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Vi(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),we(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends xv{get ga(){return this.i}pa(t,e,n){we(this,e,i=>{const[r,s]=hv(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)})}Z(t,e){Vi(this,t,e),we(this,t,n=>{this.ga._attachImageListener(n)})}aa(t,e){Vr(this,t,e),we(this,t,n=>{this.ga._attachImageVectorListener(n)})}}));var xv,ki=class extends iL{};async function rt(t,e,n){return async function(i,r,s,o){return JP(i,r,s,o)}(t,n.canvas??(uS()?void 0:document.createElement("canvas")),e,n)}function vS(t,e,n,i){if(t.U){const s=new B3;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Re(s,1,(r.left+r.right)/2),Re(s,2,(r.top+r.bottom)/2),Re(s,4,r.right-r.left),Re(s,3,r.bottom-r.top)}else Re(s,1,.5),Re(s,2,.5),Re(s,4,1),Re(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Re(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=fS(e);n=Ut(s,3)*a/o,r=Ut(s,4)*o/a,Re(s,4,n),Re(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Bi(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");vS(t,e,n,t.C+1)}function or(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");vS(t,e,n,i)}function Ta(t,e,n,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return t=new en([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var ii=class extends Bp{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new pS}l(t,e=!0){if("runningMode"in t&&ut(this.baseOptions,2,Yl(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};ii.prototype.close=ii.prototype.close;var ui=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Le(t=this.h=new Jf,0,1,e=new It),Re(this.h,2,.5),Re(this.h,3,.3)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Re(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Re(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Bi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},or(this,t,n,e),this.j}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"norm_rect_in"),ot(t,"detections");const e=new oi;rr(e,kP,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Et(n,"IMAGE:image_in"),Et(n,"NORM_RECT:norm_rect_in"),Qe(n,"DETECTIONS:detections"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=F3(s),this.j.detections.push(lS(i));_e(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ui.prototype.detectForVideo=ui.prototype.G,ui.prototype.detect=ui.prototype.F,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=async function(t,e){return rt(ui,t,{baseOptions:{modelAssetPath:e}})},ui.createFromModelBuffer=function(t,e){return rt(ui,t,{baseOptions:{modelAssetBuffer:e}})},ui.createFromOptions=function(t,e){return rt(ui,t,e)};var D0=Oi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),I0=Oi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),U0=Oi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),xS=Oi([474,475],[475,476],[476,477],[477,474]),F0=Oi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),O0=Oi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),yS=Oi([469,470],[470,471],[471,472],[472,469]),k0=Oi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),SS=[...D0,...I0,...U0,...F0,...O0,...k0],MS=Oi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function yv(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var wt=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Le(t=this.h=new W3,0,1,e=new It),this.A=new G3,Le(this.h,0,3,this.A),this.u=new Jf,Le(this.h,0,2,this.u),Pr(this.u,4,1),Re(this.u,2,.5),Re(this.A,2,.5),Re(this.h,4,.5)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numFaces"in t&&Pr(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Re(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Re(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Re(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return yv(this),Bi(this,t,e),this.j}G(t,e,n){return yv(this),or(this,t,n,e),this.j}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"norm_rect"),ot(t,"face_landmarks");const e=new oi;rr(e,zP,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Et(n,"IMAGE:image_in"),Et(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=hc(s),this.j.faceLandmarks.push(ed(i));_e(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{_e(this,i)}),this.outputFaceBlendshapes&&(ot(t,"blendshapes"),Qe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Qf(s),this.j.faceBlendshapes.push(P0(i.g()??[]));_e(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{_e(this,i)})),this.outputFacialTransformationMatrixes&&(ot(t,"face_geometry"),Qe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=st(i=BP(s),PP,2))&&this.j.facialTransformationMatrixes.push({rows:vi(i,1)??0??0,columns:vi(i,2)??0??0,data:Hs(i,3,qi,Vs()).slice()??[]});_e(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{_e(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wt.prototype.detectForVideo=wt.prototype.G,wt.prototype.detect=wt.prototype.F,wt.prototype.setOptions=wt.prototype.o,wt.createFromModelPath=function(t,e){return rt(wt,t,{baseOptions:{modelAssetPath:e}})},wt.createFromModelBuffer=function(t,e){return rt(wt,t,{baseOptions:{modelAssetBuffer:e}})},wt.createFromOptions=function(t,e){return rt(wt,t,e)},wt.FACE_LANDMARKS_LIPS=D0,wt.FACE_LANDMARKS_LEFT_EYE=I0,wt.FACE_LANDMARKS_LEFT_EYEBROW=U0,wt.FACE_LANDMARKS_LEFT_IRIS=xS,wt.FACE_LANDMARKS_RIGHT_EYE=F0,wt.FACE_LANDMARKS_RIGHT_EYEBROW=O0,wt.FACE_LANDMARKS_RIGHT_IRIS=yS,wt.FACE_LANDMARKS_FACE_OVAL=k0,wt.FACE_LANDMARKS_CONTOURS=SS,wt.FACE_LANDMARKS_TESSELATION=MS;var B0=Oi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Sv(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Mv(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Ev(t,e=!0){const n=[];for(const r of t){var i=Qf(r);t=[];for(const s of i.g())i=e&&vi(s,1)!=null?vi(s,1)??0:-1,t.push({score:Ut(s,2)??0,index:i,categoryName:cn(Rt(s,3))??""??"",displayName:cn(Rt(s,4))??""??""});n.push(t)}return n}var jn=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.j=new X3,0,1,e=new It),this.u=new A0,Le(this.j,0,2,this.u),this.D=new T0,Le(this.u,0,3,this.D),this.A=new $3,Le(this.u,0,2,this.A),this.h=new VP,Le(this.j,0,3,this.h),Re(this.A,2,.5),Re(this.u,4,.5),Re(this.D,2,.5)}get baseOptions(){return st(this.j,It,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){var r,s,o,a;if(Pr(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Re(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Re(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Re(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Po,n=e,i=kp(t.cannedGesturesClassifierOptions,(r=st(this.h,Po,3))==null?void 0:r.l());Le(n,0,2,i),Le(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=st(this.h,Po,3))==null||s.g());return t.customGesturesClassifierOptions?(Le(n=e=new Po,0,2,i=kp(t.customGesturesClassifierOptions,(o=st(this.h,Po,4))==null?void 0:o.l())),Le(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=st(this.h,Po,4))==null||a.g()),this.l(t)}Ha(t,e){return Sv(this),Bi(this,t,e),Mv(this)}Ia(t,e,n){return Sv(this),or(this,t,n,e),Mv(this)}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"norm_rect"),ot(t,"hand_gestures"),ot(t,"hand_landmarks"),ot(t,"world_hand_landmarks"),ot(t,"handedness");const e=new oi;rr(e,HP,this.j);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Et(n,"IMAGE:image_in"),Et(n,"NORM_RECT:norm_rect"),Qe(n,"HAND_GESTURES:hand_gestures"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=hc(s);const o=[];for(const a of br(i,k3,1))o.push({x:Ut(a,1)??0,y:Ut(a,2)??0,z:Ut(a,3)??0,visibility:Ut(a,4)??0});this.landmarks.push(o)}_e(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{_e(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=ia(s);const o=[];for(const a of br(i,O3,1))o.push({x:Ut(a,1)??0,y:Ut(a,2)??0,z:Ut(a,3)??0,visibility:Ut(a,4)??0});this.worldLandmarks.push(o)}_e(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{_e(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Ev(i,!1)),_e(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{_e(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Ev(i)),_e(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function wv(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}jn.prototype.recognizeForVideo=jn.prototype.Ia,jn.prototype.recognize=jn.prototype.Ha,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(t,e){return rt(jn,t,{baseOptions:{modelAssetPath:e}})},jn.createFromModelBuffer=function(t,e){return rt(jn,t,{baseOptions:{modelAssetBuffer:e}})},jn.createFromOptions=function(t,e){return rt(jn,t,e)},jn.HAND_CONNECTIONS=B0;var $n=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.h=new A0,0,1,e=new It),this.u=new T0,Le(this.h,0,3,this.u),this.j=new $3,Le(this.h,0,2,this.j),Pr(this.j,3,1),Re(this.j,2,.5),Re(this.u,2,.5),Re(this.h,4,.5)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numHands"in t&&Pr(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Re(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Re(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Re(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Bi(this,t,e),wv(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],or(this,t,n,e),wv(this)}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"norm_rect"),ot(t,"hand_landmarks"),ot(t,"world_hand_landmarks"),ot(t,"handedness");const e=new oi;rr(e,GP,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Et(n,"IMAGE:image_in"),Et(n,"NORM_RECT:norm_rect"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=hc(s),this.landmarks.push(ed(i));_e(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{_e(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=ia(s),this.worldLandmarks.push(Rl(i));_e(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{_e(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const l of i){i=Qf(l);const c=[];for(const f of i.g())c.push({score:Ut(f,2)??0,index:vi(f,1)??0??-1,categoryName:cn(Rt(f,3))??""??"",displayName:cn(Rt(f,4))??""??""});a.push(c)}o.call(s,...a),_e(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$n.prototype.detectForVideo=$n.prototype.G,$n.prototype.detect=$n.prototype.F,$n.prototype.setOptions=$n.prototype.o,$n.createFromModelPath=function(t,e){return rt($n,t,{baseOptions:{modelAssetPath:e}})},$n.createFromModelBuffer=function(t,e){return rt($n,t,{baseOptions:{modelAssetBuffer:e}})},$n.createFromOptions=function(t,e){return rt($n,t,e)},$n.HAND_CONNECTIONS=B0;var ES=Oi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Tv(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Av(t){try{if(!t.D)return t.h;t.D(t.h)}finally{nd(t)}}function cu(t,e){t=hc(t),e.push(ed(t))}var yt=class extends ii{constructor(t,e){super(new ki(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Le(t=this.j=new Q3,0,1,e=new It),this.I=new T0,Le(this.j,0,2,this.I),this.W=new WP,Le(this.j,0,3,this.W),this.u=new Jf,Le(this.j,0,4,this.u),this.O=new G3,Le(this.j,0,5,this.O),this.A=new K3,Le(this.j,0,6,this.A),this.M=new Z3,Le(this.j,0,7,this.M),Re(this.u,2,.5),Re(this.u,3,.3),Re(this.O,2,.5),Re(this.A,2,.5),Re(this.A,3,.3),Re(this.M,2,.5),Re(this.I,2,.5)}get baseOptions(){return st(this.j,It,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Re(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Re(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Re(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Re(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Re(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Re(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Re(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Tv(this),Bi(this,t,i),Av(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Tv(this),or(this,t,r,e),Av(this)}m(){var t=new ai;Pt(t,"input_frames_image"),ot(t,"pose_landmarks"),ot(t,"pose_world_landmarks"),ot(t,"face_landmarks"),ot(t,"left_hand_landmarks"),ot(t,"left_hand_world_landmarks"),ot(t,"right_hand_landmarks"),ot(t,"right_hand_world_landmarks");const e=new oi,n=new K_;ni(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(r,s){if(s!=null)if(Array.isArray(s))ut(r,2,zf(s,0,ql));else{if(!(typeof s=="string"||s instanceof Ji||jm(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Wr(r,2,Xm(s,!1),no())}}(n,this.j.g());const i=new Vn;ni(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),a0(i,8,K_,n),Et(i,"IMAGE:input_frames_image"),Qe(i,"POSE_LANDMARKS:pose_landmarks"),Qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qe(i,"FACE_LANDMARKS:face_landmarks"),Qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),wi(t,i),td(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{cu(r,this.h.poseLandmarks),_e(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{_e(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=ia(r),o.push(Rl(r)),_e(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{_e(this,r)}),this.outputPoseSegmentationMasks&&(Qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ea(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[Ta(this,r,!0,!this.D)],_e(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],_e(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{cu(r,this.h.faceLandmarks),_e(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{_e(this,r)}),this.outputFaceBlendshapes&&(ot(t,"extra_blendshapes"),Qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Qf(r),o.push(P0(r.g()??[]))),_e(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{_e(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{cu(r,this.h.leftHandLandmarks),_e(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{_e(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=ia(r),o.push(Rl(r)),_e(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{_e(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{cu(r,this.h.rightHandLandmarks),_e(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{_e(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=ia(r),o.push(Rl(r)),_e(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{_e(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yt.prototype.detectForVideo=yt.prototype.G,yt.prototype.detect=yt.prototype.F,yt.prototype.setOptions=yt.prototype.o,yt.createFromModelPath=function(t,e){return rt(yt,t,{baseOptions:{modelAssetPath:e}})},yt.createFromModelBuffer=function(t,e){return rt(yt,t,{baseOptions:{modelAssetBuffer:e}})},yt.createFromOptions=function(t,e){return rt(yt,t,e)},yt.HAND_CONNECTIONS=B0,yt.POSE_CONNECTIONS=ES,yt.FACE_LANDMARKS_LIPS=D0,yt.FACE_LANDMARKS_LEFT_EYE=I0,yt.FACE_LANDMARKS_LEFT_EYEBROW=U0,yt.FACE_LANDMARKS_LEFT_IRIS=xS,yt.FACE_LANDMARKS_RIGHT_EYE=F0,yt.FACE_LANDMARKS_RIGHT_EYEBROW=O0,yt.FACE_LANDMARKS_RIGHT_IRIS=yS,yt.FACE_LANDMARKS_FACE_OVAL=k0,yt.FACE_LANDMARKS_CONTOURS=SS,yt.FACE_LANDMARKS_TESSELATION=MS;var fi=class extends ii{constructor(t,e){super(new ki(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Le(t=this.h=new J3,0,1,e=new It)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return Le(this.h,0,2,kp(t,st(this.h,E0,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Bi(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},or(this,t,n,e),this.j}m(){var t=new ai;Pt(t,"input_image"),Pt(t,"norm_rect"),ot(t,"classifications");const e=new oi;rr(e,jP,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Et(n,"IMAGE:input_image"),Et(n,"NORM_RECT:norm_rect"),Qe(n,"CLASSIFICATIONS:classifications"),n.o(e),wi(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=ZP(DP(i)),_e(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};fi.prototype.classifyForVideo=fi.prototype.ta,fi.prototype.classify=fi.prototype.sa,fi.prototype.setOptions=fi.prototype.o,fi.createFromModelPath=function(t,e){return rt(fi,t,{baseOptions:{modelAssetPath:e}})},fi.createFromModelBuffer=function(t,e){return rt(fi,t,{baseOptions:{modelAssetBuffer:e}})},fi.createFromOptions=function(t,e){return rt(fi,t,e)};var Xn=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect",!0),this.h=new eS,this.embeddings={embeddings:[]},Le(t=this.h,0,1,e=new It)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){var e=this.h,n=st(this.h,sv,2);return n=n?n.clone():new sv,t.l2Normalize!==void 0?ut(n,1,Yl(t.l2Normalize)):"l2Normalize"in t&&ut(n,1),t.quantize!==void 0?ut(n,2,Yl(t.quantize)):"quantize"in t&&ut(n,2),Le(e,0,2,n),this.l(t)}za(t,e){return Bi(this,t,e),this.embeddings}Aa(t,e,n){return or(this,t,n,e),this.embeddings}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"norm_rect"),ot(t,"embeddings_out");const e=new oi;rr(e,$P,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Et(n,"IMAGE:image_in"),Et(n,"NORM_RECT:norm_rect"),Qe(n,"EMBEDDINGS:embeddings_out"),n.o(e),wi(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=FP(i),this.embeddings=function(s){return{embeddings:br(s,UP,1).map(o=>{var c,f;const a={headIndex:vi(o,3)??0??-1,headName:cn(Rt(o,4))??""??""};var l=o.v;return Zy(l,0|l[Me],rv,vh(o,1))!==void 0?(o=Hs(o=st(o,rv,vh(o,1),void 0),1,qi,Vs()),a.floatEmbedding=o.slice()):(l=new Uint8Array(0),a.quantizedEmbedding=((f=(c=st(o,IP,vh(o,2),void 0))==null?void 0:c.na())==null?void 0:f.h())??l),a}),timestampMs:aS(Rt(s,2,void 0,void 0,rf)??$y)}}(i),_e(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Xn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=fv(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=fv(uv(t.quantizedEmbedding),uv(e.quantizedEmbedding))}return t},Xn.prototype.embedForVideo=Xn.prototype.Aa,Xn.prototype.embed=Xn.prototype.za,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=function(t,e){return rt(Xn,t,{baseOptions:{modelAssetPath:e}})},Xn.createFromModelBuffer=function(t,e){return rt(Xn,t,{baseOptions:{modelAssetBuffer:e}})},Xn.createFromOptions=function(t,e){return rt(Xn,t,e)};var Hp=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function rL(t){var n,i;const e=function(r){return br(r,Vn,1)}(t.ca()).filter(r=>(cn(Rt(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=st(e[0],oi,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=cn(Rt(r,1))??""})}function Rv(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Cv(t){try{const e=new Hp(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{nd(t)}}Hp.prototype.close=Hp.prototype.close;var Nn=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new b0,this.A=new tS,Le(this.h,0,3,this.A),Le(t=this.h,0,1,e=new It)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ut(this.h,2,uc(t.displayNamesLocale)):"displayNamesLocale"in t&&ut(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){rL(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Rv(this),Bi(this,t,i),Cv(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Rv(this),or(this,t,r,e),Cv(this)}Da(){return this.u}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"norm_rect");const e=new oi;rr(e,iS,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Et(n,"IMAGE:image_in"),Et(n,"NORM_RECT:norm_rect"),n.o(e),wi(t,n),td(this,t),this.outputConfidenceMasks&&(ot(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),Ea(this,"confidence_masks"),this.g.aa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ta(this,s,!0,!this.j)),_e(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],_e(this,i)})),this.outputCategoryMask&&(ot(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),Ea(this,"category_mask"),this.g.Z("category_mask",(i,r)=>{this.categoryMask=Ta(this,i,!1,!this.j),_e(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,_e(this,i)})),ot(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,_e(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Nn.prototype.getLabels=Nn.prototype.Da,Nn.prototype.segmentForVideo=Nn.prototype.La,Nn.prototype.segment=Nn.prototype.segment,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=function(t,e){return rt(Nn,t,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(t,e){return rt(Nn,t,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(t,e){return rt(Nn,t,e)};var Gp=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};Gp.prototype.close=Gp.prototype.close;var Hi=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new b0,this.u=new tS,Le(this.h,0,3,this.u),Le(t=this.h,0,1,e=new It)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new rS,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Mh;Wr(s,3,Yl(!0),!1),Wr(s,1,ml(e.keypoint.x),0),Wr(s,2,ml(e.keypoint.y),0),Tl(i,1,Op,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new YP;for(s of e.scribble)Wr(e=new Mh,3,Yl(!0),!1),Wr(e,1,ml(s.x),0),Wr(e,2,ml(s.y),0),a0(a,1,Mh,e);Tl(i,2,Op,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Bi(this,t,r);e:{try{const a=new Gp(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break e}this.j(a)}finally{nd(this)}o=void 0}return o}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"roi_in"),Pt(t,"norm_rect_in");const e=new oi;rr(e,iS,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Et(n,"IMAGE:image_in"),Et(n,"ROI:roi_in"),Et(n,"NORM_RECT:norm_rect_in"),n.o(e),wi(t,n),td(this,t),this.outputConfidenceMasks&&(ot(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),Ea(this,"confidence_masks"),this.g.aa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ta(this,s,!0,!this.j)),_e(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],_e(this,i)})),this.outputCategoryMask&&(ot(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),Ea(this,"category_mask"),this.g.Z("category_mask",(i,r)=>{this.categoryMask=Ta(this,i,!1,!this.j),_e(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,_e(this,i)})),ot(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,_e(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Hi.prototype.segment=Hi.prototype.segment,Hi.prototype.setOptions=Hi.prototype.o,Hi.createFromModelPath=function(t,e){return rt(Hi,t,{baseOptions:{modelAssetPath:e}})},Hi.createFromModelBuffer=function(t,e){return rt(Hi,t,{baseOptions:{modelAssetBuffer:e}})},Hi.createFromOptions=function(t,e){return rt(Hi,t,e)};var di=class extends ii{constructor(t,e){super(new ki(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Le(t=this.h=new sS,0,1,e=new It)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ut(this.h,2,uc(t.displayNamesLocale)):"displayNamesLocale"in t&&ut(this.h,2),t.maxResults!==void 0?Pr(this.h,3,t.maxResults):"maxResults"in t&&ut(this.h,3),t.scoreThreshold!==void 0?Re(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ut(this.h,4),t.categoryAllowlist!==void 0?of(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ut(this.h,5),t.categoryDenylist!==void 0?of(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ut(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Bi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},or(this,t,n,e),this.j}m(){var t=new ai;Pt(t,"input_frame_gpu"),Pt(t,"norm_rect"),ot(t,"detections");const e=new oi;rr(e,qP,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Et(n,"IMAGE:input_frame_gpu"),Et(n,"NORM_RECT:norm_rect"),Qe(n,"DETECTIONS:detections"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=F3(s),this.j.detections.push(lS(i));_e(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{_e(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};di.prototype.detectForVideo=di.prototype.G,di.prototype.detect=di.prototype.F,di.prototype.setOptions=di.prototype.o,di.createFromModelPath=async function(t,e){return rt(di,t,{baseOptions:{modelAssetPath:e}})},di.createFromModelBuffer=function(t,e){return rt(di,t,{baseOptions:{modelAssetBuffer:e}})},di.createFromOptions=function(t,e){return rt(di,t,e)};var Wp=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function bv(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Pv(t){try{const e=new Wp(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{nd(t)}}Wp.prototype.close=Wp.prototype.close;var Yn=class extends ii{constructor(t,e){super(new ki(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Le(t=this.h=new oS,0,1,e=new It),this.A=new Z3,Le(this.h,0,3,this.A),this.j=new K3,Le(this.h,0,2,this.j),Pr(this.j,4,1),Re(this.j,2,.5),Re(this.A,2,.5),Re(this.h,4,.5)}get baseOptions(){return st(this.h,It,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numPoses"in t&&Pr(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Re(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Re(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Re(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,bv(this),Bi(this,t,i),Pv(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,bv(this),or(this,t,r,e),Pv(this)}m(){var t=new ai;Pt(t,"image_in"),Pt(t,"norm_rect"),ot(t,"normalized_landmarks"),ot(t,"world_landmarks"),ot(t,"segmentation_masks");const e=new oi;rr(e,KP,this.h);const n=new Vn;ni(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Et(n,"IMAGE:image_in"),Et(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:normalized_landmarks"),Qe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),wi(t,n),td(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=hc(s),this.landmarks.push(ed(i));_e(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],_e(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=ia(s),this.worldLandmarks.push(Rl(i));_e(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],_e(this,i)}),this.outputSegmentationMasks&&(Qe(n,"SEGMENTATION_MASK:segmentation_masks"),Ea(this,"segmentation_masks"),this.g.aa("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>Ta(this,s,!0,!this.u)),_e(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],_e(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Yn.prototype.detectForVideo=Yn.prototype.G,Yn.prototype.detect=Yn.prototype.F,Yn.prototype.setOptions=Yn.prototype.o,Yn.createFromModelPath=function(t,e){return rt(Yn,t,{baseOptions:{modelAssetPath:e}})},Yn.createFromModelBuffer=function(t,e){return rt(Yn,t,{baseOptions:{modelAssetBuffer:e}})},Yn.createFromOptions=function(t,e){return rt(Yn,t,e)},Yn.POSE_CONNECTIONS=ES;const mr=9.81,wh=1.8,sL="/trajaectory_path.png",ll={20:{label:"20",csv:"/20_kph_data.ChannelGroup_0.csv",video:null},35:{label:"35",csv:"/35kph_data.ChannelGroup_0.csv",video:null},50:{label:"50",csv:"/50kph_data.ChannelGroup_0.csv",video:"/Sample_50kph.mp4"}},Th=(t,e)=>{let n=t-e;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return n},oL=t=>{const e=t.trim().split(`
`),n=[];for(let i=1;i<e.length;i++){const r=e[i].split(",");if(r.length>=2){const s=parseFloat(r[0]),o=parseFloat(r[1]);!isNaN(s)&&!isNaN(o)&&n.push({timestamp:s,ay:o})}}return n},aL=({csvData:t,bioHistory:e,playbackTime:n,height:i=100})=>{if(!t||t.length===0)return null;const r={top:5,right:10,bottom:15,left:35},s=600,o=s-r.left-r.right,a=i-r.top-r.bottom,l=Ke.useMemo(()=>t.filter((u,g)=>g%10===0),[t]),c=Math.max(...l.map(u=>Math.abs(u.ay)),.01),f=Math.atan(c/mr)*(180/Math.PI),h=t[t.length-1].timestamp,d=u=>u/(h||1)*o,p=u=>{const g=Math.atan(u/mr)*(180/Math.PI);return a/2-g/(f||1)*(a/2)},v=l.map(u=>`${d(u.timestamp)},${p(u.ay)}`).join(" "),x=e.length>1?e.filter((u,g)=>g%5===0).map(u=>{const g=u.roll*(180/Math.PI);return`${d(u.time)},${a/2-g/(f||1)*(a/2)}`}).join(" "):"",m=d(n);return q.jsxs("div",{className:"w-full bg-[#0b1120] rounded-xl border border-slate-800/50 p-2 shadow-inner",children:[q.jsxs("div",{className:"flex justify-between items-center mb-1 px-2",children:[q.jsx("h4",{className:"text-[9px] font-bold text-slate-500 uppercase tracking-widest",children:"Tilt Comparison (Target vs Actual)"}),q.jsxs("div",{className:"flex space-x-3 text-[8px] font-bold",children:[q.jsxs("span",{className:"flex items-center text-blue-500",children:[q.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500 mr-1"})," GIV Target"]}),q.jsxs("span",{className:"flex items-center text-rose-400",children:[q.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-400 mr-1"})," User Head"]})]})]}),q.jsx("svg",{viewBox:`0 0 ${s} ${i}`,className:"w-full h-auto",children:q.jsxs("g",{transform:`translate(${r.left}, ${r.top})`,children:[q.jsx("line",{x1:"0",y1:a/2,x2:o,y2:a/2,stroke:"#1e293b",strokeWidth:"0.5",strokeDasharray:"2"}),q.jsx("text",{x:"-3",y:a/2,fill:"#475569",fontSize:"8",textAnchor:"end",dominantBaseline:"middle",children:"0°"}),q.jsx("polyline",{fill:"none",stroke:"#3b82f6",strokeWidth:"1.5",strokeOpacity:"0.4",points:v,strokeLinejoin:"round"}),x&&q.jsx("polyline",{fill:"none",stroke:"#fb7185",strokeWidth:"1.5",points:x,strokeLinejoin:"round"}),q.jsx("line",{x1:m,y1:"0",x2:m,y2:a,stroke:"#ef4444",strokeWidth:"1",strokeDasharray:"2"})]})})]})};function lL(){const[t,e]=Ke.useState("50"),[n,i]=Ke.useState([]),[r,s]=Ke.useState(0),[o,a]=Ke.useState(!1),[l,c]=Ke.useState(0),[f,h]=Ke.useState(0),[d,p]=Ke.useState("left"),[v,x]=Ke.useState(0),[m,u]=Ke.useState(!1),[g,_]=Ke.useState(0),[M,C]=Ke.useState([]),[T,A]=Ke.useState(!1),[P,E]=Ke.useState(null),[y,I]=Ke.useState(!1),V=Ke.useRef(null),L=Ke.useRef(null),H=Ke.useRef(null),$=Ke.useRef(null),Q=Ke.useRef(null),te=Ke.useRef(0),b=Ke.useRef([]),W=Ke.useRef(0),j=Ke.useRef(0),oe=Ke.useRef(!1),xe=Ke.useRef({aLat:0,direction:"left",currentAy:0,isPlaying:!1,isCameraEnabled:!1,currentHeadRoll:0});Ke.useEffect(()=>{oe.current=o},[o]),Ke.useEffect(()=>{xe.current={aLat:l,direction:d,currentAy:f,isPlaying:o,isCameraEnabled:m,currentHeadRoll:g}},[l,d,f,o,m,g]);const Ze=(ee,be)=>{h(ee.ay),c(Math.abs(ee.ay)),p(ee.ay>=0?"left":"right");const ve=be+1,ye=b.current;let de=j.current;for(;de<ye.length-1&&ye[de].timestamp<ve;)de++;x(Math.atan(ye[de].ay/mr)*(180/Math.PI))},G=()=>{W.current=0,j.current=0,s(0),C([]),b.current.length>0&&Ze(b.current[0],0),H.current&&(H.current.currentTime=0,H.current.pause())};Ke.useEffect(()=>{(async()=>{try{const ve=await(await fetch(ll[t].csv)).text(),ye=oL(ve);b.current=ye,i(ye),a(!1),oe.current=!1,G()}catch(be){console.error("Error loading CSV:",be)}})()},[t]),Ke.useEffect(()=>{(async()=>{try{const be=await Lo.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm"),ve="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",ye=de=>wt.createFromOptions(be,{baseOptions:{modelAssetPath:ve,delegate:de},runningMode:"VIDEO",numFaces:1});try{$.current=await ye("GPU")}catch{$.current=await ye("CPU")}A(!0)}catch(be){console.error("Face landmarker init failed:",be),E("Face tracking model failed to load.")}})()},[]);const ie=()=>{Q.current&&(Q.current.getTracks().forEach(ee=>ee.stop()),Q.current=null),L.current&&(L.current.srcObject=null),te.current=0,I(!1)};Ke.useEffect(()=>{if(!m||!T){ie();return}let ee=!1,be=null;E(null),te.current=0;const ve=()=>new Promise(de=>{const Ne=()=>{ee||(L.current?de(L.current):requestAnimationFrame(Ne))};Ne()});return(async()=>{try{const de=await ve();if(ee||(Q.current||(Q.current=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1})),de.srcObject=Q.current,de.muted=!0,de.playsInline=!0,await new Promise((He,R)=>{const S=()=>{de.removeEventListener("loadedmetadata",S),He()};de.readyState>=1?He():de.addEventListener("loadedmetadata",S),de.play().catch(R)}),ee))return;const Ne=()=>{var S;if(ee||!xe.current.isCameraEnabled)return;const He=L.current,R=$.current;if(He&&R&&He.readyState>=2&&He.videoWidth>0){te.current+=1;try{const B=R.detectForVideo(He,te.current);if(((S=B.faceLandmarks)==null?void 0:S.length)>0){const Y=B.faceLandmarks[0],Z=Y[33],J=Y[263];if(Z&&J){const Te=Z.x-J.x,ae=Z.y-J.y,le=Math.atan2(ae,Te);_(le),I(!0),oe.current&&C(Ie=>[...Ie,{roll:le,time:W.current}].slice(-1e3))}}else I(!1)}catch(B){console.error("FaceLandmarker detection error:",B)}}be=requestAnimationFrame(Ne)};Ne()}catch(de){console.error("Error accessing camera:",de),E((de==null?void 0:de.message)||"Could not access webcam."),u(!1),ie()}})(),()=>{ee=!0,be&&cancelAnimationFrame(be),ie()}},[m,T]),Ke.useEffect(()=>{let ee,be=performance.now();const ve=()=>{var ye;if(oe.current&&b.current.length>0){const de=performance.now(),Ne=(de-be)/1e3;be=de,W.current+=Ne;const He=W.current;s(He);const R=ll[t].video;H.current&&R&&Math.abs(H.current.currentTime-He)>.3&&(H.current.currentTime=He);const S=b.current;let B=j.current;for(;B<S.length-1&&S[B].timestamp<He;)B++;B>=S.length-1?(a(!1),oe.current=!1,(ye=H.current)==null||ye.pause()):(j.current=B,Ze(S[B],He))}else be=performance.now();ee=requestAnimationFrame(ve)};return ee=requestAnimationFrame(ve),()=>cancelAnimationFrame(ee)},[t]),Ke.useEffect(()=>{const ee=V.current;if(!ee)return;const be=ee.clientWidth,ve=ee.clientHeight,ye=new gb;ye.background=new nt(659229);const de=new mi(45,be/ve,.1,100);de.position.set(0,1.4,2.8),de.lookAt(0,.9,-4);const Ne=new mb({antialias:!0});Ne.setSize(be,ve),Ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),ee.appendChild(Ne.domElement),ye.add(new Sb(16777215,.5));const He=new yb(16777215,.7);He.position.set(5,10,7),ye.add(He);const R=new xn(new sc(100,100),new ol({color:461332,roughness:.9}));R.rotation.x=-Math.PI/2,R.position.y=-.1,ye.add(R);const S=[],B=new Lf({color:3359061});for(let N=0;N<15;N++){const K=new xn(new ls(.1,.02,1.5),B);ye.add(K),S.push({mesh:K,zOffset:N/15*-40})}const Y=new jo;Y.position.set(0,.1,.5),ye.add(Y);const Z=new ol({color:1120295}),J=new xn(new ls(.6,.8,.15),Z);J.position.set(0,.4,-.1),Y.add(J);const Te=new xn(new Df(.18,.25,.6,32),new ol({color:2042167}));Te.position.y=.3,Y.add(Te);const ae=new jo;ae.position.set(0,.65,0),Y.add(ae);const le=new xn(new Wm(.15,32,32),new ol({color:13751771}));le.position.y=.12,ae.add(le);const Ie=new xn(new ls(.14,.05,.05),new ol({color:198418}));Ie.position.set(0,.13,-.13),ae.add(Ie);const se=new U(0,.82,.1),Ce=new ph(new U(0,-1,0),se,mr*wh*.04,15680580,.1,.03),Xe=new ph(new U(1,0,0),se,.1,3900150,.1,.03),Pe=new ph(new U(0,-1,0),se,.1,1096065,.1,.03);ye.add(Ce,Xe,Pe);const pe=new yy(new Mi().setFromPoints([new U(0,-.6,0),new U(0,1,0)]),new _b({color:6583435,dashSize:.06,gapSize:.04,depthTest:!1}));pe.computeLineDistances(),pe.position.copy(se),pe.renderOrder=999,ye.add(pe);let Ue,We=0;const _t=()=>{Ue=requestAnimationFrame(_t),We+=.15;const{aLat:N,direction:K,currentAy:X,isCameraEnabled:ue,currentHeadRoll:me}=xe.current,qe=K==="left"?1:-1;Xe.setLength(Math.max(.01,N*wh*.04),.06,.02),Xe.setDirection(new U(qe,0,0));const ft=new U(X*.04*qe,-mr*.04,0).normalize();Pe.setDirection(ft),Pe.setLength(Math.sqrt(Math.pow(X*.04,2)+Math.pow(mr*.04,2))*wh,.08,.03),pe.rotation.z=Math.atan(X/mr);const vt=ue?me:Math.atan(X/mr);ae.rotation.z+=(vt-ae.rotation.z)*.1;const Gt=N*.08*-qe;S.forEach(tt=>{let wn=(tt.zOffset-We)%40;wn>0&&(wn-=40);const Qt=wn-de.position.z;tt.mesh.position.set(Gt*Math.pow(Qt*.15,2),-.05,wn),tt.mesh.rotation.y=Math.atan2(Gt*2*Qt*.15,1)}),Ne.render(ye,de)};_t();const Fe=()=>{const N=ee.clientWidth,K=ee.clientHeight;de.aspect=N/K,de.updateProjectionMatrix(),Ne.setSize(N,K)};return window.addEventListener("resize",Fe),()=>{cancelAnimationFrame(Ue),window.removeEventListener("resize",Fe),ee.removeChild(Ne.domElement)}},[]);const he=()=>{!o&&n.length>0&&W.current>=n[n.length-1].timestamp-.05&&G();const ee=!o;a(ee),oe.current=ee;const be=ll[t].video;H.current&&be&&(ee?H.current.play():H.current.pause())},re=Math.atan(f/mr),Ge=Math.abs(re)*(180/Math.PI),$e=n.length>0?n[n.length-1].timestamp:0,F=ll[t].video,et=(()=>{if(!m)return{label:"Enable head tracking",sub:"to receive tilt coaching",tone:"slate"};if(n.length===0)return{label:"Loading route data…",sub:"",tone:"slate"};const ee=Th(re,g),be=Math.abs(ee)*(180/Math.PI);return be<5?{label:"Perfect alignment",sub:"Matching GIV axis",tone:"emerald"}:{label:ee>0?"Tilt head left":"Tilt head right",sub:`${be.toFixed(0)}° to target · ${d==="left"?"↖":"↗"} turn`,tone:"amber"}})();return q.jsx("div",{className:"w-full max-w-[1600px] mx-auto p-3 bg-[#070b14] text-slate-100 h-screen flex flex-col overflow-hidden",children:q.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-3 flex-1 min-h-0 overflow-hidden",children:[q.jsxs("div",{className:"lg:col-span-1 space-y-3 flex flex-col overflow-hidden min-h-0",children:[q.jsxs("div",{className:"p-4 bg-[#0f172a] rounded-xl border border-slate-800/80 space-y-3 shrink-0",children:[q.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider",children:[q.jsx("span",{children:"🚀"})," ",q.jsx("span",{children:"Mission Control"})]}),q.jsxs("div",{children:[q.jsx("label",{className:"text-[9px] text-slate-500 uppercase font-bold mb-1.5 block",children:"Vehicle speed"}),q.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:Object.keys(ll).map(ee=>q.jsxs("button",{onClick:()=>e(ee),className:`py-1.5 rounded-lg text-xs font-bold transition-all ${t===ee?"bg-blue-600 text-white border border-blue-500":"bg-slate-800/40 text-slate-400 hover:bg-slate-800 border border-transparent"}`,children:[ee," km/h"]},ee))})]}),q.jsx("button",{onClick:he,disabled:n.length===0,className:`w-full py-2 rounded-xl text-xs font-bold transition-all disabled:opacity-40 ${o?"bg-amber-600/20 text-amber-400 border border-amber-500/30":"bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"}`,children:o?"⏸ Pause simulation":"▶ Start simulation"}),q.jsxs("button",{onClick:()=>u(!m),disabled:!T,className:`w-full py-2 rounded-lg text-[10px] font-bold transition-all ${m?"bg-rose-600/20 border border-rose-500/40 text-rose-400":"bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-800"} ${T?"":"opacity-50 cursor-not-allowed"}`,children:[m?"🛑 Disable head tracking":"📷 Enable head tracking",!T&&" ⏳"]})]}),q.jsxs("div",{className:"p-4 bg-black/40 rounded-xl border border-slate-800/50 shrink-0",children:[q.jsx("p",{className:"text-[9px] uppercase font-bold tracking-widest text-slate-500 mb-2",children:"Live telemetry (from CSV)"}),q.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[10px]",children:[q.jsxs("div",{children:[q.jsx("p",{className:"text-slate-500 uppercase text-[8px]",children:"Lateral accel"}),q.jsxs("p",{className:"font-mono text-blue-400 font-bold",children:[l.toFixed(2)," ",q.jsx("span",{className:"text-[9px]",children:"m/s²"})]})]}),q.jsxs("div",{children:[q.jsx("p",{className:"text-slate-500 uppercase text-[8px]",children:"Tilt direction"}),q.jsx("p",{className:`font-bold uppercase ${d==="left"?"text-blue-400":"text-amber-400"}`,children:d==="left"?"← Left":"Right →"})]}),q.jsxs("div",{children:[q.jsx("p",{className:"text-slate-500 uppercase text-[8px]",children:"Target GIV"}),q.jsxs("p",{className:"font-mono text-emerald-400 font-bold",children:[Ge.toFixed(1),"°"]})]}),q.jsxs("div",{children:[q.jsx("p",{className:"text-slate-500 uppercase text-[8px]",children:"Predicted (+1s)"}),q.jsxs("p",{className:"font-mono text-emerald-300/80 font-bold",children:[Math.abs(v).toFixed(1),"° ",v>=0?"L":"R"]})]})]}),q.jsxs("p",{className:"text-[9px] text-slate-600 font-mono mt-2",children:[r.toFixed(1),"s / ",$e.toFixed(1),"s"]})]}),q.jsxs("div",{className:`p-4 rounded-xl border flex-1 flex flex-col items-center justify-center text-center min-h-[100px] ${et.tone==="emerald"?"bg-emerald-950/40 border-emerald-800/50":et.tone==="amber"?"bg-amber-950/30 border-amber-800/40":"bg-black/40 border-slate-800/50"}`,children:[q.jsx("p",{className:`text-sm font-bold uppercase tracking-wide ${et.tone==="emerald"?"text-emerald-400":et.tone==="amber"?"text-amber-400":"text-slate-500"}`,children:et.label}),et.sub&&q.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:et.sub})]})]}),q.jsxs("div",{className:"lg:col-span-2 flex flex-col gap-3 min-h-0 overflow-hidden",children:[q.jsxs("div",{className:"grid grid-cols-2 gap-3 h-32 shrink-0",children:[q.jsxs("div",{className:"bg-[#0f172a] rounded-xl border border-slate-800 p-2 relative overflow-hidden flex flex-col",children:[q.jsx("p",{className:"text-[8px] font-bold text-slate-500 uppercase z-10",children:"Test route"}),q.jsx("img",{src:sL,alt:"Vehicle trajectory path used for lateral acceleration data",className:"flex-1 w-full object-contain rounded-lg opacity-90 min-h-0"})]}),q.jsxs("div",{className:"bg-[#0f172a] rounded-xl border border-slate-800 p-2 relative overflow-hidden flex flex-col",children:[q.jsx("p",{className:"text-[8px] font-bold text-slate-500 uppercase z-10",children:"Vehicle simulation"}),F?q.jsx("video",{ref:H,src:F,className:"flex-1 w-full object-cover rounded-lg opacity-80 min-h-0",muted:!0,playsInline:!0}):q.jsx("div",{className:"flex-1 flex items-center justify-center rounded-lg bg-slate-900/80 border border-dashed border-slate-700 min-h-0",children:q.jsxs("p",{className:"text-[10px] text-slate-500 text-center px-3",children:["Cabin video available at 50 km/h.",q.jsx("br",{}),q.jsx("span",{className:"text-slate-600",children:"CSV playback active for this speed."})]})})]})]}),q.jsxs("div",{className:"bg-[#0f172a] rounded-xl border border-slate-800 p-2 flex-1 relative min-h-[200px] overflow-hidden",children:[q.jsx("div",{ref:V,className:"w-full h-full absolute inset-0"}),q.jsxs("div",{className:"absolute top-2 left-2 flex flex-col gap-1 pointer-events-none",children:[q.jsx("span",{className:"bg-black/50 backdrop-blur px-2 py-0.5 rounded text-[8px] text-white/70 uppercase",children:"3D GIV twin"}),q.jsxs("span",{className:"bg-blue-600/80 px-2 py-0.5 rounded text-[8px] font-bold text-white uppercase",children:[d," · ",t," km/h"]})]})]}),q.jsx("div",{className:"shrink-0",children:q.jsx(aL,{csvData:n,bioHistory:M,playbackTime:r,height:100})})]}),q.jsx("div",{className:"lg:col-span-1 flex flex-col min-h-0 overflow-hidden",children:q.jsxs("div",{className:"p-4 bg-[#0f172a] rounded-xl border border-slate-800/80 flex-1 flex flex-col min-h-0 overflow-hidden",children:[q.jsxs("div",{className:"flex items-center justify-between mb-2 shrink-0",children:[q.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Biometric feed"}),m&&q.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"})]}),q.jsxs("div",{className:`flex flex-col gap-3 flex-1 min-h-0 overflow-hidden ${m?"":"hidden"}`,children:[q.jsxs("div",{className:"rounded-lg overflow-hidden border border-slate-800 bg-black aspect-[3/4] relative shrink-0 max-h-[55vh]",children:[q.jsx("video",{ref:L,className:"w-full h-full object-cover mirror",autoPlay:!0,playsInline:!0,muted:!0}),!y&&m&&q.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none",children:q.jsx("p",{className:"text-[10px] text-slate-300 font-bold uppercase tracking-wide px-3 text-center",children:"Position face in frame"})}),q.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:q.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",children:[q.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"80",stroke:"#ffffff",strokeWidth:"0.2",strokeDasharray:"1 1",opacity:"0.25"}),q.jsxs("g",{style:{transform:`rotate(${v*(Math.PI/180)}rad)`,transformOrigin:"50% 50%"},children:[q.jsx("line",{x1:"50",y1:"15",x2:"50",y2:"85",stroke:"#10b981",strokeWidth:"0.5",strokeDasharray:"1 1",opacity:"0.35"}),q.jsx("text",{x:"50",y:"8",fill:"#10b981",fontSize:"3",textAnchor:"middle",opacity:"0.5",children:"+1s"})]}),q.jsxs("g",{style:{transform:`rotate(${re}rad)`,transformOrigin:"50% 50%"},children:[q.jsx("line",{x1:"50",y1:"15",x2:"50",y2:"85",stroke:"#10b981",strokeWidth:"2"}),q.jsx("text",{x:"50",y:"12",fill:"#10b981",fontSize:"4",fontWeight:"bold",textAnchor:"middle",children:"TARGET"})]}),q.jsxs("g",{style:{transform:`rotate(${g}rad)`,transformOrigin:"50% 50%"},children:[q.jsx("line",{x1:"50",y1:"15",x2:"50",y2:"85",stroke:"#3b82f6",strokeWidth:"2"}),q.jsx("circle",{cx:"50",cy:"50",r:"2",fill:"#3b82f6"})]}),(()=>{const ee=Th(re,g);return Math.abs(ee)<.05?q.jsx("text",{x:"50",y:"92",fill:"#10b981",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:"✓ ALIGNED"}):q.jsx("text",{x:"50",y:"92",fill:ee>0?"#fb7185":"#3b82f6",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:ee>0?"← TILT LEFT":"TILT RIGHT →"})})()]})}),q.jsxs("div",{className:"absolute bottom-2 left-2 right-2 flex justify-between text-[9px] font-mono font-bold",children:[q.jsxs("span",{className:"text-blue-400 bg-black/70 px-1.5 py-0.5 rounded",children:["ACT ",(g*180/Math.PI).toFixed(0),"°"]}),q.jsxs("span",{className:"text-emerald-400 bg-black/70 px-1.5 py-0.5 rounded",children:["TGT ",Ge.toFixed(0),"° ",d==="left"?"L":"R"]})]})]}),q.jsxs("div",{className:"p-3 bg-slate-900/50 rounded-lg border border-slate-800 shrink-0",children:[q.jsx("p",{className:"text-[8px] text-slate-500 uppercase font-bold mb-1",children:"Alignment error"}),(()=>{const ee=Math.abs(Th(g,re))*(180/Math.PI),be=Math.max(0,100-ee*2);return q.jsxs(q.Fragment,{children:[q.jsxs("p",{className:`text-2xl font-mono font-bold ${ee<5?"text-emerald-400":"text-rose-400"}`,children:[ee.toFixed(1),"°"]}),q.jsx("div",{className:"mt-2 w-full bg-slate-800 h-1 rounded-full overflow-hidden",children:q.jsx("div",{className:"bg-emerald-500 h-full transition-all",style:{width:`${be}%`}})})]})})()]})]}),!m&&q.jsxs("div",{className:"flex-1 border border-dashed border-slate-800 rounded-lg flex flex-col items-center justify-center text-center p-4",children:[q.jsx("p",{className:"text-2xl opacity-20 mb-2",children:"📷"}),q.jsx("p",{className:"text-[10px] text-slate-500 font-medium",children:"Camera inactive"}),q.jsx("p",{className:"text-[9px] text-slate-600 mt-1",children:"Enable head tracking for CSV-guided tilt coaching"})]}),P&&q.jsx("p",{className:"text-[10px] text-rose-400 mt-2",children:P})]})})]})})}function cL(){return q.jsx("div",{className:"w-full min-h-screen bg-slate-950 flex items-center justify-center p-4",children:q.jsx(lL,{})})}Ah.createRoot(document.getElementById("root")).render(q.jsx(WS.StrictMode,{children:q.jsx(cL,{})}));
