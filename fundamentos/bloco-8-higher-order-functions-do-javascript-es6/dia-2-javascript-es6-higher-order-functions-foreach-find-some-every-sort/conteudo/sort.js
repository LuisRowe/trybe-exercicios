const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] não funciona certo, sem parametro, para número, pois só considera o primeiro valor

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // lógica para número, se inverter a,b no parametro fica decrescente.
console.log(points); // [1, 5, 10, 25, 40, 100]

//Para fixar coloque da ordem do mais novo para o mais velho

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((a, b) => a.age - b.age); // Coloca o age no corpo da função, pois o a e b pega o item todo, ou seja o objeto.

console.log(people);