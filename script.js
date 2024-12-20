// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Hero Section Animation
window.addEventListener("load", () => {
  const heroText = document.querySelector("#hero h1");
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(20px)";
  setTimeout(() => {
    heroText.style.transition = "all 0.6s ease-in-out";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 500);
});
// Get all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Add click event to toggle details
toggleButtons.forEach(button => {
  button.addEventListener('click', function () {
    const details = this.parentElement.nextElementSibling;

    // Toggle the visibility of the details
    if (details.style.display === 'block') {
      details.style.display = 'none';
      this.textContent = '▼'; // Change arrow back
    } else {
      details.style.display = 'block';
      this.textContent = '▲'; // Change arrow to up
    }
  });
});
