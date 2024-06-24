// Import the ClassName class from Calculator.js
const ClassName = require('./Calculator');
// Import the Validation class from Validation.js
const Validation = require('./Validation');

// Create an instance of ClassName
const calculator = new ClassName();

// Create an instance of Validation
const validation = new Validation();

let value1 = 6;
let value2 = 9;

if(validation.validateVariable(value1, value2)){
    console.log("Error: One or both arguments are not defined.");
}
else if(validation.checkType(value1,value2)){
    console.log("Error: Both arguments must be numbers");
}
else if(validation.cheNumberOfArguments(value1,value2)){
    console.log("Error: Incorrect number of arguments. Expected 2.");
}
else{
    const add = calculator.addition(value2);
    const sub = calculator.subtraction(value1, value2);
    const mul = calculator.multiplication(value1, value2);
    const div = calculator.division(value1, value2);
    const mod = calculator.modulus(value1, value2);

    console.log("Addition of "+value1+ " and "+value2+" = "+ add);
    console.log("Subtraction of "+value1+ " and "+value2+" = "+ sub);
    console.log("Multiplication of "+value1+ " and "+value2+" = "+ mul);
    console.log("Division of "+value1+ " and "+value2+" = "+ div);
    console.log("Modulus of "+value1+ " and "+value2+" = "+ mod);
}