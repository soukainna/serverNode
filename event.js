const EventEmitter = require('events')

let monEcouteur = new EventEmitter()

monEcouteur.on('saute', function () {
    console.log("j'ai sauté")
})

monEcouteur.emit('saute')