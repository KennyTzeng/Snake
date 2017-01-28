var s;
var food;
// scale, length of block
var scl = 30;
// the width and height of canvas
var wid = 1020;
var hei = 750;


function setup(){
	createCanvas(wid, hei);
	s = new snake();
	// redraw frequency
	frameRate(10);
	pickLocation();
}

// put food randomly
function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}

function draw(){
	// background color
	background(50);
	if(s.eat(food)){
		pickLocation();
	}
	s.death();
	s.update();
	s.show();
	// food's color
	fill(255,0,100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		s.dir(0,-1);
	}else if(keyCode == DOWN_ARROW){
		s.dir(0,1);
	}else if(keyCode == RIGHT_ARROW){
		s.dir(1,0);
	}else if(keyCode == LEFT_ARROW){
		s.dir(-1,0);
	}
}
