class SuperClass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
    
  }
}

class SubClass extends SuperClass { 
  constructor() {
    super();
    this.isSuper = false;
  }
}

const superC = new SuperClass();
const subC = new SubClass();

const myFunc = (item: SuperClass) => {
  item.sayHello();
  console.log(item.isSuper ? 'Super!' : 'Sub!');
}

myFunc(superC);
myFunc(subC);
