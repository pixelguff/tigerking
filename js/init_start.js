game = new Phaser.Game(256, 192, Phaser.AUTO, 'the-game');

player

TigerKing = {}; 

TigerKing.StartScreen = function(){ };

TigerKing.StartScreen.prototype = {
    preload : function(){
    // load basic assets for this state
    
    this.load.image('startbg','assets/bg/startbg.png');
    this.load.audio('theme', ['assets/audio/theme.m4a']);
    },
 
    create : function(){
 
    // place the assets and elements in their initial positions, create the state
 
    this.titleScreen = this.add.sprite(0,0,'startbg');
 
	theme = game.add.audio('theme',1,true,true);
	theme.play('');
 
    },
 
    update : function(){
 
    // your game loop goes here
 
    }
}

game.state.add('StartScreen',TigerKing.StartScreen); 

game.state.start('StartScreen'); 
