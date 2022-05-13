let porcentagem = -5;
let nota;

if (porcentagem >= 90 && porcentagem <= 100) {
  nota = "A";
} else if (porcentagem >= 80 && porcentagem < 90) {
  nota = "B";
} else if (porcentagem >= 70 && porcentagem < 80) {
  nota = "C";
} else if (porcentagem >= 60 && porcentagem < 70) {
  nota = "D";
} else if (porcentagem >= 50 && porcentagem < 60) {
  nota = "E";
} else if (porcentagem < 50 && porcentagem > 0) {
  nota = "F";
} else {
  console.log("Nota inválida.")
}

console.log(nota);