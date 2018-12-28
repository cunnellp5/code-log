var chai = require("chai");
var runner = require("../03-property-runtime");
var expect = chai.expect;

describe("03-property-runtime", function () {
  it("will modify an object", function () {
    var danny = {name: "Danny", age: 26}
    expect(danny).to.be.an("object")
    expect(danny.age).to.equal(26)
    runner(danny, "age", 27)
    expect(danny).to.be.an("object")
    expect(danny.age).to.equal(27)
  });
});
