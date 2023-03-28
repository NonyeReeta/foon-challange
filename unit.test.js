const format = require('./index');
const coeff = require('./coeff');
const combineTerms = require('./combineTerms');
const solveForX = require('./solveForX');

describe("calculate equation test", () => {
  test("2(4x+3) should return 8x+6", () => {
    expect(coeff("2(4x+3)")).toEqual('8x+6');
  });
});

describe("calculate equation test", () => {
  test("8x=24-4x should return 8x+4x=24", () => {
    expect(combineTerms("8x=24-4x")).toEqual("8x+4x=24");
  });
});

describe("calculate equation test", () => {
  test("7x-2=21 should return 7x=23", () => {
    expect(combineTerms("7x-2=21")).toEqual("7x=23");
  });
});

describe('calculate equation test', () => {
    test("8x+4x=24 should return x=24/12", () => {
      expect(solveForX("8x+4x=24")).toEqual("x=24/12");
    });
})

describe("calculate equation test", () => {
  test("7x=23 should return x=23/7", () => {
    expect(solveForX("7x=23")).toEqual("x=23/7");
  });
});

describe("calculate equation test", () => {
  test("7x - 2 = 21 should return x=23/7", () => {
      expect(format("7x - 2 = 21")).toStrictEqual({
          "Combining like terms": "7x=23",
          "Problem": "7x-2=21",
          "Solve for X": "x=23/7"
      });
  });
});

describe("calculate equation test", () => {
  test("2(4x +3) +6 = 24 - 4x should return x=24/12", () => {
      expect(format("2(4x + 3) - 6 = 24 - 4x")).toStrictEqual({
        Problem: "2(4x+3)-6=24-4x",
        "distribute equation": "8x+6-6=24-4x",
        "solve the integers on the left side of the equator": "8x=24-4x",
        "Combining like terms": "8x+4x=24",
        "Solve for X": "x=24/12",
      });
  });
});
