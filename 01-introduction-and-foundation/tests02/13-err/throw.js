const x = '10'

if ( !Number.isInteger(x)){
    throw new Error('valor de x nao inteiro');
}

console.log('continua programa');
