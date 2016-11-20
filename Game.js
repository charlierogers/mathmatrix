/**
 * Created by charlie on 11/19/16.
 */


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('flower', 'assets/flower.png');
    game.load.image('sky', 'assets/sunset.png');
    game.load.image('face', 'assets/bluehappy.png');
    game.load.image('wall', 'assets/red_brick_wall_thumb')

}
var player1;
var cursors;
var player2;
var targetvalue;
var grid;


function create() {

    targetvalue = Math.floor(Math. random()*20);

    game.add.image(0, 0, 'sky');

    //	Enable p2 physics
    game.physics.startSystem(Phaser.Physics.P2JS);

    grid = new Grid(0, 0, 12, 12, 50, 50);
    for (var row = 0; row < grid.height; row++) {
        for (var col = 0; col < grid.width; col++) {
            grid.addCell(new WallCell(game, 0, 0, 'wall'), row, col);
        }
    }

    //  Make things a bit more bouncey
    game.physics.p2.defaultRestitution = 0.8;

    //  Add sprites
    player1 = new Player(game, 25, 25, 'flower');
    game.add.existing(player1);
    player1.anchor.setTo(.05,.05);
    player1.scale.setTo(.05,.05);
    player2 = new Player(game, 575, 575, 'face');
    game.add.existing(player2);
    player2.scale.setTo(.1,.1);


    //  Enable if for physics. This creates a default rectangular body.
    game.physics.p2.enable(player1);
    game.physics.p2.enable(player2);

    //  Modify a few body properties
    player1.body.setZeroDamping();
    player1.body.fixedRotation = true;

    player2.body.setZeroDamping();
    player2.body.fixedRotation = true;


    text = game.add.text(20, 20, 'Math Matrix ', { fill: '#ffffff' });

    cursors = game.input.keyboard.createCursorKeys();

        game.input.keyboard.addKey(Phaser.Keyboard.W);
        game.input.keyboard.addKey(Phaser.Keyboard.S);
        game.input.keyboard.addKey(Phaser.Keyboard.A);
        game.input.keyboard.addKey(Phaser.Keyboard.D);

}

function update() {



    // figuring out when they should be moving





    //how they are moving
    player2.body.setZeroVelocity();


    if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {

        player2.body.moveDown(400)
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {

        player2.body.moveRight(400);
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {

        player2.body.moveLeft(400);
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {

        player2.body.moveUp(400);

    }


    player1.body.setZeroVelocity();

    if (cursors.left.isDown) {
        player1.body.moveLeft(400);
    }
    else if (cursors.right.isDown) {
        player1.body.moveRight(400);
    }

    if (cursors.up.isDown) {
        player1.body.moveUp(400);
    }
    else if (cursors.down.isDown) {

        player1.body.moveDown(400);
    }

}

