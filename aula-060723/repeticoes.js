// //Estruturas de repetição
// console.log("---------")
// for(let numero = 0; numero < 10; numero = numero + 2) {
//     console.log(numero);
// } 

// console.log("---------")
// for(let numero = 0; numero < 10; numero++) {
//     console.log(numero);
// } 

// console.log("---------")
// for(let numero = 10; numero >= 0; numero--) {
//     console.log(numero);
// }

// console.log("---------")
// for(let numero = 0; numero < 10; numero += 2) {
//     console.log(numero);
// }

//loop infinito
// let n = 0;
// while(n < 18) {
//     console.log("Felipe");
//     n++;
// }

//for -> Quantidade de repetições determinadas
//while -> Quantidade de repetições indeterminadas
//i -> iteração (repetição)

let num = 80;
let ePrimo = true;
for(let i = 2; i < num; i++) {
    if(num % i == 0) {
        ePrimo = false;
    }
}

if(ePrimo) {
    console.log("É primo!!");
}
else {
    console.log("N é primo!!");
}