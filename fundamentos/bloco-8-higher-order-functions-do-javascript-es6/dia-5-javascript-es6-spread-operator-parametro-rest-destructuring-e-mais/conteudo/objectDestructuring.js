// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

const {name, age, homeWorld: { name: planetName}, description: { jedi }} = character;

console.log(`Esse é o ${name}, ele tem ${age}, ele mora em ${planetName}, e, por incrível que parece ele ${(jedi)? `é um Jedi.` : `é nada.`}`);

//Fixar


const user = {
  nome: 'Maria',
  idade: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const tudo = {...user, ...jobInfos};

const {nome, idade, nationality, profession, squad, squadInitials} = tudo

console.log(tudo);

console.log(`Hi, my name is ${nome}, I'm ${idade} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);