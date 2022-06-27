const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = (numeros) => numeros.reduce((resultado,numero) => (numero % 2 === 0) ? resultado + numero : resultado);

console.log(somaPar(numbers));