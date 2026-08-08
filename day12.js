// =======================================
// ABTalks - Day 12 JavaScript
// =======================================

// Elements
const submitBtn = document.getElementById("submitBtn");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");

const githubInput = document.querySelector('input[type="url"]');
const linkedinInput = document.querySelectorAll('input[type="url"]')[1];
const reflection = document.querySelector("textarea");

// =======================================
// Submit Validation
// =======================================

submitBtn.addEventListener("click", function () {

    if (githubInput.value.trim() === "") {

        alert("Please enter your GitHub Repository/Commit URL.");

        githubInput.focus();

        return;

    }

    if (linkedinInput.value.trim() === "") {

        alert("Please enter your LinkedIn Post URL.");

        linkedinInput.focus();

        return;

    }

    if (reflection.value.trim() === "") {

        alert("Please write your learning reflection.");

        reflection.focus();

        return;

    }

    // Show Success Modal
    modal.style.display = "flex";

});

// =======================================
// Close Modal
// =======================================

closeBtn.addEventListener("click", function () {

    modal.style.display = "none";

});

// =======================================
// Close Modal when clicking outside
// =======================================

window.addEventListener("click", function (e) {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

// =======================================
// Character Counter for Reflection
// =======================================

const counter = document.createElement("small");

counter.style.display = "block";
counter.style.marginTop = "10px";
counter.style.color = "#94A3B8";
counter.innerText = "0 / 300 characters";

reflection.parentElement.appendChild(counter);

reflection.addEventListener("input", function () {

    counter.innerText = `${reflection.value.length} / 300 characters`;

});

// =======================================
// Auto Focus First Input
// =======================================

window.onload = function () {

    githubInput.focus();

};

// =======================================
// AI Summary Preview
// =======================================

const aiItems = document.querySelectorAll(".ai-item");

aiItems.forEach((item, index) => {

    item.style.opacity = "0";

    setTimeout(() => {

        item.style.transition = "0.6s";

        item.style.opacity = "1";

        item.style.transform = "translateY(0)";

    }, 300 * index);

});

// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =======================================
// Button Click Animation
// =======================================

submitBtn.addEventListener("mousedown", () => {

    submitBtn.style.transform = "scale(0.97)";

});

submitBtn.addEventListener("mouseup", () => {

    submitBtn.style.transform = "scale(1)";

});

submitBtn.addEventListener("mouseleave", () => {

    submitBtn.style.transform = "scale(1)";

});