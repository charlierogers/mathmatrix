/**
 * Created by charlie on 11/19/16.
 */

var WallCell = function (game, key) {
    Cell.call(this, game, 0, 0, key);
    this.valueCell = false;
};

WallCell.prototype = Object.create(Cell.prototype);
