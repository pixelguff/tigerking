function update() {
	
	moveLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	moveLeft.onDown.add(tryFlip, this);
	moveRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	moveRight.onDown.add(tryFlip, this);
	moveUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	moveUp.onDown.add(tryFlip, this);
	moveDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	moveDown.onDown.add(tryFlip, this);
	
}

function tryFlip(key) {
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
