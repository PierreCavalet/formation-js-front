console.log('Exercice 3: Array filter');

// Exercice 3.1
console.log('Exercice 3.1');
var input1 = [0, 1, 2, 3];
var result1;

// TODO: from the input1, create an array result1 that contains
// only the odd number in input1
// ex: [0, 1, 2, 3] -> [1, 3]
result1 = input1.filter(num => num % 2 === 1);

console.log('input', input1);
console.log('result', result1);
