//Required for jquery to work with npm package
const $ = require("jquery");

const mockjax = require("jquery-mockjax")($, window);

//Clear the previous versions of mockjax
mockjax.clear();

export const PLAN_COSTS = {
  basic: 1,
  good: 10,
  better: 100,
  best: 1000
};

export const PLAN_NAMES = {
  basic: "Basic",
  good: "Good",
  better: "Better",
  best: "Best"
};

export let storedSubscription = {
  plan: "good",
  name: "Good",
  seats: 2,
  cost: 2 * PLAN_COSTS.good
};

export function initialize() {
  //Initializing mock data with dummy inital object
  mockjax({
    url: "/api/current",
    type: "get",
    responseText: storedSubscription
  });
}

export function update() {
  mockjax({
    url: "/api/current",
    responseDelay: 2000,
    type: "put",
    response: function (settings) {
      var newData = {
        plan: settings.data.plan,
        name: PLAN_NAMES[settings.data.plan],
        seats: settings.data.seats,
        cost: settings.data.seats * PLAN_COSTS[settings.data.plan]
      };
      storedSubscription = newData;
      this.responseText = newData;
    }
  });
}

export function preview() {
  mockjax({
    url: "/api/preview",
    responseDelay: 1000,
    response: function (settings) {
      this.responseText = {
        plan: settings.data.plan,
        name: PLAN_NAMES[settings.data.plan],
        seats: settings.data.seats,
        cost: settings.data.seats * PLAN_COSTS[settings.data.plan]
      };
    }
  });
}
