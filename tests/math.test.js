// mathFunctions.test.ts
const { add, subtract, multiply, divide } = require('../dist/math');
// import { add, subtract, multiply, divide } from '../dist/math';

describe('Math Functions', () => {
  test('Addition', () => {
    let a = 1;
    let b = 2;
    
    console.log("===========ADDITION===============")
    for(i = 0; i <= 2; i++){
      let c = a++
      let d = b++
      expect(add(c, d)).toBe(c+d);
      console.log("raw:" + add(c,d) + ", expected: " + (c+d))
    }
    console.log("==================================")

  });

  test('Subtraction', () => {
    let a = 1;
    let b = 2;
    
    console.log("===========Substract===============")

    for(i = 0; i <= 2; i++){
      let c = a++
      let d = b++
      expect(subtract(c, d)).toBe(c-d);
      console.log("raw:" + subtract(c,d) + ", expected: " + (c-d))
    }

    console.log("===============================")

  });

  test('Multiplication', () => {
    let a = 1;
    let b = 2;
    
    console.log("===========MULTIPLY===============")

    for(i = 0; i <= 2; i++){
      let c = a++
      let d = b++
      expect(multiply(c, d)).toBe(c*d);
      console.log("raw:" + multiply(c,d) + ", expected: " + (c*d))
    }

    console.log("====================================")

  });

  test('Division', () => {
    let a = 1;
    let b = 2;
    
    console.log("===========DIVISION===============")

    for(i = 0; i <= 2; i++){
      let c = a++
      let d = b++
      expect(divide(c, d)).toBe(c/d);
      console.log("raw:" + divide(c,d) + ", expected: " + (c/d))
    }

    console.log("====================================")

  });

  test('Division by zero', () => {
    console.log("===========DIVIDE BY ZERO===============")

    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });
});
