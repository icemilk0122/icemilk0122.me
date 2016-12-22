window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var mc = new Hammer.Manager(document.getElementsByTagName("BODY")[0]);
	var pinch = new Hammer.Pinch();
	var rotate = new Hammer.Rotate();
	// we want to detect both the same time
	pinch.recognizeWith(rotate);
	// add to the Manager
	mc.add([pinch, rotate]);
	mc.on("pinchstart pinchmove", onPinch);
	mc.on("rotatestart rotatemove", onRotate);

	var game = new Phaser.Game(1024, 768, Phaser.AUTO);

	// Add the States your game has.
	game.state.add("Boot", Boot);
	game.state.add("Menu", Menu);
	game.state.add("Preload", Preload);
	game.state.add("Level", Level);

	// Now start the Boot state.
	game.state.start("Boot");
};

function onPinch(ev)
{
	//alert("pinch");
	game.state.states[game.state.current].onPinch(ev.scale);
}

function onRotate(ev)
{
	console.log(ev.rotation);
	game.state.states[game.state.current].onRotate(ev.rotation);
}
