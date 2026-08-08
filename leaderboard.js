// ======================================
// ABTalks Leaderboard JavaScript
// ======================================

// Search
const searchInput = document.querySelector(".search-box input");
const leaderCards = document.querySelectorAll(".leaderboard-list .leader-card");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    leaderCards.forEach(card => {

        const name = card.querySelector("h3").textContent.toLowerCase();

        card.style.display = name.includes(value) ? "flex" : "none";

    });

});

// ======================================
// Leaderboard Data
// ======================================

const leaderboard = {

    weekly: [
        ["Aarav Sharma",60,1500],
        ["Sneha Nair",59,1470],
        ["Rahul Verma",58,1450],
        ["Ananya",54,1360],
        ["Rohan",51,1290],
        ["Neha",49,1240],
        ["Vishnu",46,1205],
        ["Akhil",44,1160],
        ["Meera",42,1125],
        ["Aditya",40,1090]
    ],

    monthly: [
        ["Sneha Nair",58,1700],
        ["Aarav Sharma",57,1660],
        ["Rahul Verma",55,1600],
        ["Neha",53,1500],
        ["Ananya",51,1450],
        ["Vishnu",48,1390],
        ["Rohan",47,1340],
        ["Meera",45,1300],
        ["Akhil",43,1270],
        ["Aditya",41,1210]
    ],

    alltime: [
        ["Aarav Sharma",180,5200],
        ["Rahul Verma",175,5100],
        ["Sneha Nair",170,5000],
        ["Ananya",165,4900],
        ["Rohan",160,4800],
        ["Neha",154,4700],
        ["Vishnu",149,4600],
        ["Meera",145,4500],
        ["Akhil",141,4400],
        ["Aditya",139,4300]
    ]

};

// ======================================
// Rank Notification
// ======================================

const notification = document.createElement("div");

notification.style.position = "fixed";
notification.style.top = "20px";
notification.style.left = "50%";
notification.style.transform = "translateX(-50%)";
notification.style.background = "#2563eb";
notification.style.color = "white";
notification.style.padding = "12px 20px";
notification.style.borderRadius = "30px";
notification.style.fontWeight = "600";
notification.style.zIndex = "9999";
notification.style.display = "none";
notification.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

document.body.appendChild(notification);

function showNotification(text){

    notification.innerHTML = text;

    notification.style.display = "block";

    setTimeout(()=>{

        notification.style.display = "none";

    },2500);

}

// ======================================
// Filter Buttons
// ======================================

const buttons = document.querySelectorAll(".filter button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

let key="weekly";

if(button.innerText==="Monthly") key="monthly";

if(button.innerText==="All Time") key="alltime";

leaderCards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(20px)";

setTimeout(()=>{

const data=leaderboard[key][index];

card.querySelector("h3").innerText=data[0];

card.querySelector("p").innerText=`🔥 ${data[1]} Day Streak`;

card.querySelector(".right strong").innerText=`${data[2]} XP`;

card.style.opacity="1";

card.style.transform="translateY(0)";

card.style.transition=".4s";

},index*70);

});

if(key==="weekly"){

showNotification("⬆️ You moved up 2 places!");

}

else if(key==="monthly"){

showNotification("➡️ Your rank stayed the same.");

}

else{

showNotification("🏆 You're only 5 places away from Top 10%!");

}

});

});

// ======================================
// Scroll Reveal
// ======================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

document.querySelectorAll(

".leader-card,.achievement-card,.stat-card,.podium-card"

).forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

card.style.transition=".6s";

observer.observe(card);

});

// ======================================
// Hover Effect
// ======================================

leaderCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-6px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ======================================
// Fake Live Rank Update
// ======================================

const rank=document.querySelector(".rank-number");

setTimeout(()=>{

if(rank){

rank.innerHTML="#143";

}

},4000);

// ======================================
// Stats Animation
// ======================================

const stats=document.querySelectorAll(".stat-card h3");

stats.forEach(stat=>{

stat.style.opacity="0";

setTimeout(()=>{

stat.style.opacity="1";

stat.style.transition="1s";

},600);

});

// ======================================
// Continue Button
// ======================================

const continueBtn=document.querySelector(".motivation-card button");

if(continueBtn){

continueBtn.addEventListener("click",()=>{

window.location.href="day12.html";

});

}

// ======================================
// Console Message
// ======================================

console.log("🏆 Welcome to the ABTalks Leaderboard");
console.log("🔥 Keep coding. Keep climbing.");