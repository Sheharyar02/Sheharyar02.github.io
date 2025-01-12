'use strict';

/**
 * Navbar toggle
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * Toggle the navbar when clicking any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
});

/**
 * Back to top & header
 */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.querySelectorAll("[data-toggle='dropdown']").forEach(header => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;  // Get the dropdown content (next sibling)
    const btn = this.querySelector(".toggle-btn");  // Get the toggle button

    // Toggle content visibility
    if (content.hidden) {
      content.hidden = false;  // Show the content
      btn.textContent ="Collapse";  // Change button text to minus
    } else {
      content.hidden = true;  // Hide the content
      btn.textContent = "Details";  // Change button text to plus
    }
  });
});
