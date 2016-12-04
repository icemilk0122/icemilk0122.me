/**
 * Puzzle state.
 */
function Puzzle() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Puzzle.prototype = proto;
var puzzlegroup;
var blackBg

Puzzle.prototype.create = function() {
	this.init();
};

Puzzle.prototype.init = function() {
	console.log(this);
	puzzlegroup = this.add.group();
	var stageBg = this.add.sprite(this.world.centerX, 0, 'stageBg');
	stageBg.anchor.set(0.5, 0);
	var prepareBlock = this.add.sprite(375, 320, 'prepareBlock');
	prepareBlock.anchor.set(0.5);
	var puzzleBP = this.add.sprite(375, 800, 'puzzleBP');
	puzzleBP.anchor.set(0.5);
	blackBg = this.add.sprite(this.world.centerX, 210, 'blackBg');
	blackBg.anchor.set(0.5, 0);
	blackBg.visible = false;
	var navBg = this.add.sprite(this.world.centerX, 0, 'navBg');
	navBg.anchor.set(0.5, 0);
	var logo = this.add.sprite(this.world.centerX, 20, 'logo');
	logo.anchor.set(0.5, 0);
	var backBtn = this.add.sprite(110, 30, 'back');
	backBtn.anchor.set(0.5, 0);
	backBtn.inputEnabled = true;
	backBtn.events.onInputDown.add(this.quitGame, this);
	var homeBtn = this.add.sprite(610, 30, 'home');
	homeBtn.anchor.set(0.5, 0);
	homeBtn.inputEnabled = true;
	homeBtn.events.onInputDown.add(this.quitGame, this);
	var btnBg = this.add.sprite(this.world.centerX, 145, 'btnBg');
	btnBg.anchor.set(0.5, 0);
	var scanBtn = this.add.sprite(190, 145, 'scanBtn');
	scanBtn.anchor.set(0.5, 0);
	scanBtn.inputEnabled = true;
	scanBtn.events.onInputDown.add(this.openScan, this);
	var puzzleBtn = this.add.sprite(375, 145, 'puzzleBtn');
	navBg.anchor.set(0.5, 0);
	
};

Puzzle.prototype.openScan = function() {
	this.world.bringToTop(blackBg);
	blackBg.visible = true;
	openscan(this);
};

Puzzle.prototype.getScanString = function(str,_this) {
	if(str.indexOf('puzzle')!=-1)
	{
		blackBg.visible = false;
		closescan();
		var puzzlepic = _this.add.sprite(375, 320, str);
		puzzlepic.anchor.set(0.5);
		puzzlepic.inputEnabled = true;
		puzzlepic.input.enableDrag(false, true);
		//puzzlegroup.add(puzzlepic);
	}
};

Puzzle.prototype.quitGame = function() {
	this.game.state.start("Menu");
};