import {
  initialize,
  PLAN_NAMES,
  PLAN_COSTS,
  update,
  preview,
  storedSubscription
} from "./mock";

//Required for jquery to work with npm package
const $ = require("jquery");

//Required for bootstrap to work with npm package
const bootstrap = require("bootstrap");

let previous = "";

//When the DOM is ready
$(document).ready(function (e) {
  //Getting all the mockjax functions initial run
  initialize();
  update();
  preview();

  getValues();

  //Onchange events
  $("#plan-input").on("change", changePlan);
  $("#seats-input").on("change", changePlan);

  //When user clicks update button
  $("#update-btn").on("click", function () {
    //show the loader
    $(".loader").removeClass("hidden");
    $(".content").hide("slow");

    $(".prev-plan").html(previous.name);
    $(".prev-seats").html(previous.seats);
    $(".prev-price").html("$" + PLAN_COSTS[previous.plan] * previous.seats);

    $.ajax({
      type: "put",
      url: "/api/current",
      data: {
        plan: $("#plan-input").val(),
        seats: $("#seats-input").val()
      }
    }).then(function (response) {
      $(".new-plan").html(response.name);
      $(".new-seats").html(response.seats);
      $(".new-price").html("$" + PLAN_COSTS[response.plan] * response.seats);

      $(".loader").addClass("hidden");
      $(".preview").fadeIn("slow");
    });
  });

  //When user clicks back button
  $("#back-btn").on("click", function () {
    previewDetails();
  });
});

function previewDetails() {
  //Hide the loader once the response is received
  $(".loader").addClass("hidden");
  $(".preview").fadeOut("fast");
  $(".content").fadeIn("slow");
  //Check if response was received non-empty
  if (typeof storedSubscription != "undefined" || storedSubscription != "") {
    previous = storedSubscription;
    //Hide the error if the fetch was successful
    $(".error").addClass("hidden");
    //Update the DOM elements
    updateDOM(storedSubscription);

    $("#update-btn").attr("disabled", true);
  } else {
    //Display the error if the fetch was unsuccessful
    $(".error").removeClass("hidden");
  }
}

function getValues() {
  //Get our first response to display the mock data
  $.get({
    url: "/api/current"
  }).then(function success(response) {
    //Hide the loader once the response is received
    $(".loader").addClass("hidden");
    $(".preview").fadeOut("fast");
    $(".content").fadeIn("slow");

    //Check if response was received non-empty
    if (typeof response != "undefined" || response != "") {
      previous = response;

      //Hide the error if the fetch was successful
      $(".error").addClass("hidden");

      //Update the DOM elements
      updateDOM(response);
    } else {
      //Display the error if the fetch was unsuccessful
      $(".error").removeClass("hidden");
    }
  });
}

//When the user changes the selected plan
function changePlan() {
  $.post({
    url: "/api/preview",
    data: {
      plan: $("#plan-input").val(),
      seats: $("#seats-input").val()
    }
  }).then(function (response) {
    //if seats is not empty calculate price
    if ($.trim($("#seats-input").val()) != "") {
      console.log(response);
      updateDOM(response);

      if (
        response.plan != storedSubscription.plan ||
        response.seats != storedSubscription.seats
      ) {
        $("#update-btn").attr("disabled", false);
      } else {
        $("#update-btn").attr("disabled", true);
      }
    }
  });
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
