/**
 * Created by charlie on 11/19/16.
 */


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('atari', 'assets/atari130xe.png');
    game.load.image('sky', 'assets/sunset.png');
    game.load.image('face', 'assets/happy.jpg')
}

var player1;
var cursors;
var player2;
var wasd;

function create() {

    game.add.image(0, 0, 'sky');

    //	Enable p2 physics
    game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    game.physics.p2.defaultRestitution = 0.8;


    //  Add a sprite
    player1= game.add.sprite(200, 200, 'atari');
    player2= game.add.sprite(300,300, 'face');
    player2.scale.setTo(.1,.1);

    //  Enable if for physics. This creates a default rectangular body.

    game.physics.p2.enable(player1);
    game.physics.p2.enable(player2);

    //  Modify a few body properties
    player1.body.setZeroDamping();
    player1.body.fixedRotation = true;

    player2.body.setZeroDamping();
    player2.body.fixedRotation = true;


    text = game.add.text(20, 20, 'move with ', { fill: '#ffffff' });

    cursors = game.input.keyboard.createCursorKeys();

    //
    // wasd = {
    //     up: game.input.keyboard.addKey(Phaser.Keyboard.W),
    //     down: game.input.keyboard.addKey(Phaser.Keyboard.S),
    //     left: game.input.keyboard.addKey(Phaser.Keyboard.A),
    //     right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    // }
        game.input.keyboard.addKey(Phaser.Keyboard.W);
        game.input.keyboard.addKey(Phaser.Keyboard.S);
        game.input.keyboard.addKey(Phaser.Keyboard.A);
        game.input.keyboard.addKey(Phaser.Keyboard.D);

}

function update() {

    // console.log ("up: " + wasd.up.isDown);
    // console.log("down:" + wasd.down.isDown);
    // console.log("right:" + wasd.right.isDown);
    // console.log("left" + wasd.left.isDown);

    player2.body.setZeroVelocity();


    if (game.input.keyboard.isDown(Phaser.Keyboard.S))
    {

        player2.body.moveDown(400)
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {

        player2.body.moveRight(400);
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {

        player2.body.moveLeft(400);
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {

        player2.body.moveUp(400);
    }









    player1.body.setZeroVelocity();

    if (cursors.left.isDown)
    {
        player1.body.moveLeft(400);
    }
    else if (cursors.right.isDown)
    {
        player1.body.moveRight(400);
    }

    if (cursors.up.isDown)
    {
        player1.body.moveUp(400);
    }
    else if (cursors.down.isDown)
    {

        player1.body.moveDown(400);
    }

}

