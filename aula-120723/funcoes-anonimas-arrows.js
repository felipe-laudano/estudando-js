// callback: função que é passada como parametro de outra função
// exemplo de callback:
// function erro() {
//     console.log(`Erro`);
// }
// //                função passada como parametro
// function reqParaBanco (callbackError) {
//     for(let i = 0; i < 1000000000000; i++) { // req feita p/ o server (simulation), isso vai demorar alguns segundos
//         if(i === 100000) { // aqui gerou um erro
//             callbackError();
//         }
//     } 
// }
// //chamada de função com outra função como parametro, callback
// reqParaBanco(erro);

//Mais exemplos de callbacks
// function teste() {
//     console.log(`Olá, mundo!`);
// }
// // teste();
// // setTimeout(teste, 10000); //usa calback como parametro, executa teste após 10000 milissegundos
// setInterval(teste, 2000); // executa teste a cada 2 segundos

//Função anônima
// setInterval(function(n1, n2) { //ao invés de criar uma função fora dessa, ela foi desenvolvida direto no argumento. Possível passar paramentros para essa função e passar como argumento depois do argumento time
//     console.log(`Olá, mundo com SetInterval.`);
//     console.log(n1+n2);
// }, 2000, 5, 5); //5 e 5 são os argumentos da função anônima (callback)

// Arrow Functions -> Funções de Seta -> Funções anônimas
// setTimeout(function() { //revisando função anônima
//     console.log(`SetTimeout com Função anônima`);
// }, 2000);
// //exemplo de uma arrow, mesma coisa que a função anônima de cima, porém mais facil de escrever, mais enchuta
// setTimeout(() => {
//     console.log(`SetTimeout com Função arrow`);
// }, 2000);
// //outro exemplo:
// (resultado, requisicao) => {
//     console.log(resultado + " " + requisicao)
//     return 0;
// }

//Testando a utilização das arrow functions
function teste(callback) {
    let valor = callback(130);
    console.log(valor);
}
// Primeira forma de executar "teste" (Função Expression)
function vezes2(numero) {
    return (numero * 2);
}
teste(vezes2);
//Segunda forma de executar "teste" (Função Anonima)
teste(function(numero){ //desenvolve a função vezes2 dentro do argumento da função teste
    return (numero * 2);
});
//Terceira forma de executar "teste" (Função Arrow) - Modo 1
teste((numero) => { //omissão da function e adicionando a seta
    return (numero *2);
});
//Quarta forma de executar "teste" (Função Arrow) - Modo 2
teste(numero => (numero * 2)); // Omite os parenteses, chaves e o return, mais clean

setTimeout(_ => console.log(`Ola, Mundo`), 3000); // _ == (): utiliza-se quando não há parametros

//Recursividade -> Chamada de uma função pela mesma função
function fatorial(numero) {
    if(numero == 1) { //sempre necessário uma quebra (if), para não ficar executando infinitante
        return 1;
    }
    return numero * fatorial(numero - 1);
}
console.log(fatorial(4));
console.log(fatorial(6));
//4! = 4 * 3 * 2 * 1 = 24
