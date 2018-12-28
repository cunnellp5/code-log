var name = "07-clone"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("Will create a shallow clone of an Array", function () {
    var people = ["Danny", "Roberto", "Elana", "Kyle"]
    var clones = runner(people)
    expect(clones).to.be.an("array")
    expect(clones, "should be a different Array").to.not.equal(people)
    expect(clones, "should be same contents").to.deep.equal(people)
  });
});
