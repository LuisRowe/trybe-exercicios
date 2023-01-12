class Animal {
  constructor(protected birthDate: Date) {  }

  get age() {
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );

    return Math.floor(timeDiff/(1000*3600*24)/365.25)
  }
}

// class Mammal extends Animal {
//   walk() {
//     console.log(`${this.name} está andando!`);
    
//   }
// }

class Bird extends Animal {
  constructor (public name: string) {
    super(new Date());
  }

  showBirthDate() {
    console.log(this.birthDate);
  }

  // fly() {
  //   console.log(`${this.name} está voando!`);
  // }
}

// const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')))

// const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')))

// const main = (animal: Animal) => {
//   console.log(animal.age);
//   // animal.walk(); erro não existe em Animal só em Mammal assim com fly só Bird
// }

// main(tiger);
// main(parrot);
// tiger.walk();
// parrot.fly();