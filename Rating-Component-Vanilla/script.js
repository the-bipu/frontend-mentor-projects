const firstStar = document.querySelector(".box-1")
const secondStar = document.querySelector(".box-2")
const thirdStar = document.querySelector(".box-3")
const forthStar = document.querySelector(".box-4")
const fifthStar = document.querySelector(".box-5")

$(document).ready(function() {
  $(".miniBox").on("click", function() {
    // Remove the active class from all buttons
    $(".miniBox").removeClass("activeBox-1");
    // Add the active class to the clicked button
    $(this).addClass("activeBox-1");
    // Change the color of previous buttons
    $(this).prevAll(".miniBox").addClass("activeBox-1");
  });
});

const container2 = document.querySelector(".container2");

$(document).ready(function() { // ensures that the jQuery code runs only after the DOM is fully loaded
    $("#submit").on("click", function() {
      $(container2).addClass("activeContainer2"); // Show the second container
    });
});

$(document).ready(function() {

    // Attach a click event handler to all buttons with class "my-button"
    $(".miniBox").on("click", function() {
      // Get the value of the clicked button
      var clickedValue = $(this).val();
      console.log("Clicked value: " + clickedValue);

      $(".miniBox").addClass("activeMiniBox"); // Show the second container

      // Use the class selector to target the paragraph element
      $(".con2-para1").text(clickedValue);

    });
  });