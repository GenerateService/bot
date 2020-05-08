const express = require('express')
module.exports = class Websocket {
    constructor(port, client) {
        this.port = port
        this.client = client
        this.app = express()
        this.app.listen(this.port, () => {
            console.log(`API listening on port ${this.port}`)
        })
    }
}