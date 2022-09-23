/*
    Accounts.
    - Simualação de serviço bancário;
    - Operações: Criação da conta, Checagem de saldo, Depósito e Saque;
    - Módulos usados: Inquire, chalk e fs(Core Module); 
    - Interação por terminal (iniciado a partir do script definido como start no projeto);
    - Fluxo base de interações:
        - 'npm start' inicializa o programa;
        - é apresentada uma lista de opções de operações a serem realizadas pelo usuário;
        - ao escolher uma operação o usuário deve sempre informar sobre qual conta a operação deve ocorrer;
        - caso a conta não esteja cadastrada, o usuário será redirecionado para informar outra conta ou para a criação de conta; 
    
*/

const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

operation();

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'What operation do you want to do?',
        choices: [
            'Create an account', 
            'Check balance', 
            'Deposit', 
            'Withdraw', 
            'Exit'
        ],
    },
    ])
    .then( (answer) => {
        const action = answer['action'];

        switch (action) {
            case 'Create an account':
                createAccount();
                break;
            case 'Check balance':
                getAccountBalance();
                break;
            case 'Deposit':
                deposit();
                break;
            case 'Withdraw':
                withdraw();
                break;
            case 'Exit':
                console.log(chalk.bgYellow.black('Thank you, for using Accounts.'));
                break;

            default:
                break;
        }
    })
    .catch( (err) => console.log(err) )

}

function createAccount() {
    console.log(chalk.bgYellow.black('Thank you for choosing our bank.'));
    console.log(chalk.yellow('Set your account details'));
    buildAccount();
}

function buildAccount(){

    inquirer.prompt([{
        name: 'accountName',
        message: 'Account name: ',
    },
    ])
    .then( (answer) => {
        const accountName = answer['accountName'];

        if ( !fs.existsSync('accounts') ) {
            fs.mkdirSync('accounts');
        }
        if ( fs.existsSync(`accounts/${accountName}.json`) ){
            console.log(chalk.red('An account with that name already exists, choose another name...'));
            return buildAccount();
        }
        
        fs.writeFileSync(
            `accounts/${accountName}.json`, 
            `{ \n\t"name": "${accountName}",\n\t"balance": "0"\n}`, 
            function(err) {
                console.log(err);
            }
        );
        
        console.log(chalk.green('Account created successfully.'));
        operation();
    })
    .catch( (err) => console.log(err) )
}


function notFindAccount(func) {
    inquirer.prompt([{
        type: 'list',
        name: 'decision',
        message: 'This account does not exist. ',
        choices: [
            'Create an account',
            'Enter a new account name'
        ]
    },
    ])
    .then( (answer) => {
        const decision = answer['decision'];

        if ( decision == 'Create an account' ) {
            createAccount();
        } else {
            return func();
        }
    })
    .catch( (err) => console.log(err) )
}


function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    });
    return JSON.parse(accountJSON);
}   

function addAmount(accountName, amount){
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.red('Invalid deposit'));
        return deposit();
        
    }

    accountData.balance = (parseFloat(amount) + parseFloat(accountData.balance)).toString();
    fs.writeFileSync(
        `accounts/${accountName}.json`, 
        JSON.stringify(accountData, null, '    '), 
        function (err) {
            console.log(err);
        },
    )
    console.log(chalk.bgGreen.black(`$${amount} deposited in account [${accountName}]`));
    operation();
}

function deposit() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'What is your account name?',
    },
    ])
    .then( (answer) => {
        const accountName = answer['accountName'];


        if ( !fs.existsSync(`accounts/${accountName}.json`) ){
            notFindAccount(deposit);
        } else {
            inquirer.prompt([{
                name: 'amount',
                message: 'How much do you want to deposit?'
            },
            ])
            .then( (answer) => {
                const amount = answer['amount'];

                addAmount(accountName, amount);
            })
            .catch( (err) => console.log(err) )
        }
    })
    .catch( (err) => console.log(err) )
}

function getAccountBalance() {
    
    inquirer.prompt([{
        name: 'accountName',
        message: 'What is your account name?'
    },
    ])
    .then( (answer) => {
        const accountName = answer['accountName'];

        if (!fs.existsSync(`accounts/${accountName}.json`)){
            notFindAccount(getAccountBalance);
        } else {
            const accountData = getAccount(accountName);
            const balance = parseFloat(accountData.balance);

            console.log(chalk.bgYellow.black(`The balance in account [${accountName}] is $${balance}`));
            operation();
        }


    })
    .catch( (err) => console.log(err) )
}


function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.red('Invalid withdraw'));
        return withdraw();
    }
    const balance = parseFloat(accountData.balance);
    
    if ( balance < amount ) {
        console.log(chalk.red(`There is no enough money in account [${accountName}] for this withdraw`));
    } else {
        accountData.balance = (parseFloat(accountData.balance) - parseFloat(amount)).toString();
        fs.writeFileSync(
            `accounts/${accountName}.json`, 
            JSON.stringify(accountData, null, '    '), 
            function (err) {
                console.log(err);
            },
        )
        console.log(chalk.bgRed.black(`$${amount} withdraw in account [${accountName}]`));
    }

    operation();
}

function withdraw() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'What is your account name?',
    },
    ])
    .then( (answer) => {
        const accountName = answer['accountName'];


        if ( !fs.existsSync(`accounts/${accountName}.json`) ){
            notFindAccount(withdraw);
        } else {
            inquirer.prompt([{
                name: 'amount',
                message: 'How much do you want to withdraw?'
            },
            ])
            .then( (answer) => {
                const amount = answer['amount'];
    
                removeAmount(accountName, amount);
            })
            .catch( (err) => console.log(err) )
        }
    })
    .catch( (err) => console.log(err) )
}