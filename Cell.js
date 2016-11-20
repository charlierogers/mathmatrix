/**
 * Created by charlie on 11/19/16.
 */

var Cell = function (game, x, y, key) {
    this.valueCell;
    Phaser.Sprite.call(this, game, x, y, key);
};

Cell.prototype = Object.create(Phaser.Sprite.prototype);
Cell.prototype.constructor = Cell;

Cell.prototype.isValueCell = function () {
    return this.valueCell;
};
