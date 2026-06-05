let numeros = [0,1,2,3,4,5,6,7,8,9];

console.log(numeros.splice(2,3,88,89,90,91));
console.log(numeros);

let nomes = ["Maria", "João", "Lucas", "Pedro"];
console.log(nomes);
var splicednomes = nomes.splice(1,2,"Luiz", "Ronaldo", "Domingos");
console.log(splicednomes);
console.log(nomes);

console.log(nomes.unshift("João", "Lucas"));
console.log(nomes);