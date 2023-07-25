// const firstStar = document.querySelector(".box-1")
// const secondStar = document.querySelector(".box-2")
// const thirdStar = document.querySelector(".box-3")
// const forthStar = document.querySelector(".box-4")
// const fifthStar = document.querySelector(".box-5")

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
      // Do whatever you want with the value here
    });
  });
  