import { livros } from "./livros.js";

/* Objetivo:
    Você deve desenvolver uma página que exiba uma tabela de livros utilizando JavaScript e módulos. Seu objetivo é criar um módulo para gerenciar os dados dos livros e outro módulo para manipular a exibição da tabela na página.
Instruções:
    Crie um arquivo HTML com a estrutura básica da página, contendo uma tabela vazia (sem dados), onde os livros serão exibidos posteriormente.
    
    Crie um arquivo JavaScript chamado "livros.js" que será responsável por gerenciar os dados dos livros. Neste arquivo, você deve exportar um vetor de livros que amazene objetos com as propriedades: título, autor, ano de publicação e gênero.
    
    Crie um segundo arquivo JavaScript chamado "tabelaLivros.js" que será responsável por manipular a exibição da tabela na página HTML. Neste arquivo, você deve importar o vetor do arquivo "livros.js".
    
    Ainda no arquivo "tabelaLivros.js", crie uma função chamada exibirTabela que será responsável por criar as linhas da tabela na página HTML com os dados dos livros. Essa função deve ser chamada quando a página for carregada. */

    function exibirTabela(livros) {
        const tabela = document.querySelector("#table-books");
        tabela.innerHTML = "";
        livros.forEach(livro => {
        tabela.innerHTML += 
            `<tr> 
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.anoPublicacao}</td>
                <td>${livro.genero}</td>
            </tr>`;
    });
}
exibirTabela(livros);