class Validation{
    checkType(num1,num2){
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return true;
        }
        return false;
    }
    cheNumberOfArguments(){
        if(arguments.length !== 2){
            return true;
        }
        return false;
    }
    validateVariable(num1,num2){
        if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
            return true;
          }
        return false;
    }

}

module.exports = Validation;