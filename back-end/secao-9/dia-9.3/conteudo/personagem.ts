abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk() { console.log('oi'); }
  specialMove() {console.log('soco');}
}

class LongRangeCharacter extends Character {
  talk() { console.log('oi'); }
  specialMove() {console.log('flecha');}
}

const falaBate = (personagem: Character): void => {
  personagem.talk();
  personagem.specialMove();
}

const socador = new MeleeCharacter();
const flechador = new LongRangeCharacter();

falaBate(socador);
falaBate(flechador);