var cont = 300
var cont1 = 299

var type = 1

function setup() {
	createCanvas(1080, 1080);
	background(255);

	mic = new p5.AudioIn()
  mic.start();
	frameRate(80);
}

function mousePressed() {
  if(type == 0) {
    type = 1;
		rand = random()*40+5;
  } 
	else {
    type = 0;
		rand = random()*40+5;
	}
}

function draw() {
//------random clock-------
	if(cont > cont1){
		rand = random(60);
		rand2 = random(60);
		rand3 = random(60);
		rand4 = random(1000,500);
		rand5 = random(1000,500);
		rand6 = random(1000,500);
		randW = random(0.003, 0);
		randS = random(0.002, 0.05);
		cont = 0
		cont1 = random(299, 599)
	}
	else{
	cont ++
	}

		blendMode(BLEND);
		background(255);
		blendMode(NORMAL);
		noFill();
//-------ligne rouge -------
		beginShape();
		for(var w = -20; w < width + 20; w += 5){
			var micLevel = mic.getLevel();
			strokeWeight(100*micLevel+5);
			var h = ((rand4*micLevel)+50)*sin(w/(rand)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2;
			curveVertex(w,h)
			stroke(230,31,39);
		}
	endShape();
//----ligne violet---------
	beginShape();
			for(var w = -20; w < width + 20; w += 5){
			var micLevel = mic.getLevel();
			strokeWeight(100*micLevel+5);
			var h = (rand5*micLevel+50)*sin(w/(rand2)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2;
			curveVertex(w,h)
			stroke(115,40,134);
		}
	endShape();
//-----ligne rose-------
	beginShape();
			for(var w = -20; w < width + 20; w += 5){
			var micLevel = mic.getLevel();
			strokeWeight(100*micLevel+5);
			var h = (rand6*micLevel+50)*sin(w/(rand3)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2-100;
			curveVertex(w,h)
			stroke(255,153,204);
		}
	endShape();

	//-------ligne rouge -------
	beginShape();
	for(var w = -20; w < width + 20; w += 5){
		var micLevel = mic.getLevel();
		strokeWeight(100*micLevel+5);
		var h = ((rand3*micLevel)+50)*sin(w/(rand6)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2-50;
		curveVertex(w,h)
		stroke(60, 97, 171);
	}
endShape();

	//-------ligne rouge -------
	beginShape();
	for(var w = -20; w < width + 20; w += 5){
		var micLevel = mic.getLevel();
		strokeWeight(100*micLevel+5);
		var h = ((rand3*micLevel)+50)*sin(w/(rand)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2+50;
		curveVertex(w,h)
		stroke (102,51,0);
	}
endShape();

//-----ligne vert-------
beginShape();
for(var w = -20; w < width + 20; w += 5){
var micLevel = mic.getLevel();
strokeWeight(100*micLevel+5);
var h = (rand2*micLevel+50)*sin(w/(rand3)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2-150;
curveVertex(w,h)
stroke(0, 153, 51);
}
endShape();

//-----ligne noir-------
beginShape();
for(var w = -20; w < width + 20; w += 5){
var micLevel = mic.getLevel();
strokeWeight(100*micLevel+5);
var h = (rand2*micLevel+50)*sin(w/(rand3)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2-200;
curveVertex(w,h)
stroke(0, 0, 0);
}
endShape();

//-----ligne jaune-------
beginShape();
for(var w = -20; w < width + 20; w += 5){
var micLevel = mic.getLevel();
strokeWeight(100*micLevel+5);
var h = (rand3*micLevel+50)*sin(w/(rand3)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2-250;
curveVertex(w,h)
stroke(255, 255, 51);
}
endShape();

}



/*

color noir = #000000;
color blanc = #ffffff;
color marron = #663300; (102,51,0)
color orange = #ff9933;
color vert = #009933; (0, 153, 51)
color rose = #ff99cc; (255,153,204)
color jaune = #ffff33; (255, 255, 51)
color violet = #732886; (115,40,134)
color azure = #66ccff; 
color rouge = #e61f27; (230, 31, 39)
color bleu = #3c61ab; (60, 97, 171)

*/