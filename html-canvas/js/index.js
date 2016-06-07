var x = 550;
var y = 250;
var mx =5;
var my = 4;
var canvas;
var context;
var r = 123;

var rectColor = "#00ff00";
var rectX= 150;
var rectY= 80;
var rectL= 200;
var rectH= 150;
var rectMX= 12;
var rectMY= 5;

function init() {
 canvas = document.getElementById("game");
 context = canvas.getContext("2d");
  return setInterval(draw, 20);
}
function clear(){
  context.clearRect(0, 0, 1300, 800);
}
function draw() {
  clear();
  circle( x, y, r);
  drawRect(rectX, rectY)

  //check rectangle bounce off wall
  if (rectY+ rectMY > 800-rectL || rectY+ rectMY < 0) {
    rectMY = -rectMY;
  }

 if(rectX + rectMX > 1300-rectH|| rectX + rectMX < 0) {
    rectMX= -rectMX;
  }
  
  // check circle bounce off wall
  if(x + mx > 1300-r || x + mx < r) {
    mx = -mx;    
  }
  
  if (y + my > 800-r || y + my < r) {
    my = -my;
  }
  
  //Collision between ball and block
  if ((x-r) < (rectX+rectH) ){
    var oldmx = mx;   
    mx = rectMX;
    rectMX = oldmx;
  }
  
  
  //New positions
  //rectangle
  rectX +=rectMX;
  rectY +=rectMY;
  
  //circle
  x +=mx;
  y +=my;
}
function drawRect(x, y) {
   context.fillStyle = "#00ff00"
  context.fillRect(x, y, rectH, rectL);
}

function circle(x,y,r) {
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI*2, true);
  context.fillStyle="#009977"
  context.fill();
}


init();