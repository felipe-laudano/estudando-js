const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea");

// function validarEmail() {
//     const valor = email.value; // captura o valor digitado no campo pelo usuario
//     if(valor.includes("@")){
//         email.style.borderColor = "green";
//     }
//     else {
//         email.style.borderColor = "red";
//     }
// };

// email.addEventListener("keyup", validarEmail); // verifica o email a cada botão pressionado no teclado



function validarCampoVazio(evento) { //Event
    const campo = evento.target; // objeto target representa o elemento que acionou o evento
    console.log(evento);
    const valor = campo.value; // captura o valor digitado no campo pelo usuario
    if(valor == "") {
        campo.style.borderColor = "red";
    }
    else {
        campo.style.borderColor = "green";
    }
};

for(let campo of campos) {
    campo.addEventListener("change", validarCampoVazio);
}