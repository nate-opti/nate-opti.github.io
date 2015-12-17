

// Globals
var lastTime = 0
var circleX = 200
var circleY = 200

// Init
var setup = function() {
  // Full size of window
  createCanvas(windowWidth, windowHeight);

  // Background image
  bg = loadImage("img/optigrey.svg");
  background(bg);
  console.log('hi');
}

// Render loop
var draw = function() {

  // Randomly color and display the circle
  stroke(randomColor());
  fill(randomColor());
  ellipse(circleX, circleY, 15, 15);

  // Move the circle to next position, or reset pos if it hits edges
  if (circleX === 0 || circleX === windowWidth || circleY === 0 || circleY === windowHeight){
    resetCirclePos()
  }
  circleX = circleX + Math.floor(Math.random() * 4) - 1.1
  circleY = circleY + Math.floor(Math.random() * 4) - 1.1

  // // Flash message every 10 seconds
  // if (millis() - lastTime >= 10000) {

  //   lastTime = millis();

  //   ellipse(circleX, circleY, 15, 15);

  //   // resetCirclePos();
  //   // background(255);

  //   //console.log('cleared, set lastTime to ' + lastTime);
  // }
}

// Helpers
var randomColor = function() {
  return color(random(255), random(255), random(255), random(255));
}

var resetCirclePos = function() {
  circleX = Math.floor(Math.random() * windowWidth);
  circleY = Math.floor(Math.random() * windowHeight);
}
