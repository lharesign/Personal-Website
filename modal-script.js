// FOR MODAL IMAGES

// Assign modal-img to modalImages and the close span to closeSpan.
var modalImages = document.getElementsByClassName("modal-img");
var closeSpan = document.getElementsByClassName("close");


// Loop through each of the modal-img elements
for (let i = 0; i < modalImages.length; i++) {

    // Add an on-click listener to each of the modal-img elements
    modalImages[i].addEventListener("click", function () {

        // Assign modal-box to modalBox and fetch modal-content and model-caption
        var modalBox = this.nextElementSibling;
        let modalContent = modalBox.querySelector('.modal-content');
        let captionText = modalBox.querySelector('.modal-caption');
        
        // Display modalBox, set modal-content src and alt to modal-img src and alt
        modalBox.style.display = "block";
        modalContent.src = modalImages[i].src;
        captionText.innerHTML = modalImages[i].alt;

        // Add an onlcick listener to close modal image when X is clicked
        closeSpan[i].addEventListener("click", function () {

            // Display modalBox
            modalBox.style.display = "none";
    
        });
    }
    );
}