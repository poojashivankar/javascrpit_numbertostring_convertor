var readlineSync = require('readline-sync');
const { ToWords } = require('to-words');

const toWords = new ToWords();

console.log("Number to String Convertor")

var number = readlineSync.question();


console.log("Before number is :")
console.log(number)
console.log("After number is :")
console.log(toWords.convert(number, { currency: true }))