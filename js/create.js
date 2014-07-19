function create() {
	
	
	
	tigerMap = new GameMap;
	
	//var style = { font: "12px Arial", fill: "#ffffff", align: "left" };
	var scorestyle = { font: "40px Arial", fill: "#ffffff", align: "left" };
	//var statusstyle = { font: "65px Arial", fill: "#ff0000", align: "center" };
	
	//game.physics.startSystem(Phaser.Physics.ARCADE);

	//game.stage.backgroundColor = '#124184';

	//ground1 = game.add.sprite(0,460,'ground');
	//ground2 = game.add.sprite(800,460,'ground');
	//winkle = game.add.sprite(300,100,'fd');
	//walltop = game.add.sprite(700,-300,'wall');
	//wallbottom = game.add.sprite(700,300,'wall');
	//walltop2 = game.add.sprite(1200,-300,'wall');
	//wallbottom2 = game.add.sprite(1200,300,'wall');
	
	//winkle.animations.add('flap',[0]);
	//winkle.animations.add('fall',[1]);

	//text = game.add.text(5, game.world.height-18, "Press the SPACE BAR to flap the flappy dick", style);
	var pissflaps = tigerMap.getCurrentLocation();
	scoretext = game.add.text(5, 5, '0', scorestyle);
	scoretext.text = pissflaps;
	
	

	
	
	
	//scoretext = game.add.text(5, 5, 'fart', scorestyle);
	//statustext = game.add.text(game.world.centerX-200, game.world.centerY-50, 'PRESS SPACE\nTO PLAY\nFLAPPY DICK', statusstyle);

	
	
	
	//flap = game.add.audio('flap',1,false,true);
	//crash = game.add.audio('crash',1,false,true);
	//pling = game.add.audio('pling',1,false,true);
	//music = game.add.audio('music',1,true,true);
	//music.play('');
	
	//game.physics.arcade.gravity.y = 0;
	
	//game.physics.arcade.enable([ground1, winkle]);
	//game.physics.arcade.enable([ground2, winkle]);
	//game.physics.arcade.enable([winkle, walltop]);
	//game.physics.arcade.enable([winkle, wallbottom]);
	//game.physics.arcade.enable([winkle, walltop2]);
	//game.physics.arcade.enable([winkle, wallbottom2])
	
	//winkle.body.bounce.y = 0.20;
	//winkle.body.collideWorldBounds = true;
	//ground1.body.allowGravity = false;
	//ground1.body.immovable = true;
	//ground2.body.allowGravity = false;
	//ground2.body.immovable = true;
	//walltop.body.allowGravity = false;
	//walltop.body.immovable = true;    	
	//wallbottom.body.allowGravity = false;
	//wallbottom.body.immovable = true;
	//walltop2.body.allowGravity = false;
	//walltop2.body.immovable = true;    	
	//wallbottom2.body.allowGravity = false;
	//wallbottom2.body.immovable = true;
		
}


