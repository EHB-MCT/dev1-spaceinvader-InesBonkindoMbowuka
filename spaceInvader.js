"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

context.lineWidth = 3;
context.fillStyle = "black";
context.beginPath();
context.rect(0,0,300,300);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(25,25,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(25,75,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(75,75,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(75,125,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(75,175,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(25,175,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(25,225,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(225,25,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(225,75,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(175,75,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(175,125,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(175,175,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(125,175,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(225,175,50,50);
context.fill();

context.lineWidth = 3;
context.fillStyle = "66FF00";
context.beginPath();
context.rect(225,225,50,50);
context.fill();
}