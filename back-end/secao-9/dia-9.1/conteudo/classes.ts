interface Email {
  rem: string;
  dest: string;
  assunto: string;
  mensagem: string;
}

// Email to stringfy

// ---

class Person {
  public name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(n:string, h:number, w:number, a:number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this._age = a;
    this._weight = w;
  }

  sleep() {
    console.log(`${this.name}: zZzZzZzZz`);
    
  }

  getWeight() {
    return this._weight;
  }

  get age() {
    return this._age;
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    } else {
      console.log(`Idade ${newValue} inválida! Alteração não permitida. Mantem-se ${this._age} como idade.`);
      
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 18);
const p2 = new Person('João', 175, 66, 21);

p1.name = 'Mariah';
console.log(p1.name);

console.log(p1.getWeight());

console.log(p2.age);

p2.birthday();

console.log(p2.age);

p2.age = 17;

console.log(p2.age);

console.log(p1.height);

p2.age = 300;

console.log(p2.age);
