//Variável do programador - deu 5;

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, 3));

//2 - usuário colocou string - deu 23;

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, '3'));

//Verificação se tudo é número com 'typeof';

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));