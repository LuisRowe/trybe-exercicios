const resultado = () => Math.floor(Math.random() * 5 + 1);

const aposta = (aposta, func) => {
  if(aposta === func()) {
    return 'Parabéns você ganhou'
  }
  return 'Tente novamente'
};

console.log(aposta(3, resultado));
console.log(aposta(3, resultado));
console.log(aposta(3, resultado));
console.log(aposta(3, resultado));
console.log(aposta(3, resultado));
console.log(aposta(3, resultado));
// Varios testes para testar o random.