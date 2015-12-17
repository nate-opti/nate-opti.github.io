// Globals
var lastTime = 0;

var circleX = 200;
var circleY = 200;
var historicCircles = [];


var preload = function() {
  bg = loadImage("img/optigrey.svg");
}


var setup = function() {
  // Full size of window
  createCanvas(windowWidth, windowHeight);

  // Set pre-loaded img as background
  background(bg)
}


// Render loop
var draw = function() {

  // Background
  //background(255, 204, 0);

  // Render existing circles
  for (i = 0; i < historicCircles.length; i++) {
    stroke(historicCircles[i].s);
    fill(historicCircles[i].f);
    rect(historicCircles[i].x, historicCircles[i].y, 15, 15);
  }

  // New random circle
  var myCircle = new Object();

  s = randomColor();
  stroke(s);
  myCircle.s = s;

  f = randomColor()
  fill(f);
  myCircle.f = f;

  rect(circleX, circleY, 15, 15);

  historicCircles.push(myCircle);

  // Move the circle to next position, or reset pos if it hits edges
  if (circleX === 0 || circleX === windowWidth || circleY === 0 || circleY === windowHeight){
    resetCirclePos()
  }
  circleX = circleX + Math.floor(Math.random() * 4) - 1.1;
  circleY = circleY + Math.floor(Math.random() * 4) - 1.1;

  // // Flash message every 10 seconds
  if (millis() - lastTime >= 10000) {

    lastTime = millis();

    resetCirclePos();

    //console.log('cleared, set lastTime to ' + lastTime);
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
