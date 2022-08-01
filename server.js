let http = require('http')

let server = http.createServer() //c'est une instance de mon http server

server.on('request', (request, response) => {
    // console.log('il ya eu une requete')
    response.writeHead(200)
    response.end("salut comment ca va ?")
})

server.listen(8080)