(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function Ko(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Eo={exports:{}},yu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function Vb(){if(eh)return yu;eh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,m){var g=null;if(m!==void 0&&(g=""+m),d.key!==void 0&&(g=""+d.key),"key"in d){m={};for(var O in d)O!=="key"&&(m[O]=d[O])}else m=d;return d=m.ref,{$$typeof:n,type:r,key:g,ref:d!==void 0?d:null,props:m}}return yu.Fragment=c,yu.jsx=o,yu.jsxs=o,yu}var lh;function Zb(){return lh||(lh=1,Eo.exports=Vb()),Eo.exports}var be=Zb(),To={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function Kb(){if(ah)return ht;ah=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),R=Symbol.iterator;function U(p){return p===null||typeof p!="object"?null:(p=R&&p[R]||p["@@iterator"],typeof p=="function"?p:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,tt={};function F(p,B,q){this.props=p,this.context=B,this.refs=tt,this.updater=q||Z}F.prototype.isReactComponent={},F.prototype.setState=function(p,B){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,B,"setState")},F.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function K(){}K.prototype=F.prototype;function X(p,B,q){this.props=p,this.context=B,this.refs=tt,this.updater=q||Z}var L=X.prototype=new K;L.constructor=X,J(L,F.prototype),L.isPureReactComponent=!0;var et=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function I(p,B,q,N,Q,lt){return q=lt.ref,{$$typeof:n,type:p,key:B,ref:q!==void 0?q:null,props:lt}}function St(p,B){return I(p.type,B,void 0,void 0,void 0,p.props)}function Ot(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Xt(p){var B={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(q){return B[q]})}var Nt=/\/+/g;function pt(p,B){return typeof p=="object"&&p!==null&&p.key!=null?Xt(""+p.key):B.toString(36)}function Qt(){}function $t(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Qt,Qt):(p.status="pending",p.then(function(B){p.status==="pending"&&(p.status="fulfilled",p.value=B)},function(B){p.status==="pending"&&(p.status="rejected",p.reason=B)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function vt(p,B,q,N,Q){var lt=typeof p;(lt==="undefined"||lt==="boolean")&&(p=null);var V=!1;if(p===null)V=!0;else switch(lt){case"bigint":case"string":case"number":V=!0;break;case"object":switch(p.$$typeof){case n:case c:V=!0;break;case z:return V=p._init,vt(V(p._payload),B,q,N,Q)}}if(V)return Q=Q(p),V=N===""?"."+pt(p,0):N,et(Q)?(q="",V!=null&&(q=V.replace(Nt,"$&/")+"/"),vt(Q,B,q,"",function(k){return k})):Q!=null&&(Ot(Q)&&(Q=St(Q,q+(Q.key==null||p&&p.key===Q.key?"":(""+Q.key).replace(Nt,"$&/")+"/")+V)),B.push(Q)),1;V=0;var rt=N===""?".":N+":";if(et(p))for(var st=0;st<p.length;st++)N=p[st],lt=rt+pt(N,st),V+=vt(N,B,q,lt,Q);else if(st=U(p),typeof st=="function")for(p=st.call(p),st=0;!(N=p.next()).done;)N=N.value,lt=rt+pt(N,st++),V+=vt(N,B,q,lt,Q);else if(lt==="object"){if(typeof p.then=="function")return vt($t(p),B,q,N,Q);throw B=String(p),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return V}function w(p,B,q){if(p==null)return p;var N=[],Q=0;return vt(p,N,"","",function(lt){return B.call(q,lt,Q++)}),N}function Y(p){if(p._status===-1){var B=p._result;B=B(),B.then(function(q){(p._status===0||p._status===-1)&&(p._status=1,p._result=q)},function(q){(p._status===0||p._status===-1)&&(p._status=2,p._result=q)}),p._status===-1&&(p._status=0,p._result=B)}if(p._status===1)return p._result.default;throw p._result}var j=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function ut(){}return ht.Children={map:w,forEach:function(p,B,q){w(p,function(){B.apply(this,arguments)},q)},count:function(p){var B=0;return w(p,function(){B++}),B},toArray:function(p){return w(p,function(B){return B})||[]},only:function(p){if(!Ot(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},ht.Component=F,ht.Fragment=o,ht.Profiler=d,ht.PureComponent=X,ht.StrictMode=r,ht.Suspense=A,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ht.__COMPILER_RUNTIME={__proto__:null,c:function(p){return G.H.useMemoCache(p)}},ht.cache=function(p){return function(){return p.apply(null,arguments)}},ht.cloneElement=function(p,B,q){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var N=J({},p.props),Q=p.key,lt=void 0;if(B!=null)for(V in B.ref!==void 0&&(lt=void 0),B.key!==void 0&&(Q=""+B.key),B)!W.call(B,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&B.ref===void 0||(N[V]=B[V]);var V=arguments.length-2;if(V===1)N.children=q;else if(1<V){for(var rt=Array(V),st=0;st<V;st++)rt[st]=arguments[st+2];N.children=rt}return I(p.type,Q,void 0,void 0,lt,N)},ht.createContext=function(p){return p={$$typeof:g,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:m,_context:p},p},ht.createElement=function(p,B,q){var N,Q={},lt=null;if(B!=null)for(N in B.key!==void 0&&(lt=""+B.key),B)W.call(B,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(Q[N]=B[N]);var V=arguments.length-2;if(V===1)Q.children=q;else if(1<V){for(var rt=Array(V),st=0;st<V;st++)rt[st]=arguments[st+2];Q.children=rt}if(p&&p.defaultProps)for(N in V=p.defaultProps,V)Q[N]===void 0&&(Q[N]=V[N]);return I(p,lt,void 0,void 0,null,Q)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(p){return{$$typeof:O,render:p}},ht.isValidElement=Ot,ht.lazy=function(p){return{$$typeof:z,_payload:{_status:-1,_result:p},_init:Y}},ht.memo=function(p,B){return{$$typeof:b,type:p,compare:B===void 0?null:B}},ht.startTransition=function(p){var B=G.T,q={};G.T=q;try{var N=p(),Q=G.S;Q!==null&&Q(q,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(ut,j)}catch(lt){j(lt)}finally{G.T=B}},ht.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ht.use=function(p){return G.H.use(p)},ht.useActionState=function(p,B,q){return G.H.useActionState(p,B,q)},ht.useCallback=function(p,B){return G.H.useCallback(p,B)},ht.useContext=function(p){return G.H.useContext(p)},ht.useDebugValue=function(){},ht.useDeferredValue=function(p,B){return G.H.useDeferredValue(p,B)},ht.useEffect=function(p,B,q){var N=G.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(p,B)},ht.useId=function(){return G.H.useId()},ht.useImperativeHandle=function(p,B,q){return G.H.useImperativeHandle(p,B,q)},ht.useInsertionEffect=function(p,B){return G.H.useInsertionEffect(p,B)},ht.useLayoutEffect=function(p,B){return G.H.useLayoutEffect(p,B)},ht.useMemo=function(p,B){return G.H.useMemo(p,B)},ht.useOptimistic=function(p,B){return G.H.useOptimistic(p,B)},ht.useReducer=function(p,B,q){return G.H.useReducer(p,B,q)},ht.useRef=function(p){return G.H.useRef(p)},ht.useState=function(p){return G.H.useState(p)},ht.useSyncExternalStore=function(p,B,q){return G.H.useSyncExternalStore(p,B,q)},ht.useTransition=function(){return G.H.useTransition()},ht.version="19.1.0",ht}var nh;function Jo(){return nh||(nh=1,To.exports=Kb()),To.exports}var M=Jo();const D=Ko(M);var Do={exports:{}},Au={},Oo={exports:{}},zo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function Jb(){return uh||(uh=1,function(n){function c(w,Y){var j=w.length;w.push(Y);t:for(;0<j;){var ut=j-1>>>1,p=w[ut];if(0<d(p,Y))w[ut]=Y,w[j]=p,j=ut;else break t}}function o(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var Y=w[0],j=w.pop();if(j!==Y){w[0]=j;t:for(var ut=0,p=w.length,B=p>>>1;ut<B;){var q=2*(ut+1)-1,N=w[q],Q=q+1,lt=w[Q];if(0>d(N,j))Q<p&&0>d(lt,N)?(w[ut]=lt,w[Q]=j,ut=Q):(w[ut]=N,w[q]=j,ut=q);else if(Q<p&&0>d(lt,j))w[ut]=lt,w[Q]=j,ut=Q;else break t}}return Y}function d(w,Y){var j=w.sortIndex-Y.sortIndex;return j!==0?j:w.id-Y.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var g=Date,O=g.now();n.unstable_now=function(){return g.now()-O}}var A=[],b=[],z=1,R=null,U=3,Z=!1,J=!1,tt=!1,F=!1,K=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function et(w){for(var Y=o(b);Y!==null;){if(Y.callback===null)r(b);else if(Y.startTime<=w)r(b),Y.sortIndex=Y.expirationTime,c(A,Y);else break;Y=o(b)}}function G(w){if(tt=!1,et(w),!J)if(o(A)!==null)J=!0,W||(W=!0,pt());else{var Y=o(b);Y!==null&&vt(G,Y.startTime-w)}}var W=!1,I=-1,St=5,Ot=-1;function Xt(){return F?!0:!(n.unstable_now()-Ot<St)}function Nt(){if(F=!1,W){var w=n.unstable_now();Ot=w;var Y=!0;try{t:{J=!1,tt&&(tt=!1,X(I),I=-1),Z=!0;var j=U;try{e:{for(et(w),R=o(A);R!==null&&!(R.expirationTime>w&&Xt());){var ut=R.callback;if(typeof ut=="function"){R.callback=null,U=R.priorityLevel;var p=ut(R.expirationTime<=w);if(w=n.unstable_now(),typeof p=="function"){R.callback=p,et(w),Y=!0;break e}R===o(A)&&r(A),et(w)}else r(A);R=o(A)}if(R!==null)Y=!0;else{var B=o(b);B!==null&&vt(G,B.startTime-w),Y=!1}}break t}finally{R=null,U=j,Z=!1}Y=void 0}}finally{Y?pt():W=!1}}}var pt;if(typeof L=="function")pt=function(){L(Nt)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,$t=Qt.port2;Qt.port1.onmessage=Nt,pt=function(){$t.postMessage(null)}}else pt=function(){K(Nt,0)};function vt(w,Y){I=K(function(){w(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(w){w.callback=null},n.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<w?Math.floor(1e3/w):5},n.unstable_getCurrentPriorityLevel=function(){return U},n.unstable_next=function(w){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var j=U;U=Y;try{return w()}finally{U=j}},n.unstable_requestPaint=function(){F=!0},n.unstable_runWithPriority=function(w,Y){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var j=U;U=w;try{return Y()}finally{U=j}},n.unstable_scheduleCallback=function(w,Y,j){var ut=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ut+j:ut):j=ut,w){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=j+p,w={id:z++,callback:Y,priorityLevel:w,startTime:j,expirationTime:p,sortIndex:-1},j>ut?(w.sortIndex=j,c(b,w),o(A)===null&&w===o(b)&&(tt?(X(I),I=-1):tt=!0,vt(G,j-ut))):(w.sortIndex=p,c(A,w),J||Z||(J=!0,W||(W=!0,pt()))),w},n.unstable_shouldYield=Xt,n.unstable_wrapCallback=function(w){var Y=U;return function(){var j=U;U=Y;try{return w.apply(this,arguments)}finally{U=j}}}}(zo)),zo}var ih;function Wb(){return ih||(ih=1,Oo.exports=Jb()),Oo.exports}var Ro={exports:{}},pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function Fb(){if(ch)return pe;ch=1;var n=Jo();function c(A){var b="https://react.dev/errors/"+A;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)b+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+A+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(A,b,z){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:A,containerInfo:b,implementation:z}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(A,b){if(A==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,pe.createPortal=function(A,b){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return m(A,b,null,z)},pe.flushSync=function(A){var b=g.T,z=r.p;try{if(g.T=null,r.p=2,A)return A()}finally{g.T=b,r.p=z,r.d.f()}},pe.preconnect=function(A,b){typeof A=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,r.d.C(A,b))},pe.prefetchDNS=function(A){typeof A=="string"&&r.d.D(A)},pe.preinit=function(A,b){if(typeof A=="string"&&b&&typeof b.as=="string"){var z=b.as,R=O(z,b.crossOrigin),U=typeof b.integrity=="string"?b.integrity:void 0,Z=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;z==="style"?r.d.S(A,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:R,integrity:U,fetchPriority:Z}):z==="script"&&r.d.X(A,{crossOrigin:R,integrity:U,fetchPriority:Z,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},pe.preinitModule=function(A,b){if(typeof A=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var z=O(b.as,b.crossOrigin);r.d.M(A,{crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&r.d.M(A)},pe.preload=function(A,b){if(typeof A=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var z=b.as,R=O(z,b.crossOrigin);r.d.L(A,z,{crossOrigin:R,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},pe.preloadModule=function(A,b){if(typeof A=="string")if(b){var z=O(b.as,b.crossOrigin);r.d.m(A,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else r.d.m(A)},pe.requestFormReset=function(A){r.d.r(A)},pe.unstable_batchedUpdates=function(A,b){return A(b)},pe.useFormState=function(A,b,z){return g.H.useFormState(A,b,z)},pe.useFormStatus=function(){return g.H.useHostTransitionStatus()},pe.version="19.1.0",pe}var rh;function Uh(){if(rh)return Ro.exports;rh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Ro.exports=Fb(),Ro.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function Ib(){if(oh)return Au;oh=1;var n=Wb(),c=Jo(),o=Uh();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(m(t)!==t)throw Error(r(188))}function A(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return O(u),t;if(i===a)return O(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var f=!1,s=u.child;s;){if(s===l){f=!0,l=u,a=i;break}if(s===a){f=!0,a=u,l=i;break}s=s.sibling}if(!f){for(s=i.child;s;){if(s===l){f=!0,l=i,a=u;break}if(s===a){f=!0,a=i,l=u;break}s=s.sibling}if(!f)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var z=Object.assign,R=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),L=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),Xt=Symbol.for("react.memo_cache_sentinel"),Nt=Symbol.iterator;function pt(t){return t===null||typeof t!="object"?null:(t=Nt&&t[Nt]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Symbol.for("react.client.reference");function $t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Qt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case F:return"Profiler";case tt:return"StrictMode";case G:return"Suspense";case W:return"SuspenseList";case Ot:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case L:return(t.displayName||"Context")+".Provider";case X:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:$t(t.type)||"Memo";case St:e=t._payload,t=t._init;try{return $t(t(e))}catch{}}return null}var vt=Array.isArray,w=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},ut=[],p=-1;function B(t){return{current:t}}function q(t){0>p||(t.current=ut[p],ut[p]=null,p--)}function N(t,e){p++,ut[p]=t.current,t.current=e}var Q=B(null),lt=B(null),V=B(null),rt=B(null);function st(t,e){switch(N(V,e),N(lt,t),N(Q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?w0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=w0(e),t=M0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Q),N(Q,t)}function k(){q(Q),q(lt),q(V)}function ft(t){t.memoizedState!==null&&N(rt,t);var e=Q.current,l=M0(e,t.type);e!==l&&(N(lt,t),N(Q,l))}function dt(t){lt.current===t&&(q(Q),q(lt)),rt.current===t&&(q(rt),pu._currentValue=j)}var xt=Object.prototype.hasOwnProperty,Mt=n.unstable_scheduleCallback,Vt=n.unstable_cancelCallback,Zt=n.unstable_shouldYield,ve=n.unstable_requestPaint,Wt=n.unstable_now,nl=n.unstable_getCurrentPriorityLevel,Ge=n.unstable_ImmediatePriority,Da=n.unstable_UserBlockingPriority,xl=n.unstable_NormalPriority,Fl=n.unstable_LowPriority,Sn=n.unstable_IdlePriority,sf=n.log,wp=n.unstable_setDisableYieldValue,xn=null,Ee=null;function El(t){if(typeof sf=="function"&&wp(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(xn,t)}catch{}}var Te=Math.clz32?Math.clz32:Cp,Mp=Math.log,_p=Math.LN2;function Cp(t){return t>>>=0,t===0?32:31-(Mp(t)/_p|0)|0}var zu=256,Ru=4194304;function Il(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function wu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?u=Il(a):(f&=s,f!==0?u=Il(f):l||(l=s&~t,l!==0&&(u=Il(l))))):(s=a&~i,s!==0?u=Il(s):f!==0?u=Il(f):l||(l=a&~t,l!==0&&(u=Il(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function En(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(){var t=zu;return zu<<=1,(zu&4194048)===0&&(zu=256),t}function hf(){var t=Ru;return Ru<<=1,(Ru&62914560)===0&&(Ru=4194304),t}function sc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Np(t,e,l,a,u,i){var f=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,x=t.hiddenUpdates;for(l=f&~l;0<l;){var _=31-Te(l),$=1<<_;s[_]=0,h[_]=-1;var E=x[_];if(E!==null)for(x[_]=null,_=0;_<E.length;_++){var T=E[_];T!==null&&(T.lane&=-536870913)}l&=~$}a!==0&&pf(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(f&~e))}function pf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function mf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Te(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function dc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function hc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bf(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:J0(t.type))}function $p(t,e){var l=Y.p;try{return Y.p=t,e()}finally{Y.p=l}}var Tl=Math.random().toString(36).slice(2),de="__reactFiber$"+Tl,ge="__reactProps$"+Tl,Oa="__reactContainer$"+Tl,pc="__reactEvents$"+Tl,Up="__reactListeners$"+Tl,Hp="__reactHandles$"+Tl,vf="__reactResources$"+Tl,Dn="__reactMarker$"+Tl;function mc(t){delete t[de],delete t[ge],delete t[pc],delete t[Up],delete t[Hp]}function za(t){var e=t[de];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Oa]||l[de]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=N0(t);t!==null;){if(l=t[de])return l;t=N0(t)}return e}t=l,l=t.parentNode}return null}function Ra(t){if(t=t[de]||t[Oa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function On(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function wa(t){var e=t[vf];return e||(e=t[vf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function le(t){t[Dn]=!0}var gf=new Set,yf={};function Pl(t,e){Ma(t,e),Ma(t+"Capture",e)}function Ma(t,e){for(yf[t]=e,t=0;t<e.length;t++)gf.add(e[t])}var kp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},Sf={};function Qp(t){return xt.call(Sf,t)?!0:xt.call(Af,t)?!1:kp.test(t)?Sf[t]=!0:(Af[t]=!0,!1)}function Mu(t,e,l){if(Qp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function _u(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ul(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var bc,xf;function _a(t){if(bc===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||"",xf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bc+t+xf}var vc=!1;function gc(t,e){if(!t||vc)return"";vc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(T){var E=T}Reflect.construct(t,[],$)}else{try{$.call()}catch(T){E=T}t.call($.prototype)}}else{try{throw Error()}catch(T){E=T}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),f=i[0],s=i[1];if(f&&s){var h=f.split(`
`),x=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<x.length&&!x[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===x.length)for(a=h.length-1,u=x.length-1;1<=a&&0<=u&&h[a]!==x[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==x[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==x[u]){var _=`
`+h[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=u);break}}}finally{vc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?_a(l):""}function qp(t){switch(t.tag){case 26:case 27:case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return gc(t.type,!1);case 11:return gc(t.type.render,!1);case 1:return gc(t.type,!0);case 31:return _a("Activity");default:return""}}function Ef(t){try{var e="";do e+=qp(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lp(t){var e=Tf(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(f){a=""+f,i.call(this,f)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cu(t){t._valueTracker||(t._valueTracker=Lp(t))}function Df(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Tf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yp=/[\n"\\]/g;function Ne(t){return t.replace(Yp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yc(t,e,l,a,u,i,f,s){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Ac(t,f,Be(e)):l!=null?Ac(t,f,Be(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Be(s):t.removeAttribute("name")}function Of(t,e,l,a,u,i,f,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+Be(l):"",e=e!=null?""+Be(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function Ac(t,e,l){e==="number"&&Bu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Ca(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Be(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function zf(t,e,l){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Be(l):""}function Rf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(vt(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Be(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ba(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Gp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Mf(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&wf(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&wf(t,i,e[i])}function Sc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nu(t){return Xp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var xc=null;function Ec(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,$a=null;function _f(t){var e=Ra(t);if(e&&(t=e.stateNode)){var l=t[ge]||null;t:switch(t=e.stateNode,e.type){case"input":if(yc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ne(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ge]||null;if(!u)throw Error(r(90));yc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Df(a)}break t;case"textarea":zf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ca(t,!!l.multiple,e,!1)}}}var Tc=!1;function Cf(t,e,l){if(Tc)return t(e,l);Tc=!0;try{var a=t(e);return a}finally{if(Tc=!1,(Na!==null||$a!==null)&&(yi(),Na&&(e=Na,t=$a,$a=Na=null,_f(e),t)))for(e=0;e<t.length;e++)_f(t[e])}}function zn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ge]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=!1;if(il)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Dc=!1}var Dl=null,Oc=null,$u=null;function Bf(){if($u)return $u;var t,e=Oc,l=e.length,a,u="value"in Dl?Dl.value:Dl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var f=l-t;for(a=1;a<=f&&e[l-a]===u[i-a];a++);return $u=u.slice(t,1<a?1-a:void 0)}function Uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hu(){return!0}function Nf(){return!1}function ye(t){function e(l,a,u,i,f){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hu:Nf,this.isPropagationStopped=Nf,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hu)},persist:function(){},isPersistent:Hu}),e}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=ye(ta),wn=z({},ta,{view:0,detail:0}),Vp=ye(wn),zc,Rc,Mn,Qu=z({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mn&&(Mn&&t.type==="mousemove"?(zc=t.screenX-Mn.screenX,Rc=t.screenY-Mn.screenY):Rc=zc=0,Mn=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),$f=ye(Qu),Zp=z({},Qu,{dataTransfer:0}),Kp=ye(Zp),Jp=z({},wn,{relatedTarget:0}),wc=ye(Jp),Wp=z({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=ye(Wp),Ip=z({},ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pp=ye(Ip),tm=z({},ta,{data:0}),Uf=ye(tm),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=am[t])?!!e[t]:!1}function Mc(){return nm}var um=z({},wn,{key:function(t){if(t.key){var e=em[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?Uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),im=ye(um),cm=z({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=ye(cm),rm=z({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),om=ye(rm),fm=z({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),sm=ye(fm),dm=z({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=ye(dm),pm=z({},ta,{newState:0,oldState:0}),mm=ye(pm),bm=[9,13,27,32],_c=il&&"CompositionEvent"in window,_n=null;il&&"documentMode"in document&&(_n=document.documentMode);var vm=il&&"TextEvent"in window&&!_n,kf=il&&(!_c||_n&&8<_n&&11>=_n),Qf=" ",qf=!1;function Lf(t,e){switch(t){case"keyup":return bm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ua=!1;function gm(t,e){switch(t){case"compositionend":return Yf(e);case"keypress":return e.which!==32?null:(qf=!0,Qf);case"textInput":return t=e.data,t===Qf&&qf?null:t;default:return null}}function ym(t,e){if(Ua)return t==="compositionend"||!_c&&Lf(t,e)?(t=Bf(),$u=Oc=Dl=null,Ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kf&&e.locale!=="ko"?null:e.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Am[t.type]:e==="textarea"}function jf(t,e,l,a){Na?$a?$a.push(a):$a=[a]:Na=a,e=Di(e,"onChange"),0<e.length&&(l=new ku("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Cn=null,Bn=null;function Sm(t){T0(t,0)}function qu(t){var e=On(t);if(Df(e))return t}function Xf(t,e){if(t==="change")return e}var Vf=!1;if(il){var Cc;if(il){var Bc="oninput"in document;if(!Bc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),Bc=typeof Zf.oninput=="function"}Cc=Bc}else Cc=!1;Vf=Cc&&(!document.documentMode||9<document.documentMode)}function Kf(){Cn&&(Cn.detachEvent("onpropertychange",Jf),Bn=Cn=null)}function Jf(t){if(t.propertyName==="value"&&qu(Bn)){var e=[];jf(e,Bn,t,Ec(t)),Cf(Sm,e)}}function xm(t,e,l){t==="focusin"?(Kf(),Cn=e,Bn=l,Cn.attachEvent("onpropertychange",Jf)):t==="focusout"&&Kf()}function Em(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(Bn)}function Tm(t,e){if(t==="click")return qu(e)}function Dm(t,e){if(t==="input"||t==="change")return qu(e)}function Om(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var De=typeof Object.is=="function"?Object.is:Om;function Nn(t,e){if(De(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!xt.call(e,u)||!De(t[u],e[u]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ff(t,e){var l=Wf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Wf(l)}}function If(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?If(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Bu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Bu(t.document)}return e}function Nc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var zm=il&&"documentMode"in document&&11>=document.documentMode,Ha=null,$c=null,$n=null,Uc=!1;function ts(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Uc||Ha==null||Ha!==Bu(a)||(a=Ha,"selectionStart"in a&&Nc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$n&&Nn($n,a)||($n=a,a=Di($c,"onSelect"),0<a.length&&(e=new ku("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ha)))}function ea(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ka={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},Hc={},es={};il&&(es=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function la(t){if(Hc[t])return Hc[t];if(!ka[t])return t;var e=ka[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in es)return Hc[t]=e[l];return t}var ls=la("animationend"),as=la("animationiteration"),ns=la("animationstart"),Rm=la("transitionrun"),wm=la("transitionstart"),Mm=la("transitioncancel"),us=la("transitionend"),is=new Map,kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kc.push("scrollEnd");function je(t,e){is.set(t,e),Pl(e,[t])}var cs=new WeakMap;function $e(t,e){if(typeof t=="object"&&t!==null){var l=cs.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ef(e)},cs.set(t,e),e)}return{value:t,source:e,stack:Ef(e)}}var Ue=[],Qa=0,Qc=0;function Lu(){for(var t=Qa,e=Qc=Qa=0;e<t;){var l=Ue[e];Ue[e++]=null;var a=Ue[e];Ue[e++]=null;var u=Ue[e];Ue[e++]=null;var i=Ue[e];if(Ue[e++]=null,a!==null&&u!==null){var f=a.pending;f===null?u.next=u:(u.next=f.next,f.next=u),a.pending=u}i!==0&&rs(l,u,i)}}function Yu(t,e,l,a){Ue[Qa++]=t,Ue[Qa++]=e,Ue[Qa++]=l,Ue[Qa++]=a,Qc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function qc(t,e,l,a){return Yu(t,e,l,a),Gu(t)}function qa(t,e){return Yu(t,null,null,e),Gu(t)}function rs(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-Te(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Gu(t){if(50<iu)throw iu=0,Vr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var La={};function _m(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(t,e,l,a){return new _m(t,e,l,a)}function Lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cl(t,e){var l=t.alternate;return l===null?(l=Oe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function os(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ju(t,e,l,a,u,i){var f=0;if(a=t,typeof t=="function")Lc(t)&&(f=1);else if(typeof t=="string")f=Bb(t,l,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ot:return t=Oe(31,l,e,u),t.elementType=Ot,t.lanes=i,t;case J:return aa(l.children,u,i,e);case tt:f=8,u|=24;break;case F:return t=Oe(12,l,e,u|2),t.elementType=F,t.lanes=i,t;case G:return t=Oe(13,l,e,u),t.elementType=G,t.lanes=i,t;case W:return t=Oe(19,l,e,u),t.elementType=W,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:case L:f=10;break t;case X:f=9;break t;case et:f=11;break t;case I:f=14;break t;case St:f=16,a=null;break t}f=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=Oe(f,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function aa(t,e,l,a){return t=Oe(7,t,a,e),t.lanes=l,t}function Yc(t,e,l){return t=Oe(6,t,null,e),t.lanes=l,t}function Gc(t,e,l){return e=Oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ya=[],Ga=0,Xu=null,Vu=0,He=[],ke=0,na=null,rl=1,ol="";function ua(t,e){Ya[Ga++]=Vu,Ya[Ga++]=Xu,Xu=t,Vu=e}function fs(t,e,l){He[ke++]=rl,He[ke++]=ol,He[ke++]=na,na=t;var a=rl;t=ol;var u=32-Te(a)-1;a&=~(1<<u),l+=1;var i=32-Te(e)+u;if(30<i){var f=u-u%5;i=(a&(1<<f)-1).toString(32),a>>=f,u-=f,rl=1<<32-Te(e)+u|l<<u|a,ol=i+t}else rl=1<<i|l<<u|a,ol=t}function jc(t){t.return!==null&&(ua(t,1),fs(t,1,0))}function Xc(t){for(;t===Xu;)Xu=Ya[--Ga],Ya[Ga]=null,Vu=Ya[--Ga],Ya[Ga]=null;for(;t===na;)na=He[--ke],He[ke]=null,ol=He[--ke],He[ke]=null,rl=He[--ke],He[ke]=null}var me=null,Yt=null,Dt=!1,ia=null,We=!1,Vc=Error(r(519));function ca(t){var e=Error(r(418,""));throw kn($e(e,t)),Vc}function ss(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[de]=t,e[ge]=a,l){case"dialog":At("cancel",e),At("close",e);break;case"iframe":case"object":case"embed":At("load",e);break;case"video":case"audio":for(l=0;l<ru.length;l++)At(ru[l],e);break;case"source":At("error",e);break;case"img":case"image":case"link":At("error",e),At("load",e);break;case"details":At("toggle",e);break;case"input":At("invalid",e),Of(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Cu(e);break;case"select":At("invalid",e);break;case"textarea":At("invalid",e),Rf(e,a.value,a.defaultValue,a.children),Cu(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||R0(e.textContent,l)?(a.popover!=null&&(At("beforetoggle",e),At("toggle",e)),a.onScroll!=null&&At("scroll",e),a.onScrollEnd!=null&&At("scrollend",e),a.onClick!=null&&(e.onclick=Oi),e=!0):e=!1,e||ca(t)}function ds(t){for(me=t.return;me;)switch(me.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:me=me.return}}function Un(t){if(t!==me)return!1;if(!Dt)return ds(t),Dt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||ro(t.type,t.memoizedProps)),l=!l),l&&Yt&&ca(t),ds(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Yt=Ve(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Yt=null}}else e===27?(e=Yt,Ll(t.type)?(t=ho,ho=null,Yt=t):Yt=e):Yt=me?Ve(t.stateNode.nextSibling):null;return!0}function Hn(){Yt=me=null,Dt=!1}function hs(){var t=ia;return t!==null&&(xe===null?xe=t:xe.push.apply(xe,t),ia=null),t}function kn(t){ia===null?ia=[t]:ia.push(t)}var Zc=B(null),ra=null,fl=null;function Ol(t,e,l){N(Zc,e._currentValue),e._currentValue=l}function sl(t){t._currentValue=Zc.current,q(Zc)}function Kc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Jc(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var f=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),Kc(i.return,l,t),a||(f=null);break t}i=s.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(r(341));f.lanes|=l,i=f.alternate,i!==null&&(i.lanes|=l),Kc(f,l,t),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function Qn(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var s=u.type;De(u.pendingProps.value,f.value)||(t!==null?t.push(s):t=[s])}}else if(u===rt.current){if(f=u.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(pu):t=[pu])}u=u.return}t!==null&&Jc(e,t,l,a),e.flags|=262144}function Zu(t){for(t=t.firstContext;t!==null;){if(!De(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function oa(t){ra=t,fl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function he(t){return ps(ra,t)}function Ku(t,e){return ra===null&&oa(t),ps(t,e)}function ps(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},fl===null){if(t===null)throw Error(r(308));fl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else fl=fl.next=e;return l}var Cm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Bm=n.unstable_scheduleCallback,Nm=n.unstable_NormalPriority,te={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new Cm,data:new Map,refCount:0}}function qn(t){t.refCount--,t.refCount===0&&Bm(Nm,function(){t.controller.abort()})}var Ln=null,Fc=0,ja=0,Xa=null;function $m(t,e){if(Ln===null){var l=Ln=[];Fc=0,ja=Pr(),Xa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Fc++,e.then(ms,ms),e}function ms(){if(--Fc===0&&Ln!==null){Xa!==null&&(Xa.status="fulfilled");var t=Ln;Ln=null,ja=0,Xa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Um(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var bs=w.S;w.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&$m(t,e),bs!==null&&bs(t,e)};var fa=B(null);function Ic(){var t=fa.current;return t!==null?t:Ht.pooledCache}function Ju(t,e){e===null?N(fa,fa.current):N(fa,e.pool)}function vs(){var t=Ic();return t===null?null:{parent:te._currentValue,pool:t}}var Yn=Error(r(460)),gs=Error(r(474)),Wu=Error(r(542)),Pc={then:function(){}};function ys(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fu(){}function As(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Fu,Fu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xs(t),t;default:if(typeof e.status=="string")e.then(Fu,Fu);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xs(t),t}throw Gn=e,Yn}}var Gn=null;function Ss(){if(Gn===null)throw Error(r(459));var t=Gn;return Gn=null,t}function xs(t){if(t===Yn||t===Wu)throw Error(r(483))}var zl=!1;function tr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function er(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Rt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Gu(t),rs(t,null,l),e}return Yu(t,a,e,l),Gu(t)}function jn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,mf(t,l)}}function lr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=f:i=i.next=f,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var ar=!1;function Xn(){if(ar){var t=Xa;if(t!==null)throw t}}function Vn(t,e,l,a){ar=!1;var u=t.updateQueue;zl=!1;var i=u.firstBaseUpdate,f=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,x=h.next;h.next=null,f===null?i=x:f.next=x,f=h;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==f&&(s===null?_.firstBaseUpdate=x:s.next=x,_.lastBaseUpdate=h))}if(i!==null){var $=u.baseState;f=0,_=x=h=null,s=i;do{var E=s.lane&-536870913,T=E!==s.lane;if(T?(Et&E)===E:(a&E)===E){E!==0&&E===ja&&(ar=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var ot=t,it=s;E=e;var Bt=l;switch(it.tag){case 1:if(ot=it.payload,typeof ot=="function"){$=ot.call(Bt,$,E);break t}$=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=it.payload,E=typeof ot=="function"?ot.call(Bt,$,E):ot,E==null)break t;$=z({},$,E);break t;case 2:zl=!0}}E=s.callback,E!==null&&(t.flags|=64,T&&(t.flags|=8192),T=u.callbacks,T===null?u.callbacks=[E]:T.push(E))}else T={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(x=_=T,h=$):_=_.next=T,f|=E;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;T=s,s=T.next,T.next=null,u.lastBaseUpdate=T,u.shared.pending=null}}while(!0);_===null&&(h=$),u.baseState=h,u.firstBaseUpdate=x,u.lastBaseUpdate=_,i===null&&(u.shared.lanes=0),Hl|=f,t.lanes=f,t.memoizedState=$}}function Es(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Ts(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Es(l[t],e)}var Va=B(null),Iu=B(0);function Ds(t,e){t=gl,N(Iu,t),N(Va,e),gl=t|e.baseLanes}function nr(){N(Iu,gl),N(Va,Va.current)}function ur(){gl=Iu.current,q(Va),q(Iu)}var Ml=0,bt=null,_t=null,Ft=null,Pu=!1,Za=!1,sa=!1,ti=0,Zn=0,Ka=null,Hm=0;function Kt(){throw Error(r(321))}function ir(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!De(t[l],e[l]))return!1;return!0}function cr(t,e,l,a,u,i){return Ml=i,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,w.H=t===null||t.memoizedState===null?rd:od,sa=!1,i=l(a,u),sa=!1,Za&&(i=zs(e,l,a,u)),Os(t),i}function Os(t){w.H=ii;var e=_t!==null&&_t.next!==null;if(Ml=0,Ft=_t=bt=null,Pu=!1,Zn=0,Ka=null,e)throw Error(r(300));t===null||ae||(t=t.dependencies,t!==null&&Zu(t)&&(ae=!0))}function zs(t,e,l,a){bt=t;var u=0;do{if(Za&&(Ka=null),Zn=0,Za=!1,25<=u)throw Error(r(301));if(u+=1,Ft=_t=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=jm,i=e(l,a)}while(Za);return i}function km(){var t=w.H,e=t.useState()[0];return e=typeof e.then=="function"?Kn(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(bt.flags|=1024),e}function rr(){var t=ti!==0;return ti=0,t}function or(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function fr(t){if(Pu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Pu=!1}Ml=0,Ft=_t=bt=null,Za=!1,Zn=ti=0,Ka=null}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?bt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function It(){if(_t===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Ft===null?bt.memoizedState:Ft.next;if(e!==null)Ft=e,_t=t;else{if(t===null)throw bt.alternate===null?Error(r(467)):Error(r(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Ft===null?bt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kn(t){var e=Zn;return Zn+=1,Ka===null&&(Ka=[]),t=As(Ka,t,e),e=bt,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,w.H=e===null||e.memoizedState===null?rd:od),t}function ei(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Kn(t);if(t.$$typeof===L)return he(t)}throw Error(r(438,String(t)))}function dr(t){var e=null,l=bt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=bt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=sr(),bt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Xt;return e.index++,l}function dl(t,e){return typeof e=="function"?e(t):e}function li(t){var e=It();return hr(e,_t,t)}function hr(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var f=u.next;u.next=i.next,i.next=f}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=f=null,h=null,x=e,_=!1;do{var $=x.lane&-536870913;if($!==x.lane?(Et&$)===$:(Ml&$)===$){var E=x.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),$===ja&&(_=!0);else if((Ml&E)===E){x=x.next,E===ja&&(_=!0);continue}else $={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(s=h=$,f=i):h=h.next=$,bt.lanes|=E,Hl|=E;$=x.action,sa&&l(i,$),i=x.hasEagerState?x.eagerState:l(i,$)}else E={lane:$,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(s=h=E,f=i):h=h.next=E,bt.lanes|=$,Hl|=$;x=x.next}while(x!==null&&x!==e);if(h===null?f=i:h.next=s,!De(i,t.memoizedState)&&(ae=!0,_&&(l=Xa,l!==null)))throw l;t.memoizedState=i,t.baseState=f,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function pr(t){var e=It(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var f=u=u.next;do i=t(i,f.action),f=f.next;while(f!==u);De(i,e.memoizedState)||(ae=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Rs(t,e,l){var a=bt,u=It(),i=Dt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var f=!De((_t||u).memoizedState,l);f&&(u.memoizedState=l,ae=!0),u=u.queue;var s=_s.bind(null,a,u,t);if(Jn(2048,8,s,[t]),u.getSnapshot!==e||f||Ft!==null&&Ft.memoizedState.tag&1){if(a.flags|=2048,Ja(9,ai(),Ms.bind(null,a,u,l,e),null),Ht===null)throw Error(r(349));i||(Ml&124)!==0||ws(a,e,l)}return l}function ws(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=bt.updateQueue,e===null?(e=sr(),bt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ms(t,e,l,a){e.value=l,e.getSnapshot=a,Cs(e)&&Bs(t)}function _s(t,e,l){return l(function(){Cs(e)&&Bs(t)})}function Cs(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!De(t,l)}catch{return!0}}function Bs(t){var e=qa(t,2);e!==null&&_e(e,t,2)}function mr(t){var e=Ae();if(typeof t=="function"){var l=t;if(t=l(),sa){El(!0);try{l()}finally{El(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e}function Ns(t,e,l,a){return t.baseState=l,hr(t,_t,typeof a=="function"?a:dl)}function Qm(t,e,l,a,u){if(ui(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};w.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,$s(e,i)):(i.next=l.next,e.pending=l.next=i)}}function $s(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=w.T,f={};w.T=f;try{var s=l(u,a),h=w.S;h!==null&&h(f,s),Us(t,e,s)}catch(x){br(t,e,x)}finally{w.T=i}}else try{i=l(u,a),Us(t,e,i)}catch(x){br(t,e,x)}}function Us(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Hs(t,e,a)},function(a){return br(t,e,a)}):Hs(t,e,l)}function Hs(t,e,l){e.status="fulfilled",e.value=l,ks(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,$s(t,l)))}function br(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,ks(e),e=e.next;while(e!==a)}t.action=null}function ks(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Qs(t,e){return e}function qs(t,e){if(Dt){var l=Ht.formState;if(l!==null){t:{var a=bt;if(Dt){if(Yt){e:{for(var u=Yt,i=We;u.nodeType!==8;){if(!i){u=null;break e}if(u=Ve(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){Yt=Ve(u.nextSibling),a=u.data==="F!";break t}}ca(a)}a=!1}a&&(e=l[0])}}return l=Ae(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:e},l.queue=a,l=ud.bind(null,bt,a),a.dispatch=l,a=mr(!1),i=Sr.bind(null,bt,!1,a.queue),a=Ae(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Qm.bind(null,bt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function Ls(t){var e=It();return Ys(e,_t,t)}function Ys(t,e,l){if(e=hr(t,e,Qs)[0],t=li(dl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Kn(e)}catch(f){throw f===Yn?Wu:f}else a=e;e=It();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(bt.flags|=2048,Ja(9,ai(),qm.bind(null,u,l),null)),[a,i,t]}function qm(t,e){t.action=e}function Gs(t){var e=It(),l=_t;if(l!==null)return Ys(e,l,t);It(),e=e.memoizedState,l=It();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ja(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=bt.updateQueue,e===null&&(e=sr(),bt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ai(){return{destroy:void 0,resource:void 0}}function js(){return It().memoizedState}function ni(t,e,l,a){var u=Ae();a=a===void 0?null:a,bt.flags|=t,u.memoizedState=Ja(1|e,ai(),l,a)}function Jn(t,e,l,a){var u=It();a=a===void 0?null:a;var i=u.memoizedState.inst;_t!==null&&a!==null&&ir(a,_t.memoizedState.deps)?u.memoizedState=Ja(e,i,l,a):(bt.flags|=t,u.memoizedState=Ja(1|e,i,l,a))}function Xs(t,e){ni(8390656,8,t,e)}function Vs(t,e){Jn(2048,8,t,e)}function Zs(t,e){return Jn(4,2,t,e)}function Ks(t,e){return Jn(4,4,t,e)}function Js(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ws(t,e,l){l=l!=null?l.concat([t]):null,Jn(4,4,Js.bind(null,e,t),l)}function vr(){}function Fs(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&ir(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Is(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&ir(e,a[1]))return a[0];if(a=t(),sa){El(!0);try{t()}finally{El(!1)}}return l.memoizedState=[a,e],a}function gr(t,e,l){return l===void 0||(Ml&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=e0(),bt.lanes|=t,Hl|=t,l)}function Ps(t,e,l,a){return De(l,e)?l:Va.current!==null?(t=gr(t,l,a),De(t,e)||(ae=!0),t):(Ml&42)===0?(ae=!0,t.memoizedState=l):(t=e0(),bt.lanes|=t,Hl|=t,e)}function td(t,e,l,a,u){var i=Y.p;Y.p=i!==0&&8>i?i:8;var f=w.T,s={};w.T=s,Sr(t,!1,e,l);try{var h=u(),x=w.S;if(x!==null&&x(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=Um(h,a);Wn(t,e,_,Me(t))}else Wn(t,e,a,Me(t))}catch($){Wn(t,e,{then:function(){},status:"rejected",reason:$},Me())}finally{Y.p=i,w.T=f}}function Lm(){}function yr(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=ed(t).queue;td(t,u,e,j,l===null?Lm:function(){return ld(t),l(a)})}function ed(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:j},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ld(t){var e=ed(t).next.queue;Wn(t,e,{},Me())}function Ar(){return he(pu)}function ad(){return It().memoizedState}function nd(){return It().memoizedState}function Ym(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Me();t=Rl(l);var a=wl(e,t,l);a!==null&&(_e(a,e,l),jn(a,e,l)),e={cache:Wc()},t.payload=e;return}e=e.return}}function Gm(t,e,l){var a=Me();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},ui(t)?id(e,l):(l=qc(t,e,l,a),l!==null&&(_e(l,t,a),cd(l,e,a)))}function ud(t,e,l){var a=Me();Wn(t,e,l,a)}function Wn(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(ui(t))id(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var f=e.lastRenderedState,s=i(f,l);if(u.hasEagerState=!0,u.eagerState=s,De(s,f))return Yu(t,e,u,0),Ht===null&&Lu(),!1}catch{}finally{}if(l=qc(t,e,u,a),l!==null)return _e(l,t,a),cd(l,e,a),!0}return!1}function Sr(t,e,l,a){if(a={lane:2,revertLane:Pr(),action:a,hasEagerState:!1,eagerState:null,next:null},ui(t)){if(e)throw Error(r(479))}else e=qc(t,l,a,2),e!==null&&_e(e,t,2)}function ui(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function id(t,e){Za=Pu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function cd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,mf(t,l)}}var ii={readContext:he,use:ei,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt},rd={readContext:he,use:ei,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:he,useEffect:Xs,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ni(4194308,4,Js.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ni(4194308,4,t,e)},useInsertionEffect:function(t,e){ni(4,2,t,e)},useMemo:function(t,e){var l=Ae();e=e===void 0?null:e;var a=t();if(sa){El(!0);try{t()}finally{El(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ae();if(l!==void 0){var u=l(e);if(sa){El(!0);try{l(e)}finally{El(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Gm.bind(null,bt,t),[a.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:function(t){t=mr(t);var e=t.queue,l=ud.bind(null,bt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:vr,useDeferredValue:function(t,e){var l=Ae();return gr(l,t,e)},useTransition:function(){var t=mr(!1);return t=td.bind(null,bt,t.queue,!0,!1),Ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=bt,u=Ae();if(Dt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),Ht===null)throw Error(r(349));(Et&124)!==0||ws(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,Xs(_s.bind(null,a,i,t),[t]),a.flags|=2048,Ja(9,ai(),Ms.bind(null,a,i,l,e),null),l},useId:function(){var t=Ae(),e=Ht.identifierPrefix;if(Dt){var l=ol,a=rl;l=(a&~(1<<32-Te(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ti++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Hm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ar,useFormState:qs,useActionState:qs,useOptimistic:function(t){var e=Ae();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Sr.bind(null,bt,!0,l),l.dispatch=e,[t,e]},useMemoCache:dr,useCacheRefresh:function(){return Ae().memoizedState=Ym.bind(null,bt)}},od={readContext:he,use:ei,useCallback:Fs,useContext:he,useEffect:Vs,useImperativeHandle:Ws,useInsertionEffect:Zs,useLayoutEffect:Ks,useMemo:Is,useReducer:li,useRef:js,useState:function(){return li(dl)},useDebugValue:vr,useDeferredValue:function(t,e){var l=It();return Ps(l,_t.memoizedState,t,e)},useTransition:function(){var t=li(dl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:Rs,useId:ad,useHostTransitionStatus:Ar,useFormState:Ls,useActionState:Ls,useOptimistic:function(t,e){var l=It();return Ns(l,_t,t,e)},useMemoCache:dr,useCacheRefresh:nd},jm={readContext:he,use:ei,useCallback:Fs,useContext:he,useEffect:Vs,useImperativeHandle:Ws,useInsertionEffect:Zs,useLayoutEffect:Ks,useMemo:Is,useReducer:pr,useRef:js,useState:function(){return pr(dl)},useDebugValue:vr,useDeferredValue:function(t,e){var l=It();return _t===null?gr(l,t,e):Ps(l,_t.memoizedState,t,e)},useTransition:function(){var t=pr(dl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:Rs,useId:ad,useHostTransitionStatus:Ar,useFormState:Gs,useActionState:Gs,useOptimistic:function(t,e){var l=It();return _t!==null?Ns(l,_t,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:dr,useCacheRefresh:nd},Wa=null,Fn=0;function ci(t){var e=Fn;return Fn+=1,Wa===null&&(Wa=[]),As(Wa,t,e)}function In(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ri(t,e){throw e.$$typeof===R?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function fd(t){var e=t._init;return e(t._payload)}function sd(t){function e(y,v){if(t){var S=y.deletions;S===null?(y.deletions=[v],y.flags|=16):S.push(v)}}function l(y,v){if(!t)return null;for(;v!==null;)e(y,v),v=v.sibling;return null}function a(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function u(y,v){return y=cl(y,v),y.index=0,y.sibling=null,y}function i(y,v,S){return y.index=S,t?(S=y.alternate,S!==null?(S=S.index,S<v?(y.flags|=67108866,v):S):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function f(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function s(y,v,S,C){return v===null||v.tag!==6?(v=Yc(S,y.mode,C),v.return=y,v):(v=u(v,S),v.return=y,v)}function h(y,v,S,C){var at=S.type;return at===J?_(y,v,S.props.children,C,S.key):v!==null&&(v.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===St&&fd(at)===v.type)?(v=u(v,S.props),In(v,S),v.return=y,v):(v=ju(S.type,S.key,S.props,null,y.mode,C),In(v,S),v.return=y,v)}function x(y,v,S,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Gc(S,y.mode,C),v.return=y,v):(v=u(v,S.children||[]),v.return=y,v)}function _(y,v,S,C,at){return v===null||v.tag!==7?(v=aa(S,y.mode,C,at),v.return=y,v):(v=u(v,S),v.return=y,v)}function $(y,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Yc(""+v,y.mode,S),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return S=ju(v.type,v.key,v.props,null,y.mode,S),In(S,v),S.return=y,S;case Z:return v=Gc(v,y.mode,S),v.return=y,v;case St:var C=v._init;return v=C(v._payload),$(y,v,S)}if(vt(v)||pt(v))return v=aa(v,y.mode,S,null),v.return=y,v;if(typeof v.then=="function")return $(y,ci(v),S);if(v.$$typeof===L)return $(y,Ku(y,v),S);ri(y,v)}return null}function E(y,v,S,C){var at=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return at!==null?null:s(y,v,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return S.key===at?h(y,v,S,C):null;case Z:return S.key===at?x(y,v,S,C):null;case St:return at=S._init,S=at(S._payload),E(y,v,S,C)}if(vt(S)||pt(S))return at!==null?null:_(y,v,S,C,null);if(typeof S.then=="function")return E(y,v,ci(S),C);if(S.$$typeof===L)return E(y,v,Ku(y,S),C);ri(y,S)}return null}function T(y,v,S,C,at){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return y=y.get(S)||null,s(v,y,""+C,at);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case U:return y=y.get(C.key===null?S:C.key)||null,h(v,y,C,at);case Z:return y=y.get(C.key===null?S:C.key)||null,x(v,y,C,at);case St:var gt=C._init;return C=gt(C._payload),T(y,v,S,C,at)}if(vt(C)||pt(C))return y=y.get(S)||null,_(v,y,C,at,null);if(typeof C.then=="function")return T(y,v,S,ci(C),at);if(C.$$typeof===L)return T(y,v,S,Ku(v,C),at);ri(v,C)}return null}function ot(y,v,S,C){for(var at=null,gt=null,nt=v,ct=v=0,ue=null;nt!==null&&ct<S.length;ct++){nt.index>ct?(ue=nt,nt=null):ue=nt.sibling;var Tt=E(y,nt,S[ct],C);if(Tt===null){nt===null&&(nt=ue);break}t&&nt&&Tt.alternate===null&&e(y,nt),v=i(Tt,v,ct),gt===null?at=Tt:gt.sibling=Tt,gt=Tt,nt=ue}if(ct===S.length)return l(y,nt),Dt&&ua(y,ct),at;if(nt===null){for(;ct<S.length;ct++)nt=$(y,S[ct],C),nt!==null&&(v=i(nt,v,ct),gt===null?at=nt:gt.sibling=nt,gt=nt);return Dt&&ua(y,ct),at}for(nt=a(nt);ct<S.length;ct++)ue=T(nt,y,ct,S[ct],C),ue!==null&&(t&&ue.alternate!==null&&nt.delete(ue.key===null?ct:ue.key),v=i(ue,v,ct),gt===null?at=ue:gt.sibling=ue,gt=ue);return t&&nt.forEach(function(Vl){return e(y,Vl)}),Dt&&ua(y,ct),at}function it(y,v,S,C){if(S==null)throw Error(r(151));for(var at=null,gt=null,nt=v,ct=v=0,ue=null,Tt=S.next();nt!==null&&!Tt.done;ct++,Tt=S.next()){nt.index>ct?(ue=nt,nt=null):ue=nt.sibling;var Vl=E(y,nt,Tt.value,C);if(Vl===null){nt===null&&(nt=ue);break}t&&nt&&Vl.alternate===null&&e(y,nt),v=i(Vl,v,ct),gt===null?at=Vl:gt.sibling=Vl,gt=Vl,nt=ue}if(Tt.done)return l(y,nt),Dt&&ua(y,ct),at;if(nt===null){for(;!Tt.done;ct++,Tt=S.next())Tt=$(y,Tt.value,C),Tt!==null&&(v=i(Tt,v,ct),gt===null?at=Tt:gt.sibling=Tt,gt=Tt);return Dt&&ua(y,ct),at}for(nt=a(nt);!Tt.done;ct++,Tt=S.next())Tt=T(nt,y,ct,Tt.value,C),Tt!==null&&(t&&Tt.alternate!==null&&nt.delete(Tt.key===null?ct:Tt.key),v=i(Tt,v,ct),gt===null?at=Tt:gt.sibling=Tt,gt=Tt);return t&&nt.forEach(function(Xb){return e(y,Xb)}),Dt&&ua(y,ct),at}function Bt(y,v,S,C){if(typeof S=="object"&&S!==null&&S.type===J&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case U:t:{for(var at=S.key;v!==null;){if(v.key===at){if(at=S.type,at===J){if(v.tag===7){l(y,v.sibling),C=u(v,S.props.children),C.return=y,y=C;break t}}else if(v.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===St&&fd(at)===v.type){l(y,v.sibling),C=u(v,S.props),In(C,S),C.return=y,y=C;break t}l(y,v);break}else e(y,v);v=v.sibling}S.type===J?(C=aa(S.props.children,y.mode,C,S.key),C.return=y,y=C):(C=ju(S.type,S.key,S.props,null,y.mode,C),In(C,S),C.return=y,y=C)}return f(y);case Z:t:{for(at=S.key;v!==null;){if(v.key===at)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){l(y,v.sibling),C=u(v,S.children||[]),C.return=y,y=C;break t}else{l(y,v);break}else e(y,v);v=v.sibling}C=Gc(S,y.mode,C),C.return=y,y=C}return f(y);case St:return at=S._init,S=at(S._payload),Bt(y,v,S,C)}if(vt(S))return ot(y,v,S,C);if(pt(S)){if(at=pt(S),typeof at!="function")throw Error(r(150));return S=at.call(S),it(y,v,S,C)}if(typeof S.then=="function")return Bt(y,v,ci(S),C);if(S.$$typeof===L)return Bt(y,v,Ku(y,S),C);ri(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(l(y,v.sibling),C=u(v,S),C.return=y,y=C):(l(y,v),C=Yc(S,y.mode,C),C.return=y,y=C),f(y)):l(y,v)}return function(y,v,S,C){try{Fn=0;var at=Bt(y,v,S,C);return Wa=null,at}catch(nt){if(nt===Yn||nt===Wu)throw nt;var gt=Oe(29,nt,null,y.mode);return gt.lanes=C,gt.return=y,gt}finally{}}}var Fa=sd(!0),dd=sd(!1),Qe=B(null),Fe=null;function _l(t){var e=t.alternate;N(ee,ee.current&1),N(Qe,t),Fe===null&&(e===null||Va.current!==null||e.memoizedState!==null)&&(Fe=t)}function hd(t){if(t.tag===22){if(N(ee,ee.current),N(Qe,t),Fe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Fe=t)}}else Cl()}function Cl(){N(ee,ee.current),N(Qe,Qe.current)}function hl(t){q(Qe),Fe===t&&(Fe=null),q(ee)}var ee=B(0);function oi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||so(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function xr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:z({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Er={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Rl(a);u.payload=e,l!=null&&(u.callback=l),e=wl(t,u,a),e!==null&&(_e(e,t,a),jn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Rl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=wl(t,u,a),e!==null&&(_e(e,t,a),jn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Me(),a=Rl(l);a.tag=2,e!=null&&(a.callback=e),e=wl(t,a,l),e!==null&&(_e(e,t,l),jn(e,t,l))}};function pd(t,e,l,a,u,i,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,f):e.prototype&&e.prototype.isPureReactComponent?!Nn(l,a)||!Nn(u,i):!0}function md(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Er.enqueueReplaceState(e,e.state,null)}function da(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=z({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var fi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function bd(t){fi(t)}function vd(t){console.error(t)}function gd(t){fi(t)}function si(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function yd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tr(t,e,l){return l=Rl(l),l.tag=3,l.payload={element:null},l.callback=function(){si(t,e)},l}function Ad(t){return t=Rl(t),t.tag=3,t}function Sd(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){yd(e,l,a)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){yd(e,l,a),typeof u!="function"&&(kl===null?kl=new Set([this]):kl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Xm(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Qn(e,l,u,!0),l=Qe.current,l!==null){switch(l.tag){case 13:return Fe===null?Kr():l.alternate===null&&Gt===0&&(Gt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===Pc?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Wr(t,a,u)),!1;case 22:return l.flags|=65536,a===Pc?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Wr(t,a,u)),!1}throw Error(r(435,l.tag))}return Wr(t,a,u),Kr(),!1}if(Dt)return e=Qe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Vc&&(t=Error(r(422),{cause:a}),kn($e(t,l)))):(a!==Vc&&(e=Error(r(423),{cause:a}),kn($e(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=$e(a,l),u=Tr(t.stateNode,a,u),lr(t,u),Gt!==4&&(Gt=2)),!1;var i=Error(r(520),{cause:a});if(i=$e(i,l),uu===null?uu=[i]:uu.push(i),Gt!==4&&(Gt=2),e===null)return!0;a=$e(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=Tr(l.stateNode,a,t),lr(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(kl===null||!kl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Ad(u),Sd(u,t,l,a),lr(l,u),!1}l=l.return}while(l!==null);return!1}var xd=Error(r(461)),ae=!1;function re(t,e,l,a){e.child=t===null?dd(e,null,l,a):Fa(e,t.child,l,a)}function Ed(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var f={};for(var s in a)s!=="ref"&&(f[s]=a[s])}else f=a;return oa(e),a=cr(t,e,l,f,i,u),s=rr(),t!==null&&!ae?(or(t,e,u),pl(t,e,u)):(Dt&&s&&jc(e),e.flags|=1,re(t,e,a,u),e.child)}function Td(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Lc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Dd(t,e,i,a,u)):(t=ju(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Cr(t,u)){var f=i.memoizedProps;if(l=l.compare,l=l!==null?l:Nn,l(f,a)&&t.ref===e.ref)return pl(t,e,u)}return e.flags|=1,t=cl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Dd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(Nn(i,a)&&t.ref===e.ref)if(ae=!1,e.pendingProps=a=i,Cr(t,u))(t.flags&131072)!==0&&(ae=!0);else return e.lanes=t.lanes,pl(t,e,u)}return Dr(t,e,l,a,u)}function Od(t,e,l){var a=e.pendingProps,u=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(u=e.child=t.child,i=0;u!==null;)i=i|u.lanes|u.childLanes,u=u.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return zd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ju(e,i!==null?i.cachePool:null),i!==null?Ds(e,i):nr(),hd(e);else return e.lanes=e.childLanes=536870912,zd(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(Ju(e,i.cachePool),Ds(e,i),Cl(),e.memoizedState=null):(t!==null&&Ju(e,null),nr(),Cl());return re(t,e,u,l),e.child}function zd(t,e,l,a){var u=Ic();return u=u===null?null:{parent:te._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Ju(e,null),nr(),hd(e),t!==null&&Qn(t,e,a,!0),null}function di(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Dr(t,e,l,a,u){return oa(e),l=cr(t,e,l,a,void 0,u),a=rr(),t!==null&&!ae?(or(t,e,u),pl(t,e,u)):(Dt&&a&&jc(e),e.flags|=1,re(t,e,l,u),e.child)}function Rd(t,e,l,a,u,i){return oa(e),e.updateQueue=null,l=zs(e,a,l,u),Os(t),a=rr(),t!==null&&!ae?(or(t,e,i),pl(t,e,i)):(Dt&&a&&jc(e),e.flags|=1,re(t,e,l,i),e.child)}function wd(t,e,l,a,u){if(oa(e),e.stateNode===null){var i=La,f=l.contextType;typeof f=="object"&&f!==null&&(i=he(f)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Er,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},tr(e),f=l.contextType,i.context=typeof f=="object"&&f!==null?he(f):La,i.state=e.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(xr(e,l,f,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&Er.enqueueReplaceState(i,i.state,null),Vn(e,a,i,u),Xn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=da(l,s);i.props=h;var x=i.context,_=l.contextType;f=La,typeof _=="object"&&_!==null&&(f=he(_));var $=l.getDerivedStateFromProps;_=typeof $=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||x!==f)&&md(e,i,a,f),zl=!1;var E=e.memoizedState;i.state=E,Vn(e,a,i,u),Xn(),x=e.memoizedState,s||E!==x||zl?(typeof $=="function"&&(xr(e,l,$,a),x=e.memoizedState),(h=zl||pd(e,l,h,a,E,x,f))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=x),i.props=a,i.state=x,i.context=f,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,er(t,e),f=e.memoizedProps,_=da(l,f),i.props=_,$=e.pendingProps,E=i.context,x=l.contextType,h=La,typeof x=="object"&&x!==null&&(h=he(x)),s=l.getDerivedStateFromProps,(x=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==$||E!==h)&&md(e,i,a,h),zl=!1,E=e.memoizedState,i.state=E,Vn(e,a,i,u),Xn();var T=e.memoizedState;f!==$||E!==T||zl||t!==null&&t.dependencies!==null&&Zu(t.dependencies)?(typeof s=="function"&&(xr(e,l,s,a),T=e.memoizedState),(_=zl||pd(e,l,_,a,E,T,h)||t!==null&&t.dependencies!==null&&Zu(t.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),i.props=a,i.state=T,i.context=h,a=_):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,di(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Fa(e,t.child,null,u),e.child=Fa(e,null,l,u)):re(t,e,l,u),e.memoizedState=i.state,t=e.child):t=pl(t,e,u),t}function Md(t,e,l,a){return Hn(),e.flags|=256,re(t,e,l,a),e.child}var Or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zr(t){return{baseLanes:t,cachePool:vs()}}function Rr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=qe),t}function _d(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,f;if((f=i)||(f=t!==null&&t.memoizedState===null?!1:(ee.current&2)!==0),f&&(u=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Dt){if(u?_l(e):Cl(),Dt){var s=Yt,h;if(h=s){t:{for(h=s,s=We;h.nodeType!==8;){if(!s){s=null;break t}if(h=Ve(h.nextSibling),h===null){s=null;break t}}s=h}s!==null?(e.memoizedState={dehydrated:s,treeContext:na!==null?{id:rl,overflow:ol}:null,retryLane:536870912,hydrationErrors:null},h=Oe(18,null,null,0),h.stateNode=s,h.return=e,e.child=h,me=e,Yt=null,h=!0):h=!1}h||ca(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return so(s)?e.lanes=32:e.lanes=536870912,null;hl(e)}return s=a.children,a=a.fallback,u?(Cl(),u=e.mode,s=hi({mode:"hidden",children:s},u),a=aa(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,u=e.child,u.memoizedState=zr(l),u.childLanes=Rr(t,f,l),e.memoizedState=Or,a):(_l(e),wr(e,s))}if(h=t.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(_l(e),e.flags&=-257,e=Mr(t,e,l)):e.memoizedState!==null?(Cl(),e.child=t.child,e.flags|=128,e=null):(Cl(),u=a.fallback,s=e.mode,a=hi({mode:"visible",children:a.children},s),u=aa(u,s,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,Fa(e,t.child,null,l),a=e.child,a.memoizedState=zr(l),a.childLanes=Rr(t,f,l),e.memoizedState=Or,e=u);else if(_l(e),so(s)){if(f=s.nextSibling&&s.nextSibling.dataset,f)var x=f.dgst;f=x,a=Error(r(419)),a.stack="",a.digest=f,kn({value:a,source:null,stack:null}),e=Mr(t,e,l)}else if(ae||Qn(t,e,l,!1),f=(l&t.childLanes)!==0,ae||f){if(f=Ht,f!==null&&(a=l&-l,a=(a&42)!==0?1:dc(a),a=(a&(f.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,qa(t,a),_e(f,t,a),xd;s.data==="$?"||Kr(),e=Mr(t,e,l)}else s.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,Yt=Ve(s.nextSibling),me=e,Dt=!0,ia=null,We=!1,t!==null&&(He[ke++]=rl,He[ke++]=ol,He[ke++]=na,rl=t.id,ol=t.overflow,na=e),e=wr(e,a.children),e.flags|=4096);return e}return u?(Cl(),u=a.fallback,s=e.mode,h=t.child,x=h.sibling,a=cl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,x!==null?u=cl(x,u):(u=aa(u,s,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,s=t.child.memoizedState,s===null?s=zr(l):(h=s.cachePool,h!==null?(x=te._currentValue,h=h.parent!==x?{parent:x,pool:x}:h):h=vs(),s={baseLanes:s.baseLanes|l,cachePool:h}),u.memoizedState=s,u.childLanes=Rr(t,f,l),e.memoizedState=Or,a):(_l(e),l=t.child,t=l.sibling,l=cl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=l,e.memoizedState=null,l)}function wr(t,e){return e=hi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hi(t,e){return t=Oe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Mr(t,e,l){return Fa(e,t.child,null,l),t=wr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Kc(t.return,e,l)}function _r(t,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u)}function Bd(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;if(re(t,e,a.children,l),a=ee.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cd(t,l,e);else if(t.tag===19)Cd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(N(ee,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&oi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),_r(e,!1,u,l,i);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&oi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}_r(e,!0,l,null,i);break;case"together":_r(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Hl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Qn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=cl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=cl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Cr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Zu(t)))}function Vm(t,e,l){switch(e.tag){case 3:st(e,e.stateNode.containerInfo),Ol(e,te,t.memoizedState.cache),Hn();break;case 27:case 5:ft(e);break;case 4:st(e,e.stateNode.containerInfo);break;case 10:Ol(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(_l(e),e.flags|=128,null):(l&e.child.childLanes)!==0?_d(t,e,l):(_l(e),t=pl(t,e,l),t!==null?t.sibling:null);_l(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Qn(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Bd(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),N(ee,ee.current),a)break;return null;case 22:case 23:return e.lanes=0,Od(t,e,l);case 24:Ol(e,te,t.memoizedState.cache)}return pl(t,e,l)}function Nd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ae=!0;else{if(!Cr(t,l)&&(e.flags&128)===0)return ae=!1,Vm(t,e,l);ae=(t.flags&131072)!==0}else ae=!1,Dt&&(e.flags&1048576)!==0&&fs(e,Vu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")Lc(a)?(t=da(a,t),e.tag=1,e=wd(null,e,a,t,l)):(e.tag=0,e=Dr(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===et){e.tag=11,e=Ed(null,e,a,t,l);break t}else if(u===I){e.tag=14,e=Td(null,e,a,t,l);break t}}throw e=$t(a)||a,Error(r(306,e,""))}}return e;case 0:return Dr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=da(a,e.pendingProps),wd(t,e,a,u,l);case 3:t:{if(st(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,er(t,e),Vn(e,a,null,l);var f=e.memoizedState;if(a=f.cache,Ol(e,te,a),a!==i.cache&&Jc(e,[te],l,!0),Xn(),a=f.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Md(t,e,a,l);break t}else if(a!==u){u=$e(Error(r(424)),e),kn(u),e=Md(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=Ve(t.firstChild),me=e,Dt=!0,ia=null,We=!0,l=dd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Hn(),a===u){e=pl(t,e,l);break t}re(t,e,a,l)}e=e.child}return e;case 26:return di(t,e),t===null?(l=k0(e.type,null,e.pendingProps,null))?e.memoizedState=l:Dt||(l=e.type,t=e.pendingProps,a=zi(V.current).createElement(l),a[de]=e,a[ge]=t,fe(a,l,t),le(a),e.stateNode=a):e.memoizedState=k0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ft(e),t===null&&Dt&&(a=e.stateNode=$0(e.type,e.pendingProps,V.current),me=e,We=!0,u=Yt,Ll(e.type)?(ho=u,Yt=Ve(a.firstChild)):Yt=u),re(t,e,e.pendingProps.children,l),di(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Dt&&((u=a=Yt)&&(a=Ab(a,e.type,e.pendingProps,We),a!==null?(e.stateNode=a,me=e,Yt=Ve(a.firstChild),We=!1,u=!0):u=!1),u||ca(e)),ft(e),u=e.type,i=e.pendingProps,f=t!==null?t.memoizedProps:null,a=i.children,ro(u,i)?a=null:f!==null&&ro(u,f)&&(e.flags|=32),e.memoizedState!==null&&(u=cr(t,e,km,null,null,l),pu._currentValue=u),di(t,e),re(t,e,a,l),e.child;case 6:return t===null&&Dt&&((t=l=Yt)&&(l=Sb(l,e.pendingProps,We),l!==null?(e.stateNode=l,me=e,Yt=null,t=!0):t=!1),t||ca(e)),null;case 13:return _d(t,e,l);case 4:return st(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Fa(e,null,a,l):re(t,e,a,l),e.child;case 11:return Ed(t,e,e.type,e.pendingProps,l);case 7:return re(t,e,e.pendingProps,l),e.child;case 8:return re(t,e,e.pendingProps.children,l),e.child;case 12:return re(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Ol(e,e.type,a.value),re(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,oa(e),u=he(u),a=a(u),e.flags|=1,re(t,e,a,l),e.child;case 14:return Td(t,e,e.type,e.pendingProps,l);case 15:return Dd(t,e,e.type,e.pendingProps,l);case 19:return Bd(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=hi(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=cl(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return Od(t,e,l);case 24:return oa(e),a=he(te),t===null?(u=Ic(),u===null&&(u=Ht,i=Wc(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},tr(e),Ol(e,te,u)):((t.lanes&l)!==0&&(er(t,e),Vn(e,null,null,l),Xn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Ol(e,te,a)):(a=i.cache,Ol(e,te,a),a!==u.cache&&Jc(e,[te],l,!0))),re(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function ml(t){t.flags|=4}function $d(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G0(e)){if(e=Qe.current,e!==null&&((Et&4194048)===Et?Fe!==null:(Et&62914560)!==Et&&(Et&536870912)===0||e!==Fe))throw Gn=Pc,gs;t.flags|=8192}}function pi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?hf():536870912,t.lanes|=e,en|=e)}function Pn(t,e){if(!Dt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Zm(t,e,l){var a=e.pendingProps;switch(Xc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return Lt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),sl(te),k(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Un(e)?ml(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,hs())),Lt(e),null;case 26:return l=e.memoizedState,t===null?(ml(e),l!==null?(Lt(e),$d(e,l)):(Lt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(ml(e),Lt(e),$d(e,l)):(Lt(e),e.flags&=-16777217):(t.memoizedProps!==a&&ml(e),Lt(e),e.flags&=-16777217),null;case 27:dt(e),l=V.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Lt(e),null}t=Q.current,Un(e)?ss(e):(t=$0(u,a,l),e.stateNode=t,ml(e))}return Lt(e),null;case 5:if(dt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Lt(e),null}if(t=Q.current,Un(e))ss(e);else{switch(u=zi(V.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[de]=e,t[ge]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(fe(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ml(e)}}return Lt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=V.current,Un(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=me,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[de]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||R0(t.nodeValue,l)),t||ca(e)}else t=zi(t).createTextNode(a),t[de]=e,e.stateNode=t}return Lt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Un(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[de]=e}else Hn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Lt(e),u=!1}else u=hs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(hl(e),e):(hl(e),null)}if(hl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),pi(e,e.updateQueue),Lt(e),null;case 4:return k(),t===null&&ao(e.stateNode.containerInfo),Lt(e),null;case 10:return sl(e.type),Lt(e),null;case 19:if(q(ee),u=e.memoizedState,u===null)return Lt(e),null;if(a=(e.flags&128)!==0,i=u.rendering,i===null)if(a)Pn(u,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=oi(t),i!==null){for(e.flags|=128,Pn(u,!1),t=i.updateQueue,e.updateQueue=t,pi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)os(l,t),l=l.sibling;return N(ee,ee.current&1|2),e.child}t=t.sibling}u.tail!==null&&Wt()>vi&&(e.flags|=128,a=!0,Pn(u,!1),e.lanes=4194304)}else{if(!a)if(t=oi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,pi(e,t),Pn(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!Dt)return Lt(e),null}else 2*Wt()-u.renderingStartTime>vi&&l!==536870912&&(e.flags|=128,a=!0,Pn(u,!1),e.lanes=4194304);u.isBackwards?(i.sibling=e.child,e.child=i):(t=u.last,t!==null?t.sibling=i:e.child=i,u.last=i)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Wt(),e.sibling=null,t=ee.current,N(ee,a?t&1|2:t&1),e):(Lt(e),null);case 22:case 23:return hl(e),ur(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),l=e.updateQueue,l!==null&&pi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&q(fa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),sl(te),Lt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Km(t,e){switch(Xc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sl(te),k(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dt(e),null;case 13:if(hl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Hn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(ee),null;case 4:return k(),null;case 10:return sl(e.type),null;case 22:case 23:return hl(e),ur(),t!==null&&q(fa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sl(te),null;case 25:return null;default:return null}}function Ud(t,e){switch(Xc(e),e.tag){case 3:sl(te),k();break;case 26:case 27:case 5:dt(e);break;case 4:k();break;case 13:hl(e);break;case 19:q(ee);break;case 10:sl(e.type);break;case 22:case 23:hl(e),ur(),t!==null&&q(fa);break;case 24:sl(te)}}function tu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,f=l.inst;a=i(),f.destroy=a}l=l.next}while(l!==u)}}catch(s){Ut(e,e.return,s)}}function Bl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var f=a.inst,s=f.destroy;if(s!==void 0){f.destroy=void 0,u=e;var h=l,x=s;try{x()}catch(_){Ut(u,h,_)}}}a=a.next}while(a!==i)}}catch(_){Ut(e,e.return,_)}}function Hd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Ts(e,l)}catch(a){Ut(t,t.return,a)}}}function kd(t,e,l){l.props=da(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ut(t,e,a)}}function eu(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Ut(t,e,u)}}function Ie(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Ut(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Ut(t,e,u)}else l.current=null}function Qd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Ut(t,t.return,u)}}function Br(t,e,l){try{var a=t.stateNode;mb(a,t.type,l,e),a[ge]=e}catch(u){Ut(t,t.return,u)}}function qd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ll(t.type)||t.tag===4}function Nr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ll(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $r(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Oi));else if(a!==4&&(a===27&&Ll(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for($r(t,e,l),t=t.sibling;t!==null;)$r(t,e,l),t=t.sibling}function mi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Ll(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(mi(t,e,l),t=t.sibling;t!==null;)mi(t,e,l),t=t.sibling}function Ld(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);fe(e,a,l),e[de]=t,e[ge]=l}catch(i){Ut(t,t.return,i)}}var bl=!1,Jt=!1,Ur=!1,Yd=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Jm(t,e){if(t=t.containerInfo,io=Bi,t=Pf(t),Nc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var f=0,s=-1,h=-1,x=0,_=0,$=t,E=null;e:for(;;){for(var T;$!==l||u!==0&&$.nodeType!==3||(s=f+u),$!==i||a!==0&&$.nodeType!==3||(h=f+a),$.nodeType===3&&(f+=$.nodeValue.length),(T=$.firstChild)!==null;)E=$,$=T;for(;;){if($===t)break e;if(E===l&&++x===u&&(s=f),E===i&&++_===a&&(h=f),(T=$.nextSibling)!==null)break;$=E,E=$.parentNode}$=T}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(co={focusedElem:t,selectionRange:l},Bi=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){switch(e=ne,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var ot=da(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ot,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(it){Ut(l,l.return,it)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)fo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}}function Gd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Nl(t,l),a&4&&tu(5,l);break;case 1:if(Nl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(f){Ut(l,l.return,f)}else{var u=da(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Ut(l,l.return,f)}}a&64&&Hd(l),a&512&&eu(l,l.return);break;case 3:if(Nl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Ts(t,e)}catch(f){Ut(l,l.return,f)}}break;case 27:e===null&&a&4&&Ld(l);case 26:case 5:Nl(t,l),e===null&&a&4&&Qd(l),a&512&&eu(l,l.return);break;case 12:Nl(t,l);break;case 13:Nl(t,l),a&4&&Vd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=nb.bind(null,l),xb(t,l))));break;case 22:if(a=l.memoizedState!==null||bl,!a){e=e!==null&&e.memoizedState!==null||Jt,u=bl;var i=Jt;bl=a,(Jt=e)&&!i?$l(t,l,(l.subtreeFlags&8772)!==0):Nl(t,l),bl=u,Jt=i}break;case 30:break;default:Nl(t,l)}}function jd(t){var e=t.alternate;e!==null&&(t.alternate=null,jd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&mc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Se=!1;function vl(t,e,l){for(l=l.child;l!==null;)Xd(t,e,l),l=l.sibling}function Xd(t,e,l){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(xn,l)}catch{}switch(l.tag){case 26:Jt||Ie(l,e),vl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Jt||Ie(l,e);var a=qt,u=Se;Ll(l.type)&&(qt=l.stateNode,Se=!1),vl(t,e,l),fu(l.stateNode),qt=a,Se=u;break;case 5:Jt||Ie(l,e);case 6:if(a=qt,u=Se,qt=null,vl(t,e,l),qt=a,Se=u,qt!==null)if(Se)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(l.stateNode)}catch(i){Ut(l,e,i)}else try{qt.removeChild(l.stateNode)}catch(i){Ut(l,e,i)}break;case 18:qt!==null&&(Se?(t=qt,B0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),gu(t)):B0(qt,l.stateNode));break;case 4:a=qt,u=Se,qt=l.stateNode.containerInfo,Se=!0,vl(t,e,l),qt=a,Se=u;break;case 0:case 11:case 14:case 15:Jt||Bl(2,l,e),Jt||Bl(4,l,e),vl(t,e,l);break;case 1:Jt||(Ie(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&kd(l,e,a)),vl(t,e,l);break;case 21:vl(t,e,l);break;case 22:Jt=(a=Jt)||l.memoizedState!==null,vl(t,e,l),Jt=a;break;default:vl(t,e,l)}}function Vd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gu(t)}catch(l){Ut(e,e.return,l)}}function Wm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Yd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Yd),e;default:throw Error(r(435,t.tag))}}function Hr(t,e){var l=Wm(t);e.forEach(function(a){var u=ub.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function ze(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,f=e,s=f;t:for(;s!==null;){switch(s.tag){case 27:if(Ll(s.type)){qt=s.stateNode,Se=!1;break t}break;case 5:qt=s.stateNode,Se=!1;break t;case 3:case 4:qt=s.stateNode.containerInfo,Se=!0;break t}s=s.return}if(qt===null)throw Error(r(160));Xd(i,f,u),qt=null,Se=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Zd(e,t),e=e.sibling}var Xe=null;function Zd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ze(e,t),Re(t),a&4&&(Bl(3,t,t.return),tu(3,t),Bl(5,t,t.return));break;case 1:ze(e,t),Re(t),a&512&&(Jt||l===null||Ie(l,l.return)),a&64&&bl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Xe;if(ze(e,t),Re(t),a&512&&(Jt||l===null||Ie(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Dn]||i[de]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),fe(i,a,l),i[de]=t,le(i),a=i;break t;case"link":var f=L0("link","href",u).get(a+(l.href||""));if(f){for(var s=0;s<f.length;s++)if(i=f[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(s,1);break e}}i=u.createElement(a),fe(i,a,l),u.head.appendChild(i);break;case"meta":if(f=L0("meta","content",u).get(a+(l.content||""))){for(s=0;s<f.length;s++)if(i=f[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(s,1);break e}}i=u.createElement(a),fe(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[de]=t,le(i),a=i}t.stateNode=a}else Y0(u,t.type,t.stateNode);else t.stateNode=q0(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Y0(u,t.type,t.stateNode):q0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Br(t,t.memoizedProps,l.memoizedProps)}break;case 27:ze(e,t),Re(t),a&512&&(Jt||l===null||Ie(l,l.return)),l!==null&&a&4&&Br(t,t.memoizedProps,l.memoizedProps);break;case 5:if(ze(e,t),Re(t),a&512&&(Jt||l===null||Ie(l,l.return)),t.flags&32){u=t.stateNode;try{Ba(u,"")}catch(T){Ut(t,t.return,T)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Br(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Ur=!0);break;case 6:if(ze(e,t),Re(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(T){Ut(t,t.return,T)}}break;case 3:if(Mi=null,u=Xe,Xe=Ri(e.containerInfo),ze(e,t),Xe=u,Re(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{gu(e.containerInfo)}catch(T){Ut(t,t.return,T)}Ur&&(Ur=!1,Kd(t));break;case 4:a=Xe,Xe=Ri(t.stateNode.containerInfo),ze(e,t),Re(t),Xe=a;break;case 12:ze(e,t),Re(t);break;case 13:ze(e,t),Re(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Gr=Wt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Hr(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,x=bl,_=Jt;if(bl=x||u,Jt=_||h,ze(e,t),Jt=_,bl=x,Re(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||bl||Jt||ha(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{s=h.stateNode;var $=h.memoizedProps.style,E=$!=null&&$.hasOwnProperty("display")?$.display:null;s.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){Ut(h,h.return,T)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(T){Ut(h,h.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Hr(t,l))));break;case 19:ze(e,t),Re(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Hr(t,a)));break;case 30:break;case 21:break;default:ze(e,t),Re(t)}}function Re(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(qd(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=Nr(t);mi(t,i,u);break;case 5:var f=l.stateNode;l.flags&32&&(Ba(f,""),l.flags&=-33);var s=Nr(t);mi(t,s,f);break;case 3:case 4:var h=l.stateNode.containerInfo,x=Nr(t);$r(t,x,h);break;default:throw Error(r(161))}}catch(_){Ut(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Kd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Nl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Gd(t,e.alternate,e),e=e.sibling}function ha(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Bl(4,e,e.return),ha(e);break;case 1:Ie(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&kd(e,e.return,l),ha(e);break;case 27:fu(e.stateNode);case 26:case 5:Ie(e,e.return),ha(e);break;case 22:e.memoizedState===null&&ha(e);break;case 30:ha(e);break;default:ha(e)}t=t.sibling}}function $l(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,f=i.flags;switch(i.tag){case 0:case 11:case 15:$l(u,i,l),tu(4,i);break;case 1:if($l(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(x){Ut(a,a.return,x)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)Es(h[u],s)}catch(x){Ut(a,a.return,x)}}l&&f&64&&Hd(i),eu(i,i.return);break;case 27:Ld(i);case 26:case 5:$l(u,i,l),l&&a===null&&f&4&&Qd(i),eu(i,i.return);break;case 12:$l(u,i,l);break;case 13:$l(u,i,l),l&&f&4&&Vd(u,i);break;case 22:i.memoizedState===null&&$l(u,i,l),eu(i,i.return);break;case 30:break;default:$l(u,i,l)}e=e.sibling}}function kr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&qn(l))}function Qr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qn(t))}function Pe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jd(t,e,l,a),e=e.sibling}function Jd(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Pe(t,e,l,a),u&2048&&tu(9,e);break;case 1:Pe(t,e,l,a);break;case 3:Pe(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qn(t)));break;case 12:if(u&2048){Pe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,f=i.id,s=i.onPostCommit;typeof s=="function"&&s(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ut(e,e.return,h)}}else Pe(t,e,l,a);break;case 13:Pe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,f=e.alternate,e.memoizedState!==null?i._visibility&2?Pe(t,e,l,a):lu(t,e):i._visibility&2?Pe(t,e,l,a):(i._visibility|=2,Ia(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&kr(f,e);break;case 24:Pe(t,e,l,a),u&2048&&Qr(e.alternate,e);break;default:Pe(t,e,l,a)}}function Ia(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,f=e,s=l,h=a,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ia(i,f,s,h,u),tu(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Ia(i,f,s,h,u):lu(i,f):(_._visibility|=2,Ia(i,f,s,h,u)),u&&x&2048&&kr(f.alternate,f);break;case 24:Ia(i,f,s,h,u),u&&x&2048&&Qr(f.alternate,f);break;default:Ia(i,f,s,h,u)}e=e.sibling}}function lu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:lu(l,a),u&2048&&kr(a.alternate,a);break;case 24:lu(l,a),u&2048&&Qr(a.alternate,a);break;default:lu(l,a)}e=e.sibling}}var au=8192;function Pa(t){if(t.subtreeFlags&au)for(t=t.child;t!==null;)Wd(t),t=t.sibling}function Wd(t){switch(t.tag){case 26:Pa(t),t.flags&au&&t.memoizedState!==null&&$b(Xe,t.memoizedState,t.memoizedProps);break;case 5:Pa(t);break;case 3:case 4:var e=Xe;Xe=Ri(t.stateNode.containerInfo),Pa(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=au,au=16777216,Pa(t),au=e):Pa(t));break;default:Pa(t)}}function Fd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function nu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ne=a,Pd(a,t)}Fd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(t),t=t.sibling}function Id(t){switch(t.tag){case 0:case 11:case 15:nu(t),t.flags&2048&&Bl(9,t,t.return);break;case 3:nu(t);break;case 12:nu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,bi(t)):nu(t);break;default:nu(t)}}function bi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ne=a,Pd(a,t)}Fd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Bl(8,e,e.return),bi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,bi(e));break;default:bi(e)}t=t.sibling}}function Pd(t,e){for(;ne!==null;){var l=ne;switch(l.tag){case 0:case 11:case 15:Bl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:qn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ne=a;else t:for(l=t;ne!==null;){a=ne;var u=a.sibling,i=a.return;if(jd(a),a===l){ne=null;break t}if(u!==null){u.return=i,ne=u;break t}ne=i}}}var Fm={getCacheForType:function(t){var e=he(te),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Im=typeof WeakMap=="function"?WeakMap:Map,Rt=0,Ht=null,yt=null,Et=0,wt=0,we=null,Ul=!1,tn=!1,qr=!1,gl=0,Gt=0,Hl=0,pa=0,Lr=0,qe=0,en=0,uu=null,xe=null,Yr=!1,Gr=0,vi=1/0,gi=null,kl=null,oe=0,Ql=null,ln=null,an=0,jr=0,Xr=null,t0=null,iu=0,Vr=null;function Me(){if((Rt&2)!==0&&Et!==0)return Et&-Et;if(w.T!==null){var t=ja;return t!==0?t:Pr()}return bf()}function e0(){qe===0&&(qe=(Et&536870912)===0||Dt?df():536870912);var t=Qe.current;return t!==null&&(t.flags|=32),qe}function _e(t,e,l){(t===Ht&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(nn(t,0),ql(t,Et,qe,!1)),Tn(t,l),((Rt&2)===0||t!==Ht)&&(t===Ht&&((Rt&2)===0&&(pa|=l),Gt===4&&ql(t,Et,qe,!1)),tl(t))}function l0(t,e,l){if((Rt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||En(t,e),u=a?eb(t,e):Jr(t,e,!0),i=a;do{if(u===0){tn&&!a&&ql(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!Pm(l)){u=Jr(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var s=t;u=uu;var h=s.current.memoizedState.isDehydrated;if(h&&(nn(s,f).flags|=256),f=Jr(s,f,!1),f!==2){if(qr&&!h){s.errorRecoveryDisabledLanes|=i,pa|=i,u=4;break t}i=xe,xe=u,i!==null&&(xe===null?xe=i:xe.push.apply(xe,i))}u=f}if(i=!1,u!==2)continue}}if(u===1){nn(t,0),ql(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:ql(a,e,qe,!Ul);break t;case 2:xe=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Gr+300-Wt(),10<u)){if(ql(a,e,qe,!Ul),wu(a,0,!0)!==0)break t;a.timeoutHandle=_0(a0.bind(null,a,l,xe,gi,Yr,e,qe,pa,en,Ul,i,2,-0,0),u);break t}a0(a,l,xe,gi,Yr,e,qe,pa,en,Ul,i,0,-0,0)}}break}while(!0);tl(t)}function a0(t,e,l,a,u,i,f,s,h,x,_,$,E,T){if(t.timeoutHandle=-1,$=e.subtreeFlags,($&8192||($&16785408)===16785408)&&(hu={stylesheets:null,count:0,unsuspend:Nb},Wd(e),$=Ub(),$!==null)){t.cancelPendingCommit=$(f0.bind(null,t,e,i,l,a,u,f,s,h,_,1,E,T)),ql(t,i,f,!x);return}f0(t,e,i,l,a,u,f,s,h)}function Pm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!De(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ql(t,e,l,a){e&=~Lr,e&=~pa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-Te(u),f=1<<i;a[i]=-1,u&=~f}l!==0&&pf(t,l,e)}function yi(){return(Rt&6)===0?(cu(0),!1):!0}function Zr(){if(yt!==null){if(wt===0)var t=yt.return;else t=yt,fl=ra=null,fr(t),Wa=null,Fn=0,t=yt;for(;t!==null;)Ud(t.alternate,t),t=t.return;yt=null}}function nn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,vb(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Zr(),Ht=t,yt=l=cl(t.current,null),Et=e,wt=0,we=null,Ul=!1,tn=En(t,e),qr=!1,en=qe=Lr=pa=Hl=Gt=0,xe=uu=null,Yr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-Te(a),i=1<<u;e|=t[u],a&=~i}return gl=e,Lu(),l}function n0(t,e){bt=null,w.H=ii,e===Yn||e===Wu?(e=Ss(),wt=3):e===gs?(e=Ss(),wt=4):wt=e===xd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,we=e,yt===null&&(Gt=1,si(t,$e(e,t.current)))}function u0(){var t=w.H;return w.H=ii,t===null?ii:t}function i0(){var t=w.A;return w.A=Fm,t}function Kr(){Gt=4,Ul||(Et&4194048)!==Et&&Qe.current!==null||(tn=!0),(Hl&134217727)===0&&(pa&134217727)===0||Ht===null||ql(Ht,Et,qe,!1)}function Jr(t,e,l){var a=Rt;Rt|=2;var u=u0(),i=i0();(Ht!==t||Et!==e)&&(gi=null,nn(t,e)),e=!1;var f=Gt;t:do try{if(wt!==0&&yt!==null){var s=yt,h=we;switch(wt){case 8:Zr(),f=6;break t;case 3:case 2:case 9:case 6:Qe.current===null&&(e=!0);var x=wt;if(wt=0,we=null,un(t,s,h,x),l&&tn){f=0;break t}break;default:x=wt,wt=0,we=null,un(t,s,h,x)}}tb(),f=Gt;break}catch(_){n0(t,_)}while(!0);return e&&t.shellSuspendCounter++,fl=ra=null,Rt=a,w.H=u,w.A=i,yt===null&&(Ht=null,Et=0,Lu()),f}function tb(){for(;yt!==null;)c0(yt)}function eb(t,e){var l=Rt;Rt|=2;var a=u0(),u=i0();Ht!==t||Et!==e?(gi=null,vi=Wt()+500,nn(t,e)):tn=En(t,e);t:do try{if(wt!==0&&yt!==null){e=yt;var i=we;e:switch(wt){case 1:wt=0,we=null,un(t,e,i,1);break;case 2:case 9:if(ys(i)){wt=0,we=null,r0(e);break}e=function(){wt!==2&&wt!==9||Ht!==t||(wt=7),tl(t)},i.then(e,e);break t;case 3:wt=7;break t;case 4:wt=5;break t;case 7:ys(i)?(wt=0,we=null,r0(e)):(wt=0,we=null,un(t,e,i,7));break;case 5:var f=null;switch(yt.tag){case 26:f=yt.memoizedState;case 5:case 27:var s=yt;if(!f||G0(f)){wt=0,we=null;var h=s.sibling;if(h!==null)yt=h;else{var x=s.return;x!==null?(yt=x,Ai(x)):yt=null}break e}}wt=0,we=null,un(t,e,i,5);break;case 6:wt=0,we=null,un(t,e,i,6);break;case 8:Zr(),Gt=6;break t;default:throw Error(r(462))}}lb();break}catch(_){n0(t,_)}while(!0);return fl=ra=null,w.H=a,w.A=u,Rt=l,yt!==null?0:(Ht=null,Et=0,Lu(),Gt)}function lb(){for(;yt!==null&&!Zt();)c0(yt)}function c0(t){var e=Nd(t.alternate,t,gl);t.memoizedProps=t.pendingProps,e===null?Ai(t):yt=e}function r0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Rd(l,e,e.pendingProps,e.type,void 0,Et);break;case 11:e=Rd(l,e,e.pendingProps,e.type.render,e.ref,Et);break;case 5:fr(e);default:Ud(l,e),e=yt=os(e,gl),e=Nd(l,e,gl)}t.memoizedProps=t.pendingProps,e===null?Ai(t):yt=e}function un(t,e,l,a){fl=ra=null,fr(e),Wa=null,Fn=0;var u=e.return;try{if(Xm(t,u,e,l,Et)){Gt=1,si(t,$e(l,t.current)),yt=null;return}}catch(i){if(u!==null)throw yt=u,i;Gt=1,si(t,$e(l,t.current)),yt=null;return}e.flags&32768?(Dt||a===1?t=!0:tn||(Et&536870912)!==0?t=!1:(Ul=t=!0,(a===2||a===9||a===3||a===6)&&(a=Qe.current,a!==null&&a.tag===13&&(a.flags|=16384))),o0(e,t)):Ai(e)}function Ai(t){var e=t;do{if((e.flags&32768)!==0){o0(e,Ul);return}t=e.return;var l=Zm(e.alternate,e,gl);if(l!==null){yt=l;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Gt===0&&(Gt=5)}function o0(t,e){do{var l=Km(t.alternate,t);if(l!==null){l.flags&=32767,yt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){yt=t;return}yt=t=l}while(t!==null);Gt=6,yt=null}function f0(t,e,l,a,u,i,f,s,h){t.cancelPendingCommit=null;do Si();while(oe!==0);if((Rt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Qc,Np(t,l,i,f,s,h),t===Ht&&(yt=Ht=null,Et=0),ln=e,Ql=t,an=l,jr=i,Xr=u,t0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ib(xl,function(){return m0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=w.T,w.T=null,u=Y.p,Y.p=2,f=Rt,Rt|=4;try{Jm(t,e,l)}finally{Rt=f,Y.p=u,w.T=a}}oe=1,s0(),d0(),h0()}}function s0(){if(oe===1){oe=0;var t=Ql,e=ln,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=w.T,w.T=null;var a=Y.p;Y.p=2;var u=Rt;Rt|=4;try{Zd(e,t);var i=co,f=Pf(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(f!==s&&s&&s.ownerDocument&&If(s.ownerDocument.documentElement,s)){if(h!==null&&Nc(s)){var x=h.start,_=h.end;if(_===void 0&&(_=x),"selectionStart"in s)s.selectionStart=x,s.selectionEnd=Math.min(_,s.value.length);else{var $=s.ownerDocument||document,E=$&&$.defaultView||window;if(E.getSelection){var T=E.getSelection(),ot=s.textContent.length,it=Math.min(h.start,ot),Bt=h.end===void 0?it:Math.min(h.end,ot);!T.extend&&it>Bt&&(f=Bt,Bt=it,it=f);var y=Ff(s,it),v=Ff(s,Bt);if(y&&v&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var S=$.createRange();S.setStart(y.node,y.offset),T.removeAllRanges(),it>Bt?(T.addRange(S),T.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),T.addRange(S))}}}}for($=[],T=s;T=T.parentNode;)T.nodeType===1&&$.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<$.length;s++){var C=$[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Bi=!!io,co=io=null}finally{Rt=u,Y.p=a,w.T=l}}t.current=e,oe=2}}function d0(){if(oe===2){oe=0;var t=Ql,e=ln,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=w.T,w.T=null;var a=Y.p;Y.p=2;var u=Rt;Rt|=4;try{Gd(t,e.alternate,e)}finally{Rt=u,Y.p=a,w.T=l}}oe=3}}function h0(){if(oe===4||oe===3){oe=0,ve();var t=Ql,e=ln,l=an,a=t0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?oe=5:(oe=0,ln=Ql=null,p0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(kl=null),hc(l),e=e.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(xn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=w.T,u=Y.p,Y.p=2,w.T=null;try{for(var i=t.onRecoverableError,f=0;f<a.length;f++){var s=a[f];i(s.value,{componentStack:s.stack})}}finally{w.T=e,Y.p=u}}(an&3)!==0&&Si(),tl(t),u=t.pendingLanes,(l&4194090)!==0&&(u&42)!==0?t===Vr?iu++:(iu=0,Vr=t):iu=0,cu(0)}}function p0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,qn(e)))}function Si(t){return s0(),d0(),h0(),m0()}function m0(){if(oe!==5)return!1;var t=Ql,e=jr;jr=0;var l=hc(an),a=w.T,u=Y.p;try{Y.p=32>l?32:l,w.T=null,l=Xr,Xr=null;var i=Ql,f=an;if(oe=0,ln=Ql=null,an=0,(Rt&6)!==0)throw Error(r(331));var s=Rt;if(Rt|=4,Id(i.current),Jd(i,i.current,f,l),Rt=s,cu(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(xn,i)}catch{}return!0}finally{Y.p=u,w.T=a,p0(t,e)}}function b0(t,e,l){e=$e(l,e),e=Tr(t.stateNode,e,2),t=wl(t,e,2),t!==null&&(Tn(t,2),tl(t))}function Ut(t,e,l){if(t.tag===3)b0(t,t,l);else for(;e!==null;){if(e.tag===3){b0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(kl===null||!kl.has(a))){t=$e(l,t),l=Ad(2),a=wl(e,l,2),a!==null&&(Sd(l,a,e,t),Tn(a,2),tl(a));break}}e=e.return}}function Wr(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Im;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(qr=!0,u.add(l),t=ab.bind(null,t,e,l),e.then(t,t))}function ab(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Ht===t&&(Et&l)===l&&(Gt===4||Gt===3&&(Et&62914560)===Et&&300>Wt()-Gr?(Rt&2)===0&&nn(t,0):Lr|=l,en===Et&&(en=0)),tl(t)}function v0(t,e){e===0&&(e=hf()),t=qa(t,e),t!==null&&(Tn(t,e),tl(t))}function nb(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),v0(t,l)}function ub(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),v0(t,l)}function ib(t,e){return Mt(t,e)}var xi=null,cn=null,Fr=!1,Ei=!1,Ir=!1,ma=0;function tl(t){t!==cn&&t.next===null&&(cn===null?xi=cn=t:cn=cn.next=t),Ei=!0,Fr||(Fr=!0,rb())}function cu(t,e){if(!Ir&&Ei){Ir=!0;do for(var l=!1,a=xi;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var f=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Te(42|t)+1)-1,i&=u&~(f&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,S0(a,i))}else i=Et,i=wu(a,a===Ht?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||En(a,i)||(l=!0,S0(a,i));a=a.next}while(l);Ir=!1}}function cb(){g0()}function g0(){Ei=Fr=!1;var t=0;ma!==0&&(bb()&&(t=ma),ma=0);for(var e=Wt(),l=null,a=xi;a!==null;){var u=a.next,i=y0(a,e);i===0?(a.next=null,l===null?xi=u:l.next=u,u===null&&(cn=l)):(l=a,(t!==0||(i&3)!==0)&&(Ei=!0)),a=u}cu(t)}function y0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var f=31-Te(i),s=1<<f,h=u[f];h===-1?((s&l)===0||(s&a)!==0)&&(u[f]=Bp(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=Ht,l=Et,l=wu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vt(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||En(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Vt(a),hc(l)){case 2:case 8:l=Da;break;case 32:l=xl;break;case 268435456:l=Sn;break;default:l=xl}return a=A0.bind(null,t),l=Mt(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Vt(a),t.callbackPriority=2,t.callbackNode=null,2}function A0(t,e){if(oe!==0&&oe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Si()&&t.callbackNode!==l)return null;var a=Et;return a=wu(t,t===Ht?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(l0(t,a,e),y0(t,Wt()),t.callbackNode!=null&&t.callbackNode===l?A0.bind(null,t):null)}function S0(t,e){if(Si())return null;l0(t,e,!0)}function rb(){gb(function(){(Rt&6)!==0?Mt(Ge,cb):g0()})}function Pr(){return ma===0&&(ma=df()),ma}function x0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nu(""+t)}function E0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function ob(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=x0((u[ge]||null).action),f=a.submitter;f&&(e=(e=f[ge]||null)?x0(e.formAction):f.getAttribute("formAction"),e!==null&&(i=e,f=null));var s=new ku("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ma!==0){var h=f?E0(u,f):new FormData(u);yr(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=f?E0(u,f):new FormData(u),yr(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var to=0;to<kc.length;to++){var eo=kc[to],fb=eo.toLowerCase(),sb=eo[0].toUpperCase()+eo.slice(1);je(fb,"on"+sb)}je(ls,"onAnimationEnd"),je(as,"onAnimationIteration"),je(ns,"onAnimationStart"),je("dblclick","onDoubleClick"),je("focusin","onFocus"),je("focusout","onBlur"),je(Rm,"onTransitionRun"),je(wm,"onTransitionStart"),je(Mm,"onTransitionCancel"),je(us,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),Pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function T0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var f=a.length-1;0<=f;f--){var s=a[f],h=s.instance,x=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=x;try{i(u)}catch(_){fi(_)}u.currentTarget=null,i=h}else for(f=0;f<a.length;f++){if(s=a[f],h=s.instance,x=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=x;try{i(u)}catch(_){fi(_)}u.currentTarget=null,i=h}}}}function At(t,e){var l=e[pc];l===void 0&&(l=e[pc]=new Set);var a=t+"__bubble";l.has(a)||(D0(e,t,2,!1),l.add(a))}function lo(t,e,l){var a=0;e&&(a|=4),D0(l,t,a,e)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[Ti]){t[Ti]=!0,gf.forEach(function(l){l!=="selectionchange"&&(db.has(l)||lo(l,!1,t),lo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ti]||(e[Ti]=!0,lo("selectionchange",!1,e))}}function D0(t,e,l,a){switch(J0(e)){case 2:var u=Qb;break;case 8:u=qb;break;default:u=go}l=u.bind(null,e,l,t),u=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function no(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var s=a.stateNode.containerInfo;if(s===u)break;if(f===4)for(f=a.return;f!==null;){var h=f.tag;if((h===3||h===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;s!==null;){if(f=za(s),f===null)return;if(h=f.tag,h===5||h===6||h===26||h===27){a=i=f;continue t}s=s.parentNode}}a=a.return}Cf(function(){var x=i,_=Ec(l),$=[];t:{var E=is.get(t);if(E!==void 0){var T=ku,ot=t;switch(t){case"keypress":if(Uu(l)===0)break t;case"keydown":case"keyup":T=im;break;case"focusin":ot="focus",T=wc;break;case"focusout":ot="blur",T=wc;break;case"beforeblur":case"afterblur":T=wc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=om;break;case ls:case as:case ns:T=Fp;break;case us:T=sm;break;case"scroll":case"scrollend":T=Vp;break;case"wheel":T=hm;break;case"copy":case"cut":case"paste":T=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Hf;break;case"toggle":case"beforetoggle":T=mm}var it=(e&4)!==0,Bt=!it&&(t==="scroll"||t==="scrollend"),y=it?E!==null?E+"Capture":null:E;it=[];for(var v=x,S;v!==null;){var C=v;if(S=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||S===null||y===null||(C=zn(v,y),C!=null&&it.push(ou(v,C,S))),Bt)break;v=v.return}0<it.length&&(E=new T(E,ot,null,l,_),$.push({event:E,listeners:it}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",E&&l!==xc&&(ot=l.relatedTarget||l.fromElement)&&(za(ot)||ot[Oa]))break t;if((T||E)&&(E=_.window===_?_:(E=_.ownerDocument)?E.defaultView||E.parentWindow:window,T?(ot=l.relatedTarget||l.toElement,T=x,ot=ot?za(ot):null,ot!==null&&(Bt=m(ot),it=ot.tag,ot!==Bt||it!==5&&it!==27&&it!==6)&&(ot=null)):(T=null,ot=x),T!==ot)){if(it=$f,C="onMouseLeave",y="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(it=Hf,C="onPointerLeave",y="onPointerEnter",v="pointer"),Bt=T==null?E:On(T),S=ot==null?E:On(ot),E=new it(C,v+"leave",T,l,_),E.target=Bt,E.relatedTarget=S,C=null,za(_)===x&&(it=new it(y,v+"enter",ot,l,_),it.target=S,it.relatedTarget=Bt,C=it),Bt=C,T&&ot)e:{for(it=T,y=ot,v=0,S=it;S;S=rn(S))v++;for(S=0,C=y;C;C=rn(C))S++;for(;0<v-S;)it=rn(it),v--;for(;0<S-v;)y=rn(y),S--;for(;v--;){if(it===y||y!==null&&it===y.alternate)break e;it=rn(it),y=rn(y)}it=null}else it=null;T!==null&&O0($,E,T,it,!1),ot!==null&&Bt!==null&&O0($,Bt,ot,it,!0)}}t:{if(E=x?On(x):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var at=Xf;else if(Gf(E))if(Vf)at=Dm;else{at=Em;var gt=xm}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?x&&Sc(x.elementType)&&(at=Xf):at=Tm;if(at&&(at=at(t,x))){jf($,at,l,_);break t}gt&&gt(t,E,x),t==="focusout"&&x&&E.type==="number"&&x.memoizedProps.value!=null&&Ac(E,"number",E.value)}switch(gt=x?On(x):window,t){case"focusin":(Gf(gt)||gt.contentEditable==="true")&&(Ha=gt,$c=x,$n=null);break;case"focusout":$n=$c=Ha=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,ts($,l,_);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":ts($,l,_)}var nt;if(_c)t:{switch(t){case"compositionstart":var ct="onCompositionStart";break t;case"compositionend":ct="onCompositionEnd";break t;case"compositionupdate":ct="onCompositionUpdate";break t}ct=void 0}else Ua?Lf(t,l)&&(ct="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(kf&&l.locale!=="ko"&&(Ua||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ua&&(nt=Bf()):(Dl=_,Oc="value"in Dl?Dl.value:Dl.textContent,Ua=!0)),gt=Di(x,ct),0<gt.length&&(ct=new Uf(ct,t,null,l,_),$.push({event:ct,listeners:gt}),nt?ct.data=nt:(nt=Yf(l),nt!==null&&(ct.data=nt)))),(nt=vm?gm(t,l):ym(t,l))&&(ct=Di(x,"onBeforeInput"),0<ct.length&&(gt=new Uf("onBeforeInput","beforeinput",null,l,_),$.push({event:gt,listeners:ct}),gt.data=nt)),ob($,t,x,l,_)}T0($,e)})}function ou(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Di(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=zn(t,l),u!=null&&a.unshift(ou(t,u,i)),u=zn(t,e),u!=null&&a.push(ou(t,u,i))),t.tag===3)return a;t=t.return}return[]}function rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O0(t,e,l,a,u){for(var i=e._reactName,f=[];l!==null&&l!==a;){var s=l,h=s.alternate,x=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||x===null||(h=x,u?(x=zn(l,i),x!=null&&f.unshift(ou(l,x,h))):u||(x=zn(l,i),x!=null&&f.push(ou(l,x,h)))),l=l.return}f.length!==0&&t.push({event:e,listeners:f})}var hb=/\r\n?/g,pb=/\u0000|\uFFFD/g;function z0(t){return(typeof t=="string"?t:""+t).replace(hb,`
`).replace(pb,"")}function R0(t,e){return e=z0(e),z0(t)===e}function Oi(){}function Ct(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ba(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ba(t,""+a);break;case"className":_u(t,"class",a);break;case"tabIndex":_u(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":_u(t,l,a);break;case"style":Mf(t,a,i);break;case"data":if(e!=="object"){_u(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Nu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Ct(t,e,"name",u.name,u,null),Ct(t,e,"formEncType",u.formEncType,u,null),Ct(t,e,"formMethod",u.formMethod,u,null),Ct(t,e,"formTarget",u.formTarget,u,null)):(Ct(t,e,"encType",u.encType,u,null),Ct(t,e,"method",u.method,u,null),Ct(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Nu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Oi);break;case"onScroll":a!=null&&At("scroll",t);break;case"onScrollEnd":a!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Nu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":At("beforetoggle",t),At("toggle",t),Mu(t,"popover",a);break;case"xlinkActuate":ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=jp.get(l)||l,Mu(t,l,a))}}function uo(t,e,l,a,u,i){switch(l){case"style":Mf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ba(t,a):(typeof a=="number"||typeof a=="bigint")&&Ba(t,""+a);break;case"onScroll":a!=null&&At("scroll",t);break;case"onScrollEnd":a!=null&&At("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Oi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ge]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Mu(t,l,a)}}}function fe(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var f=l[i];if(f!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ct(t,e,i,f,l,null)}}u&&Ct(t,e,"srcSet",l.srcSet,l,null),a&&Ct(t,e,"src",l.src,l,null);return;case"input":At("invalid",t);var s=i=f=u=null,h=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var _=l[a];if(_!=null)switch(a){case"name":u=_;break;case"type":f=_;break;case"checked":h=_;break;case"defaultChecked":x=_;break;case"value":i=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:Ct(t,e,a,_,l,null)}}Of(t,i,s,h,x,f,u,!1),Cu(t);return;case"select":At("invalid",t),a=f=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":f=s;break;case"multiple":a=s;default:Ct(t,e,u,s,l,null)}e=i,l=f,t.multiple=!!a,e!=null?Ca(t,!!a,e,!1):l!=null&&Ca(t,!!a,l,!0);return;case"textarea":At("invalid",t),i=u=a=null;for(f in l)if(l.hasOwnProperty(f)&&(s=l[f],s!=null))switch(f){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:Ct(t,e,f,s,l,null)}Rf(t,a,u,i),Cu(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ct(t,e,h,a,l,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(a=0;a<ru.length;a++)At(ru[a],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Ct(t,e,x,a,l,null)}return;default:if(Sc(e)){for(_ in l)l.hasOwnProperty(_)&&(a=l[_],a!==void 0&&uo(t,e,_,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&Ct(t,e,s,a,l,null))}function mb(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,f=null,s=null,h=null,x=null,_=null;for(T in l){var $=l[T];if(l.hasOwnProperty(T)&&$!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=$;default:a.hasOwnProperty(T)||Ct(t,e,T,null,a,$)}}for(var E in a){var T=a[E];if($=l[E],a.hasOwnProperty(E)&&(T!=null||$!=null))switch(E){case"type":i=T;break;case"name":u=T;break;case"checked":x=T;break;case"defaultChecked":_=T;break;case"value":f=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:T!==$&&Ct(t,e,E,T,a,$)}}yc(t,f,s,h,x,_,i,u);return;case"select":T=f=s=E=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":T=h;default:a.hasOwnProperty(i)||Ct(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":f=i;default:i!==h&&Ct(t,e,u,i,a,h)}e=s,l=f,a=T,E!=null?Ca(t,!!l,E,!1):!!a!=!!l&&(e!=null?Ca(t,!!l,e,!0):Ca(t,!!l,l?[]:"",!1));return;case"textarea":T=E=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ct(t,e,s,null,a,u)}for(f in a)if(u=a[f],i=l[f],a.hasOwnProperty(f)&&(u!=null||i!=null))switch(f){case"value":E=u;break;case"defaultValue":T=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&Ct(t,e,f,u,a,i)}zf(t,E,T);return;case"option":for(var ot in l)if(E=l[ot],l.hasOwnProperty(ot)&&E!=null&&!a.hasOwnProperty(ot))switch(ot){case"selected":t.selected=!1;break;default:Ct(t,e,ot,null,a,E)}for(h in a)if(E=a[h],T=l[h],a.hasOwnProperty(h)&&E!==T&&(E!=null||T!=null))switch(h){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Ct(t,e,h,E,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in l)E=l[it],l.hasOwnProperty(it)&&E!=null&&!a.hasOwnProperty(it)&&Ct(t,e,it,null,a,E);for(x in a)if(E=a[x],T=l[x],a.hasOwnProperty(x)&&E!==T&&(E!=null||T!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,e));break;default:Ct(t,e,x,E,a,T)}return;default:if(Sc(e)){for(var Bt in l)E=l[Bt],l.hasOwnProperty(Bt)&&E!==void 0&&!a.hasOwnProperty(Bt)&&uo(t,e,Bt,void 0,a,E);for(_ in a)E=a[_],T=l[_],!a.hasOwnProperty(_)||E===T||E===void 0&&T===void 0||uo(t,e,_,E,a,T);return}}for(var y in l)E=l[y],l.hasOwnProperty(y)&&E!=null&&!a.hasOwnProperty(y)&&Ct(t,e,y,null,a,E);for($ in a)E=a[$],T=l[$],!a.hasOwnProperty($)||E===T||E==null&&T==null||Ct(t,e,$,E,a,T)}var io=null,co=null;function zi(t){return t.nodeType===9?t:t.ownerDocument}function w0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ro(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oo=null;function bb(){var t=window.event;return t&&t.type==="popstate"?t===oo?!1:(oo=t,!0):(oo=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,vb=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,gb=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(t){return C0.resolve(null).then(t).catch(yb)}:_0;function yb(t){setTimeout(function(){throw t})}function Ll(t){return t==="head"}function B0(t,e){var l=e,a=0,u=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var f=t.ownerDocument;if(l&1&&fu(f.documentElement),l&2&&fu(f.body),l&4)for(l=f.head,fu(l),f=l.firstChild;f;){var s=f.nextSibling,h=f.nodeName;f[Dn]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=s}}if(u===0){t.removeChild(i),gu(e);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);gu(e)}function fo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":fo(l),mc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Ab(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Dn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ve(t.nextSibling),t===null)break}return null}function Sb(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ve(t.nextSibling),t===null))return null;return t}function so(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function xb(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ho=null;function N0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function $0(t,e,l){switch(e=zi(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function fu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);mc(t)}var Le=new Map,U0=new Set;function Ri(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var yl=Y.d;Y.d={f:Eb,r:Tb,D:Db,C:Ob,L:zb,m:Rb,X:Mb,S:wb,M:_b};function Eb(){var t=yl.f(),e=yi();return t||e}function Tb(t){var e=Ra(t);e!==null&&e.tag===5&&e.type==="form"?ld(e):yl.r(t)}var on=typeof document>"u"?null:document;function H0(t,e,l){var a=on;if(a&&typeof e=="string"&&e){var u=Ne(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),U0.has(u)||(U0.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),fe(e,"link",t),le(e),a.head.appendChild(e)))}}function Db(t){yl.D(t),H0("dns-prefetch",t,null)}function Ob(t,e){yl.C(t,e),H0("preconnect",t,e)}function zb(t,e,l){yl.L(t,e,l);var a=on;if(a&&t&&e){var u='link[rel="preload"][as="'+Ne(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Ne(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Ne(l.imageSizes)+'"]')):u+='[href="'+Ne(t)+'"]';var i=u;switch(e){case"style":i=fn(t);break;case"script":i=sn(t)}Le.has(i)||(t=z({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Le.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(su(i))||e==="script"&&a.querySelector(du(i))||(e=a.createElement("link"),fe(e,"link",t),le(e),a.head.appendChild(e)))}}function Rb(t,e){yl.m(t,e);var l=on;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Ne(a)+'"][href="'+Ne(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=sn(t)}if(!Le.has(i)&&(t=z({rel:"modulepreload",href:t},e),Le.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(du(i)))return}a=l.createElement("link"),fe(a,"link",t),le(a),l.head.appendChild(a)}}}function wb(t,e,l){yl.S(t,e,l);var a=on;if(a&&t){var u=wa(a).hoistableStyles,i=fn(t);e=e||"default";var f=u.get(i);if(!f){var s={loading:0,preload:null};if(f=a.querySelector(su(i)))s.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Le.get(i))&&po(t,l);var h=f=a.createElement("link");le(h),fe(h,"link",t),h._p=new Promise(function(x,_){h.onload=x,h.onerror=_}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,wi(f,e,a)}f={type:"stylesheet",instance:f,count:1,state:s},u.set(i,f)}}}function Mb(t,e){yl.X(t,e);var l=on;if(l&&t){var a=wa(l).hoistableScripts,u=sn(t),i=a.get(u);i||(i=l.querySelector(du(u)),i||(t=z({src:t,async:!0},e),(e=Le.get(u))&&mo(t,e),i=l.createElement("script"),le(i),fe(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function _b(t,e){yl.M(t,e);var l=on;if(l&&t){var a=wa(l).hoistableScripts,u=sn(t),i=a.get(u);i||(i=l.querySelector(du(u)),i||(t=z({src:t,async:!0,type:"module"},e),(e=Le.get(u))&&mo(t,e),i=l.createElement("script"),le(i),fe(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function k0(t,e,l,a){var u=(u=V.current)?Ri(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=fn(l.href),l=wa(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=fn(l.href);var i=wa(u).hoistableStyles,f=i.get(t);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,f),(i=u.querySelector(su(t)))&&!i._p&&(f.instance=i,f.state.loading=5),Le.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Le.set(t,l),i||Cb(u,t,l,f.state))),e&&a===null)throw Error(r(528,""));return f}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=sn(l),l=wa(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function fn(t){return'href="'+Ne(t)+'"'}function su(t){return'link[rel="stylesheet"]['+t+"]"}function Q0(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function Cb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),fe(e,"link",l),le(e),t.head.appendChild(e))}function sn(t){return'[src="'+Ne(t)+'"]'}function du(t){return"script[async]"+t}function q0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ne(l.href)+'"]');if(a)return e.instance=a,le(a),a;var u=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),le(a),fe(a,"style",u),wi(a,l.precedence,t),e.instance=a;case"stylesheet":u=fn(l.href);var i=t.querySelector(su(u));if(i)return e.state.loading|=4,e.instance=i,le(i),i;a=Q0(l),(u=Le.get(u))&&po(a,u),i=(t.ownerDocument||t).createElement("link"),le(i);var f=i;return f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),fe(i,"link",a),e.state.loading|=4,wi(i,l.precedence,t),e.instance=i;case"script":return i=sn(l.src),(u=t.querySelector(du(i)))?(e.instance=u,le(u),u):(a=l,(u=Le.get(i))&&(a=z({},l),mo(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),le(u),fe(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,wi(a,l.precedence,t));return e.instance}function wi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,f=0;f<a.length;f++){var s=a[f];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function po(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function mo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Mi=null;function L0(t,e,l){if(Mi===null){var a=new Map,u=Mi=new Map;u.set(l,a)}else u=Mi,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Dn]||i[de]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(e)||"";f=t+f;var s=a.get(f);s?s.push(i):a.set(f,[i])}}return a}function Y0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Bb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function G0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var hu=null;function Nb(){}function $b(t,e,l){if(hu===null)throw Error(r(475));var a=hu;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=fn(l.href),i=t.querySelector(su(u));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=_i.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,le(i);return}i=t.ownerDocument||t,l=Q0(l),(u=Le.get(u))&&po(l,u),i=i.createElement("link"),le(i);var f=i;f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),fe(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=_i.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Ub(){if(hu===null)throw Error(r(475));var t=hu;return t.stylesheets&&t.count===0&&bo(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&bo(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function _i(){if(this.count--,this.count===0){if(this.stylesheets)bo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ci=null;function bo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ci=new Map,e.forEach(Hb,t),Ci=null,_i.call(t))}function Hb(t,e){if(!(e.state.loading&4)){var l=Ci.get(t);if(l)var a=l.get(null);else{l=new Map,Ci.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var f=u[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),a=f)}a&&l.set(null,a)}u=e.instance,f=u.getAttribute("data-precedence"),i=l.get(f)||a,i===a&&l.set(null,u),l.set(f,u),this.count++,a=_i.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var pu={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function kb(t,e,l,a,u,i,f,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.hiddenUpdates=sc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function j0(t,e,l,a,u,i,f,s,h,x,_,$){return t=new kb(t,e,l,f,s,h,x,$),e=1,i===!0&&(e|=24),i=Oe(3,null,null,e),t.current=i,i.stateNode=t,e=Wc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},tr(i),t}function X0(t){return t?(t=La,t):La}function V0(t,e,l,a,u,i){u=X0(u),a.context===null?a.context=u:a.pendingContext=u,a=Rl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=wl(t,a,e),l!==null&&(_e(l,t,e),jn(l,t,e))}function Z0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function vo(t,e){Z0(t,e),(t=t.alternate)&&Z0(t,e)}function K0(t){if(t.tag===13){var e=qa(t,67108864);e!==null&&_e(e,t,67108864),vo(t,67108864)}}var Bi=!0;function Qb(t,e,l,a){var u=w.T;w.T=null;var i=Y.p;try{Y.p=2,go(t,e,l,a)}finally{Y.p=i,w.T=u}}function qb(t,e,l,a){var u=w.T;w.T=null;var i=Y.p;try{Y.p=8,go(t,e,l,a)}finally{Y.p=i,w.T=u}}function go(t,e,l,a){if(Bi){var u=yo(a);if(u===null)no(t,e,a,Ni,l),W0(t,a);else if(Yb(u,t,e,l,a))a.stopPropagation();else if(W0(t,a),e&4&&-1<Lb.indexOf(t)){for(;u!==null;){var i=Ra(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=Il(i.pendingLanes);if(f!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;f;){var h=1<<31-Te(f);s.entanglements[1]|=h,f&=~h}tl(i),(Rt&6)===0&&(vi=Wt()+500,cu(0))}}break;case 13:s=qa(i,2),s!==null&&_e(s,i,2),yi(),vo(i,2)}if(i=yo(a),i===null&&no(t,e,a,Ni,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else no(t,e,a,null,l)}}function yo(t){return t=Ec(t),Ao(t)}var Ni=null;function Ao(t){if(Ni=null,t=za(t),t!==null){var e=m(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=g(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ni=t,null}function J0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nl()){case Ge:return 2;case Da:return 8;case xl:case Fl:return 32;case Sn:return 268435456;default:return 32}default:return 32}}var So=!1,Yl=null,Gl=null,jl=null,mu=new Map,bu=new Map,Xl=[],Lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(t,e){switch(t){case"focusin":case"focusout":Yl=null;break;case"dragenter":case"dragleave":Gl=null;break;case"mouseover":case"mouseout":jl=null;break;case"pointerover":case"pointerout":mu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bu.delete(e.pointerId)}}function vu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=Ra(e),e!==null&&K0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Yb(t,e,l,a,u){switch(e){case"focusin":return Yl=vu(Yl,t,e,l,a,u),!0;case"dragenter":return Gl=vu(Gl,t,e,l,a,u),!0;case"mouseover":return jl=vu(jl,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return mu.set(i,vu(mu.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,bu.set(i,vu(bu.get(i)||null,t,e,l,a,u)),!0}return!1}function F0(t){var e=za(t.target);if(e!==null){var l=m(e);if(l!==null){if(e=l.tag,e===13){if(e=g(l),e!==null){t.blockedOn=e,$p(t.priority,function(){if(l.tag===13){var a=Me();a=dc(a);var u=qa(l,a);u!==null&&_e(u,l,a),vo(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=yo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);xc=a,l.target.dispatchEvent(a),xc=null}else return e=Ra(l),e!==null&&K0(e),t.blockedOn=l,!1;e.shift()}return!0}function I0(t,e,l){$i(t)&&l.delete(e)}function Gb(){So=!1,Yl!==null&&$i(Yl)&&(Yl=null),Gl!==null&&$i(Gl)&&(Gl=null),jl!==null&&$i(jl)&&(jl=null),mu.forEach(I0),bu.forEach(I0)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,So||(So=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Gb)))}var Hi=null;function P0(t){Hi!==t&&(Hi=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Hi===t&&(Hi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(Ao(a||l)===null)continue;break}var i=Ra(l);i!==null&&(t.splice(e,3),e-=3,yr(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function gu(t){function e(h){return Ui(h,t)}Yl!==null&&Ui(Yl,t),Gl!==null&&Ui(Gl,t),jl!==null&&Ui(jl,t),mu.forEach(e),bu.forEach(e);for(var l=0;l<Xl.length;l++){var a=Xl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Xl.length&&(l=Xl[0],l.blockedOn===null);)F0(l),l.blockedOn===null&&Xl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],f=u[ge]||null;if(typeof i=="function")f||P0(l);else if(f){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,f=i[ge]||null)s=f.formAction;else if(Ao(u)!==null)continue}else s=f.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),P0(l)}}}function xo(t){this._internalRoot=t}ki.prototype.render=xo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=Me();V0(l,a,t,e,null,null)},ki.prototype.unmount=xo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;V0(t.current,2,null,t,null,null),yi(),e[Oa]=null}};function ki(t){this._internalRoot=t}ki.prototype.unstable_scheduleHydration=function(t){if(t){var e=bf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Xl.length&&e!==0&&e<Xl[l].priority;l++);Xl.splice(l,0,t),l===0&&F0(t)}};var th=c.version;if(th!=="19.1.0")throw Error(r(527,th,"19.1.0"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=A(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var jb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{xn=Qi.inject(jb),Ee=Qi}catch{}}return Au.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=bd,i=vd,f=gd,s=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=j0(t,1,!1,null,null,l,a,u,i,f,s,null),t[Oa]=e.current,ao(t),new xo(e)},Au.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=bd,f=vd,s=gd,h=null,x=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(x=l.formState)),e=j0(t,1,!0,e,l??null,a,u,i,f,s,h,x),e.context=X0(null),l=e.current,a=Me(),a=dc(a),u=Rl(a),u.callback=null,wl(l,u,a),l=a,e.current.lanes=l,Tn(e,l),tl(e),t[Oa]=e.current,ao(t),new ki(e)},Au.version="19.1.0",Au}var fh;function Pb(){if(fh)return Do.exports;fh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Do.exports=Ib(),Do.exports}var tv=Pb();const ev=Ko(tv);var lv=`
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

`,ce=function(){return ce=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(c[m]=o[m])}return c},ce.apply(this,arguments)};function Eu(n,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,m;r<d;r++)(m||!(r in c))&&(m||(m=Array.prototype.slice.call(c,0,r)),m[r]=c[r]);return n.concat(m||Array.prototype.slice.call(c))}var kt="-ms-",xu="-moz-",zt="-webkit-",Hh="comm",ac="rule",Wo="decl",av="@import",kh="@keyframes",nv="@layer",Qh=Math.abs,Fo=String.fromCharCode,$o=Object.assign;function uv(n,c){return ie(n,0)^45?(((c<<2^ie(n,0))<<2^ie(n,1))<<2^ie(n,2))<<2^ie(n,3):0}function qh(n){return n.trim()}function Sl(n,c){return(n=c.exec(n))?n[0]:n}function mt(n,c,o){return n.replace(c,o)}function Xi(n,c,o){return n.indexOf(c,o)}function ie(n,c){return n.charCodeAt(c)|0}function mn(n,c,o){return n.slice(c,o)}function el(n){return n.length}function Lh(n){return n.length}function Su(n,c){return c.push(n),n}function iv(n,c){return n.map(c).join("")}function sh(n,c){return n.filter(function(o){return!Sl(o,c)})}var nc=1,bn=1,Yh=0,Ye=0,Pt=0,An="";function uc(n,c,o,r,d,m,g,O){return{value:n,root:c,parent:o,type:r,props:d,children:m,line:nc,column:bn,length:g,return:"",siblings:O}}function Zl(n,c){return $o(uc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function dn(n){for(;n.root;)n=Zl(n.root,{children:[n]});Su(n,n.siblings)}function cv(){return Pt}function rv(){return Pt=Ye>0?ie(An,--Ye):0,bn--,Pt===10&&(bn=1,nc--),Pt}function Ze(){return Pt=Ye<Yh?ie(An,Ye++):0,bn++,Pt===10&&(bn=1,nc++),Pt}function ya(){return ie(An,Ye)}function Vi(){return Ye}function ic(n,c){return mn(An,n,c)}function Uo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ov(n){return nc=bn=1,Yh=el(An=n),Ye=0,[]}function fv(n){return An="",n}function wo(n){return qh(ic(Ye-1,Ho(n===91?n+2:n===40?n+1:n)))}function sv(n){for(;(Pt=ya())&&Pt<33;)Ze();return Uo(n)>2||Uo(Pt)>3?"":" "}function dv(n,c){for(;--c&&Ze()&&!(Pt<48||Pt>102||Pt>57&&Pt<65||Pt>70&&Pt<97););return ic(n,Vi()+(c<6&&ya()==32&&Ze()==32))}function Ho(n){for(;Ze();)switch(Pt){case n:return Ye;case 34:case 39:n!==34&&n!==39&&Ho(Pt);break;case 40:n===41&&Ho(n);break;case 92:Ze();break}return Ye}function hv(n,c){for(;Ze()&&n+Pt!==57;)if(n+Pt===84&&ya()===47)break;return"/*"+ic(c,Ye-1)+"*"+Fo(n===47?n:Ze())}function pv(n){for(;!Uo(ya());)Ze();return ic(n,Ye)}function mv(n){return fv(Zi("",null,null,null,[""],n=ov(n),0,[0],n))}function Zi(n,c,o,r,d,m,g,O,A){for(var b=0,z=0,R=g,U=0,Z=0,J=0,tt=1,F=1,K=1,X=0,L="",et=d,G=m,W=r,I=L;F;)switch(J=X,X=Ze()){case 40:if(J!=108&&ie(I,R-1)==58){Xi(I+=mt(wo(X),"&","&\f"),"&\f",Qh(b?O[b-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:I+=wo(X);break;case 9:case 10:case 13:case 32:I+=sv(J);break;case 92:I+=dv(Vi()-1,7);continue;case 47:switch(ya()){case 42:case 47:Su(bv(hv(Ze(),Vi()),c,o,A),A);break;default:I+="/"}break;case 123*tt:O[b++]=el(I)*K;case 125*tt:case 59:case 0:switch(X){case 0:case 125:F=0;case 59+z:K==-1&&(I=mt(I,/\f/g,"")),Z>0&&el(I)-R&&Su(Z>32?hh(I+";",r,o,R-1,A):hh(mt(I," ","")+";",r,o,R-2,A),A);break;case 59:I+=";";default:if(Su(W=dh(I,c,o,b,z,d,O,L,et=[],G=[],R,m),m),X===123)if(z===0)Zi(I,c,W,W,et,m,R,O,G);else switch(U===99&&ie(I,3)===110?100:U){case 100:case 108:case 109:case 115:Zi(n,W,W,r&&Su(dh(n,W,W,0,0,d,O,L,d,et=[],R,G),G),d,G,R,O,r?et:G);break;default:Zi(I,W,W,W,[""],G,0,O,G)}}b=z=Z=0,tt=K=1,L=I="",R=g;break;case 58:R=1+el(I),Z=J;default:if(tt<1){if(X==123)--tt;else if(X==125&&tt++==0&&rv()==125)continue}switch(I+=Fo(X),X*tt){case 38:K=z>0?1:(I+="\f",-1);break;case 44:O[b++]=(el(I)-1)*K,K=1;break;case 64:ya()===45&&(I+=wo(Ze())),U=ya(),z=R=el(L=I+=pv(Vi())),X++;break;case 45:J===45&&el(I)==2&&(tt=0)}}return m}function dh(n,c,o,r,d,m,g,O,A,b,z,R){for(var U=d-1,Z=d===0?m:[""],J=Lh(Z),tt=0,F=0,K=0;tt<r;++tt)for(var X=0,L=mn(n,U+1,U=Qh(F=g[tt])),et=n;X<J;++X)(et=qh(F>0?Z[X]+" "+L:mt(L,/&\f/g,Z[X])))&&(A[K++]=et);return uc(n,c,o,d===0?ac:O,A,b,z,R)}function bv(n,c,o,r){return uc(n,c,o,Hh,Fo(cv()),mn(n,2,-2),0,r)}function hh(n,c,o,r,d){return uc(n,c,o,Wo,mn(n,0,r),mn(n,r+1,-1),r,d)}function Gh(n,c,o){switch(uv(n,c)){case 5103:return zt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return zt+n+n;case 4789:return xu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return zt+n+xu+n+kt+n+n;case 5936:switch(ie(n,c+11)){case 114:return zt+n+kt+mt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return zt+n+kt+mt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return zt+n+kt+mt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return zt+n+kt+n+n;case 6165:return zt+n+kt+"flex-"+n+n;case 5187:return zt+n+mt(n,/(\w+).+(:[^]+)/,zt+"box-$1$2"+kt+"flex-$1$2")+n;case 5443:return zt+n+kt+"flex-item-"+mt(n,/flex-|-self/g,"")+(Sl(n,/flex-|baseline/)?"":kt+"grid-row-"+mt(n,/flex-|-self/g,""))+n;case 4675:return zt+n+kt+"flex-line-pack"+mt(n,/align-content|flex-|-self/g,"")+n;case 5548:return zt+n+kt+mt(n,"shrink","negative")+n;case 5292:return zt+n+kt+mt(n,"basis","preferred-size")+n;case 6060:return zt+"box-"+mt(n,"-grow","")+zt+n+kt+mt(n,"grow","positive")+n;case 4554:return zt+mt(n,/([^-])(transform)/g,"$1"+zt+"$2")+n;case 6187:return mt(mt(mt(n,/(zoom-|grab)/,zt+"$1"),/(image-set)/,zt+"$1"),n,"")+n;case 5495:case 3959:return mt(n,/(image-set\([^]*)/,zt+"$1$`$1");case 4968:return mt(mt(n,/(.+:)(flex-)?(.*)/,zt+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+zt+n+n;case 4200:if(!Sl(n,/flex-|baseline/))return kt+"grid-column-align"+mn(n,c)+n;break;case 2592:case 3360:return kt+mt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,Sl(r.props,/grid-\w+-end/)})?~Xi(n+(o=o[c].value),"span",0)?n:kt+mt(n,"-start","")+n+kt+"grid-row-span:"+(~Xi(o,"span",0)?Sl(o,/\d+/):+Sl(o,/\d+/)-+Sl(n,/\d+/))+";":kt+mt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(r){return Sl(r.props,/grid-\w+-start/)})?n:kt+mt(mt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return mt(n,/(.+)-inline(.+)/,zt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(el(n)-1-c>6)switch(ie(n,c+1)){case 109:if(ie(n,c+4)!==45)break;case 102:return mt(n,/(.+:)(.+)-([^]+)/,"$1"+zt+"$2-$3$1"+xu+(ie(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~Xi(n,"stretch",0)?Gh(mt(n,"stretch","fill-available"),c,o)+n:n}break;case 5152:case 5920:return mt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,m,g,O,A,b){return kt+d+":"+m+b+(g?kt+d+"-span:"+(O?A:+A-+m)+b:"")+n});case 4949:if(ie(n,c+6)===121)return mt(n,":",":"+zt)+n;break;case 6444:switch(ie(n,ie(n,14)===45?18:11)){case 120:return mt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+zt+(ie(n,14)===45?"inline-":"")+"box$3$1"+zt+"$2$3$1"+kt+"$2box$3")+n;case 100:return mt(n,":",":"+kt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mt(n,"scroll-","scroll-snap-")+n}return n}function Wi(n,c){for(var o="",r=0;r<n.length;r++)o+=c(n[r],r,n,c)||"";return o}function vv(n,c,o,r){switch(n.type){case nv:if(n.children.length)break;case av:case Wo:return n.return=n.return||n.value;case Hh:return"";case kh:return n.return=n.value+"{"+Wi(n.children,r)+"}";case ac:if(!el(n.value=n.props.join(",")))return""}return el(o=Wi(n.children,r))?n.return=n.value+"{"+o+"}":""}function gv(n){var c=Lh(n);return function(o,r,d,m){for(var g="",O=0;O<c;O++)g+=n[O](o,r,d,m)||"";return g}}function yv(n){return function(c){c.root||(c=c.return)&&n(c)}}function Av(n,c,o,r){if(n.length>-1&&!n.return)switch(n.type){case Wo:n.return=Gh(n.value,n.length,o);return;case kh:return Wi([Zl(n,{value:mt(n.value,"@","@"+zt)})],r);case ac:if(n.length)return iv(o=n.props,function(d){switch(Sl(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dn(Zl(n,{props:[mt(d,/:(read-\w+)/,":"+xu+"$1")]})),dn(Zl(n,{props:[d]})),$o(n,{props:sh(o,r)});break;case"::placeholder":dn(Zl(n,{props:[mt(d,/:(plac\w+)/,":"+zt+"input-$1")]})),dn(Zl(n,{props:[mt(d,/:(plac\w+)/,":"+xu+"$1")]})),dn(Zl(n,{props:[mt(d,/:(plac\w+)/,kt+"input-$1")]})),dn(Zl(n,{props:[d]})),$o(n,{props:sh(o,r)});break}return""})}}var Sv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},vn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",jh="active",Xh="data-styled-version",cc="6.1.18",Io=`/*!sc*/
`,Fi=typeof window<"u"&&typeof document<"u",xv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),Ev={},rc=Object.freeze([]),gn=Object.freeze({});function Vh(n,c,o){return o===void 0&&(o=gn),n.theme!==o.theme&&n.theme||c||o.theme}var Zh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dv=/(^-|-$)/g;function ph(n){return n.replace(Tv,"-").replace(Dv,"")}var Ov=/(a)(d)/gi,qi=52,mh=function(n){return String.fromCharCode(n+(n>25?39:97))};function ko(n){var c,o="";for(c=Math.abs(n);c>qi;c=c/qi|0)o=mh(c%qi)+o;return(mh(c%qi)+o).replace(Ov,"$1-$2")}var Mo,Kh=5381,pn=function(n,c){for(var o=c.length;o;)n=33*n^c.charCodeAt(--o);return n},Jh=function(n){return pn(Kh,n)};function Wh(n){return ko(Jh(n)>>>0)}function zv(n){return n.displayName||n.name||"Component"}function _o(n){return typeof n=="string"&&!0}var Fh=typeof Symbol=="function"&&Symbol.for,Ih=Fh?Symbol.for("react.memo"):60115,Rv=Fh?Symbol.for("react.forward_ref"):60112,wv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ph={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_v=((Mo={})[Rv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mo[Ih]=Ph,Mo);function bh(n){return("type"in(c=n)&&c.type.$$typeof)===Ih?Ph:"$$typeof"in n?_v[n.$$typeof]:wv;var c}var Cv=Object.defineProperty,Bv=Object.getOwnPropertyNames,vh=Object.getOwnPropertySymbols,Nv=Object.getOwnPropertyDescriptor,$v=Object.getPrototypeOf,gh=Object.prototype;function tp(n,c,o){if(typeof c!="string"){if(gh){var r=$v(c);r&&r!==gh&&tp(n,r,o)}var d=Bv(c);vh&&(d=d.concat(vh(c)));for(var m=bh(n),g=bh(c),O=0;O<d.length;++O){var A=d[O];if(!(A in Mv||o&&o[A]||g&&A in g||m&&A in m)){var b=Nv(c,A);try{Cv(n,A,b)}catch{}}}}return n}function Sa(n){return typeof n=="function"}function Po(n){return typeof n=="object"&&"styledComponentId"in n}function va(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Qo(n,c){if(n.length===0)return"";for(var o=n[0],r=1;r<n.length;r++)o+=n[r];return o}function Tu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function qo(n,c,o){if(o===void 0&&(o=!1),!o&&!Tu(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=qo(n[r],c[r]);else if(Tu(c))for(var r in c)n[r]=qo(n[r],c[r]);return n}function tf(n,c){Object.defineProperty(n,"toString",{value:c})}function xa(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Uv=function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},n.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,m=d;c>=m;)if((m<<=1)<0)throw xa(16,"".concat(c));this.groupSizes=new Uint32Array(m),this.groupSizes.set(r),this.length=m;for(var g=d;g<m;g++)this.groupSizes[g]=0}for(var O=this.indexOfGroup(c+1),A=(g=0,o.length);g<A;g++)this.tag.insertRule(O,o[g])&&(this.groupSizes[c]++,O++)},n.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var m=r;m<d;m++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),m=d+r,g=d;g<m;g++)o+="".concat(this.tag.getRule(g)).concat(Io);return o},n}(),Ki=new Map,Ii=new Map,Ji=1,Li=function(n){if(Ki.has(n))return Ki.get(n);for(;Ii.has(Ji);)Ji++;var c=Ji++;return Ki.set(n,c),Ii.set(c,n),c},Hv=function(n,c){Ji=c+1,Ki.set(n,c),Ii.set(c,n)},kv="style[".concat(vn,"][").concat(Xh,'="').concat(cc,'"]'),Qv=new RegExp("^".concat(vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qv=function(n,c,o){for(var r,d=o.split(","),m=0,g=d.length;m<g;m++)(r=d[m])&&n.registerName(c,r)},Lv=function(n,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(Io),d=[],m=0,g=r.length;m<g;m++){var O=r[m].trim();if(O){var A=O.match(Qv);if(A){var b=0|parseInt(A[1],10),z=A[2];b!==0&&(Hv(z,b),qv(n,z,A[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(O)}}},yh=function(n){for(var c=document.querySelectorAll(kv),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(vn)!==jh&&(Lv(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Yv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ep=function(n){var c=document.head,o=n||c,r=document.createElement("style"),d=function(O){var A=Array.from(O.querySelectorAll("style[".concat(vn,"]")));return A[A.length-1]}(o),m=d!==void 0?d.nextSibling:null;r.setAttribute(vn,jh),r.setAttribute(Xh,cc);var g=Yv();return g&&r.setAttribute("nonce",g),o.insertBefore(r,m),r},Gv=function(){function n(c){this.element=ep(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,m=r.length;d<m;d++){var g=r[d];if(g.ownerNode===o)return g}throw xa(17)}(this.element),this.length=0}return n.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},n}(),jv=function(){function n(c){this.element=ep(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n}(),Xv=function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n}(),Ah=Fi,Vv={isServer:!Fi,useCSSOMInjection:!xv},Pi=function(){function n(c,o,r){c===void 0&&(c=gn),o===void 0&&(o={});var d=this;this.options=ce(ce({},Vv),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&Fi&&Ah&&(Ah=!1,yh(this)),tf(this,function(){return function(m){for(var g=m.getTag(),O=g.length,A="",b=function(R){var U=function(K){return Ii.get(K)}(R);if(U===void 0)return"continue";var Z=m.names.get(U),J=g.getGroup(R);if(Z===void 0||!Z.size||J.length===0)return"continue";var tt="".concat(vn,".g").concat(R,'[id="').concat(U,'"]'),F="";Z!==void 0&&Z.forEach(function(K){K.length>0&&(F+="".concat(K,","))}),A+="".concat(J).concat(tt,'{content:"').concat(F,'"}').concat(Io)},z=0;z<O;z++)b(z);return A}(d)})}return n.registerId=function(c){return Li(c)},n.prototype.rehydrate=function(){!this.server&&Fi&&yh(this)},n.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new n(ce(ce({},this.options),c),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new Xv(d):r?new Gv(d):new jv(d)}(this.options),new Uv(c)));var c},n.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},n.prototype.registerName=function(c,o){if(Li(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},n.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Li(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Li(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Zv=/&/g,Kv=/^\s*\/\/.*$/gm;function lp(n,c){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=lp(o.children,c)),o})}function Jv(n){var c,o,r,d=gn,m=d.options,g=m===void 0?gn:m,O=d.plugins,A=O===void 0?rc:O,b=function(U,Z,J){return J.startsWith(o)&&J.endsWith(o)&&J.replaceAll(o,"").length>0?".".concat(c):U},z=A.slice();z.push(function(U){U.type===ac&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Zv,o).replace(r,b))}),g.prefix&&z.push(Av),z.push(vv);var R=function(U,Z,J,tt){Z===void 0&&(Z=""),J===void 0&&(J=""),tt===void 0&&(tt="&"),c=tt,o=Z,r=new RegExp("\\".concat(o,"\\b"),"g");var F=U.replace(Kv,""),K=mv(J||Z?"".concat(J," ").concat(Z," { ").concat(F," }"):F);g.namespace&&(K=lp(K,g.namespace));var X=[];return Wi(K,gv(z.concat(yv(function(L){return X.push(L)})))),X};return R.hash=A.length?A.reduce(function(U,Z){return Z.name||xa(15),pn(U,Z.name)},Kh).toString():"",R}var Wv=new Pi,Lo=Jv(),ap=D.createContext({shouldForwardProp:void 0,styleSheet:Wv,stylis:Lo});ap.Consumer;D.createContext(void 0);function Yo(){return M.useContext(ap)}var Fv=function(){function n(c,o){var r=this;this.inject=function(d,m){m===void 0&&(m=Lo);var g=r.name+m.hash;d.hasNameForId(r.id,g)||d.insertRules(r.id,g,m(r.rules,g,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,tf(this,function(){throw xa(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Lo),this.name+c.hash},n}(),Iv=function(n){return n>="A"&&n<="Z"};function Sh(n){for(var c="",o=0;o<n.length;o++){var r=n[o];if(o===1&&r==="-"&&n[0]==="-")return n;Iv(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var np=function(n){return n==null||n===!1||n===""},up=function(n){var c,o,r=[];for(var d in n){var m=n[d];n.hasOwnProperty(d)&&!np(m)&&(Array.isArray(m)&&m.isCss||Sa(m)?r.push("".concat(Sh(d),":"),m,";"):Tu(m)?r.push.apply(r,Eu(Eu(["".concat(d," {")],up(m),!1),["}"],!1)):r.push("".concat(Sh(d),": ").concat((c=d,(o=m)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Sv||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Kl(n,c,o,r){if(np(n))return[];if(Po(n))return[".".concat(n.styledComponentId)];if(Sa(n)){if(!Sa(m=n)||m.prototype&&m.prototype.isReactComponent||!c)return[n];var d=n(c);return Kl(d,c,o,r)}var m;return n instanceof Fv?o?(n.inject(o,r),[n.getName(r)]):[n]:Tu(n)?up(n):Array.isArray(n)?Array.prototype.concat.apply(rc,n.map(function(g){return Kl(g,c,o,r)})):[n.toString()]}function ip(n){for(var c=0;c<n.length;c+=1){var o=n[c];if(Sa(o)&&!Po(o))return!1}return!0}var Pv=Jh(cc),tg=function(){function n(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ip(c),this.componentId=o,this.baseHash=pn(Pv,o),this.baseStyle=r,Pi.registerId(o)}return n.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=va(d,this.staticRulesId);else{var m=Qo(Kl(this.rules,c,o,r)),g=ko(pn(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,g)){var O=r(m,".".concat(g),void 0,this.componentId);o.insertRules(this.componentId,g,O)}d=va(d,g),this.staticRulesId=g}else{for(var A=pn(this.baseHash,r.hash),b="",z=0;z<this.rules.length;z++){var R=this.rules[z];if(typeof R=="string")b+=R;else if(R){var U=Qo(Kl(R,c,o,r));A=pn(A,U+z),b+=U}}if(b){var Z=ko(A>>>0);o.hasNameForId(this.componentId,Z)||o.insertRules(this.componentId,Z,r(b,".".concat(Z),void 0,this.componentId)),d=va(d,Z)}}return d},n}(),Du=D.createContext(void 0);Du.Consumer;function eg(n){var c=D.useContext(Du),o=M.useMemo(function(){return function(r,d){if(!r)throw xa(14);if(Sa(r)){var m=r(d);return m}if(Array.isArray(r)||typeof r!="object")throw xa(8);return d?ce(ce({},d),r):r}(n.theme,c)},[n.theme,c]);return n.children?D.createElement(Du.Provider,{value:o},n.children):null}var Co={};function lg(n,c,o){var r=Po(n),d=n,m=!_o(n),g=c.attrs,O=g===void 0?rc:g,A=c.componentId,b=A===void 0?function(et,G){var W=typeof et!="string"?"sc":ph(et);Co[W]=(Co[W]||0)+1;var I="".concat(W,"-").concat(Wh(cc+W+Co[W]));return G?"".concat(G,"-").concat(I):I}(c.displayName,c.parentComponentId):A,z=c.displayName,R=z===void 0?function(et){return _o(et)?"styled.".concat(et):"Styled(".concat(zv(et),")")}(n):z,U=c.displayName&&c.componentId?"".concat(ph(c.displayName),"-").concat(c.componentId):c.componentId||b,Z=r&&d.attrs?d.attrs.concat(O).filter(Boolean):O,J=c.shouldForwardProp;if(r&&d.shouldForwardProp){var tt=d.shouldForwardProp;if(c.shouldForwardProp){var F=c.shouldForwardProp;J=function(et,G){return tt(et,G)&&F(et,G)}}else J=tt}var K=new tg(o,U,r?d.componentStyle:void 0);function X(et,G){return function(W,I,St){var Ot=W.attrs,Xt=W.componentStyle,Nt=W.defaultProps,pt=W.foldedComponentIds,Qt=W.styledComponentId,$t=W.target,vt=D.useContext(Du),w=Yo(),Y=W.shouldForwardProp||w.shouldForwardProp,j=Vh(I,vt,Nt)||gn,ut=function(lt,V,rt){for(var st,k=ce(ce({},V),{className:void 0,theme:rt}),ft=0;ft<lt.length;ft+=1){var dt=Sa(st=lt[ft])?st(k):st;for(var xt in dt)k[xt]=xt==="className"?va(k[xt],dt[xt]):xt==="style"?ce(ce({},k[xt]),dt[xt]):dt[xt]}return V.className&&(k.className=va(k.className,V.className)),k}(Ot,I,j),p=ut.as||$t,B={};for(var q in ut)ut[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&ut.theme===j||(q==="forwardedAs"?B.as=ut.forwardedAs:Y&&!Y(q,p)||(B[q]=ut[q]));var N=function(lt,V){var rt=Yo(),st=lt.generateAndInjectStyles(V,rt.styleSheet,rt.stylis);return st}(Xt,ut),Q=va(pt,Qt);return N&&(Q+=" "+N),ut.className&&(Q+=" "+ut.className),B[_o(p)&&!Zh.has(p)?"class":"className"]=Q,St&&(B.ref=St),M.createElement(p,B)}(L,et,G)}X.displayName=R;var L=D.forwardRef(X);return L.attrs=Z,L.componentStyle=K,L.displayName=R,L.shouldForwardProp=J,L.foldedComponentIds=r?va(d.foldedComponentIds,d.styledComponentId):"",L.styledComponentId=U,L.target=r?d.target:n,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(et){this._foldedDefaultProps=r?function(G){for(var W=[],I=1;I<arguments.length;I++)W[I-1]=arguments[I];for(var St=0,Ot=W;St<Ot.length;St++)qo(G,Ot[St],!0);return G}({},d.defaultProps,et):et}}),tf(L,function(){return".".concat(L.styledComponentId)}),m&&tp(L,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function xh(n,c){for(var o=[n[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],n[r+1]);return o}var Eh=function(n){return Object.assign(n,{isCss:!0})};function P(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Sa(n)||Tu(n))return Eh(Kl(xh(rc,Eu([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?Kl(r):Eh(Kl(xh(r,c)))}function Go(n,c,o){if(o===void 0&&(o=gn),!c)throw xa(1,c);var r=function(d){for(var m=[],g=1;g<arguments.length;g++)m[g-1]=arguments[g];return n(c,o,P.apply(void 0,Eu([d],m,!1)))};return r.attrs=function(d){return Go(n,c,ce(ce({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return Go(n,c,ce(ce({},o),d))},r}var cp=function(n){return Go(lg,n)},H=cp;Zh.forEach(function(n){H[n]=cp(n)});var ag=function(){function n(c,o){this.rules=c,this.componentId=o,this.isStatic=ip(c),Pi.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,o,r,d){var m=d(Qo(Kl(this.rules,o,r,d)),""),g=this.componentId+c;r.insertRules(g,g,m)},n.prototype.removeStyles=function(c,o){o.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,o,r,d){c>2&&Pi.registerId(this.componentId+c),this.removeStyles(c,r),this.createStyles(c,o,r,d)},n}();function ng(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var r=P.apply(void 0,Eu([n],c,!1)),d="sc-global-".concat(Wh(JSON.stringify(r))),m=new ag(r,d),g=function(A){var b=Yo(),z=D.useContext(Du),R=D.useRef(b.styleSheet.allocateGSInstance(d)).current;return b.styleSheet.server&&O(R,A,b.styleSheet,z,b.stylis),D.useLayoutEffect(function(){if(!b.styleSheet.server)return O(R,A,b.styleSheet,z,b.stylis),function(){return m.removeStyles(R,b.styleSheet)}},[R,A,b.styleSheet,z,b.stylis]),null};function O(A,b,z,R,U){if(m.isStatic)m.renderStyles(A,Ev,z,U);else{var Z=ce(ce({},b),{theme:Vh(b,R,g.defaultProps)});m.renderStyles(A,Z,z,U)}}return D.memo(g)}const ef="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",lf="inset 2px 2px 3px rgba(0,0,0,0.2)",Ke=()=>P`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Je=({background:n="material",color:c="materialText"}={})=>P`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[c]};
`,Ou=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:o=2})=>P`
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
`,hn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},ug=({theme:n,topLeftInner:c,bottomRightInner:o,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?ef:!1,d?lf:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),jt=({invert:n=!1,style:c="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return P`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[hn[c][o.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[hn[c][o.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[hn[c][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[hn[c][o.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>ug({theme:r,topLeftInner:hn[c][o.topLeftInner],bottomRightInner:hn[c][o.bottomRightInner],hasShadow:d})};
  `},yn=()=>P`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,ig=n=>Buffer.from(n).toString("base64"),cg=typeof btoa<"u"?btoa:ig,Yi=(n,c=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${cg(o)})`},af=(n="default")=>P`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>Ou({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Je()}
    ${n==="flat"?Ea():jt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${Je()}
    ${n==="flat"?Ea():jt({style:"window"})}
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
    ${n==="default"?jt({style:"window",invert:!0}):""}
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
`,rg=H.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,og=M.forwardRef(({children:n,underline:c=!0,...o},r)=>D.createElement(rg,{ref:r,underline:c,...o},n));og.displayName="Anchor";const fg=H.header`
  ${jt()};
  ${Je()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,sg=M.forwardRef(({children:n,fixed:c=!0,position:o="fixed",...r},d)=>D.createElement(fg,{fixed:c,position:c!==!1?o:void 0,ref:d,...r},n));sg.displayName="AppBar";const Ta=()=>{};function ga(n,c,o){return o!==null&&n>o?o:c!==null&&n<c?c:n}function dg(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),r=o[0].split(".")[1];return(r?r.length:0)+parseInt(o[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function Th(n,c,o){const r=Math.round((n-o)/c)*c+o;return Number(r.toFixed(dg(c)))}function Jl(n){return typeof n=="number"?`${n}px`:n}const hg=H.div`
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
`,pg=H.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,mg=M.forwardRef(({alt:n="",children:c,noBorder:o=!1,size:r=35,square:d=!1,src:m,...g},O)=>D.createElement(hg,{noBorder:o,ref:O,size:Jl(r),square:d,src:m,...g},m?D.createElement(pg,{src:m,alt:n}):c));mg.displayName="Avatar";const se={sm:"28px",md:"36px",lg:"44px"},bg=P`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>se[n]};
  width: ${({fullWidth:n,size:c="md",square:o})=>n?"100%":o?se[c]:"auto"};
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
`,oc=H.button`
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
            ${!c&&!n&&jt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&jt({style:"buttonThinPressed"})}
          }
          ${n&&jt({style:"buttonThinPressed"})}
          ${c&&Ke()}
        `:P`
          ${Je()};
          border: none;
          ${c&&Ke()}
          ${n?Ou({mainColor:r.material,secondaryColor:r.borderLightest}):""}
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

            ${jt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&jt({style:d==="raised"?"window":"button",invert:!0})}
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
  ${bg}
`,Aa=M.forwardRef(({onClick:n,disabled:c=!1,children:o,type:r="button",fullWidth:d=!1,size:m="md",square:g=!1,active:O=!1,onTouchStart:A=Ta,primary:b=!1,variant:z="default",...R},U)=>D.createElement(oc,{active:O,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:A,primary:b,ref:U,size:m,square:g,type:r,variant:z,...R},o));Aa.displayName="Button";function Wl({defaultValue:n,onChange:c,onChangePropName:o="onChange",readOnly:r,value:d,valuePropName:m="value"}){const g=d!==void 0,[O,A]=M.useState(n),b=M.useCallback(z=>{g||A(z)},[g]);if(g&&typeof c!="function"&&!r){const z=`Warning: You provided a \`${m}\` prop to a component without an \`${o}\` handler.${m==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${m}\`.`}`;console.warn(z)}return[g?d:O,b]}const jo=H.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>se[n.size]};
  width: ${n=>n.square?se[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>se[n.size]};
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
`,vg=M.forwardRef(({size:n="lg",disabled:c,square:o,children:r,onClick:d,primary:m,...g},O)=>D.createElement(jo,{$disabled:c,size:n,square:o,onClick:c?void 0:d,primary:m,role:"menuitem",ref:O,"aria-disabled":c,...g},r));vg.displayName="MenuListItem";const gg=H.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${jt({style:"window"})}
  ${Je()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;gg.displayName="MenuList";const ll=20,tc=H.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ll}px;
  height: ${ll}px;
  opacity: 0;
  z-index: -1;
`,nf=H.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&Ke()}

  ${jo} & {
    margin: 0;
    height: 100%;
  }
  ${jo}:hover & {
    ${({$disabled:n,theme:c})=>!n&&P`
        color: ${c.materialTextInvert};
      `};
  }
`,uf=H.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${tc}:focus ~ & {
    ${yn}
  }
  ${tc}:not(:disabled) ~ &:active {
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
    ${n=>n.shadow&&`box-shadow:${lf};`}
  }
`,yg=H.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${af()}
`,rp=M.forwardRef(({children:n,shadow:c=!0,...o},r)=>D.createElement(al,{ref:r,shadow:c,...o},D.createElement(yg,null,n)));rp.displayName="ScrollView";const op=P`
  width: ${ll}px;
  height: ${ll}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ag=H(al)`
  ${op}
  width: ${ll}px;
  height: ${ll}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,Sg=H.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${op}
  width: ${ll-4}px;
  height: ${ll-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,xg=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Eg=H.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>Ou({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Tg={flat:Sg,default:Ag},Dg=M.forwardRef(({checked:n,className:c="",defaultChecked:o=!1,disabled:r=!1,indeterminate:d=!1,label:m="",onChange:g=Ta,style:O={},value:A,variant:b="default",...z},R)=>{var U;const[Z,J]=Wl({defaultValue:o,onChange:g,readOnly:(U=z.readOnly)!==null&&U!==void 0?U:r,value:n}),tt=M.useCallback(X=>{const L=X.target.checked;J(L),g(X)},[g,J]),F=Tg[b];let K=null;return d?K=Eg:Z&&(K=xg),D.createElement(nf,{$disabled:r,className:c,style:O},D.createElement(tc,{disabled:r,onChange:r?void 0:tt,readOnly:r,type:"checkbox",value:A,checked:Z,"data-indeterminate":d,ref:R,...z}),D.createElement(F,{$disabled:r,role:"presentation"},K&&D.createElement(K,{$disabled:r,variant:b})),m&&D.createElement(uf,null,m))});Dg.displayName="Checkbox";const fp=H.div`
  ${({orientation:n,theme:c,size:o="100%"})=>n==="vertical"?`
    height: ${Jl(o)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${Jl(o)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;fp.displayName="Separator";const Og=H(oc)`
  padding-left: 8px;
`,zg=H(fp)`
  height: 21px;
  position: relative;
  top: 0;
`,sp=H.input`
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
`,Rg=H.div`
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
  ${sp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${yn}
    outline-offset: -8px;
  }
`,wg=H.span`
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
`,Mg=M.forwardRef(({value:n,defaultValue:c,onChange:o=Ta,disabled:r=!1,variant:d="default",...m},g)=>{var O;const[A,b]=Wl({defaultValue:c,onChange:o,readOnly:(O=m.readOnly)!==null&&O!==void 0?O:r,value:n}),z=R=>{const U=R.target.value;b(U),o(R)};return D.createElement(Og,{disabled:r,as:"div",variant:d,size:"md"},D.createElement(sp,{onChange:z,readOnly:r,disabled:r,value:A??"#008080",type:"color",ref:g,...m}),D.createElement(Rg,{$disabled:r,color:A??"#008080",role:"presentation"}),d==="default"&&D.createElement(zg,{orientation:"vertical"}),D.createElement(wg,{$disabled:r,variant:d}))});Mg.displayName="ColorInput";const _g=H.div`
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
      ${Ou({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,Dh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Cg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Bg({digit:n=0,pixelSize:c=2,...o}){const r=Cg[Number(n)].map((d,m)=>d?`${Dh[m]} active`:Dh[m]);return D.createElement(_g,{pixelSize:c,...o},r.map((d,m)=>D.createElement("span",{className:d,key:m})))}const Ng=H.div`
  ${jt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,$g={sm:1,md:2,lg:3,xl:4},Ug=M.forwardRef(({value:n=0,minLength:c=3,size:o="md",...r},d)=>{const m=M.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return D.createElement(Ng,{ref:d,...r},m.map((g,O)=>D.createElement(Bg,{digit:g,pixelSize:$g[o],key:O})))});Ug.displayName="Counter";const dp=P`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${se.md};
`,Hg=H(al).attrs({"data-testid":"variant-default"})`
  ${dp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,kg=H.div.attrs({"data-testid":"variant-flat"})`
  ${Ea()}
  ${dp}
  position: relative;
`,hp=P`
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
`,Qg=H.input`
  ${hp}
  padding: 0 8px;
`,qg=H.textarea`
  ${hp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>af(n)}
`,pp=M.forwardRef(({className:n,disabled:c=!1,fullWidth:o,onChange:r=Ta,shadow:d=!0,style:m,variant:g="default",...O},A)=>{const b=g==="flat"?kg:Hg,z=M.useMemo(()=>{var R;return O.multiline?D.createElement(qg,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,variant:g,...O}):D.createElement(Qg,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,type:(R=O.type)!==null&&R!==void 0?R:"text",variant:g,...O})},[c,r,O,A,g]);return D.createElement(b,{className:n,fullWidth:o,$disabled:c,shadow:d,style:m},z)});pp.displayName="TextInput";const Lg=H.div`
  display: inline-flex;
  align-items: center;
`,Xo=H(Aa)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?P`
          height: calc(50% - 1px);
        `:P`
          height: 50%;
        `}
`,Yg=H.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?P`
          height: calc(${se.md} - 4px);
        `:P`
          height: ${se.md};
          margin-left: 2px;
        `}
`,Oh=H.span`
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
  ${Xo}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?P`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:P`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,mp=M.forwardRef(({className:n,defaultValue:c,disabled:o=!1,max:r,min:d,onChange:m,readOnly:g,step:O=1,style:A,value:b,variant:z="default",width:R,...U},Z)=>{const[J,tt]=Wl({defaultValue:c,onChange:m,readOnly:g,value:b}),F=M.useCallback(W=>{const I=parseFloat(W.target.value);tt(I)},[tt]),K=M.useCallback(W=>{const I=ga(parseFloat(((J??0)+W).toFixed(2)),d??null,r??null);tt(I),m==null||m(I)},[r,d,m,tt,J]),X=M.useCallback(()=>{J!==void 0&&(m==null||m(J))},[m,J]),L=M.useCallback(()=>{K(O)},[K,O]),et=M.useCallback(()=>{K(-O)},[K,O]),G=z==="flat"?"flat":"raised";return D.createElement(Lg,{className:n,style:{...A,width:R!==void 0?Jl(R):"auto"},...U},D.createElement(pp,{value:J,variant:z,onChange:F,disabled:o,type:"number",readOnly:g,ref:Z,fullWidth:!0,onBlur:X}),D.createElement(Yg,{variant:z},D.createElement(Xo,{"data-testid":"increment",variant:G,disabled:o||g,onClick:L},D.createElement(Oh,{invert:!0})),D.createElement(Xo,{"data-testid":"decrement",variant:G,disabled:o||g,onClick:et},D.createElement(Oh,null))))});mp.displayName="NumberInput";function Gg(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let o=0;o<10;o+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const bp=n=>M.useMemo(()=>Gg(),[n]),vp=P`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,gp=P`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,cf=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,jg=H.div`
  ${vp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${cf}:focus & {
    ${gp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,yp=P`
  height: ${se.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?Ke():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Xg=H(al)`
  ${yp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,Vg=H.div`
  ${Ea()}
  ${yp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,Zg=H.select`
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
  ${vp}
  cursor: pointer;
  &:disabled {
    ${Ke()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Ap=H(oc).attrs(()=>({"aria-hidden":"true"}))`
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
`,Kg=H.span`
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
  ${Ap}:active & {
    margin-top: 2px;
  }
`,Jg=H.ul`
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
  box-shadow: ${ef};
  ${({variant:n="default"})=>n==="flat"?P`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:P`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>af(n)}
`,Wg=H.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${se.md} - 4px);
  line-height: calc(${se.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?gp:""}
  user-select: none;
`,Fg=[],Sp=({className:n,defaultValue:c,disabled:o,native:r,onChange:d,options:m=Fg,readOnly:g,style:O,value:A,variant:b,width:z})=>{var R;const U=M.useMemo(()=>m.filter(Boolean),[m]),[Z,J]=Wl({defaultValue:c??((R=U==null?void 0:U[0])===null||R===void 0?void 0:R.value),onChange:d,readOnly:g,value:A}),tt=!(o||g),F=M.useMemo(()=>({className:n,style:{...O,width:z}}),[n,O,z]),K=M.useMemo(()=>D.createElement(Ap,{as:"div","data-testid":"select-button",$disabled:o,native:r,tabIndex:-1,variant:b==="flat"?"flat":"raised"},D.createElement(Kg,{"data-testid":"select-icon",$disabled:o})),[o,r,b]),X=M.useMemo(()=>b==="flat"?Vg:Xg,[b]);return M.useMemo(()=>({isEnabled:tt,options:U,value:Z,setValue:J,wrapperProps:F,DropdownButton:K,Wrapper:X}),[K,X,tt,U,J,Z,F])},Ig={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Pg=1e3,ty=({onBlur:n,onChange:c,onClose:o,onFocus:r,onKeyDown:d,onMouseDown:m,onOpen:g,open:O,options:A,readOnly:b,value:z,selectRef:R,setValue:U,wrapperRef:Z})=>{const J=M.useRef(null),tt=M.useRef([]),F=M.useRef(0),K=M.useRef(0),X=M.useRef(),L=M.useRef("search"),et=M.useRef(""),G=M.useRef(),[W,I]=Wl({defaultValue:!1,onChange:g,onChangePropName:"onOpen",readOnly:b,value:O,valuePropName:"open"}),St=M.useMemo(()=>{const k=A.findIndex(ft=>ft.value===z);return F.current=ga(k,0,null),A[k]},[A,z]),[Ot,Xt]=M.useState(A[0]),Nt=M.useCallback(k=>{const ft=J.current,dt=tt.current[k];if(!dt||!ft){X.current=k;return}X.current=void 0;const xt=ft.clientHeight,Mt=ft.scrollTop,Vt=ft.scrollTop+xt,Zt=dt.offsetTop,ve=dt.offsetHeight,Wt=dt.offsetTop+dt.offsetHeight;Zt<Mt&&ft.scrollTo(0,Zt),Wt>Vt&&ft.scrollTo(0,Zt-xt+ve),dt.focus({preventScroll:!0})},[J]),pt=M.useCallback((k,{scroll:ft}={})=>{var dt;const xt=A.length-1;let Mt;switch(k){case"first":{Mt=0;break}case"last":{Mt=xt;break}case"next":{Mt=ga(K.current+1,0,xt);break}case"previous":{Mt=ga(K.current-1,0,xt);break}case"selected":{Mt=ga((dt=F.current)!==null&&dt!==void 0?dt:0,0,xt);break}default:Mt=k}K.current=Mt,Xt(A[Mt]),ft&&Nt(Mt)},[K,A,Nt]),Qt=M.useCallback(({fromEvent:k})=>{I(!0),pt("selected",{scroll:!0}),g==null||g({fromEvent:k})},[pt,g,I]),$t=M.useCallback(()=>{L.current="search",et.current="",clearTimeout(G.current)},[]),vt=M.useCallback(({focusSelect:k,fromEvent:ft})=>{var dt;o==null||o({fromEvent:ft}),I(!1),Xt(A[0]),$t(),X.current=void 0,k&&((dt=R.current)===null||dt===void 0||dt.focus())},[$t,o,A,R,I]),w=M.useCallback(({fromEvent:k})=>{W?vt({focusSelect:!1,fromEvent:k}):Qt({fromEvent:k})},[vt,Qt,W]),Y=M.useCallback((k,{fromEvent:ft})=>{F.current!==k&&(F.current=k,U(A[k].value),c==null||c(A[k],{fromEvent:ft}))},[c,A,U]),j=M.useCallback(({focusSelect:k,fromEvent:ft})=>{Y(K.current,{fromEvent:ft}),vt({focusSelect:k,fromEvent:ft})},[vt,Y]),ut=M.useCallback((k,{fromEvent:ft,select:dt})=>{var xt;switch(L.current==="cycleFirstLetter"&&k!==et.current&&(L.current="search"),k===et.current?L.current="cycleFirstLetter":et.current+=k,L.current){case"search":{let Mt=A.findIndex(Vt=>{var Zt;return((Zt=Vt.label)===null||Zt===void 0?void 0:Zt.toLocaleUpperCase().indexOf(et.current))===0});Mt<0&&(Mt=A.findIndex(Vt=>{var Zt;return((Zt=Vt.label)===null||Zt===void 0?void 0:Zt.toLocaleUpperCase().indexOf(k))===0}),et.current=k),Mt>=0&&(dt?Y(Mt,{fromEvent:ft}):pt(Mt,{scroll:!0}));break}case"cycleFirstLetter":{const Mt=dt?(xt=F.current)!==null&&xt!==void 0?xt:-1:K.current;let Vt=A.findIndex((Zt,ve)=>{var Wt;return ve>Mt&&((Wt=Zt.label)===null||Wt===void 0?void 0:Wt.toLocaleUpperCase().indexOf(k))===0});Vt<0&&(Vt=A.findIndex(Zt=>{var ve;return((ve=Zt.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(k))===0})),Vt>=0&&(dt?Y(Vt,{fromEvent:ft}):pt(Vt,{scroll:!0}));break}}clearTimeout(G.current),G.current=setTimeout(()=>{L.current==="search"&&(et.current="")},Pg)},[pt,A,Y]),p=M.useCallback(k=>{var ft;k.button===0&&(k.preventDefault(),(ft=R.current)===null||ft===void 0||ft.focus(),w({fromEvent:k}),m==null||m(k))},[m,R,w]),B=M.useCallback(k=>{j({focusSelect:!0,fromEvent:k})},[j]),q=M.useCallback(k=>{const{altKey:ft,code:dt,ctrlKey:xt,metaKey:Mt,shiftKey:Vt}=k,{ARROW_DOWN:Zt,ARROW_UP:ve,END:Wt,ENTER:nl,ESC:Ge,HOME:Da,SPACE:xl,TAB:Fl}=Ig,Sn=ft||xt||Mt||Vt;if(!(dt===Fl&&(ft||xt||Mt)||dt!==Fl&&Sn))switch(dt){case Zt:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}pt("next",{scroll:!0});break}case ve:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}pt("previous",{scroll:!0});break}case Wt:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}pt("last",{scroll:!0});break}case nl:{if(!W)return;k.preventDefault(),j({focusSelect:!0,fromEvent:k});break}case Ge:{if(!W)return;k.preventDefault(),vt({focusSelect:!0,fromEvent:k});break}case Da:{if(k.preventDefault(),!W){Qt({fromEvent:k});return}pt("first",{scroll:!0});break}case xl:{k.preventDefault(),W?j({focusSelect:!0,fromEvent:k}):Qt({fromEvent:k});break}case Fl:{if(!W)return;Vt||k.preventDefault(),j({focusSelect:!Vt,fromEvent:k});break}default:!Sn&&dt.match(/^Key/)&&(k.preventDefault(),k.stopPropagation(),ut(dt.replace(/^Key/,""),{select:!W,fromEvent:k}))}},[pt,vt,W,Qt,ut,j]),N=M.useCallback(k=>{q(k),d==null||d(k)},[q,d]),Q=M.useCallback(k=>{pt(k)},[pt]),lt=M.useCallback(k=>{W||($t(),n==null||n(k))},[$t,n,W]),V=M.useCallback(k=>{$t(),r==null||r(k)},[$t,r]),rt=M.useCallback(k=>{J.current=k,X.current!==void 0&&Nt(X.current)},[Nt]),st=M.useCallback((k,ft)=>{tt.current[ft]=k,X.current===ft&&Nt(X.current)},[Nt]);return M.useEffect(()=>{if(!W)return()=>{};const k=ft=>{var dt;const xt=ft.target;!((dt=Z.current)===null||dt===void 0)&&dt.contains(xt)||(ft.preventDefault(),vt({focusSelect:!1,fromEvent:ft}))};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[vt,W,Z]),M.useMemo(()=>({activeOption:Ot,handleActivateOptionIndex:Q,handleBlur:lt,handleButtonKeyDown:N,handleDropdownKeyDown:q,handleFocus:V,handleMouseDown:p,handleOptionClick:B,handleSetDropdownRef:rt,handleSetOptionRef:st,open:W,selectedOption:St}),[Ot,Q,lt,N,V,q,p,B,rt,st,W,St])},ey=M.forwardRef(({className:n,defaultValue:c,disabled:o,onChange:r,options:d,readOnly:m,style:g,value:O,variant:A,width:b,...z},R)=>{const{isEnabled:U,options:Z,setValue:J,value:tt,DropdownButton:F,Wrapper:K}=Sp({defaultValue:c,disabled:o,native:!0,onChange:r,options:d,readOnly:m,value:O,variant:A}),X=M.useCallback(L=>{const et=Z.find(G=>G.value===L.target.value);et&&(J(et.value),r==null||r(et,{fromEvent:L}))},[r,Z,J]);return D.createElement(K,{className:n,style:{...g,width:b}},D.createElement(cf,null,D.createElement(Zg,{...z,disabled:o,onChange:U?X:Ta,ref:R,value:tt},Z.map((L,et)=>{var G;return D.createElement("option",{key:`${L.value}-${et}`,value:L.value},(G=L.label)!==null&&G!==void 0?G:L.value)})),F))});ey.displayName="SelectNative";function ly({activateOptionIndex:n,active:c,index:o,onClick:r,option:d,selected:m,setRef:g}){const O=M.useCallback(()=>{n(o)},[n,o]),A=M.useCallback(z=>{g(z,o)},[o,g]),b=bp();return D.createElement(Wg,{active:c,"aria-selected":m?"true":void 0,"data-value":d.value,id:b,onClick:r,onMouseEnter:O,ref:A,role:"option",tabIndex:0},d.label)}function ay({"aria-label":n,"aria-labelledby":c,className:o,defaultValue:r,disabled:d=!1,formatDisplay:m,inputProps:g,labelId:O,menuMaxHeight:A,name:b,onBlur:z,onChange:R,onClose:U,onFocus:Z,onKeyDown:J,onMouseDown:tt,onOpen:F,open:K,options:X,readOnly:L,shadow:et=!0,style:G,variant:W="default",value:I,width:St="auto",...Ot},Xt){const{isEnabled:Nt,options:pt,setValue:Qt,value:$t,wrapperProps:vt,DropdownButton:w,Wrapper:Y}=Sp({className:o,defaultValue:r,disabled:d,native:!1,onChange:R,options:X,style:G,readOnly:L,value:I,variant:W,width:St}),j=M.useRef(null),ut=M.useRef(null),p=M.useRef(null),{activeOption:B,handleActivateOptionIndex:q,handleBlur:N,handleButtonKeyDown:Q,handleDropdownKeyDown:lt,handleFocus:V,handleMouseDown:rt,handleOptionClick:st,handleSetDropdownRef:k,handleSetOptionRef:ft,open:dt,selectedOption:xt}=ty({onBlur:z,onChange:R,onClose:U,onFocus:Z,onKeyDown:J,onMouseDown:tt,onOpen:F,open:K,options:pt,value:$t,selectRef:ut,setValue:Qt,wrapperRef:p});M.useImperativeHandle(Xt,()=>({focus:nl=>{var Ge;(Ge=ut.current)===null||Ge===void 0||Ge.focus(nl)},node:j.current,value:String($t)}),[$t]);const Mt=M.useMemo(()=>xt?typeof m=="function"?m(xt):xt.label:"",[m,xt]),Vt=Nt?1:void 0,Zt=M.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),ve=bp(),Wt=M.useMemo(()=>pt.map((nl,Ge)=>{const Da=`${$t}-${Ge}`,xl=nl===B,Fl=nl===xt;return D.createElement(ly,{activateOptionIndex:q,active:xl,index:Ge,key:Da,onClick:st,option:nl,selected:Fl,setRef:ft})}),[B,q,st,ft,pt,xt,$t]);return D.createElement(Y,{...vt,$disabled:d,ref:p,shadow:et,style:{...G,width:St}},D.createElement("input",{name:b,ref:j,type:"hidden",value:String($t),...g}),D.createElement(cf,{"aria-disabled":d,"aria-expanded":dt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??O,"aria-owns":Nt&&dt?ve:void 0,onBlur:N,onFocus:V,onKeyDown:Q,onMouseDown:Nt?rt:tt,ref:ut,role:"button",tabIndex:Vt,...Ot},D.createElement(jg,null,Mt),w),Nt&&dt&&D.createElement(Jg,{id:ve,onKeyDown:lt,ref:k,role:"listbox",style:Zt,tabIndex:0,variant:W},Wt))}const xp=M.forwardRef(ay);xp.displayName="Select";const ny=H.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,ec=M.forwardRef(function({children:c,noPadding:o=!1,...r},d){return D.createElement(ny,{noPadding:o,ref:d,...r},c)});ec.displayName="Toolbar";const uy=H.div`
  padding: 16px;
`,rf=M.forwardRef(function({children:c,...o},r){return D.createElement(uy,{ref:r,...o},c)});rf.displayName="WindowContent";const iy=H.div`
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

  ${oc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,of=M.forwardRef(function({active:c=!0,children:o,...r},d){return D.createElement(iy,{active:c,ref:d,...r},o)});of.displayName="WindowHeader";const cy=H.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${jt({style:"window"})}
  ${Je()}
`,ry=H.span`
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
`,ff=M.forwardRef(({children:n,resizable:c=!1,resizeRef:o,shadow:r=!0,...d},m)=>D.createElement(cy,{ref:m,shadow:r,...d},n,c&&D.createElement(ry,{"data-testid":"resizeHandle",ref:o})));ff.displayName="Window";const oy=H(rp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,fy=H.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,sy=H.div`
  display: flex;
  flex-wrap: wrap;
`,Al=H.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,dy=H.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,hy=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function py(n,c){return new Date(n,c+1,0).getDate()}function my(n,c,o){return new Date(n,c,o).getDay()}function by(n){const c=new Date(Date.parse(n)),o=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:o,month:r,year:d}}const vy=M.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:o,onCancel:r,shadow:d=!0},m)=>{const[g,O]=M.useState(()=>by(c)),{year:A,month:b,day:z}=g,R=M.useCallback(({value:F})=>{O(K=>({...K,month:F}))},[]),U=M.useCallback(F=>{O(K=>({...K,year:F}))},[]),Z=M.useCallback(F=>{O(K=>({...K,day:F}))},[]),J=M.useCallback(()=>{const F=[g.year,g.month+1,g.day].map(K=>String(K).padStart(2,"0")).join("-");o==null||o(F)},[g.day,g.month,g.year,o]),tt=M.useMemo(()=>{const F=Array.from({length:42}),K=my(A,b,1);let X=z;const L=py(A,b);return X=X<L?X:L,F.forEach((et,G)=>{if(G>=K&&G<L+K){const W=G-K+1;F[G]=D.createElement(Al,{key:G,onClick:()=>{Z(W)}},D.createElement(dy,{active:W===X},W))}else F[G]=D.createElement(Al,{key:G})}),F},[z,Z,b,A]);return D.createElement(ff,{className:n,ref:m,shadow:d,style:{margin:20}},D.createElement(of,null,D.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),D.createElement(rf,null,D.createElement(ec,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(xp,{options:hy,value:b,onChange:R,width:128,menuMaxHeight:200}),D.createElement(mp,{value:A,onChange:U,width:100})),D.createElement(oy,null,D.createElement(fy,null,D.createElement(Al,null,"S"),D.createElement(Al,null,"M"),D.createElement(Al,null,"T"),D.createElement(Al,null,"W"),D.createElement(Al,null,"T"),D.createElement(Al,null,"F"),D.createElement(Al,null,"S")),D.createElement(sy,null,tt)),D.createElement(ec,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(Aa,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),D.createElement(Aa,{fullWidth:!0,onClick:o?J:void 0,disabled:!o},"OK"))))});vy.displayName="DatePicker";const gy=n=>{switch(n){case"status":case"well":return P`
        ${jt({style:"status"})}
      `;case"window":case"outside":return P`
        ${jt({style:"window"})}
      `;case"field":return P`
        ${jt({style:"field"})}
      `;default:return P`
        ${jt()}
      `}},yy=H.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>gy(n)}
  ${({variant:n})=>Je(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ay=M.forwardRef(({children:n,shadow:c=!1,variant:o="window",...r},d)=>D.createElement(yy,{ref:d,shadow:c,variant:o,...r},n));Ay.displayName="Frame";const Sy=H.fieldset`
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
`,xy=H.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,Ey=M.forwardRef(({label:n,disabled:c=!1,variant:o="default",children:r,...d},m)=>D.createElement(Sy,{"aria-disabled":c,$disabled:c,variant:o,ref:m,...d},n&&D.createElement(xy,{variant:o},n),r));Ey.displayName="GroupBox";const Ty=H.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Jl(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Ty.displayName="Handle";const Dy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Oy=H.div`
  display: inline-block;
  height: ${({size:n})=>Jl(n)};
  width: ${({size:n})=>Jl(n)};
`,zy=H.span`
  display: block;
  background: ${Dy};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ry=M.forwardRef(({size:n=30,...c},o)=>D.createElement(Oy,{size:n,ref:o,...c},D.createElement(zy,null)));Ry.displayName="Hourglass";const wy=H.div`
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
`,Ny=M.forwardRef(({backgroundStyles:n,children:c,...o},r)=>D.createElement(wy,{ref:r,...o},D.createElement(My,null,D.createElement(_y,null,D.createElement(Cy,{style:n},c)),D.createElement(By,null))));Ny.displayName="Monitor";const $y=H.div`
  display: inline-block;
  height: ${se.md};
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
`,Ep=P`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Hy=H.div`
  position: relative;
  top: 4px;
  ${Ep}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,ky=H.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Ep}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Qy=H.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Tp=17,qy=H.span`
  display: inline-block;
  width: ${Tp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,Ly=M.forwardRef(({hideValue:n=!1,shadow:c=!0,value:o,variant:r="default",...d},m)=>{const g=n?null:`${o}%`,O=M.useRef(null),[A,b]=M.useState([]),z=M.useCallback(()=>{if(!O.current||o===void 0)return;const R=O.current.getBoundingClientRect().width,U=Math.round(o/100*R/Tp);b(Array.from({length:U}))},[o]);return M.useEffect(()=>(z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)),[z]),D.createElement($y,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:m,role:"progressbar",variant:r,...d},D.createElement(Uy,{variant:r,shadow:c},r==="default"?D.createElement(D.Fragment,null,D.createElement(Hy,{"data-testid":"defaultProgress1"},g),D.createElement(ky,{"data-testid":"defaultProgress2",value:o},g)):D.createElement(Qy,{ref:O,"data-testid":"tileProgress"},A.map((R,U)=>D.createElement(qy,{key:U})))))});Ly.displayName="ProgressBar";const Dp=P`
  width: ${ll}px;
  height: ${ll}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Yy=H(al)`
  ${Dp}
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
`,Gy=H.div`
  ${Ea()}
  ${Dp}
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
`,jy=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Xy={flat:Gy,default:Yy},Vy=M.forwardRef(({checked:n,className:c="",disabled:o=!1,label:r="",onChange:d,style:m={},variant:g="default",...O},A)=>{const b=Xy[g];return D.createElement(nf,{$disabled:o,className:c,style:m},D.createElement(b,{$disabled:o,role:"presentation"},n&&D.createElement(jy,{$disabled:o,variant:g})),D.createElement(tc,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:A,...O}),r&&D.createElement(uf,null,r))});Vy.displayName="Radio";const Zy=typeof window<"u"?M.useLayoutEffect:M.useEffect;function ba(n){const c=M.useRef(n);return Zy(()=>{c.current=n}),M.useCallback((...o)=>(0,c.current)(...o),[])}function zh(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function Rh(n,c){return M.useMemo(()=>n==null&&c==null?null:o=>{zh(n,o),zh(c,o)},[n,c])}var Ky=Uh();let fc=!0,Vo=!1,wh;const Jy={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Wy(n){if("type"in n){const{type:c,tagName:o}=n;if(o==="INPUT"&&Jy[c]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function Fy(n){n.metaKey||n.altKey||n.ctrlKey||(fc=!0)}function Bo(){fc=!1}function Iy(){this.visibilityState==="hidden"&&Vo&&(fc=!0)}function Py(n){n.addEventListener("keydown",Fy,!0),n.addEventListener("mousedown",Bo,!0),n.addEventListener("pointerdown",Bo,!0),n.addEventListener("touchstart",Bo,!0),n.addEventListener("visibilitychange",Iy,!0)}function t1(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return fc||Wy(c)}function e1(){Vo=!0,window.clearTimeout(wh),wh=window.setTimeout(()=>{Vo=!1},100)}function l1(){const n=M.useCallback(c=>{const o=Ky.findDOMNode(c);o!=null&&Py(o.ownerDocument)},[]);return{isFocusVisible:t1,onBlurVisible:e1,ref:n}}function a1(n,c,o){return(o-c)*n+c}function Gi(n,c){if(c!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const r=n.changedTouches[o];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function ji(n){return n&&n.ownerDocument||document}function n1(n,c){var o;const{index:r}=(o=n.reduce((d,m,g)=>{const O=Math.abs(c-m);return d===null||O<d.distance||O===d.distance?{distance:O,index:g}:d},null))!==null&&o!==void 0?o:{};return r??-1}const u1=H.div`
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
`,Op=()=>P`
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
  ${Op()}
`,c1=H(al)`
  ${Op()}

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
          ${jt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&Ou({mainColor:c.material,secondaryColor:c.borderLightest})}
`,lc=6,o1=H.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?P`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${lc}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:P`
          bottom: ${-6}px;
          height: ${lc}px;
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
          transform: translate(${lc+2}px, ${lc+1}px);
        `:P`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,s1=M.forwardRef(({defaultValue:n,disabled:c=!1,marks:o=!1,max:r=100,min:d=0,name:m,onChange:g,onChangeCommitted:O,onMouseDown:A,orientation:b="horizontal",size:z="100%",step:R=1,value:U,variant:Z="default",...J},tt)=>{const F=Z==="flat"?c1:i1,K=b==="vertical",[X=d,L]=Wl({defaultValue:n,onChange:g??O,value:U}),{isFocusVisible:et,onBlurVisible:G,ref:W}=l1(),[I,St]=M.useState(!1),Ot=M.useRef(),Xt=M.useRef(null),Nt=Rh(W,Ot),pt=Rh(tt,Nt),Qt=ba(N=>{et(N)&&St(!0)}),$t=ba(()=>{I!==!1&&(St(!1),G())}),vt=M.useRef(),w=M.useMemo(()=>o===!0&&Number.isFinite(R)?[...Array(Math.round((r-d)/R)+1)].map((N,Q)=>({label:void 0,value:d+R*Q})):Array.isArray(o)?o:[],[o,r,d,R]),Y=ba(N=>{const Q=(r-d)/10,lt=w.map(st=>st.value),V=lt.indexOf(X);let rt=0;switch(N.key){case"Home":rt=d;break;case"End":rt=r;break;case"PageUp":R&&(rt=X+Q);break;case"PageDown":R&&(rt=X-Q);break;case"ArrowRight":case"ArrowUp":R?rt=X+R:rt=lt[V+1]||lt[lt.length-1];break;case"ArrowLeft":case"ArrowDown":R?rt=X-R:rt=lt[V-1]||lt[0];break;default:return}N.preventDefault(),R&&(rt=Th(rt,R,d)),rt=ga(rt,d,r),L(rt),St(!0),g==null||g(rt),O==null||O(rt)}),j=M.useCallback(N=>{if(!Ot.current)return 0;const Q=Ot.current.getBoundingClientRect();let lt;K?lt=(Q.bottom-N.y)/Q.height:lt=(N.x-Q.left)/Q.width;let V;if(V=a1(lt,d,r),R)V=Th(V,R,d);else{const rt=w.map(k=>k.value),st=n1(rt,V);V=rt[st]}return V=ga(V,d,r),V},[w,r,d,R,K]),ut=ba(N=>{var Q;const lt=Gi(N,vt.current);if(!lt)return;const V=j(lt);(Q=Xt.current)===null||Q===void 0||Q.focus(),L(V),St(!0),g==null||g(V)}),p=ba(N=>{const Q=Gi(N,vt.current);if(!Q)return;const lt=j(Q);O==null||O(lt),vt.current=void 0;const V=ji(Ot.current);V.removeEventListener("mousemove",ut),V.removeEventListener("mouseup",p),V.removeEventListener("touchmove",ut),V.removeEventListener("touchend",p)}),B=ba(N=>{var Q;A==null||A(N),N.preventDefault(),(Q=Xt.current)===null||Q===void 0||Q.focus(),St(!0);const lt=Gi(N,vt.current);if(lt){const rt=j(lt);L(rt),g==null||g(rt)}const V=ji(Ot.current);V.addEventListener("mousemove",ut),V.addEventListener("mouseup",p)}),q=ba(N=>{var Q;N.preventDefault();const lt=N.changedTouches[0];lt!=null&&(vt.current=lt.identifier),(Q=Xt.current)===null||Q===void 0||Q.focus(),St(!0);const V=Gi(N,vt.current);if(V){const st=j(V);L(st),g==null||g(st)}const rt=ji(Ot.current);rt.addEventListener("touchmove",ut),rt.addEventListener("touchend",p)});return M.useEffect(()=>{const{current:N}=Ot;N==null||N.addEventListener("touchstart",q);const Q=ji(N);return()=>{N==null||N.removeEventListener("touchstart",q),Q.removeEventListener("mousemove",ut),Q.removeEventListener("mouseup",p),Q.removeEventListener("touchmove",ut),Q.removeEventListener("touchend",p)}},[p,ut,q]),D.createElement(u1,{$disabled:c,hasMarks:!!w.length,isFocused:I,onMouseDown:B,orientation:b,ref:pt,size:Jl(z),...J},D.createElement("input",{disabled:c,name:m,type:"hidden",value:X??0}),w&&w.map(N=>D.createElement(o1,{$disabled:c,"data-testid":"tick",key:N.value/(r-d)*100,orientation:b,style:{[K?"bottom":"left"]:`${(N.value-d)/(r-d)*100}%`}},N.label&&D.createElement(f1,{"aria-hidden":!0,"data-testid":"mark",orientation:b},N.label))),D.createElement(F,{orientation:b,variant:Z}),D.createElement(r1,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":b,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":X,onBlur:$t,onFocus:Qt,onKeyDown:Y,orientation:b,ref:Xt,role:"slider",style:{[K?"bottom":"left"]:`${(K?-100:0)+100*(X-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:Z}))});s1.displayName="Slider";const d1=H.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${lf};
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
    ${jt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&P`
      &:active {
        &:before {
          ${jt({invert:!0,style:"window"})}
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
  height: calc(${se.md} - 2px);
  line-height: calc(${se.md} - 2px);
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
  ${jt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${se.md};
  line-height: ${se.md};
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
    height: calc(${se.md} + 4px);
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
`,O1=M.forwardRef(({value:n,onClick:c,selected:o=!1,children:r,...d},m)=>D.createElement(D1,{"aria-selected":o,selected:o,onClick:g=>c==null?void 0:c(n,g),ref:m,role:"tab",...d},r));O1.displayName="Tab";const z1=H.div`
  ${Je()}
  ${jt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,R1=M.forwardRef(({children:n,...c},o)=>D.createElement(z1,{ref:o,...c},n));R1.displayName="TabBody";const w1=H.div`
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
`;function _1(n,c){const o=[];for(let r=c;r>0;r-=1)o.push(n.splice(0,Math.ceil(n.length/r)));return o}const C1=M.forwardRef(({value:n,onChange:c=Ta,children:o,rows:r=1,...d},m)=>{const g=M.useMemo(()=>{var O;const A=(O=D.Children.map(o,R=>{if(!D.isValidElement(R))return null;const U={selected:R.props.value===n,onClick:c};return D.cloneElement(R,U)}))!==null&&O!==void 0?O:[],b=_1(A,r).map((R,U)=>({key:U,tabs:R})),z=b.findIndex(R=>R.tabs.some(U=>U.props.selected));return b.push(b.splice(z,1)[0]),b},[o,c,r,n]);return D.createElement(w1,{...d,isMultiRow:r>1,role:"tablist",ref:m},g.map(O=>D.createElement(M1,{key:O.key},O.tabs)))});C1.displayName="Tabs";const B1=["blur","focus"],N1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Mh(n){return"nativeEvent"in n&&B1.includes(n.type)}function _h(n){return"nativeEvent"in n&&N1.includes(n.type)}const $1={top:`top: -4px;
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
  box-shadow: ${ef};
  text-align: center;
  font-size: 1rem;
  ${n=>$1[n.position]}
`,H1=H.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,k1=M.forwardRef(({className:n,children:c,disableFocusListener:o=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:m=0,onBlur:g,onClose:O,onFocus:A,onMouseEnter:b,onMouseLeave:z,onOpen:R,style:U,text:Z,position:J="top",...tt},F)=>{const[K,X]=M.useState(!1),[L,et]=M.useState(),[G,W]=M.useState(),I=!o,St=!r,Ot=j=>{window.clearTimeout(L),window.clearTimeout(G);const ut=window.setTimeout(()=>{X(!0),R==null||R(j)},d);et(ut)},Xt=j=>{j.persist(),Mh(j)?A==null||A(j):_h(j)&&(b==null||b(j)),Ot(j)},Nt=j=>{window.clearTimeout(L),window.clearTimeout(G);const ut=window.setTimeout(()=>{X(!1),O==null||O(j)},m);W(ut)},pt=j=>{j.persist(),Mh(j)?g==null||g(j):_h(j)&&(z==null||z(j)),Nt(j)},Qt=I?pt:void 0,$t=I?Xt:void 0,vt=St?Xt:void 0,w=St?pt:void 0,Y=I?0:void 0;return D.createElement(H1,{"data-testid":"tooltip-wrapper",onBlur:Qt,onFocus:$t,onMouseEnter:vt,onMouseLeave:w,tabIndex:Y},D.createElement(U1,{className:n,"data-testid":"tooltip",position:J,ref:F,show:K,style:U,...tt},Z),c)});k1.displayName="Tooltip";const Zo=H(uf)`
  white-space: nowrap;
`,zp=P`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":P`
          cursor: pointer;

          :focus {
            ${Zo} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,Q1=H.ul`
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
`,q1=H.li`
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
`,L1=H.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Y1=H.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${zp};

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
`,Ch=H(nf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${zp};
`,G1=H.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Bh(n,c){return n.includes(c)?n.filter(o=>o!==c):[...n,c]}function Nh(n){n.preventDefault()}function Rp({className:n,disabled:c,expanded:o,innerRef:r,level:d,select:m,selected:g,style:O,tree:A=[]}){const b=d===0,z=M.useCallback(R=>{var U,Z;const J=!!(R.items&&R.items.length>0),tt=o.includes(R.id),F=(U=c||R.disabled)!==null&&U!==void 0?U:!1,K=F?Nh:G=>m(G,R),X=F?Nh:G=>m(G,R),L=g===R.id,et=D.createElement(G1,{"aria-hidden":!0},R.icon);return D.createElement(q1,{key:R.label,isRootLevel:b,role:"treeitem","aria-expanded":tt,"aria-selected":L,hasItems:J},J?D.createElement(L1,{open:tt},D.createElement(Y1,{onClick:K,$disabled:F},D.createElement(Ch,{$disabled:F},et,D.createElement(Zo,null,R.label))),tt&&D.createElement(Rp,{className:n,disabled:F,expanded:o,level:d+1,select:m,selected:g,style:O,tree:(Z=R.items)!==null&&Z!==void 0?Z:[]})):D.createElement(Ch,{as:"button",$disabled:F,onClick:X},et,D.createElement(Zo,null,R.label)))},[n,c,o,b,d,m,g,O]);return D.createElement(Q1,{className:b?n:void 0,style:b?O:void 0,ref:b?r:void 0,role:b?"tree":"group",isRootLevel:b},A.map(z))}function j1({className:n,defaultExpanded:c=[],defaultSelected:o,disabled:r=!1,expanded:d,onNodeSelect:m,onNodeToggle:g,selected:O,style:A,tree:b=[]},z){const[R,U]=Wl({defaultValue:c,onChange:g,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[Z,J]=Wl({defaultValue:o,onChange:m,onChangePropName:"onNodeSelect",value:O,valuePropName:"selected"}),tt=M.useCallback((X,L)=>{if(g){const et=Bh(R,L);g(X,et)}U(et=>Bh(et,L))},[R,g,U]),F=M.useCallback((X,L)=>{J(L),m&&m(X,L)},[m,J]),K=M.useCallback((X,L)=>{X.preventDefault(),F(X,L.id),L.items&&L.items.length&&tt(X,L.id)},[F,tt]);return D.createElement(Rp,{className:n,disabled:r,expanded:R,level:0,innerRef:z,select:K,selected:Z,style:A,tree:b})}const X1=M.forwardRef(j1);X1.displayName="TreeView";var No,$h;function V1(){if($h)return No;$h=1;var n={name:"vaporTeal",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLightest:"#58ffff",canvas:"#98DFEA",canvasText:"#000000",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#00706f",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#FCF6BD",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",hoverBackground:"#FF99C8",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",tooltip:"#fefbcc"};return No=n,No}var Z1=V1();const K1=Ko(Z1),J1="/assets/ms_sans_serif-Du8rjN1q.woff2",W1="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",F1=ng`
  ${lv}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${J1}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${W1}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`,I1=()=>be.jsxs("div",{children:[be.jsx(F1,{}),be.jsx(eg,{theme:K1,children:be.jsxs(ff,{resizable:!0,className:"window",children:[be.jsx(of,{className:"window-title",children:be.jsx("span",{children:"DCG-Santa-Cruz.exe"})}),be.jsxs(ec,{children:[be.jsx(Aa,{variant:"menu",size:"sm",children:"File"}),be.jsx(Aa,{variant:"menu",size:"sm",children:"Edit"}),be.jsx(Aa,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),be.jsxs(rf,{children:[be.jsx("p",{children:"Welcome to DCG Santa Cruz (formerly DC831)"}),be.jsx("p",{children:"Join us @ link"})]})]})})]});ev.createRoot(document.getElementById("root")).render(be.jsx(D.StrictMode,{children:be.jsx(I1,{})}));
