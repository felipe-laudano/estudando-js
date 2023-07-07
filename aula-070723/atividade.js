//Escreva um programa que imprima os números de 1 a 20 usando um loop for.

// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
// let p = 0;
// let u = 1;
// let i = 0; //contador
// let limite = 10;
// while (i < limite) {
//     console.log(p);
//     let soma = p + u;
//     p = u; //penultimo passa a ser o ultimo
//     u = soma; //ultimo passa a ser o próximo que era a soma do ultimo com o penultimo
//     i++;
// }

//Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
// let number = 15;
// let soma = 0;
// for(let i = 0; i <= number; i++) {
//     if(i % 2 == 0) {
//         continue
//     }
//     console.log(i);
//     soma += i;
// }
// console.log(soma);

//Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.
// let num = 2;
// let soma;
// console.log("Tabuada da soma do 2:")
// for(let i = 1; i <= 10; i++) {
//     soma = num + i;
//     console.log(num + " + " + i + " = " + soma);
// }

//Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
// limite = 100;
// console.log("Múltiplos de 7")
// for(let i = 1; i <= limite; i++) {
//     if(!(i % 7 == 0)) {
//         continue;
//     }
//     console.log(i);
// }

//Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".
let altura = 40;
let aster = "";
console.log("Desenho de um triângulo reto com *:")
for(let i = 0; i <= altura; i++) {
    aster += " * ";
    console.log(aster); //pula linha automaticamente
}

//Desenhar um quadrado com @, mas seu interior ser oco.

let lado = 5;
for(let y = 1; y <= lado; y++) {
    let linha = "";
    for(let x = 1; x <= lado; x++) {
        if(y == 1 || y == lado || x == 1 || x == lado) {
            linha += "# ";
        }
        else {
            linha += "  ";
        }
        
    }
    console.log(linha);
}
