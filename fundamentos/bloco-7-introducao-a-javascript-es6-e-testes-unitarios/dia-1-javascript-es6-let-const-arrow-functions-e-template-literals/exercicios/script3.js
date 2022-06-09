// 1 - Fatorial, não entendi o pq tem no conteudo novo.

function fatorial(number) {
  let result = 1;
  for (let index = number; index > 0; index -= 1) {
     result = result * index;
  }
  console.log(result);
}

fatorial(6);

// 2 - palavra mais longa na frase;

function longestWord(frase) {
  let arrayPalavras = frase.split(' ');
  let maiorPalavra = '';
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    maiorPalavra = arrayPalavras[index].length > maiorPalavra.length ? maiorPalavra = arrayPalavras[index]: maiorPalavra = maiorPalavra;
  }
  return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
