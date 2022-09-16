/* Tarefa 02
    - Crie um novo projeto que aceite pacotes externos;
    - Instale o inquirer e o chalk;
    - Utilize o inquirer para receber o nome e a idade do usuário;
    - Apresente esta resposta com uma cor de fundo amarela e texto preto;
    - Dica: Você pode utilizar bgYellow e black!
    - Insira um tratamento para um possível erro do inquirer com o catch;
*/

const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'nome',
        message: 'Enter your name: '
    },
    {
        name: 'idade',
        message: 'Enter your age: '
    }

])
.then((answers) => {

    const nome = answers.nome;
    const idade = parseInt(answers.idade); 

    if ( !nome || !idade ){
        throw new Error('Invalid name or age.')
    }

    console.log(chalk.bgYellow.black(`The user name is ${nome} and he is ${idade} years old. `));
})
.catch((err) => {
    console.log(chalk.red.bold(err));
});
