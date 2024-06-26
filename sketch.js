// Define color group
let colors = ['#6F8F6A', '#C15B5C', '#F8E8B6'];
// Index of the current color
let currentColorIndex = 0;
// Rotation angle initialization
let rotationAngle = 0;
// Stores an array of display elements
let showElements = [];
// Total number of elements to show
let totalElements = 26;
// Index of the currently displayed element
let currentElementIndex = 0;
// Whether to enable rotation
let rotationEnabled = false;

// Create canvas & initialize the elements
function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeElements();
  // Add a click event listener
  canvas.addEventListener('click', startAnimation);
}

// Redefines canvas size when window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializeElements();

// Draw background texture
for (let i = 0; i < 10000; i++) {
  stroke(200, 200, 250, 50);
  point(random(width), random(height));
}
}

// Initializes the element
function initializeElements() {
  showElements = Array(totalElements).fill(false);
}

// Main drawing part
function draw() {
  // Clear the background for each frame
  background(148, 177, 169);
  // Draw the background rect
  drawBackgroundRect(0.08 * width, 0.08 * height, 0.84 * width, 0.84 * height, color(49, 74, 85));

  // Green & Red
  let green = colors[currentColorIndex % colors.length];
  let red = colors[(currentColorIndex + 1) % colors.length];
  let yellow = colors[(currentColorIndex + 2) % colors.length];

  // Central position
  let centerX = width / 2;
  let centerY = height / 2;

  // List of diameters of circles
  let diameters = [0.1 * width, 0.06 * width, 0.04 * width, 0.08 * width];

  // Draws circles and line at different positions, depending on the showElements array
  // Middlle center circle
  if (showElements[0]) drawSplitCircle(centerX, centerY, diameters[0], green, red);
  // Left center circles
  if (showElements[1]) drawSplitCircle(centerX - 0.82 * diameters[0], centerY, diameters[1], green, red);
  if (showElements[2]) drawSplitCircle(centerX - 0.7 * diameters[0] - diameters[1], centerY, diameters[2], green, red);
  if (showElements[3]) drawSplitCircleLR(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - diameters[2], diameters[3], green, red);
  // Right center circles
  if (showElements[4]) drawSplitCircle(centerX + 0.88 * diameters[0], centerY, diameters[3], green, red);
  if (showElements[5]) drawSplitCircle(centerX + 1.26 * diameters[0] + diameters[2], centerY, diameters[3], green, red);
  // Center horizontal line
  if (showElements[6]) drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY, centerX + 1.26 * diameters[0] + diameters[2] + diameters[3] / 2, centerY);
  // Left vertical line
  if (showElements[7]) drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - diameters[2] + diameters[3] / 2, centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - diameters[2] - diameters[3] / 2);
  // Bottom rectangles
  if (showElements[8]) drawBottomRectangles(centerX, centerY + 1.11 * diameters[1] + diameters[2] + diameters[3], 300, 50, green, yellow);
  if (showElements[9]) drawRectAndCircle(centerX - 105, centerY + 1.7 * diameters[1] + diameters[2] + diameters[3], 50, 60, green, yellow, centerX - 80, centerY + 2.3 * diameters[1] + diameters[2] + diameters[3], 50);
  if (showElements[10]) drawRectAndCircle(centerX + 55, centerY + 1.65 * diameters[1] + diameters[2] + diameters[3], 60, 60, red, yellow, centerX + 85, centerY + 2.2 * diameters[1] + diameters[2] + diameters[3], 60);
   // Upper middle circles
  if (showElements[11]) drawSplitCircleLR(centerX, centerY - 0.88 * diameters[0], diameters[3], green, red);
  if (showElements[12]) drawSplitCircleLR(centerX, centerY - 1.73 * diameters[0], diameters[0], green, red);
  // Lower middle circles
  if (showElements[13]) drawSplitCircleLR(centerX, centerY + 1.3 * diameters[1], diameters[1], green, red);
  if (showElements[14]) drawSplitCircleLR(centerX, centerY + 1.8 * diameters[1] + diameters[2], diameters[3], green, red);
  if (showElements[15]) drawSplitCircleLR(centerX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[1], green, red);
  if (showElements[16]) drawLine(centerX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + diameters[1] / 2, centerX, centerY - 1.68 * diameters[0] - diameters[0] / 2);
  // Bottom additional circles
  if (showElements[17]) drawSplitCircleTopRed(centerX + 0.8 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[2], red, green);
  if (showElements[18]) drawSplitCircleTopRed(centerX + 1.7 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[3], red, green);
  if (showElements[19]) drawSplitCircleTopRed(centerX - 0.8 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[2], red, green);
  if (showElements[20]) drawSplitCircleTopRed(centerX - 1.6 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[1], red, green);
  if (showElements[21]) drawLine(centerX - 1.6 * diameters[1] - diameters[1] / 2, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], centerX + 1.7 * diameters[1] + diameters[0] / 2, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3]);
  // Right top circles
  if (showElements[22]) drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY - 0.69 * diameters[0] + diameters[2] * 0.1, diameters[1], green, red);
  if (showElements[23]) drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY - 1.25 * diameters[0] - diameters[1] + diameters[2] * 0.1, diameters[0], green, red);
  if (showElements[24]) drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY - 0.2 * diameters[0] - diameters[1] - diameters[2] + diameters[2] * 0.1, diameters[2], green, red);
  // Right vertical line
  if (showElements[25]) drawLine(centerX + 1.26 * diameters[2] + diameters[0]+diameters[3]/2,centerY,centerX + 1.26 * diameters[2] + diameters[0]+diameters[3]/2,centerY - 0.65 * diameters[0] - diameters[1] - diameters[2]+diameters[2]*0.1-diameters[2]/2); 

  // Rotate the circles if all elements have appeared
  if (rotationEnabled) {
    // Increase the rotation angle
    rotationAngle += 0.01; 
  }
}

// Start animation
function startAnimation() {
  currentElementIndex = 0;
  rotationEnabled = false;

  let interval = setInterval(() => {
    // Show current elements
    showElements[currentElementIndex] = true;
    currentElementIndex++;
    if (currentElementIndex >= totalElements) {
      clearInterval(interval);
      // Enable rotation after all elements are shown
      rotationEnabled = true; 
    }
    // Displays an element every 500 milliseconds
  }, 500);
}

// Draw background rect
function drawBackgroundRect(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
}

// Draw bottom rectangle and small circle
function drawBottomRectangles(centerX, y, rectWidth, rectHeight, green, yellow) {
  push();
  let totalWidth = rectWidth * 3;
  let startX = centerX - totalWidth / 2;
  
  fill(green);
  noStroke();
  rect(startX + 50, y + 40, (rectWidth * 3) - 100, rectHeight + 10);
  
  fill(yellow);
  rect(startX + rectWidth, y + 30, rectWidth, rectHeight + 10);
  pop();
}

// Draw lines
function drawLine(x, y, x1, y1) {
  push();
  stroke(235, 187, 138);
  strokeWeight(3);
  line(x, y, x1, y1);
  pop();
}

// Draw circles with green on top and red on bottom
function drawSplitCircle(x, y, diameter, color1, color2) {
  push();
  translate(x, y);
  if (rotationEnabled) {
    //// Rotate if rotation is enabled
    rotate(rotationAngle);
  }
  fill(color1);
  // Top half
  arc(0, 0, diameter, diameter, 0, PI);
  fill(color2);
  // Lower half
  arc(0, 0, diameter, diameter, PI, 0);
  noFill();
  // Draw the outline of the circle
  ellipse(0, 0, diameter, diameter);
  pop();
}

// Draw circles with red on the left and green on the right
function drawSplitCircleLR(x, y, diameter, color1, color2) {
  push();
  translate(x, y);
  if (rotationEnabled) {
    rotate(rotationAngle);
  }
  fill(color1);
  arc(0, 0, diameter, diameter, -HALF_PI, HALF_PI);
  fill(color2);
  arc(0, 0, diameter, diameter, HALF_PI, -HALF_PI);
  noFill();
  ellipse(0, 0, diameter, diameter);
  pop();
}

// Draw circles with red on top and green on bottom
function drawSplitCircleTopRed(x, y, diameter, color1, color2) {
  push();
  translate(x, y);
  if (rotationEnabled) {
    rotate(rotationAngle);
  }
  fill(color1);
  arc(0, 0, diameter, diameter, 0, PI);
  fill(color2);
  arc(0, 0, diameter, diameter, PI, 0);
  noFill();
  ellipse(0, 0, diameter, diameter);
  pop();
}

//Draw rectangles and circles on the bottom rectangle
function drawRectAndCircle(rectX, rectY, rectWidth, rectHeight, rectColor, circleColor, circleX, circleY, circleDiameter) {
  noStroke();
  fill(rectColor);
  rect(rectX, rectY, rectWidth, rectHeight);
  fill(circleColor);
  ellipse(circleX, circleY, circleDiameter, circleDiameter);
}