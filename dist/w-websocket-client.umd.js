/*!
 * w-websocket-client v1.0.8
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("ws")):"function"==typeof define&&define.amd?define(["ws"],b):(a=a||self,a["w-websocket-client"]=b(a.ws))})(this,function(a){'use strict';function b(){return"undefined"==typeof self?"undefined"==typeof window?"undefined"==typeof global?null:global:window:self}function c(){var a="undefined"!=typeof window&&"undefined"!=typeof window.document,b="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,c="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node;a=a||b;var d={isBrowser:a,isWebWorker:b,isNode:c};return d}function d(a){var b=Object.prototype.toString.call(a);return"[object Function]"===b||"[object AsyncFunction]"===b}function e(e){function f(){d(e.open)&&e.open()}function g(){d(e.close)&&e.close()}function h(a){d(e.message)&&e.message(a)}function i(a){d(e.error)&&e.error(a),j.close()}var j=null;e.url||(e.url="ws://localhost:8080"),e.token||(e.token="*");var k,l=c().isBrowser;k=l?b().WebSocket:a;try{j=new k(e.url+"/?token="+e.token)}catch(a){j=null}return null===j?{error:"can not new MixWS"}:(l?(j.onopen=f,j.onmessage=function(a){var b=a.data;h(b)},j.onclose=g,j.onerror=i):(j.on("open",f),j.on("message",h),j.on("close",g),j.on("error",i)),j)}return a=a&&a.hasOwnProperty("default")?a["default"]:a,e});
//# sourceMappingURL=w-websocket-client.umd.js.map
