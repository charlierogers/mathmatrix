/**
 * Created by charlie on 11/19/16.
 */


var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

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








    //TODO: Make the grid random
    grid = new Grid(200, 100, GRID_WIDTH, GRID_HEIGHT, 50, 50);
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


//TargetValue Stuff
    targetvalue = Math.floor(Math.random() * 20);

    var style = {
        font: "25px Arial",
        fill: "#ffffff", /*wordWrap: true,*/
        wordWrapWidth: this.width,
        align: "center",
        backgroundColor: "#000000"
    };
    var text = game.add.text(455, 35, "Target Value \n" + targetvalue, style);

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
    // figuring out when they should be moving

        //Score figuring out

        //Score = Score (Operation) (Number of Value Cell)


        //Targetvalue Project


//    Player 1 Score


        var style = {
            font: "25px Arial",
            fill: "#ffffff", /*wordWrap: true,*/
            wordWrapWidth: this.width,
            align: "center",
            backgroundColor: "#000000"
        };
        var text = game.add.text(50, 35, "Player 1 \n" + player1.getScore(), style);


//     Player 2 Score


        var style = {
            font: "25px Arial",
            fill: "#ffffff", /*wordWrap: true,*/
            wordWrapWidth: this.width,
            align: "center",
            backgroundColor: "#000000"
        };
        var text = game.add.text(835, 35, "Player 2 \n" + player2.getScore(), style);


        //how they are moving

    //PLAYER 1 MOTION
    //how they are moving
    // player1.body.setZeroVelocity();

        //TODO: Change all the move statements so that they're inside of Player and then call the Player.move<DIRECTION> function
        //TODO: All collision detection will be done in Player

        if (player1.isMoving) {
            if (!game.input.keyboard.isDown(Phaser.Keyboard.W) && (!game.input.keyboard.isDown(Phaser.Keyboard.S)) && (!game.input.keyboard.isDown(Phaser.Keyboard.A)) && (!game.input.keyboard.isDown(Phaser.Keyboard.D))) {
                if (!game.input.keyboard.isDown(Phaser.Keyboard.D)) {

                    player1.isMoving = false
                }
            }
        }


        if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            // player1.moveUp(400);
            if (!player1.isMoving) {
                player1.moveUp();
                player1.isMoving = true
            }
        }


        else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            // player1.moveDown(400);
            if (!player1.isMoving) {
                player1.moveDown();
                player1.isMoving = true
            }
        }


        if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            // player1.moveLeft(400);
            if (!player1.isMoving) {
                player1.moveLeft();
                player1.isMoving = true
            }
        }


        else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            // player1.moveRight(400);
            if (!player1.isMoving) {
                player1.moveRight();
                player1.isMoving = true
            }
        }


        // player2.body.setZeroVelocity();
    //PLAYER 2 MOTION



    // player2.body.setZeroVelocity();

        if (player2.isMoving) {
            if (!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {

                player2.isMoving = false
            }
        }


        if (cursors.left.isDown) {
            if (!player2.isMoving) {
                player2.moveLeft();
                player2.isMoving = true
            }
        }


        else if (cursors.right.isDown) {
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
        }

        else if (cursors.down.isDown) {
            if (!player2.isMoving) {
                player2.moveDown();
                player2.isMoving = true
            }
        }

    }


