/*!
 * w-websocket-client v1.0.5
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("ws")):"function"==typeof define&&define.amd?define(["ws"],b):(a=a||self,a["w-websocket-client"]=b(a.ws))})(this,function(a){'use strict';function b(){return"undefined"==typeof self?"undefined"==typeof window?"undefined"==typeof global?null:global:window:self}function c(a){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},c(a)}function d(){var a="undefined"!=typeof window&&"undefined"!=typeof window.document,b="object"===("undefined"==typeof self?"undefined":c(self))&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,d="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node;a=a||b;var e={isBrowser:a,isWebWorker:b,isNode:d};return e}function e(a){var b=Object.prototype.toString.call(a);return"[object Function]"===b||"[object AsyncFunction]"===b}function f(c){function f(){e(c.open)&&c.open()}function g(){e(c.close)&&c.close()}function h(a){e(c.message)&&c.message(a)}function i(a){e(c.error)&&c.error(a),j.close()}var j=null;c.url||(c.url="ws://localhost:8080"),c.token||(c.token="*");var k,l=d().isBrowser;k=l?b().WebSocket:a;try{j=new k(c.url+"/?token="+c.token)}catch(a){return null}return l?(j.onopen=f,j.onmessage=function(a){var b=a.data;h(b)},j.onclose=g,j.onerror=i):(j.on("open",f),j.on("message",h),j.on("close",g),j.on("error",i)),j}return a=a&&a.hasOwnProperty("default")?a["default"]:a,f});
//# sourceMappingURL=w-websocket-client.umd.js.map
