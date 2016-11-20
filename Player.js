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
    this.score += value;
};

Player.prototype.subtractToScore = function (value){
    this.score =  this.score - value
};

Player.prototype.multiplyToScore = function (value){
    this.score =  this.score * value
};
Player.prototype.divideToScore = function (value){
    this.score = this.score / value
};