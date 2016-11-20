/**
 * Created by charlie on 11/19/16.
 */

var Grid = function (x, y, width, height, cellWidth, cellHeight) {
    this.xPos = x;
    this.yPos = y;
    this.width = width;
    this.height = height;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.cells = [[]];
};

Grid.prototype.addCell = function (cell, x, y) {
    if (x < this.width && y < this.height) {
        //add the cell to the grid
        if (y >= this.cells.length) {
            this.cells.push([]);
        }
        this.cells[y][x] = cell;
        cell.x = this.xPos + this.cellWidth * x;
        cell.y = this.yPos + this.cellHeight * y;
        cell.width = this.cellWidth;
        cell.height = this.cellHeight;
        cell.game.add.existing(cell);
        return true;
    } else {
        return false;
    }
};


