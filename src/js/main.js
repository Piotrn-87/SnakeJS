"use strict";

const CANVAS = "canvas";
const BOX = 32;

let ctx;

const canvas = document.getElementById(CANVAS);
ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "../assets/img/ground.png";

function draw() {
  ctx.drawImage(ground, 0, 0);
}
let game = setInterval(draw, 100);
