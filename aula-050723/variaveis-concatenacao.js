//console.log(n23umero) //Não é possível acessar essa variavel, pois ela é let e foi declarada depois.
//let n23umero = 90;

//console.log(texto) //mesmo chamando a var antes, é possível acessa-la por causa do var, só não pega o valor pois foi inserido na linha abaixo
//var texto = "lgfe"

//Diferença entre var e let: 
//No caso do var, ao declarar uma variavel com ele, ele adentra ao escopo global automaticamente, ou seja, é possível acessar aquela variavel pelas linhas acima dele.
//No let não, ele só é reconhecido pelas linhas abaixo dele.
//const funciona da mesma forma que o let, mas é uma constante

//Operador de concatenação

const numero = 2 + 3; // Operador de adição
const texto = "O numero é " + numero; // Operador de concatenação
//console.log(texto)

console.log("A soma de " + 2 + " com " + 3 + " é igual a " + numero);

let idade = 18;
let mensagem = (idade >= 18) ? "Sua idade é " + idade + " pode ser preso! " : "Sua idade é " + idade + " vai chegar tua vez"
console.log(mensagem);