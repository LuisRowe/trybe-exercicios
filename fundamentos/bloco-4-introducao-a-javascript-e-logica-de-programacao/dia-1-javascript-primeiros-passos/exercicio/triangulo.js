const a = 90;
const b = 0;
const c = 90;
let triangulo;

let soma = a+b+c;

if (soma == 180 && (a > 0 && b > 0 && c > 0)) {
  triangulo = true
} else if (soma != 180) {
  triangulo = "Deu ruim. Soma dos angulos não deu 180"
} else if (a <= 0 || b <= 0 || c <= 0) {
  triangulo = "Deu ruim. Tem angulo com valor negativo ou igual a zero."
} else {
  triangulo = "Aconteceu algo que eu não previ, mas deu ruim."
}

console.log(triangulo);
