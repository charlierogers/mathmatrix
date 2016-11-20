/**
 * Created by charlie on 11/19/16.
 */

var WallCell = function (game, x, y, key) {
    Cell.call(this, game, x, y, key);
    this.valueCell = false;
};

WallCell.prototype = Object.create(Cell.prototype);
