// Import the ClassName class from Calculator.js
const ClassName = require('./Calculator');

// Create an instance of ClassName
const calculator = new ClassName();

let value1 = 6;
let value2 = 5;

const add = calculator.addition(value1,value2);
const sub  = calculator.subtraction(value1, value2);
const mul  = calculator.multiplication(value1, value2);
const div = calculator.division(value1, value2);
const mod = calculator.modulus(value1, value2);

console.log("Addition of "+value1+ " and "+value2+" = "+ add);
console.log("Subtraction of "+value1+ " and "+value2+" = "+ sub);
console.log("Multiplication of "+value1+ " and "+value2+" = "+ mul);
console.log("Division of "+value1+ " and "+value2+" = "+ div);
console.log("Modulus of "+value1+ " and "+value2+" = "+ mod);
