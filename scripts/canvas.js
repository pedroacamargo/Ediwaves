var canvas = document.getElementById('canvas'); 
var canvas2 = document.getElementById("canvas2")
var canvas3 = document.getElementById("canvas3")
var canvas4 = document.getElementById("canvas4")
var canvas5 = document.getElementById("canvas5")
var c = canvas.getContext('2d'); 
var c2 = canvas2.getContext('2d')
var c3 = canvas3.getContext('2d')
var c4 = canvas4.getContext('2d')
var c5 = canvas5.getContext('2d')
var grad = c.createLinearGradient(0,0,0,169);
grad.addColorStop(.1, "black");
grad.addColorStop(1, "blue");
c.fillStyle = grad;
c2.fillStyle = "black"
c3.fillStyle = "black"
c4.fillStyle = "black"
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

c3.beginPath()
c3.moveTo(450, 0)
c3.lineTo(550, 0)
c3.lineTo(500, 100)
c3.closePath()
c3.fill()

c4.beginPath()
c4.moveTo(-100, 200)
c4.bezierCurveTo(80, -50, 180, 270, 300, 80)
c4.bezierCurveTo(400, 0, 500, 200, 580, 160)
c4.bezierCurveTo(750, 00, 900, 400, 1000, 20)
c4.lineTo(1090, 200)
c4.closePath()
c4.fill()

c5.beginPath();
c5.moveTo(0,0)
c5.lineTo(1090,0)
c5.bezierCurveTo(960, 200, 850, 70, 800, 90)
c5.bezierCurveTo(600, 200, 650, 100, 500, 50)
c5.bezierCurveTo(400, 40, 350, 150, 200, 150)
c5.bezierCurveTo(70, 150, 50, 20, 0, 70)
c5.closePath();
c5.fill()
