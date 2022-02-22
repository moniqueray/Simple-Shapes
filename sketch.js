//Self-Portrait Project 
//Monique Ray

//Debug
var gDebugMode = false;

//my setup foundation
function setup() {
  createCanvas(400, 400);
 }

function draw() {
  background('#fae');
  fill(0,50,0);
  stroke(0);
  strokeWeight(1);

  //motorcycle jacket
  drawJacket();

  //neck
  drawNeck();

  //head / bone structure
  drawHead();

  //hair lowlights
  drawLowlights();

  //hair highlights
  drawHighlights();

  //face (facial features - eyes, nose, lips, cheeks)
  drawFace();

  if(gDebugMode) {
    displayMouseCoordinates();
  }
}

function drawJacket() {
  fill('#333333');
  stroke(0);
  strokeWeight(0);
  beginShape();
  vertex (400,400);
  vertex(400,295);
  vertex(258,260);
  vertex(270,400)
  endShape(CLOSE);

  fill('#333333');
  stroke(0);
  strokeWeight(0);
  beginShape();
  vertex(0,400);
  vertex(0,300);
  vertex(130,270);
  vertex(150,400);
  endShape(CLOSE);
}

function drawNeck() {
  //background hair BEHIND neck
  fill(61, 33, 4);
  strokeWeight(0);
  ellipse(190,257,350,300);
  //neck
  fill(217, 202, 143);
  stroke(0);
  strokeWeight(0);
  beginShape();
  vertex(130,400);
  vertex(125,215);
  vertex(253,212);
  vertex(270,400);
  endShape(CLOSE);
}

function drawHead() {
  fill(217, 202, 143);
  strokeWeight(1);
  ellipse(175,140,220, 280);
}

function drawLowlights(){
  fill(61, 33, 4);
  strokeWeight(0);
  //upper center
  ellipse(157,30,230,90);
  //left side
  ellipse(50,200,55,360);
  ellipse(68,70,50,150);
  ellipse(90,60,70,60);
  //right side
  ellipse(310,70,80,90);
  ellipse(250,55,115,70);
  ellipse(320,200,100,387);
  ellipse(273,18,118,58);
}

function drawHighlights() {
  //Blonde hair highlights
  fill(230, 226, 25);
  strokeWeight(0);
  ellipse(280,150,0.5,50);
  strokeWeight(0);
  ellipse(60,200,0.5,90);
  ellipse(85,300,0.5,90);
  ellipse(290,300,0.5,90);
  ellipse(320,200,0.5,120);
  ellipse(340,80,0.5,60);
  ellipse(300,20,50,0.5);
  ellipse(290,90,0.5,30);
  ellipse(65,70,0.5,70);
  ellipse(40,100,0.5,70);
}

function drawFace() {
  //Eyes
  fill(24,94,44);
  ellipse(130,120,50,40);
  ellipse(200,120,50,40);

  fill(51, 49, 39);
  circle(130,120,28);
  circle(200,120,28);

  fill(252, 252, 252);
  circle(135,110,10);
  circle(205,110,10);

  //Eyebrows
  stroke(3);
  strokeWeight(1);
  line(110,89,150,85);
  line(180,85,215,89);
  
  //Nose
  noFill();
  arc(160,171,40,25,200,90);
  
  //mouth
  fill(204, 31, 126);
  //arc(180,225,50,50,100,280);
  fill(204, 35, 128);
  ellipse(170,225,60,17);
  line(140,225,200,225);
  
  //cheeks
  fill(227, 175, 203);
  stroke(0);
  strokeWeight(0);
  ellipse(100,164,47,35);
  ellipse(235,164,47,34);
  
}




// function displayMouseCoordinates() {
//   fill(0);
//   textSize(24);
//   strokeWeight(1);
//   textAlign(LEFT);
//   text("X: " + mouseX) + " Y: " + mouseY, 20, height -20);
// }


// function keyTyped() {
//   if (key == ' ') {
//     gDebugMode = !gDebugMode;
//   }
// }
