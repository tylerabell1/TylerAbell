// ==========================
// TYLER OS
// Futuristic Portfolio
// ==========================

// Typing Animation

const text =
"AI Developer â€¢ Future Engineer â€¢ Cybersecurity Enthusiast â€¢ Technology Creator";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 60);

    }

}

window.onload = typeWriter;


// ==========================
// Scroll Reveal
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section,.card,.glass").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition="1s";

observer.observe(item);

});


// ==========================
// Animated Skill Bars
// ==========================

const bars=document.querySelectorAll(".bar span");

const barObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=
entry.target.getAttribute("style").replace("width:","");

}

});

});

bars.forEach(bar=>{

const width=bar.style.width;

bar.style.width="0";

bar.setAttribute("style","width:"+width);

barObserver.observe(bar);

});


// ==========================
// Mouse Glow Effect
// ==========================

const glow=document.createElement("div");

document.body.appendChild(glow);

glow.style.position="fixed";

glow.style.width="250px";

glow.style.height="250px";

glow.style.borderRadius="50%";

glow.style.background="rgba(0,234,255,.12)";

glow.style.pointerEvents="none";

glow.style.filter="blur(70px)";

glow.style.zIndex="-1";

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-120+"px";

glow.style.top=e.clientY-120+"px";

});

// ==========================
// STARFIELD BACKGROUND
// ==========================

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 250; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.8 + 0.2
    });
}

function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00eaff";

    stars.forEach(star => {

        ctx.beginPath();

        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

    });

    requestAnimationFrame(animateStars);

}

animateStars();


// ==========================
// SIMPLE AI ASSISTANT
// ==========================

const aiButton = document.createElement("button");

aiButton.innerHTML = "ðŸ¤– AI";

aiButton.style.position = "fixed";
aiButton.style.right = "25px";
aiButton.style.bottom = "25px";
aiButton.style.padding = "14px 20px";
aiButton.style.borderRadius = "40px";
aiButton.style.border = "none";
aiButton.style.cursor = "pointer";
aiButton.style.background = "#00eaff";
aiButton.style.color = "#000";
aiButton.style.fontWeight = "bold";
aiButton.style.boxShadow = "0 0 20px #00eaff";
aiButton.style.zIndex = "999";

document.body.appendChild(aiButton);

aiButton.onclick = () => {

    alert(
`Welcome to Tyler OS

Future Features:

âœ“ AI Chat Assistant
âœ“ Portfolio Guide
âœ“ Project Explorer
âœ“ Contact Assistant

Coming Soon...`
    );

};
                          
