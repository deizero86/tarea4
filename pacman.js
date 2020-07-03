a = 100;
b = 100;
let m=-1;

function setup() { 
  createCanvas(200, 200);
} 

function draw() { 
  background(0);
  
  arc(a, b,40,40,PI*sin(m)/8+PI/8,-PI*sin(m)/8-PI/8);
  m=m+0.50; 
     
  if (keyIsDown(LEFT_ARROW)){
    a = a-1;
      }
  
    if (keyIsDown(RIGHT_ARROW)){
    a = a+1;
  }
  
 
    if (keyIsDown(UP_ARROW)){
    b = b-1;
    }
  
      if (keyIsDown(DOWN_ARROW)){
    b = b+1;
    }
  
  if (a == 0  || b == 0  || a == 200|| b == 200|| a == -200|| b == -200){
    noLoop()
  }
}

function doubleClicked(){
  a = 100;
  b = 100;
  loop();
  
}
