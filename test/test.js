const chai = require("chai");
const expect = chai.expect;

const $ = require("jquery");

describe("Initial Ajax Call", () => {
  it("The mockjax call should return the storedSubscription", () => {
    let storedSubscription = {
      plan: "good",
      name: "Good",
      seats: 2,
      cost: 20,
    };

    $.get({
      url: "/api/current",
    }).then(function success(response) {
      expect(response).to.equal(storedSubscription);
    });
  });
});

describe("Update Ajax Call", () => {
  it("The update call should return the storedSubscription", () => {
    let storedSubscription = {
      plan: "good",
      name: "Good",
      seats: 5,
      cost: 50,
    };

    $.post({
      url: "/api/preview",
      data: {
        plan: "good",
        seats: 5,
      },
    }).then(function (response) {
      expect(response).to.equal(storedSubscription);
    });
  });
});
