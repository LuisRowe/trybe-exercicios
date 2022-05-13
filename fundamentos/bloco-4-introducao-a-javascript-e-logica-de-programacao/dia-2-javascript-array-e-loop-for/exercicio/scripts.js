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

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   resultado = numbers[index] + resultado;
// }

// let media = resultado / numbers.length;

// console.log(media);

//4

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   resultado = numbers[index] + resultado;
// }

// let media = resultado / numbers.length;

// if (media > 20) {
//   console.log("Valor maior que 20")
// } else {
//   console.log("Valor menor ou igual a 20")
// }

//5

// let maior = Number.NEGATIVE_INFINITY;

// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > maior){
//     maior = numbers[index];
//   }
// }

// console.log(maior);

//6

// let impar = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] % 2 == 1){
//     impar += 1;
//   }
// }

// if (impar == 0) {
//   console.log("Nenhum valor ímpar encontrado")
// } else {
//   console.log(impar)
// }

//7

// let menor = Number.POSITIVE_INFINITY;


// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] < menor){
//     menor = numbers[index];
//   }
// }

// console.log(menor);

//8

let contar = [];
let contarAte = 25;

for (let index = 1; index <= contarAte; index +=1) {
  contar.push(index);
}

console.log(contar);