function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable); //O log imprime a função, pois é chamada sem parametro.
//  [Function: sum]

const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello); //O log imprime a execução da função printGreeting, que por sua vez usa como parametro a função sayHello qu retorna a string 'hello trybers', logo printGreeting imprime a string retorno de sayHello

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15);
console.log(initialSum(5)); // A const estabelece o valor inicial em 15, correndo a função sumFixAmount, e o log inclui o parametro 5 para a função de retorno.
console.log(initialSum(2)); // Mas não substitui para sempre, somento no log.