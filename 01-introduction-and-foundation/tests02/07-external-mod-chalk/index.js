const chalk = require('chalk');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const nome = args['nome'];
const nota = parseInt(args['nota']);

if ( nota >= 7 ){
    console.log(chalk.green(`Congrulations, ${nome}! You are approved.`));
} else {
    console.log(chalk.red(`Flunked! Good luck, ${nome}.`));
}