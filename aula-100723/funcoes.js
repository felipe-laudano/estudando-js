// Função ou function -> Rotina

/**Exemplo de rotina 
const num = 3;
const num2 = 6;
const soma = num + num2;
console.log(soma);
*/

/**
let num1 = 4;
let num2 = 5;
function multiplicar() {
    console.log("O primeiro numero é " + num1);
    console.log("O segundo numero é " + num2);
    console.log("O produto é " + (num1 * num2));
}
multiplicar(); //chamada da função
*/

/** Funções ja prontas do JS */
//Biblioteca Number
const num = 12.4;
console.log("Hello"); //1º função log, para imprimir na saída/terminal
let result = isNaN(num); // 2º função, is not a number, retorna um booleano
console.log(result); // no result armazena o valor retornado pela função (true ou false)

result = console.log("Oi"); //tentativa de armazenar um valor do metodo log
console.log(result); //console.log não retorna nada, por isso fica indefinido 

result = isFinite(num); //retorna um booleano, se o num é finito
console.log(result);

result = parseInt(num); // retorna um numero, converte de float para int
console.log(result) 

result = parseFloat(12); // retorna um numero, converte de int para float
console.log(result);

result = Number.isInteger(parseFloat(12)); //chamada de função dentro de outra função, aqui a uma contradição, pois o numero dentro da função parseFloat foi transformado em float, logo era pra ser retornado false, mas retorna true. Possível usar o Number antes da chamada.
console.log(result);

let numero = 22.564;
console.log(numero.toFixed(2)); //retorna uma STRING do numero com apenas duas casas decimais
console.log(numero.toFixed(1));

console.log(numero.toPrecision(3)); //retorna uma STRING, com precisao, do numero com a quantidade de digitos selecionada

//Negação de funções para ver o contrário
result = !Number.isInteger(25.6); //verificando se é float
console.log(result);

//Funções de Texto
const texto1 = "Java Script!";
console.log(texto1.charAt(5)); //Retorna um caractere especifico do texto, conforme posição, começa em 0.

console.log(texto1.concat("bata", "ta"));
console.log(texto1.charAt(texto1.length - 1)); // o tamanho do texto menos 1 é o último caractere, logo, o charAt pega a posição do último caractere e imprime.

console.log(texto1.trim()); //remove os espaçoes do inicio e do fim do texto e não do meio
console.log(texto1.replace(" ", "")); //Substitui UM espaço por nada, nesse caso juntarão duas palavras separadas, retorna uma string
console.log(texto1.replaceAll(" ", "")); //Substitui TODOS os espaços por nada
console.log(texto1.includes("Java")); //Retorna um booleano, verifica se tem Java dentro do texto1, case sensitive, string precisa estar igual (minusculas/maiusculas)

console.log(texto1.toLowerCase()); //transforma todos os caracteres em minusculos, retorna uma string
console.log(texto1.toUpperCase()); //transforma todos os caracteres em maiusculos

let busca = "JaVa";
console.log(texto1.toLowerCase().includes(busca.toLowerCase())); //verifica se esta incluida dentro do texto1, a string contida na variavel busca transformada toda em MINUSCULA

console.log(texto1.replace("J", "A").replace("S", "T").replace("H", "A")); //encadeamento que funciona

console.log(texto1);
console.log(texto1.indexOf("a")); //retorna a posição do caractere 

console.log(texto1.substring(0, 4)); //retorna um pedaço da string, um intervalo

// Math -> Biblioteca matemática

console.log(Math.ceil(2.3789)); //arredonda pra cima
console.log(Math.floor(2.3789)); // arredonda pra baixo
console.log(Math.round(2.4989)); // arredonda para o equivalente, mais próximo
console.log(Math.sqrt(625)); //raiz quadrada
console.log(Math.abs(-8)); //valor absoluto
console.log(Math.random()); // numero randomico entre 0 e 1 [0, 1[