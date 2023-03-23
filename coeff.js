//function that would solve a coefficient
function solveCoeff(equation) {
  let result;
  // remove space character fom string
  const parts = equation.replace(/\s/g, "");
  let parenthesis;
  // recursive function to get the coefficient of the equation
  function getCoeff(str) {
    let coeff = "";
    if (str[0] === "(") {
      parenthesis = str.slice(1, -1);
      return coeff;
    }
    coeff = str[0] + getCoeff(str.substring(1));
    return coeff;
  }
  const coefficient = Number(!getCoeff(parts) ? "1" : getCoeff(parts));
  const [term1, variable, operator, term2] = parenthesis.split("");
  result = `${coefficient * Number(term1)}${variable}${operator}${
    coefficient * Number(term2)
  }`;
  return result;
}

module.exports = solveCoeff;