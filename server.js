let http = require('http')

let server = http.createServer() //c'est une instance de mon http server

//je souhaite écouter si il ya une requete et prendra une fonction
server.on('request', (request, response) => {
    // console.log('il ya eu une requete')
    response.writeHead(200)
    response.end("salut comment ca va ?")
})

//sur quelle port ecouter
server.listen(8080)