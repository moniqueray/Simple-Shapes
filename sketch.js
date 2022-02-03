/***********************************************************************************
  SimpleShapes
  by Scott Kildall

  Sketch for drawing some very simple shapes

***********************************************************************************/

// Global Variables
var ellipseXPos = 0;
var ellipseYPos = 300;
var ellipseDist = 40;

// Setup code goes here
function setup() {
  //windowWidth means it goes out to the whole window as you change
  //the window size

  //CREATE SPECFIC SIZE LATER
  createCanvas(windowWidth, windowHeight);
  console.log("Starting up Simple Shapes");
  rectMode(CENTER);
  ellipseMode(CENTER);

  //console window 
  console.log("Width = " + width);
  console.log("Height = " + height);

  // set ellipse X pos
  ellipseXPos = width/2 - 250;
 }

// DRAW CODE HERE!!
function draw() {
  background('#fae');
  

  //drawEllipses();
  drawRects();
  drawCircle();
}


// //function drawEllipses() {
//   // Ellipse #1
//   fill(0,255,0);
//   ellipse(ellipseXPos,ellipseYPos,200,80);

//   // Ellipse #2
//   fill(0,255,0);
//   ellipse(ellipseXPos,ellipseYPos+ellipseDist,200,80);
// }

function drawRects() {
 // Center Rectangle
  fill(240);
  stroke(51);
  strokeWeight(9);
  rect(width/2,height/2,500,600);

  // Tall Rect
  //fill(126,50,20);
 // stroke(27);
  //strokeWeight(2);
  //rect( 100,height/2,40,400);
 }

 
 function drawCircle() {
  let c = color(255, 204, 153);
  fill(c);
  //fill('rgb(255, 204, 153');
  circle(width/2,height/2,400);
  stokeweight(200);
}
