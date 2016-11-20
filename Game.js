/**
 * Created by charlie on 11/19/16.
 */


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

var player1;
var cursors;
var player2;
var targetvalue;
var grid;
var GRID_WIDTH = 12, GRID_HEIGHT = 12;

function preload() {

    game.load.image('flower', 'assets/flower.png');
    game.load.image('face', 'assets/bluehappy.png');
    game.load.image('wall', 'assets/red_brick_wall_thumb');

}


function create() {

    targetvalue = Math.floor(Math. random()*20);

    //TODO: Make the grid random
    grid = new Grid(0, 0, GRID_WIDTH, GRID_HEIGHT, 50, 50);
    for (var row = 0; row < grid.height; row++) {
        for (var col = 0; col < grid.width; col++) {
            addCellToGridAtLocation(row, col);
        }
    }

    //  Add sprites
    player1 = new Player(game, grid, 0, 0, 'flower');
    game.add.existing(player1);
    player2 = new Player(game, grid, grid.height - 1, grid.width - 1, 'face');
    game.add.existing(player2);


    //TODO: Figure out positioning of text one the scores text gets put in here
    // text = game.add.text(20, 20, 'Math Matrix ', { fill: '#ffffff' });

    cursors = game.input.keyboard.createCursorKeys();

    game.input.keyboard.addKey(Phaser.Keyboard.W);
    game.input.keyboard.addKey(Phaser.Keyboard.S);
    game.input.keyboard.addKey(Phaser.Keyboard.A);
    game.input.keyboard.addKey(Phaser.Keyboard.D);

}

function addCellToGridAtLocation(row, col) {
    var VALUE_CELL = 0;
    var WALL_CELL = 1;
    if (nearTopLeft(row, col) || nearBottomRight(row, col)) {
        grid.addCell(new ValueCell(game), row, col);
    } else {
        var decision = Math.floor(Math.random() * 2);
        if (decision == VALUE_CELL) {
            grid.addCell(new ValueCell(game), row, col)
        } else {
            grid.addCell(new WallCell(game, 'wall'), row, col);
        }
    }
}

function nearTopLeft(row, col) {
    return (row < 3) && (col < 3);
}

function nearBottomRight(row, col) {
    return (row > (grid.height - 4)) && (col > (grid.width - 4));
}


function update() {

    movePlayer1();

    movePlayer2();

}

function movePlayer1() {
//Allow the player to be moved again once this round of moving is done
    if (player1.isMoving) {
        if (!game.input.keyboard.isDown(Phaser.Keyboard.W) && (!game.input.keyboard.isDown(Phaser.Keyboard.S)) &&
            (!game.input.keyboard.isDown(Phaser.Keyboard.A)) && (!game.input.keyboard.isDown(Phaser.Keyboard.D))) {
            player1.isMoving = false
        }
    }

    //Start moving the player if a Key is down and player hasn't started moving already
    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        if (!player1.isMoving) {
            player1.moveUp();
            player1.isMoving = true
        }
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        if (!player1.isMoving) {
            player1.moveDown();
            player1.isMoving = true
        }
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        if (!player1.isMoving) {
            player1.moveLeft();
            player1.isMoving = true
        }
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        if (!player1.isMoving) {
            player1.moveRight();
            player1.isMoving = true
        }
    }
}

function movePlayer2() {
//Allow the player to be moved again once this round of moving is done
    if (player2.isMoving) {
        if (!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
            player2.isMoving = false
        }
    }

    //Start moving the player if a Key is down and player hasn't started moving already
    if (cursors.left.isDown) {
        if (!player2.isMoving) {
            player2.moveLeft();
            player2.isMoving = true
        }
    } else if (cursors.right.isDown) {
        if (!player2.isMoving) {
            player2.moveRight();
            player2.isMoving = true
        }
    }
    if (cursors.up.isDown) {
        if (!player2.isMoving) {
            player2.moveUp();
            player2.isMoving = true
        }
    } else if (cursors.down.isDown) {
        if (!player2.isMoving) {
            player2.moveDown();
            player2.isMoving = true
        }
    }
}


