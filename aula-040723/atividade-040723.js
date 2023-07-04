//Escreva um programa que verifique se um número é par ou ímpar.
let par = "\nNúmero é par"
let impar = "\nNúmero é impar"
let num = 1;
let calculo = (num % 2) == 0;
let saida;

saida = calculo ? par : impar;
console.log(saida);

//Faça um programa que calcule a média aritmética de três números.
let num1 = 5;
let num2 = 9;
let num3 = 10;
let media = (num1 + num2 + num3) / 3;

console.log("media = " + media);

//Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.
let num4 = 31;
let operacao = (num4 % 3) == 0 && (num4 % 5) == 0;
let mensagem = "\nO número é divisivel por 3 e 5"
let mensagem2 = "\nO número não é divisivel por 3 e 5"

let verificacao = operacao ? mensagem : mensagem2;
console.log(verificacao)

//Faça um programa que calcule a área de um triângulo com base e altura.
let base = 5;
let altura = 8;
let calcArea = (base*altura) / 2;
let saida1 = "\nA área do triângulo é igual a " + calcArea;
console.log(saida1);

//Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.
let celsius = 30;
let fahrenheit = (celsius * (9/5)) + 32;
let conversao = "\n" + celsius + "°C = " + fahrenheit + "°F";
console.log(conversao);

//Faça um programa que calcule o delta das funções de segundo grau.
let b = 2;
let a = 3;
let c = 1;
let delta = (b**2) - (4*a*c); 
let result = "\nSendo b = " + b + ", a = " + a + " e c = " + c + ", delta = " + delta + ".";
console.log(result);

//Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).
let idade = 17;
let maioridade = idade >= 18;
let msg;
msg = maioridade ? "\nPode dirigir" : "\nNão pode dirigir";
console.log(msg);