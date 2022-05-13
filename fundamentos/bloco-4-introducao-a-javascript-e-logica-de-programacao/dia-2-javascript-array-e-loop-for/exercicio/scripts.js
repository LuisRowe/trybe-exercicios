let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1

// for (let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index]);
// }

//2

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   resultado = numbers[index] + resultado;
// }

// console.log(resultado);

//3

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1){
  resultado = numbers[index] + resultado;
}

let media = resultado / numbers.length;

console.log(media);

//4