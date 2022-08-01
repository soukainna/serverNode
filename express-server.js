let express = require('express')

let app = express()

app.get('/', (request, response) => {
    response.send('salut tu es a la racine')
})

app.get('/demo', (request, response) => {
    response.send('tu es dans demo')
})

app.listen(8080)