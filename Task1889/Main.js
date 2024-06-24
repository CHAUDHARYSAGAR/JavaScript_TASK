// Import the Calculator class from Calculator.js
const Calculator = require('./Calculator');

// Create an instance of Calculator
const calculator = new Calculator();

let x = 10;
let y = 2;

const square = calculator.square(x);
const squareRoot = calculator.squareRoot(x);
const log = calculator.log(x);
const sin = calculator.sin(x);
const tan = calculator.tan(x);
const cos = calculator.cos(x);
const pow = calculator.pow(x,y);
const area = calculator.area(y);

console.log("Square of " + x + " = "+ square);
console.log("SquareRoot of " + x + " = "+ squareRoot);
console.log("Value of Log" + x + " = "+ log);
console.log("Value of sin" + x + " = "+ sin);
console.log("Value of cos" + x + " = "+ cos);
console.log("Value of tan" + x + " = "+ tan);
console.log("Value of " + x + " to the power " + y + " = "+ pow);
console.log("Area of circle when the value of radius is " + y + " = " + area);

