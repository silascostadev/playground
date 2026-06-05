let nomes = ["Antonita", "Eduardo", "Pedro", "Marcos", "Gibby"]
console.log(nomes);
console.log(nomes.length);
console.log(nomes.slice(1,5))

let vendedores = ["Janaina", "Octavius III", "Adaiane"];
let gerentes = ["Sandro", "Batânia"];
let presidente = ["Sandovandineuza"];

let empresa = vendedores.concat(gerentes, presidente);

console.log(empresa)

//Atividade proposta: Pegar todos os meses do ano num array e dividir por trimestres (facil demais)

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho" , "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log(meses);

console.log("Primeiro Semetre: " + meses.splice(0,3));
console.log("Segundo Semetre: " + meses.splice(0,3));
console.log("Terceiro Semetre: " + meses.splice(0,3));
console.log("Quarto Semetre: " + meses.splice(0,3));

console.log(meses);