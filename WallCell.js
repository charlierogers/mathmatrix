/**
 * Created by charlie on 11/19/16.
 */

var WallCell = function (game, x, y, key) {
    Cell.call(this, game, x, y, key);
};

WallCell.prototype = Object.create(Cell.prototype);
