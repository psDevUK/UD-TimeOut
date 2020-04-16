var UDTimeOut=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(e,t,n){e.exports=n(4)()},function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(3),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e,t,n,r,o,i,u,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,u,a],l=0;(e=Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);h(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function O(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||_}function w(){}function T(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||_}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=O.prototype;var k=T.prototype=new w;k.constructor=T,r(k,O.prototype),k.isPureReactComponent=!0;var j={current:null},E={current:null},I=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r=void 0,o={},u=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)I.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:u,ref:a,props:o,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g,C=[];function D(e,t,n,r){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case u:c=!0}}if(c)return r(o,t,""===n?"."+U(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+U(a=t[l],l);c+=e(a,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=b&&t[b]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(a=t.next()).done;)c+=e(a=a.value,s=n+U(a,l++),r,o);else"object"===a&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?W(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function W(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(R,"$&/")+"/"),M(e,q,t=D(t,i,r,o)),$(t)}function Y(){var e=j.current;return null===e&&g("321"),e}var B={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return W(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,L,t=D(null,null,t,n)),$(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return W(e,t,null,(function(e){return e})),t},only:function(e){return x(e)||g("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:T,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return Y().useCallback(e,t)},useContext:function(e,t){return Y().useContext(e,t)},useEffect:function(e,t){return Y().useEffect(e,t)},useImperativeHandle:function(e,t,n){return Y().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return Y().useLayoutEffect(e,t)},useMemo:function(e,t){return Y().useMemo(e,t)},useReducer:function(e,t,n){return Y().useReducer(e,t,n)},useRef:function(e){return Y().useRef(e)},useState:function(e){return Y().useState(e)},Fragment:a,StrictMode:c,Suspense:y,createElement:A,cloneElement:function(e,t,n){null==e&&g("267",e);var o=void 0,u=r({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=E.current),void 0!==t.key&&(a=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)I.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))u.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];u.children=s}return{$$typeof:i,type:e.type,key:a,ref:c,props:u,_owner:l}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:j,ReactCurrentOwner:E,assign:r}},F={default:B},N=F&&B||F;e.exports=N.default||N},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,c=u(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(c[s]=n[s]);if(r){a=r(n);for(var f=0;f<a.length;f++)i.call(n,a[f])&&(c[a[f]]=n[a[f]])}}return c}},function(e,t,n){"use strict";var r=n(5);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),u=n.n(i);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){var n;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,o),n=null}),t)}}function y(e,t){var n=0;return function(){var r=(new Date).getTime();if(!(r-n<t))return n=r,e.apply(void 0,arguments)}}var v="object"===("undefined"==typeof window||"undefined"==typeof window?"undefined":a(window)),m=v?document:{},b=function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?p(e):t}(this,f(t).call(this,e)),l(p(n),"state",{idle:!1,oldDate:+new Date,lastActive:+new Date,remaining:null,pageX:null,pageY:null}),l(p(n),"tId",null),l(p(n),"_handleEvent",(function(e){var t=n.state,r=t.remaining,o=t.pageX,i=t.pageY,u=t.idle,a=n.props,c=a.timeout,l=a.onAction,s=a.debounce,f=a.throttle,p=a.stopOnIdle;if(s>0?n.debouncedAction(e):f>0?n.throttledAction(e):l(e),!r){if("mousemove"===e.type){if(e.pageX===o&&e.pageY===i)return;if(void 0===e.pageX&&void 0===e.pageY)return;if(n.getElapsedTime()<200)return}clearTimeout(n.tId),n.tId=null;var d=new Date-n.getLastActiveTime();(u&&!p||!u&&d>c)&&n.toggleIdleState(e),n.setState({lastActive:+new Date,pageX:e.pageX,pageY:e.pageY}),u&&p||(n.tId=setTimeout(n.toggleIdleState,c))}})),e.debounce>0&&e.throttle>0)throw new Error("onAction can either be throttled or debounced (not both)");return e.debounce>0&&(n.debouncedAction=d(e.onAction,e.debounce)),e.throttle>0&&(n.throttledAction=y(e.onAction,e.throttle)),e.startOnMount||(n.state.idle=!0),n.toggleIdleState=n._toggleIdleState.bind(p(n)),n.reset=n.reset.bind(p(n)),n.pause=n.pause.bind(p(n)),n.resume=n.resume.bind(p(n)),n.getRemainingTime=n.getRemainingTime.bind(p(n)),n.getElapsedTime=n.getElapsedTime.bind(p(n)),n.getLastActiveTime=n.getLastActiveTime.bind(p(n)),n.isIdle=n._isIdle.bind(p(n)),n}return s(t,e),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"componentDidMount",value:function(){this._bindEvents(),this.props.startOnMount&&this.reset()}},{key:"componentDidUpdate",value:function(e){e.debounce!==this.props.debounce&&(this.debouncedAction=d(this.props.onAction,this.props.debounce)),e.throttle!==this.props.throttle&&(this.throttledAction=y(this.props.onAction,this.props.throttle))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.tId),this._unbindEvents(!0)}},{key:"render",value:function(){return this.props.children||null}},{key:"_bindEvents",value:function(){var e=this;if(v){var t=this.state.eventsBound,n=this.props,r=n.element,o=n.events,i=n.passive,u=n.capture;t||(o.forEach((function(t){r.addEventListener(t,e._handleEvent,{capture:u,passive:i})})),this.setState({eventsBound:!0}))}}},{key:"_unbindEvents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(v){var n=this.props,r=n.element,o=n.events,i=n.passive,u=n.capture;(this.state.eventsBound||t)&&(o.forEach((function(t){r.removeEventListener(t,e._handleEvent,{capture:u,passive:i})})),this.setState({eventsBound:!1}))}}},{key:"_toggleIdleState",value:function(e){var t=this;this.setState((function(e){return{idle:!e.idle}}),(function(){var n=t.props,r=n.onActive,o=n.onIdle,i=n.stopOnIdle;t.state.idle?(i&&(clearTimeout(t.tId),t.tId=null,t._unbindEvents()),o(e)):i||(t._bindEvents(),r(e))}))}},{key:"reset",value:function(){clearTimeout(this.tId),this.tId=null,this._bindEvents(),this.setState({idle:!1,oldDate:+new Date,lastActive:+new Date,remaining:null});var e=this.props.timeout;this.tId=setTimeout(this.toggleIdleState,e)}},{key:"pause",value:function(){null===this.state.remaining&&(this._unbindEvents(),clearTimeout(this.tId),this.tId=null,this.setState({remaining:this.getRemainingTime()}))}},{key:"resume",value:function(){var e=this.state,t=e.remaining,n=e.idle;null!==t&&(this._bindEvents(),n||(this.setState({remaining:null,lastActive:+new Date}),this.tId=setTimeout(this.toggleIdleState,t)))}},{key:"getRemainingTime",value:function(){var e=this.state,t=e.remaining,n=e.lastActive,r=this.props.timeout;if(null!==t)return t<0?0:t;var o=r-(+new Date-n);return o<0?0:o}},{key:"getElapsedTime",value:function(){var e=this.state.oldDate;return+new Date-e}},{key:"getLastActiveTime",value:function(){return this.state.lastActive}},{key:"_isIdle",value:function(){return this.state.idle}}]),t}(r.Component);l(b,"propTypes",{timeout:u.a.number,events:u.a.arrayOf(u.a.string),onIdle:u.a.func,onActive:u.a.func,onAction:u.a.func,debounce:u.a.number,throttle:u.a.number,element:u.a.oneOfType([u.a.object,u.a.element]),startOnMount:u.a.bool,stopOnIdle:u.a.bool,passive:u.a.bool,capture:u.a.bool}),l(b,"defaultProps",{timeout:12e5,element:m,events:["mousemove","keydown","wheel","DOMMouseScroll","mouseWheel","mousedown","touchstart","touchmove","MSPointerDown","MSPointerMove","visibilitychange"],onIdle:function(){},onActive:function(){},onAction:function(){},debounce:0,throttle:0,startOnMount:!0,stopOnIdle:!1,capture:!0,passive:!0});var h=b;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,i,u=(t=a,function(){var e,n=k(t);if(T()){var r=k(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return O(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).state={timeout:6e4*t.props.minutes,isTimedOut:!1},t.idleTimer=null,t.onAction=t._onAction.bind(w(t)),t.onActive=t._onActive.bind(w(t)),t.onIdle=t._onIdle.bind(w(t)),t}return n=a,(r=[{key:"componentWillMount",value:function(){this.pubSubToken=PubSub.subscribe(this.props.id,this.onIncomingEvent.bind(this))}},{key:"componentWillUnmount",value:function(){PubSub.unsubscribe(this.pubSubToken)}},{key:"onIncomingEvent",value:function(e,t){if("requestState"===t.type){var n={attributes:{timeout:this.state.timeout,isTimedOut:this.state.isTimedOut}};UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),n)}else"setState"===t.type&&this.setState(t.state.attributes)}},{key:"_onAction",value:function(e){console.log("user did something",e),this.setState({isTimedOut:!1})}},{key:"_onActive",value:function(e){console.log("user is active",e),this.setState({isTimedOut:!1})}},{key:"_onIdle",value:function(e){console.log("user is idle",e),this.setState({isTimedOut:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h,{ref:function(t){e.idleTimer=t},element:document,onActive:this.onActive,onIdle:this.onIdle,onAction:this.onAction,debounce:250,timeout:this.state.timeout}))}}])&&_(n.prototype,r),i&&_(n,i),a}(o.a.Component);UniversalDashboard.register("UD-TimeOut",j)}]);
//# sourceMappingURL=index.f541fb9ef2f51cdc4c57.bundle.map