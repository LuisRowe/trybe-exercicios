const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrigindo = (gabaritoq, respostaq) => {
  if (gabaritoq === respostaq) {
    return 1
  }
  if (respostaq === 'N.A') {
    return 0
  }
  return (-0.5)
}

const correcao = (gabarito, respostas, checar) => {
  let pontos = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
     pontos += checar(gabarito[index], respostas[index]);
  }
  return pontos
}

console.log(correcao(RIGHT_ANSWERS, STUDENT_ANSWERS, corrigindo));