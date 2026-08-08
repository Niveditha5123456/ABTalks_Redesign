// ============================
// Animated Counter
// ============================

const counters = document.querySelectorAll(".trust-card h2");

counters.forEach(counter => {

    const target = counter.innerText.replace(/\D/g, "");

    if (!target) return;

    let count = 0;

    const speed = target / 80;

    function update() {

        count += speed;

        if (count < target) {

            if(counter.innerText.includes("%"))
                counter.innerText = Math.floor(count) + "%";
            else if(counter.innerText.includes("Lakh"))
                counter.innerText = Math.floor(count/100) + " Lakh+";
            else
                counter.innerText = Math.floor(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = counter.dataset.value;

        }

    }

    update();

});

// ============================
// Save Original Values
// ============================

counters.forEach(counter=>{
    counter.dataset.value = counter.innerText;
});

// ============================
// Fade Sections on Scroll
// ============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ============================
// Card Hover Tilt
// ============================

const cards=document.querySelectorAll(".feature-card,.step-card,.testimonial-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

card.style.transform=`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(800px) rotateX(0) rotateY(0)";

});

});

// ============================
// Progress Ring Animation
// ============================

const ring=document.querySelector(".progress-ring");

let progress=0;

const interval=setInterval(()=>{

progress++;

ring.innerHTML=progress;

if(progress>=60){

clearInterval(interval);

}

},25);