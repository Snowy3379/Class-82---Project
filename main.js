var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")

var color = "black"
var radius = 3;
var lineWidth = 3;

var currentX, currentY, lastX, lastY;
var mouseEvent = ""

canvas.addEventListener ("mousedown", my_mousedown)

function my_mousedown(e) {
  color = document.getElementById("color").value
  lineWidth = document.getElementById("size").value
  radius = document.getElementById("radius").value
  mouseEvent = "mousedown"
  
} 

canvas.addEventListener ("mouseup", my_mouseup)

function my_mouseup(e) {

  mouseEvent = "mouseup"
}

canvas.addEventListener ("mouseleave", my_mouseleave)

function my_mouseleave(e) {
  mouseEvent = "mouseleave"
}

canvas.addEventListener ("mousemove", my_mousemove)

function my_mousemove(e) {
  
  currentX = e.clientX - canvas.offsetLeft;
  currentY = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.arc(currentX,currentY, radius, 0, 2* Math.PI)
    ctx.stroke();
      mouseEvent = "mousemove"
  }
}

function clearCanvas () {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

