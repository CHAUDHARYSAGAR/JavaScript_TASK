const calculator = (expression) => {
    for (let i = 0; i < expression.length; i++) {
        const element = expression[i];
        if (!typeValidator(element, 'number') && !operatorValidator(element)) {
            console.error(`Error: Invalid element '${element}' in expression`);
            throw new Error('Invalid element in expression');
        }
    }

    try {
        return eval(expression);
    } catch (err) {
        console.error('Error evaluating expression:', err.message);
        throw err;
    }
}

const typeValidator = (element, type) => {
    if (type === 'number') {
        return !isNaN(element);
    } else {
        return typeof element === type;
    }
}

const operatorValidator = (op) => {
    return ['+', '-', '*', '/', '%', '(', ')', '[', ']'].includes(op);
}

try {
    console.log(calculator("1+(2+3)*d-10/2"));
} catch (err) {
    console.error('Calculator failed:', err.message);
}
