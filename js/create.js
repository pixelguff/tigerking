function create() {

	tigerMap = new GameMap;
	
	//testRoom = new Room;
	//testRoom.setId(1);
	//testRoom.setName("The Start");
	//testRoom.setBackground(game.load.image('background1', 'assets/bg/1.png'))
	
	var roomgroup;
	
	roomgroup = game.add.group();
	var n = 1;
	aroom = roomgroup.create(0,0,'roombg'+n.toString());
	
	
		
	var scorestyle = { font: "40px Arial", fill: "#ffffff", align: "left" };
	
	var pissflaps = tigerMap.getCurrentLocation();
	scoretext = game.add.text(5, 5, '0', scorestyle);
	scoretext.text = pissflaps;
		
}


