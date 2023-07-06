//Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
let num = 0;

if (num > 0) {
    console.log(num + " é positivo.")
}
else if (num < 0) {
    console.log(num + " é negativo.")
}
else {
    console.log("O número é " + num)
}

//Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 18;
if (idade < 18) {
    console.log ("A pessoa é menor de idade, pois tem " + idade + " anos.")
}
else {
    console.log ("A pessoa é maior de idade, pois tem " + idade + " anos.")
}

//Escreva um programa que receba três números e determine qual deles é o maior.
let num1 = 12;
let num2 = 10;
let num3 = 9;

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1 + " > " + num2 + " > " + num3)
    }
    else {
        console.log(num1 + " > " + num3 + " > " + num2)
    }
}

else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log (num2 + " > " + num1 + " > " + num3)
    }
    else {
        console.log (num2 + " > " + num3 + " > " + num1)
    }
}

else {
    if (num1 > num2) {
        console.log (num3 + " > " + num1 + " > " + num2)
    }
    else {
        console.log (num3 + " > " + num2 + " > " + num1)
    }
}

//Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
let number1 = 5;
let number2 = 9;
let produto = number1 * number2;

if(produto % 2 == 0) {
    console.log(number1 + " * " + number2 + " = " + produto + " que é par.")
}
else {
    console.log(number1 + " * " + number2 + " = " + produto + " que é ímpar.")
}

//Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia = "sábado";

if(dia == "segunda-feira" || dia == "terça-feira" || dia == "quarta-feira" || dia == "quinta-feira" || dia == "sexta-feira") {
    console.log (dia + " é um dia útil.")
}
else {
    console.log (dia + " é um dia do final de semana.")
}

//Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let day = 5;
switch(day) {
    case 1:
        console.log("1 - Domingo");
        break;
    case 2:
        console.log("2 - Segunda-feira");
        break;
    case 3:
        console.log("3 - Terça-feira");
        break;
    case 4:
        console.log("4 - Quarta-feira");
        break;
    case 5:
        console.log("5 - Quinta-feira");
        break;
    case 6:
        console.log("6 - Sexta-feira");
        break;
    case 7:
        console.log("7 - Sábado-feira");
        break;    
}