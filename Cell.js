/**
 * Created by charlie on 11/19/16.
 */

var Cell = function (game, x, y, key) {
    Phaser.Sprite.call(game, x, y, key);
};

Cell.prototype = Object.create(Phaser.Sprite.prototype);
