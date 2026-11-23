(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var od={exports:{}},rl={};var r0;function zM(){if(r0)return rl;r0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:r,key:h,ref:u!==void 0?u:null,props:f}}return rl.Fragment=e,rl.jsx=i,rl.jsxs=i,rl}var o0;function IM(){return o0||(o0=1,od.exports=zM()),od.exports}var $=IM();const BM=[["正常批次需10–200组；小批量诊断需3–200组","Normal batches require 10–200 captures; diagnostic batches require 3–200."],["未形成至少3个相机的有效模型；可下载日志及诊断","No valid model with at least three cameras was reconstructed. Review the logs and diagnostics."],["需要schema 2 的 ARKit 深度数据","ARKit depth data with schema version 2 is required."],["引擎自动调整过初始化条件；请结合质量报告验收。","The engine adjusted its initialization conditions. Review the quality report before accepting the result."],["order.json 必须唯一覆盖所有拍摄组","order.json must list every capture group exactly once."],["当前适配器只接受方向1、像素内参、未测量畸变","The importer requires orientation 1, pixel-based intrinsics, and unmeasured distortion."],["无法识别批次根目录，请上传完整拍摄文件夹","Could not identify the batch root. Upload the complete capture folder."],["当前采集格式需要正整数拍摄文件夹名","Capture folders must be named with positive integers without leading zeros."],[" 执行失败，详情见日志（退出码 "," failed. See the log for details (exit code "],["深度格式/来源/单位不受支持","Unsupported depth format, source, or units."],["不支持该文件层级或隐藏文件","Unsupported folder depth or hidden file."],["服务中断，请重试生成新版本","The service was interrupted. Retry to create a new version."],["ZIP解压容量或文件数超限","The extracted ZIP exceeds the size or file-count limit."],["文件路径不能越出批次目录","File paths must stay within the batch directory."],["重复capture_id","Duplicate capture_id."],["深度或置信度字节数不匹配","Depth or confidence file size does not match its dimensions."],["重复图片，请去重后提交","Duplicate images. Remove duplicates before submitting."],["图片与深度时间戳不一致","Image and depth timestamps do not match."],["没有可用中高置信度深度","No valid medium- or high-confidence depth samples."],["RGB尺寸或方向不一致","RGB dimensions or orientation do not match."],["只能重试已结束的任务","Only finished jobs can be retried."],["ZIP需上传至空批次","Upload the ZIP to an empty batch."],["文件绑定名称不匹配","Referenced filenames do not match."],["深度存储格式不支持","Unsupported depth storage layout."],["深度内参映射不一致","Depth intrinsics do not match the RGB-to-depth scaling."],["文件或批次容量超限","File or batch size limit exceeded."],["缺少本机操作标记","The local request header is missing."],["批次文件数量超限","Too many files in this batch."],["图片超过30MB","The image exceeds 30 MB."],["ZIP内路径重复","Duplicate paths in the ZIP."],["不支持的文件：","Unsupported file: "],["仅支持本机访问","Only local access is supported."],["图片像素数超限","The image exceeds the pixel-count limit."],["ZIP容量超限","ZIP size limit exceeded."],["不接受符号链接","Symbolic links are not accepted."],["前端尚未构建","The frontend has not been built."],["非法文件路径","Invalid file path."],["结果尚未完成","Results are not ready."],["不允许的来源","Origin not allowed."],["批次已经提交","This batch has already been submitted."],["深度尺寸无效","Invalid depth dimensions."],["非法置信度值","Invalid confidence values."],["任务不存在","Job not found."],["文件不存在","File not found."],["项目不存在","Project not found."],["批次已提交","This batch has already been submitted."],["缺失文件 ","Missing file: "],["文件重复","Duplicate file."],["非法内参","Invalid camera intrinsics."],["模型 ","Model "]];function Yd(o){return BM.reduce((e,[i,r])=>e.split(i).join(r),o)}var ld={exports:{}},ce={};var l0;function FM(){if(l0)return ce;l0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(H){return H===null||typeof H!="object"?null:(H=M&&H[M]||H["@@iterator"],typeof H=="function"?H:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,v={};function N(H,dt,J){this.props=H,this.context=dt,this.refs=v,this.updater=J||C}N.prototype.isReactComponent={},N.prototype.setState=function(H,dt){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,dt,"setState")},N.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function D(){}D.prototype=N.prototype;function A(H,dt,J){this.props=H,this.context=dt,this.refs=v,this.updater=J||C}var I=A.prototype=new D;I.constructor=A,x(I,N.prototype),I.isPureReactComponent=!0;var P=Array.isArray;function L(){}var V={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function w(H,dt,J){var lt=J.ref;return{$$typeof:o,type:H,key:dt,ref:lt!==void 0?lt:null,props:J}}function F(H,dt){return w(H.type,dt,H.props)}function at(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function st(H){var dt={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(J){return dt[J]})}var _t=/\/+/g;function ot(H,dt){return typeof H=="object"&&H!==null&&H.key!=null?st(""+H.key):dt.toString(36)}function k(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(L,L):(H.status="pending",H.then(function(dt){H.status==="pending"&&(H.status="fulfilled",H.value=dt)},function(dt){H.status==="pending"&&(H.status="rejected",H.reason=dt)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function it(H,dt,J,lt,Tt){var Nt=typeof H;(Nt==="undefined"||Nt==="boolean")&&(H=null);var At=!1;if(H===null)At=!0;else switch(Nt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(H.$$typeof){case o:case e:At=!0;break;case S:return At=H._init,it(At(H._payload),dt,J,lt,Tt)}}if(At)return Tt=Tt(H),At=lt===""?"."+ot(H,0):lt,P(Tt)?(J="",At!=null&&(J=At.replace(_t,"$&/")+"/"),it(Tt,dt,J,"",function(B){return B})):Tt!=null&&(at(Tt)&&(Tt=F(Tt,J+(Tt.key==null||H&&H.key===Tt.key?"":(""+Tt.key).replace(_t,"$&/")+"/")+At)),dt.push(Tt)),1;At=0;var vt=lt===""?".":lt+":";if(P(H))for(var Vt=0;Vt<H.length;Vt++)lt=H[Vt],Nt=vt+ot(lt,Vt),At+=it(lt,dt,J,Nt,Tt);else if(Vt=b(H),typeof Vt=="function")for(H=Vt.call(H),Vt=0;!(lt=H.next()).done;)lt=lt.value,Nt=vt+ot(lt,Vt++),At+=it(lt,dt,J,Nt,Tt);else if(Nt==="object"){if(typeof H.then=="function")return it(k(H),dt,J,lt,Tt);throw dt=String(H),Error("Objects are not valid as a React child (found: "+(dt==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":dt)+"). If you meant to render a collection of children, use an array instead.")}return At}function Y(H,dt,J){if(H==null)return H;var lt=[],Tt=0;return it(H,lt,"","",function(Nt){return dt.call(J,Nt,Tt++)}),lt}function Mt(H){if(H._status===-1){var dt=H._result,J=dt();J.then(function(lt){(H._status===0||H._status===-1)&&(H._status=1,H._result=lt,J.status===void 0&&(J.status="fulfilled",J.value=lt))},function(lt){(H._status===0||H._status===-1)&&(H._status=2,H._result=lt,J.status===void 0&&(J.status="rejected",J.reason=lt))}),H._status===-1&&(H._status=0,H._result=J)}if(H._status===1)return H._result.default;throw H._result}var Et=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var dt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(dt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function It(H){var dt=V.T,J={};J.types=dt!==null?dt.types:null,V.T=J;try{var lt=H(),Tt=V.S;Tt!==null&&Tt(J,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(L,Et)}catch(Nt){Et(Nt)}finally{dt!==null&&J.types!==null&&(dt.types=J.types),V.T=dt}}function ie(H){var dt=V.T;if(dt!==null){var J=dt.types;J===null?dt.types=[H]:J.indexOf(H)===-1&&J.push(H)}else It(ie.bind(null,H))}var pe={map:Y,forEach:function(H,dt,J){Y(H,function(){dt.apply(this,arguments)},J)},count:function(H){var dt=0;return Y(H,function(){dt++}),dt},toArray:function(H){return Y(H,function(dt){return dt})||[]},only:function(H){if(!at(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return ce.Activity=m,ce.Children=pe,ce.Component=N,ce.Fragment=i,ce.Profiler=u,ce.PureComponent=A,ce.StrictMode=r,ce.Suspense=g,ce.ViewTransition=y,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ce.__COMPILER_RUNTIME={__proto__:null,c:function(H){return V.H.useMemoCache(H)}},ce.addTransitionType=ie,ce.cache=function(H){return function(){return H.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(H,dt,J){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var lt=x({},H.props),Tt=H.key;if(dt!=null)for(Nt in dt.key!==void 0&&(Tt=""+dt.key),dt)!U.call(dt,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&dt.ref===void 0||(lt[Nt]=dt[Nt]);var Nt=arguments.length-2;if(Nt===1)lt.children=J;else if(1<Nt){for(var At=Array(Nt),vt=0;vt<Nt;vt++)At[vt]=arguments[vt+2];lt.children=At}return w(H.type,Tt,lt)},ce.createContext=function(H){return H={$$typeof:h,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},ce.createElement=function(H,dt,J){var lt,Tt={},Nt=null;if(dt!=null)for(lt in dt.key!==void 0&&(Nt=""+dt.key),dt)U.call(dt,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(Tt[lt]=dt[lt]);var At=arguments.length-2;if(At===1)Tt.children=J;else if(1<At){for(var vt=Array(At),Vt=0;Vt<At;Vt++)vt[Vt]=arguments[Vt+2];Tt.children=vt}if(H&&H.defaultProps)for(lt in At=H.defaultProps,At)Tt[lt]===void 0&&(Tt[lt]=At[lt]);return w(H,Nt,Tt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(H){return{$$typeof:d,render:H}},ce.isValidElement=at,ce.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:Mt}},ce.memo=function(H,dt){return{$$typeof:p,type:H,compare:dt===void 0?null:dt}},ce.startTransition=It,ce.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ce.use=function(H){return V.H.use(H)},ce.useActionState=function(H,dt,J){return V.H.useActionState(H,dt,J)},ce.useCallback=function(H,dt){return V.H.useCallback(H,dt)},ce.useContext=function(H){return V.H.useContext(H)},ce.useDebugValue=function(){},ce.useDeferredValue=function(H,dt){return V.H.useDeferredValue(H,dt)},ce.useEffect=function(H,dt){return V.H.useEffect(H,dt)},ce.useEffectEvent=function(H){return V.H.useEffectEvent(H)},ce.useId=function(){return V.H.useId()},ce.useImperativeHandle=function(H,dt,J){return V.H.useImperativeHandle(H,dt,J)},ce.useInsertionEffect=function(H,dt){return V.H.useInsertionEffect(H,dt)},ce.useLayoutEffect=function(H,dt){return V.H.useLayoutEffect(H,dt)},ce.useMemo=function(H,dt){return V.H.useMemo(H,dt)},ce.useOptimistic=function(H,dt){return V.H.useOptimistic(H,dt)},ce.useReducer=function(H,dt,J){return V.H.useReducer(H,dt,J)},ce.useRef=function(H){return V.H.useRef(H)},ce.useState=function(H){return V.H.useState(H)},ce.useSyncExternalStore=function(H,dt,J){return V.H.useSyncExternalStore(H,dt,J)},ce.useTransition=function(){return V.H.useTransition()},ce.version="19.3.1",ce}var u0;function Hp(){return u0||(u0=1,ld.exports=FM()),ld.exports}var he=Hp(),ud={exports:{}},ol={},cd={exports:{}},fd={};var c0;function HM(){return c0||(c0=1,(function(o){function e(k,it){var Y=k.length;k.push(it);t:for(;0<Y;){var Mt=Y-1>>>1,Et=k[Mt];if(0<u(Et,it))k[Mt]=it,k[Y]=Et,Y=Mt;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var it=k[0],Y=k.pop();if(Y!==it){k[0]=Y;t:for(var Mt=0,Et=k.length,It=Et>>>1;Mt<It;){var ie=2*(Mt+1)-1,pe=k[ie],H=ie+1,dt=k[H];if(0>u(pe,Y))H<Et&&0>u(dt,pe)?(k[Mt]=dt,k[H]=Y,Mt=H):(k[Mt]=pe,k[ie]=Y,Mt=ie);else if(H<Et&&0>u(dt,Y))k[Mt]=dt,k[H]=Y,Mt=H;else break t}}return it}function u(k,it){var Y=k.sortIndex-it.sortIndex;return Y!==0?Y:k.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],p=[],S=1,m=null,y=3,M=!1,b=!1,C=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function A(k){for(var it=i(p);it!==null;){if(it.callback===null)r(p);else if(it.startTime<=k)r(p),it.sortIndex=it.expirationTime,e(g,it);else break;it=i(p)}}function I(k){if(C=!1,A(k),!b)if(i(g)!==null)b=!0,P||(P=!0,at());else{var it=i(p);it!==null&&ot(I,it.startTime-k)}}var P=!1,L=-1,V=5,U=-1;function w(){return x?!0:!(o.unstable_now()-U<V)}function F(){if(x=!1,P){var k=o.unstable_now();U=k;var it=!0;try{t:{b=!1,C&&(C=!1,N(L),L=-1),M=!0;var Y=y;try{e:{for(A(k),m=i(g);m!==null&&!(m.expirationTime>k&&w());){var Mt=m.callback;if(typeof Mt=="function"){m.callback=null,y=m.priorityLevel;var Et=Mt(m.expirationTime<=k);if(k=o.unstable_now(),typeof Et=="function"){m.callback=Et,A(k),it=!0;break e}m===i(g)&&r(g),A(k)}else r(g);m=i(g)}if(m!==null)it=!0;else{var It=i(p);It!==null&&ot(I,It.startTime-k),it=!1}}break t}finally{m=null,y=Y,M=!1}it=void 0}}finally{it?at():P=!1}}}var at;if(typeof D=="function")at=function(){D(F)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,_t=st.port2;st.port1.onmessage=F,at=function(){_t.postMessage(null)}}else at=function(){v(F,0)};function ot(k,it){L=v(function(){k(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(k){switch(y){case 1:case 2:case 3:var it=3;break;default:it=y}var Y=y;y=it;try{return k()}finally{y=Y}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(k,it){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Y=y;y=k;try{return it()}finally{y=Y}},o.unstable_scheduleCallback=function(k,it,Y){var Mt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,k){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,k={id:S++,callback:it,priorityLevel:k,startTime:Y,expirationTime:Et,sortIndex:-1},Y>Mt?(k.sortIndex=Y,e(p,k),i(g)===null&&k===i(p)&&(C?(N(L),L=-1):C=!0,ot(I,Y-Mt))):(k.sortIndex=Et,e(g,k),b||M||(b=!0,P||(P=!0,at()))),k},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(k){var it=y;return function(){var Y=y;y=it;try{return k.apply(this,arguments)}finally{y=Y}}}})(fd)),fd}var f0;function GM(){return f0||(f0=1,cd.exports=HM()),cd.exports}var hd={exports:{}},Un={};var h0;function VM(){if(h0)return Un;h0=1;var o=Hp();function e(S){var m="https://react.dev/errors/"+S;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+S+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(S,m,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:S,containerInfo:m,implementation:y}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(S,m){if(S==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.browser=function(S){return{$$typeof:f,_reason:S}},Un.createPortal=function(S,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(S,m,null,y)},Un.flushSync=function(S){var m=g.T,y=r.p;try{if(g.T=null,r.p=2,S)return S()}finally{g.T=m,r.p=y,r.d.f()}},Un.preconnect=function(S,m){typeof S=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(S,m))},Un.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Un.preinit=function(S,m){if(typeof S=="string"&&m&&typeof m.as=="string"){var y=m.as,M=p(y,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(S,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:C}):y==="script"&&r.d.X(S,{crossOrigin:M,integrity:b,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(S,m){if(typeof S=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);r.d.M(S,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(S)},Un.preload=function(S,m){if(typeof S=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,M=p(y,m.crossOrigin);r.d.L(S,y,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(S,m){if(typeof S=="string")if(m){var y=p(m.as,m.crossOrigin);r.d.m(S,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(S)},Un.requestFormReset=function(S){r.d.r(S)},Un.unstable_batchedUpdates=function(S,m){return S(m)},Un.useFormState=function(S,m,y){return g.H.useFormState(S,m,y)},Un.useFormStatus=function(){return g.H.useHostTransitionStatus()},Un.version="19.3.1",Un}var d0;function XM(){if(d0)return hd.exports;d0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=VM(),hd.exports}var p0;function kM(){if(p0)return ol;p0=1;var o=GM(),e=Hp(),i=XM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return g(l),t;if(c===s)return g(l),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=c;else{for(var _=!1,E=l.child;E;){if(E===a){_=!0,a=l,s=c;break}if(E===s){_=!0,s=l,a=c;break}E=E.sibling}if(!_){for(E=c.child;E;){if(E===a){_=!0,a=c,s=l;break}if(E===s){_=!0,s=c,a=l;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,s,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,s,l,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=y(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var v=null,N=null;function D(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function A(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(v=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function P(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var c=n;c;c=a(c))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,V=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),It=Symbol.for("react.activity"),ie=Symbol.for("react.legacy_hidden"),pe=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),dt=Symbol.for("react.recoverable"),J=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case st:return"Profiler";case at:return"StrictMode";case it:return"Suspense";case Y:return"SuspenseList";case It:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ot:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mt:return n=t.displayName||null,n!==null?n:Nt(t.type)||"Memo";case Et:n=t._payload,t=t._init;try{return Nt(t(n))}catch{}}return null}var At=Array.isArray,vt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},we=[],Qt=-1;function Wt(t){return{current:t}}function xt(t){0>Qt||(t.current=we[Qt],we[Qt]=null,Qt--)}function zt(t,n){Qt++,we[Qt]=t.current,t.current=n}var Dt=Wt(null),W=Wt(null),Xt=Wt(null),oe=Wt(null);function O(t,n){switch(zt(Xt,n),zt(W,t),zt(Dt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?mv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=mv(n),t=gv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(Dt),zt(Dt,t)}function T(){xt(Dt),xt(W),xt(Xt)}function et(t){var n=t.memoizedState;n!==null&&(Ir._currentValue=n.memoizedState,zt(oe,t)),n=Dt.current;var a=gv(n,t.type);n!==a&&(zt(W,t),zt(Dt,a))}function pt(t){W.current===t&&(xt(Dt),xt(W)),oe.current===t&&(xt(oe),Ir._currentValue=B)}var St,ht;function qt(t){if(St===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+ht}var Ut=!1;function $t(t,n){if(!t||Ut)return"";Ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Pt){var j=Pt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Pt){j=Pt}gt=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){j=Pt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Pt){if(Pt&&j&&typeof Pt.stack=="string")return[Pt.stack,j.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),_=c[0],E=c[1];if(_&&E){var z=_.split(`
`),Z=E.split(`
`);for(l=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;if(s===z.length||l===Z.length)for(s=z.length-1,l=Z.length-1;1<=s&&0<=l&&z[s]!==Z[l];)l--;for(;1<=s&&0<=l;s--,l--)if(z[s]!==Z[l]){if(s!==1||l!==1)do if(s--,l--,0>l||z[s]!==Z[l]){var ut=`
`+z[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=l);break}}}finally{Ut=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qt(a):""}function ee(t,n){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return t.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function Ct(t){try{var n="",a=null;do n+=ee(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Bt=Object.prototype.hasOwnProperty,le=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,Ft=o.unstable_shouldYield,de=o.unstable_requestPaint,X=o.unstable_now,wt=o.unstable_getCurrentPriorityLevel,Ot=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,bt=o.unstable_NormalPriority,yt=o.unstable_LowPriority,Jt=o.unstable_IdlePriority,fe=o.log,ke=o.unstable_setDisableYieldValue,Ae=null,tn=null;function mn(t){if(typeof fe=="function"&&ke(t),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(Ae,t)}catch{}}var Ln=Math.clz32?Math.clz32:bl,ea=Math.log,go=Math.LN2;function bl(t){return t>>>=0,t===0?32:31-(ea(t)/go|0)|0}var ms=256,na=262144,gs=4194304;function pi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _s(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~c,s!==0?l=pi(s):(_&=E,_!==0?l=pi(_):a||(a=E&~t,a!==0&&(l=pi(a))))):(E=s&~c,E!==0?l=pi(E):_!==0?l=pi(_):a||(a=s&~t,a!==0&&(l=pi(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function wa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Al(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Ln(a),l=1<<s;n|=t[s],a&=~l}return n}function Oc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rl(){var t=gs;return gs<<=1,(gs&62914560)===0&&(gs=4194304),t}function _o(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pc(t,n,a,s,l,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,Z=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Ln(a),gt=1<<ut;E[ut]=0,z[ut]=-1;var j=Z[ut];if(j!==null)for(Z[ut]=null,ut=0;ut<j.length;ut++){var rt=j[ut];rt!==null&&(rt.lane&=-536870913)}a&=~gt}s!==0&&R(t,s,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ln(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function K(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ln(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function ct(t,n){var a=n&-n;return a=(a&42)!==0?1:ft(a),(a&(t.suspendedLanes|n))!==0?0:a}function ft(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rt(){var t=Vt.p;return t!==0?t:(t=window.event,t===void 0?32:$v(t.type))}function Ht(t,n){var a=Vt.p;try{return Vt.p=t,n()}finally{Vt.p=a}}var kt=Math.random().toString(36).slice(2),Lt="__reactFiber$"+kt,Zt="__reactProps$"+kt,re="__reactContainer$"+kt,ae="__reactEvents$"+kt,Me="__reactListeners$"+kt,Fe="__reactHandles$"+kt,Je="__reactResources$"+kt,Pe="__reactMarker$"+kt,Ue="__reactLoad$"+kt;function se(t){delete t[Lt],delete t[Zt],delete t[Me],delete t[Fe]}function ze(t){var n;if(n=t[Lt])return n;for(var a=t.parentNode;a;){if(n=a[re]||a[Lt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Lv(t);t!==null;){if(a=t[Lt])return a;t=Lv(t)}return n}t=a,a=t.parentNode}return null}function xe(t){if(t=t[Lt]||t[re]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ni(t){var n=t[Je];return n||(n=t[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ne(t){t[Pe]=!0}function Da(t){t[Ue]=void 0}var Ze=new Set,Bn={};function un(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(Bn[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var On=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tr={},Bi={};function ex(t){return Bt.call(Bi,t)?!0:Bt.call(tr,t)?!1:On.test(t)?Bi[t]=!0:(tr[t]=!0,!1)}var Le=!1;function em(){var t=Le;return Le=!1,t}function Cl(t,n,a){if(ex(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function wl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ii(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nx(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function zc(t){if(!t._valueTracker){var n=nm(t)?"checked":"value";t._valueTracker=nx(t,n,""+t[n])}}function im(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=nm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var ix=/[\n"\\]/g;function mi(t){return t.replace(ix,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ic(t,n,a,s,l,c,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ii(n)):t.value!==""+ii(n)&&(t.value=""+ii(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Bc(t,ii(t.value)):Bc(t,ii(n)):a!=null?Bc(t,ii(a)):s!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ii(E):t.removeAttribute("name")}function am(t,n,a,s,l,c,_,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){zc(t);return}a=a!=null?""+ii(a):"",n=n!=null?""+ii(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),zc(t)}function Bc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function er(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ii(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function sm(t,n,a){if(n!=null&&(n=""+ii(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ii(a):""}function rm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ii(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),zc(t)}function nr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ax=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function om(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||ax.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function lm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Le=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(om(t,l,s),Le=!0)}else for(var c in n)n.hasOwnProperty(c)&&om(t,c,n[c])}function Fc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return rx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Hc=null;function Gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ir=null,ar=null;function um(t){var n=xe(t);if(n&&(t=n.stateNode)){var a=t[Zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ic(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[Zt]||null;if(!l)throw Error(r(90));Ic(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&im(s)}break t;case"textarea":sm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&er(t,!!a.multiple,n,!1)}}}var Vc=!1;function cm(t,n,a){if(Vc)return t(n,a);Vc=!0;try{var s=t(n);return s}finally{if(Vc=!1,(ir!==null||ar!==null)&&(Du(),ir&&(n=ir,t=ar,ar=ir=null,um(n),t)))for(n=0;n<t.length;n++)um(t[n])}}function vo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Zt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(aa)try{var So={};Object.defineProperty(So,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Xc=!1}var Ua=null,kc=null,Ul=null;function fm(){if(Ul)return Ul;var t,n=kc,a=n.length,s,l="value"in Ua?Ua.value:Ua.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===l[c-s];s++);return Ul=l.slice(t,1<s?1-s:void 0)}function Nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function hm(){return!1}function Fn(t){function n(a,s,l,c,_){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ll:hm,this.isPropagationStopped=hm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Fn(Na),xo=L({},Na,{view:0,detail:0}),ox=Fn(xo),jc,Yc,yo,Pl=L({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(jc=t.screenX-yo.screenX,Yc=t.screenY-yo.screenY):Yc=jc=0,yo=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),dm=Fn(Pl),lx=L({},Pl,{dataTransfer:0}),ux=Fn(lx),cx=L({},xo,{relatedTarget:0}),qc=Fn(cx),fx=L({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=Fn(fx),dx=L({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),px=Fn(dx),mx=L({},Na,{data:0}),pm=Fn(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vx[t])?!!n[t]:!1}function Wc(){return Sx}var xx=L({},xo,{key:function(t){if(t.key){var n=gx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yx=Fn(xx),Mx=L({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Fn(Mx),Ex=L({},Na,{submitter:0}),Tx=Fn(Ex),bx=L({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),Ax=Fn(bx),Rx=L({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Fn(Rx),wx=L({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=Fn(wx),Ux=L({},Na,{newState:0,oldState:0,source:0}),Nx=Fn(Ux),Lx=[9,13,27,32],Zc=aa&&"CompositionEvent"in window,Mo=null;aa&&"documentMode"in document&&(Mo=document.documentMode);var Ox=aa&&"TextEvent"in window&&!Mo,gm=aa&&(!Zc||Mo&&8<Mo&&11>=Mo),_m=" ",vm=!1;function Sm(t,n){switch(t){case"keyup":return Lx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function Px(t,n){switch(t){case"compositionend":return xm(n);case"keypress":return n.which!==32?null:(vm=!0,_m);case"textInput":return t=n.data,t===_m&&vm?null:t;default:return null}}function zx(t,n){if(sr)return t==="compositionend"||!Zc&&Sm(t,n)?(t=fm(),Ul=kc=Ua=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gm&&n.locale!=="ko"?null:n.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ix[t.type]:n==="textarea"}function Mm(t,n,a,s){ir?ar?ar.push(s):ar=[s]:ir=s,n=zu(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Eo=null,To=null;function Bx(t){uv(t,0)}function zl(t){var n=gn(t);if(im(n))return t}function Em(t,n){if(t==="change")return n}var Tm=!1;if(aa){var Kc;if(aa){var Qc="oninput"in document;if(!Qc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),Qc=typeof bm.oninput=="function"}Kc=Qc}else Kc=!1;Tm=Kc&&(!document.documentMode||9<document.documentMode)}function Am(){Eo&&(Eo.detachEvent("onpropertychange",Rm),To=Eo=null)}function Rm(t){if(t.propertyName==="value"&&zl(To)){var n=[];Mm(n,To,t,Gc(t)),cm(Bx,n)}}function Fx(t,n,a){t==="focusin"?(Am(),Eo=n,To=a,Eo.attachEvent("onpropertychange",Rm)):t==="focusout"&&Am()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(To)}function Gx(t,n){if(t==="click")return zl(n)}function Vx(t,n){if(t==="input"||t==="change")return zl(n)}function Xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:Xx;function bo(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Bt.call(n,l)||!ai(t[l],n[l]))return!1}return!0}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,n){var a=Cm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cm(a)}}function Dm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jc(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var kx=aa&&"documentMode"in document&&11>=document.documentMode,rr=null,tf=null,Ao=null,ef=!1;function Nm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ef||rr==null||rr!==Jc(s)||(s=rr,"selectionStart"in s&&$c(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ao&&bo(Ao,s)||(Ao=s,s=zu(tf,"onSelect"),0<s.length&&(n=new Ol("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=rr)))}function Ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var or={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},nf={},Lm={};aa&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function xs(t){if(nf[t])return nf[t];if(!or[t])return t;var n=or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lm)return nf[t]=n[a];return t}var Om=xs("animationend"),Pm=xs("animationiteration"),zm=xs("animationstart"),jx=xs("transitionrun"),Yx=xs("transitionstart"),qx=xs("transitioncancel"),Im=xs("transitionend"),Bm=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function Ai(t,n){Bm.set(t,n),un(n,[t])}var Wx=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Di.identifierPrefix;var a=Wx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Fm(t){if(t==null||typeof t=="string")return t;var n=null,a=Rr;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ra(t,n){return t=Fm(t),n=Fm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],lr=0,sf=0;function Bl(){for(var t=lr,n=sf=lr=0;n<t;){var a=gi[n];gi[n++]=null;var s=gi[n];gi[n++]=null;var l=gi[n];gi[n++]=null;var c=gi[n];if(gi[n++]=null,s!==null&&l!==null){var _=s.pending;_===null?l.next=l:(l.next=_.next,_.next=l),s.pending=l}c!==0&&Hm(a,l,c)}}function Fl(t,n,a,s){gi[lr++]=t,gi[lr++]=n,gi[lr++]=a,gi[lr++]=s,sf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function rf(t,n,a,s){return Fl(t,n,a,s),Hl(t)}function ys(t,n){return Fl(t,null,null,n),Hl(t)}function Hm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Ln(a),t=c.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),c):null}function Hl(t){if(50<Wo)throw Wo=0,wu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function Zx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new Zx(t,n,a,s)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Gm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Gl(t,n,a,s,l,c){var _=0;if(s=t,typeof s=="function")of(s)&&(_=1);else if(typeof s=="string")_=EM(t,a,Dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case It:return t=jn(31,a,n,l),t.elementType=It,t.lanes=c,t;case F:return Ms(a.children,l,c,n);case at:_=8,l|=24;break;case st:return t=jn(12,a,n,l|2),t.elementType=st,t.lanes=c,t;case it:return t=jn(13,a,n,l),t.elementType=it,t.lanes=c,t;case Y:return t=jn(19,a,n,l),t.elementType=Y,t.lanes=c,t;case ie:case H:return t=l|32,t=jn(30,a,n,t),t.elementType=H,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ot:_=10;break t;case _t:_=9;break t;case k:_=11;break t;case Mt:_=14;break t;case Et:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(_,a,n,l),n.elementType=t,n.type=s,n.lanes=c,n}function Ms(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function lf(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Vm(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function uf(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xm=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var a=Xm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ct(n)},Xm.set(t,n),n)}return{value:t,source:n,stack:Ct(n)}}var cr=[],fr=0,Vl=null,Ro=0,vi=[],Si=0,La=null,Hi=1,Gi="";function la(t,n){cr[fr++]=Ro,cr[fr++]=Vl,Vl=t,Ro=n}function km(t,n,a){vi[Si++]=Hi,vi[Si++]=Gi,vi[Si++]=La,La=t;var s=Hi;t=Gi;var l=32-Ln(s)-1;s&=~(1<<l),a+=1;var c=32-Ln(n)+l;if(30<c){var _=l-l%5;c=(s&(1<<_)-1).toString(32),s>>=_,l-=_,Hi=1<<32-Ln(n)+l|a<<l|s,Gi=c+t}else Hi=1<<c|a<<l|s,Gi=t}function Xl(t){t.return!==null&&(la(t,1),km(t,1,0))}function cf(t){for(;t===Vl;)Vl=cr[--fr],cr[fr]=null,Ro=cr[--fr],cr[fr]=null;for(;t===La;)La=vi[--Si],vi[Si]=null,Gi=vi[--Si],vi[Si]=null,Hi=vi[--Si],vi[Si]=null}function jm(t,n){vi[Si++]=Hi,vi[Si++]=Gi,vi[Si++]=La,Hi=n.id,Gi=n.overflow,La=t}var Mn=null,Ke=null,ye=!1,Oa=null,xi=!1,ff=Error(r(519));function Pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(_i(n,t)),ff}function Ym(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Lt]=t,n[Zt]=s,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)Te(Ko[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),am(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),rm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||dv(n.textContent,a)?(s.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),s.onScroll!=null&&Te("scroll",n),s.onScrollEnd!=null&&Te("scrollend",n),s.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||Pa(t,!0)}function kl(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Mn=Mn.return}}function hr(t){if(t!==Mn)return!1;if(!ye)return kl(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gh(t.type,t.memoizedProps)),a=!a),a&&Ke&&Pa(t),kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Nv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Nv(t)}else n===27?(n=Ke,Qa(t.type)?(t=Kh,Kh=null,Ke=t):Ke=n):Ke=Mn?Mi(t.stateNode.nextSibling):null;return!0}function Es(){Ke=Mn=null,ye=!1}function hf(){var t=Oa;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Oa=null),t}function Co(t){Oa===null?Oa=[t]:Oa.push(t)}var df=Wt(null),Ts=null,ua=null;function za(t,n,a){zt(df,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=df.current,xt(df)}function jl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function pf(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var _=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var z=0;z<n.length;z++)if(E.context===n[z]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),jl(c.return,a,t),s||(_=null);break t}c=E.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(r(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),jl(_,a,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,_=l.alternate,_!==null&&(_.lanes|=a),jl(l.return,a,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function bs(t,n,a,s){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=l.type;ai(l.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(l===oe.current){if(_=l.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ir):t=[Ir])}l=l.return}return t!==null&&pf(n,t,a,s),n.flags|=262144,t!==null}function Yl(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Ts=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return qm(Ts,t)}function ql(t,n){return Ts===null&&As(t),qm(t,n)}function qm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(r(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var Kx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Qx=o.unstable_scheduleCallback,Jx=o.unstable_NormalPriority,cn={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new Kx,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&Qx(Jx,function(){t.controller.abort()})}function Wm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Do=null;function $x(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,gf=0,Rs=0,dr=null;function ty(t,n){if(Uo===null){var a=Uo=[];gf=0,Rs=Nh(),dr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return gf++,n.then(Zm,Zm),n}function Zm(){if(--gf===0&&(Do=null,Uo!==null)){dr!==null&&(dr.status="fulfilled");var t=Uo;Uo=null,Rs=0,dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ey(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var Km=vt.S;vt.S=function(t,n){if(V_=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ty(t,n),Do!==null)for(var a=Ur;a!==null;)Wm(a,Do),a=a.next;if(a=t.types,a!==null){for(var s=Ur;s!==null;)Wm(s,a),s=s.next;if(Rs!==0){s=Do,s===null&&(s=Do=[]);for(var l=0;l<a.length;l++){var c=a[l];s.indexOf(c)===-1&&s.push(c)}}}Km!==null&&Km(t,n)};var Cs=Wt(null);function _f(){var t=Cs.current;return t!==null?t:We.pooledCache}function Wl(t,n){n===null?zt(Cs,Cs.current):zt(Cs,n.pool)}function Qm(){var t=_f();return t===null?null:{parent:cn._currentValue,pool:t}}var pr=Error(r(460)),vf=Error(r(474)),Zl=Error(r(542)),Kl={then:function(){}};function Jm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $m(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,eg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,eg(t),t}throw Ds=n,pr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,pr):a}}var Ds=null;function tg(){if(Ds===null)throw Error(r(459));var t=Ds;return Ds=null,t}function eg(t){if(t===pr||t===Zl)throw Error(r(483))}var mr=null,No=0;function Ql(t){var n=No;return No+=1,mr===null&&(mr=[]),$m(mr,t,n)}function Ia(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jl(t,n){throw n.$$typeof===V?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ng(t){function n(q,G){if(t){var tt=q.deletions;tt===null?(q.deletions=[G],q.flags|=16):tt.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key===null?G.set(q.index,q):G.set(q.key,q),q=q.sibling;return G}function l(q,G){return q=oa(q,G),q.index=0,q.sibling=null,q}function c(q,G,tt){return q.index=tt,t?(tt=q.alternate,tt!==null?(tt=tt.index,tt<G?(q.flags|=2,G):tt):(q.flags|=134217730,G)):(q.flags|=1048576,G)}function _(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function E(q,G,tt,mt){return G===null||G.tag!==6?(G=lf(tt,q.mode,mt),G.return=q,G):(G=l(G,tt),G.return=q,G)}function z(q,G,tt,mt){var jt=tt.type;return jt===F?(q=ut(q,G,tt.props.children,mt,tt.key),Ia(q,tt),q):G!==null&&(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===Et&&ws(jt)===G.type)?(G=l(G,tt.props),Ia(G,tt),G.return=q,G):(G=Gl(tt.type,tt.key,tt.props,null,q.mode,mt),Ia(G,tt),G.return=q,G)}function Z(q,G,tt,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==tt.containerInfo||G.stateNode.implementation!==tt.implementation?(G=uf(tt,q.mode,mt),G.return=q,G):(G=l(G,tt.children||[]),G.return=q,G)}function ut(q,G,tt,mt,jt){return G===null||G.tag!==7?(G=Ms(tt,q.mode,mt,jt),G.return=q,G):(G=l(G,tt),G.return=q,G)}function gt(q,G,tt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=lf(""+G,q.mode,tt),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return tt=Gl(G.type,G.key,G.props,null,q.mode,tt),Ia(tt,G),tt.return=q,tt;case w:return G=uf(G,q.mode,tt),G.return=q,G;case Et:return G=ws(G),gt(q,G,tt)}if(At(G)||lt(G))return G=Ms(G,q.mode,tt,null),G.return=q,G;if(typeof G.then=="function")return gt(q,Ql(G),tt);if(G.$$typeof===ot)return gt(q,ql(q,G),tt);Jl(q,G)}return null}function j(q,G,tt,mt){var jt=G!==null?G.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return jt!==null?null:E(q,G,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case U:return tt.key===jt?z(q,G,tt,mt):null;case w:return tt.key===jt?Z(q,G,tt,mt):null;case Et:return tt=ws(tt),j(q,G,tt,mt)}if(At(tt)||lt(tt))return jt!==null?null:ut(q,G,tt,mt,null);if(typeof tt.then=="function")return j(q,G,Ql(tt),mt);if(tt.$$typeof===ot)return j(q,G,ql(q,tt),mt);Jl(q,tt)}return null}function rt(q,G,tt,mt,jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get(tt)||null,E(G,q,""+mt,jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case U:return q=q.get(mt.key===null?tt:mt.key)||null,z(G,q,mt,jt);case w:return q=q.get(mt.key===null?tt:mt.key)||null,Z(G,q,mt,jt);case Et:return mt=ws(mt),rt(q,G,tt,mt,jt)}if(At(mt)||lt(mt))return q=q.get(tt)||null,ut(G,q,mt,jt,null);if(typeof mt.then=="function")return rt(q,G,tt,Ql(mt),jt);if(mt.$$typeof===ot)return rt(q,G,tt,ql(G,mt),jt);Jl(G,mt)}return null}function Pt(q,G,tt,mt){for(var jt=null,Ce=null,ne=G,ue=G=0,dn=null;ne!==null&&ue<tt.length;ue++){ne.index>ue?(dn=ne,ne=null):dn=ne.sibling;var De=j(q,ne,tt[ue],mt);if(De===null){ne===null&&(ne=dn);break}t&&ne&&De.alternate===null&&n(q,ne),G=c(De,G,ue),Ce===null?jt=De:Ce.sibling=De,Ce=De,ne=dn}if(ue===tt.length)return a(q,ne),ye&&la(q,ue),jt;if(ne===null){for(;ue<tt.length;ue++)ne=gt(q,tt[ue],mt),ne!==null&&(G=c(ne,G,ue),Ce===null?jt=ne:Ce.sibling=ne,Ce=ne);return ye&&la(q,ue),jt}for(ne=s(ne);ue<tt.length;ue++)dn=rt(ne,q,ue,tt[ue],mt),dn!==null&&(t&&(De=dn.alternate,De!==null&&ne.delete(De.key===null?ue:De.key)),G=c(dn,G,ue),Ce===null?jt=dn:Ce.sibling=dn,Ce=dn);return t&&ne.forEach(function(ns){return n(q,ns)}),ye&&la(q,ue),jt}function Kt(q,G,tt,mt){if(tt==null)throw Error(r(151));for(var jt=null,Ce=null,ne=G,ue=G=0,dn=null,De=tt.next();ne!==null&&!De.done;ue++,De=tt.next()){ne.index>ue?(dn=ne,ne=null):dn=ne.sibling;var ns=j(q,ne,De.value,mt);if(ns===null){ne===null&&(ne=dn);break}t&&ne&&ns.alternate===null&&n(q,ne),G=c(ns,G,ue),Ce===null?jt=ns:Ce.sibling=ns,Ce=ns,ne=dn}if(De.done)return a(q,ne),ye&&la(q,ue),jt;if(ne===null){for(;!De.done;ue++,De=tt.next())De=gt(q,De.value,mt),De!==null&&(G=c(De,G,ue),Ce===null?jt=De:Ce.sibling=De,Ce=De);return ye&&la(q,ue),jt}for(ne=s(ne);!De.done;ue++,De=tt.next())De=rt(ne,q,ue,De.value,mt),De!==null&&(t&&(dn=De.alternate,dn!==null&&ne.delete(dn.key===null?ue:dn.key)),G=c(De,G,ue),Ce===null?jt=De:Ce.sibling=De,Ce=De);return t&&ne.forEach(function(PM){return n(q,PM)}),ye&&la(q,ue),jt}function ge(q,G,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===F&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case U:t:{for(var jt=tt.key;G!==null;){if(G.key===jt){if(jt=tt.type,jt===F){if(G.tag===7){a(q,G.sibling),mt=l(G,tt.props.children),Ia(mt,tt),mt.return=q,q=mt;break t}}else if(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===Et&&ws(jt)===G.type){a(q,G.sibling),mt=l(G,tt.props),Ia(mt,tt),mt.return=q,q=mt;break t}a(q,G);break}else n(q,G);G=G.sibling}tt.type===F?(mt=Ms(tt.props.children,q.mode,mt,tt.key),Ia(mt,tt),mt.return=q,q=mt):(mt=Gl(tt.type,tt.key,tt.props,null,q.mode,mt),Ia(mt,tt),mt.return=q,q=mt)}return _(q);case w:t:{for(jt=tt.key;G!==null;){if(G.key===jt)if(G.tag===4&&G.stateNode.containerInfo===tt.containerInfo&&G.stateNode.implementation===tt.implementation){a(q,G.sibling),mt=l(G,tt.children||[]),mt.return=q,q=mt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}mt=uf(tt,q.mode,mt),mt.return=q,q=mt}return _(q);case Et:return tt=ws(tt),ge(q,G,tt,mt)}if(At(tt))return Pt(q,G,tt,mt);if(lt(tt)){if(jt=lt(tt),typeof jt!="function")throw Error(r(150));return tt=jt.call(tt),Kt(q,G,tt,mt)}if(typeof tt.then=="function")return ge(q,G,Ql(tt),mt);if(tt.$$typeof===ot)return ge(q,G,ql(q,tt),mt);Jl(q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,G!==null&&G.tag===6?(a(q,G.sibling),mt=l(G,tt),mt.return=q,q=mt):(a(q,G),mt=lf(tt,q.mode,mt),mt.return=q,q=mt),_(q)):a(q,G)}return function(q,G,tt,mt){try{No=0;var jt=ge(q,G,tt,mt);return mr=null,jt}catch(ne){if(ne===pr||ne===Zl)throw ne;var Ce=jn(29,ne,null,q.mode);return Ce.lanes=mt,Ce.return=q,Ce}}}var Us=ng(!0),ig=ng(!1),Ba=!1;function Sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ie&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Hl(t),Hm(t,null,a),n}return Fl(t,s,n,a),Hl(t)}function Lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,K(t,a)}}function yf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mf=!1;function Oo(){if(Mf){var t=dr;if(t!==null)throw t}}function Po(t,n,a,s){Mf=!1;var l=t.updateQueue;Ba=!1;var c=l.firstBaseUpdate,_=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var z=E,Z=z.next;z.next=null,_===null?c=Z:_.next=Z,_=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==_&&(E===null?ut.firstBaseUpdate=Z:E.next=Z,ut.lastBaseUpdate=z))}if(c!==null){var gt=l.baseState;_=0,ut=Z=z=null,E=c;do{var j=E.lane&-536870913,rt=j!==E.lane;if(rt?(Re&j)===j:(s&j)===j){j!==0&&j===Rs&&(Mf=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Pt=t,Kt=E;j=n;var ge=a;switch(Kt.tag){case 1:if(Pt=Kt.payload,typeof Pt=="function"){gt=Pt.call(ge,gt,j);break t}gt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Kt.payload,j=typeof Pt=="function"?Pt.call(ge,gt,j):Pt,j==null)break t;gt=L({},gt,j);break t;case 2:Ba=!0}}j=E.callback,j!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=l.callbacks,rt===null?l.callbacks=[j]:rt.push(j))}else rt={lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Z=ut=rt,z=gt):ut=ut.next=rt,_|=j;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,l.lastBaseUpdate=rt,l.shared.pending=null}}while(!0);ut===null&&(z=gt),l.baseState=z,l.firstBaseUpdate=Z,l.lastBaseUpdate=ut,c===null&&(l.shared.lanes=0),qa|=_,t.lanes=_,t.memoizedState=gt}}function ag(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function sg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ag(a[t],n)}var Ga=Wt(null),$l=Wt(0);function rg(t,n){t=ma,zt($l,t),zt(Ga,n),ma=t|n.baseLanes}function Ef(){zt($l,ma),zt(Ga,Ga.current)}function Tf(){ma=$l.current,xt(Ga),xt($l)}var Rn=Wt(null),Pn=null;function Va(t){var n=t.alternate;zt(Cn,Cn.current&1),zt(Rn,t),Pn===null&&(n===null||Ga.current!==null||n.memoizedState!==null)&&(Pn=t)}function bf(t){zt(Cn,Cn.current),zt(Rn,t),Pn===null&&(Pn=t)}function og(t){t.tag===22?(zt(Cn,Cn.current),zt(Rn,t),Pn===null&&(Pn=t)):Xa()}function Xa(){zt(Cn,Cn.current),zt(Rn,Rn.current)}function si(t){xt(Rn),Pn===t&&(Pn=null),xt(Cn)}var Cn=Wt(0);function zo(t,n){zt(Rn,Rn.current),zt(Cn,n)}function Af(t){xt(Cn),xt(Rn),Pn===t&&(Pn=null)}function tu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wh(a)||Zh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,me=null,je=null,fn=null,eu=!1,gr=!1,Ns=!1,nu=0,Io=0,_r=null,ny=0;function an(){throw Error(r(321))}function Rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Cf(t,n,a,s,l,c){return fa=c,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vt.H=t===null||t.memoizedState===null?kg:jg,Ns=!1,c=a(s,l),Ns=!1,gr&&(c=ug(n,a,s,l)),lg(t),c}function lg(t){vt.H=uu;var n=je!==null&&je.next!==null;if(fa=0,fn=je=me=null,eu=!1,Io=0,_r=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&Yl(t)&&(hn=!0))}function ug(t,n,a,s){me=t;var l=0;do{if(gr&&(_r=null),Io=0,gr=!1,25<=l)throw Error(r(301));if(l+=1,fn=je=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}vt.H=cy,c=n(a,s)}while(gr);return c}function iy(){var t=vt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(me.flags|=1024),n}function wf(){var t=nu!==0;return nu=0,t}function Df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uf(t){if(eu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}eu=!1}fa=0,fn=je=me=null,gr=!1,Io=nu=0,_r=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?me.memoizedState=fn=t:fn=fn.next=t,fn}function on(){if(je===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=fn===null?me.memoizedState:fn.next;if(n!==null)fn=n,je=t;else{if(t===null)throw me.alternate===null?Error(r(467)):Error(r(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},fn===null?me.memoizedState=fn=t:fn=fn.next=t}return fn}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=Io;return Io+=1,_r===null&&(_r=[]),t=$m(_r,t,n),n=me,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,vt.H=n===null||n.memoizedState===null?kg:jg),t}function au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===dt)return;if(t.$$typeof===ot)return An(t)}throw Error(r(438,String(t)))}function Nf(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=me.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=iu(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=pe;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function su(t){var n=on();return Lf(n,je,t)}function Lf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,c=s.pending;if(c!==null){if(l!==null){var _=l.next;l.next=c.next,c.next=_}n.baseQueue=l=c,s.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=_=null,z=null,Z=n,ut=!1;do{var gt=Z.lane&-536870913;if(gt!==Z.lane?(Re&gt)===gt:(fa&gt)===gt){var j=Z.revertLane;if(j===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),gt===Rs&&(ut=!0);else if((fa&j)===j){Z=Z.next,j===Rs&&(ut=!0);continue}else gt={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(E=z=gt,_=c):z=z.next=gt,me.lanes|=j,qa|=j;gt=Z.action,Ns&&a(c,gt),c=Z.hasEagerState?Z.eagerState:a(c,gt)}else j={lane:gt,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(E=z=j,_=c):z=z.next=j,me.lanes|=gt,qa|=gt;Z=Z.next}while(Z!==null&&Z!==n);if(z===null?_=c:z.next=E,!ai(c,t.memoizedState)&&(hn=!0,ut&&(a=dr,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=z,s.lastRenderedState=c}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Of(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var _=l=l.next;do c=t(c,_.action),_=_.next;while(_!==l);ai(c,n.memoizedState)||(hn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function cg(t,n,a){var s=me,l=on(),c=ye;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ai((je||l).memoizedState,a);if(_&&(l.memoizedState=a,hn=!0),l=l.queue,If(dg.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||_||fn!==null&&(fn.memoizedState.tag&1)!==0,vr(t?9:8,{destroy:void 0},hg.bind(null,s,l,a,n),null),t){if(s.flags|=2048,We===null)throw Error(r(349));c||(fa&127)!==0||fg(s,n,a)}return a}function fg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=iu(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function hg(t,n,a,s){n.value=a,n.getSnapshot=s,pg(n)&&mg(t)}function dg(t,n,a){return a(function(){pg(n)&&mg(t)})}function pg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function mg(t){var n=ys(t,2);n!==null&&Zn(n,t,2)}function Pf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Ns){mn(!0);try{a()}finally{mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function gg(t,n,a,s){return t.baseState=a,Lf(t,je,typeof s=="function"?s:ha)}function ay(t,n,a,s,l){if(lu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};vt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,_g(n,c)):(c.next=a.next,n.pending=a.next=c)}}function _g(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var c=vt.T,_={};_.types=c!==null?c.types:null,vt.T=_;try{var E=a(l,s),z=vt.S;z!==null&&z(_,E),vg(t,n,E)}catch(Z){zf(t,n,Z)}finally{c!==null&&_.types!==null&&(c.types=_.types),vt.T=c}}else try{c=a(l,s),vg(t,n,c)}catch(Z){zf(t,n,Z)}}function vg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Sg(t,n,s)},function(s){return zf(t,n,s)}):Sg(t,n,a)}function Sg(t,n,a){n.status="fulfilled",n.value=a,xg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_g(t,a)))}function zf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xg(n),n=n.next;while(n!==s)}t.action=null}function xg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function yg(t,n){return n}function Mg(t,n){if(ye){var a=We.formState;if(a!==null){t:{var s=me;if(ye){if(Ke){e:{for(var l=Ke,c=xi;l.nodeType!==8;){if(!c){l=null;break e}if(l=Mi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ke=Mi(l.nextSibling),s=l.data==="F!";break t}}Pa(s)}s=!1}s&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:n},a.queue=s,a=Gg.bind(null,me,s),s.dispatch=a,s=Pf(!1),c=Vf.bind(null,me,!1,s.queue),s=Hn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=ay.bind(null,me,l,c,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function Eg(t){var n=on();return Tg(n,je,t)}function Tg(t,n,a){if(n=Lf(t,n,yg)[0],t=su(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Bo(n)}catch(_){throw _===pr?Zl:_}else s=n;n=on();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(me.flags|=2048,vr(9,{destroy:void 0},sy.bind(null,l,a),null)),[s,c,t]}function sy(t,n){t.action=n}function bg(t){var n=on(),a=je;if(a!==null)return Tg(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function vr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=me.updateQueue,n===null&&(n=iu(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Ag(){return on().memoizedState}function ru(t,n,a,s){var l=Hn();me.flags|=t,l.memoizedState=vr(1|n,{destroy:void 0},a,s===void 0?null:s)}function ou(t,n,a,s){var l=on();s=s===void 0?null:s;var c=l.memoizedState.inst;je!==null&&s!==null&&Rf(s,je.memoizedState.deps)?l.memoizedState=vr(n,c,a,s):(me.flags|=t,l.memoizedState=vr(1|n,c,a,s))}function Rg(t,n){ru(8390656,8,t,n)}function If(t,n){ou(2048,8,t,n)}function ry(t){me.flags|=4;var n=me.updateQueue;if(n===null)n=iu(),me.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Cg(t){var n=on().memoizedState;return ry({ref:n,nextImpl:t}),function(){if((Ie&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function wg(t,n){return ou(4,2,t,n)}function Dg(t,n){return ou(4,4,t,n)}function Ug(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ng(t,n,a){a=a!=null?a.concat([t]):null,ou(4,4,Ug.bind(null,n,t),a)}function Bf(){}function Lg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Rf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Og(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Rf(n,s[1]))return s[0];if(s=t(),Ns){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s}function Ff(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=k_(),me.lanes|=t,qa|=t,a)}function Pg(t,n,a,s){return ai(a,n)?a:Ga.current!==null?(t=Ff(t,a,s),ai(t,n)||(hn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Re&261930)===0?(hn=!0,t.memoizedState=a):(t=k_(),me.lanes|=t,qa|=t,n)}function zg(t,n,a,s,l){var c=Vt.p;Vt.p=c!==0&&8>c?c:8;var _=vt.T,E={};E.types=_!==null?_.types:null,vt.T=E,Vf(t,!1,n,a);try{var z=l(),Z=vt.S;if(Z!==null&&Z(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=ey(z,s);Fo(t,n,ut,ui(t))}else Fo(t,n,s,ui(t))}catch(gt){Fo(t,n,{then:function(){},status:"rejected",reason:gt},ui())}finally{Vt.p=c,_!==null&&E.types!==null&&(_.types=E.types),vt.T=_}}function oy(){}function Hf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=Ig(t).queue;zg(t,l,n,B,a===null?oy:function(){return Bg(t),a(s)})}function Ig(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Bg(t){var n=Ig(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},ui())}function Gf(){return An(Ir)}function Fg(){return on().memoizedState}function Hg(){return on().memoizedState}function ly(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Fa(a);var s=Ha(n,t,a);s!==null&&(Zn(s,n,a),Lo(s,n,a)),n={cache:mf()},t.payload=n;return}n=n.return}}function uy(t,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lu(t)?Vg(n,a):(a=rf(t,n,a,s),a!==null&&(Zn(a,t,s),Xg(a,n,s)))}function Gg(t,n,a){var s=ui();Fo(t,n,a,s)}function Fo(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lu(t))Vg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,E=c(_,a);if(l.hasEagerState=!0,l.eagerState=E,ai(E,_))return Fl(t,n,l,0),We===null&&Bl(),!1}catch{}if(a=rf(t,n,l,s),a!==null)return Zn(a,t,s),Xg(a,n,s),!0}return!1}function Vf(t,n,a,s){if(s={lane:2,revertLane:Nh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},lu(t)){if(n)throw Error(r(479))}else n=rf(t,a,s,2),n!==null&&Zn(n,t,2)}function lu(t){var n=t.alternate;return t===me||n!==null&&n===me}function Vg(t,n){gr=eu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Xg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,K(t,a)}}var uu={readContext:An,use:au,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},kg={readContext:An,use:au,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Rg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ru(4194308,4,Ug.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ru(4194308,4,t,n)},useInsertionEffect:function(t,n){ru(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var s=t();if(Ns){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Hn();if(a!==void 0){var l=a(n);if(Ns){mn(!0);try{a(n)}finally{mn(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=uy.bind(null,me,t),[s.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pf(t);var n=t.queue,a=Gg.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bf,useDeferredValue:function(t,n){var a=Hn();return Ff(a,t,n)},useTransition:function(){var t=Pf(!1);return t=zg.bind(null,me,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=me,l=Hn();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Re&127)!==0||fg(s,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Rg(dg.bind(null,s,c,t),[t]),s.flags|=2048,vr(9,{destroy:void 0},hg.bind(null,s,c,a,n),null),a},useId:function(){var t=Hn(),n=We.identifierPrefix;if(ye){var a=Gi,s=Hi;a=(s&~(1<<32-Ln(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=nu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ny++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gf,useFormState:Mg,useActionState:Mg,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vf.bind(null,me,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nf,useCacheRefresh:function(){return Hn().memoizedState=ly.bind(null,me)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},jg={readContext:An,use:au,useCallback:Lg,useContext:An,useEffect:If,useImperativeHandle:Ng,useInsertionEffect:wg,useLayoutEffect:Dg,useMemo:Og,useReducer:su,useRef:Ag,useState:function(){return su(ha)},useDebugValue:Bf,useDeferredValue:function(t,n){var a=on();return Pg(a,je.memoizedState,t,n)},useTransition:function(){var t=su(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:cg,useId:Fg,useHostTransitionStatus:Gf,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,n){var a=on();return gg(a,je,t,n)},useMemoCache:Nf,useCacheRefresh:Hg,useEffectEvent:Cg},cy={readContext:An,use:au,useCallback:Lg,useContext:An,useEffect:If,useImperativeHandle:Ng,useInsertionEffect:wg,useLayoutEffect:Dg,useMemo:Og,useReducer:Of,useRef:Ag,useState:function(){return Of(ha)},useDebugValue:Bf,useDeferredValue:function(t,n){var a=on();return je===null?Ff(a,t,n):Pg(a,je.memoizedState,t,n)},useTransition:function(){var t=Of(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:cg,useId:Fg,useHostTransitionStatus:Gf,useFormState:bg,useActionState:bg,useOptimistic:function(t,n){var a=on();return je!==null?gg(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:Hg,useEffectEvent:Cg};function Xf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ui(),l=Fa(s);l.payload=n,a!=null&&(l.callback=a),n=Ha(t,l,s),n!==null&&(Zn(n,t,s),Lo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ui(),l=Fa(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ha(t,l,s),n!==null&&(Zn(n,t,s),Lo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),s=Fa(a);s.tag=2,n!=null&&(s.callback=n),n=Ha(t,s,a),n!==null&&(Zn(n,t,a),Lo(n,t,a))}};function Yg(t,n,a,s,l,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,_):n.prototype&&n.prototype.isPureReactComponent?!bo(a,s)||!bo(l,c):!0}function qg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function Wg(t){Il(t)}function Zg(t){console.error(t)}function Kg(t){Il(t)}function cu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Qg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function jf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){cu(t,n)},a}function Jg(t){return t=Fa(t),t.tag=3,t}function $g(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=s.value;t.payload=function(){return l(c)},t.callback=function(){Qg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Qg(n,a,s),typeof l!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function fy(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&bs(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Uu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===Kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),wh(t,s,l)),!1;case 22:return a.flags|=65536,s===Kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),wh(t,s,l)),!1}throw Error(r(435,a.tag))}return wh(t,s,l),Uu(),!1}if(ye)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==ff&&(t=Error(r(422),{cause:s}),Co(_i(t,a)))):(s!==ff&&(n=Error(r(423),{cause:s}),Co(_i(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=_i(s,a),l=jf(t.stateNode,s,l),yf(t,l),sn!==4&&(sn=2)),!1;var c=Error(r(520),{cause:s});if(c=_i(c,a),qo===null?qo=[c]:qo.push(c),sn!==4&&(sn=2),n===null)return!0;s=_i(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=jf(a.stateNode,s,t),yf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Wa===null||!Wa.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Jg(l),$g(l,t,a,s),yf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Yf=Error(r(461)),hn=!1;function _n(t,n,a,s){n.child=t===null?ig(n,null,a,s):Us(n,t.child,a,s)}function t_(t,n,a,s,l){a=a.render;var c=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return As(n),s=Cf(t,n,a,_,c,l),E=wf(),t!==null&&!hn?(Df(t,n,l),da(t,n,l)):(ye&&E&&Xl(n),n.flags|=1,_n(t,n,s,l),n.child)}function e_(t,n,a,s,l){if(t===null){var c=a.type;return typeof c=="function"&&!of(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,n_(t,n,c,s,l)):(t=Gl(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!th(t,l)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(_,s)&&t.ref===n.ref)return da(t,n,l)}return n.flags|=1,t=oa(c,s),t.ref=n.ref,t.return=n,n.child=t}function n_(t,n,a,s,l){if(t!==null){var c=t.memoizedProps;if(bo(c,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=c,th(t,l))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,da(t,n,l)}return qf(t,n,a,s,l)}function i_(t,n,a,s){var l=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~c}else s=0,n.child=null;return a_(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,c!==null?c.cachePool:null),c!==null?rg(n,c):Ef(),og(n);else return s=n.lanes=536870912,a_(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Wl(n,c.cachePool),rg(n,c),Xa(),n.memoizedState=null):(t!==null&&Wl(n,null),Ef(),Xa());return _n(t,n,l,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function a_(t,n,a,s,l){var c=_f();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Wl(n,null),Ef(),og(n),t!==null&&bs(t,n,s,!0),n.childLanes=l,null}function fu(t,n){return n=hu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function s_(t,n,a){return Us(n,t.child,null,a),t=fu(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function hy(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(s.mode==="hidden")return t=fu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(bf(n),(t=Ke)?(t=Uv(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Vm(t),a.return=n,n.child=a,Mn=n,Ke=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return fu(n,s)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(bf(n),l)if(n.flags&256)n.flags&=-257,n=s_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||bs(t,n,a,!1),l=(a&t.childLanes)!==0,hn||l){if(Ga.current===null){if(s=We,s!==null&&(_=ct(s,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,ys(t,_),Zn(s,t,_),Yf;Uu()}n=s_(t,n,a)}else t=c.treeContext,Ke=Mi(_.nextSibling),Mn=n,ye=!0,Oa=null,xi=!1,t!==null&&jm(n,t),n=fu(n,s),n.flags|=134221824;return n}return t=oa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function qf(t,n,a,s,l){return As(n),a=Cf(t,n,a,s,void 0,l),s=wf(),t!==null&&!hn?(Df(t,n,l),da(t,n,l)):(ye&&s&&Xl(n),n.flags|=1,_n(t,n,a,l),n.child)}function r_(t,n,a,s,l,c){return As(n),n.updateQueue=null,a=ug(n,s,a,l),lg(t),s=wf(),t!==null&&!hn?(Df(t,n,c),da(t,n,c)):(ye&&s&&Xl(n),n.flags|=1,_n(t,n,a,c),n.child)}function o_(t,n,a,s,l){if(As(n),n.stateNode===null){var c=ur,_=a.contextType;typeof _=="object"&&_!==null&&(c=An(_)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=kf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},Sf(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?An(_):ur,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Xf(n,a,_,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&kf.enqueueReplaceState(c,c.state,null),Po(n,s,c,l),Oo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,z=Ls(a,E);c.props=z;var Z=c.context,ut=a.contextType;_=ur,typeof ut=="object"&&ut!==null&&(_=An(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||Z!==_)&&qg(n,c,s,_),Ba=!1;var j=n.memoizedState;c.state=j,Po(n,s,c,l),Oo(),Z=n.memoizedState,E||j!==Z||Ba?(typeof gt=="function"&&(Xf(n,a,gt,s),Z=n.memoizedState),(z=Ba||Yg(n,a,z,s,j,Z,_))?(ut||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),c.props=s,c.state=Z,c.context=_,s=z):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,xf(t,n),_=n.memoizedProps,ut=Ls(a,_),c.props=ut,gt=n.pendingProps,j=c.context,Z=a.contextType,z=ur,typeof Z=="object"&&Z!==null&&(z=An(Z)),E=a.getDerivedStateFromProps,(Z=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==gt||j!==z)&&qg(n,c,s,z),Ba=!1,j=n.memoizedState,c.state=j,Po(n,s,c,l),Oo();var rt=n.memoizedState;_!==gt||j!==rt||Ba||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof E=="function"&&(Xf(n,a,E,s),rt=n.memoizedState),(ut=Ba||Yg(n,a,ut,s,j,rt,z)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,rt,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,rt,z)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),c.props=s,c.state=rt,c.context=z,s=ut):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,Sr(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Us(n,t.child,null,l),n.child=Us(n,null,a,l)):_n(t,n,a,l),n.memoizedState=c.state,t=n.child):t=da(t,n,l),t}function l_(t,n,a,s){return Es(),n.flags|=256,_n(t,n,a,s),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:Qm()}}function Kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function u_(t,n,a){var s=n.pendingProps,l=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(l?Va(n):Xa(),(t=Ke)?(t=Uv(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Vm(t),a.return=n,n.child=a,Mn=n,Ke=null)):t=null,t===null)throw Pa(n);return Zh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,l?(Xa(),l=n.mode,c=hu({mode:"hidden",children:c},l),s=Ms(s,l,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Zf(a),s.childLanes=Kf(t,_,a),n.memoizedState=Wf,Ho(null,s)):(Va(n),Qf(n,c))}var E=t.memoizedState;if(E!==null){var z=E.dehydrated;if(z!==null)return dy(t,n,c,_,s,z,E,a)}return l?(Xa(),l=s.fallback,c=n.mode,E=t.child,z=E.sibling,s=oa(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,z!==null?l=oa(z,l):(l=Ms(l,c,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Ho(null,s),s=n.child,l=t.child.memoizedState,l===null?l=Zf(a):(c=l.cachePool,c!==null?(E=cn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Qm(),l={baseLanes:l.baseLanes|a,cachePool:c}),s.memoizedState=l,s.childLanes=Kf(t,_,a),n.memoizedState=Wf,Ho(t.child,s)):(Va(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Qf(t,n){return n=hu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hu(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function du(t,n,a){return Us(n,t.child,null,a),t=Qf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dy(t,n,a,s,l,c,_,E){if(a)return n.flags&256?(Va(n),n.flags&=-257,du(t,n,E)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,null):(Xa(),c=l.fallback,_=n.mode,l=hu({mode:"visible",children:l.children},_),c=Ms(c,_,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Us(n,t.child,null,E),l=n.child,l.memoizedState=Zf(E),l.childLanes=Kf(t,s,E),n.memoizedState=Wf,Ho(null,l));if(Va(n),Zh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var z=s.dgst;return s=z,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Co({value:l,source:null,stack:null})),du(t,n,E)}if(hn||bs(t,n,E,!1),s=(E&t.childLanes)!==0,hn||s){if(Ga.current!==null)return du(t,n,E);if(s=We,s!==null&&(l=ct(s,E),l!==0&&l!==_.retryLane))throw _.retryLane=l,ys(t,l),Zn(s,t,l),Yf;return Wh(c)||Uu(),du(t,n,E)}return Wh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ke=Mi(c.nextSibling),Mn=n,ye=!0,Oa=null,xi=!1,t!==null&&jm(n,t),n=Qf(n,l.children),n.flags|=134221824,n)}function c_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),jl(t.return,n,a)}function f_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&tu(a)===null&&(n=t),t=t.sibling}return n}function pu(t,n,a,s,l,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=l,_.treeForkCount=c)}function Jf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function $f(t,n,a){var s=n.pendingProps,l=s.revealOrder,c=s.tail;s=s.children;var _=Cn.current;if(n.flags&128)return zo(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,zo(n,_),l==="backwards"&&t!==null?(Jf(t),_n(t,n,s,a),Jf(t)):_n(t,n,s,a),s=ye?Ro:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c_(t,a,n);else if(t.tag===19)c_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=f_(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Jf(n)),pu(n,!0,l,null,c,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&tu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}pu(n,!0,a,null,c,s);break;case"together":pu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=f_(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),pu(n,!1,l,a,c,s)}return n.child}function h_(t,n,a){var s=n.pendingProps;return za(n,n.type,s.value),_n(t,n,s.children,a),n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function th(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function py(t,n,a){switch(n.tag){case 3:O(n,n.stateNode.containerInfo),za(n,cn,t.memoizedState.cache),Es();break;case 27:case 5:et(n);break;case 4:O(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Va(n),n.flags|=128,null;s=bs(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?u_(t,n,a):(Va(n),t=da(t,n,a),t!==null?t.sibling:null)}Va(n);break;case 19:if(n.flags&128)return $f(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(bs(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return $f(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),zo(n,Cn.current),s)break;return null;case 22:return n.lanes=0,i_(t,n,a,n.pendingProps);case 24:za(n,cn,t.memoizedState.cache)}return da(t,n,a)}function d_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!th(t,a)&&(n.flags&128)===0)return hn=!1,py(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,ye&&(n.flags&1048576)!==0&&km(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")of(t)?(s=Ls(t,s),n.tag=1,n=o_(null,n,t,s,a)):(n.tag=0,n=qf(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===k){n.tag=11,n=t_(null,n,t,s,a);break t}else if(l===Mt){n.tag=14,n=e_(null,n,t,s,a);break t}else if(l===ot){n.tag=10,n.type=t,n=h_(null,n,a);break t}}throw n=Nt(t)||t,Error(r(306,n,""))}}return n;case 0:return qf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Ls(s,n.pendingProps),o_(t,n,s,l,a);case 3:t:{if(O(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;l=c.element,xf(t,n),Po(n,s,null,a);var _=n.memoizedState;if(s=_.cache,za(n,cn,s),s!==c.cache&&pf(n,[cn],a,!0),Oo(),s=_.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=l_(t,n,s,a);break t}else if(s!==l){l=_i(Error(r(424)),n),Co(l),n=l_(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=Mi(t.firstChild),Mn=n,ye=!0,Oa=null,xi=!0,a=ig(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Es(),s===l){n=da(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return Sr(t,n),t===null?(a=Bv(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(n.stateNode=_v(n.type,n.pendingProps,Xt.current,n)):n.memoizedState=Bv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&ye&&(s=n.stateNode=Ov(n.type,n.pendingProps,Xt.current),Mn=n,xi=!0,l=Ke,Qa(n.type)?(Kh=l,Ke=Mi(s.firstChild)):Ke=l),_n(t,n,n.pendingProps.children,a),Sr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((l=s=Ke)&&(s=lM(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,Mn=n,Ke=Mi(s.firstChild),xi=!1,l=!0):l=!1),l||Pa(n)),et(n),l=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,s=c.children,Gh(l,c)?s=null:_!==null&&Gh(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=Cf(t,n,iy,null,null,a),Ir._currentValue=l),Sr(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&ye&&((t=a=Ke)&&(a=uM(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Mn=n,Ke=null,t=!0):t=!1),t||Pa(n)),null;case 13:return u_(t,n,a);case 4:return O(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Us(n,null,s,a):_n(t,n,s,a),n.child;case 11:return t_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Sr(t,n),_n(t,n,s,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return h_(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,As(n),l=An(l),s=s(l),n.flags|=1,_n(t,n,s,a),n.child;case 14:return e_(t,n,n.type,n.pendingProps,a);case 15:return n_(t,n,n.type,n.pendingProps,a);case 19:return $f(t,n,a);case 31:return hy(t,n,a);case 22:return i_(t,n,a,n.pendingProps);case 24:return As(n),s=An(cn),t===null?(l=_f(),l===null&&(l=We,c=mf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:s,cache:l},Sf(n),za(n,cn,l)):((t.lanes&a)!==0&&(xf(t,n),Po(n,null,null,a),Oo()),l=t.memoizedState,c=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),za(n,cn,s)):(s=c.cache,za(n,cn,s),s!==l.cache&&pf(n,[cn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ye&&Xl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Sr(t,n),_n(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function pa(t){t.flags|=4}function eh(t,n,a,s,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Vv(n,s):Vv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(W_())t.flags|=8192;else throw Ds=Kl,vf}else t.flags&=-16777217}function p_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Xv(n))if(W_())t.flags|=8192;else throw Ds=Kl,vf}function mu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Rl():536870912,t.lanes|=n,Tr|=n)}function Go(t,n){if(!ye)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function my(t,n,a){var s=n.pendingProps;switch(cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ca(cn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hr(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hf())),Qe(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(pa(n),c!==null?(Qe(n),p_(n,c)):(Qe(n),eh(n,l,null,s,a))):c?c!==t.memoizedState?(pa(n),Qe(n),p_(n,c)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&pa(n),Qe(n),eh(n,l,t,s,a)),null;case 27:if(pt(n),a=Xt.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=Dt.current,hr(n)?Ym(n):(t=Ov(l,s,a),n.stateNode=t,pa(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(c=Dt.current,hr(n))Ym(n);else{var _=Jo(Xt.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?_.createElement(l,{is:s.is}):_.createElement(l)}}c[Lt]=n,c[Zt]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Dn(c,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&pa(n)}}return Qe(n),n.subtreeFlags&=-33554433,eh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Xt.current,hr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||dv(t.nodeValue,a)),t||Pa(n,!0)}else t=Jo(t).createTextNode(s),t[Lt]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=hr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Lt]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=hr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Lt]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),l=!1}else l=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),mu(n,n.updateQueue),Qe(n),null);case 4:return T(),t===null&&zh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return ca(n.type),Qe(n),null;case 19:if(Af(n),s=n.memoizedState,s===null)return Qe(n),null;if(l=(n.flags&128)!==0,c=s.rendering,c===null)if(l)Go(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=tu(t),c!==null){for(n.flags|=128,Go(s,!1),t=c.updateQueue,n.updateQueue=t,mu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Gm(a,t),a=a.sibling;return zo(n,Cn.current&1|2),ye&&la(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&X()>Ru&&(n.flags|=128,l=!0,Go(s,!1),n.lanes=4194304)}else{if(!l)if(t=tu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,mu(n,t),Go(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!ye)return Qe(n),null}else 2*X()-s.renderingStartTime>Ru&&a!==536870912&&(n.flags|=128,l=!0,Go(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ye?zo(n,c):(a=c,zt(Rn,n),zt(Cn,a),Pn===null&&(Pn=n)),ye&&la(n,s.treeForkCount),t}return Qe(n),null;case 22:case 23:return si(n),Tf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&mu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&xt(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(cn),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(r(156,n.tag))}function gy(t,n){switch(cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(cn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Af(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ca(n.type),null;case 22:case 23:return si(n),Tf(),t!==null&&xt(Cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(cn),null;case 25:return null;default:return null}}function m_(t,n){switch(cf(n),n.tag){case 3:ca(cn),T();break;case 26:case 27:case 5:pt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Af(n);break;case 10:ca(n.type);break;case 22:case 23:si(n),Tf(),t!==null&&xt(Cs);break;case 24:ca(cn)}}function Vo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var c=a.create,_=a.inst;s=c(),_.destroy=s}a=a.next}while(a!==l)}}catch(E){Ve(n,n.return,E)}}function ka(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,l=n;var z=a,Z=E;try{Z()}catch(ut){Ve(l,z,ut)}}}s=s.next}while(s!==c)}}catch(ut){Ve(n,n.return,ut)}}function g_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sg(n,a)}catch(s){Ve(t,t.return,s)}}}function __(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(t,n,s)}}function Vi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,c=sa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=Tv(c)),s=l.ref;break;case 7:if(t.stateNode===null){var _=new ci(t);m(t.child,!1,rM,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){Ve(t,n,E)}}function wn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){Ve(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ve(t,n,l)}else a.current=null}function gu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Dv(t.stateNode,n[a])}function v_(t){for(var n=t.return;n!==null&&(ih(n)&&Dv(t.stateNode,n.stateNode),!nh(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(ih(n)&&oM(t.stateNode,n.stateNode),!nh(n));)n=n.return}function nh(t){return t.tag===5||t.tag===3||t.tag===27}function ih(t){return t&&t.tag===7&&t.stateNode!==null}function ah(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){Ve(t,t.return,l)}}function sh(t,n,a){try{var s=t.stateNode;Vy(s,t.type,a,n),s[Zt]=n}catch(l){Ve(t,t.return,l)}}function S_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function rh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||S_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi)),gu(t,s),Le=!0;else if(l!==4&&(l===27&&(gu(t,s),s=null,Qa(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(oh(t,n,a,s),t=t.sibling;t!==null;)oh(t,n,a,s),t=t.sibling}function _u(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),gu(t,s),Le=!0;else if(l!==4&&(l===27&&(gu(t,s),s=null,Qa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(_u(t,n,a,s),t=t.sibling;t!==null;)_u(t,n,a,s),t=t.sibling}function x_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,s,a),n[Lt]=t,n[Zt]=a}catch(c){Ve(t,t.return,c)}}var vu=!1,ri=null;function y_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(vu=!0)}var Xi=null;function M_(){var t=Xi;return Xi=null,t}var Yn=0;function xr(t,n,a,s,l){return Yn=0,E_(t.child,n,a,s,l)}function E_(t,n,a,s,l){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var E=kh(_);s.push(E),E.view&&(c=!0)}else c||kh(_).view&&(c=!0);vu=!0,Mv(_,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||E_(t.child,n,a,s,l)&&(c=!0));t=t.sibling}return c}function ki(t,n){for(;t!==null;)t.tag===5?Ev(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ki(t.child,n)),t=t.sibling}function Su(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Su(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ra(n.default,n.share),n!=="none"&&(xr(t,a,n,null,!1)||ki(t.child,!1))}t=t.sibling}}function lh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=sa(s,a),c=ra(s.default,a.paired?s.share:s.enter);c!=="none"?xr(t,l,c,null,!1)?(Su(t),a.paired||n||Cr(t,s.onEnter)):ki(t.child,!1):Su(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)lh(t,n),t=t.sibling;else Su(t)}function uh(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var c=ra(a.default,a.share);if(c!=="none"&&(xr(t,s,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Cr(t,a.onShare)):ki(t.child,!1)),n.delete(s),n.size===0)break}}}uh(t)}t=t.sibling}}}function ch(t){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode),s=ri!==null?ri.get(a):void 0,l=ra(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(xr(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ri.delete(a),Cr(t,n.onShare)):Cr(t,n.onExit):ki(t.child,!1)),ri!==null&&uh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ch(t),t=t.sibling;else ri!==null&&uh(t)}function T_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode);n=ra(n.default,n.update),t.flags&=-5,n!=="none"&&xr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&T_(t);t=t.sibling}}function fh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ki(t.child,!1))}fh(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,ki(t.child,!1),fh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else fh(t)}function b_(t){for(t=t.child;t!==null;)t.tag===30?ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&b_(t),t=t.sibling}function hh(t,n,a,s,l,c,_){for(var E=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(c!==null&&Yn<c.length){var Z=c[Yn],ut=kh(z);(Z.view||ut.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(ut.clip)gt=!0;else{gt=Z.rect;var j=ut.rect;gt=gt.y!==j.y||gt.x!==j.x||gt.height!==j.height||gt.width!==j.width}gt&&(t.flags|=4),ut.abs?ut=!Z.abs:(Z=Z.rect,ut=ut.rect,ut=Z.height!==ut.height||Z.width!==ut.width),ut&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Mv(z,Yn===0?a:a+"_"+Yn,l),E&&(t.flags&4)!==0||(Xi===null&&(Xi=[]),Xi.push(z,Yn===0?s:s+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:hh(t,n.child,a,s,l,c,_)&&(E=!0));n=n.sibling}return E}function A_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=sa(a,s),c=ra(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;Yn=0,l=hh(s,E,l,l,c,_,!1),(t.flags&4)!==0&&l&&Cr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&A_(t);t=t.sibling}}var En=!1,He=!1,ji=!1,dh=!1,R_=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Yi=!1,ko=!1,yu=!1,ph=!1;function _y(t,n,a){if(t=t.containerInfo,Fh=Br,t=Um(t),$c(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var E=0,z=-1,Z=-1,ut=0,gt=0,j=t,rt=null;e:for(;;){for(var Pt;j!==s||c!==0&&j.nodeType!==3||(z=E+c),j!==_||l!==0&&j.nodeType!==3||(Z=E+l),j.nodeType===3&&(E+=j.nodeValue.length),(Pt=j.firstChild)!==null;)rt=j,j=Pt;for(;;){if(j===t)break e;if(rt===s&&++ut===c&&(z=E),rt===_&&++gt===l&&(Z=E),(Pt=j.nextSibling)!==null)break;j=rt,rt=j.parentNode}j=Pt}s=z===-1||Z===-1?null:{start:z,end:Z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Hh={focusedElem:t,selectionRange:s},Br=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&ch(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&y_(t),Mu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&ch(s),Mu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&y_(t),Mu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Tn=s):(a&&T_(t),Mu(a))}}ri=null}function Mu(t){for(;Tn!==null;){var n=Tn,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var _=Ls(n.type,l);a=c.getSnapshotBeforeUpdate(_,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Ve(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)qh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":qh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=sa(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=ra(l.default,l.update),l!=="none"&&xr(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Tn=s;break}Tn=n.return}}function C_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&Vo(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ve(a,a.return,_)}else{var l=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ve(a,a.return,_)}}s&64&&g_(a),s&512&&Vi(a,a.return);break;case 3:if(qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sg(t,n)}catch(_){Ve(a,a.return,_)}}break;case 27:n===null&&s&4&&x_(a);case 26:case 5:qi(t,a),n===null&&s&4&&ah(a),s&512&&Vi(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),s&4&&N_(t,a);break;case 13:qi(t,a),s&4&&L_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wy.bind(null,a),cM(t,a))));break;case 22:if(s=a.memoizedState!==null||En,!s){var c=n!==null&&n.memoizedState!==null||He;n=En,l=He,En=s,(He=c)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),wi(t,a,s)):qi(t,a),En=n,He=l}break;case 30:qi(t,a),s&512&&Vi(a,a.return);break;case 7:s&512&&Vi(a,a.return);default:qi(t,a)}}function mh(t,n){for(t=t.child;t!==null;)w_(t,n),t=t.sibling}function w_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){Ve(t,t.return,z)}gh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Le=!0}catch(z){Ve(t,t.return,z)}break;case 18:try{var E=t.stateNode;n?yv(E,!0):yv(t.stateNode,!1)}catch(z){Ve(t,t.return,z)}break;case 22:case 23:t.memoizedState===null&&mh(t,n);break;default:mh(t,n)}}function gh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:w_(a,s);break t;case 22:a.memoizedState===null&&gh(a,s);break t;default:gh(a,s)}}t=t.sibling}}function D_(t){var n=t.alternate;n!==null&&(t.alternate=null,D_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&se(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,qn=!1;function Ri(t,n,a){for(a=a.child;a!==null;)U_(t,n,a),a=a.sibling}function U_(t,n,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:He||wn(a,n),Ri(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||wn(a,n),Xo(a);var s=$e,l=qn;Qa(a.type)&&($e=a.stateNode,qn=!1),Ri(t,n,a),Pv(a.stateNode,a.type,a.memoizedProps),$e=s,qn=l;break;case 5:He||wn(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),s=$e,l=qn,$e=null,Ri(t,n,a),$e=s,qn=l,$e!==null)if(qn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),Le=!0}catch(c){Ve(a,n,c)}else try{$e.removeChild(a.stateNode),Le=!0}catch(c){Ve(a,n,c)}break;case 18:$e!==null&&(qn?(t=$e,xv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fr(t)):xv($e,a.stateNode));break;case 4:s=$e,l=qn,$e=a.stateNode.containerInfo,qn=!0,Ri(t,n,a),$e=s,qn=l;break;case 0:case 11:case 14:case 15:ka(2,a,n),He||ka(4,a,n),Ri(t,n,a);break;case 1:He||(wn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&__(a,n,s)),Ri(t,n,a);break;case 21:Ri(t,n,a);break;case 22:He=(s=He)||a.memoizedState!==null,Ri(t,n,a),He=s;break;case 30:wn(a,n),Ri(t,n,a);break;case 7:He||wn(a,n),Ri(t,n,a);break;default:Ri(t,n,a)}}function N_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fr(t)}catch(a){Ve(n,n.return,a)}}}function L_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fr(t)}catch(a){Ve(n,n.return,a)}}function vy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new R_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new R_),n;default:throw Error(r(435,t.tag))}}function Eu(t,n){var a=vy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=Dy.bind(null,t,s);s.then(l,l)}})}function Gn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],_=t,E=n,z=E;t:for(;z!==null;){switch(z.tag){case 27:if(Qa(z.type)){$e=z.stateNode,qn=!1;break t}break;case 5:$e=z.stateNode,qn=!1;break t;case 3:case 4:$e=z.stateNode.containerInfo,qn=!0;break t}z=z.return}if($e===null)throw Error(r(160));U_(_,E,c),$e=null,qn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)O_(n,t,a),n=n.sibling}var Ci=null;function O_(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var _=s[c];_.ref.impl=_.nextImpl}Gn(n,t,a),Vn(t),l&4&&(ka(3,t,t.return),Vo(3,t),ka(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),l&512&&(He||s===null||wn(s,s.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ci,Gn(n,t,a),Vn(t),l&512&&(He||s===null||wn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=_v(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Pe]||s[Lt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Dn(s,n,a),s[Lt]=t,Ne(s),n=s;break t;case"link":if(c=Gv("link","href",l).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}s=l.createElement(n),Dn(s,n,a),l.head.appendChild(s);break;case"meta":if(c=Gv("meta","content",l).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}s=l.createElement(n),Dn(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[Lt]=t,Ne(s),n=s}t.stateNode=n}else En||td(c,t.type,t.stateNode);else t.stateNode=Hv(c,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||He||n.parentNode.removeChild(n)):l.count--,a===null?En||td(c,t.type,t.stateNode):Hv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&sh(t,t.memoizedProps,s.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),l&512&&(He||s===null||wn(s,s.return)),s!==null&&l&4&&sh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=ji,ji=!1,Gn(n,t,a),ji=c,Vn(t),l&512&&(He||s===null||wn(s,s.return)),t.flags&32){n=t.stateNode;try{nr(n,""),Le=!0}catch(ut){Ve(t,t.return,ut)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,sh(t,n,s!==null?s.memoizedProps:n)),l&1024&&(dh=!0);break;case 6:if(Gn(n,t,a),Vn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Le=!0}catch(ut){Ve(t,t.return,ut)}}break;case 3:if(Le=!1,Bu=null,c=Ci,Ci=$o(n.containerInfo),Gn(n,t,a),Ci=c,Vn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(ut){Ve(t,t.return,ut)}dh&&(dh=!1,P_(t)),Le=!1;break;case 4:l=ji,ji=En,s=em(),c=Ci,Ci=$o(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),Ci=c,Le&&ko&&(yu=!0),Le=s,ji=l;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Au=X()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 22:c=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var E=En,z=He,Z=ji;En=E||c,ji=Z||c,He=z||_,Gn(n,t,a),He=z,ji=Z,En=E,Vn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||_||En||He||(n=_||He,a=En,s=He,En=c||En,He=n,ja(t,2),En=a,He=s),!c&&ji||mh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Eu(t,a))));break;case 19:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 30:l&512&&(He||s===null||wn(s,s.return)),l=em(),c=ko,_=(a&335544064)===a,E=t.memoizedProps,ko=_&&ra(E.default,E.update)!=="none",Gn(n,t,a),Vn(t),_&&s!==null&&Le&&(t.flags|=4),ko=c,Le=l;break;case 21:break;case 7:l&512&&(He||s===null||wn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(S_(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(ih(l)){var c=l.stateNode;s===null?s=[c]:s.push(c)}if(nh(l))break;l=l.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,z=rh(t);_u(t,z,E,_);break;case 5:var Z=a.stateNode;a.flags&32&&(nr(Z,""),a.flags&=-33);var ut=rh(t);_u(t,ut,Z,_);break;case 3:case 4:var gt=a.stateNode.containerInfo,j=rh(t);oh(t,j,gt,_);break;default:throw Error(r(161))}}catch(rt){Ve(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function P_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;P_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Br=!0,n.reset(),Br=!1),t=t.sibling}}function yr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)z_(n,t),n=n.sibling;else A_(n)}function z_(t,n){var a=t.alternate;if(a===null)lh(t,!1);else switch(t.tag){case 3:if(ph=Yi=!1,M_(),yr(n,t),!Yi&&!yu){if(t=Xi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];Ev(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ph=!0}Xi=null;break;case 5:yr(n,t);break;case 4:s=Yi,Yi=!1,yr(n,t),Yi&&(yu=!0),Yi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?lh(t,!1):yr(n,t));break;case 30:s=Yi,l=M_(),Yi=!1,yr(n,t),Yi&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=sa(c,_),_=sa(a.memoizedProps,_);var E=ra(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=hh(t,a,n,_,E,c,!0),Yn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cr(t,t.memoizedProps.onUpdate),Xi=l):l!==null&&(l.push.apply(l,Xi),Xi=l),Yi=(t.flags&32)!==0?!0:s;break;default:yr(n,t)}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)C_(t,n.alternate,n),n=n.sibling}function ja(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ka(4,a,a.return),ja(a,s);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&__(a,a.return,l),ja(a,s);break;case 27:(s&2)!==0&&Pv(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),ja(a,s);break;case 6:Xo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||He||l.parentNode.removeChild(l),ja(a,s);break;case 22:a.memoizedState===null&&ja(a,s);break;case 30:wn(a,a.return),ja(a,s);break;case 7:wn(a,a.return);default:ja(a,s)}t=t.sibling}}function wi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,c=n,_=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:wi(l,c,a),Vo(4,c);break;case 1:if(wi(l,c,a),s=c,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ut){Ve(s,s.return,ut)}if(s=c,l=s.updateQueue,l!==null){var z=s.stateNode;try{var Z=l.shared.hiddenCallbacks;if(Z!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Z.length;l++)ag(Z[l],z)}catch(ut){Ve(s,s.return,ut)}}E&&_&64&&g_(c),Vi(c,c.return);break;case 27:(a&2)!==0&&x_(c);case 5:c.tag!==5&&c.tag!==27||v_(c),wi(l,c,a),E&&s===null&&_&4&&ah(c),Vi(c,c.return);break;case 6:v_(c);break;case 26:z=c.stateNode,c.memoizedState!==null||z===null||En||td($o(z.ownerDocument),c.type,z),wi(l,c,a),E&&s===null&&_&4&&ah(c),Vi(c,c.return);break;case 12:wi(l,c,a);break;case 31:wi(l,c,a),E&&_&4&&N_(l,c);break;case 13:wi(l,c,a),E&&_&4&&L_(l,c);break;case 22:c.memoizedState===null&&wi(l,c,a),Vi(c,c.return);break;case 30:wi(l,c,a),Vi(c,c.return);break;case 7:Vi(c,c.return);default:wi(l,c,a)}n=n.sibling}}function _h(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wo(a))}function vh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function yi(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)I_(t,n,a,s),n=n.sibling;else l&&b_(n)}function I_(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&Vo(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),l&&ph&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&wo(c)));break;case 12:if(c&2048){yi(t,n,a,s),c=n.stateNode;try{var _=n.memoizedProps,E=_.id,z=_.onPostCommit;typeof z=="function"&&z(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Z){Ve(n,n.return,Z)}}else yi(t,n,a,s);break;case 31:yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&xu(E),_._visibility&2?yi(t,n,a,s):jo(t,n)):(l&&E!==null&&E.memoizedState!==null&&xu(n),_._visibility&2?yi(t,n,a,s):(_._visibility|=2,Mr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&_h(E,n);break;case 24:yi(t,n,a,s),c&2048&&vh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ki(c.child,!0),ki(n.child,!0))),yi(t,n,a,s);break;default:yi(t,n,a,s)}}function Mr(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,E=a,z=s,Z=_.flags;switch(_.tag){case 0:case 11:case 15:Mr(c,_,E,z,l),Vo(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?Mr(c,_,E,z,l):jo(c,_):(ut._visibility|=2,Mr(c,_,E,z,l)),l&&Z&2048&&_h(_.alternate,_);break;case 24:Mr(c,_,E,z,l),l&&Z&2048&&vh(_.alternate,_);break;default:Mr(c,_,E,z,l)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:jo(a,s),l&2048&&_h(s.alternate,s);break;case 24:jo(a,s),l&2048&&vh(s.alternate,s);break;default:jo(a,s)}n=n.sibling}}var Os=8192;function Ps(t,n,a){if(t.subtreeFlags&Os)for(t=t.child;t!==null;)B_(t,n,a),t=t.sibling}function B_(t,n,a){switch(t.tag){case 26:Ps(t,n,a),t.flags&Os&&(t.memoizedState!==null?TM(a,Ci,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&jv(a,t)));break;case 5:Ps(t,n,a),t.flags&Os&&(t=t.stateNode,(n&335544128)===n&&jv(a,t));break;case 3:case 4:var s=Ci;Ci=$o(t.stateNode.containerInfo),Ps(t,n,a),Ci=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Os,Os=16777216,Ps(t,n,a),Os=s):Ps(t,n,a));break;case 30:if((t.flags&Os)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(s,l)}Ps(t,n,a);break;default:Ps(t,n,a)}}function F_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Tn=s,G_(s,t)}F_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)H_(t),t=t.sibling}function H_(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tu(t)):Yo(t);break;default:Yo(t)}}function Tu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Tn=s,G_(s,t)}F_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Tu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tu(n));break;default:Tu(n)}t=t.sibling}}function G_(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:wo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Tn=s;else t:for(a=t;Tn!==null;){s=Tn;var l=s.sibling,c=s.return;if(D_(s),s===a){Tn=null;break t}if(l!==null){l.return=c,Tn=l;break t}Tn=c}}}var Sy={getCacheForType:function(t){var n=An(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(cn).controller.signal}},xy=typeof WeakMap=="function"?WeakMap:Map,Ie=0,We=null,Ee=null,Re=0,Ge=0,oi=null,Ya=!1,Er=!1,Sh=!1,ma=0,sn=0,qa=0,zs=0,bu=0,li=0,Tr=0,qo=null,Wn=null,xh=!1,Au=0,V_=0,Ru=1/0,Cu=null,Wa=null,en=0,Di=null,Is=null,Wi=0,yh=0,Mh=null,X_=null,br=null,Ar=null,Rr=null,Wo=0,wu=null;function ui(){return(Ie&2)!==0&&Re!==0?Re&-Re:vt.T!==null?Nh():Rt()}function k_(){if(li===0)if((Re&536870912)===0||ye){var t=na;na<<=1,(na&3932160)===0&&(na=262144),li=t}else li=536870912;return t=Rn.current,t!==null&&(t.flags|=32),li}function Cr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Tv(sa(t.memoizedProps,a))),Ar===null&&(Ar=[]),Ar.push(n.bind(null,s))}}function Zn(t,n,a){(t===We&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(wr(t,0),Za(t,Re,li,!1)),vs(t,a),((Ie&2)===0||t!==We)&&(t===We&&((Ie&2)===0&&(zs|=a),sn===4&&Za(t,Re,li,!1)),Zi(t))}function j_(t,n,a){if((Ie&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||wa(t,n),l=s?Ey(t,n):Th(t,n,!0),c=s;do{if(l===0){Er&&!s&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!yy(a)){l=Th(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;l=qo;var z=E.current.memoizedState.isDehydrated;if(z&&(wr(E,_).flags|=256),_=Th(E,_,!1),_!==2&&_!==6){if(Sh&&!z){E.errorRecoveryDisabledLanes|=c,zs|=c,l=4;break t}c=Wn,Wn=l,c!==null&&(Wn===null?Wn=c:Wn.push.apply(Wn,c))}l=_}if(c=!1,l!==2)continue}}if(l===1){wr(t,0),Za(t,n,0,!0);break}t:{switch(s=t,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Za(s,n,li,!Ya);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Au+300-X(),10<l)){if(Za(s,n,li,!Ya),_s(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=Xh(Y_.bind(null,s,a,Wn,Cu,xh,n,li,zs,Tr,Ya,c,"Throttled",-0,0),l);break t}Y_(s,a,Wn,Cu,xh,n,li,zs,Tr,Ya,c,null,-0,0)}}break}while(!0);Zi(t)}function Y_(t,n,a,s,l,c,_,E,z,Z,ut,gt,j,rt){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Kt=(c&335544064)===c;if(gt=null,(Kt||Pt&8192||(Pt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},ri=null,B_(n,c,gt),Kt&&(Pt=gt,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=nl.bind(Pt),Kt.finished.then(Pt,Pt))),Pt=(c&62914560)===c?Au-X():(c&4194048)===c?V_-X():0,Pt=bM(gt,Pt),Pt!==null)){Wi=c,t.cancelPendingCommit=Pt(tv.bind(null,t,n,c,a,s,l,_,E,z,Z,ut,gt,null,j,rt)),Za(t,c,_,!Z);return}tv(t,n,c,a,s,l,_,E,z,Z,ut,gt)}function yy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],c=l.getSnapshot;l=l.value;try{if(!ai(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,s){n=Al(t,n),n&=~bu,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var c=31-Ln(l),_=1<<c;s[c]=-1,l&=~_}a!==0&&R(t,a,n)}function Du(){return(Ie&6)===0?(Zo(0),!1):!0}function Eh(){if(Ee!==null){if(Ge===0)var t=Ee.return;else t=Ee,ua=Ts=null,Uf(t),mr=null,No=0,t=Ee;for(;t!==null;)m_(t.alternate,t),t=t.return;Ee=null}}function wr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,jy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Eh(),We=t,Ee=a=oa(t.current,null),Re=n,Ge=0,oi=null,Ya=!1,Er=wa(t,n),Sh=!1,Tr=li=bu=zs=qa=sn=0,Wn=qo=null,xh=!1,ma=Al(t,n),Bl(),a}function q_(t,n){me=null,vt.H=uu,n===pr||n===Zl?(n=tg(),Ge=3):n===vf?(n=tg(),Ge=4):Ge=n===Yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Ee===null&&(sn=1,cu(t,_i(n,t.current)))}function W_(){var t=Rn.current;return t===null?!0:(Re&4194048)===Re?Pn===null:(Re&62914560)===Re||(Re&536870912)!==0?t===Pn:!1}function Z_(){var t=vt.H;return vt.H=uu,t===null?uu:t}function K_(){var t=vt.A;return vt.A=Sy,t}function Uu(){sn=4,Ya||(Re&4194048)!==Re&&Rn.current!==null||(Er=!0),(qa&134217727)===0&&(zs&134217727)===0||We===null||Za(We,Re,li,!1)}function Th(t,n,a){var s=Ie;Ie|=2;var l=Z_(),c=K_();(We!==t||Re!==n)&&(Cu=null,wr(t,n)),n=!1;var _=sn;t:do try{if(Ge!==0&&Ee!==null){var E=Ee,z=oi;switch(Ge){case 8:Eh(),_=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var Z=Ge;if(Ge=0,oi=null,Dr(t,E,z,Z),a&&Er){_=0;break t}break;default:Z=Ge,Ge=0,oi=null,Dr(t,E,z,Z)}}My(),_=sn;break}catch(ut){q_(t,ut)}while(!0);return n&&t.shellSuspendCounter++,ua=Ts=null,Ie=s,vt.H=l,vt.A=c,Ee===null&&(We=null,Re=0,Bl()),_}function My(){for(;Ee!==null;)Q_(Ee)}function Ey(t,n){var a=Ie;Ie|=2;var s=Z_(),l=K_();We!==t||Re!==n?(Cu=null,Ru=X()+500,wr(t,n)):Er=wa(t,n);t:do try{if(Ge!==0&&Ee!==null){n=Ee;var c=oi;e:switch(Ge){case 1:Ge=0,oi=null,Dr(t,n,c,1);break;case 2:case 9:if(Jm(c)){Ge=0,oi=null,J_(n);break}n=function(){Ge!==2&&Ge!==9||We!==t||(Ge=7),Zi(t)},c.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Jm(c)?(Ge=0,oi=null,J_(n)):(Ge=0,oi=null,Dr(t,n,c,7));break;case 5:var _=null;switch(Ee.tag){case 26:_=Ee.memoizedState;case 5:case 27:var E=Ee;if(_?Xv(_):E.stateNode.complete){Ge=0,oi=null;var z=E.sibling;if(z!==null)Ee=z;else{var Z=E.return;Z!==null?(Ee=Z,Nu(Z)):Ee=null}break e}}Ge=0,oi=null,Dr(t,n,c,5);break;case 6:Ge=0,oi=null,Dr(t,n,c,6);break;case 8:Eh(),sn=6;break t;default:throw Error(r(462))}}Ty();break}catch(ut){q_(t,ut)}while(!0);return ua=Ts=null,vt.H=s,vt.A=l,Ie=a,Ee!==null?0:(We=null,Re=0,Bl(),sn)}function Ty(){for(;Ee!==null&&!Ft();)Q_(Ee)}function Q_(t){var n=d_(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Nu(t):Ee=n}function J_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=r_(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=r_(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Uf(n);var s=n;s===Mn&&(ye?(kl(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(kl(s),ye=!0));default:m_(a,n),n=Ee=Gm(n,ma),n=d_(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Nu(t):Ee=n}function Dr(t,n,a,s){ua=Ts=null,Uf(n),mr=null,No=0;var l=n.return;try{if(fy(t,l,n,a,Re)){sn=1,cu(t,_i(a,t.current)),Ee=null;return}}catch(c){if(l!==null)throw Ee=l,c;sn=1,cu(t,_i(a,t.current)),Ee=null;return}n.flags&32768?(ye||s===1?t=!0:Er||(Re&536870912)!==0?t=!1:(Ya=t=!0,(s===2||s===9||s===3||s===6)&&(s=Rn.current,s!==null&&s.tag===13&&(s.flags|=16384))),$_(n,t)):Nu(n)}function Nu(t){var n=t;do{if((n.flags&32768)!==0){$_(n,Ya);return}t=n.return;var a=my(n.alternate,n,ma);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);sn===0&&(sn=5)}function $_(t,n){do{var a=gy(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);sn=6,Ee=null}function tv(t,n,a,s,l,c,_,E,z,Z,ut,gt){t.cancelPendingCommit=null;do Lu();while(en!==0);if((Ie&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===We&&(Ee=We=null,Re=0),Is=n,Di=t,Wi=a,Mh=l,X_=s,by(t,n,a,_,E,z,gt)}}function by(t,n,a,s,l,c,_){var E=n.lanes|n.childLanes;if(yh=E,E|=sf,Pc(t,a,E,s,l,c),Ar=null,(a&335544064)===a?(Rr=$x(t),s=10262):(Rr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Uy(bt,function(){return Ch(),null})):(t.callbackNode=null,t.callbackPriority=0),vu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=vt.T,vt.T=null,l=Vt.p,Vt.p=2,c=Ie,Ie|=4;try{_y(t,n,a)}finally{Ie=c,Vt.p=l,vt.T=s}}en=1,vu?br=Qy(_,t.containerInfo,Rr,bh,Ah,Ry,Rh,Ch,Ay):(bh(),Ah(),Rh())}function Ay(t){if(en!==0){var n=Di.onRecoverableError;n(t,{componentStack:null})}}function Ry(){en===3&&(en=0,z_(Is,Di),en=4)}function bh(){if(en===1){en=0;var t=Di,n=Is,a=Wi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=vt.T,vt.T=null;var l=Vt.p;Vt.p=2;var c=Ie;Ie|=4;try{ko=yu=!1,O_(n,t,a),a=Hh;var _=Um(t.containerInfo),E=a.focusedElem,z=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&Dm(E.ownerDocument.documentElement,E)){if(z!==null&&$c(E)){var Z=z.start,ut=z.end;if(ut===void 0&&(ut=Z),"selectionStart"in E)E.selectionStart=Z,E.selectionEnd=Math.min(ut,E.value.length);else{var gt=E.ownerDocument||document,j=gt&&gt.defaultView||window;if(j.getSelection){var rt=j.getSelection(),Pt=E.textContent.length,Kt=Math.min(z.start,Pt),ge=z.end===void 0?Kt:Math.min(z.end,Pt);!rt.extend&&Kt>ge&&(_=ge,ge=Kt,Kt=_);var q=wm(E,Kt),G=wm(E,ge);if(q&&G&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==G.node||rt.focusOffset!==G.offset)){var tt=gt.createRange();tt.setStart(q.node,q.offset),rt.removeAllRanges(),Kt>ge?(rt.addRange(tt),rt.extend(G.node,G.offset)):(tt.setEnd(G.node,G.offset),rt.addRange(tt))}}}}for(gt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var mt=gt[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Br=!!Fh,Hh=Fh=null}finally{Ie=c,Vt.p=l,vt.T=s}}t.current=n,en=2}}function Ah(){if(en===2){en=0;var t=Di,n=Is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=vt.T,vt.T=null;var s=Vt.p;Vt.p=2;var l=Ie;Ie|=4;try{C_(t,n.alternate,n)}finally{Ie=l,Vt.p=s,vt.T=a}}en=3}}function Rh(){if(en===4||en===3){en=0;var t=br;br=null,de();var n=Di,a=Is,s=Wi,l=X_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?en=5:(en=0,Is=Di=null,ev(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Wa=null),Q(s),a=a.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ae,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=vt.T,c=Vt.p,Vt.p=2,vt.T=null;try{for(var _=n.onRecoverableError,E=0;E<l.length;E++){var z=l[E];_(z.value,{componentStack:z.stack})}}finally{vt.T=a,Vt.p=c}}if(l=Ar,_=Rr,Rr=null,l!==null&&(Ar=null,_===null&&(_=[]),t!==null))for(z=0;z<l.length;z++)a=(0,l[z])(_),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Lu(),Zi(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===wu?Wo++:(Wo=0,wu=n):(Wo=0,wu=null),Zo(0)}}function ev(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function Lu(){return br!==null&&(br.skipTransition(),br=null),bh(),Ah(),Rh(),Ch()}function Ch(){if(en!==5)return!1;var t=Di,n=yh;yh=0;var a=Q(Wi),s=vt.T,l=Vt.p;try{Vt.p=32>a?32:a,vt.T=null,a=Mh,Mh=null;var c=Di,_=Wi;if(en=0,Is=Di=null,Wi=0,(Ie&6)!==0)throw Error(r(331));var E=Ie;if(Ie|=4,H_(c.current),I_(c,c.current,_,a),Ie=E,Zo(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ae,c)}catch{}return!0}finally{Vt.p=l,vt.T=s,ev(t,n)}}function nv(t,n,a){n=_i(a,n),n=jf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(vs(t,2),Zi(t))}function Ve(t,n,a){if(t.tag===3)nv(t,t,a);else for(;n!==null;){if(n.tag===3){nv(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wa===null||!Wa.has(s))){t=_i(a,t),a=Jg(2),s=Ha(n,a,2),s!==null&&($g(a,s,n,t),vs(s,2),Zi(s));break}}n=n.return}}function wh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new xy;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(Sh=!0,l.add(a),t=Cy.bind(null,t,n,a),n.then(t,t))}function Cy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Re&a)===a&&((sn===4||sn===3&&(Re&62914560)===Re&&300>X()-Au)&&(Ie&2)===0?wr(t,0):bu|=a,Tr===Re&&(Tr=0)),Zi(t)}function iv(t,n){n===0&&(n=Rl()),t=ys(t,n),t!==null&&(vs(t,n),Zi(t))}function wy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),iv(t,a)}function Dy(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),iv(t,a)}function Uy(t,n){return le(t,n)}var Ur=null,Nr=null,Dh=!1,Ou=!1,Uh=!1,Ka=0;function Zi(t){t!==Nr&&t.next===null&&(Nr===null?Ur=Nr=t:Nr=Nr.next=t),Ou=!0,Dh||(Dh=!0,Ly())}function Zo(t,n){if(!Uh&&Ou){Uh=!0;do for(var a=!1,s=Ur;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var c=0;else{var _=s.suspendedLanes,E=s.pingedLanes;c=(1<<31-Ln(42|t)+1)-1,c&=l&~(_&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,ov(s,c))}else c=Re,c=_s(s,s===We?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||wa(s,c)||(a=!0,ov(s,c));s=s.next}while(a);Uh=!1}}function Ny(){av()}function av(){Ou=Dh=!1;var t=0;Ka!==0&&ky()&&(t=Ka);for(var n=X(),a=null,s=Ur;s!==null;){var l=s.next,c=sv(s,n);c===0?(s.next=null,a===null?Ur=l:a.next=l,l===null&&(Nr=a)):(a=s,(t!==0||(c&3)!==0)&&(Ou=!0)),s=l}en!==0&&en!==5||Zo(t),Ka!==0&&(Ka=0)}function sv(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-Ln(c),E=1<<_,z=l[_];z===-1?((E&a)===0||(E&s)!==0)&&(l[_]=Oc(E,n)):z<=n&&(t.expiredLanes|=E),c&=~E}if(n=We,a=Re,a=_s(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&te(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&te(s),Q(a)){case 2:case 8:a=Yt;break;case 32:a=bt;break;case 268435456:a=Jt;break;default:a=bt}return s=rv.bind(null,t),a=le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&te(s),t.callbackPriority=2,t.callbackNode=null,2}function rv(t,n){if(en!==0&&en!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Lu()&&t.callbackNode!==a)return null;var s=Re;return s=_s(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(j_(t,s,n),sv(t,X()),t.callbackNode!=null&&t.callbackNode===a?rv.bind(null,t):null)}function ov(t,n){if(Lu())return null;j_(t,n,!0)}function Ly(){Yy(function(){(Ie&6)!==0?le(Ot,Ny):av()})}function Nh(){if(Ka===0){var t=Rs;t===0&&(t=ms,ms<<=1,(ms&261888)===0&&(ms=256)),Ka=t}return Ka}function lv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(t)}function Oy(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var c=lv((l[Zt]||null).action),_=s.submitter;_&&(n=(n=_[Zt]||null)?lv(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var E=new Ol("action","action",null,s,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ka!==0){var z=new FormData(l,_);Hf(a,{pending:!0,data:z,method:l.method,action:c},null,z)}}else typeof c=="function"&&(E.preventDefault(),z=new FormData(l,_),Hf(a,{pending:!0,data:z,method:l.method,action:c},c,z))},currentTarget:l}]})}}for(var Lh=0;Lh<af.length;Lh++){var Oh=af[Lh],Py=Oh.toLowerCase(),zy=Oh[0].toUpperCase()+Oh.slice(1);Ai(Py,"on"+zy)}Ai(Om,"onAnimationEnd"),Ai(Pm,"onAnimationIteration"),Ai(zm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(jx,"onTransitionRun"),Ai(Yx,"onTransitionStart"),Ai(qx,"onTransitionCancel"),Ai(Im,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function uv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],z=E.instance,Z=E.currentTarget;if(E=E.listener,z!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(ut){Il(ut)}l.currentTarget=null,c=z}else for(_=0;_<s.length;_++){if(E=s[_],z=E.instance,Z=E.currentTarget,E=E.listener,z!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(ut){Il(ut)}l.currentTarget=null,c=z}}}}function Te(t,n){var a=n[ae];a===void 0&&(a=n[ae]=new Set);var s=t+"__bubble";a.has(s)||(cv(n,t,2,!1),a.add(s))}function Ph(t,n,a){var s=0;n&&(s|=4),cv(a,t,s,n)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function zh(t){if(!t[Pu]){t[Pu]=!0,Ze.forEach(function(a){a!=="selectionchange"&&(Iy.has(a)||Ph(a,!1,t),Ph(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pu]||(n[Pu]=!0,Ph("selectionchange",!1,n))}}function cv(t,n,a,s){switch($v(n)){case 2:var l=wM;break;case 8:l=DM;break;default:l=nd}a=l.bind(null,n,a,t),l=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Ih(t,n,a,s,l){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===l)break;if(_===4)for(_=s.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;E!==null;){if(_=ze(E),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){s=c=_;continue t}E=E.parentNode}}s=s.return}cm(function(){var Z=c,ut=Gc(a),gt=[];t:{var j=Bm.get(t);if(j!==void 0){var rt=Ol,Pt=t;switch(t){case"keypress":if(Nl(a)===0)break t;case"keydown":case"keyup":rt=yx;break;case"focusin":Pt="focus",rt=qc;break;case"focusout":Pt="blur",rt=qc;break;case"beforeblur":case"afterblur":rt=qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Ax;break;case Om:case Pm:case zm:rt=hx;break;case Im:rt=Cx;break;case"scroll":case"scrollend":rt=ox;break;case"wheel":rt=Dx;break;case"copy":case"cut":case"paste":rt=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=mm;break;case"submit":rt=Tx;break;case"toggle":case"beforetoggle":rt=Nx}var Kt=(n&4)!==0,ge=!Kt&&(t==="scroll"||t==="scrollend"),q=Kt?j!==null?j+"Capture":null:j;Kt=[];for(var G=Z,tt;G!==null;){var mt=G;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||q===null||(mt=vo(G,q),mt!=null&&Kt.push(Qo(G,mt,tt))),ge)break;G=G.return}0<Kt.length&&(j=new rt(j,Pt,null,a,ut),gt.push({event:j,listeners:Kt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",rt&&a!==Hc&&(Pt=a.relatedTarget||a.fromElement)&&(ze(Pt)||Pt[re]))break t;(j||rt)&&(Pt=ut.window===ut?ut:(rt=ut.ownerDocument)?rt.defaultView||rt.parentWindow:window,j?(rt=a.relatedTarget||a.toElement,j=Z,rt=rt?ze(rt):null,rt!==null&&(ge=f(rt),Kt=rt.tag,rt!==ge||Kt!==5&&Kt!==27&&Kt!==6)&&(rt=null)):(j=null,rt=Z),j!==rt&&(Kt=dm,mt="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=mm,mt="onPointerLeave",q="onPointerEnter",G="pointer"),ge=j==null?Pt:gn(j),tt=rt==null?Pt:gn(rt),Pt=new Kt(mt,G+"leave",j,a,ut),Pt.target=ge,Pt.relatedTarget=tt,mt=null,ze(ut)===Z&&(Kt=new Kt(q,G+"enter",rt,a,ut),Kt.target=tt,Kt.relatedTarget=ge,mt=Kt),ge=mt,Kt=j&&rt?P(j,rt,By):null,j!==null&&fv(gt,Pt,j,Kt,!1),rt!==null&&ge!==null&&fv(gt,ge,rt,Kt,!0)))}t:{if(j=Z?gn(Z):window,rt=j.nodeName&&j.nodeName.toLowerCase(),rt==="select"||rt==="input"&&j.type==="file")var jt=Em;else if(ym(j))if(Tm)jt=Vx;else{jt=Hx;var Ce=Fx}else rt=j.nodeName,!rt||rt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?Z&&Fc(Z.elementType)&&(jt=Em):jt=Gx;if(jt&&(jt=jt(t,Z))){Mm(gt,jt,a,ut);break t}Ce&&Ce(t,j,Z)}switch(Ce=Z?gn(Z):window,t){case"focusin":(ym(Ce)||Ce.contentEditable==="true")&&(rr=Ce,tf=Z,Ao=null);break;case"focusout":Ao=tf=rr=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Nm(gt,a,ut);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Nm(gt,a,ut)}var ne;if(Zc)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else sr?Sm(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(gm&&a.locale!=="ko"&&(sr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&sr&&(ne=fm()):(Ua=ut,kc="value"in Ua?Ua.value:Ua.textContent,sr=!0)),Ce=zu(Z,ue),0<Ce.length&&(ue=new pm(ue,t,null,a,ut),gt.push({event:ue,listeners:Ce}),ne?ue.data=ne:(ne=xm(a),ne!==null&&(ue.data=ne)))),(ne=Ox?Px(t,a):zx(t,a))&&(ue=zu(Z,"onBeforeInput"),0<ue.length&&(Ce=new pm("onBeforeInput","beforeinput",null,a,ut),gt.push({event:Ce,listeners:ue}),Ce.data=ne)),Oy(gt,t,Z,a,ut)}uv(gt,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zu(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=vo(t,a),l!=null&&s.unshift(Qo(t,l,c)),l=vo(t,n),l!=null&&s.push(Qo(t,l,c))),t.tag===3)return s;t=t.return}return[]}function By(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fv(t,n,a,s,l){for(var c=n._reactName,_=[];a!==null&&a!==s;){var E=a,z=E.alternate,Z=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||Z===null||(z=Z,l?(Z=vo(a,c),Z!=null&&_.unshift(Qo(a,Z,z))):l||(Z=vo(a,c),Z!=null&&_.push(Qo(a,Z,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Fy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function hv(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Hy,"")}function dv(t,n){return n=hv(n),hv(t)===n}function Xe(t,n,a,s,l,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||nr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&nr(t,""+s);else return;break;case"className":wl(t,"class",s);break;case"tabIndex":wl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(t,a,s);break;case"style":lm(t,s,c);return;case"data":if(n!=="object"){wl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Dl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",l.name,l,null),Xe(t,n,"formEncType",l.formEncType,l,null),Xe(t,n,"formMethod",l.formMethod,l,null),Xe(t,n,"formTarget",l.formTarget,l,null)):(Xe(t,n,"encType",l.encType,l,null),Xe(t,n,"method",l.method,l,null),Xe(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Dl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Fi);return;case"onScroll":s!=null&&Te("scroll",t);return;case"onScrollEnd":s!=null&&Te("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Dl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Te("beforetoggle",t),Te("toggle",t),Cl(t,"popover",s);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Cl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=sx.get(a)||a,Cl(t,a,s);else return}Le=!0}function Bh(t,n,a,s,l,c){switch(a){case"style":lm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")nr(t,s);else if(typeof s=="number"||typeof s=="bigint")nr(t,""+s);else return;break;case"onScroll":s!=null&&Te("scroll",t);return;case"onScrollEnd":s!=null&&Te("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Zt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,l);break t}Le=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Cl(t,a,s)}return}Le=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",t),Te("load",t);var s=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,c,_,a,null)}}l&&Xe(t,n,"srcSet",a.srcSet,a,null),s&&Xe(t,n,"src",a.src,a,null);return;case"input":Te("invalid",t);var E=c=_=l=null,z=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":l=ut;break;case"type":_=ut;break;case"checked":z=ut;break;case"defaultChecked":Z=ut;break;case"value":c=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Xe(t,n,s,ut,a,null)}}am(t,c,E,z,Z,_,l,!1);return;case"select":Te("invalid",t),s=_=c=null;for(l in a)if(a.hasOwnProperty(l)&&(E=a[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Xe(t,n,l,E,a,null)}n=c,a=_,t.multiple=!!s,n!=null?er(t,!!s,n,!1):a!=null&&er(t,!!s,a,!0);return;case"textarea":Te("invalid",t),c=l=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Xe(t,n,_,E,a,null)}rm(t,s,l,c);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Xe(t,n,z,s,a,null));return;case"dialog":Te("beforetoggle",t),Te("toggle",t),Te("cancel",t),Te("close",t);break;case"iframe":case"object":Te("load",t);break;case"video":case"audio":for(s=0;s<Ko.length;s++)Te(Ko[s],t);break;case"image":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"embed":case"source":case"link":Te("error",t),Te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,Z,s,a,null)}return;default:if(Fc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Bh(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Xe(t,n,E,s,a,null))}var Gy={};function Vy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,_=null,E=null,z=null,Z=null,ut=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=gt;default:s.hasOwnProperty(rt)||Xe(t,n,rt,null,s,gt)}}for(var j in s){var rt=s[j];if(gt=a[j],s.hasOwnProperty(j)&&(rt!=null||gt!=null))switch(j){case"type":rt!==gt&&(Le=!0),c=rt;break;case"name":rt!==gt&&(Le=!0),l=rt;break;case"checked":rt!==gt&&(Le=!0),Z=rt;break;case"defaultChecked":rt!==gt&&(Le=!0),ut=rt;break;case"value":rt!==gt&&(Le=!0),_=rt;break;case"defaultValue":rt!==gt&&(Le=!0),E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==gt&&Xe(t,n,j,rt,s,gt)}}Ic(t,_,E,z,Z,ut,c,l);return;case"select":rt=_=E=j=null;for(c in a)if(z=a[c],a.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":rt=z;default:s.hasOwnProperty(c)||Xe(t,n,c,null,s,z)}for(l in s)if(c=s[l],z=a[l],s.hasOwnProperty(l)&&(c!=null||z!=null))switch(l){case"value":c!==z&&(Le=!0),j=c;break;case"defaultValue":c!==z&&(Le=!0),E=c;break;case"multiple":c!==z&&(Le=!0),_=c;default:c!==z&&Xe(t,n,l,c,s,z)}n=E,a=_,s=rt,j!=null?er(t,!!a,j,!1):!!s!=!!a&&(n!=null?er(t,!!a,n,!0):er(t,!!a,a?[]:"",!1));return;case"textarea":rt=j=null;for(E in a)if(l=a[E],a.hasOwnProperty(E)&&l!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xe(t,n,E,null,s,l)}for(_ in s)if(l=s[_],c=a[_],s.hasOwnProperty(_)&&(l!=null||c!=null))switch(_){case"value":l!==c&&(Le=!0),j=l;break;case"defaultValue":l!==c&&(Le=!0),rt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&Xe(t,n,_,l,s,c)}sm(t,j,rt);return;case"option":for(var Pt in a)j=a[Pt],a.hasOwnProperty(Pt)&&j!=null&&!s.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Xe(t,n,Pt,null,s,j));for(z in s)j=s[z],rt=a[z],s.hasOwnProperty(z)&&j!==rt&&(j!=null||rt!=null)&&(z==="selected"?(j!==rt&&(Le=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):Xe(t,n,z,j,s,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)j=a[Kt],a.hasOwnProperty(Kt)&&j!=null&&!s.hasOwnProperty(Kt)&&Xe(t,n,Kt,null,s,j);for(Z in s)if(j=s[Z],rt=a[Z],s.hasOwnProperty(Z)&&j!==rt&&(j!=null||rt!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:Xe(t,n,Z,j,s,rt)}return;default:if(Fc(n)){for(var ge in a)j=a[ge],a.hasOwnProperty(ge)&&j!==void 0&&!s.hasOwnProperty(ge)&&Bh(t,n,ge,void 0,s,j);for(ut in s)j=s[ut],rt=a[ut],!s.hasOwnProperty(ut)||j===rt||j===void 0&&rt===void 0||Bh(t,n,ut,j,s,rt);return}}for(var q in a)j=a[q],a.hasOwnProperty(q)&&j!=null&&!s.hasOwnProperty(q)&&Xe(t,n,q,null,s,j);for(gt in s)j=s[gt],rt=a[gt],!s.hasOwnProperty(gt)||j===rt||j==null&&rt==null||Xe(t,n,gt,j,s,rt)}function pv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],c=l.transferSize,_=l.initiatorType,E=l.duration;if(c&&E&&pv(_)){for(_=0,E=l.responseEnd,s+=1;s<a.length;s++){var z=a[s],Z=z.startTime;if(Z>E)break;var ut=z.transferSize,gt=z.initiatorType;ut&&pv(gt)&&(z=z.responseEnd,_+=ut*(z<E?1:(E-Z)/(z-Z)))}if(--s,n+=8*(c+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Fh=null,Hh=null;function Jo(t){return t.nodeType===9?t:t.ownerDocument}function mv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function _v(t,n,a,s){return a=Jo(a).createElement(t),a[Lt]=s,a[Zt]=n,Dn(a,t,n),Ne(a),a}function Gh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vh=null;function ky(){var t=window.event;return t&&t.type==="popstate"?t===Vh?!1:(Vh=t,!0):(Vh=null,!1)}var Xh=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,vv=typeof Promise=="function"?Promise:void 0,Sv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Xh,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof vv<"u"?function(t){return vv.resolve(null).then(t).catch(qy)}:Xh;function qy(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function xv(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),Fr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Qh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Qh(a);for(var c=a.firstChild;c;){var _=c.nextSibling,E=c.nodeName;c[Pe]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&Qh(t.ownerDocument.body);a=l}while(a);Fr(n)}function yv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Mv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Ev(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Wy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function kh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Wy(n,a,t)}function Zy(t){return t.documentElement.clientHeight}function Ky(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Qy(t,n,a,s,l,c,_,E,z){var Z=n.nodeType===9?n:n.ownerDocument;try{var ut=Z.startViewTransition({update:function(){var j=Z.defaultView,rt=j.navigation&&j.navigation.transition,Pt=Z.fonts.status;s();var Kt=[];if(Pt==="loaded"&&(Zy(Z),Z.fonts.status==="loading"&&Kt.push(Z.fonts.ready)),Pt=Kt.length,t!==null)for(var ge=t.suspenseyImages,q=0,G=0;G<ge.length;G++){var tt=ge[G];if(!tt.complete){var mt=tt.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<j.innerHeight&&mt.left<j.innerWidth){if(q+=kv(tt),q>Fu){Kt.length=Pt;break}tt=new Promise(Ky.bind(tt)),Kt.push(tt)}}}if(0<Kt.length)return j=Promise.race([Promise.all(Kt),new Promise(function(jt){return setTimeout(jt,500)})]).then(l,l),(rt?Promise.allSettled([rt.finished,j]):j).then(c,c);if(l(),rt)return rt.finished.then(c,c);c()},types:a});Z.__reactViewTransition=ut;var gt=[];return ut.ready.then(function(){for(var j=Z.documentElement.getAnimations({subtree:!0}),rt=0;rt<j.length;rt++){var Pt=j[rt],Kt=Pt.effect,ge=Kt.pseudoElement;if(ge!=null&&ge.startsWith("::view-transition")){gt.push(Pt),Pt=Kt.getKeyframes();for(var q=ge=void 0,G=!0,tt=0;tt<Pt.length;tt++){var mt=Pt[tt],jt=mt.width;if(ge===void 0)ge=jt;else if(ge!==jt){G=!1;break}if(jt=mt.height,q===void 0)q=jt;else if(q!==jt){G=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}G&&ge!==void 0&&q!==void 0&&(Kt.setKeyframes(Pt),G=getComputedStyle(Kt.target,Kt.pseudoElement),G.width!==ge||G.height!==q)&&(G=Pt[0],G.width=ge,G.height=q,G=Pt[Pt.length-1],G.width=ge,G.height=q,Kt.setKeyframes(Pt))}}_()},function(j){Z.__reactViewTransition===ut&&(Z.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&z(j)}finally{s(),l(),_()}}),ut.finished.finally(function(){for(var j=0;j<gt.length;j++)gt[j].cancel();Z.__reactViewTransition===ut&&(Z.__reactViewTransition=null),E()}),ut}catch{return s(),l(),_(),null}}function Bs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Bs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Bs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[l])}return s},Bs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Tv(t){return{name:t,group:new Bs("group",t),imagePair:new Bs("image-pair",t),old:new Bs("old",t),new:new Bs("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(Av(c,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(z){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),s!==null&&(l=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Lr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,Jy,t,E,s)}this._eventListeners=c}};function Jy(t,n,a,s){return x(t).addEventListener(n,a,s),!1}ci.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Av(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var c=l.cleanup;l=Lr(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,$y,t,a,l),s.splice(n,1),c!==null&&c()}};function $y(t,n,a,s){return x(t).removeEventListener(n,a,s),!1}function Lr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function bv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Av(t,n,a,s){if(t.length===0)return-1;s=bv(s);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&bv(c.optionsOrUseCapture)===s)return l}return-1}ci.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];s.addEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],s.removeEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Rv,t,void 0,void 0)};function Rv(t,n){return t.tag===6?!1:(t=x(t),fM(t,n))}ci.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,jh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Rv(n[a],t);a--);};function jh(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=x(t),t=Jo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,tM,t,void 0,void 0))};function tM(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,eM,t,void 0,void 0)};function eM(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,nM,t,void 0,void 0);for(var a=n=0;a<Ui.length;a++){var s=Ui[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ui[n++]=s}Ui.length=n}};function nM(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var Ui=[],Yh=!1;function iM(t,n,a){Ui.push({fragmentInstance:t,observer:n,instance:a}),Yh||(Yh=!0,hM(function(){Yh=!1;var s=Ui;Ui=[];for(var l=0;l<s.length;l++){var c=s[l];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,aM,t,void 0,void 0),t};function aM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,jh,a,void 0,void 0);var s=x(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),l=x(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),z=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&l===t||z||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||sM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function sM(t,n,a,s,l){var c=ze(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=y(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=P(a,c,I),n===null?n=!1:(m(n,!0,D,c,a),c=v,v=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=P(s,c,I),n===null?n=!1:(m(n,!0,A,c,s),c=v,N=v=null,n=c!==null)),n):!1}function Cv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,jh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=x(s),Cv(t,a);return}if(s=x(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=x(l),Cv(l,a)):x(l).scrollIntoView(t),s+=a?-1:1}};function rM(t,n){return t=x(t),wv(t,n),!1}function wv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Dv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Lr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,E=0;E<Ui.length;E++){var z=Ui[E];(z.fragmentInstance!==n||z.observer!==c||z.instance!==t)&&(Ui[_++]=z)}Ui.length=_,c.observe(t)}),wv(t,n))}function oM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Lr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?iM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function qh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qh(a),se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lM(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Pe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function uM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function Uv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function Wh(t){return t.data==="$?"||t.data==="$~"}function Zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kh=null;function Nv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Lv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function fM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function hM(t){Sv(function(){Sv(function(n){return t(n)})})}function Ov(t,n,a){switch(n=Jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Pv(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Xe(t,n,s,null,Gy,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Fi&&(t.onclick=null),se(t)}function Qh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);se(t)}var Ei=new Map,zv=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=Vt.d;Vt.d={f:dM,r:pM,D:mM,C:gM,L:_M,m:vM,X:xM,S:SM,M:yM};function dM(){var t=ga.f(),n=Du();return t||n}function pM(t){var n=xe(t);n!==null&&n.tag===5&&n.type==="form"?Bg(n):ga.r(t)}var Or=typeof document>"u"?null:document;function Iv(t,n,a){var s=Or;if(s&&typeof n=="string"&&n){var l=mi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),zv.has(l)||(zv.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Dn(n,"link",t),Ne(n),s.head.appendChild(n)))}}function mM(t){ga.D(t),Iv("dns-prefetch",t,null)}function gM(t,n){ga.C(t,n),Iv("preconnect",t,n)}function _M(t,n,a){ga.L(t,n,a);var s=Or;if(s&&t&&n){var l='link[rel="preload"][as="'+mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+mi(a.imageSizes)+'"]')):l+='[href="'+mi(t)+'"]';var c=l;switch(n){case"style":c=Pr(t);break;case"script":c=zr(t)}if(!(Ei.has(c)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ei.set(c,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(tl(c))||n==="script"&&s.querySelector(el(c))))){var _=s.createElement("link");Dn(_,"link",t),n==="style"&&(_[Ue]=!0,_.onload=_.onerror=function(){Da(_)}),Ne(_),s.head.appendChild(_)}}}function vM(t,n){ga.m(t,n);var a=Or;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+mi(s)+'"][href="'+mi(t)+'"]',c=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=zr(t)}if(!Ei.has(c)&&(t=L({rel:"modulepreload",href:t},n),Ei.set(c,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(c)))return}s=a.createElement("link"),Dn(s,"link",t),Ne(s),a.head.appendChild(s)}}}function SM(t,n,a){ga.S(t,n,a);var s=Or;if(s&&t){var l=ni(s).hoistableStyles,c=Pr(t);n=n||"default";var _=l.get(c);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(tl(c)))E.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ei.get(c))&&Jh(t,a);var z=_=s.createElement("link");Ne(z),Dn(z,"link",t),z._p=new Promise(function(Z,ut){z.onload=Z,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Iu(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},l.set(c,_)}}}function xM(t,n){ga.X(t,n);var a=Or;if(a&&t){var s=ni(a).hoistableScripts,l=zr(t),c=s.get(l);c||(c=a.querySelector(el(l)),c||(t=L({src:t,async:!0},n),(n=Ei.get(l))&&$h(t,n),c=a.createElement("script"),Ne(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function yM(t,n){ga.M(t,n);var a=Or;if(a&&t){var s=ni(a).hoistableScripts,l=zr(t),c=s.get(l);c||(c=a.querySelector(el(l)),c||(t=L({src:t,async:!0,type:"module"},n),(n=Ei.get(l))&&$h(t,n),c=a.createElement("script"),Ne(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function Bv(t,n,a,s){var l=(l=Xt.current)?$o(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Pr(a.href),n=ni(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Pr(a.href);var c=ni(l).hoistableStyles,_=c.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=l.querySelector(tl(t)))?c._p||(_.instance=c,_.state.loading=5):(c=Ei.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(t,c)),MM(l,t,c,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zr(a),n=ni(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Pr(t){return'href="'+mi(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function Fv(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function MM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ue]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ue]=!0,n.onload=n.onerror=Da.bind(null,n),Dn(n,"link",a),Ne(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function zr(t){return'[src="'+mi(t)+'"]'}function el(t){return"script[async]"+t}function Hv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+mi(a.href)+'"]');if(s)return n.instance=s,Ne(s),s;var l=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ne(s),Dn(s,"style",l),Iu(s,a.precedence,t),n.instance=s;case"stylesheet":l=Pr(a.href);var c=t.querySelector(tl(l));if(c)return n.state.loading|=4,n.instance=c,Ne(c),c;s=Fv(a),(l=Ei.get(l))&&Jh(s,l),c=(t.ownerDocument||t).createElement("link"),Ne(c);var _=c;return _._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),Dn(c,"link",s),n.state.loading|=4,Iu(c,a.precedence,t),n.instance=c;case"script":return c=zr(a.src),(l=t.querySelector(el(c)))?(n.instance=l,Ne(l),l):(s=a,(l=Ei.get(c))&&(s=L({},a),$h(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ne(l),Dn(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Iu(s,a.precedence,t));return n.instance}function Iu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,c=l,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bu=null;function Gv(t,n,a){if(Bu===null){var s=new Map,l=Bu=new Map;l.set(a,s)}else l=Bu,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Pe]||c[Lt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(c):s.set(_,[c])}}return s}function td(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function EM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Xv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function kv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function jv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=kv(n),t.suspenseyImages.push(n)),t=AM.bind(t),n.decode().then(t,t))}function TM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Pr(s.href),c=n.querySelector(tl(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ne(c);return}c=n.ownerDocument||n,s=Fv(s),(l=Ei.get(l))&&Jh(s,l),c=c.createElement("link"),Ne(c);var _=c;_._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),Dn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Fu=0;function bM(t,n){return t.stylesheets&&t.count===0&&Gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Fu===0&&(Fu=62500*Xy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Fu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Yv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Gu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,Yv(this)}function AM(){this.imgCount--,Yv(this)}var Hu=null;function Gu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hu=new Map,n.forEach(RM,t),Hu=null,nl.call(t))}function RM(t,n){if(!(n.state.loading&4)){var a=Hu.get(t);if(a)var s=a.get(null);else{a=new Map,Hu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var _=l[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}l=n.instance,_=l.getAttribute("data-precedence"),c=a.get(_)||s,c===s&&a.set(null,l),a.set(_,l),this.count++,s=nl.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Ir={$$typeof:ot,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function CM(t,n,a,s,l,c,_,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function qv(t,n,a,s,l,c,_,E,z,Z,ut,gt){return t=new CM(t,n,a,_,z,Z,ut,gt,E),n=1,c===!0&&(n|=24),c=jn(3,null,null,n),t.current=c,c.stateNode=t,n=mf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},Sf(c),t}function Wv(t){return t?(t=ur,t):ur}function Zv(t,n,a,s,l,c){l=Wv(l),s.context===null?s.context=l:s.pendingContext=l,s=Fa(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ha(t,s,n),a!==null&&(Zn(a,t,n),Lo(a,t,n))}function Kv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ed(t,n){Kv(t,n),(t=t.alternate)&&Kv(t,n)}function Qv(t){if(t.tag===13||t.tag===31){var n=ys(t,67108864);n!==null&&Zn(n,t,67108864),ed(t,67108864)}}function Jv(t){if(t.tag===13||t.tag===31){var n=ui();n=ft(n);var a=ys(t,n);a!==null&&Zn(a,t,n),ed(t,n)}}var Br=!0;function wM(t,n,a,s){var l=vt.T;vt.T=null;var c=Vt.p;try{Vt.p=2,nd(t,n,a,s)}finally{Vt.p=c,vt.T=l}}function DM(t,n,a,s){var l=vt.T;vt.T=null;var c=Vt.p;try{Vt.p=8,nd(t,n,a,s)}finally{Vt.p=c,vt.T=l}}function nd(t,n,a,s){if(Br){var l=id(s);if(l===null)Ih(t,n,s,Vu,a),t0(t,s);else if(NM(l,t,n,a,s))s.stopPropagation();else if(t0(t,s),n&4&&-1<UM.indexOf(t)){for(;l!==null;){var c=xe(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=pi(c.pendingLanes);if(_!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var z=1<<31-Ln(_);E.entanglements[1]|=z,_&=~z}Zi(c),(Ie&6)===0&&(Ru=X()+500,Zo(0))}}break;case 31:case 13:E=ys(c,2),E!==null&&Zn(E,c,2),Du(),ed(c,2)}if(c=id(s),c===null&&Ih(t,n,s,Vu,a),c===l)break;l=c}l!==null&&s.stopPropagation()}else Ih(t,n,s,null,a)}}function id(t){return t=Gc(t),ad(t)}var Vu=null;function ad(t){if(Vu=null,t=ze(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vu=t,null}function $v(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case Ot:return 2;case Yt:return 8;case bt:case yt:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var sd=!1,Ja=null,$a=null,ts=null,il=new Map,al=new Map,es=[],UM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function sl(t,n,a,s,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},n!==null&&(n=xe(n),n!==null&&Qv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function NM(t,n,a,s,l){switch(n){case"focusin":return Ja=sl(Ja,t,n,a,s,l),!0;case"dragenter":return $a=sl($a,t,n,a,s,l),!0;case"mouseover":return ts=sl(ts,t,n,a,s,l),!0;case"pointerover":var c=l.pointerId;return il.set(c,sl(il.get(c)||null,t,n,a,s,l)),!0;case"gotpointercapture":return c=l.pointerId,al.set(c,sl(al.get(c)||null,t,n,a,s,l)),!0}return!1}function e0(t){var n=ze(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){Jv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){Jv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Hc=s,a.target.dispatchEvent(s),Hc=null}else return n=xe(a),n!==null&&Qv(n),t.blockedOn=a,!1;n.shift()}return!0}function n0(t,n,a){Xu(t)&&a.delete(n)}function LM(){sd=!1,Ja!==null&&Xu(Ja)&&(Ja=null),$a!==null&&Xu($a)&&($a=null),ts!==null&&Xu(ts)&&(ts=null),il.forEach(n0),al.forEach(n0)}function ku(t,n){t.blockedOn===n&&(t.blockedOn=null,sd||(sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,LM)))}var ju=null;function i0(t){ju!==t&&(ju=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ju===t&&(ju=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(ad(s||a)===null)continue;break}var c=xe(a);c!==null&&(t.splice(n,3),n-=3,Hf(c,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function Fr(t){function n(z){return ku(z,t)}Ja!==null&&ku(Ja,t),$a!==null&&ku($a,t),ts!==null&&ku(ts,t),il.forEach(n),al.forEach(n);for(var a=0;a<es.length;a++){var s=es[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)e0(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],c=a[s+1],_=l[Zt]||null;if(typeof c=="function")_||i0(a);else if(_){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,_=c[Zt]||null)E=_.formAction;else if(ad(l)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),i0(a)}}}function a0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function rd(t){this._internalRoot=t}Yu.prototype.render=rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();Zv(a,s,t,n,null,null)},Yu.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Zv(t.current,2,null,t,null,null),Du(),n[re]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,t),a===0&&e0(t)}};var s0=e.version;if(s0!=="19.3.1")throw Error(r(527,s0,"19.3.1"));Vt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var OM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:vt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Ae=qu.inject(OM),tn=qu}catch{}}return ol.createRoot=function(t,n){if(!u(t))throw Error(r(299));var a=!1,s="",l=Wg,c=Zg,_=Kg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=qv(t,1,!1,null,null,a,s,null,l,c,_,a0),t[re]=n.current,zh(t),new rd(n)},ol.hydrateRoot=function(t,n,a){if(!u(t))throw Error(r(299));var s=!1,l="",c=Wg,_=Zg,E=Kg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=qv(t,1,!0,n,a??null,s,l,z,c,_,E,a0),n.context=Wv(null),a=n.current,s=ui(),s=ft(s),l=Fa(s),l.callback=null,Ha(a,l,s),a=s,n.current.lanes=a,vs(n,a),Zi(n),t[re]=n.current,zh(t),new Yu(n)},ol.version="19.3.1",ol}var m0;function jM(){if(m0)return ud.exports;m0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ud.exports=kM(),ud.exports}var YM=jM();const Gp="180",ao={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qM=0,g0=1,WM=2,bS=1,ZM=2,Ea=3,ds=0,ti=1,Ta=2,fs=0,so=1,_0=2,v0=3,S0=4,KM=5,Ys=100,QM=101,JM=102,$M=103,tE=104,eE=200,nE=201,iE=202,aE=203,qd=204,Wd=205,sE=206,rE=207,oE=208,lE=209,uE=210,cE=211,fE=212,hE=213,dE=214,Zd=0,Kd=1,Qd=2,oo=3,Jd=4,$d=5,tp=6,ep=7,AS=0,pE=1,mE=2,hs=0,gE=1,_E=2,vE=3,SE=4,xE=5,yE=6,ME=7,RS=300,lo=301,uo=302,np=303,ip=304,Uc=306,ap=1e3,Ws=1001,sp=1002,Ii=1003,EE=1004,Wu=1005,Qi=1006,dd=1007,Zs=1008,Ra=1009,CS=1010,wS=1011,ml=1012,Vp=1013,Ks=1014,ba=1015,xl=1016,Xp=1017,kp=1018,gl=1020,DS=35902,US=35899,NS=1021,LS=1022,zi=1023,_l=1026,vl=1027,OS=1028,jp=1029,PS=1030,Yp=1031,qp=1033,xc=33776,yc=33777,Mc=33778,Ec=33779,rp=35840,op=35841,lp=35842,up=35843,cp=36196,fp=37492,hp=37496,dp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,Sp=37814,xp=37815,yp=37816,Mp=37817,Ep=37818,Tp=37819,bp=37820,Ap=37821,Rp=36492,Cp=36494,wp=36495,Dp=36283,Up=36284,Np=36285,Lp=36286,TE=3200,bE=3201,AE=0,RE=1,cs="",$n="srgb",co="srgb-linear",Ac="linear",Ye="srgb",Hr=7680,x0=519,CE=512,wE=513,DE=514,zS=515,UE=516,NE=517,LE=518,OE=519,y0=35044,M0="300 es",Ji=2e3,Rc=2001;class $s{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const u=r[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const u=r.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,Op=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function be(o,e,i){return Math.max(e,Math.min(i,o))}function PE(o,e){return(o%e+e)%e}function pd(o,e,i){return(1-i)*o+i*e}function ll(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const zE={DEG2RAD:Tc};class Se{constructor(e=0,i=0){Se.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6],this.y=u[1]*i+u[4]*r+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),u=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*u+e.x,this.y=f*u+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qs{constructor(e=0,i=0,r=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=u}static slerpFlat(e,i,r,u,f,h,d){let g=r[u+0],p=r[u+1],S=r[u+2],m=r[u+3];const y=f[h+0],M=f[h+1],b=f[h+2],C=f[h+3];if(d===0){e[i+0]=g,e[i+1]=p,e[i+2]=S,e[i+3]=m;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(m!==C||g!==y||p!==M||S!==b){let x=1-d;const v=g*y+p*M+S*b+m*C,N=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const I=Math.sqrt(D),P=Math.atan2(I,v*N);x=Math.sin(x*P)/I,d=Math.sin(d*P)/I}const A=d*N;if(g=g*x+y*A,p=p*x+M*A,S=S*x+b*A,m=m*x+C*A,x===1-d){const I=1/Math.sqrt(g*g+p*p+S*S+m*m);g*=I,p*=I,S*=I,m*=I}}e[i]=g,e[i+1]=p,e[i+2]=S,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,u,f,h){const d=r[u],g=r[u+1],p=r[u+2],S=r[u+3],m=f[h],y=f[h+1],M=f[h+2],b=f[h+3];return e[i]=d*b+S*m+g*M-p*y,e[i+1]=g*b+S*y+p*m-d*M,e[i+2]=p*b+S*M+d*y-g*m,e[i+3]=S*b-d*m-g*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,u){return this._x=e,this._y=i,this._z=r,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,g=Math.sin,p=d(r/2),S=d(u/2),m=d(f/2),y=g(r/2),M=g(u/2),b=g(f/2);switch(h){case"XYZ":this._x=y*S*m+p*M*b,this._y=p*M*m-y*S*b,this._z=p*S*b+y*M*m,this._w=p*S*m-y*M*b;break;case"YXZ":this._x=y*S*m+p*M*b,this._y=p*M*m-y*S*b,this._z=p*S*b-y*M*m,this._w=p*S*m+y*M*b;break;case"ZXY":this._x=y*S*m-p*M*b,this._y=p*M*m+y*S*b,this._z=p*S*b+y*M*m,this._w=p*S*m-y*M*b;break;case"ZYX":this._x=y*S*m-p*M*b,this._y=p*M*m+y*S*b,this._z=p*S*b-y*M*m,this._w=p*S*m+y*M*b;break;case"YZX":this._x=y*S*m+p*M*b,this._y=p*M*m+y*S*b,this._z=p*S*b-y*M*m,this._w=p*S*m-y*M*b;break;case"XZY":this._x=y*S*m-p*M*b,this._y=p*M*m-y*S*b,this._z=p*S*b+y*M*m,this._w=p*S*m+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,u=Math.sin(r);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],u=i[4],f=i[8],h=i[1],d=i[5],g=i[9],p=i[2],S=i[6],m=i[10],y=r+d+m;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(S-g)*M,this._y=(f-p)*M,this._z=(h-u)*M}else if(r>d&&r>m){const M=2*Math.sqrt(1+r-d-m);this._w=(S-g)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+p)/M}else if(d>m){const M=2*Math.sqrt(1+d-r-m);this._w=(f-p)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(g+S)/M}else{const M=2*Math.sqrt(1+m-r-d);this._w=(h-u)/M,this._x=(f+p)/M,this._y=(g+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const u=Math.min(1,i/r);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,u=e._y,f=e._z,h=e._w,d=i._x,g=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+u*p-f*g,this._y=u*S+h*g+f*d-r*p,this._z=f*S+h*p+r*g-u*d,this._w=h*S-r*d-u*g-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=u,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*u+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const p=Math.sqrt(g),S=Math.atan2(p,d),m=Math.sin((1-i)*S)/p,y=Math.sin(i*S)/p;return this._w=h*m+this._w*y,this._x=r*m+this._x*y,this._y=u*m+this._y*y,this._z=f*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),u=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(E0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(E0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*u,this.y=f[1]*i+f[4]*r+f[7]*u,this.z=f[2]*i+f[5]*r+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*u+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*u+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*u+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,u=this.z,f=e.x,h=e.y,d=e.z,g=e.w,p=2*(h*u-d*r),S=2*(d*i-f*u),m=2*(f*r-h*i);return this.x=i+g*p+h*m-d*S,this.y=r+g*S+d*p-f*m,this.z=u+g*m+f*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*u,this.y=f[1]*i+f[5]*r+f[9]*u,this.z=f[2]*i+f[6]*r+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,u=e.y,f=e.z,h=i.x,d=i.y,g=i.z;return this.x=u*g-f*d,this.y=f*h-r*g,this.z=r*d-u*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,u=this.z-e.z;return i*i+r*r+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const u=Math.sin(i)*e;return this.x=u*Math.sin(r),this.y=Math.cos(i)*e,this.z=u*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new nt,E0=new Qs;class _e{constructor(e,i,r,u,f,h,d,g,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,g,p)}set(e,i,r,u,f,h,d,g,p){const S=this.elements;return S[0]=e,S[1]=u,S[2]=d,S[3]=i,S[4]=f,S[5]=g,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[3],g=r[6],p=r[1],S=r[4],m=r[7],y=r[2],M=r[5],b=r[8],C=u[0],x=u[3],v=u[6],N=u[1],D=u[4],A=u[7],I=u[2],P=u[5],L=u[8];return f[0]=h*C+d*N+g*I,f[3]=h*x+d*D+g*P,f[6]=h*v+d*A+g*L,f[1]=p*C+S*N+m*I,f[4]=p*x+S*D+m*P,f[7]=p*v+S*A+m*L,f[2]=y*C+M*N+b*I,f[5]=y*x+M*D+b*P,f[8]=y*v+M*A+b*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-r*f*S+r*d*g+u*f*p-u*h*g}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],S=e[8],m=S*h-d*p,y=d*g-S*f,M=p*f-h*g,b=i*m+r*y+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=m*C,e[1]=(u*p-S*r)*C,e[2]=(d*r-u*h)*C,e[3]=y*C,e[4]=(S*i-u*g)*C,e[5]=(u*f-d*i)*C,e[6]=M*C,e[7]=(r*g-p*i)*C,e[8]=(h*i-r*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,u,f,h,d){const g=Math.cos(f),p=Math.sin(f);return this.set(r*g,r*p,-r*(g*h+p*d)+h+e,-u*p,u*g,-u*(-p*h+g*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(gd.makeScale(e,i)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,i){return this.premultiply(gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<9;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new _e;function IS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IE(){const o=Cc("canvas");return o.style.display="block",o}const T0={};function Sl(o){o in T0||(T0[o]=!0,console.warn(o))}function BE(o,e,i){return new Promise(function(r,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const b0=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FE(){const o={enabled:!0,workingColorSpace:co,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ye&&(u.r=Aa(u.r),u.g=Aa(u.g),u.b=Aa(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ye&&(u.r=ro(u.r),u.g=ro(u.g),u.b=ro(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===cs?Ac:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return Sl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return Sl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[co]:{primaries:e,whitePoint:r,transfer:Ac,toXYZ:b0,fromXYZ:A0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:Ye,toXYZ:b0,fromXYZ:A0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),o}const Oe=FE();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gr;class HE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gr===void 0&&(Gr=Cc("canvas")),Gr.width=e.width,Gr.height=e.height;const u=Gr.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),r=Gr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const u=r.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Aa(f[h]/255)*255;return r.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Aa(i[r]/255)*255):i[r]=Aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GE=0;class Wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(_d(u[h].image)):f.push(_d(u[h]))}else f=_d(u);r.url=f}return i||(e.images[this.uuid]=r),r}}function _d(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VE=0;const vd=new nt;class ei extends $s{constructor(e=ei.DEFAULT_IMAGE,i=ei.DEFAULT_MAPPING,r=Ws,u=Ws,f=Qi,h=Zs,d=zi,g=Ra,p=ei.DEFAULT_ANISOTROPY,S=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=yl(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=g,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}u&&r&&u.isVector2&&r.isVector2||u&&r&&u.isVector3&&r.isVector3||u&&r&&u.isMatrix3&&r.isMatrix3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==RS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ap:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ap:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=RS;ei.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,r=0,u=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,u){return this.x=e,this.y=i,this.z=r,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*u+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*u+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*u+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,u,f;const g=e.elements,p=g[0],S=g[4],m=g[8],y=g[1],M=g[5],b=g[9],C=g[2],x=g[6],v=g[10];if(Math.abs(S-y)<.01&&Math.abs(m-C)<.01&&Math.abs(b-x)<.01){if(Math.abs(S+y)<.1&&Math.abs(m+C)<.1&&Math.abs(b+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,A=(M+1)/2,I=(v+1)/2,P=(S+y)/4,L=(m+C)/4,V=(b+x)/4;return D>A&&D>I?D<.01?(r=0,u=.707106781,f=.707106781):(r=Math.sqrt(D),u=P/r,f=L/r):A>I?A<.01?(r=.707106781,u=0,f=.707106781):(u=Math.sqrt(A),r=P/u,f=V/u):I<.01?(r=.707106781,u=.707106781,f=0):(f=Math.sqrt(I),r=L/f,u=V/f),this.set(r,u,f,i),this}let N=Math.sqrt((x-b)*(x-b)+(m-C)*(m-C)+(y-S)*(y-S));return Math.abs(N)<.001&&(N=1),this.x=(x-b)/N,this.y=(m-C)/N,this.z=(y-S)/N,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this.w=be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this.w=be(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XE extends $s{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i);const u={width:e,height:i,depth:r.depth},f=new ei(u);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Qi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=r,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Wp(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends XE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class BS extends ei{constructor(e=null,i=1,r=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends ei{constructor(e=null,i=1,r=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(f,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zu.copy(r.boundingBox)),Zu.applyMatrix4(e.matrixWorld),this.union(Zu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),Ku.subVectors(this.max,ul),Vr.subVectors(e.a,ul),Xr.subVectors(e.b,ul),kr.subVectors(e.c,ul),is.subVectors(Xr,Vr),as.subVectors(kr,Xr),Fs.subVectors(Vr,kr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Fs.z,Fs.y,is.z,0,-is.x,as.z,0,-as.x,Fs.z,0,-Fs.x,-is.y,is.x,0,-as.y,as.x,0,-Fs.y,Fs.x,0];return!Sd(i,Vr,Xr,kr,Ku)||(i=[1,0,0,0,1,0,0,0,1],!Sd(i,Vr,Xr,kr,Ku))?!1:(Qu.crossVectors(is,as),i=[Qu.x,Qu.y,Qu.z],Sd(i,Vr,Xr,kr,Ku))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Ni=new nt,Zu=new ho,Vr=new nt,Xr=new nt,kr=new nt,is=new nt,as=new nt,Fs=new nt,ul=new nt,Ku=new nt,Qu=new nt,Hs=new nt;function Sd(o,e,i,r,u){for(let f=0,h=o.length-3;f<=h;f+=3){Hs.fromArray(o,f);const d=u.x*Math.abs(Hs.x)+u.y*Math.abs(Hs.y)+u.z*Math.abs(Hs.z),g=e.dot(Hs),p=i.dot(Hs),S=r.dot(Hs);if(Math.max(-Math.max(g,p,S),Math.min(g,p,S))>d)return!1}return!0}const jE=new ho,cl=new nt,xd=new nt;class Ml{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):jE.setFromPoints(e).getCenter(r);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),u=(r-this.radius)*.5;this.center.addScaledVector(cl,u/r),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(xd)),this.expandByPoint(cl.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new nt,yd=new nt,Ju=new nt,ss=new nt,Md=new nt,$u=new nt,Ed=new nt;class El{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,u){yd.copy(e).add(i).multiplyScalar(.5),Ju.copy(i).sub(e).normalize(),ss.copy(this.origin).sub(yd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(Ju),d=ss.dot(this.direction),g=-ss.dot(Ju),p=ss.lengthSq(),S=Math.abs(1-h*h);let m,y,M,b;if(S>0)if(m=h*g-d,y=h*d-g,b=f*S,m>=0)if(y>=-b)if(y<=b){const C=1/S;m*=C,y*=C,M=m*(m+h*y+2*d)+y*(h*m+y+2*g)+p}else y=f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;else y=-f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;else y<=-b?(m=Math.max(0,-(-h*f+d)),y=m>0?-f:Math.min(Math.max(-f,-g),f),M=-m*m+y*(y+2*g)+p):y<=b?(m=0,y=Math.min(Math.max(-f,-g),f),M=y*(y+2*g)+p):(m=Math.max(0,-(h*f+d)),y=m>0?f:Math.min(Math.max(-f,-g),f),M=-m*m+y*(y+2*g)+p);else y=h>0?-f:f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(yd).addScaledVector(Ju,y),M}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),u=va.dot(va)-r*r,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=r-h,g=r+h;return g<0?null:d<0?this.at(g,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,u,f,h,d,g;const p=1/this.direction.x,S=1/this.direction.y,m=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,u=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,u=(e.min.x-y.x)*p),S>=0?(f=(e.min.y-y.y)*S,h=(e.max.y-y.y)*S):(f=(e.max.y-y.y)*S,h=(e.min.y-y.y)*S),r>h||f>u||((f>r||isNaN(r))&&(r=f),(h<u||isNaN(u))&&(u=h),m>=0?(d=(e.min.z-y.z)*m,g=(e.max.z-y.z)*m):(d=(e.max.z-y.z)*m,g=(e.min.z-y.z)*m),r>g||d>u)||((d>r||r!==r)&&(r=d),(g<u||u!==u)&&(u=g),u<0)?null:this.at(r>=0?r:u,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,u,f){Md.subVectors(i,e),$u.subVectors(r,e),Ed.crossVectors(Md,$u);let h=this.direction.dot(Ed),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ss.subVectors(this.origin,e);const g=d*this.direction.dot($u.crossVectors(ss,$u));if(g<0)return null;const p=d*this.direction.dot(Md.cross(ss));if(p<0||g+p>h)return null;const S=-d*ss.dot(Ed);return S<0?null:this.at(S/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,u,f,h,d,g,p,S,m,y,M,b,C,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,g,p,S,m,y,M,b,C,x)}set(e,i,r,u,f,h,d,g,p,S,m,y,M,b,C,x){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=u,v[1]=f,v[5]=h,v[9]=d,v[13]=g,v[2]=p,v[6]=S,v[10]=m,v[14]=y,v[3]=M,v[7]=b,v[11]=C,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,u=1/jr.setFromMatrixColumn(e,0).length(),f=1/jr.setFromMatrixColumn(e,1).length(),h=1/jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*u,i[1]=r[1]*u,i[2]=r[2]*u,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,u=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),g=Math.cos(u),p=Math.sin(u),S=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const y=h*S,M=h*m,b=d*S,C=d*m;i[0]=g*S,i[4]=-g*m,i[8]=p,i[1]=M+b*p,i[5]=y-C*p,i[9]=-d*g,i[2]=C-y*p,i[6]=b+M*p,i[10]=h*g}else if(e.order==="YXZ"){const y=g*S,M=g*m,b=p*S,C=p*m;i[0]=y+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*m,i[5]=h*S,i[9]=-d,i[2]=M*d-b,i[6]=C+y*d,i[10]=h*g}else if(e.order==="ZXY"){const y=g*S,M=g*m,b=p*S,C=p*m;i[0]=y-C*d,i[4]=-h*m,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*S,i[9]=C-y*d,i[2]=-h*p,i[6]=d,i[10]=h*g}else if(e.order==="ZYX"){const y=h*S,M=h*m,b=d*S,C=d*m;i[0]=g*S,i[4]=b*p-M,i[8]=y*p+C,i[1]=g*m,i[5]=C*p+y,i[9]=M*p-b,i[2]=-p,i[6]=d*g,i[10]=h*g}else if(e.order==="YZX"){const y=h*g,M=h*p,b=d*g,C=d*p;i[0]=g*S,i[4]=C-y*m,i[8]=b*m+M,i[1]=m,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*m+b,i[10]=y-C*m}else if(e.order==="XZY"){const y=h*g,M=h*p,b=d*g,C=d*p;i[0]=g*S,i[4]=-m,i[8]=p*S,i[1]=y*m+C,i[5]=h*S,i[9]=M*m-b,i[2]=b*m-M,i[6]=d*S,i[10]=C*m+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YE,e,qE)}lookAt(e,i,r){const u=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),rs.crossVectors(r,fi),rs.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),rs.crossVectors(r,fi)),rs.normalize(),tc.crossVectors(fi,rs),u[0]=rs.x,u[4]=tc.x,u[8]=fi.x,u[1]=rs.y,u[5]=tc.y,u[9]=fi.y,u[2]=rs.z,u[6]=tc.z,u[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[4],g=r[8],p=r[12],S=r[1],m=r[5],y=r[9],M=r[13],b=r[2],C=r[6],x=r[10],v=r[14],N=r[3],D=r[7],A=r[11],I=r[15],P=u[0],L=u[4],V=u[8],U=u[12],w=u[1],F=u[5],at=u[9],st=u[13],_t=u[2],ot=u[6],k=u[10],it=u[14],Y=u[3],Mt=u[7],Et=u[11],It=u[15];return f[0]=h*P+d*w+g*_t+p*Y,f[4]=h*L+d*F+g*ot+p*Mt,f[8]=h*V+d*at+g*k+p*Et,f[12]=h*U+d*st+g*it+p*It,f[1]=S*P+m*w+y*_t+M*Y,f[5]=S*L+m*F+y*ot+M*Mt,f[9]=S*V+m*at+y*k+M*Et,f[13]=S*U+m*st+y*it+M*It,f[2]=b*P+C*w+x*_t+v*Y,f[6]=b*L+C*F+x*ot+v*Mt,f[10]=b*V+C*at+x*k+v*Et,f[14]=b*U+C*st+x*it+v*It,f[3]=N*P+D*w+A*_t+I*Y,f[7]=N*L+D*F+A*ot+I*Mt,f[11]=N*V+D*at+A*k+I*Et,f[15]=N*U+D*st+A*it+I*It,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],u=e[8],f=e[12],h=e[1],d=e[5],g=e[9],p=e[13],S=e[2],m=e[6],y=e[10],M=e[14],b=e[3],C=e[7],x=e[11],v=e[15];return b*(+f*g*m-u*p*m-f*d*y+r*p*y+u*d*M-r*g*M)+C*(+i*g*M-i*p*y+f*h*y-u*h*M+u*p*S-f*g*S)+x*(+i*p*m-i*d*M-f*h*m+r*h*M+f*d*S-r*p*S)+v*(-u*d*S-i*g*m+i*d*y+u*h*m-r*h*y+r*g*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],S=e[8],m=e[9],y=e[10],M=e[11],b=e[12],C=e[13],x=e[14],v=e[15],N=m*x*p-C*y*p+C*g*M-d*x*M-m*g*v+d*y*v,D=b*y*p-S*x*p-b*g*M+h*x*M+S*g*v-h*y*v,A=S*C*p-b*m*p+b*d*M-h*C*M-S*d*v+h*m*v,I=b*m*g-S*C*g-b*d*y+h*C*y+S*d*x-h*m*x,P=i*N+r*D+u*A+f*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=N*L,e[1]=(C*y*f-m*x*f-C*u*M+r*x*M+m*u*v-r*y*v)*L,e[2]=(d*x*f-C*g*f+C*u*p-r*x*p-d*u*v+r*g*v)*L,e[3]=(m*g*f-d*y*f-m*u*p+r*y*p+d*u*M-r*g*M)*L,e[4]=D*L,e[5]=(S*x*f-b*y*f+b*u*M-i*x*M-S*u*v+i*y*v)*L,e[6]=(b*g*f-h*x*f-b*u*p+i*x*p+h*u*v-i*g*v)*L,e[7]=(h*y*f-S*g*f+S*u*p-i*y*p-h*u*M+i*g*M)*L,e[8]=A*L,e[9]=(b*m*f-S*C*f-b*r*M+i*C*M+S*r*v-i*m*v)*L,e[10]=(h*C*f-b*d*f+b*r*p-i*C*p-h*r*v+i*d*v)*L,e[11]=(S*d*f-h*m*f-S*r*p+i*m*p+h*r*M-i*d*M)*L,e[12]=I*L,e[13]=(S*C*u-b*m*u+b*r*y-i*C*y-S*r*x+i*m*x)*L,e[14]=(b*d*u-h*C*u-b*r*g+i*C*g+h*r*x-i*d*x)*L,e[15]=(h*m*u-S*d*u+S*r*g-i*m*g-h*r*y+i*d*y)*L,this}scale(e){const i=this.elements,r=e.x,u=e.y,f=e.z;return i[0]*=r,i[4]*=u,i[8]*=f,i[1]*=r,i[5]*=u,i[9]*=f,i[2]*=r,i[6]*=u,i[10]*=f,i[3]*=r,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,u))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),u=Math.sin(i),f=1-r,h=e.x,d=e.y,g=e.z,p=f*h,S=f*d;return this.set(p*h+r,p*d-u*g,p*g+u*d,0,p*d+u*g,S*d+r,S*g-u*h,0,p*g-u*d,S*g+u*h,f*g*g+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,u,f,h){return this.set(1,r,f,0,e,1,h,0,i,u,1,0,0,0,0,1),this}compose(e,i,r){const u=this.elements,f=i._x,h=i._y,d=i._z,g=i._w,p=f+f,S=h+h,m=d+d,y=f*p,M=f*S,b=f*m,C=h*S,x=h*m,v=d*m,N=g*p,D=g*S,A=g*m,I=r.x,P=r.y,L=r.z;return u[0]=(1-(C+v))*I,u[1]=(M+A)*I,u[2]=(b-D)*I,u[3]=0,u[4]=(M-A)*P,u[5]=(1-(y+v))*P,u[6]=(x+N)*P,u[7]=0,u[8]=(b+D)*L,u[9]=(x-N)*L,u[10]=(1-(y+C))*L,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,r){const u=this.elements;let f=jr.set(u[0],u[1],u[2]).length();const h=jr.set(u[4],u[5],u[6]).length(),d=jr.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Li.copy(this);const p=1/f,S=1/h,m=1/d;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=S,Li.elements[5]*=S,Li.elements[6]*=S,Li.elements[8]*=m,Li.elements[9]*=m,Li.elements[10]*=m,i.setFromRotationMatrix(Li),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,u,f,h,d=Ji,g=!1){const p=this.elements,S=2*f/(i-e),m=2*f/(r-u),y=(i+e)/(i-e),M=(r+u)/(r-u);let b,C;if(g)b=f/(h-f),C=h*f/(h-f);else if(d===Ji)b=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===Rc)b=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=m,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,u,f,h,d=Ji,g=!1){const p=this.elements,S=2/(i-e),m=2/(r-u),y=-(i+e)/(i-e),M=-(r+u)/(r-u);let b,C;if(g)b=1/(h-f),C=h/(h-f);else if(d===Ji)b=-2/(h-f),C=-(h+f)/(h-f);else if(d===Rc)b=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=m,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<16;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const jr=new nt,Li=new rn,YE=new nt(0,0,0),qE=new nt(1,1,1),rs=new nt,tc=new nt,fi=new nt,R0=new rn,C0=new Qs;class Ca{constructor(e=0,i=0,r=0,u=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,u=this._order){return this._x=e,this._y=i,this._z=r,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],g=u[1],p=u[5],S=u[9],m=u[2],y=u[6],M=u[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return C0.setFromEuler(this),this.setFromQuaternion(C0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const w0=new nt,Yr=new Qs,Sa=new rn,ec=new nt,fl=new nt,ZE=new nt,KE=new Qs,D0=new nt(1,0,0),U0=new nt(0,1,0),N0=new nt(0,0,1),L0={type:"added"},QE={type:"removed"},qr={type:"childadded",child:null},Td={type:"childremoved",child:null};class kn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new nt,i=new Ca,r=new Qs,u=new nt(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new rn},normalMatrix:{value:new _e}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(D0,e)}rotateY(e){return this.rotateOnAxis(U0,e)}rotateZ(e){return this.rotateOnAxis(N0,e)}translateOnAxis(e,i){return w0.copy(e).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(D0,e)}translateY(e){return this.translateOnAxis(U0,e)}translateZ(e){return this.translateOnAxis(N0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ec.copy(e):ec.set(e,i,r);const u=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(fl,ec,this.up):Sa.lookAt(ec,fl,this.up),this.quaternion.setFromRotationMatrix(Sa),u&&(Sa.extractRotation(u.matrixWorld),Yr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L0),qr.child=e,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(QE),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L0),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,u=this.children.length;r<u;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,ZE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,KE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let p=0,S=g.length;p<S;p++){const m=g[p];f(e.shapes,m)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,p=this.material.length;g<p;g++)d.push(f(e.materials,this.material[g]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];u.animations.push(f(e.animations,g))}}if(i){const d=h(e.geometries),g=h(e.materials),p=h(e.textures),S=h(e.images),m=h(e.shapes),y=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),g.length>0&&(r.materials=g),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),m.length>0&&(r.shapes=m),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=u,r;function h(d){const g=[];for(const p in d){const S=d[p];delete S.metadata,g.push(S)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const u=e.children[r];this.add(u.clone())}return this}}kn.DEFAULT_UP=new nt(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new nt,xa=new nt,bd=new nt,ya=new nt,Wr=new nt,Zr=new nt,O0=new nt,Ad=new nt,Rd=new nt,Cd=new nt,wd=new ln,Dd=new ln,Ud=new ln;class Pi{constructor(e=new nt,i=new nt,r=new nt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,u){u.subVectors(r,i),Oi.subVectors(e,i),u.cross(Oi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,r,u,f){Oi.subVectors(u,i),xa.subVectors(r,i),bd.subVectors(e,i);const h=Oi.dot(Oi),d=Oi.dot(xa),g=Oi.dot(bd),p=xa.dot(xa),S=xa.dot(bd),m=h*p-d*d;if(m===0)return f.set(0,0,0),null;const y=1/m,M=(p*g-d*S)*y,b=(h*S-d*g)*y;return f.set(1-M-b,b,M)}static containsPoint(e,i,r,u){return this.getBarycoord(e,i,r,u,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,r,u,f,h,d,g){return this.getBarycoord(e,i,r,u,ya)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,ya.x),g.addScaledVector(h,ya.y),g.addScaledVector(d,ya.z),g)}static getInterpolatedAttribute(e,i,r,u,f,h){return wd.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),wd.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,r),Ud.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(wd,f.x),h.addScaledVector(Dd,f.y),h.addScaledVector(Ud,f.z),h}static isFrontFacing(e,i,r,u){return Oi.subVectors(r,i),xa.subVectors(e,i),Oi.cross(xa).dot(u)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,u){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,r,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Oi.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,u,f){return Pi.getInterpolation(e,this.a,this.b,this.c,i,r,u,f)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,u=this.b,f=this.c;let h,d;Wr.subVectors(u,r),Zr.subVectors(f,r),Ad.subVectors(e,r);const g=Wr.dot(Ad),p=Zr.dot(Ad);if(g<=0&&p<=0)return i.copy(r);Rd.subVectors(e,u);const S=Wr.dot(Rd),m=Zr.dot(Rd);if(S>=0&&m<=S)return i.copy(u);const y=g*m-S*p;if(y<=0&&g>=0&&S<=0)return h=g/(g-S),i.copy(r).addScaledVector(Wr,h);Cd.subVectors(e,f);const M=Wr.dot(Cd),b=Zr.dot(Cd);if(b>=0&&M<=b)return i.copy(f);const C=M*p-g*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Zr,d);const x=S*b-M*m;if(x<=0&&m-S>=0&&M-b>=0)return O0.subVectors(f,u),d=(m-S)/(m-S+(M-b)),i.copy(u).addScaledVector(O0,d);const v=1/(x+C+y);return h=C*v,d=y*v,i.copy(r).addScaledVector(Wr,h).addScaledVector(Zr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const FS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,u=Oe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,u),this}setHSL(e,i,r,u=Oe.workingColorSpace){if(e=PE(e,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Nd(h,f,e+1/3),this.g=Nd(h,f,e),this.b=Nd(h,f,e-1/3)}return Oe.colorSpaceToWorking(this,u),this}setStyle(e,i=$n){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=$n){const r=FS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Oe.workingToColorSpace(In.copy(this),e),Math.round(be(In.r*255,0,255))*65536+Math.round(be(In.g*255,0,255))*256+Math.round(be(In.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Oe.workingColorSpace){Oe.workingToColorSpace(In.copy(this),i);const r=In.r,u=In.g,f=In.b,h=Math.max(r,u,f),d=Math.min(r,u,f);let g,p;const S=(d+h)/2;if(d===h)g=0,p=0;else{const m=h-d;switch(p=S<=.5?m/(h+d):m/(2-h-d),h){case r:g=(u-f)/m+(u<f?6:0);break;case u:g=(f-r)/m+2;break;case f:g=(r-u)/m+4;break}g/=6}return e.h=g,e.s=p,e.l=S,e}getRGB(e,i=Oe.workingColorSpace){return Oe.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=$n){Oe.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,u=In.b;return e!==$n?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(u*255)})`}offsetHSL(e,i,r){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(nc);const r=pd(os.h,nc.h,i),u=pd(os.s,nc.s,i),f=pd(os.l,nc.l,i);return this.setHSL(r,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*u,this.g=f[1]*i+f[4]*r+f[7]*u,this.b=f[2]*i+f[5]*r+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Be;Be.NAMES=FS;let JE=0;class po extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=so,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Wd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(r):u&&u.isVector3&&r&&r.isVector3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(r.blending=this.blending),this.side!==ds&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Wd&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}if(i){const f=u(e.textures),h=u(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const u=i.length;r=new Array(u);for(let f=0;f!==u;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kp extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=AS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new nt,ic=new Se;let $E=0;class ta{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$E++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=y0,this.updateRanges=[],this.gpuType=ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[r+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(e),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ll(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,u){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),u=Kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this}setXYZW(e,i,r,u,f){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),u=Kn(u,this.array),f=Kn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y0&&(e.usage=this.usage),e}}class HS extends ta{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class GS extends ta{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Sn extends ta{constructor(e,i,r){super(new Float32Array(e),i,r)}}let tT=0;const Ti=new rn,Ld=new kn,Kr=new nt,hi=new ho,hl=new ho,bn=new nt;class di extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IS(e)?GS:HS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new _e().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,r){return Ti.makeTranslation(e,i,r),this.applyMatrix4(Ti),this}scale(e,i,r){return Ti.makeScale(e,i,r),this.applyMatrix4(Ti),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(r,3))}else{const r=Math.min(e.length,i.count);for(let u=0;u<r;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,u=i.length;r<u;r++){const f=i[r];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];hl.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(hi.min,hl.min),hi.expandByPoint(bn),bn.addVectors(hi.max,hl.max),hi.expandByPoint(bn)):(hi.expandByPoint(hl.min),hi.expandByPoint(hl.max))}hi.getCenter(r);let u=0;for(let f=0,h=e.count;f<h;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,r.distanceToSquared(bn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],g=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)bn.fromBufferAttribute(d,p),g&&(Kr.fromBufferAttribute(e,p),bn.add(Kr)),u=Math.max(u,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ta(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let V=0;V<r.count;V++)d[V]=new nt,g[V]=new nt;const p=new nt,S=new nt,m=new nt,y=new Se,M=new Se,b=new Se,C=new nt,x=new nt;function v(V,U,w){p.fromBufferAttribute(r,V),S.fromBufferAttribute(r,U),m.fromBufferAttribute(r,w),y.fromBufferAttribute(f,V),M.fromBufferAttribute(f,U),b.fromBufferAttribute(f,w),S.sub(p),m.sub(p),M.sub(y),b.sub(y);const F=1/(M.x*b.y-b.x*M.y);isFinite(F)&&(C.copy(S).multiplyScalar(b.y).addScaledVector(m,-M.y).multiplyScalar(F),x.copy(m).multiplyScalar(M.x).addScaledVector(S,-b.x).multiplyScalar(F),d[V].add(C),d[U].add(C),d[w].add(C),g[V].add(x),g[U].add(x),g[w].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let V=0,U=N.length;V<U;++V){const w=N[V],F=w.start,at=w.count;for(let st=F,_t=F+at;st<_t;st+=3)v(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const D=new nt,A=new nt,I=new nt,P=new nt;function L(V){I.fromBufferAttribute(u,V),P.copy(I);const U=d[V];D.copy(U),D.sub(I.multiplyScalar(I.dot(U))).normalize(),A.crossVectors(P,U);const F=A.dot(g[V])<0?-1:1;h.setXYZW(V,D.x,D.y,D.z,F)}for(let V=0,U=N.length;V<U;++V){const w=N[V],F=w.start,at=w.count;for(let st=F,_t=F+at;st<_t;st+=3)L(e.getX(st+0)),L(e.getX(st+1)),L(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ta(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const u=new nt,f=new nt,h=new nt,d=new nt,g=new nt,p=new nt,S=new nt,m=new nt;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),C=e.getX(y+1),x=e.getX(y+2);u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),S.subVectors(h,f),m.subVectors(u,f),S.cross(m),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),d.add(S),g.add(S),p.add(S),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,g.x,g.y,g.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)u.fromBufferAttribute(i,y+0),f.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),S.subVectors(h,f),m.subVectors(u,f),S.cross(m),r.setXYZ(y+0,S.x,S.y,S.z),r.setXYZ(y+1,S.x,S.y,S.z),r.setXYZ(y+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,g){const p=d.array,S=d.itemSize,m=d.normalized,y=new p.constructor(g.length*S);let M=0,b=0;for(let C=0,x=g.length;C<x;C++){d.isInterleavedBufferAttribute?M=g[C]*d.data.stride+d.offset:M=g[C]*S;for(let v=0;v<S;v++)y[b++]=p[M++]}return new ta(y,S,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,r=this.index.array,u=this.attributes;for(const d in u){const g=u[d],p=e(g,r);i.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const g=[],p=f[d];for(let S=0,m=p.length;S<m;S++){const y=p[S],M=e(y,r);g.push(M)}i.morphAttributes[d]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const p=r[g];e.data.attributes[g]=p.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],S=[];for(let m=0,y=p.length;m<y;m++){const M=p[m];S.push(M.toJSON(e.data))}S.length>0&&(u[g]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const u=e.attributes;for(const p in u){const S=u[p];this.setAttribute(p,S.clone(i))}const f=e.morphAttributes;for(const p in f){const S=[],m=f[p];for(let y=0,M=m.length;y<M;y++)S.push(m[y].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const m=h[p];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P0=new rn,Gs=new El,ac=new Ml,z0=new nt,sc=new nt,rc=new nt,oc=new nt,Od=new nt,lc=new nt,I0=new nt,uc=new nt;class $i extends kn{constructor(e=new di,i=new Kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,u=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){lc.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const S=d[g],m=f[g];S!==0&&(Od.fromBufferAttribute(m,e),h?lc.addScaledVector(Od,S):lc.addScaledVector(Od.sub(i),S))}i.add(lc)}return i}raycast(e,i){const r=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(f),Gs.copy(e.ray).recast(e.near),!(ac.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(ac,z0)===null||Gs.origin.distanceToSquared(z0)>(e.far-e.near)**2))&&(P0.copy(f).invert(),Gs.copy(e.ray).applyMatrix4(P0),!(r.boundingBox!==null&&Gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Gs)))}_computeIntersections(e,i,r){let u;const f=this.geometry,h=this.material,d=f.index,g=f.attributes.position,p=f.attributes.uv,S=f.attributes.uv1,m=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=y.length;b<C;b++){const x=y[b],v=h[x.materialIndex],N=Math.max(x.start,M.start),D=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let A=N,I=D;A<I;A+=3){const P=d.getX(A),L=d.getX(A+1),V=d.getX(A+2);u=cc(this,v,e,r,p,S,m,P,L,V),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=x.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let x=b,v=C;x<v;x+=3){const N=d.getX(x),D=d.getX(x+1),A=d.getX(x+2);u=cc(this,h,e,r,p,S,m,N,D,A),u&&(u.faceIndex=Math.floor(x/3),i.push(u))}}else if(g!==void 0)if(Array.isArray(h))for(let b=0,C=y.length;b<C;b++){const x=y[b],v=h[x.materialIndex],N=Math.max(x.start,M.start),D=Math.min(g.count,Math.min(x.start+x.count,M.start+M.count));for(let A=N,I=D;A<I;A+=3){const P=A,L=A+1,V=A+2;u=cc(this,v,e,r,p,S,m,P,L,V),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=x.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),C=Math.min(g.count,M.start+M.count);for(let x=b,v=C;x<v;x+=3){const N=x,D=x+1,A=x+2;u=cc(this,h,e,r,p,S,m,N,D,A),u&&(u.faceIndex=Math.floor(x/3),i.push(u))}}}}function eT(o,e,i,r,u,f,h,d){let g;if(e.side===ti?g=r.intersectTriangle(h,f,u,!0,d):g=r.intersectTriangle(u,f,h,e.side===ds,d),g===null)return null;uc.copy(d),uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uc);return p<i.near||p>i.far?null:{distance:p,point:uc.clone(),object:o}}function cc(o,e,i,r,u,f,h,d,g,p){o.getVertexPosition(d,sc),o.getVertexPosition(g,rc),o.getVertexPosition(p,oc);const S=eT(o,e,i,r,sc,rc,oc,I0);if(S){const m=new nt;Pi.getBarycoord(I0,sc,rc,oc,m),u&&(S.uv=Pi.getInterpolatedAttribute(u,d,g,p,m,new Se)),f&&(S.uv1=Pi.getInterpolatedAttribute(f,d,g,p,m,new Se)),h&&(S.normal=Pi.getInterpolatedAttribute(h,d,g,p,m,new nt),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const y={a:d,b:g,c:p,normal:new nt,materialIndex:0};Pi.getNormal(sc,rc,oc,y.normal),S.face=y,S.barycoord=m}return S}class Tl extends di{constructor(e=1,i=1,r=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const g=[],p=[],S=[],m=[];let y=0,M=0;b("z","y","x",-1,-1,r,i,e,h,f,0),b("z","y","x",1,-1,r,i,-e,h,f,1),b("x","z","y",1,1,e,r,i,u,h,2),b("x","z","y",1,-1,e,r,-i,u,h,3),b("x","y","z",1,-1,e,i,r,u,f,4),b("x","y","z",-1,-1,e,i,-r,u,f,5),this.setIndex(g),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(S,3)),this.setAttribute("uv",new Sn(m,2));function b(C,x,v,N,D,A,I,P,L,V,U){const w=A/L,F=I/V,at=A/2,st=I/2,_t=P/2,ot=L+1,k=V+1;let it=0,Y=0;const Mt=new nt;for(let Et=0;Et<k;Et++){const It=Et*F-st;for(let ie=0;ie<ot;ie++){const pe=ie*w-at;Mt[C]=pe*N,Mt[x]=It*D,Mt[v]=_t,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[x]=0,Mt[v]=P>0?1:-1,S.push(Mt.x,Mt.y,Mt.z),m.push(ie/L),m.push(1-Et/V),it+=1}}for(let Et=0;Et<V;Et++)for(let It=0;It<L;It++){const ie=y+It+ot*Et,pe=y+It+ot*(Et+1),H=y+(It+1)+ot*(Et+1),dt=y+(It+1)+ot*Et;g.push(ie,pe,dt),g.push(pe,H,dt),Y+=6}d.addGroup(M,Y,U),M+=Y,y+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const u=o[i][r];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=u.clone():Array.isArray(u)?e[i][r]=u.slice():e[i][r]=u}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const r=fo(o[i]);for(const u in r)e[u]=r[u]}return e}function nT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function VS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const iT={clone:fo,merge:Xn};var aT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aT,this.fragmentShader=sT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=nT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?i.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[u]={type:"m4",value:h.toArray()}:i.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const u in this.extensions)this.extensions[u]===!0&&(r[u]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class XS extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new nt,B0=new Se,F0=new Se;class bi extends XS{constructor(e=50,i=1,r=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,i){return this.getViewBounds(e,B0,F0),i.subVectors(F0,B0)}setViewOffset(e,i,r,u,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Tc*.5*this.fov)/this.zoom,r=2*i,u=this.aspect*r,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;f+=h.offsetX*u/g,i-=h.offsetY*r/p,u*=h.width/g,r*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,Jr=1;class rT extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new bi(Qr,Jr,e,i);u.layers=this.layers,this.add(u);const f=new bi(Qr,Jr,e,i);f.layers=this.layers,this.add(f);const h=new bi(Qr,Jr,e,i);h.layers=this.layers,this.add(h);const d=new bi(Qr,Jr,e,i);d.layers=this.layers,this.add(d);const g=new bi(Qr,Jr,e,i);g.layers=this.layers,this.add(g);const p=new bi(Qr,Jr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,u,f,h,d,g]=i;for(const p of i)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,g,p,S]=this.children,m=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,u),e.render(i,f),e.setRenderTarget(r,1,u),e.render(i,h),e.setRenderTarget(r,2,u),e.render(i,d),e.setRenderTarget(r,3,u),e.render(i,g),e.setRenderTarget(r,4,u),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,u),e.render(i,S),e.setRenderTarget(m,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class kS extends ei{constructor(e=[],i=lo,r,u,f,h,d,g,p,S){super(e,i,r,u,f,h,d,g,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oT extends Js{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},u=[r,r,r,r,r,r];this.texture=new kS(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Tl(5,5,5),f=new ps({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:fs});f.uniforms.tEquirect.value=i;const h=new $i(u,f),d=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Qi),new rT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,u);e.setRenderTarget(f)}}class no extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lT={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let u=null,f=null,h=null;const d=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const x=i.getJointPose(C,r),v=this._getHandJoint(p,C);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const S=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],y=S.position.distanceTo(m.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(u=i.getPose(e.targetRaySpace,r),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lT)))}return d!==null&&(d.visible=u!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new no;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class uT extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zd=new nt,cT=new nt,fT=new _e;class us{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,u){return this.normal.set(e,i,r),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const u=zd.subVectors(r,i).cross(cT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(zd),u=this.normal.dot(r);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||fT.getNormalMatrix(e),u=this.coplanarPoint(zd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new Ml,hT=new Se(.5,.5),fc=new nt;class jS{constructor(e=new us,i=new us,r=new us,u=new us,f=new us,h=new us){this.planes=[e,i,r,u,f,h]}set(e,i,r,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji,r=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],g=f[2],p=f[3],S=f[4],m=f[5],y=f[6],M=f[7],b=f[8],C=f[9],x=f[10],v=f[11],N=f[12],D=f[13],A=f[14],I=f[15];if(u[0].setComponents(p-h,M-S,v-b,I-N).normalize(),u[1].setComponents(p+h,M+S,v+b,I+N).normalize(),u[2].setComponents(p+d,M+m,v+C,I+D).normalize(),u[3].setComponents(p-d,M-m,v-C,I-D).normalize(),r)u[4].setComponents(g,y,x,A).normalize(),u[5].setComponents(p-g,M-y,v-x,I-A).normalize();else if(u[4].setComponents(p-g,M-y,v-x,I-A).normalize(),i===Ji)u[5].setComponents(p+g,M+y,v+x,I+A).normalize();else if(i===Rc)u[5].setComponents(g,y,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const i=hT.distanceTo(e.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const i=this.planes,r=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const u=i[r];if(fc.x=u.normal.x>0?e.max.x:e.min.x,fc.y=u.normal.y>0?e.max.y:e.min.y,fc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pp extends po{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new nt,Dc=new nt,H0=new rn,dl=new El,hc=new Ml,Id=new nt,G0=new nt;class YS extends kn{constructor(e=new di,i=new Pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let u=1,f=i.count;u<f;u++)wc.fromBufferAttribute(i,u-1),Dc.fromBufferAttribute(i,u),r[u]=r[u-1],r[u]+=wc.distanceTo(Dc);e.setAttribute("lineDistance",new Sn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,u=this.matrixWorld,f=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(u),hc.radius+=f,e.ray.intersectsSphere(hc)===!1)return;H0.copy(u).invert(),dl.copy(e.ray).applyMatrix4(H0);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,p=this.isLineSegments?2:1,S=r.index,y=r.attributes.position;if(S!==null){const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=M,x=b-1;C<x;C+=p){const v=S.getX(C),N=S.getX(C+1),D=dc(this,e,dl,g,v,N,C);D&&i.push(D)}if(this.isLineLoop){const C=S.getX(b-1),x=S.getX(M),v=dc(this,e,dl,g,C,x,b-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),b=Math.min(y.count,h.start+h.count);for(let C=M,x=b-1;C<x;C+=p){const v=dc(this,e,dl,g,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=dc(this,e,dl,g,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function dc(o,e,i,r,u,f,h){const d=o.geometry.attributes.position;if(wc.fromBufferAttribute(d,u),Dc.fromBufferAttribute(d,f),i.distanceSqToSegment(wc,Dc,Id,G0)>r)return;Id.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Id);if(!(p<e.near||p>e.far))return{distance:p,point:G0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const V0=new nt,X0=new nt;class dT extends YS{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let u=0,f=i.count;u<f;u+=2)V0.fromBufferAttribute(i,u),X0.fromBufferAttribute(i,u+1),r[u]=u===0?0:r[u-1],r[u+1]=r[u]+V0.distanceTo(X0);e.setAttribute("lineDistance",new Sn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zp extends po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const k0=new rn,Ip=new El,pc=new Ml,mc=new nt;class j0 extends kn{constructor(e=new di,i=new zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(u),pc.radius+=f,e.ray.intersectsSphere(pc)===!1)return;k0.copy(u).invert(),Ip.copy(e.ray).applyMatrix4(k0);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,p=r.index,m=r.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=y,C=M;b<C;b++){const x=p.getX(b);mc.fromBufferAttribute(m,x),Y0(mc,x,g,u,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let b=y,C=M;b<C;b++)mc.fromBufferAttribute(m,b),Y0(mc,b,g,u,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function Y0(o,e,i,r,u,f,h){const d=Ip.distanceSqToPoint(o);if(d<i){const g=new nt;Ip.closestPointToPoint(o,g),g.applyMatrix4(r);const p=u.ray.origin.distanceTo(g);if(p<u.near||p>u.far)return;f.push({distance:p,distanceToRay:Math.sqrt(d),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class qS extends ei{constructor(e,i,r=Ks,u,f,h,d=Ii,g=Ii,p,S=_l,m=1){if(S!==_l&&S!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:m};super(y,u,f,h,d,g,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class WS extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nc extends di{constructor(e=1,i=1,r=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:u};const f=e/2,h=i/2,d=Math.floor(r),g=Math.floor(u),p=d+1,S=g+1,m=e/d,y=i/g,M=[],b=[],C=[],x=[];for(let v=0;v<S;v++){const N=v*y-h;for(let D=0;D<p;D++){const A=D*m-f;b.push(A,-N,0),C.push(0,0,1),x.push(D/d),x.push(1-v/g)}}for(let v=0;v<g;v++)for(let N=0;N<d;N++){const D=N+p*v,A=N+p*(v+1),I=N+1+p*(v+1),P=N+1+p*v;M.push(D,A,P),M.push(A,I,P)}this.setIndex(M),this.setAttribute("position",new Sn(b,3)),this.setAttribute("normal",new Sn(C,3)),this.setAttribute("uv",new Sn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qp extends di{constructor(e=1,i=32,r=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const g=Math.min(h+d,Math.PI);let p=0;const S=[],m=new nt,y=new nt,M=[],b=[],C=[],x=[];for(let v=0;v<=r;v++){const N=[],D=v/r;let A=0;v===0&&h===0?A=.5/i:v===r&&g===Math.PI&&(A=-.5/i);for(let I=0;I<=i;I++){const P=I/i;m.x=-e*Math.cos(u+P*f)*Math.sin(h+D*d),m.y=e*Math.cos(h+D*d),m.z=e*Math.sin(u+P*f)*Math.sin(h+D*d),b.push(m.x,m.y,m.z),y.copy(m).normalize(),C.push(y.x,y.y,y.z),x.push(P+A,1-D),N.push(p++)}S.push(N)}for(let v=0;v<r;v++)for(let N=0;N<i;N++){const D=S[v][N+1],A=S[v][N],I=S[v+1][N],P=S[v+1][N+1];(v!==0||h>0)&&M.push(D,A,P),(v!==r-1||g<Math.PI)&&M.push(A,I,P)}this.setIndex(M),this.setAttribute("position",new Sn(b,3)),this.setAttribute("normal",new Sn(C,3)),this.setAttribute("uv",new Sn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pT extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mT extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q0={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class gT{constructor(e,i,r){const u=this;let f=!1,h=0,d=0,g;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(S){d++,f===!1&&u.onStart!==void 0&&u.onStart(S,h,d),f=!0},this.itemEnd=function(S){h++,u.onProgress!==void 0&&u.onProgress(S,h,d),h===d&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(S){u.onError!==void 0&&u.onError(S)},this.resolveURL=function(S){return g?g(S):S},this.setURLModifier=function(S){return g=S,this},this.addHandler=function(S,m){return p.push(S,m),this},this.removeHandler=function(S){const m=p.indexOf(S);return m!==-1&&p.splice(m,2),this},this.getHandler=function(S){for(let m=0,y=p.length;m<y;m+=2){const M=p[m],b=p[m+1];if(M.global&&(M.lastIndex=0),M.test(S))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const _T=new gT;class Jp{constructor(e){this.manager=e!==void 0?e:_T,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(u,f){r.load(e,u,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ma={};class vT extends Error{constructor(e,i){super(e),this.response=i}}class ST extends Jp{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,i,r,u){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=q0.get(`file:${e}`);if(f!==void 0)return this.manager.itemStart(e),setTimeout(()=>{i&&i(f),this.manager.itemEnd(e)},0),f;if(Ma[e]!==void 0){Ma[e].push({onLoad:i,onProgress:r,onError:u});return}Ma[e]=[],Ma[e].push({onLoad:i,onProgress:r,onError:u});const h=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,g=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const S=Ma[e],m=p.body.getReader(),y=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=y?parseInt(y):0,b=M!==0;let C=0;const x=new ReadableStream({start(v){N();function N(){m.read().then(({done:D,value:A})=>{if(D)v.close();else{C+=A.byteLength;const I=new ProgressEvent("progress",{lengthComputable:b,loaded:C,total:M});for(let P=0,L=S.length;P<L;P++){const V=S[P];V.onProgress&&V.onProgress(I)}v.enqueue(A),N()}},D=>{v.error(D)})}}});return new Response(x)}else throw new vT(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(g){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(S=>new DOMParser().parseFromString(S,d));case"json":return p.json();default:if(d==="")return p.text();{const m=/charset="?([^;"\s]*)"?/i.exec(d),y=m&&m[1]?m[1].toLowerCase():void 0,M=new TextDecoder(y);return p.arrayBuffer().then(b=>M.decode(b))}}}).then(p=>{q0.add(`file:${e}`,p);const S=Ma[e];delete Ma[e];for(let m=0,y=S.length;m<y;m++){const M=S[m];M.onLoad&&M.onLoad(p)}}).catch(p=>{const S=Ma[e];if(S===void 0)throw this.manager.itemError(e),p;delete Ma[e];for(let m=0,y=S.length;m<y;m++){const M=S[m];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class xT extends XS{constructor(e=-1,i=1,r=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=u+i,g=u-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=S*this.view.offsetY,g=d-S*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yT extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const W0=new rn;class MT{constructor(e,i,r=0,u=1/0){this.ray=new El(e,i),this.near=r,this.far=u,this.camera=null,this.layers=new Zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return W0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(W0),this}intersectObject(e,i=!0,r=[]){return Bp(e,this,r,i),r.sort(Z0),r}intersectObjects(e,i=!0,r=[]){for(let u=0,f=e.length;u<f;u++)Bp(e[u],this,r,i);return r.sort(Z0),r}}function Z0(o,e){return o.distance-e.distance}function Bp(o,e,i,r){let u=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(u=!1),u===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Bp(f[h],e,i,!0)}}class K0{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(be(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ET extends $s{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Q0(o,e,i,r){const u=TT(r);switch(i){case NS:return o*e;case OS:return o*e/u.components*u.byteLength;case jp:return o*e/u.components*u.byteLength;case PS:return o*e*2/u.components*u.byteLength;case Yp:return o*e*2/u.components*u.byteLength;case LS:return o*e*3/u.components*u.byteLength;case zi:return o*e*4/u.components*u.byteLength;case qp:return o*e*4/u.components*u.byteLength;case xc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case op:case up:return Math.max(o,16)*Math.max(e,8)/4;case rp:case lp:return Math.max(o,8)*Math.max(e,8)/2;case cp:case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rp:case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Np:case Lp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function TT(o){switch(o){case Ra:case CS:return{byteLength:1,components:1};case ml:case wS:case xl:return{byteLength:2,components:1};case Xp:case kp:return{byteLength:2,components:4};case Ks:case Vp:case ba:return{byteLength:4,components:1};case DS:case US:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);function ZS(){let o=null,e=!1,i=null,r=null;function u(f,h){i(f,h),r=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function bT(o){const e=new WeakMap;function i(d,g){const p=d.array,S=d.usage,m=p.byteLength,y=o.createBuffer();o.bindBuffer(g,y),o.bufferData(g,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,g,p){const S=g.array,m=g.updateRanges;if(o.bindBuffer(p,d),m.length===0)o.bufferSubData(p,0,S);else{m.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<m.length;M++){const b=m[y],C=m[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++y,m[y]=C)}m.length=y+1;for(let M=0,b=m.length;M<b;M++){const C=m[M];o.bufferSubData(p,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,g));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,g),p.version=d.version}}return{get:u,remove:f,update:h}}var AT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
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
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NT=`#ifdef USE_AOMAP
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
#endif`,LT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FT=`#ifdef USE_IRIDESCENCE
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
#endif`,HT=`#ifdef USE_BUMPMAP
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZT=`#define PI 3.141592653589793
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
} // validated`,KT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QT=`vec3 transformedNormal = objectNormal;
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
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
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
}`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
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
#endif`,Tb=`struct PhysicalMaterial {
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
}`,bb=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pb=`#if defined( USE_POINTS_UV )
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
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,dA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SA=`#ifdef USE_TRANSMISSION
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
#endif`,xA=`#ifdef USE_TRANSMISSION
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AA=`uniform sampler2D t2D;
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
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
}`,NA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LA=`#define DISTANCE
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
}`,OA=`#define DISTANCE
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
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
}`,BA=`uniform vec3 diffuse;
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
}`,FA=`#include <common>
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
}`,HA=`uniform vec3 diffuse;
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
}`,GA=`#define LAMBERT
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
}`,VA=`#define LAMBERT
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
}`,XA=`#define MATCAP
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
}`,kA=`#define MATCAP
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
}`,jA=`#define NORMAL
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
}`,YA=`#define NORMAL
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
}`,qA=`#define PHONG
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
}`,WA=`#define PHONG
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
}`,ZA=`#define STANDARD
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
}`,KA=`#define STANDARD
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
}`,QA=`#define TOON
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
}`,JA=`#define TOON
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
}`,$A=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,n1=`uniform vec3 color;
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
}`,i1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,a1=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:AT,alphahash_pars_fragment:RT,alphamap_fragment:CT,alphamap_pars_fragment:wT,alphatest_fragment:DT,alphatest_pars_fragment:UT,aomap_fragment:NT,aomap_pars_fragment:LT,batching_pars_vertex:OT,batching_vertex:PT,begin_vertex:zT,beginnormal_vertex:IT,bsdfs:BT,iridescence_fragment:FT,bumpmap_pars_fragment:HT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:XT,clipping_planes_vertex:kT,color_fragment:jT,color_pars_fragment:YT,color_pars_vertex:qT,color_vertex:WT,common:ZT,cube_uv_reflection_fragment:KT,defaultnormal_vertex:QT,displacementmap_pars_vertex:JT,displacementmap_vertex:$T,emissivemap_fragment:tb,emissivemap_pars_fragment:eb,colorspace_fragment:nb,colorspace_pars_fragment:ib,envmap_fragment:ab,envmap_common_pars_fragment:sb,envmap_pars_fragment:rb,envmap_pars_vertex:ob,envmap_physical_pars_fragment:vb,envmap_vertex:lb,fog_vertex:ub,fog_pars_vertex:cb,fog_fragment:fb,fog_pars_fragment:hb,gradientmap_pars_fragment:db,lightmap_pars_fragment:pb,lights_lambert_fragment:mb,lights_lambert_pars_fragment:gb,lights_pars_begin:_b,lights_toon_fragment:Sb,lights_toon_pars_fragment:xb,lights_phong_fragment:yb,lights_phong_pars_fragment:Mb,lights_physical_fragment:Eb,lights_physical_pars_fragment:Tb,lights_fragment_begin:bb,lights_fragment_maps:Ab,lights_fragment_end:Rb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Ub,map_fragment:Nb,map_pars_fragment:Lb,map_particle_fragment:Ob,map_particle_pars_fragment:Pb,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Bb,morphcolor_vertex:Fb,morphnormal_vertex:Hb,morphtarget_pars_vertex:Gb,morphtarget_vertex:Vb,normal_fragment_begin:Xb,normal_fragment_maps:kb,normal_pars_fragment:jb,normal_pars_vertex:Yb,normal_vertex:qb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Qb,iridescence_pars_fragment:Jb,opaque_fragment:$b,packing:tA,premultiplied_alpha_fragment:eA,project_vertex:nA,dithering_fragment:iA,dithering_pars_fragment:aA,roughnessmap_fragment:sA,roughnessmap_pars_fragment:rA,shadowmap_pars_fragment:oA,shadowmap_pars_vertex:lA,shadowmap_vertex:uA,shadowmask_pars_fragment:cA,skinbase_vertex:fA,skinning_pars_vertex:hA,skinning_vertex:dA,skinnormal_vertex:pA,specularmap_fragment:mA,specularmap_pars_fragment:gA,tonemapping_fragment:_A,tonemapping_pars_fragment:vA,transmission_fragment:SA,transmission_pars_fragment:xA,uv_pars_fragment:yA,uv_pars_vertex:MA,uv_vertex:EA,worldpos_vertex:TA,background_vert:bA,background_frag:AA,backgroundCube_vert:RA,backgroundCube_frag:CA,cube_vert:wA,cube_frag:DA,depth_vert:UA,depth_frag:NA,distanceRGBA_vert:LA,distanceRGBA_frag:OA,equirect_vert:PA,equirect_frag:zA,linedashed_vert:IA,linedashed_frag:BA,meshbasic_vert:FA,meshbasic_frag:HA,meshlambert_vert:GA,meshlambert_frag:VA,meshmatcap_vert:XA,meshmatcap_frag:kA,meshnormal_vert:jA,meshnormal_frag:YA,meshphong_vert:qA,meshphong_frag:WA,meshphysical_vert:ZA,meshphysical_frag:KA,meshtoon_vert:QA,meshtoon_frag:JA,points_vert:$A,points_frag:t1,shadow_vert:e1,shadow_frag:n1,sprite_vert:i1,sprite_frag:a1},Gt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Xn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Xn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Xn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Xn([Gt.points,Gt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Xn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Xn([Gt.common,Gt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Xn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Xn([Gt.sprite,Gt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Xn([Gt.common,Gt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Xn([Gt.lights,Gt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const gc={r:0,b:0,g:0},Xs=new Ca,s1=new rn;function r1(o,e,i,r,u,f,h){const d=new Be(0);let g=f===!0?0:1,p,S,m=null,y=0,M=null;function b(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?i:e).get(A)),A}function C(D){let A=!1;const I=b(D);I===null?v(d,g):I&&I.isColor&&(v(I,1),A=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(D,A){const I=b(A);I&&(I.isCubeTexture||I.mapping===Uc)?(S===void 0&&(S=new $i(new Tl(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:fo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(P,L,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(S)),Xs.copy(A.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),S.material.uniforms.envMap.value=I,S.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(Xs)),S.material.toneMapped=Oe.getTransfer(I.colorSpace)!==Ye,(m!==I||y!==I.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,m=I,y=I.version,M=o.toneMapping),S.layers.enableAll(),D.unshift(S,S.geometry,S.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new $i(new Nc(2,2),new ps({name:"BackgroundMaterial",uniforms:fo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(I.colorSpace)!==Ye,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||y!==I.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,m=I,y=I.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,A){D.getRGB(gc,VS(o)),r.buffers.color.setClear(gc.r,gc.g,gc.b,A,h)}function N(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,A=1){d.set(D),g=A,v(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(D){g=D,v(d,g)},render:C,addToRenderList:x,dispose:N}}function o1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},u=y(null);let f=u,h=!1;function d(w,F,at,st,_t){let ot=!1;const k=m(st,at,F);f!==k&&(f=k,p(f.object)),ot=M(w,st,at,_t),ot&&b(w,st,at,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,A(w,F,at,st),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function g(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function S(w){return o.deleteVertexArray(w)}function m(w,F,at){const st=at.wireframe===!0;let _t=r[w.id];_t===void 0&&(_t={},r[w.id]=_t);let ot=_t[F.id];ot===void 0&&(ot={},_t[F.id]=ot);let k=ot[st];return k===void 0&&(k=y(g()),ot[st]=k),k}function y(w){const F=[],at=[],st=[];for(let _t=0;_t<i;_t++)F[_t]=0,at[_t]=0,st[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:at,attributeDivisors:st,object:w,attributes:{},index:null}}function M(w,F,at,st){const _t=f.attributes,ot=F.attributes;let k=0;const it=at.getAttributes();for(const Y in it)if(it[Y].location>=0){const Et=_t[Y];let It=ot[Y];if(It===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(It=w.instanceColor)),Et===void 0||Et.attribute!==It||It&&Et.data!==It.data)return!0;k++}return f.attributesNum!==k||f.index!==st}function b(w,F,at,st){const _t={},ot=F.attributes;let k=0;const it=at.getAttributes();for(const Y in it)if(it[Y].location>=0){let Et=ot[Y];Et===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const It={};It.attribute=Et,Et&&Et.data&&(It.data=Et.data),_t[Y]=It,k++}f.attributes=_t,f.attributesNum=k,f.index=st}function C(){const w=f.newAttributes;for(let F=0,at=w.length;F<at;F++)w[F]=0}function x(w){v(w,0)}function v(w,F){const at=f.newAttributes,st=f.enabledAttributes,_t=f.attributeDivisors;at[w]=1,st[w]===0&&(o.enableVertexAttribArray(w),st[w]=1),_t[w]!==F&&(o.vertexAttribDivisor(w,F),_t[w]=F)}function N(){const w=f.newAttributes,F=f.enabledAttributes;for(let at=0,st=F.length;at<st;at++)F[at]!==w[at]&&(o.disableVertexAttribArray(at),F[at]=0)}function D(w,F,at,st,_t,ot,k){k===!0?o.vertexAttribIPointer(w,F,at,_t,ot):o.vertexAttribPointer(w,F,at,st,_t,ot)}function A(w,F,at,st){C();const _t=st.attributes,ot=at.getAttributes(),k=F.defaultAttributeValues;for(const it in ot){const Y=ot[it];if(Y.location>=0){let Mt=_t[it];if(Mt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const Et=Mt.normalized,It=Mt.itemSize,ie=e.get(Mt);if(ie===void 0)continue;const pe=ie.buffer,H=ie.type,dt=ie.bytesPerElement,J=H===o.INT||H===o.UNSIGNED_INT||Mt.gpuType===Vp;if(Mt.isInterleavedBufferAttribute){const lt=Mt.data,Tt=lt.stride,Nt=Mt.offset;if(lt.isInstancedInterleavedBuffer){for(let At=0;At<Y.locationSize;At++)v(Y.location+At,lt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let At=0;At<Y.locationSize;At++)x(Y.location+At);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let At=0;At<Y.locationSize;At++)D(Y.location+At,It/Y.locationSize,H,Et,Tt*dt,(Nt+It/Y.locationSize*At)*dt,J)}else{if(Mt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)v(Y.location+lt,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let lt=0;lt<Y.locationSize;lt++)x(Y.location+lt);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let lt=0;lt<Y.locationSize;lt++)D(Y.location+lt,It/Y.locationSize,H,Et,It*dt,It/Y.locationSize*lt*dt,J)}}else if(k!==void 0){const Et=k[it];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(Y.location,Et);break;case 3:o.vertexAttrib3fv(Y.location,Et);break;case 4:o.vertexAttrib4fv(Y.location,Et);break;default:o.vertexAttrib1fv(Y.location,Et)}}}}N()}function I(){V();for(const w in r){const F=r[w];for(const at in F){const st=F[at];for(const _t in st)S(st[_t].object),delete st[_t];delete F[at]}delete r[w]}}function P(w){if(r[w.id]===void 0)return;const F=r[w.id];for(const at in F){const st=F[at];for(const _t in st)S(st[_t].object),delete st[_t];delete F[at]}delete r[w.id]}function L(w){for(const F in r){const at=r[F];if(at[w.id]===void 0)continue;const st=at[w.id];for(const _t in st)S(st[_t].object),delete st[_t];delete at[w.id]}}function V(){U(),h=!0,f!==u&&(f=u,p(f.object))}function U(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:V,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:C,enableAttribute:x,disableUnusedAttributes:N}}function l1(o,e,i){let r;function u(p){r=p}function f(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,m){m!==0&&(o.drawArraysInstanced(r,p,S,m),i.update(S,r,m))}function d(p,S,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,m);let M=0;for(let b=0;b<m;b++)M+=S[b];i.update(M,r,1)}function g(p,S,m,y){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],S[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,S,0,y,0,m);let b=0;for(let C=0;C<m;C++)b+=S[C]*y[C];i.update(b,r,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function u1(o,e,i,r){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(L){return!(L!==zi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const V=L===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ra&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ba&&!V)}function g(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=g(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const m=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=b>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:I,maxSamples:P}}function c1(o){const e=this;let i=null,r=0,u=!1,f=!1;const h=new us,d=new _e,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const M=m.length!==0||y||r!==0||u;return u=y,r=m.length,M},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,y){i=S(m,y,0)},this.setState=function(m,y,M){const b=m.clippingPlanes,C=m.clipIntersection,x=m.clipShadows,v=o.get(m);if(!u||b===null||b.length===0||f&&!x)f?S(null):p();else{const N=f?0:r,D=N*4;let A=v.clippingState||null;g.value=A,A=S(b,y,D,M);for(let I=0;I!==D;++I)A[I]=i[I];v.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(m,y,M,b){const C=m!==null?m.length:0;let x=null;if(C!==0){if(x=g.value,b!==!0||x===null){const v=M+C*4,N=y.matrixWorldInverse;d.getNormalMatrix(N),(x===null||x.length<v)&&(x=new Float32Array(v));for(let D=0,A=M;D!==C;++D,A+=4)h.copy(m[D]).applyMatrix4(N,d),h.normal.toArray(x,A),x[A+3]=h.constant}g.value=x,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}function f1(o){let e=new WeakMap;function i(h,d){return d===np?h.mapping=lo:d===ip&&(h.mapping=uo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===np||d===ip)if(e.has(h)){const g=e.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const p=new oT(g.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",u),i(p.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const io=4,J0=[.125,.215,.35,.446,.526,.582],qs=20,Bd=new xT,$0=new Be;let Fd=null,Hd=0,Gd=0,Vd=!1;const js=(1+Math.sqrt(5))/2,$r=1/js,tS=[new nt(-js,$r,0),new nt(js,$r,0),new nt(-$r,0,js),new nt($r,0,js),new nt(0,js,-$r),new nt(0,js,$r),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],h1=new nt;class eS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,u=100,f={}){const{size:h=256,position:d=h1}=f;Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,r,u,g,d),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=aS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Hd,Gd),this._renderer.xr.enabled=Vd,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:xl,format:zi,colorSpace:co,depthBuffer:!1},u=nS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nS(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d1(f)),this._blurMaterial=p1(f,e,i)}return u}_compileMaterial(e){const i=new $i(this._lodPlanes[0],e);this._renderer.compile(i,Bd)}_sceneToCubeUV(e,i,r,u,f){const g=new bi(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,M=m.toneMapping;m.getClearColor($0),m.toneMapping=hs,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(u),m.clearDepth(),m.setRenderTarget(null));const C=new Kp({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),x=new $i(new Tl,C);let v=!1;const N=e.background;N?N.isColor&&(C.color.copy(N),e.background=null,v=!0):(C.color.copy($0),v=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(g.up.set(0,p[D],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+S[D],f.y,f.z)):A===1?(g.up.set(0,0,p[D]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+S[D],f.z)):(g.up.set(0,p[D],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+S[D]));const I=this._cubeSize;_c(u,A*I,D>2?I:0,I,I),m.setRenderTarget(u),v&&m.render(x,g),m.render(e,g)}x.geometry.dispose(),x.material.dispose(),m.toneMapping=M,m.autoClear=y,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,u=e.mapping===lo||e.mapping===uo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=aS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iS());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new $i(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const g=this._cubeSize;_c(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(h,Bd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=tS[(u-f-1)%tS.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,u,"latitudinal",f),this._halfBlur(h,e,r,r,u,"longitudinal",f)}_halfBlur(e,i,r,u,f,h,d){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,m=new $i(this._lodPlanes[u],p),y=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*qs-1),C=f/b,x=isFinite(f)?1+Math.floor(S*C):qs;x>qs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qs}`);const v=[];let N=0;for(let L=0;L<qs;++L){const V=L/C,U=Math.exp(-V*V/2);v.push(U),L===0?N+=U:L<x&&(N+=2*U)}for(let L=0;L<v.length;L++)v[L]=v[L]/N;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=b,y.mipInt.value=D-r;const A=this._sizeLods[u],I=3*A*(u>D-io?u-D+io:0),P=4*(this._cubeSize-A);_c(i,I,P,3*A,2*A),g.setRenderTarget(i),g.render(m,Bd)}}function d1(o){const e=[],i=[],r=[];let u=o;const f=o-io+1+J0.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);i.push(d);let g=1/d;h>o-io?g=J0[h-o+io-1]:h===0&&(g=0),r.push(g);const p=1/(d-2),S=-p,m=1+p,y=[S,S,m,S,m,m,S,S,m,m,S,m],M=6,b=6,C=3,x=2,v=1,N=new Float32Array(C*b*M),D=new Float32Array(x*b*M),A=new Float32Array(v*b*M);for(let P=0;P<M;P++){const L=P%3*2/3-1,V=P>2?0:-1,U=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];N.set(U,C*b*P),D.set(y,x*b*P);const w=[P,P,P,P,P,P];A.set(w,v*b*P)}const I=new di;I.setAttribute("position",new ta(N,C)),I.setAttribute("uv",new ta(D,x)),I.setAttribute("faceIndex",new ta(A,v)),e.push(I),u>io&&u--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function nS(o,e,i){const r=new Js(o,e,i);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _c(o,e,i,r,u){o.viewport.set(e,i,r,u),o.scissor.set(e,i,r,u)}function p1(o,e,i){const r=new Float32Array(qs),u=new nt(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:$p(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function iS(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function aS(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function $p(){return`

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
	`}function m1(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const g=d.mapping,p=g===np||g===ip,S=g===lo||g===uo;if(p||S){let m=e.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new eS(o)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&u(M)?(i===null&&(i=new eS(o)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function u(d){let g=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&g++;return g===p}function f(d){const g=d.target;g.removeEventListener("dispose",f);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function g1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let u;switch(r){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(r)}return e[r]=u,u}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const u=i(r);return u===null&&Sl("THREE.WebGLRenderer: "+r+" extension not supported."),u}}}function _1(o,e,i,r){const u={},f=new WeakMap;function h(m){const y=m.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete u[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(m,y){return u[y.id]===!0||(y.addEventListener("dispose",h),u[y.id]=!0,i.memory.geometries++),y}function g(m){const y=m.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function p(m){const y=[],M=m.index,b=m.attributes.position;let C=0;if(M!==null){const N=M.array;C=M.version;for(let D=0,A=N.length;D<A;D+=3){const I=N[D+0],P=N[D+1],L=N[D+2];y.push(I,P,P,L,L,I)}}else if(b!==void 0){const N=b.array;C=b.version;for(let D=0,A=N.length/3-1;D<A;D+=3){const I=D+0,P=D+1,L=D+2;y.push(I,P,P,L,L,I)}}else return;const x=new(IS(y)?GS:HS)(y,1);x.version=C;const v=f.get(m);v&&e.remove(v),f.set(m,x)}function S(m){const y=f.get(m);if(y){const M=m.index;M!==null&&y.version<M.version&&p(m)}else p(m);return f.get(m)}return{get:d,update:g,getWireframeAttribute:S}}function v1(o,e,i){let r;function u(y){r=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function g(y,M){o.drawElements(r,M,f,y*h),i.update(M,r,1)}function p(y,M,b){b!==0&&(o.drawElementsInstanced(r,M,f,y*h,b),i.update(M,r,b))}function S(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,y,0,b);let x=0;for(let v=0;v<b;v++)x+=M[v];i.update(x,r,1)}function m(y,M,b,C){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)p(y[v]/h,M[v],C[v]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,f,y,0,C,0,b);let v=0;for(let N=0;N<b;N++)v+=M[N]*C[N];i.update(v,r,1)}}this.setMode=u,this.setIndex=d,this.render=g,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=m}function S1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:r}}function x1(o,e,i){const r=new WeakMap,u=new ln;function f(h,d,g){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=S!==void 0?S.length:0;let y=r.get(d);if(y===void 0||y.count!==m){let w=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),C===!0&&(A=2),x===!0&&(A=3);let I=d.attributes.position.count*A,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const L=new Float32Array(I*P*4*m),V=new BS(L,I,P,m);V.type=ba,V.needsUpdate=!0;const U=A*4;for(let F=0;F<m;F++){const at=v[F],st=N[F],_t=D[F],ot=I*P*4*F;for(let k=0;k<at.count;k++){const it=k*U;b===!0&&(u.fromBufferAttribute(at,k),L[ot+it+0]=u.x,L[ot+it+1]=u.y,L[ot+it+2]=u.z,L[ot+it+3]=0),C===!0&&(u.fromBufferAttribute(st,k),L[ot+it+4]=u.x,L[ot+it+5]=u.y,L[ot+it+6]=u.z,L[ot+it+7]=0),x===!0&&(u.fromBufferAttribute(_t,k),L[ot+it+8]=u.x,L[ot+it+9]=u.y,L[ot+it+10]=u.z,L[ot+it+11]=_t.itemSize===4?u.w:1)}}y={count:m,texture:V,size:new Se(I,P)},r.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let x=0;x<p.length;x++)b+=p[x];const C=d.morphTargetsRelative?1:1-b;g.getUniforms().setValue(o,"morphTargetBaseInfluence",C),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function y1(o,e,i,r){let u=new WeakMap;function f(g){const p=r.render.frame,S=g.geometry,m=e.get(g,S);if(u.get(m)!==p&&(e.update(m),u.set(m,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),u.get(g)!==p&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,p))),g.isSkinnedMesh){const y=g.skeleton;u.get(y)!==p&&(y.update(),u.set(y,p))}return m}function h(){u=new WeakMap}function d(g){const p=g.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:h}}const KS=new ei,sS=new qS(1,1),QS=new BS,JS=new kE,$S=new kS,rS=[],oS=[],lS=new Float32Array(16),uS=new Float32Array(9),cS=new Float32Array(4);function mo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const u=e*i;let f=rS[u];if(f===void 0&&(f=new Float32Array(u),rS[u]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Lc(o,e){let i=oS[e];i===void 0&&(i=new Int32Array(e),oS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function M1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function A1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;cS.set(r),o.uniformMatrix2fv(this.addr,!1,cS),yn(i,r)}}function R1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;uS.set(r),o.uniformMatrix3fv(this.addr,!1,uS),yn(i,r)}}function C1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;lS.set(r),o.uniformMatrix4fv(this.addr,!1,lS),yn(i,r)}}function w1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function D1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function U1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function N1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function L1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function O1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function P1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function z1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function I1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(sS.compareFunction=zS,f=sS):f=KS,i.setTexture2D(e||f,u)}function B1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture3D(e||JS,u)}function F1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTextureCube(e||$S,u)}function H1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture2DArray(e||QS,u)}function G1(o){switch(o){case 5126:return M1;case 35664:return E1;case 35665:return T1;case 35666:return b1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return w1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return L1;case 36294:return O1;case 36295:return P1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return H1}}function V1(o,e){o.uniform1fv(this.addr,e)}function X1(o,e){const i=mo(e,this.size,2);o.uniform2fv(this.addr,i)}function k1(o,e){const i=mo(e,this.size,3);o.uniform3fv(this.addr,i)}function j1(o,e){const i=mo(e,this.size,4);o.uniform4fv(this.addr,i)}function Y1(o,e){const i=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function q1(o,e){const i=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function W1(o,e){const i=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Z1(o,e){o.uniform1iv(this.addr,e)}function K1(o,e){o.uniform2iv(this.addr,e)}function Q1(o,e){o.uniform3iv(this.addr,e)}function J1(o,e){o.uniform4iv(this.addr,e)}function $1(o,e){o.uniform1uiv(this.addr,e)}function tR(o,e){o.uniform2uiv(this.addr,e)}function eR(o,e){o.uniform3uiv(this.addr,e)}function nR(o,e){o.uniform4uiv(this.addr,e)}function iR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);xn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture2D(e[h]||KS,f[h])}function aR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);xn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture3D(e[h]||JS,f[h])}function sR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);xn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTextureCube(e[h]||$S,f[h])}function rR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);xn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture2DArray(e[h]||QS,f[h])}function oR(o){switch(o){case 5126:return V1;case 35664:return X1;case 35665:return k1;case 35666:return j1;case 35674:return Y1;case 35675:return q1;case 35676:return W1;case 5124:case 35670:return Z1;case 35667:case 35671:return K1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return tR;case 36295:return eR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return rR}}class lR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=G1(i.type)}}class uR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oR(i.type)}}class cR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,i[d.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function fS(o,e){o.seq.push(e),o.map[e.id]=e}function fR(o,e,i){const r=o.name,u=r.length;for(Xd.lastIndex=0;;){const f=Xd.exec(r),h=Xd.lastIndex;let d=f[1];const g=f[2]==="]",p=f[3];if(g&&(d=d|0),p===void 0||p==="["&&h+2===u){fS(i,p===void 0?new lR(d,o,e):new uR(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new cR(d),fS(i,m)),i=m}}}class bc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(i,u),h=e.getUniformLocation(i,f.name);fR(f,h,this)}}setValue(e,i,r,u){const f=this.map[i];f!==void 0&&f.setValue(e,r,u)}setOptional(e,i,r){const u=i[r];u!==void 0&&this.setValue(e,r,u)}static upload(e,i,r,u){for(let f=0,h=i.length;f!==h;++f){const d=i[f],g=r[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,u)}}static seqWithValue(e,i){const r=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in i&&r.push(h)}return r}}function hS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const hR=37297;let dR=0;function pR(o,e){const i=o.split(`
`),r=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=u;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const dS=new _e;function mR(o){Oe._getMatrix(dS,Oe.workingColorSpace,o);const e=`mat3( ${dS.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function pS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+pR(o.getShaderSource(e),d)}else return f}function gR(o,e){const i=mR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function _R(o,e){let i;switch(e){case gE:i="Linear";break;case _E:i="Reinhard";break;case vE:i="Cineon";break;case SE:i="ACESFilmic";break;case yE:i="AgX";break;case ME:i="Neutral";break;case xE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new nt;function vR(){Oe.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function xR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function yR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<r;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function pl(o){return o!==""}function mS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(o){return o.replace(MR,TR)}const ER=new Map;function TR(o,e){let i=ve[e];if(i===void 0){const r=ER.get(e);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Fp(i)}const bR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _S(o){return o.replace(bR,AR)}function AR(o,e,i,r){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function vS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===bS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ZM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function CR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wR(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===uo&&(e="ENVMAP_MODE_REFRACTION"),e}function DR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case AS:e="ENVMAP_BLENDING_MULTIPLY";break;case pE:e="ENVMAP_BLENDING_MIX";break;case mE:e="ENVMAP_BLENDING_ADD";break}return e}function UR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function NR(o,e,i,r){const u=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const g=RR(i),p=CR(i),S=wR(i),m=DR(i),y=UR(i),M=SR(i),b=xR(f),C=u.createProgram();let x,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),v.length>0&&(v+=`
`)):(x=[vS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),v=[vS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==hs?"#define TONE_MAPPING":"",i.toneMapping!==hs?ve.tonemapping_pars_fragment:"",i.toneMapping!==hs?_R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,gR("linearToOutputTexel",i.outputColorSpace),vR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),h=Fp(h),h=mS(h,i),h=gS(h,i),d=Fp(d),d=mS(d,i),d=gS(d,i),h=_S(h),d=_S(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===M0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=N+x+h,A=N+v+d,I=hS(u,u.VERTEX_SHADER,D),P=hS(u,u.FRAGMENT_SHADER,A);u.attachShader(C,I),u.attachShader(C,P),i.index0AttributeName!==void 0?u.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(C,0,"position"),u.linkProgram(C);function L(F){if(o.debug.checkShaderErrors){const at=u.getProgramInfoLog(C)||"",st=u.getShaderInfoLog(I)||"",_t=u.getShaderInfoLog(P)||"",ot=at.trim(),k=st.trim(),it=_t.trim();let Y=!0,Mt=!0;if(u.getProgramParameter(C,u.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,C,I,P);else{const Et=pS(u,I,"vertex"),It=pS(u,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(C,u.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+Et+`
`+It)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(k===""||it==="")&&(Mt=!1);Mt&&(F.diagnostics={runnable:Y,programLog:ot,vertexShader:{log:k,prefix:x},fragmentShader:{log:it,prefix:v}})}u.deleteShader(I),u.deleteShader(P),V=new bc(u,C),U=yR(u,C)}let V;this.getUniforms=function(){return V===void 0&&L(this),V};let U;this.getAttributes=function(){return U===void 0&&L(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=u.getProgramParameter(C,hR)),w},this.destroy=function(){r.releaseStatesOfProgram(this),u.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=P,this}let LR=0;class OR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new PR(e),i.set(e,r)),r}}class PR{constructor(e){this.id=LR++,this.code=e,this.usedTimes=0}}function zR(o,e,i,r,u,f,h){const d=new Zp,g=new OR,p=new Set,S=[],m=u.logarithmicDepthBuffer,y=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(U){return p.add(U),U===0?"uv":`uv${U}`}function x(U,w,F,at,st){const _t=at.fog,ot=st.geometry,k=U.isMeshStandardMaterial?at.environment:null,it=(U.isMeshStandardMaterial?i:e).get(U.envMap||k),Y=it&&it.mapping===Uc?it.image.height:null,Mt=b[U.type];U.precision!==null&&(M=u.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Et=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,It=Et!==void 0?Et.length:0;let ie=0;ot.morphAttributes.position!==void 0&&(ie=1),ot.morphAttributes.normal!==void 0&&(ie=2),ot.morphAttributes.color!==void 0&&(ie=3);let pe,H,dt,J;if(Mt){const Ae=Ki[Mt];pe=Ae.vertexShader,H=Ae.fragmentShader}else pe=U.vertexShader,H=U.fragmentShader,g.update(U),dt=g.getVertexShaderID(U),J=g.getFragmentShaderID(U);const lt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Nt=st.isInstancedMesh===!0,At=st.isBatchedMesh===!0,vt=!!U.map,Vt=!!U.matcap,B=!!it,we=!!U.aoMap,Qt=!!U.lightMap,Wt=!!U.bumpMap,xt=!!U.normalMap,zt=!!U.displacementMap,Dt=!!U.emissiveMap,W=!!U.metalnessMap,Xt=!!U.roughnessMap,oe=U.anisotropy>0,O=U.clearcoat>0,T=U.dispersion>0,et=U.iridescence>0,pt=U.sheen>0,St=U.transmission>0,ht=oe&&!!U.anisotropyMap,qt=O&&!!U.clearcoatMap,Ut=O&&!!U.clearcoatNormalMap,$t=O&&!!U.clearcoatRoughnessMap,ee=et&&!!U.iridescenceMap,Ct=et&&!!U.iridescenceThicknessMap,Bt=pt&&!!U.sheenColorMap,le=pt&&!!U.sheenRoughnessMap,te=!!U.specularMap,Ft=!!U.specularColorMap,de=!!U.specularIntensityMap,X=St&&!!U.transmissionMap,wt=St&&!!U.thicknessMap,Ot=!!U.gradientMap,Yt=!!U.alphaMap,bt=U.alphaTest>0,yt=!!U.alphaHash,Jt=!!U.extensions;let fe=hs;U.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(fe=o.toneMapping);const ke={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:pe,fragmentShader:H,defines:U.defines,customVertexShaderID:dt,customFragmentShaderID:J,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:At,batchingColor:At&&st._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&st.instanceColor!==null,instancingMorph:Nt&&st.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:co,alphaToCoverage:!!U.alphaToCoverage,map:vt,matcap:Vt,envMap:B,envMapMode:B&&it.mapping,envMapCubeUVHeight:Y,aoMap:we,lightMap:Qt,bumpMap:Wt,normalMap:xt,displacementMap:y&&zt,emissiveMap:Dt,normalMapObjectSpace:xt&&U.normalMapType===RE,normalMapTangentSpace:xt&&U.normalMapType===AE,metalnessMap:W,roughnessMap:Xt,anisotropy:oe,anisotropyMap:ht,clearcoat:O,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:$t,dispersion:T,iridescence:et,iridescenceMap:ee,iridescenceThicknessMap:Ct,sheen:pt,sheenColorMap:Bt,sheenRoughnessMap:le,specularMap:te,specularColorMap:Ft,specularIntensityMap:de,transmission:St,transmissionMap:X,thicknessMap:wt,gradientMap:Ot,opaque:U.transparent===!1&&U.blending===so&&U.alphaToCoverage===!1,alphaMap:Yt,alphaTest:bt,alphaHash:yt,combine:U.combine,mapUv:vt&&C(U.map.channel),aoMapUv:we&&C(U.aoMap.channel),lightMapUv:Qt&&C(U.lightMap.channel),bumpMapUv:Wt&&C(U.bumpMap.channel),normalMapUv:xt&&C(U.normalMap.channel),displacementMapUv:zt&&C(U.displacementMap.channel),emissiveMapUv:Dt&&C(U.emissiveMap.channel),metalnessMapUv:W&&C(U.metalnessMap.channel),roughnessMapUv:Xt&&C(U.roughnessMap.channel),anisotropyMapUv:ht&&C(U.anisotropyMap.channel),clearcoatMapUv:qt&&C(U.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&C(U.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&C(U.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&C(U.sheenColorMap.channel),sheenRoughnessMapUv:le&&C(U.sheenRoughnessMap.channel),specularMapUv:te&&C(U.specularMap.channel),specularColorMapUv:Ft&&C(U.specularColorMap.channel),specularIntensityMapUv:de&&C(U.specularIntensityMap.channel),transmissionMapUv:X&&C(U.transmissionMap.channel),thicknessMapUv:wt&&C(U.thicknessMap.channel),alphaMapUv:Yt&&C(U.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(xt||oe),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ot.attributes.uv&&(vt||Yt),fog:!!_t,useFog:U.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Tt,skinning:st.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:vt&&U.map.isVideoTexture===!0&&Oe.getTransfer(U.map.colorSpace)===Ye,decodeVideoTextureEmissive:Dt&&U.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(U.emissiveMap.colorSpace)===Ye,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ta,flipSided:U.side===ti,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Jt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&U.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return ke.vertexUv1s=p.has(1),ke.vertexUv2s=p.has(2),ke.vertexUv3s=p.has(3),p.clear(),ke}function v(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const F in U.defines)w.push(F),w.push(U.defines[F]);return U.isRawShaderMaterial===!1&&(N(w,U),D(w,U),w.push(o.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function N(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function D(U,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),U.push(d.mask)}function A(U){const w=b[U.type];let F;if(w){const at=Ki[w];F=iT.clone(at.uniforms)}else F=U.uniforms;return F}function I(U,w){let F;for(let at=0,st=S.length;at<st;at++){const _t=S[at];if(_t.cacheKey===w){F=_t,++F.usedTimes;break}}return F===void 0&&(F=new NR(o,w,U,f),S.push(F)),F}function P(U){if(--U.usedTimes===0){const w=S.indexOf(U);S[w]=S[S.length-1],S.pop(),U.destroy()}}function L(U){g.remove(U)}function V(){g.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:A,acquireProgram:I,releaseProgram:P,releaseShaderCache:L,programs:S,dispose:V}}function IR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function u(h,d,g){o.get(h)[d]=g}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:u,dispose:f}}function BR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function SS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function xS(){const o=[];let e=0;const i=[],r=[],u=[];function f(){e=0,i.length=0,r.length=0,u.length=0}function h(m,y,M,b,C,x){let v=o[e];return v===void 0?(v={id:m.id,object:m,geometry:y,material:M,groupOrder:b,renderOrder:m.renderOrder,z:C,group:x},o[e]=v):(v.id=m.id,v.object=m,v.geometry=y,v.material=M,v.groupOrder=b,v.renderOrder=m.renderOrder,v.z=C,v.group=x),e++,v}function d(m,y,M,b,C,x){const v=h(m,y,M,b,C,x);M.transmission>0?r.push(v):M.transparent===!0?u.push(v):i.push(v)}function g(m,y,M,b,C,x){const v=h(m,y,M,b,C,x);M.transmission>0?r.unshift(v):M.transparent===!0?u.unshift(v):i.unshift(v)}function p(m,y){i.length>1&&i.sort(m||BR),r.length>1&&r.sort(y||SS),u.length>1&&u.sort(y||SS)}function S(){for(let m=e,y=o.length;m<y;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:u,init:f,push:d,unshift:g,finish:S,sort:p}}function FR(){let o=new WeakMap;function e(r,u){const f=o.get(r);let h;return f===void 0?(h=new xS,o.set(r,[h])):u>=f.length?(h=new xS,f.push(h)):h=f[u],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function HR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new Be};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function GR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let VR=0;function XR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function kR(o){const e=new HR,i=GR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const u=new nt,f=new rn,h=new rn;function d(p){let S=0,m=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,C=0,x=0,v=0,N=0,D=0,A=0,I=0,P=0,L=0;p.sort(XR);for(let U=0,w=p.length;U<w;U++){const F=p[U],at=F.color,st=F.intensity,_t=F.distance,ot=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)S+=at.r*st,m+=at.g*st,y+=at.b*st;else if(F.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(F.sh.coefficients[k],st);L++}else if(F.isDirectionalLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const it=F.shadow,Y=i.get(F);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ot,r.directionalShadowMatrix[M]=F.shadow.matrix,N++}r.directional[M]=k,M++}else if(F.isSpotLight){const k=e.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(at).multiplyScalar(st),k.distance=_t,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,r.spot[C]=k;const it=F.shadow;if(F.map&&(r.spotLightMap[I]=F.map,I++,it.updateMatrices(F),F.castShadow&&P++),r.spotLightMatrix[C]=it.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=ot,A++}C++}else if(F.isRectAreaLight){const k=e.get(F);k.color.copy(at).multiplyScalar(st),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=k,x++}else if(F.isPointLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){const it=F.shadow,Y=i.get(F);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=ot,r.pointShadowMatrix[b]=F.shadow.matrix,D++}r.point[b]=k,b++}else if(F.isHemisphereLight){const k=e.get(F);k.skyColor.copy(F.color).multiplyScalar(st),k.groundColor.copy(F.groundColor).multiplyScalar(st),r.hemi[v]=k,v++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Gt.LTC_FLOAT_1,r.rectAreaLTC2=Gt.LTC_FLOAT_2):(r.rectAreaLTC1=Gt.LTC_HALF_1,r.rectAreaLTC2=Gt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=m,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==M||V.pointLength!==b||V.spotLength!==C||V.rectAreaLength!==x||V.hemiLength!==v||V.numDirectionalShadows!==N||V.numPointShadows!==D||V.numSpotShadows!==A||V.numSpotMaps!==I||V.numLightProbes!==L)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=x,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=A+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=L,V.directionalLength=M,V.pointLength=b,V.spotLength=C,V.rectAreaLength=x,V.hemiLength=v,V.numDirectionalShadows=N,V.numPointShadows=D,V.numSpotShadows=A,V.numSpotMaps=I,V.numLightProbes=L,r.version=VR++)}function g(p,S){let m=0,y=0,M=0,b=0,C=0;const x=S.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const D=p[v];if(D.isDirectionalLight){const A=r.directional[m];A.direction.setFromMatrixPosition(D.matrixWorld),u.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(u),A.direction.transformDirection(x),m++}else if(D.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(D.matrixWorld),u.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(u),A.direction.transformDirection(x),M++}else if(D.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),h.identity(),f.copy(D.matrixWorld),f.premultiply(x),h.extractRotation(f),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),b++}else if(D.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),y++}else if(D.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(x),C++}}}return{setup:d,setupView:g,state:r}}function yS(o){const e=new kR(o),i=[],r=[];function u(S){p.camera=S,i.length=0,r.length=0}function f(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function g(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:p,setupLights:d,setupLightsView:g,pushLight:f,pushShadow:h}}function jR(o){let e=new WeakMap;function i(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new yS(o),e.set(u,[d])):f>=h.length?(d=new yS(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const YR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qR=`uniform sampler2D shadow_pass;
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
}`;function WR(o,e,i){let r=new jS;const u=new Se,f=new Se,h=new ln,d=new pT({depthPacking:bE}),g=new mT,p={},S=i.maxTextureSize,m={[ds]:ti,[ti]:ds,[Ta]:Ta},y=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:YR,fragmentShader:qR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new di;b.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new $i(b,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bS;let v=this.type;this.render=function(P,L,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const U=o.getRenderTarget(),w=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),at=o.state;at.setBlending(fs),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const st=v!==Ea&&this.type===Ea,_t=v===Ea&&this.type!==Ea;for(let ot=0,k=P.length;ot<k;ot++){const it=P[ot],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;u.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(u.multiply(Mt),f.copy(Y.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/Mt.x),u.x=f.x*Mt.x,Y.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/Mt.y),u.y=f.y*Mt.y,Y.mapSize.y=f.y)),Y.map===null||st===!0||_t===!0){const It=this.type!==Ea?{minFilter:Ii,magFilter:Ii}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Js(u.x,u.y,It),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Et=Y.getViewportCount();for(let It=0;It<Et;It++){const ie=Y.getViewport(It);h.set(f.x*ie.x,f.y*ie.y,f.x*ie.z,f.y*ie.w),at.viewport(h),Y.updateMatrices(it,It),r=Y.getFrustum(),A(L,V,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===Ea&&N(Y,V),Y.needsUpdate=!1}v=this.type,x.needsUpdate=!1,o.setRenderTarget(U,w,F)};function N(P,L){const V=e.update(C);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Js(u.x,u.y)),y.uniforms.shadow_pass.value=P.map.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(L,null,V,y,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(L,null,V,M,C,null)}function D(P,L,V,U){let w=null;const F=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)w=F;else if(w=V.isPointLight===!0?g:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const at=w.uuid,st=L.uuid;let _t=p[at];_t===void 0&&(_t={},p[at]=_t);let ot=_t[st];ot===void 0&&(ot=w.clone(),_t[st]=ot,L.addEventListener("dispose",I)),w=ot}if(w.visible=L.visible,w.wireframe=L.wireframe,U===Ea?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:m[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=o.properties.get(w);at.light=V}return w}function A(P,L,V,U,w){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Ea)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const st=e.update(P),_t=P.material;if(Array.isArray(_t)){const ot=st.groups;for(let k=0,it=ot.length;k<it;k++){const Y=ot[k],Mt=_t[Y.materialIndex];if(Mt&&Mt.visible){const Et=D(P,Mt,U,w);P.onBeforeShadow(o,P,L,V,st,Et,Y),o.renderBufferDirect(V,null,st,Et,P,Y),P.onAfterShadow(o,P,L,V,st,Et,Y)}}}else if(_t.visible){const ot=D(P,_t,U,w);P.onBeforeShadow(o,P,L,V,st,ot,null),o.renderBufferDirect(V,null,st,ot,P,null),P.onAfterShadow(o,P,L,V,st,ot,null)}}const at=P.children;for(let st=0,_t=at.length;st<_t;st++)A(at[st],L,V,U,w)}function I(P){P.target.removeEventListener("dispose",I);for(const V in p){const U=p[V],w=P.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const ZR={[Zd]:Kd,[Qd]:tp,[Jd]:ep,[oo]:$d,[Kd]:Zd,[tp]:Qd,[ep]:Jd,[$d]:oo};function KR(o,e){function i(){let X=!1;const wt=new ln;let Ot=null;const Yt=new ln(0,0,0,0);return{setMask:function(bt){Ot!==bt&&!X&&(o.colorMask(bt,bt,bt,bt),Ot=bt)},setLocked:function(bt){X=bt},setClear:function(bt,yt,Jt,fe,ke){ke===!0&&(bt*=fe,yt*=fe,Jt*=fe),wt.set(bt,yt,Jt,fe),Yt.equals(wt)===!1&&(o.clearColor(bt,yt,Jt,fe),Yt.copy(wt))},reset:function(){X=!1,Ot=null,Yt.set(-1,0,0,0)}}}function r(){let X=!1,wt=!1,Ot=null,Yt=null,bt=null;return{setReversed:function(yt){if(wt!==yt){const Jt=e.get("EXT_clip_control");yt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),wt=yt;const fe=bt;bt=null,this.setClear(fe)}},getReversed:function(){return wt},setTest:function(yt){yt?lt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(yt){Ot!==yt&&!X&&(o.depthMask(yt),Ot=yt)},setFunc:function(yt){if(wt&&(yt=ZR[yt]),Yt!==yt){switch(yt){case Zd:o.depthFunc(o.NEVER);break;case Kd:o.depthFunc(o.ALWAYS);break;case Qd:o.depthFunc(o.LESS);break;case oo:o.depthFunc(o.LEQUAL);break;case Jd:o.depthFunc(o.EQUAL);break;case $d:o.depthFunc(o.GEQUAL);break;case tp:o.depthFunc(o.GREATER);break;case ep:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Yt=yt}},setLocked:function(yt){X=yt},setClear:function(yt){bt!==yt&&(wt&&(yt=1-yt),o.clearDepth(yt),bt=yt)},reset:function(){X=!1,Ot=null,Yt=null,bt=null,wt=!1}}}function u(){let X=!1,wt=null,Ot=null,Yt=null,bt=null,yt=null,Jt=null,fe=null,ke=null;return{setTest:function(Ae){X||(Ae?lt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ae){wt!==Ae&&!X&&(o.stencilMask(Ae),wt=Ae)},setFunc:function(Ae,tn,mn){(Ot!==Ae||Yt!==tn||bt!==mn)&&(o.stencilFunc(Ae,tn,mn),Ot=Ae,Yt=tn,bt=mn)},setOp:function(Ae,tn,mn){(yt!==Ae||Jt!==tn||fe!==mn)&&(o.stencilOp(Ae,tn,mn),yt=Ae,Jt=tn,fe=mn)},setLocked:function(Ae){X=Ae},setClear:function(Ae){ke!==Ae&&(o.clearStencil(Ae),ke=Ae)},reset:function(){X=!1,wt=null,Ot=null,Yt=null,bt=null,yt=null,Jt=null,fe=null,ke=null}}}const f=new i,h=new r,d=new u,g=new WeakMap,p=new WeakMap;let S={},m={},y=new WeakMap,M=[],b=null,C=!1,x=null,v=null,N=null,D=null,A=null,I=null,P=null,L=new Be(0,0,0),V=0,U=!1,w=null,F=null,at=null,st=null,_t=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,it=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=it>=2);let Mt=null,Et={};const It=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),pe=new ln().fromArray(It),H=new ln().fromArray(ie);function dt(X,wt,Ot,Yt){const bt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(X,yt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Ot;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Yt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(wt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return yt}const J={};J[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(o.DEPTH_TEST),h.setFunc(oo),Wt(!1),xt(g0),lt(o.CULL_FACE),we(fs);function lt(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function Tt(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function Nt(X,wt){return m[X]!==wt?(o.bindFramebuffer(X,wt),m[X]=wt,X===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=wt),X===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function At(X,wt){let Ot=M,Yt=!1;if(X){Ot=y.get(wt),Ot===void 0&&(Ot=[],y.set(wt,Ot));const bt=X.textures;if(Ot.length!==bt.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,Jt=bt.length;yt<Jt;yt++)Ot[yt]=o.COLOR_ATTACHMENT0+yt;Ot.length=bt.length,Yt=!0}}else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,Yt=!0);Yt&&o.drawBuffers(Ot)}function vt(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Vt={[Ys]:o.FUNC_ADD,[QM]:o.FUNC_SUBTRACT,[JM]:o.FUNC_REVERSE_SUBTRACT};Vt[$M]=o.MIN,Vt[tE]=o.MAX;const B={[eE]:o.ZERO,[nE]:o.ONE,[iE]:o.SRC_COLOR,[qd]:o.SRC_ALPHA,[uE]:o.SRC_ALPHA_SATURATE,[oE]:o.DST_COLOR,[sE]:o.DST_ALPHA,[aE]:o.ONE_MINUS_SRC_COLOR,[Wd]:o.ONE_MINUS_SRC_ALPHA,[lE]:o.ONE_MINUS_DST_COLOR,[rE]:o.ONE_MINUS_DST_ALPHA,[cE]:o.CONSTANT_COLOR,[fE]:o.ONE_MINUS_CONSTANT_COLOR,[hE]:o.CONSTANT_ALPHA,[dE]:o.ONE_MINUS_CONSTANT_ALPHA};function we(X,wt,Ot,Yt,bt,yt,Jt,fe,ke,Ae){if(X===fs){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(lt(o.BLEND),C=!0),X!==KM){if(X!==x||Ae!==U){if((v!==Ys||A!==Ys)&&(o.blendEquation(o.FUNC_ADD),v=Ys,A=Ys),Ae)switch(X){case so:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _0:o.blendFunc(o.ONE,o.ONE);break;case v0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case S0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case so:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case v0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,D=null,I=null,P=null,L.set(0,0,0),V=0,x=X,U=Ae}return}bt=bt||wt,yt=yt||Ot,Jt=Jt||Yt,(wt!==v||bt!==A)&&(o.blendEquationSeparate(Vt[wt],Vt[bt]),v=wt,A=bt),(Ot!==N||Yt!==D||yt!==I||Jt!==P)&&(o.blendFuncSeparate(B[Ot],B[Yt],B[yt],B[Jt]),N=Ot,D=Yt,I=yt,P=Jt),(fe.equals(L)===!1||ke!==V)&&(o.blendColor(fe.r,fe.g,fe.b,ke),L.copy(fe),V=ke),x=X,U=!1}function Qt(X,wt){X.side===Ta?Tt(o.CULL_FACE):lt(o.CULL_FACE);let Ot=X.side===ti;wt&&(Ot=!Ot),Wt(Ot),X.blending===so&&X.transparent===!1?we(fs):we(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),f.setMask(X.colorWrite);const Yt=X.stencilWrite;d.setTest(Yt),Yt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Dt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function xt(X){X!==qM?(lt(o.CULL_FACE),X!==F&&(X===g0?o.cullFace(o.BACK):X===WM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),F=X}function zt(X){X!==at&&(k&&o.lineWidth(X),at=X)}function Dt(X,wt,Ot){X?(lt(o.POLYGON_OFFSET_FILL),(st!==wt||_t!==Ot)&&(o.polygonOffset(wt,Ot),st=wt,_t=Ot)):Tt(o.POLYGON_OFFSET_FILL)}function W(X){X?lt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Xt(X){X===void 0&&(X=o.TEXTURE0+ot-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function oe(X,wt,Ot){Ot===void 0&&(Mt===null?Ot=o.TEXTURE0+ot-1:Ot=Mt);let Yt=Et[Ot];Yt===void 0&&(Yt={type:void 0,texture:void 0},Et[Ot]=Yt),(Yt.type!==X||Yt.texture!==wt)&&(Mt!==Ot&&(o.activeTexture(Ot),Mt=Ot),o.bindTexture(X,wt||J[X]),Yt.type=X,Yt.texture=wt)}function O(){const X=Et[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(X){pe.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),pe.copy(X))}function le(X){H.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),H.copy(X))}function te(X,wt){let Ot=p.get(wt);Ot===void 0&&(Ot=new WeakMap,p.set(wt,Ot));let Yt=Ot.get(X);Yt===void 0&&(Yt=o.getUniformBlockIndex(wt,X.name),Ot.set(X,Yt))}function Ft(X,wt){const Yt=p.get(wt).get(X);g.get(wt)!==Yt&&(o.uniformBlockBinding(wt,Yt,X.__bindingPointIndex),g.set(wt,Yt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},Mt=null,Et={},m={},y=new WeakMap,M=[],b=null,C=!1,x=null,v=null,N=null,D=null,A=null,I=null,P=null,L=new Be(0,0,0),V=0,U=!1,w=null,F=null,at=null,st=null,_t=null,pe.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:lt,disable:Tt,bindFramebuffer:Nt,drawBuffers:At,useProgram:vt,setBlending:we,setMaterial:Qt,setFlipSided:Wt,setCullFace:xt,setLineWidth:zt,setPolygonOffset:Dt,setScissorTest:W,activeTexture:Xt,bindTexture:oe,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:ee,texImage3D:Ct,updateUBOMapping:te,uniformBlockBinding:Ft,texStorage2D:Ut,texStorage3D:$t,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:qt,scissor:Bt,viewport:le,reset:de}}function QR(o,e,i,r,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Se,S=new WeakMap;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,T){return M?new OffscreenCanvas(O,T):Cc("canvas")}function C(O,T,et){let pt=1;const St=oe(O);if((St.width>et||St.height>et)&&(pt=et/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ht=Math.floor(pt*St.width),qt=Math.floor(pt*St.height);m===void 0&&(m=b(ht,qt));const Ut=T?b(ht,qt):m;return Ut.width=ht,Ut.height=qt,Ut.getContext("2d").drawImage(O,0,0,ht,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ht+"x"+qt+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function x(O){return O.generateMipmaps}function v(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,T,et,pt,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ht=T;if(T===o.RED&&(et===o.FLOAT&&(ht=o.R32F),et===o.HALF_FLOAT&&(ht=o.R16F),et===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.R8UI),et===o.UNSIGNED_SHORT&&(ht=o.R16UI),et===o.UNSIGNED_INT&&(ht=o.R32UI),et===o.BYTE&&(ht=o.R8I),et===o.SHORT&&(ht=o.R16I),et===o.INT&&(ht=o.R32I)),T===o.RG&&(et===o.FLOAT&&(ht=o.RG32F),et===o.HALF_FLOAT&&(ht=o.RG16F),et===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.RG8UI),et===o.UNSIGNED_SHORT&&(ht=o.RG16UI),et===o.UNSIGNED_INT&&(ht=o.RG32UI),et===o.BYTE&&(ht=o.RG8I),et===o.SHORT&&(ht=o.RG16I),et===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),et===o.UNSIGNED_INT&&(ht=o.RGB32UI),et===o.BYTE&&(ht=o.RGB8I),et===o.SHORT&&(ht=o.RGB16I),et===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),et===o.UNSIGNED_INT&&(ht=o.RGBA32UI),et===o.BYTE&&(ht=o.RGBA8I),et===o.SHORT&&(ht=o.RGBA16I),et===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),T===o.RGBA){const qt=St?Ac:Oe.getTransfer(pt);et===o.FLOAT&&(ht=o.RGBA32F),et===o.HALF_FLOAT&&(ht=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ht=qt===Ye?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function A(O,T){let et;return O?T===null||T===Ks||T===gl?et=o.DEPTH24_STENCIL8:T===ba?et=o.DEPTH32F_STENCIL8:T===ml&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ks||T===gl?et=o.DEPTH_COMPONENT24:T===ba?et=o.DEPTH_COMPONENT32F:T===ml&&(et=o.DEPTH_COMPONENT16),et}function I(O,T){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ii&&O.minFilter!==Qi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function P(O){const T=O.target;T.removeEventListener("dispose",P),V(T),T.isVideoTexture&&S.delete(T)}function L(O){const T=O.target;T.removeEventListener("dispose",L),w(T)}function V(O){const T=r.get(O);if(T.__webglInit===void 0)return;const et=O.source,pt=y.get(et);if(pt){const St=pt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&U(O),Object.keys(pt).length===0&&y.delete(et)}r.remove(O)}function U(O){const T=r.get(O);o.deleteTexture(T.__webglTexture);const et=O.source,pt=y.get(et);delete pt[T.__cacheKey],h.memory.textures--}function w(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let St=0;St<T.__webglFramebuffer[pt].length;St++)o.deleteFramebuffer(T.__webglFramebuffer[pt][St]);else o.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[pt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=O.textures;for(let pt=0,St=et.length;pt<St;pt++){const ht=r.get(et[pt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),r.remove(et[pt])}r.remove(O)}let F=0;function at(){F=0}function st(){const O=F;return O>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+u.maxTextures),F+=1,O}function _t(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ot(O,T){const et=r.get(O);if(O.isVideoTexture&&W(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&et.__version!==O.version){const pt=O.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,O,T);return}}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function k(O,T){const et=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){J(et,O,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function it(O,T){const et=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){J(et,O,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Y(O,T){const et=r.get(O);if(O.version>0&&et.__version!==O.version){lt(et,O,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const Mt={[ap]:o.REPEAT,[Ws]:o.CLAMP_TO_EDGE,[sp]:o.MIRRORED_REPEAT},Et={[Ii]:o.NEAREST,[EE]:o.NEAREST_MIPMAP_NEAREST,[Wu]:o.NEAREST_MIPMAP_LINEAR,[Qi]:o.LINEAR,[dd]:o.LINEAR_MIPMAP_NEAREST,[Zs]:o.LINEAR_MIPMAP_LINEAR},It={[CE]:o.NEVER,[OE]:o.ALWAYS,[wE]:o.LESS,[zS]:o.LEQUAL,[DE]:o.EQUAL,[LE]:o.GEQUAL,[UE]:o.GREATER,[NE]:o.NOTEQUAL};function ie(O,T){if(T.type===ba&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qi||T.magFilter===dd||T.magFilter===Wu||T.magFilter===Zs||T.minFilter===Qi||T.minFilter===dd||T.minFilter===Wu||T.minFilter===Zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Et[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,It[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ii||T.minFilter!==Wu&&T.minFilter!==Zs||T.type===ba&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function pe(O,T){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",P));const pt=T.source;let St=y.get(pt);St===void 0&&(St={},y.set(pt,St));const ht=_t(T);if(ht!==O.__cacheKey){St[ht]===void 0&&(St[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),St[ht].usedTimes++;const qt=St[O.__cacheKey];qt!==void 0&&(St[O.__cacheKey].usedTimes--,qt.usedTimes===0&&U(T)),O.__cacheKey=ht,O.__webglTexture=St[ht].texture}return et}function H(O,T,et){return Math.floor(Math.floor(O/et)/T)}function dt(O,T,et,pt){const ht=O.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,et,pt,T.data);else{ht.sort((Ct,Bt)=>Ct.start-Bt.start);let qt=0;for(let Ct=1;Ct<ht.length;Ct++){const Bt=ht[qt],le=ht[Ct],te=Bt.start+Bt.count,Ft=H(le.start,T.width,4),de=H(Bt.start,T.width,4);le.start<=te+1&&Ft===de&&H(le.start+le.count-1,T.width,4)===Ft?Bt.count=Math.max(Bt.count,le.start+le.count-Bt.start):(++qt,ht[qt]=le)}ht.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),$t=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Ct=0,Bt=ht.length;Ct<Bt;Ct++){const le=ht[Ct],te=Math.floor(le.start/4),Ft=Math.ceil(le.count/4),de=te%T.width,X=Math.floor(te/T.width),wt=Ft,Ot=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,de),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,de,X,wt,Ot,et,pt,T.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,$t),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function J(O,T,et){let pt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=o.TEXTURE_3D);const St=pe(O,T),ht=T.source;i.bindTexture(pt,O.__webglTexture,o.TEXTURE0+et);const qt=r.get(ht);if(ht.version!==qt.__version||St===!0){i.activeTexture(o.TEXTURE0+et);const Ut=Oe.getPrimaries(Oe.workingColorSpace),$t=T.colorSpace===cs?null:Oe.getPrimaries(T.colorSpace),ee=T.colorSpace===cs||Ut===$t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Ct=C(T.image,!1,u.maxTextureSize);Ct=Xt(T,Ct);const Bt=f.convert(T.format,T.colorSpace),le=f.convert(T.type);let te=D(T.internalFormat,Bt,le,T.colorSpace,T.isVideoTexture);ie(pt,T);let Ft;const de=T.mipmaps,X=T.isVideoTexture!==!0,wt=qt.__version===void 0||St===!0,Ot=ht.dataReady,Yt=I(T,Ct);if(T.isDepthTexture)te=A(T.format===vl,T.type),wt&&(X?i.texStorage2D(o.TEXTURE_2D,1,te,Ct.width,Ct.height):i.texImage2D(o.TEXTURE_2D,0,te,Ct.width,Ct.height,0,Bt,le,null));else if(T.isDataTexture)if(de.length>0){X&&wt&&i.texStorage2D(o.TEXTURE_2D,Yt,te,de[0].width,de[0].height);for(let bt=0,yt=de.length;bt<yt;bt++)Ft=de[bt],X?Ot&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Bt,le,Ft.data):i.texImage2D(o.TEXTURE_2D,bt,te,Ft.width,Ft.height,0,Bt,le,Ft.data);T.generateMipmaps=!1}else X?(wt&&i.texStorage2D(o.TEXTURE_2D,Yt,te,Ct.width,Ct.height),Ot&&dt(T,Ct,Bt,le)):i.texImage2D(o.TEXTURE_2D,0,te,Ct.width,Ct.height,0,Bt,le,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,te,de[0].width,de[0].height,Ct.depth);for(let bt=0,yt=de.length;bt<yt;bt++)if(Ft=de[bt],T.format!==zi)if(Bt!==null)if(X){if(Ot)if(T.layerUpdates.size>0){const Jt=Q0(Ft.width,Ft.height,T.format,T.type);for(const fe of T.layerUpdates){const ke=Ft.data.subarray(fe*Jt/Ft.data.BYTES_PER_ELEMENT,(fe+1)*Jt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,fe,Ft.width,Ft.height,1,Bt,ke)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,Ct.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,te,Ft.width,Ft.height,Ct.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,Ct.depth,Bt,le,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,te,Ft.width,Ft.height,Ct.depth,0,Bt,le,Ft.data)}else{X&&wt&&i.texStorage2D(o.TEXTURE_2D,Yt,te,de[0].width,de[0].height);for(let bt=0,yt=de.length;bt<yt;bt++)Ft=de[bt],T.format!==zi?Bt!==null?X?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,te,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ot&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Bt,le,Ft.data):i.texImage2D(o.TEXTURE_2D,bt,te,Ft.width,Ft.height,0,Bt,le,Ft.data)}else if(T.isDataArrayTexture)if(X){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,te,Ct.width,Ct.height,Ct.depth),Ot)if(T.layerUpdates.size>0){const bt=Q0(Ct.width,Ct.height,T.format,T.type);for(const yt of T.layerUpdates){const Jt=Ct.data.subarray(yt*bt/Ct.data.BYTES_PER_ELEMENT,(yt+1)*bt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,Ct.width,Ct.height,1,Bt,le,Jt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Bt,le,Ct.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,te,Ct.width,Ct.height,Ct.depth,0,Bt,le,Ct.data);else if(T.isData3DTexture)X?(wt&&i.texStorage3D(o.TEXTURE_3D,Yt,te,Ct.width,Ct.height,Ct.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Bt,le,Ct.data)):i.texImage3D(o.TEXTURE_3D,0,te,Ct.width,Ct.height,Ct.depth,0,Bt,le,Ct.data);else if(T.isFramebufferTexture){if(wt)if(X)i.texStorage2D(o.TEXTURE_2D,Yt,te,Ct.width,Ct.height);else{let bt=Ct.width,yt=Ct.height;for(let Jt=0;Jt<Yt;Jt++)i.texImage2D(o.TEXTURE_2D,Jt,te,bt,yt,0,Bt,le,null),bt>>=1,yt>>=1}}else if(de.length>0){if(X&&wt){const bt=oe(de[0]);i.texStorage2D(o.TEXTURE_2D,Yt,te,bt.width,bt.height)}for(let bt=0,yt=de.length;bt<yt;bt++)Ft=de[bt],X?Ot&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt,le,Ft):i.texImage2D(o.TEXTURE_2D,bt,te,Bt,le,Ft);T.generateMipmaps=!1}else if(X){if(wt){const bt=oe(Ct);i.texStorage2D(o.TEXTURE_2D,Yt,te,bt.width,bt.height)}Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,le,Ct)}else i.texImage2D(o.TEXTURE_2D,0,te,Bt,le,Ct);x(T)&&v(pt),qt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function lt(O,T,et){if(T.image.length!==6)return;const pt=pe(O,T),St=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const ht=r.get(St);if(St.version!==ht.__version||pt===!0){i.activeTexture(o.TEXTURE0+et);const qt=Oe.getPrimaries(Oe.workingColorSpace),Ut=T.colorSpace===cs?null:Oe.getPrimaries(T.colorSpace),$t=T.colorSpace===cs||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let yt=0;yt<6;yt++)!ee&&!Ct?Bt[yt]=C(T.image[yt],!0,u.maxCubemapSize):Bt[yt]=Ct?T.image[yt].image:T.image[yt],Bt[yt]=Xt(T,Bt[yt]);const le=Bt[0],te=f.convert(T.format,T.colorSpace),Ft=f.convert(T.type),de=D(T.internalFormat,te,Ft,T.colorSpace),X=T.isVideoTexture!==!0,wt=ht.__version===void 0||pt===!0,Ot=St.dataReady;let Yt=I(T,le);ie(o.TEXTURE_CUBE_MAP,T);let bt;if(ee){X&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Yt,de,le.width,le.height);for(let yt=0;yt<6;yt++){bt=Bt[yt].mipmaps;for(let Jt=0;Jt<bt.length;Jt++){const fe=bt[Jt];T.format!==zi?te!==null?X?Ot&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,0,0,fe.width,fe.height,te,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,0,0,fe.width,fe.height,te,Ft,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,de,fe.width,fe.height,0,te,Ft,fe.data)}}}else{if(bt=T.mipmaps,X&&wt){bt.length>0&&Yt++;const yt=oe(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Yt,de,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Ct){X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Bt[yt].width,Bt[yt].height,te,Ft,Bt[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,Bt[yt].width,Bt[yt].height,0,te,Ft,Bt[yt].data);for(let Jt=0;Jt<bt.length;Jt++){const ke=bt[Jt].image[yt].image;X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,0,0,ke.width,ke.height,te,Ft,ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,de,ke.width,ke.height,0,te,Ft,ke.data)}}else{X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,te,Ft,Bt[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,te,Ft,Bt[yt]);for(let Jt=0;Jt<bt.length;Jt++){const fe=bt[Jt];X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,0,0,te,Ft,fe.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,de,te,Ft,fe.image[yt])}}}x(T)&&v(o.TEXTURE_CUBE_MAP),ht.__version=St.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Tt(O,T,et,pt,St,ht){const qt=f.convert(et.format,et.colorSpace),Ut=f.convert(et.type),$t=D(et.internalFormat,qt,Ut,et.colorSpace),ee=r.get(T),Ct=r.get(et);if(Ct.__renderTarget=T,!ee.__hasExternalTextures){const Bt=Math.max(1,T.width>>ht),le=Math.max(1,T.height>>ht);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ht,$t,Bt,le,T.depth,0,qt,Ut,null):i.texImage2D(St,ht,$t,Bt,le,0,qt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Dt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,St,Ct.__webglTexture,0,zt(T)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,St,Ct.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(O,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const pt=T.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ht=A(T.stencilBuffer,St),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=zt(T);Dt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ht,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,O)}else{const pt=T.textures;for(let St=0;St<pt.length;St++){const ht=pt[St],qt=f.convert(ht.format,ht.colorSpace),Ut=f.convert(ht.type),$t=D(ht.internalFormat,qt,Ut,ht.colorSpace),ee=zt(T);et&&Dt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,$t,T.width,T.height):Dt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,$t,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,$t,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ot(T.depthTexture,0);const St=pt.__webglTexture,ht=zt(T);if(T.depthTexture.format===_l)Dt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(T.depthTexture.format===vl)Dt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function vt(O){const T=r.get(O),et=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=pt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const pt=O.texture.mipmaps;pt&&pt.length>0?At(T.__webglFramebuffer[0],O):At(T.__webglFramebuffer,O)}else if(et){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=o.createRenderbuffer(),Nt(T.__webglDepthbuffer[pt],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ht)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Nt(T.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(O,T,et){const pt=r.get(O);T!==void 0&&Tt(pt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&vt(O)}function B(O){const T=O.texture,et=r.get(O),pt=r.get(T);O.addEventListener("dispose",L);const St=O.textures,ht=O.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=T.version,h.memory.textures++),ht){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let $t=0;$t<T.mipmaps.length;$t++)et.__webglFramebuffer[Ut][$t]=o.createFramebuffer()}else et.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,$t=St.length;Ut<$t;Ut++){const ee=r.get(St[Ut]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Dt(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<St.length;Ut++){const $t=St[Ut];et.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const ee=f.convert($t.format,$t.colorSpace),Ct=f.convert($t.type),Bt=D($t.internalFormat,ee,Ct,$t.colorSpace,O.isXRRenderTarget===!0),le=zt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,le,Bt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ie(o.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let $t=0;$t<T.mipmaps.length;$t++)Tt(et.__webglFramebuffer[Ut][$t],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,$t);else Tt(et.__webglFramebuffer[Ut],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);x(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,$t=St.length;Ut<$t;Ut++){const ee=St[Ut],Ct=r.get(ee);let Bt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Bt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,Ct.__webglTexture),ie(Bt,ee),Tt(et.__webglFramebuffer,O,ee,o.COLOR_ATTACHMENT0+Ut,Bt,0),x(ee)&&v(Bt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,pt.__webglTexture),ie(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let $t=0;$t<T.mipmaps.length;$t++)Tt(et.__webglFramebuffer[$t],O,T,o.COLOR_ATTACHMENT0,Ut,$t);else Tt(et.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,Ut,0);x(T)&&v(Ut),i.unbindTexture()}O.depthBuffer&&vt(O)}function we(O){const T=O.textures;for(let et=0,pt=T.length;et<pt;et++){const St=T[et];if(x(St)){const ht=N(O),qt=r.get(St).__webglTexture;i.bindTexture(ht,qt),v(ht),i.unbindTexture()}}}const Qt=[],Wt=[];function xt(O){if(O.samples>0){if(Dt(O)===!1){const T=O.textures,et=O.width,pt=O.height;let St=o.COLOR_BUFFER_BIT;const ht=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(O),Ut=T.length>1;if(Ut)for(let ee=0;ee<T.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const $t=O.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ee=0;ee<T.length;ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ee]);const Ct=r.get(T[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,et,pt,0,0,et,pt,St,o.NEAREST),g===!0&&(Qt.length=0,Wt.length=0,Qt.push(o.COLOR_ATTACHMENT0+ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Qt.push(ht),Wt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Wt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let ee=0;ee<T.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ee]);const Ct=r.get(T[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Ct,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&g){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function zt(O){return Math.min(u.maxSamples,O.samples)}function Dt(O){const T=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function W(O){const T=h.render.frame;S.get(O)!==T&&(S.set(O,T),O.update())}function Xt(O,T){const et=O.colorSpace,pt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==co&&et!==cs&&(Oe.getTransfer(et)===Ye?(pt!==zi||St!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function oe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=at,this.setTexture2D=ot,this.setTexture2DArray=k,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=Vt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Dt}function JR(o,e){function i(r,u=cs){let f;const h=Oe.getTransfer(u);if(r===Ra)return o.UNSIGNED_BYTE;if(r===Xp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===DS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===US)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===CS)return o.BYTE;if(r===wS)return o.SHORT;if(r===ml)return o.UNSIGNED_SHORT;if(r===Vp)return o.INT;if(r===Ks)return o.UNSIGNED_INT;if(r===ba)return o.FLOAT;if(r===xl)return o.HALF_FLOAT;if(r===NS)return o.ALPHA;if(r===LS)return o.RGB;if(r===zi)return o.RGBA;if(r===_l)return o.DEPTH_COMPONENT;if(r===vl)return o.DEPTH_STENCIL;if(r===OS)return o.RED;if(r===jp)return o.RED_INTEGER;if(r===PS)return o.RG;if(r===Yp)return o.RG_INTEGER;if(r===qp)return o.RGBA_INTEGER;if(r===xc||r===yc||r===Mc||r===Ec)if(h===Ye)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===xc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===xc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rp||r===op||r===lp||r===up)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===rp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===op)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cp||r===fp||r===hp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===cp||r===fp)return h===Ye?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===hp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dp||r===pp||r===mp||r===gp||r===_p||r===vp||r===Sp||r===xp||r===yp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===dp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rp||r===Cp||r===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Rp)return h===Ye?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dp||r===Up||r===Np||r===Lp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Dp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Up)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Np)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const $R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
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

}`;class eC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new WS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ps({vertexShader:$R,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $i(new Nc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nC extends $s{constructor(e,i){super();const r=this;let u=null,f=1,h=null,d="local-floor",g=1,p=null,S=null,m=null,y=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",x=new eC,v={},N=i.getContextAttributes();let D=null,A=null;const I=[],P=[],L=new Se;let V=null;const U=new bi;U.viewport=new ln;const w=new bi;w.viewport=new ln;const F=[U,w],at=new yT;let st=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let lt=I[J];return lt===void 0&&(lt=new Pd,I[J]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(J){let lt=I[J];return lt===void 0&&(lt=new Pd,I[J]=lt),lt.getGripSpace()},this.getHand=function(J){let lt=I[J];return lt===void 0&&(lt=new Pd,I[J]=lt),lt.getHandSpace()};function ot(J){const lt=P.indexOf(J.inputSource);if(lt===-1)return;const Tt=I[lt];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,p||h),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){u.removeEventListener("select",ot),u.removeEventListener("selectstart",ot),u.removeEventListener("selectend",ot),u.removeEventListener("squeeze",ot),u.removeEventListener("squeezestart",ot),u.removeEventListener("squeezeend",ot),u.removeEventListener("end",k),u.removeEventListener("inputsourceschange",it);for(let J=0;J<I.length;J++){const lt=P[J];lt!==null&&(P[J]=null,I[J].disconnect(lt))}st=null,_t=null,x.reset();for(const J in v)delete v[J];e.setRenderTarget(D),M=null,y=null,m=null,u=null,A=null,dt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return m===null&&C&&(m=new XRWebGLBinding(u,i)),m},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(J){if(u=J,u!==null){if(D=e.getRenderTarget(),u.addEventListener("select",ot),u.addEventListener("selectstart",ot),u.addEventListener("selectend",ot),u.addEventListener("squeeze",ot),u.addEventListener("squeezestart",ot),u.addEventListener("squeezeend",ot),u.addEventListener("end",k),u.addEventListener("inputsourceschange",it),N.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(L),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Nt=null,At=null;N.depth&&(At=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=N.stencil?vl:_l,Nt=N.stencil?gl:Ks);const vt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:f};m=this.getBinding(),y=m.createProjectionLayer(vt),u.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),A=new Js(y.textureWidth,y.textureHeight,{format:zi,type:Ra,depthTexture:new qS(y.textureWidth,y.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Tt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,i,Tt),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new Js(M.framebufferWidth,M.framebufferHeight,{format:zi,type:Ra,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await u.requestReferenceSpace(d),dt.setContext(u),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function it(J){for(let lt=0;lt<J.removed.length;lt++){const Tt=J.removed[lt],Nt=P.indexOf(Tt);Nt>=0&&(P[Nt]=null,I[Nt].disconnect(Tt))}for(let lt=0;lt<J.added.length;lt++){const Tt=J.added[lt];let Nt=P.indexOf(Tt);if(Nt===-1){for(let vt=0;vt<I.length;vt++)if(vt>=P.length){P.push(Tt),Nt=vt;break}else if(P[vt]===null){P[vt]=Tt,Nt=vt;break}if(Nt===-1)break}const At=I[Nt];At&&At.connect(Tt)}}const Y=new nt,Mt=new nt;function Et(J,lt,Tt){Y.setFromMatrixPosition(lt.matrixWorld),Mt.setFromMatrixPosition(Tt.matrixWorld);const Nt=Y.distanceTo(Mt),At=lt.projectionMatrix.elements,vt=Tt.projectionMatrix.elements,Vt=At[14]/(At[10]-1),B=At[14]/(At[10]+1),we=(At[9]+1)/At[5],Qt=(At[9]-1)/At[5],Wt=(At[8]-1)/At[0],xt=(vt[8]+1)/vt[0],zt=Vt*Wt,Dt=Vt*xt,W=Nt/(-Wt+xt),Xt=W*-Wt;if(lt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xt),J.translateZ(W),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),At[10]===-1)J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const oe=Vt+W,O=B+W,T=zt-Xt,et=Dt+(Nt-Xt),pt=we*B/O*oe,St=Qt*B/O*oe;J.projectionMatrix.makePerspective(T,et,pt,St,oe,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function It(J,lt){lt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(lt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(u===null)return;let lt=J.near,Tt=J.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),at.near=w.near=U.near=lt,at.far=w.far=U.far=Tt,(st!==at.near||_t!==at.far)&&(u.updateRenderState({depthNear:at.near,depthFar:at.far}),st=at.near,_t=at.far),at.layers.mask=J.layers.mask|6,U.layers.mask=at.layers.mask&3,w.layers.mask=at.layers.mask&5;const Nt=J.parent,At=at.cameras;It(at,Nt);for(let vt=0;vt<At.length;vt++)It(At[vt],Nt);At.length===2?Et(at,U,w):at.projectionMatrix.copy(U.projectionMatrix),ie(J,at,Nt)};function ie(J,lt,Tt){Tt===null?J.matrix.copy(lt.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(lt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Op*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(y===null&&M===null))return g},this.setFoveation=function(J){g=J,y!==null&&(y.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(at)},this.getCameraTexture=function(J){return v[J]};let pe=null;function H(J,lt){if(S=lt.getViewerPose(p||h),b=lt,S!==null){const Tt=S.views;M!==null&&(e.setRenderTargetFramebuffer(A,M.framebuffer),e.setRenderTarget(A));let Nt=!1;Tt.length!==at.cameras.length&&(at.cameras.length=0,Nt=!0);for(let B=0;B<Tt.length;B++){const we=Tt[B];let Qt=null;if(M!==null)Qt=M.getViewport(we);else{const xt=m.getViewSubImage(y,we);Qt=xt.viewport,B===0&&(e.setRenderTargetTextures(A,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(A))}let Wt=F[B];Wt===void 0&&(Wt=new bi,Wt.layers.enable(B),Wt.viewport=new ln,F[B]=Wt),Wt.matrix.fromArray(we.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(we.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),B===0&&(at.matrix.copy(Wt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Nt===!0&&at.cameras.push(Wt)}const At=u.enabledFeatures;if(At&&At.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&C){m=r.getBinding();const B=m.getDepthInformation(Tt[0]);B&&B.isValid&&B.texture&&x.init(B,u.renderState)}if(At&&At.includes("camera-access")&&C){e.state.unbindTexture(),m=r.getBinding();for(let B=0;B<Tt.length;B++){const we=Tt[B].camera;if(we){let Qt=v[we];Qt||(Qt=new WS,v[we]=Qt);const Wt=m.getCameraImage(we);Qt.sourceTexture=Wt}}}}for(let Tt=0;Tt<I.length;Tt++){const Nt=P[Tt],At=I[Tt];Nt!==null&&At!==void 0&&At.update(Nt,lt,p||h)}pe&&pe(J,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),b=null}const dt=new ZS;dt.setAnimationLoop(H),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}}const ks=new Ca,iC=new rn;function aC(o,e){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,VS(o)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function u(x,v,N,D,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?f(x,v):v.isMeshToonMaterial?(f(x,v),m(x,v)):v.isMeshPhongMaterial?(f(x,v),S(x,v)):v.isMeshStandardMaterial?(f(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,A)):v.isMeshMatcapMaterial?(f(x,v),b(x,v)):v.isMeshDepthMaterial?f(x,v):v.isMeshDistanceMaterial?(f(x,v),C(x,v)):v.isMeshNormalMaterial?f(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?g(x,v,N,D):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function f(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===ti&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===ti&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const N=e.get(v),D=N.envMap,A=N.envMapRotation;D&&(x.envMap.value=D,ks.copy(A),ks.x*=-1,ks.y*=-1,ks.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),x.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(ks)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function g(x,v,N,D){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*N,x.scale.value=D*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function S(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function m(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,N){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ti&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function C(x,v){const N=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:u}}function sC(o,e,i,r){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,D){const A=D.program;r.uniformBlockBinding(N,A)}function p(N,D){let A=u[N.id];A===void 0&&(b(N),A=S(N),u[N.id]=A,N.addEventListener("dispose",x));const I=D.program;r.updateUBOMapping(N,I);const P=e.render.frame;f[N.id]!==P&&(y(N),f[N.id]=P)}function S(N){const D=m();N.__bindingPointIndex=D;const A=o.createBuffer(),I=N.__size,P=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,I,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,A),A}function m(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const D=u[N.id],A=N.uniforms,I=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let P=0,L=A.length;P<L;P++){const V=Array.isArray(A[P])?A[P]:[A[P]];for(let U=0,w=V.length;U<w;U++){const F=V[U];if(M(F,P,U,I)===!0){const at=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let _t=0;for(let ot=0;ot<st.length;ot++){const k=st[ot],it=C(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,at+_t,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,_t),_t+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,D,A,I){const P=N.value,L=D+"_"+A;if(I[L]===void 0)return typeof P=="number"||typeof P=="boolean"?I[L]=P:I[L]=P.clone(),!0;{const V=I[L];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return I[L]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function b(N){const D=N.uniforms;let A=0;const I=16;for(let L=0,V=D.length;L<V;L++){const U=Array.isArray(D[L])?D[L]:[D[L]];for(let w=0,F=U.length;w<F;w++){const at=U[w],st=Array.isArray(at.value)?at.value:[at.value];for(let _t=0,ot=st.length;_t<ot;_t++){const k=st[_t],it=C(k),Y=A%I,Mt=Y%it.boundary,Et=Y+Mt;A+=Mt,Et!==0&&I-Et<it.storage&&(A+=I-Et),at.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=A,A+=it.storage}}}const P=A%I;return P>0&&(A+=I-P),N.__size=A,N.__cache={},this}function C(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function x(N){const D=N.target;D.removeEventListener("dispose",x);const A=h.indexOf(D.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(u[D.id]),delete u[D.id],delete f[D.id]}function v(){for(const N in u)o.deleteBuffer(u[N]);h=[],u={},f={}}return{bind:g,update:p,dispose:v}}class rC{constructor(e={}){const{canvas:i=IE(),context:r=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let x=null,v=null;const N=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let I=!1;this._outputColorSpace=$n;let P=0,L=0,V=null,U=-1,w=null;const F=new ln,at=new ln;let st=null;const _t=new Be(0);let ot=0,k=i.width,it=i.height,Y=1,Mt=null,Et=null;const It=new ln(0,0,k,it),ie=new ln(0,0,k,it);let pe=!1;const H=new jS;let dt=!1,J=!1;const lt=new rn,Tt=new nt,Nt=new ln,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Vt(){return V===null?Y:1}let B=r;function we(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gp}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),B===null){const K="webgl2";if(B=we(K,R),B===null)throw we(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Qt,Wt,xt,zt,Dt,W,Xt,oe,O,T,et,pt,St,ht,qt,Ut,$t,ee,Ct,Bt,le,te,Ft,de;function X(){Qt=new g1(B),Qt.init(),te=new JR(B,Qt),Wt=new u1(B,Qt,e,te),xt=new KR(B,Qt),Wt.reversedDepthBuffer&&y&&xt.buffers.depth.setReversed(!0),zt=new S1(B),Dt=new IR,W=new QR(B,Qt,xt,Dt,Wt,te,zt),Xt=new f1(A),oe=new m1(A),O=new bT(B),Ft=new o1(B,O),T=new _1(B,O,zt,Ft),et=new y1(B,T,O,zt),Ct=new x1(B,Wt,W),Ut=new c1(Dt),pt=new zR(A,Xt,oe,Qt,Wt,Ft,Ut),St=new aC(A,Dt),ht=new FR,qt=new jR(Qt),ee=new r1(A,Xt,oe,xt,et,M,g),$t=new WR(A,et,Wt),de=new sC(B,zt,Wt,xt),Bt=new l1(B,Qt,zt),le=new v1(B,Qt,zt),zt.programs=pt.programs,A.capabilities=Wt,A.extensions=Qt,A.properties=Dt,A.renderLists=ht,A.shadowMap=$t,A.state=xt,A.info=zt}X();const wt=new nC(A,B);this.xr=wt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(k,it,!1))},this.getSize=function(R){return R.set(k,it)},this.setSize=function(R,K,ct=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,it=K,i.width=Math.floor(R*Y),i.height=Math.floor(K*Y),ct===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(k*Y,it*Y).floor()},this.setDrawingBufferSize=function(R,K,ct){k=R,it=K,Y=ct,i.width=Math.floor(R*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(It)},this.setViewport=function(R,K,ct,ft){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,K,ct,ft),xt.viewport(F.copy(It).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,K,ct,ft){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,K,ct,ft),xt.scissor(at.copy(ie).multiplyScalar(Y).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){xt.setScissorTest(pe=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ct=!0){let ft=0;if(R){let Q=!1;if(V!==null){const Rt=V.texture.format;Q=Rt===qp||Rt===Yp||Rt===jp}if(Q){const Rt=V.texture.type,Ht=Rt===Ra||Rt===Ks||Rt===ml||Rt===gl||Rt===Xp||Rt===kp,kt=ee.getClearColor(),Lt=ee.getClearAlpha(),Zt=kt.r,re=kt.g,ae=kt.b;Ht?(b[0]=Zt,b[1]=re,b[2]=ae,b[3]=Lt,B.clearBufferuiv(B.COLOR,0,b)):(C[0]=Zt,C[1]=re,C[2]=ae,C[3]=Lt,B.clearBufferiv(B.COLOR,0,C))}else ft|=B.COLOR_BUFFER_BIT}K&&(ft|=B.DEPTH_BUFFER_BIT),ct&&(ft|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),ee.dispose(),ht.dispose(),qt.dispose(),Dt.dispose(),Xt.dispose(),oe.dispose(),et.dispose(),Ft.dispose(),de.dispose(),pt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",mn),wt.removeEventListener("sessionend",Ln),ea.stop()};function Ot(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=zt.autoReset,K=$t.enabled,ct=$t.autoUpdate,ft=$t.needsUpdate,Q=$t.type;X(),zt.autoReset=R,$t.enabled=K,$t.autoUpdate=ct,$t.needsUpdate=ft,$t.type=Q}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function yt(R){const K=R.target;K.removeEventListener("dispose",yt),Jt(K)}function Jt(R){fe(R),Dt.remove(R)}function fe(R){const K=Dt.get(R).programs;K!==void 0&&(K.forEach(function(ct){pt.releaseProgram(ct)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ct,ft,Q,Rt){K===null&&(K=At);const Ht=Q.isMesh&&Q.matrixWorld.determinant()<0,kt=Al(R,K,ct,ft,Q);xt.setMaterial(ft,Ht);let Lt=ct.index,Zt=1;if(ft.wireframe===!0){if(Lt=T.getWireframeAttribute(ct),Lt===void 0)return;Zt=2}const re=ct.drawRange,ae=ct.attributes.position;let Me=re.start*Zt,Fe=(re.start+re.count)*Zt;Rt!==null&&(Me=Math.max(Me,Rt.start*Zt),Fe=Math.min(Fe,(Rt.start+Rt.count)*Zt)),Lt!==null?(Me=Math.max(Me,0),Fe=Math.min(Fe,Lt.count)):ae!=null&&(Me=Math.max(Me,0),Fe=Math.min(Fe,ae.count));const Je=Fe-Me;if(Je<0||Je===1/0)return;Ft.setup(Q,ft,kt,ct,Lt);let Pe,Ue=Bt;if(Lt!==null&&(Pe=O.get(Lt),Ue=le,Ue.setIndex(Pe)),Q.isMesh)ft.wireframe===!0?(xt.setLineWidth(ft.wireframeLinewidth*Vt()),Ue.setMode(B.LINES)):Ue.setMode(B.TRIANGLES);else if(Q.isLine){let se=ft.linewidth;se===void 0&&(se=1),xt.setLineWidth(se*Vt()),Q.isLineSegments?Ue.setMode(B.LINES):Q.isLineLoop?Ue.setMode(B.LINE_LOOP):Ue.setMode(B.LINE_STRIP)}else Q.isPoints?Ue.setMode(B.POINTS):Q.isSprite&&Ue.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Sl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))Ue.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const se=Q._multiDrawStarts,ze=Q._multiDrawCounts,xe=Q._multiDrawCount,gn=Lt?O.get(Lt).bytesPerElement:1,ni=Dt.get(ft).currentProgram.getUniforms();for(let Ne=0;Ne<xe;Ne++)ni.setValue(B,"_gl_DrawID",Ne),Ue.render(se[Ne]/gn,ze[Ne])}else if(Q.isInstancedMesh)Ue.renderInstances(Me,Je,Q.count);else if(ct.isInstancedBufferGeometry){const se=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,ze=Math.min(ct.instanceCount,se);Ue.renderInstances(Me,Je,ze)}else Ue.render(Me,Je)};function ke(R,K,ct){R.transparent===!0&&R.side===Ta&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,pi(R,K,ct),R.side=ds,R.needsUpdate=!0,pi(R,K,ct),R.side=Ta):pi(R,K,ct)}this.compile=function(R,K,ct=null){ct===null&&(ct=R),v=qt.get(ct),v.init(K),D.push(v),ct.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),R!==ct&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const ft=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let Ht=0;Ht<Rt.length;Ht++){const kt=Rt[Ht];ke(kt,ct,Q),ft.add(kt)}else ke(Rt,ct,Q),ft.add(Rt)}),v=D.pop(),ft},this.compileAsync=function(R,K,ct=null){const ft=this.compile(R,K,ct);return new Promise(Q=>{function Rt(){if(ft.forEach(function(Ht){Dt.get(Ht).currentProgram.isReady()&&ft.delete(Ht)}),ft.size===0){Q(R);return}setTimeout(Rt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ae=null;function tn(R){Ae&&Ae(R)}function mn(){ea.stop()}function Ln(){ea.start()}const ea=new ZS;ea.setAnimationLoop(tn),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(R){Ae=R,wt.setAnimationLoop(R),R===null?ea.stop():ea.start()},wt.addEventListener("sessionstart",mn),wt.addEventListener("sessionend",Ln),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(K),K=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,K,V),v=qt.get(R,D.length),v.init(K),D.push(v),lt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H.setFromProjectionMatrix(lt,Ji,K.reversedDepth),J=this.localClippingEnabled,dt=Ut.init(this.clippingPlanes,J),x=ht.get(R,N.length),x.init(),N.push(x),wt.enabled===!0&&wt.isPresenting===!0){const Rt=A.xr.getDepthSensingMesh();Rt!==null&&go(Rt,K,-1/0,A.sortObjects)}go(R,K,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(Mt,Et),vt=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,vt&&ee.addToRenderList(x,R),this.info.render.frame++,dt===!0&&Ut.beginShadows();const ct=v.state.shadowsArray;$t.render(ct,R,K),dt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=x.opaque,Q=x.transmissive;if(v.setupLights(),K.isArrayCamera){const Rt=K.cameras;if(Q.length>0)for(let Ht=0,kt=Rt.length;Ht<kt;Ht++){const Lt=Rt[Ht];ms(ft,Q,R,Lt)}vt&&ee.render(R);for(let Ht=0,kt=Rt.length;Ht<kt;Ht++){const Lt=Rt[Ht];bl(x,R,Lt,Lt.viewport)}}else Q.length>0&&ms(ft,Q,R,K),vt&&ee.render(R),bl(x,R,K);V!==null&&L===0&&(W.updateMultisampleRenderTarget(V),W.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(A,R,K),Ft.resetDefaultState(),U=-1,w=null,D.pop(),D.length>0?(v=D[D.length-1],dt===!0&&Ut.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function go(R,K,ct,ft){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){ft&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(lt);const Ht=et.update(R),kt=R.material;kt.visible&&x.push(R,Ht,kt,ct,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const Ht=et.update(R),kt=R.material;if(ft&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Nt.copy(Ht.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(lt)),Array.isArray(kt)){const Lt=Ht.groups;for(let Zt=0,re=Lt.length;Zt<re;Zt++){const ae=Lt[Zt],Me=kt[ae.materialIndex];Me&&Me.visible&&x.push(R,Ht,Me,ct,Nt.z,ae)}}else kt.visible&&x.push(R,Ht,kt,ct,Nt.z,null)}}const Rt=R.children;for(let Ht=0,kt=Rt.length;Ht<kt;Ht++)go(Rt[Ht],K,ct,ft)}function bl(R,K,ct,ft){const Q=R.opaque,Rt=R.transmissive,Ht=R.transparent;v.setupLightsView(ct),dt===!0&&Ut.setGlobalState(A.clippingPlanes,ct),ft&&xt.viewport(F.copy(ft)),Q.length>0&&na(Q,K,ct),Rt.length>0&&na(Rt,K,ct),Ht.length>0&&na(Ht,K,ct),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ms(R,K,ct,ft){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ft.id]===void 0&&(v.state.transmissionRenderTarget[ft.id]=new Js(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?xl:Ra,minFilter:Zs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Rt=v.state.transmissionRenderTarget[ft.id],Ht=ft.viewport||F;Rt.setSize(Ht.z*A.transmissionResolutionScale,Ht.w*A.transmissionResolutionScale);const kt=A.getRenderTarget(),Lt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(_t),ot=A.getClearAlpha(),ot<1&&A.setClearColor(16777215,.5),A.clear(),vt&&ee.render(ct);const re=A.toneMapping;A.toneMapping=hs;const ae=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),v.setupLightsView(ft),dt===!0&&Ut.setGlobalState(A.clippingPlanes,ft),na(R,ct,ft),W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Fe=0,Je=K.length;Fe<Je;Fe++){const Pe=K[Fe],Ue=Pe.object,se=Pe.geometry,ze=Pe.material,xe=Pe.group;if(ze.side===Ta&&Ue.layers.test(ft.layers)){const gn=ze.side;ze.side=ti,ze.needsUpdate=!0,gs(Ue,ct,ft,se,ze,xe),ze.side=gn,ze.needsUpdate=!0,Me=!0}}Me===!0&&(W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt))}A.setRenderTarget(kt,Lt,Zt),A.setClearColor(_t,ot),ae!==void 0&&(ft.viewport=ae),A.toneMapping=re}function na(R,K,ct){const ft=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Rt=R.length;Q<Rt;Q++){const Ht=R[Q],kt=Ht.object,Lt=Ht.geometry,Zt=Ht.group;let re=Ht.material;re.allowOverride===!0&&ft!==null&&(re=ft),kt.layers.test(ct.layers)&&gs(kt,K,ct,Lt,re,Zt)}}function gs(R,K,ct,ft,Q,Rt){R.onBeforeRender(A,K,ct,ft,Q,Rt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(A,K,ct,ft,R,Rt),Q.transparent===!0&&Q.side===Ta&&Q.forceSinglePass===!1?(Q.side=ti,Q.needsUpdate=!0,A.renderBufferDirect(ct,K,ft,Q,R,Rt),Q.side=ds,Q.needsUpdate=!0,A.renderBufferDirect(ct,K,ft,Q,R,Rt),Q.side=Ta):A.renderBufferDirect(ct,K,ft,Q,R,Rt),R.onAfterRender(A,K,ct,ft,Q,Rt)}function pi(R,K,ct){K.isScene!==!0&&(K=At);const ft=Dt.get(R),Q=v.state.lights,Rt=v.state.shadowsArray,Ht=Q.state.version,kt=pt.getParameters(R,Q.state,Rt,K,ct),Lt=pt.getProgramCacheKey(kt);let Zt=ft.programs;ft.environment=R.isMeshStandardMaterial?K.environment:null,ft.fog=K.fog,ft.envMap=(R.isMeshStandardMaterial?oe:Xt).get(R.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",yt),Zt=new Map,ft.programs=Zt);let re=Zt.get(Lt);if(re!==void 0){if(ft.currentProgram===re&&ft.lightsStateVersion===Ht)return wa(R,kt),re}else kt.uniforms=pt.getUniforms(R),R.onBeforeCompile(kt,A),re=pt.acquireProgram(kt,Lt),Zt.set(Lt,re),ft.uniforms=kt.uniforms;const ae=ft.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ae.clippingPlanes=Ut.uniform),wa(R,kt),ft.needsLights=Rl(R),ft.lightsStateVersion=Ht,ft.needsLights&&(ae.ambientLightColor.value=Q.state.ambient,ae.lightProbe.value=Q.state.probe,ae.directionalLights.value=Q.state.directional,ae.directionalLightShadows.value=Q.state.directionalShadow,ae.spotLights.value=Q.state.spot,ae.spotLightShadows.value=Q.state.spotShadow,ae.rectAreaLights.value=Q.state.rectArea,ae.ltc_1.value=Q.state.rectAreaLTC1,ae.ltc_2.value=Q.state.rectAreaLTC2,ae.pointLights.value=Q.state.point,ae.pointLightShadows.value=Q.state.pointShadow,ae.hemisphereLights.value=Q.state.hemi,ae.directionalShadowMap.value=Q.state.directionalShadowMap,ae.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ae.spotShadowMap.value=Q.state.spotShadowMap,ae.spotLightMatrix.value=Q.state.spotLightMatrix,ae.spotLightMap.value=Q.state.spotLightMap,ae.pointShadowMap.value=Q.state.pointShadowMap,ae.pointShadowMatrix.value=Q.state.pointShadowMatrix),ft.currentProgram=re,ft.uniformsList=null,re}function _s(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=bc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function wa(R,K){const ct=Dt.get(R);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function Al(R,K,ct,ft,Q){K.isScene!==!0&&(K=At),W.resetTextureUnits();const Rt=K.fog,Ht=ft.isMeshStandardMaterial?K.environment:null,kt=V===null?A.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:co,Lt=(ft.isMeshStandardMaterial?oe:Xt).get(ft.envMap||Ht),Zt=ft.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,re=!!ct.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),ae=!!ct.morphAttributes.position,Me=!!ct.morphAttributes.normal,Fe=!!ct.morphAttributes.color;let Je=hs;ft.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Je=A.toneMapping);const Pe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0,se=Dt.get(ft),ze=v.state.lights;if(dt===!0&&(J===!0||R!==w)){const nn=R===w&&ft.id===U;Ut.setState(ft,R,nn)}let xe=!1;ft.version===se.__version?(se.needsLights&&se.lightsStateVersion!==ze.state.version||se.outputColorSpace!==kt||Q.isBatchedMesh&&se.batching===!1||!Q.isBatchedMesh&&se.batching===!0||Q.isBatchedMesh&&se.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&se.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&se.instancing===!1||!Q.isInstancedMesh&&se.instancing===!0||Q.isSkinnedMesh&&se.skinning===!1||!Q.isSkinnedMesh&&se.skinning===!0||Q.isInstancedMesh&&se.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&se.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&se.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&se.instancingMorph===!1&&Q.morphTexture!==null||se.envMap!==Lt||ft.fog===!0&&se.fog!==Rt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Ut.numPlanes||se.numIntersection!==Ut.numIntersection)||se.vertexAlphas!==Zt||se.vertexTangents!==re||se.morphTargets!==ae||se.morphNormals!==Me||se.morphColors!==Fe||se.toneMapping!==Je||se.morphTargetsCount!==Ue)&&(xe=!0):(xe=!0,se.__version=ft.version);let gn=se.currentProgram;xe===!0&&(gn=pi(ft,K,Q));let ni=!1,Ne=!1,Da=!1;const Ze=gn.getUniforms(),Bn=se.uniforms;if(xt.useProgram(gn.program)&&(ni=!0,Ne=!0,Da=!0),ft.id!==U&&(U=ft.id,Ne=!0),ni||w!==R){xt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(B,"projectionMatrix",R.projectionMatrix),Ze.setValue(B,"viewMatrix",R.matrixWorldInverse);const On=Ze.map.cameraPosition;On!==void 0&&On.setValue(B,Tt.setFromMatrixPosition(R.matrixWorld)),Wt.logarithmicDepthBuffer&&Ze.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ze.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ne=!0,Da=!0)}if(Q.isSkinnedMesh){Ze.setOptional(B,Q,"bindMatrix"),Ze.setOptional(B,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ze.setValue(B,"boneTexture",nn.boneTexture,W))}Q.isBatchedMesh&&(Ze.setOptional(B,Q,"batchingTexture"),Ze.setValue(B,"batchingTexture",Q._matricesTexture,W),Ze.setOptional(B,Q,"batchingIdTexture"),Ze.setValue(B,"batchingIdTexture",Q._indirectTexture,W),Ze.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ze.setValue(B,"batchingColorTexture",Q._colorsTexture,W));const un=ct.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Ct.update(Q,ct,gn),(Ne||se.receiveShadow!==Q.receiveShadow)&&(se.receiveShadow=Q.receiveShadow,Ze.setValue(B,"receiveShadow",Q.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Bn.envMap.value=Lt,Bn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&K.environment!==null&&(Bn.envMapIntensity.value=K.environmentIntensity),Ne&&(Ze.setValue(B,"toneMappingExposure",A.toneMappingExposure),se.needsLights&&Oc(Bn,Da),Rt&&ft.fog===!0&&St.refreshFogUniforms(Bn,Rt),St.refreshMaterialUniforms(Bn,ft,Y,it,v.state.transmissionRenderTarget[R.id]),bc.upload(B,_s(se),Bn,W)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(bc.upload(B,_s(se),Bn,W),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ze.setValue(B,"center",Q.center),Ze.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Ze.setValue(B,"normalMatrix",Q.normalMatrix),Ze.setValue(B,"modelMatrix",Q.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const nn=ft.uniformsGroups;for(let On=0,tr=nn.length;On<tr;On++){const Bi=nn[On];de.update(Bi,gn),de.bind(Bi,gn)}}return gn}function Oc(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Rl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,K,ct){const ft=Dt.get(R);ft.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Dt.get(R.texture).__webglTexture=K,Dt.get(R.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ct,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ct=Dt.get(R);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const _o=B.createFramebuffer();this.setRenderTarget=function(R,K=0,ct=0){V=R,P=K,L=ct;let ft=!0,Q=null,Rt=!1,Ht=!1;if(R){const Lt=Dt.get(R);if(Lt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(B.FRAMEBUFFER,null),ft=!1;else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Lt.__hasExternalTextures)W.rebindTextures(R,Dt.get(R.texture).__webglTexture,Dt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ae=R.depthTexture;if(Lt.__boundDepthTexture!==ae){if(ae!==null&&Dt.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ht=!0);const re=Dt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[K])?Q=re[K][ct]:Q=re[K],Rt=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?Q=Dt.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?Q=re[ct]:Q=re,F.copy(R.viewport),at.copy(R.scissor),st=R.scissorTest}else F.copy(It).multiplyScalar(Y).floor(),at.copy(ie).multiplyScalar(Y).floor(),st=pe;if(ct!==0&&(Q=_o),xt.bindFramebuffer(B.FRAMEBUFFER,Q)&&ft&&xt.drawBuffers(R,Q),xt.viewport(F),xt.scissor(at),xt.setScissorTest(st),Rt){const Lt=Dt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Lt.__webglTexture,ct)}else if(Ht){const Lt=K;for(let Zt=0;Zt<R.textures.length;Zt++){const re=Dt.get(R.textures[Zt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Zt,re.__webglTexture,ct,Lt)}}else if(R!==null&&ct!==0){const Lt=Dt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,ct)}U=-1},this.readRenderTargetPixels=function(R,K,ct,ft,Q,Rt,Ht,kt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Dt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Lt=Lt[Ht]),Lt){xt.bindFramebuffer(B.FRAMEBUFFER,Lt);try{const Zt=R.textures[kt],re=Zt.format,ae=Zt.type;if(!Wt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ft&&ct>=0&&ct<=R.height-Q&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(K,ct,ft,Q,te.convert(re),te.convert(ae),Rt))}finally{const Zt=V!==null?Dt.get(V).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,K,ct,ft,Q,Rt,Ht,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Dt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Lt=Lt[Ht]),Lt)if(K>=0&&K<=R.width-ft&&ct>=0&&ct<=R.height-Q){xt.bindFramebuffer(B.FRAMEBUFFER,Lt);const Zt=R.textures[kt],re=Zt.format,ae=Zt.type;if(!Wt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Me),B.bufferData(B.PIXEL_PACK_BUFFER,Rt.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(K,ct,ft,Q,te.convert(re),te.convert(ae),0);const Fe=V!==null?Dt.get(V).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,Fe);const Je=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await BE(B,Je,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Me),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Rt),B.deleteBuffer(Me),B.deleteSync(Je),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ct=0){const ft=Math.pow(2,-ct),Q=Math.floor(R.image.width*ft),Rt=Math.floor(R.image.height*ft),Ht=K!==null?K.x:0,kt=K!==null?K.y:0;W.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ct,0,0,Ht,kt,Q,Rt),xt.unbindTexture()};const vs=B.createFramebuffer(),Pc=B.createFramebuffer();this.copyTextureToTexture=function(R,K,ct=null,ft=null,Q=0,Rt=null){Rt===null&&(Q!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=Q,Q=0):Rt=0);let Ht,kt,Lt,Zt,re,ae,Me,Fe,Je;const Pe=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(ct!==null)Ht=ct.max.x-ct.min.x,kt=ct.max.y-ct.min.y,Lt=ct.isBox3?ct.max.z-ct.min.z:1,Zt=ct.min.x,re=ct.min.y,ae=ct.isBox3?ct.min.z:0;else{const un=Math.pow(2,-Q);Ht=Math.floor(Pe.width*un),kt=Math.floor(Pe.height*un),R.isDataArrayTexture?Lt=Pe.depth:R.isData3DTexture?Lt=Math.floor(Pe.depth*un):Lt=1,Zt=0,re=0,ae=0}ft!==null?(Me=ft.x,Fe=ft.y,Je=ft.z):(Me=0,Fe=0,Je=0);const Ue=te.convert(K.format),se=te.convert(K.type);let ze;K.isData3DTexture?(W.setTexture3D(K,0),ze=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(W.setTexture2DArray(K,0),ze=B.TEXTURE_2D_ARRAY):(W.setTexture2D(K,0),ze=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const xe=B.getParameter(B.UNPACK_ROW_LENGTH),gn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ni=B.getParameter(B.UNPACK_SKIP_PIXELS),Ne=B.getParameter(B.UNPACK_SKIP_ROWS),Da=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Pe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Zt),B.pixelStorei(B.UNPACK_SKIP_ROWS,re),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ae);const Ze=R.isDataArrayTexture||R.isData3DTexture,Bn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const un=Dt.get(R),nn=Dt.get(K),On=Dt.get(un.__renderTarget),tr=Dt.get(nn.__renderTarget);xt.bindFramebuffer(B.READ_FRAMEBUFFER,On.__webglFramebuffer),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let Bi=0;Bi<Lt;Bi++)Ze&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(R).__webglTexture,Q,ae+Bi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(K).__webglTexture,Rt,Je+Bi)),B.blitFramebuffer(Zt,re,Ht,kt,Me,Fe,Ht,kt,B.DEPTH_BUFFER_BIT,B.NEAREST);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Dt.has(R)){const un=Dt.get(R),nn=Dt.get(K);xt.bindFramebuffer(B.READ_FRAMEBUFFER,vs),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pc);for(let On=0;On<Lt;On++)Ze?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,Q,ae+On):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,Q),Bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nn.__webglTexture,Rt,Je+On):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nn.__webglTexture,Rt),Q!==0?B.blitFramebuffer(Zt,re,Ht,kt,Me,Fe,Ht,kt,B.COLOR_BUFFER_BIT,B.NEAREST):Bn?B.copyTexSubImage3D(ze,Rt,Me,Fe,Je+On,Zt,re,Ht,kt):B.copyTexSubImage2D(ze,Rt,Me,Fe,Zt,re,Ht,kt);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(ze,Rt,Me,Fe,Je,Ht,kt,Lt,Ue,se,Pe.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(ze,Rt,Me,Fe,Je,Ht,kt,Lt,Ue,Pe.data):B.texSubImage3D(ze,Rt,Me,Fe,Je,Ht,kt,Lt,Ue,se,Pe):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Rt,Me,Fe,Ht,kt,Ue,se,Pe.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Rt,Me,Fe,Pe.width,Pe.height,Ue,Pe.data):B.texSubImage2D(B.TEXTURE_2D,Rt,Me,Fe,Ht,kt,Ue,se,Pe);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ni),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ne),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Da),Rt===0&&K.generateMipmaps&&B.generateMipmap(ze),xt.unbindTexture()},this.initRenderTarget=function(R){Dt.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),xt.unbindTexture()},this.resetState=function(){P=0,L=0,V=null,xt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const MS={type:"change"},tm={type:"start"},tx={type:"end"},Sc=new El,ES=new us,oC=Math.cos(70*zE.DEG2RAD),vn=new nt,Qn=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kd=1e-6;class lC extends ET{constructor(e,i=null){super(e,i),this.state=qe.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Qs,this._lastTargetPosition=new nt,this._quat=new Qs().setFromUnitVectors(e.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K0,this._sphericalDelta=new K0,this._scale=1,this._panOffset=new nt,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new nt,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cC.bind(this),this._onPointerDown=uC.bind(this),this._onPointerUp=fC.bind(this),this._onContextMenu=vC.bind(this),this._onMouseWheel=pC.bind(this),this._onKeyDown=mC.bind(this),this._onTouchStart=gC.bind(this),this._onTouchMove=_C.bind(this),this._onMouseDown=hC.bind(this),this._onMouseMove=dC.bind(this),this._interceptControlDown=SC.bind(this),this._interceptControlUp=xC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(MS),this.update(),this.state=qe.NONE}update(e=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,u=this.maxAzimuthAngle;isFinite(r)&&isFinite(u)&&(r<-Math.PI?r+=Qn:r>Math.PI&&(r-=Qn),u<-Math.PI?u+=Qn:u>Math.PI&&(u-=Qn),r<=u?this._spherical.theta=Math.max(r,Math.min(u,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+u)/2?Math.max(r,this._spherical.theta):Math.min(u,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const g=d-h;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),f=!!g}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=g!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Sc.origin.copy(this.object.position),Sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sc.direction))<oC?this.object.lookAt(this.target):(ES.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sc.intersectPlane(ES,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kd||this._lastTargetPosition.distanceToSquared(this.target)>kd?(this.dispatchEvent(MS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-e),this._panOffset.add(vn)}_panUp(e,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(e),this._panOffset.add(vn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const u=this.object.position;vn.copy(u).sub(this.target);let f=vn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),u=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=u/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._rotateStart.set(r,u)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panStart.set(r,u)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),u=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(u,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panEnd.set(r,u)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Se,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function uC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function cC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function fC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tx),this.state=qe.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function hC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=qe.DOLLY;break;case ao.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}break;case ao.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(tm)}function dC(o){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function pC(o){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(o.preventDefault(),this.dispatchEvent(tm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(tx))}function mC(o){this.enabled!==!1&&this._handleKeyDown(o)}function gC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=qe.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=qe.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(tm)}function _C(o){switch(this._trackPointer(o),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=qe.NONE}}function vC(o){this.enabled!==!1&&o.preventDefault()}function SC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jn=new Be;class TS extends Jp{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,i,r,u){const f=this,h=new ST(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{i(f.parse(d))}catch(g){u?u(g):console.error(g),f.manager.itemError(e)}},r,u)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function i(x,v=0){const N=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let D="";const A=N.exec(x);A!==null&&(D=A[1]);const I={comments:[],elements:[],headerLength:v,objInfo:""},P=D.split(/\r\n|\r|\n/);let L;function V(U,w){const F={type:U[0]};return F.type==="list"?(F.name=U[3],F.countType=U[1],F.itemType=U[2]):F.name=U[1],F.name in w&&(F.name=w[F.name]),F}for(let U=0;U<P.length;U++){let w=P[U];if(w=w.trim(),w==="")continue;const F=w.split(/\s+/),at=F.shift();switch(w=F.join(" "),at){case"format":I.format=F[0],I.version=F[1];break;case"comment":I.comments.push(w);break;case"element":L!==void 0&&I.elements.push(L),L={},L.name=F[0],L.count=parseInt(F[1]),L.properties=[];break;case"property":L.properties.push(V(F,C.propertyNameMapping));break;case"obj_info":I.objInfo=w;break;default:console.log("unhandled",at,F)}}return L!==void 0&&I.elements.push(L),I}function r(x,v){switch(v){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(x);case"float":case"double":case"float32":case"float64":return parseFloat(x)}}function u(x,v){const N={};for(let D=0;D<x.length;D++){if(v.empty())return null;if(x[D].type==="list"){const A=[],I=r(v.next(),x[D].countType);for(let P=0;P<I;P++){if(v.empty())return null;A.push(r(v.next(),x[D].itemType))}N[x[D].name]=A}else N[x[D].name]=r(v.next(),x[D].type)}return N}function f(){const x={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const v of Object.keys(C.customPropertyMapping))x[v]=[];return x}function h(x){const v=x.map(D=>D.name);function N(D){for(let A=0,I=D.length;A<I;A++){const P=D[A];if(v.includes(P))return P}return null}return{attrX:N(["x","px","posx"])||"x",attrY:N(["y","py","posy"])||"y",attrZ:N(["z","pz","posz"])||"z",attrNX:N(["nx","normalx"]),attrNY:N(["ny","normaly"]),attrNZ:N(["nz","normalz"]),attrS:N(["s","u","texture_u","tx"]),attrT:N(["t","v","texture_v","ty"]),attrR:N(["red","diffuse_red","r","diffuse_r"]),attrG:N(["green","diffuse_green","g","diffuse_g"]),attrB:N(["blue","diffuse_blue","b","diffuse_b"])}}function d(x,v){const N=f(),D=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let A,I;(I=D.exec(x))!==null?A=I[1].split(/\s+/):A=[];const P=new yC(A);t:for(let L=0;L<v.elements.length;L++){const V=v.elements[L],U=h(V.properties);for(let w=0;w<V.count;w++){const F=u(V.properties,P);if(!F)break t;p(N,V.name,F,U)}}return g(N)}function g(x){let v=new di;x.indices.length>0&&v.setIndex(x.indices),v.setAttribute("position",new Sn(x.vertices,3)),x.normals.length>0&&v.setAttribute("normal",new Sn(x.normals,3)),x.uvs.length>0&&v.setAttribute("uv",new Sn(x.uvs,2)),x.colors.length>0&&v.setAttribute("color",new Sn(x.colors,3)),(x.faceVertexUvs.length>0||x.faceVertexColors.length>0)&&(v=v.toNonIndexed(),x.faceVertexUvs.length>0&&v.setAttribute("uv",new Sn(x.faceVertexUvs,2)),x.faceVertexColors.length>0&&v.setAttribute("color",new Sn(x.faceVertexColors,3)));for(const N of Object.keys(C.customPropertyMapping))x[N].length>0&&v.setAttribute(N,new Sn(x[N],C.customPropertyMapping[N].length));return v.computeBoundingSphere(),v}function p(x,v,N,D){if(v==="vertex"){x.vertices.push(N[D.attrX],N[D.attrY],N[D.attrZ]),D.attrNX!==null&&D.attrNY!==null&&D.attrNZ!==null&&x.normals.push(N[D.attrNX],N[D.attrNY],N[D.attrNZ]),D.attrS!==null&&D.attrT!==null&&x.uvs.push(N[D.attrS],N[D.attrT]),D.attrR!==null&&D.attrG!==null&&D.attrB!==null&&(Jn.setRGB(N[D.attrR]/255,N[D.attrG]/255,N[D.attrB]/255,$n),x.colors.push(Jn.r,Jn.g,Jn.b));for(const A of Object.keys(C.customPropertyMapping))for(const I of C.customPropertyMapping[A])x[A].push(N[I])}else if(v==="face"){const A=N.vertex_indices||N.vertex_index,I=N.texcoord;A.length===3?(x.indices.push(A[0],A[1],A[2]),I&&I.length===6&&(x.faceVertexUvs.push(I[0],I[1]),x.faceVertexUvs.push(I[2],I[3]),x.faceVertexUvs.push(I[4],I[5]))):A.length===4&&(x.indices.push(A[0],A[1],A[3]),x.indices.push(A[1],A[2],A[3])),D.attrR!==null&&D.attrG!==null&&D.attrB!==null&&(Jn.setRGB(N[D.attrR]/255,N[D.attrG]/255,N[D.attrB]/255,$n),x.faceVertexColors.push(Jn.r,Jn.g,Jn.b),x.faceVertexColors.push(Jn.r,Jn.g,Jn.b),x.faceVertexColors.push(Jn.r,Jn.g,Jn.b))}}function S(x,v){const N={};let D=0;for(let A=0;A<v.length;A++){const I=v[A],P=I.valueReader;if(I.type==="list"){const L=[],V=I.countReader.read(x+D);D+=I.countReader.size;for(let U=0;U<V;U++)L.push(P.read(x+D)),D+=P.size;N[I.name]=L}else N[I.name]=P.read(x+D),D+=P.size}return[N,D]}function m(x,v,N){function D(A,I,P){switch(I){case"int8":case"char":return{read:L=>A.getInt8(L),size:1};case"uint8":case"uchar":return{read:L=>A.getUint8(L),size:1};case"int16":case"short":return{read:L=>A.getInt16(L,P),size:2};case"uint16":case"ushort":return{read:L=>A.getUint16(L,P),size:2};case"int32":case"int":return{read:L=>A.getInt32(L,P),size:4};case"uint32":case"uint":return{read:L=>A.getUint32(L,P),size:4};case"float32":case"float":return{read:L=>A.getFloat32(L,P),size:4};case"float64":case"double":return{read:L=>A.getFloat64(L,P),size:8}}}for(let A=0,I=x.length;A<I;A++){const P=x[A];P.type==="list"?(P.countReader=D(v,P.countType,N),P.valueReader=D(v,P.itemType,N)):P.valueReader=D(v,P.type,N)}}function y(x,v){const N=f(),D=v.format==="binary_little_endian",A=new DataView(x,v.headerLength);let I,P=0;for(let L=0;L<v.elements.length;L++){const V=v.elements[L],U=V.properties,w=h(U);m(U,A,D);for(let F=0;F<V.count;F++){I=S(P,U),P+=I[1];const at=I[0];p(N,V.name,at,w)}}return g(N)}function M(x){let v=0,N=!0,D="";const A=[],I=new TextDecoder().decode(x.subarray(0,5)),P=/^ply\r\n/.test(I);do{const L=String.fromCharCode(x[v++]);L!==`
`&&L!=="\r"?D+=L:(D==="end_header"&&(N=!1),D!==""&&(A.push(D),D=""))}while(N&&v<x.length);return P===!0&&v++,{headerText:A.join("\r")+"\r",headerLength:v}}let b;const C=this;if(e instanceof ArrayBuffer){const x=new Uint8Array(e),{headerText:v,headerLength:N}=M(x),D=i(v,N);if(D.format==="ascii"){const A=new TextDecoder().decode(x);b=d(A,D)}else b=y(e,D)}else b=d(e,i(e));return b}}class yC{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}function MC({url:o,previewUrl:e,removedUrl:i,cameraUrl:r}){const u=he.useRef(null),f=he.useRef(()=>{}),h=he.useRef(null),d=he.useRef(null),g=he.useRef(!1),p=he.useRef(()=>{}),[S,m]=he.useState("Loading point cloud…"),[y,M]=he.useState(2),[b,C]=he.useState(!1),[x,v]=he.useState(!1),[N,D]=he.useState(null),[A,I]=he.useState(!1),[P,L]=he.useState(""),V=he.useRef(null),U=he.useRef(null);return he.useEffect(()=>{g.current=x},[x]),he.useEffect(()=>{h.current&&(h.current.size=y)},[y]),he.useEffect(()=>{d.current&&(d.current.visible=b)},[b]),he.useEffect(()=>{if(!u.current)return;const w=u.current;let F=!1,at=0;D(null),m("Loading point cloud…");let st;try{st=new rC({antialias:!0})}catch{m("WebGL could not start. Download the PLY to view it in a desktop app.");return}st.setPixelRatio(Math.min(devicePixelRatio,2)),st.setClearColor("#151b24"),w.appendChild(st.domElement);const _t=new uT;V.current=_t;const ot=new bi(48,1,.001,1e3);ot.up.set(0,-1,0);const k=new lC(ot,st.domElement);k.enableDamping=!0;let it=null;const Y=U.current,Mt=Y?.model===r;let Et=Mt?Y.radius:1;Mt&&(ot.position.copy(Y.position),ot.up.copy(Y.up),ot.near=Y.near,ot.far=Y.far,k.target.copy(Y.target),ot.updateProjectionMatrix(),k.update());let It=null;const ie=new no;_t.add(ie);const pe=new no;_t.add(pe),d.current=pe,pe.visible=b;const H=[],dt=[],J=[];function lt(){H.length=0;for(const xt of[...ie.children]){const zt=xt;zt.geometry?.dispose(),zt.material?.dispose(),ie.remove(xt)}D(null)}p.current=lt;function Tt(){if(!it)return;const xt=new ho().setFromObject(it),zt=xt.getCenter(new nt);if(Et=Math.max(xt.getSize(new nt).length()/2,.01),k.target.copy(zt),It){const W=new nt(...It.center_m).clone().sub(zt).normalize();ot.position.copy(zt).addScaledVector(W,Et*2.7),ot.up.set(-It.Rcw[1][0],-It.Rcw[1][1],-It.Rcw[1][2])}else ot.position.copy(zt).add(new nt(0,0,-Et*2.7));ot.near=Et/1e3,ot.far=Et*100,ot.updateProjectionMatrix(),k.update()}f.current=Tt;async function Nt(xt,zt){const Dt=await fetch(xt);if(!Dt.ok)throw new Error("Could not read the point cloud file");const W=await Dt.arrayBuffer();if(F)return;const Xt=new TS().parse(W);Xt.computeBoundingSphere(),it&&(_t.remove(it),it.geometry.dispose(),it.material.dispose());const oe=new zp({size:y,vertexColors:Xt.hasAttribute("color"),sizeAttenuation:!1});h.current=oe,it=new j0(Xt,oe),_t.add(it),Mt||Tt(),m(`${Xt.getAttribute("position").count.toLocaleString()} points · ${zt?"Full model":"Quick preview"}`)}(async()=>{try{e!==o&&await Nt(e,!1),await Nt(o,!0);const xt=await fetch(r);if(!xt.ok)return;const zt=await xt.json();if(F)return;It=[...zt].sort((Dt,W)=>Number(Dt.photo)-Number(W.photo))[0]||null,Mt||Tt();for(const Dt of zt){const W=new nt(...Dt.center_m),Xt=new Pp({color:7252223});J.push(Xt);const oe=Et*.035,O=[[-1,-.7,1],[1,-.7,1],[1,.7,1],[-1,.7,1]].map(pt=>{const St=new nt(...pt).multiplyScalar(oe),ht=Dt.Rcw;return new nt(ht[0][0]*St.x+ht[1][0]*St.y+ht[2][0]*St.z,ht[0][1]*St.x+ht[1][1]*St.y+ht[2][1]*St.z,ht[0][2]*St.x+ht[1][2]*St.y+ht[2][2]*St.z).add(W)}),T=[];O.forEach((pt,St)=>T.push(W,pt,pt,O[(St+1)%4]));const et=new di().setFromPoints(T);dt.push(et),pe.add(new dT(et,Xt))}}catch(xt){F||m(String(xt))}})();const At=new MT,vt=new Se;let Vt=[0,0];const B=xt=>{Vt=[xt.clientX,xt.clientY]},we=xt=>{if(!g.current||!it||Math.hypot(xt.clientX-Vt[0],xt.clientY-Vt[1])>5)return;const zt=st.domElement.getBoundingClientRect();vt.set((xt.clientX-zt.left)/zt.width*2-1,-(xt.clientY-zt.top)/zt.height*2+1),At.params.Points.threshold=Et*.004,At.setFromCamera(vt,ot);const Dt=At.intersectObject(it)[0];if(Dt?.index===void 0)return;H.length===2&&lt();const W=it.geometry.getAttribute("position"),Xt=new nt().fromBufferAttribute(W,Dt.index);H.push(Xt);const oe=new $i(new Qp(Et*.006,12,8),new Kp({color:16762967}));oe.position.copy(Xt),ie.add(oe),H.length===2&&(ie.add(new YS(new di().setFromPoints(H),new Pp({color:16762967}))),D(H[0].distanceTo(H[1])))};st.domElement.addEventListener("pointerdown",B),st.domElement.addEventListener("pointerup",we);const Qt=new ResizeObserver(()=>{const xt=w.clientWidth,zt=w.clientHeight;st.setSize(xt,zt),ot.aspect=xt/zt,ot.updateProjectionMatrix()});Qt.observe(w);function Wt(){at=requestAnimationFrame(Wt),k.update(),st.render(_t,ot)}return Wt(),()=>{it&&(U.current={model:r,position:ot.position.clone(),up:ot.up.clone(),target:k.target.clone(),near:ot.near,far:ot.far,radius:Et}),V.current=null,F=!0,cancelAnimationFrame(at),Qt.disconnect(),st.domElement.removeEventListener("pointerdown",B),st.domElement.removeEventListener("pointerup",we),k.dispose(),lt(),it&&(it.geometry.dispose(),it.material.dispose()),dt.forEach(xt=>xt.dispose()),J.forEach(xt=>xt.dispose()),st.dispose(),st.forceContextLoss(),st.domElement.remove(),h.current=null,d.current=null}},[o,e,r]),he.useEffect(()=>{const w=V.current;if(L(""),!A||!i||!w)return;const F=new AbortController;let at;return L("Loading removed points…"),(async()=>{try{const st=await fetch(i,{signal:F.signal});if(!st.ok)throw new Error("Could not load removed points");const _t=await st.arrayBuffer();if(F.signal.aborted)return;const ot=new TS().parse(_t),k=new zp({color:16726102,size:3,sizeAttenuation:!1});at=new j0(ot,k),w.add(at),L(`${ot.getAttribute("position").count.toLocaleString()} removed points in red`)}catch(st){F.signal.aborted||L(String(st))}})(),()=>{F.abort(),at&&(w.remove(at),at.geometry.dispose(),at.material.dispose())}},[A,i,o,e,r]),$.jsxs("div",{className:"viewer",children:[$.jsx("div",{className:"canvas",ref:u,"aria-label":"3D point cloud: drag to orbit, right-drag to pan, scroll to zoom"}),$.jsxs("div",{className:"canvas-top",children:[$.jsx("span",{className:"live-dot"}),S,P&&` · ${P}`,$.jsx("span",{className:"unit",children:"Meters · LiDAR scale"})]}),$.jsxs("div",{className:"viewer-tools",children:[$.jsx("button",{onClick:()=>f.current(),children:"Fit view"}),i&&$.jsx("button",{"aria-pressed":A,onClick:()=>I(!A),children:"Highlight removed"}),$.jsx("button",{"aria-pressed":b,onClick:()=>C(!b),children:"Cameras"}),$.jsx("button",{"aria-pressed":x,onClick:()=>{v(!x),p.current()},children:"Measure distance"}),$.jsxs("label",{children:["Point size"," ",$.jsx("input",{"aria-label":"Point size",type:"range",min:"1",max:"5",step:".5",value:y,onChange:w=>M(+w.target.value)})]})]}),$.jsxs("div",{className:"canvas-bottom",children:[x?N!==null?`Distance: ${(N*100).toFixed(1)} cm · Select a new point to measure again`:"Select two points on the visible cloud":"Drag to orbit · Right-drag to pan · Scroll to zoom",$.jsx("span",{children:"Axes are not aligned to ground or north"})]})]})}const jd={uploading:"Awaiting upload",queued:"Queued",validating:"Validating captures",preprocessing:"Processing depth",sfm:"Camera reconstruction",pcl_cleaning:"Cleaning point cloud",depth_fusion:"Scaling and fusing depth",exporting:"Exporting and checking",complete:"Processing complete",running:"Reconstructing",succeeded:"Complete",partial:"Partially complete",failed:"Failed",cancelled:"Cancelled",cancelling:"Cancelling",interrupted:"Interrupted",stopped:"Job stopped"},to=["succeeded","partial","failed","cancelled","interrupted"];async function Nn(o,e={}){const i=await fetch("/api"+o,{...e,headers:{"x-workbench":"1",...e.body instanceof FormData?{}:{"Content-Type":"application/json"},...e.headers}});if(!i.ok){const r=await i.json();throw new Error(Yd(typeof r.detail=="string"?r.detail:JSON.stringify(r.detail)))}return i.json()}function EC(){const[o,e]=he.useState([]),[i,r]=he.useState(""),[u,f]=he.useState(""),[h,d]=he.useState([]),[g,p]=he.useState(null),[S,m]=he.useState([]),[y,M]=he.useState(!1),[b,C]=he.useState([]),[x,v]=he.useState(""),[N,D]=he.useState("2.0"),[A,I]=he.useState(!1),[P,L]=he.useState(!1),[V,U]=he.useState(!1),[w,F]=he.useState(""),[at,st]=he.useState(""),[_t,ot]=he.useState(0),[k,it]=he.useState(""),[Y,Mt]=he.useState("rgb"),[Et,It]=he.useState("1"),ie=he.useRef(null),pe=he.useRef(null);async function H(){const W=await Nn("/projects");e(W),W.length&&!i&&r(W[0].id)}he.useEffect(()=>{H().catch(W=>st(W.message))},[]),he.useEffect(()=>{if(!i)return;let W=!0;return Nn(`/projects/${i}/jobs`).then(Xt=>{W&&(d(Xt),f(Xt[0]?.id||""),ot(0))}).catch(Xt=>st(Xt.message)),()=>{W=!1}},[i]),he.useEffect(()=>{if(!u){p(null),m([]);return}let W=!0;const Xt=async()=>{try{const O=await Nn(`/jobs/${u}`);if(!W)return;p(O);const T=await Nn(`/jobs/${u}/photos`);W&&m(T)}catch(O){W&&st(String(O))}};Xt();const oe=setInterval(Xt,2e3);return()=>{W=!1,clearInterval(oe)}},[u]);function dt(W){if(!W)return;const Xt=Array.from(W).filter(oe=>!oe.name.startsWith(".")&&!oe.webkitRelativePath.includes("/."));C(Xt),v(Xt[0]?.webkitRelativePath.split("/")[0]||Xt[0]?.name.replace(/\.zip$/i,"")||"New project"),M(!0),st("")}async function J(){if(!b.length||!x.trim())return;L(!0),st("");let W="";try{const Xt=await Nn("/projects",{method:"POST",body:JSON.stringify({name:x})}),oe=await Nn(`/projects/${Xt.id}/uploads`,{method:"POST",body:JSON.stringify({small:A,pcl_stddev:Number(N)||null})});W=oe.id,r(Xt.id),f(oe.id);for(let O=0;O<b.length;O++){const T=b[O];F(`Uploading ${O+1} / ${b.length} · ${T.name}`);const et=new FormData;et.append("file",T),b.length===1&&T.name.toLowerCase().endsWith(".zip")?await Nn(`/uploads/${W}/zip`,{method:"POST",body:et}):(et.append("path",T.webkitRelativePath||T.name),await Nn(`/uploads/${W}/file`,{method:"PUT",body:et}))}await Nn(`/uploads/${W}/complete`,{method:"POST"}),M(!1),C([]),await H(),f(W),d(await Nn(`/projects/${Xt.id}/jobs`))}catch(Xt){st(String(Xt)),W&&await Nn(`/jobs/${W}/cancel`,{method:"POST"}).catch(()=>{})}finally{L(!1),F("")}}async function lt(){try{await Nn(`/jobs/${u}/cancel`,{method:"POST"}),p(await Nn(`/jobs/${u}`))}catch(W){st(String(W))}}async function Tt(){try{const W=await Nn(`/jobs/${u}/retry`,{method:"POST",body:JSON.stringify({pcl_stddev:Number(N)||null})});f(W.id),d(await Nn(`/projects/${i}/jobs`))}catch(W){st(String(W))}}async function Nt(){const W=o.find(oe=>oe.id===i);if(!(!W||V||!window.confirm(`Delete "${W.name}"? This permanently deletes this project, all reconstruction versions, uploaded captures, and result files. This cannot be undone.`))){U(!0),st("");try{await Nn(`/projects/${i}`,{method:"DELETE"}),f(""),p(null),d([]),m([]),ot(0);const oe=await Nn("/projects");e(oe),r(oe[0]?.id||""),M(!oe.length)}catch(oe){st(String(oe))}finally{U(!1)}}}const At=g?.id===u?g.models:[],vt=At.find(W=>W.model_id===_t)||At[0],Vt=vt?[{path:"fused",points:vt.fused_points,label:"Main point cloud"},{path:"multiview-supported",points:vt.multiview_supported_fused_points,label:"Cross-view supported cloud"},...vt.pcl_variants||[]]:[],B=Vt.find(W=>W.path===k)||Vt.find(W=>W.path.endsWith("/cleaned"))||Vt[0];he.useEffect(()=>it(""),[u,_t]);const we=$.jsxs("label",{children:["PCL cleaning",$.jsxs("select",{value:N,onChange:W=>{const Xt=W.target.value;if(D(Xt),y||!vt)return;const oe=Xt?`pcl-sor-${Xt}/cleaned`:"multiview-supported";Vt.some(O=>O.path===oe)&&it(oe)},disabled:P,children:[$.jsx("option",{value:"2.0",children:"Standard (σ = 2.0)"}),$.jsx("option",{value:"1.5",children:"Stronger (σ = 1.5)"}),$.jsx("option",{value:"",children:"Off"})]})]}),Qt=W=>`/api/jobs/${u}/artifacts/${W}`,Wt=o.find(W=>W.id===i),xt=y||!o.length,zt=S.find(W=>W.photo===Et)||S[0],Dt=["validating","preprocessing","sfm","depth_fusion",...g?.pcl_stddev?["pcl_cleaning"]:[],"exporting"];return $.jsxs("div",{className:"app",children:[$.jsxs("aside",{className:"sidebar",children:[$.jsxs("div",{className:"brand",children:[$.jsx("div",{className:"brand-mark",children:"◈"}),$.jsxs("div",{children:["RGB-D",$.jsx("span",{children:"Point Cloud Workbench"})]})]}),$.jsx("button",{className:"primary new",onClick:()=>{M(!0),C([]),st("")},children:"＋ New model"}),$.jsxs("div",{className:"section-label",children:["Projects ",$.jsx("span",{children:o.length})]}),$.jsx("nav",{children:o.map(W=>$.jsxs("button",{className:i===W.id&&!xt?"project selected":"project","aria-label":W.name,onClick:()=>{r(W.id),M(!1),st("")},children:[$.jsx("span",{children:"▧"}),$.jsxs("div",{children:[W.name,$.jsx("small",{children:"RGB + LiDAR"})]})]},W.id))}),$.jsxs("div",{className:"local",children:[$.jsx("span",{className:"green-dot"}),"Local processing",$.jsx("div",{children:"Photos and models stay on this computer"})]})]}),$.jsxs("main",{children:[$.jsxs("header",{children:[$.jsxs("div",{className:"breadcrumb",children:["Workspace ",$.jsx("span",{children:"/"})," ",xt?"New model":Wt?.name||"Model"]}),$.jsxs("select",{className:"project-mobile","aria-label":"Select project",value:xt?"":i,onChange:W=>{W.target.value?(r(W.target.value),M(!1)):M(!0)},children:[$.jsx("option",{value:"",children:"New model"}),o.map(W=>$.jsx("option",{value:W.id,children:W.name},W.id))]})]}),at&&$.jsxs("div",{role:"alert",className:"error",children:[$.jsx("span",{children:at}),$.jsx("button",{onClick:()=>st(""),children:"Close"})]}),xt?$.jsxs("section",{className:"upload-page",children:[$.jsx("div",{className:"eyebrow",children:"FROM CAPTURES TO 3D"}),$.jsx("h1",{children:"Build your next model"}),$.jsx("p",{className:"intro",children:"Upload a complete RGB-D capture batch to reconstruct cameras, fuse depth, and generate a point cloud."}),$.jsx("div",{className:"upload-layout",children:$.jsxs("div",{children:[$.jsxs("div",{className:"drop-zone",onDragOver:W=>W.preventDefault(),onDrop:W=>{W.preventDefault(),W.dataTransfer.files.length===1&&W.dataTransfer.files[0].name.endsWith(".zip")?dt(W.dataTransfer.files):st("Use Choose capture folder for folders, or drag and drop a ZIP file.")},children:[$.jsx("div",{className:"upload-symbol",children:"↥"}),$.jsx("h2",{children:b.length?`${b.length} files selected`:"Choose a complete capture folder"}),$.jsx("p",{children:"Each capture must include an image, intrinsics, depth, and confidence files"}),$.jsxs("div",{className:"button-row",children:[$.jsx("button",{disabled:P,className:"primary",onClick:()=>ie.current?.click(),children:"Choose capture folder"}),$.jsx("button",{disabled:P,onClick:()=>pe.current?.click(),children:"Upload ZIP"})]}),$.jsx("small",{children:"Captures4 export format · Up to 2 GB per batch"}),$.jsx("input",{hidden:!0,ref:ie,type:"file",multiple:!0,webkitdirectory:"",onChange:W=>dt(W.target.files)}),$.jsx("input",{hidden:!0,ref:pe,type:"file",accept:".zip",onChange:W=>dt(W.target.files)})]}),b.length>0&&$.jsxs("div",{className:"selected-files",children:[$.jsxs("label",{children:["Project name",$.jsx("input",{value:x,onChange:W=>v(W.target.value),maxLength:100})]}),$.jsxs("div",{className:"file-summary",children:[$.jsxs("span",{children:[(b.reduce((W,Xt)=>W+Xt.size,0)/1048576).toFixed(1)," ","MB"]}),$.jsx("span",{children:b.filter(W=>W.name==="image.jpg").length?`${b.filter(W=>W.name==="image.jpg").length} captures`:"Captures in ZIP"})]}),$.jsxs("details",{children:[$.jsx("summary",{children:"Review selected files"}),$.jsx("ul",{children:b.slice(0,100).map((W,Xt)=>$.jsxs("li",{children:[W.webkitRelativePath||W.name,$.jsxs("span",{children:[(W.size/1024).toFixed(0)," KB"]})]},Xt))})]}),we,$.jsxs("label",{className:"small-check",children:[$.jsx("input",{type:"checkbox",checked:A,onChange:W=>I(W.target.checked)}),"Allow small-batch diagnostics (3–9 captures)"]}),$.jsx("button",{disabled:P||!x.trim(),className:"primary start",onClick:J,children:P?"Uploading…":"Upload and reconstruct →"}),$.jsx("p",{"aria-live":"polite",children:w})]}),$.jsxs("div",{className:"flow",children:[$.jsx("span",{children:"01 Validate captures"}),$.jsx("b",{children:"→"}),$.jsx("span",{children:"02 Camera reconstruction"}),$.jsx("b",{children:"→"}),$.jsx("span",{children:"03 Depth fusion"}),$.jsx("b",{children:"→"}),$.jsx("span",{children:"04 Explore in 3D"})]})]})})]}):$.jsxs($.Fragment,{children:[$.jsxs("div",{className:"title-row",children:[$.jsxs("div",{children:[$.jsx("div",{className:"eyebrow",children:"RGB-D RECONSTRUCTION"}),$.jsxs("h1",{children:[Wt?.name,$.jsx("span",{className:`badge ${g?.status}`,children:jd[g?.status||""]||"Awaiting upload"})]})]}),$.jsxs("div",{className:"button-row",children:[$.jsx("button",{className:"danger",onClick:Nt,disabled:V||h.some(W=>W.id!==u&&!to.includes(W.status))||!!(g&&!to.includes(g.status)),children:V?"Deleting…":"Delete model"}),$.jsx("select",{"aria-label":"Result version",value:u,onChange:W=>f(W.target.value),children:h.map((W,Xt)=>$.jsxs("option",{value:W.id,children:["Version ",h.length-Xt," ·"," ",new Date(W.created*1e3).toLocaleString("en-CA")]},W.id))}),g&&to.includes(g.status)&&$.jsxs($.Fragment,{children:[we,$.jsx("button",{onClick:Tt,children:"Reconstruct again"})]}),vt&&$.jsx("a",{className:"button primary",href:Qt(`model-${vt.model_id}/${B.path}.ply`),children:"↓ Export PLY"})]})]}),g?.error&&$.jsx("div",{className:"warning",children:Yd(g.error)}),vt?$.jsxs("div",{className:"workspace",children:[$.jsxs("aside",{className:"photos",children:[$.jsxs("div",{className:"panel-heading",children:["Capture views ",$.jsx("span",{children:S.length})]}),$.jsx("div",{className:"photo-list",children:S.map(W=>$.jsxs("button",{className:zt?.photo===W.photo?"photo active":"photo",onClick:()=>It(W.photo),children:[$.jsx("img",{src:Qt(`depth/${W.photo.padStart(2,"0")}-rgb.jpg`),alt:`Photo ${W.photo}`}),$.jsxs("span",{children:[W.photo.padStart(2,"0"),$.jsx("small",{children:W.registered?"Registered":"Unregistered"})]})]},W.photo))}),$.jsx("div",{className:"tabs",children:["rgb","depth","confidence"].map(W=>$.jsx("button",{"aria-pressed":Y===W,onClick:()=>Mt(W),children:{rgb:"RGB",depth:"Depth",confidence:"Confidence"}[W]},W))}),zt&&$.jsxs($.Fragment,{children:[$.jsx("img",{className:"image-detail",src:Qt(`depth/${zt.photo.padStart(2,"0")}-${Y}.${Y==="rgb"?"jpg":"png"}`),alt:"Selected capture preview"}),$.jsx("p",{className:"photo-note",children:Y==="confidence"?"Red: low · Yellow: medium · Green: high":Y==="depth"?"Depth scale: blue is near, red is far":"Native capture orientation"})]})]}),$.jsx(MC,{url:Qt(`model-${vt.model_id}/${B.path}.ply`),previewUrl:Qt(`model-${vt.model_id}/${B.path==="fused"?"preview":B.path}.ply`),removedUrl:B.path.endsWith("/cleaned")?Qt(`model-${vt.model_id}/${B.path.replace(/cleaned$/,"removed")}.ply`):void 0,cameraUrl:Qt(`model-${vt.model_id}/cameras-meters.json`)}),$.jsxs("aside",{className:"inspector",children:[$.jsx("div",{className:"panel-heading",children:"Model overview"}),$.jsxs("div",{className:"stat",children:[$.jsx("span",{children:"Point count"}),$.jsx("strong",{children:B.points.toLocaleString()}),$.jsx("small",{children:"Colored points from measured depth"})]}),$.jsxs("div",{className:"stat-row",children:[$.jsxs("div",{children:[$.jsx("span",{children:"Registered cameras"}),$.jsxs("b",{children:[vt.registered,$.jsxs("small",{children:[" / ",vt.total]})]})]}),$.jsxs("div",{children:[$.jsx("span",{children:"Model units"}),$.jsxs("b",{children:["Meters ",$.jsx("small",{children:"m"})]})]})]}),$.jsx("hr",{}),$.jsxs("label",{children:["Separate model",$.jsx("select",{value:vt.model_id,onChange:W=>ot(+W.target.value),children:g?.models.map(W=>$.jsxs("option",{value:W.model_id,children:["Model ",W.model_id+1," · ",W.registered," captures"]},W.model_id))})]}),$.jsxs("label",{children:["Point cloud variant",$.jsx("select",{value:B.path,onChange:W=>it(W.target.value),children:Vt.map(W=>$.jsx("option",{value:W.path,children:W.label},W.path))})]}),$.jsx("hr",{}),$.jsx("div",{className:"section-label",children:"Quality and scale"}),$.jsxs("dl",{children:[$.jsx("dt",{children:"Depth confidence"}),$.jsx("dd",{children:"Medium + high"}),$.jsx("dt",{children:"Fusion spacing"}),$.jsx("dd",{children:"5 mm"}),$.jsx("dt",{children:"Relative scale spread"}),$.jsxs("dd",{children:[(vt.scale_robust_relative_std*100).toFixed(2),"%"]})]}),$.jsx("p",{className:"note",children:"Metric scale comes from LiDAR. Edges may be noisy; accuracy has not been independently verified against physical measurements."}),$.jsx("a",{className:"text-link",href:`/api/jobs/${u}/download`,children:"Download full result archive ↓"}),$.jsx("a",{className:"text-link",href:Qt("result.json"),target:"_blank",children:"View full report ↗"}),$.jsx("a",{className:"text-link",href:Qt(`model-${vt.model_id}/cameras-meters.json`),target:"_blank",children:"Camera poses ↗"})]})]}):$.jsxs("section",{className:"progress-page",children:[$.jsx("div",{className:"process-illustration",children:"◈"}),$.jsx("h2",{children:jd[g?.stage||""]||"Preparing reconstruction"}),$.jsx("p",{children:g&&to.includes(g.status)?"This job has ended. Review the report and retry to save a new result version.":"Reconstruction runs in the background. Closing or refreshing this page will not stop the job."}),$.jsx("ol",{className:"steps",children:Dt.map((W,Xt)=>$.jsxs("li",{className:g?.stage===W?"current":Dt.indexOf(g?.stage||"")>Xt?"done":"",children:[$.jsx("span",{children:Dt.indexOf(g?.stage||"")>Xt?"✓":Xt+1}),jd[W]]},W))}),g&&!to.includes(g.status)&&$.jsx("button",{onClick:lt,disabled:g.status==="cancelling",children:"Cancel job"}),$.jsx("p",{className:"note",children:g?`Started at ${new Date(g.created*1e3).toLocaleTimeString("en-CA")} · ${Math.max(0,Math.round((to.includes(g.status)?g.updated:Date.now()/1e3)-g.created))} s`:""})]}),g&&$.jsxs("details",{className:"logs",children:[$.jsxs("summary",{children:["Logs and diagnostics ",$.jsx("span",{children:g.id.slice(0,8)})]}),$.jsx("pre",{children:Yd(g.log||"Waiting for processing…")}),$.jsx("a",{href:Qt("execution.log"),target:"_blank",children:"Open full log"})]})]}),$.jsxs("footer",{children:[$.jsx("span",{children:"◈ RGB-D WORKBENCH"}),$.jsx("span",{children:"Data stays local · Each reconstruction is saved separately"})]})]})]})}YM.createRoot(document.getElementById("root")).render($.jsx(EC,{}));
