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

var ValueCell = function (game, x, y, key) {
    this.value = Math.floor(Math. random()*20);
    //Generates random number from 0 to 3 to represent code for operation
    this.operationCode = Math.floor(Math.random()*4);
    Cell.call(this, game, x, y, key);
};

ValueCell.prototype = Object.create(Cell.prototype);
ValueCell.prototype.constructor = ValueCell;

ValueCell.prototype.getValue = function () {
    return this.value;
};

ValueCell.prototype.getOperationCode = function () {
    return this.operationCode
};
