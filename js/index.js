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
    bg = loadImage("img/optigrey.svg");
  } else {
    bg = randomColor();
  }
}


var setup = function() {
  createCanvas(windowWidth, windowHeight);
  // Set pre-loaded img as background
  background(bg)
}


// Render loop
var draw = function() {

  // Render existing circles
  for (i = 0; i < historicCircles.length; i++) {
    stroke(historicCircles[i].s);
    fill(historicCircles[i].f);
    rect(historicCircles[i].x, historicCircles[i].y, SQUARE_SIZE, SQUARE_SIZE);
  }

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
  circleX = circleX + Math.floor(Math.random() * 4) - 1.1;
  circleY = circleY + Math.floor(Math.random() * 4) - 1.1;

  // Every X seconds
  if (millis() - lastTime >= 30000) {
    lastTime = millis();
    resetCirclePos();
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
