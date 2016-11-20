/**
 * Created by charlie on 11/19/16.
 */

var Player = function (game, x, y, key) {
    this.score = 0;
    this.gridRow = 0;
    this.gridCol = 0;
    this.gridCellWidth = 0;
    this.gridCellHeight = 0;
    Phaser.Sprite.call(this, game, x, y, key);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.setGridPosition = function (gridRow, gridCol) {
    this.gridRow = gridRow;
    this.gridCol = gridCol;
};

Player.prototype.setGridCellSize = function (cellWidth, cellHeight) {
    this.gridCellWidth = cellWidth;
    this.gridCellHeight = cellHeight;
};

//TODO: Update the x and y coordinate for each of these using the gridCellWidth and gridCellHeight
//TODO: Also update the gridRow and gridCol appropriately
Player.prototype.moveUp = function () {

};

Player.prototype.moveDown = function () {

};

Player.prototype.moveLeft = function () {

};

Player.prototype.moveRight = function () {

};

Player.prototype.addToScore = function (value) {
    this.score = this.score + value;
};

Player.prototype.subtractFromScore = function (value){
    this.score =  this.score - value
};

Player.prototype.multiplyScoreBy = function (value){
    this.score =  this.score * value
};

Player.prototype.divideScoreBy = function (value){
    this.score = this.score / value
};