//import WSC from './src/WWebsocketClient.mjs'
import WSC from './dist/w-websocket-client.umd.js'

let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        console.log('client nodejs[port:8080]: open')
    },
    close: function() {
        console.log('client nodejs[port:8080]: close')
    },
    message: function(data) {
        console.log('client nodejs[port:8080]: message', data)
    },
    error: function(err) {
        console.log('client nodejs[port:8080]: error:', err)
    },
}

new WSC(opt)
    .then(function(w) {
        //console.log('client nodejs[port:8080]: then', w)

        //send
        w.send('abc')

        //msg
        // let msg = {
        //     token: opt.token,
        //     _id: 'abc',
        //     func: 'getFuncs',
        //     input: null,
        // }
        // w.send(JSON.stringify(msg), function(err) {
        //     if (err) {
        //         console.log('client nodejs[port:8080]: send:  err', err)
        //     }
        // })

    })
    .catch(function(err) {
        console.log('client nodejs[port:8080]: catch', err)
    })
