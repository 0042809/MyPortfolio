// Simple form validation
function validateForm() {
    const name = document.getElementById("name").value;
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
