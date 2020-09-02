"use strict";

const BOX = 32;
const CANVAS = "canvas";
const canvas = document.getElementById(CANVAS);
const ground = new Image();
const food = new Image();

let ctx;
let food = {
  x: 10,
};

ctx = canvas.getContext("2d");

ground.src = "../assets/img/ground.png";
food.src = "../assets/img/food.png";

function draw() {
  ctx.drawImage(ground, 0, 0);

  // ctx.drawImage(food, food.x, food.y);
}
let game = setInterval(draw, 100);
