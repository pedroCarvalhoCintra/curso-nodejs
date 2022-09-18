/*
    Modulo externo e interno.

    comando : node index.js --x=5 --y=10 
*/

//EXTERNAL MODULE
const minimist = require('minimist');
//INTERNAL MODULE
const printSum = require('./sum').printSum;

const args = minimist(process.argv.slice(2));
const x = parseInt(args['x']);
const y = parseInt(args['y']);

printSum(x, y);

