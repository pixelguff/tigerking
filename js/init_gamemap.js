function init_GameMap() {
	
	function GameMap (){
		this.map = [
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,7,8,9,0],
			[0,0,0,0,6,0,0,0],
			[0,0,0,0,5,0,0,0],
			[0,0,0,3,4,0,0,0],
			[0,0,0,0,1,2,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0]
		]; // 0 == No Room.
		this.currenty = 4;
		this.currentx = 5;
		this.currentlocation = this.map[this.currentx][this.currenty];
							// FIXME: The X/Y is arse about face
							
		this.rooms = [];	// empty array to hold room objects
							// Room should have id that corresponds to
							// id in map array.
		return this;
	}
 
	GameMap.prototype = {
		importMap: function (filename){
			// Read in map data
			// Put each entry in this.map[x][y]
		},
		checkinRoom : function (room){
			this.rooms.push(room);
		},
		getCurrentLocation : function (){
			return this.currentlocation;
			//return 0;
		},
		setCurrentLocation : function (){
			this.currentlocation = this.map[this.currentx][this.currenty];
		},
		getCurrentX : function (){
			return this.currentx;
		},
		getCurrentY : function (){
			return this.currenty;
		},
		setCurrentX : function (x){
			this.currentx = x;
		},
		setCurrentY : function (y){
			this.currenty = y;
		},
		flip : function (direction){
			switch(direction) {
				case "left":
					if (this.map[this.currentx-1][this.currenty] != 0) {
						this.currentx -= 1;
					}
					break;					
				case "right":
					if (this.map[this.currentx+1][this.currenty] != 0) {
						this.currentx += 1;
					}
					break;					
				case "up":
					if (this.map[this.currentx][this.currenty+1] != 0) {
						this.currenty += 1;
					}
					break;					
				case "down":
					if (this.map[this.currentx][this.currenty-1] != 0) {
						this.currenty -= 1;
					}
					break;
			}
			this.setCurrentLocation();
		}		
	}
	
	return GameMap;

}
