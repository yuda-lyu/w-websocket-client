import WS from 'ws'
import isfun from 'wsemi/src/isfun.mjs'


/**
 * 建立WebSocket使用者(Node.js與Browser)端物件
 *
 * @param {Object} opt 輸入設定參數物件
 * @param {String} [opt.url='ws://localhost:8080'] 輸入WebSocket伺服器ws網址，預設為'ws://localhost:8080'
 * @param {String} [opt.token='*'] 輸入使用者認證用token，預設為'*'
 * @param {Function} opt.open 輸入監聽open函數
 * @param {Function} opt.close 輸入監聽close函數
 * @param {Function} opt.message 輸入監聽message函數
 * @param {Function} opt.error 輸入監聽error函數
 * @returns {Promise} 回傳Promise，resolve為回傳連接成功的Websocket物件，reject回傳為無法連接
 * @example
 *
 * import WSC from 'w-websocket-client/dist/w-websocket-client.umd.js'
 *
 * //opt
 * let opt = {
 *     url: 'ws://localhost:8080',
 *     token: '*',
 *     open: function() {
 *         console.log('client: open')
 *     },
 *     close: function() {
 *         console.log('client: close')
 *     },
 *     message: function(data) {
 *         console.log('client: message', data)
 *     },
 *     error: function(err) {
 *         console.log('client: error:', err)
 *     },
 * }
 *
 * //wsc
 * let wsc = null
 * new WSC(opt)
 *     .then(function(w){
 *
 *         //save
 *         wsc = w
 *
 *         //send
 *         let data = 'abc'
 *         wsc.send(data)
 *
 *     })
 *
 *
 */
function WWebsocketClient(opt) {
    let wsc = null //WebSocket


    //default
    if (!opt.url) {
        opt.url = 'ws://localhost:8080'
    }
    if (!opt.token) {
        opt.token = '*'
    }


    //inBrowser
    let inBrowser = typeof window !== 'undefined'
    //console.log('inBrowser', inBrowser)


    //MixWS
    let MixWS
    if (inBrowser) {
        MixWS = window.WebSocket //use browser websocket
    }
    else {
        MixWS = WS //use nodejs ws
    }


    //WebSocket, 網址傳token參數作為識別使用者
    try {
        wsc = new MixWS(opt.url + '/' + '?token=' + opt.token)
    }
    catch (err) {
        return null
    }


    //bind
    if (inBrowser) {
        wsc.onopen = fOpen
        wsc.onmessage = function(ev) {
            let message = ev.data //瀏覽器端會被包至data
            fMessage(message)
        }
        wsc.onclose = fClose
        wsc.onerror = fError
    }
    else {
        wsc.on('open', fOpen)
        wsc.on('message', fMessage)
        wsc.on('close', fClose)
        wsc.on('error', fError)
    }


    //fOpen
    function fOpen() {
        if (isfun(opt.open)) {
            opt.open()
        }
    }


    //fClose
    function fClose() {
        if (isfun(opt.close)) {
            opt.close()
        }
    }


    //fMessage
    function fMessage(data) {
        if (isfun(opt.message)) {
            opt.message(data)
        }
    }


    //fError
    function fError(err) {
        if (isfun(opt.error)) {
            opt.error(err)
        }
        wsc.close()
    }


    return wsc
}


export default WWebsocketClient
