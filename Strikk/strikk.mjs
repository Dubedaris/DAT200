"use strict";

const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
const circleX = 300;
const circleY = 300;
const radius = 10;

function background() {
    ctx.fillStyle = "orange";
    ctx.fillRect(0, 0 , 600, 600);

    ctx.fillStyle = "brown";
    ctx.fillRect(20, 200, 560, 200);

    ctx.fillStyle = "black"; 
    ctx.fillText("Mari Værnesbranden", 0, 580);
}

function startLine() {
    ctx.beginPath();
    ctx.moveTo(20, 300);
    ctx.lineTo(580, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300, 300, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

background();
startLine();

cvs.addEventListener("mousemove", function (e) {
    let currX = e.clientX - cvs.offsetLeft; //Man bruker offset for å få riktig posisjon i forhold til grafikken man har tegnet på Canvaset 
    let currY = e.clientY - cvs.offsetTop;  //Man bruker offset for å få riktig posisjon i forhold til grafikken man har tegnet på Canvaset
    let l = Math.sqrt((currX-circleX)**2+(currY-circleY)**2);
    if (l <= radius) { 
         document.getElementById("cvs").style.cursor = "pointer"; //her kan man evetuelt utføre tester på det man har mottatt 
    } else {
        document.getElementById("cvs").style.cursor = "auto";
    }
}, false);

cvs.addEventListener("mousedown", function (e) {
    let currX = e.clientX - cvs.offsetLeft;
    let currY = e.clientY - cvs.offsetTop; 
    let l = Math.sqrt((currX-circleX)**2+(currY-circleY)**2);
    document.getElementById("cvs").style.cursor = "grabbing";
    if ("mousemove") {  
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        background();
        ctx.beginPath();
        ctx.arc(currX, currY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(20, 300);
        ctx.lineTo(currX, currY);
        ctx.lineTo(580, 300);
        ctx.stroke();
    }
}, false);

cvs.addEventListener("mouseup", function (e) {
    let currX = e.clientX - cvs.offsetLeft; //Man bruker offset for å få riktig posisjon i forhold til grafikken man har tegnet på Canvaset 
    let currY = e.clientY - cvs.offsetTop;  //Man bruker offset for å få riktig posisjon i forhold til grafikken man har tegnet på Canvaset
    if ("mouseup") {  
        background();
        startLine();
    }
}, false);


