var canvas;
var click1;
var click2;
var startButton;
var PopUpButton;
var clickImg;

let gameState = 'first';

function preload(){
  clickImg = loadImage('./logo.png');
}

function setup() {
  createCanvas(800, 800);
  frameRate(60);
  background(0);
  titleScreen();
}

function draw() {
  startButton.draw();
  switch (gameState) {
    case 'title':
      titleScreen();
      break;
    case 'PopUp':
      PopUpScreen();
      break;
    case 'main':
      mainScreen();
  }
}

function startButton() {
  startButton = new Clickable();
  startButton.image = clickImg;
  startButton.locate(280,500);
  startButton.resize(200,100);
  startButton.text = "";
    startButton.onPress = function () {
      gameState = 'PopUp'
    }
}

function titleScreen () {
  background(100, 100, 240);
  textSize(75);
  textAlign(CENTER);
  text('The Title', width*0.5, height*0.33);
  textSize(25);
  text('Hi, This is the very first page, Welcome!', width*0.5, height*0.4);
  startButton();
}

function mainScreen() {
  background(200,30,30);
  textAlign(CENTER);
  textSize(25);
  text('Hey! This will be the main page!', width*0.5, height*0.4);
}

function PopUpButton() {
  PopUpButton = new Clickable();

  PopUpButton.text = "Click Me!";
  PopUpButton.locate(280, 500);
  PopUpButton.resize(200, 100);
    PopUpButton.onRelease = function () {
    gameState = 'main'
  }
}

function PopUpScreen() {
  rectMode(CENTER);
  rect(400,400, 500,500);
  fill(0);
  push();
  textAlign(CENTER);
  textSize(45);
  fill(214,40,40);
  text('TRIGGER WARNING', width*0.5, height*0.35);
  textSize(30);
  fill(255);
  text('The following game contains',width*0.5, height*0.45);
  text('material that may be harmful or',width*0.5, height*0.5);
  text('traumatizing to some audiences.',width*0.5, height*0.55);
  pop();
  PopUpButton();
}


// function click1() {
//   click1 = new Clickable();
//   click1.locate(20, 20);
//   //This function is ran when the clickable is NOT hovered.
//   click1.onOutside = function () {
//     this.color = "#EEEEEE";
//     this.text = "Move Me!"
//     this.textColor = "#000000";
//   }
//   //This function is ran when the clickable is pressed.
//   click1.onPress = function () {
//     this.stroke = "#FF0000";
//   }
//   //This funcion is ran when the cursor was pressed and then
//   //rleased inside the clickable. If it was pressed inside and
//   //then released outside this won't work.
//   click1.onRelease = function () {
//     this.x += 50;
//   }
//
// }
//
// function click2() {
//   click2 = new Clickable();
//   click2.cornerRadius = 0;
//   click2.textScaled = true;
//   click2.text = "Click Me!";
//   click2.locate(60, 60);
//   click2.resize(250, 100);
//   click2.onOutside = function () {
//     this.color = "#5E3023";
//   }
//   click2.onPress = function () {
//     alert("Hello, Stranger! This is Hanbee Cho.");
//   }
// }

  // image will stretch to fill button by default
  // click4 = new Clickable();
  // click4.image = clickImg;
  // click4.imageScale = 1;
  // click4.text = "";
  // click4.locate(10, 200);
  // click4.resize(120, 90);
  // click4.onPress = function () {
  //   click4.imageScale = 1.5
  // }

  // centered and fitted
//   click5 = new Clickable();
//   click5.image = clickImg;
//   click5.fitImage = true; // no stretching!
//   click5.imageScale = 1;
//   click5.text = "";
//   click5.locate(140, 200);
//   click5.resize(120, 90);
//   click5.onHover = function () {
//     click5.imageScale = 1.1;
//   }
//   click5.onOutside = function () {
//     click5.imageScale = 1;
//   }
