const button = document.getElementById('button');
const counter = document.getElementById('counter');

function atualiza() {
  let valor = parseInt(counter.innerText) + 1;
  counter.innerText = valor;
}

button.addEventListener('click', atualiza);
