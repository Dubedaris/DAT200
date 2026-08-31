"use strict";

const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
const amount = document.getElementById("amount");
const k = document.getElementById("k");

const gradient = ctx.createRadialGradient(300, 300, 360, 300, 300, 10);
gradient.addColorStop(0, "pink");
gradient.addColorStop(1, "lightblue");
ctx.fillStyle = gradient;
ctx.fillRect(0,0,600,600);

const r = 300; //r = radius
const cX = 300; // cX = x of circle center
const cY = 300; // cY = y of circle center
let v = null; // radian
const x = r*Math.cos(v);
const y = r*Math.sin(v);

ctx.beginPath();
ctx.arc(cX, cY, r, 0, 2 * Math.PI);
ctx.stroke();

/*
switch (amount) {
    case 16:

        break;
    case 32:

        break;
    case 64:

        break;
    case 128:

        break;
    case 256:

        break;
    case 512:

        break;
}

switch (k) {
    case 1:

        break;
    case 2:

        break;
    case 3:

        break;
    case 4:

        break;
    case 5:

        break;
    case 6:

        break;
    case "max":

        break;
}
*/



