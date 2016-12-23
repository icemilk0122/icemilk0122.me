/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Level.prototype = proto;
var allgroup = [];
var allObjectsMap = [];
var imgObjectsMap = [];
var imggroup;
var currentSprite = null;

Level.prototype.create = function() {
	var gamestage = this.add.sprite(this.world.centerX, 0, 'gamestage');
	gamestage.anchor.set(0.5, 0);
	var ok_btn = this.add.sprite(900, 630, 'ok_btn');
	ok_btn.anchor.set(0.5,0);
	ok_btn.inputEnabled = true;
	ok_btn.events.onInputDown.add(this.shareImg);
	var home_btn = this.add.sprite(115, 60, 'home_btn');
	home_btn.anchor.set(0.5,0);
	home_btn.inputEnabled = true;
	home_btn.events.onInputDown.add(this.quitGame);
	var clear_btn = this.add.sprite(115, 180, 'clear_btn');
	clear_btn.anchor.set(0.5,0);
	clear_btn.inputEnabled = true;
	clear_btn.events.onInputDown.add(this.clearAll);
	var menu = this.add.sprite(980, 50, 'menu');
	menu.anchor.set(0.5, 0);
	allgroup['menu_1group'] = this.game.add.group();
	allgroup['menu_2group'] = this.game.add.group();
	allgroup['menu_3group'] = this.game.add.group();
	allgroup['menu_4group'] = this.game.add.group();
	allgroup['menu_5group'] = this.game.add.group();
	allgroup['menu_6group'] = this.game.add.group();
	allgroup['menu_7group'] = this.game.add.group();
	imggroup = this.game.add.group();
	allgroup['menu_1group'].visible = false;
	allgroup['menu_2group'].visible = false;
	allgroup['menu_3group'].visible = false;
	allgroup['menu_4group'].visible = false;
	allgroup['menu_5group'].visible = false;
	allgroup['menu_6group'].visible = false;
	allgroup['menu_7group'].visible = false;
	allObjectsMap['menu_1'] = this.add.sprite(900, 60, 'menu_1');
	allObjectsMap['menu_1'].anchor.set(0.5, 0);
	allObjectsMap['menu_1'].visible = false;
	allObjectsMap['menu_2'] = this.add.sprite(900, 60, 'menu_2');
	allObjectsMap['menu_2'].anchor.set(0.5, 0);
	allObjectsMap['menu_2'].visible = false;
	allObjectsMap['menu_3'] = this.add.sprite(900, 120, 'menu_3');
	allObjectsMap['menu_3'].anchor.set(0.5, 0);
	allObjectsMap['menu_3'].visible = false;
	allObjectsMap['menu_4'] = this.add.sprite(900, 190, 'menu_4');
	allObjectsMap['menu_4'].anchor.set(0.5, 0);
	allObjectsMap['menu_4'].visible = false;
	allObjectsMap['menu_5'] = this.add.sprite(900, 60, 'menu_5');
	allObjectsMap['menu_5'].anchor.set(0.5, 0);
	allObjectsMap['menu_5'].visible = false;
	allObjectsMap['menu_6'] = this.add.sprite(900, 60, 'menu_6');
	allObjectsMap['menu_6'].anchor.set(0.5, 0);
	allObjectsMap['menu_6'].visible = false;
	allObjectsMap['menu_7'] = this.add.sprite(900, 60, 'menu_7');
	allObjectsMap['menu_7'].anchor.set(0.5, 0);
	allObjectsMap['menu_7'].visible = false;
	var menu_1Btn = this.add.graphics(0, 0);
	menu_1Btn.beginFill(0xFF0000, 0);
	menu_1Btn.drawCircle(980, 110, 50);
	menu_1Btn.inputEnabled = true;
	menu_1Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_1'});
	allObjectsMap['menu_1_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_1_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_1_1Btn'].drawCircle(895, 110, 50);
	allObjectsMap['menu_1_1Btn'].inputEnabled = true;
	allObjectsMap['menu_1_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_1_1'});
	allgroup['menu_1group'].add(allObjectsMap['menu_1_1Btn']);
	allObjectsMap['menu_1_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_1_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_1_2Btn'].drawCircle(895, 180, 50);
	allObjectsMap['menu_1_2Btn'].inputEnabled = true;
	allObjectsMap['menu_1_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_1_2'});
	allgroup['menu_1group'].add(allObjectsMap['menu_1_2Btn']);
	allObjectsMap['menu_1_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_1_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_1_3Btn'].drawCircle(895, 250, 50);
	allObjectsMap['menu_1_3Btn'].inputEnabled = true;
	allObjectsMap['menu_1_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_1_3'});
	allgroup['menu_1group'].add(allObjectsMap['menu_1_3Btn']);
	var menu_2Btn = this.add.graphics(0, 0);
	menu_2Btn.beginFill(0xFF0000, 0);
	menu_2Btn.drawCircle(980, 175, 50);
	menu_2Btn.inputEnabled = true;
	menu_2Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_2'});
	allObjectsMap['menu_2_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_2_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_2_1Btn'].drawCircle(895, 110, 50);
	allObjectsMap['menu_2_1Btn'].inputEnabled = true;
	allObjectsMap['menu_2_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_2_1'});
	allgroup['menu_2group'].add(allObjectsMap['menu_2_1Btn']);
	allObjectsMap['menu_2_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_2_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_2_2Btn'].drawCircle(895, 180, 50);
	allObjectsMap['menu_2_2Btn'].inputEnabled = true;
	allObjectsMap['menu_2_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_2_2'});
	allgroup['menu_2group'].add(allObjectsMap['menu_2_2Btn']);
	allObjectsMap['menu_2_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_2_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_2_3Btn'].drawCircle(895, 250, 50);
	allObjectsMap['menu_2_3Btn'].inputEnabled = true;
	allObjectsMap['menu_2_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_2_3'});
	allgroup['menu_2group'].add(allObjectsMap['menu_2_3Btn']);
	//menu_3
	var menu_3Btn = this.add.graphics(0, 0);
	menu_3Btn.beginFill(0xFF0000, 0);
	menu_3Btn.drawCircle(980, 240, 50);
	menu_3Btn.inputEnabled = true;
	menu_3Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_3'});
	allObjectsMap['menu_3_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_3_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_3_1Btn'].drawCircle(895, 170, 50);
	allObjectsMap['menu_3_1Btn'].inputEnabled = true;
	allObjectsMap['menu_3_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_3_1'});
	allgroup['menu_3group'].add(allObjectsMap['menu_3_1Btn']);
	allObjectsMap['menu_3_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_3_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_3_2Btn'].drawCircle(895, 240, 50);
	allObjectsMap['menu_3_2Btn'].inputEnabled = true;
	allObjectsMap['menu_3_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_3_2'});
	allgroup['menu_3group'].add(allObjectsMap['menu_3_2Btn']);
	allObjectsMap['menu_3_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_3_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_3_3Btn'].drawCircle(895, 310, 50);
	allObjectsMap['menu_3_3Btn'].inputEnabled = true;
	allObjectsMap['menu_3_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_3_3'});
	allgroup['menu_3group'].add(allObjectsMap['menu_3_3Btn']);
	//menu_4
	var menu_4Btn = this.add.graphics(0, 0);
	menu_4Btn.beginFill(0xFF0000, 0);
	menu_4Btn.drawCircle(980, 325, 50);
	menu_4Btn.inputEnabled = true;
	menu_4Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_4'});
	allObjectsMap['menu_4_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_4_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_4_1Btn'].drawCircle(895, 260, 50);
	allObjectsMap['menu_4_1Btn'].inputEnabled = true;
	allObjectsMap['menu_4_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_4_1'});
	allgroup['menu_4group'].add(allObjectsMap['menu_4_1Btn']);
	allObjectsMap['menu_4_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_4_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_4_2Btn'].drawCircle(895, 330, 50);
	allObjectsMap['menu_4_2Btn'].inputEnabled = true;
	allObjectsMap['menu_4_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_4_2'});
	allgroup['menu_4group'].add(allObjectsMap['menu_4_2Btn']);
	allObjectsMap['menu_4_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_4_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_4_3Btn'].drawCircle(895, 400, 50);
	allObjectsMap['menu_4_3Btn'].inputEnabled = true;
	allObjectsMap['menu_4_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_4_3'});
	allgroup['menu_4group'].add(allObjectsMap['menu_4_3Btn']);
	//menu_5
	var menu_5Btn = this.add.graphics(0, 0);
	menu_5Btn.beginFill(0xFF0000, 0);
	menu_5Btn.drawCircle(980, 390, 50);
	menu_5Btn.inputEnabled = true;
	menu_5Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_5'});
	allObjectsMap['menu_5_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_5_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_5_1Btn'].drawCircle(895, 110, 50);
	allObjectsMap['menu_5_1Btn'].inputEnabled = true;
	allObjectsMap['menu_5_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_5_1'});
	allgroup['menu_5group'].add(allObjectsMap['menu_5_1Btn']);
	allObjectsMap['menu_5_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_5_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_5_2Btn'].drawCircle(895, 180, 50);
	allObjectsMap['menu_5_2Btn'].inputEnabled = true;
	allObjectsMap['menu_5_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_5_2'});
	allgroup['menu_5group'].add(allObjectsMap['menu_5_2Btn']);
	allObjectsMap['menu_5_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_5_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_5_3Btn'].drawCircle(895, 250, 50);
	allObjectsMap['menu_5_3Btn'].inputEnabled = true;
	allObjectsMap['menu_5_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_5_3'});
	allgroup['menu_5group'].add(allObjectsMap['menu_5_3Btn']);
	allObjectsMap['menu_5_4Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_5_4Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_5_4Btn'].drawCircle(895, 320, 50);
	allObjectsMap['menu_5_4Btn'].inputEnabled = true;
	allObjectsMap['menu_5_4Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_5_4'});
	allgroup['menu_5group'].add(allObjectsMap['menu_5_4Btn']);
	allObjectsMap['menu_5_5Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_5_5Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_5_5Btn'].drawCircle(895, 390, 50);
	allObjectsMap['menu_5_5Btn'].inputEnabled = true;
	allObjectsMap['menu_5_5Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_5_5'});
	allgroup['menu_5group'].add(allObjectsMap['menu_5_5Btn']);
	allObjectsMap['menu_5_6Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_5_6Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_5_6Btn'].drawCircle(895, 460, 50);
	allObjectsMap['menu_5_6Btn'].inputEnabled = true;
	allObjectsMap['menu_5_6Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_5_6'});
	allgroup['menu_5group'].add(allObjectsMap['menu_5_6Btn']);
	//menu_6
	var menu_6Btn = this.add.graphics(0, 0);
	menu_6Btn.beginFill(0xFF0000, 0);
	menu_6Btn.drawCircle(980, 455, 50);
	menu_6Btn.inputEnabled = true;
	menu_6Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_6'});
	allObjectsMap['menu_6_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_6_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_6_1Btn'].drawCircle(895, 110, 50);
	allObjectsMap['menu_6_1Btn'].inputEnabled = true;
	allObjectsMap['menu_6_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_6_1'});
	allgroup['menu_6group'].add(allObjectsMap['menu_6_1Btn']);
	allObjectsMap['menu_6_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_6_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_6_2Btn'].drawCircle(895, 180, 50);
	allObjectsMap['menu_6_2Btn'].inputEnabled = true;
	allObjectsMap['menu_6_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_6_2'});
	allgroup['menu_6group'].add(allObjectsMap['menu_6_2Btn']);
	allObjectsMap['menu_6_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_6_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_6_3Btn'].drawCircle(895, 250, 50);
	allObjectsMap['menu_6_3Btn'].inputEnabled = true;
	allObjectsMap['menu_6_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_6_3'});
	allgroup['menu_6group'].add(allObjectsMap['menu_6_3Btn']);
	allObjectsMap['menu_6_4Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_6_4Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_6_4Btn'].drawCircle(895, 320, 50);
	allObjectsMap['menu_6_4Btn'].inputEnabled = true;
	allObjectsMap['menu_6_4Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_6_4'});
	allgroup['menu_6group'].add(allObjectsMap['menu_6_4Btn']);
	allObjectsMap['menu_6_5Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_6_5Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_6_5Btn'].drawCircle(895, 390, 50);
	allObjectsMap['menu_6_5Btn'].inputEnabled = true;
	allObjectsMap['menu_6_5Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_6_5'});
	allgroup['menu_6group'].add(allObjectsMap['menu_6_5Btn']);
	allObjectsMap['menu_6_6Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_6_6Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_6_6Btn'].drawCircle(895, 460, 50);
	allObjectsMap['menu_6_6Btn'].inputEnabled = true;
	allObjectsMap['menu_6_6Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_6_6'});
	allgroup['menu_6group'].add(allObjectsMap['menu_6_6Btn']);
	allObjectsMap['menu_6_7Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_6_7Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_6_7Btn'].drawCircle(895, 530, 50);
	allObjectsMap['menu_6_7Btn'].inputEnabled = true;
	allObjectsMap['menu_6_7Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_6_7'});
	allgroup['menu_6group'].add(allObjectsMap['menu_6_7Btn']);
	//menu_7
	var menu_7Btn = this.add.graphics(0, 0);
	menu_7Btn.beginFill(0xFF0000, 0);
	menu_7Btn.drawCircle(980, 530, 50);
	menu_7Btn.inputEnabled = true;
	menu_7Btn.events.onInputDown.add(this.openmenu, {menuName: 'menu_7'});
	allObjectsMap['menu_7_1Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_7_1Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_7_1Btn'].drawCircle(895, 170, 50);
	allObjectsMap['menu_7_1Btn'].inputEnabled = true;
	allObjectsMap['menu_7_1Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_7_1'});
	allgroup['menu_7group'].add(allObjectsMap['menu_7_1Btn']);
	allObjectsMap['menu_7_2Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_7_2Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_7_2Btn'].drawCircle(895, 240, 50);
	allObjectsMap['menu_7_2Btn'].inputEnabled = true;
	allObjectsMap['menu_7_2Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_7_2'});
	allgroup['menu_7group'].add(allObjectsMap['menu_7_2Btn']);
	allObjectsMap['menu_7_3Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_7_3Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_7_3Btn'].drawCircle(895, 310, 50);
	allObjectsMap['menu_7_3Btn'].inputEnabled = true;
	allObjectsMap['menu_7_3Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_7_3'});
	allgroup['menu_7group'].add(allObjectsMap['menu_7_3Btn']);
	allObjectsMap['menu_7_4Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_7_4Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_7_4Btn'].drawCircle(895, 380, 50);
	allObjectsMap['menu_7_4Btn'].inputEnabled = true;
	allObjectsMap['menu_7_4Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_7_4'});
	allgroup['menu_7group'].add(allObjectsMap['menu_7_4Btn']);
	allObjectsMap['menu_7_5Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_7_5Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_7_5Btn'].drawCircle(895, 450, 50);
	allObjectsMap['menu_7_5Btn'].inputEnabled = true;
	allObjectsMap['menu_7_5Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_7_5'});
	allgroup['menu_7group'].add(allObjectsMap['menu_7_5Btn']);
	allObjectsMap['menu_7_6Btn'] = this.add.graphics(0, 0);
	allObjectsMap['menu_7_6Btn'].beginFill(0xFF0000, 0);
	allObjectsMap['menu_7_6Btn'].drawCircle(895, 530, 50);
	allObjectsMap['menu_7_6Btn'].inputEnabled = true;
	allObjectsMap['menu_7_6Btn'].events.onInputDown.add(this.createImg, {game:this, imgName: 'menu_7_6'});
	allgroup['menu_7group'].add(allObjectsMap['menu_7_6Btn']);
};

Level.prototype.openmenu = function() {
	if(allObjectsMap[this.menuName].visible)
	{
		allObjectsMap[this.menuName].visible = false;
		allgroup[this.menuName+'group'].visible = false;
	}else
	{
		allObjectsMap[this.menuName].visible = true;
		allgroup[this.menuName+'group'].visible = true;
	}
};

Level.prototype.createImg = function() {
	console.log(this.imgName);
	var img = this.game.add.sprite(375, 320, this.imgName);
	img.anchor.set(0.5);
	img.inputEnabled = true;
	img.input.enableDrag();
	img.events.onDragStop.add(this.game.onDragStopEvent, this);
	img.events.onDragStart.add(this.game.onDragStart, this);
	imggroup.add(img);
};

Level.prototype.shareImg = function() {
	try {
	    var img = game.canvas.toDataURL().split(',')[1];
	} catch(e) {
	    var img = game.canvas.toDataURL().split(',')[1];
	}
	$.ajax({
	    url: 'https://api.imgur.com/3/image',
	    type: 'post',
	    headers: {
	        Authorization: 'Client-ID 3973103798e9b64'
	    },
	    data: {
	        image: img,
					type: 'base64'
	    },
	    dataType: 'json',
	    success: function(response) {
	        if(response.success) {
							FB.ui({
				          app_id: fbAppId,
				          method: 'feed',
				          display: 'popup',
				          name: '啡形家',
				          link: 'https://icemilk0122.github.io/coffee/',
				          picture: response.data.link,
				          description: '最好喝的咖啡就在啡形家'
				      });
	        }
	    }
	});
};

Level.prototype.onDragStart = function(sprite, pointer) {
	currentSprite = sprite;
};

Level.prototype.onDragStopEvent = function(sprite, pointer) {
	console.log(sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y);

    if (pointer.x > 40 && pointer.x < 160 && pointer.y>600 && pointer.y<730)
    {
        sprite.destroy();
    }
		currentSprite = null
};

Level.prototype.onPinch = function(_scale) {
	alert(_scale);
	//currentSprite.scale.set(_scale);
};

Level.prototype.hitMonkey = function() {

};

Level.prototype.clearAll = function() {
	imggroup.removeAll();
};

Level.prototype.quitGame = function() {
	this.game.state.start("Menu");
};
