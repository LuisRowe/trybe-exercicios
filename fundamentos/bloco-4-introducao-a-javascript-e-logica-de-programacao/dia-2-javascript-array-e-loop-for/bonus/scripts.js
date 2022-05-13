let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Bonus 1 - Ordenar array menor ao maior.

// let cofre = null;

// for (let contador = 0; contador < numbers.length; contador +=1){
//   for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] > numbers[index+1]){
//       cofre = numbers[index+1];
//       numbers[index+1] = numbers[index];
//       numbers[index]= cofre;
//     }
//   }
// }
// console.log(numbers);

//Bonus 2 - Ordenar array menor ao maior.

// let cofre = null;

// for (let contador = 0; contador < numbers.length; contador +=1){
//   for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] < numbers[index+1]){
//       cofre = numbers[index+1];
//       numbers[index+1] = numbers[index];
//       numbers[index]= cofre;
//     }
//   }
// }
// console.log(numbers);

//Bonus 3 - multiplicar um pelo outro.

let cofre = null;

for (let index = 0; index < numbers.length; index += 1){
  if (index + 1 == numbers.length){
    numbers[index] = numbers[index] * 2
  } else {
    numbers[index] = numbers[index] * numbers[index + 1]
  }
}
console.log(numbers);