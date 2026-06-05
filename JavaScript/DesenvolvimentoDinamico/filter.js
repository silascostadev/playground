let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);

let impares = numeros.filter(item => item % 2 != 0);
console.log(impares);

let numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(numerosFiltrados);

//criar funcção para .filter

function buscarValores(valor){
    return valor < 5;
};

let numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);      

let r1 = numeros.filter((valor) =>{
    return valor > 5;
});

console.log(r1);

let funcionarios = [
    {nome: "Luis", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
];

let pessoasListagem = funcionarios.filter(
    function(valor){
        console.log(valor.nome);
        return valor.nome;
    }
);

console.log(pessoasListagem)

let pessoasNomes4 = funcionarios.filter(
    function(valor){
        return valor.nome.length < 5;
    }
);