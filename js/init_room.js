function init_Room() {
	
	function Room (){
		this.id;
		this.name;
		this.background;
		return this;
	}
 
	Room.prototype = {
		getId : function (){
			return this.id;
		},
		getName : function (){
			return this.name;
		},
		getBackground : function (){
			return this.background;
		},
		setId : function (id){
			this.id = id;
		},
		setName : function (name){
			this.name =  name;
		},
		setBackground : function (background){
			this.background = background;
		}		
	}
	
	return Room;

}
