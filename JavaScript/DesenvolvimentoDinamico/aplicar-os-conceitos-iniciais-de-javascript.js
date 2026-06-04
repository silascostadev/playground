let rlSync = require('readline-sync');

let nome = rlSync.question("Qual seu primeiro nome?\n");
let sobrenome = rlSync.question("Qual seu sobrenome?\n");

let nomeCompleto = (nome + " " + sobrenome);

console.log(`Seu nome e sobrenome é ${nomeCompleto}`);