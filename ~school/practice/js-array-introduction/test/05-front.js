var name = "05-front"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("will remove and return the front value.", function () {
    var numbers = [1, 3, 4, 10, 5]
    expect(runner(numbers)).to.equal(1)
    expect(runner(numbers)).to.equal(3)
    expect(runner(numbers)).to.equal(4)
    expect(runner(numbers)).to.equal(10)
    expect(runner(numbers)).to.equal(5)
    expect(numbers.length).to.equal(0)
  });
});
