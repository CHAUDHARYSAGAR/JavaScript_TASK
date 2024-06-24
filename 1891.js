// Function to perform addition
function add(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  // Function to perform subtraction
  function subtract(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc - num);
  }
  
  // Function to perform multiplication
  function multiply(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc * num, 1);
  }
  
  // Function to perform division
  function divide(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc / num);
  }
  
  // Usage examples:
  console.log(add(9, 4, 12, 16, 23, 43));
  console.log(subtract(100, 20, 10));
  console.log(multiply(2, 3, 4));
  console.log(divide(100, 2, 5));
  