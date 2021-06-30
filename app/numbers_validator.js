/**
 *
 * A simple class contains methods for validation numbers
 * @class NumbersValidator
 */
class NumbersValidator {
  /**
    * Creates an instance of NumbersValidator.
    * @memberof NumbersValidator
    */
  constructor() {
  };
  /**
       *
       *
       * @param {*} number to check
       * @return {*} true if number is even
       * @memberof NumbersValidator
       */
  isNumberEven(number) {
    const typeOfVarieble = typeof number;
    if (typeOfVarieble !== 'number') {
      throw new Error(`${number} is not of ${typeOfVarieble}`);
    } else {
      return number % 2 === 0;
    }
  }

  /**
     *
     *
     * @param {Array<Number>} arrayOfNumbers
     * @return {Array<Number>}
     * @memberof NumbersValidator
     */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
            arrayOfNumbers.every((item) => typeof item === 'number')) {
      // eslint-disable-next-line max-len
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    } else {
      throw new Error(`${arrayOfNumbers} is not array of numbers`);
    }
  }
}

module.exports = NumbersValidator;
