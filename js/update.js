function update() {
	
	moveLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	moveLeft.onDown.add(tryFlip, this);
	moveRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	moveRight.onDown.add(tryFlip, this);
	moveUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	moveUp.onDown.add(tryFlip, this);
	moveDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	moveDown.onDown.add(tryFlip, this);
	
	//var direction = null;
	
	//if (game.input.keyboard.justPressed(Phaser.Keyboard.LEFT)) {
			//direction = "left";
	//}
	//if (game.input.keyboard.justPressed(Phaser.Keyboard.RIGHT)) {
			//direction = "right";
	//}
	//if (game.input.keyboard.justPressed(Phaser.Keyboard.UP)) {
			//direction = "up";
	//}
	//if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN)) {
			//direction = "down";
	//}
	
	//if (direction != null) {
		//tigerMap.flip(direction);
		//scoretext.text = tigerMap.getCurrentLocation();
	//}
	
	//direction = null;
	
	//// init stuff
	//if (start == true) {
		//start = false;
	//}

	//if (crashed == false && playing == true){
		//game.physics.arcade.collide(ground1, winkle, collisionHandler, null, this);
		//game.physics.arcade.collide(ground2, winkle, collisionHandler, null, this);
		
		//game.physics.arcade.collide(walltop, winkle, collisionHandler, null, this);
		//game.physics.arcade.collide(wallbottom, winkle, collisionHandler, null, this);
		//game.physics.arcade.overlap(walltop, winkle, collisionHandler, null, this);
		//game.physics.arcade.overlap(wallbottom, winkle, collisionHandler, null, this);
		
		//game.physics.arcade.collide(walltop2, winkle, collisionHandler, null, this);
		//game.physics.arcade.collide(wallbottom2, winkle, collisionHandler, null, this);
		//game.physics.arcade.overlap(walltop2, winkle, collisionHandler, null, this);
		//game.physics.arcade.overlap(wallbottom2, winkle, collisionHandler, null, this);
		
		//// scroll some shit
	
		//ground1.x -= scrollspeed
		//ground2.x -= scrollspeed
		//walltop.x -= scrollspeed
		//wallbottom.x -= scrollspeed
		//walltop2.x -= scrollspeed
		//wallbottom2.x -= scrollspeed
	
		//if (ground1.x <= -800) {
			//ground1.x = 800;
		//}
		//if (ground2.x <= -800) {
			//ground2.x = 800;
		//}
		//if (walltop.x <= -50) {
			//offset = Math.floor((Math.random() * 300) + 1)-150; 
			//walltop.x = 850;
			//wallbottom.x = 850;
			//walltop.y = -300+offset;
			//wallbottom.y = 300+offset;
			//scored = false;
		//}
		//if (walltop2.x <= -50) {
			//offset = Math.floor((Math.random() * 300) + 1)-150; 
			//walltop2.x = 850;
			//wallbottom2.x = 850;
			//walltop2.y = -300+offset;
			//wallbottom2.y = 300+offset;
			//scored = false;
		//}

		//// score
		
		//if ((walltop.x <= winkle.x || walltop2.x <= winkle.x) && (walltop.x >= winkle.x-100 || walltop2.x >= winkle.x-100)) {
			//if (scored == false) {
				//score += 1;
				//scored = true;
				//pling.play('');
				//scoretext.text = "SCORE IS "+score;
				//if (score % 5 == 0 && scrollspeed <= 5) {
					//scrollspeed += 1;
				//}
			//}
		//}
		

		//winkle.animations.stop();
		//if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			//winkle.body.velocity.y = -300;
			//winkle.animations.play('flap');
			//flap.stop();
			//flap.play('');
		//}
		//else {
				//winkle.animations.play('fall');
		//}
		
	//}
	//else if (crashed == true) {
		//game.physics.arcade.collide(ground1, winkle);
		//game.physics.arcade.collide(ground2, winkle);
		//statustext.text = "YOU FUCKED\nIT UP";
		//text.text = "START AGAIN, YOU HELMET";
		//coolcounter += 1;
		////winkle.angle += 4;
		//if (coolcounter >= 120) {
			////restart
			//playing = false;
			//score = 0;
			//scoretext.text = "SCORE IS "+score;
			//walltop.x = 700;
			//wallbottom.x = 700;
			//walltop.y = -300;
			//wallbottom.y = 300;
			//walltop2.x = 1200;
			//wallbottom2.x = 1200;
			//walltop2.y = -300;
			//wallbottom2.y = 300;
			//winkle.y = 100;
			//winkle.angle = 0;
			//statustext.text = 'PRESS SPACE\nTO PLAY\nFLAPPY DICK';
			//text.text = "Press the SPACE BAR to flap the flappy dick";
			//scrollspeed = 2;
			//scored = false;
			//crashed = false;
			//coolcounter = 0;
			//game.physics.arcade.gravity.y = 0;
		//}
	//}
	//else if (playing == false) {
		//winkle.x = 300;
		//winkle.y = 100;
		//if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			//playing = true;
			//game.physics.arcade.gravity.y = 1200;
			//statustext.text = '';
		//}
	//}
     
}

function tryFlip(key) {
	//scoretext.text = "I GOT HERE"
	switch(key.keyCode) {
		case Phaser.Keyboard.LEFT:
			tigerMap.flip("left");
			break;					
		case Phaser.Keyboard.RIGHT:
			tigerMap.flip("right");
			break;					
		case Phaser.Keyboard.UP:
			tigerMap.flip("up");
			break;					
		case Phaser.Keyboard.DOWN:
			tigerMap.flip("down");
			break;
		}
	scoretext.text = tigerMap.getCurrentLocation();
}
