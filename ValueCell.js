/**
 * Created by charlie on 11/19/16.
 */

var ValueCell = function (game, x, y, key) {
    this.value = 0;
    Cell.call(this, game, x, y, key);
};

ValueCell.prototype = Object.create(Cell.prototype);
