let salarioBruto = 3000;
let inss;
let irpf;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82){
  inss = 570,88;
} else {
  console.log("Valor de salário inválido");
}

console.log(inss);

let salarioSemInss = salarioBruto - inss;

if (salarioSemInss <= 1903.98 && salarioSemInss > 0) {
  irpf = 0;
} else if (salarioSemInss > 1903.98 && salarioSemInss <= 2826.65) {
  irpf = salarioSemInss * 0.075 - 142.80;
} else if (salarioSemInss > 2826.65 && salarioSemInss <= 3751.06) {
  irpf = salarioSemInss * 0.15 - 354.80;
} else if (salarioSemInss > 3751.06 && salarioSemInss <= 4664.68) {
  irpf = salarioSemInss * 0.225 - 636.13;
} else if (salarioSemInss > 4664.68) {
  irpf = salarioSemInss * 0.275 - 869.36;
}

console.log(irpf);

let salarioLiquido = salarioBruto - inss - irpf;

console.log(salarioLiquido);