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

