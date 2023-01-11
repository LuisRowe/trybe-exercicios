type Slices = 4 | 6 | 8;
type Comum = "Calabresa" | "Frango" | "Pepperoni";
type Vegetariana = "Marguerita" | "Palmito" | "Cogumelo";
type Doce = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

interface Pizza {
  flavor: string,
  slice: Slices,
}

interface PizzaComum extends Pizza {
  flavor: Comum
}

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana
}

interface PizzaDoce extends Pizza {
  flavor: Doce
}

const calabresaOito: PizzaComum = {
  flavor: "Calabresa",
  slice: 8,
}

const margueritaSeis: PizzaVegetariana = {
  flavor: "Marguerita",
  slice: 6,
}

const nutellaQuatro: PizzaDoce = {
  flavor: "Nutella",
  slice: 4,
}

console.log(calabresaOito);
console.log(margueritaSeis);
console.log(nutellaQuatro);
