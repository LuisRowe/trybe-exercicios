const readline = require('readline-sync');

const fibonacci = (n) => {
  const sequencia = [0,1];
  for (let index = 2; index <= n; index += 1) {
    sequencia.push(sequencia[index-1] + sequencia[index-2]);
  }
   return sequencia.filter((element) => element !== 0);
}

const main = () => {
  const elementos = readline.questionInt('Quantos números da sequência Fibonacci devem ser mostrados? ')
  if (elementos <= 0) {
    console.log('Informe um número maior que zero.')
    return
  }
  console.log(fibonacci(elementos));
}

main();