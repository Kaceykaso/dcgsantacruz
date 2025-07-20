(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function Po(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zo={exports:{}},yu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function tv(){if(rh)return yu;rh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,m){var g=null;if(m!==void 0&&(g=""+m),d.key!==void 0&&(g=""+d.key),"key"in d){m={};for(var O in d)O!=="key"&&(m[O]=d[O])}else m=d;return d=m.ref,{$$typeof:n,type:r,key:g,ref:d!==void 0?d:null,props:m}}return yu.Fragment=c,yu.jsx=o,yu.jsxs=o,yu}var oh;function ev(){return oh||(oh=1,zo.exports=tv()),zo.exports}var rt=ev(),wo={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function lv(){if(fh)return pt;fh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.iterator;function U(p){return p===null||typeof p!="object"?null:(p=w&&p[w]||p["@@iterator"],typeof p=="function"?p:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,tt={};function F(p,B,Q){this.props=p,this.context=B,this.refs=tt,this.updater=Q||Z}F.prototype.isReactComponent={},F.prototype.setState=function(p,B){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,B,"setState")},F.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function K(){}K.prototype=F.prototype;function X(p,B,Q){this.props=p,this.context=B,this.refs=tt,this.updater=Q||Z}var q=X.prototype=new K;q.constructor=X,J(q,F.prototype),q.isPureReactComponent=!0;var et=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function I(p,B,Q,N,j,lt){return Q=lt.ref,{$$typeof:n,type:p,key:B,ref:Q!==void 0?Q:null,props:lt}}function xt(p,B){return I(p.type,B,void 0,void 0,void 0,p.props)}function zt(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Vt(p){var B={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(Q){return B[Q]})}var $t=/\/+/g;function mt(p,B){return typeof p=="object"&&p!==null&&p.key!=null?Vt(""+p.key):B.toString(36)}function Qt(){}function Ut(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Qt,Qt):(p.status="pending",p.then(function(B){p.status==="pending"&&(p.status="fulfilled",p.value=B)},function(B){p.status==="pending"&&(p.status="rejected",p.reason=B)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function gt(p,B,Q,N,j){var lt=typeof p;(lt==="undefined"||lt==="boolean")&&(p=null);var V=!1;if(p===null)V=!0;else switch(lt){case"bigint":case"string":case"number":V=!0;break;case"object":switch(p.$$typeof){case n:case c:V=!0;break;case z:return V=p._init,gt(V(p._payload),B,Q,N,j)}}if(V)return j=j(p),V=N===""?"."+mt(p,0):N,et(j)?(Q="",V!=null&&(Q=V.replace($t,"$&/")+"/"),gt(j,B,Q,"",function(k){return k})):j!=null&&(zt(j)&&(j=xt(j,Q+(j.key==null||p&&p.key===j.key?"":(""+j.key).replace($t,"$&/")+"/")+V)),B.push(j)),1;V=0;var ot=N===""?".":N+":";if(et(p))for(var dt=0;dt<p.length;dt++)N=p[dt],lt=ot+mt(N,dt),V+=gt(N,B,Q,lt,j);else if(dt=U(p),typeof dt=="function")for(p=dt.call(p),dt=0;!(N=p.next()).done;)N=N.value,lt=ot+mt(N,dt++),V+=gt(N,B,Q,lt,j);else if(lt==="object"){if(typeof p.then=="function")return gt(Ut(p),B,Q,N,j);throw B=String(p),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return V}function R(p,B,Q){if(p==null)return p;var N=[],j=0;return gt(p,N,"","",function(lt){return B.call(Q,lt,j++)}),N}function L(p){if(p._status===-1){var B=p._result;B=B(),B.then(function(Q){(p._status===0||p._status===-1)&&(p._status=1,p._result=Q)},function(Q){(p._status===0||p._status===-1)&&(p._status=2,p._result=Q)}),p._status===-1&&(p._status=0,p._result=B)}if(p._status===1)return p._result.default;throw p._result}var G=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function ut(){}return pt.Children={map:R,forEach:function(p,B,Q){R(p,function(){B.apply(this,arguments)},Q)},count:function(p){var B=0;return R(p,function(){B++}),B},toArray:function(p){return R(p,function(B){return B})||[]},only:function(p){if(!zt(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},pt.Component=F,pt.Fragment=o,pt.Profiler=d,pt.PureComponent=X,pt.StrictMode=r,pt.Suspense=A,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,pt.__COMPILER_RUNTIME={__proto__:null,c:function(p){return Y.H.useMemoCache(p)}},pt.cache=function(p){return function(){return p.apply(null,arguments)}},pt.cloneElement=function(p,B,Q){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var N=J({},p.props),j=p.key,lt=void 0;if(B!=null)for(V in B.ref!==void 0&&(lt=void 0),B.key!==void 0&&(j=""+B.key),B)!W.call(B,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&B.ref===void 0||(N[V]=B[V]);var V=arguments.length-2;if(V===1)N.children=Q;else if(1<V){for(var ot=Array(V),dt=0;dt<V;dt++)ot[dt]=arguments[dt+2];N.children=ot}return I(p.type,j,void 0,void 0,lt,N)},pt.createContext=function(p){return p={$$typeof:g,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:m,_context:p},p},pt.createElement=function(p,B,Q){var N,j={},lt=null;if(B!=null)for(N in B.key!==void 0&&(lt=""+B.key),B)W.call(B,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(j[N]=B[N]);var V=arguments.length-2;if(V===1)j.children=Q;else if(1<V){for(var ot=Array(V),dt=0;dt<V;dt++)ot[dt]=arguments[dt+2];j.children=ot}if(p&&p.defaultProps)for(N in V=p.defaultProps,V)j[N]===void 0&&(j[N]=V[N]);return I(p,lt,void 0,void 0,null,j)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(p){return{$$typeof:O,render:p}},pt.isValidElement=zt,pt.lazy=function(p){return{$$typeof:z,_payload:{_status:-1,_result:p},_init:L}},pt.memo=function(p,B){return{$$typeof:b,type:p,compare:B===void 0?null:B}},pt.startTransition=function(p){var B=Y.T,Q={};Y.T=Q;try{var N=p(),j=Y.S;j!==null&&j(Q,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(ut,G)}catch(lt){G(lt)}finally{Y.T=B}},pt.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},pt.use=function(p){return Y.H.use(p)},pt.useActionState=function(p,B,Q){return Y.H.useActionState(p,B,Q)},pt.useCallback=function(p,B){return Y.H.useCallback(p,B)},pt.useContext=function(p){return Y.H.useContext(p)},pt.useDebugValue=function(){},pt.useDeferredValue=function(p,B){return Y.H.useDeferredValue(p,B)},pt.useEffect=function(p,B,Q){var N=Y.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(p,B)},pt.useId=function(){return Y.H.useId()},pt.useImperativeHandle=function(p,B,Q){return Y.H.useImperativeHandle(p,B,Q)},pt.useInsertionEffect=function(p,B){return Y.H.useInsertionEffect(p,B)},pt.useLayoutEffect=function(p,B){return Y.H.useLayoutEffect(p,B)},pt.useMemo=function(p,B){return Y.H.useMemo(p,B)},pt.useOptimistic=function(p,B){return Y.H.useOptimistic(p,B)},pt.useReducer=function(p,B,Q){return Y.H.useReducer(p,B,Q)},pt.useRef=function(p){return Y.H.useRef(p)},pt.useState=function(p){return Y.H.useState(p)},pt.useSyncExternalStore=function(p,B,Q){return Y.H.useSyncExternalStore(p,B,Q)},pt.useTransition=function(){return Y.H.useTransition()},pt.version="19.1.0",pt}var sh;function tf(){return sh||(sh=1,wo.exports=lv()),wo.exports}var M=tf();const D=Po(M);var Ro={exports:{}},Au={},Mo={exports:{}},_o={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function av(){return dh||(dh=1,function(n){function c(R,L){var G=R.length;R.push(L);t:for(;0<G;){var ut=G-1>>>1,p=R[ut];if(0<d(p,L))R[ut]=L,R[G]=p,G=ut;else break t}}function o(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],G=R.pop();if(G!==L){R[0]=G;t:for(var ut=0,p=R.length,B=p>>>1;ut<B;){var Q=2*(ut+1)-1,N=R[Q],j=Q+1,lt=R[j];if(0>d(N,G))j<p&&0>d(lt,N)?(R[ut]=lt,R[j]=G,ut=j):(R[ut]=N,R[Q]=G,ut=Q);else if(j<p&&0>d(lt,G))R[ut]=lt,R[j]=G,ut=j;else break t}}return L}function d(R,L){var G=R.sortIndex-L.sortIndex;return G!==0?G:R.id-L.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var g=Date,O=g.now();n.unstable_now=function(){return g.now()-O}}var A=[],b=[],z=1,w=null,U=3,Z=!1,J=!1,tt=!1,F=!1,K=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function et(R){for(var L=o(b);L!==null;){if(L.callback===null)r(b);else if(L.startTime<=R)r(b),L.sortIndex=L.expirationTime,c(A,L);else break;L=o(b)}}function Y(R){if(tt=!1,et(R),!J)if(o(A)!==null)J=!0,W||(W=!0,mt());else{var L=o(b);L!==null&&gt(Y,L.startTime-R)}}var W=!1,I=-1,xt=5,zt=-1;function Vt(){return F?!0:!(n.unstable_now()-zt<xt)}function $t(){if(F=!1,W){var R=n.unstable_now();zt=R;var L=!0;try{t:{J=!1,tt&&(tt=!1,X(I),I=-1),Z=!0;var G=U;try{e:{for(et(R),w=o(A);w!==null&&!(w.expirationTime>R&&Vt());){var ut=w.callback;if(typeof ut=="function"){w.callback=null,U=w.priorityLevel;var p=ut(w.expirationTime<=R);if(R=n.unstable_now(),typeof p=="function"){w.callback=p,et(R),L=!0;break e}w===o(A)&&r(A),et(R)}else r(A);w=o(A)}if(w!==null)L=!0;else{var B=o(b);B!==null&&gt(Y,B.startTime-R),L=!1}}break t}finally{w=null,U=G,Z=!1}L=void 0}}finally{L?mt():W=!1}}}var mt;if(typeof q=="function")mt=function(){q($t)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Ut=Qt.port2;Qt.port1.onmessage=$t,mt=function(){Ut.postMessage(null)}}else mt=function(){K($t,0)};function gt(R,L){I=K(function(){R(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xt=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return U},n.unstable_next=function(R){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var G=U;U=L;try{return R()}finally{U=G}},n.unstable_requestPaint=function(){F=!0},n.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=U;U=R;try{return L()}finally{U=G}},n.unstable_scheduleCallback=function(R,L,G){var ut=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ut+G:ut):G=ut,R){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=G+p,R={id:z++,callback:L,priorityLevel:R,startTime:G,expirationTime:p,sortIndex:-1},G>ut?(R.sortIndex=G,c(b,R),o(A)===null&&R===o(b)&&(tt?(X(I),I=-1):tt=!0,gt(Y,G-ut))):(R.sortIndex=p,c(A,R),J||Z||(J=!0,W||(W=!0,mt()))),R},n.unstable_shouldYield=Vt,n.unstable_wrapCallback=function(R){var L=U;return function(){var G=U;U=L;try{return R.apply(this,arguments)}finally{U=G}}}}(_o)),_o}var hh;function nv(){return hh||(hh=1,Mo.exports=av()),Mo.exports}var Co={exports:{}},me={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function uv(){if(ph)return me;ph=1;var n=tf();function c(A){var b="https://react.dev/errors/"+A;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)b+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+A+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(A,b,z){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:w==null?null:""+w,children:A,containerInfo:b,implementation:z}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(A,b){if(A==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,me.createPortal=function(A,b){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return m(A,b,null,z)},me.flushSync=function(A){var b=g.T,z=r.p;try{if(g.T=null,r.p=2,A)return A()}finally{g.T=b,r.p=z,r.d.f()}},me.preconnect=function(A,b){typeof A=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,r.d.C(A,b))},me.prefetchDNS=function(A){typeof A=="string"&&r.d.D(A)},me.preinit=function(A,b){if(typeof A=="string"&&b&&typeof b.as=="string"){var z=b.as,w=O(z,b.crossOrigin),U=typeof b.integrity=="string"?b.integrity:void 0,Z=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;z==="style"?r.d.S(A,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:w,integrity:U,fetchPriority:Z}):z==="script"&&r.d.X(A,{crossOrigin:w,integrity:U,fetchPriority:Z,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},me.preinitModule=function(A,b){if(typeof A=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var z=O(b.as,b.crossOrigin);r.d.M(A,{crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&r.d.M(A)},me.preload=function(A,b){if(typeof A=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var z=b.as,w=O(z,b.crossOrigin);r.d.L(A,z,{crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},me.preloadModule=function(A,b){if(typeof A=="string")if(b){var z=O(b.as,b.crossOrigin);r.d.m(A,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else r.d.m(A)},me.requestFormReset=function(A){r.d.r(A)},me.unstable_batchedUpdates=function(A,b){return A(b)},me.useFormState=function(A,b,z){return g.H.useFormState(A,b,z)},me.useFormStatus=function(){return g.H.useHostTransitionStatus()},me.version="19.1.0",me}var mh;function Yh(){if(mh)return Co.exports;mh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Co.exports=uv(),Co.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function iv(){if(bh)return Au;bh=1;var n=nv(),c=tf(),o=Yh();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(m(t)!==t)throw Error(r(188))}function A(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return O(u),t;if(i===a)return O(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var f=!1,s=u.child;s;){if(s===l){f=!0,l=u,a=i;break}if(s===a){f=!0,a=u,l=i;break}s=s.sibling}if(!f){for(s=i.child;s;){if(s===l){f=!0,l=i,a=u;break}if(s===a){f=!0,a=i,l=u;break}s=s.sibling}if(!f)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var z=Object.assign,w=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),q=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),Vt=Symbol.for("react.memo_cache_sentinel"),$t=Symbol.iterator;function mt(t){return t===null||typeof t!="object"?null:(t=$t&&t[$t]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Qt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case F:return"Profiler";case tt:return"StrictMode";case Y:return"Suspense";case W:return"SuspenseList";case zt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case q:return(t.displayName||"Context")+".Provider";case X:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:Ut(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return Ut(t(e))}catch{}}return null}var gt=Array.isArray,R=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ut=[],p=-1;function B(t){return{current:t}}function Q(t){0>p||(t.current=ut[p],ut[p]=null,p--)}function N(t,e){p++,ut[p]=t.current,t.current=e}var j=B(null),lt=B(null),V=B(null),ot=B(null);function dt(t,e){switch(N(V,e),N(lt,t),N(j,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?U0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=U0(e),t=H0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(j),N(j,t)}function k(){Q(j),Q(lt),Q(V)}function st(t){t.memoizedState!==null&&N(ot,t);var e=j.current,l=H0(e,t.type);e!==l&&(N(lt,t),N(j,l))}function ht(t){lt.current===t&&(Q(j),Q(lt)),ot.current===t&&(Q(ot),pu._currentValue=G)}var Et=Object.prototype.hasOwnProperty,_t=n.unstable_scheduleCallback,Zt=n.unstable_cancelCallback,Kt=n.unstable_shouldYield,ve=n.unstable_requestPaint,Ft=n.unstable_now,nl=n.unstable_getCurrentPriorityLevel,Ye=n.unstable_ImmediatePriority,Da=n.unstable_UserBlockingPriority,El=n.unstable_NormalPriority,Il=n.unstable_LowPriority,Sn=n.unstable_IdlePriority,gf=n.log,Hp=n.unstable_setDisableYieldValue,xn=null,Ee=null;function Tl(t){if(typeof gf=="function"&&Hp(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(xn,t)}catch{}}var Te=Math.clz32?Math.clz32:Qp,kp=Math.log,jp=Math.LN2;function Qp(t){return t>>>=0,t===0?32:31-(kp(t)/jp|0)|0}var wu=256,Ru=4194304;function Pl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?u=Pl(a):(f&=s,f!==0?u=Pl(f):l||(l=s&~t,l!==0&&(u=Pl(l))))):(s=a&~i,s!==0?u=Pl(s):f!==0?u=Pl(f):l||(l=a&~t,l!==0&&(u=Pl(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function En(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(){var t=wu;return wu<<=1,(wu&4194048)===0&&(wu=256),t}function Af(){var t=Ru;return Ru<<=1,(Ru&62914560)===0&&(Ru=4194304),t}function mc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Lp(t,e,l,a,u,i){var f=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,x=t.hiddenUpdates;for(l=f&~l;0<l;){var _=31-Te(l),$=1<<_;s[_]=0,h[_]=-1;var E=x[_];if(E!==null)for(x[_]=null,_=0;_<E.length;_++){var T=E[_];T!==null&&(T.lane&=-536870913)}l&=~$}a!==0&&Sf(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(f&~e))}function Sf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function xf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Te(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function bc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ef(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:lh(t.type))}function Yp(t,e){var l=L.p;try{return L.p=t,e()}finally{L.p=l}}var Dl=Math.random().toString(36).slice(2),he="__reactFiber$"+Dl,ge="__reactProps$"+Dl,Oa="__reactContainer$"+Dl,gc="__reactEvents$"+Dl,Gp="__reactListeners$"+Dl,Xp="__reactHandles$"+Dl,Tf="__reactResources$"+Dl,Dn="__reactMarker$"+Dl;function yc(t){delete t[he],delete t[ge],delete t[gc],delete t[Gp],delete t[Xp]}function za(t){var e=t[he];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Oa]||l[he]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=q0(t);t!==null;){if(l=t[he])return l;t=q0(t)}return e}t=l,l=t.parentNode}return null}function wa(t){if(t=t[he]||t[Oa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function On(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Ra(t){var e=t[Tf];return e||(e=t[Tf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ae(t){t[Dn]=!0}var Df=new Set,Of={};function ta(t,e){Ma(t,e),Ma(t+"Capture",e)}function Ma(t,e){for(Of[t]=e,t=0;t<e.length;t++)Df.add(e[t])}var Vp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zf={},wf={};function Zp(t){return Et.call(wf,t)?!0:Et.call(zf,t)?!1:Vp.test(t)?wf[t]=!0:(zf[t]=!0,!1)}function _u(t,e,l){if(Zp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Cu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ul(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var Ac,Rf;function _a(t){if(Ac===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||"",Rf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ac+t+Rf}var Sc=!1;function xc(t,e){if(!t||Sc)return"";Sc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(T){var E=T}Reflect.construct(t,[],$)}else{try{$.call()}catch(T){E=T}t.call($.prototype)}}else{try{throw Error()}catch(T){E=T}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),f=i[0],s=i[1];if(f&&s){var h=f.split(`
`),x=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<x.length&&!x[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===x.length)for(a=h.length-1,u=x.length-1;1<=a&&0<=u&&h[a]!==x[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==x[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==x[u]){var _=`
`+h[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=u);break}}}finally{Sc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?_a(l):""}function Kp(t){switch(t.tag){case 26:case 27:case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return xc(t.type,!1);case 11:return xc(t.type.render,!1);case 1:return xc(t.type,!0);case 31:return _a("Activity");default:return""}}function Mf(t){try{var e="";do e+=Kp(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _f(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jp(t){var e=_f(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(f){a=""+f,i.call(this,f)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){t._valueTracker||(t._valueTracker=Jp(t))}function Cf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=_f(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wp=/[\n"\\]/g;function Ne(t){return t.replace(Wp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ec(t,e,l,a,u,i,f,s){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Tc(t,f,Be(e)):l!=null?Tc(t,f,Be(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Be(s):t.removeAttribute("name")}function Bf(t,e,l,a,u,i,f,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+Be(l):"",e=e!=null?""+Be(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function Tc(t,e,l){e==="number"&&Nu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Ca(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Be(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Nf(t,e,l){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Be(l):""}function $f(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(gt(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Be(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ba(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Fp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Fp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Hf(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&Uf(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&Uf(t,i,e[i])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $u(t){return Pp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Oc=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,$a=null;function kf(t){var e=wa(t);if(e&&(t=e.stateNode)){var l=t[ge]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ec(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ne(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ge]||null;if(!u)throw Error(r(90));Ec(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Cf(a)}break t;case"textarea":Nf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ca(t,!!l.multiple,e,!1)}}}var wc=!1;function jf(t,e,l){if(wc)return t(e,l);wc=!0;try{var a=t(e);return a}finally{if(wc=!1,(Na!==null||$a!==null)&&(Ai(),Na&&(e=Na,t=$a,$a=Na=null,kf(e),t)))for(e=0;e<t.length;e++)kf(t[e])}}function zn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ge]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=!1;if(il)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Rc=!1}var Ol=null,Mc=null,Uu=null;function Qf(){if(Uu)return Uu;var t,e=Mc,l=e.length,a,u="value"in Ol?Ol.value:Ol.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var f=l-t;for(a=1;a<=f&&e[l-a]===u[i-a];a++);return Uu=u.slice(t,1<a?1-a:void 0)}function Hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ku(){return!0}function qf(){return!1}function ye(t){function e(l,a,u,i,f){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ku:qf,this.isPropagationStopped=qf,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ku)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ku)},persist:function(){},isPersistent:ku}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=ye(ea),Rn=z({},ea,{view:0,detail:0}),tm=ye(Rn),_c,Cc,Mn,Qu=z({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mn&&(Mn&&t.type==="mousemove"?(_c=t.screenX-Mn.screenX,Cc=t.screenY-Mn.screenY):Cc=_c=0,Mn=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),Lf=ye(Qu),em=z({},Qu,{dataTransfer:0}),lm=ye(em),am=z({},Rn,{relatedTarget:0}),Bc=ye(am),nm=z({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),um=ye(nm),im=z({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cm=ye(im),rm=z({},ea,{data:0}),Yf=ye(rm),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sm[t])?!!e[t]:!1}function Nc(){return dm}var hm=z({},Rn,{key:function(t){if(t.key){var e=om[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?Hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pm=ye(hm),mm=z({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=ye(mm),bm=z({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),vm=ye(bm),gm=z({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=ye(gm),Am=z({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sm=ye(Am),xm=z({},ea,{newState:0,oldState:0}),Em=ye(xm),Tm=[9,13,27,32],$c=il&&"CompositionEvent"in window,_n=null;il&&"documentMode"in document&&(_n=document.documentMode);var Dm=il&&"TextEvent"in window&&!_n,Xf=il&&(!$c||_n&&8<_n&&11>=_n),Vf=" ",Zf=!1;function Kf(t,e){switch(t){case"keyup":return Tm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ua=!1;function Om(t,e){switch(t){case"compositionend":return Jf(e);case"keypress":return e.which!==32?null:(Zf=!0,Vf);case"textInput":return t=e.data,t===Vf&&Zf?null:t;default:return null}}function zm(t,e){if(Ua)return t==="compositionend"||!$c&&Kf(t,e)?(t=Qf(),Uu=Mc=Ol=null,Ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xf&&e.locale!=="ko"?null:e.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wm[t.type]:e==="textarea"}function Ff(t,e,l,a){Na?$a?$a.push(a):$a=[a]:Na=a,e=Oi(e,"onChange"),0<e.length&&(l=new ju("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Cn=null,Bn=null;function Rm(t){_0(t,0)}function qu(t){var e=On(t);if(Cf(e))return t}function If(t,e){if(t==="change")return e}var Pf=!1;if(il){var Uc;if(il){var Hc="oninput"in document;if(!Hc){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),Hc=typeof ts.oninput=="function"}Uc=Hc}else Uc=!1;Pf=Uc&&(!document.documentMode||9<document.documentMode)}function es(){Cn&&(Cn.detachEvent("onpropertychange",ls),Bn=Cn=null)}function ls(t){if(t.propertyName==="value"&&qu(Bn)){var e=[];Ff(e,Bn,t,zc(t)),jf(Rm,e)}}function Mm(t,e,l){t==="focusin"?(es(),Cn=e,Bn=l,Cn.attachEvent("onpropertychange",ls)):t==="focusout"&&es()}function _m(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(Bn)}function Cm(t,e){if(t==="click")return qu(e)}function Bm(t,e){if(t==="input"||t==="change")return qu(e)}function Nm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var De=typeof Object.is=="function"?Object.is:Nm;function Nn(t,e){if(De(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Et.call(e,u)||!De(t[u],e[u]))return!1}return!0}function as(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ns(t,e){var l=as(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=as(l)}}function us(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?us(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function is(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Nu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Nu(t.document)}return e}function kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $m=il&&"documentMode"in document&&11>=document.documentMode,Ha=null,jc=null,$n=null,Qc=!1;function cs(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qc||Ha==null||Ha!==Nu(a)||(a=Ha,"selectionStart"in a&&kc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$n&&Nn($n,a)||($n=a,a=Oi(jc,"onSelect"),0<a.length&&(e=new ju("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ha)))}function la(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ka={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},qc={},rs={};il&&(rs=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function aa(t){if(qc[t])return qc[t];if(!ka[t])return t;var e=ka[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in rs)return qc[t]=e[l];return t}var os=aa("animationend"),fs=aa("animationiteration"),ss=aa("animationstart"),Um=aa("transitionrun"),Hm=aa("transitionstart"),km=aa("transitioncancel"),ds=aa("transitionend"),hs=new Map,Lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lc.push("scrollEnd");function Ge(t,e){hs.set(t,e),ta(e,[t])}var ps=new WeakMap;function $e(t,e){if(typeof t=="object"&&t!==null){var l=ps.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Mf(e)},ps.set(t,e),e)}return{value:t,source:e,stack:Mf(e)}}var Ue=[],ja=0,Yc=0;function Lu(){for(var t=ja,e=Yc=ja=0;e<t;){var l=Ue[e];Ue[e++]=null;var a=Ue[e];Ue[e++]=null;var u=Ue[e];Ue[e++]=null;var i=Ue[e];if(Ue[e++]=null,a!==null&&u!==null){var f=a.pending;f===null?u.next=u:(u.next=f.next,f.next=u),a.pending=u}i!==0&&ms(l,u,i)}}function Yu(t,e,l,a){Ue[ja++]=t,Ue[ja++]=e,Ue[ja++]=l,Ue[ja++]=a,Yc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Gc(t,e,l,a){return Yu(t,e,l,a),Gu(t)}function Qa(t,e){return Yu(t,null,null,e),Gu(t)}function ms(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-Te(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Gu(t){if(50<iu)throw iu=0,Wr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var qa={};function jm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(t,e,l,a){return new jm(t,e,l,a)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cl(t,e){var l=t.alternate;return l===null?(l=Oe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function bs(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xu(t,e,l,a,u,i){var f=0;if(a=t,typeof t=="function")Xc(t)&&(f=1);else if(typeof t=="string")f=qb(t,l,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case zt:return t=Oe(31,l,e,u),t.elementType=zt,t.lanes=i,t;case J:return na(l.children,u,i,e);case tt:f=8,u|=24;break;case F:return t=Oe(12,l,e,u|2),t.elementType=F,t.lanes=i,t;case Y:return t=Oe(13,l,e,u),t.elementType=Y,t.lanes=i,t;case W:return t=Oe(19,l,e,u),t.elementType=W,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:case q:f=10;break t;case X:f=9;break t;case et:f=11;break t;case I:f=14;break t;case xt:f=16,a=null;break t}f=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=Oe(f,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function na(t,e,l,a){return t=Oe(7,t,a,e),t.lanes=l,t}function Vc(t,e,l){return t=Oe(6,t,null,e),t.lanes=l,t}function Zc(t,e,l){return e=Oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var La=[],Ya=0,Vu=null,Zu=0,He=[],ke=0,ua=null,rl=1,ol="";function ia(t,e){La[Ya++]=Zu,La[Ya++]=Vu,Vu=t,Zu=e}function vs(t,e,l){He[ke++]=rl,He[ke++]=ol,He[ke++]=ua,ua=t;var a=rl;t=ol;var u=32-Te(a)-1;a&=~(1<<u),l+=1;var i=32-Te(e)+u;if(30<i){var f=u-u%5;i=(a&(1<<f)-1).toString(32),a>>=f,u-=f,rl=1<<32-Te(e)+u|l<<u|a,ol=i+t}else rl=1<<i|l<<u|a,ol=t}function Kc(t){t.return!==null&&(ia(t,1),vs(t,1,0))}function Jc(t){for(;t===Vu;)Vu=La[--Ya],La[Ya]=null,Zu=La[--Ya],La[Ya]=null;for(;t===ua;)ua=He[--ke],He[ke]=null,ol=He[--ke],He[ke]=null,rl=He[--ke],He[ke]=null}var be=null,Yt=null,Ot=!1,ca=null,We=!1,Wc=Error(r(519));function ra(t){var e=Error(r(418,""));throw kn($e(e,t)),Wc}function gs(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[he]=t,e[ge]=a,l){case"dialog":St("cancel",e),St("close",e);break;case"iframe":case"object":case"embed":St("load",e);break;case"video":case"audio":for(l=0;l<ru.length;l++)St(ru[l],e);break;case"source":St("error",e);break;case"img":case"image":case"link":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"input":St("invalid",e),Bf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Bu(e);break;case"select":St("invalid",e);break;case"textarea":St("invalid",e),$f(e,a.value,a.defaultValue,a.children),Bu(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||$0(e.textContent,l)?(a.popover!=null&&(St("beforetoggle",e),St("toggle",e)),a.onScroll!=null&&St("scroll",e),a.onScrollEnd!=null&&St("scrollend",e),a.onClick!=null&&(e.onclick=zi),e=!0):e=!1,e||ra(t)}function ys(t){for(be=t.return;be;)switch(be.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:be=be.return}}function Un(t){if(t!==be)return!1;if(!Ot)return ys(t),Ot=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||ho(t.type,t.memoizedProps)),l=!l),l&&Yt&&ra(t),ys(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Yt=Ve(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Yt=null}}else e===27?(e=Yt,Ll(t.type)?(t=vo,vo=null,Yt=t):Yt=e):Yt=be?Ve(t.stateNode.nextSibling):null;return!0}function Hn(){Yt=be=null,Ot=!1}function As(){var t=ca;return t!==null&&(xe===null?xe=t:xe.push.apply(xe,t),ca=null),t}function kn(t){ca===null?ca=[t]:ca.push(t)}var Fc=B(null),oa=null,fl=null;function zl(t,e,l){N(Fc,e._currentValue),e._currentValue=l}function sl(t){t._currentValue=Fc.current,Q(Fc)}function Ic(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Pc(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var f=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),Ic(i.return,l,t),a||(f=null);break t}i=s.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(r(341));f.lanes|=l,i=f.alternate,i!==null&&(i.lanes|=l),Ic(f,l,t),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function jn(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var s=u.type;De(u.pendingProps.value,f.value)||(t!==null?t.push(s):t=[s])}}else if(u===ot.current){if(f=u.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(pu):t=[pu])}u=u.return}t!==null&&Pc(e,t,l,a),e.flags|=262144}function Ku(t){for(t=t.firstContext;t!==null;){if(!De(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fa(t){oa=t,fl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pe(t){return Ss(oa,t)}function Ju(t,e){return oa===null&&fa(t),Ss(t,e)}function Ss(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},fl===null){if(t===null)throw Error(r(308));fl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else fl=fl.next=e;return l}var Qm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},qm=n.unstable_scheduleCallback,Lm=n.unstable_NormalPriority,ee={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tr(){return{controller:new Qm,data:new Map,refCount:0}}function Qn(t){t.refCount--,t.refCount===0&&qm(Lm,function(){t.controller.abort()})}var qn=null,er=0,Ga=0,Xa=null;function Ym(t,e){if(qn===null){var l=qn=[];er=0,Ga=ao(),Xa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return er++,e.then(xs,xs),e}function xs(){if(--er===0&&qn!==null){Xa!==null&&(Xa.status="fulfilled");var t=qn;qn=null,Ga=0,Xa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var Es=R.S;R.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ym(t,e),Es!==null&&Es(t,e)};var sa=B(null);function lr(){var t=sa.current;return t!==null?t:kt.pooledCache}function Wu(t,e){e===null?N(sa,sa.current):N(sa,e.pool)}function Ts(){var t=lr();return t===null?null:{parent:ee._currentValue,pool:t}}var Ln=Error(r(460)),Ds=Error(r(474)),Fu=Error(r(542)),ar={then:function(){}};function Os(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Iu(){}function zs(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Iu,Iu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rs(t),t;default:if(typeof e.status=="string")e.then(Iu,Iu);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rs(t),t}throw Yn=e,Ln}}var Yn=null;function ws(){if(Yn===null)throw Error(r(459));var t=Yn;return Yn=null,t}function Rs(t){if(t===Ln||t===Fu)throw Error(r(483))}var wl=!1;function nr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ur(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ml(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Rt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Gu(t),ms(t,null,l),e}return Yu(t,a,e,l),Gu(t)}function Gn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,xf(t,l)}}function ir(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=f:i=i.next=f,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var cr=!1;function Xn(){if(cr){var t=Xa;if(t!==null)throw t}}function Vn(t,e,l,a){cr=!1;var u=t.updateQueue;wl=!1;var i=u.firstBaseUpdate,f=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,x=h.next;h.next=null,f===null?i=x:f.next=x,f=h;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==f&&(s===null?_.firstBaseUpdate=x:s.next=x,_.lastBaseUpdate=h))}if(i!==null){var $=u.baseState;f=0,_=x=h=null,s=i;do{var E=s.lane&-536870913,T=E!==s.lane;if(T?(Tt&E)===E:(a&E)===E){E!==0&&E===Ga&&(cr=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var ft=t,it=s;E=e;var Nt=l;switch(it.tag){case 1:if(ft=it.payload,typeof ft=="function"){$=ft.call(Nt,$,E);break t}$=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=it.payload,E=typeof ft=="function"?ft.call(Nt,$,E):ft,E==null)break t;$=z({},$,E);break t;case 2:wl=!0}}E=s.callback,E!==null&&(t.flags|=64,T&&(t.flags|=8192),T=u.callbacks,T===null?u.callbacks=[E]:T.push(E))}else T={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(x=_=T,h=$):_=_.next=T,f|=E;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;T=s,s=T.next,T.next=null,u.lastBaseUpdate=T,u.shared.pending=null}}while(!0);_===null&&(h=$),u.baseState=h,u.firstBaseUpdate=x,u.lastBaseUpdate=_,i===null&&(u.shared.lanes=0),kl|=f,t.lanes=f,t.memoizedState=$}}function Ms(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function _s(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Ms(l[t],e)}var Va=B(null),Pu=B(0);function Cs(t,e){t=gl,N(Pu,t),N(Va,e),gl=t|e.baseLanes}function rr(){N(Pu,gl),N(Va,Va.current)}function or(){gl=Pu.current,Q(Va),Q(Pu)}var _l=0,vt=null,Ct=null,It=null,ti=!1,Za=!1,da=!1,ei=0,Zn=0,Ka=null,Xm=0;function Jt(){throw Error(r(321))}function fr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!De(t[l],e[l]))return!1;return!0}function sr(t,e,l,a,u,i){return _l=i,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?md:bd,da=!1,i=l(a,u),da=!1,Za&&(i=Ns(e,l,a,u)),Bs(t),i}function Bs(t){R.H=ci;var e=Ct!==null&&Ct.next!==null;if(_l=0,It=Ct=vt=null,ti=!1,Zn=0,Ka=null,e)throw Error(r(300));t===null||ne||(t=t.dependencies,t!==null&&Ku(t)&&(ne=!0))}function Ns(t,e,l,a){vt=t;var u=0;do{if(Za&&(Ka=null),Zn=0,Za=!1,25<=u)throw Error(r(301));if(u+=1,It=Ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=Im,i=e(l,a)}while(Za);return i}function Vm(){var t=R.H,e=t.useState()[0];return e=typeof e.then=="function"?Kn(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(vt.flags|=1024),e}function dr(){var t=ei!==0;return ei=0,t}function hr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function pr(t){if(ti){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ti=!1}_l=0,It=Ct=vt=null,Za=!1,Zn=ei=0,Ka=null}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?vt.memoizedState=It=t:It=It.next=t,It}function Pt(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?vt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw vt.alternate===null?Error(r(467)):Error(r(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?vt.memoizedState=It=t:It=It.next=t}return It}function mr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kn(t){var e=Zn;return Zn+=1,Ka===null&&(Ka=[]),t=zs(Ka,t,e),e=vt,(It===null?e.memoizedState:It.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?md:bd),t}function li(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Kn(t);if(t.$$typeof===q)return pe(t)}throw Error(r(438,String(t)))}function br(t){var e=null,l=vt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=vt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=mr(),vt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Vt;return e.index++,l}function dl(t,e){return typeof e=="function"?e(t):e}function ai(t){var e=Pt();return vr(e,Ct,t)}function vr(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var f=u.next;u.next=i.next,i.next=f}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=f=null,h=null,x=e,_=!1;do{var $=x.lane&-536870913;if($!==x.lane?(Tt&$)===$:(_l&$)===$){var E=x.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),$===Ga&&(_=!0);else if((_l&E)===E){x=x.next,E===Ga&&(_=!0);continue}else $={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(s=h=$,f=i):h=h.next=$,vt.lanes|=E,kl|=E;$=x.action,da&&l(i,$),i=x.hasEagerState?x.eagerState:l(i,$)}else E={lane:$,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(s=h=E,f=i):h=h.next=E,vt.lanes|=$,kl|=$;x=x.next}while(x!==null&&x!==e);if(h===null?f=i:h.next=s,!De(i,t.memoizedState)&&(ne=!0,_&&(l=Xa,l!==null)))throw l;t.memoizedState=i,t.baseState=f,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function gr(t){var e=Pt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var f=u=u.next;do i=t(i,f.action),f=f.next;while(f!==u);De(i,e.memoizedState)||(ne=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function $s(t,e,l){var a=vt,u=Pt(),i=Ot;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var f=!De((Ct||u).memoizedState,l);f&&(u.memoizedState=l,ne=!0),u=u.queue;var s=ks.bind(null,a,u,t);if(Jn(2048,8,s,[t]),u.getSnapshot!==e||f||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Ja(9,ni(),Hs.bind(null,a,u,l,e),null),kt===null)throw Error(r(349));i||(_l&124)!==0||Us(a,e,l)}return l}function Us(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=vt.updateQueue,e===null?(e=mr(),vt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Hs(t,e,l,a){e.value=l,e.getSnapshot=a,js(e)&&Qs(t)}function ks(t,e,l){return l(function(){js(e)&&Qs(t)})}function js(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!De(t,l)}catch{return!0}}function Qs(t){var e=Qa(t,2);e!==null&&_e(e,t,2)}function yr(t){var e=Ae();if(typeof t=="function"){var l=t;if(t=l(),da){Tl(!0);try{l()}finally{Tl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e}function qs(t,e,l,a){return t.baseState=l,vr(t,Ct,typeof a=="function"?a:dl)}function Zm(t,e,l,a,u){if(ii(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};R.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Ls(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Ls(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=R.T,f={};R.T=f;try{var s=l(u,a),h=R.S;h!==null&&h(f,s),Ys(t,e,s)}catch(x){Ar(t,e,x)}finally{R.T=i}}else try{i=l(u,a),Ys(t,e,i)}catch(x){Ar(t,e,x)}}function Ys(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Gs(t,e,a)},function(a){return Ar(t,e,a)}):Gs(t,e,l)}function Gs(t,e,l){e.status="fulfilled",e.value=l,Xs(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Ls(t,l)))}function Ar(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Xs(e),e=e.next;while(e!==a)}t.action=null}function Xs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Vs(t,e){return e}function Zs(t,e){if(Ot){var l=kt.formState;if(l!==null){t:{var a=vt;if(Ot){if(Yt){e:{for(var u=Yt,i=We;u.nodeType!==8;){if(!i){u=null;break e}if(u=Ve(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){Yt=Ve(u.nextSibling),a=u.data==="F!";break t}}ra(a)}a=!1}a&&(e=l[0])}}return l=Ae(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},l.queue=a,l=dd.bind(null,vt,a),a.dispatch=l,a=yr(!1),i=Dr.bind(null,vt,!1,a.queue),a=Ae(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Zm.bind(null,vt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function Ks(t){var e=Pt();return Js(e,Ct,t)}function Js(t,e,l){if(e=vr(t,e,Vs)[0],t=ai(dl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Kn(e)}catch(f){throw f===Ln?Fu:f}else a=e;e=Pt();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(vt.flags|=2048,Ja(9,ni(),Km.bind(null,u,l),null)),[a,i,t]}function Km(t,e){t.action=e}function Ws(t){var e=Pt(),l=Ct;if(l!==null)return Js(e,l,t);Pt(),e=e.memoizedState,l=Pt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ja(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=vt.updateQueue,e===null&&(e=mr(),vt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ni(){return{destroy:void 0,resource:void 0}}function Fs(){return Pt().memoizedState}function ui(t,e,l,a){var u=Ae();a=a===void 0?null:a,vt.flags|=t,u.memoizedState=Ja(1|e,ni(),l,a)}function Jn(t,e,l,a){var u=Pt();a=a===void 0?null:a;var i=u.memoizedState.inst;Ct!==null&&a!==null&&fr(a,Ct.memoizedState.deps)?u.memoizedState=Ja(e,i,l,a):(vt.flags|=t,u.memoizedState=Ja(1|e,i,l,a))}function Is(t,e){ui(8390656,8,t,e)}function Ps(t,e){Jn(2048,8,t,e)}function td(t,e){return Jn(4,2,t,e)}function ed(t,e){return Jn(4,4,t,e)}function ld(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ad(t,e,l){l=l!=null?l.concat([t]):null,Jn(4,4,ld.bind(null,e,t),l)}function Sr(){}function nd(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&fr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function ud(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&fr(e,a[1]))return a[0];if(a=t(),da){Tl(!0);try{t()}finally{Tl(!1)}}return l.memoizedState=[a,e],a}function xr(t,e,l){return l===void 0||(_l&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=r0(),vt.lanes|=t,kl|=t,l)}function id(t,e,l,a){return De(l,e)?l:Va.current!==null?(t=xr(t,l,a),De(t,e)||(ne=!0),t):(_l&42)===0?(ne=!0,t.memoizedState=l):(t=r0(),vt.lanes|=t,kl|=t,e)}function cd(t,e,l,a,u){var i=L.p;L.p=i!==0&&8>i?i:8;var f=R.T,s={};R.T=s,Dr(t,!1,e,l);try{var h=u(),x=R.S;if(x!==null&&x(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=Gm(h,a);Wn(t,e,_,Me(t))}else Wn(t,e,a,Me(t))}catch($){Wn(t,e,{then:function(){},status:"rejected",reason:$},Me())}finally{L.p=i,R.T=f}}function Jm(){}function Er(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=rd(t).queue;cd(t,u,e,G,l===null?Jm:function(){return od(t),l(a)})}function rd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:G},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function od(t){var e=rd(t).next.queue;Wn(t,e,{},Me())}function Tr(){return pe(pu)}function fd(){return Pt().memoizedState}function sd(){return Pt().memoizedState}function Wm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Me();t=Rl(l);var a=Ml(e,t,l);a!==null&&(_e(a,e,l),Gn(a,e,l)),e={cache:tr()},t.payload=e;return}e=e.return}}function Fm(t,e,l){var a=Me();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},ii(t)?hd(e,l):(l=Gc(t,e,l,a),l!==null&&(_e(l,t,a),pd(l,e,a)))}function dd(t,e,l){var a=Me();Wn(t,e,l,a)}function Wn(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(ii(t))hd(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var f=e.lastRenderedState,s=i(f,l);if(u.hasEagerState=!0,u.eagerState=s,De(s,f))return Yu(t,e,u,0),kt===null&&Lu(),!1}catch{}finally{}if(l=Gc(t,e,u,a),l!==null)return _e(l,t,a),pd(l,e,a),!0}return!1}function Dr(t,e,l,a){if(a={lane:2,revertLane:ao(),action:a,hasEagerState:!1,eagerState:null,next:null},ii(t)){if(e)throw Error(r(479))}else e=Gc(t,l,a,2),e!==null&&_e(e,t,2)}function ii(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function hd(t,e){Za=ti=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function pd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,xf(t,l)}}var ci={readContext:pe,use:li,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},md={readContext:pe,use:li,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:pe,useEffect:Is,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ui(4194308,4,ld.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ui(4194308,4,t,e)},useInsertionEffect:function(t,e){ui(4,2,t,e)},useMemo:function(t,e){var l=Ae();e=e===void 0?null:e;var a=t();if(da){Tl(!0);try{t()}finally{Tl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ae();if(l!==void 0){var u=l(e);if(da){Tl(!0);try{l(e)}finally{Tl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Fm.bind(null,vt,t),[a.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:function(t){t=yr(t);var e=t.queue,l=dd.bind(null,vt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Sr,useDeferredValue:function(t,e){var l=Ae();return xr(l,t,e)},useTransition:function(){var t=yr(!1);return t=cd.bind(null,vt,t.queue,!0,!1),Ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=vt,u=Ae();if(Ot){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),kt===null)throw Error(r(349));(Tt&124)!==0||Us(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,Is(ks.bind(null,a,i,t),[t]),a.flags|=2048,Ja(9,ni(),Hs.bind(null,a,i,l,e),null),l},useId:function(){var t=Ae(),e=kt.identifierPrefix;if(Ot){var l=ol,a=rl;l=(a&~(1<<32-Te(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ei++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Xm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Tr,useFormState:Zs,useActionState:Zs,useOptimistic:function(t){var e=Ae();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Dr.bind(null,vt,!0,l),l.dispatch=e,[t,e]},useMemoCache:br,useCacheRefresh:function(){return Ae().memoizedState=Wm.bind(null,vt)}},bd={readContext:pe,use:li,useCallback:nd,useContext:pe,useEffect:Ps,useImperativeHandle:ad,useInsertionEffect:td,useLayoutEffect:ed,useMemo:ud,useReducer:ai,useRef:Fs,useState:function(){return ai(dl)},useDebugValue:Sr,useDeferredValue:function(t,e){var l=Pt();return id(l,Ct.memoizedState,t,e)},useTransition:function(){var t=ai(dl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:$s,useId:fd,useHostTransitionStatus:Tr,useFormState:Ks,useActionState:Ks,useOptimistic:function(t,e){var l=Pt();return qs(l,Ct,t,e)},useMemoCache:br,useCacheRefresh:sd},Im={readContext:pe,use:li,useCallback:nd,useContext:pe,useEffect:Ps,useImperativeHandle:ad,useInsertionEffect:td,useLayoutEffect:ed,useMemo:ud,useReducer:gr,useRef:Fs,useState:function(){return gr(dl)},useDebugValue:Sr,useDeferredValue:function(t,e){var l=Pt();return Ct===null?xr(l,t,e):id(l,Ct.memoizedState,t,e)},useTransition:function(){var t=gr(dl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:$s,useId:fd,useHostTransitionStatus:Tr,useFormState:Ws,useActionState:Ws,useOptimistic:function(t,e){var l=Pt();return Ct!==null?qs(l,Ct,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:br,useCacheRefresh:sd},Wa=null,Fn=0;function ri(t){var e=Fn;return Fn+=1,Wa===null&&(Wa=[]),zs(Wa,t,e)}function In(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function oi(t,e){throw e.$$typeof===w?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vd(t){var e=t._init;return e(t._payload)}function gd(t){function e(y,v){if(t){var S=y.deletions;S===null?(y.deletions=[v],y.flags|=16):S.push(v)}}function l(y,v){if(!t)return null;for(;v!==null;)e(y,v),v=v.sibling;return null}function a(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function u(y,v){return y=cl(y,v),y.index=0,y.sibling=null,y}function i(y,v,S){return y.index=S,t?(S=y.alternate,S!==null?(S=S.index,S<v?(y.flags|=67108866,v):S):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function f(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function s(y,v,S,C){return v===null||v.tag!==6?(v=Vc(S,y.mode,C),v.return=y,v):(v=u(v,S),v.return=y,v)}function h(y,v,S,C){var at=S.type;return at===J?_(y,v,S.props.children,C,S.key):v!==null&&(v.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===xt&&vd(at)===v.type)?(v=u(v,S.props),In(v,S),v.return=y,v):(v=Xu(S.type,S.key,S.props,null,y.mode,C),In(v,S),v.return=y,v)}function x(y,v,S,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Zc(S,y.mode,C),v.return=y,v):(v=u(v,S.children||[]),v.return=y,v)}function _(y,v,S,C,at){return v===null||v.tag!==7?(v=na(S,y.mode,C,at),v.return=y,v):(v=u(v,S),v.return=y,v)}function $(y,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Vc(""+v,y.mode,S),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return S=Xu(v.type,v.key,v.props,null,y.mode,S),In(S,v),S.return=y,S;case Z:return v=Zc(v,y.mode,S),v.return=y,v;case xt:var C=v._init;return v=C(v._payload),$(y,v,S)}if(gt(v)||mt(v))return v=na(v,y.mode,S,null),v.return=y,v;if(typeof v.then=="function")return $(y,ri(v),S);if(v.$$typeof===q)return $(y,Ju(y,v),S);oi(y,v)}return null}function E(y,v,S,C){var at=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return at!==null?null:s(y,v,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return S.key===at?h(y,v,S,C):null;case Z:return S.key===at?x(y,v,S,C):null;case xt:return at=S._init,S=at(S._payload),E(y,v,S,C)}if(gt(S)||mt(S))return at!==null?null:_(y,v,S,C,null);if(typeof S.then=="function")return E(y,v,ri(S),C);if(S.$$typeof===q)return E(y,v,Ju(y,S),C);oi(y,S)}return null}function T(y,v,S,C,at){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return y=y.get(S)||null,s(v,y,""+C,at);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case U:return y=y.get(C.key===null?S:C.key)||null,h(v,y,C,at);case Z:return y=y.get(C.key===null?S:C.key)||null,x(v,y,C,at);case xt:var yt=C._init;return C=yt(C._payload),T(y,v,S,C,at)}if(gt(C)||mt(C))return y=y.get(S)||null,_(v,y,C,at,null);if(typeof C.then=="function")return T(y,v,S,ri(C),at);if(C.$$typeof===q)return T(y,v,S,Ju(v,C),at);oi(v,C)}return null}function ft(y,v,S,C){for(var at=null,yt=null,nt=v,ct=v=0,ie=null;nt!==null&&ct<S.length;ct++){nt.index>ct?(ie=nt,nt=null):ie=nt.sibling;var Dt=E(y,nt,S[ct],C);if(Dt===null){nt===null&&(nt=ie);break}t&&nt&&Dt.alternate===null&&e(y,nt),v=i(Dt,v,ct),yt===null?at=Dt:yt.sibling=Dt,yt=Dt,nt=ie}if(ct===S.length)return l(y,nt),Ot&&ia(y,ct),at;if(nt===null){for(;ct<S.length;ct++)nt=$(y,S[ct],C),nt!==null&&(v=i(nt,v,ct),yt===null?at=nt:yt.sibling=nt,yt=nt);return Ot&&ia(y,ct),at}for(nt=a(nt);ct<S.length;ct++)ie=T(nt,y,ct,S[ct],C),ie!==null&&(t&&ie.alternate!==null&&nt.delete(ie.key===null?ct:ie.key),v=i(ie,v,ct),yt===null?at=ie:yt.sibling=ie,yt=ie);return t&&nt.forEach(function(Zl){return e(y,Zl)}),Ot&&ia(y,ct),at}function it(y,v,S,C){if(S==null)throw Error(r(151));for(var at=null,yt=null,nt=v,ct=v=0,ie=null,Dt=S.next();nt!==null&&!Dt.done;ct++,Dt=S.next()){nt.index>ct?(ie=nt,nt=null):ie=nt.sibling;var Zl=E(y,nt,Dt.value,C);if(Zl===null){nt===null&&(nt=ie);break}t&&nt&&Zl.alternate===null&&e(y,nt),v=i(Zl,v,ct),yt===null?at=Zl:yt.sibling=Zl,yt=Zl,nt=ie}if(Dt.done)return l(y,nt),Ot&&ia(y,ct),at;if(nt===null){for(;!Dt.done;ct++,Dt=S.next())Dt=$(y,Dt.value,C),Dt!==null&&(v=i(Dt,v,ct),yt===null?at=Dt:yt.sibling=Dt,yt=Dt);return Ot&&ia(y,ct),at}for(nt=a(nt);!Dt.done;ct++,Dt=S.next())Dt=T(nt,y,ct,Dt.value,C),Dt!==null&&(t&&Dt.alternate!==null&&nt.delete(Dt.key===null?ct:Dt.key),v=i(Dt,v,ct),yt===null?at=Dt:yt.sibling=Dt,yt=Dt);return t&&nt.forEach(function(Pb){return e(y,Pb)}),Ot&&ia(y,ct),at}function Nt(y,v,S,C){if(typeof S=="object"&&S!==null&&S.type===J&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case U:t:{for(var at=S.key;v!==null;){if(v.key===at){if(at=S.type,at===J){if(v.tag===7){l(y,v.sibling),C=u(v,S.props.children),C.return=y,y=C;break t}}else if(v.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===xt&&vd(at)===v.type){l(y,v.sibling),C=u(v,S.props),In(C,S),C.return=y,y=C;break t}l(y,v);break}else e(y,v);v=v.sibling}S.type===J?(C=na(S.props.children,y.mode,C,S.key),C.return=y,y=C):(C=Xu(S.type,S.key,S.props,null,y.mode,C),In(C,S),C.return=y,y=C)}return f(y);case Z:t:{for(at=S.key;v!==null;){if(v.key===at)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){l(y,v.sibling),C=u(v,S.children||[]),C.return=y,y=C;break t}else{l(y,v);break}else e(y,v);v=v.sibling}C=Zc(S,y.mode,C),C.return=y,y=C}return f(y);case xt:return at=S._init,S=at(S._payload),Nt(y,v,S,C)}if(gt(S))return ft(y,v,S,C);if(mt(S)){if(at=mt(S),typeof at!="function")throw Error(r(150));return S=at.call(S),it(y,v,S,C)}if(typeof S.then=="function")return Nt(y,v,ri(S),C);if(S.$$typeof===q)return Nt(y,v,Ju(y,S),C);oi(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(l(y,v.sibling),C=u(v,S),C.return=y,y=C):(l(y,v),C=Vc(S,y.mode,C),C.return=y,y=C),f(y)):l(y,v)}return function(y,v,S,C){try{Fn=0;var at=Nt(y,v,S,C);return Wa=null,at}catch(nt){if(nt===Ln||nt===Fu)throw nt;var yt=Oe(29,nt,null,y.mode);return yt.lanes=C,yt.return=y,yt}finally{}}}var Fa=gd(!0),yd=gd(!1),je=B(null),Fe=null;function Cl(t){var e=t.alternate;N(le,le.current&1),N(je,t),Fe===null&&(e===null||Va.current!==null||e.memoizedState!==null)&&(Fe=t)}function Ad(t){if(t.tag===22){if(N(le,le.current),N(je,t),Fe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Fe=t)}}else Bl()}function Bl(){N(le,le.current),N(je,je.current)}function hl(t){Q(je),Fe===t&&(Fe=null),Q(le)}var le=B(0);function fi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||bo(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Or(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:z({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var zr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Rl(a);u.payload=e,l!=null&&(u.callback=l),e=Ml(t,u,a),e!==null&&(_e(e,t,a),Gn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Rl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=Ml(t,u,a),e!==null&&(_e(e,t,a),Gn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Me(),a=Rl(l);a.tag=2,e!=null&&(a.callback=e),e=Ml(t,a,l),e!==null&&(_e(e,t,l),Gn(e,t,l))}};function Sd(t,e,l,a,u,i,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,f):e.prototype&&e.prototype.isPureReactComponent?!Nn(l,a)||!Nn(u,i):!0}function xd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&zr.enqueueReplaceState(e,e.state,null)}function ha(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=z({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var si=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ed(t){si(t)}function Td(t){console.error(t)}function Dd(t){si(t)}function di(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Od(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wr(t,e,l){return l=Rl(l),l.tag=3,l.payload={element:null},l.callback=function(){di(t,e)},l}function zd(t){return t=Rl(t),t.tag=3,t}function wd(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){Od(e,l,a)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){Od(e,l,a),typeof u!="function"&&(jl===null?jl=new Set([this]):jl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Pm(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&jn(e,l,u,!0),l=je.current,l!==null){switch(l.tag){case 13:return Fe===null?Ir():l.alternate===null&&Gt===0&&(Gt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===ar?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),to(t,a,u)),!1;case 22:return l.flags|=65536,a===ar?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),to(t,a,u)),!1}throw Error(r(435,l.tag))}return to(t,a,u),Ir(),!1}if(Ot)return e=je.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Wc&&(t=Error(r(422),{cause:a}),kn($e(t,l)))):(a!==Wc&&(e=Error(r(423),{cause:a}),kn($e(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=$e(a,l),u=wr(t.stateNode,a,u),ir(t,u),Gt!==4&&(Gt=2)),!1;var i=Error(r(520),{cause:a});if(i=$e(i,l),uu===null?uu=[i]:uu.push(i),Gt!==4&&(Gt=2),e===null)return!0;a=$e(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=wr(l.stateNode,a,t),ir(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(jl===null||!jl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=zd(u),wd(u,t,l,a),ir(l,u),!1}l=l.return}while(l!==null);return!1}var Rd=Error(r(461)),ne=!1;function oe(t,e,l,a){e.child=t===null?yd(e,null,l,a):Fa(e,t.child,l,a)}function Md(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var f={};for(var s in a)s!=="ref"&&(f[s]=a[s])}else f=a;return fa(e),a=sr(t,e,l,f,i,u),s=dr(),t!==null&&!ne?(hr(t,e,u),pl(t,e,u)):(Ot&&s&&Kc(e),e.flags|=1,oe(t,e,a,u),e.child)}function _d(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Xc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Cd(t,e,i,a,u)):(t=Xu(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Ur(t,u)){var f=i.memoizedProps;if(l=l.compare,l=l!==null?l:Nn,l(f,a)&&t.ref===e.ref)return pl(t,e,u)}return e.flags|=1,t=cl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Cd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(Nn(i,a)&&t.ref===e.ref)if(ne=!1,e.pendingProps=a=i,Ur(t,u))(t.flags&131072)!==0&&(ne=!0);else return e.lanes=t.lanes,pl(t,e,u)}return Rr(t,e,l,a,u)}function Bd(t,e,l){var a=e.pendingProps,u=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(u=e.child=t.child,i=0;u!==null;)i=i|u.lanes|u.childLanes,u=u.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Nd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wu(e,i!==null?i.cachePool:null),i!==null?Cs(e,i):rr(),Ad(e);else return e.lanes=e.childLanes=536870912,Nd(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(Wu(e,i.cachePool),Cs(e,i),Bl(),e.memoizedState=null):(t!==null&&Wu(e,null),rr(),Bl());return oe(t,e,u,l),e.child}function Nd(t,e,l,a){var u=lr();return u=u===null?null:{parent:ee._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Wu(e,null),rr(),Ad(e),t!==null&&jn(t,e,a,!0),null}function hi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Rr(t,e,l,a,u){return fa(e),l=sr(t,e,l,a,void 0,u),a=dr(),t!==null&&!ne?(hr(t,e,u),pl(t,e,u)):(Ot&&a&&Kc(e),e.flags|=1,oe(t,e,l,u),e.child)}function $d(t,e,l,a,u,i){return fa(e),e.updateQueue=null,l=Ns(e,a,l,u),Bs(t),a=dr(),t!==null&&!ne?(hr(t,e,i),pl(t,e,i)):(Ot&&a&&Kc(e),e.flags|=1,oe(t,e,l,i),e.child)}function Ud(t,e,l,a,u){if(fa(e),e.stateNode===null){var i=qa,f=l.contextType;typeof f=="object"&&f!==null&&(i=pe(f)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},nr(e),f=l.contextType,i.context=typeof f=="object"&&f!==null?pe(f):qa,i.state=e.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(Or(e,l,f,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&zr.enqueueReplaceState(i,i.state,null),Vn(e,a,i,u),Xn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=ha(l,s);i.props=h;var x=i.context,_=l.contextType;f=qa,typeof _=="object"&&_!==null&&(f=pe(_));var $=l.getDerivedStateFromProps;_=typeof $=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||x!==f)&&xd(e,i,a,f),wl=!1;var E=e.memoizedState;i.state=E,Vn(e,a,i,u),Xn(),x=e.memoizedState,s||E!==x||wl?(typeof $=="function"&&(Or(e,l,$,a),x=e.memoizedState),(h=wl||Sd(e,l,h,a,E,x,f))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=x),i.props=a,i.state=x,i.context=f,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,ur(t,e),f=e.memoizedProps,_=ha(l,f),i.props=_,$=e.pendingProps,E=i.context,x=l.contextType,h=qa,typeof x=="object"&&x!==null&&(h=pe(x)),s=l.getDerivedStateFromProps,(x=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==$||E!==h)&&xd(e,i,a,h),wl=!1,E=e.memoizedState,i.state=E,Vn(e,a,i,u),Xn();var T=e.memoizedState;f!==$||E!==T||wl||t!==null&&t.dependencies!==null&&Ku(t.dependencies)?(typeof s=="function"&&(Or(e,l,s,a),T=e.memoizedState),(_=wl||Sd(e,l,_,a,E,T,h)||t!==null&&t.dependencies!==null&&Ku(t.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),i.props=a,i.state=T,i.context=h,a=_):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,hi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Fa(e,t.child,null,u),e.child=Fa(e,null,l,u)):oe(t,e,l,u),e.memoizedState=i.state,t=e.child):t=pl(t,e,u),t}function Hd(t,e,l,a){return Hn(),e.flags|=256,oe(t,e,l,a),e.child}var Mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _r(t){return{baseLanes:t,cachePool:Ts()}}function Cr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Qe),t}function kd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,f;if((f=i)||(f=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),f&&(u=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ot){if(u?Cl(e):Bl(),Ot){var s=Yt,h;if(h=s){t:{for(h=s,s=We;h.nodeType!==8;){if(!s){s=null;break t}if(h=Ve(h.nextSibling),h===null){s=null;break t}}s=h}s!==null?(e.memoizedState={dehydrated:s,treeContext:ua!==null?{id:rl,overflow:ol}:null,retryLane:536870912,hydrationErrors:null},h=Oe(18,null,null,0),h.stateNode=s,h.return=e,e.child=h,be=e,Yt=null,h=!0):h=!1}h||ra(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return bo(s)?e.lanes=32:e.lanes=536870912,null;hl(e)}return s=a.children,a=a.fallback,u?(Bl(),u=e.mode,s=pi({mode:"hidden",children:s},u),a=na(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,u=e.child,u.memoizedState=_r(l),u.childLanes=Cr(t,f,l),e.memoizedState=Mr,a):(Cl(e),Br(e,s))}if(h=t.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(Cl(e),e.flags&=-257,e=Nr(t,e,l)):e.memoizedState!==null?(Bl(),e.child=t.child,e.flags|=128,e=null):(Bl(),u=a.fallback,s=e.mode,a=pi({mode:"visible",children:a.children},s),u=na(u,s,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,Fa(e,t.child,null,l),a=e.child,a.memoizedState=_r(l),a.childLanes=Cr(t,f,l),e.memoizedState=Mr,e=u);else if(Cl(e),bo(s)){if(f=s.nextSibling&&s.nextSibling.dataset,f)var x=f.dgst;f=x,a=Error(r(419)),a.stack="",a.digest=f,kn({value:a,source:null,stack:null}),e=Nr(t,e,l)}else if(ne||jn(t,e,l,!1),f=(l&t.childLanes)!==0,ne||f){if(f=kt,f!==null&&(a=l&-l,a=(a&42)!==0?1:bc(a),a=(a&(f.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,Qa(t,a),_e(f,t,a),Rd;s.data==="$?"||Ir(),e=Nr(t,e,l)}else s.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,Yt=Ve(s.nextSibling),be=e,Ot=!0,ca=null,We=!1,t!==null&&(He[ke++]=rl,He[ke++]=ol,He[ke++]=ua,rl=t.id,ol=t.overflow,ua=e),e=Br(e,a.children),e.flags|=4096);return e}return u?(Bl(),u=a.fallback,s=e.mode,h=t.child,x=h.sibling,a=cl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,x!==null?u=cl(x,u):(u=na(u,s,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,s=t.child.memoizedState,s===null?s=_r(l):(h=s.cachePool,h!==null?(x=ee._currentValue,h=h.parent!==x?{parent:x,pool:x}:h):h=Ts(),s={baseLanes:s.baseLanes|l,cachePool:h}),u.memoizedState=s,u.childLanes=Cr(t,f,l),e.memoizedState=Mr,a):(Cl(e),l=t.child,t=l.sibling,l=cl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=l,e.memoizedState=null,l)}function Br(t,e){return e=pi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function pi(t,e){return t=Oe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Nr(t,e,l){return Fa(e,t.child,null,l),t=Br(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ic(t.return,e,l)}function $r(t,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u)}function Qd(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;if(oe(t,e,a.children,l),a=le.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jd(t,l,e);else if(t.tag===19)jd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(N(le,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&fi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),$r(e,!1,u,l,i);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&fi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}$r(e,!0,l,null,i);break;case"together":$r(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),kl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(jn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=cl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=cl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Ur(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ku(t)))}function tb(t,e,l){switch(e.tag){case 3:dt(e,e.stateNode.containerInfo),zl(e,ee,t.memoizedState.cache),Hn();break;case 27:case 5:st(e);break;case 4:dt(e,e.stateNode.containerInfo);break;case 10:zl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Cl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?kd(t,e,l):(Cl(e),t=pl(t,e,l),t!==null?t.sibling:null);Cl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(jn(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Qd(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),N(le,le.current),a)break;return null;case 22:case 23:return e.lanes=0,Bd(t,e,l);case 24:zl(e,ee,t.memoizedState.cache)}return pl(t,e,l)}function qd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ne=!0;else{if(!Ur(t,l)&&(e.flags&128)===0)return ne=!1,tb(t,e,l);ne=(t.flags&131072)!==0}else ne=!1,Ot&&(e.flags&1048576)!==0&&vs(e,Zu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")Xc(a)?(t=ha(a,t),e.tag=1,e=Ud(null,e,a,t,l)):(e.tag=0,e=Rr(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===et){e.tag=11,e=Md(null,e,a,t,l);break t}else if(u===I){e.tag=14,e=_d(null,e,a,t,l);break t}}throw e=Ut(a)||a,Error(r(306,e,""))}}return e;case 0:return Rr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=ha(a,e.pendingProps),Ud(t,e,a,u,l);case 3:t:{if(dt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,ur(t,e),Vn(e,a,null,l);var f=e.memoizedState;if(a=f.cache,zl(e,ee,a),a!==i.cache&&Pc(e,[ee],l,!0),Xn(),a=f.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Hd(t,e,a,l);break t}else if(a!==u){u=$e(Error(r(424)),e),kn(u),e=Hd(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=Ve(t.firstChild),be=e,Ot=!0,ca=null,We=!0,l=yd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Hn(),a===u){e=pl(t,e,l);break t}oe(t,e,a,l)}e=e.child}return e;case 26:return hi(t,e),t===null?(l=X0(e.type,null,e.pendingProps,null))?e.memoizedState=l:Ot||(l=e.type,t=e.pendingProps,a=wi(V.current).createElement(l),a[he]=e,a[ge]=t,se(a,l,t),ae(a),e.stateNode=a):e.memoizedState=X0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return st(e),t===null&&Ot&&(a=e.stateNode=L0(e.type,e.pendingProps,V.current),be=e,We=!0,u=Yt,Ll(e.type)?(vo=u,Yt=Ve(a.firstChild)):Yt=u),oe(t,e,e.pendingProps.children,l),hi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ot&&((u=a=Yt)&&(a=wb(a,e.type,e.pendingProps,We),a!==null?(e.stateNode=a,be=e,Yt=Ve(a.firstChild),We=!1,u=!0):u=!1),u||ra(e)),st(e),u=e.type,i=e.pendingProps,f=t!==null?t.memoizedProps:null,a=i.children,ho(u,i)?a=null:f!==null&&ho(u,f)&&(e.flags|=32),e.memoizedState!==null&&(u=sr(t,e,Vm,null,null,l),pu._currentValue=u),hi(t,e),oe(t,e,a,l),e.child;case 6:return t===null&&Ot&&((t=l=Yt)&&(l=Rb(l,e.pendingProps,We),l!==null?(e.stateNode=l,be=e,Yt=null,t=!0):t=!1),t||ra(e)),null;case 13:return kd(t,e,l);case 4:return dt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Fa(e,null,a,l):oe(t,e,a,l),e.child;case 11:return Md(t,e,e.type,e.pendingProps,l);case 7:return oe(t,e,e.pendingProps,l),e.child;case 8:return oe(t,e,e.pendingProps.children,l),e.child;case 12:return oe(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,zl(e,e.type,a.value),oe(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,fa(e),u=pe(u),a=a(u),e.flags|=1,oe(t,e,a,l),e.child;case 14:return _d(t,e,e.type,e.pendingProps,l);case 15:return Cd(t,e,e.type,e.pendingProps,l);case 19:return Qd(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=pi(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=cl(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return Bd(t,e,l);case 24:return fa(e),a=pe(ee),t===null?(u=lr(),u===null&&(u=kt,i=tr(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},nr(e),zl(e,ee,u)):((t.lanes&l)!==0&&(ur(t,e),Vn(e,null,null,l),Xn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),zl(e,ee,a)):(a=i.cache,zl(e,ee,a),a!==u.cache&&Pc(e,[ee],l,!0))),oe(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function ml(t){t.flags|=4}function Ld(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!W0(e)){if(e=je.current,e!==null&&((Tt&4194048)===Tt?Fe!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||e!==Fe))throw Yn=ar,Ds;t.flags|=8192}}function mi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Af():536870912,t.lanes|=e,en|=e)}function Pn(t,e){if(!Ot)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function eb(t,e,l){var a=e.pendingProps;switch(Jc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return Lt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),sl(ee),k(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Un(e)?ml(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,As())),Lt(e),null;case 26:return l=e.memoizedState,t===null?(ml(e),l!==null?(Lt(e),Ld(e,l)):(Lt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(ml(e),Lt(e),Ld(e,l)):(Lt(e),e.flags&=-16777217):(t.memoizedProps!==a&&ml(e),Lt(e),e.flags&=-16777217),null;case 27:ht(e),l=V.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Lt(e),null}t=j.current,Un(e)?gs(e):(t=L0(u,a,l),e.stateNode=t,ml(e))}return Lt(e),null;case 5:if(ht(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Lt(e),null}if(t=j.current,Un(e))gs(e);else{switch(u=wi(V.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[he]=e,t[ge]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(se(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ml(e)}}return Lt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=V.current,Un(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=be,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[he]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||$0(t.nodeValue,l)),t||ra(e)}else t=wi(t).createTextNode(a),t[he]=e,e.stateNode=t}return Lt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Un(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[he]=e}else Hn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Lt(e),u=!1}else u=As(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(hl(e),e):(hl(e),null)}if(hl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),mi(e,e.updateQueue),Lt(e),null;case 4:return k(),t===null&&co(e.stateNode.containerInfo),Lt(e),null;case 10:return sl(e.type),Lt(e),null;case 19:if(Q(le),u=e.memoizedState,u===null)return Lt(e),null;if(a=(e.flags&128)!==0,i=u.rendering,i===null)if(a)Pn(u,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=fi(t),i!==null){for(e.flags|=128,Pn(u,!1),t=i.updateQueue,e.updateQueue=t,mi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)bs(l,t),l=l.sibling;return N(le,le.current&1|2),e.child}t=t.sibling}u.tail!==null&&Ft()>gi&&(e.flags|=128,a=!0,Pn(u,!1),e.lanes=4194304)}else{if(!a)if(t=fi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,mi(e,t),Pn(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!Ot)return Lt(e),null}else 2*Ft()-u.renderingStartTime>gi&&l!==536870912&&(e.flags|=128,a=!0,Pn(u,!1),e.lanes=4194304);u.isBackwards?(i.sibling=e.child,e.child=i):(t=u.last,t!==null?t.sibling=i:e.child=i,u.last=i)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Ft(),e.sibling=null,t=le.current,N(le,a?t&1|2:t&1),e):(Lt(e),null);case 22:case 23:return hl(e),or(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),l=e.updateQueue,l!==null&&mi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&Q(sa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),sl(ee),Lt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function lb(t,e){switch(Jc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sl(ee),k(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ht(e),null;case 13:if(hl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Hn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(le),null;case 4:return k(),null;case 10:return sl(e.type),null;case 22:case 23:return hl(e),or(),t!==null&&Q(sa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sl(ee),null;case 25:return null;default:return null}}function Yd(t,e){switch(Jc(e),e.tag){case 3:sl(ee),k();break;case 26:case 27:case 5:ht(e);break;case 4:k();break;case 13:hl(e);break;case 19:Q(le);break;case 10:sl(e.type);break;case 22:case 23:hl(e),or(),t!==null&&Q(sa);break;case 24:sl(ee)}}function tu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,f=l.inst;a=i(),f.destroy=a}l=l.next}while(l!==u)}}catch(s){Ht(e,e.return,s)}}function Nl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var f=a.inst,s=f.destroy;if(s!==void 0){f.destroy=void 0,u=e;var h=l,x=s;try{x()}catch(_){Ht(u,h,_)}}}a=a.next}while(a!==i)}}catch(_){Ht(e,e.return,_)}}function Gd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{_s(e,l)}catch(a){Ht(t,t.return,a)}}}function Xd(t,e,l){l.props=ha(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ht(t,e,a)}}function eu(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Ht(t,e,u)}}function Ie(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Ht(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Ht(t,e,u)}else l.current=null}function Vd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Ht(t,t.return,u)}}function Hr(t,e,l){try{var a=t.stateNode;Eb(a,t.type,l,e),a[ge]=e}catch(u){Ht(t,t.return,u)}}function Zd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ll(t.type)||t.tag===4}function kr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Zd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ll(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=zi));else if(a!==4&&(a===27&&Ll(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(jr(t,e,l),t=t.sibling;t!==null;)jr(t,e,l),t=t.sibling}function bi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Ll(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(bi(t,e,l),t=t.sibling;t!==null;)bi(t,e,l),t=t.sibling}function Kd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);se(e,a,l),e[he]=t,e[ge]=l}catch(i){Ht(t,t.return,i)}}var bl=!1,Wt=!1,Qr=!1,Jd=typeof WeakSet=="function"?WeakSet:Set,ue=null;function ab(t,e){if(t=t.containerInfo,fo=Ni,t=is(t),kc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var f=0,s=-1,h=-1,x=0,_=0,$=t,E=null;e:for(;;){for(var T;$!==l||u!==0&&$.nodeType!==3||(s=f+u),$!==i||a!==0&&$.nodeType!==3||(h=f+a),$.nodeType===3&&(f+=$.nodeValue.length),(T=$.firstChild)!==null;)E=$,$=T;for(;;){if($===t)break e;if(E===l&&++x===u&&(s=f),E===i&&++_===a&&(h=f),(T=$.nextSibling)!==null)break;$=E,E=$.parentNode}$=T}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(so={focusedElem:t,selectionRange:l},Ni=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){switch(e=ue,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var ft=ha(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ft,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(it){Ht(l,l.return,it)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)mo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function Wd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:$l(t,l),a&4&&tu(5,l);break;case 1:if($l(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(f){Ht(l,l.return,f)}else{var u=ha(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Ht(l,l.return,f)}}a&64&&Gd(l),a&512&&eu(l,l.return);break;case 3:if($l(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{_s(t,e)}catch(f){Ht(l,l.return,f)}}break;case 27:e===null&&a&4&&Kd(l);case 26:case 5:$l(t,l),e===null&&a&4&&Vd(l),a&512&&eu(l,l.return);break;case 12:$l(t,l);break;case 13:$l(t,l),a&4&&Pd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=db.bind(null,l),Mb(t,l))));break;case 22:if(a=l.memoizedState!==null||bl,!a){e=e!==null&&e.memoizedState!==null||Wt,u=bl;var i=Wt;bl=a,(Wt=e)&&!i?Ul(t,l,(l.subtreeFlags&8772)!==0):$l(t,l),bl=u,Wt=i}break;case 30:break;default:$l(t,l)}}function Fd(t){var e=t.alternate;e!==null&&(t.alternate=null,Fd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&yc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Se=!1;function vl(t,e,l){for(l=l.child;l!==null;)Id(t,e,l),l=l.sibling}function Id(t,e,l){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(xn,l)}catch{}switch(l.tag){case 26:Wt||Ie(l,e),vl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Wt||Ie(l,e);var a=qt,u=Se;Ll(l.type)&&(qt=l.stateNode,Se=!1),vl(t,e,l),fu(l.stateNode),qt=a,Se=u;break;case 5:Wt||Ie(l,e);case 6:if(a=qt,u=Se,qt=null,vl(t,e,l),qt=a,Se=u,qt!==null)if(Se)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(l.stateNode)}catch(i){Ht(l,e,i)}else try{qt.removeChild(l.stateNode)}catch(i){Ht(l,e,i)}break;case 18:qt!==null&&(Se?(t=qt,Q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),gu(t)):Q0(qt,l.stateNode));break;case 4:a=qt,u=Se,qt=l.stateNode.containerInfo,Se=!0,vl(t,e,l),qt=a,Se=u;break;case 0:case 11:case 14:case 15:Wt||Nl(2,l,e),Wt||Nl(4,l,e),vl(t,e,l);break;case 1:Wt||(Ie(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Xd(l,e,a)),vl(t,e,l);break;case 21:vl(t,e,l);break;case 22:Wt=(a=Wt)||l.memoizedState!==null,vl(t,e,l),Wt=a;break;default:vl(t,e,l)}}function Pd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gu(t)}catch(l){Ht(e,e.return,l)}}function nb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Jd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Jd),e;default:throw Error(r(435,t.tag))}}function qr(t,e){var l=nb(t);e.forEach(function(a){var u=hb.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function ze(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,f=e,s=f;t:for(;s!==null;){switch(s.tag){case 27:if(Ll(s.type)){qt=s.stateNode,Se=!1;break t}break;case 5:qt=s.stateNode,Se=!1;break t;case 3:case 4:qt=s.stateNode.containerInfo,Se=!0;break t}s=s.return}if(qt===null)throw Error(r(160));Id(i,f,u),qt=null,Se=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)t0(e,t),e=e.sibling}var Xe=null;function t0(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ze(e,t),we(t),a&4&&(Nl(3,t,t.return),tu(3,t),Nl(5,t,t.return));break;case 1:ze(e,t),we(t),a&512&&(Wt||l===null||Ie(l,l.return)),a&64&&bl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Xe;if(ze(e,t),we(t),a&512&&(Wt||l===null||Ie(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Dn]||i[he]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),se(i,a,l),i[he]=t,ae(i),a=i;break t;case"link":var f=K0("link","href",u).get(a+(l.href||""));if(f){for(var s=0;s<f.length;s++)if(i=f[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(s,1);break e}}i=u.createElement(a),se(i,a,l),u.head.appendChild(i);break;case"meta":if(f=K0("meta","content",u).get(a+(l.content||""))){for(s=0;s<f.length;s++)if(i=f[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(s,1);break e}}i=u.createElement(a),se(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[he]=t,ae(i),a=i}t.stateNode=a}else J0(u,t.type,t.stateNode);else t.stateNode=Z0(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?J0(u,t.type,t.stateNode):Z0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Hr(t,t.memoizedProps,l.memoizedProps)}break;case 27:ze(e,t),we(t),a&512&&(Wt||l===null||Ie(l,l.return)),l!==null&&a&4&&Hr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(ze(e,t),we(t),a&512&&(Wt||l===null||Ie(l,l.return)),t.flags&32){u=t.stateNode;try{Ba(u,"")}catch(T){Ht(t,t.return,T)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Hr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Qr=!0);break;case 6:if(ze(e,t),we(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(T){Ht(t,t.return,T)}}break;case 3:if(_i=null,u=Xe,Xe=Ri(e.containerInfo),ze(e,t),Xe=u,we(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{gu(e.containerInfo)}catch(T){Ht(t,t.return,T)}Qr&&(Qr=!1,e0(t));break;case 4:a=Xe,Xe=Ri(t.stateNode.containerInfo),ze(e,t),we(t),Xe=a;break;case 12:ze(e,t),we(t);break;case 13:ze(e,t),we(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Zr=Ft()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,qr(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,x=bl,_=Wt;if(bl=x||u,Wt=_||h,ze(e,t),Wt=_,bl=x,we(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||bl||Wt||pa(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{s=h.stateNode;var $=h.memoizedProps.style,E=$!=null&&$.hasOwnProperty("display")?$.display:null;s.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){Ht(h,h.return,T)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(T){Ht(h,h.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,qr(t,l))));break;case 19:ze(e,t),we(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,qr(t,a)));break;case 30:break;case 21:break;default:ze(e,t),we(t)}}function we(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Zd(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=kr(t);bi(t,i,u);break;case 5:var f=l.stateNode;l.flags&32&&(Ba(f,""),l.flags&=-33);var s=kr(t);bi(t,s,f);break;case 3:case 4:var h=l.stateNode.containerInfo,x=kr(t);jr(t,x,h);break;default:throw Error(r(161))}}catch(_){Ht(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;e0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $l(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Wd(t,e.alternate,e),e=e.sibling}function pa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Nl(4,e,e.return),pa(e);break;case 1:Ie(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Xd(e,e.return,l),pa(e);break;case 27:fu(e.stateNode);case 26:case 5:Ie(e,e.return),pa(e);break;case 22:e.memoizedState===null&&pa(e);break;case 30:pa(e);break;default:pa(e)}t=t.sibling}}function Ul(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,f=i.flags;switch(i.tag){case 0:case 11:case 15:Ul(u,i,l),tu(4,i);break;case 1:if(Ul(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(x){Ht(a,a.return,x)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)Ms(h[u],s)}catch(x){Ht(a,a.return,x)}}l&&f&64&&Gd(i),eu(i,i.return);break;case 27:Kd(i);case 26:case 5:Ul(u,i,l),l&&a===null&&f&4&&Vd(i),eu(i,i.return);break;case 12:Ul(u,i,l);break;case 13:Ul(u,i,l),l&&f&4&&Pd(u,i);break;case 22:i.memoizedState===null&&Ul(u,i,l),eu(i,i.return);break;case 30:break;default:Ul(u,i,l)}e=e.sibling}}function Lr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Qn(l))}function Yr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qn(t))}function Pe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l0(t,e,l,a),e=e.sibling}function l0(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Pe(t,e,l,a),u&2048&&tu(9,e);break;case 1:Pe(t,e,l,a);break;case 3:Pe(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qn(t)));break;case 12:if(u&2048){Pe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,f=i.id,s=i.onPostCommit;typeof s=="function"&&s(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ht(e,e.return,h)}}else Pe(t,e,l,a);break;case 13:Pe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,f=e.alternate,e.memoizedState!==null?i._visibility&2?Pe(t,e,l,a):lu(t,e):i._visibility&2?Pe(t,e,l,a):(i._visibility|=2,Ia(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&Lr(f,e);break;case 24:Pe(t,e,l,a),u&2048&&Yr(e.alternate,e);break;default:Pe(t,e,l,a)}}function Ia(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,f=e,s=l,h=a,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ia(i,f,s,h,u),tu(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Ia(i,f,s,h,u):lu(i,f):(_._visibility|=2,Ia(i,f,s,h,u)),u&&x&2048&&Lr(f.alternate,f);break;case 24:Ia(i,f,s,h,u),u&&x&2048&&Yr(f.alternate,f);break;default:Ia(i,f,s,h,u)}e=e.sibling}}function lu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:lu(l,a),u&2048&&Lr(a.alternate,a);break;case 24:lu(l,a),u&2048&&Yr(a.alternate,a);break;default:lu(l,a)}e=e.sibling}}var au=8192;function Pa(t){if(t.subtreeFlags&au)for(t=t.child;t!==null;)a0(t),t=t.sibling}function a0(t){switch(t.tag){case 26:Pa(t),t.flags&au&&t.memoizedState!==null&&Yb(Xe,t.memoizedState,t.memoizedProps);break;case 5:Pa(t);break;case 3:case 4:var e=Xe;Xe=Ri(t.stateNode.containerInfo),Pa(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=au,au=16777216,Pa(t),au=e):Pa(t));break;default:Pa(t)}}function n0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function nu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,i0(a,t)}n0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u0(t),t=t.sibling}function u0(t){switch(t.tag){case 0:case 11:case 15:nu(t),t.flags&2048&&Nl(9,t,t.return);break;case 3:nu(t);break;case 12:nu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,vi(t)):nu(t);break;default:nu(t)}}function vi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,i0(a,t)}n0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Nl(8,e,e.return),vi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,vi(e));break;default:vi(e)}t=t.sibling}}function i0(t,e){for(;ue!==null;){var l=ue;switch(l.tag){case 0:case 11:case 15:Nl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ue=a;else t:for(l=t;ue!==null;){a=ue;var u=a.sibling,i=a.return;if(Fd(a),a===l){ue=null;break t}if(u!==null){u.return=i,ue=u;break t}ue=i}}}var ub={getCacheForType:function(t){var e=pe(ee),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},ib=typeof WeakMap=="function"?WeakMap:Map,Rt=0,kt=null,At=null,Tt=0,Mt=0,Re=null,Hl=!1,tn=!1,Gr=!1,gl=0,Gt=0,kl=0,ma=0,Xr=0,Qe=0,en=0,uu=null,xe=null,Vr=!1,Zr=0,gi=1/0,yi=null,jl=null,fe=0,Ql=null,ln=null,an=0,Kr=0,Jr=null,c0=null,iu=0,Wr=null;function Me(){if((Rt&2)!==0&&Tt!==0)return Tt&-Tt;if(R.T!==null){var t=Ga;return t!==0?t:ao()}return Ef()}function r0(){Qe===0&&(Qe=(Tt&536870912)===0||Ot?yf():536870912);var t=je.current;return t!==null&&(t.flags|=32),Qe}function _e(t,e,l){(t===kt&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(nn(t,0),ql(t,Tt,Qe,!1)),Tn(t,l),((Rt&2)===0||t!==kt)&&(t===kt&&((Rt&2)===0&&(ma|=l),Gt===4&&ql(t,Tt,Qe,!1)),tl(t))}function o0(t,e,l){if((Rt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||En(t,e),u=a?ob(t,e):Pr(t,e,!0),i=a;do{if(u===0){tn&&!a&&ql(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!cb(l)){u=Pr(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var s=t;u=uu;var h=s.current.memoizedState.isDehydrated;if(h&&(nn(s,f).flags|=256),f=Pr(s,f,!1),f!==2){if(Gr&&!h){s.errorRecoveryDisabledLanes|=i,ma|=i,u=4;break t}i=xe,xe=u,i!==null&&(xe===null?xe=i:xe.push.apply(xe,i))}u=f}if(i=!1,u!==2)continue}}if(u===1){nn(t,0),ql(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:ql(a,e,Qe,!Hl);break t;case 2:xe=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Zr+300-Ft(),10<u)){if(ql(a,e,Qe,!Hl),Mu(a,0,!0)!==0)break t;a.timeoutHandle=k0(f0.bind(null,a,l,xe,yi,Vr,e,Qe,ma,en,Hl,i,2,-0,0),u);break t}f0(a,l,xe,yi,Vr,e,Qe,ma,en,Hl,i,0,-0,0)}}break}while(!0);tl(t)}function f0(t,e,l,a,u,i,f,s,h,x,_,$,E,T){if(t.timeoutHandle=-1,$=e.subtreeFlags,($&8192||($&16785408)===16785408)&&(hu={stylesheets:null,count:0,unsuspend:Lb},a0(e),$=Gb(),$!==null)){t.cancelPendingCommit=$(v0.bind(null,t,e,i,l,a,u,f,s,h,_,1,E,T)),ql(t,i,f,!x);return}v0(t,e,i,l,a,u,f,s,h)}function cb(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!De(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ql(t,e,l,a){e&=~Xr,e&=~ma,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-Te(u),f=1<<i;a[i]=-1,u&=~f}l!==0&&Sf(t,l,e)}function Ai(){return(Rt&6)===0?(cu(0),!1):!0}function Fr(){if(At!==null){if(Mt===0)var t=At.return;else t=At,fl=oa=null,pr(t),Wa=null,Fn=0,t=At;for(;t!==null;)Yd(t.alternate,t),t=t.return;At=null}}function nn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Db(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Fr(),kt=t,At=l=cl(t.current,null),Tt=e,Mt=0,Re=null,Hl=!1,tn=En(t,e),Gr=!1,en=Qe=Xr=ma=kl=Gt=0,xe=uu=null,Vr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-Te(a),i=1<<u;e|=t[u],a&=~i}return gl=e,Lu(),l}function s0(t,e){vt=null,R.H=ci,e===Ln||e===Fu?(e=ws(),Mt=3):e===Ds?(e=ws(),Mt=4):Mt=e===Rd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,At===null&&(Gt=1,di(t,$e(e,t.current)))}function d0(){var t=R.H;return R.H=ci,t===null?ci:t}function h0(){var t=R.A;return R.A=ub,t}function Ir(){Gt=4,Hl||(Tt&4194048)!==Tt&&je.current!==null||(tn=!0),(kl&134217727)===0&&(ma&134217727)===0||kt===null||ql(kt,Tt,Qe,!1)}function Pr(t,e,l){var a=Rt;Rt|=2;var u=d0(),i=h0();(kt!==t||Tt!==e)&&(yi=null,nn(t,e)),e=!1;var f=Gt;t:do try{if(Mt!==0&&At!==null){var s=At,h=Re;switch(Mt){case 8:Fr(),f=6;break t;case 3:case 2:case 9:case 6:je.current===null&&(e=!0);var x=Mt;if(Mt=0,Re=null,un(t,s,h,x),l&&tn){f=0;break t}break;default:x=Mt,Mt=0,Re=null,un(t,s,h,x)}}rb(),f=Gt;break}catch(_){s0(t,_)}while(!0);return e&&t.shellSuspendCounter++,fl=oa=null,Rt=a,R.H=u,R.A=i,At===null&&(kt=null,Tt=0,Lu()),f}function rb(){for(;At!==null;)p0(At)}function ob(t,e){var l=Rt;Rt|=2;var a=d0(),u=h0();kt!==t||Tt!==e?(yi=null,gi=Ft()+500,nn(t,e)):tn=En(t,e);t:do try{if(Mt!==0&&At!==null){e=At;var i=Re;e:switch(Mt){case 1:Mt=0,Re=null,un(t,e,i,1);break;case 2:case 9:if(Os(i)){Mt=0,Re=null,m0(e);break}e=function(){Mt!==2&&Mt!==9||kt!==t||(Mt=7),tl(t)},i.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Os(i)?(Mt=0,Re=null,m0(e)):(Mt=0,Re=null,un(t,e,i,7));break;case 5:var f=null;switch(At.tag){case 26:f=At.memoizedState;case 5:case 27:var s=At;if(!f||W0(f)){Mt=0,Re=null;var h=s.sibling;if(h!==null)At=h;else{var x=s.return;x!==null?(At=x,Si(x)):At=null}break e}}Mt=0,Re=null,un(t,e,i,5);break;case 6:Mt=0,Re=null,un(t,e,i,6);break;case 8:Fr(),Gt=6;break t;default:throw Error(r(462))}}fb();break}catch(_){s0(t,_)}while(!0);return fl=oa=null,R.H=a,R.A=u,Rt=l,At!==null?0:(kt=null,Tt=0,Lu(),Gt)}function fb(){for(;At!==null&&!Kt();)p0(At)}function p0(t){var e=qd(t.alternate,t,gl);t.memoizedProps=t.pendingProps,e===null?Si(t):At=e}function m0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=$d(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=$d(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:pr(e);default:Yd(l,e),e=At=bs(e,gl),e=qd(l,e,gl)}t.memoizedProps=t.pendingProps,e===null?Si(t):At=e}function un(t,e,l,a){fl=oa=null,pr(e),Wa=null,Fn=0;var u=e.return;try{if(Pm(t,u,e,l,Tt)){Gt=1,di(t,$e(l,t.current)),At=null;return}}catch(i){if(u!==null)throw At=u,i;Gt=1,di(t,$e(l,t.current)),At=null;return}e.flags&32768?(Ot||a===1?t=!0:tn||(Tt&536870912)!==0?t=!1:(Hl=t=!0,(a===2||a===9||a===3||a===6)&&(a=je.current,a!==null&&a.tag===13&&(a.flags|=16384))),b0(e,t)):Si(e)}function Si(t){var e=t;do{if((e.flags&32768)!==0){b0(e,Hl);return}t=e.return;var l=eb(e.alternate,e,gl);if(l!==null){At=l;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Gt===0&&(Gt=5)}function b0(t,e){do{var l=lb(t.alternate,t);if(l!==null){l.flags&=32767,At=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=l}while(t!==null);Gt=6,At=null}function v0(t,e,l,a,u,i,f,s,h){t.cancelPendingCommit=null;do xi();while(fe!==0);if((Rt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Yc,Lp(t,l,i,f,s,h),t===kt&&(At=kt=null,Tt=0),ln=e,Ql=t,an=l,Kr=i,Jr=u,c0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pb(El,function(){return x0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,u=L.p,L.p=2,f=Rt,Rt|=4;try{ab(t,e,l)}finally{Rt=f,L.p=u,R.T=a}}fe=1,g0(),y0(),A0()}}function g0(){if(fe===1){fe=0;var t=Ql,e=ln,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=R.T,R.T=null;var a=L.p;L.p=2;var u=Rt;Rt|=4;try{t0(e,t);var i=so,f=is(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(f!==s&&s&&s.ownerDocument&&us(s.ownerDocument.documentElement,s)){if(h!==null&&kc(s)){var x=h.start,_=h.end;if(_===void 0&&(_=x),"selectionStart"in s)s.selectionStart=x,s.selectionEnd=Math.min(_,s.value.length);else{var $=s.ownerDocument||document,E=$&&$.defaultView||window;if(E.getSelection){var T=E.getSelection(),ft=s.textContent.length,it=Math.min(h.start,ft),Nt=h.end===void 0?it:Math.min(h.end,ft);!T.extend&&it>Nt&&(f=Nt,Nt=it,it=f);var y=ns(s,it),v=ns(s,Nt);if(y&&v&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var S=$.createRange();S.setStart(y.node,y.offset),T.removeAllRanges(),it>Nt?(T.addRange(S),T.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),T.addRange(S))}}}}for($=[],T=s;T=T.parentNode;)T.nodeType===1&&$.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<$.length;s++){var C=$[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Ni=!!fo,so=fo=null}finally{Rt=u,L.p=a,R.T=l}}t.current=e,fe=2}}function y0(){if(fe===2){fe=0;var t=Ql,e=ln,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=R.T,R.T=null;var a=L.p;L.p=2;var u=Rt;Rt|=4;try{Wd(t,e.alternate,e)}finally{Rt=u,L.p=a,R.T=l}}fe=3}}function A0(){if(fe===4||fe===3){fe=0,ve();var t=Ql,e=ln,l=an,a=c0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?fe=5:(fe=0,ln=Ql=null,S0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(jl=null),vc(l),e=e.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(xn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=R.T,u=L.p,L.p=2,R.T=null;try{for(var i=t.onRecoverableError,f=0;f<a.length;f++){var s=a[f];i(s.value,{componentStack:s.stack})}}finally{R.T=e,L.p=u}}(an&3)!==0&&xi(),tl(t),u=t.pendingLanes,(l&4194090)!==0&&(u&42)!==0?t===Wr?iu++:(iu=0,Wr=t):iu=0,cu(0)}}function S0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Qn(e)))}function xi(t){return g0(),y0(),A0(),x0()}function x0(){if(fe!==5)return!1;var t=Ql,e=Kr;Kr=0;var l=vc(an),a=R.T,u=L.p;try{L.p=32>l?32:l,R.T=null,l=Jr,Jr=null;var i=Ql,f=an;if(fe=0,ln=Ql=null,an=0,(Rt&6)!==0)throw Error(r(331));var s=Rt;if(Rt|=4,u0(i.current),l0(i,i.current,f,l),Rt=s,cu(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(xn,i)}catch{}return!0}finally{L.p=u,R.T=a,S0(t,e)}}function E0(t,e,l){e=$e(l,e),e=wr(t.stateNode,e,2),t=Ml(t,e,2),t!==null&&(Tn(t,2),tl(t))}function Ht(t,e,l){if(t.tag===3)E0(t,t,l);else for(;e!==null;){if(e.tag===3){E0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(jl===null||!jl.has(a))){t=$e(l,t),l=zd(2),a=Ml(e,l,2),a!==null&&(wd(l,a,e,t),Tn(a,2),tl(a));break}}e=e.return}}function to(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new ib;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Gr=!0,u.add(l),t=sb.bind(null,t,e,l),e.then(t,t))}function sb(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,kt===t&&(Tt&l)===l&&(Gt===4||Gt===3&&(Tt&62914560)===Tt&&300>Ft()-Zr?(Rt&2)===0&&nn(t,0):Xr|=l,en===Tt&&(en=0)),tl(t)}function T0(t,e){e===0&&(e=Af()),t=Qa(t,e),t!==null&&(Tn(t,e),tl(t))}function db(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),T0(t,l)}function hb(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),T0(t,l)}function pb(t,e){return _t(t,e)}var Ei=null,cn=null,eo=!1,Ti=!1,lo=!1,ba=0;function tl(t){t!==cn&&t.next===null&&(cn===null?Ei=cn=t:cn=cn.next=t),Ti=!0,eo||(eo=!0,bb())}function cu(t,e){if(!lo&&Ti){lo=!0;do for(var l=!1,a=Ei;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var f=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Te(42|t)+1)-1,i&=u&~(f&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,w0(a,i))}else i=Tt,i=Mu(a,a===kt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||En(a,i)||(l=!0,w0(a,i));a=a.next}while(l);lo=!1}}function mb(){D0()}function D0(){Ti=eo=!1;var t=0;ba!==0&&(Tb()&&(t=ba),ba=0);for(var e=Ft(),l=null,a=Ei;a!==null;){var u=a.next,i=O0(a,e);i===0?(a.next=null,l===null?Ei=u:l.next=u,u===null&&(cn=l)):(l=a,(t!==0||(i&3)!==0)&&(Ti=!0)),a=u}cu(t)}function O0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var f=31-Te(i),s=1<<f,h=u[f];h===-1?((s&l)===0||(s&a)!==0)&&(u[f]=qp(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=kt,l=Tt,l=Mu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Zt(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||En(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Zt(a),vc(l)){case 2:case 8:l=Da;break;case 32:l=El;break;case 268435456:l=Sn;break;default:l=El}return a=z0.bind(null,t),l=_t(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Zt(a),t.callbackPriority=2,t.callbackNode=null,2}function z0(t,e){if(fe!==0&&fe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(xi()&&t.callbackNode!==l)return null;var a=Tt;return a=Mu(t,t===kt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(o0(t,a,e),O0(t,Ft()),t.callbackNode!=null&&t.callbackNode===l?z0.bind(null,t):null)}function w0(t,e){if(xi())return null;o0(t,e,!0)}function bb(){Ob(function(){(Rt&6)!==0?_t(Ye,mb):D0()})}function ao(){return ba===0&&(ba=yf()),ba}function R0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$u(""+t)}function M0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function vb(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=R0((u[ge]||null).action),f=a.submitter;f&&(e=(e=f[ge]||null)?R0(e.formAction):f.getAttribute("formAction"),e!==null&&(i=e,f=null));var s=new ju("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var h=f?M0(u,f):new FormData(u);Er(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=f?M0(u,f):new FormData(u),Er(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var no=0;no<Lc.length;no++){var uo=Lc[no],gb=uo.toLowerCase(),yb=uo[0].toUpperCase()+uo.slice(1);Ge(gb,"on"+yb)}Ge(os,"onAnimationEnd"),Ge(fs,"onAnimationIteration"),Ge(ss,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(Um,"onTransitionRun"),Ge(Hm,"onTransitionStart"),Ge(km,"onTransitionCancel"),Ge(ds,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function _0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var f=a.length-1;0<=f;f--){var s=a[f],h=s.instance,x=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=x;try{i(u)}catch(_){si(_)}u.currentTarget=null,i=h}else for(f=0;f<a.length;f++){if(s=a[f],h=s.instance,x=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=x;try{i(u)}catch(_){si(_)}u.currentTarget=null,i=h}}}}function St(t,e){var l=e[gc];l===void 0&&(l=e[gc]=new Set);var a=t+"__bubble";l.has(a)||(C0(e,t,2,!1),l.add(a))}function io(t,e,l){var a=0;e&&(a|=4),C0(l,t,a,e)}var Di="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Di]){t[Di]=!0,Df.forEach(function(l){l!=="selectionchange"&&(Ab.has(l)||io(l,!1,t),io(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Di]||(e[Di]=!0,io("selectionchange",!1,e))}}function C0(t,e,l,a){switch(lh(e)){case 2:var u=Zb;break;case 8:u=Kb;break;default:u=xo}l=u.bind(null,e,l,t),u=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function ro(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var s=a.stateNode.containerInfo;if(s===u)break;if(f===4)for(f=a.return;f!==null;){var h=f.tag;if((h===3||h===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;s!==null;){if(f=za(s),f===null)return;if(h=f.tag,h===5||h===6||h===26||h===27){a=i=f;continue t}s=s.parentNode}}a=a.return}jf(function(){var x=i,_=zc(l),$=[];t:{var E=hs.get(t);if(E!==void 0){var T=ju,ft=t;switch(t){case"keypress":if(Hu(l)===0)break t;case"keydown":case"keyup":T=pm;break;case"focusin":ft="focus",T=Bc;break;case"focusout":ft="blur",T=Bc;break;case"beforeblur":case"afterblur":T=Bc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=vm;break;case os:case fs:case ss:T=um;break;case ds:T=ym;break;case"scroll":case"scrollend":T=tm;break;case"wheel":T=Sm;break;case"copy":case"cut":case"paste":T=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Gf;break;case"toggle":case"beforetoggle":T=Em}var it=(e&4)!==0,Nt=!it&&(t==="scroll"||t==="scrollend"),y=it?E!==null?E+"Capture":null:E;it=[];for(var v=x,S;v!==null;){var C=v;if(S=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||S===null||y===null||(C=zn(v,y),C!=null&&it.push(ou(v,C,S))),Nt)break;v=v.return}0<it.length&&(E=new T(E,ft,null,l,_),$.push({event:E,listeners:it}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",E&&l!==Oc&&(ft=l.relatedTarget||l.fromElement)&&(za(ft)||ft[Oa]))break t;if((T||E)&&(E=_.window===_?_:(E=_.ownerDocument)?E.defaultView||E.parentWindow:window,T?(ft=l.relatedTarget||l.toElement,T=x,ft=ft?za(ft):null,ft!==null&&(Nt=m(ft),it=ft.tag,ft!==Nt||it!==5&&it!==27&&it!==6)&&(ft=null)):(T=null,ft=x),T!==ft)){if(it=Lf,C="onMouseLeave",y="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(it=Gf,C="onPointerLeave",y="onPointerEnter",v="pointer"),Nt=T==null?E:On(T),S=ft==null?E:On(ft),E=new it(C,v+"leave",T,l,_),E.target=Nt,E.relatedTarget=S,C=null,za(_)===x&&(it=new it(y,v+"enter",ft,l,_),it.target=S,it.relatedTarget=Nt,C=it),Nt=C,T&&ft)e:{for(it=T,y=ft,v=0,S=it;S;S=rn(S))v++;for(S=0,C=y;C;C=rn(C))S++;for(;0<v-S;)it=rn(it),v--;for(;0<S-v;)y=rn(y),S--;for(;v--;){if(it===y||y!==null&&it===y.alternate)break e;it=rn(it),y=rn(y)}it=null}else it=null;T!==null&&B0($,E,T,it,!1),ft!==null&&Nt!==null&&B0($,Nt,ft,it,!0)}}t:{if(E=x?On(x):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var at=If;else if(Wf(E))if(Pf)at=Bm;else{at=_m;var yt=Mm}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?x&&Dc(x.elementType)&&(at=If):at=Cm;if(at&&(at=at(t,x))){Ff($,at,l,_);break t}yt&&yt(t,E,x),t==="focusout"&&x&&E.type==="number"&&x.memoizedProps.value!=null&&Tc(E,"number",E.value)}switch(yt=x?On(x):window,t){case"focusin":(Wf(yt)||yt.contentEditable==="true")&&(Ha=yt,jc=x,$n=null);break;case"focusout":$n=jc=Ha=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,cs($,l,_);break;case"selectionchange":if($m)break;case"keydown":case"keyup":cs($,l,_)}var nt;if($c)t:{switch(t){case"compositionstart":var ct="onCompositionStart";break t;case"compositionend":ct="onCompositionEnd";break t;case"compositionupdate":ct="onCompositionUpdate";break t}ct=void 0}else Ua?Kf(t,l)&&(ct="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Xf&&l.locale!=="ko"&&(Ua||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ua&&(nt=Qf()):(Ol=_,Mc="value"in Ol?Ol.value:Ol.textContent,Ua=!0)),yt=Oi(x,ct),0<yt.length&&(ct=new Yf(ct,t,null,l,_),$.push({event:ct,listeners:yt}),nt?ct.data=nt:(nt=Jf(l),nt!==null&&(ct.data=nt)))),(nt=Dm?Om(t,l):zm(t,l))&&(ct=Oi(x,"onBeforeInput"),0<ct.length&&(yt=new Yf("onBeforeInput","beforeinput",null,l,_),$.push({event:yt,listeners:ct}),yt.data=nt)),vb($,t,x,l,_)}_0($,e)})}function ou(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Oi(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=zn(t,l),u!=null&&a.unshift(ou(t,u,i)),u=zn(t,e),u!=null&&a.push(ou(t,u,i))),t.tag===3)return a;t=t.return}return[]}function rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B0(t,e,l,a,u){for(var i=e._reactName,f=[];l!==null&&l!==a;){var s=l,h=s.alternate,x=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||x===null||(h=x,u?(x=zn(l,i),x!=null&&f.unshift(ou(l,x,h))):u||(x=zn(l,i),x!=null&&f.push(ou(l,x,h)))),l=l.return}f.length!==0&&t.push({event:e,listeners:f})}var Sb=/\r\n?/g,xb=/\u0000|\uFFFD/g;function N0(t){return(typeof t=="string"?t:""+t).replace(Sb,`
`).replace(xb,"")}function $0(t,e){return e=N0(e),N0(t)===e}function zi(){}function Bt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ba(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ba(t,""+a);break;case"className":Cu(t,"class",a);break;case"tabIndex":Cu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cu(t,l,a);break;case"style":Hf(t,a,i);break;case"data":if(e!=="object"){Cu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=$u(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Bt(t,e,"name",u.name,u,null),Bt(t,e,"formEncType",u.formEncType,u,null),Bt(t,e,"formMethod",u.formMethod,u,null),Bt(t,e,"formTarget",u.formTarget,u,null)):(Bt(t,e,"encType",u.encType,u,null),Bt(t,e,"method",u.method,u,null),Bt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=$u(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=zi);break;case"onScroll":a!=null&&St("scroll",t);break;case"onScrollEnd":a!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=$u(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":St("beforetoggle",t),St("toggle",t),_u(t,"popover",a);break;case"xlinkActuate":ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":_u(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ip.get(l)||l,_u(t,l,a))}}function oo(t,e,l,a,u,i){switch(l){case"style":Hf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ba(t,a):(typeof a=="number"||typeof a=="bigint")&&Ba(t,""+a);break;case"onScroll":a!=null&&St("scroll",t);break;case"onScrollEnd":a!=null&&St("scrollend",t);break;case"onClick":a!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Of.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ge]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):_u(t,l,a)}}}function se(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var f=l[i];if(f!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,i,f,l,null)}}u&&Bt(t,e,"srcSet",l.srcSet,l,null),a&&Bt(t,e,"src",l.src,l,null);return;case"input":St("invalid",t);var s=i=f=u=null,h=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var _=l[a];if(_!=null)switch(a){case"name":u=_;break;case"type":f=_;break;case"checked":h=_;break;case"defaultChecked":x=_;break;case"value":i=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:Bt(t,e,a,_,l,null)}}Bf(t,i,s,h,x,f,u,!1),Bu(t);return;case"select":St("invalid",t),a=f=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":f=s;break;case"multiple":a=s;default:Bt(t,e,u,s,l,null)}e=i,l=f,t.multiple=!!a,e!=null?Ca(t,!!a,e,!1):l!=null&&Ca(t,!!a,l,!0);return;case"textarea":St("invalid",t),i=u=a=null;for(f in l)if(l.hasOwnProperty(f)&&(s=l[f],s!=null))switch(f){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:Bt(t,e,f,s,l,null)}$f(t,a,u,i),Bu(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Bt(t,e,h,a,l,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(a=0;a<ru.length;a++)St(ru[a],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,x,a,l,null)}return;default:if(Dc(e)){for(_ in l)l.hasOwnProperty(_)&&(a=l[_],a!==void 0&&oo(t,e,_,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&Bt(t,e,s,a,l,null))}function Eb(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,f=null,s=null,h=null,x=null,_=null;for(T in l){var $=l[T];if(l.hasOwnProperty(T)&&$!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=$;default:a.hasOwnProperty(T)||Bt(t,e,T,null,a,$)}}for(var E in a){var T=a[E];if($=l[E],a.hasOwnProperty(E)&&(T!=null||$!=null))switch(E){case"type":i=T;break;case"name":u=T;break;case"checked":x=T;break;case"defaultChecked":_=T;break;case"value":f=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:T!==$&&Bt(t,e,E,T,a,$)}}Ec(t,f,s,h,x,_,i,u);return;case"select":T=f=s=E=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":T=h;default:a.hasOwnProperty(i)||Bt(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":f=i;default:i!==h&&Bt(t,e,u,i,a,h)}e=s,l=f,a=T,E!=null?Ca(t,!!l,E,!1):!!a!=!!l&&(e!=null?Ca(t,!!l,e,!0):Ca(t,!!l,l?[]:"",!1));return;case"textarea":T=E=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Bt(t,e,s,null,a,u)}for(f in a)if(u=a[f],i=l[f],a.hasOwnProperty(f)&&(u!=null||i!=null))switch(f){case"value":E=u;break;case"defaultValue":T=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&Bt(t,e,f,u,a,i)}Nf(t,E,T);return;case"option":for(var ft in l)if(E=l[ft],l.hasOwnProperty(ft)&&E!=null&&!a.hasOwnProperty(ft))switch(ft){case"selected":t.selected=!1;break;default:Bt(t,e,ft,null,a,E)}for(h in a)if(E=a[h],T=l[h],a.hasOwnProperty(h)&&E!==T&&(E!=null||T!=null))switch(h){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Bt(t,e,h,E,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in l)E=l[it],l.hasOwnProperty(it)&&E!=null&&!a.hasOwnProperty(it)&&Bt(t,e,it,null,a,E);for(x in a)if(E=a[x],T=l[x],a.hasOwnProperty(x)&&E!==T&&(E!=null||T!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,e));break;default:Bt(t,e,x,E,a,T)}return;default:if(Dc(e)){for(var Nt in l)E=l[Nt],l.hasOwnProperty(Nt)&&E!==void 0&&!a.hasOwnProperty(Nt)&&oo(t,e,Nt,void 0,a,E);for(_ in a)E=a[_],T=l[_],!a.hasOwnProperty(_)||E===T||E===void 0&&T===void 0||oo(t,e,_,E,a,T);return}}for(var y in l)E=l[y],l.hasOwnProperty(y)&&E!=null&&!a.hasOwnProperty(y)&&Bt(t,e,y,null,a,E);for($ in a)E=a[$],T=l[$],!a.hasOwnProperty($)||E===T||E==null&&T==null||Bt(t,e,$,E,a,T)}var fo=null,so=null;function wi(t){return t.nodeType===9?t:t.ownerDocument}function U0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ho(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var po=null;function Tb(){var t=window.event;return t&&t.type==="popstate"?t===po?!1:(po=t,!0):(po=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,Ob=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(t){return j0.resolve(null).then(t).catch(zb)}:k0;function zb(t){setTimeout(function(){throw t})}function Ll(t){return t==="head"}function Q0(t,e){var l=e,a=0,u=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var f=t.ownerDocument;if(l&1&&fu(f.documentElement),l&2&&fu(f.body),l&4)for(l=f.head,fu(l),f=l.firstChild;f;){var s=f.nextSibling,h=f.nodeName;f[Dn]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=s}}if(u===0){t.removeChild(i),gu(e);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);gu(e)}function mo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":mo(l),yc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function wb(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Dn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ve(t.nextSibling),t===null)break}return null}function Rb(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ve(t.nextSibling),t===null))return null;return t}function bo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Mb(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var vo=null;function q0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function L0(t,e,l){switch(e=wi(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function fu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);yc(t)}var qe=new Map,Y0=new Set;function Ri(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var yl=L.d;L.d={f:_b,r:Cb,D:Bb,C:Nb,L:$b,m:Ub,X:kb,S:Hb,M:jb};function _b(){var t=yl.f(),e=Ai();return t||e}function Cb(t){var e=wa(t);e!==null&&e.tag===5&&e.type==="form"?od(e):yl.r(t)}var on=typeof document>"u"?null:document;function G0(t,e,l){var a=on;if(a&&typeof e=="string"&&e){var u=Ne(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),Y0.has(u)||(Y0.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),se(e,"link",t),ae(e),a.head.appendChild(e)))}}function Bb(t){yl.D(t),G0("dns-prefetch",t,null)}function Nb(t,e){yl.C(t,e),G0("preconnect",t,e)}function $b(t,e,l){yl.L(t,e,l);var a=on;if(a&&t&&e){var u='link[rel="preload"][as="'+Ne(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Ne(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Ne(l.imageSizes)+'"]')):u+='[href="'+Ne(t)+'"]';var i=u;switch(e){case"style":i=fn(t);break;case"script":i=sn(t)}qe.has(i)||(t=z({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),qe.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(su(i))||e==="script"&&a.querySelector(du(i))||(e=a.createElement("link"),se(e,"link",t),ae(e),a.head.appendChild(e)))}}function Ub(t,e){yl.m(t,e);var l=on;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Ne(a)+'"][href="'+Ne(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=sn(t)}if(!qe.has(i)&&(t=z({rel:"modulepreload",href:t},e),qe.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(du(i)))return}a=l.createElement("link"),se(a,"link",t),ae(a),l.head.appendChild(a)}}}function Hb(t,e,l){yl.S(t,e,l);var a=on;if(a&&t){var u=Ra(a).hoistableStyles,i=fn(t);e=e||"default";var f=u.get(i);if(!f){var s={loading:0,preload:null};if(f=a.querySelector(su(i)))s.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":e},l),(l=qe.get(i))&&go(t,l);var h=f=a.createElement("link");ae(h),se(h,"link",t),h._p=new Promise(function(x,_){h.onload=x,h.onerror=_}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Mi(f,e,a)}f={type:"stylesheet",instance:f,count:1,state:s},u.set(i,f)}}}function kb(t,e){yl.X(t,e);var l=on;if(l&&t){var a=Ra(l).hoistableScripts,u=sn(t),i=a.get(u);i||(i=l.querySelector(du(u)),i||(t=z({src:t,async:!0},e),(e=qe.get(u))&&yo(t,e),i=l.createElement("script"),ae(i),se(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function jb(t,e){yl.M(t,e);var l=on;if(l&&t){var a=Ra(l).hoistableScripts,u=sn(t),i=a.get(u);i||(i=l.querySelector(du(u)),i||(t=z({src:t,async:!0,type:"module"},e),(e=qe.get(u))&&yo(t,e),i=l.createElement("script"),ae(i),se(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function X0(t,e,l,a){var u=(u=V.current)?Ri(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=fn(l.href),l=Ra(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=fn(l.href);var i=Ra(u).hoistableStyles,f=i.get(t);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,f),(i=u.querySelector(su(t)))&&!i._p&&(f.instance=i,f.state.loading=5),qe.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},qe.set(t,l),i||Qb(u,t,l,f.state))),e&&a===null)throw Error(r(528,""));return f}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=sn(l),l=Ra(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function fn(t){return'href="'+Ne(t)+'"'}function su(t){return'link[rel="stylesheet"]['+t+"]"}function V0(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function Qb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),se(e,"link",l),ae(e),t.head.appendChild(e))}function sn(t){return'[src="'+Ne(t)+'"]'}function du(t){return"script[async]"+t}function Z0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ne(l.href)+'"]');if(a)return e.instance=a,ae(a),a;var u=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ae(a),se(a,"style",u),Mi(a,l.precedence,t),e.instance=a;case"stylesheet":u=fn(l.href);var i=t.querySelector(su(u));if(i)return e.state.loading|=4,e.instance=i,ae(i),i;a=V0(l),(u=qe.get(u))&&go(a,u),i=(t.ownerDocument||t).createElement("link"),ae(i);var f=i;return f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),se(i,"link",a),e.state.loading|=4,Mi(i,l.precedence,t),e.instance=i;case"script":return i=sn(l.src),(u=t.querySelector(du(i)))?(e.instance=u,ae(u),u):(a=l,(u=qe.get(i))&&(a=z({},l),yo(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ae(u),se(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Mi(a,l.precedence,t));return e.instance}function Mi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,f=0;f<a.length;f++){var s=a[f];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function go(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function yo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _i=null;function K0(t,e,l){if(_i===null){var a=new Map,u=_i=new Map;u.set(l,a)}else u=_i,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Dn]||i[he]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(e)||"";f=t+f;var s=a.get(f);s?s.push(i):a.set(f,[i])}}return a}function J0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function qb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function W0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var hu=null;function Lb(){}function Yb(t,e,l){if(hu===null)throw Error(r(475));var a=hu;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=fn(l.href),i=t.querySelector(su(u));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Ci.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,ae(i);return}i=t.ownerDocument||t,l=V0(l),(u=qe.get(u))&&go(l,u),i=i.createElement("link"),ae(i);var f=i;f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),se(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Ci.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Gb(){if(hu===null)throw Error(r(475));var t=hu;return t.stylesheets&&t.count===0&&Ao(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Ao(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Ci(){if(this.count--,this.count===0){if(this.stylesheets)Ao(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bi=null;function Ao(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bi=new Map,e.forEach(Xb,t),Bi=null,Ci.call(t))}function Xb(t,e){if(!(e.state.loading&4)){var l=Bi.get(t);if(l)var a=l.get(null);else{l=new Map,Bi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var f=u[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),a=f)}a&&l.set(null,a)}u=e.instance,f=u.getAttribute("data-precedence"),i=l.get(f)||a,i===a&&l.set(null,u),l.set(f,u),this.count++,a=Ci.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var pu={$$typeof:q,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Vb(t,e,l,a,u,i,f,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.hiddenUpdates=mc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function F0(t,e,l,a,u,i,f,s,h,x,_,$){return t=new Vb(t,e,l,f,s,h,x,$),e=1,i===!0&&(e|=24),i=Oe(3,null,null,e),t.current=i,i.stateNode=t,e=tr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},nr(i),t}function I0(t){return t?(t=qa,t):qa}function P0(t,e,l,a,u,i){u=I0(u),a.context===null?a.context=u:a.pendingContext=u,a=Rl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ml(t,a,e),l!==null&&(_e(l,t,e),Gn(l,t,e))}function th(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function So(t,e){th(t,e),(t=t.alternate)&&th(t,e)}function eh(t){if(t.tag===13){var e=Qa(t,67108864);e!==null&&_e(e,t,67108864),So(t,67108864)}}var Ni=!0;function Zb(t,e,l,a){var u=R.T;R.T=null;var i=L.p;try{L.p=2,xo(t,e,l,a)}finally{L.p=i,R.T=u}}function Kb(t,e,l,a){var u=R.T;R.T=null;var i=L.p;try{L.p=8,xo(t,e,l,a)}finally{L.p=i,R.T=u}}function xo(t,e,l,a){if(Ni){var u=Eo(a);if(u===null)ro(t,e,a,$i,l),ah(t,a);else if(Wb(u,t,e,l,a))a.stopPropagation();else if(ah(t,a),e&4&&-1<Jb.indexOf(t)){for(;u!==null;){var i=wa(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=Pl(i.pendingLanes);if(f!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;f;){var h=1<<31-Te(f);s.entanglements[1]|=h,f&=~h}tl(i),(Rt&6)===0&&(gi=Ft()+500,cu(0))}}break;case 13:s=Qa(i,2),s!==null&&_e(s,i,2),Ai(),So(i,2)}if(i=Eo(a),i===null&&ro(t,e,a,$i,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else ro(t,e,a,null,l)}}function Eo(t){return t=zc(t),To(t)}var $i=null;function To(t){if($i=null,t=za(t),t!==null){var e=m(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=g(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return $i=t,null}function lh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nl()){case Ye:return 2;case Da:return 8;case El:case Il:return 32;case Sn:return 268435456;default:return 32}default:return 32}}var Do=!1,Yl=null,Gl=null,Xl=null,mu=new Map,bu=new Map,Vl=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ah(t,e){switch(t){case"focusin":case"focusout":Yl=null;break;case"dragenter":case"dragleave":Gl=null;break;case"mouseover":case"mouseout":Xl=null;break;case"pointerover":case"pointerout":mu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bu.delete(e.pointerId)}}function vu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=wa(e),e!==null&&eh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Wb(t,e,l,a,u){switch(e){case"focusin":return Yl=vu(Yl,t,e,l,a,u),!0;case"dragenter":return Gl=vu(Gl,t,e,l,a,u),!0;case"mouseover":return Xl=vu(Xl,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return mu.set(i,vu(mu.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,bu.set(i,vu(bu.get(i)||null,t,e,l,a,u)),!0}return!1}function nh(t){var e=za(t.target);if(e!==null){var l=m(e);if(l!==null){if(e=l.tag,e===13){if(e=g(l),e!==null){t.blockedOn=e,Yp(t.priority,function(){if(l.tag===13){var a=Me();a=bc(a);var u=Qa(l,a);u!==null&&_e(u,l,a),So(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ui(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Eo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Oc=a,l.target.dispatchEvent(a),Oc=null}else return e=wa(l),e!==null&&eh(e),t.blockedOn=l,!1;e.shift()}return!0}function uh(t,e,l){Ui(t)&&l.delete(e)}function Fb(){Do=!1,Yl!==null&&Ui(Yl)&&(Yl=null),Gl!==null&&Ui(Gl)&&(Gl=null),Xl!==null&&Ui(Xl)&&(Xl=null),mu.forEach(uh),bu.forEach(uh)}function Hi(t,e){t.blockedOn===e&&(t.blockedOn=null,Do||(Do=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Fb)))}var ki=null;function ih(t){ki!==t&&(ki=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ki===t&&(ki=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(To(a||l)===null)continue;break}var i=wa(l);i!==null&&(t.splice(e,3),e-=3,Er(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function gu(t){function e(h){return Hi(h,t)}Yl!==null&&Hi(Yl,t),Gl!==null&&Hi(Gl,t),Xl!==null&&Hi(Xl,t),mu.forEach(e),bu.forEach(e);for(var l=0;l<Vl.length;l++){var a=Vl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Vl.length&&(l=Vl[0],l.blockedOn===null);)nh(l),l.blockedOn===null&&Vl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],f=u[ge]||null;if(typeof i=="function")f||ih(l);else if(f){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,f=i[ge]||null)s=f.formAction;else if(To(u)!==null)continue}else s=f.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),ih(l)}}}function Oo(t){this._internalRoot=t}ji.prototype.render=Oo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=Me();P0(l,a,t,e,null,null)},ji.prototype.unmount=Oo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;P0(t.current,2,null,t,null,null),Ai(),e[Oa]=null}};function ji(t){this._internalRoot=t}ji.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ef();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Vl.length&&e!==0&&e<Vl[l].priority;l++);Vl.splice(l,0,t),l===0&&nh(t)}};var ch=c.version;if(ch!=="19.1.0")throw Error(r(527,ch,"19.1.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=A(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Ib={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{xn=Qi.inject(Ib),Ee=Qi}catch{}}return Au.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=Ed,i=Td,f=Dd,s=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=F0(t,1,!1,null,null,l,a,u,i,f,s,null),t[Oa]=e.current,co(t),new Oo(e)},Au.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=Ed,f=Td,s=Dd,h=null,x=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(x=l.formState)),e=F0(t,1,!0,e,l??null,a,u,i,f,s,h,x),e.context=I0(null),l=e.current,a=Me(),a=bc(a),u=Rl(a),u.callback=null,Ml(l,u,a),l=a,e.current.lanes=l,Tn(e,l),tl(e),t[Oa]=e.current,co(t),new ji(e)},Au.version="19.1.0",Au}var vh;function cv(){if(vh)return Ro.exports;vh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Ro.exports=iv(),Ro.exports}var rv=cv();const ov=Po(rv);var fv=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,re=function(){return re=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(c[m]=o[m])}return c},re.apply(this,arguments)};function Eu(n,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,m;r<d;r++)(m||!(r in c))&&(m||(m=Array.prototype.slice.call(c,0,r)),m[r]=c[r]);return n.concat(m||Array.prototype.slice.call(c))}var jt="-ms-",xu="-moz-",wt="-webkit-",Gh="comm",ic="rule",ef="decl",sv="@import",Xh="@keyframes",dv="@layer",Vh=Math.abs,lf=String.fromCharCode,jo=Object.assign;function hv(n,c){return ce(n,0)^45?(((c<<2^ce(n,0))<<2^ce(n,1))<<2^ce(n,2))<<2^ce(n,3):0}function Zh(n){return n.trim()}function Sl(n,c){return(n=c.exec(n))?n[0]:n}function bt(n,c,o){return n.replace(c,o)}function Vi(n,c,o){return n.indexOf(c,o)}function ce(n,c){return n.charCodeAt(c)|0}function mn(n,c,o){return n.slice(c,o)}function el(n){return n.length}function Kh(n){return n.length}function Su(n,c){return c.push(n),n}function pv(n,c){return n.map(c).join("")}function gh(n,c){return n.filter(function(o){return!Sl(o,c)})}var cc=1,bn=1,Jh=0,Le=0,te=0,An="";function rc(n,c,o,r,d,m,g,O){return{value:n,root:c,parent:o,type:r,props:d,children:m,line:cc,column:bn,length:g,return:"",siblings:O}}function Kl(n,c){return jo(rc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function dn(n){for(;n.root;)n=Kl(n.root,{children:[n]});Su(n,n.siblings)}function mv(){return te}function bv(){return te=Le>0?ce(An,--Le):0,bn--,te===10&&(bn=1,cc--),te}function Ze(){return te=Le<Jh?ce(An,Le++):0,bn++,te===10&&(bn=1,cc++),te}function Aa(){return ce(An,Le)}function Zi(){return Le}function oc(n,c){return mn(An,n,c)}function Qo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vv(n){return cc=bn=1,Jh=el(An=n),Le=0,[]}function gv(n){return An="",n}function Bo(n){return Zh(oc(Le-1,qo(n===91?n+2:n===40?n+1:n)))}function yv(n){for(;(te=Aa())&&te<33;)Ze();return Qo(n)>2||Qo(te)>3?"":" "}function Av(n,c){for(;--c&&Ze()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return oc(n,Zi()+(c<6&&Aa()==32&&Ze()==32))}function qo(n){for(;Ze();)switch(te){case n:return Le;case 34:case 39:n!==34&&n!==39&&qo(te);break;case 40:n===41&&qo(n);break;case 92:Ze();break}return Le}function Sv(n,c){for(;Ze()&&n+te!==57;)if(n+te===84&&Aa()===47)break;return"/*"+oc(c,Le-1)+"*"+lf(n===47?n:Ze())}function xv(n){for(;!Qo(Aa());)Ze();return oc(n,Le)}function Ev(n){return gv(Ki("",null,null,null,[""],n=vv(n),0,[0],n))}function Ki(n,c,o,r,d,m,g,O,A){for(var b=0,z=0,w=g,U=0,Z=0,J=0,tt=1,F=1,K=1,X=0,q="",et=d,Y=m,W=r,I=q;F;)switch(J=X,X=Ze()){case 40:if(J!=108&&ce(I,w-1)==58){Vi(I+=bt(Bo(X),"&","&\f"),"&\f",Vh(b?O[b-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:I+=Bo(X);break;case 9:case 10:case 13:case 32:I+=yv(J);break;case 92:I+=Av(Zi()-1,7);continue;case 47:switch(Aa()){case 42:case 47:Su(Tv(Sv(Ze(),Zi()),c,o,A),A);break;default:I+="/"}break;case 123*tt:O[b++]=el(I)*K;case 125*tt:case 59:case 0:switch(X){case 0:case 125:F=0;case 59+z:K==-1&&(I=bt(I,/\f/g,"")),Z>0&&el(I)-w&&Su(Z>32?Ah(I+";",r,o,w-1,A):Ah(bt(I," ","")+";",r,o,w-2,A),A);break;case 59:I+=";";default:if(Su(W=yh(I,c,o,b,z,d,O,q,et=[],Y=[],w,m),m),X===123)if(z===0)Ki(I,c,W,W,et,m,w,O,Y);else switch(U===99&&ce(I,3)===110?100:U){case 100:case 108:case 109:case 115:Ki(n,W,W,r&&Su(yh(n,W,W,0,0,d,O,q,d,et=[],w,Y),Y),d,Y,w,O,r?et:Y);break;default:Ki(I,W,W,W,[""],Y,0,O,Y)}}b=z=Z=0,tt=K=1,q=I="",w=g;break;case 58:w=1+el(I),Z=J;default:if(tt<1){if(X==123)--tt;else if(X==125&&tt++==0&&bv()==125)continue}switch(I+=lf(X),X*tt){case 38:K=z>0?1:(I+="\f",-1);break;case 44:O[b++]=(el(I)-1)*K,K=1;break;case 64:Aa()===45&&(I+=Bo(Ze())),U=Aa(),z=w=el(q=I+=xv(Zi())),X++;break;case 45:J===45&&el(I)==2&&(tt=0)}}return m}function yh(n,c,o,r,d,m,g,O,A,b,z,w){for(var U=d-1,Z=d===0?m:[""],J=Kh(Z),tt=0,F=0,K=0;tt<r;++tt)for(var X=0,q=mn(n,U+1,U=Vh(F=g[tt])),et=n;X<J;++X)(et=Zh(F>0?Z[X]+" "+q:bt(q,/&\f/g,Z[X])))&&(A[K++]=et);return rc(n,c,o,d===0?ic:O,A,b,z,w)}function Tv(n,c,o,r){return rc(n,c,o,Gh,lf(mv()),mn(n,2,-2),0,r)}function Ah(n,c,o,r,d){return rc(n,c,o,ef,mn(n,0,r),mn(n,r+1,-1),r,d)}function Wh(n,c,o){switch(hv(n,c)){case 5103:return wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+n+n;case 4789:return xu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+n+xu+n+jt+n+n;case 5936:switch(ce(n,c+11)){case 114:return wt+n+jt+bt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return wt+n+jt+bt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return wt+n+jt+bt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return wt+n+jt+n+n;case 6165:return wt+n+jt+"flex-"+n+n;case 5187:return wt+n+bt(n,/(\w+).+(:[^]+)/,wt+"box-$1$2"+jt+"flex-$1$2")+n;case 5443:return wt+n+jt+"flex-item-"+bt(n,/flex-|-self/g,"")+(Sl(n,/flex-|baseline/)?"":jt+"grid-row-"+bt(n,/flex-|-self/g,""))+n;case 4675:return wt+n+jt+"flex-line-pack"+bt(n,/align-content|flex-|-self/g,"")+n;case 5548:return wt+n+jt+bt(n,"shrink","negative")+n;case 5292:return wt+n+jt+bt(n,"basis","preferred-size")+n;case 6060:return wt+"box-"+bt(n,"-grow","")+wt+n+jt+bt(n,"grow","positive")+n;case 4554:return wt+bt(n,/([^-])(transform)/g,"$1"+wt+"$2")+n;case 6187:return bt(bt(bt(n,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),n,"")+n;case 5495:case 3959:return bt(n,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return bt(bt(n,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+n+n;case 4200:if(!Sl(n,/flex-|baseline/))return jt+"grid-column-align"+mn(n,c)+n;break;case 2592:case 3360:return jt+bt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,Sl(r.props,/grid-\w+-end/)})?~Vi(n+(o=o[c].value),"span",0)?n:jt+bt(n,"-start","")+n+jt+"grid-row-span:"+(~Vi(o,"span",0)?Sl(o,/\d+/):+Sl(o,/\d+/)-+Sl(n,/\d+/))+";":jt+bt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(r){return Sl(r.props,/grid-\w+-start/)})?n:jt+bt(bt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return bt(n,/(.+)-inline(.+)/,wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(el(n)-1-c>6)switch(ce(n,c+1)){case 109:if(ce(n,c+4)!==45)break;case 102:return bt(n,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+xu+(ce(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~Vi(n,"stretch",0)?Wh(bt(n,"stretch","fill-available"),c,o)+n:n}break;case 5152:case 5920:return bt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,m,g,O,A,b){return jt+d+":"+m+b+(g?jt+d+"-span:"+(O?A:+A-+m)+b:"")+n});case 4949:if(ce(n,c+6)===121)return bt(n,":",":"+wt)+n;break;case 6444:switch(ce(n,ce(n,14)===45?18:11)){case 120:return bt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(ce(n,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+jt+"$2box$3")+n;case 100:return bt(n,":",":"+jt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(n,"scroll-","scroll-snap-")+n}return n}function tc(n,c){for(var o="",r=0;r<n.length;r++)o+=c(n[r],r,n,c)||"";return o}function Dv(n,c,o,r){switch(n.type){case dv:if(n.children.length)break;case sv:case ef:return n.return=n.return||n.value;case Gh:return"";case Xh:return n.return=n.value+"{"+tc(n.children,r)+"}";case ic:if(!el(n.value=n.props.join(",")))return""}return el(o=tc(n.children,r))?n.return=n.value+"{"+o+"}":""}function Ov(n){var c=Kh(n);return function(o,r,d,m){for(var g="",O=0;O<c;O++)g+=n[O](o,r,d,m)||"";return g}}function zv(n){return function(c){c.root||(c=c.return)&&n(c)}}function wv(n,c,o,r){if(n.length>-1&&!n.return)switch(n.type){case ef:n.return=Wh(n.value,n.length,o);return;case Xh:return tc([Kl(n,{value:bt(n.value,"@","@"+wt)})],r);case ic:if(n.length)return pv(o=n.props,function(d){switch(Sl(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dn(Kl(n,{props:[bt(d,/:(read-\w+)/,":"+xu+"$1")]})),dn(Kl(n,{props:[d]})),jo(n,{props:gh(o,r)});break;case"::placeholder":dn(Kl(n,{props:[bt(d,/:(plac\w+)/,":"+wt+"input-$1")]})),dn(Kl(n,{props:[bt(d,/:(plac\w+)/,":"+xu+"$1")]})),dn(Kl(n,{props:[bt(d,/:(plac\w+)/,jt+"input-$1")]})),dn(Kl(n,{props:[d]})),jo(n,{props:gh(o,r)});break}return""})}}var Rv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},vn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Fh="active",Ih="data-styled-version",fc="6.1.19",af=`/*!sc*/
`,ec=typeof window<"u"&&typeof document<"u",Mv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),_v={},sc=Object.freeze([]),gn=Object.freeze({});function Ph(n,c,o){return o===void 0&&(o=gn),n.theme!==o.theme&&n.theme||c||o.theme}var tp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bv=/(^-|-$)/g;function Sh(n){return n.replace(Cv,"-").replace(Bv,"")}var Nv=/(a)(d)/gi,qi=52,xh=function(n){return String.fromCharCode(n+(n>25?39:97))};function Lo(n){var c,o="";for(c=Math.abs(n);c>qi;c=c/qi|0)o=xh(c%qi)+o;return(xh(c%qi)+o).replace(Nv,"$1-$2")}var No,ep=5381,pn=function(n,c){for(var o=c.length;o;)n=33*n^c.charCodeAt(--o);return n},lp=function(n){return pn(ep,n)};function ap(n){return Lo(lp(n)>>>0)}function $v(n){return n.displayName||n.name||"Component"}function $o(n){return typeof n=="string"&&!0}var np=typeof Symbol=="function"&&Symbol.for,up=np?Symbol.for("react.memo"):60115,Uv=np?Symbol.for("react.forward_ref"):60112,Hv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ip={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jv=((No={})[Uv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},No[up]=ip,No);function Eh(n){return("type"in(c=n)&&c.type.$$typeof)===up?ip:"$$typeof"in n?jv[n.$$typeof]:Hv;var c}var Qv=Object.defineProperty,qv=Object.getOwnPropertyNames,Th=Object.getOwnPropertySymbols,Lv=Object.getOwnPropertyDescriptor,Yv=Object.getPrototypeOf,Dh=Object.prototype;function cp(n,c,o){if(typeof c!="string"){if(Dh){var r=Yv(c);r&&r!==Dh&&cp(n,r,o)}var d=qv(c);Th&&(d=d.concat(Th(c)));for(var m=Eh(n),g=Eh(c),O=0;O<d.length;++O){var A=d[O];if(!(A in kv||o&&o[A]||g&&A in g||m&&A in m)){var b=Lv(c,A);try{Qv(n,A,b)}catch{}}}}return n}function Sa(n){return typeof n=="function"}function nf(n){return typeof n=="object"&&"styledComponentId"in n}function ga(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Yo(n,c){if(n.length===0)return"";for(var o=n[0],r=1;r<n.length;r++)o+=n[r];return o}function Tu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Go(n,c,o){if(o===void 0&&(o=!1),!o&&!Tu(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=Go(n[r],c[r]);else if(Tu(c))for(var r in c)n[r]=Go(n[r],c[r]);return n}function uf(n,c){Object.defineProperty(n,"toString",{value:c})}function xa(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Gv=function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},n.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,m=d;c>=m;)if((m<<=1)<0)throw xa(16,"".concat(c));this.groupSizes=new Uint32Array(m),this.groupSizes.set(r),this.length=m;for(var g=d;g<m;g++)this.groupSizes[g]=0}for(var O=this.indexOfGroup(c+1),A=(g=0,o.length);g<A;g++)this.tag.insertRule(O,o[g])&&(this.groupSizes[c]++,O++)},n.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var m=r;m<d;m++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),m=d+r,g=d;g<m;g++)o+="".concat(this.tag.getRule(g)).concat(af);return o},n}(),Ji=new Map,lc=new Map,Wi=1,Li=function(n){if(Ji.has(n))return Ji.get(n);for(;lc.has(Wi);)Wi++;var c=Wi++;return Ji.set(n,c),lc.set(c,n),c},Xv=function(n,c){Wi=c+1,Ji.set(n,c),lc.set(c,n)},Vv="style[".concat(vn,"][").concat(Ih,'="').concat(fc,'"]'),Zv=new RegExp("^".concat(vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Kv=function(n,c,o){for(var r,d=o.split(","),m=0,g=d.length;m<g;m++)(r=d[m])&&n.registerName(c,r)},Jv=function(n,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(af),d=[],m=0,g=r.length;m<g;m++){var O=r[m].trim();if(O){var A=O.match(Zv);if(A){var b=0|parseInt(A[1],10),z=A[2];b!==0&&(Xv(z,b),Kv(n,z,A[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(O)}}},Oh=function(n){for(var c=document.querySelectorAll(Vv),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(vn)!==Fh&&(Jv(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Wv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rp=function(n){var c=document.head,o=n||c,r=document.createElement("style"),d=function(O){var A=Array.from(O.querySelectorAll("style[".concat(vn,"]")));return A[A.length-1]}(o),m=d!==void 0?d.nextSibling:null;r.setAttribute(vn,Fh),r.setAttribute(Ih,fc);var g=Wv();return g&&r.setAttribute("nonce",g),o.insertBefore(r,m),r},Fv=function(){function n(c){this.element=rp(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,m=r.length;d<m;d++){var g=r[d];if(g.ownerNode===o)return g}throw xa(17)}(this.element),this.length=0}return n.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},n}(),Iv=function(){function n(c){this.element=rp(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n}(),Pv=function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n}(),zh=ec,tg={isServer:!ec,useCSSOMInjection:!Mv},ac=function(){function n(c,o,r){c===void 0&&(c=gn),o===void 0&&(o={});var d=this;this.options=re(re({},tg),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&ec&&zh&&(zh=!1,Oh(this)),uf(this,function(){return function(m){for(var g=m.getTag(),O=g.length,A="",b=function(w){var U=function(K){return lc.get(K)}(w);if(U===void 0)return"continue";var Z=m.names.get(U),J=g.getGroup(w);if(Z===void 0||!Z.size||J.length===0)return"continue";var tt="".concat(vn,".g").concat(w,'[id="').concat(U,'"]'),F="";Z!==void 0&&Z.forEach(function(K){K.length>0&&(F+="".concat(K,","))}),A+="".concat(J).concat(tt,'{content:"').concat(F,'"}').concat(af)},z=0;z<O;z++)b(z);return A}(d)})}return n.registerId=function(c){return Li(c)},n.prototype.rehydrate=function(){!this.server&&ec&&Oh(this)},n.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new n(re(re({},this.options),c),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new Pv(d):r?new Fv(d):new Iv(d)}(this.options),new Gv(c)));var c},n.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},n.prototype.registerName=function(c,o){if(Li(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},n.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Li(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Li(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n}(),eg=/&/g,lg=/^\s*\/\/.*$/gm;function op(n,c){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=op(o.children,c)),o})}function ag(n){var c,o,r,d=gn,m=d.options,g=m===void 0?gn:m,O=d.plugins,A=O===void 0?sc:O,b=function(U,Z,J){return J.startsWith(o)&&J.endsWith(o)&&J.replaceAll(o,"").length>0?".".concat(c):U},z=A.slice();z.push(function(U){U.type===ic&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(eg,o).replace(r,b))}),g.prefix&&z.push(wv),z.push(Dv);var w=function(U,Z,J,tt){Z===void 0&&(Z=""),J===void 0&&(J=""),tt===void 0&&(tt="&"),c=tt,o=Z,r=new RegExp("\\".concat(o,"\\b"),"g");var F=U.replace(lg,""),K=Ev(J||Z?"".concat(J," ").concat(Z," { ").concat(F," }"):F);g.namespace&&(K=op(K,g.namespace));var X=[];return tc(K,Ov(z.concat(zv(function(q){return X.push(q)})))),X};return w.hash=A.length?A.reduce(function(U,Z){return Z.name||xa(15),pn(U,Z.name)},ep).toString():"",w}var ng=new ac,Xo=ag(),fp=D.createContext({shouldForwardProp:void 0,styleSheet:ng,stylis:Xo});fp.Consumer;D.createContext(void 0);function Vo(){return M.useContext(fp)}var ug=function(){function n(c,o){var r=this;this.inject=function(d,m){m===void 0&&(m=Xo);var g=r.name+m.hash;d.hasNameForId(r.id,g)||d.insertRules(r.id,g,m(r.rules,g,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,uf(this,function(){throw xa(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Xo),this.name+c.hash},n}(),ig=function(n){return n>="A"&&n<="Z"};function wh(n){for(var c="",o=0;o<n.length;o++){var r=n[o];if(o===1&&r==="-"&&n[0]==="-")return n;ig(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var sp=function(n){return n==null||n===!1||n===""},dp=function(n){var c,o,r=[];for(var d in n){var m=n[d];n.hasOwnProperty(d)&&!sp(m)&&(Array.isArray(m)&&m.isCss||Sa(m)?r.push("".concat(wh(d),":"),m,";"):Tu(m)?r.push.apply(r,Eu(Eu(["".concat(d," {")],dp(m),!1),["}"],!1)):r.push("".concat(wh(d),": ").concat((c=d,(o=m)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Rv||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Jl(n,c,o,r){if(sp(n))return[];if(nf(n))return[".".concat(n.styledComponentId)];if(Sa(n)){if(!Sa(m=n)||m.prototype&&m.prototype.isReactComponent||!c)return[n];var d=n(c);return Jl(d,c,o,r)}var m;return n instanceof ug?o?(n.inject(o,r),[n.getName(r)]):[n]:Tu(n)?dp(n):Array.isArray(n)?Array.prototype.concat.apply(sc,n.map(function(g){return Jl(g,c,o,r)})):[n.toString()]}function hp(n){for(var c=0;c<n.length;c+=1){var o=n[c];if(Sa(o)&&!nf(o))return!1}return!0}var cg=lp(fc),rg=function(){function n(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hp(c),this.componentId=o,this.baseHash=pn(cg,o),this.baseStyle=r,ac.registerId(o)}return n.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ga(d,this.staticRulesId);else{var m=Yo(Jl(this.rules,c,o,r)),g=Lo(pn(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,g)){var O=r(m,".".concat(g),void 0,this.componentId);o.insertRules(this.componentId,g,O)}d=ga(d,g),this.staticRulesId=g}else{for(var A=pn(this.baseHash,r.hash),b="",z=0;z<this.rules.length;z++){var w=this.rules[z];if(typeof w=="string")b+=w;else if(w){var U=Yo(Jl(w,c,o,r));A=pn(A,U+z),b+=U}}if(b){var Z=Lo(A>>>0);o.hasNameForId(this.componentId,Z)||o.insertRules(this.componentId,Z,r(b,".".concat(Z),void 0,this.componentId)),d=ga(d,Z)}}return d},n}(),Du=D.createContext(void 0);Du.Consumer;function og(n){var c=D.useContext(Du),o=M.useMemo(function(){return function(r,d){if(!r)throw xa(14);if(Sa(r)){var m=r(d);return m}if(Array.isArray(r)||typeof r!="object")throw xa(8);return d?re(re({},d),r):r}(n.theme,c)},[n.theme,c]);return n.children?D.createElement(Du.Provider,{value:o},n.children):null}var Uo={};function fg(n,c,o){var r=nf(n),d=n,m=!$o(n),g=c.attrs,O=g===void 0?sc:g,A=c.componentId,b=A===void 0?function(et,Y){var W=typeof et!="string"?"sc":Sh(et);Uo[W]=(Uo[W]||0)+1;var I="".concat(W,"-").concat(ap(fc+W+Uo[W]));return Y?"".concat(Y,"-").concat(I):I}(c.displayName,c.parentComponentId):A,z=c.displayName,w=z===void 0?function(et){return $o(et)?"styled.".concat(et):"Styled(".concat($v(et),")")}(n):z,U=c.displayName&&c.componentId?"".concat(Sh(c.displayName),"-").concat(c.componentId):c.componentId||b,Z=r&&d.attrs?d.attrs.concat(O).filter(Boolean):O,J=c.shouldForwardProp;if(r&&d.shouldForwardProp){var tt=d.shouldForwardProp;if(c.shouldForwardProp){var F=c.shouldForwardProp;J=function(et,Y){return tt(et,Y)&&F(et,Y)}}else J=tt}var K=new rg(o,U,r?d.componentStyle:void 0);function X(et,Y){return function(W,I,xt){var zt=W.attrs,Vt=W.componentStyle,$t=W.defaultProps,mt=W.foldedComponentIds,Qt=W.styledComponentId,Ut=W.target,gt=D.useContext(Du),R=Vo(),L=W.shouldForwardProp||R.shouldForwardProp,G=Ph(I,gt,$t)||gn,ut=function(lt,V,ot){for(var dt,k=re(re({},V),{className:void 0,theme:ot}),st=0;st<lt.length;st+=1){var ht=Sa(dt=lt[st])?dt(k):dt;for(var Et in ht)k[Et]=Et==="className"?ga(k[Et],ht[Et]):Et==="style"?re(re({},k[Et]),ht[Et]):ht[Et]}return V.className&&(k.className=ga(k.className,V.className)),k}(zt,I,G),p=ut.as||Ut,B={};for(var Q in ut)ut[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&ut.theme===G||(Q==="forwardedAs"?B.as=ut.forwardedAs:L&&!L(Q,p)||(B[Q]=ut[Q]));var N=function(lt,V){var ot=Vo(),dt=lt.generateAndInjectStyles(V,ot.styleSheet,ot.stylis);return dt}(Vt,ut),j=ga(mt,Qt);return N&&(j+=" "+N),ut.className&&(j+=" "+ut.className),B[$o(p)&&!tp.has(p)?"class":"className"]=j,xt&&(B.ref=xt),M.createElement(p,B)}(q,et,Y)}X.displayName=w;var q=D.forwardRef(X);return q.attrs=Z,q.componentStyle=K,q.displayName=w,q.shouldForwardProp=J,q.foldedComponentIds=r?ga(d.foldedComponentIds,d.styledComponentId):"",q.styledComponentId=U,q.target=r?d.target:n,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(et){this._foldedDefaultProps=r?function(Y){for(var W=[],I=1;I<arguments.length;I++)W[I-1]=arguments[I];for(var xt=0,zt=W;xt<zt.length;xt++)Go(Y,zt[xt],!0);return Y}({},d.defaultProps,et):et}}),uf(q,function(){return".".concat(q.styledComponentId)}),m&&cp(q,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function Rh(n,c){for(var o=[n[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],n[r+1]);return o}var Mh=function(n){return Object.assign(n,{isCss:!0})};function P(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Sa(n)||Tu(n))return Mh(Jl(Rh(sc,Eu([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?Jl(r):Mh(Jl(Rh(r,c)))}function Zo(n,c,o){if(o===void 0&&(o=gn),!c)throw xa(1,c);var r=function(d){for(var m=[],g=1;g<arguments.length;g++)m[g-1]=arguments[g];return n(c,o,P.apply(void 0,Eu([d],m,!1)))};return r.attrs=function(d){return Zo(n,c,re(re({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return Zo(n,c,re(re({},o),d))},r}var pp=function(n){return Zo(fg,n)},H=pp;tp.forEach(function(n){H[n]=pp(n)});var sg=function(){function n(c,o){this.rules=c,this.componentId=o,this.isStatic=hp(c),ac.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,o,r,d){var m=d(Yo(Jl(this.rules,o,r,d)),""),g=this.componentId+c;r.insertRules(g,g,m)},n.prototype.removeStyles=function(c,o){o.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,o,r,d){c>2&&ac.registerId(this.componentId+c),this.removeStyles(c,r),this.createStyles(c,o,r,d)},n}();function dg(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var r=P.apply(void 0,Eu([n],c,!1)),d="sc-global-".concat(ap(JSON.stringify(r))),m=new sg(r,d),g=function(A){var b=Vo(),z=D.useContext(Du),w=D.useRef(b.styleSheet.allocateGSInstance(d)).current;return b.styleSheet.server&&O(w,A,b.styleSheet,z,b.stylis),D.useLayoutEffect(function(){if(!b.styleSheet.server)return O(w,A,b.styleSheet,z,b.stylis),function(){return m.removeStyles(w,b.styleSheet)}},[w,A,b.styleSheet,z,b.stylis]),null};function O(A,b,z,w,U){if(m.isStatic)m.renderStyles(A,_v,z,U);else{var Z=re(re({},b),{theme:Ph(b,w,g.defaultProps)});m.renderStyles(A,Z,z,U)}}return D.memo(g)}const cf="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",rf="inset 2px 2px 3px rgba(0,0,0,0.2)",Ke=()=>P`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Je=({background:n="material",color:c="materialText"}={})=>P`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[c]};
`,zu=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:o=2})=>P`
  background-image: ${[`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`,`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`].join(",")};
  background-color: ${c};
  background-size: ${`${o*2}px ${o*2}px`};
  background-position: 0 0, ${`${o}px ${o}px`};
`,Ea=()=>P`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,hn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},hg=({theme:n,topLeftInner:c,bottomRightInner:o,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?cf:!1,d?rf:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),Xt=({invert:n=!1,style:c="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return P`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[hn[c][o.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[hn[c][o.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[hn[c][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[hn[c][o.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>hg({theme:r,topLeftInner:hn[c][o.topLeftInner],bottomRightInner:hn[c][o.bottomRightInner],hasShadow:d})};
  `},yn=()=>P`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,pg=n=>Buffer.from(n).toString("base64"),mg=typeof btoa<"u"?btoa:pg,Yi=(n,c=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${mg(o)})`},of=(n="default")=>P`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>zu({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Je()}
    ${n==="flat"?Ea():Xt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${Je()}
    ${n==="flat"?Ea():Xt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${n==="default"?Xt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:c})=>Yi(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>Yi(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>Yi(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>Yi(c.materialText,0)};
  }
`,bg=H.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Fi=M.forwardRef(({children:n,underline:c=!0,...o},r)=>D.createElement(bg,{ref:r,underline:c,...o},n));Fi.displayName="Anchor";const vg=H.header`
  ${Xt()};
  ${Je()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,mp=M.forwardRef(({children:n,fixed:c=!0,position:o="fixed",...r},d)=>D.createElement(vg,{fixed:c,position:c!==!1?o:void 0,ref:d,...r},n));mp.displayName="AppBar";const Ta=()=>{};function ya(n,c,o){return o!==null&&n>o?o:c!==null&&n<c?c:n}function gg(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),r=o[0].split(".")[1];return(r?r.length:0)+parseInt(o[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function _h(n,c,o){const r=Math.round((n-o)/c)*c+o;return Number(r.toFixed(gg(c)))}function Wl(n){return typeof n=="number"?`${n}px`:n}const yg=H.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:c})=>!n&&`
    border-top: 2px solid ${c.borderDark};
    border-left: 2px solid ${c.borderDark};
    border-bottom: 2px solid ${c.borderLightest};
    border-right: 2px solid ${c.borderLightest};
    background: ${c.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Ag=H.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,bp=M.forwardRef(({alt:n="",children:c,noBorder:o=!1,size:r=35,square:d=!1,src:m,...g},O)=>D.createElement(yg,{noBorder:o,ref:O,size:Wl(r),square:d,src:m,...g},m?D.createElement(Ag,{src:m,alt:n}):c));bp.displayName="Avatar";const de={sm:"28px",md:"36px",lg:"44px"},Sg=P`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>de[n]};
  width: ${({fullWidth:n,size:c="md",square:o})=>n?"100%":o?de[c]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:c})=>n&&!c&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,dc=H.button`
  ${({active:n,disabled:c,primary:o,theme:r,variant:d})=>d==="flat"?P`
          ${Ea()}
          ${o?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!c&&yn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?P`
          ${Je()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!n&&Xt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Xt({style:"buttonThinPressed"})}
          }
          ${n&&Xt({style:"buttonThinPressed"})}
          ${c&&Ke()}
        `:P`
          ${Je()};
          border: none;
          ${c&&Ke()}
          ${n?zu({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?P`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:P`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Xt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&Xt({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!c&&yn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Sg}
`,xl=M.forwardRef(({onClick:n,disabled:c=!1,children:o,type:r="button",fullWidth:d=!1,size:m="md",square:g=!1,active:O=!1,onTouchStart:A=Ta,primary:b=!1,variant:z="default",...w},U)=>D.createElement(dc,{active:O,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:A,primary:b,ref:U,size:m,square:g,type:r,variant:z,...w},o));xl.displayName="Button";function Fl({defaultValue:n,onChange:c,onChangePropName:o="onChange",readOnly:r,value:d,valuePropName:m="value"}){const g=d!==void 0,[O,A]=M.useState(n),b=M.useCallback(z=>{g||A(z)},[g]);if(g&&typeof c!="function"&&!r){const z=`Warning: You provided a \`${m}\` prop to a component without an \`${o}\` handler.${m==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${m}\`.`}`;console.warn(z)}return[g?d:O,b]}const Ko=H.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>de[n.size]};
  width: ${n=>n.square?de[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>de[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:c})=>!c&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&Ke()}
`,Ii=M.forwardRef(({size:n="lg",disabled:c,square:o,children:r,onClick:d,primary:m,...g},O)=>D.createElement(Ko,{$disabled:c,size:n,square:o,onClick:c?void 0:d,primary:m,role:"menuitem",ref:O,"aria-disabled":c,...g},r));Ii.displayName="MenuListItem";const vp=H.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Xt({style:"window"})}
  ${Je()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;vp.displayName="MenuList";const ll=20,nc=H.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ll}px;
  height: ${ll}px;
  opacity: 0;
  z-index: -1;
`,ff=H.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&Ke()}

  ${Ko} & {
    margin: 0;
    height: 100%;
  }
  ${Ko}:hover & {
    ${({$disabled:n,theme:c})=>!n&&P`
        color: ${c.materialTextInvert};
      `};
  }
`,sf=H.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${nc}:focus ~ & {
    ${yn}
  }
  ${nc}:not(:disabled) ~ &:active {
    ${yn}
  }
`,al=H.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:n})=>n.borderDark};
  border-top-color: ${({theme:n})=>n.borderDark};
  border-right-color: ${({theme:n})=>n.borderLightest};
  border-bottom-color: ${({theme:n})=>n.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:n})=>n.borderDarkest};
    border-top-color: ${({theme:n})=>n.borderDarkest};
    border-right-color: ${({theme:n})=>n.borderLight};
    border-bottom-color: ${({theme:n})=>n.borderLight};

    pointer-events: none;
    ${n=>n.shadow&&`box-shadow:${rf};`}
  }
`,xg=H.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${of()}
`,gp=M.forwardRef(({children:n,shadow:c=!0,...o},r)=>D.createElement(al,{ref:r,shadow:c,...o},D.createElement(xg,null,n)));gp.displayName="ScrollView";const yp=P`
  width: ${ll}px;
  height: ${ll}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Eg=H(al)`
  ${yp}
  width: ${ll}px;
  height: ${ll}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,Tg=H.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${yp}
  width: ${ll-4}px;
  height: ${ll-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,Dg=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:n,theme:c})=>n?c.checkmarkDisabled:c.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,Og=H.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>zu({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,zg={flat:Tg,default:Eg},wg=M.forwardRef(({checked:n,className:c="",defaultChecked:o=!1,disabled:r=!1,indeterminate:d=!1,label:m="",onChange:g=Ta,style:O={},value:A,variant:b="default",...z},w)=>{var U;const[Z,J]=Fl({defaultValue:o,onChange:g,readOnly:(U=z.readOnly)!==null&&U!==void 0?U:r,value:n}),tt=M.useCallback(X=>{const q=X.target.checked;J(q),g(X)},[g,J]),F=zg[b];let K=null;return d?K=Og:Z&&(K=Dg),D.createElement(ff,{$disabled:r,className:c,style:O},D.createElement(nc,{disabled:r,onChange:r?void 0:tt,readOnly:r,type:"checkbox",value:A,checked:Z,"data-indeterminate":d,ref:w,...z}),D.createElement(F,{$disabled:r,role:"presentation"},K&&D.createElement(K,{$disabled:r,variant:b})),m&&D.createElement(sf,null,m))});wg.displayName="Checkbox";const df=H.div`
  ${({orientation:n,theme:c,size:o="100%"})=>n==="vertical"?`
    height: ${Wl(o)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${Wl(o)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;df.displayName="Separator";const Rg=H(dc)`
  padding-left: 8px;
`,Mg=H(df)`
  height: 21px;
  position: relative;
  top: 0;
`,Ap=H.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,_g=H.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?P`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:P`
          border: 2px solid ${({theme:c})=>c.materialText};
        `}
  ${Ap}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${yn}
    outline-offset: -8px;
  }
`,Cg=H.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?P`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:P`
          border-top: 6px solid ${({theme:c})=>c.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:n})=>n==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Bg=M.forwardRef(({value:n,defaultValue:c,onChange:o=Ta,disabled:r=!1,variant:d="default",...m},g)=>{var O;const[A,b]=Fl({defaultValue:c,onChange:o,readOnly:(O=m.readOnly)!==null&&O!==void 0?O:r,value:n}),z=w=>{const U=w.target.value;b(U),o(w)};return D.createElement(Rg,{disabled:r,as:"div",variant:d,size:"md"},D.createElement(Ap,{onChange:z,readOnly:r,disabled:r,value:A??"#008080",type:"color",ref:g,...m}),D.createElement(_g,{$disabled:r,color:A??"#008080",role:"presentation"}),d==="default"&&D.createElement(Mg,{orientation:"vertical"}),D.createElement(Cg,{$disabled:r,variant:d}))});Bg.displayName="ColorInput";const Ng=H.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>P`
    width: ${11*n}px;
    height: ${21*n}px;
    margin: ${n}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${zu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${n}px;
      width: ${9*n}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${n}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${n*2}px);
      top: ${2*n}px;
      left: ${n}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${n}px;
      width: ${9*n}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${n}px;
    }
    span.center:after {
      bottom: ${n}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${n}px;
      border-top: ${n}px solid var(--react95-digit-bg-color);
      border-bottom: ${n}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*n}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${n}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${n*2}px);
      top: ${n}px;
      left: ${n*2}px;
    }
  `}
`,Ch=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],$g=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Ug({digit:n=0,pixelSize:c=2,...o}){const r=$g[Number(n)].map((d,m)=>d?`${Ch[m]} active`:Ch[m]);return D.createElement(Ng,{pixelSize:c,...o},r.map((d,m)=>D.createElement("span",{className:d,key:m})))}const Hg=H.div`
  ${Xt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,kg={sm:1,md:2,lg:3,xl:4},Jo=M.forwardRef(({value:n=0,minLength:c=3,size:o="md",...r},d)=>{const m=M.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return D.createElement(Hg,{ref:d,...r},m.map((g,O)=>D.createElement(Ug,{digit:g,pixelSize:kg[o],key:O})))});Jo.displayName="Counter";const Sp=P`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${de.md};
`,jg=H(al).attrs({"data-testid":"variant-default"})`
  ${Sp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,Qg=H.div.attrs({"data-testid":"variant-flat"})`
  ${Ea()}
  ${Sp}
  position: relative;
`,xp=P`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:n})=>n.canvasText};
  ${({disabled:n,variant:c})=>c!=="flat"&&n&&Ke()}
`,qg=H.input`
  ${xp}
  padding: 0 8px;
`,Lg=H.textarea`
  ${xp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>of(n)}
`,hf=M.forwardRef(({className:n,disabled:c=!1,fullWidth:o,onChange:r=Ta,shadow:d=!0,style:m,variant:g="default",...O},A)=>{const b=g==="flat"?Qg:jg,z=M.useMemo(()=>{var w;return O.multiline?D.createElement(Lg,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,variant:g,...O}):D.createElement(qg,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,type:(w=O.type)!==null&&w!==void 0?w:"text",variant:g,...O})},[c,r,O,A,g]);return D.createElement(b,{className:n,fullWidth:o,$disabled:c,shadow:d,style:m},z)});hf.displayName="TextInput";const Yg=H.div`
  display: inline-flex;
  align-items: center;
`,Wo=H(xl)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?P`
          height: calc(50% - 1px);
        `:P`
          height: 50%;
        `}
`,Gg=H.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?P`
          height: calc(${de.md} - 4px);
        `:P`
          height: ${de.md};
          margin-left: 2px;
        `}
`,Bh=H.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${Wo}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?P`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:P`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,Ep=M.forwardRef(({className:n,defaultValue:c,disabled:o=!1,max:r,min:d,onChange:m,readOnly:g,step:O=1,style:A,value:b,variant:z="default",width:w,...U},Z)=>{const[J,tt]=Fl({defaultValue:c,onChange:m,readOnly:g,value:b}),F=M.useCallback(W=>{const I=parseFloat(W.target.value);tt(I)},[tt]),K=M.useCallback(W=>{const I=ya(parseFloat(((J??0)+W).toFixed(2)),d??null,r??null);tt(I),m?.(I)},[r,d,m,tt,J]),X=M.useCallback(()=>{J!==void 0&&m?.(J)},[m,J]),q=M.useCallback(()=>{K(O)},[K,O]),et=M.useCallback(()=>{K(-O)},[K,O]),Y=z==="flat"?"flat":"raised";return D.createElement(Yg,{className:n,style:{...A,width:w!==void 0?Wl(w):"auto"},...U},D.createElement(hf,{value:J,variant:z,onChange:F,disabled:o,type:"number",readOnly:g,ref:Z,fullWidth:!0,onBlur:X}),D.createElement(Gg,{variant:z},D.createElement(Wo,{"data-testid":"increment",variant:Y,disabled:o||g,onClick:q},D.createElement(Bh,{invert:!0})),D.createElement(Wo,{"data-testid":"decrement",variant:Y,disabled:o||g,onClick:et},D.createElement(Bh,null))))});Ep.displayName="NumberInput";function Xg(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let o=0;o<10;o+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const Tp=n=>M.useMemo(()=>Xg(),[n]),Dp=P`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Op=P`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,pf=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Vg=H.div`
  ${Dp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${pf}:focus & {
    ${Op}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,zp=P`
  height: ${de.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?Ke():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Zg=H(al)`
  ${zp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,Kg=H.div`
  ${Ea()}
  ${zp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,Jg=H.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Dp}
  cursor: pointer;
  &:disabled {
    ${Ke()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,wp=H(dc).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?P`
          height: 100%;
          margin-right: 0;
        `:P`
          height: 100%;
        `}
  ${({native:n=!1,variant:c="default"})=>n&&(c==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:c=!1})=>n||c?"none":"auto"}
`,Wg=H.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:n=!1,theme:c})=>n?c.materialTextDisabled:c.materialText};
  ${({$disabled:n=!1,theme:c})=>n&&`
    filter: drop-shadow(1px 1px 0px ${c.materialTextDisabledShadow});
    border-top-color: ${c.materialTextDisabled};
    `}
  ${wp}:active & {
    margin-top: 2px;
  }
`,Fg=H.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:n})=>n.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${cf};
  ${({variant:n="default"})=>n==="flat"?P`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:P`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>of(n)}
`,Ig=H.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${de.md} - 4px);
  line-height: calc(${de.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?Op:""}
  user-select: none;
`,Pg=[],Rp=({className:n,defaultValue:c,disabled:o,native:r,onChange:d,options:m=Pg,readOnly:g,style:O,value:A,variant:b,width:z})=>{var w;const U=M.useMemo(()=>m.filter(Boolean),[m]),[Z,J]=Fl({defaultValue:c??((w=U?.[0])===null||w===void 0?void 0:w.value),onChange:d,readOnly:g,value:A}),tt=!(o||g),F=M.useMemo(()=>({className:n,style:{...O,width:z}}),[n,O,z]),K=M.useMemo(()=>D.createElement(wp,{as:"div","data-testid":"select-button",$disabled:o,native:r,tabIndex:-1,variant:b==="flat"?"flat":"raised"},D.createElement(Wg,{"data-testid":"select-icon",$disabled:o})),[o,r,b]),X=M.useMemo(()=>b==="flat"?Kg:Zg,[b]);return M.useMemo(()=>({isEnabled:tt,options:U,value:Z,setValue:J,wrapperProps:F,DropdownButton:K,Wrapper:X}),[K,X,tt,U,J,Z,F])},ty={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},ey=1e3,ly=({onBlur:n,onChange:c,onClose:o,onFocus:r,onKeyDown:d,onMouseDown:m,onOpen:g,open:O,options:A,readOnly:b,value:z,selectRef:w,setValue:U,wrapperRef:Z})=>{const J=M.useRef(null),tt=M.useRef([]),F=M.useRef(0),K=M.useRef(0),X=M.useRef(),q=M.useRef("search"),et=M.useRef(""),Y=M.useRef(),[W,I]=Fl({defaultValue:!1,onChange:g,onChangePropName:"onOpen",readOnly:b,value:O,valuePropName:"open"}),xt=M.useMemo(()=>{const k=A.findIndex(st=>st.value===z);return F.current=ya(k,0,null),A[k]},[A,z]),[zt,Vt]=M.useState(A[0]),$t=M.useCallback(k=>{const st=J.current,ht=tt.current[k];if(!ht||!st){X.current=k;return}X.current=void 0;const Et=st.clientHeight,_t=st.scrollTop,Zt=st.scrollTop+Et,Kt=ht.offsetTop,ve=ht.offsetHeight,Ft=ht.offsetTop+ht.offsetHeight;Kt<_t&&st.scrollTo(0,Kt),Ft>Zt&&st.scrollTo(0,Kt-Et+ve),ht.focus({preventScroll:!0})},[J]),mt=M.useCallback((k,{scroll:st}={})=>{var ht;const Et=A.length-1;let _t;switch(k){case"first":{_t=0;break}case"last":{_t=Et;break}case"next":{_t=ya(K.current+1,0,Et);break}case"previous":{_t=ya(K.current-1,0,Et);break}case"selected":{_t=ya((ht=F.current)!==null&&ht!==void 0?ht:0,0,Et);break}default:_t=k}K.current=_t,Vt(A[_t]),st&&$t(_t)},[K,A,$t]),Qt=M.useCallback(({fromEvent:k})=>{I(!0),mt("selected",{scroll:!0}),g?.({fromEvent:k})},[mt,g,I]),Ut=M.useCallback(()=>{q.current="search",et.current="",clearTimeout(Y.current)},[]),gt=M.useCallback(({focusSelect:k,fromEvent:st})=>{var ht;o?.({fromEvent:st}),I(!1),Vt(A[0]),Ut(),X.current=void 0,k&&((ht=w.current)===null||ht===void 0||ht.focus())},[Ut,o,A,w,I]),R=M.useCallback(({fromEvent:k})=>{W?gt({focusSelect:!1,fromEvent:k}):Qt({fromEvent:k})},[gt,Qt,W]),L=M.useCallback((k,{fromEvent:st})=>{F.current!==k&&(F.current=k,U(A[k].value),c?.(A[k],{fromEvent:st}))},[c,A,U]),G=M.useCallback(({focusSelect:k,fromEvent:st})=>{L(K.current,{fromEvent:st}),gt({focusSelect:k,fromEvent:st})},[gt,L]),ut=M.useCallback((k,{fromEvent:st,select:ht})=>{var Et;switch(q.current==="cycleFirstLetter"&&k!==et.current&&(q.current="search"),k===et.current?q.current="cycleFirstLetter":et.current+=k,q.current){case"search":{let _t=A.findIndex(Zt=>{var Kt;return((Kt=Zt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(et.current))===0});_t<0&&(_t=A.findIndex(Zt=>{var Kt;return((Kt=Zt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(k))===0}),et.current=k),_t>=0&&(ht?L(_t,{fromEvent:st}):mt(_t,{scroll:!0}));break}case"cycleFirstLetter":{const _t=ht?(Et=F.current)!==null&&Et!==void 0?Et:-1:K.current;let Zt=A.findIndex((Kt,ve)=>{var Ft;return ve>_t&&((Ft=Kt.label)===null||Ft===void 0?void 0:Ft.toLocaleUpperCase().indexOf(k))===0});Zt<0&&(Zt=A.findIndex(Kt=>{var ve;return((ve=Kt.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(k))===0})),Zt>=0&&(ht?L(Zt,{fromEvent:st}):mt(Zt,{scroll:!0}));break}}clearTimeout(Y.current),Y.current=setTimeout(()=>{q.current==="search"&&(et.current="")},ey)},[mt,A,L]),p=M.useCallback(k=>{var st;k.button===0&&(k.preventDefault(),(st=w.current)===null||st===void 0||st.focus(),R({fromEvent:k}),m?.(k))},[m,w,R]),B=M.useCallback(k=>{G({focusSelect:!0,fromEvent:k})},[G]),Q=M.useCallback(k=>{const{altKey:st,code:ht,ctrlKey:Et,metaKey:_t,shiftKey:Zt}=k,{ARROW_DOWN:Kt,ARROW_UP:ve,END:Ft,ENTER:nl,ESC:Ye,HOME:Da,SPACE:El,TAB:Il}=ty,Sn=st||Et||_t||Zt;if(!(ht===Il&&(st||Et||_t)||ht!==Il&&Sn))switch(ht){case Kt:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}mt("next",{scroll:!0});break}case ve:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}mt("previous",{scroll:!0});break}case Ft:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}mt("last",{scroll:!0});break}case nl:{if(!W)return;k.preventDefault(),G({focusSelect:!0,fromEvent:k});break}case Ye:{if(!W)return;k.preventDefault(),gt({focusSelect:!0,fromEvent:k});break}case Da:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}mt("first",{scroll:!0});break}case El:{k.preventDefault(),W?G({focusSelect:!0,fromEvent:k}):Qt({fromEvent:k});break}case Il:{if(!W)return;Zt||k.preventDefault(),G({focusSelect:!Zt,fromEvent:k});break}default:!Sn&&ht.match(/^Key/)&&(k.preventDefault(),k.stopPropagation(),ut(ht.replace(/^Key/,""),{select:!W,fromEvent:k}))}},[mt,gt,W,Qt,ut,G]),N=M.useCallback(k=>{Q(k),d?.(k)},[Q,d]),j=M.useCallback(k=>{mt(k)},[mt]),lt=M.useCallback(k=>{W||(Ut(),n?.(k))},[Ut,n,W]),V=M.useCallback(k=>{Ut(),r?.(k)},[Ut,r]),ot=M.useCallback(k=>{J.current=k,X.current!==void 0&&$t(X.current)},[$t]),dt=M.useCallback((k,st)=>{tt.current[st]=k,X.current===st&&$t(X.current)},[$t]);return M.useEffect(()=>{if(!W)return()=>{};const k=st=>{var ht;const Et=st.target;!((ht=Z.current)===null||ht===void 0)&&ht.contains(Et)||(st.preventDefault(),gt({focusSelect:!1,fromEvent:st}))};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[gt,W,Z]),M.useMemo(()=>({activeOption:zt,handleActivateOptionIndex:j,handleBlur:lt,handleButtonKeyDown:N,handleDropdownKeyDown:Q,handleFocus:V,handleMouseDown:p,handleOptionClick:B,handleSetDropdownRef:ot,handleSetOptionRef:dt,open:W,selectedOption:xt}),[zt,j,lt,N,V,Q,p,B,ot,dt,W,xt])},ay=M.forwardRef(({className:n,defaultValue:c,disabled:o,onChange:r,options:d,readOnly:m,style:g,value:O,variant:A,width:b,...z},w)=>{const{isEnabled:U,options:Z,setValue:J,value:tt,DropdownButton:F,Wrapper:K}=Rp({defaultValue:c,disabled:o,native:!0,onChange:r,options:d,readOnly:m,value:O,variant:A}),X=M.useCallback(q=>{const et=Z.find(Y=>Y.value===q.target.value);et&&(J(et.value),r?.(et,{fromEvent:q}))},[r,Z,J]);return D.createElement(K,{className:n,style:{...g,width:b}},D.createElement(pf,null,D.createElement(Jg,{...z,disabled:o,onChange:U?X:Ta,ref:w,value:tt},Z.map((q,et)=>{var Y;return D.createElement("option",{key:`${q.value}-${et}`,value:q.value},(Y=q.label)!==null&&Y!==void 0?Y:q.value)})),F))});ay.displayName="SelectNative";function ny({activateOptionIndex:n,active:c,index:o,onClick:r,option:d,selected:m,setRef:g}){const O=M.useCallback(()=>{n(o)},[n,o]),A=M.useCallback(z=>{g(z,o)},[o,g]),b=Tp();return D.createElement(Ig,{active:c,"aria-selected":m?"true":void 0,"data-value":d.value,id:b,onClick:r,onMouseEnter:O,ref:A,role:"option",tabIndex:0},d.label)}function uy({"aria-label":n,"aria-labelledby":c,className:o,defaultValue:r,disabled:d=!1,formatDisplay:m,inputProps:g,labelId:O,menuMaxHeight:A,name:b,onBlur:z,onChange:w,onClose:U,onFocus:Z,onKeyDown:J,onMouseDown:tt,onOpen:F,open:K,options:X,readOnly:q,shadow:et=!0,style:Y,variant:W="default",value:I,width:xt="auto",...zt},Vt){const{isEnabled:$t,options:mt,setValue:Qt,value:Ut,wrapperProps:gt,DropdownButton:R,Wrapper:L}=Rp({className:o,defaultValue:r,disabled:d,native:!1,onChange:w,options:X,style:Y,readOnly:q,value:I,variant:W,width:xt}),G=M.useRef(null),ut=M.useRef(null),p=M.useRef(null),{activeOption:B,handleActivateOptionIndex:Q,handleBlur:N,handleButtonKeyDown:j,handleDropdownKeyDown:lt,handleFocus:V,handleMouseDown:ot,handleOptionClick:dt,handleSetDropdownRef:k,handleSetOptionRef:st,open:ht,selectedOption:Et}=ly({onBlur:z,onChange:w,onClose:U,onFocus:Z,onKeyDown:J,onMouseDown:tt,onOpen:F,open:K,options:mt,value:Ut,selectRef:ut,setValue:Qt,wrapperRef:p});M.useImperativeHandle(Vt,()=>({focus:nl=>{var Ye;(Ye=ut.current)===null||Ye===void 0||Ye.focus(nl)},node:G.current,value:String(Ut)}),[Ut]);const _t=M.useMemo(()=>Et?typeof m=="function"?m(Et):Et.label:"",[m,Et]),Zt=$t?1:void 0,Kt=M.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),ve=Tp(),Ft=M.useMemo(()=>mt.map((nl,Ye)=>{const Da=`${Ut}-${Ye}`,El=nl===B,Il=nl===Et;return D.createElement(ny,{activateOptionIndex:Q,active:El,index:Ye,key:Da,onClick:dt,option:nl,selected:Il,setRef:st})}),[B,Q,dt,st,mt,Et,Ut]);return D.createElement(L,{...gt,$disabled:d,ref:p,shadow:et,style:{...Y,width:xt}},D.createElement("input",{name:b,ref:G,type:"hidden",value:String(Ut),...g}),D.createElement(pf,{"aria-disabled":d,"aria-expanded":ht,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??O,"aria-owns":$t&&ht?ve:void 0,onBlur:N,onFocus:V,onKeyDown:j,onMouseDown:$t?ot:tt,ref:ut,role:"button",tabIndex:Zt,...zt},D.createElement(Vg,null,_t),R),$t&&ht&&D.createElement(Fg,{id:ve,onKeyDown:lt,ref:k,role:"listbox",style:Kt,tabIndex:0,variant:W},Ft))}const Mp=M.forwardRef(uy);Mp.displayName="Select";const iy=H.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,Ou=M.forwardRef(function({children:c,noPadding:o=!1,...r},d){return D.createElement(iy,{noPadding:o,ref:d,...r},c)});Ou.displayName="Toolbar";const cy=H.div`
  padding: 16px;
`,mf=M.forwardRef(function({children:c,...o},r){return D.createElement(cy,{ref:r,...o},c)});mf.displayName="WindowContent";const ry=H.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?P`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:P`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${dc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,bf=M.forwardRef(function({active:c=!0,children:o,...r},d){return D.createElement(ry,{active:c,ref:d,...r},o)});bf.displayName="WindowHeader";const oy=H.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Xt({style:"window"})}
  ${Je()}
`,fy=H.span`
  ${({theme:n})=>P`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${n.borderLightest} 16.67%,
      ${n.material} 16.67%,
      ${n.material} 33.33%,
      ${n.borderDark} 33.33%,
      ${n.borderDark} 50%,
      ${n.borderLightest} 50%,
      ${n.borderLightest} 66.67%,
      ${n.material} 66.67%,
      ${n.material} 83.33%,
      ${n.borderDark} 83.33%,
      ${n.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,vf=M.forwardRef(({children:n,resizable:c=!1,resizeRef:o,shadow:r=!0,...d},m)=>D.createElement(oy,{ref:m,shadow:r,...d},n,c&&D.createElement(fy,{"data-testid":"resizeHandle",ref:o})));vf.displayName="Window";const sy=H(gp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,dy=H.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,hy=H.div`
  display: flex;
  flex-wrap: wrap;
`,Al=H.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,py=H.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,my=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function by(n,c){return new Date(n,c+1,0).getDate()}function vy(n,c,o){return new Date(n,c,o).getDay()}function gy(n){const c=new Date(Date.parse(n)),o=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:o,month:r,year:d}}const yy=M.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:o,onCancel:r,shadow:d=!0},m)=>{const[g,O]=M.useState(()=>gy(c)),{year:A,month:b,day:z}=g,w=M.useCallback(({value:F})=>{O(K=>({...K,month:F}))},[]),U=M.useCallback(F=>{O(K=>({...K,year:F}))},[]),Z=M.useCallback(F=>{O(K=>({...K,day:F}))},[]),J=M.useCallback(()=>{const F=[g.year,g.month+1,g.day].map(K=>String(K).padStart(2,"0")).join("-");o?.(F)},[g.day,g.month,g.year,o]),tt=M.useMemo(()=>{const F=Array.from({length:42}),K=vy(A,b,1);let X=z;const q=by(A,b);return X=X<q?X:q,F.forEach((et,Y)=>{if(Y>=K&&Y<q+K){const W=Y-K+1;F[Y]=D.createElement(Al,{key:Y,onClick:()=>{Z(W)}},D.createElement(py,{active:W===X},W))}else F[Y]=D.createElement(Al,{key:Y})}),F},[z,Z,b,A]);return D.createElement(vf,{className:n,ref:m,shadow:d,style:{margin:20}},D.createElement(bf,null,D.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),D.createElement(mf,null,D.createElement(Ou,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(Mp,{options:my,value:b,onChange:w,width:128,menuMaxHeight:200}),D.createElement(Ep,{value:A,onChange:U,width:100})),D.createElement(sy,null,D.createElement(dy,null,D.createElement(Al,null,"S"),D.createElement(Al,null,"M"),D.createElement(Al,null,"T"),D.createElement(Al,null,"W"),D.createElement(Al,null,"T"),D.createElement(Al,null,"F"),D.createElement(Al,null,"S")),D.createElement(hy,null,tt)),D.createElement(Ou,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(xl,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),D.createElement(xl,{fullWidth:!0,onClick:o?J:void 0,disabled:!o},"OK"))))});yy.displayName="DatePicker";const Ay=n=>{switch(n){case"status":case"well":return P`
        ${Xt({style:"status"})}
      `;case"window":case"outside":return P`
        ${Xt({style:"window"})}
      `;case"field":return P`
        ${Xt({style:"field"})}
      `;default:return P`
        ${Xt()}
      `}},Sy=H.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Ay(n)}
  ${({variant:n})=>Je(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,hc=M.forwardRef(({children:n,shadow:c=!1,variant:o="window",...r},d)=>D.createElement(Sy,{ref:d,shadow:c,variant:o,...r},n));hc.displayName="Frame";const xy=H.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&P`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&Ke()}
`,Ey=H.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,Pi=M.forwardRef(({label:n,disabled:c=!1,variant:o="default",children:r,...d},m)=>D.createElement(xy,{"aria-disabled":c,$disabled:c,variant:o,ref:m,...d},n&&D.createElement(Ey,{variant:o},n),r));Pi.displayName="GroupBox";const Ty=H.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Wl(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Ty.displayName="Handle";const Dy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Oy=H.div`
  display: inline-block;
  height: ${({size:n})=>Wl(n)};
  width: ${({size:n})=>Wl(n)};
`,zy=H.span`
  display: block;
  background: ${Dy};
  background-size: cover;
  width: 100%;
  height: 100%;
`,wy=M.forwardRef(({size:n=30,...c},o)=>D.createElement(Oy,{size:n,ref:o,...c},D.createElement(zy,null)));wy.displayName="Hourglass";const Ry=H.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,My=H.div`
  position: relative;
`,_y=H.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:n})=>n.material};
  border-top: 4px solid ${({theme:n})=>n.borderLightest};
  border-left: 4px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 4px solid ${({theme:n})=>n.borderDark};
  border-right: 4px solid ${({theme:n})=>n.borderDark};

  outline: 1px dotted ${({theme:n})=>n.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:n})=>n.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:n})=>n.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Cy=H(al).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,By=H.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:n})=>n.material};
  border-left: 2px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 2px solid ${({theme:n})=>n.borderDarkest};
  border-right: 2px solid ${({theme:n})=>n.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:n})=>n.material};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:n})=>n.material};
    border: 2px solid ${({theme:n})=>n.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:n})=>n.borderLightest},
      1px 1px 0 1px ${({theme:n})=>n.borderDarkest};
  }
`,Ny=M.forwardRef(({backgroundStyles:n,children:c,...o},r)=>D.createElement(Ry,{ref:r,...o},D.createElement(My,null,D.createElement(_y,null,D.createElement(Cy,{style:n},c)),D.createElement(By,null))));Ny.displayName="Monitor";const $y=H.div`
  display: inline-block;
  height: ${de.md};
  width: 100%;
`,Uy=H(al)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,_p=P`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Hy=H.div`
  position: relative;
  top: 4px;
  ${_p}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,ky=H.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${_p}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,jy=H.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Cp=17,Qy=H.span`
  display: inline-block;
  width: ${Cp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,qy=M.forwardRef(({hideValue:n=!1,shadow:c=!0,value:o,variant:r="default",...d},m)=>{const g=n?null:`${o}%`,O=M.useRef(null),[A,b]=M.useState([]),z=M.useCallback(()=>{if(!O.current||o===void 0)return;const w=O.current.getBoundingClientRect().width,U=Math.round(o/100*w/Cp);b(Array.from({length:U}))},[o]);return M.useEffect(()=>(z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)),[z]),D.createElement($y,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:m,role:"progressbar",variant:r,...d},D.createElement(Uy,{variant:r,shadow:c},r==="default"?D.createElement(D.Fragment,null,D.createElement(Hy,{"data-testid":"defaultProgress1"},g),D.createElement(ky,{"data-testid":"defaultProgress2",value:o},g)):D.createElement(jy,{ref:O,"data-testid":"tileProgress"},A.map((w,U)=>D.createElement(Qy,{key:U})))))});qy.displayName="ProgressBar";const Bp=P`
  width: ${ll}px;
  height: ${ll}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ly=H(al)`
  ${Bp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Yy=H.div`
  ${Ea()}
  ${Bp}
  outline: none;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:n})=>n.flatDark};
    border-radius: 50%;
  }
`,Gy=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
`,Xy={flat:Yy,default:Ly},Vy=M.forwardRef(({checked:n,className:c="",disabled:o=!1,label:r="",onChange:d,style:m={},variant:g="default",...O},A)=>{const b=Xy[g];return D.createElement(ff,{$disabled:o,className:c,style:m},D.createElement(b,{$disabled:o,role:"presentation"},n&&D.createElement(Gy,{$disabled:o,variant:g})),D.createElement(nc,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:A,...O}),r&&D.createElement(sf,null,r))});Vy.displayName="Radio";const Zy=typeof window<"u"?M.useLayoutEffect:M.useEffect;function va(n){const c=M.useRef(n);return Zy(()=>{c.current=n}),M.useCallback((...o)=>(0,c.current)(...o),[])}function Nh(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function $h(n,c){return M.useMemo(()=>n==null&&c==null?null:o=>{Nh(n,o),Nh(c,o)},[n,c])}var Ky=Yh();let pc=!0,Fo=!1,Uh;const Jy={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Wy(n){if("type"in n){const{type:c,tagName:o}=n;if(o==="INPUT"&&Jy[c]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function Fy(n){n.metaKey||n.altKey||n.ctrlKey||(pc=!0)}function Ho(){pc=!1}function Iy(){this.visibilityState==="hidden"&&Fo&&(pc=!0)}function Py(n){n.addEventListener("keydown",Fy,!0),n.addEventListener("mousedown",Ho,!0),n.addEventListener("pointerdown",Ho,!0),n.addEventListener("touchstart",Ho,!0),n.addEventListener("visibilitychange",Iy,!0)}function t1(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return pc||Wy(c)}function e1(){Fo=!0,window.clearTimeout(Uh),Uh=window.setTimeout(()=>{Fo=!1},100)}function l1(){const n=M.useCallback(c=>{const o=Ky.findDOMNode(c);o!=null&&Py(o.ownerDocument)},[]);return{isFocusVisible:t1,onBlurVisible:e1,ref:n}}function a1(n,c,o){return(o-c)*n+c}function Gi(n,c){if(c!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const r=n.changedTouches[o];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Xi(n){return n&&n.ownerDocument||document}function n1(n,c){var o;const{index:r}=(o=n.reduce((d,m,g)=>{const O=Math.abs(c-m);return d===null||O<d.distance||O===d.distance?{distance:O,index:g}:d},null))!==null&&o!==void 0?o:{};return r??-1}const u1=H.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:n})=>n?"41px":"39px"};
    ${({isFocused:n,theme:c})=>n&&`
        outline: 2px dotted ${c.materialText};
        `}
  }

  ${({orientation:n,size:c})=>n==="vertical"?P`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:P`
          width: ${c};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,Np=()=>P`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?P`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:P`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,i1=H(al)`
  ${Np()}
`,c1=H(al)`
  ${Np()}

  border-left-color: ${({theme:n})=>n.flatLight};
  border-top-color: ${({theme:n})=>n.flatLight};
  border-right-color: ${({theme:n})=>n.canvas};
  border-bottom-color: ${({theme:n})=>n.canvas};
  &:before {
    border-left-color: ${({theme:n})=>n.flatDark};
    border-top-color: ${({theme:n})=>n.flatDark};
    border-right-color: ${({theme:n})=>n.flatLight};
    border-bottom-color: ${({theme:n})=>n.flatLight};
  }
`,r1=H.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?P`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:P`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?P`
          ${Ea()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:P`
          ${Je()}
          ${Xt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&zu({mainColor:c.material,secondaryColor:c.borderLightest})}
`,uc=6,o1=H.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?P`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${uc}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:P`
          bottom: ${-6}px;
          height: ${uc}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&P`
      ${Ke()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}
`,f1=H.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?P`
          transform: translate(${uc+2}px, ${uc+1}px);
        `:P`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,s1=M.forwardRef(({defaultValue:n,disabled:c=!1,marks:o=!1,max:r=100,min:d=0,name:m,onChange:g,onChangeCommitted:O,onMouseDown:A,orientation:b="horizontal",size:z="100%",step:w=1,value:U,variant:Z="default",...J},tt)=>{const F=Z==="flat"?c1:i1,K=b==="vertical",[X=d,q]=Fl({defaultValue:n,onChange:g??O,value:U}),{isFocusVisible:et,onBlurVisible:Y,ref:W}=l1(),[I,xt]=M.useState(!1),zt=M.useRef(),Vt=M.useRef(null),$t=$h(W,zt),mt=$h(tt,$t),Qt=va(N=>{et(N)&&xt(!0)}),Ut=va(()=>{I!==!1&&(xt(!1),Y())}),gt=M.useRef(),R=M.useMemo(()=>o===!0&&Number.isFinite(w)?[...Array(Math.round((r-d)/w)+1)].map((N,j)=>({label:void 0,value:d+w*j})):Array.isArray(o)?o:[],[o,r,d,w]),L=va(N=>{const j=(r-d)/10,lt=R.map(dt=>dt.value),V=lt.indexOf(X);let ot=0;switch(N.key){case"Home":ot=d;break;case"End":ot=r;break;case"PageUp":w&&(ot=X+j);break;case"PageDown":w&&(ot=X-j);break;case"ArrowRight":case"ArrowUp":w?ot=X+w:ot=lt[V+1]||lt[lt.length-1];break;case"ArrowLeft":case"ArrowDown":w?ot=X-w:ot=lt[V-1]||lt[0];break;default:return}N.preventDefault(),w&&(ot=_h(ot,w,d)),ot=ya(ot,d,r),q(ot),xt(!0),g?.(ot),O?.(ot)}),G=M.useCallback(N=>{if(!zt.current)return 0;const j=zt.current.getBoundingClientRect();let lt;K?lt=(j.bottom-N.y)/j.height:lt=(N.x-j.left)/j.width;let V;if(V=a1(lt,d,r),w)V=_h(V,w,d);else{const ot=R.map(k=>k.value),dt=n1(ot,V);V=ot[dt]}return V=ya(V,d,r),V},[R,r,d,w,K]),ut=va(N=>{var j;const lt=Gi(N,gt.current);if(!lt)return;const V=G(lt);(j=Vt.current)===null||j===void 0||j.focus(),q(V),xt(!0),g?.(V)}),p=va(N=>{const j=Gi(N,gt.current);if(!j)return;const lt=G(j);O?.(lt),gt.current=void 0;const V=Xi(zt.current);V.removeEventListener("mousemove",ut),V.removeEventListener("mouseup",p),V.removeEventListener("touchmove",ut),V.removeEventListener("touchend",p)}),B=va(N=>{var j;A?.(N),N.preventDefault(),(j=Vt.current)===null||j===void 0||j.focus(),xt(!0);const lt=Gi(N,gt.current);if(lt){const ot=G(lt);q(ot),g?.(ot)}const V=Xi(zt.current);V.addEventListener("mousemove",ut),V.addEventListener("mouseup",p)}),Q=va(N=>{var j;N.preventDefault();const lt=N.changedTouches[0];lt!=null&&(gt.current=lt.identifier),(j=Vt.current)===null||j===void 0||j.focus(),xt(!0);const V=Gi(N,gt.current);if(V){const dt=G(V);q(dt),g?.(dt)}const ot=Xi(zt.current);ot.addEventListener("touchmove",ut),ot.addEventListener("touchend",p)});return M.useEffect(()=>{const{current:N}=zt;N?.addEventListener("touchstart",Q);const j=Xi(N);return()=>{N?.removeEventListener("touchstart",Q),j.removeEventListener("mousemove",ut),j.removeEventListener("mouseup",p),j.removeEventListener("touchmove",ut),j.removeEventListener("touchend",p)}},[p,ut,Q]),D.createElement(u1,{$disabled:c,hasMarks:!!R.length,isFocused:I,onMouseDown:B,orientation:b,ref:mt,size:Wl(z),...J},D.createElement("input",{disabled:c,name:m,type:"hidden",value:X??0}),R&&R.map(N=>D.createElement(o1,{$disabled:c,"data-testid":"tick",key:N.value/(r-d)*100,orientation:b,style:{[K?"bottom":"left"]:`${(N.value-d)/(r-d)*100}%`}},N.label&&D.createElement(f1,{"aria-hidden":!0,"data-testid":"mark",orientation:b},N.label))),D.createElement(F,{orientation:b,variant:Z}),D.createElement(r1,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":b,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":X,onBlur:Ut,onFocus:Qt,onKeyDown:L,orientation:b,ref:Vt,role:"slider",style:{[K?"bottom":"left"]:`${(K?-100:0)+100*(X-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:Z}))});s1.displayName="Slider";const d1=H.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${rf};
  overflow-y: auto;
`,h1=M.forwardRef(function({children:c,...o},r){return D.createElement(d1,{ref:r,...o},c)});h1.displayName="TableBody";const p1=H.td`
  padding: 0 8px;
`,m1=M.forwardRef(function({children:c,...o},r){return D.createElement(p1,{ref:r,...o},c)});m1.displayName="TableDataCell";const b1=H.thead`
  display: table-header-group;
`,v1=M.forwardRef(function({children:c,...o},r){return D.createElement(b1,{ref:r,...o},c)});v1.displayName="TableHead";const g1=H.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:n})=>n.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Xt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&P`
      &:active {
        &:before {
          ${Xt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:n})=>n.materialText};
  ${({$disabled:n})=>n&&Ke()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&Ke()}
  }
`,y1=M.forwardRef(function({disabled:c=!1,children:o,onClick:r,onTouchStart:d=Ta,sort:m,...g},O){const A=m==="asc"?"ascending":m==="desc"?"descending":void 0;return D.createElement(g1,{$disabled:c,"aria-disabled":c,"aria-sort":A,onClick:c?void 0:r,onTouchStart:c?void 0:d,ref:O,...g},D.createElement("div",null,o))});y1.displayName="TableHeadCell";const A1=H.tr`
  color: inherit;
  display: table-row;
  height: calc(${de.md} - 2px);
  line-height: calc(${de.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,S1=M.forwardRef(function({children:c,...o},r){return D.createElement(A1,{ref:r,...o},c)});S1.displayName="TableRow";const x1=H.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,E1=H(al)`
  &:before {
    box-shadow: none;
  }
`,T1=M.forwardRef(({children:n,...c},o)=>D.createElement(E1,null,D.createElement(x1,{ref:o,...c},n)));T1.displayName="Table";const D1=H.button`
  ${Je()}
  ${Xt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${de.md};
  line-height: ${de.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${yn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${de.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,O1=M.forwardRef(({value:n,onClick:c,selected:o=!1,children:r,...d},m)=>D.createElement(D1,{"aria-selected":o,selected:o,onClick:g=>c?.(n,g),ref:m,role:"tab",...d},r));O1.displayName="Tab";const z1=H.div`
  ${Je()}
  ${Xt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,w1=M.forwardRef(({children:n,...c},o)=>D.createElement(z1,{ref:o,...c},n));w1.displayName="TabBody";const R1=H.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,M1=H.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
  }
`;function _1(n,c){const o=[];for(let r=c;r>0;r-=1)o.push(n.splice(0,Math.ceil(n.length/r)));return o}const C1=M.forwardRef(({value:n,onChange:c=Ta,children:o,rows:r=1,...d},m)=>{const g=M.useMemo(()=>{var O;const A=(O=D.Children.map(o,w=>{if(!D.isValidElement(w))return null;const U={selected:w.props.value===n,onClick:c};return D.cloneElement(w,U)}))!==null&&O!==void 0?O:[],b=_1(A,r).map((w,U)=>({key:U,tabs:w})),z=b.findIndex(w=>w.tabs.some(U=>U.props.selected));return b.push(b.splice(z,1)[0]),b},[o,c,r,n]);return D.createElement(R1,{...d,isMultiRow:r>1,role:"tablist",ref:m},g.map(O=>D.createElement(M1,{key:O.key},O.tabs)))});C1.displayName="Tabs";const B1=["blur","focus"],N1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Hh(n){return"nativeEvent"in n&&B1.includes(n.type)}function kh(n){return"nativeEvent"in n&&N1.includes(n.type)}const $1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},U1=H.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${cf};
  text-align: center;
  font-size: 1rem;
  ${n=>$1[n.position]}
`,H1=H.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,k1=M.forwardRef(({className:n,children:c,disableFocusListener:o=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:m=0,onBlur:g,onClose:O,onFocus:A,onMouseEnter:b,onMouseLeave:z,onOpen:w,style:U,text:Z,position:J="top",...tt},F)=>{const[K,X]=M.useState(!1),[q,et]=M.useState(),[Y,W]=M.useState(),I=!o,xt=!r,zt=G=>{window.clearTimeout(q),window.clearTimeout(Y);const ut=window.setTimeout(()=>{X(!0),w?.(G)},d);et(ut)},Vt=G=>{G.persist(),Hh(G)?A?.(G):kh(G)&&b?.(G),zt(G)},$t=G=>{window.clearTimeout(q),window.clearTimeout(Y);const ut=window.setTimeout(()=>{X(!1),O?.(G)},m);W(ut)},mt=G=>{G.persist(),Hh(G)?g?.(G):kh(G)&&z?.(G),$t(G)},Qt=I?mt:void 0,Ut=I?Vt:void 0,gt=xt?Vt:void 0,R=xt?mt:void 0,L=I?0:void 0;return D.createElement(H1,{"data-testid":"tooltip-wrapper",onBlur:Qt,onFocus:Ut,onMouseEnter:gt,onMouseLeave:R,tabIndex:L},D.createElement(U1,{className:n,"data-testid":"tooltip",position:J,ref:F,show:K,style:U,...tt},Z),c)});k1.displayName="Tooltip";const Io=H(sf)`
  white-space: nowrap;
`,$p=P`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":P`
          cursor: pointer;

          :focus {
            ${Io} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,j1=H.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&P`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:c})=>c.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:n})=>n.borderDark};
      font-size: 12px;
    }
  }
`,Q1=H.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?P`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `:P`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:n})=>n.borderDark};
    }
  }
`,q1=H.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,L1=H.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${$p};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,jh=H(ff)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${$p};
`,Y1=H.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Qh(n,c){return n.includes(c)?n.filter(o=>o!==c):[...n,c]}function qh(n){n.preventDefault()}function Up({className:n,disabled:c,expanded:o,innerRef:r,level:d,select:m,selected:g,style:O,tree:A=[]}){const b=d===0,z=M.useCallback(w=>{var U,Z;const J=!!(w.items&&w.items.length>0),tt=o.includes(w.id),F=(U=c||w.disabled)!==null&&U!==void 0?U:!1,K=F?qh:Y=>m(Y,w),X=F?qh:Y=>m(Y,w),q=g===w.id,et=D.createElement(Y1,{"aria-hidden":!0},w.icon);return D.createElement(Q1,{key:w.label,isRootLevel:b,role:"treeitem","aria-expanded":tt,"aria-selected":q,hasItems:J},J?D.createElement(q1,{open:tt},D.createElement(L1,{onClick:K,$disabled:F},D.createElement(jh,{$disabled:F},et,D.createElement(Io,null,w.label))),tt&&D.createElement(Up,{className:n,disabled:F,expanded:o,level:d+1,select:m,selected:g,style:O,tree:(Z=w.items)!==null&&Z!==void 0?Z:[]})):D.createElement(jh,{as:"button",$disabled:F,onClick:X},et,D.createElement(Io,null,w.label)))},[n,c,o,b,d,m,g,O]);return D.createElement(j1,{className:b?n:void 0,style:b?O:void 0,ref:b?r:void 0,role:b?"tree":"group",isRootLevel:b},A.map(z))}function G1({className:n,defaultExpanded:c=[],defaultSelected:o,disabled:r=!1,expanded:d,onNodeSelect:m,onNodeToggle:g,selected:O,style:A,tree:b=[]},z){const[w,U]=Fl({defaultValue:c,onChange:g,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[Z,J]=Fl({defaultValue:o,onChange:m,onChangePropName:"onNodeSelect",value:O,valuePropName:"selected"}),tt=M.useCallback((X,q)=>{if(g){const et=Qh(w,q);g(X,et)}U(et=>Qh(et,q))},[w,g,U]),F=M.useCallback((X,q)=>{J(q),m&&m(X,q)},[m,J]),K=M.useCallback((X,q)=>{X.preventDefault(),F(X,q.id),q.items&&q.items.length&&tt(X,q.id)},[F,tt]);return D.createElement(Up,{className:n,disabled:r,expanded:w,level:0,innerRef:z,select:K,selected:Z,style:A,tree:b})}const X1=M.forwardRef(G1);X1.displayName="TreeView";const V1="/assets/dcg_santa-cruz_logo-CfPtDLvT.png";var ko,Lh;function Z1(){if(Lh)return ko;Lh=1;var n={name:"vaporTeal",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLightest:"#58ffff",canvas:"#98DFEA",canvasText:"#000000",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#00706f",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#FCF6BD",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",hoverBackground:"#FF99C8",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",tooltip:"#fefbcc"};return ko=n,ko}var K1=Z1();const J1=Po(K1),W1="/assets/ms_sans_serif-Du8rjN1q.woff2",F1="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",I1=dg`
  ${fv}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${W1}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${F1}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;function P1(){const[n,c]=M.useState(!1);return rt.jsx(mp,{children:rt.jsxs(Ou,{style:{justifyContent:"space-between"},children:[rt.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[rt.jsxs(xl,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:[rt.jsx("img",{src:"",alt:"",style:{height:"20px",marginRight:4}}),"Start"]}),n&&rt.jsxs(vp,{style:{position:"absolute",left:"0",top:"100%"},onClick:()=>c(!1),children:[rt.jsx(Ii,{children:rt.jsx("span",{role:"img","aria-label":"👨‍💻",children:"👨‍💻 Made with"})}),rt.jsx(Ii,{children:rt.jsx("span",{role:"img","aria-label":"📁",children:"📁 React95"})}),rt.jsx(df,{}),rt.jsxs(Ii,{disabled:!0,children:[rt.jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]})]})]}),rt.jsx(hf,{placeholder:"Search...",width:150})]})})}function tA(){return rt.jsx(hc,{className:"logo",children:rt.jsx(bp,{noBorder:!0,square:!0,size:150,src:V1})})}function eA(){const[n,c]=M.useState(0),o=()=>c(n+1);return rt.jsxs(hc,{className:"counter",children:[rt.jsx(Jo,{value:831,minLength:5,size:"lg"}),rt.jsxs("div",{className:"interactive-counter",children:[rt.jsx(Jo,{value:n,minLength:3}),rt.jsx(xl,{onClick:o,children:"Click!"})]})]})}const lA=()=>rt.jsxs("div",{className:"screen",children:[rt.jsx(I1,{}),rt.jsxs(og,{theme:J1,children:[rt.jsx(P1,{}),rt.jsxs(vf,{resizable:!0,className:"window",children:[rt.jsx(bf,{className:"window-title",children:rt.jsx("span",{children:"DCG-Santa-Cruz.exe"})}),rt.jsxs(Ou,{children:[rt.jsx(xl,{variant:"menu",size:"sm",children:"File"}),rt.jsx(xl,{variant:"menu",size:"sm",children:"Edit"}),rt.jsx(xl,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),rt.jsxs(mf,{children:[rt.jsx(Pi,{label:"Welcome to DCG Santa Cruz",children:"Formerly DC831 and now under new management, our goal is to bring a DEF CON mindset and unite ethical hackers year round."}),rt.jsx("br",{}),rt.jsx(Pi,{label:"Our Mission",children:"Share knowledge, skillsets, and passion for making and hacking in a safe, inclusive space for all levels – from first-timers to seasoned InfoSec professionals. Whether you are into lockpicking, hardware hacking, OSINT, reverse engineering, red teaming or blue teaming - there is a place for you here."}),rt.jsx("br",{}),rt.jsxs(Pi,{label:"Join Us",children:["Interested in joining our band of merry hackers?",rt.jsx("br",{}),rt.jsx("br",{}),rt.jsx(Fi,{href:"https://forms.gle/piGX4aVSs5yKFpRc6",target:"_blank",children:"Let us know here"}),", or send us an ",rt.jsx(Fi,{href:"mailto:dcgsantacruzorg@gmail.com",children:"email"}),"."]}),rt.jsx("br",{}),rt.jsxs(hc,{variant:"well",className:"footer",children:["Just another ",rt.jsx(Fi,{href:"https://forum.defcon.org/social-groups",target:"_blank",children:"DEF CON Group"})]})]})]}),rt.jsxs("div",{children:[rt.jsx(tA,{}),rt.jsx(eA,{})]})]})]});ov.createRoot(document.getElementById("root")).render(rt.jsx(D.StrictMode,{children:rt.jsx(lA,{})}));
