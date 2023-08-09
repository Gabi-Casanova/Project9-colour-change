
function setup() {
  createCanvas(400,400);
  background(51);
  box1 = createSprite(80,200,50,100);
  box2 = createSprite(140,200,50,100);
  box3 = createSprite(200,200,50,100);
  box4 = createSprite(260,200,50,100);
  box5 = createSprite(320,200,50,100);
}

function draw() 
{
  background("black");

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }

   if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  //change colour of with key presses
  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if(keyIsDown(71)){
    box1.shapeColor = color("green");
  }
  if(keyIsDown(79)){
    box2.shapeColor = color("orange");
  }
  if(keyIsDown(66)){
    box3.shapeColor = color("blue");
  }
  if(keyIsDown(89)){
    box4.shapeColor = color("yellow");
  }
  if(keyIsDown(80)){
    box5.shapeColor = color("purple");
  }
  
  drawSprites();

  textSize(12);
  text("Try using different letter keys to set the colour of the boxes", 20, 40);
  text("Use the arrow keys to change the colour of the background", 20, 25);
}

