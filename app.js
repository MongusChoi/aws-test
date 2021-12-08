const express = require('express')
const app = express()
const server = require('http').Server(app)
const crypto = require('crypto');

const port = process.env.PORT || 2008

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/:something', (req, res) => {
    const { something } = req.params

    res.send(`your message : ${something}`)
})

app.get('/crypto/:string', (req, res) => {
    const { string: str } = req.params

    const encrypted = crypto.createHmac('sha1', 'SeCrEtKeYfOrHaShInG').update(str).digest('base64')
    res.send(encrypted)
})

server.listen(port, function () {
    console.log('[system] Open | Port : ' + port)
})