/*
var num = 8;
var dim = 500;
var step = 80;

var inc = 1.05;


FOR CICLE HAD PROBLEMS  */

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(RGB);
  angleMode(DEGREES);
  rectMode(CENTER);

}

function draw() {
  background('white');

  var posY = map(rotationY, -90, 90, -200, 200);
  var posX = map(rotationX, -180, 180, -200, 200);

  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);

  //central
  fill(255);
  rect(width/2 + posY * 1, height/2 + posX * 1, 500, 500);
  fill(220);
  rect(width/2 + posY * 1.1, height/2 + posX * 1.1, 437, 437);
  fill(190);
  rect(width/2 + posY * 1.25, height/2 + posX * 1.25, 375, 375);
  fill(160);
  rect(width/2 + posY * 1.38, height/2 + posX * 1.38, 312, 312);
  fill(130);
  rect(width/2 + posY * 1.52, height/2 + posX * 1.52, 250, 250);
  fill(100);
  rect(width/2 + posY * 1.75, height/2 + posX * 1.75, 187, 187);
  fill(70);
  rect(width/2 + posY * 1.98, height/2 + posX * 1.98, 125, 125);
  fill(40);
  rect(width/2 + posY * 2.3, height/2 + posX * 2.3, 62, 62);

  //central up
  fill(255);
  rect(width/2 + posY * 1, (height/2 - 500) + posX * 1, 500, 500);
  fill(220);
  rect(width/2 + posY * 1.1, (height/2 - 500) + posX * 1.1, 437, 437);
  fill(190);
  rect(width/2 + posY * 1.25, (height/2 - 500) + posX * 1.25, 375, 375);
  fill(160);
  rect(width/2 + posY * 1.38, (height/2 - 500) + posX * 1.38, 312, 312);
  fill(130);
  rect(width/2 + posY * 1.52, (height/2 - 500) + posX * 1.52, 250, 250);
  fill(100);
  rect(width/2 + posY * 1.75, (height/2 - 500) + posX * 1.75, 187, 187);
  fill(70);
  rect(width/2 + posY * 1.98, (height/2 - 500) + posX * 1.98, 125, 125);
  fill(40);
  rect(width/2 + posY * 2.3, (height/2 - 500) + posX * 2.3, 62, 62);

  //central down
  fill(255);
  rect(width/2 + posY * 1, (height/2 + 500) + posX * 1, 500, 500);
  fill(220);
  rect(width/2 + posY * 1.1, (height/2 + 500) + posX * 1.1, 437, 437);
  fill(190);
  rect(width/2 + posY * 1.25, (height/2 + 500) + posX * 1.25, 375, 375);
  fill(160);
  rect(width/2 + posY * 1.38, (height/2 + 500) + posX * 1.38, 312, 312);
  fill(130);
  rect(width/2 + posY * 1.52, (height/2 + 500) + posX * 1.52, 250, 250);
  fill(100);
  rect(width/2 + posY * 1.75, (height/2 + 500) + posX * 1.75, 187, 187);
  fill(70);
  rect(width/2 + posY * 1.98, (height/2 + 500) + posX * 1.98, 125, 125);
  fill(40);
  rect(width/2 + posY * 2.3, (height/2 + 500) + posX * 2.3, 62, 62);



  //right center
  fill(255);
  rect(0 + posY * 1, height/2 + posX * 1, 500, 500);
  fill(220);
  rect(0 + posY * 1.1, height/2 + posX * 1.1, 437, 437);
  fill(190);
  rect(0 + posY * 1.25, height/2 + posX * 1.25, 375, 375);
  fill(160);
  rect(0 + posY * 1.38, height/2 + posX * 1.38, 312, 312);
  fill(130);
  rect(0 + posY * 1.52, height/2 + posX * 1.52, 250, 250);
  fill(100);
  rect(0 + posY * 1.75, height/2 + posX * 1.75, 187, 187);
  fill(70);
  rect(0 + posY * 1.98, height/2 + posX * 1.98, 125, 125);
  fill(40);
  rect(0 + posY * 2.3, height/2 + posX * 2.3, 62, 62);

  //right up
  fill(255);
  rect(0 + posY * 1, (height/2 - 500) + posX * 1, 500, 500);
  fill(220);
  rect(0 + posY * 1.1, (height/2 - 500) + posX * 1.1, 437, 437);
  fill(190);
  rect(0 + posY * 1.25, (height/2 - 500) + posX * 1.25, 375, 375);
  fill(160);
  rect(0 + posY * 1.38, (height/2 - 500) + posX * 1.38, 312, 312);
  fill(130);
  rect(0 + posY * 1.52, (height/2 - 500) + posX * 1.52, 250, 250);
  fill(100);
  rect(0 + posY * 1.75, (height/2 - 500) + posX * 1.75, 187, 187);
  fill(70);
  rect(0 + posY * 1.98, (height/2 - 500) + posX * 1.98, 125, 125);
  fill(40);
  rect(0 + posY * 2.3, (height/2 - 500) + posX * 2.3, 62, 62);

  //right down
  fill(255);
  rect(0 + posY * 1, (height/2 + 500) + posX * 1, 500, 500);
  fill(220);
  rect(0 + posY * 1.1, (height/2 + 500) + posX * 1.1, 437, 437);
  fill(190);
  rect(0 + posY * 1.25, (height/2 + 500) + posX * 1.25, 375, 375);
  fill(160);
  rect(0 + posY * 1.38, (height/2 + 500) + posX * 1.38, 312, 312);
  fill(130);
  rect(0 + posY * 1.52, (height/2 + 500) + posX * 1.52, 250, 250);
  fill(100);
  rect(0 + posY * 1.75, (height/2 + 500) + posX * 1.75, 187, 187);
  fill(70);
  rect(0 + posY * 1.98, (height/2 + 500) + posX * 1.98, 125, 125);
  fill(40);
  rect(0 + posY * 2.3, (height/2 + 500) + posX * 2.3, 62, 62);

  //left center
  fill(255);
  rect(width + posY * 1, height/2 + posX * 1, 500, 500);
  fill(220);
  rect(width + posY * 1.1, height/2 + posX * 1.1, 437, 437);
  fill(190);
  rect(width + posY * 1.25, height/2 + posX * 1.25, 375, 375);
  fill(160);
  rect(width + posY * 1.38, height/2 + posX * 1.38, 312, 312);
  fill(130);
  rect(width + posY * 1.52, height/2 + posX * 1.52, 250, 250);
  fill(100);
  rect(width + posY * 1.75, height/2 + posX * 1.75, 187, 187);
  fill(70);
  rect(width + posY * 1.98, height/2 + posX * 1.98, 125, 125);
  fill(40);
  rect(width + posY * 2.3, height/2 + posX * 2.3, 62, 62);

  //left up
  fill(255);
  rect(width + posY * 1, (height/2 - 500) + posX * 1, 500, 500);
  fill(220);
  rect(width + posY * 1.1, (height/2 - 500) + posX * 1.1, 437, 437);
  fill(190);
  rect(width + posY * 1.25, (height/2 - 500) + posX * 1.25, 375, 375);
  fill(160);
  rect(width + posY * 1.38, (height/2 - 500) + posX * 1.38, 312, 312);
  fill(130);
  rect(width + posY * 1.52, (height/2 - 500) + posX * 1.52, 250, 250);
  fill(100);
  rect(width + posY * 1.75, (height/2 - 500) + posX * 1.75, 187, 187);
  fill(70);
  rect(width + posY * 1.98, (height/2 - 500) + posX * 1.98, 125, 125);
  fill(40);
  rect(width + posY * 2.3, (height/2 - 500) + posX * 2.3, 62, 62);

  //left down
  fill(255);
  rect(width + posY * 1, (height/2 + 500) + posX * 1, 500, 500);
  fill(220);
  rect(width + posY * 1.1, (height/2 + 500) + posX * 1.1, 437, 437);
  fill(190);
  rect(width + posY * 1.25, (height/2 + 500) + posX * 1.25, 375, 375);
  fill(160);
  rect(width + posY * 1.38, (height/2 + 500) + posX * 1.38, 312, 312);
  fill(130);
  rect(width + posY * 1.52, (height/2 + 500) + posX * 1.52, 250, 250);
  fill(100);
  rect(width + posY * 1.75, (height/2 + 500) + posX * 1.75, 187, 187);
  fill(70);
  rect(width + posY * 1.98, (height/2 + 500) + posX * 1.98, 125, 125);
  fill(40);
  rect(width + posY * 2.3, (height/2 + 500) + posX * 2.3, 62, 62);

}

function touchEnded() {
  DeviceOrientationEvent.requestPermission()
}


function touchMoved() {
  return false;
}
