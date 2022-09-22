/*
    - A execução sempre ocorre um linha por vez e de cima para baixo no código escrito;
    - Evita problemas de concorrência, garantindo a execução do código;
*/

function a() {
    console.log('executando a');
}

function b() {
    console.log('executando b');
}

function c() {
    console.log('executando c');
    a();
    b();
}

c();

