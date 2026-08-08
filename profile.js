// ======================================
// ABTalks Profile JavaScript
// ======================================

// Welcome Message
console.log("👋 Welcome to your ABTalks Profile!");

// ======================================
// Edit Profile Button
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("profileModal");
    const editBtn = document.querySelector(".edit-btn");
    const closeBtn = document.getElementById("closeModal");
    const saveBtn = document.getElementById("saveProfile");
    const name = document.getElementById("profileName");
    const track = document.getElementById("trackText");
    const bio = document.getElementById("bioText");
    const nameInput = document.getElementById("nameInput");
    const trackInput = document.getElementById("trackInput");
    const bioInput = document.getElementById("bioInput");

    if (!modal || !editBtn || !closeBtn || !saveBtn || !name || !track || !bio) {
        return;
    }

    const openModal = () => {
        nameInput.value = name.innerText.trim();
        trackInput.value = track.innerText.trim();
        bioInput.value = bio.innerText.trim();
        modal.style.display = "flex";
    };

    const closeModal = () => {
        modal.style.display = "none";
    };

    editBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    saveBtn.addEventListener("click", () => {
        const newName = nameInput.value.trim() || "Your Name";
        const newTrack = trackInput.value.trim() || "Track";
        const newBio = bioInput.value.trim() || "Write something about yourself";

        name.innerText = newName;
        track.innerText = newTrack;
        bio.innerText = newBio;

        localStorage.setItem("profileName", newName);
        localStorage.setItem("profileTrack", newTrack);
        localStorage.setItem("profileBio", newBio);

        closeModal();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    const savedName = localStorage.getItem("profileName");

    if (savedName) {
        name.innerText = savedName;
        track.innerText = localStorage.getItem("profileTrack") || track.innerText;
        bio.innerText = localStorage.getItem("profileBio") || bio.innerText;
    }
});

// ======================================
// Progress Circle Animation
// ======================================

const circle = document.querySelector(".circle");

if (circle) {

    let progress = 0;

    const target = 20;

    const interval = setInterval(() => {

        progress++;

        circle.innerHTML = progress + "%";

        circle.style.background =
        `conic-gradient(#3B82F6 ${progress}%, rgba(255,255,255,.1) ${progress}%)`;

        if (progress >= target) {

            clearInterval(interval);

        }

    }, 40);

}

// ======================================
// Scroll Reveal Animation
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

".profile-card,.progress-card,.badge,.activity,.stat-card,.reflection-card,.action-card,.setting-card,.next-badge-card,.goal-card,.quote-card"

).forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(30px)";

    item.style.transition = ".6s";

    observer.observe(item);

});

// ======================================
// Badge Hover Effect
// ======================================

const badges = document.querySelectorAll(".badge");

badges.forEach(badge => {

    badge.addEventListener("mouseenter", () => {

        badge.style.transform = "translateY(-8px) scale(1.05)";

    });

    badge.addEventListener("mouseleave", () => {

        badge.style.transform = "translateY(0) scale(1)";

    });

});

// ======================================
// Toggle Switches
// ======================================

const toggles = document.querySelectorAll(".switch input");

toggles.forEach(toggle => {

    toggle.addEventListener("change", () => {

        if (toggle.checked) {

            console.log("Enabled");

        }

        else {

            console.log("Disabled");

        }

    });

});

// ======================================
// AI Daily Motivation Quotes
// ======================================

const quotes = [

"Consistency beats intensity. Keep coding! 🚀",

"Every commit is a step toward your dream job. 💻",

"Small progress every day becomes big success. 🔥",

"Learn. Build. Share. Repeat. ⭐",

"The best developers never stop learning. 🌟"

];

const quoteText = document.querySelector(".quote-card p");

if (quoteText) {

    let index = 0;

    setInterval(() => {

        index++;

        if (index >= quotes.length) index = 0;

        quoteText.style.opacity = "0";

        setTimeout(() => {

            quoteText.innerHTML = quotes[index];

            quoteText.style.opacity = "1";

        }, 300);

    }, 5000);

}

// ======================================
// Quick Action Cards
// ======================================

document.querySelectorAll(".action-card").forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(.95)";

        setTimeout(() => {

            card.style.transform = "";

        }, 150);

    });

});

// ======================================
// Achievement Notification
// ======================================

setTimeout(() => {

    const note = document.createElement("div");

    note.innerHTML = "🏅 You're only <b>3 days</b> away from earning the Consistency Champion badge!";

    note.style.position = "fixed";
    note.style.bottom = "90px";
    note.style.left = "50%";
    note.style.transform = "translateX(-50%)";
    note.style.background = "#2563eb";
    note.style.color = "#fff";
    note.style.padding = "14px 22px";
    note.style.borderRadius = "18px";
    note.style.zIndex = "9999";
    note.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    document.body.appendChild(note);

    setTimeout(() => {

        note.remove();

    }, 4000);

}, 2500);

// ======================================
// Footer
// ======================================

console.log("🔥 Keep Building. Keep Learning.");