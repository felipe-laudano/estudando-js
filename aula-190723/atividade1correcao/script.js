const vermelho = document.querySelector("#vermelho");
const amarelo = document.querySelector("#amarelo");
const verde = document.querySelector("#verde");
const automatico = document.querySelector("#automatic");
const divSemaforo = document.querySelector("#semaforo");

const cores = ["images/vermelho.png", "images/amarelo.png", "images/verde.png"];

let indice = 1;
let interval;

vermelho.addEventListener("click", () => {
    clearInterval(interval);
    divSemaforo.src = cores[0];
});

amarelo.addEventListener("click", () => {
    clearInterval(interval);
    divSemaforo.src = cores[1];
});

verde.addEventListener("click", () => {
    clearInterval(interval);
    divSemaforo.src = cores[2];
});

automatico.addEventListener("click", () => {
    interval = setInterval(() => {
        divSemaforo.src = cores[indice];
        if(indice == (cores.length-1)) {
            indice = 0;
        }
        else {
            indice++;
        }
    }, 1000);
});
    