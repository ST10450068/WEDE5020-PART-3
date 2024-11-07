document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Insert current date in footer
document.getElementById("footer-date").textContent = new Date().getFullYear();

// Open lightbox with specified image
function openLightbox(imageSrc) {
    document.getElementById("lightbox-image").src = imageSrc;
    document.getElementById("lightbox").style.display = "block";
}

// Close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
// Clear placeholder text when user focuses on field
function clearField(field) {
    if (field.defaultValue === field.value) {
        field.value = '';
    }
}

// Form submission validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!name || !email) {
        e.preventDefault();
        alert("Please fill out all required fields.");
    }
});


    });
});