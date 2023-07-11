//Função
// Funções que recebem parametros
// Funções que não recebem parametros
// Funções que não retornam valores
// function somar(n1, n2) { //declaração de duas variaveis dentro dos () - parametros
//     console.log(`Numero 1 é ` + n1);
//     console.log(`Numero 2 é ` + n2);
//     console.log(`Soma deles: ` + (n1 + n2));
// } //É possível definir um valor padrão direto na function, ex: n2 = 10 ou inserir um if (n2 == undefined, n2 = 10), porém, se isso for feito e na chamada de método for inserido o valor, ele ignora o que foi designado na function e considera os valores da chamada
// let result = somar(7, 17); //Aqui é declarada a variavel result com o valor da chamada, mas a chamada também é executada 
// console.log(result); //Aqui é impresso um valor undefined, pois essa função não retorna nenhum valor

// // Funções que retornam valores
// function somar2(n1, n2) {
//     let soma = n1 + n2;
//     return soma; //Funciona como um break, qualquer linha de código abaixo dele não será executada, geralmente sempre no final de um bloco
// }
// let result2 = somar2(30, 17);
// console.log(result2);

// function calc(n1, n2, op = '+') {
//     switch(op) {
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1 - n2;
//         case "*":
//             return n1 * n2;
//         case "/":
//             return n1 / n2;
//     }
//     return NaN;
// }
// console.log(calc(5, 5, '+'));
// console.log(calc(5, 15, '*'));
// console.log(calc(5, 15, '/'));
// console.log(calc(5, 15, 'somar'));

//Entrada - Parametros
//Processamento - Execução do escopo
//Saída - Valor de retorno

//DICA: Não pense em como a função funciona, foque no que ela retorna

//function extra
function desenhaTriangulo(altura) {
    for(let i = 1; i < altura; i++) {
        let linha = "";
        for(let j = 0; j < (altura-i); j++) {
            linha += " ";
        }
        for(let j = 0; j < i; j++) {
            linha += "* ";
        }
        console.log(linha);
    }
}
desenhaTriangulo(10);