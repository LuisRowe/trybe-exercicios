function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números.'))
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject(new Error('Valor muito baixo.'))
    }
    resolve(result);
  });
}

const main = async () => {
  try {
    const resultado = await doMath(1,9,6);
    console.log(resultado);
  } catch (error) {
    console.log(error.message);
  }
}

main();