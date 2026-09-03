/*"use strict";

IKKE LENGER I BRUK


const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
const amount = document.getElementById("amount");
const k = document.getElementById("k");
const points = parseInt(amount.value);
const radians = 2*Math.PI/points;


const gradient = ctx.createRadialGradient(300, 300, 360, 300, 300, 10);
gradient.addColorStop(0, "pink");
gradient.addColorStop(1, "lightblue");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 600, 600);

const r = 300; //r = radius
const cX = 300; // cX = x of circle center
const cY = 300; // cY = y of circle center
let v = null; // radian


amount.addEventListener("change", draw());
k.addEventListener("change", draw());

function draw() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 600);
    console.log(points + radians);

}



Draw i html
Liste med punkter? for-løkke som pusher riktig antall punkter?


*/


