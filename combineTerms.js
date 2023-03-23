// function to seperate like term in an equation
function combineTerms(equation) {
  let combinedTerms = "";
  const seperateEqu = equation.split("=");
  let left = seperateEqu[0].split(/[+\-]/g);
  let right = seperateEqu[1].split(/[+\-]/g);
  // taking the operator on the left side of the equation and converting it
  let newRightOperator = seperateEqu[0].includes("+") ? "-" : "+";
  // taking the operator on the right side of the equation and converting it
  let newLeftOperator = seperateEqu[1].includes("+") ? "-" : "+";
  let leftSide = "";
  let rightSide = 0;
  left.map((variable) => {
    if (!Number(variable)) {
      leftSide += variable;
    } else {
      rightSide += Number(newRightOperator + variable);
    }
  });
  right.map((variable) => {
    if (!Number(variable)) {
      leftSide += newLeftOperator + variable;
    } else {
      rightSide += Number(variable);
    }
  });
  combinedTerms += `${leftSide}=${rightSide}`;
  return combinedTerms;
}

module.exports = combineTerms;