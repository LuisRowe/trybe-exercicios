let oddsAndEvens = [13, 3, 4, 10, 7, 2];

function ordenar(array) {

  let arrumar = [];
  let guardado = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      guardado = 0;
      if (array[index2] > array[index2 + 1]) {
        guardado = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = guardado;
      }
    }
  }
}

ordenar(oddsAndEvens);

console.log(`Os números ${oddsAndEvens} se encontram ordebados de forma crescente!`); // será necessário alterar essa linha 😉

// Utilizando array.sort

let oddsAndEvensSort = [13, 3, 4, 10, 7, 2];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
oddsAndEvensSort = oddsAndEvensSort.sort((a, b) => a - b); 

console.log(oddsAndEvensSort);