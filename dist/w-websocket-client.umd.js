/*!
 * w-websocket-client v1.0.3
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("ws")):"function"==typeof define&&define.amd?define(["ws"],b):(a=a||self,a["w-websocket-client"]=b(a.ws))})(this,function(a){'use strict';function b(a){var b=Object.prototype.toString.call(a);return"[object Function]"===b||"[object AsyncFunction]"===b}function c(c){function d(){b(c.open)&&c.open()}function e(){b(c.close)&&c.close()}function f(a){b(c.message)&&c.message(a)}function g(a){b(c.error)&&c.error(a),h.close()}var h=null;c.url||(c.url="ws://localhost:8080"),c.token||(c.token="*");var i,j="undefined"!=typeof window;i=j?window.WebSocket:a;try{h=new i(c.url+"/"+c.token)}catch(a){return null}return j?(h.onopen=d,h.onmessage=function(a){var b=a.data;f(b)},h.onclose=e,h.onerror=g):(h.on("open",d),h.on("message",f),h.on("close",e),h.on("error",g)),h}return a=a&&a.hasOwnProperty("default")?a["default"]:a,c});
//# sourceMappingURL=w-websocket-client.umd.js.map
