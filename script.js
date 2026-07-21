/* ==================================
   TYLER OS v2.0
   Cyberpunk AI Laboratory System
================================== */


/* ==============================
   BOOT SEQUENCE (MOBILE SAFE)
============================== */

window.addEventListener("load", () => {

    const boot = document.getElementById("boot");
    const bootText = document.getElementById("bootText");

    if (!boot || !bootText) return;


    const messages = [
        "Initializing AI Lab...",
        "Loading Interface...",
        "Connecting Systems...",
        "System Online ✓"
    ];

    let i = 0;


    const timer = setInterval(() => {

        bootText.textContent = messages[i];

        i++;


        if(i >= messages.length){

            clearInterval(timer);


            setTimeout(()=>{

                boot.style.opacity = "0";

                setTimeout(()=>{

                    boot.style.display="none";

                },500);


            },500);

        }


    },500);



    // Emergency fallback
    setTimeout(()=>{

        boot.style.display="none";

    },5000);


});




/* ==============================
   TYPING EFFECT
============================== */


const intro =
"AI • Software • Cybersecurity • Future Technology";


let letter=0;


function type(){

    if(letter < intro.length){

        document.getElementById("typing")
        .innerHTML += intro.charAt(letter);

        letter++;

        setTimeout(type,70);

    }

}


setTimeout(type,4500);






/* ==============================
   SOLAR SYSTEM + FALLING STARS
============================== */

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);


// Falling stars

let stars = [];

const starCount = window.innerWidth < 768 ? 70 : 180;

for(let i = 0; i < starCount; i++){

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 3 + 1

    });

}


function animateStars(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle = "#00eaff";


    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI * 2
        );

        ctx.fill();


        star.y += star.speed;


        if(star.y > canvas.height){

            star.y = -10;
            star.x = Math.random() * canvas.width;

        }

    });


    requestAnimationFrame(animateStars);

}


animateStars();





/* ==============================
   ROTATING SOLAR SYSTEM
============================== */

const globe = document.getElementById("globe");


if(globe){


const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
45,
1,
0.1,
1000
);


const renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
});


const size = window.innerWidth < 768 ? 220 : 350;

renderer.setSize(size,size);

globe.appendChild(renderer.domElement);



// Sun

const sun = new THREE.Mesh(

new THREE.SphereGeometry(.45,32,32),

new THREE.MeshBasicMaterial({
    color:0xffaa00
})

);

scene.add(sun);



// Planets

const planets = [];

const isMobile = window.innerWidth < 768;


const planetData = isMobile ? [

{size:.10,distance:.9,color:0x00aaff,speed:.02},
{size:.14,distance:1.4,color:0xff4444,speed:.012}

] : [

{size:.08,distance:.8,color:0x00aaff,speed:.03},
{size:.12,distance:1.2,color:0xff4444,speed:.02},
{size:.15,distance:1.7,color:0x44ff88,speed:.015},
{size:.10,distance:2.2,color:0xffffff,speed:.01}

];


planetData.forEach(data=>{

const planet = new THREE.Mesh(

new THREE.SphereGeometry(
data.size,
24,
24
),

new THREE.MeshBasicMaterial({
color:data.color
})

);


scene.add(planet);


planets.push({

mesh:planet,
angle:Math.random()*Math.PI*2,
distance:data.distance,
speed:data.speed

});


});



camera.position.z = 4;



function animateSolarSystem(){

requestAnimationFrame(
animateSolarSystem
);


sun.rotation.y += .01;


planets.forEach(p=>{

p.angle += p.speed;


p.mesh.position.x =
Math.cos(p.angle) * p.distance;


p.mesh.position.z =
Math.sin(p.angle) * p.distance;


});


renderer.render(
scene,
camera
);

}


animateSolarSystem();


}






/* ==============================
   3D HOLOGRAPHIC GLOBE
============================== */


const globe =
document.getElementById("globe");


if(globe){


const scene =
new THREE.Scene();


const camera =
new THREE.PerspectiveCamera(
45,
1,
0.1,
1000
);


const renderer =
new THREE.WebGLRenderer({
alpha:true,
antialias:true
});


renderer.setSize(
300,
300
);


globe.appendChild(renderer.domElement);



const geometry =
new THREE.SphereGeometry(
1,
64,
64
);


const material =
new THREE.MeshBasicMaterial({

color:0x00eaff,

wireframe:true

});


const earth =
new THREE.Mesh(
geometry,
material
);


scene.add(earth);


camera.position.z=3;



function rotateGlobe(){

earth.rotation.y += .01;

renderer.render(
scene,
camera
);

requestAnimationFrame(
rotateGlobe
);

}


rotateGlobe();


}







/* ==============================
   MOUSE ENERGY FIELD
============================== */


const glow =
document.createElement("div");


document.body.appendChild(glow);


glow.style.position="fixed";

glow.style.width="250px";

glow.style.height="250px";

glow.style.borderRadius="50%";

glow.style.background=
"rgba(0,234,255,.15)";

glow.style.filter=
"blur(70px)";

glow.style.pointerEvents=
"none";

glow.style.zIndex="-1";



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX-125+"px";


glow.style.top =
e.clientY-125+"px";


});







/* ==============================
   AI ASSISTANT
============================== */


const ai =
document.createElement("button");


ai.innerHTML=" TYLER AI";


ai.style.position="fixed";

ai.style.bottom="30px";

ai.style.right="30px";

ai.style.padding="15px 25px";

ai.style.borderRadius="40px";

ai.style.border="2px solid cyan";

ai.style.background="#050816";

ai.style.color="cyan";

ai.style.cursor="pointer";

ai.style.boxShadow=
"0 0 25px cyan";

ai.style.zIndex="500";



document.body.appendChild(ai);



ai.onclick=()=>{


alert(
"TYLER AI ONLINE\n\n"+
"Welcome to Tyler's Cyberpunk AI Lab.\n\n"+
"Available modules:\n"+
"- About Tyler\n"+
"- Skills\n"+
"- Projects\n"+
"- Contact\n\n"+
"System Status: ONLINE"
);


};
