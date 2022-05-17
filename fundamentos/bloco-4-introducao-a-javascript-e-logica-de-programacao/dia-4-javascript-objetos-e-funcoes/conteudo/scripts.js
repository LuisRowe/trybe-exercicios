//Para fixar - objetos

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let objeto = {
//   name: "Marta",
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,
//   },
//   bestInTheWorld: [2006,2007,2008,2009,2010,2018],
// }

// console.log("A jogadora " + objeto.name + " " + objeto.lastName + " tem " + objeto.age + " anos de idade.")

// console.log("A jogadora " + objeto.name + " " + objeto.lastName + " foi eleita a melhor do mundo por " + objeto.bestInTheWorld.length + " vezes.")

// console.log("A jogadora possui " + objeto.medals.golden + " medalhas de ouro e " + objeto.medals.silver + " medalhas de prata.")

//Para fixar - for/in e for/of

//1
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let imprimir in names){
  console.log("Olá " + names[imprimir]);
}

//2
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key + " : " + car[key]);
}