// Globals
var lastTime = 0;
var lastTime1 = 0;
var circleX = 200;
var circleY = 200;

var startBouncingLogo = false


// Constants
var SQUARE_SIZE = 60
var LOCAL_DEV = false  // Set this by hand (:/) on local to avoid same origin policy issues loading images via file:// protocol


// Preload
var preload = function() {
  if (!LOCAL_DEV) {
    // This takes time to need to preload before using in setup() method
    optiGrey = loadImage('img/optigrey.svg');
    optiLogo = loadImage('img/opti_logo.svg')
  }
}


// Setup
var setup = function() {
  createCanvas(windowWidth, windowHeight);
  background(color(255, 204, 9));
}


// Draw -- main render loop
var draw = function() {
  // Draw new square
  stroke(randomColor());
  fill(randomColor());
  rect(circleX, circleY, SQUARE_SIZE, SQUARE_SIZE);

  // Move square to next position, or reset pos if it hits edges
  if (circleX === 0 || circleX === windowWidth || circleY === 0 || circleY === windowHeight){
    resetSquarePos()
  }
  circleX = circleX + Math.floor(Math.random() * 4) - 1.4;
  circleY = circleY + Math.floor(Math.random() * 4) - 1.4;

  // Every 3 seconds
  if (millis() - lastTime >= 3000) {
    lastTime = millis();
    resetSquarePos();
    tomFord();
    smilingCat();
  }

  // Every second
  if (millis() - lastTime1 >= 1000) {
    lastTime1 = millis();
    paintLogo();
  }

  // After 30 seconds
  if (millis() >= 30000) {
    startBouncingLogo = true;
  }

  if (startBouncingLogo) {
    moveLogo();
    paintBouncingLogo();
  }
}


// Helper functions
var randomColor = function() {
  return color(random(255), random(255), random(255), random(255));
}

var resetSquarePos = function() {
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
  // Generate a cspr 32-bit int
  var arr = new Uint32Array(1);
  window.crypto.getRandomValues(arr);

  // Clear old number
  stroke(color(255, 204, 9));
  fill(color(255, 204, 9));
  rect(windowWidth / 2, windowHeight / 2, windowWidth + 1000, 100000);

  // Display new number
  stroke(randomColor());
  fill(randomColor());
  textSize(64);
  text('via csprng:' + arr[0], windowWidth / 4, windowHeight - 200);
}

var paintLogo = function() {
  if (!LOCAL_DEV) {
    image(
      optiLogo,
      Math.floor(Math.random() * windowWidth),
      Math.floor(Math.random() * windowWidth),
      optiLogo.width / 4,
      optiLogo.height / 4
    );
  } else {
    rect(
      Math.floor(Math.random() * windowWidth),
      Math.floor(Math.random() * windowWidth),
      100,
      100
    );
  }
}

// Bouncing ball

/**
 * Modified version of bouncing ball class to use SVG logo
 *
 * Based on: http://www.learningprocessing.com
 * Example 10-2: Bouncing ball class
 */

logoX = 100;
logoY = 100;
xSpeed = 0.5;
ySpeed = 0.5;

var moveLogo = function() {
  logoX += xSpeed; // Increment x
  logoY += ySpeed; // Increment y

  // Check horizontal edges
  if (logoX > windowWidth - (optiLogo.width / 10)  || logoX < 0) {
    xSpeed *= - 1;
  }
  // Check vertical edges
  if (logoY > windowHeight - (optiLogo.height / 10) || logoY < 0) {
    ySpeed *= - 1;
  }

  xSpeed += Math.random() + .25 - 0.125;
  ySpeed += Math.random() + .25 - 0.125;
}

var paintBouncingLogo = function() {
  image(optiLogo, logoX, logoY, optiLogo.height / 10, optiLogo.width / 10);
}
