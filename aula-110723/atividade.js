// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let texto = "BatatA";
let letra1 = "a";
let letra2 = "A";

var cont = 0

for (let i = 0; i < texto.length; i++) {
    if (texto[i] == letra1 || texto[i] == letra2) { //podia ser usado o charAt ao invés dos indices
    cont++
    }
}
console.log("A letra 'a' aparece " + cont + " vezes em " + texto);

//Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
let num = 625;
console.log(`A raiz quadrada de ` + num + ` é ` + Math.sqrt(num));

//Escreva um programa que  arredonde um número para o inteiro mais próximo.
let num1 = 2.5096
console.log(`O arredondamento de ` + num1 + ` é ` + Math.round(num1));

//Escreva um programa que  calcule o valor absoluto de um número.
let num2 = -15;
console.log(`O valor absoluto de ` + num2 + ` é ` + Math.abs(num2));

//Escreva um programa que  gere um número aleatório entre 10 e 20.
console.log(`Número aleatório entre 10 e 20: ` + Math.floor((Math.random() * (20 - 10 + 1) + 10)));

//Arredonde um número para um número específico de casas decimais.
let num3 = 5.646464
console.log(num3.toFixed(2));

//Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.
let num4 = `2.5665`;
console.log(`Arredondando ` + num4 + ` para baixo` + `: ` + Math.floor(num4));

//Verifique se um número é um valor finito, infinito ou NaN.
let num5 = 50;
if (isNaN(num5)) {
    console.log(num5 + " Não é um número");
} else {    
    if (isFinite(num5)) {
        console.log(num5 + " é finito");
    } else {
        console.log(num5 + " é infinito");
    }
}

//Escreva um programa que verifique se a string "ba" contém em outra string.
let texto1 = `jatata jatatinha`;
let silaba = `ba`;
if(texto1.includes(silaba)) {
    console.log(`Contém ` + silaba + ` em ` + texto1);
}
else {
    console.log(`Não contém ` + silaba + ` em ` + texto);
}


//Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
let palavra = "Felipe";
console.log(palavra);
console.log(palavra.toLowerCase());
console.log(palavra.toUpperCase());

//Extraia uma parte específica de uma string com base em índices.
let texto2 = `Felipe`;
console.log(texto2.substring(0, 4));

//Substitua todas as ocorrências de uma substring por outra em uma string.
let texto3 = `Felipe`;
console.log(texto3.replace(texto3.substring(0, 4), "Aasefffffffff"));

//Remova espaços em branco extras no início e no final de uma string.
let texto4 = `   Felipe     `;
console.log(`Com espaços: ` + texto4)
console.log(`Sem espaços: ` + texto4.trim());

//Inverta uma string. Utilize o laço for.
let texto5 = `Felipe`;
let contrario = ``;
for(let i = texto5.length-1; i >= 0; i--) {
    contrario += texto5[i];
}
console.log(texto5);
console.log(contrario);
