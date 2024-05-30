let colors = ['#6F8F6A', '#C15B5C', '#F8E8B6'];
let currentColorIndex = 0;
let elements = [];
let currentElementIndex = 0;
let rotationAngle = 0;
let rotationEnabled = false;

function setup() {
  createCanvas(600, 800);
  background(148, 177, 169);
  drawBackgroundRect(50, 50, width - 100, height - 100, color(49, 74, 85));

  let green = colors[currentColorIndex % colors.length];
  let red = colors[(currentColorIndex + 1) % colors.length];
  let yellow = colors[(currentColorIndex + 2) % colors.length];

  let centerX = width / 2;
  let centerY = 400;
  let diameters = [80, 50, 30, 60];

  // Store drawing instructions in elements array
  elements.push(() => drawSplitCircle(centerX, centerY, diameters[0], green, red));
  elements.push(() => drawSplitCircle(centerX - 0.82 * diameters[0], centerY, diameters[1], green, red));
  elements.push(() => drawSplitCircle(centerX - 0.7 * diameters[0] - diameters[1], centerY, diameters[2], green, red));
  elements.push(() => drawSplitCircleLR(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - diameters[2], diameters[3], green, red));
  elements.push(() => drawSplitCircle(centerX + 0.88 * diameters[0], centerY, diameters[3], green, red));
  elements.push(() => drawSplitCircle(centerX + 1.26 * diameters[0] + diameters[2], centerY, diameters[3], green, red));
  elements.push(() => drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY, centerX + 1.26 * diameters[0] + diameters[2] + diameters[3] / 2, centerY));
  elements.push(() => drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - diameters[2] + diameters[3] / 2, centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - diameters[2] - diameters[3] / 2));
  elements.push(() => drawBottomRectangles(centerX, centerY + 1.11 * diameters[1] + diameters[2] + diameters[3], 300, 50, green, yellow));
  elements.push(() => drawRectAndCircle(centerX - 105, centerY + 1.7 * diameters[1] + diameters[2] + diameters[3], 50, 60, green, yellow, centerX - 80, centerY + 2.3 * diameters[1] + diameters[2] + diameters[3], 50));
  elements.push(() => drawRectAndCircle(centerX + 55, centerY + 1.7 * diameters[1] + diameters[2] + diameters[3], 60, 60, red, yellow, centerX + 85, centerY + 2.2 * diameters[1] + diameters[2] + diameters[3], 60));
  elements.push(() => drawSplitCircleLR(centerX, centerY - 0.92 * diameters[0], diameters[3], green, red));
  elements.push(() => drawSplitCircleLR(centerX, centerY - 1.68 * diameters[0], diameters[0], green, red));
  elements.push(() => drawSplitCircleLR(centerX, centerY + 1.3 * diameters[1], diameters[1], green, red));
  elements.push(() => drawSplitCircleLR(centerX, centerY + diameters[1] + diameters[2], diameters[2], green, red));
  elements.push(() => drawSplitCircleLR(centerX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[1], green, red));
  elements.push(() => drawLine(centerX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + diameters[1] / 2, centerX, centerY - 1.68 * diameters[0] - diameters[0] / 2));
  elements.push(() => drawSplitCircleTopRed(centerX + 0.8 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[3], red, green));
  elements.push(() => drawSplitCircleTopRed(centerX + 1.7 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[0], red, green));
  elements.push(() => drawSplitCircleTopRed(centerX - 0.8 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[3], red, green));
  elements.push(() => drawSplitCircleTopRed(centerX - 1.6 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[1], red, green));
  elements.push(() => drawLine(centerX - 1.6 * diameters[1] - diameters[1] / 2, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], centerX + 1.7 * diameters[1] + diameters[0] / 2, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3]));
  elements.push(() => drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY - 1.8 * diameters[0] + diameters[2] * 0.1, diameters[1], green, red));
  elements.push(() => drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY - 1.48 * diameters[0] - diameters[1] + diameters[2] * 0.1, diameters[0], green, red));
  elements.push(() => drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY - 0.65 * diameters[0] - diameters[1] - diameters[2] + diameters[2] * 0.1, diameters[2], green, red));
  elements.push(() => drawLine(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY, centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2, centerY - 0.65 * diameters[0] - diameters[1] - diameters[2] + diameters[2] * 0.1 - diameters[2] / 2));

  // Add event listener for mouse click
  canvas.addEventListener('click', startAnimation);
}

function draw() {
  // Clear the background for each frame
  background(148, 177, 169);
  drawBackgroundRect(50, 50, width - 100, height - 100, color(49, 74, 85));

  // Draw all elements up to the current index
  for (let i = 0; i <= currentElementIndex; i++) {
    elements[i]();
  }

  // Rotate the circles if all elements have appeared
  if (rotationEnabled) {
    rotationAngle += 0.01; // Increase the rotation angle
  }
}

function startAnimation() {
  currentElementIndex = 0;
  rotationAngle = 0;
  rotationEnabled = false;

  let interval = setInterval(() => {
    currentElementIndex++;
    if (currentElementIndex >= elements.length) {
      clearInterval(interval);
      rotationEnabled = true; // Enable rotation after all elements are drawn
    }
  }, 500);
}

function drawBackgroundRect(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
}

function drawBottomRectangles(centerX, y, rectWidth, rectHeight, green, yellow) {
  let totalWidth = rectWidth * 3;
  let startX = centerX - totalWidth / 2;
  
  fill(green);
  noStroke();
  rect(startX + 50, y + 40, (rectWidth * 3) - 100, rectHeight + 10);
  
  fill(yellow);
  rect(startX + rectWidth, y + 30, rectWidth, rectHeight + 10);
}

function drawLine(x, y, x1, y1) {
  push();
  stroke(235, 187, 138);
  strokeWeight(3);
  line(x, y, x1, y1);
  pop();
}

function drawSplitCircle(x, y, diameter, color1, color2) {
  push();
  translate(x, y);
  if (rotationEnabled) {
    rotate(rotationAngle);
  }
  fill(color1);
  arc(0, 0, diameter, diameter, 0, PI);
  fill(color2);
  arc(0, 0, diameter, diameter, PI, 0);
  pop();
}

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
  pop();
}

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
  pop();
}

function drawRectAndCircle(rectX, rectY, rectWidth, rectHeight, rectColor, circleColor, circleX, circleY, circleDiameter) {
  fill(rectColor);
  rect(rectX, rectY, rectWidth, rectHeight);
  fill(circleColor);
  ellipse(circleX, circleY, circleDiameter, circleDiameter);
}
