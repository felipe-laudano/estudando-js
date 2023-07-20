const vermelho = document.querySelector("#vermelho");
const amarelo = document.querySelector("#amarelo");
const verde = document.querySelector("#verde");
const automatico = document.querySelector("#automatic");
const divSemaforo = document.querySelector("#semaforo");
const img = document.querySelector("#img");

const cores = ["images/vermelho.png", "images/amarelo.png", "images/verde.png"];

let indice = 1;
let interval;

vermelho.addEventListener("click", () => {
    clearInterval(interval);
    divSemaforo.innerHTML = `
        <img src="images/vermelho.png" alt="vermelho">
    `
});

amarelo.addEventListener("click", () => {
    clearInterval(interval);
    divSemaforo.innerHTML = `
        <img src="images/amarelo.png" alt="amarelo">
    `
});

verde.addEventListener("click", () => {
    clearInterval(interval);
    divSemaforo.innerHTML = `
        <img src="images/verde.png" alt="verde">
    `
});

automatico.addEventListener("click", () => {
    interval = setInterval(() => {
        img.src = cores[indice];
        if(indice == (cores.length-1)) {
            indice = 0;
        }
        else {
            indice++;
        }
    }, 1500);
});
    