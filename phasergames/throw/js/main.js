var Achicken = Achicken || {};

Achicken.game = new Phaser.Game(1024, 768, Phaser.AUTO);

Achicken.game.state.add('Boot', Achicken.BootState);
Achicken.game.state.add('Preload', Achicken.PreloadState);
Achicken.game.state.add('Game', Achicken.GameState);

Achicken.game.state.start('Boot');
