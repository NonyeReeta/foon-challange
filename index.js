// THIS SCRIPT IS WRITTEN TO SOLVE EQUATIONS THAT RESEMBLES THE PROVIDED USE CASES AND CAN BE IMPROVED IN SO MANY WAYS
const solveCoeff = require('./coeff');
const combineTerms = require('./combineTerms');
const solveForX = require('./solveForX')
let result = {};

// function to format the initial equation
function format(equation) {
  // remove space character fom string
    const parts = equation.replace(/\s/g, "");
    result['Problem'] = parts;
    let endPart = '';
    let subResult = '';
  function getCoeffPart(str) {
    let subEquation = "";
    if (str[0] === ")") {
        subEquation = subEquation + str[0];
        endPart = str.substring(1);
      return subEquation;
    }
      subEquation = str[0] + getCoeffPart(str.substring(1));
      return subEquation
    }
    const hasParenthesis = /\(|\)/.test(parts);
    if (hasParenthesis) {
        subResult = solveCoeff(getCoeffPart(parts)) + endPart;
        result['distribute equation'] = subResult;
        // get the equation that is at left of the equator operator and right also
        const leftSide = subResult.substring(0, subResult.indexOf('='));
        const leftSideCoeff = subResult.substring(0, subResult.indexOf("x") + 1);
        const rightSide = subResult.substring(subResult.indexOf("="));
        // function to solve for int
        function getInt(str) {
            let result = '';
            if (str[0] === 'x') {
                result = str.slice(1);
                return result;
            }
            result = getInt(str.slice(1));
            return result;
        }
        const integerResult = eval(getInt(leftSide));
        if (integerResult === 0) {
          result["solve the integers on the left side of the equator"] =
            leftSideCoeff + rightSide;
          // combining like terms
          result["Combining like terms"] = combineTerms(
              leftSideCoeff + rightSide);
            result["Solve for X"] = solveForX(
              combineTerms(leftSideCoeff + rightSide)
            );
        }
        else {
          result["solve the integers on the left side of the equator"] =
            leftSideCoeff + integerResult + rightSide;
          // combining like terms
          result["Combining like terms"] = combineTerms(
            leftSideCoeff + eval(getInt(leftSide)) + rightSide
            );
            result["Solve for X"] = solveForX(
              combineTerms(leftSideCoeff + eval(getInt(leftSide)) + rightSide)
            );
        }
    }
    else {
      // combining like terms
        result["Combining like terms"] = combineTerms(parts);
        result["Solve for X"] = solveForX(combineTerms(parts));
    }
    return result;
}


// UNCOMMENT THE THREE LINES OF CODE BELOW

console.log(format("2(4x + 3) - 6 = 24 - 4x"));
result = {};
console.log(format("7x - 2 = 21"));

module.exports = format;