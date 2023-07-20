//Date -> Data é objeto que facilita o uso de data com JavaScript
let data = new Date();
console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());

let agora = Date.now(); // gera a data e hora atual em milissegundos
console.log(agora);

const btn = document.querySelector("#enviar");

btn.addEventListener("click", () => {
    const dataCampo = document.querySelector("#dataNasc");
    const valor = dataCampo.value;
    const vetorData = new Date(valor);
    console.log(data.toLocaleDateString());
})