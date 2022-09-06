var canvas = document.getElementById('canvas'); 
var canvas2 = document.getElementById("canvas2")
var canvas3 = document.getElementById("canvas3")
var c = canvas.getContext('2d'); 
var c2 = canvas2.getContext('2d')
var c3 = canvas3.getContext('2d')
var grad = c.createLinearGradient(0,0,0,169);
grad.addColorStop(.1, "black");
grad.addColorStop(1, "blue");
var grad3 = c3.createLinearGradient(0,0,0,200);
grad3.addColorStop(.5, "black");
grad3.addColorStop(1, "blue");
c.fillStyle = grad;
c2.fillStyle = "black"
c.beginPath();
c.moveTo(0,0)
c.lineTo(1090,0)
c.bezierCurveTo(960, 200, 850, 70, 800, 90)
c.bezierCurveTo(600, 200, 650, 100, 500, 50)
c.bezierCurveTo(400, 40, 350, 150, 200, 150)
c.bezierCurveTo(70, 150, 50, 20, 0, 70)
c.closePath();
c.fill()


c2.beginPath();
c2.moveTo(-100, 200)
c2.bezierCurveTo(80, -50, 180, 270, 300, 80)
c2.bezierCurveTo(400, 0, 500, 200, 580, 160)
c2.bezierCurveTo(750, 00, 900, 400, 1000, 20)
c2.lineTo(1090, 200)
c2.closePath()
c2.fill()

