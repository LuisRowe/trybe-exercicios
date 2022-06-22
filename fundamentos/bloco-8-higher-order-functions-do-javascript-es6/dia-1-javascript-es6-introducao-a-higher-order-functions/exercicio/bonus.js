const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 50,
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

const danoMage = () => {
  let ataque = Math.floor(Math.random()*(mage.intelligence * 2 -mage.intelligence) + mage.intelligence) + 1;
  let manaUsada = 15;
  if (mage.mana < 15) { 
    console.log("Não possui mana suficiente");
    return { Dano: 0, ManaGasta: 0 };
}
  return { Dano: ataque, ManaGasta: manaUsada };
}

const gameActions = {
  // Crie as HOFs neste objeto.
  turnoWarrior: () => {dragon.healthPoints = dragon.healthPoints - danoWarrior()},
  turnoMage: () => {

    dragon.healthPoints = dragon.healthPoints - Object.values(danoMage())[0];
    mage.mana = mage.mana - Object.values(danoMage())[1];
  },
}

gameActions.turnoWarrior();

console.log(dragon);

gameActions.turnoMage();

console.log(dragon);
