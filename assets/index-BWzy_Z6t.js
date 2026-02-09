(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();function sf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ho={exports:{}},zu={};var _h;function Tb(){if(_h)return zu;_h=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(r,d,p){var g=null;if(p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),"key"in d){p={};for(var D in d)D!=="key"&&(p[D]=d[D])}else p=d;return d=p.ref,{$$typeof:n,type:r,key:g,ref:d!==void 0?d:null,props:p}}return zu.Fragment=c,zu.jsx=f,zu.jsxs=f,zu}var Mh;function zb(){return Mh||(Mh=1,Ho.exports=Tb()),Ho.exports}var ft=zb(),$o={exports:{}},pt={};var wh;function Db(){if(wh)return pt;wh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),L=Symbol.iterator;function P(m){return m===null||typeof m!="object"?null:(m=L&&m[L]||m["@@iterator"],typeof m=="function"?m:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,I={};function Z(m,_,B){this.props=m,this.context=_,this.refs=I,this.updater=B||k}Z.prototype.isReactComponent={},Z.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},Z.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function K(){}K.prototype=Z.prototype;function Y(m,_,B){this.props=m,this.context=_,this.refs=I,this.updater=B||k}var q=Y.prototype=new K;q.constructor=Y,J(q,Z.prototype),q.isPureReactComponent=!0;var F=Array.isArray;function X(){}var H={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function mt(m,_,B){var j=B.ref;return{$$typeof:n,type:m,key:_,ref:j!==void 0?j:null,props:B}}function Rt(m,_){return mt(m.type,_,m.props)}function ct(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function st(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(B){return _[B]})}var Ct=/\/+/g;function _t(m,_){return typeof m=="object"&&m!==null&&m.key!=null?st(""+m.key):_.toString(36)}function Et(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(X,X):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function O(m,_,B,j,tt){var et=typeof m;(et==="undefined"||et==="boolean")&&(m=null);var nt=!1;if(m===null)nt=!0;else switch(et){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(m.$$typeof){case n:case c:nt=!0;break;case M:return nt=m._init,O(nt(m._payload),_,B,j,tt)}}if(nt)return tt=tt(m),nt=j===""?"."+_t(m,0):j,F(tt)?(B="",nt!=null&&(B=nt.replace(Ct,"$&/")+"/"),O(tt,_,B,"",function(dt){return dt})):tt!=null&&(ct(tt)&&(tt=Rt(tt,B+(tt.key==null||m&&m.key===tt.key?"":(""+tt.key).replace(Ct,"$&/")+"/")+nt)),_.push(tt)),1;nt=0;var Ot=j===""?".":j+":";if(F(m))for(var $=0;$<m.length;$++)j=m[$],et=Ot+_t(j,$),nt+=O(j,_,B,et,tt);else if($=P(m),typeof $=="function")for(m=$.call(m),$=0;!(j=m.next()).done;)j=j.value,et=Ot+_t(j,$++),nt+=O(j,_,B,et,tt);else if(et==="object"){if(typeof m.then=="function")return O(Et(m),_,B,j,tt);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return nt}function G(m,_,B){if(m==null)return m;var j=[],tt=0;return O(m,j,"","",function(et){return _.call(B,et,tt++)}),j}function V(m){if(m._status===-1){var _=m._result;_=_(),_.then(function(B){(m._status===0||m._status===-1)&&(m._status=1,m._result=B)},function(B){(m._status===0||m._status===-1)&&(m._status=2,m._result=B)}),m._status===-1&&(m._status=0,m._result=_)}if(m._status===1)return m._result.default;throw m._result}var it=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ht={map:G,forEach:function(m,_,B){G(m,function(){_.apply(this,arguments)},B)},count:function(m){var _=0;return G(m,function(){_++}),_},toArray:function(m){return G(m,function(_){return _})||[]},only:function(m){if(!ct(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return pt.Activity=S,pt.Children=ht,pt.Component=Z,pt.Fragment=f,pt.Profiler=d,pt.PureComponent=Y,pt.StrictMode=r,pt.Suspense=y,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,pt.__COMPILER_RUNTIME={__proto__:null,c:function(m){return H.H.useMemoCache(m)}},pt.cache=function(m){return function(){return m.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(m,_,B){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var j=J({},m.props),tt=m.key;if(_!=null)for(et in _.key!==void 0&&(tt=""+_.key),_)!W.call(_,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&_.ref===void 0||(j[et]=_[et]);var et=arguments.length-2;if(et===1)j.children=B;else if(1<et){for(var nt=Array(et),Ot=0;Ot<et;Ot++)nt[Ot]=arguments[Ot+2];j.children=nt}return mt(m.type,tt,j)},pt.createContext=function(m){return m={$$typeof:g,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:p,_context:m},m},pt.createElement=function(m,_,B){var j,tt={},et=null;if(_!=null)for(j in _.key!==void 0&&(et=""+_.key),_)W.call(_,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(tt[j]=_[j]);var nt=arguments.length-2;if(nt===1)tt.children=B;else if(1<nt){for(var Ot=Array(nt),$=0;$<nt;$++)Ot[$]=arguments[$+2];tt.children=Ot}if(m&&m.defaultProps)for(j in nt=m.defaultProps,nt)tt[j]===void 0&&(tt[j]=nt[j]);return mt(m,et,tt)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(m){return{$$typeof:D,render:m}},pt.isValidElement=ct,pt.lazy=function(m){return{$$typeof:M,_payload:{_status:-1,_result:m},_init:V}},pt.memo=function(m,_){return{$$typeof:b,type:m,compare:_===void 0?null:_}},pt.startTransition=function(m){var _=H.T,B={};H.T=B;try{var j=m(),tt=H.S;tt!==null&&tt(B,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(X,it)}catch(et){it(et)}finally{_!==null&&B.types!==null&&(_.types=B.types),H.T=_}},pt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},pt.use=function(m){return H.H.use(m)},pt.useActionState=function(m,_,B){return H.H.useActionState(m,_,B)},pt.useCallback=function(m,_){return H.H.useCallback(m,_)},pt.useContext=function(m){return H.H.useContext(m)},pt.useDebugValue=function(){},pt.useDeferredValue=function(m,_){return H.H.useDeferredValue(m,_)},pt.useEffect=function(m,_){return H.H.useEffect(m,_)},pt.useEffectEvent=function(m){return H.H.useEffectEvent(m)},pt.useId=function(){return H.H.useId()},pt.useImperativeHandle=function(m,_,B){return H.H.useImperativeHandle(m,_,B)},pt.useInsertionEffect=function(m,_){return H.H.useInsertionEffect(m,_)},pt.useLayoutEffect=function(m,_){return H.H.useLayoutEffect(m,_)},pt.useMemo=function(m,_){return H.H.useMemo(m,_)},pt.useOptimistic=function(m,_){return H.H.useOptimistic(m,_)},pt.useReducer=function(m,_,B){return H.H.useReducer(m,_,B)},pt.useRef=function(m){return H.H.useRef(m)},pt.useState=function(m){return H.H.useState(m)},pt.useSyncExternalStore=function(m,_,B){return H.H.useSyncExternalStore(m,_,B)},pt.useTransition=function(){return H.H.useTransition()},pt.version="19.2.4",pt}var Rh;function df(){return Rh||(Rh=1,$o.exports=Db()),$o.exports}var w=df();const z=sf(w);var jo={exports:{}},Du={},Lo={exports:{}},Qo={};var Nh;function Cb(){return Nh||(Nh=1,(function(n){function c(O,G){var V=O.length;O.push(G);t:for(;0<V;){var it=V-1>>>1,ht=O[it];if(0<d(ht,G))O[it]=G,O[V]=ht,V=it;else break t}}function f(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],V=O.pop();if(V!==G){O[0]=V;t:for(var it=0,ht=O.length,m=ht>>>1;it<m;){var _=2*(it+1)-1,B=O[_],j=_+1,tt=O[j];if(0>d(B,V))j<ht&&0>d(tt,B)?(O[it]=tt,O[j]=V,it=j):(O[it]=B,O[_]=V,it=_);else if(j<ht&&0>d(tt,V))O[it]=tt,O[j]=V,it=j;else break t}}return G}function d(O,G){var V=O.sortIndex-G.sortIndex;return V!==0?V:O.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var g=Date,D=g.now();n.unstable_now=function(){return g.now()-D}}var y=[],b=[],M=1,S=null,L=3,P=!1,k=!1,J=!1,I=!1,Z=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function q(O){for(var G=f(b);G!==null;){if(G.callback===null)r(b);else if(G.startTime<=O)r(b),G.sortIndex=G.expirationTime,c(y,G);else break;G=f(b)}}function F(O){if(J=!1,q(O),!k)if(f(y)!==null)k=!0,X||(X=!0,st());else{var G=f(b);G!==null&&Et(F,G.startTime-O)}}var X=!1,H=-1,W=5,mt=-1;function Rt(){return I?!0:!(n.unstable_now()-mt<W)}function ct(){if(I=!1,X){var O=n.unstable_now();mt=O;var G=!0;try{t:{k=!1,J&&(J=!1,K(H),H=-1),P=!0;var V=L;try{e:{for(q(O),S=f(y);S!==null&&!(S.expirationTime>O&&Rt());){var it=S.callback;if(typeof it=="function"){S.callback=null,L=S.priorityLevel;var ht=it(S.expirationTime<=O);if(O=n.unstable_now(),typeof ht=="function"){S.callback=ht,q(O),G=!0;break e}S===f(y)&&r(y),q(O)}else r(y);S=f(y)}if(S!==null)G=!0;else{var m=f(b);m!==null&&Et(F,m.startTime-O),G=!1}}break t}finally{S=null,L=V,P=!1}G=void 0}}finally{G?st():X=!1}}}var st;if(typeof Y=="function")st=function(){Y(ct)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,_t=Ct.port2;Ct.port1.onmessage=ct,st=function(){_t.postMessage(null)}}else st=function(){Z(ct,0)};function Et(O,G){H=Z(function(){O(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return L},n.unstable_next=function(O){switch(L){case 1:case 2:case 3:var G=3;break;default:G=L}var V=L;L=G;try{return O()}finally{L=V}},n.unstable_requestPaint=function(){I=!0},n.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=L;L=O;try{return G()}finally{L=V}},n.unstable_scheduleCallback=function(O,G,V){var it=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?it+V:it):V=it,O){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=V+ht,O={id:M++,callback:G,priorityLevel:O,startTime:V,expirationTime:ht,sortIndex:-1},V>it?(O.sortIndex=V,c(b,O),f(y)===null&&O===f(b)&&(J?(K(H),H=-1):J=!0,Et(F,V-it))):(O.sortIndex=ht,c(y,O),k||P||(k=!0,X||(X=!0,st()))),O},n.unstable_shouldYield=Rt,n.unstable_wrapCallback=function(O){var G=L;return function(){var V=L;L=G;try{return O.apply(this,arguments)}finally{L=V}}}})(Qo)),Qo}var Bh;function Ob(){return Bh||(Bh=1,Lo.exports=Cb()),Lo.exports}var qo={exports:{}},ve={};var Uh;function _b(){if(Uh)return ve;Uh=1;var n=df();function c(y){var b="https://react.dev/errors/"+y;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)b+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+y+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var r={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(y,b,M){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:y,containerInfo:b,implementation:M}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(y,b){if(y==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ve.createPortal=function(y,b){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return p(y,b,null,M)},ve.flushSync=function(y){var b=g.T,M=r.p;try{if(g.T=null,r.p=2,y)return y()}finally{g.T=b,r.p=M,r.d.f()}},ve.preconnect=function(y,b){typeof y=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,r.d.C(y,b))},ve.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},ve.preinit=function(y,b){if(typeof y=="string"&&b&&typeof b.as=="string"){var M=b.as,S=D(M,b.crossOrigin),L=typeof b.integrity=="string"?b.integrity:void 0,P=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;M==="style"?r.d.S(y,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:S,integrity:L,fetchPriority:P}):M==="script"&&r.d.X(y,{crossOrigin:S,integrity:L,fetchPriority:P,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ve.preinitModule=function(y,b){if(typeof y=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var M=D(b.as,b.crossOrigin);r.d.M(y,{crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&r.d.M(y)},ve.preload=function(y,b){if(typeof y=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var M=b.as,S=D(M,b.crossOrigin);r.d.L(y,M,{crossOrigin:S,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ve.preloadModule=function(y,b){if(typeof y=="string")if(b){var M=D(b.as,b.crossOrigin);r.d.m(y,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else r.d.m(y)},ve.requestFormReset=function(y){r.d.r(y)},ve.unstable_batchedUpdates=function(y,b){return y(b)},ve.useFormState=function(y,b,M){return g.H.useFormState(y,b,M)},ve.useFormStatus=function(){return g.H.useHostTransitionStatus()},ve.version="19.2.4",ve}var Hh;function sp(){if(Hh)return qo.exports;Hh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),qo.exports=_b(),qo.exports}var $h;function Mb(){if($h)return Du;$h=1;var n=Ob(),c=df(),f=sp();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(p(t)!==t)throw Error(r(188))}function b(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return y(u),t;if(i===a)return y(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var o=!1,s=u.child;s;){if(s===l){o=!0,l=u,a=i;break}if(s===a){o=!0,a=u,l=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===l){o=!0,l=i,a=u;break}if(s===a){o=!0,a=i,l=u;break}s=s.sibling}if(!o)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function M(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=M(t),e!==null)return e;t=t.sibling}return null}var S=Object.assign,L=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),mt=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case Z:return"Profiler";case I:return"StrictMode";case F:return"Suspense";case X:return"SuspenseList";case mt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case Y:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return e=t.displayName||null,e!==null?e:_t(t.type)||"Memo";case W:e=t._payload,t=t._init;try{return _t(t(e))}catch{}}return null}var Et=Array.isArray,O=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},it=[],ht=-1;function m(t){return{current:t}}function _(t){0>ht||(t.current=it[ht],it[ht]=null,ht--)}function B(t,e){ht++,it[ht]=t.current,t.current=e}var j=m(null),tt=m(null),et=m(null),nt=m(null);function Ot(t,e){switch(B(et,e),B(tt,t),B(j,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?I0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=I0(e),t=P0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_(j),B(j,t)}function $(){_(j),_(tt),_(et)}function dt(t){t.memoizedState!==null&&B(nt,t);var e=j.current,l=P0(e,t.type);e!==l&&(B(tt,t),B(j,l))}function vt(t){tt.current===t&&(_(j),_(tt)),nt.current===t&&(_(nt),Su._currentValue=V)}var At,Nt;function Ht(t){if(At===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);At=e&&e[1]||"",Nt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+At+t+Nt}var $t=!1;function me(t,e){if(!t||$t)return"";$t=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(C){var T=C}Reflect.construct(t,[],U)}else{try{U.call()}catch(C){T=C}t.call(U.prototype)}}else{try{throw Error()}catch(C){T=C}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(C){if(C&&T&&typeof C.stack=="string")return[C.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var h=o.split(`
`),E=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<E.length&&!E[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===E.length)for(a=h.length-1,u=E.length-1;1<=a&&0<=u&&h[a]!==E[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==E[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==E[u]){var R=`
`+h[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=u);break}}}finally{$t=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ht(l):""}function Ke(t,e){switch(t.tag){case 26:case 27:case 5:return Ht(t.type);case 16:return Ht("Lazy");case 13:return t.child!==e&&e!==null?Ht("Suspense Fallback"):Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return me(t.type,!1);case 11:return me(t.type.render,!1);case 1:return me(t.type,!0);case 31:return Ht("Activity");default:return""}}function al(t){try{var e="",l=null;do e+=Ke(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var He=Object.prototype.hasOwnProperty,ra=n.unstable_scheduleCallback,oa=n.unstable_cancelCallback,fa=n.unstable_shouldYield,Hu=n.unstable_requestPaint,ge=n.unstable_now,nm=n.unstable_getCurrentPriorityLevel,Mf=n.unstable_ImmediatePriority,wf=n.unstable_UserBlockingPriority,$u=n.unstable_NormalPriority,um=n.unstable_LowPriority,Rf=n.unstable_IdlePriority,im=n.log,cm=n.unstable_setDisableYieldValue,Nn=null,De=null;function Rl(t){if(typeof im=="function"&&cm(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Nn,t)}catch{}}var Ce=Math.clz32?Math.clz32:fm,rm=Math.log,om=Math.LN2;function fm(t){return t>>>=0,t===0?32:31-(rm(t)/om|0)|0}var ju=256,Lu=262144,Qu=4194304;function sa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?u=sa(a):(o&=s,o!==0?u=sa(o):l||(l=s&~t,l!==0&&(u=sa(l))))):(s=a&~i,s!==0?u=sa(s):o!==0?u=sa(o):l||(l=a&~t,l!==0&&(u=sa(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function Bn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function sm(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nf(){var t=Qu;return Qu<<=1,(Qu&62914560)===0&&(Qu=4194304),t}function Ec(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Un(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function dm(t,e,l,a,u,i){var o=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,E=t.hiddenUpdates;for(l=o&~l;0<l;){var R=31-Ce(l),U=1<<R;s[R]=0,h[R]=-1;var T=E[R];if(T!==null)for(E[R]=null,R=0;R<T.length;R++){var C=T[R];C!==null&&(C.lane&=-536870913)}l&=~U}a!==0&&Bf(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~e))}function Bf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Ce(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Uf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Ce(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function Hf(t,e){var l=e&-e;return l=(l&42)!==0?1:Tc(l),(l&(t.suspendedLanes|e))!==0?0:l}function Tc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $f(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:xh(t.type))}function jf(t,e){var l=G.p;try{return G.p=t,e()}finally{G.p=l}}var Nl=Math.random().toString(36).slice(2),oe="__reactFiber$"+Nl,ye="__reactProps$"+Nl,La="__reactContainer$"+Nl,Dc="__reactEvents$"+Nl,hm="__reactListeners$"+Nl,pm="__reactHandles$"+Nl,Lf="__reactResources$"+Nl,Hn="__reactMarker$"+Nl;function Cc(t){delete t[oe],delete t[ye],delete t[Dc],delete t[hm],delete t[pm]}function Qa(t){var e=t[oe];if(e)return e;for(var l=t.parentNode;l;){if(e=l[La]||l[oe]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=ih(t);t!==null;){if(l=t[oe])return l;t=ih(t)}return e}t=l,l=t.parentNode}return null}function qa(t){if(t=t[oe]||t[La]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function $n(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Ga(t){var e=t[Lf];return e||(e=t[Lf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ie(t){t[Hn]=!0}var Qf=new Set,qf={};function da(t,e){Ya(t,e),Ya(t+"Capture",e)}function Ya(t,e){for(qf[t]=e,t=0;t<e.length;t++)Qf.add(e[t])}var mm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gf={},Yf={};function vm(t){return He.call(Yf,t)?!0:He.call(Gf,t)?!1:mm.test(t)?Yf[t]=!0:(Gf[t]=!0,!1)}function Gu(t,e,l){if(vm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Yu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function fl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bm(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oc(t){if(!t._valueTracker){var e=kf(t)?"checked":"value";t._valueTracker=bm(t,e,""+t[e])}}function Xf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=kf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var gm=/[\n"\\]/g;function je(t){return t.replace(gm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function _c(t,e,l,a,u,i,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Mc(t,o,$e(e)):l!=null?Mc(t,o,$e(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+$e(s):t.removeAttribute("name")}function Vf(t,e,l,a,u,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Oc(t);return}l=l!=null?""+$e(l):"",e=e!=null?""+$e(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Oc(t)}function Mc(t,e,l){e==="number"&&ku(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ka(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+$e(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Zf(t,e,l){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+$e(l):""}function Kf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(Et(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=$e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Oc(t)}function Xa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var ym=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||ym.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Wf(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&Jf(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&Jf(t,i,e[i])}function wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Am=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xu(t){return Sm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sl(){}var Rc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Va=null,Za=null;function Ff(t){var e=qa(t);if(e&&(t=e.stateNode)){var l=t[ye]||null;t:switch(t=e.stateNode,e.type){case"input":if(_c(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+je(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ye]||null;if(!u)throw Error(r(90));_c(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Xf(a)}break t;case"textarea":Zf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&ka(t,!!l.multiple,e,!1)}}}var Bc=!1;function If(t,e,l){if(Bc)return t(e,l);Bc=!0;try{var a=t(e);return a}finally{if(Bc=!1,(Va!==null||Za!==null)&&(Ri(),Va&&(e=Va,t=Za,Za=Va=null,Ff(e),t)))for(e=0;e<t.length;e++)Ff(t[e])}}function jn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ye]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var dl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=!1;if(dl)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Uc=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Uc=!1}var Bl=null,Hc=null,Vu=null;function Pf(){if(Vu)return Vu;var t,e=Hc,l=e.length,a,u="value"in Bl?Bl.value:Bl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var o=l-t;for(a=1;a<=o&&e[l-a]===u[i-a];a++);return Vu=u.slice(t,1<a?1-a:void 0)}function Zu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ku(){return!0}function ts(){return!1}function Ae(t){function e(l,a,u,i,o){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ku:ts,this.isPropagationStopped=ts,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ku)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ku)},persist:function(){},isPersistent:Ku}),e}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Ae(ha),Qn=S({},ha,{view:0,detail:0}),xm=Ae(Qn),$c,jc,qn,Wu=S({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qn&&(qn&&t.type==="mousemove"?($c=t.screenX-qn.screenX,jc=t.screenY-qn.screenY):jc=$c=0,qn=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),es=Ae(Wu),Em=S({},Wu,{dataTransfer:0}),Tm=Ae(Em),zm=S({},Qn,{relatedTarget:0}),Lc=Ae(zm),Dm=S({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=Ae(Dm),Om=S({},ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_m=Ae(Om),Mm=S({},ha,{data:0}),ls=Ae(Mm),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nm[t])?!!e[t]:!1}function Qc(){return Bm}var Um=S({},Qn,{key:function(t){if(t.key){var e=wm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?Zu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hm=Ae(Um),$m=S({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=Ae($m),jm=S({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Lm=Ae(jm),Qm=S({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),qm=Ae(Qm),Gm=S({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=Ae(Gm),km=S({},ha,{newState:0,oldState:0}),Xm=Ae(km),Vm=[9,13,27,32],qc=dl&&"CompositionEvent"in window,Gn=null;dl&&"documentMode"in document&&(Gn=document.documentMode);var Zm=dl&&"TextEvent"in window&&!Gn,ns=dl&&(!qc||Gn&&8<Gn&&11>=Gn),us=" ",is=!1;function cs(t,e){switch(t){case"keyup":return Vm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ka=!1;function Km(t,e){switch(t){case"compositionend":return rs(e);case"keypress":return e.which!==32?null:(is=!0,us);case"textInput":return t=e.data,t===us&&is?null:t;default:return null}}function Jm(t,e){if(Ka)return t==="compositionend"||!qc&&cs(t,e)?(t=Pf(),Vu=Hc=Bl=null,Ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ns&&e.locale!=="ko"?null:e.data;default:return null}}var Wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wm[t.type]:e==="textarea"}function fs(t,e,l,a){Va?Za?Za.push(a):Za=[a]:Va=a,e=Li(e,"onChange"),0<e.length&&(l=new Ju("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Yn=null,kn=null;function Fm(t){V0(t,0)}function Fu(t){var e=$n(t);if(Xf(e))return t}function ss(t,e){if(t==="change")return e}var ds=!1;if(dl){var Gc;if(dl){var Yc="oninput"in document;if(!Yc){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),Yc=typeof hs.oninput=="function"}Gc=Yc}else Gc=!1;ds=Gc&&(!document.documentMode||9<document.documentMode)}function ps(){Yn&&(Yn.detachEvent("onpropertychange",ms),kn=Yn=null)}function ms(t){if(t.propertyName==="value"&&Fu(kn)){var e=[];fs(e,kn,t,Nc(t)),If(Fm,e)}}function Im(t,e,l){t==="focusin"?(ps(),Yn=e,kn=l,Yn.attachEvent("onpropertychange",ms)):t==="focusout"&&ps()}function Pm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fu(kn)}function tv(t,e){if(t==="click")return Fu(e)}function ev(t,e){if(t==="input"||t==="change")return Fu(e)}function lv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Oe=typeof Object.is=="function"?Object.is:lv;function Xn(t,e){if(Oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!He.call(e,u)||!Oe(t[u],e[u]))return!1}return!0}function vs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bs(t,e){var l=vs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=vs(l)}}function gs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ys(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ku(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=ku(t.document)}return e}function kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var av=dl&&"documentMode"in document&&11>=document.documentMode,Ja=null,Xc=null,Vn=null,Vc=!1;function As(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vc||Ja==null||Ja!==ku(a)||(a=Ja,"selectionStart"in a&&kc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vn&&Xn(Vn,a)||(Vn=a,a=Li(Xc,"onSelect"),0<a.length&&(e=new Ju("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ja)))}function pa(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Wa={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},Zc={},Ss={};dl&&(Ss=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ma(t){if(Zc[t])return Zc[t];if(!Wa[t])return t;var e=Wa[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Ss)return Zc[t]=e[l];return t}var xs=ma("animationend"),Es=ma("animationiteration"),Ts=ma("animationstart"),nv=ma("transitionrun"),uv=ma("transitionstart"),iv=ma("transitioncancel"),zs=ma("transitionend"),Ds=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function Je(t,e){Ds.set(t,e),da(e,[t])}var Iu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Le=[],Fa=0,Jc=0;function Pu(){for(var t=Fa,e=Jc=Fa=0;e<t;){var l=Le[e];Le[e++]=null;var a=Le[e];Le[e++]=null;var u=Le[e];Le[e++]=null;var i=Le[e];if(Le[e++]=null,a!==null&&u!==null){var o=a.pending;o===null?u.next=u:(u.next=o.next,o.next=u),a.pending=u}i!==0&&Cs(l,u,i)}}function ti(t,e,l,a){Le[Fa++]=t,Le[Fa++]=e,Le[Fa++]=l,Le[Fa++]=a,Jc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Wc(t,e,l,a){return ti(t,e,l,a),ei(t)}function va(t,e){return ti(t,null,null,e),ei(t)}function Cs(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-Ce(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function ei(t){if(50<pu)throw pu=0,uo=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ia={};function cv(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(t,e,l,a){return new cv(t,e,l,a)}function Fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hl(t,e){var l=t.alternate;return l===null?(l=_e(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Os(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function li(t,e,l,a,u,i){var o=0;if(a=t,typeof t=="function")Fc(t)&&(o=1);else if(typeof t=="string")o=db(t,l,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case mt:return t=_e(31,l,e,u),t.elementType=mt,t.lanes=i,t;case J:return ba(l.children,u,i,e);case I:o=8,u|=24;break;case Z:return t=_e(12,l,e,u|2),t.elementType=Z,t.lanes=i,t;case F:return t=_e(13,l,e,u),t.elementType=F,t.lanes=i,t;case X:return t=_e(19,l,e,u),t.elementType=X,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:o=10;break t;case K:o=9;break t;case q:o=11;break t;case H:o=14;break t;case W:o=16,a=null;break t}o=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=_e(o,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function ba(t,e,l,a){return t=_e(7,t,a,e),t.lanes=l,t}function Ic(t,e,l){return t=_e(6,t,null,e),t.lanes=l,t}function _s(t){var e=_e(18,null,null,0);return e.stateNode=t,e}function Pc(t,e,l){return e=_e(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ms=new WeakMap;function Qe(t,e){if(typeof t=="object"&&t!==null){var l=Ms.get(t);return l!==void 0?l:(e={value:t,source:e,stack:al(e)},Ms.set(t,e),e)}return{value:t,source:e,stack:al(e)}}var Pa=[],tn=0,ai=null,Zn=0,qe=[],Ge=0,Ul=null,nl=1,ul="";function pl(t,e){Pa[tn++]=Zn,Pa[tn++]=ai,ai=t,Zn=e}function ws(t,e,l){qe[Ge++]=nl,qe[Ge++]=ul,qe[Ge++]=Ul,Ul=t;var a=nl;t=ul;var u=32-Ce(a)-1;a&=~(1<<u),l+=1;var i=32-Ce(e)+u;if(30<i){var o=u-u%5;i=(a&(1<<o)-1).toString(32),a>>=o,u-=o,nl=1<<32-Ce(e)+u|l<<u|a,ul=i+t}else nl=1<<i|l<<u|a,ul=t}function tr(t){t.return!==null&&(pl(t,1),ws(t,1,0))}function er(t){for(;t===ai;)ai=Pa[--tn],Pa[tn]=null,Zn=Pa[--tn],Pa[tn]=null;for(;t===Ul;)Ul=qe[--Ge],qe[Ge]=null,ul=qe[--Ge],qe[Ge]=null,nl=qe[--Ge],qe[Ge]=null}function Rs(t,e){qe[Ge++]=nl,qe[Ge++]=ul,qe[Ge++]=Ul,nl=e.id,ul=e.overflow,Ul=t}var fe=null,kt=null,Dt=!1,Hl=null,Ye=!1,lr=Error(r(519));function $l(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kn(Qe(e,t)),lr}function Ns(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[oe]=t,e[ye]=a,l){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(l=0;l<vu.length;l++)xt(vu[l],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),Vf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),Kf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||W0(e.textContent,l)?(a.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),a.onScroll!=null&&xt("scroll",e),a.onScrollEnd!=null&&xt("scrollend",e),a.onClick!=null&&(e.onclick=sl),e=!0):e=!1,e||$l(t,!0)}function Bs(t){for(fe=t.return;fe;)switch(fe.tag){case 5:case 31:case 13:Ye=!1;return;case 27:case 3:Ye=!0;return;default:fe=fe.return}}function en(t){if(t!==fe)return!1;if(!Dt)return Bs(t),Dt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||So(t.type,t.memoizedProps)),l=!l),l&&kt&&$l(t),Bs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));kt=uh(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));kt=uh(t)}else e===27?(e=kt,Fl(t.type)?(t=Do,Do=null,kt=t):kt=e):kt=fe?Xe(t.stateNode.nextSibling):null;return!0}function ga(){kt=fe=null,Dt=!1}function ar(){var t=Hl;return t!==null&&(Te===null?Te=t:Te.push.apply(Te,t),Hl=null),t}function Kn(t){Hl===null?Hl=[t]:Hl.push(t)}var nr=m(null),ya=null,ml=null;function jl(t,e,l){B(nr,e._currentValue),e._currentValue=l}function vl(t){t._currentValue=nr.current,_(nr)}function ur(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function ir(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var o=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),ur(i.return,l,t),a||(o=null);break t}i=s.next}}else if(u.tag===18){if(o=u.return,o===null)throw Error(r(341));o.lanes|=l,i=o.alternate,i!==null&&(i.lanes|=l),ur(o,l,t),o=null}else o=u.child;if(o!==null)o.return=u;else for(o=u;o!==null;){if(o===t){o=null;break}if(u=o.sibling,u!==null){u.return=o.return,o=u;break}o=o.return}u=o}}function ln(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var o=u.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var s=u.type;Oe(u.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(u===nt.current){if(o=u.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Su):t=[Su])}u=u.return}t!==null&&ir(e,t,l,a),e.flags|=262144}function ni(t){for(t=t.firstContext;t!==null;){if(!Oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Aa(t){ya=t,ml=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function se(t){return Us(ya,t)}function ui(t,e){return ya===null&&Aa(t),Us(t,e)}function Us(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ml===null){if(t===null)throw Error(r(308));ml=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ml=ml.next=e;return l}var rv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},ov=n.unstable_scheduleCallback,fv=n.unstable_NormalPriority,Pt={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cr(){return{controller:new rv,data:new Map,refCount:0}}function Jn(t){t.refCount--,t.refCount===0&&ov(fv,function(){t.controller.abort()})}var Wn=null,rr=0,an=0,nn=null;function sv(t,e){if(Wn===null){var l=Wn=[];rr=0,an=so(),nn={status:"pending",value:void 0,then:function(a){l.push(a)}}}return rr++,e.then(Hs,Hs),e}function Hs(){if(--rr===0&&Wn!==null){nn!==null&&(nn.status="fulfilled");var t=Wn;Wn=null,an=0,nn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function dv(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var $s=O.S;O.S=function(t,e){A0=ge(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&sv(t,e),$s!==null&&$s(t,e)};var Sa=m(null);function or(){var t=Sa.current;return t!==null?t:Yt.pooledCache}function ii(t,e){e===null?B(Sa,Sa.current):B(Sa,e.pool)}function js(){var t=or();return t===null?null:{parent:Pt._currentValue,pool:t}}var un=Error(r(460)),fr=Error(r(474)),ci=Error(r(542)),ri={then:function(){}};function Ls(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qs(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(sl,sl),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Gs(t),t;default:if(typeof e.status=="string")e.then(sl,sl);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Gs(t),t}throw Ea=e,un}}function xa(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ea=l,un):l}}var Ea=null;function qs(){if(Ea===null)throw Error(r(459));var t=Ea;return Ea=null,t}function Gs(t){if(t===un||t===ci)throw Error(r(483))}var cn=null,Fn=0;function oi(t){var e=Fn;return Fn+=1,cn===null&&(cn=[]),Qs(cn,t,e)}function In(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function fi(t,e){throw e.$$typeof===L?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ys(t){function e(A,v){if(t){var x=A.deletions;x===null?(A.deletions=[v],A.flags|=16):x.push(v)}}function l(A,v){if(!t)return null;for(;v!==null;)e(A,v),v=v.sibling;return null}function a(A){for(var v=new Map;A!==null;)A.key!==null?v.set(A.key,A):v.set(A.index,A),A=A.sibling;return v}function u(A,v){return A=hl(A,v),A.index=0,A.sibling=null,A}function i(A,v,x){return A.index=x,t?(x=A.alternate,x!==null?(x=x.index,x<v?(A.flags|=67108866,v):x):(A.flags|=67108866,v)):(A.flags|=1048576,v)}function o(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function s(A,v,x,N){return v===null||v.tag!==6?(v=Ic(x,A.mode,N),v.return=A,v):(v=u(v,x),v.return=A,v)}function h(A,v,x,N){var rt=x.type;return rt===J?R(A,v,x.props.children,N,x.key):v!==null&&(v.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===W&&xa(rt)===v.type)?(v=u(v,x.props),In(v,x),v.return=A,v):(v=li(x.type,x.key,x.props,null,A.mode,N),In(v,x),v.return=A,v)}function E(A,v,x,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Pc(x,A.mode,N),v.return=A,v):(v=u(v,x.children||[]),v.return=A,v)}function R(A,v,x,N,rt){return v===null||v.tag!==7?(v=ba(x,A.mode,N,rt),v.return=A,v):(v=u(v,x),v.return=A,v)}function U(A,v,x){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ic(""+v,A.mode,x),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case P:return x=li(v.type,v.key,v.props,null,A.mode,x),In(x,v),x.return=A,x;case k:return v=Pc(v,A.mode,x),v.return=A,v;case W:return v=xa(v),U(A,v,x)}if(Et(v)||st(v))return v=ba(v,A.mode,x,null),v.return=A,v;if(typeof v.then=="function")return U(A,oi(v),x);if(v.$$typeof===Y)return U(A,ui(A,v),x);fi(A,v)}return null}function T(A,v,x,N){var rt=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return rt!==null?null:s(A,v,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case P:return x.key===rt?h(A,v,x,N):null;case k:return x.key===rt?E(A,v,x,N):null;case W:return x=xa(x),T(A,v,x,N)}if(Et(x)||st(x))return rt!==null?null:R(A,v,x,N,null);if(typeof x.then=="function")return T(A,v,oi(x),N);if(x.$$typeof===Y)return T(A,v,ui(A,x),N);fi(A,x)}return null}function C(A,v,x,N,rt){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return A=A.get(x)||null,s(v,A,""+N,rt);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case P:return A=A.get(N.key===null?x:N.key)||null,h(v,A,N,rt);case k:return A=A.get(N.key===null?x:N.key)||null,E(v,A,N,rt);case W:return N=xa(N),C(A,v,x,N,rt)}if(Et(N)||st(N))return A=A.get(x)||null,R(v,A,N,rt,null);if(typeof N.then=="function")return C(A,v,x,oi(N),rt);if(N.$$typeof===Y)return C(A,v,x,ui(v,N),rt);fi(v,N)}return null}function at(A,v,x,N){for(var rt=null,Mt=null,ut=v,gt=v=0,zt=null;ut!==null&&gt<x.length;gt++){ut.index>gt?(zt=ut,ut=null):zt=ut.sibling;var wt=T(A,ut,x[gt],N);if(wt===null){ut===null&&(ut=zt);break}t&&ut&&wt.alternate===null&&e(A,ut),v=i(wt,v,gt),Mt===null?rt=wt:Mt.sibling=wt,Mt=wt,ut=zt}if(gt===x.length)return l(A,ut),Dt&&pl(A,gt),rt;if(ut===null){for(;gt<x.length;gt++)ut=U(A,x[gt],N),ut!==null&&(v=i(ut,v,gt),Mt===null?rt=ut:Mt.sibling=ut,Mt=ut);return Dt&&pl(A,gt),rt}for(ut=a(ut);gt<x.length;gt++)zt=C(ut,A,gt,x[gt],N),zt!==null&&(t&&zt.alternate!==null&&ut.delete(zt.key===null?gt:zt.key),v=i(zt,v,gt),Mt===null?rt=zt:Mt.sibling=zt,Mt=zt);return t&&ut.forEach(function(la){return e(A,la)}),Dt&&pl(A,gt),rt}function ot(A,v,x,N){if(x==null)throw Error(r(151));for(var rt=null,Mt=null,ut=v,gt=v=0,zt=null,wt=x.next();ut!==null&&!wt.done;gt++,wt=x.next()){ut.index>gt?(zt=ut,ut=null):zt=ut.sibling;var la=T(A,ut,wt.value,N);if(la===null){ut===null&&(ut=zt);break}t&&ut&&la.alternate===null&&e(A,ut),v=i(la,v,gt),Mt===null?rt=la:Mt.sibling=la,Mt=la,ut=zt}if(wt.done)return l(A,ut),Dt&&pl(A,gt),rt;if(ut===null){for(;!wt.done;gt++,wt=x.next())wt=U(A,wt.value,N),wt!==null&&(v=i(wt,v,gt),Mt===null?rt=wt:Mt.sibling=wt,Mt=wt);return Dt&&pl(A,gt),rt}for(ut=a(ut);!wt.done;gt++,wt=x.next())wt=C(ut,A,gt,wt.value,N),wt!==null&&(t&&wt.alternate!==null&&ut.delete(wt.key===null?gt:wt.key),v=i(wt,v,gt),Mt===null?rt=wt:Mt.sibling=wt,Mt=wt);return t&&ut.forEach(function(Eb){return e(A,Eb)}),Dt&&pl(A,gt),rt}function Gt(A,v,x,N){if(typeof x=="object"&&x!==null&&x.type===J&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case P:t:{for(var rt=x.key;v!==null;){if(v.key===rt){if(rt=x.type,rt===J){if(v.tag===7){l(A,v.sibling),N=u(v,x.props.children),N.return=A,A=N;break t}}else if(v.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===W&&xa(rt)===v.type){l(A,v.sibling),N=u(v,x.props),In(N,x),N.return=A,A=N;break t}l(A,v);break}else e(A,v);v=v.sibling}x.type===J?(N=ba(x.props.children,A.mode,N,x.key),N.return=A,A=N):(N=li(x.type,x.key,x.props,null,A.mode,N),In(N,x),N.return=A,A=N)}return o(A);case k:t:{for(rt=x.key;v!==null;){if(v.key===rt)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){l(A,v.sibling),N=u(v,x.children||[]),N.return=A,A=N;break t}else{l(A,v);break}else e(A,v);v=v.sibling}N=Pc(x,A.mode,N),N.return=A,A=N}return o(A);case W:return x=xa(x),Gt(A,v,x,N)}if(Et(x))return at(A,v,x,N);if(st(x)){if(rt=st(x),typeof rt!="function")throw Error(r(150));return x=rt.call(x),ot(A,v,x,N)}if(typeof x.then=="function")return Gt(A,v,oi(x),N);if(x.$$typeof===Y)return Gt(A,v,ui(A,x),N);fi(A,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,v!==null&&v.tag===6?(l(A,v.sibling),N=u(v,x),N.return=A,A=N):(l(A,v),N=Ic(x,A.mode,N),N.return=A,A=N),o(A)):l(A,v)}return function(A,v,x,N){try{Fn=0;var rt=Gt(A,v,x,N);return cn=null,rt}catch(ut){if(ut===un||ut===ci)throw ut;var Mt=_e(29,ut,null,A.mode);return Mt.lanes=N,Mt.return=A,Mt}}}var Ta=Ys(!0),ks=Ys(!1),Ll=!1;function sr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ql(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ql(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Bt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=ei(t),Cs(t,null,l),e}return ti(t,a,e,l),ei(t)}function Pn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Uf(t,l)}}function hr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var o={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=o:i=i.next=o,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var pr=!1;function tu(){if(pr){var t=nn;if(t!==null)throw t}}function eu(t,e,l,a){pr=!1;var u=t.updateQueue;Ll=!1;var i=u.firstBaseUpdate,o=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,E=h.next;h.next=null,o===null?i=E:o.next=E,o=h;var R=t.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==o&&(s===null?R.firstBaseUpdate=E:s.next=E,R.lastBaseUpdate=h))}if(i!==null){var U=u.baseState;o=0,R=E=h=null,s=i;do{var T=s.lane&-536870913,C=T!==s.lane;if(C?(Tt&T)===T:(a&T)===T){T!==0&&T===an&&(pr=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var at=t,ot=s;T=e;var Gt=l;switch(ot.tag){case 1:if(at=ot.payload,typeof at=="function"){U=at.call(Gt,U,T);break t}U=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ot.payload,T=typeof at=="function"?at.call(Gt,U,T):at,T==null)break t;U=S({},U,T);break t;case 2:Ll=!0}}T=s.callback,T!==null&&(t.flags|=64,C&&(t.flags|=8192),C=u.callbacks,C===null?u.callbacks=[T]:C.push(T))}else C={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(E=R=C,h=U):R=R.next=C,o|=T;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;C=s,s=C.next,C.next=null,u.lastBaseUpdate=C,u.shared.pending=null}}while(!0);R===null&&(h=U),u.baseState=h,u.firstBaseUpdate=E,u.lastBaseUpdate=R,i===null&&(u.shared.lanes=0),Vl|=o,t.lanes=o,t.memoizedState=U}}function Xs(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Vs(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Xs(l[t],e)}var rn=m(null),si=m(0);function Zs(t,e){t=zl,B(si,t),B(rn,e),zl=t|e.baseLanes}function mr(){B(si,zl),B(rn,rn.current)}function vr(){zl=si.current,_(rn),_(si)}var Me=m(null),ke=null;function Gl(t){var e=t.alternate;B(Ft,Ft.current&1),B(Me,t),ke===null&&(e===null||rn.current!==null||e.memoizedState!==null)&&(ke=t)}function br(t){B(Ft,Ft.current),B(Me,t),ke===null&&(ke=t)}function Ks(t){t.tag===22?(B(Ft,Ft.current),B(Me,t),ke===null&&(ke=t)):Yl()}function Yl(){B(Ft,Ft.current),B(Me,Me.current)}function we(t){_(Me),ke===t&&(ke=null),_(Ft)}var Ft=m(0);function di(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||To(l)||zo(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bl=0,bt=null,Qt=null,te=null,hi=!1,on=!1,za=!1,pi=0,lu=0,fn=null,hv=0;function Kt(){throw Error(r(321))}function gr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Oe(t[l],e[l]))return!1;return!0}function yr(t,e,l,a,u,i){return bl=i,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?wd:Br,za=!1,i=l(a,u),za=!1,on&&(i=Ws(e,l,a,u)),Js(t),i}function Js(t){O.H=uu;var e=Qt!==null&&Qt.next!==null;if(bl=0,te=Qt=bt=null,hi=!1,lu=0,fn=null,e)throw Error(r(300));t===null||ee||(t=t.dependencies,t!==null&&ni(t)&&(ee=!0))}function Ws(t,e,l,a){bt=t;var u=0;do{if(on&&(fn=null),lu=0,on=!1,25<=u)throw Error(r(301));if(u+=1,te=Qt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=Rd,i=e(l,a)}while(on);return i}function pv(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?au(e):e,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(bt.flags|=1024),e}function Ar(){var t=pi!==0;return pi=0,t}function Sr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function xr(t){if(hi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hi=!1}bl=0,te=Qt=bt=null,on=!1,lu=pi=0,fn=null}function be(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?bt.memoizedState=te=t:te=te.next=t,te}function It(){if(Qt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var e=te===null?bt.memoizedState:te.next;if(e!==null)te=e,Qt=t;else{if(t===null)throw bt.alternate===null?Error(r(467)):Error(r(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},te===null?bt.memoizedState=te=t:te=te.next=t}return te}function mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function au(t){var e=lu;return lu+=1,fn===null&&(fn=[]),t=Qs(fn,t,e),e=bt,(te===null?e.memoizedState:te.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?wd:Br),t}function vi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return au(t);if(t.$$typeof===Y)return se(t)}throw Error(r(438,String(t)))}function Er(t){var e=null,l=bt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=bt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=mi(),bt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Rt;return e.index++,l}function gl(t,e){return typeof e=="function"?e(t):e}function bi(t){var e=It();return Tr(e,Qt,t)}function Tr(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var o=u.next;u.next=i.next,i.next=o}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=o=null,h=null,E=e,R=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(Tt&U)===U:(bl&U)===U){var T=E.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===an&&(R=!0);else if((bl&T)===T){E=E.next,T===an&&(R=!0);continue}else U={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(s=h=U,o=i):h=h.next=U,bt.lanes|=T,Vl|=T;U=E.action,za&&l(i,U),i=E.hasEagerState?E.eagerState:l(i,U)}else T={lane:U,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(s=h=T,o=i):h=h.next=T,bt.lanes|=U,Vl|=U;E=E.next}while(E!==null&&E!==e);if(h===null?o=i:h.next=s,!Oe(i,t.memoizedState)&&(ee=!0,R&&(l=nn,l!==null)))throw l;t.memoizedState=i,t.baseState=o,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function zr(t){var e=It(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var o=u=u.next;do i=t(i,o.action),o=o.next;while(o!==u);Oe(i,e.memoizedState)||(ee=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Fs(t,e,l){var a=bt,u=It(),i=Dt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var o=!Oe((Qt||u).memoizedState,l);if(o&&(u.memoizedState=l,ee=!0),u=u.queue,Or(td.bind(null,a,u,t),[t]),u.getSnapshot!==e||o||te!==null&&te.memoizedState.tag&1){if(a.flags|=2048,sn(9,{destroy:void 0},Ps.bind(null,a,u,l,e),null),Yt===null)throw Error(r(349));i||(bl&127)!==0||Is(a,e,l)}return l}function Is(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=bt.updateQueue,e===null?(e=mi(),bt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ps(t,e,l,a){e.value=l,e.getSnapshot=a,ed(e)&&ld(t)}function td(t,e,l){return l(function(){ed(e)&&ld(t)})}function ed(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Oe(t,l)}catch{return!0}}function ld(t){var e=va(t,2);e!==null&&ze(e,t,2)}function Dr(t){var e=be();if(typeof t=="function"){var l=t;if(t=l(),za){Rl(!0);try{l()}finally{Rl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:t},e}function ad(t,e,l,a){return t.baseState=l,Tr(t,Qt,typeof a=="function"?a:gl)}function mv(t,e,l,a,u){if(Ai(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};O.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,nd(e,i)):(i.next=l.next,e.pending=l.next=i)}}function nd(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=O.T,o={};O.T=o;try{var s=l(u,a),h=O.S;h!==null&&h(o,s),ud(t,e,s)}catch(E){Cr(t,e,E)}finally{i!==null&&o.types!==null&&(i.types=o.types),O.T=i}}else try{i=l(u,a),ud(t,e,i)}catch(E){Cr(t,e,E)}}function ud(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){id(t,e,a)},function(a){return Cr(t,e,a)}):id(t,e,l)}function id(t,e,l){e.status="fulfilled",e.value=l,cd(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,nd(t,l)))}function Cr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,cd(e),e=e.next;while(e!==a)}t.action=null}function cd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function rd(t,e){return e}function od(t,e){if(Dt){var l=Yt.formState;if(l!==null){t:{var a=bt;if(Dt){if(kt){e:{for(var u=kt,i=Ye;u.nodeType!==8;){if(!i){u=null;break e}if(u=Xe(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){kt=Xe(u.nextSibling),a=u.data==="F!";break t}}$l(a)}a=!1}a&&(e=l[0])}}return l=be(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rd,lastRenderedState:e},l.queue=a,l=Od.bind(null,bt,a),a.dispatch=l,a=Dr(!1),i=Nr.bind(null,bt,!1,a.queue),a=be(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=mv.bind(null,bt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function fd(t){var e=It();return sd(e,Qt,t)}function sd(t,e,l){if(e=Tr(t,e,rd)[0],t=bi(gl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=au(e)}catch(o){throw o===un?ci:o}else a=e;e=It();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(bt.flags|=2048,sn(9,{destroy:void 0},vv.bind(null,u,l),null)),[a,i,t]}function vv(t,e){t.action=e}function dd(t){var e=It(),l=Qt;if(l!==null)return sd(e,l,t);It(),e=e.memoizedState,l=It();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function sn(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=bt.updateQueue,e===null&&(e=mi(),bt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function hd(){return It().memoizedState}function gi(t,e,l,a){var u=be();bt.flags|=t,u.memoizedState=sn(1|e,{destroy:void 0},l,a===void 0?null:a)}function yi(t,e,l,a){var u=It();a=a===void 0?null:a;var i=u.memoizedState.inst;Qt!==null&&a!==null&&gr(a,Qt.memoizedState.deps)?u.memoizedState=sn(e,i,l,a):(bt.flags|=t,u.memoizedState=sn(1|e,i,l,a))}function pd(t,e){gi(8390656,8,t,e)}function Or(t,e){yi(2048,8,t,e)}function bv(t){bt.flags|=4;var e=bt.updateQueue;if(e===null)e=mi(),bt.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function md(t){var e=It().memoizedState;return bv({ref:e,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function vd(t,e){return yi(4,2,t,e)}function bd(t,e){return yi(4,4,t,e)}function gd(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yd(t,e,l){l=l!=null?l.concat([t]):null,yi(4,4,gd.bind(null,e,t),l)}function _r(){}function Ad(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&gr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Sd(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&gr(e,a[1]))return a[0];if(a=t(),za){Rl(!0);try{t()}finally{Rl(!1)}}return l.memoizedState=[a,e],a}function Mr(t,e,l){return l===void 0||(bl&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=x0(),bt.lanes|=t,Vl|=t,l)}function xd(t,e,l,a){return Oe(l,e)?l:rn.current!==null?(t=Mr(t,l,a),Oe(t,e)||(ee=!0),t):(bl&42)===0||(bl&1073741824)!==0&&(Tt&261930)===0?(ee=!0,t.memoizedState=l):(t=x0(),bt.lanes|=t,Vl|=t,e)}function Ed(t,e,l,a,u){var i=G.p;G.p=i!==0&&8>i?i:8;var o=O.T,s={};O.T=s,Nr(t,!1,e,l);try{var h=u(),E=O.S;if(E!==null&&E(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=dv(h,a);nu(t,e,R,Be(t))}else nu(t,e,a,Be(t))}catch(U){nu(t,e,{then:function(){},status:"rejected",reason:U},Be())}finally{G.p=i,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function gv(){}function wr(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=Td(t).queue;Ed(t,u,e,V,l===null?gv:function(){return zd(t),l(a)})}function Td(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:V},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function zd(t){var e=Td(t);e.next===null&&(e=t.alternate.memoizedState),nu(t,e.next.queue,{},Be())}function Rr(){return se(Su)}function Dd(){return It().memoizedState}function Cd(){return It().memoizedState}function yv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Be();t=Ql(l);var a=ql(e,t,l);a!==null&&(ze(a,e,l),Pn(a,e,l)),e={cache:cr()},t.payload=e;return}e=e.return}}function Av(t,e,l){var a=Be();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ai(t)?_d(e,l):(l=Wc(t,e,l,a),l!==null&&(ze(l,t,a),Md(l,e,a)))}function Od(t,e,l){var a=Be();nu(t,e,l,a)}function nu(t,e,l,a){var u={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ai(t))_d(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,s=i(o,l);if(u.hasEagerState=!0,u.eagerState=s,Oe(s,o))return ti(t,e,u,0),Yt===null&&Pu(),!1}catch{}if(l=Wc(t,e,u,a),l!==null)return ze(l,t,a),Md(l,e,a),!0}return!1}function Nr(t,e,l,a){if(a={lane:2,revertLane:so(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ai(t)){if(e)throw Error(r(479))}else e=Wc(t,l,a,2),e!==null&&ze(e,t,2)}function Ai(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function _d(t,e){on=hi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Md(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Uf(t,l)}}var uu={readContext:se,use:vi,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt};uu.useEffectEvent=Kt;var wd={readContext:se,use:vi,useCallback:function(t,e){return be().memoizedState=[t,e===void 0?null:e],t},useContext:se,useEffect:pd,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,gi(4194308,4,gd.bind(null,e,t),l)},useLayoutEffect:function(t,e){return gi(4194308,4,t,e)},useInsertionEffect:function(t,e){gi(4,2,t,e)},useMemo:function(t,e){var l=be();e=e===void 0?null:e;var a=t();if(za){Rl(!0);try{t()}finally{Rl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=be();if(l!==void 0){var u=l(e);if(za){Rl(!0);try{l(e)}finally{Rl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Av.bind(null,bt,t),[a.memoizedState,t]},useRef:function(t){var e=be();return t={current:t},e.memoizedState=t},useState:function(t){t=Dr(t);var e=t.queue,l=Od.bind(null,bt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:_r,useDeferredValue:function(t,e){var l=be();return Mr(l,t,e)},useTransition:function(){var t=Dr(!1);return t=Ed.bind(null,bt,t.queue,!0,!1),be().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=bt,u=be();if(Dt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),Yt===null)throw Error(r(349));(Tt&127)!==0||Is(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,pd(td.bind(null,a,i,t),[t]),a.flags|=2048,sn(9,{destroy:void 0},Ps.bind(null,a,i,l,e),null),l},useId:function(){var t=be(),e=Yt.identifierPrefix;if(Dt){var l=ul,a=nl;l=(a&~(1<<32-Ce(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=pi++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=hv++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Rr,useFormState:od,useActionState:od,useOptimistic:function(t){var e=be();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Nr.bind(null,bt,!0,l),l.dispatch=e,[t,e]},useMemoCache:Er,useCacheRefresh:function(){return be().memoizedState=yv.bind(null,bt)},useEffectEvent:function(t){var e=be(),l={impl:t};return e.memoizedState=l,function(){if((Bt&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},Br={readContext:se,use:vi,useCallback:Ad,useContext:se,useEffect:Or,useImperativeHandle:yd,useInsertionEffect:vd,useLayoutEffect:bd,useMemo:Sd,useReducer:bi,useRef:hd,useState:function(){return bi(gl)},useDebugValue:_r,useDeferredValue:function(t,e){var l=It();return xd(l,Qt.memoizedState,t,e)},useTransition:function(){var t=bi(gl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:au(t),e]},useSyncExternalStore:Fs,useId:Dd,useHostTransitionStatus:Rr,useFormState:fd,useActionState:fd,useOptimistic:function(t,e){var l=It();return ad(l,Qt,t,e)},useMemoCache:Er,useCacheRefresh:Cd};Br.useEffectEvent=md;var Rd={readContext:se,use:vi,useCallback:Ad,useContext:se,useEffect:Or,useImperativeHandle:yd,useInsertionEffect:vd,useLayoutEffect:bd,useMemo:Sd,useReducer:zr,useRef:hd,useState:function(){return zr(gl)},useDebugValue:_r,useDeferredValue:function(t,e){var l=It();return Qt===null?Mr(l,t,e):xd(l,Qt.memoizedState,t,e)},useTransition:function(){var t=zr(gl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:au(t),e]},useSyncExternalStore:Fs,useId:Dd,useHostTransitionStatus:Rr,useFormState:dd,useActionState:dd,useOptimistic:function(t,e){var l=It();return Qt!==null?ad(l,Qt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Er,useCacheRefresh:Cd};Rd.useEffectEvent=md;function Ur(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:S({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Hr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Be(),u=Ql(a);u.payload=e,l!=null&&(u.callback=l),e=ql(t,u,a),e!==null&&(ze(e,t,a),Pn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Be(),u=Ql(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=ql(t,u,a),e!==null&&(ze(e,t,a),Pn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Be(),a=Ql(l);a.tag=2,e!=null&&(a.callback=e),e=ql(t,a,l),e!==null&&(ze(e,t,l),Pn(e,t,l))}};function Nd(t,e,l,a,u,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,o):e.prototype&&e.prototype.isPureReactComponent?!Xn(l,a)||!Xn(u,i):!0}function Bd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Hr.enqueueReplaceState(e,e.state,null)}function Da(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=S({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}function Ud(t){Iu(t)}function Hd(t){console.error(t)}function $d(t){Iu(t)}function Si(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function jd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $r(t,e,l){return l=Ql(l),l.tag=3,l.payload={element:null},l.callback=function(){Si(t,e)},l}function Ld(t){return t=Ql(t),t.tag=3,t}function Qd(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){jd(e,l,a)}}var o=l.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jd(e,l,a),typeof u!="function"&&(Zl===null?Zl=new Set([this]):Zl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Sv(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ln(e,l,u,!0),l=Me.current,l!==null){switch(l.tag){case 31:case 13:return ke===null?Ni():l.alternate===null&&Jt===0&&(Jt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===ri?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),ro(t,a,u)),!1;case 22:return l.flags|=65536,a===ri?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),ro(t,a,u)),!1}throw Error(r(435,l.tag))}return ro(t,a,u),Ni(),!1}if(Dt)return e=Me.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==lr&&(t=Error(r(422),{cause:a}),Kn(Qe(t,l)))):(a!==lr&&(e=Error(r(423),{cause:a}),Kn(Qe(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Qe(a,l),u=$r(t.stateNode,a,u),hr(t,u),Jt!==4&&(Jt=2)),!1;var i=Error(r(520),{cause:a});if(i=Qe(i,l),hu===null?hu=[i]:hu.push(i),Jt!==4&&(Jt=2),e===null)return!0;a=Qe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=$r(l.stateNode,a,t),hr(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Zl===null||!Zl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Ld(u),Qd(u,t,l,a),hr(l,u),!1}l=l.return}while(l!==null);return!1}var jr=Error(r(461)),ee=!1;function de(t,e,l,a){e.child=t===null?ks(e,null,l,a):Ta(e,t.child,l,a)}function qd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var o={};for(var s in a)s!=="ref"&&(o[s]=a[s])}else o=a;return Aa(e),a=yr(t,e,l,o,i,u),s=Ar(),t!==null&&!ee?(Sr(t,e,u),yl(t,e,u)):(Dt&&s&&tr(e),e.flags|=1,de(t,e,a,u),e.child)}function Gd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Fc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Yd(t,e,i,a,u)):(t=li(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Vr(t,u)){var o=i.memoizedProps;if(l=l.compare,l=l!==null?l:Xn,l(o,a)&&t.ref===e.ref)return yl(t,e,u)}return e.flags|=1,t=hl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Yd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(Xn(i,a)&&t.ref===e.ref)if(ee=!1,e.pendingProps=a=i,Vr(t,u))(t.flags&131072)!==0&&(ee=!0);else return e.lanes=t.lanes,yl(t,e,u)}return Lr(t,e,l,a,u)}function kd(t,e,l,a){var u=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~i}else a=0,e.child=null;return Xd(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ii(e,i!==null?i.cachePool:null),i!==null?Zs(e,i):mr(),Ks(e);else return a=e.lanes=536870912,Xd(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ii(e,i.cachePool),Zs(e,i),Yl(),e.memoizedState=null):(t!==null&&ii(e,null),mr(),Yl());return de(t,e,u,l),e.child}function iu(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Xd(t,e,l,a,u){var i=or();return i=i===null?null:{parent:Pt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&ii(e,null),mr(),Ks(e),t!==null&&ln(t,e,a,!0),e.childLanes=u,null}function xi(t,e){return e=Ti({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Vd(t,e,l){return Ta(e,t.child,null,l),t=xi(e,e.pendingProps),t.flags|=2,we(e),e.memoizedState=null,t}function xv(t,e,l){var a=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Dt){if(a.mode==="hidden")return t=xi(e,a),e.lanes=536870912,iu(null,t);if(br(e),(t=kt)?(t=nh(t,Ye),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ul!==null?{id:nl,overflow:ul}:null,retryLane:536870912,hydrationErrors:null},l=_s(t),l.return=e,e.child=l,fe=e,kt=null)):t=null,t===null)throw $l(e);return e.lanes=536870912,null}return xi(e,a)}var i=t.memoizedState;if(i!==null){var o=i.dehydrated;if(br(e),u)if(e.flags&256)e.flags&=-257,e=Vd(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(ee||ln(t,e,l,!1),u=(l&t.childLanes)!==0,ee||u){if(a=Yt,a!==null&&(o=Hf(a,l),o!==0&&o!==i.retryLane))throw i.retryLane=o,va(t,o),ze(a,t,o),jr;Ni(),e=Vd(t,e,l)}else t=i.treeContext,kt=Xe(o.nextSibling),fe=e,Dt=!0,Hl=null,Ye=!1,t!==null&&Rs(e,t),e=xi(e,a),e.flags|=4096;return e}return t=hl(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ei(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Lr(t,e,l,a,u){return Aa(e),l=yr(t,e,l,a,void 0,u),a=Ar(),t!==null&&!ee?(Sr(t,e,u),yl(t,e,u)):(Dt&&a&&tr(e),e.flags|=1,de(t,e,l,u),e.child)}function Zd(t,e,l,a,u,i){return Aa(e),e.updateQueue=null,l=Ws(e,a,l,u),Js(t),a=Ar(),t!==null&&!ee?(Sr(t,e,i),yl(t,e,i)):(Dt&&a&&tr(e),e.flags|=1,de(t,e,l,i),e.child)}function Kd(t,e,l,a,u){if(Aa(e),e.stateNode===null){var i=Ia,o=l.contextType;typeof o=="object"&&o!==null&&(i=se(o)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},sr(e),o=l.contextType,i.context=typeof o=="object"&&o!==null?se(o):Ia,i.state=e.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(Ur(e,l,o,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Hr.enqueueReplaceState(i,i.state,null),eu(e,a,i,u),tu(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=Da(l,s);i.props=h;var E=i.context,R=l.contextType;o=Ia,typeof R=="object"&&R!==null&&(o=se(R));var U=l.getDerivedStateFromProps;R=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||E!==o)&&Bd(e,i,a,o),Ll=!1;var T=e.memoizedState;i.state=T,eu(e,a,i,u),tu(),E=e.memoizedState,s||T!==E||Ll?(typeof U=="function"&&(Ur(e,l,U,a),E=e.memoizedState),(h=Ll||Nd(e,l,h,a,T,E,o))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),i.props=a,i.state=E,i.context=o,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,dr(t,e),o=e.memoizedProps,R=Da(l,o),i.props=R,U=e.pendingProps,T=i.context,E=l.contextType,h=Ia,typeof E=="object"&&E!==null&&(h=se(E)),s=l.getDerivedStateFromProps,(E=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==U||T!==h)&&Bd(e,i,a,h),Ll=!1,T=e.memoizedState,i.state=T,eu(e,a,i,u),tu();var C=e.memoizedState;o!==U||T!==C||Ll||t!==null&&t.dependencies!==null&&ni(t.dependencies)?(typeof s=="function"&&(Ur(e,l,s,a),C=e.memoizedState),(R=Ll||Nd(e,l,R,a,T,C,h)||t!==null&&t.dependencies!==null&&ni(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,C,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,C,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=C),i.props=a,i.state=C,i.context=h,a=R):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ei(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Ta(e,t.child,null,u),e.child=Ta(e,null,l,u)):de(t,e,l,u),e.memoizedState=i.state,t=e.child):t=yl(t,e,u),t}function Jd(t,e,l,a){return ga(),e.flags|=256,de(t,e,l,a),e.child}var Qr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(t){return{baseLanes:t,cachePool:js()}}function Gr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ne),t}function Wd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),o&&(u=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(Dt){if(u?Gl(e):Yl(),(t=kt)?(t=nh(t,Ye),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ul!==null?{id:nl,overflow:ul}:null,retryLane:536870912,hydrationErrors:null},l=_s(t),l.return=e,e.child=l,fe=e,kt=null)):t=null,t===null)throw $l(e);return zo(t)?e.lanes=32:e.lanes=536870912,null}var s=a.children;return a=a.fallback,u?(Yl(),u=e.mode,s=Ti({mode:"hidden",children:s},u),a=ba(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,a=e.child,a.memoizedState=qr(l),a.childLanes=Gr(t,o,l),e.memoizedState=Qr,iu(null,a)):(Gl(e),Yr(e,s))}var h=t.memoizedState;if(h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(Gl(e),e.flags&=-257,e=kr(t,e,l)):e.memoizedState!==null?(Yl(),e.child=t.child,e.flags|=128,e=null):(Yl(),s=a.fallback,u=e.mode,a=Ti({mode:"visible",children:a.children},u),s=ba(s,u,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Ta(e,t.child,null,l),a=e.child,a.memoizedState=qr(l),a.childLanes=Gr(t,o,l),e.memoizedState=Qr,e=iu(null,a));else if(Gl(e),zo(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var E=o.dgst;o=E,a=Error(r(419)),a.stack="",a.digest=o,Kn({value:a,source:null,stack:null}),e=kr(t,e,l)}else if(ee||ln(t,e,l,!1),o=(l&t.childLanes)!==0,ee||o){if(o=Yt,o!==null&&(a=Hf(o,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,va(t,a),ze(o,t,a),jr;To(s)||Ni(),e=kr(t,e,l)}else To(s)?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,kt=Xe(s.nextSibling),fe=e,Dt=!0,Hl=null,Ye=!1,t!==null&&Rs(e,t),e=Yr(e,a.children),e.flags|=4096);return e}return u?(Yl(),s=a.fallback,u=e.mode,h=t.child,E=h.sibling,a=hl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,E!==null?s=hl(E,s):(s=ba(s,u,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,iu(null,a),a=e.child,s=t.child.memoizedState,s===null?s=qr(l):(u=s.cachePool,u!==null?(h=Pt._currentValue,u=u.parent!==h?{parent:h,pool:h}:u):u=js(),s={baseLanes:s.baseLanes|l,cachePool:u}),a.memoizedState=s,a.childLanes=Gr(t,o,l),e.memoizedState=Qr,iu(t.child,a)):(Gl(e),l=t.child,t=l.sibling,l=hl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=l,e.memoizedState=null,l)}function Yr(t,e){return e=Ti({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ti(t,e){return t=_e(22,t,null,e),t.lanes=0,t}function kr(t,e,l){return Ta(e,t.child,null,l),t=Yr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),ur(t.return,e,l)}function Xr(t,e,l,a,u,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u,treeForkCount:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=l,o.tailMode=u,o.treeForkCount=i)}function Id(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;a=a.children;var o=Ft.current,s=(o&2)!==0;if(s?(o=o&1|2,e.flags|=128):o&=1,B(Ft,o),de(t,e,a,l),a=Dt?Zn:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fd(t,l,e);else if(t.tag===19)Fd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&di(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),Xr(e,!1,u,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&di(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}Xr(e,!0,l,null,i,a);break;case"together":Xr(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function yl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Vl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ln(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=hl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=hl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Vr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ni(t)))}function Ev(t,e,l){switch(e.tag){case 3:Ot(e,e.stateNode.containerInfo),jl(e,Pt,t.memoizedState.cache),ga();break;case 27:case 5:dt(e);break;case 4:Ot(e,e.stateNode.containerInfo);break;case 10:jl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,br(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Gl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Wd(t,e,l):(Gl(e),t=yl(t,e,l),t!==null?t.sibling:null);Gl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ln(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Id(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),B(Ft,Ft.current),a)break;return null;case 22:return e.lanes=0,kd(t,e,l,e.pendingProps);case 24:jl(e,Pt,t.memoizedState.cache)}return yl(t,e,l)}function Pd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ee=!0;else{if(!Vr(t,l)&&(e.flags&128)===0)return ee=!1,Ev(t,e,l);ee=(t.flags&131072)!==0}else ee=!1,Dt&&(e.flags&1048576)!==0&&ws(e,Zn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=xa(e.elementType),e.type=t,typeof t=="function")Fc(t)?(a=Da(t,a),e.tag=1,e=Kd(null,e,t,a,l)):(e.tag=0,e=Lr(null,e,t,a,l));else{if(t!=null){var u=t.$$typeof;if(u===q){e.tag=11,e=qd(null,e,t,a,l);break t}else if(u===H){e.tag=14,e=Gd(null,e,t,a,l);break t}}throw e=_t(t)||t,Error(r(306,e,""))}}return e;case 0:return Lr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=Da(a,e.pendingProps),Kd(t,e,a,u,l);case 3:t:{if(Ot(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,dr(t,e),eu(e,a,null,l);var o=e.memoizedState;if(a=o.cache,jl(e,Pt,a),a!==i.cache&&ir(e,[Pt],l,!0),tu(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Jd(t,e,a,l);break t}else if(a!==u){u=Qe(Error(r(424)),e),Kn(u),e=Jd(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,kt=Xe(t.firstChild),fe=e,Dt=!0,Hl=null,Ye=!0,l=ks(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ga(),a===u){e=yl(t,e,l);break t}de(t,e,a,l)}e=e.child}return e;case 26:return Ei(t,e),t===null?(l=fh(e.type,null,e.pendingProps,null))?e.memoizedState=l:Dt||(l=e.type,t=e.pendingProps,a=Qi(et.current).createElement(l),a[oe]=e,a[ye]=t,he(a,l,t),ie(a),e.stateNode=a):e.memoizedState=fh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return dt(e),t===null&&Dt&&(a=e.stateNode=ch(e.type,e.pendingProps,et.current),fe=e,Ye=!0,u=kt,Fl(e.type)?(Do=u,kt=Xe(a.firstChild)):kt=u),de(t,e,e.pendingProps.children,l),Ei(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Dt&&((u=a=kt)&&(a=Pv(a,e.type,e.pendingProps,Ye),a!==null?(e.stateNode=a,fe=e,kt=Xe(a.firstChild),Ye=!1,u=!0):u=!1),u||$l(e)),dt(e),u=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,So(u,i)?a=null:o!==null&&So(u,o)&&(e.flags|=32),e.memoizedState!==null&&(u=yr(t,e,pv,null,null,l),Su._currentValue=u),Ei(t,e),de(t,e,a,l),e.child;case 6:return t===null&&Dt&&((t=l=kt)&&(l=tb(l,e.pendingProps,Ye),l!==null?(e.stateNode=l,fe=e,kt=null,t=!0):t=!1),t||$l(e)),null;case 13:return Wd(t,e,l);case 4:return Ot(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Ta(e,null,a,l):de(t,e,a,l),e.child;case 11:return qd(t,e,e.type,e.pendingProps,l);case 7:return de(t,e,e.pendingProps,l),e.child;case 8:return de(t,e,e.pendingProps.children,l),e.child;case 12:return de(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,jl(e,e.type,a.value),de(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,Aa(e),u=se(u),a=a(u),e.flags|=1,de(t,e,a,l),e.child;case 14:return Gd(t,e,e.type,e.pendingProps,l);case 15:return Yd(t,e,e.type,e.pendingProps,l);case 19:return Id(t,e,l);case 31:return xv(t,e,l);case 22:return kd(t,e,l,e.pendingProps);case 24:return Aa(e),a=se(Pt),t===null?(u=or(),u===null&&(u=Yt,i=cr(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},sr(e),jl(e,Pt,u)):((t.lanes&l)!==0&&(dr(t,e),eu(e,null,null,l),tu()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),jl(e,Pt,a)):(a=i.cache,jl(e,Pt,a),a!==u.cache&&ir(e,[Pt],l,!0))),de(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Al(t){t.flags|=4}function Zr(t,e,l,a,u){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(D0())t.flags|=8192;else throw Ea=ri,fr}else t.flags&=-16777217}function t0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mh(e))if(D0())t.flags|=8192;else throw Ea=ri,fr}function zi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Nf():536870912,t.lanes|=e,mn|=e)}function cu(t,e){if(!Dt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Tv(t,e,l){var a=e.pendingProps;switch(er(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return Xt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),vl(Pt),$(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(en(e)?Al(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ar())),Xt(e),null;case 26:var u=e.type,i=e.memoizedState;return t===null?(Al(e),i!==null?(Xt(e),t0(e,i)):(Xt(e),Zr(e,u,null,a,l))):i?i!==t.memoizedState?(Al(e),Xt(e),t0(e,i)):(Xt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Al(e),Xt(e),Zr(e,u,t,a,l)),null;case 27:if(vt(e),l=et.current,u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Xt(e),null}t=j.current,en(e)?Ns(e):(t=ch(u,a,l),e.stateNode=t,Al(e))}return Xt(e),null;case 5:if(vt(e),u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Xt(e),null}if(i=j.current,en(e))Ns(e);else{var o=Qi(et.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(u,{is:a.is}):o.createElement(u)}}i[oe]=e,i[ye]=a;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=i;t:switch(he(i,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Al(e)}}return Xt(e),Zr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=et.current,en(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=fe,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[oe]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||W0(t.nodeValue,l)),t||$l(e,!0)}else t=Qi(t).createTextNode(a),t[oe]=e,e.stateNode=t}return Xt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=en(e),l!==null){if(t===null){if(!a)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[oe]=e}else ga(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xt(e),t=!1}else l=ar(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(we(e),e):(we(e),null);if((e.flags&128)!==0)throw Error(r(558))}return Xt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=en(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[oe]=e}else ga(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xt(e),u=!1}else u=ar(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(we(e),e):(we(e),null)}return we(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),zi(e,e.updateQueue),Xt(e),null);case 4:return $(),t===null&&vo(e.stateNode.containerInfo),Xt(e),null;case 10:return vl(e.type),Xt(e),null;case 19:if(_(Ft),a=e.memoizedState,a===null)return Xt(e),null;if(u=(e.flags&128)!==0,i=a.rendering,i===null)if(u)cu(a,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=di(t),i!==null){for(e.flags|=128,cu(a,!1),t=i.updateQueue,e.updateQueue=t,zi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Os(l,t),l=l.sibling;return B(Ft,Ft.current&1|2),Dt&&pl(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ge()>Mi&&(e.flags|=128,u=!0,cu(a,!1),e.lanes=4194304)}else{if(!u)if(t=di(i),t!==null){if(e.flags|=128,u=!0,t=t.updateQueue,e.updateQueue=t,zi(e,t),cu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Dt)return Xt(e),null}else 2*ge()-a.renderingStartTime>Mi&&l!==536870912&&(e.flags|=128,u=!0,cu(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,l=Ft.current,B(Ft,u?l&1|2:l&1),Dt&&pl(e,a.treeForkCount),t):(Xt(e),null);case 22:case 23:return we(e),vr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),l=e.updateQueue,l!==null&&zi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&_(Sa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),vl(Pt),Xt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function zv(t,e){switch(er(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vl(Pt),$(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return vt(e),null;case 31:if(e.memoizedState!==null){if(we(e),e.alternate===null)throw Error(r(340));ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(we(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _(Ft),null;case 4:return $(),null;case 10:return vl(e.type),null;case 22:case 23:return we(e),vr(),t!==null&&_(Sa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return vl(Pt),null;case 25:return null;default:return null}}function e0(t,e){switch(er(e),e.tag){case 3:vl(Pt),$();break;case 26:case 27:case 5:vt(e);break;case 4:$();break;case 31:e.memoizedState!==null&&we(e);break;case 13:we(e);break;case 19:_(Ft);break;case 10:vl(e.type);break;case 22:case 23:we(e),vr(),t!==null&&_(Sa);break;case 24:vl(Pt)}}function ru(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,o=l.inst;a=i(),o.destroy=a}l=l.next}while(l!==u)}}catch(s){Lt(e,e.return,s)}}function kl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var o=a.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,u=e;var h=l,E=s;try{E()}catch(R){Lt(u,h,R)}}}a=a.next}while(a!==i)}}catch(R){Lt(e,e.return,R)}}function l0(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Vs(e,l)}catch(a){Lt(t,t.return,a)}}}function a0(t,e,l){l.props=Da(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Lt(t,e,a)}}function ou(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Lt(t,e,u)}}function il(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Lt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Lt(t,e,u)}else l.current=null}function n0(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Lt(t,t.return,u)}}function Kr(t,e,l){try{var a=t.stateNode;Zv(a,t.type,l,e),a[ye]=e}catch(u){Lt(t,t.return,u)}}function u0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fl(t.type)||t.tag===4}function Jr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=sl));else if(a!==4&&(a===27&&Fl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Wr(t,e,l),t=t.sibling;t!==null;)Wr(t,e,l),t=t.sibling}function Di(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Fl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Di(t,e,l),t=t.sibling;t!==null;)Di(t,e,l),t=t.sibling}function i0(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);he(e,a,l),e[oe]=t,e[ye]=l}catch(i){Lt(t,t.return,i)}}var Sl=!1,le=!1,Fr=!1,c0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Dv(t,e){if(t=t.containerInfo,yo=Zi,t=ys(t),kc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var o=0,s=-1,h=-1,E=0,R=0,U=t,T=null;e:for(;;){for(var C;U!==l||u!==0&&U.nodeType!==3||(s=o+u),U!==i||a!==0&&U.nodeType!==3||(h=o+a),U.nodeType===3&&(o+=U.nodeValue.length),(C=U.firstChild)!==null;)T=U,U=C;for(;;){if(U===t)break e;if(T===l&&++E===u&&(s=o),T===i&&++R===a&&(h=o),(C=U.nextSibling)!==null)break;U=T,T=U.parentNode}U=C}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ao={focusedElem:t,selectionRange:l},Zi=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){switch(e=ce,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)u=t[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var at=Da(l.type,u);t=a.getSnapshotBeforeUpdate(at,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Lt(l,l.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Eo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Eo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function r0(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:El(t,l),a&4&&ru(5,l);break;case 1:if(El(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(o){Lt(l,l.return,o)}else{var u=Da(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){Lt(l,l.return,o)}}a&64&&l0(l),a&512&&ou(l,l.return);break;case 3:if(El(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Vs(t,e)}catch(o){Lt(l,l.return,o)}}break;case 27:e===null&&a&4&&i0(l);case 26:case 5:El(t,l),e===null&&a&4&&n0(l),a&512&&ou(l,l.return);break;case 12:El(t,l);break;case 31:El(t,l),a&4&&s0(t,l);break;case 13:El(t,l),a&4&&d0(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Uv.bind(null,l),eb(t,l))));break;case 22:if(a=l.memoizedState!==null||Sl,!a){e=e!==null&&e.memoizedState!==null||le,u=Sl;var i=le;Sl=a,(le=e)&&!i?Tl(t,l,(l.subtreeFlags&8772)!==0):El(t,l),Sl=u,le=i}break;case 30:break;default:El(t,l)}}function o0(t){var e=t.alternate;e!==null&&(t.alternate=null,o0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Cc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Se=!1;function xl(t,e,l){for(l=l.child;l!==null;)f0(t,e,l),l=l.sibling}function f0(t,e,l){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Nn,l)}catch{}switch(l.tag){case 26:le||il(l,e),xl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:le||il(l,e);var a=Zt,u=Se;Fl(l.type)&&(Zt=l.stateNode,Se=!1),xl(t,e,l),gu(l.stateNode),Zt=a,Se=u;break;case 5:le||il(l,e);case 6:if(a=Zt,u=Se,Zt=null,xl(t,e,l),Zt=a,Se=u,Zt!==null)if(Se)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(l.stateNode)}catch(i){Lt(l,e,i)}else try{Zt.removeChild(l.stateNode)}catch(i){Lt(l,e,i)}break;case 18:Zt!==null&&(Se?(t=Zt,lh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),En(t)):lh(Zt,l.stateNode));break;case 4:a=Zt,u=Se,Zt=l.stateNode.containerInfo,Se=!0,xl(t,e,l),Zt=a,Se=u;break;case 0:case 11:case 14:case 15:kl(2,l,e),le||kl(4,l,e),xl(t,e,l);break;case 1:le||(il(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&a0(l,e,a)),xl(t,e,l);break;case 21:xl(t,e,l);break;case 22:le=(a=le)||l.memoizedState!==null,xl(t,e,l),le=a;break;default:xl(t,e,l)}}function s0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{En(t)}catch(l){Lt(e,e.return,l)}}}function d0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{En(t)}catch(l){Lt(e,e.return,l)}}function Cv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new c0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new c0),e;default:throw Error(r(435,t.tag))}}function Ci(t,e){var l=Cv(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var u=Hv.bind(null,t,a);a.then(u,u)}})}function xe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:if(Fl(s.type)){Zt=s.stateNode,Se=!1;break t}break;case 5:Zt=s.stateNode,Se=!1;break t;case 3:case 4:Zt=s.stateNode.containerInfo,Se=!0;break t}s=s.return}if(Zt===null)throw Error(r(160));f0(i,o,u),Zt=null,Se=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)h0(e,t),e=e.sibling}var We=null;function h0(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xe(e,t),Ee(t),a&4&&(kl(3,t,t.return),ru(3,t),kl(5,t,t.return));break;case 1:xe(e,t),Ee(t),a&512&&(le||l===null||il(l,l.return)),a&64&&Sl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=We;if(xe(e,t),Ee(t),a&512&&(le||l===null||il(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Hn]||i[oe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),he(i,a,l),i[oe]=t,ie(i),a=i;break t;case"link":var o=hh("link","href",u).get(a+(l.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){o.splice(s,1);break e}}i=u.createElement(a),he(i,a,l),u.head.appendChild(i);break;case"meta":if(o=hh("meta","content",u).get(a+(l.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){o.splice(s,1);break e}}i=u.createElement(a),he(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[oe]=t,ie(i),a=i}t.stateNode=a}else ph(u,t.type,t.stateNode);else t.stateNode=dh(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?ph(u,t.type,t.stateNode):dh(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Kr(t,t.memoizedProps,l.memoizedProps)}break;case 27:xe(e,t),Ee(t),a&512&&(le||l===null||il(l,l.return)),l!==null&&a&4&&Kr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(xe(e,t),Ee(t),a&512&&(le||l===null||il(l,l.return)),t.flags&32){u=t.stateNode;try{Xa(u,"")}catch(at){Lt(t,t.return,at)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Kr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Fr=!0);break;case 6:if(xe(e,t),Ee(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(at){Lt(t,t.return,at)}}break;case 3:if(Yi=null,u=We,We=qi(e.containerInfo),xe(e,t),We=u,Ee(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{En(e.containerInfo)}catch(at){Lt(t,t.return,at)}Fr&&(Fr=!1,p0(t));break;case 4:a=We,We=qi(t.stateNode.containerInfo),xe(e,t),Ee(t),We=a;break;case 12:xe(e,t),Ee(t);break;case 31:xe(e,t),Ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ci(t,a)));break;case 13:xe(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(_i=ge()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ci(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,E=Sl,R=le;if(Sl=E||u,le=R||h,xe(e,t),le=R,Sl=E,Ee(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||Sl||le||Ca(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=h.stateNode;var U=h.memoizedProps.style,T=U!=null&&U.hasOwnProperty("display")?U.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(at){Lt(h,h.return,at)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(at){Lt(h,h.return,at)}}}else if(e.tag===18){if(l===null){h=e;try{var C=h.stateNode;u?ah(C,!0):ah(h.stateNode,!1)}catch(at){Lt(h,h.return,at)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ci(t,l))));break;case 19:xe(e,t),Ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ci(t,a)));break;case 30:break;case 21:break;default:xe(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(u0(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=Jr(t);Di(t,i,u);break;case 5:var o=l.stateNode;l.flags&32&&(Xa(o,""),l.flags&=-33);var s=Jr(t);Di(t,s,o);break;case 3:case 4:var h=l.stateNode.containerInfo,E=Jr(t);Wr(t,E,h);break;default:throw Error(r(161))}}catch(R){Lt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function p0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;p0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function El(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)r0(t,e.alternate,e),e=e.sibling}function Ca(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:kl(4,e,e.return),Ca(e);break;case 1:il(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&a0(e,e.return,l),Ca(e);break;case 27:gu(e.stateNode);case 26:case 5:il(e,e.return),Ca(e);break;case 22:e.memoizedState===null&&Ca(e);break;case 30:Ca(e);break;default:Ca(e)}t=t.sibling}}function Tl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,o=i.flags;switch(i.tag){case 0:case 11:case 15:Tl(u,i,l),ru(4,i);break;case 1:if(Tl(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(E){Lt(a,a.return,E)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)Xs(h[u],s)}catch(E){Lt(a,a.return,E)}}l&&o&64&&l0(i),ou(i,i.return);break;case 27:i0(i);case 26:case 5:Tl(u,i,l),l&&a===null&&o&4&&n0(i),ou(i,i.return);break;case 12:Tl(u,i,l);break;case 31:Tl(u,i,l),l&&o&4&&s0(u,i);break;case 13:Tl(u,i,l),l&&o&4&&d0(u,i);break;case 22:i.memoizedState===null&&Tl(u,i,l),ou(i,i.return);break;case 30:break;default:Tl(u,i,l)}e=e.sibling}}function Ir(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Jn(l))}function Pr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Jn(t))}function Fe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)m0(t,e,l,a),e=e.sibling}function m0(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Fe(t,e,l,a),u&2048&&ru(9,e);break;case 1:Fe(t,e,l,a);break;case 3:Fe(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Jn(t)));break;case 12:if(u&2048){Fe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Lt(e,e.return,h)}}else Fe(t,e,l,a);break;case 31:Fe(t,e,l,a);break;case 13:Fe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,o=e.alternate,e.memoizedState!==null?i._visibility&2?Fe(t,e,l,a):fu(t,e):i._visibility&2?Fe(t,e,l,a):(i._visibility|=2,dn(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),u&2048&&Ir(o,e);break;case 24:Fe(t,e,l,a),u&2048&&Pr(e.alternate,e);break;default:Fe(t,e,l,a)}}function dn(t,e,l,a,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,o=e,s=l,h=a,E=o.flags;switch(o.tag){case 0:case 11:case 15:dn(i,o,s,h,u),ru(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?dn(i,o,s,h,u):fu(i,o):(R._visibility|=2,dn(i,o,s,h,u)),u&&E&2048&&Ir(o.alternate,o);break;case 24:dn(i,o,s,h,u),u&&E&2048&&Pr(o.alternate,o);break;default:dn(i,o,s,h,u)}e=e.sibling}}function fu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:fu(l,a),u&2048&&Ir(a.alternate,a);break;case 24:fu(l,a),u&2048&&Pr(a.alternate,a);break;default:fu(l,a)}e=e.sibling}}var su=8192;function hn(t,e,l){if(t.subtreeFlags&su)for(t=t.child;t!==null;)v0(t,e,l),t=t.sibling}function v0(t,e,l){switch(t.tag){case 26:hn(t,e,l),t.flags&su&&t.memoizedState!==null&&hb(l,We,t.memoizedState,t.memoizedProps);break;case 5:hn(t,e,l);break;case 3:case 4:var a=We;We=qi(t.stateNode.containerInfo),hn(t,e,l),We=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=su,su=16777216,hn(t,e,l),su=a):hn(t,e,l));break;default:hn(t,e,l)}}function b0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function du(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ce=a,y0(a,t)}b0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)g0(t),t=t.sibling}function g0(t){switch(t.tag){case 0:case 11:case 15:du(t),t.flags&2048&&kl(9,t,t.return);break;case 3:du(t);break;case 12:du(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Oi(t)):du(t);break;default:du(t)}}function Oi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ce=a,y0(a,t)}b0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:kl(8,e,e.return),Oi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Oi(e));break;default:Oi(e)}t=t.sibling}}function y0(t,e){for(;ce!==null;){var l=ce;switch(l.tag){case 0:case 11:case 15:kl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Jn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ce=a;else t:for(l=t;ce!==null;){a=ce;var u=a.sibling,i=a.return;if(o0(a),a===l){ce=null;break t}if(u!==null){u.return=i,ce=u;break t}ce=i}}}var Ov={getCacheForType:function(t){var e=se(Pt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return se(Pt).controller.signal}},_v=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Yt=null,St=null,Tt=0,jt=0,Re=null,Xl=!1,pn=!1,to=!1,zl=0,Jt=0,Vl=0,Oa=0,eo=0,Ne=0,mn=0,hu=null,Te=null,lo=!1,_i=0,A0=0,Mi=1/0,wi=null,Zl=null,ne=0,Kl=null,vn=null,Dl=0,ao=0,no=null,S0=null,pu=0,uo=null;function Be(){return(Bt&2)!==0&&Tt!==0?Tt&-Tt:O.T!==null?so():$f()}function x0(){if(Ne===0)if((Tt&536870912)===0||Dt){var t=Lu;Lu<<=1,(Lu&3932160)===0&&(Lu=262144),Ne=t}else Ne=536870912;return t=Me.current,t!==null&&(t.flags|=32),Ne}function ze(t,e,l){(t===Yt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(bn(t,0),Jl(t,Tt,Ne,!1)),Un(t,l),((Bt&2)===0||t!==Yt)&&(t===Yt&&((Bt&2)===0&&(Oa|=l),Jt===4&&Jl(t,Tt,Ne,!1)),cl(t))}function E0(t,e,l){if((Bt&6)!==0)throw Error(r(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Bn(t,e),u=a?Rv(t,e):co(t,e,!0),i=a;do{if(u===0){pn&&!a&&Jl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!Mv(l)){u=co(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;u=hu;var h=s.current.memoizedState.isDehydrated;if(h&&(bn(s,o).flags|=256),o=co(s,o,!1),o!==2){if(to&&!h){s.errorRecoveryDisabledLanes|=i,Oa|=i,u=4;break t}i=Te,Te=u,i!==null&&(Te===null?Te=i:Te.push.apply(Te,i))}u=o}if(i=!1,u!==2)continue}}if(u===1){bn(t,0),Jl(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Jl(a,e,Ne,!Xl);break t;case 2:Te=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=_i+300-ge(),10<u)){if(Jl(a,e,Ne,!Xl),qu(a,0,!0)!==0)break t;Dl=e,a.timeoutHandle=th(T0.bind(null,a,l,Te,wi,lo,e,Ne,Oa,mn,Xl,i,"Throttled",-0,0),u);break t}T0(a,l,Te,wi,lo,e,Ne,Oa,mn,Xl,i,null,-0,0)}}break}while(!0);cl(t)}function T0(t,e,l,a,u,i,o,s,h,E,R,U,T,C){if(t.timeoutHandle=-1,U=e.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sl},v0(e,i,U);var at=(i&62914560)===i?_i-ge():(i&4194048)===i?A0-ge():0;if(at=pb(U,at),at!==null){Dl=i,t.cancelPendingCommit=at(R0.bind(null,t,e,i,l,a,u,o,s,h,R,U,null,T,C)),Jl(t,i,o,!E);return}}R0(t,e,i,l,a,u,o,s,h)}function Mv(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!Oe(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jl(t,e,l,a){e&=~eo,e&=~Oa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-Ce(u),o=1<<i;a[i]=-1,u&=~o}l!==0&&Bf(t,l,e)}function Ri(){return(Bt&6)===0?(mu(0),!1):!0}function io(){if(St!==null){if(jt===0)var t=St.return;else t=St,ml=ya=null,xr(t),cn=null,Fn=0,t=St;for(;t!==null;)e0(t.alternate,t),t=t.return;St=null}}function bn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Wv(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Dl=0,io(),Yt=t,St=l=hl(t.current,null),Tt=e,jt=0,Re=null,Xl=!1,pn=Bn(t,e),to=!1,mn=Ne=eo=Oa=Vl=Jt=0,Te=hu=null,lo=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-Ce(a),i=1<<u;e|=t[u],a&=~i}return zl=e,Pu(),l}function z0(t,e){bt=null,O.H=uu,e===un||e===ci?(e=qs(),jt=3):e===fr?(e=qs(),jt=4):jt=e===jr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,St===null&&(Jt=1,Si(t,Qe(e,t.current)))}function D0(){var t=Me.current;return t===null?!0:(Tt&4194048)===Tt?ke===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===ke:!1}function C0(){var t=O.H;return O.H=uu,t===null?uu:t}function O0(){var t=O.A;return O.A=Ov,t}function Ni(){Jt=4,Xl||(Tt&4194048)!==Tt&&Me.current!==null||(pn=!0),(Vl&134217727)===0&&(Oa&134217727)===0||Yt===null||Jl(Yt,Tt,Ne,!1)}function co(t,e,l){var a=Bt;Bt|=2;var u=C0(),i=O0();(Yt!==t||Tt!==e)&&(wi=null,bn(t,e)),e=!1;var o=Jt;t:do try{if(jt!==0&&St!==null){var s=St,h=Re;switch(jt){case 8:io(),o=6;break t;case 3:case 2:case 9:case 6:Me.current===null&&(e=!0);var E=jt;if(jt=0,Re=null,gn(t,s,h,E),l&&pn){o=0;break t}break;default:E=jt,jt=0,Re=null,gn(t,s,h,E)}}wv(),o=Jt;break}catch(R){z0(t,R)}while(!0);return e&&t.shellSuspendCounter++,ml=ya=null,Bt=a,O.H=u,O.A=i,St===null&&(Yt=null,Tt=0,Pu()),o}function wv(){for(;St!==null;)_0(St)}function Rv(t,e){var l=Bt;Bt|=2;var a=C0(),u=O0();Yt!==t||Tt!==e?(wi=null,Mi=ge()+500,bn(t,e)):pn=Bn(t,e);t:do try{if(jt!==0&&St!==null){e=St;var i=Re;e:switch(jt){case 1:jt=0,Re=null,gn(t,e,i,1);break;case 2:case 9:if(Ls(i)){jt=0,Re=null,M0(e);break}e=function(){jt!==2&&jt!==9||Yt!==t||(jt=7),cl(t)},i.then(e,e);break t;case 3:jt=7;break t;case 4:jt=5;break t;case 7:Ls(i)?(jt=0,Re=null,M0(e)):(jt=0,Re=null,gn(t,e,i,7));break;case 5:var o=null;switch(St.tag){case 26:o=St.memoizedState;case 5:case 27:var s=St;if(o?mh(o):s.stateNode.complete){jt=0,Re=null;var h=s.sibling;if(h!==null)St=h;else{var E=s.return;E!==null?(St=E,Bi(E)):St=null}break e}}jt=0,Re=null,gn(t,e,i,5);break;case 6:jt=0,Re=null,gn(t,e,i,6);break;case 8:io(),Jt=6;break t;default:throw Error(r(462))}}Nv();break}catch(R){z0(t,R)}while(!0);return ml=ya=null,O.H=a,O.A=u,Bt=l,St!==null?0:(Yt=null,Tt=0,Pu(),Jt)}function Nv(){for(;St!==null&&!fa();)_0(St)}function _0(t){var e=Pd(t.alternate,t,zl);t.memoizedProps=t.pendingProps,e===null?Bi(t):St=e}function M0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Zd(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=Zd(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:xr(e);default:e0(l,e),e=St=Os(e,zl),e=Pd(l,e,zl)}t.memoizedProps=t.pendingProps,e===null?Bi(t):St=e}function gn(t,e,l,a){ml=ya=null,xr(e),cn=null,Fn=0;var u=e.return;try{if(Sv(t,u,e,l,Tt)){Jt=1,Si(t,Qe(l,t.current)),St=null;return}}catch(i){if(u!==null)throw St=u,i;Jt=1,Si(t,Qe(l,t.current)),St=null;return}e.flags&32768?(Dt||a===1?t=!0:pn||(Tt&536870912)!==0?t=!1:(Xl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Me.current,a!==null&&a.tag===13&&(a.flags|=16384))),w0(e,t)):Bi(e)}function Bi(t){var e=t;do{if((e.flags&32768)!==0){w0(e,Xl);return}t=e.return;var l=Tv(e.alternate,e,zl);if(l!==null){St=l;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Jt===0&&(Jt=5)}function w0(t,e){do{var l=zv(t.alternate,t);if(l!==null){l.flags&=32767,St=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){St=t;return}St=t=l}while(t!==null);Jt=6,St=null}function R0(t,e,l,a,u,i,o,s,h){t.cancelPendingCommit=null;do Ui();while(ne!==0);if((Bt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Jc,dm(t,l,i,o,s,h),t===Yt&&(St=Yt=null,Tt=0),vn=e,Kl=t,Dl=l,ao=i,no=u,S0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$v($u,function(){return $0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,u=G.p,G.p=2,o=Bt,Bt|=4;try{Dv(t,e,l)}finally{Bt=o,G.p=u,O.T=a}}ne=1,N0(),B0(),U0()}}function N0(){if(ne===1){ne=0;var t=Kl,e=vn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var a=G.p;G.p=2;var u=Bt;Bt|=4;try{h0(e,t);var i=Ao,o=ys(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&gs(s.ownerDocument.documentElement,s)){if(h!==null&&kc(s)){var E=h.start,R=h.end;if(R===void 0&&(R=E),"selectionStart"in s)s.selectionStart=E,s.selectionEnd=Math.min(R,s.value.length);else{var U=s.ownerDocument||document,T=U&&U.defaultView||window;if(T.getSelection){var C=T.getSelection(),at=s.textContent.length,ot=Math.min(h.start,at),Gt=h.end===void 0?ot:Math.min(h.end,at);!C.extend&&ot>Gt&&(o=Gt,Gt=ot,ot=o);var A=bs(s,ot),v=bs(s,Gt);if(A&&v&&(C.rangeCount!==1||C.anchorNode!==A.node||C.anchorOffset!==A.offset||C.focusNode!==v.node||C.focusOffset!==v.offset)){var x=U.createRange();x.setStart(A.node,A.offset),C.removeAllRanges(),ot>Gt?(C.addRange(x),C.extend(v.node,v.offset)):(x.setEnd(v.node,v.offset),C.addRange(x))}}}}for(U=[],C=s;C=C.parentNode;)C.nodeType===1&&U.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<U.length;s++){var N=U[s];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Zi=!!yo,Ao=yo=null}finally{Bt=u,G.p=a,O.T=l}}t.current=e,ne=2}}function B0(){if(ne===2){ne=0;var t=Kl,e=vn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var a=G.p;G.p=2;var u=Bt;Bt|=4;try{r0(t,e.alternate,e)}finally{Bt=u,G.p=a,O.T=l}}ne=3}}function U0(){if(ne===4||ne===3){ne=0,Hu();var t=Kl,e=vn,l=Dl,a=S0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,vn=Kl=null,H0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Zl=null),zc(l),e=e.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Nn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=O.T,u=G.p,G.p=2,O.T=null;try{for(var i=t.onRecoverableError,o=0;o<a.length;o++){var s=a[o];i(s.value,{componentStack:s.stack})}}finally{O.T=e,G.p=u}}(Dl&3)!==0&&Ui(),cl(t),u=t.pendingLanes,(l&261930)!==0&&(u&42)!==0?t===uo?pu++:(pu=0,uo=t):pu=0,mu(0)}}function H0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Jn(e)))}function Ui(){return N0(),B0(),U0(),$0()}function $0(){if(ne!==5)return!1;var t=Kl,e=ao;ao=0;var l=zc(Dl),a=O.T,u=G.p;try{G.p=32>l?32:l,O.T=null,l=no,no=null;var i=Kl,o=Dl;if(ne=0,vn=Kl=null,Dl=0,(Bt&6)!==0)throw Error(r(331));var s=Bt;if(Bt|=4,g0(i.current),m0(i,i.current,o,l),Bt=s,mu(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Nn,i)}catch{}return!0}finally{G.p=u,O.T=a,H0(t,e)}}function j0(t,e,l){e=Qe(l,e),e=$r(t.stateNode,e,2),t=ql(t,e,2),t!==null&&(Un(t,2),cl(t))}function Lt(t,e,l){if(t.tag===3)j0(t,t,l);else for(;e!==null;){if(e.tag===3){j0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Zl===null||!Zl.has(a))){t=Qe(l,t),l=Ld(2),a=ql(e,l,2),a!==null&&(Qd(l,a,e,t),Un(a,2),cl(a));break}}e=e.return}}function ro(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new _v;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(to=!0,u.add(l),t=Bv.bind(null,t,e,l),e.then(t,t))}function Bv(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Yt===t&&(Tt&l)===l&&(Jt===4||Jt===3&&(Tt&62914560)===Tt&&300>ge()-_i?(Bt&2)===0&&bn(t,0):eo|=l,mn===Tt&&(mn=0)),cl(t)}function L0(t,e){e===0&&(e=Nf()),t=va(t,e),t!==null&&(Un(t,e),cl(t))}function Uv(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),L0(t,l)}function Hv(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),L0(t,l)}function $v(t,e){return ra(t,e)}var Hi=null,yn=null,oo=!1,$i=!1,fo=!1,Wl=0;function cl(t){t!==yn&&t.next===null&&(yn===null?Hi=yn=t:yn=yn.next=t),$i=!0,oo||(oo=!0,Lv())}function mu(t,e){if(!fo&&$i){fo=!0;do for(var l=!1,a=Hi;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var o=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Ce(42|t)+1)-1,i&=u&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Y0(a,i))}else i=Tt,i=qu(a,a===Yt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Bn(a,i)||(l=!0,Y0(a,i));a=a.next}while(l);fo=!1}}function jv(){Q0()}function Q0(){$i=oo=!1;var t=0;Wl!==0&&Jv()&&(t=Wl);for(var e=ge(),l=null,a=Hi;a!==null;){var u=a.next,i=q0(a,e);i===0?(a.next=null,l===null?Hi=u:l.next=u,u===null&&(yn=l)):(l=a,(t!==0||(i&3)!==0)&&($i=!0)),a=u}ne!==0&&ne!==5||mu(t),Wl!==0&&(Wl=0)}function q0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-Ce(i),s=1<<o,h=u[o];h===-1?((s&l)===0||(s&a)!==0)&&(u[o]=sm(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=Yt,l=Tt,l=qu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&oa(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Bn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&oa(a),zc(l)){case 2:case 8:l=wf;break;case 32:l=$u;break;case 268435456:l=Rf;break;default:l=$u}return a=G0.bind(null,t),l=ra(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&oa(a),t.callbackPriority=2,t.callbackNode=null,2}function G0(t,e){if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ui()&&t.callbackNode!==l)return null;var a=Tt;return a=qu(t,t===Yt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(E0(t,a,e),q0(t,ge()),t.callbackNode!=null&&t.callbackNode===l?G0.bind(null,t):null)}function Y0(t,e){if(Ui())return null;E0(t,e,!0)}function Lv(){Fv(function(){(Bt&6)!==0?ra(Mf,jv):Q0()})}function so(){if(Wl===0){var t=an;t===0&&(t=ju,ju<<=1,(ju&261888)===0&&(ju=256)),Wl=t}return Wl}function k0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xu(""+t)}function X0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Qv(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=k0((u[ye]||null).action),o=a.submitter;o&&(e=(e=o[ye]||null)?k0(e.formAction):o.getAttribute("formAction"),e!==null&&(i=e,o=null));var s=new Ju("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wl!==0){var h=o?X0(u,o):new FormData(u);wr(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=o?X0(u,o):new FormData(u),wr(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var ho=0;ho<Kc.length;ho++){var po=Kc[ho],qv=po.toLowerCase(),Gv=po[0].toUpperCase()+po.slice(1);Je(qv,"on"+Gv)}Je(xs,"onAnimationEnd"),Je(Es,"onAnimationIteration"),Je(Ts,"onAnimationStart"),Je("dblclick","onDoubleClick"),Je("focusin","onFocus"),Je("focusout","onBlur"),Je(nv,"onTransitionRun"),Je(uv,"onTransitionStart"),Je(iv,"onTransitionCancel"),Je(zs,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),da("onBeforeInput",["compositionend","keypress","textInput","paste"]),da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu));function V0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var o=a.length-1;0<=o;o--){var s=a[o],h=s.instance,E=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=E;try{i(u)}catch(R){Iu(R)}u.currentTarget=null,i=h}else for(o=0;o<a.length;o++){if(s=a[o],h=s.instance,E=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=E;try{i(u)}catch(R){Iu(R)}u.currentTarget=null,i=h}}}}function xt(t,e){var l=e[Dc];l===void 0&&(l=e[Dc]=new Set);var a=t+"__bubble";l.has(a)||(Z0(e,t,2,!1),l.add(a))}function mo(t,e,l){var a=0;e&&(a|=4),Z0(l,t,a,e)}var ji="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[ji]){t[ji]=!0,Qf.forEach(function(l){l!=="selectionchange"&&(Yv.has(l)||mo(l,!1,t),mo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ji]||(e[ji]=!0,mo("selectionchange",!1,e))}}function Z0(t,e,l,a){switch(xh(e)){case 2:var u=bb;break;case 8:u=gb;break;default:u=wo}l=u.bind(null,e,l,t),u=void 0,!Uc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function bo(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===u)break;if(o===4)for(o=a.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===u)return;o=o.return}for(;s!==null;){if(o=Qa(s),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){a=i=o;continue t}s=s.parentNode}}a=a.return}If(function(){var E=i,R=Nc(l),U=[];t:{var T=Ds.get(t);if(T!==void 0){var C=Ju,at=t;switch(t){case"keypress":if(Zu(l)===0)break t;case"keydown":case"keyup":C=Hm;break;case"focusin":at="focus",C=Lc;break;case"focusout":at="blur",C=Lc;break;case"beforeblur":case"afterblur":C=Lc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Lm;break;case xs:case Es:case Ts:C=Cm;break;case zs:C=qm;break;case"scroll":case"scrollend":C=xm;break;case"wheel":C=Ym;break;case"copy":case"cut":case"paste":C=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=as;break;case"toggle":case"beforetoggle":C=Xm}var ot=(e&4)!==0,Gt=!ot&&(t==="scroll"||t==="scrollend"),A=ot?T!==null?T+"Capture":null:T;ot=[];for(var v=E,x;v!==null;){var N=v;if(x=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||x===null||A===null||(N=jn(v,A),N!=null&&ot.push(bu(v,N,x))),Gt)break;v=v.return}0<ot.length&&(T=new C(T,at,null,l,R),U.push({event:T,listeners:ot}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",T&&l!==Rc&&(at=l.relatedTarget||l.fromElement)&&(Qa(at)||at[La]))break t;if((C||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,C?(at=l.relatedTarget||l.toElement,C=E,at=at?Qa(at):null,at!==null&&(Gt=p(at),ot=at.tag,at!==Gt||ot!==5&&ot!==27&&ot!==6)&&(at=null)):(C=null,at=E),C!==at)){if(ot=es,N="onMouseLeave",A="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(ot=as,N="onPointerLeave",A="onPointerEnter",v="pointer"),Gt=C==null?T:$n(C),x=at==null?T:$n(at),T=new ot(N,v+"leave",C,l,R),T.target=Gt,T.relatedTarget=x,N=null,Qa(R)===E&&(ot=new ot(A,v+"enter",at,l,R),ot.target=x,ot.relatedTarget=Gt,N=ot),Gt=N,C&&at)e:{for(ot=kv,A=C,v=at,x=0,N=A;N;N=ot(N))x++;N=0;for(var rt=v;rt;rt=ot(rt))N++;for(;0<x-N;)A=ot(A),x--;for(;0<N-x;)v=ot(v),N--;for(;x--;){if(A===v||v!==null&&A===v.alternate){ot=A;break e}A=ot(A),v=ot(v)}ot=null}else ot=null;C!==null&&K0(U,T,C,ot,!1),at!==null&&Gt!==null&&K0(U,Gt,at,ot,!0)}}t:{if(T=E?$n(E):window,C=T.nodeName&&T.nodeName.toLowerCase(),C==="select"||C==="input"&&T.type==="file")var Mt=ss;else if(os(T))if(ds)Mt=ev;else{Mt=Pm;var ut=Im}else C=T.nodeName,!C||C.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&wc(E.elementType)&&(Mt=ss):Mt=tv;if(Mt&&(Mt=Mt(t,E))){fs(U,Mt,l,R);break t}ut&&ut(t,T,E),t==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Mc(T,"number",T.value)}switch(ut=E?$n(E):window,t){case"focusin":(os(ut)||ut.contentEditable==="true")&&(Ja=ut,Xc=E,Vn=null);break;case"focusout":Vn=Xc=Ja=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,As(U,l,R);break;case"selectionchange":if(av)break;case"keydown":case"keyup":As(U,l,R)}var gt;if(qc)t:{switch(t){case"compositionstart":var zt="onCompositionStart";break t;case"compositionend":zt="onCompositionEnd";break t;case"compositionupdate":zt="onCompositionUpdate";break t}zt=void 0}else Ka?cs(t,l)&&(zt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(zt="onCompositionStart");zt&&(ns&&l.locale!=="ko"&&(Ka||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&Ka&&(gt=Pf()):(Bl=R,Hc="value"in Bl?Bl.value:Bl.textContent,Ka=!0)),ut=Li(E,zt),0<ut.length&&(zt=new ls(zt,t,null,l,R),U.push({event:zt,listeners:ut}),gt?zt.data=gt:(gt=rs(l),gt!==null&&(zt.data=gt)))),(gt=Zm?Km(t,l):Jm(t,l))&&(zt=Li(E,"onBeforeInput"),0<zt.length&&(ut=new ls("onBeforeInput","beforeinput",null,l,R),U.push({event:ut,listeners:zt}),ut.data=gt)),Qv(U,t,E,l,R)}V0(U,e)})}function bu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Li(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=jn(t,l),u!=null&&a.unshift(bu(t,u,i)),u=jn(t,e),u!=null&&a.push(bu(t,u,i))),t.tag===3)return a;t=t.return}return[]}function kv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function K0(t,e,l,a,u){for(var i=e._reactName,o=[];l!==null&&l!==a;){var s=l,h=s.alternate,E=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||E===null||(h=E,u?(E=jn(l,i),E!=null&&o.unshift(bu(l,E,h))):u||(E=jn(l,i),E!=null&&o.push(bu(l,E,h)))),l=l.return}o.length!==0&&t.push({event:e,listeners:o})}var Xv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(Xv,`
`).replace(Vv,"")}function W0(t,e){return e=J0(e),J0(t)===e}function qt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Xa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Xa(t,""+a);break;case"className":Yu(t,"class",a);break;case"tabIndex":Yu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Yu(t,l,a);break;case"style":Wf(t,a,i);break;case"data":if(e!=="object"){Yu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Xu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&qt(t,e,"name",u.name,u,null),qt(t,e,"formEncType",u.formEncType,u,null),qt(t,e,"formMethod",u.formMethod,u,null),qt(t,e,"formTarget",u.formTarget,u,null)):(qt(t,e,"encType",u.encType,u,null),qt(t,e,"method",u.method,u,null),qt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Xu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=sl);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Xu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Gu(t,"popover",a);break;case"xlinkActuate":fl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":fl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":fl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":fl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":fl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":fl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":fl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":fl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":fl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Am.get(l)||l,Gu(t,l,a))}}function go(t,e,l,a,u,i){switch(l){case"style":Wf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Xa(t,a):(typeof a=="number"||typeof a=="bigint")&&Xa(t,""+a);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ye]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Gu(t,l,a)}}}function he(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:qt(t,e,i,o,l,null)}}u&&qt(t,e,"srcSet",l.srcSet,l,null),a&&qt(t,e,"src",l.src,l,null);return;case"input":xt("invalid",t);var s=i=o=u=null,h=null,E=null;for(a in l)if(l.hasOwnProperty(a)){var R=l[a];if(R!=null)switch(a){case"name":u=R;break;case"type":o=R;break;case"checked":h=R;break;case"defaultChecked":E=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:qt(t,e,a,R,l,null)}}Vf(t,i,s,h,E,o,u,!1);return;case"select":xt("invalid",t),a=o=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:qt(t,e,u,s,l,null)}e=i,l=o,t.multiple=!!a,e!=null?ka(t,!!a,e,!1):l!=null&&ka(t,!!a,l,!0);return;case"textarea":xt("invalid",t),i=u=a=null;for(o in l)if(l.hasOwnProperty(o)&&(s=l[o],s!=null))switch(o){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:qt(t,e,o,s,l,null)}Kf(t,a,u,i);return;case"option":for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!=null)&&(h==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":qt(t,e,h,a,l,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(a=0;a<vu.length;a++)xt(vu[a],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(a=l[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:qt(t,e,E,a,l,null)}return;default:if(wc(e)){for(R in l)l.hasOwnProperty(R)&&(a=l[R],a!==void 0&&go(t,e,R,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&qt(t,e,s,a,l,null))}function Zv(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,o=null,s=null,h=null,E=null,R=null;for(C in l){var U=l[C];if(l.hasOwnProperty(C)&&U!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":h=U;default:a.hasOwnProperty(C)||qt(t,e,C,null,a,U)}}for(var T in a){var C=a[T];if(U=l[T],a.hasOwnProperty(T)&&(C!=null||U!=null))switch(T){case"type":i=C;break;case"name":u=C;break;case"checked":E=C;break;case"defaultChecked":R=C;break;case"value":o=C;break;case"defaultValue":s=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,e));break;default:C!==U&&qt(t,e,T,C,a,U)}}_c(t,o,s,h,E,R,i,u);return;case"select":C=o=s=T=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":C=h;default:a.hasOwnProperty(i)||qt(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":T=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==h&&qt(t,e,u,i,a,h)}e=s,l=o,a=C,T!=null?ka(t,!!l,T,!1):!!a!=!!l&&(e!=null?ka(t,!!l,e,!0):ka(t,!!l,l?[]:"",!1));return;case"textarea":C=T=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:qt(t,e,s,null,a,u)}for(o in a)if(u=a[o],i=l[o],a.hasOwnProperty(o)&&(u!=null||i!=null))switch(o){case"value":T=u;break;case"defaultValue":C=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&qt(t,e,o,u,a,i)}Zf(t,T,C);return;case"option":for(var at in l)T=l[at],l.hasOwnProperty(at)&&T!=null&&!a.hasOwnProperty(at)&&(at==="selected"?t.selected=!1:qt(t,e,at,null,a,T));for(h in a)T=a[h],C=l[h],a.hasOwnProperty(h)&&T!==C&&(T!=null||C!=null)&&(h==="selected"?t.selected=T&&typeof T!="function"&&typeof T!="symbol":qt(t,e,h,T,a,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in l)T=l[ot],l.hasOwnProperty(ot)&&T!=null&&!a.hasOwnProperty(ot)&&qt(t,e,ot,null,a,T);for(E in a)if(T=a[E],C=l[E],a.hasOwnProperty(E)&&T!==C&&(T!=null||C!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:qt(t,e,E,T,a,C)}return;default:if(wc(e)){for(var Gt in l)T=l[Gt],l.hasOwnProperty(Gt)&&T!==void 0&&!a.hasOwnProperty(Gt)&&go(t,e,Gt,void 0,a,T);for(R in a)T=a[R],C=l[R],!a.hasOwnProperty(R)||T===C||T===void 0&&C===void 0||go(t,e,R,T,a,C);return}}for(var A in l)T=l[A],l.hasOwnProperty(A)&&T!=null&&!a.hasOwnProperty(A)&&qt(t,e,A,null,a,T);for(U in a)T=a[U],C=l[U],!a.hasOwnProperty(U)||T===C||T==null&&C==null||qt(t,e,U,T,a,C)}function F0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var u=l[a],i=u.transferSize,o=u.initiatorType,s=u.duration;if(i&&s&&F0(o)){for(o=0,s=u.responseEnd,a+=1;a<l.length;a++){var h=l[a],E=h.startTime;if(E>s)break;var R=h.transferSize,U=h.initiatorType;R&&F0(U)&&(h=h.responseEnd,o+=R*(h<s?1:(s-E)/(h-E)))}if(--a,e+=8*(i+o)/(u.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yo=null,Ao=null;function Qi(t){return t.nodeType===9?t:t.ownerDocument}function I0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function P0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function So(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xo=null;function Jv(){var t=window.event;return t&&t.type==="popstate"?t===xo?!1:(xo=t,!0):(xo=null,!1)}var th=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(Iv)}:th;function Iv(t){setTimeout(function(){throw t})}function Fl(t){return t==="head"}function lh(t,e){var l=e,a=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(u),En(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")gu(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,gu(l);for(var i=l.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[Hn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=o}}else l==="body"&&gu(t.ownerDocument.body);l=u}while(l);En(e)}function ah(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Eo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Eo(l),Cc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Pv(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Hn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Xe(t.nextSibling),t===null)break}return null}function tb(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Xe(t.nextSibling),t===null))return null;return t}function nh(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Xe(t.nextSibling),t===null))return null;return t}function To(t){return t.data==="$?"||t.data==="$~"}function zo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eb(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Do=null;function uh(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Xe(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function ih(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function ch(t,e,l){switch(e=Qi(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function gu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Cc(t)}var Ve=new Map,rh=new Set;function qi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Cl=G.d;G.d={f:lb,r:ab,D:nb,C:ub,L:ib,m:cb,X:ob,S:rb,M:fb};function lb(){var t=Cl.f(),e=Ri();return t||e}function ab(t){var e=qa(t);e!==null&&e.tag===5&&e.type==="form"?zd(e):Cl.r(t)}var An=typeof document>"u"?null:document;function oh(t,e,l){var a=An;if(a&&typeof e=="string"&&e){var u=je(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),rh.has(u)||(rh.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),he(e,"link",t),ie(e),a.head.appendChild(e)))}}function nb(t){Cl.D(t),oh("dns-prefetch",t,null)}function ub(t,e){Cl.C(t,e),oh("preconnect",t,e)}function ib(t,e,l){Cl.L(t,e,l);var a=An;if(a&&t&&e){var u='link[rel="preload"][as="'+je(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+je(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+je(l.imageSizes)+'"]')):u+='[href="'+je(t)+'"]';var i=u;switch(e){case"style":i=Sn(t);break;case"script":i=xn(t)}Ve.has(i)||(t=S({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ve.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(yu(i))||e==="script"&&a.querySelector(Au(i))||(e=a.createElement("link"),he(e,"link",t),ie(e),a.head.appendChild(e)))}}function cb(t,e){Cl.m(t,e);var l=An;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+je(a)+'"][href="'+je(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xn(t)}if(!Ve.has(i)&&(t=S({rel:"modulepreload",href:t},e),Ve.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Au(i)))return}a=l.createElement("link"),he(a,"link",t),ie(a),l.head.appendChild(a)}}}function rb(t,e,l){Cl.S(t,e,l);var a=An;if(a&&t){var u=Ga(a).hoistableStyles,i=Sn(t);e=e||"default";var o=u.get(i);if(!o){var s={loading:0,preload:null};if(o=a.querySelector(yu(i)))s.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ve.get(i))&&Co(t,l);var h=o=a.createElement("link");ie(h),he(h,"link",t),h._p=new Promise(function(E,R){h.onload=E,h.onerror=R}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Gi(o,e,a)}o={type:"stylesheet",instance:o,count:1,state:s},u.set(i,o)}}}function ob(t,e){Cl.X(t,e);var l=An;if(l&&t){var a=Ga(l).hoistableScripts,u=xn(t),i=a.get(u);i||(i=l.querySelector(Au(u)),i||(t=S({src:t,async:!0},e),(e=Ve.get(u))&&Oo(t,e),i=l.createElement("script"),ie(i),he(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function fb(t,e){Cl.M(t,e);var l=An;if(l&&t){var a=Ga(l).hoistableScripts,u=xn(t),i=a.get(u);i||(i=l.querySelector(Au(u)),i||(t=S({src:t,async:!0,type:"module"},e),(e=Ve.get(u))&&Oo(t,e),i=l.createElement("script"),ie(i),he(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function fh(t,e,l,a){var u=(u=et.current)?qi(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Sn(l.href),l=Ga(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Sn(l.href);var i=Ga(u).hoistableStyles,o=i.get(t);if(o||(u=u.ownerDocument||u,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=u.querySelector(yu(t)))&&!i._p&&(o.instance=i,o.state.loading=5),Ve.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ve.set(t,l),i||sb(u,t,l,o.state))),e&&a===null)throw Error(r(528,""));return o}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=xn(l),l=Ga(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Sn(t){return'href="'+je(t)+'"'}function yu(t){return'link[rel="stylesheet"]['+t+"]"}function sh(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function sb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),he(e,"link",l),ie(e),t.head.appendChild(e))}function xn(t){return'[src="'+je(t)+'"]'}function Au(t){return"script[async]"+t}function dh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+je(l.href)+'"]');if(a)return e.instance=a,ie(a),a;var u=S({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ie(a),he(a,"style",u),Gi(a,l.precedence,t),e.instance=a;case"stylesheet":u=Sn(l.href);var i=t.querySelector(yu(u));if(i)return e.state.loading|=4,e.instance=i,ie(i),i;a=sh(l),(u=Ve.get(u))&&Co(a,u),i=(t.ownerDocument||t).createElement("link"),ie(i);var o=i;return o._p=new Promise(function(s,h){o.onload=s,o.onerror=h}),he(i,"link",a),e.state.loading|=4,Gi(i,l.precedence,t),e.instance=i;case"script":return i=xn(l.src),(u=t.querySelector(Au(i)))?(e.instance=u,ie(u),u):(a=l,(u=Ve.get(i))&&(a=S({},l),Oo(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ie(u),he(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Gi(a,l.precedence,t));return e.instance}function Gi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,o=0;o<a.length;o++){var s=a[o];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Co(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Oo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Yi=null;function hh(t,e,l){if(Yi===null){var a=new Map,u=Yi=new Map;u.set(l,a)}else u=Yi,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Hn]||i[oe]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(e)||"";o=t+o;var s=a.get(o);s?s.push(i):a.set(o,[i])}}return a}function ph(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function db(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hb(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=Sn(a.href),i=e.querySelector(yu(u));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ki.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,ie(i);return}i=e.ownerDocument||e,a=sh(a),(u=Ve.get(u))&&Co(a,u),i=i.createElement("link"),ie(i);var o=i;o._p=new Promise(function(s,h){o.onload=s,o.onerror=h}),he(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=ki.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var _o=0;function pb(t,e){return t.stylesheets&&t.count===0&&Vi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Vi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&_o===0&&(_o=62500*Kv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>_o?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xi=null;function Vi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xi=new Map,e.forEach(mb,t),Xi=null,ki.call(t))}function mb(t,e){if(!(e.state.loading&4)){var l=Xi.get(t);if(l)var a=l.get(null);else{l=new Map,Xi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var o=u[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(l.set(o.dataset.precedence,o),a=o)}a&&l.set(null,a)}u=e.instance,o=u.getAttribute("data-precedence"),i=l.get(o)||a,i===a&&l.set(null,u),l.set(o,u),this.count++,a=ki.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var Su={$$typeof:Y,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function vb(t,e,l,a,u,i,o,s,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ec(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.hiddenUpdates=Ec(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function vh(t,e,l,a,u,i,o,s,h,E,R,U){return t=new vb(t,e,l,o,h,E,R,U,s),e=1,i===!0&&(e|=24),i=_e(3,null,null,e),t.current=i,i.stateNode=t,e=cr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},sr(i),t}function bh(t){return t?(t=Ia,t):Ia}function gh(t,e,l,a,u,i){u=bh(u),a.context===null?a.context=u:a.pendingContext=u,a=Ql(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=ql(t,a,e),l!==null&&(ze(l,t,e),Pn(l,t,e))}function yh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Mo(t,e){yh(t,e),(t=t.alternate)&&yh(t,e)}function Ah(t){if(t.tag===13||t.tag===31){var e=va(t,67108864);e!==null&&ze(e,t,67108864),Mo(t,67108864)}}function Sh(t){if(t.tag===13||t.tag===31){var e=Be();e=Tc(e);var l=va(t,e);l!==null&&ze(l,t,e),Mo(t,e)}}var Zi=!0;function bb(t,e,l,a){var u=O.T;O.T=null;var i=G.p;try{G.p=2,wo(t,e,l,a)}finally{G.p=i,O.T=u}}function gb(t,e,l,a){var u=O.T;O.T=null;var i=G.p;try{G.p=8,wo(t,e,l,a)}finally{G.p=i,O.T=u}}function wo(t,e,l,a){if(Zi){var u=Ro(a);if(u===null)bo(t,e,a,Ki,l),Eh(t,a);else if(Ab(u,t,e,l,a))a.stopPropagation();else if(Eh(t,a),e&4&&-1<yb.indexOf(t)){for(;u!==null;){var i=qa(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=sa(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var h=1<<31-Ce(o);s.entanglements[1]|=h,o&=~h}cl(i),(Bt&6)===0&&(Mi=ge()+500,mu(0))}}break;case 31:case 13:s=va(i,2),s!==null&&ze(s,i,2),Ri(),Mo(i,2)}if(i=Ro(a),i===null&&bo(t,e,a,Ki,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else bo(t,e,a,null,l)}}function Ro(t){return t=Nc(t),No(t)}var Ki=null;function No(t){if(Ki=null,t=Qa(t),t!==null){var e=p(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=g(e),t!==null)return t;t=null}else if(l===31){if(t=D(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ki=t,null}function xh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nm()){case Mf:return 2;case wf:return 8;case $u:case um:return 32;case Rf:return 268435456;default:return 32}default:return 32}}var Bo=!1,Il=null,Pl=null,ta=null,xu=new Map,Eu=new Map,ea=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":Il=null;break;case"dragenter":case"dragleave":Pl=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":xu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(e.pointerId)}}function Tu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=qa(e),e!==null&&Ah(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Ab(t,e,l,a,u){switch(e){case"focusin":return Il=Tu(Il,t,e,l,a,u),!0;case"dragenter":return Pl=Tu(Pl,t,e,l,a,u),!0;case"mouseover":return ta=Tu(ta,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return xu.set(i,Tu(xu.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,Eu.set(i,Tu(Eu.get(i)||null,t,e,l,a,u)),!0}return!1}function Th(t){var e=Qa(t.target);if(e!==null){var l=p(e);if(l!==null){if(e=l.tag,e===13){if(e=g(l),e!==null){t.blockedOn=e,jf(t.priority,function(){Sh(l)});return}}else if(e===31){if(e=D(l),e!==null){t.blockedOn=e,jf(t.priority,function(){Sh(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ji(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Ro(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Rc=a,l.target.dispatchEvent(a),Rc=null}else return e=qa(l),e!==null&&Ah(e),t.blockedOn=l,!1;e.shift()}return!0}function zh(t,e,l){Ji(t)&&l.delete(e)}function Sb(){Bo=!1,Il!==null&&Ji(Il)&&(Il=null),Pl!==null&&Ji(Pl)&&(Pl=null),ta!==null&&Ji(ta)&&(ta=null),xu.forEach(zh),Eu.forEach(zh)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,Bo||(Bo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Sb)))}var Fi=null;function Dh(t){Fi!==t&&(Fi=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Fi===t&&(Fi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(No(a||l)===null)continue;break}var i=qa(l);i!==null&&(t.splice(e,3),e-=3,wr(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function En(t){function e(h){return Wi(h,t)}Il!==null&&Wi(Il,t),Pl!==null&&Wi(Pl,t),ta!==null&&Wi(ta,t),xu.forEach(e),Eu.forEach(e);for(var l=0;l<ea.length;l++){var a=ea[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ea.length&&(l=ea[0],l.blockedOn===null);)Th(l),l.blockedOn===null&&ea.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],o=u[ye]||null;if(typeof i=="function")o||Dh(l);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,o=i[ye]||null)s=o.formAction;else if(No(u)!==null)continue}else s=o.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),Dh(l)}}}function Ch(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return u=o})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function Uo(t){this._internalRoot=t}Ii.prototype.render=Uo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=Be();gh(l,a,t,e,null,null)},Ii.prototype.unmount=Uo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gh(t.current,2,null,t,null,null),Ri(),e[La]=null}};function Ii(t){this._internalRoot=t}Ii.prototype.unstable_scheduleHydration=function(t){if(t){var e=$f();t={blockedOn:null,target:t,priority:e};for(var l=0;l<ea.length&&e!==0&&e<ea[l].priority;l++);ea.splice(l,0,t),l===0&&Th(t)}};var Oh=c.version;if(Oh!=="19.2.4")throw Error(r(527,Oh,"19.2.4"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=b(e),t=t!==null?M(t):null,t=t===null?null:t.stateNode,t};var xb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Nn=Pi.inject(xb),De=Pi}catch{}}return Du.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=Ud,i=Hd,o=$d;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=vh(t,1,!1,null,null,l,a,null,u,i,o,Ch),t[La]=e.current,vo(t),new Uo(e)},Du.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=Ud,o=Hd,s=$d,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(o=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),e=vh(t,1,!0,e,l??null,a,u,h,i,o,s,Ch),e.context=bh(null),l=e.current,a=Be(),a=Tc(a),u=Ql(a),u.callback=null,ql(l,u,a),l=a,e.current.lanes=l,Un(e,l),cl(e),t[La]=e.current,vo(t),new Ii(e)},Du.version="19.2.4",Du}var jh;function wb(){if(jh)return jo.exports;jh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),jo.exports=Mb(),jo.exports}var Rb=wb();const Nb=sf(Rb);var Bb=`
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

`,re=function(){return re=Object.assign||function(c){for(var f,r=1,d=arguments.length;r<d;r++){f=arguments[r];for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&(c[p]=f[p])}return c},re.apply(this,arguments)};function Mu(n,c,f){if(f||arguments.length===2)for(var r=0,d=c.length,p;r<d;r++)(p||!(r in c))&&(p||(p=Array.prototype.slice.call(c,0,r)),p[r]=c[r]);return n.concat(p||Array.prototype.slice.call(c))}var Vt="-ms-",Ou="-moz-",Ut="-webkit-",dp="comm",mc="rule",hf="decl",Ub="@import",Hb="@namespace",hp="@keyframes",$b="@layer",pp=Math.abs,pf=String.fromCharCode,Jo=Object.assign;function jb(n,c){return ue(n,0)^45?(((c<<2^ue(n,0))<<2^ue(n,1))<<2^ue(n,2))<<2^ue(n,3):0}function mp(n){return n.trim()}function _l(n,c){return(n=c.exec(n))?n[0]:n}function yt(n,c,f){return n.replace(c,f)}function ac(n,c,f){return n.indexOf(c,f)}function ue(n,c){return n.charCodeAt(c)|0}function Ba(n,c,f){return n.slice(c,f)}function Ie(n){return n.length}function vp(n){return n.length}function Cu(n,c){return c.push(n),n}function Lb(n,c){return n.map(c).join("")}function Lh(n,c){return n.filter(function(f){return!_l(f,c)})}var vc=1,On=1,bp=0,Ze=0,ae=0,Rn="";function bc(n,c,f,r,d,p,g,D){return{value:n,root:c,parent:f,type:r,props:d,children:p,line:vc,column:On,length:g,return:"",siblings:D}}function aa(n,c){return Jo(bc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function Tn(n){for(;n.root;)n=aa(n.root,{children:[n]});Cu(n,n.siblings)}function Qb(){return ae}function qb(){return ae=Ze>0?ue(Rn,--Ze):0,On--,ae===10&&(On=1,vc--),ae}function Pe(){return ae=Ze<bp?ue(Rn,Ze++):0,On++,ae===10&&(On=1,vc++),ae}function na(){return ue(Rn,Ze)}function nc(){return Ze}function gc(n,c){return Ba(Rn,n,c)}function wu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gb(n){return vc=On=1,bp=Ie(Rn=n),Ze=0,[]}function Yb(n){return Rn="",n}function Go(n){return mp(gc(Ze-1,Wo(n===91?n+2:n===40?n+1:n)))}function kb(n){for(;(ae=na())&&ae<33;)Pe();return wu(n)>2||wu(ae)>3?"":" "}function Xb(n,c){for(;--c&&Pe()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return gc(n,nc()+(c<6&&na()==32&&Pe()==32))}function Wo(n){for(;Pe();)switch(ae){case n:return Ze;case 34:case 39:n!==34&&n!==39&&Wo(ae);break;case 40:n===41&&Wo(n);break;case 92:Pe();break}return Ze}function Vb(n,c){for(;Pe()&&n+ae!==57;)if(n+ae===84&&na()===47)break;return"/*"+gc(c,Ze-1)+"*"+pf(n===47?n:Pe())}function Zb(n){for(;!wu(na());)Pe();return gc(n,Ze)}function Kb(n){return Yb(uc("",null,null,null,[""],n=Gb(n),0,[0],n))}function uc(n,c,f,r,d,p,g,D,y){for(var b=0,M=0,S=g,L=0,P=0,k=0,J=1,I=1,Z=1,K=0,Y="",q=d,F=p,X=r,H=Y;I;)switch(k=K,K=Pe()){case 40:if(k!=108&&ue(H,S-1)==58){ac(H+=yt(Go(K),"&","&\f"),"&\f",pp(b?D[b-1]:0))!=-1&&(Z=-1);break}case 34:case 39:case 91:H+=Go(K);break;case 9:case 10:case 13:case 32:H+=kb(k);break;case 92:H+=Xb(nc()-1,7);continue;case 47:switch(na()){case 42:case 47:Cu(Jb(Vb(Pe(),nc()),c,f,y),y),(wu(k||1)==5||wu(na()||1)==5)&&Ie(H)&&Ba(H,-1,void 0)!==" "&&(H+=" ");break;default:H+="/"}break;case 123*J:D[b++]=Ie(H)*Z;case 125*J:case 59:case 0:switch(K){case 0:case 125:I=0;case 59+M:Z==-1&&(H=yt(H,/\f/g,"")),P>0&&(Ie(H)-S||J===0&&k===47)&&Cu(P>32?qh(H+";",r,f,S-1,y):qh(yt(H," ","")+";",r,f,S-2,y),y);break;case 59:H+=";";default:if(Cu(X=Qh(H,c,f,b,M,d,D,Y,q=[],F=[],S,p),p),K===123)if(M===0)uc(H,c,X,X,q,p,S,D,F);else{switch(L){case 99:if(ue(H,3)===110)break;case 108:if(ue(H,2)===97)break;default:M=0;case 100:case 109:case 115:}M?uc(n,X,X,r&&Cu(Qh(n,X,X,0,0,d,D,Y,d,q=[],S,F),F),d,F,S,D,r?q:F):uc(H,X,X,X,[""],F,0,D,F)}}b=M=P=0,J=Z=1,Y=H="",S=g;break;case 58:S=1+Ie(H),P=k;default:if(J<1){if(K==123)--J;else if(K==125&&J++==0&&qb()==125)continue}switch(H+=pf(K),K*J){case 38:Z=M>0?1:(H+="\f",-1);break;case 44:D[b++]=(Ie(H)-1)*Z,Z=1;break;case 64:na()===45&&(H+=Go(Pe())),L=na(),M=S=Ie(Y=H+=Zb(nc())),K++;break;case 45:k===45&&Ie(H)==2&&(J=0)}}return p}function Qh(n,c,f,r,d,p,g,D,y,b,M,S){for(var L=d-1,P=d===0?p:[""],k=vp(P),J=0,I=0,Z=0;J<r;++J)for(var K=0,Y=Ba(n,L+1,L=pp(I=g[J])),q=n;K<k;++K)(q=mp(I>0?P[K]+" "+Y:yt(Y,/&\f/g,P[K])))&&(y[Z++]=q);return bc(n,c,f,d===0?mc:D,y,b,M,S)}function Jb(n,c,f,r){return bc(n,c,f,dp,pf(Qb()),Ba(n,2,-2),0,r)}function qh(n,c,f,r,d){return bc(n,c,f,hf,Ba(n,0,r),Ba(n,r+1,-1),r,d)}function gp(n,c,f){switch(jb(n,c)){case 5103:return Ut+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ut+n+n;case 4855:return Ut+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ou+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ut+n+Ou+n+Vt+n+n;case 5936:switch(ue(n,c+11)){case 114:return Ut+n+Vt+yt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ut+n+Vt+yt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ut+n+Vt+yt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ut+n+Vt+n+n;case 6165:return Ut+n+Vt+"flex-"+n+n;case 5187:return Ut+n+yt(n,/(\w+).+(:[^]+)/,Ut+"box-$1$2"+Vt+"flex-$1$2")+n;case 5443:return Ut+n+Vt+"flex-item-"+yt(n,/flex-|-self/g,"")+(_l(n,/flex-|baseline/)?"":Vt+"grid-row-"+yt(n,/flex-|-self/g,""))+n;case 4675:return Ut+n+Vt+"flex-line-pack"+yt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ut+n+Vt+yt(n,"shrink","negative")+n;case 5292:return Ut+n+Vt+yt(n,"basis","preferred-size")+n;case 6060:return Ut+"box-"+yt(n,"-grow","")+Ut+n+Vt+yt(n,"grow","positive")+n;case 4554:return Ut+yt(n,/([^-])(transform)/g,"$1"+Ut+"$2")+n;case 6187:return yt(yt(yt(n,/(zoom-|grab)/,Ut+"$1"),/(image-set)/,Ut+"$1"),n,"")+n;case 5495:case 3959:return yt(n,/(image-set\([^]*)/,Ut+"$1$`$1");case 4968:return yt(yt(n,/(.+:)(flex-)?(.*)/,Ut+"box-pack:$3"+Vt+"flex-pack:$3"),/space-between/,"justify")+Ut+n+n;case 4200:if(!_l(n,/flex-|baseline/))return Vt+"grid-column-align"+Ba(n,c)+n;break;case 2592:case 3360:return Vt+yt(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(r,d){return c=d,_l(r.props,/grid-\w+-end/)})?~ac(n+(f=f[c].value),"span",0)?n:Vt+yt(n,"-start","")+n+Vt+"grid-row-span:"+(~ac(f,"span",0)?_l(f,/\d+/):+_l(f,/\d+/)-+_l(n,/\d+/))+";":Vt+yt(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(r){return _l(r.props,/grid-\w+-start/)})?n:Vt+yt(yt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return yt(n,/(.+)-inline(.+)/,Ut+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(n)-1-c>6)switch(ue(n,c+1)){case 109:if(ue(n,c+4)!==45)break;case 102:return yt(n,/(.+:)(.+)-([^]+)/,"$1"+Ut+"$2-$3$1"+Ou+(ue(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~ac(n,"stretch",0)?gp(yt(n,"stretch","fill-available"),c,f)+n:n}break;case 5152:case 5920:return yt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,p,g,D,y,b){return Vt+d+":"+p+b+(g?Vt+d+"-span:"+(D?y:+y-+p)+b:"")+n});case 4949:if(ue(n,c+6)===121)return yt(n,":",":"+Ut)+n;break;case 6444:switch(ue(n,ue(n,14)===45?18:11)){case 120:return yt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ut+(ue(n,14)===45?"inline-":"")+"box$3$1"+Ut+"$2$3$1"+Vt+"$2box$3")+n;case 100:return yt(n,":",":"+Vt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return yt(n,"scroll-","scroll-snap-")+n}return n}function sc(n,c){for(var f="",r=0;r<n.length;r++)f+=c(n[r],r,n,c)||"";return f}function Wb(n,c,f,r){switch(n.type){case $b:if(n.children.length)break;case Ub:case Hb:case hf:return n.return=n.return||n.value;case dp:return"";case hp:return n.return=n.value+"{"+sc(n.children,r)+"}";case mc:if(!Ie(n.value=n.props.join(",")))return""}return Ie(f=sc(n.children,r))?n.return=n.value+"{"+f+"}":""}function Fb(n){var c=vp(n);return function(f,r,d,p){for(var g="",D=0;D<c;D++)g+=n[D](f,r,d,p)||"";return g}}function Ib(n){return function(c){c.root||(c=c.return)&&n(c)}}function Pb(n,c,f,r){if(n.length>-1&&!n.return)switch(n.type){case hf:n.return=gp(n.value,n.length,f);return;case hp:return sc([aa(n,{value:yt(n.value,"@","@"+Ut)})],r);case mc:if(n.length)return Lb(f=n.props,function(d){switch(_l(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tn(aa(n,{props:[yt(d,/:(read-\w+)/,":"+Ou+"$1")]})),Tn(aa(n,{props:[d]})),Jo(n,{props:Lh(f,r)});break;case"::placeholder":Tn(aa(n,{props:[yt(d,/:(plac\w+)/,":"+Ut+"input-$1")]})),Tn(aa(n,{props:[yt(d,/:(plac\w+)/,":"+Ou+"$1")]})),Tn(aa(n,{props:[yt(d,/:(plac\w+)/,Vt+"input-$1")]})),Tn(aa(n,{props:[d]})),Jo(n,{props:Lh(f,r)});break}return""})}}var tg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},_n=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",yp="active",Ap="data-styled-version",yc="6.3.9",mf=`/*!sc*/
`,_u=typeof window<"u"&&typeof document<"u",tl=z.createContext===void 0,eg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),lg={},vf=Object.freeze([]),Mn=Object.freeze({});function Sp(n,c,f){return f===void 0&&(f=Mn),n.theme!==f.theme&&n.theme||c||f.theme}var xp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ag=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ng=/(^-|-$)/g;function Gh(n){return n.replace(ag,"-").replace(ng,"")}var ug=/(a)(d)/gi,Yh=function(n){return String.fromCharCode(n+(n>25?39:97))};function Fo(n){var c,f="";for(c=Math.abs(n);c>52;c=c/52|0)f=Yh(c%52)+f;return(Yh(c%52)+f).replace(ug,"$1-$2")}var Yo,Ma=function(n,c){for(var f=c.length;f;)n=33*n^c.charCodeAt(--f);return n},Ep=function(n){return Ma(5381,n)};function Tp(n){return Fo(Ep(n)>>>0)}function ig(n){return n.displayName||n.name||"Component"}function ko(n){return typeof n=="string"&&!0}var zp=typeof Symbol=="function"&&Symbol.for,Dp=zp?Symbol.for("react.memo"):60115,cg=zp?Symbol.for("react.forward_ref"):60112,rg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},og={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fg=((Yo={})[cg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yo[Dp]=Cp,Yo);function kh(n){return("type"in(c=n)&&c.type.$$typeof)===Dp?Cp:"$$typeof"in n?fg[n.$$typeof]:rg;var c}var sg=Object.defineProperty,dg=Object.getOwnPropertyNames,Xh=Object.getOwnPropertySymbols,hg=Object.getOwnPropertyDescriptor,pg=Object.getPrototypeOf,Vh=Object.prototype;function Op(n,c,f){if(typeof c!="string"){if(Vh){var r=pg(c);r&&r!==Vh&&Op(n,r,f)}var d=dg(c);Xh&&(d=d.concat(Xh(c)));for(var p=kh(n),g=kh(c),D=0;D<d.length;++D){var y=d[D];if(!(y in og||f&&f[y]||g&&y in g||p&&y in p)){var b=hg(c,y);try{sg(n,y,b)}catch{}}}}return n}function Ua(n){return typeof n=="function"}function bf(n){return typeof n=="object"&&"styledComponentId"in n}function Ra(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Io(n,c){return n.join("")}function Ru(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Po(n,c,f){if(f===void 0&&(f=!1),!f&&!Ru(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=Po(n[r],c[r]);else if(Ru(c))for(var r in c)n[r]=Po(n[r],c[r]);return n}function gf(n,c){Object.defineProperty(n,"toString",{value:c})}function Ha(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var mg=(function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return n.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var f=this._cIndex;if(c>this._cGroup)for(var r=this._cGroup;r<c;r++)f+=this.groupSizes[r];else for(r=this._cGroup-1;r>=c;r--)f-=this.groupSizes[r];return this._cGroup=c,this._cIndex=f,f},n.prototype.insertRules=function(c,f){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,p=d;c>=p;)if((p<<=1)<0)throw Ha(16,"".concat(c));this.groupSizes=new Uint32Array(p),this.groupSizes.set(r),this.length=p;for(var g=d;g<p;g++)this.groupSizes[g]=0}for(var D=this.indexOfGroup(c+1),y=0,b=(g=0,f.length);g<b;g++)this.tag.insertRule(D,f[g])&&(this.groupSizes[c]++,D++,y++);y>0&&this._cGroup>c&&(this._cIndex+=y)},n.prototype.clearGroup=function(c){if(c<this.length){var f=this.groupSizes[c],r=this.indexOfGroup(c),d=r+f;this.groupSizes[c]=0;for(var p=r;p<d;p++)this.tag.deleteRule(r);f>0&&this._cGroup>c&&(this._cIndex-=f)}},n.prototype.getGroup=function(c){var f="";if(c>=this.length||this.groupSizes[c]===0)return f;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),p=d+r,g=d;g<p;g++)f+=this.tag.getRule(g)+mf;return f},n})(),ic=new Map,dc=new Map,cc=1,Dn=function(n){if(ic.has(n))return ic.get(n);for(;dc.has(cc);)cc++;var c=cc++;return ic.set(n,c),dc.set(c,n),c},vg=function(n,c){cc=c+1,ic.set(n,c),dc.set(c,n)},bg="style[".concat(_n,"][").concat(Ap,'="').concat(yc,'"]'),gg=new RegExp("^".concat(_n,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zh=function(n){return typeof ShadowRoot<"u"&&n instanceof ShadowRoot||"host"in n&&n.nodeType===11},tf=function(n){if(!n)return document;if(Zh(n))return n;if("getRootNode"in n){var c=n.getRootNode();if(Zh(c))return c}return document},yg=function(n,c,f){for(var r,d=f.split(","),p=0,g=d.length;p<g;p++)(r=d[p])&&n.registerName(c,r)},Ag=function(n,c){for(var f,r=((f=c.textContent)!==null&&f!==void 0?f:"").split(mf),d=[],p=0,g=r.length;p<g;p++){var D=r[p].trim();if(D){var y=D.match(gg);if(y){var b=0|parseInt(y[1],10),M=y[2];b!==0&&(vg(M,b),yg(n,M,y[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(D)}}},Xo=function(n){for(var c=tf(n.options.target).querySelectorAll(bg),f=0,r=c.length;f<r;f++){var d=c[f];d&&d.getAttribute(_n)!==yp&&(Ag(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Sg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _p=function(n){var c=document.head,f=n||c,r=document.createElement("style"),d=(function(D){var y=Array.from(D.querySelectorAll("style[".concat(_n,"]")));return y[y.length-1]})(f),p=d!==void 0?d.nextSibling:null;r.setAttribute(_n,yp),r.setAttribute(Ap,yc);var g=Sg();return g&&r.setAttribute("nonce",g),f.insertBefore(r,p),r},xg=(function(){function n(c){this.element=_p(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){var r;if(f.sheet)return f.sheet;for(var d=(r=f.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,p=0,g=d.length;p<g;p++){var D=d[p];if(D.ownerNode===f)return D}throw Ha(17)})(this.element),this.length=0}return n.prototype.insertRule=function(c,f){try{return this.sheet.insertRule(f,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var f=this.sheet.cssRules[c];return f&&f.cssText?f.cssText:""},n})(),Eg=(function(){function n(c){this.element=_p(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,f){if(c<=this.length&&c>=0){var r=document.createTextNode(f);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n})(),Tg=(function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,f){return c<=this.length&&(c===this.length?this.rules.push(f):this.rules.splice(c,0,f),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n})(),Kh=_u,zg={isServer:!_u,useCSSOMInjection:!eg},hc=(function(){function n(c,f,r){c===void 0&&(c=Mn),f===void 0&&(f={});var d=this;this.options=re(re({},zg),c),this.gs=f,this.names=new Map(r),this.server=!!c.isServer,!this.server&&_u&&Kh&&(Kh=!1,Xo(this)),gf(this,function(){return(function(p){for(var g=p.getTag(),D=g.length,y="",b=function(S){var L=(function(Z){return dc.get(Z)})(S);if(L===void 0)return"continue";var P=p.names.get(L);if(P===void 0||!P.size)return"continue";var k=g.getGroup(S);if(k.length===0)return"continue";var J=_n+".g"+S+'[id="'+L+'"]',I="";P.forEach(function(Z){Z.length>0&&(I+=Z+",")}),y+=k+J+'{content:"'+I+'"}'+mf},M=0;M<D;M++)b(M);return y})(d)})}return n.registerId=function(c){return Dn(c)},n.prototype.rehydrate=function(){!this.server&&_u&&Xo(this)},n.prototype.reconstructWithOptions=function(c,f){f===void 0&&(f=!0);var r=new n(re(re({},this.options),c),this.gs,f&&this.names||void 0);return!this.server&&_u&&c.target!==this.options.target&&tf(this.options.target)!==tf(c.target)&&Xo(r),r},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(f){var r=f.useCSSOMInjection,d=f.target;return f.isServer?new Tg(d):r?new xg(d):new Eg(d)})(this.options),new mg(c)));var c},n.prototype.hasNameForId=function(c,f){var r,d;return(d=(r=this.names.get(c))===null||r===void 0?void 0:r.has(f))!==null&&d!==void 0&&d},n.prototype.registerName=function(c,f){Dn(c);var r=this.names.get(c);r?r.add(f):this.names.set(c,new Set([f]))},n.prototype.insertRules=function(c,f,r){this.registerName(c,f),this.getTag().insertRules(Dn(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Dn(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n})(),Dg=/&/g,Ml=47,wa=42;function Jh(n){if(n.indexOf("}")===-1)return!1;for(var c=n.length,f=0,r=0,d=!1,p=0;p<c;p++){var g=n.charCodeAt(p);if(r!==0||d||g!==Ml||n.charCodeAt(p+1)!==wa)if(d)g===wa&&n.charCodeAt(p+1)===Ml&&(d=!1,p++);else if(g!==34&&g!==39||p!==0&&n.charCodeAt(p-1)===92){if(r===0){if(g===123)f++;else if(g===125&&--f<0)return!0}}else r===0?r=g:r===g&&(r=0);else d=!0,p++}return f!==0||r!==0}function Mp(n,c){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(c," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(c," ")),f.props=f.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Mp(f.children,c)),f})}function Cg(n){var c,f,r,d=Mn,p=d.options,g=p===void 0?Mn:p,D=d.plugins,y=D===void 0?vf:D,b=function(k,J,I){return I.startsWith(f)&&I.endsWith(f)&&I.replaceAll(f,"").length>0?".".concat(c):k},M=y.slice();M.push(function(k){k.type===mc&&k.value.includes("&")&&(r||(r=new RegExp("\\".concat(f,"\\b"),"g")),k.props[0]=k.props[0].replace(Dg,f).replace(r,b))}),g.prefix&&M.push(Pb),M.push(Wb);var S=[],L=Fb(M.concat(Ib(function(k){return S.push(k)}))),P=function(k,J,I,Z){J===void 0&&(J=""),I===void 0&&(I=""),Z===void 0&&(Z="&"),c=Z,f=J,r=void 0;var K=(function(q){if(!Jh(q))return q;for(var F=q.length,X="",H=0,W=0,mt=0,Rt=!1,ct=0;ct<F;ct++){var st=q.charCodeAt(ct);if(mt!==0||Rt||st!==Ml||q.charCodeAt(ct+1)!==wa)if(Rt)st===wa&&q.charCodeAt(ct+1)===Ml&&(Rt=!1,ct++);else if(st!==34&&st!==39||ct!==0&&q.charCodeAt(ct-1)===92){if(mt===0)if(st===123)W++;else if(st===125){if(--W<0){for(var Ct=ct+1;Ct<F;){var _t=q.charCodeAt(Ct);if(_t===59||_t===10)break;Ct++}Ct<F&&q.charCodeAt(Ct)===59&&Ct++,W=0,ct=Ct-1,H=Ct;continue}W===0&&(X+=q.substring(H,ct+1),H=ct+1)}else st===59&&W===0&&(X+=q.substring(H,ct+1),H=ct+1)}else mt===0?mt=st:mt===st&&(mt=0);else Rt=!0,ct++}if(H<F){var Et=q.substring(H);Jh(Et)||(X+=Et)}return X})((function(q){if(q.indexOf("//")===-1)return q;for(var F=q.length,X=[],H=0,W=0,mt=0,Rt=0;W<F;){var ct=q.charCodeAt(W);if(ct!==34&&ct!==39||W!==0&&q.charCodeAt(W-1)===92)if(mt===0)if(ct===Ml&&W+1<F&&q.charCodeAt(W+1)===wa){for(W+=2;W+1<F&&(q.charCodeAt(W)!==wa||q.charCodeAt(W+1)!==Ml);)W++;W+=2}else if(ct===40&&W>=3&&(32|q.charCodeAt(W-1))==108&&(32|q.charCodeAt(W-2))==114&&(32|q.charCodeAt(W-3))==117)Rt=1,W++;else if(Rt>0)ct===41?Rt--:ct===40&&Rt++,W++;else if(ct===wa&&W+1<F&&q.charCodeAt(W+1)===Ml)W>H&&X.push(q.substring(H,W)),H=W+=2;else if(ct===Ml&&W+1<F&&q.charCodeAt(W+1)===Ml){for(W>H&&X.push(q.substring(H,W));W<F&&q.charCodeAt(W)!==10;)W++;H=W}else W++;else W++;else mt===0?mt=ct:mt===ct&&(mt=0),W++}return H===0?q:(H<F&&X.push(q.substring(H)),X.join(""))})(k)),Y=Kb(I||J?"".concat(I," ").concat(J," { ").concat(K," }"):K);return g.namespace&&(Y=Mp(Y,g.namespace)),S=[],sc(Y,L),S};return P.hash=y.length?y.reduce(function(k,J){return J.name||Ha(15),Ma(k,J.name)},5381).toString():"",P}var Og=new hc,ef=Cg(),lf={shouldForwardProp:void 0,styleSheet:Og,stylis:ef},wp=tl?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(lf)}}:z.createContext(lf);wp.Consumer;tl||z.createContext(void 0);function af(){return tl?lf:z.useContext(wp)}var _g=(function(){function n(c,f){var r=this;this.inject=function(d,p){p===void 0&&(p=ef);var g=r.name+p.hash;d.hasNameForId(r.id,g)||d.insertRules(r.id,g,p(r.rules,g,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=f,gf(this,function(){throw Ha(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=ef),this.name+c.hash},n})();function Mg(n,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||n in tg||n.startsWith("--")?String(c).trim():"".concat(c,"px")}var wg=function(n){return n>="A"&&n<="Z"};function Wh(n){for(var c="",f=0;f<n.length;f++){var r=n[f];if(f===1&&r==="-"&&n[0]==="-")return n;wg(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var Rp=function(n){return n==null||n===!1||n===""},Np=function(n){var c=[];for(var f in n){var r=n[f];n.hasOwnProperty(f)&&!Rp(r)&&(Array.isArray(r)&&r.isCss||Ua(r)?c.push("".concat(Wh(f),":"),r,";"):Ru(r)?c.push.apply(c,Mu(Mu(["".concat(f," {")],Np(r),!1),["}"],!1)):c.push("".concat(Wh(f),": ").concat(Mg(f,r),";")))}return c};function ua(n,c,f,r,d){if(d===void 0&&(d=[]),typeof n=="string")return n&&d.push(n),d;if(Rp(n))return d;if(bf(n))return d.push(".".concat(n.styledComponentId)),d;if(Ua(n)){if(!Ua(g=n)||g.prototype&&g.prototype.isReactComponent||!c)return d.push(n),d;var p=n(c);return ua(p,c,f,r,d)}var g;if(n instanceof _g)return f?(n.inject(f,r),d.push(n.getName(r))):d.push(n),d;if(Ru(n)){for(var D=Np(n),y=0;y<D.length;y++)d.push(D[y]);return d}if(!Array.isArray(n))return d.push(n.toString()),d;for(y=0;y<n.length;y++)ua(n[y],c,f,r,d);return d}function Bp(n){for(var c=0;c<n.length;c+=1){var f=n[c];if(Ua(f)&&!bf(f))return!1}return!0}var Rg=Ep(yc),Ng=(function(){function n(c,f,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Bp(c),this.componentId=f,this.baseHash=Ma(Rg,f),this.baseStyle=r,hc.registerId(f)}return n.prototype.generateAndInjectStyles=function(c,f,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,f,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))d=Ra(d,this.staticRulesId);else{var p=Io(ua(this.rules,c,f,r)),g=Fo(Ma(this.baseHash,p)>>>0);if(!f.hasNameForId(this.componentId,g)){var D=r(p,".".concat(g),void 0,this.componentId);f.insertRules(this.componentId,g,D)}d=Ra(d,g),this.staticRulesId=g}else{for(var y=Ma(this.baseHash,r.hash),b="",M=0;M<this.rules.length;M++){var S=this.rules[M];if(typeof S=="string")b+=S;else if(S){var L=Io(ua(S,c,f,r));y=Ma(Ma(y,String(M)),L),b+=L}}if(b){var P=Fo(y>>>0);if(!f.hasNameForId(this.componentId,P)){var k=r(b,".".concat(P),void 0,this.componentId);f.insertRules(this.componentId,P,k)}d=Ra(d,P)}}return{className:d,css:typeof window>"u"?f.getTag().getGroup(Dn(this.componentId)):""}},n})(),Nu=tl?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:z.createContext(void 0);Nu.Consumer;function Bg(n){if(tl)return n.children;var c=z.useContext(Nu),f=z.useMemo(function(){return(function(r,d){if(!r)throw Ha(14);if(Ua(r)){var p=r(d);return p}if(Array.isArray(r)||typeof r!="object")throw Ha(8);return d?re(re({},d),r):r})(n.theme,c)},[n.theme,c]);return n.children?z.createElement(Nu.Provider,{value:f},n.children):null}var Vo={};function Ug(n,c,f){var r=bf(n),d=n,p=!ko(n),g=c.attrs,D=g===void 0?vf:g,y=c.componentId,b=y===void 0?(function(q,F){var X=typeof q!="string"?"sc":Gh(q);Vo[X]=(Vo[X]||0)+1;var H="".concat(X,"-").concat(Tp(yc+X+Vo[X]));return F?"".concat(F,"-").concat(H):H})(c.displayName,c.parentComponentId):y,M=c.displayName,S=M===void 0?(function(q){return ko(q)?"styled.".concat(q):"Styled(".concat(ig(q),")")})(n):M,L=c.displayName&&c.componentId?"".concat(Gh(c.displayName),"-").concat(c.componentId):c.componentId||b,P=r&&d.attrs?d.attrs.concat(D).filter(Boolean):D,k=c.shouldForwardProp;if(r&&d.shouldForwardProp){var J=d.shouldForwardProp;if(c.shouldForwardProp){var I=c.shouldForwardProp;k=function(q,F){return J(q,F)&&I(q,F)}}else k=J}var Z=new Ng(f,L,r?d.componentStyle:void 0);function K(q,F){return(function(X,H,W){var mt=X.attrs,Rt=X.componentStyle,ct=X.defaultProps,st=X.foldedComponentIds,Ct=X.styledComponentId,_t=X.target,Et=tl?void 0:z.useContext(Nu),O=af(),G=X.shouldForwardProp||O.shouldForwardProp,V=Sp(H,Et,ct)||(tl?void 0:Mn),it=(function(Ot,$,dt){for(var vt,At=re(re({},$),{className:void 0,theme:dt}),Nt=0;Nt<Ot.length;Nt+=1){var Ht=Ua(vt=Ot[Nt])?vt(At):vt;for(var $t in Ht)$t==="className"?At.className=Ra(At.className,Ht[$t]):$t==="style"?At.style=re(re({},At.style),Ht[$t]):At[$t]=Ht[$t]}return"className"in $&&typeof $.className=="string"&&(At.className=Ra(At.className,$.className)),At})(mt,H,V),ht=it.as||_t,m={};for(var _ in it)it[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&it.theme===V||(_==="forwardedAs"?m.as=it.forwardedAs:G&&!G(_,ht)||(m[_]=it[_]));var B=(function(Ot,$){var dt=af(),vt=Ot.generateAndInjectStyles($,dt.styleSheet,dt.stylis);return vt})(Rt,it),j=B.className,tt=B.css,et=Ra(st,Ct);j&&(et+=" "+j),it.className&&(et+=" "+it.className),m[ko(ht)&&!xp.has(ht)?"class":"className"]=et,W&&(m.ref=W);var nt=w.createElement(ht,m);return tl&&tt?z.createElement(z.Fragment,null,z.createElement("style",{precedence:"styled-components",href:"sc-".concat(Ct,"-").concat(j),children:tt}),nt):nt})(Y,q,F)}K.displayName=S;var Y=z.forwardRef(K);return Y.attrs=P,Y.componentStyle=Z,Y.displayName=S,Y.shouldForwardProp=k,Y.foldedComponentIds=r?Ra(d.foldedComponentIds,d.styledComponentId):"",Y.styledComponentId=L,Y.target=r?d.target:n,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=r?(function(F){for(var X=[],H=1;H<arguments.length;H++)X[H-1]=arguments[H];for(var W=0,mt=X;W<mt.length;W++)Po(F,mt[W],!0);return F})({},d.defaultProps,q):q}}),gf(Y,function(){return".".concat(Y.styledComponentId)}),p&&Op(Y,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function Fh(n,c){for(var f=[n[0]],r=0,d=c.length;r<d;r+=1)f.push(c[r],n[r+1]);return f}var Ih=function(n){return Object.assign(n,{isCss:!0})};function lt(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];if(Ua(n)||Ru(n))return Ih(ua(Fh(vf,Mu([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?ua(r):Ih(ua(Fh(r,c)))}function nf(n,c,f){if(f===void 0&&(f=Mn),!c)throw Ha(1,c);var r=function(d){for(var p=[],g=1;g<arguments.length;g++)p[g-1]=arguments[g];return n(c,f,lt.apply(void 0,Mu([d],p,!1)))};return r.attrs=function(d){return nf(n,c,re(re({},f),{attrs:Array.prototype.concat(f.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return nf(n,c,re(re({},f),d))},r}var Up=function(n){return nf(Ug,n)},Q=Up;xp.forEach(function(n){Q[n]=Up(n)});var Hg=(function(){function n(c,f){this.rules=c,this.componentId=f,this.isStatic=Bp(c),hc.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,f,r,d){var p=d(Io(ua(this.rules,f,r,d)),""),g=this.componentId+c;r.insertRules(g,g,p)},n.prototype.removeStyles=function(c,f){f.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,f,r,d){c>2&&hc.registerId(this.componentId+c);var p=this.componentId+c;this.isStatic?r.hasNameForId(p,p)||this.createStyles(c,f,r,d):(this.removeStyles(c,r),this.createStyles(c,f,r,d))},n})();function $g(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];var r=lt.apply(void 0,Mu([n],c,!1)),d="sc-global-".concat(Tp(JSON.stringify(r))),p=new Hg(r,d),g=new WeakMap,D=function(b){var M=af(),S=tl?void 0:z.useContext(Nu),L=g.get(M.styleSheet);if(L===void 0&&(L=M.styleSheet.allocateGSInstance(d),g.set(M.styleSheet,L)),(typeof window>"u"||!M.styleSheet.server)&&y(L,b,M.styleSheet,S,M.stylis),tl||z.useLayoutEffect(function(){return M.styleSheet.server||y(L,b,M.styleSheet,S,M.stylis),function(){var J;p.removeStyles(L,M.styleSheet),J=M.styleSheet.options.target,typeof document<"u"&&(J??document).querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(I){return I.remove()})}},[L,b,M.styleSheet,S,M.stylis]),tl){var P=d+L,k=typeof window>"u"?M.styleSheet.getTag().getGroup(Dn(P)):"";if(k)return z.createElement("style",{key:"".concat(d,"-").concat(L),"data-styled-global":d,children:k})}return null};function y(b,M,S,L,P){if(p.isStatic)p.renderStyles(b,lg,S,P);else{var k=re(re({},M),{theme:Sp(M,L,D.defaultProps)});p.renderStyles(b,k,S,P)}}return z.memo(D)}const yf="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Af="inset 2px 2px 3px rgba(0,0,0,0.2)",el=()=>lt`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,ll=({background:n="material",color:c="materialText"}={})=>lt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:f})=>f[n]};
  color: ${({theme:f})=>f[c]};
`,Uu=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:f=2})=>lt`
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
  background-size: ${`${f*2}px ${f*2}px`};
  background-position: 0 0, ${`${f}px ${f}px`};
`,$a=()=>lt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,zn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},jg=({theme:n,topLeftInner:c,bottomRightInner:f,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?yf:!1,d?Af:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,f!==null?`inset -1px -1px 0 1px ${n[f]}`:!1].filter(Boolean).join(", "),Wt=({invert:n=!1,style:c="button"}={})=>{const f={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return lt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[zn[c][f.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[zn[c][f.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[zn[c][f.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[zn[c][f.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>jg({theme:r,topLeftInner:zn[c][f.topLeftInner],bottomRightInner:zn[c][f.bottomRightInner],hasShadow:d})};
  `},wn=()=>lt`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,Lg=n=>Buffer.from(n).toString("base64"),Qg=typeof btoa<"u"?btoa:Lg,tc=(n,c=0)=>{const f=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Qg(f)})`},Sf=(n="default")=>lt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>Uu({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${ll()}
    ${n==="flat"?$a():Wt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${ll()}
    ${n==="flat"?$a():Wt({style:"window"})}
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
    ${n==="default"?Wt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:c})=>tc(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>tc(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>tc(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>tc(c.materialText,0)};
  }
`,qg=Q.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,rc=w.forwardRef(({children:n,underline:c=!0,...f},r)=>z.createElement(qg,{ref:r,underline:c,...f},n));rc.displayName="Anchor";const Gg=Q.header`
  ${Wt()};
  ${ll()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Hp=w.forwardRef(({children:n,fixed:c=!0,position:f="fixed",...r},d)=>z.createElement(Gg,{fixed:c,position:c!==!1?f:void 0,ref:d,...r},n));Hp.displayName="AppBar";const ja=()=>{};function Na(n,c,f){return f!==null&&n>f?f:c!==null&&n<c?c:n}function Yg(n){if(Math.abs(n)<1){const f=n.toExponential().split("e-"),r=f[0].split(".")[1];return(r?r.length:0)+parseInt(f[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function Ph(n,c,f){const r=Math.round((n-f)/c)*c+f;return Number(r.toFixed(Yg(c)))}function ia(n){return typeof n=="number"?`${n}px`:n}const kg=Q.div`
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
`,Xg=Q.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,$p=w.forwardRef(({alt:n="",children:c,noBorder:f=!1,size:r=35,square:d=!1,src:p,...g},D)=>z.createElement(kg,{noBorder:f,ref:D,size:ia(r),square:d,src:p,...g},p?z.createElement(Xg,{src:p,alt:n}):c));$p.displayName="Avatar";const pe={sm:"28px",md:"36px",lg:"44px"},Vg=lt`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>pe[n]};
  width: ${({fullWidth:n,size:c="md",square:f})=>n?"100%":f?pe[c]:"auto"};
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
`,Ac=Q.button`
  ${({active:n,disabled:c,primary:f,theme:r,variant:d})=>d==="flat"?lt`
          ${$a()}
          ${f?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!c&&wn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?lt`
          ${ll()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!n&&Wt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Wt({style:"buttonThinPressed"})}
          }
          ${n&&Wt({style:"buttonThinPressed"})}
          ${c&&el()}
        `:lt`
          ${ll()};
          border: none;
          ${c&&el()}
          ${n?Uu({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${f?lt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:lt`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Wt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&Wt({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!c&&wn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Vg}
`,wl=w.forwardRef(({onClick:n,disabled:c=!1,children:f,type:r="button",fullWidth:d=!1,size:p="md",square:g=!1,active:D=!1,onTouchStart:y=ja,primary:b=!1,variant:M="default",...S},L)=>z.createElement(Ac,{active:D,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:y,primary:b,ref:L,size:p,square:g,type:r,variant:M,...S},f));wl.displayName="Button";function ca({defaultValue:n,onChange:c,onChangePropName:f="onChange",readOnly:r,value:d,valuePropName:p="value"}){const g=d!==void 0,[D,y]=w.useState(n),b=w.useCallback(M=>{g||y(M)},[g]);if(g&&typeof c!="function"&&!r){const M=`Warning: You provided a \`${p}\` prop to a component without an \`${f}\` handler.${p==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${f}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${f}\` function that updates \`${p}\`.`}`;console.warn(M)}return[g?d:D,b]}const uf=Q.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>pe[n.size]};
  width: ${n=>n.square?pe[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>pe[n.size]};
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
  ${n=>n.$disabled&&el()}
`,oc=w.forwardRef(({size:n="lg",disabled:c,square:f,children:r,onClick:d,primary:p,...g},D)=>z.createElement(uf,{$disabled:c,size:n,square:f,onClick:c?void 0:d,primary:p,role:"menuitem",ref:D,"aria-disabled":c,...g},r));oc.displayName="MenuListItem";const jp=Q.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Wt({style:"window"})}
  ${ll()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;jp.displayName="MenuList";const rl=20,pc=Q.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${rl}px;
  height: ${rl}px;
  opacity: 0;
  z-index: -1;
`,xf=Q.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&el()}

  ${uf} & {
    margin: 0;
    height: 100%;
  }
  ${uf}:hover & {
    ${({$disabled:n,theme:c})=>!n&&lt`
        color: ${c.materialTextInvert};
      `};
  }
`,Ef=Q.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${pc}:focus ~ & {
    ${wn}
  }
  ${pc}:not(:disabled) ~ &:active {
    ${wn}
  }
`,ol=Q.div`
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
    ${n=>n.shadow&&`box-shadow:${Af};`}
  }
`,Zg=Q.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Sf()}
`,Lp=w.forwardRef(({children:n,shadow:c=!0,...f},r)=>z.createElement(ol,{ref:r,shadow:c,...f},z.createElement(Zg,null,n)));Lp.displayName="ScrollView";const Qp=lt`
  width: ${rl}px;
  height: ${rl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Kg=Q(ol)`
  ${Qp}
  width: ${rl}px;
  height: ${rl}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,Jg=Q.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${Qp}
  width: ${rl-4}px;
  height: ${rl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,Wg=Q.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Fg=Q.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>Uu({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Ig={flat:Jg,default:Kg},Pg=w.forwardRef(({checked:n,className:c="",defaultChecked:f=!1,disabled:r=!1,indeterminate:d=!1,label:p="",onChange:g=ja,style:D={},value:y,variant:b="default",...M},S)=>{var L;const[P,k]=ca({defaultValue:f,onChange:g,readOnly:(L=M.readOnly)!==null&&L!==void 0?L:r,value:n}),J=w.useCallback(K=>{const Y=K.target.checked;k(Y),g(K)},[g,k]),I=Ig[b];let Z=null;return d?Z=Fg:P&&(Z=Wg),z.createElement(xf,{$disabled:r,className:c,style:D},z.createElement(pc,{disabled:r,onChange:r?void 0:J,readOnly:r,type:"checkbox",value:y,checked:P,"data-indeterminate":d,ref:S,...M}),z.createElement(I,{$disabled:r,role:"presentation"},Z&&z.createElement(Z,{$disabled:r,variant:b})),p&&z.createElement(Ef,null,p))});Pg.displayName="Checkbox";const Tf=Q.div`
  ${({orientation:n,theme:c,size:f="100%"})=>n==="vertical"?`
    height: ${ia(f)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${ia(f)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;Tf.displayName="Separator";const ty=Q(Ac)`
  padding-left: 8px;
`,ey=Q(Tf)`
  height: 21px;
  position: relative;
  top: 0;
`,qp=Q.input`
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
`,ly=Q.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?lt`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:lt`
          border: 2px solid ${({theme:c})=>c.materialText};
        `}
  ${qp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wn}
    outline-offset: -8px;
  }
`,ay=Q.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?lt`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:lt`
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
`,ny=w.forwardRef(({value:n,defaultValue:c,onChange:f=ja,disabled:r=!1,variant:d="default",...p},g)=>{var D;const[y,b]=ca({defaultValue:c,onChange:f,readOnly:(D=p.readOnly)!==null&&D!==void 0?D:r,value:n}),M=S=>{const L=S.target.value;b(L),f(S)};return z.createElement(ty,{disabled:r,as:"div",variant:d,size:"md"},z.createElement(qp,{onChange:M,readOnly:r,disabled:r,value:y??"#008080",type:"color",ref:g,...p}),z.createElement(ly,{$disabled:r,color:y??"#008080",role:"presentation"}),d==="default"&&z.createElement(ey,{orientation:"vertical"}),z.createElement(ay,{$disabled:r,variant:d}))});ny.displayName="ColorInput";const uy=Q.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>lt`
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
      ${Uu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,tp=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],iy=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function cy({digit:n=0,pixelSize:c=2,...f}){const r=iy[Number(n)].map((d,p)=>d?`${tp[p]} active`:tp[p]);return z.createElement(uy,{pixelSize:c,...f},r.map((d,p)=>z.createElement("span",{className:d,key:p})))}const ry=Q.div`
  ${Wt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,oy={sm:1,md:2,lg:3,xl:4},cf=w.forwardRef(({value:n=0,minLength:c=3,size:f="md",...r},d)=>{const p=w.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return z.createElement(ry,{ref:d,...r},p.map((g,D)=>z.createElement(cy,{digit:g,pixelSize:oy[f],key:D})))});cf.displayName="Counter";const Gp=lt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${pe.md};
`,fy=Q(ol).attrs({"data-testid":"variant-default"})`
  ${Gp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,sy=Q.div.attrs({"data-testid":"variant-flat"})`
  ${$a()}
  ${Gp}
  position: relative;
`,Yp=lt`
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
  ${({disabled:n,variant:c})=>c!=="flat"&&n&&el()}
`,dy=Q.input`
  ${Yp}
  padding: 0 8px;
`,hy=Q.textarea`
  ${Yp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>Sf(n)}
`,zf=w.forwardRef(({className:n,disabled:c=!1,fullWidth:f,onChange:r=ja,shadow:d=!0,style:p,variant:g="default",...D},y)=>{const b=g==="flat"?sy:fy,M=w.useMemo(()=>{var S;return D.multiline?z.createElement(hy,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:y,variant:g,...D}):z.createElement(dy,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:y,type:(S=D.type)!==null&&S!==void 0?S:"text",variant:g,...D})},[c,r,D,y,g]);return z.createElement(b,{className:n,fullWidth:f,$disabled:c,shadow:d,style:p},M)});zf.displayName="TextInput";const py=Q.div`
  display: inline-flex;
  align-items: center;
`,rf=Q(wl)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?lt`
          height: calc(50% - 1px);
        `:lt`
          height: 50%;
        `}
`,my=Q.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?lt`
          height: calc(${pe.md} - 4px);
        `:lt`
          height: ${pe.md};
          margin-left: 2px;
        `}
`,ep=Q.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?lt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:lt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${rf}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?lt`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:lt`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,kp=w.forwardRef(({className:n,defaultValue:c,disabled:f=!1,max:r,min:d,onChange:p,readOnly:g,step:D=1,style:y,value:b,variant:M="default",width:S,...L},P)=>{const[k,J]=ca({defaultValue:c,onChange:p,readOnly:g,value:b}),I=w.useCallback(X=>{const H=parseFloat(X.target.value);J(H)},[J]),Z=w.useCallback(X=>{const H=Na(parseFloat(((k??0)+X).toFixed(2)),d??null,r??null);J(H),p?.(H)},[r,d,p,J,k]),K=w.useCallback(()=>{k!==void 0&&p?.(k)},[p,k]),Y=w.useCallback(()=>{Z(D)},[Z,D]),q=w.useCallback(()=>{Z(-D)},[Z,D]),F=M==="flat"?"flat":"raised";return z.createElement(py,{className:n,style:{...y,width:S!==void 0?ia(S):"auto"},...L},z.createElement(zf,{value:k,variant:M,onChange:I,disabled:f,type:"number",readOnly:g,ref:P,fullWidth:!0,onBlur:K}),z.createElement(my,{variant:M},z.createElement(rf,{"data-testid":"increment",variant:F,disabled:f||g,onClick:Y},z.createElement(ep,{invert:!0})),z.createElement(rf,{"data-testid":"decrement",variant:F,disabled:f||g,onClick:q},z.createElement(ep,null))))});kp.displayName="NumberInput";function vy(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let f=0;f<10;f+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const Xp=n=>w.useMemo(()=>vy(),[n]),Vp=lt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Zp=lt`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,Df=Q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,by=Q.div`
  ${Vp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Df}:focus & {
    ${Zp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Kp=lt`
  height: ${pe.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?el():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,gy=Q(ol)`
  ${Kp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,yy=Q.div`
  ${$a()}
  ${Kp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,Ay=Q.select`
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
  ${Vp}
  cursor: pointer;
  &:disabled {
    ${el()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Jp=Q(Ac).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?lt`
          height: 100%;
          margin-right: 0;
        `:lt`
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
`,Sy=Q.span`
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
  ${Jp}:active & {
    margin-top: 2px;
  }
`,xy=Q.ul`
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
  box-shadow: ${yf};
  ${({variant:n="default"})=>n==="flat"?lt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:lt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>Sf(n)}
`,Ey=Q.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${pe.md} - 4px);
  line-height: calc(${pe.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?Zp:""}
  user-select: none;
`,Ty=[],Wp=({className:n,defaultValue:c,disabled:f,native:r,onChange:d,options:p=Ty,readOnly:g,style:D,value:y,variant:b,width:M})=>{var S;const L=w.useMemo(()=>p.filter(Boolean),[p]),[P,k]=ca({defaultValue:c??((S=L?.[0])===null||S===void 0?void 0:S.value),onChange:d,readOnly:g,value:y}),J=!(f||g),I=w.useMemo(()=>({className:n,style:{...D,width:M}}),[n,D,M]),Z=w.useMemo(()=>z.createElement(Jp,{as:"div","data-testid":"select-button",$disabled:f,native:r,tabIndex:-1,variant:b==="flat"?"flat":"raised"},z.createElement(Sy,{"data-testid":"select-icon",$disabled:f})),[f,r,b]),K=w.useMemo(()=>b==="flat"?yy:gy,[b]);return w.useMemo(()=>({isEnabled:J,options:L,value:P,setValue:k,wrapperProps:I,DropdownButton:Z,Wrapper:K}),[Z,K,J,L,k,P,I])},zy={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Dy=1e3,Cy=({onBlur:n,onChange:c,onClose:f,onFocus:r,onKeyDown:d,onMouseDown:p,onOpen:g,open:D,options:y,readOnly:b,value:M,selectRef:S,setValue:L,wrapperRef:P})=>{const k=w.useRef(null),J=w.useRef([]),I=w.useRef(0),Z=w.useRef(0),K=w.useRef(),Y=w.useRef("search"),q=w.useRef(""),F=w.useRef(),[X,H]=ca({defaultValue:!1,onChange:g,onChangePropName:"onOpen",readOnly:b,value:D,valuePropName:"open"}),W=w.useMemo(()=>{const $=y.findIndex(dt=>dt.value===M);return I.current=Na($,0,null),y[$]},[y,M]),[mt,Rt]=w.useState(y[0]),ct=w.useCallback($=>{const dt=k.current,vt=J.current[$];if(!vt||!dt){K.current=$;return}K.current=void 0;const At=dt.clientHeight,Nt=dt.scrollTop,Ht=dt.scrollTop+At,$t=vt.offsetTop,me=vt.offsetHeight,Ke=vt.offsetTop+vt.offsetHeight;$t<Nt&&dt.scrollTo(0,$t),Ke>Ht&&dt.scrollTo(0,$t-At+me),vt.focus({preventScroll:!0})},[k]),st=w.useCallback(($,{scroll:dt}={})=>{var vt;const At=y.length-1;let Nt;switch($){case"first":{Nt=0;break}case"last":{Nt=At;break}case"next":{Nt=Na(Z.current+1,0,At);break}case"previous":{Nt=Na(Z.current-1,0,At);break}case"selected":{Nt=Na((vt=I.current)!==null&&vt!==void 0?vt:0,0,At);break}default:Nt=$}Z.current=Nt,Rt(y[Nt]),dt&&ct(Nt)},[Z,y,ct]),Ct=w.useCallback(({fromEvent:$})=>{H(!0),st("selected",{scroll:!0}),g?.({fromEvent:$})},[st,g,H]),_t=w.useCallback(()=>{Y.current="search",q.current="",clearTimeout(F.current)},[]),Et=w.useCallback(({focusSelect:$,fromEvent:dt})=>{var vt;f?.({fromEvent:dt}),H(!1),Rt(y[0]),_t(),K.current=void 0,$&&((vt=S.current)===null||vt===void 0||vt.focus())},[_t,f,y,S,H]),O=w.useCallback(({fromEvent:$})=>{X?Et({focusSelect:!1,fromEvent:$}):Ct({fromEvent:$})},[Et,Ct,X]),G=w.useCallback(($,{fromEvent:dt})=>{I.current!==$&&(I.current=$,L(y[$].value),c?.(y[$],{fromEvent:dt}))},[c,y,L]),V=w.useCallback(({focusSelect:$,fromEvent:dt})=>{G(Z.current,{fromEvent:dt}),Et({focusSelect:$,fromEvent:dt})},[Et,G]),it=w.useCallback(($,{fromEvent:dt,select:vt})=>{var At;switch(Y.current==="cycleFirstLetter"&&$!==q.current&&(Y.current="search"),$===q.current?Y.current="cycleFirstLetter":q.current+=$,Y.current){case"search":{let Nt=y.findIndex(Ht=>{var $t;return(($t=Ht.label)===null||$t===void 0?void 0:$t.toLocaleUpperCase().indexOf(q.current))===0});Nt<0&&(Nt=y.findIndex(Ht=>{var $t;return(($t=Ht.label)===null||$t===void 0?void 0:$t.toLocaleUpperCase().indexOf($))===0}),q.current=$),Nt>=0&&(vt?G(Nt,{fromEvent:dt}):st(Nt,{scroll:!0}));break}case"cycleFirstLetter":{const Nt=vt?(At=I.current)!==null&&At!==void 0?At:-1:Z.current;let Ht=y.findIndex(($t,me)=>{var Ke;return me>Nt&&((Ke=$t.label)===null||Ke===void 0?void 0:Ke.toLocaleUpperCase().indexOf($))===0});Ht<0&&(Ht=y.findIndex($t=>{var me;return((me=$t.label)===null||me===void 0?void 0:me.toLocaleUpperCase().indexOf($))===0})),Ht>=0&&(vt?G(Ht,{fromEvent:dt}):st(Ht,{scroll:!0}));break}}clearTimeout(F.current),F.current=setTimeout(()=>{Y.current==="search"&&(q.current="")},Dy)},[st,y,G]),ht=w.useCallback($=>{var dt;$.button===0&&($.preventDefault(),(dt=S.current)===null||dt===void 0||dt.focus(),O({fromEvent:$}),p?.($))},[p,S,O]),m=w.useCallback($=>{V({focusSelect:!0,fromEvent:$})},[V]),_=w.useCallback($=>{const{altKey:dt,code:vt,ctrlKey:At,metaKey:Nt,shiftKey:Ht}=$,{ARROW_DOWN:$t,ARROW_UP:me,END:Ke,ENTER:al,ESC:He,HOME:ra,SPACE:oa,TAB:fa}=zy,Hu=dt||At||Nt||Ht;if(!(vt===fa&&(dt||At||Nt)||vt!==fa&&Hu))switch(vt){case $t:{if($.preventDefault(),!X){Ct({fromEvent:$});return}st("next",{scroll:!0});break}case me:{if($.preventDefault(),!X){Ct({fromEvent:$});return}st("previous",{scroll:!0});break}case Ke:{if($.preventDefault(),!X){Ct({fromEvent:$});return}st("last",{scroll:!0});break}case al:{if(!X)return;$.preventDefault(),V({focusSelect:!0,fromEvent:$});break}case He:{if(!X)return;$.preventDefault(),Et({focusSelect:!0,fromEvent:$});break}case ra:{if($.preventDefault(),!X){Ct({fromEvent:$});return}st("first",{scroll:!0});break}case oa:{$.preventDefault(),X?V({focusSelect:!0,fromEvent:$}):Ct({fromEvent:$});break}case fa:{if(!X)return;Ht||$.preventDefault(),V({focusSelect:!Ht,fromEvent:$});break}default:!Hu&&vt.match(/^Key/)&&($.preventDefault(),$.stopPropagation(),it(vt.replace(/^Key/,""),{select:!X,fromEvent:$}))}},[st,Et,X,Ct,it,V]),B=w.useCallback($=>{_($),d?.($)},[_,d]),j=w.useCallback($=>{st($)},[st]),tt=w.useCallback($=>{X||(_t(),n?.($))},[_t,n,X]),et=w.useCallback($=>{_t(),r?.($)},[_t,r]),nt=w.useCallback($=>{k.current=$,K.current!==void 0&&ct(K.current)},[ct]),Ot=w.useCallback(($,dt)=>{J.current[dt]=$,K.current===dt&&ct(K.current)},[ct]);return w.useEffect(()=>{if(!X)return()=>{};const $=dt=>{var vt;const At=dt.target;!((vt=P.current)===null||vt===void 0)&&vt.contains(At)||(dt.preventDefault(),Et({focusSelect:!1,fromEvent:dt}))};return document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}},[Et,X,P]),w.useMemo(()=>({activeOption:mt,handleActivateOptionIndex:j,handleBlur:tt,handleButtonKeyDown:B,handleDropdownKeyDown:_,handleFocus:et,handleMouseDown:ht,handleOptionClick:m,handleSetDropdownRef:nt,handleSetOptionRef:Ot,open:X,selectedOption:W}),[mt,j,tt,B,et,_,ht,m,nt,Ot,X,W])},Oy=w.forwardRef(({className:n,defaultValue:c,disabled:f,onChange:r,options:d,readOnly:p,style:g,value:D,variant:y,width:b,...M},S)=>{const{isEnabled:L,options:P,setValue:k,value:J,DropdownButton:I,Wrapper:Z}=Wp({defaultValue:c,disabled:f,native:!0,onChange:r,options:d,readOnly:p,value:D,variant:y}),K=w.useCallback(Y=>{const q=P.find(F=>F.value===Y.target.value);q&&(k(q.value),r?.(q,{fromEvent:Y}))},[r,P,k]);return z.createElement(Z,{className:n,style:{...g,width:b}},z.createElement(Df,null,z.createElement(Ay,{...M,disabled:f,onChange:L?K:ja,ref:S,value:J},P.map((Y,q)=>{var F;return z.createElement("option",{key:`${Y.value}-${q}`,value:Y.value},(F=Y.label)!==null&&F!==void 0?F:Y.value)})),I))});Oy.displayName="SelectNative";function _y({activateOptionIndex:n,active:c,index:f,onClick:r,option:d,selected:p,setRef:g}){const D=w.useCallback(()=>{n(f)},[n,f]),y=w.useCallback(M=>{g(M,f)},[f,g]),b=Xp();return z.createElement(Ey,{active:c,"aria-selected":p?"true":void 0,"data-value":d.value,id:b,onClick:r,onMouseEnter:D,ref:y,role:"option",tabIndex:0},d.label)}function My({"aria-label":n,"aria-labelledby":c,className:f,defaultValue:r,disabled:d=!1,formatDisplay:p,inputProps:g,labelId:D,menuMaxHeight:y,name:b,onBlur:M,onChange:S,onClose:L,onFocus:P,onKeyDown:k,onMouseDown:J,onOpen:I,open:Z,options:K,readOnly:Y,shadow:q=!0,style:F,variant:X="default",value:H,width:W="auto",...mt},Rt){const{isEnabled:ct,options:st,setValue:Ct,value:_t,wrapperProps:Et,DropdownButton:O,Wrapper:G}=Wp({className:f,defaultValue:r,disabled:d,native:!1,onChange:S,options:K,style:F,readOnly:Y,value:H,variant:X,width:W}),V=w.useRef(null),it=w.useRef(null),ht=w.useRef(null),{activeOption:m,handleActivateOptionIndex:_,handleBlur:B,handleButtonKeyDown:j,handleDropdownKeyDown:tt,handleFocus:et,handleMouseDown:nt,handleOptionClick:Ot,handleSetDropdownRef:$,handleSetOptionRef:dt,open:vt,selectedOption:At}=Cy({onBlur:M,onChange:S,onClose:L,onFocus:P,onKeyDown:k,onMouseDown:J,onOpen:I,open:Z,options:st,value:_t,selectRef:it,setValue:Ct,wrapperRef:ht});w.useImperativeHandle(Rt,()=>({focus:al=>{var He;(He=it.current)===null||He===void 0||He.focus(al)},node:V.current,value:String(_t)}),[_t]);const Nt=w.useMemo(()=>At?typeof p=="function"?p(At):At.label:"",[p,At]),Ht=ct?1:void 0,$t=w.useMemo(()=>y?{overflow:"auto",maxHeight:y}:void 0,[y]),me=Xp(),Ke=w.useMemo(()=>st.map((al,He)=>{const ra=`${_t}-${He}`,oa=al===m,fa=al===At;return z.createElement(_y,{activateOptionIndex:_,active:oa,index:He,key:ra,onClick:Ot,option:al,selected:fa,setRef:dt})}),[m,_,Ot,dt,st,At,_t]);return z.createElement(G,{...Et,$disabled:d,ref:ht,shadow:q,style:{...F,width:W}},z.createElement("input",{name:b,ref:V,type:"hidden",value:String(_t),...g}),z.createElement(Df,{"aria-disabled":d,"aria-expanded":vt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??D,"aria-owns":ct&&vt?me:void 0,onBlur:B,onFocus:et,onKeyDown:j,onMouseDown:ct?nt:J,ref:it,role:"button",tabIndex:Ht,...mt},z.createElement(by,null,Nt),O),ct&&vt&&z.createElement(xy,{id:me,onKeyDown:tt,ref:$,role:"listbox",style:$t,tabIndex:0,variant:X},Ke))}const Fp=w.forwardRef(My);Fp.displayName="Select";const wy=Q.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,Bu=w.forwardRef(function({children:c,noPadding:f=!1,...r},d){return z.createElement(wy,{noPadding:f,ref:d,...r},c)});Bu.displayName="Toolbar";const Ry=Q.div`
  padding: 16px;
`,Cf=w.forwardRef(function({children:c,...f},r){return z.createElement(Ry,{ref:r,...f},c)});Cf.displayName="WindowContent";const Ny=Q.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?lt`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:lt`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${Ac} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Of=w.forwardRef(function({active:c=!0,children:f,...r},d){return z.createElement(Ny,{active:c,ref:d,...r},f)});Of.displayName="WindowHeader";const By=Q.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Wt({style:"window"})}
  ${ll()}
`,Uy=Q.span`
  ${({theme:n})=>lt`
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
`,_f=w.forwardRef(({children:n,resizable:c=!1,resizeRef:f,shadow:r=!0,...d},p)=>z.createElement(By,{ref:p,shadow:r,...d},n,c&&z.createElement(Uy,{"data-testid":"resizeHandle",ref:f})));_f.displayName="Window";const Hy=Q(Lp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,$y=Q.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,jy=Q.div`
  display: flex;
  flex-wrap: wrap;
`,Ol=Q.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Ly=Q.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,Qy=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function qy(n,c){return new Date(n,c+1,0).getDate()}function Gy(n,c,f){return new Date(n,c,f).getDay()}function Yy(n){const c=new Date(Date.parse(n)),f=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:f,month:r,year:d}}const ky=w.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:f,onCancel:r,shadow:d=!0},p)=>{const[g,D]=w.useState(()=>Yy(c)),{year:y,month:b,day:M}=g,S=w.useCallback(({value:I})=>{D(Z=>({...Z,month:I}))},[]),L=w.useCallback(I=>{D(Z=>({...Z,year:I}))},[]),P=w.useCallback(I=>{D(Z=>({...Z,day:I}))},[]),k=w.useCallback(()=>{const I=[g.year,g.month+1,g.day].map(Z=>String(Z).padStart(2,"0")).join("-");f?.(I)},[g.day,g.month,g.year,f]),J=w.useMemo(()=>{const I=Array.from({length:42}),Z=Gy(y,b,1);let K=M;const Y=qy(y,b);return K=K<Y?K:Y,I.forEach((q,F)=>{if(F>=Z&&F<Y+Z){const X=F-Z+1;I[F]=z.createElement(Ol,{key:F,onClick:()=>{P(X)}},z.createElement(Ly,{active:X===K},X))}else I[F]=z.createElement(Ol,{key:F})}),I},[M,P,b,y]);return z.createElement(_f,{className:n,ref:p,shadow:d,style:{margin:20}},z.createElement(Of,null,z.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),z.createElement(Cf,null,z.createElement(Bu,{noPadding:!0,style:{justifyContent:"space-between"}},z.createElement(Fp,{options:Qy,value:b,onChange:S,width:128,menuMaxHeight:200}),z.createElement(kp,{value:y,onChange:L,width:100})),z.createElement(Hy,null,z.createElement($y,null,z.createElement(Ol,null,"S"),z.createElement(Ol,null,"M"),z.createElement(Ol,null,"T"),z.createElement(Ol,null,"W"),z.createElement(Ol,null,"T"),z.createElement(Ol,null,"F"),z.createElement(Ol,null,"S")),z.createElement(jy,null,J)),z.createElement(Bu,{noPadding:!0,style:{justifyContent:"space-between"}},z.createElement(wl,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),z.createElement(wl,{fullWidth:!0,onClick:f?k:void 0,disabled:!f},"OK"))))});ky.displayName="DatePicker";const Xy=n=>{switch(n){case"status":case"well":return lt`
        ${Wt({style:"status"})}
      `;case"window":case"outside":return lt`
        ${Wt({style:"window"})}
      `;case"field":return lt`
        ${Wt({style:"field"})}
      `;default:return lt`
        ${Wt()}
      `}},Vy=Q.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Xy(n)}
  ${({variant:n})=>ll(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Sc=w.forwardRef(({children:n,shadow:c=!1,variant:f="window",...r},d)=>z.createElement(Vy,{ref:d,shadow:c,variant:f,...r},n));Sc.displayName="Frame";const Zy=Q.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&lt`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&el()}
`,Ky=Q.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,fc=w.forwardRef(({label:n,disabled:c=!1,variant:f="default",children:r,...d},p)=>z.createElement(Zy,{"aria-disabled":c,$disabled:c,variant:f,ref:p,...d},n&&z.createElement(Ky,{variant:f},n),r));fc.displayName="GroupBox";const Jy=Q.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${ia(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Jy.displayName="Handle";const Wy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Fy=Q.div`
  display: inline-block;
  height: ${({size:n})=>ia(n)};
  width: ${({size:n})=>ia(n)};
`,Iy=Q.span`
  display: block;
  background: ${Wy};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Py=w.forwardRef(({size:n=30,...c},f)=>z.createElement(Fy,{size:n,ref:f,...c},z.createElement(Iy,null)));Py.displayName="Hourglass";const t1=Q.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,e1=Q.div`
  position: relative;
`,l1=Q.div`
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
`,a1=Q(ol).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,n1=Q.div`
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
`,u1=w.forwardRef(({backgroundStyles:n,children:c,...f},r)=>z.createElement(t1,{ref:r,...f},z.createElement(e1,null,z.createElement(l1,null,z.createElement(a1,{style:n},c)),z.createElement(n1,null))));u1.displayName="Monitor";const i1=Q.div`
  display: inline-block;
  height: ${pe.md};
  width: 100%;
`,c1=Q(ol)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Ip=lt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,r1=Q.div`
  position: relative;
  top: 4px;
  ${Ip}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,o1=Q.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Ip}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,f1=Q.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Pp=17,s1=Q.span`
  display: inline-block;
  width: ${Pp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,d1=w.forwardRef(({hideValue:n=!1,shadow:c=!0,value:f,variant:r="default",...d},p)=>{const g=n?null:`${f}%`,D=w.useRef(null),[y,b]=w.useState([]),M=w.useCallback(()=>{if(!D.current||f===void 0)return;const S=D.current.getBoundingClientRect().width,L=Math.round(f/100*S/Pp);b(Array.from({length:L}))},[f]);return w.useEffect(()=>(M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)),[M]),z.createElement(i1,{"aria-valuenow":f!==void 0?Math.round(f):void 0,ref:p,role:"progressbar",variant:r,...d},z.createElement(c1,{variant:r,shadow:c},r==="default"?z.createElement(z.Fragment,null,z.createElement(r1,{"data-testid":"defaultProgress1"},g),z.createElement(o1,{"data-testid":"defaultProgress2",value:f},g)):z.createElement(f1,{ref:D,"data-testid":"tileProgress"},y.map((S,L)=>z.createElement(s1,{key:L})))))});d1.displayName="ProgressBar";const tm=lt`
  width: ${rl}px;
  height: ${rl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,h1=Q(ol)`
  ${tm}
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
`,p1=Q.div`
  ${$a()}
  ${tm}
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
`,m1=Q.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,v1={flat:p1,default:h1},b1=w.forwardRef(({checked:n,className:c="",disabled:f=!1,label:r="",onChange:d,style:p={},variant:g="default",...D},y)=>{const b=v1[g];return z.createElement(xf,{$disabled:f,className:c,style:p},z.createElement(b,{$disabled:f,role:"presentation"},n&&z.createElement(m1,{$disabled:f,variant:g})),z.createElement(pc,{disabled:f,onChange:f?void 0:d,readOnly:f,type:"radio",checked:n,ref:y,...D}),r&&z.createElement(Ef,null,r))});b1.displayName="Radio";const g1=typeof window<"u"?w.useLayoutEffect:w.useEffect;function _a(n){const c=w.useRef(n);return g1(()=>{c.current=n}),w.useCallback((...f)=>(0,c.current)(...f),[])}function lp(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function ap(n,c){return w.useMemo(()=>n==null&&c==null?null:f=>{lp(n,f),lp(c,f)},[n,c])}var y1=sp();let xc=!0,of=!1,np;const A1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function S1(n){if("type"in n){const{type:c,tagName:f}=n;if(f==="INPUT"&&A1[c]&&!n.readOnly||f==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function x1(n){n.metaKey||n.altKey||n.ctrlKey||(xc=!0)}function Zo(){xc=!1}function E1(){this.visibilityState==="hidden"&&of&&(xc=!0)}function T1(n){n.addEventListener("keydown",x1,!0),n.addEventListener("mousedown",Zo,!0),n.addEventListener("pointerdown",Zo,!0),n.addEventListener("touchstart",Zo,!0),n.addEventListener("visibilitychange",E1,!0)}function z1(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return xc||S1(c)}function D1(){of=!0,window.clearTimeout(np),np=window.setTimeout(()=>{of=!1},100)}function C1(){const n=w.useCallback(c=>{const f=y1.findDOMNode(c);f!=null&&T1(f.ownerDocument)},[]);return{isFocusVisible:z1,onBlurVisible:D1,ref:n}}function O1(n,c,f){return(f-c)*n+c}function ec(n,c){if(c!==void 0&&"changedTouches"in n){for(let f=0;f<n.changedTouches.length;f+=1){const r=n.changedTouches[f];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function lc(n){return n&&n.ownerDocument||document}function _1(n,c){var f;const{index:r}=(f=n.reduce((d,p,g)=>{const D=Math.abs(c-p);return d===null||D<d.distance||D===d.distance?{distance:D,index:g}:d},null))!==null&&f!==void 0?f:{};return r??-1}const M1=Q.div`
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

  ${({orientation:n,size:c})=>n==="vertical"?lt`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:f})=>f?"41px":"39px"};
          }
        `:lt`
          width: ${c};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:f})=>f?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,em=()=>lt`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?lt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:lt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,w1=Q(ol)`
  ${em()}
`,R1=Q(ol)`
  ${em()}

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
`,N1=Q.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?lt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:lt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?lt`
          ${$a()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:lt`
          ${ll()}
          ${Wt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&Uu({mainColor:c.material,secondaryColor:c.borderLightest})}
`,Cn=6,B1=Q.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?lt`
          right: ${-Cn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Cn}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:lt`
          bottom: ${-Cn}px;
          height: ${Cn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&lt`
      ${el()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}
`,U1=Q.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?lt`
          transform: translate(${Cn+2}px, ${Cn+1}px);
        `:lt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,H1=w.forwardRef(({defaultValue:n,disabled:c=!1,marks:f=!1,max:r=100,min:d=0,name:p,onChange:g,onChangeCommitted:D,onMouseDown:y,orientation:b="horizontal",size:M="100%",step:S=1,value:L,variant:P="default",...k},J)=>{const I=P==="flat"?R1:w1,Z=b==="vertical",[K=d,Y]=ca({defaultValue:n,onChange:g??D,value:L}),{isFocusVisible:q,onBlurVisible:F,ref:X}=C1(),[H,W]=w.useState(!1),mt=w.useRef(),Rt=w.useRef(null),ct=ap(X,mt),st=ap(J,ct),Ct=_a(B=>{q(B)&&W(!0)}),_t=_a(()=>{H!==!1&&(W(!1),F())}),Et=w.useRef(),O=w.useMemo(()=>f===!0&&Number.isFinite(S)?[...Array(Math.round((r-d)/S)+1)].map((B,j)=>({label:void 0,value:d+S*j})):Array.isArray(f)?f:[],[f,r,d,S]),G=_a(B=>{const j=(r-d)/10,tt=O.map(Ot=>Ot.value),et=tt.indexOf(K);let nt=0;switch(B.key){case"Home":nt=d;break;case"End":nt=r;break;case"PageUp":S&&(nt=K+j);break;case"PageDown":S&&(nt=K-j);break;case"ArrowRight":case"ArrowUp":S?nt=K+S:nt=tt[et+1]||tt[tt.length-1];break;case"ArrowLeft":case"ArrowDown":S?nt=K-S:nt=tt[et-1]||tt[0];break;default:return}B.preventDefault(),S&&(nt=Ph(nt,S,d)),nt=Na(nt,d,r),Y(nt),W(!0),g?.(nt),D?.(nt)}),V=w.useCallback(B=>{if(!mt.current)return 0;const j=mt.current.getBoundingClientRect();let tt;Z?tt=(j.bottom-B.y)/j.height:tt=(B.x-j.left)/j.width;let et;if(et=O1(tt,d,r),S)et=Ph(et,S,d);else{const nt=O.map($=>$.value),Ot=_1(nt,et);et=nt[Ot]}return et=Na(et,d,r),et},[O,r,d,S,Z]),it=_a(B=>{var j;const tt=ec(B,Et.current);if(!tt)return;const et=V(tt);(j=Rt.current)===null||j===void 0||j.focus(),Y(et),W(!0),g?.(et)}),ht=_a(B=>{const j=ec(B,Et.current);if(!j)return;const tt=V(j);D?.(tt),Et.current=void 0;const et=lc(mt.current);et.removeEventListener("mousemove",it),et.removeEventListener("mouseup",ht),et.removeEventListener("touchmove",it),et.removeEventListener("touchend",ht)}),m=_a(B=>{var j;y?.(B),B.preventDefault(),(j=Rt.current)===null||j===void 0||j.focus(),W(!0);const tt=ec(B,Et.current);if(tt){const nt=V(tt);Y(nt),g?.(nt)}const et=lc(mt.current);et.addEventListener("mousemove",it),et.addEventListener("mouseup",ht)}),_=_a(B=>{var j;B.preventDefault();const tt=B.changedTouches[0];tt!=null&&(Et.current=tt.identifier),(j=Rt.current)===null||j===void 0||j.focus(),W(!0);const et=ec(B,Et.current);if(et){const Ot=V(et);Y(Ot),g?.(Ot)}const nt=lc(mt.current);nt.addEventListener("touchmove",it),nt.addEventListener("touchend",ht)});return w.useEffect(()=>{const{current:B}=mt;B?.addEventListener("touchstart",_);const j=lc(B);return()=>{B?.removeEventListener("touchstart",_),j.removeEventListener("mousemove",it),j.removeEventListener("mouseup",ht),j.removeEventListener("touchmove",it),j.removeEventListener("touchend",ht)}},[ht,it,_]),z.createElement(M1,{$disabled:c,hasMarks:!!O.length,isFocused:H,onMouseDown:m,orientation:b,ref:st,size:ia(M),...k},z.createElement("input",{disabled:c,name:p,type:"hidden",value:K??0}),O&&O.map(B=>z.createElement(B1,{$disabled:c,"data-testid":"tick",key:B.value/(r-d)*100,orientation:b,style:{[Z?"bottom":"left"]:`${(B.value-d)/(r-d)*100}%`}},B.label&&z.createElement(U1,{"aria-hidden":!0,"data-testid":"mark",orientation:b},B.label))),z.createElement(I,{orientation:b,variant:P}),z.createElement(N1,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":b,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":K,onBlur:_t,onFocus:Ct,onKeyDown:G,orientation:b,ref:Rt,role:"slider",style:{[Z?"bottom":"left"]:`${(Z?-100:0)+100*(K-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:P}))});H1.displayName="Slider";const $1=Q.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${Af};
  overflow-y: auto;
`,j1=w.forwardRef(function({children:c,...f},r){return z.createElement($1,{ref:r,...f},c)});j1.displayName="TableBody";const L1=Q.td`
  padding: 0 8px;
`,Q1=w.forwardRef(function({children:c,...f},r){return z.createElement(L1,{ref:r,...f},c)});Q1.displayName="TableDataCell";const q1=Q.thead`
  display: table-header-group;
`,G1=w.forwardRef(function({children:c,...f},r){return z.createElement(q1,{ref:r,...f},c)});G1.displayName="TableHead";const Y1=Q.th`
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
    ${Wt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&lt`
      &:active {
        &:before {
          ${Wt({invert:!0,style:"window"})}
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
  ${({$disabled:n})=>n&&el()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&el()}
  }
`,k1=w.forwardRef(function({disabled:c=!1,children:f,onClick:r,onTouchStart:d=ja,sort:p,...g},D){const y=p==="asc"?"ascending":p==="desc"?"descending":void 0;return z.createElement(Y1,{$disabled:c,"aria-disabled":c,"aria-sort":y,onClick:c?void 0:r,onTouchStart:c?void 0:d,ref:D,...g},z.createElement("div",null,f))});k1.displayName="TableHeadCell";const X1=Q.tr`
  color: inherit;
  display: table-row;
  height: calc(${pe.md} - 2px);
  line-height: calc(${pe.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,V1=w.forwardRef(function({children:c,...f},r){return z.createElement(X1,{ref:r,...f},c)});V1.displayName="TableRow";const Z1=Q.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,K1=Q(ol)`
  &:before {
    box-shadow: none;
  }
`,J1=w.forwardRef(({children:n,...c},f)=>z.createElement(K1,null,z.createElement(Z1,{ref:f,...c},n)));J1.displayName="Table";const W1=Q.button`
  ${ll()}
  ${Wt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${pe.md};
  line-height: ${pe.md};
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
    ${wn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${pe.md} + 4px);
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
`,F1=w.forwardRef(({value:n,onClick:c,selected:f=!1,children:r,...d},p)=>z.createElement(W1,{"aria-selected":f,selected:f,onClick:g=>c?.(n,g),ref:p,role:"tab",...d},r));F1.displayName="Tab";const I1=Q.div`
  ${ll()}
  ${Wt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,P1=w.forwardRef(({children:n,...c},f)=>z.createElement(I1,{ref:f,...c},n));P1.displayName="TabBody";const tA=Q.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,eA=Q.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function lA(n,c){const f=[];for(let r=c;r>0;r-=1)f.push(n.splice(0,Math.ceil(n.length/r)));return f}const aA=w.forwardRef(({value:n,onChange:c=ja,children:f,rows:r=1,...d},p)=>{const g=w.useMemo(()=>{var D;const y=(D=z.Children.map(f,S=>{if(!z.isValidElement(S))return null;const L={selected:S.props.value===n,onClick:c};return z.cloneElement(S,L)}))!==null&&D!==void 0?D:[],b=lA(y,r).map((S,L)=>({key:L,tabs:S})),M=b.findIndex(S=>S.tabs.some(L=>L.props.selected));return b.push(b.splice(M,1)[0]),b},[f,c,r,n]);return z.createElement(tA,{...d,isMultiRow:r>1,role:"tablist",ref:p},g.map(D=>z.createElement(eA,{key:D.key},D.tabs)))});aA.displayName="Tabs";const nA=["blur","focus"],uA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function up(n){return"nativeEvent"in n&&nA.includes(n.type)}function ip(n){return"nativeEvent"in n&&uA.includes(n.type)}const iA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},cA=Q.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${yf};
  text-align: center;
  font-size: 1rem;
  ${n=>iA[n.position]}
`,rA=Q.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,oA=w.forwardRef(({className:n,children:c,disableFocusListener:f=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:p=0,onBlur:g,onClose:D,onFocus:y,onMouseEnter:b,onMouseLeave:M,onOpen:S,style:L,text:P,position:k="top",...J},I)=>{const[Z,K]=w.useState(!1),[Y,q]=w.useState(),[F,X]=w.useState(),H=!f,W=!r,mt=V=>{window.clearTimeout(Y),window.clearTimeout(F);const it=window.setTimeout(()=>{K(!0),S?.(V)},d);q(it)},Rt=V=>{V.persist(),up(V)?y?.(V):ip(V)&&b?.(V),mt(V)},ct=V=>{window.clearTimeout(Y),window.clearTimeout(F);const it=window.setTimeout(()=>{K(!1),D?.(V)},p);X(it)},st=V=>{V.persist(),up(V)?g?.(V):ip(V)&&M?.(V),ct(V)},Ct=H?st:void 0,_t=H?Rt:void 0,Et=W?Rt:void 0,O=W?st:void 0,G=H?0:void 0;return z.createElement(rA,{"data-testid":"tooltip-wrapper",onBlur:Ct,onFocus:_t,onMouseEnter:Et,onMouseLeave:O,tabIndex:G},z.createElement(cA,{className:n,"data-testid":"tooltip",position:k,ref:I,show:Z,style:L,...J},P),c)});oA.displayName="Tooltip";const ff=Q(Ef)`
  white-space: nowrap;
`,lm=lt`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":lt`
          cursor: pointer;

          :focus {
            ${ff} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,fA=Q.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&lt`
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
`,sA=Q.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?lt`
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
        `:lt`
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
`,dA=Q.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,hA=Q.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${lm};

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
`,cp=Q(xf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${lm};
`,pA=Q.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function rp(n,c){return n.includes(c)?n.filter(f=>f!==c):[...n,c]}function op(n){n.preventDefault()}function am({className:n,disabled:c,expanded:f,innerRef:r,level:d,select:p,selected:g,style:D,tree:y=[]}){const b=d===0,M=w.useCallback(S=>{var L,P;const k=!!(S.items&&S.items.length>0),J=f.includes(S.id),I=(L=c||S.disabled)!==null&&L!==void 0?L:!1,Z=I?op:F=>p(F,S),K=I?op:F=>p(F,S),Y=g===S.id,q=z.createElement(pA,{"aria-hidden":!0},S.icon);return z.createElement(sA,{key:S.label,isRootLevel:b,role:"treeitem","aria-expanded":J,"aria-selected":Y,hasItems:k},k?z.createElement(dA,{open:J},z.createElement(hA,{onClick:Z,$disabled:I},z.createElement(cp,{$disabled:I},q,z.createElement(ff,null,S.label))),J&&z.createElement(am,{className:n,disabled:I,expanded:f,level:d+1,select:p,selected:g,style:D,tree:(P=S.items)!==null&&P!==void 0?P:[]})):z.createElement(cp,{as:"button",$disabled:I,onClick:K},q,z.createElement(ff,null,S.label)))},[n,c,f,b,d,p,g,D]);return z.createElement(fA,{className:b?n:void 0,style:b?D:void 0,ref:b?r:void 0,role:b?"tree":"group",isRootLevel:b},y.map(M))}function mA({className:n,defaultExpanded:c=[],defaultSelected:f,disabled:r=!1,expanded:d,onNodeSelect:p,onNodeToggle:g,selected:D,style:y,tree:b=[]},M){const[S,L]=ca({defaultValue:c,onChange:g,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[P,k]=ca({defaultValue:f,onChange:p,onChangePropName:"onNodeSelect",value:D,valuePropName:"selected"}),J=w.useCallback((K,Y)=>{if(g){const q=rp(S,Y);g(K,q)}L(q=>rp(q,Y))},[S,g,L]),I=w.useCallback((K,Y)=>{k(Y),p&&p(K,Y)},[p,k]),Z=w.useCallback((K,Y)=>{K.preventDefault(),I(K,Y.id),Y.items&&Y.items.length&&J(K,Y.id)},[I,J]);return z.createElement(am,{className:n,disabled:r,expanded:S,level:0,innerRef:M,select:Z,selected:P,style:y,tree:b})}const vA=w.forwardRef(mA);vA.displayName="TreeView";const bA="/assets/dcg_santa-cruz_logo-CfPtDLvT.png";var Ko,fp;function gA(){if(fp)return Ko;fp=1;var n={name:"vaporTeal",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLightest:"#58ffff",canvas:"#98DFEA",canvasText:"#000000",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#00706f",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#FCF6BD",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",hoverBackground:"#FF99C8",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",tooltip:"#fefbcc"};return Ko=n,Ko}var yA=gA();const AA=sf(yA),SA="/assets/ms_sans_serif-Du8rjN1q.woff2",xA="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",EA=$g`
  ${Bb}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${SA}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${xA}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
    font-family: monospace;
  }
`;function TA(){const[n,c]=w.useState(!1);return ft.jsx(Hp,{children:ft.jsxs(Bu,{style:{justifyContent:"space-between"},children:[ft.jsxs("div",{style:{position:"relative",display:"absolute"},children:[ft.jsx(wl,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:"Start"}),n&&ft.jsxs(jp,{style:{position:"absolute",left:"0",top:"100%"},onClick:()=>c(!1),children:[ft.jsx(oc,{children:ft.jsx("span",{role:"img","aria-label":"👨‍💻",children:"👨‍💻 Made with"})}),ft.jsx(oc,{children:ft.jsx("span",{role:"img","aria-label":"📁",children:"📁 React95"})}),ft.jsx(Tf,{}),ft.jsxs(oc,{disabled:!0,children:[ft.jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]})]})]}),ft.jsx(zf,{placeholder:"Search...",width:150})]})})}function zA(){return ft.jsx(Sc,{className:"logo",children:ft.jsx($p,{noBorder:!0,square:!0,size:150,src:bA})})}function DA(){const[n,c]=w.useState(0),f=()=>c(n+1);return ft.jsxs(Sc,{className:"counter",children:[ft.jsx(cf,{value:831,minLength:5,size:"lg"}),ft.jsxs("div",{className:"interactive-counter",children:[ft.jsx(cf,{value:n,minLength:3}),ft.jsx(wl,{onClick:f,children:"Click!"})]})]})}const CA=()=>ft.jsxs("div",{className:"screen",children:[ft.jsx(EA,{}),ft.jsxs(Bg,{theme:AA,children:[ft.jsx(TA,{}),ft.jsxs(_f,{resizable:!0,className:"window",children:[ft.jsx(Of,{className:"window-title",children:ft.jsx("span",{children:"DCG-Santa-Cruz.exe"})}),ft.jsxs(Bu,{children:[ft.jsx(wl,{variant:"menu",size:"sm",children:"File"}),ft.jsx(wl,{variant:"menu",size:"sm",children:"Edit"}),ft.jsx(wl,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),ft.jsxs(Cf,{children:[ft.jsx(fc,{label:"Welcome to DCG Santa Cruz",children:"Formerly DC831 and now under new management, this DEF CON Group's goal is to build a DEF CON mindset year round, uniting ethical hackers who may or may not frequent the larger DEF CON hacker conference annually in Las Vegas, NV."}),ft.jsx("br",{}),ft.jsx(fc,{label:"Our Mission",children:"Share knowledge, skillsets, and passion for making and hacking in a safe, inclusive space for all levels – from first-timers to seasoned InfoSec professionals. Whether you are into lockpicking, hardware hacking, OSINT, reverse engineering, red teaming or blue teaming - there is a place for you here."}),ft.jsx("br",{}),ft.jsxs(fc,{label:"Join Us",children:["Interested in joining our band of merry hackers?",ft.jsx("br",{}),ft.jsx("br",{}),"Check out our ",ft.jsx(rc,{href:"https://discord.gg/EGGv2sHV",target:"_blank",children:"Discord"}),", or send us an ",ft.jsx(rc,{href:"mailto:dcgsantacruzorg@gmail.com",children:"email"}),"."]}),ft.jsx("br",{}),ft.jsxs(Sc,{variant:"well",className:"footer",children:["Just another ",ft.jsx(rc,{href:"https://forum.defcon.org/social-groups",target:"_blank",children:"DEF CON Group"})]})]})]}),ft.jsxs("div",{children:[ft.jsx(zA,{}),ft.jsx(DA,{})]})]})]});Nb.createRoot(document.getElementById("root")).render(ft.jsx(z.StrictMode,{children:ft.jsx(CA,{})}));
