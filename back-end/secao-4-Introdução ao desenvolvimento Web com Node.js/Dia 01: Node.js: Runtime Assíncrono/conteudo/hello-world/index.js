// const readline = require('readline-sync');

// const nome = readline.question('Fala teu nome completo ae: ');
// const idade = readline.questionInt('Fala tua idade ae: ');

// console.log(`Beleza ${nome}? Tu tem ${idade} anos? Ta velho heim?`);

// const fs = require('fs').promises;

// async function main() {
//   try {
//     const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// main()

const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()