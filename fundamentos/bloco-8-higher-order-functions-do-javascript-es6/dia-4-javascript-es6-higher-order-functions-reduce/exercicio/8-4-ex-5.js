// Quantas letras 'a' tem?

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(nomes) {
  const string = nomes.reduce((acc, curr) => acc + curr, '').toLowerCase();
  let contador = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      contador += 1;
    }  
  }
  return contador;
};

console.log(containsA(names));