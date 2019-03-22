console.log("Javascript is linked!")
//if you want to have the canvas expand out to take up the entire width and height of your browser window...
var canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d'); //so that we can draw 2d elements that can be manipulated within the 2d space
//c.fillReact(x,y,width,height); parameters for the fillReact function, they are both pixels taking reference from the top left of the screen.
c.fillRect(100,100,100,100);
c.fillRect(400,100,100,100);
c.fillRect(300,300,100,100);
//eventually we are going to have these bounce off screens...

//Skill number two is drawing on the canvas.

console.log("Javascript has ended!")
