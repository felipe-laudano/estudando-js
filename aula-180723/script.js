// window.document  //Objeto que representa toda a hierarquia dentro do documento HTML

// window.document.getElementById();
//window: objeto, document: objeto (propriedade de window), getElementById: Propriedade. Busca pelo ID do elemento (id não pode se repetir no documento)

//document.querySelector() -> Busca do elemento com base no seu seletor CSS

// //O "window" não é necessário estar incluido, pode ser retirado
// let h1 = document.getElementById("titulo");
// // let h1 = document.querySelector("#titulo"); //paralelo ao getElementById
// console.log(h1);

// //Retorna um vetor de elementos 
// let paragrafo = document.getElementsByClassName("paragrafo") //(class pode se repetir no documento)
// // paragrafo[0].hidden = true; // manipulando elementos da página, elemento do indice 0, propriedade hidden (ocultar).
// // console.log(paragrafo);

// //busca pela tag, pouco aplicado
// let negritos = document.getElementsByTagName("b");
// console.log(negritos);

// let campoEmail = document.querySelector("input[type=email]");
// console.log(campoEmail);

// let negritoParagrafo = document.querySelector("p b");
// console.log(negritoParagrafo); // é muito utilizado, seleciona só o primeiro que encontrar

// let negritosParagrafo = document.querySelectorAll("p b");
// console.log(negritosParagrafo); // seleciona todos os b's dos p's

// let paragrafo2 = document.querySelector("p");
// paragrafo2.innerText = "Hoje na aula de JS vimos DOM"; //manipulando
// paragrafo2.innerHTML = "Hoje na aula de <b>JS</b> vimos DOM";
// console.log(paragrafo2.innerText); //conteudo textual do elemento
// console.log(paragrafo2.innerHTML); //conteudo textual + html do elemento

// uso de classes com JS
let caixa = document.querySelector('#inform');
caixa.classList.add("erro"); //adiciona uma nova classe
caixa.classList.remove("mensagem"); //remove uma classe
caixa.classList.toggle("atencao"); // adiciona se nao existe
caixa.classList.toggle("atencao"); // remove se existe
console.log(caixa);

//dica atividade: innerHTML