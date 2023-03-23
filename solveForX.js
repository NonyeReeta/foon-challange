// function the would finally solve for x
function solveForX(equ) {
  const equationToSolve = equ.split("=")[0];
  const rightSide = equ.split("=")[1];
  const operator = equationToSolve.includes("+") ? "+" : "-";
  const [num1, num2] = equationToSolve.split(operator);
  const result = num2
    ? Number(num1.slice(0, -1)) + Number(operator + num2.slice(0, -1))
    : num1.slice(0, -1);
  return `x=${rightSide}/${result}`;
}

module.exports = solveForX;