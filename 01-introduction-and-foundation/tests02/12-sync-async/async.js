const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo-async.txt', 'oi async', function(err) {
    setTimeout(function(){
        console.log('arquivo criado');
    }, 1000)
})

console.log('fim')