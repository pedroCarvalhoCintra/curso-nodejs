/* os
    - Core Module que permite extrair informaçãoes sobre o sistema operacional;
*/

const os = require('os');

console.log(os.cpus()); // cpus no servidor;
console.log(os.freemem()); // memória ram livre (bytes);
console.log(os.homedir()); // diretório principal;
console.log(os.type()); // qual sistema operacional está rodando na máquina;