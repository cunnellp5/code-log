var name = "03-loop"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("will find the sum of numbers in an array", function () {
    var numbers = [1, 2, 3, 4, 5]
    expect(runner(numbers)).to.equal(15)
    numbers = [1, 3, 5, 7]
    expect(runner(numbers)).to.equal(16)
  });
});
