/* events
    - Core Module que permite criar, chamar e escutar nosos próprios eventos;
*/

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('Durante');
})

console.log('Antes');

eventEmitter.emit('start');

console.log('Depois');
