TigerKing.StartScreen = function(){ };

TigerKing.StartScreen.prototype = {
    preload : function(){
    // load basic assets for this state
    
	this.scale.maxWidth = 800;
	this.scale.maxHeight = 600;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.setScreenSize();
    
    
    
    this.load.image('startbg','assets/bg/startbg.png');
    this.load.audio('theme', ['assets/audio/theme.m4a']);
    },
 
    create : function(){
 
    // place the assets and elements in their initial positions, create the state
 
    this.titleScreen = this.add.sprite(0,0,'startbg');
	
	theme = this.add.audio('theme',1,true,true);
	
	theme.play('');
 
    },
 
    update : function(){
 
    // your game loop goes here
		if (this.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('room1');
		}
    }
}

game.state.add('StartScreen',TigerKing.StartScreen); 


game.state.start('StartScreen'); 
//game.state.start('room1'); 
