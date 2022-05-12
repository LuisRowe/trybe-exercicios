const notaCandidato = 59;

if (notaCandidato >= 80) {
  console.log("Aprovado!");
} else if (notaCandidato < 80 && notaCandidato >= 60)  {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}