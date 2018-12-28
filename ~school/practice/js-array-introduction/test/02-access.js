var name = "02-access"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("will get element at an index", function () {
    var dogs = ["Buddy", "Iago"]
    var dog = runner(dogs, 1)
    expect(dog).to.equal("Iago")
    var dog2 = runner(dogs, 0)
    expect(dog2).to.equal("Buddy")
    expect(dogs.length).to.equal(2)
  });
});
