// Enemies our player must avoid
var Enemy = function(enemyNum) { //enemy number: to make sure on which line the bug should be first rendered
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.random() * (300 - 2) + 5; //During first page load enemy is present anywhere on x-axis on canvas
    this.speed = 0; // keeps track of current speed.
    this.y =  enemyNum === 1 ? 55 : (enemyNum === 2 ? 140 : 225); //logic for which line the enemy should be on
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x >= 500 || this.speed === 0) {
        this.speed = (Math.random() * 3) + 2; //changes the speed of enemy after it leaves the canvas
        this.x = -200;
    }else {
        this.x = Math.floor((Math.random() * dt) + this.speed) + this.x; //logic for moving enemies
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    //initial position of character
    this.x = 200;
    this.y = 395;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    //collision logic
    for(i=0; i < allEnemies.length; i++){
        var temp = Math.ceil(allEnemies[i].x);
        if(temp >= this.x - 90 && temp <= this.x + 80 && this.y === allEnemies[i].y) {
            this.x = 200;
            this.y = 395;
        }
    }
    //win logic. once user wins position will reset.
    if(this.y === -30) {
        setTimeout(() => {
            this.x = 200;
            this.y = 395;                
        }, 800);
    }
};

Player.prototype.render = function(place) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) { 
    //logic for key inputs
    if(key === 'up') {
        this.y = this.y === -30 ? this.y : this.y - 85;
        this.update();
    }else if(key === 'down') {
        this.y = this.y === 395 ? this.y : this.y + 85;
    } else if(key === 'right') {
        this.x = this.x === 400 ? 0 : this.x + 100;
    } else if(key === 'left') {
        this.x = this.x === 0 ? 400 : this.x - 100;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [new Enemy(1), new Enemy(2), new Enemy(3), new Enemy(1), new Enemy(2), new Enemy(3)];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
