var chai = require("chai");
var runner = require("../01-property-literal");
var expect = chai.expect;

describe("01-property-literal", function () {
  it("will return Danny\'s Cat", function () {
    var result = runner()
    expect(result).to.be.an("object");
    expect(result.name).to.equal("Cat")
    expect(result.species).to.equal("cat")
    expect(result.age).to.equal(4)
  });
});
