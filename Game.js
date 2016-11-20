/**
 * Created by charlie on 11/19/16.
 */


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('flower', 'assets/flower.png');
    // game.load.image('sky', 'assets/sunset.png');
    game.load.image('face', 'assets/bluehappy.png');
    game.load.image('wall', 'assets/red_brick_wall_thumb');

}
var player1;
var cursors;
var player2;
var targetvalue;
var grid;
var GRID_WIDTH = 12, GRID_HEIGHT = 12;
var timer = {};

function create() {

    targetvalue = Math.floor(Math.random() * 20);

    // game.add.image(0, 0, 'sky');

    //TODO: Make the grid random
    grid = new Grid(0, 0, GRID_WIDTH, GRID_HEIGHT, 50, 50);
    for (var row = 0; row < grid.height; row++) {
        for (var col = 0; col < grid.width; col++) {
            if ((row < 3 && col < 3) || ((row > (grid.height - 4)) && (col > (grid.width - 4)))) {
                grid.addCell(new ValueCell(game, 0, 0), row, col);
            } else {
                grid.addCell(new WallCell(game, 0, 0, 'wall'), row, col);
            }
        }
    }

    //	Enable p2 physics
    // game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    // game.physics.p2.defaultRestitution = 0.8;

    //  Add sprites
    player1 = new Player(game, grid, 0, 0, 'flower');
    game.add.existing(player1);
    player2 = new Player(game, grid, grid.height - 1, grid.width - 1, 'face');
    game.add.existing(player2);


    //  Enable if for physics. This creates a default rectangular body.
    // game.physics.p2.enable(player1);
    // game.physics.p2.enable(player2);

    //  Modify a few body properties
    // player1.body.setZeroDamping();
    // player1.body.fixedRotation = true;

    // player2.body.setZeroDamping();
    // player2.body.fixedRotation = true;


    //TODO: Figure out positioning of text one the scores text gets put in here
    // text = game.add.text(20, 20, 'Math Matrix ', { fill: '#ffffff' });

    cursors = game.input.keyboard.createCursorKeys();

    game.input.keyboard.addKey(Phaser.Keyboard.W);
    game.input.keyboard.addKey(Phaser.Keyboard.S);
    game.input.keyboard.addKey(Phaser.Keyboard.A);
    game.input.keyboard.addKey(Phaser.Keyboard.D);

    timer.strartTime = new Date();
    timer.totalTime = 120;
    timer.timeElapsed = 0;
    createTimer();
    timer.gameTimer = game.time.events.loop(100, function (){
            updateTimer();
        });




}

function update() {
    // figuring out when they should be moving

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
        // }{
        //
        //     player1.isMoving = false
        // }


    // if (player1.isMoving) {
    //     if  (!game.input.keyboard.isDown(Phaser.Keyboard.S)) {
    //
    //         player1.isMoving = false
    //     }
    //
    //
    // // }
    // if  (player1.isMoving) {
    //     if  (!game.input.keyboard.isDown(Phaser.Keyboard.A)) {
    //
    //         player1.isMoving = false
    //     }
    // }
    // if  (player1.isMoving) {
    //     if  (!game.input.keyboard.isDown(Phaser.Keyboard.D)) {
    //
    //         player1.isMoving = false
    //     }
    // }





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

    if  (player2.isMoving) {
        if  (!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {

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


 function createTimer(){

    timer.timeLabel = game.add.text(game.world.centerX, 100,"00:00",{font: "100px Arial", fill: "#fff"});
    timer.timeLabel.anchor.setTo(0.5, 0);
    timer.timeLabel.align = 'right';
}
 function updateTimer(){

    var currentTime = new Date();
    var timeDifference = timer.startTime.getTime() - currentTime.getTime();
    //Time elapsed in seconds
    timer.timeElapsed = Math.abs(timeDifference / 1000);
    //Time remaining in seconds
    var timeRemaining = timer.totalTime - timer.timeElapsed
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = Math.floor(timRemaining) - (60 * minutes);
    //Display minutes, add a 0 to the start if less than 10
    var result = (minutes < 10) ? "0" + minutes : minutes;
    //Display seconds, add a 0 to the start if less than 10
    result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
    timer.timeLabel.text = result;
    if(timer.timeElapsed >= timer.totalTime){
        console.log("game.stop")
    }
}


