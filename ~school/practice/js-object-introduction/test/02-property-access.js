var chai = require("chai");
var runner = require("../02-property-access");
var expect = chai.expect;

describe("02-property-access", function () {
  it("will get a property on an object", function () {
    var danny = {name: "Danny", age: 26}
    expect(runner(danny, "age")).to.equal(26)
    expect(runner(danny, "name")).to.equal("Danny")
  });
});
