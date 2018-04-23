// The Speech of Random Codes! - P5JS - Speech lib.
// It`s a kind of sound book - of the book of random numbers.
// Design By : MR K.ING
var myVoice = new p5.Speech();
var myVoiceA = new p5.Speech();
var myVoiceB = new p5.Speech();
var refreshbutton, onenewbutton, fivenewbutton;
function setup() {
   let canvas = createCanvas(windowWidth, 400);
   canvas.parent('canvascontainer');
   background(255, 0, 0);
   fill(255, 255, 255, 100);
   textSize(30);
   textAlign(CENTER);
   text("The Speech of Random Codes!", width/2, height/4);
   text(makeid(), width/2, height/2.2);
   text(makeid() + ' ' + makeid() + ' ' + makeid() + ' ' + makeid() + ' ' + makeid(), width/2, height/1.8);
   text(onemorex() + ' ' + onemorex() + ' ' + onemorex() + ' ' + onemorex() + ' ' + onemorex(), width/2, height/1.5);
   text(makeid() + ' ' + makeid() + ' ' + makeid() + ' ' + makeid() + ' ' + makeid(), width/2, height/1.3);
   refreshbutton = createButton('Refresh');
   refreshbutton.position(40,40);
   refreshbutton.mousePressed(refresh);
   onenewbutton = createButton('new number code');
   onenewbutton.position(40,65);
   onenewbutton.mousePressed(onemore);
   fivenewbutton = createButton('new alfanumeric code');
   fivenewbutton.position(40,90);
   fivenewbutton.mousePressed(fivemore);
   myVoice.speak('The Speech of Random Codes' + ' ' + makeid());
}
function refresh() {
   window.location.reload();
}
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
   return text;
}
function onemorex() {
  var text = "";
  var possible = "0123456789";
   for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
   return text;
}
function fivemore() {
   myVoiceA.speak('Your new alfanumeric code is ' + makeid());	 
}
function onemore() {
   myVoiceB.speak('Your new random code is ' + onemorex());	 
}
