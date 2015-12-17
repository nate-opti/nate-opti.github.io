

// Globals
var lastTime = 0

// Init
var setup = function() {
  // Fullscreen
  createCanvas(windowWidth, windowHeight);
}

// Render loop
var draw = function() {

  // Follow cursor with randomly colored ellipses
  stroke(randomColor());
  fill(randomColor());
  ellipse(mouseX, mouseY, 15, 15);

  // Clear sketch every 8 seconds
  if (millis() - lastTime >= 8000) {
    background(255);
    lastTime = millis();
    console.log('cleared, set lastTime to ' + lastTime);
  }
}

// Helpers
var randomColor = function() {
  return color(random(255), random(255), random(255), random(255));
}
