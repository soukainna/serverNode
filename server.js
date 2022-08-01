let http = require('http')

let server = http.createServer() //c'est une instance de mon http server

server.on('request', (request, response) => {
    console.log('il ya eu une requete')
})

server.listen(8080)