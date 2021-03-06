// previous location
var previousX;
var previousY;

// current location
var x;
var y;

function setup() {
  createCanvas(600, 360);
  // start in the center
  x = width/2;
  y = height/2;
  background(255);
}

function draw() {
  
  
  // save current location
  previousX = x;
  previousY = y;
  
  // get a new current location
  x += random(-10,10);
  y += random(-10,10);
   
  // connect both with a line
  stroke(0);
  strokeWeight(2);
  line(previousX,previousY,x,y);
  
  // stay in the window
  x = constrain(x,0,width);
  y = constrain(y,0,height);
}

