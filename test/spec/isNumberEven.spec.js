const NumbersValidator = require('../../app/numbers_validator');
const {expect} = require('chai');

describe('isNumber event positive scenario', function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return true if number is even', function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it('should return false if number is not even', function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
  it('should return false if number is not even', function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
});
