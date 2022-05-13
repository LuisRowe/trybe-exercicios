const notaCandidato = 59;

if (notaCandidato >= 80) {
  console.log("Aprovado!");
} else if (notaCandidato < 80 && notaCandidato >= 60)  {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

//Exercicio 4 operadores lógicos "e"

const currentHour = 2;
let message = null;

if (currentHour >= 22 || currentHour < 4) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22 ) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

//Exercicio 4 operador lógico "ou"

let weekDay = "terça-feira";

if (weekDay == "segunda-feira" || weekDay == "terça-feira"|| weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}

//Exercicio 4 operador lógico "not"

