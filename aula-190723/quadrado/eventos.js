// Evento - Ação (Clique do mouse, teclar, movimentar o cursor do mouse)

// click -> clique do mouse
// dblclick -> duplo clique do mouse
// keydown -> Apertar o botão 
// keyup -> Soltar o botão
// mouseover -> Mover o ponteiro do mouse sobre o elemento
// mouseout -> Mover o ponteiro do mouse para fora do elemento
// submit -> Submeter os dados de um formulário
// change -> Alterar o valor de um campo de formulário (ex: habilitar/desabilitar um checkbox)
// focus -> Evento acionado quando o foco está sobre o elemento

const quadrado = document.querySelector("#quadrado");
console.log({quadrado});

quadrado.onclick = () => { // primeira forma de adicionar um "ouvidor de evento"
    quadrado.style.backgroundColor = "#003049";
    // quadrado.style.borderRadius = "100px"
    quadrado.style.transform = "translateY(200px)";
}

quadrado.ondblclick = () => {
    quadrado.style.borderRadius = "0";
    quadrado.style.backgroundColor = "#1e90ff";
    quadrado.style.transform = "translateY(0)";
}

function changeColorSquare() { // esta função está sendo chamada no HTML (pratica não utilizada)
    quadrado.style.backgroundColor = "#003049";
}

quadrado.addEventListener("mouseout", () => { //pratica mais utilizada para "ouvidor de evento"
    quadrado.style.backgroundColor = "#1e90ff";
}); 