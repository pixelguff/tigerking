TigerKing.room1 = function(){ };

TigerKing.room1.prototype = {
    preload : function(){
    // load basic assets for this state
    
    this.load.image('room1bg','assets/bg/1.png');
    
    },
 
    create : function(){
	theme.stop();
    // place the assets and elements in their initial positions, create the state
	var style = { font: "24px Arial", fill: "#ffffff", align: "left" };
    this.background = this.add.sprite(0,0,'room1bg');
 	this.text = this.add.text(5, 5, '', style);
    },
 
    update : function(){
		this.text.text = dogdicks;
    // your game loop goes here
		if (this.input.keyboard.justPressed(Phaser.Keyboard.ESC)) {
			game.state.start('StartScreen');
		}
    }
}
game.state.add('room1',TigerKing.room1);
