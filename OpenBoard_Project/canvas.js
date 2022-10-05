let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//API
let tool = canvas.getContext("2d");

tool.strokeStyle = "green";
tool.lineWidth = "5"
tool.beginPath();   // new graphic  (path) (line)   new path
tool.moveTo(10 , 10) ; // start point
tool.lineTo(100 ,150) ;  //end point
tool.stroke() ; // filling color or graphic
