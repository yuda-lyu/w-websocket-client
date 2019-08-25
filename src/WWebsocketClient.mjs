import WS from 'ws'
import getGlobal from 'wsemi/src/getGlobal.mjs'
import getEnv from 'wsemi/src/getEnv.mjs'
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


    //isBrowser
    let isBrowser = getEnv().isBrowser


    //MixWS
    let MixWS
    if (isBrowser) {
        //於browser時, 不能直接使用window, 因可能會於worker內會沒有window可用, 故得通過getGlobal取得當前頂層物件
        MixWS = getGlobal().WebSocket //use browser websocket
    }
    else {
        //若不是browser則假設為在nodejs, 故改使用ws連線
        MixWS = WS //use nodejs ws
    }


    //WebSocket, 網址傳token參數作為識別使用者
    try {
        wsc = new MixWS(opt.url + '/' + '?token=' + opt.token)
    }
    catch (err) {
        //throw (new Error('can not new MixWS'))
        wsc = null
    }


    //check, 可能因ie11安全性考量而被封鎖
    if (wsc === null) {
        return {
            error: 'can not new MixWS'
        }
    }


    //bind
    if (isBrowser) {
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
