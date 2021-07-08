import {
  initialize,
  PLAN_NAMES,
  PLAN_COSTS,
  update,
  preview,
  prevSubscription,
  storedSubscription
} from "./mock";

//Required for jquery to work with npm package
const $ = require("jquery");

//Required for bootstrap to work with npm package
const bootstrap = require("bootstrap");

//When the DOM is ready
$(document).ready(function (e) {
  //Getting all the mockjax functions initial run
  initialize();
  update();
  preview();

  //Get our first response to display the mock data
  $.get({
    url: "/api/current"
  }).then(function success(response) {
    console.log(response);

    //Hide the loader once the response is received
    $(".loader").addClass("hidden");
    $(".content").fadeIn("slow");

    //Check if response was received non-empty
    if (typeof response != "undefined" || response != "") {
      //Hide the error if the fetch was successful
      $(".error").addClass("hidden");

      //Update the DOM elements
      updateDOM(response);
    } else {
      //Display the error if the fetch was unsuccessful
      $(".error").removeClass("hidden");
    }
  });

  //Onchange events
  $("#plan-input").on("change", changePlan);
  $("#seats-input").on("change", changePlan);
});

//When the user changes the selected plan
function changePlan() {
  //if seats is not empty calculate price
  if ($.trim($("#seats-input").val()) != "") {
    let plan = $("#plan-input").val();
    let seats = $.trim($("#seats-input").val());

    let price = seats * PLAN_COSTS[plan];
    $("#cost-value").html("$" + price);

    if (plan != storedSubscription.plan || seats != storedSubscription.seats) {
      $("#update-btn").attr("disabled", false);
    } else {
      $("#update-btn").attr("disabled", true);
    }
  }
}

//Update the DOM on received value
function updateDOM(data) {
  //Fill in the plan select
  $("#plan-input").val(data.plan);

  //Fill in the seats
  $("#seats-input").val(data.seats);

  //Fill in the cost
  $("#cost-value").html("$" + data.cost);
}
