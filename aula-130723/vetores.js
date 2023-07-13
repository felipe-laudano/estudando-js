// Vetores - Arrays
// let nota = 9.6; // variavel simples
// let notas = [6.5, 7.8, 9.0]; // variavel composta/array/vetor
// let times = ["Botafogo", "Grêmio", "Flamengo", "Corinthians"];
// let ativados = [true, false, false, true];
// console.log(typeof nota); // number
// console.log(typeof notas); // object
// console.log(notas.length); // tamanho do vetor, quantidade de elementos

let pesos = [89.5, 60.0, 45.4, 67.0, 75.3];
// console.log(pesos.length);
// console.log(pesos[0]); // indice -> numero que representa a posição do elemento, começa com 0
// console.log(pesos[0] + pesos[1]);
// console.log(pesos);

// for(let i = 0; i < pesos.length; i++) { // imprimir com for
//     console.log(pesos[i]); // iterar sobre o vetor
// }

let operacoes = [ // vetor de funções
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2
];

// console.log(operacoes[0](3, 4)); // totalmente válido
// console.log(pesos); // before
// pesos[2] = 54.4;
// console.log(pesos); // after

// Mutiplicar todos por 2
// console.log(pesos); // before
// for(let i = 0; i < pesos.length; i++) {
//     pesos[i] *= 2;
// }
// console.log(pesos); // after

// Somar todos e mutiplicar por 2
// let acumulador = 0;
// for(let i = 0; i < pesos.length; i++) {
//     acumulador += pesos[i];
// }
// console.log(acumulador*2);

// peso pega os valores do vetor (of)
for(let peso of pesos) { // for each -> iterar sobre os vetores
    console.log(peso);
}

 //indice pega os indices do vetor (in)
for(let indice in pesos) { // for each -> iterar sobre os vetores
    console.log(indice);
    console.log(pesos[indice]);
}