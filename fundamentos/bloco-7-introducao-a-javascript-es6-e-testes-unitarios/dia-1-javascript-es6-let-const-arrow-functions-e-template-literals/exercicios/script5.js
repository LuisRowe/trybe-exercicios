function lockingX(frase, palavra) {
  frase = frase.replace('x', palavra);
  return frase;
}

const string = 'Tryber x aqui!'

const arrayHabilities = ['HTML', 'CSS', 'JS'];

function newString(array) {
  const abertura = lockingX(string, 'Bebeto');
  array = array.sort();
  array.ToList();
  fraseImprimir = `${abertura}
  Minhas cinco habilidades são:
  ${array}
  #goTrybe`
  console.log(fraseImprimir);
}

newString(arrayHabilities);
