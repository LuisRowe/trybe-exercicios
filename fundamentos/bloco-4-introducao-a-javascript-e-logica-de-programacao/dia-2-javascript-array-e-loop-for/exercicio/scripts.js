let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - percorre.

// for (let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index]);
// }

//2 - soma tudo.

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   resultado = numbers[index] + resultado;
// }

// console.log(resultado);

//3 - média aritmética

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   resultado = numbers[index] + resultado;
// }

// let media = resultado / numbers.length;

// console.log(media);

//4 - verifica se a média é maior que 20.

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

//5 - pegar o maior.

// let maior = Number.NEGATIVE_INFINITY;

// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > maior){
//     maior = numbers[index];
//   }
// }

// console.log(maior);

//6 - quantos impar tem.

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

//7 - pegar o menor.

// let menor = Number.POSITIVE_INFINITY;


// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] < menor){
//     menor = numbers[index];
//   }
// }

// console.log(menor);

//8 - contar até.

// let contar = [];
// let contarAte = 25;

// for (let index = 1; index <= contarAte; index +=1) {
//   contar.push(index);
// }

// console.log(contar);

//9 - contar até e dividir um a um.

// let contar = [];
// let contarAte = 25;

// for (let index = 1; index <= contarAte; index +=1) {
//   contar.push(index);
// }

// for (let index = 0; index < contar.length; index +=1){
//   let divisao = contar[index] / 2;
//   console.log(divisao);
// }