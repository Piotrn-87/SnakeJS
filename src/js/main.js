"use strict";

console.table("it works");

const BOX = 32;
const CANVAS = document.getElementById("canvas");
const GROUNDIMG = new Image();
const FOODIMG = new Image();

let ctx;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * BOX,
  y: Math.floor(Math.random() * 15 + 3) * BOX,
};

ctx = CANVAS.getContext("2d");

GROUNDIMG.src = "../assets/img/ground.png";
FOODIMG.src = "../assets/img/food.png";

function draw() {
  ctx.drawImage(GROUNDIMG, 0, 0);

  ctx.drawImage(FOODIMG, food.x, food.y);
}
let game = setInterval(draw, 100);
