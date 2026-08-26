"use strict";

const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");

let gradient = ctx.createLinearGradient(0,0,0,300);
gradient.addColorStop(0, "darkBlue");
gradient.addColorStop(1, "red");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 600, 300);

function drawMountains() {
    ctx.beginPath()
    ctx.moveTo(0, 300);
    ctx.bezierCurveTo(10, 120, 50, 280, 80, 220);
    ctx.bezierCurveTo(120, 200, 150, 280, 180, 280);
    ctx.bezierCurveTo(230, 260, 300, 280, 300, 290);
    ctx.bezierCurveTo(330, 250, 350, 270, 370, 200);
    ctx.bezierCurveTo(400, 230, 420, 180, 440, 200);
    ctx.bezierCurveTo(500, 270, 550, 290, 600, 300);
    ctx.lineTo(600, 300);
    ctx.lineTo(0, 300);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
}

drawMountains();

gradient = ctx.createLinearGradient(0, 300, 0, 600);
gradient.addColorStop(0, "black");
gradient.addColorStop(1, "green");

ctx.fillStyle = gradient;
ctx.fillRect(0, 300, 600, 600);

function drawHouse(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x-5, y);
    ctx.lineTo(x+w+5, y);
    ctx.lineTo(x+(w/2), y-35);
    ctx.lineTo(x-5, y);
    ctx.closePath();
    ctx.fillStyle = "black"
    ctx.fill();
    ctx.beginPath();
    ctx.rect(x+(w/3)-10, y+(h/3), w/4, (h/3)*2);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.beginPath()
    ctx.rect(x+w-w/3, y+30, 20, 20);
    ctx.closePath();
    ctx.fill();

}

drawHouse(450, 450, 100, 70);
/*
1. color background
2. draw mountains/color mountains
3. color ground
4. draw/color house
*/