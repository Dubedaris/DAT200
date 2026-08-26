"use strict";

const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(0, 0 , 600, 600);

ctx.fillStyle = "brown";
ctx.fillRect(20, 200, 560, 200);

ctx.beginPath();
ctx.moveTo(20, 300);
