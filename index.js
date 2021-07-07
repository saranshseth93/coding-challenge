const $ = require("jquery");
const bootstrap = require("bootstrap");
$(document).ready(function (e) {
  console.log("hi");
  setTimeout(function () {
    $(".loader").addClass("hidden");
    $(".content").fadeIn("slow");
    console.log("hello");
  }, 3000);
});
