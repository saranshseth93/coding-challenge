const chai = require("chai");
const expect = chai.expect;

describe("Test", () => {
  it("it should be this", () => {
    var answer = 43;

    // AssertionError: expected 43 to equal 42.
    expect(answer).to.equal(43);
  });
});
