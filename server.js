let http = require('http')
let fs = require('fs')
let url = require('url')

let server = http.createServer() //c'est une instance de mon http server

//je souhaite écouter si il ya une requete et prendra une fonction
server.on('request', (request, response) => {
    // console.log('il ya eu une requete')
    fs.readFile('index.html', 'utf-8', (err, data) => 
    {
        let query = url.parse(request.url, true).query
        let name = query.name === undefined ? 'anonyme' : query.name
        if(err){
            //throw err
            response.writeHead(404, {
                'content-type' : 'text/html; charset=utf8'
            })
            response.end("Ce fichier n'existe pas")
        } 

        else {
            response.writeHead(200, {
                'content-type': 'text/html; charset=urf8'
            })
            data = data.replace('{{ name }}', name)
            response.write(data)
            response.end()
        }

    })
    // response.writeHead(200, {
    //     'content-type': 'text/html; charset=utf-8'
    // })
    // response.end("salut comment ça va ?")
    // response.writeHead(200, {
    //     'content-type': 'text/html; charset=utf8'
    // })
    // console.log(url.parse(request.url, true))
    // let query = url.parse(request.url, true).query
    // let name = query.name
    // console.log(name)
    // // console.log(query)
    // response.write('Bonjour ' + name)
    // response.end()
})

//sur quelle port ecouter
server.listen(8080)