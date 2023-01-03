function setup() {
  createCanvas(600, 600);
}

function getRandomColor(){
  var randomColor1 = Math.floor(Math.random() * 255) + 1;
  var randomColor2 = Math.floor(Math.random() * 255) + 1;
  var randomColor3 = Math.floor(Math.random() * 255) + 1;
  return [randomColor1, randomColor2, randomColor3];
  
}

function draw() {
  randColor = getRandomColor();
  if (mouseIsPressed){
    fill(255, 205, 0);
  } else {
    fill(randColor[0], randColor[1], randColor[2]);
  }
  ellipse(mouseX,mouseY,80,80);
}