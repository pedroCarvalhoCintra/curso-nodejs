const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.strout,
})

readline.question("what is your favorite programing language? ", (language) => {
    console.log(`Oh. ${language} is cool!`);
    readline.close();
})