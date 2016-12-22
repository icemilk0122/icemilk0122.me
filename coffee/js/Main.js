window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var mc = new Hammer.Manager(myElement);
	var pinch = new Hammer.Pinch();
	var rotate = new Hammer.Rotate();
	// we want to detect both the same time
	pinch.recognizeWith(rotate);
	// add to the Manager
	mc.add([pinch, rotate]);
	mc.on("pinch rotate", function(ev) {
	  trace(ev.type);
});

	var game = new Phaser.Game(1024, 768, Phaser.AUTO);

	// Add the States your game has.
	game.state.add("Boot", Boot);
	game.state.add("Menu", Menu);
	game.state.add("Preload", Preload);
	game.state.add("Level", Level);

	// Now start the Boot state.
	game.state.start("Boot");
};
