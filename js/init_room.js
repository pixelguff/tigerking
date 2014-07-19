function init_Room() {
	
	function Room (id, name){
		this.id = id;
		this.name = name;
		this.background = game.load.image('background'+id, 'assets/bg/'+id+'.png');
		return this;
	}
 
	GameMap.prototype = {
		getId : function (){
			return this.id;
		},
		getName : function (){
			return this.name;
		},
		getBackground : function (){
			return this.background;
		}		
	}
	
	return Room;

}
