let peça = "CAVALO";

if (peça.toLowerCase() == "peão") {
  console.log("Anda uma casa para frete, ao sair de sua casa inicial pode andar duas casas para frente. Captura na digonal. Não pula peças.");
} else if (peça.toLowerCase() == "torre"){
  console.log("Anda e captura na vertical e horizontal, quantas casas quiser. Não pula peças.");
} else if (peça.toLowerCase() == "bispo") {
  console.log("Anda e captura na diagonal, quantas casas quiser. Não pula peças.");
} else if (peça.toLowerCase() == "rainha") {
  console.log("Anda e captura na diagonal, vertical e horizontal, quantas casas quiser. Não pula peças.");
} else if (peça.toLowerCase() == "rei") {
  console.log("Anda e captura na diagonal, vertical e horizontal, apenas uma casa. Não pula peças. Se for capturado, game over, vitória para quem capturou.");
} else if (peça.toLowerCase() == "cavalo") {
  console.log("Anda em L, dois na vertical e um na horizontal, ou, dois na horizontal e um na vertical. Pula peças, iuhuuulll!, mas captura apenas a peças no final do movimento, não da triple kill.");
} else {
  console.log("Peça inválida, veja se errou a digitação ou inventou uma nova peça.")
}