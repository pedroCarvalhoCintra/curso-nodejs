# Introdução e Fundação no Node.

## Nodejs
    - O Nodejs é uma runtime de JavaScript que permite a execução de códigos JS no lado do servidor, fora de um navegador web;
    - É uma biblioteca utilizada por um compilador durante a execução do programa; 
    - Está construída na V8 engine (escrita em C++);
## npm 
    - O npm (Node Package Manager) é um gerenciador de pacotes do Node;
    - Configurações de projeto e executar scripts;

**comandos npm**
comando | detalhes
----- | -----
` npm init ` | Inicializa o projeto. 
` npm install <nome> ` | Instala um pacote acrescentando as dependências no projeto (arquivos do módulo são acrescentados em node_modules). 
` npm install --save-dev <nome> ` | Instala pacotes apenas para o ambiente de desenvolvimento.
` npm install -g <nome> ` |  Instala um pacote global (um pacote global não fica salvo em node_modules e sim na máquina do usuário e pode ser acessado de qualquer local via terminal).
` npm link <nome> ` | Copia os arquivos relacionados a esse pacote, que foi instalado globalmente e está em um repositório de pacotes na máquina do usuário.
` npm uninstall <nome> ` | Remove um pacote do projeto. 
` npm run <script> ` | Executa um srcipt definido no projeto ( é o nome da sequẽncia de comandos configurados no projeto). 
` npm update <nome> ` | Atualiza o pacote. 
` npx <nome> ` | npx é um executador de pacotes do node (alguns pacotes são scripts executáveis que resultam em ações na máquina do usário).
` npx npm-check-updates -u ` | Confere se ha alguma dependência que pode ser atualizada.
