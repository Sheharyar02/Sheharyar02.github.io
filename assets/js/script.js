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


const projectDetails = {
  defect: {
    title: "Defect Detection in Manufacturing Lines",
    description: "Led a team to develop a 3D Lidar Based system for real-time defect detection in manufacturing lines, improving quality control and reducing waste. Reached an accuracy of 87.2% accuracy on Point Clouds. With 3 Categories of defects identified (Wrinkles, Bridges and Gaps).Published a research paper on it."
  },
  critical: {
    title: "Critical Region Identification",
    description: "Developed a camera based alternate for more generalised critical region identification and quantification for more generalised object reaching 94.1% accuracy"
  },
  optimisation: {
    title: "Shop Floor Optimisation",
    description: "Data Driven analysis and optimisation of autonomous shop floor operations including robots, UGVs etc. Using Live Point CLoud Scans. Point Cloud Based Deep Learning was used with comparision to 3 SOTA Models including PointNet, UniDet3d, OneTransformer 3d. Results allowed traffic prediction, optimisation and collision avoidance in real-time."
  },
  synthetic: {
    title: "Synthetic 3D Data Generation",
    description: "Procedural generation of synthetic 3D point clouds to augment AI training data (IN Progress)."
  },
  Car: {
    title: "Autonomous UGV with both Remote and Autonomous Control",
    description: "Developed an autonomous Unmanned Ground Vehicle (UGV) with both remote and autonomous control capabilities. The UGV is equipped with a Pixhawk Controller, a BMS for battery management, using Jetson Nano for as micro processor , enabling it to navigate autonomously using GPS (Here 3) and IMU data. It can also be controlled remotely via a web interface, allowing for manual operation when needed. The system integrates advanced sensors for obstacle detection and avoidance, ensuring safe navigation in various environments. This project showcases the application of robotics and embedded systems in creating versatile autonomous vehicles."
  }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModalBtn = document.querySelector(".close-modal");

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const projectKey = card.getAttribute('data-project');
    modalTitle.textContent = projectDetails[projectKey].title;
    modalDescription.textContent = projectDetails[projectKey].description;
    modal.style.display = "block";
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

