let score = 0;
const equations = [];
const input = document.createElement("input");

document.body.appendChild(input);



class Equation {
    element = document.createElement('button');
    types = ['+', '-', '*', '/'];
    numbers = [];
    level = 10;
    type = '+';
    answer = 0;
    constructor() {
        this.show();
        this.numbers.push(this.getRandomInt());
        this.numbers.push(this.getRandomInt());
        this.type = this.types[this.getRandomType()]
        console.log(this);

        this.getAnswer();
        this.element.innerHTML = `${this.numbers[0]} ${this.type} ${this.numbers[1]}`;

    }
    show() {
        document.body.appendChild(this.element);
        this.element.style.position = 'absolute';
        this.element.style.top = 0 + 'px';
    }

    getRandomInt() {
        return Math.ceil(Math.random() * this.level);
    }
    getRandomType() {
        const random = Math.floor(Math.random() * this.types.length);
        console.log(random);
        return random;
    }

    getAnswer() {
        switch(this.type) {
            case '+':
                return this.answer = this.numbers[0] + this.numbers[1];
            case '-':
                return this.answer = this.numbers[0] - this.numbers[1];
            case '*':
                return this.answer = this.numbers[0] * this.numbers[1];
            case '/':
                return this.answer = this.numbers[0] / this.numbers[1];
        }
    }

    drop() {
        const current = (parseInt(this.element.style.top) + 1);
         this.element.style.top = current + 'px';
        console.log(this.answer);
         if (current > 400 || input.value == this.answer) {
             this.element.remove();
             equations.shift();
             equations.push(new Equation());
             input.value = '';
         }
    }
}

equations.push(new Equation());

function gameLoop() {
    equations.forEach( equation => {
        equation.drop();
    })

    window.requestAnimationFrame(gameLoop)
}

gameLoop();