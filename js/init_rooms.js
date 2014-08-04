TigerKing.room1 = function(){ };

TigerKing.room1.prototype = {
    preload : function(){
		game.world.setBounds(0, 0, 2560, 1536);
		this.load.image('room1bg','assets/bg/1.png');
		this.load.image('tk','assets/img/tkbig.png');
		this.load.spritesheet('tk', 'assets/img/tk.png', 22, 48, 2);
		thisroom = '1';
    },
 
    create : function(){
	theme.stop(); // we need to kill the title music
	game.physics.startSystem(Phaser.Physics.ARCADE);
	this.background = this.add.sprite(0,0,'room1bg');
	tk = this.add.sprite(150, 150, 'tk');
	tk.animations.add('left',[0]);
	tk.animations.add('right',[1]);
	
	this.physics.arcade.enable(tk);
	game.physics.arcade.gravity.y = 400;
	//tk.body.bounce.y = 0.30;
	tk.body.collideWorldBounds = true;
	game.camera.follow(tk, Phaser.Camera.FOLLOW_PLATFORMER);
	tk.anchor.setTo(0.5, 0.5);
	game.stage.smoothed = false;
	//var style = { font: "24px Arial", fill: "#ffffff", align: "left" };
	
 	//this.text = this.add.text(5, 5, '', style);
	cursors = game.input.keyboard.createCursorKeys();
    },
 
    update : function(){
		//this.text.text = dogdicks;
    // your game loop goes here
		tk.body.velocity.x = 0;
    
		if (cursors.left.isDown) {
			//tk.body.velocity.x = -40;
			tk.x -= 1;
			tk.animations.play('left', 20, true);
		}
		else if (cursors.right.isDown) {
			//tk.body.velocity.x = 40;
			tk.x += 1;
			tk.animations.play('right', 20, true);
		}
		
		if (this.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			tk.body.velocity.y = -200;
		}
		if (this.input.keyboard.justPressed(Phaser.Keyboard.ESC)) {
			game.state.start('StartScreen');
		}
    }
}
game.state.add('room1',TigerKing.room1);
