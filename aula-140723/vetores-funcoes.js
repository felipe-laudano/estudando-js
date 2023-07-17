const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7, 10, 11];
// console.log(nums);

// nums.push(4); // adiciona um elemento ao final do vetor (frequentemente usado) - MODIFICA O VETOR
// console.log(nums);

// nums.unshift(9);
// console.log(nums); // adiciona um elemento no inicio do vetor - MODIFICA O VETOR

// nums.pop(); // remove o ultimo elemento do vetor - MODIFICA O VETOR
// console.log(nums);

// nums.shift(); // remove o primeiro elemento do vetor - MODIFICA O VETOR
// console.log(nums);

// let juncao = nums.join("-"); // faz a junção dos elementos do vetor separados por um traço, transforma em uma string. Podem ser usadas virgulas e outros - NÃO MODIFICA O VETOR
// console.log(juncao);

// let vetor2 = [5, 6, 7];
// let vetor3 = nums.concat(vetor2); // concatena outro vetor dentro de nums, adicionando os elementos no final do vetor, porém é preciso armazenar em outra variavel. - NÃO MODIFICA O VETOR
// console.log(vetor3);

// // nums.push(100, 101, 110, 1000);
// console.log(nums.sort()); // ordena o vetor na ordem ALFABETICA e não numerica - MODIFICA O VETOR
// console.log(nums);

// // const nomes = ["Felipe", "Gustavo", "Renato", "Teresinha", "Jurandir", "José"]; // comprovando a ordenação alfabetica do sort
// // console.log(nomes.sort());

// console.log(nums.reverse()); // ordena na ordem reversa - MODIFICA O VETOR
// console.log(nums);

// console.log(nums.includes(10)); // verifica se o item dentro do parenteses existe no vetor (boolean)

// // console.log(nums.fill(9, 5)); // substitui os itens a partir da 5º posição, todos por 9 - MODIFICA O VETOR 
// // console.log(nums.fill(7, 2, 6)); // substitui os itens a partir da 2º posição até a 6º, todos por 7 - MODIFICA O VETOR 
// // console.log(nums.fill(0)); // substitui todos os itens por 0 - MODIFICA O VETOR 

// console.log(nums);
// console.log(nums.indexOf(10)); // mostra o indice do item que foi passado como argumento, -1 quer dizer que não existe o item no vetor

// console.log(nums);
// console.log(nums.splice(6, 3)); // remove elementos do vetor, a partir do indice 6, 3 elementos, ou seja, os itens dos indices 6, 7 e 8 (LEMBRANDO QUE O INDICE COMEÇA DO 0). - MODIFICA O VETOR
// console.log(nums);

// console.log(nums.slice(2, 4)); // Recorta o vetor do indice 2 ao 4-1, ou seja, os itens dos indices 2 e 3. - NÃO MODIFICA O VETOR
// console.log(nums);

// for(let num of nums) { // iteração dos valores do vetor com for, do primeiro ao ultimo elemento
//     console.log(num);
// }

// nums.forEach(num => console.log(num)); // mesmo caso do for de cima, porém de outra forma, mais enchuta e utilizando uma arrow function. Itera sobre os elementos do vetor

// reduce -> efetuar a redução dos valores do vetor em um valor acumulativo
// console.log(nums);
// console.log(nums.reduce((acumulador, num) => (acumulador + num)));
// console.log(nums.reduce((acumulador, num) => (acumulador - num), 0)); // se não passar o 0 como argumento, acumulador inicia com o primeiro valor de nums

// console.log(nums.map(num => num * 2)); // NÃO MODIFICA O VETOR. Multiplica todos os valores por 2, dentro do vetor
// console.log(nums);

// console.log(nums);
// console.log(nums.find(num => (num > 8))); //calback retorna um booleano, find retorna o primeiro valor que corresponde a condição especificada

// console.log(nums.filter(num => (num > 8))); // retorna um vetor com todos os elementos que correspondem a condição, ao invés do find que retorna apenas 1
// console.log(nums);

const names = [
    "João Silva",
    "Maria Santos",
    "Pedro Almeida",
    "Ana Oliveira",
    "Carlos Sousa",
    "Mariana Costa",
    "José Pereira",
    "Camila Gomes",
    "Antônio Rodrigues",
    "Luiza Sousa",
    "Fernando Lima",
    "Amanda Barbosa",
    "Rafael Carvalho",
    "Isabela Castro",
    "Francisco Pereira",
    "Laura Rocha",
    "Ricardo Cardoso",
    "Letícia Ribeiro",
    "Daniel Santos",
    "Lúcia Oliveira",
    "Rodrigo Alves",
    "Patrícia Costa",
    "Gustavo Ferreira",
    "Sofia Sousa",
    "Marcelo Silva",
    "Beatriz Rocha",
    "André Castro",
    "Carolina Souza",
    "Gabriel Braga",
    "Natália Sousa"
];

console.log(names.find(nome => nome.includes("Rocha"))); // Laura Rocha
console.log(names.filter(nome => nome.includes("Sousa"))); // todos com Sousa
console.log(names.filter(nome => !nome.includes("Letícia"))); // todos menos Leticia

//Uso da crase
let nome = `Felipe`;
let idade = 21;
let mensagem = `Nome: ${nome}\nIdade: ${idade}`; // Interpolação, \n pula linha
console.log(mensagem);

console.log(nome[2]); // perfeitamente válido -> retorna "l"
