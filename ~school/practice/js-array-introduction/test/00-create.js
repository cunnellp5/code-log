var name = "00-create"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("will create an Array", function () {
    expect(runner()).to.be.an("array")
  });
});
