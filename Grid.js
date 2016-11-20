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
    var cells = [[],[]];
};

Grid.prototype.addCell = function (cell, x, y) {
    if (x < this.width && y < this.height) {
        //add the cell to the grid
        cells[x][y] = cell;
        cell.x = this.xPos + this.cellWidth * x;
        cell.y = this.yPos + this.cellHeight * y;
        cell.width = this.cellWidth;
        cell.height = this.cellHeight;
        return true;
    } else {
        return false;
    }
};


