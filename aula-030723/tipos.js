/**
 * Tipagem Estatica: Definição de um tipo a cada variavel (Java, C, C++, TypeScript)
 * Tipagem Dinamica: O tipo é definido de acordo com seu valor (JavaScript, Python)
 */

let variavel = 22;
console.log(variavel);
console.log(typeof variavel);

variavel = "Felipe";
console.log(variavel);
console.log(typeof variavel);

variavel = true;
console.log(variavel);
console.log(typeof variavel);

//typeof: Retorna o tipo da variavel

//objetos
variavel = { nome: "Felipe", idade: 21};
console.log(typeof variavel);

variavel = [1, 2, 3, 4, 5, 6]; //vetor (objeto)
console.log(typeof variavel);

variavel = function() { return 1 }; //função
console.log(variavel);
console.log(typeof variavel);

variavel = undefined; //indefinido
console.log(typeof variavel);

let teste;
console.log(typeof variavel);

variavel = null; //nulo
console.log(typeof variavel);

variavel = NaN; //Not a number
console.log(variavel); // NaN
console.log(typeof variavel); //tipo do NaN é number
console.log(0/0); // NaN

let inteiro = 1;
console.log(typeof inteiro);
let flutuante = 1.5;
console.log(typeof flutuante);



