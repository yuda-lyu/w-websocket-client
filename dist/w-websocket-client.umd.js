/*!
 * w-websocket-client v1.0.0
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("ws")):"function"==typeof define&&define.amd?define(["ws"],b):(a=a||self,a["w-websocket-client"]=b(a.ws))})(this,function(a){'use strict';function b(){var a,b,c=new Promise(function(){a=arguments[0],b=arguments[1]});return c.resolve=a,c.reject=b,c}function c(a){var b=Object.prototype.toString.call(a);return"[object Function]"===b||"[object AsyncFunction]"===b}function d(d){function e(){c(d.open)&&d.open(),i.resolve(j)}function f(){c(d.close)&&d.close()}function g(a){c(d.message)&&d.message(a)}function h(a){c(d.error)&&d.error(a),j.close()}var i=b(),j=null;d.url||(d.url="ws://localhost:8080"),d.token||(d.token="*");var k,l="undefined"!=typeof window;k=l?window.WebSocket:a;try{j=new k(d.url)}catch(a){return i.reject("can not create websocket"),i}return l?(j.onopen=e,j.onmessage=function(a){var b=a.data;g(b)},j.onclose=f,j.onerror=h):(j.on("open",e),j.on("message",g),j.on("close",f),j.on("error",h)),i}return a=a&&a.hasOwnProperty("default")?a["default"]:a,d});
//# sourceMappingURL=w-websocket-client.umd.js.map
