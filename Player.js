/**
 * Created by charlie on 11/19/16.
 */

var Player = function (game, x, y, key) {
    this.score = 0;
    Phaser.Sprite.call(this, game, x, y, key);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.addToScore = function (value) {
    //TODO: Implement this function
};

//TODO: Implement the rest of the score modifying functions