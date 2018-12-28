var name = "01-addItem"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("will add elements to an array", function () {
    var dogs = []
    runner(dogs, "Buddy")
    expect(dogs.length).to.equal(1)
    expect(dogs[0]).to.equal("Buddy")
    runner(dogs, "Iago")
    expect(dogs.length).to.equal(2)
    expect(dogs[1]).to.equal("Iago")
  });
});
