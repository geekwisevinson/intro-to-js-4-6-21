
// function moveButton(x, y, button) {
//     button.style.position = 'absolute';
//     button.style.left = x + 'px';
//     button.style.top = y + 'px';
// }

// function createButton() {
//     const button = document.createElement('button');
//     document.body.appendChild(button)
//     return button;
// }



// const button = createButton();
// const button2 = createButton();

// moveButton(-100, 200, button);
// moveButton(200, 200, button2)


// function checkOverlap() {
    
//     if (getStyles(ball.button).x === getStyles(ball2.button).x) {
//         ball.button.style.zIndex = 1;
//         ball2.button.style.zIndex = 0;
//     }

//     if (getStyles(ball2.button).x === getStyles(ball3.button).x) {
//         ball2.button.style.zIndex = 1;
//         ball3.button.style.zIndex = 0;
//     }

//     console.log()
// }

// function getStyles(button) {
//     return {
//         x: parseInt(getComputedStyle(button).getPropertyValue('left')),
//         y: parseInt(getComputedStyle(button).getPropertyValue('top')),
//         z: parseInt(getComputedStyle(button).getPropertyValue('z-index'))
//     }
// }


// function ballFactory (name, health) {
//     return {
//         button: document.createElement('button'),
//         show: function() {
//             console.log(this.button);
//             document.body.appendChild(this.button);
//             this.button.innerHTML = name;
//         },
//         move: function(x, y, z) {
//             this.button.style.position = 'absolute';
//             this.button.style.left = x + 'px';
//             this.button.style.top = y + 'px';
//             this.button.style.zIndex = z;
//         }
//     }
// }




class Ball {
    button = document.createElement('button');
    health = 100;
    name = 'rock';
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    show() {
        console.log(this);
        document.body.appendChild(this.button);
        this.button.innerHTML = this.name;
    }
    move(x, y, z){
        this.button.style.position = 'absolute';
        this.button.style.left = x + 'px';
        this.button.style.top = y + 'px';
        this.button.style.zIndex = z;
    }
}


const ball = new Ball('PAPER', 200);
const ball2 = new Ball('rock', 200);
const ball3 = new Ball('scissors', 50);

ball.show();
ball.move(100, 100, 100);

ball2.show();
ball2.move(100, 200, 99);

ball3.show();
ball3.move(100, 300, 99);

ball3.move(300, 400, 1)

// checkOverlap();