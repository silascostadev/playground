let valores = [2,3,8,6,4,9,1];

console.log("Valores = " + valores);
console.log("Tipo de Valores= " + typeof(valores));
console.log("4º de Valores= " + valores[3]);
console.log("Comprimento de Valores= " + valores.length);

valores[7] = "Armando";
console.log("Armando foi adicionado a valores, mesmo não sendo um valor com todo respeito a pessoa dele");

console.log("Valores = " + valores);
console.log("8º de Valores= " + valores[7]);
console.log("Comprimento de Valores agora= " + valores.length);

for (let pos = 0; pos < valores.length; pos++){
    console.log("Posição: " + pos + " | Valor: " + valores[pos]);
}

valores.pop();

console.log("Valores = " + valores);

let pares = [];
let impares = [];
let pospares = 0;
let posimpares = 0;

for (let pos = 0; pos < valores.length; pos++){
    if (valores[pos]%2==0){
        pares[pospares] = valores[pos];
        pospares++
    } else{
        impares[posimpares] = valores[pos];
        posimpares++
    }

}

console.log(pares)
console.log(pospares)
console.log(impares)
console.log(posimpares)

console.log(pares)
console.log(impares)

console.log(valores.sort())

console.log(valores.join(' | '))

console.log(valores.shift())

console.log(valores)

console.log(valores.indexOf(9))

console.log(valores.push(5))

console.log(valores)

console.log(valores.slice(2,5))