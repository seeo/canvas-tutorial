console.log("Javascript is linked!")
//if you want to have the canvas expand out to take up the entire width and height of your browser window...
var canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d'); //so that we can draw 2d elements that can be manipulated within the 2d space
// //c.fillReact(x,y,width,height); parameters for the fillReact function, they are both pixels taking reference from the top left of the screen.
// c.fillStyle = "rgba(255,0,0,0.5)"; // red - eyes
// c.fillRect(300,100,100,100);
// c.fillStyle = "rgba(0,255,0,0.5)"; //green - eyes
// c.fillRect(600,100,100,100);
// c.fillStyle = "rgba(0,0,255,0.5)"; // blue - nose
// c.fillRect(450,300,100,100);
//
// c.fillStyle = "rgba(0,0,0,0.5)"; // mouth
// c.fillRect(225,500,50,50);
// c.fillRect(275,525,50,50);
// c.fillRect(325,550,50,50);
// c.fillRect(375,575,50,50);
// c.fillRect(425,600,50,50);
// c.fillRect(475,625,50,50);
// c.fillRect(525,600,50,50);
// c.fillRect(575,575,50,50);
// c.fillRect(625,550,50,50);
// c.fillRect(675,525,50,50);
// c.fillRect(725,500,50,50);
// //end of face creation.
//
// console.log(canvas);
// //eventually we are going to have these bounce off screens...
//
// //Skill number two is drawing on the canvas.
// //line
// c.beginPath();
// //declare on the canvas where we want our path to start...
// //c.moveTo(x,y);
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.strokeStyle = "rgb(255,10,25)";
// c.stroke();
//
// //creating an Arc. It will take quite a few arguments.
// //Javascript syntax for getting arc: context.arc(x,y,r,sAngle,eAngle,counterclockwise);
// //x	The x-coordinate of the center of the circle
// //y	The y-coordinate of the center of the circle
// //r	The radius of the circle
// //sAngle	The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
// //eAngle	The ending angle, in radians
// //counterclockwise	Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
// // we use the beginPath() again so that we can separate the initial lines drawn from the circle that we just drew;
// c.beginPath();
// c.strokeStyle = "green";
// c.arc(300,300,30,0*Math.PI,2*Math.PI);
// c.stroke();
//
// //created black rectangle:
// c.beginPath();
// c.strokeStyle = "black";
// c.strokeRect(20, 20, 150, 100); //this indicates the rectangle to be drawn, begin which which point, stretching out how many x-axis y-axis and how tall and how wide it will be.
// c.stroke();
//
// //created hollow text with color of blue.
// c.beginPath();
// c.font = "40px sans serif";
// c.strokeStyle = "rgb(0,0,255)";
// c.strokeText("Big smile!",10,50);
// c.stroke();
//
// //Now how do we create multiple circles? - We need to use For Loops
// var color;
// c.strokeStyle = color;
// for (i=0; i<9;i++){
//     c.beginPath();
//     var color = 'rgb('+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+')';
//     console.log(color);
//     c.strokeStyle = "color";
//   var x = Math.random()*window.innerWidth;
//   var y = Math.random()*window.innerHeight;
//   console.log('drawing circles');
//   c.arc(x, y, 30, 0*Math.PI, 2*Math.PI);
//   c.stroke();
// }

function Circle(x,y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0*Math.PI,2*Math.PI);
    c.strokeStyle = "blue";
    c.stroke();
  }
  this.update = function(){
//in order for the circle we drew to 'bounce' off the browser wall... we are going to need to insert a conditional statement:
    if (this.x+this.radius>innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y+this.radius>innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
      this.x += this.dx;
      this.y += this.dy;

      console.log("this is now animating!")

      this.draw();
  }

}

//Now we are going to animate the canvas but first we create a circle...


//create an array to store one hundred circles
var circleArray = [];

for (var i = 0; i < 100; i++) {
  var x = (Math.random()) * (innerWidth - radius*2)+radius;
  var dx = (Math.random() - 0.5)*10; //rate of change of x position, i.e. the velocity
  var y = (Math.random()) * (innerHeight - radius*2)+radius;
  var dy = (Math.random() - 0.5)*10;
  var radius = 30;
  circleArray.push(new Circle(x,y,dx,dy,radius));
  //var circle = new Circle(200,400,4,4,30); //you precede the function name with new, and will store all properties and values within the variable;
}
  console.table(circleArray); //to check and see that the for loop worked.
  //But to get these circles drawn on our canvas, we are going to need to create a new function inside the animate function;

//create a new variable / object:


//let us call this function 'Animate':
function animate (){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
for (var i = 0; i < circleArray.length; i++) {
  circleArray[i].update();
}

}

animate(); //this calls the animate function...

//Now... how do we create more circles that bounce off the walls of the window independently?






console.log("Javascript has ended!")
