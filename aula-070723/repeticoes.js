/** 
//For
- Uma quantidade determinada de repetições
- sintaxe: for(inicialização variavel; condicao; incrementação) {
    instrução
}

//While
- Uma quantidade indeterminada de repetições
- sintaxe: while(condicao) {
    instrução
}
*/

// Desenha um quadrado de # (cerquilha) na tela
// let lado = 7;
// for(let i = 0; i < lado; i++) {
//     let linha = "";
//     for(let j = 0; j < lado; j++) {
//         linha += "# ";
//     }
//     console.log(linha);
// }

//continue
// for(let i = 0; i <= 20; i++) {
//     if(!(i % 2 == 0)) {
//         continue; //ignora o loop do for, pula próximo
//     }
//     console.log(i);
// }

//break
for(let i = 1; i <= 56; i++) { //procura o primeiro multiplo de 8 e imprime apenas ele
    if((i % 8 == 0) && (i != 8)) {
        console.log(i);
        break; //termina o for, quebra todo fluxo, sem o break iriam aparecer outros multiplos de 8.
    }
}