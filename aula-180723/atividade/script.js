const alunos = [
            {
                nome: "Felipe",
                idade: 21,
                nota: 10
            },
            {
                nome: "Renato",
                idade: 14,
                nota: 10
            }
        ];


function preencherTabela(vetor) {
    const table = document.querySelector("tbody");
    for(let aluno of vetor) {
        table.innerHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.nota}</td>
        </tr>
        `;
    }
}

preencherTabela(alunos);