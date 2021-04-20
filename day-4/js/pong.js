// create

const gameArea = document.createElement('div');
const ball = document.createElement('div');
const paddleLeft = document.createElement('div');
const paddleRight = document.createElement('div');


// append
document.body.appendChild(gameArea);
gameArea.appendChild(ball);
gameArea.appendChild(paddleLeft);
gameArea.appendChild(paddleRight);

// set inital size
let gameSize = 200;
let ballWidth =  gameSize / 15;
let paddleWidth = gameSize/ 20;
updateSize();
window.addEventListener('resize', updateSize); // resize if window resize

// function handles size
function updateSize (){
    console.log(document.body.clientWidth);
    gameSize = document.body.clientWidth / 2;
    ballWidth = gameSize / 15;
    paddleWidth = gameSize/ 20;
    paddleHeight = gameSize/ 2;
    rightPaddleX = gameSize - (gameSize/ 20)
    // styles
    gameArea.style.width = px(gameSize);
    gameArea.style.height = px(gameSize);
    gameArea.style.backgroundColor = 'gray';
    gameArea.style.position = 'relative';
    
    ball.style.width = px(ballWidth);
    ball.style.height = px(ballWidth);
    ball.style.backgroundColor = 'lime';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    ball.style.left = px(gameSize/2 - (gameSize/8 / 2));
    ball.style.top =  px(gameSize/2 - (gameSize/8 / 2));

    paddleLeft.style.width = px(paddleWidth);
    paddleLeft.style.height = px(paddleHeight);
    paddleLeft.style.backgroundColor = 'black';
    paddleLeft.style.position = 'absolute';
    paddleLeft.style.left = '0px';
    paddleLeft.style.top = '0px';

    paddleRight.style.width = px(paddleWidth);
    paddleRight.style.height = px(paddleHeight);
    paddleRight.style.backgroundColor = 'black';
    paddleRight.style.position = 'absolute';
    paddleRight.style.left = px( rightPaddleX );
    paddleRight.style.top = '0px';
}


// game logic
let directionX = 1;
let directionY = 1;


function play() {


    if ( parseInt(ball.style.left) > gameSize - ballWidth -20 ) {
        directionX = -1
    }
    if ( parseInt(ball.style.left) < 0) {
        directionX = 1
    }
    if ( parseInt(ball.style.top) > gameSize - ballWidth) {
        directionY = -1
    }
    if ( parseInt(ball.style.top) < 0) {
        directionY = 1
    }

    const speedX = (gameSize / 100 ) * directionX;
    const speedY = (gameSize / 100 ) * directionY;


    moveX(ball, speedX);
    moveY(ball, speedY)
    window.requestAnimationFrame(play);
}

play();


// game controls
window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        (paddleLeft.style.top = parseInt(paddleLeft.style.top) + 20 ) + 'px'
    }
    console.log('key', event.key)
});

function px(number) {
    return number + 'px';
}

function moveX (element, speed) {
    const currentLocation = parseInt(element.style.left);
    const newLocation = currentLocation + speed;
    element.style.left = px(newLocation);
}

function moveY (element, speed) {
    const currentLocation = parseInt(element.style.top);
    const newLocation = currentLocation + speed;
    element.style.top = px(newLocation);
}
