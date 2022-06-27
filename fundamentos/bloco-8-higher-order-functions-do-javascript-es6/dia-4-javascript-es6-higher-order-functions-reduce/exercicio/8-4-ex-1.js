const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrays) {
  // escreva seu código aqui
  return arrays.reduce((arrays, arrayRet) => arrayRet.concat(arrays), []); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat concat array
}

console.log(flatten(arrays));