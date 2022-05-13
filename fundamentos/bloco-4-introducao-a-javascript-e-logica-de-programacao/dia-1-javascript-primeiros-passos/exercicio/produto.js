let valorCusto = 1000;
let valorVenda = 1500;

let impostoSobreProduto = 0.2 * valorCusto;

let valorCustoTotal = valorCusto + impostoSobreProduto;

let lucro = valorVenda - valorCustoTotal;

if (valorCusto > 0 && valorVenda > 0 && lucro > 0) {
  console.log("O lucro ao vender mil peças é de R$" + 1000*lucro)
} else if (valorCusto > 0 && valorVenda > 0 && lucro < 0) {
  console.log("O prejuizo ao vender mil peças é de R$" + 1000*lucro*-1)
} else {
  console.log("Algum dos valores inicial é menor que zero.")
}
