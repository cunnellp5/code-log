var chai = require("chai");
var runner = require("../00-create");
var expect = chai.expect;

describe("00-create", function () {
  it("will return an object", function () {
    expect(runner()).to.be.an("object");
  });
});
