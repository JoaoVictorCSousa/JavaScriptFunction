const prompt = require('prompt-sync')();

function calculate (weight, height) {

    const bmi = weight / (Math.pow(height,2));

    return bmi;


}

module.exports=calculate
