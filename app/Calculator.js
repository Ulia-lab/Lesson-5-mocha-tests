/**
 *
 * A simple class contains methods for add multiply numbers
 * @class Calculator
 */
class Calculator {
  /**
    * Creates an instance of Calculator.
    * @memberof Calculator
    */
  constructor() {
  };
/**
   *
   *
   * @param {number} a is a first number
   * @param {number} b is a second one
   * @return {number} sum of a and b
   * @memberof Calculator
   */
  add(a, b) {
    const typeOfVariableA = typeof a;
    const typeOfVariableB = typeof b;

    if (typeOfVariableA !== 'number' || typeOfVariableB !== 'number' ) {
      throw new Error(`Variable is not a number`);
    } else {
      return a + b;
    }
  }
  /**
   *
   *
   * @param {number} a is a first number
   * @param {number} b is a second one
   * @return {number} multiply of a and b
   * @memberof Calculator
   */
  multiply(a, b) {
    const typeOfVariableA = typeof a;
    const typeOfVariableB = typeof b;

    if (typeOfVariableA !== 'number' || typeOfVariableB !== 'number' ) {
      throw new Error(`Variable is not a number`);
    } else {
      return a * b;
    }
  }
}
module.exports = Calculator;
