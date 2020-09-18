// FOR ACCORDION MENU

// Assign questionsListItem (for accordion) to questions-list-item and i to zero.
var accordionItem = document.getElementsByClassName("accordion-item");
var i;


// Loop through each of the question-list-item elements
for (i = 0; i < accordionItem.length; i++) {

    // Add an on-click listener to each of the question-list-item elements
    accordionItem[i].addEventListener("click", function () {

        // Assign element with plus-icon class inside this div to icon, assign accordion panel to panel
        var icon = this.getElementsByClassName("plus-icon");
        var panel = this.nextElementSibling;

        // If panel is currently displayed, hide the panel
        if (panel.style.display === "block") {
            panel.style.display = "none";

            // Edit the icon that is displayed (plus or minus)
            icon[0].classList.remove('fa-minus-circle');
            icon[0].classList.add('fa-plus-circle');

            // Else if panel is currently hidden, display the panel
        } else {
            panel.style.display = "block";

            icon[0].classList.add('fa-minus-circle');
            icon[0].classList.remove('fa-plus-circle');
        }
    });
}