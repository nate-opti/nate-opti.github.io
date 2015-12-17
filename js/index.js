// Globals
var lastTime = 0;

var circleX = 200;
var circleY = 200;
var historicCircles = [];

// Constants
var SQUARE_SIZE = 60
var LOCAL_DEV = false  // Set this by hand (:/) on local to avoid same origin policy issues loading images via file:// protocol


var preload = function() {
  if (!LOCAL_DEV) {
    // This takes time to need to preload before using in setup() method
    optiGrey = loadImage('img/optigrey.svg');
    optiLogo = loadImage('img/opti_logo.svg')
  }
}


var setup = function() {
  createCanvas(windowWidth, windowHeight);
  background(color(255, 204, 9))
}


// Render loop
var draw = function() {

  // New random circle
  var myCircle = new Object();

  s = randomColor();
  stroke(s);
  myCircle.s = s;

  f = randomColor()
  fill(f);
  myCircle.f = f;

  rect(circleX, circleY, SQUARE_SIZE, SQUARE_SIZE);

  historicCircles.push(myCircle);

  // Move active square to next position, or reset pos if it hits edges
  if (circleX === 0 || circleX === windowWidth || circleY === 0 || circleY === windowHeight){
    resetCirclePos()
  }
  circleX = circleX + Math.floor(Math.random() * 4) - 1.4;
  circleY = circleY + Math.floor(Math.random() * 4) - 1.4;

  // Every X seconds
  if (millis() - lastTime >= 5000) {
    lastTime = millis();
    resetCirclePos();
    tomFord();
    smilingCat();
  }
}

// Helpers
var randomColor = function() {
  return color(random(255), random(255), random(255), random(255));
}

var resetCirclePos = function() {
  circleX = Math.floor(Math.random() * windowWidth);
  circleY = Math.floor(Math.random() * windowHeight);
}

var tomFord = function() {
  textSize(64);
  text("TOM FORD", 60, 60);
  fill(0, 102, 153, 51);
  text("TOM FORD", 60, 120);
}

var smilingCat = function() {
  textSize(128);
  text("😸", 200, 200);
}
