var ball = {
  x: 40,
  y: 40,
  radius: 30,
  color: ["blue","red", "green", "purple"],
  xspeed: 0,
  yspeed: 0
}




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.radius);
  fill(ball.color[2]);
  ball.xspeed = 1;
  ball.yspeed = 1;
  ball.x = ball.x + ball.xspeed;
  
}