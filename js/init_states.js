TigerKing.StartScreen.prototype = {
    preload : function(){
    // load basic assets for this state
    
    this.load.image('startbg','assets/bg/startbg.png');
    this.load.audio('theme', ['assets/audio/theme.m4a']);
    },
 
    create : function(){
 
    // place the assets and elements in their initial positions, create the state
 
    this.titleScreen = this.add.sprite(300,300,'startbg');
 
	theme = game.add.audio('theme',1,true,true);
	theme.play('');
 
    },
 
    update : function(){
 
    // your game loop goes here
 
    }
}

game.state.add('StartScreen',TigerKing.StartScreen); 

game.state.start('StartScreen'); 
