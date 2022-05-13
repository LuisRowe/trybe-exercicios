let nota = "Reprovada";

switch (nota) {
  case "Aprovada":
    console.log("Aprovado!");
    break;
  case "Lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "Reprovada":
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("Não se aplica");
    break;
}