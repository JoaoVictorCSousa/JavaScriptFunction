const prompt = require('prompt-sync')();
const bmi = require('./calculator');

console.log('----------BMI CALCULATOR-----------<br>')
console.log('Type your weight: ')
const weightText = prompt('-->')
const weight = Number(weightText)

console.log('Type your height: ');
const heightText = prompt('-->')
const height = Number(heightText)

console.log(`Your Body Max Index is: ${Math.round(bmi(weight,height))} `)

