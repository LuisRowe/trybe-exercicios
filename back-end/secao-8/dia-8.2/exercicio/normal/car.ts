class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk = ():void => {
    console.log('biiiiii');
  }

  turnOn = ():void => {
    console.log('vruuum (ligando)');
  }

  turnOff = ():void => {
    console.log('... (desligou)');
  }

  speedUp = ():void => {
    console.log('celéra');
  }

  speedDown = ():void => {
    console.log('frea');
  }

  stop = ():void => {
    console.log('friiiiii (cavalo de pau, parou)');
  }

  turn = (direction: string):void => {
    console.log(`virou para a ${direction}`);
  }
}

export default Car;