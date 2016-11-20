/**
 * Created by charlie on 11/19/16.
 */

/*
 * OPERATION CODES:
 *
 * ADD:         0
 * SUBTRACT:    1
 * MULTIPLY:    2
 * DIVIDE:      3
 */

var ValueCell = function (game) {
    Cell.call(this, game, 0, 0);
    this.valueCell = true;
    this.value = Math.floor(Math. random()*20);
    //Generates random number from 0 to 3 to represent code for operation
    this.operationCode = Math.floor(Math.random()*4);
    this.operation;
    if (this.operationCode == constants.SUBTRACT) {
        this.operation = "-";
    } else if (this.operationCode == constants.MULTIPLY) {
        this.operation = "\u00d7";
    } else if (this.operationCode == constants.DIVIDE) {
        this.operation = "\u00f7";
    } else {
        this.operation = "+";
    }
    var style = { font: "14px Arial", fill: "#ffffff", /*wordWrap: true,*/ wordWrapWidth: this.width, align: "center", backgroundColor: "#000000" };
    this.text = new Phaser.Text(game, 0, 0, this.operation + this.value, style);
    this.addChild(this.text);
    this.text.anchor.set(0.5);
    this.text.x = Math.floor(this.width / 2);
    this.text.y = Math.floor(this.height / 2);
};

ValueCell.prototype = Object.create(Cell.prototype);
ValueCell.prototype.constructor = ValueCell;

ValueCell.prototype.getValue = function () {
    return this.value;
};

ValueCell.prototype.getOperationCode = function () {
    return this.operationCode
};
