// built language spec
const yes = 'yes';
const no = false;
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ];
const abcs = ['a', 'b', 'c'];
// flavor of complex objects
const array = ['good to eat', 'some thing else'];
const object = {
    yes: 'it is good to eat',
    method: function() {
        console.log('i am a method because i belong to an object');
        const li = document.createElement('li');
        document.body.appendChild(li);
    }
}
array[0] // 'good to eat'
object[yes] // good to eat

console.log(document.body);



object.method();
object.method();

let score = 0;


function pureAddOne(score) {
    return score + 1;
}
function double( x ) {
    x * 2;
    console.log(2);
   
    console.log('test');
}

score = double(5);
console.log(double(1));

for ( let i = 10; i > 0; i-- ) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    console.log('i', i);
    for (let j = 0; j < 2; j++) {
        console.log('j', j);
    }
}


// arithmetic
console.log(1 + 2, 3 - 4, 5 * 2, 27 / 9, 28 % 9);

score = 10;
score += 10;
score -= 1;
score *= 2;
score /= 2;
console.log('20', score);

console.log('test'.toUpperCase());

// popup methods
// alert('test')
// confirm('is it true?')
const name = prompt('what is your name?');

console.log('your name is', name);