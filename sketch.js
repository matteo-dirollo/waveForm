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
//-------red Line -------
		beginShape();
		for(var w = -20; w < width + 20; w += 5){
			var micLevel = mic.getLevel();
			strokeWeight(100*micLevel+5);
			var h = ((rand4*micLevel)+50)*sin(w/(rand)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2;
			curveVertex(w,h)
			stroke(200,111,237);
		}
	endShape();
//----blue line---------
	beginShape();
			for(var w = -20; w < width + 20; w += 5){
			var micLevel = mic.getLevel();
			strokeWeight(100*micLevel+5);
			var h = (rand5*micLevel+50)*sin(w/(rand2)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2;
			curveVertex(w,h)
			stroke(189,236,56);
		}
	endShape();
//-----green line-------
	beginShape();
			for(var w = -20; w < width + 20; w += 5){
			var micLevel = mic.getLevel();
			strokeWeight(100*micLevel+5);
			var h = (rand6*micLevel+50)*sin(w/(rand3)) * pow(abs(sin(w * randW + frameCount * randS)), 5) + height/2;
			curveVertex(w,h)
			stroke(111,237,224);
		}
	endShape();

}