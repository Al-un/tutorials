const calc = require('./calc');

const numbersToAdd = [3,4,10,2];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number 1: ', (answer1) => {

    rl.question('Enter number 2: ', (answer2) => {
        const inputs = [new Number(answer1), new Number(answer2)];
        console.log(`custom sum is ${calc.sum(inputs)}\n`);
        rl.close();
        
        const result = calc.sum(numbersToAdd);
        console.log(`Result is ${result}\n`);
    })

});

