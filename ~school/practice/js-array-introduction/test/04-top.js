var name = "04-top"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("will tell you what the last element in the Array is.", function () {
    expect(runner([1, 2, 3, 4, 5])).to.equal(5)
    expect(runner([1, 3, 5, 7])).to.equal(7)
    expect(runner(["Fred", "Sally"])).to.equal("Sally")
  });
});
