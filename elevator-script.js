//FOR ELEVATOR BUTTON

// When the user scrolls, run the function
window.onscroll = function() {displayElevatorButton()};

// Assign the header and elevator buttons to variables so we can assign new classes later
var header = document.getElementById("content-container");
var elevator = document.getElementById("scroll-elevator");

// Get the offset position of the header
var scrollPoisition = header.offsetTop;

// Add the sticky class to the header & elevator button when you reach its scroll position. Remove "sticky" when you leave the scroll position
function displayElevatorButton() {
  if (window.pageYOffset > scrollPoisition) {
    elevator.classList.add("scroll-elevator-sticky")
  } else {
    elevator.classList.remove("scroll-elevator-sticky")
  }
}