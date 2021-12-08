const express = require('express')
const app = express()
const server = require('http').Server(app)

const port = process.env.PORT || 2008

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/:something', (req, res) => {
    const { something } = req.params

    res.send(`your message : ${something}`)
})

server.listen(port, function () {
    console.log('[system] Open | Port : ' + port)
})