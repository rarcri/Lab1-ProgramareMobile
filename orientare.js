window.addEventListener("deviceorientation",on_device_orientation);

function on_device_orientation(evt){
  var alpha = evt.alpha;
  var beta = evt.beta;
  var gamma = evt.gamma;

document.getElementById("a").innerHTML = "alpha = "+alpha;
document.getElementById("b").innerHTML = "beta = " + beta;
document.getElementById("c").innerHTML = "gamma = " + gamma;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var centru = {x: canvas.width/2, y:canvas.height/2}
var latura_patrat = 50;

context.setTransform(1,0,0,1,0,0);
context.clearRect(0,0,canvas.width,canvas.height);
context.translate(centru.x/2, centru.y/2);
context.rotate(alpha * Math.PI/180);
context.beginPath();
context.rect(-latura_patrat/2,-latura_patrat/2,latura_patrat, latura_patrat);
context.arc(200, 100, convert_positive(gamma), 0, 2*Math.PI, false);
context.stroke();

}
function convert_positive(a) {
        if (a < 0) {
            a = a * -1;
        }
        return a;
    }
