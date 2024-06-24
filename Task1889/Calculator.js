class Calculator {
    
    Calculator() {

    }

    area(r) {
        const pi = 3.14;
        return pi*r*r;
    }
    cos(num) {
        return Math.cos(num);
    }
    sin(num) {
        return Math.sin(num);
    }
    log(num) {
        return Math.log10(num);
    }
    pow(x,y) {
        return Math.pow(x,y);
    }
    square(num) {
        return num*num;
    }
    squareRoot(num) {
        return Math.sqrt(num)
    }
    tan(num) {
        return Math.tan(num);
    }
    
  }

  module.exports = Calculator;