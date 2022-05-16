//1 - Fatorial

// let numero = 10;
// let fatorial = 1;

// for (let index = numero; index > 0; index -= 1) {
//   fatorial = index * fatorial;
//   console.log (fatorial);
// }

// console.log(fatorial);

//2 - Inverter palavra

// let word = 'tryber';
// let trocada = [];

// for (let index = word.length-1; index >= 0; index -= 1){
//   trocada += word[index];
// }

// console.log(trocada);

//3 - Maior palavra

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = "";
// let menor = "";

// for (let index = 0; index < array.length; index += 1){
//   if (array[index].length > maior.length) {
//     maior = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1){
//   if (array[index].length < maior.length) {
//     menor = array[index];
//   }
// }

// console.log(array[1].length)
// console.log("A maior palavra é: " + maior);
// console.log("A menor palavra é: " + menor);

//4 - Primo

// let numero = 1000;
// let ehPrimo = 1;

// for (let index = numero; index > 1; index -= 1) {
//   let verificador = 0;
//   for (let index2 = numero; index2 > 1; index2 -= 1) {
//     if (index % index2 == 0){
//       verificador += 1;
//     }
//   }
//    if (verificador === 1) {
//      ehPrimo = index;
//      break
//    }
// }

// console.log(ehPrimo);