# w-websocket-client
A wrapper for websocket in nodejs and browser.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-websocket-client.svg?style=flat)](https://npmjs.org/package/w-websocket-client) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-websocket-client.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-websocket-client) 
[![license](https://img.shields.io/npm/l/w-websocket-client.svg?style=flat)](https://npmjs.org/package/w-websocket-client) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-websocket-client/master/dist/w-websocket-client.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-websocket-client)
[![npm download](https://img.shields.io/npm/dt/w-websocket-client.svg)](https://npmjs.org/package/w-websocket-client) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-websocket-client.svg)](https://www.jsdelivr.com/package/npm/w-websocket-client)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-websocket-client/global.html).

## Installation
### Using npm(ES6 module):
> **Note:** `w-websocket-client` depends on `ws`
```alias
npm i w-websocket-client
```
#### Example for `w-websocket-client`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-websocket-client/blob/master/scla.mjs)]
```alias
import WSC from 'w-websocket-client/dist/w-websocket-client.umd.js'

let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        console.log('client nodejs: open')

        //send
        wsc.send('abc')

    },
    close: function() {
        console.log('client nodejs: close')
    },
    message: function(data) {
        console.log('client nodejs: message', data)
    },
    error: function(err) {
        console.log('client nodejs: error:', err)
    },
}

//WSC
let wsc = new WSC(opt)
```

### In a browser(UMD module):
> **Note:** `w-websocket-client` does't depend on any package in browser.

[Optional] Add script with nomodule for IE11.
```alias
<script nomodule src="https://cdn.jsdelivr.net/npm/@babel/polyfill/dist/polyfill.min.js"></script>
```
[Necessary] Add script for w-websocket-client.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-websocket-client@1.0.7/dist/w-websocket-client.umd.js"></script>
```
#### Example for `w-websocket-client`:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-websocket-client/blob/master/web.html)]
```alias
//opt
let opt = {
    url: 'ws://localhost:8080',
    token: '*',
    open: function() {
        console.log('client web: open')

        //send
        wsc.send('abc')

    },
    close: function() {
        console.log('client web: close')
    },
    message: function(data) {
        console.log('client web: message', data)
    },
    error: function(err) {
        console.log('client web: error:', err)
    },
}

//WSC
let WSC = window['w-websocket-client']
let wsc = new WSC(opt)
```