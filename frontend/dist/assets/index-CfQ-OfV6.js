(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var od={exports:{}},rl={};var s0;function OM(){if(s0)return rl;s0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:r,key:h,ref:u!==void 0?u:null,props:f}}return rl.Fragment=e,rl.jsx=i,rl.jsxs=i,rl}var r0;function PM(){return r0||(r0=1,od.exports=OM()),od.exports}var tt=PM();const zM=[["正常批次需10–200组；小批量诊断需3–200组","Normal batches require 10–200 captures; diagnostic batches require 3–200."],["未形成至少3个相机的有效模型；可下载日志及诊断","No valid model with at least three cameras was reconstructed. Review the logs and diagnostics."],["需要schema 2 的 ARKit 深度数据","ARKit depth data with schema version 2 is required."],["引擎自动调整过初始化条件；请结合质量报告验收。","The engine adjusted its initialization conditions. Review the quality report before accepting the result."],["order.json 必须唯一覆盖所有拍摄组","order.json must list every capture group exactly once."],["当前适配器只接受方向1、像素内参、未测量畸变","The importer requires orientation 1, pixel-based intrinsics, and unmeasured distortion."],["无法识别批次根目录，请上传完整拍摄文件夹","Could not identify the batch root. Upload the complete capture folder."],["当前采集格式需要正整数拍摄文件夹名","Capture folders must be named with positive integers without leading zeros."],[" 执行失败，详情见日志（退出码 "," failed. See the log for details (exit code "],["深度格式/来源/单位不受支持","Unsupported depth format, source, or units."],["不支持该文件层级或隐藏文件","Unsupported folder depth or hidden file."],["服务中断，请重试生成新版本","The service was interrupted. Retry to create a new version."],["ZIP解压容量或文件数超限","The extracted ZIP exceeds the size or file-count limit."],["文件路径不能越出批次目录","File paths must stay within the batch directory."],["重复capture_id","Duplicate capture_id."],["深度或置信度字节数不匹配","Depth or confidence file size does not match its dimensions."],["重复图片，请去重后提交","Duplicate images. Remove duplicates before submitting."],["图片与深度时间戳不一致","Image and depth timestamps do not match."],["没有可用中高置信度深度","No valid medium- or high-confidence depth samples."],["RGB尺寸或方向不一致","RGB dimensions or orientation do not match."],["只能重试已结束的任务","Only finished jobs can be retried."],["ZIP需上传至空批次","Upload the ZIP to an empty batch."],["文件绑定名称不匹配","Referenced filenames do not match."],["深度存储格式不支持","Unsupported depth storage layout."],["深度内参映射不一致","Depth intrinsics do not match the RGB-to-depth scaling."],["文件或批次容量超限","File or batch size limit exceeded."],["缺少本机操作标记","The local request header is missing."],["批次文件数量超限","Too many files in this batch."],["图片超过30MB","The image exceeds 30 MB."],["ZIP内路径重复","Duplicate paths in the ZIP."],["不支持的文件：","Unsupported file: "],["仅支持本机访问","Only local access is supported."],["图片像素数超限","The image exceeds the pixel-count limit."],["ZIP容量超限","ZIP size limit exceeded."],["不接受符号链接","Symbolic links are not accepted."],["前端尚未构建","The frontend has not been built."],["非法文件路径","Invalid file path."],["结果尚未完成","Results are not ready."],["不允许的来源","Origin not allowed."],["批次已经提交","This batch has already been submitted."],["深度尺寸无效","Invalid depth dimensions."],["非法置信度值","Invalid confidence values."],["任务不存在","Job not found."],["文件不存在","File not found."],["项目不存在","Project not found."],["批次已提交","This batch has already been submitted."],["缺失文件 ","Missing file: "],["文件重复","Duplicate file."],["非法内参","Invalid camera intrinsics."],["模型 ","Model "]];function Yd(o){return zM.reduce((e,[i,r])=>e.split(i).join(r),o)}var ld={exports:{}},ue={};var o0;function IM(){if(o0)return ue;o0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(H){return H===null||typeof H!="object"?null:(H=M&&H[M]||H["@@iterator"],typeof H=="function"?H:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,v={};function N(H,dt,Q){this.props=H,this.context=dt,this.refs=v,this.updater=Q||R}N.prototype.isReactComponent={},N.prototype.setState=function(H,dt){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,dt,"setState")},N.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function D(){}D.prototype=N.prototype;function A(H,dt,Q){this.props=H,this.context=dt,this.refs=v,this.updater=Q||R}var z=A.prototype=new D;z.constructor=A,S(z,N.prototype),z.isPureReactComponent=!0;var O=Array.isArray;function L(){}var G={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function w(H,dt,Q){var at=Q.ref;return{$$typeof:o,type:H,key:dt,ref:at!==void 0?at:null,props:Q}}function B(H,dt){return w(H.type,dt,H.props)}function nt(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function ft(H){var dt={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Q){return dt[Q]})}var vt=/\/+/g;function ct(H,dt){return typeof H=="object"&&H!==null&&H.key!=null?ft(""+H.key):dt.toString(36)}function k(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(L,L):(H.status="pending",H.then(function(dt){H.status==="pending"&&(H.status="fulfilled",H.value=dt)},function(dt){H.status==="pending"&&(H.status="rejected",H.reason=dt)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function rt(H,dt,Q,at,ht){var yt=typeof H;(yt==="undefined"||yt==="boolean")&&(H=null);var Tt=!1;if(H===null)Tt=!0;else switch(yt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(H.$$typeof){case o:case e:Tt=!0;break;case x:return Tt=H._init,rt(Tt(H._payload),dt,Q,at,ht)}}if(Tt)return ht=ht(H),Tt=at===""?"."+ct(H,0):at,O(ht)?(Q="",Tt!=null&&(Q=Tt.replace(vt,"$&/")+"/"),rt(ht,dt,Q,"",function(F){return F})):ht!=null&&(nt(ht)&&(ht=B(ht,Q+(ht.key==null||H&&H.key===ht.key?"":(""+ht.key).replace(vt,"$&/")+"/")+Tt)),dt.push(ht)),1;Tt=0;var xt=at===""?".":at+":";if(O(H))for(var It=0;It<H.length;It++)at=H[It],yt=xt+ct(at,It),Tt+=rt(at,dt,Q,yt,ht);else if(It=b(H),typeof It=="function")for(H=It.call(H),It=0;!(at=H.next()).done;)at=at.value,yt=xt+ct(at,It++),Tt+=rt(at,dt,Q,yt,ht);else if(yt==="object"){if(typeof H.then=="function")return rt(k(H),dt,Q,at,ht);throw dt=String(H),Error("Objects are not valid as a React child (found: "+(dt==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":dt)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function W(H,dt,Q){if(H==null)return H;var at=[],ht=0;return rt(H,at,"","",function(yt){return dt.call(Q,yt,ht++)}),at}function Mt(H){if(H._status===-1){var dt=H._result,Q=dt();Q.then(function(at){(H._status===0||H._status===-1)&&(H._status=1,H._result=at,Q.status===void 0&&(Q.status="fulfilled",Q.value=at))},function(at){(H._status===0||H._status===-1)&&(H._status=2,H._result=at,Q.status===void 0&&(Q.status="rejected",Q.reason=at))}),H._status===-1&&(H._status=0,H._result=Q)}if(H._status===1)return H._result.default;throw H._result}var Et=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var dt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(dt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Xt(H){var dt=G.T,Q={};Q.types=dt!==null?dt.types:null,G.T=Q;try{var at=H(),ht=G.S;ht!==null&&ht(Q,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(L,Et)}catch(yt){Et(yt)}finally{dt!==null&&Q.types!==null&&(dt.types=Q.types),G.T=dt}}function se(H){var dt=G.T;if(dt!==null){var Q=dt.types;Q===null?dt.types=[H]:Q.indexOf(H)===-1&&Q.push(H)}else Xt(se.bind(null,H))}var he={map:W,forEach:function(H,dt,Q){W(H,function(){dt.apply(this,arguments)},Q)},count:function(H){var dt=0;return W(H,function(){dt++}),dt},toArray:function(H){return W(H,function(dt){return dt})||[]},only:function(H){if(!nt(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return ue.Activity=m,ue.Children=he,ue.Component=N,ue.Fragment=i,ue.Profiler=u,ue.PureComponent=A,ue.StrictMode=r,ue.Suspense=g,ue.ViewTransition=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ue.__COMPILER_RUNTIME={__proto__:null,c:function(H){return G.H.useMemoCache(H)}},ue.addTransitionType=se,ue.cache=function(H){return function(){return H.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(H,dt,Q){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var at=S({},H.props),ht=H.key;if(dt!=null)for(yt in dt.key!==void 0&&(ht=""+dt.key),dt)!U.call(dt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&dt.ref===void 0||(at[yt]=dt[yt]);var yt=arguments.length-2;if(yt===1)at.children=Q;else if(1<yt){for(var Tt=Array(yt),xt=0;xt<yt;xt++)Tt[xt]=arguments[xt+2];at.children=Tt}return w(H.type,ht,at)},ue.createContext=function(H){return H={$$typeof:h,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},ue.createElement=function(H,dt,Q){var at,ht={},yt=null;if(dt!=null)for(at in dt.key!==void 0&&(yt=""+dt.key),dt)U.call(dt,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(ht[at]=dt[at]);var Tt=arguments.length-2;if(Tt===1)ht.children=Q;else if(1<Tt){for(var xt=Array(Tt),It=0;It<Tt;It++)xt[It]=arguments[It+2];ht.children=xt}if(H&&H.defaultProps)for(at in Tt=H.defaultProps,Tt)ht[at]===void 0&&(ht[at]=Tt[at]);return w(H,yt,ht)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(H){return{$$typeof:d,render:H}},ue.isValidElement=nt,ue.lazy=function(H){return{$$typeof:x,_payload:{_status:-1,_result:H},_init:Mt}},ue.memo=function(H,dt){return{$$typeof:p,type:H,compare:dt===void 0?null:dt}},ue.startTransition=Xt,ue.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ue.use=function(H){return G.H.use(H)},ue.useActionState=function(H,dt,Q){return G.H.useActionState(H,dt,Q)},ue.useCallback=function(H,dt){return G.H.useCallback(H,dt)},ue.useContext=function(H){return G.H.useContext(H)},ue.useDebugValue=function(){},ue.useDeferredValue=function(H,dt){return G.H.useDeferredValue(H,dt)},ue.useEffect=function(H,dt){return G.H.useEffect(H,dt)},ue.useEffectEvent=function(H){return G.H.useEffectEvent(H)},ue.useId=function(){return G.H.useId()},ue.useImperativeHandle=function(H,dt,Q){return G.H.useImperativeHandle(H,dt,Q)},ue.useInsertionEffect=function(H,dt){return G.H.useInsertionEffect(H,dt)},ue.useLayoutEffect=function(H,dt){return G.H.useLayoutEffect(H,dt)},ue.useMemo=function(H,dt){return G.H.useMemo(H,dt)},ue.useOptimistic=function(H,dt){return G.H.useOptimistic(H,dt)},ue.useReducer=function(H,dt,Q){return G.H.useReducer(H,dt,Q)},ue.useRef=function(H){return G.H.useRef(H)},ue.useState=function(H){return G.H.useState(H)},ue.useSyncExternalStore=function(H,dt,Q){return G.H.useSyncExternalStore(H,dt,Q)},ue.useTransition=function(){return G.H.useTransition()},ue.version="19.3.1",ue}var l0;function Fp(){return l0||(l0=1,ld.exports=IM()),ld.exports}var ye=Fp(),ud={exports:{}},ol={},cd={exports:{}},fd={};var u0;function BM(){return u0||(u0=1,(function(o){function e(k,rt){var W=k.length;k.push(rt);t:for(;0<W;){var Mt=W-1>>>1,Et=k[Mt];if(0<u(Et,rt))k[Mt]=rt,k[W]=Et,W=Mt;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var rt=k[0],W=k.pop();if(W!==rt){k[0]=W;t:for(var Mt=0,Et=k.length,Xt=Et>>>1;Mt<Xt;){var se=2*(Mt+1)-1,he=k[se],H=se+1,dt=k[H];if(0>u(he,W))H<Et&&0>u(dt,he)?(k[Mt]=dt,k[H]=W,Mt=H):(k[Mt]=he,k[se]=W,Mt=se);else if(H<Et&&0>u(dt,W))k[Mt]=dt,k[H]=W,Mt=H;else break t}}return rt}function u(k,rt){var W=k.sortIndex-rt.sortIndex;return W!==0?W:k.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],p=[],x=1,m=null,y=3,M=!1,b=!1,R=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function A(k){for(var rt=i(p);rt!==null;){if(rt.callback===null)r(p);else if(rt.startTime<=k)r(p),rt.sortIndex=rt.expirationTime,e(g,rt);else break;rt=i(p)}}function z(k){if(R=!1,A(k),!b)if(i(g)!==null)b=!0,O||(O=!0,nt());else{var rt=i(p);rt!==null&&ct(z,rt.startTime-k)}}var O=!1,L=-1,G=5,U=-1;function w(){return S?!0:!(o.unstable_now()-U<G)}function B(){if(S=!1,O){var k=o.unstable_now();U=k;var rt=!0;try{t:{b=!1,R&&(R=!1,N(L),L=-1),M=!0;var W=y;try{e:{for(A(k),m=i(g);m!==null&&!(m.expirationTime>k&&w());){var Mt=m.callback;if(typeof Mt=="function"){m.callback=null,y=m.priorityLevel;var Et=Mt(m.expirationTime<=k);if(k=o.unstable_now(),typeof Et=="function"){m.callback=Et,A(k),rt=!0;break e}m===i(g)&&r(g),A(k)}else r(g);m=i(g)}if(m!==null)rt=!0;else{var Xt=i(p);Xt!==null&&ct(z,Xt.startTime-k),rt=!1}}break t}finally{m=null,y=W,M=!1}rt=void 0}}finally{rt?nt():O=!1}}}var nt;if(typeof D=="function")nt=function(){D(B)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,vt=ft.port2;ft.port1.onmessage=B,nt=function(){vt.postMessage(null)}}else nt=function(){v(B,0)};function ct(k,rt){L=v(function(){k(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(k){switch(y){case 1:case 2:case 3:var rt=3;break;default:rt=y}var W=y;y=rt;try{return k()}finally{y=W}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(k,rt){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var W=y;y=k;try{return rt()}finally{y=W}},o.unstable_scheduleCallback=function(k,rt,W){var Mt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Mt+W:Mt):W=Mt,k){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=W+Et,k={id:x++,callback:rt,priorityLevel:k,startTime:W,expirationTime:Et,sortIndex:-1},W>Mt?(k.sortIndex=W,e(p,k),i(g)===null&&k===i(p)&&(R?(N(L),L=-1):R=!0,ct(z,W-Mt))):(k.sortIndex=Et,e(g,k),b||M||(b=!0,O||(O=!0,nt()))),k},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(k){var rt=y;return function(){var W=y;y=rt;try{return k.apply(this,arguments)}finally{y=W}}}})(fd)),fd}var c0;function FM(){return c0||(c0=1,cd.exports=BM()),cd.exports}var hd={exports:{}},Un={};var f0;function HM(){if(f0)return Un;f0=1;var o=Fp();function e(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(x,m,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:x,containerInfo:m,implementation:y}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.browser=function(x){return{$$typeof:f,_reason:x}},Un.createPortal=function(x,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(x,m,null,y)},Un.flushSync=function(x){var m=g.T,y=r.p;try{if(g.T=null,r.p=2,x)return x()}finally{g.T=m,r.p=y,r.d.f()}},Un.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(x,m))},Un.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},Un.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var y=m.as,M=p(y,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,R=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:R}):y==="script"&&r.d.X(x,{crossOrigin:M,integrity:b,fetchPriority:R,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);r.d.M(x,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(x)},Un.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,M=p(y,m.crossOrigin);r.d.L(x,y,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(x,m){if(typeof x=="string")if(m){var y=p(m.as,m.crossOrigin);r.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(x)},Un.requestFormReset=function(x){r.d.r(x)},Un.unstable_batchedUpdates=function(x,m){return x(m)},Un.useFormState=function(x,m,y){return g.H.useFormState(x,m,y)},Un.useFormStatus=function(){return g.H.useHostTransitionStatus()},Un.version="19.3.1",Un}var h0;function GM(){if(h0)return hd.exports;h0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=HM(),hd.exports}var d0;function VM(){if(d0)return ol;d0=1;var o=FM(),e=Fp(),i=GM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return g(l),t;if(c===s)return g(l),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=c;else{for(var _=!1,E=l.child;E;){if(E===a){_=!0,a=l,s=c;break}if(E===s){_=!0,s=l,a=c;break}E=E.sibling}if(!_){for(E=c.child;E;){if(E===a){_=!0,a=c,s=l;break}if(E===s){_=!0,s=c,a=l;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,s,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,s,l,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=y(t);return a===null||R(n,t,a.child,{foundSelf:!1}),n}function R(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&R(t,n,a.child,s))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var v=null,N=null;function D(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function A(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(v=t),!0):!1}function z(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var c=n;c;c=a(c))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,G=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Xt=Symbol.for("react.activity"),se=Symbol.for("react.legacy_hidden"),he=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),dt=Symbol.for("react.recoverable"),Q=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case ft:return"Profiler";case nt:return"StrictMode";case rt:return"Suspense";case W:return"SuspenseList";case Xt:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ct:return t.displayName||"Context";case vt:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mt:return n=t.displayName||null,n!==null?n:yt(t.type)||"Memo";case Et:n=t._payload,t=t._init;try{return yt(t(n))}catch{}}return null}var Tt=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,It=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ot=[],Pt=-1;function Bt(t){return{current:t}}function Ct(t){0>Pt||(t.current=ot[Pt],ot[Pt]=null,Pt--)}function kt(t,n){Pt++,ot[Pt]=t.current,t.current=n}var Nt=Bt(null),le=Bt(null),Ye=Bt(null),We=Bt(null);function P(t,n){switch(kt(Ye,n),kt(le,t),kt(Nt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?pv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=pv(n),t=mv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ct(Nt),kt(Nt,t)}function T(){Ct(Nt),Ct(le),Ct(Ye)}function it(t){var n=t.memoizedState;n!==null&&(Ir._currentValue=n.memoizedState,kt(We,t)),n=Nt.current;var a=mv(n,t.type);n!==a&&(kt(le,t),kt(Nt,a))}function gt(t){le.current===t&&(Ct(Nt),Ct(le)),We.current===t&&(Ct(We),Ir._currentValue=F)}var bt,pt;function Wt(t){if(bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);bt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+pt}var Ut=!1;function Jt(t,n){if(!t||Ut)return"";Ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(zt){var j=zt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(zt){j=zt}_t=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(zt){j=zt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(zt){if(zt&&j&&typeof zt.stack=="string")return[zt.stack,j.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),_=c[0],E=c[1];if(_&&E){var I=_.split(`
`),q=E.split(`
`);for(l=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;l<q.length&&!q[l].includes("DetermineComponentFrameRoot");)l++;if(s===I.length||l===q.length)for(s=I.length-1,l=q.length-1;1<=s&&0<=l&&I[s]!==q[l];)l--;for(;1<=s&&0<=l;s--,l--)if(I[s]!==q[l]){if(s!==1||l!==1)do if(s--,l--,0>l||I[s]!==q[l]){var st=`
`+I[s].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=s&&0<=l);break}}}finally{Ut=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function te(t,n){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return t.child!==n&&n!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Jt(t.type,!1);case 11:return Jt(t.type.render,!1);case 1:return Jt(t.type,!0);case 31:return Wt("Activity");case 30:return Wt("ViewTransition");default:return""}}function wt(t){try{var n="",a=null;do n+=te(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ft=Object.prototype.hasOwnProperty,re=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,Ht=o.unstable_shouldYield,fe=o.unstable_requestPaint,X=o.unstable_now,Dt=o.unstable_getCurrentPriorityLevel,Ot=o.unstable_ImmediatePriority,qt=o.unstable_UserBlockingPriority,At=o.unstable_NormalPriority,St=o.unstable_LowPriority,Qt=o.unstable_IdlePriority,ce=o.log,Ve=o.unstable_setDisableYieldValue,be=null,tn=null;function mn(t){if(typeof ce=="function"&&Ve(t),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(be,t)}catch{}}var Ln=Math.clz32?Math.clz32:bl,ea=Math.log,go=Math.LN2;function bl(t){return t>>>=0,t===0?32:31-(ea(t)/go|0)|0}var ms=256,na=262144,gs=4194304;function pi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _s(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~c,s!==0?l=pi(s):(_&=E,_!==0?l=pi(_):a||(a=E&~t,a!==0&&(l=pi(a))))):(E=s&~c,E!==0?l=pi(E):_!==0?l=pi(_):a||(a=s&~t,a!==0&&(l=pi(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function wa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Al(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Ln(a),l=1<<s;n|=t[s],a&=~l}return n}function Oc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rl(){var t=gs;return gs<<=1,(gs&62914560)===0&&(gs=4194304),t}function _o(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pc(t,n,a,s,l,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,I=t.expirationTimes,q=t.hiddenUpdates;for(a=_&~a;0<a;){var st=31-Ln(a),_t=1<<st;E[st]=0,I[st]=-1;var j=q[st];if(j!==null)for(q[st]=null,st=0;st<j.length;st++){var et=j[st];et!==null&&(et.lane&=-536870913)}a&=~_t}s!==0&&C(t,s,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function C(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ln(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Z(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ln(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function lt(t,n){var a=n&-n;return a=(a&42)!==0?1:ut(a),(a&(t.suspendedLanes|n))!==0?0:a}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function K(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rt(){var t=It.p;return t!==0?t:(t=window.event,t===void 0?32:Jv(t.type))}function Gt(t,n){var a=It.p;try{return It.p=t,n()}finally{It.p=a}}var jt=Math.random().toString(36).slice(2),Lt="__reactFiber$"+jt,Zt="__reactProps$"+jt,ae="__reactContainer$"+jt,ne="__reactEvents$"+jt,Se="__reactListeners$"+jt,Ie="__reactHandles$"+jt,Je="__reactResources$"+jt,Le="__reactMarker$"+jt,we="__reactLoad$"+jt;function ie(t){delete t[Lt],delete t[Zt],delete t[Se],delete t[Ie]}function Oe(t){var n;if(n=t[Lt])return n;for(var a=t.parentNode;a;){if(n=a[ae]||a[Lt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Nv(t);t!==null;){if(a=t[Lt])return a;t=Nv(t)}return n}t=a,a=t.parentNode}return null}function ve(t){if(t=t[Lt]||t[ae]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ni(t){var n=t[Je];return n||(n=t[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(t){t[Le]=!0}function Da(t){t[we]=void 0}var Ze=new Set,Bn={};function un(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(Bn[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var On=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tr={},Bi={};function $x(t){return Ft.call(Bi,t)?!0:Ft.call(tr,t)?!1:On.test(t)?Bi[t]=!0:(tr[t]=!0,!1)}var Ue=!1;function tm(){var t=Ue;return Ue=!1,t}function Cl(t,n,a){if($x(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function wl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ii(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function em(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tS(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function zc(t){if(!t._valueTracker){var n=em(t)?"checked":"value";t._valueTracker=tS(t,n,""+t[n])}}function nm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=em(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var eS=/[\n"\\]/g;function mi(t){return t.replace(eS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ic(t,n,a,s,l,c,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ii(n)):t.value!==""+ii(n)&&(t.value=""+ii(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Bc(t,ii(t.value)):Bc(t,ii(n)):a!=null?Bc(t,ii(a)):s!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ii(E):t.removeAttribute("name")}function im(t,n,a,s,l,c,_,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){zc(t);return}a=a!=null?""+ii(a):"",n=n!=null?""+ii(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),zc(t)}function Bc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function er(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ii(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function am(t,n,a){if(n!=null&&(n=""+ii(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ii(a):""}function sm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Tt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ii(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),zc(t)}function nr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var nS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||nS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function om(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ue=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(rm(t,l,s),Ue=!0)}else for(var c in n)n.hasOwnProperty(c)&&rm(t,c,n[c])}function Fc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return aS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Hc=null;function Gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ir=null,ar=null;function lm(t){var n=ve(t);if(n&&(t=n.stateNode)){var a=t[Zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ic(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[Zt]||null;if(!l)throw Error(r(90));Ic(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&nm(s)}break t;case"textarea":am(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&er(t,!!a.multiple,n,!1)}}}var Vc=!1;function um(t,n,a){if(Vc)return t(n,a);Vc=!0;try{var s=t(n);return s}finally{if(Vc=!1,(ir!==null||ar!==null)&&(Du(),ir&&(n=ir,t=ar,ar=ir=null,lm(n),t)))for(n=0;n<t.length;n++)lm(t[n])}}function vo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Zt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(aa)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Xc=!1}var Ua=null,kc=null,Ul=null;function cm(){if(Ul)return Ul;var t,n=kc,a=n.length,s,l="value"in Ua?Ua.value:Ua.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===l[c-s];s++);return Ul=l.slice(t,1<s?1-s:void 0)}function Nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function fm(){return!1}function Fn(t){function n(a,s,l,c,_){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ll:fm,this.isPropagationStopped=fm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Fn(Na),So=L({},Na,{view:0,detail:0}),sS=Fn(So),jc,Yc,yo,Pl=L({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(jc=t.screenX-yo.screenX,Yc=t.screenY-yo.screenY):Yc=jc=0,yo=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),hm=Fn(Pl),rS=L({},Pl,{dataTransfer:0}),oS=Fn(rS),lS=L({},So,{relatedTarget:0}),qc=Fn(lS),uS=L({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=Fn(uS),fS=L({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hS=Fn(fS),dS=L({},Na,{data:0}),dm=Fn(dS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gS[t])?!!n[t]:!1}function Wc(){return _S}var vS=L({},So,{key:function(t){if(t.key){var n=pS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xS=Fn(vS),SS=L({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Fn(SS),yS=L({},Na,{submitter:0}),MS=Fn(yS),ES=L({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),TS=Fn(ES),bS=L({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),AS=Fn(bS),RS=L({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Fn(RS),wS=L({},Na,{newState:0,oldState:0,source:0}),DS=Fn(wS),US=[9,13,27,32],Zc=aa&&"CompositionEvent"in window,Mo=null;aa&&"documentMode"in document&&(Mo=document.documentMode);var NS=aa&&"TextEvent"in window&&!Mo,mm=aa&&(!Zc||Mo&&8<Mo&&11>=Mo),gm=" ",_m=!1;function vm(t,n){switch(t){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function LS(t,n){switch(t){case"compositionend":return xm(n);case"keypress":return n.which!==32?null:(_m=!0,gm);case"textInput":return t=n.data,t===gm&&_m?null:t;default:return null}}function OS(t,n){if(sr)return t==="compositionend"||!Zc&&vm(t,n)?(t=cm(),Ul=kc=Ua=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mm&&n.locale!=="ko"?null:n.data;default:return null}}var PS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!PS[t.type]:n==="textarea"}function ym(t,n,a,s){ir?ar?ar.push(s):ar=[s]:ir=s,n=zu(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Eo=null,To=null;function zS(t){lv(t,0)}function zl(t){var n=gn(t);if(nm(n))return t}function Mm(t,n){if(t==="change")return n}var Em=!1;if(aa){var Kc;if(aa){var Qc="oninput"in document;if(!Qc){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),Qc=typeof Tm.oninput=="function"}Kc=Qc}else Kc=!1;Em=Kc&&(!document.documentMode||9<document.documentMode)}function bm(){Eo&&(Eo.detachEvent("onpropertychange",Am),To=Eo=null)}function Am(t){if(t.propertyName==="value"&&zl(To)){var n=[];ym(n,To,t,Gc(t)),um(zS,n)}}function IS(t,n,a){t==="focusin"?(bm(),Eo=n,To=a,Eo.attachEvent("onpropertychange",Am)):t==="focusout"&&bm()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(To)}function FS(t,n){if(t==="click")return zl(n)}function HS(t,n){if(t==="input"||t==="change")return zl(n)}function GS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:GS;function bo(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Ft.call(n,l)||!ai(t[l],n[l]))return!1}return!0}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,n){var a=Rm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rm(a)}}function wm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jc(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var VS=aa&&"documentMode"in document&&11>=document.documentMode,rr=null,tf=null,Ao=null,ef=!1;function Um(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ef||rr==null||rr!==Jc(s)||(s=rr,"selectionStart"in s&&$c(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ao&&bo(Ao,s)||(Ao=s,s=zu(tf,"onSelect"),0<s.length&&(n=new Ol("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=rr)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var or={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},nf={},Nm={};aa&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Ss(t){if(nf[t])return nf[t];if(!or[t])return t;var n=or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Nm)return nf[t]=n[a];return t}var Lm=Ss("animationend"),Om=Ss("animationiteration"),Pm=Ss("animationstart"),XS=Ss("transitionrun"),kS=Ss("transitionstart"),jS=Ss("transitioncancel"),zm=Ss("transitionend"),Im=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function Ai(t,n){Im.set(t,n),un(n,[t])}var YS=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Di.identifierPrefix;var a=YS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Bm(t){if(t==null||typeof t=="string")return t;var n=null,a=Rr;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ra(t,n){return t=Bm(t),n=Bm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],lr=0,sf=0;function Bl(){for(var t=lr,n=sf=lr=0;n<t;){var a=gi[n];gi[n++]=null;var s=gi[n];gi[n++]=null;var l=gi[n];gi[n++]=null;var c=gi[n];if(gi[n++]=null,s!==null&&l!==null){var _=s.pending;_===null?l.next=l:(l.next=_.next,_.next=l),s.pending=l}c!==0&&Fm(a,l,c)}}function Fl(t,n,a,s){gi[lr++]=t,gi[lr++]=n,gi[lr++]=a,gi[lr++]=s,sf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function rf(t,n,a,s){return Fl(t,n,a,s),Hl(t)}function ys(t,n){return Fl(t,null,null,n),Hl(t)}function Fm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Ln(a),t=c.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),c):null}function Hl(t){if(50<Wo)throw Wo=0,wu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function qS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new qS(t,n,a,s)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Gl(t,n,a,s,l,c){var _=0;if(s=t,typeof s=="function")of(s)&&(_=1);else if(typeof s=="string")_=yM(t,a,Nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Xt:return t=jn(31,a,n,l),t.elementType=Xt,t.lanes=c,t;case B:return Ms(a.children,l,c,n);case nt:_=8,l|=24;break;case ft:return t=jn(12,a,n,l|2),t.elementType=ft,t.lanes=c,t;case rt:return t=jn(13,a,n,l),t.elementType=rt,t.lanes=c,t;case W:return t=jn(19,a,n,l),t.elementType=W,t.lanes=c,t;case se:case H:return t=l|32,t=jn(30,a,n,t),t.elementType=H,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ct:_=10;break t;case vt:_=9;break t;case k:_=11;break t;case Mt:_=14;break t;case Et:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(_,a,n,l),n.elementType=t,n.type=s,n.lanes=c,n}function Ms(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function lf(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Gm(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function uf(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vm=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var a=Vm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:wt(n)},Vm.set(t,n),n)}return{value:t,source:n,stack:wt(n)}}var cr=[],fr=0,Vl=null,Ro=0,vi=[],xi=0,La=null,Hi=1,Gi="";function la(t,n){cr[fr++]=Ro,cr[fr++]=Vl,Vl=t,Ro=n}function Xm(t,n,a){vi[xi++]=Hi,vi[xi++]=Gi,vi[xi++]=La,La=t;var s=Hi;t=Gi;var l=32-Ln(s)-1;s&=~(1<<l),a+=1;var c=32-Ln(n)+l;if(30<c){var _=l-l%5;c=(s&(1<<_)-1).toString(32),s>>=_,l-=_,Hi=1<<32-Ln(n)+l|a<<l|s,Gi=c+t}else Hi=1<<c|a<<l|s,Gi=t}function Xl(t){t.return!==null&&(la(t,1),Xm(t,1,0))}function cf(t){for(;t===Vl;)Vl=cr[--fr],cr[fr]=null,Ro=cr[--fr],cr[fr]=null;for(;t===La;)La=vi[--xi],vi[xi]=null,Gi=vi[--xi],vi[xi]=null,Hi=vi[--xi],vi[xi]=null}function km(t,n){vi[xi++]=Hi,vi[xi++]=Gi,vi[xi++]=La,Hi=n.id,Gi=n.overflow,La=t}var Mn=null,Ke=null,xe=!1,Oa=null,Si=!1,ff=Error(r(519));function Pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(_i(n,t)),ff}function jm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Lt]=t,n[Zt]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)Ee(Ko[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),im(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),sm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||hv(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||Pa(t,!0)}function kl(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Mn=Mn.return}}function hr(t){if(t!==Mn)return!1;if(!xe)return kl(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gh(t.type,t.memoizedProps)),a=!a),a&&Ke&&Pa(t),kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Uv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Uv(t)}else n===27?(n=Ke,Qa(t.type)?(t=Kh,Kh=null,Ke=t):Ke=n):Ke=Mn?Mi(t.stateNode.nextSibling):null;return!0}function Es(){Ke=Mn=null,xe=!1}function hf(){var t=Oa;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Oa=null),t}function Co(t){Oa===null?Oa=[t]:Oa.push(t)}var df=Bt(null),Ts=null,ua=null;function za(t,n,a){kt(df,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=df.current,Ct(df)}function jl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function pf(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var _=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var I=0;I<n.length;I++)if(E.context===n[I]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),jl(c.return,a,t),s||(_=null);break t}c=E.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(r(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),jl(_,a,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,_=l.alternate,_!==null&&(_.lanes|=a),jl(l.return,a,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function bs(t,n,a,s){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=l.type;ai(l.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(l===We.current){if(_=l.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ir):t=[Ir])}l=l.return}return t!==null&&pf(n,t,a,s),n.flags|=262144,t!==null}function Yl(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Ts=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Ym(Ts,t)}function ql(t,n){return Ts===null&&As(t),Ym(t,n)}function Ym(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(r(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var WS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ZS=o.unstable_scheduleCallback,KS=o.unstable_NormalPriority,cn={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new WS,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&ZS(KS,function(){t.controller.abort()})}function qm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Do=null;function QS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,gf=0,Rs=0,dr=null;function JS(t,n){if(Uo===null){var a=Uo=[];gf=0,Rs=Nh(),dr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return gf++,n.then(Wm,Wm),n}function Wm(){if(--gf===0&&(Do=null,Uo!==null)){dr!==null&&(dr.status="fulfilled");var t=Uo;Uo=null,Rs=0,dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $S(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var Zm=xt.S;xt.S=function(t,n){if(G_=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(t,n),Do!==null)for(var a=Ur;a!==null;)qm(a,Do),a=a.next;if(a=t.types,a!==null){for(var s=Ur;s!==null;)qm(s,a),s=s.next;if(Rs!==0){s=Do,s===null&&(s=Do=[]);for(var l=0;l<a.length;l++){var c=a[l];s.indexOf(c)===-1&&s.push(c)}}}Zm!==null&&Zm(t,n)};var Cs=Bt(null);function _f(){var t=Cs.current;return t!==null?t:qe.pooledCache}function Wl(t,n){n===null?kt(Cs,Cs.current):kt(Cs,n.pool)}function Km(){var t=_f();return t===null?null:{parent:cn._currentValue,pool:t}}var pr=Error(r(460)),vf=Error(r(474)),Zl=Error(r(542)),Kl={then:function(){}};function Qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tg(t),t}throw Ds=n,pr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,pr):a}}var Ds=null;function $m(){if(Ds===null)throw Error(r(459));var t=Ds;return Ds=null,t}function tg(t){if(t===pr||t===Zl)throw Error(r(483))}var mr=null,No=0;function Ql(t){var n=No;return No+=1,mr===null&&(mr=[]),Jm(mr,t,n)}function Ia(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jl(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function eg(t){function n(Y,V){if(t){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key===null?V.set(Y.index,Y):V.set(Y.key,Y),Y=Y.sibling;return V}function l(Y,V){return Y=oa(Y,V),Y.index=0,Y.sibling=null,Y}function c(Y,V,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=2,V):J):(Y.flags|=134217730,V)):(Y.flags|=1048576,V)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,V,J,mt){return V===null||V.tag!==6?(V=lf(J,Y.mode,mt),V.return=Y,V):(V=l(V,J),V.return=Y,V)}function I(Y,V,J,mt){var Yt=J.type;return Yt===B?(Y=st(Y,V,J.props.children,mt,J.key),Ia(Y,J),Y):V!==null&&(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===Et&&ws(Yt)===V.type)?(V=l(V,J.props),Ia(V,J),V.return=Y,V):(V=Gl(J.type,J.key,J.props,null,Y.mode,mt),Ia(V,J),V.return=Y,V)}function q(Y,V,J,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=uf(J,Y.mode,mt),V.return=Y,V):(V=l(V,J.children||[]),V.return=Y,V)}function st(Y,V,J,mt,Yt){return V===null||V.tag!==7?(V=Ms(J,Y.mode,mt,Yt),V.return=Y,V):(V=l(V,J),V.return=Y,V)}function _t(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=lf(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case U:return J=Gl(V.type,V.key,V.props,null,Y.mode,J),Ia(J,V),J.return=Y,J;case w:return V=uf(V,Y.mode,J),V.return=Y,V;case Et:return V=ws(V),_t(Y,V,J)}if(Tt(V)||at(V))return V=Ms(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return _t(Y,Ql(V),J);if(V.$$typeof===ct)return _t(Y,ql(Y,V),J);Jl(Y,V)}return null}function j(Y,V,J,mt){var Yt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Yt!==null?null:E(Y,V,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case U:return J.key===Yt?I(Y,V,J,mt):null;case w:return J.key===Yt?q(Y,V,J,mt):null;case Et:return J=ws(J),j(Y,V,J,mt)}if(Tt(J)||at(J))return Yt!==null?null:st(Y,V,J,mt,null);if(typeof J.then=="function")return j(Y,V,Ql(J),mt);if(J.$$typeof===ct)return j(Y,V,ql(Y,J),mt);Jl(Y,J)}return null}function et(Y,V,J,mt,Yt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(J)||null,E(V,Y,""+mt,Yt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case U:return Y=Y.get(mt.key===null?J:mt.key)||null,I(V,Y,mt,Yt);case w:return Y=Y.get(mt.key===null?J:mt.key)||null,q(V,Y,mt,Yt);case Et:return mt=ws(mt),et(Y,V,J,mt,Yt)}if(Tt(mt)||at(mt))return Y=Y.get(J)||null,st(V,Y,mt,Yt,null);if(typeof mt.then=="function")return et(Y,V,J,Ql(mt),Yt);if(mt.$$typeof===ct)return et(Y,V,J,ql(V,mt),Yt);Jl(V,mt)}return null}function zt(Y,V,J,mt){for(var Yt=null,Re=null,ee=V,oe=V=0,dn=null;ee!==null&&oe<J.length;oe++){ee.index>oe?(dn=ee,ee=null):dn=ee.sibling;var Ce=j(Y,ee,J[oe],mt);if(Ce===null){ee===null&&(ee=dn);break}t&&ee&&Ce.alternate===null&&n(Y,ee),V=c(Ce,V,oe),Re===null?Yt=Ce:Re.sibling=Ce,Re=Ce,ee=dn}if(oe===J.length)return a(Y,ee),xe&&la(Y,oe),Yt;if(ee===null){for(;oe<J.length;oe++)ee=_t(Y,J[oe],mt),ee!==null&&(V=c(ee,V,oe),Re===null?Yt=ee:Re.sibling=ee,Re=ee);return xe&&la(Y,oe),Yt}for(ee=s(ee);oe<J.length;oe++)dn=et(ee,Y,oe,J[oe],mt),dn!==null&&(t&&(Ce=dn.alternate,Ce!==null&&ee.delete(Ce.key===null?oe:Ce.key)),V=c(dn,V,oe),Re===null?Yt=dn:Re.sibling=dn,Re=dn);return t&&ee.forEach(function(ns){return n(Y,ns)}),xe&&la(Y,oe),Yt}function Kt(Y,V,J,mt){if(J==null)throw Error(r(151));for(var Yt=null,Re=null,ee=V,oe=V=0,dn=null,Ce=J.next();ee!==null&&!Ce.done;oe++,Ce=J.next()){ee.index>oe?(dn=ee,ee=null):dn=ee.sibling;var ns=j(Y,ee,Ce.value,mt);if(ns===null){ee===null&&(ee=dn);break}t&&ee&&ns.alternate===null&&n(Y,ee),V=c(ns,V,oe),Re===null?Yt=ns:Re.sibling=ns,Re=ns,ee=dn}if(Ce.done)return a(Y,ee),xe&&la(Y,oe),Yt;if(ee===null){for(;!Ce.done;oe++,Ce=J.next())Ce=_t(Y,Ce.value,mt),Ce!==null&&(V=c(Ce,V,oe),Re===null?Yt=Ce:Re.sibling=Ce,Re=Ce);return xe&&la(Y,oe),Yt}for(ee=s(ee);!Ce.done;oe++,Ce=J.next())Ce=et(ee,Y,oe,Ce.value,mt),Ce!==null&&(t&&(dn=Ce.alternate,dn!==null&&ee.delete(dn.key===null?oe:dn.key)),V=c(Ce,V,oe),Re===null?Yt=Ce:Re.sibling=Ce,Re=Ce);return t&&ee.forEach(function(LM){return n(Y,LM)}),xe&&la(Y,oe),Yt}function pe(Y,V,J,mt){if(typeof J=="object"&&J!==null&&J.type===B&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case U:t:{for(var Yt=J.key;V!==null;){if(V.key===Yt){if(Yt=J.type,Yt===B){if(V.tag===7){a(Y,V.sibling),mt=l(V,J.props.children),Ia(mt,J),mt.return=Y,Y=mt;break t}}else if(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===Et&&ws(Yt)===V.type){a(Y,V.sibling),mt=l(V,J.props),Ia(mt,J),mt.return=Y,Y=mt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}J.type===B?(mt=Ms(J.props.children,Y.mode,mt,J.key),Ia(mt,J),mt.return=Y,Y=mt):(mt=Gl(J.type,J.key,J.props,null,Y.mode,mt),Ia(mt,J),mt.return=Y,Y=mt)}return _(Y);case w:t:{for(Yt=J.key;V!==null;){if(V.key===Yt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Y,V.sibling),mt=l(V,J.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}mt=uf(J,Y.mode,mt),mt.return=Y,Y=mt}return _(Y);case Et:return J=ws(J),pe(Y,V,J,mt)}if(Tt(J))return zt(Y,V,J,mt);if(at(J)){if(Yt=at(J),typeof Yt!="function")throw Error(r(150));return J=Yt.call(J),Kt(Y,V,J,mt)}if(typeof J.then=="function")return pe(Y,V,Ql(J),mt);if(J.$$typeof===ct)return pe(Y,V,ql(Y,J),mt);Jl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Y,V.sibling),mt=l(V,J),mt.return=Y,Y=mt):(a(Y,V),mt=lf(J,Y.mode,mt),mt.return=Y,Y=mt),_(Y)):a(Y,V)}return function(Y,V,J,mt){try{No=0;var Yt=pe(Y,V,J,mt);return mr=null,Yt}catch(ee){if(ee===pr||ee===Zl)throw ee;var Re=jn(29,ee,null,Y.mode);return Re.lanes=mt,Re.return=Y,Re}}}var Us=eg(!0),ng=eg(!1),Ba=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Hl(t),Fm(t,null,a),n}return Fl(t,s,n,a),Hl(t)}function Lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}function yf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mf=!1;function Oo(){if(Mf){var t=dr;if(t!==null)throw t}}function Po(t,n,a,s){Mf=!1;var l=t.updateQueue;Ba=!1;var c=l.firstBaseUpdate,_=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var I=E,q=I.next;I.next=null,_===null?c=q:_.next=q,_=I;var st=t.alternate;st!==null&&(st=st.updateQueue,E=st.lastBaseUpdate,E!==_&&(E===null?st.firstBaseUpdate=q:E.next=q,st.lastBaseUpdate=I))}if(c!==null){var _t=l.baseState;_=0,st=q=I=null,E=c;do{var j=E.lane&-536870913,et=j!==E.lane;if(et?(Ae&j)===j:(s&j)===j){j!==0&&j===Rs&&(Mf=!0),st!==null&&(st=st.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var zt=t,Kt=E;j=n;var pe=a;switch(Kt.tag){case 1:if(zt=Kt.payload,typeof zt=="function"){_t=zt.call(pe,_t,j);break t}_t=zt;break t;case 3:zt.flags=zt.flags&-65537|128;case 0:if(zt=Kt.payload,j=typeof zt=="function"?zt.call(pe,_t,j):zt,j==null)break t;_t=L({},_t,j);break t;case 2:Ba=!0}}j=E.callback,j!==null&&(t.flags|=64,et&&(t.flags|=8192),et=l.callbacks,et===null?l.callbacks=[j]:et.push(j))}else et={lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},st===null?(q=st=et,I=_t):st=st.next=et,_|=j;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;et=E,E=et.next,et.next=null,l.lastBaseUpdate=et,l.shared.pending=null}}while(!0);st===null&&(I=_t),l.baseState=I,l.firstBaseUpdate=q,l.lastBaseUpdate=st,c===null&&(l.shared.lanes=0),qa|=_,t.lanes=_,t.memoizedState=_t}}function ig(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ag(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ig(a[t],n)}var Ga=Bt(null),$l=Bt(0);function sg(t,n){t=ma,kt($l,t),kt(Ga,n),ma=t|n.baseLanes}function Ef(){kt($l,ma),kt(Ga,Ga.current)}function Tf(){ma=$l.current,Ct(Ga),Ct($l)}var Rn=Bt(null),Pn=null;function Va(t){var n=t.alternate;kt(Cn,Cn.current&1),kt(Rn,t),Pn===null&&(n===null||Ga.current!==null||n.memoizedState!==null)&&(Pn=t)}function bf(t){kt(Cn,Cn.current),kt(Rn,t),Pn===null&&(Pn=t)}function rg(t){t.tag===22?(kt(Cn,Cn.current),kt(Rn,t),Pn===null&&(Pn=t)):Xa()}function Xa(){kt(Cn,Cn.current),kt(Rn,Rn.current)}function si(t){Ct(Rn),Pn===t&&(Pn=null),Ct(Cn)}var Cn=Bt(0);function zo(t,n){kt(Rn,Rn.current),kt(Cn,n)}function Af(t){Ct(Cn),Ct(Rn),Pn===t&&(Pn=null)}function tu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wh(a)||Zh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,de=null,Xe=null,fn=null,eu=!1,gr=!1,Ns=!1,nu=0,Io=0,_r=null,ty=0;function an(){throw Error(r(321))}function Rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Cf(t,n,a,s,l,c){return fa=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?Xg:kg,Ns=!1,c=a(s,l),Ns=!1,gr&&(c=lg(n,a,s,l)),og(t),c}function og(t){xt.H=uu;var n=Xe!==null&&Xe.next!==null;if(fa=0,fn=Xe=de=null,eu=!1,Io=0,_r=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&Yl(t)&&(hn=!0))}function lg(t,n,a,s){de=t;var l=0;do{if(gr&&(_r=null),Io=0,gr=!1,25<=l)throw Error(r(301));if(l+=1,fn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}xt.H=ly,c=n(a,s)}while(gr);return c}function ey(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(de.flags|=1024),n}function wf(){var t=nu!==0;return nu=0,t}function Df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uf(t){if(eu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}eu=!1}fa=0,fn=Xe=de=null,gr=!1,Io=nu=0,_r=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?de.memoizedState=fn=t:fn=fn.next=t,fn}function on(){if(Xe===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=fn===null?de.memoizedState:fn.next;if(n!==null)fn=n,Xe=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},fn===null?de.memoizedState=fn=t:fn=fn.next=t}return fn}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=Io;return Io+=1,_r===null&&(_r=[]),t=Jm(_r,t,n),n=de,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?Xg:kg),t}function au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===dt)return;if(t.$$typeof===ct)return An(t)}throw Error(r(438,String(t)))}function Nf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=iu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=he;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function su(t){var n=on();return Lf(n,Xe,t)}function Lf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,c=s.pending;if(c!==null){if(l!==null){var _=l.next;l.next=c.next,c.next=_}n.baseQueue=l=c,s.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=_=null,I=null,q=n,st=!1;do{var _t=q.lane&-536870913;if(_t!==q.lane?(Ae&_t)===_t:(fa&_t)===_t){var j=q.revertLane;if(j===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),_t===Rs&&(st=!0);else if((fa&j)===j){q=q.next,j===Rs&&(st=!0);continue}else _t={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(E=I=_t,_=c):I=I.next=_t,de.lanes|=j,qa|=j;_t=q.action,Ns&&a(c,_t),c=q.hasEagerState?q.eagerState:a(c,_t)}else j={lane:_t,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(E=I=j,_=c):I=I.next=j,de.lanes|=_t,qa|=_t;q=q.next}while(q!==null&&q!==n);if(I===null?_=c:I.next=E,!ai(c,t.memoizedState)&&(hn=!0,st&&(a=dr,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=I,s.lastRenderedState=c}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Of(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var _=l=l.next;do c=t(c,_.action),_=_.next;while(_!==l);ai(c,n.memoizedState)||(hn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function ug(t,n,a){var s=de,l=on(),c=xe;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ai((Xe||l).memoizedState,a);if(_&&(l.memoizedState=a,hn=!0),l=l.queue,If(hg.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||_||fn!==null&&(fn.memoizedState.tag&1)!==0,vr(t?9:8,{destroy:void 0},fg.bind(null,s,l,a,n),null),t){if(s.flags|=2048,qe===null)throw Error(r(349));c||(fa&127)!==0||cg(s,n,a)}return a}function cg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=iu(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fg(t,n,a,s){n.value=a,n.getSnapshot=s,dg(n)&&pg(t)}function hg(t,n,a){return a(function(){dg(n)&&pg(t)})}function dg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function pg(t){var n=ys(t,2);n!==null&&Zn(n,t,2)}function Pf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Ns){mn(!0);try{a()}finally{mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function mg(t,n,a,s){return t.baseState=a,Lf(t,Xe,typeof s=="function"?s:ha)}function ny(t,n,a,s,l){if(lu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};xt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,gg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function gg(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var c=xt.T,_={};_.types=c!==null?c.types:null,xt.T=_;try{var E=a(l,s),I=xt.S;I!==null&&I(_,E),_g(t,n,E)}catch(q){zf(t,n,q)}finally{c!==null&&_.types!==null&&(c.types=_.types),xt.T=c}}else try{c=a(l,s),_g(t,n,c)}catch(q){zf(t,n,q)}}function _g(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vg(t,n,s)},function(s){return zf(t,n,s)}):vg(t,n,a)}function vg(t,n,a){n.status="fulfilled",n.value=a,xg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gg(t,a)))}function zf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xg(n),n=n.next;while(n!==s)}t.action=null}function xg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sg(t,n){return n}function yg(t,n){if(xe){var a=qe.formState;if(a!==null){t:{var s=de;if(xe){if(Ke){e:{for(var l=Ke,c=Si;l.nodeType!==8;){if(!c){l=null;break e}if(l=Mi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ke=Mi(l.nextSibling),s=l.data==="F!";break t}}Pa(s)}s=!1}s&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sg,lastRenderedState:n},a.queue=s,a=Hg.bind(null,de,s),s.dispatch=a,s=Pf(!1),c=Vf.bind(null,de,!1,s.queue),s=Hn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=ny.bind(null,de,l,c,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mg(t){var n=on();return Eg(n,Xe,t)}function Eg(t,n,a){if(n=Lf(t,n,Sg)[0],t=su(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Bo(n)}catch(_){throw _===pr?Zl:_}else s=n;n=on();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(de.flags|=2048,vr(9,{destroy:void 0},iy.bind(null,l,a),null)),[s,c,t]}function iy(t,n){t.action=n}function Tg(t){var n=on(),a=Xe;if(a!==null)return Eg(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function vr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=iu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function bg(){return on().memoizedState}function ru(t,n,a,s){var l=Hn();de.flags|=t,l.memoizedState=vr(1|n,{destroy:void 0},a,s===void 0?null:s)}function ou(t,n,a,s){var l=on();s=s===void 0?null:s;var c=l.memoizedState.inst;Xe!==null&&s!==null&&Rf(s,Xe.memoizedState.deps)?l.memoizedState=vr(n,c,a,s):(de.flags|=t,l.memoizedState=vr(1|n,c,a,s))}function Ag(t,n){ru(8390656,8,t,n)}function If(t,n){ou(2048,8,t,n)}function ay(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=iu(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Rg(t){var n=on().memoizedState;return ay({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Cg(t,n){return ou(4,2,t,n)}function wg(t,n){return ou(4,4,t,n)}function Dg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ug(t,n,a){a=a!=null?a.concat([t]):null,ou(4,4,Dg.bind(null,n,t),a)}function Bf(){}function Ng(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Rf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Rf(n,s[1]))return s[0];if(s=t(),Ns){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s}function Ff(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=X_(),de.lanes|=t,qa|=t,a)}function Og(t,n,a,s){return ai(a,n)?a:Ga.current!==null?(t=Ff(t,a,s),ai(t,n)||(hn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Ae&261930)===0?(hn=!0,t.memoizedState=a):(t=X_(),de.lanes|=t,qa|=t,n)}function Pg(t,n,a,s,l){var c=It.p;It.p=c!==0&&8>c?c:8;var _=xt.T,E={};E.types=_!==null?_.types:null,xt.T=E,Vf(t,!1,n,a);try{var I=l(),q=xt.S;if(q!==null&&q(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var st=$S(I,s);Fo(t,n,st,ui(t))}else Fo(t,n,s,ui(t))}catch(_t){Fo(t,n,{then:function(){},status:"rejected",reason:_t},ui())}finally{It.p=c,_!==null&&E.types!==null&&(_.types=E.types),xt.T=_}}function sy(){}function Hf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=zg(t).queue;Pg(t,l,n,F,a===null?sy:function(){return Ig(t),a(s)})}function zg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:F},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ig(t){var n=zg(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},ui())}function Gf(){return An(Ir)}function Bg(){return on().memoizedState}function Fg(){return on().memoizedState}function ry(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Fa(a);var s=Ha(n,t,a);s!==null&&(Zn(s,n,a),Lo(s,n,a)),n={cache:mf()},t.payload=n;return}n=n.return}}function oy(t,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lu(t)?Gg(n,a):(a=rf(t,n,a,s),a!==null&&(Zn(a,t,s),Vg(a,n,s)))}function Hg(t,n,a){var s=ui();Fo(t,n,a,s)}function Fo(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lu(t))Gg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,E=c(_,a);if(l.hasEagerState=!0,l.eagerState=E,ai(E,_))return Fl(t,n,l,0),qe===null&&Bl(),!1}catch{}if(a=rf(t,n,l,s),a!==null)return Zn(a,t,s),Vg(a,n,s),!0}return!1}function Vf(t,n,a,s){if(s={lane:2,revertLane:Nh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},lu(t)){if(n)throw Error(r(479))}else n=rf(t,a,s,2),n!==null&&Zn(n,t,2)}function lu(t){var n=t.alternate;return t===de||n!==null&&n===de}function Gg(t,n){gr=eu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}var uu={readContext:An,use:au,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Xg={readContext:An,use:au,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Ag,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ru(4194308,4,Dg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ru(4194308,4,t,n)},useInsertionEffect:function(t,n){ru(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var s=t();if(Ns){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Hn();if(a!==void 0){var l=a(n);if(Ns){mn(!0);try{a(n)}finally{mn(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=oy.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pf(t);var n=t.queue,a=Hg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bf,useDeferredValue:function(t,n){var a=Hn();return Ff(a,t,n)},useTransition:function(){var t=Pf(!1);return t=Pg.bind(null,de,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,l=Hn();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Ae&127)!==0||cg(s,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Ag(hg.bind(null,s,c,t),[t]),s.flags|=2048,vr(9,{destroy:void 0},fg.bind(null,s,c,a,n),null),a},useId:function(){var t=Hn(),n=qe.identifierPrefix;if(xe){var a=Gi,s=Hi;a=(s&~(1<<32-Ln(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=nu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ty++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gf,useFormState:yg,useActionState:yg,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vf.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nf,useCacheRefresh:function(){return Hn().memoizedState=ry.bind(null,de)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},kg={readContext:An,use:au,useCallback:Ng,useContext:An,useEffect:If,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Lg,useReducer:su,useRef:bg,useState:function(){return su(ha)},useDebugValue:Bf,useDeferredValue:function(t,n){var a=on();return Og(a,Xe.memoizedState,t,n)},useTransition:function(){var t=su(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:ug,useId:Bg,useHostTransitionStatus:Gf,useFormState:Mg,useActionState:Mg,useOptimistic:function(t,n){var a=on();return mg(a,Xe,t,n)},useMemoCache:Nf,useCacheRefresh:Fg,useEffectEvent:Rg},ly={readContext:An,use:au,useCallback:Ng,useContext:An,useEffect:If,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Lg,useReducer:Of,useRef:bg,useState:function(){return Of(ha)},useDebugValue:Bf,useDeferredValue:function(t,n){var a=on();return Xe===null?Ff(a,t,n):Og(a,Xe.memoizedState,t,n)},useTransition:function(){var t=Of(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:ug,useId:Bg,useHostTransitionStatus:Gf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t,n){var a=on();return Xe!==null?mg(a,Xe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:Fg,useEffectEvent:Rg};function Xf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ui(),l=Fa(s);l.payload=n,a!=null&&(l.callback=a),n=Ha(t,l,s),n!==null&&(Zn(n,t,s),Lo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ui(),l=Fa(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ha(t,l,s),n!==null&&(Zn(n,t,s),Lo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),s=Fa(a);s.tag=2,n!=null&&(s.callback=n),n=Ha(t,s,a),n!==null&&(Zn(n,t,a),Lo(n,t,a))}};function jg(t,n,a,s,l,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,_):n.prototype&&n.prototype.isPureReactComponent?!bo(a,s)||!bo(l,c):!0}function Yg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function qg(t){Il(t)}function Wg(t){console.error(t)}function Zg(t){Il(t)}function cu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Kg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function jf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){cu(t,n)},a}function Qg(t){return t=Fa(t),t.tag=3,t}function Jg(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=s.value;t.payload=function(){return l(c)},t.callback=function(){Kg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Kg(n,a,s),typeof l!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function uy(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&bs(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Uu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===Kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),wh(t,s,l)),!1;case 22:return a.flags|=65536,s===Kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),wh(t,s,l)),!1}throw Error(r(435,a.tag))}return wh(t,s,l),Uu(),!1}if(xe)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==ff&&(t=Error(r(422),{cause:s}),Co(_i(t,a)))):(s!==ff&&(n=Error(r(423),{cause:s}),Co(_i(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=_i(s,a),l=jf(t.stateNode,s,l),yf(t,l),sn!==4&&(sn=2)),!1;var c=Error(r(520),{cause:s});if(c=_i(c,a),qo===null?qo=[c]:qo.push(c),sn!==4&&(sn=2),n===null)return!0;s=_i(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=jf(a.stateNode,s,t),yf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Wa===null||!Wa.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Qg(l),Jg(l,t,a,s),yf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Yf=Error(r(461)),hn=!1;function _n(t,n,a,s){n.child=t===null?ng(n,null,a,s):Us(n,t.child,a,s)}function $g(t,n,a,s,l){a=a.render;var c=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return As(n),s=Cf(t,n,a,_,c,l),E=wf(),t!==null&&!hn?(Df(t,n,l),da(t,n,l)):(xe&&E&&Xl(n),n.flags|=1,_n(t,n,s,l),n.child)}function t_(t,n,a,s,l){if(t===null){var c=a.type;return typeof c=="function"&&!of(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,e_(t,n,c,s,l)):(t=Gl(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!th(t,l)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(_,s)&&t.ref===n.ref)return da(t,n,l)}return n.flags|=1,t=oa(c,s),t.ref=n.ref,t.return=n,n.child=t}function e_(t,n,a,s,l){if(t!==null){var c=t.memoizedProps;if(bo(c,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=c,th(t,l))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,da(t,n,l)}return qf(t,n,a,s,l)}function n_(t,n,a,s){var l=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~c}else s=0,n.child=null;return i_(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,c!==null?c.cachePool:null),c!==null?sg(n,c):Ef(),rg(n);else return s=n.lanes=536870912,i_(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Wl(n,c.cachePool),sg(n,c),Xa(),n.memoizedState=null):(t!==null&&Wl(n,null),Ef(),Xa());return _n(t,n,l,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function i_(t,n,a,s,l){var c=_f();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Wl(n,null),Ef(),rg(n),t!==null&&bs(t,n,s,!0),n.childLanes=l,null}function fu(t,n){return n=hu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function a_(t,n,a){return Us(n,t.child,null,a),t=fu(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function cy(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=fu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(bf(n),(t=Ke)?(t=Dv(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Gm(t),a.return=n,n.child=a,Mn=n,Ke=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return fu(n,s)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(bf(n),l)if(n.flags&256)n.flags&=-257,n=a_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||bs(t,n,a,!1),l=(a&t.childLanes)!==0,hn||l){if(Ga.current===null){if(s=qe,s!==null&&(_=lt(s,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,ys(t,_),Zn(s,t,_),Yf;Uu()}n=a_(t,n,a)}else t=c.treeContext,Ke=Mi(_.nextSibling),Mn=n,xe=!0,Oa=null,Si=!1,t!==null&&km(n,t),n=fu(n,s),n.flags|=134221824;return n}return t=oa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function qf(t,n,a,s,l){return As(n),a=Cf(t,n,a,s,void 0,l),s=wf(),t!==null&&!hn?(Df(t,n,l),da(t,n,l)):(xe&&s&&Xl(n),n.flags|=1,_n(t,n,a,l),n.child)}function s_(t,n,a,s,l,c){return As(n),n.updateQueue=null,a=lg(n,s,a,l),og(t),s=wf(),t!==null&&!hn?(Df(t,n,c),da(t,n,c)):(xe&&s&&Xl(n),n.flags|=1,_n(t,n,a,c),n.child)}function r_(t,n,a,s,l){if(As(n),n.stateNode===null){var c=ur,_=a.contextType;typeof _=="object"&&_!==null&&(c=An(_)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=kf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},xf(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?An(_):ur,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Xf(n,a,_,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&kf.enqueueReplaceState(c,c.state,null),Po(n,s,c,l),Oo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,I=Ls(a,E);c.props=I;var q=c.context,st=a.contextType;_=ur,typeof st=="object"&&st!==null&&(_=An(st));var _t=a.getDerivedStateFromProps;st=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,st||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||q!==_)&&Yg(n,c,s,_),Ba=!1;var j=n.memoizedState;c.state=j,Po(n,s,c,l),Oo(),q=n.memoizedState,E||j!==q||Ba?(typeof _t=="function"&&(Xf(n,a,_t,s),q=n.memoizedState),(I=Ba||jg(n,a,I,s,j,q,_))?(st||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=q),c.props=s,c.state=q,c.context=_,s=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Sf(t,n),_=n.memoizedProps,st=Ls(a,_),c.props=st,_t=n.pendingProps,j=c.context,q=a.contextType,I=ur,typeof q=="object"&&q!==null&&(I=An(q)),E=a.getDerivedStateFromProps,(q=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==_t||j!==I)&&Yg(n,c,s,I),Ba=!1,j=n.memoizedState,c.state=j,Po(n,s,c,l),Oo();var et=n.memoizedState;_!==_t||j!==et||Ba||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof E=="function"&&(Xf(n,a,E,s),et=n.memoizedState),(st=Ba||jg(n,a,st,s,j,et,I)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,et,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,et,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=et),c.props=s,c.state=et,c.context=I,s=st):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,xr(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Us(n,t.child,null,l),n.child=Us(n,null,a,l)):_n(t,n,a,l),n.memoizedState=c.state,t=n.child):t=da(t,n,l),t}function o_(t,n,a,s){return Es(),n.flags|=256,_n(t,n,a,s),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:Km()}}function Kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function l_(t,n,a){var s=n.pendingProps,l=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(l?Va(n):Xa(),(t=Ke)?(t=Dv(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Gm(t),a.return=n,n.child=a,Mn=n,Ke=null)):t=null,t===null)throw Pa(n);return Zh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,l?(Xa(),l=n.mode,c=hu({mode:"hidden",children:c},l),s=Ms(s,l,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Zf(a),s.childLanes=Kf(t,_,a),n.memoizedState=Wf,Ho(null,s)):(Va(n),Qf(n,c))}var E=t.memoizedState;if(E!==null){var I=E.dehydrated;if(I!==null)return fy(t,n,c,_,s,I,E,a)}return l?(Xa(),l=s.fallback,c=n.mode,E=t.child,I=E.sibling,s=oa(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,I!==null?l=oa(I,l):(l=Ms(l,c,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Ho(null,s),s=n.child,l=t.child.memoizedState,l===null?l=Zf(a):(c=l.cachePool,c!==null?(E=cn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Km(),l={baseLanes:l.baseLanes|a,cachePool:c}),s.memoizedState=l,s.childLanes=Kf(t,_,a),n.memoizedState=Wf,Ho(t.child,s)):(Va(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Qf(t,n){return n=hu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hu(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function du(t,n,a){return Us(n,t.child,null,a),t=Qf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function fy(t,n,a,s,l,c,_,E){if(a)return n.flags&256?(Va(n),n.flags&=-257,du(t,n,E)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,null):(Xa(),c=l.fallback,_=n.mode,l=hu({mode:"visible",children:l.children},_),c=Ms(c,_,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Us(n,t.child,null,E),l=n.child,l.memoizedState=Zf(E),l.childLanes=Kf(t,s,E),n.memoizedState=Wf,Ho(null,l));if(Va(n),Zh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Co({value:l,source:null,stack:null})),du(t,n,E)}if(hn||bs(t,n,E,!1),s=(E&t.childLanes)!==0,hn||s){if(Ga.current!==null)return du(t,n,E);if(s=qe,s!==null&&(l=lt(s,E),l!==0&&l!==_.retryLane))throw _.retryLane=l,ys(t,l),Zn(s,t,l),Yf;return Wh(c)||Uu(),du(t,n,E)}return Wh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ke=Mi(c.nextSibling),Mn=n,xe=!0,Oa=null,Si=!1,t!==null&&km(n,t),n=Qf(n,l.children),n.flags|=134221824,n)}function u_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),jl(t.return,n,a)}function c_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&tu(a)===null&&(n=t),t=t.sibling}return n}function pu(t,n,a,s,l,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=l,_.treeForkCount=c)}function Jf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function $f(t,n,a){var s=n.pendingProps,l=s.revealOrder,c=s.tail;s=s.children;var _=Cn.current;if(n.flags&128)return zo(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,zo(n,_),l==="backwards"&&t!==null?(Jf(t),_n(t,n,s,a),Jf(t)):_n(t,n,s,a),s=xe?Ro:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u_(t,a,n);else if(t.tag===19)u_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=c_(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Jf(n)),pu(n,!0,l,null,c,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&tu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}pu(n,!0,a,null,c,s);break;case"together":pu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=c_(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),pu(n,!1,l,a,c,s)}return n.child}function f_(t,n,a){var s=n.pendingProps;return za(n,n.type,s.value),_n(t,n,s.children,a),n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function th(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function hy(t,n,a){switch(n.tag){case 3:P(n,n.stateNode.containerInfo),za(n,cn,t.memoizedState.cache),Es();break;case 27:case 5:it(n);break;case 4:P(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Va(n),n.flags|=128,null;s=bs(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?l_(t,n,a):(Va(n),t=da(t,n,a),t!==null?t.sibling:null)}Va(n);break;case 19:if(n.flags&128)return $f(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(bs(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return $f(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),zo(n,Cn.current),s)break;return null;case 22:return n.lanes=0,n_(t,n,a,n.pendingProps);case 24:za(n,cn,t.memoizedState.cache)}return da(t,n,a)}function h_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!th(t,a)&&(n.flags&128)===0)return hn=!1,hy(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,xe&&(n.flags&1048576)!==0&&Xm(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")of(t)?(s=Ls(t,s),n.tag=1,n=r_(null,n,t,s,a)):(n.tag=0,n=qf(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===k){n.tag=11,n=$g(null,n,t,s,a);break t}else if(l===Mt){n.tag=14,n=t_(null,n,t,s,a);break t}else if(l===ct){n.tag=10,n.type=t,n=f_(null,n,a);break t}}throw n=yt(t)||t,Error(r(306,n,""))}}return n;case 0:return qf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Ls(s,n.pendingProps),r_(t,n,s,l,a);case 3:t:{if(P(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;l=c.element,Sf(t,n),Po(n,s,null,a);var _=n.memoizedState;if(s=_.cache,za(n,cn,s),s!==c.cache&&pf(n,[cn],a,!0),Oo(),s=_.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=o_(t,n,s,a);break t}else if(s!==l){l=_i(Error(r(424)),n),Co(l),n=o_(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=Mi(t.firstChild),Mn=n,xe=!0,Oa=null,Si=!0,a=ng(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Es(),s===l){n=da(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return xr(t,n),t===null?(a=Iv(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(n.stateNode=gv(n.type,n.pendingProps,Ye.current,n)):n.memoizedState=Iv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&xe&&(s=n.stateNode=Lv(n.type,n.pendingProps,Ye.current),Mn=n,Si=!0,l=Ke,Qa(n.type)?(Kh=l,Ke=Mi(s.firstChild)):Ke=l),_n(t,n,n.pendingProps.children,a),xr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((l=s=Ke)&&(s=rM(s,n.type,n.pendingProps,Si),s!==null?(n.stateNode=s,Mn=n,Ke=Mi(s.firstChild),Si=!1,l=!0):l=!1),l||Pa(n)),it(n),l=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,s=c.children,Gh(l,c)?s=null:_!==null&&Gh(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=Cf(t,n,ey,null,null,a),Ir._currentValue=l),xr(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=Ke)&&(a=oM(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Mn=n,Ke=null,t=!0):t=!1),t||Pa(n)),null;case 13:return l_(t,n,a);case 4:return P(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Us(n,null,s,a):_n(t,n,s,a),n.child;case 11:return $g(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,xr(t,n),_n(t,n,s,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return f_(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,As(n),l=An(l),s=s(l),n.flags|=1,_n(t,n,s,a),n.child;case 14:return t_(t,n,n.type,n.pendingProps,a);case 15:return e_(t,n,n.type,n.pendingProps,a);case 19:return $f(t,n,a);case 31:return cy(t,n,a);case 22:return n_(t,n,a,n.pendingProps);case 24:return As(n),s=An(cn),t===null?(l=_f(),l===null&&(l=qe,c=mf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:s,cache:l},xf(n),za(n,cn,l)):((t.lanes&a)!==0&&(Sf(t,n),Po(n,null,null,a),Oo()),l=t.memoizedState,c=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),za(n,cn,s)):(s=c.cache,za(n,cn,s),s!==l.cache&&pf(n,[cn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:xe&&Xl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:xr(t,n),_n(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function pa(t){t.flags|=4}function eh(t,n,a,s,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Gv(n,s):Gv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(q_())t.flags|=8192;else throw Ds=Kl,vf}else t.flags&=-16777217}function d_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vv(n))if(q_())t.flags|=8192;else throw Ds=Kl,vf}function mu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Rl():536870912,t.lanes|=n,Tr|=n)}function Go(t,n){if(!xe)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function dy(t,n,a){var s=n.pendingProps;switch(cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ca(cn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hr(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hf())),Qe(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(pa(n),c!==null?(Qe(n),d_(n,c)):(Qe(n),eh(n,l,null,s,a))):c?c!==t.memoizedState?(pa(n),Qe(n),d_(n,c)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&pa(n),Qe(n),eh(n,l,t,s,a)),null;case 27:if(gt(n),a=Ye.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=Nt.current,hr(n)?jm(n):(t=Lv(l,s,a),n.stateNode=t,pa(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(c=Nt.current,hr(n))jm(n);else{var _=Jo(Ye.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?_.createElement(l,{is:s.is}):_.createElement(l)}}c[Lt]=n,c[Zt]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Dn(c,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&pa(n)}}return Qe(n),n.subtreeFlags&=-33554433,eh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ye.current,hr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||hv(t.nodeValue,a)),t||Pa(n,!0)}else t=Jo(t).createTextNode(s),t[Lt]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=hr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Lt]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=hr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Lt]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),l=!1}else l=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),mu(n,n.updateQueue),Qe(n),null);case 4:return T(),t===null&&zh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return ca(n.type),Qe(n),null;case 19:if(Af(n),s=n.memoizedState,s===null)return Qe(n),null;if(l=(n.flags&128)!==0,c=s.rendering,c===null)if(l)Go(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=tu(t),c!==null){for(n.flags|=128,Go(s,!1),t=c.updateQueue,n.updateQueue=t,mu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hm(a,t),a=a.sibling;return zo(n,Cn.current&1|2),xe&&la(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&X()>Ru&&(n.flags|=128,l=!0,Go(s,!1),n.lanes=4194304)}else{if(!l)if(t=tu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,mu(n,t),Go(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!xe)return Qe(n),null}else 2*X()-s.renderingStartTime>Ru&&a!==536870912&&(n.flags|=128,l=!0,Go(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||xe?zo(n,c):(a=c,kt(Rn,n),kt(Cn,a),Pn===null&&(Pn=n)),xe&&la(n,s.treeForkCount),t}return Qe(n),null;case 22:case 23:return si(n),Tf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&mu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ct(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(cn),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(r(156,n.tag))}function py(t,n){switch(cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(cn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Af(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ca(n.type),null;case 22:case 23:return si(n),Tf(),t!==null&&Ct(Cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(cn),null;case 25:return null;default:return null}}function p_(t,n){switch(cf(n),n.tag){case 3:ca(cn),T();break;case 26:case 27:case 5:gt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Af(n);break;case 10:ca(n.type);break;case 22:case 23:si(n),Tf(),t!==null&&Ct(Cs);break;case 24:ca(cn)}}function Vo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var c=a.create,_=a.inst;s=c(),_.destroy=s}a=a.next}while(a!==l)}}catch(E){He(n,n.return,E)}}function ka(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,l=n;var I=a,q=E;try{q()}catch(st){He(l,I,st)}}}s=s.next}while(s!==c)}}catch(st){He(n,n.return,st)}}function m_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ag(n,a)}catch(s){He(t,t.return,s)}}}function g_(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){He(t,n,s)}}function Vi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,c=sa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=Ev(c)),s=l.ref;break;case 7:if(t.stateNode===null){var _=new ci(t);m(t.child,!1,aM,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){He(t,n,E)}}function wn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){He(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){He(t,n,l)}else a.current=null}function gu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)wv(t.stateNode,n[a])}function __(t){for(var n=t.return;n!==null&&(ih(n)&&wv(t.stateNode,n.stateNode),!nh(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(ih(n)&&sM(t.stateNode,n.stateNode),!nh(n));)n=n.return}function nh(t){return t.tag===5||t.tag===3||t.tag===27}function ih(t){return t&&t.tag===7&&t.stateNode!==null}function ah(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){He(t,t.return,l)}}function sh(t,n,a){try{var s=t.stateNode;Hy(s,t.type,a,n),s[Zt]=n}catch(l){He(t,t.return,l)}}function v_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function rh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||v_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi)),gu(t,s),Ue=!0;else if(l!==4&&(l===27&&(gu(t,s),s=null,Qa(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(oh(t,n,a,s),t=t.sibling;t!==null;)oh(t,n,a,s),t=t.sibling}function _u(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),gu(t,s),Ue=!0;else if(l!==4&&(l===27&&(gu(t,s),s=null,Qa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(_u(t,n,a,s),t=t.sibling;t!==null;)_u(t,n,a,s),t=t.sibling}function x_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,s,a),n[Lt]=t,n[Zt]=a}catch(c){He(t,t.return,c)}}var vu=!1,ri=null;function S_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(vu=!0)}var Xi=null;function y_(){var t=Xi;return Xi=null,t}var Yn=0;function Sr(t,n,a,s,l){return Yn=0,M_(t.child,n,a,s,l)}function M_(t,n,a,s,l){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var E=kh(_);s.push(E),E.view&&(c=!0)}else c||kh(_).view&&(c=!0);vu=!0,yv(_,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||M_(t.child,n,a,s,l)&&(c=!0));t=t.sibling}return c}function ki(t,n){for(;t!==null;)t.tag===5?Mv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ki(t.child,n)),t=t.sibling}function xu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(xu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ra(n.default,n.share),n!=="none"&&(Sr(t,a,n,null,!1)||ki(t.child,!1))}t=t.sibling}}function lh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=sa(s,a),c=ra(s.default,a.paired?s.share:s.enter);c!=="none"?Sr(t,l,c,null,!1)?(xu(t),a.paired||n||Cr(t,s.onEnter)):ki(t.child,!1):xu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)lh(t,n),t=t.sibling;else xu(t)}function uh(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var c=ra(a.default,a.share);if(c!=="none"&&(Sr(t,s,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Cr(t,a.onShare)):ki(t.child,!1)),n.delete(s),n.size===0)break}}}uh(t)}t=t.sibling}}}function ch(t){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode),s=ri!==null?ri.get(a):void 0,l=ra(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(Sr(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ri.delete(a),Cr(t,n.onShare)):Cr(t,n.onExit):ki(t.child,!1)),ri!==null&&uh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ch(t),t=t.sibling;else ri!==null&&uh(t)}function E_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode);n=ra(n.default,n.update),t.flags&=-5,n!=="none"&&Sr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&E_(t);t=t.sibling}}function fh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ki(t.child,!1))}fh(t)}t=t.sibling}}function Su(t){if(t.tag===30)t.stateNode.paired=null,ki(t.child,!1),fh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Su(t),t=t.sibling;else fh(t)}function T_(t){for(t=t.child;t!==null;)t.tag===30?ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&T_(t),t=t.sibling}function hh(t,n,a,s,l,c,_){for(var E=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&Yn<c.length){var q=c[Yn],st=kh(I);(q.view||st.view)&&(E=!0);var _t;if(_t=(t.flags&4)===0)if(st.clip)_t=!0;else{_t=q.rect;var j=st.rect;_t=_t.y!==j.y||_t.x!==j.x||_t.height!==j.height||_t.width!==j.width}_t&&(t.flags|=4),st.abs?st=!q.abs:(q=q.rect,st=st.rect,st=q.height!==st.height||q.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&yv(I,Yn===0?a:a+"_"+Yn,l),E&&(t.flags&4)!==0||(Xi===null&&(Xi=[]),Xi.push(I,Yn===0?s:s+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:hh(t,n.child,a,s,l,c,_)&&(E=!0));n=n.sibling}return E}function b_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=sa(a,s),c=ra(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;Yn=0,l=hh(s,E,l,l,c,_,!1),(t.flags&4)!==0&&l&&Cr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&b_(t);t=t.sibling}}var En=!1,Be=!1,ji=!1,dh=!1,A_=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Yi=!1,ko=!1,yu=!1,ph=!1;function my(t,n,a){if(t=t.containerInfo,Fh=Br,t=Dm(t),$c(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var E=0,I=-1,q=-1,st=0,_t=0,j=t,et=null;e:for(;;){for(var zt;j!==s||c!==0&&j.nodeType!==3||(I=E+c),j!==_||l!==0&&j.nodeType!==3||(q=E+l),j.nodeType===3&&(E+=j.nodeValue.length),(zt=j.firstChild)!==null;)et=j,j=zt;for(;;){if(j===t)break e;if(et===s&&++st===c&&(I=E),et===_&&++_t===l&&(q=E),(zt=j.nextSibling)!==null)break;j=et,et=j.parentNode}j=zt}s=I===-1||q===-1?null:{start:I,end:q}}else s=null}s=s||{start:0,end:0}}else s=null;for(Hh={focusedElem:t,selectionRange:s},Br=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&ch(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&S_(t),Mu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&ch(s),Mu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&S_(t),Mu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Tn=s):(a&&E_(t),Mu(a))}}ri=null}function Mu(t){for(;Tn!==null;){var n=Tn,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var _=Ls(n.type,l);a=c.getSnapshotBeforeUpdate(_,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){He(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)qh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":qh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=sa(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=ra(l.default,l.update),l!=="none"&&Sr(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Tn=s;break}Tn=n.return}}function R_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&Vo(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){He(a,a.return,_)}else{var l=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){He(a,a.return,_)}}s&64&&m_(a),s&512&&Vi(a,a.return);break;case 3:if(qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ag(t,n)}catch(_){He(a,a.return,_)}}break;case 27:n===null&&s&4&&x_(a);case 26:case 5:qi(t,a),n===null&&s&4&&ah(a),s&512&&Vi(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),s&4&&U_(t,a);break;case 13:qi(t,a),s&4&&N_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ry.bind(null,a),lM(t,a))));break;case 22:if(s=a.memoizedState!==null||En,!s){var c=n!==null&&n.memoizedState!==null||Be;n=En,l=Be,En=s,(Be=c)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),wi(t,a,s)):qi(t,a),En=n,Be=l}break;case 30:qi(t,a),s&512&&Vi(a,a.return);break;case 7:s&512&&Vi(a,a.return);default:qi(t,a)}}function mh(t,n){for(t=t.child;t!==null;)C_(t,n),t=t.sibling}function C_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){He(t,t.return,I)}gh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(I){He(t,t.return,I)}break;case 18:try{var E=t.stateNode;n?Sv(E,!0):Sv(t.stateNode,!1)}catch(I){He(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&mh(t,n);break;default:mh(t,n)}}function gh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:C_(a,s);break t;case 22:a.memoizedState===null&&gh(a,s);break t;default:gh(a,s)}}t=t.sibling}}function w_(t){var n=t.alternate;n!==null&&(t.alternate=null,w_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ie(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,qn=!1;function Ri(t,n,a){for(a=a.child;a!==null;)D_(t,n,a),a=a.sibling}function D_(t,n,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:Be||wn(a,n),Ri(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||wn(a,n),Xo(a);var s=$e,l=qn;Qa(a.type)&&($e=a.stateNode,qn=!1),Ri(t,n,a),Ov(a.stateNode,a.type,a.memoizedProps),$e=s,qn=l;break;case 5:Be||wn(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),s=$e,l=qn,$e=null,Ri(t,n,a),$e=s,qn=l,$e!==null)if(qn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),Ue=!0}catch(c){He(a,n,c)}else try{$e.removeChild(a.stateNode),Ue=!0}catch(c){He(a,n,c)}break;case 18:$e!==null&&(qn?(t=$e,xv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fr(t)):xv($e,a.stateNode));break;case 4:s=$e,l=qn,$e=a.stateNode.containerInfo,qn=!0,Ri(t,n,a),$e=s,qn=l;break;case 0:case 11:case 14:case 15:ka(2,a,n),Be||ka(4,a,n),Ri(t,n,a);break;case 1:Be||(wn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&g_(a,n,s)),Ri(t,n,a);break;case 21:Ri(t,n,a);break;case 22:Be=(s=Be)||a.memoizedState!==null,Ri(t,n,a),Be=s;break;case 30:wn(a,n),Ri(t,n,a);break;case 7:Be||wn(a,n),Ri(t,n,a);break;default:Ri(t,n,a)}}function U_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fr(t)}catch(a){He(n,n.return,a)}}}function N_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fr(t)}catch(a){He(n,n.return,a)}}function gy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new A_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new A_),n;default:throw Error(r(435,t.tag))}}function Eu(t,n){var a=gy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=Cy.bind(null,t,s);s.then(l,l)}})}function Gn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],_=t,E=n,I=E;t:for(;I!==null;){switch(I.tag){case 27:if(Qa(I.type)){$e=I.stateNode,qn=!1;break t}break;case 5:$e=I.stateNode,qn=!1;break t;case 3:case 4:$e=I.stateNode.containerInfo,qn=!0;break t}I=I.return}if($e===null)throw Error(r(160));D_(_,E,c),$e=null,qn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)L_(n,t,a),n=n.sibling}var Ci=null;function L_(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var _=s[c];_.ref.impl=_.nextImpl}Gn(n,t,a),Vn(t),l&4&&(ka(3,t,t.return),Vo(3,t),ka(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),l&512&&(Be||s===null||wn(s,s.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ci,Gn(n,t,a),Vn(t),l&512&&(Be||s===null||wn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=gv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Le]||s[Lt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Dn(s,n,a),s[Lt]=t,De(s),n=s;break t;case"link":if(c=Hv("link","href",l).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}s=l.createElement(n),Dn(s,n,a),l.head.appendChild(s);break;case"meta":if(c=Hv("meta","content",l).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}s=l.createElement(n),Dn(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[Lt]=t,De(s),n=s}t.stateNode=n}else En||td(c,t.type,t.stateNode);else t.stateNode=Fv(c,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||Be||n.parentNode.removeChild(n)):l.count--,a===null?En||td(c,t.type,t.stateNode):Fv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&sh(t,t.memoizedProps,s.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),l&512&&(Be||s===null||wn(s,s.return)),s!==null&&l&4&&sh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=ji,ji=!1,Gn(n,t,a),ji=c,Vn(t),l&512&&(Be||s===null||wn(s,s.return)),t.flags&32){n=t.stateNode;try{nr(n,""),Ue=!0}catch(st){He(t,t.return,st)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,sh(t,n,s!==null?s.memoizedProps:n)),l&1024&&(dh=!0);break;case 6:if(Gn(n,t,a),Vn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(st){He(t,t.return,st)}}break;case 3:if(Ue=!1,Bu=null,c=Ci,Ci=$o(n.containerInfo),Gn(n,t,a),Ci=c,Vn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(st){He(t,t.return,st)}dh&&(dh=!1,O_(t)),Ue=!1;break;case 4:l=ji,ji=En,s=tm(),c=Ci,Ci=$o(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),Ci=c,Ue&&ko&&(yu=!0),Ue=s,ji=l;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Au=X()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 22:c=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var E=En,I=Be,q=ji;En=E||c,ji=q||c,Be=I||_,Gn(n,t,a),Be=I,ji=q,En=E,Vn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||_||En||Be||(n=_||Be,a=En,s=Be,En=c||En,Be=n,ja(t,2),En=a,Be=s),!c&&ji||mh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Eu(t,a))));break;case 19:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 30:l&512&&(Be||s===null||wn(s,s.return)),l=tm(),c=ko,_=(a&335544064)===a,E=t.memoizedProps,ko=_&&ra(E.default,E.update)!=="none",Gn(n,t,a),Vn(t),_&&s!==null&&Ue&&(t.flags|=4),ko=c,Ue=l;break;case 21:break;case 7:l&512&&(Be||s===null||wn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(v_(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(ih(l)){var c=l.stateNode;s===null?s=[c]:s.push(c)}if(nh(l))break;l=l.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,I=rh(t);_u(t,I,E,_);break;case 5:var q=a.stateNode;a.flags&32&&(nr(q,""),a.flags&=-33);var st=rh(t);_u(t,st,q,_);break;case 3:case 4:var _t=a.stateNode.containerInfo,j=rh(t);oh(t,j,_t,_);break;default:throw Error(r(161))}}catch(et){He(t,t.return,et)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function O_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;O_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Br=!0,n.reset(),Br=!1),t=t.sibling}}function yr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)P_(n,t),n=n.sibling;else b_(n)}function P_(t,n){var a=t.alternate;if(a===null)lh(t,!1);else switch(t.tag){case 3:if(ph=Yi=!1,y_(),yr(n,t),!Yi&&!yu){if(t=Xi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];Mv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ph=!0}Xi=null;break;case 5:yr(n,t);break;case 4:s=Yi,Yi=!1,yr(n,t),Yi&&(yu=!0),Yi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?lh(t,!1):yr(n,t));break;case 30:s=Yi,l=y_(),Yi=!1,yr(n,t),Yi&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=sa(c,_),_=sa(a.memoizedProps,_);var E=ra(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=hh(t,a,n,_,E,c,!0),Yn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cr(t,t.memoizedProps.onUpdate),Xi=l):l!==null&&(l.push.apply(l,Xi),Xi=l),Yi=(t.flags&32)!==0?!0:s;break;default:yr(n,t)}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)R_(t,n.alternate,n),n=n.sibling}function ja(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ka(4,a,a.return),ja(a,s);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&g_(a,a.return,l),ja(a,s);break;case 27:(s&2)!==0&&Ov(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),ja(a,s);break;case 6:Xo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Be||l.parentNode.removeChild(l),ja(a,s);break;case 22:a.memoizedState===null&&ja(a,s);break;case 30:wn(a,a.return),ja(a,s);break;case 7:wn(a,a.return);default:ja(a,s)}t=t.sibling}}function wi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,c=n,_=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:wi(l,c,a),Vo(4,c);break;case 1:if(wi(l,c,a),s=c,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(st){He(s,s.return,st)}if(s=c,l=s.updateQueue,l!==null){var I=s.stateNode;try{var q=l.shared.hiddenCallbacks;if(q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<q.length;l++)ig(q[l],I)}catch(st){He(s,s.return,st)}}E&&_&64&&m_(c),Vi(c,c.return);break;case 27:(a&2)!==0&&x_(c);case 5:c.tag!==5&&c.tag!==27||__(c),wi(l,c,a),E&&s===null&&_&4&&ah(c),Vi(c,c.return);break;case 6:__(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||En||td($o(I.ownerDocument),c.type,I),wi(l,c,a),E&&s===null&&_&4&&ah(c),Vi(c,c.return);break;case 12:wi(l,c,a);break;case 31:wi(l,c,a),E&&_&4&&U_(l,c);break;case 13:wi(l,c,a),E&&_&4&&N_(l,c);break;case 22:c.memoizedState===null&&wi(l,c,a),Vi(c,c.return);break;case 30:wi(l,c,a),Vi(c,c.return);break;case 7:Vi(c,c.return);default:wi(l,c,a)}n=n.sibling}}function _h(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wo(a))}function vh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function yi(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)z_(t,n,a,s),n=n.sibling;else l&&T_(n)}function z_(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Su(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&Vo(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),l&&ph&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&wo(c)));break;case 12:if(c&2048){yi(t,n,a,s),c=n.stateNode;try{var _=n.memoizedProps,E=_.id,I=_.onPostCommit;typeof I=="function"&&I(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(q){He(n,n.return,q)}}else yi(t,n,a,s);break;case 31:yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&Su(E),_._visibility&2?yi(t,n,a,s):jo(t,n)):(l&&E!==null&&E.memoizedState!==null&&Su(n),_._visibility&2?yi(t,n,a,s):(_._visibility|=2,Mr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&_h(E,n);break;case 24:yi(t,n,a,s),c&2048&&vh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ki(c.child,!0),ki(n.child,!0))),yi(t,n,a,s);break;default:yi(t,n,a,s)}}function Mr(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,E=a,I=s,q=_.flags;switch(_.tag){case 0:case 11:case 15:Mr(c,_,E,I,l),Vo(8,_);break;case 23:break;case 22:var st=_.stateNode;_.memoizedState!==null?st._visibility&2?Mr(c,_,E,I,l):jo(c,_):(st._visibility|=2,Mr(c,_,E,I,l)),l&&q&2048&&_h(_.alternate,_);break;case 24:Mr(c,_,E,I,l),l&&q&2048&&vh(_.alternate,_);break;default:Mr(c,_,E,I,l)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:jo(a,s),l&2048&&_h(s.alternate,s);break;case 24:jo(a,s),l&2048&&vh(s.alternate,s);break;default:jo(a,s)}n=n.sibling}}var Os=8192;function Ps(t,n,a){if(t.subtreeFlags&Os)for(t=t.child;t!==null;)I_(t,n,a),t=t.sibling}function I_(t,n,a){switch(t.tag){case 26:Ps(t,n,a),t.flags&Os&&(t.memoizedState!==null?MM(a,Ci,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&kv(a,t)));break;case 5:Ps(t,n,a),t.flags&Os&&(t=t.stateNode,(n&335544128)===n&&kv(a,t));break;case 3:case 4:var s=Ci;Ci=$o(t.stateNode.containerInfo),Ps(t,n,a),Ci=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Os,Os=16777216,Ps(t,n,a),Os=s):Ps(t,n,a));break;case 30:if((t.flags&Os)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(s,l)}Ps(t,n,a);break;default:Ps(t,n,a)}}function B_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Tn=s,H_(s,t)}B_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)F_(t),t=t.sibling}function F_(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tu(t)):Yo(t);break;default:Yo(t)}}function Tu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Tn=s,H_(s,t)}B_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Tu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tu(n));break;default:Tu(n)}t=t.sibling}}function H_(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:wo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Tn=s;else t:for(a=t;Tn!==null;){s=Tn;var l=s.sibling,c=s.return;if(w_(s),s===a){Tn=null;break t}if(l!==null){l.return=c,Tn=l;break t}Tn=c}}}var _y={getCacheForType:function(t){var n=An(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(cn).controller.signal}},vy=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,Me=null,Ae=0,Fe=0,oi=null,Ya=!1,Er=!1,xh=!1,ma=0,sn=0,qa=0,zs=0,bu=0,li=0,Tr=0,qo=null,Wn=null,Sh=!1,Au=0,G_=0,Ru=1/0,Cu=null,Wa=null,en=0,Di=null,Is=null,Wi=0,yh=0,Mh=null,V_=null,br=null,Ar=null,Rr=null,Wo=0,wu=null;function ui(){return(Pe&2)!==0&&Ae!==0?Ae&-Ae:xt.T!==null?Nh():Rt()}function X_(){if(li===0)if((Ae&536870912)===0||xe){var t=na;na<<=1,(na&3932160)===0&&(na=262144),li=t}else li=536870912;return t=Rn.current,t!==null&&(t.flags|=32),li}function Cr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Ev(sa(t.memoizedProps,a))),Ar===null&&(Ar=[]),Ar.push(n.bind(null,s))}}function Zn(t,n,a){(t===qe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(wr(t,0),Za(t,Ae,li,!1)),vs(t,a),((Pe&2)===0||t!==qe)&&(t===qe&&((Pe&2)===0&&(zs|=a),sn===4&&Za(t,Ae,li,!1)),Zi(t))}function k_(t,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||wa(t,n),l=s?yy(t,n):Th(t,n,!0),c=s;do{if(l===0){Er&&!s&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!xy(a)){l=Th(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;l=qo;var I=E.current.memoizedState.isDehydrated;if(I&&(wr(E,_).flags|=256),_=Th(E,_,!1),_!==2&&_!==6){if(xh&&!I){E.errorRecoveryDisabledLanes|=c,zs|=c,l=4;break t}c=Wn,Wn=l,c!==null&&(Wn===null?Wn=c:Wn.push.apply(Wn,c))}l=_}if(c=!1,l!==2)continue}}if(l===1){wr(t,0),Za(t,n,0,!0);break}t:{switch(s=t,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Za(s,n,li,!Ya);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Au+300-X(),10<l)){if(Za(s,n,li,!Ya),_s(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=Xh(j_.bind(null,s,a,Wn,Cu,Sh,n,li,zs,Tr,Ya,c,"Throttled",-0,0),l);break t}j_(s,a,Wn,Cu,Sh,n,li,zs,Tr,Ya,c,null,-0,0)}}break}while(!0);Zi(t)}function j_(t,n,a,s,l,c,_,E,I,q,st,_t,j,et){t.timeoutHandle=-1;var zt=n.subtreeFlags,Kt=(c&335544064)===c;if(_t=null,(Kt||zt&8192||(zt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},ri=null,I_(n,c,_t),Kt&&(zt=_t,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(zt.count++,zt.waitingForViewTransition=!0,zt=nl.bind(zt),Kt.finished.then(zt,zt))),zt=(c&62914560)===c?Au-X():(c&4194048)===c?G_-X():0,zt=EM(_t,zt),zt!==null)){Wi=c,t.cancelPendingCommit=zt($_.bind(null,t,n,c,a,s,l,_,E,I,q,st,_t,null,j,et)),Za(t,c,_,!q);return}$_(t,n,c,a,s,l,_,E,I,q,st,_t)}function xy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],c=l.getSnapshot;l=l.value;try{if(!ai(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,s){n=Al(t,n),n&=~bu,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var c=31-Ln(l),_=1<<c;s[c]=-1,l&=~_}a!==0&&C(t,a,n)}function Du(){return(Pe&6)===0?(Zo(0),!1):!0}function Eh(){if(Me!==null){if(Fe===0)var t=Me.return;else t=Me,ua=Ts=null,Uf(t),mr=null,No=0,t=Me;for(;t!==null;)p_(t.alternate,t),t=t.return;Me=null}}function wr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Xy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Eh(),qe=t,Me=a=oa(t.current,null),Ae=n,Fe=0,oi=null,Ya=!1,Er=wa(t,n),xh=!1,Tr=li=bu=zs=qa=sn=0,Wn=qo=null,Sh=!1,ma=Al(t,n),Bl(),a}function Y_(t,n){de=null,xt.H=uu,n===pr||n===Zl?(n=$m(),Fe=3):n===vf?(n=$m(),Fe=4):Fe=n===Yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Me===null&&(sn=1,cu(t,_i(n,t.current)))}function q_(){var t=Rn.current;return t===null?!0:(Ae&4194048)===Ae?Pn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===Pn:!1}function W_(){var t=xt.H;return xt.H=uu,t===null?uu:t}function Z_(){var t=xt.A;return xt.A=_y,t}function Uu(){sn=4,Ya||(Ae&4194048)!==Ae&&Rn.current!==null||(Er=!0),(qa&134217727)===0&&(zs&134217727)===0||qe===null||Za(qe,Ae,li,!1)}function Th(t,n,a){var s=Pe;Pe|=2;var l=W_(),c=Z_();(qe!==t||Ae!==n)&&(Cu=null,wr(t,n)),n=!1;var _=sn;t:do try{if(Fe!==0&&Me!==null){var E=Me,I=oi;switch(Fe){case 8:Eh(),_=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var q=Fe;if(Fe=0,oi=null,Dr(t,E,I,q),a&&Er){_=0;break t}break;default:q=Fe,Fe=0,oi=null,Dr(t,E,I,q)}}Sy(),_=sn;break}catch(st){Y_(t,st)}while(!0);return n&&t.shellSuspendCounter++,ua=Ts=null,Pe=s,xt.H=l,xt.A=c,Me===null&&(qe=null,Ae=0,Bl()),_}function Sy(){for(;Me!==null;)K_(Me)}function yy(t,n){var a=Pe;Pe|=2;var s=W_(),l=Z_();qe!==t||Ae!==n?(Cu=null,Ru=X()+500,wr(t,n)):Er=wa(t,n);t:do try{if(Fe!==0&&Me!==null){n=Me;var c=oi;e:switch(Fe){case 1:Fe=0,oi=null,Dr(t,n,c,1);break;case 2:case 9:if(Qm(c)){Fe=0,oi=null,Q_(n);break}n=function(){Fe!==2&&Fe!==9||qe!==t||(Fe=7),Zi(t)},c.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Qm(c)?(Fe=0,oi=null,Q_(n)):(Fe=0,oi=null,Dr(t,n,c,7));break;case 5:var _=null;switch(Me.tag){case 26:_=Me.memoizedState;case 5:case 27:var E=Me;if(_?Vv(_):E.stateNode.complete){Fe=0,oi=null;var I=E.sibling;if(I!==null)Me=I;else{var q=E.return;q!==null?(Me=q,Nu(q)):Me=null}break e}}Fe=0,oi=null,Dr(t,n,c,5);break;case 6:Fe=0,oi=null,Dr(t,n,c,6);break;case 8:Eh(),sn=6;break t;default:throw Error(r(462))}}My();break}catch(st){Y_(t,st)}while(!0);return ua=Ts=null,xt.H=s,xt.A=l,Pe=a,Me!==null?0:(qe=null,Ae=0,Bl(),sn)}function My(){for(;Me!==null&&!Ht();)K_(Me)}function K_(t){var n=h_(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Nu(t):Me=n}function Q_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=s_(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=s_(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Uf(n);var s=n;s===Mn&&(xe?(kl(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(kl(s),xe=!0));default:p_(a,n),n=Me=Hm(n,ma),n=h_(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Nu(t):Me=n}function Dr(t,n,a,s){ua=Ts=null,Uf(n),mr=null,No=0;var l=n.return;try{if(uy(t,l,n,a,Ae)){sn=1,cu(t,_i(a,t.current)),Me=null;return}}catch(c){if(l!==null)throw Me=l,c;sn=1,cu(t,_i(a,t.current)),Me=null;return}n.flags&32768?(xe||s===1?t=!0:Er||(Ae&536870912)!==0?t=!1:(Ya=t=!0,(s===2||s===9||s===3||s===6)&&(s=Rn.current,s!==null&&s.tag===13&&(s.flags|=16384))),J_(n,t)):Nu(n)}function Nu(t){var n=t;do{if((n.flags&32768)!==0){J_(n,Ya);return}t=n.return;var a=dy(n.alternate,n,ma);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=t}while(n!==null);sn===0&&(sn=5)}function J_(t,n){do{var a=py(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);sn=6,Me=null}function $_(t,n,a,s,l,c,_,E,I,q,st,_t){t.cancelPendingCommit=null;do Lu();while(en!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===qe&&(Me=qe=null,Ae=0),Is=n,Di=t,Wi=a,Mh=l,V_=s,Ey(t,n,a,_,E,I,_t)}}function Ey(t,n,a,s,l,c,_){var E=n.lanes|n.childLanes;if(yh=E,E|=sf,Pc(t,a,E,s,l,c),Ar=null,(a&335544064)===a?(Rr=QS(t),s=10262):(Rr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,wy(At,function(){return Ch(),null})):(t.callbackNode=null,t.callbackPriority=0),vu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null,l=It.p,It.p=2,c=Pe,Pe|=4;try{my(t,n,a)}finally{Pe=c,It.p=l,xt.T=s}}en=1,vu?br=Zy(_,t.containerInfo,Rr,bh,Ah,by,Rh,Ch,Ty):(bh(),Ah(),Rh())}function Ty(t){if(en!==0){var n=Di.onRecoverableError;n(t,{componentStack:null})}}function by(){en===3&&(en=0,P_(Is,Di),en=4)}function bh(){if(en===1){en=0;var t=Di,n=Is,a=Wi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null;var l=It.p;It.p=2;var c=Pe;Pe|=4;try{ko=yu=!1,L_(n,t,a),a=Hh;var _=Dm(t.containerInfo),E=a.focusedElem,I=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&wm(E.ownerDocument.documentElement,E)){if(I!==null&&$c(E)){var q=I.start,st=I.end;if(st===void 0&&(st=q),"selectionStart"in E)E.selectionStart=q,E.selectionEnd=Math.min(st,E.value.length);else{var _t=E.ownerDocument||document,j=_t&&_t.defaultView||window;if(j.getSelection){var et=j.getSelection(),zt=E.textContent.length,Kt=Math.min(I.start,zt),pe=I.end===void 0?Kt:Math.min(I.end,zt);!et.extend&&Kt>pe&&(_=pe,pe=Kt,Kt=_);var Y=Cm(E,Kt),V=Cm(E,pe);if(Y&&V&&(et.rangeCount!==1||et.anchorNode!==Y.node||et.anchorOffset!==Y.offset||et.focusNode!==V.node||et.focusOffset!==V.offset)){var J=_t.createRange();J.setStart(Y.node,Y.offset),et.removeAllRanges(),Kt>pe?(et.addRange(J),et.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),et.addRange(J))}}}}for(_t=[],et=E;et=et.parentNode;)et.nodeType===1&&_t.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var mt=_t[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Br=!!Fh,Hh=Fh=null}finally{Pe=c,It.p=l,xt.T=s}}t.current=n,en=2}}function Ah(){if(en===2){en=0;var t=Di,n=Is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xt.T,xt.T=null;var s=It.p;It.p=2;var l=Pe;Pe|=4;try{R_(t,n.alternate,n)}finally{Pe=l,It.p=s,xt.T=a}}en=3}}function Rh(){if(en===4||en===3){en=0;var t=br;br=null,fe();var n=Di,a=Is,s=Wi,l=V_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?en=5:(en=0,Is=Di=null,tv(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Wa=null),K(s),a=a.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=xt.T,c=It.p,It.p=2,xt.T=null;try{for(var _=n.onRecoverableError,E=0;E<l.length;E++){var I=l[E];_(I.value,{componentStack:I.stack})}}finally{xt.T=a,It.p=c}}if(l=Ar,_=Rr,Rr=null,l!==null&&(Ar=null,_===null&&(_=[]),t!==null))for(I=0;I<l.length;I++)a=(0,l[I])(_),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Lu(),Zi(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===wu?Wo++:(Wo=0,wu=n):(Wo=0,wu=null),Zo(0)}}function tv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function Lu(){return br!==null&&(br.skipTransition(),br=null),bh(),Ah(),Rh(),Ch()}function Ch(){if(en!==5)return!1;var t=Di,n=yh;yh=0;var a=K(Wi),s=xt.T,l=It.p;try{It.p=32>a?32:a,xt.T=null,a=Mh,Mh=null;var c=Di,_=Wi;if(en=0,Is=Di=null,Wi=0,(Pe&6)!==0)throw Error(r(331));var E=Pe;if(Pe|=4,F_(c.current),z_(c,c.current,_,a),Pe=E,Zo(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(be,c)}catch{}return!0}finally{It.p=l,xt.T=s,tv(t,n)}}function ev(t,n,a){n=_i(a,n),n=jf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(vs(t,2),Zi(t))}function He(t,n,a){if(t.tag===3)ev(t,t,a);else for(;n!==null;){if(n.tag===3){ev(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wa===null||!Wa.has(s))){t=_i(a,t),a=Qg(2),s=Ha(n,a,2),s!==null&&(Jg(a,s,n,t),vs(s,2),Zi(s));break}}n=n.return}}function wh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new vy;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(xh=!0,l.add(a),t=Ay.bind(null,t,n,a),n.then(t,t))}function Ay(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Ae&a)===a&&((sn===4||sn===3&&(Ae&62914560)===Ae&&300>X()-Au)&&(Pe&2)===0?wr(t,0):bu|=a,Tr===Ae&&(Tr=0)),Zi(t)}function nv(t,n){n===0&&(n=Rl()),t=ys(t,n),t!==null&&(vs(t,n),Zi(t))}function Ry(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),nv(t,a)}function Cy(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),nv(t,a)}function wy(t,n){return re(t,n)}var Ur=null,Nr=null,Dh=!1,Ou=!1,Uh=!1,Ka=0;function Zi(t){t!==Nr&&t.next===null&&(Nr===null?Ur=Nr=t:Nr=Nr.next=t),Ou=!0,Dh||(Dh=!0,Uy())}function Zo(t,n){if(!Uh&&Ou){Uh=!0;do for(var a=!1,s=Ur;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var c=0;else{var _=s.suspendedLanes,E=s.pingedLanes;c=(1<<31-Ln(42|t)+1)-1,c&=l&~(_&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,rv(s,c))}else c=Ae,c=_s(s,s===qe?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||wa(s,c)||(a=!0,rv(s,c));s=s.next}while(a);Uh=!1}}function Dy(){iv()}function iv(){Ou=Dh=!1;var t=0;Ka!==0&&Vy()&&(t=Ka);for(var n=X(),a=null,s=Ur;s!==null;){var l=s.next,c=av(s,n);c===0?(s.next=null,a===null?Ur=l:a.next=l,l===null&&(Nr=a)):(a=s,(t!==0||(c&3)!==0)&&(Ou=!0)),s=l}en!==0&&en!==5||Zo(t),Ka!==0&&(Ka=0)}function av(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-Ln(c),E=1<<_,I=l[_];I===-1?((E&a)===0||(E&s)!==0)&&(l[_]=Oc(E,n)):I<=n&&(t.expiredLanes|=E),c&=~E}if(n=qe,a=Ae,a=_s(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&$t(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&$t(s),K(a)){case 2:case 8:a=qt;break;case 32:a=At;break;case 268435456:a=Qt;break;default:a=At}return s=sv.bind(null,t),a=re(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&$t(s),t.callbackPriority=2,t.callbackNode=null,2}function sv(t,n){if(en!==0&&en!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Lu()&&t.callbackNode!==a)return null;var s=Ae;return s=_s(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(k_(t,s,n),av(t,X()),t.callbackNode!=null&&t.callbackNode===a?sv.bind(null,t):null)}function rv(t,n){if(Lu())return null;k_(t,n,!0)}function Uy(){ky(function(){(Pe&6)!==0?re(Ot,Dy):iv()})}function Nh(){if(Ka===0){var t=Rs;t===0&&(t=ms,ms<<=1,(ms&261888)===0&&(ms=256)),Ka=t}return Ka}function ov(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(t)}function Ny(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var c=ov((l[Zt]||null).action),_=s.submitter;_&&(n=(n=_[Zt]||null)?ov(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var E=new Ol("action","action",null,s,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ka!==0){var I=new FormData(l,_);Hf(a,{pending:!0,data:I,method:l.method,action:c},null,I)}}else typeof c=="function"&&(E.preventDefault(),I=new FormData(l,_),Hf(a,{pending:!0,data:I,method:l.method,action:c},c,I))},currentTarget:l}]})}}for(var Lh=0;Lh<af.length;Lh++){var Oh=af[Lh],Ly=Oh.toLowerCase(),Oy=Oh[0].toUpperCase()+Oh.slice(1);Ai(Ly,"on"+Oy)}Ai(Lm,"onAnimationEnd"),Ai(Om,"onAnimationIteration"),Ai(Pm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(XS,"onTransitionRun"),Ai(kS,"onTransitionStart"),Ai(jS,"onTransitionCancel"),Ai(zm,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function lv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],I=E.instance,q=E.currentTarget;if(E=E.listener,I!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=q;try{c(l)}catch(st){Il(st)}l.currentTarget=null,c=I}else for(_=0;_<s.length;_++){if(E=s[_],I=E.instance,q=E.currentTarget,E=E.listener,I!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=q;try{c(l)}catch(st){Il(st)}l.currentTarget=null,c=I}}}}function Ee(t,n){var a=n[ne];a===void 0&&(a=n[ne]=new Set);var s=t+"__bubble";a.has(s)||(uv(n,t,2,!1),a.add(s))}function Ph(t,n,a){var s=0;n&&(s|=4),uv(a,t,s,n)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function zh(t){if(!t[Pu]){t[Pu]=!0,Ze.forEach(function(a){a!=="selectionchange"&&(Py.has(a)||Ph(a,!1,t),Ph(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pu]||(n[Pu]=!0,Ph("selectionchange",!1,n))}}function uv(t,n,a,s){switch(Jv(n)){case 2:var l=RM;break;case 8:l=CM;break;default:l=nd}a=l.bind(null,n,a,t),l=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Ih(t,n,a,s,l){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===l)break;if(_===4)for(_=s.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;E!==null;){if(_=Oe(E),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){s=c=_;continue t}E=E.parentNode}}s=s.return}um(function(){var q=c,st=Gc(a),_t=[];t:{var j=Im.get(t);if(j!==void 0){var et=Ol,zt=t;switch(t){case"keypress":if(Nl(a)===0)break t;case"keydown":case"keyup":et=xS;break;case"focusin":zt="focus",et=qc;break;case"focusout":zt="blur",et=qc;break;case"beforeblur":case"afterblur":et=qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=TS;break;case Lm:case Om:case Pm:et=cS;break;case zm:et=AS;break;case"scroll":case"scrollend":et=sS;break;case"wheel":et=CS;break;case"copy":case"cut":case"paste":et=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=pm;break;case"submit":et=MS;break;case"toggle":case"beforetoggle":et=DS}var Kt=(n&4)!==0,pe=!Kt&&(t==="scroll"||t==="scrollend"),Y=Kt?j!==null?j+"Capture":null:j;Kt=[];for(var V=q,J;V!==null;){var mt=V;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Y===null||(mt=vo(V,Y),mt!=null&&Kt.push(Qo(V,mt,J))),pe)break;V=V.return}0<Kt.length&&(j=new et(j,zt,null,a,st),_t.push({event:j,listeners:Kt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",et&&a!==Hc&&(zt=a.relatedTarget||a.fromElement)&&(Oe(zt)||zt[ae]))break t;(j||et)&&(zt=st.window===st?st:(et=st.ownerDocument)?et.defaultView||et.parentWindow:window,j?(et=a.relatedTarget||a.toElement,j=q,et=et?Oe(et):null,et!==null&&(pe=f(et),Kt=et.tag,et!==pe||Kt!==5&&Kt!==27&&Kt!==6)&&(et=null)):(j=null,et=q),j!==et&&(Kt=hm,mt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=pm,mt="onPointerLeave",Y="onPointerEnter",V="pointer"),pe=j==null?zt:gn(j),J=et==null?zt:gn(et),zt=new Kt(mt,V+"leave",j,a,st),zt.target=pe,zt.relatedTarget=J,mt=null,Oe(st)===q&&(Kt=new Kt(Y,V+"enter",et,a,st),Kt.target=J,Kt.relatedTarget=pe,mt=Kt),pe=mt,Kt=j&&et?O(j,et,zy):null,j!==null&&cv(_t,zt,j,Kt,!1),et!==null&&pe!==null&&cv(_t,pe,et,Kt,!0)))}t:{if(j=q?gn(q):window,et=j.nodeName&&j.nodeName.toLowerCase(),et==="select"||et==="input"&&j.type==="file")var Yt=Mm;else if(Sm(j))if(Em)Yt=HS;else{Yt=BS;var Re=IS}else et=j.nodeName,!et||et.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?q&&Fc(q.elementType)&&(Yt=Mm):Yt=FS;if(Yt&&(Yt=Yt(t,q))){ym(_t,Yt,a,st);break t}Re&&Re(t,j,q)}switch(Re=q?gn(q):window,t){case"focusin":(Sm(Re)||Re.contentEditable==="true")&&(rr=Re,tf=q,Ao=null);break;case"focusout":Ao=tf=rr=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Um(_t,a,st);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":Um(_t,a,st)}var ee;if(Zc)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else sr?vm(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(mm&&a.locale!=="ko"&&(sr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&sr&&(ee=cm()):(Ua=st,kc="value"in Ua?Ua.value:Ua.textContent,sr=!0)),Re=zu(q,oe),0<Re.length&&(oe=new dm(oe,t,null,a,st),_t.push({event:oe,listeners:Re}),ee?oe.data=ee:(ee=xm(a),ee!==null&&(oe.data=ee)))),(ee=NS?LS(t,a):OS(t,a))&&(oe=zu(q,"onBeforeInput"),0<oe.length&&(Re=new dm("onBeforeInput","beforeinput",null,a,st),_t.push({event:Re,listeners:oe}),Re.data=ee)),Ny(_t,t,q,a,st)}lv(_t,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zu(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=vo(t,a),l!=null&&s.unshift(Qo(t,l,c)),l=vo(t,n),l!=null&&s.push(Qo(t,l,c))),t.tag===3)return s;t=t.return}return[]}function zy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cv(t,n,a,s,l){for(var c=n._reactName,_=[];a!==null&&a!==s;){var E=a,I=E.alternate,q=E.stateNode;if(E=E.tag,I!==null&&I===s)break;E!==5&&E!==26&&E!==27||q===null||(I=q,l?(q=vo(a,c),q!=null&&_.unshift(Qo(a,q,I))):l||(q=vo(a,c),q!=null&&_.push(Qo(a,q,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Iy=/\r\n?/g,By=/\u0000|\uFFFD/g;function fv(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(By,"")}function hv(t,n){return n=fv(n),fv(t)===n}function Ge(t,n,a,s,l,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||nr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&nr(t,""+s);else return;break;case"className":wl(t,"class",s);break;case"tabIndex":wl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(t,a,s);break;case"style":om(t,s,c);return;case"data":if(n!=="object"){wl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Dl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",l.name,l,null),Ge(t,n,"formEncType",l.formEncType,l,null),Ge(t,n,"formMethod",l.formMethod,l,null),Ge(t,n,"formTarget",l.formTarget,l,null)):(Ge(t,n,"encType",l.encType,l,null),Ge(t,n,"method",l.method,l,null),Ge(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Dl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Fi);return;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Dl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Cl(t,"popover",s);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Cl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=iS.get(a)||a,Cl(t,a,s);else return}Ue=!0}function Bh(t,n,a,s,l,c){switch(a){case"style":om(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")nr(t,s);else if(typeof s=="number"||typeof s=="bigint")nr(t,""+s);else return;break;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Zt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,l);break t}Ue=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Cl(t,a,s)}return}Ue=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,c,_,a,null)}}l&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var E=c=_=l=null,I=null,q=null;for(s in a)if(a.hasOwnProperty(s)){var st=a[s];if(st!=null)switch(s){case"name":l=st;break;case"type":_=st;break;case"checked":I=st;break;case"defaultChecked":q=st;break;case"value":c=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Ge(t,n,s,st,a,null)}}im(t,c,E,I,q,_,l,!1);return;case"select":Ee("invalid",t),s=_=c=null;for(l in a)if(a.hasOwnProperty(l)&&(E=a[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Ge(t,n,l,E,a,null)}n=c,a=_,t.multiple=!!s,n!=null?er(t,!!s,n,!1):a!=null&&er(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),c=l=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ge(t,n,_,E,a,null)}sm(t,s,l,c);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,I,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<Ko.length;s++)Ee(Ko[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(s=a[q],s!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,q,s,a,null)}return;default:if(Fc(n)){for(st in a)a.hasOwnProperty(st)&&(s=a[st],s!==void 0&&Bh(t,n,st,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ge(t,n,E,s,a,null))}var Fy={};function Hy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,_=null,E=null,I=null,q=null,st=null;for(et in a){var _t=a[et];if(a.hasOwnProperty(et)&&_t!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":I=_t;default:s.hasOwnProperty(et)||Ge(t,n,et,null,s,_t)}}for(var j in s){var et=s[j];if(_t=a[j],s.hasOwnProperty(j)&&(et!=null||_t!=null))switch(j){case"type":et!==_t&&(Ue=!0),c=et;break;case"name":et!==_t&&(Ue=!0),l=et;break;case"checked":et!==_t&&(Ue=!0),q=et;break;case"defaultChecked":et!==_t&&(Ue=!0),st=et;break;case"value":et!==_t&&(Ue=!0),_=et;break;case"defaultValue":et!==_t&&(Ue=!0),E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:et!==_t&&Ge(t,n,j,et,s,_t)}}Ic(t,_,E,I,q,st,c,l);return;case"select":et=_=E=j=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":et=I;default:s.hasOwnProperty(c)||Ge(t,n,c,null,s,I)}for(l in s)if(c=s[l],I=a[l],s.hasOwnProperty(l)&&(c!=null||I!=null))switch(l){case"value":c!==I&&(Ue=!0),j=c;break;case"defaultValue":c!==I&&(Ue=!0),E=c;break;case"multiple":c!==I&&(Ue=!0),_=c;default:c!==I&&Ge(t,n,l,c,s,I)}n=E,a=_,s=et,j!=null?er(t,!!a,j,!1):!!s!=!!a&&(n!=null?er(t,!!a,n,!0):er(t,!!a,a?[]:"",!1));return;case"textarea":et=j=null;for(E in a)if(l=a[E],a.hasOwnProperty(E)&&l!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,n,E,null,s,l)}for(_ in s)if(l=s[_],c=a[_],s.hasOwnProperty(_)&&(l!=null||c!=null))switch(_){case"value":l!==c&&(Ue=!0),j=l;break;case"defaultValue":l!==c&&(Ue=!0),et=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&Ge(t,n,_,l,s,c)}am(t,j,et);return;case"option":for(var zt in a)j=a[zt],a.hasOwnProperty(zt)&&j!=null&&!s.hasOwnProperty(zt)&&(zt==="selected"?t.selected=!1:Ge(t,n,zt,null,s,j));for(I in s)j=s[I],et=a[I],s.hasOwnProperty(I)&&j!==et&&(j!=null||et!=null)&&(I==="selected"?(j!==et&&(Ue=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):Ge(t,n,I,j,s,et));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)j=a[Kt],a.hasOwnProperty(Kt)&&j!=null&&!s.hasOwnProperty(Kt)&&Ge(t,n,Kt,null,s,j);for(q in s)if(j=s[q],et=a[q],s.hasOwnProperty(q)&&j!==et&&(j!=null||et!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:Ge(t,n,q,j,s,et)}return;default:if(Fc(n)){for(var pe in a)j=a[pe],a.hasOwnProperty(pe)&&j!==void 0&&!s.hasOwnProperty(pe)&&Bh(t,n,pe,void 0,s,j);for(st in s)j=s[st],et=a[st],!s.hasOwnProperty(st)||j===et||j===void 0&&et===void 0||Bh(t,n,st,j,s,et);return}}for(var Y in a)j=a[Y],a.hasOwnProperty(Y)&&j!=null&&!s.hasOwnProperty(Y)&&Ge(t,n,Y,null,s,j);for(_t in s)j=s[_t],et=a[_t],!s.hasOwnProperty(_t)||j===et||j==null&&et==null||Ge(t,n,_t,j,s,et)}function dv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],c=l.transferSize,_=l.initiatorType,E=l.duration;if(c&&E&&dv(_)){for(_=0,E=l.responseEnd,s+=1;s<a.length;s++){var I=a[s],q=I.startTime;if(q>E)break;var st=I.transferSize,_t=I.initiatorType;st&&dv(_t)&&(I=I.responseEnd,_+=st*(I<E?1:(E-q)/(I-q)))}if(--s,n+=8*(c+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Fh=null,Hh=null;function Jo(t){return t.nodeType===9?t:t.ownerDocument}function pv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function gv(t,n,a,s){return a=Jo(a).createElement(t),a[Lt]=s,a[Zt]=n,Dn(a,t,n),De(a),a}function Gh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vh=null;function Vy(){var t=window.event;return t&&t.type==="popstate"?t===Vh?!1:(Vh=t,!0):(Vh=null,!1)}var Xh=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,vv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Xh,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(t){return _v.resolve(null).then(t).catch(jy)}:Xh;function jy(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function xv(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),Fr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Qh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Qh(a);for(var c=a.firstChild;c;){var _=c.nextSibling,E=c.nodeName;c[Le]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&Qh(t.ownerDocument.body);a=l}while(a);Fr(n)}function Sv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function yv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Mv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Yy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function kh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Yy(n,a,t)}function qy(t){return t.documentElement.clientHeight}function Wy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Zy(t,n,a,s,l,c,_,E,I){var q=n.nodeType===9?n:n.ownerDocument;try{var st=q.startViewTransition({update:function(){var j=q.defaultView,et=j.navigation&&j.navigation.transition,zt=q.fonts.status;s();var Kt=[];if(zt==="loaded"&&(qy(q),q.fonts.status==="loading"&&Kt.push(q.fonts.ready)),zt=Kt.length,t!==null)for(var pe=t.suspenseyImages,Y=0,V=0;V<pe.length;V++){var J=pe[V];if(!J.complete){var mt=J.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<j.innerHeight&&mt.left<j.innerWidth){if(Y+=Xv(J),Y>Fu){Kt.length=zt;break}J=new Promise(Wy.bind(J)),Kt.push(J)}}}if(0<Kt.length)return j=Promise.race([Promise.all(Kt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(l,l),(et?Promise.allSettled([et.finished,j]):j).then(c,c);if(l(),et)return et.finished.then(c,c);c()},types:a});q.__reactViewTransition=st;var _t=[];return st.ready.then(function(){for(var j=q.documentElement.getAnimations({subtree:!0}),et=0;et<j.length;et++){var zt=j[et],Kt=zt.effect,pe=Kt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){_t.push(zt),zt=Kt.getKeyframes();for(var Y=pe=void 0,V=!0,J=0;J<zt.length;J++){var mt=zt[J],Yt=mt.width;if(pe===void 0)pe=Yt;else if(pe!==Yt){V=!1;break}if(Yt=mt.height,Y===void 0)Y=Yt;else if(Y!==Yt){V=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}V&&pe!==void 0&&Y!==void 0&&(Kt.setKeyframes(zt),V=getComputedStyle(Kt.target,Kt.pseudoElement),V.width!==pe||V.height!==Y)&&(V=zt[0],V.width=pe,V.height=Y,V=zt[zt.length-1],V.width=pe,V.height=Y,Kt.setKeyframes(zt))}}_()},function(j){q.__reactViewTransition===st&&(q.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&I(j)}finally{s(),l(),_()}}),st.finished.finally(function(){for(var j=0;j<_t.length;j++)_t[j].cancel();q.__reactViewTransition===st&&(q.__reactViewTransition=null),E()}),st}catch{return s(),l(),_(),null}}function Bs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Bs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Bs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[l])}return s},Bs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ev(t){return{name:t,group:new Bs("group",t),imagePair:new Bs("image-pair",t),old:new Bs("old",t),new:new Bs("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(bv(c,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(I){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(l=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Lr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,Ky,t,E,s)}this._eventListeners=c}};function Ky(t,n,a,s){return S(t).addEventListener(n,a,s),!1}ci.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=bv(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var c=l.cleanup;l=Lr(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Qy,t,a,l),s.splice(n,1),c!==null&&c()}};function Qy(t,n,a,s){return S(t).removeEventListener(n,a,s),!1}function Lr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Tv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function bv(t,n,a,s){if(t.length===0)return-1;s=Tv(s);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&Tv(c.optionsOrUseCapture)===s)return l}return-1}ci.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];s.addEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],s.removeEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Av,t,void 0,void 0)};function Av(t,n){return t.tag===6?!1:(t=S(t),uM(t,n))}ci.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,jh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Av(n[a],t);a--);};function jh(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=Jo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,Jy,t,void 0,void 0))};function Jy(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,$y,t,void 0,void 0)};function $y(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,tM,t,void 0,void 0);for(var a=n=0;a<Ui.length;a++){var s=Ui[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ui[n++]=s}Ui.length=n}};function tM(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Ui=[],Yh=!1;function eM(t,n,a){Ui.push({fragmentInstance:t,observer:n,instance:a}),Yh||(Yh=!0,cM(function(){Yh=!1;var s=Ui;Ui=[];for(var l=0;l<s.length;l++){var c=s[l];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,nM,t,void 0,void 0),t};function nM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,jh,a,void 0,void 0);var s=S(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),l=S(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),I=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&l===t||I||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||iM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function iM(t,n,a,s,l){var c=Oe(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=y(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=O(a,c,z),n===null?n=!1:(m(n,!0,D,c,a),c=v,v=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=O(s,c,z),n===null?n=!1:(m(n,!0,A,c,s),c=v,N=v=null,n=c!==null)),n):!1}function Rv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,jh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=S(s),Rv(t,a);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=S(l),Rv(l,a)):S(l).scrollIntoView(t),s+=a?-1:1}};function aM(t,n){return t=S(t),Cv(t,n),!1}function Cv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function wv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Lr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,E=0;E<Ui.length;E++){var I=Ui[E];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Ui[_++]=I)}Ui.length=_,c.observe(t)}),Cv(t,n))}function sM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Lr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?eM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function qh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qh(a),ie(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rM(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function oM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function Dv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function Wh(t){return t.data==="$?"||t.data==="$~"}function Zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kh=null;function Uv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Nv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function uM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function cM(t){vv(function(){vv(function(n){return t(n)})})}function Lv(t,n,a){switch(n=Jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ov(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Ge(t,n,s,null,Fy,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Fi&&(t.onclick=null),ie(t)}function Qh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ie(t)}var Ei=new Map,Pv=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=It.d;It.d={f:fM,r:hM,D:dM,C:pM,L:mM,m:gM,X:vM,S:_M,M:xM};function fM(){var t=ga.f(),n=Du();return t||n}function hM(t){var n=ve(t);n!==null&&n.tag===5&&n.type==="form"?Ig(n):ga.r(t)}var Or=typeof document>"u"?null:document;function zv(t,n,a){var s=Or;if(s&&typeof n=="string"&&n){var l=mi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Pv.has(l)||(Pv.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Dn(n,"link",t),De(n),s.head.appendChild(n)))}}function dM(t){ga.D(t),zv("dns-prefetch",t,null)}function pM(t,n){ga.C(t,n),zv("preconnect",t,n)}function mM(t,n,a){ga.L(t,n,a);var s=Or;if(s&&t&&n){var l='link[rel="preload"][as="'+mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+mi(a.imageSizes)+'"]')):l+='[href="'+mi(t)+'"]';var c=l;switch(n){case"style":c=Pr(t);break;case"script":c=zr(t)}if(!(Ei.has(c)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ei.set(c,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(tl(c))||n==="script"&&s.querySelector(el(c))))){var _=s.createElement("link");Dn(_,"link",t),n==="style"&&(_[we]=!0,_.onload=_.onerror=function(){Da(_)}),De(_),s.head.appendChild(_)}}}function gM(t,n){ga.m(t,n);var a=Or;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+mi(s)+'"][href="'+mi(t)+'"]',c=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=zr(t)}if(!Ei.has(c)&&(t=L({rel:"modulepreload",href:t},n),Ei.set(c,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(c)))return}s=a.createElement("link"),Dn(s,"link",t),De(s),a.head.appendChild(s)}}}function _M(t,n,a){ga.S(t,n,a);var s=Or;if(s&&t){var l=ni(s).hoistableStyles,c=Pr(t);n=n||"default";var _=l.get(c);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(tl(c)))E.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ei.get(c))&&Jh(t,a);var I=_=s.createElement("link");De(I),Dn(I,"link",t),I._p=new Promise(function(q,st){I.onload=q,I.onerror=st}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Iu(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},l.set(c,_)}}}function vM(t,n){ga.X(t,n);var a=Or;if(a&&t){var s=ni(a).hoistableScripts,l=zr(t),c=s.get(l);c||(c=a.querySelector(el(l)),c||(t=L({src:t,async:!0},n),(n=Ei.get(l))&&$h(t,n),c=a.createElement("script"),De(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function xM(t,n){ga.M(t,n);var a=Or;if(a&&t){var s=ni(a).hoistableScripts,l=zr(t),c=s.get(l);c||(c=a.querySelector(el(l)),c||(t=L({src:t,async:!0,type:"module"},n),(n=Ei.get(l))&&$h(t,n),c=a.createElement("script"),De(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function Iv(t,n,a,s){var l=(l=Ye.current)?$o(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Pr(a.href),n=ni(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Pr(a.href);var c=ni(l).hoistableStyles,_=c.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=l.querySelector(tl(t)))?c._p||(_.instance=c,_.state.loading=5):(c=Ei.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(t,c)),SM(l,t,c,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zr(a),n=ni(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Pr(t){return'href="'+mi(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function Bv(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function SM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[we]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[we]=!0,n.onload=n.onerror=Da.bind(null,n),Dn(n,"link",a),De(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function zr(t){return'[src="'+mi(t)+'"]'}function el(t){return"script[async]"+t}function Fv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+mi(a.href)+'"]');if(s)return n.instance=s,De(s),s;var l=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),De(s),Dn(s,"style",l),Iu(s,a.precedence,t),n.instance=s;case"stylesheet":l=Pr(a.href);var c=t.querySelector(tl(l));if(c)return n.state.loading|=4,n.instance=c,De(c),c;s=Bv(a),(l=Ei.get(l))&&Jh(s,l),c=(t.ownerDocument||t).createElement("link"),De(c);var _=c;return _._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Dn(c,"link",s),n.state.loading|=4,Iu(c,a.precedence,t),n.instance=c;case"script":return c=zr(a.src),(l=t.querySelector(el(c)))?(n.instance=l,De(l),l):(s=a,(l=Ei.get(c))&&(s=L({},a),$h(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),De(l),Dn(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Iu(s,a.precedence,t));return n.instance}function Iu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,c=l,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bu=null;function Hv(t,n,a){if(Bu===null){var s=new Map,l=Bu=new Map;l.set(a,s)}else l=Bu,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Le]||c[Lt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(c):s.set(_,[c])}}return s}function td(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function yM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Vv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Xv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function kv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Xv(n),t.suspenseyImages.push(n)),t=TM.bind(t),n.decode().then(t,t))}function MM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Pr(s.href),c=n.querySelector(tl(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,De(c);return}c=n.ownerDocument||n,s=Bv(s),(l=Ei.get(l))&&Jh(s,l),c=c.createElement("link"),De(c);var _=c;_._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Dn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Fu=0;function EM(t,n){return t.stylesheets&&t.count===0&&Gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Fu===0&&(Fu=62500*Gy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Fu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function jv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Gu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,jv(this)}function TM(){this.imgCount--,jv(this)}var Hu=null;function Gu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hu=new Map,n.forEach(bM,t),Hu=null,nl.call(t))}function bM(t,n){if(!(n.state.loading&4)){var a=Hu.get(t);if(a)var s=a.get(null);else{a=new Map,Hu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var _=l[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}l=n.instance,_=l.getAttribute("data-precedence"),c=a.get(_)||s,c===s&&a.set(null,l),a.set(_,l),this.count++,s=nl.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Ir={$$typeof:ct,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function AM(t,n,a,s,l,c,_,E,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Yv(t,n,a,s,l,c,_,E,I,q,st,_t){return t=new AM(t,n,a,_,I,q,st,_t,E),n=1,c===!0&&(n|=24),c=jn(3,null,null,n),t.current=c,c.stateNode=t,n=mf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},xf(c),t}function qv(t){return t?(t=ur,t):ur}function Wv(t,n,a,s,l,c){l=qv(l),s.context===null?s.context=l:s.pendingContext=l,s=Fa(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ha(t,s,n),a!==null&&(Zn(a,t,n),Lo(a,t,n))}function Zv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ed(t,n){Zv(t,n),(t=t.alternate)&&Zv(t,n)}function Kv(t){if(t.tag===13||t.tag===31){var n=ys(t,67108864);n!==null&&Zn(n,t,67108864),ed(t,67108864)}}function Qv(t){if(t.tag===13||t.tag===31){var n=ui();n=ut(n);var a=ys(t,n);a!==null&&Zn(a,t,n),ed(t,n)}}var Br=!0;function RM(t,n,a,s){var l=xt.T;xt.T=null;var c=It.p;try{It.p=2,nd(t,n,a,s)}finally{It.p=c,xt.T=l}}function CM(t,n,a,s){var l=xt.T;xt.T=null;var c=It.p;try{It.p=8,nd(t,n,a,s)}finally{It.p=c,xt.T=l}}function nd(t,n,a,s){if(Br){var l=id(s);if(l===null)Ih(t,n,s,Vu,a),$v(t,s);else if(DM(l,t,n,a,s))s.stopPropagation();else if($v(t,s),n&4&&-1<wM.indexOf(t)){for(;l!==null;){var c=ve(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=pi(c.pendingLanes);if(_!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var I=1<<31-Ln(_);E.entanglements[1]|=I,_&=~I}Zi(c),(Pe&6)===0&&(Ru=X()+500,Zo(0))}}break;case 31:case 13:E=ys(c,2),E!==null&&Zn(E,c,2),Du(),ed(c,2)}if(c=id(s),c===null&&Ih(t,n,s,Vu,a),c===l)break;l=c}l!==null&&s.stopPropagation()}else Ih(t,n,s,null,a)}}function id(t){return t=Gc(t),ad(t)}var Vu=null;function ad(t){if(Vu=null,t=Oe(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vu=t,null}function Jv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case Ot:return 2;case qt:return 8;case At:case St:return 32;case Qt:return 268435456;default:return 32}default:return 32}}var sd=!1,Ja=null,$a=null,ts=null,il=new Map,al=new Map,es=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $v(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function sl(t,n,a,s,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ve(n),n!==null&&Kv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function DM(t,n,a,s,l){switch(n){case"focusin":return Ja=sl(Ja,t,n,a,s,l),!0;case"dragenter":return $a=sl($a,t,n,a,s,l),!0;case"mouseover":return ts=sl(ts,t,n,a,s,l),!0;case"pointerover":var c=l.pointerId;return il.set(c,sl(il.get(c)||null,t,n,a,s,l)),!0;case"gotpointercapture":return c=l.pointerId,al.set(c,sl(al.get(c)||null,t,n,a,s,l)),!0}return!1}function t0(t){var n=Oe(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gt(t.priority,function(){Qv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Gt(t.priority,function(){Qv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Hc=s,a.target.dispatchEvent(s),Hc=null}else return n=ve(a),n!==null&&Kv(n),t.blockedOn=a,!1;n.shift()}return!0}function e0(t,n,a){Xu(t)&&a.delete(n)}function UM(){sd=!1,Ja!==null&&Xu(Ja)&&(Ja=null),$a!==null&&Xu($a)&&($a=null),ts!==null&&Xu(ts)&&(ts=null),il.forEach(e0),al.forEach(e0)}function ku(t,n){t.blockedOn===n&&(t.blockedOn=null,sd||(sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,UM)))}var ju=null;function n0(t){ju!==t&&(ju=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ju===t&&(ju=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(ad(s||a)===null)continue;break}var c=ve(a);c!==null&&(t.splice(n,3),n-=3,Hf(c,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function Fr(t){function n(I){return ku(I,t)}Ja!==null&&ku(Ja,t),$a!==null&&ku($a,t),ts!==null&&ku(ts,t),il.forEach(n),al.forEach(n);for(var a=0;a<es.length;a++){var s=es[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)t0(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],c=a[s+1],_=l[Zt]||null;if(typeof c=="function")_||n0(a);else if(_){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,_=c[Zt]||null)E=_.formAction;else if(ad(l)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),n0(a)}}}function i0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function rd(t){this._internalRoot=t}Yu.prototype.render=rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();Wv(a,s,t,n,null,null)},Yu.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Wv(t.current,2,null,t,null,null),Du(),n[ae]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,t),a===0&&t0(t)}};var a0=e.version;if(a0!=="19.3.1")throw Error(r(527,a0,"19.3.1"));It.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var NM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{be=qu.inject(NM),tn=qu}catch{}}return ol.createRoot=function(t,n){if(!u(t))throw Error(r(299));var a=!1,s="",l=qg,c=Wg,_=Zg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Yv(t,1,!1,null,null,a,s,null,l,c,_,i0),t[ae]=n.current,zh(t),new rd(n)},ol.hydrateRoot=function(t,n,a){if(!u(t))throw Error(r(299));var s=!1,l="",c=qg,_=Wg,E=Zg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Yv(t,1,!0,n,a??null,s,l,I,c,_,E,i0),n.context=qv(null),a=n.current,s=ui(),s=ut(s),l=Fa(s),l.callback=null,Ha(a,l,s),a=s,n.current.lanes=a,vs(n,a),Zi(n),t[ae]=n.current,zh(t),new Yu(n)},ol.version="19.3.1",ol}var p0;function XM(){if(p0)return ud.exports;p0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ud.exports=VM(),ud.exports}var kM=XM();const Hp="180",ao={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jM=0,m0=1,YM=2,Mx=1,qM=2,Ea=3,ds=0,ti=1,Ta=2,fs=0,so=1,g0=2,_0=3,v0=4,WM=5,Ys=100,ZM=101,KM=102,QM=103,JM=104,$M=200,tE=201,eE=202,nE=203,qd=204,Wd=205,iE=206,aE=207,sE=208,rE=209,oE=210,lE=211,uE=212,cE=213,fE=214,Zd=0,Kd=1,Qd=2,oo=3,Jd=4,$d=5,tp=6,ep=7,Ex=0,hE=1,dE=2,hs=0,pE=1,mE=2,gE=3,_E=4,vE=5,xE=6,SE=7,Tx=300,lo=301,uo=302,np=303,ip=304,Uc=306,ap=1e3,Ws=1001,sp=1002,Ii=1003,yE=1004,Wu=1005,Qi=1006,dd=1007,Zs=1008,Ra=1009,bx=1010,Ax=1011,ml=1012,Gp=1013,Ks=1014,ba=1015,Sl=1016,Vp=1017,Xp=1018,gl=1020,Rx=35902,Cx=35899,wx=1021,Dx=1022,zi=1023,_l=1026,vl=1027,Ux=1028,kp=1029,Nx=1030,jp=1031,Yp=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,rp=35840,op=35841,lp=35842,up=35843,cp=36196,fp=37492,hp=37496,dp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,xp=37814,Sp=37815,yp=37816,Mp=37817,Ep=37818,Tp=37819,bp=37820,Ap=37821,Rp=36492,Cp=36494,wp=36495,Dp=36283,Up=36284,Np=36285,Lp=36286,ME=3200,EE=3201,TE=0,bE=1,cs="",$n="srgb",co="srgb-linear",Ac="linear",ke="srgb",Hr=7680,x0=519,AE=512,RE=513,CE=514,Lx=515,wE=516,DE=517,UE=518,NE=519,S0=35044,y0="300 es",Ji=2e3,Rc=2001;class $s{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const u=r[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const u=r.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,Op=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function LE(o,e){return(o%e+e)%e}function pd(o,e,i){return(1-i)*o+i*e}function ll(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const OE={DEG2RAD:Tc};class _e{constructor(e=0,i=0){_e.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6],this.y=u[1]*i+u[4]*r+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),u=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*u+e.x,this.y=f*u+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qs{constructor(e=0,i=0,r=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=u}static slerpFlat(e,i,r,u,f,h,d){let g=r[u+0],p=r[u+1],x=r[u+2],m=r[u+3];const y=f[h+0],M=f[h+1],b=f[h+2],R=f[h+3];if(d===0){e[i+0]=g,e[i+1]=p,e[i+2]=x,e[i+3]=m;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(m!==R||g!==y||p!==M||x!==b){let S=1-d;const v=g*y+p*M+x*b+m*R,N=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const z=Math.sqrt(D),O=Math.atan2(z,v*N);S=Math.sin(S*O)/z,d=Math.sin(d*O)/z}const A=d*N;if(g=g*S+y*A,p=p*S+M*A,x=x*S+b*A,m=m*S+R*A,S===1-d){const z=1/Math.sqrt(g*g+p*p+x*x+m*m);g*=z,p*=z,x*=z,m*=z}}e[i]=g,e[i+1]=p,e[i+2]=x,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,u,f,h){const d=r[u],g=r[u+1],p=r[u+2],x=r[u+3],m=f[h],y=f[h+1],M=f[h+2],b=f[h+3];return e[i]=d*b+x*m+g*M-p*y,e[i+1]=g*b+x*y+p*m-d*M,e[i+2]=p*b+x*M+d*y-g*m,e[i+3]=x*b-d*m-g*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,u){return this._x=e,this._y=i,this._z=r,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,g=Math.sin,p=d(r/2),x=d(u/2),m=d(f/2),y=g(r/2),M=g(u/2),b=g(f/2);switch(h){case"XYZ":this._x=y*x*m+p*M*b,this._y=p*M*m-y*x*b,this._z=p*x*b+y*M*m,this._w=p*x*m-y*M*b;break;case"YXZ":this._x=y*x*m+p*M*b,this._y=p*M*m-y*x*b,this._z=p*x*b-y*M*m,this._w=p*x*m+y*M*b;break;case"ZXY":this._x=y*x*m-p*M*b,this._y=p*M*m+y*x*b,this._z=p*x*b+y*M*m,this._w=p*x*m-y*M*b;break;case"ZYX":this._x=y*x*m-p*M*b,this._y=p*M*m+y*x*b,this._z=p*x*b-y*M*m,this._w=p*x*m+y*M*b;break;case"YZX":this._x=y*x*m+p*M*b,this._y=p*M*m+y*x*b,this._z=p*x*b-y*M*m,this._w=p*x*m-y*M*b;break;case"XZY":this._x=y*x*m-p*M*b,this._y=p*M*m-y*x*b,this._z=p*x*b+y*M*m,this._w=p*x*m+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,u=Math.sin(r);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],u=i[4],f=i[8],h=i[1],d=i[5],g=i[9],p=i[2],x=i[6],m=i[10],y=r+d+m;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-g)*M,this._y=(f-p)*M,this._z=(h-u)*M}else if(r>d&&r>m){const M=2*Math.sqrt(1+r-d-m);this._w=(x-g)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+p)/M}else if(d>m){const M=2*Math.sqrt(1+d-r-m);this._w=(f-p)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(g+x)/M}else{const M=2*Math.sqrt(1+m-r-d);this._w=(h-u)/M,this._x=(f+p)/M,this._y=(g+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const u=Math.min(1,i/r);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,u=e._y,f=e._z,h=e._w,d=i._x,g=i._y,p=i._z,x=i._w;return this._x=r*x+h*d+u*p-f*g,this._y=u*x+h*g+f*d-r*p,this._z=f*x+h*p+r*g-u*d,this._w=h*x-r*d-u*g-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=u,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*u+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const p=Math.sqrt(g),x=Math.atan2(p,d),m=Math.sin((1-i)*x)/p,y=Math.sin(i*x)/p;return this._w=h*m+this._w*y,this._x=r*m+this._x*y,this._y=u*m+this._y*y,this._z=f*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),u=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(M0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(M0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*u,this.y=f[1]*i+f[4]*r+f[7]*u,this.z=f[2]*i+f[5]*r+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*u+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*u+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*u+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,u=this.z,f=e.x,h=e.y,d=e.z,g=e.w,p=2*(h*u-d*r),x=2*(d*i-f*u),m=2*(f*r-h*i);return this.x=i+g*p+h*m-d*x,this.y=r+g*x+d*p-f*m,this.z=u+g*m+f*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*u,this.y=f[1]*i+f[5]*r+f[9]*u,this.z=f[2]*i+f[6]*r+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,u=e.y,f=e.z,h=i.x,d=i.y,g=i.z;return this.x=u*g-f*d,this.y=f*h-r*g,this.z=r*d-u*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,u=this.z-e.z;return i*i+r*r+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const u=Math.sin(i)*e;return this.x=u*Math.sin(r),this.y=Math.cos(i)*e,this.z=u*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new $,M0=new Qs;class me{constructor(e,i,r,u,f,h,d,g,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,g,p)}set(e,i,r,u,f,h,d,g,p){const x=this.elements;return x[0]=e,x[1]=u,x[2]=d,x[3]=i,x[4]=f,x[5]=g,x[6]=r,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[3],g=r[6],p=r[1],x=r[4],m=r[7],y=r[2],M=r[5],b=r[8],R=u[0],S=u[3],v=u[6],N=u[1],D=u[4],A=u[7],z=u[2],O=u[5],L=u[8];return f[0]=h*R+d*N+g*z,f[3]=h*S+d*D+g*O,f[6]=h*v+d*A+g*L,f[1]=p*R+x*N+m*z,f[4]=p*S+x*D+m*O,f[7]=p*v+x*A+m*L,f[2]=y*R+M*N+b*z,f[5]=y*S+M*D+b*O,f[8]=y*v+M*A+b*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-r*f*x+r*d*g+u*f*p-u*h*g}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],x=e[8],m=x*h-d*p,y=d*g-x*f,M=p*f-h*g,b=i*m+r*y+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=m*R,e[1]=(u*p-x*r)*R,e[2]=(d*r-u*h)*R,e[3]=y*R,e[4]=(x*i-u*g)*R,e[5]=(u*f-d*i)*R,e[6]=M*R,e[7]=(r*g-p*i)*R,e[8]=(h*i-r*f)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,u,f,h,d){const g=Math.cos(f),p=Math.sin(f);return this.set(r*g,r*p,-r*(g*h+p*d)+h+e,-u*p,u*g,-u*(-p*h+g*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(gd.makeScale(e,i)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,i){return this.premultiply(gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<9;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new me;function Ox(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function PE(){const o=Cc("canvas");return o.style.display="block",o}const E0={};function xl(o){o in E0||(E0[o]=!0,console.warn(o))}function zE(o,e,i){return new Promise(function(r,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const T0=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b0=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IE(){const o={enabled:!0,workingColorSpace:co,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(u.r=Aa(u.r),u.g=Aa(u.g),u.b=Aa(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(u.r=ro(u.r),u.g=ro(u.g),u.b=ro(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===cs?Ac:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return xl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return xl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[co]:{primaries:e,whitePoint:r,transfer:Ac,toXYZ:T0,fromXYZ:b0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:T0,fromXYZ:b0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),o}const Ne=IE();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gr;class BE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gr===void 0&&(Gr=Cc("canvas")),Gr.width=e.width,Gr.height=e.height;const u=Gr.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),r=Gr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const u=r.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Aa(f[h]/255)*255;return r.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Aa(i[r]/255)*255):i[r]=Aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(_d(u[h].image)):f.push(_d(u[h]))}else f=_d(u);r.url=f}return i||(e.images[this.uuid]=r),r}}function _d(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?BE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HE=0;const vd=new $;class ei extends $s{constructor(e=ei.DEFAULT_IMAGE,i=ei.DEFAULT_MAPPING,r=Ws,u=Ws,f=Qi,h=Zs,d=zi,g=Ra,p=ei.DEFAULT_ANISOTROPY,x=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=yl(),this.name="",this.source=new qp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=g,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}u&&r&&u.isVector2&&r.isVector2||u&&r&&u.isVector3&&r.isVector3||u&&r&&u.isMatrix3&&r.isMatrix3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ap:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ap:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Tx;ei.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,r=0,u=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,u){return this.x=e,this.y=i,this.z=r,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*u+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*u+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*u+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,u,f;const g=e.elements,p=g[0],x=g[4],m=g[8],y=g[1],M=g[5],b=g[9],R=g[2],S=g[6],v=g[10];if(Math.abs(x-y)<.01&&Math.abs(m-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(m+R)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,A=(M+1)/2,z=(v+1)/2,O=(x+y)/4,L=(m+R)/4,G=(b+S)/4;return D>A&&D>z?D<.01?(r=0,u=.707106781,f=.707106781):(r=Math.sqrt(D),u=O/r,f=L/r):A>z?A<.01?(r=.707106781,u=0,f=.707106781):(u=Math.sqrt(A),r=O/u,f=G/u):z<.01?(r=.707106781,u=.707106781,f=0):(f=Math.sqrt(z),r=L/f,u=G/f),this.set(r,u,f,i),this}let N=Math.sqrt((S-b)*(S-b)+(m-R)*(m-R)+(y-x)*(y-x));return Math.abs(N)<.001&&(N=1),this.x=(S-b)/N,this.y=(m-R)/N,this.z=(y-x)/N,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GE extends $s{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i);const u={width:e,height:i,depth:r.depth},f=new ei(u);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Qi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=r,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new qp(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends GE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Px extends ei{constructor(e=null,i=1,r=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VE extends ei{constructor(e=null,i=1,r=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(f,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zu.copy(r.boundingBox)),Zu.applyMatrix4(e.matrixWorld),this.union(Zu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),Ku.subVectors(this.max,ul),Vr.subVectors(e.a,ul),Xr.subVectors(e.b,ul),kr.subVectors(e.c,ul),is.subVectors(Xr,Vr),as.subVectors(kr,Xr),Fs.subVectors(Vr,kr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Fs.z,Fs.y,is.z,0,-is.x,as.z,0,-as.x,Fs.z,0,-Fs.x,-is.y,is.x,0,-as.y,as.x,0,-Fs.y,Fs.x,0];return!xd(i,Vr,Xr,kr,Ku)||(i=[1,0,0,0,1,0,0,0,1],!xd(i,Vr,Xr,kr,Ku))?!1:(Qu.crossVectors(is,as),i=[Qu.x,Qu.y,Qu.z],xd(i,Vr,Xr,kr,Ku))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new $,new $,new $,new $,new $,new $,new $,new $],Ni=new $,Zu=new ho,Vr=new $,Xr=new $,kr=new $,is=new $,as=new $,Fs=new $,ul=new $,Ku=new $,Qu=new $,Hs=new $;function xd(o,e,i,r,u){for(let f=0,h=o.length-3;f<=h;f+=3){Hs.fromArray(o,f);const d=u.x*Math.abs(Hs.x)+u.y*Math.abs(Hs.y)+u.z*Math.abs(Hs.z),g=e.dot(Hs),p=i.dot(Hs),x=r.dot(Hs);if(Math.max(-Math.max(g,p,x),Math.min(g,p,x))>d)return!1}return!0}const XE=new ho,cl=new $,Sd=new $;class Ml{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):XE.setFromPoints(e).getCenter(r);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),u=(r-this.radius)*.5;this.center.addScaledVector(cl,u/r),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(Sd)),this.expandByPoint(cl.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new $,yd=new $,Ju=new $,ss=new $,Md=new $,$u=new $,Ed=new $;class El{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,u){yd.copy(e).add(i).multiplyScalar(.5),Ju.copy(i).sub(e).normalize(),ss.copy(this.origin).sub(yd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(Ju),d=ss.dot(this.direction),g=-ss.dot(Ju),p=ss.lengthSq(),x=Math.abs(1-h*h);let m,y,M,b;if(x>0)if(m=h*g-d,y=h*d-g,b=f*x,m>=0)if(y>=-b)if(y<=b){const R=1/x;m*=R,y*=R,M=m*(m+h*y+2*d)+y*(h*m+y+2*g)+p}else y=f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;else y=-f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;else y<=-b?(m=Math.max(0,-(-h*f+d)),y=m>0?-f:Math.min(Math.max(-f,-g),f),M=-m*m+y*(y+2*g)+p):y<=b?(m=0,y=Math.min(Math.max(-f,-g),f),M=y*(y+2*g)+p):(m=Math.max(0,-(h*f+d)),y=m>0?f:Math.min(Math.max(-f,-g),f),M=-m*m+y*(y+2*g)+p);else y=h>0?-f:f,m=Math.max(0,-(h*y+d)),M=-m*m+y*(y+2*g)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(yd).addScaledVector(Ju,y),M}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),u=va.dot(va)-r*r,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=r-h,g=r+h;return g<0?null:d<0?this.at(g,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,u,f,h,d,g;const p=1/this.direction.x,x=1/this.direction.y,m=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,u=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,u=(e.min.x-y.x)*p),x>=0?(f=(e.min.y-y.y)*x,h=(e.max.y-y.y)*x):(f=(e.max.y-y.y)*x,h=(e.min.y-y.y)*x),r>h||f>u||((f>r||isNaN(r))&&(r=f),(h<u||isNaN(u))&&(u=h),m>=0?(d=(e.min.z-y.z)*m,g=(e.max.z-y.z)*m):(d=(e.max.z-y.z)*m,g=(e.min.z-y.z)*m),r>g||d>u)||((d>r||r!==r)&&(r=d),(g<u||u!==u)&&(u=g),u<0)?null:this.at(r>=0?r:u,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,u,f){Md.subVectors(i,e),$u.subVectors(r,e),Ed.crossVectors(Md,$u);let h=this.direction.dot(Ed),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ss.subVectors(this.origin,e);const g=d*this.direction.dot($u.crossVectors(ss,$u));if(g<0)return null;const p=d*this.direction.dot(Md.cross(ss));if(p<0||g+p>h)return null;const x=-d*ss.dot(Ed);return x<0?null:this.at(x/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,u,f,h,d,g,p,x,m,y,M,b,R,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,g,p,x,m,y,M,b,R,S)}set(e,i,r,u,f,h,d,g,p,x,m,y,M,b,R,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=u,v[1]=f,v[5]=h,v[9]=d,v[13]=g,v[2]=p,v[6]=x,v[10]=m,v[14]=y,v[3]=M,v[7]=b,v[11]=R,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,u=1/jr.setFromMatrixColumn(e,0).length(),f=1/jr.setFromMatrixColumn(e,1).length(),h=1/jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*u,i[1]=r[1]*u,i[2]=r[2]*u,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,u=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),g=Math.cos(u),p=Math.sin(u),x=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const y=h*x,M=h*m,b=d*x,R=d*m;i[0]=g*x,i[4]=-g*m,i[8]=p,i[1]=M+b*p,i[5]=y-R*p,i[9]=-d*g,i[2]=R-y*p,i[6]=b+M*p,i[10]=h*g}else if(e.order==="YXZ"){const y=g*x,M=g*m,b=p*x,R=p*m;i[0]=y+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*m,i[5]=h*x,i[9]=-d,i[2]=M*d-b,i[6]=R+y*d,i[10]=h*g}else if(e.order==="ZXY"){const y=g*x,M=g*m,b=p*x,R=p*m;i[0]=y-R*d,i[4]=-h*m,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*x,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*g}else if(e.order==="ZYX"){const y=h*x,M=h*m,b=d*x,R=d*m;i[0]=g*x,i[4]=b*p-M,i[8]=y*p+R,i[1]=g*m,i[5]=R*p+y,i[9]=M*p-b,i[2]=-p,i[6]=d*g,i[10]=h*g}else if(e.order==="YZX"){const y=h*g,M=h*p,b=d*g,R=d*p;i[0]=g*x,i[4]=R-y*m,i[8]=b*m+M,i[1]=m,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*m+b,i[10]=y-R*m}else if(e.order==="XZY"){const y=h*g,M=h*p,b=d*g,R=d*p;i[0]=g*x,i[4]=-m,i[8]=p*x,i[1]=y*m+R,i[5]=h*x,i[9]=M*m-b,i[2]=b*m-M,i[6]=d*x,i[10]=R*m+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kE,e,jE)}lookAt(e,i,r){const u=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),rs.crossVectors(r,fi),rs.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),rs.crossVectors(r,fi)),rs.normalize(),tc.crossVectors(fi,rs),u[0]=rs.x,u[4]=tc.x,u[8]=fi.x,u[1]=rs.y,u[5]=tc.y,u[9]=fi.y,u[2]=rs.z,u[6]=tc.z,u[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[4],g=r[8],p=r[12],x=r[1],m=r[5],y=r[9],M=r[13],b=r[2],R=r[6],S=r[10],v=r[14],N=r[3],D=r[7],A=r[11],z=r[15],O=u[0],L=u[4],G=u[8],U=u[12],w=u[1],B=u[5],nt=u[9],ft=u[13],vt=u[2],ct=u[6],k=u[10],rt=u[14],W=u[3],Mt=u[7],Et=u[11],Xt=u[15];return f[0]=h*O+d*w+g*vt+p*W,f[4]=h*L+d*B+g*ct+p*Mt,f[8]=h*G+d*nt+g*k+p*Et,f[12]=h*U+d*ft+g*rt+p*Xt,f[1]=x*O+m*w+y*vt+M*W,f[5]=x*L+m*B+y*ct+M*Mt,f[9]=x*G+m*nt+y*k+M*Et,f[13]=x*U+m*ft+y*rt+M*Xt,f[2]=b*O+R*w+S*vt+v*W,f[6]=b*L+R*B+S*ct+v*Mt,f[10]=b*G+R*nt+S*k+v*Et,f[14]=b*U+R*ft+S*rt+v*Xt,f[3]=N*O+D*w+A*vt+z*W,f[7]=N*L+D*B+A*ct+z*Mt,f[11]=N*G+D*nt+A*k+z*Et,f[15]=N*U+D*ft+A*rt+z*Xt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],u=e[8],f=e[12],h=e[1],d=e[5],g=e[9],p=e[13],x=e[2],m=e[6],y=e[10],M=e[14],b=e[3],R=e[7],S=e[11],v=e[15];return b*(+f*g*m-u*p*m-f*d*y+r*p*y+u*d*M-r*g*M)+R*(+i*g*M-i*p*y+f*h*y-u*h*M+u*p*x-f*g*x)+S*(+i*p*m-i*d*M-f*h*m+r*h*M+f*d*x-r*p*x)+v*(-u*d*x-i*g*m+i*d*y+u*h*m-r*h*y+r*g*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],p=e[7],x=e[8],m=e[9],y=e[10],M=e[11],b=e[12],R=e[13],S=e[14],v=e[15],N=m*S*p-R*y*p+R*g*M-d*S*M-m*g*v+d*y*v,D=b*y*p-x*S*p-b*g*M+h*S*M+x*g*v-h*y*v,A=x*R*p-b*m*p+b*d*M-h*R*M-x*d*v+h*m*v,z=b*m*g-x*R*g-b*d*y+h*R*y+x*d*S-h*m*S,O=i*N+r*D+u*A+f*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=N*L,e[1]=(R*y*f-m*S*f-R*u*M+r*S*M+m*u*v-r*y*v)*L,e[2]=(d*S*f-R*g*f+R*u*p-r*S*p-d*u*v+r*g*v)*L,e[3]=(m*g*f-d*y*f-m*u*p+r*y*p+d*u*M-r*g*M)*L,e[4]=D*L,e[5]=(x*S*f-b*y*f+b*u*M-i*S*M-x*u*v+i*y*v)*L,e[6]=(b*g*f-h*S*f-b*u*p+i*S*p+h*u*v-i*g*v)*L,e[7]=(h*y*f-x*g*f+x*u*p-i*y*p-h*u*M+i*g*M)*L,e[8]=A*L,e[9]=(b*m*f-x*R*f-b*r*M+i*R*M+x*r*v-i*m*v)*L,e[10]=(h*R*f-b*d*f+b*r*p-i*R*p-h*r*v+i*d*v)*L,e[11]=(x*d*f-h*m*f-x*r*p+i*m*p+h*r*M-i*d*M)*L,e[12]=z*L,e[13]=(x*R*u-b*m*u+b*r*y-i*R*y-x*r*S+i*m*S)*L,e[14]=(b*d*u-h*R*u-b*r*g+i*R*g+h*r*S-i*d*S)*L,e[15]=(h*m*u-x*d*u+x*r*g-i*m*g-h*r*y+i*d*y)*L,this}scale(e){const i=this.elements,r=e.x,u=e.y,f=e.z;return i[0]*=r,i[4]*=u,i[8]*=f,i[1]*=r,i[5]*=u,i[9]*=f,i[2]*=r,i[6]*=u,i[10]*=f,i[3]*=r,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,u))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),u=Math.sin(i),f=1-r,h=e.x,d=e.y,g=e.z,p=f*h,x=f*d;return this.set(p*h+r,p*d-u*g,p*g+u*d,0,p*d+u*g,x*d+r,x*g-u*h,0,p*g-u*d,x*g+u*h,f*g*g+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,u,f,h){return this.set(1,r,f,0,e,1,h,0,i,u,1,0,0,0,0,1),this}compose(e,i,r){const u=this.elements,f=i._x,h=i._y,d=i._z,g=i._w,p=f+f,x=h+h,m=d+d,y=f*p,M=f*x,b=f*m,R=h*x,S=h*m,v=d*m,N=g*p,D=g*x,A=g*m,z=r.x,O=r.y,L=r.z;return u[0]=(1-(R+v))*z,u[1]=(M+A)*z,u[2]=(b-D)*z,u[3]=0,u[4]=(M-A)*O,u[5]=(1-(y+v))*O,u[6]=(S+N)*O,u[7]=0,u[8]=(b+D)*L,u[9]=(S-N)*L,u[10]=(1-(y+R))*L,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,r){const u=this.elements;let f=jr.set(u[0],u[1],u[2]).length();const h=jr.set(u[4],u[5],u[6]).length(),d=jr.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Li.copy(this);const p=1/f,x=1/h,m=1/d;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=x,Li.elements[5]*=x,Li.elements[6]*=x,Li.elements[8]*=m,Li.elements[9]*=m,Li.elements[10]*=m,i.setFromRotationMatrix(Li),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,u,f,h,d=Ji,g=!1){const p=this.elements,x=2*f/(i-e),m=2*f/(r-u),y=(i+e)/(i-e),M=(r+u)/(r-u);let b,R;if(g)b=f/(h-f),R=h*f/(h-f);else if(d===Ji)b=-(h+f)/(h-f),R=-2*h*f/(h-f);else if(d===Rc)b=-h/(h-f),R=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=m,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,u,f,h,d=Ji,g=!1){const p=this.elements,x=2/(i-e),m=2/(r-u),y=-(i+e)/(i-e),M=-(r+u)/(r-u);let b,R;if(g)b=1/(h-f),R=h/(h-f);else if(d===Ji)b=-2/(h-f),R=-(h+f)/(h-f);else if(d===Rc)b=-1/(h-f),R=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=m,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<16;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const jr=new $,Li=new rn,kE=new $(0,0,0),jE=new $(1,1,1),rs=new $,tc=new $,fi=new $,A0=new rn,R0=new Qs;class Ca{constructor(e=0,i=0,r=0,u=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,u=this._order){return this._x=e,this._y=i,this._z=r,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],g=u[1],p=u[5],x=u[9],m=u[2],y=u[6],M=u[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return A0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return R0.setFromEuler(this),this.setFromQuaternion(R0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YE=0;const C0=new $,Yr=new Qs,xa=new rn,ec=new $,fl=new $,qE=new $,WE=new Qs,w0=new $(1,0,0),D0=new $(0,1,0),U0=new $(0,0,1),N0={type:"added"},ZE={type:"removed"},qr={type:"childadded",child:null},Td={type:"childremoved",child:null};class kn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new $,i=new Ca,r=new Qs,u=new $(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new rn},normalMatrix:{value:new me}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(w0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(U0,e)}translateOnAxis(e,i){return C0.copy(e).applyQuaternion(this.quaternion),this.position.add(C0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(w0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(U0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ec.copy(e):ec.set(e,i,r);const u=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(fl,ec,this.up):xa.lookAt(ec,fl,this.up),this.quaternion.setFromRotationMatrix(xa),u&&(xa.extractRotation(u.matrixWorld),Yr.setFromRotationMatrix(xa),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N0),qr.child=e,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ZE),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N0),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,u=this.children.length;r<u;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,qE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,WE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let p=0,x=g.length;p<x;p++){const m=g[p];f(e.shapes,m)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,p=this.material.length;g<p;g++)d.push(f(e.materials,this.material[g]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];u.animations.push(f(e.animations,g))}}if(i){const d=h(e.geometries),g=h(e.materials),p=h(e.textures),x=h(e.images),m=h(e.shapes),y=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),g.length>0&&(r.materials=g),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),m.length>0&&(r.shapes=m),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=u,r;function h(d){const g=[];for(const p in d){const x=d[p];delete x.metadata,g.push(x)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const u=e.children[r];this.add(u.clone())}return this}}kn.DEFAULT_UP=new $(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new $,Sa=new $,bd=new $,ya=new $,Wr=new $,Zr=new $,L0=new $,Ad=new $,Rd=new $,Cd=new $,wd=new ln,Dd=new ln,Ud=new ln;class Pi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,u){u.subVectors(r,i),Oi.subVectors(e,i),u.cross(Oi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,r,u,f){Oi.subVectors(u,i),Sa.subVectors(r,i),bd.subVectors(e,i);const h=Oi.dot(Oi),d=Oi.dot(Sa),g=Oi.dot(bd),p=Sa.dot(Sa),x=Sa.dot(bd),m=h*p-d*d;if(m===0)return f.set(0,0,0),null;const y=1/m,M=(p*g-d*x)*y,b=(h*x-d*g)*y;return f.set(1-M-b,b,M)}static containsPoint(e,i,r,u){return this.getBarycoord(e,i,r,u,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,r,u,f,h,d,g){return this.getBarycoord(e,i,r,u,ya)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,ya.x),g.addScaledVector(h,ya.y),g.addScaledVector(d,ya.z),g)}static getInterpolatedAttribute(e,i,r,u,f,h){return wd.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),wd.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,r),Ud.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(wd,f.x),h.addScaledVector(Dd,f.y),h.addScaledVector(Ud,f.z),h}static isFrontFacing(e,i,r,u){return Oi.subVectors(r,i),Sa.subVectors(e,i),Oi.cross(Sa).dot(u)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,u){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,r,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Oi.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,u,f){return Pi.getInterpolation(e,this.a,this.b,this.c,i,r,u,f)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,u=this.b,f=this.c;let h,d;Wr.subVectors(u,r),Zr.subVectors(f,r),Ad.subVectors(e,r);const g=Wr.dot(Ad),p=Zr.dot(Ad);if(g<=0&&p<=0)return i.copy(r);Rd.subVectors(e,u);const x=Wr.dot(Rd),m=Zr.dot(Rd);if(x>=0&&m<=x)return i.copy(u);const y=g*m-x*p;if(y<=0&&g>=0&&x<=0)return h=g/(g-x),i.copy(r).addScaledVector(Wr,h);Cd.subVectors(e,f);const M=Wr.dot(Cd),b=Zr.dot(Cd);if(b>=0&&M<=b)return i.copy(f);const R=M*p-g*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Zr,d);const S=x*b-M*m;if(S<=0&&m-x>=0&&M-b>=0)return L0.subVectors(f,u),d=(m-x)/(m-x+(M-b)),i.copy(u).addScaledVector(L0,d);const v=1/(S+R+y);return h=R*v,d=y*v,i.copy(r).addScaledVector(Wr,h).addScaledVector(Zr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ze{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,u=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,u),this}setHSL(e,i,r,u=Ne.workingColorSpace){if(e=LE(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Nd(h,f,e+1/3),this.g=Nd(h,f,e),this.b=Nd(h,f,e-1/3)}return Ne.colorSpaceToWorking(this,u),this}setStyle(e,i=$n){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=$n){const r=zx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Ne.workingToColorSpace(In.copy(this),e),Math.round(Te(In.r*255,0,255))*65536+Math.round(Te(In.g*255,0,255))*256+Math.round(Te(In.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(In.copy(this),i);const r=In.r,u=In.g,f=In.b,h=Math.max(r,u,f),d=Math.min(r,u,f);let g,p;const x=(d+h)/2;if(d===h)g=0,p=0;else{const m=h-d;switch(p=x<=.5?m/(h+d):m/(2-h-d),h){case r:g=(u-f)/m+(u<f?6:0);break;case u:g=(f-r)/m+2;break;case f:g=(r-u)/m+4;break}g/=6}return e.h=g,e.s=p,e.l=x,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=$n){Ne.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,u=In.b;return e!==$n?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(u*255)})`}offsetHSL(e,i,r){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(nc);const r=pd(os.h,nc.h,i),u=pd(os.s,nc.s,i),f=pd(os.l,nc.l,i);return this.setHSL(r,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*u,this.g=f[1]*i+f[4]*r+f[7]*u,this.b=f[2]*i+f[5]*r+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ze;ze.NAMES=zx;let KE=0;class po extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=so,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Wd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(r):u&&u.isVector3&&r&&r.isVector3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(r.blending=this.blending),this.side!==ds&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Wd&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}if(i){const f=u(e.textures),h=u(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const u=i.length;r=new Array(u);for(let f=0;f!==u;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zp extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new $,ic=new _e;let QE=0;class ta{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=S0,this.updateRanges=[],this.gpuType=ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[r+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(e),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ll(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,u){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),u=Kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this}setXYZW(e,i,r,u,f){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),u=Kn(u,this.array),f=Kn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S0&&(e.usage=this.usage),e}}class Ix extends ta{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Bx extends ta{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xn extends ta{constructor(e,i,r){super(new Float32Array(e),i,r)}}let JE=0;const Ti=new rn,Ld=new kn,Kr=new $,hi=new ho,hl=new ho,bn=new $;class di extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Bx:Ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new me().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,r){return Ti.makeTranslation(e,i,r),this.applyMatrix4(Ti),this}scale(e,i,r){return Ti.makeScale(e,i,r),this.applyMatrix4(Ti),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xn(r,3))}else{const r=Math.min(e.length,i.count);for(let u=0;u<r;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,u=i.length;r<u;r++){const f=i[r];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];hl.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(hi.min,hl.min),hi.expandByPoint(bn),bn.addVectors(hi.max,hl.max),hi.expandByPoint(bn)):(hi.expandByPoint(hl.min),hi.expandByPoint(hl.max))}hi.getCenter(r);let u=0;for(let f=0,h=e.count;f<h;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,r.distanceToSquared(bn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],g=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)bn.fromBufferAttribute(d,p),g&&(Kr.fromBufferAttribute(e,p),bn.add(Kr)),u=Math.max(u,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ta(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let G=0;G<r.count;G++)d[G]=new $,g[G]=new $;const p=new $,x=new $,m=new $,y=new _e,M=new _e,b=new _e,R=new $,S=new $;function v(G,U,w){p.fromBufferAttribute(r,G),x.fromBufferAttribute(r,U),m.fromBufferAttribute(r,w),y.fromBufferAttribute(f,G),M.fromBufferAttribute(f,U),b.fromBufferAttribute(f,w),x.sub(p),m.sub(p),M.sub(y),b.sub(y);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(m,-M.y).multiplyScalar(B),S.copy(m).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(B),d[G].add(R),d[U].add(R),d[w].add(R),g[G].add(S),g[U].add(S),g[w].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,U=N.length;G<U;++G){const w=N[G],B=w.start,nt=w.count;for(let ft=B,vt=B+nt;ft<vt;ft+=3)v(e.getX(ft+0),e.getX(ft+1),e.getX(ft+2))}const D=new $,A=new $,z=new $,O=new $;function L(G){z.fromBufferAttribute(u,G),O.copy(z);const U=d[G];D.copy(U),D.sub(z.multiplyScalar(z.dot(U))).normalize(),A.crossVectors(O,U);const B=A.dot(g[G])<0?-1:1;h.setXYZW(G,D.x,D.y,D.z,B)}for(let G=0,U=N.length;G<U;++G){const w=N[G],B=w.start,nt=w.count;for(let ft=B,vt=B+nt;ft<vt;ft+=3)L(e.getX(ft+0)),L(e.getX(ft+1)),L(e.getX(ft+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ta(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const u=new $,f=new $,h=new $,d=new $,g=new $,p=new $,x=new $,m=new $;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),R=e.getX(y+1),S=e.getX(y+2);u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),x.subVectors(h,f),m.subVectors(u,f),x.cross(m),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),d.add(x),g.add(x),p.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,g.x,g.y,g.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)u.fromBufferAttribute(i,y+0),f.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),x.subVectors(h,f),m.subVectors(u,f),x.cross(m),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,g){const p=d.array,x=d.itemSize,m=d.normalized,y=new p.constructor(g.length*x);let M=0,b=0;for(let R=0,S=g.length;R<S;R++){d.isInterleavedBufferAttribute?M=g[R]*d.data.stride+d.offset:M=g[R]*x;for(let v=0;v<x;v++)y[b++]=p[M++]}return new ta(y,x,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,r=this.index.array,u=this.attributes;for(const d in u){const g=u[d],p=e(g,r);i.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const g=[],p=f[d];for(let x=0,m=p.length;x<m;x++){const y=p[x],M=e(y,r);g.push(M)}i.morphAttributes[d]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const p=r[g];e.data.attributes[g]=p.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],x=[];for(let m=0,y=p.length;m<y;m++){const M=p[m];x.push(M.toJSON(e.data))}x.length>0&&(u[g]=x,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const u=e.attributes;for(const p in u){const x=u[p];this.setAttribute(p,x.clone(i))}const f=e.morphAttributes;for(const p in f){const x=[],m=f[p];for(let y=0,M=m.length;y<M;y++)x.push(m[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const m=h[p];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O0=new rn,Gs=new El,ac=new Ml,P0=new $,sc=new $,rc=new $,oc=new $,Od=new $,lc=new $,z0=new $,uc=new $;class $i extends kn{constructor(e=new di,i=new Zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,u=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){lc.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const x=d[g],m=f[g];x!==0&&(Od.fromBufferAttribute(m,e),h?lc.addScaledVector(Od,x):lc.addScaledVector(Od.sub(i),x))}i.add(lc)}return i}raycast(e,i){const r=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(f),Gs.copy(e.ray).recast(e.near),!(ac.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(ac,P0)===null||Gs.origin.distanceToSquared(P0)>(e.far-e.near)**2))&&(O0.copy(f).invert(),Gs.copy(e.ray).applyMatrix4(O0),!(r.boundingBox!==null&&Gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Gs)))}_computeIntersections(e,i,r){let u;const f=this.geometry,h=this.material,d=f.index,g=f.attributes.position,p=f.attributes.uv,x=f.attributes.uv1,m=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const S=y[b],v=h[S.materialIndex],N=Math.max(S.start,M.start),D=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let A=N,z=D;A<z;A+=3){const O=d.getX(A),L=d.getX(A+1),G=d.getX(A+2);u=cc(this,v,e,r,p,x,m,O,L,G),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=S.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let S=b,v=R;S<v;S+=3){const N=d.getX(S),D=d.getX(S+1),A=d.getX(S+2);u=cc(this,h,e,r,p,x,m,N,D,A),u&&(u.faceIndex=Math.floor(S/3),i.push(u))}}else if(g!==void 0)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const S=y[b],v=h[S.materialIndex],N=Math.max(S.start,M.start),D=Math.min(g.count,Math.min(S.start+S.count,M.start+M.count));for(let A=N,z=D;A<z;A+=3){const O=A,L=A+1,G=A+2;u=cc(this,v,e,r,p,x,m,O,L,G),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=S.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(g.count,M.start+M.count);for(let S=b,v=R;S<v;S+=3){const N=S,D=S+1,A=S+2;u=cc(this,h,e,r,p,x,m,N,D,A),u&&(u.faceIndex=Math.floor(S/3),i.push(u))}}}}function $E(o,e,i,r,u,f,h,d){let g;if(e.side===ti?g=r.intersectTriangle(h,f,u,!0,d):g=r.intersectTriangle(u,f,h,e.side===ds,d),g===null)return null;uc.copy(d),uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uc);return p<i.near||p>i.far?null:{distance:p,point:uc.clone(),object:o}}function cc(o,e,i,r,u,f,h,d,g,p){o.getVertexPosition(d,sc),o.getVertexPosition(g,rc),o.getVertexPosition(p,oc);const x=$E(o,e,i,r,sc,rc,oc,z0);if(x){const m=new $;Pi.getBarycoord(z0,sc,rc,oc,m),u&&(x.uv=Pi.getInterpolatedAttribute(u,d,g,p,m,new _e)),f&&(x.uv1=Pi.getInterpolatedAttribute(f,d,g,p,m,new _e)),h&&(x.normal=Pi.getInterpolatedAttribute(h,d,g,p,m,new $),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:g,c:p,normal:new $,materialIndex:0};Pi.getNormal(sc,rc,oc,y.normal),x.face=y,x.barycoord=m}return x}class Tl extends di{constructor(e=1,i=1,r=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const g=[],p=[],x=[],m=[];let y=0,M=0;b("z","y","x",-1,-1,r,i,e,h,f,0),b("z","y","x",1,-1,r,i,-e,h,f,1),b("x","z","y",1,1,e,r,i,u,h,2),b("x","z","y",1,-1,e,r,-i,u,h,3),b("x","y","z",1,-1,e,i,r,u,f,4),b("x","y","z",-1,-1,e,i,-r,u,f,5),this.setIndex(g),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(m,2));function b(R,S,v,N,D,A,z,O,L,G,U){const w=A/L,B=z/G,nt=A/2,ft=z/2,vt=O/2,ct=L+1,k=G+1;let rt=0,W=0;const Mt=new $;for(let Et=0;Et<k;Et++){const Xt=Et*B-ft;for(let se=0;se<ct;se++){const he=se*w-nt;Mt[R]=he*N,Mt[S]=Xt*D,Mt[v]=vt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[S]=0,Mt[v]=O>0?1:-1,x.push(Mt.x,Mt.y,Mt.z),m.push(se/L),m.push(1-Et/G),rt+=1}}for(let Et=0;Et<G;Et++)for(let Xt=0;Xt<L;Xt++){const se=y+Xt+ct*Et,he=y+Xt+ct*(Et+1),H=y+(Xt+1)+ct*(Et+1),dt=y+(Xt+1)+ct*Et;g.push(se,he,dt),g.push(he,H,dt),W+=6}d.addGroup(M,W,U),M+=W,y+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const u=o[i][r];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=u.clone():Array.isArray(u)?e[i][r]=u.slice():e[i][r]=u}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const r=fo(o[i]);for(const u in r)e[u]=r[u]}return e}function tT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Fx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const eT={clone:fo,merge:Xn};var nT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nT,this.fragmentShader=iT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=tT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?i.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[u]={type:"m4",value:h.toArray()}:i.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const u in this.extensions)this.extensions[u]===!0&&(r[u]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Hx extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new $,I0=new _e,B0=new _e;class bi extends Hx{constructor(e=50,i=1,r=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,i){return this.getViewBounds(e,I0,B0),i.subVectors(B0,I0)}setViewOffset(e,i,r,u,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Tc*.5*this.fov)/this.zoom,r=2*i,u=this.aspect*r,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;f+=h.offsetX*u/g,i-=h.offsetY*r/p,u*=h.width/g,r*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,Jr=1;class aT extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new bi(Qr,Jr,e,i);u.layers=this.layers,this.add(u);const f=new bi(Qr,Jr,e,i);f.layers=this.layers,this.add(f);const h=new bi(Qr,Jr,e,i);h.layers=this.layers,this.add(h);const d=new bi(Qr,Jr,e,i);d.layers=this.layers,this.add(d);const g=new bi(Qr,Jr,e,i);g.layers=this.layers,this.add(g);const p=new bi(Qr,Jr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,u,f,h,d,g]=i;for(const p of i)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,g,p,x]=this.children,m=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,u),e.render(i,f),e.setRenderTarget(r,1,u),e.render(i,h),e.setRenderTarget(r,2,u),e.render(i,d),e.setRenderTarget(r,3,u),e.render(i,g),e.setRenderTarget(r,4,u),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,u),e.render(i,x),e.setRenderTarget(m,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Gx extends ei{constructor(e=[],i=lo,r,u,f,h,d,g,p,x){super(e,i,r,u,f,h,d,g,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sT extends Js{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},u=[r,r,r,r,r,r];this.texture=new Gx(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Tl(5,5,5),f=new ps({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:fs});f.uniforms.tEquirect.value=i;const h=new $i(u,f),d=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Qi),new aT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,u);e.setRenderTarget(f)}}class no extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let u=null,f=null,h=null;const d=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const S=i.getJointPose(R,r),v=this._getHandJoint(p,R);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const x=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],y=x.position.distanceTo(m.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(u=i.getPose(e.targetRaySpace,r),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return d!==null&&(d.visible=u!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new no;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class oT extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zd=new $,lT=new $,uT=new me;class us{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,u){return this.normal.set(e,i,r),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const u=zd.subVectors(r,i).cross(lT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(zd),u=this.normal.dot(r);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||uT.getNormalMatrix(e),u=this.coplanarPoint(zd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new Ml,cT=new _e(.5,.5),fc=new $;class Vx{constructor(e=new us,i=new us,r=new us,u=new us,f=new us,h=new us){this.planes=[e,i,r,u,f,h]}set(e,i,r,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji,r=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],g=f[2],p=f[3],x=f[4],m=f[5],y=f[6],M=f[7],b=f[8],R=f[9],S=f[10],v=f[11],N=f[12],D=f[13],A=f[14],z=f[15];if(u[0].setComponents(p-h,M-x,v-b,z-N).normalize(),u[1].setComponents(p+h,M+x,v+b,z+N).normalize(),u[2].setComponents(p+d,M+m,v+R,z+D).normalize(),u[3].setComponents(p-d,M-m,v-R,z-D).normalize(),r)u[4].setComponents(g,y,S,A).normalize(),u[5].setComponents(p-g,M-y,v-S,z-A).normalize();else if(u[4].setComponents(p-g,M-y,v-S,z-A).normalize(),i===Ji)u[5].setComponents(p+g,M+y,v+S,z+A).normalize();else if(i===Rc)u[5].setComponents(g,y,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const i=cT.distanceTo(e.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const i=this.planes,r=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const u=i[r];if(fc.x=u.normal.x>0?e.max.x:e.min.x,fc.y=u.normal.y>0?e.max.y:e.min.y,fc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pp extends po{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new $,Dc=new $,F0=new rn,dl=new El,hc=new Ml,Id=new $,H0=new $;class Xx extends kn{constructor(e=new di,i=new Pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let u=1,f=i.count;u<f;u++)wc.fromBufferAttribute(i,u-1),Dc.fromBufferAttribute(i,u),r[u]=r[u-1],r[u]+=wc.distanceTo(Dc);e.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,u=this.matrixWorld,f=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(u),hc.radius+=f,e.ray.intersectsSphere(hc)===!1)return;F0.copy(u).invert(),dl.copy(e.ray).applyMatrix4(F0);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,p=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=M,S=b-1;R<S;R+=p){const v=x.getX(R),N=x.getX(R+1),D=dc(this,e,dl,g,v,N,R);D&&i.push(D)}if(this.isLineLoop){const R=x.getX(b-1),S=x.getX(M),v=dc(this,e,dl,g,R,S,b-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),b=Math.min(y.count,h.start+h.count);for(let R=M,S=b-1;R<S;R+=p){const v=dc(this,e,dl,g,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=dc(this,e,dl,g,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function dc(o,e,i,r,u,f,h){const d=o.geometry.attributes.position;if(wc.fromBufferAttribute(d,u),Dc.fromBufferAttribute(d,f),i.distanceSqToSegment(wc,Dc,Id,H0)>r)return;Id.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Id);if(!(p<e.near||p>e.far))return{distance:p,point:H0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const G0=new $,V0=new $;class fT extends Xx{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let u=0,f=i.count;u<f;u+=2)G0.fromBufferAttribute(i,u),V0.fromBufferAttribute(i,u+1),r[u]=u===0?0:r[u-1],r[u+1]=r[u]+G0.distanceTo(V0);e.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kx extends po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const X0=new rn,zp=new El,pc=new Ml,mc=new $;class hT extends kn{constructor(e=new di,i=new kx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(u),pc.radius+=f,e.ray.intersectsSphere(pc)===!1)return;X0.copy(u).invert(),zp.copy(e.ray).applyMatrix4(X0);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,p=r.index,m=r.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=y,R=M;b<R;b++){const S=p.getX(b);mc.fromBufferAttribute(m,S),k0(mc,S,g,u,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let b=y,R=M;b<R;b++)mc.fromBufferAttribute(m,b),k0(mc,b,g,u,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function k0(o,e,i,r,u,f,h){const d=zp.distanceSqToPoint(o);if(d<i){const g=new $;zp.closestPointToPoint(o,g),g.applyMatrix4(r);const p=u.ray.origin.distanceTo(g);if(p<u.near||p>u.far)return;f.push({distance:p,distanceToRay:Math.sqrt(d),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class jx extends ei{constructor(e,i,r=Ks,u,f,h,d=Ii,g=Ii,p,x=_l,m=1){if(x!==_l&&x!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:m};super(y,u,f,h,d,g,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yx extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nc extends di{constructor(e=1,i=1,r=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:u};const f=e/2,h=i/2,d=Math.floor(r),g=Math.floor(u),p=d+1,x=g+1,m=e/d,y=i/g,M=[],b=[],R=[],S=[];for(let v=0;v<x;v++){const N=v*y-h;for(let D=0;D<p;D++){const A=D*m-f;b.push(A,-N,0),R.push(0,0,1),S.push(D/d),S.push(1-v/g)}}for(let v=0;v<g;v++)for(let N=0;N<d;N++){const D=N+p*v,A=N+p*(v+1),z=N+1+p*(v+1),O=N+1+p*v;M.push(D,A,O),M.push(A,z,O)}this.setIndex(M),this.setAttribute("position",new xn(b,3)),this.setAttribute("normal",new xn(R,3)),this.setAttribute("uv",new xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kp extends di{constructor(e=1,i=32,r=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const g=Math.min(h+d,Math.PI);let p=0;const x=[],m=new $,y=new $,M=[],b=[],R=[],S=[];for(let v=0;v<=r;v++){const N=[],D=v/r;let A=0;v===0&&h===0?A=.5/i:v===r&&g===Math.PI&&(A=-.5/i);for(let z=0;z<=i;z++){const O=z/i;m.x=-e*Math.cos(u+O*f)*Math.sin(h+D*d),m.y=e*Math.cos(h+D*d),m.z=e*Math.sin(u+O*f)*Math.sin(h+D*d),b.push(m.x,m.y,m.z),y.copy(m).normalize(),R.push(y.x,y.y,y.z),S.push(O+A,1-D),N.push(p++)}x.push(N)}for(let v=0;v<r;v++)for(let N=0;N<i;N++){const D=x[v][N+1],A=x[v][N],z=x[v+1][N],O=x[v+1][N+1];(v!==0||h>0)&&M.push(D,A,O),(v!==r-1||g<Math.PI)&&M.push(A,z,O)}this.setIndex(M),this.setAttribute("position",new xn(b,3)),this.setAttribute("normal",new xn(R,3)),this.setAttribute("uv",new xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dT extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ME,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j0={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class mT{constructor(e,i,r){const u=this;let f=!1,h=0,d=0,g;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(x){d++,f===!1&&u.onStart!==void 0&&u.onStart(x,h,d),f=!0},this.itemEnd=function(x){h++,u.onProgress!==void 0&&u.onProgress(x,h,d),h===d&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(x){u.onError!==void 0&&u.onError(x)},this.resolveURL=function(x){return g?g(x):x},this.setURLModifier=function(x){return g=x,this},this.addHandler=function(x,m){return p.push(x,m),this},this.removeHandler=function(x){const m=p.indexOf(x);return m!==-1&&p.splice(m,2),this},this.getHandler=function(x){for(let m=0,y=p.length;m<y;m+=2){const M=p[m],b=p[m+1];if(M.global&&(M.lastIndex=0),M.test(x))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const gT=new mT;class Qp{constructor(e){this.manager=e!==void 0?e:gT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(u,f){r.load(e,u,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ma={};class _T extends Error{constructor(e,i){super(e),this.response=i}}class vT extends Qp{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,i,r,u){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=j0.get(`file:${e}`);if(f!==void 0)return this.manager.itemStart(e),setTimeout(()=>{i&&i(f),this.manager.itemEnd(e)},0),f;if(Ma[e]!==void 0){Ma[e].push({onLoad:i,onProgress:r,onError:u});return}Ma[e]=[],Ma[e].push({onLoad:i,onProgress:r,onError:u});const h=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,g=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const x=Ma[e],m=p.body.getReader(),y=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=y?parseInt(y):0,b=M!==0;let R=0;const S=new ReadableStream({start(v){N();function N(){m.read().then(({done:D,value:A})=>{if(D)v.close();else{R+=A.byteLength;const z=new ProgressEvent("progress",{lengthComputable:b,loaded:R,total:M});for(let O=0,L=x.length;O<L;O++){const G=x[O];G.onProgress&&G.onProgress(z)}v.enqueue(A),N()}},D=>{v.error(D)})}}});return new Response(S)}else throw new _T(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(g){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(x=>new DOMParser().parseFromString(x,d));case"json":return p.json();default:if(d==="")return p.text();{const m=/charset="?([^;"\s]*)"?/i.exec(d),y=m&&m[1]?m[1].toLowerCase():void 0,M=new TextDecoder(y);return p.arrayBuffer().then(b=>M.decode(b))}}}).then(p=>{j0.add(`file:${e}`,p);const x=Ma[e];delete Ma[e];for(let m=0,y=x.length;m<y;m++){const M=x[m];M.onLoad&&M.onLoad(p)}}).catch(p=>{const x=Ma[e];if(x===void 0)throw this.manager.itemError(e),p;delete Ma[e];for(let m=0,y=x.length;m<y;m++){const M=x[m];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class xT extends Hx{constructor(e=-1,i=1,r=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=u+i,g=u-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=x*this.view.offsetY,g=d-x*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ST extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Y0=new rn;class yT{constructor(e,i,r=0,u=1/0){this.ray=new El(e,i),this.near=r,this.far=u,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Y0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Y0),this}intersectObject(e,i=!0,r=[]){return Ip(e,this,r,i),r.sort(q0),r}intersectObjects(e,i=!0,r=[]){for(let u=0,f=e.length;u<f;u++)Ip(e[u],this,r,i);return r.sort(q0),r}}function q0(o,e){return o.distance-e.distance}function Ip(o,e,i,r){let u=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(u=!1),u===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Ip(f[h],e,i,!0)}}class W0{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Te(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class MT extends $s{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Z0(o,e,i,r){const u=ET(r);switch(i){case wx:return o*e;case Ux:return o*e/u.components*u.byteLength;case kp:return o*e/u.components*u.byteLength;case Nx:return o*e*2/u.components*u.byteLength;case jp:return o*e*2/u.components*u.byteLength;case Dx:return o*e*3/u.components*u.byteLength;case zi:return o*e*4/u.components*u.byteLength;case Yp:return o*e*4/u.components*u.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case op:case up:return Math.max(o,16)*Math.max(e,8)/4;case rp:case lp:return Math.max(o,8)*Math.max(e,8)/2;case cp:case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rp:case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Np:case Lp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ET(o){switch(o){case Ra:case bx:return{byteLength:1,components:1};case ml:case Ax:case Sl:return{byteLength:2,components:1};case Vp:case Xp:return{byteLength:2,components:4};case Ks:case Gp:case ba:return{byteLength:4,components:1};case Rx:case Cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);function qx(){let o=null,e=!1,i=null,r=null;function u(f,h){i(f,h),r=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function TT(o){const e=new WeakMap;function i(d,g){const p=d.array,x=d.usage,m=p.byteLength,y=o.createBuffer();o.bindBuffer(g,y),o.bufferData(g,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,g,p){const x=g.array,m=g.updateRanges;if(o.bindBuffer(p,d),m.length===0)o.bufferSubData(p,0,x);else{m.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<m.length;M++){const b=m[y],R=m[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++y,m[y]=R)}m.length=y+1;for(let M=0,b=m.length;M<b;M++){const R=m[M];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,g));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,g),p.version=d.version}}return{get:u,remove:f,update:h}}var bT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AT=`#ifdef USE_ALPHAHASH
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
#endif`,RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LT=`#ifdef USE_BATCHING
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
#endif`,OT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BT=`#ifdef USE_IRIDESCENCE
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
#endif`,FT=`#ifdef USE_BUMPMAP
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
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,WT=`#define PI 3.141592653589793
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
} // validated`,ZT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KT=`vec3 transformedNormal = objectNormal;
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
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hb=`#ifdef USE_GRADIENTMAP
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
}`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
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
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
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
#endif`,Eb=`struct PhysicalMaterial {
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
}`,Tb=`
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ob=`#if defined( USE_POINTS_UV )
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
#endif`,Pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
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
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
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
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uA=`float getShadowMask() {
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
}`,cA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fA=`#ifdef USE_SKINNING
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
#endif`,hA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dA=`#ifdef USE_SKINNING
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
#endif`,pA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_A=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bA=`uniform sampler2D t2D;
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`#include <common>
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
}`,UA=`#if DEPTH_PACKING == 3200
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
}`,NA=`#define DISTANCE
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
}`,LA=`#define DISTANCE
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
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`uniform float scale;
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
}`,IA=`uniform vec3 diffuse;
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
}`,BA=`#include <common>
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
}`,FA=`uniform vec3 diffuse;
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
}`,HA=`#define LAMBERT
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
}`,GA=`#define LAMBERT
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
}`,VA=`#define MATCAP
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
}`,XA=`#define MATCAP
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
}`,kA=`#define NORMAL
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
}`,jA=`#define NORMAL
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
}`,YA=`#define PHONG
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
}`,qA=`#define PHONG
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
}`,WA=`#define STANDARD
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
}`,ZA=`#define STANDARD
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
}`,KA=`#define TOON
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
}`,QA=`#define TOON
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
}`,JA=`uniform float size;
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
}`,$A=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,e1=`uniform vec3 color;
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
}`,n1=`uniform float rotation;
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
}`,i1=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:bT,alphahash_pars_fragment:AT,alphamap_fragment:RT,alphamap_pars_fragment:CT,alphatest_fragment:wT,alphatest_pars_fragment:DT,aomap_fragment:UT,aomap_pars_fragment:NT,batching_pars_vertex:LT,batching_vertex:OT,begin_vertex:PT,beginnormal_vertex:zT,bsdfs:IT,iridescence_fragment:BT,bumpmap_pars_fragment:FT,clipping_planes_fragment:HT,clipping_planes_pars_fragment:GT,clipping_planes_pars_vertex:VT,clipping_planes_vertex:XT,color_fragment:kT,color_pars_fragment:jT,color_pars_vertex:YT,color_vertex:qT,common:WT,cube_uv_reflection_fragment:ZT,defaultnormal_vertex:KT,displacementmap_pars_vertex:QT,displacementmap_vertex:JT,emissivemap_fragment:$T,emissivemap_pars_fragment:tb,colorspace_fragment:eb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:ab,envmap_pars_fragment:sb,envmap_pars_vertex:rb,envmap_physical_pars_fragment:_b,envmap_vertex:ob,fog_vertex:lb,fog_pars_vertex:ub,fog_fragment:cb,fog_pars_fragment:fb,gradientmap_pars_fragment:hb,lightmap_pars_fragment:db,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:vb,lights_toon_pars_fragment:xb,lights_phong_fragment:Sb,lights_phong_pars_fragment:yb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Eb,lights_fragment_begin:Tb,lights_fragment_maps:bb,lights_fragment_end:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Db,map_fragment:Ub,map_pars_fragment:Nb,map_particle_fragment:Lb,map_particle_pars_fragment:Ob,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:zb,morphinstance_vertex:Ib,morphcolor_vertex:Bb,morphnormal_vertex:Fb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Gb,normal_fragment_begin:Vb,normal_fragment_maps:Xb,normal_pars_fragment:kb,normal_pars_vertex:jb,normal_vertex:Yb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:Zb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Qb,opaque_fragment:Jb,packing:$b,premultiplied_alpha_fragment:tA,project_vertex:eA,dithering_fragment:nA,dithering_pars_fragment:iA,roughnessmap_fragment:aA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:rA,shadowmap_pars_vertex:oA,shadowmap_vertex:lA,shadowmask_pars_fragment:uA,skinbase_vertex:cA,skinning_pars_vertex:fA,skinning_vertex:hA,skinnormal_vertex:dA,specularmap_fragment:pA,specularmap_pars_fragment:mA,tonemapping_fragment:gA,tonemapping_pars_fragment:_A,transmission_fragment:vA,transmission_pars_fragment:xA,uv_pars_fragment:SA,uv_pars_vertex:yA,uv_vertex:MA,worldpos_vertex:EA,background_vert:TA,background_frag:bA,backgroundCube_vert:AA,backgroundCube_frag:RA,cube_vert:CA,cube_frag:wA,depth_vert:DA,depth_frag:UA,distanceRGBA_vert:NA,distanceRGBA_frag:LA,equirect_vert:OA,equirect_frag:PA,linedashed_vert:zA,linedashed_frag:IA,meshbasic_vert:BA,meshbasic_frag:FA,meshlambert_vert:HA,meshlambert_frag:GA,meshmatcap_vert:VA,meshmatcap_frag:XA,meshnormal_vert:kA,meshnormal_frag:jA,meshphong_vert:YA,meshphong_frag:qA,meshphysical_vert:WA,meshphysical_frag:ZA,meshtoon_vert:KA,meshtoon_frag:QA,points_vert:JA,points_frag:$A,shadow_vert:t1,shadow_frag:e1,sprite_vert:n1,sprite_frag:i1},Vt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Xn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Xn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Xn([Vt.points,Vt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Xn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Xn([Vt.common,Vt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Xn([Vt.sprite,Vt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Xn([Vt.common,Vt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Xn([Vt.lights,Vt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const gc={r:0,b:0,g:0},Xs=new Ca,a1=new rn;function s1(o,e,i,r,u,f,h){const d=new ze(0);let g=f===!0?0:1,p,x,m=null,y=0,M=null;function b(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?i:e).get(A)),A}function R(D){let A=!1;const z=b(D);z===null?v(d,g):z&&z.isColor&&(v(z,1),A=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,A){const z=b(A);z&&(z.isCubeTexture||z.mapping===Uc)?(x===void 0&&(x=new $i(new Tl(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:fo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(x)),Xs.copy(A.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler(Xs)),x.material.toneMapped=Ne.getTransfer(z.colorSpace)!==ke,(m!==z||y!==z.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,m=z,y=z.version,M=o.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new $i(new Nc(2,2),new ps({name:"BackgroundMaterial",uniforms:fo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(z.colorSpace)!==ke,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(m!==z||y!==z.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,m=z,y=z.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,A){D.getRGB(gc,Fx(o)),r.buffers.color.setClear(gc.r,gc.g,gc.b,A,h)}function N(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,A=1){d.set(D),g=A,v(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(D){g=D,v(d,g)},render:R,addToRenderList:S,dispose:N}}function r1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},u=y(null);let f=u,h=!1;function d(w,B,nt,ft,vt){let ct=!1;const k=m(ft,nt,B);f!==k&&(f=k,p(f.object)),ct=M(w,ft,nt,vt),ct&&b(w,ft,nt,vt),vt!==null&&e.update(vt,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,A(w,B,nt,ft),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function g(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function m(w,B,nt){const ft=nt.wireframe===!0;let vt=r[w.id];vt===void 0&&(vt={},r[w.id]=vt);let ct=vt[B.id];ct===void 0&&(ct={},vt[B.id]=ct);let k=ct[ft];return k===void 0&&(k=y(g()),ct[ft]=k),k}function y(w){const B=[],nt=[],ft=[];for(let vt=0;vt<i;vt++)B[vt]=0,nt[vt]=0,ft[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:nt,attributeDivisors:ft,object:w,attributes:{},index:null}}function M(w,B,nt,ft){const vt=f.attributes,ct=B.attributes;let k=0;const rt=nt.getAttributes();for(const W in rt)if(rt[W].location>=0){const Et=vt[W];let Xt=ct[W];if(Xt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Xt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Xt=w.instanceColor)),Et===void 0||Et.attribute!==Xt||Xt&&Et.data!==Xt.data)return!0;k++}return f.attributesNum!==k||f.index!==ft}function b(w,B,nt,ft){const vt={},ct=B.attributes;let k=0;const rt=nt.getAttributes();for(const W in rt)if(rt[W].location>=0){let Et=ct[W];Et===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const Xt={};Xt.attribute=Et,Et&&Et.data&&(Xt.data=Et.data),vt[W]=Xt,k++}f.attributes=vt,f.attributesNum=k,f.index=ft}function R(){const w=f.newAttributes;for(let B=0,nt=w.length;B<nt;B++)w[B]=0}function S(w){v(w,0)}function v(w,B){const nt=f.newAttributes,ft=f.enabledAttributes,vt=f.attributeDivisors;nt[w]=1,ft[w]===0&&(o.enableVertexAttribArray(w),ft[w]=1),vt[w]!==B&&(o.vertexAttribDivisor(w,B),vt[w]=B)}function N(){const w=f.newAttributes,B=f.enabledAttributes;for(let nt=0,ft=B.length;nt<ft;nt++)B[nt]!==w[nt]&&(o.disableVertexAttribArray(nt),B[nt]=0)}function D(w,B,nt,ft,vt,ct,k){k===!0?o.vertexAttribIPointer(w,B,nt,vt,ct):o.vertexAttribPointer(w,B,nt,ft,vt,ct)}function A(w,B,nt,ft){R();const vt=ft.attributes,ct=nt.getAttributes(),k=B.defaultAttributeValues;for(const rt in ct){const W=ct[rt];if(W.location>=0){let Mt=vt[rt];if(Mt===void 0&&(rt==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),rt==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const Et=Mt.normalized,Xt=Mt.itemSize,se=e.get(Mt);if(se===void 0)continue;const he=se.buffer,H=se.type,dt=se.bytesPerElement,Q=H===o.INT||H===o.UNSIGNED_INT||Mt.gpuType===Gp;if(Mt.isInterleavedBufferAttribute){const at=Mt.data,ht=at.stride,yt=Mt.offset;if(at.isInstancedInterleavedBuffer){for(let Tt=0;Tt<W.locationSize;Tt++)v(W.location+Tt,at.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)S(W.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,he);for(let Tt=0;Tt<W.locationSize;Tt++)D(W.location+Tt,Xt/W.locationSize,H,Et,ht*dt,(yt+Xt/W.locationSize*Tt)*dt,Q)}else{if(Mt.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)v(W.location+at,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let at=0;at<W.locationSize;at++)S(W.location+at);o.bindBuffer(o.ARRAY_BUFFER,he);for(let at=0;at<W.locationSize;at++)D(W.location+at,Xt/W.locationSize,H,Et,Xt*dt,Xt/W.locationSize*at*dt,Q)}}else if(k!==void 0){const Et=k[rt];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(W.location,Et);break;case 3:o.vertexAttrib3fv(W.location,Et);break;case 4:o.vertexAttrib4fv(W.location,Et);break;default:o.vertexAttrib1fv(W.location,Et)}}}}N()}function z(){G();for(const w in r){const B=r[w];for(const nt in B){const ft=B[nt];for(const vt in ft)x(ft[vt].object),delete ft[vt];delete B[nt]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const B=r[w.id];for(const nt in B){const ft=B[nt];for(const vt in ft)x(ft[vt].object),delete ft[vt];delete B[nt]}delete r[w.id]}function L(w){for(const B in r){const nt=r[B];if(nt[w.id]===void 0)continue;const ft=nt[w.id];for(const vt in ft)x(ft[vt].object),delete ft[vt];delete nt[w.id]}}function G(){U(),h=!0,f!==u&&(f=u,p(f.object))}function U(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:G,resetDefaultState:U,dispose:z,releaseStatesOfGeometry:O,releaseStatesOfProgram:L,initAttributes:R,enableAttribute:S,disableUnusedAttributes:N}}function o1(o,e,i){let r;function u(p){r=p}function f(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function h(p,x,m){m!==0&&(o.drawArraysInstanced(r,p,x,m),i.update(x,r,m))}function d(p,x,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,m);let M=0;for(let b=0;b<m;b++)M+=x[b];i.update(M,r,1)}function g(p,x,m,y){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],x[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,m);let b=0;for(let R=0;R<m;R++)b+=x[R]*y[R];i.update(b,r,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function l1(o,e,i,r){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(L){return!(L!==zi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const G=L===Sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ra&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ba&&!G)}function g(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=g(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const m=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:z,maxSamples:O}}function u1(o){const e=this;let i=null,r=0,u=!1,f=!1;const h=new us,d=new me,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const M=m.length!==0||y||r!==0||u;return u=y,r=m.length,M},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,y){i=x(m,y,0)},this.setState=function(m,y,M){const b=m.clippingPlanes,R=m.clipIntersection,S=m.clipShadows,v=o.get(m);if(!u||b===null||b.length===0||f&&!S)f?x(null):p();else{const N=f?0:r,D=N*4;let A=v.clippingState||null;g.value=A,A=x(b,y,D,M);for(let z=0;z!==D;++z)A[z]=i[z];v.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(m,y,M,b){const R=m!==null?m.length:0;let S=null;if(R!==0){if(S=g.value,b!==!0||S===null){const v=M+R*4,N=y.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,A=M;D!==R;++D,A+=4)h.copy(m[D]).applyMatrix4(N,d),h.normal.toArray(S,A),S[A+3]=h.constant}g.value=S,g.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function c1(o){let e=new WeakMap;function i(h,d){return d===np?h.mapping=lo:d===ip&&(h.mapping=uo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===np||d===ip)if(e.has(h)){const g=e.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const p=new sT(g.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",u),i(p.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const io=4,K0=[.125,.215,.35,.446,.526,.582],qs=20,Bd=new xT,Q0=new ze;let Fd=null,Hd=0,Gd=0,Vd=!1;const js=(1+Math.sqrt(5))/2,$r=1/js,J0=[new $(-js,$r,0),new $(js,$r,0),new $(-$r,0,js),new $($r,0,js),new $(0,js,-$r),new $(0,js,$r),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],f1=new $;class $0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,u=100,f={}){const{size:h=256,position:d=f1}=f;Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,r,u,g,d),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Hd,Gd),this._renderer.xr.enabled=Vd,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:Sl,format:zi,colorSpace:co,depthBuffer:!1},u=tx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tx(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h1(f)),this._blurMaterial=d1(f,e,i)}return u}_compileMaterial(e){const i=new $i(this._lodPlanes[0],e);this._renderer.compile(i,Bd)}_sceneToCubeUV(e,i,r,u,f){const g=new bi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,M=m.toneMapping;m.getClearColor(Q0),m.toneMapping=hs,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(u),m.clearDepth(),m.setRenderTarget(null));const R=new Zp({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),S=new $i(new Tl,R);let v=!1;const N=e.background;N?N.isColor&&(R.color.copy(N),e.background=null,v=!0):(R.color.copy(Q0),v=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(g.up.set(0,p[D],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+x[D],f.y,f.z)):A===1?(g.up.set(0,0,p[D]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+x[D],f.z)):(g.up.set(0,p[D],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+x[D]));const z=this._cubeSize;_c(u,A*z,D>2?z:0,z,z),m.setRenderTarget(u),v&&m.render(S,g),m.render(e,g)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=M,m.autoClear=y,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,u=e.mapping===lo||e.mapping===uo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new $i(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const g=this._cubeSize;_c(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(h,Bd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=J0[(u-f-1)%J0.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,u,"latitudinal",f),this._halfBlur(h,e,r,r,u,"longitudinal",f)}_halfBlur(e,i,r,u,f,h,d){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,m=new $i(this._lodPlanes[u],p),y=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*qs-1),R=f/b,S=isFinite(f)?1+Math.floor(x*R):qs;S>qs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qs}`);const v=[];let N=0;for(let L=0;L<qs;++L){const G=L/R,U=Math.exp(-G*G/2);v.push(U),L===0?N+=U:L<S&&(N+=2*U)}for(let L=0;L<v.length;L++)v[L]=v[L]/N;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=b,y.mipInt.value=D-r;const A=this._sizeLods[u],z=3*A*(u>D-io?u-D+io:0),O=4*(this._cubeSize-A);_c(i,z,O,3*A,2*A),g.setRenderTarget(i),g.render(m,Bd)}}function h1(o){const e=[],i=[],r=[];let u=o;const f=o-io+1+K0.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);i.push(d);let g=1/d;h>o-io?g=K0[h-o+io-1]:h===0&&(g=0),r.push(g);const p=1/(d-2),x=-p,m=1+p,y=[x,x,m,x,m,m,x,x,m,m,x,m],M=6,b=6,R=3,S=2,v=1,N=new Float32Array(R*b*M),D=new Float32Array(S*b*M),A=new Float32Array(v*b*M);for(let O=0;O<M;O++){const L=O%3*2/3-1,G=O>2?0:-1,U=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];N.set(U,R*b*O),D.set(y,S*b*O);const w=[O,O,O,O,O,O];A.set(w,v*b*O)}const z=new di;z.setAttribute("position",new ta(N,R)),z.setAttribute("uv",new ta(D,S)),z.setAttribute("faceIndex",new ta(A,v)),e.push(z),u>io&&u--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function tx(o,e,i){const r=new Js(o,e,i);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _c(o,e,i,r,u){o.viewport.set(e,i,r,u),o.scissor.set(e,i,r,u)}function d1(o,e,i){const r=new Float32Array(qs),u=new $(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Jp(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function ex(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jp(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function nx(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Jp(){return`

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
	`}function p1(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const g=d.mapping,p=g===np||g===ip,x=g===lo||g===uo;if(p||x){let m=e.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new $0(o)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&u(M)?(i===null&&(i=new $0(o)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function u(d){let g=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&g++;return g===p}function f(d){const g=d.target;g.removeEventListener("dispose",f);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function m1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let u;switch(r){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(r)}return e[r]=u,u}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const u=i(r);return u===null&&xl("THREE.WebGLRenderer: "+r+" extension not supported."),u}}}function g1(o,e,i,r){const u={},f=new WeakMap;function h(m){const y=m.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete u[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(m,y){return u[y.id]===!0||(y.addEventListener("dispose",h),u[y.id]=!0,i.memory.geometries++),y}function g(m){const y=m.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function p(m){const y=[],M=m.index,b=m.attributes.position;let R=0;if(M!==null){const N=M.array;R=M.version;for(let D=0,A=N.length;D<A;D+=3){const z=N[D+0],O=N[D+1],L=N[D+2];y.push(z,O,O,L,L,z)}}else if(b!==void 0){const N=b.array;R=b.version;for(let D=0,A=N.length/3-1;D<A;D+=3){const z=D+0,O=D+1,L=D+2;y.push(z,O,O,L,L,z)}}else return;const S=new(Ox(y)?Bx:Ix)(y,1);S.version=R;const v=f.get(m);v&&e.remove(v),f.set(m,S)}function x(m){const y=f.get(m);if(y){const M=m.index;M!==null&&y.version<M.version&&p(m)}else p(m);return f.get(m)}return{get:d,update:g,getWireframeAttribute:x}}function _1(o,e,i){let r;function u(y){r=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function g(y,M){o.drawElements(r,M,f,y*h),i.update(M,r,1)}function p(y,M,b){b!==0&&(o.drawElementsInstanced(r,M,f,y*h,b),i.update(M,r,b))}function x(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,y,0,b);let S=0;for(let v=0;v<b;v++)S+=M[v];i.update(S,r,1)}function m(y,M,b,R){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)p(y[v]/h,M[v],R[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,f,y,0,R,0,b);let v=0;for(let N=0;N<b;N++)v+=M[N]*R[N];i.update(v,r,1)}}this.setMode=u,this.setIndex=d,this.render=g,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=m}function v1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:r}}function x1(o,e,i){const r=new WeakMap,u=new ln;function f(h,d,g){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==m){let w=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),R===!0&&(A=2),S===!0&&(A=3);let z=d.attributes.position.count*A,O=1;z>e.maxTextureSize&&(O=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const L=new Float32Array(z*O*4*m),G=new Px(L,z,O,m);G.type=ba,G.needsUpdate=!0;const U=A*4;for(let B=0;B<m;B++){const nt=v[B],ft=N[B],vt=D[B],ct=z*O*4*B;for(let k=0;k<nt.count;k++){const rt=k*U;b===!0&&(u.fromBufferAttribute(nt,k),L[ct+rt+0]=u.x,L[ct+rt+1]=u.y,L[ct+rt+2]=u.z,L[ct+rt+3]=0),R===!0&&(u.fromBufferAttribute(ft,k),L[ct+rt+4]=u.x,L[ct+rt+5]=u.y,L[ct+rt+6]=u.z,L[ct+rt+7]=0),S===!0&&(u.fromBufferAttribute(vt,k),L[ct+rt+8]=u.x,L[ct+rt+9]=u.y,L[ct+rt+10]=u.z,L[ct+rt+11]=vt.itemSize===4?u.w:1)}}y={count:m,texture:G,size:new _e(z,O)},r.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const R=d.morphTargetsRelative?1:1-b;g.getUniforms().setValue(o,"morphTargetBaseInfluence",R),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function S1(o,e,i,r){let u=new WeakMap;function f(g){const p=r.render.frame,x=g.geometry,m=e.get(g,x);if(u.get(m)!==p&&(e.update(m),u.set(m,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),u.get(g)!==p&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,p))),g.isSkinnedMesh){const y=g.skeleton;u.get(y)!==p&&(y.update(),u.set(y,p))}return m}function h(){u=new WeakMap}function d(g){const p=g.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:h}}const Wx=new ei,ix=new jx(1,1),Zx=new Px,Kx=new VE,Qx=new Gx,ax=[],sx=[],rx=new Float32Array(16),ox=new Float32Array(9),lx=new Float32Array(4);function mo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const u=e*i;let f=ax[u];if(f===void 0&&(f=new Float32Array(u),ax[u]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Lc(o,e){let i=sx[e];i===void 0&&(i=new Int32Array(e),sx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function y1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function M1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function b1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;lx.set(r),o.uniformMatrix2fv(this.addr,!1,lx),yn(i,r)}}function A1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;ox.set(r),o.uniformMatrix3fv(this.addr,!1,ox),yn(i,r)}}function R1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;rx.set(r),o.uniformMatrix4fv(this.addr,!1,rx),yn(i,r)}}function C1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function w1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function D1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function U1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function N1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function L1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function O1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function P1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function z1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(ix.compareFunction=Lx,f=ix):f=Wx,i.setTexture2D(e||f,u)}function I1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture3D(e||Kx,u)}function B1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTextureCube(e||Qx,u)}function F1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture2DArray(e||Zx,u)}function H1(o){switch(o){case 5126:return y1;case 35664:return M1;case 35665:return E1;case 35666:return T1;case 35674:return b1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return N1;case 36294:return L1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return F1}}function G1(o,e){o.uniform1fv(this.addr,e)}function V1(o,e){const i=mo(e,this.size,2);o.uniform2fv(this.addr,i)}function X1(o,e){const i=mo(e,this.size,3);o.uniform3fv(this.addr,i)}function k1(o,e){const i=mo(e,this.size,4);o.uniform4fv(this.addr,i)}function j1(o,e){const i=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Y1(o,e){const i=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function q1(o,e){const i=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function W1(o,e){o.uniform1iv(this.addr,e)}function Z1(o,e){o.uniform2iv(this.addr,e)}function K1(o,e){o.uniform3iv(this.addr,e)}function Q1(o,e){o.uniform4iv(this.addr,e)}function J1(o,e){o.uniform1uiv(this.addr,e)}function $1(o,e){o.uniform2uiv(this.addr,e)}function tR(o,e){o.uniform3uiv(this.addr,e)}function eR(o,e){o.uniform4uiv(this.addr,e)}function nR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture2D(e[h]||Wx,f[h])}function iR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture3D(e[h]||Kx,f[h])}function aR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTextureCube(e[h]||Qx,f[h])}function sR(o,e,i){const r=this.cache,u=e.length,f=Lc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture2DArray(e[h]||Zx,f[h])}function rR(o){switch(o){case 5126:return G1;case 35664:return V1;case 35665:return X1;case 35666:return k1;case 35674:return j1;case 35675:return Y1;case 35676:return q1;case 5124:case 35670:return W1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return tR;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return sR}}class oR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=H1(i.type)}}class lR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rR(i.type)}}class uR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,i[d.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function ux(o,e){o.seq.push(e),o.map[e.id]=e}function cR(o,e,i){const r=o.name,u=r.length;for(Xd.lastIndex=0;;){const f=Xd.exec(r),h=Xd.lastIndex;let d=f[1];const g=f[2]==="]",p=f[3];if(g&&(d=d|0),p===void 0||p==="["&&h+2===u){ux(i,p===void 0?new oR(d,o,e):new lR(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new uR(d),ux(i,m)),i=m}}}class bc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(i,u),h=e.getUniformLocation(i,f.name);cR(f,h,this)}}setValue(e,i,r,u){const f=this.map[i];f!==void 0&&f.setValue(e,r,u)}setOptional(e,i,r){const u=i[r];u!==void 0&&this.setValue(e,r,u)}static upload(e,i,r,u){for(let f=0,h=i.length;f!==h;++f){const d=i[f],g=r[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,u)}}static seqWithValue(e,i){const r=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in i&&r.push(h)}return r}}function cx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const fR=37297;let hR=0;function dR(o,e){const i=o.split(`
`),r=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=u;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const fx=new me;function pR(o){Ne._getMatrix(fx,Ne.workingColorSpace,o);const e=`mat3( ${fx.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function hx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+dR(o.getShaderSource(e),d)}else return f}function mR(o,e){const i=pR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gR(o,e){let i;switch(e){case pE:i="Linear";break;case mE:i="Reinhard";break;case gE:i="Cineon";break;case _E:i="ACESFilmic";break;case xE:i="AgX";break;case SE:i="Neutral";break;case vE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new $;function _R(){Ne.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function xR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function SR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<r;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function pl(o){return o!==""}function dx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function px(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(o){return o.replace(yR,ER)}const MR=new Map;function ER(o,e){let i=ge[e];if(i===void 0){const r=MR.get(e);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bp(i)}const TR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(o){return o.replace(TR,bR)}function bR(o,e,i,r){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function gx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function AR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===qM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function RR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CR(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===uo&&(e="ENVMAP_MODE_REFRACTION"),e}function wR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ex:e="ENVMAP_BLENDING_MULTIPLY";break;case hE:e="ENVMAP_BLENDING_MIX";break;case dE:e="ENVMAP_BLENDING_ADD";break}return e}function DR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function UR(o,e,i,r){const u=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const g=AR(i),p=RR(i),x=CR(i),m=wR(i),y=DR(i),M=vR(i),b=xR(f),R=u.createProgram();let S,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(pl).join(`
`),v.length>0&&(v+=`
`)):(S=[gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),v=[gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==hs?"#define TONE_MAPPING":"",i.toneMapping!==hs?ge.tonemapping_pars_fragment:"",i.toneMapping!==hs?gR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,mR("linearToOutputTexel",i.outputColorSpace),_R(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),h=Bp(h),h=dx(h,i),h=px(h,i),d=Bp(d),d=dx(d,i),d=px(d,i),h=mx(h),d=mx(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=N+S+h,A=N+v+d,z=cx(u,u.VERTEX_SHADER,D),O=cx(u,u.FRAGMENT_SHADER,A);u.attachShader(R,z),u.attachShader(R,O),i.index0AttributeName!==void 0?u.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(R,0,"position"),u.linkProgram(R);function L(B){if(o.debug.checkShaderErrors){const nt=u.getProgramInfoLog(R)||"",ft=u.getShaderInfoLog(z)||"",vt=u.getShaderInfoLog(O)||"",ct=nt.trim(),k=ft.trim(),rt=vt.trim();let W=!0,Mt=!0;if(u.getProgramParameter(R,u.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,R,z,O);else{const Et=hx(u,z,"vertex"),Xt=hx(u,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(R,u.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ct+`
`+Et+`
`+Xt)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(k===""||rt==="")&&(Mt=!1);Mt&&(B.diagnostics={runnable:W,programLog:ct,vertexShader:{log:k,prefix:S},fragmentShader:{log:rt,prefix:v}})}u.deleteShader(z),u.deleteShader(O),G=new bc(u,R),U=SR(u,R)}let G;this.getUniforms=function(){return G===void 0&&L(this),G};let U;this.getAttributes=function(){return U===void 0&&L(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=u.getProgramParameter(R,fR)),w},this.destroy=function(){r.releaseStatesOfProgram(this),u.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=O,this}let NR=0;class LR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new OR(e),i.set(e,r)),r}}class OR{constructor(e){this.id=NR++,this.code=e,this.usedTimes=0}}function PR(o,e,i,r,u,f,h){const d=new Wp,g=new LR,p=new Set,x=[],m=u.logarithmicDepthBuffer,y=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,w,B,nt,ft){const vt=nt.fog,ct=ft.geometry,k=U.isMeshStandardMaterial?nt.environment:null,rt=(U.isMeshStandardMaterial?i:e).get(U.envMap||k),W=rt&&rt.mapping===Uc?rt.image.height:null,Mt=b[U.type];U.precision!==null&&(M=u.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Et=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Xt=Et!==void 0?Et.length:0;let se=0;ct.morphAttributes.position!==void 0&&(se=1),ct.morphAttributes.normal!==void 0&&(se=2),ct.morphAttributes.color!==void 0&&(se=3);let he,H,dt,Q;if(Mt){const be=Ki[Mt];he=be.vertexShader,H=be.fragmentShader}else he=U.vertexShader,H=U.fragmentShader,g.update(U),dt=g.getVertexShaderID(U),Q=g.getFragmentShaderID(U);const at=o.getRenderTarget(),ht=o.state.buffers.depth.getReversed(),yt=ft.isInstancedMesh===!0,Tt=ft.isBatchedMesh===!0,xt=!!U.map,It=!!U.matcap,F=!!rt,ot=!!U.aoMap,Pt=!!U.lightMap,Bt=!!U.bumpMap,Ct=!!U.normalMap,kt=!!U.displacementMap,Nt=!!U.emissiveMap,le=!!U.metalnessMap,Ye=!!U.roughnessMap,We=U.anisotropy>0,P=U.clearcoat>0,T=U.dispersion>0,it=U.iridescence>0,gt=U.sheen>0,bt=U.transmission>0,pt=We&&!!U.anisotropyMap,Wt=P&&!!U.clearcoatMap,Ut=P&&!!U.clearcoatNormalMap,Jt=P&&!!U.clearcoatRoughnessMap,te=it&&!!U.iridescenceMap,wt=it&&!!U.iridescenceThicknessMap,Ft=gt&&!!U.sheenColorMap,re=gt&&!!U.sheenRoughnessMap,$t=!!U.specularMap,Ht=!!U.specularColorMap,fe=!!U.specularIntensityMap,X=bt&&!!U.transmissionMap,Dt=bt&&!!U.thicknessMap,Ot=!!U.gradientMap,qt=!!U.alphaMap,At=U.alphaTest>0,St=!!U.alphaHash,Qt=!!U.extensions;let ce=hs;U.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ve={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:he,fragmentShader:H,defines:U.defines,customVertexShaderID:dt,customFragmentShaderID:Q,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Tt,batchingColor:Tt&&ft._colorsTexture!==null,instancing:yt,instancingColor:yt&&ft.instanceColor!==null,instancingMorph:yt&&ft.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:at===null?o.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:co,alphaToCoverage:!!U.alphaToCoverage,map:xt,matcap:It,envMap:F,envMapMode:F&&rt.mapping,envMapCubeUVHeight:W,aoMap:ot,lightMap:Pt,bumpMap:Bt,normalMap:Ct,displacementMap:y&&kt,emissiveMap:Nt,normalMapObjectSpace:Ct&&U.normalMapType===bE,normalMapTangentSpace:Ct&&U.normalMapType===TE,metalnessMap:le,roughnessMap:Ye,anisotropy:We,anisotropyMap:pt,clearcoat:P,clearcoatMap:Wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Jt,dispersion:T,iridescence:it,iridescenceMap:te,iridescenceThicknessMap:wt,sheen:gt,sheenColorMap:Ft,sheenRoughnessMap:re,specularMap:$t,specularColorMap:Ht,specularIntensityMap:fe,transmission:bt,transmissionMap:X,thicknessMap:Dt,gradientMap:Ot,opaque:U.transparent===!1&&U.blending===so&&U.alphaToCoverage===!1,alphaMap:qt,alphaTest:At,alphaHash:St,combine:U.combine,mapUv:xt&&R(U.map.channel),aoMapUv:ot&&R(U.aoMap.channel),lightMapUv:Pt&&R(U.lightMap.channel),bumpMapUv:Bt&&R(U.bumpMap.channel),normalMapUv:Ct&&R(U.normalMap.channel),displacementMapUv:kt&&R(U.displacementMap.channel),emissiveMapUv:Nt&&R(U.emissiveMap.channel),metalnessMapUv:le&&R(U.metalnessMap.channel),roughnessMapUv:Ye&&R(U.roughnessMap.channel),anisotropyMapUv:pt&&R(U.anisotropyMap.channel),clearcoatMapUv:Wt&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:re&&R(U.sheenRoughnessMap.channel),specularMapUv:$t&&R(U.specularMap.channel),specularColorMapUv:Ht&&R(U.specularColorMap.channel),specularIntensityMapUv:fe&&R(U.specularIntensityMap.channel),transmissionMapUv:X&&R(U.transmissionMap.channel),thicknessMapUv:Dt&&R(U.thicknessMap.channel),alphaMapUv:qt&&R(U.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Ct||We),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!ct.attributes.uv&&(xt||qt),fog:!!vt,useFog:U.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ht,skinning:ft.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&U.map.isVideoTexture===!0&&Ne.getTransfer(U.map.colorSpace)===ke,decodeVideoTextureEmissive:Nt&&U.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(U.emissiveMap.colorSpace)===ke,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ta,flipSided:U.side===ti,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Qt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&U.extensions.multiDraw===!0||Tt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function v(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const B in U.defines)w.push(B),w.push(U.defines[B]);return U.isRawShaderMaterial===!1&&(N(w,U),D(w,U),w.push(o.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function N(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function D(U,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),U.push(d.mask)}function A(U){const w=b[U.type];let B;if(w){const nt=Ki[w];B=eT.clone(nt.uniforms)}else B=U.uniforms;return B}function z(U,w){let B;for(let nt=0,ft=x.length;nt<ft;nt++){const vt=x[nt];if(vt.cacheKey===w){B=vt,++B.usedTimes;break}}return B===void 0&&(B=new UR(o,w,U,f),x.push(B)),B}function O(U){if(--U.usedTimes===0){const w=x.indexOf(U);x[w]=x[x.length-1],x.pop(),U.destroy()}}function L(U){g.remove(U)}function G(){g.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:A,acquireProgram:z,releaseProgram:O,releaseShaderCache:L,programs:x,dispose:G}}function zR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function u(h,d,g){o.get(h)[d]=g}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:u,dispose:f}}function IR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _x(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function vx(){const o=[];let e=0;const i=[],r=[],u=[];function f(){e=0,i.length=0,r.length=0,u.length=0}function h(m,y,M,b,R,S){let v=o[e];return v===void 0?(v={id:m.id,object:m,geometry:y,material:M,groupOrder:b,renderOrder:m.renderOrder,z:R,group:S},o[e]=v):(v.id=m.id,v.object=m,v.geometry=y,v.material=M,v.groupOrder=b,v.renderOrder=m.renderOrder,v.z=R,v.group=S),e++,v}function d(m,y,M,b,R,S){const v=h(m,y,M,b,R,S);M.transmission>0?r.push(v):M.transparent===!0?u.push(v):i.push(v)}function g(m,y,M,b,R,S){const v=h(m,y,M,b,R,S);M.transmission>0?r.unshift(v):M.transparent===!0?u.unshift(v):i.unshift(v)}function p(m,y){i.length>1&&i.sort(m||IR),r.length>1&&r.sort(y||_x),u.length>1&&u.sort(y||_x)}function x(){for(let m=e,y=o.length;m<y;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:u,init:f,push:d,unshift:g,finish:x,sort:p}}function BR(){let o=new WeakMap;function e(r,u){const f=o.get(r);let h;return f===void 0?(h=new vx,o.set(r,[h])):u>=f.length?(h=new vx,f.push(h)):h=f[u],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function FR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new ze};break;case"SpotLight":i={position:new $,direction:new $,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function HR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let GR=0;function VR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function XR(o){const e=new FR,i=HR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const u=new $,f=new rn,h=new rn;function d(p){let x=0,m=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,R=0,S=0,v=0,N=0,D=0,A=0,z=0,O=0,L=0;p.sort(VR);for(let U=0,w=p.length;U<w;U++){const B=p[U],nt=B.color,ft=B.intensity,vt=B.distance,ct=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=nt.r*ft,m+=nt.g*ft,y+=nt.b*ft;else if(B.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(B.sh.coefficients[k],ft);L++}else if(B.isDirectionalLight){const k=e.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const rt=B.shadow,W=i.get(B);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=ct,r.directionalShadowMatrix[M]=B.shadow.matrix,N++}r.directional[M]=k,M++}else if(B.isSpotLight){const k=e.get(B);k.position.setFromMatrixPosition(B.matrixWorld),k.color.copy(nt).multiplyScalar(ft),k.distance=vt,k.coneCos=Math.cos(B.angle),k.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),k.decay=B.decay,r.spot[R]=k;const rt=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,rt.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[R]=rt.matrix,B.castShadow){const W=i.get(B);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,r.spotShadow[R]=W,r.spotShadowMap[R]=ct,A++}R++}else if(B.isRectAreaLight){const k=e.get(B);k.color.copy(nt).multiplyScalar(ft),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=k,S++}else if(B.isPointLight){const k=e.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),k.distance=B.distance,k.decay=B.decay,B.castShadow){const rt=B.shadow,W=i.get(B);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,W.shadowCameraNear=rt.camera.near,W.shadowCameraFar=rt.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=ct,r.pointShadowMatrix[b]=B.shadow.matrix,D++}r.point[b]=k,b++}else if(B.isHemisphereLight){const k=e.get(B);k.skyColor.copy(B.color).multiplyScalar(ft),k.groundColor.copy(B.groundColor).multiplyScalar(ft),r.hemi[v]=k,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Vt.LTC_FLOAT_1,r.rectAreaLTC2=Vt.LTC_FLOAT_2):(r.rectAreaLTC1=Vt.LTC_HALF_1,r.rectAreaLTC2=Vt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=m,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==M||G.pointLength!==b||G.spotLength!==R||G.rectAreaLength!==S||G.hemiLength!==v||G.numDirectionalShadows!==N||G.numPointShadows!==D||G.numSpotShadows!==A||G.numSpotMaps!==z||G.numLightProbes!==L)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=S,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=A+z-O,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=L,G.directionalLength=M,G.pointLength=b,G.spotLength=R,G.rectAreaLength=S,G.hemiLength=v,G.numDirectionalShadows=N,G.numPointShadows=D,G.numSpotShadows=A,G.numSpotMaps=z,G.numLightProbes=L,r.version=GR++)}function g(p,x){let m=0,y=0,M=0,b=0,R=0;const S=x.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const D=p[v];if(D.isDirectionalLight){const A=r.directional[m];A.direction.setFromMatrixPosition(D.matrixWorld),u.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(u),A.direction.transformDirection(S),m++}else if(D.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(D.matrixWorld),u.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(u),A.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),h.identity(),f.copy(D.matrixWorld),f.premultiply(S),h.extractRotation(f),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),b++}else if(D.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const A=r.hemi[R];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(S),R++}}}return{setup:d,setupView:g,state:r}}function xx(o){const e=new XR(o),i=[],r=[];function u(x){p.camera=x,i.length=0,r.length=0}function f(x){i.push(x)}function h(x){r.push(x)}function d(){e.setup(i)}function g(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:p,setupLights:d,setupLightsView:g,pushLight:f,pushShadow:h}}function kR(o){let e=new WeakMap;function i(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new xx(o),e.set(u,[d])):f>=h.length?(d=new xx(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const jR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
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
}`;function qR(o,e,i){let r=new Vx;const u=new _e,f=new _e,h=new ln,d=new dT({depthPacking:EE}),g=new pT,p={},x=i.maxTextureSize,m={[ds]:ti,[ti]:ds,[Ta]:Ta},y=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:jR,fragmentShader:YR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new di;b.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $i(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mx;let v=this.type;this.render=function(O,L,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const U=o.getRenderTarget(),w=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(fs),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ft=v!==Ea&&this.type===Ea,vt=v===Ea&&this.type!==Ea;for(let ct=0,k=O.length;ct<k;ct++){const rt=O[ct],W=rt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;u.copy(W.mapSize);const Mt=W.getFrameExtents();if(u.multiply(Mt),f.copy(W.mapSize),(u.x>x||u.y>x)&&(u.x>x&&(f.x=Math.floor(x/Mt.x),u.x=f.x*Mt.x,W.mapSize.x=f.x),u.y>x&&(f.y=Math.floor(x/Mt.y),u.y=f.y*Mt.y,W.mapSize.y=f.y)),W.map===null||ft===!0||vt===!0){const Xt=this.type!==Ea?{minFilter:Ii,magFilter:Ii}:{};W.map!==null&&W.map.dispose(),W.map=new Js(u.x,u.y,Xt),W.map.texture.name=rt.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const Et=W.getViewportCount();for(let Xt=0;Xt<Et;Xt++){const se=W.getViewport(Xt);h.set(f.x*se.x,f.y*se.y,f.x*se.z,f.y*se.w),nt.viewport(h),W.updateMatrices(rt,Xt),r=W.getFrustum(),A(L,G,W.camera,rt,this.type)}W.isPointLightShadow!==!0&&this.type===Ea&&N(W,G),W.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(U,w,B)};function N(O,L){const G=e.update(R);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Js(u.x,u.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(L,null,G,y,R,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(L,null,G,M,R,null)}function D(O,L,G,U){let w=null;const B=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)w=B;else if(w=G.isPointLight===!0?g:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const nt=w.uuid,ft=L.uuid;let vt=p[nt];vt===void 0&&(vt={},p[nt]=vt);let ct=vt[ft];ct===void 0&&(ct=w.clone(),vt[ft]=ct,L.addEventListener("dispose",z)),w=ct}if(w.visible=L.visible,w.wireframe=L.wireframe,U===Ea?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:m[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=o.properties.get(w);nt.light=G}return w}function A(O,L,G,U,w){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===Ea)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const ft=e.update(O),vt=O.material;if(Array.isArray(vt)){const ct=ft.groups;for(let k=0,rt=ct.length;k<rt;k++){const W=ct[k],Mt=vt[W.materialIndex];if(Mt&&Mt.visible){const Et=D(O,Mt,U,w);O.onBeforeShadow(o,O,L,G,ft,Et,W),o.renderBufferDirect(G,null,ft,Et,O,W),O.onAfterShadow(o,O,L,G,ft,Et,W)}}}else if(vt.visible){const ct=D(O,vt,U,w);O.onBeforeShadow(o,O,L,G,ft,ct,null),o.renderBufferDirect(G,null,ft,ct,O,null),O.onAfterShadow(o,O,L,G,ft,ct,null)}}const nt=O.children;for(let ft=0,vt=nt.length;ft<vt;ft++)A(nt[ft],L,G,U,w)}function z(O){O.target.removeEventListener("dispose",z);for(const G in p){const U=p[G],w=O.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const WR={[Zd]:Kd,[Qd]:tp,[Jd]:ep,[oo]:$d,[Kd]:Zd,[tp]:Qd,[ep]:Jd,[$d]:oo};function ZR(o,e){function i(){let X=!1;const Dt=new ln;let Ot=null;const qt=new ln(0,0,0,0);return{setMask:function(At){Ot!==At&&!X&&(o.colorMask(At,At,At,At),Ot=At)},setLocked:function(At){X=At},setClear:function(At,St,Qt,ce,Ve){Ve===!0&&(At*=ce,St*=ce,Qt*=ce),Dt.set(At,St,Qt,ce),qt.equals(Dt)===!1&&(o.clearColor(At,St,Qt,ce),qt.copy(Dt))},reset:function(){X=!1,Ot=null,qt.set(-1,0,0,0)}}}function r(){let X=!1,Dt=!1,Ot=null,qt=null,At=null;return{setReversed:function(St){if(Dt!==St){const Qt=e.get("EXT_clip_control");St?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Dt=St;const ce=At;At=null,this.setClear(ce)}},getReversed:function(){return Dt},setTest:function(St){St?at(o.DEPTH_TEST):ht(o.DEPTH_TEST)},setMask:function(St){Ot!==St&&!X&&(o.depthMask(St),Ot=St)},setFunc:function(St){if(Dt&&(St=WR[St]),qt!==St){switch(St){case Zd:o.depthFunc(o.NEVER);break;case Kd:o.depthFunc(o.ALWAYS);break;case Qd:o.depthFunc(o.LESS);break;case oo:o.depthFunc(o.LEQUAL);break;case Jd:o.depthFunc(o.EQUAL);break;case $d:o.depthFunc(o.GEQUAL);break;case tp:o.depthFunc(o.GREATER);break;case ep:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}qt=St}},setLocked:function(St){X=St},setClear:function(St){At!==St&&(Dt&&(St=1-St),o.clearDepth(St),At=St)},reset:function(){X=!1,Ot=null,qt=null,At=null,Dt=!1}}}function u(){let X=!1,Dt=null,Ot=null,qt=null,At=null,St=null,Qt=null,ce=null,Ve=null;return{setTest:function(be){X||(be?at(o.STENCIL_TEST):ht(o.STENCIL_TEST))},setMask:function(be){Dt!==be&&!X&&(o.stencilMask(be),Dt=be)},setFunc:function(be,tn,mn){(Ot!==be||qt!==tn||At!==mn)&&(o.stencilFunc(be,tn,mn),Ot=be,qt=tn,At=mn)},setOp:function(be,tn,mn){(St!==be||Qt!==tn||ce!==mn)&&(o.stencilOp(be,tn,mn),St=be,Qt=tn,ce=mn)},setLocked:function(be){X=be},setClear:function(be){Ve!==be&&(o.clearStencil(be),Ve=be)},reset:function(){X=!1,Dt=null,Ot=null,qt=null,At=null,St=null,Qt=null,ce=null,Ve=null}}}const f=new i,h=new r,d=new u,g=new WeakMap,p=new WeakMap;let x={},m={},y=new WeakMap,M=[],b=null,R=!1,S=null,v=null,N=null,D=null,A=null,z=null,O=null,L=new ze(0,0,0),G=0,U=!1,w=null,B=null,nt=null,ft=null,vt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,rt=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=rt>=2);let Mt=null,Et={};const Xt=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),he=new ln().fromArray(Xt),H=new ln().fromArray(se);function dt(X,Dt,Ot,qt){const At=new Uint8Array(4),St=o.createTexture();o.bindTexture(X,St),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Qt=0;Qt<Ot;Qt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,qt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Dt+Qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return St}const Q={};Q[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),at(o.DEPTH_TEST),h.setFunc(oo),Bt(!1),Ct(m0),at(o.CULL_FACE),ot(fs);function at(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function ht(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function yt(X,Dt){return m[X]!==Dt?(o.bindFramebuffer(X,Dt),m[X]=Dt,X===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Dt),X===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Tt(X,Dt){let Ot=M,qt=!1;if(X){Ot=y.get(Dt),Ot===void 0&&(Ot=[],y.set(Dt,Ot));const At=X.textures;if(Ot.length!==At.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Qt=At.length;St<Qt;St++)Ot[St]=o.COLOR_ATTACHMENT0+St;Ot.length=At.length,qt=!0}}else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,qt=!0);qt&&o.drawBuffers(Ot)}function xt(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const It={[Ys]:o.FUNC_ADD,[ZM]:o.FUNC_SUBTRACT,[KM]:o.FUNC_REVERSE_SUBTRACT};It[QM]=o.MIN,It[JM]=o.MAX;const F={[$M]:o.ZERO,[tE]:o.ONE,[eE]:o.SRC_COLOR,[qd]:o.SRC_ALPHA,[oE]:o.SRC_ALPHA_SATURATE,[sE]:o.DST_COLOR,[iE]:o.DST_ALPHA,[nE]:o.ONE_MINUS_SRC_COLOR,[Wd]:o.ONE_MINUS_SRC_ALPHA,[rE]:o.ONE_MINUS_DST_COLOR,[aE]:o.ONE_MINUS_DST_ALPHA,[lE]:o.CONSTANT_COLOR,[uE]:o.ONE_MINUS_CONSTANT_COLOR,[cE]:o.CONSTANT_ALPHA,[fE]:o.ONE_MINUS_CONSTANT_ALPHA};function ot(X,Dt,Ot,qt,At,St,Qt,ce,Ve,be){if(X===fs){R===!0&&(ht(o.BLEND),R=!1);return}if(R===!1&&(at(o.BLEND),R=!0),X!==WM){if(X!==S||be!==U){if((v!==Ys||A!==Ys)&&(o.blendEquation(o.FUNC_ADD),v=Ys,A=Ys),be)switch(X){case so:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case g0:o.blendFunc(o.ONE,o.ONE);break;case _0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case v0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case so:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case g0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case _0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,D=null,z=null,O=null,L.set(0,0,0),G=0,S=X,U=be}return}At=At||Dt,St=St||Ot,Qt=Qt||qt,(Dt!==v||At!==A)&&(o.blendEquationSeparate(It[Dt],It[At]),v=Dt,A=At),(Ot!==N||qt!==D||St!==z||Qt!==O)&&(o.blendFuncSeparate(F[Ot],F[qt],F[St],F[Qt]),N=Ot,D=qt,z=St,O=Qt),(ce.equals(L)===!1||Ve!==G)&&(o.blendColor(ce.r,ce.g,ce.b,Ve),L.copy(ce),G=Ve),S=X,U=!1}function Pt(X,Dt){X.side===Ta?ht(o.CULL_FACE):at(o.CULL_FACE);let Ot=X.side===ti;Dt&&(Ot=!Ot),Bt(Ot),X.blending===so&&X.transparent===!1?ot(fs):ot(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),f.setMask(X.colorWrite);const qt=X.stencilWrite;d.setTest(qt),qt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Nt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?at(o.SAMPLE_ALPHA_TO_COVERAGE):ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Ct(X){X!==jM?(at(o.CULL_FACE),X!==B&&(X===m0?o.cullFace(o.BACK):X===YM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ht(o.CULL_FACE),B=X}function kt(X){X!==nt&&(k&&o.lineWidth(X),nt=X)}function Nt(X,Dt,Ot){X?(at(o.POLYGON_OFFSET_FILL),(ft!==Dt||vt!==Ot)&&(o.polygonOffset(Dt,Ot),ft=Dt,vt=Ot)):ht(o.POLYGON_OFFSET_FILL)}function le(X){X?at(o.SCISSOR_TEST):ht(o.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=o.TEXTURE0+ct-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function We(X,Dt,Ot){Ot===void 0&&(Mt===null?Ot=o.TEXTURE0+ct-1:Ot=Mt);let qt=Et[Ot];qt===void 0&&(qt={type:void 0,texture:void 0},Et[Ot]=qt),(qt.type!==X||qt.texture!==Dt)&&(Mt!==Ot&&(o.activeTexture(Ot),Mt=Ot),o.bindTexture(X,Dt||Q[X]),qt.type=X,qt.texture=Dt)}function P(){const X=Et[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(X){he.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),he.copy(X))}function re(X){H.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),H.copy(X))}function $t(X,Dt){let Ot=p.get(Dt);Ot===void 0&&(Ot=new WeakMap,p.set(Dt,Ot));let qt=Ot.get(X);qt===void 0&&(qt=o.getUniformBlockIndex(Dt,X.name),Ot.set(X,qt))}function Ht(X,Dt){const qt=p.get(Dt).get(X);g.get(Dt)!==qt&&(o.uniformBlockBinding(Dt,qt,X.__bindingPointIndex),g.set(Dt,qt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Mt=null,Et={},m={},y=new WeakMap,M=[],b=null,R=!1,S=null,v=null,N=null,D=null,A=null,z=null,O=null,L=new ze(0,0,0),G=0,U=!1,w=null,B=null,nt=null,ft=null,vt=null,he.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:at,disable:ht,bindFramebuffer:yt,drawBuffers:Tt,useProgram:xt,setBlending:ot,setMaterial:Pt,setFlipSided:Bt,setCullFace:Ct,setLineWidth:kt,setPolygonOffset:Nt,setScissorTest:le,activeTexture:Ye,bindTexture:We,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:te,texImage3D:wt,updateUBOMapping:$t,uniformBlockBinding:Ht,texStorage2D:Ut,texStorage3D:Jt,texSubImage2D:gt,texSubImage3D:bt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Wt,scissor:Ft,viewport:re,reset:fe}}function KR(o,e,i,r,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _e,x=new WeakMap;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return M?new OffscreenCanvas(P,T):Cc("canvas")}function R(P,T,it){let gt=1;const bt=We(P);if((bt.width>it||bt.height>it)&&(gt=it/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pt=Math.floor(gt*bt.width),Wt=Math.floor(gt*bt.height);m===void 0&&(m=b(pt,Wt));const Ut=T?b(pt,Wt):m;return Ut.width=pt,Ut.height=Wt,Ut.getContext("2d").drawImage(P,0,0,pt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+pt+"x"+Wt+")."),Ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){o.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(P,T,it,gt,bt=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt=T;if(T===o.RED&&(it===o.FLOAT&&(pt=o.R32F),it===o.HALF_FLOAT&&(pt=o.R16F),it===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.R8UI),it===o.UNSIGNED_SHORT&&(pt=o.R16UI),it===o.UNSIGNED_INT&&(pt=o.R32UI),it===o.BYTE&&(pt=o.R8I),it===o.SHORT&&(pt=o.R16I),it===o.INT&&(pt=o.R32I)),T===o.RG&&(it===o.FLOAT&&(pt=o.RG32F),it===o.HALF_FLOAT&&(pt=o.RG16F),it===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RG8UI),it===o.UNSIGNED_SHORT&&(pt=o.RG16UI),it===o.UNSIGNED_INT&&(pt=o.RG32UI),it===o.BYTE&&(pt=o.RG8I),it===o.SHORT&&(pt=o.RG16I),it===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),it===o.UNSIGNED_INT&&(pt=o.RGB32UI),it===o.BYTE&&(pt=o.RGB8I),it===o.SHORT&&(pt=o.RGB16I),it===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),it===o.UNSIGNED_INT&&(pt=o.RGBA32UI),it===o.BYTE&&(pt=o.RGBA8I),it===o.SHORT&&(pt=o.RGBA16I),it===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),T===o.RGBA){const Wt=bt?Ac:Ne.getTransfer(gt);it===o.FLOAT&&(pt=o.RGBA32F),it===o.HALF_FLOAT&&(pt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(pt=Wt===ke?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function A(P,T){let it;return P?T===null||T===Ks||T===gl?it=o.DEPTH24_STENCIL8:T===ba?it=o.DEPTH32F_STENCIL8:T===ml&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ks||T===gl?it=o.DEPTH_COMPONENT24:T===ba?it=o.DEPTH_COMPONENT32F:T===ml&&(it=o.DEPTH_COMPONENT16),it}function z(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ii&&P.minFilter!==Qi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function O(P){const T=P.target;T.removeEventListener("dispose",O),G(T),T.isVideoTexture&&x.delete(T)}function L(P){const T=P.target;T.removeEventListener("dispose",L),w(T)}function G(P){const T=r.get(P);if(T.__webglInit===void 0)return;const it=P.source,gt=y.get(it);if(gt){const bt=gt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&U(P),Object.keys(gt).length===0&&y.delete(it)}r.remove(P)}function U(P){const T=r.get(P);o.deleteTexture(T.__webglTexture);const it=P.source,gt=y.get(it);delete gt[T.__cacheKey],h.memory.textures--}function w(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let bt=0;bt<T.__webglFramebuffer[gt].length;bt++)o.deleteFramebuffer(T.__webglFramebuffer[gt][bt]);else o.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[gt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=P.textures;for(let gt=0,bt=it.length;gt<bt;gt++){const pt=r.get(it[gt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(it[gt])}r.remove(P)}let B=0;function nt(){B=0}function ft(){const P=B;return P>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+u.maxTextures),B+=1,P}function vt(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ct(P,T){const it=r.get(P);if(P.isVideoTexture&&le(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&it.__version!==P.version){const gt=P.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(it,P,T);return}}else P.isExternalTexture&&(it.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function k(P,T){const it=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){Q(it,P,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function rt(P,T){const it=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){Q(it,P,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function W(P,T){const it=r.get(P);if(P.version>0&&it.__version!==P.version){at(it,P,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const Mt={[ap]:o.REPEAT,[Ws]:o.CLAMP_TO_EDGE,[sp]:o.MIRRORED_REPEAT},Et={[Ii]:o.NEAREST,[yE]:o.NEAREST_MIPMAP_NEAREST,[Wu]:o.NEAREST_MIPMAP_LINEAR,[Qi]:o.LINEAR,[dd]:o.LINEAR_MIPMAP_NEAREST,[Zs]:o.LINEAR_MIPMAP_LINEAR},Xt={[AE]:o.NEVER,[NE]:o.ALWAYS,[RE]:o.LESS,[Lx]:o.LEQUAL,[CE]:o.EQUAL,[UE]:o.GEQUAL,[wE]:o.GREATER,[DE]:o.NOTEQUAL};function se(P,T){if(T.type===ba&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qi||T.magFilter===dd||T.magFilter===Wu||T.magFilter===Zs||T.minFilter===Qi||T.minFilter===dd||T.minFilter===Wu||T.minFilter===Zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Et[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,Xt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ii||T.minFilter!==Wu&&T.minFilter!==Zs||T.type===ba&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function he(P,T){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",O));const gt=T.source;let bt=y.get(gt);bt===void 0&&(bt={},y.set(gt,bt));const pt=vt(T);if(pt!==P.__cacheKey){bt[pt]===void 0&&(bt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),bt[pt].usedTimes++;const Wt=bt[P.__cacheKey];Wt!==void 0&&(bt[P.__cacheKey].usedTimes--,Wt.usedTimes===0&&U(T)),P.__cacheKey=pt,P.__webglTexture=bt[pt].texture}return it}function H(P,T,it){return Math.floor(Math.floor(P/it)/T)}function dt(P,T,it,gt){const pt=P.updateRanges;if(pt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,gt,T.data);else{pt.sort((wt,Ft)=>wt.start-Ft.start);let Wt=0;for(let wt=1;wt<pt.length;wt++){const Ft=pt[Wt],re=pt[wt],$t=Ft.start+Ft.count,Ht=H(re.start,T.width,4),fe=H(Ft.start,T.width,4);re.start<=$t+1&&Ht===fe&&H(re.start+re.count-1,T.width,4)===Ht?Ft.count=Math.max(Ft.count,re.start+re.count-Ft.start):(++Wt,pt[Wt]=re)}pt.length=Wt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let wt=0,Ft=pt.length;wt<Ft;wt++){const re=pt[wt],$t=Math.floor(re.start/4),Ht=Math.ceil(re.count/4),fe=$t%T.width,X=Math.floor($t/T.width),Dt=Ht,Ot=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,fe,X,Dt,Ot,it,gt,T.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function Q(P,T,it){let gt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=o.TEXTURE_3D);const bt=he(P,T),pt=T.source;i.bindTexture(gt,P.__webglTexture,o.TEXTURE0+it);const Wt=r.get(pt);if(pt.version!==Wt.__version||bt===!0){i.activeTexture(o.TEXTURE0+it);const Ut=Ne.getPrimaries(Ne.workingColorSpace),Jt=T.colorSpace===cs?null:Ne.getPrimaries(T.colorSpace),te=T.colorSpace===cs||Ut===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let wt=R(T.image,!1,u.maxTextureSize);wt=Ye(T,wt);const Ft=f.convert(T.format,T.colorSpace),re=f.convert(T.type);let $t=D(T.internalFormat,Ft,re,T.colorSpace,T.isVideoTexture);se(gt,T);let Ht;const fe=T.mipmaps,X=T.isVideoTexture!==!0,Dt=Wt.__version===void 0||bt===!0,Ot=pt.dataReady,qt=z(T,wt);if(T.isDepthTexture)$t=A(T.format===vl,T.type),Dt&&(X?i.texStorage2D(o.TEXTURE_2D,1,$t,wt.width,wt.height):i.texImage2D(o.TEXTURE_2D,0,$t,wt.width,wt.height,0,Ft,re,null));else if(T.isDataTexture)if(fe.length>0){X&&Dt&&i.texStorage2D(o.TEXTURE_2D,qt,$t,fe[0].width,fe[0].height);for(let At=0,St=fe.length;At<St;At++)Ht=fe[At],X?Ot&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ht.width,Ht.height,Ft,re,Ht.data):i.texImage2D(o.TEXTURE_2D,At,$t,Ht.width,Ht.height,0,Ft,re,Ht.data);T.generateMipmaps=!1}else X?(Dt&&i.texStorage2D(o.TEXTURE_2D,qt,$t,wt.width,wt.height),Ot&&dt(T,wt,Ft,re)):i.texImage2D(o.TEXTURE_2D,0,$t,wt.width,wt.height,0,Ft,re,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,$t,fe[0].width,fe[0].height,wt.depth);for(let At=0,St=fe.length;At<St;At++)if(Ht=fe[At],T.format!==zi)if(Ft!==null)if(X){if(Ot)if(T.layerUpdates.size>0){const Qt=Z0(Ht.width,Ht.height,T.format,T.type);for(const ce of T.layerUpdates){const Ve=Ht.data.subarray(ce*Qt/Ht.data.BYTES_PER_ELEMENT,(ce+1)*Qt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,ce,Ht.width,Ht.height,1,Ft,Ve)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ht.width,Ht.height,wt.depth,Ft,Ht.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,$t,Ht.width,Ht.height,wt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ht.width,Ht.height,wt.depth,Ft,re,Ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,$t,Ht.width,Ht.height,wt.depth,0,Ft,re,Ht.data)}else{X&&Dt&&i.texStorage2D(o.TEXTURE_2D,qt,$t,fe[0].width,fe[0].height);for(let At=0,St=fe.length;At<St;At++)Ht=fe[At],T.format!==zi?Ft!==null?X?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Ht.width,Ht.height,Ft,Ht.data):i.compressedTexImage2D(o.TEXTURE_2D,At,$t,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ot&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ht.width,Ht.height,Ft,re,Ht.data):i.texImage2D(o.TEXTURE_2D,At,$t,Ht.width,Ht.height,0,Ft,re,Ht.data)}else if(T.isDataArrayTexture)if(X){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,$t,wt.width,wt.height,wt.depth),Ot)if(T.layerUpdates.size>0){const At=Z0(wt.width,wt.height,T.format,T.type);for(const St of T.layerUpdates){const Qt=wt.data.subarray(St*At/wt.data.BYTES_PER_ELEMENT,(St+1)*At/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,wt.width,wt.height,1,Ft,re,Qt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ft,re,wt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,$t,wt.width,wt.height,wt.depth,0,Ft,re,wt.data);else if(T.isData3DTexture)X?(Dt&&i.texStorage3D(o.TEXTURE_3D,qt,$t,wt.width,wt.height,wt.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ft,re,wt.data)):i.texImage3D(o.TEXTURE_3D,0,$t,wt.width,wt.height,wt.depth,0,Ft,re,wt.data);else if(T.isFramebufferTexture){if(Dt)if(X)i.texStorage2D(o.TEXTURE_2D,qt,$t,wt.width,wt.height);else{let At=wt.width,St=wt.height;for(let Qt=0;Qt<qt;Qt++)i.texImage2D(o.TEXTURE_2D,Qt,$t,At,St,0,Ft,re,null),At>>=1,St>>=1}}else if(fe.length>0){if(X&&Dt){const At=We(fe[0]);i.texStorage2D(o.TEXTURE_2D,qt,$t,At.width,At.height)}for(let At=0,St=fe.length;At<St;At++)Ht=fe[At],X?Ot&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ft,re,Ht):i.texImage2D(o.TEXTURE_2D,At,$t,Ft,re,Ht);T.generateMipmaps=!1}else if(X){if(Dt){const At=We(wt);i.texStorage2D(o.TEXTURE_2D,qt,$t,At.width,At.height)}Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,re,wt)}else i.texImage2D(o.TEXTURE_2D,0,$t,Ft,re,wt);S(T)&&v(gt),Wt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function at(P,T,it){if(T.image.length!==6)return;const gt=he(P,T),bt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+it);const pt=r.get(bt);if(bt.version!==pt.__version||gt===!0){i.activeTexture(o.TEXTURE0+it);const Wt=Ne.getPrimaries(Ne.workingColorSpace),Ut=T.colorSpace===cs?null:Ne.getPrimaries(T.colorSpace),Jt=T.colorSpace===cs||Wt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const te=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let St=0;St<6;St++)!te&&!wt?Ft[St]=R(T.image[St],!0,u.maxCubemapSize):Ft[St]=wt?T.image[St].image:T.image[St],Ft[St]=Ye(T,Ft[St]);const re=Ft[0],$t=f.convert(T.format,T.colorSpace),Ht=f.convert(T.type),fe=D(T.internalFormat,$t,Ht,T.colorSpace),X=T.isVideoTexture!==!0,Dt=pt.__version===void 0||gt===!0,Ot=bt.dataReady;let qt=z(T,re);se(o.TEXTURE_CUBE_MAP,T);let At;if(te){X&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,re.width,re.height);for(let St=0;St<6;St++){At=Ft[St].mipmaps;for(let Qt=0;Qt<At.length;Qt++){const ce=At[Qt];T.format!==zi?$t!==null?X?Ot&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,0,0,ce.width,ce.height,$t,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,0,0,ce.width,ce.height,$t,Ht,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,fe,ce.width,ce.height,0,$t,Ht,ce.data)}}}else{if(At=T.mipmaps,X&&Dt){At.length>0&&qt++;const St=We(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(wt){X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ft[St].width,Ft[St].height,$t,Ht,Ft[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Ft[St].width,Ft[St].height,0,$t,Ht,Ft[St].data);for(let Qt=0;Qt<At.length;Qt++){const Ve=At[Qt].image[St].image;X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,0,0,Ve.width,Ve.height,$t,Ht,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,fe,Ve.width,Ve.height,0,$t,Ht,Ve.data)}}else{X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,$t,Ht,Ft[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,$t,Ht,Ft[St]);for(let Qt=0;Qt<At.length;Qt++){const ce=At[Qt];X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,0,0,$t,Ht,ce.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,fe,$t,Ht,ce.image[St])}}}S(T)&&v(o.TEXTURE_CUBE_MAP),pt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ht(P,T,it,gt,bt,pt){const Wt=f.convert(it.format,it.colorSpace),Ut=f.convert(it.type),Jt=D(it.internalFormat,Wt,Ut,it.colorSpace),te=r.get(T),wt=r.get(it);if(wt.__renderTarget=T,!te.__hasExternalTextures){const Ft=Math.max(1,T.width>>pt),re=Math.max(1,T.height>>pt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,pt,Jt,Ft,re,T.depth,0,Wt,Ut,null):i.texImage2D(bt,pt,Jt,Ft,re,0,Wt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Nt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,bt,wt.__webglTexture,0,kt(T)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,bt,wt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(P,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer){const gt=T.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,pt=A(T.stencilBuffer,bt),Wt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=kt(T);Nt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,pt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,P)}else{const gt=T.textures;for(let bt=0;bt<gt.length;bt++){const pt=gt[bt],Wt=f.convert(pt.format,pt.colorSpace),Ut=f.convert(pt.type),Jt=D(pt.internalFormat,Wt,Ut,pt.colorSpace),te=kt(T);it&&Nt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Jt,T.width,T.height):Nt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,te,Jt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ct(T.depthTexture,0);const bt=gt.__webglTexture,pt=kt(T);if(T.depthTexture.format===_l)Nt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0);else if(T.depthTexture.format===vl)Nt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function xt(P){const T=r.get(P),it=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const gt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=gt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const gt=P.texture.mipmaps;gt&&gt.length>0?Tt(T.__webglFramebuffer[0],P):Tt(T.__webglFramebuffer,P)}else if(it){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=o.createRenderbuffer(),yt(T.__webglDepthbuffer[gt],P,!1);else{const bt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}else{const gt=P.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),yt(T.__webglDepthbuffer,P,!1);else{const bt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(P,T,it){const gt=r.get(P);T!==void 0&&ht(gt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&xt(P)}function F(P){const T=P.texture,it=r.get(P),gt=r.get(T);P.addEventListener("dispose",L);const bt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,Wt=bt.length>1;if(Wt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=T.version,h.memory.textures++),pt){it.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[Ut]=[];for(let Jt=0;Jt<T.mipmaps.length;Jt++)it.__webglFramebuffer[Ut][Jt]=o.createFramebuffer()}else it.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)it.__webglFramebuffer[Ut]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ut=0,Jt=bt.length;Ut<Jt;Ut++){const te=r.get(bt[Ut]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&Nt(P)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ut=0;Ut<bt.length;Ut++){const Jt=bt[Ut];it.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ut]);const te=f.convert(Jt.format,Jt.colorSpace),wt=f.convert(Jt.type),Ft=D(Jt.internalFormat,te,wt,Jt.colorSpace,P.isXRRenderTarget===!0),re=kt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,re,Ft,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(it.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),se(o.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)ht(it.__webglFramebuffer[Ut][Jt],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Jt);else ht(it.__webglFramebuffer[Ut],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ut=0,Jt=bt.length;Ut<Jt;Ut++){const te=bt[Ut],wt=r.get(te);let Ft=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ft=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ft,wt.__webglTexture),se(Ft,te),ht(it.__webglFramebuffer,P,te,o.COLOR_ATTACHMENT0+Ut,Ft,0),S(te)&&v(Ft)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ut=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,gt.__webglTexture),se(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)ht(it.__webglFramebuffer[Jt],P,T,o.COLOR_ATTACHMENT0,Ut,Jt);else ht(it.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,Ut,0);S(T)&&v(Ut),i.unbindTexture()}P.depthBuffer&&xt(P)}function ot(P){const T=P.textures;for(let it=0,gt=T.length;it<gt;it++){const bt=T[it];if(S(bt)){const pt=N(P),Wt=r.get(bt).__webglTexture;i.bindTexture(pt,Wt),v(pt),i.unbindTexture()}}}const Pt=[],Bt=[];function Ct(P){if(P.samples>0){if(Nt(P)===!1){const T=P.textures,it=P.width,gt=P.height;let bt=o.COLOR_BUFFER_BIT;const pt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=r.get(P),Ut=T.length>1;if(Ut)for(let te=0;te<T.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Jt=P.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let te=0;te<T.length;te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const wt=r.get(T[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,wt,0)}o.blitFramebuffer(0,0,it,gt,0,0,it,gt,bt,o.NEAREST),g===!0&&(Pt.length=0,Bt.length=0,Pt.push(o.COLOR_ATTACHMENT0+te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(pt),Bt.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Bt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let te=0;te<T.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const wt=r.get(T[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,wt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&g){const T=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function kt(P){return Math.min(u.maxSamples,P.samples)}function Nt(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(P){const T=h.render.frame;x.get(P)!==T&&(x.set(P,T),P.update())}function Ye(P,T){const it=P.colorSpace,gt=P.format,bt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||it!==co&&it!==cs&&(Ne.getTransfer(it)===ke?(gt!==zi||bt!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ft,this.resetTextureUnits=nt,this.setTexture2D=ct,this.setTexture2DArray=k,this.setTexture3D=rt,this.setTextureCube=W,this.rebindTextures=It,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Nt}function QR(o,e){function i(r,u=cs){let f;const h=Ne.getTransfer(u);if(r===Ra)return o.UNSIGNED_BYTE;if(r===Vp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Xp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Rx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Cx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===bx)return o.BYTE;if(r===Ax)return o.SHORT;if(r===ml)return o.UNSIGNED_SHORT;if(r===Gp)return o.INT;if(r===Ks)return o.UNSIGNED_INT;if(r===ba)return o.FLOAT;if(r===Sl)return o.HALF_FLOAT;if(r===wx)return o.ALPHA;if(r===Dx)return o.RGB;if(r===zi)return o.RGBA;if(r===_l)return o.DEPTH_COMPONENT;if(r===vl)return o.DEPTH_STENCIL;if(r===Ux)return o.RED;if(r===kp)return o.RED_INTEGER;if(r===Nx)return o.RG;if(r===jp)return o.RG_INTEGER;if(r===Yp)return o.RGBA_INTEGER;if(r===Sc||r===yc||r===Mc||r===Ec)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Sc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Sc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rp||r===op||r===lp||r===up)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===rp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===op)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cp||r===fp||r===hp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===cp||r===fp)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===hp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===Sp||r===yp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===dp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rp||r===Cp||r===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Rp)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dp||r===Up||r===Np||r===Lp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Dp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Up)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Np)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$R=`
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

}`;class tC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Yx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ps({vertexShader:JR,fragmentShader:$R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $i(new Nc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends $s{constructor(e,i){super();const r=this;let u=null,f=1,h=null,d="local-floor",g=1,p=null,x=null,m=null,y=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",S=new tC,v={},N=i.getContextAttributes();let D=null,A=null;const z=[],O=[],L=new _e;let G=null;const U=new bi;U.viewport=new ln;const w=new bi;w.viewport=new ln;const B=[U,w],nt=new ST;let ft=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let at=z[Q];return at===void 0&&(at=new Pd,z[Q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Q){let at=z[Q];return at===void 0&&(at=new Pd,z[Q]=at),at.getGripSpace()},this.getHand=function(Q){let at=z[Q];return at===void 0&&(at=new Pd,z[Q]=at),at.getHandSpace()};function ct(Q){const at=O.indexOf(Q.inputSource);if(at===-1)return;const ht=z[at];ht!==void 0&&(ht.update(Q.inputSource,Q.frame,p||h),ht.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){u.removeEventListener("select",ct),u.removeEventListener("selectstart",ct),u.removeEventListener("selectend",ct),u.removeEventListener("squeeze",ct),u.removeEventListener("squeezestart",ct),u.removeEventListener("squeezeend",ct),u.removeEventListener("end",k),u.removeEventListener("inputsourceschange",rt);for(let Q=0;Q<z.length;Q++){const at=O[Q];at!==null&&(O[Q]=null,z[Q].disconnect(at))}ft=null,vt=null,S.reset();for(const Q in v)delete v[Q];e.setRenderTarget(D),M=null,y=null,m=null,u=null,A=null,dt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return m===null&&R&&(m=new XRWebGLBinding(u,i)),m},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(Q){if(u=Q,u!==null){if(D=e.getRenderTarget(),u.addEventListener("select",ct),u.addEventListener("selectstart",ct),u.addEventListener("selectend",ct),u.addEventListener("squeeze",ct),u.addEventListener("squeezestart",ct),u.addEventListener("squeezeend",ct),u.addEventListener("end",k),u.addEventListener("inputsourceschange",rt),N.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(L),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,yt=null,Tt=null;N.depth&&(Tt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ht=N.stencil?vl:_l,yt=N.stencil?gl:Ks);const xt={colorFormat:i.RGBA8,depthFormat:Tt,scaleFactor:f};m=this.getBinding(),y=m.createProjectionLayer(xt),u.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),A=new Js(y.textureWidth,y.textureHeight,{format:zi,type:Ra,depthTexture:new jx(y.textureWidth,y.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ht={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,i,ht),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new Js(M.framebufferWidth,M.framebufferHeight,{format:zi,type:Ra,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await u.requestReferenceSpace(d),dt.setContext(u),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function rt(Q){for(let at=0;at<Q.removed.length;at++){const ht=Q.removed[at],yt=O.indexOf(ht);yt>=0&&(O[yt]=null,z[yt].disconnect(ht))}for(let at=0;at<Q.added.length;at++){const ht=Q.added[at];let yt=O.indexOf(ht);if(yt===-1){for(let xt=0;xt<z.length;xt++)if(xt>=O.length){O.push(ht),yt=xt;break}else if(O[xt]===null){O[xt]=ht,yt=xt;break}if(yt===-1)break}const Tt=z[yt];Tt&&Tt.connect(ht)}}const W=new $,Mt=new $;function Et(Q,at,ht){W.setFromMatrixPosition(at.matrixWorld),Mt.setFromMatrixPosition(ht.matrixWorld);const yt=W.distanceTo(Mt),Tt=at.projectionMatrix.elements,xt=ht.projectionMatrix.elements,It=Tt[14]/(Tt[10]-1),F=Tt[14]/(Tt[10]+1),ot=(Tt[9]+1)/Tt[5],Pt=(Tt[9]-1)/Tt[5],Bt=(Tt[8]-1)/Tt[0],Ct=(xt[8]+1)/xt[0],kt=It*Bt,Nt=It*Ct,le=yt/(-Bt+Ct),Ye=le*-Bt;if(at.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ye),Q.translateZ(le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Tt[10]===-1)Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const We=It+le,P=F+le,T=kt-Ye,it=Nt+(yt-Ye),gt=ot*F/P*We,bt=Pt*F/P*We;Q.projectionMatrix.makePerspective(T,it,gt,bt,We,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Xt(Q,at){at===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(at.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(u===null)return;let at=Q.near,ht=Q.far;S.texture!==null&&(S.depthNear>0&&(at=S.depthNear),S.depthFar>0&&(ht=S.depthFar)),nt.near=w.near=U.near=at,nt.far=w.far=U.far=ht,(ft!==nt.near||vt!==nt.far)&&(u.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ft=nt.near,vt=nt.far),nt.layers.mask=Q.layers.mask|6,U.layers.mask=nt.layers.mask&3,w.layers.mask=nt.layers.mask&5;const yt=Q.parent,Tt=nt.cameras;Xt(nt,yt);for(let xt=0;xt<Tt.length;xt++)Xt(Tt[xt],yt);Tt.length===2?Et(nt,U,w):nt.projectionMatrix.copy(U.projectionMatrix),se(Q,nt,yt)};function se(Q,at,ht){ht===null?Q.matrix.copy(at.matrixWorld):(Q.matrix.copy(ht.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(at.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Op*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(y===null&&M===null))return g},this.setFoveation=function(Q){g=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(nt)},this.getCameraTexture=function(Q){return v[Q]};let he=null;function H(Q,at){if(x=at.getViewerPose(p||h),b=at,x!==null){const ht=x.views;M!==null&&(e.setRenderTargetFramebuffer(A,M.framebuffer),e.setRenderTarget(A));let yt=!1;ht.length!==nt.cameras.length&&(nt.cameras.length=0,yt=!0);for(let F=0;F<ht.length;F++){const ot=ht[F];let Pt=null;if(M!==null)Pt=M.getViewport(ot);else{const Ct=m.getViewSubImage(y,ot);Pt=Ct.viewport,F===0&&(e.setRenderTargetTextures(A,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(A))}let Bt=B[F];Bt===void 0&&(Bt=new bi,Bt.layers.enable(F),Bt.viewport=new ln,B[F]=Bt),Bt.matrix.fromArray(ot.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(ot.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),F===0&&(nt.matrix.copy(Bt.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),yt===!0&&nt.cameras.push(Bt)}const Tt=u.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&R){m=r.getBinding();const F=m.getDepthInformation(ht[0]);F&&F.isValid&&F.texture&&S.init(F,u.renderState)}if(Tt&&Tt.includes("camera-access")&&R){e.state.unbindTexture(),m=r.getBinding();for(let F=0;F<ht.length;F++){const ot=ht[F].camera;if(ot){let Pt=v[ot];Pt||(Pt=new Yx,v[ot]=Pt);const Bt=m.getCameraImage(ot);Pt.sourceTexture=Bt}}}}for(let ht=0;ht<z.length;ht++){const yt=O[ht],Tt=z[ht];yt!==null&&Tt!==void 0&&Tt.update(yt,at,p||h)}he&&he(Q,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),b=null}const dt=new qx;dt.setAnimationLoop(H),this.setAnimationLoop=function(Q){he=Q},this.dispose=function(){}}}const ks=new Ca,nC=new rn;function iC(o,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Fx(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function u(S,v,N,D,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?f(S,v):v.isMeshToonMaterial?(f(S,v),m(S,v)):v.isMeshPhongMaterial?(f(S,v),x(S,v)):v.isMeshStandardMaterial?(f(S,v),y(S,v),v.isMeshPhysicalMaterial&&M(S,v,A)):v.isMeshMatcapMaterial?(f(S,v),b(S,v)):v.isMeshDepthMaterial?f(S,v):v.isMeshDistanceMaterial?(f(S,v),R(S,v)):v.isMeshNormalMaterial?f(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?g(S,v,N,D):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function f(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===ti&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===ti&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const N=e.get(v),D=N.envMap,A=N.envMapRotation;D&&(S.envMap.value=D,ks.copy(A),ks.x*=-1,ks.y*=-1,ks.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),S.envMapRotation.value.setFromMatrix4(nC.makeRotationFromEuler(ks)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function g(S,v,N,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*N,S.scale.value=D*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function x(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function m(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,N){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ti&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,v){v.matcap&&(S.matcap.value=v.matcap)}function R(S,v){const N=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:u}}function aC(o,e,i,r){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,D){const A=D.program;r.uniformBlockBinding(N,A)}function p(N,D){let A=u[N.id];A===void 0&&(b(N),A=x(N),u[N.id]=A,N.addEventListener("dispose",S));const z=D.program;r.updateUBOMapping(N,z);const O=e.render.frame;f[N.id]!==O&&(y(N),f[N.id]=O)}function x(N){const D=m();N.__bindingPointIndex=D;const A=o.createBuffer(),z=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,z,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,A),A}function m(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const D=u[N.id],A=N.uniforms,z=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let O=0,L=A.length;O<L;O++){const G=Array.isArray(A[O])?A[O]:[A[O]];for(let U=0,w=G.length;U<w;U++){const B=G[U];if(M(B,O,U,z)===!0){const nt=B.__offset,ft=Array.isArray(B.value)?B.value:[B.value];let vt=0;for(let ct=0;ct<ft.length;ct++){const k=ft[ct],rt=R(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,nt+vt,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,vt),vt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,D,A,z){const O=N.value,L=D+"_"+A;if(z[L]===void 0)return typeof O=="number"||typeof O=="boolean"?z[L]=O:z[L]=O.clone(),!0;{const G=z[L];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return z[L]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function b(N){const D=N.uniforms;let A=0;const z=16;for(let L=0,G=D.length;L<G;L++){const U=Array.isArray(D[L])?D[L]:[D[L]];for(let w=0,B=U.length;w<B;w++){const nt=U[w],ft=Array.isArray(nt.value)?nt.value:[nt.value];for(let vt=0,ct=ft.length;vt<ct;vt++){const k=ft[vt],rt=R(k),W=A%z,Mt=W%rt.boundary,Et=W+Mt;A+=Mt,Et!==0&&z-Et<rt.storage&&(A+=z-Et),nt.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=A,A+=rt.storage}}}const O=A%z;return O>0&&(A+=z-O),N.__size=A,N.__cache={},this}function R(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const A=h.indexOf(D.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(u[D.id]),delete u[D.id],delete f[D.id]}function v(){for(const N in u)o.deleteBuffer(u[N]);h=[],u={},f={}}return{bind:g,update:p,dispose:v}}class sC{constructor(e={}){const{canvas:i=PE(),context:r=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let S=null,v=null;const N=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let z=!1;this._outputColorSpace=$n;let O=0,L=0,G=null,U=-1,w=null;const B=new ln,nt=new ln;let ft=null;const vt=new ze(0);let ct=0,k=i.width,rt=i.height,W=1,Mt=null,Et=null;const Xt=new ln(0,0,k,rt),se=new ln(0,0,k,rt);let he=!1;const H=new Vx;let dt=!1,Q=!1;const at=new rn,ht=new $,yt=new ln,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function It(){return G===null?W:1}let F=r;function ot(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hp}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",At,!1),F===null){const Z="webgl2";if(F=ot(Z,C),F===null)throw ot(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Pt,Bt,Ct,kt,Nt,le,Ye,We,P,T,it,gt,bt,pt,Wt,Ut,Jt,te,wt,Ft,re,$t,Ht,fe;function X(){Pt=new m1(F),Pt.init(),$t=new QR(F,Pt),Bt=new l1(F,Pt,e,$t),Ct=new ZR(F,Pt),Bt.reversedDepthBuffer&&y&&Ct.buffers.depth.setReversed(!0),kt=new v1(F),Nt=new zR,le=new KR(F,Pt,Ct,Nt,Bt,$t,kt),Ye=new c1(A),We=new p1(A),P=new TT(F),Ht=new r1(F,P),T=new g1(F,P,kt,Ht),it=new S1(F,T,P,kt),wt=new x1(F,Bt,le),Ut=new u1(Nt),gt=new PR(A,Ye,We,Pt,Bt,Ht,Ut),bt=new iC(A,Nt),pt=new BR,Wt=new kR(Pt),te=new s1(A,Ye,We,Ct,it,M,g),Jt=new qR(A,it,Bt),fe=new aC(F,kt,Bt,Ct),Ft=new o1(F,Pt,kt),re=new _1(F,Pt,kt),kt.programs=gt.programs,A.capabilities=Bt,A.extensions=Pt,A.properties=Nt,A.renderLists=pt,A.shadowMap=Jt,A.state=Ct,A.info=kt}X();const Dt=new eC(A,F);this.xr=Dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(k,rt,!1))},this.getSize=function(C){return C.set(k,rt)},this.setSize=function(C,Z,lt=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,rt=Z,i.width=Math.floor(C*W),i.height=Math.floor(Z*W),lt===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(k*W,rt*W).floor()},this.setDrawingBufferSize=function(C,Z,lt){k=C,rt=Z,W=lt,i.width=Math.floor(C*lt),i.height=Math.floor(Z*lt),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(Xt)},this.setViewport=function(C,Z,lt,ut){C.isVector4?Xt.set(C.x,C.y,C.z,C.w):Xt.set(C,Z,lt,ut),Ct.viewport(B.copy(Xt).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,Z,lt,ut){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,Z,lt,ut),Ct.scissor(nt.copy(se).multiplyScalar(W).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){Ct.setScissorTest(he=C)},this.setOpaqueSort=function(C){Mt=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,lt=!0){let ut=0;if(C){let K=!1;if(G!==null){const Rt=G.texture.format;K=Rt===Yp||Rt===jp||Rt===kp}if(K){const Rt=G.texture.type,Gt=Rt===Ra||Rt===Ks||Rt===ml||Rt===gl||Rt===Vp||Rt===Xp,jt=te.getClearColor(),Lt=te.getClearAlpha(),Zt=jt.r,ae=jt.g,ne=jt.b;Gt?(b[0]=Zt,b[1]=ae,b[2]=ne,b[3]=Lt,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=Zt,R[1]=ae,R[2]=ne,R[3]=Lt,F.clearBufferiv(F.COLOR,0,R))}else ut|=F.COLOR_BUFFER_BIT}Z&&(ut|=F.DEPTH_BUFFER_BIT),lt&&(ut|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),te.dispose(),pt.dispose(),Wt.dispose(),Nt.dispose(),Ye.dispose(),We.dispose(),it.dispose(),Ht.dispose(),fe.dispose(),gt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",mn),Dt.removeEventListener("sessionend",Ln),ea.stop()};function Ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const C=kt.autoReset,Z=Jt.enabled,lt=Jt.autoUpdate,ut=Jt.needsUpdate,K=Jt.type;X(),kt.autoReset=C,Jt.enabled=Z,Jt.autoUpdate=lt,Jt.needsUpdate=ut,Jt.type=K}function At(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function St(C){const Z=C.target;Z.removeEventListener("dispose",St),Qt(Z)}function Qt(C){ce(C),Nt.remove(C)}function ce(C){const Z=Nt.get(C).programs;Z!==void 0&&(Z.forEach(function(lt){gt.releaseProgram(lt)}),C.isShaderMaterial&&gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,lt,ut,K,Rt){Z===null&&(Z=Tt);const Gt=K.isMesh&&K.matrixWorld.determinant()<0,jt=Al(C,Z,lt,ut,K);Ct.setMaterial(ut,Gt);let Lt=lt.index,Zt=1;if(ut.wireframe===!0){if(Lt=T.getWireframeAttribute(lt),Lt===void 0)return;Zt=2}const ae=lt.drawRange,ne=lt.attributes.position;let Se=ae.start*Zt,Ie=(ae.start+ae.count)*Zt;Rt!==null&&(Se=Math.max(Se,Rt.start*Zt),Ie=Math.min(Ie,(Rt.start+Rt.count)*Zt)),Lt!==null?(Se=Math.max(Se,0),Ie=Math.min(Ie,Lt.count)):ne!=null&&(Se=Math.max(Se,0),Ie=Math.min(Ie,ne.count));const Je=Ie-Se;if(Je<0||Je===1/0)return;Ht.setup(K,ut,jt,lt,Lt);let Le,we=Ft;if(Lt!==null&&(Le=P.get(Lt),we=re,we.setIndex(Le)),K.isMesh)ut.wireframe===!0?(Ct.setLineWidth(ut.wireframeLinewidth*It()),we.setMode(F.LINES)):we.setMode(F.TRIANGLES);else if(K.isLine){let ie=ut.linewidth;ie===void 0&&(ie=1),Ct.setLineWidth(ie*It()),K.isLineSegments?we.setMode(F.LINES):K.isLineLoop?we.setMode(F.LINE_LOOP):we.setMode(F.LINE_STRIP)}else K.isPoints?we.setMode(F.POINTS):K.isSprite&&we.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)xl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))we.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ie=K._multiDrawStarts,Oe=K._multiDrawCounts,ve=K._multiDrawCount,gn=Lt?P.get(Lt).bytesPerElement:1,ni=Nt.get(ut).currentProgram.getUniforms();for(let De=0;De<ve;De++)ni.setValue(F,"_gl_DrawID",De),we.render(ie[De]/gn,Oe[De])}else if(K.isInstancedMesh)we.renderInstances(Se,Je,K.count);else if(lt.isInstancedBufferGeometry){const ie=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Oe=Math.min(lt.instanceCount,ie);we.renderInstances(Se,Je,Oe)}else we.render(Se,Je)};function Ve(C,Z,lt){C.transparent===!0&&C.side===Ta&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,pi(C,Z,lt),C.side=ds,C.needsUpdate=!0,pi(C,Z,lt),C.side=Ta):pi(C,Z,lt)}this.compile=function(C,Z,lt=null){lt===null&&(lt=C),v=Wt.get(lt),v.init(Z),D.push(v),lt.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),C!==lt&&C.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ut=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let Gt=0;Gt<Rt.length;Gt++){const jt=Rt[Gt];Ve(jt,lt,K),ut.add(jt)}else Ve(Rt,lt,K),ut.add(Rt)}),v=D.pop(),ut},this.compileAsync=function(C,Z,lt=null){const ut=this.compile(C,Z,lt);return new Promise(K=>{function Rt(){if(ut.forEach(function(Gt){Nt.get(Gt).currentProgram.isReady()&&ut.delete(Gt)}),ut.size===0){K(C);return}setTimeout(Rt,10)}Pt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let be=null;function tn(C){be&&be(C)}function mn(){ea.stop()}function Ln(){ea.start()}const ea=new qx;ea.setAnimationLoop(tn),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(C){be=C,Dt.setAnimationLoop(C),C===null?ea.stop():ea.start()},Dt.addEventListener("sessionstart",mn),Dt.addEventListener("sessionend",Ln),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Z),Z=Dt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Z,G),v=Wt.get(C,D.length),v.init(Z),D.push(v),at.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H.setFromProjectionMatrix(at,Ji,Z.reversedDepth),Q=this.localClippingEnabled,dt=Ut.init(this.clippingPlanes,Q),S=pt.get(C,N.length),S.init(),N.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){const Rt=A.xr.getDepthSensingMesh();Rt!==null&&go(Rt,Z,-1/0,A.sortObjects)}go(C,Z,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(Mt,Et),xt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,xt&&te.addToRenderList(S,C),this.info.render.frame++,dt===!0&&Ut.beginShadows();const lt=v.state.shadowsArray;Jt.render(lt,C,Z),dt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=S.opaque,K=S.transmissive;if(v.setupLights(),Z.isArrayCamera){const Rt=Z.cameras;if(K.length>0)for(let Gt=0,jt=Rt.length;Gt<jt;Gt++){const Lt=Rt[Gt];ms(ut,K,C,Lt)}xt&&te.render(C);for(let Gt=0,jt=Rt.length;Gt<jt;Gt++){const Lt=Rt[Gt];bl(S,C,Lt,Lt.viewport)}}else K.length>0&&ms(ut,K,C,Z),xt&&te.render(C),bl(S,C,Z);G!==null&&L===0&&(le.updateMultisampleRenderTarget(G),le.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(A,C,Z),Ht.resetDefaultState(),U=-1,w=null,D.pop(),D.length>0?(v=D[D.length-1],dt===!0&&Ut.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function go(C,Z,lt,ut){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||H.intersectsSprite(C)){ut&&yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(at);const Gt=it.update(C),jt=C.material;jt.visible&&S.push(C,Gt,jt,lt,yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||H.intersectsObject(C))){const Gt=it.update(C),jt=C.material;if(ut&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),yt.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),yt.copy(Gt.boundingSphere.center)),yt.applyMatrix4(C.matrixWorld).applyMatrix4(at)),Array.isArray(jt)){const Lt=Gt.groups;for(let Zt=0,ae=Lt.length;Zt<ae;Zt++){const ne=Lt[Zt],Se=jt[ne.materialIndex];Se&&Se.visible&&S.push(C,Gt,Se,lt,yt.z,ne)}}else jt.visible&&S.push(C,Gt,jt,lt,yt.z,null)}}const Rt=C.children;for(let Gt=0,jt=Rt.length;Gt<jt;Gt++)go(Rt[Gt],Z,lt,ut)}function bl(C,Z,lt,ut){const K=C.opaque,Rt=C.transmissive,Gt=C.transparent;v.setupLightsView(lt),dt===!0&&Ut.setGlobalState(A.clippingPlanes,lt),ut&&Ct.viewport(B.copy(ut)),K.length>0&&na(K,Z,lt),Rt.length>0&&na(Rt,Z,lt),Gt.length>0&&na(Gt,Z,lt),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ms(C,Z,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ut.id]===void 0&&(v.state.transmissionRenderTarget[ut.id]=new Js(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Sl:Ra,minFilter:Zs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Rt=v.state.transmissionRenderTarget[ut.id],Gt=ut.viewport||B;Rt.setSize(Gt.z*A.transmissionResolutionScale,Gt.w*A.transmissionResolutionScale);const jt=A.getRenderTarget(),Lt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(vt),ct=A.getClearAlpha(),ct<1&&A.setClearColor(16777215,.5),A.clear(),xt&&te.render(lt);const ae=A.toneMapping;A.toneMapping=hs;const ne=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),v.setupLightsView(ut),dt===!0&&Ut.setGlobalState(A.clippingPlanes,ut),na(C,lt,ut),le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ie=0,Je=Z.length;Ie<Je;Ie++){const Le=Z[Ie],we=Le.object,ie=Le.geometry,Oe=Le.material,ve=Le.group;if(Oe.side===Ta&&we.layers.test(ut.layers)){const gn=Oe.side;Oe.side=ti,Oe.needsUpdate=!0,gs(we,lt,ut,ie,Oe,ve),Oe.side=gn,Oe.needsUpdate=!0,Se=!0}}Se===!0&&(le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt))}A.setRenderTarget(jt,Lt,Zt),A.setClearColor(vt,ct),ne!==void 0&&(ut.viewport=ne),A.toneMapping=ae}function na(C,Z,lt){const ut=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Rt=C.length;K<Rt;K++){const Gt=C[K],jt=Gt.object,Lt=Gt.geometry,Zt=Gt.group;let ae=Gt.material;ae.allowOverride===!0&&ut!==null&&(ae=ut),jt.layers.test(lt.layers)&&gs(jt,Z,lt,Lt,ae,Zt)}}function gs(C,Z,lt,ut,K,Rt){C.onBeforeRender(A,Z,lt,ut,K,Rt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(A,Z,lt,ut,C,Rt),K.transparent===!0&&K.side===Ta&&K.forceSinglePass===!1?(K.side=ti,K.needsUpdate=!0,A.renderBufferDirect(lt,Z,ut,K,C,Rt),K.side=ds,K.needsUpdate=!0,A.renderBufferDirect(lt,Z,ut,K,C,Rt),K.side=Ta):A.renderBufferDirect(lt,Z,ut,K,C,Rt),C.onAfterRender(A,Z,lt,ut,K,Rt)}function pi(C,Z,lt){Z.isScene!==!0&&(Z=Tt);const ut=Nt.get(C),K=v.state.lights,Rt=v.state.shadowsArray,Gt=K.state.version,jt=gt.getParameters(C,K.state,Rt,Z,lt),Lt=gt.getProgramCacheKey(jt);let Zt=ut.programs;ut.environment=C.isMeshStandardMaterial?Z.environment:null,ut.fog=Z.fog,ut.envMap=(C.isMeshStandardMaterial?We:Ye).get(C.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",St),Zt=new Map,ut.programs=Zt);let ae=Zt.get(Lt);if(ae!==void 0){if(ut.currentProgram===ae&&ut.lightsStateVersion===Gt)return wa(C,jt),ae}else jt.uniforms=gt.getUniforms(C),C.onBeforeCompile(jt,A),ae=gt.acquireProgram(jt,Lt),Zt.set(Lt,ae),ut.uniforms=jt.uniforms;const ne=ut.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=Ut.uniform),wa(C,jt),ut.needsLights=Rl(C),ut.lightsStateVersion=Gt,ut.needsLights&&(ne.ambientLightColor.value=K.state.ambient,ne.lightProbe.value=K.state.probe,ne.directionalLights.value=K.state.directional,ne.directionalLightShadows.value=K.state.directionalShadow,ne.spotLights.value=K.state.spot,ne.spotLightShadows.value=K.state.spotShadow,ne.rectAreaLights.value=K.state.rectArea,ne.ltc_1.value=K.state.rectAreaLTC1,ne.ltc_2.value=K.state.rectAreaLTC2,ne.pointLights.value=K.state.point,ne.pointLightShadows.value=K.state.pointShadow,ne.hemisphereLights.value=K.state.hemi,ne.directionalShadowMap.value=K.state.directionalShadowMap,ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ne.spotShadowMap.value=K.state.spotShadowMap,ne.spotLightMatrix.value=K.state.spotLightMatrix,ne.spotLightMap.value=K.state.spotLightMap,ne.pointShadowMap.value=K.state.pointShadowMap,ne.pointShadowMatrix.value=K.state.pointShadowMatrix),ut.currentProgram=ae,ut.uniformsList=null,ae}function _s(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=bc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function wa(C,Z){const lt=Nt.get(C);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function Al(C,Z,lt,ut,K){Z.isScene!==!0&&(Z=Tt),le.resetTextureUnits();const Rt=Z.fog,Gt=ut.isMeshStandardMaterial?Z.environment:null,jt=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:co,Lt=(ut.isMeshStandardMaterial?We:Ye).get(ut.envMap||Gt),Zt=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ae=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ne=!!lt.morphAttributes.position,Se=!!lt.morphAttributes.normal,Ie=!!lt.morphAttributes.color;let Je=hs;ut.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Je=A.toneMapping);const Le=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,we=Le!==void 0?Le.length:0,ie=Nt.get(ut),Oe=v.state.lights;if(dt===!0&&(Q===!0||C!==w)){const nn=C===w&&ut.id===U;Ut.setState(ut,C,nn)}let ve=!1;ut.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Oe.state.version||ie.outputColorSpace!==jt||K.isBatchedMesh&&ie.batching===!1||!K.isBatchedMesh&&ie.batching===!0||K.isBatchedMesh&&ie.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ie.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ie.instancing===!1||!K.isInstancedMesh&&ie.instancing===!0||K.isSkinnedMesh&&ie.skinning===!1||!K.isSkinnedMesh&&ie.skinning===!0||K.isInstancedMesh&&ie.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ie.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ie.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ie.instancingMorph===!1&&K.morphTexture!==null||ie.envMap!==Lt||ut.fog===!0&&ie.fog!==Rt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Ut.numPlanes||ie.numIntersection!==Ut.numIntersection)||ie.vertexAlphas!==Zt||ie.vertexTangents!==ae||ie.morphTargets!==ne||ie.morphNormals!==Se||ie.morphColors!==Ie||ie.toneMapping!==Je||ie.morphTargetsCount!==we)&&(ve=!0):(ve=!0,ie.__version=ut.version);let gn=ie.currentProgram;ve===!0&&(gn=pi(ut,Z,K));let ni=!1,De=!1,Da=!1;const Ze=gn.getUniforms(),Bn=ie.uniforms;if(Ct.useProgram(gn.program)&&(ni=!0,De=!0,Da=!0),ut.id!==U&&(U=ut.id,De=!0),ni||w!==C){Ct.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ze.setValue(F,"projectionMatrix",C.projectionMatrix),Ze.setValue(F,"viewMatrix",C.matrixWorldInverse);const On=Ze.map.cameraPosition;On!==void 0&&On.setValue(F,ht.setFromMatrixPosition(C.matrixWorld)),Bt.logarithmicDepthBuffer&&Ze.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ze.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,De=!0,Da=!0)}if(K.isSkinnedMesh){Ze.setOptional(F,K,"bindMatrix"),Ze.setOptional(F,K,"bindMatrixInverse");const nn=K.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ze.setValue(F,"boneTexture",nn.boneTexture,le))}K.isBatchedMesh&&(Ze.setOptional(F,K,"batchingTexture"),Ze.setValue(F,"batchingTexture",K._matricesTexture,le),Ze.setOptional(F,K,"batchingIdTexture"),Ze.setValue(F,"batchingIdTexture",K._indirectTexture,le),Ze.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Ze.setValue(F,"batchingColorTexture",K._colorsTexture,le));const un=lt.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&wt.update(K,lt,gn),(De||ie.receiveShadow!==K.receiveShadow)&&(ie.receiveShadow=K.receiveShadow,Ze.setValue(F,"receiveShadow",K.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Bn.envMap.value=Lt,Bn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Z.environment!==null&&(Bn.envMapIntensity.value=Z.environmentIntensity),De&&(Ze.setValue(F,"toneMappingExposure",A.toneMappingExposure),ie.needsLights&&Oc(Bn,Da),Rt&&ut.fog===!0&&bt.refreshFogUniforms(Bn,Rt),bt.refreshMaterialUniforms(Bn,ut,W,rt,v.state.transmissionRenderTarget[C.id]),bc.upload(F,_s(ie),Bn,le)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(bc.upload(F,_s(ie),Bn,le),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ze.setValue(F,"center",K.center),Ze.setValue(F,"modelViewMatrix",K.modelViewMatrix),Ze.setValue(F,"normalMatrix",K.normalMatrix),Ze.setValue(F,"modelMatrix",K.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const nn=ut.uniformsGroups;for(let On=0,tr=nn.length;On<tr;On++){const Bi=nn[On];fe.update(Bi,gn),fe.bind(Bi,gn)}}return gn}function Oc(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Rl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,Z,lt){const ut=Nt.get(C);ut.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Nt.get(C.texture).__webglTexture=Z,Nt.get(C.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const lt=Nt.get(C);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0};const _o=F.createFramebuffer();this.setRenderTarget=function(C,Z=0,lt=0){G=C,O=Z,L=lt;let ut=!0,K=null,Rt=!1,Gt=!1;if(C){const Lt=Nt.get(C);if(Lt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),ut=!1;else if(Lt.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(Lt.__hasExternalTextures)le.rebindTextures(C,Nt.get(C.texture).__webglTexture,Nt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ne=C.depthTexture;if(Lt.__boundDepthTexture!==ne){if(ne!==null&&Nt.has(ne)&&(C.width!==ne.image.width||C.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const Zt=C.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Gt=!0);const ae=Nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ae[Z])?K=ae[Z][lt]:K=ae[Z],Rt=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?K=Nt.get(C).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[lt]:K=ae,B.copy(C.viewport),nt.copy(C.scissor),ft=C.scissorTest}else B.copy(Xt).multiplyScalar(W).floor(),nt.copy(se).multiplyScalar(W).floor(),ft=he;if(lt!==0&&(K=_o),Ct.bindFramebuffer(F.FRAMEBUFFER,K)&&ut&&Ct.drawBuffers(C,K),Ct.viewport(B),Ct.scissor(nt),Ct.setScissorTest(ft),Rt){const Lt=Nt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Lt.__webglTexture,lt)}else if(Gt){const Lt=Z;for(let Zt=0;Zt<C.textures.length;Zt++){const ae=Nt.get(C.textures[Zt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Zt,ae.__webglTexture,lt,Lt)}}else if(C!==null&&lt!==0){const Lt=Nt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,lt)}U=-1},this.readRenderTargetPixels=function(C,Z,lt,ut,K,Rt,Gt,jt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Lt=Lt[Gt]),Lt){Ct.bindFramebuffer(F.FRAMEBUFFER,Lt);try{const Zt=C.textures[jt],ae=Zt.format,ne=Zt.type;if(!Bt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ut&&lt>=0&&lt<=C.height-K&&(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+jt),F.readPixels(Z,lt,ut,K,$t.convert(ae),$t.convert(ne),Rt))}finally{const Zt=G!==null?Nt.get(G).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,lt,ut,K,Rt,Gt,jt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Lt=Lt[Gt]),Lt)if(Z>=0&&Z<=C.width-ut&&lt>=0&&lt<=C.height-K){Ct.bindFramebuffer(F.FRAMEBUFFER,Lt);const Zt=C.textures[jt],ae=Zt.format,ne=Zt.type;if(!Bt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.bufferData(F.PIXEL_PACK_BUFFER,Rt.byteLength,F.STREAM_READ),C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+jt),F.readPixels(Z,lt,ut,K,$t.convert(ae),$t.convert(ne),0);const Ie=G!==null?Nt.get(G).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,Ie);const Je=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zE(F,Je,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Rt),F.deleteBuffer(Se),F.deleteSync(Je),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,lt=0){const ut=Math.pow(2,-lt),K=Math.floor(C.image.width*ut),Rt=Math.floor(C.image.height*ut),Gt=Z!==null?Z.x:0,jt=Z!==null?Z.y:0;le.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,lt,0,0,Gt,jt,K,Rt),Ct.unbindTexture()};const vs=F.createFramebuffer(),Pc=F.createFramebuffer();this.copyTextureToTexture=function(C,Z,lt=null,ut=null,K=0,Rt=null){Rt===null&&(K!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=K,K=0):Rt=0);let Gt,jt,Lt,Zt,ae,ne,Se,Ie,Je;const Le=C.isCompressedTexture?C.mipmaps[Rt]:C.image;if(lt!==null)Gt=lt.max.x-lt.min.x,jt=lt.max.y-lt.min.y,Lt=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,ae=lt.min.y,ne=lt.isBox3?lt.min.z:0;else{const un=Math.pow(2,-K);Gt=Math.floor(Le.width*un),jt=Math.floor(Le.height*un),C.isDataArrayTexture?Lt=Le.depth:C.isData3DTexture?Lt=Math.floor(Le.depth*un):Lt=1,Zt=0,ae=0,ne=0}ut!==null?(Se=ut.x,Ie=ut.y,Je=ut.z):(Se=0,Ie=0,Je=0);const we=$t.convert(Z.format),ie=$t.convert(Z.type);let Oe;Z.isData3DTexture?(le.setTexture3D(Z,0),Oe=F.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(le.setTexture2DArray(Z,0),Oe=F.TEXTURE_2D_ARRAY):(le.setTexture2D(Z,0),Oe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const ve=F.getParameter(F.UNPACK_ROW_LENGTH),gn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ni=F.getParameter(F.UNPACK_SKIP_PIXELS),De=F.getParameter(F.UNPACK_SKIP_ROWS),Da=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ae),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ne);const Ze=C.isDataArrayTexture||C.isData3DTexture,Bn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const un=Nt.get(C),nn=Nt.get(Z),On=Nt.get(un.__renderTarget),tr=Nt.get(nn.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,On.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let Bi=0;Bi<Lt;Bi++)Ze&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(C).__webglTexture,K,ne+Bi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(Z).__webglTexture,Rt,Je+Bi)),F.blitFramebuffer(Zt,ae,Gt,jt,Se,Ie,Gt,jt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Nt.has(C)){const un=Nt.get(C),nn=Nt.get(Z);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,vs),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pc);for(let On=0;On<Lt;On++)Ze?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,K,ne+On):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,K),Bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,Rt,Je+On):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,Rt),K!==0?F.blitFramebuffer(Zt,ae,Gt,jt,Se,Ie,Gt,jt,F.COLOR_BUFFER_BIT,F.NEAREST):Bn?F.copyTexSubImage3D(Oe,Rt,Se,Ie,Je+On,Zt,ae,Gt,jt):F.copyTexSubImage2D(Oe,Rt,Se,Ie,Zt,ae,Gt,jt);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Oe,Rt,Se,Ie,Je,Gt,jt,Lt,we,ie,Le.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,Rt,Se,Ie,Je,Gt,jt,Lt,we,Le.data):F.texSubImage3D(Oe,Rt,Se,Ie,Je,Gt,jt,Lt,we,ie,Le):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Rt,Se,Ie,Gt,jt,we,ie,Le.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Rt,Se,Ie,Le.width,Le.height,we,Le.data):F.texSubImage2D(F.TEXTURE_2D,Rt,Se,Ie,Gt,jt,we,ie,Le);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ni),F.pixelStorei(F.UNPACK_SKIP_ROWS,De),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Da),Rt===0&&Z.generateMipmaps&&F.generateMipmap(Oe),Ct.unbindTexture()},this.initRenderTarget=function(C){Nt.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),Ct.unbindTexture()},this.resetState=function(){O=0,L=0,G=null,Ct.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Sx={type:"change"},$p={type:"start"},Jx={type:"end"},xc=new El,yx=new us,rC=Math.cos(70*OE.DEG2RAD),vn=new $,Qn=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kd=1e-6;class oC extends MT{constructor(e,i=null){super(e,i),this.state=je.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Qs,this._lastTargetPosition=new $,this._quat=new Qs().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new W0,this._sphericalDelta=new W0,this._scale=1,this._panOffset=new $,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new $,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uC.bind(this),this._onPointerDown=lC.bind(this),this._onPointerUp=cC.bind(this),this._onContextMenu=_C.bind(this),this._onMouseWheel=dC.bind(this),this._onKeyDown=pC.bind(this),this._onTouchStart=mC.bind(this),this._onTouchMove=gC.bind(this),this._onMouseDown=fC.bind(this),this._onMouseMove=hC.bind(this),this._interceptControlDown=vC.bind(this),this._interceptControlUp=xC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sx),this.update(),this.state=je.NONE}update(e=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,u=this.maxAzimuthAngle;isFinite(r)&&isFinite(u)&&(r<-Math.PI?r+=Qn:r>Math.PI&&(r-=Qn),u<-Math.PI?u+=Qn:u>Math.PI&&(u-=Qn),r<=u?this._spherical.theta=Math.max(r,Math.min(u,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+u)/2?Math.max(r,this._spherical.theta):Math.min(u,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const g=d-h;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),f=!!g}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=g!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(xc.origin.copy(this.object.position),xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xc.direction))<rC?this.object.lookAt(this.target):(yx.setFromNormalAndCoplanarPoint(this.object.up,this.target),xc.intersectPlane(yx,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kd||this._lastTargetPosition.distanceToSquared(this.target)>kd?(this.dispatchEvent(Sx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-e),this._panOffset.add(vn)}_panUp(e,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(e),this._panOffset.add(vn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const u=this.object.position;vn.copy(u).sub(this.target);let f=vn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),u=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=u/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._rotateStart.set(r,u)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panStart.set(r,u)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),u=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(u,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panEnd.set(r,u)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new _e,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function lC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function uC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function cC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jx),this.state=je.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function fC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=je.DOLLY;break;case ao.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}break;case ao.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent($p)}function hC(o){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function dC(o){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(o.preventDefault(),this.dispatchEvent($p),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Jx))}function pC(o){this.enabled!==!1&&this._handleKeyDown(o)}function mC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=je.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=je.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent($p)}function gC(o){switch(this._trackPointer(o),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=je.NONE}}function _C(o){this.enabled!==!1&&o.preventDefault()}function vC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jn=new ze;class SC extends Qp{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,i,r,u){const f=this,h=new vT(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{i(f.parse(d))}catch(g){u?u(g):console.error(g),f.manager.itemError(e)}},r,u)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function i(S,v=0){const N=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let D="";const A=N.exec(S);A!==null&&(D=A[1]);const z={comments:[],elements:[],headerLength:v,objInfo:""},O=D.split(/\r\n|\r|\n/);let L;function G(U,w){const B={type:U[0]};return B.type==="list"?(B.name=U[3],B.countType=U[1],B.itemType=U[2]):B.name=U[1],B.name in w&&(B.name=w[B.name]),B}for(let U=0;U<O.length;U++){let w=O[U];if(w=w.trim(),w==="")continue;const B=w.split(/\s+/),nt=B.shift();switch(w=B.join(" "),nt){case"format":z.format=B[0],z.version=B[1];break;case"comment":z.comments.push(w);break;case"element":L!==void 0&&z.elements.push(L),L={},L.name=B[0],L.count=parseInt(B[1]),L.properties=[];break;case"property":L.properties.push(G(B,R.propertyNameMapping));break;case"obj_info":z.objInfo=w;break;default:console.log("unhandled",nt,B)}}return L!==void 0&&z.elements.push(L),z}function r(S,v){switch(v){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(S);case"float":case"double":case"float32":case"float64":return parseFloat(S)}}function u(S,v){const N={};for(let D=0;D<S.length;D++){if(v.empty())return null;if(S[D].type==="list"){const A=[],z=r(v.next(),S[D].countType);for(let O=0;O<z;O++){if(v.empty())return null;A.push(r(v.next(),S[D].itemType))}N[S[D].name]=A}else N[S[D].name]=r(v.next(),S[D].type)}return N}function f(){const S={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const v of Object.keys(R.customPropertyMapping))S[v]=[];return S}function h(S){const v=S.map(D=>D.name);function N(D){for(let A=0,z=D.length;A<z;A++){const O=D[A];if(v.includes(O))return O}return null}return{attrX:N(["x","px","posx"])||"x",attrY:N(["y","py","posy"])||"y",attrZ:N(["z","pz","posz"])||"z",attrNX:N(["nx","normalx"]),attrNY:N(["ny","normaly"]),attrNZ:N(["nz","normalz"]),attrS:N(["s","u","texture_u","tx"]),attrT:N(["t","v","texture_v","ty"]),attrR:N(["red","diffuse_red","r","diffuse_r"]),attrG:N(["green","diffuse_green","g","diffuse_g"]),attrB:N(["blue","diffuse_blue","b","diffuse_b"])}}function d(S,v){const N=f(),D=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let A,z;(z=D.exec(S))!==null?A=z[1].split(/\s+/):A=[];const O=new yC(A);t:for(let L=0;L<v.elements.length;L++){const G=v.elements[L],U=h(G.properties);for(let w=0;w<G.count;w++){const B=u(G.properties,O);if(!B)break t;p(N,G.name,B,U)}}return g(N)}function g(S){let v=new di;S.indices.length>0&&v.setIndex(S.indices),v.setAttribute("position",new xn(S.vertices,3)),S.normals.length>0&&v.setAttribute("normal",new xn(S.normals,3)),S.uvs.length>0&&v.setAttribute("uv",new xn(S.uvs,2)),S.colors.length>0&&v.setAttribute("color",new xn(S.colors,3)),(S.faceVertexUvs.length>0||S.faceVertexColors.length>0)&&(v=v.toNonIndexed(),S.faceVertexUvs.length>0&&v.setAttribute("uv",new xn(S.faceVertexUvs,2)),S.faceVertexColors.length>0&&v.setAttribute("color",new xn(S.faceVertexColors,3)));for(const N of Object.keys(R.customPropertyMapping))S[N].length>0&&v.setAttribute(N,new xn(S[N],R.customPropertyMapping[N].length));return v.computeBoundingSphere(),v}function p(S,v,N,D){if(v==="vertex"){S.vertices.push(N[D.attrX],N[D.attrY],N[D.attrZ]),D.attrNX!==null&&D.attrNY!==null&&D.attrNZ!==null&&S.normals.push(N[D.attrNX],N[D.attrNY],N[D.attrNZ]),D.attrS!==null&&D.attrT!==null&&S.uvs.push(N[D.attrS],N[D.attrT]),D.attrR!==null&&D.attrG!==null&&D.attrB!==null&&(Jn.setRGB(N[D.attrR]/255,N[D.attrG]/255,N[D.attrB]/255,$n),S.colors.push(Jn.r,Jn.g,Jn.b));for(const A of Object.keys(R.customPropertyMapping))for(const z of R.customPropertyMapping[A])S[A].push(N[z])}else if(v==="face"){const A=N.vertex_indices||N.vertex_index,z=N.texcoord;A.length===3?(S.indices.push(A[0],A[1],A[2]),z&&z.length===6&&(S.faceVertexUvs.push(z[0],z[1]),S.faceVertexUvs.push(z[2],z[3]),S.faceVertexUvs.push(z[4],z[5]))):A.length===4&&(S.indices.push(A[0],A[1],A[3]),S.indices.push(A[1],A[2],A[3])),D.attrR!==null&&D.attrG!==null&&D.attrB!==null&&(Jn.setRGB(N[D.attrR]/255,N[D.attrG]/255,N[D.attrB]/255,$n),S.faceVertexColors.push(Jn.r,Jn.g,Jn.b),S.faceVertexColors.push(Jn.r,Jn.g,Jn.b),S.faceVertexColors.push(Jn.r,Jn.g,Jn.b))}}function x(S,v){const N={};let D=0;for(let A=0;A<v.length;A++){const z=v[A],O=z.valueReader;if(z.type==="list"){const L=[],G=z.countReader.read(S+D);D+=z.countReader.size;for(let U=0;U<G;U++)L.push(O.read(S+D)),D+=O.size;N[z.name]=L}else N[z.name]=O.read(S+D),D+=O.size}return[N,D]}function m(S,v,N){function D(A,z,O){switch(z){case"int8":case"char":return{read:L=>A.getInt8(L),size:1};case"uint8":case"uchar":return{read:L=>A.getUint8(L),size:1};case"int16":case"short":return{read:L=>A.getInt16(L,O),size:2};case"uint16":case"ushort":return{read:L=>A.getUint16(L,O),size:2};case"int32":case"int":return{read:L=>A.getInt32(L,O),size:4};case"uint32":case"uint":return{read:L=>A.getUint32(L,O),size:4};case"float32":case"float":return{read:L=>A.getFloat32(L,O),size:4};case"float64":case"double":return{read:L=>A.getFloat64(L,O),size:8}}}for(let A=0,z=S.length;A<z;A++){const O=S[A];O.type==="list"?(O.countReader=D(v,O.countType,N),O.valueReader=D(v,O.itemType,N)):O.valueReader=D(v,O.type,N)}}function y(S,v){const N=f(),D=v.format==="binary_little_endian",A=new DataView(S,v.headerLength);let z,O=0;for(let L=0;L<v.elements.length;L++){const G=v.elements[L],U=G.properties,w=h(U);m(U,A,D);for(let B=0;B<G.count;B++){z=x(O,U),O+=z[1];const nt=z[0];p(N,G.name,nt,w)}}return g(N)}function M(S){let v=0,N=!0,D="";const A=[],z=new TextDecoder().decode(S.subarray(0,5)),O=/^ply\r\n/.test(z);do{const L=String.fromCharCode(S[v++]);L!==`
`&&L!=="\r"?D+=L:(D==="end_header"&&(N=!1),D!==""&&(A.push(D),D=""))}while(N&&v<S.length);return O===!0&&v++,{headerText:A.join("\r")+"\r",headerLength:v}}let b;const R=this;if(e instanceof ArrayBuffer){const S=new Uint8Array(e),{headerText:v,headerLength:N}=M(S),D=i(v,N);if(D.format==="ascii"){const A=new TextDecoder().decode(S);b=d(A,D)}else b=y(e,D)}else b=d(e,i(e));return b}}class yC{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}function MC({url:o,previewUrl:e,cameraUrl:i}){const r=ye.useRef(null),u=ye.useRef(()=>{}),f=ye.useRef(null),h=ye.useRef(null),d=ye.useRef(!1),g=ye.useRef(()=>{}),[p,x]=ye.useState("Loading point cloud…"),[m,y]=ye.useState(2),[M,b]=ye.useState(!1),[R,S]=ye.useState(!1),[v,N]=ye.useState(null);return ye.useEffect(()=>{d.current=R},[R]),ye.useEffect(()=>{f.current&&(f.current.size=m)},[m]),ye.useEffect(()=>{h.current&&(h.current.visible=M)},[M]),ye.useEffect(()=>{if(!r.current)return;const D=r.current;let A=!1,z=0;N(null),x("Loading point cloud…");let O;try{O=new sC({antialias:!0})}catch{x("WebGL could not start. Download the PLY to view it in a desktop app.");return}O.setPixelRatio(Math.min(devicePixelRatio,2)),O.setClearColor("#151b24"),D.appendChild(O.domElement);const L=new oT,G=new bi(48,1,.001,1e3);G.up.set(0,-1,0);const U=new oC(G,O.domElement);U.enableDamping=!0;let w=null,B=1,nt=null;const ft=new no;L.add(ft);const vt=new no;L.add(vt),h.current=vt,vt.visible=M;const ct=[],k=[],rt=[];function W(){ct.length=0;for(const ht of[...ft.children]){const yt=ht;yt.geometry?.dispose(),yt.material?.dispose(),ft.remove(ht)}N(null)}g.current=W;function Mt(){if(!w)return;const ht=new ho().setFromObject(w),yt=ht.getCenter(new $);if(B=Math.max(ht.getSize(new $).length()/2,.01),U.target.copy(yt),nt){const xt=new $(...nt.center_m).clone().sub(yt).normalize();G.position.copy(yt).addScaledVector(xt,B*2.7),G.up.set(-nt.Rcw[1][0],-nt.Rcw[1][1],-nt.Rcw[1][2])}else G.position.copy(yt).add(new $(0,0,-B*2.7));G.near=B/1e3,G.far=B*100,G.updateProjectionMatrix(),U.update()}u.current=Mt;async function Et(ht,yt){const Tt=await fetch(ht);if(!Tt.ok)throw new Error("Could not read the point cloud file");const xt=await Tt.arrayBuffer();if(A)return;const It=new SC().parse(xt);It.computeBoundingSphere(),w&&(L.remove(w),w.geometry.dispose(),w.material.dispose());const F=new kx({size:m,vertexColors:It.hasAttribute("color"),sizeAttenuation:!1});f.current=F,w=new hT(It,F),L.add(w),Mt(),x(`${It.getAttribute("position").count.toLocaleString()} points · ${yt?"Full model":"Quick preview"}`)}(async()=>{try{e!==o&&await Et(e,!1),await Et(o,!0);const ht=await fetch(i);if(!ht.ok)return;const yt=await ht.json();if(A)return;nt=[...yt].sort((Tt,xt)=>Number(Tt.photo)-Number(xt.photo))[0]||null,Mt();for(const Tt of yt){const xt=new $(...Tt.center_m),It=new Pp({color:7252223});rt.push(It);const F=B*.035,ot=[[-1,-.7,1],[1,-.7,1],[1,.7,1],[-1,.7,1]].map(Ct=>{const kt=new $(...Ct).multiplyScalar(F),Nt=Tt.Rcw;return new $(Nt[0][0]*kt.x+Nt[1][0]*kt.y+Nt[2][0]*kt.z,Nt[0][1]*kt.x+Nt[1][1]*kt.y+Nt[2][1]*kt.z,Nt[0][2]*kt.x+Nt[1][2]*kt.y+Nt[2][2]*kt.z).add(xt)}),Pt=[];ot.forEach((Ct,kt)=>Pt.push(xt,Ct,Ct,ot[(kt+1)%4]));const Bt=new di().setFromPoints(Pt);k.push(Bt),vt.add(new fT(Bt,It))}}catch(ht){A||x(String(ht))}})();const Xt=new yT,se=new _e;let he=[0,0];const H=ht=>{he=[ht.clientX,ht.clientY]},dt=ht=>{if(!d.current||!w||Math.hypot(ht.clientX-he[0],ht.clientY-he[1])>5)return;const yt=O.domElement.getBoundingClientRect();se.set((ht.clientX-yt.left)/yt.width*2-1,-(ht.clientY-yt.top)/yt.height*2+1),Xt.params.Points.threshold=B*.004,Xt.setFromCamera(se,G);const Tt=Xt.intersectObject(w)[0];if(Tt?.index===void 0)return;ct.length===2&&W();const xt=w.geometry.getAttribute("position"),It=new $().fromBufferAttribute(xt,Tt.index);ct.push(It);const F=new $i(new Kp(B*.006,12,8),new Zp({color:16762967}));F.position.copy(It),ft.add(F),ct.length===2&&(ft.add(new Xx(new di().setFromPoints(ct),new Pp({color:16762967}))),N(ct[0].distanceTo(ct[1])))};O.domElement.addEventListener("pointerdown",H),O.domElement.addEventListener("pointerup",dt);const Q=new ResizeObserver(()=>{const ht=D.clientWidth,yt=D.clientHeight;O.setSize(ht,yt),G.aspect=ht/yt,G.updateProjectionMatrix()});Q.observe(D);function at(){z=requestAnimationFrame(at),U.update(),O.render(L,G)}return at(),()=>{A=!0,cancelAnimationFrame(z),Q.disconnect(),O.domElement.removeEventListener("pointerdown",H),O.domElement.removeEventListener("pointerup",dt),U.dispose(),W(),w&&(w.geometry.dispose(),w.material.dispose()),k.forEach(ht=>ht.dispose()),rt.forEach(ht=>ht.dispose()),O.dispose(),O.domElement.remove(),f.current=null,h.current=null}},[o,e,i]),tt.jsxs("div",{className:"viewer",children:[tt.jsx("div",{className:"canvas",ref:r,"aria-label":"3D point cloud: drag to orbit, right-drag to pan, scroll to zoom"}),tt.jsxs("div",{className:"canvas-top",children:[tt.jsx("span",{className:"live-dot"}),p,tt.jsx("span",{className:"unit",children:"Meters · LiDAR scale"})]}),tt.jsxs("div",{className:"viewer-tools",children:[tt.jsx("button",{onClick:()=>u.current(),children:"Fit view"}),tt.jsx("button",{"aria-pressed":M,onClick:()=>b(!M),children:"Cameras"}),tt.jsx("button",{"aria-pressed":R,onClick:()=>{S(!R),g.current()},children:"Measure distance"}),tt.jsxs("label",{children:["Point size"," ",tt.jsx("input",{"aria-label":"Point size",type:"range",min:"1",max:"5",step:".5",value:m,onChange:D=>y(+D.target.value)})]})]}),tt.jsxs("div",{className:"canvas-bottom",children:[R?v!==null?`Distance: ${(v*100).toFixed(1)} cm · Select a new point to measure again`:"Select two points on the visible cloud":"Drag to orbit · Right-drag to pan · Scroll to zoom",tt.jsx("span",{children:"Axes are not aligned to ground or north"})]})]})}const jd={uploading:"Awaiting upload",queued:"Queued",validating:"Validating captures",preprocessing:"Processing depth",sfm:"Camera reconstruction",depth_fusion:"Scaling and fusing depth",exporting:"Exporting and checking",complete:"Processing complete",running:"Reconstructing",succeeded:"Complete",partial:"Partially complete",failed:"Failed",cancelled:"Cancelled",cancelling:"Cancelling",interrupted:"Interrupted",stopped:"Job stopped"},to=["succeeded","partial","failed","cancelled","interrupted"];async function Nn(o,e={}){const i=await fetch("/api"+o,{...e,headers:{"x-workbench":"1",...e.body instanceof FormData?{}:{"Content-Type":"application/json"},...e.headers}});if(!i.ok){const r=await i.json();throw new Error(Yd(typeof r.detail=="string"?r.detail:JSON.stringify(r.detail)))}return i.json()}function EC(){const[o,e]=ye.useState([]),[i,r]=ye.useState(""),[u,f]=ye.useState(""),[h,d]=ye.useState([]),[g,p]=ye.useState(null),[x,m]=ye.useState([]),[y,M]=ye.useState(!1),[b,R]=ye.useState([]),[S,v]=ye.useState(""),[N,D]=ye.useState(!1),[A,z]=ye.useState(!1),[O,L]=ye.useState(!1),[G,U]=ye.useState(""),[w,B]=ye.useState(""),[nt,ft]=ye.useState(0),[vt,ct]=ye.useState("fused"),[k,rt]=ye.useState("rgb"),[W,Mt]=ye.useState("1"),Et=ye.useRef(null),Xt=ye.useRef(null);async function se(){const ot=await Nn("/projects");e(ot),ot.length&&!i&&r(ot[0].id)}ye.useEffect(()=>{se().catch(ot=>B(ot.message))},[]),ye.useEffect(()=>{if(!i)return;let ot=!0;return Nn(`/projects/${i}/jobs`).then(Pt=>{ot&&(d(Pt),f(Pt[0]?.id||""),ft(0))}).catch(Pt=>B(Pt.message)),()=>{ot=!1}},[i]),ye.useEffect(()=>{if(!u){p(null),m([]);return}let ot=!0;const Pt=async()=>{try{const Ct=await Nn(`/jobs/${u}`);if(!ot)return;p(Ct);const kt=await Nn(`/jobs/${u}/photos`);ot&&m(kt)}catch(Ct){ot&&B(String(Ct))}};Pt();const Bt=setInterval(Pt,2e3);return()=>{ot=!1,clearInterval(Bt)}},[u]);function he(ot){if(!ot)return;const Pt=Array.from(ot).filter(Bt=>!Bt.name.startsWith(".")&&!Bt.webkitRelativePath.includes("/."));R(Pt),v(Pt[0]?.webkitRelativePath.split("/")[0]||Pt[0]?.name.replace(/\.zip$/i,"")||"New project"),M(!0),B("")}async function H(){if(!b.length||!S.trim())return;z(!0),B("");let ot="";try{const Pt=await Nn("/projects",{method:"POST",body:JSON.stringify({name:S})}),Bt=await Nn(`/projects/${Pt.id}/uploads`,{method:"POST",body:JSON.stringify({small:N})});ot=Bt.id,r(Pt.id),f(Bt.id);for(let Ct=0;Ct<b.length;Ct++){const kt=b[Ct];U(`Uploading ${Ct+1} / ${b.length} · ${kt.name}`);const Nt=new FormData;Nt.append("file",kt),b.length===1&&kt.name.toLowerCase().endsWith(".zip")?await Nn(`/uploads/${ot}/zip`,{method:"POST",body:Nt}):(Nt.append("path",kt.webkitRelativePath||kt.name),await Nn(`/uploads/${ot}/file`,{method:"PUT",body:Nt}))}await Nn(`/uploads/${ot}/complete`,{method:"POST"}),M(!1),R([]),await se(),f(ot),d(await Nn(`/projects/${Pt.id}/jobs`))}catch(Pt){B(String(Pt)),ot&&await Nn(`/jobs/${ot}/cancel`,{method:"POST"}).catch(()=>{})}finally{z(!1),U("")}}async function dt(){try{await Nn(`/jobs/${u}/cancel`,{method:"POST"}),p(await Nn(`/jobs/${u}`))}catch(ot){B(String(ot))}}async function Q(){try{const ot=await Nn(`/jobs/${u}/retry`,{method:"POST"});f(ot.id),d(await Nn(`/projects/${i}/jobs`))}catch(ot){B(String(ot))}}async function at(){const ot=o.find(Bt=>Bt.id===i);if(!(!ot||O||!window.confirm(`Delete "${ot.name}"? This permanently deletes this project, all reconstruction versions, uploaded captures, and result files. This cannot be undone.`))){L(!0),B("");try{await Nn(`/projects/${i}`,{method:"DELETE"}),f(""),p(null),d([]),m([]),ft(0);const Bt=await Nn("/projects");e(Bt),r(Bt[0]?.id||""),M(!Bt.length)}catch(Bt){B(String(Bt))}finally{L(!1)}}}const ht=g?.models?.find(ot=>ot.model_id===nt)||g?.models?.[0],yt=ot=>`/api/jobs/${u}/artifacts/${ot}`,Tt=o.find(ot=>ot.id===i),xt=y||!o.length,It=x.find(ot=>ot.photo===W)||x[0],F=["validating","preprocessing","sfm","depth_fusion","exporting"];return tt.jsxs("div",{className:"app",children:[tt.jsxs("aside",{className:"sidebar",children:[tt.jsxs("div",{className:"brand",children:[tt.jsx("div",{className:"brand-mark",children:"◈"}),tt.jsxs("div",{children:["RGB-D",tt.jsx("span",{children:"Point Cloud Workbench"})]})]}),tt.jsx("button",{className:"primary new",onClick:()=>{M(!0),R([]),B("")},children:"＋ New model"}),tt.jsxs("div",{className:"section-label",children:["Projects ",tt.jsx("span",{children:o.length})]}),tt.jsx("nav",{children:o.map(ot=>tt.jsxs("button",{className:i===ot.id&&!xt?"project selected":"project","aria-label":ot.name,onClick:()=>{r(ot.id),M(!1),B("")},children:[tt.jsx("span",{children:"▧"}),tt.jsxs("div",{children:[ot.name,tt.jsx("small",{children:"RGB + LiDAR"})]})]},ot.id))}),tt.jsxs("div",{className:"local",children:[tt.jsx("span",{className:"green-dot"}),"Local processing",tt.jsx("div",{children:"Photos and models stay on this computer"})]})]}),tt.jsxs("main",{children:[tt.jsxs("header",{children:[tt.jsxs("div",{className:"breadcrumb",children:["Workspace ",tt.jsx("span",{children:"/"})," ",xt?"New model":Tt?.name||"Model"]}),tt.jsxs("select",{className:"project-mobile","aria-label":"Select project",value:xt?"":i,onChange:ot=>{ot.target.value?(r(ot.target.value),M(!1)):M(!0)},children:[tt.jsx("option",{value:"",children:"New model"}),o.map(ot=>tt.jsx("option",{value:ot.id,children:ot.name},ot.id))]})]}),w&&tt.jsxs("div",{role:"alert",className:"error",children:[tt.jsx("span",{children:w}),tt.jsx("button",{onClick:()=>B(""),children:"Close"})]}),xt?tt.jsxs("section",{className:"upload-page",children:[tt.jsx("div",{className:"eyebrow",children:"FROM CAPTURES TO 3D"}),tt.jsx("h1",{children:"Build your next model"}),tt.jsx("p",{className:"intro",children:"Upload a complete RGB-D capture batch to reconstruct cameras, fuse depth, and generate a point cloud."}),tt.jsx("div",{className:"upload-layout",children:tt.jsxs("div",{children:[tt.jsxs("div",{className:"drop-zone",onDragOver:ot=>ot.preventDefault(),onDrop:ot=>{ot.preventDefault(),ot.dataTransfer.files.length===1&&ot.dataTransfer.files[0].name.endsWith(".zip")?he(ot.dataTransfer.files):B("Use Choose capture folder for folders, or drag and drop a ZIP file.")},children:[tt.jsx("div",{className:"upload-symbol",children:"↥"}),tt.jsx("h2",{children:b.length?`${b.length} files selected`:"Choose a complete capture folder"}),tt.jsx("p",{children:"Each capture must include an image, intrinsics, depth, and confidence files"}),tt.jsxs("div",{className:"button-row",children:[tt.jsx("button",{disabled:A,className:"primary",onClick:()=>Et.current?.click(),children:"Choose capture folder"}),tt.jsx("button",{disabled:A,onClick:()=>Xt.current?.click(),children:"Upload ZIP"})]}),tt.jsx("small",{children:"Captures4 export format · Up to 2 GB per batch"}),tt.jsx("input",{hidden:!0,ref:Et,type:"file",multiple:!0,webkitdirectory:"",onChange:ot=>he(ot.target.files)}),tt.jsx("input",{hidden:!0,ref:Xt,type:"file",accept:".zip",onChange:ot=>he(ot.target.files)})]}),b.length>0&&tt.jsxs("div",{className:"selected-files",children:[tt.jsxs("label",{children:["Project name",tt.jsx("input",{value:S,onChange:ot=>v(ot.target.value),maxLength:100})]}),tt.jsxs("div",{className:"file-summary",children:[tt.jsxs("span",{children:[(b.reduce((ot,Pt)=>ot+Pt.size,0)/1048576).toFixed(1)," ","MB"]}),tt.jsx("span",{children:b.filter(ot=>ot.name==="image.jpg").length?`${b.filter(ot=>ot.name==="image.jpg").length} captures`:"Captures in ZIP"})]}),tt.jsxs("details",{children:[tt.jsx("summary",{children:"Review selected files"}),tt.jsx("ul",{children:b.slice(0,100).map((ot,Pt)=>tt.jsxs("li",{children:[ot.webkitRelativePath||ot.name,tt.jsxs("span",{children:[(ot.size/1024).toFixed(0)," KB"]})]},Pt))})]}),tt.jsxs("label",{className:"small-check",children:[tt.jsx("input",{type:"checkbox",checked:N,onChange:ot=>D(ot.target.checked)}),"Allow small-batch diagnostics (3–9 captures)"]}),tt.jsx("button",{disabled:A||!S.trim(),className:"primary start",onClick:H,children:A?"Uploading…":"Upload and reconstruct →"}),tt.jsx("p",{"aria-live":"polite",children:G})]}),tt.jsxs("div",{className:"flow",children:[tt.jsx("span",{children:"01 Validate captures"}),tt.jsx("b",{children:"→"}),tt.jsx("span",{children:"02 Camera reconstruction"}),tt.jsx("b",{children:"→"}),tt.jsx("span",{children:"03 Depth fusion"}),tt.jsx("b",{children:"→"}),tt.jsx("span",{children:"04 Explore in 3D"})]})]})})]}):tt.jsxs(tt.Fragment,{children:[tt.jsxs("div",{className:"title-row",children:[tt.jsxs("div",{children:[tt.jsx("div",{className:"eyebrow",children:"RGB-D RECONSTRUCTION"}),tt.jsxs("h1",{children:[Tt?.name,tt.jsx("span",{className:`badge ${g?.status}`,children:jd[g?.status||""]||"Awaiting upload"})]})]}),tt.jsxs("div",{className:"button-row",children:[tt.jsx("button",{className:"danger",onClick:at,disabled:O||h.some(ot=>ot.id!==u&&!to.includes(ot.status))||!!(g&&!to.includes(g.status)),children:O?"Deleting…":"Delete model"}),tt.jsx("select",{"aria-label":"Result version",value:u,onChange:ot=>f(ot.target.value),children:h.map((ot,Pt)=>tt.jsxs("option",{value:ot.id,children:["Version ",h.length-Pt," ·"," ",new Date(ot.created*1e3).toLocaleString("en-CA")]},ot.id))}),g&&to.includes(g.status)&&tt.jsx("button",{onClick:Q,children:"Reconstruct again"}),ht&&tt.jsx("a",{className:"button primary",href:yt(`model-${ht.model_id}/${vt}.ply`),children:"↓ Export PLY"})]})]}),g?.error&&tt.jsx("div",{className:"warning",children:Yd(g.error)}),ht?tt.jsxs("div",{className:"workspace",children:[tt.jsxs("aside",{className:"photos",children:[tt.jsxs("div",{className:"panel-heading",children:["Capture views ",tt.jsx("span",{children:x.length})]}),tt.jsx("div",{className:"photo-list",children:x.map(ot=>tt.jsxs("button",{className:It?.photo===ot.photo?"photo active":"photo",onClick:()=>Mt(ot.photo),children:[tt.jsx("img",{src:yt(`depth/${ot.photo.padStart(2,"0")}-rgb.jpg`),alt:`Photo ${ot.photo}`}),tt.jsxs("span",{children:[ot.photo.padStart(2,"0"),tt.jsx("small",{children:ot.registered?"Registered":"Unregistered"})]})]},ot.photo))}),tt.jsx("div",{className:"tabs",children:["rgb","depth","confidence"].map(ot=>tt.jsx("button",{"aria-pressed":k===ot,onClick:()=>rt(ot),children:{rgb:"RGB",depth:"Depth",confidence:"Confidence"}[ot]},ot))}),It&&tt.jsxs(tt.Fragment,{children:[tt.jsx("img",{className:"image-detail",src:yt(`depth/${It.photo.padStart(2,"0")}-${k}.${k==="rgb"?"jpg":"png"}`),alt:"Selected capture preview"}),tt.jsx("p",{className:"photo-note",children:k==="confidence"?"Red: low · Yellow: medium · Green: high":k==="depth"?"Depth scale: blue is near, red is far":"Native capture orientation"})]})]}),tt.jsx(MC,{url:yt(`model-${ht.model_id}/${vt}.ply`),previewUrl:yt(`model-${ht.model_id}/preview.ply`),cameraUrl:yt(`model-${ht.model_id}/cameras-meters.json`)}),tt.jsxs("aside",{className:"inspector",children:[tt.jsx("div",{className:"panel-heading",children:"Model overview"}),tt.jsxs("div",{className:"stat",children:[tt.jsx("span",{children:"Point count"}),tt.jsx("strong",{children:(vt==="fused"?ht.fused_points:ht.multiview_supported_fused_points).toLocaleString()}),tt.jsx("small",{children:"Colored points from measured depth"})]}),tt.jsxs("div",{className:"stat-row",children:[tt.jsxs("div",{children:[tt.jsx("span",{children:"Registered cameras"}),tt.jsxs("b",{children:[ht.registered,tt.jsxs("small",{children:[" / ",ht.total]})]})]}),tt.jsxs("div",{children:[tt.jsx("span",{children:"Model units"}),tt.jsxs("b",{children:["Meters ",tt.jsx("small",{children:"m"})]})]})]}),tt.jsx("hr",{}),tt.jsxs("label",{children:["Separate model",tt.jsx("select",{value:ht.model_id,onChange:ot=>ft(+ot.target.value),children:g?.models.map(ot=>tt.jsxs("option",{value:ot.model_id,children:["Model ",ot.model_id+1," · ",ot.registered," captures"]},ot.model_id))})]}),tt.jsxs("label",{children:["Point cloud variant",tt.jsxs("select",{value:vt,onChange:ot=>ct(ot.target.value),children:[tt.jsx("option",{value:"fused",children:"Main point cloud"}),tt.jsx("option",{value:"multiview-supported",children:"Cross-view supported cloud"})]})]}),tt.jsx("hr",{}),tt.jsx("div",{className:"section-label",children:"Quality and scale"}),tt.jsxs("dl",{children:[tt.jsx("dt",{children:"Depth confidence"}),tt.jsx("dd",{children:"Medium + high"}),tt.jsx("dt",{children:"Fusion spacing"}),tt.jsx("dd",{children:"5 mm"}),tt.jsx("dt",{children:"Relative scale spread"}),tt.jsxs("dd",{children:[(ht.scale_robust_relative_std*100).toFixed(2),"%"]})]}),tt.jsx("p",{className:"note",children:"Metric scale comes from LiDAR. Edges may be noisy; accuracy has not been independently verified against physical measurements."}),tt.jsx("a",{className:"text-link",href:`/api/jobs/${u}/download`,children:"Download full result archive ↓"}),tt.jsx("a",{className:"text-link",href:yt("result.json"),target:"_blank",children:"View full report ↗"}),tt.jsx("a",{className:"text-link",href:yt(`model-${ht.model_id}/cameras-meters.json`),target:"_blank",children:"Camera poses ↗"})]})]}):tt.jsxs("section",{className:"progress-page",children:[tt.jsx("div",{className:"process-illustration",children:"◈"}),tt.jsx("h2",{children:jd[g?.stage||""]||"Preparing reconstruction"}),tt.jsx("p",{children:g&&to.includes(g.status)?"This job has ended. Review the report and retry to save a new result version.":"Reconstruction runs in the background. Closing or refreshing this page will not stop the job."}),tt.jsx("ol",{className:"steps",children:F.map((ot,Pt)=>tt.jsxs("li",{className:g?.stage===ot?"current":F.indexOf(g?.stage||"")>Pt?"done":"",children:[tt.jsx("span",{children:F.indexOf(g?.stage||"")>Pt?"✓":Pt+1}),jd[ot]]},ot))}),g&&!to.includes(g.status)&&tt.jsx("button",{onClick:dt,disabled:g.status==="cancelling",children:"Cancel job"}),tt.jsx("p",{className:"note",children:g?`Started at ${new Date(g.created*1e3).toLocaleTimeString("en-CA")} · ${Math.max(0,Math.round((to.includes(g.status)?g.updated:Date.now()/1e3)-g.created))} s`:""})]}),g&&tt.jsxs("details",{className:"logs",children:[tt.jsxs("summary",{children:["Logs and diagnostics ",tt.jsx("span",{children:g.id.slice(0,8)})]}),tt.jsx("pre",{children:Yd(g.log||"Waiting for processing…")}),tt.jsx("a",{href:yt("execution.log"),target:"_blank",children:"Open full log"})]})]}),tt.jsxs("footer",{children:[tt.jsx("span",{children:"◈ RGB-D WORKBENCH"}),tt.jsx("span",{children:"Data stays local · Each reconstruction is saved separately"})]})]})]})}kM.createRoot(document.getElementById("root")).render(tt.jsx(EC,{}));
