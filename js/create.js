function create() {

	tigerMap = new GameMap;
	
	var scorestyle = { font: "40px Arial", fill: "#ffffff", align: "left" };
	
	var pissflaps = tigerMap.getCurrentLocation();
	scoretext = game.add.text(5, 5, '0', scorestyle);
	scoretext.text = pissflaps;
		
}


