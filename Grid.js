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

Grid.prototype.addCell = function (cell, row, col) {
    if (col < this.width && row < this.height) {
        //add the cell to the grid
        if (row >= this.cells.length) {
            this.cells.push([]);
        }
        this.cells[row][col] = cell;
        cell.x = this.xPos + this.cellWidth * col;
        cell.y = this.yPos + this.cellHeight * row;
        cell.width = this.cellWidth;
        cell.height = this.cellHeight;
        cell.setGridPosition(row, col);
        cell.setGridCellSize(this.cellWidth, this.cellHeight);
        cell.game.add.existing(cell);
        return true;
    } else {
        return false;
    }
};


