"use strict";

const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");

const gradient = ctx.createLinearGradient(0,0,0,300);
gradient.addColorStop(0, "darkBlue");
gradient.addColorStop(1, "red");

ctx.fillStyle = gradient;
ctx.fillRect(0,0, 600, 300);

function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}


/*
1. color background
2. draw mountains/color mountains
3. color ground
4. draw/color house
*/