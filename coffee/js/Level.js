/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Level.prototype = proto;
var menu_1group;
var allObjectsMap = [];
var imgObjectsMap = [];

Level.prototype.create = function() {
	menu_1group = this.game.add.group();
	var gamestage = this.add.sprite(this.world.centerX, 0, 'gamestage');
	gamestage.anchor.set(0.5, 0);
	var menu = this.add.sprite(980, 50, 'menu');
	menu.anchor.set(0.5, 0);
	allObjectsMap['menu_1'] = this.add.sprite(900, 60, 'menu_1');
	allObjectsMap['menu_1'].anchor.set(0.5, 0);
	allObjectsMap['menu_1'].visible = false;
	allObjectsMap['menu_2'] = this.add.sprite(900, 60, 'menu_2');
	allObjectsMap['menu_2'].anchor.set(0.5, 0);
	allObjectsMap['menu_2'].visible = false;
	//menu_1group.add(menu_1);
	var menu_1Btn = this.add.graphics(0, 0);
	menu_1Btn.beginFill(0xFF0000, 0);
	menu_1Btn.drawCircle(980, 110, 50);
	menu_1Btn.inputEnabled = true;
	menu_1Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_1'});
	allObjectsMap['menu_1_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_1_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_1_1Btn'].drawCircle(895, 110, 50);
	allObjectsMap['menu_1_1Btn'].visible = false;
	allObjectsMap['menu_1_1Btn'].inputEnabled = true;
	allObjectsMap['menu_1_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_1_1'});
	//menu_1group.add(menu_1_1Btn);
	allObjectsMap['menu_1_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_1_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_1_2Btn'].drawCircle(895, 180, 50);
	allObjectsMap['menu_1_2Btn'].visible = false;
	allObjectsMap['menu_1_2Btn'].inputEnabled = true;
	allObjectsMap['menu_1_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_1_2'});
	//menu_1group.add(menu_1_2Btn);
	allObjectsMap['menu_1_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_1_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_1_3Btn'].drawCircle(895, 250, 50);
	allObjectsMap['menu_1_3Btn'].visible = false;
	allObjectsMap['menu_1_3Btn'].inputEnabled = true;
	allObjectsMap['menu_1_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_1_3'});
	//menu_1group.add(menu_1_3Btn);
	var menu_2Btn = this.add.graphics(0, 0);
	menu_2Btn.beginFill(0xFF0000, 0);
	menu_2Btn.drawCircle(980, 175, 50);
	menu_2Btn.inputEnabled = true;
	menu_2Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_2'});
	allObjectsMap['menu_2_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_2_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_2_1Btn'].drawCircle(895, 110, 50);
	allObjectsMap['menu_2_1Btn'].visible = false;
	allObjectsMap['menu_2_1Btn'].inputEnabled = true;
	allObjectsMap['menu_2_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_2_1'});
	//menu_1group.add(menu_1_1Btn);
	allObjectsMap['menu_2_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_2_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_2_2Btn'].drawCircle(895, 180, 50);
	allObjectsMap['menu_2_2Btn'].visible = false;
	allObjectsMap['menu_2_2Btn'].inputEnabled = true;
	allObjectsMap['menu_2_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_2_2'});
	//menu_1group.add(menu_1_2Btn);
	allObjectsMap['menu_2_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_2_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_2_3Btn'].drawCircle(895, 250, 50);
	allObjectsMap['menu_2_3Btn'].visible = false;
	allObjectsMap['menu_2_3Btn'].inputEnabled = true;
	allObjectsMap['menu_2_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_2_3'});
	//menu_1group.add(menu_1_3Btn);
};

Level.prototype.openmenu = function() {
	if(allObjectsMap[this.menuName].visible)
	{
		allObjectsMap[this.menuName].visible = false;
		allObjectsMap[this.menuName+'_1Btn'].visible = false;
		allObjectsMap[this.menuName+'_2Btn'].visible = false;
		allObjectsMap[this.menuName+'_3Btn'].visible = false;
	}else
	{
		allObjectsMap[this.menuName].visible = true;
		allObjectsMap[this.menuName+'_1Btn'].visible = true;
		allObjectsMap[this.menuName+'_2Btn'].visible = true;
		allObjectsMap[this.menuName+'_3Btn'].visible = true;
	}
};

Level.prototype.createImg = function() {
	console.log(this.imgName);
	var img = this.game.add.sprite(375, 320, this.imgName);
	img.anchor.set(0.5);
	img.inputEnabled = true;
	img.input.enableDrag();
	img.events.onDragStop.add(this.game.onDragStopEvent, this);
};

Level.prototype.onDragStopEvent = function(sprite, pointer) {
	console.log(sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y);

    if (pointer.x > 40 && pointer.x < 160 && pointer.y>600 && pointer.y<730)
    {
        sprite.destroy();
    }
};

Level.prototype.hitMonkey = function() {

};

Level.prototype.quitGame = function() {
	this.game.state.start("Menu");
};