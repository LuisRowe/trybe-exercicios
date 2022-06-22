const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = () => Math.floor(Math.random()*(dragon.strength - 14) + 14) + 1;

const danoWarrior = () => Math.floor(Math.random()*(warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength) + 1;

const ataqueMago = () => {
  let ataque = Math.floor(Math.random()*(mage.intelligence * 2 -mage.intelligence) + mage.intelligence) + 1;
  let manaUsada = 15;
  if (manaUsada < 0) { return "Não possui mana suficiente" }
  return { Dano: ataque, ManaGasta: manaUsada };
}

console.log(ataqueMago());
