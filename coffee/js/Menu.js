/**
 * Menu state.
 */
function Menu() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Menu.prototype = proto;

Menu.prototype.create = function() {
	var indexbg = this.add.sprite(this.world.centerX, this.world.centerY,
			"index");
	indexbg.anchor.set(0.5, 0.5);
	var start_btn = this.add.sprite(170, 670,
			"start_btn");
	start_btn.anchor.set(0.5, 0);
	start_btn.inputEnabled = true;
	start_btn.events.onInputDown.add(this.startGame);
	var fb_btn = this.add.sprite(890, 650,
			"fb_btn");
	fb_btn.anchor.set(0.5, 0);
};

Menu.prototype.startGame = function() {
	this.game.state.start("Level");
};
