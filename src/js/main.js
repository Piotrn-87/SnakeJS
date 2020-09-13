"use strict";

console.table("it works");

const BOX = 32;
const CANVAS = document.getElementById("canvas");
const GROUND_IMG = new Image();
const FOOD_IMG = new Image();

let ctx;
let snake = [];
snake[0] = {
  x: 9 * BOX,
  y: 10 * BOX,
};

let food = {
  x: Math.floor(Math.random() * 17 + 1) * BOX,
  y: Math.floor(Math.random() * 15 + 3) * BOX,
};

ctx = CANVAS.getContext("2d");

GROUND_IMG.src = "../assets/img/ground.png";
FOOD_IMG.src = "../assets/img/food.png";

function draw() {
  ctx.drawImage(GROUND_IMG, 0, 0);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, BOX, BOX);
    ctx.strokeStyle = "purple";
    ctx.strokeRect(snake[i].x, snake[i].y, BOX, BOX);
  }

  // console.log(snake.length);
  ctx.drawImage(FOOD_IMG, food.x, food.y);
}
let game = setInterval(draw, 100);
