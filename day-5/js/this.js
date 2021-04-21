console.log('this', this);
 
const li1 = document.createElement('li');
document.body.appendChild(li1);
li1.innerHTML = 'text1';

const li2 = document.createElement('li');
document.body.appendChild(li2);
li2.innerHTML = 'text2';
function removeMe() {
    this.remove();
}

li1.addEventListener('click', removeMe)
li2.addEventListener('click', removeMe)
const user1 = {
    name: 'robot1',
    score: 0,
    greet: greet
}
const user2 = {
    name: 'robot2',
    score: 0,
    greet: greet
}

let score = 0;

function makeEnemy() {
    return ({
        score: 0,
        greet: greet,
    })
}

user1.greet();
user1.greet();
user1.greet();
user2.greet();

function greet() {
    score--;
    console.log('this', this, this.score)
}

greet();

makeEnemy().greet();