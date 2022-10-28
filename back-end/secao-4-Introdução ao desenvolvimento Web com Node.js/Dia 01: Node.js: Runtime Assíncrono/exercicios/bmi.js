const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4999,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9999,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9999,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9999,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9999,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const bmi = (weight, height) => {
  if (height > 3) {height = height / 100}
  const result = weight / (height ** 2);
  return result
}

function handleBMI(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

const main = () => {
  const weight = readline.questionFloat("What's your weight? ");
  const height = readline.questionInt("What's your height? ");
  const bmiResult = bmi(weight,height);
  console.log(`Your BMI is: ${bmiResult.toFixed(2)}`);
  const bmiType = (handleBMI(bmiResult));
  console.log(bmiType);
}

main();