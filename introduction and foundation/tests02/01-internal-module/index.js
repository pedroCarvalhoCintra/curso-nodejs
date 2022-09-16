/* Internal Modules 
    - Módulos criados pelo próprio desenvolvedor;
    - É necessário exporta-lo;
    Ex.: Módulo com uma função que printa dois números;
*/

const sum = require('./sum');
const printSum = sum.printSum;

printSum(6, 7);
printSum(9, -1);