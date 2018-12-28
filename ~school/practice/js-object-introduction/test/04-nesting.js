var chai = require("chai");
var runner = require("../04-nesting");
var expect = chai.expect;

describe("04-nesting", function () {
  it("will create a nested object property", function () {
    var danny = runner("Danny", 27)
    expect(danny).to.be.an("object")
    expect(danny.name).to.equal("Danny")
    expect(danny.location).to.be.an("object")
    expect(danny.location.state).to.equal("Colorado")
    expect(danny.age).to.equal(27)
  });
});
