console.log('Exercice 1: Array map');

// Exercice 1.1
console.log('Exercice 1.1');
var input1 = [0, 1, 2, 3];
var result1;

// TODO: from the input1, create an array result1 that contains
// the same value + 1 using the map function
// ex: [0, 1, 2, 3] -> [1, 2, 3, 4]
result1 = input1.map(number => number + 1);

console.log('input', input1);
console.log('result', result1);

// Exercice 1.2

console.log('Exercice 1.2');
var input2 = ["a", "ab", "abc", "abcd"];
var result2;

// TODO: from the input2, create an array result2 that contains
// the string length of each mapped element
// ex: ["a", "ab", "abc", "abcd"] -> [1, 2, 3, 4]
result2 = input2.map(myString => myString.length);

console.log('input', input2);
console.log('result', result2);

// Exercice 1.3

console.log('Exercice 1.3');
var input3 = [
  {
    firstName: 'Jack',
    lastName: 'Sparrow'
  },
  {
    firstName: 'Davy',
    lastName: 'Jones'
  },
  {
    firstName: 'Hector',
    lastName: 'Barbossa'
  }
];
var result3;

// TODO: from the input3, create an array result3 that contains
// the only the last name of each character
// ex: [
//   {
//     firstName: 'Jack',
//     lastName: 'Sparrow'
//   },
//   {
//     firstName: 'Davy',
//     lastName: 'Jones'
//   },
//   {
//     firstName: 'Hector',
//     lastName: 'Barbossa'
//   }
// ] -> ['Sparrow', 'Jones', 'Barbossa']
result3 = input3.map(character => character.lastName);

console.log('input', input3);
console.log('result', result3);
