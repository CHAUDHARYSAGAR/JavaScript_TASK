function calculator(func, ...args) {
    if (typeof func !== 'function') {
        throw new Error('First argument must be a function');
      }
      else if(func.length !== args.length){
        console.log("Number of argument is not equal to the requirement");
    } else {
        return func(...args);
    }
}

const Addition = (a, b) => a + b;

const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

const areaOfRectangle = (length, width) => length * width;

const areaOfCircle = radius => Math.PI * radius * radius;



console.log(calculator(areaOfCircle, 5));
console.log(calculator(Addition, 5,6));
console.log(calculator(areaOfRectangle, 5,4));
console.log(calculator(celsiusToFahrenheit, 5));


