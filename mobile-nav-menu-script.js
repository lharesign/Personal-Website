/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function displayMenu() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }