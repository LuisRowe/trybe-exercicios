// Produza o mesmo resultado, porém utilizando array destructuring

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [ola, funcao] = saudacoes;

funcao(ola);

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const arrayInicial = [comida, animal, bebida];

[animal, bebida, comida] = arrayInicial;

console.log(comida, animal, bebida); // arroz gato água

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares; // A vírgula pula números

console.log(numerosPares); // [6, 8, 10, 12];
