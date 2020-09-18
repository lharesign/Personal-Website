var pictures = ["agioas nikoloas.JPEG", "berlin.JPEG", "brooklyn bridge.JPG", "colosseum.JPG", "eiffel tower.JPEG", "kyoto.JPEG", "machu picchu.JPEG", "old harry rocks.JPG", "salar de uyuni.JPEG", "samaria gorge.JPEG", "smogen.jpg", "ven.jpg"];
var descriptions = ["Agioas Nikoloas, Crete", "Graffiti in Berlin, Germany", "Brooklyn Bridge, New York, USA", "The Colosseum, Rome, Italy", "The Eiffel Tower, Paris, France", "Kyoto, Japan", "Machu Picchu, Peru", "Old Harry Rocks, England", "Salar de Uyuni, Bolivia", "Samaria Gorge, Crete", "Smögen, Sweden", "Ven, Sweden"];

window.onload = galleryBuilder;

function galleryBuilder() {
    for (let i = 0; i < pictures.length; i++) {
        const galleryContainer = document.getElementById('gallery-container');
        const newImage = document.createElement('div');
        newImage.className = "gallery-image"
        newImage.innerHTML = `<img class="gallery-pic" src="Images\\${pictures[i]}" alt="${descriptions[i]}"><div class="middle"><div class="image-text">${descriptions[i]}</div></div>`;
        galleryContainer.appendChild(newImage);
    }
}
