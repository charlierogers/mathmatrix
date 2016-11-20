/**
 * Created by charlie on 11/19/16.
 */

var PLAYER_SIZE_RATIO = 0.7;

var Player = function (game, grid, gridRow, gridCol, key) {
    this.score = 0;
    this.grid = grid;
    this.gridRow = gridRow;
    this.gridCol = gridCol;
    var xCoord = grid.xPos + gridRow * grid.cellWidth + (grid.cellWidth / 2);
    var yCoord = grid.yPos + gridCol * grid.cellHeight + (grid.cellHeight / 2);
    Phaser.Sprite.call(this, game, xCoord, yCoord, key);
    this.anchor.setTo(0.5, 0.5);
    this.width = PLAYER_SIZE_RATIO * grid.cellWidth;
    this.height = PLAYER_SIZE_RATIO * grid.cellHeight;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

//TODO: **Check if the player can actually move to the next space by checking if the cell at next position isn't a wall**
//TODO: Update the x and y coordinate for each of these using the gridCellWidth and gridCellHeight
//TODO: Also update the gridRow and gridCol appropriately
//TODO: Run the update score algorithm on the score member variable
Player.prototype.moveUp = function () {
    //TODO: Finish this
    this.y = this.y - (grid.cellHeight);
    console.log("Moving up");

};

Player.prototype.moveDown = function () {
    //TODO: Finish this
    this.y =  this.y  + (grid.cellHeight);
    console.log("Moving down");

}

Player.prototype.moveLeft = function () {
    //TODO: Finish this
    this.x = this.x - ( grid.cellWidth);
    console.log("Moving left");

};

Player.prototype.moveRight = function () {
    //TODO: Finish this
    this.x = this.x - (grid.cellWidth);
    console.log("Moving right");

};

//TODO: These probably won't be used since all collision detection and score updating is done inside Player
Player.prototype.addToScore = function (value) {
    this.score = this.score + value;
};

Player.prototype.subtractFromScore = function (value){
    this.score =  this.score - value;
};

Player.prototype.multiplyScoreBy = function (value){
    this.score =  this.score * value;
};

Player.prototype.divideScoreBy = function (value){
    this.score = this.score / value;
};