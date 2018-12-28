var name = "06-sort"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("Will sort an array by its 1's digit", function () {
    expect(runner([1, 2, 3])).to.deep.equal([1, 2, 3])
    expect(runner([23, 32, 41])).to.deep.equal([41, 32, 23])
    expect(runner([31, 22, 13, 55])).to.deep.equal([31, 22, 13, 55])
    expect(runner([56, 9, 45, 34, 0])).to.deep.equal([0, 34, 45, 56, 9])
  });
});
