function count(expression) {
  if (expression.length % 2 !== 0) {
    return -1;
  }

  let leftBrackets = 0;
  let rightBrackets = 0;

  for (let i of expression) {
    if (i === '{') {
      leftBrackets++;
    } else {
      if (leftBrackets > 0) {
        leftBrackets--;
      } else {
        rightBrackets++;
      }
    }
  }

  console.log(leftBrackets);
  console.log(rightBrackets);
  return Math.ceil(leftBrackets / 2) + Math.ceil(rightBrackets / 2);
}

console.log(count("{}"));