

function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(20,100,100);
  for(var x=0;x<=width;x+=20)
  for(var y=0;y<=height;y+=20)

    
  {fill(x+10,y,50)
  rect(x,y,10,10)
    fill(x+5,50,y)
  rect(x-10,y-10,10,10)
  fill(x,x,x+20)
 ellipse(x-5,y-5,5)
    
  }
 
  
}