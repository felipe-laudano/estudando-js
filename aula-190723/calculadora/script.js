//eval
const btns = document.querySelectorAll(".pressable");
const btnAC = document.querySelector("#ac");
const btnCalc = document.querySelector("#calc");
const visor = document.querySelector("#visor");

for(let btn of btns) {
    btn.addEventListener("click", (evento) => {
        const text = evento.target.innerText;
        visor.value += text;
    });
}

btnAC.addEventListener("click", () => {
    visor.value = "";
});

btnCalc.addEventListener("click", () => {
    let expressao = visor.value.replaceAll(",", ".");
    let resultado = eval(expressao).toString().replaceAll(".", ",");
    visor.value = resultado;
});