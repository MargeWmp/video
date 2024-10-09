
var output=document.getElementById("output");
var turtle=document.getElementById("turtle");
img = document.getElementById('turtle');
var flower= document.getElementById('flower')
var beach= document.getElementById('beach')
var left=25;
var topPx=25;
var looper;
var dagree=0;



//moving of turtle
document.addEventListener("keydown", function(e) {
    var key=e.which;

    switch (key) {
      case 38:          
        topPx = topPx - 5;
        turtle.style.top= topPx + "px";
        turtle.style.transform = 'rotate(0deg)';
        break;
      case 40:          
        topPx = topPx + 5;
        turtle.style.top= topPx + "px";
        turtle.style.transform = 'rotate(180deg)';
        break;
      case 39:         
        left = left + 5;
        turtle.style.left= left + "px";
        turtle.style.transform = 'rotate(90deg)';
        break;
      case 37:         
        left = left - 5;
        turtle.style.left= left + "px";
        turtle.style.transform = 'rotate(-90deg)';
        break;
    }
});
