var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
  ctx.beginPath();
  ctx.arc(20, 20, 10, 0, Math.PI*10, false);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);
