// let numero = 1000; // alterar esse número para qualquer outro.
// let ehPrimo = 0;

// for (let index = numero; index > 1; index -= 1) {
//   let verificador = 0;
//   for (let index2 = index; index2 > 1; index2 -= 1) {
//     if (index % index2 === 0){
//       verificador += 1;
//     }
//   }
//    if (verificador === 1) {
//      ehPrimo = index;
//     break 
//    }
// }

// console.log(ehPrimo);


// Ideia do Giovani Pereira

// let p = 1000;

// for (i = p; i > 2; i -= 1){
//   let m = Math.floor(Math.sqrt(i));
//   for (j = m; j > 1; j -= 2){
//       if (i % j == 0 || i % 2 == 0){
//           break;
//       }
//   }
//   if (j == 1){
//       console.log(i);
//       break;
//   }
// }

//Arredondar virgulas;

let numero = 36.96987

console.log(numero.toFixed(2));
