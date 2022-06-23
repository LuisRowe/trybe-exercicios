const adiciona = (id, nome) => { 
  let email = nome.split(' ');
  let emailjunto = email.join('_').toLowerCase(); //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return employees = {Id: id, Nome: nome, email: `${emailjunto}@trybe.com`} 
}

const newEmployees = () => {
  const employees = {
    id1: adiciona(1, 'Pedro Guerra'),
    id2: adiciona(2, 'Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: adiciona(3, 'Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());


