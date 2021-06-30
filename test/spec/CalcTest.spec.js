const Calculator = require('../../app/Calculator');
const {expect} = require('chai');

describe('Calculator positive scenario', function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return 7 for 3+4', function() {
    expect(validator.add(4, 3)).to.be.equal(7);
  });
  it('should return 4 for 0 + 4', function() {
    expect(validator.add(0, 4)).to.be.equal(4);
  });
  it('should return 3 for -1 + 4', function() {
    expect(validator.add(-1, 4)).to.be.equal(3);
  });
  it('should return 0 for 0 * 4', function() {
    expect(validator.multiply(0, 4)).to.be.equal(0);
  });
  it('should return 12 for 3 * 4', function() {
    expect(validator.multiply(3, 4)).to.be.equal(12);
  });
  it('should return 3 for -1 * 4', function() {
    expect(validator.add(-1, 4)).to.be.equal(3);
  });
});
