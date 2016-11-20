## Math Matrix

#### Arbor Hacks 2 Project




## The Idea

We wanted to create a web game for two players that was fast-paced and involved basic math. We thought that this would be both a lot of fun and a challenging brain exercise. And that's how _Math Matrix_ was born!


## Gameplay
At the beginning of the game, a random target number is generated. Each player starts out with a score of zero. The goal of the game is to navigate a map filled with numbers and walls. Each cell that contains a number also contains an operation (either add, subtract, multiply, or divide). For instance, imagine that one of these cells contained +5. When a player visits this cell, five will be added to their score. Similarly, if they visited a cell containing -3, three would be subtracted from their score. 

The game ends when either time runs out or one player's score perfectly matches the target value. If time runs out before one of the players reaches the target value, the player with the score closest to the target value wins.


## Technical Details
We decided to make the game entirely client side since two of our team members were just getting started with Web Dev. The majority of the code is in Javascript, and we use the Phaser.js animation framework to handle some of the basics of making a game such as sprites, timers, and a game loop.

## Screenshot
![mathmatrix_game_over](https://cloud.githubusercontent.com/assets/10411526/20466774/5cc21772-af47-11e6-93d7-314c75ece4e3.png)
_Game over when time runs out. Player 1 wins._
