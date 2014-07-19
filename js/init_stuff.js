function init_stuff() {
	
	function GameMap (){
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
		this.currentlocation = map[4][5];
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
	
	//released = true;
	//scrollspeed = 2

	//wall1x = 0;
	//wall1y = 0;
	//wall2x = 0;
	//wall2y = 0;
	//start = true;
	//crashed = false;
	//score = 0;
	//offset = 0;
	//scored = false;
	//coolcounter = 0;
	//playing = false;

}
