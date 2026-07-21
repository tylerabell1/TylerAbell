/* ==================================
   TYLER OS v2.0
   Cyberpunk AI Laboratory System
================================== */


/* ==============================
   BOOT SEQUENCE
============================== */

const bootText = document.getElementById("bootText");

const messages = [
    "Initializing AI Core...",
    "Loading Neural Interface...",
    "Scanning Technology Modules...",
    "Connecting Portfolio Database...",
    "System Online ✓"
];

let bootIndex = 0;


function bootSequence(){

    if(bootIndex < messages.length){

        bootText.innerHTML = messages[bootIndex];

        bootIndex++;

        setTimeout(bootSequence,700);

    }else{

        setTimeout(()=>{

            document.getElementById("boot").style.display="none";

        },1000);

    }

}

bootSequence();





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
   PARTICLE STARFIELD
============================== */


const canvas =
document.getElementById("bg");

const ctx =
canvas.getContext("2d");


function resize(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resize();

window.addEventListener(
"resize",
resize
);


let particles=[];


for(let i=0;i<300;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2,

speed:Math.random()+.2

});

}



function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


ctx.fillStyle="#00eaff";


particles.forEach(p=>{


ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fill();


p.y += p.speed;


if(p.y > canvas.height){

p.y=0;

p.x=Math.random()*canvas.width;

}


});


requestAnimationFrame(
animateParticles
);

}


animateParticles();






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


ai.innerHTML="🤖 TYLER AI";


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
