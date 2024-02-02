require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply(num1, num2)).to.eq(62)
    });
  });
  describe('index.js', function() {
    describe('random', function() {
      it("generates a random integer greater than 0", function() {
        const randomNumber = random(); // Invoke the random function
        console.log('Random:', randomNumber);
        console.log('Is integer?', Number.isInteger(randomNumber));
        expect(Number.isInteger(randomNumber)).to.be.true;
        expect(randomNumber).to.be.above(0); // Use `above` instead of `not.eq(0)`
      });
    });
  });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(num3).to.be.a('number')
      expect(num4).to.be.a('number')
      expect(mod).to.eq(2)
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max).to.eq(20)
    });
  });
});