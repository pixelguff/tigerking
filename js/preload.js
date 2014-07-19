function preload() {

	//init_stuff();

	GameMap = function(){
		this.map = [
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,3,4,0,0,0],
			[0,0,0,0,1,2,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0]
		]; // 0 == No Room.
		this.currentlocation = this.map[4][5];
		this.rooms = [];	// empty array to hold room objects
							// Room should have id that corresponds to
							// id in map array.
	}
 
	GameMap.prototype = {
		importMap: function (filename){
			// Read in map data
			// Put each entry in this.map[x][y]
		},
		checkinRoom : function (room){
			this.rooms.push(room);
		},
		getCurrentRoom: function (){
			return this.currentlocation;
		}
	}


	//game.load.image('ground', 'assets/ground.png');
	//game.load.image('wall', 'assets/brick.png');
	//game.load.spritesheet('fd', 'assets/fd.png', 100,40,2);
	
	//game.load.audio('flap', ['assets/flap.wav']);
	//game.load.audio('pling', ['assets/pling.wav']);
	//game.load.audio('crash', ['assets/crash.wav']);
	//game.load.audio('music', ['assets/monkeys.mp3']);
}
