/* url
    - Módulo para trabalhar com url's;
    - informações da url: host, path, searcj, query, etc;

*/

const url = require('url');
const adress = 'https://www.meusite.com.br/catalogo?produtos=cadeira';
const parsedUrl = new url.URL(adress);


console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));

